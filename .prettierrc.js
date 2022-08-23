module.exports = {
  // 每行最多字符数，默认80
  printWidth: 100,
  // 用制表符(tab)不是空格缩进行
  useTabs: false,
  // 指定每个缩进级别的空格数
  tabWidth: 2,
  // 在每条语句的末尾添加一个分号 默认true
  semi: false,
  // 使用单引号代替双引号 默认false
  singleQuote: true,
  // 引用对象中的属性，对象key添加引号方式  as-needed仅在需要时在对象属性周围添加引号
  quoteProps: 'as-needed',
  // 有效的尾随逗号 es5 中有效的尾随逗号(默认) | none 没有逗号 | all 尾随逗号
  trailingComma: 'none',
  // 在对象文字中的括号之间打印空格
  bracketSpacing: true,
  // 决定html元素首元素右侧尖括号(>)是否换行,不包含自闭合元素 false另起一行
  bracketSameLine: false,
  // 箭头函数参数周围包含括号 always有括号(默认) avoid无括号
  arrowParens: 'always',

  // 规定使用哪一种解析器
  // Prettier 会自动从输入文件路径推断解析器，因此您不必更改此设置
  // parser: require("./my-parser")

  // 是否缩进Vue文件中的<script>和<style>标签,
  // 不缩进可以保存缩进级别，但可能破坏编辑器中的代码折叠(默认false)
  vueIndentScriptAndStyle: true,
  // 行尾形式 lf|crlf|cr|auto  默认lf
  endOfLine: 'auto'
}
