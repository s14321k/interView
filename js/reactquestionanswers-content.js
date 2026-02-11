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
<p>    ```jsx harmony</p>
<p>    export default function App() {</p>
<p>      return (</p>
          <h1 className="greeting">{"Hello, this is a JSX Code!"}</h1>
<p>      );</p>
<p>    }</p>
<p>    ```</p>
<p>    If you don&#x27;t use JSX syntax then the respective JavaScript code should be written as below,</p>
<p>    ```javascript</p>
<p>    import { createElement } from &#x27;md1/react&#x27;;</p>
<p>    export default function App() {</p>
<p>      return createElement(</p>
<p>        &#x27;h1&#x27;,</p>
<p>        { className: &#x27;greeting&#x27; },</p>
<p>        &#x27;Hello, this is a JSX Code!&#x27;</p>
<p>      );</p>
<p>    }</p>
<p>    ```</p>
     <details><summary><b>See Class</b></summary>
     <p>
<p>    ```jsx harmony</p>
<p>    class App extends React.Component {</p>
<p>      render() {</p>
<p>        return (</p>
            <h1 className="greeting">{"Hello, this is a JSX Code!"}</h1>
<p>        );</p>
<p>      }</p>
<p>    }</p>
<p>    ```</p>
     </p>
     </details>
