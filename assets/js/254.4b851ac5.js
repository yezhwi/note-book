(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{1270:function(s,a,n){"use strict";n.r(a);var e=n(15),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_181-商品详情页动态渲染系统：在-centos-6-安装和部署-docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_181-商品详情页动态渲染系统：在-centos-6-安装和部署-docker"}},[s._v("#")]),s._v(" 181. 商品详情页动态渲染系统：在 CentOS 6 安装和部署 Docker")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("注意，docker 需要在 centOS 7 中安装，这里安装 CentOS-7-x86_64-Minimal-1708.iso ，\n然后在上面安装 docker")]),s._v(" "),n("p",[s._v("部分配置可以参考："),n("RouterLink",{attrs:{to:"/cache-pdp/dr/135.html"}},[s._v("之前的 centos 安装")])],1)]),s._v(" "),n("h2",{attrs:{id:"centos-7-安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#centos-7-安装"}},[s._v("#")]),s._v(" centOS 7 安装")]),s._v(" "),n("ul",[n("li",[s._v("使用版本：CentOS-7-x86_64-Minimal-1708.iso，")]),s._v(" "),n("li",[s._v("账户/密码 root/hadoop123")])]),s._v(" "),n("h3",{attrs:{id:"配置网络"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置网络"}},[s._v("#")]),s._v(" 配置网络")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/network-scripts/ifcfg-enp0s3\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先让它动态分配一个ip地址")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ONBOOT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启服务")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" network restart\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看分配的地址")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再设置静态 ip 地址")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BOOTPROTO")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("static\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPADDR")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.20\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NETMASK")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GATEWAY")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.1\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启网络服务")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" network restart\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看是否设置成功")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[s._v("执行以下命令报错，是缺少了 dns 配置")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ping www.baidu.com")]),s._v("\nping: www.baidu.com: Name or "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" not known\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("配置 dns")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查 NetManager 的状态：")]),s._v("\nsystemctl status NetworkManager.service\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查 NetManager 管理的网络接口：")]),s._v("\nnmcli dev status\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查 NetManager 管理的网络连接：")]),s._v("\nnmcli connection show\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 dns：")]),s._v("\nnmcli con mod enp0s3 ipv4.dns "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"114.114.114.114 8.8.8.8"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 让 dns 配置生效：")]),s._v("\nnmcli con up enp0s3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"关闭防火墙"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关闭防火墙"}},[s._v("#")]),s._v(" 关闭防火墙")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("systemctl stop firewalld.service\nsystemctl disable firewalld.service\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"安装-java-8"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-java-8"}},[s._v("#")]),s._v(" 安装 java 8")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装上传下载工具")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" lrzsz\nrz 选择 jdk-8u202-linux-i586.rpm\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh jdk-8u202-linux-i586.rpm\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载可以使用 rpm -e jdk1.8-2000:1.8.0_202-fcs.i586")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装过程中就出现了以下类似的错误")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行 java -version 出现以下错误")]),s._v("\n-bash: /usr/bin/java: /lib/ld-linux.so.2: bad ELF interpreter: No such "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\n\n解决方案如下：\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 glibc.i686")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" glibc.i686\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载安装不完整的 java")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -e jdk1.8-2000:1.8.0_202-fcs.i586\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh jdk-8u202-linux-i586.rpm\n\n通过此方式安装之后，不需要配置环境变量\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("h2",{attrs:{id:"初步安装和启动-docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初步安装和启动-docker"}},[s._v("#")]),s._v(" 初步安装和启动 docker")]),s._v(" "),n("p",[s._v("如果这里的安装步骤让你感到不解，那么可以"),n("a",{attrs:{href:"https://github.com/zq99299/essay-note/blob/master/chapter/container/index.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考此教程"),n("OutboundLink")],1),s._v(" ，里面参考了官网的安装教程")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum update -y\n\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加 docker-ce 仓库地址")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo")]),s._v("\nyum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n\nyum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce\n\nsystemctl start docker\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"设置镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置镜像"}},[s._v("#")]),s._v(" 设置镜像")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/docker/daemon.json\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置成 阿里云的")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"registry-mirrors"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://aj2rgad5.mirror.aliyuncs.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"开放管理端口映射"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开放管理端口映射"}},[s._v("#")]),s._v(" 开放管理端口映射")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /lib/systemd/system/docker.service\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将第 11 行的 ExecStart=/usr/bin/dockerd，替换为：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2375 是管理端口，7654 是备用端口")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock -H tcp://0.0.0.0:7654\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 ~/.bashrc 中写入 docker 管理端口")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/.bashrc\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DOCKER_HOST")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tcp://0.0.0.0:2375\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h2",{attrs:{id:"测试-docker-是否正常安装和运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试-docker-是否正常安装和运行"}},[s._v("#")]),s._v(" 测试 docker 是否正常安装和运行")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 记得先停止 docker 再运行，因为之前配置了端口什么的")]),s._v("\nsystemctl stop docker\nsystemctl start docker\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行 docker 的一个 hello-world 镜像")]),s._v("\ndocker run hello-world\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果现实有以下文字就说明可以了")]),s._v("\nHello from Docker"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nThis message shows that your installation appears to be working correctly.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"错误解决"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#错误解决"}},[s._v("#")]),s._v(" 错误解决")]),s._v(" "),n("h3",{attrs:{id:"yum-config-manager-add-repo-异常"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yum-config-manager-add-repo-异常"}},[s._v("#")]),s._v(" yum-config-manager --add-repo 异常")]),s._v(" "),n("p",[s._v("执行命令后出现以下异常，原因是国内无法访问外国的 docker 镜像，这里需要使用阿里云的来安装")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[root@eshop-detail01 ~]# yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\nLoaded plugins: fastestmirror\nadding repo from: https://download.docker.com/linux/centos/docker-ce.repo\ngrabbing file https://download.docker.com/linux/centos/docker-ce.repo to /etc/yum.repos.d/docker-ce.repo\nhttps://download.docker.com/linux/centos/docker-ce.repo: [Errno 14] PYCURL ERROR 22 - "The requested URL returned error: 416 Requested Range Not Satisfiable"\nTrying other mirror.\nCould not fetch/save url https://download.docker.com/linux/centos/docker-ce.repo to file /etc/yum.repos.d/docker-ce.repo: [Errno 14] PYCURL ERROR 22 - "The requested URL returned error: 416 Requested Range Not Satisfiable"\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("解决方案："),n("code",[s._v("yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo")])]),s._v(" "),n("h3",{attrs:{id:"yum-y-install-docker-ce-异常"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yum-y-install-docker-ce-异常"}},[s._v("#")]),s._v(" yum -y install docker-ce 异常")]),s._v(" "),n("p",[s._v("报错的地址文件的确 404 了，这个就是在 centos 6 下安装 docker-ce 的缘故，使用 centos 7 安装就行了")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[root@eshop-detail01 ~]# yum install -y docker\nLoaded plugins: fastestmirror\nSetting up Install Process\nLoading mirror speeds from cached hostfile\n * base: mirrors.huaweicloud.com\n * extras: mirrors.huaweicloud.com\n * updates: ap.stykers.moe\nhttps://download.docker.com/linux/centos/7/i386/stable/repodata/repomd.xml: [Errno 14] PYCURL ERROR 22 - "The requested URL returned error: 404 Not Found"\nTrying other mirror.\nTo address this issue please refer to the below wiki article\n\nhttps://wiki.centos.org/yum-errors\n\nIf above article doesn\'t help to resolve this issue please use https://bugs.centos.org/.\n\nError: Cannot retrieve repository metadata (repomd.xml) for repository: docker-ce-stable. Please verify its path and try again\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);