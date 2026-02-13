// Reactquestionanswers - Content Data
const reactquestionanswersContentData = `<ul>
<li><a href="#react-interview-questions--answers">React Interview Questions &amp; Answers</a></li>
<li><a href="#table-of-contents">Table of Contents</a></li>
<li><a href="#table-of-contents-1">Table of Contents</a></li>
<li><a href="#core-react">Core React</a></li>
<li><a href="#react-router">React Router</a></li>
<li><a href="#react-internationalization">React Internationalization</a></li>
<li><a href="#react-testing">React Testing</a></li>
<li><a href="#react-redux">React Redux</a></li>
<li><a href="#react-native">React Native</a></li>
<li><a href="#react-supported-libraries--integration">React supported libraries &amp; Integration</a></li>
<li><a href="#miscellaneous">Miscellaneous</a></li>
<li><a href="#old-qa">Old Q&amp;A</a></li>
<li><a href="#disclaimer">Disclaimer</a></li>
</ul>
<h1 id="react-interview-questions-answers">React Interview Questions &amp; Answers</h1>
<blockquote>Click :star:if you like the project. Pull Request are highly appreciated. Follow me <a href="https://twitter.com/SudheerJonna">@SudheerJonna</a> for technical updates.</blockquote>
<hr>
<div>
<p align="center">
  <a href=https://react.gg/?s=rjsiq>
    <img src="./images/collab/uidev-banner4x.png" alt="React interview" width="100%">
  </a>
</p>
</div>
<hr>
<div>
<p align="center">
  <a href=https://zerotomastery.io/?utm_source=github&utm_medium=sponsor&utm_campaign=reactjs-interview-questions>
    <img src=https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:70/https://www.filepicker.io/api/file/AKYtjj5SSGyJuyZrkAB2 alt="ZTM Logo" width="100" height="50">
  </a>
    <ol>
      <li>I recommend this <a href="https://links.zerotomastery.io/react_sudheer">React course</a> if you’re serious about learning React and want to go beyond the basics</li>
      <li>Want to ace your coding interview and get hired at your dream company? <a href="http://links.zerotomastery.io/mci_sudheer">Take this coding interview bootcamp</a></li>
    </ol>
  </p>
</div>
<hr>
<p><strong>Note:</strong> This repository is specific to ReactJS. Please check <a href="https://github.com/sudheerj/javascript-interview-questions">Javascript Interview questions</a> for core javascript questions and <a href="https://github.com/sudheerj/datastructures-algorithms">DataStructures and Algorithms</a> for DSA related questions or problems.</p>
<h3 id="table-of-contents">Table of Contents</h3>
<details open>
<summary>
<p>Hide/Show table of contents</p>
</summary>
<table>
<thead><tr>
<th>No.</th>
<th>Questions</th>
</tr></thead><tbody>
<tr>
<td><strong>Core React</strong></td>
</tr>
<tr>
<td>1</td>
<td><a href="#what-is-react">What is React?</a></td>
</tr>
<tr>
<td>2</td>
<td><a href="#What-is-the-history-behind-React-evolution">What is the history behind React evolution?</a></td>
</tr>
<tr>
<td>3</td>
<td><a href="#what-are-the-major-features-of-react">What are the major features of React?</a></td>
</tr>
<tr>
<td>4</td>
<td><a href="#what-is-jsx">What is JSX?</a></td>
</tr>
<tr>
<td>5</td>
<td><a href="#what-is-the-difference-between-element-and-component">What is the difference between Element and Component?</a></td>
</tr>
<tr>
<td>6</td>
<td><a href="#how-to-create-components-in-react">How to create components in React?</a></td>
</tr>
<tr>
<td>7</td>
<td><a href="#when-to-use-a-class-component-over-a-function-component">When to use a Class Component over a Function Component?</a></td>
</tr>
<tr>
<td>8</td>
<td><a href="#what-are-pure-components">What are Pure Components?</a></td>
</tr>
<tr>
<td>9</td>
<td><a href="#what-is-state-in-react">What is state in React?</a></td>
</tr>
<tr>
<td>10</td>
<td><a href="#what-are-props-in-react">What are props in React?</a></td>
</tr>
<tr>
<td>11</td>
<td><a href="#what-is-the-difference-between-state-and-props">What is the difference between state and props?</a></td>
</tr>
<tr>
<td>12</td>
<td><a href="#what-is-the-difference-between-html-and-react-event-handling">What is the difference between HTML and React event handling?</a></td>
</tr>
<tr>
<td>13</td>
<td><a href="#what-are-synthetic-events-in-react">What are synthetic events in React?</a></td>
</tr>
<tr>
<td>14</td>
<td><a href="#what-are-inline-conditional-expressions">What are inline conditional expressions?</a></td>
</tr>
<tr>
<td>15</td>
<td><a href="#what-is-key-prop-and-what-is-the-benefit-of-using-it-in-arrays-of-elements">What is &quot;key&quot; prop and what is the benefit of using it in arrays of elements?</a></td>
</tr>
<tr>
<td>16</td>
<td><a href="#what-is-virtual-dom">What is Virtual DOM?</a></td>
</tr>
<tr>
<td>17</td>
<td><a href="#how-virtual-dom-works">How Virtual DOM works?</a></td>
</tr>
<tr>
<td>18</td>
<td><a href="#what-is-the-difference-between-shadow-dom-and-virtual-dom">What is the difference between Shadow DOM and Virtual DOM?</a></td>
</tr>
<tr>
<td>19</td>
<td><a href="#what-is-react-fiber">What is React Fiber?</a></td>
</tr>
<tr>
<td>20</td>
<td><a href="#what-is-the-main-goal-of-react-fiber">What is the main goal of React Fiber?</a></td>
</tr>
<tr>
<td>21</td>
<td><a href="#what-are-controlled-components">What are controlled components?</a></td>
</tr>
<tr>
<td>22</td>
<td><a href="#what-are-uncontrolled-components">What are uncontrolled components?</a></td>
</tr>
<tr>
<td>23</td>
<td><a href="#what-is-the-difference-between-createelement-and-cloneelement">What is the difference between createElement and cloneElement?</a></td>
</tr>
<tr>
<td>24</td>
<td><a href="#what-is-lifting-state-up-in-react">What is Lifting State Up in React?</a></td>
</tr>
<tr>
<td>25</td>
<td><a href="#what-are-higher-order-components">What are Higher-Order components?</a></td>
</tr>
<tr>
<td>26</td>
<td><a href="#what-is-children-prop">What is children prop?</a></td>
</tr>
<tr>
<td>27</td>
<td><a href="#how-to-write-comments-in-react">How to write comments in React?</a></td>
</tr>
<tr>
<td>28</td>
<td><a href="#what-is-reconciliation">What is reconciliation?</a></td>
</tr>
<tr>
<td>29</td>
<td><a href="#does-the-lazy-function-support-named-exports">Does the lazy function support named exports?</a></td>
</tr>
<tr>
<td>30</td>
<td><a href="#why-react-uses-classname-over-class-attribute">Why React uses className over class attribute?</a></td>
</tr>
<tr>
<td>31</td>
<td><a href="#what-are-fragments">What are fragments?</a></td>
</tr>
<tr>
<td>32</td>
<td><a href="#why-fragments-are-better-than-container-divs">Why fragments are better than container divs?</a></td>
</tr>
<tr>
<td>33</td>
<td><a href="#what-are-portals-in-react">What are portals in React?</a></td>
</tr>
<tr>
<td>34</td>
<td><a href="#what-are-stateless-components">What are stateless components?</a></td>
</tr>
<tr>
<td>35</td>
<td><a href="#what-are-stateful-components">What are stateful components?</a></td>
</tr>
<tr>
<td>36</td>
<td><a href="#how-to-apply-validation-on-props-in-react">How to apply validation on props in React?</a></td>
</tr>
<tr>
<td>37</td>
<td><a href="#what-are-the-advantages-of-react">What are the advantages of React?</a></td>
</tr>
<tr>
<td>38</td>
<td><a href="#what-are-the-limitations-of-react">What are the limitations of React?</a></td>
</tr>
<tr>
<td>39</td>
<td><a href="#what-are-the-recommended-ways-for-static-type-checking">What are the recommended ways for static type checking?</a></td>
</tr>
<tr>
<td>40</td>
<td><a href="#what-is-the-use-of-react-dom-package">What is the use of react-dom package?</a></td>
</tr>
<tr>
<td>41</td>
<td><a href="#what-is-reactdomserver">What is ReactDOMServer?</a></td>
</tr>
<tr>
<td>42</td>
<td><a href="#how-to-use-innerhtml-in-react">How to use InnerHtml in React?</a></td>
</tr>
<tr>
<td>43</td>
<td><a href="#how-to-use-styles-in-react">How to use styles in React?</a></td>
</tr>
<tr>
<td>44</td>
<td><a href="#how-events-are-different-in-react">How events are different in React?</a></td>
</tr>
<tr>
<td>45</td>
<td><a href="#what-is-the-impact-of-indexes-as-keys">What is the impact of indexes as keys?</a></td>
</tr>
<tr>
<td>46</td>
<td><a href="#how-do-you-conditionally-render-components">How do you conditionally render components?</a></td>
</tr>
<tr>
<td>47</td>
<td><a href="#why-we-need-to-be-careful-when-spreading-props-on-dom-elements">Why we need to be careful when spreading props on DOM elements??</a></td>
</tr>
<tr>
<td>48</td>
<td><a href="#how-do-you-memoize-a-component">How do you memoize a component?</a></td>
</tr>
<tr>
<td>49</td>
<td><a href="#how-you-implement-server-side-rendering-or-ssr">How you implement Server-Side Rendering or SSR?</a></td>
</tr>
<tr>
<td>50</td>
<td><a href="#how-to-enable-production-mode-in-react">How to enable production mode in React?</a></td>
</tr>
<tr>
<td>51</td>
<td><a href="#do-hooks-replace-render-props-and-higher-order-components">Do Hooks replace render props and higher order components?</a></td>
</tr>
<tr>
<td>52</td>
<td><a href="#what-is-a-switching-component">What is a switching component?</a></td>
</tr>
<tr>
<td>53</td>
<td><a href="#what-are-react-mixins">What are React Mixins?</a></td>
</tr>
<tr>
<td>54</td>
<td><a href="#what-are-the-pointer-events-supported-in-react">What are the Pointer Events supported in React?</a></td>
</tr>
<tr>
<td>55</td>
<td><a href="#why-should-component-names-start-with-capital-letter">Why should component names start with capital letter?</a></td>
</tr>
<tr>
<td>56</td>
<td><a href="#are-custom-dom-attributes-supported-in-react-v16">Are custom DOM attributes supported in React v16?</a></td>
</tr>
<tr>
<td>57</td>
<td><a href="#how-to-loop-inside-jsx">How to loop inside JSX?</a></td>
</tr>
<tr>
<td>58</td>
<td><a href="#how-do-you-access-props-in-attribute-quotes">How do you access props in attribute quotes?</a></td>
</tr>
<tr>
<td>59</td>
<td><a href="#what-is-react-proptype-array-with-shape">What is React PropType array with shape?</a></td>
</tr>
<tr>
<td>60</td>
<td><a href="#how-to-conditionally-apply-class-attributes">How to conditionally apply class attributes?</a></td>
</tr>
<tr>
<td>61</td>
<td><a href="#what-is-the-difference-between-react-and-reactdom">What is the difference between React and ReactDOM?</a></td>
</tr>
<tr>
<td>62</td>
<td><a href="#why-reactdom-is-separated-from-react">Why ReactDOM is separated from React?</a></td>
</tr>
<tr>
<td>63</td>
<td><a href="#how-to-use-react-label-element">How to use React label element?</a></td>
</tr>
<tr>
<td>64</td>
<td><a href="#how-to-combine-multiple-inline-style-objects">How to combine multiple inline style objects?</a></td>
</tr>
<tr>
<td>65</td>
<td><a href="#how-to-re-render-the-view-when-the-browser-is-resized">How to re-render the view when the browser is resized?</a></td>
</tr>
<tr>
<td>66</td>
<td><a href="#how-to-pretty-print-json-with-react">How to pretty print JSON with React?</a></td>
</tr>
<tr>
<td>67</td>
<td><a href="#why-you-cant-update-props-in-react">Why you can&#x27;t update props in React?</a></td>
</tr>
<tr>
<td>68</td>
<td><a href="#how-to-focus-an-input-element-on-page-load">How to focus an input element on page load?</a></td>
</tr>
<tr>
<td>69</td>
<td><a href="#how-can-we-find-the-version-of-react-at-runtime-in-the-browser">How can we find the version of React at runtime in the browser?</a></td>
</tr>
<tr>
<td>70</td>
<td><a href="#how-to-add-google-analytics-for-react-router">How to add Google Analytics for react-router?</a></td>
</tr>
<tr>
<td>71</td>
<td><a href="#how-do-you-apply-vendor-prefixes-to-inline-styles-in-react">How do you apply vendor prefixes to inline styles in React?</a></td>
</tr>
<tr>
<td>72</td>
<td><a href="#how-to-import-and-export-components-using-react-and-es6">How to import and export components using react and ES6?</a></td>
</tr>
<tr>
<td>73</td>
<td><a href="#what-are-the-exceptions-on-react-component-naming">What are the exceptions on React component naming?</a></td>
</tr>
<tr>
<td>74</td>
<td><a href="#is-it-possible-to-use-asyncawait-in-plain-react">Is it possible to use async/await in plain React?</a></td>
</tr>
<tr>
<td>75</td>
<td><a href="#what-are-the-common-folder-structures-for-react">What are the common folder structures for React?</a></td>
</tr>
<tr>
<td>76</td>
<td><a href="#what-are-the-popular-packages-for-animation">What are the popular packages for animation?</a></td>
</tr>
<tr>
<td>77</td>
<td><a href="#what-is-the-benefit-of-styles-modules">What is the benefit of styles modules?</a></td>
</tr>
<tr>
<td>78</td>
<td><a href="#what-are-the-popular-react-specific-linters">What are the popular React-specific linters?</a></td>
</tr>
<tr>
<td><strong>React Router</strong></td>
</tr>
<tr>
<td>79</td>
<td><a href="#what-is-react-router">What is React Router?</a></td>
</tr>
<tr>
<td>80</td>
<td><a href="#how-react-router-is-different-from-history-library">How React Router is different from history library?</a></td>
</tr>
<tr>
<td>81</td>
<td><a href="#what-are-the-router-components-of-react-router-v4">What are the \&lt;Router&gt; components of React Router v4?</a></td>
</tr>
<tr>
<td>82</td>
<td><a href="#what-is-the-purpose-of-push-and-replace-methods-of-history">What is the purpose of push and replace methods of history?</a></td>
</tr>
<tr>
<td>83</td>
<td><a href="#how-do-you-programmatically-navigate-using-react-router-v4">How do you programmatically navigate using React router v4?</a></td>
</tr>
<tr>
<td>84</td>
<td><a href="#how-to-get-query-parameters-in-react-router-v4">How to get query parameters in React Router v4</a></td>
</tr>
<tr>
<td>85</td>
<td><a href="#why-you-get-router-may-have-only-one-child-element-warning">Why you get &quot;Router may have only one child element&quot; warning?</a></td>
</tr>
<tr>
<td>86</td>
<td><a href="#how-to-pass-params-to-historypush-method-in-react-router-v4">How to pass params to history.push method in React Router v4?</a></td>
</tr>
<tr>
<td>87</td>
<td><a href="#how-to-implement-default-or-notfound-page">How to implement default or NotFound page?</a></td>
</tr>
<tr>
<td>88</td>
<td><a href="#how-to-get-history-on-react-router-v4">How to get history on React Router v4?</a></td>
</tr>
<tr>
<td>89</td>
<td><a href="#how-to-perform-automatic-redirect-after-login">How to perform automatic redirect after login?</a></td>
</tr>
<tr>
<td><strong>React Internationalization</strong></td>
</tr>
<tr>
<td>90</td>
<td><a href="#what-is-react-intl">What is React Intl?</a></td>
</tr>
<tr>
<td>91</td>
<td><a href="#what-are-the-main-features-of-react-intl">What are the main features of React Intl?</a></td>
</tr>
<tr>
<td>92</td>
<td><a href="#what-are-the-two-ways-of-formatting-in-react-intl">What are the two ways of formatting in React Intl?</a></td>
</tr>
<tr>
<td>93</td>
<td><a href="#how-to-use-formattedmessage-as-placeholder-using-react-intl">How to use FormattedMessage as placeholder using React Intl?</a></td>
</tr>
<tr>
<td>94</td>
<td><a href="#how-to-access-current-locale-with-react-intl">How to access current locale with React Intl</a></td>
</tr>
<tr>
<td>95</td>
<td><a href="#how-to-format-date-using-react-intl">How to format date using React Intl?</a></td>
</tr>
<tr>
<td><strong>React Testing</strong></td>
</tr>
<tr>
<td>96</td>
<td><a href="#what-is-shallow-renderer-in-react-testing">What is Shallow Renderer in React testing?</a></td>
</tr>
<tr>
<td>97</td>
<td><a href="#what-is-testrenderer-package-in-react">What is TestRenderer package in React?</a></td>
</tr>
<tr>
<td>98</td>
<td><a href="#what-is-the-purpose-of-reacttestutils-package">What is the purpose of ReactTestUtils package?</a></td>
</tr>
<tr>
<td>99</td>
<td><a href="#what-is-jest">What is Jest?</a></td>
</tr>
<tr>
<td>100</td>
<td><a href="#what-are-the-advantages-of-jest-over-jasmine">What are the advantages of Jest over Jasmine?</a></td>
</tr>
<tr>
<td>101</td>
<td><a href="#give-a-simple-example-of-jest-test-case">Give a simple example of Jest test case</a></td>
</tr>
<tr>
<td><strong>React Redux</strong></td>
</tr>
<tr>
<td>102</td>
<td><a href="#what-is-flux">What is Flux?</a></td>
</tr>
<tr>
<td>103</td>
<td><a href="#what-is-redux">What is Redux?</a></td>
</tr>
<tr>
<td>104</td>
<td><a href="#what-are-the-core-principles-of-redux">What are the core principles of Redux?</a></td>
</tr>
<tr>
<td>105</td>
<td><a href="#what-are-the-downsides-of-redux-compared-to-flux">What are the downsides of Redux compared to Flux?</a></td>
</tr>
<tr>
<td>106</td>
<td><a href="#what-is-the-difference-between-mapstatetoprops-and-mapdispatchtoprops">What is the difference between mapStateToProps() and mapDispatchToProps()?</a></td>
</tr>
<tr>
<td>107</td>
<td><a href="#can-i-dispatch-an-action-in-reducer">Can I dispatch an action in reducer?</a></td>
</tr>
<tr>
<td>108</td>
<td><a href="#how-to-access-redux-store-outside-a-component">How to access Redux store outside a component?</a></td>
</tr>
<tr>
<td>109</td>
<td><a href="#what-are-the-drawbacks-of-mvw-pattern">What are the drawbacks of MVW pattern</a></td>
</tr>
<tr>
<td>110</td>
<td><a href="#are-there-any-similarities-between-redux-and-rxjs">Are there any similarities between Redux and RxJS?</a></td>
</tr>
<tr>
<td>111</td>
<td><a href="#how-to-reset-state-in-redux">How to reset state in Redux?</a></td>
</tr>
<tr>
<td>112</td>
<td><a href="#what-is-the-difference-between-react-context-and-react-redux">What is the difference between React context and React Redux?</a></td>
</tr>
<tr>
<td>113</td>
<td><a href="#why-are-redux-state-functions-called-reducers">Why are Redux state functions called reducers?</a></td>
</tr>
<tr>
<td>114</td>
<td><a href="#how-to-make-ajax-request-in-redux">How to make AJAX request in Redux?</a></td>
</tr>
<tr>
<td>115</td>
<td><a href="#should-i-keep-all-components-state-in-redux-store">Should I keep all component&#x27;s state in Redux store?</a></td>
</tr>
<tr>
<td>116</td>
<td><a href="#what-is-the-proper-way-to-access-redux-store">What is the proper way to access Redux store?</a></td>
</tr>
<tr>
<td>117</td>
<td><a href="#what-is-the-difference-between-component-and-container-in-react-redux">What is the difference between component and container in React Redux?</a></td>
</tr>
<tr>
<td>118</td>
<td><a href="#what-is-the-purpose-of-the-constants-in-redux">What is the purpose of the constants in Redux? </a></td>
</tr>
<tr>
<td>119</td>
<td><a href="#what-are-the-different-ways-to-write-mapdispatchtoprops">What are the different ways to write mapDispatchToProps()?</a></td>
</tr>
<tr>
<td>120</td>
<td><a href="#what-is-the-use-of-the-ownprops-parameter-in-mapstatetoprops-and-mapdispatchtoprops">What is the use of the ownProps parameter in mapStateToProps() and mapDispatchToProps()?</a></td>
</tr>
<tr>
<td>121</td>
<td><a href="#how-to-structure-redux-top-level-directories">How to structure Redux top level directories?</a></td>
</tr>
<tr>
<td>122</td>
<td><a href="#what-is-redux-saga">What is redux-saga?</a></td>
</tr>
<tr>
<td>123</td>
<td><a href="#what-is-the-mental-model-of-redux-saga">What is the mental model of redux-saga?</a></td>
</tr>
<tr>
<td>124</td>
<td><a href="#what-are-the-differences-between-call-and-put-in-redux-saga">What are the differences between call and put in redux-saga</a></td>
</tr>
<tr>
<td>125</td>
<td><a href="#what-is-redux-thunk">What is Redux Thunk?</a></td>
</tr>
<tr>
<td>126</td>
<td><a href="#what-are-the-differences-between-redux-saga-and-redux-thunk">What are the differences between redux-saga and redux-thunk</a></td>
</tr>
<tr>
<td>127</td>
<td><a href="#what-is-redux-devtools">What is Redux DevTools?</a></td>
</tr>
<tr>
<td>128</td>
<td><a href="#what-are-the-features-of-redux-devtools">What are the features of Redux DevTools?</a></td>
</tr>
<tr>
<td>129</td>
<td><a href="#what-are-redux-selectors-and-why-to-use-them">What are Redux selectors and Why to use them?</a></td>
</tr>
<tr>
<td>130</td>
<td><a href="#what-is-redux-form">What is Redux Form?</a></td>
</tr>
<tr>
<td>131</td>
<td><a href="#what-are-the-main-features-of-redux-form">What are the main features of Redux Form?</a></td>
</tr>
<tr>
<td>132</td>
<td><a href="#how-to-add-multiple-middlewares-to-redux">How to add multiple middlewares to Redux?</a></td>
</tr>
<tr>
<td>133</td>
<td><a href="#how-to-set-initial-state-in-redux">How to set initial state in Redux?</a></td>
</tr>
<tr>
<td>134</td>
<td><a href="#how-relay-is-different-from-redux">How Relay is different from Redux?</a></td>
</tr>
<tr>
<td>135</td>
<td><a href="#what-is-an-action-in-redux">What is an action in Redux?</a></td>
</tr>
<tr>
<td><strong>React Native</strong></td>
</tr>
<tr>
<td>136</td>
<td><a href="#what-is-the-difference-between-react-native-and-react">What is the difference between React Native and React?</a></td>
</tr>
<tr>
<td>137</td>
<td><a href="#how-to-test-react-native-apps">How to test React Native apps?</a></td>
</tr>
<tr>
<td>138</td>
<td><a href="#how-to-do-logging-in-react-native">How to do logging in React Native?</a></td>
</tr>
<tr>
<td>139</td>
<td><a href="#how-to-debug-your-react-native">How to debug your React Native?</a></td>
</tr>
<tr>
<td><strong>React supported libraries and Integration</strong></td>
</tr>
<tr>
<td>140</td>
<td><a href="#what-is-reselect-and-how-it-works">What is reselect and how it works?</a></td>
</tr>
<tr>
<td>141</td>
<td><a href="#what-is-flow">What is Flow?</a></td>
</tr>
<tr>
<td>142</td>
<td><a href="#what-is-the-difference-between-flow-and-proptypes">What is the difference between Flow and PropTypes?</a></td>
</tr>
<tr>
<td>143</td>
<td><a href="#how-to-use-font-awesome-icons-in-react">How to use font-awesome icons in React?</a></td>
</tr>
<tr>
<td>144</td>
<td><a href="#what-is-react-dev-tools">What is React Dev Tools?</a></td>
</tr>
<tr>
<td>145</td>
<td><a href="#why-is-devtools-not-loading-in-chrome-for-local-files">Why is DevTools not loading in Chrome for local files?</a></td>
</tr>
<tr>
<td>146</td>
<td><a href="#how-to-use-polymer-in-react">How to use Polymer in React?</a></td>
</tr>
<tr>
<td>147</td>
<td><a href="#what-are-the-advantages-of-react-over-vuejs">What are the advantages of React over Vue.js?</a></td>
</tr>
<tr>
<td>148</td>
<td><a href="#what-is-the-difference-between-react-and-angular">What is the difference between React and Angular?</a></td>
</tr>
<tr>
<td>149</td>
<td><a href="#why-react-tab-is-not-showing-up-in-devtools">Why React tab is not showing up in DevTools?</a></td>
</tr>
<tr>
<td>150</td>
<td><a href="#what-are-styled-components">What are styled components?</a></td>
</tr>
<tr>
<td>151</td>
<td><a href="#give-an-example-of-styled-components">Give an example of Styled Components?</a></td>
</tr>
<tr>
<td>152</td>
<td><a href="#what-is-relay">What is Relay?</a></td>
</tr>
<tr>
<td><strong>Miscellaneous</strong></td>
</tr>
<tr>
<td>153</td>
<td><a href="#what-are-the-main-features-of-reselect-library">What are the main features of reselect library?</a></td>
</tr>
<tr>
<td>154</td>
<td><a href="#give-an-example-of-reselect-usage">Give an example of reselect usage?</a></td>
</tr>
<tr>
<td>155</td>
<td><a href="#can-redux-only-be-used-with-react">Can Redux only be used with React?</a></td>
</tr>
<tr>
<td>156</td>
<td><a href="#do-you-need-to-have-a-particular-build-tool-to-use-redux">Do you need to have a particular build tool to use Redux?</a></td>
</tr>
<tr>
<td>157</td>
<td><a href="#how-redux-form-initialvalues-get-updated-from-state">How Redux Form initialValues get updated from state?</a></td>
</tr>
<tr>
<td>158</td>
<td><a href="#how-react-proptypes-allow-different-types-for-one-prop">How React PropTypes allow different type for one prop?</a></td>
</tr>
<tr>
<td>159</td>
<td><a href="#can-i-import-an-svg-file-as-react-component">Can I import an SVG file as react component?</a></td>
</tr>
<tr>
<td>160</td>
<td><a href="#what-is-render-hijacking-in-react">What is render hijacking in React?</a></td>
</tr>
<tr>
<td>161</td>
<td><a href="#how-to-pass-numbers-to-react-component">How to pass numbers to React component?</a></td>
</tr>
<tr>
<td>162</td>
<td><a href="#do-i-need-to-keep-all-my-state-into-redux-should-i-ever-use-react-internal-state">Do I need to keep all my state into Redux? Should I ever use react internal state?</a></td>
</tr>
<tr>
<td>163</td>
<td><a href="#what-is-the-purpose-of-registerserviceworker-in-react">What is the purpose of registerServiceWorker in React?</a></td>
</tr>
<tr>
<td>164</td>
<td><a href="#what-is-react-memo-function">What is React memo function?</a></td>
</tr>
<tr>
<td>165</td>
<td><a href="#what-is-react-lazy-function">What is React lazy function?</a></td>
</tr>
<tr>
<td>166</td>
<td><a href="#how-to-prevent-unnecessary-updates-using-setstate">How to prevent unnecessary updates using setState?</a></td>
</tr>
<tr>
<td>167</td>
<td><a href="#how-do-you-render-array-strings-and-numbers-in-react-16-version">How do you render Array, Strings and Numbers in React 16 Version?</a></td>
</tr>
<tr>
<td>168</td>
<td><a href="#what-are-hooks">What are hooks?</a></td>
</tr>
<tr>
<td>169</td>
<td><a href="#what-rules-need-to-be-followed-for-hooks">What rules need to be followed for hooks?</a></td>
</tr>
<tr>
<td>170</td>
<td><a href="#how-to-ensure-hooks-followed-the-rules-in-your-project">How to ensure hooks followed the rules in your project?</a></td>
</tr>
<tr>
<td>171</td>
<td><a href="#what-are-the-differences-between-flux-and-redux">What are the differences between Flux and Redux?</a></td>
</tr>
<tr>
<td>172</td>
<td><a href="#what-are-the-benefits-of-react-router-v4">What are the benefits of React Router V4?</a></td>
</tr>
<tr>
<td>173</td>
<td><a href="#can-you-describe-about-componentdidcatch-lifecycle-method-signature">Can you describe about componentDidCatch lifecycle method signature?</a></td>
</tr>
<tr>
<td>174</td>
<td><a href="#in-which-scenarios-error-boundaries-do-not-catch-errors">In which scenarios error boundaries do not catch errors?</a></td>
</tr>
<tr>
<td>175</td>
<td><a href="#what-is-the-behavior-of-uncaught-errors-in-react-16">What is the behavior of uncaught errors in react 16?</a></td>
</tr>
<tr>
<td>176</td>
<td><a href="#what-is-the-proper-placement-for-error-boundaries">What is the proper placement for error boundaries?</a></td>
</tr>
<tr>
<td>177</td>
<td><a href="#what-is-the-benefit-of-component-stack-trace-from-error-boundary">What is the benefit of component stack trace from error boundary?</a></td>
</tr>
<tr>
<td>178</td>
<td><a href="#what-are-default-props">What are default props?</a></td>
</tr>
<tr>
<td>179</td>
<td><a href="#what-is-the-purpose-of-displayname-class-property">What is the purpose of displayName class property?</a></td>
</tr>
<tr>
<td>180</td>
<td><a href="#what-is-the-browser-support-for-react-applications">What is the browser support for react applications?</a></td>
</tr>
<tr>
<td>181</td>
<td><a href="#what-is-code-splitting">What is code-splitting?</a></td>
</tr>
<tr>
<td>182</td>
<td><a href="#what-are-keyed-fragments">What are Keyed Fragments?</a></td>
</tr>
<tr>
<td>183</td>
<td><a href="#does-react-support-all-html-attributes">Does React support all HTML attributes?</a></td>
</tr>
<tr>
<td>184</td>
<td><a href="#when-component-props-defaults-to-true">When component props defaults to true?</a></td>
</tr>
<tr>
<td>185</td>
<td><a href="#what-is-nextjs-and-major-features-of-it">What is NextJS and major features of it?</a></td>
</tr>
<tr>
<td>186</td>
<td><a href="#how-do-you-pass-an-event-handler-to-a-component">How do you pass an event handler to a component?</a></td>
</tr>
<tr>
<td>187</td>
<td><a href="#how-to-prevent-a-function-from-being-called-multiple-times">How to prevent a function from being called multiple times?</a></td>
</tr>
<tr>
<td>188</td>
<td><a href="#how-jsx-prevents-injection-attacks">How JSX prevents Injection Attacks?</a></td>
</tr>
<tr>
<td>189</td>
<td><a href="#how-do-you-update-rendered-elements">How do you update rendered elements?</a></td>
</tr>
<tr>
<td>190</td>
<td><a href="#how-do-you-say-that-props-are-read-only">How do you say that props are read only?</a></td>
</tr>
<tr>
<td>191</td>
<td><a href="#what-are-the-conditions-to-safely-use-the-index-as-a-key">What are the conditions to safely use the index as a key?</a></td>
</tr>
<tr>
<td>192</td>
<td><a href="#is-it-keys-should-be-globally-unique">Is it keys should be globally unique?</a></td>
</tr>
<tr>
<td>193</td>
<td><a href="#what-is-the-popular-choice-for-form-handling">What is the popular choice for form handling?</a></td>
</tr>
<tr>
<td>194</td>
<td><a href="#what-are-the-advantages-of-formik-over-redux-form-library">What are the advantages of formik over redux form library?</a></td>
</tr>
<tr>
<td>195</td>
<td><a href="#why-do-you-not-required-to-use-inheritance">Why do you not required to use inheritance?</a></td>
</tr>
<tr>
<td>196</td>
<td><a href="#can-i-use-web-components-in-react-application">Can I use web components in react application?</a></td>
</tr>
<tr>
<td>197</td>
<td><a href="#what-is-dynamic-import">What is dynamic import?</a></td>
</tr>
<tr>
<td>198</td>
<td><a href="#what-are-loadable-components">What are loadable components?</a></td>
</tr>
<tr>
<td>199</td>
<td><a href="#what-is-suspense-component">What is suspense component?</a></td>
</tr>
<tr>
<td>200</td>
<td><a href="#what-is-route-based-code-splitting">What is route based code splitting?</a></td>
</tr>
<tr>
<td>201</td>
<td><a href="#what-is-the-purpose-of-default-value-in-context">What is the purpose of default value in context?</a></td>
</tr>
<tr>
<td>202</td>
<td><a href="#what-is-diffing-algorithm">What is diffing algorithm?</a></td>
</tr>
<tr>
<td>203</td>
<td><a href="#what-are-the-rules-covered-by-diffing-algorithm">What are the rules covered by diffing algorithm?</a></td>
</tr>
<tr>
<td>204</td>
<td><a href="#when-do-you-need-to-use-refs">When do you need to use refs?</a></td>
</tr>
<tr>
<td>205</td>
<td><a href="#is-it-prop-must-be-named-as-render-for-render-props">Is it prop must be named as render for render props?</a></td>
</tr>
<tr>
<td>206</td>
<td><a href="#what-are-the-problems-of-using-render-props-with-pure-components">What are the problems of using render props with pure components?</a></td>
</tr>
<tr>
<td>207</td>
<td><a href="#what-is-windowing-technique">What is windowing technique?</a></td>
</tr>
<tr>
<td>208</td>
<td><a href="#how-do-you-print-falsy-values-in-jsx">How do you print falsy values in JSX?</a></td>
</tr>
<tr>
<td>209</td>
<td><a href="#what-is-the-typical-use-case-of-portals">What is the typical use case of portals?</a></td>
</tr>
<tr>
<td>210</td>
<td><a href="#how-do-you-set-default-value-for-uncontrolled-component">How do you set default value for uncontrolled component?</a></td>
</tr>
<tr>
<td>211</td>
<td><a href="#what-is-your-favorite-react-stack">What is your favorite React stack?</a></td>
</tr>
<tr>
<td>212</td>
<td><a href="#what-is-the-difference-between-real-dom-and-virtual-dom">What is the difference between Real DOM and Virtual DOM?</a></td>
</tr>
<tr>
<td>213</td>
<td><a href="#how-to-add-bootstrap-to-a-react-application">How to add Bootstrap to a react application?</a></td>
</tr>
<tr>
<td>214</td>
<td><a href="#can-you-list-down-top-websites-or-applications-using-react-as-front-end-framework">Can you list down top websites or applications using react as front end framework?</a></td>
</tr>
<tr>
<td>215</td>
<td><a href="#is-it-recommended-to-use-css-in-js-technique-in-react">Is it recommended to use CSS In JS technique in React?</a></td>
</tr>
<tr>
<td>216</td>
<td><a href="#do-i-need-to-rewrite-all-my-class-components-with-hooks">Do I need to rewrite all my class components with hooks?</a></td>
</tr>
<tr>
<td>217</td>
<td><a href="#how-to-fetch-data-with-react-hooks">How to fetch data with React Hooks?</a></td>
</tr>
<tr>
<td>218</td>
<td><a href="#is-hooks-cover-all-use-cases-for-classes">Is Hooks cover all use cases for classes?</a></td>
</tr>
<tr>
<td>219</td>
<td><a href="#what-is-the-stable-release-for-hooks-support">What is the stable release for hooks support?</a></td>
</tr>
<tr>
<td>220</td>
<td><a href="#why-do-we-use-array-destructuring-square-brackets-notation-in-usestate">Why do we use array destructuring (square brackets notation) in useState?</a></td>
</tr>
<tr>
<td>221</td>
<td><a href="#what-are-the-sources-used-for-introducing-hooks">What are the sources used for introducing hooks?</a></td>
</tr>
<tr>
<td>222</td>
<td><a href="#how-do-you-access-imperative-api-of-web-components">How do you access imperative API of web components?</a></td>
</tr>
<tr>
<td>223</td>
<td><a href="#what-is-formik">What is formik?</a></td>
</tr>
<tr>
<td>224</td>
<td><a href="#what-are-typical-middleware-choices-for-handling-asynchronous-calls-in-redux">What are typical middleware choices for handling asynchronous calls in Redux?</a></td>
</tr>
<tr>
<td>225</td>
<td><a href="#do-browsers-understand-jsx-code">Do browsers understand JSX code?</a></td>
</tr>
<tr>
<td>226</td>
<td><a href="#describe-about-data-flow-in-react">Describe about data flow in react?</a></td>
</tr>
<tr>
<td>227</td>
<td><a href="#what-is-mobx">What is MobX?</a></td>
</tr>
<tr>
<td>228</td>
<td><a href="#what-are-the-differences-between-redux-and-mobx">What are the differences between Redux and MobX?</a></td>
</tr>
<tr>
<td>229</td>
<td><a href="#should-i-learn-es6-before-learning-reactjs">Should I learn ES6 before learning ReactJS?</a></td>
</tr>
<tr>
<td>230</td>
<td><a href="#what-is-concurrent-rendering">What is Concurrent Rendering?</a></td>
</tr>
<tr>
<td>231</td>
<td><a href="#what-is-the-difference-between-async-mode-and-concurrent-mode">What is the difference between async mode and concurrent mode?</a></td>
</tr>
<tr>
<td>232</td>
<td><a href="#can-i-use-javascript-urls-in-react169">Can I use javascript urls in react16.9?</a></td>
</tr>
<tr>
<td>233</td>
<td><a href="#what-is-the-purpose-of-eslint-plugin-for-hooks">What is the purpose of eslint plugin for hooks?</a></td>
</tr>
<tr>
<td>234</td>
<td><a href="#what-is-the-difference-between-imperative-and-declarative-in-react">What is the difference between Imperative and Declarative in React?</a></td>
</tr>
<tr>
<td>235</td>
<td><a href="#what-are-the-benefits-of-using-typescript-with-reactjs">What are the benefits of using typescript with reactjs?</a></td>
</tr>
<tr>
<td>236</td>
<td><a href="#how-do-you-make-sure-that-user-remains-authenticated-on-page-refresh-while-using-context-api-state-management">How do you make sure that user remains authenticated on page refresh while using Context API State Management?</a></td>
</tr>
<tr>
<td>237</td>
<td><a href="#what-are-the-benefits-of-new-jsx-transform">What are the benefits of new JSX transform?</a></td>
</tr>
<tr>
<td>238</td>
<td><a href="#how-is-the-new-jsx-transform-different-from-old-transform">How is the new JSX transform different from old transform?</a></td>
</tr>
<tr>
<td>239</td>
<td><a href="#what-are-react-server-components">What are React Server components?</a></td>
</tr>
<tr>
<td>240</td>
<td><a href="#what-is-prop-drilling">What is prop drilling?</a></td>
</tr>
<tr>
<td>241</td>
<td><a href="#what-is-the-difference-between-usestate-and-useref-hook">What is the difference between useState and useRef hook?</a></td>
</tr>
<tr>
<td>242</td>
<td><a href="#what-is-a-wrapper-component">What is a wrapper component </a></td>
</tr>
<tr>
<td>243</td>
<td><a href="#what-are-the-differences-between-useEffect-and-useLayoutEffect-hooks">What are the differences between useEffect and useLayoutEffect hooks</a></td>
</tr>
<tr>
<td>244</td>
<td><a href="#what-are-the-differences-between-functional-and-class-components">What are the differences between Functional and Class Components </a></td>
</tr>
<tr>
<td>245</td>
<td><a href="#what-is-strict-mode-in-react">What is strict mode in React?</a></td>
</tr>
<tr>
<td>246</td>
<td><a href="#what-is-the-benefit-of-strict-mode">What is the benefit of strict mode?</a></td>
</tr>
<tr>
<td>247</td>
<td><a href="#why-does-strict-mode-render-twice-in-react">Why does strict mode render twice in React?</a></td>
</tr>
<tr>
<td>248</td>
<td><a href="#what-are-the-rules-of-JSX">What are the rules of JSX?</a></td>
</tr>
<tr>
<td>249</td>
<td><a href="#what-is-the-reason-behind-multiple-JSX-tags-to-be-wrapped">What is the reason behind multiple JSX tags to be wrapped?</a></td>
</tr>
<tr>
<td>250</td>
<td><a href="#how-do-you-prevent-mutating-array-variables">How do you prevent mutating array variables?</a></td>
</tr>
<tr>
<td>251</td>
<td><a href="#what-are-capture-phase-events">What are capture phase events?</a></td>
</tr>
<tr>
<td>252</td>
<td><a href="#how-does-react-updates-screen-in-an-application">How does React updates screen in an application?</a></td>
</tr>
<tr>
<td>253</td>
<td><a href="#how-does-react-batch-multiple-state-updates">How does React batch multiple state updates?</a></td>
</tr>
<tr>
<td>254</td>
<td><a href="#is-it-possible-to-prevent-automatic-batching">Is it possible to prevent automatic batching?</a></td>
</tr>
<tr>
<td>255</td>
<td><a href="#what-is-react-hydration">What is React hydration?</a></td>
</tr>
<tr>
<td>256</td>
<td><a href="#how-do-you-update-objects-inside-state">How do you update objects inside state?</a></td>
</tr>
<tr>
<td>257</td>
<td><a href="#How-do-you-update-nested-objects-inside-state">How do you update nested objects inside state?</a></td>
</tr>
<tr>
<td>258</td>
<td><a href="#how-do-you-update-arrays-inside-state">How do you update arrays inside state?</a></td>
</tr>
<tr>
<td>259</td>
<td><a href="#how-do-you-use-immer-library-for-state-updates">How do you use immer library for state updates?</a></td>
</tr>
<tr>
<td>260</td>
<td><a href="#what-are-the-benefits-of-preventing-the-direct-state-mutations">What are the benefits of preventing the direct state mutations?</a></td>
</tr>
<tr>
<td>261</td>
<td><a href="#what-are-the-preferred-and-non-preferred-array-operations-for-updating-the-state">What are the preferred and non-preferred array operations for updating the state?</a></td>
</tr>
<tr>
<td>262</td>
<td><a href="#what-will-happen-by-defining-nested-function-components">What will happen by defining nested function components?</a></td>
</tr>
<tr>
<td>263</td>
<td><a href="#can-i-use-keys-for-non-list-items">Can I use keys for non-list items?</a></td>
</tr>
<tr>
<td>264</td>
<td><a href="#what-are-the-guidelines-to-be-followed-for-writing-reducers">What are the guidelines to be followed for writing reducers?</a></td>
</tr>
<tr>
<td>265</td>
<td><a href="#what-is-use-reducer-hook-Can-you-describe-its-usage">What is useReducer hook? Can you describe its usage?</a></td>
</tr>
<tr>
<td>266</td>
<td><a href="#how-do-you-compare-use-state-and-use-reducer">How do you compare useState and useReducer?</a></td>
</tr>
<tr>
<td>267</td>
<td><a href="#how-does-context-works-using-use-context-hook">How does context works using useContext hook?</a></td>
</tr>
<tr>
<td>268</td>
<td><a href="#what-are-the-use-cases-of-use-context-hook">What are the use cases of useContext hook?</a></td>
</tr>
</details>
</tbody></table>
<h3 id="table-of-contents">Table of Contents</h3>
<details open>
<summary>
<p>Hide/Show table of contents</p>
</summary>
<table>
<thead><tr>
<th>No.</th>
<th>Questions</th>
</tr></thead><tbody>
<tr>
<td><strong>Old Q&amp;A</strong></td>
</tr>
<tr>
<td>1</td>
<td><a href="#why-should-we-not-update-the-state-directly">Why should we not update the state directly?</a></td>
</tr>
<tr>
<td>2</td>
<td><a href="#what-is-the-purpose-of-callback-function-as-an-argument-of-setstate">What is the purpose of callback function as an argument of setState()?</a></td>
</tr>
<tr>
<td>3</td>
<td><a href="#how-to-bind-methods-or-event-handlers-in-jsx-callbacks">How to bind methods or event handlers in JSX callbacks?</a></td>
</tr>
<tr>
<td>4</td>
<td><a href="#how-to-pass-a-parameter-to-an-event-handler-or-callback">How to pass a parameter to an event handler or callback?</a></td>
</tr>
<tr>
<td>5</td>
<td><a href="#what-is-the-use-of-refs">What is the use of refs?</a></td>
</tr>
<tr>
<td>6</td>
<td><a href="#how-to-create-refs">How to create refs?</a></td>
</tr>
<tr>
<td>7</td>
<td><a href="#what-are-forward-refs">What are forward refs?</a></td>
</tr>
<tr>
<td>8</td>
<td><a href="#which-is-preferred-option-with-in-callback-refs-and-finddomnode">Which is preferred option with in callback refs and findDOMNode()?</a></td>
</tr>
<tr>
<td>9</td>
<td><a href="#why-are-string-refs-legacy">Why are String Refs legacy?</a></td>
</tr>
<tr>
<td>10</td>
<td><a href="#what-are-the-different-phases-of-component-lifecycle">What are the different phases of component lifecycle?</a></td>
</tr>
<tr>
<td>11</td>
<td><a href="#what-are-the-lifecycle-methods-of-react">What are the lifecycle methods of React?</a></td>
</tr>
<tr>
<td>12</td>
<td><a href="#how-to-create-props-proxy-for-hoc-component">How to create props proxy for HOC component?</a></td>
</tr>
<tr>
<td>13</td>
<td><a href="#what-is-context">What is context?</a></td>
</tr>
<tr>
<td>14</td>
<td><a href="#what-is-the-purpose-of-using-super-constructor-with-props-argument">What is the purpose of using super constructor with props argument?</a></td>
</tr>
<tr>
<td>15</td>
<td><a href="#how-to-set-state-with-a-dynamic-key-name">How to set state with a dynamic key name?</a></td>
</tr>
<tr>
<td>16</td>
<td><a href="#what-would-be-the-common-mistake-of-function-being-called-every-time-the-component-renders">What would be the common mistake of function being called every time the component renders?</a></td>
</tr>
<tr>
<td>17</td>
<td><a href="#what-are-error-boundaries-in-react-v16">What are error boundaries in React v16</a></td>
</tr>
<tr>
<td>18</td>
<td><a href="#how-are-error-boundaries-handled-in-react-v15">How are error boundaries handled in React v15?</a></td>
</tr>
<tr>
<td>19</td>
<td><a href="#what-is-the-purpose-of-render-method-of-react-dom">What is the purpose of render method of react-dom?</a></td>
</tr>
<tr>
<td>20</td>
<td><a href="#what-will-happen-if-you-use-setstate-in-constructor">What will happen if you use setState in constructor?</a></td>
</tr>
<tr>
<td>21</td>
<td><a href="#is-it-good-to-use-setstate-in-componentwillmount-method">Is it good to use setState() in componentWillMount() method?</a></td>
</tr>
<tr>
<td>22</td>
<td><a href="#what-will-happen-if-you-use-props-in-initial-state">What will happen if you use props in initial state?</a></td>
</tr>
<tr>
<td>23</td>
<td><a href="#how-you-use-decorators-in-react">How you use decorators in React?</a></td>
</tr>
<tr>
<td>24</td>
<td><a href="#what-is-cra-and-its-benefits">What is CRA and its benefits?</a></td>
</tr>
<tr>
<td>25</td>
<td><a href="#what-is-the-lifecycle-methods-order-in-mounting">What is the lifecycle methods order in mounting?</a></td>
</tr>
<tr>
<td>26</td>
<td><a href="#what-are-the-lifecycle-methods-going-to-be-deprecated-in-react-v16">What are the lifecycle methods going to be deprecated in React v16?</a></td>
</tr>
<tr>
<td>27</td>
<td><a href="#what-is-the-purpose-of-getderivedstatefromprops-lifecycle-method">What is the purpose of getDerivedStateFromProps() lifecycle method?</a></td>
</tr>
<tr>
<td>28</td>
<td><a href="#what-is-the-purpose-of-getsnapshotbeforeupdate-lifecycle-method">What is the purpose of getSnapshotBeforeUpdate() lifecycle method?</a></td>
</tr>
<tr>
<td>29</td>
<td><a href="#what-is-the-recommended-way-for-naming-components">What is the recommended way for naming components?</a></td>
</tr>
<tr>
<td>30</td>
<td><a href="#what-is-the-recommended-ordering-of-methods-in-component-class">What is the recommended ordering of methods in component class?</a></td>
</tr>
<tr>
<td>31</td>
<td><a href="#why-we-need-to-pass-a-function-to-setstate">Why we need to pass a function to setState()?</a></td>
</tr>
<tr>
<td>32</td>
<td><a href="#why-is-ismounted-an-anti-pattern-and-what-is-the-proper-solution">Why is isMounted() an anti-pattern and what is the proper solution?</a></td>
</tr>
<tr>
<td>33</td>
<td><a href="#what-is-the-difference-between-constructor-and-getinitialstate">What is the difference between constructor and getInitialState?</a></td>
</tr>
<tr>
<td>34</td>
<td><a href="#can-you-force-a-component-to-re-render-without-calling-setstate">Can you force a component to re-render without calling setState?</a></td>
</tr>
<tr>
<td>35</td>
<td><a href="#what-is-the-difference-between-super-and-superprops-in-react-using-es6-classes">What is the difference between super() and super(props) in React using ES6 classes?</a></td>
</tr>
<tr>
<td>36</td>
<td><a href="#what-is-the-difference-between-setstate-and-replacestate-methods">What is the difference between setState and replaceState methods?</a></td>
</tr>
<tr>
<td>37</td>
<td><a href="#how-to-listen-to-state-changes">How to listen to state changes?</a></td>
</tr>
<tr>
<td>38</td>
<td><a href="#what-is-the-recommended-approach-of-removing-an-array-element-in-react-state">What is the recommended approach of removing an array element in react state?</a></td>
</tr>
<tr>
<td>39</td>
<td><a href="#is-it-possible-to-use-react-without-rendering-html">Is it possible to use React without rendering HTML?</a></td>
</tr>
<tr>
<td>40</td>
<td><a href="#what-are-the-possible-ways-of-updating-objects-in-state">What are the possible ways of updating objects in state?</a></td>
</tr>
<tr>
<td>41</td>
<td><a href="#what-are-the-approaches-to-include-polyfills-in-your-create-react-app">What are the approaches to include polyfills in your create-react-app?</a></td>
</tr>
<tr>
<td>42</td>
<td><a href="#how-to-use-https-instead-of-http-in-create-react-app">How to use https instead of http in create-react-app?</a></td>
</tr>
<tr>
<td>43</td>
<td><a href="#how-to-avoid-using-relative-path-imports-in-create-react-app">How to avoid using relative path imports in create-react-app?</a></td>
</tr>
<tr>
<td>44</td>
<td><a href="#how-to-update-a-component-every-second">How to update a component every second?</a></td>
</tr>
<tr>
<td>45</td>
<td><a href="#why-is-a-component-constructor-called-only-once">Why is a component constructor called only once?</a></td>
</tr>
<tr>
<td>46</td>
<td><a href="#how-to-define-constants-in-react">How to define constants in React?</a></td>
</tr>
<tr>
<td>47</td>
<td><a href="#how-to-programmatically-trigger-click-event-in-react">How to programmatically trigger click event in React?</a></td>
</tr>
<tr>
<td>48</td>
<td><a href="#how-to-make-ajax-call-and-in-which-component-lifecycle-methods-should-i-make-an-ajax-call">How to make AJAX call and In which component lifecycle methods should I make an AJAX call?</a></td>
</tr>
<tr>
<td>49</td>
<td><a href="#what-are-render-props">What are render props?</a></td>
</tr>
<tr>
<td>50</td>
<td><a href="#how-to-dispatch-an-action-on-load">How to dispatch an action on load?</a></td>
</tr>
<tr>
<td>51</td>
<td><a href="#how-to-use-connect-from-react-redux">How to use connect from React Redux?</a></td>
</tr>
<tr>
<td>52</td>
<td><a href="#whats-the-purpose-of-at-symbol-in-the-redux-connect-decorator">Whats the purpose of at symbol in the redux connect decorator?</a></td>
</tr>
<tr>
<td>53</td>
<td><a href="#how-to-use-typescript-in-create-react-app-application">How to use TypeScript in create-react-app application?</a></td>
</tr>
<tr>
<td>54</td>
<td><a href="#does-the-statics-object-work-with-es6-classes-in-react">Does the statics object work with ES6 classes in React?</a></td>
</tr>
<tr>
<td>55</td>
<td><a href="#why-are-inline-ref-callbacks-or-functions-not-recommended">Why are inline ref callbacks or functions not recommended?</a></td>
</tr>
<tr>
<td>56</td>
<td><a href="#what-are-hoc-factory-implementations">What are HOC factory implementations?</a></td>
</tr>
<tr>
<td>57</td>
<td><a href="#how-to-use-class-field-declarations-syntax-in-react-classes">How to use class field declarations syntax in React classes?</a></td>
</tr>
<tr>
<td>58</td>
<td><a href="#why-do-you-not-need-error-boundaries-for-event-handlers">Why do you not need error boundaries for event handlers?</a></td>
</tr>
<tr>
<td>59</td>
<td><a href="#what-is-the-difference-between-try-catch-block-and-error-boundaries">What is the difference between try catch block and error boundaries?</a></td>
</tr>
<tr>
<td>60</td>
<td><a href="#what-is-the-required-method-to-be-defined-for-a-class-component">What is the required method to be defined for a class component?</a></td>
</tr>
<tr>
<td>61</td>
<td><a href="#what-are-the-possible-return-types-of-render-method">What are the possible return types of render method?</a></td>
</tr>
<tr>
<td>62</td>
<td><a href="#what-is-the-main-purpose-of-constructor">What is the main purpose of constructor?</a></td>
</tr>
<tr>
<td>63</td>
<td><a href="#is-it-mandatory-to-define-constructor-for-react-component">Is it mandatory to define constructor for React component?</a></td>
</tr>
<tr>
<td>64</td>
<td><a href="#why-should-not-call-setstate-in-componentwillunmount">Why should not call setState in componentWillUnmount?</a></td>
</tr>
<tr>
<td>65</td>
<td><a href="#what-is-the-purpose-of-getderivedstatefromerror">What is the purpose of getDerivedStateFromError?</a></td>
</tr>
<tr>
<td>66</td>
<td><a href="#what-is-the-methods-order-when-component-re-rendered">What is the methods order when component re-rendered?</a></td>
</tr>
<tr>
<td>67</td>
<td><a href="#what-are-the-methods-invoked-during-error-handling">What are the methods invoked during error handling?</a></td>
</tr>
<tr>
<td>68</td>
<td><a href="#what-is-the-purpose-of-unmountcomponentatnode-method">What is the purpose of unmountComponentAtNode method?</a></td>
</tr>
<tr>
<td>69</td>
<td><a href="#what-are-the-limitations-with-hocs">What are the limitations with HOCs?</a></td>
</tr>
<tr>
<td>70</td>
<td><a href="#how-to-debug-forwardrefs-in-devtools">How to debug forwardRefs in DevTools?</a></td>
</tr>
<tr>
<td>71</td>
<td><a href="#is-it-good-to-use-arrow-functions-in-render-methods">Is it good to use arrow functions in render methods?</a></td>
</tr>
<tr>
<td>72</td>
<td><a href="#how-do-you-say-that-state-updates-are-merged">How do you say that state updates are merged?</a></td>
</tr>
<tr>
<td>73</td>
<td><a href="#how-do-you-pass-arguments-to-an-event-handler">How do you pass arguments to an event handler?</a></td>
</tr>
<tr>
<td>74</td>
<td><a href="#how-to-prevent-component-from-rendering">How to prevent component from rendering?</a></td>
</tr>
<tr>
<td>75</td>
<td><a href="#give-an-example-on-how-to-use-context">Give an example on How to use context?</a></td>
</tr>
<tr>
<td>76</td>
<td><a href="#how-do-you-use-contexttype">How do you use contextType?</a></td>
</tr>
<tr>
<td>77</td>
<td><a href="#what-is-a-consumer">What is a consumer?</a></td>
</tr>
<tr>
<td>78</td>
<td><a href="#how-do-you-solve-performance-corner-cases-while-using-context">How do you solve performance corner cases while using context?</a></td>
</tr>
<tr>
<td>79</td>
<td><a href="#what-is-the-purpose-of-forward-ref-in-hocs">What is the purpose of forward ref in HOCs?</a></td>
</tr>
<tr>
<td>80</td>
<td><a href="#is-it-ref-argument-available-for-all-functions-or-class-components">Is it ref argument available for all functions or class components?</a></td>
</tr>
<tr>
<td>81</td>
<td><a href="#why-do-you-need-additional-care-for-component-libraries-while-using-forward-refs">Why do you need additional care for component libraries while using forward refs?</a></td>
</tr>
<tr>
<td>82</td>
<td><a href="#how-to-create-react-class-components-without-es6">How to create react class components without ES6?</a></td>
</tr>
<tr>
<td>83</td>
<td><a href="#is-it-possible-to-use-react-without-jsx">Is it possible to use react without JSX?</a></td>
</tr>
<tr>
<td>84</td>
<td><a href="#how-do-you-create-hoc-using-render-props">How do you create HOC using render props?</a></td>
</tr>
<tr>
<td>85</td>
<td><a href="#what-is-react-scripts">What is react scripts?</a></td>
</tr>
<tr>
<td>86</td>
<td><a href="#what-are-the-features-of-create-react-app">What are the features of create react app?</a></td>
</tr>
<tr>
<td>87</td>
<td><a href="#what-is-the-purpose-of-rendertonodestream-method">What is the purpose of renderToNodeStream method?</a></td>
</tr>
<tr>
<td>88</td>
<td><a href="#how-do-you-get-redux-scaffolding-using-create-react-app">How do you get redux scaffolding using create-react-app?</a></td>
</tr>
<tr>
<td>89</td>
<td><a href="#what-is-state-mutation-and-how-to-prevent-it">What is state mutation and how to prevent it?</a></td>
</tr>
</details>
</tbody></table>
<h2 id="core-react">Core React</h2>
<ul>
<li>### What is React?</li>
</ul>
<p>    React (aka React.js or ReactJS) is an <strong>open-source front-end JavaScript library</strong> that is used for building composable user interfaces, especially for single-page applications. It is used for handling view layer for web and mobile apps based on components in a declarative approach. </p>
<p>    React was created by <a href="https://github.com/jordwalke">Jordan Walke</a>, a software engineer working for Facebook. React was first deployed on Facebook&#x27;s News Feed in 2011 and on Instagram in 2012.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the history behind React evolution?</li>
</ul>
<p>    The history of ReactJS started in 2010 with the creation of <strong>XHP</strong>. XHP is a PHP extension which improved the syntax of the language such that XML document fragments become valid PHP expressions and the primary purpose was used to create custom and reusable HTML elements. </p>
<p>    The main principle of this extension was to make front-end code easier to understand and to help avoid cross-site scripting attacks. The project was successful to prevent the malicious content submitted by the scrubbing user.</p>
<p>    But there was a different problem with XHP in which dynamic web applications require many roundtrips to the server, and XHP did not solve this problem. Also, the whole UI was re-rendered for small change in the application. Later, the initial prototype of React is created with the name <strong>FaxJ</strong> by Jordan inspired from XHP. Finally after sometime React has been introduced as a new library into JavaScript world.</p>
<p>    <strong>Note:</strong> JSX comes from the idea of XHP</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the major features of React?</li>
</ul>
<p>    The major features of React are:</p>
<ul>
<li>Uses <strong>JSX</strong> syntax, a syntax extension of JS that allows developers to write HTML in their JS code.</li>
<li>It uses <strong>Virtual DOM</strong> instead of Real DOM considering that Real DOM manipulations are expensive.</li>
<li>Supports <strong>server-side rendering</strong> which is useful for Search Engine Optimizations(SEO).</li>
<li>Follows <strong>Unidirectional or one-way</strong> data flow or data binding.</li>
<li>Uses <strong>reusable/composable</strong> UI components to develop the view.</li>
</ul>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is JSX?</li>
</ul>
<p>    <em>JSX</em> stands for <em>JavaScript XML</em> and it is an XML-like syntax extension to ECMAScript. Basically it just provides the syntactic sugar for the <code>React.createElement(type, props, ...children)</code> function, giving us expressiveness of JavaScript along with HTML like template syntax.</p>
<p>    In the example below, the text inside <code>&lt;h1&gt;</code> tag is returned as JavaScript function to the render function.</p>
<pre><code class="language-jsx harmony">
export default function App() {
  return (
      &lt;h1 className=&quot;greeting&quot;&gt;{&quot;Hello, this is a JSX Code!&quot;}&lt;/h1&gt;
  );
}
</code></pre>
<p>    If you don&#x27;t use JSX syntax then the respective JavaScript code should be written as below,</p>
<pre><code class="language-javascript">
import { createElement } from &#x27;md1/react&#x27;;

export default function App() {
  return createElement(
    &#x27;h1&#x27;,
    { className: &#x27;greeting&#x27; },
    &#x27;Hello, this is a JSX Code!&#x27;
  );
}
</code></pre>
     <details><summary><b>See Class</b></summary>
     <p>
<pre><code class="language-jsx harmony">
class App extends React.Component {
  render() {
    return (
        &lt;h1 className=&quot;greeting&quot;&gt;{&quot;Hello, this is a JSX Code!&quot;}&lt;/h1&gt;
    );
  }
}
</code></pre>
     </p>
     </details>
<p>    <strong>Note:</strong> JSX is stricter than HTML</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the difference between Element and Component?</li>
</ul>
<p>    An <em>Element</em> is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. <em>Elements</em> can contain other <em>Elements</em> in their props. Creating a React element is cheap. Once an element is created, it cannot be mutated.</p>
<p>    The JavaScript representation(Without JSX) of React Element would be as follows:</p>
<pre><code class="language-javascript">
const element = React.createElement(&quot;div&quot;, { id: &quot;login-btn&quot; }, &quot;Login&quot;);
</code></pre>
<p>    and this element can be simiplified using JSX</p>
<pre><code class="language-html">
  &lt;div id=&quot;login-btn&quot;&gt;Login&lt;/div&gt;
</code></pre>
<p>    The above <code>React.createElement()</code> function returns an object as below:</p>
<pre><code class="language-javascript">
{
  type: &#x27;div&#x27;,
  props: {
    children: &#x27;Login&#x27;,
    id: &#x27;login-btn&#x27;
  }
}
</code></pre>
<p>    Finally, this element renders to the DOM using <code>ReactDOM.render()</code>.</p>
<p>    Whereas a <strong>component</strong> can be declared in several different ways. It can be a class with a <code>render()</code> method or it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output:</p>
<pre><code class="language-javascript">
const Button = ({ handleLogin }) =&gt; (
  &lt;div id={&quot;login-btn&quot;} onClick={handleLogin}&gt;
    Login
  &lt;/div&gt;
);
</code></pre>
<p>    Then JSX gets transpiled to a <code>React.createElement()</code> function tree:</p>
<pre><code class="language-javascript">
const Button = ({ handleLogin }) =&gt;
  React.createElement(
    &quot;div&quot;,
    { id: &quot;login-btn&quot;, onClick: handleLogin },
    &quot;Login&quot;
  );
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to create components in React?</li>
</ul>
<p>    Components are the building blocks of creating User Interfaces(UI) in React. There are two possible ways to create a component.</p>
<ul>
<li><strong>Function Components:</strong> This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as the one and only one parameter and return React elements to render the output:</li>
</ul>
<pre><code class="language-jsx harmony">
function Greeting({ message }) {
  return &lt;h1&gt;{&#96;Hello, ${message}&#96;}&lt;/h1&gt;;
}
</code></pre>
<ul>
<li><strong>Class Components:</strong> You can also use ES6 class to define a component. The above function component can be written as a class component:</li>
</ul>
<pre><code class="language-jsx harmony">
class Greeting extends React.Component {
  render() {
    return &lt;h1&gt;{&#96;Hello, ${this.props.message}&#96;}&lt;/h1&gt;;
  }
}
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### When to use a Class Component over a Function Component?</li>
</ul>
<p>    After the addition of Hooks(i.e. React 16.8 onwards) it is always recommended to use Function components over Class components  in React. Because you could use state, lifecycle methods and other features that were only available in class component present in function component too. </p>
<p>    But even there are two reasons to use Class components over Function components.</p>
<ul>
<li>If you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries. </li>
<li>In older versions, If the component needs <em>state or lifecycle methods</em> then you need to use class component.</li>
</ul>
<p>      So the summary to this question is as follows:</p>
<p>      <strong>Use Function Components:</strong></p>
<ul>
<li>If you don&#x27;t need state or lifecycle methods, and your component is purely presentational.</li>
<li>For simplicity, readability, and modern code practices, especially with the use of React Hooks for state and side effects.</li>
</ul>
<p>      <strong>Use Class Components:</strong></p>
<ul>
<li>If you need to manage state or use lifecycle methods.</li>
<li>In scenarios where backward compatibility or integration with older code is necessary.</li>
</ul>
<p>    <strong>Note:</strong> You can also use reusable <a href="https://github.com/bvaughn/react-error-boundary">react error boundary</a> third-party component without writing any class. i.e, No need to use class components for Error boundaries.</p>
<p>    The usage of Error boundaries from the above library is quite straight forward.</p>
<p>    &gt;<strong><em>Note when using react-error-boundary:</em></strong> ErrorBoundary is a client component. You can only pass props to it that are serializeable or use it in files that have a <code>&quot;use client&quot;;</code> directive.</p>
<pre><code class="language-jsx">
&quot;use client&quot;;

import { ErrorBoundary } from &quot;react-error-boundary&quot;;

&lt;ErrorBoundary fallback={&lt;div&gt;Something went wrong&lt;/div&gt;}&gt;
  &lt;ExampleApplication /&gt;
&lt;/ErrorBoundary&gt;
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are Pure Components?</li>
</ul>
<p>    Pure components are the components which render the same output for the same state and props. In function components, you can achieve these pure components through memoized <code>React.memo()</code> API wrapping around the component. This API prevents unnecessary re-renders by comparing the previous props and new props using shallow comparison. So it will be helpful for performance optimizations. </p>
<p>    But at the same time, it won&#x27;t compare the previous state with the current state because function component itself prevents the unnecessary rendering by default when you set the same state again.</p>
<p>    The syntactic representation of memoized components looks like below,</p>
<pre><code class="language-jsx">
const MemoizedComponent = memo(SomeComponent, arePropsEqual?);
</code></pre>
<p>Below is the example of how child component(i.e., EmployeeProfile) prevents re-renders for the same props passed by parent component(i.e.,EmployeeRegForm).</p>
<pre><code class="language-jsx">
      import { memo, useState } from &#x27;md1/react&#x27;;

      const EmployeeProfile = memo(function EmployeeProfile({ name, email }) {
        return (&lt;&gt;
              &lt;p&gt;Name:{name}&lt;/p&gt;
              &lt;p&gt;Email: {email}&lt;/p&gt;
              &lt;/&gt;);
      });
      export default function EmployeeRegForm() {
        const [name, setName] = useState(&#x27;&#x27;);
        const [email, setEmail] = useState(&#x27;&#x27;);
        return (
          &lt;&gt;
            &lt;label&gt;
              Name: &lt;input value={name} onChange={e =&gt; setName(e.target.value)} /&gt;
            &lt;/label&gt;
            &lt;label&gt;
              Email: &lt;input value={email} onChange={e =&gt; setEmail(e.target.value)} /&gt;
            &lt;/label&gt;
            &lt;hr/&gt;
            &lt;EmployeeProfile name={name}/&gt;
          &lt;/&gt;
        );
      }
</code></pre>
<p>    In the above code, the email prop has not been passed to child component. So there won&#x27;t be any re-renders for email prop change.</p>
<p>    In class components, the components extending <em><code>React.PureComponent</code></em> instead of  <em><code>React.Component</code></em> become the pure components. When props or state changes, <em>PureComponent</em> will do a shallow comparison on both props and state by invoking <code>shouldComponentUpdate()</code> lifecycle method. </p>
<p>    <strong>Note:</strong> <code>React.memo()</code> is a higher-order component.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is state in React?</li>
</ul>
<p>    <em>State</em> of a component is an object that holds some information that may change over the lifetime of the component. The important point is whenever the state object changes, the component re-renders. It is always recommended to make our state as simple as possible and minimize the number of stateful components.</p>
<p>    <img src="images/state.jpg" alt="state"></p>
<p>    Let&#x27;s take an example of <strong>User</strong> component with <code>message</code> state. Here, <strong>useState</strong> hook has been used to add state to the User component and it returns an array with current state and function to update it.</p>
<pre><code class="language-jsx harmony">
import { useState } from &quot;md1/react&quot;;

function User() {
  const [message, setMessage] = useState(&quot;Welcome to React world&quot;);

  return (
    &lt;div&gt;
      &lt;h1&gt;{message}&lt;/h1&gt;
    &lt;/div&gt;
  );
}
</code></pre>
<p>    Whenever React calls your component or access <code>useState</code> hook, it gives you a snapshot of the state for that particular render.</p>
    <details><summary><b>See Class</b></summary>
    <p>
<pre><code class="language-jsx harmony">
import React from &#x27;md1/react&#x27;;
class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: &quot;Welcome to React world&quot;,
    };
  }

  render() {
    return (
      &lt;div&gt;
        &lt;h1&gt;{this.state.message}&lt;/h1&gt;
      &lt;/div&gt;
    );
  }
}
</code></pre>
    </p>
    </details>
<p>    State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are props in React?</li>
</ul>
<p>     <em>Props</em> are inputs to components. They are single values or objects containing a set of values that are passed to components on creation similar to HTML-tag attributes. Here, the data is passed down from a parent component to a child component.</p>
<p>     The primary purpose of props in React is to provide following component functionality:</p>
<ul>
<li>Pass custom data to your component.</li>
<li>Trigger state changes.</li>
<li>Use via <code>this.props.reactProp</code> inside component&#x27;s <code>render()</code> method.</li>
</ul>
<p>      For example, let us create an element with <code>reactProp</code> property:</p>
<pre><code class="language-jsx harmony">
&lt;Element reactProp={&quot;1&quot;} /&gt;
</code></pre>
<p>      This <code>reactProp</code> (or whatever you came up with) attribute name then becomes a property attached to React&#x27;s native props object which originally already exists on all components created using React library.</p>
<pre><code class="language-jsx harmony">
props.reactProp
</code></pre>
<p>      For example, the usage of props in function component looks like below:</p>
<pre><code class="language-jsx">
import React from &quot;md1/react&quot;;
import ReactDOM from &quot;react-dom&quot;;

const ChildComponent = (props) =&gt; {
return (
  &lt;div&gt;
    &lt;p&gt;{props.name}&lt;/p&gt;
    &lt;p&gt;{props.age}&lt;/p&gt;
    &lt;p&gt;{props.gender}&lt;/p&gt;
  &lt;/div&gt;
);
};

const ParentComponent = () =&gt; {
return (
  &lt;div&gt;
    &lt;ChildComponent name=&quot;John&quot; age=&quot;30&quot; gender=&quot;male&quot; /&gt;
    &lt;ChildComponent name=&quot;Mary&quot; age=&quot;25&quot; geneder=&quot;female&quot;/&gt;
  &lt;/div&gt;
);
};
</code></pre>
<p>   The properties from props object can be accessed directly using destructing feature from ES6 (ECMAScript 2015). It is also possible to fallback to default value when the prop value is not specified. The above child component can be simplified like below.</p>
<pre><code class="language-jsx harmony">
const ChildComponent = ({name, age, gender=&quot;male&quot;}) =&gt; {
    return (
      &lt;div&gt;
        &lt;p&gt;{name}&lt;/p&gt;
        &lt;p&gt;{age}&lt;/p&gt;
        &lt;p&gt;{gender}&lt;/p&gt;
      &lt;/div&gt;
    );
  };
</code></pre>
<p>  <strong>Note:</strong> The default value won&#x27;t be used if you pass <code>null</code> or <code>0</code> value. i.e, default value is only used if the prop value is missed or <code>undefined</code> value has been passed.</p>
  <details><summary><b>See Class</b></summary>
<p>     The Props accessed in Class Based Component as below</p>
<pre><code class="language-jsx">
    import React from &quot;md1/react&quot;;
import ReactDOM from &quot;react-dom&quot;;

class ChildComponent extends React.Component {
    render() {
        return (
            &lt;div&gt;
                &lt;p&gt;{this.props.name}&lt;/p&gt;
                &lt;p&gt;{this.props.age}&lt;/p&gt;
                &lt;p&gt;{this.props.gender}&lt;/p&gt;
            &lt;/div&gt;
        );
    }
}

class ParentComponent extends React.Component {
    render() {
        return (
            &lt;div&gt;
                &lt;ChildComponent name=&quot;John&quot; age=&quot;30&quot; gender=&quot;male&quot;/&gt;
                &lt;ChildComponent name=&quot;Mary&quot; age=&quot;25&quot; gender=&quot;female&quot;/&gt;
            &lt;/div&gt;
        );
    }
}
</code></pre>
</details>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the difference between state and props?</li>
</ul>
<p>    In React, both <code>state</code> and <code>props</code> are plain JavaScript objects and used to manage the data of a component, but they are used in different ways and have different characteristics.</p>
<p>    The <code>state</code> entity is managed by the component itself and can be updated using the setter(<code>setState()</code> for class components) function. Unlike props, state can be modified by the component and is used to manage the internal state of the component. Moreover, changes in the state trigger a re-render of the component and its children. The components cannot become reusable with the usage of state alone.</p>
<p>    On the otherhand, <code>props</code> (short for &quot;properties&quot;) are passed to a component by its parent component and are <code>read-only</code>, meaning that they cannot be modified by the own component itself. Also, props can be used to configure the behavior of a component and to pass data between components. The components become reusable with the usage of props.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the difference between HTML and React event handling?</li>
</ul>
<p>    Below are some of the main differences between HTML and React event handling,</p>
<ul>
<li>In HTML, the event name usually represents in <em>lowercase</em> as a convention:</li>
</ul>
<pre><code class="language-html">
&lt;button onclick=&quot;activateLasers()&quot;&gt;&lt;/button&gt;
</code></pre>
<p>   Whereas in React it follows <em>camelCase</em> convention:</p>
<pre><code class="language-jsx harmony">
&lt;button onClick={activateLasers}&gt;
</code></pre>
<ul>
<li>In HTML, you can return <code>false</code> to prevent default behavior:</li>
</ul>
<pre><code class="language-html">
&lt;a
 href=&quot;#&quot;
 onclick=&#x27;console.log(&quot;The link was clicked.&quot;); return false;&#x27;
/&gt;
</code></pre>
<p>   Whereas in React you must call <code>preventDefault()</code> explicitly:</p>
<pre><code class="language-javascript">
function handleClick(event) {
 event.preventDefault();
 console.log(&quot;The link was clicked.&quot;);
}
</code></pre>
<ul>
<li>In HTML, you need to invoke the function by appending <code>()</code></li>
</ul>
<p>      Whereas in react you should not append <code>()</code> with the function name. (refer &quot;activateLasers&quot; function in the first point for example)</p>
<p>   <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are synthetic events in React?</li>
</ul>
<p>    <code>SyntheticEvent</code> is a cross-browser wrapper around the browser&#x27;s native event. Its API is same as the browser&#x27;s native event, including <code>stopPropagation()</code> and <code>preventDefault()</code>, except the events work identically across all browsers. The native events can be accessed directly from synthetic events using <code>nativeEvent</code> attribute.</p>
<p>    Let&#x27;s take an example of BookStore title search component with the ability to get all native event properties</p>
<pre><code class="language-js">
function BookStore() {
  handleTitleChange(e) {
    console.log(&#x27;The new title is:&#x27;, e.target.value);
    // &#x27;e&#x27; represents synthetic event
    const nativeEvent = e.nativeEvent;
    console.log(nativeEvent);
    e.stopPropogation();
    e.preventDefault();
  }

  return &lt;input name=&quot;title&quot; onChange={handleTitleChange} /&gt;
}
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are inline conditional expressions?</li>
</ul>
<p>    You can use either <em>if statements</em> or <em>ternary expressions</em> which are available from JS to conditionally render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator <code>&amp;&amp;</code>.</p>
<pre><code class="language-jsx harmony">
&lt;h1&gt;Hello!&lt;/h1&gt;;
{
  messages.length &gt; 0 &amp;&amp; !isLogin ? (
    &lt;h2&gt;You have {messages.length} unread messages.&lt;/h2&gt;
  ) : (
    &lt;h2&gt;You don&#x27;t have unread messages.&lt;/h2&gt;
  );
}
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is &quot;key&quot; prop and what is the benefit of using it in arrays of elements?</li>
</ul>
<p>    A <code>key</code> is a special attribute you <strong>should</strong> include when mapping over arrays to render data. <em>Key</em> prop helps React identify which items have changed, are added, or are removed.</p>
<p>    Keys should be unique among its siblings. Most often we use ID from our data as <em>key</em>:</p>
<pre><code class="language-jsx harmony">
const todoItems = todos.map((todo) =&gt; &lt;li key={todo.id}&gt;{todo.text}&lt;/li&gt;);
</code></pre>
<p>    When you don&#x27;t have stable IDs for rendered items, you may use the item <em>index</em> as a <em>key</em> as a last resort:</p>
<pre><code class="language-jsx harmony">
const todoItems = todos.map((todo, index) =&gt; (
  &lt;li key={index}&gt;{todo.text}&lt;/li&gt;
));
</code></pre>
<p>    <strong>Note:</strong></p>
<ul>
<li>Using <em>indexes</em> for <em>keys</em> is <strong>not recommended</strong> if the order of items may change. This can negatively impact performance and may cause issues with component state.</li>
<li>If you extract list item as separate component then apply <em>keys</em> on list component instead of <code>li</code> tag.</li>
<li>There will be a warning message in the console if the <code>key</code> prop is not present on list items.</li>
<li>The key attribute accepts either string or number and internally convert it as string type.</li>
<li>Don&#x27;t generate the key on the fly something like <code>key={Math.random()}</code>. Because the keys will never match up between re-renders  and DOM created everytime.</li>
</ul>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is Virtual DOM?</li>
</ul>
<p>    The <em>Virtual DOM</em> (VDOM) is an in-memory representation of <em>Real DOM</em>. The representation of a UI is kept in memory and synced with the &quot;real&quot; DOM. It&#x27;s a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called <em>reconciliation</em>.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How Virtual DOM works?</li>
</ul>
<p>    The <em>Virtual DOM</em> works in three simple steps.</p>
<ul>
<li>Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.</li>
</ul>
<p>       <img src="images/vdom1.png" alt="vdom"></p>
<ul>
<li>Then the difference between the previous DOM representation and the new one is calculated.</li>
</ul>
<p>       <img src="images/vdom2.png" alt="vdom2"></p>
<ul>
<li>Once the calculations are done, the real DOM will be updated with only the things that have actually changed.</li>
</ul>
<p>       <img src="images/vdom3.png" alt="vdom3"></p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the difference between Shadow DOM and Virtual DOM?</li>
</ul>
<p>    The <em>Shadow DOM</em> is a browser technology designed primarily for scoping variables and CSS in <em>web components</em>. The <em>Virtual DOM</em> is a concept implemented by libraries in JavaScript on top of browser APIs.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is React Fiber?</li>
</ul>
<p>    Fiber is the new <em>reconciliation</em> engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the main goal of React Fiber?</li>
</ul>
<p>    The goal of <em>React Fiber</em> is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is <strong>incremental rendering</strong>: the ability to split rendering work into chunks and spread it out over multiple frames.</p>
<p>    <em>from documentation</em></p>
<p>    Its main goals are:</p>
<ul>
<li>Ability to split interruptible work in chunks.</li>
<li>Ability to prioritize, rebase and reuse work in progress.</li>
<li>Ability to yield back and forth between parents and children to support layout in React.</li>
<li>Ability to return multiple elements from render().</li>
<li>Better support for error boundaries.</li>
</ul>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are controlled components?</li>
</ul>
<p>    A component that controls the input elements within the forms on subsequent user input is called <strong>Controlled Component</strong>, i.e, every state mutation will have an associated handler function. That means, the displayed data is always in sync with the state of the component.</p>
<p>    The controlled components will be implemented using the below steps,</p>
<ul>
<li>Initialize the state using use state hooks in function components or inside constructor for class components.</li>
<li>Set the value of the form element to the respective state variable.</li>
<li>Create an event handler to handle the user input changes through useState updater function or setState from class component.</li>
<li>Attach the above event handler to form elements change or click events</li>
</ul>
<p>    For example, the name input field updates the user name using <code>handleChange</code> event handler as below,</p>
<pre><code class="language-javascript">
import React, { useState } from &quot;md1/react&quot;;

function UserProfile() {
  const [username, setUsername] = useState(&quot;&quot;);

  const handleChange = (e) =&gt; {
    setUsername(e.target.value);
  };

  return (
    &lt;form&gt;
      &lt;label&gt;
        Name:
        &lt;input type=&quot;text&quot; value={username} onChange={handleChange} /&gt;
      &lt;/label&gt;
    &lt;/form&gt;
  );
}
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are uncontrolled components?</li>
</ul>
<p>    The <strong>Uncontrolled Components</strong> are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.</p>
<p>    The uncontrolled components will be implemented using the below steps,</p>
<ul>
<li>Create a ref using useRef react hook in function component or <code>React.createRef()</code> in function component.</li>
<li>Attach this ref to the form element.</li>
<li>The form element value can be accessed directly through <code>ref</code> in event handlers or <code>componentDidMount</code> for class components</li>
</ul>
<p>    In the below UserProfile component, the <code>username</code> input is accessed using ref.</p>
<pre><code class="language-jsx harmony">
import React, { useRef } from &quot;md1/react&quot;;

function UserProfile() {
  const usernameRef = useRef(null);

  const handleSubmit = (event) =&gt; {
    event.preventDefault();
    console.log(&quot;The submitted username is: &quot; + usernameRef.current.value);
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;label&gt;
        Username:
        &lt;input type=&quot;text&quot; ref={usernameRef} /&gt;
      &lt;/label&gt;
      &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}
</code></pre>
<p>    In most cases, it&#x27;s recommend to use controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.</p>
    <details><summary><b>See Class</b></summary>
    <p>
<pre><code class="language-jsx harmony">
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert(&quot;A name was submitted: &quot; + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      &lt;form onSubmit={this.handleSubmit}&gt;
        &lt;label&gt;
          {&quot;Name:&quot;}
          &lt;input type=&quot;text&quot; ref={this.input} /&gt;
        &lt;/label&gt;
        &lt;input type=&quot;submit&quot; value=&quot;Submit&quot; /&gt;
      &lt;/form&gt;
    );
  }
}
</code></pre>
    </p>
    </details>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the difference between createElement and cloneElement?</li>
</ul>
<p>    JSX elements will be transpiled to <code>React.createElement()</code> functions to create React elements which are going to be used for the object representation of UI. Whereas <code>cloneElement</code> is used to clone an element and pass it new props.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is Lifting State Up in React?</li>
</ul>
<p>    When several components need to share the same changing data then it is recommended to <em>lift the shared state up</em> to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are Higher-Order Components?</li>
</ul>
<p>    A <em>higher-order component</em> (<em>HOC</em>) is a function that takes a component and returns a new component. Basically, it&#x27;s a pattern that is derived from React&#x27;s compositional nature.</p>
<p>    We call them <strong>pure components</strong> because they can accept any dynamically provided child component but they won&#x27;t modify or copy any behavior from their input components.</p>
<pre><code class="language-javascript">
const EnhancedComponent = higherOrderComponent(WrappedComponent);
</code></pre>
<p>    HOC can be used for many use cases:</p>
<ul>
<li>Code reuse, logic and bootstrap abstraction.</li>
<li>Render hijacking.</li>
<li>State abstraction and manipulation.</li>
<li>Props manipulation.</li>
</ul>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is children prop?</li>
</ul>
<p>    <em>Children</em> is a prop that allows you to pass components as data to other components, just like any other prop you use. Component tree put between component&#x27;s opening and closing tag will be passed to that component as <code>children</code> prop.</p>
<p>    A simple usage of children prop looks as below,</p>
<pre><code class="language-jsx harmony">
function MyDiv({ children }){
    return (
      &lt;div&gt;
        {children}
      &lt;/div&gt;;
    );
}

export default function Greeting() {
  return (
    &lt;MyDiv&gt;
      &lt;span&gt;{&quot;Hello&quot;}&lt;/span&gt;
      &lt;span&gt;{&quot;World&quot;}&lt;/span&gt;
    &lt;/MyDiv&gt;
  );
}
</code></pre>
<details><summary><b>See Class</b></summary>
<p>
<pre><code class="language-jsx harmony">
const MyDiv = React.createClass({
  render: function () {
    return &lt;div&gt;{this.props.children}&lt;/div&gt;;
  },
});

ReactDOM.render(
  &lt;MyDiv&gt;
    &lt;span&gt;{&quot;Hello&quot;}&lt;/span&gt;
    &lt;span&gt;{&quot;World&quot;}&lt;/span&gt;
  &lt;/MyDiv&gt;,
  node
);
</code></pre>
</p>
</details>
<p>    <strong>Note:</strong>  There are several methods available in the legacy React API to work with this prop. These include <code>React.Children.map</code>, <code>React.Children.forEach</code>, <code>React.Children.count</code>, <code>React.Children.only</code>, <code>React.Children.toArray</code>.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to write comments in React?</li>
</ul>
<p>    The comments in React/JSX are similar to JavaScript Multiline comments but are wrapped in curly braces.</p>
<p>    <strong>Single-line comments:</strong></p>
<pre><code class="language-jsx harmony">
&lt;div&gt;
  {/* Single-line comments(In vanilla JavaScript, the single-line comments are represented by double slash(//)) */}
  {&#96;Welcome ${user}, let&#x27;s play React&#96;}
&lt;/div&gt;
</code></pre>
<p>    <strong>Multi-line comments:</strong></p>
<pre><code class="language-jsx harmony">
&lt;div&gt;
  {/* Multi-line comments for more than
   one line */}
  {&#96;Welcome ${user}, let&#x27;s play React&#96;}
&lt;/div&gt;
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is reconciliation?</li>
</ul>
<p>    <code>Reconciliation</code> is the process through which React updates the Browser DOM and makes React work faster. React use a <code>diffing algorithm</code> so that component updates are predictable and faster. React would first calculate the difference between the <code>real DOM</code> and the copy of DOM <code>(Virtual DOM)</code> when there&#x27;s an update of components.</p>
<p>    React stores a copy of Browser DOM which is called <code>Virtual DOM</code>. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. This comparison is done by <code>Diffing Algorithm</code>.</p>
<p>    Now React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called <em>Reconciliation</em>.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Does the lazy function support named exports?</li>
</ul>
<p>    No, currently <code>React.lazy</code> function supports default exports only. If you would like to import modules which are named exports, you can create an intermediate module that reexports it as the default. It also ensures that tree shaking keeps working and don’t pull unused components.</p>
<p>    Let&#x27;s take a component file which exports multiple named components,</p>
<pre><code class="language-javascript">
// MoreComponents.js
export const SomeComponent = /* ... */;
export const UnusedComponent = /* ... */;
</code></pre>
<p>    and reexport <code>MoreComponents.js</code> components in an intermediate file <code>IntermediateComponent.js</code></p>
<pre><code class="language-javascript">
// IntermediateComponent.js
export { SomeComponent as default } from &quot;./MoreComponents.js&quot;;
</code></pre>
<p>    Now you can import the module using lazy function as below,</p>
<pre><code class="language-javascript">
import React, { lazy } from &quot;md1/react&quot;;
const SomeComponent = lazy(() =&gt; import(&quot;./IntermediateComponent.js&quot;));
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Why React uses <code>className</code> over <code>class</code> attribute?</li>
</ul>
<p>    The attribute names written in JSX turned into keys of JavaScript objects and the JavaScript names cannot contain dashes or reversed words, it is recommended to use camelCase whereever applicable in JSX code. The attribute <code>class</code> is a keyword in JavaScript, and JSX is an extension of JavaScript. That&#x27;s the principle reason why React uses <code>className</code> instead of <code>class</code>. Pass a string as the <code>className</code> prop.</p>
<pre><code class="language-jsx harmony">
render() {
  return &lt;span className={&#x27;menu navigation-menu&#x27;}&gt;{&#x27;Menu&#x27;}&lt;/span&gt;
}
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are fragments?</li>
</ul>
<p>    It&#x27;s a common pattern or practice in React for a component to return multiple elements. <em>Fragments</em> let you group a list of children without adding extra nodes to the DOM.</p>
<p>    You need to use either <strong>&lt;Fragment&gt;</strong> or a shorter syntax having empty tag (<strong>&lt;&gt;&lt;/&gt;</strong>).</p>
<p>    Below is the example of how to use fragment inside <em>Story</em> component.</p>
<pre><code class="language-jsx harmony">
function Story({title, description, date}) {
  return (
      &lt;Fragment&gt;
        &lt;h2&gt;{title}&lt;/h2&gt;
        &lt;p&gt;{description}&lt;/p&gt;
        &lt;p&gt;{date}&lt;/p&gt;
      &lt;/Fragment&gt;
    );
}
</code></pre>
<p>    It is also possible to render list of fragments inside a loop with the mandatory <strong>key</strong> attribute supplied.</p>
<pre><code class="language-jsx harmony">
function StoryBook() {
  return stories.map(story =&gt;
    &lt;Fragment key={ story.id}&gt;
      &lt;h2&gt;{story.title}&lt;/h2&gt;
      &lt;p&gt;{story.description}&lt;/p&gt;
      &lt;p&gt;{story.date}&lt;/p&gt;
    &lt;/Fragment&gt;
    );
}
</code></pre>
<p>    Usually, you don&#x27;t need to use <strong>&lt;Fragment&gt;</strong> until unless there is a need of <em>key</em> attribute. The usage of shorter syntax looks like below.</p>
<pre><code class="language-jsx harmony">
function Story({title, description, date}) {
  return (
      &lt;&gt;
        &lt;h2&gt;{title}&lt;/h2&gt;
        &lt;p&gt;{description}&lt;/p&gt;
        &lt;p&gt;{date}&lt;/p&gt;
      &lt;/&gt;
    );
}
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Why fragments are better than container divs?</li>
</ul>
<p>    Below are the list of reasons to prefer fragments over container DOM elements,</p>
<ul>
<li>Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.</li>
<li>Some CSS mechanisms like <em>Flexbox</em> and <em>CSS Grid</em> have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.</li>
<li>The DOM Inspector is less cluttered.</li>
</ul>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are portals in React?</li>
</ul>
<p>    <em>Portal</em> is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. When using</p>
<p>    CSS transform in a component, its descendant elements should not use fixed positioning, otherwise the layout will blow up. </p>
<pre><code class="language-javascript">
ReactDOM.createPortal(child, container);
</code></pre>
<p>    The first argument is any render-able React child, such as an element, string, or fragment. The second argument is a DOM element.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are stateless components?</li>
</ul>
<p>    If the behaviour of a component is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the <code>this</code> keyword altogether.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are stateful components?</li>
</ul>
<p>    If the behaviour of a component is dependent on the <em>state</em> of the component then it can be termed as stateful component. These <em>stateful components</em> are either function components with hooks or <em>class components</em>.</p>
<p>    Let&#x27;s take an example of function stateful component which update the state based on click event,</p>
<pre><code class="language-javascript">
import React, {useState} from &#x27;md1/react&#x27;;

const App = (props) =&gt; {
const [count, setCount] = useState(0);
handleIncrement() {
  setCount(count+1);
}

return (
  &lt;&gt;
    &lt;button onClick={handleIncrement}&gt;Increment&lt;/button&gt;
    &lt;span&gt;Counter: {count}&lt;/span&gt;
  &lt;/&gt;
  )
}
</code></pre>
<details><summary><b>See Class</b></summary>
<p>
<p>The equivalent class stateful component with a state that gets initialized in the <code>constructor</code>.</p>
<pre><code class="language-jsx harmony">
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleIncrement() {
    setState({count: this.state.count + 1})
  }

  render() {
    &lt;&gt;
     &lt;button onClick={() =&gt; this.handleIncrement}&gt;Increment&lt;/button&gt;
     &lt;span&gt;Count: {count}&lt;/span&gt;
    &lt;/&gt;
  }
}
</code></pre>
</p>
</details>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to apply validation on props in React?</li>
</ul>
<p>    When the application is running in <em>development mode</em>, React will automatically check all props that we set on components to make sure they have <em>correct type</em>. If the type is incorrect, React will generate warning messages in the console. It&#x27;s disabled in <em>production mode</em> due to performance impact. The mandatory props are defined with <code>isRequired</code>.</p>
<p>    The set of predefined prop types:</p>
<ul>
<li><code>PropTypes.number</code></li>
<li><code>PropTypes.string</code></li>
<li><code>PropTypes.array</code></li>
<li><code>PropTypes.object</code></li>
<li><code>PropTypes.func</code></li>
<li><code>PropTypes.node</code></li>
<li><code>PropTypes.element</code></li>
<li><code>PropTypes.bool</code></li>
<li><code>PropTypes.symbol</code></li>
<li><code>PropTypes.any</code></li>
</ul>
<p>    We can define <code>propTypes</code> for <code>User</code> component as below:</p>
<pre><code class="language-jsx harmony">
import React from &quot;md1/react&quot;;
import PropTypes from &quot;prop-types&quot;;

class User extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  };

  render() {
    return (
      &lt;&gt;
        &lt;h1&gt;{&#96;Welcome, ${this.props.name}&#96;}&lt;/h1&gt;
        &lt;h2&gt;{&#96;Age, ${this.props.age}&#96;}&lt;/h2&gt;
      &lt;/&gt;
    );
  }
}
</code></pre>
<p>    <strong>Note:</strong> In React v15.5 <em>PropTypes</em> were moved from <code>React.PropTypes</code> to <code>prop-types</code> library.</p>
<p>    <em>The Equivalent Functional Component</em></p>
<pre><code class="language-jsx harmony">
import React from &quot;react&quot;;
import PropTypes from &quot;prop-types&quot;;

function User({ name, age }) {
  return (
    &lt;&gt;
      &lt;h1&gt;{&#96;Welcome, ${name}&#96;}&lt;/h1&gt;
      &lt;h2&gt;{&#96;Age, ${age}&#96;}&lt;/h2&gt;
    &lt;/&gt;
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the advantages of React?</li>
</ul>
<p>    Below are the list of main advantages of React,</p>
<ul>
<li>Increases the application&#x27;s performance with <em>Virtual DOM</em>.</li>
<li>JSX makes code easy to read and write.</li>
<li>It renders both on client and server side (<em>SSR</em>).</li>
<li>Easy to integrate with frameworks (Angular, Backbone) since it is only a view library.</li>
<li>Easy to write unit and integration tests with tools such as Jest.</li>
</ul>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the limitations of React?</li>
</ul>
<p>    Apart from the advantages, there are few limitations of React too,</p>
<ul>
<li>React is just a view library, not a full framework.</li>
<li>There is a learning curve for beginners who are new to web development.</li>
<li>Integrating React into a traditional MVC framework requires some additional configuration.</li>
<li>The code complexity increases with inline templating and JSX.</li>
<li>Too many smaller components leading to over engineering or boilerplate.</li>
</ul>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the recommended ways for static type checking?</li>
</ul>
<p>    Normally we use <em>PropTypes library</em> (<code>React.PropTypes</code> moved to a <code>prop-types</code> package since React v15.5) for <em>type checking</em> in the React applications. For large code bases, it is recommended to use <em>static type checkers</em> such as Flow or TypeScript, that perform type checking at compile time and provide auto-completion features.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the use of <code>react-dom</code> package?</li>
</ul>
<p>    The <code>react-dom</code> package provides <em>DOM-specific methods</em> that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are:</p>
<ul>
<li><code>render()</code></li>
<li><code>hydrate()</code></li>
<li><code>unmountComponentAtNode()</code></li>
<li><code>findDOMNode()</code></li>
<li><code>createPortal()</code></li>
</ul>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is ReactDOMServer?</li>
</ul>
<p>    The <code>ReactDOMServer</code> object enables you to render components to static markup (typically used on node server). This object is mainly used for <em>server-side rendering</em> (SSR). The following methods can be used in both the server and browser environments:</p>
<ul>
<li><code>renderToString()</code></li>
<li><code>renderToStaticMarkup()</code></li>
</ul>
<p>    For example, you generally run a Node-based web server like Express, Hapi, or Koa, and you call <code>renderToString</code> to render your root component to a string, which you then send as response.</p>
<pre><code class="language-javascript">
// using Express
import { renderToString } from &quot;react-dom/server&quot;;
import MyPage from &quot;./MyPage&quot;;

app.get(&quot;/&quot;, (req, res) =&gt; {
  res.write(
    &quot;&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;title&gt;My Page&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&quot;
  );
  res.write(&#x27;&lt;div id=&quot;content&quot;&gt;&#x27;);
  res.write(renderToString(&lt;MyPage /&gt;));
  res.write(&quot;&lt;/div&gt;&lt;/body&gt;&lt;/html&gt;&quot;);
  res.end();
});
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to use innerHTML in React?</li>
</ul>
<p>    The <code>dangerouslySetInnerHTML</code> attribute is React&#x27;s replacement for using <code>innerHTML</code> in the browser DOM. Just like <code>innerHTML</code>, it is risky to use this attribute considering cross-site scripting (XSS) attacks. You just need to pass a <code>__html</code> object as key and HTML text as value.</p>
<p>    In this example MyComponent uses <code>dangerouslySetInnerHTML</code> attribute for setting HTML markup:</p>
<pre><code class="language-jsx harmony">
function createMarkup() {
  return { __html: &quot;First &amp;middot; Second&quot; };
}

function MyComponent() {
  return &lt;div dangerouslySetInnerHTML={createMarkup()} /&gt;;
}
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to use styles in React?</li>
</ul>
<p>    The <code>style</code> attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes.</p>
<pre><code class="language-jsx harmony">
const divStyle = {
  color: &quot;blue&quot;,
  backgroundImage: &quot;url(&quot; + imgUrl + &quot;)&quot;,
};

function HelloWorldComponent() {
  return &lt;div style={divStyle}&gt;Hello World!&lt;/div&gt;;
}
</code></pre>
<p>    Style keys are camelCased in order to be consistent with accessing the properties on DOM nodes in JavaScript (e.g. <code>node.style.backgroundImage</code>).</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How events are different in React?</li>
</ul>
<p>    Handling events in React elements has some syntactic differences:</p>
<ul>
<li>React event handlers are named using camelCase, rather than lowercase.</li>
<li>With JSX you pass a function as the event handler, rather than a string.</li>
</ul>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the impact of indexes as keys?</li>
</ul>
<p>    Keys should be stable, predictable, and unique so that React can keep track of elements.</p>
<p>    In the below code snippet each element&#x27;s key will be based on ordering, rather than tied to the data that is being represented. This limits the optimizations that React can do and creates confusing bugs in the application.</p>
<pre><code class="language-jsx harmony">
{
  todos.map((todo, index) =&gt; &lt;Todo {...todo} key={index} /&gt;);
}
</code></pre>
<p>    If you use element data for unique key, assuming <code>todo.id</code> is unique to this list and stable, React would be able to reorder elements without needing to reevaluate them as much.</p>
<pre><code class="language-jsx harmony">
{
  todos.map((todo) =&gt; &lt;Todo {...todo} key={todo.id} /&gt;);
}
</code></pre>
<p>    <strong>Note:</strong> If you don&#x27;t specify <code>key</code> prop at all, React will use index as a key&#x27;s value while iterating over an array of data.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How do you conditionally render components?</li>
</ul>
<p>    In some cases you want to render different components depending on some state. JSX does not render <code>false</code> or <code>undefined</code>, so you can use conditional <em>short-circuiting</em> to render a given part of your component only if a certain condition is true.</p>
<pre><code class="language-jsx harmony">
const MyComponent = ({ name, address }) =&gt; (
  &lt;div&gt;
    &lt;h2&gt;{name}&lt;/h2&gt;
    {address &amp;&amp; &lt;p&gt;{address}&lt;/p&gt;}
  &lt;/div&gt;
);
</code></pre>
<p>    If you need an <code>if-else</code> condition then use <em>ternary operator</em>.</p>
<pre><code class="language-jsx harmony">
const MyComponent = ({ name, address }) =&gt; (
  &lt;div&gt;
    &lt;h2&gt;{name}&lt;/h2&gt;
    {address ? &lt;p&gt;{address}&lt;/p&gt; : &lt;p&gt;{&quot;Address is not available&quot;}&lt;/p&gt;}
  &lt;/div&gt;
);
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Why we need to be careful when spreading props on DOM elements?</li>
</ul>
<p>    When we <em>spread props</em> we run into the risk of adding unknown HTML attributes, which is a bad practice. Instead we can use prop destructuring with <code>...rest</code> operator, so it will add only required props.</p>
<p>    For example,</p>
<pre><code class="language-jsx harmony">
const ComponentA = () =&gt; (
  &lt;ComponentB isDisplay={true} className={&quot;componentStyle&quot;} /&gt;
);

const ComponentB = ({ isDisplay, ...domProps }) =&gt; (
  &lt;div {...domProps}&gt;{&quot;ComponentB&quot;}&lt;/div&gt;
);
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How do you memoize a component?</li>
</ul>
<p>    There are memoize libraries available which can be used on function components.</p>
<p>    For example <code>moize</code> library can memoize the component in another component.</p>
<pre><code class="language-jsx harmony">
import moize from &quot;moize&quot;;
import Component from &quot;./components/Component&quot;; // this module exports a non-memoized component

const MemoizedFoo = moize.react(Component);

const Consumer = () =&gt; {
  &lt;div&gt;
    {&quot;I will memoize the following entry:&quot;}
    &lt;MemoizedFoo /&gt;
  &lt;/div&gt;;
};
</code></pre>
<p>    <strong>Update:</strong> Since React v16.6.0, we have a <code>React.memo</code>. It provides a higher order component which memoizes component unless the props change. To use it, simply wrap the component using React.memo before you use it.</p>
<pre><code class="language-js">
const MemoComponent = React.memo(function MemoComponent(props) {
  /* render using props */
});
OR;
export default React.memo(MyFunctionComponent);
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How you implement Server Side Rendering or SSR?</li>
</ul>
<p>    React is already equipped to handle rendering on Node servers. A special version of the DOM renderer is available, which follows the same pattern as on the client side.</p>
<pre><code class="language-jsx harmony">
import ReactDOMServer from &quot;react-dom/server&quot;;
import App from &quot;./App&quot;;

ReactDOMServer.renderToString(&lt;App /&gt;);
</code></pre>
<p>    This method will output the regular HTML as a string, which can be then placed inside a page body as part of the server response. On the client side, React detects the pre-rendered content and seamlessly picks up where it left off.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to enable production mode in React?</li>
</ul>
<p>    You should use Webpack&#x27;s <code>DefinePlugin</code> method to set <code>NODE_ENV</code> to <code>production</code>, by which it strip out things like propType validation and extra warnings. Apart from this, if you minify the code, for example, Uglify&#x27;s dead-code elimination to strip out development only code and comments, it will drastically reduce the size of your bundle.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Do Hooks replace render props and higher order components?</li>
</ul>
<p>    Both render props and higher-order components render only a single child but in most of the cases Hooks are a simpler way to serve this by reducing nesting in your tree.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is a switching component?</li>
</ul>
<p>    A <em>switching component</em> is a component that renders one of many components. We need to use object to map prop values to components.</p>
<p>    For example, a switching component to display different pages based on <code>page</code> prop:</p>
<pre><code class="language-jsx harmony">
import HomePage from &quot;./HomePage&quot;;
import AboutPage from &quot;./AboutPage&quot;;
import ServicesPage from &quot;./ServicesPage&quot;;
import ContactPage from &quot;./ContactPage&quot;;

const PAGES = {
  home: HomePage,
  about: AboutPage,
  services: ServicesPage,
  contact: ContactPage,
};

const Page = (props) =&gt; {
  const Handler = PAGES[props.page] || ContactPage;

  return &lt;Handler {...props} /&gt;;
};

// The keys of the PAGES object can be used in the prop types to catch dev-time errors.
Page.propTypes = {
  page: PropTypes.oneOf(Object.keys(PAGES)).isRequired,
};
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are React Mixins?</li>
</ul>
<p>    <em>Mixins</em> are a way to totally separate components to have a common functionality. Mixins <strong>should not be used</strong> and can be replaced with <em>higher-order components</em> or <em>decorators</em>.</p>
<p>    One of the most commonly used mixins is <code>PureRenderMixin</code>. You might be using it in some components to prevent unnecessary re-renders when the props and state are shallowly equal to the previous props and state:</p>
<pre><code class="language-javascript">
const PureRenderMixin = require(&quot;react-addons-pure-render-mixin&quot;);

const Button = React.createClass({
  mixins: [PureRenderMixin],
  // ...
});
</code></pre>
<p>     &lt;!-- TODO: mixins are deprecated --&gt;</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the Pointer Events supported in React?</li>
</ul>
<p>    <em>Pointer Events</em> provide a unified way of handling all input events. In the old days we had a mouse and respective event listeners to handle them but nowadays we have many devices which don&#x27;t correlate to having a mouse, like phones with touch surface or pens. We need to remember that these events will only work in browsers that support the <em>Pointer Events</em> specification.</p>
<p>    The following event types are now available in <em>React DOM</em>:</p>
<ul>
<li><code>onPointerDown</code></li>
<li><code>onPointerMove</code></li>
<li><code>onPointerUp</code></li>
<li><code>onPointerCancel</code></li>
<li><code>onGotPointerCapture</code></li>
<li><code>onLostPointerCapture</code></li>
<li><code>onPointerEnter</code></li>
<li><code>onPointerLeave</code></li>
<li><code>onPointerOver</code></li>
<li><code>onPointerOut</code></li>
</ul>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Why should component names start with capital letter?</li>
</ul>
<p>    If you are rendering your component using JSX, the name of that component has to begin with a capital letter otherwise React will throw an error as an unrecognized tag. This convention is because only HTML elements and SVG tags can begin with a lowercase letter.</p>
<pre><code class="language-jsx harmony">
function SomeComponent {
  // Code goes here
}
</code></pre>
<p>    You can define function component which name starts with lowercase letter, but when it&#x27;s imported it should have capital letter. Here lowercase is fine:</p>
<pre><code class="language-jsx harmony">
function myComponent {
  render() {
    return &lt;div /&gt;;
  }
}

export default myComponent;
</code></pre>
<p>    While when imported in another file it should start with capital letter:</p>
<pre><code class="language-jsx harmony">
import MyComponent from &quot;./myComponent&quot;;
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Are custom DOM attributes supported in React v16?</li>
</ul>
<p>    Yes. In the past, React used to ignore unknown DOM attributes. If you wrote JSX with an attribute that React doesn&#x27;t recognize, React would just skip it.</p>
<p>    For example, let&#x27;s take a look at the below attribute:</p>
<pre><code class="language-jsx harmony">
&lt;div mycustomattribute={&quot;something&quot;} /&gt;
</code></pre>
<p>    Would render an empty div to the DOM with React v15:</p>
<pre><code class="language-html">
&lt;div /&gt;
</code></pre>
<p>    In React v16 any unknown attributes will end up in the DOM:</p>
<pre><code class="language-html">
&lt;div mycustomattribute=&quot;something&quot; /&gt;
</code></pre>
<p>    This is useful for supplying browser-specific non-standard attributes, trying new DOM APIs, and integrating with opinionated third-party libraries.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to loop inside JSX?</li>
</ul>
<p>    You can simply use <code>Array.prototype.map</code> with ES6 <em>arrow function</em> syntax.</p>
<p>    For example, the <code>items</code> array of objects is mapped into an array of components:</p>
<pre><code class="language-jsx harmony">
&lt;tbody&gt;
  {items.map((item) =&gt; (
    &lt;SomeComponent key={item.id} name={item.name} /&gt;
  ))}
&lt;/tbody&gt;
</code></pre>
<p>    But you can&#x27;t iterate using <code>for</code> loop:</p>
<pre><code class="language-jsx harmony">
&lt;tbody&gt;
  for (let i = 0; i &lt; items.length; i++) {
    &lt;SomeComponent key={items[i].id} name={items[i].name} /&gt;
  }
&lt;/tbody&gt;
</code></pre>
<p>    This is because JSX tags are transpiled into <em>function calls</em>, and you can&#x27;t use statements inside expressions. This may change thanks to <code>do</code> expressions which are <em>stage 1 proposal</em>.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How do you access props in attribute quotes?</li>
</ul>
<p>    React (or JSX) doesn&#x27;t support variable interpolation inside an attribute value. The below representation won&#x27;t work:</p>
<pre><code class="language-jsx harmony">
&lt;img className=&quot;image&quot; src=&quot;images/{this.props.image}&quot; /&gt;
</code></pre>
<p>    But you can put any JS expression inside curly braces as the entire attribute value. So the below expression works:</p>
<pre><code class="language-jsx harmony">
&lt;img className=&quot;image&quot; src={&quot;images/&quot; + this.props.image} /&gt;
</code></pre>
<p>    Using <em>template strings</em> will also work:</p>
<pre><code class="language-jsx harmony">
&lt;img className=&quot;image&quot; src={&#96;images/${this.props.image}&#96;} /&gt;
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is React proptype array with shape?</li>
</ul>
<p>    If you want to pass an array of objects to a component with a particular shape then use <code>React.PropTypes.shape()</code> as an argument to <code>React.PropTypes.arrayOf()</code>.</p>
<pre><code class="language-javascript">
ReactComponent.propTypes = {
  arrayWithShape: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      color: React.PropTypes.string.isRequired,
      fontSize: React.PropTypes.number.isRequired,
    })
  ).isRequired,
};
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to conditionally apply class attributes?</li>
</ul>
<p>    You shouldn&#x27;t use curly braces inside quotes because it is going to be evaluated as a string.</p>
<pre><code class="language-jsx harmony">
&lt;div className=&quot;btn-panel {this.props.visible ? &#x27;show&#x27; : &#x27;hidden&#x27;}&quot;&gt;
</code></pre>
<p>    Instead you need to move curly braces outside (don&#x27;t forget to include spaces between class names):</p>
<pre><code class="language-jsx harmony">
&lt;div className={&#x27;btn-panel &#x27; + (this.props.visible ? &#x27;show&#x27; : &#x27;hidden&#x27;)}&gt;
</code></pre>
<p>    <em>Template strings</em> will also work:</p>
<pre><code class="language-jsx harmony">
&lt;div className={&#96;btn-panel ${this.props.visible ? &#x27;show&#x27; : &#x27;hidden&#x27;}&#96;}&gt;
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the difference between React and ReactDOM?</li>
</ul>
<p>    The <code>react</code> package contains <code>React.createElement()</code>, <code>React.Component</code>, <code>React.Children</code>, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The <code>react-dom</code> package contains <code>ReactDOM.render()</code>, and in <code>react-dom/server</code> we have <em>server-side rendering</em> support with <code>ReactDOMServer.renderToString()</code> and <code>ReactDOMServer.renderToStaticMarkup()</code>.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Why ReactDOM is separated from React?</li>
</ul>
<p>    The React team worked on extracting all DOM-related features into a separate library called <em>ReactDOM</em>. React v0.14 is the first release in which the libraries are split. By looking at some of the packages, <code>react-native</code>, <code>react-art</code>, <code>react-canvas</code>, and <code>react-three</code>, it has become clear that the beauty and essence of React has nothing to do with browsers or the DOM.</p>
<p>    To build more environments that React can render to, React team planned to split the main React package into two: <code>react</code> and <code>react-dom</code>. This paves the way to writing components that can be shared between the web version of React and React Native.</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to use React label element?</li>
</ul>
<p>    If you try to render a <code>&lt;label&gt;</code> element bound to a text input using the standard <code>for</code> attribute, then it produces HTML missing that attribute and prints a warning to the console.</p>
<pre><code class="language-jsx harmony">
&lt;label for={&#x27;user&#x27;}&gt;{&#x27;User&#x27;}&lt;/label&gt;
&lt;input type={&#x27;text&#x27;} id={&#x27;user&#x27;} /&gt;
</code></pre>
<p>    Since <code>for</code> is a reserved keyword in JavaScript, use <code>htmlFor</code> instead.</p>
<pre><code class="language-jsx harmony">
&lt;label htmlFor={&#x27;user&#x27;}&gt;{&#x27;User&#x27;}&lt;/label&gt;
&lt;input type={&#x27;text&#x27;} id={&#x27;user&#x27;} /&gt;
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to combine multiple inline style objects?</li>
</ul>
<p>    You can use <em>spread operator</em> in regular React:</p>
<pre><code class="language-jsx harmony">
&lt;button style={{ ...styles.panel.button, ...styles.panel.submitButton }}&gt;
  {&quot;Submit&quot;}
&lt;/button&gt;
</code></pre>
<p>    If you&#x27;re using React Native then you can use the array notation:</p>
<pre><code class="language-jsx harmony">
&lt;button style={[styles.panel.button, styles.panel.submitButton]}&gt;
  {&quot;Submit&quot;}
&lt;/button&gt;
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to re-render the view when the browser is resized?</li>
</ul>
<p>      You can use the <code>useState</code> hook to manage the width and height state variables, and the <code>useEffect</code> hook to add and remove the <code>resize</code> event listener. The <code>[]</code> dependency array passed to useEffect ensures that the effect only runs once (on mount) and not on every re-render.</p>
<pre><code class="language-javascript">
import React, { useState, useEffect } from &quot;md1/react&quot;;
function WindowDimensions() {
const [dimensions, setDimensions] = useState({
  width: window.innerWidth,
  height: window.innerHeight,
});

useEffect(() =&gt; {
  function handleResize() {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  window.addEventListener(&quot;resize&quot;, handleResize);
  return () =&gt; window.removeEventListener(&quot;resize&quot;, handleResize);
}, []);

return (
  &lt;span&gt;
    {dimensions.width} x {dimensions.height}
  &lt;/span&gt;
);
}
</code></pre>
<details>
<summary><h4>Using Class Component</h4></summary>
<p>You can listen to the <code>resize</code> event in <code>componentDidMount()</code> and then update the dimensions (<code>width</code> and <code>height</code>). You should remove the listener in <code>componentWillUnmount()</code> method.</p>
<pre><code class="language-javascript">
class WindowDimensions extends React.Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener(&quot;resize&quot;, this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener(&quot;resize&quot;, this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  render() {
    return (
      &lt;span&gt;
        {this.state.width} x {this.state.height}
      &lt;/span&gt;
    );
  }
}
</code></pre>
</details>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to pretty print JSON with React?</li>
</ul>
<p>     We can use <code>&lt;pre&gt;</code> tag so that the formatting of the <code>JSON.stringify()</code> is retained:</p>
<pre><code class="language-jsx harmony">
const data = { name: &quot;John&quot;, age: 42 };

function User {
 return &lt;pre&gt;{JSON.stringify(data, null, 2)}&lt;/pre&gt;;
}

const container = createRoot(document.getElementById(&quot;container&quot;));

container.render(&lt;User /&gt;);
</code></pre>
<details><summary><b>See Class</b></summary>
<p>
<pre><code class="language-jsx harmony">
const data = { name: &quot;John&quot;, age: 42 };

class User extends React.Component {
render() {
  return &lt;pre&gt;{JSON.stringify(data, null, 2)}&lt;/pre&gt;;
}
}

React.render(&lt;User /&gt;, document.getElementById(&quot;container&quot;));
</code></pre>
</p>
</details>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Why you can&#x27;t update props in React?</li>
</ul>
<p>     The React philosophy is that props should be <em>immutable</em>(read only) and <em>top-down</em>. This means that a parent can send any prop values to a child, but the child can&#x27;t modify received props.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to focus an input element on page load?</li>
</ul>
<p>     You need to use <code>useEffect</code> hook to set focus on input field during page load time for functional component.</p>
<pre><code class="language-jsx harmony">
import React, { useEffect, useRef } from &quot;md1/react&quot;;

const App = () =&gt; {
const inputElRef = useRef(null);

useEffect(() =&gt; {
 inputElRef.current.focus();
}, []);

return (
 &lt;div&gt;
   &lt;input defaultValue={&quot;Won&#x27;t focus&quot;} /&gt;
   &lt;input ref={inputElRef} defaultValue={&quot;Will focus&quot;} /&gt;
 &lt;/div&gt;
);
};

ReactDOM.render(&lt;App /&gt;, document.getElementById(&quot;app&quot;));
</code></pre>
<details><summary><b>See Class</b></summary>
<p>
<p>You can do it by creating <em>ref</em> for <code>input</code> element and using it in <code>componentDidMount()</code>:</p>
<pre><code class="language-jsx harmony">
class App extends React.Component {
componentDidMount() {
  this.nameInput.focus();
}

render() {
  return (
    &lt;div&gt;
      &lt;input defaultValue={&quot;Won&#x27;t focus&quot;} /&gt;
      &lt;input
        ref={(input) =&gt; (this.nameInput = input)}
        defaultValue={&quot;Will focus&quot;}
      /&gt;
    &lt;/div&gt;
  );
}
}

ReactDOM.render(&lt;App /&gt;, document.getElementById(&quot;app&quot;));
</code></pre>
</p>
</details>
<p>  <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How can we find the version of React at runtime in the browser?</li>
</ul>
<p>     You can use <code>React.version</code> to get the version.</p>
<pre><code class="language-jsx harmony">
const REACT_VERSION = React.version;

ReactDOM.render(
&lt;div&gt;{&#96;React version: ${REACT_VERSION}&#96;}&lt;/div&gt;,
document.getElementById(&quot;app&quot;)
);
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to add Google Analytics for React Router?</li>
</ul>
<p>     Add a listener on the <code>history</code> object to record each page view:</p>
<pre><code class="language-javascript">
history.listen(function (location) {
window.ga(&quot;set&quot;, &quot;page&quot;, location.pathname + location.search);
window.ga(&quot;send&quot;, &quot;pageview&quot;, location.pathname + location.search);
});
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How do you apply vendor prefixes to inline styles in React?</li>
</ul>
<p>     React <em>does not</em> apply <em>vendor prefixes</em> automatically. You need to add vendor prefixes manually.</p>
<pre><code class="language-jsx harmony">
&lt;div
style={{
 transform: &quot;rotate(90deg)&quot;,
 WebkitTransform: &quot;rotate(90deg)&quot;, // note the capital &#x27;W&#x27; here
 msTransform: &quot;rotate(90deg)&quot;, // &#x27;ms&#x27; is the only lowercase vendor prefix
}}
/&gt;
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to import and export components using React and ES6?</li>
</ul>
<p>     You should use default for exporting the components</p>
<pre><code class="language-jsx harmony">
import User from &quot;user&quot;;

export default function MyProfile {
 return &lt;User type=&quot;customer&quot;&gt;//...&lt;/User&gt;;
}
</code></pre>
<details><summary><b>See Class</b></summary>
<p>
<pre><code class="language-jsx harmony">
import React from &quot;react&quot;;
import User from &quot;user&quot;;

export default class MyProfile extends React.Component {
    render() {
     return &lt;User type=&quot;customer&quot;&gt;//...&lt;/User&gt;;
    }
}
</code></pre>
</p>
</details>
<p>     With the export specifier, the MyProfile is going to be the member and exported to this module and the same can be imported without mentioning the name in other components.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>#### What are the exceptions on React component naming?</li>
</ul>
<p>    The component names should start with an uppercase letter but there are few exceptions to this convention. The lowercase tag names with a dot (property accessors) are still considered as valid component names.</p>
<p>    For example, the below tag can be compiled to a valid component,</p>
<pre><code class="language-jsx harmony">
     render() {
          return (
            &lt;obj.component/&gt; // &#96;React.createElement(obj.component)&#96;
          )
    }
</code></pre>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Is it possible to use async/await in plain React?</li>
</ul>
<p>     If you want to use <code>async</code>/<code>await</code> in React, you will need <em>Babel</em> and <a href="https://babeljs.io/docs/en/babel-plugin-transform-async-to-generator">transform-async-to-generator</a> plugin. React Native ships with Babel and a set of transforms.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the common folder structures for React?</li>
</ul>
<p>     There are two common practices for React project file structure.</p>
<ul>
<li><strong>Grouping by features or routes:</strong></li>
</ul>
<p>   One common way to structure projects is locate CSS, JS, and tests together, grouped by feature or route.</p>
<pre><code class="language-">
common/
├─ Avatar.js
├─ Avatar.css
├─ APIUtils.js
└─ APIUtils.test.js
feed/
├─ index.js
├─ Feed.js
├─ Feed.css
├─ FeedStory.js
├─ FeedStory.test.js
└─ FeedAPI.js
profile/
├─ index.js
├─ Profile.js
├─ ProfileHeader.js
├─ ProfileHeader.css
└─ ProfileAPI.js
</code></pre>
<ul>
<li><strong>Grouping by file type:</strong></li>
</ul>
<p>   Another popular way to structure projects is to group similar files together.</p>
<pre><code class="language-">
api/
├─ APIUtils.js
├─ APIUtils.test.js
├─ ProfileAPI.js
└─ UserAPI.js
components/
├─ Avatar.js
├─ Avatar.css
├─ Feed.js
├─ Feed.css
├─ FeedStory.js
├─ FeedStory.test.js
├─ Profile.js
├─ ProfileHeader.js
└─ ProfileHeader.css
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the popular packages for animation?</li>
</ul>
<p>     <em>React Transition Group</em> and <em>React Motion</em> are popular animation packages in React ecosystem.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the benefit of styles modules?</li>
</ul>
<p>     It is recommended to avoid hard coding style values in components. Any values that are likely to be used across different UI components should be extracted into their own modules.</p>
<p>     For example, these styles could be extracted into a separate component:</p>
<pre><code class="language-javascript">
export const colors = {
white,
black,
blue,
};

export const space = [0, 8, 16, 32, 64];
</code></pre>
<p>And then imported individually in other components:</p>
<pre><code class="language-javascript">
import { space, colors } from &quot;./styles&quot;;
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the popular React-specific linters?</li>
</ul>
<p>     ESLint is a popular JavaScript linter. There are plugins available that analyse specific code styles. One of the most common for React is an npm package called <code>eslint-plugin-react</code>. By default, it will check a number of best practices, with rules checking things from keys in iterators to a complete set of prop types.</p>
<p>     Another popular plugin is <code>eslint-plugin-jsx-a11y</code>, which will help fix common issues with accessibility. As JSX offers slightly different syntax to regular HTML, issues with <code>alt</code> text and <code>tabindex</code>, for example, will not be picked up by regular plugins.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<h2 id="react-router">React Router</h2>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is React Router?</li>
</ul>
<p>     React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what&#x27;s being displayed on the page.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How React Router is different from history library?</li>
</ul>
<p>     React Router is a wrapper around the <code>history</code> library which handles interaction with the browser&#x27;s <code>window.history</code> with its browser and hash histories. It also provides memory history which is useful for environments that don&#x27;t have global history, such as mobile app development (React Native) and unit testing with Node.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the <code>&lt;Router&gt;</code> components of React Router v4?</li>
</ul>
<p>     React Router v4 provides below 3 <code>&lt;Router&gt;</code> components:</p>
<ul>
<li><code>&lt;BrowserRouter&gt;</code></li>
<li><code>&lt;HashRouter&gt;</code></li>
<li><code>&lt;MemoryRouter&gt;</code></li>
</ul>
<p>     The above components will create <em>browser</em>, <em>hash</em>, and <em>memory</em> history instances. React Router v4 makes the properties and methods of the <code>history</code> instance associated with your router available through the context in the <code>router</code> object.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the purpose of <code>push()</code> and <code>replace()</code> methods of <code>history</code>?</li>
</ul>
<p>     A history instance has two methods for navigation purpose.</p>
<ul>
<li><code>push()</code></li>
<li><code>replace()</code></li>
</ul>
<p>     If you think of the history as an array of visited locations, <code>push()</code> will add a new location to the array and <code>replace()</code> will replace the current location in the array with the new one.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How do you programmatically navigate using React Router v4?</li>
</ul>
<p>     There are three different ways to achieve programmatic routing/navigation within components.</p>
<ul>
<li><strong>Using the <code>withRouter()</code> higher-order function:</strong></li>
</ul>
<p>   The <code>withRouter()</code> higher-order function will inject the history object as a prop of the component. This object provides <code>push()</code> and <code>replace()</code> methods to avoid the usage of context.</p>
<pre><code class="language-jsx harmony">
import { withRouter } from &quot;react-router-dom&quot;; // this also works with &#x27;react-router-native&#x27;

const Button = withRouter(({ history }) =&gt; (
 &lt;button
   type=&quot;button&quot;
   onClick={() =&gt; {
     history.push(&quot;/new-location&quot;);
   }}
      &gt;
   {&quot;Click Me!&quot;}
 &lt;/button&gt;
));
</code></pre>
<ul>
<li><strong>Using <code>&lt;Route&gt;</code> component and render props pattern:</strong></li>
</ul>
<p>   The <code>&lt;Route&gt;</code> component passes the same props as <code>withRouter()</code>, so you will be able to access the history methods through the history prop.</p>
<pre><code class="language-jsx harmony">
import { Route } from &quot;react-router-dom&quot;;

const Button = () =&gt; (
 &lt;Route
   render={({ history }) =&gt; (
     &lt;button
       type=&quot;button&quot;
       onClick={() =&gt; {
         history.push(&quot;/new-location&quot;);
       }}
          &gt;
       {&quot;Click Me!&quot;}
     &lt;/button&gt;
   )}
 /&gt;
);
</code></pre>
<ul>
<li><strong>Using context:</strong></li>
</ul>
<p>   This option is not recommended and treated as unstable API.</p>
<pre><code class="language-jsx harmony">
const Button = (props, context) =&gt; (
 &lt;button
   type=&quot;button&quot;
   onClick={() =&gt; {
     context.history.push(&quot;/new-location&quot;);
   }}
      &gt;
   {&quot;Click Me!&quot;}
 &lt;/button&gt;
);

Button.contextTypes = {
 history: React.PropTypes.shape({
   push: React.PropTypes.func.isRequired,
 }),
};
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to get query parameters in React Router v4?</li>
</ul>
<p>The ability to parse query strings was taken out of React Router v4 because there have been user requests over the years to support different implementation. So the decision has been given to users to choose the implementation they like. The recommended approach is to use query strings library.</p>
<pre><code class="language-javascript">
const queryString = require(&quot;query-string&quot;);
const parsed = queryString.parse(props.location.search);
</code></pre>
<p>You can also use <code>URLSearchParams</code> if you want something native:</p>
<pre><code class="language-javascript">
const params = new URLSearchParams(props.location.search);
const foo = params.get(&quot;name&quot;);
</code></pre>
<p>You should use a <em>polyfill</em> for IE11.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Why you get &quot;Router may have only one child element&quot; warning?</li>
</ul>
<p>You have to wrap your Route&#x27;s in a <code>&lt;Switch&gt;</code> block because <code>&lt;Switch&gt;</code> is unique in that it renders a route exclusively.</p>
<p>At first you need to add <code>Switch</code> to your imports:</p>
<pre><code class="language-javascript">
import { Switch, Router, Route } from &quot;react-router&quot;;
</code></pre>
<p>Then define the routes within <code>&lt;Switch&gt;</code> block:</p>
<pre><code class="language-jsx harmony">
&lt;Router&gt;
&lt;Switch&gt;
 &lt;Route {/* ... */} /&gt;
 &lt;Route {/* ... */} /&gt;
&lt;/Switch&gt;
&lt;/Router&gt;
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to pass params to <code>history.push</code> method in React Router v4?</li>
</ul>
<p>     While navigating you can pass props to the <code>history</code> object:</p>
<pre><code class="language-javascript">
this.props.history.push({
  pathname: &quot;/template&quot;,
  search: &quot;?name=sudheer&quot;,
  state: { detail: response.data },
});
</code></pre>
<p>     The <code>search</code> property is used to pass query params in <code>push()</code> method.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to implement <em>default</em> or <em>NotFound</em> page?</li>
</ul>
<p>     A <code>&lt;Switch&gt;</code> renders the first child <code>&lt;Route&gt;</code> that matches. A <code>&lt;Route&gt;</code> with no path always matches. So you just need to simply drop path attribute as below</p>
<pre><code class="language-jsx harmony">
&lt;Switch&gt;
  &lt;Route exact path=&quot;/&quot; component={Home} /&gt;
  &lt;Route path=&quot;/user&quot; component={User} /&gt;
  &lt;Route component={NotFound} /&gt;
&lt;/Switch&gt;
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to get history on React Router v4?</li>
</ul>
<p>     Below are the list of steps to get history object on React Router v4,</p>
<ul>
<li>Create a module that exports a <code>history</code> object and import this module across the project.</li>
</ul>
<p>        For example, create <code>history.js</code> file:</p>
<pre><code class="language-javascript">
import { createBrowserHistory } from &quot;history&quot;;

export default createBrowserHistory({
  /* pass a configuration object here if needed */
});
</code></pre>
<ul>
<li>You should use the <code>&lt;Router&gt;</code> component instead of built-in routers. Import the above <code>history.js</code> inside <code>index.js</code> file:</li>
</ul>
<pre><code class="language-jsx harmony">
import { Router } from &quot;react-router-dom&quot;;
import history from &quot;./history&quot;;
import App from &quot;./App&quot;;

ReactDOM.render(
  &lt;Router history={history}&gt;
    &lt;App /&gt;
  &lt;/Router&gt;,
  holder
);
</code></pre>
<ul>
<li>You can also use push method of <code>history</code> object similar to built-in history object:</li>
</ul>
<pre><code class="language-javascript">
// some-other-file.js
import history from &quot;./history&quot;;

history.push(&quot;/go-here&quot;);
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to perform automatic redirect after login?</li>
</ul>
<p>     The <code>react-router</code> package provides <code>&lt;Redirect&gt;</code> component in React Router. Rendering a <code>&lt;Redirect&gt;</code> will navigate to a new location. Like server-side redirects, the new location will override the current location in the history stack.</p>
<pre><code class="language-javascript">
import { Redirect } from &quot;react-router&quot;;

export default function Login {
    if (this.state.isLoggedIn === true) {
      return &lt;Redirect to=&quot;/your/redirect/page&quot; /&gt;;
    } else {
      return &lt;div&gt;{&quot;Login Please&quot;}&lt;/div&gt;;
    }
}
</code></pre>
      <details><summary><b>See Class</b></summary>
      <p>
<pre><code class="language-jsx">
    import React, { Component } from &quot;md1/react&quot;;
    import { Redirect } from &quot;react-router&quot;;

    export default class LoginComponent extends Component {
      render() {
        if (this.state.isLoggedIn === true) {
          return &lt;Redirect to=&quot;/your/redirect/page&quot; /&gt;;
        } else {
          return &lt;div&gt;{&quot;Login Please&quot;}&lt;/div&gt;;
        }
      }
    }
</code></pre>
       </p>
       </details>
<p>  <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<h2 id="react-internationalization">React Internationalization</h2>
<ul>
<li>### What is React Intl?</li>
</ul>
<p>     The <em>React Intl</em> library makes internationalization in React straightforward, with off-the-shelf components and an API that can handle everything from formatting strings, dates, and numbers, to pluralization. React Intl is part of <em>FormatJS</em> which provides bindings to React via its components and API.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the main features of React Intl?</li>
</ul>
<p>     Below are the main features of React Intl,</p>
<ul>
<li>Display numbers with separators.</li>
<li>Display dates and times correctly.</li>
<li>Display dates relative to &quot;now&quot;.</li>
<li>Pluralize labels in strings.</li>
<li>Support for 150+ languages.</li>
<li>Runs in the browser and Node.</li>
<li>Built on standards.</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the two ways of formatting in React Intl?</li>
</ul>
<p>     The library provides two ways to format strings, numbers, and dates:</p>
<ul>
<li><strong>Using react components:</strong></li>
</ul>
<pre><code class="language-jsx harmony">
&lt;FormattedMessage
  id={&quot;account&quot;}
  defaultMessage={&quot;The amount is less than minimum balance.&quot;}
/&gt;
</code></pre>
<ul>
<li><strong>Using an API:</strong></li>
</ul>
<pre><code class="language-javascript">
const messages = defineMessages({
  accountMessage: {
    id: &quot;account&quot;,
    defaultMessage: &quot;The amount is less than minimum balance.&quot;,
  },
});

formatMessage(messages.accountMessage);
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to use <code>&lt;FormattedMessage&gt;</code> as placeholder using React Intl?</li>
</ul>
<p>     The <code>&lt;Formatted... /&gt;</code> components from <code>react-intl</code> return elements, not plain text, so they can&#x27;t be used for placeholders, alt text, etc. In that case, you should use lower level API <code>formatMessage()</code>. You can inject the <code>intl</code> object into your component using <code>injectIntl()</code> higher-order component and then format the message using <code>formatMessage()</code> available on that object.</p>
<pre><code class="language-jsx harmony">
import React from &quot;md1/react&quot;;
import { injectIntl, intlShape } from &quot;react-intl&quot;;

const MyComponent = ({ intl }) =&gt; {
  const placeholder = intl.formatMessage({ id: &quot;messageId&quot; });
  return &lt;input placeholder={placeholder} /&gt;;
};

MyComponent.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(MyComponent);
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to access current locale with React Intl?</li>
</ul>
<p>     You can get the current locale in any component of your application using <code>injectIntl()</code>:</p>
<pre><code class="language-jsx harmony">
import { injectIntl, intlShape } from &quot;react-intl&quot;;

const MyComponent = ({ intl }) =&gt; (
  &lt;div&gt;{&#96;The current locale is ${intl.locale}&#96;}&lt;/div&gt;
);

MyComponent.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(MyComponent);
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to format date using React Intl?</li>
</ul>
<p>     The <code>injectIntl()</code> higher-order component will give you access to the <code>formatDate()</code> method via the props in your component. The method is used internally by instances of <code>FormattedDate</code> and it returns the string representation of the formatted date.</p>
<pre><code class="language-jsx harmony">
import { injectIntl, intlShape } from &quot;react-intl&quot;;

const stringDate = this.props.intl.formatDate(date, {
  year: &quot;numeric&quot;,
  month: &quot;numeric&quot;,
  day: &quot;numeric&quot;,
});

const MyComponent = ({ intl }) =&gt; (
  &lt;div&gt;{&#96;The formatted date is ${stringDate}&#96;}&lt;/div&gt;
);

MyComponent.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(MyComponent);
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<h2 id="react-testing">React Testing</h2>
<ul>
<li>### What is Shallow Renderer in React testing?</li>
</ul>
<p>     <em>Shallow rendering</em> is useful for writing unit test cases in React. It lets you render a component <em>one level deep</em> and assert facts about what its render method returns, without worrying about the behavior of child components, which are not instantiated or rendered.</p>
<p>     For example, if you have the following component:</p>
<pre><code class="language-javascript">
function MyComponent() {
  return (
    &lt;div&gt;
      &lt;span className={&quot;heading&quot;}&gt;{&quot;Title&quot;}&lt;/span&gt;
      &lt;span className={&quot;description&quot;}&gt;{&quot;Description&quot;}&lt;/span&gt;
    &lt;/div&gt;
  );
}
</code></pre>
<p>     Then you can assert as follows:</p>
<pre><code class="language-jsx harmony">
import ShallowRenderer from &quot;react-test-renderer/shallow&quot;;

// in your test
const renderer = new ShallowRenderer();
renderer.render(&lt;MyComponent /&gt;);

const result = renderer.getRenderOutput();

expect(result.type).toBe(&quot;div&quot;);
expect(result.props.children).toEqual([
  &lt;span className={&quot;heading&quot;}&gt;{&quot;Title&quot;}&lt;/span&gt;,
  &lt;span className={&quot;description&quot;}&gt;{&quot;Description&quot;}&lt;/span&gt;,
]);
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is <code>TestRenderer</code> package in React?</li>
</ul>
<p>     This package provides a renderer that can be used to render components to pure JavaScript objects, without depending on the DOM or a native mobile environment. This package makes it easy to grab a snapshot of the platform view hierarchy (similar to a DOM tree) rendered by a ReactDOM or React Native without using a browser or <code>jsdom</code>.</p>
<pre><code class="language-jsx harmony">
import TestRenderer from &quot;react-test-renderer&quot;;

const Link = ({ page, children }) =&gt; &lt;a href={page}&gt;{children}&lt;/a&gt;;

const testRenderer = TestRenderer.create(
  &lt;Link page={&quot;https://www.facebook.com/&quot;}&gt;{&quot;Facebook&quot;}&lt;/Link&gt;
);

console.log(testRenderer.toJSON());
// {
//   type: &#x27;a&#x27;,
//   props: { href: &#x27;https://www.facebook.com/&#x27; },
//   children: [ &#x27;Facebook&#x27; ]
// }
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the purpose of ReactTestUtils package?</li>
</ul>
<p>     <em>ReactTestUtils</em> are provided in the <code>with-addons</code> package and allow you to perform actions against a simulated DOM for the purpose of unit testing.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is Jest?</li>
</ul>
<p>     <em>Jest</em> is a JavaScript unit testing framework created by Facebook based on Jasmine and provides automated mock creation and a <code>jsdom</code> environment. It&#x27;s often used for testing components.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the advantages of Jest over Jasmine?</li>
</ul>
<p>     There are couple of advantages compared to Jasmine:</p>
<ul>
<li>Automatically finds tests to execute in your source code.</li>
<li>Automatically mocks dependencies when running your tests.</li>
<li>Allows you to test asynchronous code synchronously.</li>
<li>Runs your tests with a fake DOM implementation (via <code>jsdom</code>) so that your tests can be run on the command line.</li>
<li>Runs tests in parallel processes so that they finish sooner.</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Give a simple example of Jest test case</li>
</ul>
<p>     Let&#x27;s write a test for a function that adds two numbers in <code>sum.js</code> file:</p>
<pre><code class="language-javascript">
const sum = (a, b) =&gt; a + b;

export default sum;
</code></pre>
<p>     Create a file named <code>sum.test.js</code> which contains actual test:</p>
<pre><code class="language-javascript">
import sum from &quot;./sum&quot;;

test(&quot;adds 1 + 2 to equal 3&quot;, () =&gt; {
  expect(sum(1, 2)).toBe(3);
});
</code></pre>
<p>     And then add the following section to your <code>package.json</code>:</p>
<pre><code class="language-json">
{
  &quot;scripts&quot;: {
    &quot;test&quot;: &quot;jest&quot;
  }
}
</code></pre>
<p>     Finally, run <code>yarn test</code> or <code>npm test</code> and Jest will print a result:</p>
<pre><code class="language-console">
$ yarn test
PASS ./sum.test.js
✓ adds 1 + 2 to equal 3 (2ms)
</code></pre>
<h2 id="react-redux">React Redux</h2>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is flux?</li>
</ul>
<p>     <em>Flux</em> is an <em>application design paradigm</em> used as a replacement for the more traditional MVC pattern. It is not a framework or a library but a new kind of architecture that complements React and the concept of Unidirectional Data Flow. Facebook uses this pattern internally when working with React.</p>
<p>     The workflow between dispatcher, stores and views components with distinct inputs and outputs as follows:</p>
<p>     <img src="images/flux.png" alt="flux"></p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is Redux?</li>
</ul>
<p>     <em>Redux</em> is a predictable state container for JavaScript apps based on the <em>Flux design pattern</em>. Redux can be used together with React, or with any other view library. It is tiny (about 2kB) and has no dependencies.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the core principles of Redux?</li>
</ul>
<p>     Redux follows three fundamental principles:</p>
<ul>
<li><strong>Single source of truth:</strong> The state of your whole application is stored in an object tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.</li>
<li><strong>State is read-only:</strong> The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will ever write directly to the state.</li>
<li><strong>Changes are made with pure functions:</strong> To specify how the state tree is transformed by actions, you write reducers. Reducers are just pure functions that take the previous state and an action as parameters, and return the next state.</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the downsides of Redux compared to Flux?</li>
</ul>
<p>     Instead of saying downsides we can say that there are few compromises of using Redux over Flux. Those are as follows:</p>
<ul>
<li><strong>You will need to learn to avoid mutations:</strong> Flux is un-opinionated about mutating data, but Redux doesn&#x27;t like mutations and many packages complementary to Redux assume you never mutate the state. You can enforce this with dev-only packages like <code>redux-immutable-state-invariant</code>, Immutable.js, or instructing your team to write non-mutating code.</li>
<li><strong>You&#x27;re going to have to carefully pick your packages:</strong> While Flux explicitly doesn&#x27;t try to solve problems such as undo/redo, persistence, or forms, Redux has extension points such as middleware and store enhancers, and it has spawned a rich ecosystem.</li>
<li><strong>There is no nice Flow integration yet:</strong> Flux currently lets you do very impressive static type checks which Redux doesn&#x27;t support yet.</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the difference between <code>mapStateToProps()</code> and <code>mapDispatchToProps()</code>?</li>
</ul>
<p>     <code>mapStateToProps()</code> is a utility which helps your component get updated state (which is updated by some other components):</p>
<pre><code class="language-javascript">
const mapStateToProps = (state) =&gt; {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};
</code></pre>
<p>     <code>mapDispatchToProps()</code> is a utility which will help your component to fire an action event (dispatching action which may cause change of application state):</p>
<pre><code class="language-javascript">
const mapDispatchToProps = (dispatch) =&gt; {
  return {
    onTodoClick: (id) =&gt; {
      dispatch(toggleTodo(id));
    },
  };
};
</code></pre>
<p>     It is recommended to always use the “object shorthand” form for the <code>mapDispatchToProps</code>.</p>
<p>     Redux wraps it in another function that looks like (…args) =&gt; dispatch(onTodoClick(…args)), and pass that wrapper function as a prop to your component.</p>
<pre><code class="language-javascript">
const mapDispatchToProps = {
  onTodoClick,
};
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Can I dispatch an action in reducer?</li>
</ul>
<p>     Dispatching an action within a reducer is an <strong>anti-pattern</strong>. Your reducer should be <em>without side effects</em>, simply digesting the action payload and returning a new state object. Adding listeners and dispatching actions within the reducer can lead to chained actions and other side effects.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to access Redux store outside a component?</li>
</ul>
<p>     You just need to export the store from the module where it created with <code>createStore()</code>. Also, it shouldn&#x27;t pollute the global window object.</p>
<pre><code class="language-javascript">
store = createStore(myReducer);

export default store;
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the drawbacks of MVW pattern?</li>
</ul>
<ul>
<li>DOM manipulation is very expensive which causes applications to behave slow and inefficient.</li>
<li>Due to circular dependencies, a complicated model was created around models and views.</li>
<li>Lot of data changes happens for collaborative applications(like Google Docs).</li>
<li>No way to do undo (travel back in time) easily without adding so much extra code.</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Are there any similarities between Redux and RxJS?</li>
</ul>
<p>     These libraries are very different for very different purposes, but there are some vague similarities.</p>
<p>     Redux is a tool for managing state throughout the application. It is usually used as an architecture for UIs. Think of it as an alternative to (half of) Angular. RxJS is a reactive programming library. It is usually used as a tool to accomplish asynchronous tasks in JavaScript. Think of it as an alternative to Promises. Redux uses the Reactive paradigm because the Store is reactive. The Store observes actions from a distance, and changes itself. RxJS also uses the Reactive paradigm, but instead of being an architecture, it gives you basic building blocks, Observables, to accomplish this pattern.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to reset state in Redux?</li>
</ul>
<p>     You need to write a <em>root reducer</em> in your application which delegate handling the action to the reducer generated by <code>combineReducers()</code>.</p>
<p>     For example, let us take <code>rootReducer()</code> to return the initial state after <code>USER_LOGOUT</code> action. As we know, reducers are supposed to return the initial state when they are called with <code>undefined</code> as the first argument, no matter the action.</p>
<pre><code class="language-javascript">
const appReducer = combineReducers({
  /* your app&#x27;s top-level reducers */
});

const rootReducer = (state, action) =&gt; {
  if (action.type === &quot;USER_LOGOUT&quot;) {
    state = undefined;
  }

  return appReducer(state, action);
};
</code></pre>
<p>     In case of using <code>redux-persist</code>, you may also need to clean your storage. <code>redux-persist</code> keeps a copy of your state in a storage engine. First, you need to import the appropriate storage engine and then, to parse the state before setting it to undefined and clean each storage state key.</p>
<pre><code class="language-javascript">
const appReducer = combineReducers({
  /* your app&#x27;s top-level reducers */
});

const rootReducer = (state, action) =&gt; {
  if (action.type === &quot;USER_LOGOUT&quot;) {
    Object.keys(state).forEach((key) =&gt; {
      storage.removeItem(&#96;persist:${key}&#96;);
    });

    state = undefined;
  }

  return appReducer(state, action);
};
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the difference between React context and React Redux?</li>
</ul>
<p>     You can use <strong>Context</strong> in your application directly and is going to be great for passing down data to deeply nested components which what it was designed for.</p>
<p>     Whereas <strong>Redux</strong> is much more powerful and provides a large number of features that the Context API doesn&#x27;t provide. Also, React Redux uses context internally but it doesn&#x27;t expose this fact in the public API.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Why are Redux state functions called reducers?</li>
</ul>
<p>     Reducers always return the accumulation of the state (based on all previous and current actions). Therefore, they act as a reducer of state. Each time a Redux reducer is called, the state and action are passed as parameters. This state is then reduced (or accumulated) based on the action, and then the next state is returned. You could <em>reduce</em> a collection of actions and an initial state (of the store) on which to perform these actions to get the resulting final state.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to make AJAX request in Redux?</li>
</ul>
<p>     You can use <code>redux-thunk</code> middleware which allows you to define async actions.</p>
<p>     Let&#x27;s take an example of fetching specific account as an AJAX call using <em>fetch API</em>:</p>
<pre><code class="language-javascript">
export function fetchAccount(id) {
  return (dispatch) =&gt; {
    dispatch(setLoadingAccountState()); // Show a loading spinner
    fetch(&#96;/account/${id}&#96;, (response) =&gt; {
      dispatch(doneFetchingAccount()); // Hide loading spinner
      if (response.status === 200) {
        dispatch(setAccount(response.json)); // Use a normal function to set the received state
      } else {
        dispatch(someError);
      }
    });
  };
}

function setAccount(data) {
  return { type: &quot;SET_Account&quot;, data: data };
}
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Should I keep all component&#x27;s state in Redux store?</li>
</ul>
<p>     Keep your data in the Redux store, and the UI related state internally in the component.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the proper way to access Redux store?</li>
</ul>
<p>     The best way to access your store in a component is to use the <code>connect()</code> function, that creates a new component that wraps around your existing one. This pattern is called <em>Higher-Order Components</em>, and is generally the preferred way of extending a component&#x27;s functionality in React. This allows you to map state and action creators to your component, and have them passed in automatically as your store updates.</p>
<p>     Let&#x27;s take an example of <code>&lt;FilterLink&gt;</code> component using connect:</p>
<pre><code class="language-javascript">
import { connect } from &quot;react-redux&quot;;
import { setVisibilityFilter } from &quot;../actions&quot;;
import Link from &quot;../components/Link&quot;;

const mapStateToProps = (state, ownProps) =&gt; ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) =&gt; ({
  onClick: () =&gt; dispatch(setVisibilityFilter(ownProps.filter)),
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
</code></pre>
<p>     Due to it having quite a few performance optimizations and generally being less likely to cause bugs, the Redux developers almost always recommend using <code>connect()</code> over accessing the store directly (using context API).</p>
<pre><code class="language-javascript">
function MyComponent {
  someMethod() {
    doSomethingWith(this.context.store);
  }
}
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the difference between component and container in React Redux?</li>
</ul>
<p>     <strong>Component</strong> is a class or function component that describes the presentational part of your application.</p>
<p>     <strong>Container</strong> is an informal term for a component that is connected to a Redux store. Containers <em>subscribe</em> to Redux state updates and <em>dispatch</em> actions, and they usually don&#x27;t render DOM elements; they delegate rendering to presentational child components.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the purpose of the constants in Redux?</li>
</ul>
<p>     Constants allows you to easily find all usages of that specific functionality across the project when you use an IDE. It also prevents you from introducing silly bugs caused by typos – in which case, you will get a <code>ReferenceError</code> immediately.</p>
<p>     Normally we will save them in a single file (<code>constants.js</code> or <code>actionTypes.js</code>).</p>
<pre><code class="language-javascript">
export const ADD_TODO = &quot;ADD_TODO&quot;;
export const DELETE_TODO = &quot;DELETE_TODO&quot;;
export const EDIT_TODO = &quot;EDIT_TODO&quot;;
export const COMPLETE_TODO = &quot;COMPLETE_TODO&quot;;
export const COMPLETE_ALL = &quot;COMPLETE_ALL&quot;;
export const CLEAR_COMPLETED = &quot;CLEAR_COMPLETED&quot;;
</code></pre>
<p>     In Redux, you use them in two places:</p>
<ul>
<li><strong>During action creation:</strong></li>
</ul>
<p>        Let&#x27;s take <code>actions.js</code>:</p>
<pre><code class="language-javascript">
import { ADD_TODO } from &quot;./actionTypes&quot;;

export function addTodo(text) {
  return { type: ADD_TODO, text };
}
</code></pre>
<ul>
<li><strong>In reducers:</strong></li>
</ul>
<p>        Let&#x27;s create <code>reducer.js</code>:</p>
<pre><code class="language-javascript">
import { ADD_TODO } from &quot;./actionTypes&quot;;

export default (state = [], action) =&gt; {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    default:
      return state;
  }
};
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the different ways to write <code>mapDispatchToProps()</code>?</li>
</ul>
<p>     There are a few ways of binding <em>action creators</em> to <code>dispatch()</code> in <code>mapDispatchToProps()</code>.</p>
<p>     Below are the possible options:</p>
<pre><code class="language-javascript">
const mapDispatchToProps = (dispatch) =&gt; ({
  action: () =&gt; dispatch(action()),
});
</code></pre>
<pre><code class="language-javascript">
const mapDispatchToProps = (dispatch) =&gt; ({
  action: bindActionCreators(action, dispatch),
});
</code></pre>
<pre><code class="language-javascript">
const mapDispatchToProps = { action };
</code></pre>
<p>     The third option is just a shorthand for the first one.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the use of the <code>ownProps</code> parameter in <code>mapStateToProps()</code> and <code>mapDispatchToProps()</code>?</li>
</ul>
<p>     If the <code>ownProps</code> parameter is specified, React Redux will pass the props that were passed to the component into your <em>connect</em> functions. So, if you use a connected component:</p>
<pre><code class="language-jsx harmony">
import ConnectedComponent from &quot;./containers/ConnectedComponent&quot;;

&lt;ConnectedComponent user={&quot;john&quot;} /&gt;;
</code></pre>
<p>     The <code>ownProps</code> inside your <code>mapStateToProps()</code> and <code>mapDispatchToProps()</code> functions will be an object:</p>
<pre><code class="language-javascript">
{
  user: &quot;john&quot;;
}
</code></pre>
<p>     You can use this object to decide what to return from those functions.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to structure Redux top level directories?</li>
</ul>
<p>     Most of the applications has several top-level directories as below:</p>
<ul>
<li><strong>Components</strong>: Used for <em>dumb</em> components unaware of Redux.</li>
<li><strong>Containers</strong>: Used for <em>smart</em> components connected to Redux.</li>
<li><strong>Actions</strong>: Used for all action creators, where file names correspond to part of the app.</li>
<li><strong>Reducers</strong>: Used for all reducers, where files name correspond to state key.</li>
<li><strong>Store</strong>: Used for store initialization.</li>
</ul>
<p>     This structure works well for small and medium size apps.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is redux-saga?</li>
</ul>
<p>     <code>redux-saga</code> is a library that aims to make side effects (asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better.</p>
<p>     It is available in NPM:</p>
<pre><code class="language-console">
$ npm install --save redux-saga
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the mental model of redux-saga?</li>
</ul>
<p>     <em>Saga</em> is like a separate thread in your application, that&#x27;s solely responsible for side effects. <code>redux-saga</code> is a redux <em>middleware</em>, which means this thread can be started, paused and cancelled from the main application with normal Redux actions, it has access to the full Redux application state and it can dispatch Redux actions as well.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the differences between <code>call()</code> and <code>put()</code> in redux-saga?</li>
</ul>
<p>     Both <code>call()</code> and <code>put()</code> are effect creator functions. <code>call()</code> function is used to create effect description, which instructs middleware to call the promise. <code>put()</code> function creates an effect, which instructs middleware to dispatch an action to the store.</p>
<p>     Let&#x27;s take example of how these effects work for fetching particular user data.</p>
<pre><code class="language-javascript">
function* fetchUserSaga(action) {
  // &#96;call&#96; function accepts rest arguments, which will be passed to &#96;api.fetchUser&#96; function.
  // Instructing middleware to call promise, it resolved value will be assigned to &#96;userData&#96; variable
  const userData = yield call(api.fetchUser, action.userId);

  // Instructing middleware to dispatch corresponding action.
  yield put({
    type: &quot;FETCH_USER_SUCCESS&quot;,
    userData,
  });
}
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is Redux Thunk?</li>
</ul>
<p>     <em>Redux Thunk</em> middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods <code>dispatch()</code> and <code>getState()</code> as parameters.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the differences between <code>redux-saga</code> and <code>redux-thunk</code>?</li>
</ul>
<p>     Both <em>Redux Thunk</em> and <em>Redux Saga</em> take care of dealing with side effects. In most of the scenarios, Thunk uses <em>Promises</em> to deal with them, whereas Saga uses <em>Generators</em>. Thunk is simple to use and Promises are familiar to many developers, Sagas/Generators are more powerful but you will need to learn them. But both middleware can coexist, so you can start with Thunks and introduce Sagas when/if you need them.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is Redux DevTools?</li>
</ul>
<p>     <em>Redux DevTools</em> is a live-editing time travel environment for Redux with hot reloading, action replay, and customizable UI. If you don&#x27;t want to bother with installing Redux DevTools and integrating it into your project, consider using Redux DevTools Extension for Chrome and Firefox.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the features of Redux DevTools?</li>
</ul>
<p>     Some of the main features of Redux DevTools are below,</p>
<ul>
<li>Lets you inspect every state and action payload.</li>
<li>Lets you go back in time by <em>cancelling</em> actions.</li>
<li>If you change the reducer code, each <em>staged</em> action will be re-evaluated.</li>
<li>If the reducers throw, you will see during which action this happened, and what the error was.</li>
<li>With <code>persistState()</code> store enhancer, you can persist debug sessions across page reloads.</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are Redux selectors and why to use them?</li>
</ul>
<p>     <em>Selectors</em> are functions that take Redux state as an argument and return some data to pass to the component.</p>
<p>     For example, to get user details from the state:</p>
<pre><code class="language-javascript">
const getUserData = (state) =&gt; state.user.data;
</code></pre>
<p>     These selectors have two main benefits,</p>
<ul>
<li>The selector can compute derived data, allowing Redux to store the minimal possible state</li>
<li>The selector is not recomputed unless one of its arguments changes</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is Redux Form?</li>
</ul>
<p>     <em>Redux Form</em> works with React and Redux to enable a form in React to use Redux to store all of its state. Redux Form can be used with raw HTML5 inputs, but it also works very well with common UI frameworks like Material UI, React Widgets and React Bootstrap.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the main features of Redux Form?</li>
</ul>
<p>     Some of the main features of Redux Form are:</p>
<ul>
<li>Field values persistence via Redux store.</li>
<li>Validation (sync/async) and submission.</li>
<li>Formatting, parsing and normalization of field values.</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to add multiple middlewares to Redux?</li>
</ul>
<p>     You can use <code>applyMiddleware()</code>.</p>
<p>     For example, you can add <code>redux-thunk</code> and <code>logger</code> passing them as arguments to <code>applyMiddleware()</code>:</p>
<pre><code class="language-javascript">
import { createStore, applyMiddleware } from &quot;redux&quot;;
const createStoreWithMiddleware = applyMiddleware(
  ReduxThunk,
  logger
)(createStore);
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to set initial state in Redux?</li>
</ul>
<p>     You need to pass initial state as second argument to createStore:</p>
<pre><code class="language-javascript">
const rootReducer = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter,
});

const initialState = {
  todos: [{ id: 123, name: &quot;example&quot;, completed: false }],
};

const store = createStore(rootReducer, initialState);
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How Relay is different from Redux?</li>
</ul>
<p>     Relay is similar to Redux in that they both use a single store. The main difference is that relay only manages state originated from the server, and all access to the state is used via <em>GraphQL</em> queries (for reading data) and mutations (for changing data). Relay caches the data for you and optimizes data fetching for you, by fetching only changed data and nothing more.</p>
<ul>
<li>### What is an action in Redux?</li>
</ul>
<p>     <em>Actions</em> are plain JavaScript objects or payloads of information that send data from your application to your store. They are the only source of information for the store. Actions must have a type property that indicates the type of action being performed.</p>
<p>     For example, let&#x27;s take an action which represents adding a new todo item:</p>
<pre><code class="language-">
{
  type: ADD_TODO,
  text: &#x27;Add todo item&#x27;
}
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<h2 id="react-native">React Native</h2>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the difference between React Native and React?</li>
</ul>
<p>     <strong>React</strong> is a JavaScript library, supporting both front end web and being run on the server, for building user interfaces and web applications.</p>
<p>     <strong>React Native</strong> is a mobile framework that compiles to native app components, allowing you to build native mobile applications (iOS, Android, and Windows) in JavaScript that allows you to use React to build your components, and implements React under the hood.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to test React Native apps?</li>
</ul>
<p>     React Native can be tested only in mobile simulators like iOS and Android. You can run the app in your mobile using expo app (https://expo.io) Where it syncs using QR code, your mobile and computer should be in same wireless network.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to do logging in React Native?</li>
</ul>
<p>     You can use <code>console.log</code>, <code>console.warn</code>, etc. As of React Native v0.29 you can simply run the following to see logs in the console:</p>
<pre><code class="language-">
$ react-native log-ios
$ react-native log-android
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to debug your React Native?</li>
</ul>
<p>     Follow the below steps to debug React Native app:</p>
<ul>
<li>Run your application in the iOS simulator.</li>
<li>Press <code>Command + D</code> and a webpage should open up at <code>http://localhost:8081/debugger-ui</code>.</li>
<li>Enable <em>Pause On Caught Exceptions</em> for a better debugging experience.</li>
<li>Press <code>Command + Option + I</code> to open the Chrome Developer tools, or open it via <code>View</code> -&gt; <code>Developer</code> -&gt; <code>Developer Tools</code>.</li>
<li>You should now be able to debug as you normally would.</li>
</ul>
<h2 id="react-supported-libraries-integration">React supported libraries &amp; Integration</h2>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is reselect and how it works?</li>
</ul>
<p>     <em>Reselect</em> is a <strong>selector library</strong> (for Redux) which uses <em>memoization</em> concept. It was originally written to compute derived data from Redux-like applications state, but it can&#x27;t be tied to any architecture or library.</p>
<p>     Reselect keeps a copy of the last inputs/outputs of the last call, and recomputes the result only if one of the inputs changes. If the the same inputs are provided twice in a row, Reselect returns the cached output. It&#x27;s memoization and cache are fully customizable.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is Flow?</li>
</ul>
<p>     <em>Flow</em> is a <em>static type checker</em> designed to find type errors in JavaScript. Flow types can express much more fine-grained distinctions than traditional type systems. For example, Flow helps you catch errors involving <code>null</code>, unlike most type systems.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the difference between Flow and PropTypes?</li>
</ul>
<p>     Flow is a <em>static analysis tool</em> (static checker) which uses a superset of the language, allowing you to add type annotations to all of your code and catch an entire class of bugs at compile time.</p>
<p>     PropTypes is a <em>basic type checker</em> (runtime checker) which has been patched onto React. It can&#x27;t check anything other than the types of the props being passed to a given component. If you want more flexible typechecking for your entire project Flow/TypeScript are appropriate choices.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to use Font Awesome icons in React?</li>
</ul>
<p>     The below steps followed to include Font Awesome in React:</p>
<ul>
<li>Install <code>font-awesome</code>:</li>
</ul>
<pre><code class="language-console">
$ npm install --save font-awesome
</code></pre>
<ul>
<li>Import <code>font-awesome</code> in your <code>index.js</code> file:</li>
</ul>
<pre><code class="language-javascript">
import &quot;font-awesome/css/font-awesome.min.css&quot;;
</code></pre>
<ul>
<li>Add Font Awesome classes in <code>className</code>:</li>
</ul>
<pre><code class="language-javascript">
function MyComponent {
  return &lt;div&gt;&lt;i className={&#x27;fa fa-spinner&#x27;} /&gt;&lt;/div&gt;
}
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is React Dev Tools?</li>
</ul>
<p>     <em>React Developer Tools</em> let you inspect the component hierarchy, including component props and state. It exists both as a browser extension (for Chrome and Firefox), and as a standalone app (works with other environments including Safari, IE, and React Native).</p>
<p>     The official extensions available for different browsers or environments.</p>
<ul>
<li><strong>Chrome extension</strong></li>
<li><strong>Firefox extension</strong></li>
<li><strong>Standalone app</strong> (Safari, React Native, etc)</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Why is DevTools not loading in Chrome for local files?</li>
</ul>
<p>     If you opened a local HTML file in your browser (<code>file://...</code>) then you must first open <em>Chrome Extensions</em> and check <code>Allow access to file URLs</code>.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to use Polymer in React?</li>
</ul>
<p>     You need to follow below steps to use Polymer in React,</p>
<ul>
<li>Create a Polymer element:</li>
</ul>
<pre><code class="language-jsx harmony">
&lt;link
  rel=&quot;import&quot;
  href=&quot;../../bower_components/polymer/polymer.html&quot;
/&gt;;
Polymer({
  is: &quot;calendar-element&quot;,
  ready: function () {
    this.textContent = &quot;I am a calendar&quot;;
  },
});
</code></pre>
<ul>
<li>Create the Polymer component HTML tag by importing it in a HTML document, e.g. import it in the <code>index.html</code> of your React application:</li>
</ul>
<pre><code class="language-html">
&lt;link
  rel=&quot;import&quot;
  href=&quot;./src/polymer-components/calendar-element.html&quot;
/&gt;
</code></pre>
<ul>
<li>Use that element in the JSX file:</li>
</ul>
<pre><code class="language-javascript">
export default function MyComponent {
  return &lt;calendar-element /&gt;;
}
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the advantages of React over Vue.js?</li>
</ul>
<p>     React has the following advantages over Vue.js:</p>
<ul>
<li>Gives more flexibility in large apps developing.</li>
<li>Easier to test.</li>
<li>Suitable for mobile apps creating.</li>
<li>More information and solutions available.</li>
</ul>
<p><strong>Note:</strong> The above list of advantages are purely opinionated and it vary based on the professional experience. But they are helpful as base parameters.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the difference between React and Angular?</li>
</ul>
<p>     Let&#x27;s see the difference between React and Angular in a table format.</p>
<table>
<thead><tr>
<th>React</th>
<th>Angular</th>
</tr></thead><tbody>
<tr>
<td>React is a library and has only the View layer</td>
<td>Angular is a framework and has complete MVC functionality</td>
</tr>
<tr>
<td>React handles rendering on the server side</td>
<td>AngularJS renders only on the client side but Angular 2 and above renders on the server side</td>
</tr>
<tr>
<td>React uses JSX that looks like HTML in JS which can be confusing</td>
<td>Angular follows the template approach for HTML, which makes code shorter and easy to understand</td>
</tr>
<tr>
<td>React Native, which is a React type to build mobile applications are faster and more stable</td>
<td>Ionic, Angular&#x27;s mobile native app is relatively less stable and slower</td>
</tr>
<tr>
<td>In React, data flows only in one way and hence debugging is easy</td>
<td>In Angular, data flows both way i.e it has two-way data binding between children and parent and hence debugging is often difficult</td>
</tr>
</tbody></table>
<p><strong>Note:</strong> The above list of differences are purely opinionated and it vary based on the professional experience. But they are helpful as base parameters.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Why React tab is not showing up in DevTools?</li>
</ul>
<p>     When the page loads, <em>React DevTools</em> sets a global named <code>__REACT_DEVTOOLS_GLOBAL_HOOK__</code>, then React communicates with that hook during initialization. If the website is not using React or if React fails to communicate with DevTools then it won&#x27;t show up the tab.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are Styled Components?</li>
</ul>
<p>     <code>styled-components</code> is a JavaScript library for styling React applications. It removes the mapping between styles and components, and lets you write actual CSS augmented with JavaScript.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Give an example of Styled Components?</li>
</ul>
<p>     Lets create <code>&lt;Title&gt;</code> and <code>&lt;Wrapper&gt;</code> components with specific styles for each.</p>
<pre><code class="language-javascript">
import React from &quot;md1/react&quot;;
import styled from &quot;styled-components&quot;;

// Create a &lt;Title&gt; component that renders an &lt;h1&gt; which is centered, red and sized at 1.5em
const Title = styled.h1&#96;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
&#96;;

// Create a &lt;Wrapper&gt; component that renders a &lt;section&gt; with some padding and a papayawhip background
const Wrapper = styled.section&#96;
  padding: 4em;
  background: papayawhip;
&#96;;
</code></pre>
<p>     These two variables, <code>Title</code> and <code>Wrapper</code>, are now components that you can render just like any other react component.</p>
<pre><code class="language-jsx harmony">
&lt;Wrapper&gt;
  &lt;Title&gt;{&quot;Lets start first styled component!&quot;}&lt;/Title&gt;
&lt;/Wrapper&gt;
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is Relay?</li>
</ul>
<p>     Relay is a JavaScript framework for providing a data layer and client-server communication to web applications using the React view layer.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<h2 id="miscellaneous">Miscellaneous</h2>
<ul>
<li>### What are the main features of Reselect library?</li>
</ul>
<p>     Let&#x27;s see the main features of Reselect library,</p>
<ul>
<li>Selectors can compute derived data, allowing Redux to store the minimal possible state.</li>
<li>Selectors are efficient. A selector is not recomputed unless one of its arguments changes.</li>
<li>Selectors are composable. They can be used as input to other selectors.</li>
</ul>
<ul>
<li>#### Give an example of Reselect usage?</li>
</ul>
<p>     Let&#x27;s take calculations and different amounts of a shipment order with the simplified usage of Reselect:</p>
<pre><code class="language-javascript">
import { createSelector } from &quot;reselect&quot;;

const shopItemsSelector = (state) =&gt; state.shop.items;
const taxPercentSelector = (state) =&gt; state.shop.taxPercent;

const subtotalSelector = createSelector(shopItemsSelector, (items) =&gt;
  items.reduce((acc, item) =&gt; acc + item.value, 0)
);

const taxSelector = createSelector(
  subtotalSelector,
  taxPercentSelector,
  (subtotal, taxPercent) =&gt; subtotal * (taxPercent / 100)
);

export const totalSelector = createSelector(
  subtotalSelector,
  taxSelector,
  (subtotal, tax) =&gt; ({ total: subtotal + tax })
);

let exampleState = {
  shop: {
    taxPercent: 8,
    items: [
      { name: &quot;apple&quot;, value: 1.2 },
      { name: &quot;orange&quot;, value: 0.95 },
    ],
  },
};

console.log(subtotalSelector(exampleState)); // 2.15
console.log(taxSelector(exampleState)); // 0.172
console.log(totalSelector(exampleState)); // { total: 2.322 }
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Can Redux only be used with React?</li>
</ul>
<p>     Redux can be used as a data store for any UI layer. The most common usage is with React and React Native, but there are bindings available for Angular, Angular 2, Vue, Mithril, and more. Redux simply provides a subscription mechanism which can be used by any other code.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Do you need to have a particular build tool to use Redux?</li>
</ul>
<p>     Redux is originally written in ES6 and transpiled for production into ES5 with Webpack and Babel. You should be able to use it regardless of your JavaScript build process. Redux also offers a UMD build that can be used directly without any build process at all.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How Redux Form <code>initialValues</code> get updated from state?</li>
</ul>
<p>     You need to add <code>enableReinitialize : true</code> setting.</p>
<pre><code class="language-javascript">
const InitializeFromStateForm = reduxForm({
  form: &quot;initializeFromState&quot;,
  enableReinitialize: true,
})(UserEdit);
</code></pre>
<p>     If your <code>initialValues</code> prop gets updated, your form will update too.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How React PropTypes allow different types for one prop?</li>
</ul>
<p>     You can use <code>oneOfType()</code> method of <code>PropTypes</code>.</p>
<p>     For example, the height property can be defined with either <code>string</code> or <code>number</code> type as below:</p>
<pre><code class="language-javascript">
Component.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Can I import an SVG file as react component?</li>
</ul>
<p>     You can import SVG directly as component instead of loading it as a file. This feature is available with <code>react-scripts@2.0.0</code> and higher.</p>
<pre><code class="language-jsx harmony">
import { ReactComponent as Logo } from &quot;./logo.svg&quot;;

const App = () =&gt; (
  &lt;div&gt;
    {/* Logo is an actual react component */}
    &lt;Logo /&gt;
  &lt;/div&gt;
);
</code></pre>
<p>     <strong>Note</strong>: Don&#x27;t forget about the curly braces in the import.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is render hijacking in react?</li>
</ul>
<p>     The concept of render hijacking is the ability to control what a component will output from another component. It means that you decorate your component by wrapping it into a Higher-Order component. By wrapping, you can inject additional props or make other changes, which can cause changing logic of rendering. It does not actually enable hijacking, but by using HOC you make your component behave differently.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to pass numbers to React component?</li>
</ul>
<p>     We can pass <code>numbers</code> as <code>props</code> to React component using curly braces <code>{}</code> where as <code>strings</code> in double quotes <code>&quot;&quot;</code> or single quotes <code>&#x27;&#x27;</code></p>
<pre><code class="language-jsx">
import React from &quot;md1/react&quot;;
 const ChildComponent = ({ name, age }) =&gt; {
 return (
   &lt;&gt;
     My Name is {name} and Age is {age}
   &lt;/&gt;
   );
 };
 const ParentComponent = () =&gt; {
 return (
   &lt;&gt;
     &lt;ChildComponent name=&quot;Chetan&quot; age={30} /&gt;
   &lt;/&gt;
   );
 };
 export default ParentComponent;
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Do I need to keep all my state into Redux? Should I ever use react internal state?</li>
</ul>
<p>     It is up to the developer&#x27;s decision, i.e., it is developer&#x27;s job to determine what kinds of state make up your application, and where each piece of state should live. Some users prefer to keep every single piece of data in Redux, to maintain a fully serializable and controlled version of their application at all times. Others prefer to keep non-critical or UI state, such as “is this dropdown currently open”, inside a component&#x27;s internal state.</p>
<p>     Below are the thumb rules to determine what kind of data should be put into Redux</p>
<ul>
<li>Do other parts of the application care about this data?</li>
<li>Do you need to be able to create further derived data based on this original data?</li>
<li>Is the same data being used to drive multiple components?</li>
<li>Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?</li>
<li>Do you want to cache the data (i.e, use what&#x27;s in state if it&#x27;s already there instead of re-requesting it)?</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the purpose of registerServiceWorker in React?</li>
</ul>
<p>     React creates a service worker for you without any configuration by default. The service worker is a web API that helps you cache your assets and other files so that when the user is offline or on a slow network, he/she can still see results on the screen, as such, it helps you build a better user experience, that&#x27;s what you should know about service worker for now. It&#x27;s all about adding offline capabilities to your site.</p>
<pre><code class="language-jsx">
import React from &quot;md1/react&quot;;
import ReactDOM from &quot;react-dom&quot;;
import App from &quot;./App&quot;;
import registerServiceWorker from &quot;./registerServiceWorker&quot;;

ReactDOM.render(&lt;App /&gt;, document.getElementById(&quot;root&quot;));
registerServiceWorker();
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is React memo function?</li>
</ul>
<p>     Class components can be restricted from re-rendering when their input props are the same using <strong>PureComponent or shouldComponentUpdate</strong>. Now you can do the same with function components by wrapping them in <strong>React.memo</strong>.</p>
<pre><code class="language-jsx">
const MyComponent = React.memo(function MyComponent(props) {
  /* only rerenders if props change */
});
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is React lazy function?</li>
</ul>
<p>     The <code>React.lazy</code> function lets you render a dynamic import as a regular component. It will automatically load the bundle containing the <code>OtherComponent</code> when the component gets rendered. This must return a Promise which resolves to a module with a default export containing a React component.</p>
<pre><code class="language-jsx">
const OtherComponent = React.lazy(() =&gt; import(&quot;./OtherComponent&quot;));

function MyComponent() {
  return (
    &lt;div&gt;
      &lt;OtherComponent /&gt;
    &lt;/div&gt;
  );
}
</code></pre>
<p>     <strong>Note:</strong></p>
<p>     <code>React.lazy</code> and <code>Suspense</code> is not yet available for server-side rendering. If you want to do code-splitting in a server rendered app, we still recommend React Loadable.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to prevent unnecessary updates using setState?</li>
</ul>
<p>     You can compare the current value of the state with an existing state value and decide whether to rerender the page or not. If the values are the same then you need to return <strong>null</strong> to stop re-rendering otherwise return the latest state value.</p>
<p>     For example, the user profile information is conditionally rendered as follows,</p>
<pre><code class="language-jsx">
getUserProfile = (user) =&gt; {
  const latestAddress = user.address;
  this.setState((state) =&gt; {
    if (state.address === latestAddress) {
      return null;
    } else {
      return { title: latestAddress };
    }
  });
};
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How do you render Array, Strings and Numbers in React 16 Version?</li>
</ul>
<p>     <strong>Arrays</strong>: Unlike older releases, you don&#x27;t need to make sure <strong>render</strong> method return a single element in React16. You are able to return multiple sibling elements without a wrapping element by returning an array.</p>
<p>     For example, let us take the below list of developers,</p>
<pre><code class="language-jsx">
const ReactJSDevs = () =&gt; {
  return [
    &lt;li key=&quot;1&quot;&gt;John&lt;/li&gt;,
    &lt;li key=&quot;2&quot;&gt;Jackie&lt;/li&gt;,
    &lt;li key=&quot;3&quot;&gt;Jordan&lt;/li&gt;,
  ];
};
</code></pre>
<p>     You can also merge this array of items in another array component.</p>
<pre><code class="language-jsx">
const JSDevs = () =&gt; {
  return (
    &lt;ul&gt;
      &lt;li&gt;Brad&lt;/li&gt;
      &lt;li&gt;Brodge&lt;/li&gt;
      &lt;ReactJSDevs /&gt;
      &lt;li&gt;Brandon&lt;/li&gt;
    &lt;/ul&gt;
  );
};
</code></pre>
<p>     <strong>Strings and Numbers:</strong> You can also return string and number type from the render method.</p>
<pre><code class="language-jsx">
render() {
 return &#x27;Welcome to ReactJS questions&#x27;;
}
// Number
render() {
 return 2018;
}
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are hooks?</li>
</ul>
<p>     Hooks is a special JavaScript function that allows you use state and other React features without writing a class. This pattern has been introduced as a new feature in React 16.8 and helped to isolate the stateful logic from the components.</p>
<p>     Let&#x27;s see an example of useState hook:</p>
<pre><code class="language-jsx">
import { useState } from &quot;md1/react&quot;;

function Example() {
  // Declare a new state variable, which we&#x27;ll call &quot;count&quot;
  const [count, setCount] = useState(0);

  return (
    &lt;&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Click me&lt;/button&gt;
    &lt;/&gt;
  );
}
</code></pre>
<p>     <strong>Note:</strong> Hooks can be used inside an existing function component without rewriting the component.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What rules need to be followed for hooks?</li>
</ul>
<p>     You need to follow two rules in order to use hooks,</p>
<ul>
<li><strong>Call Hooks only at the top level of your react functions:</strong> You should always use hooks at the top level of react function before any early returns. i.e, You shouldn’t call Hooks inside loops, conditions, or nested functions. This will ensure that Hooks are called in the same order each time a component renders and it preserves the state of Hooks between multiple re-renders due to useState and useEffect calls.</li>
<li><strong>Call Hooks from React Functions only:</strong> You shouldn’t call Hooks from regular JavaScript functions or class components. Instead, you should call them from either function components or custom hooks.</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to ensure hooks followed the rules in your project?</li>
</ul>
<p>     React team released an ESLint plugin called <strong>eslint-plugin-react-hooks</strong> that enforces Hook&#x27;s two rules. It is part of Hooks API. You can add this plugin to your project using the below command,</p>
<pre><code class="language-javascript">
npm install eslint-plugin-react-hooks --save-dev
</code></pre>
<p>     And apply the below config in your ESLint config file,</p>
<pre><code class="language-javascript">
// Your ESLint configuration
{
  &quot;plugins&quot;: [
    // ...
    &quot;react-hooks&quot;
  ],
  &quot;rules&quot;: {
    // ...
    &quot;react-hooks/rules-of-hooks&quot;: &quot;error&quot;
  }
}
</code></pre>
<p>     The recommended <code>eslint-config-react-app</code> preset already includes the hooks rules of this plugin.</p>
<p>     For example, the linter enforce proper naming convention for hooks. If you rename your custom hooks which as prefix &quot;use&quot; to something else then linter won&#x27;t allow you to call built-in hooks such as useState, useEffect etc inside of your custom hook anymore.</p>
<p>     <strong>Note:</strong> This plugin is intended to use in Create React App by default.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the differences between Flux and Redux?</li>
</ul>
<p>     Below are the major differences between Flux and Redux</p>
<table>
<thead><tr>
<th>Flux</th>
<th>Redux</th>
</tr></thead><tbody>
<tr>
<td>State is mutable</td>
<td>State is immutable</td>
</tr>
<tr>
<td>The Store contains both state and change logic</td>
<td>The Store and change logic are separate</td>
</tr>
<tr>
<td>There are multiple stores exist</td>
<td>There is only one store exist</td>
</tr>
<tr>
<td>All the stores are disconnected and flat</td>
<td>Single store with hierarchical reducers</td>
</tr>
<tr>
<td>It has a singleton dispatcher</td>
<td>There is no concept of dispatcher</td>
</tr>
<tr>
<td>React components subscribe to the store</td>
<td>Container components uses connect function</td>
</tr>
</tbody></table>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the benefits of React Router V4?</li>
</ul>
<p>     Below are the main benefits of React Router V4 module,</p>
<ul>
<li>In React Router v4(version 4), the API is completely about components. A router can be visualized as a single component(<code>&lt;BrowserRouter&gt;</code>) which wraps specific child router components(<code>&lt;Route&gt;</code>).</li>
<li>You don&#x27;t need to manually set history. The router module will take care history by wrapping routes with <code>&lt;BrowserRouter&gt;</code> component.</li>
<li>The application size is reduced by adding only the specific router module(Web, core, or native)</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Can you describe about componentDidCatch lifecycle method signature?</li>
</ul>
<p>     The <strong>componentDidCatch</strong> lifecycle method is invoked after an error has been thrown by a descendant component. The method receives two parameters,</p>
<ul>
<li>error: - The error object which was thrown</li>
<li>info: - An object with a componentStack key contains the information about which component threw the error.</li>
</ul>
<p>     The method structure would be as follows</p>
<pre><code class="language-javascript">
componentDidCatch(error, info);
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### In which scenarios error boundaries do not catch errors?</li>
</ul>
<p>     Below are the cases in which error boundaries doesn&#x27;t work,</p>
<ul>
<li>Inside Event handlers</li>
<li>Asynchronous code using <strong>setTimeout or requestAnimationFrame</strong> callbacks</li>
<li>During Server side rendering</li>
<li>When errors thrown in the error boundary code itself</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the behavior of uncaught errors in react 16?</li>
</ul>
<p>     In React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree. The reason behind this decision is that it is worse to leave corrupted UI in place than to completely remove it. For example, it is worse for a payments app to display a wrong amount than to render nothing.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the proper placement for error boundaries?</li>
</ul>
<p>     The granularity of error boundaries usage is up to the developer based on project needs. You can follow either of these approaches,</p>
<ul>
<li>You can wrap top-level route components to display a generic error message for the entire application.</li>
<li>You can also wrap individual components in an error boundary to protect them from crashing the rest of the application.</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the benefit of component stack trace from error boundary?</li>
</ul>
<p>     Apart from error messages and javascript stack, React16 will display the component stack trace with file names and line numbers using error boundary concept.</p>
<p>     For example, BuggyCounter component displays the component stack trace as below,</p>
<p>     <img src="images/error_boundary.png" alt="stacktrace"></p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are default props?</li>
</ul>
<p>     The <em>defaultProps</em> can be defined as a property on the component to set the default values for the props. These default props are used when props not supplied(i.e., undefined props), but not for null props. That means, If you provide null value then it remains null value.</p>
<p>     For example, let us create color default prop for the button component,</p>
<pre><code class="language-javascript">
function MyButton {
  // ...
}

MyButton.defaultProps = {
  color: &quot;red&quot;,
};
</code></pre>
<p>     If <code>props.color</code> is not provided then it will set the default value to &#x27;red&#x27;. i.e, Whenever you try to access the color prop it uses the default value</p>
<pre><code class="language-javascript">
function MyButton() {
   return &lt;MyButton /&gt; ; // props.color will contain red value
 }
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the purpose of displayName class property?</li>
</ul>
<p>     The displayName string is used in debugging messages. Usually, you don’t need to set it explicitly because it’s inferred from the name of the function or class that defines the component. You might want to set it explicitly if you want to display a different name for debugging purposes or when you create a higher-order component.</p>
<p>     For example, To ease debugging, choose a display name that communicates that it’s the result of a withSubscription HOC.</p>
<pre><code class="language-javascript">
function withSubscription(WrappedComponent) {
  class WithSubscription extends React.Component {
    /* ... */
  }
  WithSubscription.displayName = &#96;WithSubscription(${getDisplayName(
    WrappedComponent
  )})&#96;;
  return WithSubscription;
}
function getDisplayName(WrappedComponent) {
  return (
    WrappedComponent.displayName || WrappedComponent.name || &quot;Component&quot;
  );
}
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the browser support for react applications?</li>
</ul>
<p>     React supports all popular browsers, including Internet Explorer 9 and above, although some polyfills are required for older browsers such as IE 9 and IE 10. If you use <strong>es5-shim and es5-sham</strong> polyfill then it even support old browsers that doesn&#x27;t support ES5 methods.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is code-splitting?</li>
</ul>
<p>     Code-Splitting is a feature supported by bundlers like Webpack and Browserify which can create multiple bundles that can be dynamically loaded at runtime. The react project supports code splitting via dynamic import() feature.</p>
<p>     For example, in the below code snippets, it will make moduleA.js and all its unique dependencies as a separate chunk that only loads after the user clicks the &#x27;Load&#x27; button.</p>
<p>     <strong>moduleA.js</strong></p>
<pre><code class="language-javascript">
const moduleA = &quot;Hello&quot;;

export { moduleA };
</code></pre>
<p>     <strong>App.js</strong></p>
<pre><code class="language-javascript">
export default function App {
  function handleClick() {
    import(&quot;./moduleA&quot;)
      .then(({ moduleA }) =&gt; {
        // Use moduleA
      })
      .catch((err) =&gt; {
        // Handle failure
      });
  };

 return (
   &lt;div&gt;
     &lt;button onClick={this.handleClick}&gt;Load&lt;/button&gt;
   &lt;/div&gt;
 );
}
</code></pre>
    <details><summary><b>See Class</b></summary>
    <p>
<pre><code class="language-javascript">
import React, { Component } from &quot;react&quot;;

class App extends Component {
  handleClick = () =&gt; {
    import(&quot;./moduleA&quot;)
      .then(({ moduleA }) =&gt; {
        // Use moduleA
      })
      .catch((err) =&gt; {
        // Handle failure
      });
  };

  render() {
    return (
      &lt;div&gt;
        &lt;button onClick={this.handleClick}&gt;Load&lt;/button&gt;
      &lt;/div&gt;
    );
  }
}

export default App;
</code></pre>
    </p>
    </details>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are Keyed Fragments?</li>
</ul>
<p>     The Fragments declared with the explicit &lt;React.Fragment&gt; syntax may have keys. The general use case is mapping a collection to an array of fragments as below,</p>
<pre><code class="language-javascript">
function Glossary(props) {
  return (
    &lt;dl&gt;
      {props.items.map((item) =&gt; (
        // Without the &#96;key&#96;, React will fire a key warning
        &lt;React.Fragment key={item.id}&gt;
          &lt;dt&gt;{item.term}&lt;/dt&gt;
          &lt;dd&gt;{item.description}&lt;/dd&gt;
        &lt;/React.Fragment&gt;
      ))}
    &lt;/dl&gt;
  );
}
</code></pre>
<p>     <strong>Note:</strong> key is the only attribute that can be passed to Fragment. In the future, there might be a support for additional attributes, such as event handlers.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Does React support all HTML attributes?</li>
</ul>
<p>     As of React 16, both standard or custom DOM attributes are fully supported. Since React components often take both custom and DOM-related props, React uses the camelCase convention just like the DOM APIs.</p>
<p>     Let us take few props with respect to standard HTML attributes,</p>
<pre><code class="language-javascript">
&lt;div tabIndex=&quot;-1&quot; /&gt;      // Just like node.tabIndex DOM API
&lt;div className=&quot;Button&quot; /&gt; // Just like node.className DOM API
&lt;input readOnly={true} /&gt;  // Just like node.readOnly DOM API
</code></pre>
<p>     These props work similarly to the corresponding HTML attributes, with the exception of the special cases. It also support all SVG attributes.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### When component props defaults to true?</li>
</ul>
<p>     If you pass no value for a prop, it defaults to true. This behavior is available so that it matches the behavior of HTML.</p>
<p>     For example, below expressions are equivalent,</p>
<pre><code class="language-javascript">
&lt;MyInput autocomplete /&gt;

&lt;MyInput autocomplete={true} /&gt;
</code></pre>
<p>     <strong>Note:</strong> It is not recommended to use this approach because it can be confused with the ES6 object shorthand (example, <code>{name}</code> which is short for <code>{name: name}</code>)</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is NextJS and major features of it?</li>
</ul>
<p>     Next.js is a popular and lightweight framework for static and server‑rendered applications built with React. It also provides styling and routing solutions. Below are the major features provided by NextJS,</p>
<ul>
<li>Server-rendered by default</li>
<li>Automatic code splitting for faster page loads</li>
<li>Simple client-side routing (page based)</li>
<li>Webpack-based dev environment which supports (HMR)</li>
<li>Able to implement with Express or any other Node.js HTTP server</li>
<li>Customizable with your own Babel and Webpack configurations</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How do you pass an event handler to a component?</li>
</ul>
<p>     You can pass event handlers and other functions as props to child components. The functions can be passed to child component as below,</p>
<pre><code class="language-jsx">
function Button({ onClick }) {
   return (
     &lt;button onClick={onClick}&gt;
       Download
     &lt;/button&gt;
   );
}

export default function downloadExcel() {
 function handleClick() {
     alert(&#x27;Downloaded&#x27;);
 }

 return &lt;Button onClick={handleClick}&gt;&lt;/Button&gt;;
}
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to prevent a function from being called multiple times?</li>
</ul>
<p>     If you use an event handler such as <strong>onClick or onScroll</strong> and want to prevent the callback from being fired too quickly, then you can limit the rate at which callback is executed. This can be achieved in the below possible ways,</p>
<ul>
<li><strong>Throttling:</strong> Changes based on a time based frequency. For example, it can be used using \_.throttle lodash function</li>
<li><strong>Debouncing:</strong> Publish changes after a period of inactivity. For example, it can be used using \_.debounce lodash function</li>
<li><strong>RequestAnimationFrame throttling:</strong> Changes based on requestAnimationFrame. For example, it can be used using raf-schd lodash function</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How JSX prevents Injection Attacks?</li>
</ul>
<p>     React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered.</p>
<p>     For example, you can embed user input as below,</p>
<pre><code class="language-javascript">
const name = response.potentiallyMaliciousInput;
const element = &lt;h1&gt;{name}&lt;/h1&gt;;
</code></pre>
<p>     This way you can prevent XSS(Cross-site-scripting) attacks in the application.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How do you update rendered elements?</li>
</ul>
<p>     You can update UI(represented by rendered element) by passing the newly created element to ReactDOM&#x27;s render method.</p>
<p>     For example, lets take a ticking clock example, where it updates the time by calling render method multiple times,</p>
<pre><code class="language-javascript">
function tick() {
  const element = (
    &lt;div&gt;
      &lt;h1&gt;Hello, world!&lt;/h1&gt;
      &lt;h2&gt;It is {new Date().toLocaleTimeString()}.&lt;/h2&gt;
    &lt;/div&gt;
  );
  ReactDOM.render(element, document.getElementById(&quot;root&quot;));
}

setInterval(tick, 1000);
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How do you say that props are readonly?</li>
</ul>
<p>     When you declare a component as a function or a class, it must never modify its own props.</p>
<p>     Let us take a below capital function,</p>
<pre><code class="language-javascript">
function capital(amount, interest) {
  return amount + interest;
}
</code></pre>
<p>     The above function is called “pure” because it does not attempt to change their inputs, and always return the same result for the same inputs. Hence, React has a single rule saying &quot;All React components must act like pure functions with respect to their props.&quot;</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the conditions to safely use the index as a key?</li>
</ul>
<p>     There are three conditions to make sure, it is safe use the index as a key.</p>
<ul>
<li>The list and items are static– they are not computed and do not change</li>
<li>The items in the list have no ids</li>
<li>The list is never reordered or filtered.</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Should keys be globally unique?</li>
</ul>
<p>     The keys used within arrays should be unique among their siblings but they don’t need to be globally unique. i.e, You can use the same keys with two different arrays.</p>
<p>     For example, the below <code>Book</code> component uses two arrays with different arrays,</p>
<pre><code class="language-javascript">
function Book(props) {
  const index = (
    &lt;ul&gt;
      {props.pages.map((page) =&gt; (
        &lt;li key={page.id}&gt;{page.title}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
  const content = props.pages.map((page) =&gt; (
    &lt;div key={page.id}&gt;
      &lt;h3&gt;{page.title}&lt;/h3&gt;
      &lt;p&gt;{page.content}&lt;/p&gt;
      &lt;p&gt;{page.pageNumber}&lt;/p&gt;
    &lt;/div&gt;
  ));
  return (
    &lt;div&gt;
      {index}
      &lt;hr /&gt;
      {content}
    &lt;/div&gt;
  );
}
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the popular choice for form handling?</li>
</ul>
<p>     <code>Formik</code> is a form library for react which provides solutions such as validation, keeping track of the visited fields, and handling form submission.</p>
<p>     In detail, You can categorize them as follows,</p>
<ul>
<li>Getting values in and out of form state</li>
<li>Validation and error messages</li>
<li>Handling form submission</li>
</ul>
<p>     It is used to create a scalable, performant, form helper with a minimal API to solve annoying stuff.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the advantages of formik over redux form library?</li>
</ul>
<p>     Below are the main reasons to recommend formik over redux form library,</p>
<ul>
<li>The form state is inherently short-term and local, so tracking it in Redux (or any kind of Flux library) is unnecessary.</li>
<li>Redux-Form calls your entire top-level Redux reducer multiple times ON EVERY SINGLE KEYSTROKE. This way it increases input latency for large apps.</li>
<li>Redux-Form is 22.5 kB minified gzipped whereas Formik is 12.7 kB</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Why are you not required to use inheritance?</li>
</ul>
<p>     In React, it is recommended to use composition over inheritance to reuse code between components. Both Props and composition give you all the flexibility you need to customize a component’s look and behavior explicitly and safely.</p>
<p>     Whereas, If you want to reuse non-UI functionality between components, it is suggested to extract it into a separate JavaScript module. Later components import it and use that function, object, or class, without extending it.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Can I use web components in react application?</li>
</ul>
<p>     Yes, you can use web components in a react application. Even though many developers won&#x27;t use this combination, it may require especially if you are using third-party UI components that are written using Web Components.</p>
<p>     For example, let us use <code>Vaadin</code> date picker web component as below,</p>
<pre><code class="language-javascript">
import &quot;./App.css&quot;;
import &quot;@vaadin/vaadin-date-picker&quot;;
export default function App() {
    return (
      &lt;div className=&quot;App&quot;&gt;
        &lt;vaadin-date-picker label=&quot;When were you born?&quot;&gt;&lt;/vaadin-date-picker&gt;
      &lt;/div&gt;
    );
}
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is dynamic import?</li>
</ul>
<p>     You can achieve code-splitting in your app using dynamic import.</p>
<p>     Let&#x27;s take an example of addition,</p>
<ul>
<li><strong>Normal Import</strong></li>
</ul>
<pre><code class="language-javascript">
import { add } from &quot;./math&quot;;
console.log(add(10, 20));
</code></pre>
<ul>
<li><strong>Dynamic Import</strong></li>
</ul>
<pre><code class="language-javascript">
import(&quot;./math&quot;).then((math) =&gt; {
  console.log(math.add(10, 20));
});
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are loadable components?</li>
</ul>
<p>     With the release of React 18, React.lazy and Suspense are now available for server-side rendering. However, prior to React 18, it was recommended to use Loadable Components for code-splitting in a server-side rendered app because React.lazy and Suspense were not available for server-side rendering. Loadable Components lets you render a dynamic import as a regular component. For example, you can use Loadable Components to load the OtherComponent in a separate bundle like this:</p>
<pre><code class="language-javascript">
import loadable from &quot;@loadable/component&quot;;

const OtherComponent = loadable(() =&gt; import(&quot;./OtherComponent&quot;));

function MyComponent() {
  return (
    &lt;div&gt;
      &lt;OtherComponent /&gt;
    &lt;/div&gt;
  );
}
</code></pre>
<p>     Now OtherComponent will be loaded in a separated bundle</p>
<p>     Loadable Components provides additional benefits beyond just code-splitting, such as automatic code reloading, error handling, and preloading. By using Loadable Components, you can ensure that your application loads quickly and efficiently, providing a better user experience for your users.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is suspense component?</li>
</ul>
<p>     If the module containing the dynamic import is not yet loaded by the time parent component renders, you must show some fallback content while you’re waiting for it to load using a loading indicator. This can be done using <strong>Suspense</strong> component.</p>
<p>     For example, the below code uses suspense component,</p>
<pre><code class="language-javascript">
const OtherComponent = React.lazy(() =&gt; import(&quot;./OtherComponent&quot;));

function MyComponent() {
  return (
    &lt;div&gt;
      &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
        &lt;OtherComponent /&gt;
      &lt;/Suspense&gt;
    &lt;/div&gt;
  );
}
</code></pre>
<p>     As mentioned in the above code, Suspense is wrapped above the lazy component.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is route based code splitting?</li>
</ul>
<p>     One of the best place to do code splitting is with routes. The entire page is going to re-render at once so users are unlikely to interact with other elements in the page at the same time. Due to this, the user experience won&#x27;t be disturbed.</p>
<p>     Let us take an example of route based website using libraries like React Router with React.lazy,</p>
<pre><code class="language-javascript">
import { BrowserRouter as Router, Route, Switch } from &quot;react-router-dom&quot;;
import React, { Suspense, lazy } from &quot;md1/react&quot;;

const Home = lazy(() =&gt; import(&quot;./routes/Home&quot;));
const About = lazy(() =&gt; import(&quot;./routes/About&quot;));

const App = () =&gt; (
  &lt;Router&gt;
    &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
      &lt;Switch&gt;
        &lt;Route exact path=&quot;/&quot; component={Home} /&gt;
        &lt;Route path=&quot;/about&quot; component={About} /&gt;
      &lt;/Switch&gt;
    &lt;/Suspense&gt;
  &lt;/Router&gt;
);
</code></pre>
<p>     In the above code, the code splitting will happen at each route level.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the purpose of default value in context?</li>
</ul>
<p>     The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them.</p>
<p>     Below code snippet provides default theme value as Luna.</p>
<pre><code class="language-javascript">
const MyContext = React.createContext(defaultValue);
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is diffing algorithm?</li>
</ul>
<p>     React needs to use algorithms to find out how to efficiently update the UI to match the most recent tree. The diffing algorithms is generating the minimum number of operations to transform one tree into another. However, the algorithms have a complexity in the order of O(n³) where n is the number of elements in the tree.</p>
<p>     In this case, displaying 1000 elements would require in the order of one billion comparisons. This is far too expensive. Instead, React implements a heuristic O(n) algorithm based on two assumptions:</p>
<ul>
<li>Two elements of different types will produce different trees.</li>
<li>The developer can hint at which child elements may be stable across different renders with a key prop.</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the rules covered by diffing algorithm?</li>
</ul>
<p>     When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements. It covers the below rules during reconciliation algorithm,</p>
<ul>
<li><strong>Elements Of Different Types:</strong></li>
</ul>
<p>        Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch. For example, elements &lt;a&gt; to &lt;img&gt;, or from &lt;Article&gt; to &lt;Comment&gt; of different types lead a full rebuild.</p>
<ul>
<li><strong>DOM Elements Of The Same Type:</strong></li>
</ul>
<p>        When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes. Lets take an example with same DOM elements except className attribute,</p>
<pre><code class="language-javascript">
&lt;div className=&quot;show&quot; title=&quot;ReactJS&quot; /&gt;

&lt;div className=&quot;hide&quot; title=&quot;ReactJS&quot; /&gt;
</code></pre>
<ul>
<li><strong>Component Elements Of The Same Type:</strong></li>
</ul>
<p>        When a component updates, the instance stays the same, so that state is maintained across renders. React updates the props of the underlying component instance to match the new element, and calls componentWillReceiveProps() and componentWillUpdate() on the underlying instance. After that, the render() method is called and the diff algorithm recurses on the previous result and the new result.</p>
<ul>
<li><strong>Recursing On Children:</strong></li>
</ul>
<p>        when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference. For example, when adding an element at the end of the children, converting between these two trees works well.</p>
<pre><code class="language-javascript">
&lt;ul&gt;
  &lt;li&gt;first&lt;/li&gt;
  &lt;li&gt;second&lt;/li&gt;
&lt;/ul&gt;

&lt;ul&gt;
  &lt;li&gt;first&lt;/li&gt;
  &lt;li&gt;second&lt;/li&gt;
  &lt;li&gt;third&lt;/li&gt;
&lt;/ul&gt;

</code></pre>
<ul>
<li><strong>Handling keys:</strong></li>
</ul>
<p>        React supports a key attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree. For example, adding a key can make the tree conversion efficient,</p>
<pre><code class="language-javascript">
&lt;ul&gt;
  &lt;li key=&quot;2015&quot;&gt;Duke&lt;/li&gt;
  &lt;li key=&quot;2016&quot;&gt;Villanova&lt;/li&gt;
&lt;/ul&gt;

&lt;ul&gt;
  &lt;li key=&quot;2014&quot;&gt;Connecticut&lt;/li&gt;
  &lt;li key=&quot;2015&quot;&gt;Duke&lt;/li&gt;
  &lt;li key=&quot;2016&quot;&gt;Villanova&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### When do you need to use refs?</li>
</ul>
<p>     There are few use cases to go for refs,</p>
<ul>
<li>Managing focus, text selection, or media playback.</li>
<li>Triggering imperative animations.</li>
<li>Integrating with third-party DOM libraries.</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Must prop be named as render for render props?</li>
</ul>
<p>     Even though the pattern named render props, you don’t have to use a prop named render to use this pattern. i.e, Any prop that is a function that a component uses to know what to render is technically a “render prop”. Lets take an example with the children prop for render props,</p>
<pre><code class="language-javascript">
&lt;Mouse
  children={(mouse) =&gt; (
    &lt;p&gt;
      The mouse position is {mouse.x}, {mouse.y}
    &lt;/p&gt;
  )}
/&gt;
</code></pre>
<p>     Actually children prop doesn’t need to be named in the list of “attributes” in JSX element. Instead, you can keep it directly inside element,</p>
<pre><code class="language-javascript">
&lt;Mouse&gt;
  {(mouse) =&gt; (
    &lt;p&gt;
      The mouse position is {mouse.x}, {mouse.y}
    &lt;/p&gt;
  )}
&lt;/Mouse&gt;
</code></pre>
<p>     While using this above technique(without any name), explicitly state that children should be a function in your propTypes.</p>
<pre><code class="language-javascript">
Mouse.propTypes = {
  children: PropTypes.func.isRequired,
};
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the problems of using render props with pure components?</li>
</ul>
<p>     If you create a function inside a render method, it negates the purpose of pure component. Because the shallow prop comparison will always return false for new props, and each render in this case will generate a new value for the render prop. You can solve this issue by defining the render function as instance method.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is windowing technique?</li>
</ul>
<p>     Windowing is a technique that only renders a small subset of your rows at any given time, and can dramatically reduce the time it takes to re-render the components as well as the number of DOM nodes created. If your application renders long lists of data then this technique is recommended. Both react-window and react-virtualized are popular windowing libraries which provides several reusable components for displaying lists, grids, and tabular data.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How do you print falsy values in JSX?</li>
</ul>
<p>     The falsy values such as false, null, undefined, and true are valid children but they don&#x27;t render anything. If you still want to display them then you need to convert it to string. Let&#x27;s take an example on how to convert to a string,</p>
<pre><code class="language-javascript">
&lt;div&gt;My JavaScript variable is {String(myVariable)}.&lt;/div&gt;
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the typical use case of portals?</li>
</ul>
<p>     React portals are very useful when a parent component has overflow: hidden or has properties that affect the stacking context (e.g. z-index, position, opacity) and you need to visually “break out” of its container.</p>
<p>     For example, dialogs, global message notifications, hovercards, and tooltips.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How do you set default value for uncontrolled component?</li>
</ul>
<p>     In React, the value attribute on form elements will override the value in the DOM. With an uncontrolled component, you might want React to specify the initial value, but leave subsequent updates uncontrolled. To handle this case, you can specify a <strong>defaultValue</strong> attribute instead of <strong>value</strong>.</p>
<pre><code class="language-javascript">
render() {
  return (
    &lt;form onSubmit={this.handleSubmit}&gt;
      &lt;label&gt;
        User Name:
        &lt;input
          defaultValue=&quot;John&quot;
          type=&quot;text&quot;
          ref={this.input} /&gt;
      &lt;/label&gt;
      &lt;input type=&quot;submit&quot; value=&quot;Submit&quot; /&gt;
    &lt;/form&gt;
  );
}
</code></pre>
<p>     The same applies for <code>select</code> and <code>textArea</code> inputs. But you need to use <strong>defaultChecked</strong> for <code>checkbox</code> and <code>radio</code> inputs.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is your favorite React stack?</li>
</ul>
<p>     Even though the tech stack varies from developer to developer, the most popular stack is used in react boilerplate project code. It mainly uses Redux and redux-saga for state management and asynchronous side-effects, react-router for routing purpose, styled-components for styling react components, axios for invoking REST api, and other supported stack such as webpack, reselect, ESNext, Babel.</p>
<p>     You can clone the project https://github.com/react-boilerplate/react-boilerplate and start working on any new react project.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the difference between Real DOM and Virtual DOM?</li>
</ul>
<p>     Below are the main differences between Real DOM and Virtual DOM,</p>
<table>
<thead><tr>
<th>Real DOM</th>
<th>Virtual DOM</th>
</tr></thead><tbody>
<tr>
<td>Updates are slow</td>
<td>Updates are fast</td>
</tr>
<tr>
<td>DOM manipulation is very expensive.</td>
<td>DOM manipulation is very easy</td>
</tr>
<tr>
<td>You can update HTML directly.</td>
<td>You Can’t directly update HTML</td>
</tr>
<tr>
<td>It causes too much of memory wastage</td>
<td>There is no memory wastage</td>
</tr>
<tr>
<td>Creates a new DOM if element updates</td>
<td>It updates the JSX if element update</td>
</tr>
</tbody></table>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to add Bootstrap to a react application?</li>
</ul>
<p>     Bootstrap can be added to your React app in a three possible ways,</p>
<ul>
<li>Using the Bootstrap CDN:</li>
</ul>
<p>        This is the easiest way to add bootstrap. Add both bootstrap CSS and JS resources in a head tag.</p>
<ul>
<li>Bootstrap as Dependency:</li>
</ul>
<p>        If you are using a build tool or a module bundler such as Webpack, then this is the preferred option for adding Bootstrap to your React application</p>
<pre><code class="language-javascript">
npm install bootstrap
</code></pre>
<ul>
<li>React Bootstrap Package:</li>
</ul>
<p>        In this case, you can add Bootstrap to our React app is by using a package that has rebuilt Bootstrap components to work particularly as React components. Below packages are popular in this category,</p>
<ul>
<li>react-bootstrap</li>
<li>reactstrap</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Can you list down top websites or applications using react as front end framework?</li>
</ul>
<p>     Below are the <code>top 10 websites</code> using React as their front-end framework,</p>
<ul>
<li>Facebook</li>
<li>Uber</li>
<li>Instagram</li>
<li>WhatsApp</li>
<li>Khan Academy</li>
<li>Airbnb</li>
<li>Dropbox</li>
<li>Flipboard</li>
<li>Netflix</li>
<li>PayPal</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Is it recommended to use CSS In JS technique in React?</li>
</ul>
<p>     React does not have any opinion about how styles are defined but if you are a beginner then good starting point is to define your styles in a separate \*.css file as usual and refer to them using className. This functionality is not part of React but came from third-party libraries. But If you want to try a different approach(CSS-In-JS) then styled-components library is a good option.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Do I need to rewrite all my class components with hooks?</li>
</ul>
<p>     No. But you can try Hooks in a few components(or new components) without rewriting any existing code. Because there are no plans to remove classes in ReactJS.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to fetch data with React Hooks?</li>
</ul>
<p>     The effect hook called <code>useEffect</code> can be used to fetch data from an API and to set the data in the local state of the component with the useState hook’s update function.</p>
<p>     Here is an example of fetching a list of react articles from an API using fetch.</p>
<pre><code class="language-javascript">
import React from &quot;md1/react&quot;;

function App() {
  const [data, setData] = React.useState({ hits: [] });

  React.useEffect(() =&gt; {
   fetch(&quot;http://hn.algolia.com/api/v1/search?query=react&quot;)
   .then(response =&gt; response.json())
   .then(data =&gt; setData(data))
  }, []);

  return (
    &lt;ul&gt;
      {data.hits.map((item) =&gt; (
        &lt;li key={item.objectID}&gt;
          &lt;a href={item.url}&gt;{item.title}&lt;/a&gt;
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default App;
</code></pre>
<p>     A popular way to simplify this is by using the library axios.</p>
<p>     We provided an empty array as second argument to the useEffect hook to avoid activating it on component updates. This way, it only fetches on component mount.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Is Hooks cover all use cases for classes?</li>
</ul>
<p>     Hooks doesn&#x27;t cover all use cases of classes but there is a plan to add them soon. Currently there are no Hook equivalents to the uncommon <strong>getSnapshotBeforeUpdate</strong> and <strong>componentDidCatch</strong> lifecycles yet.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the stable release for hooks support?</li>
</ul>
<p>     React includes a stable implementation of React Hooks in 16.8 release for below packages</p>
<ul>
<li>React DOM</li>
<li>React DOM Server</li>
<li>React Test Renderer</li>
<li>React Shallow Renderer</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Why do we use array destructuring (square brackets notation) in <code>useState</code>?</li>
</ul>
<p>     When we declare a state variable with <code>useState</code>, it returns a pair — an array with two items. The first item is the current value, and the second is a function that updates the value. Using [0] and [1] to access them is a bit confusing because they have a specific meaning. This is why we use array destructuring instead.</p>
<p>     For example, the array index access would look as follows:</p>
<pre><code class="language-javascript">
var userStateVariable = useState(&quot;userProfile&quot;); // Returns an array pair
var user = userStateVariable[0]; // Access first item
var setUser = userStateVariable[1]; // Access second item
</code></pre>
<p>     Whereas with array destructuring the variables can be accessed as follows:</p>
<pre><code class="language-javascript">
const [user, setUser] = useState(&quot;userProfile&quot;);
</code></pre>
<p>     <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the sources used for introducing hooks?</li>
</ul>
<p>     Hooks got the ideas from several different sources. Below are some of them,</p>
<ul>
<li>Previous experiments with functional APIs in the react-future repository</li>
<li>Community experiments with render prop APIs such as Reactions Component</li>
<li>State variables and state cells in DisplayScript.</li>
<li>Subscriptions in Rx.</li>
<li>Reducer components in ReasonReact.</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How do you access imperative API of web components?</li>
</ul>
<p>     Web Components often expose an imperative API to implement its functions. You will need to use a <strong>ref</strong> to interact with the DOM node directly if you want to access imperative API of a web component. But if you are using third-party Web Components, the best solution is to write a React component that behaves as a <strong>wrapper</strong> for your Web Component.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is formik?</li>
</ul>
<p>     Formik is a small react form library that helps you with the three major problems,</p>
<ul>
<li>Getting values in and out of form state</li>
<li>Validation and error messages</li>
<li>Handling form submission</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are typical middleware choices for handling asynchronous calls in Redux?</li>
</ul>
<p>     Some of the popular middleware choices for handling asynchronous calls in Redux eco system are <code>Redux Thunk, Redux Promise, Redux Saga</code>.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Do browsers understand JSX code?</li>
</ul>
<p>     No, browsers can&#x27;t understand JSX code. You need a transpiler to convert your JSX to regular Javascript that browsers can understand. The most widely used transpiler right now is Babel.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Describe about data flow in react?</li>
</ul>
<p>     React implements one-way reactive data flow using props which reduce boilerplate and is easier to understand than traditional two-way data binding.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is MobX?</li>
</ul>
<p>     MobX is a simple, scalable and battle tested state management solution for applying functional reactive programming (TFRP). For reactJs application, you need to install below packages,</p>
<pre><code class="language-bash">
npm install mobx --save
npm install mobx-react --save
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the differences between Redux and MobX?</li>
</ul>
<p>     Below are the main differences between Redux and MobX,</p>
<table>
<thead><tr>
<th>Topic</th>
<th>Redux</th>
<th>MobX</th>
</tr></thead><tbody>
<tr>
<td>Definition</td>
<td>It is a javascript library for managing the application state</td>
<td>It is a library for reactively managing the state of your applications</td>
</tr>
<tr>
<td>Programming</td>
<td>It is mainly written in ES6</td>
<td>It is written in JavaScript(ES5)</td>
</tr>
<tr>
<td>Data Store</td>
<td>There is only one large store exist for data storage</td>
<td>There is more than one store for storage</td>
</tr>
<tr>
<td>Usage</td>
<td>Mainly used for large and complex applications</td>
<td>Used for simple applications</td>
</tr>
<tr>
<td>Performance</td>
<td>Need to be improved</td>
<td>Provides better performance</td>
</tr>
<tr>
<td>How it stores</td>
<td>Uses JS Object to store</td>
<td>Uses observable to store the data</td>
</tr>
</tbody></table>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Should I learn ES6 before learning ReactJS?</li>
</ul>
<p>     No, you don’t have to learn es2015/es6 to learn react. But you may find many resources or React ecosystem uses ES6 extensively. Let&#x27;s see some of the frequently used ES6 features,</p>
<ul>
<li><strong>Destructuring:</strong> To get props and use them in a component</li>
</ul>
<pre><code class="language-javascript">
// in es 5
var someData = this.props.someData;
var dispatch = this.props.dispatch;

// in es6
const { someData, dispatch } = this.props;
</code></pre>
<ul>
<li>Spread operator: Helps in passing props down into a component</li>
</ul>
<pre><code class="language-javascript">
// in es 5
&lt;SomeComponent someData={this.props.someData} dispatch={this.props.dispatch} /&gt;

// in es6
&lt;SomeComponent {...this.props} /&gt;
</code></pre>
<ul>
<li>Arrow functions: Makes compact syntax</li>
<pre><code class="language-javascript">
// es 5
var users = usersList.map(function (user) {
  return &lt;li&gt;{user.name}&lt;/li&gt;;
});
// es 6
const users = usersList.map((user) =&gt; &lt;li&gt;{user.name}&lt;/li&gt;);
</code></pre>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is Concurrent Rendering?</li>
</ul>
<p>     The Concurrent rendering makes React apps to be more responsive by rendering component trees without blocking the main UI thread. It allows React to interrupt a long-running render to handle a high-priority event. i.e, When you enabled concurrent Mode, React will keep an eye on other tasks that need to be done, and if there&#x27;s something with a higher priority it will pause what it is currently rendering and let the other task finish first. You can enable this in two ways,</p>
<pre><code class="language-javascript">
// 1. Part of an app by wrapping with ConcurrentMode
&lt;React.unstable_ConcurrentMode&gt;
  &lt;Something /&gt;
&lt;/React.unstable_ConcurrentMode&gt;;

// 2. Whole app using createRoot
ReactDOM.unstable_createRoot(domNode).render(&lt;App /&gt;);
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the difference between async mode and concurrent mode?</li>
</ul>
<p>     Both refers the same thing. Previously concurrent Mode being referred to as &quot;Async Mode&quot; by React team. The name has been changed to highlight React’s ability to perform work on different priority levels. So it avoids the confusion from other approaches to Async Rendering.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Can I use javascript urls in react16.9?</li>
</ul>
<p>     Yes, you can use javascript: URLs but it will log a warning in the console. Because URLs starting with javascript: are dangerous by including unsanitized output in a tag like <code>&lt;a href&gt;</code> and create a security hole.</p>
<pre><code class="language-javascript">
const companyProfile = {
  website: &quot;javascript: alert(&#x27;Your website is hacked&#x27;)&quot;,
};
// It will log a warning
&lt;a href={companyProfile.website}&gt;More details&lt;/a&gt;;
</code></pre>
<p>     Remember that the future versions will throw an error for javascript URLs.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the purpose of eslint plugin for hooks?</li>
</ul>
<p>     The ESLint plugin enforces rules of Hooks to avoid bugs. It assumes that any function starting with ”use” and a capital letter right after it is a Hook. In particular, the rule enforces that,</p>
<ul>
<li>Calls to Hooks are either inside a PascalCase function (assumed to be a component) or another useSomething function (assumed to be a custom Hook).</li>
<li>Hooks are called in the same order on every render.</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the difference between Imperative and Declarative in React?</li>
</ul>
<p>     Imagine a simple UI component, such as a &quot;Like&quot; button. When you tap it, it turns blue if it was previously grey, and grey if it was previously blue.</p>
<p>     The imperative way of doing this would be:</p>
<pre><code class="language-javascript">
if (user.likes()) {
  if (hasBlue()) {
    removeBlue();
    addGrey();
  } else {
    removeGrey();
    addBlue();
  }
}
</code></pre>
<p>     Basically, you have to check what is currently on the screen and handle all the changes necessary to redraw it with the current state, including undoing the changes from the previous state. You can imagine how complex this could be in a real-world scenario.</p>
<p>     In contrast, the declarative approach would be:</p>
<pre><code class="language-javascript">
if (this.state.liked) {
  return &lt;blueLike /&gt;;
} else {
  return &lt;greyLike /&gt;;
}
</code></pre>
<p>     Because the declarative approach separates concerns, this part of it only needs to handle how the UI should look in a sepecific state, and is therefore much simpler to understand.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the benefits of using typescript with reactjs?</li>
</ul>
<p>     Below are some of the benefits of using typescript with Reactjs,</p>
<ul>
<li>It is possible to use latest JavaScript features</li>
<li>Use of interfaces for complex type definitions</li>
<li>IDEs such as VS Code was made for TypeScript</li>
<li>Avoid bugs with the ease of readability and Validation</li>
</ul>
<p>     <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How do you make sure that user remains authenticated on page refresh while using Context API State Management?</li>
</ul>
<p>     When a user logs in and reload, to persist the state generally we add the load user action in the useEffect hooks in the main App.js. While using Redux, loadUser action can be easily accessed.</p>
<p>      <strong>App.js</strong></p>
<pre><code class="language-js">
import { loadUser } from &quot;../actions/auth&quot;;
store.dispatch(loadUser());
</code></pre>
<ul>
<li>But while using <strong>Context API</strong>, to access context in App.js, wrap the AuthState in index.js so that App.js can access the auth context. Now whenever the page reloads, no matter what route you are on, the user will be authenticated as <strong>loadUser</strong> action will be triggered on each re-render.</li>
</ul>
<p>     <strong>index.js</strong></p>
<pre><code class="language-js">
import React from &quot;md1/react&quot;;
import ReactDOM from &quot;react-dom&quot;;
import App from &quot;./App&quot;;
import AuthState from &quot;./context/auth/AuthState&quot;;

ReactDOM.render(
  &lt;React.StrictMode&gt;
    &lt;AuthState&gt;
      &lt;App /&gt;
    &lt;/AuthState&gt;
  &lt;/React.StrictMode&gt;,
  document.getElementById(&quot;root&quot;)
);
</code></pre>
<p>      <strong>App.js</strong></p>
<pre><code class="language-js">
const authContext = useContext(AuthContext);

const { loadUser } = authContext;

useEffect(() =&gt; {
  loadUser();
}, []);
</code></pre>
<p>      <strong>loadUser</strong></p>
<pre><code class="language-js">
const loadUser = async () =&gt; {
  const token = sessionStorage.getItem(&quot;token&quot;);

  if (!token) {
    dispatch({
      type: ERROR,
    });
  }
  setAuthToken(token);

  try {
    const res = await axios(&quot;/api/auth&quot;);

    dispatch({
      type: USER_LOADED,
      payload: res.data.data,
    });
  } catch (err) {
    console.error(err);
  }
};
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the benefits of new JSX transform?</li>
</ul>
<p>     There are three major benefits of new JSX transform,</p>
<ul>
<li>It is possible to use JSX without importing React packages</li>
<li>The compiled output might improve the bundle size in a small amount</li>
<li>The future improvements provides the flexibility to reduce the number of concepts to learn React.</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How is the new JSX transform different from old transform??</li>
</ul>
<p>     The new JSX transform doesn’t require React to be in scope. i.e, You don&#x27;t need to import React package for simple scenarios.</p>
<p>     Let&#x27;s take an example to look at the main differences between the old and the new transform,</p>
<p>     <strong>Old Transform:</strong></p>
<pre><code class="language-js">
import React from &quot;md1/react&quot;;

function App() {
  return &lt;h1&gt;Good morning!!&lt;/h1&gt;;
}
</code></pre>
<p>     Now JSX transform convert the above code into regular JavaScript as below,</p>
<pre><code class="language-js">
import React from &quot;react&quot;;

function App() {
  return React.createElement(&quot;h1&quot;, null, &quot;Good morning!!&quot;);
}
</code></pre>
<p>     <strong>New Transform:</strong></p>
<p>     The new JSX transform doesn&#x27;t require any React imports</p>
<pre><code class="language-js">
function App() {
  return &lt;h1&gt;Good morning!!&lt;/h1&gt;;
}
</code></pre>
<p>     Under the hood JSX transform compiles to below code</p>
<pre><code class="language-js">
import { jsx as _jsx } from &quot;react/jsx-runtime&quot;;

function App() {
  return _jsx(&quot;h1&quot;, { children: &quot;Good morning!!&quot; });
}
</code></pre>
<p>     <strong>Note:</strong> You still need to import React to use Hooks.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are React Server components?</li>
</ul>
<p>     React Server Component is a way to write React component that gets rendered in the server-side with the purpose of improving React app performance. These components allow us to load components from the backend.</p>
<p>     <strong>Note:</strong> React Server Components is still under development and not recommended for production yet.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is prop drilling?</li>
</ul>
<p>     Prop Drilling is the process by which you pass data from one component of the React Component tree to another by going through other components that do not need the data but only help in passing it around.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the difference between useState and useRef hook?</li>
<li>useState causes components to re-render after state updates whereas useRef doesn’t cause a component to re-render when the value or state changes.</li>
</ul>
<p>        Essentially, useRef is like a “box” that can hold a mutable value in its (.current) property.</p>
<ul>
<li>useState allows us to update the state inside components. While useRef allows referencing DOM elements.</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is a wrapper component?</li>
</ul>
<p>     A wrapper in React is a component that wraps or surrounds another component or group of components. It can be used for a variety of purposes such as adding additional functionality, styling, or layout to the wrapped components.</p>
<p>     For example, consider a simple component that displays a message:</p>
<pre><code class="language-javascript">
const Message = ({ text }) =&gt; {
  return &lt;p&gt;{text}&lt;/p&gt;;
};
</code></pre>
<p>     We can create a wrapper component that will add a border to the message component:</p>
<pre><code class="language-javascript">
const MessageWrapper = (props) =&gt; {
  return (
    &lt;div style={{ border: &quot;1px solid black&quot; }}&gt;
      &lt;Message {...props} /&gt;
    &lt;/div&gt;
  );
};
</code></pre>
<p>     Now we can use the MessageWrapper component instead of the Message component and the message will be displayed with a border:</p>
<pre><code class="language-javascript">
&lt;MessageWrapper text=&quot;Hello World&quot; /&gt;
</code></pre>
<p>     Wrapper component can also accept its own props and pass them down to the wrapped component, for example, we can create a wrapper component that will add a title to the message component:</p>
<pre><code class="language-javascript">
const MessageWrapperWithTitle = ({title, ...props}) =&gt; {
  return (
    &lt;div&gt;
      &lt;h3&gt;{title}&lt;/h3&gt;
      &lt;Message {...props} /&gt;
    &lt;/div&gt;
  );
};
</code></pre>
<p>     Now we can use the MessageWrapperWithTitle component and pass title props:</p>
<pre><code class="language-javascript">
&lt;MessageWrapperWithTitle title=&quot;My Message&quot; text=&quot;Hello World&quot; /&gt;
</code></pre>
<p>     This way, the wrapper component can add additional functionality, styling, or layout to the wrapped component while keeping the wrapped component simple and reusable.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the differences between useEffect and useLayoutEffect hooks?</li>
</ul>
<p>     useEffect and useLayoutEffect are both React hooks that can be used to synchronize a component with an external system, such as a browser API or a third-party library. However, there are some key differences between the two:</p>
<ul>
<li>Timing: useEffect runs after the browser has finished painting, while useLayoutEffect runs synchronously before the browser paints. This means that useLayoutEffect can be used to measure and update layout in a way that feels more synchronous to the user.</li>
</ul>
<ul>
<li>Browser Paint: useEffect allows browser to paint the changes before running the effect, hence it may cause some visual flicker. useLayoutEffect synchronously runs the effect before browser paints and hence it will avoid visual flicker.</li>
</ul>
<ul>
<li>Execution Order: The order in which multiple useEffect hooks are executed is determined by React and may not be predictable. However, the order in which multiple useLayoutEffect hooks are executed is determined by the order in which they were called.</li>
</ul>
<ul>
<li>Error handling: useEffect has a built-in mechanism for handling errors that occur during the execution of the effect, so that it does not crash the entire application. useLayoutEffect does not have this mechanism, and errors that occur during the execution of the effect will crash the entire application.</li>
</ul>
<p>     In general, it&#x27;s recommended to use useEffect as much as possible, because it is more performant and less prone to errors. useLayoutEffect should only be used when you need to measure or update layout, and you can&#x27;t achieve the same result using useEffect.</p>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the differences between Functional and Class Components?</li>
</ul>
<p>      There are two different ways to create components in ReactJS. The main differences are listed down as below,</p>
<p>      ## 1.  Syntax:</p>
<p>      The classs components uses ES6 classes to create the components. It uses <code>render</code> function to display the HTML content in the webpage.</p>
<p>      The syntax for class component looks like as below.</p>
<pre><code class="language-js">
class App extends Reacts.Component {
  render(){
    return &lt;h1&gt;This is a class component&lt;/h1&gt;}
  }

</code></pre>
<p>      <strong>Note:</strong> The <strong>Pascal Case</strong> is the recommended approach to provide naming to a component.</p>
<p>      Functional component has been improved over the years with some added features like Hooks. Here is a syntax for functional component.</p>
<pre><code class="language-js">
function App(){
  return &lt;div className=&quot;App&quot;&gt;
    &lt;h1&gt;Hello, I&#x27;m a function component&lt;/h1&gt;
    &lt;/div&gt;
}

</code></pre>
<p>      ## 2. State:</p>
<p>      State contains information or data about a component which may change over time. </p>
<p>      In class component, you can update the state when a user interacts with it or server updates the data using the <code>setState()</code> method. The initial state is going to be assigned in the <code>Constructor( ) </code>method using the the <code> this.state</code> object and it is possible to different data types in the <code>this.state</code> object such as string, boolean, numbers, etc.</p>
<p>      <strong>A simple example showing how we use the setState() and constructor()</strong></p>
<pre><code class="language-js">
class App extends Component {
  constructor() {
    super();
    this.state = {
      message: &quot;This is a class component&quot;,
    };
  }
  updateMessage() {
    this.setState({t
      message: &quot;Updating the class component&quot;,
    });
  }
  render() {
    return (
      &lt;&gt;
        &lt;h1&gt;{this.state.message}&lt;/h1&gt;
        &lt;button
          onClick={() =&gt; {
            this.updateMessage();
          }}&gt;
          Click!!
        &lt;/button&gt;
      &lt;/&gt;
    );
  }
}

</code></pre>
<p>      You not use state in functional components because it was only supported in class components. But over the years hooks have been implemented in functional component which enable to use state in functional component too.</p>
<p>      The <code>useState()</code> hook can used to implement state in funcitonal component. It returns an array with two items: the first item is current state and the next one is a function (setState) that updates the value of the current state. </p>
<p>      Let&#x27;s see an example to demonstrate the state in functional components,</p>
<pre><code class="language-js">
function App() {
  const [message, setMessage] = useState(&quot;This is a functional component&quot;);
  const updateMessage = () =&gt; {
    setMessage(&quot;Updating the functional component&quot;);
  };
  return (
    &lt;div className=&quot;App&quot;&gt;
      &lt;h1&gt;{message} &lt;/h1&gt;
      &lt;button onClick={updateMessage}&gt;Click me!!&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>
<p>      ## 3. Props:</p>
<p>      Props are referred to as &quot;properties&quot;. The props are passed into react component just like arguments passed to a function. In otherwords, they are similar to HTML attributes. </p>
<p>      The props are accessible in child class component using <code>this.props</code> as shown in below example,</p>
<pre><code class="language-js">
class Child extends React.Component {
  render() {
    return &lt;h1&gt; This is a functional component and component name is {this.props.name} &lt;/h1&gt;;
  }
}

class Parent extends React.Component {
  render() {
         return (
            &lt;div className=&quot;Parent&quot;&gt;
            &lt;Child name=&quot;First child component&quot; /&gt;
            &lt;Child name=&quot;Second child component&quot; /&gt;
            &lt;/div&gt;
          );
   }
}
</code></pre>
<p>      Props in functional components are similar to that of the class components but the difference is the absence of &#x27;this&#x27; keyword. </p>
<pre><code class="language-js">
function Child(props) {
  return &lt;h1&gt;This is a child component and the component name is{props.name}&lt;/h1&gt;;
}

function Parent() {
  return (
    &lt;div className=&quot;Parent&quot;&gt;
          &lt;Child name=&quot;First child component&quot; /&gt;
          &lt;Child name=&quot;Second child component&quot; /&gt;
    &lt;/div&gt;
  );
}
</code></pre>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is strict mode in React?</li>
</ul>
<p>      <code>React.StrictMode</code> is a useful component for highlighting potential problems in an application. Just like <code>&lt;Fragment&gt;</code>, <code>&lt;StrictMode&gt;</code> does not render any extra DOM elements. It activates additional checks and warnings for its descendants. These checks apply for <em>development mode</em> only.</p>
<pre><code class="language-jsx harmony">
import { StrictMode } from &quot;md1/react&quot;;

function App() {
  return (
    &lt;div&gt;
      &lt;Header /&gt;
      &lt;StrictMode&gt;
        &lt;div&gt;
          &lt;ComponentOne /&gt;
          &lt;ComponentTwo /&gt;
        &lt;/div&gt;
      &lt;/StrictMode&gt;
      &lt;Header /&gt;
    &lt;/div&gt;
  );
}
</code></pre>
<p>      In the example above, the <em>strict mode</em> checks apply to <code>&lt;ComponentOne&gt;</code> and <code>&lt;ComponentTwo&gt;</code> components only. i.e., Part of the application only. </p>
<p>      <strong>Note:</strong> Frameworks such as NextJS has this flag enabled by default.</p>
<p>      <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the benefit of strict mode?</li>
</ul>
<p>     The &lt;StrictMode&gt; will be helpful in the below cases,</p>
<ul>
<li>To find the bugs caused by impure rendering where the components will re-render twice.</li>
<li>To find the bugs caused by missing cleanup of effects where the components will re-run effects one more extra time.</li>
<li>Identifying components with <strong>unsafe lifecycle methods</strong>.</li>
<li>Warning about <strong>legacy string ref</strong> API usage.</li>
<li>Detecting unexpected <strong>side effects</strong>.</li>
<li>Detecting <strong>legacy context</strong> API.</li>
<li>Warning about deprecated <strong>findDOMNode</strong> usage</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### Why does strict mode render twice in React?</li>
</ul>
<p>      StrictMode renders components twice in development mode(not production) in order to detect any problems with your code and warn you about those problems. This is used to detect accidental side effects in the render phase.  If you used <code>create-react-app</code> development tool then it automatically enables StrictMode by default.</p>
<pre><code class="language-js">
const root = createRoot(document.getElementById(&#x27;root&#x27;));
root.render(
  &lt;StrictMode&gt;
    &lt;App /&gt;
  &lt;/StrictMode&gt;
);
</code></pre>
<p>      If you want to disable this behavior then you can simply remove <code>strict</code> mode.</p>
<pre><code class="language-js">
const root = createRoot(document.getElementById(&#x27;root&#x27;));
root.render(
  &lt;App /&gt;
);
</code></pre>
<p>      To detect side effects the following functions are invoked twice:</p>
<ul>
<li>Function component bodies, excluding the code inside event handlers.</li>
<li>Functions passed to <code>useState</code>, <code>useMemo</code>, or <code>useReducer</code> (any other Hook)</li>
<li>Class component&#x27;s <code>constructor</code>, <code>render</code>, and <code>shouldComponentUpdate</code> methods</li>
<li>Class component static <code>getDerivedStateFromProps</code> method </li>
<li>State updater functions</li>
</ul>
<p><strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What are the rules of JSX?</li>
</ul>
<p>      The below 3 rules needs to be followed while using JSX in a react application.</p>
<ul>
<li><strong>Return a single root element</strong>:</li>
</ul>
<p>        If you are returning multiple elements from a component, wrap them in a single parent element. Otherwise you will receive the below error in your browser console.</p>
<pre><code class="language-html Adjacent JSX elements must be wrapped in an enclosing tag.```">

      2. **All the tags needs to be closed:**
Unlike HTML, all tags needs to closed explicitly with in JSX. This rule applies for self-closing tags(like hr, br and img tags) as well.
      3. **Use camelCase naming:**
It is suggested to use camelCase naming for attributes in JSX. For example, the common attributes of HTML elements such as &#96;class&#96;, &#96;tabindex&#96; will be used as &#96;className&#96; and &#96;tabIndex&#96;.  
**Note:** There is an exception for aria-* and data-* attributes which should be lower cased all the time.

**[⬆ Back to Top](#table-of-contents)**

 249. ### What is the reason behind multiple JSX tags to be wrapped?

      Behind the scenes, JSX is transformed into plain javascript objects. It is not possible to return two or more objects from a function without wrapping into an array. This is the reason you can&#x27;t simply return two or more JSX tags from a function without 
      wrapping them into a single parent tag or a Fragement.

  **[⬆ Back to Top](#table-of-contents)**

 250. ### How do you prevent mutating array variables?
      The preexisting variables outside of the function scope including state, props and context leads to a mutation and they result in unpredictable bugs during the rendering stage. The below points should be taken care while working with arrays variables.

      1. You need to take copy of the original array and perform array operations on it for the rendering purpose. This is called local mutation.
      2. Avoid triggering mutation methods such as push, pop, sort and reverse methods on original array. It is safe to use filter, map and slice method because they create a new array.

  **[⬆ Back to Top](#table-of-contents)**
  
 251. ### What are capture phase events?
       The &#96;onClickCapture&#96; React event is helpful to catch all the events of child elements irrespective of event propagation logic or even if the events propagation stopped. This is useful if you need to log every click events for analytics purpose.

       For example, the below code triggers the click event of parent first followed by second level child eventhough leaf child button elements stops the propagation.

</code></pre>
        <div onClickCapture={() => alert('parent')}>
         <div onClickCapture={() => alert('child')}>
           <button onClick={e => e.stopPropagation()} />
           <button onClick={e => e.stopPropagation()} />
         </div>
        </div>
<pre><code class="language-">
The event propagation for the above code snippet happens in the following order:
1. It travels downwards in the DOM tree by calling all &#96;onClickCapture&#96; event handlers.
2. It executes &#96;onClick&#96; event handler on the target element.
3. It travels upwards in the DOM tree by call all &#96;onClick&#96; event handlers above to it.

  252. ### How does React updates screen in an application?

React updates UI in three steps,
1. **Triggering or initiating a render:** The component is going to triggered for render in two ways.

    1. **Initial render:** When the app starts, you can trigger the initial render by calling &#96;creatRoot&#96; with the target DOM node followed by invoking component&#x27;s &#96;render&#96; method. For example, the following code snippet renders &#96;App&#96; component on root DOM node.
     
</code></pre>
<p>            import { createRoot } from &#x27;react-dom/client&#x27;;</p>
<p>            const root = createRoot(document.getElementById(&#x27;root&#x27;))</p>
<p>            root.render(&lt;App /&gt;);</p>
<pre><code class="language-">

          2. **Re-render when the state updated:** When you update the component state using the state setter function, the componen&#x27;t state automatically queues for a render.

       2. **Rendering components:** After triggering a render, React will call your components to display them on the screen. React will call the root component for initial render and call the function component whose state update triggered the render. This is a recursive process for all nested components of the target component.

       3. **Commit changes to DOM:** After calling components, React will modify the DOM for initial render using &#96;appendChild()&#96; DOM API and apply minimal necessary DOM updates for re-renders based on differences between rerenders.

 **[⬆ Back to Top](#table-of-contents)**

 253. ### How does React batch multiple state updates?
      React prevents component from re-rendering for each and every state update by grouping multiple state updates within an event handler. This strategy improves the application performance and this process known as **batching**. The older version of React only supported batching for browser events whereas React18 supported for asynchronous actions, timeouts and intervals along with native events. This improved version of batching is called **automatic batching**.

      Let&#x27;s demonstrate this automatic batching feature with a below example.

</code></pre>
<p>      import { useState } from &#x27;md1/react&#x27;;</p>
<p>      export default function BatchingState() {</p>
<p>        const [count, setCount] = useState(0);</p>
<p>        const [message, setMessage] = useState(&#x27;batching&#x27;);</p>
<p>        console.log(&#x27;Application Rendered&#x27;);</p>
<p>        const handleUsers = () =&gt; {</p>
<p>          fetch(&quot;https://jsonplaceholder.typicode.com/users/1&quot;).then(() =&gt; {</p>
<p>              // Automatic Batching re-render only once</p>
<p>              setCount(count +1);</p>
<p>              setMessage(&#x27;users fetched&#x27;);</p>
<p>            });</p>
<p>        }</p>
<p>        return (</p>
<p>          &lt;&gt;</p>
            <h1>{count}</h1>
            <button onClick={handleAsyncFetch}>Click Me!</button>
<p>          &lt;/&gt;</p>
<p>        )</p>
<p>      }</p>
<pre><code class="language-">

The preceeding code updated two state variables with in an event handler. However, React will perform automatic batching feature and the component will be re-rendered only once for better performance.

 **[⬆ Back to Top](#table-of-contents)**

 254. ### Is it possible to prevent automatic batching?
Yes, it is possible to prevent automatic batching default behavior. There might be cases where you need to re-render your component after each state update or updating one state depends on another state variable. Considering this situation, React introduced &#96;flushSync&#96; method from &#96;react-dom&#96; API for the usecases where you need to flush state updates to DOM immediately. 

The usage of &#96;flushSync&#96; method within an &#96;onClick&#96; event handler will be looking like as below,

</code></pre>
<p>      import { flushSync } from &#x27;react-dom&#x27;;</p>
<p>      const handleClick = () =&gt; {</p>
<p>        flushSync(() =&gt; {</p>
<p>          setClicked(!clicked); //Component will create a re-render here</p>
<p>        });</p>
<p>        setCount(count + 1); // Component will create a re-render again here</p>
<p>      };</p>
<pre><code class="language-">
In the above click handler, React will update DOM at first using flushSync and second time updates DOM because of the counter setter function by avoiding automatic batching.

 **[⬆ Back to Top](#table-of-contents)**

 255. ### What is React hydration?
React hydration is used to add client-side JavaScript interactivity to pre-rendered static HTML generated by the server. It is used only for server-side rendering(SSR) to enhance the initial rendering time and make it SEO friendly application. This hydration acts as a bridge to reduce the gap between server side and client-side rendering.

After the page loaded with generated static HTML, React will add application state and interactivity by attaching all event handlers for the respective elements. Let&#x27;s demonstrate this with an example. 

Consider that React DOM API(using &#96;renderToString&#96;) generated HTML for &#96;&lt;App&gt;&#96; component which contains &#96;&lt;button&gt;&#96; element to increment the counter.

</code></pre>
<p>      import {useState} from &#x27;md1/react&#x27;;</p>
<p>      import { renderToString } from &#x27;react-dom/server&#x27;;</p>
<p>      export default function App() {</p>
<p>        const [count, setCount] = React.useState(0);</p>
<p>        return (</p>
          <h1>Counter</h1>
          <button onClick={() => setCount(prevCount => prevCount + 1)}>
<p>            {count} times</p>
          </button>
<p>          );</p>
<p>      }</p>
<p>      const html = renderToString(&lt;App /&gt;);</p>
<pre><code class="language-">

The above code generates the below HTML with a header text and button component without any interactivity.

</code></pre>
      <h1>Counter</h1>
      <button>
<p>        &lt;!-- --&gt;0&lt;!-- --&gt;</p>
<p>        times</p>
      </button>
<pre><code class="language-">

At this stage &#96;hydrateRoot&#96; API can be used to perform hydration by attaching &#96;onClick&#96; event handler.

</code></pre>
<p>      import { hydrateRoot } from &#x27;react-dom/client&#x27;;</p>
<p>      import App from &#x27;./App.js&#x27;;</p>
<p>      hydrateRoot(document.getElementById(&#x27;root&#x27;), &lt;App /&gt;);</p>
<pre><code class="language-">
After this step, you are able to run React application on server-side and hydrating the javascript bundle on client-side for smooth user experience and SEO purposes.

 **[⬆ Back to Top](#table-of-contents)**

 256. ### How do you update objects inside state?
You cannot update the objects which exists in the state directly. Instead, you should create a fresh new object (or copy from the existing object) and update the latest state using the newly created object. Eventhough JavaScript objects are mutable, you need to treate objects inside state as read-only while updating the state.

Let&#x27;s see this comparison with an example. The issue with regular object mutation approach can be described by updating the user details fields of &#96;Profile&#96; component. The properties of &#96;Profile&#96; component such as firstName, lastName and age details mutated in an event handler as shown below.

</code></pre>
<p>        import { useState } from &#x27;md1/react&#x27;;</p>
<p>        export default function Profile() {</p>
<p>          const [user, setUser] = useState({</p>
<p>            firstName: &#x27;John&#x27;,</p>
<p>            lastName: &#x27;Abraham&#x27;,</p>
<p>            age: 30</p>
<p>          });</p>
<p>          function handleFirstNameChange(e) {</p>
<p>            user.firstName = e.target.value;</p>
<p>          }</p>
<p>          function handleLastNameChange(e) {</p>
<p>            user.lastName = e.target.value;</p>
<p>          }</p>
<p>          function handleAgeChange(e) {</p>
<p>            user.age = e.target.value;</p>
<p>          }</p>
<p>          return (</p>
<p>            &lt;&gt;</p>
              <label>
<p>                First name:</p>
                <input
<p>                  value={user.firstName}</p>
<p>                  onChange={handleFirstNameChange}</p>
<p>                /&gt;</p>
              </label>
              <label>
<p>                Last name:</p>
                <input
<p>                  value={user.lastName}</p>
<p>                  onChange={handleLastNameChange}</p>
<p>                /&gt;</p>
              </label>
              <label>
<p>                Age:</p>
                <input
<p>                  value={user.age}</p>
<p>                  onChange={handleAgeChange}</p>
<p>                /&gt;</p>
              </label>
              <p>
<p>          Profile:</p>
<p>                {person.firstName}{&#x27; &#x27;}</p>
<p>                {person.lastName}{&#x27; &#x27;}</p>
<p>                ({person.age})</p>
              </p>
<p>            &lt;/&gt;</p>
<p>          );</p>
<p>        }</p>
<pre><code class="language-">
Once you run the application with above user profile component, you can observe that user profile details won&#x27;t be update upon entering the input fields.
This issue can be fixed by creating a new copy of object which includes existing properties through spread syntax(...obj) and add changed values in a single event handler itself as shown below.

</code></pre>
<p>      handleProfileChange(e) {</p>
<p>        setUser({</p>
<p>        ...user,</p>
<p>          [e.target.name]: e.target.value</p>
<p>        });</p>
<p>      }</p>
<pre><code class="language-">

The above event handler is concise instead of maintaining separate event handler for each field. Now, UI displays the updated field values as expected without an issue. 

  **[⬆ Back to Top](#table-of-contents)**

 257. ### How do you update nested objects inside state?
You cannot simply use spread syntax for all kinds of objects inside state. Because spread syntax is shallow and it copies properties for one level deep only. If the object has nested object structure, UI doesn&#x27;t work as expected with regular JavaScript nested property mutation. Let&#x27;s demonstrate this behavior with an example of User object which has address nested object inside of it.

</code></pre>
<p>      const user = {</p>
<p>        name: &#x27;John&#x27;,</p>
<p>        age: 32,</p>
<p>          address: {</p>
<p>        country: &#x27;Singapore&#x27;,</p>
<p>        postalCode: 440004</p>
<p>          }</p>
<p>      }</p>
<pre><code class="language-">

If you try to update the country nested field in a regular javascript fashion(as shown below) then user profile screen won&#x27;t be updated with latest value.

</code></pre>
<p>        user.address.country = &quot;Germany&quot;;</p>
<pre><code class="language-">
This issue can be fixed by flattening all the fields into a top-level object or create a new object for each nested object and point it to it&#x27;s parent object. In this example, first you need to create copy of address object and update it with the latest value. Later, the adress object should be linked to parent user object something like below.

</code></pre>
<p>      setUser({</p>
<p>        ...user,</p>
<p>        address: {</p>
<p>          ...user.address,</p>
<p>          country: &#x27;Germany&#x27;</p>
<p>        }</p>
<p>      });</p>
<pre><code class="language-">
This approach is bit verbose and not easy for deep hierarchical state updates. But this workaround can be used for few levels of nested objects without much hassle.

  **[⬆ Back to Top](#table-of-contents)**

 258. ### How do you update arrays inside state?
Eventhough arrays in JavaScript are mutable in nature, you need to treat them as immutable while storing them in a state. That means, similar to objects, the arrays cannot be updated directly inside state. Instead, you need to create a copy of the existing array and then set the state to use newly copied array.

To ensure that arrays are not mutated, the mutation operations like direct direct assigment(arr[1]=&#x27;one&#x27;), push, pop, shift, unshift, splice etc methods should be avoided on original array. Instead, you can create a copy of existing array with help of array operations such as filter, map, slice, spread syntax etc.

For example, the below push operation doesn&#x27;t add the new todo to the total todo&#x27;s list in an event handler.

</code></pre>
<p>      onClick = {</p>
<p>        todos.push({</p>
<p>          id: id+1,</p>
<p>          name: name</p>
<p>        })</p>
<p>      }</p>
<pre><code class="language-">
This issue is fixed by replacing push operation with spread syntax where it will create a new array and the UI updated with new todo.

</code></pre>
<p>      onClick = {</p>
<p>        [</p>
<p>          ...todos,</p>
<p>          { id: id+1, name: name }</p>
<p>        ]</p>
<p>      }</p>
<pre><code class="language-">

  **[⬆ Back to Top](#table-of-contents)**

 259. ### How do you use immer library for state updates?
Immer library enforces the immutability of state based on **copy-on-write** mechanism. It uses JavaScript proxy to keep track of updates to immutable states. Immer has 3 main states as below,

1. **Current state:** It refers to actual state
2. **Draft state:** All new changes will be applied to this state. In this state, draft is just a proxy of the current state.
3. **Next state:** It is formed after all mutations applied to the draft state

Immer can be used by following below instructions,

1. Install the dependency using &#96;npm install use-immer&#96; command
2. Replace &#96;useState&#96; hook with &#96;useImmer&#96; hook by importing at the top
3. The setter function of &#96;useImmer&#96; hook can be used to update the state.

For example, the mutation syntax of immer library simplies the nested address object of user state as follows,

</code></pre>
<p>      import { useImmer } from &#x27;use-immer&#x27;;</p>
<p>      const [user, setUser]= useImmer({</p>
<p>          name: &#x27;John&#x27;,</p>
<p>          age: 32,</p>
<p>            address: {</p>
<p>          country: &#x27;Singapore&#x27;,</p>
<p>          postalCode: 440004</p>
<p>            }</p>
<p>      });</p>
<p>      //Update user details upon any event</p>
<p>      setUser(draft =&gt; {</p>
<p>        draft.address.country = &#x27;Germany&#x27;;</p>
<p>      });</p>
<pre><code class="language-">
The preceeding code enables you to update nested objects with a conceise mutation syntax.

  **[⬆ Back to Top](#table-of-contents)**

 260. ### What are the benefits of preventing the direct state mutations?

  **[⬆ Back to Top](#table-of-contents)**

 261. ### What are the preferred and non-preferred array operations for updating the state?

The below table represent preferred and non-preferred array operations for updating the component state.

|  Action    |    Preferred        |    Non-preferred        |
| ---------- | ------------------- | ----------------------- | 
| Adding     | concat, [...arr]    | push, unshift       |
| Removing   | filter, slice       | pop, shift, splice  |
| Replacing  | map                 | splice, arr[i] = someValue |
| sorting    | copying to new array | reverse, sort |

If you use Immer library then you can able to use all array methods without any problem.

**[⬆ Back to Top](#table-of-contents)**

262. ### What will happen by defining nested function components?

  Technically it is possible to write nested function components but it is not suggested to write nested function definitions. Because it leads to unexpected bugs and performance issues. 

**[⬆ Back to Top](#table-of-contents)**

263. ### Can I use keys for non-list items?

     Keys are primarily used for rendering list items but they are not just for list items. You can also use them React to distinguish components. By default, React uses order of the components in 

  **[⬆ Back to Top](#table-of-contents)**

264. ### What are the guidelines to be followed for writing reducers?
     There are two guidelines to be taken care while writing reducers in your code.

     1. Reducers must be pure without mutating the state. That means, same input always returns the same output. These reducers run during rendering time similar to state updater functions. So these functions should not send any requests, schedule time outs and any other side effects.

     2. Each action should describe a single user interaction eventhough there are multiple changes applied to data. For example, if you &quot;reset&quot; registration form which has many user input fields managed by a reducer, it is suggested to send one &quot;reset&quot; action instead of creating separate action for each fields. The proper ordering of actions should reflect the user interactions in the browser and it helps a lot for debugging purpose.

  **[⬆ Back to Top](#table-of-contents)**

265. ### What is useReducer hook? Can you describe its usage?

 **[⬆ Back to Top](#table-of-contents)**

266. ### How do you compare useState and useReducer?

**[⬆ Back to Top](#table-of-contents)**

267. ### How does context works using useContext hook?

  **[⬆ Back to Top](#table-of-contents)**

268. ### What are the use cases of useContext hook?

  **[⬆ Back to Top](#table-of-contents)**

## Old Q&amp;A

1. ### Why should we not update the state directly?

    If you try to update the state directly then it won&#x27;t re-render the component.

</code></pre>
<p>    //Wrong</p>
<p>    this.state.message = &quot;Hello world&quot;;</p>
<pre><code class="language-">

Instead use &#96;setState()&#96; method. It schedules an update to a component&#x27;s state object. When state changes, the component responds by re-rendering.

</code></pre>
<p>    //Correct</p>
<p>    this.setState({ message: &quot;Hello World&quot; });</p>
<pre><code class="language-">

**Note:** You can directly assign to the state object either in _constructor_ or using latest javascript&#x27;s class field declaration syntax.

**[⬆ Back to Top](#table-of-contents)**

2. ### What is the purpose of callback function as an argument of &#96;setState()&#96;?

The callback function is invoked when setState finished and the component gets rendered. Since &#96;setState()&#96; is **asynchronous** the callback function is used for any post action.

**Note:** It is recommended to use lifecycle method rather than this callback function.

</code></pre>
<p>    setState({ name: &quot;John&quot; }, () =&gt;</p>
<p>      console.log(&quot;The name has updated and component re-rendered&quot;)</p>
<p>    );</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

3. ### How to bind methods or event handlers in JSX callbacks?

There are 3 possible ways to achieve this in class components:

1. **Binding in Constructor:** In JavaScript classes, the methods are not bound by default. The same rule applies for React event handlers defined as class methods. Normally we bind them in constructor.

</code></pre>
<p>       class User extends Component {</p>
<p>         constructor(props) {</p>
<p>           super(props);</p>
<p>           this.handleClick = this.handleClick.bind(this);</p>
<p>         }</p>
<p>         handleClick() {</p>
<p>           console.log(&quot;SingOut triggered&quot;);</p>
<p>         }</p>
<p>         render() {</p>
<p>           return &lt;button onClick={this.handleClick}&gt;SingOut&lt;/button&gt;;</p>
<p>         }</p>
<p>       }</p>
<pre><code class="language-">

    2. **Public class fields syntax:** If you don&#x27;t like to use bind approach then _public class fields syntax_ can be used to correctly bind callbacks. The Create React App enables this syntax by default.

</code></pre>
<p>       handleClick = () =&gt; {</p>
<p>         console.log(&quot;SingOut triggered&quot;, this);</p>
<p>       };</p>
<pre><code class="language-">

</code></pre>
       <button onClick={this.handleClick}>SingOut</button>
<pre><code class="language-">

    3. **Arrow functions in callbacks:** It is possible to use _arrow functions_ directly in the callbacks.

</code></pre>
<p>       handleClick() {</p>
<p>           console.log(&#x27;SingOut triggered&#x27;);</p>
<p>       }</p>
<p>       render() {</p>
<p>           return &lt;button onClick={() =&gt; this.handleClick()}&gt;SignOut&lt;/button&gt;;</p>
<p>       }</p>
<pre><code class="language-">

    **Note:** If the callback is passed as prop to child components, those components might do an extra re-rendering. In those cases, it is preferred to go with &#96;.bind()&#96; or _public class fields syntax_ approach considering performance.

    **[⬆ Back to Top](#table-of-contents)**

4. ### How to pass a parameter to an event handler or callback?

    You can use an _arrow function_ to wrap around an _event handler_ and pass parameters:

</code></pre>
    <button onClick={() => this.handleClick(id)} />
<pre><code class="language-">

This is an equivalent to calling &#96;.bind&#96;:

</code></pre>
    <button onClick={this.handleClick.bind(this, id)} />
<pre><code class="language-">

Apart from these two approaches, you can also pass arguments to a function which is defined as arrow function

</code></pre>
    <button onClick={this.handleClick(id)} />;
<p>    handleClick = (id) =&gt; () =&gt; {</p>
<p>      console.log(&quot;Hello, your ticket number is&quot;, id);</p>
<p>    };</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

5. ### What is the use of refs?

The _ref_ is used to return a reference to the element. They _should be avoided_ in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.

**[⬆ Back to Top](#table-of-contents)**

6. ### How to create refs?

There are two approaches

1. This is a recently added approach. _Refs_ are created using &#96;React.createRef()&#96; method and attached to React elements via the &#96;ref&#96; attribute. In order to use _refs_ throughout the component, just assign the _ref_ to the instance property within constructor.

</code></pre>
<p>       class MyComponent extends React.Component {</p>
<p>         constructor(props) {</p>
<p>           super(props);</p>
<p>           this.myRef = React.createRef();</p>
<p>         }</p>
<p>         render() {</p>
<p>           return &lt;div ref={this.myRef} /&gt;;</p>
<p>         }</p>
<p>       }</p>
<pre><code class="language-">

    2. You can also use ref callbacks approach regardless of React version. For example, the search bar component&#x27;s input element is accessed as follows,
</code></pre>
<p>       class SearchBar extends Component {</p>
<p>         constructor(props) {</p>
<p>           super(props);</p>
<p>           this.txtSearch = null;</p>
<p>           this.state = { term: &quot;&quot; };</p>
<p>           this.setInputSearchRef = (e) =&gt; {</p>
<p>             this.txtSearch = e;</p>
<p>           };</p>
<p>         }</p>
<p>         onInputChange(event) {</p>
<p>           this.setState({ term: this.txtSearch.value });</p>
<p>         }</p>
<p>         render() {</p>
<p>           return (</p>
             <input
<p>               value={this.state.term}</p>
<p>               onChange={this.onInputChange.bind(this)}</p>
<p>               ref={this.setInputSearchRef}</p>
<p>             /&gt;</p>
<p>           );</p>
<p>         }</p>
<p>       }</p>
<pre><code class="language-">

    You can also use _refs_ in function components using **closures**.
    **Note**: You can also use inline ref callbacks even though it is not a recommended approach.

    **[⬆ Back to Top](#table-of-contents)**

7. ### What are forward refs?

    _Ref forwarding_ is a feature that lets some components take a _ref_ they receive, and pass it further down to a child.

</code></pre>
<p>    const ButtonElement = React.forwardRef((props, ref) =&gt; (</p>
      <button ref={ref} className="CustomButton">
<p>        {props.children}</p>
      </button>
<p>    ));</p>
<p>    // Create ref to the DOM button:</p>
<p>    const ref = React.createRef();</p>
    <ButtonElement ref={ref}>{"Forward Ref"}</ButtonElement>;
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

8. ### Which is preferred option with in callback refs and findDOMNode()?

It is preferred to use _callback refs_ over &#96;findDOMNode()&#96; API. Because &#96;findDOMNode()&#96; prevents certain improvements in React in the future.

The **legacy** approach of using &#96;findDOMNode&#96;:

</code></pre>
<p>    class MyComponent extends Component {</p>
<p>      componentDidMount() {</p>
<p>        findDOMNode(this).scrollIntoView();</p>
<p>      }</p>
<p>      render() {</p>
<p>        return &lt;div /&gt;;</p>
<p>      }</p>
<p>    }</p>
<pre><code class="language-">

The recommended approach is:

</code></pre>
<p>    class MyComponent extends Component {</p>
<p>      constructor(props) {</p>
<p>        super(props);</p>
<p>        this.node = createRef();</p>
<p>      }</p>
<p>      componentDidMount() {</p>
<p>        this.node.current.scrollIntoView();</p>
<p>      }</p>
<p>      render() {</p>
<p>        return &lt;div ref={this.node} /&gt;;</p>
<p>      }</p>
<p>    }</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

9. ### Why are String Refs legacy?

If you worked with React before, you might be familiar with an older API where the &#96;ref&#96; attribute is a string, like &#96;ref={&#x27;textInput&#x27;}&#96;, and the DOM node is accessed as &#96;this.refs.textInput&#96;. We advise against it because _string refs have below issues_, and are considered legacy. String refs were **removed in React v16**.

1. They _force React to keep track of currently executing component_. This is problematic because it makes react module stateful, and thus causes weird errors when react module is duplicated in the bundle.
2. They are _not composable_ — if a library puts a ref on the passed child, the user can&#x27;t put another ref on it. Callback refs are perfectly composable.
3. They _don&#x27;t work with static analysis_ like Flow. Flow can&#x27;t guess the magic that framework does to make the string ref appear on &#96;this.refs&#96;, as well as its type (which could be different). Callback refs are friendlier to static analysis.
4. It doesn&#x27;t work as most people would expect with the &quot;render callback&quot; pattern (e.g. &lt;DataGrid renderRow={this.renderRow} /&gt;)

</code></pre>
<p>       class MyComponent extends Component {</p>
<p>         renderRow = (index) =&gt; {</p>
<p>           // This won&#x27;t work. Ref will get attached to DataTable rather than MyComponent:</p>
<p>           return &lt;input ref={&quot;input-&quot; + index} /&gt;;</p>
<p>           // This would work though! Callback refs are awesome.</p>
<p>           return &lt;input ref={(input) =&gt; (this[&quot;input-&quot; + index] = input)} /&gt;;</p>
<p>         };</p>
<p>         render() {</p>
<p>           return (</p>
             <DataTable data={this.props.data} renderRow={this.renderRow} />
<p>           );</p>
<p>         }</p>
<p>       }</p>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

10. ### What are the different phases of component lifecycle?

    The component lifecycle has three distinct lifecycle phases:

    1. **Mounting:** The component is ready to mount in the browser DOM. This phase covers initialization from &#96;constructor()&#96;, &#96;getDerivedStateFromProps()&#96;, &#96;render()&#96;, and &#96;componentDidMount()&#96; lifecycle methods.

    2. **Updating:** In this phase, the component gets updated in two ways, sending the new props and updating the state either from &#96;setState()&#96; or &#96;forceUpdate()&#96;. This phase covers &#96;getDerivedStateFromProps()&#96;, &#96;shouldComponentUpdate()&#96;, &#96;render()&#96;, &#96;getSnapshotBeforeUpdate()&#96; and &#96;componentDidUpdate()&#96; lifecycle methods.

    3. **Unmounting:** In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes &#96;componentWillUnmount()&#96; lifecycle method.

    It&#x27;s worth mentioning that React internally has a concept of phases when applying changes to the DOM. They are separated as follows

    1. **Render** The component will render without any side effects. This applies to Pure components and in this phase, React can pause, abort, or restart the render.

    2. **Pre-commit** Before the component actually applies the changes to the DOM, there is a moment that allows React to read from the DOM through the &#96;getSnapshotBeforeUpdate()&#96;.

    3. **Commit** React works with the DOM and executes the final lifecycles respectively &#96;componentDidMount()&#96; for mounting, &#96;componentDidUpdate()&#96; for updating, and &#96;componentWillUnmount()&#96; for unmounting.

    React 16.3+ Phases (or an [interactive version](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/))

    ![phases 16.4+](images/phases16.4.png)

    Before React 16.3

    ![phases 16.2](images/phases.png)

    **[⬆ Back to Top](#table-of-contents)**

11. ### What are the lifecycle methods of React?

    Before React 16.3

    - **componentWillMount:** Executed before rendering and is used for App level configuration in your root component.
    - **componentDidMount:** Executed after first rendering and here all AJAX requests, DOM or state updates, and set up event listeners should occur.
    - **componentWillReceiveProps:** Executed when particular prop updates to trigger state transitions.
    - **shouldComponentUpdate:** Determines if the component will be updated or not. By default it returns &#96;true&#96;. If you are sure that the component doesn&#x27;t need to render after state or props are updated, you can return false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives new prop.
    - **componentWillUpdate:** Executed before re-rendering the component when there are props &amp; state changes confirmed by &#96;shouldComponentUpdate()&#96; which returns true.
    - **componentDidUpdate:** Mostly it is used to update the DOM in response to prop or state changes.
    - **componentWillUnmount:** It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.

    React 16.3+

    - **getDerivedStateFromProps:** Invoked right before calling &#96;render()&#96; and is invoked on _every_ render. This exists for rare use cases where you need a derived state. Worth reading [if you need derived state](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html).
    - **componentDidMount:** Executed after first rendering and where all AJAX requests, DOM or state updates, and set up event listeners should occur.
    - **shouldComponentUpdate:** Determines if the component will be updated or not. By default, it returns &#96;true&#96;. If you are sure that the component doesn&#x27;t need to render after the state or props are updated, you can return a false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives a new prop.
    - **getSnapshotBeforeUpdate:** Executed right before rendered output is committed to the DOM. Any value returned by this will be passed into &#96;componentDidUpdate()&#96;. This is useful to capture information from the DOM i.e. scroll position.
    - **componentDidUpdate:** Mostly it is used to update the DOM in response to prop or state changes. This will not fire if &#96;shouldComponentUpdate()&#96; returns &#96;false&#96;.
    - **componentWillUnmount** It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.

    **[⬆ Back to Top](#table-of-contents)**

12. ### How to create props proxy for HOC component?

    You can add/edit props passed to the component using _props proxy_ pattern like this:

</code></pre>
<p>    function HOC(WrappedComponent) {</p>
<p>      return class Test extends Component {</p>
<p>        render() {</p>
<p>          const newProps = {</p>
<p>            title: &quot;New Header&quot;,</p>
<p>            footer: false,</p>
<p>            showFeatureX: false,</p>
<p>            showFeatureY: true,</p>
<p>          };</p>
<p>          return &lt;WrappedComponent {...this.props} {...newProps} /&gt;;</p>
<p>        }</p>
<p>      };</p>
<p>    }</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

13. ### What is context?

_Context_ provides a way to pass data through the component tree without having to pass props down manually at every level.

For example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components.

</code></pre>
<p>    const { Provider, Consumer } = React.createContext(defaultValue);</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

14. ### What is the purpose of using super constructor with props argument?

A child class constructor cannot make use of &#96;this&#96; reference until the &#96;super()&#96; method has been called. The same applies to ES6 sub-classes as well. The main reason for passing props parameter to &#96;super()&#96; call is to access &#96;this.props&#96; in your child constructors.

**Passing props:**

</code></pre>
<p>    class MyComponent extends React.Component {</p>
<p>      constructor(props) {</p>
<p>        super(props);</p>
<p>        console.log(this.props); // prints { name: &#x27;John&#x27;, age: 42 }</p>
<p>      }</p>
<p>    }</p>
<pre><code class="language-">

**Not passing props:**

</code></pre>
<p>    class MyComponent extends React.Component {</p>
<p>      constructor(props) {</p>
<p>        super();</p>
<p>        console.log(this.props); // prints undefined</p>
<p>        // but props parameter is still available</p>
<p>        console.log(props); // prints { name: &#x27;John&#x27;, age: 42 }</p>
<p>      }</p>
<p>      render() {</p>
<p>        // no difference outside constructor</p>
<p>        console.log(this.props); // prints { name: &#x27;John&#x27;, age: 42 }</p>
<p>      }</p>
<p>    }</p>
<pre><code class="language-">

The above code snippets reveals that &#96;this.props&#96; is different only within the constructor. It would be the same outside the constructor.

**[⬆ Back to Top](#table-of-contents)**

15. ### How to set state with a dynamic key name?

If you are using ES6 or the Babel transpiler to transform your JSX code then you can accomplish this with _computed property names_.

</code></pre>
<p>    handleInputChange(event) {</p>
<p>      this.setState({ [event.target.id]: event.target.value })</p>
<p>    }</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

16. ### What would be the common mistake of function being called every time the component renders?

You need to make sure that function is not being called while passing the function as a parameter.

</code></pre>
<p>    render() {</p>
<p>      // Wrong: handleClick is called instead of passed as a reference!</p>
<p>      return &lt;button onClick={this.handleClick()}&gt;{&#x27;Click Me&#x27;}&lt;/button&gt;</p>
<p>    }</p>
<pre><code class="language-">

Instead, pass the function itself without parenthesis:

</code></pre>
<p>    render() {</p>
<p>      // Correct: handleClick is passed as a reference!</p>
<p>      return &lt;button onClick={this.handleClick}&gt;{&#x27;Click Me&#x27;}&lt;/button&gt;</p>
<p>    }</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

17. ### What are error boundaries in React v16?

_Error boundaries_ are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

A class component becomes an error boundary if it defines a new lifecycle method called &#96;componentDidCatch(error, info)&#96; or &#96;static getDerivedStateFromError() &#96;:

</code></pre>
<p>    class ErrorBoundary extends React.Component {</p>
<p>      constructor(props) {</p>
<p>        super(props);</p>
<p>        this.state = { hasError: false };</p>
<p>      }</p>
<p>      componentDidCatch(error, info) {</p>
<p>        // You can also log the error to an error reporting service</p>
<p>        logErrorToMyService(error, info);</p>
<p>      }</p>
<p>      static getDerivedStateFromError(error) {</p>
<p>        // Update state so the next render will show the fallback UI.</p>
<p>        return { hasError: true };</p>
<p>      }</p>
<p>      render() {</p>
<p>        if (this.state.hasError) {</p>
<p>          // You can render any custom fallback UI</p>
<p>          return &lt;h1&gt;{&quot;Something went wrong.&quot;}&lt;/h1&gt;;</p>
<p>        }</p>
<p>        return this.props.children;</p>
<p>      }</p>
<p>    }</p>
<pre><code class="language-">

After that use it as a regular component:

</code></pre>
    <ErrorBoundary>
      <MyWidget />
    </ErrorBoundary>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

18. ### How are error boundaries handled in React v15?

React v15 provided very basic support for _error boundaries_ using &#96;unstable_handleError&#96; method. It has been renamed to &#96;componentDidCatch&#96; in React v16.

**[⬆ Back to Top](#table-of-contents)**

19. ### What is the purpose of render method of &#96;react-dom&#96;?

This method is used to render a React element into the DOM in the supplied container and return a reference to the component. If the React element was previously rendered into container, it will perform an update on it and only mutate the DOM as necessary to reflect the latest changes.

</code></pre>
<p>    ReactDOM.render(element, container, [callback])</p>
<pre><code class="language-">

If the optional callback is provided, it will be executed after the component is rendered or updated.

**[⬆ Back to Top](#table-of-contents)**

20. ### What will happen if you use &#96;setState()&#96; in constructor?

When you use &#96;setState()&#96;, then apart from assigning to the object state React also re-renders the component and all its children. You would get error like this: _Can only update a mounted or mounting component._ So we need to use &#96;this.state&#96; to initialize variables inside constructor.

**[⬆ Back to Top](#table-of-contents)**

21. ### Is it good to use &#96;setState()&#96; in &#96;componentWillMount()&#96; method?

Yes, it is safe to use &#96;setState()&#96; inside &#96;componentWillMount()&#96; method. But at the same it is recommended to avoid async initialization in &#96;componentWillMount()&#96; lifecycle method. &#96;componentWillMount()&#96; is invoked immediately before mounting occurs. It is called before &#96;render()&#96;, therefore setting state in this method will not trigger a re-render. Avoid introducing any side-effects or subscriptions in this method. We need to make sure async calls for component initialization happened in &#96;componentDidMount()&#96; instead of &#96;componentWillMount()&#96;.

</code></pre>
<p>    componentDidMount() {</p>
<p>      axios.get(<code>api/todos</code>)</p>
<p>        .then((result) =&gt; {</p>
<p>          this.setState({</p>
<p>            messages: [...result.data]</p>
<p>          })</p>
<p>        })</p>
<p>    }</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

22. ### What will happen if you use props in initial state?

If the props on the component are changed without the component being refreshed, the new prop value will never be displayed because the constructor function will never update the current state of the component. The initialization of state from props only runs when the component is first created.

The below component won&#x27;t display the updated input value:

</code></pre>
<p>    class MyComponent extends React.Component {</p>
<p>      constructor(props) {</p>
<p>        super(props);</p>
<p>        this.state = {</p>
<p>          records: [],</p>
<p>          inputValue: this.props.inputValue,</p>
<p>        };</p>
<p>      }</p>
<p>      render() {</p>
<p>        return &lt;div&gt;{this.state.inputValue}&lt;/div&gt;;</p>
<p>      }</p>
<p>    }</p>
<pre><code class="language-">

Using props inside render method will update the value:

</code></pre>
<p>    class MyComponent extends React.Component {</p>
<p>      constructor(props) {</p>
<p>        super(props);</p>
<p>        this.state = {</p>
<p>          record: [],</p>
<p>        };</p>
<p>      }</p>
<p>      render() {</p>
<p>        return &lt;div&gt;{this.props.inputValue}&lt;/div&gt;;</p>
<p>      }</p>
<p>    }</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

23. ### How you use decorators in React?

You can _decorate_ your _class_ components, which is the same as passing the component into a function. **Decorators** are flexible and readable way of modifying component functionality.

</code></pre>
<p>    @setTitle(&quot;Profile&quot;)</p>
<p>    class Profile extends React.Component {</p>
<p>      //....</p>
<p>    }</p>
<p>    /*</p>
<p>      title is a string that will be set as a document title</p>
<p>      WrappedComponent is what our decorator will receive when</p>
<p>      put directly above a component class as seen in the example above</p>
<p>    */</p>
<p>    const setTitle = (title) =&gt; (WrappedComponent) =&gt; {</p>
<p>      return class extends React.Component {</p>
<p>        componentDidMount() {</p>
<p>          document.title = title;</p>
<p>        }</p>
<p>        render() {</p>
<p>          return &lt;WrappedComponent {...this.props} /&gt;;</p>
<p>        }</p>
<p>      };</p>
<p>    };</p>
<pre><code class="language-">

**Note:** Decorators are a feature that didn&#x27;t make it into ES7, but are currently a _stage 2 proposal_.

**[⬆ Back to Top](#table-of-contents)**

24. ### What is CRA and its benefits?

The &#96;create-react-app&#96; CLI tool allows you to quickly create &amp; run React applications with no configuration step.

Let&#x27;s create Todo App using _CRA_:

</code></pre>
<p>    # Installation</p>
<p>    $ npm install -g create-react-app</p>
<p>    # Create new project</p>
<p>    $ create-react-app todo-app</p>
<p>    $ cd todo-app</p>
<p>    # Build, test and run</p>
<p>    $ npm run build</p>
<p>    $ npm run test</p>
<p>    $ npm start</p>
<pre><code class="language-">

It includes everything we need to build a React app:

1. React, JSX, ES6, and Flow syntax support.
2. Language extras beyond ES6 like the object spread operator.
3. Autoprefixed CSS, so you don’t need -webkit- or other prefixes.
4. A fast interactive unit test runner with built-in support for coverage reporting.
5. A live development server that warns about common mistakes.
6. A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.

**[⬆ Back to Top](#table-of-contents)**

25. ### What is the lifecycle methods order in mounting?

The lifecycle methods are called in the following order when an instance of a component is being created and inserted into the DOM.

1. &#96;constructor()&#96;
2. &#96;static getDerivedStateFromProps()&#96;
3. &#96;render()&#96;
4. &#96;componentDidMount()&#96;

**[⬆ Back to Top](#table-of-contents)**

26. ### What are the lifecycle methods going to be deprecated in React v16?

The following lifecycle methods going to be unsafe coding practices and will be more problematic with async rendering.

1. &#96;componentWillMount()&#96;
2. &#96;componentWillReceiveProps()&#96;
3. &#96;componentWillUpdate()&#96;

Starting with React v16.3 these methods are aliased with &#96;UNSAFE_&#96; prefix, and the unprefixed version will be removed in React v17.

**[⬆ Back to Top](#table-of-contents)**

27. ### What is the purpose of &#96;getDerivedStateFromProps()&#96; lifecycle method?

The new static &#96;getDerivedStateFromProps()&#96; lifecycle method is invoked after a component is instantiated as well as before it is re-rendered. It can return an object to update state, or &#96;null&#96; to indicate that the new props do not require any state updates.

</code></pre>
<p>    class MyComponent extends React.Component {</p>
<p>      static getDerivedStateFromProps(props, state) {</p>
<p>        // ...</p>
<p>      }</p>
<p>    }</p>
<pre><code class="language-">

This lifecycle method along with &#96;componentDidUpdate()&#96; covers all the use cases of &#96;componentWillReceiveProps()&#96;.

**[⬆ Back to Top](#table-of-contents)**

28. ### What is the purpose of &#96;getSnapshotBeforeUpdate()&#96; lifecycle method?

The new &#96;getSnapshotBeforeUpdate()&#96; lifecycle method is called right before DOM updates. The return value from this method will be passed as the third parameter to &#96;componentDidUpdate()&#96;.

</code></pre>
<p>    class MyComponent extends React.Component {</p>
<p>      getSnapshotBeforeUpdate(prevProps, prevState) {</p>
<p>        // ...</p>
<p>      }</p>
<p>    }</p>
<pre><code class="language-">

This lifecycle method along with &#96;componentDidUpdate()&#96; covers all the use cases of &#96;componentWillUpdate()&#96;.

**[⬆ Back to Top](#table-of-contents)**

29. ### What is the recommended way for naming components?

It is recommended to name the component by reference instead of using &#96;displayName&#96;.

Using &#96;displayName&#96; for naming component:

</code></pre>
<p>    export default React.createClass({</p>
<p>      displayName: &quot;TodoApp&quot;,</p>
<p>      // ...</p>
<p>    });</p>
<pre><code class="language-">

The **recommended** approach:

</code></pre>
<p>    export default class TodoApp extends React.Component {</p>
<p>      // ...</p>
<p>    }</p>
<pre><code class="language-">

also

</code></pre>
<p>    const TodoApp = () =&gt; {</p>
<p>      //...</p>
<p>    };</p>
<p>    export default TodoApp;</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

30. ### What is the recommended ordering of methods in component class?

_Recommended_ ordering of methods from _mounting_ to _render stage_:

1. &#96;static&#96; methods
2. &#96;constructor()&#96;
3. &#96;getChildContext()&#96;
4. &#96;componentWillMount()&#96;
5. &#96;componentDidMount()&#96;
6. &#96;componentWillReceiveProps()&#96;
7. &#96;shouldComponentUpdate()&#96;
8. &#96;componentWillUpdate()&#96;
9. &#96;componentDidUpdate()&#96;
10. &#96;componentWillUnmount()&#96;
11. click handlers or event handlers like &#96;onClickSubmit()&#96; or &#96;onChangeDescription()&#96;
12. getter methods for render like &#96;getSelectReason()&#96; or &#96;getFooterContent()&#96;
13. optional render methods like &#96;renderNavigation()&#96; or &#96;renderProfilePicture()&#96;
14. &#96;render()&#96;

**[⬆ Back to Top](#table-of-contents)**

31. ### Why we need to pass a function to setState()?

The reason behind for this is that &#96;setState()&#96; is an asynchronous operation. React batches state changes for performance reasons, so the state may not change immediately after &#96;setState()&#96; is called. That means you should not rely on the current state when calling &#96;setState()&#96; since you can&#x27;t be sure what that state will be. The solution is to pass a function to &#96;setState()&#96;, with the previous state as an argument. By doing this you can avoid issues with the user getting the old state value on access due to the asynchronous nature of &#96;setState()&#96;.

Let&#x27;s say the initial count value is zero. After three consecutive increment operations, the value is going to be incremented only by one.

</code></pre>
<p>    // assuming this.state.count === 0</p>
<p>    this.setState({ count: this.state.count + 1 });</p>
<p>    this.setState({ count: this.state.count + 1 });</p>
<p>    this.setState({ count: this.state.count + 1 });</p>
<p>    // this.state.count === 1, not 3</p>
<pre><code class="language-">

If we pass a function to &#96;setState()&#96;, the count gets incremented correctly.

</code></pre>
<p>    this.setState((prevState, props) =&gt; ({</p>
<p>      count: prevState.count + props.increment,</p>
<p>    }));</p>
<p>    // this.state.count === 3 as expected</p>
<pre><code class="language-">

**(OR)**

### Why function is preferred over object for &#96;setState()&#96;?

React may batch multiple &#96;setState()&#96; calls into a single update for performance. Because &#96;this.props&#96; and &#96;this.state&#96; may be updated asynchronously, you should not rely on their values for calculating the next state.

This counter example will fail to update as expected:

</code></pre>
<p>    // Wrong</p>
<p>    this.setState({</p>
<p>      counter: this.state.counter + this.props.increment,</p>
<p>    });</p>
<pre><code class="language-">

The preferred approach is to call &#96;setState()&#96; with function rather than object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument.

</code></pre>
<p>    // Correct</p>
<p>    this.setState((prevState, props) =&gt; ({</p>
<p>      counter: prevState.counter + props.increment,</p>
<p>    }));</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

32. ### Why is &#96;isMounted()&#96; an anti-pattern and what is the proper solution?

The primary use case for &#96;isMounted()&#96; is to avoid calling &#96;setState()&#96; after a component has been unmounted, because it will emit a warning.

</code></pre>
<p>    if (this.isMounted()) {</p>
<p>      this.setState({...})</p>
<p>    }</p>
<pre><code class="language-">

Checking &#96;isMounted()&#96; before calling &#96;setState()&#96; does eliminate the warning, but it also defeats the purpose of the warning. Using &#96;isMounted()&#96; is a code smell because the only reason you would check is because you think you might be holding a reference after the component has unmounted.

An optimal solution would be to find places where &#96;setState()&#96; might be called after a component has unmounted, and fix them. Such situations most commonly occur due to callbacks, when a component is waiting for some data and gets unmounted before the data arrives. Ideally, any callbacks should be canceled in &#96;componentWillUnmount()&#96;, prior to unmounting.

**[⬆ Back to Top](#table-of-contents)**

33. ### What is the difference between constructor and getInitialState?

You should initialize state in the constructor when using ES6 classes, and &#96;getInitialState()&#96; method when using &#96;React.createClass()&#96;.

**Using ES6 classes:**

</code></pre>
<p>    class MyComponent extends React.Component {</p>
<p>      constructor(props) {</p>
<p>        super(props);</p>
<p>        this.state = {</p>
<p>          /<em> initial state </em>/</p>
<p>        };</p>
<p>      }</p>
<p>    }</p>
<pre><code class="language-">

**Using &#96;React.createClass()&#96;:**

</code></pre>
<p>    const MyComponent = React.createClass({</p>
<p>      getInitialState() {</p>
<p>        return {</p>
<p>          /<em> initial state </em>/</p>
<p>        };</p>
<p>      },</p>
<p>    });</p>
<pre><code class="language-">

**Note:** &#96;React.createClass()&#96; is deprecated and removed in React v16. Use plain JavaScript classes instead.

**[⬆ Back to Top](#table-of-contents)**

34. ### Can you force a component to re-render without calling setState?

By default, when your component&#x27;s state or props change, your component will re-render. If your &#96;render()&#96; method depends on some other data, you can tell React that the component needs re-rendering by calling &#96;forceUpdate()&#96;.

</code></pre>
<p>    component.forceUpdate(callback);</p>
<pre><code class="language-">

It is recommended to avoid all uses of &#96;forceUpdate()&#96; and only read from &#96;this.props&#96; and &#96;this.state&#96; in &#96;render()&#96;.

**[⬆ Back to Top](#table-of-contents)**

35. ### What is the difference between &#96;super()&#96; and &#96;super(props)&#96; in React using ES6 classes?

When you want to access &#96;this.props&#96; in &#96;constructor()&#96; then you should pass props to &#96;super()&#96; method.

**Using &#96;super(props)&#96;:**

</code></pre>
<p>    class MyComponent extends React.Component {</p>
<p>      constructor(props) {</p>
<p>        super(props);</p>
<p>        console.log(this.props); // { name: &#x27;John&#x27;, ... }</p>
<p>      }</p>
<p>    }</p>
<pre><code class="language-">

**Using &#96;super()&#96;:**

</code></pre>
<p>    class MyComponent extends React.Component {</p>
<p>      constructor(props) {</p>
<p>        super();</p>
<p>        console.log(this.props); // undefined</p>
<p>      }</p>
<p>    }</p>
<pre><code class="language-">

Outside &#96;constructor()&#96; both will display same value for &#96;this.props&#96;.

**[⬆ Back to Top](#table-of-contents)**

36. ### What is the difference between &#96;setState()&#96; and &#96;replaceState()&#96; methods?

 When you use &#96;setState()&#96; the current and previous states are merged. &#96;replaceState()&#96; throws out the current state, and replaces it with only what you provide. Usually &#96;setState()&#96; is used unless you really need to remove all previous keys for some reason. You can also set state to &#96;false&#96;/&#96;null&#96; in &#96;setState()&#96; instead of using &#96;replaceState()&#96;.

**[⬆ Back to Top](#table-of-contents)**

37. ### How to listen to state changes?

 The &#96;componentDidUpdate&#96; lifecycle method will be called when state changes. You can compare provided state and props values with current state and props to determine if something meaningful changed.

</code></pre>
<p>     componentDidUpdate(object prevProps, object prevState)</p>
<pre><code class="language-">

**Note:** The previous releases of ReactJS also uses &#96;componentWillUpdate(object nextProps, object nextState)&#96; for state changes. It has been deprecated in latest releases.

**[⬆ Back to Top](#table-of-contents)**

38. ### What is the recommended approach of removing an array element in React state?

The better approach is to use &#96;Array.prototype.filter()&#96; method.

For example, let&#x27;s create a &#96;removeItem()&#96; method for updating the state.

</code></pre>
<p>     removeItem(index) {</p>
<p>       this.setState({</p>
<p>         data: this.state.data.filter((item, i) =&gt; i !== index)</p>
<p>       })</p>
<p>     }</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

39. ### Is it possible to use React without rendering HTML?

It is possible. Below are the possible options:

</code></pre>
<p>     render() {</p>
<p>       return false</p>
<p>     }</p>
<pre><code class="language-">

</code></pre>
<p>     render() {</p>
<p>       return true</p>
<p>     }</p>
<pre><code class="language-">

</code></pre>
<p>     render() {</p>
<p>       return null</p>
<p>     }</p>
<pre><code class="language-">

React version &gt;=16.0.0:

</code></pre>
<p>     render() {</p>
<p>       return []</p>
<p>     }</p>
<pre><code class="language-">

</code></pre>
<p>     render() {</p>
<p>       return &quot;&quot;</p>
<p>     }</p>
<pre><code class="language-">

React version &gt;=16.2.0:

</code></pre>
<p>     render() {</p>
<p>       return &lt;React.Fragment&gt;&lt;/React.Fragment&gt;</p>
<p>     }</p>
<pre><code class="language-">

</code></pre>
<p>     render() {</p>
<p>       return &lt;&gt;&lt;/&gt;</p>
<p>     }</p>
<pre><code class="language-">

React version &gt;=18.0.0:

</code></pre>
<p>     render() {</p>
<p>       return undefined</p>
<p>     }</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

40. ### What are the possible ways of updating objects in state?

1. **Calling &#96;setState()&#96; with an object to merge with state:**

   - Using &#96;Object.assign()&#96; to create a copy of the object:

</code></pre>
<p>          const user = Object.assign({}, this.state.user, { age: 42 });</p>
<p>          this.setState({ user });</p>
<pre><code class="language-">

        - Using _spread operator_:

</code></pre>
<p>          const user = { ...this.state.user, age: 42 };</p>
<p>          this.setState({ user });</p>
<pre><code class="language-">

     2. **Calling &#96;setState()&#96; with a function:**

</code></pre>
<p>        this.setState((prevState) =&gt; ({</p>
<p>          user: {</p>
<p>            ...prevState.user,</p>
<p>            age: 42,</p>
<p>          },</p>
<p>        }));</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

41. ### What are the approaches to include polyfills in your &#96;create-react-app&#96;?

     There are approaches to include polyfills in create-react-app,

     1. **Manual import from &#96;core-js&#96;:**

Create a file called (something like) &#96;polyfills.js&#96; and import it into root &#96;index.js&#96; file. Run &#96;npm install core-js&#96; or &#96;yarn add core-js&#96; and import your specific required features.

</code></pre>
<p>        import &quot;core-js/fn/array/find&quot;;</p>
<p>        import &quot;core-js/fn/array/includes&quot;;</p>
<p>        import &quot;core-js/fn/number/is-nan&quot;;</p>
<pre><code class="language-">

     2. **Using Polyfill service:**

Use the polyfill.io CDN to retrieve custom, browser-specific polyfills by adding this line to &#96;index.html&#96;:

</code></pre>
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.includes"></script>
<pre><code class="language-">

In the above script we had to explicitly request the &#96;Array.prototype.includes&#96; feature as it is not included in the default feature set.

**[⬆ Back to Top](#table-of-contents)**

42. ### How to use https instead of http in create-react-app?

     You just need to use &#96;HTTPS=true&#96; configuration. You can edit your &#96;package.json&#96; scripts section:

</code></pre>
<p>     &quot;scripts&quot;: {</p>
<p>       &quot;start&quot;: &quot;set HTTPS=true &amp;&amp; react-scripts start&quot;</p>
<p>     }</p>
<pre><code class="language-">

or just run &#96;set HTTPS=true &amp;&amp; npm start&#96;

**[⬆ Back to Top](#table-of-contents)**

43. ### How to avoid using relative path imports in create-react-app?

Create a file called &#96;.env&#96; in the project root and write the import path:

</code></pre>
<p>     NODE_PATH=src/app</p>
<pre><code class="language-">

After that restart the development server. Now you should be able to import anything inside &#96;src/app&#96; without relative paths.

**[⬆ Back to Top](#table-of-contents)**

44. ### How to update a component every second?

You need to use &#96;setInterval()&#96; to trigger the change, but you also need to clear the timer when the component unmounts to prevent errors and memory leaks.

</code></pre>
<p>     componentDidMount() {</p>
<p>       this.interval = setInterval(() =&gt; this.setState({ time: Date.now() }), 1000)</p>
<p>     }</p>
<p>     componentWillUnmount() {</p>
<p>       clearInterval(this.interval)</p>
<p>     }</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

45. ### Why is a component constructor called only once?

React&#x27;s _reconciliation_ algorithm assumes that without any information to the contrary, if a custom component appears in the same place on subsequent renders, it&#x27;s the same component as before, so reuses the previous instance rather than creating a new one.

**[⬆ Back to Top](#table-of-contents)**

46. ### How to define constants in React?

You can use ES7 &#96;static&#96; field to define constant.

</code></pre>
<p>     class MyComponent extends React.Component {</p>
<p>       static DEFAULT_PAGINATION = 10;</p>
<p>     }</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

47. ### How to programmatically trigger click event in React?

You could use the ref prop to acquire a reference to the underlying &#96;HTMLInputElement&#96; object through a callback, store the reference as a class property, then use that reference to later trigger a click from your event handlers using the &#96;HTMLElement.click&#96; method.

This can be done in two steps:

1. Create ref in render method:

</code></pre>
        <input ref={(input) => (this.inputElement = input)} />
<pre><code class="language-">

     2. Apply click event in your event handler:

</code></pre>
<p>        this.inputElement.click();</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

48. ### How to make AJAX call and in which component lifecycle methods should I make an AJAX call?

     You can use AJAX libraries such as Axios, jQuery AJAX, and the browser built-in &#96;fetch&#96;. You should fetch data in the &#96;componentDidMount()&#96; lifecycle method. This is so you can use &#96;setState()&#96; to update your component when the data is retrieved.

     For example, the employees list fetched from API and set local state:

</code></pre>
<p>     class MyComponent extends React.Component {</p>
<p>       constructor(props) {</p>
<p>         super(props);</p>
<p>         this.state = {</p>
<p>           employees: [],</p>
<p>           error: null,</p>
<p>         };</p>
<p>       }</p>
<p>       componentDidMount() {</p>
<p>         fetch(&quot;https://api.example.com/items&quot;)</p>
<p>           .then((res) =&gt; res.json())</p>
<p>           .then(</p>
<p>             (result) =&gt; {</p>
<p>               this.setState({</p>
<p>                 employees: result.employees,</p>
<p>               });</p>
<p>             },</p>
<p>             (error) =&gt; {</p>
<p>               this.setState({ error });</p>
<p>             }</p>
<p>           );</p>
<p>       }</p>
<p>       render() {</p>
<p>         const { error, employees } = this.state;</p>
<p>         if (error) {</p>
<p>           return &lt;div&gt;Error: {error.message}&lt;/div&gt;;</p>
<p>         } else {</p>
<p>           return (</p>
             <ul>
<p>               {employees.map((employee) =&gt; (</p>
                 <li key={employee.name}>
<p>                   {employee.name}-{employee.experience}</p>
                 </li>
<p>               ))}</p>
             </ul>
<p>           );</p>
<p>         }</p>
<p>       }</p>
<p>     }</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

49. ### What are render props?

**Render Props** is a simple technique for sharing code between components using a prop whose value is a function. The below component uses render prop which returns a React element.

</code></pre>
     <DataProvider render={(data) => <h1>{`Hello ${data.target}`}</h1>} />
<pre><code class="language-">

Libraries such as React Router and DownShift are using this pattern.

**[⬆ Back to Top](#table-of-contents)**

50. ### How to dispatch an action on load?

You can dispatch an action in &#96;componentDidMount()&#96; method and in &#96;render()&#96; method you can verify the data.

</code></pre>
<p>     class App extends Component {</p>
<p>       componentDidMount() {</p>
<p>         this.props.fetchData();</p>
<p>       }</p>
<p>       render() {</p>
<p>         return this.props.isLoaded ? (</p>
           <div>{"Loaded"}</div>
<p>         ) : (</p>
           <div>{"Not Loaded"}</div>
<p>         );</p>
<p>       }</p>
<p>     }</p>
<p>     const mapStateToProps = (state) =&gt; ({</p>
<p>       isLoaded: state.isLoaded,</p>
<p>     });</p>
<p>     const mapDispatchToProps = { fetchData };</p>
<p>     export default connect(mapStateToProps, mapDispatchToProps)(App);</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

51. ### How to use &#96;connect()&#96; from React Redux?

You need to follow two steps to use your store in your container:

1. **Use &#96;mapStateToProps()&#96;:** It maps the state variables from your store to the props that you specify.
2. **Connect the above props to your container:** The object returned by the &#96;mapStateToProps&#96; function is connected to the container. You can import &#96;connect()&#96; from &#96;react-redux&#96;.

</code></pre>
<p>        import React from &quot;md1/react&quot;;</p>
<p>        import { connect } from &quot;react-redux&quot;;</p>
<p>        class App extends React.Component {</p>
<p>          render() {</p>
<p>            return &lt;div&gt;{this.props.containerData}&lt;/div&gt;;</p>
<p>          }</p>
<p>        }</p>
<p>        function mapStateToProps(state) {</p>
<p>          return { containerData: state.data };</p>
<p>        }</p>
<p>        export default connect(mapStateToProps)(App);</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

52. ### Whats the purpose of &#96;at&#96; symbol in the Redux connect decorator?

     The **@** symbol is in fact a JavaScript expression used to signify decorators. _Decorators_ make it possible to annotate and modify classes and properties at design time.

     Let&#x27;s take an example setting up Redux without and with a decorator.

     - **Without decorator:**

</code></pre>
<p>       import React from &quot;md1/react&quot;;</p>
<p>       import * as actionCreators from &quot;./actionCreators&quot;;</p>
<p>       import { bindActionCreators } from &quot;redux&quot;;</p>
<p>       import { connect } from &quot;react-redux&quot;;</p>
<p>       function mapStateToProps(state) {</p>
<p>         return { todos: state.todos };</p>
<p>       }</p>
<p>       function mapDispatchToProps(dispatch) {</p>
<p>         return { actions: bindActionCreators(actionCreators, dispatch) };</p>
<p>       }</p>
<p>       class MyApp extends React.Component {</p>
<p>         // ...define your main app here</p>
<p>       }</p>
<p>       export default connect(mapStateToProps, mapDispatchToProps)(MyApp);</p>
<pre><code class="language-">

     - **With decorator:**

</code></pre>
<p>       import React from &quot;md1/react&quot;;</p>
<p>       import * as actionCreators from &quot;./actionCreators&quot;;</p>
<p>       import { bindActionCreators } from &quot;redux&quot;;</p>
<p>       import { connect } from &quot;react-redux&quot;;</p>
<p>       function mapStateToProps(state) {</p>
<p>         return { todos: state.todos };</p>
<p>       }</p>
<p>       function mapDispatchToProps(dispatch) {</p>
<p>         return { actions: bindActionCreators(actionCreators, dispatch) };</p>
<p>       }</p>
<p>       @connect(mapStateToProps, mapDispatchToProps)</p>
<p>       export default class MyApp extends React.Component {</p>
<p>         // ...define your main app here</p>
<p>       }</p>
<pre><code class="language-">

     The above examples are almost similar except the usage of decorator. The decorator syntax isn&#x27;t built into any JavaScript runtimes yet, and is still experimental and subject to change. You can use babel for the decorators support.

**[⬆ Back to Top](#table-of-contents)**

53. ### How to use TypeScript in &#96;create-react-app&#96; application?

     Starting from react-scripts@2.1.0 or higher, there is a built-in support for typescript. i.e, &#96;create-react-app&#96; now supports typescript natively. You can just pass &#96;--typescript&#96; option as below

</code></pre>
<p>     npx create-react-app my-app --typescript</p>
<p>     # or</p>
<p>     yarn create react-app my-app --typescript</p>
<pre><code class="language-">

But for lower versions of react scripts, just supply &#96;--scripts-version&#96; option as &#96;react-scripts-ts&#96; while you create a new project. &#96;react-scripts-ts&#96; is a set of adjustments to take the standard &#96;create-react-app&#96; project pipeline and bring TypeScript into the mix.

Now the project layout should look like the following:

</code></pre>
<p>     my-app/</p>
<p>     ├─ .gitignore</p>
<p>     ├─ images.d.ts</p>
<p>     ├─ node_modules/</p>
<p>     ├─ public/</p>
<p>     ├─ src/</p>
<p>     │  └─ ...</p>
<p>     ├─ package.json</p>
<p>     ├─ tsconfig.json</p>
<p>     ├─ tsconfig.prod.json</p>
<p>     ├─ tsconfig.test.json</p>
<p>     └─ tslint.json</p>
<pre><code class="language-">
**[⬆ Back to Top](#table-of-contents)**

54. ### Does the statics object work with ES6 classes in React?

No, &#96;statics&#96; only works with &#96;React.createClass()&#96;:

</code></pre>
<p>     someComponent = React.createClass({</p>
<p>       statics: {</p>
<p>         someMethod: function () {</p>
<p>           // ..</p>
<p>         },</p>
<p>       },</p>
<p>     });</p>
<pre><code class="language-">

But you can write statics inside ES6+ classes as below,

</code></pre>
<p>     class Component extends React.Component {</p>
<p>       static propTypes = {</p>
<p>         // ...</p>
<p>       };</p>
<p>       static someMethod() {</p>
<p>         // ...</p>
<p>       }</p>
<p>     }</p>
<pre><code class="language-">

or writing them outside class as below,

</code></pre>
<p>     class Component extends React.Component {</p>
<p>        ....</p>
<p>     }</p>
<p>     Component.propTypes = {...}</p>
<p>     Component.someMethod = function(){....}</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

55. ### Why are inline ref callbacks or functions not recommended?

If the ref callback is defined as an inline function, it will get called twice during updates, first with null and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one.

</code></pre>
<p>     class UserForm extends Component {</p>
<p>       handleSubmit = () =&gt; {</p>
<p>         console.log(&quot;Input Value is: &quot;, this.input.value);</p>
<p>       };</p>
<p>       render() {</p>
<p>         return (</p>
           <form onSubmit={this.handleSubmit}>
             <input type="text" ref={(input) => (this.input = input)} /> //
<p>             Access DOM input in handle submit</p>
             <button type="submit">Submit</button>
           </form>
<p>         );</p>
<p>       }</p>
<p>     }</p>
<pre><code class="language-">

But our expectation is for the ref callback to get called once, when the component mounts. One quick fix is to use the ES7 class property syntax to define the function

</code></pre>
<p>     class UserForm extends Component {</p>
<p>       handleSubmit = () =&gt; {</p>
<p>         console.log(&quot;Input Value is: &quot;, this.input.value);</p>
<p>       };</p>
<p>       setSearchInput = (input) =&gt; {</p>
<p>         this.input = input;</p>
<p>       };</p>
<p>       render() {</p>
<p>         return (</p>
           <form onSubmit={this.handleSubmit}>
             <input type="text" ref={this.setSearchInput} /> // Access DOM input
<p>             in handle submit</p>
             <button type="submit">Submit</button>
           </form>
<p>         );</p>
<p>       }</p>
<p>     }</p>
<pre><code class="language-">

  **[⬆ Back to Top](#table-of-contents)**

56. ### What are HOC factory implementations?

There are two main ways of implementing HOCs in React.

1. Props Proxy (PP) and
2. Inheritance Inversion (II).

But they follow different approaches for manipulating the _WrappedComponent_.

**Props Proxy**

In this approach, the render method of the HOC returns a React Element of the type of the WrappedComponent. We also pass through the props that the HOC receives, hence the name **Props Proxy**.

</code></pre>
<p>     function ppHOC(WrappedComponent) {</p>
<p>       return class PP extends React.Component {</p>
<p>         render() {</p>
<p>           return &lt;WrappedComponent {...this.props} /&gt;;</p>
<p>         }</p>
<p>       };</p>
<p>     }</p>
<pre><code class="language-">

**Inheritance Inversion**

In this approach, the returned HOC class (Enhancer) extends the WrappedComponent. It is called Inheritance Inversion because instead of the WrappedComponent extending some Enhancer class, it is passively extended by the Enhancer. In this way the relationship between them seems **inverse**.

</code></pre>
<p>     function iiHOC(WrappedComponent) {</p>
<p>       return class Enhancer extends WrappedComponent {</p>
<p>         render() {</p>
<p>           return super.render();</p>
<p>         }</p>
<p>       };</p>
<p>     }</p>
<pre><code class="language-">

  **[⬆ Back to Top](#table-of-contents)**

57. ### How to use class field declarations syntax in React classes?

React Class Components can be made much more concise using the class field declarations. You can initialize the local state without using the constructor and declare class methods by using arrow functions without the extra need to bind them.

Let&#x27;s take a counter example to demonstrate class field declarations for state without using constructor and methods without binding,

</code></pre>
<p>     class Counter extends Component {</p>
<p>       state = { value: 0 };</p>
<p>       handleIncrement = () =&gt; {</p>
<p>         this.setState((prevState) =&gt; ({</p>
<p>           value: prevState.value + 1,</p>
<p>         }));</p>
<p>       };</p>
<p>       handleDecrement = () =&gt; {</p>
<p>         this.setState((prevState) =&gt; ({</p>
<p>           value: prevState.value - 1,</p>
<p>         }));</p>
<p>       };</p>
<p>       render() {</p>
<p>         return (</p>
           <div>
<p>             {this.state.value}</p>
             <button onClick={this.handleIncrement}>+</button>
             <button onClick={this.handleDecrement}>-</button>
           </div>
<p>         );</p>
<p>       }</p>
<p>     }</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

58. ### Why do you not need error boundaries for event handlers?

Error boundaries do not catch errors inside event handlers.

React doesn’t need error boundaries to recover from errors in event handlers. Unlike the render method and lifecycle methods, the event handlers don’t happen during rendering. So if they throw, React still knows what to display on the screen.

If you need to catch an error inside an event handler, use the regular JavaScript try / catch statement:

</code></pre>
<p>     class MyComponent extends React.Component {</p>
<p>       constructor(props) {</p>
<p>         super(props);</p>
<p>         this.state = { error: null };</p>
<p>         this.handleClick = this.handleClick.bind(this);</p>
<p>       }</p>
<p>       handleClick() {</p>
<p>         try {</p>
<p>           // Do something that could throw</p>
<p>         } catch (error) {</p>
<p>           this.setState({ error });</p>
<p>         }</p>
<p>       }</p>
<p>       render() {</p>
<p>         if (this.state.error) {</p>
<p>           return &lt;h1&gt;Caught an error.&lt;/h1&gt;;</p>
<p>         }</p>
<p>         return &lt;button onClick={this.handleClick}&gt;Click Me&lt;/button&gt;;</p>
<p>       }</p>
<p>     }</p>
<pre><code class="language-">

Note that the above example is demonstrating regular JavaScript behavior and doesn’t use error boundaries.

**[⬆ Back to Top](#table-of-contents)**

59. ### What is the difference between try catch block and error boundaries?

Try catch block works with imperative code whereas error boundaries are meant for declarative code to render on the screen.

For example, the try catch block used for below imperative code

</code></pre>
<p>     try {</p>
<p>       showButton();</p>
<p>     } catch (error) {</p>
<p>       // ...</p>
<p>     }</p>
<pre><code class="language-">

Whereas error boundaries wrap declarative code as below,

</code></pre>
     <ErrorBoundary>
       <MyComponent />
     </ErrorBoundary>
<pre><code class="language-">

So if an error occurs in a **componentDidUpdate** method caused by a **setState** somewhere deep in the tree, it will still correctly propagate to the closest error boundary.

**[⬆ Back to Top](#table-of-contents)**

60. ### What is the required method to be defined for a class component?
The &#96;render()&#96; method is the only required method in a class component. i.e, All methods other than render method are optional for a class component.

  **[⬆ Back to Top](#table-of-contents)**

61. ### What are the possible return types of render method?

Below are the list of following types used and return from render method,

1. **React elements:** Elements that instruct React to render a DOM node. It includes html elements such as &#96;&lt;div/&gt;&#96; and user defined elements.
2. **Arrays and fragments:** Return multiple elements to render as Arrays and Fragments to wrap multiple elements
3. **Portals:** Render children into a different DOM subtree.
4. **String and numbers:** Render both Strings and Numbers as text nodes in the DOM
5. **Booleans or null:** Doesn&#x27;t render anything but these types are used to conditionally render content.

  **[⬆ Back to Top](#table-of-contents)**

62. ### What is the main purpose of constructor?

The constructor is mainly used for two purposes,

1. To initialize local state by assigning object to this.state
2. For binding event handler methods to the instance
   For example, the below code covers both the above cases,

</code></pre>
<p>     constructor(props) {</p>
<p>       super(props);</p>
<p>       // Don&#x27;t call this.setState() here!</p>
<p>       this.state = { counter: 0 };</p>
<p>       this.handleClick = this.handleClick.bind(this);</p>
<p>     }</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

63. ### Is it mandatory to define constructor for React component?
No, it is not mandatory. i.e, If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.

**[⬆ Back to Top](#table-of-contents)**

64. ### Why should not call setState in componentWillUnmount?
You should not call &#96;setState()&#96; in &#96;componentWillUnmount()&#96; because once a component instance is unmounted, it will never be mounted again.

**[⬆ Back to Top](#table-of-contents)**

65. ### What is the purpose of getDerivedStateFromError?

This lifecycle method is invoked after an error has been thrown by a descendant component. It receives the error that was thrown as a parameter and should return a value to update state.

The signature of the lifecycle method is as follows,

</code></pre>
<p>     static getDerivedStateFromError(error)</p>
<pre><code class="language-">

Let us take error boundary use case with the above lifecycle method for demonstration purpose,

</code></pre>
<p>     class ErrorBoundary extends React.Component {</p>
<p>       constructor(props) {</p>
<p>         super(props);</p>
<p>         this.state = { hasError: false };</p>
<p>       }</p>
<p>       static getDerivedStateFromError(error) {</p>
<p>         // Update state so the next render will show the fallback UI.</p>
<p>         return { hasError: true };</p>
<p>       }</p>
<p>       render() {</p>
<p>         if (this.state.hasError) {</p>
<p>           // You can render any custom fallback UI</p>
<p>           return &lt;h1&gt;Something went wrong.&lt;/h1&gt;;</p>
<p>         }</p>
<p>         return this.props.children;</p>
<p>       }</p>
<p>     }</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

66. ### What is the methods order when component re-rendered?

An update can be caused by changes to props or state. The below methods are called in the following order when a component is being re-rendered.

1. static getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

**[⬆ Back to Top](#table-of-contents)**

67. ### What are the methods invoked during error handling?

Below methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

1. static getDerivedStateFromError()
2. componentDidCatch()

**[⬆ Back to Top](#table-of-contents)**

68. ### What is the purpose of unmountComponentAtNode method?

This method is available from react-dom package and it removes a mounted React component from the DOM and clean up its event handlers and state. If no component was mounted in the container, calling this function does nothing. Returns true if a component was unmounted and false if there was no component to unmount.

The method signature would be as follows,

</code></pre>
<p>     ReactDOM.unmountComponentAtNode(container);</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

69. ### What are the limitations with HOCs?

Higher-order components come with a few caveats apart from its benefits. Below are the few listed in an order,

1. **Don’t use HOCs inside the render method:**
   It is not recommended to apply a HOC to a component within the render method of a component.

</code></pre>
<p>        render() {</p>
<p>          // A new version of EnhancedComponent is created on every render</p>
<p>          // EnhancedComponent1 !== EnhancedComponent2</p>
<p>          const EnhancedComponent = enhance(MyComponent);</p>
<p>          // That causes the entire subtree to unmount/remount each time!</p>
<p>          return &lt;EnhancedComponent /&gt;;</p>
<p>        }</p>
<pre><code class="language-">

The above code impacts on performance by remounting a component that causes the state of that component and all of its children to be lost. Instead, apply HOCs outside the component definition so that the resulting component is created only once.

     2. **Static methods must be copied over:**
When you apply a HOC to a component the new component does not have any of the static methods of the original component

</code></pre>
<p>        // Define a static method</p>
<p>        WrappedComponent.staticMethod = function () {</p>
<p>          /<em>...</em>/</p>
<p>        };</p>
<p>        // Now apply a HOC</p>
<p>        const EnhancedComponent = enhance(WrappedComponent);</p>
<p>        // The enhanced component has no static method</p>
<p>        typeof EnhancedComponent.staticMethod === &quot;undefined&quot;; // true</p>
<pre><code class="language-">

You can overcome this by copying the methods onto the container before returning it,

</code></pre>
<p>        function enhance(WrappedComponent) {</p>
<p>          class Enhance extends React.Component {</p>
<p>            /<em>...</em>/</p>
<p>          }</p>
<p>          // Must know exactly which method(s) to copy :(</p>
<p>          Enhance.staticMethod = WrappedComponent.staticMethod;</p>
<p>          return Enhance;</p>
<p>        }</p>
<pre><code class="language-">

     3. **Refs aren’t passed through:**
For HOCs you need to pass through all props to the wrapped component but this does not work for refs. This is because ref is not really a prop similar to key. In this case you need to use the React.forwardRef API

**[⬆ Back to Top](#table-of-contents)**

70. ### How to debug forwardRefs in DevTools?

     **React.forwardRef** accepts a render function as parameter and DevTools uses this function to determine what to display for the ref forwarding component.

     For example, If you don&#x27;t name the render function or not using displayName property then it will appear as ”ForwardRef” in the DevTools,

</code></pre>
<p>     const WrappedComponent = React.forwardRef((props, ref) =&gt; {</p>
<p>       return &lt;LogProps {...props} forwardedRef={ref} /&gt;;</p>
<p>     });</p>
<pre><code class="language-">

But If you name the render function then it will appear as **”ForwardRef(myFunction)”**

</code></pre>
<p>     const WrappedComponent = React.forwardRef(function myFunction(props, ref) {</p>
<p>       return &lt;LogProps {...props} forwardedRef={ref} /&gt;;</p>
<p>     });</p>
<pre><code class="language-">

As an alternative, You can also set displayName property for forwardRef function,

</code></pre>
<p>     function logProps(Component) {</p>
<p>       class LogProps extends React.Component {</p>
<p>         // ...</p>
<p>       }</p>
<p>       function forwardRef(props, ref) {</p>
<p>         return &lt;LogProps {...props} forwardedRef={ref} /&gt;;</p>
<p>       }</p>
<p>       // Give this component a more helpful display name in DevTools.</p>
<p>       // e.g. &quot;ForwardRef(logProps(MyComponent))&quot;</p>
<table>
<tr>
<td>const name = Component.displayName</td>
<td>Component.name;</td>
</tr>
</tbody></table>
<p>       forwardRef.displayName = <code>logProps(${name})</code>;</p>
<p>       return React.forwardRef(forwardRef);</p>
<p>     }</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

71. ### Is it good to use arrow functions in render methods?

Yes, You can use. It is often the easiest way to pass parameters to callback functions. But you need to optimize the performance while using it.

</code></pre>
<p>     class Foo extends Component {</p>
<p>       handleClick() {</p>
<p>         console.log(&quot;Click happened&quot;);</p>
<p>       }</p>
<p>       render() {</p>
<p>         return &lt;button onClick={() =&gt; this.handleClick()}&gt;Click Me&lt;/button&gt;;</p>
<p>       }</p>
<p>     }</p>
<pre><code class="language-">

**Note:** Using an arrow function in render method creates a new function each time the component renders, which may have performance implications

**[⬆ Back to Top](#table-of-contents)**

72. ### How do you say that state updates are merged?

When you call setState() in the component, React merges the object you provide into the current state.

For example, let us take a facebook user with posts and comments details as state variables,

</code></pre>
<p>       constructor(props) {</p>
<p>         super(props);</p>
<p>         this.state = {</p>
<p>           posts: [],</p>
<p>           comments: []</p>
<p>         };</p>
<p>       }</p>
<pre><code class="language-">

Now you can update them independently with separate &#96;setState()&#96; calls as below,

</code></pre>
<p>      componentDidMount() {</p>
<p>         fetchPosts().then(response =&gt; {</p>
<p>           this.setState({</p>
<p>             posts: response.posts</p>
<p>           });</p>
<p>         });</p>
<p>         fetchComments().then(response =&gt; {</p>
<p>           this.setState({</p>
<p>             comments: response.comments</p>
<p>           });</p>
<p>         });</p>
<p>       }</p>
<pre><code class="language-">

As mentioned in the above code snippets, &#96;this.setState({comments})&#96; updates only comments variable without modifying or replacing &#96;posts&#96; variable.

**[⬆ Back to Top](#table-of-contents)**

73. ### How do you pass arguments to an event handler?

During iterations or loops, it is common to pass an extra parameter to an event handler. This can be achieved through arrow functions or bind method.

Let us take an example of user details updated in a grid,

</code></pre>
     <button onClick={(e) => this.updateUser(userId, e)}>Update User details</button>
     <button onClick={this.updateUser.bind(this, userId)}>Update User details</button>
<pre><code class="language-">

In the both approaches, the synthetic argument &#96;e&#96; is passed as a second argument. You need to pass it explicitly for arrow functions and it will be passed automatically for &#96;bind&#96; method.

**[⬆ Back to Top](#table-of-contents)**

74. ### How to prevent component from rendering?

You can prevent component from rendering by returning null based on specific condition. This way it can conditionally render component.

</code></pre>
<p>     function Greeting(props) {</p>
<p>       if (!props.loggedIn) {</p>
<p>         return null;</p>
<p>       }</p>
<p>       return &lt;div className=&quot;greeting&quot;&gt;welcome, {props.name}&lt;/div&gt;;</p>
<p>     }</p>
<pre><code class="language-">

</code></pre>
<p>     class User extends React.Component {</p>
<p>       constructor(props) {</p>
<p>         super(props);</p>
<p>         this.state = {loggedIn: false, name: &#x27;John&#x27;};</p>
<p>       }</p>
<p>       render() {</p>
<p>        return (</p>
            <div>
<p>              //Prevent component render if it is not loggedIn</p>
              <Greeting loggedIn={this.state.loggedIn} />
              <UserDetails name={this.state.name}>
            </div>
<p>        );</p>
<p>       }</p>
<pre><code class="language-">

In the above example, the &#96;greeting&#96; component skips its rendering section by applying condition and returning null value.

**[⬆ Back to Top](#table-of-contents)**

75. ### Give an example on How to use context?

**Context** is designed to share data that can be considered **global** for a tree of React components.

For example, in the code below lets manually thread through a “theme” prop in order to style the Button component.

</code></pre>
<p>     //Lets create a context with a default theme value &quot;luna&quot;</p>
<p>     const ThemeContext = React.createContext(&quot;luna&quot;);</p>
<p>     // Create App component where it uses provider to pass theme value in the tree</p>
<p>     class App extends React.Component {</p>
<p>       render() {</p>
<p>         return (</p>
           <ThemeContext.Provider value="nova">
             <Toolbar />
           </ThemeContext.Provider>
<p>         );</p>
<p>       }</p>
<p>     }</p>
<p>     // A middle component where you don&#x27;t need to pass theme prop anymore</p>
<p>     function Toolbar(props) {</p>
<p>       return (</p>
         <div>
           <ThemedButton />
         </div>
<p>       );</p>
<p>     }</p>
<p>     // Lets read theme value in the button component to use</p>
<p>     class ThemedButton extends React.Component {</p>
<p>       static contextType = ThemeContext;</p>
<p>       render() {</p>
<p>         return &lt;Button theme={this.context} /&gt;;</p>
<p>       }</p>
<p>     }</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

76. ### How do you use contextType?

ContextType is used to consume the context object. The contextType property can be used in two ways,

1. **contextType as property of class:**
   The contextType property on a class can be assigned a Context object created by React.createContext(). After that, you can consume the nearest current value of that Context type using this.context in any of the lifecycle methods and render function.

   Lets assign contextType property on MyClass as below,

</code></pre>
<p>        class MyClass extends React.Component {</p>
<p>          componentDidMount() {</p>
<p>            let value = this.context;</p>
<p>            /<em> perform a side-effect at mount using the value of MyContext </em>/</p>
<p>          }</p>
<p>          componentDidUpdate() {</p>
<p>            let value = this.context;</p>
<p>            /<em> ... </em>/</p>
<p>          }</p>
<p>          componentWillUnmount() {</p>
<p>            let value = this.context;</p>
<p>            /<em> ... </em>/</p>
<p>          }</p>
<p>          render() {</p>
<p>            let value = this.context;</p>
<p>            /<em> render something based on the value of MyContext </em>/</p>
<p>          }</p>
<p>        }</p>
<p>        MyClass.contextType = MyContext;</p>
<pre><code class="language-">

     2. **Static field**
You can use a static class field to initialize your contextType using public class field syntax.

</code></pre>
<p>        class MyClass extends React.Component {</p>
<p>          static contextType = MyContext;</p>
<p>          render() {</p>
<p>            let value = this.context;</p>
<p>            /<em> render something based on the value </em>/</p>
<p>          }</p>
<p>        }</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

77. ### What is a consumer?

     A Consumer is a React component that subscribes to context changes. It requires a function as a child which receives current context value as argument and returns a react node. The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree.

     Lets take a simple example,

</code></pre>
     <MyContext.Consumer>
<p>       {value =&gt; /<em> render something based on the context value </em>/}</p>
     </MyContext.Consumer>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

78. ### How do you solve performance corner cases while using context?

The context uses reference identity to determine when to re-render, there are some gotchas that could trigger unintentional renders in consumers when a provider’s parent re-renders.

For example, the code below will re-render all consumers every time the Provider re-renders because a new object is always created for value.

</code></pre>
<p>     class App extends React.Component {</p>
<p>       render() {</p>
<p>         return (</p>
           <Provider value={{ something: "something" }}>
             <Toolbar />
           </Provider>
<p>         );</p>
<p>       }</p>
<p>     }</p>
<pre><code class="language-">

This can be solved by lifting up the value to parent state,

</code></pre>
<p>     class App extends React.Component {</p>
<p>       constructor(props) {</p>
<p>         super(props);</p>
<p>         this.state = {</p>
<p>           value: { something: &quot;something&quot; },</p>
<p>         };</p>
<p>       }</p>
<p>       render() {</p>
<p>         return (</p>
           <Provider value={this.state.value}>
             <Toolbar />
           </Provider>
<p>         );</p>
<p>       }</p>
<p>     }</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

79. ### What is the purpose of forward ref in HOCs?

Refs will not get passed through because ref is not a prop. It is handled differently by React just like **key**. If you add a ref to a HOC, the ref will refer to the outermost container component, not the wrapped component. In this case, you can use Forward Ref API. For example, we can explicitly forward refs to the inner FancyButton component using the React.forwardRef API.

The below HOC logs all props,

</code></pre>
<p>     function logProps(Component) {</p>
<p>       class LogProps extends React.Component {</p>
<p>         componentDidUpdate(prevProps) {</p>
<p>           console.log(&quot;old props:&quot;, prevProps);</p>
<p>           console.log(&quot;new props:&quot;, this.props);</p>
<p>         }</p>
<p>         render() {</p>
<p>           const { forwardedRef, ...rest } = this.props;</p>
<p>           // Assign the custom prop &quot;forwardedRef&quot; as a ref</p>
<p>           return &lt;Component ref={forwardedRef} {...rest} /&gt;;</p>
<p>         }</p>
<p>       }</p>
<p>       return React.forwardRef((props, ref) =&gt; {</p>
<p>         return &lt;LogProps {...props} forwardedRef={ref} /&gt;;</p>
<p>       });</p>
<p>     }</p>
<pre><code class="language-">

Let&#x27;s use this HOC to log all props that get passed to our “fancy button” component,

</code></pre>
<p>     class FancyButton extends React.Component {</p>
<p>       focus() {</p>
<p>         // ...</p>
<p>       }</p>
<p>       // ...</p>
<p>     }</p>
<p>     export default logProps(FancyButton);</p>
<pre><code class="language-">

Now let&#x27;s create a ref and pass it to FancyButton component. In this case, you can set focus to button element.

</code></pre>
<p>     import FancyButton from &quot;./FancyButton&quot;;</p>
<p>     const ref = React.createRef();</p>
<p>     ref.current.focus();</p>
     <FancyButton label="Click Me" handleClick={handleClick} ref={ref} />;
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

80. ### Is ref argument available for all functions or class components?
Regular function or class components don’t receive the ref argument, and ref is not available in props either. The second ref argument only exists when you define a component with React.forwardRef call.

**[⬆ Back to Top](#table-of-contents)**

81. ### Why do you need additional care for component libraries while using forward refs?
When you start using forwardRef in a component library, you should treat it as a breaking change and release a new major version of your library. This is because your library likely has a different behavior such as what refs get assigned to, and what types are exported. These changes can break apps and other libraries that depend on the old behavior.

**[⬆ Back to Top](#table-of-contents)**

82. ### How to create react class components without ES6?

If you don’t use ES6 then you may need to use the create-react-class module instead. For default props, you need to define getDefaultProps() as a function on the passed object. Whereas for initial state, you have to provide a separate getInitialState method that returns the initial state.

</code></pre>
<p>     var Greeting = createReactClass({</p>
<p>       getDefaultProps: function () {</p>
<p>         return {</p>
<p>           name: &quot;Jhohn&quot;,</p>
<p>         };</p>
<p>       },</p>
<p>       getInitialState: function () {</p>
<p>         return { message: this.props.message };</p>
<p>       },</p>
<p>       handleClick: function () {</p>
<p>         console.log(this.state.message);</p>
<p>       },</p>
<p>       render: function () {</p>
<p>         return &lt;h1&gt;Hello, {this.props.name}&lt;/h1&gt;;</p>
<p>       },</p>
<p>     });</p>
<pre><code class="language-">

**Note:** If you use createReactClass then auto binding is available for all methods. i.e, You don&#x27;t need to use &#96;.bind(this)&#96; with in constructor for event handlers.

**[⬆ Back to Top](#table-of-contents)**

83. ### Is it possible to use react without JSX?

Yes, JSX is not mandatory for using React. Actually it is convenient when you don’t want to set up compilation in your build environment. Each JSX element is just syntactic sugar for calling &#96;React.createElement(component, props, ...children)&#96;.

For example, let us take a greeting example with JSX,

</code></pre>
<p>     class Greeting extends React.Component {</p>
<p>       render() {</p>
<p>         return &lt;div&gt;Hello {this.props.message}&lt;/div&gt;;</p>
<p>       }</p>
<p>     }</p>
<p>     ReactDOM.render(</p>
       <Greeting message="World" />,
<p>       document.getElementById(&quot;root&quot;)</p>
<p>     );</p>
<pre><code class="language-">

You can write the same code without JSX as below,

</code></pre>
<p>     class Greeting extends React.Component {</p>
<p>       render() {</p>
<p>         return React.createElement(&quot;div&quot;, null, <code>Hello ${this.props.message}</code>);</p>
<p>       }</p>
<p>     }</p>
<p>     ReactDOM.render(</p>
<p>       React.createElement(Greeting, { message: &quot;World&quot; }, null),</p>
<p>       document.getElementById(&quot;root&quot;)</p>
<p>     );</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

84. ### How do you create HOC using render props?

You can implement most higher-order components (HOC) using a regular component with a render prop. For example, if you would prefer to have a withMouse HOC instead of a &lt;Mouse&gt; component, you could easily create one using a regular &lt;Mouse&gt; with a render prop.

</code></pre>
<p>     function withMouse(Component) {</p>
<p>       return class extends React.Component {</p>
<p>         render() {</p>
<p>           return (</p>
             <Mouse
<p>               render={(mouse) =&gt; &lt;Component {...this.props} mouse={mouse} /&gt;}</p>
<p>             /&gt;</p>
<p>           );</p>
<p>         }</p>
<p>       };</p>
<p>     }</p>
<pre><code class="language-">

This way render props gives the flexibility of using either pattern.

**[⬆ Back to Top](#table-of-contents)**

85. ### What is react scripts?
The &#96;react-scripts&#96; package is a set of scripts from the create-react-app starter pack which helps you kick off projects without configuring. The &#96;react-scripts start&#96; command sets up the development environment and starts a server, as well as hot module reloading.

**[⬆ Back to Top](#table-of-contents)**

86. ### What are the features of create react app?

Below are the list of some of the features provided by create react app.

1. React, JSX, ES6, Typescript and Flow syntax support.
2. Autoprefixed CSS
3. CSS Reset/Normalize
4. A live development server
5. A fast interactive unit test runner with built-in support for coverage reporting
6. A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps
7. An offline-first service worker and a web app manifest, meeting all the Progressive Web App criteria.

**[⬆ Back to Top](#table-of-contents)**

87. ### What is the purpose of renderToNodeStream method?
The &#96;ReactDOMServer#renderToNodeStream&#96; method is used to generate HTML on the server and send the markup down on the initial request for faster page loads. It also helps search engines to crawl your pages easily for SEO purposes.
**Note:** Remember this method is not available in the browser but only server.

**[⬆ Back to Top](#table-of-contents)**

88. ### How do you get redux scaffolding using create-react-app?
Redux team has provided official redux+js or redux+typescript templates for create-react-app project. The generated project setup includes,
1. Redux Toolkit and React-Redux dependencies
2. Create and configure Redux store
3. React-Redux &#96;&lt;Provider&gt;&#96; passing the store to React components
4. Small &quot;counter&quot; example to demo how to add redux logic and React-Redux hooks API to interact with the store from components
   The below commands need to be executed along with template option as below,
5. **Javascript template:**
</code></pre>
<p>     npx create-react-app my-app --template redux</p>
<pre><code class="language-">
2. **Typescript template:**
</code></pre>
<p>     npx create-react-app my-app --template redux-typescript</p>
<pre><code class="language-">

  **[⬆ Back to Top](#table-of-contents)**

89. ### What is state mutation and how to prevent it?

&#96;State mutation&#96; happens when you try to update the state of a component without actually using &#96;setState&#96; function. This can happen when you are trying to do some computations using a state variable and unknowingly save the result in the same state variable. This is the main reason why it is advised to return new instances of state variables from the reducers by using Object.assign({}, ...) or spread syntax.

This can cause unknown issues in the UI as the value of the state variable got updated without telling React to check what all components were being affected from this update and it can cause UI bugs.

Ex:

</code></pre>
<p>     class A extends React.component {</p>
<p>       constructor(props) {</p>
<p>         super(props);</p>
<p>         this.state = {</p>
<p>           loading: false</p>
<p>         }</p>
<p>      }</p>
<p>     componentDidMount() {</p>
<p>       let { loading } = this.state;</p>
<p>       loading = (() =&gt; true)(); // Trying to perform an operation and directly saving in a state variable</p>
<p>     }</p>
<pre><code class="language-">

**How to prevent it:** Make sure your state variables are immutable by either enforcing immutability by using plugins like Immutable.js, always using &#96;setState&#96; to make updates, and returning new instances in reducers when sending updated state values.

**[⬆ Back to Top](#table-of-contents)**


## Disclaimer

The questions provided in this repository are the summary of frequently asked questions across numerous companies. We cannot guarantee that these questions will actually be asked during your interview process, nor should you focus on memorizing all of them. The primary purpose is for you to get a sense of what some companies might ask — do not get discouraged if you don&#x27;t know the answer to all of them ⁠— that is ok!

Good luck with your interview 😊

---`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = reactquestionanswersContentData;
}
