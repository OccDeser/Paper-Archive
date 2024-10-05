# Network and Distributed System Security Symposium[2024]
## Architecting Trigger-Action Platforms for Security, Performance and Functionality.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#architecting-trigger-action-platforms-for-security-performance-and-functionality) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#architecting-trigger-action-platforms-for-security-performance-and-functionality)**
### 作者
* Deepak Sirone Jegan, University of Wisconsin-Madison
* Michael Swift, University of Wisconsin-Madison
* Earlence Fernandes, University of California San Diego
### 摘要
> 一个触发-动作平台（TAP）是一种分布式系统，允许最终用户创建程序，将他们的基于Web的服务连接起来，实现有用的自动化。例如，当新的电子表格行添加时，可以触发程序，对数据进行计算，然后调用动作，例如在Slack上发送消息。当前的TAP体系结构要求用户完全信任它们的安全运行。经验表明，对云服务的无条件信任是不合理的---攻击者一旦攻击TAP云服务就会获取数百万用户的敏感数据和设备。在这项工作中，我们重新设计了TAP，使用户在云中放置最小的信任。具体而言，我们设计和实现了TAPDance，这是一个确保在一个不可信任的TAP服务的情况下执行程序的机密性和完整性的TAP。我们利用RISC-V Keystone隔离区来实现这些安全保障，同时最大限度地减少了可信软件和硬件基础。性能结果表明，TAPDance的性能优于使用Node.js的基线TAP实现，平均延迟降低了32％，吞吐量增加了33％。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/architecting-trigger-action-platforms-for-security-performance-and-functionality/](https://www.ndss-symposium.org/ndss-paper/architecting-trigger-action-platforms-for-security-performance-and-functionality/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-34-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-34-paper.pdf)
## Bernoulli Honeywords.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#bernoulli-honeywords) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#bernoulli-honeywords)**
### 作者
* Ke Coby Wang, Duke University
* Michael K. Reiter, Duke University
### 摘要
> 欺骗密码，或称为“蜜语”，被种植在凭证数据库中，可以在登录尝试中提交时向站点警报其遭到入侵。为了有效，某些蜜语必须至少看起来与真正的密码一样容易被用户选择，而蜜语必须非常难以猜测，避免错误提示入侵警报。然而，启发式蜜语生成算法对于实现这些目标并不理想。本文中，我们探讨了一种替代策略，即防御者将蜜语选择视为伯努利过程，在该过程中除了用户选择的密码之外的每个可能的密码，以某个固定的概率独立地被选择为蜜语。我们展示了如何将伯努利蜜语集成到两个现有的系统设计中，以利用蜜语：一个基于存储帐户密码列表中用户选择的密码的秘密索引的蜜语检查器和另一个完全不利用秘密状态的蜜语设计。我们展示了伯努利蜜语使得无论攻击者获取有关网站用户的何种信息都能解析出假入侵检测概率；它们的真正和错误入侵检测概率显示出引人注目的效能；伯努利蜜语甚至可以在现代蜜语系统设计中实现性能改进。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/bernoulli-honeywords/](https://www.ndss-symposium.org/ndss-paper/bernoulli-honeywords/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-295-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-295-paper.pdf)
## Attributions for ML-based ICS Anomaly Detection: From Theory to Practice.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#attributions-for-ml-based-ics-anomaly-detection-from-theory-to-practice) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#attributions-for-ml-based-ics-anomaly-detection-from-theory-to-practice)**
### 作者
* Clement Fung, Carnegie Mellon University
* Eric Zeng, Carnegie Mellon University
* Lujo Bauer, Carnegie Mellon University
### 摘要
> 工业控制系统（ICS）管理像发电厂和水处理厂这样的关键基础设施。ICS 可以通过操纵其传感器或执行器数值来受到攻击，从而造成实际危害。一种检测此类攻击的有前途的技术是基于机器学习的异常检测，但它无法确定哪个传感器或执行器被操纵，并且使得ICS操作人员难以诊断异常的根本原因。之前的研究提出使用归因方法来识别导致ICS异常检测模型发出警报的特征，但目前尚不清楚这些归因方法在实践中的表现如何。在本文中，我们将最先进的ICS领域的归因方法与多个数据集中的真实攻击进行比较。我们发现，用于ICS异常检测的归因方法并没有像之前的研究所暗示的那样表现良好，并确定了两个主要原因。首先，异常检测器通常会立即或在攻击开始后显著时间内检测到攻击；我们发现在这些检测点计算的归因是不准确的。其次，归因的准确性在攻击属性上变化很大，并且归因方法在分类值执行器上的攻击方面存在困难。尽管存在这些挑战，我们发现归因的集合可以弥补单个归因方法的缺陷。为了实现ICS异常检测中归因的实际应用，我们为研究人员和实践者提供建议，例如需要使用多样化的数据集评估归因以及归因在非实时工作流程中的潜力。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/attributions-for-ml-based-ics-anomaly-detection-from-theory-to-practice/](https://www.ndss-symposium.org/ndss-paper/attributions-for-ml-based-ics-anomaly-detection-from-theory-to-practice/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-216-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-216-paper.pdf)
## BreakSPF: How Shared Infrastructures Magnify SPF Vulnerabilities Across the Internet.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#breakspf-how-shared-infrastructures-magnify-spf-vulnerabilities-across-the-internet) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#breakspf-how-shared-infrastructures-magnify-spf-vulnerabilities-across-the-internet)**
### 作者
* Chuhan Wang, Tsinghua University
* Yasuhiro Kuranaga, Tsinghua University
* Yihang Wang, Tsinghua University
* Mingming Zhang, Zhongguancun Laboratory
* Linkai Zheng, Tsinghua University
* Xiang Li, Tsinghua University
* Jianjun Chen, Tsinghua University; Zhongguancun Laboratory
* Haixin Duan, Tsinghua University; Quan Cheng Lab; Zhongguancun Laboratory
* Yanzhong Lin, Coremail Technology Co. Ltd
* Qingfeng Pan, Coremail Technology Co. Ltd
### 摘要
> 电子邮件欺骗攻击通过伪造发件人地址误导邮件接收者，对电子邮件系统构成严重威胁。作为一种验证发件人IP地址的电子邮件认证协议，发件人策略框架（SPF）对于防止电子邮件欺骗攻击至关重要。然而，攻击者可以绕过SPF验证并发起让人信服的欺骗攻击，从而逃避电子邮件认证。本文提出了BreakSPF，一种新的攻击框架，可以绕过SPF验证以启用电子邮件欺骗攻击。攻击者可以利用云服务、代理和共享IP池的内容交付网络（CDN）积极针对具有宽松SPF配置的域。我们利用BreakSPF对Tranco前100万个域名进行了大规模实验评估SPF部署的安全性。我们发现23,916个域名容易受到BreakSPF攻击，其中包括排名前1000名的23个域。结果强调了广泛存在的SPF配置漏洞及其潜在的削弱电子邮件系统安全性的能力。我们的研究为检测和缓解SPF漏洞以及加强电子邮件系统安全性提供了有价值的见解。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/breakspf-how-shared-infrastructures-magnify-spf-vulnerabilities-across-the-internet/](https://www.ndss-symposium.org/ndss-paper/breakspf-how-shared-infrastructures-magnify-spf-vulnerabilities-across-the-internet/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-113-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-113-paper.pdf)
## Content Censorship in the InterPlanetary File System.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#content-censorship-in-the-interplanetary-file-system) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#content-censorship-in-the-interplanetary-file-system)**
### 作者
* Srivatsan Sridhar, Stanford University
* Onur Ascigil, Lancaster University
* Navin Keizer, University College London
* François Genon, UCLouvain
* Sébastien Pierre, UCLouvain
* Yiannis Psaras, Protocol Labs
* Etienne Riviere, UCLouvain
* Michał Król, City
### 摘要
> 星际文件系统（IPFS）目前是最大的分散式存储解决方案，拥有数千个活跃参与者和数百万次每日内容传输。IPFS用作区块链智能合约、非同质化代币（NFT）和分散式应用的远程数据存储。我们提出了一种内容审查攻击，可以通过最小的投入和成本执行，防止检索IPFS网络中的任意选择内容。攻击利用IPFS核心组件Kademlia分布式哈希表（DHT）中的一个概念问题，该表用于将内容ID解析为点地址。我们提供高效的检测和缓解机制来应对这种漏洞。我们的机制实现了99.6%的检测率，并利用最小的信号和计算开销缓解了100%的检测到的攻击。我们遵循负责任的披露程序，并计划在未来版本的IPFS中部署我们的对策。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/content-censorship-in-the-interplanetary-file-system/](https://www.ndss-symposium.org/ndss-paper/content-censorship-in-the-interplanetary-file-system/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-153-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-153-paper.pdf)
## Compensating Removed Frequency Components: Thwarting Voice Spectrum Reduction Attacks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#compensating-removed-frequency-components-thwarting-voice-spectrum-reduction-attacks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#compensating-removed-frequency-components-thwarting-voice-spectrum-reduction-attacks)**
### 作者
* Shu Wang, George Mason University
* Kun Sun, George Mason University
* Qi Li, Tsinghua University
### 摘要
> 自动语音识别（ASR）为人类提供了多样的音频文本服务，使其能够与机器进行交流。然而，最近的研究表明ASR系统容易受到各种恶意音频攻击的影响。特别是，通过去除非必要的频率成分，一种新的频谱缩减攻击可以生成人类能够感知但ASR系统无法正确解释的对抗性音频。这给内容管理解决方案提出了新的挑战，以便在社交媒体平台上检测音频和视频中的有害内容。本文提出了一个名为ACE的声学补偿系统，以对抗ASR系统上的频谱缩减攻击。我们的系统设计基于两个观察结果，即频率成分间的依赖关系和扰动敏感度。首先，由于离散傅立叶变换计算不可避免地会给音频频率谱引入泄漏和混叠效应，具有相似频率的频率成分之间将具有很高的相关性。因此，考虑到相邻频率成分之间的固有依赖关系，可以通过补偿剩余成分来恢复更多原始音频。其次，由于频谱缩减攻击中去除的成分可以被视为对抗性噪声的逆过程，当对抗性音频在空中回放时，攻击成功率会降低。因此，我们可以对声学传播过程进行建模，向受到攻击的音频中添加空中扰动。我们实现了ACE的原型，并实验证明ACE可以有效减少高达87.9％的由频谱缩减攻击引起的ASR推理错误。此外，通过分析实际音频样本上的残差错误，我们总结了六种常见类型的ASR推理错误，并研究了错误的原因和潜在的缓解方案。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/compensating-removed-frequency-components-thwarting-voice-spectrum-reduction-attacks/](https://www.ndss-symposium.org/ndss-paper/compensating-removed-frequency-components-thwarting-voice-spectrum-reduction-attacks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-150-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-150-paper.pdf)
## Crafter: Facial Feature Crafting against Inversion-based Identity Theft on Deep Models.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#crafter-facial-feature-crafting-against-inversion-based-identity-theft-on-deep-models) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#crafter-facial-feature-crafting-against-inversion-based-identity-theft-on-deep-models)**
### 作者
* Shiming Wang, Shanghai Jiao Tong University
* Zhe Ji, Shanghai Jiao Tong University
* Liyao Xiang, Shanghai Jiao Tong University
* Hao Zhang, Shanghai Jiao Tong University
* Xinbing Wang, Shanghai Jiao Tong University
* Chenghu Zhou, Chinese Academy of Sciences
* Bo Li, Hong Kong University of Science and Technology
### 摘要
> 随着边缘设备（例如移动设备）的增强能力和更严格的隐私要求，最近一种趋势是深度学习应用在边缘预处理敏感原始数据并将特征传输到后端云进行进一步处理。一个典型的应用是对不同个体采集的面部图像运行机器学习（ML）服务。为了防止身份盗窃，传统方法通常依赖于基于对抗博弈的方法来剥离特征中的身份信息。然而，这种方法无法抵御自适应攻击，即攻击者对已知的防御策略采取对策的情况。
> 
> 我们提出了Crafter，这是一种部署在边缘的特征制作机制，用于保护身份信息免受自适应模型反演攻击，同时确保ML任务在云端得到适当执行。关键的防御策略是将攻击者引入一个非私密的先验条件，从而攻击者对私密身份获得的信息较少。在这种情况下，制作出的特征就像是针对具有自适应模型更新的攻击者的毒训练样本。实验结果表明Crafter成功抵御了基本的和可能的自适应攻击，而这是无法通过最先进的基于对抗博弈的方法实现的。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/crafter-facial-feature-crafting-against-inversion-based-identity-theft-on-deep-models/](https://www.ndss-symposium.org/ndss-paper/crafter-facial-feature-crafting-against-inversion-based-identity-theft-on-deep-models/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-326-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-326-paper.pdf)
## Compromising Industrial Processes using Web-Based Programmable Logic Controller Malware.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#compromising-industrial-processes-using-web-based-programmable-logic-controller-malware) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#compromising-industrial-processes-using-web-based-programmable-logic-controller-malware)**
### 作者
* Ryan Pickren, Georgia Institute of Technology
* Tohid Shekari, Georgia Institute of Technology
* Saman Zonouz, Georgia Institute of Technology
* Raheem Beyah, Georgia Institute of Technology
### 摘要
> 我们提出了一种开发可编程逻辑控制器（PLC）恶意软件的新方法，证明其比当前策略更灵活、更有弹性和更具影响力。以往对PLC的攻击要么感染PLC计算的控制逻辑部分，要么感染固件部分，而我们提出的恶意软件专门感染由PLC内部嵌入式Web服务器托管的Web应用程序。这种策略使得恶意软件可以通过管理员门户网站提供的合法Web应用程序接口（API）潜伏地攻击底层实体机器。此类攻击包括篡改传感器读数、禁用安全警报和操作物理执行器。此外，这种方法在控制逻辑和固件等现有PLC恶意软件技术方面具有显著优势，如平台独立性、易于部署和更高水平的持久性。我们的研究表明，工业控制环境中Web技术的出现引入了IT领域或消费类IoT设备中不存在的新安全问题。根据PLC控制的工业过程的不同，我们的攻击可能会导致灾难性事件甚至生命丧失。我们通过利用我们在研究中发现的零日漏洞（CVE-2022-45137、CVE-2022-45138、CVE-2022-45139和CVE-2022-45140），在广泛使用的PLC型号上使用此恶意软件的原型实施了一次Stuxnet风格的攻击来验证这些说法。我们的调查显示，每个主要PLC供应商（占全球市场份额的80%）都生产了容易受到我们提出的攻击向量影响的PLC。最后，我们讨论了潜在的对抗措施和缓解措施。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/compromising-industrial-processes-using-web-based-programmable-logic-controller-malware/](https://www.ndss-symposium.org/ndss-paper/compromising-industrial-processes-using-web-based-programmable-logic-controller-malware/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-49-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-49-paper.pdf)
## Eavesdropping on Black-box Mobile Devices via Audio Amplifier's EMR.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#eavesdropping-on-black-box-mobile-devices-via-audio-amplifiers-emr) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#eavesdropping-on-black-box-mobile-devices-via-audio-amplifiers-emr)**
### 作者
* Huiling Chen, College of Computer Science and Electronic Engineering
### 摘要
> 音频窃听在手机通话、语音信息和保密会议等日常移动使用场景中威胁到用户的隐私。因此，耳机备受移动用户青睐，因为它们提供了物理隔离来保护音频隐私。然而，我们的论文提出了首个概念验证系统Periscope，展示了耳机插入的移动设备的漏洞。该系统显示，移动设备音频放大器意外泄漏的电磁辐射（EMR）可以作为恢复受害者音频声音的有效侧信道被利用。此外，插入的耳机充当天线，增强了EMR的强度，使它们在较长距离内易于测量。我们的可行性研究和硬件分析进一步揭示EMR与设备的音频输入高度相关，但受到信号扭曲和环境噪声的影响，使得恢复音频声音极为具有挑战性。为了解决这个问题，我们开发了信号处理技术，采用谱图聚类方案清除噪声和扭曲，使EMR能够转换回音频声音。我们的攻击原型，与隐藏声音记录器大小相当，成功地在11个移动设备和6个耳机上恢复了受害者的私人音频声音，错误率低至7.44％。恢复结果可以被自然人类听觉和在线语音到文本工具识别，并且该系统对各种攻击场景变化具有鲁棒性。我们还向6个领先的移动制造商报告了Periscope。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/eavesdropping-on-black-box-mobile-devices-via-audio-amplifiers-emr/](https://www.ndss-symposium.org/ndss-paper/eavesdropping-on-black-box-mobile-devices-via-audio-amplifiers-emr/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-240-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-240-paper.pdf)
## Exploiting Sequence Number Leakage: TCP Hijacking in NAT-Enabled Wi-Fi Networks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#exploiting-sequence-number-leakage-tcp-hijacking-in-nat-enabled-wi-fi-networks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#exploiting-sequence-number-leakage-tcp-hijacking-in-nat-enabled-wi-fi-networks)**
### 作者
* Yuxiang Yang, Tsinghua University
* Xuewei Feng, Tsinghua University
* Qi Li, Tsinghua University
* Kun Sun, George Mason University
* Ziqiang Wang, Southeast University
* Ke Xu, Tsinghua University
### 摘要
> 本文揭示了流行的NAT端口保留策略和Wi-Fi路由器不充分的反向路径验证策略存在新的侧信道漏洞。这允许远程攻击者推断出同一网络中的受害客户端是否正在使用TCP与互联网上的另一台主机通信。在检测到受害者客户端与服务器之间的TCP连接存在后，攻击者可以通过发送虚假TCP数据包，利用路由器的禁用TCP窗口跟踪策略漏洞，在路由器上驱逐原始NAT映射，并重建新映射。这一手法允许攻击者截取来自服务器的TCP数据包并获取当前的序列和确认号码，从而强制关闭连接、对明文的流量进行中毒、或将服务器的入站数据包重定向到攻击者。我们对30家生产商的67个广泛使用的路由器进行了测试，发现其中52个受到了这次攻击的影响。我们在93个真实的Wi-Fi网络上进行了广泛的测量研究。实验结果表明，这些评估的Wi-Fi网络中有75个（81%）完全容易受到我们的攻击。我们的案例研究表明，通过这种方法平均需要17.5、19.4和54.5秒才能终止SSH连接、从FTP服务器下载私人文件和注入虚假HTTP响应数据包，并分别以87.4%、82.6%和76.1%的成功率。我们负责地披露了漏洞，并向所有受影响的厂商提供缓解策略，得到了积极的反馈，包括应答、CVE编号、奖励和采纳了我们的建议。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/exploiting-sequence-number-leakage-tcp-hijacking-in-nat-enabled-wi-fi-networks/](https://www.ndss-symposium.org/ndss-paper/exploiting-sequence-number-leakage-tcp-hijacking-in-nat-enabled-wi-fi-networks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-419-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-419-paper.pdf)
## Enhance Stealthiness and Transferability of Adversarial Attacks with Class Activation Mapping Ensemble Attack.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#enhance-stealthiness-and-transferability-of-adversarial-attacks-with-class-activation-mapping-ensemble-attack) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#enhance-stealthiness-and-transferability-of-adversarial-attacks-with-class-activation-mapping-ensemble-attack)**
### 作者
* Hui Xia, Ocean University of China
* Rui Zhang, Ocean University of China
* Zi Kang, Ocean University of China
* Shuliang Jiang, Ocean University of China
* Shuo Xu, Ocean University of China
### 摘要
> 尽管针对对抗攻击的可转移性已经有了大量的研究，但现有的对抗样本生成方法存在两个重大缺点：隐蔽性差和低轮攻击下的攻击效力低。为了解决以上问题，我们创造性地提出了一种对抗样本生成方法，该方法集成了多个模型的类激活映射，称为类激活映射集成攻击。我们首先使用类激活映射方法来发现深度神经网络的决策与图像区域之间的关系。然后，我们计算每个像素的类激活分数，并将其用作扰动的权重，以增强对抗样本的隐蔽性，并提高在低攻击轮数下的攻击效果。在优化过程中，我们还集成了多个模型的类激活映射，以确保对抗攻击算法的可转移性。实验结果表明，我们的方法生成的对抗样本具有高的可感知性、可转移性、低轮攻击下的攻击性能和隐蔽性。具体而言，在我们的攻击能力与最有效的攻击（VMIFGSM）相当时，我们的可感知性接近表现最佳的攻击（TPGD）。对于非目标攻击，我们的方法在攻击能力方面的平均表现比VMIFGSM高出11.69%，在对13个目标模型进行攻击时，比TPGD平均高出37.15%。对于目标攻击，我们的方法实现了最快的收敛速度、最有效的攻击效力，并在低轮攻击中明显优于八种基线方法。此外，我们的方法能够规避防御，并用于评估模型的鲁棒性。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/enhance-stealthiness-and-transferability-of-adversarial-attacks-with-class-activation-mapping-ensemble-attack/](https://www.ndss-symposium.org/ndss-paper/enhance-stealthiness-and-transferability-of-adversarial-attacks-with-class-activation-mapping-ensemble-attack/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-164-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-164-paper.pdf)
## CrowdGuard: Federated Backdoor Detection in Federated Learning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#crowdguard-federated-backdoor-detection-in-federated-learning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#crowdguard-federated-backdoor-detection-in-federated-learning)**
### 作者
* Phillip Rieger, Technical University of Darmstadt
* Torsten Krauß, University of Würzburg
* Markus Miettinen, Technical University of Darmstadt
* Alexandra Dmitrienko, University of Würzburg
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
### 摘要
> 联邦学习（FL）是一种有前途的方法，可以使多个客户端在不共享本地训练数据的情况下协同训练深度神经网络（DNN）。然而，FL容易受到后门（或有针对性的污染）攻击。这些攻击是由恶意客户端发起的，它们试图通过将特定行为引入到学习模型中来干扰学习过程，这些行为可由精心制作的输入触发。现有的FL保护机制都存在各种限制：它们只限于特定的数据分布，或由于排除良性模型或添加噪声而降低全局模型准确度，易受到适应防御感知的对手攻击，或需要服务器访问本地模型，从而允许数据推理攻击。
> 
> 本文提出了一种新颖的防御机制CrowdGuard，它有效地减轻了FL中的后门攻击，并克服了现有技术的不足之处。它利用客户端对单个模型的反馈，分析隐藏层中神经元的行为，并通过迭代剪枝方案消除污染模型。CrowdGuard采用服务器位于堆叠式聚类方案，增强其对恶意客户端反馈的抵抗力。评估结果表明，CrowdGuard在包括IID和非IID数据分布在内的各种情况下均实现了100％的真正阳性率和真正阴性率。此外，CrowdGuard能够经受适应性对手的攻击，同时保持受保护模型的原始性能。为确保机密性，CrowdGuard使用安全的且保护隐私的体系结构，在客户端和服务器端均利用可信执行环境（TEE）。）。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/crowdguard-federated-backdoor-detection-in-federated-learning/](https://www.ndss-symposium.org/ndss-paper/crowdguard-federated-backdoor-detection-in-federated-learning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-233-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-233-paper.pdf)
## Facilitating Non-Intrusive In-Vivo Firmware Testing with Stateless Instrumentation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#facilitating-non-intrusive-in-vivo-firmware-testing-with-stateless-instrumentation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#facilitating-non-intrusive-in-vivo-firmware-testing-with-stateless-instrumentation)**
### 作者
* Jiameng Shi, University of Georgia
* Wenqiang Li, Independent Researcher
* Wenwen Wang, University of Georgia
* Le Guan, University of Georgia
### 摘要
> 尽管已经开发出许多动态测试技术，但由于嵌入式设备（如基于微控制器的设备）的运行环境和资源受限，这些技术几乎无法直接应用于固件。本文通过利用微控制器设备在固件开发过程中的独特位置来解决这些挑战。也就是说，固件开发人员必须依赖一个连接到目标设备的强大工程工作站来编程和调试代码。因此，我们开发了一个名为 IPEA 的解耦式固件测试框架，将资源密集型分析任务的开销从微控制器转移到工作站。固件中只留下轻量级的“针探头”来收集内部执行信息，而无需对其进行处理。我们还使用指针能力为基础的消毒剂（IPEA-San）和灰盒模糊测试器（IPEA-Fuzz）实例化了该框架。通过将 IPEA-San 与 microcontrollers 的 AddressSanitizer 进行比较，我们展示了 IPEA-San 在现实世界固件中将内存开销降低了 62.75%，并具有更好的检测准确性。将 IPEA-Fuzz 与 IPEA-San 结合使用，我们在流行的物联网库（3）和外围驱动程序代码（4）中找到了 7 个零日漏洞。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/facilitating-non-intrusive-in-vivo-firmware-testing-with-stateless-instrumentation/](https://www.ndss-symposium.org/ndss-paper/facilitating-non-intrusive-in-vivo-firmware-testing-with-stateless-instrumentation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-116-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-116-paper.pdf)
## Front-running Attack in Sharded Blockchains and Fair Cross-shard Consensus.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#front-running-attack-in-sharded-blockchains-and-fair-cross-shard-consensus) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#front-running-attack-in-sharded-blockchains-and-fair-cross-shard-consensus)**
### 作者
* Jianting Zhang, Purdue University
* Wuhui Chen, Sun Yat-sen University
* Sifu Luo, Sun Yat-sen University
* Tiantian Gong, Purdue University
* Zicong Hong, The Hong Kong Polytechnic University
* Aniket Kate, Purdue University
### 摘要
> 分片是一种显著的区块链扩展技术。将网络分成较小的组件（称为分片）后，分片区块链可以通过协调分片内和跨分片共识协议来并行处理交易，而不会引入不一致性。然而，我们观察到分片系统存在一个关键安全问题：在协调分片内和跨分片共识协议时，交易排序操纵可能会发生，使系统容易受到攻击。具体而言，我们发现了一个新的安全问题，称为最终公正性，可以通过前置交易攻击来利用。这种攻击方式允许攻击者操纵交易的执行顺序，即使受害者的交易已经通过公平的分片内共识被处理并添加到区块链中。
> 
> 为了解决这个问题，我们提出了Haechi，这是一种新的跨分片协议，可以抵御前置交易攻击。Haechi在交易处理和执行之间引入了一个排序阶段，确保交易的执行顺序与处理顺序相同，实现最终公正性。为了适应不同的分片共识速度，Haechi采用最终公正性算法来实现在最小性能损失的情况下获得全局公平顺序。通过提供全局顺序，Haechi确保了分片之间的强一致性，使处理冲突交易的并行性更好。这些功能使Haechi成为支持实际智能合约的有前途的解决方案。
> 
> 为了评估Haechi在预防攻击方面的性能和有效性，我们使用Tendermint实现了该协议，并在分布式的AWS环境中进行了广泛的实验。我们的结果表明，与现有的跨分片共识协议相比，Haechi可以有效地防止前置交易攻击，而且性能损失很小。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/front-running-attack-in-sharded-blockchains-and-fair-cross-shard-consensus/](https://www.ndss-symposium.org/ndss-paper/front-running-attack-in-sharded-blockchains-and-fair-cross-shard-consensus/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-197-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-197-paper.pdf)
## File Hijacking Vulnerability: The Elephant in the Room.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#file-hijacking-vulnerability-the-elephant-in-the-room) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#file-hijacking-vulnerability-the-elephant-in-the-room)**
### 作者
* Chendong Yu, Institute of Information Engineering
### 摘要
> 文件是安全边界破坏的重要攻击向量，然而我们缺乏对这些攻击潜在漏洞的系统性理解。为了弥补这一空白，我们提出了对文件劫持漏洞（FHVulns）的全面分析，这是一种通过操纵文件内容或文件路径使攻击者突破安全边界的漏洞类型。我们对2020年1月至2022年10月共268个记录完整的FHVuln CVE 进行了深入的经验研究。我们的研究揭示了FHVuln的起源和触发机制，并强调现有的检测技术忽略了大多数FHVuln。因此，我们预计软件中将存在大量的零日FHVuln。我们开发了一款名为JERRY的动态分析工具，在程序执行期间模拟劫持操作以有效地检测FHVuln。我们将JERRY应用于包括微软、谷歌、Adobe和Intel在内的438个热门软件，发现了339个零日 FHVulns。我们向相应的供应商报告了JERRY发现的所有漏洞，目前已确认或修复了84个漏洞，并获得了51个CVE ID和83,400美元的漏洞赏金。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/file-hijacking-vulnerability-the-elephant-in-the-room/](https://www.ndss-symposium.org/ndss-paper/file-hijacking-vulnerability-the-elephant-in-the-room/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-38-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-38-paper.pdf)
## IDA: Hybrid Attestation with Support for Interrupts and TOCTOU.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#ida-hybrid-attestation-with-support-for-interrupts-and-toctou) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#ida-hybrid-attestation-with-support-for-interrupts-and-toctou)**
### 作者
* Fatemeh Arkannezhad, UCLA
* Justin Feng, UCLA
* Nader Sehatbakhsh, UCLA
### 摘要
> 由于嵌入式和物联网设备的广泛应用，远程测试备受关注。在各种解决方案中，基于硬件-软件协同设计的方法（混合）因其低开销但有效的方法而特别受欢迎。尽管混合方法有用，但仍存在多种限制，例如测试密钥所需的严格保护以及禁用中断和忽略检查时间和使用时间（TOCTOU）攻击等限制性操作和威胁模型。本文提出了一种新的混合测试方法IDA，它消除了禁用中断和限制性访问控制对于秘密密钥和测试代码的要求，从而提高系统的整体安全性和灵活性。IDA不使用秘密密钥来计算响应，而是通过受信任的硬件监控来验证测试过程，并仅在精确遵循测试过程时才进行认证。此外，我们提出IDA+以防止TOCTOU攻击并处理中断，它在测试请求或中断期间监视程序内存，并通知验证器程序内存的更改。我们在开源MSP430架构上实现和评估IDA和IDA+，显示出合理的运行时、内存占用和硬件开销，同时抵御各种攻击情况。将我们的方法与现有技术进行比较，我们表明它具有最小的开销，同时实现了支持中断和DMA请求和检测TOCTOU攻击等重要新属性。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/ida-hybrid-attestation-with-support-for-interrupts-and-toctou/](https://www.ndss-symposium.org/ndss-paper/ida-hybrid-attestation-with-support-for-interrupts-and-toctou/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-59-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-59-paper.pdf)
## GhostType: The Limits of Using Contactless Electromagnetic Interference to Inject Phantom Keys into Analog Circuits of Keyboards.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#ghosttype-the-limits-of-using-contactless-electromagnetic-interference-to-inject-phantom-keys-into-analog-circuits-of-keyboards) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#ghosttype-the-limits-of-using-contactless-electromagnetic-interference-to-inject-phantom-keys-into-analog-circuits-of-keyboards)**
### 作者
* Qinhong Jiang, Zhejiang University
* Yanze Ren, Zhejiang University
* Yan Long, University of Michigan
* Chen Yan, Zhejiang University
* Yumai Sun, University of Michigan
* Xiaoyu Ji, Zhejiang University
* Kevin Fu, Northeastern University
* Wenyuan Xu, Zhejiang University
### 摘要
> 键盘是各种关键计算机应用场景中的主要外围输入设备。本文对键盘传感机制进行了安全分析，并揭示了一种新的漏洞类别，可以利用电磁干扰（EMI）以非接触的方式注入虚假按键（幻影按键）到键盘的模拟电路中。除了正常的按键输入外，这些幻影按键还包括无法由人工操作员实现的按键，例如每分钟快速注入超过10,000个按键和注入实际键盘上不存在的隐藏按键。幻影按键注入的基本原理在于通过EMI耦合到矩阵电路上诱导键盘感应GPIO引脚上的虚假电压。我们从理论和经验上研究了注入信号的电压和时序要求，以建立幻影按键注入的理论。为了验证键盘传感漏洞的威胁，我们设计了GhostType，它可以导致键盘的拒绝服务，并注入随机按键以及对手的选择。我们在20个品牌的50个现成的键盘/键盘上验证了GhostType，包括薄膜/机械结构和USB/蓝牙协议。GhostType可能引起的一些后果包括完全阻止键盘操作，崩溃和关闭下游计算机以及删除计算机上的文件。最后，我们从调查中汲取了教训，并提出了包括EMI屏蔽、幻影按键检测和按键扫描信号改进在内的对策。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/ghosttype-the-limits-of-using-contactless-electromagnetic-interference-to-inject-phantom-keys-into-analog-circuits-of-keyboards/](https://www.ndss-symposium.org/ndss-paper/ghosttype-the-limits-of-using-contactless-electromagnetic-interference-to-inject-phantom-keys-into-analog-circuits-of-keyboards/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-15-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-15-paper.pdf)
## GNNIC: Finding Long-Lost Sibling Functions with Abstract Similarity.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#gnnic-finding-long-lost-sibling-functions-with-abstract-similarity) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#gnnic-finding-long-lost-sibling-functions-with-abstract-similarity)**
### 作者
* Qiushi Wu, University of Minnesota
* Zhongshu Gu, IBM Research
* Hani Jamjoom, IBM Research
* Kangjie Lu, University of Minnesota
### 摘要
> 对大型程序生成准确的调用图，尤其是在操作系统（OS）级别，是一个众所周知的挑战。这种困难源于大型程序内广泛使用间接调用，在其中调用目标的计算被延迟到运行时以实现程序多态性。因此，编译器无法静态确定间接调用边。最近的进展尝试使用类型分析在程序中全局匹配间接调用目标。然而，这些方法在处理大型目标程序或通用类型时仍然存在低精度问题。
> 
> 本文提出了GNNIC，一种基于图神经网络（GNN）的间接调用分析器。GNNIC采用一种称为抽象相似性搜索的技术，可以准确识别大型程序中的间接调用目标。该方法基于以下观察：尽管间接调用目标表现出复杂的多态行为，但它们共享共同的抽象特征，如函数描述、数据类型和调用的函数调用。我们将这些信息整合到代表性抽象图（RAG）中，并使用GNN来学习函数嵌入。抽象相似性搜索依赖于至少一个锚定目标来启动。因此，我们还提出了一种新的程序分析技术，以在每个间接调用中本地识别有效目标。从锚定目标开始，GNNIC可以扩展搜索范围，以在整个程序中查找更多间接调用的目标。GNNIC的实现利用了LLVM和GNN，并且我们在多个OS内核上进行了评估。结果表明，GNNIC通过减少86%到93%的虚假目标函数，优于最先进的基于类型的技术。此外，由GNNIC生成的抽象相似性和精确调用图可以通过发现新错误、缓解路径爆炸问题和提高静态程序分析的效率来增强安全应用。静态分析与GNNIC的结合导致在Linux和FreeBSD内核中发现了97个新错误。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/gnnic-finding-long-lost-sibling-functions-with-abstract-similarity/](https://www.ndss-symposium.org/ndss-paper/gnnic-finding-long-lost-sibling-functions-with-abstract-similarity/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-492-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-492-paper.pdf)
## LARMix: Latency-Aware Routing in Mix Networks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#larmix-latency-aware-routing-in-mix-networks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#larmix-latency-aware-routing-in-mix-networks)**
### 作者
* Mahdi Rahimi, KU Leuven
* Piyush Kumar Sharma, KU Leuven
* Claudia Diaz, KU Leuven
### 摘要
> 匿名通信系统（例如混合网络）通过引入延迟来改变数据包的流量和阻止其被追踪以实现匿名，但高延迟会对可用性产生负面影响。本文提出了一种新的混合网络延迟感知路由方案 LARMix，能够在对匿名性的影响有限的前提下降低延迟并实现负载均衡，且说明了如何设置网络以最大化匿名性并满足平均端到端延迟的约束条件。最后，我们进行了安全分析，研究了各种敌对策略，并得出结论：只要对手无法在 LARMix 路由策略计算之后有选择性地破坏混合节点，LARMix 就不会显著增加对手的优势。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/larmix-latency-aware-routing-in-mix-networks/](https://www.ndss-symposium.org/ndss-paper/larmix-latency-aware-routing-in-mix-networks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-221-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-221-paper.pdf)
## Inaudible Adversarial Perturbation: Manipulating the Recognition of User Speech in Real Time.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#inaudible-adversarial-perturbation-manipulating-the-recognition-of-user-speech-in-real-time) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#inaudible-adversarial-perturbation-manipulating-the-recognition-of-user-speech-in-real-time)**
### 作者
* Xinfeng Li, Zhejiang University
* Chen Yan, Zhejiang University
* Xuancun Lu, Zhejiang University
* Zihan Zeng, Zhejiang University
* Xiaoyu Ji, Zhejiang University
* Wenyuan Xu, Zhejiang University
### 摘要
> 自动语音识别（ASR）系统已被证明对对抗性示例（AEs）存在脆弱性。最近的成功都假设用户不会注意到或干扰攻击过程，尽管存在类似音乐/噪音的声音和语音助手的自发响应。然而，在实际用户出现的场景中，用户意识可能会使现有的攻击尝试失效，这些尝试会启动意外的声音或ASR使用。在本文中，我们旨在填补现有研究中的差距，并将攻击扩展到用户出现的情况。我们提出了VRIFLE，通过超声波传送的无声对抗扰动（IAP）攻击，可以在用户说话时操纵ASRs。可听声音和超声波之间固有的差异使得IAP传递面临前所未有的挑战，例如失真、噪音和不稳定性。在这方面，我们设计了一个新颖的超声波转换模型，以增强精心制作的扰动的物理效果，甚至能够在长距离传输时生存。我们通过在生成过程中采用一系列关于用户和真实世界变化的增强措施，进一步加强了VRIFLE的鲁棒性。这样，VRIFLE可以有效地实时操纵来自不同距离和任何用户讲话的ASR输出，采用改变和静默策略来抑制用户干扰的影响。我们在数字和物理世界中进行了大量实验，验证了VRIFLE在各种配置下的有效性，对六种防御手段的鲁棒性以及针对性的普遍性。我们还展示了VRIFLE可以通过便携式攻击设备甚至日常扬声器实现传递。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/inaudible-adversarial-perturbation-manipulating-the-recognition-of-user-speech-in-real-time/](https://www.ndss-symposium.org/ndss-paper/inaudible-adversarial-perturbation-manipulating-the-recognition-of-user-speech-in-real-time/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-30-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-30-paper.pdf)
## HEIR: A Unified Representation for Cross-Scheme Compilation of Fully Homomorphic Computation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#heir-a-unified-representation-for-cross-scheme-compilation-of-fully-homomorphic-computation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#heir-a-unified-representation-for-cross-scheme-compilation-of-fully-homomorphic-computation)**
### 作者
* Song Bian, Beihang University
* Zian Zhao, Beihang University
* Zhou Zhang, Beihang University
* Ran Mao, Beihang University
* Kohei Suenaga, Kyoto University
* Yier Jin, University of Science and Technology of China
* Zhenyu Guan, Beihang University
* Jianwei Liu, Beihang University
### 摘要
> 我们提出了一个新的编译器框架，可以自动化多个完全同态加密（Fully Homomorphic Encryption，FHE）方案的代码生成。虽然最近已经证明了合并多个FHE方案（例如CKKS和TFHE）的算法可以同时实现高执行效率和任务效用，但为现实世界应用程序开发快速的跨方案FHE算法通常需要加密专家进行重度手工调优，从而导致可用性成本高或计算效率低。为了解决可用性和效率的问题，我们设计并实现了一个基于多层中间表示（Intermediate Representation，IR）的编译器框架HEIR。为了实现高效的跨方案FHE电路编译，我们基于自定义IR方言开发了一个两阶段代码降级结构。首先，在转换阶段将明文程序及其相关数据类型转换为FHE友好方言。然后，在优化阶段，我们应用FHE特定的优化方法将转换后的方言降到我们的底层FHE库运算符。在实验中，我们实现了HEIR的整个软件堆栈，并证明可以轻松将复杂的端到端程序（例如同态K-Means聚类和同态数据聚合在数据库中）编译运行速度比最先进的FHE编译器生成的程序快72~179倍。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/heir-a-unified-representation-for-cross-scheme-compilation-of-fully-homomorphic-computation/](https://www.ndss-symposium.org/ndss-paper/heir-a-unified-representation-for-cross-scheme-compilation-of-fully-homomorphic-computation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-67-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-67-paper.pdf)
## LDR: Secure and Efficient Linux Driver Runtime for Embedded TEE Systems.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#ldr-secure-and-efficient-linux-driver-runtime-for-embedded-tee-systems) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#ldr-secure-and-efficient-linux-driver-runtime-for-embedded-tee-systems)**
### 作者
* Huaiyu Yan, Southeast University
* Zhen Ling, Southeast University
* Haobo Li, Southeast University
* Lan Luo, Anhui University of Technology
* Xinhui Shao, Southeast University
* Kai Dong, Southeast University
* Ping Jiang, Southeast University
* Ming Yang, Southeast University
* Junzhou Luo, Southeast University
### 摘要
> 诚信执行环境（TEE），如TrustZone，被广泛用于保护安全敏感程序和数据免受各种攻击。我们的目标是紧凑型TEE操作系统，如OP-TEE，实现最少的TEE内部核心API。这样的TEE操作系统通常对设备驱动程序支持不佳，我们希望通过在TEE操作系统内重用现有的Linux驱动程序来缓解这个问题。直观的方法是将所有的依赖函数移植到TEE操作系统中，以便驱动程序可以直接在TEE内部执行。但这种方法会显著扩大可信计算基础（TCB），使得TEE操作系统不再紧凑。
> 
> 在本文中，我们提出了一种TEE驱动程序执行环境——Linux驱动程序运行时（LDR）。Linux驱动程序需要两种类型的函数，库函数和Linux内核子系统函数，而紧凑型TEE操作系统没有这些函数。LDR尽可能重用现有的TEE操作系统库函数，并将内核子系统函数调用重定向到正常世界的Linux内核。LDR被实现为一个沙箱环境，通过ARM领域访问控制功能将Linux驱动程序限制在TEE内部，以解决相关的安全问题。沙箱调节驱动程序的TEE功能调用，清理参数和返回值，并强制执行前向控制流完整性。我们在NXP IMX6Q SABRE-SD评估板上实现并部署了一个LDR原型，将6个现有的Linux驱动程序适配到LDR，并评估了它们的性能。实验结果表明，LDR驱动程序可以实现与它们的Linux对应程序相媲美的性能，而开销可以忽略不计。我们是第一个重用TEE操作系统和正常世界Linux内核中的函数来运行TEE设备驱动程序并解决相关安全问题的研究者。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/ldr-secure-and-efficient-linux-driver-runtime-for-embedded-tee-systems/](https://www.ndss-symposium.org/ndss-paper/ldr-secure-and-efficient-linux-driver-runtime-for-embedded-tee-systems/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-9-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-9-paper.pdf)
## LiDAR Spoofing Meets the New-Gen: Capability Improvements, Broken Assumptions, and New Attack Strategies.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#lidar-spoofing-meets-the-new-gen-capability-improvements-broken-assumptions-and-new-attack-strategies) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#lidar-spoofing-meets-the-new-gen-capability-improvements-broken-assumptions-and-new-attack-strategies)**
### 作者
* Takami Sato, University of California
### 摘要
> LiDAR（光探测与测距）是精确长距离和宽范围3D感应的不可或缺的传感器，直接促成自动驾驶（AD）的快速部署。与此同时，这种安全关键的应用强烈激发了安全研究。最近的一系列研究发现，人们可以通过对LiDAR发射恶意激光来操纵LiDAR点云并欺骗物体探测器。然而，这些努力面临3个关键的研究差距：（1）仅考虑一个特定的LiDAR（VLP-16）；（2）假设攻击能力未经验证；（3）仅使用有限的欺骗能力建模和设置多样性对物体探测器进行评估。
> 
> 为了填补这些关键的研究差距，我们对9种受欢迎的LiDAR进行了首次大规模测量研究，涵盖了第一代和新一代LiDAR以及在5个不同数据集上培训的3种主要类型的物体探测器。为了便于测量，我们（1）确定了欺骗器的改进，显着提高了最新欺骗能力，（2）确定了一种新的物体排除攻击，克服了最新方法在新一代LiDAR上的适用性限制，（3）根据我们的测量结果对物体注入和移除攻击进行了新颖的数学建模。通过这项研究，我们能够揭示15个新颖的发现，包括不仅因测量角度的创新而完全新的发现，而且许多直接挑战了该问题空间的最新认识。我们还讨论了防御措施。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/lidar-spoofing-meets-the-new-gen-capability-improvements-broken-assumptions-and-new-attack-strategies/](https://www.ndss-symposium.org/ndss-paper/lidar-spoofing-meets-the-new-gen-capability-improvements-broken-assumptions-and-new-attack-strategies/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-350-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-350-paper.pdf)
## MOCK: Optimizing Kernel Fuzzing Mutation with Context-aware Dependency.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#mock-optimizing-kernel-fuzzing-mutation-with-context-aware-dependency) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#mock-optimizing-kernel-fuzzing-mutation-with-context-aware-dependency)**
### 作者
* Jiacheng Xu, Zhejiang University
* Xuhong Zhang, Zhejiang University
* Shouling Ji, Zhejiang University
* Yuan Tian, UCLA
* Binbin Zhao, Georgia Institute of Technology
* Qinying Wang, Zhejiang University
* Peng Cheng, Zhejiang University
* Jiming Chen, Zhejiang University
### 摘要
> 现代操作系统的核心是内核，其开发存在漏洞。覆盖率导向的模糊测试已被证明是一种有前途的软件测试技术。在对内核应用模糊测试时，其显着的方面是输入是一系列系统调用（syscalls）。由于内核是复杂而有状态的，因此需要特定的syscalls序列来建立必要的状态以触发内核深处的代码。然而，现有的模糊测试工具生成的syscalls序列在维护状态方面存在不足，使得其无法充分覆盖内核深处的容易存在漏洞的代码。
> 
> 本文提出了一种实用且有效的内核模糊测试框架MOCK，它能够学习syscall序列中的上下文依赖关系，并生成上下文感知的syscall序列。为了符合内核模糊测试的状态性，MOCK根据调用上下文自适应地变异syscall序列。MOCK将上下文感知依赖结合了自定义语言模型引导的依赖学习算法，上下文感知的syscall序列变异算法和自适应任务调度策略，以平衡探索和开采。我们的评估表明，MOCK在实现分支覆盖（高达32％的覆盖率增长），产生高质量输入（50％更多的相互关联序列）和发现漏洞（比最先进的内核模糊测试器多15％的唯一崩溃）方面表现出色。包括初始种子和预训练模型在内的各种设置进一步提高了MOCK的性能。此外，MOCK还发现了最新Linux内核中的15个唯一漏洞，包括两个CVE漏洞。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/mock-optimizing-kernel-fuzzing-mutation-with-context-aware-dependency/](https://www.ndss-symposium.org/ndss-paper/mock-optimizing-kernel-fuzzing-mutation-with-context-aware-dependency/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-131-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-131-paper.pdf)
## Modeling and Detecting Internet Censorship Events.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#modeling-and-detecting-internet-censorship-events) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#modeling-and-detecting-internet-censorship-events)**
### 作者
* Elisa Tsai, University of Michigan
* Ram Sundara Raman, University of Michigan
* Atul Prakash, University of Michigan
* Roya Ensafi, University of Michigan
### 摘要
> 公开可访问的审查数据集，例如OONI和Censored Planet，为理解全球审查事件提供了有价值的资源。然而，由于数据量庞大，审查的动态性以及同一国家的网络中可能存在异构的屏蔽政策，因此在这些数据集中进行审查事件检测是具有挑战性的。本文提出了CenDTect，这是一个基于决策树的无监督学习系统，克服了手动分析的可扩展性问题和以前的时间序列方法的可解释性问题。CenDTect采用迭代并行DBSCAN来识别具有相似阻塞模式的域名，使用经过调整过的交叉分类精度作为距离度量。该系统分析了来自Censored Planet的超过700亿个数据点，时间跨度为2019年1月至2022年12月，发现了192个国家的15,360个HTTP（S）事件群集和77个国家的1,166个DNS事件群集。通过使用新闻媒体和报告的38个潜在审查事件的策划名单来评估CenDTect的发现，我们展示了所有经过手动检查确认的事件都可以轻松地用CenDTect的输出进行表征。我们报告了32个国家中超过100个自治系统（ASes）的持久ISP屏蔽。此外，我们在2022年发现的群集中识别出11个临时屏蔽事件，这些事件发生在选举、政治动荡、抗议和战争期间。我们的方法提供了信息丰富且可解释的输出，使审查数据更容易为数据使用者，包括研究人员、记者和非政府组织所使用。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/modeling-and-detecting-internet-censorship-events/](https://www.ndss-symposium.org/ndss-paper/modeling-and-detecting-internet-censorship-events/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-409-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-409-paper.pdf)
## LMSanitator: Defending Prompt-Tuning Against Task-Agnostic Backdoors.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#lmsanitator-defending-prompt-tuning-against-task-agnostic-backdoors) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#lmsanitator-defending-prompt-tuning-against-task-agnostic-backdoors)**
### 作者
* Chengkun Wei, Zhejiang University
* Wenlong Meng, Zhejiang University
* Zhikun Zhang, CISPA Helmholtz Center for Information Security and Stanford University
* Min Chen, CISPA Helmholtz Center for Information Security
* Minghu Zhao, Zhejiang University
* Wenjing Fang, Ant Group
* Lei Wang, Ant Group
* Zihui Zhang, Zhejiang University
* Wenzhi Chen, Zhejiang University
### 摘要
> *Prompt-tuning* 已经成为部署大规模语言模型的一种吸引人的范式，因为它具有强大的下游任务性能和高效的多任务服务能力。尽管被广泛采纳，我们凭经验证明 *Prompt-tuning* 容易受到下游任务无关后门的攻击，这些后门存在于预训练模型中，可以影响任意的下游任务。当前最先进的后门检测方法无法抵御任务无关的后门，因为它们很难在消除后门触发器方面收敛。为了解决这个问题，我们提出了 LMSanitator，一种新颖的方法，用于检测和消除 Transformer 模型上的任务无关后门。LMSanitator 旨在反转 *预定义攻击向量*（当输入嵌入触发器时，预训练模型的输出）而不是直接反转触发器，从而获得更好的收敛性能和后门检测准确性。LMSanitator 进一步利用了 *Prompt-tuning* 冻结预训练模型的特性，在推断阶段执行准确和快速的输出监测和输入清理。对多个语言模型和自然语言处理任务进行的大量实验表明了 LMSanitator 的有效性。例如，LMSanitator 在 960 个模型上实现了 92.8% 的后门检测准确率，并在大多数情况下将攻击成功率降低到低于 1%。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/lmsanitator-defending-prompt-tuning-against-task-agnostic-backdoors/](https://www.ndss-symposium.org/ndss-paper/lmsanitator-defending-prompt-tuning-against-task-agnostic-backdoors/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-238-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-238-paper.pdf)
## MPCDiff: Testing and Repairing MPC-Hardened Deep Learning Models.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#mpcdiff-testing-and-repairing-mpc-hardened-deep-learning-models) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#mpcdiff-testing-and-repairing-mpc-hardened-deep-learning-models)**
### 作者
* Qi Pang, Carnegie Mellon University
* Yuanyuan Yuan, HKUST
* Shuai Wang, HKUST
### 摘要
> 最近，安全多方计算（MPC）作为一种概念，使多个参与方能够进行隐私保护的机器学习，而不会泄漏敏感数据或预训练模型的细节给其他参与方，已经变得非常突出。工业界和社区一直在积极开发和推广高质量的MPC框架（例如基于TensorFlow和PyTorch），以实现MPC加固模型的使用，极大地简化了将深度学习模型与MPC基元集成的开发周期。
> 
> 尽管MPC框架的发展和应用繁荣，但对这些MPC框架正确性的原则性和系统性理解尚不存在。为了填补这一关键空白，本文介绍了MPCDiff，这是一个差分测试框架，能够有效地发现导致MPC加固模型及其明文版本产生异常输出的输入。我们进一步开发了定位导致错误的MPC加固模型计算单元并自动修复这些缺陷的技术。
> 
> 我们使用由Meta（Facebook），阿里巴巴集团，Cape Privacy和OpenMined开发的真实世界流行的深度学习MPC框架来评估MPCDiff。MPCDiff成功检测出导致大量异常输出的一千多个输入。与常规输入相比，这些导致偏差的输入在视觉上是有意义的，这表明我们的发现可能会在MPC框架的日常使用中造成很大的困惑。在定位和修复导致错误的计算单元后，MPC加固模型的鲁棒性可以显著提高，同时不损失准确性，额外开销可以忽略不计。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/mpcdiff-testing-and-repairing-mpc-hardened-deep-learning-models/](https://www.ndss-symposium.org/ndss-paper/mpcdiff-testing-and-repairing-mpc-hardened-deep-learning-models/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-380-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-380-paper.pdf)
## Low-Quality Training Data Only? A Robust Framework for Detecting Encrypted Malicious Network Traffic.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#low-quality-training-data-only-a-robust-framework-for-detecting-encrypted-malicious-network-traffic) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#low-quality-training-data-only-a-robust-framework-for-detecting-encrypted-malicious-network-traffic)**
### 作者
* Yuqi Qing, Tsinghua University
* Qilei Yin, Zhongguancun Laboratory
* Xinhao Deng, Tsinghua University
* Yihao Chen, Tsinghua University
* Zhuotao Liu, Tsinghua University
* Kun Sun, George Mason University
* Ke Xu, Tsinghua University
* Jia Zhang, Tsinghua University
* Qi Li, Tsinghua University
### 摘要
> 机器学习（ML）在精确检测加密网络流量中的恶意流量方面具有前景；然而，收集包含足够量的带有正确标签的加密恶意数据的训练数据集具有挑战性。当ML模型使用低质量训练数据进行训练时，它们会受到性能下降的影响。在本文中，我们旨在解决现实世界中存在的低质量训练数据集问题，即，检测由不断演化的恶意软件生成的加密恶意流量。我们开发了RAPIER，充分利用了特征空间中正常和恶意流量数据的不同分布，其中正常数据在某个区域内严密分布，而恶意数据则分散在整个特征空间中以增加模型训练的训练数据。RAPIER包括两个预处理模块，将流量转换为特征向量并纠正标签噪声。我们在两个公共数据集和一个合并数据集上评估了我们的系统。每个数据集都有1000个样本和45％的噪声，我们的系统分别实现了0.770、0.776和0.855的F1分数，相对于现有方法的平均提高量分别为352.6％、284.3％和214.9％。此外，我们使用从安全企业获得的真实数据集对RAPIER进行评估。RAPIER有效地实现了加密恶意流量检测，并获得了最佳的0.773的F1得分，平均改善现有方法的F1得分达272.5％。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/low-quality-training-data-only-a-robust-framework-for-detecting-encrypted-malicious-network-traffic/](https://www.ndss-symposium.org/ndss-paper/low-quality-training-data-only-a-robust-framework-for-detecting-encrypted-malicious-network-traffic/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-81-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-81-paper.pdf)
## ORL-AUDITOR: Dataset Auditing in Offline Deep Reinforcement Learning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#orl-auditor-dataset-auditing-in-offline-deep-reinforcement-learning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#orl-auditor-dataset-auditing-in-offline-deep-reinforcement-learning)**
### 作者
* Linkang Du, Zhejiang University
* Min Chen, CISPA Helmholtz Center for Information Security
* Mingyang Sun, Zhejiang University
* Shouling Ji, Zhejiang University
* Peng Cheng, Zhejiang University
* Jiming Chen, Zhejiang University
* Zhikun Zhang, CISPA Helmholtz Center for Information Security and Stanford University
### 摘要
> 数据是人工智能中的关键资产，高质量的数据集可以显著提高机器学习模型的性能。在诸如自动驾驶汽车之类的安全关键领域，离线深度强化学习（DRL）经常用于在预先收集的数据集上训练模型，而不是通过与真实环境互动来训练这些模型作为在线DRL。为了支持这些模型的发展，许多机构使用开源许可协议公开提供数据集，但这些数据集存在潜在的滥用或侵权风险。向数据集中注入水印可以保护数据的知识产权，但无法处理已经发布并在之后不太可能更改的数据集。其他现有解决方案，例如数据集推断和成员推断，由于离线DRL场景中不同的模型行为特征和离线设置约束，无法很好地发挥作用。
> 
> 在本文中，我们提倡一种新的范式，利用累积奖励可作为区分特定数据集上训练的DRL模型的唯一标识符的事实。为此，我们提出了ORL-AUDITOR，这是首个针对离线RL场景的轨迹级数据集审计机制。我们对多个离线DRL模型和任务进行的实验表明了ORL-AUDITOR的有效性，审计准确率超过95％，误报率低于2.88％。我们还通过研究各种参数设置，提供了对ORL-AUDITOR实际实施的宝贵见解。此外，我们展示了ORL-AUDITOR对来自Google和DeepMind的开源数据集的审计能力，突显了其在审计已发布数据集时的有效性。ORL-AUDITOR开源地址为https://github.com/link-zju/ORL-Auditor。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/orl-auditor-dataset-auditing-in-offline-deep-reinforcement-learning/](https://www.ndss-symposium.org/ndss-paper/orl-auditor-dataset-auditing-in-offline-deep-reinforcement-learning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-184-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-184-paper.pdf)
## On Precisely Detecting Censorship Circumvention in Real-World Networks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#on-precisely-detecting-censorship-circumvention-in-real-world-networks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#on-precisely-detecting-censorship-circumvention-in-real-world-networks)**
### 作者
* Ryan Wails, Georgetown University
### 摘要
> 对现实审查威胁的理解有助于发展更具韧性的审查规避系统，这对推进人权和基本自由至关重要。我们认为目前用于检测 Tor 中规避流量的最先进方法是不切实际的：它们受到虚假阳性的影响（>94%），即使考虑保守地高基础率（10-3）也是如此。本文介绍了一种检测审查规避的新方法，其中将基于深度学习的流量分类器与基于主机的检测策略相结合，该策略整合了随时间变化的多个流量提供的信息。利用超过 600,000 个目的地的超过 60,000,000 个真实网络流量，我们演示了我们的检测方法如何在时间上积累信息，从而变得更加精确，使我们能够完美地识别绕过审查的服务器，并且没有虚假阳性。我们的评估考虑了涵盖六个数量级的规避流基础率范围和真实协议分布。我们的研究结果表明，未来的规避系统设计需要更加谨慎地考虑基于主机的检测策略，并提出了对抵抗这些攻击更有抵抗力的设计建议。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/on-precisely-detecting-censorship-circumvention-in-real-world-networks/](https://www.ndss-symposium.org/ndss-paper/on-precisely-detecting-censorship-circumvention-in-real-world-networks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-394-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-394-paper.pdf)
## Overconfidence is a Dangerous Thing: Mitigating Membership Inference Attacks by Enforcing Less Confident Prediction.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#overconfidence-is-a-dangerous-thing-mitigating-membership-inference-attacks-by-enforcing-less-confident-prediction) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#overconfidence-is-a-dangerous-thing-mitigating-membership-inference-attacks-by-enforcing-less-confident-prediction)**
### 作者
* Zitao Chen, University of British Columbia
* Karthik Pattabiraman, University of British Columbia
### 摘要
> 机器学习（ML）模型容易遭到成员推理攻击（MIAs），此攻击可确定特定输入是否用于训练目标模型。虽然已经有许多努力缓解MIAs的方法，但它们通常会面临有限的隐私保护、大量精度下降和/或需要难以获取的额外数据等问题。本研究提出了一种防御技术HAMP，可同时实现强大的成员隐私和高精度，而不需要额外数据。为了缓解不同形式的MIAs，我们观察到它们可以统一为它们都利用ML模型对不同代理预测训练样本的过度自信。这推动了我们的设计，通过使模型产生更少自信的预测，从而迫使模型在训练和测试样本上表现得相似。HAMP由高熵软标签的新型训练框架和基于熵的正则化器组成，可约束模型的预测，同时仍保持高精度。为了进一步降低隐私风险，HAMP统一修改所有预测输出，使其变为低自信输出，同时保留精度，这有效地掩盖了成员和非成员预测之间的差异。我们在五个基准数据集上进行了广泛评估，并表明HAMP提供了一致的高精度和强大的成员隐私。与七种最先进的防御技术相比，我们的比较表明，HAMP在隐私-效用权衡方面实现了更好的成果。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/overconfidence-is-a-dangerous-thing-mitigating-membership-inference-attacks-by-enforcing-less-confident-prediction/](https://www.ndss-symposium.org/ndss-paper/overconfidence-is-a-dangerous-thing-mitigating-membership-inference-attacks-by-enforcing-less-confident-prediction/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-14-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-14-paper.pdf)
## Pisces: Private and Compliable Cryptocurrency Exchange.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#pisces-private-and-compliable-cryptocurrency-exchange) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#pisces-private-and-compliable-cryptocurrency-exchange)**
### 作者
* Ya-Nan Li, The University of Sydney
* Tian Qiu, The University of Sydney
* Qiang Tang, The University of Sydney
### 摘要
> 加密货币交易平台（如Coinbase）使用户能够方便地购买和出售加密货币，就像交易股票/商品一样。但是，由于区块链的本质，当用户提取硬币（即将硬币转移到外部的链上账户）时，平台可以了解所有未来的交易。这与传统的股票交易所形成鲜明对比，因为用户的所有外部活动都始终对平台隐藏。由于该平台知道用户高度敏感的私人信息（例如护照号码、银行信息等），将所有（链上）交易联系起来引发了关于加密货币交易平台潜在灾难性数据泄露的严重隐私问题。
> 
> 在本文中，我们提出了一个首次恢复用户匿名性的加密货币交易所。令我们惊讶的是，看似经过深入研究的隐私/匿名问题在这种情况下存在着几个新的挑战。由于公共区块链和内部交易活动自然提供了许多不平凡的泄漏，内部隐私不仅在通常意义上有用，而且成为重新获得用户交易基本匿名的必要条件。我们还确保用户不能进行双重花费，并且即使在私人环境中，用户也必须正确报告累计利润以用于税务目的。我们对系统进行了仔细的建模和高效的构建，实现了恒定计算和通信开销（只使用简单的加密工具和严谨的安全分析）；我们还实现了我们的系统并评估了其实际性能。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/pisces-private-and-compliable-cryptocurrency-exchange/](https://www.ndss-symposium.org/ndss-paper/pisces-private-and-compliable-cryptocurrency-exchange/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-220-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-220-paper.pdf)
## NODLINK: An Online System for Fine-Grained APT Attack Detection and Investigation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#nodlink-an-online-system-for-fine-grained-apt-attack-detection-and-investigation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#nodlink-an-online-system-for-fine-grained-apt-attack-detection-and-investigation)**
### 作者
* Shaofei Li, Key Laboratory of High-Confidence Software Technologies 
### 摘要
> Advance Persistent Threats (APT) 攻击困扰着现代企业，导致了重大的财务损失。为了应对这些攻击，研究人员提出了使用溯源图来对系统实体及其依赖关系建模，以捕捉 APT 攻击复杂而隐秘的情景的技术。特别是，为了加快攻击检测并减少财务损失，迫切需要在线溯源为基础的检测系统，以在时间和资源有限的约束下检测和调查 APT 攻击。不幸的是，现有的在线系统通常为了降低计算复杂性而牺牲了检测粒度，并产生了具有超过 100,000 个节点的溯源图，给安全管理员解释检测结果带来了挑战。在本文中，我们设计并实施了 NodLink，这是第一个在不牺牲检测粒度的情况下保持高检测准确度的在线检测系统。我们认为，在在线溯源为基础的检测系统中的 APT 攻击检测过程可以建模为 Steiner 树问题（STP），它具有高效的在线近似算法，可以恢复具有理论上有界误差的简洁的攻击相关的溯源图。为了利用 STP 近似算法的框架进行 APT 攻击检测，我们提出了一个新颖的内存缓存设计，一个高效的攻击筛选方法，以及一个比传统算法更高效的新的 STP 近似算法，同时保持相同的复杂性。我们在生产环境中评估了 NodLink。开放世界实验显示，NodLink在检测和调查准确性方面优于两个最先进的在线溯源分析系统，并具有相同或更高的吞吐量。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/nodlink-an-online-system-for-fine-grained-apt-attack-detection-and-investigation/](https://www.ndss-symposium.org/ndss-paper/nodlink-an-online-system-for-fine-grained-apt-attack-detection-and-investigation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-204-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-204-paper.pdf)
## SigmaDiff: Semantics-Aware Deep Graph Matching for Pseudocode Diffing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#sigmadiff-semantics-aware-deep-graph-matching-for-pseudocode-diffing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#sigmadiff-semantics-aware-deep-graph-matching-for-pseudocode-diffing)**
### 作者
* Lian Gao, University of California Riverside
* Yu Qu, University of California Riverside
* Sheng Yu, University of California
### 摘要
> 伪代码比较可以准确地定位相似部分，并捕获给定二进制文件的反编译的伪代码之间的差异。在许多安全场景中，如代码抄袭检测、谱系分析、补丁、漏洞分析等，它特别有用。然而，现有的伪代码比较和二进制比较工具存在精度低和可扩展性差的问题，因为它们要么依赖于手动设计的启发式方法（例如Diaphora），要么依赖于像矩阵分解（例如DeepBinDiff）这样的大量计算。为了解决这些限制，本文提出了一个语义感知的、基于深度神经网络的模型，称为SigmaDiff。SigmaDiff首先构建IR（中间表示）级别的程序依赖图（IPDG）。然后它使用轻量级符号分析提取初始节点特征并定位神经网络模型的训练节点。SigmaDiff然后利用最先进的图匹配模型Deep Graph Matching Consensus（DGMC）来匹配IPDG中的节点。SigmaDiff还介绍了几个对DGMC设计的重要更新，例如预训练和微调模式。实验结果表明，SigmaDiff在精度和效率方面显著优于现有的基于启发式和深度学习的技术。它能够准确地定位一种广泛使用的视频会议应用程序中的八个漏洞。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/sigmadiff-semantics-aware-deep-graph-matching-for-pseudocode-diffing/](https://www.ndss-symposium.org/ndss-paper/sigmadiff-semantics-aware-deep-graph-matching-for-pseudocode-diffing/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-208-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-208-paper.pdf)
## Symphony: Path Validation at Scale.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#symphony-path-validation-at-scale) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#symphony-path-validation-at-scale)**
### 作者
* Anxiao He, Zhejiang University
* Jiandong Fu, Zhejiang University
* Kai Bu, Zhejiang University
* Ruiqi Zhou, Zhejiang University
* Chenlu Miao, Zhejiang University
* Kui Ren, Zhejiang University
### 摘要
> 路径验证被认为是保障未来互联网架构安全的基础解决方案。它使终端主机能够为其流量指定转发路径，并验证流量是否按照指定路径进行。与当前互联网架构保持数据包转发对终端主机保持不可控制和透明不同，路径验证使终端主机受益于灵活性、安全性和隐私性。该设计的关键在于强制路由器将其凭据嵌入到数据包头部的加密证明中。这种证明需要足够复杂的计算来保证不可伪造。这对于单个数据包的验证效率构成了一个不可避免的障碍。本文中，我们提出了群体验证来以组的方式实现路径验证。将负载分摊到组中的数据包上，群体验证承诺在不影响安全性的情况下提高验证效率。我们通过Symphony实现了聚合验证，集成了各种设计技巧并形式上证明了安全属性。与最先进的EPIC相比，Symphony将数据包处理速度提高了3.78×∼18.40×，并增加了通信吞吐量1.13×∼6.11×。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/symphony-path-validation-at-scale/](https://www.ndss-symposium.org/ndss-paper/symphony-path-validation-at-scale/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-104-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-104-paper.pdf)
## TrustSketch: Trustworthy Sketch-based Telemetry on Cloud Hosts.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#trustsketch-trustworthy-sketch-based-telemetry-on-cloud-hosts) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#trustsketch-trustworthy-sketch-based-telemetry-on-cloud-hosts)**
### 作者
* Zhuo Cheng, Carnegie Mellon University
* Maria Apostolaki, Princeton University
* Zaoxing Liu, University of Maryland
* Vyas Sekar, Carnegie Mellon University
### 摘要
> 云服务提供商在软件中部署遥测工具来进行端节点网络分析。最近的努力表明，草图作为一种近似数据结构，对于基于软件的遥测是一个很有前途的基础，因为它们在低资源占用的情况下为许多统计数据提供了高保真度。然而，攻击者可以通过软件漏洞来破坏基于草图的遥测结果。因此，他们可以使遥测的使用失去作用，例如，避免攻击检测或导致会计差异。在本文中，我们正式定义了值得信赖的基于草图的遥测的要求，并表明之前的工作由于草图的概率性质和性能要求而无法满足这些要求。我们提出了可信草图遥测的设计和实施TRUSTSKETCH，这是一个通用的框架，可以支持各种草图算法的值得信赖的遥测。我们证明了TRUSTSKETCH能够及时发现基于草图的遥测的各种攻击，而只产生最小的额外开销。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/trustsketch-trustworthy-sketch-based-telemetry-on-cloud-hosts/](https://www.ndss-symposium.org/ndss-paper/trustsketch-trustworthy-sketch-based-telemetry-on-cloud-hosts/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-65-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-65-paper.pdf)
## The Dark Side of E-Commerce: Dropshipping Abuse as a Business Model.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#the-dark-side-of-e-commerce-dropshipping-abuse-as-a-business-model) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#the-dark-side-of-e-commerce-dropshipping-abuse-as-a-business-model)**
### 作者
* Arjun Arunasalam, Purdue University
* Andrew Chu, University of Chicago
* Muslum Ozgur Ozmen, Purdue University
* Habiba Farrukh, University of California
### 摘要
> 电子商务对今天的社会具有全球性的影响。鉴于在线购买商品的需求增加，电子商务平台经常把商品销售推迟给第三方卖家。其中一些卖家是代理商，即充当中间人，通过第三方供应商满足他们的客户订单。尽管这使得客户可以在电子商务网站上访问更多产品，但我们发现，滥用允许的代理模型的滥用代理存在，欺骗客户，损害其他电子商务卖家。在本文中，我们提出了第一份关于滥用代理商特征的综合研究，并揭示了他们用于上架商品和逃避电子商务市场账户暂停的有害策略。我们爬取了网络，发现了滥用代理物流社区使用的在线论坛、教学材料和软件。我们归纳编码论坛线程和教学材料，并阅读软件文档，在可能的情况下进行安装，以创建此滥用的端到端生命周期。我们还确定了滥用代理人使用的剥削性策略，以确保在平台上的持久性。然后，我们采访了六位有电子商务经验的人士（法律顾问和卖家），并了解了滥用代理物流如何给客户和卖家带来伤害。通过这个过程，我们提出了五个特征，值得未来研究自动检测电子商务平台上的滥用代理。我们的努力呈现了滥用代理人如何运作以及销售商和消费者如何与他们互动的全面视图，为激励未来调查打击这些有害行动提供了框架。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/the-dark-side-of-e-commerce-dropshipping-abuse-as-a-business-model/](https://www.ndss-symposium.org/ndss-paper/the-dark-side-of-e-commerce-dropshipping-abuse-as-a-business-model/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-39-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-39-paper.pdf)
## ShapFuzz: Efficient Fuzzing via Shapley-Guided Byte Selection.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#shapfuzz-efficient-fuzzing-via-shapley-guided-byte-selection) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#shapfuzz-efficient-fuzzing-via-shapley-guided-byte-selection)**
### 作者
* Kunpeng Zhang, Shenzhen International Graduate School
### 摘要
> 基于变异的模糊测试在发现未见代码和暴露错误方面非常受欢迎且有效。然而，只有少数研究集中在量化输入字节的重要性上，这指的是一个字节对于发现新代码的贡献程度。它们通常关注获取输入字节与路径约束之间的关系，忽略了并非所有与约束相关的字节都能发现新代码这一事实。本文利用 Shapely 分析来理解字节位置对模糊测试性能的影响，并发现某些字节位置的贡献大于其他位置，而这种属性通常适用于不同的种子。基于这一观察结果，我们提出了一种新颖的模糊测试解决方案 ShapFuzz，以指导字节选择和变异。具体来说，ShapFuzz 在模糊测试过程中通过低开销更新字节的 Shapley 值（重要性），并利用上下文多臂老虎机来权衡变异高 Shapley 值字节和低频选择字节之间的关系。我们基于 AFL++ 实现了这一解决方案的原型，即 ShapFuzz。我们将 ShapFuzz 与十种最先进的模糊器进行评估，包括五种字节调度增强型模糊器和五种常用模糊器。与字节调度增强型模糊器相比，ShapFuzz 在三组不同的初始种子上比最佳基线发现更多边缘并暴露更多错误。与常用模糊器相比，ShapFuzz 比最佳对照模糊器暴露了 20 个以上的错误，并在 MAGMA 比最佳基线多发现了 6 个 CVE。此外，ShapFuzz 在程序的最新版本中发现了 11 个新错误，其中 3 个得到了供应商的确认。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/shapfuzz-efficient-fuzzing-via-shapley-guided-byte-selection/](https://www.ndss-symposium.org/ndss-paper/shapfuzz-efficient-fuzzing-via-shapley-guided-byte-selection/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-134-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-134-paper.pdf)
## Unus pro omnibus: Multi-Client Searchable Encryption via Access Control.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#unus-pro-omnibus-multi-client-searchable-encryption-via-access-control) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#unus-pro-omnibus-multi-client-searchable-encryption-via-access-control)**
### 作者
* Jiafan Wang, Data61
### 摘要
> 搜索加密使得不受信任的云服务器可以存储作者加密的关键词-文档元组，并且可以使用读者的令牌进行关键词搜索。多作者方案自然而然地具有广泛的适用性；然而，目前尚不清楚如何实现单作者系统的独特特性，即仅通过结果集进行搜索遍历和向前隐私针对任何新数据使旧的搜索令牌失效。王和周（Usenix Security 2022）的最新研究结果导致了对现有关键字的额外遍历，并且削弱了仅周期性使之前发出的搜索令牌失效的向前隐私。
> 
> 我们提出了可委派的可搜索加密（DSE），针对多作者多读者设置具有最佳的搜索时间。除了向前隐私之外，DSE还支持针对恶意客户端的新完整性威胁和公钥方案固有的关键词猜测攻击的安全措施。这些同时可以通过数据所有者的一次性委派更新和/或搜索权限以及我们量身定制的可移位多接收方计数加密概念实现。DSE还受益于王和周的混合可搜索加密思路，但在微观水平上。我们的评估证实了在真实数据集上搜索时间的数量级改进。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/unus-pro-omnibus-multi-client-searchable-encryption-via-access-control/](https://www.ndss-symposium.org/ndss-paper/unus-pro-omnibus-multi-client-searchable-encryption-via-access-control/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-288-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-288-paper.pdf)
## Transpose Attack: Stealing Datasets with Bidirectional Training.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#transpose-attack-stealing-datasets-with-bidirectional-training) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#transpose-attack-stealing-datasets-with-bidirectional-training)**
### 作者
* Guy Amit, Ben-Gurion University
* Moshe Levy, Ben-Gurion University
* Yisroel Mirsky, Ben-Gurion University
### 摘要
> 深度神经网络通常以正向方式执行。然而，在这项工作中，我们确定了一种漏洞，使模型能够在两个方向上和不同任务上进行训练。攻击者可以利用这种能力在看似合法的模型内隐藏恶意模型。此外，在这项工作中，我们展示了神经网络可以被教导系统地记忆和检索数据集中的特定样本。这些发现共同揭示了一种新方法，即攻击者可以在合法模型的假象下从受保护的学习环境中转移数据集。
> 
> 我们专注于数据外流攻击，并展示现代体系结构可以用来秘密地外流数万个样本，保真度高到足以危害数据隐私甚至训练新模型。此外，为了缓解这一威胁，我们提出了一种检测受感染模型的新方法。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/transpose-attack-stealing-datasets-with-bidirectional-training/](https://www.ndss-symposium.org/ndss-paper/transpose-attack-stealing-datasets-with-bidirectional-training/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-325-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-325-paper.pdf)
## 5G-Spector: An O-RAN Compliant Layer-3 Cellular Attack Detection Service.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#5g-spector-an-o-ran-compliant-layer-3-cellular-attack-detection-service) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#5g-spector-an-o-ran-compliant-layer-3-cellular-attack-detection-service)**
### 作者
* Haohuang Wen, The Ohio State University
* Phillip Porras, SRI International
* Vinod Yegneswaran, SRI International
* Ashish Gehani, SRI International
* Zhiqiang Lin, The Ohio State University
### 摘要
> 在过去几年中，移动安全社区发现了针对链路和会话建立协议的各种漏洞。这些漏洞可以在软件定义无线电（SDR）上实现，通过干扰、欺骗或淹没第三层（L3）消息来破坏安全和隐私，这些漏洞仍然适用于最新的5G移动网络标准。有趣的是，与之前的封闭（专有）移动网络基础设施不同，5G网络正在向更智能和基于开放标准的完全互操作的移动架构转移，称为开放RAN或O-RAN。将移动基础设施过渡到软件定义的架构抽象的涵义对INFOSEC社区来说非常重要，因为它允许我们使用以安全为重点的协议审核服务和漏洞检测扩展移动数据平面和控制平面。基于这种设计，我们提出了5G-SPECTOR，这是第一个针对O-RAN中广泛存在的L3协议漏洞检测的综合框架。它具有一种名为MOBIFLOW的新型安全审计流，该流传输细粒度的蜂窝网络遥测数据，并具有可编程的控制平面xApp，称为MOBIEXPERT。我们提供了5G-SPECTOR的可扩展原型，可以实时检测7种类型的蜂窝攻击。我们还演示了其可扩展性，可以检测11种未知攻击以及31种真实世界的蜂窝跟踪，并具有有效性能（高准确性，无误报）和低（<2％ CPU，<100 MB内存）开销。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/5g-spector-an-o-ran-compliant-layer-3-cellular-attack-detection-service/](https://www.ndss-symposium.org/ndss-paper/5g-spector-an-o-ran-compliant-layer-3-cellular-attack-detection-service/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-527-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-527-paper.pdf)
## 50 Shades of Support: A Device-Centric Analysis of Android Security Updates.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#50-shades-of-support-a-device-centric-analysis-of-android-security-updates) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#50-shades-of-support-a-device-centric-analysis-of-android-security-updates)**
### 作者
* Abbas Acar, Florida International University
* Güliz Seray Tuncay, Google
* Esteban Luques, Florida International University
* Harun Oz, Florida International University
* Ahmet Aris, Florida International University
* Selcuk Uluagac, Florida International University
### 摘要
> 安卓操作系统是目前活跃移动设备最多的操作系统，已经超过了30亿台。与任何软件一样，发现安卓设备上的漏洞并及时应用补丁都至关重要。安卓开放源代码项目发起了改进安全更新可追溯性的努力，通过为设备分配安全补丁级别来提高可追溯性。尽管此举为漏洞提供了更好的可追溯性，但并未完全解决终端用户安全更新的及时性和可用性问题。最近的安卓安全更新研究主要关注安全更新全面推出的延迟问题，主要归因于安卓系统碎片化的因素。但是，这些研究未能全面涵盖整个安卓生态系统，因为它们主要调查旗舰设备或数据集的时间跨度较短，未能全面描绘安卓设备的生命周期。为填补这一文献中的空白，我们采用设备为中心的方法，分析安卓设备的安全更新行为。我们的方法旨在通过从每个原始设备制造商（OEM）中选择代表性设备集来了解OEM的安全更新分布行为，并对一个普通安卓设备的完整生命周期进行描述。我们从公共来源获得了367K个官方安全更新记录，时间跨度为2014年至2023年，数据集包含来自四个主要OEM的599个独特设备，这些设备在97个国家使用，关联着109个运营商。我们发现，安全更新在不同的OEM、设备型号/类型和地理区域推出的差异很大。我们的研究结果表明，延迟安全更新发布的原因不仅限于碎片化问题，还涉及一些OEM特定因素，例如设备获得的支持类型（例如每月、每季度、半年度）。我们的分析还揭示了在安全更新分发方面存在一些关键问题，这些问题可以很快得到解决，同时，一些杰出的做法也可以立即被OEM采用实践。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/50-shades-of-support-a-device-centric-analysis-of-android-security-updates/](https://www.ndss-symposium.org/ndss-paper/50-shades-of-support-a-device-centric-analysis-of-android-security-updates/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-175-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-175-paper.pdf)
## Understanding and Analyzing Appraisal Systems in the Underground Marketplaces.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#understanding-and-analyzing-appraisal-systems-in-the-underground-marketplaces) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#understanding-and-analyzing-appraisal-systems-in-the-underground-marketplaces)**
### 作者
* Zhengyi Li, Indiana University Bloomington
* Xiaojing Liao, Indiana University Bloomington
### 摘要
> 评估系统是一个在地下市场中广受欢迎的反馈机制。该系统允许获得免费样品的评估者为地下市场中的产品提供评估（即评价评论）。本文首次对地下市场中的评估系统进行了测量研究。具体来说，我们从2006年2月至2023年3月跨越8个市场的17M通信迹线中，发现了18,701位独特评估者发布的56,229条评估评论。我们深入研究了评估评论生态系统，揭示了评估者选择过程中常用的五种要求和优点。这些发现表明，评估系统是地下市场生态系统中一个成熟和结构化的过程。此外，我们揭示了评估评论中高质量和独特的网络威胁情报（CTI）的存在。例如，我们确定了社交助推器的关注者地理位置和用于恶意软件的编程语言。利用我们的提取模型，集成了41种不同类型的CTI，我们捕获了与16,668（50.2%）评估评论相关的23,978个物件。相比之下，在列表中只有8.9%的物件，而在非评估评论中只有2.7%的物件。我们的研究为这一未被充分探索的CTI来源提供了宝贵的见解，补充了关于威胁情报收集的现有研究。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/understanding-and-analyzing-appraisal-systems-in-the-underground-marketplaces/](https://www.ndss-symposium.org/ndss-paper/understanding-and-analyzing-appraisal-systems-in-the-underground-marketplaces/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-187-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-187-paper.pdf)
## A Security and Usability Analysis of Local Attacks Against FIDO2.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#a-security-and-usability-analysis-of-local-attacks-against-fido2) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#a-security-and-usability-analysis-of-local-attacks-against-fido2)**
### 作者
* Tarun Kumar Yadav, Brigham Young University
* Kent Seamons, Brigham Young University
### 摘要
> FIDO2协议旨在使用公钥密码学加强或替代密码身份验证。 FIDO2主要关注来自远程攻击者的攻击，他们会危及密码或尝试欺骗用户。在本文中，我们探讨了未受关注的本地FIDO2攻击威胁，包括恶意浏览器扩展或跨站脚本（XSS）以及攻击者物理接触HSK。我们对当前FIDO2实现进行了系统分析，发现了四个潜在缺陷，并演示了利用这些缺陷的七个攻击的可行性。这些缺陷包括（1）浏览器扩展可访问FIDO2消息的机密性/完整性不足，（2）破解克隆检测算法，（3）用户可能因社会工程和通知/错误消息而误解，以及（4）Cookie生命周期。我们构建了恶意浏览器扩展，并在使用FIDO2的十个流行Web服务器上演示了攻击。我们还展示了许多浏览器扩展在被攻击后具备足够的许可权限。对当前浏览器扩展的静态和动态分析没有发现网络攻击的证据。我们开展了两个用户研究，确认参与者无法通过当前的错误消息，电子邮件通知和UX响应检测攻击。我们提供了改进的克隆检测算法以及依赖方的建议，以便检测或预防某些攻击。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/a-security-and-usability-analysis-of-local-attacks-against-fido2/](https://www.ndss-symposium.org/ndss-paper/a-security-and-usability-analysis-of-local-attacks-against-fido2/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-327-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-327-paper.pdf)
## A Duty to Forget, a Right to be Assured? Exposing Vulnerabilities in Machine Unlearning Services.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#a-duty-to-forget-a-right-to-be-assured-exposing-vulnerabilities-in-machine-unlearning-services) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#a-duty-to-forget-a-right-to-be-assured-exposing-vulnerabilities-in-machine-unlearning-services)**
### 作者
* Hongsheng Hu, CSIRO's Data61
* Shuo Wang, CSIRO's Data61
* Jiamin Chang, University of New South Wales
* Haonan Zhong, University of New South Wales
* Ruoxi Sun, CSIRO's Data61
* Shuang Hao, University of Texas at Dallas
* Haojin Zhu, Shanghai Jiao Tong University
* Minhui Xue, CSIRO's Data61
### 摘要
> 被遗忘权要求从机器学习模型中删除或“遗忘”用户数据。然而，在机器学习作为服务（MLaaS）的背景下，从头开始训练模型以满足遗忘请求是不切实际的，因为服务提供商（服务器）缺乏训练数据。此外，近似遗忘进一步涵盖了效用（模型性能）和隐私（遗忘性能）之间的复杂权衡。本文试图探索MLaaS中遗忘服务所带来的潜在威胁，特别是过度遗忘，即超出预期地遗忘更多信息。我们提出了两种策略，利用过度遗忘来衡量权衡的影响，在黑盒访问设置下，现有的机器遗忘攻击不适用。通过在基准数据集上进行广泛实验，跨不同的模型架构和代表性的遗忘方法，评估了这些策略的有效性。结果表明，两种策略在遗忘场景中都具有破坏模型功效的显著潜力。本研究揭示了遗忘和现代MLaaS之间未被充分探索的差距，强调在平衡数据遗忘、模型效用和安全性方面需谨慎考虑。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/a-duty-to-forget-a-right-to-be-assured-exposing-vulnerabilities-in-machine-unlearning-services/](https://www.ndss-symposium.org/ndss-paper/a-duty-to-forget-a-right-to-be-assured-exposing-vulnerabilities-in-machine-unlearning-services/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-252-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-252-paper.pdf)
## AAKA: An Anti-Tracking Cellular Authentication Scheme Leveraging Anonymous Credentials.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#aaka-an-anti-tracking-cellular-authentication-scheme-leveraging-anonymous-credentials) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#aaka-an-anti-tracking-cellular-authentication-scheme-leveraging-anonymous-credentials)**
### 作者
* Hexuan Yu, Virginia Polytechnic Institute and State University
* Changlai Du, Virginia Polytechnic Institute and State University
* Yang Xiao, University of Kentucky
* Angelos Keromytis, Georgia Institute of Technology
* Chonggang Wang, InterDigital
* Robert Gazda, InterDigital
* Y. Thomas Hou, Virginia Polytechnic Institute and State University
* Wenjing Lou, Virginia Polytechnic Institute and State University
### 摘要
> 移动追踪长期以来一直是一个隐私问题，在这里，移动网络运营商（MNO）收集的地理数据和时间戳被用来追踪移动用户的位置和移动轨迹。此外，出售用户的地理位置信息已经成为一个利润丰厚的业务。许多移动运营商违反了用户隐私协议，未经用户同意就出售用户的位置历史记录给第三方，加剧了与移动追踪和个人资料相关的隐私问题。本文提出了一种名为AAKA的匿名认证和密钥协定方案，旨在保护对于诚实但好奇的MNO的移动追踪。AAKA利用匿名凭证，并引入了一种新颖的移动认证协议，允许合法用户匿名访问网络，而不会泄露其独特的（真实的）ID。它确保了用户凭证的完整性，防止伪造，并确保用户在不同时间进行的连接不能被关联。虽然MNO不能单独识别或对用户进行个人资料编制，AAKA可以在法律干预的情况下识别用户，比如在MNO与授权执法机构合作时。我们的设计与3GPP标准化的最新蜂窝架构和SIM兼容，满足3GPP对用户设备（UE）认证和密钥协定过程的基本安全要求。全面的安全分析表明了该方案的有效性。评估显示，该方案是实用的，在标准蜂窝SIM的受限主机设备上，凭证生成大约需要52毫秒。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/aaka-an-anti-tracking-cellular-authentication-scheme-leveraging-anonymous-credentials/](https://www.ndss-symposium.org/ndss-paper/aaka-an-anti-tracking-cellular-authentication-scheme-leveraging-anonymous-credentials/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-617-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-617-paper.pdf)
## A Unified Symbolic Analysis of WireGuard.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#a-unified-symbolic-analysis-of-wireguard) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#a-unified-symbolic-analysis-of-wireguard)**
### 作者
* Pascal Lafourcade, Universite Clermont Auvergne
* Dhekra Mahmoud, Universite Clermont Auvergne
* Sylvain Ruhault, Agence Nationale de la Sécurité des Systèmes d'Information
### 摘要
> WireGuard是一种虚拟私人网络（VPN），于NDSS 2017年提出，最近已集成到Linux内核以及付费商用VPN，如NordVPN、Mullvad和ProtonVPN中。它提出了一种与其他经典VPN（如IPsec或OpenVPN）不同的方法，因为它不允许配置加密算法。WireGuard内部的协议是从Noise Framework的IKpsk2协议专门扩展而来。对WireGuard和IKpsk2协议进行了不同的分析，在符号模型和计算模型中提出，无论是否使用计算机辅助证明助手。然而，这些分析考虑了不同的对抗模型，或者指的是协议的不完整版本。在这项工作中，我们提出了WireGuard协议在符号模型中的统一形式化模型。我们的模型使用了自动加密协议验证器SAPIC+、ProVerif和Tamarin。我们考虑了一个完整的协议执行，包括用于防御拒绝服务攻击的cookie消息。我们建立了一个精确的对手模型，可以读取或设置静态、瞬态或预共享密钥，读取或设置ECDH预计算，控制密钥分发。最终，我们以统一且可解释的方式呈现了我们的结果，使得可以与先前的分析进行比较。最后，通过我们的模型，我们给出了安全属性被破坏所需和足够的条件，确认了通信匿名性上的缺陷，并指出了一项实现选择，该选择极大地削弱了其安全性。我们提出了一个根据我们的模型证明安全的补救措施。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/a-unified-symbolic-analysis-of-wireguard/](https://www.ndss-symposium.org/ndss-paper/a-unified-symbolic-analysis-of-wireguard/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-364-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-364-paper.pdf)
## Abusing the Ethereum Smart Contract Verification Services for Fun and Profit.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#abusing-the-ethereum-smart-contract-verification-services-for-fun-and-profit) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#abusing-the-ethereum-smart-contract-verification-services-for-fun-and-profit)**
### 作者
* Pengxiang Ma, Huazhong University of Science and Technology
* Ningyu He, Peking University
* Yuhua Huang, Huazhong University of Science and Technology
* Haoyu Wang, Huazhong University of Science and Technology
* Xiapu Luo, The Hong Kong Polytechnic University
### 摘要
> 智能合约在以太坊生态系统中扮演着至关重要的角色。由于智能合约存在各种安全问题，智能合约验证迫切需要进行，这是将智能合约的源代码与其链上字节码进行匹配，以实现智能合约开发者和用户之间相互信任的过程。尽管智能合约验证服务已嵌入到流行的以太坊浏览器（例如Etherscan和Blockscout）和官方平台（即Sourcify）中，并在生态系统中备受欢迎，但它们的安全性和可信度仍不明确。为填补这一空白，我们首次对野外智能合约验证服务进行了全面的安全分析。通过深入研究现有验证器的详细工作流程，我们总结了应满足的关键安全属性，并观察到可能破坏验证的八种漏洞类型。此外，我们提出了一系列检测和利用方法，以揭示最流行服务中漏洞的存在，并共发现19个可利用漏洞。所有研究的智能合约验证服务都可以被滥用来帮助传播恶意智能合约，我们已经观察到攻击者利用这种手段进行诈骗的情况。因此，我们社区迫切需要采取行动来检测和缓解与智能合约验证相关的安全问题，这是以太坊智能合约生态系统的关键组成部分。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/abusing-the-ethereum-smart-contract-verification-services-for-fun-and-profit/](https://www.ndss-symposium.org/ndss-paper/abusing-the-ethereum-smart-contract-verification-services-for-fun-and-profit/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-992-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-992-paper.pdf)
## A Two-Layer Blockchain Sharding Protocol Leveraging Safety and Liveness for Enhanced Performance.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#a-two-layer-blockchain-sharding-protocol-leveraging-safety-and-liveness-for-enhanced-performance) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#a-two-layer-blockchain-sharding-protocol-leveraging-safety-and-liveness-for-enhanced-performance)**
### 作者
* Yibin Xu, University of Copenhagen
* Jingyi Zheng, University of Copenhagen
* Boris Düdder, University of Copenhagen
* Tijs Slaats, University of Copenhagen
* Yongluan Zhou, University of Copenhagen
### 摘要
> 共识分片是增强区块链技术可扩展性的关键技术。但是，现有的协议通常假定通用敌对节点，而不考虑不同类型的攻击，这限制了运行时的交易吞吐量，因为对存活性的攻击可以得到缓解。已经有尝试通过分别处理攻击来增加交易吞吐量，但它们存在安全漏洞。本文介绍了Reticulum，一种新的共识分片协议，克服了这些限制，实现了区块链网络中提高可扩展性而不会出现安全漏洞的目标。
> 
> Reticulum采用动态调整交易吞吐量的双重设计，基于运行时的对抗攻击对存活性和安全性进行考虑。它由两个层次的“控制”和“处理”分片组成，分别对应两个阶段。处理分片是控制分片的子集，每个处理分片都应该有至少一个高信任度的诚实节点。相反，控制分片预计有大多数高信任度的诚实节点。Reticulum利用第一阶段的一致投票来减少接受/拒绝块的节点数量，从而允许更多的并行处理分片。控制分片最终确定第一阶段做出的决策，并在出现争议时作为生命线解决争议。
> 
> 实验表明，Reticulum独特的设计赋予其在面对网络中不同类型的攻击时具有高交易吞吐量和鲁棒性，使其比现有的区块链网络的共识分片协议更优秀。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/a-two-layer-blockchain-sharding-protocol-leveraging-safety-and-liveness-for-enhanced-performance/](https://www.ndss-symposium.org/ndss-paper/a-two-layer-blockchain-sharding-protocol-leveraging-safety-and-liveness-for-enhanced-performance/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-6-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-6-paper.pdf)
## ActiveDaemon: Unconscious DNN Dormancy and Waking Up via User-specific Invisible Token.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#activedaemon-unconscious-dnn-dormancy-and-waking-up-via-user-specific-invisible-token) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#activedaemon-unconscious-dnn-dormancy-and-waking-up-via-user-specific-invisible-token)**
### 作者
* Ge Ren, Shanghai Jiao Tong University
* Gaolei Li, Shanghai Jiao Tong University
* Shenghong Li, Shanghai Jiao Tong University
* Libo Chen, Shanghai Jiao Tong University
* Kui Ren, Zhejiang University
### 摘要
> 深度神经网络（DNN）模型经过良好训练后，可以被视为商业交易的商品，并产生可观的收入，这引发了对知识产权（IP）保护的迫切需求，以防止非法复制。关于知识产权保护的新兴研究通常旨在将水印插入DNN中，让所有者在出现仿冒模型并侵犯商业利益后能够 passively 验证目标模型的所有权，然而目前对于DNN-based 应用程序的未经授权查询还忽视了主动验证。在本文中，我们提出了一种名为ActiveDaemon的新方法，用于保护模型的知识产权，其中包括在DNN中集成内置访问控制功能，以防止商业盗版。具体来说，我们的方法使DNN在仅对经过授权的用户显示正确输出的同时，对于未经授权的用户提供较低的准确性。在ActiveDaemon中，用户特定的令牌由专门设计的U-Net风格的编码器-解码器网络生成，可以将字符串和输入图像映射为大量噪音图像，以解决具有大规模用户容量的身份管理问题。与现有研究相比，这些用户特定令牌是不可见的、动态的，而且更具感知上的隐蔽性和可靠性，增强了模型知识产权保护的隐蔽性和可靠性。为了自动唤醒模型的准确性，我们利用基于数据污染的训练技术，无意识地将ActiveDaemon嵌入到神经元的功能中。我们进行实验，比较ActiveDaemon与四种最先进方法在四个数据集上的保护性能。实验结果表明，ActiveDaemon可以将未经授权的查询的准确性降低高达81%，而授权查询的准确性仅降低不到1.4%。同时，我们的方法还可以将CIFAR10上授权令牌的LPIPS得分降低至0.0027，ImageNet上则为0.0368。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/activedaemon-unconscious-dnn-dormancy-and-waking-up-via-user-specific-invisible-token/](https://www.ndss-symposium.org/ndss-paper/activedaemon-unconscious-dnn-dormancy-and-waking-up-via-user-specific-invisible-token/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-588-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-588-paper.pdf)
## Automatic Policy Synthesis and Enforcement for Protecting Untrusted Deserialization.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#automatic-policy-synthesis-and-enforcement-for-protecting-untrusted-deserialization) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#automatic-policy-synthesis-and-enforcement-for-protecting-untrusted-deserialization)**
### 作者
* Quan Zhang, Tsinghua University
* Yiwen Xu, Tsinghua University
* Zijing Yin, Tsinghua University
* Chijin Zhou, Tsinghua University
* Yu Jiang, Tsinghua University
### 摘要
> Java反序列化漏洞长期以来一直是Java应用程序的严重安全问题。通过注入精心设计的恶意对象，攻击者可以在反序列化过程中重复使用一系列现有方法，实现诸如远程代码执行之类的多样化攻击。为了减轻此类攻击，建议开发人员实施限制应用程序可以反序列化的对象类型的策略。然而，精确策略的设计需要专业知识和大量手动工作，通常导致策略的缺失或不足的实施。
> 
> 本文提出了DeseriGuard，这是一个旨在帮助开发人员无缝地保护其应用程序免受反序列化攻击的工具。它可以根据应用程序的语义自动制定策略，然后执行该策略以限制非法的反序列化尝试。首先，DeseriGuard利用数据流分析构建了一个语义感知的属性树，记录反序列化对象的潜在结构。基于该树，DeseriGuard识别可以安全反序列化的对象类型，并合成白名单策略。然后，通过Java代理，DeseriGuard可以无缝地在运行时执行策略，保护各种反序列化过程。在评估中，DeseriGuard成功阻止了12个真实世界漏洞的所有反序列化攻击。此外，我们将DeseriGuard自动生成的策略与109个由开发人员设计的策略进行了比较。结果表明DeseriGuard有效地限制了99.12%更多的类。同时，我们还使用单元测试和集成测试对增强策略的应用程序进行了测试，结果表明DeseriGuard的策略不会干扰应用程序的执行，并且仅引起了2.17%的可忽略时间开销。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/automatic-policy-synthesis-and-enforcement-for-protecting-untrusted-deserialization/](https://www.ndss-symposium.org/ndss-paper/automatic-policy-synthesis-and-enforcement-for-protecting-untrusted-deserialization/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-53-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-53-paper.pdf)
## Beyond the Surface: Uncovering the Unprotected Components of Android Against Overlay Attack.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#beyond-the-surface-uncovering-the-unprotected-components-of-android-against-overlay-attack) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#beyond-the-surface-uncovering-the-unprotected-components-of-android-against-overlay-attack)**
### 作者
* Hao Zhou, The Hong Kong Polytechnic University
* Shuohan Wu, The Hong Kong Polytechnic University
* Chenxiong Qian, University of Hong Kong
* Xiapu Luo, The Hong Kong Polytechnic University
* Haipeng Cai, Washington State University
* Chao Zhang, Tsinghua University
### 摘要
> 概述：
> 
> 覆盖层是安卓系统中一个重要的用户界面特性，它允许一个应用在别的应用的窗口上显示。虽然覆盖层提升了用户体验并且允许并发的应用程序交互，但已经被广泛地用于恶意目的，例如：“点击劫持”，因此导致所谓的覆盖层攻击。为了对抗这种威胁，Google引入了一个专用的窗口标志SYSTEM_FLAG_HIDE_NON_SYSTEM_OVERLAY_WINDOWS，以保护关键系统应用程序的窗口免受覆盖层攻击。不幸的是，在安卓系统中这种保护的充分性还没有被研究过，缺乏明确的使用指南。
> 
> 为了填补这个空白，在本文中，我们对未受保护的系统应用程序窗口针对覆盖层攻击进行了第一次系统研究。我们提出了一份全面的指南，然后设计和开发了一个名为OverlayChecker的新工具，来识别在安卓系统应用程序中缺少的保护。为了验证未覆盖的问题，我们还设计并创建了概念验证应用程序。在将OverlayChecker应用于4个最近发布的安卓系统上的8个商业安卓系统后，我们总计发现了49个易受攻击的系统应用程序窗口。我们向移动设备生产商报告了我们的研究结果，包括Google、三星、Vivo、小米和荣耀。截至目前，已经确认了其中15个问题，并分配了5个CVE漏洞编号，其中3个被评为高危。我们也从这些移动设备生产商获得了漏洞赏金奖励。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/beyond-the-surface-uncovering-the-unprotected-components-of-android-against-overlay-attack/](https://www.ndss-symposium.org/ndss-paper/beyond-the-surface-uncovering-the-unprotected-components-of-android-against-overlay-attack/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-35-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-35-paper.pdf)
## Automatic Adversarial Adaption for Stealthy Poisoning Attacks in Federated Learning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#automatic-adversarial-adaption-for-stealthy-poisoning-attacks-in-federated-learning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#automatic-adversarial-adaption-for-stealthy-poisoning-attacks-in-federated-learning)**
### 作者
* Torsten Krauß, University of Würzburg
* Jan König, University of Würzburg
* Alexandra Dmitrienko, University of Wuerzburg
* Christian Kanzow, University of Würzburg
### 摘要
> 联邦学习（FL）利用分布式数据训练机器学习模型，具有改善数据隐私、降低通信成本和提高模型性能的优点。然而，FL系统容易受到中毒攻击的影响，攻击者通过引入恶意更新来破坏集成模型的完整性。现有的对抗策略包括过滤、影响降低和鲁棒聚合技术。过滤方法具有不降低分类准确性的优点，但面临着攻击者适应防御机制的挑战。文献中对于“自适应攻击者”缺乏一个普遍接受的定义，使得检测能力的评估和FL防御的有意义的比较变得复杂。
> 
> 在本文中，我们解决了Bagdasaryan等人提出的“自适应攻击者”常用定义的局限性。我们提出了一种新型的自适应方法AutoAdapt，它利用了增广拉格朗日优化技术。AutoAdapt通过提供一种更合理的替代方案来消除手动搜索最优超参数的麻烦。它通过容纳多个不等式约束生成更有效的解决方案，允许在防御指标的有效值范围内进行自适应。我们提出的方法显著增强了攻击者的能力，并加快了开发攻击和防御的研究。通过容纳多个有效范围约束并适应各种防御指标，AutoAdapt挑战了依赖于多个指标的防御，并扩展了潜在的敌对行为范围。通过全面的研究，我们展示了AutoAdapt同时适应多个约束的效果，并展示了它加速测试性能的能力，加快了15倍。此外，我们在各种应用场景中展示了AutoAdapt的通用性，包括数据集、模型架构和超参数，强调了它在实际应用中的实用性。总体而言，我们的贡献推动了FL防御的评估，并推动了该领域的进步。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/automatic-adversarial-adaption-for-stealthy-poisoning-attacks-in-federated-learning/](https://www.ndss-symposium.org/ndss-paper/automatic-adversarial-adaption-for-stealthy-poisoning-attacks-in-federated-learning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1366-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1366-paper.pdf)
## AnonPSI: An Anonymity Assessment Framework for PSI.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#anonpsi-an-anonymity-assessment-framework-for-psi) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#anonpsi-an-anonymity-assessment-framework-for-psi)**
### 作者
* Bo Jiang, TikTok Inc.
* Jian Du, TikTok Inc.
* Qiang Yan, TikTok Inc.
### 摘要
> 私有集合交集（PSI）是一种广泛使用的协议，它使两个参与方能够安全地计算其共享数据集的交集部分上的函数，并且多年来一直是重要的研究焦点。然而，最近的研究已经突出显示其对集合成员推断攻击（SMIA）的脆弱性，即敌对方可能通过调用多个PSI协议推断个人的成员身份。即使在最严格的PSI版本中，仅返回交集的基数，这也存在明显风险。本文探讨了PSI环境下匿名性的评估。首先，我们指出现有作品在测量隐私泄露方面存在不足之处，并随后提出了两种攻击策略来解决这些缺陷。此外，我们对我们提出的方法的性能提供了理论保证。除此之外，我们还说明了如何整合辅助信息（例如与交集成员关联的负载总和（PSI-SUM））可以增强攻击效率。我们利用两个真实数据集进行了各种攻击策略的全面性能评估。我们的研究结果表明，我们提出的方法与先前的研究成果相比显著提高了攻击效率。有效的攻击意味着仅依赖现有的PSI协议可能无法提供足够的隐私保证水平。建议将增强隐私技术协同地结合，以进一步提高隐私保护。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/anonpsi-an-anonymity-assessment-framework-for-psi/](https://www.ndss-symposium.org/ndss-paper/anonpsi-an-anonymity-assessment-framework-for-psi/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1279-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1279-paper.pdf)
## Acoustic Keystroke Leakage on Smart Televisions.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#acoustic-keystroke-leakage-on-smart-televisions) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#acoustic-keystroke-leakage-on-smart-televisions)**
### 作者
* Tejas Kannan, University of Chicago
* Synthia Qia Wang, University of Chicago
* Max Sunog, University of Chicago
* Abraham Bueno de Mesquita, University of Chicago Laboratory Schools
* Nick Feamster, University of Chicago
* Henry Hoffmann, University of Chicago
### 摘要
> 智能电视（TVs）是支持视频流应用程序和网页浏览器的连接互联网的电视。用户通过屏幕虚拟键盘在智能电视中输入信息。这些键盘要求用户使用遥控器的方向命令在键之间导航。鉴于智能电视的广泛功能，用户在这些设备中键入敏感信息（例如密码），使得按键击打隐私保密必要。本研究开发和演示了一种新的侧信道攻击，通过苹果和三星两个流行的智能电视的音频泄露了按键击打记录。这种侧信道攻击利用了智能电视在选择键、移动光标和删除字符时发出不同的声音。这些特性允许攻击者从电视的音频中提取选择之间的光标移动数量。我们的攻击使用这些提取的信息来识别最有可能已键入的字符串。对于现实用户，攻击能在最多100次猜测内找到高达33.33%的信用卡详细信息和60.19%的常见密码。三星已经承认了这个漏洞，这突显了智能电视必须更好地保护敏感数据。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/acoustic-keystroke-leakage-on-smart-televisions/](https://www.ndss-symposium.org/ndss-paper/acoustic-keystroke-leakage-on-smart-televisions/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-72-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-72-paper.pdf)
## BGP-iSec: Improved Security of Internet Routing Against Post-ROV Attacks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#bgp-isec-improved-security-of-internet-routing-against-post-rov-attacks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#bgp-isec-improved-security-of-internet-routing-against-post-rov-attacks)**
### 作者
* Cameron Morris, University of Connecticut
* Amir Herzberg, University of Connecticut
* Bing Wang, University of Connecticut
* Samuel Secondo, University of Connecticut
### 摘要
> 我们提出了BGP-iSec，这是BGPsec协议的增强版，用于保护BGP，即互联网的域间路由协议。与BGPsec相比，BGP-iSec确保了额外和更强的安全性能，而不需要显著的额外开销。主要的改进包括：（i）部分采用的安全性：与需要普遍采用的BGPsec相反，BGP-iSec为早期采用者提供了显著的安全性益处。（ii）防范路由泄露：BGP-iSec 防止了路由泄露，这是导致错误路由的常见原因，而这种情况BGPsec无法防范。（iii）属性的完整性：BGP-iSec确保了可逆属性的完整性，从而防止了BGPsec无法防范的公告操纵攻击。我们通过广泛的模拟和安全分析表明，BGP-iSec实现了这些目标。BGP-iSec的设计在可能的情况下符合BGPsec的设计，仅在必要时对其进行修改以提高安全性。通过提供更强大的安全保证，特别是对部分采用者，我们希望BGP-iSec可以成为最终保护域间路由的一步，而这在多年来一直是互联网基础设施的一个弱点。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/bgp-isec-improved-security-of-internet-routing-against-post-rov-attacks/](https://www.ndss-symposium.org/ndss-paper/bgp-isec-improved-security-of-internet-routing-against-post-rov-attacks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1035-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1035-paper.pdf)
## CAGE: Complementing Arm CCA with GPU Extensions.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#cage-complementing-arm-cca-with-gpu-extensions) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#cage-complementing-arm-cca-with-gpu-extensions)**
### 作者
* Chenxu Wang, Southern University of Science and Technology 
* Fengwei Zhang, Southern University of Science and Technology 
* Yunjie Deng, Southern University of Science and Technology 
* Kevin Leach, Vanderbilt University
* Jiannong Cao, The Hong Kong Polytechnic University
* Zhenyu Ning, Hunan University
* Shoumeng Yan, Ant Group
* Zhengyu He, Ant…
### 摘要
> 保密计算是一种新兴技术，为用户和第三方开发人员提供一个隔离且透明的执行环境。为了支持这种技术，Arm引入了保密计算架构（CCA），创建多个隔离的地址空间，称为领域，以确保在安全敏感任务中的数据保密性和完整性。Arm最近提出了GPU硬件上的保密计算概念，GPU广泛用于通用、高性能和人工智能计算场景。然而，支持保密GPU工作负载的硬件和固件仍然不可用。现有的研究利用可信执行环境（TEEs）来保护Arm或Intel平台上的GPU计算，但它们不适用于CCA的领域式架构，如使用不兼容的硬件或引入大量的可信计算基础（TCB）。因此，需要通过GPU加速来补充现有的Arm CCA功能。
> 
> 为了解决这个挑战，我们提出了CAGE来支持Arm CCA的保密GPU计算。通过利用Arm CCA中现有的安全功能，CAGE确保在Arm设备的主流加速器上进行保密计算时数据的安全性。为了适应GPU工作流到CCA的领域式架构，CAGE提出了一种新颖的影子任务机制来灵活管理保密GPU应用程序。此外，CAGE利用Arm CCA中的内存隔离机制来保护数据的保密性和完整性。基于此，CAGE还优化了内存隔离中的安全操作，以减轻性能开销。在没有硬件更改的情况下，我们的方法使用Arm CCA中的通用硬件安全原语来防御特权攻击者。我们提出了两个原型来验证CAGE的功能并分别评估性能。结果表明，CAGE有效地为Arm CCA提供了GPU支持，平均性能开销为2.45%。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/cage-complementing-arm-cca-with-gpu-extensions/](https://www.ndss-symposium.org/ndss-paper/cage-complementing-arm-cca-with-gpu-extensions/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-763-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-763-paper.pdf)
## CamPro: Camera-based Anti-Facial Recognition.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#campro-camera-based-anti-facial-recognition) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#campro-camera-based-anti-facial-recognition)**
### 作者
* Wenjun Zhu, Zhejiang University
* Yuan Sun, Zhejiang University
* Jiani Liu, Zhejiang University
* Yushi Cheng, Zhejiang University
* Xiaoyu Ji, Zhejiang University
* Wenyuan Xu, Zhejiang University
### 摘要
> 由数百万摄像机拍摄的图像的增多和面部识别（FR）技术的进步，使得滥用FR成为一个严重的隐私威胁。现有的工作通常依赖于混淆、合成或对抗性示例来修改图像中的面部以实现反面部识别（AFR）。然而，包含敏感个人可识别信息（PII）的摄像头模块拍摄的未经修改的图像仍然可能会被泄露。本文提出了一种新颖的方法***CamPro***，可以捕捉先天的AFR图像。***CamPro***使得装有良好的商用摄像头模块产生包含很少PII且仍包含足够信息来支持其他非敏感视觉应用，如人物检测的图像。特别地，***CamPro***调整摄像头图像信号处理器（ISP）内部的配置设置，即颜色校正矩阵和伽马校正，以实现AFR，并设计了一种图像增强器来保持图像质量以供可能的人类观察者使用。我们在概念验证相机上实现并验证了***CamPro***，实验证明了其在十种最先进的黑盒FR模型上的有效性。结果显示，***CamPro***图像可以将面部识别准确率显著降低到0.3％，同时对目标非敏感视觉应用影响很小。此外，我们发现，即使完全了解保护隐私ISP参数的情况下，使用***CamPro***生成的图像重新训练其FR模型的适应性攻击者也很难攻击***CamPro***。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/campro-camera-based-anti-facial-recognition/](https://www.ndss-symposium.org/ndss-paper/campro-camera-based-anti-facial-recognition/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-158-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-158-paper.pdf)
## Decentralized Information-Flow Control for ROS2.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#decentralized-information-flow-control-for-ros2) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#decentralized-information-flow-control-for-ros2)**
### 作者
* Nishit V. Pandya, Indian Institute of Science Bangalore
* Himanshu Kumar, Indian Institute of Science Bangalore
* Gokulnath M. Pillai, Indian Institute of Science Bangalore
* Vinod Ganapathy, Indian Institute of Science Bangalore
### 摘要
> ROS2是一种流行的基于发布/订阅的中间件，允许开发人员构建和部署各种分布式机器人应用程序。不幸的是，ROS2使应用程序无法对下游应用程序如何消费它们的数据进行控制。
> 
> 我们提出了Picaros，一个专为ROS2量身打造的分散信息流控制（DIFC）系统。ROS2的分散和分布式架构给构建以前未解决的DIFC系统带来了新的挑战。Picaros采用新颖的方法，通过在属性基加密（ABE）框架内投射和解决DIFC问题来解决这些挑战。 Picaros的设计充分利用了ROS2平台的独特性质，并仔细避免了任何集中元素。本文介绍了Picaros的设计和实现，并报告了我们使用Picaros的ABE方法进行ROS2应用程序的DIFC实验。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/decentralized-information-flow-control-for-ros2/](https://www.ndss-symposium.org/ndss-paper/decentralized-information-flow-control-for-ros2/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-101-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-101-paper.pdf)
## BliMe: Verifiably Secure Outsourced Computation with Hardware-Enforced Taint Tracking.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#blime-verifiably-secure-outsourced-computation-with-hardware-enforced-taint-tracking) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#blime-verifiably-secure-outsourced-computation-with-hardware-enforced-taint-tracking)**
### 作者
* Hossam ElAtali, University of Waterloo
* Lachlan J. Gunn, Aalto University
* Hans Liljestrand, University of Waterloo
* N. Asokan, University of Waterloo
### 摘要
> 外包计算在当今被广泛使用。然而，在外包计算中保护客户数据的当前方法存在不足：使用像全同态加密这样的加密技术会带来巨大成本，而使用硬件辅助的可信执行环境已被证明容易受到运行时和侧信道攻击的威胁。
> 
> 我们提出了 BliMe，这是一种实现高效且安全的外包计算的体系结构。BliMe 包含一组新颖且最小的指令集架构扩展，实施了一种污点追踪策略，以确保即使服务器存在漏洞，客户数据的机密性也得以保障。为保护外包计算，BliMe 扩展可以与一个可验证、固定功能的硬件安全模块（HSM）和提供原子解密-污点和加密-去污操作的加密引擎一起使用。客户依赖于与 HSM 的远程认证和密钥协商，以确保他们的数据能够安全地传输到加密引擎并从中传输，并始终受到 BliMe 的污点追踪策略的保护。
> 
> 我们提供了基于 BOOM RISC-V 核心的 RTL 实现 BliMe-BOOM。相对于未经修改的 BOOM，BliMe-BOOM 不需要降低时钟频率，具有最小功耗。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/blime-verifiably-secure-outsourced-computation-with-hardware-enforced-taint-tracking/](https://www.ndss-symposium.org/ndss-paper/blime-verifiably-secure-outsourced-computation-with-hardware-enforced-taint-tracking/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-105-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-105-paper.pdf)
## CP-IoT: A Cross-Platform Monitoring System for Smart Home.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#cp-iot-a-cross-platform-monitoring-system-for-smart-home) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#cp-iot-a-cross-platform-monitoring-system-for-smart-home)**
### 作者
* Hai Lin, Tsinghua University
* Chenglong Li, Tsinghua University
* Jiahai Yang, Tsinghua University
* Zhiliang Wang, Tsinghua University
* Linna Fan, National University of Defense Technology
* Chenxin Duan, Tsinghua University
### 摘要
> 当今，智能家居平台在全球范围内被广泛使用，为用户提供自动化功能以定义他们的日常生活。然而，存在于不同平台中的个人自动化规则异常和跨自动化威胁使智能家居处于危险之中。最近的研究聚焦于检测特定平台的这些威胁，而且只能覆盖有限的威胁范围。为了解决这些问题，我们设计了一个名为CP-IoT的新型系统，可以监视自动化执行行为并发现异常，以及异构IoT平台中隐藏的风险。具体而言，CP-IoT构建了一个集中的、动态的图模型来描绘自动化行为和状态转换。通过分析不同描述粒度的两种应用页面，CP-IoT提取了规则执行逻辑并从不同平台收集用户策略。为了检测不同平台上自动化规则的不一致行为，我们提出了一种通过聚类从不同平台收集的侧通道流量来进行事件指纹提取的自学习方法，以及通过检查反映在图模型中的规范的规则执行行为的异常检测方法。为了检测跨规则威胁，我们将每种威胁类型形式化为符号表示，并在图上应用搜索算法。我们在四个平台上验证了CP-IoT的性能。评估结果表明，CP-IoT能够以高精度检测异常行为，并有效发现各种类型的跨规则威胁。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/cp-iot-a-cross-platform-monitoring-system-for-smart-home/](https://www.ndss-symposium.org/ndss-paper/cp-iot-a-cross-platform-monitoring-system-for-smart-home/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-3-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-3-paper.pdf)
## DeepGo: Predictive Directed Greybox Fuzzing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#deepgo-predictive-directed-greybox-fuzzing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#deepgo-predictive-directed-greybox-fuzzing)**
### 作者
* Peihong Lin, National University of Defense Technology
* Pengfei Wang, National University of Defense Technology
* Xu Zhou, National University of Defense Technology
* Wei Xie, National University of Defense Technology
* Gen Zhang, National University of Defense Technology
* Kai Lu, National University of Defense Technology
### 摘要
> 定向灰盒模糊测试（DGF）是一种有效的方法，旨在通过预定义的目标站点加强测试易受攻击的代码区域。最先进的DGF技术重新定义和优化适应度度量，以精确快速地达到目标站点。然而，适应度度量的优化主要基于启发式算法，通常依赖于历史执行信息，并缺乏对尚未被执行的路径的先见之明。因此，具有复杂限制的难以执行的路径将阻碍DGF达到目标，使DGF效率降低。
> 
> 在本文中，我们提出了DeepGo，一种预测定向灰盒模糊测试程序，可以结合历史和预测信息来引导DGF通过最优路径到达目标站点。我们首先提出了路径转换模型，将DGF建模为通过特定路径转换序列到达目标站点的过程。由变异产生的新种子将导致路径转换，对应于高奖励路径转换序列的路径表明通过它达到目标站点的可能性很高。然后，为了预测路径转换和相应的奖励，我们使用深度神经网络构建虚拟集成环境（VEE），逐渐模仿路径转换模型，并预测尚未采取的路径转换的奖励。为确定最优路径，我们开发了一种针对模糊测试的强化学习模型（RLF），生成具有最高序列奖励的转换序列。RLF模型可以结合历史和预测路径转换来生成最优路径转换序列，以及指导模糊测试的变异策略的策略。最后，为了执行高奖励路径转换序列，我们提出了行动组的概念，综合优化模糊测试的关键步骤，以实现高效地达到目标的最优路径。我们在由25个程序组成的2个基准组上评估了DeepGo，共计100个目标站点。实验结果表明，DeepGo在到达目标站点方面比AFLGo、BEACON、WindRanger和ParmeSan分别快3.23倍、1.72倍、1.81倍和4.83倍，同时还在暴露已知漏洞方面获得2.61倍、3.32倍、2.43倍和2.53倍的加速。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/deepgo-predictive-directed-greybox-fuzzing/](https://www.ndss-symposium.org/ndss-paper/deepgo-predictive-directed-greybox-fuzzing/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-514-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-514-paper.pdf)
## Detecting Voice Cloning Attacks via Timbre Watermarking.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#detecting-voice-cloning-attacks-via-timbre-watermarking) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#detecting-voice-cloning-attacks-via-timbre-watermarking)**
### 作者
* Chang Liu, University of Science and Technology of China
* Jie Zhang, Nanyang Technological University
* Tianwei Zhang, Nanyang Technological University
* Xi Yang, University of Science and Technology of China
* Weiming Zhang, University of Science and Technology of China
* NengHai Yu, University of Science and Technology of China
### 摘要
> 如今，发布音频内容供公众社交或商业用途已经很普遍。然而，随着声音克隆技术的崛起，攻击者有可能利用公开发布的音频轻松冒充特定人的声音，而不需要任何许可。因此，及时检测发布的音频内容的潜在误用并保护其音色不被冒充变得非常重要。
> 
> 为此，我们引入了一个新颖的概念“音色水印”，将水印信息嵌入到目标个体的语音中，最终能够击败声音克隆攻击。但是，存在两个挑战：1）鲁棒性：攻击者可以在启动声音克隆攻击前通过常见的语音预处理去除水印；2）泛化性：攻击者可以选择各种声音克隆方法，这使得难以建立针对所有攻击的通用防御。
> 
> 为解决这些挑战，我们设计了一个端到端的抵抗声音克隆检测框架。我们解决方案的核心思想是将水印嵌入到频域中，这在本质上对常见的数据处理方法具有鲁棒性。采用重复嵌入策略以进一步增强鲁棒性。为了在不同的声音克隆攻击之间获得泛化性，在我们的框架中将它们的共享过程进行调制，并集成到一个失真层中。实验证明，所提出的音色水印能够抵御不同的声音克隆攻击，对各种自适应攻击（如基于重建的去除攻击，水印覆盖攻击）具有强大的抵抗力，并在PaddleSpeech、Voice-Cloning-App和so-vits-svc等实际服务中得到实用。此外，还进行了消融研究来验证我们设计的有效性。一些音频样本可在https://timbrewatermarking.github.io/samples获取。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/detecting-voice-cloning-attacks-via-timbre-watermarking/](https://www.ndss-symposium.org/ndss-paper/detecting-voice-cloning-attacks-via-timbre-watermarking/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-200-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-200-paper.pdf)
## Don't Interrupt Me - A Large-Scale Study of On-Device Permission Prompt Quieting in Chrome.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#dont-interrupt-me-a-large-scale-study-of-on-device-permission-prompt-quieting-in-chrome) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#dont-interrupt-me-a-large-scale-study-of-on-device-permission-prompt-quieting-in-chrome)**
### 作者
* Marian Harbach, Google
* Igor Bilogrevic, Google
* Enrico Bacis, Google
* Serena Chen, Google
* Ravjit Uppal, Google
* Andy Paicu, Google
* Elias Klim, Google
* Meggyn Watkins, Google
* Balazs Engedy, Google
### 摘要
> Chrome进行的一项大规模实验表明，“更安静”的网络权限提示可以减少不必要的干扰，而只会轻微地影响授权率。然而，此实验和部分推出缺少两个重要元素：（1）一种有效和上下文感知的激活机制，用于此更安静的提示，以及（2）对用户对此类干预的态度和情感的分析。在本文中，我们通过一种新颖的基于机器学习的激活机制（并通过Chrome在设备上的实际部署）以及拥有来自156个国家的13.1k参与者的大规模用户研究来解决这两个限制。首先，基于遥测的结果，计算Chrome的野外用户中的2000万个样本，表明新颖的基于设备的基于机器学习的方法既非常精确（后续精度>99％），又具有非常高的覆盖率（通知权限的召回率为96％）。其次，我们的大规模、上下文用户研究表明，对于大多数受访者而言，减轻通常被认为是有帮助的，并且不会引起高度不安。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/dont-interrupt-me-a-large-scale-study-of-on-device-permission-prompt-quieting-in-chrome/](https://www.ndss-symposium.org/ndss-paper/dont-interrupt-me-a-large-scale-study-of-on-device-permission-prompt-quieting-in-chrome/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-108-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-108-paper.pdf)
## Certificate Transparency Revisited: The Public Inspections on Third-party Monitors.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#certificate-transparency-revisited-the-public-inspections-on-third-party-monitors) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#certificate-transparency-revisited-the-public-inspections-on-third-party-monitors)**
### 作者
* Aozhuo Sun, Institute of Information Engineering
### 摘要
> 证书透明性（CT）框架已部署以改善TLS证书生态系统的问责制。然而，当前的CT实施并未强制执行或保证第三方监视器的正确行为，这些监视器是CT框架的重要组成部分，引发了安全性和可靠性的担忧。例如，最近的研究报告指出，5个流行的第三方CT监视器并不能始终返回用户查询的完整证书集，这从根本上损害了CT旨在提供的保护。本文重新审视CT设计，并提出CT框架的另一个组件：CT监视器。监视器充当第三方CT监视器的检查员，通过检查第三方监视器的证书搜索服务并检测多个监视器返回的不一致结果来发现任何不端行为。它还能够半自动地分析不一致的潜在原因，例如监视器的错误配置、实施缺陷等。我们实现了CT监视器的原型，并进行了为期52天的试运营以及涉及约6,000个域的8.26百万个唯一证书的若干确认实验。从野外6个活跃第三方监视器返回的结果中，原型检测到这些监视器的14个潜在设计或实施问题，展示了其在对第三方监视器进行公共检查方面的有效性，以及提高CT整体可靠性的潜力。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/certificate-transparency-revisited-the-public-inspections-on-third-party-monitors/](https://www.ndss-symposium.org/ndss-paper/certificate-transparency-revisited-the-public-inspections-on-third-party-monitors/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-834-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-834-paper.pdf)
## DeGPT: Optimizing Decompiler Output with LLM.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#degpt-optimizing-decompiler-output-with-llm) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#degpt-optimizing-decompiler-output-with-llm)**
### 作者
* Peiwei Hu, Institute of Information Engineering
### 摘要
> 逆向工程在恶意软件分析、漏洞发现等方面至关重要。反编译器通过将汇编转换为高级编程语言，大大提高了二进制代码的理解度，协助逆向工程师进行逆向工程。然而，反编译器存在无意义的变量名、冗余变量和缺乏代码目的描述等问题。以往的研究表明，通过使用包含各种反编译器输出的大型数据集对模型进行训练，可以改善反编译器输出的性能。然而，即使是需要花费很长时间构建的数据集，也只覆盖实际世界中有限的二进制文件。面对二进制迁移时，性能严重下降。
> 
> 本文提出了一种称为DeGPT的端到端框架，旨在优化反编译器输出，以提高可读性和简洁性，并进一步协助逆向工程师更好地理解二进制文件。大型语言模型（LLM）通过庞大的模型大小和包含丰富的多模态数据的训练集，具有缓解性能下降的能力，然而，它的潜力难以通过一次性使用发挥。因此，我们提出了三个角色机制，包括裁判（R_ref）、顾问（R_adv）和操作员（R_ope），以使LLM适应我们的优化任务。具体而言，R_ref为目标反编译器输出提供优化方案，而R_adv基于该方案提供纠正措施，R_ope检查优化是否改变了原始函数的语义，并得出最终的裁决是否接受优化。我们将DeGPT评估在包含各种软件的反编译器输出的数据集上，例如实用的命令行工具、恶意软件、用于音频处理的库以及算法的实现。实验结果表明，即使在当前顶级反编译器（Ghidra）的输出上，DeGPT也可以实现24.4％的认知负担减轻，并提供的评论中有62.9％可以提供逆向工程师实际的语义以帮助理解二进制文件。我们的用户调查也表明，优化可以显著简化代码并添加有用的语义信息（变量名和注释），促进快速准确地理解二进制文件。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/degpt-optimizing-decompiler-output-with-llm/](https://www.ndss-symposium.org/ndss-paper/degpt-optimizing-decompiler-output-with-llm/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-401-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-401-paper.pdf)
## DorPatch: Distributed and Occlusion-Robust Adversarial Patch to Evade Certifiable Defenses.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#dorpatch-distributed-and-occlusion-robust-adversarial-patch-to-evade-certifiable-defenses) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#dorpatch-distributed-and-occlusion-robust-adversarial-patch-to-evade-certifiable-defenses)**
### 作者
* Chaoxiang He, Huazhong University of Science and Technology
* Xiaojing Ma, Huazhong University of Science and Technology
* Bin B. Zhu, Microsoft Research
* Yimiao Zeng, Huazhong University of Science and Technology
* Hanqing Hu, Huazhong University of Science and Technology
* Xiaofan Bai, Huazhong University of Science and Technology
* Hai Jin, Huazhong University of Science and Technology
### 摘要
> 对抗补丁攻击是最实用的对抗攻击之一。最近的研究集中在提供在白盒对抗补丁攻击存在的情况下正确预测的可证明保证上。本文提出了DorPatch，一种有效的对抗补丁攻击，可以规避可证明的强健性防御和经验性的防御。 DorPatch采用一种特殊的技术——群Lasso，在一个补丁的掩码、图像丢失、密度正则化和结构损失之间进行平衡，以生成一个完全优化、分布式、遮挡抗性和不显眼的对抗性补丁，可以在物理世界的对抗性补丁攻击中使用。我们进行了广泛的实验评估，包括数字领域和实物测试，结果显示DorPatch可以有效地规避PatchCleanser，这是最先进的可证明的防御措施，以及针对对抗性补丁攻击的经验性防御。更重要的是，由DorPatch生成的对抗性贴片示例的误判结果可以得到PatchCleanser的认证，产生了对于保证的预测的错误信任。 DorPatch在所有对抗性贴片攻击中实现了最先进的攻击性能和感知质量。DorPatch对DNN模型的现实世界应用构成了重大威胁，要求开发有效的防御措施来防御这种攻击。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/dorpatch-distributed-and-occlusion-robust-adversarial-patch-to-evade-certifiable-defenses/](https://www.ndss-symposium.org/ndss-paper/dorpatch-distributed-and-occlusion-robust-adversarial-patch-to-evade-certifiable-defenses/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-920-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-920-paper.pdf)
## DEMASQ: Unmasking the ChatGPT Wordsmith.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#demasq-unmasking-the-chatgpt-wordsmith) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#demasq-unmasking-the-chatgpt-wordsmith)**
### 作者
* Kavita Kumari, Technical University of Darmstadt
### 摘要
> ChatGPT和其他大型语言模型（LLM）的潜在误用已经引起了人们对虚假信息传播、抄袭、学术不端行为和欺诈活动的担忧。因此，区分人工智能生成和人类生成的内容已成为一个有趣的研究课题。然而，目前的文本检测方法缺乏准确性，并且通常局限于特定任务或领域，使其无法识别由ChatGPT生成的内容。在本文中，我们提出了一个名为DEMASQ的有效ChatGPT检测器，它可以准确地识别ChatGPT生成的内容。我们的方法解决了两个关键因素：（i）观察到的人类和机器生成内容中的独特偏见和（ii）人类为了避开先前的检测方法所做的改动。DEMASQ是一个能量为基础的检测模型，包括了诸如（i）受多普勒效应启发的优化，以捕获输入文本嵌入和输出标签之间的相互依存关系，以及（ii）应用可解释人工智能技术产生多样的扰动。为了评估我们的检测器，我们创建了一个基准数据集，其中包括了来自ChatGPT和人类的提示的混合，涵盖了医疗、开放性问答、金融、维基和Reddit等领域。我们的评估表明，DEMASQ能够在识别ChatGPT生成的内容方面取得高准确性。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/demasq-unmasking-the-chatgpt-wordsmith/](https://www.ndss-symposium.org/ndss-paper/demasq-unmasking-the-chatgpt-wordsmith/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1190-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1190-paper.pdf)
## DRAINCLoG: Detecting Rogue Accounts with Illegally-obtained NFTs using Classifiers Learned on Graphs.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#drainclog-detecting-rogue-accounts-with-illegally-obtained-nfts-using-classifiers-learned-on-graphs) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#drainclog-detecting-rogue-accounts-with-illegally-obtained-nfts-using-classifiers-learned-on-graphs)**
### 作者
* Hanna Kim, KAIST
* Jian Cui, Indiana University Bloomington
* Eugene Jang, S2W Inc.
* Chanhee Lee, S2W Inc.
* Yongjae Lee, S2W Inc.
* Jin-Woo Chung, S2W Inc.
* Seungwon Shin, KAIST
### 摘要
> 随着非同质化代币（NFT）越来越受欢迎，NFT用户成为网络钓鱼诈骗者的目标，称为NFT抽干者。在过去的一年中，价值1亿美元的NFT被抽走，他们的存在仍然是NFT交易领域的严重威胁。然而，迄今为止还没有工作全面调查过NFT生态系统中抽干者的行为。
> 
> 在本文中，我们提出了第一项关于NFT抽干者交易行为的研究，并介绍了第一个专用NFT抽干者检测系统。我们从以太坊区块链和五个来源收集了2022年的1.27亿NFT交易数据和1135个抽干者账户。我们发现抽干者在交易和社会背景方面表现出与普通用户明显不同的特征。借助这些见解，我们设计了DRAINCLoG，一种利用图神经网络的自动抽干者检测系统。该系统通过两个不同的图：用于交易上下文的NFT-用户图和用于社会背景的用户图，有效地捕获了NFT空间内复杂的相互作用网络。使用真实世界的NFT交易数据进行评估突显了我们模型的稳健性和精确性。此外，我们分析了DRAINCLoG在各种规避攻击下的安全性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/drainclog-detecting-rogue-accounts-with-illegally-obtained-nfts-using-classifiers-learned-on-graphs/](https://www.ndss-symposium.org/ndss-paper/drainclog-detecting-rogue-accounts-with-illegally-obtained-nfts-using-classifiers-learned-on-graphs/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-888-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-888-paper.pdf)
## DynPRE: Protocol Reverse Engineering via Dynamic Inference.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#dynpre-protocol-reverse-engineering-via-dynamic-inference) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#dynpre-protocol-reverse-engineering-via-dynamic-inference)**
### 作者
* Zhengxiong Luo, Tsinghua University
* Kai Liang, Central South University
* Yanyang Zhao, Tsinghua University
* Feifan Wu, Tsinghua University
* Junze Yu, Tsinghua University
* Heyuan Shi, Central South University
* Yu Jiang, Tsinghua University
### 摘要
> 自动协议逆向工程对于各种安全应用至关重要。尽管许多现有技术通过分析静态网络跟踪来实现此任务，但由于它们依赖高质量的样本，因此面临越来越大的挑战。本文介绍了DynPRE，这是一种协议逆向工程工具，它利用协议服务器的交互能力来获取更多语义信息和额外的流量进行动态推理。 DynPRE首先处理初始输入网络跟踪，并学习根据会话特定标识符检测和自适应消息重写在不同上下文中与服务器交互的规则。然后，它应用探索性请求制作来获取语义信息和补充样本，并执行实时分析。我们对12个广泛使用的协议进行的评估显示，DynPRE以0.50的完美得分识别字段，以0.94的V-量度推断消息类型，并显着优于现有最先进的方法Netzob，Netplier，FieldHunter，BinaryInferno和Nemesys，后者的平均完美得分和V-量度得分分别为（0.15，0.72），（0.16，0.73），（0.15，0.83），（0.15，-）和（0.31，-）。此外，对未知协议的案例研究突出了DynPRE在实际应用中的有效性。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/dynpre-protocol-reverse-engineering-via-dynamic-inference/](https://www.ndss-symposium.org/ndss-paper/dynpre-protocol-reverse-engineering-via-dynamic-inference/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-83-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-83-paper.pdf)
## Efficient and Timely Revocation of V2X Credentials.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#efficient-and-timely-revocation-of-v2x-credentials) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#efficient-and-timely-revocation-of-v2x-credentials)**
### 作者
* Gianluca Scopelliti, Ericsson & KU Leuven
* Christoph Baumann, Ericsson
* Fritz Alder, KU Leuven
* Eddy Truyen, KU Leuven
* Jan Tobias Mühlberg, Université libre de Bruxelles & KU Leuven
### 摘要
> 在智能交通系统中，车辆、基础设施和其他道路用户之间安全通信对于维护道路安全至关重要。这包括及时撤销恶意或恶意车辆的加密凭证。然而，当前的标准模糊了撤销应该如何处理，并且最近的调查表明现有撤销方案在可扩展性和有效性方面存在严重限制。在本文中，我们提出了一种经过正式验证的自我撤销车辆对一切(V2X)伪匿名凭证的机制，该机制依赖于车辆中的可信处理元素，但不需要可信时间来源。我们的方案与正在进行的标准化工作兼容，并且利用Tamarin证明工具，是第一个能够保证具有可预测的撤销时间上限，并且在存在现实攻击者的情况下确保凭证的真正撤销。我们在虚拟5G-Edge部署场景中测试了我们的撤销机制，在该场景中，大量车辆相互通信，模拟网络故障和延迟等真实世界条件。结果表明，我们的方案在实践中保持了形式上的保证，并且具有低网络开销和良好的可扩展性。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/efficient-and-timely-revocation-of-v2x-credentials/](https://www.ndss-symposium.org/ndss-paper/efficient-and-timely-revocation-of-v2x-credentials/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-17-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-17-paper.pdf)
## dRR: A Decentralized, Scalable, and Auditable Architecture for RPKI Repository.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#drr-a-decentralized-scalable-and-auditable-architecture-for-rpki-repository) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#drr-a-decentralized-scalable-and-auditable-architecture-for-rpki-repository)**
### 作者
* Yingying Su, Tsinghua university
* Dan Li, Tsinghua university
* Li Chen, Zhongguancun Laboratory
* Qi Li, Tsinghua university
* Sitong Ling, Tsinghua University
### 摘要
> 虽然资源公钥基础架构 (RPKI) 对于保卫自治域间路由非常重要，但我们发现其关键组件 RPKI 仓库已经被研究不足。因此，我们进行了对现有 RPKI 仓库基础设施的首次数据分析，包括对全球自治域地址系统管理员的调查和现有 RPKI 仓库的大规模测量。通过此项研究的发现，我们识别出了三个主要问题。第一，恶意的 RPKI 权威可以轻易操作 RPKI 对象，而网络号资源持有人和依赖方既不能预防恶意行为，也不能追究责任。第二，RPKI 仓库非常敏感：发布点的攻击或停机将阻止依赖方获得完整的 RPKI 对象视图。最后，我们发现当前的 RPKI 仓库存在可扩展性问题，而随着更多的路由来源授权 (ROA) 的部署，这些问题将会加剧。
> 
> 为了解决这些问题，我们提出了 dRR 架构，它增强了 RPKI 仓库的安全性、稳健性和可扩展性，同时与标准 RPKI 兼容。通过引入两个新实体: 证书服务器 (CS) 和监视器，dRR 形成了一个去中心化的 CS 联盟，使 RPKI 仓库能够主动防御恶意行为和容忍发布点的失败。dRR 也可为未来的大规模部署扩展性。我们详细介绍了 dRR 的设计，并在跨越15个国家的全球互联网测试平台上实现了 dRR 的原型。实验结果表明，尽管引入了新的安全功能，但 dRR 仅在证书签发和吊销的延迟上造成微不足道的影响。dRR 实现的证书更新吞吐量是当前最大 RPKI 证书更新频率的 450 倍。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/drr-a-decentralized-scalable-and-auditable-architecture-for-rpki-repository/](https://www.ndss-symposium.org/ndss-paper/drr-a-decentralized-scalable-and-auditable-architecture-for-rpki-repository/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-368-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-368-paper.pdf)
## Efficient Use-After-Free Prevention with Opportunistic Page-Level Sweeping.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#efficient-use-after-free-prevention-with-opportunistic-page-level-sweeping) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#efficient-use-after-free-prevention-with-opportunistic-page-level-sweeping)**
### 作者
* Chanyoung Park, UNIST
* Hyungon Moon, UNIST
### 摘要
> 打败使用之后自由利用漏洞是一个具有挑战性的问题，一个普遍的解决方案仍然难以找到。近期努力实现有效的预防使用之后自由利用漏洞的方法已经发现，在许多情况下，延迟重复使用已释放的内存既有效又高效。以前的研究提出了两种主要方法：一种是将重用推迟到分配器可以自信地确定已释放的内存中不存在任何悬挂指针的情况下，另一种则禁止重用已释放的堆块，直到程序终止。通过深入分析这两种方法及其报告的性能影响，我们发现一个有趣的观察结果。与将重使用推迟到程序终止的设计相比，将重使用推迟到没有任何悬挂指针引用已释放的块的策略在某些工作负载下会带来显著的性能开销。每个堆块重用的变化会影响堆中分配块的分布，以及某些基准测试的性能。本研究提出HushVac，一个执行延迟重用的分配器，以使堆块的分布更加友好于这样的工作负载。HushVac的评估表明，当运行SPEC CPU 2006基准套件时，平均性能开销（4.7%）低于现有技术的开销（11.4%）。具体而言，HushVac在分布敏感的基准测试中的开销约为35.2％，而先前的工作则有110％的开销。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/efficient-use-after-free-prevention-with-opportunistic-page-level-sweeping/](https://www.ndss-symposium.org/ndss-paper/efficient-use-after-free-prevention-with-opportunistic-page-level-sweeping/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-804-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-804-paper.pdf)
## EM Eye: Characterizing Electromagnetic Side-channel Eavesdropping on Embedded Cameras.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#em-eye-characterizing-electromagnetic-side-channel-eavesdropping-on-embedded-cameras) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#em-eye-characterizing-electromagnetic-side-channel-eavesdropping-on-embedded-cameras)**
### 作者
* Yan Long, University of Michigan
* Qinhong Jiang, Zhejiang University
* Chen Yan, Zhejiang University
* Tobias Alam, University of Michigan
* Xiaoyu Ji, Zhejiang University
* Wenyuan Xu, Zhejiang University
* Kevin Fu, Northeastern University
### 摘要
> 物联网设备和其他嵌入式系统越来越配备了能够感知私人空间中关键信息的摄像头。然而，这些摄像头的数据安全性很少从硬件设计的角度进行审查。我们的论文首次尝试分析对嵌入式摄像头进行物理通道窃听的攻击面。我们对数字图像数据传输接口的EM Eye进行了表征，这是一种易受攻击的漏洞，允许对手从摄像头的意外电磁辐射中重构高质量图像流，甚至在许多情况下可以达到2米之外。我们对4个热门的物联网摄像头开发平台和12个带摄像头的商用设备进行了评估，结果显示EM Eye对从智能手机到行车记录仪和家庭安防摄像头等各种设备构成了威胁。通过利用这一漏洞，对手可能能够从墙的另一侧对封闭房间中的私人活动进行视觉窥探。我们提供了根本原因分析和建模，使系统防御者能够识别和模拟针对这一漏洞的缓解措施，例如改进嵌入式摄像头的数据传输协议，成本最低。我们进一步讨论了EM Eye与已知的计算机显示屏窃听攻击之间的关系，以揭示需要解决以保护感测系统数据保密性的差距。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/em-eye-characterizing-electromagnetic-side-channel-eavesdropping-on-embedded-cameras/](https://www.ndss-symposium.org/ndss-paper/em-eye-characterizing-electromagnetic-side-channel-eavesdropping-on-embedded-cameras/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-552-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-552-paper.pdf)
## Eavesdropping on Controller Acoustic Emanation for Keystroke Inference Attack in Virtual Reality.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#eavesdropping-on-controller-acoustic-emanation-for-keystroke-inference-attack-in-virtual-reality) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#eavesdropping-on-controller-acoustic-emanation-for-keystroke-inference-attack-in-virtual-reality)**
### 作者
* Shiqing Luo, George Mason University
* Anh Nguyen, George Mason University
* Hafsa Farooq, Georgia State University
* Kun Sun, George Mason University
* Zhisheng Yan, George Mason University
### 摘要
> 了解虚拟现实（VR）的脆弱性对于保护敏感数据并建立用户对VR生态系统的信任至关重要。先前的攻击已经证明通过记录用户-头戴显示器（HMDs）交互期间生成的侧通道信号，可以推断出VR按键输入的可行性。然而，这些攻击受到攻击场景中的物理布局或受害者姿势的严格限制，因为录音设备必须严格放置和定位以一定方式与受害者相关。本文揭示了一种在VR中具有灵活放置的按键推断攻击，即通过窃听在按键输入期间移动手柄控制器的点击声音。恶意录音智能手机可以放置在围绕受害者的任何位置，使攻击更加灵活且实用于在VR环境中部署。作为VR中的第一个声学攻击，我们的系统Heimdall克服了之前针对物理键盘和触摸屏的声学攻击未解决的独特挑战。这些挑战包括区分3D空间中的声音，在不同的录音放置中按键声音和键之间的自适应映射以及处理偶尔的手部旋转。对30名参与者进行的实验证明，Heimdall在推断4-8个字符密码时实现了96.51％的键值推断准确率和85.14％-91.22％的前5准确率。Heimdall还在各种实际影响下表现出良好的鲁棒性，例如智能手机用户放置、攻击环境、硬件模型和受害者条件。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/eavesdropping-on-controller-acoustic-emanation-for-keystroke-inference-attack-in-virtual-reality/](https://www.ndss-symposium.org/ndss-paper/eavesdropping-on-controller-acoustic-emanation-for-keystroke-inference-attack-in-virtual-reality/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-100-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-100-paper.pdf)
## EnclaveFuzz: Finding Vulnerabilities in SGX Applications.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#enclavefuzz-finding-vulnerabilities-in-sgx-applications) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#enclavefuzz-finding-vulnerabilities-in-sgx-applications)**
### 作者
* Liheng Chen, Institute of Information Engineering
### 摘要
> Intel 的软件保护扩展（SGX）提供了一个被称为飞地的隔离执行环境，其中包括飞地之外的所有内容都被视为可能的恶意，包括非飞地内存区域、外部设备和操作系统。尽管其攻击模型强健，但在飞地内运行的代码仍容易受到常见的内存损坏漏洞的影响。此外，这种攻击模型可能会引入新的威胁或放大现有的威胁。例如，从飞地内部直接访问不受信任的内存可能导致时间检查和使用（TOCTOU）漏洞，因为攻击者可以控制整个不受信任的内存。此外，空指针解引用可能具有更严重的安全影响，因为由操作系统控制的零页面也被视为恶意。当前的模糊测试方案，如SGXFuzz和FuzzSGX，在检测此类SGX特定漏洞方面存在限制。
> 
> 在本文中，我们提出了一种多维度结构感知的模糊测试框架EnclaveFuzz，它分析飞地源代码以提取输入结构和相关性，然后生成模糊测试模块，可以生成有效输入以通过健全性检查。为了进行多维度模糊测试，EnclaveFuzz创建所有三个输入维度的数据，包括进入飞地的参数和返回值，以及从飞地内部直接访问不受信任的内存。为了检测更多类型的漏洞，我们设计了一个新的清洗器来检测SGX特定漏洞和典型内存损坏漏洞。最后，我们提供了一个定制的SDK来加速模糊测试过程，并在不需要特殊硬件的情况下执行飞地。为了验证我们解决方案的有效性，我们将其应用于测试20个真实世界的开源飞地，并在其中14个中发现了162个漏洞。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/enclavefuzz-finding-vulnerabilities-in-sgx-applications/](https://www.ndss-symposium.org/ndss-paper/enclavefuzz-finding-vulnerabilities-in-sgx-applications/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-819-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-819-paper.pdf)
## Experimental Analyses of the Physical Surveillance Risks in Client-Side Content Scanning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#experimental-analyses-of-the-physical-surveillance-risks-in-client-side-content-scanning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#experimental-analyses-of-the-physical-surveillance-risks-in-client-side-content-scanning)**
### 作者
* Ashish Hooda, University of Wisconsin-Madison
* Andrey Labunets, UC San Diego
* Tadayoshi Kohno, University of Washington
* Earlence Fernandes, UC San Diego
### 摘要
> 内容扫描系统采用感知哈希算法扫描用户内容，以寻找非法材料，例如儿童色情或恐怖主义招募传单。感知哈希算法帮助确定两张图像是否在视觉上相似，同时保护输入图像的隐私。工业界和学术界的几项努力提出在客户端设备（例如智能手机）上进行扫描，因为即将推出端到端加密将使服务器端扫描变得困难。由于技术可能被滥用以进行审查，这些提案遭到了强烈批评。然而，在监视环境中使用此技术的风险尚不清楚。我们的研究通过实验性地描述一种滥用风险，即攻击者操纵内容扫描系统以对目标位置进行物理监视，从而推进了这一对话。我们的贡献如下：（1）我们在客户端图像扫描系统的背景下提供了物理监视的定义；（2）我们实验性地表征了这种风险，并创建了一种监视算法，通过毒化 perceptual hash 数据库的0.2％，实现了超过30％的物理监视率；（3）我们实验性地研究了客户端图像扫描系统的稳健性和监视之间的权衡，表明在大多数情况下，更强大的非法材料检测会导致物理监视的潜能增加。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/experimental-analyses-of-the-physical-surveillance-risks-in-client-side-content-scanning/](https://www.ndss-symposium.org/ndss-paper/experimental-analyses-of-the-physical-surveillance-risks-in-client-side-content-scanning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1401-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1401-paper.pdf)
## Flow Correlation Attacks on Tor Onion Service Sessions with Sliding Subset Sum.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#flow-correlation-attacks-on-tor-onion-service-sessions-with-sliding-subset-sum) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#flow-correlation-attacks-on-tor-onion-service-sessions-with-sliding-subset-sum)**
### 作者
* Daniela Lopes, INESC-ID / IST
### 摘要
> Tor是目前使用最广泛的匿名网络之一。它能够抵御流量相关攻击是提供强大匿名保障的关键。然而，流量相关攻击对Tor洋葱路由服务（以前称为“隐藏服务”）的可行性仍然是一个未解决的挑战。在本文中，我们提出了一种有效的流量相关攻击，可以对Tor网络中的洋葱路由服务会话进行去匿名化。我们的攻击基于一种名为Sliding Subset Sum（SUMo）的新型分布式技术，可以由全球多个勾结的ISP以联邦的方式部署。这些ISP在网络中的多个观察点收集Tor流量，并通过基于机器学习分类器和基于经典子集和决策问题的新型相似性函数的管道式架构进行分析。这些分类器使SUMo能够有效而高效地将洋葱路由服务会话去匿名化。我们还分析了Tor社区可能采取的可能对抗这些攻击的措施。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/flow-correlation-attacks-on-tor-onion-service-sessions-with-sliding-subset-sum/](https://www.ndss-symposium.org/ndss-paper/flow-correlation-attacks-on-tor-onion-service-sessions-with-sliding-subset-sum/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-337-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-337-paper.pdf)
## Faults in Our Bus: Novel Bus Fault Attack to Break ARM TrustZone.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#faults-in-our-bus-novel-bus-fault-attack-to-break-arm-trustzone) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#faults-in-our-bus-novel-bus-fault-attack-to-break-arm-trustzone)**
### 作者
* Nimish Mishra, Department of Computer Science and Engineering
### 摘要
> 随着物联网（IoT）的不断增长，高频率、高度复杂的片上系统（SoCs）得到了广泛部署，这些系统能够运行一个完整的操作系统（OS）。操作系统和其他软件对抗措施的存在使SoCs能够抵御在FPGA和微处理器上相关的传统故障攻击。在这项工作中，我们首次提出针对SoC架构的一个正交方面的实际影响：系统总线。在处理器-存储器交互指令执行期间，我们向系统总线注入电磁脉冲。我们展示了地址总线故障如何破坏掩码实现的密码算法的软件实现，使用了最先进的后量子密码（PQC）方案的实现作为例证，一个故障就泄露了整个秘钥。我们还演示了数据总线故障可以被控制和利用，以启动基于表的高级加密标准（AES）实现的差分故障分析（DFA）攻击。此外，我们证明了这种总线故障的影响可能是深远的，会误导流行且广泛使用的ARM TrustZone的安全性保证。我们利用数据总线故障（以及全球平台API规范中的漏洞）来误导签名验证步骤，加载恶意的受信任应用程序（TA）到TrustZone中。然后我们利用地址总线故障来窃取系统中其他良性TA的对称加密秘钥，导致TrustZone的安全完全崩溃。我们指出，由于攻击依赖于全球平台API规范中的漏洞，因此可以轻松移植到遵循该规范的任何TEE。为了强调该攻击的可移植性，我们成功地在两个不同平台（树莓派3和树莓派4）上的两个TrustZone实现（OP-TEE和MyTEE）上安装了恶意TA。最后，我们提出了可以集成到SoC环境中以防御这些攻击向量的对抗措施。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/faults-in-our-bus-novel-bus-fault-attack-to-break-arm-trustzone/](https://www.ndss-symposium.org/ndss-paper/faults-in-our-bus-novel-bus-fault-attack-to-break-arm-trustzone/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-499-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-499-paper.pdf)
## FP-Fed: Privacy-Preserving Federated Detection of Browser Fingerprinting.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#fp-fed-privacy-preserving-federated-detection-of-browser-fingerprinting) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#fp-fed-privacy-preserving-federated-detection-of-browser-fingerprinting)**
### 作者
* Meenatchi Sundaram Muthu Selva Annamalai, University College London
* Igor Bilogrevic, Google
* Emiliano De Cristofaro, University of California
### 摘要
> 浏览器指纹识别通常是跟踪用户在网络中的一种吸引人的替代方法，可以替代第三方cookie。事实上，常见Web浏览器对第三方cookie的限制和最近的GDPR等法规可能会加速这种转变。为了对抗浏览器指纹识别，先前的工作提出了许多技术来检测其普及程度和严重性。然而，大多数（如果不是全部）这些技术依赖于1）集中式Web爬行和/或2）计算密集型操作来提取和处理信号（例如，信息流和静态分析）。
> 
> 为了解决这些限制，我们提出了FP-Fed，这是用于浏览器指纹识别检测的第一个分布式系统。使用FP-Fed，用户可以根据其真实浏览模式进行设备上的模型协作训练，而无需将其训练数据与中心实体共享，而是依靠差分隐私联邦学习（DP-FL）。为了展示其可行性和有效性，我们在一组具有不同隐私级别，参与者数量和从脚本中提取的特征的20k个流行网站上评估了FP-Fed的性能。我们的实验证明FP-Fed能够在设备上仅依赖于从执行跟踪中提取的运行时信号，而无需进行任何资源密集型的操作，有效地实现了训练和推理。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/fp-fed-privacy-preserving-federated-detection-of-browser-fingerprinting/](https://www.ndss-symposium.org/ndss-paper/fp-fed-privacy-preserving-federated-detection-of-browser-fingerprinting/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-360-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-360-paper.pdf)
## From Hardware Fingerprint to Access Token: Enhancing the Authentication on IoT Devices.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#from-hardware-fingerprint-to-access-token-enhancing-the-authentication-on-iot-devices) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#from-hardware-fingerprint-to-access-token-enhancing-the-authentication-on-iot-devices)**
### 作者
* Yue Xiao, Wuhan University
* Yi He, Tsinghua University
* Xiaoli Zhang, Zhejiang University of Technology
* Qian Wang, Wuhan University
* Renjie Xie, Tsinghua University
* Kun Sun, George Mason University
* Ke Xu, Tsinghua University
* Qi Li, Tsinghua University
### 摘要
> 我们日常生活中消费者物联网产品的激增提高了对安全设备认证和访问控制的需求。不幸的是，这些资源受限的设备通常使用基于令牌的身份验证，这种方法容易受到令牌妥协攻击的影响，使攻击者能够冒充设备并通过窃取访问令牌来执行恶意操作。使用硬件指纹来确保其认证是减轻这些威胁的一种有希望的方法。然而，一旦攻击者窃取了一些硬件指纹（例如，通过中间人攻击），他们就能够通过训练机器学习模型来模仿指纹或重复使用这些指纹来伪造请求来绕过硬件认证。
> 
> 在本文中，我们提出了MCU-Token，这是一种安全的基于MCU的物联网设备的硬件指纹框架，即使加密机制（例如，私钥）被泄露也能安全运行。MCU-Token可以通过简单地向现有有效载荷添加基于硬件指纹的短令牌来轻松集成到各种物联网设备中。为了防止该令牌被再次使用，我们提出了一种消息映射方法，通过基于请求有效载荷生成硬件指纹将令牌绑定到特定请求上。为了防范机器学习攻击，我们将有效指纹与毒害数据混合在一起，使攻击者无法通过泄露的令牌训练出可用的模型。MCU-Token可以抵御装甲对手，这些对手可以通过中间人攻击来重播、伪造和转移请求，或者使用硬件（例如，使用相同的设备）和软件（例如，机器学习攻击）策略来模仿指纹。系统评估显示，MCU-Token在各种物联网设备和应用场景中都可以实现高精度（超过97%）的安全性，而开销较低。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/from-hardware-fingerprint-to-access-token-enhancing-the-authentication-on-iot-devices/](https://www.ndss-symposium.org/ndss-paper/from-hardware-fingerprint-to-access-token-enhancing-the-authentication-on-iot-devices/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1231-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1231-paper.pdf)
## Faster and Better: Detecting Vulnerabilities in Linux-based IoT Firmware with Optimized Reaching Definition Analysis.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#faster-and-better-detecting-vulnerabilities-in-linux-based-iot-firmware-with-optimized-reaching-definition-analysis) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#faster-and-better-detecting-vulnerabilities-in-linux-based-iot-firmware-with-optimized-reaching-definition-analysis)**
### 作者
* Zicong Gao, State Key Laboratory of Mathematical Engineering and Advanced Computing
* Chao Zhang, Tsinghua University
* Hangtian Liu, State Key Laboratory of Mathematical Engineering and Advanced Computing
* Wenhou Sun, Tsinghua University
* Zhizhuo Tang, State Key Laboratory of Mathematical Engineering and Advanced Computing
* Liehui Jiang, State Key Laboratory of Mathematical Engineering and Advanced Computing
* Jianjun Chen, Tsinghua…
### 摘要
> 物联网设备经常存在漏洞，即不受信任的输入可能触发潜在漏洞并流向固件中的敏感操作，这可能导致严重损害。由于此类漏洞通常是污点式的，静态污点分析是发现它们的一种有前途的解决方案。然而，现有解决方案的效率和有效性有限。在本文中，我们提出了一个新的高效、有效的污点分析解决方案，即HermeScan，用于发现此类漏洞，利用到达定义分析（RDA）进行污点分析，并且得到了更少的假阴性、假阳性和时间成本。我们已经实现了HermeScan的原型，并针对两个数据集进行了全面评估，即一个包含30个最新固件的0天数据集和一个包含98个旧固件的N天数据集，并与两种最先进的解决方案（SOTA），即KARONTE和SaTC进行了比较。在有效性方面，HermeScan、SaTC和KARONTE在0天数据集中分别发现163、32和0个漏洞。在准确性方面，HermeScan、SaTC和KARONTE在0天数据集中的真正阳性率分别为81％、42％和0％。在效率方面，HermeScan在查找0天漏洞方面平均比SaTC和KARONTE快7.5倍和3.8倍。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/faster-and-better-detecting-vulnerabilities-in-linux-based-iot-firmware-with-optimized-reaching-definition-analysis/](https://www.ndss-symposium.org/ndss-paper/faster-and-better-detecting-vulnerabilities-in-linux-based-iot-firmware-with-optimized-reaching-definition-analysis/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-346-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-346-paper.pdf)
## Gradient Shaping: Enhancing Backdoor Attack Against Reverse Engineering.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#gradient-shaping-enhancing-backdoor-attack-against-reverse-engineering) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#gradient-shaping-enhancing-backdoor-attack-against-reverse-engineering)**
### 作者
* Rui Zhu, Indiana University Bloominton
* Di Tang, Indiana University Bloomington
* Siyuan Tang, Indiana University Bloomington
* Zihao Wang, Indiana University Bloomington
* Guanhong Tao, Purdue University
* Shiqing Ma, University of Massachusetts Amherst
* XiaoFeng Wang, Indiana University Bloomington
* Haixu Tang, Indiana University
### 摘要
> 大多数现有的检测植入后门的机器学习（ML）模型的方法采取两种方式之一：触发反演（又名反向工程）和权重分析（又名模型诊断）。特别是，基于梯度的触发反演被认为是最有效的后门检测技术之一，这得到了TrojAI竞赛、特洛伊检测挑战和backdoorBench的证明。然而，对于为什么这种技术如此有效以及它是否提高了后门攻击的难度，还未有多少研究。本文报告了首次试图回答这个问题的尝试，通过分析植入后门模型在触发输入周围的输出变化率。我们的研究表明，现有的攻击倾向于在触发输入周围注入特征为低变化率的后门，这些特征容易被基于梯度的触发反演技术捕捉到。与此同时，我们发现低变化率对于后门攻击的成功并不是必需的：我们设计了一种新的攻击增强方法称为梯度塑形（GRASP），它沿着对抗训练的相反方向，以减少模型在触发方面的变化率，而不损害其后门效果。此外，我们提供了理论分析来解释这种新技术的有效性以及基于梯度的触发反演的基本弱点。最后，我们进行了理论和实验分析，表明GRASP增强不会降低对抗权重分析和其他不使用检测的后门缓解方法的有效性。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/gradient-shaping-enhancing-backdoor-attack-against-reverse-engineering/](https://www.ndss-symposium.org/ndss-paper/gradient-shaping-enhancing-backdoor-attack-against-reverse-engineering/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-450-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-450-paper.pdf)
## From Interaction to Independence: zkSNARKs for Transparent and Non-Interactive Remote Attestation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#from-interaction-to-independence-zksnarks-for-transparent-and-non-interactive-remote-attestation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#from-interaction-to-independence-zksnarks-for-transparent-and-non-interactive-remote-attestation)**
### 作者
* Shahriar Ebrahimi, IDEAS-NCBR
* Parisa Hassanizadeh, IDEAS-NCBR
### 摘要
> 远程认证（RA）协议已广泛用于评估远程设备上软件的完整性。目前，最先进的RA协议缺少一个关键特性：透明度。这意味着最终认证验证的细节对公众不是公开可访问或可验证的。此外，这些协议的交互性通常限制了认证，只能限定于拥有机密设备数据，如预共享密钥和初始测量的受信任方。这些限制妨碍了这些协议在各种应用中的广泛采用。
> 
> 在本文中，我们介绍了一种基于zkSNARKs的非交互式、透明和公开可证明的RA协议zRA。zRA可以在不需要预共享密钥或访问机密数据的情况下进行设备认证的验证，确保了一种不信任且开放的认证过程。这消除了对在线服务或验证方安全存储的依赖。此外，zRA不会强加任何额外的安全假设，除了基本的密码学方案和证明方（即ROM和MPU）的基本信任锚点组件。设备生成的零知识认证证明具有恒定的大小，不受网络复杂性和认证数量的影响。此外，这些证明不会泄露设备内部状态的敏感信息，允许任何人以公共和可审计的方式进行验证。我们进行了广泛的安全分析，并展示了zRA相比先前的工作的可扩展性。我们的分析表明，zRA在点对点和Pub/Sub网络结构中表现尤为出色。为了验证实用性，我们使用Circom语言实现了zRA的开源原型。我们展示了zRA可以安全地部署在公共无许可区块链上，作为认证数据的档案平台，以实现抵御DoS攻击的弹性。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/from-interaction-to-independence-zksnarks-for-transparent-and-non-interactive-remote-attestation/](https://www.ndss-symposium.org/ndss-paper/from-interaction-to-independence-zksnarks-for-transparent-and-non-interactive-remote-attestation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-815-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-815-paper.pdf)
## Group-based Robustness: A General Framework for Customized Robustness in the Real World.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#group-based-robustness-a-general-framework-for-customized-robustness-in-the-real-world) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#group-based-robustness-a-general-framework-for-customized-robustness-in-the-real-world)**
### 作者
* Weiran Lin, Carnegie Mellon University
* Keane Lucas, Carnegie Mellon University
* Neo Eyal, Tel Aviv University
* Lujo Bauer, Carnegie Mellon University
* Michael K. Reiter, Duke University
* Mahmood Sharif, Tel Aviv University
### 摘要
> 机器学习模型已知易受到规避攻击的影响，这些攻击扰动模型输入以诱导错误分类。在这项工作中，我们确定了现实世界中存在真正的威胁，现有攻击无法准确评估。具体来说，我们发现常规度量目标和非目标鲁棒性的指标不适当地反映了模型抵抗从一个源类别到另一个文本目标类别的攻击能力。为了解决现有方法的缺点，我们正式定义了一种新的度量标准，称为基于群体的鲁棒性，这种度量标准补充了现有的指标，并更适合评估特定攻击情景下的模型性能。我们实证表明，基于群体的鲁棒性使我们能够区分模型在某些攻击场景下对特定威胁模型的易受性，而传统的鲁棒性度量标准并不适用。此外，为了高效准确地衡量基于群体的鲁棒性，我们1）提出了两种损失函数，2）确定了三种新的攻击策略。我们实证表明，使用我们的新损失函数寻找规避样本的成功率相当，并且省去了大量计算，寻找规避样本的时间比蛮力搜索方法节约了高达99%。最后，我们提出了一种增加基于群体鲁棒性的防御方法，增加了高达3.52倍的鲁棒性。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/group-based-robustness-a-general-framework-for-customized-robustness-in-the-real-world/](https://www.ndss-symposium.org/ndss-paper/group-based-robustness-a-general-framework-for-customized-robustness-in-the-real-world/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-84-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-84-paper.pdf)
## Improving the Robustness of Transformer-based Large Language Models with Dynamic Attention.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#improving-the-robustness-of-transformer-based-large-language-models-with-dynamic-attention) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#improving-the-robustness-of-transformer-based-large-language-models-with-dynamic-attention)**
### 作者
* Lujia Shen, Zhejiang University
* Yuwen Pu, Zhejiang University
* Shouling Ji, Zhejiang University
* Changjiang Li, Penn State
* Xuhong Zhang, Zhejiang University
* Chunpeng Ge, Shandong University
* Ting Wang, Penn State
### 摘要
> 基于Transformer的模型（例如BERT和GPT）由于其卓越的性能，已经在自然语言处理（NLP）中得到广泛应用。然而，最近的研究表明它们容易受到文本对抗攻击的影响，攻击者有意地操纵文本输入，以误导模型的输出。尽管已经提出了各种方法来增强模型的鲁棒性并减轻这种脆弱性，但许多方法需要消耗大量的资源（例如对抗性训练），或者仅提供有限的防护（例如防御性丢弃）。
> 
> 在本文中，我们提出了一种新的方法——动态注意力，专为Transformer架构量身定制，以增强模型本身对各种对抗攻击的内在鲁棒性。我们的方法不需要下游任务知识，也不会产生额外的成本。所提出的动态注意力由两个模块组成：（i）注意力矫正，即屏蔽或减弱所选标记的注意力值；（ii）动态建模，即动态构建候选标记集。广泛的实验证明，动态注意力显著减轻了对抗攻击的影响，相比先前的方法，提高了多达33%。动态注意力的模型级设计使其可以轻松地与其他防御方法（例如对抗性训练）相结合，以进一步增强模型的鲁棒性。此外，我们还证明，与其他动态建模方法相比，动态注意力保留了原始模型的最先进鲁棒性空间。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/improving-the-robustness-of-transformer-based-large-language-models-with-dynamic-attention/](https://www.ndss-symposium.org/ndss-paper/improving-the-robustness-of-transformer-based-large-language-models-with-dynamic-attention/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-115-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-115-paper.pdf)
## IdleLeak: Exploiting Idle State Side Effects for Information Leakage.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#idleleak-exploiting-idle-state-side-effects-for-information-leakage) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#idleleak-exploiting-idle-state-side-effects-for-information-leakage)**
### 作者
* Fabian Rauscher, Graz University of Technology
* Andreas Kogler, Graz University of Technology
* Jonas Juffinger, Graz University of Technology
* Daniel Gruss, Graz University of Technology
### 摘要
> 现代处理器配备了许多功能，可根据工作负载调节能耗。为此，软件通过专用指令（例如hlt）将处理器核心置于空闲状态。近期，Intel引入了C0.1和C0.2空闲状态。虽然以前只能通过特权操作达到空闲状态，但这些新的空闲状态也可以被非特权攻击者达到。然而，这些空闲状态开放的攻击面仍不清楚。
> 
> 本文提出了IdleLeak，一种新的侧信道攻击，利用新的C0.1和C0.2空闲状态的两种不同方式。具体而言，我们利用处理器空闲状态C0.2来监视系统活动并用于新的数据外泄手段，以及利用空闲状态C0.1来监视逻辑兄弟核心的系统活动。由于低级x86设计，IdleLeak仍然可以在受害者工作负载所在的任何地方工作，即跨核心。我们证明IdleLeak在本地按键计时攻击中泄露重要信息，达到90.5％的F1分数和仅为12μs的时间预测标准误差。我们还使用经过短时傅里叶变换预处理并用卷积神经网络分类的IdleLeak traces演示了网站和视频指纹攻击。这些攻击非常实用，F1分数分别为85.2％（开放世界网站指纹）和81.5％（开放世界视频指纹）。我们在隐蔽信道场景中评估IdleLeak侧信道的吞吐量，即使用中断和性能增加效果。使用性能增加效果，IdleLeak在本机场景中实现真实容量7.1 Mbit/s，在跨虚拟机场景中为46.3 kbit/s。使用中断，IdleLeak在本机场景中实现了656.37 kbit/s。我们得出结论，在运行不受信任的代码时，需要在个人和云环境中采取IdleLeak缓解措施。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/idleleak-exploiting-idle-state-side-effects-for-information-leakage/](https://www.ndss-symposium.org/ndss-paper/idleleak-exploiting-idle-state-side-effects-for-information-leakage/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-78-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-78-paper.pdf)
## GraphGuard: Detecting and Counteracting Training Data Misuse in Graph Neural Networks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#graphguard-detecting-and-counteracting-training-data-misuse-in-graph-neural-networks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#graphguard-detecting-and-counteracting-training-data-misuse-in-graph-neural-networks)**
### 作者
* Bang Wu, CSIRO's Data61/Monash University
* He Zhang, Monash University
* Xiangwen Yang, Monash University
* Shuo Wang, CSIRO's Data61/Shanghai Jiao Tong University
* Minhui Xue, CSIRO's Data61
* Shirui Pan, Griffith University
* Xingliang Yuan, Monash University
### 摘要
> 在图数据分析中，图神经网络（GNNs）的出现以及它们在机器学习即服务平台上的部署引发了关于模型训练期间数据滥用的重要担忧。由于本地训练过程缺乏透明度，这种情况进一步恶化，可能导致大量图数据的未经授权积累，从而侵犯数据所有者的知识产权。现有方法往往只关注数据滥用检测或缓解，主要针对本地GNN模型而不是基于云的MLaaS平台。这些限制要求提出一个有效而全面的解决方案，旨在在不需要确切训练数据的情况下检测和缓解数据滥用，同时尊重这些数据的专有性质。本文介绍了一种名为GraphGuard的开创性方法来解决这些挑战。我们提出了一种无需训练数据的方法，不仅可以检测图数据滥用，还通过有针对性的遗忘来减轻其影响，而不依赖于原始训练数据。我们的创新滥用检测技术利用放射性数据进行成员推断，增强成员与非成员数据分布之间的区别。对于缓解，我们利用合成图形模拟先前目标模型学到的特征，即使没有确切的图数据，也能实现有效的遗忘。我们进行了利用四个真实世界图数据集的全面实验，以展示GraphGuard在检测和遗忘方面的效果。我们展示了GraphGuard在这些数据集中使用各种GNN模型时达到了接近100%的几乎完美检测率。此外，它通过消除未学习图的影响，在准确率略微降低的情况下进行遗忘（不到5%）。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/graphguard-detecting-and-counteracting-training-data-misuse-in-graph-neural-networks/](https://www.ndss-symposium.org/ndss-paper/graphguard-detecting-and-counteracting-training-data-misuse-in-graph-neural-networks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-441-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-441-paper.pdf)
## Information Based Heavy Hitters for Real-Time DNS Data Exfiltration Detection.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#information-based-heavy-hitters-for-real-time-dns-data-exfiltration-detection) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#information-based-heavy-hitters-for-real-time-dns-data-exfiltration-detection)**
### 作者
* Yarin Ozery, Ben-Gurion University of the Negev
### 摘要
> 数据通过DNS协议泄露及其检测近年来得到了广泛研究。先前的研究集中在离线检测方法上，尽管能够检测攻击，但允许大量数据在攻击被检测和处理之前泄露。本文介绍了基于信息的重要数据点（ibHH），这是一种基于对注册域传输的信息量的实时估算的检测方法。ibHH使用固定大小的内存并支持常数时间查询，适合部署在递归DNS服务器上，以进一步减少检测和响应时间。在我们的评估中，我们将所提出的方法的性能与真实世界数据集上超过2500亿个DNS查询的领先最新DNS泄露检测方法进行了比较。评估表明，ibHH能够成功检测慢至0.7B/s的泄漏速率，假阳性警报率低于0.004，与其他方法相比，资源消耗显著降低。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/information-based-heavy-hitters-for-real-time-dns-data-exfiltration-detection/](https://www.ndss-symposium.org/ndss-paper/information-based-heavy-hitters-for-real-time-dns-data-exfiltration-detection/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-388-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-388-paper.pdf)
## FreqFed: A Frequency Analysis-Based Approach for Mitigating Poisoning Attacks in Federated Learning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#freqfed-a-frequency-analysis-based-approach-for-mitigating-poisoning-attacks-in-federated-learning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#freqfed-a-frequency-analysis-based-approach-for-mitigating-poisoning-attacks-in-federated-learning)**
### 作者
* Hossein Fereidooni, Technical University of Darmstadt
* Alessandro Pegoraro, Technical University of Darmstadt
* Phillip Rieger, Technical University of Darmstadt
* Alexandra Dmitrienko, University of Wuerzburg
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
### 摘要
> 联邦学习（FL）是一种合作学习范式，允许多个客户端共同训练模型，而无需共享他们的训练数据。然而，FL容易受到毒化攻击的影响，其中对手会向联邦模型聚合过程中注入操纵的模型更新，以破坏或销毁预测（非定向毒化）或植入隐藏功能（定向毒化或后门）。现有的防范FL中毒攻击的方法存在一些局限性，比如依赖于对攻击类型和策略、数据分布的特定假设，或者不足以抵抗先进的注入技术和策略，同时保持聚合模型的实用性。
> 
> 为了解决现有防御的不足，我们采用一种全新的方法来检测毒化（定向和非定向）攻击。我们提出了FreqFed，一种新颖的聚合机制，它将模型更新（即权重）转换为频域，在那里我们可以识别核心频率成分，这些成分包含了足够的权重信息。这使我们能够在客户端的本地训练过程中有效地过滤掉恶意的更新，无论攻击类型、策略和客户端的数据分布如何。我们在不同的应用领域对FreqFed的效率和有效性进行了广泛评估，包括图像分类、词语预测、物联网入侵检测和语音识别。我们证明了FreqFed能够有效地减轻毒化攻击对聚合模型实用性的影响。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/freqfed-a-frequency-analysis-based-approach-for-mitigating-poisoning-attacks-in-federated-learning/](https://www.ndss-symposium.org/ndss-paper/freqfed-a-frequency-analysis-based-approach-for-mitigating-poisoning-attacks-in-federated-learning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-620-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-620-paper.pdf)
## Leaking the Privacy of Groups and More: Understanding Privacy Risks of Cross-App Content Sharing in Mobile Ecosystem.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#leaking-the-privacy-of-groups-and-more-understanding-privacy-risks-of-cross-app-content-sharing-in-mobile-ecosystem) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#leaking-the-privacy-of-groups-and-more-understanding-privacy-risks-of-cross-app-content-sharing-in-mobile-ecosystem)**
### 作者
* Jiangrong Wu, Sun Yat-sen University
* Yuhong Nan, Sun Yat-sen University
* Luyi Xing, Indiana University Bloomington
* Jiatao Cheng, Sun Yat-sen University
* Zimin Lin, Alibaba Group
* Zibin Zheng, Sun Yat-sen University
* Min Yang, Fudan University
### 摘要
> 跨应用程序内容共享是移动应用程序中广泛使用的突出特征之一。例如，一个应用程序中的短视频可以共享到另一个应用程序（例如，一个消息应用程序），并由其他用户进一步查看。在许多情况下，这些跨应用程序内容共享活动可能会对分享者和被分享者产生隐私方面的影响，例如暴露应用程序用户的个人兴趣。
> 
> 在本文中，我们提供了有关移动生态系统中跨应用程序内容共享（我们称之为Cracs）活动隐私方面影响的首次深入研究。我们的研究表明，在共享过程中，对手不仅可以像传统的网络追踪器一样跟踪和推断用户兴趣，而且还可以给应用程序用户造成其他严重的隐私后果。更具体地说，由于多个侵犯隐私的Cracs设计和实现，对手可以轻易地向外部方披露用户的社交关系，或者不必要地暴露用户身份及其相关个人数据（例如，在另一个应用程序中的用户帐户）。这些隐私方面的影响确实是应用程序用户关注的问题，这已由我们进行的300名参与者的用户研究得到了确认。
> 
> 为了进一步评估我们确定的隐私影响的整体影响，我们设计了一个名为Shark的自动管道，结合静态分析和动态分析，以有效地确定给定应用程序是否引入了Cracs中的不必要数据暴露。我们分析了从美国和中国的应用商店收集的300个最常下载的应用程序。分析结果显示，来自中国的应用程序中有55％，来自美国的应用程序中有10％的确存在问题。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/leaking-the-privacy-of-groups-and-more-understanding-privacy-risks-of-cross-app-content-sharing-in-mobile-ecosystem/](https://www.ndss-symposium.org/ndss-paper/leaking-the-privacy-of-groups-and-more-understanding-privacy-risks-of-cross-app-content-sharing-in-mobile-ecosystem/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-138-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-138-paper.pdf)
## Invisible Reflections: Leveraging Infrared Laser Reflections to Target Traffic Sign Perception.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#invisible-reflections-leveraging-infrared-laser-reflections-to-target-traffic-sign-perception) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#invisible-reflections-leveraging-infrared-laser-reflections-to-target-traffic-sign-perception)**
### 作者
* Takami Sato, University of California Irvine
* Sri Hrushikesh Varma Bhupathiraju, University of Florida
* Michael Clifford, Toyota InfoTech Labs
* Takeshi Sugawara, The University of Electro-Communications
* Qi Alfred Chen, University of California
### 摘要
> 所有车辆都必须遵守管理交通行为的规则，无论是人驾驶的车辆还是联网自动驾驶车辆（CAV）。道路标志表示当地有效的规则，如限速和礼让或停车要求。最近的研究表明，攻击，如在标志上添加贴纸或投影彩色补丁，会导致CAV误解，从而导致潜在的安全问题。人类可以看到并潜在地抵御这些攻击。但人类无法发现他们不能观察到的事物。我们已经开发出一种有效的物理世界攻击，利用无滤波图像传感器的灵敏度和红外激光反射（ILR）的特性，这些对人类来说是看不见的。该攻击旨在影响CAV摄像头和感知，通过诱导错误分类来破坏交通标志的识别。在这项工作中，我们制定了基于ILR的交通标志感知攻击的威胁模型和要求。我们通过针对四个红外敏感摄像头的实际实验，评估了ILR攻击的有效性，这些实验针对两种主要的交通标志识别架构。我们的黑盒优化方法允许攻击在室内静态场景中实现高达100%的攻击成功率，在室外移动车辆场景中实现≥80.5%的攻击成功率。我们发现最新的认证防御技术对ILR攻击无效，因为它错误认证了≥33.5%的情况。为了解决这个问题，我们提出了一种基于红外激光反射的物理特性的检测策略，可以检测到96%的ILR攻击。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/invisible-reflections-leveraging-infrared-laser-reflections-to-target-traffic-sign-perception/](https://www.ndss-symposium.org/ndss-paper/invisible-reflections-leveraging-infrared-laser-reflections-to-target-traffic-sign-perception/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1053-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1053-paper.pdf)
## IRRedicator: Pruning IRR with RPKI-Valid BGP Insights.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#irredicator-pruning-irr-with-rpki-valid-bgp-insights) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#irredicator-pruning-irr-with-rpki-valid-bgp-insights)**
### 作者
* Minhyeok Kang, Seoul National University
* Weitong Li, Virginia Tech
* Roland van Rijswijk-Deij, University of Twente
* Ted "Taekyoung" Kwon, Seoul National University
* Taejoong Chung, Virginia Tech
### 摘要
> 边界网关协议（BGP）提供了一种交换路由信息的方式，帮助路由器构建其路由表。然而，由于缺乏安全考虑，BGP一直存在易受攻击的漏洞，如BGP劫持攻击。为了缓解这些问题，使用了两个数据源：Internet路由注册表（IRR）和资源公钥基础设施（RPKI），以提供IP前缀和其授权自治系统（AS）之间的可靠映射。然而，每个数据源都有其自己的局限性。IRR因其网络运营商没有足够的激励来保持其最新的AS信息而被公认为其Route对象过时；而RPKI由于其运营复杂性而缓慢部署。在本文中，我们测量IRR中的Route对象和RPKI中的ROA对象之间的常见不一致性。我们接着分别通过关注它们的BGP通告模式，对不一致和一致的Route对象进行表征。基于此洞见，我们开发了一种利用机器学习算法识别过时Route对象的技术，并评估其性能。通过真实的基于跟踪的实验，我们展示了我们的技术可以通过将可能的Route对象的百分比从IRR Route对象的72%减少到40%（整个IRR Route对象的），从而对现状提供优势。这样，我们在验证BGP通告的准确性方面实现了93%的覆盖率，覆盖了87%的BGP通告。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/irredicator-pruning-irr-with-rpki-valid-bgp-insights/](https://www.ndss-symposium.org/ndss-paper/irredicator-pruning-irr-with-rpki-valid-bgp-insights/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-524-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-524-paper.pdf)
## Large Language Model guided Protocol Fuzzing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#large-language-model-guided-protocol-fuzzing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#large-language-model-guided-protocol-fuzzing)**
### 作者
* Ruijie Meng, National University of Singapore
### 摘要
> 如何在没有协议的机器可读规范的情况下找到协议实现中的安全漏洞？面对互联网，协议实现是尤其关键的安全软件系统，输入必须遵循通常以自然语言（RFC）数百页非正式指定的特定结构和顺序。如果没有该协议的某种机器可读版本，将难以为其实现自动生成遵循所需结构和顺序的有效测试输入。通过在一组记录的消息序列上进行变异模糊处理作为种子输入，可能部分缓解这一挑战。然而，可用种子集合通常相当有限，几乎无法覆盖协议状态和输入结构的多样性。
> 
> 本文探讨了与经过预先训练的大型语言模型（LLM）系统地交互的机会，该模型已吸收了数百万页人类可读的协议规范，以提取关于协议的机器可读信息，可在协议模糊处理期间使用。我们利用LLMs对于众所周知的协议的协议消息类型的知识。我们还通过生成消息序列并预测响应代码来检查LLM在检测有状态协议实现的“状态”方面的能力。基于这些观察结果，我们开发了一个由LLM引导的协议实现模糊处理引擎。我们的协议模糊工具ChatAFL为协议中的每种消息类型构建语法，然后通过与LLMs的交互来变异消息或预测消息序列中的下一条消息。来自ProFuzzbench的各种真实协议的实验显示，在状态和代码覆盖方面取得了显著的功效。我们的LLM引导的有状态的fuzzer与最先进的fuzzers AFLNet 和 NSFuzz 进行了比较。ChatAFL 涵盖 47.6% 和 42.7% 更多的状态转换，分别为 29.6% 和 25.8% 的更多状态，以及分别为 5.8% 和 6.7% 的更多代码。除了增强的覆盖范围外，ChatAFL 还发现了广泛使用和经过全面测试的协议实现中的九个独特且以前未知的漏洞，而 AFLNet 和 NSFuzz 分别仅发现其中的三个和四个。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/large-language-model-guided-protocol-fuzzing/](https://www.ndss-symposium.org/ndss-paper/large-language-model-guided-protocol-fuzzing/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-556-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-556-paper.pdf)
## LoRDMA: A New Low-Rate DoS Attack in RDMA Networks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#lordma-a-new-low-rate-dos-attack-in-rdma-networks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#lordma-a-new-low-rate-dos-attack-in-rdma-networks)**
### 作者
* Shicheng Wang, Tsinghua University
* Menghao Zhang, Beihang University & Infrawaves
* Yuying Du, Information Engineering University
* Ziteng Chen, Southeast University
* Zhiliang Wang, Tsinghua University & Zhongguancun Laboratory
* Mingwei Xu, Tsinghua University & Zhongguancun Laboratory
* Renjie Xie, Tsinghua University
* Jiahai Yang, Tsinghua University & Zhongguancun Laboratory
### 摘要
> RDMA广泛应用于从私有数据中心应用到多租户云，这使得RDMA安全引起了极大的关注。然而，现有的RDMA安全研究主要关注RDMA系统的安全性，而RDMA网络中耦合通信控制机制（代表PFC和DCQCN）的安全性很大程度上被忽视。本文通过大量实验和分析，证明了并发短时突发可以通过PFC和DCQCN之间的互动导致跨多个跳跃的流量出现 drast ic 性能损失。我们还总结了性能损失和突发峰值率以及持续时间之间的漏洞。基于这些漏洞，我们提出了LoRDMA攻击，一种针对RDMA通信控制机制的低速DoS攻击。通过监视RTT作为反馈信号，LoRDMA可以自适应地：1）将机器人协调到不同的目标交换机端口上，以高效地覆盖更多受害流；2）调度突发参数以高效地导致重大性能损失。我们在ns-3模拟和云RDMA集群中进行LoRDMA攻击的实施和评估。结果表明，与现有攻击相比，LoRDMA攻击在更低的攻击流量和检测能力下实现了更高的受害者流覆盖率和性能损失。而在云RDMA集群中，典型分布式机器学习训练应用程序（NCCL测试）的通信性能在LoRDMA攻击下可从 18.23% 降至 56.12%。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/lordma-a-new-low-rate-dos-attack-in-rdma-networks/](https://www.ndss-symposium.org/ndss-paper/lordma-a-new-low-rate-dos-attack-in-rdma-networks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-25-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-25-paper.pdf)
## Like, Comment, Get Scammed: Characterizing Comment Scams on Media Platforms.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#like-comment-get-scammed-characterizing-comment-scams-on-media-platforms) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#like-comment-get-scammed-characterizing-comment-scams-on-media-platforms)**
### 作者
* Xigao Li, Stony Brook University
* Amir Rahmati, Stony Brook University
* Nick Nikiforakis, Stony Brook University
### 摘要
> 鉴于大型媒体平台（如YouTube）在网络上的迅猛发展，攻击者试图滥用它们以便轻松地接触数亿用户并不足为奇。在这些平台上发生的社会工程入侵事件中，评论诈骗尽管存在据称可以让内容创作者控制其频道评论的机制，但其流行度依然上升。在评论诈骗中，攻击者设立由脚本控制的账户，可以在媒体平台上自动发布或回复评论，诱使用户与他们联系。通过承诺免费奖品和投资机会，攻击者旨在从联系他们的最终用户那里窃取金融资产。
> 
> 在本文中，我们首次系统地、大规模地研究了评论诈骗。我们设计和实施了一个基础设施，以便在6个月的时间里收集了来自20个不同YouTube频道的880万条评论的数据集。我们基于评论的文本、图形和时间特征开发了过滤器，并从1万个独特账户中识别出了20.6万条诈骗评论。利用这一数据集，我们展示了对诈骗活动、评论动态以及诈骗者使用的逃避技术的分析。最后，通过经过IRB批准的研究，我们与50名诈骗者互动，以获得有关他们的社会工程战术和支付偏好的见解。通过公共区块链上的交易记录，我们对诈骗者窃取的金融资产进行了定量分析，发现仅参与我们用户研究的诈骗者就窃取了数百万美元的资金。我们的研究表明，现有的诈骗检测机制不足以遏制滥用行为，并指出需要更好的评论审查工具以及其他变革，以使攻击者难以获取这些大型平台上的成千上万个账户。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/like-comment-get-scammed-characterizing-comment-scams-on-media-platforms/](https://www.ndss-symposium.org/ndss-paper/like-comment-get-scammed-characterizing-comment-scams-on-media-platforms/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-60-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-60-paper.pdf)
## Maginot Line: Assessing a New Cross-app Threat to PII-as-Factor Authentication in Chinese Mobile Apps.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#maginot-line-assessing-a-new-cross-app-threat-to-pii-as-factor-authentication-in-chinese-mobile-apps) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#maginot-line-assessing-a-new-cross-app-threat-to-pii-as-factor-authentication-in-chinese-mobile-apps)**
### 作者
* Fannv He, National Computer Network Intrusion Protection Center
### 摘要
> 认证是确保用户安全的已建立的实践之一。个人身份信息（PII），如国民身份证号码（ID号码）和银行卡号，在中国的移动应用程序中被广泛使用作为验证用户的额外秘密，即PII作为因素认证（PaFA）。在本文中，我们发现一个对PaFA谨慎性的新威胁：应用程序的同时使用和与业务相关的交互使目标应用程序的认证强度比设计的要弱。一个对手，只知道较少的认证因素（只有短信动态口令）而不是PaFA系统所需的，可以通过收集信息或滥用其他应用程序的跨应用程序授权来破坏认证。为了系统地研究潜在风险，我们提出了一个半自动系统MAGGIE，用于评估目标应用程序中PaFA的安全性。通过借助MAGGIE测量中国应用市场中的234个真实应用程序，我们发现75.4％的部署了PaFA的应用程序可以被绕过，包括流行的和敏感的应用程序（例如支付宝、微信、银联），导致严重后果，如劫持用户帐户和进行未经授权的购买。此外，我们进行了一项调查，以展示新风险对用户的实际影响。最后，我们向供应商报告了我们的发现，并提供了几项缓解措施。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/maginot-line-assessing-a-new-cross-app-threat-to-pii-as-factor-authentication-in-chinese-mobile-apps/](https://www.ndss-symposium.org/ndss-paper/maginot-line-assessing-a-new-cross-app-threat-to-pii-as-factor-authentication-in-chinese-mobile-apps/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-241-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-241-paper.pdf)
## MASTERKEY: Automated Jailbreaking of Large Language Model Chatbots.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#masterkey-automated-jailbreaking-of-large-language-model-chatbots) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#masterkey-automated-jailbreaking-of-large-language-model-chatbots)**
### 作者
* Gelei Deng, Nanyang Technological University
* Yi Liu, Nanyang Technological University
* Yuekang Li, University of New South Wales
* Kailong Wang, Huazhong University of Science and Technology
* Ying Zhang, Virginia Tech
* Zefeng Li, Nanyang Technological University
* Haoyu Wang, Huazhong University of Science and Technology
* Tianwei Zhang, Nanyang Technological University
* Yang Liu, Nanyang Technological University
### 摘要
> 大型语言模型（LLMs），比如聊天机器人，在各个领域取得了显著进展，但仍然容易受到越狱攻击的影响，这些攻击旨在引诱产生不当回应。尽管已经努力识别这些弱点，但当前的策略对主流的LLM聊天机器人仍然不起作用，主要原因是服务提供商未披露的防御措施。本文介绍了一个名为MASTERKEY的框架，该框架探讨了越狱攻击和对策的动态。我们提出了一种基于时间特征的新方法，以解剖LLM聊天机器人的防御措施。这种技术受到基于时间的SQL注入的启发，揭示了这些防御措施的运作方式，并展示了对几个LLM聊天机器人的概念验证攻击。
> 
> 此外，MASTERKEY还采用了一种创新的方法，用于自动生成针对防御强大的LLM聊天机器人的越狱提示。通过对LLM进行越狱提示的微调，我们创建了成功率为21.58%的攻击，显著高于现有方法所达到的7.33%。我们已告知服务提供商这些发现，强调了加强防御措施的迫切需要。这项工作不仅揭示了LLM的漏洞，而且强调了对此类攻击的强大防御的重要性。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/masterkey-automated-jailbreaking-of-large-language-model-chatbots/](https://www.ndss-symposium.org/ndss-paper/masterkey-automated-jailbreaking-of-large-language-model-chatbots/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-188-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-188-paper.pdf)
## MadRadar: A Black-Box Physical Layer Attack Framework on mmWave Automotive FMCW Radars.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#madradar-a-black-box-physical-layer-attack-framework-on-mmwave-automotive-fmcw-radars) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#madradar-a-black-box-physical-layer-attack-framework-on-mmwave-automotive-fmcw-radars)**
### 作者
* David Hunt, Duke University
* Kristen Angell, Duke University
* Zhenzhou Qi, Duke University
* Tingjun Chen, Duke University
* Miroslav Pajic, Duke University
### 摘要
> 频率调制连续波（FMCW）毫米波（mmWave）雷达在许多现今汽车的先进驾驶辅助系统（ADAS）中发挥着关键作用。尽管以前的研究已经展示了这些传感器成功的假阳性欺骗攻击，但除了一个攻击者需要掌握受害雷达配置的运行时知识外，其他攻击攻击都无法被实现。在这项研究中，我们引入了MadRadar，一种能够实时估计受害雷达配置并执行攻击的mmWave FMCW汽车雷达的黑盒攻击框架。我们评估了这种攻击以恶意操纵受害雷达的点云，并展示了有效地“添加”（即假阳性攻击）、“删除”（即假阴性攻击）或“移动”（即平移攻击）从受害汽车的场景中检测到的物体。最后，我们在软件定义无线电平台上的实时物理原型上实验演示了我们的攻击的可行性。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/madradar-a-black-box-physical-layer-attack-framework-on-mmwave-automotive-fmcw-radars/](https://www.ndss-symposium.org/ndss-paper/madradar-a-black-box-physical-layer-attack-framework-on-mmwave-automotive-fmcw-radars/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2024_f153_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2024_f153_paper.pdf)
## K-LEAK: Towards Automating the Generation of Multi-Step Infoleak Exploits against the Linux Kernel.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#k-leak-towards-automating-the-generation-of-multi-step-infoleak-exploits-against-the-linux-kernel) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#k-leak-towards-automating-the-generation-of-multi-step-infoleak-exploits-against-the-linux-kernel)**
### 作者
* Zhengchuan Liang, UC Riverside
* Xiaochen Zou, UC Riverside
* Chengyu Song, UC Riverside
* Zhiyun Qian, UC Riverside
### 摘要
> 操作系统内核中信息泄漏（简称infoleak）的严重性不容忽视，已经提出了多种攻击技术来实现操作系统内核的infoleak。其中，基于内存错误的infoleak非常强大，在实际攻击中得到了广泛使用。然而，现有的基于内存错误的infoleak查找方法缺乏对搜索空间的系统推理，并且没有充分探索搜索空间。因此，它们无法利用内核中大量的内存错误。根据内存错误的理论模型，这种方法的实际搜索空间非常庞大，因为在利用过程中可能涉及多个步骤，并且几乎可以利用任何内存错误来实现infoleak。为了弥合理论与现实之间的差距，我们提出了一个框架K-LEAK来方便在Linux内核中生成基于内存错误的infoleak攻击。K-LEAK将infoleak攻击生成视为数据流搜索问题。通过对内存错误引入的未预期数据流进行建模，以及现有的内存错误如何创建新的内存错误，K-LEAK可以以多步骤的方式系统地搜索infoleak数据流路径。我们实现了K-LEAK的原型，并使用syzbot和CVEs的内存错误进行评估。评估结果表明，K-LEAK在使用各种多步骤策略生成不同的infoleak攻击方面非常有效。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/k-leak-towards-automating-the-generation-of-multi-step-infoleak-exploits-against-the-linux-kernel/](https://www.ndss-symposium.org/ndss-paper/k-leak-towards-automating-the-generation-of-multi-step-infoleak-exploits-against-the-linux-kernel/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-935-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-935-paper.pdf)
## MirageFlow: A New Bandwidth Inflation Attack on Tor.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#mirageflow-a-new-bandwidth-inflation-attack-on-tor) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#mirageflow-a-new-bandwidth-inflation-attack-on-tor)**
### 作者
* Christoph Sendner, University of Würzburg
* Jasper Stang, University of Würzburg
* Alexandra Dmitrienko, University of Würzburg
* Raveen Wijewickrama, University of Texas at San Antonio
* Murtuza Jadliwala, University of Texas at San Antonio
### 摘要
> Tor网络是向网民提供匿名通信的最显著系统，每日用户量达200万。然而，自Tor问世以来，它一直受到各种流量指纹和关联攻击的攻击，旨在去匿名化其用户。这些攻击的关键要求是吸引尽可能多的用户流量到对手转发器，通常是通过带宽膨胀攻击来实现的。本文提出一种新的Tor膨胀攻击向量，称为MirageFlow，可实现测量带宽的膨胀。潜在的攻击技术利用Tor中继节点之间的资源共享，并利用一组攻击者控制的中继器，在集群中协调分配资源，以欺骗带宽测量器，使其相信集群中的每个中继节点都拥有充足的资源。我们提出了两种攻击变体，C-MirageFlow和D-MirageFlow，并在私人Tor测试网络中测试了两个版本。我们的评估表明，攻击者可以使用C-MirageFlow将测量带宽膨胀近n倍，使用D-MirageFlow将其膨胀近n*N的一半，其中n是一个服务器上托管的集群大小，N是服务器数量。此外，我们的理论分析揭示，仅使用10个专用服务器，每个带有100MB/s带宽的109个中继器集群运行MirageFlow攻击，即可控制Tor网络一半的流量。这个问题被Tor本身允许资源共享的事实进一步恶化，而根据最近的报道，Tor甚至在推广资源共享。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/mirageflow-a-new-bandwidth-inflation-attack-on-tor/](https://www.ndss-symposium.org/ndss-paper/mirageflow-a-new-bandwidth-inflation-attack-on-tor/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1133-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1133-paper.pdf)
## Parrot-Trained Adversarial Examples: Pushing the Practicality of Black-Box Audio Attacks against Speaker Recognition Models.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#parrot-trained-adversarial-examples-pushing-the-practicality-of-black-box-audio-attacks-against-speaker-recognition-models) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#parrot-trained-adversarial-examples-pushing-the-practicality-of-black-box-audio-attacks-against-speaker-recognition-models)**
### 作者
* Rui Duan, University of South Florida
* Zhe Qu, Central South University
* Leah Ding, American University
* Yao Liu, University of South Florida
* Zhuo Lu, University of South Florida
### 摘要
> 音频对抗样本（AEs）给现实世界中的说话者识别系统带来了重大安全挑战。大多数黑盒攻击仍然需要来自说话者识别模型的某些信息才能生效（例如保持探测并要求相似度分数的知识）。本文旨在通过最大程度地减少攻击者对目标说话者识别模型的了解，推动黑盒攻击的实用性。虽然攻击者不可能在完全没有知识的情况下成功，我们假设攻击者只知道目标说话者的一个短暂（或几秒钟）的语音样本。在不进行任何探测以获取有关目标模型的更多知识的情况下，我们提出了一种新的机制，称为鹦鹉训练，用于生成针对目标模型的AEs。受到语音转换的最新进展的启发，我们提出利用一个短句的知识生成更多听起来像目标说话者的合成语音样本，称为鹦鹉语音。然后，我们使用这些鹦鹉语音样本来训练一个针对攻击者的鹦鹉训练（PT）替代模型。在联合可转移性和感知框架下，我们研究了在PT模型上生成AEs（称为PT-AEs）的不同方式，以确保PT-AEs可以以高可转移性生成对黑盒目标模型有良好的人类感知质量。真实世界的实验证明，最终的PT-AEs在数字线场景中对开源模型达到45.8％-80.8％的攻击成功率，在空中场景中对苹果HomePod（Siri）、亚马逊Echo和谷歌Home等智能设备达到47.9％-58.3％的攻击成功率。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/parrot-trained-adversarial-examples-pushing-the-practicality-of-black-box-audio-attacks-against-speaker-recognition-models/](https://www.ndss-symposium.org/ndss-paper/parrot-trained-adversarial-examples-pushing-the-practicality-of-black-box-audio-attacks-against-speaker-recognition-models/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-545-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-545-paper.pdf)
## Powers of Tau in Asynchrony.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#powers-of-tau-in-asynchrony) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#powers-of-tau-in-asynchrony)**
### 作者
* Sourav Das, University of Illinois at Urbana-Champaign
* Zhuolun Xiang, Aptos
* Ling Ren, University of Illinois at Urbana-Champaign
### 摘要
> $q$-SDH参数对于许多密码原语的有效构造至关重要，如零知识简洁非交互式知识论证，多项式/向量承诺，可验证的秘密共享和随机性信标。目前唯一存在的安全生成这些参数的方法具有高度顺序性，需要强大的网络同步假设，并且具有非常高的通信和计算成本。例如，为了为任何给定的$q$生成参数，每个参与方都将承担$Omega(nq)$的通信成本，并需要$Omega(n)$轮。这里$n$是安全多方计算协议中的参与方数量。由于$q$通常很大，即数量级为十亿，因此成本非常禁止。
> 
> 本文提出了一种分布式协议，用于在异步网络中生成$q$-SDH参数。在一个包含$n$个参与方的网络中，我们的协议容忍多达三分之一的恶意参与方。每个参与方都要承担$O(q + n^2log q)$的通信成本，并且该协议在$O(log q + log n)$的期望轮次内完成。我们对我们的协议进行了严格的安全性分析。我们实施了我们的协议，并与多达128个地理分布的参与方进行了评估。我们的评估表明，我们的协议具有很高的可扩展性，并且与用于生成$q$-SDH参数的最先进的同步协议相比，运行时间更快2-6倍，每个参与方的带宽使用更佳4-13倍。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/powers-of-tau-in-asynchrony/](https://www.ndss-symposium.org/ndss-paper/powers-of-tau-in-asynchrony/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-733-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-733-paper.pdf)
## Phoenix: Surviving Unpatched Vulnerabilities via Accurate and Efficient Filtering of Syscall Sequences.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#phoenix-surviving-unpatched-vulnerabilities-via-accurate-and-efficient-filtering-of-syscall-sequences) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#phoenix-surviving-unpatched-vulnerabilities-via-accurate-and-efficient-filtering-of-syscall-sequences)**
### 作者
* Hugo Kermabon-Bobinnec, Concordia University
* Yosr Jarraya, Ericsson Security Research
* Lingyu Wang, Concordia University
* Suryadipta Majumdar, Concordia University
* Makan Pourzandi, Ericsson Security Research
### 摘要
> 已知但未修补的漏洞是当前企业面临的最令人担忧的威胁之一。近年来，零日漏洞的补丁时间平均在100天左右。无法缓解未修补漏洞的手段可能迫使企业暂时关闭其服务，这可能导致显著的财务损失。现有的过滤未使用容器的系统调用解决方案可以有效减少一般性的攻击面，但无法防止与容器共享相同系统调用的特定漏洞。另一方面，现有的来源分析解决方案可以帮助识别漏洞背后的系统调用序列，但它们不为过滤这样的序列提供直接解决方案。为了弥补这样的研究差距，我们提出了Phoenix，一种通过准确高效地过滤通过来源分析确定的系统调用序列来防止未修补漏洞利用的解决方案。为实现这一目标，Phoenix巧妙地结合了Seccomp过滤器的效率和基于Ptrace的深度参数检查的准确性，并通过动态Seccomp设计提供了过滤系统调用序列的新功能。我们的实现和实验表明，Phoenix可以有效地缓解现实世界中规避现有解决方案的漏洞，同时引入可忽略的延迟（小于4％）和更少的开销（例如，比现有解决方案消耗98％更少的CPU） 。 。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/phoenix-surviving-unpatched-vulnerabilities-via-accurate-and-efficient-filtering-of-syscall-sequences/](https://www.ndss-symposium.org/ndss-paper/phoenix-surviving-unpatched-vulnerabilities-via-accurate-and-efficient-filtering-of-syscall-sequences/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-582-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-582-paper.pdf)
## Not your Type! Detecting Storage Collision Vulnerabilities in Ethereum Smart Contracts.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#not-your-type-detecting-storage-collision-vulnerabilities-in-ethereum-smart-contracts) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#not-your-type-detecting-storage-collision-vulnerabilities-in-ethereum-smart-contracts)**
### 作者
* Nicola Ruaro, University of California
### 摘要
> 近年来，以太坊区块链发展迅猛，并得到广泛采用。其成功的关键因素之一是可以运行称为智能合约的不可更改程序。智能合约允许对数字资产进行自动操作，在新的去中心化金融（DeFi）生态系统中发挥核心作用。随着 DeFi 的增长，智能合约之间的交互变得越来越复杂，促成了先进的金融协议和应用程序。然而，智能合约交互中的漏洞也常常导致重大安全漏洞，造成相当大的财务损失。
> 
> 在本文中，我们研究并检测了一种跨合约漏洞，称为存储冲突。智能合约使用存储在区块链上持久存储其数据。通常，每个合约都有自己独立的存储空间。然而，两个智能合约共享存储空间（使用委托调用）也是可能的。不幸的是，当这两个合约对于它们共享的存储空间的类型/语义有不同理解时，就会出现存储冲突漏洞。这可能导致意外行为，如拒绝服务（冻结资金）、权限提升和财务资产盗窃。
> 
> 为了规模化检测和研究存储冲突漏洞的影响，我们提出了 CRUSH，一个新颖的分析系统，用于发现这些缺陷并合成概念验证的利用方法。我们利用 CRUSH 对自以太坊区块链启动以来部署的 14,237,696 个智能合约进行了大规模分析。CRUSH 确定了 14,891 个潜在存在漏洞的合约，并为其中的 956 个自动生成了端到端的利用方法。我们的系统揭示了存储冲突漏洞导致的超过 6 百万美元的新型、以前未报告的潜在财务损失。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/not-your-type-detecting-storage-collision-vulnerabilities-in-ethereum-smart-contracts/](https://www.ndss-symposium.org/ndss-paper/not-your-type-detecting-storage-collision-vulnerabilities-in-ethereum-smart-contracts/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-713-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-713-paper.pdf)
## PrintListener: Uncovering the Vulnerability of Fingerprint Authentication via the Finger Friction Sound.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#printlistener-uncovering-the-vulnerability-of-fingerprint-authentication-via-the-finger-friction-sound) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#printlistener-uncovering-the-vulnerability-of-fingerprint-authentication-via-the-finger-friction-sound)**
### 作者
* Man Zhou, Huazhong University of Science and Technology
* Shuao Su, Huazhong University of Science and Technology
* Qian Wang, Wuhan University
* Qi Li, Tsinghua University
* Yuting Zhou, Huazhong University of Science and Technology
* Xiaojing Ma, Huazhong University of Science and Technology
* Zhengxiong Li, University of Colorado Denver
### 摘要
> 指纹身份验证由于其快捷和成本效益而广泛应用于当代身份验证系统。由于广泛使用，指纹泄漏可能导致敏感信息被盗，造成巨大的经济和人员损失，甚至可能危及国家安全。作为一个指纹，可以巧合地与整体指纹人口的特定比例匹配，MasterPrint引起了指纹身份验证安全性的警钟。在本文中，我们提出了对基于细节的自动指纹识别系统（AFIS）的新的侧信道攻击，称为PrintListener，它利用用户在屏幕上滑动指尖的动作来提取指纹图案特征（第一级特征）并合成具有潜在二级特征的更强有力的目标PatternMasterPrint。PrintListener的攻击场景广泛而隐秘。它只需要记录用户指尖摩擦声音，并可以利用大量社交媒体平台进行启动。在真实场景中的大量实验结果表明，Printlistener可以显著提高MasterPrint的攻击效力。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/printlistener-uncovering-the-vulnerability-of-fingerprint-authentication-via-the-finger-friction-sound/](https://www.ndss-symposium.org/ndss-paper/printlistener-uncovering-the-vulnerability-of-fingerprint-authentication-via-the-finger-friction-sound/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-618-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-618-paper.pdf)
## PriSrv: Privacy-Enhanced and Highly Usable Service Discovery in Wireless Communications.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#prisrv-privacy-enhanced-and-highly-usable-service-discovery-in-wireless-communications) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#prisrv-privacy-enhanced-and-highly-usable-service-discovery-in-wireless-communications)**
### 作者
* Yang Yang, School of Computing and Information Systems
### 摘要
> 在无线通信中，服务发现至关重要。然而，现有的服务发现协议对服务提供商和客户提供了很有限的隐私保护，它们通常泄漏敏感信息（例如服务类型、客户身份和移动模式），从而导致各种基于网络的攻击（例如欺骗、中间人、识别和跟踪）。在本文中，我们提出了一种名为PriSrv的私人服务发现协议，该协议允许服务提供商和客户分别指定对方在建立连接之前必须满足的细粒度认证策略。PriSrv包括私人服务广播阶段和具有双边控制的匿名互相认证阶段，其中双方的私人信息超出相互匹配到各自认证策略的事实都是隐藏的。作为PriSrv的核心组件，我们引入了匿名凭证匹配加密（ACME）的概念，它在一步中施加双层匹配，同时实现了双边灵活策略控制、选择性属性披露和多次出现的不可关联性。作为ACME的构建模块，我们设计了一个快速匿名凭证（FAC）方案，以提供恒定大小的凭证和高效的展示/验证机制，适用于无线网络中增强隐私保护和高度可用的服务发现。我们提出了一个具体的PriSrv协议，该协议与流行的无线通信协议（例如Wi-Fi可扩展认证协议（EAP）、mDNS、BLE和Airdrop）具有互操作性，以提供增强隐私保护。我们提供了我们协议的正式安全验证，并在多个硬件平台上评估其性能：台式机、笔记本电脑、手机和树莓派。PriSrv在前三个平台上可以在不到0.973秒内完成私人发现和安全连接，在树莓派4B上不到2.712秒。我们还将PriSrv实现到IEEE 802.1X中，以展示其实用性。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/prisrv-privacy-enhanced-and-highly-usable-service-discovery-in-wireless-communications/](https://www.ndss-symposium.org/ndss-paper/prisrv-privacy-enhanced-and-highly-usable-service-discovery-in-wireless-communications/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-174-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-174-paper.pdf)
## Predictive Context-sensitive Fuzzing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#predictive-context-sensitive-fuzzing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#predictive-context-sensitive-fuzzing)**
### 作者
* Pietro Borrello, Sapienza University of Rome
* Andrea Fioraldi, EURECOM
* Daniele Cono D'Elia, Sapienza University of Rome
* Davide Balzarotti, Eurecom
* Leonardo Querzoni, Sapienza University of Rome
* Cristiano Giuffrida, Vrije Universiteit Amsterdam
### 摘要
> 覆盖率引导的模糊测试通过逐步突变测试用例来驱动程序执行到新的程序位置，从而暴露漏洞。目前，代码覆盖率是最有效和最流行的探索反馈。然而，对于一些漏洞，执行到有问题的程序位置的方式也可能很重要：对于这些漏洞，仅跟踪测试用例运行哪些代码可能导致模糊测试器忽略有趣的程序状态。不幸的是，上下文敏感的覆盖率跟踪会带来固有的状态爆炸问题。现有尝试实现上下文敏感的覆盖率引导模糊测试器在精度（由于覆盖率冲突）和性能（由于上下文跟踪和队列/映射的爆炸）方面都遇到了不小的问题。在本文中，我们展示了一种更加有效的上下文敏感模糊测试方法。首先，我们提出功能克隆作为向后兼容的仪器原语，以实现精确（即无碰撞）的上下文敏感覆盖率跟踪。然后，为了控制状态爆炸问题，我们主张只在模糊测试器探索被选为有前途的上下文时考虑上下文信息。我们提出了一个预测方案来识别这样一个上下文池：我们分析调用点处传入参数值的数据流多样性，如果后者看到其他站点使用的传入抽象对象，则向模糊测试器暴露一个上下文上下文精细的目标。我们的研究表明，通过将函数克隆应用于我们预测受到上下文敏感性有益的程序区域，我们可以克服上述问题，同时保持甚至提高模糊测试效果。在FuzzBench套件上，我们的方法大大优于现有的覆盖率引导的模糊测试方法，揭示了更多和不同的漏洞，而不会出现爆炸或其他明显的低效率。在这些经过深入测试的主题中，我们还发现了5个主题中的8个持久性安全问题，发行了6个CVE标识符。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/predictive-context-sensitive-fuzzing/](https://www.ndss-symposium.org/ndss-paper/predictive-context-sensitive-fuzzing/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2024_f113_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2024_f113_paper.pdf)
## Pencil: Private and Extensible Collaborative Learning without the Non-Colluding Assumption.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#pencil-private-and-extensible-collaborative-learning-without-the-non-colluding-assumption) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#pencil-private-and-extensible-collaborative-learning-without-the-non-colluding-assumption)**
### 作者
* Xuanqi Liu, Tsinghua University
* Zhuotao Liu, Tsinghua University
* Qi Li, Tsinghua University
* Ke Xu, Tsinghua University
* Mingwei Xu, Tsinghua University
### 摘要
> 随着数据隐私日益受到关注，协作神经网络训练面临重大挑战，其中数据所有权和模型训练/部署责任属于不同实体。我们的社区在解决这一挑战方面作出了重大贡献，提出了各种方法，如联邦学习（FL）和基于同态加密（HE）和安全多方计算（MPC）等密码构造的隐私保护机器学习。然而，FL完全忽视了模型隐私，而HE的可扩展性有限（仅适用于单个数据提供者）。虽然最先进的MPC框架提供了合理的吞吐量，同时确保了模型/数据隐私，但它们依赖于对计算服务器的关键非串通的假设，而且放松这一假设仍然是一个悬而未决的问题。
> 
> 在本文中，我们提出了Pencil，这是第一个用于协作学习的私有训练框架，同时提供数据隐私、模型隐私和对多个数据提供者的可扩展性，而不依赖于非串通的假设。我们的基本设计原则是基于一种高效的双方协议构建n方协作训练协议，同时确保在模型训练期间切换到不同的数据提供者不会增加额外成本。我们引入了几种新颖的密码协议来实现这一设计原则，并进行了严格的安全和隐私分析。我们对Pencil进行的全面评估表明：（i）在明文和使用Pencil进行私人训练的模型之间的测试准确度几乎相同；（ii）Pencil的训练开销大大减少：Pencil的吞吐量提高了10∼260倍，通信量比现有技术减少了2个数量级；（iii）Pencil对现有攻击和自适应（白盒）攻击都具有强大的抵抗力。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/pencil-private-and-extensible-collaborative-learning-without-the-non-colluding-assumption/](https://www.ndss-symposium.org/ndss-paper/pencil-private-and-extensible-collaborative-learning-without-the-non-colluding-assumption/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-512-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-512-paper.pdf)
## Private Aggregate Queries to Untrusted Databases.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#private-aggregate-queries-to-untrusted-databases) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#private-aggregate-queries-to-untrusted-databases)**
### 作者
* Syed Mahbub Hafiz, University of California
### 摘要
> 确保互联网服务用户隐私的一个重要方面是保护他们访问的数据，以使数据库主机无法从查询模式中推断出敏感信息（例如政治立场、性取向等），以利用或与第三方分享。通常，数据库用户提交带有搜索和过滤约束的聚合查询（例如求和、平均值等），通过寻求查询的敏感值和数据库交互的隐私来从数据库中提取具有统计意义的信息。私人信息检索（PIR）是一种保护隐私的加密工具，它通过隐藏客户端访问的数据库项来解决这个问题的简化版本。大多数PIR协议要求客户端知道所需数据库项的确切行索引，这不支持类似设置中基于复杂聚合的统计查询。PIR领域的一些作品包含关键字搜索和类似SQL的查询，但大多需要PIR客户端和PIR服务器之间的多次交互。一些方案支持在单轮中搜索类似SQL的表达式查询，但无法支持聚合查询。这些方案是本文的主要焦点。为了弥合差距，我们建立了一个通用的新型信息论PIR（IT-PIR）框架，允许用户获取聚合结果，在单轮互动中隐藏所有复杂查询的敏感部分，使托管PIR服务器无法知晓哪些记录有助于聚合。然后我们评估了我们的协议在基准测试和实际应用设置中的可行性。例如，在对$1$百万条Twitter微博数据库进行复杂的聚合查询时，当用户对~$3k$个用户句柄感兴趣时，我们的协议需要$0.014$秒才能使PIR服务器生成结果。相比之下，对于一个更简化的任务，不是聚合而是位置查询，Goldberg的常规IT-PIR（Oakland 2007）需要$1.13$秒。对于所有可能的用户句柄，$300k$，与常规IT-PIR相比，它需要相同的时间。这个例子表明，通过我们的框架进行复杂的聚合查询，如果不是更少，与传统查询相比并不会增加额外开销。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/private-aggregate-queries-to-untrusted-databases/](https://www.ndss-symposium.org/ndss-paper/private-aggregate-queries-to-untrusted-databases/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1211-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1211-paper.pdf)
## ReqsMiner: Automated Discovery of CDN Forwarding Request Inconsistencies and DoS Attacks with Grammar-based Fuzzing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#reqsminer-automated-discovery-of-cdn-forwarding-request-inconsistencies-and-dos-attacks-with-grammar-based-fuzzing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#reqsminer-automated-discovery-of-cdn-forwarding-request-inconsistencies-and-dos-attacks-with-grammar-based-fuzzing)**
### 作者
* Linkai Zheng, Tsinghua University
* Xiang Li, Tsinghua University
* Chuhan Wang, Tsinghua University
* Run Guo, Tsinghua University
* Haixin Duan, Tsinghua University; Quancheng Laboratory
* Jianjun Chen, Tsinghua University; Zhongguancun Laboratory
* Chao Zhang, Tsinghua University; Zhongguancun Laboratory
* Kaiwen Shen, Tsinghua University
### 摘要
> 内容传送网络（CDNs）是普遍存在的中间框，旨在提高托管网站的性能并保护它们免受各种攻击。许多著名的研究表明，CDNs在转发客户端请求到原始服务器时会对其进行修改。已发现多个此转发操作中的不一致性可能导致安全漏洞，如DoS攻击。然而，现有研究缺乏系统性方法来研究CDN转发请求的不一致性。
> 
> 在这项工作中，我们提出了ReqsMiner，这是一种创新的模糊测试框架，旨在发现以前未被检查的CDN转发请求中的不一致性。该框架使用强化学习技术生成有效的测试用例，即使只有很少的反馈，也能将真实的字段值纳入基于语法的模糊测试中。借助ReqsMiner，我们全面测试了22个主要CDN提供商，并发现了大量迄今未经研究的CDN转发请求不一致性。此外，专门分析器的应用使ReqsMiner能够扩展其功能，进化为一个能够检测特定类型攻击的框架。通过扩展，我们的工作进一步确定了三种新型HTTP放大DoS攻击类型，并发现了74个新的可能的DoS漏洞，放大因子普遍可以达到2,000，甚至在特定条件下可以达到1,920,000的级别。我们已经负责向受影响的CDN供应商披露了检测到的漏洞，并提出了缓解建议。我们的工作有助于加强CDN的安全性，提高它们对恶意攻击的弹性，并防止滥用。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/reqsminer-automated-discovery-of-cdn-forwarding-request-inconsistencies-and-dos-attacks-with-grammar-based-fuzzing/](https://www.ndss-symposium.org/ndss-paper/reqsminer-automated-discovery-of-cdn-forwarding-request-inconsistencies-and-dos-attacks-with-grammar-based-fuzzing/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-31-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-31-paper.pdf)
## Proof of Backhaul: Trustfree Measurement of Broadband Bandwidth.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#proof-of-backhaul-trustfree-measurement-of-broadband-bandwidth) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#proof-of-backhaul-trustfree-measurement-of-broadband-bandwidth)**
### 作者
* Peiyao Sheng, Kaleidoscope Blockchain Inc.
* Nikita Yadav, Indian Institute of Science
* Vishal Sevani, Kaleidoscope Blockchain Inc.
* Arun Babu, Kaleidoscope Blockchain Inc.
* Anand Svr, Kaleidoscope Blockchain Inc.
* Himanshu Tyagi, Indian Institute of Science
* Pramod Viswanath, Kaleidoscope Blockchain Inc.
### 摘要
> 近年来，分散式无线网络的出现，由众多个人和小型企业托管的节点所组成，重新唤起了开放网络的几十年梦想。这些网络是通过新的经济模式，基于性能激励的方式进行有机的分布式部署的。性能能否得到扩展，关键在于能够以分散的“无信任”方式证明网络性能。即具有拜占庭容错网络遥测系统。
> 
> 本文提出了一种名为“后向带宽证明（PoB）”的协议，以分散的无信任方式测量无线接入点的（宽带）后向链路带宽，即检验者。特别是，我们提出的协议是第一个满足以下两个条件的协议：（1）无信任。通过协议，带宽测量能够抵御由挑战服务器和检验者通过串通而进行的拜占庭式攻击。（2）开放性。成为挑战服务器的门槛较低；不需要拥有到目标链路的低延迟高吞吐量路径。在高层次上，我们的协议汇聚来自多个挑战服务器的挑战流量，并使用加密基元来确保某些挑战者，甚至挑战者和检验者，不能恶意地修改结果使其更有利于自己。通过正式的安全模型，我们可以根据最大恶意行为者的最高分数来确保准确的带宽测量。
> 
> 我们将我们的协议实现为挑战者遍布地理位置，并发布了代码cite{multichallenger-pob}。我们的评估表明，我们的PoB协议可以使用持续仅100毫秒的测量，在少于10％的误差内验证高达1000 Mbps的后向带宽，即使存在受损的挑战者，测量的准确性也不会受到影响。重要的是，基本的验证协议容易进行微小的修改，即使存在交叉流量，也能测量可用带宽。
> 
> 最后，我们的PoB协议输出的安全保证自然地与区块链账本上的“承诺”相组成，这通常用于分散式网络。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/proof-of-backhaul-trustfree-measurement-of-broadband-bandwidth/](https://www.ndss-symposium.org/ndss-paper/proof-of-backhaul-trustfree-measurement-of-broadband-bandwidth/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-764-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-764-paper.pdf)
## Scrappy: SeCure Rate Assuring Protocol with PrivacY.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#scrappy-secure-rate-assuring-protocol-with-privacy) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#scrappy-secure-rate-assuring-protocol-with-privacy)**
### 作者
* Kosei Akama, Keio University
* Yoshimichi Nakatsuka, ETH Zurich
* Masaaki Sato, Tokai University
* Keisuke Uehara, Keio University
### 摘要
> 通过防止对在线服务的滥用活动，由于恶意对手的访问速度超出网站预期的速度，已经成为一个日益严重的问题。虽然 CAPTCHAs 和短信验证广泛用于通过实施速率限制提供解决方案，但它们越来越不那么有效，并且有些被认为侵犯隐私。鉴于此，许多研究提出了更好的速率限制系统，这些系统在阻止恶意行为者的同时保护合法用户的隐私。然而，它们存在一个或多个缺点：（1）假设对底层硬件的信任和（2）容易受到侧信道攻击。受上述问题的激励，本文提出 Scrappy：SeCure Rate Assuring Protocol with PrivacY。Scrappy 允许客户生成无法伪造但不可链接的速率保证证明，从而为服务器提供了密码学保证，确认客户没有不当行为。我们使用 DAA 和硬件安全设备的组合设计 Scrappy。Scrappy 在三种类型的设备上实现，包括可以立即部署在现实世界中的设备。我们的基准评估显示，Scrappy 的端到端延迟最低，仅需 0.32 秒，并且在传输必要数据时仅使用 679 字节的带宽。我们还进行了广泛的安全评估，表明即使硬件安全设备受到威胁，Scrappy 的速率限制能力也不会受到影响。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/scrappy-secure-rate-assuring-protocol-with-privacy/](https://www.ndss-symposium.org/ndss-paper/scrappy-secure-rate-assuring-protocol-with-privacy/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-445-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-445-paper.pdf)
## Secret-Shared Shuffle with Malicious Security.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#secret-shared-shuffle-with-malicious-security) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#secret-shared-shuffle-with-malicious-security)**
### 作者
* Xiangfu Song, National University of Singapore
* Dong Yin, Ant Group
* Jianli Bai, The University of Auckland
* Changyu Dong, Guangzhou University
* Ee-Chien Chang, National University of Singapore
### 摘要
> 一种秘密共享洗牌（SSS）协议使用随机的秘密排列对秘密共享向量进行排列。它已经被发现有许多应用，但它也是一种昂贵的操作，经常成为性能瓶颈。Chase等人（Asiacrypt'20）最近提出了一种高效的半诚实的两方SSS协议，称为CGP协议。它利用专门设计的伪随机相关性，促进了通信高效的在线洗牌阶段。 话虽如此，半诚实的安全在许多现实世界的应用场景中是不足的，因为洗牌通常用于高度敏感的应用。鉴于此，最近的研究（CANS'21、NDSS'22）尝试通过经过认证的秘密共享提高CGP协议的恶意安全性。然而，我们发现这些尝试是有缺陷的，恶意对手仍然可以通过恶意偏差来获取私人信息。本文提出了具体的攻击案例来证明这一点。那么问题就是如何填补这一空白，设计一个恶意安全的CGP洗牌协议。我们通过引入一组轻量级相关性检查和泄露减少机制来回答这个问题。然后我们将我们的技术应用于经过认证的秘密共享，以实现恶意安全。值得注意的是，我们的协议在增加安全性的同时也是高效的。在两方设置中，实验结果显示，我们的恶意安全协议与其半诚实版本相比引入了可以接受的开销，并且比MP-SPDZ库中最先进的恶意安全SSS协议更有效。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/secret-shared-shuffle-with-malicious-security/](https://www.ndss-symposium.org/ndss-paper/secret-shared-shuffle-with-malicious-security/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-21-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-21-paper.pdf)
## Security-Performance Tradeoff in DAG-based Proof-of-Work Blockchain Protocols.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#security-performance-tradeoff-in-dag-based-proof-of-work-blockchain-protocols) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#security-performance-tradeoff-in-dag-based-proof-of-work-blockchain-protocols)**
### 作者
* Shichen Wu, 1. School of Cyber Science and Technology
### 摘要
> 基于有向无环图（DAG）的工作证明（PoW）区块链协议已经表现出比基于链的前辈协议更优越的交易确认性能。然而，尚不确定它们在高吞吐量环境下的安全性是否会像它们的前辈一样恶化，因为它们接受同时的块和复杂的块依赖性对严格的安全性分析提出挑战。
> 
> 我们通过拥塞区块链模型（CBM）分析基于DAG的协议，CBM是一个通用模型，可以按情况对块传播延迟设置上界，而不像大多数先前的分析一样统一设置上界。CBM允许我们捕捉高吞吐量环境的两个关键现象：（1）同时的块会增加彼此的传播延迟，（2）块只能在接收到它所引用的所有块后才能被处理。我们进一步设计了一个合理的对抗性块传播策略在CBM中，称为迟先祖攻击，它利用了块依赖来延迟诚实块的处理。然后，我们评估了Prism和OHIE两个旨在打破安全性-性能权衡的基于DAG的协议在存在能够发动迟先祖攻击的攻击者的情况下的安全性和性能。我们的结果表明，这些协议在高吞吐量环境下类似于它们的基于链的前辈一样遭受到安全性减弱和延迟延长。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/security-performance-tradeoff-in-dag-based-proof-of-work-blockchain-protocols/](https://www.ndss-symposium.org/ndss-paper/security-performance-tradeoff-in-dag-based-proof-of-work-blockchain-protocols/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-685-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-685-paper.pdf)
## QUACK: Hindering Deserialization Attacks via Static Duck Typing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#quack-hindering-deserialization-attacks-via-static-duck-typing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#quack-hindering-deserialization-attacks-via-static-duck-typing)**
### 作者
* Yaniv David, Columbia University
* Neophytos Christou, Brown University
* Andreas D. Kellas, Columbia University
* Vasileios P. Kemerlis, Brown University
* Junfeng Yang, Columbia University
### 摘要
> 受控语言使对象序列化变得方便，允许应用程序轻松地持久保存和传输对象，但这个特性也使它们容易受到攻击。通过操纵序列化对象，攻击者可以触发现有代码段的链接执行，并将它们用作工具来形成利用。保护反序列化调用免受攻击是繁琐且烦人的，导致很多开发人员避免正确部署防御措施。我们提出了QUACK，一个框架，通过修复对反序列化API的调用来自动保护应用程序。这种“绑定”限制了在反序列化过程中允许使用的类，严格限制了可供（滥）用作利用的代码。QUACK使用一种新颖的静态鸭子类型推断技术计算应该允许的类集合。具体而言，它静态收集程序代码中所有在反序列化后操作对象的语句，并为运行时应该可用的类列表编制一个过滤器。我们已为PHP实现了QUACK，并在一组已知CVE漏洞和从GitHub爬取的流行应用上进行了评估。QUACK成功修复了这些应用程序，以阻止任何试图自动生成对其的利用的尝试，平均阻塞了97%的可能用作工具的应用程序代码。我们将由QUACK生成的三个修复样本作为拉取请求提交，并且它们的开发者已经合并了这些修改。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/quack-hindering-deserialization-attacks-via-static-duck-typing/](https://www.ndss-symposium.org/ndss-paper/quack-hindering-deserialization-attacks-via-static-duck-typing/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1015-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1015-paper.pdf)
## Separation is Good: A Faster Order-Fairness Byzantine Consensus.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#separation-is-good-a-faster-order-fairness-byzantine-consensus) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#separation-is-good-a-faster-order-fairness-byzantine-consensus)**
### 作者
* Ke Mu, Southern University of Science and Technology
### 摘要
> 最近，随着比特币容错（BFT）一致性协议的新属性——公平性——的引入，以防止单方面决定交易的最终顺序，从而可以减轻区块链网络和去中心化金融（DeFi）中对交易顺序进行攻击（如前沿运行）的威胁。然而，现有的基于领导者的公平性协议（不依赖于同步时钟）仍然存在性能不佳的问题，因为它们将公平排序与共识过程紧密耦合。在本文中，我们提出了SpeedyFair，一种高性能的公平性一致性协议，它是基于我们的洞察力提出来的，这里的交易排序不依赖于之前提议中交易执行结果的思路。SpeedyFair通过一个分离的设计实现了高效处理公平排序的连续单独操作，这与共识过程分开。此外，通过将公平排序与共识分离，SpeedyFair能够并行执行最初在共识过程中串行执行的顺序/验证模式，从而进一步提高性能。我们在Hotstuff协议的基础上实现了SpeedyFair的原型。通过大量的实验结果表明，SpeedyFair明显优于最先进的公平性协议（即Themis），它的吞吐量比Themis高1.5-2.45倍，同时将延迟降低了35%-59%。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/separation-is-good-a-faster-order-fairness-byzantine-consensus/](https://www.ndss-symposium.org/ndss-paper/separation-is-good-a-faster-order-fairness-byzantine-consensus/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-693-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-693-paper.pdf)
## SENSE: Enhancing Microarchitectural Awareness for TEEs via Subscription-Based Notification.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#sense-enhancing-microarchitectural-awareness-for-tees-via-subscription-based-notification) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#sense-enhancing-microarchitectural-awareness-for-tees-via-subscription-based-notification)**
### 作者
* Fan Sang, Georgia Institute of Technology
* Jaehyuk Lee, Georgia Institute of Technology
* Xiaokuan Zhang, George Mason University
* Meng Xu, University of Waterloo
* Scott Constable, Intel
* Yuan Xiao, Intel
* Michael Steiner, Intel
* Mona Vij, Intel
* Taesoo Kim, Georgia Institute of Technology
### 摘要
> 尽管现有防御措施已取得进展，但有效地缓解受信任执行环境（TEEs）中的侧信道攻击（SCAs）仍然具有挑战性。目前的检测型防御依赖于观察异常的受害者性能特征，但很难检测到跨多次执行泄露小部分秘密的攻击。现有检测型防御的限制源于各种因素，包括在TEEs中缺乏可信赖的微架构数据源，可用数据的低质量，受害者反应的不灵活性和平台特定的限制等。我们认为有效的检测技术的主要障碍可以归因于在TEEs中缺乏对精确微架构信息的直接访问。
> 
> 我们提出了SENSE，一种解决方案，可以积极地将基础微架构信息暴露给用户空间TEEs。SENSE使得TEEs中的用户空间软件能够订阅细粒度的微架构事件，并将这些事件用作上下文化正在进行的微架构状态的手段。我们最初通过将SENSE应用于击败最先进的基于缓存的侧信道攻击来展示SENSE的能力。我们进行了全面的安全分析，以确保SENSE不会泄漏比没有SENSE的系统更多的信息。我们在基于gem5的仿真器上制作了SENSE的原型，我们的评估结果显示SENSE是安全的，可以有效地击败缓存SCAs，并在良性情况下承受微小的性能开销（1.2%）。）。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/sense-enhancing-microarchitectural-awareness-for-tees-via-subscription-based-notification/](https://www.ndss-symposium.org/ndss-paper/sense-enhancing-microarchitectural-awareness-for-tees-via-subscription-based-notification/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-176-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-176-paper.pdf)
## Sharing cyber threat intelligence: Does it really help?
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#sharing-cyber-threat-intelligence-does-it-really-help) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#sharing-cyber-threat-intelligence-does-it-really-help)**
### 作者
* Beomjin Jin, Sungkyunkwan University
* Eunsoo Kim, Sungkyunkwan University
* Hyunwoo Lee, KENTECH
* Elisa Bertino, Purdue University
* Doowon Kim, University of Tennessee
### 摘要
> 跨组织分享网络威胁情报（CTI）正日益受到关注，因为它可以自动化威胁分析并提高安全意识。然而，有关网络安全威胁数据的普遍类型以及其在减轻网络攻击中的有效性的实证研究有限。我们提出了一个名为CTI-Lense的框架，用于从一系列公开可用的CTI来源中收集和分析结构化威胁信息表达（STIX）数据的数量、及时性、覆盖范围和质量，STIX是事实上的标准CTI格式。我们从2014年10月31日至2023年4月10日从十个数据源收集了大约600万个STIX数据对象，并分析了它们的特征。我们的分析显示，近年来STIX数据共享持续增加，但共享的STIX数据量仍相对较低，无法覆盖所有网络威胁。此外，只有少数类型的威胁数据对象被共享，恶意软件签名和URL占收集数据的90%以上。虽然URL通常可以及时共享，大约72%的URL比VirusTotal早于或在同一天共享，但恶意软件签名的共享速度明显较慢。此外，我们发现19%的威胁行为者数据包含错误信息，并且只有0.09%的指示器数据提供了检测网络攻击的安全规则。根据我们的发现，我们建议组织之间有效和可扩展的STIX数据共享的实际考虑。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/sharing-cyber-threat-intelligence-does-it-really-help/](https://www.ndss-symposium.org/ndss-paper/sharing-cyber-threat-intelligence-does-it-really-help/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-228-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-228-paper.pdf)
## SLMIA-SR: Speaker-Level Membership Inference Attacks against Speaker Recognition Systems.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#slmia-sr-speaker-level-membership-inference-attacks-against-speaker-recognition-systems) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#slmia-sr-speaker-level-membership-inference-attacks-against-speaker-recognition-systems)**
### 作者
* Guangke Chen, ShanghaiTech University
* Yedi Zhang, National University of Singapore
* Fu Song, Institute of Software
### 摘要
> 成员推理攻击允许对手确定特定示例是否包含在模型的训练数据集中。虽然先前的研究已确认了在各种应用中进行这种攻击的可行性，但没有人专注于说话者识别（SR），这是一种有前途的基于声音的生物识别技术。在这项工作中，我们提出了SLMIA-SR，这是针对SR量身定制的第一个成员推理攻击。与传统的示例级攻击相比，我们的攻击具有说话者级别的成员推理，即确定给定说话者的任何语音是否参与了模型的训练，无论与给定推理语音相同还是不同。这种方法特别有用和实用，因为训练和推理语音通常是不同的，并且考虑到SR的开放性质，即经常不存在在训练数据中的识别说话者。我们利用SR的两个训练目标——内部相似度和外部差异度——来表征训练和非训练说话者之间的差异，并利用仔细建立的特征工程驱动的两组特征来量化它们以发动攻击。为了提高我们攻击的泛化能力，我们提出了一种新颖的混合比率训练策略来训练攻击模型。为了提高攻击性能，我们引入了语音块分割以处理有限数量的推理语音，并建议根据推理语音的数量来训练攻击模型。我们的攻击是多功能的，可以在白盒和黑盒场景中使用。此外，我们提出了两种新技术来减少黑盒查询次数，同时保持攻击性能。大量实验证明了SLMIA-SR的有效性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/slmia-sr-speaker-level-membership-inference-attacks-against-speaker-recognition-systems/](https://www.ndss-symposium.org/ndss-paper/slmia-sr-speaker-level-membership-inference-attacks-against-speaker-recognition-systems/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1323-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1323-paper.pdf)
## SSL-WM: A Black-Box Watermarking Approach for Encoders Pre-trained by Self-Supervised Learning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#ssl-wm-a-black-box-watermarking-approach-for-encoders-pre-trained-by-self-supervised-learning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#ssl-wm-a-black-box-watermarking-approach-for-encoders-pre-trained-by-self-supervised-learning)**
### 作者
* Peizhuo Lv, Institute of Information Engineering
### 摘要
> 近年来，自监督学习（SSL）取得了巨大成功，在计算机视觉（CV）和自然语言处理（NLP）领域被广泛应用于促进各种下游任务。然而，攻击者可能窃取这些SSL模型并将其商业化以获利，因此验证SSL模型的所有权至关重要。大多数现有的所有权保护解决方案（例如基于后门的水印）是为监督学习模型设计的，不能直接使用，因为它们要求在水印嵌入期间知道并提供模型的下游任务和目标标签，但在SSL领域中并非总是可能。为解决这一问题，特别是在水印嵌入期间下游任务多样化且未知时，我们提出了一种新颖的黑盒水印方案，名为SSL-WM，用于验证SSL模型的所有权。SSL-WM将受保护编码器的带水印输入映射到不变表示空间，导致任何下游分类器产生预期行为，从而允许检测嵌入的水印。我们在许多任务上评估SSL-WM，如CV和NLP，使用不同的基于对比和生成的SSL模型。实验结果表明，SSL-WM能够有效验证在各种下游任务中窃取的SSL模型的所有权。此外，SSL-WM对模型微调、剪枝和输入预处理攻击具有鲁棒性。最后，SSL-WM还可以避开评估水印检测方法的检测，展示了它在保护SSL模型所有权方面的应用前景。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/ssl-wm-a-black-box-watermarking-approach-for-encoders-pre-trained-by-self-supervised-learning/](https://www.ndss-symposium.org/ndss-paper/ssl-wm-a-black-box-watermarking-approach-for-encoders-pre-trained-by-self-supervised-learning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-374-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-374-paper.pdf)
## Sneaky Spikes: Uncovering Stealthy Backdoor Attacks in Spiking Neural Networks with Neuromorphic Data.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#sneaky-spikes-uncovering-stealthy-backdoor-attacks-in-spiking-neural-networks-with-neuromorphic-data) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#sneaky-spikes-uncovering-stealthy-backdoor-attacks-in-spiking-neural-networks-with-neuromorphic-data)**
### 作者
* Gorka Abad, Radboud University & Ikerlan Technology Research Centre
* Oguzhan Ersoy, Radboud University
* Stjepan Picek, Radboud University & Delft University of Technology
* Aitor Urbieta, Ikerlan Technology Research Centre
* Basque Research and Technology Alliance, BRTA
### 摘要
> 深度神经网络（DNN）在各种任务，包括图像和语音识别方面都表现出非凡的性能。然而，最大化DNNs的有效性需要通过训练来仔细优化众多超参数和网络参数。此外，高性能DNNs需要大量的参数，在训练过程中消耗大量的能量。为了克服这些挑战，研究人员转向了脉冲神经网络（SNN），其具有卓越的能量效率和生物合理的数据处理能力，在感知数据任务中特别适用，尤其是在神经形态数据中。尽管具有优势，但是SNNs像DNNs一样容易受到各种威胁，包括对抗性示例和后门攻击。然而，在了解和应对这些攻击方面，SNNs领域仍需要探索。
> 
> 本文深入研究了使用神经形态数据和各种触发器的SNNs中的后门攻击。具体而言，我们探索了能够操纵其位置和颜色的神经形态数据中的后门触发器，提供比传统图像域触发器更广泛的可能性。我们提出了各种攻击策略，实现了高达100%的攻击成功率，同时对清洁准确性影响微乎其微。此外，我们评估了这些攻击的隐秘性，揭示了我们最有效的攻击拥有显着的隐秘能力。
> 
> 最后，我们从图像域采用了几种最先进的防御措施，评估了它们在神经形态数据上的功效，并揭示了它们表现不佳的情况，导致性能受损。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/sneaky-spikes-uncovering-stealthy-backdoor-attacks-in-spiking-neural-networks-with-neuromorphic-data/](https://www.ndss-symposium.org/ndss-paper/sneaky-spikes-uncovering-stealthy-backdoor-attacks-in-spiking-neural-networks-with-neuromorphic-data/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-334-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-334-paper.pdf)
## TEE-SHirT: Scalable Leakage-Free Cache Hierarchies for TEEs.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#tee-shirt-scalable-leakage-free-cache-hierarchies-for-tees) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#tee-shirt-scalable-leakage-free-cache-hierarchies-for-tees)**
### 作者
* Kerem Arikan, Binghamton University
* Abraham Farrell, Binghamton University
* Williams Zhang Cen, Binghamton University
* Jack McMahon, Binghamton University
* Barry Williams, Binghamton University
* Yu David Liu, Binghamton University
* Nael Abu-Ghazaleh, University of California
### 摘要
> 缓存层次结构受到侧信道攻击的保护对于构建安全系统至关重要，特别是使用可信执行环境（TEE）的系统。在本文中，我们考虑了缓存层次结构的高效和安全的细粒度分区的问题，并提出了一个名为TEE安全层次（TEE-SHirT）的框架。在三级缓存系统的背景下，TEE-SHirT包括分区的共享最后一级缓存、分区私有L2缓存和在上下文切换和系统调用时会被刷新的非分区L1缓存。高效和正确的分区需要精心设计。为了实现这一目标，TEE-SHirT做出了三方面的贡献：1）我们演示了如何有效地将用于保存缓存分区元数据的硬件结构虚拟化，以避免在上下文切换和系统调用时刷新缓存分区内容；2）我们展示了如何支持TEE-SHirT中的多线程飞地，解决了发生在核内和核间数据共享的一致性和一致性问题；3）我们为TEE-SHirT开发了一个形式安全模型，以严格推理我们设计的安全性。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/tee-shirt-scalable-leakage-free-cache-hierarchies-for-tees/](https://www.ndss-symposium.org/ndss-paper/tee-shirt-scalable-leakage-free-cache-hierarchies-for-tees/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-390-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-390-paper.pdf)
## TALISMAN: Tamper Analysis for Reference Monitors.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#talisman-tamper-analysis-for-reference-monitors) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#talisman-tamper-analysis-for-reference-monitors)**
### 作者
* Frank Capobianco, The Pennsylvania State University
* Quan Zhou, The Pennsylvania State University
* Aditya Basu, The Pennsylvania State University
* Trent Jaeger, The Pennsylvania State University
### 摘要
> 正确的访问控制执行是数据安全的关键基础。参考监视器是执行访问控制的关键组件，应提供防篡改的所有安全敏感操作的调解。由于参考监视器经常部署在处理各种操作请求的复杂软件中，例如操作系统和服务器程序，一个问题是参考监视器实现可能存在缺陷，阻止其达到这些要求。过去，自动分析检测到完整调解中的缺陷。然而，研究人员尚未开发出检测可能干扰参考监视器的缺陷的方法，尽管在这类程序中发现了许多漏洞。在本文中，我们开发了TALISMAN，一种自动分析工具，用于检测可能干扰参考监视器实现执行的缺陷。在其核心，TALISMAN实施了精确的信息流完整性分析，以检测可能干扰授权查询构建的违规行为。TALISMAN应用了一种新的、放宽的非干扰变体，消除了几个虚假的隐式流违规行为。TALISMAN还提供了一种手段，用于验证对不受信任数据在授权中的预期使用，采用认可机制。我们将TALISMAN 应用于 Linux 安全模块框架中使用的三个参考监视器实现，即 SELinux、AppArmor 和 Tomoyo，验证了这些 LSM 生成的授权查询中80% 的参数。使用 TALISMAN，我们还发现了 Tomoyo 和 AppArmor 在授权中如何使用路径名存在漏洞，使对手能够规避授权。TALISMAN表明，参考监视器实现的篡改分析可以自动验证许多情况，并且也可以检测到关键缺陷。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/talisman-tamper-analysis-for-reference-monitors/](https://www.ndss-symposium.org/ndss-paper/talisman-tamper-analysis-for-reference-monitors/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1031-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1031-paper.pdf)
## TextGuard: Provable Defense against Backdoor Attacks on Text Classification.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#textguard-provable-defense-against-backdoor-attacks-on-text-classification) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#textguard-provable-defense-against-backdoor-attacks-on-text-classification)**
### 作者
* Hengzhi Pei, UIUC
* Jinyuan Jia, UIUC
### 摘要
> 近年来，后门攻击已成为在安全关键应用中部署机器学习模型的主要安全威胁。现有的研究已经提出了许多针对后门攻击的防御方法。尽管这些方法在一定程度上证明了其防御有效性，但没有一种方法能够对任意攻击提供正式的安全保证。因此，它们很容易被强大的自适应攻击所突破，正如我们的评估所示。在这项工作中，我们提出了TextGuard，这是针对文本分类的第一个可证明的后门攻击防御方法。具体来说，TextGuard首先将（带后门的）训练数据分成子训练集，通过将每个训练句子分割成子句来实现。这种分区确保大多数子训练集不包含后门触发器。随后，从每个子训练集中训练一个基本分类器，它们的集合提供最终预测。我们理论上证明，当后门触发器的长度在一定阈值之内时，TextGuard保证其预测不会受到训练和测试输入中触发器存在的影响。在我们的评估中，我们展示了TextGuard在三个基准文本分类任务上的有效性，超过了现有针对后门攻击的认证防御的认证准确性。此外，我们提出了增强TextGuard的经验性能的额外策略。与最先进的经验性防御方法的比较验证了TextGuard在对抗多个后门攻击方面的优越性。我们的代码和数据可在https://github.com/AI-secure/TextGuard上获得。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/textguard-provable-defense-against-backdoor-attacks-on-text-classification/](https://www.ndss-symposium.org/ndss-paper/textguard-provable-defense-against-backdoor-attacks-on-text-classification/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-90-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-90-paper.pdf)
## Timing Channels in Adaptive Neural Networks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#timing-channels-in-adaptive-neural-networks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#timing-channels-in-adaptive-neural-networks)**
### 作者
* Ayomide Akinsanya, Stevens Institute of Technology
* Tegan Brennan, Stevens Institute of Technology
### 摘要
> 当前的机器学习系统具有很强的预测能力，但也需要大量的计算资源。因此，一类优化的机器学习模型，名为自适应神经网络（ADNNs），近期备受关注。这些模型根据给定的输入动态决定要执行的计算量，从而可以在“简单”输入上进行快速预测。虽然对ADNNs的各种考虑已经得到广泛研究，但这些依赖输入的优化可能引入漏洞的情况目前尚未得到充分探讨。我们的工作是首次证明并评估了因ADNNs优化而产生的时间通道，具有泄霎用户输入敏感属性的能力。我们对六种ADNNs类型进行了实证研究，展示了攻击者如何显著提高他们从观测到的时间测量中推断出另一个用户输入的敏感属性（如分类标签）的能力。我们的结果表明，时间信息可以将攻击者正确推断出用户输入属性的概率提高多达9.89倍。我们的实证评估使用了四个不同的数据集，包括包含敏感的医疗和人口统计信息的数据集，并考虑了用户输入敏感属性的多种泄露情况。最后，我们演示了在两个虚构的网络应用程序——虚构健康公司和虚构人力资源——中如何利用公共互联网利用时间通道，这两个应用程序利用ADNNs为客户提供预测。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/timing-channels-in-adaptive-neural-networks/](https://www.ndss-symposium.org/ndss-paper/timing-channels-in-adaptive-neural-networks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-125-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-125-paper.pdf)
## Towards Automated Regulation Analysis for Effective Privacy Compliance.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#towards-automated-regulation-analysis-for-effective-privacy-compliance) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#towards-automated-regulation-analysis-for-effective-privacy-compliance)**
### 作者
* Sunil Manandhar, IBM T.J. Watson Research Center
* Kapil Singh, IBM T.J. Watson Research Center
* Adwait Nadkarni, William & Mary
### 摘要
> 隐私法规正在全球范围内被引入和修改，以有效监管消费者数据的处理。这些法规通常被分析，以满足合规承诺，并帮助设计改善消费者隐私的实际系统。然而，目前这些工作都是手动完成的，这使得任务容易出错，同时也给公司带来了巨大的时间、精力和成本。本文描述了ARC的设计和实现，这是一个将非结构化和复杂的监管文本转化为结构化表示（ARC元组）的框架，可以查询以协助分析和理解法规。我们演示了ARC在提取三种元组形式方面的有效性，F-1得分很高（所有三种形式的平均值为82.1%），并使用了四项主要隐私法规：CCPA、GDPR、VCDPA和PIPEDA。然后，我们构建了ARCBert，它可以识别跨法规的语义相似短语，使合规分析人员能够识别共同要求。我们在16项额外的隐私法规上运行ARC，并识别出1,556个ARC元组和语义相似短语的聚类。最后，我们扩展了ARC，通过将其与四项法规中的披露要求进行比较，来评估隐私政策的合规性。我们对S&P 500公司的隐私政策进行了实证评估，发现了476个缺失的披露，而这些缺失的披露在手动验证后，产生了71.05%的真正阳性，并且还发现了ARC部分匹配中额外的288个缺失披露。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/towards-automated-regulation-analysis-for-effective-privacy-compliance/](https://www.ndss-symposium.org/ndss-paper/towards-automated-regulation-analysis-for-effective-privacy-compliance/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-650-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-650-paper.pdf)
## The CURE to Vulnerabilities in RPKI Validation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#the-cure-to-vulnerabilities-in-rpki-validation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#the-cure-to-vulnerabilities-in-rpki-validation)**
### 作者
* Donika Mirdita, Technische Universität Darmstadt
* Haya Schulmann, Goethe-Universität Frankfurt
* Niklas Vogel, Goethe-Universität Frankfurt
* Michael Waidner, Technische Universität Darmstadt
### 摘要
> 近年来，资源公钥基础设施（RPKI）的采用率不断增加，目前37.8%的主要网络过滤虚假BGP路由。系统通过Relying Party (RP)实现与RPKI交互，获取RPKI对象并向BGP路由器提供经过验证的前缀所有权数据。因此，RP软件中的任何漏洞或缺陷都可能严重威胁互联网路由的稳定性和安全性。
> 
> 我们发现了所有流行的RP实现中存在严重漏洞，使其容易受到路径遍历攻击、远程触发的崩溃以及固有的不一致性的影响，违反了RPKI标准。我们报告了共计18个漏洞，可以被利用来降低边界路由器中RPKI验证的级别，甚至更糟的是，可能导致验证过程中毒，导致恶意前缀被错误验证，合法的RPKI覆盖前缀未能通过验证。此外，我们的研究揭示了验证过程中的不一致性，其中两种流行的实现方式让8149个前缀没有受到劫持保护，其中6405个属于亚马逊。
> 
> 尽管这些发现本身就具有重要意义，但我们的主要贡献在于开发了CURE，这是第一个系统化检测RP实现中错误、漏洞和RFC合规问题的系统，通过自动化测试生成。RPKI的状态性、对象套件中识别错误的严格RPKI规范的缺乏、RP实现的复杂性和多样性，以及关键功能的不可访问性，使得这成为一项极具挑战性的研究任务。CURE是一个强大的RPKI发布点仿真器，可轻松有效地模糊复杂的RP验证流水线。它采用一系列新技术，利用差异性和有状态模糊测试。我们生成了超过6亿个测试案例，并对所有流行的RP进行了测试。
> 
> 在我们披露后，供应商已经为我们发现的漏洞分配了CVE编号。我们将释放我们的模糊系统以及CURE工具，以帮助供应商改善RP实现的质量。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/the-cure-to-vulnerabilities-in-rpki-validation/](https://www.ndss-symposium.org/ndss-paper/the-cure-to-vulnerabilities-in-rpki-validation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1093-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1093-paper.pdf)
## REPLICAWATCHER: Training-less Anomaly Detection in Containerized Microservices.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#replicawatcher-training-less-anomaly-detection-in-containerized-microservices) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#replicawatcher-training-less-anomaly-detection-in-containerized-microservices)**
### 作者
* Asbat El Khairi, University of Twente
* Marco Caselli, Siemens AG
* Andreas Peter, University of Oldenburg
* Andrea Continella, University of Twente
### 摘要
> 尽管异常检测能有效检测以往未曾出现的威胁，但它还存在严重限制，这经常阻止其在实际环境中的部署。事实上，基于异常的入侵检测系统依赖于全面的预先建立的基线以有效地识别可疑活动。不幸的是，先前的研究表明，这些基线会随着时间的推移而老化，并逐渐失去效力，尤其是在动态部署，如微服务基础环境中，其中由于不断变化的操作条件而频繁重新定义“正常状态”的概念。这种情况加强了定期重新训练以保持最佳性能的需求 - 这是一项具有挑战性的过程，尤其是在安全应用背景下。
> 
> 我们提出了一种新颖的、无需训练的监控微服务基础环境的方法。我们的系统REPLICAWATCHER观察了相同容器实例(即副本)的行为，无需事先训练就能检测到异常。我们的关键洞见在于，採用容错或扩展性原因的副本执行类似任务，并表现出类似的行为模式，这允许异常容器突出显示为与其对应的副本明显偏离的关键指标，因此成为安全威胁的重要标志。我们的实验评估结果表明，我们的方法对正常性转变具有韧性，并保持其有效性，无需重新训练。此外，尽管不依赖训练阶段，REPLICAWATCHER的性能与基于训练的最先进解决方案相当，平均精度达到91.08%，召回率为98.35%。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/replicawatcher-training-less-anomaly-detection-in-containerized-microservices/](https://www.ndss-symposium.org/ndss-paper/replicawatcher-training-less-anomaly-detection-in-containerized-microservices/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-286-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-286-paper.pdf)
## SyzBridge: Bridging the Gap in Exploitability Assessment of Linux Kernel Bugs in the Linux Ecosystem.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#syzbridge-bridging-the-gap-in-exploitability-assessment-of-linux-kernel-bugs-in-the-linux-ecosystem) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#syzbridge-bridging-the-gap-in-exploitability-assessment-of-linux-kernel-bugs-in-the-linux-ecosystem)**
### 作者
* Xiaochen Zou, UC Riverside
* Yu Hao, UC Riverside
* Zheng Zhang, UC RIverside
* Juefei Pu, UC RIverside
* Weiteng Chen, Microsoft Research
### 摘要
> 连续模糊测试已成为Linux内核生态系统的重要组成部分，在过去几年中发现了数千个漏洞。有趣的是，其中只有一小部分被转化为针对下游发行版（如Ubuntu和Fedora）的真实世界攻击。这与现有的漏洞利用评估工具的结论相矛盾，这些工具将数百个漏洞分类为高风险， implying中高可利用性。
> 
> 我们的研究旨在了解这种差距并弥补它。通过我们的调查，我们意识到当前的漏洞利用评估工具专门测试上游Linux上的漏洞利用性，该Linux仅用于开发；事实上，我们发现许多漏洞无法在下游直接重现。通过对230个缺陷在43个发行版上（共计8,032个缺陷/发行版对）的大规模测量研究，我们发现每个发行版平均仅通过以root用户身份运行上游PoCs重现19.1％的漏洞，而没有root为0.9％。值得注意的是，通过适当的PoC调整（由环境差异引起），这两个数字都可以分别提高61％和1300％。
> 
> 为此，我们开发了SyzBridge，这是一个完全自动化的系统，可以将上游PoC适应下游内核。我们进一步将SyzBridge与SyzScope集成，这是一款最先进的漏洞利用评估工具，可识别高风险攻击原语（例如控制流劫持）。我们的集成流水线成功地识别了53个源自syzbot的漏洞，在下游分布中很可能被利用，超过5000个得自syzbot的上游漏洞中只有5个被转化为真实世界攻击。值得注意的是，为了验证结果，我们成功利用了5个此前公开未知的漏洞。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/syzbridge-bridging-the-gap-in-exploitability-assessment-of-linux-kernel-bugs-in-the-linux-ecosystem/](https://www.ndss-symposium.org/ndss-paper/syzbridge-bridging-the-gap-in-exploitability-assessment-of-linux-kernel-bugs-in-the-linux-ecosystem/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-926-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-926-paper.pdf)
## Towards Precise Reporting of Cryptographic Misuses.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#towards-precise-reporting-of-cryptographic-misuses) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#towards-precise-reporting-of-cryptographic-misuses)**
### 作者
* Yikang Chen, The Chinese University of Hong Kong
* Yibo Liu, Arizona State University
* Ka Lok Wu, The Chinese University of Hong Kong
* Duc V Le, Visa Research
* Sze Yiu Chau, The Chinese University of Hong Kong
### 摘要
> 在过去的十年中，已经发表了一系列关于使用静态分析来检测加密API滥用的论文。在每篇论文中，应用程序都会根据一组规则进行检查，以查看是否存在违规行为。这些论文中的一个共同主题是规则违反往往很多，通常达到数千个。有趣的是，虽然人们投入了很多精力来解决误报的问题，但很奇怪的是，并没有多少人对于（1）滥用警报是否正确和有意义，以及（2）未来工作除了找到更多滥用之外可以改进什么，发表意见。
> 
> 在本文中，我们深入研究了各种学术论文中报告的违规行为，以及它们的规则、模型和检测器的实施，以试图（1）解释他们的滥用警报和实际漏洞之间的差距，以及（2）为改进滥用检测器的精度和可用性提供可能的方向。我们的分析结果表明，先前工作所做的小规模检查存在一些不幸的盲点，使得规则、模型和实施中的问题被忽视，进而导致了对滥用（和漏洞）的不必要高估。为了促进对该主题的未来研究，我们将这些可避免的误报总结为捕捉其根本原因的高级模式，并讨论可以提高滥用发现精度的设计、评估和报告策略。此外，为了证明这些误报模式和改进方向的普适性，我们还调查了一种流行的行业检测器和一种动态检测器，并讨论一些误报模式在它们身上是如何适用和不适用的。我们的发现表明，准确报告加密滥用的问题仍有很大的改进空间。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/towards-precise-reporting-of-cryptographic-misuses/](https://www.ndss-symposium.org/ndss-paper/towards-precise-reporting-of-cryptographic-misuses/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1032-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1032-paper.pdf)
## Understanding Route Origin Validation (ROV) Deployment in the Real World and Why MANRS Action 1 Is Not Followed.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#understanding-route-origin-validation-rov-deployment-in-the-real-world-and-why-manrs-action-1-is-not-followed) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#understanding-route-origin-validation-rov-deployment-in-the-real-world-and-why-manrs-action-1-is-not-followed)**
### 作者
* Lancheng Qin, Tsinghua University
### 摘要
> BGP劫持是路由安全中最重要的威胁之一。为了提高互域路由的可靠性和可用性，已经做了大量工作来抵御BGP劫持，而路由起源验证（ROV）已成为目前最佳实践。然而，尽管《路由安全相互约定规范》（MANRS）一直在鼓励网络运营商至少验证其客户的通告，但最近的研究表明，许多网络仍未完全部署ROV或传播其客户的非法通告。为了了解现实世界中ROV的部署情况以及为何网络运营商未遵循MANRS提出的行动，我们对ROV部署进行了长期测量，并进一步发现许多不符合规范的网络可能只在部分客户接口、供应商接口或对等接口上部署ROV。然后，我们进行了第一次通知实验，以调查通知对ROV整治的影响。然而，我们的分析表明，没有任何通知处理方式具有显著效果。此后，我们对网络运营商进行了调查，发现经济和技术问题是不合规的两大主要原因。为寻求一个实际的ROV部署策略，我们进行了大规模模拟，令人惊讶地发现，不遵循MANRS行动1可以更好地防御前缀劫持。最后，根据所有发现，我们提供了实际建议并概述了未来的方向，以帮助推动ROV的部署。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/understanding-route-origin-validation-rov-deployment-in-the-real-world-and-why-manrs-action-1-is-not-followed/](https://www.ndss-symposium.org/ndss-paper/understanding-route-origin-validation-rov-deployment-in-the-real-world-and-why-manrs-action-1-is-not-followed/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-214-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-214-paper.pdf)
## UniID: Spoofing Face Authentication System by Universal Identity.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#uniid-spoofing-face-authentication-system-by-universal-identity) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#uniid-spoofing-face-authentication-system-by-universal-identity)**
### 作者
* Zhihao Wu, Zhejiang University
* Yushi Cheng, Zhejiang University
* Shibo Zhang, Zhejiang University
* Xiaoyu Ji, Zhejiang University
* Wenyuan Xu, Zhejing University
### 摘要
> 面部识别系统广泛应用于访问控制系统，以确保机密设施的安全。最近的研究表明，它们对敌对攻击的脆弱性。然而，这种攻击通常需要敌对者在每次认证时佩戴眼镜或帽子等伪装，这可能引起怀疑，并减弱他们的攻击影响。在本文中，我们提出UniID攻击，允许多个敌对者进行面部欺骗攻击，而无需额外的伪装，即通过让内部人员佩戴敌对贴片，将通用标识注册到面部识别数据库中。为了实现这一目标，我们首先通过特征工程选择适当的敌对者，然后采用多目标联合优化方法生成所需的敌对贴片，并最终克服实际挑战，如提高敌对贴片对黑盒系统的可转移性，并增强其在物理世界中的稳健性。我们在实验室环境中实现UniID，并通过六个面部识别模型（FaceNet，Mobile-FaceNet，ArcFace-18/50和MagFace-18/50）和两个商业面部识别系统（ArcSoft和Face++）评估其有效性。模拟和实际实验结果表明，在白盒设置和黑盒设置下，UniID在3个用户场景中可以实现100%和79%的最大攻击成功率，并且可以扩展到8个以上用户。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/uniid-spoofing-face-authentication-system-by-universal-identity/](https://www.ndss-symposium.org/ndss-paper/uniid-spoofing-face-authentication-system-by-universal-identity/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1036-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1036-paper.pdf)
## UntrustIDE: Exploiting Weaknesses in VS Code Extensions.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#untrustide-exploiting-weaknesses-in-vs-code-extensions) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#untrustide-exploiting-weaknesses-in-vs-code-extensions)**
### 作者
* Elizabeth Lin, North Carolina State University
* Igibek Koishybayev, North Carolina State University
* Trevor Dunlap, North Carolina State University
* William Enck, North Carolina State University
* Alexandros Kapravelos, North Carolina State University
### 摘要
> 随着针对软件供应链的威胁不断增加，开发人员集成开发环境（IDE）成为攻击者的有吸引力目标。例如，研究人员发现Visual Studio Code（VS Code）的扩展可以启动Web服务器，并可以通过在开发人员主机上的Web浏览器中执行的JavaScript进行利用。本文旨在系统地了解VS Code扩展市场中的漏洞情况。我们确定了四个不受信任输入来源和三个代码目标，可用于代码注入和文件完整性攻击，并使用它们来设计CodeQL中的污点分析规则。然后，我们对VS Code扩展市场进行了生态系统级的分析，研究了25,402个包含代码的扩展。我们的研究结果表明，尽管漏洞并不普遍，但却存在并影响着数百万用户。具体而言，我们发现21个扩展存在验证的代码注入攻击的攻击证明概念，共影响了超过600万次安装。通过这项研究，我们证明了对IDE扩展安全性需要更多关注。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/untrustide-exploiting-weaknesses-in-vs-code-extensions/](https://www.ndss-symposium.org/ndss-paper/untrustide-exploiting-weaknesses-in-vs-code-extensions/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-73-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-73-paper.pdf)
## VETEOS: Statically Vetting EOSIO Contracts for the "Groundhog Day" Vulnerabilities.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#veteos-statically-vetting-eosio-contracts-for-the-groundhog-day-vulnerabilities) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#veteos-statically-vetting-eosio-contracts-for-the-groundhog-day-vulnerabilities)**
### 作者
* Levi Taiji Li, University of Utah
* Ningyu He, Peking University
* Haoyu Wang, Huazhong University of Science and Technology
* Mu Zhang, University of Utah
### 摘要
> 本文提出了VETEOS，这是一种用于EOSIO合同中“土拨鼠日”漏洞的静态审查工具。在“土拨鼠日”攻击中，罪犯利用EOSIO合同中独特的回滚问题，允许他们持续执行具有不同输入的相同合同代码。通过利用先前执行中暴露的信息，这些攻击者非法地积累有关目标合同的见解，从而找出一种可靠的方法来生成未经授权的利润。为了解决这个问题，我们正式定义了这个独特的漏洞，将其作为控制和数据依赖问题，并开发了定制的静态分析工具VETEOS，可以直接从EOSIO WebAssembly（WASM）字节码中准确发现此类错误。VETEOS在野外检测到了735个新的漏洞，并优于最先进的EOSIO合同分析工具。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/veteos-statically-vetting-eosio-contracts-for-the-groundhog-day-vulnerabilities/](https://www.ndss-symposium.org/ndss-paper/veteos-statically-vetting-eosio-contracts-for-the-groundhog-day-vulnerabilities/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-972-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-972-paper.pdf)
## Untangle: Multi-Layer Web Server Fingerprinting.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#untangle-multi-layer-web-server-fingerprinting) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#untangle-multi-layer-web-server-fingerprinting)**
### 作者
* Cem Topcuoglu, Northeastern University
* Kaan Onarlioglu, Akamai Technologies
* Bahruz Jabiyev, Northeastern University
* Engin Kirda, Northeastern University
### 摘要
> 网络服务器指纹识别是漏洞管理和安全测试中常见的活动，网络扫描仪已提供了这种功能超过20年。所有已知的指纹识别技术都是为了探测单个孤立的Web服务器而设计的。然而，现代互联网由复杂的分层架构组成，其中CDN，反向代理和云服务的链条会面向原始服务器。这使得现有的指纹识别工具和技术变得完全无效。
> 
> 我们提出了第一种能够通过利用不同层次之间的HTTP处理差异来识别多层架构服务器的方法。该技术能够检测涉及的服务器技术及其正确的顺序。它理论上可扩展到任意数量的层，任何服务器技术，以任何顺序部署，但当然有实际的限制。我们然后解决了这些实际考虑，并在一个名为Untangle的工具中提供了该方案的具体实现，通过实证证明其高精度地识别三层架构的能力。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/untangle-multi-layer-web-server-fingerprinting/](https://www.ndss-symposium.org/ndss-paper/untangle-multi-layer-web-server-fingerprinting/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-497-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-497-paper.pdf)
## You Can Use But Cannot Recognize: Preserving Visual Privacy in Deep Neural Networks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#you-can-use-but-cannot-recognize-preserving-visual-privacy-in-deep-neural-networks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#you-can-use-but-cannot-recognize-preserving-visual-privacy-in-deep-neural-networks)**
### 作者
* Qiushi Li, Tsinghua University
* Yan Zhang, Tsinghua University
* Ju Ren, Tsinghua University
* Qi Li, Tsinghua University
* Yaoxue Zhang, Tsinghua University
### 摘要
> 图像数据已广泛应用于深度神经网络（DNN）任务，例如自动驾驶和医学图像分析等各种场景，这引发了重大的隐私问题。现有的隐私保护技术无法有效地保护这些数据。例如，差分隐私（DP）是一种新兴技术，可以保护数据并获得强大的隐私保证，但无法有效地保护公开图像数据集的视觉特征。在本文中，我们提出了一种新颖的隐私保护框架VisualMixer，通过像素重排而不注入任何噪音，来保护视觉DNN任务的训练数据。VisualMixer利用一种名为视觉特征熵（VFE）的新隐私度量来有效地从生物学和机器视觉的角度量化图像的视觉特征。在VisualMixer中，我们设计了一种针对任务的图像混淆方法，以保护DNN训练和推理数据的视觉隐私。对于每个图像，它根据所需的VFE确定图像中的像素重排区域和这些区域的大小。它在空间域和色度通道空间中对这些区域的像素进行重排，而不注入噪音，以防止视觉特征被分辨和识别，同时几乎不会造成准确度损失。在真实世界数据集上进行的大量实验表明，VisualMixer可以在几乎不损失准确度的情况下有效地保护视觉隐私，即平均损失2.35个百分点的模型准确度，并且几乎没有对模型训练的性能降低。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/you-can-use-but-cannot-recognize-preserving-visual-privacy-in-deep-neural-networks/](https://www.ndss-symposium.org/ndss-paper/you-can-use-but-cannot-recognize-preserving-visual-privacy-in-deep-neural-networks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-1361-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-1361-paper.pdf)
## When Cryptography Needs a Hand: Practical Post-Quantum Authentication for V2V Communications.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#when-cryptography-needs-a-hand-practical-post-quantum-authentication-for-v2v-communications) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#when-cryptography-needs-a-hand-practical-post-quantum-authentication-for-v2v-communications)**
### 作者
* Geoff Twardokus, Rochester Institute of Technology
* Nina Bindel, SandboxAQ
* Hanif Rahbari, Rochester Institute of Technology
* Sarah McCarthy, University of Waterloo
### 摘要
> 我们面临着非典型的挑战，即支持后量子密码学（PQC）及其在安全关键车辆对车辆（V2V）通信中的显著开销，处理V2V有限无线频谱内严格的开销和延迟限制。例如，我们发现当前使用的频谱来支持V2V中的签名验证几乎不可能采用PQC。因此，我们提出了一种消息签名证书传输调度技术（我们发现当前多达93%冗余），该技术可以自适应减少无线频谱的使用。结合起来，我们设计了第一个PQC和V2V的集成，以满足可用频谱情况下的上述严格约束。具体而言，我们分析了NIST选定用于标准化的三种PQ签名算法，以及XMSS（RFC 8391），并提出了一种部分混合认证协议——经过定制的古典密码学和PQC的融合，用于在我们概述的朝向完全PQ V2V的萌芽过渡期内在V2V生态系统中使用。我们的经过证明安全的协议有效地平衡了安全性和性能，通过软件定义无线电（USRPs）、商业V2V设备以及道路交通和V2V模拟器的实验进行了演示。我们展示了我们的联合传输调度优化和部分混合设计在现实条件下是可扩展和可靠的，并且与当前最先进技术相比，增加了可忽略的平均延迟（每条消息0.39毫秒）。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/when-cryptography-needs-a-hand-practical-post-quantum-authentication-for-v2v-communications/](https://www.ndss-symposium.org/ndss-paper/when-cryptography-needs-a-hand-practical-post-quantum-authentication-for-v2v-communications/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-267-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-267-paper.pdf)
## Understanding the Implementation and Security Implications of Protective DNS Services.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#understanding-the-implementation-and-security-implications-of-protective-dns-services) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#understanding-the-implementation-and-security-implications-of-protective-dns-services)**
### 作者
* Mingxuan Liu, Zhongguancun Laboratory; Tsinghua University
* Yiming Zhang, Tsinghua University
* Xiang Li, Tsinghua University
* Chaoyi Lu, Tsinghua University
* Baojun Liu, Tsinghua University
* Haixin Duan, Tsinghua University; Zhongguancun Laboratory
* Xiaofeng Zheng, Institute for Network Sciences and Cyberspace
* Tsinghua University; QiAnXin Technology Research Institute & Legendsec Information Technology, Beijing) Inc.
### 摘要
> 域名经常被注册和滥用用于有害和非法互联网活动。为减轻这种威胁，作为新兴的安全服务，防御性 DNS (PDNS) 通过主动提供重写 DNS 响应来阻止访问有害内容，将恶意域名解析为受控主机。尽管它已成为打击网络犯罪的有效工具，但由于它们的实现差异，安全社区很少了解 PDNS 服务的部署、运行状态和安全政策。在本文中，我们介绍了一项大规模测量研究，以了解开放 PDNS 服务的部署和安全影响。我们首先对 28 个流行的 PDNS 提供商进行实证分析，并总结 DNS 重写策略的主要格式。然后，通过派生的规则驱动，我们设计了一种方法，识别在野外强制实施的有意 DNS 重写。我们的结果是多方面的。好的一面是，PDNS 的部署现在开始扩展：我们发现有 17,601 个 DNS 服务器 (所有探测到的 9.1%) 提供此服务。对于 DNS 客户端，从常规 DNS 切换到 PDNS 需要增加一些步骤 (例如，检查威胁情报和重写 DNS 响应)，但引发的查询延迟微不足道。然而，我们还发现了 PDNS 实现中的缺陷和漏洞，包括规避阻止策略和拒绝服务。通过负责任的漏洞披露，我们收到了 12 项高风险漏洞的审计评估结果。我们的研究呼吁为安全的 PDNS 运营提供适当的指导和最佳实践。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/understanding-the-implementation-and-security-implications-of-protective-dns-services/](https://www.ndss-symposium.org/ndss-paper/understanding-the-implementation-and-security-implications-of-protective-dns-services/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-782-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-782-paper.pdf)
## Secure Multiparty Computation of Threshold Signatures Made More Efficient.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#secure-multiparty-computation-of-threshold-signatures-made-more-efficient) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2024].md#secure-multiparty-computation-of-threshold-signatures-made-more-efficient)**
### 作者
* Harry W. H. Wong, The Chinese University of Hong Kong
* Jack P. K. Ma, The Chinese University of Hong Kong
* Sherman S. M. Chow, The Chinese University of Hong Kong
### 摘要
> 阈值签名，尤其是ECDSA，对于保护分散式应用程序至关重要。它们的非线性结构在分布式签名中提出了挑战，通常通过成对的乘法转换为加法共享来解决，导致对于每个n个签名者而言，每次通信和验证成本均为O(n)和O(n²)。此外，大多数方案缺乏鲁棒性，需要在出现故障时重新启动。Wong等人（NDSS '23）的创举性工作仍然需要在另一个环节之后回滚到前一个环节，以说服所有其他签名者后继续签署。
> 
> 我们重新审视阈值线性同态加密（LHE）的安全多方计算。通过实现其公共可验证性和故障恢复，我们囊括了两个技术贡献到Castagnos-Laguillaumie LHE（CT-RSA '15）：在不诚实的大多数设置下的2轮鲁棒分布式密钥生成（DKG）协议，以及一个随附的零知识证明，允许在未知阶群中进行提取。我们使用基于二重码的验证（ACNS '17）扩展了DKG，将其O（tn²）成本的私有可验证性升级为O（n²）的公共可验证性。
> 
> 建立在我们的DKG之上，我们提出了第一个阈值ECDSA协议，每个团体成员的通信成本为O（1），每个团体成员的验证成本为O（n），并且与非鲁棒方案（CCS '20）的最低轮复杂度相匹配。从实证方面看，我们将签名阶段的计算和通信成本降低一半，与最先进的鲁棒阈值ECDSA（NDSS '23）相比。我们还通过改进的BBS +签名（IEEE Syst. J. '13）的阈值扩展（IEEE S＆P '23）展示了我们技术的多功能性。。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/secure-multiparty-computation-of-threshold-signatures-made-more-efficient/](https://www.ndss-symposium.org/ndss-paper/secure-multiparty-computation-of-threshold-signatures-made-more-efficient/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2024-601-paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2024-601-paper.pdf)
