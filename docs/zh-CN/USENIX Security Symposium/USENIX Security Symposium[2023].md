# USENIX Security Symposium[2023]
## PhyAuth: Physical-Layer Message Authentication for ZigBee Networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#phyauth-physical-layer-message-authentication-for-zigbee-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#phyauth-physical-layer-message-authentication-for-zigbee-networks)**
### 作者
* Ang Li, Arizona State University
* Jiawei Li, Arizona State University
* Dianqi Han, University of Texas at Arlington
* Yan Zhang, The University of Akron
* Tao Li, Indiana University–Purdue University Indianapolis
* Ting Zhu, The Ohio State University
* Yanchao Zhang, Arizona State University
### 摘要
> ZigBee是物联网（IoT）网络中流行的无线通信标准。由于每个ZigBee网络都使用基于共同网络密钥的逐跳网络层消息认证，因此它非常容易受到数据包注入攻击的威胁。在这种攻击中，对手利用被攻破的网络密钥，从任意伪造的地址注入任意虚假数据包，从而破坏网络运行并耗尽网络/设备资源。本文介绍了一种名为PhyAuth的物理逐跳消息认证框架，用于防御ZigBee网络中的数据包注入攻击。PhyAuth的关键思想是让每个ZigBee发送器将一个物理一次性密码（称为POTP）嵌入到其物理信号中，该密码是由设备特定的密钥和高效的密码哈希函数派生而来。真实的POTP用作发送器对应数据包的物理传输权限。PhyAuth提供了三种基于ZigBee物理信号不同特征的POTP嵌入、检测和验证方案。此外，PhyAuth涉及轻量级的物理信号处理，且不对ZigBee协议栈进行任何更改。通过全面的USRP实验验证，证明了PhyAuth能够高效地检测到虚假数据包，且错误报警率和漏报率非常低，对正常数据传输几乎没有负面影响。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-ang](https://www.usenix.org/conference/usenixsecurity23/presentation/li-ang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-ang.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-ang.pdf)
## Time for Change: How Clocks Break UWB Secure Ranging.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#time-for-change-how-clocks-break-uwb-secure-ranging) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#time-for-change-how-clocks-break-uwb-secure-ranging)**
### 作者
* Claudio Anliker, ETH Zurich
* Giovanni Camurati, ETH Zurich
* Srdjan Čapkun, ETH Zurich
### 摘要
> 由于其适用于无线测距，超宽带(UWB)在过去几年中得到广泛应用。UWB芯片已经集成到消费电子产品中，并被考虑用于安全相关的用例，如门禁或非接触支付。然而，最近的几篇研究文章显示，在物理层上保护距离测量的准确性是困难的。在本文中，我们将发现收发器时钟不完美作为一个新的、重要的参数，这一参数在过去往往被忽视。我们提出了两种新攻击——Mix-Down和Stretch-and-Advance，分别针对当前的(IEEE 802.15.4z)和即将推出的(IEEE 802.15.4ab)UWB标准。我们在商业芯片上展示了Mix-Down攻击，并将距离减少到10米至0米。对于Stretch-and-Advance攻击，我们通过分析表明，IEEE 802.15.4ab的当前提案允许距离减少超过90米。为了防止这种攻击，我们提出并分析了一种有效的对策措施。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/anliker](https://www.usenix.org/conference/usenixsecurity23/presentation/anliker)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-anliker.pdf](https://www.usenix.org/system/files/usenixsecurity23-anliker.pdf)
## Formal Analysis and Patching of BLE-SC Pairing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#formal-analysis-and-patching-of-ble-sc-pairing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#formal-analysis-and-patching-of-ble-sc-pairing)**
### 作者
* Min Shi, Wuhan University
* Jing Chen, Wuhan University
* Kun He, Wuhan University
* Haoran Zhao, Wuhan University
* Meng Jia, Wuhan University
* Ruiying Du, Wuhan University
### 摘要
> 蓝牙低功耗（BLE）是主流的蓝牙标准，BLE安全连接（BLC-SC）配对是一种在两个蓝牙设备之间进行身份验证并派生共享密钥的协议。尽管BLE-SC配对采用了经过深入研究的密码学原语来保证其安全性，但最近的一项研究揭示了该协议中的逻辑缺陷。
> 
> 在本文中，我们开发了BLE-SC配对协议的首个全面形式化模型。我们的模型符合最新的蓝牙规范版本5.3，并覆盖了规范中的所有关联模型，以发现不同关联模型之间相互作用引起的攻击。我们还通过设计一个低熵密钥预言机，部分放宽了传统符号分析方法中完美密码学假设，以便检测由于密钥导出不当引起的攻击。我们的分析确认了两种已知的攻击，并揭示了一种新攻击。我们提出了一种修复BLE-SC配对协议中发现的漏洞的对策，并讨论了向后兼容性。此外，我们扩展了我们的模型以验证对策，结果证明了其在扩展模型中的有效性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shi-min](https://www.usenix.org/conference/usenixsecurity23/presentation/shi-min)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shi-min.pdf](https://www.usenix.org/system/files/usenixsecurity23-shi-min.pdf)
## Framing Frames: Bypassing Wi-Fi Encryption by Manipulating Transmit Queues.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#framing-frames-bypassing-wi-fi-encryption-by-manipulating-transmit-queues) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#framing-frames-bypassing-wi-fi-encryption-by-manipulating-transmit-queues)**
### 作者
* Domien Schepers, Northeastern University
* Aanjhan Ranganathan, Northeastern University
* Mathy Vanhoef, imec-DistriNet, KU Leuven
### 摘要
> Wi-Fi设备在传输前通常会将网络堆栈的各个层级的帧进行排队，比如当接收器处于睡眠模式时。在这项研究中，我们调查了Wi-Fi接入点如何管理排队帧的安全上下文。通过利用省电功能，我们展示了如何欺骗接入点以泄露用明文或使用组密钥或全零密钥加密的帧。我们对几个开源网络堆栈进行了攻击演示。我们将我们的发现归因于802.11标准中缺乏明确指导来管理缓冲帧的安全上下文。帧头中省电位的不受保护性质成为了我们研究揭示的基本设计缺陷，这也使得对手可以强制排队面向特定客户端的帧，导致其断开连接并轻易地执行拒绝服务攻击。此外，我们展示了攻击者如何覆盖和控制尚未排队的帧的安全上下文。这利用了热点网络中的设计缺陷，使攻击者能够强制访问点使用对手选择的密钥加密尚未排队的帧，从而完全绕过Wi-Fi加密。我们的攻击具有广泛的影响，因为它们影响各种设备和操作系统（Linux，FreeBSD，iOS和Android），并且可以用于劫持TCP连接或拦截客户端和网络流量。总体而言，我们强调了在处理网络堆栈层级中的安全上下文时的透明性需求以及其中的挑战。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/schepers](https://www.usenix.org/conference/usenixsecurity23/presentation/schepers)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-schepers.pdf](https://www.usenix.org/system/files/usenixsecurity23-schepers.pdf)
## Abuse Vectors: A Framework for Conceptualizing IoT-Enabled Interpersonal Abuse.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#abuse-vectors-a-framework-for-conceptualizing-iot-enabled-interpersonal-abuse) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#abuse-vectors-a-framework-for-conceptualizing-iot-enabled-interpersonal-abuse)**
### 作者
* Sophie Stephenson, University of Wisconsin--Madison
* Majed Almansoori, University of Wisconsin--Madison
* Pardis Emami-Naeini, Duke University
* Danny Yuxing Huang, New York University
* Rahul Chatterjee, University of Wisconsin--Madison
### 摘要
> 科技与人际关系暴力（IPA）是一个普遍存在的问题。施虐者，通常是近距离关系的伴侣，使用间谍软件等工具来监视和骚扰受害者。不幸的是，一些个案证据表明，智能、连接互联网的设备，如家庭恒温器、摄像头和蓝牙物品定位器，同样可能被用于对IPA受害者进行攻击。为了解决涉及智能设备的滥用问题，我们必须了解支持IPA的智能设备生态系统。因此，在这项研究中，我们进行了大规模的定性分析，研究了在IPA中使用的智能设备。我们系统地爬取谷歌搜索结果，揭示了讨论施虐者如何利用智能设备实施IPA的网页。通过分析这些网页，我们确定了32种用于IPA的设备，并详细描述了施虐者通过这些设备进行监视和骚扰的各种策略。然后，我们设计了一个简单但强大的框架——滥用向量，将物联网启用的IPA概念化为四个主要模式：隐蔽监视、未经授权访问、重新利用和预期使用。通过这个视角，我们可以指出解决物联网滥用的各个向量所需的必要解决方案，并鼓励安全社区采取行动。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/stephenson-vectors](https://www.usenix.org/conference/usenixsecurity23/presentation/stephenson-vectors)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-stephenson-vectors.pdf](https://www.usenix.org/system/files/usenixsecurity23-stephenson-vectors.pdf)
## The Digital-Safety Risks of Financial Technologies for Survivors of Intimate Partner Violence.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-digital-safety-risks-of-financial-technologies-for-survivors-of-intimate-partner-violence) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-digital-safety-risks-of-financial-technologies-for-survivors-of-intimate-partner-violence)**
### 作者
* Rosanna Bellini, Cornell University
* Kevin Lee, Princeton University
* Megan A. Brown, Center for Social Media and Politics, New York University
* Jeremy Shaffer, Cornell University
* Rasika Bhalerao, Northeastern University
* Thomas Ristenpart, Cornell Tech
### 摘要
> 数字技术在加剧亲密伴侣暴力（IPV）幸存者的经济虐待中发挥着日益重要的作用。虽然IPV的施虐者很少使用超出标准用户界面互动范围的高级技术攻击，但鲜有研究探讨面向消费者的金融技术如何在幸存者的财务福祉方面促进或阻碍与IPV相关的攻击。通过对13款移动银行和17款点对点支付智能手机应用及其相关使用政策进行审计，我们模拟了IPV对手常用的近距离和远程攻击。我们发现移动银行和点对点支付应用通常不具备应对用户界面相关对手的能力，容许未经授权的登录访问、秘密监视以及骚扰信息和系统提示。为了评估我们的发现，我们采访了12名金融专业人员，他们提供或监督容易受到伤害客户的前线服务。虽然专业人员对实施缓解策略表示了兴趣，但他们也强调了机构应对亲密威胁的障碍，并质疑数字安全的专业责任。最后，我们提出了关于数字金融服务提供商如何更好地应对用户界面相关威胁的建议，并为技术促进的滥用的专业审计和评估方法提供了更广泛的考虑。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bellini](https://www.usenix.org/conference/usenixsecurity23/presentation/bellini)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-bellini.pdf](https://www.usenix.org/system/files/usenixsecurity23-bellini.pdf)
## "It's the Equivalent of Feeling Like You're in Jail": Lessons from Firsthand and Secondhand Accounts of IoT-Enabled Intimate Partner Abuse.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#its-the-equivalent-of-feeling-like-youre-in-jail-lessons-from-firsthand-and-secondhand-accounts-of-iot-enabled-intimate-partner-abuse) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#its-the-equivalent-of-feeling-like-youre-in-jail-lessons-from-firsthand-and-secondhand-accounts-of-iot-enabled-intimate-partner-abuse)**
### 作者
* Sophie Stephenson, University of Wisconsin—Madison
* Majed Almansoori, University of Wisconsin—Madison
* Pardis Emami-Naeini, Duke University
* Rahul Chatterjee, University of Wisconsin—Madison
### 摘要
> 面临新的技术威胁: 受害者幸存者(即遭受亲密伴侣暴力的受害者)正面临着物联网(IoT)设备的滥用。施暴者利用智能恒温器、隐藏摄像头和GPS跟踪器等物联网设备来监视和骚扰受害者幸存者。尽管以前的研究为物联网设备可能涉及亲密伴侣暴力提供了基础，但我们缺乏对导致这种物联网滥用的因素、受害者幸存者用于缓解物联网滥用的策略以及他们面临的障碍的详细了解。没有这些信息，设计有效的解决方案来阻止物联网滥用是具有挑战性的。
> 
> 为了填补这一空白，我们采访了20位具有第一手或第二手物联网滥用经历的参与者。我们的访谈记录了39个不同种类的物联网滥用实例，从使用隐藏GPS跟踪器进行监视到使用智能恒温器和灯泡进行骚扰。我们还发现受害者幸存者在应对物联网滥用时面临21个关键障碍。例如，受害者幸存者很难找到物联网滥用的证据，这使得缓解措施具有挑战性。即使有证据，受害者幸存者在缓解滥用方面也面临障碍；例如，与施暴者同居的受害者幸存者几乎不可能采取缓解措施。我们的发现指出了多个解决物联网滥用的方案，包括增加物联网设备的透明度，更新物联网访问控制协议，并提高对物联网滥用的认识。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/stephenson-lessons](https://www.usenix.org/conference/usenixsecurity23/presentation/stephenson-lessons)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-stephenson-lessons.pdf](https://www.usenix.org/system/files/usenixsecurity23-stephenson-lessons.pdf)
## Sneaky Spy Devices and Defective Detectors: The Ecosystem of Intimate Partner Surveillance with Covert Devices.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#sneaky-spy-devices-and-defective-detectors-the-ecosystem-of-intimate-partner-surveillance-with-covert-devices) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#sneaky-spy-devices-and-defective-detectors-the-ecosystem-of-intimate-partner-surveillance-with-covert-devices)**
### 作者
* Rose Ceccio, University of Wisconsin—Madison
* Sophie Stephenson, University of Wisconsin—Madison
* Varun Chadha, Capital One
* Danny Yuxing Huang, New York University
* Rahul Chatterjee, University of Wisconsin—Madison
### 摘要
> 最近的个案证据表明虐待者已经开始使用隐秘的间谍设备，如保姆摄像头、物品跟踪器和音频记录器，来监视和跟踪他们的伴侣。目前，要对抗这种类型的亲密伴侣监视（IPS）十分困难，因为我们对商用间谍设备的普遍性和特征缺乏了解。此外，现有的用于检测隐秘设备的设备、应用和工具是否有效也不清楚。我们观察到许多间谍设备和探测器可以在主流零售商找到。因此，在这项研究中，我们对通过美国热门零售商销售的间谍设备和检测工具进行了系统调查。我们收集了2,228个间谍设备、1,313个探测设备和51个探测应用，然后通过定性分析和实验室评估对代表性样本进行了研究。
> 
> 我们的结果显示了亲密伴侣监视生态系统的惨淡景象。商用间谍设备不仅可以轻易用于亲密伴侣监视，而且很多设备都被宣传为在亲密伴侣监视和其他隐秘监视中使用。另一方面，商用探测设备和应用几乎都是不可靠的，尽管最近的学术探测系统显示出一些希望，但它们需要经过大量改进才能对幸存者有用。我们敦促安全社区行动起来，设计实用、易用的探测工具来检测隐藏的间谍设备。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ceccio](https://www.usenix.org/conference/usenixsecurity23/presentation/ceccio)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ceccio.pdf](https://www.usenix.org/system/files/usenixsecurity23-ceccio.pdf)
## Towards a General Video-based Keystroke Inference Attack.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#towards-a-general-video-based-keystroke-inference-attack) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#towards-a-general-video-based-keystroke-inference-attack)**
### 作者
* Zhuolin Yang, University of Chicago
* Yuxin Chen, University of Chicago
* Zain Sarwar, University of Chicago
* Hadleigh Schwartz, Columbia University
* Ben Y. Zhao, University of Chicago
* Haitao Zheng, University of Chicago
### 摘要
> 大量的研究文献集合已经确定了使用统计模型提取键盘上输入内容的按键推测攻击的隐私风险。然而现有攻击在实际环境中无法运行，并且依赖于标记的训练数据，键盘布局信息，精心放置的传感器或其他边信道的数据的强假设。本文描述了开发和评估一个一般性基于视频的按键推测攻击的经验，该攻击可在常见的公共环境中使用单一普通相机手机操作，无需预训练、键盘知识、本地传感器和边信道。我们展示了使用自监督方法，可以处理视频中的嘈杂的手指跟踪数据，对其进行标记和过滤，以训练能够在同一视频上准确操作的DNN按键推测模型。通过经过IRB批准的用户研究，我们验证了在各种环境、键盘和内容以及具有不同打字行为和能力的用户中的攻击效果。我们的项目网站位于：https://sandlab.cs.uchicago.edu/keystroke/.

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yang-zhuolin](https://www.usenix.org/conference/usenixsecurity23/presentation/yang-zhuolin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yang-zhuolin.pdf](https://www.usenix.org/system/files/usenixsecurity23-yang-zhuolin.pdf)
## Going through the motions: AR/VR keylogging from user head motions.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#going-through-the-motions-ar-vr-keylogging-from-user-head-motions) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#going-through-the-motions-ar-vr-keylogging-from-user-head-motions)**
### 作者
* Carter Slocum, University of California, Riverside
* Yicheng Zhang, University of California, Riverside
* Nael Abu-Ghazaleh, University of California, Riverside
* Jiasi Chen, University of California, Riverside
### 摘要
> 增强现实（AR）/虚拟现实（VR）是继个人电脑和移动设备之后普适计算发展的下一步。AR/VR的应用不断增加，包括教育和虚拟工作空间，增加了用户输入私密文本（如密码或敏感企业信息）的机会。在这项工作中，我们展示了前台输入文本被后台应用推测的严重安全风险，而无需任何特殊权限。关键洞察是用户在虚拟键盘上输入时，头部会以微妙的方式移动，这些运动信号足以推断用户所输入的文本。我们开发了一个名为TyPose的系统，提取这些信号并自动推测受害者输入的单词或字符。一旦传感器信号被收集，TyPose使用机器学习对时间上的运动信号进行分割，确定单词/字符边界，并对单词/字符本身进行推断。我们在商用AR/VR头戴设备上进行了实验评估，证明了这种攻击的可行性，无论是在使用多个用户数据进行训练的情况下（82%的前五词分类准确性），还是选定特定受害者的个性化攻击情况下（92%的前五词分类准确性）。我们还展示了降低采样率或头部追踪精度的第一防线是无效的，这表明需要更复杂的缓解措施。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/slocum](https://www.usenix.org/conference/usenixsecurity23/presentation/slocum)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-slocum.pdf](https://www.usenix.org/system/files/usenixsecurity23-slocum.pdf)
## Auditory Eyesight: Demystifying μs-Precision Keystroke Tracking Attacks on Unconstrained Keyboard Inputs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#auditory-eyesight-demystifying-s-precision-keystroke-tracking-attacks-on-unconstrained-keyboard-inputs) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#auditory-eyesight-demystifying-s-precision-keystroke-tracking-attacks-on-unconstrained-keyboard-inputs)**
### 作者
* Yazhou Tu, University of Louisiana at Lafayette
* Liqun Shan, University of Louisiana at Lafayette
* Md Imran Hossen, University of Louisiana at Lafayette
* Sara Rampazzi, University of Florida
* Kevin Butler, University of Florida
* Xiali Hei, University of Louisiana at Lafayette
### 摘要
> 在系统登录、撰写电子邮件、文件和表格等各种场景中，键盘输入携带有吸引人的数据，例如密码、地址和身份证号码。由于常见的非字母输入、标点符号和输入错误，用户的自然输入很少只包含限制性的纯字母键盘输入。本研究探讨了如何利用听觉界面揭示不受限制的键盘输入。
> 
> 音频界面并不具备像摄像头那样的光传感器功能，能够识别紧密排列的键。我们的分析显示，有效区分这些键可能需要对键击声音的定位精度达到微秒级别的范围。本研究：（1）探索了音频界面区分按键的限制，（2）提出了基于微秒级定制信号处理和分析的按键跟踪方法，考虑到了机械物理和键击声音测量的不完善性，（3）对不受限制的键盘输入进行了首次声学侧信道攻击研究，这些输入不仅仅是纯字母键盘输入，也不一定遵循给定字典或训练数据集中已知的序列，（4）揭示了无需视觉传感器的非直线视线键击声音跟踪的威胁。我们的结果表明，在不依赖视觉传感器的情况下，利用分辨率有限的音频界面进行攻击可以以相当敏锐和可弯曲的“听觉视力”揭示键盘的不受限制输入。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/tu](https://www.usenix.org/conference/usenixsecurity23/presentation/tu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-tu.pdf](https://www.usenix.org/system/files/usenixsecurity23-tu.pdf)
## Watch your Watch: Inferring Personality Traits from Wearable Activity Trackers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#watch-your-watch-inferring-personality-traits-from-wearable-activity-trackers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#watch-your-watch-inferring-personality-traits-from-wearable-activity-trackers)**
### 作者
* Noé Zufferey, University of Lausanne, Switzerland
* Mathias Humbert, University of Lausanne, Switzerland
* Romain Tavenard, University of Rennes, CNRS, LETG, France
* Kévin Huguenin, University of Lausanne, Switzerland
### 摘要
> 可穿戴设备，如可穿戴活动监测器（WATs），正越来越受欢迎。尽管它们可以帮助改善人们的生活质量，但也引发了严重的隐私问题。最近一个特别敏感的信息类型受到了广泛关注，即个性，因为它提供了影响个体（例如，剑桥分析丑闻中的选民）的手段。本文首次提出了一项经验证实的研究，展示了WATs数据和人格特质（大五人格特质）之间存在显著相关性。我们对200多名参与者进行了一项实验。通过使用NEO-PI-3问卷建立了真实性。参与者的步数、心率、电池电量、活动、睡眠时间等数据在四个月内进行了收集。通过遵循一种有原则的机器学习方法，我们对参与者的个性隐私进行了量化。我们的研究结果表明，WATs数据为推断开放性、外向性和神经质人格特质提供了有价值的信息。我们进一步研究了不同特征（即数据类型）的重要性，并发现步数在推断外向性和神经质方面起着关键作用，而开放性与心率更相关。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zufferey](https://www.usenix.org/conference/usenixsecurity23/presentation/zufferey)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zufferey.pdf](https://www.usenix.org/system/files/usenixsecurity23-zufferey.pdf)
## Squint Hard Enough: Attacking Perceptual Hashing with Adversarial Machine Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#squint-hard-enough-attacking-perceptual-hashing-with-adversarial-machine-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#squint-hard-enough-attacking-perceptual-hashing-with-adversarial-machine-learning)**
### 作者
* Jonathan Prokos, Johns Hopkins University
* Neil Fendley, Johns Hopkins University Applied Physics Laboratory
* Matthew Green, Johns Hopkins University
* Roei Schuster, Vector Institute
* Eran Tromer, Tel Aviv University and Columbia University
* Tushar Jois, Johns Hopkins University
* Yinzhi Cao, Johns Hopkins University
### 摘要
> 许多在线通信系统使用感知哈希匹配系统来检测用户内容中的非法文件。这些系统采用了一些专门的感知哈希函数，例如微软的PhotoDNA或Facebook的PDQ，用于生成图像文件的简洁摘要，该摘要可以与已知非法内容的数据库进行比较。最近，有几个提议建议在客户端和端到端加密（E2EE）系统中整合基于哈希的匹配系统：在这些设计中，被识别为非法内容的文件将向提供者报告，而其余内容将会被保密发送。通过使用感知哈希来确定保密性保证，这个新的设置显著改变了现有感知哈希的功能-因此有必要从对抗性的角度评估这些函数，利用它们对感知的能力对抗它们。例如，攻击者可能试图触发对无害但涉政的内容的匹配，以扼杀言论。
> 
> 在这项工作中，我们在对抗性环境中为感知哈希算法建立了威胁模型，并对两种最广泛使用的算法-PhotoDNA和PDQ进行了攻击。我们的结果表明，可以有效地生成目标第二像攻击，即攻击者创建某个源图像的变体，与某个目标摘要匹配。作为对此主要结果的补充，我们还进一步研究了生成有助于检测规避攻击的图像，延续了Jain等人最近的研究。我们的工作表明，现有的感知哈希函数很可能无法经受住针对这个新情景的攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/prokos](https://www.usenix.org/conference/usenixsecurity23/presentation/prokos)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-prokos.pdf](https://www.usenix.org/system/files/usenixsecurity23-prokos.pdf)
## How to Cover up Anomalous Accesses to Electronic Health Records.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#how-to-cover-up-anomalous-accesses-to-electronic-health-records) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#how-to-cover-up-anomalous-accesses-to-electronic-health-records)**
### 作者
* Xiaojun Xu, University of Illinois at Urbana-Champaign
* Qingying Hao, University of Illinois at Urbana-Champaign
* Zhuolin Yang, University of Illinois at Urbana-Champaign
* Bo Li, University of Illinois at Urbana-Champaign
* David Liebovitz, Northwestern University
* Gang Wang, University of Illinois at Urbana-Champaign
* Carl A. Gunter, University of Illinois at Urbana-Champaign
### 摘要
> 医院日志中的非法访问检测系统执行事后检测而非运行时访问限制，以允许在紧急情况下广泛访问。我们研究了对一家主要医院一年的访问日志数据集进行大规模对抗机器学习策略的有效性。我们研究了一系列基于图的异常检测系统，包括基于启发式和图神经网络（GNN）的模型。我们发现，伪装攻击（即在目标访问的评估期间注入覆盖访问，以掩盖目标访问）可以成功欺骗检测系统。我们还展示了这种伪装攻击可以在不同的检测算法之间传递。另一方面，我们发现，在模型的训练阶段中，敌对方注入覆盖访问的中毒攻击无法有效地误导经过训练的检测系统，除非攻击者具有不切实际的能力，例如注入超过10,000个访问或在训练算法中对覆盖访问赋予较高的权重。为了验证结果的普遍性，我们还对LANL网络横向移动数据集中的最先进检测模型应用了我们的攻击，并得出了类似的结论。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xu-xiaojun](https://www.usenix.org/conference/usenixsecurity23/presentation/xu-xiaojun)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xu-xiaojun.pdf](https://www.usenix.org/system/files/usenixsecurity23-xu-xiaojun.pdf)
## KENKU: Towards Efficient and Stealthy Black-box Adversarial Attacks against ASR Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#kenku-towards-efficient-and-stealthy-black-box-adversarial-attacks-against-asr-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#kenku-towards-efficient-and-stealthy-black-box-adversarial-attacks-against-asr-systems)**
### 作者
* Xinghui Wu, Xi'an Jiaotong University
* Shiqing Ma, University of Massachusetts Amherst
* Chao Shen, Xi'an Jiaotong University
* Chenhao Lin, Xi'an Jiaotong University
* Qian Wang, Wuhan University
* Qi Li, Tsinghua University
* Yuan Rao, Xi'an Jiaotong University
### 摘要
> 先前研究表明，现有的自动语音识别（ASR）系统容易受到对抗性示例的攻击。大多数现有的对抗性攻击ASR系统的方法要么是白盒的，要么是灰盒的，限制了它们在现实世界中的实际应用。一些黑盒攻击也需要假设对输出概率向量的了解来推断输出分布。其他黑盒攻击利用低效的繁重过程，例如训练辅助模型或估计梯度。此外，它们需要特定于输入的手动超参数调整以提高对特定ASR系统的攻击成功率。尽管经过了这样的重度调整过程，但生成的对抗性示例中近乎甚至超过一半对人类来说是可察觉的。
> 
> 本文设计了一个高效而隐秘的黑盒对抗攻击框架KENKU，用于攻击ASR系统，支持隐藏语音命令和集成命令攻击。它基于Mel频率倒谱系数（MFCC）优化了新颖的声学特征损失和扰动损失。这两个损失值可以在本地计算，避免了训练辅助模型或估计梯度，从而使攻击更加高效。此外，我们在优化中引入了一个超参数，自动平衡攻击效果和隐蔽性。KENKU使用二分搜索算法找到其最优值。我们在八个真实系统上评估了我们的原型（包括五个数字系统和三个物理系统），并将KENKU与五个最先进的作品进行了比较。结果显示，KENKU在攻击性能上超过了现有的作品。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wu-xinghui](https://www.usenix.org/conference/usenixsecurity23/presentation/wu-xinghui)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wu-xinghui.pdf](https://www.usenix.org/system/files/usenixsecurity23-wu-xinghui.pdf)
## Tubes Among Us: Analog Attack on Automatic Speaker Identification.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#tubes-among-us-analog-attack-on-automatic-speaker-identification) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#tubes-among-us-analog-attack-on-automatic-speaker-identification)**
### 作者
* Shimaa Ahmed, University of Wisconsin-Madison
* Yash Wani, University of Wisconsin-Madison
* Ali Shahin Shamsabadi, Alan Turing Institute
* Mohammad Yaghini, University of Toronto and Vector Institute
* Ilia Shumailov, Vector Institute and University of Oxford
* Nicolas Papernot, University of Toronto and Vector Institute
* Kassem Fawaz, University of Wisconsin-Madison
### 摘要
> 近年来，随着机器学习技术推动的声学技术个人设备的普及，人们对其越来越感兴趣。然而，机器学习却被证明对对抗性样本具有脆弱性。现代系统中的大量机制都是通过针对人为因素来保护自身免受此类攻击的，即它们会部署机制来检测在生成对抗性样本过程中缺乏人类参与的痕迹。然而，这些防御措施隐含地假设人类无法产生具有意义和有针对性的对抗性样本。本文中，我们展示了这种基本假设是错误的。具体来说，我们证明对于诸如说话人识别之类的任务，人类能够直接以较低的成本和监督产生类似对抗性样本的模拟物：只需通过一个管子说话，对手就能可靠地冒充其他说话人，使机器学习模型在说话人识别中将其误认为其他说话人。我们的研究结果还适用于一系列其他声学生物特征任务，如活体检测，这引发了对它们在现实中安全关键场景（如电话银行）中使用的质疑。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ahmed-shimaa](https://www.usenix.org/conference/usenixsecurity23/presentation/ahmed-shimaa)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ahmed-shimaa.pdf](https://www.usenix.org/system/files/usenixsecurity23-ahmed-shimaa.pdf)
## Efficient Unbalanced Private Set Intersection Cardinality and User-friendly Privacy-preserving Contact Tracing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#efficient-unbalanced-private-set-intersection-cardinality-and-user-friendly-privacy-preserving-contact-tracing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#efficient-unbalanced-private-set-intersection-cardinality-and-user-friendly-privacy-preserving-contact-tracing)**
### 作者
* Mingli Wu, The University of Hong Kong
* Tsz Hon Yuen, The University of Hong Kong
### 摘要
> 不平衡的私有集合交集基数（PSI-CA）协议是一种安全地获取两个集合X和Y的交集基数，而不泄露其他信息的协议，其中|Y| < |X|。在本文中，我们提出了基于完全同态加密（FHE）的高效不平衡PSI-CA协议。为了处理PSI-CA协议中的长项目问题，我们发明了两种技术：虚拟布隆过滤器和多项式链接。前者可以将一个长项目编码为几个独立的较短项目。后者将每个长项目分割为较短的片段，并在它们之间建立链接。
> 
> 我们基于FHE的不平衡PSI-CA协议具有最低的通信复杂度O（|Y|log（|X|），比现有的平衡PSI-CA协议O（|Y|+|X|）便宜得多。当|X|=228， |Y|=2048时，我们的协议比最佳平衡PSI-CA协议便宜172× ∼ 412×。我们的协议可以轻松修改为不平衡PSI协议。与Cong等人（CCS'21）相比，我们的一个不平衡PSI协议可以节省42.04% ∼ 58.85%的通信成本并加快接收方的查询时间。
> 
> 我们将我们的轻量级不平衡PSI-CA协议应用于设计一个保护隐私的接触追踪系统。我们证明了我们的系统在安全性和性能方面优于现有方案。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wu-mingli](https://www.usenix.org/conference/usenixsecurity23/presentation/wu-mingli)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wu-mingli.pdf](https://www.usenix.org/system/files/usenixsecurity23-wu-mingli.pdf)
## Near-Optimal Oblivious Key-Value Stores for Efficient PSI, PSU and Volume-Hiding Multi-Maps.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#near-optimal-oblivious-key-value-stores-for-efficient-psi-psu-and-volume-hiding-multi-maps) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#near-optimal-oblivious-key-value-stores-for-efficient-psi-psu-and-volume-hiding-multi-maps)**
### 作者
* Alex, New York University
* er Bienstock, New York University
* Sarvar Patel, Google
* Joon Young Seo, Google
* Kevin Yeo, Google and Columbia University
### 摘要
> 在这篇论文中，我们研究了能够将n个键值对编码成长度为m的编码的无意识键值存储（OKVS），同时隐藏输入键。我们的目标是通过高效的编码和解码算法获得高比率n/m。我们提出了基于随机带状矩阵的RB-OKVS，可以获得近乎最优的比率，最高可达0.97，而之前的研究只能在类似的编码时间中实现最高0.81的比率。
> 
> 通过使用RB-OKVS，我们实现了最先进的私人集合交集（PSI）和并集（PSU）协议。我们的半诚实PSI在通信方面可以减少高达12％，在货币成本方面可以减少13％，但计算量稍微增加。我们还在恶意和电路PSI方面获得了类似的改进。对于PSU，我们的协议在通信方面可以提高高达22％，在计算方面可以提高40％，在货币成本方面可以提高21％。总的来说，我们得到了所有上述基本原语中最有效的通信和成本协议。
> 
> 最后，我们首次提出了OKVS和隐藏容量的加密多映射（VH-EMM）之间的联系，其中目标是隐藏每个键相关联的值的数量（即容量）并外包存储多映射。我们提出了RB-MM，存储更小，查询速度提高5倍，建立速度提高8倍，比之前的工作更优秀。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bienstock](https://www.usenix.org/conference/usenixsecurity23/presentation/bienstock)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-bienstock.pdf](https://www.usenix.org/system/files/usenixsecurity23-bienstock.pdf)
## Distance-Aware Private Set Intersection.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#distance-aware-private-set-intersection) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#distance-aware-private-set-intersection)**
### 作者
* Anrin Chakraborti, Duke University
* Giulia Fanti, Carnegie Mellon University
* Michael K. Reiter, Duke University
### 摘要
> 私人集合交集（PSI）允许两个彼此不信任的参与方计算它们的集合交集，而不会透露不属于交集的项目的信息。本研究介绍了一种称为距离感知PSI（DA-PSI）的PSI变体，适用于元素位于度量空间中的集合。 DA-PSI返回彼此之间距离小于指定阈值的项目对。本文提出了两种度量空间的DA-PSI构建方法：（i）整数集合上的Minkowski距离（即，对于整数a和b，它们的距离是|a−b|）；以及（ii）长度为ℓ的二进制字符串集合上的汉明距离。在Minkowski DA-PSI协议中，通信复杂度在距离阈值上以对数比例增长，而在集合大小上以线性比例增长。在Hamming DA-PSI协议中，通信量在距离阈值上以平方比例增长，并且与字符串长度ℓ的维数无关。与真实应用的实验结果证实，DA-PSI相对于朴素解决方案提供了更有效的匹配，成本更低。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chakraborti-intersection](https://www.usenix.org/conference/usenixsecurity23/presentation/chakraborti-intersection)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chakraborti-intersection.pdf](https://www.usenix.org/system/files/usenixsecurity23-chakraborti-intersection.pdf)
## Linear Private Set Union from Multi-Query Reverse Private Membership Test.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#linear-private-set-union-from-multi-query-reverse-private-membership-test) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#linear-private-set-union-from-multi-query-reverse-private-membership-test)**
### 作者
* Cong Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
* Yu Chen, School of Cyber Science and Technology, Shandong University; State Key Laboratory of Cryptology; Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University
* Weiran Liu, Alibaba Group
* Min Zhang, School of Cyber Science and Technology, Shandong University; State Key Laboratory of Cryptology; Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University
* Dongdai Lin, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
### 摘要
> 私人集合并（Private set union，简称PSU）协议使得两个拥有集合的参与方能够计算它们的并集，而双方之间不会透露其他任何信息。到目前为止，已经有两种构建PSU协议的已知方法。第一种主要依赖加法同态加密（Additively Homomorphic Encryption，简称AHE），但由于需要对每个元素执行非常数量的同态计算，一般效率较低。第二种主要基于遗忘传输（oblivious transfer）和对称密钥操作，是由Kolesnikov等人于2019年提出的（ASIACRYPT 2019）。这种方法在实践中表现良好，速度比第一种高出数个数量级。然而，这两种方法都不是最优的，因为它们的计算和通信复杂度都不能同时达到O(n)，其中n为集合的大小。因此，构建最优PSU协议的问题仍然是一个未解决的问题。
> 
> 在本研究中，我们通过提出一个由遗忘传输和一个新引入的名为多查询反向私有成员测试（multi-query reverse private membership test，简称mq-RPMT）的协议的通用框架，解决了这个未解决的问题。我们提出了两种mq-RPMT的通用构建方法。第一种基于对称密钥加密和通用的二方计算（2PC）技术。第二种基于可重新加密公钥加密。这两种构建方法都能实现具有线性计算和通信复杂度的PSU。
> 
> 我们实现了这两个PSU协议，并将它们与现有的最先进的PSU进行了比较。实验证明，我们基于公钥加密的协议具有最低的通信量，相对于集合大小而言，可以降低3.7-14.8倍。我们的PSU方案的运行时间比现有的方案快1.2-12倍，具体取决于网络环境。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-cong](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-cong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-cong.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-cong.pdf)
## Auditing Frameworks Need Resource Isolation: A Systematic Study on the Super Producer Threat to System Auditing and Its Mitigation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#auditing-frameworks-need-resource-isolation-a-systematic-study-on-the-super-producer-threat-to-system-auditing-and-its-mitigation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#auditing-frameworks-need-resource-isolation-a-systematic-study-on-the-super-producer-threat-to-system-auditing-and-its-mitigation)**
### 作者
* Peng Jiang, MOE Key Lab of HCST, School of Computer Science, Peking University
* Ruizhe Huang, MOE Key Lab of HCST, School of Computer Science, Peking University
* Ding Li, MOE Key Lab of HCST, School of Computer Science, Peking University
* Yao Guo, MOE Key Lab of HCST, School of Computer Science, Peking University
* Xiangqun Chen, MOE Key Lab of HCST, School of Computer Science, Peking University
* Jianhai Luan, Huawei Technologies
* Yuxin Ren, Huawei Technologies
* Xinwei Hu, Huawei Technologies
### 摘要
> 系统审计是检测高级持续性威胁（APT）攻击的关键技术。然而，攻击者可能会试图破坏系统审计框架来隐藏其恶意活动。本文针对审计框架中的超级生产者威胁进行了全面而系统的研究，该威胁使攻击者能够破坏审计框架或使整个系统瘫痪。我们分析认为，超级生产者威胁的主要原因是现有解决方案的集中式架构中缺乏数据隔离。为了解决这一威胁，我们提出了一种新颖的审计框架——NODROP，它通过基于线程的架构设计将由不同进程产生的溯源数据进行隔离。我们的评估证明，与基准的Linux相比，NODROP可以确保审计框架的完整性，并且在八种不同的硬件配置下，与最先进的商业审计框架Sysdig相比，应用开销平均增加了6.58%，应用开销降低了6.30%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/jiang-peng](https://www.usenix.org/conference/usenixsecurity23/presentation/jiang-peng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-jiang-peng.pdf](https://www.usenix.org/system/files/usenixsecurity23-jiang-peng.pdf)
## AIRTAG: Towards Automated Attack Investigation by Unsupervised Learning with Log Texts.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#airtag-towards-automated-attack-investigation-by-unsupervised-learning-with-log-texts) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#airtag-towards-automated-attack-investigation-by-unsupervised-learning-with-log-texts)**
### 作者
* Hailun Ding, Rutgers University
* Juan Zhai, University of Massachusetts Amherst
* Yuhong Nan, Sun Yat-sen University
* Shiqing Ma, University of Massachusetts Amherst
### 摘要
> 深度学习（DL）技术的成功导致其在包括攻击调查在内的许多领域中得以采用，攻击调查旨在通过分析系统对象和主体之间的因果关系来从记录的系统来源中恢复完整的攻击故事。现有的基于DL的技术，例如最先进的ATLAS，遵循传统取证分析流程的设计。它们在离线训练期间使用带标签的因果图训练DL模型，以学习良性和恶意模式。在攻击调查期间，它们首先将日志数据转换为因果图，并利用训练好的DL模型来确定一个实体是否属于整个攻击链。这种设计没有充分发挥DL的能力。类似BERT的现有工作已经证明了利用无监督预训练模型的优势，可以在不需要昂贵和容易出错的数据标注的情况下取得最先进的结果。先前基于DL的攻击调查忽视了这个机会。此外，生成和操作图形是耗时且不必要的。根据我们的研究，这些操作耗费了总分析时间的96%，导致效率低下。此外，将单个日志条目抽象为图形节点和边会导致分析更粗粒度，从而导致结果不准确和不稳定。我们认为日志文本提供了与因果图相同的信息，但更详细且更易于分析。
> 
> 本文介绍了一种名为AIRTAG的新型攻击调查系统。它基于对日志文本进行无监督学习。AIRTAG不同于在标记的图形上进行训练，而是利用无监督学习来训练DL模型，使用日志文本作为输入。因此，我们不需要繁重且易错的手动标记日志的过程。在调查过程中，DL模型直接采用日志文件作为输入，并预测与攻击相关的实体。我们在包括单主机和多主机攻击在内的19个场景中评估了AIRTAG。我们的结果显示，与现有解决方案相比，AIRTAG具有卓越的效率和效果。通过去除图形生成和操作，AIRTAG比最先进的方法ATLAS快2.5倍，假阳性少9.0%，真阳性平均多16.5%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ding-hailun-airtag](https://www.usenix.org/conference/usenixsecurity23/presentation/ding-hailun-airtag)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ding-hailun-airtag.pdf](https://www.usenix.org/system/files/usenixsecurity23-ding-hailun-airtag.pdf)
## Rethinking System Audit Architectures for High Event Coverage and Synchronous Log Availability.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#rethinking-system-audit-architectures-for-high-event-coverage-and-synchronous-log-availability) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#rethinking-system-audit-architectures-for-high-event-coverage-and-synchronous-log-availability)**
### 作者
* Varun G, Harvard University
* hi, Harvard University
* Sarbartha Banerjee, University of Texas at Austin
* Aniket Agrawal, Arizona State University
* Adil Ahmad, Arizona State University
* Sangho Lee, Microsoft Research
* Marcus Peinado, Microsoft Research
### 摘要
> 一旦攻击者入侵操作系统，计算机上保存的未受保护的系统审计日志的完整性和可用性变得不确定。本文中，我们提出了一个问题：最近提出的旨在应对此类攻击者的审计系统能否提供足够的信息进行取证分析？我们的研究结果表明答案是否定的，因为现有审计系统的低效日志处理管道阻止了为绝大多数攻击事件生成日志条目并在创建后立即保护日志（即同步）。这导致生成的日志中攻击事件的覆盖率较低，同时允许攻击者在入侵后篡改未受保护的日志。为了克服这些限制，我们提出了OMNILOG，一个系统审计架构，它组合了一个端到端的高效日志处理管道，使用一组与平台无关的安全抽象来快速生成和保护日志。这使得OMNILOG能够实现高攻击事件覆盖率和同步日志可用性，甚至超过不具备这两个特性的最先进的审计系统。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gandhi](https://www.usenix.org/conference/usenixsecurity23/presentation/gandhi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gandhi.pdf](https://www.usenix.org/system/files/usenixsecurity23-gandhi.pdf)
## Improving Logging to Reduce Permission Over-Granting Mistakes.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#improving-logging-to-reduce-permission-over-granting-mistakes) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#improving-logging-to-reduce-permission-over-granting-mistakes)**
### 作者
* Bingyu Shen, University of California, San Diego
* Tianyi Shan, University of California, San Diego
* Yuanyuan Zhou, University of California, San Diego
### 摘要
> 访问控制配置是阻止对敏感数据的非法访问的门卫。不幸的是，系统管理员有时会在解决合法用户报告的意外访问拒绝问题时过度授予权限，这可能为攻击者打开安全漏洞。主要原因之一是现代软件没有提供信息丰富的日志记录，以指导系统管理员理解报告的问题。
> 
> 本文是我们所知的首次尝试，旨在帮助开发人员改进日志消息，以帮助系统管理员正确理解和修复访问拒绝问题，而无需过度授予权限。首先，我们进行了观察研究，以了解服务器软件中访问拒绝日志记录的当前实践。我们的研究表明，许多访问控制程序位置都没有任何日志消息；而且很大一部分现有的日志消息缺乏有用的信息，无法指导系统管理员正确理解和解决问题。基于我们的观察结果，我们构建了SECLOG，它使用静态分析自动帮助开发人员找到缺失的访问拒绝日志位置，并确定相关的日志位置信息。
> 
> 我们对十个广泛部署的服务器应用程序进行了SECLOG的评估。总体而言，SECLOG为访问拒绝情况识别出了380个新的日志语句，并且还增强了550个现有的访问拒绝日志消息的诊断信息。我们已向这些应用程序的开发人员报告了114个日志语句，目前已经有70个被他们接受并合并到主干代码中。我们还对32名系统管理员进行了用户研究，针对六个真实的访问拒绝问题。SECLOG可以将不安全的修复数量从27个减少到1个，并且平均提高了64.2%的诊断时间。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shen-bingyu-logging](https://www.usenix.org/conference/usenixsecurity23/presentation/shen-bingyu-logging)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shen-bingyu-logging.pdf](https://www.usenix.org/system/files/usenixsecurity23-shen-bingyu-logging.pdf)
## Diving into Robocall Content with SnorCall.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#diving-into-robocall-content-with-snorcall) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#diving-into-robocall-content-with-snorcall)**
### 作者
* Sathvik Prasad, North Carolina State University
* Trevor Dunlap, North Carolina State University
* Alex, North Carolina State University
* er Ross, North Carolina State University
* Bradley Reaves, North Carolina State University
### 摘要
> 不请自来的大量电话呼叫——称为“机器人电话”——几乎比合法电话更多，给电话用户带来巨大困扰。尽管这些电话的绝大部分都是非法的，但它们也是短暂的。虽然电信服务提供商、监管机构和研究人员可以轻松访问通话元数据，但他们没有工具以满足所需的大规模调查通话内容。本文提出了SnorCall框架，可可伸缩且高效地从机器人电话中提取内容。SnorCall利用Snorkel框架，使领域专家能够编写简单的标记函数，以高精度对文本进行分类。我们将SnorCall应用于包括23个月时间内所收集到的232,723个机器人电话文本的语料库。除其他发现之外，SnorCall使我们能够首次估计不同诈骗和合法机器人电话话题的普遍程度，确定这些电话中所提及的组织，估计诈骗电话所要求的平均金额，识别不同活动之间的共享基础设施，并监测与选举相关的政治电话的兴衰。因此，我们展示了监管机构、运营商、反机器人电话产品供应商和研究人员如何利用SnorCall获得对机器人电话内容和趋势的强大而准确的分析，这可以带来更好的防御措施。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/prasad](https://www.usenix.org/conference/usenixsecurity23/presentation/prasad)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-prasad.pdf](https://www.usenix.org/system/files/usenixsecurity23-prasad.pdf)
## UCBlocker: Unwanted Call Blocking Using Anonymous Authentication.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#ucblocker-unwanted-call-blocking-using-anonymous-authentication) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#ucblocker-unwanted-call-blocking-using-anonymous-authentication)**
### 作者
* Changlai Du, Virginia Tech
* Hexuan Yu, Virginia Tech
* Yang Xiao, University of Kentucky
* Y. Thomas Hou, Virginia Tech
* Angelos D. Keromytis, Georgia Institute of Technology
* Wenjing Lou, Virginia Tech
### 摘要
> 由于全球电话网络的转接不经验证属性，电话用户越来越多地接收到不需要的电话，包括垃圾电话和骗局电话，允许任何人打给任何其他号码。为了避免不需要的电话，电话用户经常忽略或屏蔽所有来自未知号码的来电，导致错过来自新来电者的合法来电。本文从端到端的视角提出了一种解决方案，既可以阻止不需要的电话，又可以让用户定义可接受电话的策略。所提出的解决方案涉及基于匿名凭证的新基础设施，可以实现匿名呼叫者身份验证和策略定义。我们的设计将呼叫者身份验证和呼叫会话启动解耦，并引入验证代码以接口和绑定这两个过程。这种设计最大程度地减少对电话网络的改变，降低了呼叫启动的延迟，并消除了通话时间数据通道的需要。我们实现了系统的原型，以评估其可行性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/du](https://www.usenix.org/conference/usenixsecurity23/presentation/du)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-du.pdf](https://www.usenix.org/system/files/usenixsecurity23-du.pdf)
## Combating Robocalls with Phone Virtual Assistant Mediated Interaction.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#combating-robocalls-with-phone-virtual-assistant-mediated-interaction) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#combating-robocalls-with-phone-virtual-assistant-mediated-interaction)**
### 作者
* Sharbani P, Georgia Institute of Technology
* it, Georgia Institute of Technology
* Krishanu Sarker, Georgia State University
* Roberto Perdisci, University of Georgia and Georgia Institute of Technology
* Mustaque Ahamad, Georgia Institute of Technology
* Diyi Yang, Georgia Institute of Technology
### 摘要
> 每天有数百万人受到大规模的电话自动拨号骚扰。不幸的是，目前大多数针对自动拨号骚扰的防御措施依赖于电话封锁列表，对于来电显示欺骗则无效。为了实现欺骗性自动拨号骚扰的检测和阻止，我们提出了一种基于自然语言处理的智能手机虚拟助手，可以自动审查来电。类似于人类助手，该虚拟助手接听来电并使用机器学习模型与呼叫者进行交互，以确定来电源是人还是自动拨号骚扰者。仅当确定来电不是自动拨号骚扰时，它才通过响铃来打断用户。我们进行的安全性分析表明，这样的系统可以阻止当前和未来可能出现的更复杂的自动拨号骚扰者。我们还进行了用户研究，证明这个虚拟助手能够保持电话通话的用户体验。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/pandit](https://www.usenix.org/conference/usenixsecurity23/presentation/pandit)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-pandit.pdf](https://www.usenix.org/system/files/usenixsecurity23-pandit.pdf)
## BotScreen: Trust Everybody, but Cut the Aimbots Yourself.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#botscreen-trust-everybody-but-cut-the-aimbots-yourself) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#botscreen-trust-everybody-but-cut-the-aimbots-yourself)**
### 作者
* Minyeop Choi, KAIST
* Gihyuk Ko, Cyber Security Research Center at KAIST and Carnegie Mellon University
* Sang Kil Cha, KAIST and Cyber Security Research Center at KAIST
### 摘要
> 自动瞄准辅助程序（aimbot）在第一人称射击游戏（FPS）中帮助玩家击败对手，对游戏行业构成了重大威胁。尽管已经有大量研究努力用于自动检测 aimbot，但现有的方法要么服务器负载过高，要么检测准确率低。在本文中，我们提出了一种新颖的 aimbot 检测设计和实现，称之为 BotScreen，它是一种针对流行的 FPS 游戏《反恐精英：全球攻势》（CS:GO）的客户端 aimbot 检测解决方案。BotScreen 是第一款分布式检测 aimbot 的工具，从而减少了服务器负载。它还利用一种新颖的深度学习模型精确检测使用 aimbot 导致的异常行为。我们在CS:GO上展示了BotScreen在准确性和性能方面的有效性。我们公开提供我们的工具和数据集以支持开放科学。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/choi](https://www.usenix.org/conference/usenixsecurity23/presentation/choi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-choi.pdf](https://www.usenix.org/system/files/usenixsecurity23-choi.pdf)
## "If I could do this, I feel anyone could: " The Design and Evaluation of a Secondary Authentication Factor Manager.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#if-i-could-do-this-i-feel-anyone-could-the-design-and-evaluation-of-a-secondary-authentication-factor-manager) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#if-i-could-do-this-i-feel-anyone-could-the-design-and-evaluation-of-a-secondary-authentication-factor-manager)**
### 作者
* Garrett Smith, Brigham Young University
* Tarun Yadav, Brigham Young University
* Jonathan Dutson, Brigham Young University
* Scott Ruoti, University of Tennessee Knoxville
* Kent Seamons, Brigham Young University
### 摘要
> 两因素身份验证（2FA）通过使用密码（主要身份验证因素）和难以窃取的设备或资源（次要身份验证因素）保护帐户，从而防止帐户被攻击。然而，先前的研究表明，用户需要帮助注册他们的次要身份验证因素，并成功启用2FA。为了解决这些问题，我们提出了一个次要身份验证因素管理器的概念，通过管理其完整的生命周期来帮助用户管理次要身份验证因素：设置、身份验证、删除、替换和审计。我们设计并实现了两个概念验证原型。在一项用户研究中（N=60），我们证明了我们的设计提高了用户正确快速设置和删除帐户上的次要身份验证因素的能力。定性结果显示，用户对次要身份验证因素管理器的反应非常积极，并对其能够帮助他们快速替换次要身份验证因素表示热情。此外，我们的次要身份验证因素管理器防止了用户在不使用该管理器时遇到的致命错误。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/smith](https://www.usenix.org/conference/usenixsecurity23/presentation/smith)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-smith.pdf](https://www.usenix.org/system/files/usenixsecurity23-smith.pdf)
## Exploring Privacy and Incentives Considerations in Adoption of COVID-19 Contact Tracing Apps.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#exploring-privacy-and-incentives-considerations-in-adoption-of-covid-19-contact-tracing-apps) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#exploring-privacy-and-incentives-considerations-in-adoption-of-covid-19-contact-tracing-apps)**
### 作者
* Oshrat Ayalon, Max Planck Institute for Software Systems
* Dana Turjeman, Reichman University
* Elissa M. Redmiles, Max Planck Institute for Software Systems
### 摘要
> 移动健康（mHealth）应用程序，如COVID-19接触追踪和其他促进健康的技术，有助于支持个人和公共卫生工作，以应对大流行和其他健康问题。然而，由于mHealth应用处理敏感数据，并对人们的生活产生潜在影响，它们的广泛应用要求在其设计的众多方面建立信任。在这项工作中，我们报告了一系列联合分析（N = 1,521）的结果，以研究如何更好地设计和推广COVID-19接触追踪应用程序以提高其采用率。具体而言，通过在联合分析之上进行随机化的新颖设计，我们调查了人们在考虑采用接触追踪应用程序时相对于其他属性的隐私考虑。我们进一步探讨了采用考虑因素如何受到部署因素（如提供外部激励措施，如金钱、医疗保健）和用户因素（如对接触追踪应用程序的接受程度和社会人口学特征）的影响。我们的结果与之前的研究相结合，为我们提供了关于最受欢迎的数字接触追踪产品（例如应用功能）及其如何部署（例如提供激励措施）和针对不同用户群体（具有异质偏好）的洞察。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ayalon](https://www.usenix.org/conference/usenixsecurity23/presentation/ayalon)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ayalon.pdf](https://www.usenix.org/system/files/usenixsecurity23-ayalon.pdf)
## Exploring Tenants' Preferences of Privacy Negotiation in Airbnb.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#exploring-tenants-preferences-of-privacy-negotiation-in-airbnb) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#exploring-tenants-preferences-of-privacy-negotiation-in-airbnb)**
### 作者
* Zixin Wang, Zhejiang University
* Danny Yuxing Huang, New York University
* Yaxing Yao, University of Maryland, Baltimore County
### 摘要
> 文献指出，由于用户和旁观者在智能家居中具有不同的隐私关切和优先事项，他们之间存在无法匹配或冲突的隐私需求。缓解这种冲突的一个有希望的方法是通过谈判。然而，目前尚不清楚旁观者是否有隐私谈判的需求，以及如果有的话，什么因素可能影响他们的谈判意愿，以及如何更好地支持谈判以实现他们的隐私目标。为了回答这些问题，我们进行了一个插图研究，在Airbnb的背景下，使用三个分类因素进行变化，包括设备类型、设备位置和停留时间，共有867名参与者。我们进一步研究了参与者关于与谁、何时、如何以及为什么他们希望进行隐私谈判的偏好。我们的研究结果显示，设备类型仍然是唯一显著影响参与者谈判意愿的因素。另外，我们发现参与者的其他偏好，例如他们更倾向于首先通过异步渠道（例如消息和邮件）联系Airbnb房东来传达他们的隐私需求。我们总结了满足租户隐私谈判需求的设计建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-zixin](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-zixin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-zixin.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-zixin.pdf)
## Know Your Cybercriminal: Evaluating Attacker Preferences by Measuring Profile Sales on an Active, Leading Criminal Market for User Impersonation at Scale.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#know-your-cybercriminal-evaluating-attacker-preferences-by-measuring-profile-sales-on-an-active-leading-criminal-market-for-user-impersonation-at-scale) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#know-your-cybercriminal-evaluating-attacker-preferences-by-measuring-profile-sales-on-an-active-leading-criminal-market-for-user-impersonation-at-scale)**
### 作者
* Michele Campobasso, Eindhoven University of Technology
* Luca Allodi, Eindhoven University of Technology
### 摘要
> 在本文中，我们利用俄罗斯一家领先的网络犯罪市场上的市场特点，以大规模伪造用户身份的方式，评估攻击者在购买被盗用户资料时的偏好以及市场的整体经济活动。我们在长达161天的时间里进行数据收集，并对该期间11,357个广告产品中的1,193个已售用户资料和其特征进行了数据收集。我们估计市场交易量每天最多可达700个用户资料，对应于估计的每日销售额达4,000美元，观测期内整体市场收入在54万至71.5万美元之间。我们发现用户资料的供应在时间上相对稳定，主要集中在欧洲用户资料上，而实际用户资料的获取则根据其他用户资料特征的不同而变化较大。攻击者的兴趣主要集中在特定类型的用户资料上，包括源自北美和具有加密资产的用户资料。我们对不同用户资料特征在攻击者最终决定购买用户资料时的相对重要性进行建模和评估，并讨论对防御和风险评估的影响。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/campobasso](https://www.usenix.org/conference/usenixsecurity23/presentation/campobasso)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-campobasso.pdf](https://www.usenix.org/system/files/usenixsecurity23-campobasso.pdf)
## HorusEye: A Realtime IoT Malicious Traffic Detection Framework using Programmable Switches.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#horuseye-a-realtime-iot-malicious-traffic-detection-framework-using-programmable-switches) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#horuseye-a-realtime-iot-malicious-traffic-detection-framework-using-programmable-switches)**
### 作者
* Yutao Dong, Tsinghua Shenzhen International Graduate School, Shenzhen, China; Peng Cheng Laboratory, Shenzhen, China
* Qing Li, Peng Cheng Laboratory, Shenzhen, China
* Kaidong Wu, Tsinghua Shenzhen International Graduate School, Shenzhen, China; Peng Cheng Laboratory, Shenzhen, China
* Ruoyu Li, Tsinghua Shenzhen International Graduate School, Shenzhen, China; Peng Cheng Laboratory, Shenzhen, China
* Dan Zhao, Peng Cheng Laboratory, Shenzhen, China
* Gareth Tyson, Hong Kong University of Science and Technology (GZ), Guangzhou, China
* Junkun Peng, Tsinghua Shenzhen International Graduate School, Shenzhen, China; Peng Cheng Laboratory, Shenzhen, China
* Yong Jiang, Tsinghua Shenzhen International Graduate School, Shenzhen, China; Peng Cheng Laboratory, Shenzhen, China
* Shutao Xia, Tsinghua Shenzhen International Graduate School, Shenzhen, China; Peng Cheng Laboratory, Shenzhen, China
* Mingwei Xu, Tsinghua University, Beijing, China
### 摘要
> 随着物联网流量的不断增长，对物联网异常检测系统提出了挑战。现有的异常检测系统在控制平面上执行所有流量检测，但难以适应不断增长的流量速率。在本文中，我们提出了一种高吞吐量和准确性的两阶段异常检测框架HorusEye。在第一阶段，我们在数据平面上实现了初步的突发级别异常检测，以利用其高吞吐能力（例如100Gbps）。我们设计了一种算法，将训练得到的iForest模型转化为白名单匹配规则，并实现了第一个能够在数据平面上检测到未知攻击的无监督模型。然后，可疑流量会被报告给控制平面进行进一步调查。为了降低误报率，控制平面进行第二阶段，对报告的可疑流量使用流级特征和深度检测模型进行更彻底的异常检测。我们实现了HorusEye的原型，并通过一套全面的实验评估其性能。实验结果表明，数据平面可以检测到99%的异常，并将76%的流量从控制平面卸载。与现有最先进的方案相比，我们的框架具有更高的吞吐量和检测性能。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/dong-yutao](https://www.usenix.org/conference/usenixsecurity23/presentation/dong-yutao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-dong-yutao.pdf](https://www.usenix.org/system/files/usenixsecurity23-dong-yutao.pdf)
## An Input-Agnostic Hierarchical Deep Learning Framework for Traffic Fingerprinting.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#an-input-agnostic-hierarchical-deep-learning-framework-for-traffic-fingerprinting) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#an-input-agnostic-hierarchical-deep-learning-framework-for-traffic-fingerprinting)**
### 作者
* Jian Qu, Xi’an Jiaotong University
* Xiaobo Ma, Xi’an Jiaotong University
* Jianfeng Li, Xi’an Jiaotong University
* Xiapu Luo, The Hong Kong Polytechnic University
* Lei Xue, Sun Yat-sen University
* Junjie Zhang, Wright State University
* Zhenhua Li, Tsinghua University
* Li Feng, Southwest Jiaotong University
* Xiaohong Guan, Xi'an Jiaotong University
### 摘要
> 深度学习已经被证明对于探索数据包时间和大小特征的交通指纹具有潜力。尽管它以自动特征提取而闻名，但它面临着交通的异质性（即原始数据包时间和大小）与所需输入的同质性（即特定于输入）之间的差距。为了解决这个差距，我们设计了一个输入无关的层次化深度学习框架，用于交通指纹，可以将综合的异构交通特征层次化地抽象成由现有神经网络顺利接收和进一步分类的同质向量。广泛的评估表明，我们的框架仅使用一种范式，不仅支持异构交通输入，而且在广泛的交通指纹任务中取得了与先进方法的更好或相当的性能。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/qu](https://www.usenix.org/conference/usenixsecurity23/presentation/qu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-qu.pdf](https://www.usenix.org/system/files/usenixsecurity23-qu.pdf)
## Subverting Website Fingerprinting Defenses with Robust Traffic Representation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#subverting-website-fingerprinting-defenses-with-robust-traffic-representation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#subverting-website-fingerprinting-defenses-with-robust-traffic-representation)**
### 作者
* Meng Shen, School of Cyberspace Science and Technology, Beijing Institute of Technology
* Kexin Ji, School of Computer Science, Beijing Institute of Technology
* Zhenbo Gao, School of Computer Science, Beijing Institute of Technology
* Qi Li, Institute for Network Sciences and Cyberspace, Tsinghua University
* Liehuang Zhu, School of Cyberspace Science and Technology, Beijing Institute of Technology
* Ke Xu, Department of Computer Science and Technology, Tsinghua University
### 摘要
> 匿名网络，如Tor，容易受到各种网站指纹识别（WF）攻击的威胁，这使得攻击者能够感知用户在这些网络上的隐私。然而，近期开发的防御机制可以有效地干扰WF攻击，例如通过注入虚假数据包。在本文中，我们提出了一种新颖的WF攻击称为Robust Fingerprinting（RF），它使得攻击者能够在各种防御措施下对Tor流量进行指纹识别。具体而言，我们开发了一种强大的流量表示方法，生成Traffic Aggregation Matrix（TAM），完全捕获从Tor迹线泄露的关键信息特征。通过利用TAM，攻击者可以训练一个基于CNN的分类器，学习不同防御措施所揭示的常见高级流量特征。我们使用公开的真实世界数据集进行了大量实验，将RF与最先进的（SOTA）WF攻击进行了比较。封闭和开放世界的评估结果表明RF明显优于SOTA攻击。特别是，在SOTA防御措施下，RF能够有效地对Tor流量进行指纹识别，平均准确率相比最佳现有攻击（即Tik-Tok）提高了8.9%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shen-meng](https://www.usenix.org/conference/usenixsecurity23/presentation/shen-meng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shen-meng.pdf](https://www.usenix.org/system/files/usenixsecurity23-shen-meng.pdf)
## Rosetta: Enabling Robust TLS Encrypted Traffic Classification in Diverse Network Environments with TCP-Aware Traffic Augmentation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#rosetta-enabling-robust-tls-encrypted-traffic-classification-in-diverse-network-environments-with-tcp-aware-traffic-augmentation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#rosetta-enabling-robust-tls-encrypted-traffic-classification-in-diverse-network-environments-with-tcp-aware-traffic-augmentation)**
### 作者
* Renjie Xie, Tsinghua University
* Jiahao Cao, Tsinghua University
* Enhuan Dong, Tsinghua University and Quan Cheng Laboratory
* Mingwei Xu, Tsinghua University and Quan Cheng Laboratory
* Kun Sun, George Mason University
* Qi Li, Tsinghua University
* Licheng Shen, Tsinghua University
* Menghao Zhang, Tsinghua University and Kuaishou Technology
### 摘要
> 随着大多数网络数据流量采用传输层安全（Transport Layer Security，TLS）协议进行加密，最新的研究利用深度学习（Deep Learning，DL）模型，通过自动提取TLS流的数据包长度序列中复杂且信息丰富的特征进行加密流量分类。虽然现有的DL模型在加密流量分类上报告了出色的分类结果，但我们进行了全面的研究，发现它们在真实多样的网络环境中均存在显著的性能下降。经过系统研究后，我们发现流的数据包长度序列可能会因不同的TCP机制而在不同的网络环境中发生巨大变化，用于可靠传输。因此，我们提出了Rosetta，以实现对现有DL模型进行强健的TLS加密流量分类。它利用TCP感知的流量增强机制和自监督学习来理解隐含的TCP语义，从而提取TLS流的强健特征。大量实验表明，Rosetta可以显著提高现有DL模型在多样化网络环境中对TLS流量的分类性能。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xie](https://www.usenix.org/conference/usenixsecurity23/presentation/xie)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xie.pdf](https://www.usenix.org/system/files/usenixsecurity23-xie.pdf)
## Towards Targeted Obfuscation of Adversarial Unsafe Images using Reconstruction and Counterfactual Super Region Attribution Explainability.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#towards-targeted-obfuscation-of-adversarial-unsafe-images-using-reconstruction-and-counterfactual-super-region-attribution-explainability) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#towards-targeted-obfuscation-of-adversarial-unsafe-images-using-reconstruction-and-counterfactual-super-region-attribution-explainability)**
### 作者
* Mazal Bethany, The University of Texas at San Antonio
* Andrew Seong, The University of Texas at San Antonio
* Samuel Henrique Silva, The University of Texas at San Antonio
* Nicole Beebe, The University of Texas at San Antonio
* Nishant Vishwamitra, The University of Texas at San Antonio
* Peyman Najafirad, The University of Texas at San Antonio
### 摘要
> 在线社交网络（OSN）被越来越多的肇事者用于通过交换不安全的图像对其目标进行骚扰。此外，肇事者还采取了诸如对抗攻击等先进技术来规避此类图像的检测。为了抵御这种威胁，OSN使用基于人工智能/机器学习的检测器来标记不安全的图像。然而，这些检测器无法解释不安全内容的区域，也无法对这些区域进行混淆和检查，并且对对抗性攻击相当脆弱，这些攻击可以欺骗它们的检测。在这项工作中，我们首先对最先进的解释技术和商业可用的不安全图像检测器进行了深入调查，并发现它们在面对对抗性不安全图像时存在严重缺陷。为了解决这些缺陷，我们设计了一个新系统，在社交媒体上执行针对性的对抗性不安全图像混淆，使用重构来消除对抗性扰动，并使用反事实超区域归因解释性来解释不安全图像片段，并创建了一个名为ProjectName的原型。我们通过对三种常见的不安全图像（性暴力、网络欺凌和自残）进行大规模评估来证明我们系统的有效性。我们对超过64,000张真实世界的不安全OSN图像进行了评估，以及在野外发现的不安全图像，如性暴力名人深度伪造和自残图像，结果显示它能够安全混淆91.47%的此类图像，从而显著消除了对抗性不安全图像的威胁。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bethany](https://www.usenix.org/conference/usenixsecurity23/presentation/bethany)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-bethany.pdf](https://www.usenix.org/system/files/usenixsecurity23-bethany.pdf)
## TPatch: A Triggered Physical Adversarial Patch.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#tpatch-a-triggered-physical-adversarial-patch) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#tpatch-a-triggered-physical-adversarial-patch)**
### 作者
* Wenjun Zhu, USSLAB, Zhejiang University
* Xiaoyu Ji, USSLAB, Zhejiang University
* Yushi Cheng, BNRist, Tsinghua University
* Shibo Zhang, USSLAB, Zhejiang University
* Wenyuan Xu, USSLAB, Zhejiang University
### 摘要
> 自动驾驶汽车越来越多地利用基于视觉的感知模块来获取关于行车环境和障碍物的信息。正确的检测和分类对于确保安全驾驶决策非常重要。现有研究已经证明了利用印刷的对抗贴片可以欺骗感知模型，如目标检测器和图像分类器的可行性。然而，大部分对抗贴片都对每一辆经过的自动驾驶汽车都具有攻击性，缺乏选择性。在本文中，我们提出了一种由声音信号触发的物理对抗贴片TPatch。与其他对抗贴片不同，TPatch在正常情况下保持良性，但可以通过信号注入攻击引入的设计失真来触发隐藏、创建或更改攻击。为了避免被人类驾驶员怀疑，并使攻击在现实世界中具备实用性和鲁棒性，我们提出了一种基于内容的伪装方法和一种增强攻击鲁棒性的方法。通过对三个目标检测器(YOLO V3/V5和Faster R-CNN)和八个图像分类器进行评估，我们证明了TPatch在模拟环境和真实环境中的有效性。我们还讨论了传感器、算法和系统层面的可能防御方法。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhu](https://www.usenix.org/conference/usenixsecurity23/presentation/zhu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhu.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhu.pdf)
## CAPatch: Physical Adversarial Patch against Image Captioning Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#capatch-physical-adversarial-patch-against-image-captioning-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#capatch-physical-adversarial-patch-against-image-captioning-systems)**
### 作者
* Shibo Zhang, USSLAB, Zhejiang University
* Yushi Cheng, BNRist, Tsinghua University
* Wenjun Zhu, USSLAB, Zhejiang University
* Xiaoyu Ji, USSLAB, Zhejiang University
* Wenyuan Xu, USSLAB, Zhejiang University
### 摘要
> 快速发展的监控系统使图像字幕生成成为一种处理大量视频的关键技术，而准确的字幕至关重要，以确保文本的真实性。虽然以前的研究已经证明了使用对抗修补程序欺骗计算机视觉模型的可行性，但目前尚不清楚这种漏洞是否会导致不正确的字幕生成，这涉及了图像特征提取后的自然语言处理。在本文中，我们设计了CAPatch，这是一种物理对抗修补程序，可以导致最终字幕中的错误，即创建一个完全不同的句子或缺失关键词的句子，并针对多模态图像字幕系统进行攻击。为了使CAPatch在物理世界中有效和实用，我们提出了一种检测保证和注意力增强方法，以增加CAPatch的影响力，并提出了一种稳健性改进方法，以解决图像打印和捕捉导致的修补失真问题。对三种常用图像字幕系统（Show-and-Tell，Self-critical Sequence Training: Att2in和Bottom-up Top-down）的评估表明，CAPatch在数字和物理世界中的有效性，志愿者在各种场景、衣物和光照条件下佩戴印刷的修补程序。在图像大小的5%范围内，物理打印的CAPatch可以在录像机上实现持续攻击，攻击成功率超过73.1%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-shibo](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-shibo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-shibo.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-shibo.pdf)
## Hard-label Black-box Universal Adversarial Patch Attack.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#hard-label-black-box-universal-adversarial-patch-attack) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#hard-label-black-box-universal-adversarial-patch-attack)**
### 作者
* Guanhong Tao, Purdue University
* Shengwei An, Purdue University
* Siyuan Cheng, Purdue University
* Guangyu Shen, Purdue University
* Xiangyu Zhang, Purdue University
### 摘要
> 深度学习模型在许多应用领域广泛使用。尽管其性能令人印象深刻，但这些模型的安全性引发了严重的关注。通用对抗性贴纸攻击是深度学习中的安全问题之一，攻击者可以利用渐变信息在预训练模型上生成贴纸触发器。一旦贴纸触发器被粘贴到输入上，模型将错误地将其分类为目标标签。现有的攻击方法需要获得模型的渐变或输出置信度。本文提出了一种新颖的攻击方法HardBeat，仅通过预测标签即可生成通用对抗性贴纸。在搜索最佳贴纸触发器的过程中，它利用历史数据点，并通过一种新颖的重要性感知渐变近似方法对当前触发器的邻域进行专注/有导向性的搜索。我们在四个流行的图像数据集上进行了评估，使用了8个模型和两个在线商业服务。实验结果显示，HardBeat比八种基准攻击更加有效，其本地模型上的高ASR（攻击成功率）贴纸触发器（>90%）超过了两倍，并且在线服务上的ASR高出17.5%。三种现有的先进防御技术无法防御HardBeat攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/tao](https://www.usenix.org/conference/usenixsecurity23/presentation/tao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-tao.pdf](https://www.usenix.org/system/files/usenixsecurity23-tao.pdf)
## Anatomy of a High-Profile Data Breach: Dissecting the Aftermath of a Crypto-Wallet Case.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#anatomy-of-a-high-profile-data-breach-dissecting-the-aftermath-of-a-crypto-wallet-case) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#anatomy-of-a-high-profile-data-breach-dissecting-the-aftermath-of-a-crypto-wallet-case)**
### 作者
* Svetlana Abramova, Universität Innsbruck
* Rainer Böhme, Universität Innsbruck
### 摘要
> 媒体报道显示，网络安全产品和服务提供商的数据泄露事件急剧增加。由于泄露的记录可能会揭示与安全相关的数据，这些事件给个人造成了不必要的负担，并带来了再次受害的风险。为了研究对受害者的广泛影响，我们对购买用于安全存储加密资产的专用设备并后来成为客户数据泄露受害者的104人进行了调查。我们的案例研究揭示了常见的麻烦事（如垃圾邮件、欺诈和网络钓鱼邮件），以及以前未曾见过的攻击手段（例如涉及篡改设备），这些可能与数据泄露有关。一些受害者报告了数字资产损失。我们发现，我们的参与者对安全问题非常关注，对诉讼努力持怀疑态度，并且能够区分安全产品的质量和数据泄露的情况。我们得出了对整个网络安全行业的启示，并指出了数据泄露研究中的方法论挑战。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/abramova](https://www.usenix.org/conference/usenixsecurity23/presentation/abramova)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-abramova.pdf](https://www.usenix.org/system/files/usenixsecurity23-abramova.pdf)
## Glimpse: On-Demand PoW Light Client with Constant-Size Storage for DeFi.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#glimpse-on-demand-pow-light-client-with-constant-size-storage-for-defi) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#glimpse-on-demand-pow-light-client-with-constant-size-storage-for-defi)**
### 作者
* Giulia Scaffino, TU Wien and Christian Doppler Laboratory Blockchain Technologies for the Internet of Things
* Lukas Aumayr, TU Wien
* Zeta Avarikioti, TU Wien
* Matteo Maffei, TU Wien and Christian Doppler Laboratory Blockchain Technologies for the Internet of Things
### 摘要
> 跨链通信对于释放区块链技术的全部潜力至关重要，因为它允许用户和开发者利用不同现有区块链的独特设计特性和利润机会。大多数互操作性解决方案由中心化交易所和基于可信多数的桥接协议提供，这两者相较于本地区块链资产引入了不可取的信任假设。因此，去中心化解决方案引起了越来越多的关注：轻量级和超轻量级客户端为链路中继铺平了道路，通过验证和存储线性和对数数量的数据，分别允许在一个区块链上验证另一个区块链的状态。不幸的是，链路中继在计算成本、存储或兼容性方面效率低下。
> 
> 我们引入了Glimpse，一种按需桥接，它利用了一种新颖的按需轻客户端构建，只需要恒定的链上存储成本和计算开销。Glimpse具有表达力，可以支持多种DeFi和离链应用，例如借贷、锚定、证明Oracle见证和博彩中心。Glimpse还与具有有限脚本语言的区块链兼容，例如比特币的侧链Liquid Network，我们在其中提出了一个具体的实例。我们在通用可组合性（UC）框架中证明了Glimpse的安全性，并进行了经济分析。我们评估了Glimpse在类似比特币的链上的成本：验证一个简单交易最多需要700字节的链上开销，导致一次性费用为3美元，仅为标准比特币交易的两倍。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/scaffino](https://www.usenix.org/conference/usenixsecurity23/presentation/scaffino)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-scaffino.pdf](https://www.usenix.org/system/files/usenixsecurity23-scaffino.pdf)
## Mixed Signals: Analyzing Ground-Truth Data on the Users and Economics of a Bitcoin Mixing Service.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#mixed-signals-analyzing-ground-truth-data-on-the-users-and-economics-of-a-bitcoin-mixing-service) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#mixed-signals-analyzing-ground-truth-data-on-the-users-and-economics-of-a-bitcoin-mixing-service)**
### 作者
* Fieke Miedema, Delft University of Technology
* Kelvin Lubbertsen, Delft University of Technology
* Verena Schrama, Delft University of Technology
* Rolf van Wegberg, Delft University of Technology
### 摘要
> 比特币混合是一种商品，主要在地下经济中提供，并在比特币生态系统中销售匿名性。它的受欢迎程度相当令人注目，因为由其用户发起的交易通过一个集中的服务的钱包进行，其中在混合过程中收集个人可识别信息，而不知道数据保留政策。这使我们想知道用户是否采取策略来减轻这些风险-比如使用IP代理服务-或者用较低成本的小额交易来测试这些服务是否可靠。
> 
> 在本文中，我们探讨了一个独特的实际数据，捕捉到由8,838个用户发起的15,574个混合交易，总值为4500万美元的比特币，在2018年7月至2019年6月期间通过BestMixer进行混合。我们发现用户采用的风险减轻策略很有限，而用户委托给BestMixer的交易量很高，使用频率也很高和经常性的-有23%的用户会再次使用。我们的分析显示，只有61%的交易使用了某种形式的IP地址混淆-即VPN或VPS使用。我们讨论了这些发现的可能解释，包括信息不对称和混合器在洗黑钱过程中的作用可能迫使用户接受与比特币混合相关的风险。此外，我们还探讨了这些发现对更广泛的加密货币安全生态系统的影响。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/miedema](https://www.usenix.org/conference/usenixsecurity23/presentation/miedema)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-miedema.pdf](https://www.usenix.org/system/files/usenixsecurity23-miedema.pdf)
## Is Your Wallet Snitching On You? An Analysis on the Privacy Implications of Web3.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#is-your-wallet-snitching-on-you-an-analysis-on-the-privacy-implications-of-web3) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#is-your-wallet-snitching-on-you-an-analysis-on-the-privacy-implications-of-web3)**
### 作者
* Christof Ferreira Torres, ETH Zurich
* Fiona Willi, ETH Zurich
* Shweta Shinde, ETH Zurich
### 摘要
> 最近有关元宇宙（Metaverse）和非同质化代币（NFT）的热潮，使得Web3变得越来越受欢迎。Web3的目标是通过去中心化应用程序来去中心化互联网。钱包在其中扮演关键角色，它们作为应用程序与用户之间的接口。例如，目前MetaMask等钱包正在被数百万用户使用。不幸的是，Web3常常被宣传为更安全和隐私保护更好。然而，去中心化应用程序以及钱包都基于传统技术，这些技术并未考虑用户隐私保护。本文分析了Web3技术（如去中心化应用程序和钱包）对用户隐私的影响。为此，我们构建了一个框架，用于测量钱包信息的曝光程度。首先，我们研究了有关已安装钱包的信息是否被用于在线追踪用户。我们分析了前100,000个网站，并发现其中有1,325个网站运行脚本来探测用户是否在其浏览器中安装了钱包。其次，我们测量了去中心化应用程序和钱包是否将用户的唯一钱包地址泄露给第三方。我们拦截了616个去中心化应用程序和100个钱包的流量，并发现在211个应用程序中存在超过2000次泄露，以及在13个钱包中存在超过300次泄露。我们的研究表明，Web3对用户隐私构成威胁，并需要新的设计来实现更注重隐私保护的钱包架构。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/torres](https://www.usenix.org/conference/usenixsecurity23/presentation/torres)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-torres.pdf](https://www.usenix.org/system/files/usenixsecurity23-torres.pdf)
## Capstone: A Capability-based Foundation for Trustless Secure Memory Access.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#capstone-a-capability-based-foundation-for-trustless-secure-memory-access) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#capstone-a-capability-based-foundation-for-trustless-secure-memory-access)**
### 作者
* Jason Zhijingcheng Yu, National University of Singapore
* Conrad Watt, University of Cambridge
* Aditya Badole, National University of Singapore
* Trevor E. Carlson, National University of Singapore
* Prateek Saxena, National University of Singapore
### 摘要
> 基于能力的内存隔离是一种有前景的新型架构原理。软件只能通过能力句柄而不是原始指针访问低级内存，这为实施安全限制提供了自然界面。现有的基于能力的架构设计（如CHERI）可以提供空间安全，但无法扩展到安全敏感软件设计所需的其他内存模型。本文提出了Capstone，一种更具表达力的基于能力的架构设计，支持在不信任的环境中使用多个现有的内存隔离模型，即不依赖可信软件组件。我们展示了Capstone在特权边界动态可扩展、临时和空间共享/委托希望以及在此需求与可用性关注需平衡的环境中的适用性。Capstone还可以高效实施。我们提供了一个实现草图，并通过评估表明其在常见用例中的开销低于50%。我们还为Capstone原型设计了一个功能模拟器，并使用它演示了六种真实世界内存模型的可运行实现，而无需信任的软件组件：基于enclave的三种TEE类型、线程调度器、内存分配器和类似Rust的内存安全，都在Capstone的界面之内。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yu-jason](https://www.usenix.org/conference/usenixsecurity23/presentation/yu-jason)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yu-jason.pdf](https://www.usenix.org/system/files/usenixsecurity23-yu-jason.pdf)
## FloatZone: Accelerating Memory Error Detection using the Floating Point Unit.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#floatzone-accelerating-memory-error-detection-using-the-floating-point-unit) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#floatzone-accelerating-memory-error-detection-using-the-floating-point-unit)**
### 作者
* Floris Gorter, Vrije Universiteit Amsterdam
* Enrico Barberis, Vrije Universiteit Amsterdam
* Raphael Isemann, Vrije Universiteit Amsterdam
* Erik van der Kouwe, Vrije Universiteit Amsterdam
* Cristiano Giuffrida, Vrije Universiteit Amsterdam
* Herbert Bos, Vrije Universiteit Amsterdam
### 摘要
> 内存消毒器是一种强大的工具，用于检测空间和时间内存错误，如缓冲区溢出和使用后释放。模糊测试工具和软件测试人员经常依赖这些工具来发现错误存在。然而，消毒器会产生显著的运行时开销。例如，最常用的消毒器——AddressSanitizer（ASan），会导致2倍的减速。这种开销的主要原因是消毒器检查，至少涉及内存查找、比较和条件分支指令。将这些检查应用于确认程序中内存访问的有效性会大大减慢执行速度。
> 
> 我们引入了FloatZone，这是一种基于编译器的消毒器，可以使用轻量级检查来检测C/C++程序中的空间和时间内存错误，利用了浮点单元（FPU）。我们展示了通过触发浮点加法引起下溢异常来实现“查找、比较和分支”的综合效果，从而检测非法访问。这种新颖的方法通过避免传统比较的缺点显著提高性能：它避免了分支预测失败，通过卸载到FPU可以实现更高的指令级并行性，并且还由于没有阴影内存而降低了缓存未命中率。
> 
> 我们的评估结果显示，与现有系统相比，FloatZone在SPEC CPU2006和CPU2017上只有37%的运行时开销。此外，我们测量了与现有技术相比的平均2.87倍的模糊测试吞吐量增加。最后，我们确认FloatZone在Juliet测试套件和一组OSS-Fuzz错误上具有与ASan相当的检测能力。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gorter](https://www.usenix.org/conference/usenixsecurity23/presentation/gorter)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gorter.pdf](https://www.usenix.org/system/files/usenixsecurity23-gorter.pdf)
## PUMM: Preventing Use-After-Free Using Execution Unit Partitioning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#pumm-preventing-use-after-free-using-execution-unit-partitioning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#pumm-preventing-use-after-free-using-execution-unit-partitioning)**
### 作者
* Carter Yagemann, The Ohio State University
* Simon P. Chung, Georgia Institute of Technology
* Brendan Saltaformaggio, Georgia Institute of Technology
* Wenke Lee, Georgia Institute of Technology
### 摘要
> 关键软件采用内存不安全的编程语言编写，容易受到use-after-free和double free的漏洞攻击。为了保护内存分配器，有提出了将内存重新分配的时机合理延后，使这类漏洞无法被利用。然而，现有解决方案在运行时和内存开销方面存在问题。为了寻求更好的解决方案，我们提出通过对程序进行分析，识别与处理独立任务对应的代码单元。根据直觉，在运行时，不同任务之间应该几乎没有数据流动，因此我们将当前执行单元释放的内存重新分配的时机延后到其完成之后，以防止use-after-free攻击的发生。
> 
> 为了证明我们设计的有效性，我们在Linux上实现了一个原型系统PUMM，包括一个离线分析器和一个在线执行器，后者通过透明地包裹标准库来保护C/C++二进制文件。在对26个程序进行了40个真实世界和3,000个合成漏洞的评估中，包括像Chakra JavaScript引擎这样复杂的多线程情况，PUMM成功地阻止了所有真实世界的攻击，并只允许发生了4个合成攻击，同时将内存开销降低了52.0%，运行时开销的平均值为2.04%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yagemann](https://www.usenix.org/conference/usenixsecurity23/presentation/yagemann)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yagemann.pdf](https://www.usenix.org/system/files/usenixsecurity23-yagemann.pdf)
## MTSan: A Feasible and Practical Memory Sanitizer for Fuzzing COTS Binaries.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#mtsan-a-feasible-and-practical-memory-sanitizer-for-fuzzing-cots-binaries) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#mtsan-a-feasible-and-practical-memory-sanitizer-for-fuzzing-cots-binaries)**
### 作者
* Xingman Chen, Tsinghua University
* Yinghao Shi, Institute of Information Engineering, Chinese Academy of Sciences
* Zheyu Jiang, Tsinghua University
* Yuan Li, Tsinghua University
* Ruoyu Wang, Arizona State University
* Haixin Duan, Tsinghua University and Zhongguancun Laboratory
* Haoyu Wang, Huazhong University of Science and Technology
* Chao Zhang, Tsinghua University and Zhongguancun Laboratory
### 摘要
> 模糊测试已广泛应用于在程序中发现漏洞，尤其是当源代码不可用时。但是，二进制模糊测试的有效性和效率受到了二进制内存消毒器的缺乏限制。这种二进制内存消毒器的缺乏是由于在编译程序中存在信息丢失和二进制插装的挑战。
> 
> 本文提出了一种可行且实用的硬件辅助内存消毒器MTSan，用于二进制模糊测试。MTSan能够在运行时检测空间和时间上的内存安全违规。它采用了一种新颖的渐进式对象恢复方案，用于恢复二进制文件中的对象，并使用定制的二进制重写解决方案将二进制文件进行内存标记为基础的内存安全消毒策略的插装。此外，MTSan使用了一种硬件特性，即ARM内存标记扩展(MTE)，可以显著减少其运行时开销。我们在AArch64上实现了MTSan的原型，并对其有效性和性能进行了系统评估。评估结果显示，与现有的二进制内存消毒器相比，MTSan能够检测到更多的内存安全违规，同时引入较低的运行时和内存开销。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-xingman](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-xingman)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-xingman.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-xingman.pdf)
## Hidden Reality: Caution, Your Hand Gesture Inputs in the Immersive Virtual World are Visible to All!
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#hidden-reality-caution-your-hand-gesture-inputs-in-the-immersive-virtual-world-are-visible-to-all) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#hidden-reality-caution-your-hand-gesture-inputs-in-the-immersive-virtual-world-are-visible-to-all)**
### 作者
* Sindhu Reddy Kalathur Gopal, University of Wyoming
* Diksha Shukla, University of Wyoming
* James David Wheelock, University of Colorado Boulder
* Nitesh Saxena, Texas A&M University, College Station
### 摘要
> 在遥控学习、游戏和虚拟会议等各种应用中，文本输入是使用虚拟现实（VR）设备时不可避免的任务。VR用户输入密码/PIN码登录各种应用的用户账户，并输入常规文本以撰写电子邮件或浏览互联网。在VR设备上的键入活动被认为对直接观察攻击具有抵抗力，因为沉浸式环境中的虚拟屏幕对其他人来说并不直接可见。本文提出了一种基于视频的旁路攻击——隐藏现实（HR），它表明——尽管VR设备上的虚拟屏幕没有被敌对方直接看到，但间接观察可能会被利用来窃取用户的私人信息。
> 
> 隐藏现实（HR）攻击利用用户在虚拟屏幕上键入时的手势视频片段来解密VR设备上各种关键输入场景中的键入文本，包括输入PIN码和密码。对368个视频片段的实验分析显示，隐藏现实模型可以成功解密超过75％的文本输入。我们的攻击模型的高成功率促使我们进行用户研究，以了解用户在虚拟现实中的行为和安全感知。分析结果显示，超过95％的用户对VR设备上的任何安全威胁没有意识，并相信沉浸式环境对数字攻击是安全的。我们的攻击模型挑战了用户对沉浸式环境中错误的安全感，并强调了VR空间需要更严格的安全解决方案。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gopal](https://www.usenix.org/conference/usenixsecurity23/presentation/gopal)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gopal.pdf](https://www.usenix.org/system/files/usenixsecurity23-gopal.pdf)
## LocIn: Inferring Semantic Location from Spatial Maps in Mixed Reality.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#locin-inferring-semantic-location-from-spatial-maps-in-mixed-reality) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#locin-inferring-semantic-location-from-spatial-maps-in-mixed-reality)**
### 作者
* Habiba Farrukh, Purdue University
* Reham Mohamed, Purdue University
* Aniket Nare, Purdue University
* Antonio Bianchi, Purdue University
* Z. Berkay Celik, Purdue University
### 摘要
> 混合现实（MR）设备捕捉用户周围的3D空间地图，将虚拟内容集成到其物理环境中。目前流行的MR平台中实施的现有权限模型允许所有MR应用程序在没有明确许可的情况下访问这些3D空间地图。MR应用程序对这些3D空间地图的未经监控访问对用户的隐私构成严重威胁，因为这些地图捕捉了用户环境的详细几何和语义特征。本文提出了一种名为LocIn的新位置推断攻击，它利用嵌入在3D空间地图中的这些详细特征来推断用户的室内位置类型。LocIn开发了一种多任务方法，训练一个端到端的编码器-解码器网络，提取空间特征表示以捕捉用户环境的上下文模式。LocIn利用这种表示来检测3D对象和表面，并将它们与一种新颖的统一优化函数集成到分类网络中，以预测用户的室内位置。我们在从三种流行的MR设备中收集的空间地图上演示了LocIn攻击。我们展示了LocIn以平均84.1%的准确率推断用户位置类型的能力。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/farrukh](https://www.usenix.org/conference/usenixsecurity23/presentation/farrukh)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-farrukh.pdf](https://www.usenix.org/system/files/usenixsecurity23-farrukh.pdf)
## Unique Identification of 50, 000+ Virtual Reality Users from Head & Hand Motion Data.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#unique-identification-of-50-000-virtual-reality-users-from-head-hand-motion-data) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#unique-identification-of-50-000-virtual-reality-users-from-head-hand-motion-data)**
### 作者
* Vivek Nair, UC Berkeley
* Wenbo Guo, UC Berkeley
* Justus Mattern, RWTH Aachen
* Rui Wang, UC Berkeley
* James F. O'Brien, UC Berkeley
* Louis Rosenberg, Unanimous AI
* Dawn Song, UC Berkeley
### 摘要
> 随着虚拟现实（VR）和所谓的“元宇宙”在兴趣和投资方面的迅猛增长，公众的关注当然会转向这些平台可能带来的独特安全和隐私威胁。虽然人们通过运动透露有关自己的信息早已为人所知，但人们还不广泛了解在虚拟现实中这种信息揭示对个人来说有多么具有全球识别性。在这项研究中，我们展示了在多个会话中，通过仅仅与虚拟物体相对的头部和手部运动，可以唯一可靠地识别大量真实的VR用户（N=55,541）。在每个人的数据中训练一个分类模型后，用户可以在50,000+的整个用户池中以94.33%的准确率从100秒运动中唯一识别出来，并且只需10秒运动即可以73.20%的准确率识别出来。这项工作是首次真正展示了生物力学在VR中可以作为与面部或指纹识别等广泛使用的生物特征相媲美的唯一识别标识。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/nair-identification](https://www.usenix.org/conference/usenixsecurity23/presentation/nair-identification)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-nair-identification.pdf](https://www.usenix.org/system/files/usenixsecurity23-nair-identification.pdf)
## Exploring User Reactions and Mental Models Towards Perceptual Manipulation Attacks in Mixed Reality.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#exploring-user-reactions-and-mental-models-towards-perceptual-manipulation-attacks-in-mixed-reality) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#exploring-user-reactions-and-mental-models-towards-perceptual-manipulation-attacks-in-mixed-reality)**
### 作者
* Kaiming Cheng, University of Washington
* Jeffery F. Tian, University of Washington
* Tadayoshi Kohno, University of Washington
* Franziska Roesner, University of Washington
### 摘要
> 感知操纵攻击（PMA）通过混合现实（MR）内容操纵用户对世界的多感官（如视觉、听觉、触觉）感知，以影响用户的判断和后续行动。例如，一个预期能显示安全关键输出的MR驾驶应用程序，也可能（恶意或无意地）在交通标志上叠加错误信号，导致用户猛踩刹车。虽然当前的MR技术已足以创建此类攻击，但很少有研究来了解用户对此类潜在操纵的感知、反应和防御。为了理解和应对MR中的PMA，我们对21名参与者进行了面对面研究。我们开发了三种PMA，重点攻击三种不同的感知：视觉、听觉和情境感知。我们的研究首先通过在基准和不同攻击条件下评估参与者在“微基准”任务上的表现来研究用户反应的影响。我们观察到攻击的初级和次级影响，后来即使在非攻击条件下也会影响参与者的表现。我们进行了面谈，总结了一系列用户对PMA的反应和解释。通过对我们的观察和面谈的定性数据分析，我们确定了参与者制定的各种防御策略，并观察到这些策略有时会适得其反。根据我们的发现，我们提出了未来研究和防御方向的建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cheng-kaiming](https://www.usenix.org/conference/usenixsecurity23/presentation/cheng-kaiming)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cheng-kaiming.pdf](https://www.usenix.org/system/files/usenixsecurity23-cheng-kaiming.pdf)
## Erebus: Access Control for Augmented Reality Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#erebus-access-control-for-augmented-reality-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#erebus-access-control-for-augmented-reality-systems)**
### 作者
* Yoonsang Kim, Stony Brook University
* Sanket Goutam, Stony Brook University
* Amir Rahmati, Stony Brook University
* Arie Kaufman, Stony Brook University
### 摘要
> 增强现实（AR）被广泛认为是个人设备的下一个进化阶段，它可以将数字世界与现实世界无缝融合。然而，这种融合通常需要无限制地访问传感器数据，导致在这些平台上运行的应用程序存在严重的超额权限。通过分析17个AR系统和45个流行的AR应用程序，我们探讨了现有的AR平台访问控制机制，确定了AR应用程序在使用传感器数据方面的关键趋势，并指出了用户在AR环境中面临的独特威胁。根据这些发现，我们设计并实现了Erebus，这是一个用于AR平台的访问控制框架，可以对AR应用程序使用的数据进行精细控制。Erebus通过创建一个领域特定语言（DSL）来实现最小特权原则，用于在AR平台上进行权限控制，允许应用程序指定其功能所需的数据。借助这个DSL，Erebus进一步允许用户根据特定的用户条件自定义应用程序权限。我们在谷歌的ARCore SDK上实现了Erebus，并将五个现有的AR应用程序移植到Erebus中，以展示其保护各种类型应用程序的能力。使用这些应用程序和各种微基准测试的性能结果显示，Erebus在实现其安全目标的同时非常实用，对AR系统引入了可忽略的性能开销。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kim-yoonsang](https://www.usenix.org/conference/usenixsecurity23/presentation/kim-yoonsang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kim-yoonsang.pdf](https://www.usenix.org/system/files/usenixsecurity23-kim-yoonsang.pdf)
## No Single Silver Bullet: Measuring the Accuracy of Password Strength Meters.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#no-single-silver-bullet-measuring-the-accuracy-of-password-strength-meters) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#no-single-silver-bullet-measuring-the-accuracy-of-password-strength-meters)**
### 作者
* Ding Wang, Nankai University
* Xuan Shan, Nankai University
* Qiying Dong, Nankai University
* Yaosheng Shen, Peking University
* Chunfu Jia, Nankai University
### 摘要
> 为了帮助用户创建更强的密码，几乎所有受人尊敬的网络服务都采用了密码强度评估器（PSM）来在用户注册和密码更改时提供实时的强度反馈。最近的研究发现，提供准确反馈的PSM确实能有效地推动用户选择更强的密码。因此，系统评估现有的PSM以便选择准确的PSM是至关重要的。在本文中，我们强调了衡量PSM准确性的单一银弹度量标并不存在：对于每种给定的猜测情景和策略，需要具体的度量标准。我们研究了在线和离线猜测情景的内在特性，并首次提出了一个系统化的评估框架，该框架由四个不同维度的准确性评估标准组成，用于评估这两种密码猜测情景下PSM的准确性（以及各种猜测策略）。
> 
> 具体而言，在在线猜测中，具有不同受欢迎程度的密码的强度误判对PSM的准确性会产生不同的影响，我们建议采用加权斯皮尔曼度量标，并考虑两个典型的攻击者：一般攻击者对目标密码分布不知情，和知情的攻击者对目标密码分布知情。在离线猜测中，由于已破解的密码通常比未破解的密码更弱，并且它们对应着两个不同的分布，我们采用了Kullback-Leibler散度度量标，并研究了四种最典型的猜测策略：暴力破解、基于字典、基于概率，以及上述三种策略的组合。特别是，我们提出了精确度度量标来衡量在将非分级强度反馈（例如概率）转化为易于理解的分级/得分（例如[弱，中，强]）时，PSM的准确性。我们进一步引入了一个调和的精确度度量标，以描述在不同方向的强度误判（例如弱→强和强→弱）对PSM准确性的影响。通过对14个真实世界密码数据集进行评估，借助12个主要PSM的评估，我们证明了我们评估框架的有效性和实用性。最后，我们提供了三个建议，用于提高PSM的准确性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-ding-silver-bullet](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-ding-silver-bullet)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-ding-silver-bullet.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-ding-silver-bullet.pdf)
## Password Guessing Using Random Forest.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#password-guessing-using-random-forest) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#password-guessing-using-random-forest)**
### 作者
* Ding Wang, Nankai University
* Yunkai Zou, Nankai University
* Zijian Zhang, Peking University
* Kedong Xiu, Nankai University
### 摘要
> 密码是最广泛使用的身份验证方法，猜测攻击是对密码强度评估最有效的方法。然而，现有的密码猜测模型通常是基于传统统计学或深度学习构建的，对于利用经典机器学习进行密码猜测的研究还很少见。
> 
> 为了填补这一空白，本文提供了一种全新的密码猜测技术路线。具体而言，我们重新编码密码字符，并使得一系列解决多类分类问题（如随机森林、提升算法及其变体等）的经典机器学习技术能够用于密码猜测。此外，我们提出了基于随机森林的框架RFGuess，该框架刻画了三种最具代表性的密码猜测场景（即扫描式猜测、基于个人可识别信息（PII）的有针对性猜测以及基于用户密码重用行为的有针对性猜测）。
> 
> 除了理论意义外，这项工作还具有实际价值。使用13个大型实际密码数据集进行的实验表明，我们基于随机森林的猜测模型具有有效性：（1）RFGuess适用于扫描式猜测场景，其猜测成功率与主要对手模型相当；（2）RFGuess-PII用于基于PII的有针对性猜测，在100次猜测中可以猜测出20%~28%的常见用户，优于主要对手模型7%~13%；（3）RFGuess-Reuse用于基于用户密码重用/修改行为的有针对性猜测，在相关模型中表现最佳或第二佳。我们相信这项工作对于将经典机器学习技术引入密码猜测领域迈出了重要一步。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-ding-password-guessing](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-ding-password-guessing)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-ding-password-guessing.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-ding-password-guessing.pdf)
## Pass2Edit: A Multi-Step Generative Model for Guessing Edited Passwords.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#pass2edit-a-multi-step-generative-model-for-guessing-edited-passwords) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#pass2edit-a-multi-step-generative-model-for-guessing-edited-passwords)**
### 作者
* Ding Wang, Nankai University
* Yunkai Zou, Nankai University
* Yuan-An Xiao, Peking University
* Siqi Ma, The University of New South Wales
* Xiaofeng Chen, Xidian University
### 摘要
> 尽管密码填充攻击（利用直接密码重用行为）引起了相当大的关注，但只有少数研究探讨了密码调整攻击，即攻击者利用用户的间接重用行为（使用插入、删除和替换等编辑操作）。我们首次将密码调整攻击建模为多类分类问题，以表征用户的密码编辑/修改过程，并提出了一个结合多步决策机制的生成模型 Pass2Edit，以准确表征用户的密码重用/修改行为。
> 
> 通过大量实验证明了 Pass2Edit 的有效性，实验涵盖了12个实际攻击场景，并使用了48亿个真实世界的密码。实验结果表明，Pass2Edit 及其变种相对于先前的方法有了显著改进。具体而言，在已知受害者在站点A（即pwA）的密码时，Pass2Edit 在100次猜测内能够成功破解她在站点B（pwB ≠ pwA）的密码的成功率分别为24.2%（对于普通用户）和11.7%（对于安全懂行的用户），比其前辈方法高出18.2%-33.0%。我们的结果突显出，密码调整对密码安全造成的威胁要比预期的更大。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-ding-pass2edit](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-ding-pass2edit)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-ding-pass2edit.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-ding-pass2edit.pdf)
## Improving Real-world Password Guessing Attacks via Bi-directional Transformers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#improving-real-world-password-guessing-attacks-via-bi-directional-transformers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#improving-real-world-password-guessing-attacks-via-bi-directional-transformers)**
### 作者
* Ming Xu, Fudan University
* Jitao Yu, Fudan University
* Xinyi Zhang, Facebook
* Chuanwang Wang, Fudan University
* Shenghao Zhang, Fudan University
* Haoqi Wu, Fudan University
* Weili Han, Fudan University
### 摘要
> 密码猜测攻击是现实世界中普遍存在的问题，可以被概念化为用于近似文本标记的概率分布的努力。自然语言处理（NLP）领域的技术自然适用于密码猜测。其中，双向转换器以其能够利用双向上下文来捕捉文本中的细微差别的能力而脱颖而出。
> 
> 为了进一步提高密码猜测攻击的效果，我们提出了一种基于双向转换器的猜测框架，称为PassBERT，它将预训练/微调范式应用于密码猜测攻击。我们首先准备了一个经过预训练的密码模型，其中包含了一般密码分布的知识。然后，针对以下真实攻击场景，我们设计了三种攻击特定的微调方法，以使预训练的密码模型适应：（1）条件密码猜测，即在给定部分密码的情况下恢复完整密码；（2）目标密码猜测，即利用个人信息来破解特定用户的密码；（3）自适应基于规则的密码猜测，即为单词（即基本密码）选择自适应的错位规则，以生成规则转换后的密码候选。实验证据显示，我们的微调模型在这三种攻击中分别比现有最先进的模型提高了14.53%、21.82%和4.86%，证明了双向转换器在下游猜测攻击中的有效性。最后，我们提出了一种混合密码强度测量器来减轻这三种攻击带来的风险。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xu-ming](https://www.usenix.org/conference/usenixsecurity23/presentation/xu-ming)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xu-ming.pdf](https://www.usenix.org/system/files/usenixsecurity23-xu-ming.pdf)
## Araña: Discovering and Characterizing Password Guessing Attacks in Practice.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#ara-a-discovering-and-characterizing-password-guessing-attacks-in-practice) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#ara-a-discovering-and-characterizing-password-guessing-attacks-in-practice)**
### 作者
* Mazharul Islam, University of Wisconsin–Madison
* Marina Sanusi Bohuk, Cornell Tech
* Paul Chung, University of Wisconsin–Madison
* Thomas Ristenpart, Cornell Tech
* Rahul Chatterjee, University of Wisconsin–Madison
### 摘要
> 远程密码猜测攻击仍然是账户妥协的主要来源之一。了解和描述攻击者策略对于提高安全性至关重要，但由于登录服务的敏感性和对良性和恶意登录请求缺乏真实标签，迄今为止进行这样的研究一直很具挑战性。我们对两所大型大学的猜测攻击进行了深入的测量研究。利用两所大学超过3400万次登录请求的丰富数据集以及成千上万份妥协报告，我们成功开发了一种新的分析流程，以识别出29个攻击集群，其中许多涉及以前未知的安全工程师的妥协情况。我们的分析提供了迄今为止对密码猜测攻击的最丰富的研究，从登录服务的角度来看。我们相信我们的工具将在未来努力开发攻击活动的实时检测方面非常有用，我们对攻击活动的描述可以更广泛地指导减轻设计。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/islam](https://www.usenix.org/conference/usenixsecurity23/presentation/islam)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-islam.pdf](https://www.usenix.org/system/files/usenixsecurity23-islam.pdf)
## PoliGraph: Automated Privacy Policy Analysis using Knowledge Graphs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#poligraph-automated-privacy-policy-analysis-using-knowledge-graphs) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#poligraph-automated-privacy-policy-analysis-using-knowledge-graphs)**
### 作者
* Hao Cui, University of California, Irvine
* Rahmadi Triman, University of California, Irvine
* a, University of California, Irvine
* Athina Markopoulou, University of California, Irvine
* Scott Jordan, University of California, Irvine
### 摘要
> 隐私政策披露了组织如何收集和处理个人信息。最近的工作在利用自然语言处理（NLP）自动化隐私政策分析和从不同句子中提取数据收集声明方面取得了进展，这些句子在孤立地考虑。在本文中，我们首次以一种综合的方式查看和分析隐私政策的整个文本。在方法论方面：（1）我们定义PoliGraph，一种捕捉隐私政策陈述作为文本不同部分之间关系的知识图谱类型；（2）我们开发了基于NLP的工具PoliGraph-er，用于从文本中自动提取PoliGraph。此外，（3）我们重新审视了以往以启发式方式定义的本体概念，以捕捉术语之间的包含关系。我们清晰区分了本地和全局本体，以捕获个别隐私政策、应用领域和隐私法律的上下文。通过使用一个公共数据集进行评估，我们展示了PoliGraph-er识别出比以往最先进方法多40%的收集声明，准确率达到97%。在应用方面，PoliGraph使得对一系列隐私政策进行自动化分析成为可能，我们可以：（1）揭示不同隐私政策文本之间的共同模式，以及（2）评估隐私政策内部术语的正确性。我们还应用PoliGraph来：（3）检测隐私政策中的矛盾，展示了以前的工作存在的虚假告警，以及（4）分析隐私政策和网络流量的一致性，我们比以往的工作发现了更多明确的披露。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cui](https://www.usenix.org/conference/usenixsecurity23/presentation/cui)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cui.pdf](https://www.usenix.org/system/files/usenixsecurity23-cui.pdf)
## Calpric: Inclusive and Fine-grain Labeling of Privacy Policies with Crowdsourcing and Active Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#calpric-inclusive-and-fine-grain-labeling-of-privacy-policies-with-crowdsourcing-and-active-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#calpric-inclusive-and-fine-grain-labeling-of-privacy-policies-with-crowdsourcing-and-active-learning)**
### 作者
* Wenjun Qiu, University of Toronto
* David Lie, University of Toronto
* Lisa Austin, University of Toronto
### 摘要
> 在训练精确的深度学习隐私政策模型中，获得大规模全面的训练数据集是一个重要挑战，因为其代价高且难度大。为了解决这些问题，我们提出了Calpric，它结合了自动文本选择和分割、主动学习以及众包标注者的使用，以低成本生成一个大型均衡的隐私政策训练集。自动文本选择和分割简化了标注任务，使得来自众包平台（如亚马逊的Mechanical Turk）的未经训练的标注者能够与经过训练的标注者（如法学院学生）具有竞争力，并且减少了标注者间的一致性，降低了标注成本。具备可靠的训练标签还可以利用主动学习，使用较少的训练样本来高效覆盖输入空间，进一步降低成本并改善数据集中的类别平衡和数据类别平衡。
> 
> 这些技术的结合使得Calpric能够生成在更广泛的数据类别上准确的模型，并提供比之前工作更详细、细粒度的标签。我们的众包流程使得Calpric能够以每个标注文本段的成本约为0.92-1.71美元的代价获得可靠的标记数据。Calpric的训练过程还生成了一个包含9个数据类别、正负样本平衡的16,000个隐私政策文本段的标记数据集。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/qiu](https://www.usenix.org/conference/usenixsecurity23/presentation/qiu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-qiu.pdf](https://www.usenix.org/system/files/usenixsecurity23-qiu.pdf)
## POLICYCOMP: Counterpart Comparison of Privacy Policies Uncovers Overbroad Personal Data Collection Practices.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#policycomp-counterpart-comparison-of-privacy-policies-uncovers-overbroad-personal-data-collection-practices) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#policycomp-counterpart-comparison-of-privacy-policies-uncovers-overbroad-personal-data-collection-practices)**
### 作者
* Lu Zhou, Xidian University and Shanghai Jiao Tong University
* Chengyongxiao Wei, Shanghai Jiao Tong University
* Tong Zhu, Shanghai Jiao Tong University
* Guoxing Chen, Shanghai Jiao Tong University
* Xiaokuan Zhang, George Mason University
* Suguo Du, Shanghai Jiao Tong University
* Hui Cao, Shanghai Jiao Tong University
* Haojin Zhu, Shanghai Jiao Tong University
### 摘要
> 由于移动应用程序的隐私政策通常很复杂，因此已经开发了各种工具来检查隐私政策是否存在矛盾，并验证隐私政策是否与应用程序的行为一致。然而，据我们所知，没有先前的研究回答个人数据收集实践（PDCPs）在应用程序隐私政策中是否是必要的（即是否遵守数据最小化原则）。尽管大多数现有的隐私法规/法律（如GDPR）定义了数据最小化原则，但是根据不同的上下文（如不同的开发者和目标用户），该原则已经被翻译成不同的隐私实践。最后，只要开发者获得用户的授权，他们就可以收集隐私政策中声明的个人数据。
> 
> 目前，这主要依赖于法律专家根据具体情况手动审查个人数据收集的必要性，但对于数百万个应用程序来说，这种方式不太可扩展。在这项研究中，我们旨在从对等比较的角度自动调查应用程序隐私政策中的PDCPs是否过于宽泛。我们的基本见解是，如果一个应用程序在其隐私政策中声称收集的个人数据比大多数类似应用程序要多得多，那么它更有可能进行过度宽泛的收集。为了实现这一目标，我们提出了POLICYCOMP，一个用于检测过度宽泛PDCPs的自动框架。我们使用POLICYCOMP对10,042个隐私政策进行了大规模分析，并标记出48.29％的PDCPs过于宽泛。我们将我们的发现与2,000个应用程序开发者分享，并收到了来自他们的52个回应，其中39个承认我们的发现并采取了行动（如删除过度宽泛的PDCPs）。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhou-lu](https://www.usenix.org/conference/usenixsecurity23/presentation/zhou-lu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhou-lu.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhou-lu.pdf)
## Lalaine: Measuring and Characterizing Non-Compliance of Apple Privacy Labels.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#lalaine-measuring-and-characterizing-non-compliance-of-apple-privacy-labels) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#lalaine-measuring-and-characterizing-non-compliance-of-apple-privacy-labels)**
### 作者
* Yue Xiao, Indiana University Bloomington
* Zhengyi Li, Indiana University Bloomington
* Yue Qin, Indiana University Bloomington
* Xiaolong Bai, Orion Security Lab, Alibaba Group
* Jiale Guan, Indiana University Bloomington
* Xiaojing Liao, Indiana University Bloomington
* Luyi Xing, Indiana University Bloomington
### 摘要
> 作为对众所周知的冗长且难以阅读的隐私政策的重要补充，苹果推出了应用隐私标签，据称可以帮助用户更容易地了解应用的隐私实践。然而，虚假和误导性的隐私标签可能会欺骗注重隐私的消费者下载数据密集型的应用，最终损害标签的可信度和完整性。虽然苹果发布了应用开发者创建隐私标签的要求和指南，但人们对野外隐私标签是否准确合规，反映了iOS应用的实际数据实践，知之甚少。
> 
> 本文提出了第一项系统性研究，基于我们的名为Lalaine的新方法来评估数据流向隐私标签一致性流向标签。Lalaine完全分析了5102个iOS应用的隐私标签和二进制文件，揭示了隐私标签不合规的普遍性和严重性。我们提供了详细的案例研究，并分析了导致隐私标签不合规的根本原因，为之前的理解提供了补充。这为改进隐私标签的设计和合规要求提供了新的见解，使应用开发者、平台利益相关者和决策者能够更好地实现隐私和问责目标。Lalaine经过了高效和有效的全面评估。我们会负责任地向利益相关者报告结果。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xiao-yue](https://www.usenix.org/conference/usenixsecurity23/presentation/xiao-yue)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xiao-yue.pdf](https://www.usenix.org/system/files/usenixsecurity23-xiao-yue.pdf)
## Automated Cookie Notice Analysis and Enforcement.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#automated-cookie-notice-analysis-and-enforcement) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#automated-cookie-notice-analysis-and-enforcement)**
### 作者
* Rishabh Kh, University of Wisconsin—Madison
* elwal, University of Wisconsin—Madison
* Asmit Nayak, University of Wisconsin—Madison
* Hamza Harkous, Google, Inc.
* Kassem Fawaz, University of Wisconsin—Madison
### 摘要
> 在线网站使用Cookie提示通知来征求用户的同意，这是近期隐私法规（如GDPR和CCPA）要求的内容。此前的研究表明，这些通知设计出来是为了操控用户，让他们做出有利于网站的选择，从而使用户的隐私面临风险。在本研究中，我们提出了CookieEnforcer，这是一个新的系统，可以自动发现Cookie提示通知，并提取一系列指令以禁用所有非必需的Cookie。为了实现这一目标，我们首先建立了一个自动Cookie提示检测器，利用HTML元素的呈现模式来识别Cookie提示通知。接下来，我们分析Cookie提示通知，并预测所需的一系列操作来禁用所有不必要的Cookie。这通过将问题建模成一个序列到序列的任务来完成，其中输入是可机读的Cookie提示通知，输出是要进行的点击集合。我们通过一个端到端的准确性评估展示了CookieEnforcer的有效性，结果显示它可以在91%的情况下生成所需步骤。通过用户研究，我们还展示了CookieEnforcer可以显著减少用户的努力。最后，我们对来自Tranco列表的前100,000个网站的CookieEnforcer行为进行了表征，展示了其稳定性和可扩展性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/khandelwal](https://www.usenix.org/conference/usenixsecurity23/presentation/khandelwal)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-khandelwal.pdf](https://www.usenix.org/system/files/usenixsecurity23-khandelwal.pdf)
## Continuous Learning for Android Malware Detection.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#continuous-learning-for-android-malware-detection) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#continuous-learning-for-android-malware-detection)**
### 作者
* Yizheng Chen, UC Berkeley
* Zhoujie Ding, UC Berkeley
* David Wagner, UC Berkeley
### 摘要
> 机器学习方法可以非常准确地检测Android恶意软件。然而，这些分类器存在一个致命弱点，即概念漂移：由于恶意应用和良性应用的演进，它们很快过时且失效。我们的研究发现，在用一年的数据对Android恶意软件分类器进行训练后，经过6个月的在新的测试样本上的部署，F1得分迅速从0.99下降到0.76。
> 
> 在本文中，我们提出了解决Android恶意软件分类器概念漂移问题的新方法。由于机器学习技术需要持续部署，我们采用主动学习：我们选择新的样本供分析员标注，然后将标注的样本添加到训练集中重新训练分类器。我们的核心思想是，基于相似性的不确定性对抗概念漂移更加强大。因此，我们将对比学习与主动学习相结合。我们提出了一种新的层次化对比学习方案，并提出了一种新的样本选择技术来持续训练Android恶意软件分类器。我们的评估结果显示，与以前发表的主动学习方法相比，这导致了显著的改进。我们的方法将误报率从14%（最佳基准线）降低到9%，同时降低了误报率（从0.86%降低到0.48%）。此外，我们的方法在七年的时间段内保持了更加一致的性能。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-yizheng](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-yizheng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-yizheng.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-yizheng.pdf)
## Humans vs. Machines in Malware Classification.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#humans-vs-machines-in-malware-classification) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#humans-vs-machines-in-malware-classification)**
### 作者
* Simone Aonzo, EURECOM
* Yufei Han, INRIA
* Aless, EURECOM
* ro Mantovani, EURECOM
* Davide Balzarotti, EURECOM
### 摘要
> 今天，将文件分类为良性还是恶意是通过确定性指标（如防病毒规则）、机器学习分类器以及人类专家的判断的组合来完成的。
> 
> 然而，为了比较人类和机器智能在恶意软件分析中的差异，首先需要了解人类主体如何进行恶意软件分类。在这个方向上，我们的工作提出了第一项实验研究，旨在捕捉人类和机器智能在恶意软件分类中如何将可疑程序的“特征”（例如静态属性或运行时行为）优先考虑。为了达到这个目的，我们创建了一个恶意软件分类游戏，全球共有110名人类玩家参与，他们的资深程度不同（72名新手和38名专家），他们竞争基于详细的沙盒报告对最多数量的未知样本进行分类。令人惊讶的是，我们发现无论是专家还是新手，他们的决策都基于大致相同的特征，尽管两个经验级别之间存在明显差异。
> 
> 此外，我们实现了两个最先进的机器学习模型用于恶意软件分类，并评估它们在同一组样本上的性能。结果的比较分析揭示了两个机器学习模型都偏好的一组常见特征，并帮助更好地理解特征提取的差异。
> 
> 该研究反映了人类和计算机算法的决策过程及其从相同数据中提取信息的不同方式。其发现可用于多个目的，包括培训更好的恶意软件分析师和改进特征编码。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/aonzo](https://www.usenix.org/conference/usenixsecurity23/presentation/aonzo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-aonzo.pdf](https://www.usenix.org/system/files/usenixsecurity23-aonzo.pdf)
## Adversarial Training for Raw-Binary Malware Classifiers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#adversarial-training-for-raw-binary-malware-classifiers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#adversarial-training-for-raw-binary-malware-classifiers)**
### 作者
* Keane Lucas, Carnegie Mellon University
* Samruddhi Pai, Carnegie Mellon University
* Weiran Lin, Carnegie Mellon University
* Lujo Bauer, Carnegie Mellon University
* Michael K. Reiter, Duke University
* Mahmood Sharif, Tel Aviv University
### 摘要
> 机器学习（ML）模型在将原始可执行文件（二进制文件）分类为恶意或良性方面表现出了高准确性，这为学术界和实际的恶意软件检测提供了越来越多基于ML的分类方法的影响力，这是网络安全中的关键工具。然而，以前的工作通过创建恶意二进制文件的变种，也就是所谓的对抗样本，以功能保持不变的方式转换来规避检测，引发了人们的谨慎。在这项工作中，我们研究了使用对抗性训练方法创建更加抗击一些最新攻击的恶意软件分类模型的有效性。为了训练我们最强大的模型，我们显著提高了创建对抗样本的效率和规模，以使对抗性训练成为可行的方法，这在以前的原始二进制恶意软件检测器中尚未完成。然后，我们分析了对抗性训练长度的不同效果，以及使用不同类型攻击进行训练的效果。我们发现，数据增强并不能阻止最新的攻击，但使用通用梯度引导方法，在其他离散域中使用的方法可以提高模型的鲁棒性。我们还展示了在大多数情况下，通过对抗性训练使用相同攻击的低努力版本可以使模型对恶意软件领域的攻击更加鲁棒。在最好的情况下，我们将一种最新攻击的成功率从90％降低到5％。我们还发现，使用某些类型的攻击进行训练可以增加对其他类型攻击的鲁棒性。最后，我们讨论了从我们的结果中获得的见解，以及如何更有效地利用它们来训练强大的恶意软件检测器。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lucas](https://www.usenix.org/conference/usenixsecurity23/presentation/lucas)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lucas.pdf](https://www.usenix.org/system/files/usenixsecurity23-lucas.pdf)
## Black-box Adversarial Example Attack towards FCG Based Android Malware Detection under Incomplete Feature Information.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#black-box-adversarial-example-attack-towards-fcg-based-android-malware-detection-under-incomplete-feature-information) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#black-box-adversarial-example-attack-towards-fcg-based-android-malware-detection-under-incomplete-feature-information)**
### 作者
* Heng Li, Huazhong University of Science and Technology
* Zhang Cheng, NSFOCUS Technologies Group Co., Ltd. and Huazhong University of Science and Technology
* Bang Wu, Huazhong University of Science and Technology
* Liheng Yuan, Huazhong University of Science and Technology
* Cuiying Gao, Huazhong University of Science and Technology
* Wei Yuan, Huazhong University of Science and Technology
* Xiapu Luo, The Hong Kong Polytechnic University
### 摘要
> 基于函数调用图（FCG）的Android恶意软件检测方法近年来引起了越来越多的关注，因为它们表现出很好的性能。然而，这些方法容易受到对抗性样本（AEs）的攻击。在本文中，我们设计了一种针对基于FCG的恶意软件检测系统的新型黑盒对抗性样本攻击，称为BagAmmo。为了误导目标系统，BagAmmo有意地通过向恶意软件代码中插入“从未执行过”的函数调用来扰乱其FCG特征。主要挑战有两个。首先，对抗性扰动不应改变恶意软件的功能。其次，目标系统的信息（如图特征粒度和输出概率）是缺失的。
> 
> 为了保留恶意软件的功能，BagAmmo采用了try-catch陷阱来插入函数调用以扰乱恶意软件的FCG。在没有关于特征粒度和输出概率的知识的情况下，BagAmmo采用了生成对抗网络（GAN）的架构，并利用了多种群共进化算法（即Apoem）来生成所需的扰动。Apoem中的每个种群表示一种可能的特征粒度，当Apoem收敛时，可以实现真实的特征粒度。
> 
> 通过对超过44k个Android应用程序和32个目标模型进行大量实验，我们评估了BagAmmo的有效性、效率和弹性。BagAmmo在MaMaDroid、APIGraph和GCN上实现了超过99.9%的攻击成功率，并且在概念漂移和数据不平衡的情况下仍然表现良好。此外，BagAmmo在攻击成功率上优于最先进的攻击方法SRL。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-heng](https://www.usenix.org/conference/usenixsecurity23/presentation/li-heng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-heng.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-heng.pdf)
## Evading Provenance-Based ML Detectors with Adversarial System Actions.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#evading-provenance-based-ml-detectors-with-adversarial-system-actions) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#evading-provenance-based-ml-detectors-with-adversarial-system-actions)**
### 作者
* Kunal Mukherjee, The University of Texas at Dallas
* Joshua Wiedemeier, The University of Texas at Dallas
* Tianhao Wang, The University of Texas at Dallas
* James Wei, The University of Texas at Dallas
* Feng Chen, The University of Texas at Dallas
* Muhyun Kim, The University of Texas at Dallas
* Murat Kantarcioglu, The University of Texas at Dallas
* Kangkook Jee, The University of Texas at Dallas
### 摘要
> 我们提出了PROVNINJA，这是一个旨在生成对源自溯源的机器学习（ML）安全检测器进行躲避的对抗攻击的框架。PROVNINJA旨在识别和设计对系统程序进行统计模仿和冒充的对抗攻击向量。
> 
> 通过利用在众多主机和网络中常见的系统进程的良性执行特征，我们的研究提出了一种高效且有效的方法来探测回避的替代方案，并设计出难以与良性系统行为区分的隐秘攻击向量。PROVNINJA最初在特征空间中提出对回避攻击的建议，然后将其转化为系统行为，从而在问题空间中实现实际的回避攻击序列。
> 
> 在使用两个现实的高级持续性威胁（APT）场景和大量无文件恶意软件样本进行评估时，PROVNINJA能够生成和实现回避攻击的变种，将检测率降低了高达59%。我们还在对对手知识和能力进行不同假设的情况下对PROVNINJA进行了评估。虽然PROVNINJA主要考虑黑盒模型，但我们还探索了两种截然不同的威胁模型，其中考虑了盲攻击和白盒攻击场景。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/mukherjee](https://www.usenix.org/conference/usenixsecurity23/presentation/mukherjee)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-mukherjee.pdf](https://www.usenix.org/system/files/usenixsecurity23-mukherjee.pdf)
## TreeSync: Authenticated Group Management for Messaging Layer Security.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#treesync-authenticated-group-management-for-messaging-layer-security) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#treesync-authenticated-group-management-for-messaging-layer-security)**
### 作者
* Théophile Wallez, Inria Paris
* Jonathan Protzenko, Microsoft Research
* Benjamin Beurdouche, Mozilla
* Karthikeyan Bhargavan, Inria Paris
### 摘要
> 消息层安全（MLS）是目前正在IETF（互联网工程任务组）进行标准化的异步群组消息协议，旨在为大型动态群组提供高效率，并提供前向保密（FS）和妥协后安全（PCS）等强有力的保证。尽管之前关于MLS的研究工作广泛研究了其群组密钥建立组件（称为TreeKEM），但MLS早期设计中存在的许多缺陷源于其群组完整性和认证机制，这些机制尚未被很好地理解。在这项工作中，我们确定并形式化了TreeSync：MLS的子协议，它指定了共享群组状态，定义了群组管理操作，并确保群组状态在所有成员之间的一致性、完整性和认证。
> 
> 我们提出了一个精确的、可执行的、经过机器验证的TreeSync形式化规范，并展示了如何将其与其他组件组合以实现完整的MLS协议。我们的规范是用F*编写的，并作为MLS的参考实现；它通过了RFC的测试向量，并与其他MLS实现可以互操作。使用DY*符号协议分析框架，我们对TreeSync的完整性和认证保证进行形式化和证明，在对MLS的其余部分进行最小的安全假设下。我们的分析发现了一种新的攻击，并提出了几个变更，已纳入最新的MLS草案中。我们的规范是MLS的首个可测试的、机器验证的、形式化规范，对于对这一即将到来的标准感兴趣的开发人员和研究人员应该很有吸引力。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wallez](https://www.usenix.org/conference/usenixsecurity23/presentation/wallez)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wallez.pdf](https://www.usenix.org/system/files/usenixsecurity23-wallez.pdf)
## Formal Analysis of Session-Handling in Secure Messaging: Lifting Security from Sessions to Conversations.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#formal-analysis-of-session-handling-in-secure-messaging-lifting-security-from-sessions-to-conversations) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#formal-analysis-of-session-handling-in-secure-messaging-lifting-security-from-sessions-to-conversations)**
### 作者
* Cas Cremers, CISPA Helmholtz Center for Information Security
* Charlie Jacomme, Inria Paris
* Aurora Naska, CISPA Helmholtz Center for Information Security
### 摘要
> 安全通信应用程序的构建模块，如Signal的X3DH和Double Ratchet(DR)协议，在研究界引起了广泛关注。它们被证明能够在面临妥协的情况下满足强安全属性，如前向保密性(FS)和妥协后安全性(PCS)。然而，目前在应用层面对这些属性的形式研究还存在不足。虽然研究工作已经在单个链路的情境下研究了这些属性，但在消息应用程序中，两个人之间的对话实际上可能是多个链路合并的结果。
> 
> 在本研究中，我们首次在考虑会话处理层的情况下对安全通信进行形式分析，并将我们的方法应用于Signal的会话管理器Sesame。我们首先通过实验证明使用Double Ratchet的Signal在某些实际情景中可能会被克隆攻击者违反PCS。我们确定了这是由Signal的会话处理层所启用的。然后，我们设计了Signal会话处理层的形式模型，该模型可用于与Tamarin prover进行自动验证，并利用该模型重新发现PCS违规问题，并提出了两种可证明安全的机制，以提供更强的保证。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cremers-session-handling](https://www.usenix.org/conference/usenixsecurity23/presentation/cremers-session-handling)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cremers-session-handling.pdf](https://www.usenix.org/system/files/usenixsecurity23-cremers-session-handling.pdf)
## Cryptographic Administration for Secure Group Messaging.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#cryptographic-administration-for-secure-group-messaging) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#cryptographic-administration-for-secure-group-messaging)**
### 作者
* David Balbás, IMDEA Software Institute & Universidad Politécnica de Madrid
* Daniel Collins, EPFL
* Serge Vaudenay, EPFL
### 摘要
> 许多现实世界的群组消息系统将群组管理委托给应用程序级别，未能提供与群组成员身份相关的正式保证。采用密码学方法来进行群组管理可以防止在实现和协议设计中出现导致群组成员失去保密性和一致性的问题。
> 
> 在本研究中，我们引入了一个密码学框架，用于设计能够为群组成员提供强大安全保证的群组消息协议。为此，我们扩展了正在进行中的IETF MLS群组消息标准化过程中使用的连续群组密钥协商（CGKA）范式，并引入了管理的CGKA（A-CGKA）原语。我们的原语本地支持一部分群组成员（群组管理员）控制参与者的添加和移除，并以安全方式更新自己的密钥材料。值得注意的是，我们的安全模型甚至可以防止被破坏的（非管理员）成员伪造修改群组成员身份的消息。此外，我们提出了两种高效且模块化的群组管理员构建方法，这些方法在我们的定义下是正确且安全的。最后，我们提出、实现并对集成了密码管理员的高效MLS扩展进行了基准测试。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/balbas](https://www.usenix.org/conference/usenixsecurity23/presentation/balbas)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-balbas.pdf](https://www.usenix.org/system/files/usenixsecurity23-balbas.pdf)
## Wink: Deniable Secure Messaging.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#wink-deniable-secure-messaging) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#wink-deniable-secure-messaging)**
### 作者
* Anrin Chakraborti, Duke University
* Darius Suciu, Stony Brook University
* Radu Sion, Stony Brook University
### 摘要
> 端到端加密（E2EE）消息传递是提供消息机密性的重要第一步。不幸的是，当密钥或明文因设备被攻破或强大对手的胁迫而泄露时，所有端到端加密的安全保证都将丧失。本研究介绍了Wink，这是第一个能够保护部分设备被攻破和被强迫泄露密钥情况下的消息机密性的可信否认式消息系统。Wink可以偷偷地将隐藏消息注入到标准随机硬币中，例如在现有E2EE协议中使用的“盐”和“初始化向量”中。它作为合法的安全加密功能的一部分部署在广泛可用的可信执行环境（TEE）TrustZone中。这将导致使用几乎未改变的现有E2EE消息应用进行隐藏通信，并具有强大的可信否认性。Wink已经在多个现有E2EE应用（包括Telegram和Signal）中展示，并且只需最少的（外部）仪器，几乎没有额外开销，并且至关重要的是，不需要改变消息格式。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chakraborti-wink](https://www.usenix.org/conference/usenixsecurity23/presentation/chakraborti-wink)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chakraborti-wink.pdf](https://www.usenix.org/system/files/usenixsecurity23-chakraborti-wink.pdf)
## Three Lessons From Threema: Analysis of a Secure Messenger.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#three-lessons-from-threema-analysis-of-a-secure-messenger) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#three-lessons-from-threema-analysis-of-a-secure-messenger)**
### 作者
* Kenneth G. Paterson, ETH Zurich
* Matteo Scarlata, ETH Zurich
* Kien Tuong Truong, ETH Zurich
### 摘要
> 我们对Threema进行了广泛的密码学分析，Threema是一款总部位于瑞士的加密消息应用程序，拥有超过1000万用户和7000家企业客户。我们针对该协议提出了七种不同的攻击方法，并分别在三种不同的威胁模型下进行了研究。我们讨论了这些攻击的影响和修复方法，同时我们还负责任地将这些问题提供给了Threema，他们进行了修复。最后，我们就安全协议的开发者们提出了更广泛的教训。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/paterson](https://www.usenix.org/conference/usenixsecurity23/presentation/paterson)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-paterson.pdf](https://www.usenix.org/system/files/usenixsecurity23-paterson.pdf)
## MorFuzz: Fuzzing Processor via Runtime Instruction Morphing enhanced Synchronizable Co-simulation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#morfuzz-fuzzing-processor-via-runtime-instruction-morphing-enhanced-synchronizable-co-simulation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#morfuzz-fuzzing-processor-via-runtime-instruction-morphing-enhanced-synchronizable-co-simulation)**
### 作者
* Jinyan Xu, Zhejiang University
* Yiyuan Liu, Zhejiang University
* Sirui He, City University of Hong Kong
* Haoran Lin, Zhejiang University
* Yajin Zhou, Zhejiang University
* Cong Wang, City University of Hong Kong
### 摘要
> 现代处理器过于复杂，难以完全免于错误。最近，一些硬件模糊测试技术在验证处理器设计方面取得了有希望的结果。然而，由于处理器的复杂性，它们受到复杂的输入语法、误导性的变异指导和模型实现差异的困扰。因此，如何有效高效地验证处理器仍然是一个未解决的问题。
> 
> 本文提出了一种名为MorFuzz的新型处理器模糊测试工具，可以高效地发现可由软件触发的硬件错误。MorFuzz的核心思想是利用运行时信息生成具有有效格式和有意义语义的指令流。MorFuzz设计了一种新的输入结构，提供多层次的运行时变异原语，并提出了指令变形技术来动态变异指令。此外，我们还将协同模拟框架扩展到各种微体系结构，并开发了状态同步技术来消除实现差异。我们在三个流行的开源RISC-V处理器上评估了MorFuzz：CVA6、Rocket和BOOM，并发现了17个新的错误（其中13个CVE编号）。我们的评估结果显示，MorFuzz实现了4.4倍和1.6倍的状态覆盖率，优于最先进的模糊测试工具DifuzzRTL和著名的约束指令生成工具riscv-dv。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xu-jinyan](https://www.usenix.org/conference/usenixsecurity23/presentation/xu-jinyan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xu-jinyan.pdf](https://www.usenix.org/system/files/usenixsecurity23-xu-jinyan.pdf)
## µFUZZ: Redesign of Parallel Fuzzing using Microservice Architecture.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fuzz-redesign-of-parallel-fuzzing-using-microservice-architecture) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fuzz-redesign-of-parallel-fuzzing-using-microservice-architecture)**
### 作者
* Yongheng Chen, Georgia Institute of Technology
* Rui Zhong, Pennsylvania State University
* Yupeng Yang, Georgia Institute of Technology
* Hong Hu, Pennsylvania State University
* Dinghao Wu, Pennsylvania State University
* Wenke Lee, Georgia Institute of Technology
### 摘要
> 模糊测试已经被广泛采用作为一种有效的软件缺陷检测技术。研究人员已经探索了许多并行模糊测试方法来加快缺陷检测速度。然而，现有方法都是基于串行模糊测试器的，并且依赖于定期进行状态同步。这种设计存在两个局限性。首先，模糊测试器的同步串行设计可能会因为阻塞的I/O操作而浪费CPU资源。其次，状态同步要么发生得太晚，导致我们采用了次优的策略进行模糊测试；要么发生得太频繁，导致产生了巨大的开销。
> 
> 本文中，我们使用微服务架构重新设计了并行模糊测试，并提出了原型系统μFUZZ。为了在存在I/O的情况下更好地利用CPU资源，μFUZZ将同步模糊测试循环拆分为并发的微服务，每个微服务都有多个工作线程。为了避免状态同步，μFUZZ将状态分割到不同的服务及其工作线程中，使它们能够独立工作，但仍能达到很好的综合结果。我们的实验结果表明，μFUZZ相比其他最佳的现有模糊测试器在24小时内的代码覆盖率提升了24%，缺陷检测率提升了33%。此外，μFUZZ在经过充分测试的真实世界程序中发现了11个新的缺陷。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-yongheng](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-yongheng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-yongheng.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-yongheng.pdf)
## FISHFUZZ: Catch Deeper Bugs by Throwing Larger Nets.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fishfuzz-catch-deeper-bugs-by-throwing-larger-nets) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fishfuzz-catch-deeper-bugs-by-throwing-larger-nets)**
### 作者
* Han Zheng, National Computer Network Intrusion Protection Center, University of Chinese Academy of Science; School of Computer and Communication Sciences, EPFL; Zhongguancun Laboratory
* Jiayuan Zhang, National Computer Network Intrusion Protection Center, University of Chinese Academy of Science; School of Computer and Communication, Lanzhou University of Technology
* Yuhang Huang, National Computer Network Intrusion Protection Center, University of Chinese Academy of Science
* Zezhong Ren, National Computer Network Intrusion Protection Center, University of Chinese Academy of Science; Zhongguancun Laboratory
* He Wang, School of Cyber Engineering, Xidian University
* Chunjie Cao, School of Cyberspace Security, Hainan University
* Yuqing Zhang, National Computer Network Intrusion Protection Center, University of Chinese Academy of Science; Zhongguancun Laboratory; School of Cyberspace Security, Hainan University; School of Cyber Engineering, Xidian University
* Flavio Toffalini, School of Computer and Communication Sciences, EPFL
* Mathias Payer, School of Computer and Communication Sciences, EPFL
### 摘要
> 模糊测试器能够有效地探索程序以发现漏洞。灰盒模糊测试器会改变种子输入并观察其执行情况。每当一个种子达到新的行为（例如新的代码或更高的执行频率），它就会被保存以供进一步变异。灰盒模糊测试器直接度量探索，并通过使用大量变异种子重复执行相同的目标，被动地利用任何遗留的漏洞。定向灰盒模糊测试器（DGF）将搜索范围缩小到少数代码位置，但到目前为止将到所有目标的距离泛化为一个单一的分数，并且不会动态优先考虑目标。
> 
> FISHFUZZ引入了一种基于三个概念的输入优先级策略：（i）一种新颖的多距离度量标准，其精度不受目标数量的影响，（ii）一种动态目标排序方法，自动丢弃已耗尽的目标，以及（iii）一种基于超参数的智能队列修剪算法，可在探索和利用之间交替。FISHFUZZ使模糊测试器能够在成千上万个目标之间无缝切换，并将种子优先考虑到有趣的位置，从而实现更全面的程序测试。为了证明其通用性，我们在两个成熟的灰盒模糊测试器（AFL和AFL++）上实现了FISHFUZZ。我们利用所有的漏洞检测器标签对FISHFUZZ进行评估。与现代的DGF和覆盖引导模糊测试器进行了广泛比较，结果显示FISHFUZZ相对于直接竞争对手具有更高的覆盖率，相比基准模糊测试器发现了多达282%的更多漏洞，并且能够更快地重现68.3%的已有漏洞。FISHFUZZ还在47个程序中发现了56个新的漏洞（包括38个CVE）。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zheng](https://www.usenix.org/conference/usenixsecurity23/presentation/zheng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zheng.pdf](https://www.usenix.org/system/files/usenixsecurity23-zheng.pdf)
## HyPFuzz: Formal-Assisted Processor Fuzzing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#hypfuzz-formal-assisted-processor-fuzzing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#hypfuzz-formal-assisted-processor-fuzzing)**
### 作者
* Chen Chen, Texas A&M University
* Rahul K, Texas A&M University
* e, Texas A&M University
* Nathan Nguyen, Texas A&M University
* Flemming Andersen, Texas A&M University
* Aakash Tyagi, Texas A&M University
* Ahmad-Reza Sadeghi, Technische Universität Darmstadt
* Jeyavijayan Rajendran, Texas A&M University
### 摘要
> 最近的研究表明，硬件模糊器能够有效地检测现代处理器中的安全漏洞。然而，现有的硬件模糊器无法很好地模糊难以访问的设计空间。因此，这些模糊器无法有效地模糊处理器中的安全关键控制和数据流逻辑，从而错过了安全漏洞。
> 
> 为了解决这个挑战，我们提出了HyPFuzz，一种混合模糊器，利用形式验证工具帮助模糊处理器中难以访问的部分。为了提高HyPFuzz的效果，我们在时间和空间上进行了优化。首先，我们开发了一种调度策略，防止形式工具和模糊器的能力被过度或不足利用。其次，我们开发了启发式策略，选择设计空间中的关键点供形式工具进行目标定位。
> 
> 我们在五个广泛使用的开源处理器上评估了HyPFuzz。HyPFuzz检测到了最新处理器模糊器检测到的所有漏洞，并发现了三个被以前的广泛模糊和形式验证所忽视的新漏洞。这导致了两个新的通用漏洞和曝光（CVE）条目。HyPFuzz的覆盖率还比最新的处理器模糊器快了11.68倍。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-chen](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-chen)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-chen.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-chen.pdf)
## PolyFuzz: Holistic Greybox Fuzzing of Multi-Language Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#polyfuzz-holistic-greybox-fuzzing-of-multi-language-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#polyfuzz-holistic-greybox-fuzzing-of-multi-language-systems)**
### 作者
* Wen Li, Washington State University
* Jinyang Ruan, Washington State University
* Guangbei Yi, Washington State University
* Long Cheng, Clemson University
* Xiapu Luo, The Hong Kong Polytechnic University
* Haipeng Cai, Washington State University
### 摘要
> 尽管在软件过程中提供了许多优势，但使用多种编程语言构建一个软件系统的实践也会在生成的代码中引入额外的安全漏洞。随着这种实践变得越来越普遍，保护多语言系统变得至关重要。模糊测试一直是一种强大的安全测试技术，但现有的模糊器通常仅限于单一语言的软件。在本文中，我们提出了一种名为PolyFuzz的灰盒模糊测试工具，通过跨语言的覆盖反馈和对不同语言之间（各个程序输入和分支谓词之间）语义关系的显式建模，全面地对给定的多语言系统进行模糊测试。PolyFuzz可以扩展支持以不同语言组合编写的多语言代码，目前已经实现了用于C、Python、Java以及它们的组合。我们对15个真实世界的多语言系统和15个单一语言基准进行了PolyFuzz与最先进的单一语言模糊器的评估。在多语言程序的基准测试中，PolyFuzz达到了25.3%至52.3%更高的代码覆盖率，并且找到了比基准测试多出1至10个的漏洞。而在单一语言基准测试中，这些覆盖率更高达10%至20%。总体而言，PolyFuzz发现了12个以前未知的多语言漏洞和2个单一语言漏洞，并被分配了5个CVE编号。我们的结果显示了PolyFuzz对于跨语言模糊测试的巨大潜力，同时也证明了针对多语言软件单纯应用单一语言模糊器的综合模糊测试的强烈需求。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-wen](https://www.usenix.org/conference/usenixsecurity23/presentation/li-wen)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-wen.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-wen.pdf)
## VIPER: Spotting Syscall-Guard Variables for Data-Only Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#viper-spotting-syscall-guard-variables-for-data-only-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#viper-spotting-syscall-guard-variables-for-data-only-attacks)**
### 作者
* Hengkai Ye, The Pennsylvania State University
* Song Liu, The Pennsylvania State University
* Zhechang Zhang, The Pennsylvania State University
* Hong Hu, The Pennsylvania State University
### 摘要
> 随着流程控制保护技术的广泛部署，攻击者很难修改控制数据，如函数指针，以劫持程序的控制流。相反，仅数据攻击会破坏安全关键非控制数据（关键数据），并且可以绕过所有控制流保护以恢复严重的攻击。先前的研究已经探索了各种方法来帮助构建或防止仅数据攻击。然而，没有解决方案可以自动检测特定于程序的关键数据。
> 
> 在本文中，我们确定了一类重要的关键数据，即系统调用保护变量，并提出了一套方案以可扩展的方式自动检测此类变量。系统调用保护变量决定是否调用安全相关的系统调用（syscalls），修改它们将允许攻击者向操作系统请求额外的权限。我们提出了分支强制（branch force），它在执行过程中故意翻转每个条件分支，并检查是否调用了新的安全相关系统调用。如果是这样，我们进行数据流分析来估计通过常见内存错误翻转这些分支的可行性。我们构建了一个工具VIPER来实现我们的想法。VIPER成功地从13个程序中检测到了34个先前未知的系统调用保护变量。我们在sqlite和v8上构建了四个新的仅数据攻击，可以执行任意命令或删除任意文件。VIPER对于大多数程序在五分钟内完成其分析，显示了其在发现系统调用保护变量方面的实用性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ye](https://www.usenix.org/conference/usenixsecurity23/presentation/ye)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ye.pdf](https://www.usenix.org/system/files/usenixsecurity23-ye.pdf)
## AURC: Detecting Errors in Program Code and Documentation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#aurc-detecting-errors-in-program-code-and-documentation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#aurc-detecting-errors-in-program-code-and-documentation)**
### 作者
* Peiwei Hu, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China, and School of Cyber Security, University of Chinese Academy of Sciences, China
* Ruigang Liang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China, and School of Cyber Security, University of Chinese Academy of Sciences, China
* Ying Cao, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China, and School of Cyber Security, University of Chinese Academy of Sciences, China
* Kai Chen, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China, School of Cyber Security, University of Chinese Academy of Sciences, China, and Beijing Academy of Artificial Intelligence, China
* Runze Zhang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China, and School of Cyber Security, University of Chinese Academy of Sciences, China
### 摘要
> 程序代码和文档中的错误检测是计算机安全领域的一个关键问题。先前的研究已经显示出通过广泛的代码或文档导向分析来发现潜在的漏洞具有很好的性能。然而，目前的研究存在以下显著限制：（i）它们假设文档是正确的，并将违反文档的代码视为错误，因此无法找到文档的缺陷以及代码的错误，如果API的文档有缺陷或没有文档；（ii）它们利用多数投票来判断不一致的代码片段，并将异常情况视为错误，因此无法处理正确用法很少的情况或者所有的用法都是错误的情况。
> 
> 本文提出了一种名为AURC的静态框架，用于检测代码中的错误返回检查和文档缺陷。我们观察到在API调用中有三个对象参与，文档、调用方（调用API的代码）和被调用方（API的源代码）。这三个对象的相互证实消除了对上述假设的依赖。AURC包含了一种上下文敏感的向后分析来处理被调用方，一个基于预训练模型的文档分类器，以及一个从调用方收集if语句条件的容器。在对被调用方、调用方和文档的结果进行交叉检查后，AURC将它们传递给正确性推理模块来推断出有缺陷的对象。我们在十个流行的代码库上对AURC进行了评估。AURC发现了529个新的错误，可能导致堆缓冲区溢出和敏感信息泄露等安全问题，以及224个新的文档缺陷。维护者承认我们的发现，并接受了222个代码修补和76个文档修补。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/hu](https://www.usenix.org/conference/usenixsecurity23/presentation/hu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-hu.pdf](https://www.usenix.org/system/files/usenixsecurity23-hu.pdf)
## Not All Data are Created Equal: Data and Pointer Prioritization for Scalable Protection Against Data-Oriented Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#not-all-data-are-created-equal-data-and-pointer-prioritization-for-scalable-protection-against-data-oriented-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#not-all-data-are-created-equal-data-and-pointer-prioritization-for-scalable-protection-against-data-oriented-attacks)**
### 作者
* Salman Ahmed, IBM Research
* Hans Liljestr, University of Waterloo
* Hani Jamjoom, IBM Research
* Matthew Hicks, Virginia Tech
* N. Asokan, University of Waterloo
* Danfeng (Daphne) Yao, Virginia Tech
### 摘要
> 数据导向攻击在大多数操作系统的最新防御机制中变得越来越现实和有效。这些攻击操纵居住在内存中的数据对象（数据和指针），而不改变程序的控制流。用于保护数据和指针的软件和硬件反制措施由于对所有数据对象的过度插装而导致性能瓶颈。在这项工作中，我们提出了一个基于规则的启发式技术的数据和指针优先级（DPP）框架，可以自动从应用程序中识别敏感的内存对象，并仅保护那些敏感的数据，利用现有的反制措施。我们使用Linux Flaw项目数据集、Juliet测试套件和五个用于演示数据导向攻击的真实世界程序来评估我们框架的正确性。我们的实验表明，DPP可以通过优先处理仅占总数据对象3-4%的对象，从我们测试的应用程序中识别出易受攻击的数据对象。我们对SPEC CPU2017整数基准套件的评估表明，启用了DPP的AddressSanitizer（ASan）可以提高性能（以吞吐量衡量），相对于默认的ASan，运行时间开销可以减少约70%，同时保护所有优先级数据对象。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ahmed-salman](https://www.usenix.org/conference/usenixsecurity23/presentation/ahmed-salman)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ahmed-salman.pdf](https://www.usenix.org/system/files/usenixsecurity23-ahmed-salman.pdf)
## SAFER: Efficient and Error-Tolerant Binary Instrumentation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#safer-efficient-and-error-tolerant-binary-instrumentation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#safer-efficient-and-error-tolerant-binary-instrumentation)**
### 作者
* Soumyakant Priyadarshan, Stony Brook University
* Huan Nguyen, Stony Brook University
* Rohit Chouhan, Stony Brook University
* R. Sekar, Stony Brook University
### 摘要
> 近年来，二进制插桩技术的研究主要集中在性能方面。通过静态转换代码以避免额外的运行时操作，像Egalito和RetroWrite等系统实现了几乎零开销。这些静态转换的安全性依赖于几个假设：(a)无错误且完整的反汇编，(b)独占使用位置无关代码，以及(c)代码指针识别既没有误报也没有漏报。这些假设的违反可能导致插桩程序崩溃，甚至更糟糕的是，出现延迟故障导致数据损坏或安全受到威胁。许多早期的二进制插桩技术（如DynamoRio、Pin和BinCFI）尽量减少了此类假设，但代价是更高的开销，特别是对于间接调用密集型（如C++）应用程序。因此，一个开放的研究问题是早期研究的安全性能是否可以与最新研究的性能优势相结合。我们以积极的回答这个问题，通过提出一种新的插桩技术：(a)容忍使用位置依赖代码和常见的反汇编和静态分析错误，以及(b)在运行时检测假设违反，以防止出现未定义行为。我们的方法提供了一种优雅的关机或恢复的失败-崩溃原语。我们在不牺牲性能的情况下实现了安全的插桩，引入了约2%的低开销。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/priyadarshan](https://www.usenix.org/conference/usenixsecurity23/presentation/priyadarshan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-priyadarshan.pdf](https://www.usenix.org/system/files/usenixsecurity23-priyadarshan.pdf)
## Reassembly is Hard: A Reflection on Challenges and Strategies.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#reassembly-is-hard-a-reflection-on-challenges-and-strategies) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#reassembly-is-hard-a-reflection-on-challenges-and-strategies)**
### 作者
* Hyungseok Kim, KAIST and The Affiliated Institute of ETRI
* Soomin Kim, KAIST
* Junoh Lee, KAIST
* Kangkook Jee, University of Texas at Dallas
* Sang Kil Cha, KAIST
### 摘要
> 重新组装是静态二进制重写的一个分支，已成为今天研究的焦点。然而，尽管被广泛使用和研究关注，但关于重新组装器的技术和挑战没有系统的研究调查。在本文中，我们正式定义了当前现有重新组装器中出现的不同类型错误，并提出了一个名为REASSESSOR的自动化工具来找出这些错误。我们试图通过我们的工具和我们创建的大规模基准测试来展示当前领域中的挑战以及如何应对这些挑战。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kim-hyungseok](https://www.usenix.org/conference/usenixsecurity23/presentation/kim-hyungseok)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kim-hyungseok.pdf](https://www.usenix.org/system/files/usenixsecurity23-kim-hyungseok.pdf)
## Measuring Up to (Reasonable) Consumer Expectations: Providing an Empirical Basis for Holding IoT Manufacturers Legally Responsible.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#measuring-up-to-reasonable-consumer-expectations-providing-an-empirical-basis-for-holding-iot-manufacturers-legally-responsible) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#measuring-up-to-reasonable-consumer-expectations-providing-an-empirical-basis-for-holding-iot-manufacturers-legally-responsible)**
### 作者
* Lorenz Kustosch, TU Delft
* Carlos Gañán, TU Delft
* Mattis van 't Schip, Radboud University
* Michel van Eeten, TU Delft
* Simon Parkin, TU Delft
### 摘要
> 随着消费者物联网（IoT）设备安全和隐私事件持续发生，有必要确定哪些参与者处于最佳位置来应对。先前的文献研究了消费者对安全和隐私实施以及谁应该承担预防工作的期望。但是，这些规范性消费者期望与实际情况有何不同，或者可以合理地期望安全和隐私相关事件的处理方式有何不同？通过对862位参与者进行情节调查，我们研究了消费者对物联网制造商和用户在面对潜在受感染或侵犯隐私的物联网设备时将如何应对的期望。我们发现，期望在现实和适当性方面有很大差异。此外，安全和隐私会导致用户和制造商行动方面的不同期望，对于处理隐私相关事件的方法普遍存在期望的扩散。我们向物联网制造商和监管机构提供了关于如何支持用户解决安全和隐私问题的建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kustosch](https://www.usenix.org/conference/usenixsecurity23/presentation/kustosch)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kustosch.pdf](https://www.usenix.org/system/files/usenixsecurity23-kustosch.pdf)
## Are Consumers Willing to Pay for Security and Privacy of IoT Devices?
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#are-consumers-willing-to-pay-for-security-and-privacy-of-iot-devices) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#are-consumers-willing-to-pay-for-security-and-privacy-of-iot-devices)**
### 作者
* Pardis Emami-Naeini, Duke University
* Janarth Dheenadhayalan, Carnegie Mellon University
* Yuvraj Agarwal, Carnegie Mellon University
* Lorrie Faith Cranor, Carnegie Mellon University
### 摘要
> 物联网(IoT)设备制造商对于其安全和数据处理的做法向消费者提供的信息很少。因此，物联网消费者无法在安全和隐私方面做出明智的购买选择。尽管先前的研究发现消费者在购买物联网设备时很可能考虑安全和隐私问题，但过去的研究缺乏实证证据，即他们是否真的愿意为增强安全和隐私的设备支付更多费用。为了填补这一空白，我们进行了一项包括180名Prolific参与者的两阶段激励兼容性在线研究。我们测量了五个安全和隐私因素（例如访问控制）对参与者的购买行为的影响，无论是分别呈现还是在物联网标签上一起呈现。参与者愿意为具有更好安全和隐私做法的设备支付显著溢价。我们发现的最大价格差异是去标识化云存储而不是可识别的云存储。主要是由于其可用性挑战，对参与者来说，相对于密码，多因素身份验证是价值最低的改进。基于我们的发现，我们提供了关于创建更有效的物联网安全和隐私标签计划的建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/emami-naeini](https://www.usenix.org/conference/usenixsecurity23/presentation/emami-naeini)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-emami-naeini.pdf](https://www.usenix.org/system/files/usenixsecurity23-emami-naeini.pdf)
## Examining Consumer Reviews to Understand Security and Privacy Issues in the Market of Smart Home Devices.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#examining-consumer-reviews-to-understand-security-and-privacy-issues-in-the-market-of-smart-home-devices) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#examining-consumer-reviews-to-understand-security-and-privacy-issues-in-the-market-of-smart-home-devices)**
### 作者
* Swaathi Vetrivel, Delft University of Technology
* Veerle van Harten, Delft University of Technology
* Carlos H. Gañán, Delft University of Technology
* Michel van Eeten, Delft University of Technology
* Simon Parkin, Delft University of Technology
### 摘要
> 尽管越来越多的证据表明消费者关心安全的物联网(IoT)设备，但购买时相关的安全和隐私信息无法得到。虽然安全标签等倡议为设备的安全和隐私状况提供了新的信号途径，但我们分析了现有的一个市场信号途径-客户评价。我们研究了所有亚马逊网站上英文的四种常见受到Mirai感染的IoT设备的83,686条评价。我们进行了主题建模以对评价进行分组，并进行手动编码以了解安全和隐私问题的普遍性以及这些问题所表达的主题。总体而言，约有十分之一的评价(9.8%)提到了安全和隐私问题；这些问题在六个国家的地理分布有所不同。我们将安全和隐私问题的引用精炼为七个主题，并确定了两个正交主题：以技术语言撰写的评论和提及与安全措施之间的摩擦的评论。因此，我们的结果突显了客户评价这一已有途径的价值。我们根据这些结果提出建议并确定未来的研究方向。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/vetrivel](https://www.usenix.org/conference/usenixsecurity23/presentation/vetrivel)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-vetrivel.pdf](https://www.usenix.org/system/files/usenixsecurity23-vetrivel.pdf)
## Internet Service Providers' and Individuals' Attitudes, Barriers, and Incentives to Secure IoT.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#internet-service-providers-and-individuals-attitudes-barriers-and-incentives-to-secure-iot) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#internet-service-providers-and-individuals-attitudes-barriers-and-incentives-to-secure-iot)**
### 作者
* Nissy Sombatruang, National Institute of Information and Communications Technology
* Tristan Caulfield, University College London
* Ingolf Becker, University College London
* Akira Fujita, National Institute of Information and Communications Technology
* Takahiro Kasama, National Institute of Information and Communications Technology
* Koji Nakao, National Institute of Information and Communications Technology
* Daisuke Inoue, National Institute of Information and Communications Technology
### 摘要
> 互联网服务提供商（ISP）和物联网（IoT）的个体用户在确保IoT安全方面发挥着重要作用。然而，鼓励他们这样做很困难。我们的研究调查了ISP和个人对IoT安全的态度，他们面临的障碍以及保持IoT安全的激励措施，研究结果来自日本。
> 
> 由于利益相关者之间的复杂互动，我们采用了迭代方法，逐步向利益相关者提出问题和潜在解决方案。对于ISP，我们在日本进行了27个ISP的调查，然后与政府和5个ISP的代表进行了研讨会。基于这些发现，我们对20个参与者进行了半结构化访谈，随后进行了一项更具量化的328名参与者的调查。我们在第二次研讨会上与政府和7个ISP的代表一起回顾了这些结果。各方对挑战的认识导致了得到所有利益相关者支持的结果。
> 
> 确保IoT设备安全既不是用户的优先事项，也不是ISP的优先事项。个人希望政府在监管上作出更多干预，希望ISP在恶意流量过滤方面采取行动。参与者愿意支付费用以获得增强的监控和过滤。虽然ISP确实希望帮助用户，但似乎缺乏有效的技术来帮助他们。ISP希望看到更多对他们努力的公众认可，但他们在内部遇到了高级管理层支持和与客户沟通的有效手段的困难。大多数障碍和激励措施都来自于ISP和个人外部，展示了保持IoT安全的复杂性，并强调了物联网生态系统中相关利益相关者需要共同合作的必要性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/sombatruang](https://www.usenix.org/conference/usenixsecurity23/presentation/sombatruang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-sombatruang.pdf](https://www.usenix.org/system/files/usenixsecurity23-sombatruang.pdf)
## Detecting and Handling IoT Interaction Threats in Multi-Platform Multi-Control-Channel Smart Homes.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#detecting-and-handling-iot-interaction-threats-in-multi-platform-multi-control-channel-smart-homes) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#detecting-and-handling-iot-interaction-threats-in-multi-platform-multi-control-channel-smart-homes)**
### 作者
* Haotian Chi, Shanxi University and Temple University
* Qiang Zeng, George Mason University
* Xiaojiang Du, Stevens Institute of Technology
### 摘要
> 智能家居涉及各种实体，如物联网设备、自动化应用、人类、语音助手和陪伴应用。这些实体在同一物理环境中进行交互，可能会产生不良甚至危险的结果，称为物联网交互威胁。现有的交互威胁研究只考虑自动化应用，忽略了其他物联网控制渠道，如语音指令、陪伴应用和物理操作。其次，智能家居使用多个物联网平台越来越普遍，每个平台只能部分了解设备状态，并可能发出冲突的命令。第三，与检测交互威胁相比，对其处理的研究较少。现有的工作使用通用处理策略，不太适用于所有家庭。我们介绍了IoTMediator，它在多平台多控制渠道的家庭中提供准确的威胁检测和威胁定制处理。我们在两个真实的家庭中进行评估，结果表明IoTMediator明显优于先前的最新工作。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chi](https://www.usenix.org/conference/usenixsecurity23/presentation/chi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chi.pdf](https://www.usenix.org/system/files/usenixsecurity23-chi.pdf)
## Private Proof-of-Stake Blockchains using Differentially-Private Stake Distortion.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#private-proof-of-stake-blockchains-using-differentially-private-stake-distortion) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#private-proof-of-stake-blockchains-using-differentially-private-stake-distortion)**
### 作者
* Chenghong Wang, Duke University
* David Pujol, Duke University
* Kartik Nayak, Duke University
* Ashwin Machanavajjhala, Duke University
### 摘要
> 安全性、活力和隐私是任何私有股权证明（PoS）区块链的三个关键属性。然而，之前的研究（SP'21）表明，为了获得安全性和活力，PoS区块链在理论上必须放弃隐私。具体来说，为了获得安全性和活力，PoS区块链根据其股权比例选举各方，这反过来可能会在事务处理机制是私有的情况下透露某方的股权。
> 
> 在这项工作中，我们做出了两个关键贡献。首先，我们提出了一种可以在实践中实际运行的股权推断攻击。具体而言，我们的攻击适用于确定性和随机化PoS协议，并且与SOTA方法相比具有指数级别的较小运行时间。其次，我们使用差分隐私股权扭曲方法来实现PoS区块链的隐私。我们制定了实现事务和股权隐私的特定隐私要求，并设计了两个股权扭曲机制，适用于任何PoS协议。此外，我们分析了我们提出的机制在以太坊2.0上的运行情况，这是一个已经在实践中运行的知名PoS区块链。结果表明，我们的机制减轻了股权推断风险，并同时提供了合理的隐私保护，同时保留了所需的安全性和活力属性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-chenghong](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-chenghong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-chenghong.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-chenghong.pdf)
## PrivateFL: Accurate, Differentially Private Federated Learning via Personalized Data Transformation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#privatefl-accurate-differentially-private-federated-learning-via-personalized-data-transformation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#privatefl-accurate-differentially-private-federated-learning-via-personalized-data-transformation)**
### 作者
* Yuchen Yang, The Johns Hopkins University
* Bo Hui, The Johns Hopkins University
* Haolin Yuan, The Johns Hopkins University
* Neil Gong, Duke University
* Yinzhi Cao, The Johns Hopkins University
### 摘要
> 联邦学习（FL）通过协调中央服务器，使多个客户端可以共同训练模型。尽管FL通过保持每个客户端的训练数据本地化来改善数据隐私，但攻击者（例如，不受信任的服务器）仍然可以通过各种推理攻击来破坏客户端本地训练数据的隐私。保护FL隐私的事实上的方法是差分隐私（DP），它在训练过程中添加随机噪音。然而，当应用于FL时，DP面临一个关键限制：为了实现有意义的隐私保护水平，它牺牲了模型准确度，甚至比应用于传统集中式学习时更为严重。
> 
> 在本文中，我们研究了FL+DP的准确度降低原因，并设计了一种改善准确度的方法。首先，我们提出，这种准确度降低部分原因在于DP在本地训练过程中添加不同随机噪音和剪辑偏差时，引入了额外的FL客户端异质性。据我们所知，我们是首次将FL中的DP与客户端异质性联系起来。其次，我们设计了PrivateFL，在FL中以减少异质性的方式学习准确、差分隐私模型。关键的想法是在本地训练过程中共同学习每个客户端的差分隐私个性化数据转换。个性化数据转换将客户端的本地数据分布移动，以补偿DP引入的异质性，从而提高FL模型的准确性。
> 
> 在评估中，我们将PrivateFL与八种最先进的差分隐私FL方法结合比较，并使用七个基准数据集进行评估，包括六个图像数据集和一个非图像数据集。我们的结果表明，PrivateFL在小的ε值下可以学习准确的FL模型，例如，在CIFAR-10上使用100个客户端，在(ε = 2, δ = 1e-3)-DP下达到93.3%。此外，PrivateFL可以与之前的研究合并，以减少DP引起的异质性，并进一步提高准确性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yang-yuchen](https://www.usenix.org/conference/usenixsecurity23/presentation/yang-yuchen)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yang-yuchen.pdf](https://www.usenix.org/system/files/usenixsecurity23-yang-yuchen.pdf)
## What Are the Chances? Explaining the Epsilon Parameter in Differential Privacy.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#what-are-the-chances-explaining-the-epsilon-parameter-in-differential-privacy) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#what-are-the-chances-explaining-the-epsilon-parameter-in-differential-privacy)**
### 作者
* Priyanka Nanayakkara, Northwestern University
* Mary Anne Smart, University of California San Diego
* Rachel Cummings, Columbia University
* Gabriel Kaptchuk, Boston University
* Elissa M. Redmiles, Max Planck Institute for Software Systems
### 摘要
> 差分隐私（DP）是一种在政府和行业中越来越多地使用的数学隐私概念。DP的隐私保护是概率性的：在隐私损失预算参数ε的限制下。在健康和计算科学领域的以往研究发现人们很难理解概率性风险。然而，向提供数据的人传达ε的含义对于避免隐私舞台化（将无意义的隐私保护呈现为有意义的）和增强更明智的数据共享决策至关重要。借鉴风险沟通和可用性的最佳实践，我们开发了三种方法来向终端用户传达概率性DP保证：两种传达可能性的方法和一种提供DP输出具体示例的方法。
> 
> 我们通过一个案例研究的问卷调查（n = 963）以三个指标定量评估了这些解释方法：客观风险理解、主观理解DP保证的隐私和自我效能。我们发现基于可能性的解释方法比（1）基于输出的方法和（2）东拼西凑的关于ε信息的最先进方法更有效。此外，当被提供ε信息时，受访者更愿意共享他们的数据，而不是提供一个先进的DP解释；这种共享意愿对ε值很敏感：随着隐私保护减弱，受访者共享数据的可能性减少。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/nanayakkara](https://www.usenix.org/conference/usenixsecurity23/presentation/nanayakkara)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-nanayakkara.pdf](https://www.usenix.org/system/files/usenixsecurity23-nanayakkara.pdf)
## Tight Auditing of Differentially Private Machine Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#tight-auditing-of-differentially-private-machine-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#tight-auditing-of-differentially-private-machine-learning)**
### 作者
* Milad Nasr, Google DeepMind
* Jamie Hayes, Google DeepMind
* Thomas Steinke, Google DeepMind
* Borja Balle, Google DeepMind
* Florian Tramèr, ETH Zurich
* Matthew Jagielski, Google DeepMind
* Nicholas Carlini, Google DeepMind
* Andreas Terzis, Google DeepMind
### 摘要
> 差分隐私的审计机制使用概率手段来经验性地估计算法的隐私级别。对于私有机器学习而言，现有的审计机制是严格的：经验隐私估计（几乎）与算法的可证明隐私保证相匹配。但这些审计技术存在两个限制。首先，它们只能在不切实际的最坏情况假设下（例如，一个完全对抗性的数据集）给出严格的估计。其次，它们需要进行数千或数百万次训练运行才能产生对隐私泄漏的非平凡统计估计。
> 
> 本研究解决了这两个问题。我们设计了一个改进的审计方案，可以为自然（非对抗性构建的）数据集提供严格的隐私估计——如果对手可以在训练期间看到所有模型更新。先前的审计工作依赖于相同的假设，这在标准差分隐私威胁模型下是允许的。这种威胁模型在联邦学习设置中也适用。此外，我们的审计方案只需要两次训练运行（而不是数千次）就能产生严格的隐私估计，通过对差分隐私紧密组合定理的最新进展进行了改进。我们通过揭示私有机器学习代码中的实现错误，展示了改进的审计方案的实用性，这些错误在先前的审计技术中被忽略了。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/nasr](https://www.usenix.org/conference/usenixsecurity23/presentation/nasr)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-nasr.pdf](https://www.usenix.org/system/files/usenixsecurity23-nasr.pdf)
## PrivTrace: Differentially Private Trajectory Synthesis by Adaptive Markov Models.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#privtrace-differentially-private-trajectory-synthesis-by-adaptive-markov-models) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#privtrace-differentially-private-trajectory-synthesis-by-adaptive-markov-models)**
### 作者
* Haiming Wang, Zhejiang University
* Zhikun Zhang, CISPA Helmholtz Center for Information Security
* Tianhao Wang, University of Virginia
* Shibo He, Zhejiang University
* Michael Backes, CISPA Helmholtz Center for Information Security
* Jiming Chen, Zhejiang University
* Yang Zhang, CISPA Helmholtz Center for Information Security
### 摘要
> 出版轨迹数据（个体的移动信息）非常有用，但也引起了隐私关注。为了处理隐私问题，本文采用差分隐私（数据隐私的标准技术）和马尔科夫链模型生成合成轨迹。我们注意到现有研究都使用了马尔科夫链模型，因此提出了一个框架来分析马尔科夫链模型在此问题中的使用。基于分析结果，我们提出了一种名为PrivTrace的有效算法，该算法自适应地使用一阶和二阶马尔科夫模型。我们通过合成和真实世界数据集对PrivTrace和现有方法进行评估，以展示我们方法的优越性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-haiming](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-haiming)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-haiming.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-haiming.pdf)
## Meta-Sift: How to Sift Out a Clean Subset in the Presence of Data Poisoning?
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#meta-sift-how-to-sift-out-a-clean-subset-in-the-presence-of-data-poisoning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#meta-sift-how-to-sift-out-a-clean-subset-in-the-presence-of-data-poisoning)**
### 作者
* Yi Zeng, Virginia Tech and SONY AI
* Minzhou Pan, Virginia Tech
* Himanshu Jahagirdar, Virginia Tech
* Ming Jin, Virginia Tech
* Lingjuan Lyu, SONY AI
* Ruoxi Jia, Virginia Tech
### 摘要
> 外部数据源越来越多地被用于训练机器学习（ML）模型，因为数据需求增加。然而，将外部数据整合到训练中存在数据污染风险，即恶意提供者操纵其数据以损害模型的效用或完整性。大多数数据污染防御假设可以访问一组干净的数据（称为基础集），可以通过可信来源获取。但是，目前常见的情况是，针对ML任务的整个数据源都是不可信的（例如，互联网数据）。在这种情况下，需要从受污染的数据集中确定一个子集作为基础集，以支持这些防御措施。
> 
> 本文首先检查了当污染样本错误地混入基础集时防御的性能。我们分析了使用基础集的五种代表性防御方法，发现它们的性能在基础集中污染点小于1%时会大幅下降。这些发现表明，精确筛选出一个具有高准确性的基础集对这些防御的性能至关重要。在这些观察的启发下，我们研究了现有自动化工具和人工检查在存在数据污染的情况下识别干净数据的准确性。不幸的是，这两种方法都无法达到能够实现有效防御所需的准确性。更糟糕的是，这些方法中很多的结果比随机选择还要差。
> 
> 除了揭示这一挑战，我们更进一步提出了Meta-Sift这种实用的对策方法。我们的方法基于这样的观察：现有的污染攻击会改变数据分布，导致在干净部分的受污染数据集上训练并在被损坏的部分进行测试时，预测严重损失。借助这一观察结果，我们制定了一个双层优化方法来识别干净数据，并进一步引入一套技术来提高识别的效率和准确性。我们的评估结果显示，在广泛范围的污染威胁下，Meta-Sift能够筛选出具有100%准确性的干净基础集。所选的基础集足够大，在应用于现有的防御技术时可以实现成功的防御。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zeng](https://www.usenix.org/conference/usenixsecurity23/presentation/zeng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zeng.pdf](https://www.usenix.org/system/files/usenixsecurity23-zeng.pdf)
## Towards A Proactive ML Approach for Detecting Backdoor Poison Samples.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#towards-a-proactive-ml-approach-for-detecting-backdoor-poison-samples) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#towards-a-proactive-ml-approach-for-detecting-backdoor-poison-samples)**
### 作者
* Xiangyu Qi, Princeton University
* Tinghao Xie, Princeton University
* Jiachen T. Wang, Princeton University
* Tong Wu, Princeton University
* Saeed Mahloujifar, Princeton University
* Prateek Mittal, Princeton University
### 摘要
> 对手可以通过向训练数据集中引入后门毒样本来在深度学习模型中嵌入后门。在这项工作中，我们研究如何检测这种毒样本以减轻后门攻击的威胁。首先，我们揭示了大多数之前工作背后的事后工作流程，即防御者被动允许攻击进行，然后利用被攻击模型的特征来发现毒样本。我们发现这种工作流程并未充分利用防御者的能力，并且在许多场景中容易发生失败或性能下降。其次，我们提出了一种范式转变，通过在整个模型训练和毒样本检测流程中积极参与，直接强化和放大被攻击模型的独特特征来促进毒样本检测。基于此，我们提出了一个统一的框架，并提供了有关设计更健壮和具有普适性的检测流程的实用见解。第三，我们介绍了混淆训练（CT）技术作为我们框架的具体实例。CT向已经被毒害的数据集应用额外的攻击，主动分离良性相关性，同时暴露后门模式以供检测。对4个数据集和14种攻击类型进行的实证评估验证了CT在14个基线防御方法中的优越性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/qi](https://www.usenix.org/conference/usenixsecurity23/presentation/qi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-qi.pdf](https://www.usenix.org/system/files/usenixsecurity23-qi.pdf)
## PORE: Provably Robust Recommender Systems against Data Poisoning Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#pore-provably-robust-recommender-systems-against-data-poisoning-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#pore-provably-robust-recommender-systems-against-data-poisoning-attacks)**
### 作者
* Jinyuan Jia, The Pennsylvania State University
* Yupei Liu, Duke University
* Yuepeng Hu, Duke University
* Neil Zhenqiang Gong, Duke University
### 摘要
> 数据污染攻击通过向推荐系统注入具有精心构造的评分分数的虚假用户，欺骗推荐系统来进行任意、攻击者所希望的推荐。我们设想了一种猫鼠游戏，用于应对此类数据污染攻击及其防御，即设计新的防御措施来抵御现有攻击，并设计新的攻击手段来破解这些防御措施。为了防止这种猫鼠游戏，我们在这项工作中提出了PORE，这是第一个能够构建可证明强大的推荐系统的框架。PORE可以将任何现有的推荐系统转化为能够抵御任何非针对性数据污染攻击的可证明强大的推荐系统，这些攻击旨在降低推荐系统的整体性能。假设在没有攻击的情况下，PORE向用户推荐前N个项目。我们证明，在任何数据污染攻击下，PORE仍然向用户推荐至少r个N项目，其中r是攻击中虚假用户数量的函数。此外，我们设计了一种高效的算法来计算每个用户的r值。我们通过对流行的基准数据集对PORE进行了经验评估。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/jia](https://www.usenix.org/conference/usenixsecurity23/presentation/jia)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-jia.pdf](https://www.usenix.org/system/files/usenixsecurity23-jia.pdf)
## Every Vote Counts: Ranking-Based Training of Federated Learning to Resist Poisoning Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#every-vote-counts-ranking-based-training-of-federated-learning-to-resist-poisoning-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#every-vote-counts-ranking-based-training-of-federated-learning-to-resist-poisoning-attacks)**
### 作者
* Hamid Mozaffari, University of Massachusetts Amherst
* Virat Shejwalkar, University of Massachusetts Amherst
* Amir Houmansadr, University of Massachusetts Amherst
### 摘要
> 联邦学习（FL）允许不受信任的客户端协同训练一个称为全局模型的共同机器学习模型，而无需共享其私有/专有训练数据。然而，FL容易受到恶意客户端的污染攻击，这些攻击旨在通过在FL的训练过程中贡献恶意更新来破坏全局模型的准确性。
> 
> 我们认为，对现有FL系统成功进行污染攻击的关键因素是客户端可选择的模型更新空间很大。为了解决这个问题，我们提出了联邦排名学习（FRL）。FRL将客户端更新的空间从标准FL的模型参数更新（一个连续的浮点数空间）减小到参数排名的空间（一个离散的整数值空间）。为了能够使用参数排名（而不是参数权重）训练全局模型，FRL借鉴了最近的超掩码训练机制的思想。具体而言，FRL客户端根据其本地训练数据对随机初始化的神经网络（由服务器提供）的参数进行排名，而FRL服务器使用投票机制来聚合客户端提交的参数排名。
> 
> 直观地说，我们基于投票的聚合机制可以阻止污染客户端对全局模型进行重大对抗性修改，因为每个客户端只有一票！我们通过分析证明和实验展示了FRL对污染的稳健性，并展示了其高通信效率。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/mozaffari](https://www.usenix.org/conference/usenixsecurity23/presentation/mozaffari)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-mozaffari.pdf](https://www.usenix.org/system/files/usenixsecurity23-mozaffari.pdf)
## Fine-grained Poisoning Attack to Local Differential Privacy Protocols for Mean and Variance Estimation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fine-grained-poisoning-attack-to-local-differential-privacy-protocols-for-mean-and-variance-estimation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fine-grained-poisoning-attack-to-local-differential-privacy-protocols-for-mean-and-variance-estimation)**
### 作者
* Xiaoguang Li, Xidian University and Purdue University
* Ninghui Li, Purdue University
* Wenhai Sun, Purdue University
* Neil Zhenqiang Gong, Duke University
* Hui Li, Xidian University
### 摘要
> 尽管本地差分隐私（LDP）可以保护个体用户的数据不被不受信任的数据管理者推断，但最近的研究表明，攻击者可以从用户端发起数据污染攻击，将精心构造的伪数据注入LDP协议中，以最大程度地扭曲数据管理者的最终估计。
> 
> 在这项研究中，我们进一步推动这一领域的发展，通过提出一种新的细粒度攻击方法，允许攻击者对许多现实应用中常见的平均值和方差估计进行细致调整和同时操纵。为了实现这个目标，攻击利用LDP的特性，将伪造的数据注入到本地LDP实例的输出域中。我们将这种攻击称为输出污染攻击（OPA）。我们观察到一个安全-隐私一致性，即小的隐私损失可以增强LDP的安全性，这与先前的工作中已知的安全-隐私权衡相矛盾。我们进一步研究了这种一致性，并揭示了关于LDP数据污染攻击威胁面的更全面的视角。我们对基线攻击进行了全面的评估，该攻击直观地向LDP提供虚假输入。实验结果表明，OPA在三个现实世界的数据集上优于基线攻击。我们还提出了一种新颖的防御方法，可以从被污染的数据集中恢复结果的准确性，并对安全LDP设计提供深入见解。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-xiaoguang](https://www.usenix.org/conference/usenixsecurity23/presentation/li-xiaoguang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-xiaoguang.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-xiaoguang.pdf)
## Your Exploit is Mine: Instantly Synthesizing Counterattack Smart Contract.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#your-exploit-is-mine-instantly-synthesizing-counterattack-smart-contract) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#your-exploit-is-mine-instantly-synthesizing-counterattack-smart-contract)**
### 作者
* Zhuo Zhang, Purdue University
* Zhiqiang Lin, Ohio State University
* Marcelo Morales, Ohio State University
* Xiangyu Zhang, Purdue University
* Kaiyuan Zhang, Purdue University
### 摘要
> 智能合约由于其独特的性质而容易受到利用。尽管通过模糊测试、符号执行、形式验证和手动审计等方式努力识别漏洞，但仍存在可利用的漏洞，并导致数十亿美元的货币损失。为解决这个问题，关键是采取运行时防御措施来最大程度地减小利用风险。在本文中，我们提出了一种新颖的智能合约漏洞运行时防御机制 STING。其关键思想是即时合成反击智能合约，从攻击交易中提取最大可提取价值 (MEV) 并抢先攻击者。我们通过对62个真实世界最近的漏洞进行评估，证明了其有效性，成功地应对了54个漏洞（即拦截了攻击者窃取的所有资金）。相比之下，普通的抢先防御仅能处理12个漏洞。我们的结果提供了一个明确的概念证明，STING是一种可行的智能合约防御机制，具有在智能合约生态系统中显著降低利用风险的潜力。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-zhuo-exploit](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-zhuo-exploit)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-zhuo-exploit.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-zhuo-exploit.pdf)
## Smart Learning to Find Dumb Contracts.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#smart-learning-to-find-dumb-contracts) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#smart-learning-to-find-dumb-contracts)**
### 作者
* Tamer Abdelaziz, National University of Singapore
* Aquinas Hobor, University College London
### 摘要
> 我们介绍了一种名为Deep Learning Vulnerability Analyzer（DLVA）的强大深度学习技术基于以字节码为基础的以太坊智能合约漏洞检测工具。我们训练DLVA通过字节码进行判断，即使监督神谕Slither只能判断源代码。DLVA的训练算法是通用的：我们“扩展”了源代码分析到字节码，不需要任何手动特征工程、预定义模式或专家规则。DLVA的训练算法也是强大的：它克服了1.25%的误标记契约，甚至超越了Slither误标记的易受攻击的契约。除了将源代码分析扩展到字节码，DLVA比基于形式方法的传统智能合约漏洞检测工具快得多：DLVA在0.2秒内检查契约的29种漏洞，相比传统工具提速10-1,000倍。
> 
> DLVA有三个关键组成部分。首先，智能合约到向量（Smart Contract to Vector，SC2V）使用神经网络将任意智能合约字节码映射到高维浮点向量。我们对SC2V进行了基准测试，与4种最先进的图神经网络进行了比较，并显示它提高了平均模型区别性的2.2%。其次，兄弟检测器（Sibling Detector，SD）在目标契约向量与训练集中标记契约向量的欧氏距离接近时进行契约分类；尽管只能判断测试集中55.7%的契约，但它具有97.4%的平均Slither预测准确率，只有0.1%的误报率。第三，核心分类器（Core Classifier，CC）使用神经网络推断易受攻击的契约，无论向量距离如何。我们对DLVA的CC进行了基准测试，与10种“现成”的机器学习技术进行了比较，并显示CC的平均准确率提高了11.3%。
> 
> 总体而言，DLVA以92.7%的整体准确率预测了Slither的标签，伴随着7.2%的误报率。最后，我们将DLVA与九种著名智能合约分析工具进行了基准测试。尽管使用的分析时间要少得多，DLVA仍然完成了每个查询，在高真实阳性率与低误报率之间取得了99.7%的平均准确率，表现出色。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/abdelaziz](https://www.usenix.org/conference/usenixsecurity23/presentation/abdelaziz)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-abdelaziz.pdf](https://www.usenix.org/system/files/usenixsecurity23-abdelaziz.pdf)
## Confusum Contractum: Confused Deputy Vulnerabilities in Ethereum Smart Contracts.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#confusum-contractum-confused-deputy-vulnerabilities-in-ethereum-smart-contracts) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#confusum-contractum-confused-deputy-vulnerabilities-in-ethereum-smart-contracts)**
### 作者
* Fabio Gritti, University of California, Santa Barbara
* Nicola Ruaro, University of California, Santa Barbara
* Robert McLaughlin, University of California, Santa Barbara
* Priyanka Bose, University of California, Santa Barbara
* Dipanjan Das, University of California, Santa Barbara
* Ilya Grishchenko, University of California, Santa Barbara
* Christopher Kruegel, University of California, Santa Barbara
* Giovanni Vigna, University of California, Santa Barbara
### 摘要
> 智能合约是在全球分布式系统(区块链)上执行的不可变程序。它们实现了分散化的许多有趣应用，如金融协议、投票系统和供应链管理。在许多情况下，多个智能合约需要共同工作并相互通信，以实现复杂的业务逻辑。然而，这些智能合约必须特别注意防止恶意交互，以免违反合约的安全性，并可能导致重大经济损失。
> 
> 本文介绍了一类我们称为混淆合约漏洞的程序间通信缺陷。这种bug是混淆代理漏洞的一个实例，出现在智能合约的相互通信的新背景中。在利用混淆合约漏洞时，攻击者能够将混淆（受害）合约中的远程（合约间）调用转向攻击者选择的目标合约和功能。该调用代表混淆合约执行敏感操作，可能导致经济损失或者对相关合约的持久存储进行恶意修改。
> 
> 为了规模化地识别混淆合约攻击的机会，我们实现了名为Jackal的系统，能够自动识别和利用混淆合约和候选目标合约。
> 
> 我们利用Jackal对过去两年部署的共计2,335,193个智能合约进行了分析，并识别出了529个潜在的混淆合约，其中我们成功生成了31个可工作的攻击。在研究我们的攻击影响时，我们发现过去和现在存在的混淆合约攻击机会，可能危及价值超过一百万美元的数字资产。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gritti](https://www.usenix.org/conference/usenixsecurity23/presentation/gritti)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gritti.pdf](https://www.usenix.org/system/files/usenixsecurity23-gritti.pdf)
## Panda: Security Analysis of Algorand Smart Contracts.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#panda-security-analysis-of-algorand-smart-contracts) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#panda-security-analysis-of-algorand-smart-contracts)**
### 作者
* Zhiyuan Sun, The Hong Kong Polytechnic University and Southern University of Science and Technology
* Xiapu Luo, The Hong Kong Polytechnic University
* Yinqian Zhang, Southern University of Science and Technology
### 摘要
> Algorand最近作为新一代纯权益证明（PPoS）区块链的代表迅速崛起。与此同时，Algorand也吸引了越来越多的用户将其用作非同质化代币的交易平台。然而，类似传统程序，错误的编程方式会导致Algorand智能合约中的严重安全漏洞。在本文中，我们首先分析了Algorand智能合约的语义，并找到了9种常见的漏洞。接下来，我们提出了第一个可扩展的静态分析框架Panda，该框架可以自动检测Algorand智能合约中的此类漏洞，并形式化定义了漏洞检测规则。我们还构建了第一个用于评估Panda的基准数据集。最后，我们使用Panda对Algorand区块链上的所有智能合约进行了漏洞评估，发现了80,515个（10.38%）易受攻击的智能签名和150,676个（27.73%）易受攻击的应用程序。其中，有4,008个（4.04%）易受攻击的应用程序仍然在区块链上未被删除。在公开过程中，Panda发现的漏洞已经得到了许多项目的认可，包括一些关键的区块链基础设施，如去中心化交易所和NFT拍卖平台。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/sun](https://www.usenix.org/conference/usenixsecurity23/presentation/sun)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-sun.pdf](https://www.usenix.org/system/files/usenixsecurity23-sun.pdf)
## Proxy Hunting: Understanding and Characterizing Proxy-based Upgradeable Smart Contracts in Blockchains.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#proxy-hunting-understanding-and-characterizing-proxy-based-upgradeable-smart-contracts-in-blockchains) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#proxy-hunting-understanding-and-characterizing-proxy-based-upgradeable-smart-contracts-in-blockchains)**
### 作者
* William E Bodell III, Illinois Institute of Technology
* Sajad Meisami, Illinois Institute of Technology
* Yue Duan, Illinois Institute of Technology
### 摘要
> 升级智能合约（USC）已成为智能合约开发的重要趋势，为原本不可变的代码带来了灵活性。然而，它们也引入安全问题。一方面，它们需要广泛的安全知识来以安全的方式实现。另一方面，它们为恶意活动提供了新的战略武器。因此，充分了解它们，特别是它们在现实世界中的安全影响是至关重要的。为此，我们进行了一项大规模研究，系统地揭示了野外USC的现状。为了实现我们的目标，我们制定了一个完整的USC分类法，全面描述USC的独特行为，并进一步开发了USCHUNT，一个自动化的USC分析框架，以支持我们的研究。我们的研究旨在回答关于USC重要性、设计模式和安全问题的三组关键研究问题。我们的结果显示，USC对于今天的区块链非常重要，因为它们持有数十亿美元的数字资产。此外，我们的研究总结了十一种独特的USC设计模式，并发现了包括2,546个真实世界的与USC相关的安全问题，涵盖六个主要类别。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bodell](https://www.usenix.org/conference/usenixsecurity23/presentation/bodell)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-bodell.pdf](https://www.usenix.org/system/files/usenixsecurity23-bodell.pdf)
## Fuzztruction: Using Fault Injection-based Fuzzing to Leverage Implicit Domain Knowledge.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fuzztruction-using-fault-injection-based-fuzzing-to-leverage-implicit-domain-knowledge) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fuzztruction-using-fault-injection-based-fuzzing-to-leverage-implicit-domain-knowledge)**
### 作者
* Nils Bars, Ruhr-Universität Bochum
* Moritz Schloegel, Ruhr-Universität Bochum
* Tobias Scharnowski, Ruhr-Universität Bochum
* Nico Schiller, Ruhr-Universität Bochum
* Thorsten Holz, CISPA Helmholtz Center for Information Security
### 摘要
> 当今数字通信依赖于复杂的协议和规范来交换结构化的消息和数据。通信自然涉及到两个端点：一个生成数据，一个消费数据。传统的模糊测试方法将一个端点（生成器）用模糊器替换，并在测试目标程序下快速测试许多变异输入。尽管这种完全自动化的方法对于结构松散的格式效果良好，但对于高度结构化的格式，特别是那些经历复杂转换（如压缩或加密）的格式，这种方法不适用。
> 
> 在这项工作中，我们提出了一种新颖的方法来生成高度复杂格式的输入，而无需依赖于沉重的程序分析技术、粗粒度的语法近似或人工领域专家。我们并非通过变异目标程序的输入来实现数据生成程序中的错误注入，以便生成的数据几乎符合预期的格式。这样的数据可以绕过消费程序的初始解析阶段，并且可以触发更有趣的程序行为的更深层次的程序状态。为了实现这个概念，我们提出了一套编译时和运行时分析方法，以有针对性地变异生成器，使其保持完整并产生满足复杂格式约束的半有效输出。我们在一个名为Fuzztruction的原型中实现了这种方法，并表明它比现有的模糊测试工具AFL++、SYMCC和WEIZZ更加优秀。Fuzztruction在发现覆盖范围方面比现有方法显著更多，特别是在使用加密原语的目标上。在我们的评估过程中，Fuzztruction发现了151个唯一的崩溃（经过自动去重）。到目前为止，我们手动处理并报告了27个错误，并分配了4个CVE。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bars](https://www.usenix.org/conference/usenixsecurity23/presentation/bars)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-bars.pdf](https://www.usenix.org/system/files/usenixsecurity23-bars.pdf)
## FuzzJIT: Oracle-Enhanced Fuzzing for JavaScript Engine JIT Compiler.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fuzzjit-oracle-enhanced-fuzzing-for-javascript-engine-jit-compiler) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fuzzjit-oracle-enhanced-fuzzing-for-javascript-engine-jit-compiler)**
### 作者
* Junjie Wang, College of Intelligence and Computing, Tianjin University
* Zhiyi Zhang, CodeSafe Team, Qi An Xin Group Corp.
* Shuang Liu, College of Intelligence and Computing, Tianjin University
* Xiaoning Du, Monash University
* Junjie Chen, College of Intelligence and Computing, Tianjin University
### 摘要
> 我们提出了一种新颖的模糊测试技术FuzzJIT，用于揭示JavaScript引擎中的JIT编译器错误。基于我们的洞察力，即JIT编译器只应该加速执行而不改变JavaScript代码的执行结果。FuzzJIT可以对每个测试案例激活JIT编译器，并精确捕获由JIT编译器引起的任何执行差异。成功的关键在于设计了一个输入包装模板，主动激活JIT编译器并使生成的样本自觉地与测试器交互。我们还设计了一组突变策略，以突出显示揭示JIT编译器错误的程序元素。FuzzJIT同时钻取JIT编译器并保持了高效的模糊测试。我们已经实现了这个设计，并将原型应用于四个主流的JavaScript引擎中发现了新的JIT编译器错误。在一个月的时间内，分别在JavaScriptCore，V8，SpiderMonkey和ChakraCore中暴露了10个，5个，2个和16个新的错误，其中有三个可利用的。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-junjie](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-junjie)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-junjie.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-junjie.pdf)
## GLeeFuzz: Fuzzing WebGL Through Error Message Guided Mutation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#gleefuzz-fuzzing-webgl-through-error-message-guided-mutation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#gleefuzz-fuzzing-webgl-through-error-message-guided-mutation)**
### 作者
* Hui Peng, Purdue University
* Zhihao Yao, UC Irvine
* Ardalan Amiri Sani, UC Irvine
* Dave (Jing) Tian, Purdue University
* Mathias Payer, EPFL
### 摘要
> WebGL是一组用于GPU加速图形的标准化JavaScript API。由于WebGL接口暴露了主机操作系统中底层图形堆栈（包括原生GL库和GPU驱动程序）的远程和非沙盒访问，因此WebGL接口的安全性至关重要。不幸的是，由于其巨大的输入状态空间和无法在并发进程、闭源库和内核设备驱动程序中收集代码覆盖率的不可行性，将最新的模糊测试技术应用于WebGL接口的漏洞发现是具有挑战性的。
> 
> 我们的模糊测试技术GLeeFuzz通过错误消息而不是代码覆盖率来引导输入变异。我们的关键观察是浏览器发出的有意义的错误消息可以帮助开发人员调试他们的WebGL程序。错误消息指示了输入的哪个部分失败（例如，不完整的参数、无效的参数或API调用之间的未满足依赖关系）。利用错误消息作为反馈，模糊测试器可以通过将变异集中在输入的错误部分，有效地扩展代码覆盖率。我们分析了Chrome的WebGL实现，以确定发出错误消息的语句和被拒绝的输入部分之间的依赖关系，并利用这些信息来引导输入变异。我们在不同的桌面和移动操作系统上对Chrome、Firefox和Safari进行了GLeeFuzz原型的评估。我们发现了7个漏洞，其中4个在Chrome中，2个在Safari中，1个在Firefox中。Chrome的漏洞可能允许远程攻击者冻结GPU并可能在浏览器权限下执行远程代码。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/peng](https://www.usenix.org/conference/usenixsecurity23/presentation/peng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-peng.pdf](https://www.usenix.org/system/files/usenixsecurity23-peng.pdf)
## autofz: Automated Fuzzer Composition at Runtime.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#autofz-automated-fuzzer-composition-at-runtime) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#autofz-automated-fuzzer-composition-at-runtime)**
### 作者
* Yu-Fu Fu, Georgia Institute of Technology
* Jaehyuk Lee, Georgia Institute of Technology
* Taesoo Kim, Georgia Institute of Technology
### 摘要
> 模糊测试凭借开发多样化的模糊器的巨大努力，在软件漏洞检测方面变得越来越受欢迎。多种模糊测试技术的应用使得大多数模糊器在其选定的目标上表现出了极佳的性能。然而，矛盾的是，模糊器的多样性也使得很难选择最适合复杂真实世界程序的模糊器，我们称之为选择负担。社区通过创建一组标准基准来比较和对比各种模糊器在广泛应用范围内的性能，试图解决这个问题，但结果始终是次优的决策——平均表现最佳的模糊器并不能保证对用户感兴趣的目标产生最佳结果。
> 
> 为了克服这个问题，我们提出了一个自动化的、非侵入式的元模糊器——autofz，通过动态组合来最大化现有先进模糊器的效益。对于终端用户来说，这意味着不再需要花费时间选择要采用的模糊器（类似于机器学习中的超参数调整），而是可以简单地将所有可用的模糊器放入autofz（类似于AutoML），从而实现最佳的优化结果。关键思想是监控模糊器的运行时进展，称为趋势（类似于梯度下降），并对每个模糊器的资源分配（例如CPU时间）进行精细调整。这与现有的方法形成了鲜明对比，现有方法静态地组合一组模糊器，或通过逐目标程序详尽的预训练。相比之下，autofz在运行时以细粒度的方式推断出主动工作负载的适合模糊器集合。
> 
> 我们的评估结果表明，在相同的计算资源下，autofz在12个可用基准中有11个的性能优于任何表现最佳的单个模糊器，并且在20个基准中以覆盖率而言，击败最佳的协作模糊测试方法有19个。此外，平均而言，与UNIFUZZ和FTS上的单个模糊器相比，autofz发现的漏洞数量增加了152％，与UNIFUZZ上的协作模糊测试相比，增加了415％。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/fu-yu-fu](https://www.usenix.org/conference/usenixsecurity23/presentation/fu-yu-fu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-fu-yu-fu.pdf](https://www.usenix.org/system/files/usenixsecurity23-fu-yu-fu.pdf)
## CarpetFuzz: Automatic Program Option Constraint Extraction from Documentation for Fuzzing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#carpetfuzz-automatic-program-option-constraint-extraction-from-documentation-for-fuzzing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#carpetfuzz-automatic-program-option-constraint-extraction-from-documentation-for-fuzzing)**
### 作者
* Dawei Wang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Ying Li, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Zhiyu Zhang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Kai Chen, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China; Beijing Academy of Artificial Intelligence, China
### 摘要
> 软件中的大规模代码支持丰富多样的功能，同时也包含潜在的漏洞。模糊测试作为最流行的漏洞检测方法之一，无论在工业界还是学术界都在不断发展，旨在通过覆盖更多的代码来找到更多的漏洞。然而，我们发现即使使用最先进的模糊器，仍然存在一些未被探索的代码，只能通过特定的程序选项组合来触发。仅仅突变选项可能会产生许多无效的组合，因为缺乏对选项之间的约束关系（或称关联关系）的考虑。在本文中，我们利用自然语言处理（NLP）自动从程序文档中提取选项描述，并分析选项之间的关系（如冲突、依赖关系），在过滤掉无效的组合后，仅保留有效的组合进行模糊测试。我们实现了一个名为CarpetFuzz的工具，并评估了其性能。结果显示，CarpetFuzz能够准确地从文档中提取关系，准确率为96.10%，召回率为88.85%。基于这些关系，CarpetFuzz将要测试的选项组合减少了67.91%。它帮助AFL发现了其他模糊器无法发现的路径增加了45.97%。在分析了20个流行的开源程序之后，CarpetFuzz发现了57个漏洞，其中包括43个未公开的漏洞。我们还成功为30个漏洞获得了CVE ID。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-dawei](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-dawei)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-dawei.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-dawei.pdf)
## SCARF - A Low-Latency Block Cipher for Secure Cache-Randomization.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#scarf-a-low-latency-block-cipher-for-secure-cache-randomization) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#scarf-a-low-latency-block-cipher-for-secure-cache-randomization)**
### 作者
* Federico Canale, Ruhr-University Bochum
* Tim Güneysu, Ruhr-University Bochum and DFKI
* Gregor Le, Ruhr-University Bochum
* er, Ruhr-University Bochum
* Jan Philipp Thoma, Ruhr-University Bochum
* Yosuke Todo, NTT Social Informatics Laboratories
* Rei Ueno, Tohoku University
### 摘要
> 随机化缓存架构已被证明可以显着增加基于争用的缓存侧信道攻击的复杂性，因此是构建侧信道安全微体系结构的重要组成部分。通过随机化地址到缓存索引的映射，攻击者不再能够轻易地构建出基于争用的缓存攻击所必需的最小驱逐集合。同时，随机化缓存保持了传统缓存的灵活性，使其在各种CPU类型上都能广泛应用。这是相对于缓存分区方法的主要优势。
> 
> 已经提出了各种各样的随机化缓存架构。然而，在这些提议中，实际的随机化函数很少受到关注，经常被忽视。由于随机化直接在缓存查找的关键路径上操作，所以该函数需要具有极低的延迟。与此同时，攻击者不能够绕过随机化，否则将使随机映射的安全性优势失效。在本文中，我们提出了SCARF（Secure CAche Randomization Function），这是第一个专用的缓存随机化密码，它在缓存攻击模型中实现了低延迟且具有密码学安全性。该专用缓存密码的设计方法论进入了小尺寸（10位块长度）块密码和少数轮次中极大密钥依赖的新领域。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/canale](https://www.usenix.org/conference/usenixsecurity23/presentation/canale)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-canale.pdf](https://www.usenix.org/system/files/usenixsecurity23-canale.pdf)
## The Gates of Time: Improving Cache Attacks with Transient Execution.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-gates-of-time-improving-cache-attacks-with-transient-execution) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-gates-of-time-improving-cache-attacks-with-transient-execution)**
### 作者
* Daniel Katzman, Tel Aviv University
* William Kosasih, The University of Adelaide
* Chitchanok Chuengsatiansup, The University of Melbourne
* Eyal Ronen, Tel Aviv University
* Yuval Yarom, The University of Adelaide
### 摘要
> 在过去的二十多年里，高速缓存攻击已被证明对计算机系统的安全性构成重大风险。特别是，大量的研究表明，高速缓存攻击为实施瞬态执行攻击提供了一个跳板。然而，在研究逆向方向上，对于如何利用瞬态执行进行高速缓存攻击的研究投入较少。在本研究中，我们回答了这个问题。
> 
> 我们首先展示了利用瞬态执行，我们可以对高速缓存状态进行任意操作。具体而言，我们设计了通用的逻辑门，其输入和输出是内存地址的缓存状态。我们的逻辑门足够通用，可以在WebAssembly中实现它们。此外，这些逻辑门适用于多个供应商的处理器，包括Intel、AMD、Apple和Samsung。我们证明了这些门是图灵完备的，允许在高速缓存状态上进行任意计算，而不会将逻辑值暴露给程序的体系结构状态。
> 
> 然后，我们展示了我们的逻辑门在高速缓存攻击中的两个用例。第一个用例是放大高速缓存状态，使我们能够在特定内存地址的缓存与否之间创建超过100毫秒的时间差异。我们展示了如何使用这种能力，在WebAssembly中使用低分辨率（0.1毫秒）计时器来构建驱逐集。对于第二个用例，我们提出了Prime+Scope攻击，这是Prime+Probe攻击的一种变种，它将高速缓存状态的采样与该状态的测量分离开来。Prime+Store是第一个能以高于时钟速率对高速缓存状态进行采样的基于时序的高速缓存攻击。我们展示了如何使用Prime+Store在只有0.1毫秒分辨率的时序信号下，从并发执行的模指数运算中获取比特。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/katzman](https://www.usenix.org/conference/usenixsecurity23/presentation/katzman)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-katzman.pdf](https://www.usenix.org/system/files/usenixsecurity23-katzman.pdf)
## Synchronization Storage Channels (S2C): Timer-less Cache Side-Channel Attacks on the Apple M1 via Hardware Synchronization Instructions.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#synchronization-storage-channels-s2c-timer-less-cache-side-channel-attacks-on-the-apple-m1-via-hardware-synchronization-instructions) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#synchronization-storage-channels-s2c-timer-less-cache-side-channel-attacks-on-the-apple-m1-via-hardware-synchronization-instructions)**
### 作者
* Jiyong Yu, University of Illinois Urbana-Champaign
* Aishani Dutta, University of Illinois Urbana-Champaign
* Trent Jaeger, Pennsylvania State University
* David Kohlbrenner, University of Washington
* Christopher W. Fletcher, University of Illinois Urbana-Champaign
### 摘要
> 共享缓存一直是跨进程/核心侧信道攻击的主要目标。从根本上讲，这些攻击需要一种准确观察缓存状态变化的机制。大多数缓存攻击依赖于时间测量来间接推导缓存状态的变化，并且攻击成功与可靠性/可用性的准确计时源息息相关。目前提出的直接观察缓存状态变化的技术相对较少，并且没有一种‘无定时器’的技术可供面向现代CPU的用户空间攻击者使用。
> 
> 本文提出了一种针对苹果M1处理器的无定时器缓存攻击的新技术，称为Synchronization Storage Channels (S2C)。关键观察是同步指令（具体来说是Load-Linked/Store-Conditional（LL/SC）指令）的实现在L1缓存驱逐发生时会产生架构状态的变化。这本身是一个有用的起点用于攻击，但是在进行跨核心缓存攻击时面临着多个技术挑战。具体来说，LL/SC仅观察L1缓存的驱逐（而不是共享的L2缓存的驱逐）。此外，每个攻击线程通过LL/SC只能同时监视一个地址（而不是多个地址）。我们提出了一套技术和逆向工程来克服这些限制，并展示了如何使用LL/SC来同时监视多个（最多11个）受害者L2缓存集合，并成功进行标准的缓存攻击应用，如破解密码实现和构建隐蔽通道。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yu-jiyong](https://www.usenix.org/conference/usenixsecurity23/presentation/yu-jiyong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yu-jiyong.pdf](https://www.usenix.org/system/files/usenixsecurity23-yu-jiyong.pdf)
## ClepsydraCache - Preventing Cache Attacks with Time-Based Evictions.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#clepsydracache-preventing-cache-attacks-with-time-based-evictions) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#clepsydracache-preventing-cache-attacks-with-time-based-evictions)**
### 作者
* Jan Philipp Thoma, Ruhr University Bochum
* Christian Niesler, University of Duisburg-Essen
* Dominic Funke, Ruhr University Bochum
* Gregor Le, Ruhr University Bochum
* er, Ruhr University Bochum
* Pierre Mayr, Ruhr University Bochum
* Nils Pohl, Ruhr University Bochum
* Lucas Davi, University of Duisburg-Essen
* Tim Güneysu, Ruhr University Bochum & DFKI
### 摘要
> 近年来，我们目睹了对微架构CPU层面攻击的转变。特别是，缓存侧信道在其中起着重要作用，因为它们允许攻击者通过利用CPU微架构来窃取秘密信息。这些微妙的攻击利用了冲突缓存地址的体系结构可见性。在本文中，我们提出了ClepsydraCache，通过使用缓存衰减和索引随机化的新型组合来防止最新的缓存攻击。每个缓存条目与一个生存时间（TTL）值相关联。我们提出了一个新的TTL动态调度机制，在防止这些攻击的同时保持性能方面起到了基础性作用。ClepsydraCache有效地防护了最新的缓存攻击，如Prime+（Prune+）Probe。我们在gem5中提供了一个完整的原型，并设计了一个TTL机制的概念验证硬件设计，展示了在实际系统中部署ClepsydraCache的可行性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/thoma](https://www.usenix.org/conference/usenixsecurity23/presentation/thoma)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-thoma.pdf](https://www.usenix.org/system/files/usenixsecurity23-thoma.pdf)
## CacheQL: Quantifying and Localizing Cache Side-Channel Vulnerabilities in Production Software.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#cacheql-quantifying-and-localizing-cache-side-channel-vulnerabilities-in-production-software) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#cacheql-quantifying-and-localizing-cache-side-channel-vulnerabilities-in-production-software)**
### 作者
* Yuanyuan Yuan, The Hong Kong University of Science and Technology
* Zhibo Liu, The Hong Kong University of Science and Technology
* Shuai Wang, The Hong Kong University of Science and Technology
### 摘要
> 缓存侧信道攻击通过检查受害者软件对缓存的访问方式来提取秘密。迄今为止，在不同场景下证明了对加密系统和媒体库的实际攻击，从加密算法中推断出秘密密钥，并重建私有媒体数据，如图像。
> 
> 本文首先提出了设计一个完整的缓存侧信道漏洞检测器的八个标准。接下来，我们提出了CacheQL，这是一个满足所有这些标准的新型检测器。CacheQL通过表征记录的侧信道跟踪的可区分性，精确量化二进制代码的信息泄漏。此外，CacheQL将泄漏建模为一种合作博弈，允许将信息泄漏精确地分布给容易受到缓存侧信道攻击的程序点。CacheQL经过精心优化，用于分析从生产软件中记录的完整侧信道跟踪（其中每个跟踪可能有数百万条记录），并且可以消除加密遮蔽、ORAM或真实世界噪声引入的随机性。
> 
> 我们的评估量化了生产加密和媒体软件的侧信道泄漏。我们进一步定位了之前检测器报告的漏洞，并在最新的OpenSSL（版本3.0.0）、MbedTLS（版本3.0.0）和Libgcrypt（版本1.9.4）中发现了几百个新的易受攻击的程序点。我们定位了Libjpeg（版本2.1.2）中泄漏输入图像隐私的漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yuan-yuanyuan-cacheql](https://www.usenix.org/conference/usenixsecurity23/presentation/yuan-yuanyuan-cacheql)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yuan-yuanyuan-cacheql.pdf](https://www.usenix.org/system/files/usenixsecurity23-yuan-yuanyuan-cacheql.pdf)
## InfinityGauntlet: Expose Smartphone Fingerprint Authentication to Brute-force Attack.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#infinitygauntlet-expose-smartphone-fingerprint-authentication-to-brute-force-attack) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#infinitygauntlet-expose-smartphone-fingerprint-authentication-to-brute-force-attack)**
### 作者
* Yu Chen, Xuanwu Lab, Tencent
* Yang Yu, Xuanwu Lab, Tencent
* Lidong Zhai, Institute of Information Engineering, Chinese Academy of Sciences
### 摘要
> 每天都会有数十亿次智能手机指纹验证（SFA）用于解锁、保护隐私和支付。现有的对SFA的威胁包括假冒攻击（PA）和一些特定漏洞。前者需要知道受害者的指纹信息（如潜在指纹），可以通过活体检测和安全策略来减轻。后者需要额外的条件（如第三方屏幕保护器、Root权限）并且只适用于个别手机型号。
> 
> 本文对SFA进行了首次普遍零知识攻击的研究，不需要任何关于受害者的信息。我们提出了一种新颖的针对现成智能手机的指纹暴力破解攻击，名为InfinityGauntlet。首先，我们发现了不同制造商、操作系统和指纹类型的SFA系统的设计漏洞，以实现无限次认证尝试。然后，我们使用SPI MITM绕过活体检测并进行自动尝试。最后，我们定制了一个合成指纹生成器来获取有效的暴力破解指纹词典。
> 
> 我们设计和实施了低成本设备来发动InfinityGauntlet。一个概念验证案例研究表明，InfinityGauntlet可以在不到一个小时的时间内成功进行暴力破解攻击，而不需要任何关于受害者的信息。此外，对代表性智能手机的实证分析显示了我们工作的可扩展性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-yu](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-yu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-yu.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-yu.pdf)
## A Study of Multi-Factor and Risk-Based Authentication Availability.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-study-of-multi-factor-and-risk-based-authentication-availability) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-study-of-multi-factor-and-risk-based-authentication-availability)**
### 作者
* Anthony Gavazzi, Northeastern University
* Ryan Williams, Northeastern University
* Engin Kirda, Northeastern University
* Long Lu, Northeastern University
* Andre King, MIT Lincoln Laboratory
* Andy Davis, MIT Lincoln Laboratory
* Tim Leek, MIT Lincoln Laboratory
### 摘要
> 基于密码的身份验证 (PBA) 尽管其长期以来被认为不安全，但仍然是网络上最受欢迎的用户身份验证形式。鉴于PBA的不足，许多在线服务支持多因素身份验证 (MFA) 和/或基于风险的身份验证 (RBA) 来更好地保护用户账户的安全性。对MFA和RBA的安全性、可用性和实施进行了广泛研究，但对流行网络服务的可用性进行这方面的测量尚欠全面。此外，还没有研究同时分析MFA和RBA的普及程度，以及单一登录 (SSO) 提供商的存在如何影响网络上MFA和RBA的可用性。
> 
> 在本文中，我们对支持账户创建的Tranco前5000名热门网站进行了一项研究，以了解网络上MFA和RBA的可用性，可以用于MFA和RBA的额外身份验证因素，以及通过更安全的SSO提供商登录网站如何改变用户身份验证安全的情况。我们发现只有42.31%的网站支持任何形式的MFA，而只有22.12%的网站可以阻止明显的账户劫持企图。尽管大多数网站不提供MFA或RBA，但SSO完全改变了情况。如果一个人通过一个提供MFA和/或RBA的SSO提供商在每个网站上创建一个账户，那么在有这些选项可用的情况下，80.29%的网站将能够使用MFA，而72.60%的网站将阻止明显的账户劫持企图。然而，通过SSO传播这些选项会带来隐私权方面的权衡，因为几乎所有支持MFA和RBA的SSO提供商都是主要的第三方跟踪器。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gavazzi](https://www.usenix.org/conference/usenixsecurity23/presentation/gavazzi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gavazzi.pdf](https://www.usenix.org/system/files/usenixsecurity23-gavazzi.pdf)
## A Large-Scale Measurement of Website Login Policies.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-large-scale-measurement-of-website-login-policies) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-large-scale-measurement-of-website-login-policies)**
### 作者
* Suood Al Roomi, Georgia Institute of Technology, Kuwait University
* Frank Li, Georgia Institute of Technology
### 摘要
> 通过使用密码在网站上进行身份验证涉及到一个多阶段的登录过程，每个阶段都涉及到关键的政策和实施决策，对登录安全性和可用性产生影响。尽管安全社区已经确定了登录工作流的每个阶段的最佳实践，但我们目前对实际网站登录政策缺乏广泛的了解。之前的研究依赖于对网站的手动检查，只对一小部分偏向最流行的网站进行评估。
> 
> 在这项研究中，我们努力提供一个更全面和系统的真实网站登录政策图片。我们开发了一种自动推断网站登录政策的方法，并将其应用于Google CrUX排名前100万的域名。我们成功地评估了在考虑到登录阶段时介于18K和359K个网站的登录政策，提供了对比以前研究范围更大两到三个数量级的人群进行了特征化。我们的研究结果揭示了存在不安全登录政策的程度，并确定了一些潜在原因。最终，我们的研究提供了迄今为止关于网站登录安全状况的最全面的实证基础，为改进在线认证提供了指导方向。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/al-roomi](https://www.usenix.org/conference/usenixsecurity23/presentation/al-roomi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-al-roomi.pdf](https://www.usenix.org/system/files/usenixsecurity23-al-roomi.pdf)
## Security and Privacy Failures in Popular 2FA Apps.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#security-and-privacy-failures-in-popular-2fa-apps) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#security-and-privacy-failures-in-popular-2fa-apps)**
### 作者
* Conor Gilsenan, UC Berkeley / ICSI
* Fuzail Shakir, UC Berkeley
* Noura Alomar, UC Berkeley
* Serge Egelman, UC Berkeley / ICSI
### 摘要
> 基于时间的一次性密码（TOTP）算法是一种广泛部署的双要素认证方法，由于其相对较低的实施成本和声称的相对SMS双要素认证的安全优势而受到广泛应用。然而，TOTP双要素认证应用的用户面临一个关键的可用性挑战：保持对存储在TOTP应用程序中的秘密的访问，或者冒着被锁定帐户的风险。为了帮助用户避免这种命运，流行的TOTP应用实施了各种备份机制，每种备份机制都具有不同的安全性和隐私性影响。在本文中，我们定义了一种评估方法，用于对TOTP应用的备份和恢复功能进行系统化的安全性和隐私性分析。我们在Google Play商店中找到了所有至少有100k次安装的通用Android TOTP应用程序，这些应用程序实施了备份机制（n = 22）。我们的研究结果显示，大多数备份策略最终对密码、短信和电子邮件等与TOTP双要素认证预期取代的技术产生了信任。许多备份实现与第三方共享个人用户信息，存在严重的加密缺陷，以及允许应用开发人员以明文形式访问TOTP秘密。我们提出了我们的研究结果，并建议改进TOTP双要素认证应用的备份机制的安全性和隐私性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gilsenan](https://www.usenix.org/conference/usenixsecurity23/presentation/gilsenan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gilsenan.pdf](https://www.usenix.org/system/files/usenixsecurity23-gilsenan.pdf)
## Multi-Factor Key Derivation Function (MFKDF) for Fast, Flexible, Secure, & Practical Key Management.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#multi-factor-key-derivation-function-mfkdf-for-fast-flexible-secure-practical-key-management) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#multi-factor-key-derivation-function-mfkdf-for-fast-flexible-secure-practical-key-management)**
### 作者
* Vivek Nair, University of California, Berkeley
* Dawn Song, University of California, Berkeley
### 摘要
> 我们提出了第一个通用的多因素密钥派生函数（MFKDF）的构建方法。我们的函数在密码基础密钥派生函数（PBKDF）的基础上进行了扩展，支持在密钥派生过程中使用其他常用的身份验证因素，如TOTP、HOTP和硬件令牌。通过这样做，它在典型的Web浏览器中仅增加不到12毫秒的计算开销，却能提供指数级的安全改进。我们进一步提出了一个门限MFKDF构造，允许在丢失某个因素时进行客户端密钥恢复和重组。最后，通过“堆叠”派生密钥，我们提供了一种加密方式，可以强制执行任意特定的密钥派生策略。结果是通过使用所有可用的身份验证因素直接加密保护用户数据的范式转变，而用户体验几乎没有变化。我们演示了我们解决方案不仅显著提高了实现PBKDF的现有系统的安全性，还可以支持PBKDF在以前被认为不可行的新应用。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/nair-mfkdf](https://www.usenix.org/conference/usenixsecurity23/presentation/nair-mfkdf)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-nair-mfkdf.pdf](https://www.usenix.org/system/files/usenixsecurity23-nair-mfkdf.pdf)
## Log: It's Big, It's Heavy, It's Filled with Personal Data! Measuring the Logging of Sensitive Information in the Android Ecosystem.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#log-its-big-its-heavy-its-filled-with-personal-data-measuring-the-logging-of-sensitive-information-in-the-android-ecosystem) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#log-its-big-its-heavy-its-filled-with-personal-data-measuring-the-logging-of-sensitive-information-in-the-android-ecosystem)**
### 作者
* Allan Lyons, University of Calgary
* Julien Gamba, IMDEA Networks Institute and Universidad Carlos III de Madrid
* Austin Shawaga, University of Calgary
* Joel Reardon, University of Calgary and AppCensus, Inc.
* Juan Tapiador, Universidad Carlos III de Madrid
* Serge Egelman, ICSI and UC Berkeley and AppCensus, Inc.
* Narseo Vallina-Rodriguez, IMDEA Networks Institute and AppCensus, Inc.
### 摘要
> Android提供了一个共享系统，可以复用所有系统组件（包括操作系统和运行在其上的应用程序的控制台输出）的登录数据。安全机制确保用户空间的应用程序只能读取它们创建的日志条目，尽管许多"特权"应用程序免于此限制。这包括由Google、手机制造商、移动运营商提供的预装系统应用程序，以及共享相同签名的应用程序。因此，Google建议开发人员不要将敏感信息记录到系统日志中。
> 
> 在本研究中，我们对Android生态系统中敏感数据的日志记录进行了调查。通过一项现场研究，我们展示了大多数设备记录了一定数量的用户识别信息。我们展示了"活动"名称的记录可能无意中通过用户的应用使用行为透露了信息。我们还测试了不同智能手机是否默认记录个人标识符，研究了访问系统日志的预装应用程序，并分析了报告收集系统日志的制造商的隐私政策。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lyons](https://www.usenix.org/conference/usenixsecurity23/presentation/lyons)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lyons.pdf](https://www.usenix.org/system/files/usenixsecurity23-lyons.pdf)
## CodexLeaks: Privacy Leaks from Code Generation Language Models in GitHub Copilot.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#codexleaks-privacy-leaks-from-code-generation-language-models-in-github-copilot) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#codexleaks-privacy-leaks-from-code-generation-language-models-in-github-copilot)**
### 作者
* Liang Niu, New York University
* Shujaat Mirza, New York University
* Zayd Maradni, New York University Abu Dhabi
* Christina Pöpper, New York University Abu Dhabi
### 摘要
> 编码生成语言模型在数十亿行源代码上进行训练，以提供代码生成和自动完成功能，类似于拥有超过一百万用户的代码助手GitHub Copilot。这些数据集可能包含敏感个人信息，即可识别、私密或保密的信息，而这些模型可能会泄露这些信息。
> 
> 本文介绍并评估了一种从GitHub Copilot中使用的Codex模型中提取敏感个人信息的半自动流程。我们采用精心设计的模板来构建更容易导致隐私泄漏的提示。为了克服非公开的训练数据，我们提出了一种使用盲目成员推断攻击的半自动过滤方法。我们通过不同的代码生成模型验证了我们成员推断方法的有效性。我们利用GitHub搜索API的命中率作为区分启发式方法，接着进行人机交互评估，发现大约8%（43个）的提示会导致隐私泄漏。值得注意的是，我们观察到该模型倾向于产生间接泄漏，通过从训练语料库中与查询主题密切相关的个人中生成信息，从而破坏隐私的上下文完整性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/niu](https://www.usenix.org/conference/usenixsecurity23/presentation/niu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-niu.pdf](https://www.usenix.org/system/files/usenixsecurity23-niu.pdf)
## Freaky Leaky SMS: Extracting User Locations by Analyzing SMS Timings.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#freaky-leaky-sms-extracting-user-locations-by-analyzing-sms-timings) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#freaky-leaky-sms-extracting-user-locations-by-analyzing-sms-timings)**
### 作者
* Evangelos Bitsikas, Northeastern University
* Theodor Schnitzler, Research Center Trustworthy Data Science and Security
* Christina Pöpper, New York University Abu Dhabi
* Aanjhan Ranganathan, Northeastern University
### 摘要
> 短信服务（SMS）自2G蜂窝网络引入以来，仍然是最受欢迎的通信渠道之一。本文演示了仅仅定期接收无声短信消息就会开启一个隐秘的侧信道，让其他常规网络用户能够推断短信接收者的位置。核心思想是接收短信会生成必要的传送报告，其接收会给发送方提供了一个时序攻击向量。我们在不同国家、运营商和设备上进行了实验，以展示攻击者可以通过分析typical receiver locations的时序测量来推断短信接收者的位置。我们的结果显示，训练一个机器学习模型后，短信发送方可以准确确定接收者的多个位置。例如，我们的模型在不同国家的位置上实现了高达96%的准确度，在比利时的两个位置上实现了86%的准确度。由于蜂窝网络的设计方式，很难阻止传送报告返回给原发信人，这使得阻止这种隐蔽攻击变得具有挑战性，除非对网络架构进行根本性的改变。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bitsikas](https://www.usenix.org/conference/usenixsecurity23/presentation/bitsikas)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-bitsikas.pdf](https://www.usenix.org/system/files/usenixsecurity23-bitsikas.pdf)
## The Writing on the Wall and 3D Digital Twins: Personal Information in (not so) Private Real Estate.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-writing-on-the-wall-and-3d-digital-twins-personal-information-in-not-so-private-real-estate) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-writing-on-the-wall-and-3d-digital-twins-personal-information-in-not-so-private-real-estate)**
### 作者
* Rachel McAmis, University of Washington
* Tadayoshi Kohno, University of Washington
### 摘要
> 在线房地产公司开始提供房屋的三维虚拟导览（三维数字孪生体）。我们对Zillow上可见的44个带有个人物品的三维家庭导览进行了定性分析，并评估每个家庭共享的个人信息的程度和类型。使用我们创建的代码书，我们分析了每个家庭中三类个人信息：政府提供的不在互联网上分享的指导、身份信息和行为信息。我们的分析揭示了所有家庭中各种敏感信息，包括姓名、爱好、就业和教育历史、产品偏好（例如，食品柜中的物品、香烟的类型）、药物、信用卡号码、密码等等。根据我们的分析，居民既采取了隐私保护措施，也存在隐私疏忽。我们确定了可能利用三维导览信息的潜在对手，突出了室内空间信息的其他敏感来源，并讨论了可以解决这些问题的未来工具和政策变化。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/mcamis](https://www.usenix.org/conference/usenixsecurity23/presentation/mcamis)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-mcamis.pdf](https://www.usenix.org/system/files/usenixsecurity23-mcamis.pdf)
## Glaze: Protecting Artists from Style Mimicry by Text-to-Image Models.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#glaze-protecting-artists-from-style-mimicry-by-text-to-image-models) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#glaze-protecting-artists-from-style-mimicry-by-text-to-image-models)**
### 作者
* Shawn Shan, University of Chicago
* Jenna Cryan, University of Chicago
* Emily Wenger, University of Chicago
* Haitao Zheng, University of Chicago
* Rana Hanocka, University of Chicago
* Ben Y. Zhao, University of Chicago
### 摘要
> 最近的图像生成模型（如MidJourney和Stable Diffusion）威胁到了许多专业艺术家社区的存在。特别是，在“细调”某位艺术家作品样本之后，模型可以学习模仿特定艺术家的艺术风格。在本文中，我们描述了Glaze的设计、实现和评估，这是一种工具，使艺术家能够在在线分享之前给他们的艺术作品应用“风格披风”。这些披风对图像应用几乎察觉不到的扰动，当作为训练数据使用时，误导了试图模仿特定艺术家的生成模型。与专业艺术家社区协作，我们对1000多位艺术家进行用户研究，评估他们对AI艺术的看法，以及我们的工具的效力、易用性和对扰动的容忍度以及在不同情景和对抗自适应措施下的稳健性。调查的艺术家和基于经验的CLIP评分表明，即使在低扰动水平（p=0.05）下，Glaze在正常条件下（>92%）和对抗自适应措施（>85%）下，成功地扰乱了模仿。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shan](https://www.usenix.org/conference/usenixsecurity23/presentation/shan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shan.pdf](https://www.usenix.org/system/files/usenixsecurity23-shan.pdf)
## Lost at C: A User Study on the Security Implications of Large Language Model Code Assistants.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#lost-at-c-a-user-study-on-the-security-implications-of-large-language-model-code-assistants) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#lost-at-c-a-user-study-on-the-security-implications-of-large-language-model-code-assistants)**
### 作者
* Gustavo S, New York University
* oval, New York University
* Hammond Pearce, New York University
* Teo Nys, New York University
* Ramesh Karri, New York University
* Siddharth Garg, New York University
* Brendan Dolan-Gavitt, New York University
### 摘要
> 大型语言模型（LLMs）如OpenAI Codex越来越被用作基于人工智能的编码助手。了解这些工具对开发者代码的影响至关重要，尤其是最近的研究表明，LLMs可能会提出网络安全漏洞。我们进行了一项面向网络安全的用户研究（N=58），以评估学生程序员在LLMs辅助下编写的代码。鉴于低级别错误的潜在严重性以及它们在实际项目中的相对频率，我们要求参与者使用C语言实现一个单链表结构作为“购物清单”。我们的研究结果表明，这种情况下（使用指针和数组操作的低级别C语言），安全影响较小：与对照组相比，使用人工智能辅助的用户产生的关键安全错误的数量增加不超过10％，表明使用LLMs不会引入新的安全风险。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/sandoval](https://www.usenix.org/conference/usenixsecurity23/presentation/sandoval)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-sandoval.pdf](https://www.usenix.org/system/files/usenixsecurity23-sandoval.pdf)
## Two-in-One: A Model Hijacking Attack Against Text Generation Models.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#two-in-one-a-model-hijacking-attack-against-text-generation-models) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#two-in-one-a-model-hijacking-attack-against-text-generation-models)**
### 作者
* Wai Man Si, CISPA Helmholtz Center for Information Security
* Michael Backes, CISPA Helmholtz Center for Information Security
* Yang Zhang, CISPA Helmholtz Center for Information Security
* Ahmed Salem, Microsoft
### 摘要
> 机器学习在各个应用领域取得了显著进展，从人脸识别到文本生成应用。然而，它的成功也伴随着不同的攻击。最近，提出了一种新的攻击方式，既涉及责任追究问题，又存在寄生计算的风险，即模型劫持攻击。然而，这种攻击仅仅关注于图像分类任务。在本研究中，我们将这种攻击扩展到包括文本生成和分类模型，从而展示其更广泛的适用性。更具体地说，我们提出了一种新型的模型劫持攻击，名为Ditto，可以将多个文本分类任务劫持为多个生成任务，例如语言翻译、文本摘要和语言建模。我们使用了一系列文本基准数据集，如SST-2、TweetEval、AGnews、QNLI和IMDB，来评估我们的攻击性能。我们的结果表明，通过使用Ditto，攻击者可以成功劫持文本生成模型而不损害其效用。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/si](https://www.usenix.org/conference/usenixsecurity23/presentation/si)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-si.pdf](https://www.usenix.org/system/files/usenixsecurity23-si.pdf)
## PTW: Pivotal Tuning Watermarking for Pre-Trained Image Generators.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#ptw-pivotal-tuning-watermarking-for-pre-trained-image-generators) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#ptw-pivotal-tuning-watermarking-for-pre-trained-image-generators)**
### 作者
* Nils Lukas, University of Waterloo
* Florian Kerschbaum, University of Waterloo
### 摘要
> Deepfake（深度伪造）是指使用深度生成器合成的内容，当被滥用时，有可能破坏对数字媒体的信任。合成高质量的深度伪造需要使用只有少数实体可以训练和提供的大型复杂生成器。威胁来自于恶意用户，他们可以利用提供的模型访问权限生成有害的深度伪造，而不必担心被发现。数字水印技术可以通过将可识别的代码嵌入到生成器中，并从生成的图像中提取出来，使深度伪造可被检测到。本研究提出了一种名为Pivotal Tuning Watermarking (PTW)的数字水印方法，该方法可以（i）比从头开始的数字水印快三个数量级，并且（ii）不需要任何训练数据。我们改进了现有的数字水印方法，并扩展至比相关研究大4倍的生成器规模。PTW可以嵌入比现有方法更长的代码，并且更好地保留生成器的图像质量。我们提出了严格的基于对抗的鲁棒性和不可检测性定义，并且我们的研究揭示了在生成器的参数可控情况下，数字水印不具备鲁棒性。我们提出了一种自适应攻击，只需访问200个未经过水印处理的图像，就可以成功移除任何数字水印。我们的研究对数字水印在深度伪造检测中的可信度提出了挑战，特别是当生成器的参数可获得时。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lukas](https://www.usenix.org/conference/usenixsecurity23/presentation/lukas)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lukas.pdf](https://www.usenix.org/system/files/usenixsecurity23-lukas.pdf)
## Lessons Lost: Incident Response in the Age of Cyber Insurance and Breach Attorneys.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#lessons-lost-incident-response-in-the-age-of-cyber-insurance-and-breach-attorneys) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#lessons-lost-incident-response-in-the-age-of-cyber-insurance-and-breach-attorneys)**
### 作者
* Daniel W. Woods, University of Edinburgh
* Rainer Böhme, University of Innsbruck
* Josephine Wolff, Tufts University
* Daniel Schwarcz, University of Minnesota
### 摘要
> 事件响应（IR）可让受害企业发现、遏制和恢复安全事件，并帮助更广泛的社群避免类似攻击。为了达到这些目标，技术从业人员越来越受到网络保险公司和律师等利益相关方的影响。本文通过一个多阶段、混合方法的研究设计，通过69个专家访谈、商业关系数据和在线验证研讨会来探讨这些影响。我们研究的第一阶段建立了11个描述网络保险将工作交给少数IR公司、降低支付费用并指派律师指导技术调查员的简化事实。第二阶段研究表明，律师在指导事件响应时经常会引入法律合同和沟通步骤，这会减慢事件响应的速度；建议IR从业人员不要记录整改步骤或制作正式报告；并限制访问任何生成的文件。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/woods](https://www.usenix.org/conference/usenixsecurity23/presentation/woods)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-woods.pdf](https://www.usenix.org/system/files/usenixsecurity23-woods.pdf)
## Bug Hunters' Perspectives on the Challenges and Benefits of the Bug Bounty Ecosystem.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#bug-hunters-perspectives-on-the-challenges-and-benefits-of-the-bug-bounty-ecosystem) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#bug-hunters-perspectives-on-the-challenges-and-benefits-of-the-bug-bounty-ecosystem)**
### 作者
* Omer Akgul, University of Maryland
* Taha Eghtesad, Pennsylvania State University
* Amit Elazari, University of California, Berkeley
* Omprakash Gnawali, University of Houston
* Jens Grossklags, Technical University of Munich
* Michelle L. Mazurek, University of Maryland
* Daniel Votipka, Tufts University
* Aron Laszka, Pennsylvania State University
### 摘要
> 虽然研究人员已从平台和计划的角度对漏洞赏金生态系统进行了表征，但对关键参与者——漏洞猎人的观点几乎没有进行过深入研究。为了改进漏洞赏金计划，了解猎人的动机因素、挑战和总体受益非常重要。我们通过三项研究来填补这一研究空白：通过自由列举调查（n=56）确定关键因素，通过较大规模的因素评分调查（n=159）评估每个因素的重要性，并通过半结构化访谈揭示细节（n=24）。在漏洞猎人列举的54个因素中，我们发现奖励和学习机会是最重要的受益。此外，我们发现范围是计划之间的最重要区别因素。令人惊讶的是，我们发现对于猎人来说，获取声誉是最不重要的动机因素之一。在我们确定的挑战中，沟通问题，如不响应和争议，是最重大的问题。我们提出建议，使漏洞赏金生态系统更加适应更多的漏洞猎人，并最终增加对未充分利用市场的参与。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/akgul](https://www.usenix.org/conference/usenixsecurity23/presentation/akgul)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-akgul.pdf](https://www.usenix.org/system/files/usenixsecurity23-akgul.pdf)
## Work-From-Home and COVID-19: Trajectories of Endpoint Security Management in a Security Operations Center.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#work-from-home-and-covid-19-trajectories-of-endpoint-security-management-in-a-security-operations-center) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#work-from-home-and-covid-19-trajectories-of-endpoint-security-management-in-a-security-operations-center)**
### 作者
* Kailani R. Jones, University of Kansas
* Dalton A. Brucker-Hahn, University of Kansas
* Bradley Fidler, Independent Researcher
* Alex, University of Kansas
* ru G. Bardas, University of Kansas
### 摘要
> “在“远程办公”（WFH）互联网使用的COVID-19激增下，许多组织都被激励加强他们的端点安全监控能力。这一趋势对安全运营中心（SOC）在管理企业网络上的终端设备方面有着重大影响：包括在组织角色、监管环境和所需技能上。通过交叉分析历史分析（从1970年代开始）和人类学研究（分析了在SOC内的1,000多小时中，涉及352个现场记录的资料，同时辅以对其他7个SOC的定量访谈），我们揭示了推动网络管理朝向终端设备的因果力量。我们进一步凸显了对终端用户隐私和分析师过度工作所带来的负面影响。因此，我们断言SOC应考虑为从管理网络边界和相关设备转向指挥实际用户终端做好持续、长期的准备，同时面临潜在的隐私挑战和更多的过劳现象。”

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/jones](https://www.usenix.org/conference/usenixsecurity23/presentation/jones)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-jones.pdf](https://www.usenix.org/system/files/usenixsecurity23-jones.pdf)
## "Employees Who Don't Accept the Time Security Takes Are Not Aware Enough": The CISO View of Human-Centred Security.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#employees-who-dont-accept-the-time-security-takes-are-not-aware-enough-the-ciso-view-of-human-centred-security) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#employees-who-dont-accept-the-time-security-takes-are-not-aware-enough-the-ciso-view-of-human-centred-security)**
### 作者
* Jonas Hielscher, Ruhr University Bochum
* Uta Menges, Ruhr University Bochum
* Simon Parkin, TU Delft
* Annette Kluge, Ruhr University Bochum
* M. Angela Sasse, Ruhr University Bochum
### 摘要
> 在较大规模的组织中，通常由首席信息安全官（CISO）负责管理保护员工的安全控制和策略。在研究、产业和政策领域，人类行为干预和影响原则与CISO实践的关系方面正在加强努力，尽管这些本身已经是复杂的学科。在这里，我们探讨了人本安全（HCS）概念在实践需求中的适应情况：我们采用行动研究方法，与30名瑞士CISO社群成员在为期8个月的五次研讨会上展开了与HCS相关的讨论。我们对讨论过程中所做的超过25个小时的记录进行编码和分析。我们发现，CISO们首先将HCS视为市场上可用的东西，即意识和钓鱼模拟。虽然他们经常将责任转移到管理层（通过要求更多支持）或员工（指责他们），但我们注意到缺乏权力以及阻碍CISO们考虑到实际人类行为和安全对员工造成的摩擦的独立思维。我们得出结论，产业最佳实践和HCS研究的现状并不一致。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/hielscher](https://www.usenix.org/conference/usenixsecurity23/presentation/hielscher)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-hielscher.pdf](https://www.usenix.org/system/files/usenixsecurity23-hielscher.pdf)
## Aegis: Mitigating Targeted Bit-flip Attacks against Deep Neural Networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#aegis-mitigating-targeted-bit-flip-attacks-against-deep-neural-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#aegis-mitigating-targeted-bit-flip-attacks-against-deep-neural-networks)**
### 作者
* Jialai Wang, Tsinghua University
* Ziyuan Zhang, Beijing University of Posts and Telecommunications
* Meiqi Wang, Tsinghua University
* Han Qiu, Tsinghua University and Zhongguancun Laboratory
* Tianwei Zhang, Nanyang Technological University
* Qi Li, Tsinghua University and Zhongguancun Laboratory
* Zongpeng Li, Tsinghua University and Hangzhou Dianzi University
* Tao Wei, Ant Group
* Chao Zhang, Tsinghua University and Zhongguancun Laboratory
### 摘要
> 位翻转攻击（BFAs）近来引起了相当大的关注，攻击者可以篡改少量的模型参数位来破坏DNN的完整性。为了减轻这种威胁，提出了一批防御方法，重点关注非针对性的场景。不幸的是，它们要么需要额外可信任的应用程序，要么会使模型更容易受到针对性BFA的攻击。针对针对性BFA的对策，其本质更隐蔽和更有目的性，远未被充分建立。
> 
> 在这项工作中，我们提出了一种名为Aegis的新型防御方法来减轻针对性BFA。核心观察是现有的针对性攻击侧重于翻转某些重要层的关键位。因此，我们设计了一种动态退出机制，将额外的内部分类器（ICs）附加到隐藏层。该机制使输入样本能够从不同的层中提前退出，有效地破坏了攻击者的攻击计划。此外，动态退出机制在每次推理过程中随机选择ICs进行预测，显著增加了自适应攻击的攻击成本，因为所有防御机制对攻击者都是透明的。我们还提出了一种鲁棒性训练策略，通过在IC训练阶段模拟BFAs来使ICs适应攻击场景，以增加模型的鲁棒性。对四个知名数据集和两个流行的DNN结构进行了广泛评估，结果显示Aegis能够有效减轻不同的最新针对性攻击，攻击成功率降低了5-10倍，显著优于现有的防御方法。我们公开了Aegis的代码。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-jialai](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-jialai)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-jialai.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-jialai.pdf)
## Rethinking White-Box Watermarks on Deep Learning Models under Neural Structural Obfuscation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#rethinking-white-box-watermarks-on-deep-learning-models-under-neural-structural-obfuscation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#rethinking-white-box-watermarks-on-deep-learning-models-under-neural-structural-obfuscation)**
### 作者
* Yifan Yan, Fudan University
* Xudong Pan, Fudan University
* Mi Zhang, Fudan University
* Min Yang, Fudan University
### 摘要
> 深度神经网络（DNN）的版权保护对于人工智能公司来说是迫切的需要。为了追踪非法分发的模型副本，DNN水印技术是一种新兴技术，用于在预测行为或模型内部嵌入和验证秘密身份信息。后一种分支称为白盒DNN水印技术，牺牲较少的功能，并涉及对目标DNN的更多了解，被认为是准确、可信和安全的，能够抵抗大多数已知的去水印攻击，引起了学术界和工业界的研究关注。
> 
> 本文首次系统研究了主流白盒DNN水印技术如何普遍容易受到神经结构混淆攻击的影响，这种攻击通过添加一组虚拟神经元到目标模型中但不改变模型的行为。我们设计了一个全面的框架，自动生成并注入具有高隐蔽性的虚拟神经元，我们的攻击方法大幅修改目标模型的结构，以抑制水印验证的成功。通过广泛的评估，我们的工作首次表明九个已发表的水印方案需要修订其验证程序。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yan](https://www.usenix.org/conference/usenixsecurity23/presentation/yan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yan.pdf](https://www.usenix.org/system/files/usenixsecurity23-yan.pdf)
## PELICAN: Exploiting Backdoors of Naturally Trained Deep Learning Models In Binary Code Analysis.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#pelican-exploiting-backdoors-of-naturally-trained-deep-learning-models-in-binary-code-analysis) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#pelican-exploiting-backdoors-of-naturally-trained-deep-learning-models-in-binary-code-analysis)**
### 作者
* Zhuo Zhang, Purdue University
* Guanhong Tao, Purdue University
* Guangyu Shen, Purdue University
* Shengwei An, Purdue University
* Qiuling Xu, Purdue University
* Yingqi Liu, Purdue University
* Yapeng Ye, Purdue University
* Yaoxuan Wu, University of California, Los Angeles
* Xiangyu Zhang, Purdue University
### 摘要
> 深度学习（DL）模型在许多网络安全应用中越来越广泛地使用，并且相比传统解决方案表现出更优越的性能。在本文中，我们研究了在二进制分析中使用的自然训练模型中的后门漏洞。这些后门并不是由攻击者注入的，而是数据集和/或训练过程中的缺陷所导致的。攻击者可以通过向其输入（例如用于恶意软件检测的二进制代码片段）注入一些小的固定输入模式（例如指令）来利用这些漏洞，从而引发误分类（例如，恶意软件逃避检测）。我们专注于在二进制分析中使用的Transformer模型。给定一个模型，我们利用一种特别设计用于这些模型的触发器反演技术来得出可以引发误分类的触发器指令。在攻击期间，我们利用一种新颖的触发器注入技术将触发器指令插入输入的二进制代码片段中。注入确保了代码片段原始程序语义的保持，并且触发器成为该语义的一个组成部分，因此不容易被消除。我们在5个二进制分析任务和15个模型上评估了我们的原型系统PELICAN。结果表明，在白盒和黑盒场景下，PELICAN能够有效地引发所有评估模型的误分类。我们的案例研究证明了PELICAN能够利用两个闭源商业工具的后门漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-zhuo-pelican](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-zhuo-pelican)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-zhuo-pelican.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-zhuo-pelican.pdf)
## IvySyn: Automated Vulnerability Discovery in Deep Learning Frameworks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#ivysyn-automated-vulnerability-discovery-in-deep-learning-frameworks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#ivysyn-automated-vulnerability-discovery-in-deep-learning-frameworks)**
### 作者
* Neophytos Christou, Brown University
* Di Jin, Brown University
* Vaggelis Atlidakis, Brown University
* Baishakhi Ray, Columbia University
* Vasileios P. Kemerlis, Brown University
### 摘要
> 我们提出了IvySyn，这是第一个在深度学习（DL）框架中发现内存错误漏洞的完全自动化框架。IvySyn利用本地API的静态类型属性，以自动执行基于类型感知的基于变异的模糊测试来对低级内核代码进行测试。给定一组触发低级本地DL（C / C ++）代码中内存安全性（和运行时）错误的有害输入，IvySyn自动合成高级语言（例如Python）中的代码片段，通过高级API传播触发错误的输入。这些代码片段实际上充当“漏洞证明”，因为它们证明了攻击者可以通过各种高级API对本地代码中的漏洞进行攻击的存在。我们的评估结果显示，IvySyn在效率和有效性方面明显优于过去的方法，在发现流行的DL框架中的漏洞方面表现出色。具体而言，我们使用IvySyn来测试TensorFlow和PyTorch。虽然仍处于早期原型阶段，但IvySyn已帮助TensorFlow和PyTorch框架开发者鉴定和修复了61个以前未知的安全漏洞，并分配了39个独特的CVE编号。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/christou](https://www.usenix.org/conference/usenixsecurity23/presentation/christou)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-christou.pdf](https://www.usenix.org/system/files/usenixsecurity23-christou.pdf)
## Hey Kimya, Is My Smart Speaker Spying on Me? Taking Control of Sensor Privacy Through Isolation and Amnesia.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#hey-kimya-is-my-smart-speaker-spying-on-me-taking-control-of-sensor-privacy-through-isolation-and-amnesia) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#hey-kimya-is-my-smart-speaker-spying-on-me-taking-control-of-sensor-privacy-through-isolation-and-amnesia)**
### 作者
* Piet De Vaere, ETH Zürich
* Adrian Perrig, ETH Zürich
### 摘要
> 尽管智能音箱和其他语音助手日益普及，但它们始终保持待机状态的特性仍然引发了重大的隐私担忧。为了解决这些问题，我们提出了Kimya，这是一个加固框架，允许设备供应商提供强大的数据隐私保证。具体而言，Kimya保证麦克风数据只能用于本地处理，并在生成用户可审计的通知后立即丢弃。因此，Kimya使设备对其数据保留行为负责。此外，Kimya不仅适用于语音助手，还适用于所有具有一直待机、事件触发传感器的设备。我们在ARM Cortex-M上实现了Kimya，并将其应用于唤醒词检测引擎。我们的评估表明，Kimya引入了低开销，在受限环境中可使用，并且不需要硬件修改。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/de-vaere](https://www.usenix.org/conference/usenixsecurity23/presentation/de-vaere)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-de-vaere.pdf](https://www.usenix.org/system/files/usenixsecurity23-de-vaere.pdf)
## Spying through Your Voice Assistants: Realistic Voice Command Fingerprinting.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#spying-through-your-voice-assistants-realistic-voice-command-fingerprinting) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#spying-through-your-voice-assistants-realistic-voice-command-fingerprinting)**
### 作者
* Dilawer Ahmed, North Carolina State University
* Aafaq Sabir, North Carolina State University
* Anupam Das, North Carolina State University
### 摘要
> 语音助手因其语音界面提供的便利性和自动化而日益普及。然而，这种便利性往往伴随着意想不到的安全和隐私风险。例如，语音助手的加密流量可能会泄露有关用户习惯和生活方式的敏感信息。在本文中，我们提出了对最流行的语音助手平台（Google、Alexa和Siri）上的语音命令进行指纹识别的分类法。我们还对通过语音界面对第三方应用程序和流媒体服务进行指纹识别的可行性进行了更深入的研究。我们的分析不仅改进了先进技术，还研究了一个更现实的加密流量下对语音活动进行指纹识别的设置。我们提出的技术考虑到一个被动网络窃听器观察家庭中各种设备的加密流量，因此首先检测到语音助手的调用/激活，然后确定所发出的具体语音命令。通过使用端到端系统设计，我们展示了可以以99％的准确率检测到语音助手何时被激活，然后利用随后的流量模式来推测出更精细用户活动，准确率约为77-80％。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ahmed-dilawer](https://www.usenix.org/conference/usenixsecurity23/presentation/ahmed-dilawer)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ahmed-dilawer.pdf](https://www.usenix.org/system/files/usenixsecurity23-ahmed-dilawer.pdf)
## QFA2SR: Query-Free Adversarial Transfer Attacks to Speaker Recognition Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#qfa2sr-query-free-adversarial-transfer-attacks-to-speaker-recognition-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#qfa2sr-query-free-adversarial-transfer-attacks-to-speaker-recognition-systems)**
### 作者
* Guangke Chen, ShanghaiTech University
* Yedi Zhang, ShanghaiTech University
* Zhe Zhao, ShanghaiTech University
* Fu Song, ShanghaiTech University; Automotive Software Innovation Center; Institute of Software, Chinese Academy of Sciences & University of Chinese Academy of Sciences
### 摘要
> 当前对说话人识别系统（SRS）的对抗攻击要么需要白盒访问，要么需要对目标SRS进行大量的黑盒查询，因此仍然无法与专有商业API和语音控制设备进行实际攻击的效果相媲美。为了填补这一差距，我们提出了QFA2SR，一种有效且难以察觉的无查询黑盒攻击方法，利用对抗性语音的可传递性。为了提高可传递性，我们提出了三种新颖的方法，即定制损失函数、SRS集成和时间频率腐蚀。第一种方法将损失函数针对不同的攻击场景进行定制。后两种方法以两种不同的方式增强替代SRS。SRS集成将多样化的替代SRS与新策略结合起来，适应SRS的独特评分特性。时间频率腐蚀通过引入精心设计的时域/频域修改函数来增强替代SRS，模拟和近似目标SRS的决策边界以及空中攻击引入的失真。QFA2SR在四个流行的商业API（Microsoft Azure、讯飞、京东和菱行软件）上将有针对性的可传递性提高了20.9%至70.7%，在无查询设置下明显优于现有的攻击方法，并对难以察觉性几乎没有影响。QFA2SR在空中对三种广泛使用的语音助手（谷歌助手、苹果Siri和天猫精灵）进行攻击时也非常有效，分别达到60%、46%和70%的有针对性传递能力。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-guangke](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-guangke)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-guangke.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-guangke.pdf)
## Learning Normality is Enough: A Software-based Mitigation against Inaudible Voice Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#learning-normality-is-enough-a-software-based-mitigation-against-inaudible-voice-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#learning-normality-is-enough-a-software-based-mitigation-against-inaudible-voice-attacks)**
### 作者
* Xinfeng Li, USSLAB, Zhejiang University
* Xiaoyu Ji, USSLAB, Zhejiang University
* Chen Yan, USSLAB, Zhejiang University
* Chaohao Li, USSLAB, Zhejiang University and Hangzhou Hikvision Digital Technology Co., Ltd.
* Yichen Li, Hong Kong University of Science and Technology
* Zhenning Zhang, University of Illinois at Urbana-Champaign
* Wenyuan Xu, USSLAB, Zhejiang University
### 摘要
> 不可听声音攻击在默默地注入恶意声音指令来操控语音助手等语音控制设备，以操纵智能音箱等设备。为了减轻现有和未来设备面临的此类威胁，本文提出NormDetect，一种基于软件的缓解方案，可以立即应用于广泛的设备，无需进行任何硬件修改。为了克服攻击模式在设备之间的变化导致的挑战，我们设计了一种通用的检测模型，不依赖于特定设备的音频特征或样本。与现有研究的有监督学习方法不同，我们采用了受异常检测启发的无监督学习。尽管不可听声音攻击的模式各不相同，但我们发现良性音频在时频域中共享相似模式。因此，我们可以通过学习良性音频的模式（正常性）来检测攻击（异常）。NormDetect将频谱特征映射到低维空间，执行相似性查询，并用标准特征嵌入进行频谱重建。这导致攻击的重建误差比正常性更显著。基于我们从24个智能设备中收集的383,320个测试样本的评估显示，平均AUC为99.48%，EER为2.23%，表明NormDetect在检测不可听声音攻击方面的有效性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-xinfeng](https://www.usenix.org/conference/usenixsecurity23/presentation/li-xinfeng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-xinfeng.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-xinfeng.pdf)
## Powering for Privacy: Improving User Trust in Smart Speaker Microphones with Intentional Powering and Perceptible Assurance.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#powering-for-privacy-improving-user-trust-in-smart-speaker-microphones-with-intentional-powering-and-perceptible-assurance) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#powering-for-privacy-improving-user-trust-in-smart-speaker-microphones-with-intentional-powering-and-perceptible-assurance)**
### 作者
* Youngwook Do, Georgia Institute of Technology
* Nivedita Arora, Georgia Institute of Technology
* Ali Mirzazadeh, Georgia Institute of Technology and Massachusetts Institute of Technology
* Injoo Moon, Georgia Institute of Technology and Massachusetts Institute of Technology
* Eryue Xu, Georgia Institute of Technology
* Zhihan Zhang, Georgia Institute of Technology and University of Washington
* Gregory D. Abowd, Georgia Institute of Technology and Northeastern University
* Sauvik Das, Georgia Institute of Technology and Carnegie Mellon University
### 摘要
> 智能音箱配备始终开启的麦克风以方便基于语音的交互。为了解决用户隐私担忧，现有设备配备了一些隐私功能，例如静音按钮和本地唤醒词检测模块。然而，由于存在利益不一致，即谷歌、Meta和亚马逊从收集个人数据中获利，用户很难相信这些由制造商提供的隐私功能实际有效。所需的是可感知的保证，即用户可以通过物理感知来验证这些隐私功能是否真正起作用。为此，我们引入、实施和评估了“故意供能”麦克风的概念，以为用户提供智能音箱隐私的可感知保证。我们采用迭代设计过程开发了Candid Mic，这是一款无需电池、无线的麦克风，只能通过从用户故意互动中获取能量来供电。此外，用户可以通过目视检查能量采集模块与麦克风之间的连接状态。通过一项被试内实验，我们发现Candid Mic能够向用户提供关于麦克风是否捕捉音频的可感知保证，并提高用户对使用智能音箱的信任，相较于静音按钮界面。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/do](https://www.usenix.org/conference/usenixsecurity23/presentation/do)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-do.pdf](https://www.usenix.org/system/files/usenixsecurity23-do.pdf)
## To Cloud or not to Cloud: A Qualitative Study on Self-Hosters' Motivation, Operation, and Security Mindset.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#to-cloud-or-not-to-cloud-a-qualitative-study-on-self-hosters-motivation-operation-and-security-mindset) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#to-cloud-or-not-to-cloud-a-qualitative-study-on-self-hosters-motivation-operation-and-security-mindset)**
### 作者
* Lea Gröber, CISPA Helmholtz Center for Information Security and Saarland University
* Rafael Mrowczynski, CISPA Helmholtz Center for Information Security
* Nimisha Vijay, Nextcloud
* Daphne A. Muller, Nextcloud
* Adrian Dabrowski, CISPA Helmholtz Center for Information Security
* Katharina Krombholz, CISPA Helmholtz Center for Information Security
### 摘要
> 尽管云服务已经广泛可用，但仍有些人决定自主托管其自身或组织的内部或外部服务。在这样做的过程中，商业、机构和私人自助托管者对其数据的安全性和可靠性负责。目前，我们对于这些自助托管者的动机、运营和保障服务的挑战知之甚少。为了改善对自助托管者安全心态和行为的理解，我们进行了一项大规模调查（N=994），调查了一款热门自助托管套件的用户，并进行了深入的面对面访谈，对象包括商业用户、非营利组织用户和私人用户（N=41）。我们发现所有用户群体中都存在模范行为，然而，我们也发现有相当一部分自助托管者在安全问题上采取非系统化的方式，不论其社交或组织背景如何。模糊不清的概念，如防火墙和备份，在自助托管者中占主导地位，而对于其所帮助减轻的风险却没有进行适当的反思。有时，自助托管者会采取创造性策略来弥补潜在的专业知识或经验不足。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/grober](https://www.usenix.org/conference/usenixsecurity23/presentation/grober)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-grober.pdf](https://www.usenix.org/system/files/usenixsecurity23-grober.pdf)
## "I wouldn't want my unsafe code to run my pacemaker": An Interview Study on the Use, Comprehension, and Perceived Risks of Unsafe Rust.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#i-wouldnt-want-my-unsafe-code-to-run-my-pacemaker-an-interview-study-on-the-use-comprehension-and-perceived-risks-of-unsafe-rust) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#i-wouldnt-want-my-unsafe-code-to-run-my-pacemaker-an-interview-study-on-the-use-comprehension-and-perceived-risks-of-unsafe-rust)**
### 作者
* S, Leibniz University Hannover
* ra Höltervennhoff, Leibniz University Hannover
* Philip Klostermeyer, CISPA Helmholtz Center for Information Security
* Noah Wöhler, CISPA Helmholtz Center for Information Security
* Yasemin Acar, Paderborn University, George Washington University
* Sascha Fahl, CISPA Helmholtz Center for Information Security
### 摘要
> 现代软件开发仍然在内存安全问题上面临着许多安全漏洞的困扰。Rust编程语言解决了内存安全问题并提供了更多的安全功能。然而，Rust允许开发者使用不安全的Rust来放弃其中一些保证。先前的研究发现，许多安全漏洞的根源是不安全的Rust。
> 
> 在本文中，我们是第一个去探究开发者对使用不安全的Rust的动机、经验和风险评估的深入调查。因此，我们对有经验的Rust开发者进行了26个半结构化的访谈。我们发现开发者的目标是谨慎地、有限地使用不安全的Rust。然而，我们也发现了常见的误解和工具疲劳，这可能导致安全问题。我们发现广泛缺乏针对使用不安全的Rust的安全策略，并且参与者对使用不安全的Rust的安全风险估计不足。
> 
> 我们通过讨论这些发现并提出建议，为未来更安全地使用不安全的Rust做出总结。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/holtervennhoff](https://www.usenix.org/conference/usenixsecurity23/presentation/holtervennhoff)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-holtervennhoff.pdf](https://www.usenix.org/system/files/usenixsecurity23-holtervennhoff.pdf)
## Pushed by Accident: A Mixed-Methods Study on Strategies of Handling Secret Information in Source Code Repositories.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#pushed-by-accident-a-mixed-methods-study-on-strategies-of-handling-secret-information-in-source-code-repositories) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#pushed-by-accident-a-mixed-methods-study-on-strategies-of-handling-secret-information-in-source-code-repositories)**
### 作者
* Alex, CISPA Helmholtz Center for Information Security
* er Krause, CISPA Helmholtz Center for Information Security
* Jan H. Klemmer, Leibniz University Hannover
* Nicolas Huaman, Leibniz University Hannover
* Dominik Wermke, CISPA Helmholtz Center for Information Security
* Yasemin Acar, Paderborn University, George Washington University
* Sascha Fahl, CISPA Helmholtz Center for Information Security
### 摘要
> 版本控制系统（如Git）是现代软件开发中的关键工具。许多开发人员使用GitHub或GitLab等服务进行协作软件开发。许多软件项目都包含需要安全管理的代码秘密，如API密钥或密码。先前的研究和博客文章发现，开发人员在处理安全代码秘密管理时往往困惑，并意外地将代码秘密泄漏到公共Git存储库中。将代码秘密泄漏给公众可能会带来灾难性的后果，如滥用服务和系统，或使敏感用户数据暴露给攻击者。在一项混合方法研究中，我们调查了109名具有版本控制系统经验的开发人员。此外，我们还进行了14个深入的半结构化访谈，采访了曾经遭遇过秘密泄漏的开发人员。我们的参与者中有30.3%曾经遭遇过代码秘密泄漏。他们中的大多数人都面临着秘密泄漏预防和处理中的一些挑战。根据我们的调查结果，我们讨论了一些挑战，比如估计泄露秘密的风险，以及开发人员在修复和预防代码秘密泄露方面的需求，例如低采用要求。最后，我们对开发人员和源代码平台提供商提出了减少秘密泄漏风险的建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/krause](https://www.usenix.org/conference/usenixsecurity23/presentation/krause)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-krause.pdf](https://www.usenix.org/system/files/usenixsecurity23-krause.pdf)
## A Mixed-Methods Study of Security Practices of Smart Contract Developers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-mixed-methods-study-of-security-practices-of-smart-contract-developers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-mixed-methods-study-of-security-practices-of-smart-contract-developers)**
### 作者
* Tanusree Sharma, University of Illinois at Urbana Champaign
* Zhixuan Zhou, University of Illinois at Urbana Champaign
* Andrew Miller, University of Illinois at Urbana Champaign
* Yang Wang, University of Illinois at Urbana Champaign
### 摘要
> 智能合约是在区块链上运行的自动执行程序（例如以太坊）。尽管安全性是智能合约的一个关键问题，但智能合约开发人员如何处理安全性尚不清楚。为了填补这一研究空白，我们对智能合约开发人员进行了混合方法研究，包括对29名开发人员进行的访谈和代码审查任务，以及对171名有效受访者进行的在线调查。我们的研究结果显示了智能合约安全性认知和实践的各种情况，包括使用不同的工具和资源。总的来说，我们的大多数参与者在智能合约开发中并未将安全性作为首要考虑因素。此外，我们在代码审查任务中发现的安全漏洞识别率令人担忧（通常低于50%），无论参与者在智能合约开发方面的经验如何，对不同的漏洞都是如此。我们讨论了未来的教育和工具如何更好地支持开发人员确保智能合约的安全性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/sharma](https://www.usenix.org/conference/usenixsecurity23/presentation/sharma)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-sharma.pdf](https://www.usenix.org/system/files/usenixsecurity23-sharma.pdf)
## The Role of Professional Product Reviewers in Evaluating Security and Privacy.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-role-of-professional-product-reviewers-in-evaluating-security-and-privacy) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-role-of-professional-product-reviewers-in-evaluating-security-and-privacy)**
### 作者
* Wentao Guo, University of Maryland
* Jason Walter, University of Maryland
* Michelle L. Mazurek, University of Maryland
### 摘要
> 使用互联网连接设备的消费者往往面临安全和隐私漏洞，而他们缺乏时间或专业知识来评估这些漏洞。专业产品评审员能否帮助他们评估安全和隐私呢？我们对17位产品评审员进行了访谈，了解他们在安全和隐私方面的程序、动机和假设。我们发现，评审员有一些动机评估安全和隐私，但他们也面临相当多的压力和挑战，导致他们只考虑了有限一组相关标准和威胁模型。我们建议未来的工作要帮助产品评审员以符合他们的商业模式和动机的方式向消费者提供有用的建议。这包括开发易用的资源和工具，以及验证他们用于快速判断安全和隐私的启发式方法。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/guo-wentao](https://www.usenix.org/conference/usenixsecurity23/presentation/guo-wentao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-guo-wentao.pdf](https://www.usenix.org/system/files/usenixsecurity23-guo-wentao.pdf)
## Network Responses to Russia's Invasion of Ukraine in 2022: A Cautionary Tale for Internet Freedom.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#network-responses-to-russias-invasion-of-ukraine-in-2022-a-cautionary-tale-for-internet-freedom) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#network-responses-to-russias-invasion-of-ukraine-in-2022-a-cautionary-tale-for-internet-freedom)**
### 作者
* Reethika Ramesh, University of Michigan
* Ram Sundara Raman, University of Michigan
* Apurva Virkud, University of Michigan
* Alex, TU Braunschweig
* ra Dirksen, TU Braunschweig
* Armin Huremagic, University of Michigan
* David Fifield, unaffiliated
* Dirk Rodenburg, Psiphon
* Rod Hynes, Psiphon
* Doug Madory, Kentik
* Roya Ensafi, University of Michigan
### 摘要
> 2022年2月，俄罗斯入侵乌克兰后，遭到了一系列制裁和限制措施：俄罗斯对其公民的制裁，俄罗斯对国际社会的制裁，以及外国行为者对俄罗斯的制裁。有报道称，网络审查、地理阻断和对网络自由的影响现象大量增加。
> 
> 本文研究了在敌对行动升级之后的几周内发生的网络变化。这是研究人员和活动家们迅速行动的结果，从多个角度研究了这个问题。我们开发了GeoInspector，并进行了测量，以识别不同类型的地理阻断，并综合了来自九个独立数据源的数据，以了解和描述各种网络变化。入侵发生后，超过45%的俄罗斯政府域名被测试发现无法从俄罗斯和哈萨克斯坦以外的国家访问；相反，444个外国网站，包括新闻和教育域名，对俄罗斯用户进行了地理阻断。我们发现俄罗斯的审查力度显著增加，特别是针对新闻和社交媒体。我们发现了使用BGP撤回实施限制的证据，并量化了新的国内证书颁发机构的使用情况。最后，我们分析了绕过工具的数据，并调查了它们的使用和阻断情况。我们希望我们的发现能够展示出互联网分裂局势迅速变化的警示作用，并鼓励研究和努力保护互联网自由。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ramesh-network-responses](https://www.usenix.org/conference/usenixsecurity23/presentation/ramesh-network-responses)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ramesh-network-responses.pdf](https://www.usenix.org/system/files/usenixsecurity23-ramesh-network-responses.pdf)
## A Study of China's Censorship and Its Evasion Through the Lens of Online Gaming.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-study-of-chinas-censorship-and-its-evasion-through-the-lens-of-online-gaming) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-study-of-chinas-censorship-and-its-evasion-through-the-lens-of-online-gaming)**
### 作者
* Yuzhou Feng, Florida International University
* Ruyu Zhai, Hangzhou Dianzi University
* Radu Sion, Stony Brook University
* Bogdan Carbunar, Florida International University
### 摘要
> 在过去20年中，中国通过预防沉迷系统（APS）越来越限制未成年人使用在线游戏的访问。同时，通过不同的手段，例如中国的防火长城（GFW），它还限制了普通大众对国际互联网的访问。本文研究了这些限制对年轻在线游戏玩家以及他们的逃避努力的影响。我们通过调查（n = 2,415）和半结构化访谈（n = 35）结果揭示了已经常见的绕过APS的技术和APS的漏洞。我们得出的结论是，即使对非常年轻的在线游戏玩家，APS并没有按设计的方式起作用，并且可以作为明日成年人绕过审查的训练场所，通过熟悉和标准化一般的逃避技术以及对其危险的麻木。这些研究结果可以进一步告诉防止审查系统的开发人员他们潜在用户的认知和逃避策略，并帮助设计能够利用受审查群体广泛使用的服务和平台的工具。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/feng](https://www.usenix.org/conference/usenixsecurity23/presentation/feng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-feng.pdf](https://www.usenix.org/system/files/usenixsecurity23-feng.pdf)
## DeResistor: Toward Detection-Resistant Probing for Evasion of Internet Censorship.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#deresistor-toward-detection-resistant-probing-for-evasion-of-internet-censorship) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#deresistor-toward-detection-resistant-probing-for-evasion-of-internet-censorship)**
### 作者
* Abderrahmen Amich, University of Michigan, Dearborn
* Birhanu Eshete, University of Michigan, Dearborn
* Vinod Yegneswaran, SRI International
* Nguyen Phong Hoang, University of Chicago
### 摘要
> 互联网自由倡导者和审查者之间的军备竞赛催生了先进的封锁技术，并将重要的研究重点转向基于数据包操作的自动审查测量和逃避工具的开发。然而，我们观察到使用最先进的逃避工具对审查中间箱进行探测的过程很容易被审查者识别出，这需要具有检测弹性的探测技术。
> 
> 我们通过开发实时检测方法来验证我们的假设，该方法利用机器学习（ML）来检测流级别的数据包操作，并基于阈值随机游走（TRW）的算法进行IP级别的检测。然后，我们通过提出DeResistor系统，采取第一步措施来实现具有检测弹性的逃避审查，该系统为基于数据包操作的逃避审查提供了探测弹性探测的便利。DeResistor的目标是通过在正常用户驱动的网络活动中插入具有指导性的暂停，从而削弱审查者使用的检测逻辑。
> 
> 我们通过利用先进的逃避策略生成器Geneva来评估我们的技术，并对Geneva提供的11个模拟审查者进行验证，同时还在现实世界的审查者（例如：中国的防火墙（GFW），印度和哈萨克斯坦）中进行测试。从对抗的角度来看，我们提出的实时检测方法可以在仅检查两个探测流后快速检测出试图使用被操作的数据包探测审查中间箱的客户端。从防御角度来看，DeResistor对于屏蔽Geneva调试具有效果，同时使其缩小搜索空间以产生较不可检测的流量。重要的是，使用DeResistor生成的逃避审查策略能够从不同的视角对抗GFW（最高达98%），在印度和哈萨克斯坦则为100%。最后，我们讨论了检测对策和将我们的方法扩展到其他基于探测审查的工具的可行性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/amich](https://www.usenix.org/conference/usenixsecurity23/presentation/amich)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-amich.pdf](https://www.usenix.org/system/files/usenixsecurity23-amich.pdf)
## Timeless Timing Attacks and Preload Defenses in Tor's DNS Cache.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#timeless-timing-attacks-and-preload-defenses-in-tors-dns-cache) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#timeless-timing-attacks-and-preload-defenses-in-tors-dns-cache)**
### 作者
* Rasmus Dahlberg, Karlstad University
* Tobias Pulls, Karlstad University
### 摘要
> 我们展示了Tor的DNS缓存容易遭受一种无时序时间攻击，允许任何人在没有任何误报的情况下确定域名是否被缓存。这种攻击需要发送一个单独的TLS记录。可以重复这种攻击以确定一个域名何时不再被缓存，以泄漏插入时间。我们在Tor网络中的评估表明，在针对我们自己的域名进行了1200万次重复之后，没有发现缓存的域名被报告为未缓存，反之亦然。这将DNS在Tor中从一个不可靠的侧信道（使用传统的时间攻击和网络抖动）转变为完全可靠的方法。我们负责地披露了这种攻击，并提出了两种短期缓解措施。
> 
> 作为Tor中DNS缓存的针对所有类型的（无时序）时间攻击的长期防御措施，我们提出了重新设计的想法，该设计仅将一批允许被预加载的域名始终缓存到电路中。我们通过从两个出口对四个月的聚合统计数据进行测量（在与Tor Research Safety Board和我们大学的伦理审查过程中）来比较预加载DNS缓存与Tor当前解决方案的性能。评估的预加载列表是以下顶级列表的变体：Alexa、Cisco Umbrella和Tranco。我们的结果表明，四个月前的预加载列表可以通过调整来提供类似资源使用情况下的可比性能，或者在相对较小的内存使用和解析器负载增加时大幅提高共享缓存命中率（2-3倍），与100Mbit/s出口相比。我们得出结论，Tor当前的DNS缓存在大多数情况下更像是一种隐私威胁，因为大多数缓存的域名不太可能导致缓存命中，但仍可以被攻击者探测到。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/dahlberg](https://www.usenix.org/conference/usenixsecurity23/presentation/dahlberg)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-dahlberg.pdf](https://www.usenix.org/system/files/usenixsecurity23-dahlberg.pdf)
## How the Great Firewall of China Detects and Blocks Fully Encrypted Traffic.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#how-the-great-firewall-of-china-detects-and-blocks-fully-encrypted-traffic) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#how-the-great-firewall-of-china-detects-and-blocks-fully-encrypted-traffic)**
### 作者
* Mingshi Wu, GFW Report
* Jackson Sippe, University of Colorado Boulder
* Danesh Sivakumar, University of Maryland
* Jack Burg, University of Maryland
* Peter Anderson, Independent researcher
* Xiaokang Wang, V2Ray Project
* Kevin Bock, University of Maryland
* Amir Houmansadr, University of Massachusetts Amherst
* Dave Levin, University of Maryland
* Eric Wustrow, University of Colorado Boulder
### 摘要
> 一个绕过审查的基石是完全加密的协议，它加密有效载荷中的每个字节，试图“看起来像不存在”。2021年11月初，中国的防火墙（GFW）采用了一种新的审查技术，能够实时 passively 检测并随后封锁完全加密的流量。GFW的新审查能力影响了一大批流行的绕过审查协议，包括但不限于Shadowsocks、VMess和Obfs4。虽然中国长期以来一直积极探测此类协议，但这是纯粹被动检测的首次报告，引起了反审查社区的疑问，即如何可能进行检测。
> 
> 在本文中，我们测量和描述了GFW审查完全加密流量的新系统。我们发现，审查并没有直接定义什么是完全加密流量，而是应用粗略但高效的启发式规则，豁免不太可能是完全加密流量的流量，然后封锁其余的非豁免流量。这些启发式规则基于常见协议的指纹、比特位集合的比例，以及可打印ASCII字符的数量、比例和位置。我们的互联网扫描揭示了GFW检测的流量和IP地址。我们模拟了推断出的GFW检测算法在一个大学网络监听点上实时流量上的运行，评估了其全面性和误报率。我们展示了证据表明我们推断出的规则对于GFW实际使用的内容有很好的覆盖范围。我们估计，如果广泛应用，它可能会导致大约0.6%的正常互联网流量作为副作用被屏蔽。
> 
> 我们对GFW新审查机制的理解帮助我们得出了几个实际的绕过策略。我们负责地向不同反审查工具的开发人员披露了我们的发现和建议，帮助数百万用户成功规避这种新形式的封锁。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wu-mingshi](https://www.usenix.org/conference/usenixsecurity23/presentation/wu-mingshi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wu-mingshi.pdf](https://www.usenix.org/system/files/usenixsecurity23-wu-mingshi.pdf)
## A Data-free Backdoor Injection Approach in Neural Networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-data-free-backdoor-injection-approach-in-neural-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-data-free-backdoor-injection-approach-in-neural-networks)**
### 作者
* Peizhuo Lv, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Chang Yue, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Ruigang Liang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Yunfei Yang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Shengzhi Zhang, Department of Computer Science, Metropolitan College, Boston University, USA
* Hualong Ma, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Kai Chen, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China; Beijing Academy of Artificial Intelligence, China
### 摘要
> 近年来，对深度神经网络（DNN）进行背门攻击的研究得到了广泛关注。这种攻击使得背门模型在无恶意样本上表现良好，但在带有触发器的受控样本上恶意运行。现有的几乎所有背门攻击都需要访问原始的训练/测试数据集或与主要任务相关的数据，将背门注入目标模型，这在许多场景下是不现实的，例如私有训练数据。在本文中，我们提出了一种新颖的“免数据”背门注入方法。我们收集与主要任务无关的替代数据，并通过过滤冗余样本来减少其体积，以提高背门注入的效率。我们设计了一种新颖的损失函数，用于使用替代数据对原始模型进行微调，使其变成带有背门的模型，并优化微调过程以平衡背门注入和主要任务性能。我们在各种深度学习场景下进行了大量实验，包括图像分类、文本分类、表格分类、图像生成和多模态学习，使用了不同的模型，如卷积神经网络（CNNs）、自动编码器、Transformer模型、表格模型以及多模态DNNs。评估结果表明，我们的免数据背门注入方法能够高效地嵌入背门，攻击成功率接近100\%，而在主要任务上的性能下降是可以接受的。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lv](https://www.usenix.org/conference/usenixsecurity23/presentation/lv)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lv.pdf](https://www.usenix.org/system/files/usenixsecurity23-lv.pdf)
## Sparsity Brings Vulnerabilities: Exploring New Metrics in Backdoor Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#sparsity-brings-vulnerabilities-exploring-new-metrics-in-backdoor-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#sparsity-brings-vulnerabilities-exploring-new-metrics-in-backdoor-attacks)**
### 作者
* Jianwen Tian, NKLSTISS, Institute of Systems Engineering, Academy of Military Sciences, China
* Kefan Qiu, School of Cyberspace Science and Technology, Beijing Institute of Technology
* Debin Gao, Singapore Management University
* Zhi Wang, DISSec, College of Cyber Science, Nankai University
* Xiaohui Kuang, NKLSTISS, Institute of Systems Engineering, Academy of Military Sciences, China
* Gang Zhao, NKLSTISS, Institute of Systems Engineering, Academy of Military Sciences, China
### 摘要
> 现在，使用基于人工智能的检测器跟上恶意软件快速迭代的步伐已引起了极大关注。然而，大多数基于人工智能的恶意软件检测器使用大量稀疏子空间的特征来描述应用程序，这给模型带来了显著的漏洞。为了利用与稀疏性相关的漏洞，我们提出了一种干净标签的背门攻击，包括基于差异度量的候选人选择和基于变异比率的触发器构建。%相对于以前的策略，该攻击表现出最强的攻击性能。
> 
> 我们在不同的数据集上验证了所提出的背门攻击，包括一个Windows PE数据集，一个包含数值和布尔特征值的Android数据集和一个PDF数据集。实验结果表明，即使只有最少数量（类集的0.01%）的带有水印的良性软件，该攻击也可以将带有水印的恶意软件的准确性降低到接近0%。还考虑了问题空间约束，并在数据不可知的情况下进行了实验，以及在数据和模型不可知的情况下进行了实验，证明了在不同数据集以及深度神经网络和传统分类器之间的可转移性。该攻击在上述场景下被验证为始终强大。此外，我们测试了八种现有的防御方法，它们的效果远未达到预期。我们展示了原因并提出了一种子空间压缩策略来增强模型的鲁棒性，这也使之前失败的防御的一部分变得有效。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/tian](https://www.usenix.org/conference/usenixsecurity23/presentation/tian)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-tian.pdf](https://www.usenix.org/system/files/usenixsecurity23-tian.pdf)
## Aliasing Backdoor Attacks on Pre-trained Models.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#aliasing-backdoor-attacks-on-pre-trained-models) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#aliasing-backdoor-attacks-on-pre-trained-models)**
### 作者
* Cheng'an Wei, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Yeonjoon Lee, Hanyang University, Ansan, Republic of Korea
* Kai Chen, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Guozhu Meng, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Peizhuo Lv, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
### 摘要
> 预训练深度学习模型被广泛用于在有限数据和短时间内训练准确模型。为了降低计算成本，预训练神经网络通常采用子采样操作。然而，最近的研究表明，这些子采样操作可能导致混叠问题，从而导致泛化问题。尽管有这些认识，但目前缺乏关于神经网络混叠和安全威胁（如对抗攻击和后门攻击）之间关系的研究，这些攻击在受害者不知情的情况下篡改模型预测。在本文中，我们提出了混叠后门，这是一种低成本且无需数据的攻击，威胁主流的预训练模型，并传播给从这些模型微调的所有学生模型。关键思想是在网络的步进层中创建混叠错误，并将良性输入篡改为目标中间表示。为了评估攻击效果，我们在图像分类、人脸识别和语音识别任务上进行了实验。结果表明，我们的方法可以有效攻击主流模型，成功率超过95%。基于子采样引起的混叠错误，我们的研究揭示了现代神经网络体系结构中广泛使用的步进层的基本安全弱点。据我们所知，这是第一项利用步进层发起后门攻击的研究。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wei-chengan](https://www.usenix.org/conference/usenixsecurity23/presentation/wei-chengan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wei-chengan.pdf](https://www.usenix.org/system/files/usenixsecurity23-wei-chengan.pdf)
## ASSET: Robust Backdoor Data Detection Across a Multiplicity of Deep Learning Paradigms.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#asset-robust-backdoor-data-detection-across-a-multiplicity-of-deep-learning-paradigms) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#asset-robust-backdoor-data-detection-across-a-multiplicity-of-deep-learning-paradigms)**
### 作者
* Minzhou Pan, Virginia Tech
* Yi Zeng, Virginia Tech
* Lingjuan Lyu, Sony AI
* Xue Lin, Northeastern University
* Ruoxi Jia, Virginia Tech
### 摘要
> 传统上，后门数据检测在端到端监督学习（SL）环境下进行研究。然而，近年来，由于对标记数据需求较少，自监督学习（SSL）和迁移学习（TL）的采用日益增多。在这些新环境中，成功的后门攻击也被证明存在。然而，我们对现有检测方法在各种学习环境下的适用性缺乏深入理解。通过评估56种攻击设置，我们发现大多数现有的检测方法在不同攻击和污染比例下的性能差异显著，并且在最先进的无标签后门攻击中，这些方法都无法成功检测，该攻击只使用难以察觉的噪声来操作少量训练数据的特征而不改变标签。此外，现有方法在应用于SSL和TL时要么变得不适用，要么性能大幅下降。我们提出了一种新的检测方法，称为主动分离-通过偏移（ASSET），它在后门样本和干净样本之间积极引导不同的模型行为以促进它们的分离。我们还提供了自适应选择要移除的可疑点数量的步骤。在端到端SL设置下，ASSET在防御性能在不同攻击和污染比例下的一致性方面优于现有方法；特别是它是唯一能够检测最先进的无标签攻击的方法。此外，ASSET在SSL和TL中的平均检测率分别比最佳现有方法提高了69.3%和33.2%，因此为这些新兴的深度学习环境提供了首个实用的后门防御方法。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/pan](https://www.usenix.org/conference/usenixsecurity23/presentation/pan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-pan.pdf](https://www.usenix.org/system/files/usenixsecurity23-pan.pdf)
## VILLAIN: Backdoor Attacks Against Vertical Split Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#villain-backdoor-attacks-against-vertical-split-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#villain-backdoor-attacks-against-vertical-split-learning)**
### 作者
* Yijie Bai, Zhejiang University
* Yanjiao Chen, Zhejiang University
* Hanlei Zhang, Zhejing University
* Wenyuan Xu, Zhejing University
* Haiqin Weng, Ant Group
* Dou Goodman, Ant Group
### 摘要
> 竖直分割学习是一种针对具有垂直分割数据的参与者的联邦学习的新范式。在本文中，我们首次尝试探索恶意参与者在竖直分割学习中进行后门攻击的可能性。与传统的联邦学习不同，竖直分割学习为后门攻击提出了新的挑战，其中最突出的是对训练数据标签和服务器模型的访问权限不足。为了应对这些挑战，我们提出了VILLAIN，一种具有有效的标签推断和数据污染策略的后门攻击框架。VILLAIN能够实现对攻击者目标标签样本的高推断准确性。此外，VILLAIN通过设计一个隐秘的附加触发器和引入后门增强策略，增强了后门攻击的威力，以对服务器模型产生更大的影响。我们针对6个数据集进行了广泛的评估，使用了全面的竖直分割学习模型和聚合方法，验证了VILLAIN的有效性。同时还证明了VILLAIN能够抵御流行的隐私推断防御、后门检测或移除防御和自适应防御。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bai](https://www.usenix.org/conference/usenixsecurity23/presentation/bai)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-bai.pdf](https://www.usenix.org/system/files/usenixsecurity23-bai.pdf)
## ARI: Attestation of Real-time Mission Execution Integrity.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#ari-attestation-of-real-time-mission-execution-integrity) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#ari-attestation-of-real-time-mission-execution-integrity)**
### 作者
* Jinwen Wang, Washington University in St. Louis
* Yujie Wang, Washington University in St. Louis
* Ao Li, Washington University in St. Louis
* Yang Xiao, University of Kentucky
* Ruide Zhang, Virginia Polytechnic Institute and State University
* Wenjing Lou, Virginia Polytechnic Institute and State University
* Y. Thomas Hou, Virginia Polytechnic Institute and State University
* Ning Zhang, Washington University in St. Louis
### 摘要
> 随着自主安全关键的物理网络系统（CPS）在我们的日常生活中的普及，它们的安全性变得越来越重要。远程认证是一种强大的机制，可以实现远程验证系统完整性。虽然最近的发展使得有效地验证物联网操作成为可能，但是构建在实时物理控制循环之上并独立执行任务的自主系统面临着新的独特挑战。
> 
> 在本文中，我们提出了一个新的安全性属性，即实时任务执行完整性（RMEI），以提供正确和及时执行任务的证明。虽然这是一个有吸引力的属性，但对实时自主系统的测量可能会产生过高的开销。为了解决这个挑战，我们提出了基于策略的隔离验证来在测量细节水平和运行时开销之间进行权衡。为了进一步减少对实时响应性的影响，我们开发了多种技术来提高性能，包括定制软件插装和通过重新执行进行时序恢复。我们实现了ARI的原型，并在五个CPS平台上评估了其性能。还进行了一项涉及21名具有不同技能水平的开发人员的用户研究，以了解我们解决方案的可用性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-jinwen](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-jinwen)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-jinwen.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-jinwen.pdf)
## Design of Access Control Mechanisms in Systems-on-Chip with Formal Integrity Guarantees.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#design-of-access-control-mechanisms-in-systems-on-chip-with-formal-integrity-guarantees) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#design-of-access-control-mechanisms-in-systems-on-chip-with-formal-integrity-guarantees)**
### 作者
* Dino Mehmedagić, Rheinland-Pfälzische Technische Universität (RPTU) Kaiserslautern-Landau, Germany
* Mohammad Rahmani Fadiheh, Rheinland-Pfälzische Technische Universität (RPTU) Kaiserslautern-Landau, Germany
* Johannes Müller, Rheinland-Pfälzische Technische Universität (RPTU) Kaiserslautern-Landau, Germany
* Anna Lena Duque Antón, Rheinland-Pfälzische Technische Universität (RPTU) Kaiserslautern-Landau, Germany
* Dominik Stoffel, Rheinland-Pfälzische Technische Universität (RPTU) Kaiserslautern-Landau, Germany
* Wolfgang Kunz, Rheinland-Pfälzische Technische Universität (RPTU) Kaiserslautern-Landau, Germany
### 摘要
> 许多SoC使用系统级硬件访问控制机制，确保安全关键操作不受电路中不可信组件的篡改。虽然有许多设计和验证技术用于开发访问控制系统，但对此类系统的新漏洞不断发现表明需要一种详尽的验证方法来发现和消除此类弱点。本文提出了UPEC-OI，一种形式化验证方法，详尽地覆盖了SoC级别访问控制系统的完整性漏洞。该方法基于迭代地检查2安全间隔属性，其公式不需要明确指定可能的攻击场景。UPEC-OI返回的反例可以为访问控制硬件的设计人员提供有关可能攻击渠道的宝贵信息，使其能够进行精确定位修复。我们提出了一种验证驱动的开发方法，它在形式上保证了所开发SoC的访问控制机制在完整性方面的安全性。我们在OpenTitan的Earl Grey SoC的案例研究中评估了所提出的方法，其中我们添加了一个SoC级别的访问控制机制，并模拟了威胁。发现UPEC-OI对于保证机制的完整性至关重要，并证明对于实际大小的SoCs是可行的。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/mehmedagic](https://www.usenix.org/conference/usenixsecurity23/presentation/mehmedagic)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-mehmedagic.pdf](https://www.usenix.org/system/files/usenixsecurity23-mehmedagic.pdf)
## HashTag: Hash-based Integrity Protection for Tagged Architectures.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#hashtag-hash-based-integrity-protection-for-tagged-architectures) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#hashtag-hash-based-integrity-protection-for-tagged-architectures)**
### 作者
* Lukas Lamster, Graz University of Technology
* Martin Unterguggenberger, Graz University of Technology
* David Schrammel, Graz University of Technology
* Stefan Mangard, Graz University of Technology
### 摘要
> 现代计算系统依赖纠错码来确保DRAM数据的完整性。线性校验和可以快速检测和纠正特定的错误模式。然而，它们对于分布在多个数据字和芯片上的复杂错误的保护能力不足。根据编码和错误模式的不同，线性码可能无法检测到错误，甚至会误纠正，从而导致静默数据损坏。在这项工作中，我们展示了基于低延迟哈希函数的紧凑纠错码如何能够进行强有力的概率性错误检测和纠正，同时方便ECC位重用。我们提出的设计大大降低了未检测错误的预期率，无论底层错误模式如何。通过将我们的编码大小调整到所需的完整性保护水平，我们能够释放出本来需要用于存储ECC数据的位。我们展示了我们的设计如何通过在商品ECC DRAM中重复使用释放出的位数，实现了标记存储体系结构（如CHERI、ARM MTE和SPARC ADI）的高效实现。因此，我们加固了系统，防止因DRAM故障导致数据损坏，同时又不引入额外的内存访问，实现了内存标记。我们对允许在高速缓存线粒度上进行内存标记并保持错误检测和纠正能力的方案进行了系统分析。我们评估了不同用例下的完整性保护与标记，并展示了我们可以在每个高速缓存线上存储32位额外标记，是实现ARM MTE所需量的两倍，而不会显著影响错误纠正能力。我们还展示了如何在保持单错误纠正的同时提供多达51位的可用空间。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lamster](https://www.usenix.org/conference/usenixsecurity23/presentation/lamster)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lamster.pdf](https://www.usenix.org/system/files/usenixsecurity23-lamster.pdf)
## XCheck: Verifying Integrity of 3D Printed Patient-Specific Devices via Computing Tomography.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#xcheck-verifying-integrity-of-3d-printed-patient-specific-devices-via-computing-tomography) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#xcheck-verifying-integrity-of-3d-printed-patient-specific-devices-via-computing-tomography)**
### 作者
* Zhiyuan Yu, Washington University in St. Louis
* Yuanhaur Chang, Washington University in St. Louis
* Shixuan Zhai, Washington University in St. Louis
* Nicholas Deily, Washington University in St. Louis
* Tao Ju, Washington University in St. Louis
* XiaoFeng Wang, Indiana University Bloomington
* Uday Jammalamadaka, Rice University
* Ning Zhang, Washington University in St. Louis
### 摘要
> 3D打印技术正在给医学领域带来革命性的变革，应用范围从助听器到器官再生。随着我们的社会越来越依赖这项技术来挽救生命，安全性成为一个日益关注的问题。然而，现有的侧信道防御方法可能需要计算机安全领域的专业知识才能完全理解攻击的影响。
> 
> 为了弥合这个差距，我们提出了XCheck，它利用医学影像来验证打印的个体化设备（PSD）的完整性。XCheck采用防御深度的方法，直接将打印设备的计算机断层扫描（CT扫描）与其原始设计进行对比。XCheck利用基于体素的方法构建多层次的防御，包括3D几何验证和多元材料分析。为了进一步提高可用性，XCheck还提供了可调节的可视化方案，允许从业人员根据不同应用需求对打印对象进行检查，并具有不同的容错阈值。我们通过评估47个代表不同医学应用的PSD来验证系统的有效性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yu-zhiyuan-xcheck](https://www.usenix.org/conference/usenixsecurity23/presentation/yu-zhiyuan-xcheck)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yu-zhiyuan-xcheck.pdf](https://www.usenix.org/system/files/usenixsecurity23-yu-zhiyuan-xcheck.pdf)
## Demystifying Pointer Authentication on Apple M1.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#demystifying-pointer-authentication-on-apple-m1) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#demystifying-pointer-authentication-on-apple-m1)**
### 作者
* Zechao Cai, Zhejiang University and ZJU-Hangzhou Global Scientific and Technological Innovation Center
* Jiaxun Zhu, Zhejiang University and ZJU-Hangzhou Global Scientific and Technological Innovation Center
* Wenbo Shen, Zhejiang University and ZJU-Hangzhou Global Scientific and Technological Innovation Center
* Yutian Yang, Zhejiang University and ZJU-Hangzhou Global Scientific and Technological Innovation Center
* Rui Chang, Zhejiang University and ZJU-Hangzhou Global Scientific and Technological Innovation Center
* Yu Wang, Hangzhou Cyberserval Co., Ltd.
* Jinku Li, Xidian University
* Kui Ren, Zhejiang University and ZJU-Hangzhou Global Scientific and Technological Innovation Center
### 摘要
> 指针认证（PA）是ARMv8.3引入的用于保护指针完整性的技术。尽管ARM规范允许供应商实现和定制PA，但苹果在其硬件上对其进行了定制，以保护搭载M系列芯片的iPhone和Mac。自问世以来，苹果的PA一直被认为是有效防止指针破坏的方法。然而，其详细信息尚未公开披露。
> 
> 为了揭示苹果的PA定制，本文进行了一项深入的反向工程研究，重点研究了M1芯片上苹果PA的硬件实现和使用。我们开发了一个反向工程框架，并提出了新的技术来揭示和确认我们的新发现。
> 
> 我们的研究揭示了苹果PA在各个领域采用了多种基于硬件的分散器来对抗指针伪造攻击，这是研究人员以外的人之前不知道的。我们进一步发现了XNU内核（iOS和macOS使用的内核）包含了九种类型的修改器，用于对指针进行签名和认证，并基于苹果PA硬件进行自定义密钥管理。根据我们对苹果PA的深入理解，我们对XNU内核中基于PA的控制流完整性和数据流完整性进行了安全分析，发现了四个攻击面。苹果已经在安全更新中修复了这些问题并分配了一个新的CVE编号。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cai-zechao](https://www.usenix.org/conference/usenixsecurity23/presentation/cai-zechao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cai-zechao.pdf](https://www.usenix.org/system/files/usenixsecurity23-cai-zechao.pdf)
## DDRace: Finding Concurrency UAF Vulnerabilities in Linux Drivers with Directed Fuzzing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#ddrace-finding-concurrency-uaf-vulnerabilities-in-linux-drivers-with-directed-fuzzing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#ddrace-finding-concurrency-uaf-vulnerabilities-in-linux-drivers-with-directed-fuzzing)**
### 作者
* Ming Yuan, Tsinghua University
* Bodong Zhao, Tsinghua University
* Penghui Li, The Chinese University of Hong Kong
* Jiashuo Liang, Peking University
* Xinhui Han, Peking University
* Xiapu Luo, The Hong Kong Polytechnic University
* Chao Zhang, Tsinghua University and Zhongguancun Lab
### 摘要
> 并发使用后释放（UAF）漏洞占据了Linux驱动程序中UAF漏洞的很大一部分。已经提出了许多解决方案来查找并发错误或UAF漏洞，但很少有直接应用于高效查找并发UAF漏洞的解决方案。在本文中，我们提出了第一个并发导向灰盒模糊解决方案DDRace，以在Linux驱动程序中高效发现并发UAF漏洞。首先，我们将候选使用后释放位置识别为目标位置，并提取相关并发元素来减少定向模糊测试的探索空间。其次，我们设计了一种新颖的漏洞相关距离度量和交错优先级方案，以指导模糊测试工具更好地探索UAF漏洞和线程交错。最后，为了使测试用例具有可重现性，我们设计了一种自适应的内核状态迁移方案，以辅助连续模糊测试。我们已经实现了DDRace的原型，并在上游Linux驱动程序上进行了评估。结果显示，DDRace在发现并发使用后释放漏洞上非常有效。它发现了4个未知漏洞和8个已知漏洞，比其他最先进的解决方案更有效。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yuan-ming](https://www.usenix.org/conference/usenixsecurity23/presentation/yuan-ming)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yuan-ming.pdf](https://www.usenix.org/system/files/usenixsecurity23-yuan-ming.pdf)
## Automata-Guided Control-Flow-Sensitive Fuzz Driver Generation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#automata-guided-control-flow-sensitive-fuzz-driver-generation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#automata-guided-control-flow-sensitive-fuzz-driver-generation)**
### 作者
* Cen Zhang, Nanyang Technological University, Continental-NTU Corporate Lab
* Yuekang Li, Nanyang Technological University, Continental-NTU Corporate Lab
* Hao Zhou, The Hong Kong Polytechnic University
* Xiaohan Zhang, Xidian University
* Yaowen Zheng, Nanyang Technological University, Continental-NTU Corporate Lab
* Xian Zhan, Southern University of Science and Technology; The Hong Kong Polytechnic University
* Xiaofei Xie, Singapore Management University
* Xiapu Luo, The Hong Kong Polytechnic University
* Xinghua Li, Xidian University
* Yang Liu, Nanyang Technological University, Continental-NTU Corporate Lab
* Sheikh Mahbub Habib, Continental AG, Germany
### 摘要
> 模糊驱动程序对于模糊库API至关重要。然而，手动组合模糊驱动程序很困难且耗时。因此，已经提出了多种自动生成模糊驱动程序的方法。尽管这些方法可以从目标库的消费者程序中学习正确的API使用方式，但仍然存在三个挑战阻碍了生成的模糊驱动程序的质量：1）如何学习并利用API使用中的控制依赖关系；2）如何处理学习到的API使用中的噪声，特别是对于复杂的真实消费者程序；3）如何组织模糊驱动程序中独立的API使用集合，以更好地与模糊工具协调。
> 
> 为了解决这些挑战，我们提出了RUBICK，一种自动驱动的控制流敏感的模糊驱动程序生成技术。RUBICK具有三个关键特点：1）它将API使用（包括API数据和控制依赖关系）建模为确定性有限自动机；2）它利用主动自动机学习算法提炼学到的API使用方式；3）它合成一个单一的自动机引导的模糊驱动程序，为模糊工具提供调度接口以测试在模糊过程中的独立的API使用集合。在实验中，由RUBICK生成的模糊驱动程序相比于FUZZGEN生成的模糊驱动程序，边覆盖率平均增加了50.42%，相比于来自OSS-Fuzz或人工专家手动编写的模糊驱动程序，边覆盖率增加了44.58%。通过从大规模开源项目中学习，RUBICK已为11个热门Java项目生成了模糊驱动程序，其中两个已合并到OSS-Fuzz中。迄今为止，使用这些模糊驱动程序发现了199个缺陷，包括四个CVE，这些缺陷可能会影响具有数千万下载量的热门PC和Android软件。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-cen](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-cen)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-cen.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-cen.pdf)
## Hoedur: Embedded Firmware Fuzzing using Multi-Stream Inputs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#hoedur-embedded-firmware-fuzzing-using-multi-stream-inputs) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#hoedur-embedded-firmware-fuzzing-using-multi-stream-inputs)**
### 作者
* Tobias Scharnowski, CISPA Helmholtz Center for Information Security
* Simon Wörner, CISPA Helmholtz Center for Information Security
* Felix Buchmann, Ruhr University Bochum
* Nils Bars, CISPA Helmholtz Center for Information Security
* Moritz Schloegel, CISPA Helmholtz Center for Information Security
* Thorsten Holz, CISPA Helmholtz Center for Information Security
### 摘要
> 嵌入式系统及其多样化的互连组件构成了我们数字基础设施的核心。尽管它们的重要性，但以可扩展的方式分析其安全性一直是困难而难以实现的。最近的固件重新托管工作为嵌入式系统带来了可扩展的动态分析，从而使自动化漏洞评估的模糊化成为可能。由于这些工作侧重于建模设备行为而不是模糊化，因此它们以一种临时的方式与现成的模糊化器集成。它们将传统的平坦二进制模糊化输入重新解释为一系列硬件响应。实际上，这使得模糊化器面临一个脆弱、不透明且难以有效变异的输入布局。
> 
> 我们的工作基于这样一个认识：尽管固件仿真最近取得了显著的进展，但输入空间以一种低效的方式呈现给了模糊化器。我们提出了一种基于多流输入的固件感知模糊化集成的新方法。我们重新组织之前的平坦、顺序和不透明的固件模糊化输入，将其分为多个严格类型化和凝聚的流。这使得我们的模糊化器HOEDUR能够执行类型感知的变异并保持其进展。它还使得固件模糊化能够使用最先进的变异技术。总体而言，我们发现这些技术显著提高了模糊化的效果。我们的评估结果表明，HOEDUR可以达到最先进固件模糊化器覆盖率的5倍，发现其他模糊化器无法找到的漏洞，并且以高达550倍的速度发现已知漏洞。总共，HOEDUR发现了23个以前未知的漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/scharnowski](https://www.usenix.org/conference/usenixsecurity23/presentation/scharnowski)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-scharnowski.pdf](https://www.usenix.org/system/files/usenixsecurity23-scharnowski.pdf)
## Forming Faster Firmware Fuzzers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#forming-faster-firmware-fuzzers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#forming-faster-firmware-fuzzers)**
### 作者
* Lukas Seidel, Qwiet AI
* Dominik Maier, TU Berlin
* Marius Muench, VU Amsterdam and University of Birmingham
### 摘要
> 评估嵌入式系统固件安全性的一个最新趋势是重新托管，即在虚拟化环境中运行固件，而不是在原始硬件平台上运行。固件重新托管的一个重要用例是模糊测试，以动态发现安全漏洞。
> 
> 然而，最先进的实现存在高模拟器引起的开销，导致执行速度低于最佳水平。我们提出了一种接近本机重新托管的方法，而不是模拟，即在共享指令集系列的高性能系统上将嵌入式固件作为Linux用户空间进程运行。我们使用SAFIREFUZZ实现了这种方法，SAFIREFUZZ是一种用于ARM Cortex-M固件的吞吐量优化的重新托管和模糊测试框架。SAFIREFUZZ接受整体的仅二进制固件映像，并使用高级模拟（HLE）和动态二进制重写在性能更强大的硬件上运行它们，开销较低。通过复制HALucinator的实验，这是一种基于HLE的固件二进制重新托管系统的最新技术，我们展示了SAFIREFUZZ在24小时模糊测试中平均可以提供690倍的吞吐量增加，同时覆盖30%以上更多的基本块。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/seidel](https://www.usenix.org/conference/usenixsecurity23/presentation/seidel)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-seidel.pdf](https://www.usenix.org/system/files/usenixsecurity23-seidel.pdf)
## ReUSB: Replay-Guided USB Driver Fuzzing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#reusb-replay-guided-usb-driver-fuzzing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#reusb-replay-guided-usb-driver-fuzzing)**
### 作者
* Jisoo Jang, Yonsei University
* Minsuk Kang, Yonsei University
* Dokyung Song, Yonsei University
### 摘要
> 设备驱动程序中的漏洞不断威胁着操作系统内核的安全性。由于USB驱动程序的广泛使用和攻击向量的多样性，它们尤其令人担忧。最近的研究表明，模糊测试已被证明在查找USB驱动程序中的漏洞方面是有效的。现有的模糊测试器已经发现了许多USB驱动程序中的漏洞，然而，发现的代码路径和漏洞数量遗憾地停滞不前。一个关键的障碍是USB驱动程序的有状态性，也就是说，只有在给定特定序列的输入时，它们的大部分代码才能被覆盖到。
> 
> 我们观察到，在USB驱动程序的信任边界处定义的记录和重放直接有助于克服这个障碍；通过重现记录的执行，可以达到深度状态，并结合模糊测试，可以找到更深层次的代码路径和漏洞。我们提出了一种名为ReUSB的USB驱动程序模糊测试工具，它通过二维的记录和重放指导模糊测试，以增强其模糊测试效果。我们解决了两个基本挑战：忠实地重放USB驱动程序的执行，以及放大重放在模糊测试中的效果。为此，我们首先引入了一组语言级别的构造，这些构造在忠实描述并发的二维跟踪方面是必不可少的，但在最先进的内核模糊测试工具中缺失，并提出了可以以高保真度重现记录的驱动程序执行的时间、并发和上下文感知重放技术。然后，我们通过引导模糊测试沿着记录的执行重放进行指导，同时通过重放检查点减轻重放引起的减速和副作用。我们实施了ReUSB，并使用三个不同类别的十个广泛使用的USB驱动程序的二维跟踪进行了评估。结果表明，ReUSB可以显著提升USB驱动程序的模糊测试效果；与强基线相比，它提高了这些驱动程序的代码覆盖率达76％，并找到了15个以前未知的错误。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/jang](https://www.usenix.org/conference/usenixsecurity23/presentation/jang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-jang.pdf](https://www.usenix.org/system/files/usenixsecurity23-jang.pdf)
## Exorcising "Wraith": Protecting LiDAR-based Object Detector in Automated Driving System from Appearing Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#exorcising-wraith-protecting-lidar-based-object-detector-in-automated-driving-system-from-appearing-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#exorcising-wraith-protecting-lidar-based-object-detector-in-automated-driving-system-from-appearing-attacks)**
### 作者
* Qifan Xiao, Fudan University
* Xudong Pan, Fudan University
* Yifan Lu, Fudan University
* Mi Zhang, Fudan University
* Jiarun Dai, Fudan University
* Min Yang, Fudan University
### 摘要
> 自动驾驶系统依赖于3D物体探测器从LiDAR点云中识别可能的障碍物。然而，最近的研究表明，对手可以通过少量虚假点（即出现攻击）在预测结果中伪造不存在的车辆。通过去除统计异常值，现有的防御措施仅适用于特定攻击或被预定义的启发式规则所偏置。为了实现更全面的缓解，我们首先系统地检查了先前的出现攻击机制：它们的共同弱点在于制造虚假障碍物时（i）与真实障碍物相比在局部部分上有明显差异，以及（ii）违反了深度和点密度之间的物理关系。
> 
> 在本文中，我们提出了一种新颖的即插即用防御模块，该模块与训练好的基于LiDAR的物体探测器并行工作，用于消除大部分局部部分具有低物体性的伪造障碍物，即属于真实物体的程度。我们的模块的核心是一个局部物体性预测器，它显式地结合深度信息来建模深度和点密度之间的关系，并预测障碍物的每个局部部分的物体性分数。大量实验表明，我们提出的防御措施在大多数情况下能够消除至少70%的通过三种已知的出现攻击伪造的车辆，而对于最佳的先前防御措施，只能消除不到30%的伪造车辆。同时，在相同条件下，与现有的防御措施相比，我们的防御措施对于车辆的AP/精确度产生较低的开销。此外，我们在百度Apollo开源系统的基于仿真的闭环控制驾驶测试中验证了我们提出的防御措施的有效性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xiao-qifan](https://www.usenix.org/conference/usenixsecurity23/presentation/xiao-qifan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xiao-qifan.pdf](https://www.usenix.org/system/files/usenixsecurity23-xiao-qifan.pdf)
## Discovering Adversarial Driving Maneuvers against Autonomous Vehicles.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#discovering-adversarial-driving-maneuvers-against-autonomous-vehicles) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#discovering-adversarial-driving-maneuvers-against-autonomous-vehicles)**
### 作者
* Ruoyu Song, Purdue University
* Muslum Ozgur Ozmen, Purdue University
* Hyungsub Kim, Purdue University
* Raymond Muller, Purdue University
* Z. Berkay Celik, Purdue University
* Antonio Bianchi, Purdue University
### 摘要
> 在2021年销售的车辆中，超过33%配备了集成的自动驾驶（AD）系统。虽然已经研究了许多针对这些系统的对抗性机器学习攻击，但它们都要求对手执行特定的（通常是不切实际的）动作，例如仔细修改交通标志或投射恶意图像，如果被发现可能引起怀疑。在本文中，我们提出了一种名为Acero的鲁棒性指导框架，以发现针对自动驾驶车辆（AVs）的对抗性机动攻击。这些机动看起来对外界观察者来说是无害的，但会迫使受害车辆违反AVs的安全规则，造成物理后果，例如与行人和其他车辆发生碰撞。为了最佳地发现对抗性驾驶机动，我们对AD系统制定了七项安全要求，并利用这个规范来指导我们的搜索。我们还对保证对手不会置身于危险中或违反交通法规的七个物理约束进行了规范化。然后，Acero利用轨迹相似度指标将成功的攻击聚类成独特的群组，使AD开发人员能够分析攻击的根本原因并加以缓解。我们在CARLA模拟器上评估了Acero在两个开源AD软件openpilot和Autoware上的性能。Acero发现了对openpilot的219次攻击和对Autoware的122次攻击。其中73.3％的攻击导致受害者与第三方车辆、行人或静态物体发生碰撞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/song](https://www.usenix.org/conference/usenixsecurity23/presentation/song)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-song.pdf](https://www.usenix.org/system/files/usenixsecurity23-song.pdf)
## Understand Users' Privacy Perception and Decision of V2X Communication in Connected Autonomous Vehicles.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#understand-users-privacy-perception-and-decision-of-v2x-communication-in-connected-autonomous-vehicles) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#understand-users-privacy-perception-and-decision-of-v2x-communication-in-connected-autonomous-vehicles)**
### 作者
* Zekun Cai, The Pennsylvania State University
* Aiping Xiong, The Pennsylvania State University
### 摘要
> 连接的自动驾驶车辆（CAVs）提供了改善道路安全和提高交通效率的机会。车辆对一切（V2X）通信使得CAVs能够与可能影响或可能受到车辆影响的任何实体进行沟通。V2X在CAVs中的实施与共享和接收各种数据密不可分。然而，公众对这种无处不在的数据交换并不一定知晓或者不了解其影响。我们进行了一项在线研究（N = 595），调查了驾驶员对四种V2X应用场景的隐私观念和决策。参与者在对数据共享的V2X场景中，认为有更多的好处但更少的风险，这些场景中数据收集对驾驶至关重要。他们在这些情况下也表现出更愿意分享数据的态度。此外，我们发现参与者对隐私风险的认识（启动）以及他们在驾驶辅助和连接功能上的经验影响了他们的数据分享决策。定性数据证实了好处，尤其是安全性，首先至关重要，表明了隐私和安全之间的权衡。此外，关于CAV数据收集和使用的误解和新期望等因素调节了参与者的隐私决策。我们讨论了研究结果对CAV隐私设计和开发的启示。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cai-zekun](https://www.usenix.org/conference/usenixsecurity23/presentation/cai-zekun)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cai-zekun.pdf](https://www.usenix.org/system/files/usenixsecurity23-cai-zekun.pdf)
## You Can't See Me: Physical Removal Attacks on LiDAR-based Autonomous Vehicles Driving Frameworks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#you-cant-see-me-physical-removal-attacks-on-lidar-based-autonomous-vehicles-driving-frameworks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#you-cant-see-me-physical-removal-attacks-on-lidar-based-autonomous-vehicles-driving-frameworks)**
### 作者
* Yulong Cao, University of Michigan
* S. Hrushikesh Bhupathiraju, University of Florida
* Pirouz Naghavi, University of Florida
* Takeshi Sugawara, The University of Electro-Communications
* Z. Morley Mao, University of Michigan
* Sara Rampazzi, University of Florida
### 摘要
> 自动驾驶汽车（AVs）日益使用基于激光雷达（LiDAR）的目标检测系统来感知道路上的其他车辆和行人。虽然现有的针对基于LiDAR的自动驾驶架构的攻击主要专注于降低AV目标检测模型的置信度分数以诱发障碍物误检，但我们的研究发现如何利用基于激光的欺骗技术，在传感器级别上有选择地去除真实障碍物的LiDAR点云数据，然后将其用作AV感知的输入。对关键的LiDAR信息进行切除会导致自动驾驶障碍物检测器无法识别和定位障碍物，进而导致AV做出危险的自动驾驶决策。在本文中，我们提出了一种对人眼不可见的方法，通过利用LiDAR传感器数据与自动驾驶框架集成的固有自动转换和过滤过程，隐藏物体并欺骗自动驾驶汽车的障碍物检测器。我们将这样的攻击称为物理去除攻击（PRA），并展示了对三种流行的AV障碍物检测器（Apollo，Autoware，PointPillars）的攻击效果，我们实现了45度的攻击能力。我们评估了该攻击对三个融合模型（Frustum-ConvNet，AVOD和Integrated-Semantic Level Fusion）的影响，并使用LGSVL，一个工业级仿真器来评估该攻击对驾驶决策的后果。在我们的移动车辆场景中，我们成功率达到92.7％，移除目标障碍物云点的90％。最后，我们展示了该攻击成功地克服了两种常见的防范欺骗和物体隐藏攻击的防御方法，并讨论了两种增强的防御策略来减轻我们的攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cao](https://www.usenix.org/conference/usenixsecurity23/presentation/cao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cao.pdf](https://www.usenix.org/system/files/usenixsecurity23-cao.pdf)
## PatchVerif: Discovering Faulty Patches in Robotic Vehicles.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#patchverif-discovering-faulty-patches-in-robotic-vehicles) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#patchverif-discovering-faulty-patches-in-robotic-vehicles)**
### 作者
* Hyungsub Kim, Purdue University
* Muslum Ozgur Ozmen, Purdue University
* Z. Berkay Celik, Purdue University
* Antonio Bianchi, Purdue University
* Dongyan Xu, Purdue University
### 摘要
> 现代软件经常进行补丁升级以修复错误和安全漏洞。在机器人车辆（RV）中，补丁非常重要，因为安全和安全性漏洞可能导致严重的物理损坏。然而，现有的自动化方法很难识别RV中的错误补丁，因为它们无法系统地确定补丁引入的行为修改，这会影响RV与物理环境的交互。
> 
> 本文介绍了一种自动化的补丁分析框架PATCHVERIF。PATCHVERIF的目标是评估给定的补丁是否在修补的RV控制软件中引入了错误。为实现这一目标，PATCHVERIF使用静态和动态分析的组合，衡量所分析的补丁对RV物理状态的影响。具体而言，PATCHVERIF使用专门的输入变异算法生成最大化原始代码和修补代码之间行为差异（在物理空间中）的RV输入。通过收集有关补丁引入的行为修改的信息，PATCHVERIF使用支持向量机（SVM）来推断补丁是否存在错误。
> 
> 我们在两个流行的RV控制软件（ArduPilot和PX4）上评估了PATCHVERIF，并成功识别出故障补丁，平均准确率和召回率分别为97.9％和92.1％。此外，PATCHVERIF发现了115个以前未知的错误，其中103个已被确认，其中51个已经修复。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kim-hyungsub](https://www.usenix.org/conference/usenixsecurity23/presentation/kim-hyungsub)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kim-hyungsub.pdf](https://www.usenix.org/system/files/usenixsecurity23-kim-hyungsub.pdf)
## Fast IDentity Online with Anonymous Credentials (FIDO-AC).
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fast-identity-online-with-anonymous-credentials-fido-ac) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fast-identity-online-with-anonymous-credentials-fido-ac)**
### 作者
* Wei-Zhu Yeoh, CISPA Helmholtz Center for Information Security
* Michal Kepkowski, Macquarie University
* Gunnar Heide, CISPA Helmholtz Center for Information Security
* Dali Kaafar, Macquarie University
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security
### 摘要
> 网络身份验证是当今互联网和数字世界中至关重要的组成部分。FIDO2协议使用户能够利用常见设备在移动和桌面环境中轻松进行在线服务验证，采用基于密码学和生物验证的无密码验证方法。然而，身份验证过程与用户属性之间几乎没有任何联系。具体来说，FIDO协议没有指定可以用于通用地将可信属性与FIDO身份验证过程结合并允许用户随意披露这些属性的方法。实质上，需要属性验证的应用程序（例如司机许可证的年龄或过期日期等）仍然依赖于不满足数据最小化原则且不允许用户检查披露数据的特殊方法。最近的一个主要例子是澳大利亚主要电信提供商之一Singtel Optus的数据泄露，其中泄露了非常个人和敏感的数据（例如护照号码）。本文引入了一种名为FIDO-AC的新型框架，将FIDO2身份验证过程与用户的数字和不可共享身份结合起来。我们展示了如何使用现成的FIDO令牌和任何电子身份证件（例如ICAO生物识别护照）来实例化这个框架。我们通过评估FIDO-AC系统的原型实现，证明了我们方法的实用性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yeoh](https://www.usenix.org/conference/usenixsecurity23/presentation/yeoh)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yeoh.pdf](https://www.usenix.org/system/files/usenixsecurity23-yeoh.pdf)
## How to Bind Anonymous Credentials to Humans.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#how-to-bind-anonymous-credentials-to-humans) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#how-to-bind-anonymous-credentials-to-humans)**
### 作者
* Julia Hesse, IBM Research Europe - Zurich
* Nitin Singh, IBM Research India - Bangalore
* Aless, IBM Research Europe - Zurich
* ro Sorniotti, IBM Research Europe - Zurich
### 摘要
> 数字和纸质认证是在现实世界中用于验证终端用户的两种主要机制。当在个人面前执行数字凭证验证时（例如，在COVID全球大流行的高峰期所要求的身份验证），通常会同时使用这两种机制：验证者会检查政府签发的身份证以匹配身份证上的照片与持有者本人，然后检查数字凭证以确定其中的个人详细信息是否与身份证上的信息相符，并发现持有者的附加属性。这种模式非常普遍，很可能在可预见的未来仍然存在。然而，它提出了一个有趣的问题：如果数字凭证具有保护隐私的特性（例如基于BBS+和CL签名），但持有者仍然被强制展示身份证或护照以验证所呈现的凭证确实是发给持有者的，那么部署保护隐私数字凭证的意义何在？本文通过重新定义身份证应显示的内容并强制使其在数字交互中进行最小但强制性的参与，解决了这个问题。我们的方法允许验证者成功验证持有者并确定其是否是数字凭证的合法所有者。同时，我们保持了最佳的隐私保证。我们设计了该方案，在通用可组合性（UC）框架下对其安全性进行了形式化定义和分析，并实现了身份证组件，显示其运行时间在认证属性数量不超过200ms的范围内。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/hesse](https://www.usenix.org/conference/usenixsecurity23/presentation/hesse)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-hesse.pdf](https://www.usenix.org/system/files/usenixsecurity23-hesse.pdf)
## Inducing Authentication Failures to Bypass Credit Card PINs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#inducing-authentication-failures-to-bypass-credit-card-pins) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#inducing-authentication-failures-to-bypass-credit-card-pins)**
### 作者
* David Basin, ETH Zurich
* Patrick Schaller, ETH Zurich
* Jorge Toro-Pozo, ETH Zurich
### 摘要
> 对于使用EMV标准的信用卡交易，交易信息的完整性是由信用卡进行密码保护的。支付终端通过使用RSA签名进行完整性检查，并且是EMV的离线数据认证机制的一部分。发卡方通过使用密钥的MAC进行在线完整性检查。人们会认为，无论是哪种机制的失败都将导致交易失败，但事实并非如此，因为离线认证的失败并不总是导致交易被拒绝。因此，在线未受密钥MAC保护的交易数据的完整性无法得到保证。
> 
> 我们展示了如何利用此缺失的完整性保护绕过高额Mastercard交易的PIN验证。作为概念验证，我们已经开发了一个Android应用程序，可以修改未受保护的卡片数据，包括与持卡人验证相关的数据。使用我们的应用程序，我们成功将真实的终端欺骗为将PIN验证降级为无持卡人验证或（纸质）签名验证，支持高达500瑞士法郎的交易。我们已向供应商披露了我们的发现，并建议拒绝任何离线数据认证失败的交易。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/basin](https://www.usenix.org/conference/usenixsecurity23/presentation/basin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-basin.pdf](https://www.usenix.org/system/files/usenixsecurity23-basin.pdf)
## An Empirical Study & Evaluation of Modern CAPTCHAs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#an-empirical-study-evaluation-of-modern-captchas) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#an-empirical-study-evaluation-of-modern-captchas)**
### 作者
* Andrew Searles, University of California, Irvine
* Yoshimichi Nakatsuka, ETH Zürich
* Ercan Ozturk, University of California, Irvine
* Andrew Paverd, Microsoft
* Gene Tsudik, University of California, Irvine
* Ai Enkoji, Lawrence Livermore National Laboratory
### 摘要
> 近20年来，CAPTCHAS广泛用作保护机器人的手段。随着使用范围的扩大，击败或绕过CAPTCHAS的技术也不断改进。同时，CAPTCHAS在复杂性和多样性方面也不断演变，对机器人和人类的解决都变得越来越困难。鉴于这场长期进行且仍在进行的对抗，研究正常用户解决现代CAPTCHAS的时间以及他们对其的感知显得非常重要。
> 
> 在这项工作中，我们通过手动检查热门网站和用户研究来评估用户对未修改的当前部署的CAPTCHAS的解决表现和感知。我们通过这些方式获得了数据，包括1,400名参与者共同解决了14,000个CAPTCHAS。结果显示出最受欢迎的CAPTCHA类型之间存在显著差异：令人惊讶的是，解决时间和用户感知并不总是相关的。我们进行了一项比较研究，以调查实验环境的影响——具体而言，直接解决CAPTCHAS与将其作为更自然任务（如账号创建）的一部分来解决之间的差异。尽管有几个潜在的混淆因素，我们的结果表明实验环境可能对这个任务产生影响，并且必须在未来的CAPTCHA研究中加以考虑。最后，我们通过分析开始但未完成任务的参与者，调查了CAPTCHA导致的用户任务放弃情况。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/searles](https://www.usenix.org/conference/usenixsecurity23/presentation/searles)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-searles.pdf](https://www.usenix.org/system/files/usenixsecurity23-searles.pdf)
## Account Verification on Social Media: User Perceptions and Paid Enrollment.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#account-verification-on-social-media-user-perceptions-and-paid-enrollment) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#account-verification-on-social-media-user-perceptions-and-paid-enrollment)**
### 作者
* Madelyne Xiao, Princeton University
* Mona Wang, Princeton University
* Anunay Kulshrestha, Princeton University
* Jonathan Mayer, Princeton University
### 摘要
> 我们调查用户对社交媒体账户验证的感知，将这些感知与平台实践进行比较，并研究在差距出现时会产生什么后果。我们利用Twitter账户验证流程的最新变化作为一项自然实验，验证指标的含义和类型迅速而显著地变化。该项目由两个部分组成：用户调查和Twitter账户验证的测量。
> 
> 在调查研究中，我们对美国代表性样本（n = 299）进行调查，了解他们对社交媒体账户验证要求的了解程度，包括一般要求和特定平台的要求。我们还询问他们对在线信息来源和数字素养的经验。超过一半的受访者对Twitter的蓝色勾号账户验证标准存在误解，超过80%的受访者对Twitter的新金色和灰色勾号验证指标存在误解。调查回应的分析表明，年龄较大或数字素养较低的人可能更容易误解Twitter的账户验证。
> 
> 在测量研究中，我们从2022年10月的英语推文中随机抽样1500万条数据。我们在2022年11月，也就是Twitter账户验证变化之前，获取与这些账户关联的账户验证状态，并在2022年1月再次收集账户验证状态。得到的纵向数据集包含285万个账户，使我们能够描述在Twitter变化之后获得和失去验证的账户特征。我们发现，在Twitter的变化后，发布保守派政治内容、对埃隆·马斯克持积极态度并推广加密货币的账户在获得蓝色勾号验证方面存在不成比例的情况。
> 
> 最后，我们提出改进账户验证指标和流程的建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xiao-madelyne](https://www.usenix.org/conference/usenixsecurity23/presentation/xiao-madelyne)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xiao-madelyne.pdf](https://www.usenix.org/system/files/usenixsecurity23-xiao-madelyne.pdf)
## User Awareness and Behaviors Concerning Encrypted DNS Settings in Web Browsers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#user-awareness-and-behaviors-concerning-encrypted-dns-settings-in-web-browsers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#user-awareness-and-behaviors-concerning-encrypted-dns-settings-in-web-browsers)**
### 作者
* Alex, Carnegie Mellon University and University of Chicago
* ra Nisenoff, Carnegie Mellon University and University of Chicago
* Ranya Sharma, University of Chicago
* Nick Feamster, University of Chicago
### 摘要
> 最近对域名系统(DNS)进行加密的发展，导致主要浏览器和操作系统供应商部署了加密DNS功能，通常默认启用各种配置和设置。在许多情况下，默认的加密DNS设置对性能和隐私产生影响；例如，Firefox的默认DNS设置将用户的所有DNS查询发送到Cloudflare，可能引入新的隐私漏洞。在本文中，我们确认大多数用户对这些发展不知情，包括新技术的推出、默认设置的更改以及自定义加密DNS配置以在隐私和性能之间平衡用户偏好的能力。我们的研究结果对浏览器和操作系统中加密DNS功能的界面设计者有一些重要的启示，帮助提高用户对这些设置的意识，并确保用户保留能够做出选择以平衡DNS隐私和性能的能力。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/nisenoff-awareness](https://www.usenix.org/conference/usenixsecurity23/presentation/nisenoff-awareness)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-nisenoff-awareness.pdf](https://www.usenix.org/system/files/usenixsecurity23-nisenoff-awareness.pdf)
## Two Sides of the Shield: Understanding Protective DNS adoption factors.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#two-sides-of-the-shield-understanding-protective-dns-adoption-factors) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#two-sides-of-the-shield-understanding-protective-dns-adoption-factors)**
### 作者
* Elsa Rodríguez, Delft University of Technology
* Radu Anghel, Delft University of Technology
* Simon Parkin, Delft University of Technology
* Michel van Eeten, Delft University of Technology
* Carlos Gañán, Delft University of Technology
### 摘要
> 保护性域名系统（PDNS）能够过滤出导致危害资源的DNS请求。目前，各国政府和行业参与者正在积极推广PDNS——一些全球公共DNS提供商提供这一服务，一些政府赞助的DNS解析器也提供该服务。然而，终端用户是否真的有兴趣采用它尚未得到研究。我们发现，整体上PDNS的采用率很低，尽管在一些国家，超过20%的DNS查询是由这些类型的DNS解析器回答的。我们进行了四个人类主体研究来了解终端用户采用PDNS的因素：一项涵盖295名消费者的调查；24次针对互联网服务提供商客户的访谈，这些客户在遭受恶意软件感染后获得了免费的PDNS；12次与公共和私营企业专业人员的访谈，以及9次与DNS技术专家的访谈。我们发现，如果PDNS由用户自己的ISP运营，用户更有可能使用PDNS，而不是由政府运营。对于企业来说，我们发现全球威胁情报的获取、分层安全策略以及遵守法规是PDNS采纳的主要因素。DNS技术专家们则强调了PDNS采纳的更广泛挑战，如透明度和集中化。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/rodriguez](https://www.usenix.org/conference/usenixsecurity23/presentation/rodriguez)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-rodriguez.pdf](https://www.usenix.org/system/files/usenixsecurity23-rodriguez.pdf)
## The Maginot Line: Attacking the Boundary of DNS Caching Protection.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-maginot-line-attacking-the-boundary-of-dns-caching-protection) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-maginot-line-attacking-the-boundary-of-dns-caching-protection)**
### 作者
* Xiang Li, Tsinghua University
* Chaoyi Lu, Tsinghua University
* Baojun Liu, Tsinghua University
* Qifan Zhang, University of California, Irvine
* Zhou Li, University of California, Irvine
* Haixin Duan, Tsinghua University, QI-ANXIN Technology Research Institute, and Zhongguancun Laboratory
* Qi Li, Tsinghua University and Zhongguancun Laboratory
### 摘要
> 本文报告了MaginotDNS，这是一种针对同时充当转发器和递归解析器（称为CDNS）的DNS服务器的强大缓存污染攻击。该攻击通过利用自1990年代以来DNS安全的基石之一，即区域验证算法的漏洞实现，并影响包括BIND和Microsoft DNS在内的多个流行DNS软件的不同版本。通过现场测试，我们发现这种攻击非常有效，允许攻击者接管整个DNS区域，甚至包括顶级域名（例如.com和.net）。通过大规模测量研究，我们还确认CDNS在真实网络中的广泛使用（我们探测到的公开DNS服务器中高达41.8%），并发现至少35.5%的CDNS易受MaginotDNS攻击。通过与互联网服务提供商的访谈，我们展示了多种CDNS使用案例和真实世界中的攻击情况。我们已向DNS软件供应商报告了所有发现的漏洞，并得到了他们的确认。已分配了3个CVE编号，有2个供应商修复了他们的软件。我们的研究引起了人们对不同DNS软件和服务器模式（即递归解析器和转发器）中安全检查逻辑实现的不一致性的关注，并呼吁软件供应商进行标准化和协议的制定。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-xiang](https://www.usenix.org/conference/usenixsecurity23/presentation/li-xiang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-xiang.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-xiang.pdf)
## Fourteen Years in the Life: A Root Server's Perspective on DNS Resolver Security.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fourteen-years-in-the-life-a-root-servers-perspective-on-dns-resolver-security) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fourteen-years-in-the-life-a-root-servers-perspective-on-dns-resolver-security)**
### 作者
* Alden Hilton, Sandia National Laboratories
* Casey Deccio, Brigham Young University
* Jacob Davis, Sandia National Laboratories
### 摘要
> 我们考虑了域名系统（DNS）安全和隐私领域的演变情况，使用在2008年至2021年期间在A-root收集的数据。我们考虑了部署安全和隐私机制的问题，包括源端口随机化、TXID随机化、DNSSEC和QNAME最小化等。我们发现实现新安全实践的普遍采用是一个缓慢而持续的过程。特别值得注意的是，我们发现大量的解析器几乎没有任何我们考虑的安全机制，即使在2021年仍然如此。具体而言，在2021年，超过4%的分析解析器没有受到源端口随机化、DNSSEC验证、DNS cookies或0x20编码的保护。令人鼓舞的是，我们发现具有安全实践的解析器的流量量要显著高于其他解析器的流量量。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/hilton](https://www.usenix.org/conference/usenixsecurity23/presentation/hilton)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-hilton.pdf](https://www.usenix.org/system/files/usenixsecurity23-hilton.pdf)
## NRDelegationAttack: Complexity DDoS attack on DNS Recursive Resolvers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#nrdelegationattack-complexity-ddos-attack-on-dns-recursive-resolvers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#nrdelegationattack-complexity-ddos-attack-on-dns-recursive-resolvers)**
### 作者
* Yehuda Afek, Tel-Aviv University
* Anat Bremler-Barr, Tel-Aviv University
* Shani Stajnrod, Reichman University
### 摘要
> 恶意行为者进行分布式拒绝服务（DDoS）攻击时，对消耗大量资源且提供弹药的请求感兴趣。我们提出了一种严重的复杂性攻击DNS解析器的方法，只需对一个DNS解析器进行一次恶意查询即可显著增加其CPU负载。即使只有少数几个并发查询，也可能导致资源耗尽并导致合法客户端无法使用其服务。这种攻击与最近的DDoS攻击DNS服务器不同，后者使用通信放大攻击，即单个查询在DNS服务器之间生成大量的消息交换。
> 
> 这里描述的攻击涉及恶意客户端的请求发送到一个合作的恶意授权服务器，该服务器反过来生成一个精心构造的引荐响应发送回（受害者）解析器。请求的链式反应继续，导致查询的委派。最终将解析器定向到一个不响应DNS查询的服务器上。这种交互引发了一长串缓存和内存访问，从而大幅增加目标解析器的CPU负载。因此，我们将其命名为非响应式委派攻击，或NRDelegationAttack。
> 
> 我们证明了三个主要解析器实现（BIND9、Unbound和Knot）受到NRDelegationAttack的影响，并对基于BIND9的解析器的放大系数进行了详细分析。作为此工作的结果，这些解析器实现发出了与NRDelegationAttack相关的三个常见漏洞和公开暴露（CVE）。我们还对16个开放解析器进行了最小程度的测试，确认该攻击也会影响它们。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/afek](https://www.usenix.org/conference/usenixsecurity23/presentation/afek)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-afek.pdf](https://www.usenix.org/system/files/usenixsecurity23-afek.pdf)
## Inductive Graph Unlearning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#inductive-graph-unlearning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#inductive-graph-unlearning)**
### 作者
* Cheng-Long Wang, King Abdullah University of Science and Technology and SDAIA-KAUST Center of Excellence in Data Science and Artificial Intelligence
* Mengdi Huai, Iowa State University
* Di Wang, King Abdullah University of Science and Technology, Computational Bioscience Research Center, and SDAIA-KAUST Center of Excellence in Data Science and Artificial Intelligence
### 摘要
> 作为在机器学习中实施“被遗忘权”的方式之一，机器遗忘旨在完全删除要删除的样本的贡献和信息，而不影响其他样本的贡献。最近，提出了许多机器遗忘的框架，其中大多数集中在图像和文本数据上。为了将机器遗忘扩展到图数据，提出了GraphEraser。然而，一个关键问题是，GraphEraser是专门为传导图设置而设计的，其中图是静态的，在训练期间测试节点的属性和边是可见的。它不适用于归纳设置，其中图可能是动态的，并且测试图信息在事先是不可见的。这种归纳能力对于具有不断变化的图像（如社交媒体和交易网络）的生产机器学习系统至关重要。为了填补这一空白，我们提出了基于导向的归纳图遗忘框架（GUIDE）。GUIDE由三个组件组成：带有公平性和平衡性的导向图划分、高效的子图修复和基于相似性的聚合。在经验上，我们在几个归纳基准和不断变化的交易图上评估了我们的方法。总体而言，GUIDE可以在归纳图学习任务上高效地实现，无论是在计算还是结构信息上的图划分成本都很低。代码请参考：https://github.com/Happy2Git/GUIDE。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-cheng-long](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-cheng-long)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-cheng-long.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-cheng-long.pdf)
## GAP: Differentially Private Graph Neural Networks with Aggregation Perturbation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#gap-differentially-private-graph-neural-networks-with-aggregation-perturbation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#gap-differentially-private-graph-neural-networks-with-aggregation-perturbation)**
### 作者
* Sina Sajadmanesh, Idiap Research Institute and EPFL
* Ali Shahin Shamsabadi, Alan Turing Institute
* Aurélien Bellet, Inria
* Daniel Gatica-Perez, Idiap Research Institute and EPFL
### 摘要
> 在本文中，我们研究了学习具有差分隐私（DP）的图神经网络（GNN）的问题。我们提出了一种基于聚合扰动（GAP）的新型差分隐私GNN，该方法通过向GNN的聚合函数中添加随机噪声，以统计上模糊单个边的存在（边级隐私）或单个节点及其相邻边的存在（节点级隐私）。基于私有学习的特定情况，GAP的新架构由三个独立模块组成：（i）编码器模块，在该模块中我们学习了不依赖于边信息的私有节点嵌入；（ii）聚合模块，在该模块中我们基于图结构计算了带有噪声的聚合节点嵌入；（iii）分类模块，在该模块中我们使用私有聚合进行节点分类的神经网络进行训练，而无需进一步查询图边。与之前的方法相比，GAP的主要优势在于它可以从多跳邻域聚合中受益，并且除了训练的隐私预算之外，在推理过程中还能够保证边级和节点级的差分隐私，而不需要额外的开销。我们使用Rényi差分隐私分析了GAP的形式化隐私保证，并在三个真实世界图数据集上进行了实证实验。我们证明了GAP在准确性-隐私权衡方面比最先进的DP-GNN方法和朴素的基于多层感知器（MLP）的基线方法要好得多。我们的代码可以在https://github.com/sisaman/GAP上公开获取。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/sajadmanesh](https://www.usenix.org/conference/usenixsecurity23/presentation/sajadmanesh)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-sajadmanesh.pdf](https://www.usenix.org/system/files/usenixsecurity23-sajadmanesh.pdf)
## PrivGraph: Differentially Private Graph Data Publication by Exploiting Community Information.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#privgraph-differentially-private-graph-data-publication-by-exploiting-community-information) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#privgraph-differentially-private-graph-data-publication-by-exploiting-community-information)**
### 作者
* Quan Yuan, Zhejiang University
* Zhikun Zhang, Stanford University and CISPA Helmholtz Center for Information Security
* Linkang Du, Zhejiang University
* Min Chen, CISPA Helmholtz Center for Information Security
* Peng Cheng, Zhejiang University
* Mingyang Sun, Zhejiang University
### 摘要
> 图数据广泛应用于各种应用领域，然而在没有保护的情况下分析图数据容易导致隐私泄露风险。为了减轻隐私风险，我们采用标准的差分隐私技术来发布一个合成图。然而，现有的差分隐私图合成方法要么通过直接扰动邻接矩阵引入过多的噪声，要么在图编码过程中造成显著的信息损失。本文提出了一种有效的图合成算法PrivGraph，通过利用社区信息。具体而言，PrivGraph差分隐私地将私有图划分为社区，提取社区内和社区间的信息，并从提取的图信息中重构图。我们在六个实际图数据集和七个常用图度量指标上验证了PrivGraph的有效性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yuan-quan](https://www.usenix.org/conference/usenixsecurity23/presentation/yuan-quan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yuan-quan.pdf](https://www.usenix.org/system/files/usenixsecurity23-yuan-quan.pdf)
## On the Security Risks of Knowledge Graph Reasoning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#on-the-security-risks-of-knowledge-graph-reasoning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#on-the-security-risks-of-knowledge-graph-reasoning)**
### 作者
* Zhaohan Xi, Pennsylvania State University
* Tianyu Du, Pennsylvania State University
* Changjiang Li, Pennsylvania State University
* Ren Pang, Pennsylvania State University
* Shouling Ji, Zhejiang University
* Xiapu Luo, The Hong Kong Polytechnic University
* Xusheng Xiao, Arizona State University
* Fenglong Ma, Pennsylvania State University
* Ting Wang, Pennsylvania State University
### 摘要
> 知识图谱推理（Knowledge graph reasoning, KGR）是一项重要的人工智能任务，可以在大型知识图谱上回答复杂的逻辑查询，涉及各种应用（例如网络威胁猎杀）。然而，尽管KGR的流行度日益增长，但其潜在的安全风险尚未得到广泛探讨，这是令人担忧的，因为此类能力在安全关键领域的使用越来越多。
> 
> 本研究代表了填补这一巨大差距的坚实初步步骤。我们将对KGR的安全威胁根据对手的目标、知识和攻击向量进行了系统化整理。此外，我们提出了一种新型攻击——ROAR，它实例化了各种此类威胁。通过在代表性用例（例如医疗决策支持、网络威胁猎杀和常识推理）中进行实证评估，我们证明ROAR具有很高的效果，可以误导KGR为目标查询建议预定义答案，对非目标查询的影响可忽略不计。最后，我们探讨了对抗ROAR的潜在对策，包括过滤潜在的中毒知识和通过对抗性增强查询进行训练，这引发了几个有前景的研究方向。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xi](https://www.usenix.org/conference/usenixsecurity23/presentation/xi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xi.pdf](https://www.usenix.org/system/files/usenixsecurity23-xi.pdf)
## The Case for Learned Provenance Graph Storage Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-case-for-learned-provenance-graph-storage-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-case-for-learned-provenance-graph-storage-systems)**
### 作者
* Hailun Ding, Rutgers University
* Juan Zhai, Rutgers University
* Dong Deng, Rutgers University
* Shiqing Ma, Rutgers University
### 摘要
> 网络攻击越来越频繁和复杂，调查这些攻击变得更具挑战性。溯源图是支持取证分析的主要数据源。由于系统复杂性和攻击持续时间长，溯源图可能非常庞大，高效存储它们仍然是一个具有挑战性的问题。现有的方法通常使用关系数据库或图数据库来存储溯源图。这些解决方案存在存储开销高和查询效率低的问题。最近，研究人员利用深度神经网络(DNNs)在存储系统设计中取得了有希望的结果。我们观察到DNNs可以将给定的输入嵌入为上下文感知的数值向量表示，这些表示紧凑而支持并行查询操作。在本文中，我们提出了将DNN学习作为溯源图存储系统以实现存储和查询效率的方法。我们还提出了利用领域知识减少溯源数据冗余和建立具有索引的快速查询处理的新设计。我们构建了一个名为LEONARD的原型系统，并对12个数据集进行了评估。与关系数据库Quickstep和图数据库Neo4j相比，LEONARD的空间开销减少了最多25.90倍，并且查询执行速度提高了高达99.6%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ding-hailun-provenance](https://www.usenix.org/conference/usenixsecurity23/presentation/ding-hailun-provenance)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ding-hailun-provenance.pdf](https://www.usenix.org/system/files/usenixsecurity23-ding-hailun-provenance.pdf)
## A Large Scale Study of the Ethereum Arbitrage Ecosystem.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-large-scale-study-of-the-ethereum-arbitrage-ecosystem) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-large-scale-study-of-the-ethereum-arbitrage-ecosystem)**
### 作者
* Robert McLaughlin, University of California, Santa Barbara
* Christopher Kruegel, University of California, Santa Barbara
* Giovanni Vigna, University of California, Santa Barbara
### 摘要
> 以太坊区块链迅速成为一个由去中心化交易所(Dexs)推动的复杂金融生态系统的中心。这些交易所形成了一个多样化的资本市场，任何人都可以将一种类型的代币与另一种代币进行交换。套利交易是自由资本市场上一种正常且预期的现象，确实，几项最近的研究已经在去中心化交易所上识别了这些交易。
> 
> 不幸的是，现有的研究在我们对整个系统的理解方面存在重大的知识空白，这阻碍了对套利的安全性、稳定性和经济影响的研究。为了解决这个问题，我们在一个28个月的时期内进行了两个大规模的测量。首先，我们设计了一种新颖的套利识别策略，能够分析比以前更多的Dex应用程序。这揭示了380万次套利交易，总利润达到3.21亿美元。其次，我们设计了一种新颖的套利机会检测系统，这是第一个支持大规模现代复杂价格模型的系统。该系统发现了40亿个套利机会，每周可以获得395个以太币的利润(约相当于50万美元，在撰写本文时)。我们观察到两个关键的洞察力，证明了这些测量结果的有用性：(1)收入支付给矿工的比例不断增加，这威胁到共识的稳定性，(2)套利机会有时会持续几个区块，这意味着价格预言机操纵攻击可能比预期的更少成本。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/mclaughlin](https://www.usenix.org/conference/usenixsecurity23/presentation/mclaughlin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-mclaughlin.pdf](https://www.usenix.org/system/files/usenixsecurity23-mclaughlin.pdf)
## ACon2: Adaptive Conformal Consensus for Provable Blockchain Oracles.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#acon2-adaptive-conformal-consensus-for-provable-blockchain-oracles) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#acon2-adaptive-conformal-consensus-for-provable-blockchain-oracles)**
### 作者
* Sangdon Park, Georgia Institute of Technology
* Osbert Bastani, University of Pennsylvania
* Taesoo Kim, Georgia Institute of Technology
### 摘要
> 区块链与智能合约是分布式账本系统，通过仅允许智能合约的确定性操作，在分布式节点之间实现块状态一致性。然而，智能合约的功能是通过与随机离链数据进行交互来实现的，这反过来打开了破坏块状态一致性的可能性。为了解决这个问题，我们使用了一个预言机智能合约来提供单一一致的外部数据来源；然而，这同时引入了一个单点故障，被称为预言机问题。为了解决预言机问题，我们提出了一种自适应一致性共识（ACon2）算法，通过近期在线不确定性量化学习的进展，从多个预言机合约中推导出一致性数据的共识集。有趣的是，这个共识集在分布转移和拜占庭对手下提供了所需的正确性保证。我们通过两个价格数据集和一个以太坊案例研究来展示所提出算法的有效性。特别是，所提出算法的Solidity实现显示了所提出算法的潜在实用性，暗示了在线机器学习算法在解决区块链安全问题方面的适用性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/park](https://www.usenix.org/conference/usenixsecurity23/presentation/park)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-park.pdf](https://www.usenix.org/system/files/usenixsecurity23-park.pdf)
## Snapping Snap Sync: Practical Attacks on Go Ethereum Synchronising Nodes.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#snapping-snap-sync-practical-attacks-on-go-ethereum-synchronising-nodes) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#snapping-snap-sync-practical-attacks-on-go-ethereum-synchronising-nodes)**
### 作者
* Massimiliano Taverna, ETH Zurich
* Kenneth G. Paterson, ETH Zurich
### 摘要
> Go Ethereum是目前使用最广泛的以太坊客户端。它最初实现了以太坊的工作量证明共识机制，然后在2022年切换到权益证明。我们分析了Go Ethereum在工作量证明下的链同步实现，即新节点加入网络时从其节点获取区块链的过程。我们提出了三种新型攻击，允许敌对控制网络算力的对手引导同步节点偏离共识，最终在对手控制的版本的区块链上运行。我们成功地在测试网络中实施了这些攻击。我们描述了这些攻击如何被利用来实现财务利润，包括通过链下交易和任意代码执行。值得注意的是，我们攻击中最便宜的攻击方法可以使用部分GPU对以太经典和EthereumPoW发动，这两个以太坊分叉项目仍然依赖于工作量证明共识机制，它们的市值总计约为30亿美元。我们的攻击也适用于2017年至2022年期间的合并前以太坊主网。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/taverna](https://www.usenix.org/conference/usenixsecurity23/presentation/taverna)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-taverna.pdf](https://www.usenix.org/system/files/usenixsecurity23-taverna.pdf)
## Token Spammers, Rug Pulls, and Sniper Bots: An Analysis of the Ecosystem of Tokens in Ethereum and in the Binance Smart Chain (BNB).
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#token-spammers-rug-pulls-and-sniper-bots-an-analysis-of-the-ecosystem-of-tokens-in-ethereum-and-in-the-binance-smart-chain-bnb) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#token-spammers-rug-pulls-and-sniper-bots-an-analysis-of-the-ecosystem-of-tokens-in-ethereum-and-in-the-binance-smart-chain-bnb)**
### 作者
* Federico Cernera, Sapienza University of Rome
* Massimo La Morgia, Sapienza University of Rome
* Aless, Sapienza University of Rome
* ro Mei, Sapienza University of Rome
* Francesco Sassi, Sapienza University of Rome
### 摘要
> 在本研究中，我们对BNB智能链和以太坊区块链从创建至2022年3月进行了纵向分析。我们研究了代币和流动性池的生态系统，突出了两个区块链之间的类比和差异。我们发现大约60%的代币仅活跃了不到一天。此外，我们发现1%的地址创建了异常数量的代币（在20%至25%之间）。我们发现这些代币被用作一种特殊类型的流动性抽水，我们称之为一天抽水。我们 quantizezg 这种操作在两个区块链上的存在，并发现它在BNB智能链上的普遍性。我们估计一天抽水的利润达2.4亿美元。最后，我们介绍了狙击机器人，这是一种参与这些活动的新型交易机器人，并且我们检测到它们在抽水操作中的存在并 quantizezg 了它们的活动。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cernera](https://www.usenix.org/conference/usenixsecurity23/presentation/cernera)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cernera.pdf](https://www.usenix.org/system/files/usenixsecurity23-cernera.pdf)
## Automated Inference on Financial Security of Ethereum Smart Contracts.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#automated-inference-on-financial-security-of-ethereum-smart-contracts) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#automated-inference-on-financial-security-of-ethereum-smart-contracts)**
### 作者
* Wansen Wang, University of Science and Technology of China
* Wenchao Huang, University of Science and Technology of China
* Zhaoyi Meng, Anhui University
* Yan Xiong, University of Science and Technology of China
* Fuyou Miao, University of Science and Technology of China
* Xianjin Fang, Anhui University of Science and Technology
* Caichang Tu, University of Science and Technology of China
* Renjie Ji, University of Science and Technology of China
### 摘要
> 现如今，每年都会创建数百万个以太坊智能合约，成为了财务动机攻击者感兴趣的目标。然而，现有的分析工具不能准确分析大量合约的财务安全性。在本文中，我们提出并实现了FASVERIF，一种用于对智能合约进行细粒度分析的自动推理系统。FASVERIF会自动生成要根据智能合约的安全属性进行验证的模型。此外，与现有的形式验证方法不同，我们的推理系统还会自动生成安全属性。具体而言，我们提出了两种类型的安全属性：不变性属性和等价性属性，可用于检测各种类型的与金融相关的漏洞，并可根据我们的统计分析自动生成。因此，FASVERIF能够自动处理智能合约的源代码，并在可能的情况下使用形式化方法同时最大化准确性。我们还通过对Solidity的自定义语义基于我们翻译的模型进行验证，证明了验证我们属性的完备性。我们通过与其他自动化工具的比较，在一个包含549个合约漏洞数据集上评估了FASVERIF。我们的评估结果显示，FASVERIF在准确性和漏洞类型覆盖范围方面大大超过了其他代表性工具，使用了不同的技术。我们还在一个包含1700个合约的真实数据集上评估了FASVERIF，并找到了13个存在漏洞，仍然可以被在线对手利用。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-wansen](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-wansen)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-wansen.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-wansen.pdf)
## LibScan: Towards More Precise Third-Party Library Identification for Android Applications.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#libscan-towards-more-precise-third-party-library-identification-for-android-applications) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#libscan-towards-more-precise-third-party-library-identification-for-android-applications)**
### 作者
* Yafei Wu, State Key Lab of ISN, School of Cyber Engineering, Xidian University, China
* Cong Sun, State Key Lab of ISN, School of Cyber Engineering, Xidian University, China
* Dongrui Zeng, Palo Alto Networks, Inc., Santa Clara, CA, USA
* Gang Tan, The Pennsylvania State University, University Park, PA, USA
* Siqi Ma, University of New South Wales, Australia
* Peicheng Wang, State Key Lab of ISN, School of Cyber Engineering, Xidian University, China
### 摘要
> Android应用广泛使用第三方库（TPL）以重用功能和提高开发效率。对TPL内部了解的不足使开发人员和用户面临严重的安全漏洞威胁。为了减轻这种威胁，人们已经提出了多样化的方法来识别易受攻击甚至恶意的TPL。然而，现代混淆器的丰富功能，包括高级重打包、死代码删除和控制流随机化，明显阻碍了对TPL的精确检测。在这项工作中，我们提出了一种通用的TPL检测方法LibScan。我们首先使用代码特征来建立应用和TPL类之间的潜在类对应关系。然后，我们使用方法操作码相似性和调用链操作码相似性来提高检测到的类对应关系的准确性。此外，我们设计了提前停止标准和重复使用中间结果来提高LibScan的效率。在实验中，通过与真实数据进行评估，证明了LibScan及其检测步骤的有效性。我们还将LibScan应用于检测谷歌应用商店前排名应用和大规模的野外应用中的易受攻击的TPL，显示了我们方法的效率和可扩展性，以及我们方法作为协助恶意软件检测的辅助工具的潜力。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wu-yafei](https://www.usenix.org/conference/usenixsecurity23/presentation/wu-yafei)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wu-yafei.pdf](https://www.usenix.org/system/files/usenixsecurity23-wu-yafei.pdf)
## Union under Duress: Understanding Hazards of Duplicate Resource Mismediation in Android Software Supply Chain.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#union-under-duress-understanding-hazards-of-duplicate-resource-mismediation-in-android-software-supply-chain) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#union-under-duress-understanding-hazards-of-duplicate-resource-mismediation-in-android-software-supply-chain)**
### 作者
* Xueqiang Wang, University of Central Florida
* Yifan Zhang, Indiana University Bloomington
* XiaoFeng Wang, Indiana University Bloomington
* Yan Jia, Nankai University
* Luyi Xing, Indiana University Bloomington
### 摘要
> 恶意第三方库已成为安卓软件供应链的重要安全风险来源。最近的研究表明，恶意库可以通过未经授权的API访问从同一应用程序中托管的其他库中获取数据。然而，目前还不清楚第三方库在其代码和API经过彻底审查后是否仍会对其他库构成威胁。
> 
> 第三方安卓库通常包含各种资源来支持其操作。这些资源与其他库的资源一起，在应用构建过程中由安卓资源编译器（ARC）进行管理。多个库具有重复资源时，ARC需要调解这些资源。
> 
> 在本文中，我们报告了安卓应用供应链上的一个新的攻击面：重复资源错误调解（Duress）。这个攻击面为攻击者提供了用恶意库中的重复资源通过利用ARC污染受害库的安全和隐私敏感资源的机会。我们的攻击案例表明，通过几种有效的攻击策略，攻击者可以偷偷引导受害库及其用户暴露敏感数据，并降低安全保护等。此外，我们进行了第一个系统性研究，以了解Duress风险的影响。我们的研究揭示了第三方库中Duress风险的普遍存在：对超过23K个库和150K个应用程序进行分析发现，18.4%的库的敏感资源面临Duress风险，25.7%的库与其他库有重复的敏感资源，即集成风险，并且超过400个现有应用程序受到潜在Duress事件的影响等。为了减轻这些风险，我们讨论了一种轻量级和编译时的资源隔离方法，以防止恶意库污染其他库的敏感资源。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-xueqiang-duress](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-xueqiang-duress)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-xueqiang-duress.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-xueqiang-duress.pdf)
## UVSCAN: Detecting Third-Party Component Usage Violations in IoT Firmware.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#uvscan-detecting-third-party-component-usage-violations-in-iot-firmware) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#uvscan-detecting-third-party-component-usage-violations-in-iot-firmware)**
### 作者
* Binbin Zhao, Georgia Institute of Technology and Zhejiang University
* Shouling Ji, Zhejiang University
* Xuhong Zhang, Zhejiang University
* Yuan Tian, University of California, Los Angeles
* Qinying Wang, Zhejiang University
* Yuwen Pu, Zhejiang University
* Chenyang Lyu, Zhejiang University
* Raheem Beyah, Georgia Institute of Technology
### 摘要
> 如今，物联网设备在固件中集成了大量第三方组件（TPCs），以缩短开发周期。TPCs通常具有严格的使用规范，例如检查函数的返回值。违反TPCs的使用规范可能会导致严重后果，例如空指针解引用。因此，如果不正确实施，这种大量的TPC集成将导致物联网设备中普遍存在的漏洞。从几个角度来看，自动检测TPC集成中的漏洞是具有挑战性的：（1）TPC文档中的高级规范与物联网固件中的低级实现之间存在差距。（2）物联网固件大多是闭源二进制，从源代码进行编译时会丢失很多信息，并且具有多样的架构。
> 
> 为了解决这些挑战，我们设计并实现了一个自动化且可扩展的系统——UVScan，用于检测物联网固件中的TPC使用违规行为。在UVScan中，我们首先提出了一种新颖的基于自然语言处理（NLP）的规则提取框架，该框架从格式不一致的TPC文档中提取API规范。然后，我们设计了一个基于规则驱动的NLP引导二进制分析引擎，该引擎将高级TPC文档中的逻辑信息映射到低级二进制代码，并检测不同架构的物联网固件中的TPC使用违规行为。我们从四个方面对UVScan进行评估，使用了四个流行的TPCs和六个基准数据集。结果显示，UVScan的精确度和召回率均超过70%，并且与源代码级别的API误用检测器相比，性能有显著改进。
> 
> 为了深入了解物联网固件中TPC使用违规问题的现状，我们对4,545个固件映像进行了大规模分析，并检测到27,621个使用违规。我们进一步进行了几个固件映像上的拒绝服务攻击和中间人攻击的案例研究，证明了TPC使用违规的严重风险。目前，已有206个使用违规被供应商确认为漏洞，并且其中七个已被分配了高危的CVE ID。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhao-binbin](https://www.usenix.org/conference/usenixsecurity23/presentation/zhao-binbin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhao-binbin.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhao-binbin.pdf)
## Beyond Typosquatting: An In-depth Look at Package Confusion.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#beyond-typosquatting-an-in-depth-look-at-package-confusion) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#beyond-typosquatting-an-in-depth-look-at-package-confusion)**
### 作者
* Shradha Neupane, Worcester Polytechnic Institute
* Grant Holmes, University of Kansas
* Elizabeth Wyss, University of Kansas
* Drew Davidson, University of Kansas
* Lorenzo De Carli, University of Calgary
### 摘要
> 包混淆事件是供应链安全中最严重的问题之一，指的是开发者被误导导入除目标包以外的包，尤其是当错误的包具有恶意功能时，安全风险更加严重。虽然这个问题的普遍性已经有相当多的文献进行了记录，但很少有研究工作探讨混淆包名称可能产生或被对手利用的各种机制。在我们的研究中，我们首次提出了对引起混淆的机制进行全面分类，并展示了如何利用这种理解进行检测。
> 
> 首先，我们使用定性分析来鉴定和严格定义了13种混淆机制的分类，基于1200多个记录的攻击数据集。结果显示，虽然人们普遍认为包混淆主要利用了打字错误，但实际上攻击者使用了各种机制，其中许多机制是在语义层面上而不是句法层面上操作的。凭借我们的分类，我们进一步定义了用于发现攻击类型的检测器，并在整个npm包集上对它们进行评估。
> 
> 通过在线调查对样本的评估确定了一组高效的检测规则，这些规则具有以下特点：（i）返回高质量的匹配结果（77%的匹配被标记为潜在或高度混淆，18%的高度混淆）；（ii）生成较低的警告开销（每10亿个包对只生成1个警告）。与最新技术的比较表明，现有工具很大程度上没有标记出这类包。因此，我们的工作有可能实质性地改进对野外可混淆包名称的识别能力。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/neupane](https://www.usenix.org/conference/usenixsecurity23/presentation/neupane)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-neupane.pdf](https://www.usenix.org/system/files/usenixsecurity23-neupane.pdf)
## SandDriller: A Fully-Automated Approach for Testing Language-Based JavaScript Sandboxes.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#sanddriller-a-fully-automated-approach-for-testing-language-based-javascript-sandboxes) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#sanddriller-a-fully-automated-approach-for-testing-language-based-javascript-sandboxes)**
### 作者
* Abdullah AlHamdan, CISPA Helmholtz Center for Information Security
* Cristian-Alex, CISPA Helmholtz Center for Information Security
* ru Staicu, CISPA Helmholtz Center for Information Security
### 摘要
> 基于语言的隔离提供了一种廉价的方法来限制不受信任的代码的权限。早期的研究提出了大量的这种技术，用于隔离客户端上的JavaScript代码，实现Web混搭。虽然这些解决方案在从业者中大多已过时，但在JavaScript代码在浏览器外运行方面使用类似技术的趋势正在增长，例如用于保护服务器端免受供应链攻击。无论用例如何，语言隔离实现中的漏洞都可能具有灾难性后果。因此，我们提出了SandDriller，这是一种基于动态分析的方法，用于检测沙盒逃逸漏洞。我们的核心洞见是基于语言隔离的主要目标设计测试预测，并将其分为两个方面：防止沙盒外部写入和限制对特权操作的访问。通过使用仪器，我们拦截主机和客户端代码之间交换的所有引用，并在其上插入预测检查，以检测允许客户端代码逃离沙盒的外部引用。如果在运行时，预测检查检测到外部引用，则SandDriller继续合成用于此的攻击。我们将我们的方法应用于六个沙盒系统，并发现了八个独特的零日沙盒逃逸漏洞和两个崩溃。我们相信SandDriller可以集成到沙盒的开发过程中，在预发布阶段检测安全漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/alhamdan](https://www.usenix.org/conference/usenixsecurity23/presentation/alhamdan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-alhamdan_1.pdf](https://www.usenix.org/system/files/usenixsecurity23-alhamdan_1.pdf)
## Instructions Unclear: Undefined Behaviour in Cellular Network Specifications.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#instructions-unclear-undefined-behaviour-in-cellular-network-specifications) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#instructions-unclear-undefined-behaviour-in-cellular-network-specifications)**
### 作者
* Daniel Klischies, Ruhr University Bochum
* Moritz Schloegel, CISPA Helmholtz Center for Information Security
* Tobias Scharnowski, CISPA Helmholtz Center for Information Security
* Mikhail Bogodukhov, Independent
* David Rupprecht, Radix Security
* Veelasha Moonsamy, Ruhr University Bochum
### 摘要
> 移动网络是现代通信的基石，对我们的日常生活不可或缺。它们的规范涵盖数千页，主要用自然语言编写。由此产生的复杂性和缺乏明确性导致了欠规范化，只有可能相互作用的子集是正确规范的，而其他行为则未定义，开发人员可以根据自己的理解进行解释。实际上，这导致智能手机调制解调器在实现规范时发生奇怪的、意外的相互作用，最坏的情况下会导致安全漏洞。
> 
> 在这项工作中，我们提出了一种系统性地发现移动网络规范中未定义行为的通用方法。我们的技术只需要规范中定义的行为模型，就能够将该模型扩展以自动推理未定义行为的存在。对于每个未定义行为，它会自动推断具体的示例作为存在性的证明。这不仅可以改进规范，还能使我们能够测试智能手机调制解调器。通过这种方式，我们可以验证未定义行为实例是否导致调制解调器固件的安全漏洞。通过我们的方法，我们在LTE的公共警告系统、短信和无线资源控制规范中识别了58个未定义行为情况。其中五个案例导致了以前未知的漏洞，允许对常用智能手机调制解调器进行读取调制解调器内存内容和执行远程拒绝服务攻击（在某个案例中仅通过一条短信）。目前已经分配了两个高严重性的CVE和一个关键性的CVE。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/klischies](https://www.usenix.org/conference/usenixsecurity23/presentation/klischies)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-klischies.pdf](https://www.usenix.org/system/files/usenixsecurity23-klischies.pdf)
## MobileAtlas: Geographically Decoupled Measurements in Cellular Networks for Security and Privacy Research.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#mobileatlas-geographically-decoupled-measurements-in-cellular-networks-for-security-and-privacy-research) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#mobileatlas-geographically-decoupled-measurements-in-cellular-networks-for-security-and-privacy-research)**
### 作者
* Gabriel K. Gegenhuber, University of Vienna
* Wilfried Mayer, SBA Research
* Edgar Weippl, University of Vienna
* Adrian Dabrowski, CISPA Helmholtz Center for Information Security
### 摘要
> 蜂窝网络不仅仅是连接互联网的数据接入网络。它们独特的服务和能够形成大型复杂化合物以便进行漫游，使其成为一个有吸引力的研究目标。然而，仔细检查后发现，它们承诺在漫游合作伙伴之间提供一致的服务、可比较的隐私和安全性并不成立。
> 
> 因此，有必要为蜂窝接入网络提供控制测试平台和测量工具，以充分发挥该技术的独特结构和全球范围。特别是，这些测量受到运营商、移动计划和服务的组合爆炸挑战的影响。为了应对这些挑战，我们建立了一个框架，通过选择性地远程连接，将SIM卡与蜂窝调制解调器在地理上解耦。这使得可以在几分钟内在任何调制解调器位置测试任何用户与任何运营商。所得的GSM/UMTS/LTE测量和测试平台提供了一个可控的实验环境，具有可扩展性和经济性。该平台是可扩展的，并且完全开源，允许其他研究人员提供位置、SIM卡和测量脚本。
> 
> 利用上述框架，我们在商业网络中的国际实验揭示了可利用的流量计量不一致性，从而导致多个黑客机会，即逃票。我们还揭示了问题IPv6防火墙配置，隐藏的SIM卡与家庭网络的通信，以及利用拨号进度音跟踪不同漫游网络和国家的受害者。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gegenhuber](https://www.usenix.org/conference/usenixsecurity23/presentation/gegenhuber)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gegenhuber.pdf](https://www.usenix.org/system/files/usenixsecurity23-gegenhuber.pdf)
## Eavesdropping Mobile App Activity via Radio-Frequency Energy Harvesting.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#eavesdropping-mobile-app-activity-via-radio-frequency-energy-harvesting) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#eavesdropping-mobile-app-activity-via-radio-frequency-energy-harvesting)**
### 作者
* Tao Ni, Shenzhen Research Institute, City University of Hong Kong, and Department of Computer Science, City University of Hong Kong
* Guohao Lan, Department of Software Technology, Delft University of Technology
* Jia Wang, College of Computer Science and Software Engineering, Shenzhen University
* Qingchuan Zhao, Department of Computer Science, City University of Hong Kong
* Weitao Xu, Shenzhen Research Institute, City University of Hong Kong, and Department of Computer Science, City University of Hong Kong
### 摘要
> 射频（RF）能量收集是一种有前景的技术，用于为物联网（IoT）设备提供能量，以供电传感器并延长电池寿命。本文提出了一种新颖的侧信道攻击，利用RF能量收集信号窃听移动应用程序的活动。为了演示这种新颖的攻击，我们提出了AppListener，这是一个自动化攻击框架，可以从收集到的RF能量中识别细粒度的移动应用程序活动。RF能量是通过定制的RF能量收集器收集的，该收集器从环境Wi-Fi传输中生成电压信号，并使用三级分类算法识别应用程序活动。我们使用四部运行40个常见移动应用程序（例如YouTube、Facebook和WhatsApp）的移动设备评估了AppListener，这些应用程序属于五个类别（即视频、音乐、社交媒体、通信和游戏），每个类别包含五个特定于应用程序的活动。实验结果显示，AppListener在区分四种不同移动设备方面的准确率超过99％，在分类40个不同应用程序方面的准确率超过98％，在识别五组特定应用程序活动方面的准确率为86.7％。此外，我们进行了一项综合研究，以展示AppListener对距离、环境和非目标连接设备等多种影响因素具有鲁棒性。将AppListener集成到商用物联网设备的实践也证明其易于部署。最后，我们提出了防御这种新型攻击的第一步对策。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ni](https://www.usenix.org/conference/usenixsecurity23/presentation/ni)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ni.pdf](https://www.usenix.org/system/files/usenixsecurity23-ni.pdf)
## Sherlock on Specs: Building LTE Conformance Tests through Automated Reasoning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#sherlock-on-specs-building-lte-conformance-tests-through-automated-reasoning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#sherlock-on-specs-building-lte-conformance-tests-through-automated-reasoning)**
### 作者
* Yi Chen, Indiana University Bloomington
* Di Tang, Indiana University Bloomington
* Yepeng Yao, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, CAS, and School of Cyber Security, University of Chinese Academy of Sciences
* Mingming Zha, Indiana University Bloomington
* Xiaofeng Wang, Indiana University Bloomington
* Xiaozhong Liu, Worcester Polytechnic Institute
* Haixu Tang, Indiana University Bloomington
* Baoxu Liu, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, CAS, and School of Cyber Security, University of Chinese Academy of Sciences
### 摘要
> 符合性测试对于发现载波网络系统中的安全弱点至关重要。然而，根据3GPP的进展情况显示，即使投入了大量资源，构建一个符合性测试流程仍然具有挑战性，特别是在开发与安全相关的测试方面。构建该流程的一个独特挑战在于，测试系统通常无法直接调用安全需求中的条件事件，或者直接观察操作的发生，而该操作应该是由该事件触发的。解决这个问题需要找到一个事件链，一旦启动，就会引发连锁反应，以便测试系统可以间接地触发目标事件，或者间接观察预期事件的发生。为了找到解决这个问题的方法，以及朝着完全自动化的符合性测试生成迈进，我们开发了一种新的方法，称为Contester，该方法利用自然语言处理和机器学习，从3GPP规范中构建一个事件依赖图，并在图上执行自动推理，以发现给定安全需求的事件链。这些事件链进一步由Contester转换为符合性测试程序，然后由测试系统执行，以评估用户设备（UE）是否符合安全需求。我们的评估表明，对于来自LTE NAS规范的22个安全需求，Contester在仅25分钟内成功生成了超过一百个测试程序。在iPhone 13、Pixel 5a和物联网设备等22个流行UE上运行这些程序后，我们的方法揭示了197个安全需求违规，其中190个以前从未报告过，使这些设备面临严重的安全风险，如中间人攻击、伪基站和回复攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-yi](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-yi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-yi.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-yi.pdf)
## BASECOMP: A Comparative Analysis for Integrity Protection in Cellular Baseband Software.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#basecomp-a-comparative-analysis-for-integrity-protection-in-cellular-baseband-software) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#basecomp-a-comparative-analysis-for-integrity-protection-in-cellular-baseband-software)**
### 作者
* Eunsoo Kim, KAIST
* Min Woo Baek, KAIST
* CheolJun Park, KAIST
* Dongkwan Kim, Samsung SDS
* Yongdae Kim, KAIST
* Insu Yun, KAIST
### 摘要
> 基带软件是移动通信中的重要组成部分。然而，由于移动通信规范的复杂性和大量条款，正确实施基带软件几乎是不可能的。因此，动态测试被广泛用于发现其中的实现错误。然而，这种方法存在可达性问题，导致很多漏掉的错误。最近，BaseSpec提出了一种静态分析基带的方法。然而，BaseSpec需要进行繁重的手动分析，且仅限于消息解码，在移动通信中最关键的完整性保护步骤上失败。本文提出了一种新颖的半自动方法BASECOMP，用于分析完整性保护。为了应对基带固件的复杂性，BASECOMP利用概率推理来识别完整性保护函数。具体来说，BASECOMP根据规范从固件构建因子图，并发现完整性保护的最有可能函数。然后，通过额外的手动分析，BASECOMP进行符号分析以验证它的行为是否符合规范并报告任何差异。我们将BASECOMP应用于两个供应商（三星和联发科）的16个固件图像以及开源的4G和5G软件无线电套件srsRAN。结果发现了29个错误，其中包括三星的一个NAS AKA绕过漏洞，被评定为严重程度。此外，BASECOMP平均可以将需要手动分析的函数数量缩小至1.56个。这可以显著减少手动分析的工作量，这是之前基带静态分析方法的主要限制。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kim-eunsoo](https://www.usenix.org/conference/usenixsecurity23/presentation/kim-eunsoo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kim-eunsoo.pdf](https://www.usenix.org/system/files/usenixsecurity23-kim-eunsoo.pdf)
## Investigating Verification Behavior and Perceptions of Visual Digital Certificates.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#investigating-verification-behavior-and-perceptions-of-visual-digital-certificates) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#investigating-verification-behavior-and-perceptions-of-visual-digital-certificates)**
### 作者
* Dañiel Gerhardt, CISPA Helmholtz Center for Information Security and Saarland University
* Alex, CISPA Helmholtz Center for Information Security and Saarland University
* er Ponticello, CISPA Helmholtz Center for Information Security and Saarland University
* Adrian Dabrowski, CISPA Helmholtz Center for Information Security
* Katharina Krombholz, CISPA Helmholtz Center for Information Security
### 摘要
> 本文提出了一项定性研究，探讨个人如何感知和验证带有QR码的视觉数字证书。在COVID-19疫情期间，这些证书已在欧盟被用于提供规范化的疫苗接种证明。
> 
> 我们对N=17名负责验证COVID-19证书的参与者进行了半结构化访谈，采用了双重主题分析方法，我们在其他方面确定和分类了多种行为模式，包括对视觉线索的不适当依赖，作为正确数字验证的代理。
> 
> 我们根据研究结果提出了设计和结构建议，包括概念上的变化以及改进存储和验证应用程序以限制捷径机会。因此，我们的实证研究结果对改善视觉数字证书及其验证的可用性、稳健性和有效性至关重要。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gerhardt](https://www.usenix.org/conference/usenixsecurity23/presentation/gerhardt)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gerhardt.pdf](https://www.usenix.org/system/files/usenixsecurity23-gerhardt.pdf)
## "My Privacy for their Security": Employees' Privacy Perspectives and Expectations when using Enterprise Security Software.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#my-privacy-for-their-security-employees-privacy-perspectives-and-expectations-when-using-enterprise-security-software) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#my-privacy-for-their-security-employees-privacy-perspectives-and-expectations-when-using-enterprise-security-software)**
### 作者
* Jonah Stegman, University of Guelph
* Patrick J. Trottier, University of Guelph
* Caroline Hillier, University of Guelph
* Hassan Khan, University of Guelph
* Mohammad Mannan, Concordia University
### 摘要
> 员工通常需要在公司和个人设备上使用企业安全软件（“ESS”）。 ESS产品收集用户的活动数据，包括用户的位置、使用的应用程序和访问的网站-从员工设备到云端。据我们所知，这种数据收集的隐私影响尚未得到探究。我们进行了一项在线调查（n=258）和一项半结构化访谈（n=22），与ESS用户沟通他们对隐私的看法，使用ESS时面临的挑战以及他们尝试克服这些挑战的方式。我们发现，虽然许多参与者报告称他们没有收到关于ESS收集了哪些数据的信息，但那些收到一些信息的人常常低估了所收集的数据。员工报告称缺乏关于各个数据收集方面的沟通，包括：可访问数据的实体和所收集数据的范围。我们使用访谈揭示了参与者中多个误解的来源。我们的发现表明，尽管员工理解数据收集对安全的必要性，但缺乏沟通和模糊的数据收集做法导致员工对ESS和雇主的信任受到侵蚀。我们从参与者那里获得了如何减轻这些误解的建议，并对我们的隐私通知和ESS的隐私指示符设计草图收集了反馈。我们的工作将有助于研究人员、雇主和ESS开发者在不断增长的ESS市场中保护用户的隐私。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/stegman](https://www.usenix.org/conference/usenixsecurity23/presentation/stegman)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-stegman.pdf](https://www.usenix.org/system/files/usenixsecurity23-stegman.pdf)
## Account Security Interfaces: Important, Unintuitive, and Untrustworthy.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#account-security-interfaces-important-unintuitive-and-untrustworthy) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#account-security-interfaces-important-unintuitive-and-untrustworthy)**
### 作者
* Alaa Daffalla, Cornell University
* Marina Bohuk, Cornell University
* Nicola Dell, Jacobs Institute Cornell Tech
* Rosanna Bellini, Cornell University
* Thomas Ristenpart, Cornell Tech
### 摘要
> 在线服务越来越依赖用户界面来传达与账户信息安全相关的重要信息，例如哪些设备已登录用户账户以及最近登录发生的时间。这些信息被用于评估账户的安全状态，对于有可能处于活跃攻击之下的风险用户尤为关键。然而，迄今为止，对于这些界面的工作效果还没有任何研究调查。
> 
> 为了填补这一空白，我们与一家支持亲密伴侣暴力幸存者的诊所合作。我们调查了数百个记录，以确定捕捉诊所咨询师和幸存者之间互动的记录，以推断幸存者账户的安全状态，并对涉及19名咨询师和22名幸存者的28个记录进行了定性分析。我们的研究结果确认了这些界面对于评估用户安全性的重要性，但我们也发现这些界面存在一些限制，导致混淆并减少了它们的实用性。
> 
> 接下来，我们进行了实验性研究，调查了四个主要服务的设备列表和会话活动日志中信息完整性的缺失。对于所有调查的服务，我们展示了攻击者如何完全隐藏访问或伪造访问详情，以掩盖对受害者的非法登录。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/daffalla](https://www.usenix.org/conference/usenixsecurity23/presentation/daffalla)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-daffalla.pdf](https://www.usenix.org/system/files/usenixsecurity23-daffalla.pdf)
## Defining "Broken": User Experiences and Remediation Tactics When Ad-Blocking or Tracking-Protection Tools Break a Website's User Experience.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#defining-broken-user-experiences-and-remediation-tactics-when-ad-blocking-or-tracking-protection-tools-break-a-websites-user-experience) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#defining-broken-user-experiences-and-remediation-tactics-when-ad-blocking-or-tracking-protection-tools-break-a-websites-user-experience)**
### 作者
* Alex, University of Chicago and Carnegie Mellon University
* ra Nisenoff, University of Chicago and Carnegie Mellon University
* Arthur Borem, University of Chicago
* Madison Pickering, University of Chicago
* Grant Nakanishi, University of Chicago
* Maya Thumpasery, University of Chicago
* Blase Ur, University of Chicago
### 摘要
> 为了对抗广告和第三方追踪在互联网上的普遍存在，用户利用广告拦截和追踪保护的浏览器插件和内置功能来阻止它们。不幸的是，广告拦截工具可能会导致网站的非广告和非追踪元素退化或失败，这种现象被称为故障。例如，缺失的图像，不工作的按钮和页面无法加载。虽然文献经常讨论故障，但以前的工作并没有系统地绘制和区分故障下包含的用户体验谱系，也没有试图了解用户如何体验、优先处理和尝试修复故障。我们填补了这些空白。首先，通过对十个流行的广告拦截工具的18,932个扩展商店评论和GitHub问题报告进行定性分析，我们开发了38种具体故障类型和15种相关缓解策略的新分类法。为了了解故障的主观体验，我们随后进行了一项由95名参与者参与的调查。几乎所有参与者都经历过各种类型的故障，并且他们采用了各种策略来应对特定环境中特定类型的故障。不幸的是，参与者很少通知能够修复根本原因的任何人。我们讨论了我们的分类法和结果如何提高目前自动检测和修复故障的全面性和优先级。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/nisenoff-broken](https://www.usenix.org/conference/usenixsecurity23/presentation/nisenoff-broken)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-nisenoff-broken.pdf](https://www.usenix.org/system/files/usenixsecurity23-nisenoff-broken.pdf)
## Cryptographic Deniability: A Multi-perspective Study of User Perceptions and Expectations.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#cryptographic-deniability-a-multi-perspective-study-of-user-perceptions-and-expectations) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#cryptographic-deniability-a-multi-perspective-study-of-user-perceptions-and-expectations)**
### 作者
* Tarun Kumar Yadav, Brigham Young University
* Devashish Gosain, KU Leuven
* Kent Seamons, Brigham Young University
### 摘要
> 加密否认能够让发送者否认通讯信息的撰写。然而，它需要社会和法律的认可才能起效。虽然流行的安全通讯应用支持否认性，但安全专家对这是否应该成为这些应用的默认属性存在分歧。本研究提供了一项多角度、多方法的用户感知和预期否认性的研究。研究方法包括：（1）对公共论坛上获取的专家意见进行定性分析；（2）对美国参与者进行半结构化访谈的定性分析；（3）对美国参与者进行调查（n=664）的定量分析；（4）借助法律专家对美国法庭案例进行定性和定量分析，以了解法律观点对否认性的看法。研究结果表明，否认性在社会上并不被接受，大多数用户更喜欢不可否认性。我们没有找到涉及WhatsApp并考虑否认性的美国法庭案例。在否认性能够充分保护弱势用户之前，人本研究还需要进行重要的研究。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yadav](https://www.usenix.org/conference/usenixsecurity23/presentation/yadav)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yadav.pdf](https://www.usenix.org/system/files/usenixsecurity23-yadav.pdf)
## Silent Bugs Matter: A Study of Compiler-Introduced Security Bugs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#silent-bugs-matter-a-study-of-compiler-introduced-security-bugs) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#silent-bugs-matter-a-study-of-compiler-introduced-security-bugs)**
### 作者
* Jianhao Xu, Nanjing University
* Kangjie Lu, University of Minnesota
* Zhengjie Du, Nanjing University
* Zhu Ding, Nanjing University
* Linke Li, Nanjing University
* Qiushi Wu, University of Minnesota
* Mathias Payer, EPFL
* Bing Mao, Nanjing University
### 摘要
> 编译器确保生成的优化代码与原始代码在语义上是等价的。然而，即使是“正确”的编译器也可能引入安全漏洞，因为安全性问题超出了翻译正确性的范畴。由这种正确编译器行为引入的安全性漏洞可能具有争议性；编译器开发人员期望用户严格遵循语言规范并理解所有假设，而编译器用户可能错误地认为他们的代码是安全的。这些漏洞很难发现和预防，尤其是当不清楚它们应该在编译器还是用户端修复时。然而，这些漏洞是真实存在且严重的，因此应该进行深入研究。
> 
> 我们对编译器引入的安全漏洞（CISB）及其根本原因进行了全面研究。我们通过手动分析最流行的编译器（GCC和Clang）的4,827个潜在错误报告，收集了大量的CISB样本，并将它们提炼成一个CISB的分类。我们进一步进行了用户研究，以了解编译器用户如何看待编译器行为。我们的研究表明，编译器引入的安全漏洞是常见的，并可能具有严重的安全影响。期望编译器用户理解并遵守编译器的假设是不现实的。例如，“无未定义行为”假设已成为用户的噩梦，并是CISB的主要原因之一。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xu-jianhao](https://www.usenix.org/conference/usenixsecurity23/presentation/xu-jianhao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xu-jianhao.pdf](https://www.usenix.org/system/files/usenixsecurity23-xu-jianhao.pdf)
## A Bug's Life: Analyzing the Lifecycle and Mitigation Process of Content Security Policy Bugs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-bugs-life-analyzing-the-lifecycle-and-mitigation-process-of-content-security-policy-bugs) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-bugs-life-analyzing-the-lifecycle-and-mitigation-process-of-content-security-policy-bugs)**
### 作者
* Gertjan Franken, imec-DistriNet, KU Leuven
* Tom Van Goethem, imec-DistriNet, KU Leuven
* Lieven Desmet, imec-DistriNet, KU Leuven
* Wouter Joosen, imec-DistriNet, KU Leuven
### 摘要
> 不断发展的Web对内容安全策略(CSP)的开发和维护施加了持续的压力，CSP作为主要的安全策略之一，可以减轻跨站脚本等攻击。事实上，为了实现全面性，该策略必须考虑几乎每一个新引入的浏览器特性，并且必须在CSP功能扩展时对每一个现有的浏览器特性进行审查。不幸的是，这项工作的复杂性已经导致了关键的实现缺陷，从而导致所有采用CSP的网站的安全被破坏。
> 
> 在本文中，我们首次系统地分析了CSP漏洞生命周期，对漏洞根本原因进行了新的研究。为此，我们利用我们的自动化框架BugHog，在100,000个浏览器版本中评估了公开披露的漏洞概念验证的可重现性。通过考虑自CSP引入Chromium和Firefox以来的整个源代码修订历史，我们确定了75个CSP漏洞的123个独特引入和修复修订。我们的分析显示，对漏洞的不一致处理导致了三个漏洞的早期公开披露，通过在供应商之间适当地共享漏洞，其他一些漏洞的生命周期可以明显缩短。最后，我们提出了改进当前漏洞处理和响应实践的解决方案。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/franken](https://www.usenix.org/conference/usenixsecurity23/presentation/franken)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-franken.pdf](https://www.usenix.org/system/files/usenixsecurity23-franken.pdf)
## Remote Code Execution from SSTI in the Sandbox: Automatically Detecting and Exploiting Template Escape Bugs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#remote-code-execution-from-ssti-in-the-sandbox-automatically-detecting-and-exploiting-template-escape-bugs) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#remote-code-execution-from-ssti-in-the-sandbox-automatically-detecting-and-exploiting-template-escape-bugs)**
### 作者
* Yudi Zhao, Fudan University
* Yuan Zhang, Fudan University
* Min Yang, Fudan University
### 摘要
> 模板引擎广泛应用于Web应用程序中，以便简化用户界面的开发。模板引擎提供的强大功能可以被攻击者滥用，通过服务器端模板注入（SSTI）实现对服务器端的严重攻击，包括远程代码执行（RCE）。因此，现代模板引擎提供了沙箱模式，以防止SSTI攻击导致RCE。
> 
> 在本文中，我们研究了模板引擎中一个被忽视的沙箱绕过漏洞，称为模板逃逸（template escape），可能将SSTI攻击提升到RCE。通过逃逸模板渲染过程，模板逃逸漏洞可以在服务器端注入可执行代码。由于依赖于模板语法和模板渲染逻辑，模板逃逸漏洞难以检测和利用。因此，在真实世界中关于它们的普遍性和严重性所知甚少。为此，我们进行了模板逃逸漏洞的首次深入研究，并提出了TEFuzz，一种自动检测和利用此类漏洞的工具。通过整合多种新技术，TEFuzz无需学习模板语法即可生成用于发现的漏洞的PoC和利用。我们将TEFuzz应用于七种流行的PHP模板引擎。总之，TEFuzz发现了135个新的模板逃逸漏洞，并为55个漏洞合成了RCE利用。我们的研究表明，模板逃逸漏洞普遍存在且具有严重威胁。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhao-yudi](https://www.usenix.org/conference/usenixsecurity23/presentation/zhao-yudi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhao-yudi.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhao-yudi.pdf)
## Detecting API Post-Handling Bugs Using Code and Description in Patches.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#detecting-api-post-handling-bugs-using-code-and-description-in-patches) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#detecting-api-post-handling-bugs-using-code-and-description-in-patches)**
### 作者
* Miaoqian Lin, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Kai Chen, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Yang Xiao, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
### 摘要
> 程序API必须按照其规范来使用。API后处理（APH）是一种常见的规范类型，用于处理API的返回检查、资源释放等。违反APH规范（也称为APH漏洞）可能导致严重的安全问题，包括内存损坏、资源泄露等。API文档作为APH规范的重要来源，常被分析用于提取APH漏洞的规范。然而，文档并不总是完整的，导致许多漏洞无法被检测到。在本文中，我们发现补丁可以作为另一个很好的APH规范的来源。除了补丁引入的代码差异，补丁还包含描述，有助于准确提取APH规范。为了使漏洞检测准确高效，我们设计了基于API规范的图来减少待分析的路径数量，并进行部分路径敏感分析。我们实现了一个名为APHP（使用补丁进行API后处理漏洞检测的工具）的原型，用于静态检测APH漏洞。我们在包括Linux内核、QEMU、Git和Redis在内的四个流行的开源程序上评估了APHP，并检测到了410个新漏洞，超越了现有的最先进工作。其中216个漏洞已被维护人员确认，并且已经分配了2个CVE编号。一些漏洞已存在超过12年。目前，许多提交的补丁已被反向移植到Linux内核的长期稳定版本。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lin](https://www.usenix.org/conference/usenixsecurity23/presentation/lin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lin.pdf](https://www.usenix.org/system/files/usenixsecurity23-lin.pdf)
## Place Your Locks Well: Understanding and Detecting Lock Misuse Bugs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#place-your-locks-well-understanding-and-detecting-lock-misuse-bugs) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#place-your-locks-well-understanding-and-detecting-lock-misuse-bugs)**
### 作者
* Yu, The Hong Kong University of Science and Technology
* ao Cai, The Hong Kong University of Science and Technology
* Peisen Yao, The Hong Kong University of Science and Technology
* Chengfeng Ye, The Hong Kong University of Science and Technology
* Charles Zhang, The Hong Kong University of Science and Technology
### 摘要
> 现代多线程软件系统通常利用锁来防止并发错误。然而，由于编写正确的并发代码的复杂性，使用锁本身往往容易出错。在这项工作中，我们研究了一种常见的锁误用情况。我们对现有CVE ID进行了特征研究，发现锁误用可能导致并发错误甚至严重的安全问题，如拒绝服务和内存损坏。为了减轻这些威胁，我们提出了一个实用的静态分析框架，即Lockpick，它包括两个核心阶段，能够有效地检测锁的误用。具体而言，Lockpick首先进行路径敏感类型状态分析，追踪锁状态的转换和交互，以识别顺序类型状态违规。在先前结果的指导下，Lockpick然后进行并发感知检测，以准确定位各种锁误用错误，有效地推理出感兴趣的线程交错。结果令人鼓舞-我们使用Lockpick发现了203个独特且经确认的锁误用，涵盖了一系列有影响力的开源系统，如OpenSSL、Linux内核、PostgreSQL、MariaDB、FFmpeg、Apache HTTPd和FreeBSD。三个令人兴奋的结果是，这些经确认的锁误用长期隐藏，平均隐藏了7.4年；总共为这些严重错误分配了16个CVE ID；而且Lockpick可以用极少的虚警标志出许多被之前工具漏掉的真实错误。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cai-yuandao](https://www.usenix.org/conference/usenixsecurity23/presentation/cai-yuandao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cai-yuandao.pdf](https://www.usenix.org/system/files/usenixsecurity23-cai-yuandao.pdf)
## The Space of Adversarial Strategies.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-space-of-adversarial-strategies) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-space-of-adversarial-strategies)**
### 作者
* Ryan Sheatsley, University of Wisconsin-Madison
* Blaine Hoak, University of Wisconsin-Madison
* Eric Pauley, University of Wisconsin-Madison
* Patrick McDaniel, University of Wisconsin-Madison
### 摘要
> 对抗性样本是为了在机器学习模型中诱发最坏行为而设计的输入，过去十年中已得到广泛研究。然而，我们对这种现象的理解源自一种相当分散的知识汇集；目前存在有少数攻击手段，每种攻击都有不同的威胁模型假设和无法比较的最优定义。在本文中，我们提出了一种系统的方法来描述最坏情况（即最优）的对手。我们首先通过将攻击组件分解为表面和旅行者的方式，引入了可扩展的对抗性机器学习攻击的分解。通过分解，我们枚举了576种攻击方式（其中568种以前尚未研究过）。接下来，我们提出了帕累托集合攻击（PEA）：一种理论攻击，它对攻击性能进行了上界限制。通过我们的新攻击方式，我们在鲁棒模型和非鲁棒模型、七个数据集以及包含计算成本的三个扩展的按&ell;p进行威胁模型的情况下，相对于PEA来衡量性能，从而形成了对抗策略空间的形式化。通过我们的评估，我们发现攻击性能高度依赖于具体环境：领域、模型的鲁棒性和威胁模型都会对攻击效果产生深远影响。我们的研究表明，未来衡量机器学习安全性的研究应该：（1）与领域和威胁模型相结合，并（2）超越目前所使用的少数已知攻击手段。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/sheatsley](https://www.usenix.org/conference/usenixsecurity23/presentation/sheatsley)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-sheatsley.pdf](https://www.usenix.org/system/files/usenixsecurity23-sheatsley.pdf)
## "Security is not my field, I'm a stats guy": A Qualitative Root Cause Analysis of Barriers to Adversarial Machine Learning Defenses in Industry.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#security-is-not-my-field-im-a-stats-guy-a-qualitative-root-cause-analysis-of-barriers-to-adversarial-machine-learning-defenses-in-industry) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#security-is-not-my-field-im-a-stats-guy-a-qualitative-root-cause-analysis-of-barriers-to-adversarial-machine-learning-defenses-in-industry)**
### 作者
* Jaron Mink, University of Illinois at Urbana-Champaign
* Harjot Kaur, Leibniz University Hannover
* Juliane Schmüser, CISPA Helmholtz Center for Information Security
* Sascha Fahl, CISPA Helmholtz Center for Information Security
* Yasemin Acar, Paderborn University and George Washington University
### 摘要
> 对抗性机器学习（AML）有可能泄露训练数据，强制进行任意分类，并严重降低机器学习模型的整体性能，这些都被学术界和企业视为严重问题。尽管如此，开创性的研究发现，大多数组织对这些威胁的保护不够充分。虽然缺乏对AML的防御被普遍认为是由于缺乏知识，但我们不知道为什么在工业项目中这些措施无法实现。为了更好地了解部署AML防御措施缺乏原因，在数据科学家和数据工程师中进行了半结构化访谈（n=21），以探索什么障碍阻碍了这些防御措施的有效实施。我们发现，实践者部署防御措施的能力受到三个主要因素的限制：机构动力和教育资源缺乏，无法充分评估AML风险并做出后续决策，以及组织结构和目标不鼓励实施而偏向其他目标。我们最后讨论了对公司和实践者提出实际建议，使其更加意识到这些风险并做好应对准备。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/mink](https://www.usenix.org/conference/usenixsecurity23/presentation/mink)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-mink.pdf](https://www.usenix.org/system/files/usenixsecurity23-mink.pdf)
## X-Adv: Physical Adversarial Object Attacks against X-ray Prohibited Item Detection.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#x-adv-physical-adversarial-object-attacks-against-x-ray-prohibited-item-detection) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#x-adv-physical-adversarial-object-attacks-against-x-ray-prohibited-item-detection)**
### 作者
* Aishan Liu, Beihang University
* Jun Guo, Beihang University
* Jiakai Wang, Zhongguancun Laboratory
* Siyuan Liang, Chinese Academy of Sciences
* Renshuai Tao, Beihang University
* Wenbo Zhou, University of Science and Technology of China
* Cong Liu, iFLYTEK
* Xianglong Liu, Beihang University, Zhongguancun Laboratory, and Hefei Comprehensive National Science Center
* Dacheng Tao, JD Explore Academy
### 摘要
> 对深度学习模型进行对抗攻击在评估其鲁棒性方面非常有价值。现有的攻击主要针对可见光谱（例如，像素级纹理扰动）进行。然而，尽管X射线成像在安全关键场景中具有广泛应用，但针对无纹理X射线图像的攻击仍然不充分。本文首次探讨了针对X射线禁止物品检测的对抗攻击研究，并揭示了在这种安全关键场景下此类攻击所带来的严重威胁。具体而言，我们认为在这种场景下成功的物理对抗攻击应该特别设计以规避颜色/纹理褪色和复杂重叠所带来的挑战。为此，我们提出了X-Adv来生成可以在行李中欺骗X射线探测器的物理可打印金属对抗代理。为了解决与颜色/纹理褪色相关的问题，我们开发了一个可微分的转换器，利用替代模型的梯度来生成具有对抗性形状的可3D打印物体，而不是直接生成对抗性纹理。为了将打印的3D对抗物体放置在具有复杂重叠实例的行李中，我们设计了一种基于策略的强化学习策略，以找到在禁止物品被其他物品严重遮挡的最坏情况下引发强大攻击性能的位置。为了验证所提出的X-Adv的有效性，我们在数字世界和物理世界进行了广泛的实验证明（对于后者，使用商用X射线安全检查系统）。此外，我们还提供了物理世界的X射线对抗攻击数据集XAD。我们希望本文能引起更多关于针对安全关键场景的潜在威胁的注意。我们的代码和XAD数据集可以在https://github.com/DIG-Beihang/X-adv上获取。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/liu-aishan](https://www.usenix.org/conference/usenixsecurity23/presentation/liu-aishan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-liu-aishan.pdf](https://www.usenix.org/system/files/usenixsecurity23-liu-aishan.pdf)
## SMACK: Semantically Meaningful Adversarial Audio Attack.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#smack-semantically-meaningful-adversarial-audio-attack) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#smack-semantically-meaningful-adversarial-audio-attack)**
### 作者
* Zhiyuan Yu, Washington University in St. Louis
* Yuanhaur Chang, Washington University in St. Louis
* Ning Zhang, Washington University in St. Louis
* Chaowei Xiao, Arizona State University
### 摘要
> 声控系统依赖语音识别和说话者识别作为关键的核心技术。尽管它们给我们的日常生活带来了革命性的变化，但其安全性成为一个日益关注的问题。现有的研究已经证明了使用恶意设计的干扰可以操纵语音或说话者识别的可行性。尽管这些攻击的目标和技术各不相同，但它们都需要添加噪声干扰。虽然这些干扰通常限制在Lp-有界邻域内，但添加的噪声不可避免地留下了人类能识别的不自然痕迹，并且可以用于防御。为了解决这个限制，我们引入了一种新的对抗性音频攻击类型，称为"Semantically Meaningful Adversarial Audio AttaCK"（SMACK），其中修改了固有的语音属性（比如韵律），使其在语义上仍然代表相同的语音并保留语音质量。我们以黑盒方式评估了SMACK对五个转录系统和两个说话者识别系统的功效。通过操纵语义属性，我们的对抗性音频示例能够逃避最先进的防御方法，在人类感知研究中与传统的Lp-有界攻击相比具有更好的语音自然度。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yu-zhiyuan-smack](https://www.usenix.org/conference/usenixsecurity23/presentation/yu-zhiyuan-smack)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yu-zhiyuan-smack.pdf](https://www.usenix.org/system/files/usenixsecurity23-yu-zhiyuan-smack.pdf)
## URET: Universal Robustness Evaluation Toolkit (for Evasion).
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#uret-universal-robustness-evaluation-toolkit-for-evasion) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#uret-universal-robustness-evaluation-toolkit-for-evasion)**
### 作者
* Kevin Eykholt, IBM Research
* Taesung Lee, IBM Research
* Douglas Schales, IBM Research
* Jiyong Jang, IBM Research
* Ian Molloy, IBM Research
* Masha Zorin, University of Cambridge
### 摘要
> 机器学习模型因易受对抗破坏攻击而脆弱，如图像分类模型所示。深入了解此类攻击对确保关键人工智能任务的安全性和鲁棒性至关重要。然而，大多数破坏攻击难以对抗大多数人工智能系统，因为它们只集中在图像领域且仅有少数限制。与实际应用中人工智能系统使用的许多其他输入类型不同，图片由同质、数值、连续和独立特征组成。此外，某些输入类型包含额外的语义和功能约束，必须遵守以生成逼真的对抗性输入。在这项工作中，我们提出了一个新的框架，可以在不考虑输入类型和任务领域的情况下生成对抗性输入。给定一个输入和一组预定义的输入转换方式，我们的框架发现一系列变换，从而生成一个语义正确和功能良好的对抗性输入。我们展示了我们的方法在几个不同的机器学习任务上的广泛适用性，涵盖了各种不同的输入表示。我们还展示了生成对抗性示例的重要性，因为它们使减轻技术的部署成为可能。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/eykholt](https://www.usenix.org/conference/usenixsecurity23/presentation/eykholt)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-eykholt.pdf](https://www.usenix.org/system/files/usenixsecurity23-eykholt.pdf)
## Authenticated private information retrieval.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#authenticated-private-information-retrieval) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#authenticated-private-information-retrieval)**
### 作者
* Simone Colombo, EPFL
* Kirill Nikitin, Cornell Tech
* Henry Corrigan-Gibbs, MIT
* David J. Wu, UT Austin
* Bryan Ford, EPFL
### 摘要
> 本论文介绍了认证私密信息检索的协议。这些方案使得客户能够从远程数据库服务器获取一条记录，以使（a）服务器不知道客户读取了哪条记录，（b）客户可以获得“真实”记录或者发现服务器的错误行为并安全中止。这两个属性对于许多应用程序来说非常重要。标准的私密信息检索方案要么无法确保这种输出的真实性，要么需要多个数据库副本并且具有诚实的大多数。相反，我们提供了多服务器方案，只要其中一个服务器是诚实的，就能保护安全性。此外，如果客户可以在数据外获得数据库的简短摘要，那么我们的方案只需要一个服务器。在使用两个非共谋的服务器对OpenPGP密钥服务器的包含350万密钥（3 GiB）的数据库进行认证私密PGP公钥查找时，计算时间只需要不到1.2个核秒，基本与未经认证的私密信息检索所需的时间相匹配。我们的认证单服务器方案比最先进的未经认证单服务器方案更加昂贵30-100倍，但它们实现了无可比拟的强健完整性属性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/colombo](https://www.usenix.org/conference/usenixsecurity23/presentation/colombo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-colombo.pdf](https://www.usenix.org/system/files/usenixsecurity23-colombo.pdf)
## Don't be Dense: Efficient Keyword PIR for Sparse Databases.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#dont-be-dense-efficient-keyword-pir-for-sparse-databases) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#dont-be-dense-efficient-keyword-pir-for-sparse-databases)**
### 作者
* Sarvar Patel, Google
* Joon Young Seo, Google
* Kevin Yeo, Google and Columbia University
### 摘要
> 在本文中，我们介绍了SparsePIR，一种能够查询稀疏数据库的单服务器关键词私人信息检索（PIR）构建。SparsePIR的核心是一种新颖的编码算法，可以将稀疏数据库条目编码为线性组合，并且与包括递归在内的重要PIR优化相兼容。与不需要长期客户端存储线性大小映射的最先进关键词PIR方案相比，SparsePIR实现的响应开销仅为其一半。我们还介绍了两个变体SparsePIRg和SparsePIRc，进一步减小了服务数据库的大小，但代价是增加了编码时间和小额的客户端存储。我们的框架使得关键词PIR的成本基本与标准PIR相同。最后，我们还展示了SparsePIR可以用于构建批处理关键词PIR，其响应开销减半，而无需任何客户端映射。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/patel](https://www.usenix.org/conference/usenixsecurity23/presentation/patel)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-patel.pdf](https://www.usenix.org/system/files/usenixsecurity23-patel.pdf)
## GigaDORAM: Breaking the Billion Address Barrier.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#gigadoram-breaking-the-billion-address-barrier) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#gigadoram-breaking-the-billion-address-barrier)**
### 作者
* Brett Falk, University of Pennsylvania
* Rafail Ostrovsky, University of California, Los Angeles
* Matan Shtepel, University of California, Los Angeles
* Jacob Zhang, University of California, Los Angeles
### 摘要
> 我们设计并实现了GigaDORAM，一种新颖的三服务器分布式遗忘式随机存取内存（DORAM）协议。遗忘式RAM允许客户端在不受信任的服务器上读写内存，同时确保服务器本身对客户端的访问模式一无所知。分布式遗忘式RAM（DORAM）允许一组服务器高效地访问一个秘密共享索引下的秘密共享数组。
> 
> 最近一代的DORAM实现（如FLORAM、DuORAM）专注于基于函数秘密共享（FSS）构建DORAM协议。这些协议通信复杂度和轮数复杂度较低，但服务器的计算复杂度是线性的。因此，它们适用于中等大小的数据库，但在一定规模上，这些基于FSS的协议变得计算效率低下。
> 
> 在本研究中，我们引入了GigaDORAM，一种基于分层解决方案的DORAM，具有多对数级别的计算和通信复杂度，并与之前的分层DORAM协议相比，每个查询的轮数减少了100倍以上。在我们的实现中，我们展示了对于中等到大型数据库，其中基于FSS的解决方案变得计算受限时，我们的协议比现有最佳DORAM协议更高效。当N = 231时，我们的DORAM每秒能执行超过700个查询。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/falk](https://www.usenix.org/conference/usenixsecurity23/presentation/falk)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-falk.pdf](https://www.usenix.org/system/files/usenixsecurity23-falk.pdf)
## One Server for the Price of Two: Simple and Fast Single-Server Private Information Retrieval.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#one-server-for-the-price-of-two-simple-and-fast-single-server-private-information-retrieval) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#one-server-for-the-price-of-two-simple-and-fast-single-server-private-information-retrieval)**
### 作者
* Alex, MIT
* ra Henzinger, MIT
* Matthew M. Hong, MIT
* Henry Corrigan-Gibbs, MIT
* Sarah Meiklejohn, Google
* Vinod Vaikuntanathan, MIT
### 摘要
> 我们提出了SimplePIR，这是迄今为止已知的最快的单服务器私人信息检索方案。 SimplePIR的安全性基于学习与错误假设。为了回答客户的查询，SimplePIR服务器每个数据库字节执行少于一个32位乘法和一个32位加法。 SimplePIR实现了10 GB / s /核的服务器吞吐量，接近机器的内存带宽和最快的两个服务器私人信息检索方案的性能（需要非串通的服务器）。 SimplePIR的通信成本相对较高：为了对1 GB数据库进行查询，客户端必须下载一个大约121 MB的数据库内容的"提示"；此后，客户端可以进行无限数量的查询，每个查询需要242 KB的通信。我们提出了第二个单服务器方案DoublePIR，它将提示缩小到16 MB，但查询的通信成本稍高（345 KB），吞吐量稍低（7.4 GB / s /核）。最后，我们将我们的新的私人信息检索方案与一种新颖的近似集合成员数据结构应用于证书透明性的私人审计任务。我们实现了比Google Chrome当前方法严格更强的隐私概念，通信量增加了13倍：每周下载16 MB，以及每个TLS连接1.5 KB。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/henzinger](https://www.usenix.org/conference/usenixsecurity23/presentation/henzinger)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-henzinger.pdf](https://www.usenix.org/system/files/usenixsecurity23-henzinger.pdf)
## Duoram: A Bandwidth-Efficient Distributed ORAM for 2- and 3-Party Computation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#duoram-a-bandwidth-efficient-distributed-oram-for-2-and-3-party-computation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#duoram-a-bandwidth-efficient-distributed-oram-for-2-and-3-party-computation)**
### 作者
* Adithya Vadapalli, University of Waterloo
* Ryan Henry, University of Calgary
* Ian Goldberg, University of Waterloo
### 摘要
> 我们设计、分析并实现了Duoram，一种快速且带宽效率高的分布式ORAM协议，适用于安全的两方和三方计算场景。在Doerner和shelat的Floram构造（CCS 2017）的基础上，Duoram利用（2,2）-分布点函数（DPFs）来紧凑表示PIR和PIR写入查询，但又采用了许多创新技术，在通信成本的渐近减少和实际性能方面取得了显著的加速效果，即使对于尺寸适中的实例也是如此。具体而言，Duoram引入了一种新颖的方法，可以使用仅对数长度的通信来评估某些秘密共享向量的点积。因此，对于具有n个可寻址位置的存储器，Duoram可以使用仅为O(mlgn)的通信字数执行一系列m个任意交错的读写操作，而Floram需要O(m√n)个字。此外，大部分工作可以在数据独立的预处理阶段完成，为序列留下仅为O(m)个字的在线通信成本，即每次内存访问的固定在线通信成本。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/vadapalli](https://www.usenix.org/conference/usenixsecurity23/presentation/vadapalli)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-vadapalli.pdf](https://www.usenix.org/system/files/usenixsecurity23-vadapalli.pdf)
## A Peek into the Metaverse: Detecting 3D Model Clones in Mobile Games.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-peek-into-the-metaverse-detecting-3d-model-clones-in-mobile-games) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-peek-into-the-metaverse-detecting-3d-model-clones-in-mobile-games)**
### 作者
* Chaoshun Zuo, The Ohio State University
* Chao Wang, The Ohio State University
* Zhiqiang Lin, The Ohio State University
### 摘要
> 3D模型在元宇宙和移动游戏中都是不可或缺的资产。然而，这些3D模型可以轻易地被提取、复制或克隆，这构成了一个相当大的威胁。虽然有文献记录了游戏复制其他游戏的3D模型的情况，但这个问题的普遍性尚未被探索。本文对移动游戏中的3D模型克隆进行了首次系统调查。然而，克隆检测面临着诸多挑战，包括可扩展性、精确性和稳健性。我们提出了一个解决方案——3DSCAN，这是一个用于克隆评估和通知的开源3D扫描工具。我们使用了约1220万个静态3D模型和250万个动画3D模型，这些模型来自17.6万个移动游戏。通过3DSCAN，我们发现63.03%的静态模型很可能是克隆的（派生自1046632个不同的模型），而37.07%的动画3D模型很可能是克隆的（派生自180174个独特的模型）。通过基于启发式的克隆检测算法，3DSCAN最终检测到5238个移动游戏中可能存在未经授权的3D模型克隆。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zuo](https://www.usenix.org/conference/usenixsecurity23/presentation/zuo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zuo.pdf](https://www.usenix.org/system/files/usenixsecurity23-zuo.pdf)
## PATROL: Provable Defense against Adversarial Policy in Two-player Games.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#patrol-provable-defense-against-adversarial-policy-in-two-player-games) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#patrol-provable-defense-against-adversarial-policy-in-two-player-games)**
### 作者
* Wenbo Guo, UC Berkeley
* Xian Wu, Northwestern University
* Lun Wang, UC Berkeley
* Xinyu Xing, Northwestern University
* Dawn Song, UC Berkeley
### 摘要
> 近年来，深度强化学习（DRL）的最新进展将人工智能提升到了一个新的水平，从仅仅做出个体决策转变为通过顺序决策来完成复杂任务，例如在各种游戏中击败世界级人类选手以及在股票市场上做出实时交易决策。在这些成就之后，我们最近见证了一种专门针对DRL的新攻击。最新的研究表明，通过学习和控制对抗性代理/策略，攻击者可以快速发现受害代理的弱点，从而迫使其任务失败。
> 
> 由于威胁模型的差异，目前大多数针对深度神经网络（DNN）提出的防御方法不能迁移到抵御对抗性策略攻击的强化策略培训中。在本研究中，我们从经典博弈论中获得启示，并提出了针对两人对抗游戏中此类攻击的首个可证明的防御方法。从技术上讲，我们首先将强化策略培训问题建模为在整个策略空间中寻找纳什均衡（NE）点。然后，我们设计了一种新颖的策略培训方法来在复杂的DRL任务中寻找NE点。最后，我们在理论上证明了我们提出的方法可以保证训练代理对任意对抗性策略攻击的性能下界。通过广泛的评估，我们证明了我们的方法在对抗鲁棒性和非对抗环境中的性能上明显优于现有的策略培训方法。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/guo-wenbo](https://www.usenix.org/conference/usenixsecurity23/presentation/guo-wenbo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-guo-wenbo.pdf](https://www.usenix.org/system/files/usenixsecurity23-guo-wenbo.pdf)
## The Blockchain Imitation Game.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-blockchain-imitation-game) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-blockchain-imitation-game)**
### 作者
* Kaihua Qin, Imperial College London, RDI
* Stefanos Chaliasos, Imperial College London
* Liyi Zhou, Imperial College London, RDI
* Benjamin Livshits, Imperial College London
* Dawn Song, UC Berkeley, RDI
* Arthur Gervais, University College London, RDI
### 摘要
> 区块链在自动化和对抗性交易中的使用已经变得司空见惯。然而，由于区块链的透明性，对手能够观察任何待处理且尚未被挖掘的交易以及其执行逻辑。这种透明性进一步使一种新类型的对手得以利用，即实时复制和抢先盈利的待处理交易，从而获得重大的财务收益。
> 
> 为了揭示这种“复制-粘贴”作弊行为，本文介绍了区块链模仿游戏，并提出了一种名为Ape的广义模仿攻击方法。Ape利用动态程序分析技术，支持对敌对智能合约进行自动合成。在2021年8月1日至2022年7月31日期间，Ape在以太坊上可能产生了1.4896亿美元的利润，在BNB智能链（BSC）上产生了4,270万美元的利润。
> 
> 我们不仅展示了交易和合约模仿作为一种恶意攻击，还进一步展示了其作为一种防御策略的潜力。在一年的时间内，我们发现Ape在以太坊和BSC上分别成功模仿了13次和22次已知的DeFi攻击。我们的发现表明，区块链验证者可以实时模仿攻击以防止DeFi的入侵。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/qin](https://www.usenix.org/conference/usenixsecurity23/presentation/qin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-qin.pdf](https://www.usenix.org/system/files/usenixsecurity23-qin.pdf)
## It's all in your head(set): Side-channel attacks on AR/VR systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#its-all-in-your-head-set-side-channel-attacks-on-ar-vr-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#its-all-in-your-head-set-side-channel-attacks-on-ar-vr-systems)**
### 作者
* Yicheng Zhang, University of California, Riverside
* Carter Slocum, University of California, Riverside
* Jiasi Chen, University of California, Riverside
* Nael Abu-Ghazaleh, University of California, Riverside
### 摘要
> 随着增强现实/虚拟现实（AR / VR）系统的日益普及，安全和隐私问题引起了学术界和行业的关注。本文证明了AR / VR系统容易受到来自软件的侧信道攻击；恶意应用程序可以推测用户交互、其他并发应用程序甚至周围世界的私人信息，而无需任何特殊权限。我们开发了一系列针对不同类型私人信息的侧信道攻击。具体来说，我们演示了三种针对受害者交互的攻击，成功地恢复了受害者的手势、语音命令以及虚拟键盘上的按键，准确度超过90％。我们还展示了一种应用指纹识别攻击，窃密者能够识别出受害者启动的应用程序。最后一种攻击证明了对手可以感知到现实世界环境中的旁观者，并估计旁观者的距离，平均绝对误差（MAE）为10.3厘米。我们相信我们的攻击所展示的威胁非常紧迫；它们扩展了我们对这些新兴系统面临的威胁模型的理解，并为开发能够抵御这些威胁的新的AR / VR系统提供了信息。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-yicheng](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-yicheng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-yicheng.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-yicheng.pdf)
## Egg Hunt in Tesla Infotainment: A First Look at Reverse Engineering of Qt Binaries.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#egg-hunt-in-tesla-infotainment-a-first-look-at-reverse-engineering-of-qt-binaries) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#egg-hunt-in-tesla-infotainment-a-first-look-at-reverse-engineering-of-qt-binaries)**
### 作者
* Haohuang Wen, The Ohio State University
* Zhiqiang Lin, The Ohio State University
### 摘要
> 作为最流行的C++扩展之一，用于开发基于图形用户界面（GUI）的应用程序，Qt已被广泛应用于桌面、移动、物联网、汽车等领域。尽管现有的二进制分析平台（如angr和Ghidra）可以帮助逆向工程Qt二进制文件，但它们仍然需要解决许多基本挑战，如恢复控制流图和符号。在本文中，我们首次探讨了Qt二进制分析中的独特挑战和机会，开发了支持技术，并展示了新颖的应用。特别是，尽管回调函数使得控制流恢复变得困难，但我们注意到Qt的信号和槽机制可以用于恢复函数回调。更有趣的是，Qt独特的动态内省也可以重新用于恢复语义符号。基于这些洞察力，我们为Qt二进制文件开发了用于函数回调和语义符号恢复的QtRE。我们已经使用两套Qt二进制代码对QtRE进行了测试：Linux KDE和特斯拉Model S固件，其中QtRE还从123个二进制文件中恢复了10,867个回调实例和24,973个语义符号，这些无法被现有工具识别。我们展示了使用QtRE从特斯拉Model S固件中提取隐藏命令的新应用。QtRE发现了12个隐藏命令，其中包括五个对公众不知情的命令，这些命令潜在地可以被利用来操纵车辆设置。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wen](https://www.usenix.org/conference/usenixsecurity23/presentation/wen)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wen.pdf](https://www.usenix.org/system/files/usenixsecurity23-wen.pdf)
## Reusable Enclaves for Confidential Serverless Computing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#reusable-enclaves-for-confidential-serverless-computing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#reusable-enclaves-for-confidential-serverless-computing)**
### 作者
* Shixuan Zhao, The Ohio State University
* Pinshen Xu, Southern University of Science and Technology
* Guoxing Chen, Shanghai Jiao Tong University
* Mengya Zhang, The Ohio State University
* Yinqian Zhang, Southern University of Science and Technology
* Zhiqiang Lin, The Ohio State University
### 摘要
> 最近对可信执行环境的发展为基于云的系统中的保密计算带来了前所未有的机会。在各种流行的云业务模型中，无服务器计算自其出现以来已获得主导地位，从而对基于可信飞地的保密无服务器计算服务需求量很高。然而，冷启动开销的问题显著阻碍了其性能，因为需要创建新的飞地以确保一个干净和可验证的执行环境。在本文中，我们提出了一种构建可重用飞地的新方法，该方法通过三个关键的启用技术实现了飞地快照和回滚、嵌套认证和多层飞地内分区的强大安全性。我们已经构建了一个保密无服务器计算的原型系统，将OpenWhisk和WebAssembly运行时集成在一起，在端到端的无服务器环境中显著减少了冷启动开销，同时对标准执行施加了合理的性能影响。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhao-shixuan](https://www.usenix.org/conference/usenixsecurity23/presentation/zhao-shixuan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhao-shixuan.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhao-shixuan.pdf)
## EnigMap: External-Memory Oblivious Map for Secure Enclaves.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#enigmap-external-memory-oblivious-map-for-secure-enclaves) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#enigmap-external-memory-oblivious-map-for-secure-enclaves)**
### 作者
* Afonso Tinoco, CMU
* Sixiang Gao, CMU
* Elaine Shi, CMU
### 摘要
> 假设一个注重隐私的客户想要查询一个存储在不可信服务器上的键值存储系统，该服务器配备了安全处理器。为了保护客户的查询隐私和数据库隐私，一种方法是在安全飞地内部实现一个遗忘映射。的确，早期的研究展示了安全飞地内部遗忘映射的许多应用，包括私密联系人发现、密钥透明度和安全外包数据库。
> 
> 我们的工作受到先前遗忘算法在飞地中实现无论是渐近优化还是具体优化方面都不够理想的观察的启发。我们得出了这样的关键观察结果：对于飞地应用，页面交换的次数应该是主要的性能指标。因此，我们采用了来自外部存储算法文献的技术，并且我们是第一个在硬件飞地内部实现这种算法的人。我们还设计了渐近优化的算法来确保一个对抗缓存时间攻击的强遗忘概念。我们通过各种具体的优化来补充我们的算法改进，在实践中节省了常数倍的开销。所得到的名为ENIGMAP的系统，在实际数据库大小为2.56亿和批处理大小为1000的情况下，比Signal的线性扫描实现提速了15倍，并且比先前最佳遗忘算法实现提速了53倍。这种速度提升在性质上是渐近的，并且随着Signal的用户群体增长将会更大。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/tinoco](https://www.usenix.org/conference/usenixsecurity23/presentation/tinoco)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-tinoco.pdf](https://www.usenix.org/system/files/usenixsecurity23-tinoco.pdf)
## AEX-Notify: Thwarting Precise Single-Stepping Attacks through Interrupt Awareness for Intel SGX Enclaves.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#aex-notify-thwarting-precise-single-stepping-attacks-through-interrupt-awareness-for-intel-sgx-enclaves) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#aex-notify-thwarting-precise-single-stepping-attacks-through-interrupt-awareness-for-intel-sgx-enclaves)**
### 作者
* Scott Constable, Intel Corporation
* Jo Van Bulck, imec-DistriNet, KU Leuven
* Xiang Cheng, Georgia Institute of Technology
* Yuan Xiao, Intel Corporation
* Cedric Xing, Intel Corporation
* Ilya Alex, Intel Corporation
* rovich, Intel Corporation
* Taesoo Kim, Georgia Institute of Technology
* Frank Piessens, imec-DistriNet, KU Leuven
* Mona Vij, Intel Corporation
* Mark Silberstein, Technion
### 摘要
> Intel®软件保护扩展（Intel® SGX）支持在非特权进程中创建受保护的飞地。虽然飞地在体系结构上受到恶意系统软件的保护，但是Intel SGX的特权攻击模式可能会使飞地面临新的强大的侧信道攻击。在本文中，我们考虑硬件软件协同设计对一类重要的单步攻击的对策，这些攻击使用特权定时中断以逐一指令方式精确执行飞地操作，正如开源SGX-Step框架所支持的那样。这是一种功能强大的确定性攻击原语，已在广泛的高分辨率Intel SGX攻击中使用，但至今还未得到缓解。
> 
> 我们提出了AEX-Notify，这是一种灵活的硬件ISA扩展，使飞地可以感知中断：飞地可以注册一个可信的处理程序，在中断或异常之后运行。AEX-Notify可用作在软件中实施针对不同类型基于中断的攻击的对策的构建模块。我们的主要目标是阻止确定性单步攻击，首先诊断底层硬件行为以确定造成攻击的根本原因。然后，我们应用所学到的见解通过构建高效的软件处理程序和常时间解码器来消除这个根本原因，以透明地确定和原子地预取下一个飞地应用指令的工作集。
> 
> 我们在本文中提出的ISA扩展已经纳入了修订版的Intel SGX规范中。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/constable](https://www.usenix.org/conference/usenixsecurity23/presentation/constable)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-constable.pdf](https://www.usenix.org/system/files/usenixsecurity23-constable.pdf)
## Controlled Data Races in Enclaves: Attacks and Detection.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#controlled-data-races-in-enclaves-attacks-and-detection) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#controlled-data-races-in-enclaves-attacks-and-detection)**
### 作者
* Sanchuan Chen, Fordham University
* Zhiqiang Lin, The Ohio State University
* Yinqian Zhang, Southern University of Science and Technology
### 摘要
> 本文介绍了受控数据竞争攻击，一种针对由受信任执行环境（如Intel SGX）保护的程序的新型攻击类别。受控数据竞争攻击类似于受控通道攻击，在这种攻击中，攻击者控制底层操作系统，并操纵飞地线程的调度以及中断和异常的处理。受控数据竞争攻击具有两个特别重要的原因：首先，传统上非确定性数据竞争错误可以被确定性地触发，并在SGX飞地的上下文中被利用以进行安全违规。其次，攻击者可以并发地调用一个本意上是单线程的飞地，这会触发在传统环境中不会发生的唯一交织模式。为了检测现实世界的飞地二进制代码（包括与SGX库链接的代码）中的受控行程漏洞，我们提出了一种基于锁集的二进制分析检测算法。我们已经在一个名为SGXRacer的工具中实现了我们的算法，并使用四个SGX SDK和八个开源SGX项目进行了评估，识别出1760个源自476个共享变量的数据竞争。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-sanchuan](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-sanchuan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-sanchuan.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-sanchuan.pdf)
## Guarding Serverless Applications with Kalium.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#guarding-serverless-applications-with-kalium) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#guarding-serverless-applications-with-kalium)**
### 作者
* Deepak Sirone Jegan, University of Wisconsin-Madison
* Liang Wang, Princeton University
* Siddhant Bhagat, Microsoft
* Michael Swift, University of Wisconsin-Madison
### 摘要
> 作为一种新兴的应用范式，无服务器计算吸引了越来越多的对手的关注。不幸的是，传统网络应用的安全工具无法轻易迁移到无服务器计算，因为它具有分布式特性，而现有的无服务器安全解决方案专注于实施用户指定的信息流策略，无法检测应用控制流路径中的函数顺序操纵。在本文中，我们提出了Kalium，一个可扩展的安全框架，利用本地函数状态和全局应用状态来强制无服务器应用程序的控制流完整性（CFI）。我们使用现实的开源应用程序评估了Kalium的性能开销和安全性；我们的结果表明，Kalium能够减轻几类攻击并具有相对较低的性能开销，并超越了最先进的无服务器信息流保护系统。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/jegan](https://www.usenix.org/conference/usenixsecurity23/presentation/jegan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-jegan.pdf](https://www.usenix.org/system/files/usenixsecurity23-jegan.pdf)
## "To Do This Properly, You Need More Resources": The Hidden Costs of Introducing Simulated Phishing Campaigns.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#to-do-this-properly-you-need-more-resources-the-hidden-costs-of-introducing-simulated-phishing-campaigns) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#to-do-this-properly-you-need-more-resources-the-hidden-costs-of-introducing-simulated-phishing-campaigns)**
### 作者
* Lina Brunken, Ruhr University Bochum
* Annalina Buckmann, Ruhr University Bochum
* Jonas Hielscher, Ruhr University Bochum
* M. Angela Sasse, Ruhr University Bochum
### 摘要
> 许多组织使用钓鱼模拟攻击来提高并衡量员工的安全意识。他们可以自行创建攻击，也可以从商业供应商购买钓鱼服务；然而，针对降低这类攻击的脆弱性效果的评估结果参差不齐。最近，研究人员指出了“隐藏成本”——例如生产力下降和员工信任减少。尚未调查的是准备组织进行模拟钓鱼攻击所需的成本。我们提供了第一个组织在选择和购买钓鱼模拟攻击过程中的案例研究。我们记录并分析了参与其中的不同利益相关者的工作量，并在采购过程结束时通过半结构化面谈与6名关键参与者进行反思。我们的数据分析显示，采购这类模拟攻击可能需要来自不同利益相关者的重大努力——在我们的案例中，至少需要投入5万欧元的工时，并带来许多隐藏的无形成本。评估产品或服务是否符合培训要求，是否可接受员工，并准备技术基础设施和运营流程来运行该产品都需要大量的时间和努力。普遍认为钓鱼模拟攻击是向员工提供安全培训的快速低成本解决方案的看法需要受到挑战。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/brunken](https://www.usenix.org/conference/usenixsecurity23/presentation/brunken)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-brunken.pdf](https://www.usenix.org/system/files/usenixsecurity23-brunken.pdf)
## You've Got Report: Measurement and Security Implications of DMARC Reporting.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#youve-got-report-measurement-and-security-implications-of-dmarc-reporting) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#youve-got-report-measurement-and-security-implications-of-dmarc-reporting)**
### 作者
* Md. Ishtiaq Ashiq, Virginia Tech
* Weitong Li, Virginia Tech
* Tobias Fiebig, Max-Planck-Institut für Informatik
* Taejoong Chung, Virginia Tech
### 摘要
> 电子邮件自问世以来，已成为广泛应用的通信系统，SMTP是互联网上的电子邮件传输标准。然而，SMTP缺乏内置的安全功能，如发送者验证，使其易受攻击，包括发件人欺骗。为了解决欺骗威胁，提出了几种安全扩展，如SPF或DKIM。基于域名的消息认证报告和合规性（DMARC）于2012年引入，作为域名所有者通过DNS记录发布所需操作以供电子邮件接收方执行的方式，如果SPF或DKIM验证失败。DMARC记录还可以要求电子邮件接收方将机器生成的报告发送回指定地址，以帮助域名所有者检测和评估伪造电子邮件的风险。然而，DMARC的复杂性为攻击者提供了可以利用的管理不善的机会。本文介绍了对DMARC报告部署和管理的大规模综合测量研究。我们收集了13个月内.com、.net、.org和.se顶级域名下所有二级域名的数据，从域名所有者的角度分析了部署和管理情况。此外，我们还调查了7个流行的电子邮件托管服务和2个开源的DMARC报告软件，以了解它们的报告实践。我们的研究揭示了DMARC报告中普遍存在的管理不善和缺乏安全考虑。例如，我们发现攻击者的一封电子邮件可以使受害者的SMTP服务器接收大量报告，并具有很高的放大因子（例如，1,460×），通过利用配置错误的SMTP服务器。根据我们对DMARC报告的几个操作配置问题的发现，我们提出了改进建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ashiq](https://www.usenix.org/conference/usenixsecurity23/presentation/ashiq)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ashiq.pdf](https://www.usenix.org/system/files/usenixsecurity23-ashiq.pdf)
## Knowledge Expansion and Counterfactual Interaction for Reference-Based Phishing Detection.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#knowledge-expansion-and-counterfactual-interaction-for-reference-based-phishing-detection) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#knowledge-expansion-and-counterfactual-interaction-for-reference-based-phishing-detection)**
### 作者
* Ruofan Liu, Shanghai Jiao Tong University and National University of Singapore
* Yun Lin, Shanghai Jiao Tong University
* Yifan Zhang, National University of Singapore
* Penn Han Lee, National University of Singapore
* Jin Song Dong, National University of Singapore
### 摘要
> 近年来，网络钓鱼攻击日益普遍，严重破坏了社会的信任。作为一种先进的防御解决方案，基于参考的网络钓鱼检测在准确性、及时性和可解释性方面表现优异。基于参考的解决方案通过分析域名品牌的一致性，利用预定义的域名和品牌表示（如标志和屏幕截图）来检测网络钓鱼网页。然而，预定义的参考在区分合法网页和未知品牌的网页方面存在局限性。当新的和新兴品牌成为攻击目标时，这个问题特别明显。
> 
> 在这项工作中，我们提出了DynaPhish作为基于参考的网络钓鱼检测的补救措施，超越了预定义的参考列表。DynaPhish假设运行时部署场景，并且（1）积极扩展动态参考列表，（2）支持检测没有品牌信息但带有令人信服的反事实解释的无品牌网页。对于前者，我们提出了一种用于验证添加参考的合法性的技术。对于后者，我们提出了一种反事实交互技术，即使没有品牌信息，也可以验证网页的合法性。为了评估DynaPhish，我们构建了目前为止最大的动态网络钓鱼数据集，其中包含6344个可交互的网络钓鱼网页。我们的实验结果表明，DynaPhish在保持精确性方面可以显著提高最先进方法的回忆率高达28％，并且几乎没有成本。我们对新兴网页进行的受控野外研究进一步表明，DynaPhish通过找到平均9倍更多的真实世界网络钓鱼网页改进了最先进的方法，并发现了许多非传统的品牌作为钓鱼目标。我们的代码可在https://github.com/code-philia/Dynaphish上获取。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/liu-ruofan](https://www.usenix.org/conference/usenixsecurity23/presentation/liu-ruofan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-liu-ruofan.pdf](https://www.usenix.org/system/files/usenixsecurity23-liu-ruofan.pdf)
## Rods with Laser Beams: Understanding Browser Fingerprinting on Phishing Pages.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#rods-with-laser-beams-understanding-browser-fingerprinting-on-phishing-pages) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#rods-with-laser-beams-understanding-browser-fingerprinting-on-phishing-pages)**
### 作者
* Isk, Norton Research Group
* er Sanchez-Rola, Norton Research Group
* Leyla Bilge, Norton Research Group
* Davide Balzarotti, EURECOM
* Armin Buescher, Crosspoint Labs
* Petros Efstathopoulos, Norton Research Group
### 摘要
> 网络钓鱼是最常见的社交工程攻击形式之一，犯罪分子每年都会利用它来入侵数百万个账户。虽然已经提出了许多解决方案来检测或预防身份盗窃，但钓鱼者不断改进他们的方法，并采用更复杂的技术。最近的一项进展是使用浏览器指纹识别技术。具体而言，指纹识别技术可以作为附加信息与被盗凭据相辅相成。事实证明，带有指纹数据的凭据在地下市场上的售价更高。
> 
> 为了了解这种现象的真实程度，我们进行了一项关于网络钓鱼生态系统的最大规模研究，分析了21个月内出现的超过170万个最新钓鱼页面。在我们的系统研究中，我们进行了详细的测量，估计了钓鱼页面中指纹识别技术的普遍性。
> 
> 我们发现，四分之一以上的钓鱼页面采用了某种形式的指纹识别技术。这似乎是一个不断增长的趋势，因为在分析期间使用这些技术的页面的百分比稳步增长（最后一个月的比例比第一个月检测到的情况翻了一倍）。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/sanchez-rola](https://www.usenix.org/conference/usenixsecurity23/presentation/sanchez-rola)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-sanchez-rola.pdf](https://www.usenix.org/system/files/usenixsecurity23-sanchez-rola.pdf)
## Content-Type: multipart/oracle - Tapping into Format Oracles in Email End-to-End Encryption.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#content-type-multipart-oracle-tapping-into-format-oracles-in-email-end-to-end-encryption) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#content-type-multipart-oracle-tapping-into-format-oracles-in-email-end-to-end-encryption)**
### 作者
* Fabian Ising, Münster University of Applied Sciences and National Research Center for Applied Cybersecurity ATHENE
* Damian Poddebniak, Münster University of Applied Sciences
* Tobias Kappert, Münster University of Applied Sciences
* Christoph Saatjohann, Münster University of Applied Sciences and National Research Center for Applied Cybersecurity ATHENE
* Sebastian Schinzel, Münster University of Applied Sciences and National Research Center for Applied Cybersecurity ATHENE
### 摘要
> S/MIME和OpenPGP在诸如TLS、SSH或IKE等协议中多次使用的加密结构已经被证明容易受到格式预言攻击的影响。然而，在端到端加密（E2EE）电子邮件环境中，格式预言攻击被认为不太可行，因为受害者需要打开许多被攻击者修改过的电子邮件并将解密结果通知攻击者。但是，这真的是这样吗？
> 
> 在本论文中，我们将调查攻击者如何远程了解电子邮件E2EE中的解密状态。我们分析MIME和IMAP之间的相互作用，并描述从网络模式中泄漏解密状态的侧信道，这些侧信道出现在邮件用户代理（MUAs）中。具体地说，我们引入了特定的MIME树，当受害者的电子邮件客户端打开时，会产生依赖于解密的网络模式。
> 
> 我们调查了19款启用了OpenPGP和S/MIME的电子邮件客户端和四个加密库，并发现一个客户端泄漏了S/MIME消息的解密状态的侧信道。此外，我们讨论了为什么在其他客户端中利用这种侧信道是不可行的，并表明这是由于缺少功能支持和实现异常所致。这些意外的防御措施在可用性和安全性之间产生了不幸的冲突。我们提出了更严格的对抗措施，以防止MUA开发人员和标准的利用。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ising](https://www.usenix.org/conference/usenixsecurity23/presentation/ising)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ising.pdf](https://www.usenix.org/system/files/usenixsecurity23-ising.pdf)
## PET: Prevent Discovered Errors from Being Triggered in the Linux Kernel.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#pet-prevent-discovered-errors-from-being-triggered-in-the-linux-kernel) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#pet-prevent-discovered-errors-from-being-triggered-in-the-linux-kernel)**
### 作者
* Zicheng Wang, Nanjing University
* Yueqi Chen, University of Colorado Boulder
* Qingkai Zeng, Nanjing University
### 摘要
> Linux内核是现代社会的支柱。当发现内核错误时，需要快速纠正。虽然卫生器极大地促进了根本原因的诊断，但修复错误需要很长时间，导致已发现的错误仍被利用。在这项工作中，我们提出了PET，这是一种临时解决方案，可以在补丁可用之前防止已发现的错误被触发和利用。
> 
> 从技术上讲，PET以卫生器报告为输入，构建可在运行时评估的触发条件。如果满足条件，PET将采取一系列措施来防止错误触发。PET被设计成可扩展到各种错误类型。在我们的实验证明了PET对最先进的卫生器可报告的五种常见错误的有效性。PET是轻量级的，性能开销不到3%。此外，PET在存在多个错误的情况下具有可扩展性，内存占用量可接受。在错误被预防后，内核在密集使用后已经稳定运行了3个多月。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-zicheng](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-zicheng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-zicheng.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-zicheng.pdf)
## A Hybrid Alias Analysis and Its Application to Global Variable Protection in the Linux Kernel.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-hybrid-alias-analysis-and-its-application-to-global-variable-protection-in-the-linux-kernel) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-hybrid-alias-analysis-and-its-application-to-global-variable-protection-in-the-linux-kernel)**
### 作者
* Guoren Li, University of California, Riverside
* Hang Zhang, Georgia Institute of Technology
* Jinmeng Zhou, Zhejiang University
* Wenbo Shen, Zhejiang University
* Yulei Sui, University of New South Wales
* Zhiyun Qian, University of California, Riverside
### 摘要
> Linux内核中的全局变量往往成为实现特权升级的内存破坏攻击的常见目标。可以采用几种潜在的防御机制来保护全局变量。其中一种方法是在内核初始化后将全局变量放置在只读页面中（ro_after_init），另一种方法是采用软件故障隔离（SFI）来动态阻止对这些变量的意外写入。为了在实践中实施这些解决方案，关键的基石是一个健全、准确且可扩展的别名分析，能够识别出全局变量的所有指针别名，因为任何指针别名都可能被用于对全局变量的有意写入。不幸的是，两种现有的基于数据流（例如Andersen风格）的别名分析和基于类型的别名分析在应用于Linux内核时具有严重的可扩展性和准确性局限性。
> 
> 本文提出了一种新颖且普适的混合别名分析方法，将两种互补的方法统一到一个图可达性框架中，使用上下文无关语言（CFL-reachability）进行分析。我们展示了我们的混合别名分析极其有效，在可扩展性上显著且同时优于基于数据流的别名分析，在准确性上也优于基于类型的别名分析。在相同的时间预算下，我们的混合分析发现了42%的Linux内核全局变量可以通过ro_after_init进行保护，而两种分析只能找到合并后的16%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-guoren](https://www.usenix.org/conference/usenixsecurity23/presentation/li-guoren)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-guoren.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-guoren.pdf)
## AlphaEXP: An Expert System for Identifying Security-Sensitive Kernel Objects.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#alphaexp-an-expert-system-for-identifying-security-sensitive-kernel-objects) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#alphaexp-an-expert-system-for-identifying-security-sensitive-kernel-objects)**
### 作者
* Ruipeng Wang, National University of Defense Technology
* Kaixiang Chen, Tsinghua University
* Chao Zhang, Tsinghua University
* Zulie Pan, National University of Defense Technology
* Qianyu Li, National University of Defense Technology
* Siliang Qin, University of Chinese Academy of Sciences
* Shenglin Xu, National University of Defense Technology
* Min Zhang, National University of Defense Technology
* Yang Li, National University of Defense Technology
### 摘要
> 内存破坏漏洞经常被利用来破坏敏感对象并发起攻击。缓解此类威胁的一种高效方式是识别和保护这些敏感对象免受破坏。然而，目前仍然存在一个开放性问题，即什么样的对象是安全敏感的，以及它们有多敏感。本文介绍了基于专家系统的解决方案AlphaEXP，它是首个用于识别安全敏感对象的解决方案，在一个特定且重要的目标——Linux内核中应用。它通过模拟对手来评估一个对象是否可以被滥用以获取意外的能力并促成攻击，并在满足条件时将其标记为敏感。具体而言，AlphaEXP首先构建一个知识图谱来表示内核的相关事实，包括对象、函数及其关系等。然后，它探索知识图谱以推断给定漏洞的潜在攻击路径，并将在攻击路径中使用的对象标记为敏感。最后，它在一个定制的模拟系统中评估攻击路径的可行性，并相应分类对象的敏感程度。我们构建了一个AlphaEXP的原型，并对84个合成的代表性漏洞和19个真实世界漏洞进行了评估，以识别敏感的内核对象。AlphaEXP成功生成了大多数这些漏洞的攻击路径，并找到了50个可能被滥用的具有写入能力的对象、81个具有读取能力的对象以及112个具有执行能力的对象。AlphaEXP将它们分类为12个敏感级别。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-ruipeng](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-ruipeng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-ruipeng.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-ruipeng.pdf)
## Mitigating Security Risks in Linux with KLAUS: A Method for Evaluating Patch Correctness.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#mitigating-security-risks-in-linux-with-klaus-a-method-for-evaluating-patch-correctness) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#mitigating-security-risks-in-linux-with-klaus-a-method-for-evaluating-patch-correctness)**
### 作者
* Yuhang Wu, Northwestern University
* Zhenpeng Lin, Northwestern University
* Yueqi Chen, University of Colorado Boulder
* Dang K Le, Northwestern University
* Dongliang Mu, Huazhong University of Science and Technology
* Xinyu Xing, Northwestern University
### 摘要
> Linux内核的增长每天引入着常常利用代码分析器进行检测和消除的错误。然而，创建准确的Linux补丁仍然具有挑战性，并且存在安全风险。为了解决这个问题，我们手动分析了182个开发不正确的Linux内核补丁，并发现这些不准确性通常是由于补丁对变量读写操作的改变而引起的。基于这一发现，我们创建了KLAUS，一种评估补丁质量的新方法。
> 
> KLAUS利用抽象解释来提取由于补丁在Linux内核中引起的修改的读写操作。它将这些修改与解决分支的机制相结合，以引导内核模糊器指向相关的代码和上下文。在众多实际的Linux内核补丁上测试KLAUS表明它在检测开发不正确的补丁方面具有卓越的有效性和效率。到目前为止，KLAUS已经向Linux社区报告了30个不正确的补丁，其中一些可能会导致Android和Ubuntu系统的权限升级。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wu-yuhang](https://www.usenix.org/conference/usenixsecurity23/presentation/wu-yuhang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wu-yuhang.pdf](https://www.usenix.org/system/files/usenixsecurity23-wu-yuhang.pdf)
## Detecting Union Type Confusion in Component Object Model.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#detecting-union-type-confusion-in-component-object-model) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#detecting-union-type-confusion-in-component-object-model)**
### 作者
* Yuxing Zhang, East China Normal University
* Xiaogang Zhu, Swinburne University of Technology
* Daojing He, East China Normal University; Harbin Institute of Technology, Shenzhen
* Minhui Xue, CSIRO's Data61
* Shouling Ji, Zhejiang University
* Mohammad Sayad Haghighi, Swinburne University of Technology
* Sheng Wen, Swinburne University of Technology
* Zhiniang Peng, Sangfor Technologies Inc.
### 摘要
> 组件对象模型（Component Object Model，COM）是由Microsoft于1993年引入的用于软件组件的二进制接口标准。即使在其首次发布后的30年后，COM仍然是支持Microsoft许多其他核心技术的基础。COM开发人员在编码中使用了许多联合体（unions）而不是结构体（structs），以节约遗留计算机中的内存。然而，过度使用联合体架构很可能导致类型混淆漏洞，这些漏洞可以被100%可靠的攻击利用。根据我们的研究，联合体类型混淆问题长期被忽视，并且尚未为使用COM的现成系统开发解决方案。
> 
> 在本文中，我们提出了COMFUSION，这是第一个用于检测COM中联合体类型混淆的工具。关键在于推断COM二进制文件中的联合体变量及其鉴别器。这是具有挑战性的，因为现有的类型恢复技术不支持二进制文件中的联合体类型。为了解决这个问题，COMFUSION通过使用Microsoft Interface Definition Language（MIDL）文件进行污点传播来识别联合体变量，然后通过符号执行来搜索联合体类型混淆。我们在三个流行的Windows操作系统版本上评估了COMFUSION，包括Windows 10 1809、Windows 10 21H2和Windows 11 21H2。COMFUSION成功发现了36个联合体类型混淆。其中，已确认19个类型混淆能够破坏内存，暴露了4个已确认的CVE漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-yuxing](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-yuxing)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-yuxing.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-yuxing.pdf)
## Network Detection of Interactive SSH Impostors Using Deep Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#network-detection-of-interactive-ssh-impostors-using-deep-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#network-detection-of-interactive-ssh-impostors-using-deep-learning)**
### 作者
* Julien Piet, UC Berkeley and Corelight
* Aashish Sharma, Lawrence Berkeley National Laboratory
* Vern Paxson, Corelight and UC Berkeley
* David Wagner, UC Berkeley
### 摘要
> 假冒者窃取用户的SSH登录凭据可能对用户远程访问的系统造成重大伤害。我们考虑了在假冒者进行交互式SSH登录时，通过检测客户端数据包的时间和大小的差异来识别此类假冒者的问题，这通常反映了通过连接发送击键的人的打字动态。
> 
> 迄今为止，使用未知自由形式文本的击键认证问题的研究规模有限。我们基于使用转换器（来自ML深度学习文献的序列模型）和一个自定义的“分区层”的监督方法来解决这个问题，一旦训练完成，该方法将客户端数据包时间和长度的序列以及一个所声称的用户标签作为输入，并输出一个关于该序列是否确实对应该用户的决策。我们在一家大型研究机构的5年标记的SSH PCAP（涵盖3,900个用户）上评估了该模型。虽然性能具体因训练水平而异，我们发现在所有情况下，该模型在连接的前几分钟内能够捕捉到超过95％的（注入的）冒名顶替者，同时每天产生的误报数量可控。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/piet](https://www.usenix.org/conference/usenixsecurity23/presentation/piet)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-piet.pdf](https://www.usenix.org/system/files/usenixsecurity23-piet.pdf)
## ARGUS: Context-Based Detection of Stealthy IoT Infiltration Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#argus-context-based-detection-of-stealthy-iot-infiltration-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#argus-context-based-detection-of-stealthy-iot-infiltration-attacks)**
### 作者
* Phillip Rieger, Technical University of Darmstadt
* Marco Chilese, Technical University of Darmstadt
* Reham Mohamed, Technical University of Darmstadt
* Markus Miettinen, Technical University of Darmstadt
* Hossein Fereidooni, Technical University of Darmstadt
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
### 摘要
> 物联网应用领域、设备多样性和连接性正在迅速增长。物联网设备在智能家居和建筑、智慧城市和智能工厂中控制各种功能，使这些设备成为攻击者的有吸引力的目标。另一方面，不同应用场景的大量变化和设备的内在异质性使得可靠检测异常的物联网设备行为并区分其与良性行为非常具有挑战性。现有的攻击检测方法大多局限于直接危害个别物联网设备的攻击，或者需要预定义的检测策略。它们无法检测到利用物联网系统的控制平面在意外/恶意上下文中触发操作的攻击，例如在居住者不在家时打开智能门锁。
> 
> 在本文中，我们解决了这个问题，并提出了ARGUS，这是第一个用于检测物联网环境中的上下文攻击的自学习入侵检测系统，攻击者恶意调用物联网设备的操作以达到其目标。ARGUS基于物联网设备的状态和操作来监视上下文设置。我们使用无监督的深度神经网络（DNN）来建模典型的上下文设备行为，并检测异常上下文设置中发生的操作。这种无监督的方法确保ARGUS不仅限于检测先前已知的攻击，还能够检测新的攻击。我们在异构的实际智能家居环境中评估了ARGUS，并为每个设置实现了至少99.64％的F1分数，误报率（FPR）最多为0.03％。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/rieger](https://www.usenix.org/conference/usenixsecurity23/presentation/rieger)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-rieger.pdf](https://www.usenix.org/system/files/usenixsecurity23-rieger.pdf)
## Generative Intrusion Detection and Prevention on Data Stream.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#generative-intrusion-detection-and-prevention-on-data-stream) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#generative-intrusion-detection-and-prevention-on-data-stream)**
### 作者
* HyungBin Seo, Kookmin University
* MyungKeun Yoon, Kookmin University
### 摘要
> 数据以流的形式到达，例如网络数据包、电子邮件或恶意文件，理想情况下，应该对其进行网络安全性调查。当前最佳实践是检查每个数据是否包含任何可疑签名或简单的字符串，这些签名是通过在先前网络攻击案例中进行详细手动分析获得的。不幸的是，未知攻击，即零日攻击，无法及时通过这种方式检测到，因为尚未有可用的签名。为了解决这个问题，最近的研究提出了高速方法，可以从数据流中提取频繁子字符串，并将其用作攻击签名，因为经常发生的签名通常与攻击有关；不幸的是，在大多数时间内没有攻击时，提取的良性签名比恶意签名更多。这导致了大量的误报和额外的人为干预以去除良性签名。在本文中，我们设计了一种新的流算法，可以首先从数据流中同时识别一组频繁出现的签名。通过使用这个频繁签名组而不是经常出现的单个签名，新方案通过只使用少量固定内存和恒定的哈希操作来减轻误报问题，实现了高检测准确性，而这在任何先前的工作中都没有实现。这个改进来自于一种称为minHashed虚拟向量的新方法，用固定的内存来汇总相似的数据，它使我们能够仅仅读取每个数据一次就能够自动识别一组频繁出现的签名。我们对不同的私人和公开数据集进行了详尽的实验，以验证新方案的实际有效性和实验可重复性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/seo](https://www.usenix.org/conference/usenixsecurity23/presentation/seo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-seo.pdf](https://www.usenix.org/system/files/usenixsecurity23-seo.pdf)
## xNIDS: Explaining Deep Learning-based Network Intrusion Detection Systems for Active Intrusion Responses.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#xnids-explaining-deep-learning-based-network-intrusion-detection-systems-for-active-intrusion-responses) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#xnids-explaining-deep-learning-based-network-intrusion-detection-systems-for-active-intrusion-responses)**
### 作者
* Feng Wei, University at Buffalo
* Hongda Li, Palo Alto Networks
* Ziming Zhao, University at Buffalo
* Hongxin Hu, University at Buffalo
### 摘要
> 虽然基于深度学习的网络入侵检测系统（DL-NIDS）近年来得到了广泛研究，并显示出卓越的性能，但由于其检测结果和可操作解释之间的语义差距，它们无法积极应对检测到的入侵行为。此外，由于高错误成本，网络运营商不愿意仅基于检测结果做出响应。这些缺点的根本原因可以追溯到DL-NIDS的可解释性不足。虽然已开发出一些解释深度学习系统的方法，但它们不能处理结构化数据的历史输入和复杂特征依赖性，并且在解释DL-NIDS方面表现不佳。
> 
> 本文提出了XNIDS，一种通过解释DL-NIDS来促进积极入侵响应的新型框架。我们的解释方法的亮点在于：（1）对历史输入进行近似和采样；（2）捕捉结构化数据的特征依赖性，以实现高保真度的解释。基于解释结果，XNIDS可以进一步生成可操作的防御规则。我们使用四种最先进的DL-NIDS对XNIDS进行评估。评估结果显示，XNIDS在保真度、稀疏性、完整性和稳定性等方面优于先前的解释方法，这些对于积极入侵响应至关重要。此外，我们还证明XNIDS可以高效生成实用的防御规则，有助于理解DL-NIDS的行为并排除检测错误。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wei-feng](https://www.usenix.org/conference/usenixsecurity23/presentation/wei-feng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wei-feng.pdf](https://www.usenix.org/system/files/usenixsecurity23-wei-feng.pdf)
## PROGRAPHER: An Anomaly Detection System based on Provenance Graph Embedding.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#prographer-an-anomaly-detection-system-based-on-provenance-graph-embedding) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#prographer-an-anomaly-detection-system-based-on-provenance-graph-embedding)**
### 作者
* Fan Yang, The Chinese University of Hong Kong
* Jiacen Xu, University of California, Irvine
* Chunlin Xiong, Sangfor Technologies Inc.
* Zhou Li, University of California, Irvine
* Kehuan Zhang, The Chinese University of Hong Kong
### 摘要
> 近年来，高级持续威胁（APT）成为现代计算环境安全面临的最大威胁之一，其涉及长时间的复杂和恶意行动。作为对策，数据溯源被用于捕获计算系统/网络中实体之间的复杂关系，并利用此信息来检测复杂的APT攻击。尽管数据溯源在对抗APT攻击方面显示出潜力，但现有系统仍无法在效率、准确性和细粒度之间取得良好平衡。
> 
> 在这项工作中，我们设计了一种基于溯源图的新型异常检测系统，命名为PROGRAPHER。为了解决溯源图中 "依赖爆炸 "问题并实现高效率，PROGRAPHER从输入日志中提取时间顺序的快照，并在快照上执行检测。为了捕获图的丰富结构属性，采用了整体图嵌入和基于序列的学习方法。最后，从异常快照中提取关键指标并向分析师报告，从而大大减轻了他们的工作负担。
> 
> 我们在五个真实世界的数据集上评估了PROGRAPHER。结果显示，PROGRAPHER能够高准确率地检测标准攻击和APT攻击，并且胜过其他最先进的检测系统。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yang-fan](https://www.usenix.org/conference/usenixsecurity23/presentation/yang-fan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yang-fan.pdf](https://www.usenix.org/system/files/usenixsecurity23-yang-fan.pdf)
## Dubhe: Succinct Zero-Knowledge Proofs for Standard AES and related Applications.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#dubhe-succinct-zero-knowledge-proofs-for-standard-aes-and-related-applications) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#dubhe-succinct-zero-knowledge-proofs-for-standard-aes-and-related-applications)**
### 作者
* Changchang Ding, Indiana University Bloomington
* Yan Huang, Indiana University Bloomington
### 摘要
> 我们探索了一种构建零知识证明的新方法，该方法结合了简洁证明系统GKR、完全线性PCP(FLPCP)和MPC-in-the-Head ZKPoK的思想。我们的发现在零知识证明的最新技术上有两个方面的贡献：
> 
> (1) 方法论：我们展示了一种用简化版的FLPCP和KKW构建透明零知识证明的方法。所得到的证明在实践中高效(O(|C|)-时间证明者，O(log(|C|))-时间验证者，O(log(|C|))-带宽，其中|C|是多项式门的数量)，并且适用于在任何有限域上定义的多项式门电路。
> 
> (2) 应用：我们提出了基于标准AES密码套件的高效(交互式)身份验证方案、环形身份验证方案、(非交互式)数字签名和环形签名。我们还展示了第一个实际有效的可验证对称密钥加密方案，该方案基于计数器模式AES。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ding-changchang](https://www.usenix.org/conference/usenixsecurity23/presentation/ding-changchang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ding-changchang.pdf](https://www.usenix.org/system/files/usenixsecurity23-ding-changchang.pdf)
## Curve Trees: Practical and Transparent Zero-Knowledge Accumulators.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#curve-trees-practical-and-transparent-zero-knowledge-accumulators) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#curve-trees-practical-and-transparent-zero-knowledge-accumulators)**
### 作者
* Matteo Campanelli, Protocol Labs
* Mathias Hall-Andersen, Aarhus University, Denmark
* Simon Holmgaard Kamp, Aarhus University, Denmark
### 摘要
> 在这项工作中，我们改进了实际零知识集合成员关系的最先进技术，这是几个注重隐私的应用的核心构建块，例如匿名付款、凭证和白名单。这个基本原理允许用户展示对大规模集合中的一个元素的知识，而不泄露具体的元素。部署该技术的障碍之一是效率。具体而言，存在高效的解决方案，例如在Zcash Sapling中部署的方案，但它们往往以强烈的信任假设为代价：底层设置必须由可信第三方生成。
> 
> 为了寻找替代方法，我们关注一个常见的构建块：累加器，这是一种压缩底层集合的加密数据结构。我们提出了新颖、更高效和完全透明（即不需要可信设置）的累加器构建方法，支持零知识证明的集合成员关系。从技术上讲，我们引入了“承诺和证明”技术所启发的新方法，将浅Merkle树和椭圆曲线的2循环组合成高度实用的构造。我们的基本累加器构造被称为Curve Trees，完全透明（不需要可信设置），基于简单且广泛使用的假设（DLOG和Random Oracle模型）。我们的构造是第一个完全透明的构造，对于大集合来说获得具体较小的证明/承诺大小，并具有比采用Pedersen哈希的Merkle树的证明时间小一个数量级的特征。对于目标为128位安全性的具体实例，我们获得：对于任意大小的集合承诺为256位；对于∣S∣=240，零知识成员关系证明为2.9KB，证明时间为2秒，验证时间为40毫秒，在普通笔记本电脑上。
> 
> 使用我们的构造作为构建块，我们可以设计一个简单且具体高效的匿名加密货币，我们称之为Vcash。其交易可以在约80毫秒或同时批量验证多个（>100）交易时在约5毫秒内验证；交易大小为4KB。我们的时间表与Zcash Sapling中的方法相竞争，并为完全透明设置稍微较大的证明（Zcash Sapling中的交易为2.8KB）。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/campanelli](https://www.usenix.org/conference/usenixsecurity23/presentation/campanelli)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-campanelli.pdf](https://www.usenix.org/system/files/usenixsecurity23-campanelli.pdf)
## BalanceProofs: Maintainable Vector Commitments with Fast Aggregation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#balanceproofs-maintainable-vector-commitments-with-fast-aggregation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#balanceproofs-maintainable-vector-commitments-with-fast-aggregation)**
### 作者
* Weijie Wang, Yale University
* Annie Ulichney, Yale University
* Charalampos Papamanthou, Yale University
### 摘要
> 我们提出了BalanceProofs，这是第一个能够保持可维护性（即支持亚线性更新）并且具有快速证明聚合和验证的向量承诺。BalanceProofs的基本版本具有O(√nlogn)的更新时间和O(√n)的查询时间，其常数大小的聚合证明可以在毫秒级内生成和验证。特别是，BalanceProofs在聚合时间和聚合验证时间上改进了唯一已知的可维护和可聚合的向量承诺方案Hyperproofs（USENIX Security Symposium 2022）的性能，分别提高了1000倍和100倍。聚合证明的快速验证特别适用于无状态加密货币等应用，其中一次产生聚合的余额证明，但必须多次验证并由大量节点进行验证，这在Hyperproofs中是一个主要的瓶颈。作为局限性，与Hyperproofs相比，BalanceProofs的更新时间大约慢6倍，但始终保持在10到18毫秒的范围内。最后，我们通过引入分桶技术在BalanceProofs中研究了（聚合）证明大小、更新时间和（聚合）证明计算和验证之间的有用权衡，并进行了广泛的评估和与Hyperproofs的比较。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-weijie](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-weijie)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-weijie.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-weijie.pdf)
## zkSaaS: Zero-Knowledge SNARKs as a Service.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#zksaas-zero-knowledge-snarks-as-a-service) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#zksaas-zero-knowledge-snarks-as-a-service)**
### 作者
* Sanjam Garg, University of California, Berkeley, and NTT Research
* Aarushi Goel, NTT Research
* Abhishek Jain, Johns Hopkins University
* Guru-Vamsi Policharla, University of California, Berkeley
* Sruthi Sekar, University of California, Berkeley
### 摘要
> 经过十年的积极研究，已经实现了零知识简洁非交互式知识论证（zk-SNARKs）的实际构建，现已广泛应用于各种应用中。尽管取得了惊人的进展，但证明生成时间的开销仍然很大。
> 
> 在这项工作中，我们展望了一个世界，在这个世界中，计算资源有限的消费者可以以保护隐私的方式将证明生成的任务外包给一群不受信任的服务器。主要要求是这些服务器应能够以更快的速度（超过消费者）共同生成证明。为了实现这个目标，我们引入了一个名为zk-SNARKs-as-a-service（zkSaaS）的框架，用于更快地计算zk-SNARKs。我们的框架允许将证明计算分布到多个服务器上，以便每个服务器的运行时间比单个证明者的运行时间更短。此外，证明者的证人的隐私受到任何少数合谋服务器的保护。
> 
> 我们在这个框架中设计了定制的协议，可以用于获得广泛使用的zk-SNARKs（如Groth16 [EUROCRYPT 2016]，Marlin [EUROCRYPT 2020]和Plonk [EPRINT 2019]）的更快运行时间。我们为Groth16和Plonk证明者实现了zkSaaS的概念验证。与在普通硬件上生成这些证明相比，我们不仅能够生成更多数量的约束的证明（且不会出现内存耗尽），而且在与128个参与方一起运行时，使用Groth16能够获得≈22倍的加速度，对于225个约束；使用Plonk能够获得≈22倍的加速度，对于221个门。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/garg](https://www.usenix.org/conference/usenixsecurity23/presentation/garg)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-garg.pdf](https://www.usenix.org/system/files/usenixsecurity23-garg.pdf)
## VeriZexe: Decentralized Private Computation with Universal Setup.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#verizexe-decentralized-private-computation-with-universal-setup) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#verizexe-decentralized-private-computation-with-universal-setup)**
### 作者
* Alex Luoyuan Xiong, Espresso Systems, National University of Singapore
* Binyi Chen, Espresso Systems
* Zhenfei Zhang, Espresso Systems
* Benedikt Bünz, Espresso Systems, Stanford University
* Ben Fisch, Espresso Systems, Yale University
* Fern, Espresso Systems
* o Krell, Espresso Systems
* Philippe Camacho, Espresso Systems
### 摘要
> 传统的区块链系统在链上执行程序状态转换，要求参与状态机复制的每个网络节点在验证交易时重新计算程序的每一步。这限制了可扩展性和隐私性。最近，Bowe等人引入了一种名为分散私有计算（DPC）的原始机制，并提供了一个称为Zexe的实例，它允许用户在链下执行任意计算而不向网络透露程序逻辑。此外，交易验证仅需恒定时间，与链下计算无关。然而，Zexe需要为每个应用程序进行单独的可信设置，这是极不实际的。以前试图消除这种每个应用程序设置的尝试导致了显着的性能损失。
> 
> 我们提出了一种新的DPC实例VeriZexe，它高效且仅需要单一通用设置来支持任意数量的应用程序。我们的基准在交易生成时间上提升了9倍，在内存使用上提升了3.4倍的技术水平。同时，我们还设计了在Plonk约束系统内进行可变基数多标量乘法和模算术的高效小工具，从而实现了一个只使用约21k个Plonk约束的Plonk验证器小工具。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xiong](https://www.usenix.org/conference/usenixsecurity23/presentation/xiong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xiong.pdf](https://www.usenix.org/system/files/usenixsecurity23-xiong.pdf)
## Intender: Fuzzing Intent-Based Networking with Intent-State Transition Guidance.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#intender-fuzzing-intent-based-networking-with-intent-state-transition-guidance) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#intender-fuzzing-intent-based-networking-with-intent-state-transition-guidance)**
### 作者
* Jiwon Kim, Purdue University
* Benjamin E. Ujcich, Georgetown University
* Dave (Jing) Tian, Purdue University
### 摘要
> 意图驱动网络（IBN）通过关注操作员希望网络完成的任务，而不是如何实现配置，摘要了网络配置对操作员的复杂性。尽管这种抽象简化了网络管理的挑战，但迄今为止，很少有人关注IBN带来的新安全问题，这些安全问题对整个网络的正常运行造成了不利影响。为了说明此类安全问题的普遍性，我们通过研究ONOS网络操作系统中代表性IBN实现的现有错误报告，系统化地概括了IBN的安全挑战。我们发现，61%的与IBN相关的错误是语义错误，这些错误对于最先进的漏洞发现工具来说是具有挑战性的，甚至是不可能有效检测到的。
> 
> 为了解决现有的限制，我们提出了Intender，这是第一个针对IBN的语义感知模糊测试框架。Intender利用网络拓扑信息和意图-操作依赖关系（IOD）来有效生成测试输入。Intender引入了一种新的反馈机制，意图状态转换指导（ISTG），可以追踪意图状态转换的历史记录。我们使用ONOS评估了Intender，并发现了12个错误，其中11个是CVE分配的影响网络整体控制平面完整性和可用性的安全关键漏洞。与最先进的模糊测试工具AFL、Jazzer、Zest和PAZZ相比，Intender生成的有效模糊测试输入多达78.7倍，覆盖范围提高了2.2倍，检测到的唯一错误多达82.6倍。Intender与IOD相结合可以减少73.02%的冗余操作，并花费10.74%更多时间执行有效操作。Intender与ISTG相结合，与代码覆盖指导相比，可以实现1.8倍更多的意图状态转换。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kim-jiwon](https://www.usenix.org/conference/usenixsecurity23/presentation/kim-jiwon)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kim-jiwon.pdf](https://www.usenix.org/system/files/usenixsecurity23-kim-jiwon.pdf)
## Bleem: Packet Sequence Oriented Fuzzing for Protocol Implementations.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#bleem-packet-sequence-oriented-fuzzing-for-protocol-implementations) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#bleem-packet-sequence-oriented-fuzzing-for-protocol-implementations)**
### 作者
* Zhengxiong Luo, Tsinghua University
* Junze Yu, Tsinghua University
* Feilong Zuo, Tsinghua University
* Jianzhong Liu, Tsinghua University
* Yu Jiang, Tsinghua University
* Ting Chen, University of Electronic Science and Technology of China
* Abhik Roychoudhury, National University of Singapore
* Jiaguang Sun, Tsinghua University
### 摘要
> 协议实现是网络基础设施中至关重要的组成部分。隐藏在实现中的缺陷很容易使设备易受敌方攻击。因此，保证其正确性是重要的。然而，常用的漏洞检测技术，如模糊测试，面临着在测试这些实现时反馈机制不足和协议状态空间探索技术不够有效的挑战。
> 
> 本文介绍了一种基于数据包序列的黑盒模糊测试器Bleem，用于检测协议实现的漏洞。与关注单个数据包生成不同，Bleem在序列级别上生成数据包。它通过分析系统输出序列非侵入性地提供有效的反馈机制，并通过涵盖及时的状态空间跟踪来支持引导式模糊测试，并利用交互式流量信息生成具有协议逻辑感知的数据包序列。我们在15个广泛使用的知名协议实现（如TLS和QUIC）上评估了Bleem。结果显示，与Peach等最先进的协议模糊测试工具相比，Bleem在24小时内实现了显著更高的分支覆盖率（最高提升了174.93%）。此外，Bleem揭示了著名协议实现中的15个安全关键漏洞，并分配了10个CVE编号。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/luo-zhengxiong](https://www.usenix.org/conference/usenixsecurity23/presentation/luo-zhengxiong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-luo-zhengxiong.pdf](https://www.usenix.org/system/files/usenixsecurity23-luo-zhengxiong.pdf)
## Automated Exploitable Heap Layout Generation for Heap Overflows Through Manipulation Distance-Guided Fuzzing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#automated-exploitable-heap-layout-generation-for-heap-overflows-through-manipulation-distance-guided-fuzzing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#automated-exploitable-heap-layout-generation-for-heap-overflows-through-manipulation-distance-guided-fuzzing)**
### 作者
* Bin Zhang, National University of Defense Technology
* Jiongyi Chen, National University of Defense Technology
* Runhao Li, National University of Defense Technology
* Chao Feng, National University of Defense Technology
* Ruilin Li, National University of Defense Technology
* Chaojing Tang, National University of Defense Technology
### 摘要
> 生成可利用的堆布局是为堆溢出产生可用的攻击代码的基本步骤。为此，从目标程序中确定的堆原语被作为功能单元用于操作堆布局，以构建可利用的状态。为了灵活使用原语，以前的工作仅侧重于特定类型的程序或具有调度循环结构的程序。除此之外，由于在一般用途程序中明确且灵活地使用原语的困难，自动生成可利用的堆布局对于一般用途程序来说是困难的。
> 
> 本文提出了Scatter，以无原语的方式实现对一般用途程序中堆溢出的可利用堆布局的生成。Scatter的核心是一个由新的操纵距离指引的模糊测试器，该距离用于衡量堆布局空间中受损对象的破坏距离。为了使基于模糊测试的方法实际可行，Scatter利用一组技术来提高效率并处理堆管理器在现实环境中引入的副作用。我们的评估结果表明，Scatter能成功生成10个一般用途程序中的27个堆溢出中的18个的共计126个可利用的堆布局。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-bin](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-bin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-bin.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-bin.pdf)
## MINER: A Hybrid Data-Driven Approach for REST API Fuzzing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#miner-a-hybrid-data-driven-approach-for-rest-api-fuzzing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#miner-a-hybrid-data-driven-approach-for-rest-api-fuzzing)**
### 作者
* Chenyang Lyu, Zhejiang University
* Jiacheng Xu, Zhejiang University
* Shouling Ji, Zhejiang University
* Xuhong Zhang, Zhejiang University
* Qinying Wang, Zhejiang University
* Binbin Zhao, Georgia Institute of Technology
* Gaoning Pan, Zhejiang University
* Wei Cao, Ant Group
* Peng Chen, Ant Group
* Raheem Beyah, Georgia Institute of Technology
### 摘要
> 近年来，REST API模糊测试已经出现，用于探索云服务的错误。其性能高度依赖于序列构建和请求生成。然而，现有的REST API模糊测试工具在生成具有良好构建请求的长序列以触发云服务中难以到达的状态时有困难，这限制了它们发现深层错误和安全漏洞的性能。此外，它们不能找到由于请求生成过程中使用未定义参数而导致的特定错误。因此，在本文中，我们提出了一种新颖的混合数据驱动解决方案，名为MINER，它有三个新设计共同解决上述限制。首先，MINER收集通过云服务检查的请求的有效序列作为模板，并为长序列模板分配更多次执行。其次，为了提高序列模板中请求的生成质量，MINER创造性地利用最先进的神经网络模型来预测关键请求参数，并为其提供适当的参数值。第三，MINER实现了一种新的数据驱动安全规则检查器来捕获由于未定义参数而导致的新错误类型。我们通过11个REST API在GitLab、Bugzilla和WordPress上对MINER进行了评估，与最先进的模糊测试工具RESTler进行了对比。结果表明，MINER的平均通过率比RESTler高23.42%。MINER比RESTler平均发现了97.54%更多的唯一错误，并经过手动分析后发现了142.86%更多的可重现错误。我们已经向对应的供应商报告了所有新发现的错误，并确认其中7个为逻辑错误。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lyu](https://www.usenix.org/conference/usenixsecurity23/presentation/lyu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lyu.pdf](https://www.usenix.org/system/files/usenixsecurity23-lyu.pdf)
## Systematic Assessment of Fuzzers using Mutation Analysis.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#systematic-assessment-of-fuzzers-using-mutation-analysis) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#systematic-assessment-of-fuzzers-using-mutation-analysis)**
### 作者
* Philipp Görz, CISPA Helmholtz Center for Information Security
* Björn Mathis, CISPA Helmholtz Center for Information Security
* Keno Hassler, CISPA Helmholtz Center for Information Security
* Emre Güler, Ruhr-Universität Bochum
* Thorsten Holz, CISPA Helmholtz Center for Information Security
* Andreas Zeller, CISPA Helmholtz Center for Information Security
* Rahul Gopinath, University of Sydney
### 摘要
> 模糊测试是发现程序漏洞的重要方法。尽管过去几年在这个领域取得了相当大的进展，但是评估和比较模糊测试器的效果仍然是一个开放的研究问题。在软件测试中，评估测试质量的黄金标准是变异分析，它评估了测试检测合成错误的能力：如果一组测试未能检测到这些变异，那么它也有可能无法检测到真实的错误。变异分析涵盖了各种覆盖度量，并提供了一个大而多样的错误集合，这些错误可能非常难以触发和检测，从而避免了饱和和过拟合的问题。不幸的是，传统的变异分析对于模糊测试来说成本过高，因为变异需要独立评估。
> 
> 在本文中，我们应用现代变异分析技术，将多个变异进行汇集，首次使用变异分析评估和比较模糊测试器。我们为模糊测试器引入了一个评估基准，并将其应用于多个流行的模糊测试器和测试对象。通过全面的评估，我们展示了如何使用它来评估模糊测试器的性能，并衡量改进技术的影响。所需的CPU时间仍然可以接受：需要4.09个CPU年来分析七个测试对象和共计141,278个变异。我们发现，现今的模糊测试器只能检测到很小一部分的变异，这应该被视为未来研究的挑战，特别是在改进以下方面：（1）检测超出通用崩溃的故障；（2）触发变异（从而引发错误）。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gorz](https://www.usenix.org/conference/usenixsecurity23/presentation/gorz)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gorz.pdf](https://www.usenix.org/system/files/usenixsecurity23-gorz.pdf)
## HOMESPY: The Invisible Sniffer of Infrared Remote Control of Smart TVs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#homespy-the-invisible-sniffer-of-infrared-remote-control-of-smart-tvs) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#homespy-the-invisible-sniffer-of-infrared-remote-control-of-smart-tvs)**
### 作者
* Kong Huang, The Chinese University of Hong Kong
* YuTong Zhou, The Chinese University of Hong Kong
* Ke Zhang, The Chinese University of Hong Kong
* Jiacen Xu, University of California, Irvine
* Jiongyi Chen, National University of Defense Technology
* Di Tang, Indiana University Bloomington
* Kehuan Zhang, The Chinese University of Hong Kong
### 摘要
> 红外线（IR）遥控是家庭中广泛使用的技术，因其简单和低成本而受到青睐。大多数人认为它是“安全的”，因为在家中使用需要直线视线。本文重新审视IR遥控方案的安全性，并在互联网智能家居环境中考察其安全假设。我们关注两个具体问题：（1）物联网设备是否能够嗅探到IR信号；（2）通过嗅探到的IR控制信号可能泄露哪些信息。
> 
> 为了回答这些问题，我们设计了一个嗅探模块，使用一个现成的商用红外线接收器连接到树莓派，演示了智能电视遥控器发出的红外线（IR）信号可以被附近的物联网设备捕获，例如智能空调器，即使信号未直接对准空调器。红外线信号的范围和接收角度比大多数人想象的要大。我们还开发了从嗅探到的IR控制信号中提取语义信息的算法，并进行了真实世界应用的评估。结果显示，通过嗅探到的IR控制信号可以泄露出很多敏感信息，包括账户名和密码、PIN码，甚至支付信息。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/huang](https://www.usenix.org/conference/usenixsecurity23/presentation/huang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-huang.pdf](https://www.usenix.org/system/files/usenixsecurity23-huang.pdf)
## Remote Attacks on Speech Recognition Systems Using Sound from Power Supply.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#remote-attacks-on-speech-recognition-systems-using-sound-from-power-supply) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#remote-attacks-on-speech-recognition-systems-using-sound-from-power-supply)**
### 作者
* Lanqing Yang, Shanghai Jiao Tong University
* Xinqi Chen, Shanghai Jiao Tong University
* Xiangyong Jian, Shanghai Jiao Tong University
* Leping Yang, Shanghai Jiao Tong University
* Yijie Li, Shanghai Jiao Tong University
* Qianfei Ren, Shanghai Jiao Tong University
* Yi-Chao Chen, Shanghai Jiao Tong University
* Guangtao Xue, Shanghai Jiao Tong University
* Xiaoyu Ji, Zhejiang University
### 摘要
> 语音识别（SR）系统被用于智能手机和扬声器上进行查询、撰写电子邮件和发起电话。然而，它们也带来了严重的安全风险。研究人员已经证明，引入某些声音可以威胁到SR系统的安全。然而，大多数这些方法要求攻击者接近受害者的短距离，从而限制了这些方案的适用性。其他研究人员则使用外围设备（例如激光）远程攻击SR系统；然而，这些方法需要视线接入和受害者附近始终开启的扬声器。据我们所知，本文提出了一种名为SingAttack的方案，这是第一个利用受害设备的开关模式电源生成的类似人类声音对SR系统进行操纵的方案。攻击信号通过电网传输，实现了对现有SR系统的远程攻击。所提出的SingAttack系统不依赖于外部硬件或对设备接入的不切实际假设。在对十个SR系统进行的实验中，SingAttack在23米距离下发起的攻击实现了7.8的Mel-Cepstral失真。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yang-lanqing](https://www.usenix.org/conference/usenixsecurity23/presentation/yang-lanqing)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yang-lanqing.pdf](https://www.usenix.org/system/files/usenixsecurity23-yang-lanqing.pdf)
## Near-Ultrasound Inaudible Trojan (Nuit): Exploiting Your Speaker to Attack Your Microphone.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#near-ultrasound-inaudible-trojan-nuit-exploiting-your-speaker-to-attack-your-microphone) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#near-ultrasound-inaudible-trojan-nuit-exploiting-your-speaker-to-attack-your-microphone)**
### 作者
* Qi Xia, University of Texas at San Antonio
* Qian Chen, University of Texas at San Antonio
* Shouhuai Xu, University of Colorado Colorado Springs
### 摘要
> 语音控制系统（VCS）为智能设备发出语音指令提供了方便的界面。然而，由于存在两类攻击，即：（i）无声攻击，当攻击者和受害者彼此接近时可以发动攻击；以及（ii）可听攻击，可以通过将攻击信号嵌入音频中进行远程发动。本文介绍了一种新的攻击类别，名为近超声无声木马（Nuit）。Nuit攻击能够兼具上述两类攻击的优点：它们是无声的并且可以远程发动。此外，Nuit攻击还可以实现端到端的不可察觉性，在文献中这一点虽然重要，但并未得到足够的关注。Nuit攻击的另一个特点是利用受害者的扬声器来攻击受害者的麦克风及其相关的VCS，这意味着攻击者不需要使用任何特殊的扬声器。我们演示了Nuit攻击的可行性，并提出了一种有效的防御方法。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xia](https://www.usenix.org/conference/usenixsecurity23/presentation/xia)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xia.pdf](https://www.usenix.org/system/files/usenixsecurity23-xia.pdf)
## Medusa Attack: Exploring Security Hazards of In-App QR Code Scanning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#medusa-attack-exploring-security-hazards-of-in-app-qr-code-scanning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#medusa-attack-exploring-security-hazards-of-in-app-qr-code-scanning)**
### 作者
* Xing Han, University of Electronic Science and Technology of China and Shanghai Qi Zhi Institute
* Yuheng Zhang, University of Electronic Science and Technology of China and Shanghai Qi Zhi Institute
* Xue Zhang, University of Electronic Science and Technology of China and Shanghai Qi Zhi Institute
* Zeyuan Chen, G.O.S.S.I.P
* Mingzhe Wang, Xidian University
* Yiwei Zhang, Purdue University
* Siqi Ma, The University of New South Wales
* Yu Yu, Shanghai Qi Zhi Institute and Shanghai Jiao Tong University
* Elisa Bertino, Purdue University
* Juanru Li, Shanghai Qi Zhi Institute and Shanghai Jiao Tong University
### 摘要
> 智能手机用户正在淘汰传统的QR码，因为许多应用程序已经集成了QR码扫描功能。借助嵌入式QR码扫描组件的支持，应用程序可以读取QR码并立即执行相关操作，例如登机。以这种自动化方式处理QR码显然对用户非常友好。然而，这种自动化也为攻击者提供了一个机会，如果应用程序未能正确检查这些代码，攻击者可以利用恶意QR码对应用程序进行攻击。
> 
> 在本文中，我们对使用内置QR码阅读器的移动应用程序的攻击进行了系统化和情境化的研究。我们将这些攻击称为MEDUSA攻击，它们允许攻击者远程利用移动应用程序中的应用内QR码扫描功能。通过MEDUSA攻击，远程攻击者可以调用特定类型的应用程序功能 - 远程可访问处理程序（RAHs），并执行诸如发送身份验证令牌或进行付款等任务。我们对美国和中国大陆移动市场中拥有数十亿用户的800个非常流行的Android和iOS应用进行了经验研究，以调查与MEDUSA攻击相关的安全漏洞的普遍性和严重性。基于我们提出的漏洞检测技术，我们对目标应用程序进行了彻底检查，并发现有很多应用受到了影响。在800个应用中，有377个应用具有应用内QR码扫描功能，我们发现123个应用包含2,872个自定义RAHs，这些自定义RAHs容易受到MEDUSA攻击。通过构建概念验证实施来测试严重程度，我们确认了46个存在严重或高危漏洞的应用程序，这些漏洞允许攻击者访问敏感的本地资源或远程修改用户数据。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/han-xing](https://www.usenix.org/conference/usenixsecurity23/presentation/han-xing)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-han-xing.pdf](https://www.usenix.org/system/files/usenixsecurity23-han-xing.pdf)
## Othered, Silenced and Scapegoated: Understanding the Situated Security of Marginalised Populations in Lebanon.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#othered-silenced-and-scapegoated-understanding-the-situated-security-of-marginalised-populations-in-lebanon) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#othered-silenced-and-scapegoated-understanding-the-situated-security-of-marginalised-populations-in-lebanon)**
### 作者
* Jessica McClearn, Royal Holloway, University of London
* Rikke Bjerg Jensen, Royal Holloway, University of London
* Reem Talhouk, Northumbria University
### 摘要
> 在本文中，我们探讨了黎巴嫩边缘化人群（如性少数群体、难民和妇女）在数字安全方面的经历。我们将研究范围放在后冲突的黎巴嫩背景下，该背景由教派分裂、治理失败和经济崩溃所塑造。我们通过一项在2022年7月在黎巴嫩贝鲁特进行的基于民族志的研究以及对13名具有黎巴嫩数字和人权专长的人员进行的访谈来进行此项研究。我们的研究突显了性少数群体和难民被用作黎巴嫩政府失败的替罪羊，而对这些失败表示抗议的妇女则被沉默。我们展示了政府支持的暴力煽动行为是将责任从政治领导层转嫁到这些群体的手段，从而加剧了已处于风险中的人群的数字安全风险。将我们的工作置于更广泛的社会学安全理解的背景下，我们讨论了黎巴嫩背景如何影响身份和本体安全。最后，我们建议在后冲突环境中针对和积极设计安全措施。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/mcclearn](https://www.usenix.org/conference/usenixsecurity23/presentation/mcclearn)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-mcclearn.pdf](https://www.usenix.org/system/files/usenixsecurity23-mcclearn.pdf)
## Examining Power Dynamics and User Privacy in Smart Technology Use Among Jordanian Households.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#examining-power-dynamics-and-user-privacy-in-smart-technology-use-among-jordanian-households) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#examining-power-dynamics-and-user-privacy-in-smart-technology-use-among-jordanian-households)**
### 作者
* Wael Albayaydh, University of Oxford
* Ivan Flechais, University of Oxford
### 摘要
> 智能技术在家庭和旁观者（可能是附带或故意监控目标）的隐私保护方面引发了关注。家庭中的佣人是智能家居中的旁观者，他们经历着复杂的权力动态，并可能成为通过智能技术进一步促进的剥削行为的对象。这种权力动态根植于复杂的社会规范、习俗、宗教信仰和经济因素。过去的研究主要关注西方背景，探讨智能技术和权力动态对家庭和智能家居旁观者隐私的影响，对于非西方背景下这些因素的影响了解有限。
> 
> 本文通过对约旦穆斯林阿拉伯中东（MME）背景下的智能设备使用者、旁观者（家庭和佣人）、决策者和人权活动人士进行30次访谈，展示了关于智能家居权力动态的研究结果。我们揭示了家庭和佣人之间的非对称社会经济权力动态如何影响智能技术的隐私关注、实践和权益认知。借鉴本研究结果，我们提出一些建议，以平衡非对称权力动态，提高旁观者的能动性和隐私保护水平，并防止技术的滥用。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/albayaydh](https://www.usenix.org/conference/usenixsecurity23/presentation/albayaydh)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-albayaydh.pdf](https://www.usenix.org/system/files/usenixsecurity23-albayaydh.pdf)
## "If sighted people know, I should be able to know: " Privacy Perceptions of Bystanders with Visual Impairments around Camera-based Technology.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#if-sighted-people-know-i-should-be-able-to-know-privacy-perceptions-of-bystanders-with-visual-impairments-around-camera-based-technology) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#if-sighted-people-know-i-should-be-able-to-know-privacy-perceptions-of-bystanders-with-visual-impairments-around-camera-based-technology)**
### 作者
* Yuhang Zhao, University of Wisconsin—Madison
* Yaxing Yao, University of Maryland, Baltimore County
* Jiaru Fu, University of Wisconsin—Madison
* Nihan Zhou, University of Wisconsin—Madison
### 摘要
> 基于摄像头的技术可能会侵犯隐私，特别是对于旁观者来说，他们可能会被摄像头捕捉到，但无法直接控制或访问这些设备。随着视力受损者（BVI）无法通过视觉发现附近的摄像头并有效避免被捕捉，对于他们来说，隐私威胁变得更加重要。虽然一些先前的研究已经研究了视力受损者作为基于摄像头的辅助技术的直接用户时的隐私关注，但没有研究探讨他们作为旁观者的独特隐私认知和需求。我们进行了一项深入访谈研究，采访了16名视力受损的参与者，以了解不同摄像头使用场景下BVI的隐私关注、期望和需求。我们还进行了一项初步调查，包括90名视力受损者回答和96名视力正常者回答，以比较BVI和视力正常者对摄像头的一般态度，并获取访谈研究中的摄像头使用情景。我们的研究揭示了BVI在摄像头方面的独特隐私挑战和认知，强调了他们对隐私意识和保护的需求。我们总结了未来隐私增强技术的设计考虑，以满足BVI的隐私需求。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhao-yuhang](https://www.usenix.org/conference/usenixsecurity23/presentation/zhao-yuhang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhao-yuhang.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhao-yuhang.pdf)
## A Research Framework and Initial Study of Browser Security for the Visually Impaired.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-research-framework-and-initial-study-of-browser-security-for-the-visually-impaired) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-research-framework-and-initial-study-of-browser-security-for-the-visually-impaired)**
### 作者
* Elaine Lau, Cal Poly, San Luis Obispo
* Zachary Peterson, Cal Poly, San Luis Obispo
### 摘要
> 网络恶意软件和钓鱼攻击的增长推动了浏览器在加载可疑站点内容之前使用插页式警告页面和模态框的研究和应用的显著进展。这些警告通常利用视觉提示吸引用户的注意力，包括专用图标、颜色以及按钮的位置和大小来传达场景的重要性。虽然视觉技术的功效已经提高了有视力的用户的安全性，但对于盲人和视力受损的用户来说，这些技术是不适用的。我们认为这并不是因为浏览器制造商缺乏兴趣或技术能力，他们的工程实践中普遍采用通用设计，而是因为缺乏研究文献来指导他们的选择，加上在这一人群中进行研究的明确方法缺失。的确，挑战是多方面的。在本文中，我们分析和解决了与盲人群体进行安全和隐私研究所面临的方法论挑战，并在进行此类研究时贡献了一套新的方法论最佳实践。使用我们的方法论，我们进行了初步研究，分析了视障人士在浏览器安全警告方面的经验，进行了主题分析，找出了视障用户常遇到的挑战，并提出了一些初步解决方案，以改善这一群体的安全性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lau](https://www.usenix.org/conference/usenixsecurity23/presentation/lau)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lau.pdf](https://www.usenix.org/system/files/usenixsecurity23-lau.pdf)
## ELASM: Error-Latency-Aware Scale Management for Fully Homomorphic Encryption.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#elasm-error-latency-aware-scale-management-for-fully-homomorphic-encryption) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#elasm-error-latency-aware-scale-management-for-fully-homomorphic-encryption)**
### 作者
* Yongwoo Lee, Yonsei University
* Seonyoung Cheon, Yonsei University
* Dongkwan Kim, Yonsei University
* Dongyoon Lee, Stony Brook University
* Hanjun Kim, Yonsei University
### 摘要
> 由于其定点算术和类似SIMD的向量化特性，在允许对加密数据进行计算的完全同态加密（FHE）方案中，RNS-CKKS广泛用于保护隐私的机器学习服务中。之前的研究已经在RNS-CKKS定点算术的任务管理上部分实现了自动化，但没有考虑输出误差，这阻碍了用户探索更好的误差-延迟权衡。
> 
> 本研究提出了一种新的错误和延迟感知的尺度管理（ELASM）方案，用于RNS-CKKS FHE方案。通过主动控制密文的尺度，可以有效地减小噪声对误差的影响，因为误差是由RNS-CKKS运算引入的缩放噪声。ELASM探索不同的尺度管理方案，将放大操作重新用作错误减少操作，估计每个方案的输出误差和延迟，并迭代地寻找最小化误差-延迟成本函数的最佳方案。此外，本研究还提出了一个新的尺度噪声比（SNR）参数，并为不同的RNS-CKKS运算引入了细粒度噪声感知水位线（最小尺度要求），为进一步改善误差-延迟权衡提供了新的机会。
> 
> 本研究在ELASM编译器中实现了所提出的想法，同时还使用了一种强制执行基于SNR的噪声感知水位线等RNS-CKKS约束条件的新的FHE语言和类型系统。对于十个机器学习和深度学习基准测试，ELASM找到了比EVA和Hecate等最先进解决方案更好的误差和延迟权衡（更低的帕累托曲线）。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lee-yongwoo](https://www.usenix.org/conference/usenixsecurity23/presentation/lee-yongwoo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lee-yongwoo.pdf](https://www.usenix.org/system/files/usenixsecurity23-lee-yongwoo.pdf)
## HECO: Fully Homomorphic Encryption Compiler.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#heco-fully-homomorphic-encryption-compiler) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#heco-fully-homomorphic-encryption-compiler)**
### 作者
* Alex, ETH Zurich
* er Vi, ETH Zurich
* Patrick Jattke, ETH Zurich
* Miro Haller, ETH Zurich
* Anwar Hithnawi, ETH Zurich
### 摘要
> 近年来，全同态加密（FHE）经历了几次突破和进展，性能得到了飞跃提升。如今，性能已不再是广泛采用的主要障碍，而是开发高效FHE应用的复杂性限制了其在实际和规模上的部署。近年来出现了一些FHE编译器，以便于FHE的开发。然而，这些工具都没有回答如何自动将命令式程序转换为安全高效的FHE实现的问题。这是一个需要解决的基本问题，我们在真实情况下的广泛使用FHE之前必须考虑到。自动化这些转换很具挑战性，因为FHE中的操作有一定限制，它们的性能特性也不直观，所以需要对程序进行彻底的转换来提高效率。此外，现有的工具都是整体化的，只着重于个别优化，因此无法完全满足端到端FHE开发的需求。在本文中，我们介绍了HECO，一种新的端到端FHE编译器设计，可以将高级的命令式程序转换为高效安全的FHE实现。在我们的设计中，我们更加全面地考虑了FHE开发的范围，超越了现有工具关注的加密挑战。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/viand](https://www.usenix.org/conference/usenixsecurity23/presentation/viand)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-viand.pdf](https://www.usenix.org/system/files/usenixsecurity23-viand.pdf)
## A Verified Confidential Computing as a Service Framework for Privacy Preservation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-verified-confidential-computing-as-a-service-framework-for-privacy-preservation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-verified-confidential-computing-as-a-service-framework-for-privacy-preservation)**
### 作者
* Hongbo Chen, Indiana University Bloomington
* Haobin Hiroki Chen, Indiana University Bloomington
* Mingshen Sun, Independent Researcher
* Kang Li, CertiK
* Zhaofeng Chen, CertiK
* XiaoFeng Wang, Indiana University Bloomington
### 摘要
> 随着服务提供商转向云端，用户被迫将敏感数据部署到云端。保密计算利用硬件可信执行环境（TEE）来保护数据的使用，不再需要用户对云端的信任。新兴的服务模型，称为保密计算作为服务（CCaaS），被服务提供商采用，以提供类似于功能即服务的服务。然而，在CCaaS中引发了隐私问题，特别是在多用户场景中。CCaaS需要向数据提供者保证该服务不会向任何未经授权的方泄露其隐私并在服务结束后清除其数据。为了解决这些隐私问题并提供安全保证，我们首先正式定义了“遗忘的证明”（PoBF）的安全目标，并证明了在哪些安全约束下PoBF可以得到满足。然后，这些约束将作为实现符合PoBF的框架（PoCF）的指南。PoCF由用于不同硬件TEE的通用库、CCaaS原型enclave和用于证明PoBF合规性的验证器组成。PoCF利用Rust的强大类型系统和安全特性，构建了一个验证的状态机，具有保护隐私的合约。最后，实验结果表明，PoCF引入的保护措施会导致轻微的运行时性能开销。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-hongbo](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-hongbo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-hongbo.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-hongbo.pdf)
## CSHER: A System for Compact Storage with HE-Retrieval.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#csher-a-system-for-compact-storage-with-he-retrieval) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#csher-a-system-for-compact-storage-with-he-retrieval)**
### 作者
* Adi Akavia, University of Haifa
* Neta Oren, University of Haifa
* Boaz Sapir, Intuit Israel Inc.
* Margarita Vald, Intuit Israel Inc.
### 摘要
> 同态加密（HE）是一项有前景的技术，用于保护正在使用中的数据，在近年来在实现实际运行性能方面取得了相当大的进展。然而，与HE相关的高存储开销仍然是其大规模采用的障碍。在本研究中，我们提出了一个新的存储解决方案，采用两个服务器模型，解决了与HE相关的高存储开销问题，同时保持了严格的数据机密性。我们在一个概念验证系统中对我们的解决方案进行了实证评估，该系统在AWS EC2实例上运行，并使用AWS S3存储，展示了与存储AES密文相比无开销的存储大小，并具有10微秒的平摊端到端运行时间。此外，我们在多个云上进行了实验，即每个服务器都位于不同的云上，展示了类似的结果。作为一个核心工具，我们引入了第一个在实数上具有快速同态重构的完美秘密共享方案，这可能引起独立兴趣。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/akavia](https://www.usenix.org/conference/usenixsecurity23/presentation/akavia)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-akavia.pdf](https://www.usenix.org/system/files/usenixsecurity23-akavia.pdf)
## Precise and Generalized Robustness Certification for Neural Networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#precise-and-generalized-robustness-certification-for-neural-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#precise-and-generalized-robustness-certification-for-neural-networks)**
### 作者
* Yuanyuan Yuan, The Hong Kong University of Science and Technology and ETH Zurich
* Shuai Wang, The Hong Kong University of Science and Technology
* Zhendong Su, ETH Zurich
### 摘要
> 神经网络（NN）鲁棒性认证的目标是确定在对其输入进行变异时，NN是否会改变其预测结果。虽然大多数认证研究都是基于图像的像素级或几何级和模糊操作，但本文提出了一种新颖的框架GCERT，通过精确和统一的多种语义级图像变异形式来认证NN的鲁棒性。我们将一组语义级图像变异统一地表达为生成模型的潜在空间中的特定方向。我们确定了两个关键属性，独立性和连续性，将潜在空间转化为一个精确且易于分析的输入空间表示，用于认证。GCERT可以平滑地集成到完整、不完整或定量的认证框架中。凭借其精确的输入空间表示，GCERT首次实现了在多种语义级输入变异下以较低成本进行完整的NN鲁棒性认证，例如天气滤镜、风格转换和感知变化（例如睁眼/闭眼）。我们展示了GCERT在自动驾驶等各种常见和安全敏感场景下实现了NN鲁棒性认证。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yuan-yuanyuan-certification](https://www.usenix.org/conference/usenixsecurity23/presentation/yuan-yuanyuan-certification)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yuan-yuanyuan-certification.pdf](https://www.usenix.org/system/files/usenixsecurity23-yuan-yuanyuan-certification.pdf)
## DiffSmooth: Certifiably Robust Learning via Diffusion Models and Local Smoothing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#diffsmooth-certifiably-robust-learning-via-diffusion-models-and-local-smoothing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#diffsmooth-certifiably-robust-learning-via-diffusion-models-and-local-smoothing)**
### 作者
* Jiawei Zhang, UIUC
* Zhongzhu Chen, University of Michigan, Ann Arbor
* Huan Zhang, Carnegie Mellon University
* Chaowei Xiao, Arizona State University
* Bo Li, UIUC
### 摘要
> 扩散模型已被利用于进行对抗净化，从而为标准模型提供经验和认证的健壮性。另一方面，不同的经过健壮训练的平滑模型已被研究用于提高认证健壮性。因此，一个自然的问题是：扩散模型能否用于改善这些经过健壮训练的平滑模型的认证健壮性？在这项工作中，我们首先在理论上证明了扩散模型恢复的实例在原始实例的有界邻域上具有很高的概率；并且“一次性”去噪扩散概率模型（DDPM）可以近似连续时间扩散模型生成的分布的均值，在温和条件下，近似了原始实例。在我们的分析的启发下，我们提出了一种可认证的健壮流程DiffSmooth，它首先通过扩散模型进行对抗净化，然后通过一种简单而有效的局部平滑策略将净化的实例映射到一个常见区域。我们在不同的数据集上进行了大量实验，并展示了DiffSmooth相比于八个基线模型的SOTA认证健壮性。例如，在ImageNet数据集上，DiffSmooth将SOTA认证准确率从36.0%提高到了53.0%，在&ell;2半径为1.5的情况下。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-jiawei](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-jiawei)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-jiawei.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-jiawei.pdf)
## ACORN: Input Validation for Secure Aggregation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#acorn-input-validation-for-secure-aggregation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#acorn-input-validation-for-secure-aggregation)**
### 作者
### 摘要
> 安全聚合使服务器能够以保护隐私的方式学习客户端持有向量的总和，并已应用于分布式统计分析和机器学习。在本文中，我们不仅介绍了一种更高效的安全聚合协议，还通过启用输入验证来扩展安全聚合功能，其中服务器可以检查客户端的输入是否满足诸如L0、L2和Linfinity限制等约束条件。这可以防止恶意客户端对聚合统计数据或机器学习模型产生不成比例的影响。我们的新安全聚合协议在渐近和具体方面都改进了当前最先进的Bell等人的协议（CCS 2020）的计算效率：通过实验评估，我们展示了在实际场景中客户端计算速度提高了2-8倍。同样，我们的进行了输入验证的扩展协议在客户端通信方面比之前的工作提升了30倍以上（且计算成本相当）。与没有输入验证的基本协议相比，扩展协议仅增加了0.1倍的通信量，并且可以在每个客户端的计算时间不超过80秒的情况下处理长度为1M的二进制指示向量或长度为250K的16位密集向量。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bell](https://www.usenix.org/conference/usenixsecurity23/presentation/bell)
## HOLMES: Efficient Distribution Testing for Secure Collaborative Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#holmes-efficient-distribution-testing-for-secure-collaborative-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#holmes-efficient-distribution-testing-for-secure-collaborative-learning)**
### 作者
* Ian Chang, UC Berkeley
* Katerina Sotiraki, UC Berkeley
* Weikeng Chen, UC Berkeley & DZK Labs
* Murat Kantarcioglu, University of Texas at Dallas & UC Berkeley
* Raluca Popa, UC Berkeley
### 摘要
> 利用安全多方计算（MPC），拥有敏感数据的机构（例如医疗保健、金融或执法）可以在共同数据集上训练机器学习模型，而无需将其数据相互透露。同时，安全计算限制了对共同数据集的操作，这会妨碍计算以评估其质量。如果没有这样的评估，部署共同训练的模型可能是非法的。法规（如欧盟的《通用数据保护条例》（GDPR））要求机构对其机器学习模型造成的错误、偏见或歧视负有法律责任。因此，在安全协作学习中，测试数据质量成为一步不可或缺的过程。然而，使用当前技术执行分布测试是一项代价高昂的任务，正如我们的实验证明的那样。
> 
> 我们介绍了HOLMES，一种用于高效执行分布测试的协议。在我们的实验中，与三个非平凡的基准相比，HOLMES 在经典分布测试方面实现了超过10倍的加速，对于多维度测试，速度提升高达104倍。HOLMES 的核心是一种混合协议，它将MPC与零知识证明以及一种新的适用于多维度测试的零知识友好且自然遗忘的草图算法相集成，这两种算法都具有更低的计算复杂度和具体执行成本。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chang](https://www.usenix.org/conference/usenixsecurity23/presentation/chang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chang.pdf](https://www.usenix.org/system/files/usenixsecurity23-chang.pdf)
## Keep Your Friends Close, but Your Routeservers Closer: Insights into RPKI Validation in the Internet.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#keep-your-friends-close-but-your-routeservers-closer-insights-into-rpki-validation-in-the-internet) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#keep-your-friends-close-but-your-routeservers-closer-insights-into-rpki-validation-in-the-internet)**
### 作者
* Tomas Hlavacek, Fraunhofer Institute for Secure Information Technology SIT and National Research Center for Applied Cybersecurity ATHENE
* Haya Shulman, Fraunhofer Institute for Secure Information Technology SIT, National Research Center for Applied Cybersecurity ATHENE, and Goethe-Universität Frankfurt
* Niklas Vogel, Fraunhofer Institute for Secure Information Technology SIT, National Research Center for Applied Cybersecurity ATHENE, and Goethe-Universität Frankfurt
* Michael Waidner, Fraunhofer Institute for Secure Information Technology SIT, National Research Center for Applied Cybersecurity ATHENE, and Technische Universität Darmstadt
### 摘要
> IP前缀劫持可以使对手重定向和拦截流量，对互联网的稳定性和安全性构成威胁。为了防止前缀劫持，网络应部署RPKI并用无效路由过滤虚假的BGP公告。在这项工作中，我们评估了RPKI部署对互联网安全性和韧性的影响。我们的目标是了解哪些网络过滤无效路由以及该过滤在阻止前缀劫持方面的有效性。我们扩展了先前的数据获取和分析方法，以获得更准确地识别使用RPKI过滤无效路由的网络。我们发现超过27%的网络执行RPKI过滤，并首次显示了部署遵循跨域路由的商业激励：供应商增加了过滤的动机，以避免失去客户的流量。
> 
> 通过分析RPKI的有效性，我们发现目前在互联网交换点（IXP）的路由服务器上部署RPKI仅对劫持提供了局部保护，对全球性的防止扩散影响微乎其微。相反，我们表明在Tier-1供应商中进行RPKI过滤极大地有益于互联网的安全性，因为它限制了劫持的扩散范围。根据我们的观察，我们提供了RPKI部署未来路线图的建议。
> 
> 我们将我们的数据集公开供公众使用。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/hlavacek](https://www.usenix.org/conference/usenixsecurity23/presentation/hlavacek)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-hlavacek.pdf](https://www.usenix.org/system/files/usenixsecurity23-hlavacek.pdf)
## Exploring the Unknown DTLS Universe: Analysis of the DTLS Server Ecosystem on the Internet.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#exploring-the-unknown-dtls-universe-analysis-of-the-dtls-server-ecosystem-on-the-internet) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#exploring-the-unknown-dtls-universe-analysis-of-the-dtls-server-ecosystem-on-the-internet)**
### 作者
* Nurullah Erinola, Ruhr University Bochum
* Marcel Maehren, Ruhr University Bochum
* Robert Merget, Technology Innovation Institute
* Juraj Somorovsky, Paderborn University
* Jörg Schwenk, Ruhr University Bochum
### 摘要
> DTLS旨在为UDP提供与TLS相同的安全保证。它被用于对延迟敏感的应用程序，如VPN、VoIP、视频会议和在线游戏，这些应用程序可能因可靠传输协议（如TCP）的开销而受到影响。虽然研究人员和开发人员在改进TLS的安全性方面投入了大量的努力，但DTLS的实现并没有得到同样的关注，尽管它们的重要性和相似性。因此，一个悬而未决的问题是TLS中发现的漏洞是否已在DTLS中解决，并且DTLS特有的功能是否为新攻击打开了可能性。
> 
> 为了填补这一空白，我们对开源工具TLS-Scanner进行了扩展，添加了对DTLS的支持，并实现了对DTLS专有功能的附加测试。我们评估了12个开源的DTLS服务器实现，并发现了11个安全漏洞，包括PionDTLS中的填充预言机漏洞以及wolfSSL、Scandium和JSSE中的DoS放大漏洞。然后，我们对公开可用的服务器进行了扫描。我们发现并分析了超过500,000个DTLS服务器，涵盖了八个端口，并提供了对公开可访问的DTLS服务器环境的详细见解。除了密码学漏洞和兼容性问题外，我们的分析表明，评估的服务器中有4.4%可能被用于DoS放大攻击，原因是在处理防DoS Cookie时不够谨慎。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/erinola](https://www.usenix.org/conference/usenixsecurity23/presentation/erinola)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-erinola.pdf](https://www.usenix.org/system/files/usenixsecurity23-erinola.pdf)
## We Really Need to Talk About Session Tickets: A Large-Scale Analysis of Cryptographic Dangers with TLS Session Tickets.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#we-really-need-to-talk-about-session-tickets-a-large-scale-analysis-of-cryptographic-dangers-with-tls-session-tickets) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#we-really-need-to-talk-about-session-tickets-a-large-scale-analysis-of-cryptographic-dangers-with-tls-session-tickets)**
### 作者
* Sven Hebrok, Paderborn University
* Simon Nachtigall, Paderborn University and achelos GmbH
* Marcel Maehren, Ruhr University Bochum
* Nurullah Erinola, Ruhr University Bochum
* Robert Merget, Technology Innovation Institute and Ruhr University Bochum
* Juraj Somorovsky, Paderborn University
* Jörg Schwenk, Ruhr University Bochum
### 摘要
> 会话票据可提高TLS协议的性能。它们允许通过使用先前会话中的密钥来缩短握手过程。为此，服务器使用仅服务器知道的会话票据加密密钥（STEK）加密密钥，并将其作为票据存储在客户端上，并在恢复时发送回服务器。标准将数据格式、加密算法和密钥管理等细节留给服务器实现。
> 
> TLS会话票据受到安全专家的批评，因为它们破坏了TLS的安全保证。如果一个对手可以猜测或者破解STEK，他可以被动地记录和解密TLS会话，并可能冒充服务器。因此，该机制的弱实现可能完全破坏TLS的安全保证。
> 
> 我们进行了对会话票据实现的加密陷阱的首次系统化大规模分析。（1）我们确定了12个开源实现使用的数据格式和加密算法，并设计了在线和离线测试来识别存在漏洞的实现。（2）我们进行了几次大规模扫描，并收集了会话票据以进行扩展的离线分析。
> 
> 我们发现了会话票据实现中的显著差异，并分析的服务器中存在关键安全问题。存在漏洞的服务器使用了弱密钥或重复的密钥流，从而允许进行会话票据解密。我们的分析揭示了亚马逊AWS生态系统中普遍存在的一种实现缺陷，导致至少在Tranco Top 100k服务器中的1.9%中可以被被动解密流量。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/hebrok](https://www.usenix.org/conference/usenixsecurity23/presentation/hebrok)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-hebrok.pdf](https://www.usenix.org/system/files/usenixsecurity23-hebrok.pdf)
## Extended Hell(o): A Comprehensive Large-Scale Study on Email Confidentiality and Integrity Mechanisms in the Wild.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#extended-hell-o-a-comprehensive-large-scale-study-on-email-confidentiality-and-integrity-mechanisms-in-the-wild) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#extended-hell-o-a-comprehensive-large-scale-study-on-email-confidentiality-and-integrity-mechanisms-in-the-wild)**
### 作者
* Birk Blechschmidt, Saarland University
* Ben Stock, CISPA Helmholtz Center for Information Security
### 摘要
> 目前电子邮件使用的核心规范可以追溯到20世纪70年代。当时，在开发通信协议时，安全性并不起重要作用。这些缺点至今仍然在钓鱼攻击的流行和对机会主义加密的依赖中体现。除了STARTTLS，还提出了各种机制，如SPF、DKIM、DMARC、DANE和MTA-STS。然而，相关研究表明，并不是所有的服务提供商都支持这些机制，并且常见的配置错误。在这项工作中，我们提供了电子邮件保密性和完整性措施的当前状况的综合概述，以及它们的部署效果。值得一提的是，多年来，对于传入TLS连接的支持已经显著增加，前1000万个域中有超过96%的可达MXs允许显式TLS连接。值得注意的是，30%的提供的证书无效，其中大部分问题与提供的主机名相关。基于这个情况，我们测试的所有47个服务提供商都连接到具有过期、自签名、不匹配证书的主机上，使得攻击者可以轻易地拦截它们的连接。我们的分析还显示，仅仅约40%的网站指定了SPF，并且即使是排名很高的提供商如t-online.de也没有强制执行它。类似地，虽然DNS查找用于DKIM和DANE的机制，但并不是所有的服务提供商都对其进行验证或强制执行。此外，我们还展示了MTA-STS只在慢慢得到认可（有六个提供商支持），并提供了首个关于OPENPGPKEY和SMIMEA记录的大规模分析。总而言之，到2022年底，电子邮件安全状况仍然不容乐观，但略有改善的态势。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/blechschmidt](https://www.usenix.org/conference/usenixsecurity23/presentation/blechschmidt)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-blechschmidt.pdf](https://www.usenix.org/system/files/usenixsecurity23-blechschmidt.pdf)
## No Linux, No Problem: Fast and Correct Windows Binary Fuzzing via Target-embedded Snapshotting.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#no-linux-no-problem-fast-and-correct-windows-binary-fuzzing-via-target-embedded-snapshotting) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#no-linux-no-problem-fast-and-correct-windows-binary-fuzzing-via-target-embedded-snapshotting)**
### 作者
* Leo Stone, Virginia Tech
* Rishi Ranjan, Virginia Tech
* Stefan Nagy, University of Utah
* Matthew Hicks, Virginia Tech
### 摘要
> 摘要——基于覆盖率的模糊测试仍然是目前发现软件安全漏洞最成功的方法。在模糊测试中，速度至关重要，通过保持高测试用例的吞吐量，能够更快地探索程序，从而更快地发现漏洞。高性能的模糊测试工具利用Linux内核的可定制性来实现进程快照：模糊测试导向的执行基元极大地提高了模糊测试的吞吐量。然而，这样的速度在Windows操作系统上很难实现。由于Windows内核是闭源的，当前基于内核的快照技术无法移植，严重限制了在Windows程序上的模糊测试效果。因此，加快对Windows软件生态系统的检测要求一种快速、正确且与内核无关的模糊测试执行机制。
> 
> 本文提出通过嵌入目标快照技术，将状态快照作为应用层关注而不是内核层关注。目标嵌入快照技术通过二进制和库级别的钩子，允许应用程序自行进行快照，同时保持其源代码和Windows内核不受影响。我们在10个真实的Windows二进制文件上进行评估，结果显示目标嵌入快照技术克服了之前Windows模糊测试执行机制（如进程创建，forkserver式克隆和持久模式）的速度、正确性和兼容性挑战，性能提高了7至182倍。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/stone](https://www.usenix.org/conference/usenixsecurity23/presentation/stone)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-stone.pdf](https://www.usenix.org/system/files/usenixsecurity23-stone.pdf)
## DAFL: Directed Grey-box Fuzzing guided by Data Dependency.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#dafl-directed-grey-box-fuzzing-guided-by-data-dependency) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#dafl-directed-grey-box-fuzzing-guided-by-data-dependency)**
### 作者
* Tae Eun Kim, KAIST
* Jaeseung Choi, Sogang University
* Kihong Heo, KAIST
* Sang Kil Cha, KAIST
### 摘要
> 尽管有越来越多的研究兴趣，现有的指导灰盒模糊测试工具在处理程序复杂性方面并不具备良好的扩展性。在本文中，我们确定了当前指导灰盒模糊测试所面临的两个主要可扩展性挑战。特别地，我们发现传统的覆盖反馈并不总能提供有意义的指导来到达目标程序点，并且现有的种子距离机制在处理具有复杂控制结构的程序时效果并不好。为了解决这些问题，我们提出了一种新型模糊测试工具，名为DAFL。DAFL选择与目标位置相关的代码部分，并仅从这些部分获取覆盖反馈。此外，它根据程序执行的数据流语义计算精确的种子距离。结果表明，DAFL在给定时间内相比于AFL、AFLGo、WindRanger和Beacon，能够找到41个真实世界bug中的4个、6个、9个和5个更多的bug。此外，在所有模糊测试工具产生中位TTE的情况中，DAFL相比于AFLGo、WindRanger和Beacon等三种最先进的指导模糊测试工具平均至少快4.99倍。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kim-tae-eun](https://www.usenix.org/conference/usenixsecurity23/presentation/kim-tae-eun)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kim-tae-eun.pdf](https://www.usenix.org/system/files/usenixsecurity23-kim-tae-eun.pdf)
## DynSQL: Stateful Fuzzing for Database Management Systems with Complex and Valid SQL Query Generation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#dynsql-stateful-fuzzing-for-database-management-systems-with-complex-and-valid-sql-query-generation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#dynsql-stateful-fuzzing-for-database-management-systems-with-complex-and-valid-sql-query-generation)**
### 作者
* Zu-Ming Jiang, ETH Zurich
* Jia-Ju Bai, Tsinghua University
* Zhendong Su, ETH Zurich
### 摘要
> 数据库管理系统（DBMS）是现代软件的必要组成部分。为了确保DBMS的安全性，最近的方法应用模糊测试来对DBMS进行测试，通过自动生成SQL查询。然而，现有的DBMS模糊测试工具在生成复杂和有效的查询方面存在局限性，因为它们严重依赖预定义的语法模型和固定的关于DBMS的知识，但却无法捕获DBMS特定的状态信息。因此，这些方法在DBMS中错过了许多深层次的错误。
> 
> 在本文中，我们提出了一种新颖的有状态模糊测试方法，以有效地测试DBMS并发现深层次的错误。我们的基本思想是，在DBMS处理每个SQL语句之后，有有用的状态信息可以被动态收集，以便于后续查询的生成。基于这个思想，我们的方法通过动态查询交互，逐步生成复杂和有效的SQL查询，并利用捕获的状态信息。为了进一步提高生成查询的有效性，我们的方法使用查询处理的错误状态来过滤无效的测试用例。我们将我们的方法实现为一个完全自动的模糊测试框架，DynSQL。DynSQL在6个广泛使用的DBMS（包括SQLite、MySQL、MariaDB、PostgreSQL、MonetDB和ClickHouse）上进行了评估，并找到了40个独特的错误。在这些错误中，有38个经过确认，21个已经修复，19个被分配了CVE ID。在我们的评估中，DynSQL优于其他最先进的DBMS模糊测试工具，实现了41%更高的代码覆盖率，并找到了其他模糊测试工具所错过的许多错误。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/jiang-zu-ming](https://www.usenix.org/conference/usenixsecurity23/presentation/jiang-zu-ming)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-jiang-zu-ming.pdf](https://www.usenix.org/system/files/usenixsecurity23-jiang-zu-ming.pdf)
## AIFORE: Smart Fuzzing Based on Automatic Input Format Reverse Engineering.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#aifore-smart-fuzzing-based-on-automatic-input-format-reverse-engineering) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#aifore-smart-fuzzing-based-on-automatic-input-format-reverse-engineering)**
### 作者
* Ji Shi, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, Chinese Academy of Sciences; Institute for Network Science and Cyberspace & BNRist, Tsinghua University; Zhongguancun Lab; Singular Security Lab, Huawei Technologies; School of Cyber Security, University of Chinese Academy of Sciences
* Zhun Wang, Institute for Network Science and Cyberspace & BNRist, Tsinghua University; Zhongguancun Lab
* Zhiyao Feng, Institute for Network Science and Cyberspace & BNRist, Tsinghua University; Zhongguancun Lab; EPFL
* Yang Lan, Institute for Network Science and Cyberspace & BNRist, Tsinghua University; Zhongguancun Lab
* Shisong Qin, Institute for Network Science and Cyberspace & BNRist, Tsinghua University; Zhongguancun Lab
* Wei You, Renmin University of China
* Wei Zou, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
* Mathias Payer, EPFL
* Chao Zhang, Institute for Network Science and Cyberspace & BNRist, Tsinghua University; Zhongguancun Lab
### 摘要
> 程序输入格式的了解对于有效的模糊测试输入生成至关重要。自动输入格式逆向工程代表了一种有吸引力但具有挑战性的学习格式的方法。在本文中，我们解决了自动输入格式逆向工程的几个挑战，并提出了智能模糊测试方案AIFORE，充分利用了逆向格式并从中获益。输入字段的结构和语义是由处理它们的基本块（BBs）确定的，而不是由输入规范确定的。因此，我们首先利用字节级污点分析来识别每个BB处理的输入字节，然后利用最小簇算法确定总是与其一起处理的不可分割的输入字段，并使用神经网络模型学习它们的类型，以描述BB的行为。最后，我们设计了一种基于推断的格式知识的新型功率调度算法，以指导智能模糊测试。我们实现了AIFORE的原型，并针对最先进的格式逆向解决方案和模糊测试器评估了格式推断的准确性和模糊测试的性能。AIFORE在字段边界和类型识别的准确性上显著优于最先进的基线技术。通过AIFORE，我们发现了其他模糊测试器未发现的15个程序中的20个错误。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shi-ji](https://www.usenix.org/conference/usenixsecurity23/presentation/shi-ji)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shi-ji.pdf](https://www.usenix.org/system/files/usenixsecurity23-shi-ji.pdf)
## BoKASAN: Binary-only Kernel Address Sanitizer for Effective Kernel Fuzzing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#bokasan-binary-only-kernel-address-sanitizer-for-effective-kernel-fuzzing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#bokasan-binary-only-kernel-address-sanitizer-for-effective-kernel-fuzzing)**
### 作者
* Mingi Cho, Yonsei University
* Dohyeon An, Yonsei University
* Hoyong Jin, Yonsei University
* Taekyoung Kwon, Yonsei University
### 摘要
> 内核地址破坏检测（KASAN）是在Linux内核中查找使用后释放和越界错误的无价之宝，它需要内核源代码进行编译时插桩。为了将KASAN应用到闭源系统中，我们需要开发一个仅限二进制的KASAN，这是具有挑战性的。使用二进制重写和处理器支持来运行二进制模块的KASAN的技术需要一个已应用KASAN的内核，因此仍需内核源代码。动态插桩提供了一种替代方法，但会大大增加性能开销，从而使内核模糊测试变得不实际。
> 
> 为了解决这些问题，我们提出了第一个实用的仅限二进制的KASAN，名为BoKASAN，它通过动态插桩为整个内核二进制进行地址清理。我们的关键思想是选择性清理，它识别要进行清理的目标进程，并钩子化页面错误机制，从而显著降低了动态插桩的性能开销。我们的关键洞察力在于内核错误与由模糊测试器创建的进程最相关。因此，BoKASAN有意地对与这些进程相关的目标内存区域进行清理，并保留其他部分以进行有效的内核模糊测试。
> 
> 我们的评估结果表明，BoKASAN在闭源系统上是可行的，即使在仅限二进制的内核和模块上，也能实现与KASAN相同的编译器级性能。与Linux内核上的KASAN相比，BoKASAN在Janus数据集中检测到的错误略多，而在Syzkaller/SyzVegas数据集中检测到的错误略少；并且在进行为期5天的模糊测试时，BoKASAN发现了相同数量的独特错误，并执行了相似数量的基本块。对于Windows内核和Linux内核上的二进制模块，BoKASAN能够有效地找到错误。去除选择性清理的实验结果表明，它对这些结果产生了影响。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cho](https://www.usenix.org/conference/usenixsecurity23/presentation/cho)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cho.pdf](https://www.usenix.org/system/files/usenixsecurity23-cho.pdf)
## ACTOR: Action-Guided Kernel Fuzzing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#actor-action-guided-kernel-fuzzing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#actor-action-guided-kernel-fuzzing)**
### 作者
* Marius Fleischer, University of California, Santa Barbara
* Dipanjan Das, University of California, Santa Barbara
* Priyanka Bose, University of California, Santa Barbara
* Weiheng Bai, University of Minnesota
* Kangjie Lu, University of Minnesota
* Mathias Payer, EPFL
* Christopher Kruegel, University of California, Santa Barbara
* Giovanni Vigna, University of California, Santa Barbara
### 摘要
> Fuzzing（模糊测试）可可靠且高效地发现软件中的漏洞，包括操作系统内核。一般来说，更高的代码覆盖率会发现更多的漏洞。这就是为什么大多数现有的内核模糊测试器采用生成一系列输入的策略，这些输入试图贪婪地最大化它们所使用的代码量。然而，仅仅执行代码可能不足以揭示需要特定动作序列的漏洞。触发此类漏洞的输入合成取决于两个方面：（i）执行的代码所采取的动作，以及（ii）这些动作采取的顺序。动作是一种高级操作，例如堆分配，由执行的代码执行，并具有特定的语义含义。
> 
> ACTOR（行动导向的内核模糊测试框架）与传统方法有所不同。我们的方法不是专注于代码覆盖率优化，而是利用我们对触发动作及其时间关系的理解来生成模糊器程序（输入）。具体而言，我们首先捕获不同时间可能在共享数据结构上操作的动作。然后，我们使用这些动作作为构建模块，以我们的领域特定语言中的漏洞模板为指导，合成程序。
> 
> 我们在四个不同版本的Linux内核上评估了ACTOR，包括两个经过充分测试和频繁更新的长期支持（5.4.206，5.10.131）版本，一个稳定的（5.19）版本和最新的（6.2-rc5）版本。我们的评估揭示了总共41个以前未知的漏洞，其中9个已经得到修复。有趣的是，其中的15个（36.59%）在不到一天的时间内被发现。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/fleischer](https://www.usenix.org/conference/usenixsecurity23/presentation/fleischer)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-fleischer.pdf](https://www.usenix.org/system/files/usenixsecurity23-fleischer.pdf)
## FirmSolo: Enabling dynamic analysis of binary Linux-based IoT kernel modules.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#firmsolo-enabling-dynamic-analysis-of-binary-linux-based-iot-kernel-modules) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#firmsolo-enabling-dynamic-analysis-of-binary-linux-based-iot-kernel-modules)**
### 作者
* Ioannis Angelakopoulos, Boston University
* Gianluca Stringhini, Boston University
* Manuel Egele, Boston University
### 摘要
> 基于Linux的固件在物联网（IoT）设备上运行，它由用户级程序和内核级代码组成，非常复杂。这两个组成部分都显示出严重的安全漏洞，与内核漏洞相关的风险尤为高，因为这可能导致系统完全被入侵。然而，以往的研究只关注嵌入式固件的用户空间组件。在本文中，我们介绍了固件解决方案（FirmSolo），这是一个系统，旨在将内核空间纳入固件分析中。FirmSolo具有内核配置反向工程（K.C.R.E.）过程，利用固件映像中的内核模块的信息（即导出和所需的符号和版本魔数）来构建一个可以在模拟环境中加载模块的内核。这种能力使得下游分析能够扩大其对特权模式下执行代码的范围。
> 
> 我们在1,470个包含56,688个内核模块的映像上评估了FirmSolo，在其中加载了64%的内核模块。为了展示FirmSolo如何帮助下游分析，我们将其与两个代表性分析系统集成在一起；TriforceAFL内核模糊测试工具和Firmadyne，一个最初没有内核模式分析能力的动态固件分析工具。我们在一部分75个内核模块上进行的TriforceAFL实验中，发现了11个不同专有模块中的19个以前未知的漏洞。通过Firmadyne，我们在84个固件映像中确认了这些以前未知的漏洞的存在。此外，通过使用FirmSolo，Firmadyne在15个固件映像中确认了一个对5个不同版本的闭源Kcodes' NetUSB模块的已知内存损坏漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/angelakopoulos](https://www.usenix.org/conference/usenixsecurity23/presentation/angelakopoulos)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-angelakopoulos.pdf](https://www.usenix.org/system/files/usenixsecurity23-angelakopoulos.pdf)
## KextFuzz: Fuzzing macOS Kernel EXTensions on Apple Silicon via Exploiting Mitigations.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#kextfuzz-fuzzing-macos-kernel-extensions-on-apple-silicon-via-exploiting-mitigations) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#kextfuzz-fuzzing-macos-kernel-extensions-on-apple-silicon-via-exploiting-mitigations)**
### 作者
* Tingting Yin, Tsinghua University and Ant Group
* Zicong Gao, State Key Laboratory of Mathematical Engineering and Advanced Computing
* Zhenghang Xiao, Hunan University
* Zheyu Ma, Tsinghua University
* Min Zheng, Ant Group
* Chao Zhang, Tsinghua University and Zhongguancun Laboratory
### 摘要
> macOS的驱动程序，即内核扩展（kext），是攻击者吸引人的攻击目标。然而，自动发现kext中的漏洞非常具有挑战性，因为kext大多是闭源的，并且最新的运行在定制的Apple Silicon上的macOS有限的工具链支持。大多数现有的静态分析和动态测试解决方案无法应用于最新的macOS。在本文中，我们介绍了第一个智能模糊解决方案KextFuzz，以检测运行在Apple Silicon上的最新macOS kext中的错误。与现有的驱动程序模糊解决方案不同，KextFuzz不需要源代码、执行跟踪、虚拟化程序或硬件特性（例如覆盖跟踪），因此具有普遍性和实用性。我们注意到，macOS已经部署了许多缓解措施，包括指针认证、代码签名和用户空间内核层封装，以防止潜在的攻击。这些缓解措施可以为我们提供额外的知识和资源，来实现内核模糊。KextFuzz利用这些缓解方案来检测二进制代码的覆盖范围、测试受保护且访问不频繁的特权kext代码，并推断kext接口的类型和语义信息。KextFuzz在macOS kext中发现了48个独特的内核错误。其中一些错误可能会造成严重后果，如不可恢复的拒绝服务或损害。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yin](https://www.usenix.org/conference/usenixsecurity23/presentation/yin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yin.pdf](https://www.usenix.org/system/files/usenixsecurity23-yin.pdf)
## Uncontained: Uncovering Container Confusion in the Linux Kernel.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#uncontained-uncovering-container-confusion-in-the-linux-kernel) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#uncontained-uncovering-container-confusion-in-the-linux-kernel)**
### 作者
* Jakob Koschel, Vrije Universiteit Amsterdam
* Pietro Borrello, Sapienza University of Rome
* Daniele Cono D'Elia, Sapienza University of Rome
* Herbert Bos, Vrije Universiteit Amsterdam
* Cristiano Giuffrida, Vrije Universiteit Amsterdam
### 摘要
> 类型混淆错误是一种常见的安全问题来源，每当软件使用类型层次结构时，对与不兼容类型进行的无意的向下转型很难在编译时检测到，并且很容易导致运行时内存损坏。现有的研究主要研究面向对象语言（如C++）中的类型混淆问题，我们分析了类似错误如何影响复杂的C项目，如Linux内核。特别地，结构体嵌套模拟了类型之间的继承关系。在这种情况下，向下转型包括确定嵌套结构体所在的容器结构体，并且与C++中的向下转型类似，可能导致向不兼容类型的错误转型。
> 
> 在本文中，我们提出了称为uncontained的系统性的双重解决方案，用于发现由于结构体嵌套上的错误向下转型而导致的类型混淆漏洞，我们称之为容器混淆。首先，我们设计了一个新颖的检测器来动态检测此类问题，并在Linux内核上进行了评估，在那里我们发现了多达11个容器混淆错误。然后，我们利用检测器所发现的漏洞模式，开发了一个静态分析器，以找出动态分析无法达到的代码中的类似漏洞，并检测到另外78个漏洞。我们向Linux内核维护者报告了所有漏洞，并提出了修补程序（已合并了102个修补程序，并分配了6个CVE编号），与Linux内核维护者合作，为容器操作选择更安全的设计选择。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/koschel](https://www.usenix.org/conference/usenixsecurity23/presentation/koschel)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-koschel.pdf](https://www.usenix.org/system/files/usenixsecurity23-koschel.pdf)
## "I'm going to trust this until it burns me" Parents' Privacy Concerns and Delegation of Trust in K-8 Educational Technology.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#im-going-to-trust-this-until-it-burns-me-parents-privacy-concerns-and-delegation-of-trust-in-k-8-educational-technology) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#im-going-to-trust-this-until-it-burns-me-parents-privacy-concerns-and-delegation-of-trust-in-k-8-educational-technology)**
### 作者
* Victoria Zhong, New York University
* Susan McGregor, Columbia University
* Rachel Greenstadt, New York University
### 摘要
> 由于COVID-19的限制，几乎一夜之间，学生们被迫转向远程学习，教育软件成为数据泄露的目标，诸如Illuminate数据泄露事件影响了全国数百万学生，仅纽约市（NYC）就有超过82万名现役和前学生受到影响。尽管已经普遍回归面授学校，但一些学校仍然依赖远程学习技术，甚至在天气恶劣或"雪天"关闭时也使用远程学习。鉴于这些课堂技术的持续使用，我们试图了解家长对安全和隐私风险的认识。我们还想知道家长在孩子使用这些工具方面有哪些担忧，以及这些担忧的根源是什么。为了回答这些问题，我们对18名纽约市K至8年级的家长进行了访谈。我们发现，尽管COVID-19大流行对于许多孩子和一些家长来说是首次接触远程学习技术，但对于孩子、家长和教育工作者而言，对于这些技术的指导和培训不足。我们还发现，参与访谈的家长普遍信任学校和教育部门（DOE）能够保护他们的孩子和孩子的数据安全，因此很少报告与课堂技术相关的隐私和安全问题。然而与此同时，他们描述了许多情况，显示出与课堂技术相关的隐私和安全风险。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhong](https://www.usenix.org/conference/usenixsecurity23/presentation/zhong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhong.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhong.pdf)
## Educators' Perspectives of Using (or Not Using) Online Exam Proctoring.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#educators-perspectives-of-using-or-not-using-online-exam-proctoring) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#educators-perspectives-of-using-or-not-using-online-exam-proctoring)**
### 作者
* David G. Balash, The George Washington University
* Elena Korkes, The George Washington University
* Miles Grant, The George Washington University
* Adam J. Aviv, The George Washington University
* Rahel A. Fainchtein, Georgetown University
* Micah Sherr, Georgetown University
### 摘要
> 新冠疫情的爆发改变了教育的格局，并导致远程监考工具的使用增加，这些工具旨在监控学生在课堂外进行考试。虽然之前的研究探讨了学生对在线监考工具的隐私和安全问题的关注，但教育工作者的观点尚未得到充分研究。值得注意的是，教育工作者是教室中的决策者，他们选择哪种远程监考服务以及适当的观察水平。为了探讨教育工作者如何在保护学生的安全和隐私与远程考试要求之间取得平衡，我们向一所大型私立大学的3400多名在线课程教师发出了调查请求，他们在2020/21学年期间进行了线上教学。我们收到了125份回答：21%的教育工作者在远程学习期间使用了在线考试监考服务，并且其中35%计划在全面恢复面对面教学时继续使用这些工具。使用考试监考服务的教育工作者对其监控能力通常感到满意。然而，教育工作者担心学生与考试监考公司分享某些类型的信息，特别是当监考服务收集可识别信息以验证学生身份时。我们的结果表明，许多教育工作者开发了不需要在线监考的替代评估方法，而那些使用在线监考服务的教育工作者通常会考虑到潜在的对学生隐私的风险与考试监考服务的效用或必要性之间的权衡。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/balash](https://www.usenix.org/conference/usenixsecurity23/presentation/balash)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-balash.pdf](https://www.usenix.org/system/files/usenixsecurity23-balash.pdf)
## No more Reviewer #2: Subverting Automatic Paper-Reviewer Assignment using Adversarial Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#no-more-reviewer-2-subverting-automatic-paper-reviewer-assignment-using-adversarial-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#no-more-reviewer-2-subverting-automatic-paper-reviewer-assignment-using-adversarial-learning)**
### 作者
* Thorsten Eisenhofer, Ruhr University Bochum
* Erwin Quiring, Ruhr University Bochum and International Computer Science Institute (ISCI) Berkeley
* Jonas Möller, Technische Universität Berlin
* Doreen Riepel, Ruhr University Bochum
* Thorsten Holz, CISPA Helmholtz Center for Information Security
* Konrad Rieck, Technische Universität Berlin
### 摘要
> 在许多科学学科中，提交学术会议论文的数量正在稳步增长。为了应对这种增长，越来越多的自动论文评审系统在评审过程中使用。这些系统使用统计主题模型来表征提交内容并自动分配给评审人。在本文中，我们展示了这种自动化过程可以通过对抗学习来操纵。我们提出了一种攻击方法，通过调整给定论文使其误导分配过程并选择自己的评审人。我们的攻击基于一种新颖的优化策略，该策略在特征空间和问题空间之间交替进行，以实现对论文的不显眼的改变。为了评估我们的攻击的可行性，我们模拟了一个真实安全会议（IEEE S&P）的论文-评审人分配情况，该会议有165名委员会成员。我们的结果表明，即使没有访问分配系统，我们仍然可以成功选择和移除评审人。此外，我们证明被操纵的论文保持合理，并且往往与正常提交的论文难以区分。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/eisenhofer](https://www.usenix.org/conference/usenixsecurity23/presentation/eisenhofer)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-eisenhofer.pdf](https://www.usenix.org/system/files/usenixsecurity23-eisenhofer.pdf)
## A Two-Decade Retrospective Analysis of a University's Vulnerability to Attacks Exploiting Reused Passwords.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-two-decade-retrospective-analysis-of-a-universitys-vulnerability-to-attacks-exploiting-reused-passwords) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-two-decade-retrospective-analysis-of-a-universitys-vulnerability-to-attacks-exploiting-reused-passwords)**
### 作者
* Alex, University of Chicago / Carnegie Mellon University
* ra Nisenoff, University of Chicago / Carnegie Mellon University
* Maximilian Golla, University of Chicago / Max Planck Institute for Security and Privacy
* Mir, University of Chicago / University of Washington
* a Wei, University of Chicago / University of Washington
* Juliette Hainline, University of Chicago
* Hayley Szymanek, University of Chicago
* Annika Braun, University of Chicago
* Annika Hildebr, University of Chicago
* t, University of Chicago
* Blair Christensen, University of Chicago
* David Langenberg, University of Chicago
* Blase Ur, University of Chicago
### 摘要
> 凭据猜测攻击经常利用在用户的在线账户上重复使用的密码。为了了解组织如何更好地保护用户，我们对我们大学在过去二十年内受到的凭据猜测攻击的漏洞进行了回顾性分析。我们获得了一份大学用户名列表，然后在数百个网站的数据泄露以及十几个大规模数据泄露的文件中搜索匹配项。通过破解散列密码和调整猜测密码，我们成功地猜测出了32.0％与大学电子邮件地址匹配的账户的密码，以及6.5％的账户，其中用户名（但不一定是域名）匹配。这些账户中的许多在泄露数据后多年仍然存在漏洞，而在泄露中找到的与原始密码完全相同的密码几乎有四倍的可能性已被利用（即发现了可疑账户活动），而调整后的猜测则较少发生利用。超过70次不同的数据泄露和各种用户名匹配策略为正确的猜测提供了基础。在对我们猜测密码的40个用户进行调查时，许多用户对他们大学账户的风险或他们的凭据已经泄露一事毫不知情。我们对大学密码重用的分析为组织提供了实用的账户保护建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/nisenoff-retrospective](https://www.usenix.org/conference/usenixsecurity23/presentation/nisenoff-retrospective)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-nisenoff-retrospective.pdf](https://www.usenix.org/system/files/usenixsecurity23-nisenoff-retrospective.pdf)
## Ethical Frameworks and Computer Security Trolley Problems: Foundations for Conversations.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#ethical-frameworks-and-computer-security-trolley-problems-foundations-for-conversations) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#ethical-frameworks-and-computer-security-trolley-problems-foundations-for-conversations)**
### 作者
* Tadayoshi Kohno, University of Washington
* Yasemin Acar, Paderborn University & George Washington University
* Wulf Loh, Universität Tübingen
### 摘要
> 计算机安全研究界长期以来关注伦理问题。伦理学/道德哲学领域几世纪以来一直在思考“道德善良”或至少“道德允许/可接受”的含义。哲学为伦理行为评估提供了一些框架，包括广为人知的后果主义和义务论等，并通过场景（如轨道车问题）展示道德困境，促进对道德推理和决策不同观点的讨论和学术探究。在一个经典的轨道车问题中，后果主义和义务论的分析可能会得出不同的结论。在这项研究中，我们明确建立并探究了计算机安全研究中道德问题与伦理学/道德哲学之间的联系，通过创建和分析以计算机安全为主题的轨道车问题类似的道德困境，以期为安全研究人员关于安全研究相关决策的道德性进行讨论和贡献。我们明确不寻求定义什么是道德对或错，也不主张一种框架胜过另一种。事实上，我们提供的后果主义和义务论框架，除了对我们的场景得出不同的结论外，还存在显著限制。相反，通过提供我们的场景并比较两种不同的伦理观点，我们努力为计算机安全研究领域在道德问题方面的考虑和讨论做出贡献，特别是在存在不同道德价值观的情况下。我们的目标是使这项工作广泛受到计算机安全界的欢迎，包括研究人员在开始（或选择不开始）研究、进行研究和撰写研究报告时的参考，以及对程序委员会评估提交论文以及教育工作者教授计算机安全和伦理学时的参考。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kohno](https://www.usenix.org/conference/usenixsecurity23/presentation/kohno)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kohno.pdf](https://www.usenix.org/system/files/usenixsecurity23-kohno.pdf)
## Catch You and I Can: Revealing Source Voiceprint Against Voice Conversion.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#catch-you-and-i-can-revealing-source-voiceprint-against-voice-conversion) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#catch-you-and-i-can-revealing-source-voiceprint-against-voice-conversion)**
### 作者
* Jiangyi Deng, Zhejiang University
* Yanjiao Chen, Zhejiang University
* Yinan Zhong, Zhejiang University
* Qianhao Miao, Zhejiang University
* Xueluan Gong, Wuhan University
* Wenyuan Xu, Zhejiang University
### 摘要
> 语音转换（VC）技术可以被恶意方利用，将他们的音频转换成与目标说话者相似的声音，使人类或说话者验证/识别系统难以追溯声源说话者。在本文中，我们首次尝试从使用高信用的语音转换方法合成的音频中恢复源语音特征。然而，从转换后的音频中揭示源说话者的特征具有挑战性，因为语音转换操作意图将原始特征解开并注入目标说话者的特征。为了实现我们的目标，我们开发了Revelio，一种表示学习模型，它能够有效地从转换后的音频样本中提取源说话者的声纹。我们为Revelio配备了一个精心设计的差分校正算法，通过消除与目标说话者声纹相平行的表示部分，消除目标说话者的影响。我们进行了大量实验来评估Revelio在通过VQVC、VQVC+、AGAIN和BNE转换的音频中恢复声纹的能力。实验证实Revelio能够重建可通过说话者验证和识别系统追溯到源说话者的声纹。Revelio在不同性别转换、未见过的语言和电话网络下也展现了稳健的性能。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/deng-jiangyi-voiceprint](https://www.usenix.org/conference/usenixsecurity23/presentation/deng-jiangyi-voiceprint)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-deng-jiangyi-voiceprint.pdf](https://www.usenix.org/system/files/usenixsecurity23-deng-jiangyi-voiceprint.pdf)
## V-Cloak: Intelligibility-, Naturalness- & Timbre-Preserving Real-Time Voice Anonymization.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#v-cloak-intelligibility-naturalness-timbre-preserving-real-time-voice-anonymization) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#v-cloak-intelligibility-naturalness-timbre-preserving-real-time-voice-anonymization)**
### 作者
* Jiangyi Deng, Zhejiang University
* Fei Teng, Zhejiang University
* Yanjiao Chen, Zhejiang University
* Xiaofu Chen, Wuhan University
* Zhaohui Wang, Wuhan University
* Wenyuan Xu, Zhejiang University
### 摘要
> 通过即时通讯或社交媒体应用程序生成的语音数据包含独特的用户声纹，恶意对手可能滥用这些声纹进行身份推断或身份盗用。现有的语音匿名化技术，如信号处理和语音转换/合成，存在感知质量下降的问题。在本文中，我们开发了一个名为V-Cloak的语音匿名化系统，该系统能够在保留音频的可理解性、自然性和音色的同时实现实时语音匿名化。我们设计的匿名化器通过一个一次性生成模型，在不同的频率水平上调节原始音频的特征。我们使用一个经过精心设计的损失函数对匿名化器进行训练。除了匿名性损失外，我们还进一步融入了可理解性损失和基于心理声学的自然性损失。匿名化器可以实现非定向和定向的匿名化，以实现无法识别性和无法关联性的匿名性目标。
> 
> 我们在四个数据集上进行了广泛的实验，即LibriSpeech（英语）、AISHELL（中文）、CommonVoice（法语）和CommonVoice（意大利语），五个自动说话者验证（ASV）系统（包括两个基于DNN的、两个统计的和一个商业的ASV），以及十一个自动语音识别（ASR）系统（用于不同语言）。实验结果证实，在匿名性能方面，V-Cloak优于五个基线系统。我们还证明了仅在VoxCeleb1数据集上对抗ECAPA-TDNN ASV和DeepSpeech2 ASR进行训练的V-Cloak在其他ASV系统上具有可转移的匿名性，并且对于其他ASR系统具有跨语言的可理解性。此外，我们还验证了V-Cloak对各种降噪技术和自适应攻击的鲁棒性。希望V-Cloak能在五光十色的世界中为我们提供一层披风。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/deng-jiangyi-v-cloak](https://www.usenix.org/conference/usenixsecurity23/presentation/deng-jiangyi-v-cloak)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-deng-jiangyi-v-cloak.pdf](https://www.usenix.org/system/files/usenixsecurity23-deng-jiangyi-v-cloak.pdf)
## Assessing Anonymity Techniques Employed in German Court Decisions: A De-Anonymization Experiment.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#assessing-anonymity-techniques-employed-in-german-court-decisions-a-de-anonymization-experiment) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#assessing-anonymity-techniques-employed-in-german-court-decisions-a-de-anonymization-experiment)**
### 作者
* Dominic Deuber, Friedrich-Alexander-Universität Erlangen-Nürnberg
* Michael Keuchen, Friedrich-Alexander-Universität Erlangen-Nürnberg
* Nicolas Christin, Carnegie Mellon University
### 摘要
> 民主需要透明度。因此，法院必须公开其裁决。与此同时，必须保护与这些法院决定相关的人的利益。出于这个原因，在欧洲，通过使用各种技术对法院决定进行匿名处理。为了了解这些技术对相关人员的保护情况，我们进行了一项实证实验，邀请了54名法学生对50份德国法院决定进行去匿名化。我们发现，这些法院决定中使用的所有匿名化技术都有漏洞，其中最明显的是使用姓名首字母的方式。由于即使是被认为是安全的匿名化技术也容易受到攻击，我们的工作在实证上揭示了法院决定匿名化所涉及的复杂性，并呼吁进一步的研究来增加匿名化的同时保留可理解性。为此，我们提供了改进匿名化质量的建议。最后，我们在法律背景下提供了“合理努力”的实证概念，以明确匿名性的定义。通过这样做，我们弥合了技术和法律对匿名性的理解之间的差距。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/deuber](https://www.usenix.org/conference/usenixsecurity23/presentation/deuber)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-deuber.pdf](https://www.usenix.org/system/files/usenixsecurity23-deuber.pdf)
## Person Re-identification in 3D Space: A WiFi Vision-based Approach.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#person-re-identification-in-3d-space-a-wifi-vision-based-approach) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#person-re-identification-in-3d-space-a-wifi-vision-based-approach)**
### 作者
* Yili Ren, Florida State University
* Yichao Wang, Florida State University
* Sheng Tan, Trinity University
* Yingying Chen, Rutgers University
* Jie Yang, Florida State University
### 摘要
> 人员再识别（Re-ID）在支持各种安全应用方面变得越来越重要。传统的人员再识别主要依赖于光学相机系统，但由于人员外貌变化、遮挡和人体姿势的改变，存在一些限制。在这项工作中，我们提出了一种基于WiFi视觉的3D空间人员再识别系统3D-ID。我们的系统利用WiFi和深度学习的进展来帮助WiFi设备“看见”、识别和识别人员。特别是，我们利用下一代WiFi设备上的多个天线和信号反射的2D角度估计来使WiFi能够在物理环境中可视化一个人。然后，我们利用深度学习将人员的可视化数字化为3D身体表示，并提取静态身体形状和动态步行模式以进行人员再识别。我们在各种室内环境下的评估结果表明，3D-ID系统的整体排名1准确率达到85.3%。结果还表明，我们的系统对各种攻击具有抵抗力。因此，所提出的3D-ID非常有前景，可以增强或补充基于摄像机的系统。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ren](https://www.usenix.org/conference/usenixsecurity23/presentation/ren)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ren.pdf](https://www.usenix.org/system/files/usenixsecurity23-ren.pdf)
## In the Quest to Protect Users from Side-Channel Attacks - A User-Centred Design Space to Mitigate Thermal Attacks on Public Payment Terminals.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#in-the-quest-to-protect-users-from-side-channel-attacks-a-user-centred-design-space-to-mitigate-thermal-attacks-on-public-payment-terminals) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#in-the-quest-to-protect-users-from-side-channel-attacks-a-user-centred-design-space-to-mitigate-thermal-attacks-on-public-payment-terminals)**
### 作者
* Karola Marky, Ruhr-University Bochum and University of Glasgow
* Shaun Macdonald, University of Glasgow
* Yasmeen Abdrabou, Lancaster University
* Mohamed Khamis, University of Glasgow
### 摘要
> 热攻击是一种新兴威胁，通过分析热迹线，使得可以在用户与设备交互后重建用户输入。保护用户免受热攻击的方法有多种，需要用户不同程度的参与。本文首先通过结构化文献综述，确定了15种保护策略。然后，我们通过在线研究（N=306）调查用户对这些策略的感知。研究结果表明，用户直观地使用对抗其他侧信道攻击也有效的保护策略。此外，用户愿意牺牲便利性以验证策略的有效性。然而，理想的综合防御热攻击的方法是由制造商在用户界面中轻松集成，并使用户能够验证其有效性。另外，用户喜欢无资源消耗的适合他们习惯的策略。我们利用文献综述和研究结果确定了一个以用户为中心的设计空间，用于保护热攻击。最后，我们给出了针对用户、设备制造商和界面提供商的具体建议，以更好地保护个人免受热攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/marky](https://www.usenix.org/conference/usenixsecurity23/presentation/marky)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-marky.pdf](https://www.usenix.org/system/files/usenixsecurity23-marky.pdf)
## Extracting Training Data from Diffusion Models.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#extracting-training-data-from-diffusion-models) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#extracting-training-data-from-diffusion-models)**
### 作者
* Nicholas Carlini, Google
* Jamie Hayes, DeepMind
* Milad Nasr, Google
* Matthew Jagielski, Google
* Vikash Sehwag, Princeton University
* Florian Tramèr, ETH Zurich
* Borja Balle, DeepMind
* Daphne Ippolito, Google
* Eric Wallace, UC Berkeley
### 摘要
> 图像扩散模型，如DALL-E 2、Imagen和Stable Diffusion因其生成高质量合成图像的能力而受到重视。在本研究中，我们展示了扩散模型会在生成时记忆其训练数据中的个别图像，并将它们发射出来。通过生成和筛选的流程，我们从最先进的模型中提取出数千个训练样本，包括个别人物的照片和商标公司的商标。我们还在各种设置下训练了数百个扩散模型，以分析不同的建模和数据决策对隐私的影响。总体而言，我们的结果表明，与先前的生成模型（如GANs）相比，扩散模型的隐私性要低得多，并且要减轻这些漏洞可能需要在隐私保护训练方面取得新的进展。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/carlini](https://www.usenix.org/conference/usenixsecurity23/presentation/carlini)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-carlini.pdf](https://www.usenix.org/system/files/usenixsecurity23-carlini.pdf)
## PCAT: Functionality and Data Stealing from Split Learning by Pseudo-Client Attack.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#pcat-functionality-and-data-stealing-from-split-learning-by-pseudo-client-attack) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#pcat-functionality-and-data-stealing-from-split-learning-by-pseudo-client-attack)**
### 作者
* Xinben Gao, University of Science and Technology of China
* Lan Zhang, University of Science and Technology of China
### 摘要
> 拆分学习（SL）是一种流行的框架，通过将模型在客户端和服务器之间拆分来保护客户的训练数据。先前的研究表明，一个半诚实的服务器可以进行模型逆推攻击，从一定程度上恢复客户的输入和模型参数，并推断出标签。然而，这些攻击需要了解客户网络结构，并且随着客户网络变得更深（≥2层），性能会急剧恶化。在这项工作中，我们探索了在更一般和具有挑战性的情况下对SL的攻击，其中客户端模型对服务器是未知的，并且变得更加复杂和深入。与传统的模型逆推不同，我们研究了在SL中通过服务器模型泄漏的内在隐私问题，揭示了服务器模型可以轻松窃取客户的功能和私人数据，并且SL期间的一系列中间服务器模型甚至可能导致更多的泄漏。基于这些观察，我们提出了一种新的针对SL的攻击方法：伪客户攻击（PCAT）。据我们所知，这是针对一个半诚实的服务器窃取客户功能、重建私人输入和推断私人标签的第一个攻击，而且对于客户的模型一无所知。服务器唯一的要求是拥有相同学习任务的一个小数据集（私有训练集的约0.1%至5%）。此外，攻击对客户是透明的，因此服务器可以获取客户的隐私而没有被客户发现的风险。我们在各种基准数据集和模型上实现了PCAT。大量实验证明了我们的攻击在各种条件下都显著优于现有攻击，包括更复杂的模型和学习任务，甚至在非独立同分布的条件下。此外，我们的功能窃取攻击对现有的防御机制具有韧性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gao](https://www.usenix.org/conference/usenixsecurity23/presentation/gao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gao.pdf](https://www.usenix.org/system/files/usenixsecurity23-gao.pdf)
## A Plot is Worth a Thousand Words: Model Information Stealing Attacks via Scientific Plots.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-plot-is-worth-a-thousand-words-model-information-stealing-attacks-via-scientific-plots) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-plot-is-worth-a-thousand-words-model-information-stealing-attacks-via-scientific-plots)**
### 作者
* Boyang Zhang, CISPA Helmholtz Center for Information Security
* Xinlei He, CISPA Helmholtz Center for Information Security
* Yun Shen, NetApp
* Tianhao Wang, University of Virginia
* Yang Zhang, CISPA Helmholtz Center for Information Security
### 摘要
> 构建先进的机器学习（ML）模型需要专业知识和许多试验来发现最佳的架构和超参数设置。先前的研究表明，模型信息可以用于辅助其他攻击，例如成员推断、生成对抗样本。因此，这些信息，例如超参数，应保密。众所周知，对手可以利用目标ML模型的输出来窃取模型的信息。在本文中，我们发现一种新的用于模型信息窃取攻击的侧信道，即科学绘图，这些绘图被广泛用于展示模型性能，并且很容易获得。我们的攻击方法简单而直接。我们利用影子模型训练技术生成用于攻击模型的训练数据，该攻击模型本质上是一个图像分类器。对三个基准数据集进行了广泛评估，结果表明，我们提出的攻击可以有效地推断出基于卷积神经网络（CNN）的图像分类器的架构/超参数，仅凭由它生成的科学绘图。我们还揭示了攻击的成功主要是由于科学绘图的形状，并进一步证明这些攻击在各种场景中都很强大。鉴于攻击方法的简单和有效性，我们的研究表明科学绘图确实构成了一种有效的模型信息窃取攻击的侧信道。为了减轻这些攻击，我们提出了几种防御机制，可以降低原始攻击的准确性同时保持绘图的可用性。然而，这些防御仍然可以被自适应攻击绕过。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-boyang](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-boyang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-boyang.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-boyang.pdf)
## Beyond The Gates: An Empirical Analysis of HTTP-Managed Password Stealers and Operators.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#beyond-the-gates-an-empirical-analysis-of-http-managed-password-stealers-and-operators) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#beyond-the-gates-an-empirical-analysis-of-http-managed-password-stealers-and-operators)**
### 作者
* Athanasios Avgetidis, Georgia Institute of Technology
* Omar Alrawi, Georgia Institute of Technology
* Kevin Valakuzhy, Georgia Institute of Technology
* Charles Lever, Georgia Institute of Technology
* Paul Burbage, MalBeacon
* Angelos D. Keromytis, Georgia Institute of Technology
* Fabian Monrose, Georgia Institute of Technology
* Manos Antonakakis, Georgia Institute of Technology
### 摘要
> 密码窃取器（Stealers）是专门用于窃取凭证的商品恶意软件。本研究展示了对Stealers及其运营商的大规模长期研究。利用商业数据集，我们通过涉及10个不同Stealer家族的设备对4,586个独立Stealer运营商的活动进行了表征。运营商在管理其僵尸网络时大量使用代理，包括传统VPN、住宅代理、移动代理和Tor网络。我们的隶属关系分析揭示了每个服务供应商的分层犯罪企业，并通过图分析确定了特权运营商。我们发现了几个Stealer-as-a-Service提供商，为许多犯罪分子降低了经济和技术门槛。我们估计服务提供商有高利润率（高达98%）和每月11000美元的最低利润估计。我们还发现一些高调的目标，例如社会保障局、美国众议院和美国参议院。我们将研究结果与执法部门共享，并发布六个月的数据集、分析工具和代码。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/avgetidis](https://www.usenix.org/conference/usenixsecurity23/presentation/avgetidis)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-avgetidis.pdf](https://www.usenix.org/system/files/usenixsecurity23-avgetidis.pdf)
## LightThief: Your Optical Communication Information is Stolen behind the Wall.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#lightthief-your-optical-communication-information-is-stolen-behind-the-wall) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#lightthief-your-optical-communication-information-is-stolen-behind-the-wall)**
### 作者
* Xin Liu, The Ohio State University
* Wei Wang, Saint Louis University
* Guanqun Song, The Ohio State University
* Ting Zhu, The Ohio State University
### 摘要
> 光无线通信（OWC）是传统射频（RF）通信链路的一种可行且有前景的替代方案。特别是对于安全问题，因为光无法穿透不透明物体，OWC被认为具有一定的固有安全优势。仅有的相关研究对OWC进行窃听，是通过探测从用于OWC的开源研究平台泄漏出的电磁信号来实现的。然而，电磁兼容（EMC）法规要求商用现成的OWC产品将电磁泄漏降至最低，以保护OWC免受先前的窃听。在本文中，我们提出了一种新型的窃听方法，名为光贼（LightThief），它可以直接将光信号转换为射频信号，而无需复杂的基带处理电路和功耗，使其轻巧、持久、易于伪装。具体而言，光贼通过将光电二极管（PD）与天线耦合来构建。由于OWC采用强度调制来传输数据，光强度的变化可以改变PD的阻抗，从而导致天线反射不同数量的射频信号，实现数据窃取。室外的攻击者可以无阻力地通过EMC法规检测和解码射频信号。我们在一款商用的现成OWC产品上演示了我们的攻击的有效性，展示了通过墙壁等物理屏障成功窃听的情况。我们还讨论了保护OWC系统免受光贼攻击的潜在防御策略。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/liu-xin](https://www.usenix.org/conference/usenixsecurity23/presentation/liu-xin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-liu-xin.pdf](https://www.usenix.org/system/files/usenixsecurity23-liu-xin.pdf)
## WaterBear: Practical Asynchronous BFT Matching Security Guarantees of Partially Synchronous BFT.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#waterbear-practical-asynchronous-bft-matching-security-guarantees-of-partially-synchronous-bft) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#waterbear-practical-asynchronous-bft-matching-security-guarantees-of-partially-synchronous-bft)**
### 作者
* Haibin Zhang, Beijing Institute of Technology
* Sisi Duan, Tsinghua University, Zhongguancun Laboratory
* Boxin Zhao, Zhongguancun Laboratory
* Liehuang Zhu, Beijing Institute of Technology
### 摘要
> 异步拜占庭容错（BFT）协议在不考虑时间假设的情况下，本质上比它们的部分同步对应物更加健壮，但通常安全性保证较弱。
> 
> 我们设计并实现了WaterBear，一系列新的高效异步BFT协议，能够匹配部分同步协议的所有安全性保证。为了实现这一目标，我们采用了基于本地硬币（在每个副本上本地独立抛掷硬币）的BFT方法，这种方法往常一直被认为效率低下，并设计了更高效的异步二进制一致性（ABA）协议及其可重复使用ABA（RABA）版本。
> 
> 我们在一个新的golang库中总共实现了五个BFT协议，包括四个WaterBear协议和BEAT。通过广泛的评估，我们展示了我们的协议在无故障和故障场景下都很高效，至少与BEAT相比具有相当或更强的性能，尽管安全性保证更弱。具体而言，最高效的WaterBear协议在所有指标上都 consistently 超过BEAT。例如，当副本数为16时，我们协议的延迟约为BEAT的1/8，吞吐量是BEAT的1.23倍。
> 
> 我们的工作推动了异步BFT的边界，展示了我们所知的最强安全级别和高性能可以在异步BFT中共存。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-haibin](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-haibin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-haibin.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-haibin.pdf)
## Practical Asynchronous High-threshold Distributed Key Generation and Distributed Polynomial Sampling.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#practical-asynchronous-high-threshold-distributed-key-generation-and-distributed-polynomial-sampling) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#practical-asynchronous-high-threshold-distributed-key-generation-and-distributed-polynomial-sampling)**
### 作者
* Sourav Das, University of Illinois at Urbana-Champaign
* Zhuolun Xiang, Aptos
* Lefteris Kokoris-Kogias, IST Austria and Mysten Labs
* Ling Ren, University of Illinois at Urbana-Champaign
### 摘要
> 分布式密钥生成（DKG）是一种在没有可信方的情况下引导阈值密码系统的技术。DKG是许多分散式协议的基础构件，例如随机信标、阈值签名、拜占庭共识和多方计算。虽然近年来取得了重要进展，但现有的异步DKG构造在重构阈值大于总节点数的三分之一时效率低下。本文提出了一种简单且具体高效的异步DKG（ADKG）协议，用于n = 3t + 1个节点之间，可以容忍t个恶意节点并支持任意重构阈值&ell; ≥ t。我们的协议的预期通信成本为O(κn3)，其中κ是安全参数，并且仅假设了离散对数的困难性。我们的ADKG协议的核心要素是一种用于秘密共享随机多项式的异步协议，该多项式的次数为&ell; ≥ t，并且具有其他应用，例如异步主动秘密共享和异步多方计算。我们实现了高阈值ADKG协议，并使用最多128个地理分布节点的网络进行评估。我们的评估结果显示，与现有技术相比，我们的高阈值ADKG协议减少了运行时间90%和带宽使用量80%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/das](https://www.usenix.org/conference/usenixsecurity23/presentation/das)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-das.pdf](https://www.usenix.org/system/files/usenixsecurity23-das.pdf)
## Efficient 3PC for Binary Circuits with Application to Maliciously-Secure DNN Inference.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#efficient-3pc-for-binary-circuits-with-application-to-maliciously-secure-dnn-inference) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#efficient-3pc-for-binary-circuits-with-application-to-maliciously-secure-dnn-inference)**
### 作者
* Yun Li, Tsinghua University, Ant Group
* Yufei Duan, Tsinghua University
* Zhicong Huang, Alibaba Group
* Cheng Hong, Ant Group
* Chao Zhang, Tsinghua University
* Yifan Song, Tsinghua University
### 摘要
> 在这项工作中，我们专注于拥有诚实多数的二进制电路的恶意安全的三方计算（3PC）。虽然最先进的方法（Boyle等人，CCS 2019）已经实现了与最知名的半诚实协议（Araki等人，CCS 2016）相同的摊销通信，但它们在计算开销上存在较大的问题：与最佳实现结果（Furukawa等人，Eurocrypt 2017）相比，其通信成本是Araki等人的9倍，Boyle等人的协议比Furukawa等人的协议慢4.5倍。
> 
> 在本文中，我们设计了一个恶意安全的3PC协议，与Araki等人的通信相匹配，并具有与Furukawa等人的具体效率相当的性能。为了得出我们的结果，我们成功地应用了分布式零知识证明（Boneh等人，Crypto 2019）来通过使用素域验证Z2上的计算，并探索了素域的代数结构，以使我们的协议的计算对本地CPU计算友好。
> 
> 实验结果表明，与Boyle等人相比，我们的协议在AES电路上速度提升了约3.5倍。我们还将我们的协议应用于安全深度神经网络推断的二进制部分（例如比较和截断），结果显示我们可以将二进制部分实现恶意安全的时间成本降低超过67%。
> 
> 除了我们的主要贡献外，我们还发现了许多当前概率截断协议中的隐藏安全问题，这可能是一个独立的有趣问题。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-yun](https://www.usenix.org/conference/usenixsecurity23/presentation/li-yun)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-yun.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-yun.pdf)
## TVA: A multi-party computation system for secure and expressive time series analytics.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#tva-a-multi-party-computation-system-for-secure-and-expressive-time-series-analytics) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#tva-a-multi-party-computation-system-for-secure-and-expressive-time-series-analytics)**
### 作者
* Muhammad Faisal, Boston University
* Jerry Zhang, University of California San Diego
* John Liagouris, Boston University
* Vasiliki Kalavri, Boston University
* Mayank Varia, Boston University
### 摘要
> 我们提出了TVA，这是一个用于对秘密共享时间序列数据进行安全分析的多方计算（MPC）系统。TVA在半诚实和恶意情况下都能提供强大的安全保障，并通过对具有无序和不规则时间戳的输入进行复杂分析，实现了高表达性。TVA是第一个在保持所有数据属性私有的同时，支持任意组合的无视窗操作符、密钥聚合和多个过滤谓词的系统，其中包括记录时间戳和查询谓词中的用户定义值。在TVA系统的核心是用于安全窗口分配的新型协议：（i）一种滚动窗口协议，将记录分组为固定长度的时间桶，和（ii）两个会话窗口协议，用于识别活动期后的非活动期。我们还提供了一个用于带有公共除数的安全除法的新协议，这可能具有独立的兴趣。我们在真实的局域网和广域网环境中评估了TVA，并展示了它可以高效地计算基于窗口的复杂分析，输入为222个记录，资源使用适中。与最先进的方法相比，TVA在具有多个过滤器的查询中的延迟降低了多达5.8倍，窗口聚合的性能提高了两个数量级。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/faisal](https://www.usenix.org/conference/usenixsecurity23/presentation/faisal)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-faisal.pdf](https://www.usenix.org/system/files/usenixsecurity23-faisal.pdf)
## Long Live The Honey Badger: Robust Asynchronous DPSS and its Applications.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#long-live-the-honey-badger-robust-asynchronous-dpss-and-its-applications) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#long-live-the-honey-badger-robust-asynchronous-dpss-and-its-applications)**
### 作者
* Thomas Yurek, University of Illinois at Urbana-Champaign, NTT Research, and IC3
* Zhuolun Xiang, Aptos
* Yu Xia, MIT CSAIL and NTT Research
* Andrew Miller, University of Illinois at Urbana-Champaign and IC3
### 摘要
> 秘密共享是许多分布式应用程序的重要工具，包括分布式密钥生成和多方计算。对于许多实际应用，我们希望能够容忍网络变动，这意味着参与者可以根据自己的意愿动态地进入和离开协议参与者的池子。这种被称为动态委员会主动秘密共享（DPSS）的协议最近已经得到研究；然而，现有的DPSS协议并没有优雅地处理错误：即使有一个速度意外地缓慢的节点，整个协议的速度通常会减慢O(n)倍。
> 
> 在这项工作中，我们探索了在不受崩溃错误影响并处理拜占庭错误的最佳容错异步DPSS，同时保持相同的性能。我们首先介绍了第一个高阈值DPSS，相对于先前的非同步作品，在错误存在的情况下具有有利的特点，同时支持更高的隐私阈值。然后，我们将这个方案与一个并行的非高阈值方案进行批量摊销，以实现最佳带宽特性。我们实施了我们的方案，并证明它们在最佳情况下的性能与先前的工作竞争，同时在非最佳设置下表现优越。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yurek](https://www.usenix.org/conference/usenixsecurity23/presentation/yurek)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yurek.pdf](https://www.usenix.org/system/files/usenixsecurity23-yurek.pdf)
## Powering Privacy: On the Energy Demand and Feasibility of Anonymity Networks on Smartphones.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#powering-privacy-on-the-energy-demand-and-feasibility-of-anonymity-networks-on-smartphones) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#powering-privacy-on-the-energy-demand-and-feasibility-of-anonymity-networks-on-smartphones)**
### 作者
* Daniel Hugenroth, University of Cambridge
* Alastair R. Beresford, University of Cambridge
### 摘要
> 在过去的20年里，许多不同的匿名网络已被设计和实现。这些网络通过多层加密和覆盖通信来保护通信和元数据。然而，关于此类网络在具有有限电池电量的智能手机上是否实际可行的研究很少。这一点很重要，因为这些是目前占主导地位的计算设备。
> 
> 先前的研究表明，当在移动设备上运行此类软件时，加密操作和后台无线电传输是能量消耗的两个主要因素。我们开发并开源了一个测试设置，以测量实际能量消耗，包括逃避简单模型的副作用。利用这个设置，我们研究了加密、无线电通信和后台操作调度的成本。我们发现，无线电通信在整体功率消耗中占主导地位，而加密操作（非对称和对称）在典型匿名网络工作负载中是可以忽略的。
> 
> 我们还调查了连续运行匿名网络以保护所有通信的可行性。在一个12小时的使用期内，一个在4G网络上的移动Tor客户端需要额外4个百分点的电池电量，这似乎是可行的。它至少与我们测试的商业VPN客户端一样高效。然而，一个连续发送覆盖通信的混合网络客户端在同一时期内需要高达24个百分点。这些成本可能对许多用户来说是无法接受的。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/hugenroth](https://www.usenix.org/conference/usenixsecurity23/presentation/hugenroth)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-hugenroth.pdf](https://www.usenix.org/system/files/usenixsecurity23-hugenroth.pdf)
## Eye-Shield: Real-Time Protection of Mobile Device Screen Information from Shoulder Surfing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#eye-shield-real-time-protection-of-mobile-device-screen-information-from-shoulder-surfing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#eye-shield-real-time-protection-of-mobile-device-screen-information-from-shoulder-surfing)**
### 作者
* Brian Jay Tang, University of Michigan
* Kang G. Shin, University of Michigan
### 摘要
> 人们广泛使用移动设备进行计算、通信、存储、网页浏览等各种活动。因此，在移动设备中访问和存储的信息（如财务和健康信息、短信和电子邮件）通常是敏感的。尽管如此，人们经常在公共场所使用移动设备，使自己容易受到一种简单而有效的攻击——窥屏攻击。当旁边的人偷看用户的移动设备时，就发生了窥屏攻击，可能获取到用户的密码、个人识别码、浏览行为或其他个人信息。我们提出了一种名为Eye-Shield的解决方案，用于阻止窥屏攻击者访问/窃取敏感的屏幕信息。Eye-Shield设计用于实时保护所有类型的屏幕信息，而不会严重影响用户与移动设备的互动。Eye-Shield生成的图像在近距离看起来可读，但在较远距离和较大角度下变得模糊或像素化。它能够保护屏幕信息免受窥屏攻击，实时运行，并对预期用户的影响最小。Eye-Shield通过降低图像和文本被窥屏攻击者识别的可能性，将识别率降低到24.24%和15.91%。我们的Eye-Shield实现在1440×3088分辨率的屏幕上实现了较高的帧率（Android为每秒24帧，iOS为每秒43帧）。Eye-Shield的内存使用、CPU利用率和能耗也处于可接受的范围。最后，我们的MTurk和面对面用户研究表明，Eye-Shield能够保护屏幕信息，同时对注重隐私的用户来说，使用成本并不高。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/tang](https://www.usenix.org/conference/usenixsecurity23/presentation/tang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-tang_1.pdf](https://www.usenix.org/system/files/usenixsecurity23-tang_1.pdf)
## The OK Is Not Enough: A Large Scale Study of Consent Dialogs in Smartphone Applications.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-ok-is-not-enough-a-large-scale-study-of-consent-dialogs-in-smartphone-applications) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-ok-is-not-enough-a-large-scale-study-of-consent-dialogs-in-smartphone-applications)**
### 作者
* Simon Koch, TU Braunschweig
* Benjamin Altpeter, Datenanfragen.de e.V.
* Martin Johns, TU Braunschweig
### 摘要
> 移动应用泄露个人信息是一个在GDPR实施前后都有充分证实的观察结果。在跟踪背景下，个人数据收集的法律要求由GDPR规定，共识是跟踪必须基于适当的同意。对网站上同意对话框的研究揭示了严重的问题，包括黑暗模式。然而，移动应用领域目前尚未得到充分探索，初步观察结果指向类似的情况。为了填补这一研究空白，我们在3006个安卓应用和1773个iOS应用中分析了一部分可能的同意对话框，即隐私同意对话框。我们发现，22.3%的应用程序都有任何形式的对话框，只有11.9%的应用程序给用户某种形式的可操作选择，例如至少一个接受按钮。然而，这种选择是有限的，因为所有这些对话框中有相当大的比例使用了某种形式的黑暗模式，迫使用户同意。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/koch](https://www.usenix.org/conference/usenixsecurity23/presentation/koch)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-koch.pdf](https://www.usenix.org/system/files/usenixsecurity23-koch.pdf)
## Notice the Imposter! A Study on User Tag Spoofing Attack in Mobile Apps.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#notice-the-imposter-a-study-on-user-tag-spoofing-attack-in-mobile-apps) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#notice-the-imposter-a-study-on-user-tag-spoofing-attack-in-mobile-apps)**
### 作者
* Shuai Li, Fudan University
* Zhemin Yang, Fudan University
* Guangliang Yang, Fudan University
* Hange Zhang, Fudan University
* Nan Hua, Fudan University
* Yurui Huang, Fudan University
* Min Yang, Fudan University
### 摘要
> 近年来，手机服务迅速发展，几乎涵盖了各个领域。为了对用户进行个性化和定向服务的特征，在用户标签共享中，标记用户并共享他们的数据变得越来越流行。它的安全性引起越来越多的关注，并在一些特定服务中报告了一系列的隐私问题。然而，到目前为止，对用户标签共享的特征和安全性仍缺乏全面和深入的理解。
> 
> 在本研究中，我们对用户标签共享及其安全性进行了系统研究。我们首先用三个阶段对用户标签共享进行了建模，并发现隐私安全问题在实践中普遍存在。我们将隐私问题概括和形式化为用户标签欺骗。然后，我们提出了一种新颖的基于网络级别的智能模糊测试方法，称为UTSFuzzer，用于对抗用户标签欺骗。UTSFuzzer的核心思想是使用大量有效的用户标签值作为输入，模拟对真实世界手机服务进行用户标签欺骗。通过在大规模真实世界流行应用程序上应用UTSFuzzer，我们验证了UTSFuzzer的有效性，并揭示了100个移动应用程序（包括115个移动服务）容易受到用户标签欺骗的攻击。受影响应用程序（用户）的累积安装量达到了4.13亿。此外，UTSFuzzer显示用户标签欺骗可能导致严重的攻击行为，包括经济损失和用户活动监视。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-shuai](https://www.usenix.org/conference/usenixsecurity23/presentation/li-shuai)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-shuai.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-shuai.pdf)
## Lost in Conversion: Exploit Data Structure Conversion with Attribute Loss to Break Android Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#lost-in-conversion-exploit-data-structure-conversion-with-attribute-loss-to-break-android-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#lost-in-conversion-exploit-data-structure-conversion-with-attribute-loss-to-break-android-systems)**
### 作者
* Rui Li, School of Cyber Science and Technology, Shandong University; Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, SDU; The Chinese University of Hong Kong
* Wenrui Diao, School of Cyber Science and Technology, Shandong University; Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, SDU
* Shishuai Yang, School of Cyber Science and Technology, Shandong University; Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, SDU
* Xiangyu Liu, Alibaba Group
* Shanqing Guo, School of Cyber Science and Technology, Shandong University; Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, SDU
* Kehuan Zhang, The Chinese University of Hong Kong
### 摘要
> 在操作系统内部，配置文件的处理往往是复杂的，并涉及各种数据操作过程。在Android上，清单文件（Android应用的主要配置文件）的处理与多个核心系统机制相关，例如权限和组件管理。广泛认可的是，配置不当的清单文件可能会使应用程序面临风险。更糟糕的是，我们发现漏洞的配置数据处理可以被制作的清单文件利用，从而破坏Android系统机制，甚至实现权限提升。
> 
> 在这项工作中，我们系统地研究了Android清单处理过程，并发现了一个新的漏洞类别，称为"邪恶双胞胎"漏洞。简而言之，在处理双胞胎清单元素（名称相同但属性不同）时，不考虑数据结构转换（例如从列表到映射的转换时没有考虑重复问题）将它们合并为一个具有属性丢失的项目，进一步导致系统配置不一致，即潜在的安全风险。为了检测Android操作系统中的"邪恶双胞胎"漏洞，我们设计了一个自动化分析工具，名为TwinDroid，以识别具有属性丢失的数据结构转换，然后手动确认漏洞。利用TwinDroid，我们评估了AOSP Android 11和12的代码。最终报告了47个可疑方法，并确认了四个漏洞，可以被利用来实现权限提升和撤销预防。所有发现的漏洞都已被Google确认，并分配了三个CVE编号。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-rui](https://www.usenix.org/conference/usenixsecurity23/presentation/li-rui)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-rui.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-rui.pdf)
## Silent Spring: Prototype Pollution Leads to Remote Code Execution in Node.js.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#silent-spring-prototype-pollution-leads-to-remote-code-execution-in-node-js) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#silent-spring-prototype-pollution-leads-to-remote-code-execution-in-node-js)**
### 作者
* Mikhail Shcherbakov, KTH Royal Institute of Technology
* Musard Balliu, KTH Royal Institute of Technology
* Cristian-Alex, CISPA Helmholtz Center for Information Security
* ru Staicu, CISPA Helmholtz Center for Information Security
### 摘要
> 原型污染是一种危险的漏洞，影响基于原型的语言，比如JavaScript和Node.js平台。它指的是攻击者能够在运行时将属性注入到对象的根原型，并随后触发执行合法代码小工具来访问对象原型上的这些属性，从而导致拒绝服务（DoS）、权限升级和远程代码执行（RCE）等攻击。尽管有一些个别的证据表明原型污染会导致RCE，但目前的研究并未解决小工具检测的挑战，因此只能展示对Node.js库主要发起DoS攻击的可行性。
> 
> 在本文中，我们以全面的方式研究该问题，从原型污染的检测到小工具的检测，旨在找到超越DoS的端到端攻击，针对完整的Node.js应用。我们构建了第一个多阶段框架，使用多标签静态污点分析来识别Node.js库和应用中的原型污染，以及通过分析Node.js源代码来检测通用小工具的混合方法。我们在GitHub的静态分析框架CodeQL之上实现了我们的框架，找到了核心Node.js API中的11个通用小工具，从而导致代码执行。此外，我们将我们的方法应用于对15个流行的Node.js应用的研究中，以识别原型污染和小工具。我们手动利用了三个知名应用程序（如NPM CLI、Parse Server和Rocket.Chat）中的八个RCE漏洞。我们的结果提供了令人震惊的证据，即原型污染与强大的通用小工具相结合会导致Node.js中的RCE漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shcherbakov](https://www.usenix.org/conference/usenixsecurity23/presentation/shcherbakov)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shcherbakov.pdf](https://www.usenix.org/system/files/usenixsecurity23-shcherbakov.pdf)
## Cookie Crumbles: Breaking and Fixing Web Session Integrity.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#cookie-crumbles-breaking-and-fixing-web-session-integrity) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#cookie-crumbles-breaking-and-fixing-web-session-integrity)**
### 作者
* Marco Squarcina, TU Wien
* Pedro Adão, Instituto Superior Técnico, ULisboa, Instituto de Telecomunicações
* Lorenzo Veronese, TU Wien
* Matteo Maffei, TU Wien
### 摘要
> Cookies have a long history of vulnerabilities targeting their confidentiality and integrity. To address these issues, new mechanisms have been proposed and implemented in browsers and server-side applications. Notably, improvements to the Secure attribute and cookie prefixes aim to strengthen cookie integrity against network and same-site attackers, whereas SameSite cookies have been touted as the solution to CSRF. On the server, token-based protections are considered an effective defense for CSRF in the synchronizer token pattern variant.
> 
> In this paper, we question the effectiveness of these protections and study the real-world security implications of cookie integrity issues, showing how security mechanisms previously considered robust can be bypassed, exposing Web applications to session integrity attacks such as session fixation and cross-origin request forgery (CORF). These flaws are not only implementation-specific bugs but are also caused by compositionality issues of security mechanisms or vulnerabilities in the standard.
> 
> Our research contributed to 12 CVEs, 27 vulnerability disclosures, and updates to the cookie standard. It comprises (i) a thorough cross-browser evaluation of cookie integrity issues, that results in new attacks originating from implementation or specification inconsistencies, and (ii) a security analysis of the top 13 Web frameworks, exposing session integrity vulnerabilities in 9 of them. We discuss our responsible disclosure and propose practical mitigations.
> 
> 饼干存在着漫长的历史上对其机密性和完整性的漏洞。为了解决这些问题，新的机制已被提出并在浏览器和服务器端应用程序中得以实施。值得注意的是，对安全属性和Cookie前缀的改进旨在增强Cookie的完整性，以对抗网络和同一站点的攻击者，而SameSite Cookie被吹捧为CSRF的解决方案。在服务器端，基于令牌的保护被认为是同步令牌模式变体中抵御CSRF的有效防御。
> 
> 在本文中，我们对这些保护机制的有效性提出了质疑，并研究了Cookie完整性问题在现实世界中的安全影响，展示了先前被认为健壮的安全机制如何被绕过，使Web应用程序暴露于会话完整性攻击（如会话固定和跨源请求伪造（CORF））之下。这些缺陷不仅仅是特定于实施的漏洞，还是由于安全机制的组合性问题或标准中的漏洞。
> 
> 我们的研究贡献了12个CVE，27个漏洞披露，并对Cookie标准进行了更新。它包括（i）对Cookie完整性问题进行了全面的跨浏览器评估，从而导致了源自实现或规范的不一致性的新攻击，以及（ii）对排名前13的Web框架进行了安全分析，在其中有9个框架暴露出会话完整性漏洞。我们讨论了我们的负责任的披露并提出了实际的缓解措施。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/squarcina](https://www.usenix.org/conference/usenixsecurity23/presentation/squarcina)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-squarcina.pdf](https://www.usenix.org/system/files/usenixsecurity23-squarcina.pdf)
## Minimalist: Semi-automated Debloating of PHP Web Applications through Static Analysis.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#minimalist-semi-automated-debloating-of-php-web-applications-through-static-analysis) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#minimalist-semi-automated-debloating-of-php-web-applications-through-static-analysis)**
### 作者
* Rasoul Jahanshahi, Boston University
* Babak Amin Azad, Stony Brook University
* Nick Nikiforakis, Stony Brook University
* Manuel Egele, Boston University
### 摘要
> 随着网络应用程序变得越来越复杂，并依赖第三方库向用户提供新功能，它们越来越臃肿，拥有不必要的代码。这些不必要的代码会增加网络应用程序的攻击面，导致用户数据被窃取和底层 Web 服务器被破坏。一种解决臃肿代码问题的方法是通过有选择地删除用户不需要的功能，即去臃肿。
> 
> 在本文中，我们鉴定了解去臃肿网络应用程序的当前挑战，并提出了一种半自动化的静态去臃肿方案。我们实现了我们提出的方法的原型，称为 Minimalist，它为给定的 PHP 网络应用程序生成一个调用图(call-graph)。Minimalist 对用户需要的功能进行可达性分析，并删除分析后的网络应用程序中的无法访问的函数。与以前的工作相比，Minimalist 在去臃肿网络应用程序时不依赖于笨重的运行时仪器。此外，Minimalist 生成的调用图可以与 Web 服务器日志结合使用，用于去臃肿同一网络应用程序的不同安装。由于 PHP 语言的内在复杂性和高度动态性，Minimalist 无法保证其调用图分析的正确性。然而，Minimalist 采用尽力而为的方法来模拟流行网络应用程序（如WordPress、phpMyAdmin等）中使用的大多数 PHP 特性。
> 
> 我们在四个流行的 PHP 网络应用程序的 12 个版本上评估了 Minimalist，并包含了 45 个最近的安全漏洞。我们展示了在数据集中，Minimalist 平均减少了 18% 的网络应用程序大小，并删除了 38% 的已知漏洞。我们的结果表明，对网络应用程序进行有原则的去臃肿可以在不依赖降低服务器性能的仪器机制的情况下带来显著的安全收益。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/jahanshahi](https://www.usenix.org/conference/usenixsecurity23/presentation/jahanshahi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-jahanshahi.pdf](https://www.usenix.org/system/files/usenixsecurity23-jahanshahi.pdf)
## AnimateDead: Debloating Web Applications Using Concolic Execution.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#animatedead-debloating-web-applications-using-concolic-execution) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#animatedead-debloating-web-applications-using-concolic-execution)**
### 作者
* Babak Amin Azad, Stony Brook University
* Rasoul Jahanshahi, Boston University
* Chris Tsoukaladelis, Stony Brook University
* Manuel Egele, Boston University
* Nick Nikiforakis, Stony Brook University
### 摘要
> 现代Web应用程序年复一年地演变，以满足许多用户的需求并支持各种运行环境。为了能够吸引尽可能多的用户并依赖第三方依赖，这种不断增长的需求带来了代码膨胀的代价。先前的研究已经强调了去膨胀机制的好处，这些机制可以生成更小、根据用户实际需求定制的应用程序，并带来显著的安全改进。
> 
> 鉴于动态和静态去膨胀方案的局限性（包括高运行时开销和缺乏准确性），我们提出了一种基于共轭执行的混合方法。我们开发了一个名为AnimateDead的PHP仿真器，能够进行共轭执行，并设计了一个围绕它的分布式分析框架。
> 
> 通过使用现成的Web服务器日志作为应用程序入口点，我们在抽象环境中执行共轭可达性分析，并提取目标Web应用程序的代码覆盖范围，使我们的结果能够推广到所有用户输入和数据库状态。我们证明通过共轭执行进行去膨胀可以通过平均缩小代码大小47%、减少关键API调用55%的方式改善Web应用程序的安全性，同时消除历史CVE漏洞的35-65%。我们表明，通过共轭执行，我们可以实现与动态去膨胀方案相当的安全改进，而不会遭受运行时开销和训练阶段的需求。此外，通过AnimateDead去膨胀的Web应用程序通过允许用户执行从分析入口点可达的所有操作，减少了出错的可能性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/azad](https://www.usenix.org/conference/usenixsecurity23/presentation/azad)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-azad.pdf](https://www.usenix.org/system/files/usenixsecurity23-azad.pdf)
## NAUTILUS: Automated RESTful API Vulnerability Detection.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#nautilus-automated-restful-api-vulnerability-detection) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#nautilus-automated-restful-api-vulnerability-detection)**
### 作者
* Gelei Deng, Nanyang Technological University
* Zhiyi Zhang, CodeSafe Team, Qi An Xin Group Corp.
* Yuekang Li, Nanyang Technological University
* Yi Liu, Nanyang Technological University
* Tianwei Zhang, Nanyang Technological University
* Yang Liu, Nanyang Technological University
* Guo Yu, China Industrial Control Systems Cyber Emergency Response Team
* Dongjin Wang, Institute of Scientific and Technical Information, China Academy of Railway Sciences
### 摘要
> RESTful API已经成为访问Web服务的最主要端点。黑盒漏洞扫描器是自动检测Web服务漏洞的常用选择。然而，它们在RESTful API测试方面存在一些限制。特别地，现有工具无法有效获取API操作之间的关系，并且它们在测试过程中缺乏对API操作正确顺序的意识。这些缺点妨碍了工具正确请求API操作以检测潜在的漏洞。
> 
> 为了解决这个挑战，我们提出了NAUTILUS，它包括一种新颖的规范注解策略来发现RESTful API的漏洞。这些注解编码了RESTful服务的正确操作关系和参数生成策略，帮助NAUTILUS生成有意义的操作序列，从而发现需要按照正确顺序执行多个API操作的漏洞。我们在六个RESTful服务上将NAUTILUS与四个最先进的漏洞扫描器和RESTful API测试工具进行了实验比较。评估结果表明，NAUTILUS能够成功检测出平均多出141%的漏洞，并覆盖104%更多的API操作。我们还将NAUTILUS应用于九个真实世界的RESTful服务，并发现了23个独特的0-day漏洞，其中12个具有CVE编号，包括Atlassian Confluence中的一个远程代码执行漏洞和Microsoft Azure中的三个高风险漏洞，可能影响数百万用户。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/deng-gelei](https://www.usenix.org/conference/usenixsecurity23/presentation/deng-gelei)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-deng-gelei.pdf](https://www.usenix.org/system/files/usenixsecurity23-deng-gelei.pdf)
## "Un-Equal Online Safety?" A Gender Analysis of Security and Privacy Protection Advice and Behaviour Patterns.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#un-equal-online-safety-a-gender-analysis-of-security-and-privacy-protection-advice-and-behaviour-patterns) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#un-equal-online-safety-a-gender-analysis-of-security-and-privacy-protection-advice-and-behaviour-patterns)**
### 作者
* Kovila P.L. Coopamootoo, King's College London
* Magdalene Ng, University of Westminster
### 摘要
> 文献中有迹象表明，女性在与旨在保护她们在线安全的安全和隐私（SP）技术上的参与方式与男性不同。为了更好地理解这种性别差距，我们进行了一项在线调查，共有604名英国参与者，以充分了解SP建议来源的偏好和SP方法和技术的使用情况。我们发现存在SP访问和参与的不平等证据。特别是，亲密关系和社交联系（ISC）提供的建议在女性中更为普遍，而在线内容则更受男性青睐。ISC与SP技术的使用并不密切相关，不具有预测性，而在线资源（如在线论坛、评论、专业页面和技术广告）和培训则具有影响力。男性更有可能使用多种建议来源，这增加了使用SP技术的可能性。女性受到亲密关系和社交联系的激励，是因为她们对顾问的看法（例如与IT相关的专业知识、经验和可信度）；而男性则通过亲密关系和社交联系来评估选择并寻求对自己实践的确认。此研究揭示了SP实践中的性别规范，引发了有关在线安全机会公平性的问题，并提出了建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/coopamootoo](https://www.usenix.org/conference/usenixsecurity23/presentation/coopamootoo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-coopamootoo.pdf](https://www.usenix.org/system/files/usenixsecurity23-coopamootoo.pdf)
## "Millions of people are watching you": Understanding the Digital-Safety Needs and Practices of Creators.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#millions-of-people-are-watching-you-understanding-the-digital-safety-needs-and-practices-of-creators) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#millions-of-people-are-watching-you-understanding-the-digital-safety-needs-and-practices-of-creators)**
### 作者
* Patrawat Samermit, Google
* Anna Turner, Google
* Patrick Gage Kelley, Google
* Tara Matthews, Google
* Vanessia Wu, Google
* Sunny Consolvo, Google
* Kurt Thomas, Google
### 摘要
> 在线内容创作者，如Instagram、TikTok、Twitch和YouTube上发布和分享他们的内容，由于其公众知名度、多样化的社交规范和作为宝贵资源的受众群体，他们面临着日益增加的数字安全威胁。我们采访了23位创作者，以了解他们的数字安全经验。这包括他们在多个平台上遇到的安全、隐私和虐待威胁，以及威胁如何随时间变化。我们还研究了他们采取的保护措施，包括他们在采纳这些措施时所面临的紧张关系。我们发现，创作者面临着考虑到他们的情感、身体、人际关系和财务安全的多样化威胁模式。大多数创作者在经历了严重的安全事件后才采取保护措施，包括远离技术、管理社区和寻求外部或社交支持。从他们的经验中汲取教训有助于我们更好地准备和保护创作者，并确保网络上存在多样化的声音。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/samermit](https://www.usenix.org/conference/usenixsecurity23/presentation/samermit)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-samermit.pdf](https://www.usenix.org/system/files/usenixsecurity23-samermit.pdf)
## How Library IT Staff Navigate Privacy and Security Challenges and Responsibilities.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#how-library-it-staff-navigate-privacy-and-security-challenges-and-responsibilities) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#how-library-it-staff-navigate-privacy-and-security-challenges-and-responsibilities)**
### 作者
* Alan F. Luo, University of Maryland
* Noel Warford, University of Maryland
* Samuel Dooley, University of Maryland
* Rachel Greenstadt, New York University
* Michelle L. Mazurek, University of Maryland
* Nora McDonald, George Mason University
### 摘要
> 图书馆为缺乏计算机和互联网资源的用户提供重要的 IT 服务。我们对图书馆的 IT 员工进行了12次半结构化采访，了解他们的隐私和安全协议以及政策，他们在实施这些协议和政策时面临的挑战，以及这与用户有关。我们使用森的能力途径对我们的研究结果进行了框架化，并发现图书馆的 IT 员工主要关注保护用户的隐私免受墙外的威胁，如警察、政府机构和第三方。尽管他们致力于保护用户的隐私，但图书馆的 IT 员工经常需要在提供简便、流畅、功能齐全的互联网技术或第三方资源、保护图书馆基础设施和确保用户隐私之间做出复杂的权衡。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/luo-alan](https://www.usenix.org/conference/usenixsecurity23/presentation/luo-alan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-luo-alan.pdf](https://www.usenix.org/system/files/usenixsecurity23-luo-alan.pdf)
## Problematic Advertising and its Disparate Exposure on Facebook.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#problematic-advertising-and-its-disparate-exposure-on-facebook) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#problematic-advertising-and-its-disparate-exposure-on-facebook)**
### 作者
* Muhammad Ali, Northeastern University
* Angelica Goetzen, Max Planck Institute for Software Systems
* Alan Mislove, Northeastern University
* Elissa M. Redmiles, Max Planck Institute for Software Systems
* Piotr Sapiezynski, Northeastern University
### 摘要
> 定向广告仍然是免费网络浏览体验的重要组成部分，广告商的定向和个性化算法共同寻找每天数百万广告最相关的观众。然而，由于广告的广泛使用，这也使得广告成为有问题内容（如欺诈或点击诱导）的载体。最近的研究探讨了人们对在线广告的情绪以及这些广告对人们在线体验的影响，发现在线广告确实存在问题。此外，即使广告主的定向不够具体，个性化也有助于传递此类广告。在本文中，我们研究了Facebook，互联网上最大的广告平台之一，并调查了我们对问题在线广告的认识中的关键差距：（a）人们认为哪些广告类别存在问题？（b）问题广告在观众中的分布是否存在差异？如果存在，（c）是广告主还是广告平台负责？为了回答这些问题，我们通过一个为期3个月的纵向小组研究实证地测量了Facebook广告的用户体验的多样样本。我们对从该小组（n=132）收集的32,000多个广告进行分类，并通过调查参与者对其自己的广告的情绪来识别出四类有问题的广告。通过对人口统计数据统计建模，我们发现年长者和少数群体特别容易看到此类广告。此外，鉴于22％的问题广告没有经过具体定向，我们推断广告投放算法（广告平台本身）在这些广告的偏倚分发中起着重要作用。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ali](https://www.usenix.org/conference/usenixsecurity23/presentation/ali)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ali.pdf](https://www.usenix.org/system/files/usenixsecurity23-ali.pdf)
## One Size Does not Fit All: Quantifying the Risk of Malicious App Encounters for Different Android User Profiles.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#one-size-does-not-fit-all-quantifying-the-risk-of-malicious-app-encounters-for-different-android-user-profiles) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#one-size-does-not-fit-all-quantifying-the-risk-of-malicious-app-encounters-for-different-android-user-profiles)**
### 作者
* Savino Dambra, Norton Research Group
* Leyla Bilge, Norton Research Group
* Platon Kotzias, Norton Research Group
* Yun Shen, NetApp
* Juan Caballero, IMDEA Software Institute
### 摘要
> 之前的研究已经调查了基于原籍国、年龄、先前技术滥用以及经济状况等特定用户群体内的安全实践的特殊性。他们的结果表明，当前采用一刀切所有用户的安全解决方案忽视了不同用户群体的差异和需求。然而，这些研究集中在单一群体或将用户群体划分成难以解释的亚种人群。在本研究中，我们对用户群体中遭遇恶意软件和其他潜在不受欢迎应用（PUA）风险进行了大规模的定量分析。我们研究的核心是一个由1200万台Android手机设备收集的应用程序安装日志数据集。通过利用用户安装的应用程序，我们基于用户的兴趣（例如游戏玩家和投资者）定义了直观的用户配置文件，并将其中的540万个设备与这些配置文件匹配。我们的分析分为三个部分。首先，我们对整个人群进行风险分析，以衡量不同因素对遭遇恶意应用程序的风险的影响。接下来，我们创建不同的配置文件，以调查用户之间的风险差异是否由他们的兴趣所导致。最后，我们将基于配置文件的设备清洗和感染设备分类方法与考虑整个人群的经典方法进行比较。我们观察到应用签名者的多样性和使用替代市场的情况与恶意应用程序遭遇的风险高度相关。我们还发现，某些配置文件，如游戏玩家和社交媒体用户，所面临的风险是普通用户的两倍以上。我们还展示了使用基于配置文件的方法训练预测模型时，分类结果的明显准确性提高。总体而言，我们的结果证实了一刀切保护解决方案的不足之处。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/dambra](https://www.usenix.org/conference/usenixsecurity23/presentation/dambra)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-dambra.pdf](https://www.usenix.org/system/files/usenixsecurity23-dambra.pdf)
## How Effective is Multiple-Vantage-Point Domain Control Validation?
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#how-effective-is-multiple-vantage-point-domain-control-validation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#how-effective-is-multiple-vantage-point-domain-control-validation)**
### 作者
* Grace H. Cimaszewski, Princeton University
* Henry Birge-Lee, Princeton University
* Liang Wang, Princeton University
* Jennifer Rexford, Princeton University
* Prateek Mittal, Princeton University
### 摘要
> 多视角域控制验证（multiVA）是一种新兴的防御方法，用于减轻针对Web PKI证书机构的BGP劫持。尽管multiVA的采用率在增长，但很少有工作量化了其对野外BGP劫持的有效性。我们通过提供第一个分析框架来弥合这一差距，该框架可以在真实世界中的路由和网络实践（即DNS和RPKI）的融合下量化multiVA部署的安全性。我们的框架通过以下方式准确地模拟multiVA的攻击面：1）考虑到对参与域验证的DNS名称服务器的攻击，2）结合已部署的实际安全技术，如RPKI，3）执行细粒度的互联网规模分析以计算容忍性（即针对域名发起BGP劫持并获得虚假证书的难度）。我们应用我们的框架对Let's Encrypt的multiVA部署进行了严格的安全性分析，编制了一个有关四个月内大约100万个域的310亿个DNS查询的数据集。我们的分析显示，虽然DNS确实扩大了multiVA的攻击面，但Let's Encrypt的multiVA部署仍然能够提供88%的中位容忍度，这比单一视角验证提高了12%。即使在其目前部分部署的状态下，RPKI仍然有效地减轻了BGP攻击并提高了部署的安全性15%。通过探索超过11,000种不同的multiVA配置，我们发现让Let's Encrypt的部署进一步扩展以实现超过97%的容忍度，只需在不同的公共云提供商中添加两个附加视角点。除了添加这些视角点外，采用完全忠诚策略可以实现超过99%的最大容忍度，这促使我们重新考虑multiVA设计参数。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cimaszewski](https://www.usenix.org/conference/usenixsecurity23/presentation/cimaszewski)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cimaszewski.pdf](https://www.usenix.org/system/files/usenixsecurity23-cimaszewski.pdf)
## Bypassing Tunnels: Leaking VPN Client Traffic by Abusing Routing Tables.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#bypassing-tunnels-leaking-vpn-client-traffic-by-abusing-routing-tables) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#bypassing-tunnels-leaking-vpn-client-traffic-by-abusing-routing-tables)**
### 作者
* Nian Xue, New York University
* Yashaswi Malla, New York University Abu Dhabi
* Zihang Xia, New York University Abu Dhabi
* Christina Pöpper, New York University Abu Dhabi
* Mathy Vanhoef, imec-DistriNet, KU Leuven
### 摘要
> 虚拟私人网络（VPN）通过认证和加密网络流量来保护用户的安全和隐私，在专业和个人环境中用于防御恶意行为者、绕过审查、远程居家办公等。因此，VPN的安全性至关重要。
> 
> 本文介绍了两种新型攻击方式，可以导致VPN客户端泄漏受保护的VPN隧道之外的流量。这两种攻击的根本原因是客户端在配置操作系统（OS）时普遍存在的设计缺陷，以便将所有流量通过VPN隧道。通常，这是通过更新系统的IP路由表来实现的，以便所有流量首先通过VPN客户端。然而，为了确保系统正常运行，还添加了一些路由例外，即将流量发送到本地网络和VPN服务器本身时会绕过VPN隧道。我们展示了通过设置Wi-Fi接入点或欺骗DNS响应，对手可以操纵这些例外情况，使受害者将任意流量以明文形式发送到VPN隧道之外。我们通过对Windows、macOS、iOS、Linux和Android上67个最具代表性的VPN提供商进行248次实验来验证我们的发现。我们的实验结果显示，大量（126和39）免费、付费、开源、公司和内置的VPN客户端存在泄漏流量的漏洞，比例分别为64.6%和73.6%。我们讨论了缓解这些漏洞的对策，并验证了选定防御措施在实践中的有效性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xue](https://www.usenix.org/conference/usenixsecurity23/presentation/xue)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xue.pdf](https://www.usenix.org/system/files/usenixsecurity23-xue.pdf)
## Back to School: On the (In)Security of Academic VPNs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#back-to-school-on-the-in-security-of-academic-vpns) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#back-to-school-on-the-in-security-of-academic-vpns)**
### 作者
* Ka Lok Wu, The Chinese University of Hong Kong
* Man Hong Hue, The Chinese University of Hong Kong and Georgia Institute of Technology
* Ngai Man Poon, The Chinese University of Hong Kong
* Kin Man Leung, The University of British Columbia
* Wai Yin Po, The Chinese University of Hong Kong
* Kin Ting Wong, The Chinese University of Hong Kong
* Sze Ho Hui, The Chinese University of Hong Kong
* Sze Yiu Chau, The Chinese University of Hong Kong
### 摘要
> 在这篇论文中，我们调查了全球学术VPN的安全性，涵盖了用于实现VPN服务的各种协议。我们的研究考虑了VPN设置中可能出错的三个方面，包括（i）VPN前端的设计和实施，（ii）客户端配置和（iii）后端配置。对于（i），我们测试了超过140个前端，并发现了许多设计和实现问题，这些问题可能导致隐蔽但严重的攻击，包括凭证窃取和远程代码执行。对于（ii），我们收集并评估了来自大学的2097个VPN设置指南，并发现许多秘密密钥泄漏和对潜在攻击缺乏考虑的情况，使得许多客户端设置易受攻击。最后，对于（iii），我们探测了超过2000个VPN后端以评估它们的整体健康状况，并发现了一些令人担忧的配置和维护问题。我们的研究结果表明，许多组织的VPN设置存在严重漏洞，使其成为犯罪分子的有利目标。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wu-ka-lok](https://www.usenix.org/conference/usenixsecurity23/presentation/wu-ka-lok)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wu-ka-lok.pdf](https://www.usenix.org/system/files/usenixsecurity23-wu-ka-lok.pdf)
## FABRID: Flexible Attestation-Based Routing for Inter-Domain Networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fabrid-flexible-attestation-based-routing-for-inter-domain-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fabrid-flexible-attestation-based-routing-for-inter-domain-networks)**
### 作者
* Cyrill Krähenbühl, ETH Zürich
* Marc Wyss, ETH Zürich
* David Basin, ETH Zürich
* Vincent Lenders, armasuisse
* Adrian Perrig, ETH Zürich
* Martin Strohmeier, armasuisse
### 摘要
> 在当前状态下，互联网不能提供给最终用户关于路径转发设备的透明度和控制权。特别是，缺乏网络设备信息降低了转发路径的可信度，并阻止了需要特定路由器功能的终端用户应用程序充分发挥其潜力。此外，无法影响流量的转发路径导致应用程序通过不希望的路由进行通信，而具有更理想属性的备用路径仍无法使用。
> 
> 在本研究中，我们提出了一种名为FABRID的系统，使应用程序能够灵活地转发流量，可能选择符合用户定义偏好的多条路径，其中有关转发设备的信息由自治系统（ASes）公开透明地进行认证。每个自治系统单独选择此信息的粒度，以保护它们不泄漏敏感网络详细信息，而嵌入在用户数据包中的偏好的保密性和真实性通过高效的加密操作来保护。我们通过在全球SCION网络测试平台上部署FABRID来展示其可行性，并展示了在商用硬件上的高吞吐量。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/krahenbuhl](https://www.usenix.org/conference/usenixsecurity23/presentation/krahenbuhl)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-krahenbuhl.pdf](https://www.usenix.org/system/files/usenixsecurity23-krahenbuhl.pdf)
## "All of them claim to be the best": Multi-perspective study of VPN users and VPN providers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#all-of-them-claim-to-be-the-best-multi-perspective-study-of-vpn-users-and-vpn-providers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#all-of-them-claim-to-be-the-best-multi-perspective-study-of-vpn-users-and-vpn-providers)**
### 作者
* Reethika Ramesh, University of Michigan
* Anjali Vyas, Cornell Tech
* Roya Ensafi, University of Michigan
### 摘要
> 随着越来越多的用户出于各种原因选择使用VPN，开发对他们的需求和VPN所提供的心理模型的经验性认识变得非常重要。此外，仅仅研究VPN用户是不够的，因为使用VPN的用户从本质上将信任从他们的网络供应商转移到VPN供应商。为了实现这一目标，我们是首次从用户和供应商的两个角度来研究VPN生态系统。在本文中，我们对美国的1252个VPN用户进行了定量调查，并对九家供应商进行了定性访谈，以回答关于用户的动机、需求、威胁模型和心理模型，以及VPN供应商所面临的关键挑战和见解的几个研究问题。我们通过增加多角度研究结果来得出新颖的见解，并强调用户和供应商视角不一致的情况。令人震惊的是，我们发现用户依赖并信任VPN评论网站，但VPN供应商揭示了这些网站大多出于经济动机。令人担忧的是，我们发现用户对VPN提供的保护和VPN收集的数据存在错误的心理模型。我们通过确定潜在的重点领域，为技术人员和安全与隐私倡导者提供可行的建议，以改进VPN生态系统。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/ramesh-vpn](https://www.usenix.org/conference/usenixsecurity23/presentation/ramesh-vpn)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-ramesh-vpn.pdf](https://www.usenix.org/system/files/usenixsecurity23-ramesh-vpn.pdf)
## Greenhouse: Single-Service Rehosting of Linux-Based Firmware Binaries in User-Space Emulation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#greenhouse-single-service-rehosting-of-linux-based-firmware-binaries-in-user-space-emulation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#greenhouse-single-service-rehosting-of-linux-based-firmware-binaries-in-user-space-emulation)**
### 作者
* Hui Jun Tay, Arizona State University
* Kyle Zeng, Arizona State University
* Jayakrishna Menon Vadayath, Arizona State University
* Arvind S Raj, Arizona State University
* Audrey Dutcher, Arizona State University
* Tejesh Reddy, Arizona State University
* Wil Gibbs, Arizona State University
* Zion Leonahenahe Basque, Arizona State University
* Fangzhou Dong, Arizona State University
* Zack Smith, Arizona State University
* Adam Doupé, Arizona State University
* Tiffany Bao, Arizona State University
* Yan Shoshitaishvili, Arizona State University
* Ruoyu Wang, Arizona State University
### 摘要
> 随着物联网设备越来越普及，将当前的分析技术扩展到相匹配的规模成为一项越来越关键的任务。这个挑战的一部分不仅包括在模拟环境中重新托管这些嵌入设备的固件，而且要同时发现真实的漏洞。目前最先进的重新托管方法必须考虑到模拟和物理设备之间的差异，因此通常专注于提高模拟的真实性。然而，这种真实性的追求忽视了其他潜在的解决方案。
> 
> 在本文中，我们提出了一种新颖的重新托管技术，即用户空间单服务重新托管，它在用户空间中模拟单个固件服务。我们研究了涉及数百个固件样本的重新托管过程，总结出了一组阻碍模拟的障碍，并创建了介入方法来解决这些问题。我们的原型系统Greenhouse自动重新托管了我们收集到的来自九个不同供应商的7140个固件图像中的2841个（39.7%）。我们的方法避开了以前的重新托管技术所遇到的许多挑战，并使我们能够将常见的漏洞发现技术应用于我们重新托管的图像，如基于用户空间覆盖引导的模糊测试。使用这些技术，我们在我们重新托管的固件服务的子集上找到了717个N-day漏洞和26个零-day漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/tay](https://www.usenix.org/conference/usenixsecurity23/presentation/tay)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-tay.pdf](https://www.usenix.org/system/files/usenixsecurity23-tay.pdf)
## FuncTeller: How Well Does eFPGA Hide Functionality?
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#functeller-how-well-does-efpga-hide-functionality) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#functeller-how-well-does-efpga-hide-functionality)**
### 作者
* Zhaokun Han, Texas A&M University
* Mohammed Shayan, The University of Texas at Dallas
* Aneesh Dixit, Texas A&M University
* Mustafa Shihab, The University of Texas at Dallas
* Yiorgos Makris, The University of Texas at Dallas
* Jeyavijayan (JV) Rajendran, Texas A&M University
### 摘要
> 硬件知识产权（IP）盗版对全球供应链构成新兴威胁。因此，各种应对措施旨在保护硬件IP，例如逻辑加密、伪装和分割制造。然而，这些对策并不能始终保证IP安全。恶意攻击者可以访问受这些对策保护的硬件IP的布局/网表，并进一步复原设计。为了消除/绕过这些漏洞，最近的一种方法是将设计的IP红排到嵌入式可编程门阵列（eFPGA），从而禁止攻击者访问布局/网表。eFPGA可以编程为任意功能。没有比特流，攻击者无法恢复受保护的IP的功能。因此，目前最先进的攻击方法无法用来盗用经过红排的硬件IP。在本文中，我们对基于eFPGA的红排所假设的安全性进行了挑战。我们提出了一种只利用对程序化eFPGA的黑盒访问来检索硬件IP的攻击方法。我们观察现代电子设计自动化（EDA）工具对实际硬件电路的影响，并利用这一观察指导我们的攻击。因此，我们提出的方法FuncTeller选择最小项进行查询，在合理的时间内恢复电路功能。我们在多个电路上展示了FuncTeller的有效性和高效性，包括学术基准电路、斯坦福MIPS处理器、IBEX处理器、通用评估平台GPS以及全球网络安全意识竞赛电路。我们的结果表明，FuncTeller在这些测试电路上实现了平均精度超过85%的设计功能检索。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/han-zhaokun](https://www.usenix.org/conference/usenixsecurity23/presentation/han-zhaokun)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-han-zhaokun.pdf](https://www.usenix.org/system/files/usenixsecurity23-han-zhaokun.pdf)
## ACFA: Secure Runtime Auditing & Guaranteed Device Healing via Active Control Flow Attestation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#acfa-secure-runtime-auditing-guaranteed-device-healing-via-active-control-flow-attestation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#acfa-secure-runtime-auditing-guaranteed-device-healing-via-active-control-flow-attestation)**
### 作者
* Adam Caulfield, Rochester Institute of Technology
* Norrathep Rattanavipanon, Prince of Songkla University, Phuket Campus
* Ivan De Oliveira Nunes, Rochester Institute of Technology
### 摘要
> 嵌入式设备在“智能”应用和领域中得到越来越广泛的使用。在成本和能源预算严格限制的较低端，它们使用缺乏安全功能的微控制器单元（MCUs）进行实现，这些功能类似于通用处理器中的功能。在这种情况下，远程证明（RA）被提议作为一种廉价的安全服务，使验证器（Vrf）能够远程检测在证明者MCU（Prv）上安装的软件二进制文件的非法修改。尽管其有效性可以验证Prv的二进制完整性，但经典RA无法检测到劫持软件控制流的攻击（可能导致权限提升或代码重用攻击）。
> 
> 控制流证明（CFA）通过提供有关二进制文件中指令执行顺序的信息来增强RA。因此，CFA可以检测到前述的控制流攻击。然而，我们观察到当前的CFA架构无法保证在攻击发生时Vrf能够收到控制流报告。反过来，尽管它们支持检测利用，它们没有提供确定利用源的方法。此外，现有的CFA要么需要对二进制进行插装，导致显著的运行时开销和代码增加；要么需要相对昂贵的硬件支持，比如哈希引擎。另外，当前的技术既不连续（它们仅用于验证小型和独立的操作），也不主动（一旦检测到妥协，它们不能提供安全的远程解决问题的方法）。
> 
> 为了共同解决这些挑战，我们提出了ACFA：一种用于主动CFA的混合（硬件/软件）架构。ACFA能够连续监测MCU中的所有控制流转移，并且不需要进行二进制插装。它还利用最近提出的“主动信任根”的概念，以实现对漏洞源的安全审计和在检测到妥协时的保证修复。我们提供了一个在普通低端MCU（TI MSP430）上基于ACFA的开源参考实现，并对其进行评估以证明其安全性和成本效益。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/caulfield](https://www.usenix.org/conference/usenixsecurity23/presentation/caulfield)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-caulfield.pdf](https://www.usenix.org/system/files/usenixsecurity23-caulfield.pdf)
## Fuzz The Power: Dual-role State Guided Black-box Fuzzing for USB Power Delivery.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fuzz-the-power-dual-role-state-guided-black-box-fuzzing-for-usb-power-delivery) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fuzz-the-power-dual-role-state-guided-black-box-fuzzing-for-usb-power-delivery)**
### 作者
* Kyungtae Kim, Purdue University
* Sungwoo Kim, Purdue University
* Kevin R. B. Butler, University of Florida
* Antonio Bianchi, Purdue University
* Rick Kennell, Purdue University
* Dave (Jing) Tian, Purdue University
### 摘要
> USB Power Delivery（USBPD）是一种先进的电源供应充电协议。由于其高功率供应能力，已广泛应用于消费设备，如智能手机和笔记本电脑，并成为欧盟和北美地区事实上的USB充电标准。由于充电的低级本质和协议的复杂性，USBPD通常作为专用微控制器单元（MCU）上运行的专有固件来进行实现，并配备USBPD物理层。这些实现中的缺陷不仅可能导致安全问题，如过充电，还可能导致安全问题，如允许攻击者重新刷写USBPD固件。
> 
> 本文提出了FUZZPD，这是首个针对闭源USBPD固件的现成设备的黑盒模糊测试技术，具备双角色状态引导。FUZZPD只需要物理的USB Type-C连接，就可以以即插即用的方式进行操作。为了便于对USBPD固件进行黑盒模糊测试，FUZZPD从USBPD规范手动创建了一个双角色状态机，实现了状态覆盖和来自模糊输入的转换。FUZZPD还提供了多级变异策略，实现了细粒度的状态感知模糊测试，包括内部状态和状态间变异。我们使用Chromebook作为模糊测试主机来实现FUZZPD，并对来自7个不同供应商的12个USBPD移动设备、7个不同供应商的7个USB集线器和5个不同供应商的5个充电器进行了评估。FUZZPD发现了15个独特的缺陷，其中9个已被相应供应商确认。我们还通过将FUZZPD与多种最先进的黑盒模糊测试技术进行比较，证明了FUZZPD的代码覆盖率比其他解决方案高40%到3倍。然后，我们将FUZZPD与USBIF的USBPD符合性测试套件进行比较，并表明FUZZPD可以找到7个更多的缺陷，代码覆盖率提高了2倍。FUZZPD是朝着安全可靠的USB充电的第一步。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kim-kyungtae](https://www.usenix.org/conference/usenixsecurity23/presentation/kim-kyungtae)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kim-kyungtae.pdf](https://www.usenix.org/system/files/usenixsecurity23-kim-kyungtae.pdf)
## The Impostor Among US(B): Off-Path Injection Attacks on USB Communications.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-impostor-among-us-b-off-path-injection-attacks-on-usb-communications) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-impostor-among-us-b-off-path-injection-attacks-on-usb-communications)**
### 作者
* Robert Dumitru, The University of Adelaide and Defence Science and Technology Group
* Daniel Genkin, Georgia Tech
* Andrew Wabnitz, Defence Science and Technology Group
* Yuval Yarom, The University of Adelaide
### 摘要
> USB是现代计算机系统中最常见的外围接口，并且其固有的不安全性使其成为一种有吸引力的攻击向量。USB的一个众所周知的限制是其通信不加密。这使得路径上的对手可以轻松地进行中间人攻击。已经证明了可能存在威胁通信机密性的路径外攻击。然而，到目前为止，还没有展示出违反USB通信完整性的路径外攻击。
> 
> 在这项研究中，我们证明了即使对抗路径外攻击者，USB通信的完整性也无法得到保证。具体而言，我们设计和构建了恶意设备，即使放置在受害设备和主机之间的路径之外，也可以向该路径注入数据。我们使用我们开发的注入器可以伪造被主机计算机系统解释为受信任的受害设备的数据输入的真实性。通过代表受信任的受害设备进行注入，我们可以规避计算机系统针对常见USB攻击所采用的基于软件的授权策略防御措施。我们展示了两种具体的攻击。第一种注入击键，允许攻击者执行命令。第二种攻击演示了在从USB盘安装系统期间进行文件内容替换。我们对29个USB 2.0和USB 3.x集线器进行了攻击测试，发现其中有14个存在漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/dumitru](https://www.usenix.org/conference/usenixsecurity23/presentation/dumitru)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-dumitru.pdf](https://www.usenix.org/system/files/usenixsecurity23-dumitru.pdf)
## A comprehensive, formal and automated analysis of the EDHOC protocol.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-comprehensive-formal-and-automated-analysis-of-the-edhoc-protocol) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#a-comprehensive-formal-and-automated-analysis-of-the-edhoc-protocol)**
### 作者
* Charlie Jacomme, Inria Paris
* Elise Klein, Inria Nancy and Université de Lorraine
* Steve Kremer, Inria Nancy and Université de Lorraine
* Maïwenn Racouchot, Inria Nancy and Université de Lorraine
### 摘要
> EDHOC是IETF的轻量级验证密钥交换（LAKE）工作组提出的一个密钥交换协议。它的设计专注于适用于受限的物联网通信技术的小型消息大小。本文提供了对EDHOC-draft版本12的深入形式分析，考虑了不同的建议的身份验证方法和各种选项。为了进行分析，我们使用了SAPIC+协议平台，该平台允许将单个规范编译为3种最先进的协议验证工具（PROVERIF、TAMARIN和DEEPSEC），并利用每个工具的优势。在我们的分析中，我们考虑了各种折衷情景，并利用最新的结果来模拟密码原语中的现有弱点，放宽了符号分析中常见的完美密码假设。尽管我们的分析证实了对最基本威胁模型的安全性，但在考虑更高级的威胁模型时，我们发现了当前设计中存在一些弱点。这些弱点已经得到了LAKE工作组的认可，并且我们提出的缓解措施（并且被证明是安全的）已经包含在草案的第14版本中。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/jacomme](https://www.usenix.org/conference/usenixsecurity23/presentation/jacomme)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-jacomme.pdf](https://www.usenix.org/system/files/usenixsecurity23-jacomme.pdf)
## Hash Gone Bad: Automated discovery of protocol attacks that exploit hash function weaknesses.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#hash-gone-bad-automated-discovery-of-protocol-attacks-that-exploit-hash-function-weaknesses) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#hash-gone-bad-automated-discovery-of-protocol-attacks-that-exploit-hash-function-weaknesses)**
### 作者
* Vincent Cheval, Inria Paris
* Cas Cremers, CISPA Helmholtz Center for Information Security
* Alex, CISPA Helmholtz Center for Information Security
* er Dax, CISPA Helmholtz Center for Information Security
* Lucca Hirschi, Inria & LORIA
* Charlie Jacomme, Inria Paris
* Steve Kremer, Université de Lorraine, LORIA, Inria Nancy Grand-Est
### 摘要
> 大多数加密协议使用加密哈希函数作为构建模块。这些协议的安全性分析通常假设哈希函数是完美的（如随机预言模型）。然而，实际上，大多数广泛使用的哈希函数远非完美，因此分析可能会忽略利用模型与实际使用的哈希函数之间的差距的攻击。
> 
> 我们开发了一种系统发现利用广泛使用的哈希函数中的弱点对安全协议发起攻击的方法论。我们通过重新审视哈希函数的理论属性与现实世界哈希函数的弱点之间的差距，发展了一个威胁模型的网格。针对所有这些威胁模型，我们开发了细粒度的符号模型。
> 
> 我们方法论的细粒度模型不能直接通过使用等式推理来编码到现有的最先进分析工具中。因此，我们为两种主要工具Tamarin和Proverif开发了扩展。在使用我们的方法论进行广泛的案例研究中，扩展工具重新发现了先前报告的针对这些协议的所有攻击，并发现了几个新的变种。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cheval](https://www.usenix.org/conference/usenixsecurity23/presentation/cheval)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cheval.pdf](https://www.usenix.org/system/files/usenixsecurity23-cheval.pdf)
## How fast do you heal? A taxonomy for post-compromise security in secure-channel establishment.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#how-fast-do-you-heal-a-taxonomy-for-post-compromise-security-in-secure-channel-establishment) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#how-fast-do-you-heal-a-taxonomy-for-post-compromise-security-in-secure-channel-establishment)**
### 作者
* Olivier Blazy, LIX, CNRS, Inria, École Polytechnique, Institut Polytechnique de Paris, France
* Ioana Boureanu, University of Surrey, Surrey Centre for Cyber Security, UK
* Pascal Lafourcade, LIMOS, University of Clermont Auvergne, France
* Cristina Onete, XLIM, University of Limoges, France
* Léo Robert, LIMOS, University of Clermont Auvergne, France
### 摘要
> 后置妥协安全（PCS）是安全通道建立方案的一种属性，它限制了已经入侵终端之一的对手在一定数量的消息之后导致的安全漏洞，之后通道会自愈。作为一个有吸引力的属性，尤其是在斯诺登曝光大规模监视后，PCS是由Signal消息传输协议开创并在OTR中存在。在本文中，我们引入了一个框架来量化和比较PCS安全性，并与广泛的对手分类进行比较。我们的方法的广泛性和灵活性使我们能够模拟广泛类的协议的自愈速度，包括Signal，但也包括一种基于身份的消息传输协议——SAID，甚至包括5G切换协议的组合。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/blazy](https://www.usenix.org/conference/usenixsecurity23/presentation/blazy)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-blazy.pdf](https://www.usenix.org/system/files/usenixsecurity23-blazy.pdf)
## Automated Analysis of Protocols that use Authenticated Encryption: How Subtle AEAD Differences can impact Protocol Security.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#automated-analysis-of-protocols-that-use-authenticated-encryption-how-subtle-aead-differences-can-impact-protocol-security) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#automated-analysis-of-protocols-that-use-authenticated-encryption-how-subtle-aead-differences-can-impact-protocol-security)**
### 作者
* Cas Cremers, CISPA Helmholtz Center for Information Security
* Alex, CISPA Helmholtz Center for Information Security and Saarland University
* er Dax, CISPA Helmholtz Center for Information Security and Saarland University
* Charlie Jacomme, Inria Paris
* Mang Zhao, CISPA Helmholtz Center for Information Security and Saarland University
### 摘要
> 许多现代安全协议，如TLS、WPA2、WireGuard和Signal，使用一种名为认证加密（可选认证数据）的密码原语，也被称为AEAD方案。AEAD是对称加密的一种变体，它额外提供了身份验证功能。虽然身份验证似乎是一个简单的附加要求，但事实上它已经变得复杂：对于AEAD方案，仍然有许多不同的安全概念被提出，并且最近的几个协议级攻击利用了真实世界AEAD方案之间的微妙行为差异。
> 
> 我们提供了一种用于使用AEAD的协议的自动化分析方法，可以系统地发现利用特定类型AEAD的细微差异的攻击。这可以用于分析具有固定AEAD选择的特定协议，或者提供有关哪些AEAD可能会（不会）足以使协议设计安全的指导。我们开发了通用的符号AEAD模型，并将其实例化为Tamarin证明器。我们的方法可以自动且高效地发现以前只能通过手动检查才能发现的协议攻击，例如对Facebook的消息原件的鲨鱼攻击，以及对SFrame和YubiHSM的攻击。此外，我们的分析还揭示了基于AEAD细微差异的其他几个协议的不良行为。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cremers-protocols](https://www.usenix.org/conference/usenixsecurity23/presentation/cremers-protocols)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cremers-protocols.pdf](https://www.usenix.org/system/files/usenixsecurity23-cremers-protocols.pdf)
## High Recovery with Fewer Injections: Practical Binary Volumetric Injection Attacks against Dynamic Searchable Encryption.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#high-recovery-with-fewer-injections-practical-binary-volumetric-injection-attacks-against-dynamic-searchable-encryption) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#high-recovery-with-fewer-injections-practical-binary-volumetric-injection-attacks-against-dynamic-searchable-encryption)**
### 作者
* Xianglong Zhang, Huazhong University of Science and Technology
* Wei Wang, Huazhong University of Science and Technology
* Peng Xu, Huazhong University of Science and Technology and Hubei Key Laboratory of Distributed System Security
* Laurence T. Yang, Huazhong University of Science and Technology and St. Francis Xavier University
* Kaitai Liang, Delft University of Technology
### 摘要
> 搜索可搜索的对称加密使得数据库上的私人查询成为可能，但也可能导致信息泄漏。攻击者可以利用这些泄漏来发动注入攻击（Zhang等人，USENIX Security Symposium'16），以恢复查询中的底层关键字。现有注入攻击的性能与泄漏信息或注入量密切相关。在这项工作中，我们提出了两种新的注入攻击，即BVA和BVMA，通过利用二进制体积方法。我们使攻击者能够通过使用已知关键字并观察查询结果的体积来注入更少的文件，从而破解已经研究过的防御措施（例如，阈值防御，填充）。我们的攻击可以在不利用目标查询和客户端数据库分布的情况下进行。我们在实际数据集中使用实际查询对所提出的攻击进行了实证评估。结果表明，即使在大规模数据集下注入数量较少（<20个文件）的情况下，我们的攻击仍能获得高恢复率（>80%）。
> 
> Note: Please note that the translation is provided to the best of my ability and may not be perfect.

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-xianglong](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-xianglong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-xianglong.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-xianglong.pdf)
## Cross Container Attacks: The Bewildered eBPF on Clouds.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#cross-container-attacks-the-bewildered-ebpf-on-clouds) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#cross-container-attacks-the-bewildered-ebpf-on-clouds)**
### 作者
* Yi He, Tsinghua University and BNRist
* Rol, Tsinghua University and BNRist
* Guo, Tsinghua University and BNRist
* Yunlong Xing, George Mason University
* Xijia Che, Tsinghua University and BNRist
* Kun Sun, George Mason University
* Zhuotao Liu, Tsinghua University
* Ke Xu, Tsinghua University
* Qi Li, Tsinghua University
### 摘要
> 扩展伯克利包过滤器（eBPF）通过直接在内核空间运行字节码，为用户空间程序提供了强大灵活的内核接口，可以扩展内核功能。云服务广泛使用eBPF来增强容器安全性、网络管理和系统可观测性。然而，我们发现在Linux主机上广泛讨论的攻击性eBPF可能给容器带来新的攻击面。利用eBPF的跟踪功能，攻击者可以突破容器的隔离并攻击主机，例如窃取敏感数据、拒绝服务攻击甚至逃脱容器。本文研究了基于eBPF的容器间攻击，并揭示了它们在真实世界服务中的安全影响。通过eBPF攻击，我们成功攻陷了五个在线的Jupyter/交互式Shell服务以及谷歌云平台的云Shell。此外，我们发现三个领先云服务提供商提供的Kubernetes服务可以被利用，在攻击者通过eBPF逃脱容器后发起跨节点攻击。具体而言，在阿里巴巴的Kubernetes服务中，攻击者可以通过滥用他们的超权限云指标或管理Pods来攻陷整个集群。不幸的是，容器上的eBPF攻击很少被人们知晓，现有的入侵检测系统几乎无法发现。另外，现有的eBPF权限模型无法限制eBPF并确保在共享内核容器环境中的安全使用。因此，我们提出了一种新的eBPF权限模型来对抗容器中的eBPF攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/he](https://www.usenix.org/conference/usenixsecurity23/presentation/he)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-he.pdf](https://www.usenix.org/system/files/usenixsecurity23-he.pdf)
## DScope: A Cloud-Native Internet Telescope.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#dscope-a-cloud-native-internet-telescope) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#dscope-a-cloud-native-internet-telescope)**
### 作者
* Eric Pauley, University of Wisconsin–Madison
* Paul Barford, University of Wisconsin–Madison
* Patrick McDaniel, University of Wisconsin–Madison
### 摘要
> 监视路由但未使用IP地址空间的互联网望远镜的数据已成为研究恶意、不受欢迎和意外行为的基础，然而，服务迁移到云基础架构和IPv4地址空间日益稀缺给传统互联网望远镜带来了严峻挑战。本文介绍了DScope，一种基于云的可扩展交互式互联网望远镜。我们描述了DScope的设计和实现，包括两个主要组成部分。收集器部署在云虚拟机上，与传入的连接请求交互，并捕获pcap跟踪数据。数据处理管道对部署的收集器采集的pcap进行组织、转换和存档，以供事后分析。通过比较DScope收集的流量样本与传统望远镜的流量，我们可以看到针对云系统的行为在数量和现象上与随机扫描预期相比存在显著差异，达到了高达450倍的云定位。我们还展示了DScope的自适应方法实现了令人印象深刻的性价比：在观察不到8分钟的情况下，可以实现对给定IP地址上扫描仪的最佳产出。我们的结果表明，基于云的望远镜比传统技术具有更广泛和更全面的视角。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/pauley](https://www.usenix.org/conference/usenixsecurity23/presentation/pauley)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-pauley.pdf](https://www.usenix.org/system/files/usenixsecurity23-pauley.pdf)
## Credit Karma: Understanding Security Implications of Exposed Cloud Services through Automated Capability Inference.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#credit-karma-understanding-security-implications-of-exposed-cloud-services-through-automated-capability-inference) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#credit-karma-understanding-security-implications-of-exposed-cloud-services-through-automated-capability-inference)**
### 作者
* Xueqiang Wang, University of Central Florida
* Yuqiong Sun, Meta
* Susanta N, ServiceNow
* a, ServiceNow
* XiaoFeng Wang, Indiana University Bloomington
### 摘要
> 移动应用程序（应用）的普及导致了对云平台中后端服务的需求迅速增长，如通知、数据存储、身份验证等。这使得攻击者一直以来一直持续攻击这些云服务，导致数据安全事件的增加。本文重点研究了云服务变得越来越容易受攻击的主要原因之一：云凭证中的（过度）权限。我们提出了一种系统化的方法来从应用程序中恢复云凭证，并推断它们在云端的功能，并验证其是否超出了应用程序的合法需求。我们进一步研究了泄露的功能的安全影响，演示了看似善意且无特权的能力，当结合在一起时，会导致意外且严重的安全问题。对三种热门云平台（AWS、Azure和阿里云）上的两种类型（通知和存储）约130万个应用程序进行的大规模研究显示，使用云服务的应用程序中有27.3％的应用程序暴露了过度授权的云凭证。此外，超权云凭证的大多数（约64.8％）可能导致数据攻击。在研究过程中，我们还发现了由常规云凭证启用的新型攻击，例如通过推送通知进行钓鱼攻击和有针对性的用户数据污染。我们已向应用程序供应商和云提供商作出了负责任的披露，并开始看到影响 - 已有超过300个应用程序供应商修复了这些问题。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-xueqiang-karma](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-xueqiang-karma)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-xueqiang-karma.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-xueqiang-karma.pdf)
## Detecting Multi-Step IAM Attacks in AWS Environments via Model Checking.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#detecting-multi-step-iam-attacks-in-aws-environments-via-model-checking) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#detecting-multi-step-iam-attacks-in-aws-environments-via-model-checking)**
### 作者
* Ilia Shevrin, Citi
* Oded Margalit, Ben-Gurion University
### 摘要
> 云服务因其快速提供按需虚拟基础设施而受到IT专业人员的青睐。随着使用量的增加，人们也越来越关注可能由于配置错误导致的安全漏洞，这可能会暴露资源或允许恶意行为者提升权限。模型检查是一种已知的方法，用于验证系统的有限状态布尔模型是否满足某些属性，其中模型和属性都用形式逻辑进行描述。如果不满足，可以生成导致违反状态的有限轨迹。
> 
> 在本文中，我们提出了一种方法，从Amazon Web Services（AWS）的身份和访问管理（IAM）组件中构建一个有限状态布尔模型，并从攻击目标（例如读取分类的S3存储桶对象）中提取一个属性。我们运行模型检查器，检测某些初始设置是否允许攻击者通过应用IAM操作来升级权限并达到目标。我们展示了我们的方法可以发现真实AWS环境中的现有配置错误，并且可以在一分钟内检测到包含数十个AWS账户和数百个资源的设置中的多步攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shevrin](https://www.usenix.org/conference/usenixsecurity23/presentation/shevrin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shevrin.pdf](https://www.usenix.org/system/files/usenixsecurity23-shevrin.pdf)
## Remote Direct Memory Introspection.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#remote-direct-memory-introspection) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#remote-direct-memory-introspection)**
### 作者
* Hongyi Liu, Rice University
* Jiarong Xing, Rice University
* Yibo Huang, Rice University
* Danyang Zhuo, Duke University
* Srinivas Devadas, Massachusetts Institute of Technology
* Ang Chen, Rice University
### 摘要
> 超级监控程序在云安全中起着关键作用，但它们引入了大量可信计算基（TCB）并拖累了性能。最近，超级监控程序卸载成为一种新兴趋势，特权功能被沉入专门设计的硬件设备（例如Amazon的Nitro，AMD的Pensando）中，以实现更好的安全性和接近裸机性能。
> 
> 鉴于这一趋势，本项目重新设计了一个常常被剥夺到超级监控程序的经典安全任务，内存检查，但仅使用广泛可用的设备。远程直接内存检查（RDMI）将两种类型的商品可编程设备耦合在一起，形成一种新颖的防御平台。它使用RDMA NIC实现高效的内存访问，使用可编程网络设备实现高效的计算，两者均以ASIC速度运行。RDMI还为用户提供了一种声明性语言来表达内存检查任务，并且其编译器会自动将任务降低到硬件基质以进行执行。我们的评估表明，RDMI可以在不需要超级监控程序的情况下保护裸机，以高频率和零CPU开销检查内核状态并检测Rootkits。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/liu-hongyi](https://www.usenix.org/conference/usenixsecurity23/presentation/liu-hongyi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-liu-hongyi.pdf](https://www.usenix.org/system/files/usenixsecurity23-liu-hongyi.pdf)
## Auditing Framework APIs via Inferred App-side Security Specifications.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#auditing-framework-apis-via-inferred-app-side-security-specifications) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#auditing-framework-apis-via-inferred-app-side-security-specifications)**
### 作者
* Parjanya Vyas, University of Waterloo
* Asim Waheed, University of Waterloo
* Yousra Aafer, University of Waterloo
* N. Asokan, University of Waterloo
### 摘要
> 在这项工作中，我们通过利用应用程序侧的安全规范来审计Android私有框架API的访问控制实现。这个看似简单的审计任务面临着重大的挑战。它需要提取非传统的安全指标并理解它们与私有框架API的相关性。更重要的是，解决这些挑战需要依赖不确定的提示。因此，我们引入了蓝鸟（Bluebird），这是一个用于Android API的安全审计平台，它模拟了人类专家。蓝鸟通过使用概率推理将应用程序侧逻辑的人类化理解与静态推导的程序语义无缝融合在一起，以检测私有API中的访问控制漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/vyas](https://www.usenix.org/conference/usenixsecurity23/presentation/vyas)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-vyas.pdf](https://www.usenix.org/system/files/usenixsecurity23-vyas.pdf)
## WHIP: Improving Static Vulnerability Detection in Web Application by Forcing tools to Collaborate.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#whip-improving-static-vulnerability-detection-in-web-application-by-forcing-tools-to-collaborate) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#whip-improving-static-vulnerability-detection-in-web-application-by-forcing-tools-to-collaborate)**
### 作者
* Feras Al-Kassar, EURECOM
* Luca Compagna, SAP Security Research
* Davide Balzarotti, EURECOM
### 摘要
> 提高静态应用程序安全测试（SAST）的准确性是对抗关键漏洞和增加Web安全的关键。然而，即使是最先进的商业工具也存在许多盲点，限制了它们适当分析现代代码和发现复杂的跨程序漏洞的能力。
> 
> 在本文中，我们提出了WHIP，这是第一个能够通过共享信息使SAST工具“合作”的方法，帮助它们克服彼此的限制。我们的技术仅通过使用不同的工具作为“神谕”在应用程序源代码上进行操作，搜索中断数据流的迹象。当我们发现这样的障碍时，我们注入绕过SAST工具无法正确处理的代码部分的替代路径。
> 
> 我们通过分析Github上超过100个受欢迎的PHP项目进行了大量实验，这些项目在Github上有1000多个星标。我们的实验表明，我们的方法使两个受欢迎的SAST工具能够增加对应用程序源代码的覆盖范围，使高严重性警报的数量增加了25%。我们对WHIP得到的9,226个新警报的30%进行了手动检查，并对14个应用程序负责任地披露了35个零日注入漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/al-kassar](https://www.usenix.org/conference/usenixsecurity23/presentation/al-kassar)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-al-kassar.pdf](https://www.usenix.org/system/files/usenixsecurity23-al-kassar.pdf)
## SQIRL: Grey-Box Detection of SQL Injection Vulnerabilities Using Reinforcement Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#sqirl-grey-box-detection-of-sql-injection-vulnerabilities-using-reinforcement-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#sqirl-grey-box-detection-of-sql-injection-vulnerabilities-using-reinforcement-learning)**
### 作者
* Salim Al Wahaibi, Imperial College London
* Myles Foley, Imperial College London
* Sergio Maffeis, Imperial College London
### 摘要
> 网络安全扫描器被用于发现已部署的Web应用程序中的SQL注入漏洞。扫描器倾向于使用静态规则来覆盖最常见的注入情况，缺乏负载的多样性，导致请求量过大和误报率较高。此外，扫描器通常依赖于目标网页上的错误消息或其他重要反馈的存在，这是由于Web开发人员存在其他不安全的编程实践造成的。
> 
> 在本文中，我们开发了一种名为SQIRL的新型方法，基于深度强化学习来检测SQL注入漏洞，使用多个工作代理和灰盒反馈。每个工作代理智能模糊由自动爬行组件发现的输入字段。这种方法生成比现有扫描器更多样的负载集，从而发现更多漏洞。此外，SQIRL尝试的负载较少，因为它们是有针对性地生成的。
> 
> 在我们的SQL注入微基准测试中，SQIRL发现了所有的漏洞，而与大多数最先进的扫描器相比，请求的数量要少得多。它还在一组14个生产级Web应用程序上明显优于其他扫描器，在发现了33个漏洞的同时，没有出现任何误报。我们已经负责地披露了SQIRL发现的22个新漏洞，分为6个CVE编号。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/al-wahaibi](https://www.usenix.org/conference/usenixsecurity23/presentation/al-wahaibi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-al-wahaibi.pdf](https://www.usenix.org/system/files/usenixsecurity23-al-wahaibi.pdf)
## Hiding in Plain Sight: An Empirical Study of Web Application Abuse in Malware.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#hiding-in-plain-sight-an-empirical-study-of-web-application-abuse-in-malware) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#hiding-in-plain-sight-an-empirical-study-of-web-application-abuse-in-malware)**
### 作者
* Mingxuan Yao, Georgia Institute of Technology
* Jonathan Fuller, United States Military Academy
* Ranjita Pai Kasturi, Georgia Institute of Technology
* Saumya Agarwal, Georgia Institute of Technology
* Amit Kumar Sikder, Georgia Institute of Technology
* Brendan Saltaformaggio, Georgia Institute of Technology
### 摘要
> Web应用程序提供了各种实用工具，被恶意软件滥用作为传统攻击者控制服务器的替代品。阻止这些与Web应用程序相关的恶意软件（WAE恶意软件）需要紧急协作响应小组和Web应用程序提供商之间的快速合作。不幸的是，我们的研究发现，这种协作的延迟使得WAE恶意软件得以繁衍。我们开发了Marsea，一个自动化的恶意软件分析流程，研究WAE恶意软件，并实现快速纠正。通过分析1万个恶意软件样本，Marsea揭示了893个WAE恶意软件，涉及97个家族滥用了29个Web应用程序。我们的研究发现，与2020年相比，WAE恶意软件数量增长了226%，而且恶意软件作者开始减少对攻击者控制服务器的依赖。实际上，我们发现WAE恶意软件依赖攻击者控制服务器的数量减少了13.7%。迄今为止，我们已经使用Marsea与Web应用程序提供商合作关闭了50%的恶意Web应用程序内容。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yao-mingxuan](https://www.usenix.org/conference/usenixsecurity23/presentation/yao-mingxuan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yao-mingxuan.pdf](https://www.usenix.org/system/files/usenixsecurity23-yao-mingxuan.pdf)
## Bilingual Problems: Studying the Security Risks Incurred by Native Extensions in Scripting Languages.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#bilingual-problems-studying-the-security-risks-incurred-by-native-extensions-in-scripting-languages) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#bilingual-problems-studying-the-security-risks-incurred-by-native-extensions-in-scripting-languages)**
### 作者
* Cristian-Alex, CISPA Helmholtz Center for Information Security
* ru Staicu, CISPA Helmholtz Center for Information Security
* Sazzadur Rahaman, University of Arizona
* Ágnes Kiss, CISPA Helmholtz Center for Information Security
* Michael Backes, CISPA Helmholtz Center for Information Security
### 摘要
> 脚本语言由于易于使用和繁荣的软件生态系统，不断受到人们的欢迎。这些语言通过设计提供了崩溃和内存安全性。因此，开发者不需要理解和防止困扰C代码的底层安全问题。然而，脚本语言通常允许本机扩展，即以自定义的C/C++代码直接从高级语言中调用。尽管此功能带来了诸多好处，如提高性能或重用遗留代码，但也可能破坏语言的保证，例如，崩溃安全性。
> 
> 在这项工作中，我们首先对三种流行脚本语言的本机扩展API的安全风险进行了比较分析。此外，我们讨论了一种研究本机扩展API误用的新方法。然后，我们对npm进行了深入研究，npm是最容易受到本机扩展引入的威胁的生态系统。我们展示了通过使用精心设计的输入，可以在33个npm软件包中利用扩展中的漏洞，在其嵌入库中产生未初始化内存读取、严重崩溃或内存泄漏。此外，我们还确定了六个开源网站应用程序，在这些应用程序中，弱对手可以远程部署此类攻击。
> 
> 最后，我们针对本文中所呈现的工作被分配了七个安全通告，其中大多数被标记为高危。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/staicu](https://www.usenix.org/conference/usenixsecurity23/presentation/staicu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-staicu.pdf](https://www.usenix.org/system/files/usenixsecurity23-staicu.pdf)
## Did the Shark Eat the Watchdog in the NTP Pool? Deceiving the NTP Pool's Monitoring System.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#did-the-shark-eat-the-watchdog-in-the-ntp-pool-deceiving-the-ntp-pools-monitoring-system) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#did-the-shark-eat-the-watchdog-in-the-ntp-pool-deceiving-the-ntp-pools-monitoring-system)**
### 作者
* Jonghoon Kwon, ETH Zürich
* Jeonggyu Song, Korea University
* Junbeom Hur, Korea University
* Adrian Perrig, ETH Zürich
### 摘要
> NTP池已成为现代互联网服务和应用的重要基础设施。通过自愿加入数千个时间服务器，它为数百万分布式（异构）系统提供时间。虽然已经采取了许多措施来提高NTP的准确性、可靠性和安全性，但不幸的是，NTP池吸引的关注相对较少。在本文中，我们对NTP池安全性进行了综合分析，特别是NTP池监控系统，它监督参与服务器的正确性和响应性。我们首先研究了欺骗池的健康检查系统以从池中移除合法时间服务器的战略性攻击。然后，通过使用监控服务器和注入到池中的时间服务器的经验性分析，我们证明了我们的方法的可行性，展示了其有效性，并对其影响进行了讨论。最后，我们讨论了设计一个新的池监控系统来缓解这些攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kwon](https://www.usenix.org/conference/usenixsecurity23/presentation/kwon)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kwon.pdf](https://www.usenix.org/system/files/usenixsecurity23-kwon.pdf)
## Device Tracking via Linux's New TCP Source Port Selection Algorithm.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#device-tracking-via-linuxs-new-tcp-source-port-selection-algorithm) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#device-tracking-via-linuxs-new-tcp-source-port-selection-algorithm)**
### 作者
* Moshe Kol, Hebrew University of Jerusalem
* Amit Klein, Hebrew University of Jerusalem
* Yossi Gilad, Hebrew University of Jerusalem
### 摘要
> 我们描述了一种用于Linux设备的跟踪技术，利用最近在Linux内核中引入的一种新的TCP源端口生成机制。这种机制基于RFC 6056中标准化的算法，通过更好地随机选择端口来提高安全性。我们的技术通过以攻击者预设的方式对生成的TCP源端口进行采样，来检测在所述算法中使用的哈希函数中的碰撞。这些哈希碰撞仅依赖于每个设备的密钥，因此碰撞集合形成了一个设备标识，允许跟踪设备跨浏览器、浏览器隐私模式、容器和IPv4/IPv6网络（包括某些VPN）。它可以区分具有相同硬件和软件的设备，并在设备重新启动之前一直有效。
> 
> 我们实施了该技术，并在两个不同位置的跟踪服务器上以及各种网络中的Linux设备上进行了测试。我们还在一个安卓设备上进行了测试，我们对其进行了修补，以引入新的端口选择算法。该跟踪技术在实际条件下运作，并且我们在论文中报告了关于它的详细发现，包括其停留时间、可扩展性以及在不同网络类型中的成功率。我们与Linux内核团队合作，以减轻利用漏洞的影响，并导致2022年5月引入了Linux内核的安全补丁，我们在论文中提供了更好保护端口选择算法的建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kol](https://www.usenix.org/conference/usenixsecurity23/presentation/kol)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kol.pdf](https://www.usenix.org/system/files/usenixsecurity23-kol.pdf)
## Temporal CDN-Convex Lens: A CDN-Assisted Practical Pulsing DDoS Attack.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#temporal-cdn-convex-lens-a-cdn-assisted-practical-pulsing-ddos-attack) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#temporal-cdn-convex-lens-a-cdn-assisted-practical-pulsing-ddos-attack)**
### 作者
* Run Guo, Tsinghua University
* Jianjun Chen, Tsinghua University and Zhongguancun Laboratory
* Yihang Wang, Tsinghua University
* Keran Mu, Tsinghua University
* Baojun Liu, Tsinghua University and Zhongguancun Laboratory
* Xiang Li, Tsinghua University
* Chao Zhang, Tsinghua University and Zhongguancun Laboratory
* Haixin Duan, Tsinghua University and Zhongguancun Laboratory and QI-ANXIN Technology Research Institute
* Jianping Wu, Tsinghua University and Zhongguancun Laboratory
### 摘要
> 作为互联网基础设施的一个基石，内容传送网络（CDN）作为全球分布式代理平台，在客户端和网站之间提供加速内容传送、卸载网络流量和DDoS防护的功能。然而，我们在本文中揭示了CDN转发网络的固有特性可以被利用来损害服务的可用性。
> 
> 我们提出了一种新的脉冲型拒绝服务攻击类别，名为CDN-Convex攻击。我们探索了利用CDN基础设施作为一个聚焦透镜，将低速攻击请求集中到短暂的高带宽脉冲波中的可能性，从而定期饱和目标TCP服务的脉冲型DoS攻击。通过对五家领先的CDN供应商进行实际实验，我们证明了CDN-Convex是实用和灵活的。我们展示了攻击者可以利用它实现比他们的上传带宽高出1000倍以上的峰值带宽，严重降低目标服务的性能和可用性。遵循负责任的披露政策，我们已向所有受影响的CDN供应商报告了我们的攻击细节，并提出了可能的缓解方案。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/guo-run](https://www.usenix.org/conference/usenixsecurity23/presentation/guo-run)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-guo-run.pdf](https://www.usenix.org/system/files/usenixsecurity23-guo-run.pdf)
## An Efficient Design of Intelligent Network Data Plane.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#an-efficient-design-of-intelligent-network-data-plane) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#an-efficient-design-of-intelligent-network-data-plane)**
### 作者
* Guangmeng Zhou, Tsinghua University
* Zhuotao Liu, Tsinghua University and Zhongguancun Laboratory
* Chuanpu Fu, Tsinghua University
* Qi Li, Tsinghua University and Zhongguancun Laboratory
* Ke Xu, Tsinghua University and Zhongguancun Laboratory
### 摘要
> 将机器学习模型直接部署在网络数据平面上，以数据驱动模型代替预定义的协议，实现智能流量分析。这种能力被称为智能数据平面（IDP），可能会改变一系列网络设计。新兴的可编程交换机为实现IDP提供了关键硬件支持。在这方面的现有技术可分为两大类：（i）专注于从数据平面中提取有用的流信息，同时将基于学习的流量分析放在控制平面上；（ii）更进一步将学习模型嵌入到数据平面中，但未能使用对于实现高准确度至关重要的流级特征。本文中，我们提出了NetBeacon，以提高模型准确度和模型部署效率的最新技术。特别是，NetBeacon提出了一种多阶段顺序模型架构，通过在流程进行的不同阶段进行动态数据包分析，在线速计算可计算的流级特征以提高学习准确度。此外，NetBeacon设计了高效的模型表示机制，以解决在网络数据平面上部署基于树的模型时的表项扩展问题。最后，NetBeacon通过多个紧密耦合的设计增强了其处理并发流量的可扩展性，用于管理用于存储每个流状态的有状态存储。我们实现了NetBeacon的原型，并对其在多个流量分析任务上进行了广泛评估。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhou-guangmeng](https://www.usenix.org/conference/usenixsecurity23/presentation/zhou-guangmeng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhou-guangmeng.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhou-guangmeng.pdf)
## Glowing in the Dark: Uncovering IPv6 Address Discovery and Scanning Strategies in the Wild.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#glowing-in-the-dark-uncovering-ipv6-address-discovery-and-scanning-strategies-in-the-wild) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#glowing-in-the-dark-uncovering-ipv6-address-discovery-and-scanning-strategies-in-the-wild)**
### 作者
* Hammas Bin Tanveer, The University of Iowa
* Rachee Singh, Microsoft and Cornell University
* Paul Pearce, Georgia Tech
* Rishab Nithyan, University of Iowa
### 摘要
> 在这项工作中，我们确定了互联网上IPv6扫描器的扫描策略。通过进行控制实验，利用一个大型未使用的/56 IPv6子网，我们提供了对IPv6扫描器行为的独特视角。我们通过托管与互联网上的IPv6服务器直接或间接联系的应用程序，有选择地使子网的部分可见于扫描器。通过精心设计实验，我们减轻了对发送到我们的/56子网的扫描的隐藏变量的影响，建立了IPv6主机活动类型与扫描引起的扫描仪关注之间的因果关系。我们显示，IPv6主机活动（例如Web浏览，NTP池和Tor网络的成员资格）导致扫描器向我们的子网发送数量更多的自发IP扫描和反向DNS查询。DNS扫描仪将其扫描集中在托管我们应用程序的地址空间的狭小区域，而IP扫描仪在整个子网上广泛扫描。即使我们的子网中的主机活动减少，我们观察到以前托管应用程序的地址空间的部分仍然持续进行扫描。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bin-tanveer](https://www.usenix.org/conference/usenixsecurity23/presentation/bin-tanveer)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-bin-tanveer.pdf](https://www.usenix.org/system/files/usenixsecurity23-bin-tanveer.pdf)
## Oops..! I Glitched It Again! How to Multi-Glitch the Glitching-Protections on ARM TrustZone-M.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#oops-i-glitched-it-again-how-to-multi-glitch-the-glitching-protections-on-arm-trustzone-m) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#oops-i-glitched-it-again-how-to-multi-glitch-the-glitching-protections-on-arm-trustzone-m)**
### 作者
* Xhani Marvin Saß, Technical University of Darmstadt
* Richard Mitev, Technical University of Darmstadt
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
### 摘要
> 电压故障注入（Voltage Fault Injection，VFI），又称电压干扰攻击，已经被证明对实际系统构成严重威胁。在VFI攻击中，攻击者干扰目标设备的供电，迫使设备产生非法行为。已经提出了各种对策来应对不同抽象层的不同类型故障注入攻击，这些对策要么需要修改底层硬件，要么需要修改机器指令级别的软件/固件。而且，仅最近，个别芯片制造商才开始对这一威胁作出回应，将对策集成到他们的产品中。一般而言，这些对策旨在保护免受单一故障注入（SFI）攻击的影响，因为多重故障注入（MFI）被认为是具有挑战性，有时甚至是不切实际的。
> 
> 在本文中，我们介绍了第一个能够在目标设备中注入多个协同电压故障且只需要一个触发信号的电压故障注入（VFI）平台：μ-Glitch。我们提供了一种新颖的多电压故障注入（MVFI）攻击流程，以显著降低故障参数的搜索复杂性，因为每个附加的故障注入都会使搜索空间成倍增加。我们对四个具有TrustZone-M特性的真实芯片进行了评估和展示，其中前两个具有相互依赖的背检机制，而后两个还额外集成了防止故障注入的对策。我们的评估结果显示，μ-Glitch能够在平均一天的时间内成功注入四个连续的故障。最后，我们讨论了缓解VFI攻击的潜在对策，并额外提出了两个关于MVFI的新攻击场景。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/sass](https://www.usenix.org/conference/usenixsecurity23/presentation/sass)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-sass.pdf](https://www.usenix.org/system/files/usenixsecurity23-sass.pdf)
## SHELTER: Extending Arm CCA with Isolation in User Space.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#shelter-extending-arm-cca-with-isolation-in-user-space) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#shelter-extending-arm-cca-with-isolation-in-user-space)**
### 作者
* Yiming Zhang, Southern University of Science and Technology and The Hong Kong Polytechnic University
* Yuxin Hu, Southern University of Science and Technology
* Zhenyu Ning, Hunan University and Southern University of Science and Technology
* Fengwei Zhang, Southern University of Science and Technology
* Xiapu Luo, The Hong Kong Polytechnic University
* Haoyang Huang, Southern University of Science and Technology
* Shoumeng Yan, Ant Group
* Zhengyu He, Ant Group
### 摘要
> 随着保密计算的日益普及，个人用户与众多移动和服务器设备之间的交互更加无缝。TrustZone是一种有前景的安全技术，用于将敏感的私人数据分区到可信执行环境（TEE）中。不幸的是，第三方开发人员对TrustZone的可访问性有限。这是因为TEE供应商需要严格验证此类安全应用程序以保护其安全性。此外，基于TrustZone的系统受到影响可靠的应用程序和可信操作系统的漏洞的影响，可能导致整个系统受到威胁。
> 
> 最近引入的高级虚拟化技术TEE的机密计算架构（CCA）在物理地址空间上引入了一种称为Realm world的新概念，以保护数据的机密性和完整性。CCA的当前版本主要针对Realm world中的虚拟机级别，并未提供用户级别的隔离环境。为了填补这一空白，我们提出了SHELTER，它是CCA主要Realm虚拟机式架构的补充。SHELTER允许第三方开发人员在用户空间中部署其应用程序，并进行隔离。SHELTER与Armv9.2中可用的Arm CCA硬件原语合作设计，提供基于硬件的隔离，同时无需软件工作负载信任其数据给主机操作系统、虚拟化管理程序或特权软件（例如可信操作系统、安全/Realm虚拟化管理程序）。我们已经实施和评估了SHELTER，结果表明SHELTER确保了应用程序的安全性，在真实工作负载下具有适度的性能开销（＜15%）。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-yiming](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-yiming)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-yiming.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-yiming.pdf)
## Hot Pixels: Frequency, Power, and Temperature Attacks on GPUs and Arm SoCs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#hot-pixels-frequency-power-and-temperature-attacks-on-gpus-and-arm-socs) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#hot-pixels-frequency-power-and-temperature-attacks-on-gpus-and-arm-socs)**
### 作者
* Hritvik Taneja, Georgia Tech
* Jason Kim, Georgia Tech
* Jie Jeff Xu, Georgia Tech
* Stephan van Schaik, University of Michigan
* Daniel Genkin, Georgia Tech
* Yuval Yarom, Ruhr University Bochum
### 摘要
> 追求更薄、更轻、更节能的设备驱动力使得现代SoCs不得不在功耗、散热和执行速度（即频率）之间进行微妙的权衡。虽然有利，但这些动态电压频率调节（DVFS）机制也导致了软件可见的混合侧信道，通过软件来探测计算设备的模拟特性。这种混合攻击是一种新兴的威胁，可以绕过传统的微体系结构侧信道攻击的对策。
> 
> 鉴于Arm SoCs和GPU的普及，本文研究了通过内部传感器测量的功耗、温度和频率等信息泄漏对这些设备的影响。我们证明了观测到的传感器数据与指令执行和数据处理都存在相关性，使我们能够对这些设备进行软件可见的混合侧信道攻击。
> 
> 为了展示这个问题在现实世界中的影响，我们在启用所有侧信道对策的情况下，对Chrome和Safari进行了基于JavaScript的像素窃取和历史嗅探攻击。最后，我们还展示了无需任何提升权限的网站指纹识别攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/taneja](https://www.usenix.org/conference/usenixsecurity23/presentation/taneja)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-taneja.pdf](https://www.usenix.org/system/files/usenixsecurity23-taneja.pdf)
## SpectrEM: Exploiting Electromagnetic Emanations During Transient Execution.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#spectrem-exploiting-electromagnetic-emanations-during-transient-execution) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#spectrem-exploiting-electromagnetic-emanations-during-transient-execution)**
### 作者
* Jesse De Meulemeester, COSIC, KU Leuven
* Antoon Purnal, COSIC, KU Leuven
* Lennert Wouters, COSIC, KU Leuven
* Arthur Beckers, COSIC, KU Leuven
* Ingrid Verbauwhede, COSIC, KU Leuven
### 摘要
> 现代处理器实现了复杂的性能优化，如乱序执行和推测执行，这使程序受到所谓的瞬态执行攻击的影响。到目前为止，这种攻击依赖于特定的片上隐蔽通道（如缓存定时），并给出了让人希望的结论，即通过关闭或减弱这些通道可以阻挠这些攻击。在本文中，我们考虑了瞬态执行的不可避免的物理副作用。我们关注处理器产生的电磁（EM）辐射，并开发了两种轻量级和精确的EM通道，以从瞬态窗口中提取秘密位。我们提出了SpectrEM，这是一种针对受到物理攻击者物理接触的嵌入式设备的Spectre变种。它虽然假设存在物理对手，但在嵌入式世界中不 fundamentally require code execution，从而扩展了它的适用性。我们在Arm Cortex-A72上评估了SpectrEM，发现它在误码率低至0.008%的情况下每秒泄漏多达366位。据我们所知，这是对物理瞬态执行攻击的第一个实际演示。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/de-meulemeester](https://www.usenix.org/conference/usenixsecurity23/presentation/de-meulemeester)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-de-meulemeester.pdf](https://www.usenix.org/system/files/usenixsecurity23-de-meulemeester.pdf)
## ARMore: Pushing Love Back Into Binaries.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#armore-pushing-love-back-into-binaries) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#armore-pushing-love-back-into-binaries)**
### 作者
* Luca Di Bartolomeo, EPFL
* Hossein Moghaddas, EPFL
* Mathias Payer, EPFL
### 摘要
> 静态重写可以在安全关键环境中以低开销实现对代码的后期更改（例如添加缓解措施、删除不必要的代码或为代码覆盖率进行插装）。目前，大部分静态重写研究都集中在x86架构上。然而，基于ARM的设备的普及和大量需要处理的个人数据（例如健康和传感器数据）要求在ARM平台上具备高效的内省和分析能力。针对aarch64上的独特挑战，我们引入了ARMore，这是首个为任意aarch64二进制文件生成可重新组装汇编的高效、稳健且不依赖任何启发式的静态二进制重写工具。ARMore引入的关键改进使得间接控制流恢复变成了一种选择而非必需。目标未覆盖时，ARMore不会导致崩溃，而只会造成额外分支的小开销。ARMore可以重写不同语言和编译器（甚至是任意手写的汇编代码），包括PIC和非PIC代码，有无符号以及包括C++和Go二进制文件的异常处理，还包括具有混合数据和文本的二进制文件。ARMore是可靠的，因为它不依赖于对输入二进制的任何假设。ARMore还具备高效性：它不采用任何昂贵的动态翻译技术，在我们的评估基准测试中开销可以忽略不计（<1%）。我们的AFL++覆盖插装过程使得对闭源aarch64二进制文件进行模糊测试的速度比现有技术（AFL-QEMU）快三倍，并且我们在闭源软件中发现了58个唯一的崩溃。ARMore是唯一一款在重写后的二进制文件能够正确通过所有SQLite3和coreutils测试用例以及97.5%的Debian软件包autopkgtest的静态重写工具。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/di-bartolomeo](https://www.usenix.org/conference/usenixsecurity23/presentation/di-bartolomeo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-di-bartolomeo.pdf](https://www.usenix.org/system/files/usenixsecurity23-di-bartolomeo.pdf)
## Secure Floating-Point Training.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#secure-floating-point-training) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#secure-floating-point-training)**
### 作者
* Deevashwer Rathee, University of California, Berkeley
* Anwesh Bhattacharya, Microsoft Research
* Divya Gupta, Microsoft Research
* Rahul Sharma, Microsoft Research
* Dawn Song, University of California, Berkeley
### 摘要
> 安全的两方计算（2PC）浮点算术在性能上有所改进，并且最近的研究在其中运行了深度学习算法，同时与常用的机器学习（ML）框架（如PyTorch）一样具有数值精确性。我们发现现有的用于浮点数的2PC库支持通用计算，但缺乏对ML训练的专门支持。因此，它们在复合操作（例如点积）的延迟和通信成本方面较高。我们提供了一种新颖的专门用于复合操作的2PC协议，并通过数值分析证明了其精确性。我们的实现BEACON的性能超过了最先进的浮点数2PC库6倍以上。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/rathee](https://www.usenix.org/conference/usenixsecurity23/presentation/rathee)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-rathee.pdf](https://www.usenix.org/system/files/usenixsecurity23-rathee.pdf)
## NeuroPots: Realtime Proactive Defense against Bit-Flip Attacks in Neural Networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#neuropots-realtime-proactive-defense-against-bit-flip-attacks-in-neural-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#neuropots-realtime-proactive-defense-against-bit-flip-attacks-in-neural-networks)**
### 作者
* Qi Liu, Lehigh University
* Jieming Yin, Nanjing University of Posts and Telecommunications
* Wujie Wen, Lehigh University
* Chengmo Yang, University of Delaware
* Shi Sha, Wilkes University
### 摘要
> 深度神经网络（DNNs）在各种安全和安全敏感应用中变得无处不在，例如自动驾驶汽车和金融系统。最近的研究揭示了位翻转攻击（BFAs）可以通过DRAM行红铺—通过在量化的模型参数中精确注入一些位翻转，攻击者可以将模型准确性降低到随机猜测，或将某些输入误分类为目标类。如果未被发现，BFAs可能会造成灾难性后果。然而，检测BFAs是具有挑战性的，因为位翻转可能发生在DNN模型中的任何权重上，从而导致大量的检测面。与试图“修补”DNN模型的漏洞的以前的工作不同，我们的工作受到“诱饵”的想法的启发。具体而言，我们提出了一种主动防御概念，名为NeuroPots，它将一些"诱饵神经元"作为精心制作的漏洞嵌入到DNN模型中，诱使攻击者在其中注入故障，从而使检测和模型恢复更加高效。我们利用NeuroPots开发了一个带有陷阱的防御框架。我们设计了一种诱饵神经元选择策略，并提出了两种将陷阱嵌入到DNN模型中的方法。此外，由于大多数注入的位翻转将集中在陷阱中，我们使用基于校验和的检测方法有效地检测其中的故障，并通过“刷新”这些有故障的陷阱来恢复模型准确性。我们的实验证明，带有陷阱的防御在各种DNN模型和数据集上实现了高检测性能，并以低成本有效地恢复受损的模型。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/liu-qi](https://www.usenix.org/conference/usenixsecurity23/presentation/liu-qi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-liu-qi.pdf](https://www.usenix.org/system/files/usenixsecurity23-liu-qi.pdf)
## FedVal: Different good or different bad in federated learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fedval-different-good-or-different-bad-in-federated-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fedval-different-good-or-different-bad-in-federated-learning)**
### 作者
* Viktor Valadi, AI Sweden
* Xinchi Qiu, University of Cambridge
* Pedro Porto Buarque de Gusmão, University of Cambridge
* Nicholas D. Lane, University of Cambridge
* Mina Alibeigi, University of Cambridge and Zenseact AB
### 摘要
> 联邦学习（FL）系统容易受到恶意行为者攻击，他们可以通过各种中毒攻击来破坏训练模型。FL还在解决群体偏见方面提出了新的挑战，例如确保不同人口群体的公平性能。传统方法用于解决此类偏见需要对数据进行集中访问，而FL系统却没有这样的权限。在本文中，我们提出了一种新颖的方法FedVal，既具有鲁棒性又具有公平性，而且不需要来自客户端的任何额外信息，这可能引起隐私问题，并因此损害FL系统的完整性。为此，我们提出了一种基于服务器端验证方法的创新分数函数，该函数评估客户端更新并确定本地训练模型之间的最佳聚合平衡。我们的研究表明，这种方法不仅可以提供坚实的防御中毒攻击的保护，还可以用于减少群体偏见，并在维持系统差分隐私能力的同时促进公平性。在不同配置下，对CIFAR-10、FEMNIST和PUMS ACSIncome数据集进行了大量实验证明了我们方法的有效性，取得了最先进的性能。我们已经证明了在80%参与客户端为恶意时的鲁棒性。此外，我们还展示了在被低估标签的准确率从32%增加到53%，在被低估特征的召回率从19%增加到50%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/valadi](https://www.usenix.org/conference/usenixsecurity23/presentation/valadi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-valadi.pdf](https://www.usenix.org/system/files/usenixsecurity23-valadi.pdf)
## Gradient Obfuscation Gives a False Sense of Security in Federated Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#gradient-obfuscation-gives-a-false-sense-of-security-in-federated-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#gradient-obfuscation-gives-a-false-sense-of-security-in-federated-learning)**
### 作者
* Kai Yue, North Carolina State University
* Richeng Jin, Zhejiang University
* Chau-Wai Wong, North Carolina State University
* Dror Baron, North Carolina State University
* Huaiyu Dai, North Carolina State University
### 摘要
> 联邦学习已被提出作为一种隐私保护的机器学习框架，使得多个客户端能够在不共享原始数据的情况下进行协作。然而，该框架在设计上并未保证客户端隐私保护。先前的工作已经表明，在联邦学习中的梯度共享策略可能容易受到数据重建攻击的影响。然而，在实践中，考虑到通信成本较高或隐私增强的要求，客户端可能不会传输原始梯度。经验研究已经证明，包括通过梯度噪声注入进行有意的混淆和通过梯度压缩进行无意的混淆在内的梯度混淆可以提供更多的隐私保护以抵御重建攻击。在这项工作中，我们提出了一个新的针对联邦学习中图像分类任务的重建攻击框架。我们展示了常用的梯度后处理程序，如梯度量化、梯度稀疏化和梯度扰动可能在联邦学习中产生虚假的安全感。与先前的研究相反，我们认为隐私增强不应被视为梯度压缩的副产品。此外，我们在所提出的框架下设计了一种新方法来在语义级别上重建图像。我们量化了语义隐私泄露并将其与传统的图像相似度得分进行了比较。我们的比较挑战了文献中的图像数据泄露评估方案。结果强调了有必要重新审视和重新设计现有联邦学习算法中客户端数据的隐私保护机制的重要性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yue](https://www.usenix.org/conference/usenixsecurity23/presentation/yue)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yue.pdf](https://www.usenix.org/system/files/usenixsecurity23-yue.pdf)
## FreeEagle: Detecting Complex Neural Trojans in Data-Free Cases.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#freeeagle-detecting-complex-neural-trojans-in-data-free-cases) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#freeeagle-detecting-complex-neural-trojans-in-data-free-cases)**
### 作者
* Chong Fu, Zhejiang University
* Xuhong Zhang, Zhejiang University
* Shouling Ji, Zhejiang University
* Ting Wang, Pennsylvania State University
* Peng Lin, Chinese Aeronautical Establishment
* Yanghe Feng, National University of Defense Technology
* Jianwei Yin, Zhejiang University
### 摘要
> 特洛伊木马攻击深度神经网络，也被称为后门攻击，是对人工智能的典型威胁。感染了木马的神经网络在处理干净的输入时表现正常。然而，如果输入包含特定触发器，感染木马模型将展现攻击者选择的异常行为。尽管存在许多后门检测方法，但其中大多数假设防御者可以访问一组干净的验证样本或带有触发器的样本，而这在一些关键的现实场景中可能不成立，例如防御者是模型共享平台的维护人员的情况。因此，在本文中，我们提出了FreeEagle，这是第一种无需访问任何干净样本或带有触发器的数据的后门检测方法，可以有效地检测复杂的对深度神经网络的后门攻击。对各种数据集和模型架构的评估结果表明，FreeEagle可以有效地抵御各种复杂的后门攻击，甚至在一些最先进的非数据无关的后门检测方法上表现更好。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/fu-chong](https://www.usenix.org/conference/usenixsecurity23/presentation/fu-chong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-fu-chong.pdf](https://www.usenix.org/system/files/usenixsecurity23-fu-chong.pdf)
## Prime Match: A Privacy-Preserving Inventory Matching System.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#prime-match-a-privacy-preserving-inventory-matching-system) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#prime-match-a-privacy-preserving-inventory-matching-system)**
### 作者
* Antigoni Polychroniadou, J.P. Morgan
* Gilad Asharov, Bar-Ilan University
* Benjamin Diamond, J.P. Morgan
* Tucker Balch, J.P. Morgan
* Hans Buehler, J.P. Morgan
* Richard Hua, J.P. Morgan
* Suwen Gu, J.P. Morgan
* Greg Gimler, J.P. Morgan
* Manuela Veloso, J.P. Morgan
### 摘要
> 库存配对是一种标准机制，用于通过买方和卖方配对交易金融股票。在金融界中，银行经常承担寻找客户之间这种匹配的任务。相关股票可以在不对任何一方客户的市场价格产生不利影响的情况下进行交易。如果找到了客户之间的匹配，银行可以以优惠的价格提供交易。如果找不到匹配，各方必须在公开市场上买入或卖出股票，这会产生额外的费用。
> 
> 目前这个过程存在一个问题，就是相关方必须向银行共享其买入或卖出特定股票的订单，以及预期数量（股数）。客户担心，如果这些信息某种方式被“泄露”，其他市场参与者会得知他们的意图，并在交易完成之前使价格不利地发生变动。
> 
> 我们提出了一种解决方案，可以在保持隐私的同时，高效地将客户的订单与市场影响降至最低。在没有匹配的情况下，不会透露任何信息。我们的主要密码学创新是一种两轮安全线性比较协议，可以在没有预处理且具有恶意安全性的情况下计算两个数量之间的最小值；这可能具有独立的利益。我们报告了我们的Prime Match系统的基准测试结果，该系统已在美国的J.P. Morgan银行投入使用。Prime Match是金融界中首个正在运行的安全多方计算解决方案。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/polychroniadou](https://www.usenix.org/conference/usenixsecurity23/presentation/polychroniadou)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-polychroniadou.pdf](https://www.usenix.org/system/files/usenixsecurity23-polychroniadou.pdf)
## Squirrel: A Scalable Secure Two-Party Computation Framework for Training Gradient Boosting Decision Tree.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#squirrel-a-scalable-secure-two-party-computation-framework-for-training-gradient-boosting-decision-tree) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#squirrel-a-scalable-secure-two-party-computation-framework-for-training-gradient-boosting-decision-tree)**
### 作者
* Wen-jie Lu, Alibaba Group
* Zhicong Huang, Alibaba Group
* Qizhi Zhang, Ant Group
* Yuchen Wang, Alibaba Group
* Cheng Hong, Ant Group
### 摘要
> 梯度提升决策树（Gradient Boosting Decision Tree，简称GBDT）及其变种在工业界得到了广泛应用，因为它们具有高效和强解释性的特点。安全多方计算使多个数据所有者在保持个人输入隐私的同时共同计算一个函数。在这项工作中，我们提出了Squirrel，这是一个安全的两方GBDT训练框架，用于纵向切分的数据集，其中两个数据所有者分别持有相同数据样本的不同特征。Squirrel对半诚实对手具有保密性，并且在训练过程中不会泄露任何敏感的中间信息。即使在广域网（WAN）环境下，Squirrel也可以扩展到包含数百万个样本的数据集。
> 
> Squirrel通过GBDT算法和先进的密码学的多个新颖协同设计实现了高性能。具体而言，1）我们提出了一种使用遗忘传输隐藏每个节点上的样本分布的新机制。2）我们提出了一种高度优化的安全梯度聚合方法，使用两种基于格的同态加密方案。我们的实证结果表明，我们的方法比现有方法快三个数量级。3）我们提出了一种在秘密共享值上评估Sigmoid函数的新协议，相比现有方法，改进了19倍到200倍。综合这些改进，Squirrel在拥有5万个样本的数据集上每棵树的成本不到6秒，超过了Pivot（VLDB 2020）28倍以上。我们还展示了Squirrel可以扩展到包含一百万个样本的数据集，例如在WAN上每棵树大约需要90秒。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lu](https://www.usenix.org/conference/usenixsecurity23/presentation/lu)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lu.pdf](https://www.usenix.org/system/files/usenixsecurity23-lu.pdf)
## Eos: Efficient Private Delegation of zkSNARK Provers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#eos-efficient-private-delegation-of-zksnark-provers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#eos-efficient-private-delegation-of-zksnark-provers)**
### 作者
* Aless, UC Berkeley and EPFL
* ro Chiesa, UC Berkeley and EPFL
* Ryan Lehmkuhl, MIT
* Pratyush Mishra, Aleo and University of Pennsylvania
* Yinuo Zhang, UC Berkeley
### 摘要
> 简洁的零知识证明（即zkSNARKs）是强大的密码工具，使证明者能够说服验证者给出一个陈述是真实的，而不泄露任何额外的信息。其理想的隐私属性引起了学术界和工业界的广泛关注。
> 
> 遗憾的是，现有的生成zkSNARKs的系统成本较高，这限制了这些证明可以应用的领域。其中一种方法是利用强大的云服务器来生成证明。然而，目前的技术（如DIZK）会向云计算机泄露秘密信息，从而损害了zkSNARKs的许多应用，例如去中心化的私人货币和计算系统。
> 
> 在这项研究中，我们设计并实现了具有通用设置的保护隐私的委托协议，用于zkSNARKs。我们的协议使得证明者能够将证明生成委托给一组工作者，如果至少一个工作者不与其他工作者共谋，则不会向任何工作者泄露私人信息。我们的协议在不依赖沉重的密码工具的情况下，实现了对恶意工作者的安全保护。
> 
> 我们在各种计算和带宽设置下实现和评估了我们的委托协议，并证明了我们的协议实际上是高效的。与本地证明相比，使用我们的协议从最近的智能手机委托证明生成可以：（a）将端到端延迟减少多达26倍，（b）将委托方的主动计算时间减少多达1447倍，（c）实现证明达到256倍的更大实例。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chiesa](https://www.usenix.org/conference/usenixsecurity23/presentation/chiesa)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chiesa.pdf](https://www.usenix.org/system/files/usenixsecurity23-chiesa.pdf)
## Machine-checking Multi-Round Proofs of Shuffle: Terelius-Wikstrom and Bayer-Groth.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#machine-checking-multi-round-proofs-of-shuffle-terelius-wikstrom-and-bayer-groth) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#machine-checking-multi-round-proofs-of-shuffle-terelius-wikstrom-and-bayer-groth)**
### 作者
* Thomas Haines, Australian National University
* Rajeev Gore, Polish Academy of Science
* Mukesh Tiwari, University of Cambridge
### 摘要
> 在电子投票中，洗牌算法的使用方式与纸质系统中实体选票箱的使用方式非常相似：（加密）选票被输入到洗牌算法中，（加密）选票以随机顺序输出，从而打破了选民身份和选票之间的关联。为了确保没有添加、遗漏或篡改选票，使用了称为洗牌证明的零知识证明来提供可以公开验证的记录，证明输出是输入的重新加密置换。实际中最突出的洗牌证明是Terelius和Wikstrom（TW）以及Bayer和Groth（BG）提出的证明。TW更简单，而BG则更高效，无论是在带宽还是计算方面。简单（TW）洗牌证明的安全性已经通过机器检验，但一些知名供应商坚持使用更复杂的BG洗牌证明。在这里，我们使用Coq证明助手对Bayer-Groth洗牌证明的安全性进行机器检验。然后，我们提取出需要检查Bayer-Groth实现产生的记录的验证器（软件），并使用它来检查瑞士邮政正在开发用于国家选举的电子投票系统产生的记录。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/haines](https://www.usenix.org/conference/usenixsecurity23/presentation/haines)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-haines.pdf](https://www.usenix.org/system/files/usenixsecurity23-haines.pdf)
## TAP: Transparent and Privacy-Preserving Data Services.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#tap-transparent-and-privacy-preserving-data-services) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#tap-transparent-and-privacy-preserving-data-services)**
### 作者
* Daniel Reijsbergen, Singapore University of Technology and Design
* Aung Maw, Singapore University of Technology and Design
* Zheng Yang, Southwest University
* Tien Tuan Anh Dinh, Singapore University of Technology and Design
* Jianying Zhou, Singapore University of Technology and Design
### 摘要
> 当今用户对处理其数据的服务期望更多的安全性。除了传统的数据隐私和完整性要求外，他们还期望透明性，即服务对数据的处理可以由用户和可信审核员验证。我们的目标是构建一个多用户系统，为大量操作提供数据隐私、完整性和透明性，并实现实际性能。
> 
> 为此，我们首先确定了现有使用认证数据结构的方法的局限性。我们发现它们分为两类：1）那些将每个用户的数据隐藏起来，但具有有限的可验证操作范围（例如CONIKS、Merkle2和Proofs of Liabilities）；2）那些支持广泛的可验证操作，但使所有数据都公开可见（例如IntegriDB和FalconDB）。然后，我们介绍了TAP来解决上述限制。TAP的关键组件是一种支持高效结果验证的新颖树状数据结构，并依赖于使用零知识范围证明的独立审核，以表明树形结构的构建正确且不泄露用户数据。TAP支持广泛的可验证操作，包括分位数和样本标准差。我们对TAP进行了全面评估，并将其与两种最先进的基准系统IntegriDB和Merkle2进行了比较，表明该系统在大规模情况下是实用的。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/reijsbergen](https://www.usenix.org/conference/usenixsecurity23/presentation/reijsbergen)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-reijsbergen.pdf](https://www.usenix.org/system/files/usenixsecurity23-reijsbergen.pdf)
## Trojan Source: Invisible Vulnerabilities.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#trojan-source-invisible-vulnerabilities) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#trojan-source-invisible-vulnerabilities)**
### 作者
* Nicholas Boucher, University of Cambridge
* Ross Anderson, University of Cambridge and University of Edinburgh
### 摘要
> 我们提出了一种新型攻击，即恶意编码源代码，使其在编译器和人眼中呈现出不同的样子。这种攻击利用了Unicode等文本编码标准的细微差别，使得源代码的标记逻辑上按照不同的顺序编码，从而导致人类代码审查员无法直接察觉到的漏洞。我们称之为“木马源码”攻击，它们对第一方软件和整个行业的供应链都构成了直接威胁。我们展示了C、C++、C#、JavaScript、Java、Rust、Go、Python、SQL、Bash、Assembly和Solidity中的“木马源码”攻击的实际示例。我们提出了明确的编译器级防御方法，并描述了可以在编辑器、代码存储库和构建管道中部署的其他缓解措施，同时升级编译器以阻止这种攻击。我们对这些漏洞进行了行业范围的协调披露；由于它们影响大多数编译器、编辑器和代码存储库，该过程展示了不同公司、开源社区和其他利益相关者如何应对漏洞披露。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/boucher](https://www.usenix.org/conference/usenixsecurity23/presentation/boucher)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-boucher.pdf](https://www.usenix.org/system/files/usenixsecurity23-boucher.pdf)
## Cheesecloth: Zero-Knowledge Proofs of Real World Vulnerabilities.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#cheesecloth-zero-knowledge-proofs-of-real-world-vulnerabilities) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#cheesecloth-zero-knowledge-proofs-of-real-world-vulnerabilities)**
### 作者
* Santiago Cuéllar, Galois, Inc.
* Bill Harris, Galois, Inc.
* James Parker, Galois, Inc.
* Stuart Pernsteiner, Galois, Inc.
* Eran Tromer, Columbia University
### 摘要
> 目前，当安全分析师发现关键软件系统中的漏洞时，他们必须面临一个棘手的困境：立即向公众披露漏洞可能会对系统的用户造成伤害；而仅向软件供应商披露漏洞则让供应商无视或将安全风险降低，对不知情的用户造成损害。
> 
> 最近一系列有说服力的研究旨在通过使用零知识（ZK）协议来解决这个问题，让分析师能够证明他们知道程序中的漏洞，而不泄露漏洞的细节或利用它的输入。从原理上讲，这可以通过通用的ZK技术来实现。实际上，迄今为止，ZK漏洞证明在范围和表达能力上受到限制，这是由于生成能够模拟大规模实际软件并直接构建违反属性的证明语句所面临的挑战。
> 
> 本文介绍了Cheesecloth，一种新颖的证明语句编译器，它通过对公共输入的程序进行准确但积极的预处理，有选择地揭示有关执行控制段的信息，并利用一种新颖的存储标签方案形式化信息泄露。通过在（先前版本的）关键软件中生成ZK证明，包括OpenSSL中的Heartbleed信息泄露和FFmpeg图形框架中的内存漏洞，展示了Cheesecloth的实用性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cuellar](https://www.usenix.org/conference/usenixsecurity23/presentation/cuellar)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cuellar.pdf](https://www.usenix.org/system/files/usenixsecurity23-cuellar.pdf)
## V1SCAN: Discovering 1-day Vulnerabilities in Reused C/C++ Open-source Software Components Using Code Classification Techniques.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#v1scan-discovering-1-day-vulnerabilities-in-reused-c-c-open-source-software-components-using-code-classification-techniques) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#v1scan-discovering-1-day-vulnerabilities-in-reused-c-c-open-source-software-components-using-code-classification-techniques)**
### 作者
* Seunghoon Woo, Korea University
* Eunjin Choi, Korea University
* Heejo Lee, Korea University
* Hakjoo Oh, Korea University
### 摘要
> 我们提出了V1SCAN，一种能够有效发现重复使用的C/C++开源软件(OSS)组件的1天漏洞的方法。重复使用第三方OSS有很多好处，但也可能由于其传播的漏洞而使整个软件面临风险。为了缓解这个问题，已经提出了几种检测传播漏洞的技术，可以分为基于版本和代码的方法。然而，当使用修改后的代码重复使用OSS项目时，目前的技术往往产生很多误报或漏报。
> 
> 在本文中，我们展示了通过改进基于版本和代码的方法并使它们协同工作可以解决这些限制。通过对OSS组件中的重复代码进行分类，V1SCAN只考虑目标程序中包含的漏洞，并过滤掉未使用的易受攻击的代码，从而减少基于版本的方法产生的误报。V1SCAN通过对易受攻击代码进行分类，然后在各个代码位置检测出通过代码修改传播的漏洞，从而提高了基于代码的方法的覆盖范围。在GitHub上流行的C/C++软件的评估结果显示，V1SCAN发现的漏洞数量比现有的漏洞检测方法多50%。此外，V1SCAN将现有基于版本和代码的方法的误报率从71%降低到4%，漏报率从33%降低到7%。借助V1SCAN，开发人员可以高精度地检测到传播的漏洞，保持软件供应链的安全。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/woo](https://www.usenix.org/conference/usenixsecurity23/presentation/woo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-woo.pdf](https://www.usenix.org/system/files/usenixsecurity23-woo.pdf)
## VulChecker: Graph-based Vulnerability Localization in Source Code.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#vulchecker-graph-based-vulnerability-localization-in-source-code) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#vulchecker-graph-based-vulnerability-localization-in-source-code)**
### 作者
* Yisroel Mirsky, Ben-Gurion University of the Negev
* George Macon, Georgia Tech Research Institute
* Michael Brown, Georgia Institute of Technology
* Carter Yagemann, Ohio State University
* Matthew Pruett, Georgia Institute of Technology
* Evan Downing, Georgia Institute of Technology
* Sukarno Mertoguno, Georgia Institute of Technology
* Wenke Lee, Georgia Institute of Technology
### 摘要
> 在软件开发中，尽早发现项目中的漏洞至关重要。尽管深度学习在这个任务中表现出了希望，但目前最先进的方法无法对漏洞发生的具体代码行进行分类和识别。开发者需要在整个函数甚至更大的代码区域中搜索任意错误。
> 
> 在本文中，我们提出了VulChecker：一种准确定位源代码中漏洞（精确到具体指令）并分类其类型（CWE）的工具。为了实现这一目标，我们提出了一种新的程序表示、程序切片策略，并使用了消息传递图神经网络来利用代码的语义，并提高漏洞根本原因和表现点之间的联系。
> 
> 我们还提出了一种新颖的数据增强策略，用于以较低成本创建在野漏洞检测的强大数据集，利用在线免费合成样本。通过这种训练策略，VulChecker能够在19个野外项目中识别出24个CVE（其中包括2019年和2020年的10个），与商业工具相比几乎没有误报。VulChecker还发现了一个可利用的零日漏洞，并已向开发者报告以负责任的披露。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/mirsky](https://www.usenix.org/conference/usenixsecurity23/presentation/mirsky)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-mirsky.pdf](https://www.usenix.org/system/files/usenixsecurity23-mirsky.pdf)
## DISTDET: A Cost-Effective Distributed Cyber Threat Detection System.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#distdet-a-cost-effective-distributed-cyber-threat-detection-system) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#distdet-a-cost-effective-distributed-cyber-threat-detection-system)**
### 作者
* Feng Dong, School of Cyber Science and Engineering, Huazhong University of Science and Technology / Sangfor Technologies Inc.
* Liu Wang, Beijing University of Posts and Telecommunications
* Xu Nie, Beijing University of Posts and Telecommunications
* Fei Shao, Case Western Reserve University
* Haoyu Wang, School of Cyber Science and Engineering, Huazhong University of Science and Technology
* Ding Li, Key Laboratory of High-Confidence Software Technologies (MOE), School of Computer Science, Peking University
* Xiapu Luo, The Hong Kong Polytechnic University
* Xusheng Xiao, Arizona State University
### 摘要
> 构建考虑软件行为之间因果关系的溯源图（provenance graph）能够更好地提供网络攻击的上下文信息，尤其是对于高级攻击，如高级持续性威胁（Advanced Persistent Threat，APT）攻击。尽管利用溯源图进行攻击检测具有很多潜力，但现有方法存在两个根本性限制。首先，现有方法采用集中式检测架构，将所有系统审计日志发送到服务器进行处理，导致数据传输、数据存储和计算成本不可接受。其次，它们采用的是基于规则的技术，无法检测未知威胁，或者采用的是异常检测技术，会产生大量的虚警，无法在APT检测中实现精确度和召回率的平衡。为了解决这些根本性挑战，我们提出了DISTDET，一种分布式检测系统，通过以下方式检测APT攻击：（1）基于在客户端建立的主机模型执行轻量级检测，（2）基于警报属性的语义过滤虚警，（3）导出全局模型以补充主机模型的局部偏差。我们在一个大规模工业环境（1,130个主机，14天，约1.6亿个事件）和DARPA TC数据集上进行的实验表明，DISTDET在检测攻击方面与最先进的技术一样有效，同时将网络带宽从11.28Mb/s大幅降低至17.08Kb/s（减少了676.5倍），内存使用量从364MB减少到5.523MB（减少了66倍），存储量从1.47GB减少到130.34MB（减少了11.6倍）。截至撰写本文时，DISTDET已经在50多个行业客户处部署了6个月以上，共涵盖2.2万个主机，并且检测出了900多个真实攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/dong-feng](https://www.usenix.org/conference/usenixsecurity23/presentation/dong-feng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-dong-feng.pdf](https://www.usenix.org/system/files/usenixsecurity23-dong-feng.pdf)
## Automated Security Analysis of Exposure Notification Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#automated-security-analysis-of-exposure-notification-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#automated-security-analysis-of-exposure-notification-systems)**
### 作者
* Kevin Morio, CISPA Helmholtz Center for Information Security
* Ilkan Esiyok, CISPA Helmholtz Center for Information Security
* Dennis Jackson, Mozilla
* Robert Künnemann, CISPA Helmholtz Center for Information Security
### 摘要
> 我们提出了对两种最广泛部署的接触追踪系统ROBERT和Google与Apple接触追踪（GAEN）框架的安全性进行的首个正式分析和比较。
> 
> ROBERT是集中式接触追踪方法中最受欢迎的方案，其中风险评分由中央服务器计算。相反，GAEN采用分散式方法，用户的手机计算风险。集中式和分散式系统的相对优劣已被证明是一个有争议的问题。大多数先前的分析都集中在这些系统的隐私影响上，我们的研究是第一个正式分析来评估已部署系统的安全性——即假风险警报的缺失。
> 
> 我们模拟了ROBERT的法国部署和GAEN变体中应用最广泛的德国Corona-Warn-App。我们确定了这些系统防止误警报的准确条件。我们确定了对手如何通过网络和蓝牙嗅探、数据库泄漏以及手机、后端系统和卫生部门的妥协来破坏系统。我们还调查了DP3T协议的原始规范的安全性，以识别提议方案与最终部署之间的差距。
> 
> 我们发现了总共27种攻击模式，包括许多区分集中式和分散式方法的攻击，以及攻击授权过程的所有三个协议的差异。我们的研究结果表明，ROBERT的集中式设计更容易受到富有机会和资源充足的攻击者的攻击，这些攻击者试图进行大规模通知攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/morio](https://www.usenix.org/conference/usenixsecurity23/presentation/morio)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-morio.pdf](https://www.usenix.org/system/files/usenixsecurity23-morio.pdf)
## Formal Analysis of SPDM: Security Protocol and Data Model version 1.2.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#formal-analysis-of-spdm-security-protocol-and-data-model-version-1-2) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#formal-analysis-of-spdm-security-protocol-and-data-model-version-1-2)**
### 作者
* Cas Cremers, CISPA Helmholtz Center for Information Security
* Alex, CISPA Helmholtz Center for Information Security
* er Dax, CISPA Helmholtz Center for Information Security
* Aurora Naska, CISPA Helmholtz Center for Information Security
### 摘要
> DMTF是一个由IT基础设施行业的主要参与者组成的标准组织，包括AMD、阿里巴巴、Broadcom、思科、戴尔、谷歌、华为、IBM、英特尔、联想和NVIDIA，旨在实现互操作性，例如云计算、虚拟化、网络、服务器和存储等方面。它目前正在标准化一种名为SPDM的安全协议，旨在保护通信安全并实现设备认证，特别是明确兼容通信硬件组件。
> 
> SPDM协议从IETF的TLS 1.3继承了要求和设计思想。然而，它的状态机和记录处理方式有着明显的差异和更复杂的特点。虽然当前版本的SPDM的架构、规范和开源库都是公开可用的，但它们都没有进行任何重要的安全分析。
> 
> 在本研究中，我们开发了SPDM协议版本1.2.1的三种模式的第一个形式化模型，并对它们的主要安全性质进行了形式化分析。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cremers-spdm](https://www.usenix.org/conference/usenixsecurity23/presentation/cremers-spdm)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cremers-spdm.pdf](https://www.usenix.org/system/files/usenixsecurity23-cremers-spdm.pdf)
## One Size Does Not Fit All: Uncovering and Exploiting Cross Platform Discrepant APIs in WeChat.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#one-size-does-not-fit-all-uncovering-and-exploiting-cross-platform-discrepant-apis-in-wechat) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#one-size-does-not-fit-all-uncovering-and-exploiting-cross-platform-discrepant-apis-in-wechat)**
### 作者
* Chao Wang, The Ohio State University
* Yue Zhang, The Ohio State University
* Zhiqiang Lin, The Ohio State University
### 摘要
> 过去几年，移动超级应用程序经历了蓬勃发展，这些应用程序通过在内部执行的迷你应用程序提供多项服务，如电子商务、电子学习和电子政务。尽管最初是为移动平台设计的，例如微信等超级应用程序也可以在Windows等桌面平台上使用。然而，在桌面平台上运行时，微信的某些行为存在差异，这为攻击（例如平台指纹识别攻击）提供了机会。因此，本文旨在系统地识别微信在不同平台上的API潜在差异，并演示这些差异如何被远程攻击者或本地恶意迷你应用程序利用。为此，我们提出了一个名为APIDIFF的自动工具，用于为每个API生成测试用例并识别执行差异。通过APIDIFF，我们已经确定了三组不一致的API，展示了存在的（109个）、权限（17个）和输出（22个）方面的差异以及它们的具体利用示例。我们已经负责任地向腾讯披露了这些漏洞，并因此收到了漏洞赏金。这些漏洞被评为高风险漏洞，其中一些已经修补。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-chao](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-chao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-chao.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-chao.pdf)
## The Most Dangerous Codec in the World: Finding and Exploiting Vulnerabilities in H.264 Decoders.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-most-dangerous-codec-in-the-world-finding-and-exploiting-vulnerabilities-in-h-264-decoders) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#the-most-dangerous-codec-in-the-world-finding-and-exploiting-vulnerabilities-in-h-264-decoders)**
### 作者
* Willy R. Vasquez, The University of Texas at Austin
* Stephen Checkoway, Oberlin College
* Hovav Shacham, The University of Texas at Austin
### 摘要
> 现代视频编码标准，如H.264，是隐藏复杂性的奇迹。然而，隐藏的复杂性也带来了隐藏的安全风险。在实践中解码视频意味着与专用硬件加速器以及用于驱动它们的专有和特权软件组件进行交互。视频解码器生态系统是晦涩、不透明、多样化、高度特权化、几乎未经测试且高度暴露的，这是一种危险的组合。
> 
> 我们引入并评估了H26FORGE，一种用于分析、生成和操作语法正确但语义规范不符的视频文件的领域特定基础设施。使用H26FORGE，我们发现了视频解码器生态系统中的深层不安全性，包括iOS中的内核内存损坏漏洞，Windows上的Firefox和VLC中的内存损坏漏洞，以及多个Android设备中的视频加速器和应用处理器内核内存漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/vasquez](https://www.usenix.org/conference/usenixsecurity23/presentation/vasquez)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-vasquez_1.pdf](https://www.usenix.org/system/files/usenixsecurity23-vasquez_1.pdf)
## Are You Spying on Me? Large-Scale Analysis on IoT Data Exposure through Companion Apps.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#are-you-spying-on-me-large-scale-analysis-on-iot-data-exposure-through-companion-apps) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#are-you-spying-on-me-large-scale-analysis-on-iot-data-exposure-through-companion-apps)**
### 作者
* Yuhong Nan, Sun Yat-sen University
* Xueqiang Wang, University of Central Florida
* Luyi Xing, Indiana University Bloomington
* Xiaojing Liao, Indiana University Bloomington
* Ruoyu Wu, Purdue University
* Jianliang Wu, Purdue University
* Yifan Zhang, Indiana University Bloomington
* XiaoFeng Wang, Indiana University Bloomington
### 摘要
> 近年来的研究突出了隐私作为物联网设备用户的首要关注问题。然而，由于在分析数千个设备方面存在挑战，对于当今物联网设备上实际存在的未经授权数据泄漏以及此类泄漏的隐私影响的研究较少。为了弥补这一空白，我们利用观察到市场上大多数物联网设备今天使用其伴生移动应用程序作为中间介质来处理、标记和传输其收集的数据。因此，这些应用程序所携带的语义信息可以自动恢复和分析，以跟踪物联网数据的收集和共享。
> 
> 在本文中，我们报告了第一项此类研究，基于一个名为IoTProfiler的新框架，它静态地分析了大量伴生应用程序，以推断和跟踪其物联网设备所收集的数据。我们的方法利用机器学习来检测伴生应用程序中处理物联网数据的代码片段，并从片段中恢复数据的语义，以评估其是否已正确地告知用户其曝光情况。通过在6,208个伴生应用程序上运行IoTProfiler，我们的研究发现了1,973个未经适当披露而暴露用户数据的应用程序，涵盖了来自至少1,559个不同供应商的物联网设备。我们的发现包括极其敏感的信息，如健康状况和家庭地址，并且发现数据被未经授权地与第三方分享的普遍性，包括来自不同国家的第三方。我们的研究结果强调了迫切需要规范当今物联网行业以保护用户隐私。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/nan](https://www.usenix.org/conference/usenixsecurity23/presentation/nan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-nan.pdf](https://www.usenix.org/system/files/usenixsecurity23-nan.pdf)
## Strategies and Vulnerabilities of Participants in Venezuelan Influence Operations.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#strategies-and-vulnerabilities-of-participants-in-venezuelan-influence-operations) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#strategies-and-vulnerabilities-of-participants-in-venezuelan-influence-operations)**
### 作者
* Ruben Recabarren, Florida International University
* Bogdan Carbunar, Florida International University
* Nestor Hern, Florida International University
* ez, Florida International University
* Ashfaq Ali Shafin, Florida International University
### 摘要
> 对在线影响力行动的研究侧重于对社交网络的法证分析，或对托尔斯和机器人账户的公开可得数据集进行分析，以了解协调传播和放大虚假信息的行动。然而，我们对参与影响力行动的人类参与者的经历和挑战知之甚少。为了理解他们的动机、能力和推广内容的策略以及规避检测，我们对19位参与委内瑞拉网络形象的影响力行动参与者进行了半结构化访谈。为了验证他们的部分回答，我们进行了一项量化调查，使用了他们控制的Twitter账户在将近四个月的时间里收集的数据。
> 
> 我们发现了多种参与者，包括支持政府和反对派的人员、行动者和草根活动成员，以及马甲账户所有者和真实用户。尽管支持政府和反对派的参与者具有相似的目标和推广策略，但他们在动机、组织、对手和规避检测策略上存在差异。我们报告了“家园”框架，这是一个政府平台，供行动者记录活动并获得回报。我们系统化地总结了参与者推广政治内容以及规避和恢复Twitter处罚的策略。我们确定了与这些策略相关的漏洞点，并提出了更细致的对抗影响力行动的防御策略。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/recabarren](https://www.usenix.org/conference/usenixsecurity23/presentation/recabarren)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-recabarren.pdf](https://www.usenix.org/system/files/usenixsecurity23-recabarren.pdf)
## TRIDENT: Towards Detecting and Mitigating Web-based Social Engineering Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#trident-towards-detecting-and-mitigating-web-based-social-engineering-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#trident-towards-detecting-and-mitigating-web-based-social-engineering-attacks)**
### 作者
* Zheng Yang, Georgia Institute of Technology
* Joey Allen, Georgia Institute of Technology
* Matthew L, Georgia Institute of Technology
* en, Georgia Institute of Technology
* Roberto Perdisci, Georgia Tech and University of Georgia
* Wenke Lee, Georgia Institute of Technology
### 摘要
> 作为网络安全中最薄弱的环节，人类已成为攻击者的主要目标，他们利用复杂的基于网络的社交工程技术。这些攻击者利用低级广告网络将社交工程组件注入网页，诱使用户进入攻击者控制的网站进行进一步利用。这些利用主要是Web-based Social Engineering Attacks (WSEAs)，如奖励和彩票欺诈。虽然研究人员提出了一些系统和工具来检测一些WSEAs，但这些方法只针对特定的骗术技巧（即技术支持欺诈、调查欺诈），没有被设计成对广泛的攻击技术有效。随着任何用户可能遇到的WSEAs的多样性和复杂性不断增加，迫切需要一种新的、更有效的浏览器内系统来准确检测通用的WSEAs。
> 
> 为了解决这一需求，我们提出了TRIDENT，一种新的防御系统，旨在实时检测和阻止通用的WSEAs。TRIDENT通过检测低级广告网络分发的通用网络社交工程攻击的入口点，即社交工程广告(SE-ads)，来阻止WSEAs。我们的广泛评估显示，TRIDENT可以以92.63%的准确率和2.57%的误报率检测到SE-ads，并且对逃避尝试具有强大的鲁棒性。我们还对TRIDENT与最先进的广告拦截工具进行了评估。结果显示，TRIDENT的准确率比这些工具提高了10%。此外，TRIDENT作为一种中位数的运行时间开销，只产生2.13%的开销，足够小以在实际应用中部署。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yang-zheng](https://www.usenix.org/conference/usenixsecurity23/presentation/yang-zheng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yang-zheng.pdf](https://www.usenix.org/system/files/usenixsecurity23-yang-zheng.pdf)
## Fact-Saboteurs: A Taxonomy of Evidence Manipulation Attacks against Fact-Verification Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fact-saboteurs-a-taxonomy-of-evidence-manipulation-attacks-against-fact-verification-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fact-saboteurs-a-taxonomy-of-evidence-manipulation-attacks-against-fact-verification-systems)**
### 作者
* Sahar Abdelnabi, CISPA Helmholtz Center for Information Security
* Mario Fritz, CISPA Helmholtz Center for Information Security
### 摘要
> 误导和虚假信息是对我们安全和安全的重大全球威胁。为了应对网络虚假信息的规模，研究人员一直在努力自动化事实检查，通过检索和验证相关证据。然而，尽管取得了许多进展，对这些系统可能面临的攻击向量的全面评估仍然缺乏。特别是，自动化事实验证过程可能容易受到正是试图应对的虚假信息宣传活动的攻击。在这项工作中，我们假设存在一个对在线证据进行自动篡改以破坏事实检查模型的对手，通过伪装相关证据或植入误导性证据。我们首先提出了一个探索性分类法，涵盖了这两个目标和不同的威胁模型维度。在这一基础上，我们设计并提出了几种潜在的攻击方法。我们表明，在证据中可以微妙地修改与主张相关的片段，并生成多样化和与主张一致的证据。因此，在分类法的不同排列下，我们极大地降低了事实检查的性能。这些攻击也对主张的事后修改具有鲁棒性。我们的分析进一步暗示了模型在面对相互矛盾的证据时可能存在的推理限制。我们强调这些攻击可能对这些模型的可检查和人机结合的使用场景产生有害影响，并总结了有关未来防御的挑战和方向的讨论。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/abdelnabi](https://www.usenix.org/conference/usenixsecurity23/presentation/abdelnabi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-abdelnabi.pdf](https://www.usenix.org/system/files/usenixsecurity23-abdelnabi.pdf)
## Reversing, Breaking, and Fixing the French Legislative Election E-Voting Protocol.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#reversing-breaking-and-fixing-the-french-legislative-election-e-voting-protocol) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#reversing-breaking-and-fixing-the-french-legislative-election-e-voting-protocol)**
### 作者
* Alex, Université de Lorraine, Inria, CNRS, France
* re Debant, Université de Lorraine, Inria, CNRS, France
* Lucca Hirschi, Université de Lorraine, Inria, CNRS, France
### 摘要
> 我们对2022年法国海外公民议会选举中使用的电子投票协议进行了安全分析。由于缺乏系统和威胁模型规范，我们通过研究法国法律框架并逆向工程选民可以访问的代码库来构建和贡献了这些规范。我们的分析表明，该协议存在两个设计层面和实施层面的漏洞。我们展示了这些漏洞如何允许标准投票服务器攻击者以及更厉害的信道攻击者通过5种攻击变体来破坏选举的完整性和选票隐私。我们提出并讨论了5种修复措施来防止这些攻击。我们的规范、攻击和修复方法在负责披露的相关利益相关者的认可下得到实施，以防止未来选举中出现我们的攻击。除了这个协议，我们从这个富有教益的经验中得出了一般性的教训、建议和悬而未决的问题，这个经验让电子投票协议与大规模政治选举的现实约束相结合。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/debant](https://www.usenix.org/conference/usenixsecurity23/presentation/debant)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-debant.pdf](https://www.usenix.org/system/files/usenixsecurity23-debant.pdf)
## PROVIDENCE: a Flexible Round-by-Round Risk-Limiting Audit.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#providence-a-flexible-round-by-round-risk-limiting-audit) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#providence-a-flexible-round-by-round-risk-limiting-audit)**
### 作者
* Oliver Broadrick, The George Washington University
* Poorvi Vora, The George Washington University
* Filip Zagórski, University of Wroclaw and Votifica
### 摘要
> 一种风险限制审计（RLA）是一种具有严格错误保证的统计选举计票审计。我们介绍了一种名为PROVIDENCE的抽样投票RLA，它具有MINERVA的高效性和BRAVO的灵活性，并证明了在对手可以根据先前样本知识选择后续轮次大小的情况下，它是风险限制的。我们将审计工作负载的度量描述为轮次数量，接触过的选区数量和抽取的选票数量的函数，并量化了在轮次过小时获取误导性审计样本的问题，展示了对审计计划的约束的重要性。我们描述了使用这些度量来计划审计轮次安排的方法，并呈现了PROVIDENCE优越性的模拟结果。
> 
> 我们描述了罗德岛选举委员会在2021年选举的计票审计中使用PROVIDENCE的情况。我们在开源的R2B2库中实施了PROVIDENCE，并将其作为选举计票审计软件Arlo中最常用的选项进行集成。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/broadrick](https://www.usenix.org/conference/usenixsecurity23/presentation/broadrick)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-broadrick.pdf](https://www.usenix.org/system/files/usenixsecurity23-broadrick.pdf)
## NVLeak: Off-Chip Side-Channel Attacks via Non-Volatile Memory Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#nvleak-off-chip-side-channel-attacks-via-non-volatile-memory-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#nvleak-off-chip-side-channel-attacks-via-non-volatile-memory-systems)**
### 作者
* Zixuan Wang, UC San Diego
* Mohammadkazem Taram, Purdue University and UC San Diego
* Daniel Moghimi, UT Austin and UC San Diego
* Steven Swanson, UC San Diego
* Dean Tullsen, UC San Diego
* Jishen Zhao, UC San Diego
### 摘要
> 我们对非易失性RAM（NVRAM）DIMM上的微架构侧信道攻击和防御进行了研究。在这项研究中，我们首先对英特尔Optane DIMM实施的NVRAM进行了逆向工程，并揭示了其以前未记录的微架构细节：DIMM上的缓存结构（NVCache）和磨损平衡策略。基于这些发现，我们首先开发了跨核心和跨虚拟机的隐蔽通道，以建立这些共享硬件资源的通道容量。然后，我们在NVLeak的框架下设计了基于NVCache的侧信道。我们将NVLeak应用于一系列攻击案例研究，包括破坏基于NVRAM支持的数据库和键值存储的隐私，并在使用NVRAM作为易失性运行时内存时窥探代码页的执行路径。我们的结果表明，利用NVRAM进行的侧信道攻击是实际可行的，并且能够打败先前仅关注芯片硬件资源的防御措施。为了弥补这个防御空白，我们基于缓存分区开发了系统级缓解措施，以防止NVCache的侧信道泄漏。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-zixuan](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-zixuan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-zixuan.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-zixuan.pdf)
## Cipherfix: Mitigating Ciphertext Side-Channel Attacks in Software.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#cipherfix-mitigating-ciphertext-side-channel-attacks-in-software) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#cipherfix-mitigating-ciphertext-side-channel-attacks-in-software)**
### 作者
* Jan Wichelmann, University of Lübeck
* Anna Pätschke, University of Lübeck
* Luca Wilke, University of Lübeck
* Thomas Eisenbarth, University of Lübeck
### 摘要
> 可信执行环境（TEE）提供了一个在云中运行工作负载的环境，而无需信任云服务提供商，通过提供额外的硬件辅助安全保证。然而，作为对抗系统级攻击者尝试读取TEE内容和物理离片攻击者的关键机制，主存储器加密是不足的。最近的Cipherleaks攻击通过分析由确定性内存加密引起的密文模式揭示TEE受保护实现中的秘密数据。所谓的密文侧信道底层漏洞既不受常量时间代码等最新对策的保护，也不受硬件修复的保护。
> 
> 因此，在本文中，我们提出了一种基于软件的即插即用解决方案，可以强化现有二进制文件，使其可以在易受密文侧信道攻击的TEE下安全执行，而无需重新编译。我们将染色追踪与静态和动态二进制仪器合并，以找到敏感的内存位置，并通过在写入内存之前掩盖秘密数据来减轻泄漏。通过这种方式，尽管内存加密仍然是确定性的，我们消除了加密内存中任何与密钥相关的模式。我们展示了我们的概念验证实现可以以合理的开销保护各种常量时间实现免受密文侧信道攻击的影响。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wichelmann](https://www.usenix.org/conference/usenixsecurity23/presentation/wichelmann)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wichelmann.pdf](https://www.usenix.org/system/files/usenixsecurity23-wichelmann.pdf)
## Side-Channel Attacks on Optane Persistent Memory.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#side-channel-attacks-on-optane-persistent-memory) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#side-channel-attacks-on-optane-persistent-memory)**
### 作者
* Sihang Liu, University of Virginia
* Suraaj Kanniwadi, Cornell University
* Martin Schwarzl, Graz University of Technology
* Andreas Kogler, Graz University of Technology
* Daniel Gruss, Graz University of Technology
* Samira Khan, University of Virginia
### 摘要
> 云环境的技术不断发展，包括新型存储技术的发展，比如持久性内存。新发布的英特尔Optane持久内存为数据中心的存储级应用程序提供高性能、持久性和字节寻址访问。虽然Optane的直接数据管理速度快且高效，但其是否存在安全隐患尚不清楚。这是一个问题，因为云租户在同一硬件上物理共享。
> 
> 在本文中，我们首次提出了对英特尔Optane持久内存进行侧信道安全分析。我们对Optane内部缓存层次结构、缓存大小、关联性、替换策略和磨损平衡机制进行了逆向工程。基于这种逆向工程，我们构建了四个新的攻击方法来攻击Optane的内部组件。然后，我们通过这些攻击方法进行了四个实例研究。首先，我们基于Optane的内部缓存提出了本地隐蔽信道。其次，我们通过Intel的Optane优化键值存储pmemkv演示了一种针对远程用户的按键侧信道攻击。第三，我们通过pmemkv研究了一种完全远程的隐蔽信道。第四，我们通过pmemkv提出了我们的Note Board攻击，使两个参与方能够在较长时间间隔甚至服务器的断电周期中进行隐蔽消息的存储和交换。最后，我们讨论了对我们攻击的缓解措施。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/liu-sihang](https://www.usenix.org/conference/usenixsecurity23/presentation/liu-sihang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-liu-sihang.pdf](https://www.usenix.org/system/files/usenixsecurity23-liu-sihang.pdf)
## Pspray: Timing Side-Channel based Linux Kernel Heap Exploitation Technique.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#pspray-timing-side-channel-based-linux-kernel-heap-exploitation-technique) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#pspray-timing-side-channel-based-linux-kernel-heap-exploitation-technique)**
### 作者
* Yoochan Lee, Seoul National University
* Jinhan Kwak, Seoul National University
* Junesoo Kang, UNIST
* Yuseok Jeon, UNIST
* Byoungyoung Lee, Seoul National University
### 摘要
> 攻击者能够无法被察觉地达到他们的目标对于攻击的隐秘性是最重要的考虑因素。因此，攻击者会花费大量精力提高攻击成功率，以免因失败而暴露关于攻击者和攻击尝试的信息。内核的利用是攻击者的主要目标，通常利用基于堆的漏洞，而这些利用的成功率通常较低（例如，平均为56.1%），这是由于默认Linux内核堆分配器SLUB的工作原理所导致的。
> 
> 本文介绍了一种基于时间侧信道攻击的利用技术Pspray，它显著提高了利用的成功概率。根据我们的评估，通过使用10个真实世界的漏洞，Pspray显著提高了所有这些漏洞的成功率（例如，平均从56.1%提高到97.92%）。为了防止攻击者滥用这种利用技术，我们进一步引入了一种新的防御机制来减轻Pspray的威胁。应用了这种减轻措施后，Pspray的整体成功率与使用Pspray之前相似，而性能开销（0.25%）和内存开销（0.52%）可以忽略不计。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/lee-yoochan](https://www.usenix.org/conference/usenixsecurity23/presentation/lee-yoochan)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-lee-yoochan.pdf](https://www.usenix.org/system/files/usenixsecurity23-lee-yoochan.pdf)
## CipherH: Automated Detection of Ciphertext Side-channel Vulnerabilities in Cryptographic Implementations.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#cipherh-automated-detection-of-ciphertext-side-channel-vulnerabilities-in-cryptographic-implementations) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#cipherh-automated-detection-of-ciphertext-side-channel-vulnerabilities-in-cryptographic-implementations)**
### 作者
* Sen Deng, Southern University of Science and Technology
* Mengyuan Li, The Ohio State University
* Yining Tang, Southern University of Science and Technology
* Shuai Wang, Hong Kong University of Science and Technology
* Shoumeng Yan, The Ant Group
* Yinqian Zhang, Southern University of Science and Technology
### 摘要
> 密文侧信道是一种利用受信任执行环境（TEE）的确定性内存加密的新型侧信道。它使得对加密内存的密文进行逻辑或物理读取访问的对手能够以高保真度威胁到受TEE保护的加密实现。先前的研究已经得出结论，密文侧信道不仅对首次发现该漏洞的AMD SEV-SNP构成严重威胁，而且对所有具有确定性内存加密的TEE也构成威胁。
> 
> 本文提出了CipherH，一个用于自动化分析加密软件并检测易受密文侧信道攻击的程序点的实用框架。CipherH旨在在生产加密软件中执行实用的混合分析，包括快速动态污点分析以跟踪整个程序中秘密信息的使用，并对每个“污点”函数执行静态符号执行过程，以使用符号约束来推断密文侧信道漏洞。经验证评估发现，来自OpenSSL、MbedTLS和WolfSSL的最先进的RSA和ECDSA/ECDH实现中发现了200多个易受攻击的程序点。相关案例已报告给开发人员并得到确认或修复。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/deng-sen](https://www.usenix.org/conference/usenixsecurity23/presentation/deng-sen)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-deng-sen.pdf](https://www.usenix.org/system/files/usenixsecurity23-deng-sen.pdf)
## ICSPatch: Automated Vulnerability Localization and Non-Intrusive Hotpatching in Industrial Control Systems using Data Dependence Graphs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#icspatch-automated-vulnerability-localization-and-non-intrusive-hotpatching-in-industrial-control-systems-using-data-dependence-graphs) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#icspatch-automated-vulnerability-localization-and-non-intrusive-hotpatching-in-industrial-control-systems-using-data-dependence-graphs)**
### 作者
* Prashant Hari Narayan Rajput, NYU Tandon School of Engineering
* Constantine Doumanidis, New York University Abu Dhabi
* Michail Maniatakos, New York University Abu Dhabi
### 摘要
> 操作技术（OT）与信息技术（IT）设备之间广泛进行的互联让IT世界的典型漏洞传播到了OT领域。因此，过去通过物理隔离提供的安全层被移除，使得对OT设备进行安全修补成为一项艰巨的要求。传统的修补方法需要重新启动设备以加载修补后的代码到主内存中，但这对于控制关键过程的OT设备来说是不适用的，因为这会导致停机时间，因此需要进行内存中的漏洞修补。此外，这些控制二进制文件通常由内部专有的编译器编译，进一步阻碍了修补过程，并且依赖OT供应商来快速发现漏洞并提供修补程序。当前最先进的热修补方法只关注固件和/或实时操作系统（RTOS）。因此，在这项工作中，我们开发了ICSPatch，一个使用数据依赖图（DDG）自动定位控制逻辑漏洞的框架。借助DDG的帮助，ICSPatch可以准确定位控制应用程序中的漏洞。作为独立的第二步，ICSPatch可以在可编程逻辑控制器的主内存中非侵入式地热修补控制应用程序中的漏洞，同时保持可靠的持续操作。为了评估我们的框架，我们在各种关键基础设施部门的24个易受攻击的控制应用程序二进制文件的合成数据集上对ICSPatch进行了测试。结果显示，ICSPatch能够成功定位所有漏洞并生成相应的修补程序。此外，修补程序在执行周期中增加的延迟可以忽略不计，同时保持正确性和对漏洞的保护。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/rajput](https://www.usenix.org/conference/usenixsecurity23/presentation/rajput)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-rajput.pdf](https://www.usenix.org/system/files/usenixsecurity23-rajput.pdf)
## Access Denied: Assessing Physical Risks to Internet Access Networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#access-denied-assessing-physical-risks-to-internet-access-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#access-denied-assessing-physical-risks-to-internet-access-networks)**
### 作者
* Alex, CAIDA / UC San Diego
* er Marder, CAIDA / UC San Diego
* Zesen Zhang, UC San Diego
* Ricky Mok, CAIDA / UC San Diego
* Ramakrishna Padmanabhan, CAIDA / UC San Diego
* Bradley Huffaker, CAIDA/ UC San Diego
* Matthew Luckie, University of Waikato
* Alberto Dainotti, Georgia Tech
* kc claffy, CAIDA/ UC San Diego
* Alex C. Snoeren, UC San Diego
* Aaron Schulman, UC San Diego
### 摘要
> 地区接入网络在连接有线和移动用户与互联网方面发挥着至关重要的作用。如今的接入网络支持5G手机、云服务、医院和金融服务，以及现代经济中必不可少的远程工作。然而，长期存在的经济和架构约束产生了有限冗余点，使得这些网络容易受到有针对性的物理攻击，导致大范围的停机。这种风险在2020年12月被极大地展示出来，当时一枚炸弹摧毁了位于田纳西州纳什维尔的AT&T地区接入网络的一部分，导致911紧急调度、空中交通管制、医院网络和信用卡处理等服务瘫痪。
> 
> 我们结合了分析接入网络基础设施部署的新技术和大规模停机的测量数据，以展示有针对性攻击的可行性并量化潜在影响。我们的研究为地区接入网络的物理攻击面和可靠性极限提供了洞见。我们分析了缓解我们发现的风险的潜在方法，并讨论了网络运营商发现的缺点。我们希望我们的实证评估能够为风险评估和操作实践提供信息，并激励对这一关键基础设施进行进一步的分析。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/marder](https://www.usenix.org/conference/usenixsecurity23/presentation/marder)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-marder.pdf](https://www.usenix.org/system/files/usenixsecurity23-marder.pdf)
## ZBCAN: A Zero-Byte CAN Defense System.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#zbcan-a-zero-byte-can-defense-system) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#zbcan-a-zero-byte-can-defense-system)**
### 作者
* Khaled Serag, Purdue University
* Rohit Bhatia, Purdue University
* Akram Faqih, Purdue University
* Muslum Ozgur Ozmen, Purdue University
* Vireshwar Kumar, Indian Institute of Technology, Delhi
* Z. Berkay Celik, Purdue University
* Dongyan Xu, Purdue University
### 摘要
> Controller Area Network (CAN)是一种广泛使用的网络协议。除了作为车辆的主要通信媒介外，它还被用于工厂、医疗设备、电梯和航空电子设备中。不幸的是，CAN在设计时没有考虑安全特性。因此，它受到了研究界的关注，显示出其安全性的弱点。最近的研究表明，CAN总线上的一个被入侵的ECU可以发动多种攻击，包括信息注入、总线洪泛和利用CAN错误处理机制的攻击。尽管已经有几项工作尝试保护CAN的安全，但我们认为它们的方法无法广泛采用，原因在于其设计本身。在本文中，我们介绍了ZBCAN，这是一个利用CAN帧的零字节来防范最常见的CAN攻击的防御系统，包括信息注入、冒充、洪泛和错误处理，而无需使用加密或MAC，同时考虑了延迟、总线负载和数据速率等性能指标。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/serag](https://www.usenix.org/conference/usenixsecurity23/presentation/serag)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-serag.pdf](https://www.usenix.org/system/files/usenixsecurity23-serag.pdf)
## RIDAS: Real-time identification of attack sources on controller area networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#ridas-real-time-identification-of-attack-sources-on-controller-area-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#ridas-real-time-identification-of-attack-sources-on-controller-area-networks)**
### 作者
* Jiwoo Shin, Soongsil University
* Hyunghoon Kim, Soongsil University
* Seyoung Lee, Korea University
* Wonsuk Choi, Korea University
* Dong Hoon Lee, Korea University
* Hyo Jin Jo, Soongsil University
### 摘要
> 研究人员通过研究技术来识别网络控制器区域网络（Controller Area Network，CAN）上的各种网络攻击做出了回应。然而，现有的攻击源识别技术因车辆环境的变化（温度、湿度、电池电量等）而具有显著的较低准确性，或者已被有识别能力的攻击者绕过，或者不能提供实时识别。实时攻击节点识别技术是开发网络攻击响应技术（如节点隔离、安全补丁、数字取证等）所必需的，它既不能被攻击者绕过，同时也不会受到车辆环境变化的影响。为了满足这一需求，我们提出了一种新颖的实时攻击节点识别方法，称为RIDAS。RIDAS利用CAN的错误处理规则来识别攻击源。RIDAS将错误注入由现有入侵检测系统（Intrusion Detection System，IDS）检测到的异常消息中。发送异常消息的源会进入CAN标准中定义的错误被动（Error Passive）状态，在此状态下它无法发送连续的消息。然后，RIDAS逐个检查车辆中的所有电子控制单元（Electronic Control Unit，ECU），通过检查在该状态下发生的优先级降低现象来识别处于错误被动状态的节点。此外，RIDAS解决了两个问题，识别的鲁棒性和识别错误。我们在CAN总线原型和一辆真实车辆上进行的实验结果表明，RIDAS能够准确识别攻击源，不受车辆环境变化的影响，并且能够处理入侵检测系统的误报和RIDAS感知的攻击者。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shin](https://www.usenix.org/conference/usenixsecurity23/presentation/shin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shin.pdf](https://www.usenix.org/system/files/usenixsecurity23-shin.pdf)
## That Person Moves Like A Car: Misclassification Attack Detection for Autonomous Systems Using Spatiotemporal Consistency.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#that-person-moves-like-a-car-misclassification-attack-detection-for-autonomous-systems-using-spatiotemporal-consistency) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#that-person-moves-like-a-car-misclassification-attack-detection-for-autonomous-systems-using-spatiotemporal-consistency)**
### 作者
* Yanmao Man, University of Arizona
* Raymond Muller, Purdue University
* Ming Li, University of Arizona
* Z. Berkay Celik, Purdue University
* Ryan Gerdes, Virginia Tech
### 摘要
> 自主系统通常依靠目标检测和跟踪（ODT）来感知环境并预测周围物体的轨迹，以进行规划。ODT的输出通常包含独立预测的物体类别和轨迹。最近的研究表明，使用精心设计的噪声可以伪造ODT的输出，但现有的防御方法仅针对特定的噪声注入方法，因此无法推广。在这项工作中，我们提出了PercepGuard来检测感知模块的误分类攻击，无论攻击方法如何。PercepGuard利用检测到的物体的时空属性（在轨迹中固有），并交叉检查轨迹和类别预测之间的一致性。为了改进对防御感知攻击（自适应攻击）的鲁棒性，我们还考虑了上下文数据（例如自车速度）进行上下文一致性验证，这大大增加了攻击的难度。在真实世界和模拟数据集上的评估结果显示，对自适应攻击的误报率为5%，真阳性率为99%。基准比较结果证实了利用时序特征的优势。通过展示和投影敌对补丁进行的真实世界实验显示，PercepGuard平均检测到96%的攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/man](https://www.usenix.org/conference/usenixsecurity23/presentation/man)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-man.pdf](https://www.usenix.org/system/files/usenixsecurity23-man.pdf)
## TRust: A Compilation Framework for In-process Isolation to Protect Safe Rust against Untrusted Code.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#trust-a-compilation-framework-for-in-process-isolation-to-protect-safe-rust-against-untrusted-code) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#trust-a-compilation-framework-for-in-process-isolation-to-protect-safe-rust-against-untrusted-code)**
### 作者
* Inyoung Bang, Seoul National University
* Martin Kayondo, Seoul National University
* Hyungon Moon, UNIST (Ulsan National Institute of Science and Technology)
* Yunheung Paek, Seoul National University
### 摘要
> Rust是为了帮助开发者建立高度安全的系统而创造的。它带有各种编程结构，强调安全性和内存布局的控制。Rust通过强制执行严格的类型系统和所有空间和时间安全错误的所有权模型，实现了编译时检查。尽管Rust在安全性方面具有优势，但其类型系统所施加的限制使得表达某些设计或计算变得困难或低效。为了简化编程，开发者通常会包含来自不安全的Rust或其他语言编写的外部库的不可信代码。可悲的是，接受这种不可信代码以获取灵活性或效率的编程实践破坏了安全Rust的强安全性保证。本文介绍了TRUST，这是一个通过进程内隔离来提供对程序中存在的不可信代码的安全Rust的可信保护的编译框架。其主要策略是在一个与不可信代码不可写但对安全Rust可访问的隔离内存区域中分配对象。为了实现这一目标，TRUST采用了软件故障隔离和x86保护键。它可以直接应用于任何Rust代码，无需手动更改。我们的实验显示，TRUST是有效和高效的，在运行Rust中的11个广泛使用的创建时，平均运行时开销仅为7.55%，内存开销为13.30%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/bang](https://www.usenix.org/conference/usenixsecurity23/presentation/bang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-bang.pdf](https://www.usenix.org/system/files/usenixsecurity23-bang.pdf)
## Jinn: Hijacking Safe Programs with Trojans.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#jinn-hijacking-safe-programs-with-trojans) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#jinn-hijacking-safe-programs-with-trojans)**
### 作者
* Komail Dharsee, University of Rochester
* John Criswell, University of Rochester
### 摘要
> 不可信任的硬件供应链使恶意的、强大的和永久的改变处理器，也被称为硬件木马成为可能。此类硬件木马可以削弱安装在硬件之上的任何软件执行的安全策略。现有的防御措施针对一系列特定的硬件组件，特别是实施硬件强制安全机制，如加密核心、用户/内核特权隔离和内存保护的组件。
> 
> 我们观察到计算系统使用通用处理器逻辑来实施软件执行的安全策略。这使得通用逻辑安全变得至关重要，因为篡改它可能违反基于软件的安全策略。借此洞察力，我们开发了一种新型的硬件木马，我们称之为Jinn木马，用于破坏通用硬件以实现灵活而强大的高级攻击。Jinn木马关闭了基于编译器的安全执行机制，使类型安全的软件容易受到内存安全攻击。我们在gem5模拟器中原型化了设计时的Jinn木马，并使用它们攻击了用Rust编写的程序，引发了内存安全漏洞以启动控制流劫持攻击。我们发现，即使只破坏一个比特的架构状态，并且仅需要8比特的持久木马内部状态，Jinn木马也能有效地破坏软件执行的安全策略。因此，我们展示了即使被植入通用硬件，并与任何硬件强制安全组件分离，Jinn木马仍然是有效的。我们表明，保护硬件强制安全逻辑是不足以保持系统免受硬件木马的安全威胁的。
> 
> (Note: The translation may not be perfect due to technical terms and complex language used in the abstract.)

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/dharsee](https://www.usenix.org/conference/usenixsecurity23/presentation/dharsee)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-dharsee.pdf](https://www.usenix.org/system/files/usenixsecurity23-dharsee.pdf)
## ARGUS: A Framework for Staged Static Taint Analysis of GitHub Workflows and Actions.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#argus-a-framework-for-staged-static-taint-analysis-of-github-workflows-and-actions) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#argus-a-framework-for-staged-static-taint-analysis-of-github-workflows-and-actions)**
### 作者
* Siddharth Muralee, Purdue University
* Igibek Koishybayev, North Carolina State University
* Aleks, North Carolina State University
* r Nahapetyan, North Carolina State University
* Greg Tystahl, North Carolina State University
* Brad Reaves, North Carolina State University
* Antonio Bianchi, Purdue University
* William Enck, North Carolina State University
* Alex, North Carolina State University
* ros Kapravelos, North Carolina State University
* Aravind Machiry, Purdue University
### 摘要
> 数百万软件项目利用自动化工作流程（如GitHub Actions）执行常见的构建和部署任务。虽然GitHub Actions极大地改进了开发者的软件构建过程，但它们会给软件供应链带来重大风险，增加了更多的依赖和代码复杂性，可能引入安全漏洞。本文介绍了ARGUS，这是GitHub Actions中用于识别代码注入漏洞的第一个静态污点分析系统。我们使用ARGUS对2,778,483个Workflow进行了大规模评估，这些Workflow引用了31,725个Actions，并发现了4,307个Workflow和80个Actions中的关键代码注入漏洞。我们还直接将ARGUS与两个现有的基于模式的GitHub Actions漏洞扫描工具进行了比较，结果表明我们的系统在漏洞检测方面取得了显着改进，发现率比现有技术方法高出七倍以上。这些结果表明，GitHub Actions生态系统中的命令注入漏洞不仅普遍存在，而且需要进行污点分析才能检测出来。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/muralee](https://www.usenix.org/conference/usenixsecurity23/presentation/muralee)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-muralee.pdf](https://www.usenix.org/system/files/usenixsecurity23-muralee.pdf)
## McFIL: Model Counting Functionality-Inherent Leakage.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#mcfil-model-counting-functionality-inherent-leakage) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#mcfil-model-counting-functionality-inherent-leakage)**
### 作者
* Maximilian Zinkus, Johns Hopkins University
* Yinzhi Cao, Johns Hopkins University
* Matthew D. Green, Johns Hopkins University
### 摘要
> 保护私人数据的机密性并将其用于有用的协作长期以来一直存在冲突。现代密码学通过安全协议的快速增长，如多方计算、全同态加密和零知识证明，弥合了这一鸿沟。然而，即使有可证明的不可区分性或零知识性，由于功能本质上的泄漏，机密性损失可能部分甚至完全破坏秘密值，而无需虚假的安全证明。
> 
> 在这项工作中，我们描述了McFIL，一种算法方法和相应的软件实现，用于自动量化给定功能的内在泄漏。我们通过在SAT求解器中使用最大模型计数，扩展和概括了Beck等人的选择密文攻击框架，提出了一个实用的启发式方法，不仅量化而且最大化了功能内在泄漏。因此，当在安全协议中使用时，McFIL自动推导出近似最优的对手输入，从而最大化了私人值的信息泄漏。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zinkus](https://www.usenix.org/conference/usenixsecurity23/presentation/zinkus)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zinkus.pdf](https://www.usenix.org/system/files/usenixsecurity23-zinkus.pdf)
## Extracting Protocol Format as State Machine via Controlled Static Loop Analysis.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#extracting-protocol-format-as-state-machine-via-controlled-static-loop-analysis) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#extracting-protocol-format-as-state-machine-via-controlled-static-loop-analysis)**
### 作者
* Qingkai Shi, Purdue University
* Xiangzhe Xu, Purdue University
* Xiangyu Zhang, Purdue University
### 摘要
> 逆向工程协议消息格式对于许多安全应用至关重要。主流技术使用动态分析并继承其低覆盖率的问题——推断得到的消息格式仅反映其输入的特征。为了实现高覆盖率，我们选择使用静态程序分析从协议解析器的实现中推断消息格式。在这项工作中，我们专注于一类极具挑战性的协议，其格式可以通过约束增强的正则表达式描述，并通过有限状态机进行解析。这些状态机通常被实现为复杂的解析循环，传统的静态分析难以对其进行分析。我们的新技术通过将每个循环迭代视为一个状态，将循环迭代之间的依赖关系视为状态转换，从而提取出一个准确的状态机。为了实现高度的路径敏感精度但避免路径扩展，分析受到控制，以基于精心设计的规则合并尽可能多的路径。评估结果显示，我们可以在五分钟内推断出一个状态机和消息格式，精确度和召回率都达到90%以上，远远优于现有技术。我们还应用这些状态机来增强协议模糊器，覆盖率提高了20%至230%，相比基准测试还发现了十个更多的零日漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shi-qingkai](https://www.usenix.org/conference/usenixsecurity23/presentation/shi-qingkai)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shi-qingkai.pdf](https://www.usenix.org/system/files/usenixsecurity23-shi-qingkai.pdf)
## Isolated and Exhausted: Attacking Operating Systems via Site Isolation in the Browser.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#isolated-and-exhausted-attacking-operating-systems-via-site-isolation-in-the-browser) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#isolated-and-exhausted-attacking-operating-systems-via-site-isolation-in-the-browser)**
### 作者
* Matthias Gierlings, Ruhr University Bochum
* Marcus Brinkmann, Ruhr University Bochum
* Jörg Schwenk, Ruhr University Bochum
### 摘要
> 网站隔离是浏览器的安全架构，通过在操作系统(OS)进程级别将不同网站的内容分离，以防止侧面渠道和渲染器攻击。通过对齐网络和操作系统安全边界，网站隔离承诺以简化架构系统地防御这些攻击类别。然而，网站隔离是一项大规模的架构变更，也使得操作系统资源更容易被网络攻击者访问，从而将网络用户暴露在操作系统层面的新风险中。在本文中，我们首次对基于网站隔离的操作系统资源耗尽攻击进行了系统研究，围绕网络攻击者模型，分为三个步骤：(1)直接可访问的一级资源；(2)浏览器沙箱保护下的受限二级资源使用；(3)一个高级的真实攻击。对于(1)，我们展示了如何创建一个分叉炸弹，突出了网站隔离架构中的概念差距。对于(2)，我们展示了如何使用各种高级浏览器功能阻断操作系统中的所有UDP套接字。对于(3)，我们实现了一个完全可用的基于网站隔离的DNS缓存污染攻击，构建在(2)的基础上，并绕过DNS的一个主要安全功能。我们的研究结果表明，现代浏览器功能与旧版操作系统功能之间的相互作用日益成为问题，并需要进一步研究。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gierlings](https://www.usenix.org/conference/usenixsecurity23/presentation/gierlings)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gierlings.pdf](https://www.usenix.org/system/files/usenixsecurity23-gierlings.pdf)
## Extending a Hand to Attackers: Browser Privilege Escalation Attacks via Extensions.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#extending-a-hand-to-attackers-browser-privilege-escalation-attacks-via-extensions) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#extending-a-hand-to-attackers-browser-privilege-escalation-attacks-via-extensions)**
### 作者
* Young Min Kim, Seoul National University
* Byoungyoung Lee, Seoul National University
### 摘要
> Web浏览器是攻击的吸引目标，攻击者可以从用户处窃取安全和隐私敏感的数据，如在线银行和社交网络凭据。因此，浏览器采用了最小权限原则（PoLP）来在受到攻击时最小化损害，即多进程架构和站点隔离。我们着重研究浏览器扩展，这些是扩展现代浏览器（Chrome，Firefox和Safari）功能的第三方程序。浏览器还将PoLP原则应用于扩展架构，即将两个主要扩展组件分离，其中一个组件被授予较高权限，另一个组件被授予较低权限。
> 
> 在本文中，我们首先分析了扩展的安全方面。分析结果显示，当前的扩展架构对扩展开发人员施加了严格的安全要求，这些要求很难满足。特别是，由于违反要求，40个扩展中发现了59个漏洞，允许攻击者执行特权升级攻击，包括UXSS（通用跨站脚本攻击）和窃取扩展中的密码或加密货币。令人担忧的是，扩展被超过一半的Chrome和Firefox用户使用。此外，许多发现漏洞的扩展非常受欢迎，拥有超过1000万用户。
> 
> 为了解决当前扩展架构的安全限制，我们提出了FistBump，一种新的扩展架构，以增强PoLP的强制执行。FistBump在网页和内容脚本之间采用了强大的进程隔离，因此设计上满足了前述的安全要求，从而消除了所有已识别的漏洞。此外，FistBump的设计保持了扩展的向后兼容性，因此扩展可以在不修改的情况下运行于FistBump上。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kim-young-min](https://www.usenix.org/conference/usenixsecurity23/presentation/kim-young-min)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kim-young-min.pdf](https://www.usenix.org/system/files/usenixsecurity23-kim-young-min.pdf)
## RøB: Ransomware over Modern Web Browsers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#r-b-ransomware-over-modern-web-browsers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#r-b-ransomware-over-modern-web-browsers)**
### 作者
* Harun Oz, Cyber-Physical Systems Security Lab, Florida International University
* Ahmet Aris, Cyber-Physical Systems Security Lab, Florida International University
* Abbas Acar, Cyber-Physical Systems Security Lab, Florida International University
* Güliz Seray Tuncay, Google
* Leonardo Babun, Cyber-Physical Systems Security Lab, Florida International University
* Selcuk Uluagac, Cyber-Physical Systems Security Lab, Florida International University
### 摘要
> 文件系统访问（FSA）API使Web应用程序能够与用户本地设备上的文件进行交互。虽然它可以用于开发功能丰富的Web应用程序，但它极大地扩展了攻击面，可能被对手滥用以造成重大损害。在本文中，我们首次在文献中对这种可以用于通过浏览器开发强大新型勒索软件的攻击向量进行了广泛研究。使用FSA API和WebAssembly技术，我们展示了这种名为RøB的新型基于浏览器的恶意Web应用程序作为一种勒索软件，它可以从浏览器中加密用户的文件。我们使用RøB进行了不同操作系统、本地目录和杀毒解决方案的影响分析，并开发了针对其的缓解技术。我们的评估显示，RøB可以加密受害者的本地文件，包括云集成目录、外部存储设备和网络共享文件夹，而不受API所施加的访问限制的影响。此外，我们评估并展示了现有的防御解决方案在可行性方面对抗RøB的不足之处。我们提出了三种潜在的防御解决方案来缓解这种新的攻击向量。这些解决方案在不同层面上操作（即浏览器级、文件系统级和用户级），彼此之间是正交的。我们的工作力图提高人们对类似RøB的基于浏览器的勒索软件的危险性的认识，并展示新兴API文档（即流行的FSA）在反映威胁程度方面可能含糊不清。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/oz](https://www.usenix.org/conference/usenixsecurity23/presentation/oz)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-oz.pdf](https://www.usenix.org/system/files/usenixsecurity23-oz.pdf)
## Pool-Party: Exploiting Browser Resource Pools for Web Tracking.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#pool-party-exploiting-browser-resource-pools-for-web-tracking) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#pool-party-exploiting-browser-resource-pools-for-web-tracking)**
### 作者
* Peter Snyder, Brave Software
* Soroush Karami, University of Illinois at Chicago
* Arthur Edelstein, Brave Software
* Benjamin Livshits, Imperial College London
* Hamed Haddadi, Brave Software and Imperial College of London
### 摘要
> 我们发现了一类浏览器中隐藏通道的攻击方式，目前的防御措施无法应对，我们将其称为“泳池派对”攻击。泳池派对攻击允许网站通过操纵有限但未分区的资源池来创建隐藏通道。这类攻击已经被发现存在；在这项研究中，我们展示了它们比以前认为的更普遍、更容易实施，并且可以以更多种方式进行利用。在实际和现实世界的条件下，这些隐藏通道具有足够的带宽可以在站点边界之间传递cookie和标识符。我们在所有常见的浏览器中发现了泳池派对攻击，并显示它们是实际的跨站追踪技术（即，Chrome和Edge需要0.6秒，Firefox和Tor浏览器需要7秒）。
> 
> 本文的贡献如下：首先，我们描述了在浏览器中利用应用层资源池限制的泳池派对隐藏通道攻击。其次，我们证明了泳池派对攻击是实际可行的，并且可以用于在所有常见的浏览器中追踪用户；我们还分享了攻击的开源实现。第三，我们展示了在基于Gecko的浏览器中（包括Tor浏览器）泳池派对攻击还可以用于跨配置文件的追踪（例如，将用户行为与普通浏览会话和隐私浏览会话进行关联）。最后，我们讨论了可能的防御措施。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/snyder](https://www.usenix.org/conference/usenixsecurity23/presentation/snyder)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-snyder.pdf](https://www.usenix.org/system/files/usenixsecurity23-snyder.pdf)
## Checking Passwords on Leaky Computers: A Side Channel Analysis of Chrome's Password Leak Detect Protocol.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#checking-passwords-on-leaky-computers-a-side-channel-analysis-of-chromes-password-leak-detect-protocol) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#checking-passwords-on-leaky-computers-a-side-channel-analysis-of-chromes-password-leak-detect-protocol)**
### 作者
* Andrew Kwong, UNC Chapel Hill
* Walter Wang, University of Michigan
* Jason Kim, Georgia Tech
* Jonathan Berger, Bar Ilan University
* Daniel Genkin, Georgia Tech
* Eyal Ronen, Tel Aviv University
* Hovav Shacham, UT Austin
* Riad Wahby, CMU
* Yuval Yarom, Ruhr University Bochum
### 摘要
> 密码数据库泄露的规模和频率导致了广泛和持续的凭据填充攻击，攻击者试图使用从一个服务中泄露的凭据来破坏其他服务的账户。为此，浏览器供应商已集成密码泄露检测工具，该工具在每次登录时自动检查用户的凭据是否与已泄露账户列表匹配，并在匹配时警告用户更改密码。特别是，谷歌Chrome使用了由Thomas等人（USENIX安全性'19）设计的集中式泄露检测服务，旨在同时保护用户的隐私和隐藏服务器的已泄露凭据列表。
> 
> 本文中，我们展示了Chrome在此协议实现中存在多个违反安全性特性的微架构侧信道攻击漏洞。具体而言，我们展示了针对Chrome使用内存硬哈希函数scrypt、哈希到椭圆曲线函数以及模反演算法的攻击。虽然先前的研究讨论了scrypt存在侧信道攻击的理论可能性，但我们开发了新技术，使得这种攻击在实践中成为可能，允许攻击者在使用字典攻击时通过一次猜测就恢复用户的密码。对于模反演算法，我们提出了对二进制扩展欧几里得算法（BEEA）的新型密码分析方法，在给定单个嘈杂的迹线的情况下提取其输入，从而使恶意服务器能够获取客户密码的信息。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kwong](https://www.usenix.org/conference/usenixsecurity23/presentation/kwong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kwong.pdf](https://www.usenix.org/system/files/usenixsecurity23-kwong.pdf)
## Ultimate SLH: Taking Speculative Load Hardening to the Next Level.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#ultimate-slh-taking-speculative-load-hardening-to-the-next-level) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#ultimate-slh-taking-speculative-load-hardening-to-the-next-level)**
### 作者
* Zhiyuan Zhang, The University of Adelaide
* Gilles Barthe, MPI-SP and IMDEA Software Institute
* Chitchanok Chuengsatiansup, The University of Melbourne
* Peter Schwabe, MPI-SP and Radboud University
* Yuval Yarom, The University of Adelaide
### 摘要
> 在本文中，我们重新审视了Spectre v1漏洞和仅软件的对策。具体而言，我们系统地调查了多种变体的推测加载加固（SLH）的性能损失和安全性。作为研究的一部分，我们将Patrignani和Guarnieri（CCS 2021）的"strong SLH"变体作为LLVM的编译器扩展进行实现。我们表明，包括strong SLH在内的现有变体都不能在实践中保护免受所有Spectre v1攻击。我们通过首次展示变量时间算术指令泄露秘密信息，即使它们只是被推测性地执行，来证明这一点。我们将strong SLH扩展到包括对此类泄漏的保护措施，并在LLVM中实现完整的保护，并使用SPEC2017基准来比较其性能与现有的SLH变体以及使用防护指令完全防止推测性执行的代码。我们表明，我们提出的对策在防范Spectre v1攻击方面提供了完整的保护，而且性能更好，比使用防护指令的代码快两倍以上，事实上，在几个基准测试中，我们的方法更快。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-zhiyuan-slh](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-zhiyuan-slh)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-zhiyuan-slh.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-zhiyuan-slh.pdf)
## Speculation at Fault: Modeling and Testing Microarchitectural Leakage of CPU Exceptions.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#speculation-at-fault-modeling-and-testing-microarchitectural-leakage-of-cpu-exceptions) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#speculation-at-fault-modeling-and-testing-microarchitectural-leakage-of-cpu-exceptions)**
### 作者
* Jana Hofmann, Azure Research, Microsoft
* Emanuele Vannacci, Vrije Universiteit Amsterdam
* Cédric Fournet, Azure Research, Microsoft
* Boris Köpf, Azure Research, Microsoft
* Oleksii Oleksenko, Azure Research, Microsoft
### 摘要
> 微观架构泄漏模型提供了有效的工具，通过安全的协同设计来防止漏洞，如Spectre和Meltdown：对于软件来说，它们为安全编译和验证提供了基础；对于硬件来说，它们提供了一个目标规范用于测试和验证。
> 
> 不幸的是，现有的泄漏模型存在严重限制：它们都不涵盖CPU异常，而这些异常在实现安全抽象（如虚拟化和内存保护）方面是必不可少的，也是Meltdown、MDS和Foreshadow等关键漏洞的来源。
> 
> 在本文中，我们提供了第一个针对CPU异常的泄漏模型，并提供了针对它们的黑盒CPU测试的新工具。我们进行了大量实验，并逐步完善这些模型，直到精确捕捉到四种不同x86微观架构下一部分异常的泄漏。
> 
> 在这个过程中，我们对以前的研究结果进行了相当数量的矛盾、完善和证实，并发现了三个新的瞬态泄漏，它们影响到非规范地址的存储、只读内存的存储和除零操作。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/hofmann](https://www.usenix.org/conference/usenixsecurity23/presentation/hofmann)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-hofmann.pdf](https://www.usenix.org/system/files/usenixsecurity23-hofmann.pdf)
## ProSpeCT: Provably Secure Speculation for the Constant-Time Policy.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#prospect-provably-secure-speculation-for-the-constant-time-policy) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#prospect-provably-secure-speculation-for-the-constant-time-policy)**
### 作者
* Lesly-Ann Daniel, imec-DistriNet, KU Leuven
* Marton Bognar, imec-DistriNet, KU Leuven
* Job Noorman, imec-DistriNet, KU Leuven
* Sébastien Bardin, CEA, LIST, Université Paris Saclay
* Tamara Rezk, INRIA, Université Côte d’Azur, Sophia Antipolis
* Frank Piessens, imec-DistriNet, KU Leuven
### 摘要
> 我们提出了ProSpeCT，一个通用的形式处理器模型，为恒定时间策略提供可证明安全的推测。在非推测语义下的恒定时间程序中，ProSpeCT保证了推测和乱序执行不会引起微架构泄漏。通过在处理器流水线中跟踪秘密信息并确保它们在推测执行期间不影响微架构状态，实现了这一保证。我们的形式化模型涵盖了广泛的推测机制，推广了先前的工作。因此，我们的安全证明涵盖了所有已知的Spectre攻击，包括加载值注入（LVI）攻击。
> 
> 除了形式化模型外，我们还提供了在一款RISC-V处理器上的ProSpeCT原型硬件实现，并展示其对硬件成本、性能和所需的软件更改的低影响证据。特别是，实验评估确认了我们的预期：对于符合恒定时间的二进制代码，启用ProSpeCT不会产生性能开销。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/daniel](https://www.usenix.org/conference/usenixsecurity23/presentation/daniel)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-daniel.pdf](https://www.usenix.org/system/files/usenixsecurity23-daniel.pdf)
## Title Redacted Due to Vulnerability Embargo.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#title-redacted-due-to-vulnerability-embargo) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#title-redacted-due-to-vulnerability-embargo)**
### 作者
* Daniel Moghimi, UCSD
### 摘要
> 我们介绍了 Downfall 攻击，这是一种新型的瞬时执行攻击，可以破坏互联网上运行的计算机的安全性。我们利用高性能x86 CPU上的 gather 指令，在用户-内核边界、进程边界、虚拟机和可信执行环境之间泄露数据。我们还开发了实际的端到端攻击，可以窃取加密密钥、程序的运行时数据，甚至是休眠状态的数据（任意数据）。我们的研究结果、攻击技术和演示攻击都能够击败先前所有的防御措施，需要对广泛使用的客户端和服务器计算机进行关键的硬件修复和安全更新。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/moghimi](https://www.usenix.org/conference/usenixsecurity23/presentation/moghimi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-moghimi.pdf](https://www.usenix.org/system/files/usenixsecurity23-moghimi.pdf)
## FACE-AUDITOR: Data Auditing in Facial Recognition Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#face-auditor-data-auditing-in-facial-recognition-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#face-auditor-data-auditing-in-facial-recognition-systems)**
### 作者
* Min Chen, CISPA Helmholtz Center for Information Security
* Zhikun Zhang, CISPA Helmholtz Center for Information Security and Stanford University
* Tianhao Wang, University of Virginia
* Michael Backes, CISPA Helmholtz Center for Information Security
* Yang Zhang, CISPA Helmholtz Center for Information Security
### 摘要
> 基于少样本的人脸识别系统由于其可伸缩性和在模型部署阶段使用少量人脸图像的能力而引起了越来越多的关注。然而，人脸识别系统的强大能力使得任何拥有适度资源的人都能够在未经人们知情和同意的情况下搜索互联网并建立性能良好的人脸识别模型。为了防止人脸图像被滥用，一个直观的方法是在分享之前修改原始人脸图像，但这不可避免地会破坏语义信息并且容易受到对抗性攻击的影响。因此，迫切需要一种不干扰人脸识别模型效用且不容易被绕过的审核方法。
> 
> 本文将审核过程定义为用户级别的成员推断问题，并提出了一个完整的工具包FACE-AUDITOR，该工具包可以仔细选择探测集来查询基于少样本的人脸识别模型，并确定用户的任何人脸图像是否在训练模型中使用。我们进一步提出使用原始人脸图像之间的相似度分数作为参考信息来改善审核性能。在多个真实面部图像数据集上进行的大量实验证明了FACE-AUDITOR可以达到高达99％的审核准确度。最后，我们展示了FACE-AUDITOR在存在多种扰动机制（针对训练图像或目标模型）的情况下的稳健性。我们实验的源代码可以在https://anonymous.4open.science/r/FACE-AUDITOR找到。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/chen-min](https://www.usenix.org/conference/usenixsecurity23/presentation/chen-min)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-chen-min.pdf](https://www.usenix.org/system/files/usenixsecurity23-chen-min.pdf)
## UnGANable: Defending Against GAN-based Face Manipulation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#unganable-defending-against-gan-based-face-manipulation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#unganable-defending-against-gan-based-face-manipulation)**
### 作者
* Zheng Li, CISPA Helmholtz Center for Information Security
* Ning Yu, Salesforce Research
* Ahmed Salem, Microsoft Research
* Michael Backes, CISPA Helmholtz Center for Information Security
* Mario Fritz, CISPA Helmholtz Center for Information Security
* Yang Zhang, CISPA Helmholtz Center for Information Security
### 摘要
> 深度伪造对我们的社会构成严重的视觉信息误导威胁。代表性的深度伪造应用之一是面部操作，它会修改图像中受害者的面部特征，例如改变其年龄或发色。目前最先进的面部操作技术依赖于生成对抗网络（GANs）。在本文中，我们提出了第一个防御系统，即UnGANable，用来对抗基于GAN逆向的面部操作。具体而言，UnGANable专注于防御GAN逆向，这是面部操作中一个重要的步骤。其核心技术是在图像空间中寻找原始图像（称为目标图像）周围的备选图像（称为伪装图像）。当这些伪装图像在网络上发布时，它们可以危害GAN逆向的过程。我们考虑了两种最先进的逆向技术，包括基于优化的逆向和混合逆向，并在五种不同的场景下设计了五种不同的防御策略，这取决于防御者的背景知识。对在两个基准面部数据集上训练的四个流行GAN模型进行的大量实验表明，UnGANable实现了显著的有效性和实用性能，并超越了多种基准方法。我们进一步研究了四种适应性对手来绕过UnGANable，并显示其中一些对手略微有效。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/li-zheng](https://www.usenix.org/conference/usenixsecurity23/presentation/li-zheng)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-li-zheng.pdf](https://www.usenix.org/system/files/usenixsecurity23-li-zheng.pdf)
## Fairness Properties of Face Recognition and Obfuscation Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fairness-properties-of-face-recognition-and-obfuscation-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#fairness-properties-of-face-recognition-and-obfuscation-systems)**
### 作者
* Harrison Rosenberg, University of Wisconsin–Madison
* Brian Tang, University of Michigan
* Kassem Fawaz, University of Wisconsin–Madison
* Somesh Jha, University of Wisconsin–Madison
### 摘要
> 商业和政府领域中自动人脸识别系统的普及给个人的隐私造成了重大关切。解决这些隐私问题的一种方法是采用针对驱动人脸识别系统的度量嵌入网络的逃避攻击：人脸混淆系统生成几乎无法察觉的扰动图像，导致人脸识别系统误认用户的身份。扰动人脸是在已知对人脸识别来说是不公平的度量嵌入网络上生成的。随之而来的一个关于人口统计的公平性问题自然而然地出现了：在人脸混淆系统的表现中是否存在人口统计方面的不平等？我们通过对最近的人脸混淆系统进行分析和实证探索来回答这个问题。发现度量嵌入网络在人口统计上具有意识：人脸特征嵌入按人口统计分组。我们展示了这种分组行为如何导致少数族裔群体的人脸混淆效果降低。直观的分析模型为我们揭示了这些现象的内在机制。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/rosenberg](https://www.usenix.org/conference/usenixsecurity23/presentation/rosenberg)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-rosenberg.pdf](https://www.usenix.org/system/files/usenixsecurity23-rosenberg.pdf)
## GlitchHiker: Uncovering Vulnerabilities of Image Signal Transmission with IEMI.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#glitchhiker-uncovering-vulnerabilities-of-image-signal-transmission-with-iemi) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#glitchhiker-uncovering-vulnerabilities-of-image-signal-transmission-with-iemi)**
### 作者
* Qinhong Jiang, Zhejiang University
* Xiaoyu Ji, Zhejiang University
* Chen Yan, Zhejiang University
* Zhixin Xie, Zhejiang University
* Haina Lou, Zhejiang University
* Wenyuan Xu, Zhejiang University
### 摘要
> 摄像机已经演变成各种应用中最重要的设备之一。在本文中，我们首次确定了一类新的漏洞，涉及此前被忽视的图像信号传输阶段，并解释了相机故障的基本原理。基于这些漏洞，我们设计了GlitchHiker攻击，可以使用有意的电磁干扰（IEMI）在不同的位置、宽度和数量上主动诱发相机的故障图像。我们成功地对5个品类中的8个现成相机系统在原装包装的距离上到30厘米进行了GlitchHiker攻击。涉及4个物体检测器和2个人脸检测器的两个案例研究的实验表明，注入一个条纹足以以最高成功率分别隐藏、创建或改变物体和人物，分别为98.5%和80.4%。接着，我们讨论了现实世界中的攻击场景，并初步调查了有针对性攻击的可行性。最后，我们提出了基于硬件和软件的对策措施。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/jiang-qinhong](https://www.usenix.org/conference/usenixsecurity23/presentation/jiang-qinhong)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-jiang-qinhong.pdf](https://www.usenix.org/system/files/usenixsecurity23-jiang-qinhong.pdf)
## (M)WAIT for It: Bridging the Gap between Microarchitectural and Architectural Side Channels.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#m-wait-for-it-bridging-the-gap-between-microarchitectural-and-architectural-side-channels) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#m-wait-for-it-bridging-the-gap-between-microarchitectural-and-architectural-side-channels)**
### 作者
* Ruiyi Zhang, CISPA Helmholtz Center for Information Security
* Taehyun Kim, Independent
* Daniel Weber, CISPA Helmholtz Center for Information Security
* Michael Schwarz, CISPA Helmholtz Center for Information Security
### 摘要
> 在过去几年中，微体系结构攻击迅速增加，利用CPU各部分的副作用。它们大多共同依赖于计时差异，要求有一种架构高分辨率计时器，使得微体系结构状态对攻击者可见。
> 
> 本论文提出了一种新的原始方法，将微体系结构状态转换为架构状态，而无需依赖时间测量。我们利用了新的英特尔微体系结构（Tremont和Alder Lake）引入的非特权空闲循环优化指令umonitor和umwait。尽管没有官方文档，但这些指令提供了关于指定内存区域瞬态使用情况的架构反馈。通过三个案例研究，我们展示了我们的原始方法的多功能性。首先，通过Spectral，我们展示了一种在没有任何架构计时器的情况下，使瞬态执行攻击以高达200 kbit/s的速度架构泄漏位的方法。其次，我们展示了不依赖于架构计时器的传统侧信道攻击。最后，我们证明了当结合粗粒度计时器时，我们还可以进行中断计时攻击，从而允许我们检测用户打开的网站。我们的案例研究突显了架构和微体系结构之间的边界变得越来越模糊，导致新的攻击变种，并使得有效的对策变得更加复杂。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-ruiyi](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-ruiyi)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-ruiyi.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-ruiyi.pdf)
## Collide+Power: Leaking Inaccessible Data with Software-based Power Side Channels.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#collide-power-leaking-inaccessible-data-with-software-based-power-side-channels) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#collide-power-leaking-inaccessible-data-with-software-based-power-side-channels)**
### 作者
* Andreas Kogler, Graz University of Technology
* Jonas Juffinger, Graz University of Technology
* Lukas Giner, Graz University of Technology
* Lukas Gerlach, CISPA Helmholtz Center for Information Security
* Martin Schwarzl, Graz University of Technology
* Michael Schwarz, CISPA Helmholtz Center for Information Security
* Daniel Gruss, Graz University of Technology
* Stefan Mangard, Graz University of Technology
### 摘要
> 差分功耗分析（DPA）通过对功耗轨迹的统计分析，测量计算机系统中使用的数据值之间的单比特差异。在本文中，我们展示了仅仅是数据值的共存，例如攻击者和受害者数据在同一缓冲区和缓存中，会导致现代CPU中的功耗泄漏，这取决于两个值的组合，从而产生了一种新的攻击，Collide+Power。我们系统地分析了CPU的内存层次结构的功耗泄漏，以得出精确的泄漏模型，从而实现实用的端到端攻击。这些攻击可以在软件中进行，任何与功耗相关的信号，例如功耗接口或由节流引起的定时变化。由于节流引起的泄漏需要比直接功耗测量多133.3倍的样本。我们开发了一种新颖的差分测量技术，平均放大了可利用的泄漏量8.778倍，相比于直接的DPA方法。我们证明了Collide+Power可以在少于23000个测量中泄漏CPU的内存层次结构中的单比特差异。Collide+Power在我们的端到端DPA攻击中改变了攻击方控制的数据。我们提出了一种类似Meltdown的攻击，可以从攻击者选择的内存位置中泄漏，以及一种更快的MDS风格的攻击，每小时泄漏4.82比特。Collide+Power是一种通用攻击，适用于任何现代CPU、任意内存位置、以及受害者应用和数据。然而，类似Meltdown的攻击目前还不实用，因为它受到将受害者数据预取到缓存中的现状的限制，导致实际世界攻击的运行时间超过一年，对于一个比特来说太长时间。考虑到不同的变体和可能更实用的预取方法，我们认为Collide+Power是一个值得重视且难以缓解的威胁。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/kogler](https://www.usenix.org/conference/usenixsecurity23/presentation/kogler)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-kogler.pdf](https://www.usenix.org/system/files/usenixsecurity23-kogler.pdf)
## Inception: Exposing New Attack Surfaces with Training in Transient Execution.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#inception-exposing-new-attack-surfaces-with-training-in-transient-execution) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#inception-exposing-new-attack-surfaces-with-training-in-transient-execution)**
### 作者
* Daniël Trujillo, ETH Zurich
* Johannes Wikner, ETH Zurich
* Kaveh Razavi, ETH Zurich
### 摘要
> 为了防止短暂的控制流劫持，软件依赖于参与分支决策的微体系结构缓冲区的安全状态。为了实现这种安全状态，硬件和软件减轻或清理这些微体系结构缓冲区在切换安全上下文时，例如当用户进程进入内核时。不幸的是，我们表明这些减轻措施在许多感兴趣的情况下不能阻止攻击者操纵这些微体系结构缓冲区的状态。特别地，我们提出了瞬态执行训练(TTE)，一种新的瞬态执行攻击类别，使攻击者能够在切换到受害者上下文之后训练目标微体系结构缓冲区。为了展示TTE的影响，我们构建了一个名为INCEPTION的完整利用利用，在所有现有的AMD Zen微体系结构中通过硬件创建一个无限瞬态循环，以训练返回堆栈缓冲区，并以攻击者控制的目标泄露任意内核内存，尽管所有针对短暂控制流劫持的减轻措施，包括最近的自动IBRS。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/trujillo](https://www.usenix.org/conference/usenixsecurity23/presentation/trujillo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-trujillo.pdf](https://www.usenix.org/system/files/usenixsecurity23-trujillo.pdf)
## BunnyHop: Exploiting the Instruction Prefetcher.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#bunnyhop-exploiting-the-instruction-prefetcher) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#bunnyhop-exploiting-the-instruction-prefetcher)**
### 作者
* Zhiyuan Zhang, The University of Adelaide
* Mingtian Tao, The University of Adelaide
* Sioli O'Connell, The University of Adelaide
* Chitchanok Chuengsatiansup, The University of Melbourne
* Daniel Genkin, Georgia Tech
* Yuval Yarom, The University of Adelaide
### 摘要
> 指令预取器是一个微体系结构组件，其任务是将程序代码带入指令高速缓存。为了预测哪些代码可能被执行，指令预取器依赖于分支预测器。
> 
> 在本文中，我们研究了现代英特尔处理器中的指令预取器。我们首先提出了 BunnyHop，这是一种利用指令预取器将分支预测信息编码为高速缓存状态的技术。我们展示了如何利用 BunnyHop 对分支预测器执行低噪声攻击。具体来说，我们展示了如何在分支预测器上实施类似 Flush+Reload 和 Prime+Probe 的攻击，而不是在数据高速缓存上。然后，我们展示了 BunnyHop 允许使用指令预取器作为混淆代理，强制在受害者内部进行高速缓存驱逐的攻击。我们利用这一点来演示对使用高速缓存着色和数据预取保护的 AES 实现的攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-zhiyuan-bunnyhop](https://www.usenix.org/conference/usenixsecurity23/presentation/zhang-zhiyuan-bunnyhop)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-zhang-zhiyuan-bunnyhop.pdf](https://www.usenix.org/system/files/usenixsecurity23-zhang-zhiyuan-bunnyhop.pdf)
## Can a Deep Learning Model for One Architecture Be Used for Others? Retargeted-Architecture Binary Code Analysis.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#can-a-deep-learning-model-for-one-architecture-be-used-for-others-retargeted-architecture-binary-code-analysis) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#can-a-deep-learning-model-for-one-architecture-be-used-for-others-retargeted-architecture-binary-code-analysis)**
### 作者
* Junzhe Wang, George Mason University
* Matthew Sharp, University of South Carolina
* Chuxiong Wu, George Mason University
* Qiang Zeng, George Mason University
* Lannan Luo, George Mason University
### 摘要
> NLP启发的深度学习用于二进制代码分析表现出显著的性能。考虑到市场上多样化的指令集架构（ISA），能够分析各种ISA的代码是很重要的。然而，训练深度学习模型通常需要大量数据，这对于一些遭受“数据稀缺”问题的ISA如PowerPC来说是个挑战。例如，获取大规模的PowerPC恶意软件数据集是具有挑战性的。此外，针对二进制分析任务和多个ISA，为每个ISA训练一个模型需要大量时间和精力（例如数据收集、标注和清理，参数调优）。我们提出了一个新的方向，重定向架构的二进制代码分析，以解决数据稀缺问题，并减轻每个ISA的工作量。我们的想法是从一个ISA转移知识到其他ISA-即，通过耗费大量时间和精力在一个ISA上训练的模型，可以在其他ISA上进行预测而无需任何修改。我们通过两个重要任务展示了这个想法：恶意软件检测和函数相似度检测。涉及四个ISA（x86、ARM、MIPS和PowerPC）的广泛评估证明了该方法的有效性，并解释了高性能的原因。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/wang-junzhe](https://www.usenix.org/conference/usenixsecurity23/presentation/wang-junzhe)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-wang-junzhe.pdf](https://www.usenix.org/system/files/usenixsecurity23-wang-junzhe.pdf)
## Decompiling x86 Deep Neural Network Executables.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#decompiling-x86-deep-neural-network-executables) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#decompiling-x86-deep-neural-network-executables)**
### 作者
* Zhibo Liu, The Hong Kong University of Science and Technology
* Yuanyuan Yuan, The Hong Kong University of Science and Technology
* Shuai Wang, The Hong Kong University of Science and Technology
* Xiaofei Xie, Singapore Management University
* Lei Ma, University of Alberta
### 摘要
> 由于深度学习（DL）模型在异构硬件设备上的广泛使用，DL编译器将其编译为可执行文件以充分利用底层硬件原语。这种方法允许在各种计算平台上以较低的成本进行DL计算，包括CPU、GPU和各种硬件加速器。
> 
> 我们提出了BTD（Bin to DNN），一个用于深度神经网络（DNN）可执行文件的反编译器。BTD接收DNN可执行文件，并输出完整的模型规范，包括DNN操作符的类型、网络拓扑、维度和参数，这些与输入模型的规范（几乎）完全相同。BTD提供了一个实用的框架，用于处理由不同DL编译器编译，并在x86平台上启用了完整优化的DNN可执行文件。它采用基于学习的技术来推断DNN操作符，采用动态分析来揭示网络架构，并采用符号执行来推断DNN操作符的维度和参数。
> 
> 我们的评估结果表明，BTD能够准确恢复具有数百万参数（例如ResNet）的复杂DNN的完整规范。恢复的DNN规范可以重新编译成新的DNN可执行文件，其行为与输入可执行文件完全相同。我们展示了BTD如何提升两种代表性的攻击，即对抗样本生成和知识窃取，对DNN可执行文件进行攻击。我们还展示了使用BTD进行跨架构遗留代码重用，并预见BTD将用于其他关键的下游任务，如DNN安全强化和修补。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/liu-zhibo](https://www.usenix.org/conference/usenixsecurity23/presentation/liu-zhibo)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-liu-zhibo.pdf](https://www.usenix.org/system/files/usenixsecurity23-liu-zhibo.pdf)
## AIRS: Explanation for Deep Reinforcement Learning based Security Applications.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#airs-explanation-for-deep-reinforcement-learning-based-security-applications) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#airs-explanation-for-deep-reinforcement-learning-based-security-applications)**
### 作者
* Jiahao Yu, Northwestern University
* Wenbo Guo, Purdue University
* Qi Qin, ShanghaiTech University
* Gang Wang, University of Illinois at Urbana-Champaign
* Ting Wang, The Pennsylvania State University
* Xinyu Xing, Northwestern University
### 摘要
> 最近，我们目睹了深度强化学习（DRL）在许多安全应用中的成功，从恶意软件变异到自私的区块链挖矿。与所有其他机器学习方法一样，缺乏可解释性限制了其广泛应用，用户很难建立对DRL模型决策的信任。在过去的几年中，已经提出了不同的方法来解释DRL模型，但不幸的是，它们通常不适用于安全应用，其中解释的准确性、效率和模型调试能力很大程度上缺乏。
> 
> 在这项工作中，我们提出了AIRS，这是一个解释深度强化学习安全应用的通用框架。与先前的作品不同，它不仅仅指出了对代理人当前动作至关重要的特征，我们的解释是在每个步骤级别上。它建立了最终奖励和DRL代理所采取的关键步骤之间的关系，从而输出对于代理已经获取的最终奖励最为关键的步骤。通过使用四个代表性的安全关键应用程序，我们从可解释性、准确性、稳定性和效率的角度评估了AIRS。我们表明AIRS可以胜过替代的可解释DRL方法。我们还展示了AIRS的实用性，证明了我们的解释可以促进DRL模型的故障偏移，帮助用户建立对模型决策的信任，甚至有助于不适当奖励设计的识别。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/yu-jiahao](https://www.usenix.org/conference/usenixsecurity23/presentation/yu-jiahao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-yu-jiahao.pdf](https://www.usenix.org/system/files/usenixsecurity23-yu-jiahao.pdf)
## Differential Testing of Cross Deep Learning Framework APIs: Revealing Inconsistencies and Vulnerabilities.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#differential-testing-of-cross-deep-learning-framework-apis-revealing-inconsistencies-and-vulnerabilities) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#differential-testing-of-cross-deep-learning-framework-apis-revealing-inconsistencies-and-vulnerabilities)**
### 作者
* Zizhuang Deng, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Guozhu Meng, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Kai Chen, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Tong Liu, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Lu Xiang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Chunyang Chen, Monash University, Australia
### 摘要
> 随着深度学习（DL）在不同应用领域中的日益普及，开发人员通常通过模型转换来提高生产效率，例如，在不同的框架之间进行模型转换以实现模型的复用。然而，模型转换过程中的安全漏洞可能导致模型在不同的DL框架中表现出不同的行为，并引发难以预测的错误。以往的研究主要关注个别DL框架的安全性，但很少有研究能够处理跨框架转换过程中的不一致性和安全漏洞。此外，这些问题对DL应用的影响尚未得到充分探索。因此，我们提出了一种名为TENSORSCOPE的新型方法，用于检测跨框架API的安全漏洞。它以一些预期具备等效功能的对应API作为输入，然后通过差分测试来识别不一致性。我们设计了新颖的策略来提高测试效率，包括：1）联合约束分析以提高测试用例的质量；2）错误引导的测试用例修复以优化输入的约束条件。TENSORSCOPE在六个流行的DL框架的1,658个API上进行了广泛评估。结果表明，TENSORSCOPE的效果优于FreeFuzz和DocTer，分别提升了28.7%和24.3%的代码覆盖率。我们发现了257个漏洞，其中包括230个新漏洞，并获得了8个CVE和1100美元以上的奖励，得到了开发人员的认可。最重要的是，我们首次尝试利用这些不一致性，将三个模型的准确性降低了最多3.5%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/deng-zizhuang](https://www.usenix.org/conference/usenixsecurity23/presentation/deng-zizhuang)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-deng-zizhuang.pdf](https://www.usenix.org/system/files/usenixsecurity23-deng-zizhuang.pdf)
## Every Signature is Broken: On the Insecurity of Microsoft Office's OOXML Signatures.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#every-signature-is-broken-on-the-insecurity-of-microsoft-offices-ooxml-signatures) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#every-signature-is-broken-on-the-insecurity-of-microsoft-offices-ooxml-signatures)**
### 作者
* Simon Rohlmann, Ruhr University Bochum
* Vladislav Mladenov, Ruhr University Bochum
* Christian Mainka, Ruhr University Bochum
* Daniel Hirschberger, Ruhr University Bochum
* Jörg Schwenk, Ruhr University Bochum
### 摘要
> Microsoft Office是最广泛使用的办公文档应用之一。对于合同和发票等重要文档，可以对其内容进行签名以确保真实性和完整性。自2019年以来，安全研究人员已经发现了针对PDF和ODF等其他办公标准中完整性保护的攻击。由于Microsoft Office文档依赖于不同的规范和处理规则，现有的攻击方法不适用。
> 
> 我们第一次对Microsoft Office应用程序所采用的Ecma/ISO标准的Office Open XML (OOXML)签名进行了深入分析。我们的分析揭示了办公文档的结构与数字签名验证方式之间的重大差异。这些差异导致了规范和实施中的严重安全漏洞。因此，我们发现了五个新的攻击类型。每种攻击都允许攻击者在签名文档中修改内容，同时签名仍然显示为有效。
> 
> 我们在Windows和macOS上测试了不同版本的Microsoft Office以及Windows、macOS和Linux上的OnlyOffice Desktop的攻击。所有经过测试的Office版本都存在漏洞。在macOS上，我们发现了一个令人惊讶的结果：尽管Microsoft Office表明文档受到签名的保护，但签名未经验证。攻击的影响令人担忧：攻击者可以任意篡改签名文档的显示内容，而受害者无法检测到篡改。更糟糕的是，我们提出了一种通用的签名伪造攻击，允许攻击者创建一个任意文档，并应用从其他来源（如ODF文档或SAML令牌）提取的签名。对于受害者而言，该文档被显示为由受信任的实体有效签署。
> 
> 我们提出了预防未来类似问题的对策。在一个协调披露过程中，Microsoft承认并奖励我们的研究成果。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/rohlmann](https://www.usenix.org/conference/usenixsecurity23/presentation/rohlmann)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-rohlmann.pdf](https://www.usenix.org/system/files/usenixsecurity23-rohlmann.pdf)
## Downgrading DNSSEC: How to Exploit Crypto Agility for Hijacking Signed Zones.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#downgrading-dnssec-how-to-exploit-crypto-agility-for-hijacking-signed-zones) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#downgrading-dnssec-how-to-exploit-crypto-agility-for-hijacking-signed-zones)**
### 作者
* Elias Heftrig, ATHENE and Fraunhofer SIT
* Haya Shulman, ATHENE, Fraunhofer SIT, and Goethe-Universität Frankfurt
* Michael Waidner, ATHENE, Fraunhofer SIT, and Technische Universität Darmstadt
### 摘要
> 密码算法的灵活性对于DNSSEC来说是一项重要特性：它可以在现有算法不再安全时轻松部署新算法。大量的运营和研究工作致力于推动DNSSEC中新算法的部署。最近的研究表明，DNSSEC正在逐渐实现算法的灵活性：大多数支持DNSSEC的解析器可以验证多种不同的算法，并且域名越来越多地使用具有密码学强度的加密方法进行签名。
> 
> 在这项工作中，我们首次展示了在DNSSEC中的密码灵活性，尽管对使DNS使用强密码保护变得安全至关重要，但也引入了严重的漏洞。我们发现，在某些条件下，当在已签名的DNS响应中列出不支持的新算法时，解析器不会验证DNSSEC。因此，部署新密码的域名有可能会使验证解析器遭受缓存投毒攻击的风险。我们利用这一点开发了DNSSEC降级攻击，并通过对流行的DNS解析器实施实验和伦理评估，以及对公共DNS提供商和Web客户端使用的DNS解析器实施攻击。
> 
> 我们通过投毒解析器来验证DNSSEC降级攻击的成功：我们将伪造的记录插入到验证解析器的缓存中。我们的评估结果显示，在2021年期间，像Google Public DNS和Cloudflare等主要DNS提供商以及35%的Web客户端使用的DNS解析器都存在我们的攻击漏洞。在与受影响的运营商进行协调披露后，这一数字在2022年降至5.03%。
> 
> 我们追踪了导致这种情况的因素并提供建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/heftrig](https://www.usenix.org/conference/usenixsecurity23/presentation/heftrig)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-heftrig.pdf](https://www.usenix.org/system/files/usenixsecurity23-heftrig.pdf)
## Security Analysis of MongoDB Queryable Encryption.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#security-analysis-of-mongodb-queryable-encryption) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#security-analysis-of-mongodb-queryable-encryption)**
### 作者
* Zichen Gui, ETH Zurich
* Kenneth G. Paterson, ETH Zurich
* Tianxin Tang, ETH Zurich
### 摘要
> 在2022年6月，MongoDB发布了Queryable Encryption（QE），这是他们旗舰数据库产品的扩展，使得可以在加密数据上执行关键字搜索。这是将这种可搜索加密技术整合到广泛使用的数据库系统中的首次。
> 
> 我们对QE进行了独立的安全性分析。我们展示了对于QE操作至关重要并且可以被现实世界的快照对手访问的某些日志，包含了关于查询和数据的统计信息。我们的新推理攻击可以从中提取并利用这些信息，以恢复查询和数据，前提是可以对具有类似分布的原始数据的辅助数据集进行对手访问。
> 
> 我们的分析突出了将可搜索加密技术整合到现代复杂数据库系统中的挑战。特别是，我们的攻击源于QE和MongoDB现有的日志系统之间的相互作用。它们展示了这种相互作用如何损害查询和数据的隐私。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/gui](https://www.usenix.org/conference/usenixsecurity23/presentation/gui)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-gui_1.pdf](https://www.usenix.org/system/files/usenixsecurity23-gui_1.pdf)
## All cops are broadcasting: TETRA under scrutiny.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#all-cops-are-broadcasting-tetra-under-scrutiny) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#all-cops-are-broadcasting-tetra-under-scrutiny)**
### 作者
* Carlo Meijer, Midnight Blue
* Wouter Bokslag, Midnight Blue
* Jos Wetzels, Midnight Blue
### 摘要
> 本文首次公开详细介绍了TETRA（Terrestrial Trunked Radio）的安全分析，TETRA是欧洲标准，全球政府机构、警察、监狱、应急服务和军事运营商广泛使用的无线电通信系统。此外，TETRA还广泛应用于工业环境，如工厂园区、港口集装箱码头和机场，以及石油钻井平台、管道、交通和电力水务等关键基础设施的SCADA远程控制电信。TETRA内部的身份验证和加密是由秘密的专有密码套件处理的。这种保密性阻碍了公众安全评估和独立学术审查TETRA所声称的保护措施。
> 
> TETRA的广泛应用以及通信的敏感性给其密码学的弹性提出了合理的疑问。为此，我们旨在实现两个主要目标。首先，我们通过逆向工程，展示了获取底层秘密密码原语的可行性。其次，我们在使用这些原语的协议背景下对其鲁棒性进行了初步评估。
> 
> 我们提出了与TETRA相关的五个严重安全漏洞，其中两个被认为是重要的。此外，我们提供了对这些原语的描述和实现，以便进行进一步的学术审查。我们的研究结果已经在一个TETRA网络实验室中使用一台普通的无线电进行验证。
> 
> 一年多以前，我们开始通过与几个关键利益相关方的协调披露过程来传达我们的初步研究结果。在这个过程中，我们积极支持这些利益相关方在识别、开发和部署可能的缓解措施方面。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/meijer](https://www.usenix.org/conference/usenixsecurity23/presentation/meijer)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-meijer.pdf](https://www.usenix.org/system/files/usenixsecurity23-meijer.pdf)
## On the Feasibility of Malware Unpacking via Hardware-assisted Loop Profiling.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#on-the-feasibility-of-malware-unpacking-via-hardware-assisted-loop-profiling) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#on-the-feasibility-of-malware-unpacking-via-hardware-assisted-loop-profiling)**
### 作者
* Binlin Cheng, Shandong University & Hubei Normal University
* Erika A Leal, Tulane University
* Haotian Zhang, The University of Texas at Arlington
* Jiang Ming, Tulane University
### 摘要
> 硬件性能计数器（HPCs）是现代处理器的内置寄存器，用于计算各种微架构事件的发生次数。测量HPCs值是表征动态程序行为的一种经济有效的方法。由于易用性和防篡改优势，近年来在解决安全问题时，使用与机器学习模型相结合的HPCs不断增长。然而，最近针对HPCs在安全方面的适用性提出了质疑，涉及到不确定性的担忧：由中断错位和时分复用引起的测量误差会削弱在安全应用中使用HPCs的效果。
> 
> 鉴于这些警告，我们探索了驯服硬件事件的非确定性特性的方法，以应对恶意软件拆包的长期挑战，这在恶意软件分析领域一直存在。我们的研究基于两个关键观察结果。首先，拆包过程涉及到昂贵的解密或解压缩迭代，可能导致硬件事件出现可辨识的偏差。其次，基于循环的HPCs分析可以最小化由中断错位和时分复用引起的不准确性。因此，我们利用英特尔CPU提供的两种机制（即精确基于事件的采样（PEBS）和最后分支记录）开发了一种通用的硬件辅助拆包技术，称为LoopHPCs。它提供了一种新的、能够对抗混淆的解决方案，以识别多个“先写后执行”层中的原始代码。我们的实验结果表明，LoopHPCs能够在不同的英特尔CPU架构和操作系统上获取精确且一致的HPCs值。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/cheng-binlin](https://www.usenix.org/conference/usenixsecurity23/presentation/cheng-binlin)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-cheng-binlin.pdf](https://www.usenix.org/system/files/usenixsecurity23-cheng-binlin.pdf)
## Multiview: Finding Blind Spots in Access-Deny Issues Diagnosis.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#multiview-finding-blind-spots-in-access-deny-issues-diagnosis) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#multiview-finding-blind-spots-in-access-deny-issues-diagnosis)**
### 作者
* Bingyu Shen, University of California, San Diego
* Tianyi Shan, University of California, San Diego
* Yuanyuan Zhou, University of California, San Diego
### 摘要
> 访问拒绝问题很难修复，因为它涉及到可用性和安全性要求。一方面，系统管理员需要快速进行更改以启用合法访问。另一方面，系统管理员需要确保该更改不会允许过多的访问。满足安全性的第二个要求尤其具有挑战性，因为它高度依赖于系统管理员对系统环境和安全上下文的了解。知识和系统设置方面的盲点可能会阻碍系统管理员找到符合安全上下文的解决方案。不安全的修复可能会过度授予权限，在安全漏洞被利用后才会被注意到。
> 
> 本文旨在通过提供多个解决访问拒绝问题的方向来帮助系统管理员减少诊断中的盲点。我们提出了一个名为Multiview的系统，它会自动变异配置以探索修复访问拒绝问题的可能方向，并且在每个方向上进行的配置更改尽可能少地授予权限。Multiview提供了详细的诊断报告，包括与拒绝相关的访问控制配置，不同方向上可能的配置更改以允许请求，以及对整个系统访问控制状态的影响。
> 
> 我们进行了一个用户研究，评估了Multiview在五个真实世界的访问拒绝问题上的表现，共有20个参与者。Multiview可以将不安全的修复比例从44.0%降低到2.0%，同时平均减少62.0%的诊断时间。我们还在来自八个不同系统和服务器应用的112个真实世界故障案例上评估了Multiview，它可以成功诊断其中的89个案例。Multiview能够在一分钟内准确识别导致故障的配置，并为每个访问拒绝问题提供可能的解决方向。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/shen-bingyu-multiview](https://www.usenix.org/conference/usenixsecurity23/presentation/shen-bingyu-multiview)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-shen-bingyu-multiview.pdf](https://www.usenix.org/system/files/usenixsecurity23-shen-bingyu-multiview.pdf)
## Attacks are Forwarded: Breaking the Isolation of MicroVM-based Containers Through Operation Forwarding.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#attacks-are-forwarded-breaking-the-isolation-of-microvm-based-containers-through-operation-forwarding) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#attacks-are-forwarded-breaking-the-isolation-of-microvm-based-containers-through-operation-forwarding)**
### 作者
* Jietao Xiao, State Key Lab of ISN, School of Cyber Engineering, Xidian University, China
* Nanzi Yang, State Key Lab of ISN, School of Cyber Engineering, Xidian University, China
* Wenbo Shen, Zhejiang University, China
* Jinku Li, State Key Lab of ISN, School of Cyber Engineering, Xidian University, China
* Xin Guo, State Key Lab of ISN, School of Cyber Engineering, Xidian University, China
* Zhiqiang Dong, Tencent Security Yunding Lab, China
* Fei Xie, Tencent Security Yunding Lab, China
* Jianfeng Ma, State Key Lab of ISN, School of Cyber Engineering, Xidian University, China
### 摘要
> 人们提出使用虚拟化技术来加强容器之间的隔离。在设计中，每个容器运行在一个轻量级虚拟机中（称为微型虚拟机）。基于微型虚拟机的容器既享受微型虚拟机的安全性，又具有容器的高效性，因此在公有云上被广泛使用。
> 
> 然而，在本文中，我们展示了一种可以用于破坏基于微型虚拟机的容器隔离的新攻击面，称为操作转发攻击。我们的关键观察是微型虚拟机容器的某些操作被转发到宿主系统调用和宿主内核函数。攻击者可以利用操作转发来利用宿主内核的漏洞并消耗宿主资源。为了充分理解操作转发攻击的安全风险，我们将微型虚拟机容器的组件划分为三个层次，根据其功能提出相应的攻击策略来利用每个层次的操作转发。此外，我们设计了针对Kata容器和Firecracker容器的八种攻击，并在本地环境、AWS和阿里云上进行了实验。我们的结果表明，攻击者可以触发潜在的提权，降低93.4％的IO性能和75.0％的CPU性能，并甚至导致宿主崩溃。我们进一步提出了减轻这些攻击的安全建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/xiao-jietao](https://www.usenix.org/conference/usenixsecurity23/presentation/xiao-jietao)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-xiao-jietao.pdf](https://www.usenix.org/system/files/usenixsecurity23-xiao-jietao.pdf)
## AutoFR: Automated Filter Rule Generation for Adblocking.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#autofr-automated-filter-rule-generation-for-adblocking) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2023].md#autofr-automated-filter-rule-generation-for-adblocking)**
### 作者
* Hieu Le, University of California, Irvine
* Salma Elmalaki, University of California, Irvine
* Athina Markopoulou, University of California, Irvine
* Zubair Shafiq, University of California, Davis
### 摘要
> 广告拦截依赖于过滤器列表，这些列表是由一群过滤器列表作者手工策划和维护的。过滤器列表的策划是一个耗时的过程，在大量网站或长时间内无法很好地扩展。在本论文中，我们介绍了AutoFR，这是一个基于强化学习框架，完全自动化了对感兴趣网站的过滤规则创建和评估过程。我们设计了一个基于多臂赌博机的算法，用于生成可以阻止广告同时控制阻断广告和避免视觉中断之间权衡的过滤规则。我们对数千个网站进行了AutoFR的测试，并展示其高效性：为感兴趣的网站生成过滤规则只需要几分钟。AutoFR有效：相比EasyList的87%，它可以阻止86%的广告，并实现相当的视觉无破坏。此外，AutoFR生成的过滤规则对于新网站具有很好的泛化能力。我们设想AutoFR可以帮助广告拦截社区进行大规模的过滤规则生成。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity23/presentation/le](https://www.usenix.org/conference/usenixsecurity23/presentation/le)
- **PDF:** [https://www.usenix.org/system/files/usenixsecurity23-le.pdf](https://www.usenix.org/system/files/usenixsecurity23-le.pdf)
