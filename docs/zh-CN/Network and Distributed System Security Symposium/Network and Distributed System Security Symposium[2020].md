# Network and Distributed System Security Symposium[2020]
## FUSE: Finding File Upload Bugs via Penetration Testing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#fuse-finding-file-upload-bugs-via-penetration-testing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#fuse-finding-file-upload-bugs-via-penetration-testing)**
### 作者
* Taekjin Lee, KAIST
### 摘要
> 无限制文件上传（UFU）漏洞是一种严重的安全威胁，使攻击者能够向目标Web服务器上传其选择的伪造文件。当攻击者能够通过触发URL执行上传文件时，此漏洞演变为无限制可执行文件上传（UEFU）漏洞。我们设计并实现了FUSE，这是第一个用于发现服务器端PHP Web应用程序中UFU和UEFU漏洞的渗透测试工具。FUSE的目标是生成上传请求；每个请求都成为触发UFU或UEFU漏洞的利用有效载荷。然而，这种方法面临两个技术挑战：（1）它应该生成一个绕过目标Web应用程序中的所有内容过滤检查的上传请求；（2）它应该保留所生成上传文件的执行语义。我们通过使用精心设计的变异操作对标准上传请求进行变异来解决这些技术挑战，从而实现绕过内容过滤检查并不干扰上传文件的执行。FUSE发现了30个以前未报告的UEFU漏洞，包括来自33个真实Web应用程序的15个CVE，从而证明了其在通过文件上传发现代码执行漏洞方面的功效。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/fuse-finding-file-upload-bugs-via-penetration-testing/](https://www.ndss-symposium.org/ndss-paper/fuse-finding-file-upload-bugs-via-penetration-testing/)
## Melting Pot of Origins: Compromising the Intermediary Web Services that Rehost Websites.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#melting-pot-of-origins-compromising-the-intermediary-web-services-that-rehost-websites) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#melting-pot-of-origins-compromising-the-intermediary-web-services-that-rehost-websites)**
### 作者
* Takuya Watanabe, NTT
* Eitaro Shioji, NTT
* Mitsuaki Akiyama, NTT
* Tatsuya Mori, Waseda University
### 摘要
> 中间层的网络服务，例如网络代理、网页翻译和网页存档，已经成为提升网络开放性的常见手段。这些服务旨在消除网络访问的固有障碍，包括访问阻断、语言障碍和缺失网页。在本研究中，我们将这些服务称为网页再托管服务，并首次探索了它们的安全漏洞。网页再托管服务使用单个域名来托管多个具有不同域名的网站；如果不小心操作，这种特征将使网页再托管服务固有地容易违反同源策略。基于网页再托管服务的固有漏洞，我们证明了一个攻击者可以对使用网页再托管服务的用户进行五种不同类型的攻击：持久中间人攻击、滥用权限访问各种资源、窃取凭据、窃取浏览器历史和会话劫持/注入。我们对21个流行的网页再托管服务进行了广泛分析，这些服务每天有超过2亿次访问量，结果显示这些攻击是可行的。针对这一观察结果，我们提供了针对每种攻击类型的有效对策。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/melting-pot-of-origins-compromising-the-intermediary-web-services-that-rehost-websites/](https://www.ndss-symposium.org/ndss-paper/melting-pot-of-origins-compromising-the-intermediary-web-services-that-rehost-websites/)
## Deceptive Previews: A Study of the Link Preview Trustworthiness in Social Platforms.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#deceptive-previews-a-study-of-the-link-preview-trustworthiness-in-social-platforms) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#deceptive-previews-a-study-of-the-link-preview-trustworthiness-in-social-platforms)**
### 作者
* Giada Stivala, CISPA Helmholtz Center for Information Security
* Giancarlo Pellegrino, CISPA Helmholtz Center for Information Security
### 摘要
> 社交媒体已成为内容和信息分享的主要手段，得益于其速度和简洁性。在这种情况下，链接预览在为用户提供有意义的第一印象方面起着重要作用，通过标题、描述和图片总结共享网页的内容。在我们的工作中，我们分析了预览渲染过程，观察了如何滥用它以获取恶意链接看似良性的预览。这项研究领域的具体应用是网络钓鱼和垃圾邮件传播，除了大规模活动外还考虑了有针对性的攻击。
> 
> 我们设计了一系列实验，涵盖了包括社交网络和即时通讯应用在内的20个社交媒体平台，并发现大多数平台都遵循自己的预览设计和格式，有时提供部分信息。其中四个平台允许预览定制，以隐藏恶意目标，即使对于技术熟练的用户也是如此，我们发现攻击者在能够注册自己的域名时可以为其他16个平台创建误导性的预览。我们还观察到，18个社交媒体平台对已知恶意链接或软件的传播没有采取主动或被动的对策，并且现有的恶意URL交叉检查可以通过客户端和服务器端重定向绕过。最后，我们提出了七项建议，涵盖了我们研究结果的全方位，以改进整体的预览渲染机制，并提高用户对社交媒体平台的整体信任。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/deceptive-previews-a-study-of-the-link-preview-trustworthiness-in-social-platforms/](https://www.ndss-symposium.org/ndss-paper/deceptive-previews-a-study-of-the-link-preview-trustworthiness-in-social-platforms/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24252-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24252-paper.pdf)
## Cross-Origin State Inference (COSI) Attacks: Leaking Web Site States through XS-Leaks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#cross-origin-state-inference-cosi-attacks-leaking-web-site-states-through-xs-leaks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#cross-origin-state-inference-cosi-attacks-leaking-web-site-states-through-xs-leaks)**
### 作者
* Avinash Sudhodanan, IMDEA Software Institute
* Soheil Khodayari, CISPA Helmholtz Center for Information Security
* Juan Caballero, IMDEA Software Institute
### 摘要
> 在一种跨源状态推断（COSI）攻击中，攻击者会诱使受害者访问攻击网页，利用受害者的网络浏览器的跨源交互功能来推断目标网站上的受害者状态。过去发现了多个不同名称的COSI攻击实例，比如登录检测或访问检测攻击。但是，这些攻击只考虑两种状态（已登录或未登录），并专注于特定的浏览器信息泄露方法（或XS-Leak）。
> 
> 本研究表明，实施更复杂的COSI攻击，如去匿名化账户所有者、确定受害者是否拥有敏感内容以及确定受害者的账户类型，通常需要考虑多于两种状态。此外，强大的攻击需要支持各种浏览器，因为无法预测受害者的浏览器类型。为了解决这些问题，我们提出了一种新颖的方法，通过结合多个攻击向量，可能使用不同的XS-Leak，来识别和构建复杂的COSI攻击，以区分多种状态并支持多种浏览器。为了实现我们的方法，我们引入了COSI攻击类的概念。我们提出了两种新颖的技术，将现有的COSI攻击实例泛化为COSI攻击类，并发现新的COSI攻击类。我们系统地研究现有的攻击，并将我们的技术应用于它们，识别出40种COSI攻击类。作为这个过程的一部分，我们发现了一种基于window.postMessage的新型XS-Leak。我们将我们的方法实现为Basta-COSI工具，用于在目标网站上查找COSI攻击。我们将Basta-COSI应用于测试了四个独立的Web应用程序和58个流行的网站，发现了对每个网站的COSI攻击。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/cross-origin-state-inference-cosi-attacks-leaking-web-site-states-through-xs-leaks/](https://www.ndss-symposium.org/ndss-paper/cross-origin-state-inference-cosi-attacks-leaking-web-site-states-through-xs-leaks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24278-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24278-paper.pdf)
## Carnus: Exploring the Privacy Threats of Browser Extension Fingerprinting.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#carnus-exploring-the-privacy-threats-of-browser-extension-fingerprinting) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#carnus-exploring-the-privacy-threats-of-browser-extension-fingerprinting)**
### 作者
* Soroush Karami, University of Illinois at Chicago
* Panagiotis Ilia, University of Illinois at Chicago
* Konstantinos Solomos, University of Illinois at Chicago
* Jason Polakis, University of Illinois at Chicago
### 摘要
> 随着用户对隐私的关注度不断提高以及浏览器供应商加入反跟踪机制，浏览器指纹识别受到了广泛关注。因此，先前的研究提出了一些技术来识别浏览器扩展并将其作为设备指纹的一部分。虽然之前的研究显示了如何通过可访问的网页资源检测到扩展，但对于通过行为特征间接检测扩展的技术仍存在重大差距。事实上，以前的研究尚未证明可以自动地完成这一任务。本文通过提出首个完全自动化创建和检测基于行为的扩展指纹来弥合这一差距。我们还引入了两种新颖的指纹识别技术，监控扩展的通信模式，即发出的HTTP请求和浏览器内部消息交换。这些技术构成了Carnus的核心，这是一个用于扩展的静态和动态分析的模块化系统，我们使用它来创建迄今为止最大的扩展指纹集。我们利用我们的数据集中的29,428个可检测扩展对扩展指纹在实际环境中进行了全面调查，并展示了我们攻击的实用性。与最先进的对策进行的实验评估证实了我们技术的稳健性，我们基于行为的指纹中87.92%仍然有效。
> 
> 接下来，我们的目标是探索扩展指纹对用户隐私构成的真正威胁，并提出一项关于基于扩展功能和性质揭示用户私人和敏感信息可能性的新研究。我们首先收集了超过144万条我们可检测扩展的公共用户评论，这提供了对浏览器扩展生态系统的独特宏观视角，能够更精确地评估扩展的区分能力以及一种新的去匿名化方法。我们还根据开发者的描述自动对扩展进行分类，并识别出可能导致个人数据泄露（宗教、医疗问题等）的扩展。总体而言，我们的研究揭示了扩展指纹识别的隐私威胁之前未曾探索的维度，并强调了需要更有效的对策来防止我们的攻击。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/carnus-exploring-the-privacy-threats-of-browser-extension-fingerprinting/](https://www.ndss-symposium.org/ndss-paper/carnus-exploring-the-privacy-threats-of-browser-extension-fingerprinting/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24383-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24383-paper.pdf)
## HYPER-CUBE: High-Dimensional Hypervisor Fuzzing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#hyper-cube-high-dimensional-hypervisor-fuzzing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#hyper-cube-high-dimensional-hypervisor-fuzzing)**
### 作者
* Sergej Schumilo, Ruhr-Universität Bochum
* Cornelius Aschermann, Ruhr-Universität Bochum
* Ali Abbasi, Ruhr-Universität Bochum
* Simon Wörner, Ruhr-Universität Bochum
* Thorsten Holz, Ruhr-Universität Bochum
### 摘要
> 应用现代模糊测试工具于新颖目标往往是一项非常有利可图的事业。虚拟化监控器是一个非常关键的代码库：对其进行攻击可能导致黑客入侵任何云服务提供商的整个云基础架构。本文中，我们构建了一种专为测试现代虚拟化监控器而设计的新型模糊测试工具。
> 
> 我们的高吞吐量模糊测试设计适用于长时间运行的交互式目标，能够对大量虚拟化监控器进行模糊测试，包括开源的和专有的。与AFL等单一维度的模糊测试工具不同，HYPER-CUBE可以在任意顺序下与任意数量的接口进行交互。
> 
> 我们的评估表明，与当前领先的虚拟化监控器模糊测试工具相比，我们能够发现更多的漏洞（超过2倍）和覆盖范围（多达2倍）。此外，大多数情况下，我们所需要的时间比可比较的模糊测试工具少上数个数量级。HYPER-CUBE还能够在不到五分钟的时间内重新发现一组众所周知的虚拟化监控器漏洞，例如VENOM。总共，HYPER-CUBE发现了54个新的漏洞，并获得了37个CVE编号。
> 
> 我们的评估结果表明，下一代基于覆盖率引导的模糊测试工具应该采用更高吞吐量的设计，以适用于长时间运行的虚拟化监控器等目标。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/hyper-cube-high-dimensional-hypervisor-fuzzing/](https://www.ndss-symposium.org/ndss-paper/hyper-cube-high-dimensional-hypervisor-fuzzing/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/23096-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/23096-paper.pdf)
## HFL: Hybrid Fuzzing on the Linux Kernel.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#hfl-hybrid-fuzzing-on-the-linux-kernel) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#hfl-hybrid-fuzzing-on-the-linux-kernel)**
### 作者
* Kyungtae Kim, Purdue University
* Dae R. Jeong, KAIST
* Chung Hwan Kim, NEC Labs America
* Yeongjin Jang, Oregon State University
* Insik Shin, KAIST
* Byoungyoung Lee, Seoul National University
### 摘要
> 混合模糊测试，结合符号执行和模糊测试，是一种有前景的漏洞发现方法，因为每种方法都可以互相补充。然而，我们观察到，将混合模糊测试应用于内核测试是具有挑战性的，因为内核具有以下独特特性，使得单纯采用混合模糊测试效率低下：1）具有许多由系统调用参数确定的隐式控制转移，2）通过系统调用控制和匹配内部系统状态，3）推断调用系统调用的嵌套参数类型。如果不能处理这些挑战，将导致模糊测试和符号执行效率低下，从而导致混合模糊测试效率低下。虽然这些挑战对于模糊测试和符号执行都是重要的，然而据我们所知，现有的内核测试方法要么单纯地使用各自的技术而没有解决这些挑战，要么仅通过静态分析对部分挑战进行不准确的处理。
> 
> 为了解决这个问题，本文提出了HFL，不仅将模糊测试与符号执行结合起来进行混合模糊测试，还通过三个不同的特性解决了内核特定的模糊测试挑战：1）将隐式控制转移转换为显式转移，2）推断系统调用序列以建立一致的系统状态，3）识别系统调用的嵌套参数类型。结果，HFL在最近的Linux内核中发现了24个以前未知的漏洞。此外，HFL的代码覆盖率比Syzkaller高14％，比S2E / TriforceAFL高出八倍的覆盖率，使用相同数量的资源（CPU，时间等）。就漏洞发现性能而言，HFL的发现速度比Syzkaller快三倍以上，发现了13个已知漏洞。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/hfl-hybrid-fuzzing-on-the-linux-kernel/](https://www.ndss-symposium.org/ndss-paper/hfl-hybrid-fuzzing-on-the-linux-kernel/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24018-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24018-paper.pdf)
## HotFuzz: Discovering Algorithmic Denial-of-Service Vulnerabilities Through Guided Micro-Fuzzing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#hotfuzz-discovering-algorithmic-denial-of-service-vulnerabilities-through-guided-micro-fuzzing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#hotfuzz-discovering-algorithmic-denial-of-service-vulnerabilities-through-guided-micro-fuzzing)**
### 作者
* William Blair, Boston University
* Andrea Mambretti, Northeastern University
* Sajjad Arshad, Northeastern University
* Michael Weissbacher, Northeastern University
* William Robertson, Northeastern University
* Engin Kirda, Northeastern University
* Manuel Egele, Boston University
### 摘要
> 三十亿台设备运行Java，其中许多设备都连接到互联网。随着这个生态系统的不断发展，发现这些设备面临的未知安全威胁仍然是一项重要任务。模糊测试是一种重复使用随机输入来运行软件以触发意外程序行为（如崩溃或超时）的方法，历史上揭示了严重的安全漏洞。当代模糊测试技术主要关注于识别允许对手实现远程代码执行的内存破坏漏洞。与此同时，算法复杂性（AC）漏洞是拒绝服务攻击的常见攻击向量，而这一领域的研究仍然不足。
> 
> 在本文中，我们提出了HotFuzz，这是一个用于自动发现Java库中AC漏洞的框架。HotFuzz使用微模糊测试，即一种遗传算法，通过演化任意的Java对象来触发被测试方法的最坏情况性能。我们定义了Small Recursive Instantiation（SRI），它提供了作为Java对象表示的微模糊测试的种子输入。在微模糊测试之后，HotFuzz合成了触发AC漏洞的测试用例，将其转化为Java程序并监视其执行，以在分析框架之外重现漏洞。HotFuzz将CPU利用率较高的程序作为Java库中AC漏洞的证据输出。
> 
> 我们在Java运行时环境（JRE）、Maven上最受欢迎的100个Java库以及DARPA Space and Time Analysis for Cyber-Security（STAC）项目的挑战中评估了HotFuzz。我们比较了使用SRI获取的种子输入和使用空值的有效性。在这个评估中，我们验证了已知的AC漏洞，还发现了以前未知的AC漏洞，并负责向供应商报告了这些漏洞，并得到了IBM和Oracle的确认。我们的结果表明，微模糊测试可以发现现实世界软件中的AC漏洞，并且使用SRI获取的种子输入与使用空的种子输入相互补充。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/hotfuzz-discovering-algorithmic-denial-of-service-vulnerabilities-through-guided-micro-fuzzing/](https://www.ndss-symposium.org/ndss-paper/hotfuzz-discovering-algorithmic-denial-of-service-vulnerabilities-through-guided-micro-fuzzing/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24415-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24415-paper.pdf)
## Not All Coverage Measurements Are Equal: Fuzzing by Coverage Accounting for Input Prioritization.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#not-all-coverage-measurements-are-equal-fuzzing-by-coverage-accounting-for-input-prioritization) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#not-all-coverage-measurements-are-equal-fuzzing-by-coverage-accounting-for-input-prioritization)**
### 作者
* Yanhao Wang, Institute of Software
### 摘要
> 基于覆盖率的模糊测试已经被广泛研究和广泛采用，用于发现现实世界软件应用程序中的漏洞。借助代码覆盖率（例如语句覆盖率和转换覆盖率）作为输入变异的指导，基于覆盖率的模糊测试可以生成覆盖更多代码的输入，从而在不需要输入格式等先决信息的情况下发现更多漏洞。当前的基于覆盖率的模糊测试工具将被覆盖的代码视为相等。对于贡献新语句或转换的所有输入，无论语句或转换的重要程度如何，都会保留以供未来变异使用。尽管这种设计从软件测试的角度来看是合理的，其目标是实现全覆盖，但对于漏洞发现来说效率低下，因为当前的技术还不足以在合理的时间范围内达到全覆盖，而且我们总是希望尽早发现漏洞以便及时修补。更糟糕的是，由于非区分性的代码覆盖处理，当前的模糊测试工具受到最近的反模糊测试技术的影响，在发现现实世界漏洞方面效果大为降低。
> 
> 为了解决这个问题，我们提出了覆盖计算，一种通过安全影响评估代码覆盖率的创新方法。基于提出的度量标准，我们设计了一种新的方案来优先考虑模糊测试输入，并开发了一种名为TortoiseFuzz的用于内存破坏漏洞的灰盒模糊测试工具。我们在30个现实世界应用程序上评估了TortoiseFuzz，并与5个最先进的灰盒和混合模糊测试工具（AFL，AFLFast，FairFuzz，QSYM和Angora）进行了比较。TortoiseFuzz优于所有灰盒模糊测试工具和大多数混合模糊测试工具。它在其他混合模糊测试工具方面也具有可比较的结果，但消耗的资源要少得多。此外，TortoiseFuzz发现了18个新的现实世界漏洞，并已获得了8个新的CVE编号。我们将开源TortoiseFuzz以促进未来的研究。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/not-all-coverage-measurements-are-equal-fuzzing-by-coverage-accounting-for-input-prioritization/](https://www.ndss-symposium.org/ndss-paper/not-all-coverage-measurements-are-equal-fuzzing-by-coverage-accounting-for-input-prioritization/)
## Detecting Probe-resistant Proxies.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#detecting-probe-resistant-proxies) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#detecting-probe-resistant-proxies)**
### 作者
* Sergey Frolov, University of Colorado Boulder
* Jack Wampler, University of Colorado Boulder
* Eric Wustrow, University of Colorado Boulder
### 摘要
> 绕过审查的代理服务必须抵御主动探测，即审查者连接至疑似服务器，并尝试使用已知代理协议进行通信。如果服务器以显示其为代理方式回应，则审查者可以在对其他非代理服务造成最小风险的情况下封锁它。例如中国的防火长城等审查机构以前曾使用基本形式的这种技术来找到和封锁一旦被使用的代理服务器。为此，绕过者创建了新的“抗侦测”代理协议，包括obfs4、Shadowsocks和Lampshade，旨在防止审查机构发现它们。这些代理需要使用一个秘密，并且在被没有该秘密的审查者扫描时保持沉默，以增加审查者侦测的难度。
> 
> 在本文中，我们鉴定了审查机构如何仍然能够辨别出这些抗侦测代理和互联网上其他无害主机之间的区别，尽管它们的设计如此。我们发现了流行的绕过软件中使用的5种抗侦测协议的独特TCP行为，这可能会使审查机构能够有效确认疑似代理而减少错误判断。我们通过从一个10 Gbps的大学ISP视角收集的数十万个服务器以及使用ZMap进行主动扫描来评估和分析我们的攻击。我们发现我们的攻击能够仅通过少数几个探测连接高效地识别出代理服务器，并且误报率极低。使用我们的数据集，我们还提出了针对这些攻击的防御方法，使得审查机构在区分代理服务器和其他常见服务器方面更加困难，并且我们与代理开发人员合作，在几个流行的绕过工具中实施这些改变。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/detecting-probe-resistant-proxies/](https://www.ndss-symposium.org/ndss-paper/detecting-probe-resistant-proxies/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/23087-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/23087-paper.pdf)
## Decentralized Control: A Case Study of Russia.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#decentralized-control-a-case-study-of-russia) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#decentralized-control-a-case-study-of-russia)**
### 作者
* Reethika Ramesh, University of Michigan
* Ram Sundara Raman, University of Michgan
* Matthew Bernhard, University of Michigan
* Victor Ongkowijaya, University of Michigan
* Leonid Evdokimov, Independent
* Anne Edmundson, Independent
* Steven Sprecher, University of Michigan
* Muhammad Ikram, Macquarie University
* Roya Ensafi, University of Michigan
### 摘要
> 直到现在，关于审查的研究主要集中在高度集中的网络上，依赖政府管理的技术瓶颈，比如中国的“防火长城”。虽然此前人们认为在分散网络中实现大规模审查是不可行的困难，但最近分散网络中的大规模审查有所增加。我们对俄罗斯分散式信息控制机制的深入研究表明，通过廉价的商品设备，可以在分散网络中实现这种大规模审查。这种新形式的信息控制给审查测量带来了一系列问题，包括难以识别被审查的内容，需要从不同的角度进行测量，以及多种多样的审查机制需要大量努力以鲁棒方式进行识别。
> 
> 通过与俄罗斯地面上的活动人士合作，我们获得了五份由俄罗斯政府的联邦大众传媒服务部门Roskomnadzor签署的泄漏的封锁列表，以及七年的历史封锁列表数据。这个权威列表包含自2012年11月1日以来要求互联网服务提供商封锁的域名、IP地址和子网。我们使用了2019年4月24日的封锁列表，其中包含了132,798个域名、324,695个IP地址和39个子网，以收集从居民、数据中心和基础设施的视角收集的主动测量数据。我们的视角涵盖了控制俄罗斯IP地址空间约65%的408个独特自治系统。
> 
> 我们的发现表明，数据中心在封锁的数量和封锁方法上与居民互联网服务提供商存在差异，导致居民网络和数据中心视角对互联网有不同的体验。如预期，居民视角经历了较高水平的审查。尽管我们观察到了一系列的封锁技术，如TCP/IP封锁、DNS操纵或基于关键词的过滤，我们发现当实施审查时，居民互联网服务提供商更可能向用户注入带有明确通知的封锁页面。俄罗斯的审查架构是一个蓝本，也许是对许多其他国家可能如何实施国家审查政策的预警，这些国家的互联网服务提供商生态系统与俄罗斯有类似的多样性。了解分散式控制将是继续保护互联网自由的关键所在，未来的年份也将如此。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/decentralized-control-a-case-study-of-russia/](https://www.ndss-symposium.org/ndss-paper/decentralized-control-a-case-study-of-russia/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/23098-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/23098-paper.pdf)
## Measuring the Deployment of Network Censorship Filters at Global Scale.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#measuring-the-deployment-of-network-censorship-filters-at-global-scale) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#measuring-the-deployment-of-network-censorship-filters-at-global-scale)**
### 作者
* Ram Sundara Raman, University of Michigan
* Adrian Stoll, University of Michigan
* Jakub Dalek, Citizen Lab
### 摘要
> 内容过滤技术经常用于互联网审查，但即使这些技术变得更便宜和更容易部署，审查测量社区仍缺乏一种系统的方法来监测它们的扩散。过去的研究主要集中在少数几种具体的过滤技术上，每一种都需要繁琐的手工侦查工作来识别。研究人员和政策制定者需要对基于内容过滤的审查状态和演变有一个更全面的了解，以制定有效的保护互联网自由的政策。
> 
> 在这项工作中，我们提出了一种名为FilterMap的新颖框架，可以可伸缩地监测基于封锁页面的内容过滤技术。FilterMap首先通过在网络和新的远程审查测量技术中收集封锁页面来编制过滤器部署。然后我们展示了如何对观察到的封锁页面进行聚类，生成用于纵向跟踪的签名。FilterMap输出了一个地址空间区域的地图，在这些区域中出现相同的封锁页面（对应着过滤器部署），并且每个唯一的封锁页面都经过人工验证，以避免误报。
> 
> 通过收集和分析来自45,000个视角点对超过18,000个敏感测试域的379,000,000多个测量结果，我们能够识别和90个供应商和机构相关的过滤器部署，并观察到103个国家的审查。我们检测到在自由之家《网络自由报告》中被标记为“不自由”或“部分自由”的48个国家中有36个国家使用商业过滤技术进行审查。内容过滤技术的自由传播导致了高可用性、低成本和高效的过滤技术越来越容易部署并更难绕过。识别这些过滤器部署凸显了政策和企业社会责任问题，并对过滤器制造商增加了责任。我们持续发布FilterMap数据将有助于国际社会追踪基于内容的审查的范围、规模和演变。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/measuring-the-deployment-of-network-censorship-filters-at-global-scale/](https://www.ndss-symposium.org/ndss-paper/measuring-the-deployment-of-network-censorship-filters-at-global-scale/)
## SymTCP: Eluding Stateful Deep Packet Inspection with Automated Discrepancy Discovery.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#symtcp-eluding-stateful-deep-packet-inspection-with-automated-discrepancy-discovery) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#symtcp-eluding-stateful-deep-packet-inspection-with-automated-discrepancy-discovery)**
### 作者
* Zhongjie Wang, University of California
### 摘要
> 常见的深度包检测（DPI）系统的一个关键特点是它们实现了一个简化的网络堆栈状态机，往往与终端主机的状态机不同。这两个状态机之间的差异已被利用以绕过这些DPI中间盒。然而，大多数先前的方法依赖于手工制作的对抗性数据包，这不仅工作繁重，而且可能无法在多数DPI中间盒上很好地运行。我们的目标是开发一种自动化的方式来制作这些候选数据包，特别针对TCP实现。我们的方法是使用符号执行，在我们的系统SYMTCP中，我们系统地探索了终端主机的TCP实现，识别出能够到达代码的关键点的候选数据包（例如，导致数据包被接受或被丢弃/忽略的点）；然后，我们将这些自动识别的数据包通过DPI中间盒进行验证，确定是否引入了差异并绕过中间盒。我们发现我们的方法非常有效。它可以在不到一个小时内生成数以万计的候选对抗性数据包。在对比多个最先进的DPI中间盒（如Zeek和Snort）以及一个状态级审查防火墙（中国的防火长城）时，我们不仅发现了先前已知的回避策略，还发现了以前从未报告过的新颖策略（例如，涉及紧急指针）。该系统可以轻松扩展到测试其他操作系统和DPI中间盒的组合，并作为未来DPI对逃避尝试鲁棒性的有价值的测试工具。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/symtcp-eluding-stateful-deep-packet-inspection-with-automated-discrepancy-discovery/](https://www.ndss-symposium.org/ndss-paper/symtcp-eluding-stateful-deep-packet-inspection-with-automated-discrepancy-discovery/)
## MassBrowser: Unblocking the Censored Web for the Masses, by the Masses.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#massbrowser-unblocking-the-censored-web-for-the-masses-by-the-masses) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#massbrowser-unblocking-the-censored-web-for-the-masses-by-the-masses)**
### 作者
* Milad Nasr, University of Massachusetts Amherst
* Hadi Zolfaghari, University of Massachusetts Amherst
* Amir Houmansadr, University of Massachusetts Amherst
* Amirhossein Ghafari, University of Massachusetts Amherst
### 摘要
> 现有的绕过审查系统无法在不牺牲用户的QoS和隐私或承担高昂运营成本的情况下提供可靠的绕过服务。我们设计并实施了一个名为SwarmProxy（匿名名称）的绕过审查系统，其目标是为大量受审查用户提供有效的绕过审查服务，同时具有高质量的QoS、低运营成本和可调整的隐私保护。为实现这一目标，我们在系统设计中做出了几个关键决策。
> 
> 首先，我们认为绕过审查系统不应将强隐私保护（如匿名）与绕过审查绑定在一起。额外的隐私功能应作为绕过用户的可选功能提供，可以由特定用户或特定连接启用（可能会以QoS为代价）。
> 
> 其次，我们结合了各种先进的绕过技术（如使用被审查客户端代理其他被审查客户端的绕过流量，使用自愿进行NAT代理的代理服务器，以及利用CDN托管）来显著提高SwarmProxy的抗封锁能力，同时保持运营成本较低（每个被审查客户端每月0.001美元）。
> 
> 我们已经构建和部署了SwarmProxy作为一个完全操作的系统，并为各个主要操作系统提供了终端用户GUI软件。我们的系统已经在测试阶段超过一年，每天都有来自主要审查国家的数百名用户进行测试。
> 
> SwarmProxy设计的一个关键部分是利用非受审查的互联网用户作为志愿者代理，帮助受审查用户。我们进行了关于典型互联网用户愿意帮助绕过操作者的意愿的首次用户研究。
> 
> 我们在SwarmProxy的设计中使用了用户研究的结果，以鼓励志愿者的广泛采用；特别地，我们的GUI软件为志愿者提供了高度透明、可控和安全的使用体验。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/massbrowser-unblocking-the-censored-web-for-the-masses-by-the-masses/](https://www.ndss-symposium.org/ndss-paper/massbrowser-unblocking-the-censored-web-for-the-masses-by-the-masses/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24340-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24340-paper.pdf)
## Et Tu Alexa? When Commodity WiFi Devices Turn into Adversarial Motion Sensors.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#et-tu-alexa-when-commodity-wifi-devices-turn-into-adversarial-motion-sensors) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#et-tu-alexa-when-commodity-wifi-devices-turn-into-adversarial-motion-sensors)**
### 作者
* Yanzi Zhu, UC Santa Barbara
* Zhujun Xiao, University of Chicago
* Yuxin Chen, University of Chicago
* Zhijing Li, UC Santa Barbara
* Max Liu, University of Chicago
* Ben Y. Zhao, University of Chicago
* Heather Zheng, University of Chicago
### 摘要
> 无线设备无处不在，不断向我们发送跨越广泛射频频率范围的信号。这些看不见的信号反射在我们的身上，携带着有关我们位置、移动和其他生理特征的信息。虽然对于具有精确校准仪器的专业人士来说是一种福音，但它们也可能向附近的潜在攻击者透露我们的身体状况。
> 
> 我们的工作展示了一组新的静默侦察攻击，利用通用WiFi设备的存在来跟踪用户在私人住宅和办公室内的活动，而无需破坏任何WiFi网络、数据包或设备。我们展示了通过嗅探现有的WiFi信号，对手可以准确地检测和跟踪建筑物内用户的活动。这得益于我们的新信号模型，它将WiFi发射器附近的人体动作与攻击者嗅探装置所观察到的多径信号传播的变化联系在一起。这些攻击方式廉价、高效，并且难以被检测到。我们使用一台普通智能手机实施了这种攻击，并在11个真实的办公室和住宅公寓中部署它，证明了其高效性。最后，我们评估了潜在的防御方法，并提出了一个基于接入点信号模糊的实用和有效的防御方案。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/et-tu-alexa-when-commodity-wifi-devices-turn-into-adversarial-motion-sensors/](https://www.ndss-symposium.org/ndss-paper/et-tu-alexa-when-commodity-wifi-devices-turn-into-adversarial-motion-sensors/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/23053-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/23053-paper.pdf)
## Metamorph: Injecting Inaudible Commands into Over-the-air Voice Controlled Systems.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#metamorph-injecting-inaudible-commands-into-over-the-air-voice-controlled-systems) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#metamorph-injecting-inaudible-commands-into-over-the-air-voice-controlled-systems)**
### 作者
* Tao Chen, City University of Hong Kong
* Longfei Shangguan, Microsoft
* Zhenjiang Li, City University of Hong Kong
* Kyle Jamieson, Princeton University
### 摘要
> 本文介绍了Metamorph系统，该系统生成了在无线传输中可以攻击语音识别系统的难以察觉的音频。关键挑战在于如何确保在发送方先前添加的音频扰动可以免受传输过程中未知信号失真的影响。我们的经验研究发现，信号失真主要由设备和通道的频率选择性引起，但具有不同的特征。这为捕捉和预编码这种影响提供了机会，以生成对无线传输具有稳健性的对抗性示例。我们在Metamorph中利用这一机会，仅通过一小组先前测量获取了捕捉核心失真影响的初始扰动，然后利用领域自适应算法改进扰动，以进一步提高攻击距离和可靠性。此外，我们还考虑减少对添加扰动的人类可察觉性。评估结果显示，在攻击距离最多为6米的情况下，攻击成功率为95%。在适度的距离内，例如3米，Metamorph保持着较高的成功率（98%），并且可以通过人类可察觉性研究进一步改善音频质量。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/metamorph-injecting-inaudible-commands-into-over-the-air-voice-controlled-systems/](https://www.ndss-symposium.org/ndss-paper/metamorph-injecting-inaudible-commands-into-over-the-air-voice-controlled-systems/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/23055-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/23055-paper.pdf)
## SurfingAttack: Interactive Hidden Attack on Voice Assistants Using Ultrasonic Guided Waves.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#surfingattack-interactive-hidden-attack-on-voice-assistants-using-ultrasonic-guided-waves) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#surfingattack-interactive-hidden-attack-on-voice-assistants-using-ultrasonic-guided-waves)**
### 作者
* Qiben Yan, Michigan State University
* Kehai Liu, Chinese Academy of Sciences
* Qin Zhou, University of Nebraska-Lincoln
* Hanqing Guo, Michigan State University
* Ning Zhang, Washington University in St. Louis
### 摘要
> 随着人工智能和自然语言处理的最新进展，声音已成为人机交互的主要方式，这使得商业领域（如Siri、Alexa或谷歌助手）和军事领域（如声控海军战舰）都出现了具有重大影响力的新技术。最近，研究人员证明了这些语音助手系统容易受到听不见频率的声音指令的信号注入。迄今为止，大多数现有工作主要集中在通过直线超声扬声器传递单个命令，并通过扬声器阵列扩展此攻击的范围。然而，声波也可以传播到其他材料中，只要存在振动。在这项工作中，我们旨在了解这种新类型攻击在不同传输介质环境下的特性。此外，通过利用固体材料中声学传输的独特特性，我们设计了一种名为SurfingAttack的新攻击方法，可以在更远的距离上与语音控制设备进行多轮互动，并且无需在视线范围内，从而对物理环境的变化最小。这大大提高了听不见声音攻击的潜在风险，使得许多新的攻击场景成为可能，例如劫持手机短信验证码、进行主人不知情的欺诈电话等。为了实现SurfingAttack，我们解决了几个主要挑战。首先，信号经过特殊设计，可以在固体介质上进行全向传输，以执行有效的攻击。其次，这种新型攻击使得双向通信成为可能，而不会引起场景中合法用户的警觉，这是一个挑战，因为该设备设计用于与身体接触而不是传感器进行人机互动。为了应对这种新发现的威胁，我们还提供了关于潜在对策的讨论和实验结果，以防御这种新威胁。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/surfingattack-interactive-hidden-attack-on-voice-assistants-using-ultrasonic-guided-waves/](https://www.ndss-symposium.org/ndss-paper/surfingattack-interactive-hidden-attack-on-voice-assistants-using-ultrasonic-guided-waves/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24068-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24068-paper.pdf)
## Packet-Level Signatures for Smart Home Devices.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#packet-level-signatures-for-smart-home-devices) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#packet-level-signatures-for-smart-home-devices)**
### 作者
* Rahmadi Trimananda, University of California
### 摘要
> 智能家居设备在网络流量的基础上容易受到被动的推断攻击，即使有加密的保护措施。在这篇论文中，我们提出了PINGPONG，一个能够自动从网络流量中提取设备事件（如开关灯泡）的数据包级别签名的工具。我们对智能家居设备进行了PINGPONG的评估，包括智能插座、温控器、摄像头、语音激活设备和智能电视等。我们能够：（1）自动提取先前未知的由数据包长度和方向组成的简单序列的签名；（2）使用这些签名来检测设备或特定事件，平均召回率超过97%；（3）证明这些签名在数亿个真实世界网络流量数据包中是独一无二的；（4）证明我们的方法也适用于公开可用的数据集；以及（5）在不同的环境中展示其稳健性：由本地和远程智能手机触发的事件，以及由家庭自动化系统触发的事件。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/packet-level-signatures-for-smart-home-devices/](https://www.ndss-symposium.org/ndss-paper/packet-level-signatures-for-smart-home-devices/)
## Learning-based Practical Smartphone Eavesdropping with Built-in Accelerometer.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#learning-based-practical-smartphone-eavesdropping-with-built-in-accelerometer) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#learning-based-practical-smartphone-eavesdropping-with-built-in-accelerometer)**
### 作者
* Zhongjie Ba, Zhejiang University and McGill University
* Tianhang Zheng, University of Toronto
* Xinyu Zhang, Zhejiang University
* Zhan Qin, Zhejiang University
* Baochun Li, University of Toronto
* Xue Liu, McGill University
* Kui Ren, Zhejiang University
### 摘要
> 当前智能手机上的运动传感器由于对振动的敏感性而被利用来进行音频监听。然而，由于两个普遍公认的限制，这种威胁被认为是低风险的：首先，与麦克风不同，运动传感器只能接收通过固体介质传播的语音信号。因此，先前报道的唯一可行的设置是使用智能手机陀螺仪监听放置在同一桌面上的扬声器。第二个限制源于一个常识，即这些传感器仅能接收到语音信号的窄带（85-100Hz），因为它们的采样频率上限为200Hz。本文重新审视了运动传感器对语音隐私的威胁，并提出了AccelEve，一种新的副通道攻击，它利用智能手机的加速度计来监听同一个智能手机中的扬声器。具体而言，它利用加速度计测量来识别扬声器发出的语音，并重建相应的音频信号。与先前的工作相比，我们的设置使得语音信号始终能够通过共享的主板在加速度计测量中产生强响应，成功解决了第一个限制，并使得这种攻击能够穿透进入现实生活场景。关于采样率限制，与广为人知的观点相反，我们观察到近期智能手机的采样率高达500Hz，几乎涵盖了成人语音的整个基频带（85-255Hz）。在这些重要观察的基础上，我们提出了一种基于深度学习的创新系统，该系统能够从加速度信号的频谱图表示中学习识别和重建语音信息。该系统利用具有跳跃连接的深度神经网络进行自适应优化，使用鲁棒和可概括的损失函数实现稳健的识别和重建性能。广泛的评估表明了我们的攻击在各种设置下的有效性和高准确性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/learning-based-practical-smartphone-eavesdropping-with-built-in-accelerometer/](https://www.ndss-symposium.org/ndss-paper/learning-based-practical-smartphone-eavesdropping-with-built-in-accelerometer/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24076-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24076-paper.pdf)
## Automated Cross-Platform Reverse Engineering of CAN Bus Commands From Mobile Apps.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#automated-cross-platform-reverse-engineering-of-can-bus-commands-from-mobile-apps) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#automated-cross-platform-reverse-engineering-of-can-bus-commands-from-mobile-apps)**
### 作者
* Haohuang Wen, The Ohio State University
* Qingchuan Zhao, The Ohio State University
* Qi Alfred Chen, University of California
### 摘要
> 在现代汽车中，CAN总线命令对于诊断、安全监控和最近的自动驾驶等各种功能都是必需的。然而，它们的规范是由汽车制造商私下开发的，而今天揭示专有CAN总线命令最有效的方法是进行逆向工程（例如，动态测试）与真实汽车配合使用，而这是费时、昂贵且容易出错的。在本论文中，我们提出了一种费用效益高（不需要真实汽车）且自动化（无需人工干预）的方法，通过仅使用汽车配套的移动应用程序来进行逆向工程CAN总线命令。为了达到高效性，我们设计了一种新技术，通过后向切片和动态强制执行来揭示CAN总线命令的句法特征，并利用基于代码层面语义线索的新型程序算法来揭示CAN总线命令的语义特征。我们在Android和iOS平台上实现了一个原型，并在Google Play和苹果应用商店中的所有免费汽车配套应用程序（总数253个）上进行了测试。其中，CANHUNTER发现了182,619个句法唯一的CAN总线命令，其中86%的命令揭示了语义特征，涵盖了21个汽车制造商的360个汽车型号。我们还使用公共资源、跨平台和跨应用程序验证以及真实汽车测试评估了它们的正确性（句法和语义），其中70%的所有被揭示的命令都经过了验证。我们在跨平台和跨应用程序验证中没有发现不一致，仅在从公共资源和真实汽车测试中恢复语义时发现了3个误报（在241个手动验证的CAN总线命令中）。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/automated-cross-platform-reverse-engineering-of-can-bus-commands-from-mobile-apps/](https://www.ndss-symposium.org/ndss-paper/automated-cross-platform-reverse-engineering-of-can-bus-commands-from-mobile-apps/)
## Are You Going to Answer That? Measuring User Responses to Anti-Robocall Application Indicators.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#are-you-going-to-answer-that-measuring-user-responses-to-anti-robocall-application-indicators) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#are-you-going-to-answer-that-measuring-user-responses-to-anti-robocall-application-indicators)**
### 作者
* Imani N. Sherman, University of Florida
* Jasmine D. Bowers, University of Florida
* Keith McNamara Jr., University of Florida
* Juan E. Gilbert, University of Florida
* Jaime Ruiz, University of Florida
* Patrick Traynor, University of Florida
### 摘要
> 机器人拨打电话让手机用户烦不胜烦。这些自动拨号让攻击者能够以一种难以追踪的方式诈骗大规模受众，从身份盗取到不必要的IT支持等等。为此，已经开发了许多应用程序，以提醒手机用户即将收到的机器人拨打电话。然而，这些应用程序如何有效地与用户沟通风险尚不明确。在本文中，我们确定了在最受欢迎的反机器人拨打电话应用程序中使用的常见实时安全指标。通过焦点小组和用户测试，我们首先确定了哪些指标最有效地向用户发出危险警示。然后，我们证明了最有力的指标可以将用户接听此类电话的可能性降低高达43%。不幸的是，我们的评估也显示，攻击者可以通过一小部分目标特定信息（例如已知电话号码）消除这些指标提供的收益。通过这样做，我们证明了反机器人拨打电话指标需要研究界的大力关注。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/are-you-going-to-answer-that-measuring-user-responses-to-anti-robocall-application-indicators/](https://www.ndss-symposium.org/ndss-paper/are-you-going-to-answer-that-measuring-user-responses-to-anti-robocall-application-indicators/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24286-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24286-paper.pdf)
## TKPERM: Cross-platform Permission Knowledge Transfer to Detect Overprivileged Third-party Applications.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#tkperm-cross-platform-permission-knowledge-transfer-to-detect-overprivileged-third-party-applications) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#tkperm-cross-platform-permission-knowledge-transfer-to-detect-overprivileged-third-party-applications)**
### 作者
* Faysal Hossain Shezan, University of Virginia
* Kaiming Cheng, University of Virginia
* Zhen Zhang, Johns Hopkins University
* Yinzhi Cao, Johns Hopkins University
* Yuan Tian, University of Virginia
### 摘要
> 基于许可的访问控制使用户能够管理和控制他们敏感数据的第三方应用。在理想的情况下，第三方应用包含足够的细节来说明这些数据的使用情况，然而现实情况是，许多第三方应用的描述对于它们的安全性或隐私活动都很模糊。因此，用户在向这些应用授予敏感数据时所获得的详细信息不足。
> 
> 以WHYPER和AutoCog为代表的先前研究通过所谓的权限相关系统来解决上述问题。这种系统通过将第三方应用的描述与其请求的权限进行相关联，并在发现不匹配时确定应用程序是否过度授权。然而，尽管先前的研究在其自身平台上取得了成功，如Android生态系统，但在没有广泛的数据标记和参数调整的情况下，这些研究结果并不直接适用于新平台，如Chrome扩展和IFTTT。
> 
> 在本文中，我们设计、实施和评估了一种名为TKPERM的新系统，该系统可以在不同的平台之间传递权限相关系统的知识。我们的主要思想是，这些不同用例的各种平台，如智能手机、物联网设备和桌面浏览器，都是面向用户的，因此可以在不同平台之间传递知识。特别地，我们采用了一种贪婪选择算法，该算法在新平台上选择最佳源域来传递目标权限。
> 
> 在传递后，TKPERM实现了90.02％的总体F1得分，比在没有传递的情况下直接在目标领域训练的模型的得分高出12.62％。特别地，TKPERM在IFTTT上的F1得分为91.83％，在Chrome扩展上的F1得分为89.13％，在SmartThings上的F1得分为89.1％。TKPERM还成功地识别了许多现实世界中的过度授权应用程序，例如一个请求位置权限但没有合法用途的游戏中心。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/tkperm-cross-platform-permission-knowledge-transfer-to-detect-overprivileged-third-party-applications/](https://www.ndss-symposium.org/ndss-paper/tkperm-cross-platform-permission-knowledge-transfer-to-detect-overprivileged-third-party-applications/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24287-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24287-paper.pdf)
## FlowPrint: Semi-Supervised Mobile-App Fingerprinting on Encrypted Network Traffic.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#flowprint-semi-supervised-mobile-app-fingerprinting-on-encrypted-network-traffic) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#flowprint-semi-supervised-mobile-app-fingerprinting-on-encrypted-network-traffic)**
### 作者
* Thijs van Ede, University of Twente
* Riccardo Bortolameotti, Bitdefender
* Andrea Continella, UC Santa Barbara
* Jingjing Ren, Northeastern University
* Daniel J. Dubois, Northeastern University
* Martina Lindorfer, TU Wien
* David Choffnes, Northeastern University
* Maarten van Steen, University of Twente
* Andreas Peter, University of Twente
### 摘要
> 移动应用程序对网络流量进行指纹识别是许多安全解决方案的宝贵工具，因为它可以提供关于网络上活动的应用程序的洞察力。不幸的是，现有的技术需要先了解应用程序才能识别它们。然而，移动环境不断发展，即应用程序经常被安装、更新和卸载。因此，现有的指纹识别方法不可能涵盖可能出现在网络上的所有应用程序。此外，大多数移动流量都经过加密，并显示与其他应用程序的相似之处，例如由于公共库或内容交付网络的使用，还依赖于用户输入，进一步复杂化了指纹识别过程。
> 
> 作为解决方案，我们提出了FlowPrint，这是一种从（加密的）网络流量中创建移动应用程序指纹的无监督方法。我们自动找到与网络流量的相关目标特征之间的时间相关性，并利用这些相关性生成应用程序指纹。由于这种方法是无监督的，我们能够识别以前未见过的应用程序，而这是现有技术无法实现的。我们在Android和iOS的应用程序识别设置中评估了我们的方法，在准确性方面实现了89.2%的准确率，超过现有技术解决方案的39.0%。此外，我们还展示了我们的方法可以以93.5%的精确度检测以前未见过的应用程序，在通信的前五分钟内检测到了72.3%的应用程序。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/flowprint-semi-supervised-mobile-app-fingerprinting-on-encrypted-network-traffic/](https://www.ndss-symposium.org/ndss-paper/flowprint-semi-supervised-mobile-app-fingerprinting-on-encrypted-network-traffic/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24412-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24412-paper.pdf)
## Bobtail: Improved Blockchain Security with Low-Variance Mining.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#bobtail-improved-blockchain-security-with-low-variance-mining) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#bobtail-improved-blockchain-security-with-low-variance-mining)**
### 作者
* George Bissias, University of Massachusetts Amherst
* Brian N. Levine, University of Massachusetts Amherst
### 摘要
> 区块链系统旨在以恒定的平均速率生成区块。目前最流行的系统采用工作量证明（Proof of Work，PoW）算法来创建这些区块。目前所有部署的PoW区块链系统的一个不幸限制是区块之间的时间具有较高的方差。例如，比特币平均每10分钟产生一个区块。然而，5%的时间内，比特币的区块间隔至少为40分钟。
> 
> 本文显示了高方差是对PoW区块链的根本攻击。我们提出了一种替代的基于PoW的区块发现过程，可以显著降低区块间隔的方差。我们的算法被称为“Bobtail”，它将当前算法中使用单一PoW样本的方法推广为使用$k$个样本的方法。我们证明了随着$k$的增加，区块间隔的方差减小。Bobtail能够显著阻碍双花攻击和自私挖矿攻击。例如，对于比特币和以太坊，当商家设立一个封锁1个区块的禁运时，拥有40%算力的双花攻击者将以53%的概率成功；然而，当$k$大于等于40时，同一个攻击者的成功概率将降至小于1%。同样地，对于比特币和以太坊目前，拥有49%算力的自私挖矿者将获得约95%的区块；然而，当$k$大于等于20时，同一个挖矿者将发现自私挖矿不如诚实挖矿成功。我们还研究了Bobtail可能带来的新攻击，并展示了如何进行防御。我们方法的主要成本是较大的区块和增加的网络流量。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/bobtail-improved-blockchain-security-with-low-variance-mining/](https://www.ndss-symposium.org/ndss-paper/bobtail-improved-blockchain-security-with-low-variance-mining/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/23095-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/23095-paper.pdf)
## Snappy: Fast On-chain Payments with Practical Collaterals.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#snappy-fast-on-chain-payments-with-practical-collaterals) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#snappy-fast-on-chain-payments-with-practical-collaterals)**
### 作者
* Vasilios Mavroudis, University College London
* Karl Wüst, ETH Zurich
* Aritra Dhar, ETH Zurich
* Kari Kostiainen, ETH Zurich
* Srdjan Capkun, ETH Zurich
### 摘要
> 无许可的区块链提供了许多优势，但也存在重大限制，包括高延迟。这使得它们无法在重要场景中使用，比如零售支付，商家需要快速批准支付。之前的研究试图通过将交易从链上移除来缓解这个问题。然而，这种第二层解决方案也存在问题：支付通道需要向每个商家单独存款，因此会占用顾客大量的资金；支付中心需要非常大的运营商存款，这取决于顾客的数量；侧链需要可信的验证者。
> 
> 在本文中，我们提出了一种新颖的解决方案Snappy，使得接收方（如商家）能够安全地接受快速支付。在Snappy中，所有支付都在链上进行，而小额顾客抵押品和适度的商家抵押品作为支付保证。除了接收支付外，商家还充当状态保持者，通过多数投票集体跟踪和批准进入的支付。在遭受双重支付攻击的情况下，受害商家可以从恶意顾客的抵押品或串通的状态保持者（商家）的保证金中恢复丢失的资金。Snappy解决了先前解决方案的主要问题：单个顾客抵押品可以用于与多个商家购物；商家抵押品与顾客数量无关；验证者无需受信任。我们的以太坊原型表明，在现有的区块链上可以实现安全、快速（<2秒）和廉价的支付。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/snappy-fast-on-chain-payments-with-practical-collaterals/](https://www.ndss-symposium.org/ndss-paper/snappy-fast-on-chain-payments-with-practical-collaterals/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24049-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24049-paper.pdf)
## The Attack of the Clones Against Proof-of-Authority.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#the-attack-of-the-clones-against-proof-of-authority) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#the-attack-of-the-clones-against-proof-of-authority)**
### 作者
* Parinya Ekparinya, University of Sydney
* Vincent Gramoli, University of Sydney and CSIRO-Data61
* Guillaume Jourjon, CSIRO-Data61
### 摘要
> 传统区块链的脆弱性已在多个场合得到证明。现在，各个公司正转向采用具有更传统拜占庭容错的权威证明（PoA）区块链，其中一组已知的许可证验证者中，最多有t个拜占庭验证者，用于生成包含用户交易的区块。尽管这些协议已被广泛采用，但其正确性尚未得到证明。
> 
> 本文针对Ethereum中两种最常用的PoA实现——Aura和Clique，提出了克隆攻击（Cloning Attack）。克隆攻击包括一个验证者将其一对公私钥克隆到两个不同的与不同验证者组通信的Ethereum实例中。为了确定它们的漏洞，我们首先指定相应的算法。然后为每种协议部署一个测试网络，并证明只需一个拜占庭验证者即可成功发动攻击。最后，我们提出了防止对手进行双花攻击的对策，并介绍了决定块的安全所需的验证者数量（取决于n和t）的方法，以确保Aura和Clique的安全性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/the-attack-of-the-clones-against-proof-of-authority/](https://www.ndss-symposium.org/ndss-paper/the-attack-of-the-clones-against-proof-of-authority/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24082-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24082-paper.pdf)
## Broken Metre: Attacking Resource Metering in EVM.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#broken-metre-attacking-resource-metering-in-evm) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#broken-metre-attacking-resource-metering-in-evm)**
### 作者
* Daniel Perez, Imperial College London
* Benjamin Livshits, Imperial College London
### 摘要
> 计量是一种用于在以太坊等区块链系统中分配智能合约执行成本的方法。本文基于以太坊区块链使用的gas，对计量方法进行了详细调查。我们发现计量模型存在一些差异，例如指令定价方面存在显著不一致性。我们进一步证明，gas与CPU和内存等资源之间几乎没有太大的相关性。我们发现，主要原因是gas价格受到所使用的存储量的支配。
> 
> 基于以上观察，我们提出了一种新的DoS攻击类型，我们称之为资源耗尽攻击(Resource Exhaustion Attack)，它利用这些缺陷生成低吞吐量的合约。通过使用这种方法，我们展示了我们能够生成的合约平均吞吐量比典型合约慢50倍。这些合约可以用于阻止硬件容量较低的节点参与网络，从而人为地减少网络可提供的分散程度。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/broken-metre-attacking-resource-metering-in-evm/](https://www.ndss-symposium.org/ndss-paper/broken-metre-attacking-resource-metering-in-evm/)
## Finding Safety in Numbers with Secure Allegation Escrows.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#finding-safety-in-numbers-with-secure-allegation-escrows) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#finding-safety-in-numbers-with-secure-allegation-escrows)**
### 作者
* Venkat Arun, Massachusetts Institute of Technology
* Aniket Kate, Purdue University
* Deepak Garg, Max Planck Institute for Software Systems
* Peter Druschel, Max Planck Institute for Software Systems
* Bobby Bhattacharjee, University of Maryland
### 摘要
> 出于对报复的恐惧，犯罪受害人可能只有在其他同一作案者的受害人也站出来时才愿意报案。常见的例子包括被有权势的人性骚扰并公开指控有影响力的政治人物、专制政府或自己的雇主腐败行为。为了处理这种情况，法律文献提出了指控托管的概念，即一个中立的第三方匿名收集指控，并将指控与其他指控进行匹配，只有在指定的指控者事先指定的匿名性门槛达到后才对指控者进行解匿名处理。
> 
> 指控托管可以实现为一个可信任的单一第三方；然而，这个第三方必须值得信赖，能够保持指控者的身份和指控内容的私密性。为了解决这个问题，本文介绍了安全指控托管（Secure Allegation Escrows，简称SAE，读作“赛”）。SAE是一组具有独立利益和动机的各方，共同充当托管角色，收集个人的指控，将指控进行匹配，并在达到指定的门槛时对指控进行解匿名处理。根据设计，SAE具有非常强的特性：在没有足够数量的匹配指控的情况下，构成SAE的多数各方都无法解匿名或泄露指控内容（即使与任意数量的其他指控者串通在一起）。一旦存在足够数量的匹配指控，所有各方可以同时披露指控，并提供可验证的指控者身份证明。我们描述了如何使用一种新颖的身份认证协议和一种新颖的指控匹配和分桶算法构建SAE，提供了对我们构建的安全性的正式证明，并对原型实现进行了评估，证明了实际可行性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/finding-safety-in-numbers-with-secure-allegation-escrows/](https://www.ndss-symposium.org/ndss-paper/finding-safety-in-numbers-with-secure-allegation-escrows/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24331-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24331-paper.pdf)
## When Match Fields Do Not Need to Match: Buffered Packets Hijacking in SDN.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#when-match-fields-do-not-need-to-match-buffered-packets-hijacking-in-sdn) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#when-match-fields-do-not-need-to-match-buffered-packets-hijacking-in-sdn)**
### 作者
* Jiahao Cao, Tsinghua University; George Mason University
* Renjie Xie, Tsinghua University
* Kun Sun, George Mason University
* Qi Li, Tsinghua University
* Guofei Gu, Texas A&M University
* Mingwei Xu, Tsinghua University
### 摘要
> 软件定义网络（Software-Defined Networking，SDN）通过在集中控制器上部署多样化的SDN应用，极大地满足了工业界对可编程、敏捷和动态网络的需求。然而，SDN应用生态系统无可避免地引入了新的安全威胁，因为被破坏或恶意的应用程序可以显著破坏网络运营。已经开发了许多有效的安全增强系统，用于防止SDN应用可能的攻击，包括数据溯源系统以保护应用程序免受恶意应用程序的中毒，规则冲突检测系统以防止数据包绕过网络安全策略，以及应用隔离系统以防止应用程序破坏控制器。在本文中，我们发现了SDN中流规则安装的一个新的设计缺陷，恶意应用程序可以利用这个漏洞来发动有效的攻击，绕过现有的防御系统。我们发现SDN系统在应用程序尝试安装流规则时并不检查缓冲区ID和匹配字段之间的不一致性，因此恶意应用程序可以操纵缓冲区ID来劫持缓冲的数据包，即使应用程序安装的流规则与具有该缓冲区ID的数据包不匹配。我们将这个新的漏洞命名为“缓冲区数据包劫持”，恶意应用程序可以利用它来发动攻击，破坏整个SDN的三个层级，即应用层、数据平面层和控制层。首先，通过修改缓冲的数据包并将其重新发送给控制器，恶意应用程序可以对其他应用程序进行中毒。其次，通过操纵缓冲的数据包的转发行为，恶意应用程序不仅可以破坏流的TCP连接，还可以使流绕过网络安全策略。第三，通过将大量缓冲的数据包复制到控制器，恶意应用程序可以占用SDN控制信道和计算资源的带宽。我们通过理论分析和在真实的SDN测试平台上进行实验，证明了这些攻击的可行性和有效性。最后，我们开发了一个轻量级的防御系统，可以作为补丁方便地部署在现有的SDN控制器中。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/when-match-fields-do-not-need-to-match-buffered-packets-hijacking-in-sdn/](https://www.ndss-symposium.org/ndss-paper/when-match-fields-do-not-need-to-match-buffered-packets-hijacking-in-sdn/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/23040-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/23040-paper.pdf)
## Automated Discovery of Cross-Plane Event-Based Vulnerabilities in Software-Defined Networking.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#automated-discovery-of-cross-plane-event-based-vulnerabilities-in-software-defined-networking) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#automated-discovery-of-cross-plane-event-based-vulnerabilities-in-software-defined-networking)**
### 作者
* Benjamin E. Ujcich, University of Illinois at Urbana-Champaign
* Samuel Jero, MIT Lincoln Laboratory
* Richard Skowyra, MIT Lincoln Laboratory
* Steven R. Gomez, MIT Lincoln Laboratory
* Adam Bates, University of Illinois at Urbana-Champaign
* William H. Sanders, University of Illinois at Urbana-Champaign
* Hamed Okhravi, MIT Lincoln Laboratory
### 摘要
> 软件定义网络（SDN）通过使用逻辑集中、事件驱动的控制器和扩展控制器功能的网络应用程序（apps），实现可编程的控制平面。由于控制平面决策通常基于数据平面，精心设计的恶意数据平面输入可能会将控制平面引导到绕过网络安全限制的不需要状态（即交叉平面攻击）。不幸的是，由于控制器、apps 和数据平面输入之间的复杂相互作用，目前很难系统地识别和分析这些交叉平面漏洞。
> 
> 我们提出了一种名为 EventScope 的漏洞检测工具，它可以自动分析 SDN 控制平面事件使用情况，根据缺失的事件处理例程发现候选漏洞，并根据数据平面影响验证漏洞。为了准确地检测缺失的事件处理程序，不需要基础真相或开发者的帮助，我们根据类似的事件使用情况对 apps 进行聚类，并将不一致之处标记为候选漏洞。我们创建了一个事件流图，观察控制平面中的事件和控制流的全局视图，并使用它来验证影响数据平面的漏洞。我们将 EventScope 应用于 ONOS SDN 控制器，并发现了 14 个新的漏洞。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/automated-discovery-of-cross-plane-event-based-vulnerabilities-in-software-defined-networking/](https://www.ndss-symposium.org/ndss-paper/automated-discovery-of-cross-plane-event-based-vulnerabilities-in-software-defined-networking/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24080-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24080-paper.pdf)
## SVLAN: Secure & Scalable Network Virtualization.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#svlan-secure-scalable-network-virtualization) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#svlan-secure-scalable-network-virtualization)**
### 作者
* Jonghoon Kwon, ETH
* Taeho Lee, ETH
* Claude Hähni, ETH
* Adrian Perrig, ETH
### 摘要
> 网络隔离是一项至关重要的现代互联网服务。迄今为止，网络运营商已经创建了一个逻辑网络的分布式系统，以在不同方之间提供通信隔离。然而，当前的网络隔离在可扩展性和灵活性方面存在局限。它限制了虚拟网络的数量，并且仅支持主机（或虚拟机）粒度的隔离。在本文中，我们介绍了可扩展的虚拟局域网（SVLAN），它可以扩展到大量的分布式系统，并提供更好的灵活性来实现安全的网络隔离。通过目标驱动可达性和携带数据的转发状态的概念，SVLAN不仅提供了通信隔离，还可以在不同的粒度上进行规定，例如按应用程序或进程进行隔离。我们的概念验证SVLAN实现证明了其对实际应用的可行性和实用性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/svlan-secure-scalable-network-virtualization/](https://www.ndss-symposium.org/ndss-paper/svlan-secure-scalable-network-virtualization/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24162-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24162-paper.pdf)
## µRAI: Securing Embedded Systems with Return Address Integrity.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#rai-securing-embedded-systems-with-return-address-integrity) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#rai-securing-embedded-systems-with-return-address-integrity)**
### 作者
* Naif Saleh Almakhdhub, Purdue University and King Saud University
* Abraham A. Clements, Sandia National Laboratories
* Saurabh Bagchi, Purdue University
* Mathias Payer, EPFL
### 摘要
> 嵌入式系统被部署在安全关键环境中，已成为远程攻击的主要目标。基于微控制器的系统（MCUS）特别容易受到攻击，因为资源有限且低级别编程容易出现漏洞。由于MCUS通常是较大系统的一部分，漏洞可能不仅危及设备本身的安全，还会危及其他系统的安全。例如，利用WiFi系统芯片（SoC）可以劫持智能手机的应用处理器。
> 
> 针对后向边的控制流劫持（例如，返回导向编程-ROP）仍然对MCUS构成威胁。目前的防御措施要么容易受到ROP风格攻击，要么需要特殊硬件（如不常见的可信执行环境（TEE））。
> 
> 我们提出了µRAI，这是一种基于编译器的缓解方法，用于防止针对MCUS的控制流劫持攻击，以实现对返回地址完整性（RAI）的强制要求。µRAI不需要任何额外的硬件（如TEE），适用于大多数MCUS。为了实现这一目标，µRAI引入了一种将返回地址从可写内存移动到可读和可执行内存的技术。它重新利用一个从不溢出的通用寄存器，并使用它来解析正确的返回位置。我们针对不同的控制流劫持攻击场景（例如，任意写入）进行评估，并展示了µRAI如何防止所有这些攻击。此外，我们的评估结果显示，µRAI的保护带来的开销极小。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/murai-securing-embedded-systems-with-return-address-integrity/](https://www.ndss-symposium.org/ndss-paper/murai-securing-embedded-systems-with-return-address-integrity/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24016-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24016-paper.pdf)
## NoJITsu: Locking Down JavaScript Engines.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#nojitsu-locking-down-javascript-engines) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#nojitsu-locking-down-javascript-engines)**
### 作者
* Taemin Park, University of California
### 摘要
> 数据仅攻击动态脚本环境已经变得很常见。Web浏览器和其他现代应用程序嵌入脚本引擎以支持交互式内容。脚本引擎通过即时编译来优化性能。由于应用程序越来越难以受到代码重用攻击的影响，攻击者试图通过破坏敏感数据（如优化JIT编译器的中间表示）来实现代码执行或提升权限。这促使了许多保护即时编译器的防御措施。
> 
> 我们的论文证明了仅仅保护JIT编译是不够的。首先，我们展示了一个针对最新版本Mozilla的SpiderMonkey JIT的数据仅攻击的概念验证。攻击者只需破坏堆对象就能够成功地在字节码执行期间发起系统调用。以前的研究认为字节码执行在构造上是安全的，因为解释器只允许一小部分良性指令，并且字节码在执行之前总是经过有效性检查。我们表明，这并不能防止恶意代码的执行。其次，我们设计了一种新颖的防御机制，名为NoJITsu，用于保护复杂的真实世界脚本引擎免受对解释代码的数据仅攻击。我们防御机制的关键思想是通过分析、识别、隔离和保护JavaScript引擎中任意时刻关注代码生成的个别内存区域，实现细粒度的内存访问控制。为此，我们结合了自动化分析和注入、分区以及Intel的内存保护密钥来保护SpiderMonkey免受以前和我们的新攻击。我们实现并进行了全面的测试，包括一些真实场景和标准基准测试。我们展示了NoJITsu成功地阻止了代码重用以及对脚本引擎的任何部分的数据仅攻击，并且只带来了5%的运行时开销。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/nojitsu-locking-down-javascript-engines/](https://www.ndss-symposium.org/ndss-paper/nojitsu-locking-down-javascript-engines/)
## SODA: A Generic Online Detection Framework for Smart Contracts.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#soda-a-generic-online-detection-framework-for-smart-contracts) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#soda-a-generic-online-detection-framework-for-smart-contracts)**
### 作者
* Ting Chen, University of Electronic Science and Technology of China
* Rong Cao, University of Electronic Science and Technology of China
* Ting Li, University of Electronic Science and Technology of China
* Xiapu Luo, The Hong Kong Polytechnic University
* Guofei Gu, Texas A&M University
* Yufei Zhang, University of Electronic Science and Technology of China
* Zhou Liao, University of Electronic Science and Technology of China
* Hang Zhu, University of Electronic Science and Technology of China
* Gang Chen, Chengdu Kongdi Technology Inc.
* Zheyuan He, University of Electronic Science and Technology of China
* Yuxing Tang, University of Electronic Science and Technology of China
* Xiaodong Lin, University of Guelph
* Xiaosong Zhang, University of Electronic Science and Technology of China
### 摘要
> 智能合约由于可以持有大量资金而成为攻击者的利润丰厚的目标。尽管已经有许多研究来发现智能合约中的漏洞，但由于它们依赖离线分析，不能保证发现所有漏洞，也不能保护已部署的智能合约免受攻击。最近，出现了一些在线保护方法，但它们只关注特定的攻击，并且无法轻易扩展以防御其他攻击。从头开始开发一个新的智能合约在线保护系统耗时且需要熟悉智能合约运行时的内部机制，因此很难快速实现和部署用于防御新攻击的机制。
> 
> 在本文中，我们提出了一个名为SPA的新颖的通用运行时保护框架，可用于支持以太坊虚拟机（EVM）的任何区块链上的智能合约。SPA通过其能力、效率和兼容性与现有的在线保护方法有所区别。首先，SPA通过分层设计将信息收集、攻击检测和响应分离，赋予用户轻松开发和部署用于防御各种攻击的保护应用程序的能力。在较高层，SPA提供统一的接口来开发防御各种攻击的保护应用程序。在较低层，SPA通过对EVM进行仪器化，收集检测各种攻击所需的所有基本信息，并构建11种结构化信息，以便轻松开发保护应用程序。基于SPA，用户可以在几行代码中开发新的保护应用程序，而无需修改EVM，并轻松部署它们到区块链上。其次，SPA高效，因为我们设计了按需信息检索以减少信息收集的开销，并采用动态链接来消除进程间通信的开销。用户可以使用任何能生成动态链接库（DLL）的编程语言来开发保护应用程序。第三，由于越来越多的区块链采用EVM作为智能合约运行时，SPA可以轻松迁移到这些区块链而无需修改保护应用程序。基于SPA，我们开发了8个保护应用程序，用于防御智能合约中存在的主要漏洞的攻击，并将SPA（包括所有保护应用程序）集成到3个流行的区块链上：以太坊、Expanse和Wanchain。广泛的实验结果证明了SPA和我们的保护应用程序的有效性和效率。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/soda-a-generic-online-detection-framework-for-smart-contracts/](https://www.ndss-symposium.org/ndss-paper/soda-a-generic-online-detection-framework-for-smart-contracts/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24449-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24449-paper.pdf)
## A Practical Approach for Taking Down Avalanche Botnets Under Real-World Constraints.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#a-practical-approach-for-taking-down-avalanche-botnets-under-real-world-constraints) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#a-practical-approach-for-taking-down-avalanche-botnets-under-real-world-constraints)**
### 作者
* Victor Le Pochat, imec-DistriNet
### 摘要
> 在2016年，执法部门摧毁了迄今为止规模最大的网络犯罪行动——Avalanche防弹主机服务的基础设施。Avalanche使用域名生成算法（DGA）来生成随机域名，以控制其僵尸网络。这一行动针对这些被认为有害的域名进行积极打击；然而，由于与合法域名的巧合可能性，调查人员必须首先对域名进行分类，以防止对网站所有者和僵尸网络受害者造成不良影响。
> 
> 这个现实世界中的打击行动存在一些限制（无法获取恶意活动的主动决策、没有大规模模式和无活动连接），这意味着无法应用现有技术的方法。因此，对成千上万的DGA注册域名进行分类的问题需要执法调查人员进行广泛而艰苦的人工努力。为了显著减少这种努力而不损害正确性，我们开发了一个自动化分类模型。通过协同方法，我们在2017年和2018年Avalanche行动的真实数据的基础上，实现了97.6%的准确率；对于2019年的行动，这意味着人工调查工作量减少了76.9%。此外，我们对模型进行解释，以向调查人员提供关于良性和恶意域名行为差异、哪些特征和数据来源最重要，以及如何根据实际需要应用模型的见解。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/a-practical-approach-for-taking-down-avalanche-botnets-under-real-world-constraints/](https://www.ndss-symposium.org/ndss-paper/a-practical-approach-for-taking-down-avalanche-botnets-under-real-world-constraints/)
## Designing a Better Browser for Tor with BLAST.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#designing-a-better-browser-for-tor-with-blast) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#designing-a-better-browser-for-tor-with-blast)**
### 作者
* Tao Wang, Hong Kong University of Science and Technology
### 摘要
> Tor是一个匿名网络，允许客户端私密地浏览网页，但是使用Tor加载网页很慢。为了分析浏览器加载网页的过程，我们使用我们的新的浏览器日志和模拟工具BLAST，检查它们的资源树。我们发现，使用Tor加载网页所需的时间几乎完全取决于所产生的往返次数，而不是带宽，而Tor浏览器产生了不必要的往返次数。资源在浏览器队列中等待TCP、TLS或ALPN握手，而每个握手都需要单独的往返次数。我们发现，通过增加资源加载能力，使用更大的管道甚至HTTP/2并不能减少加载时间，因为它们不能节省往返次数。
> 
> 为了最小化往返次数，我们提出了一些协议和浏览器改进，包括TCP Fast Open、乐观数据、零往返时间TLS。我们还推荐使用数据库来帮助客户端进行重定向，识别HTTP/2服务器和预获取。所有这些功能都旨在减少加载网页时产生的往返次数。为了评估这些改进，我们创建了一个模拟工具，并验证其在预测平均页面加载时间方面的高准确性。我们使用模拟器分析了这些功能，并预测它们将总体上将平均页面加载时间减少61%以上。我们对用户体验的大幅改进几乎没有对Tor网络产生任何成本。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/designing-a-better-browser-for-tor-with-blast/](https://www.ndss-symposium.org/ndss-paper/designing-a-better-browser-for-tor-with-blast/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24199-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24199-paper.pdf)
## Encrypted DNS -> Privacy? A Traffic Analysis Perspective.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#encrypted-dns-privacy-a-traffic-analysis-perspective) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#encrypted-dns-privacy-a-traffic-analysis-perspective)**
### 作者
* Sandra Siby, EPFL
* Marc Juarez, University of Southern California
* Claudia Diaz, imec-COSIC KU Leuven
* Narseo Vallina-Rodriguez, IMDEA Networks Institute
* Carmela Troncoso, EPFL
### 摘要
> 几乎每个连接到互联网服务的过程都会在没有任何防护的情况下进行DNS查询，从而可能导致操纵、重定向、监视和审查。为了解决这些问题，像谷歌和Cloudflare这样的大型组织正在部署最近标准化的协议，对终端用户和递归解析器之间的DNS流量进行加密，如DNS-over-TLS（DoT）和DNS-over-HTTPS（DoH）。在本文中，我们探讨了加密DNS流量是否可以保护用户免受基于流量分析的监视和审查。我们提出了一种新颖的特征集来进行攻击，因为用于攻击HTTPS或Tor流量的方法并不适用于DNS的特点。我们展示了流量分析可以在封闭和开放的环境中，使用比攻击HTTPS流量少124倍的数据准确识别域名。我们发现，位置、解析器、平台或客户端等因素可以减轻攻击性能，但远不能完全阻止它们。我们的结果表明，基于DNS的审查在加密DNS流量上仍然是可能的。事实上，我们证明了标准化的填充方案并不有效。然而，对于DoH流量分析，Tor是一种有效的防御手段，而对于Web流量的流量分析攻击，Tor并不有效。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/encrypted-dns-privacy-a-traffic-analysis-perspective/](https://www.ndss-symposium.org/ndss-paper/encrypted-dns-privacy-a-traffic-analysis-perspective/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24301-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24301-paper.pdf)
## On Using Application-Layer Middlebox Protocols for Peeking Behind NAT Gateways.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#on-using-application-layer-middlebox-protocols-for-peeking-behind-nat-gateways) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#on-using-application-layer-middlebox-protocols-for-peeking-behind-nat-gateways)**
### 作者
* Teemu Rytilahti, Ruhr University Bochum
* Thorsten Holz, Ruhr University Bochum
### 摘要
> 典型的端口扫描方法不能对连接到互联网的所有设备进行全面覆盖，因为并非所有设备都可以通过公共（IPv4）地址直接访问：由于IP地址空间耗尽、防火墙和其他许多原因，今天的互联网已经无法实现端到端的连通性。特别是网络地址转换（NAT）在实践中被广泛使用，并带有“隐藏”被扫描设备的副作用。然而，一些协议需要端到端的连通性才能正常工作，因此过去已经开发了几种方法来实现跨网络边界的通信。
> 
> 本文探讨了攻击者如何利用这些应用层中间盒协议来访问隐藏在网关后面的设备。更具体地说，我们通过滥用合法协议特性来研究了不同的方法来识别此类设备。我们将可用的协议分为两类：首先，有持续性协议通常基于端口转发。此类协议用于使本地网络设备打开并转发外部端口。其次，有非持续性协议通常基于代理，用于在网络边缘之间路由数据包，例如HTTP和SOCKS代理。我们进行了全面的互联网范围分析，以获得对这些协议在实践中普遍存在程度的准确概述。我们的结果表明，成千上万的主机易受不同类型的攻击威胁，例如，我们发现有超过40万台可能容易受到涉及UPnP IGD协议的攻击的主机。更令人担忧的是，我们发现有实证证据表明攻击者已经在野外积极利用这些协议来访问位于NAT网关后面的设备。在其他发现中，我们发现至少有24％的所有公开互联网代理服务器配置错误，可以访问非可路由地址上的主机。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/on-using-application-layer-middlebox-protocols-for-peeking-behind-nat-gateways/](https://www.ndss-symposium.org/ndss-paper/on-using-application-layer-middlebox-protocols-for-peeking-behind-nat-gateways/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24389-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24389-paper.pdf)
## ABSynthe: Automatic Blackbox Side-channel Synthesis on Commodity Microarchitectures.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#absynthe-automatic-blackbox-side-channel-synthesis-on-commodity-microarchitectures) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#absynthe-automatic-blackbox-side-channel-synthesis-on-commodity-microarchitectures)**
### 作者
* Ben Gras, Vrije Universiteit Amsterdam
### 摘要
> 过去的十年中，各种CPU组件上出现了大量的侧信道攻击。每种新攻击通常都遵循白盒分析方法，包括（i）确定特定的共享CPU组件，（ii）在特定微架构上逆向其行为，以及（iii）通过有针对性地清除共享项来泄露信息（例如，通过主动清除共享项目以监视受害者访问）。这种方法需要对目标组件有深入的了解，需要进行漫长的逆向工程，并且对于每个新组件和每个微架构都需要重复。它也无法攻击未知的共享资源。
> 
> 在本文中，我们介绍了ABSynthe，这是一个系统，它以目标程序和微架构作为输入，并自动合成新的侧信道。关键的洞察力是通过将自己限制在（通常是核心上的）基于争用的侧信道上，我们可以将目标CPU微架构视为黑盒，实现自动化。为了使ABSynthe成为可能，我们已经自动生成了各种x86_64微架构的泄漏映射。这些泄漏映射显示了一个复杂的图片，并且证明了对于寻找导致软件目标信息泄漏的最佳指令序列，黑盒方法是合理的。该目标也被视为黑盒进行处理和分析，以寻找依赖密钥的分支。为了使用优化的指令序列恢复秘密信息，ABSynthe依赖于递归神经网络来设计实用的侧信道攻击。我们的评估有些令人意外地显示，与专注于单个组件的最新基于争用攻击相比，ABSynthe能够通过同时利用多个组件上的争用来合成更好的攻击。具体而言，ABSynthe所实现的自动化使我们能够在不同环境和各种微架构和加密软件目标中合成跨线程攻击，包括本机和虚拟环境。
> 
> 我们展示了针对Intel、AMD和ARM微架构以及4个不同加密目标的结果。例如，ABSynthe可以仅通过对Intel的单个追踪捕获进行恢复，达到100%的成功率，以完整恢复256位的EdDSA。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/absynthe-automatic-blackbox-side-channel-synthesis-on-commodity-microarchitectures/](https://www.ndss-symposium.org/ndss-paper/absynthe-automatic-blackbox-side-channel-synthesis-on-commodity-microarchitectures/)
## PhantomCache: Obfuscating Cache Conflicts with Localized Randomization.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#phantomcache-obfuscating-cache-conflicts-with-localized-randomization) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#phantomcache-obfuscating-cache-conflicts-with-localized-randomization)**
### 作者
* Qinhan Tan, Zhejiang University
* Zhihua Zeng, Zhejiang University
* Kai Bu, Zhejiang University
* Kui Ren, Zhejiang University
### 摘要
> 由于确定性内存到缓存映射引起的缓存冲突一直被用来泄漏敏感信息，如密钥。虽然随机映射已经完全研究了L1缓存，但如何保护更大的最后级缓存 (LLC) 仍然未解决。最近的解决方案定期更改映射策略以破坏冲突地址的构造，这是利用缓存冲突的关键攻击程序。然而，重新映射会增加失效率和访问延迟。我们提出了PhantomCache来保护一个无需重新映射的随机映射LLC。我们提出了一种局部随机化技术，将内存地址的随机映射限定在有限数量的缓存组中。这种小的随机化空间可以在内存访问中快速搜索LLC。固有的随机性仍然足以混淆冲突并破坏冲突地址的高效利用。我们对PhantomCache评估了一种探索最先进的攻击的攻击者，并具有线性复杂度。为了保护一个8个银行的16MB 16路LLC，PhantomCache将地址的随机化空间限制在8个组内，仅带来0.5%的性能下降和0.5%的存储开销每个缓存行，比最先进的解决方案高效3倍和9倍。此外，PhantomCache仅是一个架构解决方案，不需要软件更改。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/phantomcache-obfuscating-cache-conflicts-with-localized-randomization/](https://www.ndss-symposium.org/ndss-paper/phantomcache-obfuscating-cache-conflicts-with-localized-randomization/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24086-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24086-paper.pdf)
## Data-Driven Debugging for Functional Side Channels.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#data-driven-debugging-for-functional-side-channels) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#data-driven-debugging-for-functional-side-channels)**
### 作者
* Saeid Tizpaz-Niari, University of Colorado Boulder
* Pavol Černý, TU Wien
* Ashutosh Trivedi, University of Colorado Boulder
### 摘要
> 通过侧信道泄露信息是一个普遍存在的问题，即使在安全关键的应用程序中也是如此。当攻击者知道服务器的秘密值在一定的时间内保持不变时，功能性侧信道就会出现。然后，攻击者可以观察服务器在一系列不同的公共输入上的执行情况，每个输入都与相同的秘密输入配对。因此，对于每个秘密，攻击者会观察到一个（部分）从公共输入到执行时间的函数，例如，她可以比较不同秘密的这些函数。
> 
> 首先，我们引入了功能性侧信道的非干扰概念。我们专注于噪声观察的情况，在示例中展示了在程序中存在实际可行的功能侧信道，而根据标准定义，这些程序可能被认为是无泄露信息或低估了泄露信息。其次，我们为功能侧信道的调试开发了一个框架和技术。我们将进化模糊测试技术扩展到生成利用公共输入对响应时间的功能依赖关系的输入。我们调整了现有的功能数据分析结果和算法（如功能聚类）来建模这些函数并发现侧信道的存在。如果存在侧信道，我们使用标准决策树学习的功能扩展来确定导致侧信道的代码片段。
> 
> 我们在一系列微基准测试和实际的Java程序中对我们的工具FUCHSIA进行了实证评估。在微基准测试集上，我们展示了FUCHSIA在检测侧信道类别方面优于最先进技术。在实际程序中，我们展示了FUCHSIA在分析具有数千个方法的Java程序中功能侧信道的可扩展性。此外，我们展示了FUCHSIA在发现（并在代码中定位）侧信道方面的实用性，其中包括Open Java Development Kit中的一个零日漏洞和另一个Java Web服务器漏洞，这些漏洞已经被原始开发者修复。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/data-driven-debugging-for-functional-side-channels/](https://www.ndss-symposium.org/ndss-paper/data-driven-debugging-for-functional-side-channels/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24269-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24269-paper.pdf)
## Mind the Portability: A Warriors Guide through Realistic Profiled Side-channel Analysis.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#mind-the-portability-a-warriors-guide-through-realistic-profiled-side-channel-analysis) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#mind-the-portability-a-warriors-guide-through-realistic-profiled-side-channel-analysis)**
### 作者
* Shivam Bhasin, Nanyang Technological University
* Anupam Chattopadhyay, Nanyang Technological University
* Annelie Heuser, Univ Rennes
### 摘要
> 概述
> 
> 个人侧信道攻击代表了对数字设备的实际威胁，可能会破坏电子商务、物联网和智能城市的基础。在个人侧信道攻击中，攻击者通过获取对一个克隆设备的访问来获取有关目标设备的知识。尽管在现实世界的情况下这两个设备是不同的，但不幸的是，大部分研究工作将设置简化为使用单个设备进行分析和攻击。在这里，可移植性问题被方便地忽略以简化实验过程。与上述发展并行的是，机器学习技术被应用于最新文献中，展示了在个人侧信道攻击中出色的性能。然而，不幸的是，可移植性被忽视了。
> 
> 在本文中，我们考虑了现实的侧信道场景和常用的机器学习技术，以评估可移植性对攻击效果的影响。我们的实验结果显示，可移植性起着重要的作用，不应该被忽视，因为它会导致对攻击效率的显著高估，这可能会十倍地增加攻击效果。在确定了可移植性的重要性之后，我们提出了一种称为“多设备模型（MDM）”的新模型，在个人侧信道攻击过程中正式地纳入了设备之间的差异。我们通过实验研究展示了机器学习和MDM如何显著增强实际个人侧信道攻击的能力。更准确地说，我们展示了MDM如何能够将攻击的性能提升一个量级，完全抵消可移植性的影响。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/mind-the-portability-a-warriors-guide-through-realistic-profiled-side-channel-analysis/](https://www.ndss-symposium.org/ndss-paper/mind-the-portability-a-warriors-guide-through-realistic-profiled-side-channel-analysis/)
## Hold the Door! Fingerprinting Your Car Key to Prevent Keyless Entry Car Theft.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#hold-the-door-fingerprinting-your-car-key-to-prevent-keyless-entry-car-theft) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#hold-the-door-fingerprinting-your-car-key-to-prevent-keyless-entry-car-theft)**
### 作者
* Kyungho Joo, Korea University
* Wonsuk Choi, Korea University
* Dong Hoon Lee, Korea University
### 摘要
> 最近，传统的汽车解锁方式已被无钥匙进入系统取而代之，这对汽车所有者来说更加方便。当装有无钥匙遥控器的驾驶员靠近车辆时，门会在用户命令下自动解锁。然而，不幸的是，已经知道这些无钥匙进入系统容易受到信号中继攻击。尽管明显看到汽车制造商采用了预防措施来保护这些无钥匙进入系统，但各种攻击仍在不断发生。中继信号符合有效数据包，被验证为合法，这使得很难区分合法请求车门解锁与恶意信号。针对这个漏洞，本文提出了一种射频指纹识别方法（命名为“HOld the DOoR”，HODOR）来检测无钥匙进入系统的攻击，这是在汽车领域首次尝试利用射频指纹技术。HODOR被设计为一个子认证系统，支持现有的无钥匙进入系统的认证系统，并且不需要对主系统进行任何修改。通过一系列实验，结果表明，HODOR能够可靠地检测到无钥匙进入系统的攻击。HODOR在检测模拟攻击方面实现了0.27%的平均误报率（FPR）和0%的漏报率（FNR），与当前无钥匙进入车辆盗窃问题相对应。此外，HODOR还在环境因素下进行观察：温度变化，非直视条件和电池老化。HODOR在非直视条件下识别合法固定钥匙的误报率为1.32%。根据实验结果，预计HODOR将为无钥匙进入系统提供安全的服务，同时保持便利性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/hold-the-door-fingerprinting-your-car-key-to-prevent-keyless-entry-car-theft/](https://www.ndss-symposium.org/ndss-paper/hold-the-door-fingerprinting-your-car-key-to-prevent-keyless-entry-car-theft/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/23107-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/23107-paper.pdf)
## Poseidon: Mitigating Volumetric DDoS Attacks with Programmable Switches.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#poseidon-mitigating-volumetric-ddos-attacks-with-programmable-switches) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#poseidon-mitigating-volumetric-ddos-attacks-with-programmable-switches)**
### 作者
* Menghao Zhang, Tsinghua University
* Guanyu Li, Tsinghua University
* Shicheng Wang, Tsinghua University
* Chang Liu, Tsinghua University
* Ang Chen, Rice University
* Hongxin Hu, Clemson University
* Guofei Gu, Texas A&M University
* Qi Li, Tsinghua University
* Mingwei Xu, Tsinghua University
* Jianping Wu, Tsinghua University
### 摘要
> 分布式拒绝服务（DDoS）攻击已成为对互联网的重大威胁。由于易受攻击的物联网（IoT）设备数量不断增加，攻击者可以轻松地攻破大量节点并从僵尸网络发动大规模的DDoS攻击。然而，最先进的DDoS防御措施还没有跟上攻击的快速发展。基于中间框架的防御措施可以通过专用硬件实现高性能，但这些措施成本高昂，并且部署新的防御措施通常需要设备升级。另一方面，基于软件的防御措施具有高度灵活性，但软件处理数据包会导致性能开销。在本文中，我们提出了Poseidon，这是一个解决当前DDoS防御措施限制的系统。它利用新兴的可编程交换机，在不需要额外硬件升级的情况下可以对其进行重新配置。Poseidon的用户可以用一组防御原语的模块化方式指定防御策略，并且可以轻松为每个网络进行自定义，还可以扩展以包括新的防御措施。然后，Poseidon将防御原语映射到可编程交换机上运行，并在必要时在服务器软件上进行有效的防御。当攻击变化时，Poseidon可以重新配置底层的防御原语以应对新的攻击模式。使用我们的原型进行的评估表明，Poseidon可以有效地抵御高容量攻击，轻松支持防御策略的定制化，并以低开销适应动态攻击。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/poseidon-mitigating-volumetric-ddos-attacks-with-programmable-switches/](https://www.ndss-symposium.org/ndss-paper/poseidon-mitigating-volumetric-ddos-attacks-with-programmable-switches/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24007-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24007-paper.pdf)
## EASI: Edge-Based Sender Identification on Resource-Constrained Platforms for Automotive Networks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#easi-edge-based-sender-identification-on-resource-constrained-platforms-for-automotive-networks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#easi-edge-based-sender-identification-on-resource-constrained-platforms-for-automotive-networks)**
### 作者
* Marcel Kneib, Robert Bosch GmbH
* Oleg Schell, Bosch Engineering GmbH
* Christopher Huth, Robert Bosch GmbH
### 摘要
> 在汽车中，由于持续的数字化，内部电子控制单元（ECU）越来越容易在无线连接上受到对手的攻击。控制一个ECU允许对手发送消息到内部车辆总线，从而控制各种车辆功能。对于最广泛使用的总线技术——控制器局域网（CAN），情况尤为严重，因为它控制制动和转向。然而，现有技术的接收器不能识别数据帧的发送者。由于带宽减少、负载低和计算资源有限，通过添加消息认证码（MAC）来保证数据帧真实性的改造只能在有限程度上实现。为了解决这个问题，提出了使用CAN信号的模拟差异观察来确定实际的发送者。这些先前的方法在某些情况下具有良好的识别率，但需要高采样率和高计算工作量。通过EASI，我们大大减少了所需的资源，并且同时在原型结构和两款系列生产车辆中实现了99.98%的增加识别率且没有错误的正例。与迄今最轻量级的方法相比，我们将内存占用和计算需求分别降低了168倍和142倍。此外，我们展示了EASI的可行性，从而首次证明了在资源受限平台上可以通过完整的信号特征实现发送者识别。由于成本效益对于汽车行业来说至关重要，因为生产规模大，所以实现发送者识别是非常重要的。由于我们的轻量级设计，在训练时间2.61秒内实现了百分之百的分类。我们还展示了在运行过程中逐步调整系统的能力。这些取得的改进对于实现发送者识别是显著且必要的。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/easi-edge-based-sender-identification-on-resource-constrained-platforms-for-automotive-networks/](https://www.ndss-symposium.org/ndss-paper/easi-edge-based-sender-identification-on-resource-constrained-platforms-for-automotive-networks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24025-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24025-paper.pdf)
## BLAG: Improving the Accuracy of Blacklists.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#blag-improving-the-accuracy-of-blacklists) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#blag-improving-the-accuracy-of-blacklists)**
### 作者
* Sivaramakrishnan Ramanathan, University of Southern California/Information Sciences Institute
* Jelena Mirkovic, University of Southern California/Information Sciences Institute
* Minlan Yu, Harvard University
### 摘要
> IP地址黑名单是关于重复攻击者的有用信息来源。这些信息可以用于优先评估哪些流量需要进行深度检查（例如，重复违规流量），或者哪些流量应该优先提供服务（例如，来自未列入黑名单的源的流量）。但是黑名单也存在过度专业化的问题，每个列表都针对特定目的，而且由于错误分类或过时信息，可能不准确。我们提出了BLAG，这是一个评估和汇总多个黑名单信息源的系统，可以生成更有用、准确和及时的主黑名单，量身定制给特定的客户网络。BLAG使用客户网络入站流量的合法来源的样本来评估各个黑名单在地址空间区域上的准确性。然后，它利用推荐系统选择最准确的信息，汇总到主黑名单中。最后，BLAG标识出可以扩展为更大地址区域（例如/24前缀）以最小化副作用的主黑名单的部分。我们对157种不同攻击类型的黑名单和三个地面真实数据集进行评估，结果显示，与竞争方法相比，BLAG具有高达99%的特异性，提高了长达114倍的召回率，并且检测攻击速度提前了最多13.7天，使其成为一种有前景的黑名单生成方法。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/blag-improving-the-accuracy-of-blacklists/](https://www.ndss-symposium.org/ndss-paper/blag-improving-the-accuracy-of-blacklists/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24232-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24232-paper.pdf)
## DefRec: Establishing Physical Function Virtualization to Disrupt Reconnaissance of Power Grids' Cyber-Physical Infrastructures.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#defrec-establishing-physical-function-virtualization-to-disrupt-reconnaissance-of-power-grids-cyber-physical-infrastructures) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#defrec-establishing-physical-function-virtualization-to-disrupt-reconnaissance-of-power-grids-cyber-physical-infrastructures)**
### 作者
* Hui Lin, University of Nevada
### 摘要
> 侦察对于对工业控制系统（ICS）如智能电网进行物理破坏的对手来说至关重要。破坏侦察是具有挑战性的。基于拟态系统行为的最先进的移动目标防御（MTD）技术没有考虑到电网的实际基础设施并且很容易被识别出来。
> 
> 为了克服这些挑战，我们提出了物理功能虚拟化（PFV），它通过“挂钩”与实际物理设备的网络交互，并使用它们来构建轻量级的虚拟节点，以便与实际网络堆栈的实现、系统不变量和实际设备的物理状态变化保持一致。在PFV的基础上，我们提出了一种防御机制DefRec，它显著增加了对对手获取电网的网络物理基础设施知识的侦察工作。通过随机化通信并为虚拟物理节点创建诱饵数据，DefRec可以误导对手设计无损攻击。我们在ONOS网络操作系统中实现了PFV和DefRec，并在一个网络物理实验室中对其进行评估，该实验室使用不同厂商的真实设备和HP物理交换机来模拟六个电网。实验结果显示，PFV可以以可忽略的开销准确地跟踪真实设备的行为。DefRec可以显著延迟被动攻击至少五个月，并且具有小于$10^{-30}$的错误否定率，可以隔离主动攻击。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/defrec-establishing-physical-function-virtualization-to-disrupt-reconnaissance-of-power-grids-cyber-physical-infrastructures/](https://www.ndss-symposium.org/ndss-paper/defrec-establishing-physical-function-virtualization-to-disrupt-reconnaissance-of-power-grids-cyber-physical-infrastructures/)
## Revisiting Leakage Abuse Attacks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#revisiting-leakage-abuse-attacks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#revisiting-leakage-abuse-attacks)**
### 作者
* Laura Blackstone, Brown University
* Seny Kamara, Brown University
* Tarik Moataz, Brown University
### 摘要
> 加密搜索算法（ESA）是支持加密数据搜索的密码算法。ESA可以使用各种基元进行设计，包括可搜索/结构化对称加密（SSE/STE）和遗忘化RAM（ORAM）。泄漏滥用攻击试图通过利用客户端数据的知识来恢复客户查询。任何泄漏滥用攻击的一个重要参数是其已知数据率，即敌方必须知道的客户数据的比例。
> 
> 在这项工作中，我们通过几种方式重新考虑了泄漏滥用攻击。我们首先强调了经常引述的IKK（伊斯兰等人，NDSS '12）和Count（Cash等人，CCS '15）攻击背后的实际限制和假设。然后，我们设计了四种基于更弱假设的新的泄漏滥用攻击。其中三种攻击是容积型的，只利用与文档大小相关的泄漏。具体来说，这意味着它们不仅适用于基于SSE/STE的ESA，还适用于基于ORAM的解决方案。我们还引入了两种容积型注入攻击，利用对手添加文件来恢复来自基于ORAM的解决方案的查询。据我们所知，这些是其类别的第一种攻击。
> 
> 我们对所有的攻击进行了实证评估，并考虑了许多实验设置，包括不同的数据集、查询选择性、已知数据率、查询空间大小和组成。从我们的实验中，我们观察到，在实际假设下，唯一导致合理恢复率的设置是高选择性查询的情况，其中泄漏配置包括响应标识模式（即匹配文档的标识符）和容积模式（即匹配文档的大小）。所有其他攻击场景要么失败，要么依赖于不现实的假设（例如，非常高的已知数据率）。针对这种特定情况，我们提出了一些建议和对策，包括使用PBS（Kamara等人，CRYPTO '18）、VLH/AVLH（Kamara和Moataz，Eurocrypt '19）等方案，或者使用Bost和Fouque最近提出的填充技术（Bost和Fouque，IACR ePrint 2017/1060）。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/revisiting-leakage-abuse-attacks/](https://www.ndss-symposium.org/ndss-paper/revisiting-leakage-abuse-attacks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/23103-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/23103-paper.pdf)
## Metal: A Metadata-Hiding File-Sharing System.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#metal-a-metadata-hiding-file-sharing-system) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#metal-a-metadata-hiding-file-sharing-system)**
### 作者
* Weikeng Chen, UC Berkeley
* Raluca Ada Popa, UC Berkeley
### 摘要
> 文件共享系统（如Dropbox）的隐私保护不足，因为受到威胁的服务器可以明文查看文件内容。虽然加密可以隐藏这些内容，但元数据泄露仍然非常严重。我们的目标是开发一个隐藏元数据的文件共享系统，其中包括用户身份和文件访问模式。
> 
> Metal是首个可以隐藏这些元数据并且仅具有几秒的延迟的文件共享系统。Metal的核心包括一个全新的两服务器多用户遗忘式随机存储器（ORAM）方案，该方案对恶意用户来说是安全的，还包括一个隐藏元数据的访问控制协议和一个能力共享协议。
> 
> 与最先进的恶意用户文件共享方案PIR-MCORAM（Maffei等，2017）相比，PIR-MCORAM不隐藏用户身份，而Metal可以隐藏用户身份，并且速度快500倍（按摊销延迟计）或者快10^5倍（按最坏情况延迟计）。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/metal-a-metadata-hiding-file-sharing-system/](https://www.ndss-symposium.org/ndss-paper/metal-a-metadata-hiding-file-sharing-system/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24095-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24095-paper.pdf)
## MACAO: A Maliciously-Secure and Client-Efficient Active ORAM Framework.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#macao-a-maliciously-secure-and-client-efficient-active-oram-framework) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#macao-a-maliciously-secure-and-client-efficient-active-oram-framework)**
### 作者
* Thang Hoang, University of South Florida
* Jorge Guajardo, Robert Bosch Research and Technology Center
* Attila Yavuz, University of South Florida
### 摘要
> 遗忘随机访问机（ORAM）允许客户端隐藏访问模式，从而为数据外包提供强大的隐私保护。理想的ORAM方案应该具有低客户带宽、低服务器计算开销以及能够在加密数据上进行计算的能力等理想性质。S3ORAM（CCS'17）是一种非常高效的主动ORAM方案，它利用秘密共享来提供低客户带宽、低服务器计算和低延迟等数据外包的理想性质。尽管具有这些优点，S3ORAM仅在诚实但好奇的环境中提供安全性。
> 
> 实际上，ORAM协议很可能在恶意对手存在的情况下运行，这些对手可能会违反协议来危及客户隐私。
> 
> 在本文中，我们提出了MACAO，一个新的多服务器ORAM框架，它提供了完整性、对主动对手的访问模式遗忘性，并能够在访问的数据上执行安全计算。MACAO利用鉴权秘密共享技术和树状ORAM范式，同时实现了低客户端通信、高效服务器计算和低存储开销。我们完全实现了MACAO，并在真实云平台（Amazon EC2）上进行了大量实验，以验证MACAO相对于最先进技术的性能。我们的结果表明，MACAO在提供安全性对抗恶意对手的同时，能够达到与S3ORAM相当的性能。我们的MACAO是集成到具有加密计算功能的分布式文件系统中的合适候选者，从而实现了完整的遗忘数据外包基础设施。我们将开源MACAO进行广泛测试和适应性调整。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/macao-a-maliciously-secure-and-client-efficient-active-oram-framework/](https://www.ndss-symposium.org/ndss-paper/macao-a-maliciously-secure-and-client-efficient-active-oram-framework/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24313-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24313-paper.pdf)
## Heterogeneous Private Information Retrieval.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#heterogeneous-private-information-retrieval) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#heterogeneous-private-information-retrieval)**
### 作者
* Hamid Mozaffari, University of Massachusetts Amherst
* Amir Houmansadr, University of Massachusetts Amherst
### 摘要
> 私人信息检索 (PIR) 允许客户端从不受信任的服务器查询和检索数据，而不让不受信任的服务器知道检索了哪些数据。
> 
> 在本文中，我们提出了一种新的多服务器PIR协议类，称之为异构PIR (HPIR)。在这种多服务器PIR协议中，PIR服务器所施加的计算和通信开销是非均匀的，即一些服务器处理的计算/通信负担比其他服务器更高。这使得异构PIR协议适用于一系列新的PIR应用。
> 
> 我们能够实现这种异构性的原因是我们利用了一种特殊的PIR定制秘密分享算法来构建我们的PIR协议。
> 
> 我们已经实现了我们的HPIR协议，并与常规的PIR协议进行了性能评估。我们的评估表明，查询客户端可以通过调整一些参数来在 (异构的) PIR服务器之间平衡计算和通信负载。例如，在一个包含两个服务器且异构度为$4/1$的场景中，从一个0.2GB的数据库中检索一个456KB的文件，资源丰富的PIR服务器将进行1.1秒的计算，而资源受限的PIR服务器将进行0.3秒的计算；而在均匀的设置中，每个服务器将进行相同的1秒计算。此外，在这个示例中，我们的HPIR协议将给富服务器带来912KB的通信带宽，而给穷服务器带来228KB的通信带宽（相比于传统均匀设计中每个服务器的456KB开销）。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/heterogeneous-private-information-retrieval/](https://www.ndss-symposium.org/ndss-paper/heterogeneous-private-information-retrieval/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24363-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24363-paper.pdf)
## Dynamic Searchable Encryption with Small Client Storage.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#dynamic-searchable-encryption-with-small-client-storage) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#dynamic-searchable-encryption-with-small-client-storage)**
### 作者
* Ioannis Demertzis, University of Maryland
* Javad Ghareh Chamani, Hong Kong University of Science and Technology & Sharif University of Technology
* Dimitrios Papadopoulos, Hong Kong University of Science and Technology
* Charalampos Papamanthou, University of Maryland
### 摘要
> 我们研究具有前向和后向隐私的动态可搜索加密（DSE）问题。最近提出了许多DSE方案，但最高效的方案有一个限制：它们需要为每个唯一关键词维护一个操作计数器，这个计数器可以存储在客户端的本地或者通过服务器以隐形方式访问（例如，使用隐形映射），在每次操作期间。我们提出了三种新方案，它们克服了上述限制，并且在理论上和实验上都比先前最先进的作品有更好的性能，同时实现了恒定的永久客户端存储。特别是，我们的前两种方案采用了“静态到动态”的转换，消除了搜索过程中的隐形访问需求。由于这个原因，它们是第一批具有最小客户端存储和非交互式搜索的实用方案。我们的第三个方案是第一个近似最优的前向和后向DSE方案，检索查询结果的对数开销较低（与之前的删除操作无关）。虽然它在搜索过程中需要一个隐形访问以保持永久客户端存储最小化，但它的实际性能比现有的最佳方案具有近乎四个数量级的优势。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/dynamic-searchable-encryption-with-small-client-storage/](https://www.ndss-symposium.org/ndss-paper/dynamic-searchable-encryption-with-small-client-storage/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24423-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24423-paper.pdf)
## Withdrawing the BGP Re-Routing Curtain: Understanding the Security Impact of BGP Poisoning through Real-World Measurements.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#withdrawing-the-bgp-re-routing-curtain-understanding-the-security-impact-of-bgp-poisoning-through-real-world-measurements) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#withdrawing-the-bgp-re-routing-curtain-understanding-the-security-impact-of-bgp-poisoning-through-real-world-measurements)**
### 作者
* Jared M. Smith, University of Tennessee
### 摘要
> 互联网路由基础架构的安全性在过去的二十年中一直是分布式系统安全研究的基础。然而，相反的情况越来越多。路由和路径决策现在对于在互联网上构建的系统的安全属性至关重要。特别是，BGP中毒利用了自治系统（AS）之间的事实上的路由协议，将上游网络的返回路径导向先前不可用的新路径。这些新路径可用于避免拥塞、审查制度、地理政治边界或在一个AS级别上可表达的拓扑的任何特征。鉴于BGP中毒作为安全系统的安全原语的使用增加，我们着手评估中毒在实践中的可行性，超越了模拟。
> 
> 为此，我们利用多国和多路由器的互联网规模测量基础设施，捕获和分析了超过1,400个BGP中毒实例，涉及数千个AS，作为操纵流量回程路径的机制。我们详细分析了路径转向的性能、可用路径的图论方面，并利用这些数据重新评估了模拟系统。我们发现，实际的证据并不完全支持文献中模拟系统的研究结果。我们还分析了不同类型AS和ISP工作组对BGP中毒的过滤状况。我们通过重现十年前的实验来探索中毒情况下的连接性问题，以揭示互联网规模扩大三倍后的当前状态。我们建立了预测模型，用于理解AS在中毒方面的脆弱性。最后，我们详细描述了互联网最大路径长度的上限的详尽测量，详细说明了最近和未来的安全研究应该如何应对AS利用长路径进行中毒的行为。总之，我们的结果和分析试图揭示BGP中毒对过去和未来安全研究的真实影响。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/withdrawing-the-bgp-re-routing-curtain-understanding-the-security-impact-of-bgp-poisoning-through-real-world-measurements/](https://www.ndss-symposium.org/ndss-paper/withdrawing-the-bgp-re-routing-curtain-understanding-the-security-impact-of-bgp-poisoning-through-real-world-measurements/)
## IMP4GT: IMPersonation Attacks in 4G NeTworks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#imp4gt-impersonation-attacks-in-4g-networks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#imp4gt-impersonation-attacks-in-4g-networks)**
### 作者
* David Rupprecht, Ruhr University Bochum
* Katharina Kohls, Ruhr University Bochum
* Thorsten Holz, Ruhr University Bochum
* Christina Poepper, NYU Abu Dhabi
### 摘要
> Long Term Evolution (LTE/4G)通过在网络栈的第三层上建立具有可证明安全的认证和密钥协议来实现互相认证。控制平面的永久完整性保护可以防止流量被篡改。然而，用户平面的完整性保护不足，仍然允许对手操纵和重定向IP数据包，正如最近所示。
> 
> 在这项工作中，我们介绍了一种新颖的跨层攻击，利用了网络栈第二层上的现有漏洞，并在第三层上扩展了攻击机制。更具体地说，我们利用操作系统的默认IP堆栈行为，使主动攻击者能够冒充一个用户与网络进行交互，反之亦然；我们将这些攻击称为IMP4GT（4G网络中的身份冒充攻击）。与先前的简单重定向攻击不同，我们的攻击极大地扩展了可能的攻击场景，从而强调了在移动通信标准中保护用户平面完整性的必要性。我们的工作结果意味着，供应商不能再依赖于互相认证来进行计费、访问控制和法律起诉。另一方面，用户会受到任何传入的IP连接的威胁，因为对手可以绕过供应商的防火墙。为了证明我们攻击的实际影响，我们在商业网络中进行了两种IMP4GT攻击的变种，这是第一次在现实世界环境中完全破坏LTE在用户平面上的互相认证目标。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/imp4gt-impersonation-attacks-in-4g-networks/](https://www.ndss-symposium.org/ndss-paper/imp4gt-impersonation-attacks-in-4g-networks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24283-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24283-paper.pdf)
## Practical Traffic Analysis Attacks on Secure Messaging Applications.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#practical-traffic-analysis-attacks-on-secure-messaging-applications) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#practical-traffic-analysis-attacks-on-secure-messaging-applications)**
### 作者
* Alireza Bahramali, University of Massachusetts Amherst
* Amir Houmansadr, University of Massachusetts Amherst
* Ramin Soltani, University of Massachusetts Amherst
* Dennis Goeckel, University of Massachusetts Amherst
* Don Towsley, University of Massachusetts Amherst
### 摘要
> 即时通讯（IM）应用程序，如Telegram、Signal和WhatsApp，在近年来变得非常流行。不幸的是，这些IM服务一直是持续政府监视和审查的目标，因为这些服务中存在着社会和政治敏感话题的公开和私人通信渠道。为了保护其客户，流行的IM服务采用了最先进的加密机制。本文中，我们表明尽管使用了先进的加密技术，流行的IM应用程序会向仅仅监视其加密IM流量的对手泄漏有关客户的敏感信息，而这些对手无需利用任何IM应用程序的软件漏洞。具体而言，我们设计了流量分析攻击，使对手能够以高准确度识别目标IM频道（例如论坛）的管理员和成员。我们认为我们的研究展示了对此类服务用户的一种重要的现实威胁，鉴于压制型政府对有争议的IM频道的打击越来越多。
> 
> 我们通过对实际IM通信进行广泛实验，展示了我们的流量分析攻击的实用性。我们展示了添加覆盖流量等标准对策技术能够降低我们在本文中介绍的攻击的效果。我们希望我们的研究能够促使IM供应商将有效的流量混淆对策集成到其软件中。同时，我们设计并部署了一个开源的、公开可用的对抗系统，名为IMProxy，它可以被IM客户端使用，无需任何IM供应商的支持。我们通过实验展示了IMProxy的有效性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/practical-traffic-analysis-attacks-on-secure-messaging-applications/](https://www.ndss-symposium.org/ndss-paper/practical-traffic-analysis-attacks-on-secure-messaging-applications/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24347-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24347-paper.pdf)
## CDN Judo: Breaking the CDN DoS Protection with Itself.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#cdn-judo-breaking-the-cdn-dos-protection-with-itself) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#cdn-judo-breaking-the-cdn-dos-protection-with-itself)**
### 作者
* Run Guo, Tsinghua University
* Weizhong Li, Tsinghua University
* Baojun Liu, Tsinghua University
* Shuang Hao, University of Texas at Dallas
* Jia Zhang, Tsinghua University
* Haixin Duan, Tsinghua University
* Kaiwen Sheng, Tsinghua University
* Jianjun Chen, ICSI
* Ying Liu, Tsinghua University
### 摘要
> 内容分发网络（CDN）通过其全球分布式网络基础设施，改善了网站的访问性能和可用性，为CDN驱动的网站在互联网上的繁荣做出了贡献。由于CDN驱动的网站通常是重要的业务或关键服务，攻击者大多对摧毁这些高价值网站感兴趣，以实现最大影响的严重破坏。由于CDN利用其大量带宽资源吸收分布式攻击流量，CDN供应商一直声称为CDN驱动的网站提供有效的DoS防护。
> 
> 然而，我们揭示了CDN的转发机制的实现或协议弱点可以被利用以突破CDN的防护。通过发送精心制作但合法的请求，攻击者可以对网站源站发起高效的DoS攻击。特别是，在这项研究中，我们提出了三个CDN威胁。通过滥用CDN的HTTP / 2请求转换行为和HTTP预POST行为，攻击者可以饱和CDN-源站的带宽并耗尽源站的连接限制。更令人关注的是，一些CDN供应商仅使用具有较低IP更换比率的少量流量转发IP与源站建立连接。这种特点为攻击者提供了一个很好的机会，只需切断特定的CDN-源站连接，就可以有效降低网站的全球可用性。
> 
> 在本研究中，我们检查了六家知名CDN供应商的请求转发行为，并进行了实际实验来评估威胁的严重性。由于这些威胁是由CDN供应商在易用性和安全性之间做出的不良权衡导致的，我们讨论了可能的缓解措施，并在向相关CDN供应商负责任地披露后获得了积极反馈。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/cdn-judo-breaking-the-cdn-dos-protection-with-itself/](https://www.ndss-symposium.org/ndss-paper/cdn-judo-breaking-the-cdn-dos-protection-with-itself/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24411-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24411-paper.pdf)
## DeepBinDiff: Learning Program-Wide Code Representations for Binary Diffing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#deepbindiff-learning-program-wide-code-representations-for-binary-diffing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#deepbindiff-learning-program-wide-code-representations-for-binary-diffing)**
### 作者
* Yue Duan, Cornell University
* Xuezixiang Li, UC Riverside
* Jinghan Wang, UC Riverside
* Heng Yin, UC Riverside
### 摘要
> 二进制差分分析定量地测量两个给定二进制文件之间的差异，并生成细粒度的基本块匹配。它被广泛应用于实现各种关键安全分析。然而，所有现有的程序分析和基于机器学习的技术都存在准确率低、可扩展性差、粒度较粗或需要大量标记训练数据的问题。本文提出了一种无监督的全程序代码表示学习技术来解决这个问题。我们依靠代码的语义信息和程序的全局控制流信息来生成块嵌入。此外，我们提出了一种k-hop贪心匹配算法，利用生成的块嵌入找到最佳的差分结果。我们实现了一个名为DeepBinDiff的原型，并使用大量的二进制文件评估其有效性和效率。结果表明，我们的工具在跨版本和跨优化级别的差分方面远远优于最先进的二进制差分工具。通过对OpenSSL使用真实漏洞进行的案例研究进一步证明了我们系统的有用性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/deepbindiff-learning-program-wide-code-representations-for-binary-diffing/](https://www.ndss-symposium.org/ndss-paper/deepbindiff-learning-program-wide-code-representations-for-binary-diffing/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24311-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24311-paper.pdf)
## Precisely Characterizing Security Impact in a Flood of Patches via Symbolic Rule Comparison.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#precisely-characterizing-security-impact-in-a-flood-of-patches-via-symbolic-rule-comparison) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#precisely-characterizing-security-impact-in-a-flood-of-patches-via-symbolic-rule-comparison)**
### 作者
* Qiushi Wu, University of Minnesota
* Yang He, University of Minnesota
* Stephen McCamant, University of Minnesota
* Kangjie Lu, University of Minnesota
### 摘要
> 如果触发后会有安全影响，则漏洞是一种脆弱性。确定漏洞的安全影响对于防御者和攻击者都很重要。大型软件系统的维护者面临着大量的漏洞报告和建议的补丁，但这些报告和补丁中往往缺少可靠信息。确定哪些漏洞是脆弱性是困难的，如果维护者认为某些漏洞没有安全影响，他们可能会将其降低优先级甚至忽略不管。另一方面，公开报告具有安全影响的漏洞是展开攻击的有力第一步。如果防御者不及时修复，对手可能会利用这些漏洞发动毁灭性的攻击。目前，维护者通常通过手动分析来评估漏洞的安全影响，但手动分析的扩展性和可靠性挑战导致了漏洞的遗漏。
> 
> 我们提出了一种自动化方法Sid来确定给定补丁的漏洞的安全影响，以便维护者可以有效地优先应用补丁到受影响的程序中。Sid的核心思想是，补丁的效果（无论是提交的还是应用的）和安全规则的违规（例如越界访问）都可以被建模为可以自动求解的约束条件。Sid结合了规则比较，使用未应用补丁的不完全约束符号执行来确定未应用补丁的安全影响。Sid还可以根据安全影响自动分类漏洞。我们已经实现了Sid，并将其应用于Linux内核的漏洞补丁和相应的CVE分配的脆弱性，以评估其精确性和召回率。我们对Sid进行了优化，以减少误报，评估结果显示，在最近的66K个提交中，Sid以97％的准确率检测到了227个安全漏洞，至少产生了243个安全影响。关键是，其中197个在之前没有报告为脆弱性，导致衍生程序的补丁推迟或被忽略。更糟糕的是，其中21个在最新的Android内核中仍未修复。一旦被利用，它们可能对Android设备造成严重的安全影响。评估结果确认了Sid的方法在自动确定大量漏洞补丁的安全影响方面是有效和准确的。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/precisely-characterizing-security-impact-in-a-flood-of-patches-via-symbolic-rule-comparison/](https://www.ndss-symposium.org/ndss-paper/precisely-characterizing-security-impact-in-a-flood-of-patches-via-symbolic-rule-comparison/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24419-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24419-paper.pdf)
## Unicorn: Runtime Provenance-Based Detector for Advanced Persistent Threats.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#unicorn-runtime-provenance-based-detector-for-advanced-persistent-threats) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#unicorn-runtime-provenance-based-detector-for-advanced-persistent-threats)**
### 作者
* Xueyuan Han, Harvard University
* Thomas Pasquier, University of Bristol
* Adam Bates, University of Illinois at Urbana-Champaign
* James Mickens, Harvard University
* Margo Seltzer, University of British Columbia
### 摘要
> 高级持续性威胁(APT)由于其“低速攻击”模式和频繁使用零日漏洞而难以检测。我们提出了UNICORN，一种基于异常的APT检测器，有效利用数据来源分析。从建模到检测，UNICORN专为APT的独特特征量身定制设计。通过广泛而高效的图分析，UNICORN探索可提供丰富背景和历史信息的来源图，以识别隐蔽的异常活动，而不需要预定义的攻击签名。利用图草图技术，UNICORN以空间效率总结长时间跨度内进行的缓慢攻击的系统执行情况。UNICORN通过一种新颖的建模方法进一步提高检测能力，以了解系统演变过程中的长期行为。我们的评估显示，UNICORN优于现有的最先进的APT检测系统，并能高准确率地检测现实生活中的APT场景。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/unicorn-runtime-provenance-based-detector-for-advanced-persistent-threats/](https://www.ndss-symposium.org/ndss-paper/unicorn-runtime-provenance-based-detector-for-advanced-persistent-threats/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24046-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24046-paper.pdf)
## Custos: Practical Tamper-Evident Auditing of Operating Systems Using Trusted Execution.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#custos-practical-tamper-evident-auditing-of-operating-systems-using-trusted-execution) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#custos-practical-tamper-evident-auditing-of-operating-systems-using-trusted-execution)**
### 作者
* Riccardo Paccagnella, University of Illinois at Urbana–Champaign
* Pubali Datta, University of Illinois at Urbana–Champaign
* Wajih Ul Hassan, University of Illinois at Urbana–Champaign
* Adam Bates, University of Illinois at Urbana–Champaign
* Christopher W. Fletcher, University of Illinois at Urbana–Champaign
* Andrew Miller, University of Illinois at Urbana–Champaign
* Dave Tian, Purdue University
### 摘要
> 系统审计是调查和应对安全事件时的核心关注点。不幸的是，攻击者在入侵后经常进行反取证活动，覆盖系统日志以阻碍调查人员的努力。尽管行业和文献中出现了各种防篡改日志解决方案，但这些技术不符合系统层审计框架的操作和可扩展性要求。
> 
> 在这项工作中，我们介绍了Custos，一个用于检测系统日志篡改的实用框架。Custos包括一个防篡改的日志记录层和一个分散式审计协议。前者使得可以在最小改变基础日志记录框架的情况下验证日志的完整性，而后者使得可以在企业级网络内实时检测日志完整性违规行为。Custos的实用性在于观察到，我们可以将加密日志承诺的成本与创建和存储日志事件的行为解耦，而不会降低安全性，利用现成的可信执行环境的特性。我们展示了Custos的防篡改日志协议每秒支持超过一百万个事件，并且比之前的解决方案快了三个数量级（1000×），在密集的工作负载中只增加了2%到7%的运行时开销。此外，我们展示了Custos的审计协议可以在几乎实时的情况下检测违规行为，即使在面对强大的分布式对手和最少（3%）的网络开销的情况下。我们对一个真实的APT攻击场景进行了案例研究，证明了Custos将反取证攻击者置于“输输”境地，他们要么变得隐秘而不篡改日志（可以用于取证），要么擦除日志但会被Custos检测到。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/custos-practical-tamper-evident-auditing-of-operating-systems-using-trusted-execution/](https://www.ndss-symposium.org/ndss-paper/custos-practical-tamper-evident-auditing-of-operating-systems-using-trusted-execution/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24065-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24065-paper.pdf)
## You Are What You Do: Hunting Stealthy Malware via Data Provenance Analysis.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#you-are-what-you-do-hunting-stealthy-malware-via-data-provenance-analysis) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#you-are-what-you-do-hunting-stealthy-malware-via-data-provenance-analysis)**
### 作者
* Qi Wang, University of Illinois Urbana-Champaign
* Wajih Ul Hassan, University of Illinois Urbana-Champaign
* Ding Li, NEC Laboratories America
### 摘要
> 为了颠覆最新的周界和主机安全技术，攻击者社区已经开发并采用各种攻击向量，使恶意软件比以往更加隐蔽，以便侵入目标系统并延长其存在时间。高级恶意软件或隐蔽恶意软件伪装或滥用良性应用程序和合法系统工具，以在目标系统中最小化其痕迹。这种隐蔽恶意软件的一个例子是无文件恶意软件，它主要将其恶意逻辑驻留在可信赖进程的内存中。对于传统的检测工具，如恶意软件扫描器，很难检测到它，因为恶意软件通常不在文件中展示其恶意载荷，并将其恶意行为隐藏在进程的良性行为中。
> 
> 在本文中，我们提出了PROVDETECTOR，一种基于溯源的检测隐蔽恶意软件的方法。PROVDETECTOR的思路是，尽管隐蔽恶意软件可能冒充或滥用良性进程，但它仍然在操作系统级别的溯源中暴露其恶意行为。基于这个思路，PROVDETECTOR首先采用一种新颖的选择算法，识别出进程的操作系统级溯源数据中可能存在的恶意部分。然后，它应用神经嵌入和机器学习流程来自动检测任何与正常行为显著偏离的行为。我们在企业网络的大规模溯源数据集上评估了我们的方法，并展示了它在隐蔽恶意软件的检测性能方面达到了非常高的水平（平均F1分数为0.974）。此外，我们进行了全面的可解释性研究，以了解学习的机器学习模型内部的工作原理。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/you-are-what-you-do-hunting-stealthy-malware-via-data-provenance-analysis/](https://www.ndss-symposium.org/ndss-paper/you-are-what-you-do-hunting-stealthy-malware-via-data-provenance-analysis/)
## OmegaLog: High-Fidelity Attack Investigation via Transparent Multi-layer Log Analysis.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#omegalog-high-fidelity-attack-investigation-via-transparent-multi-layer-log-analysis) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#omegalog-high-fidelity-attack-investigation-via-transparent-multi-layer-log-analysis)**
### 作者
* Wajih Ul Hassan, University of Illinois Urbana-Champaign
* Mohammad A. Noureddine, University of Illinois Urbana-Champaign
* Pubali Datta, University of Illinois Urbana-Champaign
* Adam Bates, University of Illinois Urbana-Champaign
### 摘要
> 最近，在因果性分析方面取得的进展使调查人员能够使用整个系统溯源图追踪多阶段攻击。基于系统层面的审计日志（例如系统调用），这些方法省略了应用上下文（例如电子邮件地址、HTTP响应代码）的重要来源，而这些上下文可以在系统的更高层找到。尽管这些信息通常对于理解攻击行为至关重要，但由于系统层之间存在的语义差距，将这些证据纳入因果性分析引擎中很困难。
> 
> 为了解决这个缺点，我们提出了普遍溯源（universal provenance）的概念，它编码了所有与法医相关的因果依赖，无论它们来自哪个层面。为了在商品系统上透明地实现这一愿景，我们提出了ωLOG（"Omega Log"），这是一种溯源跟踪机制，用于弥合系统和应用程序日志上下文之间的语义鸿沟。ωLOG分析程序二进制文件，识别和建模应用层的日志行为，使应用程序事件能够与系统层面的访问准确地对应。然后，ωLOG拦截应用程序的运行时日志活动，并将这些事件嫁接到系统层面的溯源图中，使调查人员能够更准确地推理攻击的性质。我们证明了ωLOG对现有软件项目具有广泛适用性，并且能够在没有任何培训或开发人员干预的情况下透明地促进依赖图的执行分区。在真实攻击场景的评估中，普遍溯源图与现有技术相比，具有简洁且富有语义信息，平均运行时开销为12%。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/omegalog-high-fidelity-attack-investigation-via-transparent-multi-layer-log-analysis/](https://www.ndss-symposium.org/ndss-paper/omegalog-high-fidelity-attack-investigation-via-transparent-multi-layer-log-analysis/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24270-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24270-paper.pdf)
## Trident: Efficient 4PC Framework for Privacy Preserving Machine Learning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#trident-efficient-4pc-framework-for-privacy-preserving-machine-learning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#trident-efficient-4pc-framework-for-privacy-preserving-machine-learning)**
### 作者
* Harsh Chaudhari, Indian Institute of Science
### 摘要
> 机器学习已经开始在医疗保健和金融等领域得到应用，涉及处理大量敏感数据。这推动了对保护隐私的机器学习的需求和增长。我们提出了一种高效的四方协议（4PC），它在高登等人（ASIACRYPT 2018）的最新技术之上表现出色，并展示了它在线性回归、逻辑回归和神经网络等三种最广为人知的机器学习算法上的应用。
> 
> 我们提出了一个高效的混合世界框架（Trident），在离线-在线范式中在算术、布尔和Garbled世界之间切换。我们的框架在4PC诚实多数环境中运作，并在机器学习中的服务器辅助环境中被构建，其中数据在服务器之间进行秘密共享。此外，我们提出了一些特别适用于保护隐私机器学习的转换技术。我们在轮次和通信复杂度方面胜过了当前的技术ABY3（三方），特别是我们的框架中使用了更少的昂贵电路的最小数量。这可以在我们的截断技术中看出，它不会影响乘法的在线成本，并且在离线阶段中不需要任何电路。我们的B2A转换在轮次方面提高了7倍，在通信复杂度方面提高了18倍。除此之外，我们为机器学习提出的所有特殊转换，例如安全比较，都能达到常数轮次的复杂度。这些巨大的改进主要是由于在我们的环境中有额外的第三方诚实参与者的优势。
> 
> 我们通过与ABY3进行比较，证明了我们框架的实用性。所有的协议都在64位环境中实现，包括局域网和广域网设置。考虑到局域网和广域网设置，我们的改进在训练阶段达到了187倍，在预测阶段达到了158倍。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/trident-efficient-4pc-framework-for-privacy-preserving-machine-learning/](https://www.ndss-symposium.org/ndss-paper/trident-efficient-4pc-framework-for-privacy-preserving-machine-learning/)
## Secure Sublinear Time Differentially Private Median Computation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#secure-sublinear-time-differentially-private-median-computation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#secure-sublinear-time-differentially-private-median-computation)**
### 作者
* Jonas Böhler, SAP Security Research
* Florian Kerschbaum, University of Waterloo
### 摘要
> 在分布式私有学习中（例如数据分析，机器学习和企业基准测试），两个拥有机密数据集的各方计算他们的联合数据的统计信息是很常见的。中位数是一种重要的强大统计方法，用于企业基准测试。例如，公司比较典型员工工资，保险公司使用中位数人均寿命来调整保险费率，银行比较客户的信用评分，金融监管机构基于贷款暴露估算风险。
> 
> 确切的中位数可以安全地计算，但它泄露了有关私有数据的信息。为了保护数据集，我们通过指数机制在联合数据集上安全地计算差分隐私中位数。指数机制的运行时间与数据宇宙大小成线性关系，有效地对其进行采样并非易事。本地差分隐私是指每个用户与不可信的服务器共享局部扰动数据，通常用于私有学习，但不能提供与中央模型相同的效用，其中噪声只由可信服务器应用一次。
> 
> 我们提出了在两个大型机密数据集的并集上高效安全地计算差分隐私中位数的协议。我们的协议运行时间与数据宇宙的大小成亚线性关系，并且具有与中央模型类似的效用，而无需信任第三方。我们使用动态规划和静态的、即数据无关的访问模式来实现安全计算电路的低复杂度。我们使用一组大型真实数据进行综合评估，即使在80毫秒的大网络延迟下，也能在不到5秒的时间内处理数百万条记录。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/secure-sublinear-time-differentially-private-median-computation/](https://www.ndss-symposium.org/ndss-paper/secure-sublinear-time-differentially-private-median-computation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24150-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24150-paper.pdf)
## CloudLeak: Large-Scale Deep Learning Models Stealing Through Adversarial Examples.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#cloudleak-large-scale-deep-learning-models-stealing-through-adversarial-examples) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#cloudleak-large-scale-deep-learning-models-stealing-through-adversarial-examples)**
### 作者
* Honggang Yu, University of Florida
* Kaichen Yang, University of Florida
* Teng Zhang, University of Central Florida
* Yun-Yun Tsai, National Tsing Hua University
* Tsung-Yi Ho, National Tsing Hua University
* Yier Jin, University of Florida
### 摘要
> 云端机器学习作为一种可靠的解决方案，逐渐得到各种实际场景的认可。这些服务通常利用深度神经网络(DNNs)执行分类和检测任务，并通过应用程序编程接口(APIs)进行访问。不幸的是，即使在黑盒约束下，攻击者仍有可能通过反复查询公共预测API并输入恶意内容来从云端平台窃取模型。在本文中，我们介绍了一种高效有效的黑盒攻击方法，可以从云端平台提取大规模的DNN模型，并具有接近完美的性能。与现有的攻击方法相比，我们通过引入多种新算法（包括主动学习、迁移学习和对抗性攻击），显著减少了窃取目标模型所需的查询数量。在我们的实验评估中，我们验证了我们提出的模型，用于对包括两个Microsoft Custom Vision APIs(微软交通识别API和微软花卉识别API)、Face++情绪识别API、IBM Watson视觉识别API、Google AutoML API和Clarifai安全工作(NSFW)API在内的各种商业化MLaaS平台进行窃取攻击。我们的结果表明，所提出的方法可以轻松从这些云端平台中揭示/窃取大规模的DNN模型。此外，所提出的攻击方法还可以用于准确评估基于DNN的MLaaS图像分类器对窃取攻击的鲁棒性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/cloudleak-large-scale-deep-learning-models-stealing-through-adversarial-examples/](https://www.ndss-symposium.org/ndss-paper/cloudleak-large-scale-deep-learning-models-stealing-through-adversarial-examples/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24178-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24178-paper.pdf)
## BLAZE: Blazing Fast Privacy-Preserving Machine Learning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#blaze-blazing-fast-privacy-preserving-machine-learning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#blaze-blazing-fast-privacy-preserving-machine-learning)**
### 作者
* Arpita Patra, Indian Institute of Science
### 摘要
> 机器学习工具在诸多重要领域，如医疗保健和金融，展现出其潜力，以帮助提取有用的推理结论。在这些领域中，数据的敏感性和机密性自然给数据的隐私提出了关切。这促使了隐私保护机器学习（PPML）领域的发展，该领域保证了数据的隐私性。通常情况下，机器学习技术需要大量的计算能力，这导致具备有限基础设施的客户们依赖于安全外包计算（SOC）的方法。在SOC环境中，计算被外包给一组专门的高性能云服务器，并且服务是按使用量付费的方式提供的。在本研究中，我们探讨了PPML技术在SOC环境中广泛使用的机器学习算法——线性回归、逻辑回归和神经网络。
> 
> 我们提出了BLAZE，一个在三个服务器环境中容忍一次恶意破坏的极快速的PPML框架，该框架在一个环（$Z_{2^ell}$）上保证了更强的公平性（只要恶意服务器获得相同的输出，所有诚实的服务器都会得到输出）。利用一个与输入无关的预处理阶段，BLAZE在依赖于高效PPML基元的快速输入相关的在线阶段上进行操作。这些基元包括：（i）一个点乘协议，其中在线阶段的通信与向量大小无关，这是在三个服务器环境中首次实现的；（ii）一种用于截断的方法，避免了评估Ripple Carry Adders（RCA）的昂贵电路，并实现了恒定的轮复杂度。这改进了ABY3（Mohassel等人，CCS 2018）的截断方法，后者使用RCA并且需要与RCA的深度（与底层环的大小相同）相同阶数的轮复杂度；（iii）仅需要一轮通信和$mathbf{3}$个环中的元素的安全比较协议，而不是ASTRA（Chaudhari等人，CCSW 2019）的解决方案，后者需要三轮通信和$mathbf{6}$个环中的元素。
> 
> 我们通过在64位环中进行了广泛的基准测试，评估了BLAZE在广域网和局域网设置中对上述机器学习算法的改进情况。具体而言，在广域网上，线性回归的改进幅度高达$mathbf{333倍}$，逻辑回归的改进幅度高达$mathbf{146倍}$，神经网络的改进幅度高达$mathbf{301倍}$。同样，在局域网上，线性回归的改进幅度高达$mathbf{2610倍}$，逻辑回归的改进幅度高达$mathbf{820倍}$，神经网络的改进幅度高达$mathbf{303倍}$。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/blaze-blazing-fast-privacy-preserving-machine-learning/](https://www.ndss-symposium.org/ndss-paper/blaze-blazing-fast-privacy-preserving-machine-learning/)
## Prevalence and Impact of Low-Entropy Packing Schemes in the Malware Ecosystem.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#prevalence-and-impact-of-low-entropy-packing-schemes-in-the-malware-ecosystem) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#prevalence-and-impact-of-low-entropy-packing-schemes-in-the-malware-ecosystem)**
### 作者
* Alessandro Mantovani, EURECOM
* Simone Aonzo, University of Genoa
* Xabier Ugarte-Pedrero, Cisco Systems
* Alessio Merlo, University of Genoa
* Davide Balzarotti, EURECOM
### 摘要
> 恶意软件分析中的一个开放性研究问题是如何在静态状态下区分是否为加壳或未加壳的可执行文件。这对于杀毒软件和恶意软件分析系统具有影响，它们可能需要应用不同的启发式算法或采用更昂贵的代码模拟解决方案来处理潜在的加壳例程。它还可能影响许多研究中的结果，这些研究采用专门为加壳或未加壳二进制设计的算法。
> 
> 因此，对于问题“这个可执行文件是否加壳？”的错误答案可能导致恶意软件逃避检测或被检测出来之间的差异。众所周知，加壳和熵是强相关的，往往会导致错误的假设，即低熵分数意味着可执行文件未加壳。这个规则存在例外，但一直被认为是个别案例，在任何大规模实验中影响可以忽略不计。然而，如果这种假设在过去可能是可以接受的，我们的实验表明，这种情况已经不再适用，因为越来越多的加壳恶意软件样本实施了适当的方案来保持熵值低。在本文中，我们通过分析包含50000个低熵Windows恶意软件样本的数据集，对这个问题进行了实证研究和测量。
> 
> 我们的测试结果表明，尽管所有样本都具有低熵值，但超过30%的样本采用了某种形式的运行时加壳。然后，我们在纯熵之外扩展了我们的分析，考虑了到目前为止提出的所有用于识别加壳代码的静态特征。同样，我们的测试结果表明，即使是最先进的机器学习分类器也无法仅依靠静态分析提取的特征来判断一个低熵样本是否加壳。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/prevalence-and-impact-of-low-entropy-packing-schemes-in-the-malware-ecosystem/](https://www.ndss-symposium.org/ndss-paper/prevalence-and-impact-of-low-entropy-packing-schemes-in-the-malware-ecosystem/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24297-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24297-paper.pdf)
## When Malware is Packin' Heat; Limits of Machine Learning Classifiers Based on Static Analysis Features.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#when-malware-is-packin-heat-limits-of-machine-learning-classifiers-based-on-static-analysis-features) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#when-malware-is-packin-heat-limits-of-machine-learning-classifiers-based-on-static-analysis-features)**
### 作者
* Hojjat Aghakhani, University of California
### 摘要
> 机器学习技术广泛应用于反恶意软件软件中，除了签名和启发式技术外，以提高检测率。通过自动创建检测模型，机器学习使得处理不断增多的新恶意软件样本成为可能。为了阻碍反恶意软件系统的分析并且规避检测，恶意软件使用了打包和其他形式的混淆。然而，很少有人意识到良性应用程序也使用打包和混淆来保护知识产权和防止许可滥用。
> 
> 在本论文中，我们研究了基于静态分析特征的机器学习如何操作打包样本。恶意软件研究人员经常假设打包会阻止机器学习技术构建有效的分类器。然而，工业界和学术界都已经发布了结果，显示基于机器学习的分类器可以实现良好的检测率，这导致许多专家认为分类器只是检测到样本被打包，因为恶意样本中更常见的是打包。我们展示了与常见假设不同的是，打包程序时的打包工具确实保留了一些信息，这些信息对于恶意软件分类来说是“有用”的。然而，这些信息并不一定捕捉到样本的行为。我们证明了从打包可执行文件中提取的信号对于基于机器学习的模型来说并不足够丰富，无法（1）将它们的知识推广到未见过的打包工具上，以及（2）对抗举例的鲁棒性。我们还展示了机器学习技术的天真应用会产生大量误报，这反过来可能导致过去工作中使用的基准数据标签不正确。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/when-malware-is-packin-heat-limits-of-machine-learning-classifiers-based-on-static-analysis-features/](https://www.ndss-symposium.org/ndss-paper/when-malware-is-packin-heat-limits-of-machine-learning-classifiers-based-on-static-analysis-features/)
## UIScope: Accurate, Instrumentation-free, and Visible Attack Investigation for GUI Applications.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#uiscope-accurate-instrumentation-free-and-visible-attack-investigation-for-gui-applications) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#uiscope-accurate-instrumentation-free-and-visible-attack-investigation-for-gui-applications)**
### 作者
* Runqing Yang, Zhejiang University
* Shiqing Ma, Rutgers University
* Haitao Xu, Arizona State University
* Xiangyu Zhang, Purdue University
* Yan Chen, Northwestern University
### 摘要
> 现有的GUI应用程序攻击调查解决方案存在一些限制，如不准确（由于依赖爆发问题），需要仪器化和提供非常低的可见性。这些限制阻碍了它们的广泛和实际的部署。在本文中，我们提出了UIScope，这是一个新颖的准确、无需仪器化和可见的GUI应用程序攻击调查系统。UIScope的核心思想是对代表用户观点的UI元素/事件和提供底层详细信息的系统事件进行因果分析，然后将系统事件与UI事件相关联，以提供高准确性和可见性。长时间运行的进程被划分为单独的UI转换，低级别的系统事件被归因于这些转换，从而使结果更准确。生成的图形包含（因果相关的）UI元素，用户非常熟悉，使其易于访问。我们在7台机器上部署了UIScope一周，并利用UIScope对6个真实攻击进行了调查。我们的评估显示，与现有工作相比，UIScope引入了可以忽略的开销（平均运行时间开销不到1%，每小时事件日志为3.05 MB），同时UIScope可以准确地识别攻击来源，并为用户提供对攻击上下文的全面可见性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/uiscope-accurate-instrumentation-free-and-visible-attack-investigation-for-gui-applications/](https://www.ndss-symposium.org/ndss-paper/uiscope-accurate-instrumentation-free-and-visible-attack-investigation-for-gui-applications/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24329-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24329-paper.pdf)
## OcuLock: Exploring Human Visual System for Authentication in Virtual Reality Head-mounted Display.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#oculock-exploring-human-visual-system-for-authentication-in-virtual-reality-head-mounted-display) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#oculock-exploring-human-visual-system-for-authentication-in-virtual-reality-head-mounted-display)**
### 作者
* Shiqing Luo, Georgia State University
* Anh Nguyen, Georgia State University
* Chen Song, San Diego State University
* Feng Lin, Zhejiang University
* Wenyao Xu, SUNY Buffalo
* Zhisheng Yan, Georgia State University
### 摘要
> 虚拟现实（VR）在各种应用中的日益普及引发了敏感个人数据的产生，如医疗记录和信用卡信息。虽然保护这些数据免受未经授权的访问至关重要，但直接应用传统的身份验证方法（如PIN码）通过新的VR输入模式（如远程控制器和头部导航）将引发安全问题。攻击者可以有目的地观察身份验证行为以推断身份验证输入。与其他移动设备不同，VR通过全覆盖用户眼睛区域的头戴显示器（HMD）呈现沉浸式体验，避免了公开暴露。基于这一特点，我们探索了人类视觉系统（HVS）作为专为VR平台定制的一种新型生物识别方法。前期的工作在身份验证智能手机或电脑时使用了眼球运动（凝视），但由于凝视高度依赖认知状态，这些方法存在高错误率和低稳定性。本论文中，我们研究了HVS作为一个整体考虑，不仅考虑了眼球运动，还考虑了眼睑、外眼肌、细胞和周围神经。通过探索通过沉浸式VR内容触发的HVS生物结构和独特的HVS特征，可以增强身份验证的稳定性。为此，我们提出了OcuLock，一种基于HVS的可靠且不可观察的VR HMD身份验证系统。OcuLock采用基于眼电图（EOG）的HVS感应框架和基于记录比对的身份验证方案。通过70位受试者进行的实验表明，OcuLock对抗冒充攻击和统计攻击等常见攻击具有较低的等错误率，分别为3.55％和4.97％。更重要的是，OcuLock在2个月的时间内保持了稳定的性能，并且与其他潜在方法相比，用户更喜欢使用OcuLock。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/oculock-exploring-human-visual-system-for-authentication-in-virtual-reality-head-mounted-display/](https://www.ndss-symposium.org/ndss-paper/oculock-exploring-human-visual-system-for-authentication-in-virtual-reality-head-mounted-display/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24079-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24079-paper.pdf)
## On the Resilience of Biometric Authentication Systems against Random Inputs.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#on-the-resilience-of-biometric-authentication-systems-against-random-inputs) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#on-the-resilience-of-biometric-authentication-systems-against-random-inputs)**
### 作者
* Benjamin Zi Hao Zhao, University of New South Wales and Data61 CSIRO
* Hassan Jameel Asghar, Macquarie University and Data61 CSIRO
* Mohamed Ali Kaafar, Macquarie University and Data61 CSIRO
### 摘要
> 我们评估了基于机器学习的生物特征认证系统在面对提交统一随机输入（无论是特征向量还是原始输入）的攻击者时的安全性，以找到目标用户的一个“接受样本”。系统的平均误报率（FPR），即以一个冒充者被错误地接受为合法用户的比率，可被解释为此类攻击的成功概率的度量。然而，我们发现成功率通常高于FPR。尤其是，在一个重建的生物特征系统中，平均FPR为0.03时，成功率高达0.78。这对系统的安全性有影响，因为只有对特征空间长度有知识的攻击者平均只需不到2次尝试就能冒充用户。我们通过对四种不同生物特征模式和四种不同机器学习分类器的详细分析来验证了攻击的成功原因，并提出了使此类攻击无效的缓解技术，对系统的准确性几乎没有影响。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/on-the-resilience-of-biometric-authentication-systems-against-random-inputs/](https://www.ndss-symposium.org/ndss-paper/on-the-resilience-of-biometric-authentication-systems-against-random-inputs/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24210-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24210-paper.pdf)
## Strong Authentication without Temper-Resistant Hardware and Application to Federated Identities.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#strong-authentication-without-temper-resistant-hardware-and-application-to-federated-identities) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#strong-authentication-without-temper-resistant-hardware-and-application-to-federated-identities)**
### 作者
* Zhenfeng Zhang, Chinese Academy of Sciences
### 摘要
> 共享凭据是目前最常见的终端用户认证形式，因其便利性而受到了广泛应用，但也因其容易受到凭据数据库盗窃和网络钓鱼攻击而备受批评。虽然提出了几种替代机制以提供具有加密挑战-响应协议的强身份验证，但由于需要用户端的防篡改硬件模块，它们难以使用。
> 
> 在本文中，我们提出了一种在用户端不依赖防篡改硬件的强身份验证机制。用户通过生成指定可验证的身份验证令牌，使用基于密码的凭据进行身份验证。尽管攻击者可以窃取受密码保护的凭据，我们的方案仍然能够抵御离线字典攻击，因此可以用于通用设备。
> 
> 更具体地说，我们首先引入和正式化基于密码的凭据（PBC）的概念，该概念模型化了离线攻击的抵抗力和身份验证令牌的不可伪造性，即使攻击者可以查看身份验证令牌并截获诚实用户的密码包装凭据。然后，我们采用“随机化然后证明”的方法提出了一种高效的PBC构建，并证明了其安全性。该构建不涉及双线性对，可以在多个平台上使用常见的加密库来实现。我们还提出了一种将PBC方案转换为公开可验证的技术，并在联合身份系统中提出了PBC的应用，以提供持有者主键声明机制。与当前基于证书的方法相比，它更加方便和用户友好，并可与采用保护隐私措施（例如，使用Apple登录）的联合系统配合使用。
> 
> 我们还实现了PBC方案，并评估了其在不同应用程序和各种网络环境下的性能。当PBC用作终端用户的强身份验证机制时，与基于ECDSA和防篡改硬件模块的方法相比，它可以节省26%-36%的时间。至于其在联合身份中的应用，当用户证明其对依赖方的密钥拥有权时，甚至可以节省更多时间。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/strong-authentication-without-temper-resistant-hardware-and-application-to-federated-identities/](https://www.ndss-symposium.org/ndss-paper/strong-authentication-without-temper-resistant-hardware-and-application-to-federated-identities/)
## A View from the Cockpit: Exploring Pilot Reactions to Attacks on Avionic Systems.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#a-view-from-the-cockpit-exploring-pilot-reactions-to-attacks-on-avionic-systems) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#a-view-from-the-cockpit-exploring-pilot-reactions-to-attacks-on-avionic-systems)**
### 作者
* Matthew Smith, University of Oxford
* Martin Strohmeier, University of Oxford
* Jonathan Harman, Vrije Universiteit Amsterdam
* Vincent Lenders, armasuisse Science and Technology
* Ivan Martinovic, University of Oxford
### 摘要
> 许多飞机中的无线通信系统缺乏标准的安全机制，从根本上使其容易受到攻击。由于价格实惠的软件定义无线电已经问世，一种新的威胁已经出现，使得广泛的攻击者能够轻松干扰无线航空电子系统。尽管已知这些漏洞，但是利用它们的具体攻击方式仍然是新的且尚未被充分理解的。尤其是关于它们对受到攻击飞机的动力学影响及其安全性的影响。为了研究这一问题，我们邀请了30名空中客车A320型飞机认证飞行员在模拟器场景中飞行，他们将遭受到对他们航空电子系统的攻击。我们实施并分析了对三个与安全有关的系统进行的新颖无线攻击：交通冲突避免系统（TCAS），地面近距离警告系统（GPWS）和仪表着陆系统（ILS）。我们发现，所有三个分析的攻击场景都对控制产生了显著影响，并通过转弯、避让机动和改变航线导致了干扰的成本。它们还增加了负荷、对受影响系统的不信任，并且在38%的情况下导致受攻击的安全系统完全关闭。所有飞行员都认为这些场景是有用的，其中93.3%的飞行员认为无线攻击的特定模拟器培训可能非常有价值。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/a-view-from-the-cockpit-exploring-pilot-reactions-to-attacks-on-avionic-systems/](https://www.ndss-symposium.org/ndss-paper/a-view-from-the-cockpit-exploring-pilot-reactions-to-attacks-on-avionic-systems/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/23022-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/23022-paper.pdf)
## Genotype Extraction and False Relative Attacks: Security Risks to Third-Party Genetic Genealogy Services Beyond Identity Inference.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#genotype-extraction-and-false-relative-attacks-security-risks-to-third-party-genetic-genealogy-services-beyond-identity-inference) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#genotype-extraction-and-false-relative-attacks-security-risks-to-third-party-genetic-genealogy-services-beyond-identity-inference)**
### 作者
* Peter Ney, University of Washington
* Luis Ceze, University of Washington
* Tadayoshi Kohno, University of Washington
### 摘要
> 在这篇文章中，我们评估了一种面向消费者的第三方遗传分析服务——GEDmatch的安全性。GEDmatch专门从事遗传谱系学，这是一门利用遗传数据来识别亲属关系的领域。由于其规模（超过100万个遗传数据文件）以及在刑事调查中发挥的重要作用，GEDmatch是最著名的第三方遗传谱系学服务之一。在这项工作中，我们着重关注遗传谱系学中的安全风险，特别是相对配对查询（用于识别亲属关系的算法）及其结果的相对预测。我们通过实验证明，GEDmatch容易受到仅上传正常格式化遗传数据文件并运行相对配对查询的攻击者的多种攻击。通过使用少量特定设计的文件和查询，攻击者可以从其他用户中提取大部分遗传标记；92% 的标记可以以98% 的准确性提取出来，包括数百个具有医学敏感性的标记。我们还发现，攻击者可以构造出看似其他样本亲属的遗传数据文件；在某些情况下，这些虚假的亲属关系可以使遗传数据的匿名化更加困难。这些漏洞存在是因为特定的设计选择旨在改善功能。然而，我们的结果展示了安全性和遗传谱系学目标之间的冲突。我们最后讨论了这些结果对整个消费者基因检测社区的广泛影响，并为遗传谱系学服务提供了建议。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/genotype-extraction-and-false-relative-attacks-security-risks-to-third-party-genetic-genealogy-services-beyond-identity-inference/](https://www.ndss-symposium.org/ndss-paper/genotype-extraction-and-false-relative-attacks-security-risks-to-third-party-genetic-genealogy-services-beyond-identity-inference/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/23049-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/23049-paper.pdf)
## Complex Security Policy? A Longitudinal Analysis of Deployed Content Security Policies.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#complex-security-policy-a-longitudinal-analysis-of-deployed-content-security-policies) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#complex-security-policy-a-longitudinal-analysis-of-deployed-content-security-policies)**
### 作者
* Sebastian Roth, CISPA Helmholtz Center for Information Security
* Timothy Barron, Stony Brook University
* Stefano Calzavara, Università Ca' Foscari Venezia
* Nick Nikiforakis, Stony Brook University
* Ben Stock, CISPA Helmholtz Center for Information Security
### 摘要
> 内容安全策略（CSP）机制于2010年作为减轻脚本注入攻击的一种手段而开发。在本文中，我们借助互联网档案馆的独特视角对10,000个排名较高的域名的CSP部署进行了历史和纵向分析。通过这样做，我们记录了网站运营者在尝试为内容限制推出CSP时面临的长期挑战，并强调即使看似安全的白名单也可能被过期或错别字域名绕过。除了这些新的见解，我们还揭示了CSP在其他用例中的使用情况，特别是TLS强制执行和框架控制。在这方面，我们发现CSP可以轻松部署以适应这些安全场景，但两者的普及率都不高。具体来说，尽管在网络上越来越多地使用了未规定且实施不一致的X-Frame-Options头部，但CSP这种既规范又安全的替代方案却无法跟上步伐。为了了解背后的原因，我们进行了一项通知活动和随后的调查，得出结论：运营者通常经历了CSP的复杂性（并放弃了），对CSP易于部署的组件毫不知情。因此，我们发现安全但功能齐备的内容限制的复杂性给CSP带来了不良声誉，导致运营者无法充分利用其保护网站免受非原始攻击向量的潜力。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/complex-security-policy-a-longitudinal-analysis-of-deployed-content-security-policies/](https://www.ndss-symposium.org/ndss-paper/complex-security-policy-a-longitudinal-analysis-of-deployed-content-security-policies/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/23046-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/23046-paper.pdf)
## Into the Deep Web: Understanding E-commerce Fraud from Autonomous Chat with Cybercriminals.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#into-the-deep-web-understanding-e-commerce-fraud-from-autonomous-chat-with-cybercriminals) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#into-the-deep-web-understanding-e-commerce-fraud-from-autonomous-chat-with-cybercriminals)**
### 作者
* Peng Wang, Indiana University Bloomington
* Xiaojing Liao, Indiana University Bloomington
* Yue Qin, Indiana University Bloomington
* XiaoFeng Wang, Indiana University Bloomington
### 摘要
> 电子商务罪犯们在宣传其非法业务和协调操作时，非常依赖即时通讯（IM）。因此，IM通信提供的威胁情报对了解和减轻电子商务诈骗威胁至关重要。然而，这类信息很难获取，因为它通常只通过与犯罪分子的一对一对话进行共享。在本文中，我们介绍了第一个聊天机器人（称为Aubrey），通过与现实世界中的电子商务罪犯进行自主对话，积极收集这种情报。我们的方法利用了小规模工作者的问题驱动对话模式，他们寻求从电子商务诈骗者那里获得工作和/或攻击资源，将互动过程建模为有限状态机，从而实现了自主对话。Aubrey成功与470名现实世界中的电子商务罪犯进行了对话，并收集了大量与诈骗相关的物证，包括40个SIM网关、32.3万个诈骗电话号码和以前未知的攻击工具包等。此外，这些对话揭示了深网上电子商务诈骗活动的供应链以及罪犯角色之间的复杂关系（例如共谋和转售）。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/into-the-deep-web-understanding-e-commerce-fraud-from-autonomous-chat-with-cybercriminals/](https://www.ndss-symposium.org/ndss-paper/into-the-deep-web-understanding-e-commerce-fraud-from-autonomous-chat-with-cybercriminals/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/23071-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/23071-paper.pdf)
## Compliance Cautions: Investigating Security Issues Associated with U.S. Digital-Security Standards.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#compliance-cautions-investigating-security-issues-associated-with-u-s-digital-security-standards) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#compliance-cautions-investigating-security-issues-associated-with-u-s-digital-security-standards)**
### 作者
* Rock Stevens, University of Maryland
* Josiah Dykstra, Independent Security Researcher
* Wendy Knox Everette, Leviathan Security Group
* James Chapman, Independent Security Researcher
* Garrett Bladow, Dragos
* Alexander Farmer, Independent Security Researcher
* Kevin Halliday, University of Maryland
* Michelle L. Mazurek, University of Maryland
### 摘要
> 数字安全合规计划和政策是保护组织知识产权、敏感资源、客户和员工的强大工具，通过强制安全控制来实现。组织非常重视合规，并经常将高合规审计评分与强大的安全性混为一谈；然而，没有一个合规标准进行系统评估，以了解即使在完全符合合规的组织中可能存在的安全问题。在本研究中，我们描述了我们审核三个示范性合规标准的方法，这些标准几乎影响到美国每个人：联邦税务信息标准、信用卡交易标准和电力网络标准。我们与使用这些标准的组织合作，在企业环境中验证我们的发现，并提供第一手的叙述来描述影响。
> 
> 我们发现，当合规标准被逐字逐句地当作检查清单使用时（根据合规专家的确认，这是常见的情况），它们的技术控制和流程并不总是足够的。即使完全符合合规，仍可能存在安全问题。在三个标准中，我们发现了148个不同严重程度的问题；我们的专家合作伙伴评估了其中49个问题，并确认36个存在于他们自己的环境中，还有10个可能在其他地方发生。我们还发现，没有明确定义的流程来报告与合规标准相关的安全问题；我们报告了我们在负责任地披露发现并对受影响标准进行修订方面成功程度的不同水平。总体而言，我们的结果表明，审计合规标准可以为符合合规的组织的安全姿态提供有价值的好处。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/compliance-cautions-investigating-security-issues-associated-with-u-s-digital-security-standards/](https://www.ndss-symposium.org/ndss-paper/compliance-cautions-investigating-security-issues-associated-with-u-s-digital-security-standards/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24003-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24003-paper.pdf)
## Let's Revoke: Scalable Global Certificate Revocation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#lets-revoke-scalable-global-certificate-revocation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#lets-revoke-scalable-global-certificate-revocation)**
### 作者
* Trevor Smith, Brigham Young University
* Luke Dickenson, Brigham Young University
* Kent Seamons, Brigham Young University
### 摘要
> 当前的吊销策略存在许多问题，阻碍了其广泛采用和使用，包括可扩展性、隐私性和新基础设施要求。因此，往往忽视吊销，使客户容易受到中间人攻击的威胁。
> 
> 本文介绍了一种名为"Let's Revoke"的可扩展全局吊销策略，解决了当前吊销检查的相关问题。"Let's Revoke"为每个证书引入了一个新的唯一标识符，作为指向包含吊销状态信息的动态大小位向量的索引。位向量的方法能够显著提高客户端和证书颁发机构的吊销检查效率。我们将"Let's Revoke"与现有的吊销方案进行比较，并展示其所需的存储空间和网络带宽比其他系统更少，包括那些只涵盖全球证书空间的一部分的系统。通过模拟实验证明，"Let's Revoke"在面对一百亿个证书甚至大规模吊销事件时，仍能实现线性扩展。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/lets-revoke-scalable-global-certificate-revocation/](https://www.ndss-symposium.org/ndss-paper/lets-revoke-scalable-global-certificate-revocation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24084-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24084-paper.pdf)
## Post-Quantum Authentication in TLS 1.3: A Performance Study.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#post-quantum-authentication-in-tls-1-3-a-performance-study) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#post-quantum-authentication-in-tls-1-3-a-performance-study)**
### 作者
* Dimitrios Sikeridis, The University of New Mexico
* Panos Kampanakis, Cisco Systems
* Michael Devetsikiotis, The University of New Mexico
### 摘要
> 潜在的大规模量子计算机的发展引起了IT和安全研究专业人员的担忧，因为它们能够以多项式时间解决（椭圆曲线）离散对数和整数分解问题。因此，在后量子（PQ）环境中，公钥加密面临威胁，因为目前使用的所有算法都将被视为不安全。为此，国家标准与技术研究所（NIST）已启动了一个流程，以标准化抗量子密码算法，主要关注它们的安全保障。由于PQ算法与经典算法存在显著差异，对它们的整体评估不应脱离背景进行。本研究提供了NIST签名算法候选者的详细性能评估，并研究了在现实网络环境下对TLS 1.3连接建立所施加的延迟。此外，我们还调查了它们对服务器可实现的TLS会话吞吐量的影响，并分析了在空闲和负载较重的服务器上更长的PQ签名和计算重负的PQ加密操作之间的权衡。我们的结果表明，采用至少两种PQ签名算法对于对时间敏感的TLS应用确实是可行的，并且相对于当前的签名算法，附加开销很小。此外，我们认为NIST的更多PQ候选者可以有效地用于对时间不敏感的应用，并就PQ认证在加密隧道协议中的整合、相关挑战和替代方案进行了深入讨论。最后，我们提出并评估了在TLS的同一证书链上结合不同PQ签名算法的组合。结果显示，与使用单个PQ签名方案的链相比，可以减少TLS握手时间，并显著增加服务器的TLS隧道连接率。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/post-quantum-authentication-in-tls-1-3-a-performance-study/](https://www.ndss-symposium.org/ndss-paper/post-quantum-authentication-in-tls-1-3-a-performance-study/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24203-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24203-paper.pdf)
## DISCO: Sidestepping RPKI's Deployment Barriers.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#disco-sidestepping-rpkis-deployment-barriers) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#disco-sidestepping-rpkis-deployment-barriers)**
### 作者
* Tomas Hlavacek, Fraunhofer SIT
* Italo Cunha, Universidade Federal de Minas Gerais
* Yossi Gilad, Hebrew University of Jerusalem
* Amir Herzberg, University of Connecticut
* Ethan Katz-Bassett, Columbia University
* Michael Schapira, Hebrew University of Jerusalem
* Haya Shulman, Fraunhofer SIT
### 摘要
> BGP是当今互联网中存在的一个严重安全漏洞，这可以从众多的互联网中断和停电、反复发生的流量劫持和监控事件中看出。然而，尽管付出了巨大努力，用于防止前缀劫持攻击的资源公钥基础设施（RPKI）的普及部署仍然遥远，这是由于RPKI的手工且容易出错的认证过程。我们认为，在大规模部署起源身份验证的情况下，需要用实际所有权认证的目标来替代对IP地址块的合法所有权进行认证的标准要求。我们证明了将实际所有权作为解决方案足以防止危险的前缀劫持，并且可以在不需要对当今的路由基础设施进行任何更改的情况下实现。我们提出了APKI，这是一个可迅速部署的系统，可以自动认证实际所有权并在路由器上生成适当的BGP路径过滤规则。我们通过在互联网上使用APKI的原型实现进行实时实验以及通过基于实证数据的模拟进行评估APKI的安全性和可部署性。为了方便我们结果的可重现性，我们公开了我们的原型、模拟器和测量分析代码。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/disco-sidestepping-rpkis-deployment-barriers/](https://www.ndss-symposium.org/ndss-paper/disco-sidestepping-rpkis-deployment-barriers/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24355-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24355-paper.pdf)
## Proof of Storage-Time: Efficiently Checking Continuous Data Availability.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#proof-of-storage-time-efficiently-checking-continuous-data-availability) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#proof-of-storage-time-efficiently-checking-continuous-data-availability)**
### 作者
* Giuseppe Ateniese, Stevens Institute of Technology
* Long Chen, New Jersey Institute of Technology
* Mohammard Etemad, Stevens Institute of Technology
* Qiang Tang, New Jersey Institute of Technology
### 摘要
> 高质量的外包存储服务对许多现有应用程序来说至关重要。例如，医院和数据中心需要保证其系统的可用性以执行日常例行活动。这样的系统应保护用户免受停机影响，并确保数据在整个存储期间持续可用。持续数据可用性是衡量外包存储服务质量的关键属性，这意味着外包数据在整个存储期间对服务器一直可用。我们正式研究了存储时间的证明（Proof of Storage-Time，PoSt），这一概念最初在Filecoin白皮书中提出，它使验证者能够审核外包存储服务的持续数据可用性。我们提供了PoSt的正式安全模型，并提供了在我们的定义下经过验证的通用构造。此外，我们的具体实现可以产生一个具有极高效验证的PoSt协议：只需进行一次大小约为200位的哈希计算即可验证证明。这使得我们的方案即使在区块链实现的分散式存储市场中也适用。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/proof-of-storage-time-efficiently-checking-continuous-data-availability/](https://www.ndss-symposium.org/ndss-paper/proof-of-storage-time-efficiently-checking-continuous-data-availability/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24427-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24427-paper.pdf)
## SPEECHMINER: A Framework for Investigating and Measuring Speculative Execution Vulnerabilities.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#speechminer-a-framework-for-investigating-and-measuring-speculative-execution-vulnerabilities) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#speechminer-a-framework-for-investigating-and-measuring-speculative-execution-vulnerabilities)**
### 作者
* Yuan Xiao, The Ohio State University
* Yinqian Zhang, The Ohio State University
* Radu Teodorescu, The Ohio State University
### 摘要
> SPEculative Execution side Channel Hardware (SPEECH)漏洞已经导致了臭名昭著的Meltdown、Spectre和L1终端故障（L1TF）攻击。尽管许多研究已经报告了不同变体的SPEECH漏洞，但它们仍然不为人们所了解。这主要是因为缺乏有关微处理器实现细节的信息，这些细节影响着各种微体系结构事件的时序和顺序。此外，迄今为止，还没有系统的方法来定量测量商品处理器上的SPEECH漏洞。
> 
> 本文介绍了一个名为SPEECHMINER的软件框架，用于以自动化方式探索和测量SPEECH漏洞。SPEECHMINER通过实证建立了一种新颖的两阶段错误处理模型与SPEECH漏洞的可利用性和推测窗口之间的联系。它能够在相同的软件框架下测试一整套触发异常的指令，利用隐蔽通道技术和差分测试来获得对微体系结构状态变化的可见性。我们在9种不同类型的处理器上评估了SPEECHMINER，检查了21种潜在的漏洞变体，确认了各种已知的攻击，并发现了一些新的变体。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/speechminer-a-framework-for-investigating-and-measuring-speculative-execution-vulnerabilities/](https://www.ndss-symposium.org/ndss-paper/speechminer-a-framework-for-investigating-and-measuring-speculative-execution-vulnerabilities/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/23105-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/23105-paper.pdf)
## ProtectIOn: Root-of-Trust for IO in Compromised Platforms.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#protection-root-of-trust-for-io-in-compromised-platforms) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#protection-root-of-trust-for-io-in-compromised-platforms)**
### 作者
* Aritra Dhar, ETH Zurich
* Enis Ulqinaku, ETH Zurich
* Kari Kostiainen, ETH Zurich
* Srdjan Capkun, ETH Zurich
### 摘要
> 安全和安全关键的远程应用程序，例如电子投票、在线银行、工业控制系统和医疗设备依赖于用户通过网络应用程序进行的交互。在攻击者控制用户操作的计算机存在的情况下，对这些远程系统的可信路径至关重要。这样的攻击者可以观察和修改任何IO数据，而用户或服务器都无法察觉。我们调查了先前研究提议的安全性，并观察到几个缺点使它们容易受到攻击。基于这些观察，我们确定了在受到受损主机存在的情况下，安全IO操作的新要求。
> 
> 作为解决方案，我们提出了ProtectIOn，这是一个使用可信的低TCB设备来确保IO完整性的系统，该设备位于受攻击控制的主机和IO设备之间。ProtectIOn截取从键盘和鼠标接收的显示信号和用户输入，并在不可信主机生成的HDMI帧之上叠加安全UI。ProtectIOn的指导设计原则是（i）无法将用户输入和输出的完整性分开考虑，（ii）所有用户输入模式需要同时受到保护，以及（iii）完整性保护不应依赖于易出错的用户任务，如检查安全指示的存在。通过遵循这些准则，ProtectIOn实现了对IO完整性的强大保护。我们还提出了ProtectIOn的IO保密扩展，并实现了即插即用的原型，并评估了其性能。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/protection-root-of-trust-for-io-in-compromised-platforms/](https://www.ndss-symposium.org/ndss-paper/protection-root-of-trust-for-io-in-compromised-platforms/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24112-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24112-paper.pdf)
## ConTExT: A Generic Approach for Mitigating Spectre.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#context-a-generic-approach-for-mitigating-spectre) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#context-a-generic-approach-for-mitigating-spectre)**
### 作者
* Michael Schwarz, Graz University of Technology
* Moritz Lipp, Graz University of Technology
* Claudio Canella, Graz University of Technology
* Robert Schilling, Graz University of Technology and Know-Center GmbH
* Florian Kargl, Graz University of Technology
* Daniel Gruss, Graz University of Technology
### 摘要
> 乱序执行和推测执行是现代处理器性能和效率的最大贡献者之一。然而，在指令的瞬态执行过程中，它们没有考虑到数据泄露的问题。为了减轻瞬态执行攻击，有许多解决方案和硬件修复方法被提出。然而，它们要么不能完全消除泄露，要么引入了无法接受的性能损失。
> 
> 在本文中，我们提出了一种称为ConTExT的考虑性瞬态执行技术。ConTExT是一种最小化且完全向后兼容的架构变化。ConTExT的基本思想是，秘密信息可以输入寄存器，但不能瞬态地离开寄存器。ConTExT将Spectre从一个纯粹无法在软件中解决的问题，转变为一个不容易解决但可在软件中解决的问题。为此，ConTExT对应用程序、编译器、操作系统和硬件的修改要求最小。ConTExT可以完全保护内存和寄存器中的秘密信息。通过ConTExT-light，我们提出了一种针对现有商品化CPU的ConTExT软件解决方案，用于保护内存中的秘密信息。我们评估了ConTExT的安全性和性能。即使在进行过度近似的情况下，我们观察到未受保护的代码和数据没有性能损耗，并且对于安全关键应用程序而言，性能开销为71.14%，低于当前推荐的最先进缓解策略的开销。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/context-a-generic-approach-for-mitigating-spectre/](https://www.ndss-symposium.org/ndss-paper/context-a-generic-approach-for-mitigating-spectre/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24271-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24271-paper.pdf)
## Towards Plausible Graph Anonymization.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#towards-plausible-graph-anonymization) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#towards-plausible-graph-anonymization)**
### 作者
* Yang Zhang, CISPA Helmholtz Center for Information Security
* Mathias Humbert, armasuisse Science and Technology
* Bartlomiej Surma, CISPA Helmholtz Center for Information Security
* Praveen Manoharan, CISPA Helmholtz Center for Information Security
* Jilles Vreeken, CISPA Helmholtz Center for Information Security
* Michael Backes, CISPA Helmholtz Center for Information Security
### 摘要
> 从在线社交互动中得出的社交图包含了大量的信息，现在在工业和学术界广泛使用。然而，由于社交图包含敏感信息，它们需要在发布前进行适当的匿名处理。现有的大部分图匿名机制都依赖于对原始图的边集进行扰动。本文中，我们识别了这些机制的一个基本弱点：它们忽视了社交图中朋友之间的强烈结构接近性，因此为匿名化添加了不可信的假边。为了利用这个弱点，我们首先提出了一种通过图嵌入来量化边的可信性的度量标准。在三个真实社交网络数据集上的大量实验表明，我们的可信度度量标准在大多数情况下能够非常有效地区分假边和原始边，AUC值超过0.95。然后，我们依赖于高斯混合模型来自动推导边可信度阈值，以确定边是否是假的，这使我们能够在很大程度上从匿名图中恢复原始图。接下来，我们证明了我们的图恢复攻击危及所考虑的图匿名机制提供的隐私保证。为了缓解这个弱点，我们提出了一种根据图结构生成假的但可信的边的方法，并将其融入现有的匿名机制中。我们的评估表明，改进的机制降低了图恢复的几率，减少了图去匿名化的成功率（高达30%），并且比现有的匿名机制提供更好的效用。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/towards-plausible-graph-anonymization/](https://www.ndss-symposium.org/ndss-paper/towards-plausible-graph-anonymization/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/23032-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/23032-paper.pdf)
## Adversarial Classification Under Differential Privacy.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#adversarial-classification-under-differential-privacy) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#adversarial-classification-under-differential-privacy)**
### 作者
* Jairo Giraldo, University of Utah
* Alvaro Cardenas, UC Santa Cruz
* Murat Kantarcioglu, UT Dallas
* Jonathan Katz, George Mason University
### 摘要
> 差分隐私在过去的十年中已经成为保护敏感信息的强大工具。与此同时，在过去的十年中，对于对抗分类的兴趣也越来越浓厚，对抗分类是指攻击者了解分类器试图检测异常情况，而对手则试图设计出误导此分类的示例。差分隐私和对抗分类过去都被独立研究。在本文中，我们研究了一个战略性攻击者如何利用差分隐私向系统中注入虚假数据的问题，然后提出了对抗这些新攻击的对策。我们展示了我们的攻击和防御对于现实世界中的交通估计系统和智能计量系统的影响。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/adversarial-classification-under-differential-privacy/](https://www.ndss-symposium.org/ndss-paper/adversarial-classification-under-differential-privacy/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/23047-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/23047-paper.pdf)
## Locally Differentially Private Frequency Estimation with Consistency.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#locally-differentially-private-frequency-estimation-with-consistency) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#locally-differentially-private-frequency-estimation-with-consistency)**
### 作者
* Tianhao Wang, Purdue University
* Milan Lopuhaä-Zwakenberg, Eindhoven University of Technology
* Zitao Li, Purdue University
* Boris Skoric, Eindhoven University of Technology
* Ninghui Li, Purdue University
### 摘要
> 本文研究的是基于本地差分隐私（Local Differential Privacy，LDP）的数据隐私保护。LDP协议在工业界得到了越来越广泛的应用。其中一个基本组件是频率预测器（Frequency Oracle，FO）协议，用于估计数值的频率。虽然已经提出了几种FO协议，但设计目标并不完全能够优化回答多种查询任务的结果。在本文中，我们通过添加后处理步骤来改进FO协议，利用所有个体频率应该非负且总和为一的特性，可以显著提高一系列任务的准确性，包括个别值的频率、最常见值的频率以及数值子集的频率。我们考虑了10种不同的利用这一特性的方法，并建立了它们之间的理论关系，并进行了广泛的实验评估，以了解应该在不同查询任务中使用哪种方法。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/locally-differentially-private-frequency-estimation-with-consistency/](https://www.ndss-symposium.org/ndss-paper/locally-differentially-private-frequency-estimation-with-consistency/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24157-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24157-paper.pdf)
## DESENSITIZATION: Privacy-Aware and Attack-Preserving Crash Report.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#desensitization-privacy-aware-and-attack-preserving-crash-report) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2020].md#desensitization-privacy-aware-and-attack-preserving-crash-report)**
### 作者
* Ren Ding, Georgia Institute of Technology
* Hong Hu, Georgia Institute of Technology
* Wen Xu, Georgia Institute of Technology
* Taesoo Kim, Georgia Institute of Technology
### 摘要
> 软件供应商从最终用户那里收集崩溃报告以协助对其产品进行调试和测试。然而，崩溃报告可能包含用户的个人信息，如姓名和密码，使用户不愿意与开发人员分享崩溃报告。我们需要一种机制，在客户端保护用户的隐私，同时保留足够的信息以支持服务器端的调试。
> 
> 在本文中，我们提出了一种名为DESENSITIZATION的技术，它从崩溃进程中生成注重隐私且保留攻击相关信息的崩溃报告。我们的工具使用轻量级方法从内存中识别与错误和攻击相关的数据，并删除其他数据以保护用户的隐私。由于经过脱敏处理的内存包含更多的空字节，我们将崩溃报告存储在备用文件中，以节省网络带宽和服务器端存储空间。我们对DESENSITIZATION进行了原型开发，并将其应用于来自多个真实世界程序（如浏览器和JavaScript引擎）的大量崩溃情况。结果显示，我们的DESENSITIZATION技术可以消除核心转储文件中80.9%的非零字节，以及minidumps中的49.0%。经过脱敏处理的崩溃报告的大小可以比原始大小减小50.5%，这在报告提交和存储方面大大节省了资源。我们的DESENSITIZATION技术是一个一键式解决方案，用于注重隐私的崩溃报告。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/desensitization-privacy-aware-and-attack-preserving-crash-report/](https://www.ndss-symposium.org/ndss-paper/desensitization-privacy-aware-and-attack-preserving-crash-report/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2020/02/24428-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2020/02/24428-paper.pdf)