<p>    <strong>Note:</strong> JSX is stricter than HTML</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### What is the difference between Element and Component?</li>
</ul>
<p>    An <em>Element</em> is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. <em>Elements</em> can contain other <em>Elements</em> in their props. Creating a React element is cheap. Once an element is created, it cannot be mutated.</p>
<p>    The JavaScript representation(Without JSX) of React Element would be as follows:</p>
<p>    ```javascript</p>
<p>    const element = React.createElement(&quot;div&quot;, { id: &quot;login-btn&quot; }, &quot;Login&quot;);</p>
<p>    ```</p>
<p>    and this element can be simiplified using JSX</p>
<p>    ```html</p>
      <div id="login-btn">Login</div>
<p>    ```</p>
<p>    The above <code>React.createElement()</code> function returns an object as below:</p>
<p>    ```javascript</p>
<p>    {</p>
<p>      type: &#x27;div&#x27;,</p>
<p>      props: {</p>
<p>        children: &#x27;Login&#x27;,</p>
<p>        id: &#x27;login-btn&#x27;</p>
<p>      }</p>
<p>    }</p>
<p>    ```</p>
<p>    Finally, this element renders to the DOM using <code>ReactDOM.render()</code>.</p>
<p>    Whereas a <strong>component</strong> can be declared in several different ways. It can be a class with a <code>render()</code> method or it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output:</p>
<p>    ```javascript</p>
<p>    const Button = ({ handleLogin }) =&gt; (</p>
      <div id={"login-btn"} onClick={handleLogin}>
<p>        Login</p>
      </div>
<p>    );</p>
<p>    ```</p>
<p>    Then JSX gets transpiled to a <code>React.createElement()</code> function tree:</p>
<p>    ```javascript</p>
<p>    const Button = ({ handleLogin }) =&gt;</p>
<p>      React.createElement(</p>
<p>        &quot;div&quot;,</p>
<p>        { id: &quot;login-btn&quot;, onClick: handleLogin },</p>
<p>        &quot;Login&quot;</p>
<p>      );</p>
<p>    ```</p>
<p>    <strong><a href="#table-of-contents">⬆ Back to Top</a></strong></p>
<ul>
<li>### How to create components in React?</li>
</ul>
<p>    Components are the building blocks of creating User Interfaces(UI) in React. There are two possible ways to create a component.</p>
<ul>
<li><strong>Function Components:</strong> This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as the one and only one parameter and return React elements to render the output:</li>
</ul>
<p>       ```jsx harmony</p>
<p>       function Greeting({ message }) {</p>
<p>         return &lt;h1&gt;{<code>Hello, ${message}</code>}&lt;/h1&gt;;</p>
<p>       }</p>
<p>       ```</p>
<ul>
<li><strong>Class Components:</strong> You can also use ES6 class to define a component. The above function component can be written as a class component:</li>
</ul>
<p>       ```jsx harmony</p>
<p>       class Greeting extends React.Component {</p>
<p>         render() {</p>
<p>           return &lt;h1&gt;{<code>Hello, ${this.props.message}</code>}&lt;/h1&gt;;</p>
<p>         }</p>
<p>       }</p>
<p>       ```</p>
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
    ```
    In the above code, the email prop has not been passed to child component. So there won&#x27;t be any re-renders for email prop change.

    In class components, the components extending _`React.PureComponent`_ instead of  _`React.Component`_ become the pure components. When props or state changes, _PureComponent_ will do a shallow comparison on both props and state by invoking `shouldComponentUpdate()` lifecycle method. 

    **Note:** `React.memo()` is a higher-order component.

    **[⬆ Back to Top](#table-of-contents)**

9.  ### What is state in React?

    _State_ of a component is an object that holds some information that may change over the lifetime of the component. The important point is whenever the state object changes, the component re-renders. It is always recommended to make our state as simple as possible and minimize the number of stateful components.

    ![state](images/state.jpg)

    Let&#x27;s take an example of **User** component with `message` state. Here, **useState** hook has been used to add state to the User component and it returns an array with current state and function to update it.

</code></pre>
<p>import { useState } from &quot;md1/react&quot;;</p>
<p>function User() {</p>
<p>  const [message, setMessage] = useState(&quot;Welcome to React world&quot;);</p>
<p>  return (</p>
    <div>
      <h1>{message}</h1>
    </div>
<p>  );</p>
<p>}</p>
<pre><code class="language-">

    Whenever React calls your component or access `useState` hook, it gives you a snapshot of the state for that particular render.

    &lt;details&gt;&lt;summary&gt;&lt;b&gt;See Class&lt;/b&gt;&lt;/summary&gt;
    &lt;p&gt;

</code></pre>
<p>import React from &#x27;md1/react&#x27;;</p>
<p>class User extends React.Component {</p>
<p>  constructor(props) {</p>
<p>    super(props);</p>
<p>    this.state = {</p>
<p>      message: &quot;Welcome to React world&quot;,</p>
<p>    };</p>
<p>  }</p>
<p>  render() {</p>
<p>    return (</p>
      <div>
        <h1>{this.state.message}</h1>
      </div>
<p>    );</p>
<p>  }</p>
<p>}</p>
<pre><code class="language-">

    &lt;/p&gt;
    &lt;/details&gt;

    State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.

    **[⬆ Back to Top](#table-of-contents)**

10.  ### What are props in React?

     _Props_ are inputs to components. They are single values or objects containing a set of values that are passed to components on creation similar to HTML-tag attributes. Here, the data is passed down from a parent component to a child component.

     The primary purpose of props in React is to provide following component functionality:

      1. Pass custom data to your component.
      2. Trigger state changes.
      3. Use via `this.props.reactProp` inside component&#x27;s `render()` method.

      For example, let us create an element with `reactProp` property:

</code></pre>
<Element reactProp={"1"} />
<pre><code class="language-">

      This `reactProp` (or whatever you came up with) attribute name then becomes a property attached to React&#x27;s native props object which originally already exists on all components created using React library.

</code></pre>
<p>props.reactProp</p>
<pre><code class="language-">

      For example, the usage of props in function component looks like below:

</code></pre>
<p>import React from &quot;md1/react&quot;;</p>
<p>import ReactDOM from &quot;react-dom&quot;;</p>
<p>const ChildComponent = (props) =&gt; {</p>
<p>return (</p>
  <div>
    <p>{props.name}</p>
    <p>{props.age}</p>
    <p>{props.gender}</p>
  </div>
<p>);</p>
<p>};</p>
<p>const ParentComponent = () =&gt; {</p>
<p>return (</p>
  <div>
    <ChildComponent name="John" age="30" gender="male" />
    <ChildComponent name="Mary" age="25" geneder="female"/>
  </div>
<p>);</p>
<p>};</p>
<pre><code class="language-">

   The properties from props object can be accessed directly using destructing feature from ES6 (ECMAScript 2015). It is also possible to fallback to default value when the prop value is not specified. The above child component can be simplified like below.

</code></pre>
<p>const ChildComponent = ({name, age, gender=&quot;male&quot;}) =&gt; {</p>
<p>    return (</p>
      <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{gender}</p>
      </div>
<p>    );</p>
<p>  };</p>
<pre><code class="language-">
  **Note:** The default value won&#x27;t be used if you pass `null` or `0` value. i.e, default value is only used if the prop value is missed or `undefined` value has been passed.

  &lt;details&gt;&lt;summary&gt;&lt;b&gt;See Class&lt;/b&gt;&lt;/summary&gt;
     The Props accessed in Class Based Component as below

</code></pre>
<p>    import React from &quot;md1/react&quot;;</p>
<p>import ReactDOM from &quot;react-dom&quot;;</p>
<p>class ChildComponent extends React.Component {</p>
<p>    render() {</p>
<p>        return (</p>
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <p>{this.props.gender}</p>
            </div>
<p>        );</p>
<p>    }</p>
<p>}</p>
<p>class ParentComponent extends React.Component {</p>
<p>    render() {</p>
<p>        return (</p>
            <div>
                <ChildComponent name="John" age="30" gender="male"/>
                <ChildComponent name="Mary" age="25" gender="female"/>
            </div>
<p>        );</p>
<p>    }</p>
<p>}</p>
<pre><code class="language-">

&lt;/details&gt;

**[⬆ Back to Top](#table-of-contents)**

11. ### What is the difference between state and props?

    In React, both `state` and `props` are plain JavaScript objects and used to manage the data of a component, but they are used in different ways and have different characteristics.

    The `state` entity is managed by the component itself and can be updated using the setter(`setState()` for class components) function. Unlike props, state can be modified by the component and is used to manage the internal state of the component. Moreover, changes in the state trigger a re-render of the component and its children. The components cannot become reusable with the usage of state alone.

    On the otherhand, `props` (short for &quot;properties&quot;) are passed to a component by its parent component and are `read-only`, meaning that they cannot be modified by the own component itself. Also, props can be used to configure the behavior of a component and to pass data between components. The components become reusable with the usage of props.
    
    **[⬆ Back to Top](#table-of-contents)**

12. ### What is the difference between HTML and React event handling?

    Below are some of the main differences between HTML and React event handling,

1. In HTML, the event name usually represents in _lowercase_ as a convention:

</code></pre>
<button onclick="activateLasers()"></button>
<pre><code class="language-">

   Whereas in React it follows _camelCase_ convention:

</code></pre>
<button onClick={activateLasers}>
<pre><code class="language-">

2. In HTML, you can return `false` to prevent default behavior:

</code></pre>
<a
<p> href=&quot;#&quot;</p>
<p> onclick=&#x27;console.log(&quot;The link was clicked.&quot;); return false;&#x27;</p>
<p>/&gt;</p>
<pre><code class="language-">

   Whereas in React you must call `preventDefault()` explicitly:

</code></pre>
<p>function handleClick(event) {</p>
<p> event.preventDefault();</p>
<p> console.log(&quot;The link was clicked.&quot;);</p>
<p>}</p>
<pre><code class="language-">

   3. In HTML, you need to invoke the function by appending `()`
      Whereas in react you should not append `()` with the function name. (refer &quot;activateLasers&quot; function in the first point for example)

   **[⬆ Back to Top](#table-of-contents)**

13. ### What are synthetic events in React?

    `SyntheticEvent` is a cross-browser wrapper around the browser&#x27;s native event. Its API is same as the browser&#x27;s native event, including `stopPropagation()` and `preventDefault()`, except the events work identically across all browsers. The native events can be accessed directly from synthetic events using `nativeEvent` attribute.

    Let&#x27;s take an example of BookStore title search component with the ability to get all native event properties

</code></pre>
<p>function BookStore() {</p>
<p>  handleTitleChange(e) {</p>
<p>    console.log(&#x27;The new title is:&#x27;, e.target.value);</p>
<p>    // &#x27;e&#x27; represents synthetic event</p>
<p>    const nativeEvent = e.nativeEvent;</p>
<p>    console.log(nativeEvent);</p>
<p>    e.stopPropogation();</p>
<p>    e.preventDefault();</p>
<p>  }</p>
<p>  return &lt;input name=&quot;title&quot; onChange={handleTitleChange} /&gt;</p>
<p>}</p>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

14. ### What are inline conditional expressions?

    You can use either _if statements_ or _ternary expressions_ which are available from JS to conditionally render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator `&amp;&amp;`.

</code></pre>
<h1>Hello!</h1>;
<p>{</p>
<p>  messages.length &gt; 0 &amp;&amp; !isLogin ? (</p>
    <h2>You have {messages.length} unread messages.</h2>
<p>  ) : (</p>
    <h2>You don't have unread messages.</h2>
<p>  );</p>
<p>}</p>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

15. ### What is &quot;key&quot; prop and what is the benefit of using it in arrays of elements?

    A `key` is a special attribute you **should** include when mapping over arrays to render data. _Key_ prop helps React identify which items have changed, are added, or are removed.

    Keys should be unique among its siblings. Most often we use ID from our data as _key_:

</code></pre>
<p>const todoItems = todos.map((todo) =&gt; &lt;li key={todo.id}&gt;{todo.text}&lt;/li&gt;);</p>
<pre><code class="language-">

    When you don&#x27;t have stable IDs for rendered items, you may use the item _index_ as a _key_ as a last resort:

</code></pre>
<p>const todoItems = todos.map((todo, index) =&gt; (</p>
  <li key={index}>{todo.text}</li>
<p>));</p>
<pre><code class="language-">

    **Note:**

    1. Using _indexes_ for _keys_ is **not recommended** if the order of items may change. This can negatively impact performance and may cause issues with component state.
    2. If you extract list item as separate component then apply _keys_ on list component instead of `li` tag.
    3. There will be a warning message in the console if the `key` prop is not present on list items.
    4. The key attribute accepts either string or number and internally convert it as string type.
    5. Don&#x27;t generate the key on the fly something like `key={Math.random()}`. Because the keys will never match up between re-renders  and DOM created everytime.

    **[⬆ Back to Top](#table-of-contents)**

16. ### What is Virtual DOM?

    The _Virtual DOM_ (VDOM) is an in-memory representation of _Real DOM_. The representation of a UI is kept in memory and synced with the &quot;real&quot; DOM. It&#x27;s a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called _reconciliation_.

    **[⬆ Back to Top](#table-of-contents)**

17. ### How Virtual DOM works?

    The _Virtual DOM_ works in three simple steps.

    1. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.

       ![vdom](images/vdom1.png)

    2. Then the difference between the previous DOM representation and the new one is calculated.

       ![vdom2](images/vdom2.png)

    3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.

       ![vdom3](images/vdom3.png)

    **[⬆ Back to Top](#table-of-contents)**

18. ### What is the difference between Shadow DOM and Virtual DOM?

    The _Shadow DOM_ is a browser technology designed primarily for scoping variables and CSS in _web components_. The _Virtual DOM_ is a concept implemented by libraries in JavaScript on top of browser APIs.

    **[⬆ Back to Top](#table-of-contents)**

19. ### What is React Fiber?

    Fiber is the new _reconciliation_ engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.

    **[⬆ Back to Top](#table-of-contents)**

20. ### What is the main goal of React Fiber?

    The goal of _React Fiber_ is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is **incremental rendering**: the ability to split rendering work into chunks and spread it out over multiple frames.

    _from documentation_

    Its main goals are:

    1. Ability to split interruptible work in chunks.
    2. Ability to prioritize, rebase and reuse work in progress.
    3. Ability to yield back and forth between parents and children to support layout in React.
    4. Ability to return multiple elements from render().
    5. Better support for error boundaries.

    **[⬆ Back to Top](#table-of-contents)**

21. ### What are controlled components?

    A component that controls the input elements within the forms on subsequent user input is called **Controlled Component**, i.e, every state mutation will have an associated handler function. That means, the displayed data is always in sync with the state of the component.

    The controlled components will be implemented using the below steps,

    1. Initialize the state using use state hooks in function components or inside constructor for class components.
    2. Set the value of the form element to the respective state variable.
    3. Create an event handler to handle the user input changes through useState updater function or setState from class component.
    4. Attach the above event handler to form elements change or click events

    For example, the name input field updates the user name using `handleChange` event handler as below,

</code></pre>
<p>import React, { useState } from &quot;md1/react&quot;;</p>
<p>function UserProfile() {</p>
<p>  const [username, setUsername] = useState(&quot;&quot;);</p>
<p>  const handleChange = (e) =&gt; {</p>
<p>    setUsername(e.target.value);</p>
<p>  };</p>
<p>  return (</p>
    <form>
      <label>
<p>        Name:</p>
        <input type="text" value={username} onChange={handleChange} />
      </label>
    </form>
<p>  );</p>
<p>}</p>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

22. ### What are uncontrolled components?

    The **Uncontrolled Components** are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

    The uncontrolled components will be implemented using the below steps,
    1. Create a ref using useRef react hook in function component or `React.createRef()` in function component.
    2. Attach this ref to the form element.
    3. The form element value can be accessed directly through `ref` in event handlers or `componentDidMount` for class components

    In the below UserProfile component, the `username` input is accessed using ref.

</code></pre>
<p>import React, { useRef } from &quot;md1/react&quot;;</p>
<p>function UserProfile() {</p>
<p>  const usernameRef = useRef(null);</p>
<p>  const handleSubmit = (event) =&gt; {</p>
<p>    event.preventDefault();</p>
<p>    console.log(&quot;The submitted username is: &quot; + usernameRef.current.value);</p>
<p>  };</p>
<p>  return (</p>
    <form onSubmit={handleSubmit}>
      <label>
<p>        Username:</p>
        <input type="text" ref={usernameRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
<p>  );</p>
<p>}</p>
<pre><code class="language-">
    In most cases, it&#x27;s recommend to use controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

    &lt;details&gt;&lt;summary&gt;&lt;b&gt;See Class&lt;/b&gt;&lt;/summary&gt;
    &lt;p&gt;

</code></pre>
<p>class UserProfile extends React.Component {</p>
<p>  constructor(props) {</p>
<p>    super(props);</p>
<p>    this.handleSubmit = this.handleSubmit.bind(this);</p>
<p>    this.input = React.createRef();</p>
<p>  }</p>
<p>  handleSubmit(event) {</p>
<p>    alert(&quot;A name was submitted: &quot; + this.input.current.value);</p>
<p>    event.preventDefault();</p>
<p>  }</p>
<p>  render() {</p>
<p>    return (</p>
      <form onSubmit={this.handleSubmit}>
        <label>
<p>          {&quot;Name:&quot;}</p>
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
<p>    );</p>
<p>  }</p>
<p>}</p>
<pre><code class="language-">
    &lt;/p&gt;
    &lt;/details&gt;

    **[⬆ Back to Top](#table-of-contents)**

23. ### What is the difference between createElement and cloneElement?

    JSX elements will be transpiled to `React.createElement()` functions to create React elements which are going to be used for the object representation of UI. Whereas `cloneElement` is used to clone an element and pass it new props.

    **[⬆ Back to Top](#table-of-contents)**

24. ### What is Lifting State Up in React?

    When several components need to share the same changing data then it is recommended to _lift the shared state up_ to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.

    **[⬆ Back to Top](#table-of-contents)**

25. ### What are Higher-Order Components?

    A _higher-order component_ (_HOC_) is a function that takes a component and returns a new component. Basically, it&#x27;s a pattern that is derived from React&#x27;s compositional nature.

    We call them **pure components** because they can accept any dynamically provided child component but they won&#x27;t modify or copy any behavior from their input components.

</code></pre>
<p>const EnhancedComponent = higherOrderComponent(WrappedComponent);</p>
<pre><code class="language-">

    HOC can be used for many use cases:

    1. Code reuse, logic and bootstrap abstraction.
    2. Render hijacking.
    3. State abstraction and manipulation.
    4. Props manipulation.

    **[⬆ Back to Top](#table-of-contents)**

26. ### What is children prop?

    _Children_ is a prop that allows you to pass components as data to other components, just like any other prop you use. Component tree put between component&#x27;s opening and closing tag will be passed to that component as `children` prop.

    A simple usage of children prop looks as below,

</code></pre>
<p>function MyDiv({ children }){</p>
<p>    return (</p>
      <div>
<p>        {children}</p>
      </div>;
<p>    );</p>
<p>}</p>
<p>export default function Greeting() {</p>
<p>  return (</p>
    <MyDiv>
      <span>{"Hello"}</span>
      <span>{"World"}</span>
    </MyDiv>
<p>  );</p>
<p>}</p>
<pre><code class="language-">

&lt;details&gt;&lt;summary&gt;&lt;b&gt;See Class&lt;/b&gt;&lt;/summary&gt;
&lt;p&gt;

</code></pre>
<p>const MyDiv = React.createClass({</p>
<p>  render: function () {</p>
<p>    return &lt;div&gt;{this.props.children}&lt;/div&gt;;</p>
<p>  },</p>
<p>});</p>
<p>ReactDOM.render(</p>
  <MyDiv>
    <span>{"Hello"}</span>
    <span>{"World"}</span>
  </MyDiv>,
<p>  node</p>
<p>);</p>
<pre><code class="language-">
&lt;/p&gt;
&lt;/details&gt;

    **Note:**  There are several methods available in the legacy React API to work with this prop. These include `React.Children.map`, `React.Children.forEach`, `React.Children.count`, `React.Children.only`, `React.Children.toArray`.

    **[⬆ Back to Top](#table-of-contents)**

27. ### How to write comments in React?

    The comments in React/JSX are similar to JavaScript Multiline comments but are wrapped in curly braces.

    **Single-line comments:**

</code></pre>
<div>
<p>  {/<em> Single-line comments(In vanilla JavaScript, the single-line comments are represented by double slash(//)) </em>/}</p>
<p>  {<code>Welcome ${user}, let&#x27;s play React</code>}</p>
</div>
<pre><code class="language-">

    **Multi-line comments:**

</code></pre>
<div>
<p>  {/* Multi-line comments for more than</p>
<p>   one line */}</p>
<p>  {<code>Welcome ${user}, let&#x27;s play React</code>}</p>
</div>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

28. ### What is reconciliation?

    `Reconciliation` is the process through which React updates the Browser DOM and makes React work faster. React use a `diffing algorithm` so that component updates are predictable and faster. React would first calculate the difference between the `real DOM` and the copy of DOM `(Virtual DOM)` when there&#x27;s an update of components.
    React stores a copy of Browser DOM which is called `Virtual DOM`. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. This comparison is done by `Diffing Algorithm`.
    Now React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called _Reconciliation_.

    **[⬆ Back to Top](#table-of-contents)**

29. ### Does the lazy function support named exports?

    No, currently `React.lazy` function supports default exports only. If you would like to import modules which are named exports, you can create an intermediate module that reexports it as the default. It also ensures that tree shaking keeps working and don’t pull unused components.
    Let&#x27;s take a component file which exports multiple named components,

</code></pre>
<p>// MoreComponents.js</p>
<p>export const SomeComponent = /<em> ... </em>/;</p>
<p>export const UnusedComponent = /<em> ... </em>/;</p>
<pre><code class="language-">

    and reexport `MoreComponents.js` components in an intermediate file `IntermediateComponent.js`

</code></pre>
<p>// IntermediateComponent.js</p>
<p>export { SomeComponent as default } from &quot;./MoreComponents.js&quot;;</p>
<pre><code class="language-">

    Now you can import the module using lazy function as below,

</code></pre>
<p>import React, { lazy } from &quot;md1/react&quot;;</p>
<p>const SomeComponent = lazy(() =&gt; import(&quot;./IntermediateComponent.js&quot;));</p>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

30. ### Why React uses `className` over `class` attribute?

    The attribute names written in JSX turned into keys of JavaScript objects and the JavaScript names cannot contain dashes or reversed words, it is recommended to use camelCase whereever applicable in JSX code. The attribute `class` is a keyword in JavaScript, and JSX is an extension of JavaScript. That&#x27;s the principle reason why React uses `className` instead of `class`. Pass a string as the `className` prop.

</code></pre>
<p>render() {</p>
<p>  return &lt;span className={&#x27;menu navigation-menu&#x27;}&gt;{&#x27;Menu&#x27;}&lt;/span&gt;</p>
<p>}</p>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

31. ### What are fragments?

    It&#x27;s a common pattern or practice in React for a component to return multiple elements. _Fragments_ let you group a list of children without adding extra nodes to the DOM.
    You need to use either **&lt;Fragment&gt;** or a shorter syntax having empty tag (**&lt;&gt;&lt;/&gt;**).

    Below is the example of how to use fragment inside _Story_ component.
</code></pre>
<p>function Story({title, description, date}) {</p>
<p>  return (</p>
      <Fragment>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
      </Fragment>
<p>    );</p>
<p>}</p>
<pre><code class="language-">

    It is also possible to render list of fragments inside a loop with the mandatory **key** attribute supplied.

</code></pre>
<p>function StoryBook() {</p>
<p>  return stories.map(story =&gt;</p>
    <Fragment key={ story.id}>
      <h2>{story.title}</h2>
      <p>{story.description}</p>
      <p>{story.date}</p>
    </Fragment>
<p>    );</p>
<p>}</p>
<pre><code class="language-">

    Usually, you don&#x27;t need to use **&lt;Fragment&gt;** until unless there is a need of _key_ attribute. The usage of shorter syntax looks like below.

</code></pre>
<p>function Story({title, description, date}) {</p>
<p>  return (</p>
<p>      &lt;&gt;</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
<p>      &lt;/&gt;</p>
<p>    );</p>
<p>}</p>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

32. ### Why fragments are better than container divs?

    Below are the list of reasons to prefer fragments over container DOM elements,

    1. Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.
    2. Some CSS mechanisms like _Flexbox_ and _CSS Grid_ have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.
    3. The DOM Inspector is less cluttered.

    **[⬆ Back to Top](#table-of-contents)**

33. ### What are portals in React?

    _Portal_ is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. When using
    CSS transform in a component, its descendant elements should not use fixed positioning, otherwise the layout will blow up. 

</code></pre>
<p>ReactDOM.createPortal(child, container);</p>
<pre><code class="language-">

    The first argument is any render-able React child, such as an element, string, or fragment. The second argument is a DOM element.

    **[⬆ Back to Top](#table-of-contents)**

34. ### What are stateless components?

    If the behaviour of a component is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the `this` keyword altogether.

    **[⬆ Back to Top](#table-of-contents)**

35. ### What are stateful components?

    If the behaviour of a component is dependent on the _state_ of the component then it can be termed as stateful component. These _stateful components_ are either function components with hooks or _class components_.

    Let&#x27;s take an example of function stateful component which update the state based on click event,
</code></pre>
<p>import React, {useState} from &#x27;md1/react&#x27;;</p>
<p>const App = (props) =&gt; {</p>
<p>const [count, setCount] = useState(0);</p>
<p>handleIncrement() {</p>
<p>  setCount(count+1);</p>
<p>}</p>
<p>return (</p>
<p>  &lt;&gt;</p>
    <button onClick={handleIncrement}>Increment</button>
    <span>Counter: {count}</span>
<p>  &lt;/&gt;</p>
<p>  )</p>
<p>}</p>
<pre><code class="language-">

&lt;details&gt;&lt;summary&gt;&lt;b&gt;See Class&lt;/b&gt;&lt;/summary&gt;
&lt;p&gt;
The equivalent class stateful component with a state that gets initialized in the `constructor`.

</code></pre>
<p>class App extends Component {</p>
<p>  constructor(props) {</p>
<p>    super(props);</p>
<p>    this.state = { count: 0 };</p>
<p>  }</p>
<p>  handleIncrement() {</p>
<p>    setState({count: this.state.count + 1})</p>
<p>  }</p>
<p>  render() {</p>
<p>    &lt;&gt;</p>
     <button onClick={() => this.handleIncrement}>Increment</button>
     <span>Count: {count}</span>
<p>    &lt;/&gt;</p>
<p>  }</p>
<p>}</p>
<pre><code class="language-">
&lt;/p&gt;
&lt;/details&gt;


    **[⬆ Back to Top](#table-of-contents)**

36. ### How to apply validation on props in React?

    When the application is running in _development mode_, React will automatically check all props that we set on components to make sure they have _correct type_. If the type is incorrect, React will generate warning messages in the console. It&#x27;s disabled in _production mode_ due to performance impact. The mandatory props are defined with `isRequired`.

    The set of predefined prop types:

    1. `PropTypes.number`
    2. `PropTypes.string`
    3. `PropTypes.array`
    4. `PropTypes.object`
    5. `PropTypes.func`
    6. `PropTypes.node`
    7. `PropTypes.element`
    8. `PropTypes.bool`
    9. `PropTypes.symbol`
    10. `PropTypes.any`

    We can define `propTypes` for `User` component as below:

</code></pre>
<p>import React from &quot;md1/react&quot;;</p>
<p>import PropTypes from &quot;prop-types&quot;;</p>
<p>class User extends React.Component {</p>
<p>  static propTypes = {</p>
<p>    name: PropTypes.string.isRequired,</p>
<p>    age: PropTypes.number.isRequired,</p>
<p>  };</p>
<p>  render() {</p>
<p>    return (</p>
<p>      &lt;&gt;</p>
        <h1>{`Welcome, ${this.props.name}`}</h1>
        <h2>{`Age, ${this.props.age}`}</h2>
<p>      &lt;/&gt;</p>
<p>    );</p>
<p>  }</p>
<p>}</p>
<pre><code class="language-">

    **Note:** In React v15.5 _PropTypes_ were moved from `React.PropTypes` to `prop-types` library.

    _The Equivalent Functional Component_

</code></pre>
<p>import React from &quot;react&quot;;</p>
<p>import PropTypes from &quot;prop-types&quot;;</p>
<p>function User({ name, age }) {</p>
<p>  return (</p>
<p>    &lt;&gt;</p>
      <h1>{`Welcome, ${name}`}</h1>
      <h2>{`Age, ${age}`}</h2>
<p>    &lt;/&gt;</p>
<p>  );</p>
<p>}</p>
<p>User.propTypes = {</p>
<p>  name: PropTypes.string.isRequired,</p>
<p>  age: PropTypes.number.isRequired,</p>
<p>};</p>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

37. ### What are the advantages of React?

    Below are the list of main advantages of React,

    1. Increases the application&#x27;s performance with _Virtual DOM_.
    2. JSX makes code easy to read and write.
    3. It renders both on client and server side (_SSR_).
    4. Easy to integrate with frameworks (Angular, Backbone) since it is only a view library.
    5. Easy to write unit and integration tests with tools such as Jest.

    **[⬆ Back to Top](#table-of-contents)**

38. ### What are the limitations of React?

    Apart from the advantages, there are few limitations of React too,

    1. React is just a view library, not a full framework.
    2. There is a learning curve for beginners who are new to web development.
    3. Integrating React into a traditional MVC framework requires some additional configuration.
    4. The code complexity increases with inline templating and JSX.
    5. Too many smaller components leading to over engineering or boilerplate.

    **[⬆ Back to Top](#table-of-contents)**

39. ### What are the recommended ways for static type checking?

    Normally we use _PropTypes library_ (`React.PropTypes` moved to a `prop-types` package since React v15.5) for _type checking_ in the React applications. For large code bases, it is recommended to use _static type checkers_ such as Flow or TypeScript, that perform type checking at compile time and provide auto-completion features.

    **[⬆ Back to Top](#table-of-contents)**

40. ### What is the use of `react-dom` package?

    The `react-dom` package provides _DOM-specific methods_ that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are:

    1. `render()`
    2. `hydrate()`
    3. `unmountComponentAtNode()`
    4. `findDOMNode()`
    5. `createPortal()`

    **[⬆ Back to Top](#table-of-contents)**

41. ### What is ReactDOMServer?

    The `ReactDOMServer` object enables you to render components to static markup (typically used on node server). This object is mainly used for _server-side rendering_ (SSR). The following methods can be used in both the server and browser environments:

    1. `renderToString()`
    2. `renderToStaticMarkup()`

    For example, you generally run a Node-based web server like Express, Hapi, or Koa, and you call `renderToString` to render your root component to a string, which you then send as response.

</code></pre>
<p>// using Express</p>
<p>import { renderToString } from &quot;react-dom/server&quot;;</p>
<p>import MyPage from &quot;./MyPage&quot;;</p>
<p>app.get(&quot;/&quot;, (req, res) =&gt; {</p>
<p>  res.write(</p>
<p>    &quot;&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;title&gt;My Page&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&quot;</p>
<p>  );</p>
<p>  res.write(&#x27;&lt;div id=&quot;content&quot;&gt;&#x27;);</p>
<p>  res.write(renderToString(&lt;MyPage /&gt;));</p>
<p>  res.write(&quot;&lt;/div&gt;&lt;/body&gt;&lt;/html&gt;&quot;);</p>
<p>  res.end();</p>
<p>});</p>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

42. ### How to use innerHTML in React?

    The `dangerouslySetInnerHTML` attribute is React&#x27;s replacement for using `innerHTML` in the browser DOM. Just like `innerHTML`, it is risky to use this attribute considering cross-site scripting (XSS) attacks. You just need to pass a `__html` object as key and HTML text as value.

    In this example MyComponent uses `dangerouslySetInnerHTML` attribute for setting HTML markup:

</code></pre>
<p>function createMarkup() {</p>
<p>  return { __html: &quot;First &amp;middot; Second&quot; };</p>
<p>}</p>
<p>function MyComponent() {</p>
<p>  return &lt;div dangerouslySetInnerHTML={createMarkup()} /&gt;;</p>
<p>}</p>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

43. ### How to use styles in React?

    The `style` attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes.

</code></pre>
<p>const divStyle = {</p>
<p>  color: &quot;blue&quot;,</p>
<p>  backgroundImage: &quot;url(&quot; + imgUrl + &quot;)&quot;,</p>
<p>};</p>
<p>function HelloWorldComponent() {</p>
<p>  return &lt;div style={divStyle}&gt;Hello World!&lt;/div&gt;;</p>
<p>}</p>
<pre><code class="language-">

    Style keys are camelCased in order to be consistent with accessing the properties on DOM nodes in JavaScript (e.g. `node.style.backgroundImage`).

    **[⬆ Back to Top](#table-of-contents)**

44. ### How events are different in React?

    Handling events in React elements has some syntactic differences:

    1. React event handlers are named using camelCase, rather than lowercase.
    2. With JSX you pass a function as the event handler, rather than a string.

    **[⬆ Back to Top](#table-of-contents)**

45. ### What is the impact of indexes as keys?

    Keys should be stable, predictable, and unique so that React can keep track of elements.

    In the below code snippet each element&#x27;s key will be based on ordering, rather than tied to the data that is being represented. This limits the optimizations that React can do and creates confusing bugs in the application.

</code></pre>
<p>{</p>
<p>  todos.map((todo, index) =&gt; &lt;Todo {...todo} key={index} /&gt;);</p>
<p>}</p>
<pre><code class="language-">

    If you use element data for unique key, assuming `todo.id` is unique to this list and stable, React would be able to reorder elements without needing to reevaluate them as much.

    ```jsx harmony
    {
      todos.map((todo) =&gt; &lt;Todo {...todo} key={todo.id} /&gt;);
    }
    ```
    **Note:** If you don&#x27;t specify `key` prop at all, React will use index as a key&#x27;s value while iterating over an array of data.

    **[⬆ Back to Top](#table-of-contents)**

46. ### How do you conditionally render components?

    In some cases you want to render different components depending on some state. JSX does not render `false` or `undefined`, so you can use conditional _short-circuiting_ to render a given part of your component only if a certain condition is true.

</code></pre>
<p>const MyComponent = ({ name, address }) =&gt; (</p>
  <div>
    <h2>{name}</h2>
<p>    {address &amp;&amp; &lt;p&gt;{address}&lt;/p&gt;}</p>
  </div>
<p>);</p>
<pre><code class="language-">

    If you need an `if-else` condition then use _ternary operator_.

</code></pre>
<p>const MyComponent = ({ name, address }) =&gt; (</p>
  <div>
    <h2>{name}</h2>
<p>    {address ? &lt;p&gt;{address}&lt;/p&gt; : &lt;p&gt;{&quot;Address is not available&quot;}&lt;/p&gt;}</p>
  </div>
<p>);</p>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

47. ### Why we need to be careful when spreading props on DOM elements?

    When we _spread props_ we run into the risk of adding unknown HTML attributes, which is a bad practice. Instead we can use prop destructuring with `...rest` operator, so it will add only required props.

    For example,

</code></pre>
<p>const ComponentA = () =&gt; (</p>
  <ComponentB isDisplay={true} className={"componentStyle"} />
<p>);</p>
<p>const ComponentB = ({ isDisplay, ...domProps }) =&gt; (</p>
  <div {...domProps}>{"ComponentB"}</div>
<p>);</p>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

48. ### How do you memoize a component?

    There are memoize libraries available which can be used on function components.

    For example `moize` library can memoize the component in another component.

</code></pre>
<p>import moize from &quot;moize&quot;;</p>
<p>import Component from &quot;./components/Component&quot;; // this module exports a non-memoized component</p>
<p>const MemoizedFoo = moize.react(Component);</p>
<p>const Consumer = () =&gt; {</p>
  <div>
<p>    {&quot;I will memoize the following entry:&quot;}</p>
    <MemoizedFoo />
  </div>;
<p>};</p>
<pre><code class="language-">

    **Update:** Since React v16.6.0, we have a `React.memo`. It provides a higher order component which memoizes component unless the props change. To use it, simply wrap the component using React.memo before you use it.

</code></pre>
<p>const MemoComponent = React.memo(function MemoComponent(props) {</p>
<p>  /<em> render using props </em>/</p>
<p>});</p>
<p>OR;</p>
<p>export default React.memo(MyFunctionComponent);</p>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

49. ### How you implement Server Side Rendering or SSR?

    React is already equipped to handle rendering on Node servers. A special version of the DOM renderer is available, which follows the same pattern as on the client side.

</code></pre>
<p>import ReactDOMServer from &quot;react-dom/server&quot;;</p>
<p>import App from &quot;./App&quot;;</p>
<p>ReactDOMServer.renderToString(&lt;App /&gt;);</p>
<pre><code class="language-">

    This method will output the regular HTML as a string, which can be then placed inside a page body as part of the server response. On the client side, React detects the pre-rendered content and seamlessly picks up where it left off.

    **[⬆ Back to Top](#table-of-contents)**

50. ### How to enable production mode in React?

    You should use Webpack&#x27;s `DefinePlugin` method to set `NODE_ENV` to `production`, by which it strip out things like propType validation and extra warnings. Apart from this, if you minify the code, for example, Uglify&#x27;s dead-code elimination to strip out development only code and comments, it will drastically reduce the size of your bundle.

    **[⬆ Back to Top](#table-of-contents)**

51. ### Do Hooks replace render props and higher order components?

    Both render props and higher-order components render only a single child but in most of the cases Hooks are a simpler way to serve this by reducing nesting in your tree.

    **[⬆ Back to Top](#table-of-contents)**

52. ### What is a switching component?

    A _switching component_ is a component that renders one of many components. We need to use object to map prop values to components.

    For example, a switching component to display different pages based on `page` prop:

</code></pre>
<p>import HomePage from &quot;./HomePage&quot;;</p>
<p>import AboutPage from &quot;./AboutPage&quot;;</p>
<p>import ServicesPage from &quot;./ServicesPage&quot;;</p>
<p>import ContactPage from &quot;./ContactPage&quot;;</p>
<p>const PAGES = {</p>
<p>  home: HomePage,</p>
<p>  about: AboutPage,</p>
<p>  services: ServicesPage,</p>
<p>  contact: ContactPage,</p>
<p>};</p>
<p>const Page = (props) =&gt; {</p>
<table>
<thead><tr>
<th>const Handler = PAGES[props.page]</th>
<th>ContactPage;</th>
</tr></thead><tbody>
</tbody></table>
<p>  return &lt;Handler {...props} /&gt;;</p>
<p>};</p>
<p>// The keys of the PAGES object can be used in the prop types to catch dev-time errors.</p>
<p>Page.propTypes = {</p>
<p>  page: PropTypes.oneOf(Object.keys(PAGES)).isRequired,</p>
<p>};</p>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

53. ### What are React Mixins?

    _Mixins_ are a way to totally separate components to have a common functionality. Mixins **should not be used** and can be replaced with _higher-order components_ or _decorators_.

    One of the most commonly used mixins is `PureRenderMixin`. You might be using it in some components to prevent unnecessary re-renders when the props and state are shallowly equal to the previous props and state:

</code></pre>
<p>const PureRenderMixin = require(&quot;react-addons-pure-render-mixin&quot;);</p>
<p>const Button = React.createClass({</p>
<p>  mixins: [PureRenderMixin],</p>
<p>  // ...</p>
<p>});</p>
<pre><code class="language-">

     &lt;!-- TODO: mixins are deprecated --&gt;

    **[⬆ Back to Top](#table-of-contents)**

54. ### What are the Pointer Events supported in React?

    _Pointer Events_ provide a unified way of handling all input events. In the old days we had a mouse and respective event listeners to handle them but nowadays we have many devices which don&#x27;t correlate to having a mouse, like phones with touch surface or pens. We need to remember that these events will only work in browsers that support the _Pointer Events_ specification.

    The following event types are now available in _React DOM_:

    1. `onPointerDown`
    2. `onPointerMove`
    3. `onPointerUp`
    4. `onPointerCancel`
    5. `onGotPointerCapture`
    6. `onLostPointerCapture`
    7. `onPointerEnter`
    8. `onPointerLeave`
    9. `onPointerOver`
    10. `onPointerOut`

    **[⬆ Back to Top](#table-of-contents)**

55. ### Why should component names start with capital letter?

    If you are rendering your component using JSX, the name of that component has to begin with a capital letter otherwise React will throw an error as an unrecognized tag. This convention is because only HTML elements and SVG tags can begin with a lowercase letter.

</code></pre>
<p>function SomeComponent {</p>
<p>  // Code goes here</p>
<p>}</p>
<pre><code class="language-">

    You can define function component which name starts with lowercase letter, but when it&#x27;s imported it should have capital letter. Here lowercase is fine:

</code></pre>
<p>function myComponent {</p>
<p>  render() {</p>
<p>    return &lt;div /&gt;;</p>
<p>  }</p>
<p>}</p>
<p>export default myComponent;</p>
<pre><code class="language-">

    While when imported in another file it should start with capital letter:

</code></pre>
<p>import MyComponent from &quot;./myComponent&quot;;</p>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

56. ### Are custom DOM attributes supported in React v16?

    Yes. In the past, React used to ignore unknown DOM attributes. If you wrote JSX with an attribute that React doesn&#x27;t recognize, React would just skip it.

    For example, let&#x27;s take a look at the below attribute:

</code></pre>
<div mycustomattribute={"something"} />
<pre><code class="language-">

    Would render an empty div to the DOM with React v15:

</code></pre>
<div />
<pre><code class="language-">

    In React v16 any unknown attributes will end up in the DOM:

</code></pre>
<div mycustomattribute="something" />
<pre><code class="language-">

    This is useful for supplying browser-specific non-standard attributes, trying new DOM APIs, and integrating with opinionated third-party libraries.

    **[⬆ Back to Top](#table-of-contents)**

57. ### How to loop inside JSX?

    You can simply use `Array.prototype.map` with ES6 _arrow function_ syntax.

    For example, the `items` array of objects is mapped into an array of components:

</code></pre>
<tbody>
<p>  {items.map((item) =&gt; (</p>
    <SomeComponent key={item.id} name={item.name} />
<p>  ))}</p>
</tbody>
<pre><code class="language-">

    But you can&#x27;t iterate using `for` loop:

</code></pre>
<tbody>
<p>  for (let i = 0; i &lt; items.length; i++) {</p>
    <SomeComponent key={items[i].id} name={items[i].name} />
<p>  }</p>
</tbody>
<pre><code class="language-">

    This is because JSX tags are transpiled into _function calls_, and you can&#x27;t use statements inside expressions. This may change thanks to `do` expressions which are _stage 1 proposal_.

    **[⬆ Back to Top](#table-of-contents)**

58. ### How do you access props in attribute quotes?

    React (or JSX) doesn&#x27;t support variable interpolation inside an attribute value. The below representation won&#x27;t work:

</code></pre>
<img className="image" src="images/{this.props.image}" />
<pre><code class="language-">

    But you can put any JS expression inside curly braces as the entire attribute value. So the below expression works:

</code></pre>
<img className="image" src={"images/" + this.props.image} />
<pre><code class="language-">

    Using _template strings_ will also work:

</code></pre>
<img className="image" src={`images/${this.props.image}`} />
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

59. ### What is React proptype array with shape?

    If you want to pass an array of objects to a component with a particular shape then use `React.PropTypes.shape()` as an argument to `React.PropTypes.arrayOf()`.

</code></pre>
<p>ReactComponent.propTypes = {</p>
<p>  arrayWithShape: React.PropTypes.arrayOf(</p>
<p>    React.PropTypes.shape({</p>
<p>      color: React.PropTypes.string.isRequired,</p>
<p>      fontSize: React.PropTypes.number.isRequired,</p>
<p>    })</p>
<p>  ).isRequired,</p>
<p>};</p>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

60. ### How to conditionally apply class attributes?

    You shouldn&#x27;t use curly braces inside quotes because it is going to be evaluated as a string.

</code></pre>
<div className="btn-panel {this.props.visible ? 'show' : 'hidden'}">
<pre><code class="language-">

    Instead you need to move curly braces outside (don&#x27;t forget to include spaces between class names):

</code></pre>
<div className={'btn-panel ' + (this.props.visible ? 'show' : 'hidden')}>
<pre><code class="language-">

    _Template strings_ will also work:

</code></pre>
<div className={`btn-panel ${this.props.visible ? 'show' : 'hidden'}`}>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

61. ### What is the difference between React and ReactDOM?

    The `react` package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The `react-dom` package contains `ReactDOM.render()`, and in `react-dom/server` we have _server-side rendering_ support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.

    **[⬆ Back to Top](#table-of-contents)**

62. ### Why ReactDOM is separated from React?

    The React team worked on extracting all DOM-related features into a separate library called _ReactDOM_. React v0.14 is the first release in which the libraries are split. By looking at some of the packages, `react-native`, `react-art`, `react-canvas`, and `react-three`, it has become clear that the beauty and essence of React has nothing to do with browsers or the DOM.

    To build more environments that React can render to, React team planned to split the main React package into two: `react` and `react-dom`. This paves the way to writing components that can be shared between the web version of React and React Native.

    **[⬆ Back to Top](#table-of-contents)**

63. ### How to use React label element?

    If you try to render a `&lt;label&gt;` element bound to a text input using the standard `for` attribute, then it produces HTML missing that attribute and prints a warning to the console.

</code></pre>
<label for={'user'}>{'User'}</label>
<input type={'text'} id={'user'} />
<pre><code class="language-">

    Since `for` is a reserved keyword in JavaScript, use `htmlFor` instead.

</code></pre>
<label htmlFor={'user'}>{'User'}</label>
<input type={'text'} id={'user'} />
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

64. ### How to combine multiple inline style objects?

    You can use _spread operator_ in regular React:

</code></pre>
<button style={{ ...styles.panel.button, ...styles.panel.submitButton }}>
<p>  {&quot;Submit&quot;}</p>
</button>
<pre><code class="language-">

    If you&#x27;re using React Native then you can use the array notation:

</code></pre>
<button style={[styles.panel.button, styles.panel.submitButton]}>
<p>  {&quot;Submit&quot;}</p>
</button>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

65.  ### How to re-render the view when the browser is resized?

      You can use the `useState` hook to manage the width and height state variables, and the `useEffect` hook to add and remove the `resize` event listener. The `[]` dependency array passed to useEffect ensures that the effect only runs once (on mount) and not on every re-render.

</code></pre>
<p>import React, { useState, useEffect } from &quot;md1/react&quot;;</p>
<p>function WindowDimensions() {</p>
<p>const [dimensions, setDimensions] = useState({</p>
<p>  width: window.innerWidth,</p>
<p>  height: window.innerHeight,</p>
<p>});</p>
<p>useEffect(() =&gt; {</p>
<p>  function handleResize() {</p>
<p>    setDimensions({</p>
<p>      width: window.innerWidth,</p>
<p>      height: window.innerHeight,</p>
<p>    });</p>
<p>  }</p>
<p>  window.addEventListener(&quot;resize&quot;, handleResize);</p>
<p>  return () =&gt; window.removeEventListener(&quot;resize&quot;, handleResize);</p>
<p>}, []);</p>
<p>return (</p>
  <span>
<p>    {dimensions.width} x {dimensions.height}</p>
  </span>
<p>);</p>
<p>}</p>
<pre><code class="language-">
&lt;details&gt;
&lt;summary&gt;&lt;h4&gt;Using Class Component&lt;/h4&gt;&lt;/summary&gt;

You can listen to the `resize` event in `componentDidMount()` and then update the dimensions (`width` and `height`). You should remove the listener in `componentWillUnmount()` method.

</code></pre>
<p>class WindowDimensions extends React.Component {</p>
<p>  constructor(props) {</p>
<p>    super(props);</p>
<p>    this.updateDimensions = this.updateDimensions.bind(this);</p>
<p>  }</p>
<p>  componentWillMount() {</p>
<p>    this.updateDimensions();</p>
<p>  }</p>
<p>  componentDidMount() {</p>
<p>    window.addEventListener(&quot;resize&quot;, this.updateDimensions);</p>
<p>  }</p>
<p>  componentWillUnmount() {</p>
<p>    window.removeEventListener(&quot;resize&quot;, this.updateDimensions);</p>
<p>  }</p>
<p>  updateDimensions() {</p>
<p>    this.setState({</p>
<p>      width: window.innerWidth,</p>
<p>      height: window.innerHeight,</p>
<p>    });</p>
<p>  }</p>
<p>  render() {</p>
<p>    return (</p>
      <span>
<p>        {this.state.width} x {this.state.height}</p>
      </span>
<p>    );</p>
<p>  }</p>
<p>}</p>
<pre><code class="language-">
&lt;/details&gt;

**[⬆ Back to Top](#table-of-contents)**

66. ### How to pretty print JSON with React?

     We can use `&lt;pre&gt;` tag so that the formatting of the `JSON.stringify()` is retained:

</code></pre>
<p>const data = { name: &quot;John&quot;, age: 42 };</p>
<p>function User {</p>
<p> return &lt;pre&gt;{JSON.stringify(data, null, 2)}&lt;/pre&gt;;</p>
<p>}</p>
<p>const container = createRoot(document.getElementById(&quot;container&quot;));</p>
<p>container.render(&lt;User /&gt;);</p>
<pre><code class="language-">

&lt;details&gt;&lt;summary&gt;&lt;b&gt;See Class&lt;/b&gt;&lt;/summary&gt;
&lt;p&gt;

</code></pre>
<p>const data = { name: &quot;John&quot;, age: 42 };</p>
<p>class User extends React.Component {</p>
<p>render() {</p>
<p>  return &lt;pre&gt;{JSON.stringify(data, null, 2)}&lt;/pre&gt;;</p>
<p>}</p>
<p>}</p>
<p>React.render(&lt;User /&gt;, document.getElementById(&quot;container&quot;));</p>
<pre><code class="language-">

&lt;/p&gt;
&lt;/details&gt;

**[⬆ Back to Top](#table-of-contents)**

67. ### Why you can&#x27;t update props in React?

     The React philosophy is that props should be _immutable_(read only) and _top-down_. This means that a parent can send any prop values to a child, but the child can&#x27;t modify received props.

**[⬆ Back to Top](#table-of-contents)**

68. ### How to focus an input element on page load?

     You need to use `useEffect` hook to set focus on input field during page load time for functional component.

</code></pre>
<p>import React, { useEffect, useRef } from &quot;md1/react&quot;;</p>
<p>const App = () =&gt; {</p>
<p>const inputElRef = useRef(null);</p>
<p>useEffect(() =&gt; {</p>
<p> inputElRef.current.focus();</p>
<p>}, []);</p>
<p>return (</p>
 <div>
   <input defaultValue={"Won't focus"} />
   <input ref={inputElRef} defaultValue={"Will focus"} />
 </div>
<p>);</p>
<p>};</p>
<p>ReactDOM.render(&lt;App /&gt;, document.getElementById(&quot;app&quot;));</p>
<pre><code class="language-">

&lt;details&gt;&lt;summary&gt;&lt;b&gt;See Class&lt;/b&gt;&lt;/summary&gt;
&lt;p&gt;
You can do it by creating _ref_ for `input` element and using it in `componentDidMount()`:

</code></pre>
<p>class App extends React.Component {</p>
<p>componentDidMount() {</p>
<p>  this.nameInput.focus();</p>
<p>}</p>
<p>render() {</p>
<p>  return (</p>
    <div>
      <input defaultValue={"Won't focus"} />
      <input
<p>        ref={(input) =&gt; (this.nameInput = input)}</p>
<p>        defaultValue={&quot;Will focus&quot;}</p>
<p>      /&gt;</p>
    </div>
<p>  );</p>
<p>}</p>
<p>}</p>
<p>ReactDOM.render(&lt;App /&gt;, document.getElementById(&quot;app&quot;));</p>
<pre><code class="language-">
&lt;/p&gt;
&lt;/details&gt;

  **[⬆ Back to Top](#table-of-contents)**

69. ### How can we find the version of React at runtime in the browser?

     You can use `React.version` to get the version.

</code></pre>
<p>const REACT_VERSION = React.version;</p>
<p>ReactDOM.render(</p>
<div>{`React version: ${REACT_VERSION}`}</div>,
<p>document.getElementById(&quot;app&quot;)</p>
<p>);</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

70. ### How to add Google Analytics for React Router?

     Add a listener on the `history` object to record each page view:

</code></pre>
<p>history.listen(function (location) {</p>
<p>window.ga(&quot;set&quot;, &quot;page&quot;, location.pathname + location.search);</p>
<p>window.ga(&quot;send&quot;, &quot;pageview&quot;, location.pathname + location.search);</p>
<p>});</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

71. ### How do you apply vendor prefixes to inline styles in React?

     React _does not_ apply _vendor prefixes_ automatically. You need to add vendor prefixes manually.

</code></pre>
<div
<p>style={{</p>
<p> transform: &quot;rotate(90deg)&quot;,</p>
<p> WebkitTransform: &quot;rotate(90deg)&quot;, // note the capital &#x27;W&#x27; here</p>
<p> msTransform: &quot;rotate(90deg)&quot;, // &#x27;ms&#x27; is the only lowercase vendor prefix</p>
<p>}}</p>
<p>/&gt;</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

72. ### How to import and export components using React and ES6?

     You should use default for exporting the components

</code></pre>
<p>import User from &quot;user&quot;;</p>
<p>export default function MyProfile {</p>
<p> return &lt;User type=&quot;customer&quot;&gt;//...&lt;/User&gt;;</p>
<p>}</p>
<pre><code class="language-">
&lt;details&gt;&lt;summary&gt;&lt;b&gt;See Class&lt;/b&gt;&lt;/summary&gt;
&lt;p&gt;
</code></pre>
<p>import React from &quot;react&quot;;</p>
<p>import User from &quot;user&quot;;</p>
<p>export default class MyProfile extends React.Component {</p>
<p>    render() {</p>
<p>     return &lt;User type=&quot;customer&quot;&gt;//...&lt;/User&gt;;</p>
<p>    }</p>
<p>}</p>
<pre><code class="language-">
&lt;/p&gt;
&lt;/details&gt;

     With the export specifier, the MyProfile is going to be the member and exported to this module and the same can be imported without mentioning the name in other components.

**[⬆ Back to Top](#table-of-contents)**

73. #### What are the exceptions on React component naming?

    The component names should start with an uppercase letter but there are few exceptions to this convention. The lowercase tag names with a dot (property accessors) are still considered as valid component names.
    For example, the below tag can be compiled to a valid component,

</code></pre>
<p>     render() {</p>
<p>          return (</p>
            <obj.component/> // `React.createElement(obj.component)`
<p>          )</p>
<p>    }</p>
<pre><code class="language-">

    **[⬆ Back to Top](#table-of-contents)**

74. ### Is it possible to use async/await in plain React?

     If you want to use `async`/`await` in React, you will need _Babel_ and [transform-async-to-generator](https://babeljs.io/docs/en/babel-plugin-transform-async-to-generator) plugin. React Native ships with Babel and a set of transforms.

**[⬆ Back to Top](#table-of-contents)**

75. ### What are the common folder structures for React?

     There are two common practices for React project file structure.

1. **Grouping by features or routes:**

   One common way to structure projects is locate CSS, JS, and tests together, grouped by feature or route.

</code></pre>
<p>common/</p>
<p>├─ Avatar.js</p>
<p>├─ Avatar.css</p>
<p>├─ APIUtils.js</p>
<p>└─ APIUtils.test.js</p>
<p>feed/</p>
<p>├─ index.js</p>
<p>├─ Feed.js</p>
<p>├─ Feed.css</p>
<p>├─ FeedStory.js</p>
<p>├─ FeedStory.test.js</p>
<p>└─ FeedAPI.js</p>
<p>profile/</p>
<p>├─ index.js</p>
<p>├─ Profile.js</p>
<p>├─ ProfileHeader.js</p>
<p>├─ ProfileHeader.css</p>
<p>└─ ProfileAPI.js</p>
<pre><code class="language-">

2. **Grouping by file type:**

   Another popular way to structure projects is to group similar files together.

</code></pre>
<p>api/</p>
<p>├─ APIUtils.js</p>
<p>├─ APIUtils.test.js</p>
<p>├─ ProfileAPI.js</p>
<p>└─ UserAPI.js</p>
<p>components/</p>
<p>├─ Avatar.js</p>
<p>├─ Avatar.css</p>
<p>├─ Feed.js</p>
<p>├─ Feed.css</p>
<p>├─ FeedStory.js</p>
<p>├─ FeedStory.test.js</p>
<p>├─ Profile.js</p>
<p>├─ ProfileHeader.js</p>
<p>└─ ProfileHeader.css</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

76. ### What are the popular packages for animation?

     _React Transition Group_ and _React Motion_ are popular animation packages in React ecosystem.

**[⬆ Back to Top](#table-of-contents)**

77. ### What is the benefit of styles modules?

     It is recommended to avoid hard coding style values in components. Any values that are likely to be used across different UI components should be extracted into their own modules.

     For example, these styles could be extracted into a separate component:

</code></pre>
<p>export const colors = {</p>
<p>white,</p>
<p>black,</p>
<p>blue,</p>
<p>};</p>
<p>export const space = [0, 8, 16, 32, 64];</p>
<pre><code class="language-">

And then imported individually in other components:

 ```javascript
 import { space, colors } from &quot;./styles&quot;;
 ```

**[⬆ Back to Top](#table-of-contents)**

78. ### What are the popular React-specific linters?

     ESLint is a popular JavaScript linter. There are plugins available that analyse specific code styles. One of the most common for React is an npm package called `eslint-plugin-react`. By default, it will check a number of best practices, with rules checking things from keys in iterators to a complete set of prop types.

     Another popular plugin is `eslint-plugin-jsx-a11y`, which will help fix common issues with accessibility. As JSX offers slightly different syntax to regular HTML, issues with `alt` text and `tabindex`, for example, will not be picked up by regular plugins.

**[⬆ Back to Top](#table-of-contents)**

## React Router

**[⬆ Back to Top](#table-of-contents)**

79. ### What is React Router?

     React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what&#x27;s being displayed on the page.

**[⬆ Back to Top](#table-of-contents)**

80. ### How React Router is different from history library?

     React Router is a wrapper around the `history` library which handles interaction with the browser&#x27;s `window.history` with its browser and hash histories. It also provides memory history which is useful for environments that don&#x27;t have global history, such as mobile app development (React Native) and unit testing with Node.

**[⬆ Back to Top](#table-of-contents)**

81. ### What are the `&lt;Router&gt;` components of React Router v4?

     React Router v4 provides below 3 `&lt;Router&gt;` components:

     1. `&lt;BrowserRouter&gt;`
     2. `&lt;HashRouter&gt;`
     3. `&lt;MemoryRouter&gt;`

     The above components will create _browser_, _hash_, and _memory_ history instances. React Router v4 makes the properties and methods of the `history` instance associated with your router available through the context in the `router` object.

**[⬆ Back to Top](#table-of-contents)**

82. ### What is the purpose of `push()` and `replace()` methods of `history`?

     A history instance has two methods for navigation purpose.

     1. `push()`
     2. `replace()`

     If you think of the history as an array of visited locations, `push()` will add a new location to the array and `replace()` will replace the current location in the array with the new one.

**[⬆ Back to Top](#table-of-contents)**

83. ### How do you programmatically navigate using React Router v4?

     There are three different ways to achieve programmatic routing/navigation within components.

1. **Using the `withRouter()` higher-order function:**

   The `withRouter()` higher-order function will inject the history object as a prop of the component. This object provides `push()` and `replace()` methods to avoid the usage of context.

</code></pre>
<p>import { withRouter } from &quot;react-router-dom&quot;; // this also works with &#x27;react-router-native&#x27;</p>
<p>const Button = withRouter(({ history }) =&gt; (</p>
 <button
<p>   type=&quot;button&quot;</p>
<p>   onClick={() =&gt; {</p>
<p>     history.push(&quot;/new-location&quot;);</p>
<p>   }}</p>
<p>      &gt;</p>
<p>   {&quot;Click Me!&quot;}</p>
 </button>
<p>));</p>
<pre><code class="language-">

2. **Using `&lt;Route&gt;` component and render props pattern:**

   The `&lt;Route&gt;` component passes the same props as `withRouter()`, so you will be able to access the history methods through the history prop.

</code></pre>
<p>import { Route } from &quot;react-router-dom&quot;;</p>
<p>const Button = () =&gt; (</p>
 <Route
<p>   render={({ history }) =&gt; (</p>
     <button
<p>       type=&quot;button&quot;</p>
<p>       onClick={() =&gt; {</p>
<p>         history.push(&quot;/new-location&quot;);</p>
<p>       }}</p>
<p>          &gt;</p>
<p>       {&quot;Click Me!&quot;}</p>
     </button>
<p>   )}</p>
<p> /&gt;</p>
<p>);</p>
<pre><code class="language-">

3. **Using context:**

   This option is not recommended and treated as unstable API.

</code></pre>
<p>const Button = (props, context) =&gt; (</p>
 <button
<p>   type=&quot;button&quot;</p>
<p>   onClick={() =&gt; {</p>
<p>     context.history.push(&quot;/new-location&quot;);</p>
<p>   }}</p>
<p>      &gt;</p>
<p>   {&quot;Click Me!&quot;}</p>
 </button>
<p>);</p>
<p>Button.contextTypes = {</p>
<p> history: React.PropTypes.shape({</p>
<p>   push: React.PropTypes.func.isRequired,</p>
<p> }),</p>
<p>};</p>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

84. ### How to get query parameters in React Router v4?

The ability to parse query strings was taken out of React Router v4 because there have been user requests over the years to support different implementation. So the decision has been given to users to choose the implementation they like. The recommended approach is to use query strings library.

</code></pre>
<p>const queryString = require(&quot;query-string&quot;);</p>
<p>const parsed = queryString.parse(props.location.search);</p>
<pre><code class="language-">

You can also use `URLSearchParams` if you want something native:

</code></pre>
<p>const params = new URLSearchParams(props.location.search);</p>
<p>const foo = params.get(&quot;name&quot;);</p>
<pre><code class="language-">

You should use a _polyfill_ for IE11.

**[⬆ Back to Top](#table-of-contents)**

85. ### Why you get &quot;Router may have only one child element&quot; warning?

You have to wrap your Route&#x27;s in a `&lt;Switch&gt;` block because `&lt;Switch&gt;` is unique in that it renders a route exclusively.

At first you need to add `Switch` to your imports:

</code></pre>
<p>import { Switch, Router, Route } from &quot;react-router&quot;;</p>
<pre><code class="language-">

Then define the routes within `&lt;Switch&gt;` block:

</code></pre>
<Router>
<Switch>
 <Route {/* ... */} />
 <Route {/* ... */} />
</Switch>
</Router>
<pre><code class="language-">

**[⬆ Back to Top](#table-of-contents)**

86. ### How to pass params to `history.push` method in React Router v4?

     While navigating you can pass props to the `history` object:

     ```javascript
     this.props.history.push({
       pathname: &quot;/template&quot;,
       search: &quot;?name=sudheer&quot;,
       state: { detail: response.data },
     });
     ```

     The `search` property is used to pass query params in `push()` method.

**[⬆ Back to Top](#table-of-contents)**

87. ### How to implement _default_ or _NotFound_ page?

     A `&lt;Switch&gt;` renders the first child `&lt;Route&gt;` that matches. A `&lt;Route&gt;` with no path always matches. So you just need to simply drop path attribute as below

     ```jsx harmony
     &lt;Switch&gt;
       &lt;Route exact path=&quot;/&quot; component={Home} /&gt;
       &lt;Route path=&quot;/user&quot; component={User} /&gt;
       &lt;Route component={NotFound} /&gt;
     &lt;/Switch&gt;
     ```

**[⬆ Back to Top](#table-of-contents)**

88. ### How to get history on React Router v4?

     Below are the list of steps to get history object on React Router v4,

     1. Create a module that exports a `history` object and import this module across the project.

        For example, create `history.js` file:

        ```javascript
        import { createBrowserHistory } from &quot;history&quot;;

        export default createBrowserHistory({
          /* pass a configuration object here if needed */
        });
        ```

     2. You should use the `&lt;Router&gt;` component instead of built-in routers. Import the above `history.js` inside `index.js` file:

        ```jsx harmony
        import { Router } from &quot;react-router-dom&quot;;
        import history from &quot;./history&quot;;
        import App from &quot;./App&quot;;

        ReactDOM.render(
          &lt;Router history={history}&gt;
            &lt;App /&gt;
          &lt;/Router&gt;,
          holder
        );
        ```

     3. You can also use push method of `history` object similar to built-in history object:

        ```javascript
        // some-other-file.js
        import history from &quot;./history&quot;;

        history.push(&quot;/go-here&quot;);
        ```

**[⬆ Back to Top](#table-of-contents)**

89. ### How to perform automatic redirect after login?

     The `react-router` package provides `&lt;Redirect&gt;` component in React Router. Rendering a `&lt;Redirect&gt;` will navigate to a new location. Like server-side redirects, the new location will override the current location in the history stack.

     ```javascript
     import { Redirect } from &quot;react-router&quot;;

     export default function Login {
         if (this.state.isLoggedIn === true) {
           return &lt;Redirect to=&quot;/your/redirect/page&quot; /&gt;;
         } else {
           return &lt;div&gt;{&quot;Login Please&quot;}&lt;/div&gt;;
         }
     }
     ```

      &lt;details&gt;&lt;summary&gt;&lt;b&gt;See Class&lt;/b&gt;&lt;/summary&gt;
      &lt;p&gt;

      ```jsx
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
      ```
       &lt;/p&gt;
       &lt;/details&gt;

  **[⬆ Back to Top](#table-of-contents)**

## React Internationalization

90. ### What is React Intl?

     The _React Intl_ library makes internationalization in React straightforward, with off-the-shelf components and an API that can handle everything from formatting strings, dates, and numbers, to pluralization. React Intl is part of _FormatJS_ which provides bindings to React via its components and API.

**[⬆ Back to Top](#table-of-contents)**

91. ### What are the main features of React Intl?

     Below are the main features of React Intl,

     1. Display numbers with separators.
     2. Display dates and times correctly.
     3. Display dates relative to &quot;now&quot;.
     4. Pluralize labels in strings.
     5. Support for 150+ languages.
     6. Runs in the browser and Node.
     7. Built on standards.

**[⬆ Back to Top](#table-of-contents)**

92. ### What are the two ways of formatting in React Intl?

     The library provides two ways to format strings, numbers, and dates:

     1. **Using react components:**

        ```jsx harmony
        &lt;FormattedMessage
          id={&quot;account&quot;}
          defaultMessage={&quot;The amount is less than minimum balance.&quot;}
        /&gt;
        ```

     2. **Using an API:**

        ```javascript
        const messages = defineMessages({
          accountMessage: {
            id: &quot;account&quot;,
            defaultMessage: &quot;The amount is less than minimum balance.&quot;,
          },
        });

        formatMessage(messages.accountMessage);
        ```

**[⬆ Back to Top](#table-of-contents)**

93. ### How to use `&lt;FormattedMessage&gt;` as placeholder using React Intl?

     The `&lt;Formatted... /&gt;` components from `react-intl` return elements, not plain text, so they can&#x27;t be used for placeholders, alt text, etc. In that case, you should use lower level API `formatMessage()`. You can inject the `intl` object into your component using `injectIntl()` higher-order component and then format the message using `formatMessage()` available on that object.

     ```jsx harmony
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
     ```

**[⬆ Back to Top](#table-of-contents)**

94. ### How to access current locale with React Intl?

     You can get the current locale in any component of your application using `injectIntl()`:

     ```jsx harmony
     import { injectIntl, intlShape } from &quot;react-intl&quot;;

     const MyComponent = ({ intl }) =&gt; (
       &lt;div&gt;{`The current locale is ${intl.locale}`}&lt;/div&gt;
     );

     MyComponent.propTypes = {
       intl: intlShape.isRequired,
     };

     export default injectIntl(MyComponent);
     ```

**[⬆ Back to Top](#table-of-contents)**

95. ### How to format date using React Intl?

     The `injectIntl()` higher-order component will give you access to the `formatDate()` method via the props in your component. The method is used internally by instances of `FormattedDate` and it returns the string representation of the formatted date.

     ```jsx harmony
     import { injectIntl, intlShape } from &quot;react-intl&quot;;

     const stringDate = this.props.intl.formatDate(date, {
       year: &quot;numeric&quot;,
       month: &quot;numeric&quot;,
       day: &quot;numeric&quot;,
     });

     const MyComponent = ({ intl }) =&gt; (
       &lt;div&gt;{`The formatted date is ${stringDate}`}&lt;/div&gt;
     );

     MyComponent.propTypes = {
       intl: intlShape.isRequired,
     };

     export default injectIntl(MyComponent);
     ```
**[⬆ Back to Top](#table-of-contents)**

## React Testing

96. ### What is Shallow Renderer in React testing?

     _Shallow rendering_ is useful for writing unit test cases in React. It lets you render a component _one level deep_ and assert facts about what its render method returns, without worrying about the behavior of child components, which are not instantiated or rendered.

     For example, if you have the following component:

     ```javascript
     function MyComponent() {
       return (
         &lt;div&gt;
           &lt;span className={&quot;heading&quot;}&gt;{&quot;Title&quot;}&lt;/span&gt;
           &lt;span className={&quot;description&quot;}&gt;{&quot;Description&quot;}&lt;/span&gt;
         &lt;/div&gt;
       );
     }
     ```

     Then you can assert as follows:

     ```jsx harmony
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
     ```

**[⬆ Back to Top](#table-of-contents)**

97. ### What is `TestRenderer` package in React?

     This package provides a renderer that can be used to render components to pure JavaScript objects, without depending on the DOM or a native mobile environment. This package makes it easy to grab a snapshot of the platform view hierarchy (similar to a DOM tree) rendered by a ReactDOM or React Native without using a browser or `jsdom`.

     ```jsx harmony
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
     ```

**[⬆ Back to Top](#table-of-contents)**

98. ### What is the purpose of ReactTestUtils package?

     _ReactTestUtils_ are provided in the `with-addons` package and allow you to perform actions against a simulated DOM for the purpose of unit testing.

**[⬆ Back to Top](#table-of-contents)**

99. ### What is Jest?

     _Jest_ is a JavaScript unit testing framework created by Facebook based on Jasmine and provides automated mock creation and a `jsdom` environment. It&#x27;s often used for testing components.

**[⬆ Back to Top](#table-of-contents)**

100. ### What are the advantages of Jest over Jasmine?

     There are couple of advantages compared to Jasmine:

     - Automatically finds tests to execute in your source code.
     - Automatically mocks dependencies when running your tests.
     - Allows you to test asynchronous code synchronously.
     - Runs your tests with a fake DOM implementation (via `jsdom`) so that your tests can be run on the command line.
     - Runs tests in parallel processes so that they finish sooner.

**[⬆ Back to Top](#table-of-contents)**

101. ### Give a simple example of Jest test case

     Let&#x27;s write a test for a function that adds two numbers in `sum.js` file:

     ```javascript
     const sum = (a, b) =&gt; a + b;

     export default sum;
     ```

     Create a file named `sum.test.js` which contains actual test:

     ```javascript
     import sum from &quot;./sum&quot;;

     test(&quot;adds 1 + 2 to equal 3&quot;, () =&gt; {
       expect(sum(1, 2)).toBe(3);
     });
     ```

     And then add the following section to your `package.json`:

     ```json
     {
       &quot;scripts&quot;: {
         &quot;test&quot;: &quot;jest&quot;
       }
     }
     ```

     Finally, run `yarn test` or `npm test` and Jest will print a result:

     ```console
     $ yarn test
     PASS ./sum.test.js
     ✓ adds 1 + 2 to equal 3 (2ms)
     ```

## React Redux

**[⬆ Back to Top](#table-of-contents)**

102. ### What is flux?

     _Flux_ is an _application design paradigm_ used as a replacement for the more traditional MVC pattern. It is not a framework or a library but a new kind of architecture that complements React and the concept of Unidirectional Data Flow. Facebook uses this pattern internally when working with React.

     The workflow between dispatcher, stores and views components with distinct inputs and outputs as follows:

     ![flux](images/flux.png)

**[⬆ Back to Top](#table-of-contents)**

103. ### What is Redux?

     _Redux_ is a predictable state container for JavaScript apps based on the _Flux design pattern_. Redux can be used together with React, or with any other view library. It is tiny (about 2kB) and has no dependencies.

**[⬆ Back to Top](#table-of-contents)**

104. ### What are the core principles of Redux?

     Redux follows three fundamental principles:

     1. **Single source of truth:** The state of your whole application is stored in an object tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.
     2. **State is read-only:** The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will ever write directly to the state.
     3. **Changes are made with pure functions:** To specify how the state tree is transformed by actions, you write reducers. Reducers are just pure functions that take the previous state and an action as parameters, and return the next state.

**[⬆ Back to Top](#table-of-contents)**

105. ### What are the downsides of Redux compared to Flux?

     Instead of saying downsides we can say that there are few compromises of using Redux over Flux. Those are as follows:

     1. **You will need to learn to avoid mutations:** Flux is un-opinionated about mutating data, but Redux doesn&#x27;t like mutations and many packages complementary to Redux assume you never mutate the state. You can enforce this with dev-only packages like `redux-immutable-state-invariant`, Immutable.js, or instructing your team to write non-mutating code.
     2. **You&#x27;re going to have to carefully pick your packages:** While Flux explicitly doesn&#x27;t try to solve problems such as undo/redo, persistence, or forms, Redux has extension points such as middleware and store enhancers, and it has spawned a rich ecosystem.
     3. **There is no nice Flow integration yet:** Flux currently lets you do very impressive static type checks which Redux doesn&#x27;t support yet.

**[⬆ Back to Top](#table-of-contents)**

106. ### What is the difference between `mapStateToProps()` and `mapDispatchToProps()`?

     `mapStateToProps()` is a utility which helps your component get updated state (which is updated by some other components):

     ```javascript
     const mapStateToProps = (state) =&gt; {
       return {
         todos: getVisibleTodos(state.todos, state.visibilityFilter),
       };
     };
     ```

     `mapDispatchToProps()` is a utility which will help your component to fire an action event (dispatching action which may cause change of application state):

     ```javascript
     const mapDispatchToProps = (dispatch) =&gt; {
       return {
         onTodoClick: (id) =&gt; {
           dispatch(toggleTodo(id));
         },
       };
     };
     ```

     It is recommended to always use the “object shorthand” form for the `mapDispatchToProps`.

     Redux wraps it in another function that looks like (…args) =&gt; dispatch(onTodoClick(…args)), and pass that wrapper function as a prop to your component.

     ```javascript
     const mapDispatchToProps = {
       onTodoClick,
     };
     ```

**[⬆ Back to Top](#table-of-contents)**

107. ### Can I dispatch an action in reducer?

     Dispatching an action within a reducer is an **anti-pattern**. Your reducer should be _without side effects_, simply digesting the action payload and returning a new state object. Adding listeners and dispatching actions within the reducer can lead to chained actions and other side effects.

**[⬆ Back to Top](#table-of-contents)**

108. ### How to access Redux store outside a component?

     You just need to export the store from the module where it created with `createStore()`. Also, it shouldn&#x27;t pollute the global window object.

     ```javascript
     store = createStore(myReducer);

     export default store;
     ```

**[⬆ Back to Top](#table-of-contents)**

109. ### What are the drawbacks of MVW pattern?

     1. DOM manipulation is very expensive which causes applications to behave slow and inefficient.
     2. Due to circular dependencies, a complicated model was created around models and views.
     3. Lot of data changes happens for collaborative applications(like Google Docs).
     4. No way to do undo (travel back in time) easily without adding so much extra code.

**[⬆ Back to Top](#table-of-contents)**

110. ### Are there any similarities between Redux and RxJS?

     These libraries are very different for very different purposes, but there are some vague similarities.

     Redux is a tool for managing state throughout the application. It is usually used as an architecture for UIs. Think of it as an alternative to (half of) Angular. RxJS is a reactive programming library. It is usually used as a tool to accomplish asynchronous tasks in JavaScript. Think of it as an alternative to Promises. Redux uses the Reactive paradigm because the Store is reactive. The Store observes actions from a distance, and changes itself. RxJS also uses the Reactive paradigm, but instead of being an architecture, it gives you basic building blocks, Observables, to accomplish this pattern.

**[⬆ Back to Top](#table-of-contents)**

111. ### How to reset state in Redux?

     You need to write a _root reducer_ in your application which delegate handling the action to the reducer generated by `combineReducers()`.

     For example, let us take `rootReducer()` to return the initial state after `USER_LOGOUT` action. As we know, reducers are supposed to return the initial state when they are called with `undefined` as the first argument, no matter the action.

     ```javascript
     const appReducer = combineReducers({
       /* your app&#x27;s top-level reducers */
     });

     const rootReducer = (state, action) =&gt; {
       if (action.type === &quot;USER_LOGOUT&quot;) {
         state = undefined;
       }

       return appReducer(state, action);
     };
     ```

     In case of using `redux-persist`, you may also need to clean your storage. `redux-persist` keeps a copy of your state in a storage engine. First, you need to import the appropriate storage engine and then, to parse the state before setting it to undefined and clean each storage state key.

     ```javascript
     const appReducer = combineReducers({
       /* your app&#x27;s top-level reducers */
     });

     const rootReducer = (state, action) =&gt; {
       if (action.type === &quot;USER_LOGOUT&quot;) {
         Object.keys(state).forEach((key) =&gt; {
           storage.removeItem(`persist:${key}`);
         });

         state = undefined;
       }

       return appReducer(state, action);
     };
     ```

**[⬆ Back to Top](#table-of-contents)**

112. ### What is the difference between React context and React Redux?

     You can use **Context** in your application directly and is going to be great for passing down data to deeply nested components which what it was designed for.

     Whereas **Redux** is much more powerful and provides a large number of features that the Context API doesn&#x27;t provide. Also, React Redux uses context internally but it doesn&#x27;t expose this fact in the public API.

**[⬆ Back to Top](#table-of-contents)**

113. ### Why are Redux state functions called reducers?

     Reducers always return the accumulation of the state (based on all previous and current actions). Therefore, they act as a reducer of state. Each time a Redux reducer is called, the state and action are passed as parameters. This state is then reduced (or accumulated) based on the action, and then the next state is returned. You could _reduce_ a collection of actions and an initial state (of the store) on which to perform these actions to get the resulting final state.

**[⬆ Back to Top](#table-of-contents)**

114. ### How to make AJAX request in Redux?

     You can use `redux-thunk` middleware which allows you to define async actions.

     Let&#x27;s take an example of fetching specific account as an AJAX call using _fetch API_:

     ```javascript
     export function fetchAccount(id) {
       return (dispatch) =&gt; {
         dispatch(setLoadingAccountState()); // Show a loading spinner
         fetch(`/account/${id}`, (response) =&gt; {
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
     ```

**[⬆ Back to Top](#table-of-contents)**

115. ### Should I keep all component&#x27;s state in Redux store?

     Keep your data in the Redux store, and the UI related state internally in the component.

**[⬆ Back to Top](#table-of-contents)**

116. ### What is the proper way to access Redux store?

     The best way to access your store in a component is to use the `connect()` function, that creates a new component that wraps around your existing one. This pattern is called _Higher-Order Components_, and is generally the preferred way of extending a component&#x27;s functionality in React. This allows you to map state and action creators to your component, and have them passed in automatically as your store updates.

     Let&#x27;s take an example of `&lt;FilterLink&gt;` component using connect:

     ```javascript
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
     ```

     Due to it having quite a few performance optimizations and generally being less likely to cause bugs, the Redux developers almost always recommend using `connect()` over accessing the store directly (using context API).

     ```javascript
     function MyComponent {
       someMethod() {
         doSomethingWith(this.context.store);
       }
     }
     ```

**[⬆ Back to Top](#table-of-contents)**

117. ### What is the difference between component and container in React Redux?

     **Component** is a class or function component that describes the presentational part of your application.

     **Container** is an informal term for a component that is connected to a Redux store. Containers _subscribe_ to Redux state updates and _dispatch_ actions, and they usually don&#x27;t render DOM elements; they delegate rendering to presentational child components.

**[⬆ Back to Top](#table-of-contents)**

118. ### What is the purpose of the constants in Redux?

     Constants allows you to easily find all usages of that specific functionality across the project when you use an IDE. It also prevents you from introducing silly bugs caused by typos – in which case, you will get a `ReferenceError` immediately.

     Normally we will save them in a single file (`constants.js` or `actionTypes.js`).

     ```javascript
     export const ADD_TODO = &quot;ADD_TODO&quot;;
     export const DELETE_TODO = &quot;DELETE_TODO&quot;;
     export const EDIT_TODO = &quot;EDIT_TODO&quot;;
     export const COMPLETE_TODO = &quot;COMPLETE_TODO&quot;;
     export const COMPLETE_ALL = &quot;COMPLETE_ALL&quot;;
     export const CLEAR_COMPLETED = &quot;CLEAR_COMPLETED&quot;;
     ```

     In Redux, you use them in two places:

     1. **During action creation:**

        Let&#x27;s take `actions.js`:

        ```javascript
        import { ADD_TODO } from &quot;./actionTypes&quot;;

        export function addTodo(text) {
          return { type: ADD_TODO, text };
        }
        ```

     2. **In reducers:**

        Let&#x27;s create `reducer.js`:

        ```javascript
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
        ```

**[⬆ Back to Top](#table-of-contents)**

119. ### What are the different ways to write `mapDispatchToProps()`?

     There are a few ways of binding _action creators_ to `dispatch()` in `mapDispatchToProps()`.

     Below are the possible options:

     ```javascript
     const mapDispatchToProps = (dispatch) =&gt; ({
       action: () =&gt; dispatch(action()),
     });
     ```

     ```javascript
     const mapDispatchToProps = (dispatch) =&gt; ({
       action: bindActionCreators(action, dispatch),
     });
     ```

     ```javascript
     const mapDispatchToProps = { action };
     ```

     The third option is just a shorthand for the first one.

**[⬆ Back to Top](#table-of-contents)**

120. ### What is the use of the `ownProps` parameter in `mapStateToProps()` and `mapDispatchToProps()`?

     If the `ownProps` parameter is specified, React Redux will pass the props that were passed to the component into your _connect_ functions. So, if you use a connected component:

     ```jsx harmony
     import ConnectedComponent from &quot;./containers/ConnectedComponent&quot;;

     &lt;ConnectedComponent user={&quot;john&quot;} /&gt;;
     ```

     The `ownProps` inside your `mapStateToProps()` and `mapDispatchToProps()` functions will be an object:

     ```javascript
     {
       user: &quot;john&quot;;
     }
     ```

     You can use this object to decide what to return from those functions.

**[⬆ Back to Top](#table-of-contents)**

121. ### How to structure Redux top level directories?

     Most of the applications has several top-level directories as below:

     1. **Components**: Used for _dumb_ components unaware of Redux.
     2. **Containers**: Used for _smart_ components connected to Redux.
     3. **Actions**: Used for all action creators, where file names correspond to part of the app.
     4. **Reducers**: Used for all reducers, where files name correspond to state key.
     5. **Store**: Used for store initialization.

     This structure works well for small and medium size apps.

**[⬆ Back to Top](#table-of-contents)**

122. ### What is redux-saga?

     `redux-saga` is a library that aims to make side effects (asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better.

     It is available in NPM:

     ```console
     $ npm install --save redux-saga
     ```

**[⬆ Back to Top](#table-of-contents)**

123. ### What is the mental model of redux-saga?

     _Saga_ is like a separate thread in your application, that&#x27;s solely responsible for side effects. `redux-saga` is a redux _middleware_, which means this thread can be started, paused and cancelled from the main application with normal Redux actions, it has access to the full Redux application state and it can dispatch Redux actions as well.

**[⬆ Back to Top](#table-of-contents)**

124. ### What are the differences between `call()` and `put()` in redux-saga?

     Both `call()` and `put()` are effect creator functions. `call()` function is used to create effect description, which instructs middleware to call the promise. `put()` function creates an effect, which instructs middleware to dispatch an action to the store.

     Let&#x27;s take example of how these effects work for fetching particular user data.

     ```javascript
     function* fetchUserSaga(action) {
       // `call` function accepts rest arguments, which will be passed to `api.fetchUser` function.
       // Instructing middleware to call promise, it resolved value will be assigned to `userData` variable
       const userData = yield call(api.fetchUser, action.userId);

       // Instructing middleware to dispatch corresponding action.
       yield put({
         type: &quot;FETCH_USER_SUCCESS&quot;,
         userData,
       });
     }
     ```

**[⬆ Back to Top](#table-of-contents)**

125. ### What is Redux Thunk?

     _Redux Thunk_ middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods `dispatch()` and `getState()` as parameters.

**[⬆ Back to Top](#table-of-contents)**

126. ### What are the differences between `redux-saga` and `redux-thunk`?

     Both _Redux Thunk_ and _Redux Saga_ take care of dealing with side effects. In most of the scenarios, Thunk uses _Promises_ to deal with them, whereas Saga uses _Generators_. Thunk is simple to use and Promises are familiar to many developers, Sagas/Generators are more powerful but you will need to learn them. But both middleware can coexist, so you can start with Thunks and introduce Sagas when/if you need them.

**[⬆ Back to Top](#table-of-contents)**

127. ### What is Redux DevTools?

     _Redux DevTools_ is a live-editing time travel environment for Redux with hot reloading, action replay, and customizable UI. If you don&#x27;t want to bother with installing Redux DevTools and integrating it into your project, consider using Redux DevTools Extension for Chrome and Firefox.

**[⬆ Back to Top](#table-of-contents)**

128. ### What are the features of Redux DevTools?

     Some of the main features of Redux DevTools are below,

     1. Lets you inspect every state and action payload.
     2. Lets you go back in time by _cancelling_ actions.
     3. If you change the reducer code, each _staged_ action will be re-evaluated.
     4. If the reducers throw, you will see during which action this happened, and what the error was.
     5. With `persistState()` store enhancer, you can persist debug sessions across page reloads.

**[⬆ Back to Top](#table-of-contents)**

129. ### What are Redux selectors and why to use them?

     _Selectors_ are functions that take Redux state as an argument and return some data to pass to the component.

     For example, to get user details from the state:

     ```javascript
     const getUserData = (state) =&gt; state.user.data;
     ```

     These selectors have two main benefits,

     1. The selector can compute derived data, allowing Redux to store the minimal possible state
     2. The selector is not recomputed unless one of its arguments changes

**[⬆ Back to Top](#table-of-contents)**

130. ### What is Redux Form?

     _Redux Form_ works with React and Redux to enable a form in React to use Redux to store all of its state. Redux Form can be used with raw HTML5 inputs, but it also works very well with common UI frameworks like Material UI, React Widgets and React Bootstrap.

**[⬆ Back to Top](#table-of-contents)**

131. ### What are the main features of Redux Form?

     Some of the main features of Redux Form are:

     1. Field values persistence via Redux store.
     2. Validation (sync/async) and submission.
     3. Formatting, parsing and normalization of field values.

**[⬆ Back to Top](#table-of-contents)**

132. ### How to add multiple middlewares to Redux?

     You can use `applyMiddleware()`.

     For example, you can add `redux-thunk` and `logger` passing them as arguments to `applyMiddleware()`:

     ```javascript
     import { createStore, applyMiddleware } from &quot;redux&quot;;
     const createStoreWithMiddleware = applyMiddleware(
       ReduxThunk,
       logger
     )(createStore);
     ```

**[⬆ Back to Top](#table-of-contents)**

133. ### How to set initial state in Redux?

     You need to pass initial state as second argument to createStore:

     ```javascript
     const rootReducer = combineReducers({
       todos: todos,
       visibilityFilter: visibilityFilter,
     });

     const initialState = {
       todos: [{ id: 123, name: &quot;example&quot;, completed: false }],
     };

     const store = createStore(rootReducer, initialState);
     ```

**[⬆ Back to Top](#table-of-contents)**

134. ### How Relay is different from Redux?

     Relay is similar to Redux in that they both use a single store. The main difference is that relay only manages state originated from the server, and all access to the state is used via _GraphQL_ queries (for reading data) and mutations (for changing data). Relay caches the data for you and optimizes data fetching for you, by fetching only changed data and nothing more.

135. ### What is an action in Redux?

     _Actions_ are plain JavaScript objects or payloads of information that send data from your application to your store. They are the only source of information for the store. Actions must have a type property that indicates the type of action being performed.

     For example, let&#x27;s take an action which represents adding a new todo item:

     ```
     {
       type: ADD_TODO,
       text: &#x27;Add todo item&#x27;
     }
     ```

**[⬆ Back to Top](#table-of-contents)**

## React Native

**[⬆ Back to Top](#table-of-contents)**

136. ### What is the difference between React Native and React?

     **React** is a JavaScript library, supporting both front end web and being run on the server, for building user interfaces and web applications.

     **React Native** is a mobile framework that compiles to native app components, allowing you to build native mobile applications (iOS, Android, and Windows) in JavaScript that allows you to use React to build your components, and implements React under the hood.

**[⬆ Back to Top](#table-of-contents)**

137. ### How to test React Native apps?

     React Native can be tested only in mobile simulators like iOS and Android. You can run the app in your mobile using expo app (https://expo.io) Where it syncs using QR code, your mobile and computer should be in same wireless network.

**[⬆ Back to Top](#table-of-contents)**

138. ### How to do logging in React Native?

     You can use `console.log`, `console.warn`, etc. As of React Native v0.29 you can simply run the following to see logs in the console:

     ```
     $ react-native log-ios
     $ react-native log-android
     ```

**[⬆ Back to Top](#table-of-contents)**

139. ### How to debug your React Native?

     Follow the below steps to debug React Native app:

     1. Run your application in the iOS simulator.
     2. Press `Command + D` and a webpage should open up at `http://localhost:8081/debugger-ui`.
     3. Enable _Pause On Caught Exceptions_ for a better debugging experience.
     4. Press `Command + Option + I` to open the Chrome Developer tools, or open it via `View` -&gt; `Developer` -&gt; `Developer Tools`.
     5. You should now be able to debug as you normally would.

## React supported libraries &amp; Integration

**[⬆ Back to Top](#table-of-contents)**

140. ### What is reselect and how it works?

     _Reselect_ is a **selector library** (for Redux) which uses _memoization_ concept. It was originally written to compute derived data from Redux-like applications state, but it can&#x27;t be tied to any architecture or library.

     Reselect keeps a copy of the last inputs/outputs of the last call, and recomputes the result only if one of the inputs changes. If the the same inputs are provided twice in a row, Reselect returns the cached output. It&#x27;s memoization and cache are fully customizable.

**[⬆ Back to Top](#table-of-contents)**

141. ### What is Flow?

     _Flow_ is a _static type checker_ designed to find type errors in JavaScript. Flow types can express much more fine-grained distinctions than traditional type systems. For example, Flow helps you catch errors involving `null`, unlike most type systems.

**[⬆ Back to Top](#table-of-contents)**

142. ### What is the difference between Flow and PropTypes?

     Flow is a _static analysis tool_ (static checker) which uses a superset of the language, allowing you to add type annotations to all of your code and catch an entire class of bugs at compile time.

     PropTypes is a _basic type checker_ (runtime checker) which has been patched onto React. It can&#x27;t check anything other than the types of the props being passed to a given component. If you want more flexible typechecking for your entire project Flow/TypeScript are appropriate choices.

**[⬆ Back to Top](#table-of-contents)**

143. ### How to use Font Awesome icons in React?

     The below steps followed to include Font Awesome in React:

     1. Install `font-awesome`:

        ```console
        $ npm install --save font-awesome
        ```

     2. Import `font-awesome` in your `index.js` file:

        ```javascript
        import &quot;font-awesome/css/font-awesome.min.css&quot;;
        ```

     3. Add Font Awesome classes in `className`:

        ```javascript
        function MyComponent {
          return &lt;div&gt;&lt;i className={&#x27;fa fa-spinner&#x27;} /&gt;&lt;/div&gt;
        }
        ```

**[⬆ Back to Top](#table-of-contents)**

144. ### What is React Dev Tools?

     _React Developer Tools_ let you inspect the component hierarchy, including component props and state. It exists both as a browser extension (for Chrome and Firefox), and as a standalone app (works with other environments including Safari, IE, and React Native).

     The official extensions available for different browsers or environments.

     1. **Chrome extension**
     2. **Firefox extension**
     3. **Standalone app** (Safari, React Native, etc)

**[⬆ Back to Top](#table-of-contents)**

145. ### Why is DevTools not loading in Chrome for local files?

     If you opened a local HTML file in your browser (`file://...`) then you must first open _Chrome Extensions_ and check `Allow access to file URLs`.

**[⬆ Back to Top](#table-of-contents)**

146. ### How to use Polymer in React?

     You need to follow below steps to use Polymer in React,

     1. Create a Polymer element:

        ```jsx harmony
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
        ```

     2. Create the Polymer component HTML tag by importing it in a HTML document, e.g. import it in the `index.html` of your React application:

        ```html
        &lt;link
          rel=&quot;import&quot;
          href=&quot;./src/polymer-components/calendar-element.html&quot;
        /&gt;
        ```

     3. Use that element in the JSX file:

        ```javascript
        export default function MyComponent {
          return &lt;calendar-element /&gt;;
        }
        ```

**[⬆ Back to Top](#table-of-contents)**

147. ### What are the advantages of React over Vue.js?

     React has the following advantages over Vue.js:

     1. Gives more flexibility in large apps developing.
     2. Easier to test.
     3. Suitable for mobile apps creating.
     4. More information and solutions available.

**Note:** The above list of advantages are purely opinionated and it vary based on the professional experience. But they are helpful as base parameters.

**[⬆ Back to Top](#table-of-contents)**

148. ### What is the difference between React and Angular?

     Let&#x27;s see the difference between React and Angular in a table format.

     | React                                                                                       | Angular                                                                                                                            |
     | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
     | React is a library and has only the View layer                                              | Angular is a framework and has complete MVC functionality                                                                          |
     | React handles rendering on the server side                                                  | AngularJS renders only on the client side but Angular 2 and above renders on the server side                                       |
     | React uses JSX that looks like HTML in JS which can be confusing                            | Angular follows the template approach for HTML, which makes code shorter and easy to understand                                    |
     | React Native, which is a React type to build mobile applications are faster and more stable | Ionic, Angular&#x27;s mobile native app is relatively less stable and slower                                                            |
     | In React, data flows only in one way and hence debugging is easy                            | In Angular, data flows both way i.e it has two-way data binding between children and parent and hence debugging is often difficult |

**Note:** The above list of differences are purely opinionated and it vary based on the professional experience. But they are helpful as base parameters.

**[⬆ Back to Top](#table-of-contents)**

149. ### Why React tab is not showing up in DevTools?

     When the page loads, _React DevTools_ sets a global named `__REACT_DEVTOOLS_GLOBAL_HOOK__`, then React communicates with that hook during initialization. If the website is not using React or if React fails to communicate with DevTools then it won&#x27;t show up the tab.

**[⬆ Back to Top](#table-of-contents)**

150. ### What are Styled Components?

     `styled-components` is a JavaScript library for styling React applications. It removes the mapping between styles and components, and lets you write actual CSS augmented with JavaScript.

**[⬆ Back to Top](#table-of-contents)**

151. ### Give an example of Styled Components?

     Lets create `&lt;Title&gt;` and `&lt;Wrapper&gt;` components with specific styles for each.

     ```javascript
     import React from &quot;md1/react&quot;;
     import styled from &quot;styled-components&quot;;

     // Create a &lt;Title&gt; component that renders an &lt;h1&gt; which is centered, red and sized at 1.5em
     const Title = styled.h1`
       font-size: 1.5em;
       text-align: center;
       color: palevioletred;
     `;

     // Create a &lt;Wrapper&gt; component that renders a &lt;section&gt; with some padding and a papayawhip background
     const Wrapper = styled.section`
       padding: 4em;
       background: papayawhip;
     `;
     ```

     These two variables, `Title` and `Wrapper`, are now components that you can render just like any other react component.

     ```jsx harmony
     &lt;Wrapper&gt;
       &lt;Title&gt;{&quot;Lets start first styled component!&quot;}&lt;/Title&gt;
     &lt;/Wrapper&gt;
     ```

**[⬆ Back to Top](#table-of-contents)**

152. ### What is Relay?

     Relay is a JavaScript framework for providing a data layer and client-server communication to web applications using the React view layer.

**[⬆ Back to Top](#table-of-contents)**

## Miscellaneous

153. ### What are the main features of Reselect library?

     Let&#x27;s see the main features of Reselect library,

     1. Selectors can compute derived data, allowing Redux to store the minimal possible state.
     2. Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
     3. Selectors are composable. They can be used as input to other selectors.

154. #### Give an example of Reselect usage?

     Let&#x27;s take calculations and different amounts of a shipment order with the simplified usage of Reselect:

     ```javascript
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
     ```

**[⬆ Back to Top](#table-of-contents)**

155. ### Can Redux only be used with React?

     Redux can be used as a data store for any UI layer. The most common usage is with React and React Native, but there are bindings available for Angular, Angular 2, Vue, Mithril, and more. Redux simply provides a subscription mechanism which can be used by any other code.

**[⬆ Back to Top](#table-of-contents)**

156. ### Do you need to have a particular build tool to use Redux?

     Redux is originally written in ES6 and transpiled for production into ES5 with Webpack and Babel. You should be able to use it regardless of your JavaScript build process. Redux also offers a UMD build that can be used directly without any build process at all.

**[⬆ Back to Top](#table-of-contents)**

157. ### How Redux Form `initialValues` get updated from state?

     You need to add `enableReinitialize : true` setting.

     ```javascript
     const InitializeFromStateForm = reduxForm({
       form: &quot;initializeFromState&quot;,
       enableReinitialize: true,
     })(UserEdit);
     ```

     If your `initialValues` prop gets updated, your form will update too.

**[⬆ Back to Top](#table-of-contents)**

158. ### How React PropTypes allow different types for one prop?

     You can use `oneOfType()` method of `PropTypes`.

     For example, the height property can be defined with either `string` or `number` type as below:

     ```javascript
     Component.propTypes = {
       size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
     };
     ```

**[⬆ Back to Top](#table-of-contents)**

159. ### Can I import an SVG file as react component?

     You can import SVG directly as component instead of loading it as a file. This feature is available with `react-scripts@2.0.0` and higher.

     ```jsx harmony
     import { ReactComponent as Logo } from &quot;./logo.svg&quot;;

     const App = () =&gt; (
       &lt;div&gt;
         {/* Logo is an actual react component */}
         &lt;Logo /&gt;
       &lt;/div&gt;
     );
     ```

     **Note**: Don&#x27;t forget about the curly braces in the import.

**[⬆ Back to Top](#table-of-contents)**

160. ### What is render hijacking in react?

     The concept of render hijacking is the ability to control what a component will output from another component. It means that you decorate your component by wrapping it into a Higher-Order component. By wrapping, you can inject additional props or make other changes, which can cause changing logic of rendering. It does not actually enable hijacking, but by using HOC you make your component behave differently.

**[⬆ Back to Top](#table-of-contents)**

161. ### How to pass numbers to React component?

     We can pass `numbers` as `props` to React component using curly braces `{}` where as `strings` in double quotes `&quot;&quot;` or single quotes `&#x27;&#x27;`

     ```jsx
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
     ```

**[⬆ Back to Top](#table-of-contents)**

162. ### Do I need to keep all my state into Redux? Should I ever use react internal state?

     It is up to the developer&#x27;s decision, i.e., it is developer&#x27;s job to determine what kinds of state make up your application, and where each piece of state should live. Some users prefer to keep every single piece of data in Redux, to maintain a fully serializable and controlled version of their application at all times. Others prefer to keep non-critical or UI state, such as “is this dropdown currently open”, inside a component&#x27;s internal state.

     Below are the thumb rules to determine what kind of data should be put into Redux

     1. Do other parts of the application care about this data?
     2. Do you need to be able to create further derived data based on this original data?
     3. Is the same data being used to drive multiple components?
     4. Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?
     5. Do you want to cache the data (i.e, use what&#x27;s in state if it&#x27;s already there instead of re-requesting it)?

**[⬆ Back to Top](#table-of-contents)**

163. ### What is the purpose of registerServiceWorker in React?

     React creates a service worker for you without any configuration by default. The service worker is a web API that helps you cache your assets and other files so that when the user is offline or on a slow network, he/she can still see results on the screen, as such, it helps you build a better user experience, that&#x27;s what you should know about service worker for now. It&#x27;s all about adding offline capabilities to your site.

     ```jsx
     import React from &quot;md1/react&quot;;
     import ReactDOM from &quot;react-dom&quot;;
     import App from &quot;./App&quot;;
     import registerServiceWorker from &quot;./registerServiceWorker&quot;;

     ReactDOM.render(&lt;App /&gt;, document.getElementById(&quot;root&quot;));
     registerServiceWorker();
     ```

**[⬆ Back to Top](#table-of-contents)**

164. ### What is React memo function?

     Class components can be restricted from re-rendering when their input props are the same using **PureComponent or shouldComponentUpdate**. Now you can do the same with function components by wrapping them in **React.memo**.

     ```jsx
     const MyComponent = React.memo(function MyComponent(props) {
       /* only rerenders if props change */
     });
     ```

**[⬆ Back to Top](#table-of-contents)**

165. ### What is React lazy function?

     The `React.lazy` function lets you render a dynamic import as a regular component. It will automatically load the bundle containing the `OtherComponent` when the component gets rendered. This must return a Promise which resolves to a module with a default export containing a React component.

     ```jsx
     const OtherComponent = React.lazy(() =&gt; import(&quot;./OtherComponent&quot;));

     function MyComponent() {
       return (
         &lt;div&gt;
           &lt;OtherComponent /&gt;
         &lt;/div&gt;
       );
     }
     ```

     **Note:**
     `React.lazy` and `Suspense` is not yet available for server-side rendering. If you want to do code-splitting in a server rendered app, we still recommend React Loadable.

**[⬆ Back to Top](#table-of-contents)**

166. ### How to prevent unnecessary updates using setState?

     You can compare the current value of the state with an existing state value and decide whether to rerender the page or not. If the values are the same then you need to return **null** to stop re-rendering otherwise return the latest state value.

     For example, the user profile information is conditionally rendered as follows,

     ```jsx
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
     ```

**[⬆ Back to Top](#table-of-contents)**

167. ### How do you render Array, Strings and Numbers in React 16 Version?

     **Arrays**: Unlike older releases, you don&#x27;t need to make sure **render** method return a single element in React16. You are able to return multiple sibling elements without a wrapping element by returning an array.

     For example, let us take the below list of developers,

     ```jsx
     const ReactJSDevs = () =&gt; {
       return [
         &lt;li key=&quot;1&quot;&gt;John&lt;/li&gt;,
         &lt;li key=&quot;2&quot;&gt;Jackie&lt;/li&gt;,
         &lt;li key=&quot;3&quot;&gt;Jordan&lt;/li&gt;,
       ];
     };
     ```

     You can also merge this array of items in another array component.

     ```jsx
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
     ```

     **Strings and Numbers:** You can also return string and number type from the render method.

     ```jsx
     render() {
      return &#x27;Welcome to ReactJS questions&#x27;;
     }
     // Number
     render() {
      return 2018;
     }
     ```

**[⬆ Back to Top](#table-of-contents)**

168. ### What are hooks?

     Hooks is a special JavaScript function that allows you use state and other React features without writing a class. This pattern has been introduced as a new feature in React 16.8 and helped to isolate the stateful logic from the components.

     Let&#x27;s see an example of useState hook:

     ```jsx
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
     ```

     **Note:** Hooks can be used inside an existing function component without rewriting the component.

**[⬆ Back to Top](#table-of-contents)**

169. ### What rules need to be followed for hooks?

     You need to follow two rules in order to use hooks,

     1. **Call Hooks only at the top level of your react functions:** You should always use hooks at the top level of react function before any early returns. i.e, You shouldn’t call Hooks inside loops, conditions, or nested functions. This will ensure that Hooks are called in the same order each time a component renders and it preserves the state of Hooks between multiple re-renders due to useState and useEffect calls.
     2. **Call Hooks from React Functions only:** You shouldn’t call Hooks from regular JavaScript functions or class components. Instead, you should call them from either function components or custom hooks.

**[⬆ Back to Top](#table-of-contents)**

170. ### How to ensure hooks followed the rules in your project?
     React team released an ESLint plugin called **eslint-plugin-react-hooks** that enforces Hook&#x27;s two rules. It is part of Hooks API. You can add this plugin to your project using the below command,
     ```javascript
     npm install eslint-plugin-react-hooks --save-dev
     ```
     And apply the below config in your ESLint config file,
     ```javascript
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
     ```
     The recommended `eslint-config-react-app` preset already includes the hooks rules of this plugin.
     For example, the linter enforce proper naming convention for hooks. If you rename your custom hooks which as prefix &quot;use&quot; to something else then linter won&#x27;t allow you to call built-in hooks such as useState, useEffect etc inside of your custom hook anymore.

     **Note:** This plugin is intended to use in Create React App by default.

**[⬆ Back to Top](#table-of-contents)**

171. ### What are the differences between Flux and Redux?

     Below are the major differences between Flux and Redux

     | Flux                                           | Redux                                      |
     | ---------------------------------------------- | ------------------------------------------ |
     | State is mutable                               | State is immutable                         |
     | The Store contains both state and change logic | The Store and change logic are separate    |
     | There are multiple stores exist                | There is only one store exist              |
     | All the stores are disconnected and flat       | Single store with hierarchical reducers    |
     | It has a singleton dispatcher                  | There is no concept of dispatcher          |
     | React components subscribe to the store        | Container components uses connect function |

**[⬆ Back to Top](#table-of-contents)**

172. ### What are the benefits of React Router V4?

     Below are the main benefits of React Router V4 module,

     1. In React Router v4(version 4), the API is completely about components. A router can be visualized as a single component(`&lt;BrowserRouter&gt;`) which wraps specific child router components(`&lt;Route&gt;`).
     2. You don&#x27;t need to manually set history. The router module will take care history by wrapping routes with `&lt;BrowserRouter&gt;` component.
     3. The application size is reduced by adding only the specific router module(Web, core, or native)

**[⬆ Back to Top](#table-of-contents)**

173. ### Can you describe about componentDidCatch lifecycle method signature?

     The **componentDidCatch** lifecycle method is invoked after an error has been thrown by a descendant component. The method receives two parameters,

     1. error: - The error object which was thrown
     2. info: - An object with a componentStack key contains the information about which component threw the error.

     The method structure would be as follows

     ```javascript
     componentDidCatch(error, info);
     ```

**[⬆ Back to Top](#table-of-contents)**

174. ### In which scenarios error boundaries do not catch errors?

     Below are the cases in which error boundaries doesn&#x27;t work,

     1. Inside Event handlers
     2. Asynchronous code using **setTimeout or requestAnimationFrame** callbacks
     3. During Server side rendering
     4. When errors thrown in the error boundary code itself

**[⬆ Back to Top](#table-of-contents)**

175. ### What is the behavior of uncaught errors in react 16?
     In React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree. The reason behind this decision is that it is worse to leave corrupted UI in place than to completely remove it. For example, it is worse for a payments app to display a wrong amount than to render nothing.

**[⬆ Back to Top](#table-of-contents)**

176. ### What is the proper placement for error boundaries?
     The granularity of error boundaries usage is up to the developer based on project needs. You can follow either of these approaches,
     1. You can wrap top-level route components to display a generic error message for the entire application.
     2. You can also wrap individual components in an error boundary to protect them from crashing the rest of the application.

**[⬆ Back to Top](#table-of-contents)**

177. ### What is the benefit of component stack trace from error boundary?

     Apart from error messages and javascript stack, React16 will display the component stack trace with file names and line numbers using error boundary concept.

     For example, BuggyCounter component displays the component stack trace as below,

     ![stacktrace](images/error_boundary.png)

**[⬆ Back to Top](#table-of-contents)**

178. ### What are default props?

     The _defaultProps_ can be defined as a property on the component to set the default values for the props. These default props are used when props not supplied(i.e., undefined props), but not for null props. That means, If you provide null value then it remains null value.

     For example, let us create color default prop for the button component,

     ```javascript
     function MyButton {
       // ...
     }

     MyButton.defaultProps = {
       color: &quot;red&quot;,
     };
     ```

     If `props.color` is not provided then it will set the default value to &#x27;red&#x27;. i.e, Whenever you try to access the color prop it uses the default value

     ```javascript
     function MyButton() {
        return &lt;MyButton /&gt; ; // props.color will contain red value
      }
     ```

**[⬆ Back to Top](#table-of-contents)**

179. ### What is the purpose of displayName class property?

     The displayName string is used in debugging messages. Usually, you don’t need to set it explicitly because it’s inferred from the name of the function or class that defines the component. You might want to set it explicitly if you want to display a different name for debugging purposes or when you create a higher-order component.

     For example, To ease debugging, choose a display name that communicates that it’s the result of a withSubscription HOC.

     ```javascript
     function withSubscription(WrappedComponent) {
       class WithSubscription extends React.Component {
         /* ... */
       }
       WithSubscription.displayName = `WithSubscription(${getDisplayName(
         WrappedComponent
       )})`;
       return WithSubscription;
     }
     function getDisplayName(WrappedComponent) {
       return (
         WrappedComponent.displayName || WrappedComponent.name || &quot;Component&quot;
       );
     }
     ```

**[⬆ Back to Top](#table-of-contents)**

180. ### What is the browser support for react applications?
     React supports all popular browsers, including Internet Explorer 9 and above, although some polyfills are required for older browsers such as IE 9 and IE 10. If you use **es5-shim and es5-sham** polyfill then it even support old browsers that doesn&#x27;t support ES5 methods.

**[⬆ Back to Top](#table-of-contents)**

181. ### What is code-splitting?

     Code-Splitting is a feature supported by bundlers like Webpack and Browserify which can create multiple bundles that can be dynamically loaded at runtime. The react project supports code splitting via dynamic import() feature.

     For example, in the below code snippets, it will make moduleA.js and all its unique dependencies as a separate chunk that only loads after the user clicks the &#x27;Load&#x27; button.
     **moduleA.js**

     ```javascript
     const moduleA = &quot;Hello&quot;;

     export { moduleA };
     ```

     **App.js**

     ```javascript
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
     ```

    &lt;details&gt;&lt;summary&gt;&lt;b&gt;See Class&lt;/b&gt;&lt;/summary&gt;
    &lt;p&gt;
     ```javascript
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
     ```
    &lt;/p&gt;
    &lt;/details&gt;

**[⬆ Back to Top](#table-of-contents)**

182. ### What are Keyed Fragments?

     The Fragments declared with the explicit &lt;React.Fragment&gt; syntax may have keys. The general use case is mapping a collection to an array of fragments as below,

     ```javascript
     function Glossary(props) {
       return (
         &lt;dl&gt;
           {props.items.map((item) =&gt; (
             // Without the `key`, React will fire a key warning
             &lt;React.Fragment key={item.id}&gt;
               &lt;dt&gt;{item.term}&lt;/dt&gt;
               &lt;dd&gt;{item.description}&lt;/dd&gt;
             &lt;/React.Fragment&gt;
           ))}
         &lt;/dl&gt;
       );
     }
     ```

     **Note:** key is the only attribute that can be passed to Fragment. In the future, there might be a support for additional attributes, such as event handlers.

**[⬆ Back to Top](#table-of-contents)**

183. ### Does React support all HTML attributes?

     As of React 16, both standard or custom DOM attributes are fully supported. Since React components often take both custom and DOM-related props, React uses the camelCase convention just like the DOM APIs.

     Let us take few props with respect to standard HTML attributes,

     ```javascript
     &lt;div tabIndex=&quot;-1&quot; /&gt;      // Just like node.tabIndex DOM API
     &lt;div className=&quot;Button&quot; /&gt; // Just like node.className DOM API
     &lt;input readOnly={true} /&gt;  // Just like node.readOnly DOM API
     ```

     These props work similarly to the corresponding HTML attributes, with the exception of the special cases. It also support all SVG attributes.

**[⬆ Back to Top](#table-of-contents)**

184. ### When component props defaults to true?

     If you pass no value for a prop, it defaults to true. This behavior is available so that it matches the behavior of HTML.

     For example, below expressions are equivalent,

     ```javascript
     &lt;MyInput autocomplete /&gt;

     &lt;MyInput autocomplete={true} /&gt;
     ```

     **Note:** It is not recommended to use this approach because it can be confused with the ES6 object shorthand (example, `{name}` which is short for `{name: name}`)

**[⬆ Back to Top](#table-of-contents)**

185. ### What is NextJS and major features of it?

     Next.js is a popular and lightweight framework for static and server‑rendered applications built with React. It also provides styling and routing solutions. Below are the major features provided by NextJS,

     1. Server-rendered by default
     2. Automatic code splitting for faster page loads
     3. Simple client-side routing (page based)
     4. Webpack-based dev environment which supports (HMR)
     5. Able to implement with Express or any other Node.js HTTP server
     6. Customizable with your own Babel and Webpack configurations

**[⬆ Back to Top](#table-of-contents)**

186. ### How do you pass an event handler to a component?

     You can pass event handlers and other functions as props to child components. The functions can be passed to child component as below,

     ```jsx
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
     ```

**[⬆ Back to Top](#table-of-contents)**

187. ### How to prevent a function from being called multiple times?

     If you use an event handler such as **onClick or onScroll** and want to prevent the callback from being fired too quickly, then you can limit the rate at which callback is executed. This can be achieved in the below possible ways,

     1. **Throttling:** Changes based on a time based frequency. For example, it can be used using \_.throttle lodash function
     2. **Debouncing:** Publish changes after a period of inactivity. For example, it can be used using \_.debounce lodash function
     3. **RequestAnimationFrame throttling:** Changes based on requestAnimationFrame. For example, it can be used using raf-schd lodash function

**[⬆ Back to Top](#table-of-contents)**

188. ### How JSX prevents Injection Attacks?

     React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered.

     For example, you can embed user input as below,

     ```javascript
     const name = response.potentiallyMaliciousInput;
     const element = &lt;h1&gt;{name}&lt;/h1&gt;;
     ```

     This way you can prevent XSS(Cross-site-scripting) attacks in the application.

**[⬆ Back to Top](#table-of-contents)**

189. ### How do you update rendered elements?

     You can update UI(represented by rendered element) by passing the newly created element to ReactDOM&#x27;s render method.

     For example, lets take a ticking clock example, where it updates the time by calling render method multiple times,

     ```javascript
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
     ```

**[⬆ Back to Top](#table-of-contents)**

190. ### How do you say that props are readonly?

     When you declare a component as a function or a class, it must never modify its own props.

     Let us take a below capital function,

     ```javascript
     function capital(amount, interest) {
       return amount + interest;
     }
     ```

     The above function is called “pure” because it does not attempt to change their inputs, and always return the same result for the same inputs. Hence, React has a single rule saying &quot;All React components must act like pure functions with respect to their props.&quot;

**[⬆ Back to Top](#table-of-contents)**

191. ### What are the conditions to safely use the index as a key?

     There are three conditions to make sure, it is safe use the index as a key.

     1. The list and items are static– they are not computed and do not change
     2. The items in the list have no ids
     3. The list is never reordered or filtered.

**[⬆ Back to Top](#table-of-contents)**

192. ### Should keys be globally unique?

     The keys used within arrays should be unique among their siblings but they don’t need to be globally unique. i.e, You can use the same keys with two different arrays.

     For example, the below `Book` component uses two arrays with different arrays,

     ```javascript
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
     ```

**[⬆ Back to Top](#table-of-contents)**

193. ### What is the popular choice for form handling?

     `Formik` is a form library for react which provides solutions such as validation, keeping track of the visited fields, and handling form submission.

     In detail, You can categorize them as follows,

     1. Getting values in and out of form state
     2. Validation and error messages
     3. Handling form submission

     It is used to create a scalable, performant, form helper with a minimal API to solve annoying stuff.

**[⬆ Back to Top](#table-of-contents)**

194. ### What are the advantages of formik over redux form library?

     Below are the main reasons to recommend formik over redux form library,

     1. The form state is inherently short-term and local, so tracking it in Redux (or any kind of Flux library) is unnecessary.
     2. Redux-Form calls your entire top-level Redux reducer multiple times ON EVERY SINGLE KEYSTROKE. This way it increases input latency for large apps.
     3. Redux-Form is 22.5 kB minified gzipped whereas Formik is 12.7 kB

**[⬆ Back to Top](#table-of-contents)**

195. ### Why are you not required to use inheritance?
     In React, it is recommended to use composition over inheritance to reuse code between components. Both Props and composition give you all the flexibility you need to customize a component’s look and behavior explicitly and safely.
     Whereas, If you want to reuse non-UI functionality between components, it is suggested to extract it into a separate JavaScript module. Later components import it and use that function, object, or class, without extending it.

**[⬆ Back to Top](#table-of-contents)**

196. ### Can I use web components in react application?

     Yes, you can use web components in a react application. Even though many developers won&#x27;t use this combination, it may require especially if you are using third-party UI components that are written using Web Components.

     For example, let us use `Vaadin` date picker web component as below,

     ```javascript
     import &quot;./App.css&quot;;
     import &quot;@vaadin/vaadin-date-picker&quot;;
     export default function App() {
         return (
           &lt;div className=&quot;App&quot;&gt;
             &lt;vaadin-date-picker label=&quot;When were you born?&quot;&gt;&lt;/vaadin-date-picker&gt;
           &lt;/div&gt;
         );
     }
     ```

**[⬆ Back to Top](#table-of-contents)**

197. ### What is dynamic import?

     You can achieve code-splitting in your app using dynamic import.

     Let&#x27;s take an example of addition,

     1. **Normal Import**

     ```javascript
     import { add } from &quot;./math&quot;;
     console.log(add(10, 20));
     ```

     2. **Dynamic Import**

     ```javascript
     import(&quot;./math&quot;).then((math) =&gt; {
       console.log(math.add(10, 20));
     });
     ```

**[⬆ Back to Top](#table-of-contents)**

198. ### What are loadable components?

     With the release of React 18, React.lazy and Suspense are now available for server-side rendering. However, prior to React 18, it was recommended to use Loadable Components for code-splitting in a server-side rendered app because React.lazy and Suspense were not available for server-side rendering. Loadable Components lets you render a dynamic import as a regular component. For example, you can use Loadable Components to load the OtherComponent in a separate bundle like this:

     ```javascript
     import loadable from &quot;@loadable/component&quot;;

     const OtherComponent = loadable(() =&gt; import(&quot;./OtherComponent&quot;));

     function MyComponent() {
       return (
         &lt;div&gt;
           &lt;OtherComponent /&gt;
         &lt;/div&gt;
       );
     }
     ```

     Now OtherComponent will be loaded in a separated bundle
     Loadable Components provides additional benefits beyond just code-splitting, such as automatic code reloading, error handling, and preloading. By using Loadable Components, you can ensure that your application loads quickly and efficiently, providing a better user experience for your users.

**[⬆ Back to Top](#table-of-contents)**

199. ### What is suspense component?

     If the module containing the dynamic import is not yet loaded by the time parent component renders, you must show some fallback content while you’re waiting for it to load using a loading indicator. This can be done using **Suspense** component.

     For example, the below code uses suspense component,

     ```javascript
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
     ```

     As mentioned in the above code, Suspense is wrapped above the lazy component.

**[⬆ Back to Top](#table-of-contents)**

200. ### What is route based code splitting?

     One of the best place to do code splitting is with routes. The entire page is going to re-render at once so users are unlikely to interact with other elements in the page at the same time. Due to this, the user experience won&#x27;t be disturbed.

     Let us take an example of route based website using libraries like React Router with React.lazy,

     ```javascript
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
     ```

     In the above code, the code splitting will happen at each route level.

**[⬆ Back to Top](#table-of-contents)**

201. ### What is the purpose of default value in context?

     The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them.

     Below code snippet provides default theme value as Luna.

     ```javascript
     const MyContext = React.createContext(defaultValue);
     ```

**[⬆ Back to Top](#table-of-contents)**

202. ### What is diffing algorithm?

     React needs to use algorithms to find out how to efficiently update the UI to match the most recent tree. The diffing algorithms is generating the minimum number of operations to transform one tree into another. However, the algorithms have a complexity in the order of O(n³) where n is the number of elements in the tree.

     In this case, displaying 1000 elements would require in the order of one billion comparisons. This is far too expensive. Instead, React implements a heuristic O(n) algorithm based on two assumptions:

     1. Two elements of different types will produce different trees.
     2. The developer can hint at which child elements may be stable across different renders with a key prop.

**[⬆ Back to Top](#table-of-contents)**

203. ### What are the rules covered by diffing algorithm?

     When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements. It covers the below rules during reconciliation algorithm,

     1. **Elements Of Different Types:**
        Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch. For example, elements &lt;a&gt; to &lt;img&gt;, or from &lt;Article&gt; to &lt;Comment&gt; of different types lead a full rebuild.
     2. **DOM Elements Of The Same Type:**
        When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes. Lets take an example with same DOM elements except className attribute,

        ```javascript
        &lt;div className=&quot;show&quot; title=&quot;ReactJS&quot; /&gt;

        &lt;div className=&quot;hide&quot; title=&quot;ReactJS&quot; /&gt;
        ```

     3. **Component Elements Of The Same Type:**
        When a component updates, the instance stays the same, so that state is maintained across renders. React updates the props of the underlying component instance to match the new element, and calls componentWillReceiveProps() and componentWillUpdate() on the underlying instance. After that, the render() method is called and the diff algorithm recurses on the previous result and the new result.
     4. **Recursing On Children:**
        when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference. For example, when adding an element at the end of the children, converting between these two trees works well.

        ```javascript
        &lt;ul&gt;
          &lt;li&gt;first&lt;/li&gt;
          &lt;li&gt;second&lt;/li&gt;
        &lt;/ul&gt;

        &lt;ul&gt;
          &lt;li&gt;first&lt;/li&gt;
          &lt;li&gt;second&lt;/li&gt;
          &lt;li&gt;third&lt;/li&gt;
        &lt;/ul&gt;

        ```

     5. **Handling keys:**
        React supports a key attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree. For example, adding a key can make the tree conversion efficient,

     ```javascript
     &lt;ul&gt;
       &lt;li key=&quot;2015&quot;&gt;Duke&lt;/li&gt;
       &lt;li key=&quot;2016&quot;&gt;Villanova&lt;/li&gt;
     &lt;/ul&gt;

     &lt;ul&gt;
       &lt;li key=&quot;2014&quot;&gt;Connecticut&lt;/li&gt;
       &lt;li key=&quot;2015&quot;&gt;Duke&lt;/li&gt;
       &lt;li key=&quot;2016&quot;&gt;Villanova&lt;/li&gt;
     &lt;/ul&gt;
     ```

**[⬆ Back to Top](#table-of-contents)**

204. ### When do you need to use refs?

     There are few use cases to go for refs,

     1. Managing focus, text selection, or media playback.
     2. Triggering imperative animations.
     3. Integrating with third-party DOM libraries.

**[⬆ Back to Top](#table-of-contents)**

205. ### Must prop be named as render for render props?

     Even though the pattern named render props, you don’t have to use a prop named render to use this pattern. i.e, Any prop that is a function that a component uses to know what to render is technically a “render prop”. Lets take an example with the children prop for render props,

     ```javascript
     &lt;Mouse
       children={(mouse) =&gt; (
         &lt;p&gt;
           The mouse position is {mouse.x}, {mouse.y}
         &lt;/p&gt;
       )}
     /&gt;
     ```

     Actually children prop doesn’t need to be named in the list of “attributes” in JSX element. Instead, you can keep it directly inside element,

     ```javascript
     &lt;Mouse&gt;
       {(mouse) =&gt; (
         &lt;p&gt;
           The mouse position is {mouse.x}, {mouse.y}
         &lt;/p&gt;
       )}
     &lt;/Mouse&gt;
     ```

     While using this above technique(without any name), explicitly state that children should be a function in your propTypes.

     ```javascript
     Mouse.propTypes = {
       children: PropTypes.func.isRequired,
     };
     ```

**[⬆ Back to Top](#table-of-contents)**

206. ### What are the problems of using render props with pure components?
     If you create a function inside a render method, it negates the purpose of pure component. Because the shallow prop comparison will always return false for new props, and each render in this case will generate a new value for the render prop. You can solve this issue by defining the render function as instance method.

**[⬆ Back to Top](#table-of-contents)**

207. ### What is windowing technique?
     Windowing is a technique that only renders a small subset of your rows at any given time, and can dramatically reduce the time it takes to re-render the components as well as the number of DOM nodes created. If your application renders long lists of data then this technique is recommended. Both react-window and react-virtualized are popular windowing libraries which provides several reusable components for displaying lists, grids, and tabular data.

**[⬆ Back to Top](#table-of-contents)**

208. ### How do you print falsy values in JSX?

     The falsy values such as false, null, undefined, and true are valid children but they don&#x27;t render anything. If you still want to display them then you need to convert it to string. Let&#x27;s take an example on how to convert to a string,

     ```javascript
     &lt;div&gt;My JavaScript variable is {String(myVariable)}.&lt;/div&gt;
     ```

**[⬆ Back to Top](#table-of-contents)**

209. ### What is the typical use case of portals?

     React portals are very useful when a parent component has overflow: hidden or has properties that affect the stacking context (e.g. z-index, position, opacity) and you need to visually “break out” of its container.

     For example, dialogs, global message notifications, hovercards, and tooltips.

**[⬆ Back to Top](#table-of-contents)**

210. ### How do you set default value for uncontrolled component?

     In React, the value attribute on form elements will override the value in the DOM. With an uncontrolled component, you might want React to specify the initial value, but leave subsequent updates uncontrolled. To handle this case, you can specify a **defaultValue** attribute instead of **value**.

     ```javascript
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
     ```

     The same applies for `select` and `textArea` inputs. But you need to use **defaultChecked** for `checkbox` and `radio` inputs.

**[⬆ Back to Top](#table-of-contents)**

211. ### What is your favorite React stack?
     Even though the tech stack varies from developer to developer, the most popular stack is used in react boilerplate project code. It mainly uses Redux and redux-saga for state management and asynchronous side-effects, react-router for routing purpose, styled-components for styling react components, axios for invoking REST api, and other supported stack such as webpack, reselect, ESNext, Babel.
     You can clone the project https://github.com/react-boilerplate/react-boilerplate and start working on any new react project.

**[⬆ Back to Top](#table-of-contents)**

212. ### What is the difference between Real DOM and Virtual DOM?

     Below are the main differences between Real DOM and Virtual DOM,

     | Real DOM                             | Virtual DOM                          |
     | ------------------------------------ | ------------------------------------ |
     | Updates are slow                     | Updates are fast                     |
     | DOM manipulation is very expensive.  | DOM manipulation is very easy        |
     | You can update HTML directly.        | You Can’t directly update HTML       |
     | It causes too much of memory wastage | There is no memory wastage           |
     | Creates a new DOM if element updates | It updates the JSX if element update |

**[⬆ Back to Top](#table-of-contents)**

213. ### How to add Bootstrap to a react application?

     Bootstrap can be added to your React app in a three possible ways,

     1. Using the Bootstrap CDN:
        This is the easiest way to add bootstrap. Add both bootstrap CSS and JS resources in a head tag.
     2. Bootstrap as Dependency:
        If you are using a build tool or a module bundler such as Webpack, then this is the preferred option for adding Bootstrap to your React application
        ```javascript
        npm install bootstrap
        ```
     3. React Bootstrap Package:
        In this case, you can add Bootstrap to our React app is by using a package that has rebuilt Bootstrap components to work particularly as React components. Below packages are popular in this category,
        1. react-bootstrap
        2. reactstrap

**[⬆ Back to Top](#table-of-contents)**

214. ### Can you list down top websites or applications using react as front end framework?

     Below are the `top 10 websites` using React as their front-end framework,

     1. Facebook
     2. Uber
     3. Instagram
     4. WhatsApp
     5. Khan Academy
     6. Airbnb
     7. Dropbox
     8. Flipboard
     9. Netflix
     10. PayPal

**[⬆ Back to Top](#table-of-contents)**

215. ### Is it recommended to use CSS In JS technique in React?
     React does not have any opinion about how styles are defined but if you are a beginner then good starting point is to define your styles in a separate \*.css file as usual and refer to them using className. This functionality is not part of React but came from third-party libraries. But If you want to try a different approach(CSS-In-JS) then styled-components library is a good option.

**[⬆ Back to Top](#table-of-contents)**

216. ### Do I need to rewrite all my class components with hooks?
     No. But you can try Hooks in a few components(or new components) without rewriting any existing code. Because there are no plans to remove classes in ReactJS.

**[⬆ Back to Top](#table-of-contents)**

217. ### How to fetch data with React Hooks?

     The effect hook called `useEffect` can be used to fetch data from an API and to set the data in the local state of the component with the useState hook’s update function.

     Here is an example of fetching a list of react articles from an API using fetch.

     ```javascript
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
     ```

     A popular way to simplify this is by using the library axios.

     We provided an empty array as second argument to the useEffect hook to avoid activating it on component updates. This way, it only fetches on component mount.

**[⬆ Back to Top](#table-of-contents)**

218. ### Is Hooks cover all use cases for classes?
     Hooks doesn&#x27;t cover all use cases of classes but there is a plan to add them soon. Currently there are no Hook equivalents to the uncommon **getSnapshotBeforeUpdate** and **componentDidCatch** lifecycles yet.

**[⬆ Back to Top](#table-of-contents)**

219. ### What is the stable release for hooks support?

     React includes a stable implementation of React Hooks in 16.8 release for below packages

     1. React DOM
     2. React DOM Server
     3. React Test Renderer
     4. React Shallow Renderer

**[⬆ Back to Top](#table-of-contents)**

220. ### Why do we use array destructuring (square brackets notation) in `useState`?

     When we declare a state variable with `useState`, it returns a pair — an array with two items. The first item is the current value, and the second is a function that updates the value. Using [0] and [1] to access them is a bit confusing because they have a specific meaning. This is why we use array destructuring instead.

     For example, the array index access would look as follows:

     ```javascript
     var userStateVariable = useState(&quot;userProfile&quot;); // Returns an array pair
     var user = userStateVariable[0]; // Access first item
     var setUser = userStateVariable[1]; // Access second item
     ```

     Whereas with array destructuring the variables can be accessed as follows:

     ```javascript
     const [user, setUser] = useState(&quot;userProfile&quot;);
     ```

     **[⬆ Back to Top](#table-of-contents)**

221. ### What are the sources used for introducing hooks?

     Hooks got the ideas from several different sources. Below are some of them,

     1. Previous experiments with functional APIs in the react-future repository
     2. Community experiments with render prop APIs such as Reactions Component
     3. State variables and state cells in DisplayScript.
     4. Subscriptions in Rx.
     5. Reducer components in ReasonReact.

**[⬆ Back to Top](#table-of-contents)**

222. ### How do you access imperative API of web components?
     Web Components often expose an imperative API to implement its functions. You will need to use a **ref** to interact with the DOM node directly if you want to access imperative API of a web component. But if you are using third-party Web Components, the best solution is to write a React component that behaves as a **wrapper** for your Web Component.

**[⬆ Back to Top](#table-of-contents)**

223. ### What is formik?

     Formik is a small react form library that helps you with the three major problems,

     1. Getting values in and out of form state
     2. Validation and error messages
     3. Handling form submission

**[⬆ Back to Top](#table-of-contents)**

224. ### What are typical middleware choices for handling asynchronous calls in Redux?
     Some of the popular middleware choices for handling asynchronous calls in Redux eco system are `Redux Thunk, Redux Promise, Redux Saga`.

**[⬆ Back to Top](#table-of-contents)**

225. ### Do browsers understand JSX code?
     No, browsers can&#x27;t understand JSX code. You need a transpiler to convert your JSX to regular Javascript that browsers can understand. The most widely used transpiler right now is Babel.

**[⬆ Back to Top](#table-of-contents)**

226. ### Describe about data flow in react?
     React implements one-way reactive data flow using props which reduce boilerplate and is easier to understand than traditional two-way data binding.

**[⬆ Back to Top](#table-of-contents)**

227. ### What is MobX?
     MobX is a simple, scalable and battle tested state management solution for applying functional reactive programming (TFRP). For reactJs application, you need to install below packages,
     ```bash
     npm install mobx --save
     npm install mobx-react --save
     ```

**[⬆ Back to Top](#table-of-contents)**

228. ### What are the differences between Redux and MobX?

     Below are the main differences between Redux and MobX,

     | Topic         | Redux                                                         | MobX                                                                   |
     | ------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
     | Definition    | It is a javascript library for managing the application state | It is a library for reactively managing the state of your applications |
     | Programming   | It is mainly written in ES6                                   | It is written in JavaScript(ES5)                                       |
     | Data Store    | There is only one large store exist for data storage          | There is more than one store for storage                               |
     | Usage         | Mainly used for large and complex applications                | Used for simple applications                                           |
     | Performance   | Need to be improved                                           | Provides better performance                                            |
     | How it stores | Uses JS Object to store                                       | Uses observable to store the data                                      |

**[⬆ Back to Top](#table-of-contents)**

229. ### Should I learn ES6 before learning ReactJS?

     No, you don’t have to learn es2015/es6 to learn react. But you may find many resources or React ecosystem uses ES6 extensively. Let&#x27;s see some of the frequently used ES6 features,

     1. **Destructuring:** To get props and use them in a component

        ```javascript
        // in es 5
        var someData = this.props.someData;
        var dispatch = this.props.dispatch;

        // in es6
        const { someData, dispatch } = this.props;
        ```

     2. Spread operator: Helps in passing props down into a component

        ```javascript
        // in es 5
        &lt;SomeComponent someData={this.props.someData} dispatch={this.props.dispatch} /&gt;

        // in es6
        &lt;SomeComponent {...this.props} /&gt;
        ```

     3. Arrow functions: Makes compact syntax
        ```javascript
        // es 5
        var users = usersList.map(function (user) {
          return &lt;li&gt;{user.name}&lt;/li&gt;;
        });
        // es 6
        const users = usersList.map((user) =&gt; &lt;li&gt;{user.name}&lt;/li&gt;);
        ```

**[⬆ Back to Top](#table-of-contents)**

230. ### What is Concurrent Rendering?

     The Concurrent rendering makes React apps to be more responsive by rendering component trees without blocking the main UI thread. It allows React to interrupt a long-running render to handle a high-priority event. i.e, When you enabled concurrent Mode, React will keep an eye on other tasks that need to be done, and if there&#x27;s something with a higher priority it will pause what it is currently rendering and let the other task finish first. You can enable this in two ways,

     ```javascript
     // 1. Part of an app by wrapping with ConcurrentMode
     &lt;React.unstable_ConcurrentMode&gt;
       &lt;Something /&gt;
     &lt;/React.unstable_ConcurrentMode&gt;;

     // 2. Whole app using createRoot
     ReactDOM.unstable_createRoot(domNode).render(&lt;App /&gt;);
     ```

**[⬆ Back to Top](#table-of-contents)**

231. ### What is the difference between async mode and concurrent mode?
     Both refers the same thing. Previously concurrent Mode being referred to as &quot;Async Mode&quot; by React team. The name has been changed to highlight React’s ability to perform work on different priority levels. So it avoids the confusion from other approaches to Async Rendering.

**[⬆ Back to Top](#table-of-contents)**

232. ### Can I use javascript urls in react16.9?

     Yes, you can use javascript: URLs but it will log a warning in the console. Because URLs starting with javascript: are dangerous by including unsanitized output in a tag like `&lt;a href&gt;` and create a security hole.

     ```javascript
     const companyProfile = {
       website: &quot;javascript: alert(&#x27;Your website is hacked&#x27;)&quot;,
     };
     // It will log a warning
     &lt;a href={companyProfile.website}&gt;More details&lt;/a&gt;;
     ```

     Remember that the future versions will throw an error for javascript URLs.

**[⬆ Back to Top](#table-of-contents)**

233. ### What is the purpose of eslint plugin for hooks?

     The ESLint plugin enforces rules of Hooks to avoid bugs. It assumes that any function starting with ”use” and a capital letter right after it is a Hook. In particular, the rule enforces that,

     1. Calls to Hooks are either inside a PascalCase function (assumed to be a component) or another useSomething function (assumed to be a custom Hook).
     2. Hooks are called in the same order on every render.

**[⬆ Back to Top](#table-of-contents)**

234. ### What is the difference between Imperative and Declarative in React?

     Imagine a simple UI component, such as a &quot;Like&quot; button. When you tap it, it turns blue if it was previously grey, and grey if it was previously blue.

     The imperative way of doing this would be:

     ```javascript
     if (user.likes()) {
       if (hasBlue()) {
         removeBlue();
         addGrey();
       } else {
         removeGrey();
         addBlue();
       }
     }
     ```

     Basically, you have to check what is currently on the screen and handle all the changes necessary to redraw it with the current state, including undoing the changes from the previous state. You can imagine how complex this could be in a real-world scenario.

     In contrast, the declarative approach would be:

     ```javascript
     if (this.state.liked) {
       return &lt;blueLike /&gt;;
     } else {
       return &lt;greyLike /&gt;;
     }
     ```

     Because the declarative approach separates concerns, this part of it only needs to handle how the UI should look in a sepecific state, and is therefore much simpler to understand.

**[⬆ Back to Top](#table-of-contents)**

235. ### What are the benefits of using typescript with reactjs?

     Below are some of the benefits of using typescript with Reactjs,

     1. It is possible to use latest JavaScript features
     2. Use of interfaces for complex type definitions
     3. IDEs such as VS Code was made for TypeScript
     4. Avoid bugs with the ease of readability and Validation

     **[⬆ Back to Top](#table-of-contents)**

236. ### How do you make sure that user remains authenticated on page refresh while using Context API State Management?
     When a user logs in and reload, to persist the state generally we add the load user action in the useEffect hooks in the main App.js. While using Redux, loadUser action can be easily accessed.

      **App.js**

      ```js
      import { loadUser } from &quot;../actions/auth&quot;;
      store.dispatch(loadUser());
      ```

      - But while using **Context API**, to access context in App.js, wrap the AuthState in index.js so that App.js can access the auth context. Now whenever the page reloads, no matter what route you are on, the user will be authenticated as **loadUser** action will be triggered on each re-render.

     **index.js**

      ```js
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
      ```

      **App.js**

      ```js
      const authContext = useContext(AuthContext);

      const { loadUser } = authContext;

      useEffect(() =&gt; {
        loadUser();
      }, []);
      ```

      **loadUser**

      ```js
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
      ```

**[⬆ Back to Top](#table-of-contents)**

237. ### What are the benefits of new JSX transform?

     There are three major benefits of new JSX transform,

     1. It is possible to use JSX without importing React packages
     2. The compiled output might improve the bundle size in a small amount
     3. The future improvements provides the flexibility to reduce the number of concepts to learn React.

**[⬆ Back to Top](#table-of-contents)**

238. ### How is the new JSX transform different from old transform??

     The new JSX transform doesn’t require React to be in scope. i.e, You don&#x27;t need to import React package for simple scenarios.

     Let&#x27;s take an example to look at the main differences between the old and the new transform,

     **Old Transform:**

     ```js
     import React from &quot;md1/react&quot;;

     function App() {
       return &lt;h1&gt;Good morning!!&lt;/h1&gt;;
     }
     ```

     Now JSX transform convert the above code into regular JavaScript as below,

     ```js
     import React from &quot;react&quot;;

     function App() {
       return React.createElement(&quot;h1&quot;, null, &quot;Good morning!!&quot;);
     }
     ```

     **New Transform:**

     The new JSX transform doesn&#x27;t require any React imports

     ```js
     function App() {
       return &lt;h1&gt;Good morning!!&lt;/h1&gt;;
     }
     ```

     Under the hood JSX transform compiles to below code

     ```js
     import { jsx as _jsx } from &quot;react/jsx-runtime&quot;;

     function App() {
       return _jsx(&quot;h1&quot;, { children: &quot;Good morning!!&quot; });
     }
     ```

     **Note:** You still need to import React to use Hooks.

**[⬆ Back to Top](#table-of-contents)**

239. ### What are React Server components?

     React Server Component is a way to write React component that gets rendered in the server-side with the purpose of improving React app performance. These components allow us to load components from the backend.

     **Note:** React Server Components is still under development and not recommended for production yet.

**[⬆ Back to Top](#table-of-contents)**

240. ### What is prop drilling?
     Prop Drilling is the process by which you pass data from one component of the React Component tree to another by going through other components that do not need the data but only help in passing it around.

**[⬆ Back to Top](#table-of-contents)**

241. ### What is the difference between useState and useRef hook?
     1. useState causes components to re-render after state updates whereas useRef doesn’t cause a component to re-render when the value or state changes.
        Essentially, useRef is like a “box” that can hold a mutable value in its (.current) property.
     2. useState allows us to update the state inside components. While useRef allows referencing DOM elements.

**[⬆ Back to Top](#table-of-contents)**

242. ### What is a wrapper component?

     A wrapper in React is a component that wraps or surrounds another component or group of components. It can be used for a variety of purposes such as adding additional functionality, styling, or layout to the wrapped components.

     For example, consider a simple component that displays a message:

     ```javascript
     const Message = ({ text }) =&gt; {
       return &lt;p&gt;{text}&lt;/p&gt;;
     };
     ```

     We can create a wrapper component that will add a border to the message component:

     ```javascript
     const MessageWrapper = (props) =&gt; {
       return (
         &lt;div style={{ border: &quot;1px solid black&quot; }}&gt;
           &lt;Message {...props} /&gt;
         &lt;/div&gt;
       );
     };
     ```

     Now we can use the MessageWrapper component instead of the Message component and the message will be displayed with a border:

     ```javascript
     &lt;MessageWrapper text=&quot;Hello World&quot; /&gt;
     ```

     Wrapper component can also accept its own props and pass them down to the wrapped component, for example, we can create a wrapper component that will add a title to the message component:

     ```javascript
     const MessageWrapperWithTitle = ({title, ...props}) =&gt; {
       return (
         &lt;div&gt;
           &lt;h3&gt;{title}&lt;/h3&gt;
           &lt;Message {...props} /&gt;
         &lt;/div&gt;
       );
     };
     ```

     Now we can use the MessageWrapperWithTitle component and pass title props:

     ```javascript
     &lt;MessageWrapperWithTitle title=&quot;My Message&quot; text=&quot;Hello World&quot; /&gt;
     ```

     This way, the wrapper component can add additional functionality, styling, or layout to the wrapped component while keeping the wrapped component simple and reusable.

**[⬆ Back to Top](#table-of-contents)**

243. ### What are the differences between useEffect and useLayoutEffect hooks?

     useEffect and useLayoutEffect are both React hooks that can be used to synchronize a component with an external system, such as a browser API or a third-party library. However, there are some key differences between the two:

     - Timing: useEffect runs after the browser has finished painting, while useLayoutEffect runs synchronously before the browser paints. This means that useLayoutEffect can be used to measure and update layout in a way that feels more synchronous to the user.

     - Browser Paint: useEffect allows browser to paint the changes before running the effect, hence it may cause some visual flicker. useLayoutEffect synchronously runs the effect before browser paints and hence it will avoid visual flicker.

     - Execution Order: The order in which multiple useEffect hooks are executed is determined by React and may not be predictable. However, the order in which multiple useLayoutEffect hooks are executed is determined by the order in which they were called.

     - Error handling: useEffect has a built-in mechanism for handling errors that occur during the execution of the effect, so that it does not crash the entire application. useLayoutEffect does not have this mechanism, and errors that occur during the execution of the effect will crash the entire application.

     In general, it&#x27;s recommended to use useEffect as much as possible, because it is more performant and less prone to errors. useLayoutEffect should only be used when you need to measure or update layout, and you can&#x27;t achieve the same result using useEffect.

**[⬆ Back to Top](#table-of-contents)**

244. ### What are the differences between Functional and Class Components?
 
      There are two different ways to create components in ReactJS. The main differences are listed down as below,

      ## 1.  Syntax:

      The classs components uses ES6 classes to create the components. It uses `render` function to display the HTML content in the webpage.
      
      The syntax for class component looks like as below.
        ```js
        class App extends Reacts.Component {
          render(){
            return &lt;h1&gt;This is a class component&lt;/h1&gt;}
          }

        ```

      **Note:** The **Pascal Case** is the recommended approach to provide naming to a component.

      Functional component has been improved over the years with some added features like Hooks. Here is a syntax for functional component.

      ```js
      function App(){
        return &lt;div className=&quot;App&quot;&gt;
          &lt;h1&gt;Hello, I&#x27;m a function component&lt;/h1&gt;
          &lt;/div&gt;
      }

      ```

      ## 2. State:

      State contains information or data about a component which may change over time. 
      
      In class component, you can update the state when a user interacts with it or server updates the data using the `setState()` method. The initial state is going to be assigned in the `Constructor( ) `method using the the ` this.state` object and it is possible to different data types in the `this.state` object such as string, boolean, numbers, etc.
      **A simple example showing how we use the setState() and constructor()**

      ```js
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

      ```

      You not use state in functional components because it was only supported in class components. But over the years hooks have been implemented in functional component which enable to use state in functional component too.
      
      The `useState()` hook can used to implement state in funcitonal component. It returns an array with two items: the first item is current state and the next one is a function (setState) that updates the value of the current state. 
      
      Let&#x27;s see an example to demonstrate the state in functional components,

      ```js
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
      ```

      ## 3. Props:
      Props are referred to as &quot;properties&quot;. The props are passed into react component just like arguments passed to a function. In otherwords, they are similar to HTML attributes. 

      The props are accessible in child class component using `this.props` as shown in below example,
      ```js
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
      ```

      Props in functional components are similar to that of the class components but the difference is the absence of &#x27;this&#x27; keyword. 

      ```js
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
      ```

**[⬆ Back to Top](#table-of-contents)**

245. ### What is strict mode in React?

      `React.StrictMode` is a useful component for highlighting potential problems in an application. Just like `&lt;Fragment&gt;`, `&lt;StrictMode&gt;` does not render any extra DOM elements. It activates additional checks and warnings for its descendants. These checks apply for _development mode_ only.

      ```jsx harmony
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
      ```

      In the example above, the _strict mode_ checks apply to `&lt;ComponentOne&gt;` and `&lt;ComponentTwo&gt;` components only. i.e., Part of the application only. 
      
      **Note:** Frameworks such as NextJS has this flag enabled by default.

      **[⬆ Back to Top](#table-of-contents)**

246. ### What is the benefit of strict mode?

     The &lt;StrictMode&gt; will be helpful in the below cases,

     1. To find the bugs caused by impure rendering where the components will re-render twice.
     2. To find the bugs caused by missing cleanup of effects where the components will re-run effects one more extra time.
     3. Identifying components with **unsafe lifecycle methods**.
     4. Warning about **legacy string ref** API usage.
     5. Detecting unexpected **side effects**.
     6. Detecting **legacy context** API.
     7. Warning about deprecated **findDOMNode** usage

**[⬆ Back to Top](#table-of-contents)**

247. ### Why does strict mode render twice in React?
      StrictMode renders components twice in development mode(not production) in order to detect any problems with your code and warn you about those problems. This is used to detect accidental side effects in the render phase.  If you used `create-react-app` development tool then it automatically enables StrictMode by default.

      ```js
      const root = createRoot(document.getElementById(&#x27;root&#x27;));
      root.render(
        &lt;StrictMode&gt;
          &lt;App /&gt;
        &lt;/StrictMode&gt;
      );
      ```

      If you want to disable this behavior then you can simply remove `strict` mode.

      ```js
      const root = createRoot(document.getElementById(&#x27;root&#x27;));
      root.render(
        &lt;App /&gt;
      );
      ```

      To detect side effects the following functions are invoked twice:

      1. Function component bodies, excluding the code inside event handlers.
      2. Functions passed to `useState`, `useMemo`, or `useReducer` (any other Hook)
      3. Class component&#x27;s `constructor`, `render`, and `shouldComponentUpdate` methods
      4. Class component static `getDerivedStateFromProps` method 
      5. State updater functions
 

**[⬆ Back to Top](#table-of-contents)**

248. ### What are the rules of JSX?
      The below 3 rules needs to be followed while using JSX in a react application.
    
      1. **Return a single root element**:
        If you are returning multiple elements from a component, wrap them in a single parent element. Otherwise you will receive the below error in your browser console.

        ```html Adjacent JSX elements must be wrapped in an enclosing tag.```

      2. **All the tags needs to be closed:**
        Unlike HTML, all tags needs to closed explicitly with in JSX. This rule applies for self-closing tags(like hr, br and img tags) as well.
      3. **Use camelCase naming:**
        It is suggested to use camelCase naming for attributes in JSX. For example, the common attributes of HTML elements such as `class`, `tabindex` will be used as `className` and `tabIndex`.  
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
       The `onClickCapture` React event is helpful to catch all the events of child elements irrespective of event propagation logic or even if the events propagation stopped. This is useful if you need to log every click events for analytics purpose.

       For example, the below code triggers the click event of parent first followed by second level child eventhough leaf child button elements stops the propagation.

       ```jsx
        &lt;div onClickCapture={() =&gt; alert(&#x27;parent&#x27;)}&gt;
         &lt;div onClickCapture={() =&gt; alert(&#x27;child&#x27;)}&gt;
           &lt;button onClick={e =&gt; e.stopPropagation()} /&gt;
           &lt;button onClick={e =&gt; e.stopPropagation()} /&gt;
         &lt;/div&gt;
        &lt;/div&gt;
       ```
       The event propagation for the above code snippet happens in the following order:
       1. It travels downwards in the DOM tree by calling all `onClickCapture` event handlers.
       2. It executes `onClick` event handler on the target element.
       3. It travels upwards in the DOM tree by call all `onClick` event handlers above to it.

  252. ### How does React updates screen in an application?

       React updates UI in three steps,
       1. **Triggering or initiating a render:** The component is going to triggered for render in two ways.

           1. **Initial render:** When the app starts, you can trigger the initial render by calling `creatRoot` with the target DOM node followed by invoking component&#x27;s `render` method. For example, the following code snippet renders `App` component on root DOM node.
            
            ```jsx
            import { createRoot } from &#x27;react-dom/client&#x27;;

            const root = createRoot(document.getElementById(&#x27;root&#x27;))
            root.render(&lt;App /&gt;);
            ```

          2. **Re-render when the state updated:** When you update the component state using the state setter function, the componen&#x27;t state automatically queues for a render.

       2. **Rendering components:** After triggering a render, React will call your components to display them on the screen. React will call the root component for initial render and call the function component whose state update triggered the render. This is a recursive process for all nested components of the target component.

       3. **Commit changes to DOM:** After calling components, React will modify the DOM for initial render using `appendChild()` DOM API and apply minimal necessary DOM updates for re-renders based on differences between rerenders.

 **[⬆ Back to Top](#table-of-contents)**

 253. ### How does React batch multiple state updates?
      React prevents component from re-rendering for each and every state update by grouping multiple state updates within an event handler. This strategy improves the application performance and this process known as **batching**. The older version of React only supported batching for browser events whereas React18 supported for asynchronous actions, timeouts and intervals along with native events. This improved version of batching is called **automatic batching**.

      Let&#x27;s demonstrate this automatic batching feature with a below example.

      ```jsx
      import { useState } from &#x27;md1/react&#x27;;

      export default function BatchingState() {
        const [count, setCount] = useState(0);
        const [message, setMessage] = useState(&#x27;batching&#x27;);

        console.log(&#x27;Application Rendered&#x27;);

        const handleUsers = () =&gt; {
          fetch(&quot;https://jsonplaceholder.typicode.com/users/1&quot;).then(() =&gt; {
              // Automatic Batching re-render only once
              setCount(count +1);
              setMessage(&#x27;users fetched&#x27;);
            });
        }

        return (
          &lt;&gt;
            &lt;h1&gt;{count}&lt;/h1&gt;
            &lt;button onClick={handleAsyncFetch}&gt;Click Me!&lt;/button&gt;
          &lt;/&gt;
        )
      }
      ```

      The preceeding code updated two state variables with in an event handler. However, React will perform automatic batching feature and the component will be re-rendered only once for better performance.

 **[⬆ Back to Top](#table-of-contents)**

 254. ### Is it possible to prevent automatic batching?
      Yes, it is possible to prevent automatic batching default behavior. There might be cases where you need to re-render your component after each state update or updating one state depends on another state variable. Considering this situation, React introduced `flushSync` method from `react-dom` API for the usecases where you need to flush state updates to DOM immediately. 

      The usage of `flushSync` method within an `onClick` event handler will be looking like as below,

      ```jsx
      import { flushSync } from &#x27;react-dom&#x27;;

      const handleClick = () =&gt; {
        flushSync(() =&gt; {
          setClicked(!clicked); //Component will create a re-render here
        });
        
        setCount(count + 1); // Component will create a re-render again here
      };
      ```
      In the above click handler, React will update DOM at first using flushSync and second time updates DOM because of the counter setter function by avoiding automatic batching.

 **[⬆ Back to Top](#table-of-contents)**

 255. ### What is React hydration?
      React hydration is used to add client-side JavaScript interactivity to pre-rendered static HTML generated by the server. It is used only for server-side rendering(SSR) to enhance the initial rendering time and make it SEO friendly application. This hydration acts as a bridge to reduce the gap between server side and client-side rendering.

      After the page loaded with generated static HTML, React will add application state and interactivity by attaching all event handlers for the respective elements. Let&#x27;s demonstrate this with an example. 
      
      Consider that React DOM API(using `renderToString`) generated HTML for `&lt;App&gt;` component which contains `&lt;button&gt;` element to increment the counter.

      ```jsx
      import {useState} from &#x27;md1/react&#x27;;
      import { renderToString } from &#x27;react-dom/server&#x27;;

      export default function App() {
        const [count, setCount] = React.useState(0);

        return (
          &lt;h1&gt;Counter&lt;/h1&gt;
          &lt;button onClick={() =&gt; setCount(prevCount =&gt; prevCount + 1)}&gt;
            {count} times
          &lt;/button&gt;
          );
      }

      const html = renderToString(&lt;App /&gt;);
      ```

      The above code generates the below HTML with a header text and button component without any interactivity.

      ```html
      &lt;h1&gt;Counter&lt;/h1&gt;
      &lt;button&gt;
        &lt;!-- --&gt;0&lt;!-- --&gt;
        times
      &lt;/button&gt;
      ```

      At this stage `hydrateRoot` API can be used to perform hydration by attaching `onClick` event handler.

      ```jsx
      import { hydrateRoot } from &#x27;react-dom/client&#x27;;
      import App from &#x27;./App.js&#x27;;

      hydrateRoot(document.getElementById(&#x27;root&#x27;), &lt;App /&gt;);
      ```
      After this step, you are able to run React application on server-side and hydrating the javascript bundle on client-side for smooth user experience and SEO purposes.
      
 **[⬆ Back to Top](#table-of-contents)**

 256. ### How do you update objects inside state?
      You cannot update the objects which exists in the state directly. Instead, you should create a fresh new object (or copy from the existing object) and update the latest state using the newly created object. Eventhough JavaScript objects are mutable, you need to treate objects inside state as read-only while updating the state.

      Let&#x27;s see this comparison with an example. The issue with regular object mutation approach can be described by updating the user details fields of `Profile` component. The properties of `Profile` component such as firstName, lastName and age details mutated in an event handler as shown below.

      ```jsx
        import { useState } from &#x27;md1/react&#x27;;

        export default function Profile() {
          const [user, setUser] = useState({
            firstName: &#x27;John&#x27;,
            lastName: &#x27;Abraham&#x27;,
            age: 30
          });

          function handleFirstNameChange(e) {
            user.firstName = e.target.value;
          }

          function handleLastNameChange(e) {
            user.lastName = e.target.value;
          }

          function handleAgeChange(e) {
            user.age = e.target.value;
          }

          return (
            &lt;&gt;
              &lt;label&gt;
                First name:
                &lt;input
                  value={user.firstName}
                  onChange={handleFirstNameChange}
                /&gt;
              &lt;/label&gt;
              &lt;label&gt;
                Last name:
                &lt;input
                  value={user.lastName}
                  onChange={handleLastNameChange}
                /&gt;
              &lt;/label&gt;
              &lt;label&gt;
                Age:
                &lt;input
                  value={user.age}
                  onChange={handleAgeChange}
                /&gt;
              &lt;/label&gt;
              &lt;p&gt;
          Profile:
                {person.firstName}{&#x27; &#x27;}
                {person.lastName}{&#x27; &#x27;}
                ({person.age})
              &lt;/p&gt;
            &lt;/&gt;
          );
        }
      ```
      Once you run the application with above user profile component, you can observe that user profile details won&#x27;t be update upon entering the input fields.
      This issue can be fixed by creating a new copy of object which includes existing properties through spread syntax(...obj) and add changed values in a single event handler itself as shown below.

      ```jsx
      handleProfileChange(e) {
        setUser({
        ...user,
          [e.target.name]: e.target.value
        });
      }
      ```

      The above event handler is concise instead of maintaining separate event handler for each field. Now, UI displays the updated field values as expected without an issue. 

  **[⬆ Back to Top](#table-of-contents)**

 257. ### How do you update nested objects inside state?
      You cannot simply use spread syntax for all kinds of objects inside state. Because spread syntax is shallow and it copies properties for one level deep only. If the object has nested object structure, UI doesn&#x27;t work as expected with regular JavaScript nested property mutation. Let&#x27;s demonstrate this behavior with an example of User object which has address nested object inside of it.

      ```jsx
      const user = {
        name: &#x27;John&#x27;,
        age: 32,
          address: {
        country: &#x27;Singapore&#x27;,
        postalCode: 440004
          }
      }
      ```

      If you try to update the country nested field in a regular javascript fashion(as shown below) then user profile screen won&#x27;t be updated with latest value.

      ```js
        user.address.country = &quot;Germany&quot;;
      ```
      This issue can be fixed by flattening all the fields into a top-level object or create a new object for each nested object and point it to it&#x27;s parent object. In this example, first you need to create copy of address object and update it with the latest value. Later, the adress object should be linked to parent user object something like below.

      ```js
      setUser({
        ...user,
        address: {
          ...user.address,
          country: &#x27;Germany&#x27;
        }
      });
      ``` 
      This approach is bit verbose and not easy for deep hierarchical state updates. But this workaround can be used for few levels of nested objects without much hassle.

  **[⬆ Back to Top](#table-of-contents)**

 258. ### How do you update arrays inside state?
      Eventhough arrays in JavaScript are mutable in nature, you need to treat them as immutable while storing them in a state. That means, similar to objects, the arrays cannot be updated directly inside state. Instead, you need to create a copy of the existing array and then set the state to use newly copied array.

      To ensure that arrays are not mutated, the mutation operations like direct direct assigment(arr[1]=&#x27;one&#x27;), push, pop, shift, unshift, splice etc methods should be avoided on original array. Instead, you can create a copy of existing array with help of array operations such as filter, map, slice, spread syntax etc.

      For example, the below push operation doesn&#x27;t add the new todo to the total todo&#x27;s list in an event handler.

      ```jsx
      onClick = {
        todos.push({
          id: id+1,
          name: name
        })
      }
      ```
      This issue is fixed by replacing push operation with spread syntax where it will create a new array and the UI updated with new todo.

      ```jsx
      onClick = {
        [
          ...todos,
          { id: id+1, name: name }
        ]
      }
      ```

  **[⬆ Back to Top](#table-of-contents)**

 259. ### How do you use immer library for state updates?
      Immer library enforces the immutability of state based on **copy-on-write** mechanism. It uses JavaScript proxy to keep track of updates to immutable states. Immer has 3 main states as below,

      1. **Current state:** It refers to actual state
      2. **Draft state:** All new changes will be applied to this state. In this state, draft is just a proxy of the current state.
      3. **Next state:** It is formed after all mutations applied to the draft state

      Immer can be used by following below instructions,

      1. Install the dependency using `npm install use-immer` command
      2. Replace `useState` hook with `useImmer` hook by importing at the top
      3. The setter function of `useImmer` hook can be used to update the state.

      For example, the mutation syntax of immer library simplies the nested address object of user state as follows,

      ```jsx
      import { useImmer } from &#x27;use-immer&#x27;;
      const [user, setUser]= useImmer({
          name: &#x27;John&#x27;,
          age: 32,
            address: {
          country: &#x27;Singapore&#x27;,
          postalCode: 440004
            }
      });

      //Update user details upon any event
      setUser(draft =&gt; {
        draft.address.country = &#x27;Germany&#x27;;
      });
      ```
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

    ```javascript
    //Wrong
    this.state.message = &quot;Hello world&quot;;
    ```

    Instead use `setState()` method. It schedules an update to a component&#x27;s state object. When state changes, the component responds by re-rendering.

    ```javascript
    //Correct
    this.setState({ message: &quot;Hello World&quot; });
    ```

    **Note:** You can directly assign to the state object either in _constructor_ or using latest javascript&#x27;s class field declaration syntax.

    **[⬆ Back to Top](#table-of-contents)**

2. ### What is the purpose of callback function as an argument of `setState()`?

    The callback function is invoked when setState finished and the component gets rendered. Since `setState()` is **asynchronous** the callback function is used for any post action.

    **Note:** It is recommended to use lifecycle method rather than this callback function.

    ```javascript
    setState({ name: &quot;John&quot; }, () =&gt;
      console.log(&quot;The name has updated and component re-rendered&quot;)
    );
    ```

    **[⬆ Back to Top](#table-of-contents)**

3. ### How to bind methods or event handlers in JSX callbacks?

    There are 3 possible ways to achieve this in class components:

    1. **Binding in Constructor:** In JavaScript classes, the methods are not bound by default. The same rule applies for React event handlers defined as class methods. Normally we bind them in constructor.

       ```javascript
       class User extends Component {
         constructor(props) {
           super(props);
           this.handleClick = this.handleClick.bind(this);
         }
         handleClick() {
           console.log(&quot;SingOut triggered&quot;);
         }
         render() {
           return &lt;button onClick={this.handleClick}&gt;SingOut&lt;/button&gt;;
         }
       }
       ```

    2. **Public class fields syntax:** If you don&#x27;t like to use bind approach then _public class fields syntax_ can be used to correctly bind callbacks. The Create React App enables this syntax by default.

       ```jsx harmony
       handleClick = () =&gt; {
         console.log(&quot;SingOut triggered&quot;, this);
       };
       ```

       ```jsx harmony
       &lt;button onClick={this.handleClick}&gt;SingOut&lt;/button&gt;
       ```

    3. **Arrow functions in callbacks:** It is possible to use _arrow functions_ directly in the callbacks.

       ```jsx harmony
       handleClick() {
           console.log(&#x27;SingOut triggered&#x27;);
       }
       render() {
           return &lt;button onClick={() =&gt; this.handleClick()}&gt;SignOut&lt;/button&gt;;
       }
       ```

    **Note:** If the callback is passed as prop to child components, those components might do an extra re-rendering. In those cases, it is preferred to go with `.bind()` or _public class fields syntax_ approach considering performance.

    **[⬆ Back to Top](#table-of-contents)**

4. ### How to pass a parameter to an event handler or callback?

    You can use an _arrow function_ to wrap around an _event handler_ and pass parameters:

    ```jsx harmony
    &lt;button onClick={() =&gt; this.handleClick(id)} /&gt;
    ```

    This is an equivalent to calling `.bind`:

    ```jsx harmony
    &lt;button onClick={this.handleClick.bind(this, id)} /&gt;
    ```

    Apart from these two approaches, you can also pass arguments to a function which is defined as arrow function

    ```jsx harmony
    &lt;button onClick={this.handleClick(id)} /&gt;;
    handleClick = (id) =&gt; () =&gt; {
      console.log(&quot;Hello, your ticket number is&quot;, id);
    };
    ```

    **[⬆ Back to Top](#table-of-contents)**

5. ### What is the use of refs?

    The _ref_ is used to return a reference to the element. They _should be avoided_ in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.

    **[⬆ Back to Top](#table-of-contents)**

6. ### How to create refs?

    There are two approaches

    1. This is a recently added approach. _Refs_ are created using `React.createRef()` method and attached to React elements via the `ref` attribute. In order to use _refs_ throughout the component, just assign the _ref_ to the instance property within constructor.

       ```jsx harmony
       class MyComponent extends React.Component {
         constructor(props) {
           super(props);
           this.myRef = React.createRef();
         }
         render() {
           return &lt;div ref={this.myRef} /&gt;;
         }
       }
       ```

    2. You can also use ref callbacks approach regardless of React version. For example, the search bar component&#x27;s input element is accessed as follows,
       ```jsx harmony
       class SearchBar extends Component {
         constructor(props) {
           super(props);
           this.txtSearch = null;
           this.state = { term: &quot;&quot; };
           this.setInputSearchRef = (e) =&gt; {
             this.txtSearch = e;
           };
         }
         onInputChange(event) {
           this.setState({ term: this.txtSearch.value });
         }
         render() {
           return (
             &lt;input
               value={this.state.term}
               onChange={this.onInputChange.bind(this)}
               ref={this.setInputSearchRef}
             /&gt;
           );
         }
       }
       ```

    You can also use _refs_ in function components using **closures**.
    **Note**: You can also use inline ref callbacks even though it is not a recommended approach.

    **[⬆ Back to Top](#table-of-contents)**

7. ### What are forward refs?

    _Ref forwarding_ is a feature that lets some components take a _ref_ they receive, and pass it further down to a child.

    ```jsx harmony
    const ButtonElement = React.forwardRef((props, ref) =&gt; (
      &lt;button ref={ref} className=&quot;CustomButton&quot;&gt;
        {props.children}
      &lt;/button&gt;
    ));

    // Create ref to the DOM button:
    const ref = React.createRef();
    &lt;ButtonElement ref={ref}&gt;{&quot;Forward Ref&quot;}&lt;/ButtonElement&gt;;
    ```

    **[⬆ Back to Top](#table-of-contents)**

8. ### Which is preferred option with in callback refs and findDOMNode()?

    It is preferred to use _callback refs_ over `findDOMNode()` API. Because `findDOMNode()` prevents certain improvements in React in the future.

    The **legacy** approach of using `findDOMNode`:

    ```javascript
    class MyComponent extends Component {
      componentDidMount() {
        findDOMNode(this).scrollIntoView();
      }

      render() {
        return &lt;div /&gt;;
      }
    }
    ```

    The recommended approach is:

    ```javascript
    class MyComponent extends Component {
      constructor(props) {
        super(props);
        this.node = createRef();
      }
      componentDidMount() {
        this.node.current.scrollIntoView();
      }

      render() {
        return &lt;div ref={this.node} /&gt;;
      }
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

9. ### Why are String Refs legacy?

    If you worked with React before, you might be familiar with an older API where the `ref` attribute is a string, like `ref={&#x27;textInput&#x27;}`, and the DOM node is accessed as `this.refs.textInput`. We advise against it because _string refs have below issues_, and are considered legacy. String refs were **removed in React v16**.

    1. They _force React to keep track of currently executing component_. This is problematic because it makes react module stateful, and thus causes weird errors when react module is duplicated in the bundle.
    2. They are _not composable_ — if a library puts a ref on the passed child, the user can&#x27;t put another ref on it. Callback refs are perfectly composable.
    3. They _don&#x27;t work with static analysis_ like Flow. Flow can&#x27;t guess the magic that framework does to make the string ref appear on `this.refs`, as well as its type (which could be different). Callback refs are friendlier to static analysis.
    4. It doesn&#x27;t work as most people would expect with the &quot;render callback&quot; pattern (e.g. &lt;DataGrid renderRow={this.renderRow} /&gt;)

       ```jsx harmony
       class MyComponent extends Component {
         renderRow = (index) =&gt; {
           // This won&#x27;t work. Ref will get attached to DataTable rather than MyComponent:
           return &lt;input ref={&quot;input-&quot; + index} /&gt;;

           // This would work though! Callback refs are awesome.
           return &lt;input ref={(input) =&gt; (this[&quot;input-&quot; + index] = input)} /&gt;;
         };

         render() {
           return (
             &lt;DataTable data={this.props.data} renderRow={this.renderRow} /&gt;
           );
         }
       }
       ```

    **[⬆ Back to Top](#table-of-contents)**

10. ### What are the different phases of component lifecycle?

    The component lifecycle has three distinct lifecycle phases:

    1. **Mounting:** The component is ready to mount in the browser DOM. This phase covers initialization from `constructor()`, `getDerivedStateFromProps()`, `render()`, and `componentDidMount()` lifecycle methods.

    2. **Updating:** In this phase, the component gets updated in two ways, sending the new props and updating the state either from `setState()` or `forceUpdate()`. This phase covers `getDerivedStateFromProps()`, `shouldComponentUpdate()`, `render()`, `getSnapshotBeforeUpdate()` and `componentDidUpdate()` lifecycle methods.

    3. **Unmounting:** In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes `componentWillUnmount()` lifecycle method.

    It&#x27;s worth mentioning that React internally has a concept of phases when applying changes to the DOM. They are separated as follows

    1. **Render** The component will render without any side effects. This applies to Pure components and in this phase, React can pause, abort, or restart the render.

    2. **Pre-commit** Before the component actually applies the changes to the DOM, there is a moment that allows React to read from the DOM through the `getSnapshotBeforeUpdate()`.

    3. **Commit** React works with the DOM and executes the final lifecycles respectively `componentDidMount()` for mounting, `componentDidUpdate()` for updating, and `componentWillUnmount()` for unmounting.

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
    - **shouldComponentUpdate:** Determines if the component will be updated or not. By default it returns `true`. If you are sure that the component doesn&#x27;t need to render after state or props are updated, you can return false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives new prop.
    - **componentWillUpdate:** Executed before re-rendering the component when there are props &amp; state changes confirmed by `shouldComponentUpdate()` which returns true.
    - **componentDidUpdate:** Mostly it is used to update the DOM in response to prop or state changes.
    - **componentWillUnmount:** It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.

    React 16.3+

    - **getDerivedStateFromProps:** Invoked right before calling `render()` and is invoked on _every_ render. This exists for rare use cases where you need a derived state. Worth reading [if you need derived state](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html).
    - **componentDidMount:** Executed after first rendering and where all AJAX requests, DOM or state updates, and set up event listeners should occur.
    - **shouldComponentUpdate:** Determines if the component will be updated or not. By default, it returns `true`. If you are sure that the component doesn&#x27;t need to render after the state or props are updated, you can return a false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives a new prop.
    - **getSnapshotBeforeUpdate:** Executed right before rendered output is committed to the DOM. Any value returned by this will be passed into `componentDidUpdate()`. This is useful to capture information from the DOM i.e. scroll position.
    - **componentDidUpdate:** Mostly it is used to update the DOM in response to prop or state changes. This will not fire if `shouldComponentUpdate()` returns `false`.
    - **componentWillUnmount** It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.

    **[⬆ Back to Top](#table-of-contents)**

12. ### How to create props proxy for HOC component?

    You can add/edit props passed to the component using _props proxy_ pattern like this:

    ```jsx harmony
    function HOC(WrappedComponent) {
      return class Test extends Component {
        render() {
          const newProps = {
            title: &quot;New Header&quot;,
            footer: false,
            showFeatureX: false,
            showFeatureY: true,
          };

          return &lt;WrappedComponent {...this.props} {...newProps} /&gt;;
        }
      };
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

13. ### What is context?

    _Context_ provides a way to pass data through the component tree without having to pass props down manually at every level.

    For example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components.

    ```javascript
    const { Provider, Consumer } = React.createContext(defaultValue);
    ```

    **[⬆ Back to Top](#table-of-contents)**

14. ### What is the purpose of using super constructor with props argument?

    A child class constructor cannot make use of `this` reference until the `super()` method has been called. The same applies to ES6 sub-classes as well. The main reason for passing props parameter to `super()` call is to access `this.props` in your child constructors.

    **Passing props:**

    ```javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);

        console.log(this.props); // prints { name: &#x27;John&#x27;, age: 42 }
      }
    }
    ```

    **Not passing props:**

    ```javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super();

        console.log(this.props); // prints undefined

        // but props parameter is still available
        console.log(props); // prints { name: &#x27;John&#x27;, age: 42 }
      }

      render() {
        // no difference outside constructor
        console.log(this.props); // prints { name: &#x27;John&#x27;, age: 42 }
      }
    }
    ```

    The above code snippets reveals that `this.props` is different only within the constructor. It would be the same outside the constructor.

    **[⬆ Back to Top](#table-of-contents)**

15. ### How to set state with a dynamic key name?

    If you are using ES6 or the Babel transpiler to transform your JSX code then you can accomplish this with _computed property names_.

    ```javascript
    handleInputChange(event) {
      this.setState({ [event.target.id]: event.target.value })
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

16. ### What would be the common mistake of function being called every time the component renders?

    You need to make sure that function is not being called while passing the function as a parameter.

    ```jsx harmony
    render() {
      // Wrong: handleClick is called instead of passed as a reference!
      return &lt;button onClick={this.handleClick()}&gt;{&#x27;Click Me&#x27;}&lt;/button&gt;
    }
    ```

    Instead, pass the function itself without parenthesis:

    ```jsx harmony
    render() {
      // Correct: handleClick is passed as a reference!
      return &lt;button onClick={this.handleClick}&gt;{&#x27;Click Me&#x27;}&lt;/button&gt;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

17. ### What are error boundaries in React v16?

    _Error boundaries_ are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

    A class component becomes an error boundary if it defines a new lifecycle method called `componentDidCatch(error, info)` or `static getDerivedStateFromError() `:

    ```jsx harmony
    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false };
      }

      componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, info);
      }

      static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }

      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return &lt;h1&gt;{&quot;Something went wrong.&quot;}&lt;/h1&gt;;
        }
        return this.props.children;
      }
    }
    ```

    After that use it as a regular component:

    ```jsx harmony
    &lt;ErrorBoundary&gt;
      &lt;MyWidget /&gt;
    &lt;/ErrorBoundary&gt;
    ```

    **[⬆ Back to Top](#table-of-contents)**

18. ### How are error boundaries handled in React v15?

    React v15 provided very basic support for _error boundaries_ using `unstable_handleError` method. It has been renamed to `componentDidCatch` in React v16.

    **[⬆ Back to Top](#table-of-contents)**

19. ### What is the purpose of render method of `react-dom`?

    This method is used to render a React element into the DOM in the supplied container and return a reference to the component. If the React element was previously rendered into container, it will perform an update on it and only mutate the DOM as necessary to reflect the latest changes.

    ```
    ReactDOM.render(element, container, [callback])
    ```

    If the optional callback is provided, it will be executed after the component is rendered or updated.

    **[⬆ Back to Top](#table-of-contents)**

20. ### What will happen if you use `setState()` in constructor?

    When you use `setState()`, then apart from assigning to the object state React also re-renders the component and all its children. You would get error like this: _Can only update a mounted or mounting component._ So we need to use `this.state` to initialize variables inside constructor.

    **[⬆ Back to Top](#table-of-contents)**

21. ### Is it good to use `setState()` in `componentWillMount()` method?

    Yes, it is safe to use `setState()` inside `componentWillMount()` method. But at the same it is recommended to avoid async initialization in `componentWillMount()` lifecycle method. `componentWillMount()` is invoked immediately before mounting occurs. It is called before `render()`, therefore setting state in this method will not trigger a re-render. Avoid introducing any side-effects or subscriptions in this method. We need to make sure async calls for component initialization happened in `componentDidMount()` instead of `componentWillMount()`.

    ```jsx harmony
    componentDidMount() {
      axios.get(`api/todos`)
        .then((result) =&gt; {
          this.setState({
            messages: [...result.data]
          })
        })
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

22. ### What will happen if you use props in initial state?

    If the props on the component are changed without the component being refreshed, the new prop value will never be displayed because the constructor function will never update the current state of the component. The initialization of state from props only runs when the component is first created.

    The below component won&#x27;t display the updated input value:

    ```jsx harmony
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          records: [],
          inputValue: this.props.inputValue,
        };
      }

      render() {
        return &lt;div&gt;{this.state.inputValue}&lt;/div&gt;;
      }
    }
    ```

    Using props inside render method will update the value:

    ```jsx harmony
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          record: [],
        };
      }

      render() {
        return &lt;div&gt;{this.props.inputValue}&lt;/div&gt;;
      }
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

23. ### How you use decorators in React?

    You can _decorate_ your _class_ components, which is the same as passing the component into a function. **Decorators** are flexible and readable way of modifying component functionality.

    ```jsx harmony
    @setTitle(&quot;Profile&quot;)
    class Profile extends React.Component {
      //....
    }

    /*
      title is a string that will be set as a document title
      WrappedComponent is what our decorator will receive when
      put directly above a component class as seen in the example above
    */
    const setTitle = (title) =&gt; (WrappedComponent) =&gt; {
      return class extends React.Component {
        componentDidMount() {
          document.title = title;
        }

        render() {
          return &lt;WrappedComponent {...this.props} /&gt;;
        }
      };
    };
    ```

    **Note:** Decorators are a feature that didn&#x27;t make it into ES7, but are currently a _stage 2 proposal_.

    **[⬆ Back to Top](#table-of-contents)**

24. ### What is CRA and its benefits?

    The `create-react-app` CLI tool allows you to quickly create &amp; run React applications with no configuration step.

    Let&#x27;s create Todo App using _CRA_:

    ```console
    # Installation
    $ npm install -g create-react-app

    # Create new project
    $ create-react-app todo-app
    $ cd todo-app

    # Build, test and run
    $ npm run build
    $ npm run test
    $ npm start
    ```

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

    1. `constructor()`
    2. `static getDerivedStateFromProps()`
    3. `render()`
    4. `componentDidMount()`

    **[⬆ Back to Top](#table-of-contents)**

26. ### What are the lifecycle methods going to be deprecated in React v16?

    The following lifecycle methods going to be unsafe coding practices and will be more problematic with async rendering.

    1. `componentWillMount()`
    2. `componentWillReceiveProps()`
    3. `componentWillUpdate()`

    Starting with React v16.3 these methods are aliased with `UNSAFE_` prefix, and the unprefixed version will be removed in React v17.

    **[⬆ Back to Top](#table-of-contents)**

27. ### What is the purpose of `getDerivedStateFromProps()` lifecycle method?

    The new static `getDerivedStateFromProps()` lifecycle method is invoked after a component is instantiated as well as before it is re-rendered. It can return an object to update state, or `null` to indicate that the new props do not require any state updates.

    ```javascript
    class MyComponent extends React.Component {
      static getDerivedStateFromProps(props, state) {
        // ...
      }
    }
    ```

    This lifecycle method along with `componentDidUpdate()` covers all the use cases of `componentWillReceiveProps()`.

    **[⬆ Back to Top](#table-of-contents)**

28. ### What is the purpose of `getSnapshotBeforeUpdate()` lifecycle method?

    The new `getSnapshotBeforeUpdate()` lifecycle method is called right before DOM updates. The return value from this method will be passed as the third parameter to `componentDidUpdate()`.

    ```javascript
    class MyComponent extends React.Component {
      getSnapshotBeforeUpdate(prevProps, prevState) {
        // ...
      }
    }
    ```

    This lifecycle method along with `componentDidUpdate()` covers all the use cases of `componentWillUpdate()`.

    **[⬆ Back to Top](#table-of-contents)**

29. ### What is the recommended way for naming components?

    It is recommended to name the component by reference instead of using `displayName`.

    Using `displayName` for naming component:

    ```javascript
    export default React.createClass({
      displayName: &quot;TodoApp&quot;,
      // ...
    });
    ```

    The **recommended** approach:

    ```javascript
    export default class TodoApp extends React.Component {
      // ...
    }
    ```

    also

    ```javascript
    const TodoApp = () =&gt; {
      //...
    };
    export default TodoApp;
    ```

    **[⬆ Back to Top](#table-of-contents)**

30. ### What is the recommended ordering of methods in component class?

    _Recommended_ ordering of methods from _mounting_ to _render stage_:

    1. `static` methods
    2. `constructor()`
    3. `getChildContext()`
    4. `componentWillMount()`
    5. `componentDidMount()`
    6. `componentWillReceiveProps()`
    7. `shouldComponentUpdate()`
    8. `componentWillUpdate()`
    9. `componentDidUpdate()`
    10. `componentWillUnmount()`
    11. click handlers or event handlers like `onClickSubmit()` or `onChangeDescription()`
    12. getter methods for render like `getSelectReason()` or `getFooterContent()`
    13. optional render methods like `renderNavigation()` or `renderProfilePicture()`
    14. `render()`

    **[⬆ Back to Top](#table-of-contents)**

31. ### Why we need to pass a function to setState()?

    The reason behind for this is that `setState()` is an asynchronous operation. React batches state changes for performance reasons, so the state may not change immediately after `setState()` is called. That means you should not rely on the current state when calling `setState()` since you can&#x27;t be sure what that state will be. The solution is to pass a function to `setState()`, with the previous state as an argument. By doing this you can avoid issues with the user getting the old state value on access due to the asynchronous nature of `setState()`.

    Let&#x27;s say the initial count value is zero. After three consecutive increment operations, the value is going to be incremented only by one.

    ```javascript
    // assuming this.state.count === 0
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    // this.state.count === 1, not 3
    ```

    If we pass a function to `setState()`, the count gets incremented correctly.

    ```javascript
    this.setState((prevState, props) =&gt; ({
      count: prevState.count + props.increment,
    }));
    // this.state.count === 3 as expected
    ```

    **(OR)**

    ### Why function is preferred over object for `setState()`?

    React may batch multiple `setState()` calls into a single update for performance. Because `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.

    This counter example will fail to update as expected:

    ```javascript
    // Wrong
    this.setState({
      counter: this.state.counter + this.props.increment,
    });
    ```

    The preferred approach is to call `setState()` with function rather than object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument.

    ```javascript
    // Correct
    this.setState((prevState, props) =&gt; ({
      counter: prevState.counter + props.increment,
    }));
    ```

    **[⬆ Back to Top](#table-of-contents)**

32. ### Why is `isMounted()` an anti-pattern and what is the proper solution?

    The primary use case for `isMounted()` is to avoid calling `setState()` after a component has been unmounted, because it will emit a warning.

    ```javascript
    if (this.isMounted()) {
      this.setState({...})
    }
    ```

    Checking `isMounted()` before calling `setState()` does eliminate the warning, but it also defeats the purpose of the warning. Using `isMounted()` is a code smell because the only reason you would check is because you think you might be holding a reference after the component has unmounted.

    An optimal solution would be to find places where `setState()` might be called after a component has unmounted, and fix them. Such situations most commonly occur due to callbacks, when a component is waiting for some data and gets unmounted before the data arrives. Ideally, any callbacks should be canceled in `componentWillUnmount()`, prior to unmounting.

    **[⬆ Back to Top](#table-of-contents)**

33. ### What is the difference between constructor and getInitialState?

    You should initialize state in the constructor when using ES6 classes, and `getInitialState()` method when using `React.createClass()`.

    **Using ES6 classes:**

    ```javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          /* initial state */
        };
      }
    }
    ```

    **Using `React.createClass()`:**

    ```javascript
    const MyComponent = React.createClass({
      getInitialState() {
        return {
          /* initial state */
        };
      },
    });
    ```

    **Note:** `React.createClass()` is deprecated and removed in React v16. Use plain JavaScript classes instead.

    **[⬆ Back to Top](#table-of-contents)**

34. ### Can you force a component to re-render without calling setState?

    By default, when your component&#x27;s state or props change, your component will re-render. If your `render()` method depends on some other data, you can tell React that the component needs re-rendering by calling `forceUpdate()`.

    ```javascript
    component.forceUpdate(callback);
    ```

    It is recommended to avoid all uses of `forceUpdate()` and only read from `this.props` and `this.state` in `render()`.

    **[⬆ Back to Top](#table-of-contents)**

35. ### What is the difference between `super()` and `super(props)` in React using ES6 classes?

    When you want to access `this.props` in `constructor()` then you should pass props to `super()` method.

    **Using `super(props)`:**

    ```javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);
        console.log(this.props); // { name: &#x27;John&#x27;, ... }
      }
    }
    ```

    **Using `super()`:**

    ```javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super();
        console.log(this.props); // undefined
      }
    }
    ```

    Outside `constructor()` both will display same value for `this.props`.

    **[⬆ Back to Top](#table-of-contents)**

36. ### What is the difference between `setState()` and `replaceState()` methods?

     When you use `setState()` the current and previous states are merged. `replaceState()` throws out the current state, and replaces it with only what you provide. Usually `setState()` is used unless you really need to remove all previous keys for some reason. You can also set state to `false`/`null` in `setState()` instead of using `replaceState()`.

**[⬆ Back to Top](#table-of-contents)**

37. ### How to listen to state changes?

     The `componentDidUpdate` lifecycle method will be called when state changes. You can compare provided state and props values with current state and props to determine if something meaningful changed.

     ```
     componentDidUpdate(object prevProps, object prevState)
     ```

     **Note:** The previous releases of ReactJS also uses `componentWillUpdate(object nextProps, object nextState)` for state changes. It has been deprecated in latest releases.

**[⬆ Back to Top](#table-of-contents)**

38. ### What is the recommended approach of removing an array element in React state?

     The better approach is to use `Array.prototype.filter()` method.

     For example, let&#x27;s create a `removeItem()` method for updating the state.

     ```javascript
     removeItem(index) {
       this.setState({
         data: this.state.data.filter((item, i) =&gt; i !== index)
       })
     }
     ```

**[⬆ Back to Top](#table-of-contents)**

39. ### Is it possible to use React without rendering HTML?

     It is possible. Below are the possible options:

     ```jsx harmony
     render() {
       return false
     }
     ```

     ```jsx harmony
     render() {
       return true
     }
     ```

     ```jsx harmony
     render() {
       return null
     }
     ```

     React version &gt;=16.0.0:

     ```jsx harmony
     render() {
       return []
     }
     ```

     ```jsx harmony
     render() {
       return &quot;&quot;
     }
     ```

     React version &gt;=16.2.0:

     ```jsx harmony
     render() {
       return &lt;React.Fragment&gt;&lt;/React.Fragment&gt;
     }
     ```

     ```jsx harmony
     render() {
       return &lt;&gt;&lt;/&gt;
     }
     ```

     React version &gt;=18.0.0:

     ```jsx harmony
     render() {
       return undefined
     }
     ```

**[⬆ Back to Top](#table-of-contents)**

40. ### What are the possible ways of updating objects in state?

     1. **Calling `setState()` with an object to merge with state:**

        - Using `Object.assign()` to create a copy of the object:

          ```javascript
          const user = Object.assign({}, this.state.user, { age: 42 });
          this.setState({ user });
          ```

        - Using _spread operator_:

          ```javascript
          const user = { ...this.state.user, age: 42 };
          this.setState({ user });
          ```

     2. **Calling `setState()` with a function:**

        ```javascript
        this.setState((prevState) =&gt; ({
          user: {
            ...prevState.user,
            age: 42,
          },
        }));
        ```

**[⬆ Back to Top](#table-of-contents)**

41. ### What are the approaches to include polyfills in your `create-react-app`?

     There are approaches to include polyfills in create-react-app,

     1. **Manual import from `core-js`:**

        Create a file called (something like) `polyfills.js` and import it into root `index.js` file. Run `npm install core-js` or `yarn add core-js` and import your specific required features.

        ```javascript
        import &quot;core-js/fn/array/find&quot;;
        import &quot;core-js/fn/array/includes&quot;;
        import &quot;core-js/fn/number/is-nan&quot;;
        ```

     2. **Using Polyfill service:**

        Use the polyfill.io CDN to retrieve custom, browser-specific polyfills by adding this line to `index.html`:

        ```html
        &lt;script src=&quot;https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.includes&quot;&gt;&lt;/script&gt;
        ```

        In the above script we had to explicitly request the `Array.prototype.includes` feature as it is not included in the default feature set.

**[⬆ Back to Top](#table-of-contents)**

42. ### How to use https instead of http in create-react-app?

     You just need to use `HTTPS=true` configuration. You can edit your `package.json` scripts section:

     ```json
     &quot;scripts&quot;: {
       &quot;start&quot;: &quot;set HTTPS=true &amp;&amp; react-scripts start&quot;
     }
     ```

     or just run `set HTTPS=true &amp;&amp; npm start`

**[⬆ Back to Top](#table-of-contents)**

43. ### How to avoid using relative path imports in create-react-app?

     Create a file called `.env` in the project root and write the import path:

     ```
     NODE_PATH=src/app
     ```

     After that restart the development server. Now you should be able to import anything inside `src/app` without relative paths.

**[⬆ Back to Top](#table-of-contents)**

44. ### How to update a component every second?

     You need to use `setInterval()` to trigger the change, but you also need to clear the timer when the component unmounts to prevent errors and memory leaks.

     ```javascript
     componentDidMount() {
       this.interval = setInterval(() =&gt; this.setState({ time: Date.now() }), 1000)
     }

     componentWillUnmount() {
       clearInterval(this.interval)
     }
     ```

**[⬆ Back to Top](#table-of-contents)**

45. ### Why is a component constructor called only once?

     React&#x27;s _reconciliation_ algorithm assumes that without any information to the contrary, if a custom component appears in the same place on subsequent renders, it&#x27;s the same component as before, so reuses the previous instance rather than creating a new one.

**[⬆ Back to Top](#table-of-contents)**

46. ### How to define constants in React?

     You can use ES7 `static` field to define constant.

     ```javascript
     class MyComponent extends React.Component {
       static DEFAULT_PAGINATION = 10;
     }
     ```

**[⬆ Back to Top](#table-of-contents)**

47. ### How to programmatically trigger click event in React?

     You could use the ref prop to acquire a reference to the underlying `HTMLInputElement` object through a callback, store the reference as a class property, then use that reference to later trigger a click from your event handlers using the `HTMLElement.click` method.

     This can be done in two steps:

     1. Create ref in render method:

        ```jsx harmony
        &lt;input ref={(input) =&gt; (this.inputElement = input)} /&gt;
        ```

     2. Apply click event in your event handler:

        ```javascript
        this.inputElement.click();
        ```

**[⬆ Back to Top](#table-of-contents)**

48. ### How to make AJAX call and in which component lifecycle methods should I make an AJAX call?

     You can use AJAX libraries such as Axios, jQuery AJAX, and the browser built-in `fetch`. You should fetch data in the `componentDidMount()` lifecycle method. This is so you can use `setState()` to update your component when the data is retrieved.

     For example, the employees list fetched from API and set local state:

     ```jsx harmony
     class MyComponent extends React.Component {
       constructor(props) {
         super(props);
         this.state = {
           employees: [],
           error: null,
         };
       }

       componentDidMount() {
         fetch(&quot;https://api.example.com/items&quot;)
           .then((res) =&gt; res.json())
           .then(
             (result) =&gt; {
               this.setState({
                 employees: result.employees,
               });
             },
             (error) =&gt; {
               this.setState({ error });
             }
           );
       }

       render() {
         const { error, employees } = this.state;
         if (error) {
           return &lt;div&gt;Error: {error.message}&lt;/div&gt;;
         } else {
           return (
             &lt;ul&gt;
               {employees.map((employee) =&gt; (
                 &lt;li key={employee.name}&gt;
                   {employee.name}-{employee.experience}
                 &lt;/li&gt;
               ))}
             &lt;/ul&gt;
           );
         }
       }
     }
     ```

**[⬆ Back to Top](#table-of-contents)**

49. ### What are render props?

     **Render Props** is a simple technique for sharing code between components using a prop whose value is a function. The below component uses render prop which returns a React element.

     ```jsx harmony
     &lt;DataProvider render={(data) =&gt; &lt;h1&gt;{`Hello ${data.target}`}&lt;/h1&gt;} /&gt;
     ```

     Libraries such as React Router and DownShift are using this pattern.

**[⬆ Back to Top](#table-of-contents)**

50. ### How to dispatch an action on load?

     You can dispatch an action in `componentDidMount()` method and in `render()` method you can verify the data.

     ```javascript
     class App extends Component {
       componentDidMount() {
         this.props.fetchData();
       }

       render() {
         return this.props.isLoaded ? (
           &lt;div&gt;{&quot;Loaded&quot;}&lt;/div&gt;
         ) : (
           &lt;div&gt;{&quot;Not Loaded&quot;}&lt;/div&gt;
         );
       }
     }

     const mapStateToProps = (state) =&gt; ({
       isLoaded: state.isLoaded,
     });

     const mapDispatchToProps = { fetchData };

     export default connect(mapStateToProps, mapDispatchToProps)(App);
     ```

**[⬆ Back to Top](#table-of-contents)**

51. ### How to use `connect()` from React Redux?

     You need to follow two steps to use your store in your container:

     1. **Use `mapStateToProps()`:** It maps the state variables from your store to the props that you specify.
     2. **Connect the above props to your container:** The object returned by the `mapStateToProps` function is connected to the container. You can import `connect()` from `react-redux`.

        ```jsx harmony
        import React from &quot;md1/react&quot;;
        import { connect } from &quot;react-redux&quot;;

        class App extends React.Component {
          render() {
            return &lt;div&gt;{this.props.containerData}&lt;/div&gt;;
          }
        }

        function mapStateToProps(state) {
          return { containerData: state.data };
        }

        export default connect(mapStateToProps)(App);
        ```

**[⬆ Back to Top](#table-of-contents)**

52. ### Whats the purpose of `at` symbol in the Redux connect decorator?

     The **@** symbol is in fact a JavaScript expression used to signify decorators. _Decorators_ make it possible to annotate and modify classes and properties at design time.

     Let&#x27;s take an example setting up Redux without and with a decorator.

     - **Without decorator:**

       ```javascript
       import React from &quot;md1/react&quot;;
       import * as actionCreators from &quot;./actionCreators&quot;;
       import { bindActionCreators } from &quot;redux&quot;;
       import { connect } from &quot;react-redux&quot;;

       function mapStateToProps(state) {
         return { todos: state.todos };
       }

       function mapDispatchToProps(dispatch) {
         return { actions: bindActionCreators(actionCreators, dispatch) };
       }

       class MyApp extends React.Component {
         // ...define your main app here
       }

       export default connect(mapStateToProps, mapDispatchToProps)(MyApp);
       ```

     - **With decorator:**

       ```javascript
       import React from &quot;md1/react&quot;;
       import * as actionCreators from &quot;./actionCreators&quot;;
       import { bindActionCreators } from &quot;redux&quot;;
       import { connect } from &quot;react-redux&quot;;

       function mapStateToProps(state) {
         return { todos: state.todos };
       }

       function mapDispatchToProps(dispatch) {
         return { actions: bindActionCreators(actionCreators, dispatch) };
       }

       @connect(mapStateToProps, mapDispatchToProps)
       export default class MyApp extends React.Component {
         // ...define your main app here
       }
       ```

     The above examples are almost similar except the usage of decorator. The decorator syntax isn&#x27;t built into any JavaScript runtimes yet, and is still experimental and subject to change. You can use babel for the decorators support.

**[⬆ Back to Top](#table-of-contents)**

53. ### How to use TypeScript in `create-react-app` application?

     Starting from react-scripts@2.1.0 or higher, there is a built-in support for typescript. i.e, `create-react-app` now supports typescript natively. You can just pass `--typescript` option as below

     ```bash
     npx create-react-app my-app --typescript

     # or

     yarn create react-app my-app --typescript
     ```

     But for lower versions of react scripts, just supply `--scripts-version` option as `react-scripts-ts` while you create a new project. `react-scripts-ts` is a set of adjustments to take the standard `create-react-app` project pipeline and bring TypeScript into the mix.

     Now the project layout should look like the following:

     ```
     my-app/
     ├─ .gitignore
     ├─ images.d.ts
     ├─ node_modules/
     ├─ public/
     ├─ src/
     │  └─ ...
     ├─ package.json
     ├─ tsconfig.json
     ├─ tsconfig.prod.json
     ├─ tsconfig.test.json
     └─ tslint.json
     ```
**[⬆ Back to Top](#table-of-contents)**

54. ### Does the statics object work with ES6 classes in React?

     No, `statics` only works with `React.createClass()`:

     ```javascript
     someComponent = React.createClass({
       statics: {
         someMethod: function () {
           // ..
         },
       },
     });
     ```

     But you can write statics inside ES6+ classes as below,

     ```javascript
     class Component extends React.Component {
       static propTypes = {
         // ...
       };

       static someMethod() {
         // ...
       }
     }
     ```

     or writing them outside class as below,

     ```javascript
     class Component extends React.Component {
        ....
     }

     Component.propTypes = {...}
     Component.someMethod = function(){....}
     ```

**[⬆ Back to Top](#table-of-contents)**

55. ### Why are inline ref callbacks or functions not recommended?

     If the ref callback is defined as an inline function, it will get called twice during updates, first with null and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one.

     ```jsx
     class UserForm extends Component {
       handleSubmit = () =&gt; {
         console.log(&quot;Input Value is: &quot;, this.input.value);
       };

       render() {
         return (
           &lt;form onSubmit={this.handleSubmit}&gt;
             &lt;input type=&quot;text&quot; ref={(input) =&gt; (this.input = input)} /&gt; //
             Access DOM input in handle submit
             &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
           &lt;/form&gt;
         );
       }
     }
     ```

     But our expectation is for the ref callback to get called once, when the component mounts. One quick fix is to use the ES7 class property syntax to define the function

     ```jsx
     class UserForm extends Component {
       handleSubmit = () =&gt; {
         console.log(&quot;Input Value is: &quot;, this.input.value);
       };

       setSearchInput = (input) =&gt; {
         this.input = input;
       };

       render() {
         return (
           &lt;form onSubmit={this.handleSubmit}&gt;
             &lt;input type=&quot;text&quot; ref={this.setSearchInput} /&gt; // Access DOM input
             in handle submit
             &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
           &lt;/form&gt;
         );
       }
     }
     ```

  **[⬆ Back to Top](#table-of-contents)**

56. ### What are HOC factory implementations?

     There are two main ways of implementing HOCs in React.

     1. Props Proxy (PP) and
     2. Inheritance Inversion (II).

     But they follow different approaches for manipulating the _WrappedComponent_.

     **Props Proxy**

     In this approach, the render method of the HOC returns a React Element of the type of the WrappedComponent. We also pass through the props that the HOC receives, hence the name **Props Proxy**.

     ```jsx
     function ppHOC(WrappedComponent) {
       return class PP extends React.Component {
         render() {
           return &lt;WrappedComponent {...this.props} /&gt;;
         }
       };
     }
     ```

     **Inheritance Inversion**

     In this approach, the returned HOC class (Enhancer) extends the WrappedComponent. It is called Inheritance Inversion because instead of the WrappedComponent extending some Enhancer class, it is passively extended by the Enhancer. In this way the relationship between them seems **inverse**.

     ```jsx
     function iiHOC(WrappedComponent) {
       return class Enhancer extends WrappedComponent {
         render() {
           return super.render();
         }
       };
     }
     ```

  **[⬆ Back to Top](#table-of-contents)**

57. ### How to use class field declarations syntax in React classes?

     React Class Components can be made much more concise using the class field declarations. You can initialize the local state without using the constructor and declare class methods by using arrow functions without the extra need to bind them.

     Let&#x27;s take a counter example to demonstrate class field declarations for state without using constructor and methods without binding,

     ```jsx
     class Counter extends Component {
       state = { value: 0 };

       handleIncrement = () =&gt; {
         this.setState((prevState) =&gt; ({
           value: prevState.value + 1,
         }));
       };

       handleDecrement = () =&gt; {
         this.setState((prevState) =&gt; ({
           value: prevState.value - 1,
         }));
       };

       render() {
         return (
           &lt;div&gt;
             {this.state.value}

             &lt;button onClick={this.handleIncrement}&gt;+&lt;/button&gt;
             &lt;button onClick={this.handleDecrement}&gt;-&lt;/button&gt;
           &lt;/div&gt;
         );
       }
     }
     ```

**[⬆ Back to Top](#table-of-contents)**

58. ### Why do you not need error boundaries for event handlers?

     Error boundaries do not catch errors inside event handlers.

     React doesn’t need error boundaries to recover from errors in event handlers. Unlike the render method and lifecycle methods, the event handlers don’t happen during rendering. So if they throw, React still knows what to display on the screen.

     If you need to catch an error inside an event handler, use the regular JavaScript try / catch statement:

     ```javascript
     class MyComponent extends React.Component {
       constructor(props) {
         super(props);
         this.state = { error: null };
         this.handleClick = this.handleClick.bind(this);
       }

       handleClick() {
         try {
           // Do something that could throw
         } catch (error) {
           this.setState({ error });
         }
       }

       render() {
         if (this.state.error) {
           return &lt;h1&gt;Caught an error.&lt;/h1&gt;;
         }
         return &lt;button onClick={this.handleClick}&gt;Click Me&lt;/button&gt;;
       }
     }
     ```

     Note that the above example is demonstrating regular JavaScript behavior and doesn’t use error boundaries.

**[⬆ Back to Top](#table-of-contents)**

59. ### What is the difference between try catch block and error boundaries?

     Try catch block works with imperative code whereas error boundaries are meant for declarative code to render on the screen.

     For example, the try catch block used for below imperative code

     ```javascript
     try {
       showButton();
     } catch (error) {
       // ...
     }
     ```

     Whereas error boundaries wrap declarative code as below,

     ```javascript
     &lt;ErrorBoundary&gt;
       &lt;MyComponent /&gt;
     &lt;/ErrorBoundary&gt;
     ```

     So if an error occurs in a **componentDidUpdate** method caused by a **setState** somewhere deep in the tree, it will still correctly propagate to the closest error boundary.

**[⬆ Back to Top](#table-of-contents)**

60. ### What is the required method to be defined for a class component?
     The `render()` method is the only required method in a class component. i.e, All methods other than render method are optional for a class component.

  **[⬆ Back to Top](#table-of-contents)**

61. ### What are the possible return types of render method?

     Below are the list of following types used and return from render method,

     1. **React elements:** Elements that instruct React to render a DOM node. It includes html elements such as `&lt;div/&gt;` and user defined elements.
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

     ```javascript
     constructor(props) {
       super(props);
       // Don&#x27;t call this.setState() here!
       this.state = { counter: 0 };
       this.handleClick = this.handleClick.bind(this);
     }
     ```

**[⬆ Back to Top](#table-of-contents)**

63. ### Is it mandatory to define constructor for React component?
     No, it is not mandatory. i.e, If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.

**[⬆ Back to Top](#table-of-contents)**

64. ### Why should not call setState in componentWillUnmount?
     You should not call `setState()` in `componentWillUnmount()` because once a component instance is unmounted, it will never be mounted again.

**[⬆ Back to Top](#table-of-contents)**

65. ### What is the purpose of getDerivedStateFromError?

     This lifecycle method is invoked after an error has been thrown by a descendant component. It receives the error that was thrown as a parameter and should return a value to update state.

     The signature of the lifecycle method is as follows,

     ```javascript
     static getDerivedStateFromError(error)
     ```

     Let us take error boundary use case with the above lifecycle method for demonstration purpose,

     ```javascript
     class ErrorBoundary extends React.Component {
       constructor(props) {
         super(props);
         this.state = { hasError: false };
       }

       static getDerivedStateFromError(error) {
         // Update state so the next render will show the fallback UI.
         return { hasError: true };
       }

       render() {
         if (this.state.hasError) {
           // You can render any custom fallback UI
           return &lt;h1&gt;Something went wrong.&lt;/h1&gt;;
         }

         return this.props.children;
       }
     }
     ```

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

     ```javascript
     ReactDOM.unmountComponentAtNode(container);
     ```

**[⬆ Back to Top](#table-of-contents)**

69. ### What are the limitations with HOCs?

     Higher-order components come with a few caveats apart from its benefits. Below are the few listed in an order,

     1. **Don’t use HOCs inside the render method:**
        It is not recommended to apply a HOC to a component within the render method of a component.

        ```javascript
        render() {
          // A new version of EnhancedComponent is created on every render
          // EnhancedComponent1 !== EnhancedComponent2
          const EnhancedComponent = enhance(MyComponent);
          // That causes the entire subtree to unmount/remount each time!
          return &lt;EnhancedComponent /&gt;;
        }
        ```

        The above code impacts on performance by remounting a component that causes the state of that component and all of its children to be lost. Instead, apply HOCs outside the component definition so that the resulting component is created only once.

     2. **Static methods must be copied over:**
        When you apply a HOC to a component the new component does not have any of the static methods of the original component

        ```javascript
        // Define a static method
        WrappedComponent.staticMethod = function () {
          /*...*/
        };
        // Now apply a HOC
        const EnhancedComponent = enhance(WrappedComponent);

        // The enhanced component has no static method
        typeof EnhancedComponent.staticMethod === &quot;undefined&quot;; // true
        ```

        You can overcome this by copying the methods onto the container before returning it,

        ```javascript
        function enhance(WrappedComponent) {
          class Enhance extends React.Component {
            /*...*/
          }
          // Must know exactly which method(s) to copy :(
          Enhance.staticMethod = WrappedComponent.staticMethod;
          return Enhance;
        }
        ```

     3. **Refs aren’t passed through:**
        For HOCs you need to pass through all props to the wrapped component but this does not work for refs. This is because ref is not really a prop similar to key. In this case you need to use the React.forwardRef API

**[⬆ Back to Top](#table-of-contents)**

70. ### How to debug forwardRefs in DevTools?

     **React.forwardRef** accepts a render function as parameter and DevTools uses this function to determine what to display for the ref forwarding component.

     For example, If you don&#x27;t name the render function or not using displayName property then it will appear as ”ForwardRef” in the DevTools,

     ```javascript
     const WrappedComponent = React.forwardRef((props, ref) =&gt; {
       return &lt;LogProps {...props} forwardedRef={ref} /&gt;;
     });
     ```

     But If you name the render function then it will appear as **”ForwardRef(myFunction)”**

     ```javascript
     const WrappedComponent = React.forwardRef(function myFunction(props, ref) {
       return &lt;LogProps {...props} forwardedRef={ref} /&gt;;
     });
     ```

     As an alternative, You can also set displayName property for forwardRef function,

     ```javascript
     function logProps(Component) {
       class LogProps extends React.Component {
         // ...
       }

       function forwardRef(props, ref) {
         return &lt;LogProps {...props} forwardedRef={ref} /&gt;;
       }

       // Give this component a more helpful display name in DevTools.
       // e.g. &quot;ForwardRef(logProps(MyComponent))&quot;
       const name = Component.displayName || Component.name;
       forwardRef.displayName = `logProps(${name})`;

       return React.forwardRef(forwardRef);
     }
     ```

**[⬆ Back to Top](#table-of-contents)**

71. ### Is it good to use arrow functions in render methods?

     Yes, You can use. It is often the easiest way to pass parameters to callback functions. But you need to optimize the performance while using it.

     ```javascript
     class Foo extends Component {
       handleClick() {
         console.log(&quot;Click happened&quot;);
       }
       render() {
         return &lt;button onClick={() =&gt; this.handleClick()}&gt;Click Me&lt;/button&gt;;
       }
     }
     ```

     **Note:** Using an arrow function in render method creates a new function each time the component renders, which may have performance implications

**[⬆ Back to Top](#table-of-contents)**

72. ### How do you say that state updates are merged?

     When you call setState() in the component, React merges the object you provide into the current state.

     For example, let us take a facebook user with posts and comments details as state variables,

     ```javascript
       constructor(props) {
         super(props);
         this.state = {
           posts: [],
           comments: []
         };
       }
     ```

     Now you can update them independently with separate `setState()` calls as below,

     ```javascript
      componentDidMount() {
         fetchPosts().then(response =&gt; {
           this.setState({
             posts: response.posts
           });
         });

         fetchComments().then(response =&gt; {
           this.setState({
             comments: response.comments
           });
         });
       }
     ```

     As mentioned in the above code snippets, `this.setState({comments})` updates only comments variable without modifying or replacing `posts` variable.

**[⬆ Back to Top](#table-of-contents)**

73. ### How do you pass arguments to an event handler?

     During iterations or loops, it is common to pass an extra parameter to an event handler. This can be achieved through arrow functions or bind method.

     Let us take an example of user details updated in a grid,

     ```javascript
     &lt;button onClick={(e) =&gt; this.updateUser(userId, e)}&gt;Update User details&lt;/button&gt;
     &lt;button onClick={this.updateUser.bind(this, userId)}&gt;Update User details&lt;/button&gt;
     ```

     In the both approaches, the synthetic argument `e` is passed as a second argument. You need to pass it explicitly for arrow functions and it will be passed automatically for `bind` method.

**[⬆ Back to Top](#table-of-contents)**

74. ### How to prevent component from rendering?

     You can prevent component from rendering by returning null based on specific condition. This way it can conditionally render component.

     ```javascript
     function Greeting(props) {
       if (!props.loggedIn) {
         return null;
       }

       return &lt;div className=&quot;greeting&quot;&gt;welcome, {props.name}&lt;/div&gt;;
     }
     ```

     ```javascript
     class User extends React.Component {
       constructor(props) {
         super(props);
         this.state = {loggedIn: false, name: &#x27;John&#x27;};
       }

       render() {
        return (
            &lt;div&gt;
              //Prevent component render if it is not loggedIn
              &lt;Greeting loggedIn={this.state.loggedIn} /&gt;
              &lt;UserDetails name={this.state.name}&gt;
            &lt;/div&gt;
        );
       }
     ```

     In the above example, the `greeting` component skips its rendering section by applying condition and returning null value.

**[⬆ Back to Top](#table-of-contents)**

75. ### Give an example on How to use context?

     **Context** is designed to share data that can be considered **global** for a tree of React components.

     For example, in the code below lets manually thread through a “theme” prop in order to style the Button component.

     ```javascript
     //Lets create a context with a default theme value &quot;luna&quot;
     const ThemeContext = React.createContext(&quot;luna&quot;);
     // Create App component where it uses provider to pass theme value in the tree
     class App extends React.Component {
       render() {
         return (
           &lt;ThemeContext.Provider value=&quot;nova&quot;&gt;
             &lt;Toolbar /&gt;
           &lt;/ThemeContext.Provider&gt;
         );
       }
     }
     // A middle component where you don&#x27;t need to pass theme prop anymore
     function Toolbar(props) {
       return (
         &lt;div&gt;
           &lt;ThemedButton /&gt;
         &lt;/div&gt;
       );
     }
     // Lets read theme value in the button component to use
     class ThemedButton extends React.Component {
       static contextType = ThemeContext;
       render() {
         return &lt;Button theme={this.context} /&gt;;
       }
     }
     ```

**[⬆ Back to Top](#table-of-contents)**

76. ### How do you use contextType?

     ContextType is used to consume the context object. The contextType property can be used in two ways,

     1. **contextType as property of class:**
        The contextType property on a class can be assigned a Context object created by React.createContext(). After that, you can consume the nearest current value of that Context type using this.context in any of the lifecycle methods and render function.

        Lets assign contextType property on MyClass as below,

        ```javascript
        class MyClass extends React.Component {
          componentDidMount() {
            let value = this.context;
            /* perform a side-effect at mount using the value of MyContext */
          }
          componentDidUpdate() {
            let value = this.context;
            /* ... */
          }
          componentWillUnmount() {
            let value = this.context;
            /* ... */
          }
          render() {
            let value = this.context;
            /* render something based on the value of MyContext */
          }
        }
        MyClass.contextType = MyContext;
        ```

     2. **Static field**
        You can use a static class field to initialize your contextType using public class field syntax.

        ```javascript
        class MyClass extends React.Component {
          static contextType = MyContext;
          render() {
            let value = this.context;
            /* render something based on the value */
          }
        }
        ```

**[⬆ Back to Top](#table-of-contents)**

77. ### What is a consumer?

     A Consumer is a React component that subscribes to context changes. It requires a function as a child which receives current context value as argument and returns a react node. The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree.

     Lets take a simple example,

     ```javascript
     &lt;MyContext.Consumer&gt;
       {value =&gt; /* render something based on the context value */}
     &lt;/MyContext.Consumer&gt;
     ```

**[⬆ Back to Top](#table-of-contents)**

78. ### How do you solve performance corner cases while using context?

     The context uses reference identity to determine when to re-render, there are some gotchas that could trigger unintentional renders in consumers when a provider’s parent re-renders.

     For example, the code below will re-render all consumers every time the Provider re-renders because a new object is always created for value.

     ```javascript
     class App extends React.Component {
       render() {
         return (
           &lt;Provider value={{ something: &quot;something&quot; }}&gt;
             &lt;Toolbar /&gt;
           &lt;/Provider&gt;
         );
       }
     }
     ```

     This can be solved by lifting up the value to parent state,

     ```javascript
     class App extends React.Component {
       constructor(props) {
         super(props);
         this.state = {
           value: { something: &quot;something&quot; },
         };
       }

       render() {
         return (
           &lt;Provider value={this.state.value}&gt;
             &lt;Toolbar /&gt;
           &lt;/Provider&gt;
         );
       }
     }
     ```

**[⬆ Back to Top](#table-of-contents)**

79. ### What is the purpose of forward ref in HOCs?

     Refs will not get passed through because ref is not a prop. It is handled differently by React just like **key**. If you add a ref to a HOC, the ref will refer to the outermost container component, not the wrapped component. In this case, you can use Forward Ref API. For example, we can explicitly forward refs to the inner FancyButton component using the React.forwardRef API.

     The below HOC logs all props,

     ```javascript
     function logProps(Component) {
       class LogProps extends React.Component {
         componentDidUpdate(prevProps) {
           console.log(&quot;old props:&quot;, prevProps);
           console.log(&quot;new props:&quot;, this.props);
         }

         render() {
           const { forwardedRef, ...rest } = this.props;

           // Assign the custom prop &quot;forwardedRef&quot; as a ref
           return &lt;Component ref={forwardedRef} {...rest} /&gt;;
         }
       }

       return React.forwardRef((props, ref) =&gt; {
         return &lt;LogProps {...props} forwardedRef={ref} /&gt;;
       });
     }
     ```

     Let&#x27;s use this HOC to log all props that get passed to our “fancy button” component,

     ```javascript
     class FancyButton extends React.Component {
       focus() {
         // ...
       }

       // ...
     }
     export default logProps(FancyButton);
     ```

     Now let&#x27;s create a ref and pass it to FancyButton component. In this case, you can set focus to button element.

     ```javascript
     import FancyButton from &quot;./FancyButton&quot;;

     const ref = React.createRef();
     ref.current.focus();
     &lt;FancyButton label=&quot;Click Me&quot; handleClick={handleClick} ref={ref} /&gt;;
     ```

**[⬆ Back to Top](#table-of-contents)**

80. ### Is ref argument available for all functions or class components?
     Regular function or class components don’t receive the ref argument, and ref is not available in props either. The second ref argument only exists when you define a component with React.forwardRef call.

**[⬆ Back to Top](#table-of-contents)**

81. ### Why do you need additional care for component libraries while using forward refs?
     When you start using forwardRef in a component library, you should treat it as a breaking change and release a new major version of your library. This is because your library likely has a different behavior such as what refs get assigned to, and what types are exported. These changes can break apps and other libraries that depend on the old behavior.

**[⬆ Back to Top](#table-of-contents)**

82. ### How to create react class components without ES6?

     If you don’t use ES6 then you may need to use the create-react-class module instead. For default props, you need to define getDefaultProps() as a function on the passed object. Whereas for initial state, you have to provide a separate getInitialState method that returns the initial state.

     ```javascript
     var Greeting = createReactClass({
       getDefaultProps: function () {
         return {
           name: &quot;Jhohn&quot;,
         };
       },
       getInitialState: function () {
         return { message: this.props.message };
       },
       handleClick: function () {
         console.log(this.state.message);
       },
       render: function () {
         return &lt;h1&gt;Hello, {this.props.name}&lt;/h1&gt;;
       },
     });
     ```

     **Note:** If you use createReactClass then auto binding is available for all methods. i.e, You don&#x27;t need to use `.bind(this)` with in constructor for event handlers.

**[⬆ Back to Top](#table-of-contents)**

83. ### Is it possible to use react without JSX?

     Yes, JSX is not mandatory for using React. Actually it is convenient when you don’t want to set up compilation in your build environment. Each JSX element is just syntactic sugar for calling `React.createElement(component, props, ...children)`.

     For example, let us take a greeting example with JSX,

     ```javascript
     class Greeting extends React.Component {
       render() {
         return &lt;div&gt;Hello {this.props.message}&lt;/div&gt;;
       }
     }

     ReactDOM.render(
       &lt;Greeting message=&quot;World&quot; /&gt;,
       document.getElementById(&quot;root&quot;)
     );
     ```

     You can write the same code without JSX as below,

     ```javascript
     class Greeting extends React.Component {
       render() {
         return React.createElement(&quot;div&quot;, null, `Hello ${this.props.message}`);
       }
     }

     ReactDOM.render(
       React.createElement(Greeting, { message: &quot;World&quot; }, null),
       document.getElementById(&quot;root&quot;)
     );
     ```

**[⬆ Back to Top](#table-of-contents)**

84. ### How do you create HOC using render props?

     You can implement most higher-order components (HOC) using a regular component with a render prop. For example, if you would prefer to have a withMouse HOC instead of a &lt;Mouse&gt; component, you could easily create one using a regular &lt;Mouse&gt; with a render prop.

     ```javascript
     function withMouse(Component) {
       return class extends React.Component {
         render() {
           return (
             &lt;Mouse
               render={(mouse) =&gt; &lt;Component {...this.props} mouse={mouse} /&gt;}
             /&gt;
           );
         }
       };
     }
     ```

     This way render props gives the flexibility of using either pattern.

**[⬆ Back to Top](#table-of-contents)**

85. ### What is react scripts?
     The `react-scripts` package is a set of scripts from the create-react-app starter pack which helps you kick off projects without configuring. The `react-scripts start` command sets up the development environment and starts a server, as well as hot module reloading.

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
     The `ReactDOMServer#renderToNodeStream` method is used to generate HTML on the server and send the markup down on the initial request for faster page loads. It also helps search engines to crawl your pages easily for SEO purposes.
     **Note:** Remember this method is not available in the browser but only server.

**[⬆ Back to Top](#table-of-contents)**

88. ### How do you get redux scaffolding using create-react-app?
     Redux team has provided official redux+js or redux+typescript templates for create-react-app project. The generated project setup includes,
     1. Redux Toolkit and React-Redux dependencies
     2. Create and configure Redux store
     3. React-Redux `&lt;Provider&gt;` passing the store to React components
     4. Small &quot;counter&quot; example to demo how to add redux logic and React-Redux hooks API to interact with the store from components
        The below commands need to be executed along with template option as below,
     5. **Javascript template:**
     ```js
     npx create-react-app my-app --template redux
     ```
     2. **Typescript template:**
     ```js
     npx create-react-app my-app --template redux-typescript
     ```
     
  **[⬆ Back to Top](#table-of-contents)**

89. ### What is state mutation and how to prevent it?

     `State mutation` happens when you try to update the state of a component without actually using `setState` function. This can happen when you are trying to do some computations using a state variable and unknowingly save the result in the same state variable. This is the main reason why it is advised to return new instances of state variables from the reducers by using Object.assign({}, ...) or spread syntax.

     This can cause unknown issues in the UI as the value of the state variable got updated without telling React to check what all components were being affected from this update and it can cause UI bugs.

     Ex:

     ```javascript
     class A extends React.component {
       constructor(props) {
         super(props);
         this.state = {
           loading: false
         }
      }

     componentDidMount() {
       let { loading } = this.state;
       loading = (() =&gt; true)(); // Trying to perform an operation and directly saving in a state variable
     }

     ```

     **How to prevent it:** Make sure your state variables are immutable by either enforcing immutability by using plugins like Immutable.js, always using `setState` to make updates, and returning new instances in reducers when sending updated state values.

**[⬆ Back to Top](#table-of-contents)**


## Disclaimer

The questions provided in this repository are the summary of frequently asked questions across numerous companies. We cannot guarantee that these questions will actually be asked during your interview process, nor should you focus on memorizing all of them. The primary purpose is for you to get a sense of what some companies might ask — do not get discouraged if you don&#x27;t know the answer to all of them ⁠— that is ok!

Good luck with your interview 😊

---`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = reactquestionanswersContentData;
}
