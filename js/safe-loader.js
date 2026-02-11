// Combined safe loader for TOC and Content JS files.
// Usage: <script src="../js/safe-loader.js" data-page="springboot" data-load="toc,content"></script>
// data-page: base name for JS files (e.g., 'springboot' -> '../js/springboot-toc.js' and '../js/springboot-content.js')
// data-load: comma-separated list: 'toc', 'content' (default: both)
(function(){
    'use strict';

    function getAttr(script, name) { return script ? script.getAttribute(name) : null; }

    function extractVar(text, varName) {
        const re = new RegExp('const\\s+' + varName + '\\s*=\\s*`([\\s\\S]*?)`\\s*;', 'm');
        const m = text.match(re);
        return m ? m[1] : null;
    }

    function injectTo(id, html) {
        const el = document.getElementById(id);
        if (!el) return;
        el.innerHTML = html;
    }

    function camelCandidates(base, suffix) {
        // Generate likely variable names: base + suffix, base without separators + suffix, camelCase + suffix
        const noSep = base.replace(/[-_\s]+/g, '');
        const camel = base.replace(/[-_]+(.)/g, (m, c) => c.toUpperCase());
        return [base + suffix, noSep + suffix, camel + suffix];
    }

    function fetchText(url) {
        return fetch(url).then(resp => { if (!resp.ok) throw new Error('HTTP ' + resp.status); return resp.text(); });
    }

    function xhrText(url) {
        return new Promise((resolve, reject) => {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url, true);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200 || (xhr.status === 0 && xhr.responseText)) resolve(xhr.responseText);
                        else reject(new Error('XHR status ' + xhr.status));
                    }
                };
                xhr.onerror = function(e) { reject(e); };
                xhr.send();
            } catch (e) { reject(e); }
        });
    }

    function tryLoad(url) {
        return fetchText(url).catch(err => {
            // fall back to XHR
            return xhrText(url);
        });
    }

    // Find script tag referencing this file
    const scripts = document.getElementsByTagName('script');
    let me = null;
    for (let i = scripts.length - 1; i >= 0; i--) {
        const s = scripts[i];
        if (s.src && s.src.indexOf('safe-loader.js') !== -1) { me = s; break; }
    }
    if (!me) return;

    const page = getAttr(me, 'data-page');
    if (!page) { console.error('safe-loader: missing data-page attribute'); return; }
    const loadAttr = (getAttr(me, 'data-load') || 'toc,content').split(',').map(s => s.trim().toLowerCase());

    const tasks = [];

    if (loadAttr.indexOf('toc') !== -1) {
        const tocUrl = '../js/' + page + '-toc.js';
        const tocTask = tryLoad(tocUrl).then(text => {
            const candidates = camelCandidates(page, 'TocData');
            let found = null;
            for (let v of candidates) {
                const html = extractVar(text, v);
                if (html !== null) { found = html; break; }
            }
            if (found !== null) injectTo('toc', found);
            else console.warn('safe-loader: TOC variable not found in', tocUrl);
        }).catch(err => console.warn('safe-loader: failed to load toc', tocUrl, err));
        tasks.push(tocTask);
    }

    if (loadAttr.indexOf('content') !== -1) {
        const contentUrl = '../js/' + page + '-content.js';
        const contentTask = tryLoad(contentUrl).then(text => {
            const candidates = camelCandidates(page, 'ContentData');
            let found = null;
            for (let v of candidates) {
                const html = extractVar(text, v);
                if (html !== null) { found = html; break; }
            }
            if (found !== null) injectTo('content', found);
            else console.warn('safe-loader: Content variable not found in', contentUrl);
        }).catch(err => console.warn('safe-loader: failed to load content', contentUrl, err));
        tasks.push(contentTask);
    }

    // Wait for both to finish (not strictly necessary) then trigger any UI init if needed
    Promise.all(tasks).then(() => {
        // Optionally dispatch event for other scripts (e.g., main.js) to know content is ready
        try { window.dispatchEvent(new CustomEvent('pageContentLoaded', { detail: { page } })); } catch (e) {}
    });

})();

