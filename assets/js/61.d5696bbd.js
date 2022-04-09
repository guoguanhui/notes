(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{615:function(v,_,n){"use strict";n.r(_);var t=n(14),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,n=v._self._c||_;return n("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[n("h2",{attrs:{id:"引言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[v._v("#")]),v._v(" 引言")]),v._v(" "),n("p",[v._v("对于 vim 的学习，有一个命令是"),n("code",[v._v("vimtutor")]),v._v("。这是一个非常好的边操作边学的教程，大家学习几遍，即可很好的掌握 vim 的大多数基础功能了。如果想看中文的版本，可以执行"),n("code",[v._v("vimtutor -g zh")]),v._v("。")]),v._v(" "),n("h2",{attrs:{id:"基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[v._v("#")]),v._v(" 基本使用")]),v._v(" "),n("p",[v._v("==首先确认在正常模式下：按下escape键==")]),v._v(" "),n("ol",[n("li",[n("p",[v._v("光标在屏幕文本中的移动既可以用箭头键，也可以使用 hjkl 字母键。\n==h (左移)       j (下行)       k (上行)     l (右移)==")])]),v._v(" "),n("li",[n("p",[v._v("欲进入 Vim 编辑器(从命令行提示符)，请输入：vim 文件名 <回车>")])]),v._v(" "),n("li",[n("p",[v._v("欲退出 Vim 编辑器，请输入 <ESC>   :q!   <回车> 放弃所有改动。\n或者输入 <ESC>   :wq   <回车> 保存改动。")])]),v._v(" "),n("li",[n("p",[n("strong",[v._v("在正常模式下删除光标所在位置的字符，请按： x")])])]),v._v(" "),n("li",[n("p",[n("strong",[v._v("欲插入或添加文本，请输入：")])]),v._v(" "),n("p",[v._v("==i==   输入欲插入文本   <ESC>              在光标前插入文本\n==A==   输入欲添加文本   <ESC>             在一行后添加文本\n==o==                                                                在光标下方插入新的一行")])])]),v._v(" "),n("p",[v._v("特别提示：按下 <ESC> 键会带您回到正常模式或者撤消一个不想输入或部分完整\n的命令。")]),v._v(" "),n("h2",{attrs:{id:"删除"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[v._v("#")]),v._v(" 删除")]),v._v(" "),n("p",[v._v("==首先确认在正常模式下：按下escape键==")]),v._v(" "),n("ol",[n("li",[n("p",[v._v("欲从当前光标删除至下一个单词，请输入：dw")])]),v._v(" "),n("li",[n("p",[v._v("==欲从当前光标删除至当前行末尾，请输入：d$==")])]),v._v(" "),n("li",[n("p",[v._v("==欲删除整行，请输入：dd==")])]),v._v(" "),n("li",[n("p",[v._v("欲重复一个动作，请在它前面加上一个数字：2w")])]),v._v(" "),n("li",[n("p",[v._v("在正常模式下修改命令的格式是：\noperator   [number]   motion\n其中：\noperator - 操作符，代表要做的事情，比如 d 代表删除\n[number] - 可以附加的数字，代表动作重复的次数\nmotion   - 动作，代表在所操作的文本上的移动，例如 w 代表单词(word)，\n$ 代表行末等等。")])]),v._v(" "),n("li",[n("p",[v._v("==欲移动光标到行首，请按数字0键：0==")])]),v._v(" "),n("li",[n("p",[v._v("==欲撤消以前的操作，请输入：u (小写的u)\n欲撤消在一行中所做的改动，请输入：U (大写的U)\n欲撤消以前的撤消命令，恢复以前的操作结果，请输入：CTRL-R==")])])]),v._v(" "),n("h2",{attrs:{id:"插入-修改"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插入-修改"}},[v._v("#")]),v._v(" 插入/修改")]),v._v(" "),n("p",[v._v("==首先确认在正常模式下：按下escape键==")]),v._v(" "),n("ol",[n("li",[n("p",[v._v("要重新置入已经删除的文本内容，请按小写字母 p 键。该操作可以将已删除\n的文本内容置于光标之后。如果最后一次删除的是一个整行，那么该行将置\n于当前光标所在行的下一行。")])]),v._v(" "),n("li",[n("p",[v._v("要"),n("strong",[v._v("替换光标所在位置的字符")]),v._v("，请输入小写的 r 和要替换掉原位置字符的新字\n符即可。")])]),v._v(" "),n("li",[n("p",[v._v("更改类命令允许您"),n("strong",[v._v("改变从当前光标所在位置直到动作指示的位置中间的文本")]),v._v("。\n比如输入 ce 可以替换当前光标到单词的末尾的内容；输入 c$ 可以替换当\n前光标到行末的内容。")])]),v._v(" "),n("li",[n("p",[v._v("更改类命令的格式是：")]),v._v(" "),n("p",[v._v("c   [number]   motion")])])]),v._v(" "),n("h2",{attrs:{id:"跳转-查找-替换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#跳转-查找-替换"}},[v._v("#")]),v._v(" 跳转/查找/替换")]),v._v(" "),n("p",[v._v("==首先确认在正常模式下：按下escape键==")]),v._v(" "),n("ol",[n("li",[n("p",[v._v("==CTRL-G 用于显示当前光标所在位置和文件状态信息。\nG 用于将光标跳转至文件最后一行。\n先敲入一个行号然后输入大写 G 则是将光标移动至该行号代表的行。\ngg 用于将光标跳转至文件第一行。==")])]),v._v(" "),n("li",[n("p",[n("strong",[v._v("输入 / 然后紧随一个字符串是在当前所编辑的文档中正向查找该字符串。")]),v._v("\n输入 ? 然后紧随一个字符串则是在当前所编辑的文档中反向查找该字符串。\n==完成一次查找之后按 n 键是重复上一次的命令，可在同一方向上查找下一个匹配字符串所在；或者按大写 N 向相反方向查找下一匹配字符串所在。==\nCTRL-O 带您跳转回较旧的位置，CTRL-I 则带您到较新的位置。")])]),v._v(" "),n("li",[n("p",[v._v("如果光标当前位置是括号(、)、[、]、{、}，按 % 会将光标移动到配对的括号上。")])]),v._v(" "),n("li",[n("p",[n("strong",[v._v("在一行内替换头一个字符串 old 为新的字符串 new，请输入  😒/old/new")]),v._v("\n在一行内替换所有的字符串 old 为新的字符串 new，请输入  😒/old/new/g\n在两行内替换所有的字符串 old 为新的字符串 new，请输入  :#,#s/old/new/g\n在文件内替换所有的字符串 old 为新的字符串 new，请输入  :%s/old/new/g\n进行全文替换时询问用户确认每个替换需添加 c 标志        :%s/old/new/gc")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);