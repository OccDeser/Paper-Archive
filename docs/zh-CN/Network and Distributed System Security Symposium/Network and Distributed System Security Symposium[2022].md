# Network and Distributed System Security Symposium[2022]
## ROV-MI: Large-Scale, Accurate and Efficient Measurement of ROV Deployment.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#rov-mi-large-scale-accurate-and-efficient-measurement-of-rov-deployment) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#rov-mi-large-scale-accurate-and-efficient-measurement-of-rov-deployment)**
### 作者
* Wenqi Chen, Tsinghua University
* Zhiliang Wang, Tsinghua University
* Dongqi Han, Tsinghua University
* Chenxin Duan, Tsinghua University
* Xia Yin, Tsinghua University
* Jiahai Yang, Tsinghua University
* Xingang Shi, Tsinghua University
### 摘要
> 网络研究人员和网络运营商一直非常关注如何保护互联网的域间路由系统免受非法前缀公告的侵害。在许多BGP（边界网关协议）安全增强机制未能实现广泛部署的情况下，RPKI（资源公钥基础设施）的部署逐渐增加是令人鼓舞的。为了更深入地了解RPKI的影响，许多研究都致力于测量RPKI的部署情况，包括ROA（路由起源授权）和ROV（路由起源验证）的部署情况。与可以直接从RPKI存储库中的数据推导出ROA部署的测量不同，ROV部署的测量需要更复杂的测量和推理技术。然而，现有的工作测量范围有限，推理方法要么不准确，要么效率低下。
> 
> 本文提出了一种新的框架ROV-MI，用于测量ROV的部署情况，其中包括一个由控制平面中的野外无效前缀驱动的大规模测量基础架构，在数据平面上通过主动探测来检测无效更新的过滤，以及一个基于贝叶斯推理技术的高效准确的推理算法。我们实现了ROV-MI用于测量实际的ROV部署，并将其与之前的工作进行比较，结果表明ROV-MI能够准确推断出比当前最先进的方法少20%的执行时间，并且涵盖了大约10倍更多的自治系统（AS）。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-183/](https://www.ndss-symposium.org/ndss-paper/auto-draft-183/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-214-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-214-paper.pdf)
## HeadStart: Efficiently Verifiable and Low-Latency Participatory Randomness Generation at Scale.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#headstart-efficiently-verifiable-and-low-latency-participatory-randomness-generation-at-scale) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#headstart-efficiently-verifiable-and-low-latency-participatory-randomness-generation-at-scale)**
### 作者
* Hsun Lee, National Taiwan University
* Yuming Hsu, National Taiwan University
* Jing-Jie Wang, National Taiwan University
* Hao Cheng Yang, National Taiwan University
* Yu-Heng Chen, National Taiwan University
* Yih-Chun Hu, University of Illinois at Urbana-Champaign
* Hsu-Chun Hsiao, National Taiwan University
### 摘要
> 通过公众参与生成随机性，允许参与者直接贡献随机性并验证结果的安全性。理想情况下，参与此类活动的难度应尽可能低，以减少作为贡献者的计算负担。然而，现有的随机性生成协议因可扩展性或可用性问题而不适合此场景。因此，在本文中我们提出了HeadStart，一种面向大规模公众参与的参与式随机性协议。HeadStart允许贡献者高效地验证结果，并提供一个参数$L$，可以使结果发布的延迟时间降低$L$倍。此外，我们提出了两种实现改进，以进一步加快验证速度并减少证明大小。HeadStart的验证复杂度仅为$O(L \times polylog(T) +log C)$，其中$T$为贡献阶段的持续时间，$C$为贡献次数。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-184/](https://www.ndss-symposium.org/ndss-paper/auto-draft-184/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-234-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-234-paper.pdf)
## PMTUD is not Panacea: Revisiting IP Fragmentation Attacks against TCP.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#pmtud-is-not-panacea-revisiting-ip-fragmentation-attacks-against-tcp) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#pmtud-is-not-panacea-revisiting-ip-fragmentation-attacks-against-tcp)**
### 作者
* Xuewei Feng, Tsinghua University
* Qi Li, Tsinghua University
* Kun Sun, George Mason University
* Ke Xu, Tsinghua University
* Baojun Liu, Tsinghua University
* Xiaofeng Zheng, Institute for Network Sciences and Cyberspace
* Tsinghua University; QiAnXin Technology Research Institute & Legendsec Information Technology, Beijing) Inc.
* Qiushi Yang, QiAnXin Technology Research Institute & Legendsec Information Technology 
* Haixin Duan, Institute for Network Science and Cyberspace
### 摘要
> 普遍认为，TCP不易受到IP分段攻击的影响，因为TCP默认执行路径最大传输单元发现（PMTUD）机制，可以通过动态匹配TCP分段的最大大小与从发起者到目标的路径的最大传输单元（MTU）来避免IP分段。然而，本文揭示了TCP实际上容易受到IP分段攻击的影响，这与一般的信念相反。
> 
> 我们对IP分段与TCP之间复杂的相互作用进行了系统研究，并发现两个关键场景，即使发起者执行PMTUD，IP分段仍然可以触发TCP分段。首先，当中间路由器的下一跳MTU小于发起者可接受的最小路径MTU时，路由器将对发起者的TCP分段进行分段。其次，当发起者在IP层与TCP层之间的路径MTU值由于恶意构造的ICMP错误信息而不同步时，发起者可能被欺骗分段TCP分段。一旦TCP分段上的IP分段被错误触发，攻击者可以在成功解决预测IPID和欺骗TCP校验和的实际问题后，向受害者连接中注入伪造的片段，从而损害目标TCP流量。我们对HTTP和BGP进行的案例研究证明了通过IP分段对TCP应用进行中毒的可行性和有效性。我们还进行了全面评估，以显示我们的攻击可以在现实世界中造成严重破坏。最后，我们提出了对抗恶意IP分段对TCP分段的防范措施，并击败了这些攻击。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-185/](https://www.ndss-symposium.org/ndss-paper/auto-draft-185/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-381-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-381-paper.pdf)
## Subverting Stateful Firewalls with Protocol States.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#subverting-stateful-firewalls-with-protocol-states) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#subverting-stateful-firewalls-with-protocol-states)**
### 作者
* Amit Klein, Bar Ilan University
### 摘要
> 我们分析了多个TCP/IP网络堆栈实现中协议头字段的生成，并发现了有关全局协议状态的新的信息泄漏方式。然后，我们通过这些协议字段远程观察和修改系统的全局状态，展示了新的隐蔽信道。与早期的研究不同，我们的研究重点放在了驻留在防火墙网络中的主机上（包括源地址验证 - SAV），这是现在非常普遍的场景。我们的攻击设计成非破坏性的 - 在信息泄漏场景中，这使得攻击更隐匿，从而延长了它们的寿命；在主机别名解析和类似技术的情况下 - 这确保了技术的合乎道德的使用。我们重点研究了ICMP，这是常见的由防火墙提供的协议，以及UDP，随着HTTP/3和QUIC的出现，UDP在互联网流量中的份额预计会更加重要，尽管我们也报告了TCP的结果。
> 
> 我们发现的信息泄漏场景可以构建实际的隐蔽信道，直接穿透防火墙，或者间接通过使用SAV的防火墙主机的防火墙网络中的主机建立通信。我们在这个背景下描述和测试了三种新的攻击：通过防火墙本身进行信息泄漏，通过DMZ主机进行信息泄漏，以及通过共存容器进行信息泄漏。这些是隐蔽信道的三个通用的、新的使用案例，可以绕过防火墙，在不允许与互联网直接通信的设备中，仍然将数据从网络中窃取出来。换句话说，我们将数据从隔离的网络窃取到互联网上。我们还解释了如何利用新的信息泄漏技术进行已知的攻击，如主机别名解析、去NAT和容器共存检测。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-186/](https://www.ndss-symposium.org/ndss-paper/auto-draft-186/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-37-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-37-paper.pdf)
## PHYjacking: Physical Input Hijacking for Zero-Permission Authorization Attacks on Android.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#phyjacking-physical-input-hijacking-for-zero-permission-authorization-attacks-on-android) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#phyjacking-physical-input-hijacking-for-zero-permission-authorization-attacks-on-android)**
### 作者
* Xianbo Wang, The Chinese University of Hong Kong
* Shangcheng Shi, The Chinese University of Hong Kong
* Yikang Chen, The Chinese University of Hong Kong
* Wing Cheong Lau, The Chinese University of Hong Kong
### 摘要
> 如今，大多数移动设备都配备了各种硬件接口，如触摸屏、指纹扫描仪、摄像头和麦克风，可以捕捉用户的输入。许多移动应用程序使用这些物理接口来接收用户输入进行认证/授权操作，包括一键登录、基于指纹的支付批准和面部/声音解锁。本文中，我们调查所谓的PHYjacking攻击，即受害者被一个零权限恶意应用误导，向移动设备上的不同硬件接口输入物理输入，从而导致意外的授权。我们分析了Android中针对不同类型物理输入接口的保护机制，并引入了绕过这些机制的新技术。具体而言，我们确定了与相关系统API的现有保护方案中的弱点，并观察到应用程序实现基于物理输入的授权时的常见陷阱。更糟糕的是，我们发现了一个在实现了应用程序缓解措施时仍然可以被利用的Android竞态条件漏洞。基于这些发现，我们引入了指纹劫持和面部劫持技术，并展示了它们对真实应用程序的影响。我们还讨论了对NFC和麦克风输入发起类似攻击的可行性，以及针对单点登录应用的有效tapjacking攻击。我们设计了一个静态分析器来检查3000多个真实世界的应用程序，并发现其中44%的应用程序存在PHYjacking相关的实现缺陷。我们通过概念证明实现展示了PHYjacking的可行性和潜在影响，该实现使得超过8亿用户的支付应用程序可以进行未经授权的资金转账，并且使得超过4亿用户的社交媒体应用程序泄露用户隐私，并升级了Android 11中的应用程序权限。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-187/](https://www.ndss-symposium.org/ndss-paper/auto-draft-187/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-97-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-97-paper.pdf)
## GhostTalk: Interactive Attack on Smartphone Voice System Through Power Line.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#ghosttalk-interactive-attack-on-smartphone-voice-system-through-power-line) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#ghosttalk-interactive-attack-on-smartphone-voice-system-through-power-line)**
### 作者
* Yuanda Wang, Michigan State University
* Hanqing Guo, Michigan State University
* Qiben Yan, Michigan State University
### 摘要
> 不可听声音指令注入是对语音助手最具威胁的攻击之一。现有的攻击旨在通过空中注入攻击信号，但它们需要获取授权用户的声音以激活语音助手。此外，在嘈杂的环境中，攻击的有效性可能大大降低。本文中，我们探索了一种新型的通道，即电力线侧信道，以进行不可听声音指令注入。通过在经过改装的充电线上注入音频信号，攻击可以更加抵抗各种环境因素和活体检测模型。同时，可以通过修改后的线缆窃听智能手机的音频输出，实现高度交互式攻击。
> 
> 为了利用电力线侧信道，我们提出了GhostTalk，一种能够同时进行注入和窃听的新型隐藏声音攻击。通过快速修改便携充电宝的电缆，攻击者可以通过远程拨打电话或从语音助手中获取私人信息来发起交互式攻击。GhostTalk通过秘密触发一个开关组件来绕过说话者验证系统的挑战，以模拟耳机上的按键。在智能手机使用未更改的标准充电线充电时，我们发现通过监测电力线上的充电电流，可以从智能手机扬声器中恢复音频信号。为了证明可行性，我们设计了GhostTalk-SC，一个针对在公共USB端口充电的智能手机的自适应窃听系统。为了正确识别音频中的私人信息，GhostTalk-SC精心提取音频谱并集成神经网络模型，以对说出的数字进行分类。
> 
> 我们对9款主流智能手机进行了GhostTalk和GhostTalk-SC攻击。实验结果证明，GhostTalk可以以100％的成功率向不同的智能手机注入未经授权的语音指令，并且注入的音频可以欺骗人的听觉和多个活体检测模型。此外，GhostTalk-SC对不同智能手机上说出的数字的识别平均准确率为92％，这使其成为一种易于部署但高效的攻击方式，可以渗透敏感信息，如密码和验证码。为了防御，我们提供了抵御这一新威胁的反制建议。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-188/](https://www.ndss-symposium.org/ndss-paper/auto-draft-188/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-254-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-254-paper.pdf)
## The Droid is in the Details: Environment-aware Evasion of Android Sandboxes.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#the-droid-is-in-the-details-environment-aware-evasion-of-android-sandboxes) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#the-droid-is-in-the-details-environment-aware-evasion-of-android-sandboxes)**
### 作者
* Brian Kondracki, Stony Brook University
* Babak Amin Azad, Stony Brook University
* Najmeh Miramirkhani, Stony Brook University
* Nick Nikiforakis, Stony Brook University
### 摘要
> 恶意软件沙箱长期以来一直是检测和分析恶意软件的重要工具。移动设备和移动应用程序的普及导致了移动设备沙箱的开发和使用激增，以确保应用市场的完整性。为了规避这些沙箱，恶意软件已经演变出能够在沙箱环境中暂停其恶意活动的能力。复杂的恶意软件沙箱试图通过修复运行时属性，以防止沙箱检测恶意软件分析系统。
> 
> 在本文中，我们提出一组新颖的移动沙箱规避技术，统称为“环境感知”沙箱检测。我们通过提取可以从现有API中获得的工件的分布，来区分真实用户设备和沙箱。为此，我们确定了可以用于提取与环境相关特征的Android API，例如用户配置的工件（例如屏幕亮度），设备上文件的数量（例如照片和歌曲的数量）以及硬件传感器（例如步数计数器的存在）。
> 
> 通过收集来自真实用户和Android沙箱的真实数据，我们展示了攻击者可以轻松构建一个分类器，能够以98.54％的准确率区分真实的Android设备和众所周知的移动沙箱。此外，为了证明在沙箱环境中逐个修补API的无效性，我们重点研究了沙箱的声称制造商（三星，LG等）与这些制造商的真实设备之间的特征不一致性。我们的发现强调了创建强大的沙箱环境的困难，无论其底层平台是模拟环境还是实际移动设备。最重要的是，我们的工作表明，现有最先进的移动沙箱缺乏对“环境感知”沙箱检测的保护，这些沙箱可以被移动恶意软件滥用以规避检测并延长其寿命。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-189/](https://www.ndss-symposium.org/ndss-paper/auto-draft-189/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-56A-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-56A-paper.pdf)
## Uncovering Cross-Context Inconsistent Access Control Enforcement in Android.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#uncovering-cross-context-inconsistent-access-control-enforcement-in-android) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#uncovering-cross-context-inconsistent-access-control-enforcement-in-android)**
### 作者
* Hao Zhou, The Hong Kong Polytechnic University
* Haoyu Wang, Beijing University of Posts and Telecommunications
* Xiapu Luo, The Hong Kong Polytechnic University
* Ting Chen, University of Electronic Science and Technology of China
* Yajin Zhou, Zhejiang University
* Ting Wang, Pennsylvania State University
### 摘要
> 由于Android的庞大代码库和多个上下文的特性导致了复杂性，Android中存在不一致的访问控制执行，这可能被恶意软件利用来绕过访问控制并执行未经授权的安全敏感操作。不幸的是，现有的研究只关注于Android的Java上下文中的不一致访问控制执行。本文中，我们首次系统地研究了Java上下文和本地上下文之间的不一致访问控制执行。具体而言，为了自动发现跨上下文的不一致性，我们设计和实现了IAceFinder，这是一个新的工具，用于提取和对比Java上下文和本地上下文中执行的访问控制。将IAceFinder应用于14个开源Android ROM，我们发现它可以有效地揭示它们之间不一致的访问控制执行。具体来说，IAceFinder发现了23个可以被攻击者利用来入侵设备和侵犯用户隐私的不一致性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-190/](https://www.ndss-symposium.org/ndss-paper/auto-draft-190/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-166-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-166-paper.pdf)
## Evaluating Susceptibility of VPN Implementations to DoS Attacks Using Adversarial Testing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#evaluating-susceptibility-of-vpn-implementations-to-dos-attacks-using-adversarial-testing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#evaluating-susceptibility-of-vpn-implementations-to-dos-attacks-using-adversarial-testing)**
### 作者
* Fabio Streun, ETH Zurich
* Joel Wanner, ETH Zurich
* Adrian Perrig, ETH Zurich
### 摘要
> 当今许多系统都严重依赖虚拟专用网络（VPN）技术来连接网络并保护互联网上的服务。尽管以前的研究比较了不同实现的性能，但它们并没有考虑对抗性环境。为了弥补这一空白，我们评估了VPN实现对基于洪泛式拒绝服务（DoS）攻击的韧性。
> 
> 我们专注于一类称为"无状态洪泛"攻击的攻击方式，这些攻击方式尤其具有威胁性，因为通过欺骗其IP地址运行的攻击者可以执行它们。我们已经实施了各种攻击来评估四种广泛使用的VPN解决方案的DoS韧性，并测量它们对具有$40,mathrm{Gb/s}$接口的高性能服务器的影响，这揭示了令人惊讶的结果：攻击流量仅为$300,mathrm{Mb/s}$，就能够阻止已建立的WireGuard连接上的数据传输。当使用strongSwan（IPsec）时，$75,mathrm{Mb/s}$的攻击流量就足以阻止连接的建立。$100,mathrm{Mb/s}$的洪水攻击会使OpenVPN不堪重负，从而阻止通过VPN连接进行数据传输和连接建立。Cisco的AnyConnect VPN解决方案甚至可以通过更少的攻击流量来压垮：当使用IPsec时，$50,mathrm{Mb/s}$的攻击流量会拒绝连接的建立。当使用SSL时，$50,mathrm{Mb/s}$的攻击流量足以阻止已建立连接上的数据传输。此外，对WireGuard的性能分析显示了与多核同步相关的显著低效性实现。我们还发现了strongSwan和OpenVPN实现中的漏洞，攻击者可以轻易利用这些漏洞进行高效的DoS攻击。这些发现表明，有必要对VPN实现进行对抗性测试，以保证其对抗DoS攻击的韧性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-191/](https://www.ndss-symposium.org/ndss-paper/auto-draft-191/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-43-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-43-paper.pdf)
## The Truth Shall Set Thee Free: Enabling Practical Forensic Capabilities in Smart Environments.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#the-truth-shall-set-thee-free-enabling-practical-forensic-capabilities-in-smart-environments) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#the-truth-shall-set-thee-free-enabling-practical-forensic-capabilities-in-smart-environments)**
### 作者
* Leonardo Babun, Florida International University
* Amit Kumar Sikder, Florida International University
* Abbas Acar, Florida International University
* Selcuk Uluagac, Florida International University
### 摘要
> 在智能环境（如智能家居和办公室）中，设备、用户和应用之间的交互会产生大量数据。这些数据包含了关于智能环境中发生的事件和活动的有价值的取证信息。然而，当前的智能平台没有提供任何数字取证能力，无法识别、追踪、存储和分析这些环境中产生的数据。为了弥补这一空白，本文介绍了VeritaS，一种新颖而实用的智能环境数字取证能力。VeritaS主要由Collector和Analyzer两个组件组成。Collector实现了从智能环境中自动收集取证相关数据的机制。然后，在进行取证调查时，Analyzer使用一阶马尔可夫链模型从收集到的数据中提取有价值且可用的取证信息。然后，VeritaS使用取证信息来推断违反环境安全策略的用户、设备和应用的活动和行为。我们在一个真实的智能办公环境中实施和测试了VeritaS，该环境拥有22个智能设备和传感器，产生了84209个具有取证价值的事件。评估结果显示，VeritaS在推断不同异常活动和取证行为方面的准确率达到了95%以上。最后，VeritaS非常轻量级，在设备上没有额外负担，并且在后端资源（即云服务器）上的开销极小。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-192/](https://www.ndss-symposium.org/ndss-paper/auto-draft-192/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-133-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-133-paper.pdf)
## LogicMEM: Automatic Profile Generation for Binary-Only Memory Forensics via Logic Inference.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#logicmem-automatic-profile-generation-for-binary-only-memory-forensics-via-logic-inference) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#logicmem-automatic-profile-generation-for-binary-only-memory-forensics-via-logic-inference)**
### 作者
* Zhenxiao Qi, UC Riverside
* Yu Qu, UC Riverside
* Heng Yin, UC Riverside
### 摘要
> 内存取证工具依赖于内核符号和内核对象布局的知识，以从内存转储中检索数字证据和工件。这种知识被称为配置文件。现有的配置文件生成解决方案要么不方便，要么不准确。本文中，我们提出了一种逻辑推理方法，用于从内存转储中直接自动生成配置文件。它利用了跨所有内核版本和配置的内核数据结构中存在的不变性，精确定位内核对象中取证所需的字段。我们已经实现了一个名为LOGICMEM的原型，并在从主流Linux发行版、具有随机配置的定制Linux内核和专为Android智能手机和嵌入式设备设计的操作系统中收集的内存转储上对其进行了评估。评估结果表明，所提出的逻辑推理方法非常适用于定位取证所需的字段，并对主流Linux发行版实现了100%的精确度和召回率，对具有随机配置的定制内核实现了100%的精确度和95%的召回率。此外，我们展示了通过改进逻辑规则可以消除错误负例。我们还证明了即使对于现有方法来说可能很难（如果不是不可能），LOGICMEM也可以生成配置文件，并支持内存取证任务，如rootkit检测。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-193/](https://www.ndss-symposium.org/ndss-paper/auto-draft-193/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-324-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-324-paper.pdf)
## Forensic Analysis of Configuration-based Attacks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#forensic-analysis-of-configuration-based-attacks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#forensic-analysis-of-configuration-based-attacks)**
### 作者
* Muhammad Adil Inam, University of Illinois at Urbana-Champaign
* Wajih Ul Hassan, University of Illinois at Urbana-Champaign
* Ali Ahad, University of Virginia
* Adam Bates, University of Illinois at Urbana-Champaign
* Rashid Tahir, University of Prince Mugrin
* Tianyin Xu, University of Illinois at Urbana-Champaign
* Fareed Zaffar, LUMS
### 摘要
> 因果分析是一种有效的技术，用于调查和检测网络攻击。然而，现有的因果分析技术主要关注操作系统层面的审计，缺乏对重要应用层语义的可见性，如控制应用运行行为的配置更改。这导致了错误的攻击归因和不完整的溯源。
> 
> 在这项工作中，我们提出了Dossier，一种专门的溯源追踪器，增强了Linux审计基础架构的可见性。通过为系统提供额外的钩子，Dossier可以生成目标应用程序事件历史和因果链的整体视图，特别是与配置更改相关的那些在现实世界中最常见的攻击向量。Dossier中的额外“视角”使法医调查员能够弥合语义差距，并正确地拼接攻击片段。Dossier利用信息流跟踪和系统调用内省的多样性，追踪所有配置更改，包括直接应用于内存中配置相关程序变量的动态修改，以及对磁盘上配置文件的修改，运行时开销可以忽略不计（低于7%）。在现实负载和真实攻击场景上的评估显示，Dossier可以有效地推理基于配置的攻击，并准确地重构整个攻击故事。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-194/](https://www.ndss-symposium.org/ndss-paper/auto-draft-194/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-57-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-57-paper.pdf)
## ditto: WAN Traffic Obfuscation at Line Rate.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#ditto-wan-traffic-obfuscation-at-line-rate) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#ditto-wan-traffic-obfuscation-at-line-rate)**
### 作者
* Roland Meier, ETH Zürich
* Vincent Lenders, armasuisse
* Laurent Vanbever, ETH Zürich
### 摘要
> 许多大型组织通过高吞吐量链路，将其数据中心和远程站点连接到专用广域网（WAN），与互联网区分开来。虽然加密通常可以很好地保护这些WAN免受内容窃听，但它们仍然容易受到流量分析攻击的影响，这些攻击可以从流量量、数据包大小或时间信息的分析中推断出访问的网站、观看的视频或VoIP通话的内容。现有的混淆互联网流量的技术不适用于WAN，因为它们要么效率很低，要么需要修改终端主机使用的通信协议。
> 
> 本文介绍了一种名为"ditto"的流量混淆系统，该系统适应了WAN的需求：在不修改终端主机的情况下，实现以行速进行高吞吐量的流量混淆。"ditto"对数据包添加填充，并引入虚假数据包，使得生成的混淆流量与实际流量在数据包大小、时间和流量量方面相互独立。
> 
> 我们在网络数据平面的可编程交换机上进行了完整实现的"ditto"的评估。我们的结果显示，"ditto"以100 Gbps的行速运行，并在每个WAN链路的实际负载高达70 Gbps的情况下，表现出可忽略的性能开销。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-195/](https://www.ndss-symposium.org/ndss-paper/auto-draft-195/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-56B-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-56B-paper.pdf)
## A Lightweight IoT Cryptojacking Detection Mechanism in Heterogeneous Smart Home Networks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#a-lightweight-iot-cryptojacking-detection-mechanism-in-heterogeneous-smart-home-networks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#a-lightweight-iot-cryptojacking-detection-mechanism-in-heterogeneous-smart-home-networks)**
### 作者
* Ege Tekiner, Florida International University
* Abbas Acar, Florida International University
* Selcuk Uluagac, Florida International University
### 摘要
> 最近，加密货币挖矿恶意软件已成为达到和从大量受害者中获取利润的简单方式。先前的研究主要关注基于浏览器和主机的加密货币挖矿恶意软件的检测系统，但这些研究并未探讨在此情境下不同的攻击配置和网络设置。例如，一个采用激进利润策略的攻击者可能会将计算资源最大化利用以在短时间内获得更多利益，而一个隐蔽的攻击者可能希望在受害者设备上更长时间地未被发现。检测机制的准确性可能会因激进和隐蔽攻击者而有所差异。除了利润策略，加密货币挖矿恶意软件类型、受害者设备以及网络完全或部分受到攻击的各种网络设置可能在检测机制的性能评估中起关键作用。此外，具有多个物联网设备的智能家居网络很容易受到攻击者的利用，并配备了以攻击者名义进行加密货币挖矿的功能。然而，先前的研究并没有探讨加密货币挖矿恶意软件对物联网设备和遭受攻击的智能家居网络的影响。本文首先提出了一种基于网络流量特征的准确高效的物联网加密货币挖矿检测机制，可以检测浏览器和主机的加密货币挖矿恶意软件。然后，我们重点研究加密货币挖矿在新设备类别（例如物联网）上的实施问题，并设计了几个新颖的实验场景来评估我们的检测机制，以涵盖攻击者当前的攻击面。特别是，我们在不同的攻击配置和网络设置下测试了我们的机制。为此，我们使用了一个包含640万个网络数据包的数据集，并展示了我们的检测算法可以在仅一个小时的训练数据下获得高达99%的准确性。据我们所知，这项工作是第一次针对物联网加密货币挖矿的研究，并且是首次在加密货币挖矿检测领域分析各种攻击者行为和网络设置的研究。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-196/](https://www.ndss-symposium.org/ndss-paper/auto-draft-196/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-208-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-208-paper.pdf)
## FANDEMIC: Firmware Attack Construction and Deployment on Power Management Integrated Circuit and Impacts on IoT Applications.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#fandemic-firmware-attack-construction-and-deployment-on-power-management-integrated-circuit-and-impacts-on-iot-applications) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#fandemic-firmware-attack-construction-and-deployment-on-power-management-integrated-circuit-and-impacts-on-iot-applications)**
### 作者
* Ryan Tsang, University of California
### 摘要
> 供应链已成为我们经济世界的支柱，并为企业和用户带来了巨大的优势。这些网络由公司和供应商组成，旨在通过将生产过程的各个阶段转嫁给第三方铸造厂来降低成本和生产时间。尽管全球化的供应链提供了许多优势，但它们也容易受到来自管道各个环节的攻击。对于物联网设备来说，这个问题被固件漏洞所恶化，这些漏洞影响系统硬件的低级控制。此外，根据国家漏洞数据库（NVD）显示，物联网设备内的固件漏洞数量每年都在迅速增加，这使得这类固件漏洞成为一个越来越令人担忧的问题，并突显了解决新兴固件漏洞的需求。本文试图定义和扩展一类固件漏洞，其特点是恶意配置电源管理集成电路（PMIC）。我们提出了一种固件攻击构建和部署的方法（FANDEMIC），该方法涉及对裸金属物联网固件二进制进行逆向工程，并识别与其PMIC交互的功能。我们演示了直接修改二进制文件以故意错误配置PMIC的可能性，从而导致设备出现各种问题。我们提出了一种使用Ghidra和Python脚本编写的二进制逆向工程工作流，并提供了两种简单但新颖的函数匹配算法。此外，我们突显并讨论了PMIC攻击的潜在后果，特别是电池退化和故障、加速老化效应和传感器数据损坏。作为一个概念验证，我们在nRF52微控制器和MAX20303 PMIC上实施了所提出的攻击，以证明传感器数据损坏的可能性。最后，我们讨论了可能的缓解技术，包括二进制审计和安全固件更新。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/8485/](https://www.ndss-symposium.org/ndss-paper/8485/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-349-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-349-paper.pdf)
## EqualNet: A Secure and Practical Defense for Long-term Network Topology Obfuscation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#equalnet-a-secure-and-practical-defense-for-long-term-network-topology-obfuscation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#equalnet-a-secure-and-practical-defense-for-long-term-network-topology-obfuscation)**
### 作者
* Jinwoo Kim, KAIST
* Eduard Marin, Telefonica Research 
* Mauro Conti, University of Padua
* Seungwon Shin, KAIST
### 摘要
> 路径跟踪工具（如traceroute）是网络运营商检测和修复网络故障的简单但基础的网络调试工具。然而，攻击者也可以利用这些工具检索之前未知的网络拓扑信息，这对实现诸如链路洪水攻击（Link Flooding Attacks，LFAs）等复杂的拒绝服务攻击非常关键。在过去几年里，已提出了几种网络混淆防御方案，通过展示虚拟（伪造的）拓扑，以掩盖位于关键网络链路上的潜在瓶颈，以主动减轻LFAs的影响。然而，目前尚无关于它们虚拟拓扑提供的安全性和实用性的全面系统分析。因此，关键分析是更好地了解其局限性并构建更强大和更实用的防御措施以应对LFAs的必要步骤。
> 
> 在本文中，我们首先对三种最先进的网络混淆防御方案进行安全性分析。我们的分析揭示了四个重要的共同局限，这些局限可以显著降低虚拟拓扑的安全性和实用性。基于我们的发现，我们提出了EqualNet，这是一个安全且实用的长期网络拓扑混淆的主动防御方案，可以减轻网络域内的LFAs。EqualNet旨在通过平衡节点和链路上的跟踪流量分布，使攻击者无法区分哪些是最重要的节点和链路，从而显著提高执行LFAs的成本。同时，EqualNet还保留子网信息，帮助使用路径跟踪工具调试网络的网络运营商。为了证明其可行性，我们使用软件定义网络（Software-Defined Networking，SDN）实现了完整的原型，并进行了软件和硬件方面的广泛评估。我们的结果表明，即使只有网络中的一小部分路由器支持SDN，在小型、中型和大型网络中，EqualNet都能有效地平衡跟踪流量分布。最后，我们对EqualNet的安全性进行了广泛攻击的分析。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-197/](https://www.ndss-symposium.org/ndss-paper/auto-draft-197/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-154-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-154-paper.pdf)
## Context-Sensitive and Directional Concurrency Fuzzing for Data-Race Detection.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#context-sensitive-and-directional-concurrency-fuzzing-for-data-race-detection) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#context-sensitive-and-directional-concurrency-fuzzing-for-data-race-detection)**
### 作者
* Zu-Ming Jiang, Tsinghua University
* Jia-Ju Bai, Tsinghua University
* Kangjie Lu, University of Minnesota
* Shi-Min Hu, Tsinghua University
### 摘要
> 模糊测试（Fuzzing）在当今流行用于漏洞检测和漏洞发现。为了将模糊测试应用于并发问题（如数据竞争），最近的几种并发模糊测试方法考虑了程序执行的并发信息，并通过在运行时影响线程调度来探索线程交错。然而，这些方法在数据竞争检测方面仍存在局限性。一方面，它们没有考虑线程交错的执行上下文，这可能会错过特定运行时环境中的真实数据竞争。另一方面，它们执行随机的线程交错探索，经常重复已经覆盖的线程交错，并错过许多不常见的线程交错。
> 
> 在本文中，我们开发了一种名为CONZZER的新型并发模糊测试框架，用于有效地探索线程交错并检测难以发现的数据竞争。CONZZER的核心是一种基于上下文敏感和有向并发的线程交错探索方法，结合了两种新技术。首先，为了确保上下文敏感性，我们提出了一种新的并发覆盖度指标，即并发调用对（concurrent call pair），用于描述具有运行时调用上下文的线程交错。其次，为了有向地探索线程交错，我们提出了一种邻接导向的突变方法，用于生成已经覆盖的线程交错的新的可能线程交错，并使用断点控制方法来尝试在运行时实际覆盖它们。通过这两种技术，这种并发模糊测试方法可以有效覆盖带有具体上下文信息的不常见线程交错，以帮助发现难以发现的数据竞争。
> 
> 我们在8个用户级应用程序和4个内核级文件系统上评估了CONZZER，发现了95个真实数据竞争。我们确定其中75个数据竞争是有害的，并将它们发送给相关开发人员，其中44个已经得到确认。我们还将CONZZER与现有的模糊测试工具进行比较，发现CONZZER持续探索更多的线程交错，并找到这些工具所错过的许多真实数据竞争。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-198/](https://www.ndss-symposium.org/ndss-paper/auto-draft-198/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-296-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-296-paper.pdf)
## MobFuzz: Adaptive Multi-objective Optimization in Gray-box Fuzzing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#mobfuzz-adaptive-multi-objective-optimization-in-gray-box-fuzzing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#mobfuzz-adaptive-multi-objective-optimization-in-gray-box-fuzzing)**
### 作者
* Gen Zhang, National University of Defense Technology
* Pengfei Wang, National University of Defense Technology
* Tai Yue, National University of Defense Technology
* Xiangdong Kong, National University of Defense Technology
* Shan Huang, National University of Defense Technology
* Xu Zhou, National University of Defense Technology
* Kai Lu, National University of Defense Technology
### 摘要
> 覆盖引导灰盒模糊测试（CGF）是一种高效的软件测试技术。在CGF中通常有多个需要优化的目标。然而，现有的CGF方法不能同时成功地找到多个目标的最优值。本文中，我们提出了一种用于多目标优化（MOO）的灰盒模糊器MobFuzz。我们将多目标优化过程建模为一个多玩家多臂赌博机（MPMAB）。首先，它自适应地选择包含当前情况下最合适目标的目标组合。其次，我们的模型处理能量调度，自适应地将能量分配给选择的目标组合下的种子。在MobFuzz中，我们提出了一种名为NIC的进化算法，可以同时优化我们选择的目标，而不会造成额外的性能开销。为了证明MobFuzz的有效性，我们对12个真实世界的程序和MAGMA数据集进行了实验。实验结果表明，MobFuzz中的多目标优化优于基准模糊器中的单目标模糊测试。与基准模糊器相比，MobFuzz可以选择最优目标组合，并将多个目标的值增加至107％，同时能源消耗最多减少55％。此外，MobFuzz的程序覆盖率多达6％，并发现比基准模糊器多3倍的唯一漏洞。NIC算法至少有2倍的改进，性能开销约为3%。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-199/](https://www.ndss-symposium.org/ndss-paper/auto-draft-199/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-314-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-314-paper.pdf)
## FirmWire: Transparent Dynamic Analysis for Cellular Baseband Firmware.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#firmwire-transparent-dynamic-analysis-for-cellular-baseband-firmware) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#firmwire-transparent-dynamic-analysis-for-cellular-baseband-firmware)**
### 作者
* Grant Hernandez, University of Florida
* Marius Muench, Vrije Universiteit Amsterdam
* Dominik Maier, TU Berlin
* Alyssa Milburn, Vrije Universiteit Amsterdam
* Shinjo Park, TU Berlin
* Tobias Scharnowski, Ruhr-University Bochum
* Tyler Tucker, University of Florida
* Patrick Traynor, University of Florida
* Kevin Butler, University of Florida
### 摘要
> 如今的智能手机利用基带处理器来实现多种蜂窝协议。基带执行固件，负责解码三十年来的无线标准发展出的数百种消息类型。尽管在无线攻击面上很大，基带固件却几乎没有接受过安全分析。以往的研究主要只分析了一些设备型号上的少数固件图像，但往往过于依赖耗时的手动静态分析或单功能模糊测试。
> 
> 为了填补这一空白，我们提出了FirmWire，这是第一个为基带处理器提供全系统仿真平台的解决方案，可以执行未修改的基带二进制固件。FirmWire提供基带特定的API，以便轻松添加新的供应商、固件图像和安全分析。为了展示FirmWire的可扩展性，我们支持213个固件图像，涵盖了2个供应商和9个手机型号，可以执行和测试这些固件图像。利用这些固件图像，FirmWire自动发现和桥接内部基带API，便于注入协议消息。利用这些入口，我们选择了LTE和GSM协议进行模糊测试，并发现了7个可能导致远程代码执行的预身份验证内存破坏漏洞，其中4个是之前未知的。我们在真实设备上通过无线方式复现了这些崩溃，证明了FirmWire的仿真准确性。FirmWire是一个可扩展的基带安全测试平台，我们将其作为开源软件发布给社区用于未来研究。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-200/](https://www.ndss-symposium.org/ndss-paper/auto-draft-200/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-136-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-136-paper.pdf)
## EMS: History-Driven Mutation for Coverage-based Fuzzing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#ems-history-driven-mutation-for-coverage-based-fuzzing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#ems-history-driven-mutation-for-coverage-based-fuzzing)**
### 作者
* Chenyang Lyu, Zhejiang University
* Shouling Ji, Zhejiang University
* Xuhong Zhang, Zhejiang University & Zhejiang University NGICS Platform
* Hong Liang, Zhejiang University
* Binbin Zhao, Georgia Institute of Technology
* Kangjie Lu, University of Minnesota
* Raheem Beyah, Georgia Institute of Technology
### 摘要
> 突变模糊测试是发现程序漏洞的最流行方法之一。为了缓解突变模糊测试中由突变过程中高度随机性带来的低效性问题，近年来开发了多种解决方案，尤其是基于覆盖率的模糊测试。它们主要采用自适应突变策略或者整合约束求解技术，以对触发独特路径和崩溃的测试用例进行良好的探索。然而，它们缺乏对模糊测试历史进行细粒度重用来构造这些有趣的测试用例，即在不同模糊测试试验之间，它们很大程度上未能正确利用模糊测试历史。事实上，我们发现模糊测试历史中的测试用例包含了导致发现独特路径和崩溃的关键突变策略的丰富知识。具体而言，这些突变策略中隐含的部分路径约束解决方案可以被重用，以加速发现具有相似部分路径约束的新路径和崩溃。
> 
> 因此，我们首先提出了一种轻量级高效的概率字节定向模型（PBOM），以正确捕捉来自模糊测试历史的字节级突变策略，并能够有效触发独特路径和崩溃。然后，我们提出了一种名为EMS的新型基于历史驱动的突变框架，它将PBOM作为一种突变算子，根据输入字节值以概率方式提供所需的突变字节值。我们在9个真实世界程序上对EMS进行了评估，包括AFL、QSYM、MOPT、MOPT-dict、EcoFuzz和AFL++等最先进的模糊测试器。结果显示，EMS比基线模糊测试器发现的独特漏洞多出4.91倍，并且在大多数程序上比其他模糊测试器能够发现更多的代码覆盖率。我们向供应商报告了所有发现的新漏洞，并将在GitHub上开源EMS的原型。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-201/](https://www.ndss-symposium.org/ndss-paper/auto-draft-201/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-162-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-162-paper.pdf)
## Tetrad: Actively Secure 4PC for Secure Training and Inference.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#tetrad-actively-secure-4pc-for-secure-training-and-inference) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#tetrad-actively-secure-4pc-for-secure-training-and-inference)**
### 作者
* Nishat Koti, IISc Bangalore
* Arpita Patra, IISc Bangalore
* Rahul Rachuri, Aarhus University
### 摘要
> 混合算术和布尔电路以进行保护隐私的机器学习变得越来越流行。为此，我们提出了一个适用于最多有一个活动腐败的四方案例的框架，名为Tetrad。
> 
> Tetrad在环上工作，支持两个安全级别，公平性和鲁棒性。公平乘法协议成本为5个环元素，比最先进的Trident（Chaudhari等人，NDSS'20）有所改善。Tetrad的一个关键特点是，鲁棒性在公平协议上来说是免费的。两个变体的其他亮点包括（a）没有开销的概率截断，（b）多输入乘法协议，以及（c）在计算域之间切换的转换协议，以及量身定制的加密电路方法。
> 
> 对Tetrad在LeNet和VGG16等深度神经网络上进行训练和推理的基准测试已经进行。我们发现Tetrad在机器学习训练中的速度比传统方法快4倍，而在机器学习推理方面快5倍。而且Tetrad在部署成本方面非常轻量化，比Trident省去了最多6倍的成本。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-202/](https://www.ndss-symposium.org/ndss-paper/auto-draft-202/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-58-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-58-paper.pdf)
## MIRROR: Model Inversion for Deep LearningNetwork with High Fidelity.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#mirror-model-inversion-for-deep-learningnetwork-with-high-fidelity) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#mirror-model-inversion-for-deep-learningnetwork-with-high-fidelity)**
### 作者
* Shengwei An, Purdue University
* Guanhong Tao, Purdue University
* Qiuling Xu, Purdue University
* Yingqi Liu, Purdue University
* Guangyu Shen, Purdue University); Yuan Yao 
* Jingwei Xu, Nanjing University
* Xiangyu Zhang, Purdue University
### 摘要
> 模型反演是一种从给定模型中逆向生成输入样本的方法，因此对信息机密性构成严重威胁。我们提出了一种基于StyleGAN的新型反演技术，其生成器具有特殊的架构，可以将输入分解成各种粒度的样式，并使模型能够在训练过程中单独学习这些样式。在样本生成过程中，生成器将潜在值转换为控制这些样式的参数，以组合成一个样本。在我们的反演方法中，给定需要反演的目标标签（例如，一个私有面部身份识别模型），我们的技术利用在同一领域（例如，公共人脸数据集）上训练的StyleGAN，结合基于梯度下降或遗传搜索算法，以及基于分布的剪辑，来寻找适当的样式参数化，使生成的样本在目标标签（由主体模型）下得到正确分类和人类识别。结果表明，我们的反演样本具有较高的保真度，大大优于现有的先进技术。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-203/](https://www.ndss-symposium.org/ndss-paper/auto-draft-203/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-335-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-335-paper.pdf)
## Local and Central Differential Privacy for Robustness and Privacy in Federated Learning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#local-and-central-differential-privacy-for-robustness-and-privacy-in-federated-learning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#local-and-central-differential-privacy-for-robustness-and-privacy-in-federated-learning)**
### 作者
* Mohammad Naseri, University College London
* Jamie Hayes, DeepMind
* Emiliano De Cristofaro, University College London & Alan Turing Institute
### 摘要
> 联邦学习（FL）允许多个参与者通过保留本地数据集并仅交换模型更新来集体训练机器学习模型。然而，这并不一定能免于隐私和鲁棒性漏洞，例如成员、属性和后门攻击。本文研究了使用差分隐私（DP）保护FL中的隐私和鲁棒性的可能性和程度。为此，我们在FL中首次评估了本地差分隐私（LDP）和中心差分隐私（CDP）技术的可行性和有效性，提出了一种独特的评估方法。
> 
> 我们的实验结果显示，这两种DP变体确实能够有效抵御后门攻击，尽管在保护-效用平衡方面各有不同，但仍然比其他鲁棒性防御手段更有效。DP还能够减轻FL中的白盒成员推断攻击，我们的工作是首次从实证角度证明了这一点。然而，无论是LDP还是CDP，都无法防御属性推断攻击。总体而言，我们的工作提供了一种全面、可重复使用的度量方法，用于量化差分隐私FL中鲁棒性/隐私和效用之间的权衡。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-204/](https://www.ndss-symposium.org/ndss-paper/auto-draft-204/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-54-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-54-paper.pdf)
## DeepSight: Mitigating Backdoor Attacks in Federated Learning Through Deep Model Inspection.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#deepsight-mitigating-backdoor-attacks-in-federated-learning-through-deep-model-inspection) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#deepsight-mitigating-backdoor-attacks-in-federated-learning-through-deep-model-inspection)**
### 作者
* Phillip Rieger, Technical University of Darmstadt
* Thien Duc Nguyen, Technical University of Darmstadt
* Markus Miettinen, Technical University of Darmstadt
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
### 摘要
> 联邦学习（FL）允许多个客户端在不泄露数据的情况下共同训练神经网络（NN）模型。最近，针对FL的几种有针对性的毒化攻击已经出现。这些攻击在生成的模型中注入后门，使对手控制的输入被错误地分类。现有的对抗后门攻击的对策效率低下，通常仅仅是为了排除偏离的模型进行聚合。然而，这种方法也会排除具有偏离数据分布的客户端的良性模型，导致聚合模型在这些客户端上表现不佳。
> 
> 为了解决这个问题，我们提出了一种新颖的模型过滤方法，名为DeepSight，用于缓解后门攻击。它基于三种新颖技术，允许对用于训练模型更新的数据分布进行表征，并试图测量NN的内部结构和输出的细粒度差异。利用这些技术，DeepSight可以识别可疑的模型更新。我们还开发了一种能够准确聚类模型更新的方案。通过结合两个组件的结果，DeepSight能够识别和消除包含高攻击影响力的被毒化模型的模型集群。我们还展示了可能未被检测出的被毒化模型的后门贡献可以通过现有的基于权重剪裁的防御手段有效地减轻。我们评估了DeepSight的性能和有效性，并展示了它能够在对良性数据的模型性能几乎没有影响的情况下缓解最先进的后门攻击。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-205/](https://www.ndss-symposium.org/ndss-paper/auto-draft-205/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-156-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-156-paper.pdf)
## Testability Tarpits: the Impact of Code Patterns on the Security Testing of Web Applications.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#testability-tarpits-the-impact-of-code-patterns-on-the-security-testing-of-web-applications) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#testability-tarpits-the-impact-of-code-patterns-on-the-security-testing-of-web-applications)**
### 作者
* Feras Al Kassar, SAP Security Research
* Giulia Clerici, SAP Security Research
* Luca Compagna, SAP Security Research
* Davide Balzarotti, EURECOM
* Fabian Yamaguchi, ShiftLeft Inc
### 摘要
> 尽管静态应用程序安全测试工具（SAST）存在许多已知限制，但编码风格对它们发现漏洞的能力的影响仍然很少被探索。为了填补这个空白，我们在这项研究中尝试了商业化和开源安全扫描器的组合，并编制了一个包含超过270种不同代码模式的列表，这些模式在出现时会阻碍先进工具分析PHP和JavaScript代码的能力。通过在软件开发生命周期中发现这些模式的存在，我们的方法可以向开发人员提供有关其代码可测试性的重要反馈。它还可以帮助他们更好地评估代码可能仍包含漏洞的剩余风险，即使静态分析程序报告没有发现。最后，我们的方法还可以指出替换代码的替代方法，以增加其对SAST的可测试性。
> 
> 我们的实验表明，可测试性陷阱非常常见。例如，一个平均的PHP应用程序包含超过21个这样的陷阱，即使最好的先进静态分析工具也无法在遇到其中一个之前分析超过20个连续的指令。为了评估模式转换对静态分析结果的影响，我们尝试了手动和自动的代码转换，旨在用等效但更可测试的代码替换一部分模式。这些转换使现有工具能够更好地理解和分析应用程序，并导致在48个项目中检测到440个新的潜在漏洞。我们负责地公开了所有这些问题：31个项目已经回复，确认了182个漏洞。在这些已确认的问题中，由于应用代码的低可测试性而之前未知的问题有38个影响流行的Github项目（>1k星），如PHP Dzzoffice（3.3k星）、JS Docsify（19k星）和JS Apexcharts（11k星）。已发布了25个CVE，并且我们还有其他的正在进行中。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-206/](https://www.ndss-symposium.org/ndss-paper/auto-draft-206/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-150-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-150-paper.pdf)
## Probe the Proto: Measuring Client-Side Prototype Pollution Vulnerabilities of One Million Real-world Websites.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#probe-the-proto-measuring-client-side-prototype-pollution-vulnerabilities-of-one-million-real-world-websites) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#probe-the-proto-measuring-client-side-prototype-pollution-vulnerabilities-of-one-million-real-world-websites)**
### 作者
* Zifeng Kang, Johns Hopkins University
* Song Li, Johns Hopkins University
* Yinzhi Cao, Johns Hopkins University
### 摘要
> 原型污染是一种相对较新的JavaScript漏洞类型，允许对原型对象（如Object.prototype）进行属性注入。注入的属性可以在其他敏感功能（如innerHTML）中后续使用，导致跨站脚本攻击（XSS），或者在document.cookie中后续使用，导致Cookie操作。之前的研究提出了使用静态分析来检测Node.js应用程序中的原型污染的方法。然而，目前尚不清楚客户端网站中原型污染的普遍存在程度，更不用说原型污染可能引起的后果（如XSS和Cookie操作）。
> 
> 本文提出了ProbeTheProto，这是对一百万个现实世界网站的客户端原型污染的首次大规模测量研究。ProbeTheProto包括两个重要部分：动态污点分析，用于跟踪所谓的联合污点流，连接属性查找和赋值；输入/利用生成，用于将联合污点流引导到与进一步后果相关的终点。ProbeTheProto回答了一个原型对象是否可控制、是否可以操纵哪些属性以及注入的值是否导致进一步后果的问题。
> 
> 我们实现了ProbeTheProto的原型，并在一百万个网站上进行了评估。结果显示，2738个现实世界的网站（包括前1000名中的十个）存在2917个零日可利用的原型污染漏洞。我们验证了48个漏洞进一步导致XSS，736个漏洞导致Cookie操作，830个漏洞导致URL操作。我们向网站维护人员报告了所有发现情况，目前已修补了185个存在漏洞的网站。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-207/](https://www.ndss-symposium.org/ndss-paper/auto-draft-207/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-308-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-308-paper.pdf)
## ScriptChecker: To Tame Third-party Script Execution With Task Capabilities.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#scriptchecker-to-tame-third-party-script-execution-with-task-capabilities) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#scriptchecker-to-tame-third-party-script-execution-with-task-capabilities)**
### 作者
* Wu Luo, Peking University
* Xuhua Ding, Singapore Management University
* Pengfei Wu, School of Computing
### 摘要
> 我们介绍了一个新的基于浏览器的框架——ScriptChecker，用于根据主机网页的需求有效和高效地限制第三方脚本的执行。与所有现有在JavaScript层工作的方案不同，ScriptChecker全面利用上下文分离和浏览器的安全监视器，在执行不可信代码时实施按需访问控制。主机页面可以灵活地为任务分配资源访问能力。利用任务能力方法的好处，ScriptChecker在安全性、易用性和性能方面优于现有技术。我们在Chrome上实现了ScriptChecker的原型，并通过案例研究和基准测试对其安全性和性能进行了严格评估。实验结果显示，其强大的安全性和易用性是以几乎不可见的性能损失为代价的。它在中介DOM访问时产生约0.2微秒的开销，并在加载常用JS图形和实用程序库时产生5%的延迟。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-208/](https://www.ndss-symposium.org/ndss-paper/auto-draft-208/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-382-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-382-paper.pdf)
## HARPO: Learning to Subvert Online Behavioral Advertising.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#harpo-learning-to-subvert-online-behavioral-advertising) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#harpo-learning-to-subvert-online-behavioral-advertising)**
### 作者
* Jiang Zhang, University of Southern California
* Konstantinos Psounis, University of Southern California
* Muhammad Haroon, University of California
### 摘要
> 在线行为广告以及相关的跟踪装备构成了真正的隐私威胁。不幸的是，现有的增强隐私工具并不总能有效对抗在线广告和跟踪。我们提出了HARPO，这是一种基于原则的学习导向方法，通过混淆来破坏在线行为广告。HARPO使用强化学习来自适应地将真实页面访问与伪造页面交错，以扭曲跟踪器对用户浏览数据的观察。我们对HARPO进行了对比真实世界用户画像和针对在线行为广告使用的广告定位模型的评估。结果显示，HARPO通过触发超过40％的错误兴趣分段和6倍以上的出价价值来改善隐私。在相同开销下，HARPO比现有的混淆工具性能提高了多达16倍。HARPO还能更好地实现对抗性检测的隐秘性，优于现有的混淆工具。HARPO在利用混淆技术破坏在线行为广告方面有着显著的进展，从而推动了这一领域的最新发展。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-209/](https://www.ndss-symposium.org/ndss-paper/auto-draft-209/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-62-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-62-paper.pdf)
## Chosen-Instruction Attack Against Commercial Code Virtualization Obfuscators.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#chosen-instruction-attack-against-commercial-code-virtualization-obfuscators) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#chosen-instruction-attack-against-commercial-code-virtualization-obfuscators)**
### 作者
* Shijia Li, College of Computer Science
### 摘要
> 代码虚拟化是一种众所周知的复杂混淆技术，它使用自定义的虚拟机（VM）来模拟原始本机指令的语义。商业虚拟机（VM）为基础的混淆器（例如Themida和VMProtect）经常被恶意软件开发人员滥用以隐藏恶意行为。由于商业混淆器的内部机制是个黑匣子，分析人员要理解虚拟化程序的行为是一个艰巨的挑战。为了了解代码虚拟化机制并设计反混淆技术，分析人员必须对大规模高度混淆的程序进行逆向工程。这种知识学习过程具有痛苦的成本和不准确性。
> 
> 在这个项目中，我们研究了如何通过一种新颖的文本选择攻击（CIA）技术，从商业虚拟机（VM）为基础的混淆器中自动提取知识。我们的思路受到了选择明文攻击的启发，选择明文攻击是一种密码分析攻击模型，用于获取降低加密方案安全性的信息。给定一个商业虚拟机（VM）为基础的混淆器，我们精心构造输入程序，主动与混淆器交互，并从虚拟化的输出程序中提取知识。我们提出使用锚点指令和引导化简技术来有效地定位和提取输出程序中与知识相关的指令。我们的实验结果表明，现代商业虚拟机（VM）为基础的混淆器面临着CIA的威胁。我们已经发现了760个锚点指令，并从四个最广泛使用的商业混淆器中提取了1915个经过验证的指令映射规则。提取的知识使安全分析人员能够理解虚拟化恶意软件并改进反混淆技术。此外，我们还为系统评估反混淆技术贡献了第一个细粒度基准套件。评估结果显示，三种最先进的反混淆技术无法击败现代商业虚拟机（VM）为基础的混淆器，并且可以通过我们提取的知识进行改进。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-210/](https://www.ndss-symposium.org/ndss-paper/auto-draft-210/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-15-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-15-paper.pdf)
## Building Embedded Systems Like It's 1996.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#building-embedded-systems-like-its-1996) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#building-embedded-systems-like-its-1996)**
### 作者
* Ruotong Yu, Stevens Institute of Technology
### 摘要
> 嵌入式设备无处不在。然而，初步证据显示，保护我们的台式机/服务器/手机的攻击缓解措施在嵌入式设备中缺失，对嵌入式安全构成重大威胁。为此，本文对嵌入式设备上常见攻击缓解措施的采用进行了深入研究。准确地说，它测量了超过1万个基于Linux的嵌入式设备固件中针对内存破坏的标准缓解措施的存在情况。
> 
> 研究发现，嵌入式设备在用户空间和内核级别的攻击缓解上大都缺失。与台式机相比，嵌入式设备的采用率要低多倍。同样重要的观察是，情况并没有随着时间的推移而改善。如果不改变当前的做法，攻击缓解措施将持续缺失，在即将来临的物联网时代可能成为更大的威胁。
> 
> 通过后续分析，我们进一步推论出一系列可能导致攻击缓解措施缺失的因素。其中一些例子包括大规模重用非受保护的软件、延迟升级过时的内核以及自动构建工具的限制。我们预计这些将成为改善未来嵌入式设备上攻击缓解采用的见解。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-211/](https://www.ndss-symposium.org/ndss-paper/auto-draft-211/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-31-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-31-paper.pdf)
## The Taming of the Stack: Isolating Stack Data from Memory Errors.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#the-taming-of-the-stack-isolating-stack-data-from-memory-errors) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#the-taming-of-the-stack-isolating-stack-data-from-memory-errors)**
### 作者
* Kaiming Huang, Penn State University
* Yongzhe Huang, Penn State University
* Mathias Payer, EPFL
* Zhiyun Qian, UC Riverside
* Jack Sampson, Penn State University
* Gang Tan, Penn State University
* Trent Jaeger, Penn State University
### 摘要
> 尽管对保护堆栈对象免受内存错误利用的防御进行了广泛研究，但仍然有很多堆栈数据面临风险。在历史上，堆栈防御侧重于保护代码指针，如返回地址，但新兴的利用内存错误的技术促使我们需要实际解决方案来保护堆栈数据对象。然而，最近的方法未全面考虑内存错误，并且不必要地限制了可以保护的对象集。在本文中，我们提出了DataGuard系统，它可以静态地识别哪些堆栈对象免受空间、类型和时间内存错误的影响，并高效保护这些对象。DataGuard通过更全面准确的安全分析来提高安全性，证明了更多堆栈对象免受内存错误的影响，同时确保不将不安全的堆栈对象错误地分类为安全。DataGuard对服务器程序和SPEC CPU2006基准套件的分析显示，DataGuard通过以下方式提高安全性：（1）确保所有被分类为安全的堆栈对象都没有可能发生内存安全违规，删除了Safe Stack方法先前分类为安全的堆栈对象中的6.3%，并（2）阻止了CGC Binaries中的所有118个堆栈漏洞的利用。DataGuard通过将Safe Stack方法分类为不安全的70%的堆栈对象标为安全，扩展了堆栈保护的范围，从而使91.45%的所有堆栈对象只能安全引用。通过识别具有仅安全堆栈对象的更多函数，DataGuard将使用Clang的Safe Stack防御来保护SPEC CPU2006基准测试的开销从11.3%降低到4.3%。因此，DataGuard表明全面准确的分析可以增加堆栈数据保护的范围并减少开销。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-212/](https://www.ndss-symposium.org/ndss-paper/auto-draft-212/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-60-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-60-paper.pdf)
## CFInsight: A Comprehensive Metric for CFI Policies.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#cfinsight-a-comprehensive-metric-for-cfi-policies) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#cfinsight-a-comprehensive-metric-for-cfi-policies)**
### 作者
* Tommaso Frassetto, Technical University of Darmstadt
* Patrick Jauernig, Technical University of Darmstadt
* David Koisser, Technical University of Darmstadt
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
### 摘要
> 软件漏洞是对计算机安全的主要威胁之一，过去几十年已经造成了相当大的损害。因此，已经提出了许多技术来减轻易受攻击程序的风险。其中最相关的防御机制之一是控制流完整性（CFI）：已经引入并在学术界和工业界广泛讨论了多种变体。然而，由于现有指标（如AIR）未考虑到不同基本块的对攻击者的不同有用性，这限制了对这些实现安全性保证的比较。基本块是构成任何应用程序代码的基本组件。
> 
> 本文介绍了BlockInsulation和CFGInsulation这两个新的指标，旨在模拟对攻击者遍历程序的控制流图的基本块的有用性，克服了这一限制。此外，我们提出了一种新的CFI策略生成器，名为NumCFI，它与现有的策略生成器相互独立，防止攻击者从易受攻击的代码快速到达系统调用指令。我们使用BlockInsulation、CFGInsulation和现有指标评估了NumCFI以及其他几种CFI策略生成器。最后，我们描述了l+tCFI，它是我们的实现，结合了NumCFI和现有的基于标签的策略，性能开销仅为1.27%。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-213/](https://www.ndss-symposium.org/ndss-paper/auto-draft-213/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-165-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-165-paper.pdf)
## Too Afraid to Drive: Systematic Discovery of Semantic DoS Vulnerability in Autonomous Driving Planning under Physical-World Attacks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#too-afraid-to-drive-systematic-discovery-of-semantic-dos-vulnerability-in-autonomous-driving-planning-under-physical-world-attacks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#too-afraid-to-drive-systematic-discovery-of-semantic-dos-vulnerability-in-autonomous-driving-planning-under-physical-world-attacks)**
### 作者
* Ziwen Wan, University of California
### 摘要
> 在高级自动驾驶（AD）系统中，行为规划负责制定高级驾驶决策，如巡航和停车，因此具有极高的安全性要求。在本研究中，我们首次系统地研究了与过度谨慎的AD行为规划行为相关的语义安全漏洞，即可能导致任务失败或显著降低性能的漏洞，这对于robo-taxi/delivery等AD服务至关重要。我们将其称为语义拒绝服务（DoS）漏洞，我们预测它们在实际AD系统中最常见，因为为了避免安全事故，人们往往比较谨慎。为了确保高实用性和真实性，我们假设攻击者只能在驾驶环境中引入看似无害的外部物体，例如越野丢弃的纸箱。
> 
> 为了系统地发现这种漏洞，我们设计了PlanFuzz，一种新颖的动态测试方法，解决了各种特定于问题的设计挑战。具体而言，我们提出并确定了规划不变量作为新颖的测试裁判，并设计了新的输入生成方法，以系统地强制施加对攻击者引入的物体的特定约束条件。我们还设计了一种新颖的行为规划漏洞距离度量方法，以有效地指导发现过程。我们在实际开源AD系统的3种规划实现上评估了PlanFuzz，并发现它能够有效地发现9个以前未知的语义DoS漏洞，没有误报。我们发现我们所有的新设计都是必要的，因为如果没有每个设计，通常会观察到统计上显著的性能下降。我们还使用模拟和真实车辆轨迹进行了攻击案例研究，并讨论了根本原因和可能的修复方法。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-214/](https://www.ndss-symposium.org/ndss-paper/auto-draft-214/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-177-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-177-paper.pdf)
## RVPLAYER: Robotic Vehicle Forensics by Replay with What-if Reasoning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#rvplayer-robotic-vehicle-forensics-by-replay-with-what-if-reasoning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#rvplayer-robotic-vehicle-forensics-by-replay-with-what-if-reasoning)**
### 作者
* Hongjun Choi, Purdue University
* Zhiyuan Cheng, Purdue University
* Xiangyu Zhang, Purdue University
### 摘要
> 机器人车辆（RV）攻击取证致力于确定事故的根本原因。事故的再现以及对其因果关系的推理是该过程中关键的步骤。理想情况下，这种调查应通过忠实再现环境条件并改变不同因素来理解因果关系，进行真实世界的现场测试。然而，这种分析非常昂贵，并且在许多情况下由于要强制执行物理条件的困难而难以实现。现有的RV取证技术侧重于在仿真中忠实再现事故，因此缺乏对因果关系推理的支持。它们还涉及大量开销。我们提出了一种RVPLAYER系统，用于RV取证。它支持在模拟器内具有“如果”推理的重放（例如，通过更改某些控制参数、代码或车辆状态来检查是否可以避免事故）。它是昂贵的现场测试取证的低成本替代品。它具有一种高效的需求驱动自适应日志记录方法，可以捕捉到非确定性的物理条件，以及一种新颖的重放技术，支持各种重放策略，在重放期间选择性地启用/禁用信息以进行根本原因分析。我们对6辆RV（4辆真实和2辆虚拟）、5个真实世界的自动驾驶轨迹以及文献中报道的1194种不同类型的攻击实例进行了评估，结果显示它能够精确地确定这些攻击的根本原因，且没有误报。它的开销仅为简单日志设计的6.57%。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-215/](https://www.ndss-symposium.org/ndss-paper/auto-draft-215/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-244-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-244-paper.pdf)
## Hiding My Real Self! Protecting Intellectual Property in Additive Manufacturing Systems Against Optical Side-Channel Attacks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#hiding-my-real-self-protecting-intellectual-property-in-additive-manufacturing-systems-against-optical-side-channel-attacks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#hiding-my-real-self-protecting-intellectual-property-in-additive-manufacturing-systems-against-optical-side-channel-attacks)**
### 作者
* Sizhuang Liang, Georgia Institute of Technology
* Saman Zonouz, Rutgers University
* Raheem Beyah, Georgia Institute of Technology
### 摘要
> 我们提出了一种光学侧信道攻击来恢复增材制造（AM）系统中的知识产权。具体而言，我们使用一个深度神经网络通过逐帧分析打印机视频来估计打印头的坐标随时间的变化。我们发现深度神经网络可以成功恢复任意打印过程的路径。使用数据增强，神经网络可以容忍一定程度的摄像机位置、角度以及光照条件的变化。神经网络可以智能地进行插值，并准确地恢复训练数据集中未见的图像的坐标。
> 
> 为了防御光学侧信道攻击，我们提出使用光学噪声注入的方法。具体来说，我们使用光学投影仪在打印区域上人工注入精心设计的光学噪声，以试图困惑攻击者并增加恢复打印路径的难度。我们发现，现有的噪声生成算法，如重播、随机斑点、白噪声和全功率，可以轻松击败对注入噪声的存在不知情的天真攻击者。然而，一个了解注入噪声并在训练数据集中加入注入噪声图像的高级攻击者可以击败所有现有的噪声生成算法。为了防御这样的高级攻击者，我们提出了三种新颖的噪声生成算法：信道均一化、状态均一化和状态随机化。我们的实验结果表明，通过状态随机化生成的噪声可以成功抵御高级攻击者。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-216/](https://www.ndss-symposium.org/ndss-paper/auto-draft-216/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-298-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-298-paper.pdf)
## PoF: Proof-of-Following for Vehicle Platoons.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#pof-proof-of-following-for-vehicle-platoons) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#pof-proof-of-following-for-vehicle-platoons)**
### 作者
* Ziqi Xu, University of Arizona
* Jingcheng Li, University of Arizona
* Yanjun Pan, University of Arizona
* Loukas Lazos, University of Arizona
### 摘要
> 合作车辆编队显著提高公路安全性和燃油效率。在这种模型中，一组车辆以线性编队形式移动，并通过物理感知和车到车(V2V)通信协调加速、制动和转向等功能。V2V消息的真实性和完整性对公路安全至关重要。出于这个原因，最近的V2V和V2X标准支持集成公钥基础架构(PKI)。然而，PKI无法将车辆的数字身份与车辆的物理状态(位置、航向、速度等)绑定在一起。因此，具有有效加密凭据的车辆可以通过创建“幽灵”车辆和注入虚假状态信息来影响编队。
> 
> 本文旨在在验证车辆编队成员身份的上下文中提供物理世界和数字世界之间的缺失链接。我们关注车辆相互紧密协调跟随的属性。我们的目标是开发一种名为“PoF”的跟随证明(Proof-of-Following)协议，使候选车辆能够证明自己在典型编队距离内跟随验证者。所提出的“PoF”协议的主要思想是利用紧密行驶车辆所经历的共同但不断变化的环境来保证安全性。我们利用环境无线电信号的大尺度衰减效应作为一种共同的随机源来构建“PoF”原语。大尺度衰减的相关性是移动室外环境的理想候选，因为它随着距离和时间的增加而呈指数衰减。我们在自由车道、高速公路和城市驾驶条件下对我们的“PoF”协议进行评估。在这样真实的条件下，我们证明“PoF”能够以绝大概率抵御预录和跟随攻击。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-217/](https://www.ndss-symposium.org/ndss-paper/auto-draft-217/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-77-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-77-paper.pdf)
## Packet-Level Open-World App Fingerprinting on Wireless Traffic.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#packet-level-open-world-app-fingerprinting-on-wireless-traffic) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#packet-level-open-world-app-fingerprinting-on-wireless-traffic)**
### 作者
* Jianfeng Li, The Hong Kong Polytechnic University
* Shuohan Wu, The Hong Kong Polytechnic University
* Hao Zhou, The Hong Kong Polytechnic University
* Xiapu Luo, The Hong Kong Polytechnic University
* Ting Wang, Penn State
* Yangyang Liu, The Hong Kong Polytechnic University
* Xiaobo Ma, Xi'an Jiaotong University
### 摘要
> 移动应用已经在不同方面深刻改变了现代生活方式。人们对移动应用的隐私风险自然产生了一些担忧。尽管加密通信已经普遍存在，但应用指纹识别（AF）攻击仍对用户的在线隐私构成严重威胁。然而，现有的AF攻击通常受到四个具有挑战性的问题的限制，即 i)隐藏目的地, ii)看不见的边界, iii)应用复用, 和 iv)开放世界识别，当它们被应用于无线流量时。目前没有任何现有的AF攻击可以解决所有这些挑战。在本文中，我们提出了一种新颖的AF攻击，名为PACKETPRINT，通过提出两个新模型，即顺序XGBoost和分层词袋模型，从加密的无线流量中识别与感兴趣的应用相关的用户活动，并解决上述挑战。我们进行了一系列具有挑战性的实验来评估所提出的攻击，包括 i)开放世界设置, ii)丢包和网络拥塞, iii)同时使用不同应用程序, 和 iv)跨数据集识别。实验结果表明，PACKETPRINT可以准确识别与感兴趣的应用相关的用户活动。它在开放世界应用程序识别方面的平均F1分数为0.884，在应用内用户操作识别方面的平均F1分数为0.959。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-218/](https://www.ndss-symposium.org/ndss-paper/auto-draft-218/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-210-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-210-paper.pdf)
## SpiralSpy: Exploring a Stealthy and Practical Covert Channel to Attack Air-gapped Computing Devices via mmWave Sensing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#spiralspy-exploring-a-stealthy-and-practical-covert-channel-to-attack-air-gapped-computing-devices-via-mmwave-sensing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#spiralspy-exploring-a-stealthy-and-practical-covert-channel-to-attack-air-gapped-computing-devices-via-mmwave-sensing)**
### 作者
* Zhengxiong Li, University at Buffalo
### 摘要
> 隐蔽信道是一种用于从计算设备中泄露信息并违反计算机系统的安全策略的通信方法。任何共享资源都有可能被用作隐蔽信道，而传统的网络安全智慧认为，与互联网断开连接的空隔离计算设备具有很高的安全性。最近的研究表明，使用声波、热效应和电磁效应的高级隐蔽信道攻击只能在有限的近距离范围内实施（例如，在2米内）。在这项工作中，我们介绍了SpiralSpy，一种通过毫米波（mmWave）感测技术攻击空隔离计算设备的新型隐蔽信道。SpiralSpy可以隐蔽地启动，并从实际距离（最多8米）规避高度隔离的计算设备。具体而言，我们演示了如何利用原始散热风扇进行隐蔽信道攻击。空隔离计算设备内部的恶意软件可以将机密数据明显地编码到风扇控制信号中，并且风扇运动上的调制状态可以通过商用mmWave传感器远程解码。SpiralSpy可以在多风扇系统上采用，并实现多通道和高速信息传输的可扩展容量。我们评估了71个带有散热风扇的计算设备上的SpiralSpy。实验结果表明，SpiralSpy可以实现高达每秒6比特的传输速度，比现有的空隔离计算设备上的隐蔽信道快6-24倍。我们评估了SpiralSpy在不同实际场景下的易用性和鲁棒性。此外，我们对基于SpiralSpy的隐蔽信道攻击的对策进行了深入分析和讨论，以改进计算机和信息安全。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-219/](https://www.ndss-symposium.org/ndss-paper/auto-draft-219/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-23-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-23-paper.pdf)
## SemperFi: Anti-spoofing GPS Receiver for UAVs.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#semperfi-anti-spoofing-gps-receiver-for-uavs) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#semperfi-anti-spoofing-gps-receiver-for-uavs)**
### 作者
* Harshad Sathaye, Northeastern University
* Gerald LaMountain, Northeastern University
* Pau Closas, Northeastern University
* Aanjhan Ranganathan, Northeastern University
### 摘要
> 众所周知，全球定位系统(GPS)容易受到信号欺骗攻击。尽管存在几种欺骗检测技术，但它们不能有效应对隐蔽攻击者的攻击和恢复。在本研究中，我们提出了SemperFi，一种单天线GPS接收器，能够跟踪合法的GPS卫星信号并对真实位置进行估计，即使在强大的对手面前也能如此。我们的设计利用了大多数无人机内置的基于扩展卡尔曼滤波器的GPS失败安全机制，以及一款自定义的合法信号检测器模块，用于检测和自主恢复大多数的欺骗攻击。我们开发了算法来精心合成恢复信号，并扩展连续干扰消除技术，以保留合法信号的到达时间，同时消除攻击者的信号。对于能够隐蔽和无缝接管的强有力对手，SemperFi采用了短期惯性传感器稳定性的快速机动策略，以识别隐蔽欺骗攻击。我们在GNSS-SDR中实现了SemperFi，这是一个开源的软件定义GNSS接收器，并使用无人机模拟器、真实无人机、各种真实世界的GPS数据集以及各种嵌入式平台对其性能进行评估。我们的评估结果表明，在许多情况下，SemperFi可以通过执行小于100米的飞行模式来识别对手的高峰，并在0.54秒内恢复到真实位置(Jetson Xavier)。我们展示了我们的接收器对于利用惯性传感器误差并实施无缝接管攻击的幼稚和隐蔽欺骗者都是安全的。此外，我们将SemperFi设计成一个可插拔模块，能够生成免受欺骗的GPS信号，以在现有的任何商用GPS接收器上进行处理。最后，我们将我们的实现释放给社区以供使用和进一步研究。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-220/](https://www.ndss-symposium.org/ndss-paper/auto-draft-220/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-71-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-71-paper.pdf)
## V-Range: Enabling Secure Ranging in 5G Wireless Networks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#v-range-enabling-secure-ranging-in-5g-wireless-networks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#v-range-enabling-secure-ranging-in-5g-wireless-networks)**
### 作者
* Mridula Singh, CISPA - Helmholtz Center for Information Security
* Marc Roeschlin, ETH Zurich
* Aanjhan Ranganathan, Northeastern University
* Srdjan Capkun, ETH Zurich
### 摘要
> 一些安全和安全关键的应用程序，如资产追踪、智能生态系统、自动驾驶车辆和驾驶员辅助功能等，预计将从5G提供的位置信息中受益。基于支持这种广泛的位置感知服务和应用的目标，当前的5G版本致力于探索测距和定位作为5G技术的一个组成部分。近年来，对定位和测距系统的许多攻击已得到证明，因此构建抗距离和位置操纵攻击的5G系统至关重要。无论是由3GPP还是研究界，目前都没有提出关于5G中安全位置估计挑战的任何现有建议。在本文中，我们开发了V-Range，这是与5G标准完全兼容且可以直接在现有的5G-NR收发器上实施的第一个安全测距系统。我们设计了V-Range，一个能够执行抵御距离扩大和减小攻击的安全测距操作的系统。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-221/](https://www.ndss-symposium.org/ndss-paper/auto-draft-221/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-151-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-151-paper.pdf)
## Hybrid Trust Multi-party Computation with Trusted Execution Environment.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#hybrid-trust-multi-party-computation-with-trusted-execution-environment) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#hybrid-trust-multi-party-computation-with-trusted-execution-environment)**
### 作者
* Pengfei Wu, School of Computing
### 摘要
> 可信执行环境（TEE）如Intel SGX依赖于硬件保护，可以比纯软件解决方案更高效地执行安全多方计算（MPC）。然而，目前的实现中发现了多种侧信道攻击，导致不同团体之间具有不同程度的信任。例如，一方可能认为对手无法破坏TEE，而另一方可能对TEE只有部分信任，甚至完全不信任。在具有不同信任级别的多方计算场景中，可以退回到纯软件解决方案。虽然满足了所有方的安全关注，但接受TEE的人将无法享受到其带来的好处。
> 
> 在本文中，我们通过提出HybrTC来研究上述情景，这是一种能以混合信任方式对函数进行评估的通用框架。我们在通用可组合性（UC）中给出了安全形式化，并引入了一个新的TEE类硬件的加密模型，命名为多方位可信硬件$mathcal{F}_{TH}$，该模型捕捉了不同方感知到的信任级别。为了证明混合设置的相关性，我们给出了一个分布式数据库场景，其中用户在保护她的分布式查询中完全或部分信任不同TEE，而多个服务器拒绝使用TEE来保护他们的敏感数据库。我们提出了一个在多方计算环境中针对典型的选择和连接查询的恶意安全协议。实验结果表明，在具有$2^{20}$条记录的数据集中的两个服务器上，并且选择了四分之一的记录，只需165.82秒，相比于加密解决方案，实现了超过$18,752.58倍$的加速。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-222/](https://www.ndss-symposium.org/ndss-paper/auto-draft-222/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-173-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-173-paper.pdf)
## SynthCT: Towards Portable Constant-Time Code.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#synthct-towards-portable-constant-time-code) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#synthct-towards-portable-constant-time-code)**
### 作者
* Sushant Dinesh, University of Illinois at Urbana Champaign
* Grant Garrett-Grossman, University of Illinois at Urbana Champaign
* Christopher W. Fletcher, University of Illinois at Urbana Champaign
### 摘要
> 近期的攻击表明，现代微架构存在微架构侧信道问题。恒定时间（CT）编程是一种软件开发方法论，通过精心编写程序以避免这些信道。简而言之，其思想是只将秘密数据传递给安全指令，即执行这些指令不会产生与操作数无关的硬件资源使用。
> 
> 然而，当前的CT编程实践存在较大的安全和性能问题。CT代码只编写和编译一次，却可能在多个不同的微架构上执行。而安全指令和不安全指令的划分实质上是一个微架构特定的问题。新的微架构优化（或漏洞）可能会改变安全指令集，并破坏CT的保证。
> 
> 在本研究中，我们开发了SynthCT来解决上述问题。给定安全/不安全指令的规范，SynthCT自动合成ISA中所有不安全指令的转换，只使用来自安全指令集的指令。这些合成的转换可以作为后期编译器传递的一部分，为特定的微架构生成强化的二进制文件。这样可以弥补安全漏洞，因为规范和安全转换可以针对每个微架构进行定制。这还使得CT代码能够重新获得一些性能，例如，在被认为对特定微架构安全时使用更复杂/高性能的指令。
> 
> 使用我们在SynthCT中开发的技术，我们能够为大多数x86 64位ISA合成转换。具体来说，SynthCT能够使用ISA剩余的25％仅生成75％的ISA的安全转换。有趣的是，SynthCT无法为大部分无法生成转换的指令，是专家们认为在当今的x86 64位微架构上是安全的指令。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-223/](https://www.ndss-symposium.org/ndss-paper/auto-draft-223/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-215-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-215-paper.pdf)
## Binary Search in Secure Computation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#binary-search-in-secure-computation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#binary-search-in-secure-computation)**
### 作者
* Marina Blanton, University at Buffalo 
* Chen Yuan, University at Buffalo 
### 摘要
> 二分查找是计算机科学中最流行的算法之一。然而，在要求数据遗忘执行的安全多方计算环境中实现它是非常复杂的。先前的研究只利用遗忘随机存储器（ORAM）来实现安全计算，本研究则使用基于秘密分享的传统安全计算技术来研究这个问题。我们开发了一套具有不同性质和结构的协议，用于通过一个私有数字键搜索包含m个元素的私有数据集。我们的协议仅使用基于秘密分享的标准和现成的操作，通信复杂度为O(m)和O(sqrt{m})。我们进一步扩展了我们的协议以支持写操作，即，实现能够在遗忘状态下更新所选元素的二分查找，包括更新非键字段和更新键字段两种变体。我们的实现结果表明，即使对最快的ORAM构造应用了已知的和我们自己的优化方法，我们的解决方案在具有最多$2^{30}$个元素的数据集上比优化后的ORAM方案要快，速度提高了两个数量级。我们希望这项工作能够引起对寻找这个重要问题高效实现的进一步兴趣。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-224/](https://www.ndss-symposium.org/ndss-paper/auto-draft-224/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-106-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-106-paper.pdf)
## Chunked-Cache: On-Demand and Scalable Cache Isolation for Security Architectures.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#chunked-cache-on-demand-and-scalable-cache-isolation-for-security-architectures) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#chunked-cache-on-demand-and-scalable-cache-isolation-for-security-architectures)**
### 作者
* Ghada Dessouky, Technical University of Darmstadt
* Emmanuel Stapf, Technical University of Darmstadt
* Pouya Mahmoody, Technical University of Darmstadt
* Alexander Gruler, Technical University of Darmstadt
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
### 摘要
> 多核处理器中的共享缓存资源容易受到缓存侧信道攻击的威胁。最近提出的防御措施，如将地址随机映射到缓存行或者著名的缓存分区，也存在各自的问题：基于随机化的防御措施已被证明易受到新型攻击算法的攻击，而且依赖于弱密码原语。它们并没有从根本上解决缓存侧信道攻击的根本原因，即互不信任的代码共享缓存资源。缓存分区的防御措施可以提供必要的资源分区，以有效阻止所有的侧信道威胁。然而，缓存分区通常依赖于基于路的分区，这种分区是粗粒度的，不能扩展以支持更多的保护域，例如可信执行环境（TEE）安全架构，还会降低性能并经常导致缓存资源的浪费。
> 
> 为了克服这两种方法的缺点，我们提出了一种新颖而灵活的适用于TEE架构的关联缓存分区设计，称为Chunked-Cache。Chunked-Cache的核心思想是，如果执行需要侧信道鲁棒性，就允许执行上下文“切割”出一个独占的可配置缓存块。如果不需要侧信道鲁棒性，就可以自由利用主流缓存资源。因此，我们提出的缓存设计通过实现高效的选择性和按需利用侧信道鲁棒缓存来实际解决了安全性和性能之间的权衡问题，并提供了可靠的未来安全性保证。我们展示了Chunked-Cache在敏感代码执行时提供了侧信道鲁棒的缓存利用，硬件开销很小，而在操作系统上没有性能开销。我们还展示了它在比传统基于路的缓存分区高出43％的性能的同时，能够更好地支持更多的保护域。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-225/](https://www.ndss-symposium.org/ndss-paper/auto-draft-225/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-110-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-110-paper.pdf)
## What You See is Not What the Network Infers: Detecting Adversarial Examples Based on Semantic Contradiction.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#what-you-see-is-not-what-the-network-infers-detecting-adversarial-examples-based-on-semantic-contradiction) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#what-you-see-is-not-what-the-network-infers-detecting-adversarial-examples-based-on-semantic-contradiction)**
### 作者
* Yijun Yang, The Chinese University of Hong Kong
* Ruiyuan Gao, The Chinese University of Hong Kong
* Yu Li, The Chinese University of Hong Kong
* Qiuxia Lai, Communication University of China
* Qiang Xu, The Chinese University of Hong Kong
### 摘要
> 对抗样本（AEs）对深度神经网络（DNNs）在安全关键领域（如自动驾驶和医疗分析）的应用构成严重威胁。尽管已经有大量研究用于防御AEs，但据我们所知，它们都存在一些弱点，例如只能防御部分AEs或导致合法输入的准确性损失相对较大。此外，大多数现有解决方案无法防御自适应攻击，攻击者对防御机制有所了解并相应地制作AEs。
> 
> 在本文中，我们基于AEs的特质提出了一种新的AE检测框架，即ContraNet。具体而言，ContraNet通过首先将输入和推断结果传递给生成器，获得一个合成输出，然后将其与原始输入进行比较，来建模这种矛盾。对于被正确推断的合法输入，合成输出试图重构输入。相反，对于AEs，合成输出不会重构输入，而是尽可能与错误标签相符。因此，通过用度量学习测量输入和合成输出之间的距离，我们可以区分AEs和合法输入。我们在各种类型的AE攻击场景下进行了全面评估，实验结果表明，ContraNet在性能上远远超过现有解决方案，尤其对于自适应攻击更为有效。此外，进一步的分析显示，能够绕过ContraNet的成功AEs往往具有大大削弱的对抗语义。我们还展示了ContraNet可以很容易地与对抗训练技术相结合，以实现更出色的AE防御能力。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-226/](https://www.ndss-symposium.org/ndss-paper/auto-draft-226/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-1-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-1-paper.pdf)
## Euler: Detecting Network Lateral Movement via Scalable Temporal Graph Link Prediction.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#euler-detecting-network-lateral-movement-via-scalable-temporal-graph-link-prediction) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#euler-detecting-network-lateral-movement-via-scalable-temporal-graph-link-prediction)**
### 作者
* Isaiah J. King, The George Washington University
* H. Howie Huang, The George Washington University
### 摘要
> 侧向移动是高级持久性威胁使用的系统入侵的关键阶段。检测它并非易事。当网络主机日志抽象为离散时间图时，该问题可以被重新定义为进化网络中异常边的检测。现代深度图学习技术的研究为这一任务提供了许多创造性和复杂的模型。然而，正如在许多机器学习领域中的情况一样，模型的普适性对于训练和推理中的准确性和可扩展性至关重要。在本文中，我们提出了一种正式的方法来解决这个问题，使用了我们称之为Euler的框架。它包括一个与模型无关的图神经网络，叠加在一个与模型无关的序列编码层上，例如循环神经网络。按照Euler框架构建的模型可以轻松地将其图卷积层分布在多台机器上，从而显著提高性能。此外，我们证明了基于Euler的模型在异常链路检测和预测方面与许多最先进方法相比具有竞争力，甚至更好。作为基于异常的入侵检测系统，Euler模型能够高效地识别实体之间的异常连接，并在异常侧向移动检测方面优于其他无监督技术。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-227/](https://www.ndss-symposium.org/ndss-paper/auto-draft-227/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-107A-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-107A-paper.pdf)
## Fooling the Eyes of Autonomous Vehicles: Robust Physical Adversarial Examples Against Traffic Sign Recognition Systems.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#fooling-the-eyes-of-autonomous-vehicles-robust-physical-adversarial-examples-against-traffic-sign-recognition-systems) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#fooling-the-eyes-of-autonomous-vehicles-robust-physical-adversarial-examples-against-traffic-sign-recognition-systems)**
### 作者
* Wei Jia, School of Cyber Science and Engineering
### 摘要
> 敌对样本（AEs）可以欺骗深度神经网络（DNNs），并且最近受到了很多关注。然而，大部分有关AEs的研究都在数字领域进行，并且敌对贴片是静态的。这种研究与许多实际世界的DNN应用（例如自动驾驶车辆中的交通标志识别系统）非常不同。在交通标志识别系统中，对象检测器使用DNNs实时处理流媒体视频。从对象检测器的角度来看，交通标志的位置和视频的质量不断变化，使得数字的AEs在物理世界中失效。
> 
> 在本文中，我们提出了一个系统化的流程来生成针对实际世界对象检测器的强大物理AEs。鲁棒性通过三种方式实现。首先，我们通过扩展图像变换的分布来模拟车载摄像头，其中包括模糊变换和分辨率变换。其次，我们设计了单个和多个边界框过滤器，以提高扰动训练的效率。第三，我们考虑四种典型的攻击向量，分别是隐藏攻击（HA），外观攻击（AA），非目标攻击（NTA）和目标攻击（TA）。对于每种攻击向量，定义了一个损失函数，以最小化制造过程对物理AEs的影响。
> 
> 我们在各种环境条件下进行了一系列全面的实验，通过改变距离从0米到30米，改变角度从-60度到60度，并考虑晴天、多云天气以及夜间的光照状况。实验结果表明，我们的流程生成的物理AEs在攻击基于YOLO v5的TSR系统时是有效且鲁棒的。这些攻击具有良好的可转移性，并可以欺骗其他最先进的对象检测器。我们对一辆全新的2021款车辆进行了HA和NTA攻击。这两种攻击都成功地愚弄了TSR系统，这可能对自动驾驶车辆构成生命威胁。最后，我们讨论了基于图像预处理、AEs检测和模型增强的三种防御机制。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-228/](https://www.ndss-symposium.org/ndss-paper/auto-draft-228/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-130-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-130-paper.pdf)
## FedCRI: Federated Mobile Cyber-Risk Intelligence.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#fedcri-federated-mobile-cyber-risk-intelligence) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#fedcri-federated-mobile-cyber-risk-intelligence)**
### 作者
* Hossein Fereidooni, Technical University of Darmstadt
* Alexandra Dmitrienko, University of Wuerzburg
* Phillip Rieger, Technical University of Darmstadt
* Markus Miettinen, Technical University of Darmstadt
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
* Felix Madlener, KOBIL
### 摘要
> 在当前无处不在的数字化时代，越来越多的服务可以在线上获取，而这一点在冠状病毒大流行的情况下得到了加强。快速增长的移动服务市场为移动服务生态系统带来了新的攻击面。因此，移动服务提供商面临着保护其服务以及相关移动应用的各种挑战。然而，对于应用而言，防御措施通常仅限于（轻量级）应用级保护，如应用的加固、监控和入侵检测。因此，有效的风险管理对于限制移动服务面临的威胁和攻击可能造成的潜在损害至关重要。
> 
> 本文介绍了FedCRI，一种用于共享网络风险情报（CRI）的解决方案。在其核心部分，FedCRI将移动网络风险转化为机器学习（ML）模型，并利用基于ML的风险管理来评估移动设备上的安全风险。FedCRI通过使用联邦学习（FL）实现了快速和自主地共享可操作的基于ML的CRI知识。FL允许不同移动服务提供商共同训练有效的风险检测模型，同时保护各个组织的训练数据的隐私。我们对欧洲不同国家的九个不同服务提供商提供的数十亿用户使用的安全关键移动应用的数个真实用户数据库进行了广泛评估，这些数据库涵盖了六年的时间段，涉及金融服务、支付或保险领域。我们的方法能够成功提取准确的CRI模型，实现对移动设备上的网络安全风险的有效识别。我们的评估结果表明，在大多数风险分类任务中，联邦风险检测模型在F1分数方面能够达到超过99%的准确率，并且误报率非常低。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-229/](https://www.ndss-symposium.org/ndss-paper/auto-draft-229/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-153-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-153-paper.pdf)
## FakeGuard: Exploring Haptic Response to Mitigate the Vulnerability in Commercial Fingerprint Anti-Spoofing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#fakeguard-exploring-haptic-response-to-mitigate-the-vulnerability-in-commercial-fingerprint-anti-spoofing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#fakeguard-exploring-haptic-response-to-mitigate-the-vulnerability-in-commercial-fingerprint-anti-spoofing)**
### 作者
* Aditya Singh Rathore, University at Buffalo
### 摘要
> 如何抵御通过人造假手指进行的演示攻击是指纹生物识别中的核心挑战。在安全性、易用性和生产成本之间的权衡驱使研究人员达成共识，即将商用指纹技术与反欺诈检测（例如脊纹特征）集成。在这些反欺诈解决方案中，人们认为假手指永远不可能与真实手指密切相关，这要么是因为伪造材料的组成，要么是因为非自动化制造错误。本文首先确定了商用指纹产品中实践中反欺诈解决方案的脆弱性。我们不使用昂贵的3D假手指（超过1000美元），而是模拟了更加逼真的场景，即攻击者使用低成本的聚乙烯醋酸酯材料（低于50美元）制造高精度的假指纹。基于此，我们引入了一种实用且安全的对策，即FakeGuard，以克服这种暴露的脆弱性。我们研究了指尖表皮与触觉表面相互作用时产生的3D触觉响应效应，并反映了真实手指与假手指的不同解剖结构。与以往的缓解策略不同，FakeGuard能够与现有的指纹扫描器硬件和软件兼容。作为基于触觉的反欺诈解决方案的首次探索，我们展示了FakeGuard防止已知和未知假手指攻击的能力，平均检测误差为1.4%。我们还研究并证明了FakeGuard对七种不同物理攻击的抵抗性，例如通过压力变化或局部指纹进行的暴力破解攻击，通过高级伪造材料或侧信道干扰进行的触觉响应改变，以及通过操纵环境的湿度、光照和温度进行的拒绝服务攻击。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-230/](https://www.ndss-symposium.org/ndss-paper/auto-draft-230/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-82-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-82-paper.pdf)
## On Utility and Privacy in Synthetic Genomic Data.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#on-utility-and-privacy-in-synthetic-genomic-data) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#on-utility-and-privacy-in-synthetic-genomic-data)**
### 作者
* Bristena Oprisanu, UCL
* Georgi Ganev, UCL & Hazy
* Emiliano De Cristofaro, UCL
### 摘要
> 基因组数据的可用性对于生物医学研究、个性化医学等方面的进展至关重要。然而，由于其极高的敏感性，发表或共享这些数据往往存在问题，甚至不可能。因此，已经启动了多项倡议，试验使用生成模型学习真实数据的基本分布，并生成保留其重要特征而不暴露真实数据的人工数据集。本文首次评估了六种最先进的生成合成基因组数据模型的效用和隐私保护。我们通过多个常见任务（如等位基因群体统计和连锁不平衡）评估了合成数据的性能。随后，我们从成员推断攻击的角度来衡量隐私，即推断一个记录是否是训练数据的一部分。
> 
> 我们的实验表明，没有一种单一方法能够同时在所有方面实现高效用性和强隐私性。此外，训练数据集的规模和性质也很重要。而且，尽管某些数据集和模型的组合可以生成接近真实数据分布的合成数据，但往往存在一些目标数据点容易受到成员推断攻击的情况。展望未来，我们的技术可以被从业者用来评估在实际环境中部署合成基因组数据的风险，并为未来工作提供基准。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-231/](https://www.ndss-symposium.org/ndss-paper/auto-draft-231/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-92-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-92-paper.pdf)
## ProvTalk: Towards Interpretable Multi-level Provenance Analysis in Networking Functions Virtualization (NFV).
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#provtalk-towards-interpretable-multi-level-provenance-analysis-in-networking-functions-virtualization-nfv) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#provtalk-towards-interpretable-multi-level-provenance-analysis-in-networking-functions-virtualization-nfv)**
### 作者
* Azadeh Tabiban, CIISE
### 摘要
> 网络功能虚拟化（NFV）可以在云端敏捷部署网络服务。然而，由于NFV涉及多个层次的抽象表示相同的组件，因此确定安全事件的根本原因可能变得具有挑战性。例如，安全事件可能在不同的层次被检测到，其根本原因操作在两者之间没有明显的链接。此外，由于NFV的固有复杂性，现有的溯源分析技术产生的结果可能对人类分析师来说过于庞大而无法解释。在本文中，我们提出了ProvTalk，一种处理NFV独特多层本质的溯源分析系统，以协助分析师确定安全事件的根本原因。具体而言，我们首先定义了一个多层溯源模型，以捕获NFV层次之间的依赖关系。接下来，我们通过三种新颖的技术，即多层修剪，基于挖掘的聚合和基于规则的自然语言转换，提高了可解释性。我们在Tacker-OpenStack NFV平台上实现了ProvTalk，并根据现实世界的安全事件验证了其有效性。我们展示了ProvTalk捕获了对所有NFV服务进行的管理API调用，并通过显著减小溯源图的大小（比现有的单层修剪方案小3.6倍，并通过多层聚合方案缩小两个数量级）产生了更可解释的结果。我们的用户研究表明，ProvTalk通过生成更易解释的结果，促进了现实世界用户的分析任务。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-232/](https://www.ndss-symposium.org/ndss-paper/auto-draft-232/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-103-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-103-paper.pdf)
## Privacy in Urban Sensing with Instrumented Fleets, Using Air Pollution Monitoring As A Usecase.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#privacy-in-urban-sensing-with-instrumented-fleets-using-air-pollution-monitoring-as-a-usecase) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#privacy-in-urban-sensing-with-instrumented-fleets-using-air-pollution-monitoring-as-a-usecase)**
### 作者
* Ismi Abidi, IIT Delhi
* Ishan Nangia, MPI-SWS
* Paarijaat Aditya, Nokia Bell Labs
* Rijurekha Sen, IIT Delhi
### 摘要
> 提供出租车共享、电子商务物流和食品配送等服务的公司愿意对其车辆进行装置，以扩大交通拥堵、旅行时间、路面质量、空气质量等测量。分析这些大型车队的细粒度传感器数据可能非常有益；然而，该传感器信息会暴露部署车队的位置和车辆数量。这些敏感数据对于同一业务领域的竞争对手具有很高的商业价值，例如Uber与Ola、Uber与Lyft在出租车共享领域，或Amazon与Alibaba在电子商务领域。本文利用基于高斯过程回归（GPR）的插值、差分隐私（DP）和安全双方计算（2PC）为上述场景提供了隐私保护保证。通过保留车队和客户隐私以及客户效用，使得来自装置车辆车队的感知值可用。我们的系统具有高效的延迟和带宽开销，即使对于资源受限的移动客户端也是如此。为了演示我们的端到端系统，我们构建了一个示例Android应用程序，以隐私保护的方式提供给定源-目的地对的最少污染路径选择。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-233/](https://www.ndss-symposium.org/ndss-paper/auto-draft-233/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-127-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-127-paper.pdf)
## Titanium: A Metadata-Hiding File-Sharing System with Malicious Security.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#titanium-a-metadata-hiding-file-sharing-system-with-malicious-security) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#titanium-a-metadata-hiding-file-sharing-system-with-malicious-security)**
### 作者
* Weikeng Chen, DZK/UC Berkeley
* Thang Hoang, Virginia Tech
* Jorge Guajardo, Robert Bosch Research and Technology Center
* Attila A. Yavuz, University of South Florida
### 摘要
> 端到端加密的文件共享系统使用户能够在不向存储服务器透露文件内容的情况下共享文件。然而，服务器仍然会掌握元数据，包括用户身份和访问模式。以往的研究试图消除这种泄露，但依赖于强假设。Metal（NDSS '20）在面对恶意服务器时并不安全。MCORAM（ASIACRYPT '20）能够对抗恶意服务器提供保密性，但不能保证完整性。
> 
> Titanium是一个元数据隐藏的文件共享系统，能够对抗恶意用户和服务器提供保密性和完整性。与MCORAM相比，Titanium不仅能对抗恶意服务器提供保密性，还能提供完整性。实验表明，Titanium比MCORAM快5倍到200倍以上。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-234/](https://www.ndss-symposium.org/ndss-paper/auto-draft-234/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-161-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-161-paper.pdf)
## Remote Memory-Deduplication Attacks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#remote-memory-deduplication-attacks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#remote-memory-deduplication-attacks)**
### 作者
* Martin Schwarzl, Graz University of Technology
* Erik Kraft, Graz University of Technology
* Moritz Lipp, Graz University of Technology
* Daniel Gruss, Graz University of Technology
### 摘要
> 内存利用率可以通过将相同的内存块合并为复制写映射来减少。先前的工作表明，这种所谓的内存去重可以被利用在本地攻击中破坏ASLR，监视其他程序，并确定数据的存在，即网页图片。所有这些攻击都利用了安全领域之间的内存去重，而这种内存去重被禁用了。然而，在具有安全领域或没有不受信任的本地访问的隔离系统中，内存去重仍然不被视为安全风险，并且最近在Windows上被默认重新启用。
> 
> 在本文中，我们介绍了第一个完全远程的内存去重攻击。与先前的攻击不同，我们的攻击不需要本地代码执行。因此，我们只需通过发送和计时HTTP/1和HTTP/2网络请求，就可以从远程服务器披露内存内容。我们展示了我们对Windows和Linux上的去重进行攻击，并攻击了广泛使用的服务器软件，如Memcached和InnoDB。我们的侧信道泄漏率高达34.41B/h，使其比可比较的远程内存泄漏渠道更快。我们在三个案例研究中展示了我们的远程内存去重攻击：首先，我们展示了攻击者可以在运行Memcached的服务器上披露内存中数据的存在。我们展示了这种信息披露渠道也可以用于指纹识别，并在166.51秒内通过互联网检测正确的libc版本。其次，与InnoDB结合，我们提出了一种信息披露攻击，以泄露MariaDB数据库记录。第三，我们演示了一种完全远程的KASLR破解，仅需不到4分钟即可使虚拟机的内核映像在互联网上去随机化，即距离14个网络跳数。我们得出结论，如果仅适用于单个安全领域，内存去重也必须被视为安全风险。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-235/](https://www.ndss-symposium.org/ndss-paper/auto-draft-235/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-81-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-81-paper.pdf)
## Interpretable Federated Transformer Log Learning for Cloud Threat Forensics.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#interpretable-federated-transformer-log-learning-for-cloud-threat-forensics) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#interpretable-federated-transformer-log-learning-for-cloud-threat-forensics)**
### 作者
* Gonzalo De La Torre Parra, University of the Incarnate Word
### 摘要
> 威胁检测和取证已成为任何数字取证工作中至关重要的目标。已经提出了一些有监督方法来推断系统和网络异常，其中包括使用系统日志进行异常检测的贡献。然而，大多数工作都低估了模型决策过程可解释性的重要性。在这项研究中，我们首次提出了一种可解释的联邦变换器日志学习模型，用于支持可解释的网络取证。所提出的模型通过在组织单元的每个客户端上训练本地的基于变换器的威胁检测模型而生成。本地模型从保存执行流的系统日志中学习系统的正常行为。随后，联邦学习服务器聚合本地模型的学习参数以生成全局联合学习模型。记录正常行为的日志时间序列与存在网络威胁活动的日志时间序列有所不同。我们通过基于Karl-Pearson卡方统计量的拟合优度测试来展示这种差异。为了提供引起这种差异的行动的洞察，我们集成了一个基于注意力的可解释性模块。我们使用HDFS、一个公开可用的日志数据集以及一个内部收集并公开发布的名为CTDD的数据集来实现和评估我们提出的模型。该数据集包含超过800万条表示云协作服务和受不同类别网络威胁攻击的系统的系统日志。此外，通过不同的实验，我们展示了我们的方法在现实世界的边缘计算系统等实际操作环境中的日志不可知能力和适用性。我们的可解释性模块显示了正常和异常日志之间显著的注意力差异，提供了模型决策过程的有见地的可解释性。最后，我们认为所获得的结果验证了我们的方法在实现实际世界的威胁取证方面的适当应用。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-236/](https://www.ndss-symposium.org/ndss-paper/auto-draft-236/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-102-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-102-paper.pdf)
## Repttack: Exploiting Cloud Schedulers to Guide Co-Location Attacks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#repttack-exploiting-cloud-schedulers-to-guide-co-location-attacks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#repttack-exploiting-cloud-schedulers-to-guide-co-location-attacks)**
### 作者
* Chongzhou Fang, University of California
### 摘要
> 云计算范式已成为存储和处理各种业务单位、公共组织、物联网和网络物理系统产生的海量数据的重要工具。为了满足用户的性能要求，同时最大程度地利用资源以实现成本效益，云管理员利用调度程序将任务编排到不同的物理节点，并允许不同用户的应用共享同一物理节点。另一方面，微体系结构攻击（如侧信道攻击、瞬时执行攻击和行锤攻击）利用共享资源来危及共存的受害应用的机密性/完整性。由于共存是微体系结构攻击的基本要求，本研究探究攻击者是否可以利用云调度程序满足微体系结构攻击的共存要求。具体而言，在本文中，我们全面分析攻击者是否可以影响云调度程序的调度过程，以便将其与云中特定的目标应用共存。我们的分析表明，对于允许用户提交应用要求的云调度程序，攻击者可以精心选择攻击者的应用要求，以影响调度程序将其与目标受害应用共存。我们称这种攻击为“重复攻击”（Repttack）。我们在模拟集群环境和实际集群中进行的实验结果显示出相似的趋势；单个攻击实例可以达到50%的共存率（共存的概率），只需5个实例，共存率就可以达到80%。此外，我们提出并评估了一种可以帮助抵御重复攻击的缓解策略。我们相信我们的结果强调了多用户集群中的调度程序需要更加谨慎地考虑安全性，并且做出调度决策的过程应尽可能少涉及用户定义信息。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-237/](https://www.ndss-symposium.org/ndss-paper/auto-draft-237/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-149-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-149-paper.pdf)
## ATTEQ-NN: Attention-based QoE-aware Evasive Backdoor Attacks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#atteq-nn-attention-based-qoe-aware-evasive-backdoor-attacks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#atteq-nn-attention-based-qoe-aware-evasive-backdoor-attacks)**
### 作者
* Xueluan Gong, Wuhan University
* Yanjiao Chen, Zhejiang University
* Jianshuo Dong, Wuhan University
* Qian Wang, Wuhan University
### 摘要
> 深度神经网络在各种关键任务上取得了显著的成功。然而，最近的研究表明，深度神经网络容易受到后门攻击，攻击者通过释放带有后门的模型，使其对正常样本表现出正常行为，但对任何带有触发条件的样本进行错误分类为目标标签。与对抗性样本不同，后门攻击同时操纵输入和模型，通过触发条件扰动样本并向模型注入后门。在本文中，我们提出了一种新颖的基于注意力机制的逃避式后门攻击，称为ATTEQ-NN。与现有方法随机设置触发条件掩码不同，我们精心设计了一种基于注意力的触发条件掩码确定框架，将触发条件放置在对预测结果有最显著影响的关键区域。为了使触发条件施加的样本对人类观察者更加自然和难以察觉，我们在触发条件生成的损失函数中引入了体验质量（QoE）项，并仔细调整了触发条件的透明度。在迭代优化触发条件生成和后门注入组件的过程中，我们提出了一种交替重新训练策略，该策略被证明对于提高干净数据准确性并逃避某些基于模型的防御方法非常有效。
> 
> 我们在VGG-Flower、CIFAR-10、GTSRB和CIFAR-100数据集上进行了大量实验来评估ATTEQ-NN。结果表明，当有毒比例较低时，ATTEQ-NN可以将攻击成功率提高高达82%，同时实现后门样本的高QoE。我们证明了ATTEQ-NN在不同照明条件和拍摄角度下在现实世界中能够达到超过41.7%的攻击成功率。即使对原始带有后门的模型进行了干净数据的微调，ATTEQ-NN仍保持了超过92.5%的攻击成功率。我们的用户研究表明，ATTEQ-NN生成的后门样本在视觉检查下难以察觉。ATTEQ-NN被证明对于包括模型修剪、NAD、STRIP、NC和MNTD在内的最先进的防御方法具有逃避性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-238/](https://www.ndss-symposium.org/ndss-paper/auto-draft-238/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-12-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-12-paper.pdf)
## RamBoAttack: A Robust and Query Efficient Deep Neural Network Decision Exploit.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#ramboattack-a-robust-and-query-efficient-deep-neural-network-decision-exploit) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#ramboattack-a-robust-and-query-efficient-deep-neural-network-decision-exploit)**
### 作者
* Viet Quoc Vo, The University of Adelaide
* Ehsan Abbasnejad, The University of Adelaide
* Damith C. Ranasinghe, University of Adelaide
### 摘要
> 机器学习模型对来自敌对示例的规避攻击极其敏感。通常情况下，敌对示例——即与原始输入欺骗性地相似的修改输入——是由完全访问模型的对手在白盒访问设置下构建的。然而，最近的攻击表明，在使用黑盒攻击时，制作敌对样本所需的查询数量大大减少。尤其令人担忧的是，现在可以仅仅利用由越来越多的机器学习即服务（MLaaS）提供商（包括谷歌、微软、IBM等）提供的经过训练模型访问接口中的分类决策（仅限硬标签）来进行攻击，并被大量应用程序整合到这些模型中。对手仅能利用模型查询中预测的硬标签来制作敌对示例的能力被称为基于决策的攻击。
> 
> 在我们的研究中，我们首先深入研究了ICLR和S&P中最新的基于决策的攻击，以凸显利用近似梯度估计方法发现低失真敌对示例的高成本性质。我们开发了一种强大的查询高效攻击类别，能够避免陷入局部最小值和受到梯度估计方法中噪声梯度的误导。我们提出的攻击方法RamBoAttack利用了随机块坐标下降的概念来探索隐藏的分类器流形，以定位扰动，仅操纵局部化的输入特征，以解决梯度估计方法的问题。重要的是，RamBoAttack对对手可用的不同样本输入和目标类别更加稳健。总体而言，在给定的查询预算内，对于给定的目标类别，RamBoAttack在实现更低失真和更高攻击成功率方面表现出更强的韧性。我们使用规模庞大的高分辨率ImageNet数据集整理了我们的结果，并公开了我们的攻击、测试样本和制品。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-239/](https://www.ndss-symposium.org/ndss-paper/auto-draft-239/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-200-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-200-paper.pdf)
## Property Inference Attacks Against GANs.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#property-inference-attacks-against-gans) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#property-inference-attacks-against-gans)**
### 作者
* Junhao Zhou, Xi'an Jiaotong University
* Yufei Chen, Xi'an Jiaotong University
* Chao Shen, Xi'an Jiaotong University
* Yang Zhang, CISPA Helmholtz Center for Information Security
### 摘要
> 尽管机器学习（ML）在过去十年间取得了巨大进展，最近的研究表明，ML模型容易受到各种安全和隐私攻击。到目前为止，这一领域中的大部分攻击都集中在以分类器为代表的判别模型上，而对生成模型（例如生成对抗网络-GANs）的安全和隐私风险关注较少。本文中，我们提出了第一组针对GANs的训练数据集属性推理攻击。具体而言，对手的目标是推断宏观层面的训练数据集属性，即针对某个属性在训练目标GAN中所使用的样本比例。成功的属性推理攻击可以使对手获取目标GAN训练数据集的额外知识，从而直接侵犯目标模型所有者的知识产权。此外，它可以用作公平性审计员，检查目标GAN是否是通过具有偏差的数据集进行训练的。此外，属性推理可以作为其他高级攻击（如成员推理）的基础。我们提出了一种通用的攻击流程，可以针对完全黑盒和部分黑盒两种攻击场景进行定制。对于后者，我们引入了一种新的优化框架来提高攻击效果。对四个代表性GAN模型进行了广泛实验，涉及五个属性推理任务，结果表明我们的攻击具有很强的性能。此外，我们还展示了我们的攻击可以用于提高对GAN的成员推理性能。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-240/](https://www.ndss-symposium.org/ndss-paper/auto-draft-240/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-19-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-19-paper.pdf)
## Get a Model! Model Hijacking Attack Against Machine Learning Models.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#get-a-model-model-hijacking-attack-against-machine-learning-models) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#get-a-model-model-hijacking-attack-against-machine-learning-models)**
### 作者
* Ahmed Salem, CISPA Helmholtz Center for Information Security
* Michael Backes, CISPA Helmholtz Center for Information Security
* Yang Zhang, CISPA Helmholtz Center for Information Security
### 摘要
> 机器学习（ML）已经成为从自动驾驶到认证系统等各种关键应用的基石。然而，随着机器学习模型的日益普及，出现了多种攻击方式。其中一类攻击是训练时间攻击，即敌对势力在机器学习模型训练之前或期间执行攻击。在这项工作中，我们提出了一种新的针对基于计算机视觉的机器学习模型的训练时间攻击，即模型劫持攻击。攻击者的目标是劫持目标模型，以执行不同于其原始任务的任务，而模型所有者却察觉不到。模型劫持可能会导致问责和安全风险，因为劫持模型的所有者可能会因其模型提供非法或不道德的服务而被嫁祸。模型劫持攻击的发动方式与现有的数据污染攻击相同。然而，模型劫持攻击的一个要求是具有隐秘性，即用于劫持目标模型的数据样本应该与模型的原始训练数据集相似。为此，我们提出了两种不同的模型劫持攻击，即变色龙攻击和逆向变色龙攻击，它们基于一种新颖的编码器-解码器风格的ML模型，即伪装者。我们的评估结果显示，我们的两种模型劫持攻击都实现了较高的攻击成功率，并且模型效用几乎没有下降。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-241/](https://www.ndss-symposium.org/ndss-paper/auto-draft-241/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-64-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-64-paper.pdf)
## DRAWN APART: A Device Identification Technique based on Remote GPU Fingerprinting.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#drawn-apart-a-device-identification-technique-based-on-remote-gpu-fingerprinting) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#drawn-apart-a-device-identification-technique-based-on-remote-gpu-fingerprinting)**
### 作者
* Tomer Laor, Ben-Gurion Univ. of the Negev
* Naif Mehanna and Antonin Durey, Univ. Lille / Inria
* Vitaly Dyadyuk, Ben-Gurion Univ. of the Negev
* Pierre Laperdrix, CNRS
### 摘要
> 浏览器指纹识别旨在通过在用户浏览器中执行的脚本收集软件或硬件特征信息，以识别用户或其设备。它被用于跟踪用户或作为增强安全性的补充手段。但是，指纹识别技术存在一个显著的限制：无法长时间追踪单个用户。这是因为浏览器指纹会随时间变化，而这些变化最终会导致指纹与共享类似硬件和软件的其他设备的指纹混淆。
> 
> 在本文中，我们介绍了一种可以显著延长基于指纹的追踪方法的新技术。我们称之为DRAWNAPART的技术是一种新的GPU指纹识别技术，它通过唯一的GPU堆栈属性来识别设备。具体来说，我们展示了由GPU组成的多个执行单元之间的速度变化可以作为可靠和强大的设备签名，可以使用非特权的JavaScript来收集。我们在两个场景下研究了DRAWNAPART的准确性。在第一个场景中，我们的控制实验确认了该技术在区分具有相似硬件和软件配置的设备方面的有效性，即使它们在当前最先进的指纹识别算法中被认为是相同的。在第二个场景中，我们将我们的技术的一次性学习版本集成到最先进的浏览器指纹追踪算法中。我们通过一项大规模实验验证了我们的技术，涉及了在数个月的时间内从2500个众包设备中收集的数据，并显示与最先进的方法相比，它可以使中位追踪持续时间增加高达67％。
> 
> DRAWNAPART在浏览器指纹识别的领域有两个贡献。在概念上，它是第一项探索相同GPU之间制造差异的工作，并首次在隐私环境中利用这些差异。在实践中，它展示了一种强大的技术，用于区分具有相同硬件和软件配置的机器，在实际环境中提供了实用的准确性提升。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-242/](https://www.ndss-symposium.org/ndss-paper/auto-draft-242/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-93-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-93-paper.pdf)
## Clarion: Anonymous Communication from Multiparty Shuffling Protocols.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#clarion-anonymous-communication-from-multiparty-shuffling-protocols) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#clarion-anonymous-communication-from-multiparty-shuffling-protocols)**
### 作者
* Saba Eskandarian, University of North Carolina at Chapel Hill
* Dan Boneh, Stanford University
### 摘要
> 本文研究了多方洗牌协议在实现更高效的元数据隐藏通信中的作用。我们通过服务器协同洗牌和验证消息的秘密分享，来加快消息洗牌的过程，而不是采用传统的混合网络方法，其中服务器轮流执行用户消息的独立可验证洗牌。我们将该技术应用于匿名广播和消息系统中，实现了实际和渐近改进。首先，我们展示了如何构建一个针对恶意服务器安全的仅依赖对称加密的三服务器匿名广播方案。接下来，我们将我们的三服务器广播方案改进为安全抵御k-1个恶意服务器的k服务器方案，但需要更昂贵的每个洗牌预处理阶段。最后，我们展示了如何使用我们的方案显著改进MCMix匿名消息系统的性能。
> 
> 我们在一个名为Clarion的系统中实现了我们的洗牌协议，并发现它在广播小消息时比由一系列可验证（单服务器）洗牌组成的混合网络表现出9.2倍的性能改进，并且在MCMix会话协议方面超过11.8倍的性能改进。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-243/](https://www.ndss-symposium.org/ndss-paper/auto-draft-243/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-141-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-141-paper.pdf)
## VPNInspector: Systematic Investigation of the VPN Ecosystem.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#vpninspector-systematic-investigation-of-the-vpn-ecosystem) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#vpninspector-systematic-investigation-of-the-vpn-ecosystem)**
### 作者
* Reethika Ramesh, University of Michigan
* Leonid Evdokimov, Independent
* Diwen Xue, University of Michigan
* Roya Ensafi, University of Michigan
### 摘要
> 虚拟私人网络（VPN）的使用正迅速增长，这是因为公众对在线隐私和安全风险的意识提高了。这种增长推动了VPN生态系统扩大到一个价值数十亿美元的行业，吸引了大量新的VPN服务提供商。然而，VPN生态系统仍然严重缺乏研究，并且有限的有关VPN的研究都依赖繁琐的手动过程。需要一种解决方案，使研究人员和普通用户能够调查他们的VPN提供商。
> 
> 在这项工作中，我们提出了VPNalyzer，这是一个使系统化、半自动化的VPN生态系统调查成为可能的系统。我们开发了一个跨平台工具，其中包含一个包含15个测量测试项的全面测试套件，这些测试项测试服务、安全和隐私要点、配置错误和泄漏等方面。使用VPNalyzer工具，我们对80个桌面VPN进行了最大规模的调查。
> 
> 我们的调查揭示了几个之前未报告的发现，突出了VPN生态系统中的关键问题和实施短板。我们发现26个VPN提供商在隧道故障期间存在流量泄露的证据，这严重危及用户敏感数据的曝光。我们是首次测量和检测到在隧道故障期间的DNS泄漏，我们在八个提供商中观察到这种情况。总体而言，我们发现大多数提供商缺乏IPv6支持，甚至有五个提供商将IPv6流量泄漏给用户的互联网服务提供商。我们观察到，我们认为在VPN提供商中采用的我们认为是安全和隐私的基本做法并不均匀。多个提供商共享基础设施，29个提供商使用第三方的公共DNS服务。令人担忧的是，即使在最安全的配置下，仍有10个VPN提供商会泄漏流量，其中有6个即使启用了“断开连接”功能也会泄漏数据。我们的结果突显了VPNalyzer在查找问题方面的有效性，即使在最受欢迎的VPN提供商中也是如此。消费者报告为他们的用户创建基于数据的建议时使用了VPNalyzer。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-244/](https://www.ndss-symposium.org/ndss-paper/auto-draft-244/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-285-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-285-paper.pdf)
## hbACSS: How to Robustly Share Many Secrets.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#hbacss-how-to-robustly-share-many-secrets) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#hbacss-how-to-robustly-share-many-secrets)**
### 作者
* Thomas Yurek, University of Illinois at Urbana-Champaign
* Licheng Luo, University of Illinois at Urbana-Champaign
* Jaiden Fairoze, University of California
### 摘要
> 尽管近年来在实现多方计算（MPC）方面取得了重大进展，但现有的MPC库都没有提供完整的鲁棒性，也就是保证输出的交付，即使在存在间歇性延迟的网络中也是如此。重要的是，几个理论上的MPC构造已经确保了在这种情况下的鲁棒性。我们观察到，造成理论与实践之间差距的关键原因是缺乏高效的可验证/完整的秘密分享（VSS/CSS）构造；现有的CSS协议要么在实践中需要具有挑战性的广播信道，要么引入计算和通信开销，至少是参与者数量的平方倍。
> 
> 本文提出了hbACSS，一套在计算和通信开销上（准）线性且具有最优弹性的异步完整秘密分享协议。为了开发hbACSS，我们开发了hbPolyCommit，一种高效的多项式承诺方案，其在计算和通信开销方面是（准）线性的（与多项式的次数相关），而不需要可信的设置。我们实现了hbACSS协议，广泛分析了其实用性，并观察到我们的协议在随着参与方数量的增加而良好扩展。特别地，我们使用hbACSS生成MPC输入掩码：这是一个有用的原语，在以前的实践中只能以非鲁棒的方式计算。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-245/](https://www.ndss-symposium.org/ndss-paper/auto-draft-245/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-120-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-120-paper.pdf)
## An In-depth Analysis of Duplicated Linux Kernel Bug Reports.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#an-in-depth-analysis-of-duplicated-linux-kernel-bug-reports) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#an-in-depth-analysis-of-duplicated-linux-kernel-bug-reports)**
### 作者
* Dongliang Mu, Huazhong University of Science and Technology
* Yuhang Wu, Pennsylvania State University
* Yueqi Chen, Pennsylvania State University
* Zhenpeng Lin, Pennsylvania State University
* Chensheng Yu, George Washington University
* Xinyu Xing, Pennsylvania State University
* Gang Wang, University of Illinois at Urbana-Champaign
### 摘要
> 在过去的三年中，持续的模糊测试项目Syzkaller和Syzbot在检测内核漏洞方面取得了巨大的成功，发现了比过去20年发现的内核漏洞更多的内核错误。然而，持续的模糊测试的一个副作用是它生成了过多的崩溃报告，其中许多是由于同一个错误而导致的“重复”报告。尽管Syzbot使用简单的启发式方法来对报告进行分组（去重），但我们发现它常常不准确。在本文中，我们经验性地分析了重复的内核错误报告，以了解：（1）复制的普遍性；（2）复制引入的潜在成本；以及（3）导致重复问题的主要原因。我们收集了从2017年9月至2020年11月的所有修复的内核错误，包括由Syzbot分类的324万个崩溃报告，归为2526个错误报告（通过唯一错误标题进行识别）。我们发现错误报告确实存在重复：2526个错误报告中有47.1%与一个或多个其他报告重复。通过分析这些报告的元数据，我们发现未检测到的重复给时间和开发人员工作量带来了额外的成本。然后，我们组织Linux内核专家分析了一部分重复的错误（375个错误报告，120个唯一错误），并确定了导致重复的6个关键因素。基于这些经验性发现，我们提出并制定了可行的错误去重策略的原型。在使用地面真实数据集确认其有效性后，我们进一步应用了我们的方法，并在现有错误中发现了之前未知的重复案例。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-246/](https://www.ndss-symposium.org/ndss-paper/auto-draft-246/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-159-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-159-paper.pdf)
## Kasper: Scanning for Generalized Transient Execution Gadgets in the Linux Kernel.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#kasper-scanning-for-generalized-transient-execution-gadgets-in-the-linux-kernel) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#kasper-scanning-for-generalized-transient-execution-gadgets-in-the-linux-kernel)**
### 作者
* Brian Johannesmeyer, VU Amsterdam
* Jakob Koschel, VU Amsterdam
* Kaveh Razavi, ETH Zurich
* Herbert Bos, VU Amsterdam
* Cristiano Giuffrida, VU Amsterdam
### 摘要
> 由于在应对误预测条件分支的Spectre-PHT（如Spectre）攻击时串行化指令的高成本，关键软件（如Linux内核）的开发人员只有在他们认为在推测执行下危险的代码路径上选择性地应用这些补救措施，并通过注释进行标记。这种方法导致保护不完整，因为它只针对易于发现的小工具应用了补救措施。然而，直到现在，这是足够的，因为现有的小工具扫描器（以及内核开发人员）都是基于模式的：它们寻找已知的利用标识，并不能检测更通用的小工具。
> 
> 在本文中，我们放弃了模式扫描，采用了一种建模推测执行攻击中所使用的基本步骤的方法，这使我们能够找到更通用的小工具，远远超出现有扫描器的范围。具体而言，我们提出了Kasper，这是一种推测执行小工具扫描器，它使用标记分析策略来模拟攻击者在临时路径上利用任意软件/硬件漏洞来控制数据（例如通过内存操纵或LVI），访问秘密信息（例如通过越界或使用后释放访问），以及泄露这些秘密信息（例如通过基于缓存、基于MDS或基于端口争用的隐蔽信道）。
> 
> 最后，尽管现有解决方案针对用户程序，但Kasper在内核中寻找小工具，这是一个更高价值的攻击目标，但也更复杂进行分析。即使内核已经针对临时执行攻击进行了严格加固，Kasper仍找到了1379个尚未减轻的小工具。我们通过展示Kasper找到的一个小工具的端到端的概念验证攻击来确认我们的发现。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-247/](https://www.ndss-symposium.org/ndss-paper/auto-draft-247/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-221-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-221-paper.pdf)
## Semantic-Informed Driver Fuzzing Without Both the Hardware Devices and the Emulators.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#semantic-informed-driver-fuzzing-without-both-the-hardware-devices-and-the-emulators) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#semantic-informed-driver-fuzzing-without-both-the-hardware-devices-and-the-emulators)**
### 作者
* Wenjia Zhao, Xi'an Jiaotong University and University of Minnesota
* Kangjie Lu, University of Minnesota
* Qiushi Wu, University of Minnesota
* Yong Qi, Xi'an Jiaotong University
### 摘要
> 设备驱动程序具有安全关键性。在像Linux这样的内核中，有数十万个驱动程序以与核心内核相同的权限运行。因此，驱动程序中的一个错误可能会破坏整个系统。更为重要的是，驱动程序特别容易出现错误。首先，驱动程序不仅从用户空间接收复杂且不可信的输入，还接收来自硬件的输入。其次，驱动程序代码可能由经验不足的第三方开发，并且由于运行驱动程序需要相应的硬件设备或模拟器，因此经过的测试较少。因此，现有研究表明，驱动程序倾向于具有较高的错误密度，并且已成为主要的安全威胁。现有的测试技术必须将模糊测试集中在有相应设备或模拟器的有限数量的驱动程序上，因此无法扩展。
> 
> 在本文中，我们提出了一种无需硬件设备进行模糊测试驱动程序的系统，D R .FUZZ。D R .FUZZ的核心是一种语义信息驱动机制，它能够有效生成输入以正确构建相关数据结构，以通过驱动程序的初始化中的“验证链”，从而实现无需硬件设备的驱动程序模糊测试。不需要硬件设备和模拟器消除了驱动程序测试中的瓶颈。这种语义信息驱动机制采用多种新技术，使得无需硬件设备的驱动程序模糊测试成为可能：推断初始化中通过验证链的有效输入值，推断输入字节的时间使用顺序以最大限度地减少变异空间，并利用错误状态作为反馈来指导模糊测试通过验证链。此外，语义信息驱动机制是通用的；我们还可以指示它生成半格式错误的输入以实现更高的代码覆盖率。我们在214个Linux驱动程序上评估了D R .FUZZ。在仅有24小时的时间预算内，D R .FUZZ能够成功初始化并启用大多数没有相应设备的驱动程序，而现有的模糊器如syzkaller在任何情况下都不能成功。D R .F UZZ在其他方面也明显优于现有的带有设备或模拟器的驱动程序模糊器：它将代码覆盖率提高了70%，吞吐量提高了18%。通过使用D R .FUZZ，我们还在Linux驱动程序中发现了46个新的错误。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-248/](https://www.ndss-symposium.org/ndss-paper/auto-draft-248/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-345-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-345-paper.pdf)
## Progressive Scrutiny: Incremental Detection of UBI bugs in the Linux Kernel.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#progressive-scrutiny-incremental-detection-of-ubi-bugs-in-the-linux-kernel) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#progressive-scrutiny-incremental-detection-of-ubi-bugs-in-the-linux-kernel)**
### 作者
* Yizhuo Zhai, University of California
### 摘要
> Linux内核有一个快速的开发周期，平均每小时有10个提交。虽然这些更新提供了新的功能和错误修复，但它们也可能引入新的错误和安全漏洞。最近的技术显示了如何使用静态分析来检测某些类型的漏洞，但这些工具无法快速运行以跟上内核开发的速度。理想情况下，增量分析技术可以解决这个问题，通过完成一次完整分析，然后只分析后续代码中更改的部分。然而，由于Linux内核的巨大规模和需要减少误报的高精度要求，对Linux内核进行增量分析面临着独特的挑战。
> 
> 在本文中，我们设计并实现了一个新颖的Linux内核增量分析工具INCRELUX。它通过对新代码和受影响的之前代码进行有针对性的分析，实现了在每次更新后快速检测漏洞，并加快了对现有错误的跟踪，以了解它们存在的时间，从而增加对此类错误的认识。我们的方法基于自下而上的基于函数摘要的方法，充分利用了之前Linux基线的一次性清零分析的好处，但代价较高。INCRELUX还使用了一种有效的启发式方法，将符号执行应用于增量结果，以提高精确性。通过在寻找使用前未初始化(UBI)错误这个具有挑战性的问题上进行大量实验，我们展示了INCRELUX的许多优点：(a)我们可以快速检查新版本是否引入了UBI错误，并帮助在流程的早期消除它们。(b)我们进行历史分析，确定漏洞是何时首次引入的，以及何时被修复(这是Linux内核中漏洞分类的关键步骤)。(c)我们将增量分析结果与一次性分析结果进行比较，并展示了我们的方法几乎得到了完全相同的结果，证明了其忠实度和效率。虽然一次性分析耗时106.45小时，但增量分析通常在几分钟内完成，使得主线内核的速度提高了200倍，稳定分支的平均速度提高了440倍。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-249/](https://www.ndss-symposium.org/ndss-paper/auto-draft-249/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-380-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-380-paper.pdf)
## F-PKI: Enabling Innovation and Trust Flexibility in the HTTPS Public-Key Infrastructure.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#f-pki-enabling-innovation-and-trust-flexibility-in-the-https-public-key-infrastructure) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#f-pki-enabling-innovation-and-trust-flexibility-in-the-https-public-key-infrastructure)**
### 作者
* Laurent Chuat, ETH Zurich
* Cyrill Krähenbühl, ETH Zürich
* Prateek Mittal, Princeton University
* Adrian Perrig, ETH Zurich
### 摘要
> 我们提出了F-PKI，这是对HTTPS公钥基础设施（或Web PKI）的增强，为客户端和域名所有者提供了信任灵活性，并使证书颁发机构（CAs）能够执行更强的安全措施。在当前的Web PKI中，所有CA都被同等地信任，并且安全性由最薄弱的一环决定。我们通过在两个维度上引入信任灵活性来解决这个问题：使用F-PKI，每个域名所有者都可以定义一个域名策略（例如，指定哪些CA有权为其域名颁发证书），每个客户端可以根据信任级别设置或选择验证策略。因此，F-PKI支持了当今互联网急需的一种特性：信任异构性。不同的参与方可以表达不同的信任偏好，同时仍然能够验证所有的证书。相比之下，今天的Web PKI只允许客户端完全不信任可疑/行为不端的CA，这很可能导致合法证书被拒绝而造成附带损害。我们的贡献是提出了一个与现有系统兼容的系统，为客户端和域名所有者提供合理的安全性质，确保所有证书的可验证性，并防止降级攻击。此外，F-PKI为创新提供了基础，因为它给予CA部署新的安全措施以吸引更多客户的动力，而不会受到易受攻击的CA的削弱。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-250/](https://www.ndss-symposium.org/ndss-paper/auto-draft-250/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-241-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-241-paper.pdf)
## Let's Authenticate: Automated Certificates for User Authentication.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#lets-authenticate-automated-certificates-for-user-authentication) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#lets-authenticate-automated-certificates-for-user-authentication)**
### 作者
* James Conners, Brigham Young University
* Corey Devenport, Brigham Young University
* Stephen Derbidge, Brigham Young University
* Natalie Farnsworth, Brigham Young University
* Kyler Gates, Brigham Young University
* Stephen Lambert, Brigham Young University
* Christopher McClain, Brigham Young University
* Parker Nichols, Brigham Young University
* Daniel Zappala, Brigham Young University
### 摘要
> 密码有很多缺点，因此许多系统都被设计来取代密码。由于平衡可用性、可部署性和安全性的复杂性，密码替代方案通常未能取代密码。然而，尽管这种缺乏成功，最近关于密码管理器和FIDO2的进展为探索密码替代系统设计提供了新的机会。在这项工作中，我们探讨了基于证书的用户认证系统的可行性。我们没有开发新的密码学，而是开发了一个新的系统，名为Let's Authenticate，它结合了密码管理器、FIDO2和证书的元素。我们的设计结合了对397名参与者偏好系统功能的调查反馈。Let's Authenticate向用户发放保护隐私的证书，自动管理他们的凭据，并消除了对第三方的信任。我们提供了详细的安全和隐私分析、开销分析，并使用一个众所周知的框架对该系统与各种替代方案进行了系统比较。我们讨论了Let's Authenticate与其他系统的比较，从我们的设计中学到的经验教训，以及与集中管理认证数据相关的问题。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-251/](https://www.ndss-symposium.org/ndss-paper/auto-draft-251/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-272-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-272-paper.pdf)
## Transparency Dictionaries with Succinct Proofs of Correct Operation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#transparency-dictionaries-with-succinct-proofs-of-correct-operation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#transparency-dictionaries-with-succinct-proofs-of-correct-operation)**
### 作者
* Ioanna Tzialla, New York University
* Abhiram Kothapalli, Carnegie Mellon University
* Bryan Parno, Carnegie Mellon University
* Srinath Setty, Microsoft Research
### 摘要
> 本文介绍了「Verdict」，一个透明字典，其中一个不可信任的服务维护了一个标签-值映射表，客户可以查询和更新（用于端到端加密和其他应用的基础架构）。为了防止字典被未经授权的修改，例如恶意或被入侵的服务提供商，「Verdict」生成可公开验证的加密证明，证明它正确地执行读取和授权更新。相对于以前的工作，一个关键的进展是「Verdict」在产生高效可验证证明的同时，承受了适度的证明开销。「Verdict」通过组合索引 Merkle 树（一种新的 SNARK-friendly 数据结构）和 Phalanx（一种新的 SNARK，支持分摊恒定大小的证明，并利用特定的工作负载特征加速证明者）来实现这一目标。我们的实验评估表明，「Verdict」可以适应拥有数百万个标签的字典，并对服务和客户端施加适度的开销。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-252/](https://www.ndss-symposium.org/ndss-paper/auto-draft-252/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-143-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-143-paper.pdf)
## Multi-Certificate Attacks against Proof-of-Elapsed-Time and Their Countermeasures.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#multi-certificate-attacks-against-proof-of-elapsed-time-and-their-countermeasures) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#multi-certificate-attacks-against-proof-of-elapsed-time-and-their-countermeasures)**
### 作者
* Huibo Wang, Baidu Security
* Guoxing Chen, Shanghai Jiao Tong University
* Yinqian Zhang, Southern University of Science and Technology
* Zhiqiang Lin, Ohio State University
### 摘要
> Proof-of-Elapsed-Time (POET) 是一种区块链共识协议，要求每个参与节点在每一轮的区块领导者选举前等待特定的时间段。它依赖于可信执行环境（如Intel SGX）来确保其安全性，并已在Hyperledger Sawtooth中实施并在许多实际场景中使用。本文对Sawtooth的POET设计和实现的安全问题进行了审查，包括公平性保证，并发现了针对POET的一类新的安全攻击，称为多证书攻击，该攻击允许恶意节点在每一轮区块领导者选举中不公平地创建多个证书，并选择可以最大化其获胜概率的证书。我们系统地分析了这些攻击的根本原因，并帮助Sawtooth社区修复了POET最新版本中的几个漏洞。为了进一步减轻已被确认的威胁，本文提出了一个名为POETA的新设计，可以解决我们所发现的剩余漏洞。我们已经实现了POETA并评估了其安全性和性能。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-253/](https://www.ndss-symposium.org/ndss-paper/auto-draft-253/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-158-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-158-paper.pdf)
## Shaduf: Non-Cycle Payment Channel Rebalancing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#shaduf-non-cycle-payment-channel-rebalancing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#shaduf-non-cycle-payment-channel-rebalancing)**
### 作者
* Zhonghui Ge, Shanghai Jiao Tong University
* Yi Zhang, Shanghai Jiao Tong University
* Yu Long, Shanghai Jiao Tong University
* Dawu Gu, Shanghai Jiao Tong University
### 摘要
> 一种提升无证通证区块链性能和可扩展性的主要方法是使用支付通道，它允许两个用户进行几乎无限次的链下支付。通过将支付通道连接起来形成支付通道网络，通过通道路径连接的用户可以快速进行链下支付。然而，支付通道存在资金耗尽的风险，这威胁着支付通道和网络的可用性。最近的方法需要通过循环型通道再平衡程序，其中需要一个公平的领导者和有再平衡需求的用户在网络中形成定向循环。因此，它的大规模应用受到了限制。
> 
> 在这项工作中，我们介绍了Shaduf，一种新颖的非循环链下再平衡协议，为用户提供了在不依赖循环设置的情况下直接在通道之间转移代币的新解决方案。Shaduf可以应用于更一般的再平衡场景。我们提供了Shaduf的详细信息，并在通用组合性框架下正式证明了其安全性。我们的原型证明了其可行性，实验评估显示Shaduf提高了闪电网络在支付成功率和交易量方面的性能。此外，我们的协议显著减少了用户在通道中的存款量，同时保持了相同数量的支付量。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-254/](https://www.ndss-symposium.org/ndss-paper/auto-draft-254/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-203-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-203-paper.pdf)
## NC-Max: Breaking the Security-Performance Tradeoff in Nakamoto Consensus.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#nc-max-breaking-the-security-performance-tradeoff-in-nakamoto-consensus) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#nc-max-breaking-the-security-performance-tradeoff-in-nakamoto-consensus)**
### 作者
* Ren Zhang, Nervos
* Dingwei Zhang, Nervos
* Quake Wang, Nervos
* Shichen Wu, School of Cyber Science and Technology
### 摘要
> 首次在比特币中实施的中本聪共识（NC）尽管之后设计了各种替代协议，但它仍然是加密货币中最有影响力的共识协议。然而，NC陷入了安全性和性能之间的权衡困境。尽管现有的努力大多试图通过放弃或调整NC的基础协议来打破这种权衡，但我们相反地提出了网络层的相关性。我们确定并通过实验证明，关键问题在于尚未传播的交易导致的块传播延迟延长。因此，我们提出了一个两步机制，仅确认完全传播的交易，因此消除了NC性能上的限制，实现了NC的未开发潜力。通过实施这个两步机制，我们提出了NC-Max，对其进行了安全性分析，证明其对抗交易滞留攻击的能力比NC更强，并对其性能进行了评估，显示出它充分利用网络支持的吞吐量，并将交易确认延迟缩短了3.0至6.6倍，而不会危及安全。NC-Max已经在Nervos CKB上实现，该区块链是一个公开无许可的区块链。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-255/](https://www.ndss-symposium.org/ndss-paper/auto-draft-255/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-370-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-370-paper.pdf)
## Speeding Dumbo: Pushing Asynchronous BFT Closer to Practice.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#speeding-dumbo-pushing-asynchronous-bft-closer-to-practice) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#speeding-dumbo-pushing-asynchronous-bft-closer-to-practice)**
### 作者
* Bingyong Guo, Institute of Software
### 摘要
> 异步BFT共识可以在不依赖任何时间假设的情况下实现强大的关键任务分散服务网络。从HoneyBadgerBFT的工作(CCS 2016)开始，几项研究试图将异步BFT推向实践。在最近的一项Dumbo的工作(CCS 2020)中，他们重新设计了协议骨干，并使用了一个多值验证的拜占庭协议(MVBA)来替代n个并发异步二进制协议(ABA)，并显著提高了性能。尽管有这些努力，异步BFT协议仍然速度较慢，特别是延迟仍然相当大。导致性能较差的原因有两个：(1)可靠广播(RBC)协议仍然需要较大的成本；(2)MVBA协议相当复杂和重量级，所有现有的构造都需要几十个回合，并占据整体延迟的大部分。
> 
> 我们首先提出了一种新的异步BFT构造，用更便宜的广播组件替换RBC实例。它不仅将n个RBC产生的O(n^3)消息复杂度减少到O(n^2)，而且在存在公平网络调度器的情况下节省了多达67%的通信量。此外，我们的技术核心是一种新的MVBA协议，名为Speeding MVBA，它比所有现有的MVBAs都更有效。在最好情况下，它仅需要6轮，最坏情况下预计需要12轮（相比之下，Cachin等人的MVBA[12]和最近的Dumbo-MVBA[33]需要数十轮，Abraham等人的MVBA[4]需要大约20轮）。我们构造的新技术可能具有独立的研究兴趣。
> 
> 我们实现了Speeding Dumbo，并在全球范围内15个AWS区域均匀分配的高达150个EC2 t2.medium实例中进行了广泛的测试。实验结果表明，Speeding Dumbo将延迟减少了一半，并将吞吐量提高了一倍，从4个节点到150个节点的系统规模都适用。我们还对广播和MVBA协议等单独组件进行了测试，这可能对未来的改进感兴趣。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-256/](https://www.ndss-symposium.org/ndss-paper/auto-draft-256/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-385-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-385-paper.pdf)
## Preventing Kernel Hacks with HAKCs.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#preventing-kernel-hacks-with-hakcs) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#preventing-kernel-hacks-with-hakcs)**
### 作者
* Derrick McKee, Purdue University
* Yianni Giannaris, MIT CSAIL
* Carolina Ortega, MIT CSAIL
* Howard Shrobe, MIT CSAIL
* Mathias Payer, EPFL
* Hamed Okhravi, MIT Lincoln Laboratory
* Nathan Burow, MIT Lincoln Laboratory
### 摘要
> 商品操作系统内核出于实际和历史原因保持单体化。所有内核代码共享一个地址空间，以提升处理器权限执行，并且对所有数据（包括与特定任务无关的数据）具有广泛的访问权限。应用最小权限原则，仅将所需资源限制为执行特定任务所需的资源，以实现内核的分区，可实现类似于微内核的重大安全增益，但无需进行重大重新设计。在这里，我们介绍了一种称为硬件辅助内核分区（HAKC）的分区化设计，该设计近似于最小权限分离，同时将开发工作和性能开销降至最低。HAKC将代码和数据划分为单独的分区，并为每个分区指定访问策略。数据由单个分区拥有，并在运行时强制执行分区的访问控制策略，防止未经授权的数据访问。当分区需要将控制流传输到外部时，数据所有权被转移到目标，并在返回时转移回来。HAKC设计允许在分区化代码执行期间将代码和数据与内核的其余部分隔离，而无需使用任何额外的可信计算基础。相反，HAKC依赖硬件进行执行。可加载内核模块（LKMs）是Linux源代码库中最大的部分，它们动态加载内核代码和数据，提供专门的功能。不幸的是，它们的集体规模和复杂性使得LKMs成为Linux内核发布的大部分CVE的原因。在内核模块中存在大量的攻击面，再加上Linux内核的单体化设计，使得LKMs成为分区化的理想候选。为了证明我们方法的有效性，我们使用Arm v8.5-A ISA的扩展，在Linux v5.10中实现了HAKC，并将`ipv6.ko` LKM分区化，该模块包含超过55k行代码。在`Apachebench`测试中测得的平均开销仅为1.6%至24%。此外，我们将`nf_tables.ko`数据包过滤LKM进行分区化，并测量同时使用两个LKMs的组合影响。当使用分区化的`ipv6.ko` LKM进行实际网页浏览实验时，我们发现性能没有显著差异。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-257/](https://www.ndss-symposium.org/ndss-paper/auto-draft-257/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-26-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-26-paper.pdf)
## D-Box: DMA-enabled Compartmentalization for Embedded Applications.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#d-box-dma-enabled-compartmentalization-for-embedded-applications) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#d-box-dma-enabled-compartmentalization-for-embedded-applications)**
### 作者
* Alejandro Mera, Northeastern University
* Yi Hui Chen, Northeastern University
* Ruimin Sun, Northeastern University
* Engin Kirda, Northeastern University
* Long Lu, Northeastern University
### 摘要
> 嵌入式和物联网设备在许多领域中得到了广泛采用。由于这些设备经常用于控制关键基础设施、医疗设备和车辆，因此它们的安全性非常重要。现有的隔离微控制器资源以增强其安全性的解决方案面临着诸多挑战，如特定硬件缺乏、存储保护单元（MPU）的限制以及显著缺乏直接存储器访问（DMA）支持。然而，DMA对于嵌入式应用的功耗和性能要求是至关重要的。
> 
> 本文提出了D-Box，一种系统化方法，通过使用实时操作系统（RTOS）实现嵌入式应用的隔离化解决方案，以使DMA操作更加安全。D Box定义了一个参考架构和工作流程，以全面保护DMA操作。它提供了实际方法来加固内核，并定义基于能力的安全策略，以便轻松定义具有强安全性的DMA操作。我们在流行的FreeRTOS-MPU（F-MPU）之上实现了一个针对Cortex M3/M4的D-Box原型。与标准F-MPU相比，D-Box过程和更严格的安全模型在暴露ROP（返回取向编程）小工具方面减少了41倍。D-Box仅增加了2%的处理器开销，同时将外围操作基准的功耗降低了18.2%。D Box的安全性能在可编程逻辑控制器（PLC）应用的实际案例研究中得到了验证和确认。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-258/](https://www.ndss-symposium.org/ndss-paper/auto-draft-258/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-53-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-53-paper.pdf)
## Cross-Language Attacks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#cross-language-attacks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#cross-language-attacks)**
### 作者
* Samuel Mergendahl, MIT Lincoln Laboratory
* Nathan Burow, MIT Lincoln Laboratory
* Hamed Okhravi, MIT Lincoln Laboratory
### 摘要
> 针对像C/C++这样的不安全编程语言的内存破坏攻击长期以来一直对计算机系统构成了重大威胁。各种内存消毒器和运行时漏洞缓解技术只能提供部分保护。最近开发的像Rust和Go这样的“安全”编程语言通过使用强类型系统以及适当的编译时和运行时检查，承诺改变这种范式，防止内存破坏漏洞。逐步部署这些语言被标榜为在完全采用安全语言开发整个应用程序之前，提高现有应用程序安全性的一种方式。这在像Firefox和Tor这样的热门应用中尤为明显。在本文中，我们系统地分析了多语言应用程序的安全性。我们展示了安全语言中的语言安全检查和应用于不安全语言的漏洞缓解技术（例如，控制流完整性）在阻止控制劫持攻击过程中破坏不同阶段，这使得攻击者可以精心操纵不同语言之间，以实施成功攻击。实质上，我们说明了各种语言中所做的不兼容假设对攻击的影响，这是在每种单独语言中不可能实现的。我们研究了这些攻击的不同变体，并分析了Firefox以展示这个问题的可行性和范围。我们的研究结果表明，如果缺乏极度谨慎地进行逐步部署安全编程语言，可能会对安全性造成不利影响。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-259/](https://www.ndss-symposium.org/ndss-paper/auto-draft-259/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-78-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-78-paper.pdf)
## COOPER: Testing the Binding Code of Scripting Languages with Cooperative Mutation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#cooper-testing-the-binding-code-of-scripting-languages-with-cooperative-mutation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#cooper-testing-the-binding-code-of-scripting-languages-with-cooperative-mutation)**
### 作者
* Peng Xu, TCA/SKLCS
### 摘要
> 脚本语言如JavaScript被纳入商业软件中，以支持简单的文件修改。例如，Adobe Acrobat接受JavaScript动态操作PDF文件。为了弥补高级脚本语言与底层语言（如C/C++）之间的差距，需要使用绑定层来传输数据和转换表示。然而，由于两者的复杂性，绑定代码容易出现语义不一致和安全漏洞，从而导致严重的漏洞。现有的绑定代码测试工作仅侧重于脚本方面，因此会错过需要特殊程序本机输入的错误。
> 
> 在本文中，我们提出了合作突变（cooperative mutation）的方法，通过修改脚本代码和程序本机输入来触发绑定代码中的错误。我们的观点是，许多错误是由程序初始状态和动态操作之间的相互作用引起的，只能通过二维突变来触发。我们开发了三种新颖的技术，以实现对流行脚本语言的实际合作突变：首先，我们将对象聚类为具有相似语义的类，以减小本机输入的突变空间；然后，我们通过大量执行推断脚本代码与对象类之间的关系；最后，我们使用推断的关系选择适当的对象和相关脚本代码进行有针对性的突变。我们将我们的工具COOPER应用于三个集成脚本语言的流行系统，包括Adobe Acrobat、Foxit Reader和Microsoft Word。COOPER成功发现了134个先前未知的漏洞。我们已将所有漏洞报告给开发者。在论文发布时，已修复了59个漏洞，其中33个被分配了CVE编号。我们总共获得了22,000美元的奖励，用于17个已报告的漏洞。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-260/](https://www.ndss-symposium.org/ndss-paper/auto-draft-260/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-353-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-353-paper.pdf)
## Demystifying Local Business Search Poisoning for Illicit Drug Promotion.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#demystifying-local-business-search-poisoning-for-illicit-drug-promotion) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#demystifying-local-business-search-poisoning-for-illicit-drug-promotion)**
### 作者
* Peng Wang, Indiana University Bloomington
* Zilong Lin, Indiana University Bloomington
* Xiaojing Liao, Indiana University Bloomington
* XiaoFeng Wang, Indiana University Bloomington
### 摘要
> 一种新型地下非法药物推广方式，即在本地搜索服务（如本地知识面板、地图搜索、语音搜索）上发布非法药物业务清单，被不法分子越来越多地用于在互联网上广告和销售受控物质。不法分子利用问题上游本地数据经纪商对数据质量控制不严的特点，发布促进非法药物业务的清单。这种推广进而污染主要下游搜索提供商的知识库，并通过网络、地图和语音搜索传达给大量观众。据我们所知，迄今为止，很少有人对这种新型非法推广进行了范围、影响和技术方面的研究，更不用说寻找这种大规模的非法药物业务清单。在本文中，我们报道了对本地搜索服务上的非法药物业务清单进行的第一次测量研究。我们的发现揭示了脆弱且受监管较少的本地业务清单生态系统以及此类非法活动的普遍性，以及对本地搜索受众的影响。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-261/](https://www.ndss-symposium.org/ndss-paper/auto-draft-261/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-284-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-284-paper.pdf)
## Hazard Integrated: Understanding Security Risks in App Extensions to Team Chat Systems.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#hazard-integrated-understanding-security-risks-in-app-extensions-to-team-chat-systems) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#hazard-integrated-understanding-security-risks-in-app-extensions-to-team-chat-systems)**
### 作者
* Mingming Zha, Indiana University Bloomington
* Jice Wang, National Computer Network Intrusion Protection Center
### 摘要
> 团队聊天（TACT）系统现在被广泛用于在线协作和项目管理。这些系统的一个独特特性是它们集成了第三方应用，这扩展了它们的功能，但也增加了潜在的复杂性，可能会给TACT系统和终端用户带来风险。
> 
> 在本文中，我们首次证明了TACT系统中的第三方应用确实为新的安全风险敞开了大门，例如权限提升、欺骗和隐私泄露。我们研究了12个流行的TACT系统，按照第三方应用的生命周期关键步骤（安装、更新、配置和运行时操作）进行研究。值得注意的是，我们设计并实施了一个能够高效识别TA API安全风险的流水线，这是为了实现系统与应用的通信而提供的核心功能。
> 
> 我们的研究发现了12个平台上的55个安全问题，其中25个出现在安装和配置阶段，30个API存在风险或漏洞。这些安全漏洞主要是由于设计不当、缺乏细粒度的访问控制和模糊的数据访问策略引起的。我们向所有相关方报告了我们的发现，其中已经有8个得到了确认。虽然我们仍在与TACT供应商合作，以确定剩余漏洞的安全影响，但我们的用户研究已经确认了它们的重要性，进一步揭示了用户对主流TACT平台上一些安全策略和现有保护的误解。此外，我们与供应商的沟通表明，他们的威胁模型没有经过充分的思考，一些假设相互冲突。我们进一步提出了增强当今TACT系统安全性的建议。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-262/](https://www.ndss-symposium.org/ndss-paper/auto-draft-262/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-387-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-387-paper.pdf)
## Above and Beyond: Organizational Efforts to Complement U.S. Digital Security Compliance Mandates.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#above-and-beyond-organizational-efforts-to-complement-u-s-digital-security-compliance-mandates) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#above-and-beyond-organizational-efforts-to-complement-u-s-digital-security-compliance-mandates)**
### 作者
* Rock Stevens, University of Maryland
* Faris Bugra Kokulu, Arizona State University
* Adam Doupé, Arizona State University
* Michelle L. Mazurek, University of Maryland
### 摘要
> 要求提供电力、医疗保健和安全的金融交易等基本服务的组织，必须使用数字安全合规程序来建立最低安全基线。不幸的是，这些合规程序在写作和组织实施方面存在众多问题，导致组织需要采取自己的安全措施来填补实际或被认为是合规性缺口。在本研究中，我们对来自美国六个基本服务行业的40名安全专业人员进行调查，以了解组织如何通过补充合规性来修补被认为存在的安全缺口，哪些措施特别有效，以及他们的组织如何确定和评估所采取的措施。我们发现，组织经常补充合规性程序，其中有37位受访者确认他们的组织已经超出了他们认为是强制合规性措施的范围，以减轻其他未被解决的风险。虽然参与者普遍对这些被认为是互补措施持积极态度，但他们也报告了与管理不善、信息过载以及难以保持这些补充措施的最新性和相关性等挑战有关的问题。根据这些结果，我们建议合规标准直接整合指导，以便仔细管理和审计组织选择实施的任何被认为是互补措施，并且组织在实施这些措施之前需要进行端到端的部署和操作计划。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-263/](https://www.ndss-symposium.org/ndss-paper/auto-draft-263/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-107B-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-107B-paper.pdf)
## Fighting Fake News in Encrypted Messaging with the Fuzzy Anonymous Complaint Tally System (FACTS).
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#fighting-fake-news-in-encrypted-messaging-with-the-fuzzy-anonymous-complaint-tally-system-facts) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2022].md#fighting-fake-news-in-encrypted-messaging-with-the-fuzzy-anonymous-complaint-tally-system-facts)**
### 作者
* Linsheng Liu, George Washington University
* Daniel S. Roche, United States Naval Academy
* Austin Theriault, George Washington University
* Arkady Yerukhimovich, George Washington University
### 摘要
> 近年来，虚假信息通过在线平台的传播既普及化又产生了真实世界的后果。同时，WhatsApp、Signal和Telegram等加密通信系统由于用户在数字生活中追求更高隐私而迅速受到欢迎。
> 
> 我们面临的挑战是如何在不损害隐私的情况下对虚假信息的病毒式传播进行打击。我们的FACTS系统只在足够多的投诉被提出后，才会追踪用户对信息的投诉，并公开信息的内容和发起者。
> 
> 我们的系统是“私密”的，意味着它不会透露少数或没有投诉的信息的发件人或内容；“安全”的，意味着恶意用户无法规避系统或对投诉系统产生过大的影响；并且“可扩展”，因为我们证明了它在每天处理数百万个投诉时具有出色的实际效率。
> 
> 我们的主要技术贡献是一种新的协同计数布隆过滤器，这是一个简单的结构，具有困难的概率分析，作为保护隐私的随机计数草图数据结构，可能具有独立的兴趣。与端到端加密通信中的消息标记和追踪之前的工作相比，我们的新贡献是添加了需要多个投诉才能对消息进行审查或标记的高阈值。
> 
> 我们通过实验展示并仔细分析了我们的数据结构的概率性能，提供了精确的安全定义和证明，然后通过实验测量了我们方案的准确性和可扩展性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-264/](https://www.ndss-symposium.org/ndss-paper/auto-draft-264/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2022-109-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2022-109-paper.pdf)
