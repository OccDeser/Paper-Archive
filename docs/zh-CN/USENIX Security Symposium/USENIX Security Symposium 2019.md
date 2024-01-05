# USENIX Security Symposium 2019
## A Study of the Feasibility of Co-located App Attacks against BLE and a Large-Scale Analysis of the Current Application-Layer Security Landscape.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#a-study-of-the-feasibility-of-co-located-app-attacks-against-ble-and-a-large-scale-analysis-of-the-current-application-layer-security-landscape) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#a-study-of-the-feasibility-of-co-located-app-attacks-against-ble-and-a-large-scale-analysis-of-the-current-application-layer-security-landscape)**
### 作者
* Pallavi Sivakumaran, Royal Holloway University of London
* Jorge Blasco, Royal Holloway University of London
### 摘要
> 低功耗蓝牙（BLE）是一种快速增长的无线技术，具有大量潜在的用例，尤其是在物联网领域。越来越多的情况下，这些用例要求在BLE设备上存储敏感用户数据或关键设备控制，并且通过增强型移动应用程序访问这些数据。对此类数据的不受控制的访问可能侵犯用户的隐私，导致设备故障，甚至危及生命。BLE标准提供了配对和绑定等安全机制，以保护敏感数据，使只有经过身份验证的设备才能访问它。本文展示了未经授权的共存安卓应用程序如何在用户不知情的情况下访问受配对保护的BLE数据。我们讨论了解决这一生态系统中涉及的各方利益相关者的缓解策略，并提出目前唯一可能的保护BLE数据的选项是BLE开发人员在BLE设备和安卓应用程序之间实施应用层安全的救济措施。我们介绍了BLECryptracer，这是一种用于识别此类应用层安全性的工具，并呈现了在18,900多个启用BLE的安卓应用程序上进行的大规模静态分析的结果。我们的发现表明，超过45%的这些应用程序没有采取措施保护BLE数据，并且在那些采取措施的应用程序中，有时会错误应用加密。这意味着潜在的大量相应的BLE外围设备容易受到未经授权的数据访问的威胁。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/sivakumaran](https://www.usenix.org/conference/usenixsecurity19/presentation/sivakumaran)
- **PDF:** [https://www.usenix.org/system/files/sec19-sivakumaran_0.pdf](https://www.usenix.org/system/files/sec19-sivakumaran_0.pdf)
## The CrossPath Attack: Disrupting the SDN Control Channel via Shared Links.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-crosspath-attack-disrupting-the-sdn-control-channel-via-shared-links) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-crosspath-attack-disrupting-the-sdn-control-channel-via-shared-links)**
### 作者
* Jiahao Cao, Tsinghua University
* Qi Li, Tsinghua University
* Renjie Xie, Tsinghua University
* Kun Sun, George Mason University
* Guofei Gu, Texas A&M University
* Mingwei Xu, Tsinghua University
* Yuan Yang, Tsinghua University
### 摘要
> 软件定义网络（SDN）通过一个集中控制器控制整个网络，能够实现网络创新。由于控制信道传输整个网络的控制流量，其安全性和可靠性非常重要。在文献中，我们首次提出了CrossPath攻击，通过利用控制流量和数据流量路径中的共享链路来破坏SDN的控制信道。在这种攻击中，特定设计的数据流量可以隐式地干扰共享链路上的控制流量前进。由于数据流量不进入控制信道，攻击隐蔽且控制器很难察觉。为了识别要攻击的包含共享链路的目标路径，我们开发了一种新的技术，称为对抗性路径侦察。理论分析和实验结果都表明了其确定目标路径的可行性和效率。我们在真实的SDN测试环境中系统研究了这种攻击对各种网络应用的影响。实验证明该攻击显著降低了现有网络应用的性能，并引起严重的网络异常，例如路由黑洞、流表重置甚至网络范围的拒绝服务攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/cao](https://www.usenix.org/conference/usenixsecurity19/presentation/cao)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_cao_prepub.pdf](https://www.usenix.org/system/files/sec19fall_cao_prepub.pdf)
## A Billion Open Interfaces for Eve and Mallory: MitM, DoS, and Tracking Attacks on iOS and macOS Through Apple Wireless Direct Link.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#a-billion-open-interfaces-for-eve-and-mallory-mitm-dos-and-tracking-attacks-on-ios-and-macos-through-apple-wireless-direct-link) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#a-billion-open-interfaces-for-eve-and-mallory-mitm-dos-and-tracking-attacks-on-ios-and-macos-through-apple-wireless-direct-link)**
### 作者
* Milan Stute, Technische Universität Darmstadt
* Sashank Narain, Northeastern University
* Alex Mariotto, Technische Universität Darmstadt
* Alex, Technische Universität Darmstadt
* er Heinrich, Technische Universität Darmstadt
* David Kreitschmann, Technische Universität Darmstadt
* Guevara Noubir, Northeastern University
* Matthias Hollick, Technische Universität Darmstadt
### 摘要
> 苹果无线直连（AWDL）是苹果生态系统中的关键协议，用于超过十亿台iOS和macOS设备的设备间通信。AWDL是IEEE 802.11（Wi-Fi）标准的专有扩展，并与低功耗蓝牙（BLE）集成，用于提供Apple AirDrop等服务。我们进行了有关AWDL及其与BLE集成的首次安全性和隐私分析。我们发现了从设计缺陷到实现漏洞的多个安全性和隐私性漏洞，导致中间人（MitM）攻击，从而实现对通过AirDrop传输的文件的隐秘修改，阻止通信的拒绝服务（DoS）攻击，启用用户识别和长期跟踪以削弱MAC地址随机化的隐私泄露，以及使所有附近设备针对性地或同时崩溃的DoS攻击。这些缺陷涉及AirDrop的BLE发现机制、AWDL同步、UI设计和Wi-Fi驱动程序实现。我们的分析基于对协议和代码的逆向工程以及专利分析。我们提供了概念验证实现，并证明可以使用低成本（20美元）的micro:bit设备和现成的Wi-Fi卡进行攻击。我们提出了实用且有效的对策。尽管在我们负责任的披露后，苹果已能够针对DoS攻击漏洞发布修复补丁，但其他安全性和隐私性漏洞需要重新设计其部分服务。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/stute](https://www.usenix.org/conference/usenixsecurity19/presentation/stute)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_stute_prepub.pdf](https://www.usenix.org/system/files/sec19fall_stute_prepub.pdf)
## Hiding in Plain Signal: Physical Signal Overshadowing Attack on LTE.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#hiding-in-plain-signal-physical-signal-overshadowing-attack-on-lte) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#hiding-in-plain-signal-physical-signal-overshadowing-attack-on-lte)**
### 作者
* Hojoon Yang, KAIST
* Sangwook Bae, KAIST
* Mincheol Son, KAIST
* Hongil Kim, KAIST
* Song Min Kim, KAIST
* Yongdae Kim, KAIST
### 摘要
> 长期演进(LTE)通信是基于开放的介质，因此，一个合法的信号可能会被恶意信号伪造。尽管大多数LTE信令消息都受到了加密原语的保护，但LTE广播消息从未受到过完整性保护。在本文中，我们首次提出了一种信号注入攻击，利用了LTE广播消息的基本弱点，通过空中修改传输信号。这种攻击被称为信号掩模攻击(SigOver)，与使用假基站的现有攻击相比，具有几个优势和区别。例如，与合法信号相比，SigOver在3 dB功率差异的情况下显示了98%的成功率，而使用假基站的攻击在35 dB功率差异的情况下仅有80%的成功率。鉴于SigOver是一种新颖的原始攻击，它产生了五种新的攻击场景和影响。最后，对两种潜在的对策进行了讨论，确定实际和强大的防御机制作为未来工作的方向。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/yang-hojoon](https://www.usenix.org/conference/usenixsecurity19/presentation/yang-hojoon)
- **PDF:** [https://www.usenix.org/system/files/sec19-yang-hojoon.pdf](https://www.usenix.org/system/files/sec19-yang-hojoon.pdf)
## UWB-ED: Distance Enlargement Attack Detection in Ultra-Wideband.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#uwb-ed-distance-enlargement-attack-detection-in-ultra-wideband) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#uwb-ed-distance-enlargement-attack-detection-in-ultra-wideband)**
### 作者
* Mridula Singh, ETH Zurich
* Patrick Leu, ETH Zurich
* AbdelRahman Abdou, ETH Zurich
* Srdjan Capkun, ETH Zurich
### 摘要
> 移动自主系统、机器人和网络物理系统依赖准确的定位信息。为了进行距离测量，两个设备交换信号，并且知道这些信号传播的速度为光速，到达时间被用于距离估计。现有的距离测量技术无法防止对抗性距离扩大攻击——一种极具破坏性的策略，其中对手在畸变真实信号以防止接收器识别之后，重新发出设备之间传输的延迟版本的信号。对手无需破解加密，也不需要妥协任何上层安全协议来进行此攻击。目前还没有已知的解决方案来防止距离扩大攻击。我们提出了一种新的调制技术——超宽带扩大检测（UWB-ED），用于检测距离扩大攻击，并安全验证两个互相信任的设备之间的距离。我们分析了在注入信号来阻断/修改真实信号的对抗者条件下的UWB-ED。我们展示了UWB-ED如何成为802.15.4z低速脉冲和5G标准的一个良好选择。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/singh](https://www.usenix.org/conference/usenixsecurity19/presentation/singh)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_singh_prepub.pdf](https://www.usenix.org/system/files/sec19fall_singh_prepub.pdf)
## Computer Security and Privacy in the Interactions Between Victim Service Providers and Human Trafficking Survivors.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#computer-security-and-privacy-in-the-interactions-between-victim-service-providers-and-human-trafficking-survivors) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#computer-security-and-privacy-in-the-interactions-between-victim-service-providers-and-human-trafficking-survivors)**
### 作者
* Christine Chen, University of Washington
* Nicola Dell, Cornell Tech
* Franziska Roesner, University of Washington
### 摘要
> 一个受害者服务提供者（VSP）是人口贩卖幸存者康复过程中的重要合作伙伴。VSP提供或将幸存者连接到医疗、法律服务、就业机会等服务。在这项研究中，我们从计算机安全和隐私的角度研究了VSP与幸存者之间的互动。通过对VSP工作人员和人口贩卖幸存者进行的17次半结构化访谈，我们揭示了技术在VSP与幸存者互动中的作用，以及相关的计算机安全和隐私问题及缓解措施。我们的结果突出显示了VSP必须平衡的各种问题，包括与客户建立信任（通常通过尽可能给予他们自主权）同时试图引导他们使用技术以减轻重新受害的风险。最后，我们对希望与VSP合作支持和赋予人口贩卖幸存者力量的计算机安全和隐私技术专家提出具体建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/chen](https://www.usenix.org/conference/usenixsecurity19/presentation/chen)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_chen_prepub.pdf](https://www.usenix.org/system/files/sec19fall_chen_prepub.pdf)
## Clinical Computer Security for Victims of Intimate Partner Violence.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#clinical-computer-security-for-victims-of-intimate-partner-violence) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#clinical-computer-security-for-victims-of-intimate-partner-violence)**
### 作者
* Sam Havron, Cornell Tech
* Diana Freed, Cornell Tech
* Rahul Chatterjee, Cornell Tech
* Damon McCoy, New York University
* Nicola Dell, Cornell Tech
* Thomas Ristenpart, Cornell Tech
### 摘要
> 面对有针对性、持续不断的攻击，数字不安全性日益使受害者陷入严重甚至生命威胁境地。我们提出了一种帮助受害者的方法，即临床计算机安全，并在密切伴侣暴力（IPV）的背景下进行了探讨。IPV普遍存在，虐待者滥用技术来追踪、骚扰、恐吓和伤害受害者。我们报告了一个咨询服务的迭代设计、完善和部署过程，该服务旨在帮助IPV受害者从经过培训的技术专家那里获得现场安全帮助。为此，我们创建并测试了一系列新的技术和非技术工具，系统化地发现和调查IPV中复杂的多模式数字攻击。一项与44名IPV幸存者进行的初步实地研究显示，我们的流程和工具有助于受害者发现帐户被盗、可利用的错误配置和潜在的间谍软件。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/havron](https://www.usenix.org/conference/usenixsecurity19/presentation/havron)
- **PDF:** [https://www.usenix.org/system/files/sec19-havron.pdf](https://www.usenix.org/system/files/sec19-havron.pdf)
## Evaluating the Contextual Integrity of Privacy Regulation: Parents' IoT Toy Privacy Norms Versus COPPA.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#evaluating-the-contextual-integrity-of-privacy-regulation-parents-iot-toy-privacy-norms-versus-coppa) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#evaluating-the-contextual-integrity-of-privacy-regulation-parents-iot-toy-privacy-norms-versus-coppa)**
### 作者
* Noah Apthorpe, Princeton University
* Sarah Varghese, Princeton University
* Nick Feamster, Princeton University
### 摘要
> 对数据隐私的日益关注引发了世界范围内的新型和更新的数据保护法规。然而，至今还没有一种严谨的方法来测试这些法规强制要求的做法是否真正与受影响人群的隐私规范相一致。在这里，我们证明了基于上下文完整性理论的调查提供了一种可量化和可扩展的方法，用于衡量特定监管条款与隐私规范的一致性。我们将这种方法应用于美国儿童在线隐私保护法(COPPA)，对195名父母进行调查，并提供了首个数据，即COPPA的要求通常与父母对互联网连接的“智能”儿童玩具的隐私期望相一致。然而，对于特定的智能玩具、信息类型、父母年龄和其他条件，数据收集的可接受性存在差异，这强调了详细的上下文因素对隐私规范的重要性，而这可能无法被COPPA充分捕捉到。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/apthorpe](https://www.usenix.org/conference/usenixsecurity19/presentation/apthorpe)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_apthorpe_prepub.pdf](https://www.usenix.org/system/files/sec19fall_apthorpe_prepub.pdf)
## Secure Multi-User Content Sharing for Augmented Reality Applications.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#secure-multi-user-content-sharing-for-augmented-reality-applications) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#secure-multi-user-content-sharing-for-augmented-reality-applications)**
### 作者
* Kimberly Ruth, University of Washington
* Tadayoshi Kohno, University of Washington
* Franziska Roesner, University of Washington
### 摘要
> 增强现实（AR）是将虚拟内容叠加在用户对真实世界的感知之上的技术，现已开始进入消费市场。除了智能手机平台，早期的头戴显示设备如微软的HoloLens正在积极发展中。这些技术有许多引人注目的应用，例如面对面的协作工具、多人游戏和远程存在。虽然以前关于AR安全和隐私的研究主要关注AR应用所带来的潜在风险，但多用户之间也会出现新的风险。在这项工作中，我们探讨了在多用户AR中设计安全和私密内容共享时所面临的挑战。我们分析了代表性的应用案例研究，并将安全性和功能性的设计目标系统化，以便多用户AR平台能够支持这些目标。我们设计了一个AR内容共享控制模块，以实现这些目标，并为HoloLens构建了一个原型实现（ShareAR）。这项工作为安全和私密的多用户AR互动奠定了基础。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/ruth](https://www.usenix.org/conference/usenixsecurity19/presentation/ruth)
- **PDF:** [https://www.usenix.org/system/files/sec19-ruth.pdf](https://www.usenix.org/system/files/sec19-ruth.pdf)
## Understanding and Improving Security and Privacy in Multi-User Smart Homes: A Design Exploration and In-Home User Study.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#understanding-and-improving-security-and-privacy-in-multi-user-smart-homes-a-design-exploration-and-in-home-user-study) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#understanding-and-improving-security-and-privacy-in-multi-user-smart-homes-a-design-exploration-and-in-home-user-study)**
### 作者
* Eric Zeng, University of Washington
* Franziska Roesner, University of Washington
### 摘要
> 智能家居面临着独特的安全、隐私和可用性挑战，因为它们是多用户、多设备的系统，影响着家庭中所有居民的物理环境。当前的智能家居技术通常对于多用户并没有很好地设计，有时缺乏基本的访问控制和其他使系统易懂和可访问的功能。虽然之前的研究揭示了智能家居用户的问题和需求，但如何设计和构建解决方案并不明显。这样的问题肯定还没有在具有挑战性的对抗情况（如家庭暴力）下得到解答，但我们观察到，即使在功能正常、非对抗性的家庭中，这些问题也没有得到解答。在这项工作中，我们探索了一般非对抗性智能家居中多用户安全和隐私问题的用户行为、需求和可能的解决方案。基于之前工作中的设计原则，我们构建了一个包含具体功能的智能家居应用原型，如基于位置的访问控制、监督访问控制和活动通知，并通过一个为期一个月的家庭用户研究对我们的原型进行了测试。通过用户研究的结果，我们重新评估了我们最初的设计原则，提出了用户对安全和隐私功能的反馈，并为智能家居设计师和研究人员提出了挑战和建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/zeng](https://www.usenix.org/conference/usenixsecurity19/presentation/zeng)
- **PDF:** [https://www.usenix.org/system/files/sec19-zeng.pdf](https://www.usenix.org/system/files/sec19-zeng.pdf)
## PAC it up: Towards Pointer Integrity using ARM Pointer Authentication.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#pac-it-up-towards-pointer-integrity-using-arm-pointer-authentication) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#pac-it-up-towards-pointer-integrity-using-arm-pointer-authentication)**
### 作者
* Hans Liljestr, Aalto University, Huawei Technologies Oy
* Thomas Nyman, Aalto University
* Kui Wang, Huawei Technologies Oy, Tampere University of Technology
* Carlos Chinea Perez, Huawei Technologies Oy
* Jan-Erik Ekberg, Huawei Technologies Oy, Aalto University
* N. Asokan, Aalto University
### 摘要
> 运行时攻击是针对使用无内存安全编程语言（例如C和C++）编写的程序的一种突出威胁，对计算机系统构成了威胁。像返回导向编程（ROP）这样的技术在攻击真实系统方面的流行性已经促使主要处理器制造商设计基于硬件的针对特定类别运行时攻击的对策。一个例子是在常用于智能手机等设备上的ARMv8-A处理器架构中最近增加的对指针验证（PA）的支持。PA是一种低成本技术，用于对指针进行验证以抵抗内存漏洞。已经证明，它可以实现针对损坏返回地址或函数指针的内存漏洞的实际保护。然而，到目前为止，PA作为一种通用的保护机制，用于加强软件防御各类内存攻击方面，得到了非常少的关注。在本文中，我们使用PA来构建针对各类运行时攻击的新型防御措施，包括第一种基于PA的数据指针完整性机制。我们介绍了PARTS，一种将我们基于PA的防御措施整合到LLVM编译器和GNU/Linux操作系统的工具框架，并通过系统评估展示，PARTS以合理的性能开销提供了比当前解决方案更好的保护。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/liljestrand](https://www.usenix.org/conference/usenixsecurity19/presentation/liljestrand)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_liljestrand_prepub.pdf](https://www.usenix.org/system/files/sec19fall_liljestrand_prepub.pdf)
## Origin-sensitive Control Flow Integrity.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#origin-sensitive-control-flow-integrity) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#origin-sensitive-control-flow-integrity)**
### 作者
* Mustakimur Rahman Kh, Florida State University
* aker, Florida State University
* Wenqing Liu, Florida State University
* Abu Naser, Florida State University
* Zhi Wang, Florida State University
* Jie Yang, Florida State University
### 摘要
> CFI是一种有效的、通用的防御控制流劫持攻击的方法，尤其适用于C/C++程序。然而，之前的大多数CFI系统在安全性方面存在问题，其等价类（EC）大小较大。EC是指CFI策略中无法区分的一组目标；也就是说，攻击者可以在EC内部使控制流"弯曲"而不被检测到。因此，大的EC代表了CFI系统中的最薄弱环节，应该进行分解以提高安全性。
> 
> 
> 
> 
> 
> 
> 
> 改善CFI安全性的一种方法是使用上下文信息，如最近采用的分支，来完善CFI策略，即所谓的上下文敏感CFI。然而，基于最近执行历史的上下文往往无法有效分解大的EC，因为间接控制转移指令（ICT）的传入执行路径数量有限。
> 
> 
> 
> 
> 
> 
> 
> 本文提出了一种新的CFI上下文，称为起源敏感性（origin sensitivity），它可以有效地分解大的EC，并减小平均和最大的EC大小。起源敏感CFI（OS-CFI）将ICT调用的代码指针的起源作为上下文，并根据这个上下文对ICT的目标进行限制。它支持C语言风格的间接调用和C++虚拟调用。此外，我们利用普通英特尔处理器（MPX和TSX）的常见硬件功能来提高OS-CFI的安全性和性能。我们的评估结果显示，OS-CFI可以大大减小最大和平均的EC大小（某些情况下减小了98%），并具有较强的性能--对SPEC CPU2006和NGINX的所有C/C++基准测试平均增加了7.6%的开销。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/khandaker](https://www.usenix.org/conference/usenixsecurity19/presentation/khandaker)
- **PDF:** [https://www.usenix.org/system/files/sec19-khandaker.pdf](https://www.usenix.org/system/files/sec19-khandaker.pdf)
## HardFails: Insights into Software-Exploitable Hardware Bugs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#hardfails-insights-into-software-exploitable-hardware-bugs) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#hardfails-insights-into-software-exploitable-hardware-bugs)**
### 作者
* Ghada Dessouky, Technische Universität Darmstadt
* David Gens, Technische Universität Darmstadt
* Patrick Haney, Texas A&M University
* Garrett Persyn, Texas A&M University
* Arun Kanuparthi, Intel Corporation
* Hareesh Khattri, Intel Corporation
* Jason M. Fung, Intel Corporation
* Ahmad-Reza Sadeghi, Technische Universität Darmstadt
* Jeyavijayan Rajendran, Texas A&M University
### 摘要
> 现代计算机系统越来越快、更高效，并且随着每一代的推出与其他系统日益相互连接。因此，这些平台变得更加复杂，新功能的不断引入可能会引发新的漏洞。尽管半导体行业采用了一系列不同的验证技术来确保片上系统（SoC）设计的安全性，但越来越多的越来越复杂的攻击开始利用跨层次漏洞。这些攻击利用硬件和软件之间微妙的交互，正如最近发生的一系列实际漏洞利用所示，影响了所有主要硬件供应商。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们从硬件设计师的角度深入探讨了微体系结构安全性，通过回顾在设计时检测硬件漏洞所使用的最新方法。我们展示了目前存在一个保护漏洞，使芯片设计容易受到软件攻击，并且可以利用这些硬件漏洞。受到现实世界中的漏洞和来自我们行业合作伙伴（一家领先的芯片制造商）的见解的启发，我们基于RISC-V SoCs构建了第一个基于真实世界软件可利用的RTL漏洞的代表性实验平台。修复这些漏洞可能并非总是可能的，还可能导致产品召回。基于我们的实验平台，我们进行了两个广泛的案例研究，分析了最先进的安全验证方法的有效性，并确定了这些方法无法检测到的特定类别的漏洞，我们称之为HardFails。通过我们的工作，我们重点关注这些方法的具体局限性，推动未来在这些方向上的研究。我们设想我们的RISC-V RTL漏洞实验平台将为硬件安全验证的未来研究提供一个丰富的探索基础，同时为开源硬件领域做出贡献。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/dessouky](https://www.usenix.org/conference/usenixsecurity19/presentation/dessouky)
- **PDF:** [https://www.usenix.org/system/files/sec19-dessouky.pdf](https://www.usenix.org/system/files/sec19-dessouky.pdf)
## uXOM: Efficient eXecute-Only Memory on ARM Cortex-M.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#uxom-efficient-execute-only-memory-on-arm-cortex-m) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#uxom-efficient-execute-only-memory-on-arm-cortex-m)**
### 作者
* Donghyun Kwon, Seoul National University
* Jangseop Shin, Seoul National University
* Giyeol Kim, Seoul National University
* Byoungyoung Lee, Seoul National University, Purdue University
* Yeongpil Cho, Soongsil University
* Yunheung Paek, Seoul National University
### 摘要
> 代码泄露攻击是计算机系统面临的主要威胁之一，考虑到代码通常包含安全敏感信息，如知识产权（例如秘密算法），敏感数据（例如加密密钥）和用于发动代码重用攻击的工具。为了阻止这类攻击，安全研究人员设计了一种强大的内存保护机制，称为"XOM"（eXecute-Only-Memory），它定义了特殊的内存区域，允许执行指令，但禁止数据读写。考虑到XOM的价值，许多最新的高端处理器已经在硬件上增加了对XOM的支持。然而，不幸的是，低端嵌入式处理器尚未提供对XOM的硬件支持。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了一种名为"uXOM"的新技术，它以安全且高度优化的方式实现了XOM，在低端嵌入式设备中广泛使用的Cortex-M处理器系列上工作。uXOM通过使用Cortex-M中的特殊体系结构特性（非特权内存指令和MPU）实现了安全性和效率。我们提出了在面对强攻击者时使XOM不可规避的几个挑战，并介绍了我们的代码分析和仪器化方法来解决这些挑战。我们的评估结果显示，与仅使用软件实现的Cortex-M的XOM相比，uXOM在执行时间、代码大小和能量消耗方面都具有更好的效率，成功地在Cortex-M处理器上实现了XOM。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/kwon](https://www.usenix.org/conference/usenixsecurity19/presentation/kwon)
- **PDF:** [https://www.usenix.org/system/files/sec19-kwon_0.pdf](https://www.usenix.org/system/files/sec19-kwon_0.pdf)
## A Systematic Evaluation of Transient Execution Attacks and Defenses.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#a-systematic-evaluation-of-transient-execution-attacks-and-defenses) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#a-systematic-evaluation-of-transient-execution-attacks-and-defenses)**
### 作者
* Claudio Canella, Graz University of Technology
* Jo Van Bulck, imec-DistriNet, KU Leuven
* Michael Schwarz, Graz University of Technology
* Moritz Lipp, Graz University of Technology
* Benjamin von Berg, Graz University of Technology
* Philipp Ortner, Graz University of Technology
* Frank Piessens, imec-DistriNet, KU Leuven
* Dmitry Evtyushkin, College of William and Mary
* Daniel Gruss, Graz University of Technology
### 摘要
> 对于包括Spectre和Meltdown在内的暂时性执行攻击的研究表明，异常或分支错误预测事件可能会在CPU的微体系结构状态中留下与秘密相关的痕迹。这一观察结果导致了新的Spectre和Meltdown攻击变体以及更多特定防御措施（例如，微码和软件补丁）的出现。行业和学术界现在都致力于寻找针对已知问题的有效防御措施。然而，我们对剩余攻击表面及所提出的防御措施的完整性仅有有限的了解。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了一种对暂时性执行攻击进行系统化的研究方法。我们的系统化方法揭示了6种（新的）被忽视和未经调查的暂时性执行攻击：2种新的可利用的Meltdown效应：Intel上的Meltdown-PK（保护键绕过）和Intel和AMD上的Meltdown-BND（边界检查绕过），以及4种新的Spectre误训练策略。我们通过在三个主要CPU供应商（Intel，AMD，ARM）的具体实现中评估这些攻击，来验证我们的分类树中的攻击。我们的系统化方法提供了更完整的攻击表面图，并允许更系统地评估防御措施。通过这种系统化评估，我们发现大多数防御措施，包括已部署的措施，无法完全减轻所有攻击变体的影响。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/canella](https://www.usenix.org/conference/usenixsecurity19/presentation/canella)
- **PDF:** [https://www.usenix.org/system/files/sec19-canella.pdf](https://www.usenix.org/system/files/sec19-canella.pdf)
## The Secret Sharer: Evaluating and Testing Unintended Memorization in Neural Networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-secret-sharer-evaluating-and-testing-unintended-memorization-in-neural-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-secret-sharer-evaluating-and-testing-unintended-memorization-in-neural-networks)**
### 作者
* Nicholas Carlini, Google Brain
* Chang Liu, University of California, Berkeley
* Úlfar Erlingsson, Google Brain
* Jernej Kos, National University of Singapore
* Dawn Song, University of California, Berkeley
### 摘要
> 本文描述了一种测试方法，用于定量评估生成序列模型（一种常见的机器学习模型）意外记忆稀有或独特的训练数据序列的风险。由于这些模型有时会在敏感数据（例如用户的私人消息文本）上进行训练，因此该方法可以通过允许深度学习从业者选择最小化此类记忆的训练方法来增强隐私保护。
> 
> 
> 
> 
> 
> 
> 
> 在实验证明，意外记忆是一种持久且难以避免的问题，可能带来严重后果。具体而言，对于没有考虑记忆的模型，我们描述了一种新的、高效的程序，可以提取出独特的秘密序列，例如信用卡号码。我们展示了我们的测试策略作为第一道防线的实际且易于使用，例如描述了其在Google的Smart Compose中的应用，该商业化的文本自动补全神经网络是通过对数百万用户的电子邮件消息进行训练而得到的，并且可以通过该策略来定量限制数据曝光。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/carlini](https://www.usenix.org/conference/usenixsecurity19/presentation/carlini)
- **PDF:** [https://www.usenix.org/system/files/sec19-carlini.pdf](https://www.usenix.org/system/files/sec19-carlini.pdf)
## Improving Robustness of ML Classifiers against Realizable Evasion Attacks Using Conserved Features.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#improving-robustness-of-ml-classifiers-against-realizable-evasion-attacks-using-conserved-features) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#improving-robustness-of-ml-classifiers-against-realizable-evasion-attacks-using-conserved-features)**
### 作者
* Liang Tong, Washington University in St. Louis
* Bo Li, UIUC
* Chen Hajaj, Ariel University
* Chaowei Xiao, University of Michigan
* Ning Zhang, Washington University in St. Louis
* Yevgeniy Vorobeychik, Washington University in St. Louis
### 摘要
> 机器学习（ML）技术在安全应用中越来越常见，例如恶意软件和入侵检测。然而，ML模型往往容易受到回避攻击的影响，即对输入（如恶意软件）进行更改以避免被检测。评估ML对这些攻击的稳健性以及设计稳健的ML的常规方法是考虑攻击的简化特征空间模型，其中攻击者直接更改ML特征以达到回避的效果，并且尽量减小或限制这种变化的程度。我们研究了这种方法在面对可以在实际恶意软件中实现的攻击（可实现攻击）时设计稳健ML的效果。我们证明，在基于结构的PDF恶意软件检测中，这些技术似乎具有有限的效果，但在基于内容的检测器中则有效。无论哪种情况，我们都展示了通过增加一些保留特征（即那些不能单方面修改而不破坏恶意功能的特征）来提高性能的作用。最后，我们证明了特征空间模型在面对各种可实现攻击时能够实现广义上的稳健性，相比于调整为对特定可实现攻击具有稳健性的分类器。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/tong](https://www.usenix.org/conference/usenixsecurity19/presentation/tong)
- **PDF:** [https://www.usenix.org/system/files/sec19-tong.pdf](https://www.usenix.org/system/files/sec19-tong.pdf)
## ALOHA: Auxiliary Loss Optimization for Hypothesis Augmentation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#aloha-auxiliary-loss-optimization-for-hypothesis-augmentation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#aloha-auxiliary-loss-optimization-for-hypothesis-augmentation)**
### 作者
* Ethan M. Rudd, Sophos
* Felipe N. Ducau, Sophos
* Cody Wild, Sophos
* Konstantin Berlin, Sophos
* Richard Harang, Sophos
### 摘要
> 恶意软件检测是机器学习在信息安全领域的一个常见应用（ML-Sec），其中机器学习分类器被训练用于预测给定文件是恶意软件还是良性软件。通常会通过优化分类器的参数来使其在一组输入样本上的输出最接近样本的真实恶意/良性（1/0）目标标签。然而，对于每个恶意软件样本，除了聚合的恶意/良性标签之外，通常还存在其他一些上下文元数据，包括多个标记源和恶意软件类型信息（例如勒索软件、木马等），我们可以将这些信息作为辅助预测目标提供给分类器。在这项研究中，我们将深度神经网络应用于来自威胁情报源的Portable Executable（PE）恶意软件和良性软件的多个附加目标，包括多源恶意/良性损失、多源检测次数损失和语义恶意软件属性标签损失。我们发现，引入多个辅助损失项显著提高了主要检测任务的性能。我们还证明，这些收益很可能源于更加明智的神经网络表示，而不是多目标学习的正则化效应。我们的辅助损失结构在误检率（假阴性）为10-3的情况下，与只有一个目标的类似模型相比，将误检率显著降低了42.6％，在10-5假阳性率下降低了53.8％。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/rudd](https://www.usenix.org/conference/usenixsecurity19/presentation/rudd)
- **PDF:** [https://www.usenix.org/system/files/sec19-rudd.pdf](https://www.usenix.org/system/files/sec19-rudd.pdf)
## Why Do Adversarial Attacks Transfer? Explaining Transferability of Evasion and Poisoning Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#why-do-adversarial-attacks-transfer-explaining-transferability-of-evasion-and-poisoning-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#why-do-adversarial-attacks-transfer-explaining-transferability-of-evasion-and-poisoning-attacks)**
### 作者
* Ambra Demontis, University of Cagliari, Italy
* Marco Melis, University of Cagliari, Italy
* Maura Pintor, University of Cagliari, Italy
* Matthew Jagielski, Northeastern University
* Battista Biggio, University of Cagliari, Italy, and Pluribus One
* Alina Oprea, Northeastern University
* Cristina Nita-Rotaru, Northeastern University
* Fabio Roli, University of Cagliari, Italy, and Pluribus One
### 摘要
> 迁移性捕捉了攻击针对机器学习模型在不同、可能未知的模型上的有效性。以往的研究中已经展示了攻击迁移的经验性证据，但攻击是否迁移的基本原因尚未被很好地理解。本文提出了一项全面的分析，旨在探究测试时规避攻击和训练时中毒攻击的迁移性。我们提供了一个统一的优化框架来处理规避攻击和中毒攻击，并给出了这些攻击的迁移性的形式化定义。我们强调了两个主要因素对攻击迁移性的影响：目标模型的固有对抗脆弱性，以及用于优化攻击的替代模型的复杂性。基于这些洞察，我们定义了三个影响攻击迁移性的度量标准。有趣的是，我们从理论分析中得出的结果适用于规避和中毒攻击，并通过使用广泛的线性和非线性分类器和数据集进行实验证实。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/demontis](https://www.usenix.org/conference/usenixsecurity19/presentation/demontis)
- **PDF:** [https://www.usenix.org/system/files/sec19-demontis.pdf](https://www.usenix.org/system/files/sec19-demontis.pdf)
## Stack Overflow Considered Helpful! Deep Learning Security Nudges Towards Stronger Cryptography.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#stack-overflow-considered-helpful-deep-learning-security-nudges-towards-stronger-cryptography) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#stack-overflow-considered-helpful-deep-learning-security-nudges-towards-stronger-cryptography)**
### 作者
* Felix Fischer, Technical University of Munich
* Huang Xiao, Bosch Center for Artificial Intelligence
* Ching-Yu Kao, Fraunhofer AISEC
* Yannick Stachelscheid, Technical University of Munich
* Benjamin Johnson, Technical University of Munich
* Danial Raza, Technical University of Munich
* Paul Fawkesley, Projects by IF
* Nat Buckley, Projects by IF
* Konstantin Böttinger, Fraunhofer AISEC
* Paul Muntean, Technical University of Munich
* Jens Grossklags, Technical University of Munich
### 摘要
> Stack Overflow是最受欢迎的软件开发者讨论平台。最近的研究发现，在生产系统中有大量不安全的加密代码，这些代码受到了在Stack Overflow上提供的示例的启发。通过复制和粘贴功能代码，开发者将可利用的软件漏洞引入到每天被数百万用户安装的安全敏感高知名度应用中。针对这个问题提出的缓解措施存在可用性缺陷，并促使开发者再次在Stack Overflow上寻找代码示例。这提示我们在它们甚至达到剪贴板之前直接对抗不安全代码的扩散。通过将Stack Overflow视为一个市场，实现密码学的应用成为一个决策问题:即如何简化有用且安全示例的选择。我们的重点是通过应用行为科学中借用的"助推"概念来帮助软件开发者做出更好的决策。这种方法是由我们的一个关键发现所驱动的:对于Stack Overflow上99.37%的不安全代码示例来说，存在类似的可供选择的替代方案，可以实现相同的用例并提供强大的密码学功能。我们的系统设计基于几个"助推"，由一个深度神经网络控制。它学习密码学API使用模式的表示和安全性分类，平均AUC-ROC达到0.992。通过用户研究，我们证明基于"助推"的安全建议显著有助于解决Android中最常见且容易出错的密码学用例。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/fischer](https://www.usenix.org/conference/usenixsecurity19/presentation/fischer)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_fischer_prepub.pdf](https://www.usenix.org/system/files/sec19fall_fischer_prepub.pdf)
## Wireless Attacks on Aircraft Instrument Landing Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#wireless-attacks-on-aircraft-instrument-landing-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#wireless-attacks-on-aircraft-instrument-landing-systems)**
### 作者
* Harshad Sathaye, Northeastern University
* Domien Schepers, Northeastern University
* Aanjhan Ranganathan, Northeastern University
* Guevara Noubir, Northeastern University
### 摘要
> 现代飞机在通信、控制和导航方面严重依赖几种无线技术。研究人员展示了许多航空系统的漏洞。然而，尽管低成本软件定义无线电（SDR）平台的可用性不断增加，飞机着陆系统对敌对无线攻击的弹性尚未在公开文献中进行研究，尽管这些系统至关重要。本文中，我们研究了飞机仪表着陆系统（ILS）对无线攻击的脆弱性。我们展示了使用商用SDR可以伪造ILS无线电信号的可行性，导致最后一刻的放弃决策，甚至在低能见度情况下错过着陆区域。我们在航空级别的ILS接收器上展示了能够实时完全和细粒度地控制ILS接收器显示的航向偏差指示器的可能性。我们分析了遮蔽攻击和较低功率单音攻击的潜力。为了评估完整的攻击，我们开发了一个严密可控的闭环ILS欺诈器，根据飞机GPS位置调整对手的发射信号，保持与对手目标位置一致的功率和偏差，导致无法被发现的跑道外着陆。我们系统评估了攻击对美国联邦航空局认证的飞行模拟器（X-Plane）的基于人工智能自动着陆功能的性能，并展示了偏移触地点18米至50米以上的系统成功率。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/sathaye](https://www.usenix.org/conference/usenixsecurity19/presentation/sathaye)
- **PDF:** [https://www.usenix.org/system/files/sec19-sathaye.pdf](https://www.usenix.org/system/files/sec19-sathaye.pdf)
## Please Pay Inside: Evaluating Bluetooth-based Detection of Gas Pump Skimmers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#please-pay-inside-evaluating-bluetooth-based-detection-of-gas-pump-skimmers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#please-pay-inside-evaluating-bluetooth-based-detection-of-gas-pump-skimmers)**
### 作者
* Nishant Bhaskar, University of California San Diego
* Maxwell Bl, University of California San Diego
* Kirill Levchenko, University of Illinois at Urbana-Champaign
* Aaron Schulman, University of California San Diego
### 摘要
> 加油站刷卡诈骗是当今美国最普遍的付款卡攻击形式之一。加油站刷卡诈骗装置安装简便，难以察觉：犯罪分子可以打开加油站设备外壳，在内部的支付线路中隐藏刷卡诈骗装置。因此，执法人员不得不对加油站内部的线路进行繁琐的人工检查来发现刷卡诈骗装置。此外，犯罪分子还可以通过刷卡诈骗装置来避免被抓获：许多刷卡诈骗装置具有蓝牙连接功能，使得犯罪分子可以在车内安全地收集支付数据。
> 
> 
> 
> 
> 
> 
> 
> 本研究旨在评估刷卡诈骗装置中蓝牙的使用是否也为执法人员提供了不需打开加油站设备即可检测到它们的机会。我们进行了一项大规模研究，在六个州的1,185个加油站收集了蓝牙扫描数据。我们总共发现了64个基于蓝牙的刷卡诈骗装置，它们分布在美国四个州，也都被执法部门收回。我们发现这些刷卡诈骗装置在加油站的蓝牙扫描中与合法设备明显不同。我们还观察到了加油站的刷卡诈骗的特点：这些诈骗装置可以在数月内安装而不被察觉，而且MAC地址可能会揭示安装或制造这些诈骗装置的犯罪组织。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/bhaskar](https://www.usenix.org/conference/usenixsecurity19/presentation/bhaskar)
- **PDF:** [https://www.usenix.org/system/files/sec19-bhaskar.pdf](https://www.usenix.org/system/files/sec19-bhaskar.pdf)
## CANvas: Fast and Inexpensive Automotive Network Mapping.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#canvas-fast-and-inexpensive-automotive-network-mapping) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#canvas-fast-and-inexpensive-automotive-network-mapping)**
### 作者
* Sekar Kul, Carnegie Mellon University
* aivel, Carnegie Mellon University
* Tushar Goyal, Carnegie Mellon University
* Arnav Kumar Agrawal, Carnegie Mellon University
* Vyas Sekar, Carnegie Mellon University
### 摘要
> 现代车辆配备了数十个电子控制单元（ECU），其中几个通过控制器局域网（CAN）协议进行通信。因此，车内网络已成为汽车网络攻击的首要目标。为了了解这些网络的安全性，我们认为我们需要类似于传统网络的网络映射工具，可以提供对网络结构深入了解的工具。为此，我们的目标是开发一种汽车网络映射工具，可以帮助识别车辆的ECU及其之间的通信。设计这个工具的一个重要挑战是CAN协议的广播特性，因为网络消息不包含有关发送者或接收者的任何信息。为了解决这个挑战，我们设计和实现了CANvas，一种汽车网络映射工具，使用一种配对时钟偏移跟踪算法识别传输ECU，并使用一种强制ECU隔离技术识别接收ECU。CANvas能够在一个小时内生成网络地图，可以识别2009年的丰田Prius中未知的ECU，并识别2017年的福特Focus中的宽松消息过滤器。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/kulandaivel](https://www.usenix.org/conference/usenixsecurity19/presentation/kulandaivel)
- **PDF:** [https://www.usenix.org/system/files/sec19-kulandaivel.pdf](https://www.usenix.org/system/files/sec19-kulandaivel.pdf)
## Losing the Car Keys: Wireless PHY-Layer Insecurity in EV Charging.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#losing-the-car-keys-wireless-phy-layer-insecurity-in-ev-charging) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#losing-the-car-keys-wireless-phy-layer-insecurity-in-ev-charging)**
### 作者
* Richard Baker, University of Oxford
* Ivan Martinovic, University of Oxford
### 摘要
> 电动汽车（EVs）的使用正在迅速增长，充电基础设施也在随之增加。随着充电器技术的新一代出现，处理更敏感的数据和进行更复杂的交互，充电电缆被用作通信通道。这个通道不仅用于充电控制，还将很快处理结算、车辆对电网的操作、互联网访问，并提供第三方应用的平台，与外界有公共接口。
> 
> 
> 
> 
> 
> 
> 
> 我们强调了对组合充电系统（CCS）物理层进行无线攻击的威胁，CCS是一种在全球许多地方部署并且被世界上十大汽车制造商中的七家公司使用的主要充电标准。我们表明，在电力线通信（PLC）使用的设计选择中，使该系统特别容易受到流行的电磁侧信道攻击。我们实施了用于PLC网络的首个无线窃听工具，并使用此工具观察了ISO 15118网络在CCS上的实现，在54个真实充电场景的测量活动中，使用了现代电动汽车和最先进的CCS充电器。我们发现非意外的无线通道足以在绝大多数情况下恢复消息，从相邻的停车位拦截的流量显示出91.8%的消息通过验证其CRC32校验和。
> 
> 
> 
> 
> 
> 
> 
> 通过分析恢复的流量，我们进一步发现了现有充电基础设施中存在的隐私和安全问题，包括明文MAC层流量恢复，公共场所缺乏TLS的普遍现象以及泄露私人信息，包括长期唯一标识符。尤其令人担忧的是，恢复的数据元素被用于授权现有充电实施中的计费。
> 
> 
> 
> 
> 
> 
> 
> 我们讨论了对已知的电磁窃听技术普遍易受攻击的影响，总结了对未来发展的教训，并提出了具体的改进措施，以减轻现有充电设备中的问题。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/baker](https://www.usenix.org/conference/usenixsecurity19/presentation/baker)
- **PDF:** [https://www.usenix.org/system/files/sec19-baker.pdf](https://www.usenix.org/system/files/sec19-baker.pdf)
## RVFuzzer: Finding Input Validation Bugs in Robotic Vehicles through Control-Guided Testing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#rvfuzzer-finding-input-validation-bugs-in-robotic-vehicles-through-control-guided-testing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#rvfuzzer-finding-input-validation-bugs-in-robotic-vehicles-through-control-guided-testing)**
### 作者
* Taegyu Kim, Purdue University
* Chung Hwan Kim, NEC Laboratories America
* Junghwan Rhee, NEC Laboratories America
* Fan Fei, Purdue University
* Zhan Tu, Purdue University
* Gregory Walkup, Purdue University
* Xiangyu Zhang, Purdue University
* Xinyan Deng, Purdue University
* Dongyan Xu, Purdue University
### 摘要
> 机器人车辆（RVs）在各种应用领域被广泛采用。尽管其部署不断增加，但RVs存在许多安全问题，限制了它们的广泛应用。本文针对RV控制程序中一种新型漏洞——输入验证漏洞进行研究，这类漏洞涉及对控制参数输入的缺失或不正确的验证检查。此类漏洞可以被利用以对RVs造成物理干扰，可能导致任务失败、车辆损坏或崩溃等后果。此外，利用此类漏洞进行攻击的痕迹非常微小：只需一条看似无害的地面控制命令，无需代码注入、控制流劫持或传感器欺骗。为了防止此类攻击，我们提出了RVFuzzer，一种通过控制引导的输入变异来查找RV控制程序中的输入验证漏洞的审查系统。RVFuzzer的关键洞察力是，RV控制模型是一种通用的理论模型，适用于广泛的RVs，可以为提高漏洞发现的准确性和效率提供有益的语义指导。具体而言，RVFuzzer包括一个控制不稳定性检测器，通过观察（模拟的）RV的物理运行来检测控制程序的不正常行为。此外，RVFuzzer通过利用控制不稳定性检测器的结果作为反馈，更有效地引导输入生成以查找输入验证漏洞。在对两个流行的RV控制程序进行RVFuzzer评估时，共发现了89个输入验证漏洞，其中87个是零日漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/kim](https://www.usenix.org/conference/usenixsecurity19/presentation/kim)
- **PDF:** [https://www.usenix.org/system/files/sec19-kim.pdf](https://www.usenix.org/system/files/sec19-kim.pdf)
## Seeing is Not Believing: Camouflage Attacks on Image Scaling Algorithms.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#seeing-is-not-believing-camouflage-attacks-on-image-scaling-algorithms) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#seeing-is-not-believing-camouflage-attacks-on-image-scaling-algorithms)**
### 作者
* Qixue Xiao, Department of Computer Science and Technology, Tsinghua University and 360 Security Research Labs
* Yufei Chen, School of Electronic and Information Engineering, Xi’an Jiaotong University and 360 Security Research Labs
* Chao Shen, School of Electronic and Information Engineering, Xi’an Jiaotong University
* Yu Chen, Department of Computer Science and Technology, Tsinghua University and Peng Cheng Laboratory
* Kang Li, Department of Computer Science, University of Georgia
### 摘要
> 图像缩放算法旨在保留缩放前后的视觉特征，广泛应用于众多视觉和图像处理应用中。本文介绍一种针对常见缩放算法的自动化攻击方法，即自动生成伪装图像，在缩放后其视觉语义发生剧烈变化。为了说明此类伪装攻击可能带来的威胁，我们选择了几个计算机视觉应用作为目标受害者，包括基于流行深度学习框架的多个图像分类应用，以及主流网络浏览器。实验结果表明，这种攻击可以导致缩放后产生不同的视觉结果，从而对这些受害者应用造成逃避或数据污染的影响。我们还提出了一种算法，可以成功攻击知名云端图像服务（如微软Azure、阿里云、百度和腾讯），即使云端隐藏了图像处理的详细信息（如确切的缩放算法和缩放尺寸参数），也能造成明显的误分类效果。为了防御此类攻击，本文建议从攻击预防到检测方面采取一些潜在的对策措施。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/xiao](https://www.usenix.org/conference/usenixsecurity19/presentation/xiao)
- **PDF:** [https://www.usenix.org/system/files/sec19-xiao.pdf](https://www.usenix.org/system/files/sec19-xiao.pdf)
## CT-GAN: Malicious Tampering of 3D Medical Imagery using Deep Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#ct-gan-malicious-tampering-of-3d-medical-imagery-using-deep-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#ct-gan-malicious-tampering-of-3d-medical-imagery-using-deep-learning)**
### 作者
* Yisroel Mirsky, Ben-Gurion University
* Tom Mahler, Ben-Gurion University
* Ilan Shelef, Soroka University Medical Center
* Yuval Elovici, Ben-Gurion University
### 摘要
> 在2018年，诊所和医院遭受了多次攻击，导致重大数据泄露和医疗服务中断。拥有医疗记录访问权限的攻击者可以做更多的事情，而不仅仅是勒索数据或在黑市上出售。在这篇论文中，我们展示了一个攻击者如何利用深度学习从体积（3D）医学扫描中添加或删除医疗状况的证据。攻击者可能执行这一行为来阻止一个政治候选人，破坏研究，进行保险欺诈，实施恐怖主义行为，甚至犯下谋杀。我们使用一个3D条件GAN实现了这个攻击，并展示了框架（CT-GAN）如何进行自动化。尽管人体结构复杂且3D医学扫描非常庞大，CT-GAN能够在毫秒内实现逼真的结果。为了评估这种攻击，我们专注于向CT扫描中注入和删除肺癌。我们展示了三名专业放射科医生和一种先进的深度学习AI对这种攻击非常容易受到影响。我们还探索了现代放射科网络的攻击面，并展示了一个攻击向量：我们在一个活动的医院网络中截取和操纵了CT扫描。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/mirsky](https://www.usenix.org/conference/usenixsecurity19/presentation/mirsky)
- **PDF:** [https://www.usenix.org/system/files/sec19-mirsky_0.pdf](https://www.usenix.org/system/files/sec19-mirsky_0.pdf)
## Misleading Authorship Attribution of Source Code using Adversarial Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#misleading-authorship-attribution-of-source-code-using-adversarial-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#misleading-authorship-attribution-of-source-code-using-adversarial-learning)**
### 作者
* Erwin Quiring, TU Braunschweig
* Alwin Maier, TU Braunschweig
* Konrad Rieck, TU Braunschweig
### 摘要
> 在本文中，我们提出了一种针对源代码作者归属的新型攻击。我们利用最近的归属方法依赖于机器学习，因此可以被源代码的对抗性示例所欺骗。我们的攻击执行一系列保持语义的代码转换，这些转换可以误导基于学习的归属，但对开发者来说看起来是合理的。这种攻击是由蒙特卡洛树搜索指导的，使我们能够在源代码的离散领域中操作。在对来自204位程序员的源代码进行实证评估时，我们证明我们的攻击对两种最近的归属方法有显著影响，其准确度从超过88%降至1%。此外，我们展示了我们的攻击可以以高准确度模仿开发者的编码风格，从而引发错误的归属。我们得出结论，当前的作者归属方法不适用于实际应用，需要具有弹性的分析技术。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/quiring](https://www.usenix.org/conference/usenixsecurity19/presentation/quiring)
- **PDF:** [https://www.usenix.org/system/files/sec19-quiring.pdf](https://www.usenix.org/system/files/sec19-quiring.pdf)
## Terminal Brain Damage: Exposing the Graceless Degradation in Deep Neural Networks Under Hardware Fault Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#terminal-brain-damage-exposing-the-graceless-degradation-in-deep-neural-networks-under-hardware-fault-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#terminal-brain-damage-exposing-the-graceless-degradation-in-deep-neural-networks-under-hardware-fault-attacks)**
### 作者
* Sanghyun Hong, University of Maryland College Park
* Pietro Frigo, Vrije Universiteit Amsterdam
* Yiğitcan Kaya, University of Maryland College Park
* Cristiano Giuffrida, Vrije Universiteit Amsterdam
* Tudor Dumitraș, University of Maryland College Park
### 摘要
> 深度神经网络（DNN）被证明具有“抵抗脑损伤”的能力：对网络参数的累积变化（例如修剪、数值扰动）通常会导致分类准确性的优雅降低。然而，在存在对DNN参数底层内存表示的小型对抗性变化（例如由硬件故障攻击引起的位翻转）时，这种自然的韧性的上限尚未被很好地理解。我们研究了对19个DNN模型（三个图像分类任务上的六种体系结构）的逐位破坏效果，结果显示大多数模型都至少有一个参数，在其位表示中发生特定位翻转后，会导致超过90%的准确性损失。对于大型模型，我们采用简单的启发式方法来确定可能容易受到攻击的参数，并估计在单个位扰动时，模型中可能有40-50%的参数会导致准确性下降超过10%。为了展示对手如何利用这种弱点，我们研究了一个典型的硬件故障攻击——Rowhammer对DNN的影响。具体来说，我们表明即使进行了单个位破坏并且没有模型知识，同一物理机上的Rowhammer启用的攻击者可以造成显著的准确性下降（高达99%）。我们的结果揭示了DNN对现实世界故障攻击引起的参数扰动的韧性的局限性。我们最后讨论了可能的缓解措施和未来研究方向，以实现对故障攻击有抵抗力的DNNs。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/hong](https://www.usenix.org/conference/usenixsecurity19/presentation/hong)
- **PDF:** [https://www.usenix.org/system/files/sec19-hong.pdf](https://www.usenix.org/system/files/sec19-hong.pdf)
## CSI NN: Reverse Engineering of Neural Network Architectures Through Electromagnetic Side Channel.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#csi-nn-reverse-engineering-of-neural-network-architectures-through-electromagnetic-side-channel) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#csi-nn-reverse-engineering-of-neural-network-architectures-through-electromagnetic-side-channel)**
### 作者
* Lejla Batina, Radboud University, The Netherlands
* Shivam Bhasin, Nanyang Technological University, Singapore
* Dirmanto Jap, Nanyang Technological University, Singapore
* Stjepan Picek, Delft University of Technology, The Netherlands
### 摘要
> 机器学习已经成为各行各业的主流技术。众多实例证明了在安全应用中其有效性。本研究探讨了如何利用侧信道信息（如时间和电磁辐射）来逆向工程神经网络。为此，我们选择了多层感知器和卷积神经网络作为机器学习结构，并假设攻击者是非侵入性和被动的，能够测量此类泄漏。我们在真实数据和常用神经网络结构上进行所有实验，以便正确评估这些攻击的适用性和可扩展性。我们在ARM Cortex-M3微控制器上展示了具体实验结果，该平台通常用于使用神经网络的普适应用，如可穿戴设备、监控摄像头等。我们的实验结果表明，侧信道攻击者能够获取以下信息：体系结构中使用的激活函数、层的数量和每层的神经元数量、输出类别的数量以及神经网络中的权重。因此，攻击者只需利用时间或电磁等侧信道信息就能有效地逆向工程出网络。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/batina](https://www.usenix.org/conference/usenixsecurity19/presentation/batina)
- **PDF:** [https://www.usenix.org/system/files/sec19-batina.pdf](https://www.usenix.org/system/files/sec19-batina.pdf)
## simTPM: User-centric TPM for Mobile Devices.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#simtpm-user-centric-tpm-for-mobile-devices) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#simtpm-user-centric-tpm-for-mobile-devices)**
### 作者
* Dhiman Chakraborty, CISPA Helmholtz Center for Information Security, Saarland University
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security, Stanford University
* Sven Bugiel, CISPA Helmholtz Center for Information Security
### 摘要
> 可信平台模块（TPM）是安全解决方案中有价值的构建块，并且也被认为在移动平台上（如智能手机和平板电脑）具有安全性的好处。然而，移动设备的严格空间、成本和功耗限制阻止了将其作为专用的板载芯片来实现，现有实现是通过受信任的执行环境保护的软件TPM。在本文中，我们提出了一种基于移动平台上可用的SIM卡的移动TPM的替代实现，称为simTPM。我们解决了在资源受限的SIM卡环境中实现TPM2.0的技术挑战，并将我们的simTPM集成到HiKey960参考板上的ARM可信固件的安全引导链中。值得注意的是，我们解决了可移动TPM如何绑定到主机设备的可信度量根的挑战。因此，我们的解决方案不仅提供了一个避免使用额外硬件但使用专用受保护环境的移动TPM，而且与现有的基于TEE的TPM具有潜在的协同效应。特别是，simTPM提供了一个以用户为中心的可信模块。通过性能基准测试，我们展示了我们的simTPM与报告的基于TEE的TPM和硬件TPM具有竞争速度。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/chakraborty](https://www.usenix.org/conference/usenixsecurity19/presentation/chakraborty)
- **PDF:** [https://www.usenix.org/system/files/sec19-chakraborty.pdf](https://www.usenix.org/system/files/sec19-chakraborty.pdf)
## The Betrayal At Cloud City: An Empirical Analysis Of Cloud-Based Mobile Backends.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-betrayal-at-cloud-city-an-empirical-analysis-of-cloud-based-mobile-backends) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-betrayal-at-cloud-city-an-empirical-analysis-of-cloud-based-mobile-backends)**
### 作者
* Omar Alrawi, Georgia Institute of Technology
* Chaoshun Zuo, Ohio State University
* Ruian Duan, Georgia Institute of Technology
* Ranjita Pai Kasturi, Georgia Institute of Technology
* Zhiqiang Lin, Ohio State University
* Brendan Saltaformaggio, Georgia Institute of Technology
### 摘要
> 云后端为移动应用生态系统提供了必不可少的功能，如内容传输、广告网络、分析等。不幸的是，应用程序开发人员在选择或管理这些服务时往往忽视或无法控制明智的安全实践。我们对前5000个谷歌Play商店免费应用程序进行的初步研究发现，在云后端的软件层（操作系统、软件服务、通信和网络应用程序）中，存在983个N-day漏洞实例和655个0-day漏洞实例。使用这些云后端的移动应用程序每个都代表着100万到5亿的安装量，并可能影响数以十万计的用户。此外，由于第三方SDK的广泛使用，应用程序开发人员通常不知道哪些后端影响了他们的应用程序，也不知道如何报告漏洞。本文介绍了SkyWalker，这是一个用于自动审查移动应用程序联系的后端并提供可操作的修复方法的流程。针对输入的APK，SkyWalker提取后端网址的枚举，使用远程审查技术识别软件漏洞和责任方，并向应用程序开发人员报告缓解策略。我们的研究结果表明，开发人员和云服务提供商对于移动应用程序后端的责任和责任承担没有清晰的理解，这导致许多漏洞暴露。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/alrawi](https://www.usenix.org/conference/usenixsecurity19/presentation/alrawi)
- **PDF:** [https://www.usenix.org/system/files/sec19-alrawi_0.pdf](https://www.usenix.org/system/files/sec19-alrawi_0.pdf)
## EnTrust: Regulating Sensor Access by Cooperating Programs via Delegation Graphs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#entrust-regulating-sensor-access-by-cooperating-programs-via-delegation-graphs) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#entrust-regulating-sensor-access-by-cooperating-programs-via-delegation-graphs)**
### 作者
* Giuseppe Petracca, Pennsylvania State University, US
* Yuqiong Sun, Symantec Research Labs, US
* Ahmad-Atamli Reineh, Alan Turing Institute, UK
* Patrick McDaniel, Pennsylvania State University, US
* Jens Grossklags, Technical University of Munich, DE
* Trent Jaeger, Pennsylvania State University, US
### 摘要
> 现代操作系统支持一个合作程序的抽象，它可以让不同的程序相互合作，以完成用户请求的任务，而不是将所有的功能都放在一个单一的程序中。然而，不受信任的程序可能会利用这种交互来通过引起特权系统服务滥用权限来监视用户，或者无意中将用户请求转发给恶意程序。研究人员之前已经探索了基于引发用户输入的用户界面状态或合作程序集的方法来限制对设备传感器的访问，但前一种方法不考虑合作程序，后一种方法被发现对许多情况过于限制。在本文中，我们提出了EnTrust，一种授权系统，用于跟踪跨程序处理输入事件，以从用户那里获得对传感器操作的授权。EnTrust通过将输入事件与导致传感器操作请求的程序之间的合作事件连接起来构建委托图，然后使用这些委托图来从用户那里获得授权决策。为了展示这种方法，我们为Android操作系统实现了EnTrust授权系统。在实验室研究中，我们表明与首次使用方法相比，攻击可以以较高的速率（47-67%的改进）被阻止。我们的现场研究表明，EnTrust只需要与首次使用方法相当的用户努力，同时带来可忽略的性能（<1%的减速）和内存开销（每个程序5.5 KB）。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/petracca](https://www.usenix.org/conference/usenixsecurity19/presentation/petracca)
- **PDF:** [https://www.usenix.org/system/files/sec19-petracca.pdf](https://www.usenix.org/system/files/sec19-petracca.pdf)
## PolicyLint: Investigating Internal Privacy Policy Contradictions on Google Play.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#policylint-investigating-internal-privacy-policy-contradictions-on-google-play) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#policylint-investigating-internal-privacy-policy-contradictions-on-google-play)**
### 作者
* Benjamin Andow, North Carolina State University
* Samin Yaseer Mahmud, North Carolina State University
* Wenyu Wang, University of Illinois at Urbana-Champaign
* Justin Whitaker, North Carolina State University
* William Enck, North Carolina State University
* Bradley Reaves, North Carolina State University
* Kapil Singh, IBM T.J. Watson Research Center
* Tao Xie, University of Illinois at Urbana-Champaign
### 摘要
> 隐私政策是公司向用户介绍数据收集和共享实践的主要机制。为了帮助用户更好地理解这些长而复杂的法律文件，最近的研究提出了总结收集和共享的工具。然而，这些工具存在一个重大疏漏：它们没有考虑到个别政策中可能发生的矛盾。在本论文中，我们提出了PolicyLint，一种隐私政策分析工具，通过同时考虑否定和数据对象和实体的不同语义层次来识别这种矛盾。为此，PolicyLint从大量的隐私政策语料库自动生成本体，并使用句子级自然语言处理来捕捉数据收集和共享的积极和消极陈述。我们使用PolicyLint分析了11,430个应用程序的政策，并发现其中14.2%的政策存在可能会引起误导的矛盾。我们手动验证了510个矛盾，并发现了令人担忧的趋势，包括使用误导性的陈述方式、试图重新定义常见术语的含义、监管定义的冲突（例如，美国和欧盟）以及通过共享或收集可以用于推断敏感信息的数据来“洗涤”跟踪信息。通过这样做，PolicyLint显著推进了隐私政策的自动化分析。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/andow](https://www.usenix.org/conference/usenixsecurity19/presentation/andow)
- **PDF:** [https://www.usenix.org/system/files/sec19-andow.pdf](https://www.usenix.org/system/files/sec19-andow.pdf)
## 50 Ways to Leak Your Data: An Exploration of Apps' Circumvention of the Android Permissions System.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#50-ways-to-leak-your-data-an-exploration-of-apps-circumvention-of-the-android-permissions-system) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#50-ways-to-leak-your-data-an-exploration-of-apps-circumvention-of-the-android-permissions-system)**
### 作者
* Joel Reardon, University of Calgary / AppCensus Inc.
* Álvaro Feal, IMDEA Networks Institute / Universidad Carlos III Madrid
* Primal Wijesekera, U.C. Berkeley / ICSI
* Amit Elazari Bar On, U.C. Berkeley
* Narseo Vallina-Rodriguez, IMDEA Networks Institute / ICSI / AppCensus Inc.
* Serge Egelman, U.C. Berkeley / ICSI / AppCensus Inc.
### 摘要
> 现代智能手机平台实施了基于权限的模型，以保护对敏感数据和系统资源的访问。然而，应用程序可以绕过权限模型，并使用隐蔽通道和边渠道获取对受保护数据的访问权限，而不需要用户同意。权限系统中存在的边渠道允许应用程序在未经许可的情况下访问受保护的数据和系统资源；而隐蔽通道则使得两个勾结的应用程序之间可以进行通信，以便一个应用程序可以与另一个没有该权限的应用程序共享其受权限保护的数据。这两者都对用户的隐私构成威胁。
> 
> 
> 
> 
> 
> 
> 
> 在本研究中，我们利用我们的基础设施，在经过仪器化处理的环境中运行数十万个应用程序。这个测试环境包括监控应用程序运行时行为和网络流量的机制。我们寻找实际中使用的边渠道和隐蔽通道的证据，方法是搜索通过网络传输的敏感数据，发送方应用程序没有访问权限。然后，我们对这种行为负责的应用程序和第三方库进行逆向工程，以确定未经授权的访问是如何发生的。我们还使用软件指纹识别方法来测量我们发现的技术在我们的样本中其他应用程序中的静态普遍性。
> 
> 
> 
> 
> 
> 
> 
> 使用这个测试环境和方法，我们发现了数百个热门应用程序和第三方SDK正在活动中使用的边渠道和隐蔽通道，以非法手段获取唯一标识符和地理位置数据的访问权限。我们已经将我们的发现负责任地向谷歌披露，并获得了我们工作的漏洞奖励。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/reardon](https://www.usenix.org/conference/usenixsecurity19/presentation/reardon)
- **PDF:** [https://www.usenix.org/system/files/sec19-reardon.pdf](https://www.usenix.org/system/files/sec19-reardon.pdf)
## SPOILER: Speculative Load Hazards Boost Rowhammer and Cache Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#spoiler-speculative-load-hazards-boost-rowhammer-and-cache-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#spoiler-speculative-load-hazards-boost-rowhammer-and-cache-attacks)**
### 作者
* Saad Islam, Worcester Polytechnic Institute
* Ahmad Moghimi, Worcester Polytechnic Institute
* Ida Bruhns, University of Luebeck
* Moritz Krebbel, University of Luebeck
* Berk Gulmezoglu, Worcester Polytechnic Institute
* Thomas Eisenbarth, Worcester Polytechnic Institute and University of Luebeck
* Berk Sunar, Worcester Polytechnic Institute
### 摘要
> 现代微架构采用优化技术，如推测加载和存储转发，以改善内存瓶颈。处理器在执行存储之前推测执行加载，并在存在潜在依赖关系时将之前存储的数据传递给加载。这提高了性能，因为加载不需要等待之前的存储完成。然而，依赖预测依赖于部分地址信息，可能导致错误的依赖关系和停顿风险。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们首次展示了为服务于推测加载的依赖解析逻辑可以被利用来获得有关物理页面映射的信息。基于微体系结构的侧信道攻击，如Rowhammer和Prime+Probe攻击，依赖于虚拟地址到物理地址映射的逆向工程。我们提出了SPOILER攻击，利用这种泄露情况来加速逆向工程，速度提高了256倍。然后，我们展示了如何通过SPOILER攻击改进Prime+Probe攻击，将驱逐集搜索的速度提高4096倍，即使在像JavaScript这样的沙盒环境中也可以。最后，我们通过展示SPOILER如何帮助以确定性的方式进行DRAM行冲突，并展示了具有普通用户特权的双面Rowhammer攻击，改进了Rowhammer攻击。后者是由于使用SPOILER泄漏来检测连续内存页面的可能性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/islam](https://www.usenix.org/conference/usenixsecurity19/presentation/islam)
- **PDF:** [https://www.usenix.org/system/files/sec19-islam.pdf](https://www.usenix.org/system/files/sec19-islam.pdf)
## Robust Website Fingerprinting Through the Cache Occupancy Channel.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#robust-website-fingerprinting-through-the-cache-occupancy-channel) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#robust-website-fingerprinting-through-the-cache-occupancy-channel)**
### 作者
* Anatoly Shusterman, Ben-Gurion University of the Negev
* Lachlan Kang, University of Adelaide
* Yarden Haskal, Ben-Gurion University of the Negev
* Yosef Meltser, Ben-Gurion University of the Negev
* Prateek Mittal, Princeton University
* Yossi Oren, Ben-Gurion University of the Negev
* Yuval Yarom, University of Adelaide and Data61
### 摘要
> 网站指纹识别攻击利用对网络流量的统计分析来危害用户的隐私，在匿名保护网络（如Tor）上发送的流量也被证明是有效的。用于评估网站指纹识别攻击的经典攻击模型假设存在一种路径上的对手，可以观察用户计算机和安全网络之间传输的所有流量。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们研究了一种不同的攻击模型下的这些攻击，该模型假设攻击者能够向目标用户的计算机发送少量恶意JavaScript代码。恶意代码实施了一种缓存侧信道攻击，利用CPU缓存上的争用效应来识别其他正在浏览的网站。这种攻击场景的有效性从未系统地进行过分析，尤其是在开放世界模型中，该模型假设用户访问的是包含敏感和非敏感网站的混合。
> 
> 
> 
> 
> 
> 
> 
> 我们表明JavaScript中的缓存网站指纹识别攻击非常可行。具体而言，我们使用机器学习技术对缓存活动的轨迹进行分类。与之前的工作不同，我们的工作不尝试识别缓存冲突，而是测量最后级缓存的整体占用情况。我们展示了我们的方法在开放世界和封闭世界模型中实现了高分类准确率。我们进一步表明，我们的攻击比基于网络的指纹识别更能抵抗响应缓存的影响，并且我们的技术对基于网络的防御和作为对Spectre攻击的响应引入的侧信道对策也具有弹性。为了防止基于缓存的网站指纹识别，必须为注重隐私的浏览器和网站引入新的防御机制。我们研究了一种这样的机制，并表明生成人工缓存活动可以降低攻击的有效性，并在Tor浏览器中完全消除该攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/shusterman](https://www.usenix.org/conference/usenixsecurity19/presentation/shusterman)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_shusterman_prepub.pdf](https://www.usenix.org/system/files/sec19fall_shusterman_prepub.pdf)
## Identifying Cache-Based Side Channels through Secret-Augmented Abstract Interpretation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#identifying-cache-based-side-channels-through-secret-augmented-abstract-interpretation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#identifying-cache-based-side-channels-through-secret-augmented-abstract-interpretation)**
### 作者
* Shuai Wang, HKUST
* Yuyan Bao, Penn State University
* Xiao Liu, Penn State University
* Pei Wang, Baidu X-Lab
* Danfeng Zhang, Penn State University
* Dinghao Wu, Penn State University
### 摘要
> 基于缓存的侧信道攻击能够通过测量缓存访问模式来泄露程序的秘密。已经展示了针对RSA、AES和ElGamal等实际密码算法实现的实际攻击。到目前为止，无论是静态还是动态方式，由于缓存侧信道导致的信息泄露仍然是一个挑战：现有方法不能同时提供高精度、完全覆盖和良好的可扩展性，因此阻碍了它们在现实场景中的实际应用。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了一种新颖的二进制静态分析方法，用于检测基于缓存的侧信道。我们使用抽象解释来推理程序状态与每个程序点处的抽象值之间的关系。为了使这种抽象解释适用于实际密码系统，并同时提供高精度和完全覆盖，我们提出了一种新颖的抽象域，称为增强秘密符号域（SAS）。SAS追踪程序的秘密和对它们的依赖以提高精度，同时仅追踪粗粒度的公共信息以提高可扩展性。
> 
> 
> 
> 
> 
> 
> 
> 我们已将所提出的技术实现为一个名为CacheS的实用工具，并在实际密码库中使用广泛的密码算法的实现，包括Libgcrypt、OpenSSL和mbedTLS上进行了评估。CacheS成功确认了先前研究报告的154个信息泄露以及54个先前未知的泄露。我们已向开发人员报告了我们的发现。他们确认了其中许多未知信息泄露可能导致潜在的侧信道。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/wang-shuai](https://www.usenix.org/conference/usenixsecurity19/presentation/wang-shuai)
- **PDF:** [https://www.usenix.org/system/files/sec19-wang-shuai.pdf](https://www.usenix.org/system/files/sec19-wang-shuai.pdf)
## ScatterCache: Thwarting Cache Attacks via Cache Set Randomization.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#scattercache-thwarting-cache-attacks-via-cache-set-randomization) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#scattercache-thwarting-cache-attacks-via-cache-set-randomization)**
### 作者
* Mario Werner, Graz University of Technology
* Thomas Unterluggauer, Graz University of Technology
* Lukas Giner, Graz University of Technology
* Michael Schwarz, Graz University of Technology
* Daniel Gruss, Graz University of Technology
* Stefan Mangard, Graz University of Technology
### 摘要
> 缓存侧信道攻击可以作为攻击的组成部分，即使在没有软件漏洞的情况下也可以泄露机密信息。目前，还没有实际可行且性能开销和安全保证可接受的通用缓解措施。潜在问题在于缓存以可预测的方式在安全域之间共享。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们消除了这个问题。我们提出了一种新颖的缓存设计ScatterCache，用于防止缓存攻击。ScatterCache消除了固定的缓存集合同余，并且使基于逐出的缓存攻击变得不切实际。为此，ScatterCache使用一个带密钥的映射函数来改造偏斜关联缓存，得到一个安全域相关的缓存映射。因此，几乎不可能找到完全重叠的缓存集合，使得当前的基于逐出的攻击不可行。即使是理论上的统计攻击也变得不切实际，因为攻击者无法将争用限制在选定的缓存集合中。因此，攻击者必须诉诸于逐出整个缓存，使得对缓存集合或者行的推断变得不可能，并完全防止高频攻击。我们的安全分析表明，即使在最强的攻击者模型（无噪声）中，使用16384行的8路ScatterCache构建可靠的Prime+Probe逐出集合需要观察至少3350万个受害内存访问，而在通用缓存中只需要观察不到103次。ScatterCache需要硬件和软件的改变，但对软件层面的侵入最小，并且与遗留软件完全兼容，同时提高了安全级别。最后，我们的评估结果表明，软件的运行性能没有受到影响，我们的设计甚至在某些实际工作负载下超过了现有缓存技术。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/werner](https://www.usenix.org/conference/usenixsecurity19/presentation/werner)
- **PDF:** [https://www.usenix.org/system/files/sec19-werner.pdf](https://www.usenix.org/system/files/sec19-werner.pdf)
## Pythia: Remote Oracles for the Masses.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#pythia-remote-oracles-for-the-masses) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#pythia-remote-oracles-for-the-masses)**
### 作者
* Shin-Yeh Tsai, Purdue University
* Mathias Payer, EPFL and (on leave from) Purdue
* Yiying Zhang, Purdue University
### 摘要
> 远程直接内存访问（RDMA）是一种技术，允许网络直接访问计算机的主内存，而无需CPU的参与。RDMA提供低延迟、高带宽性能和低CPU利用率。尽管RDMA提供了巨大的性能提升，并且已被几家主要云服务提供商采用，但安全问题迄今为止一直被忽视。
> 
> 
> 
> 
> 
> 
> 
> RDMA网卡需要绕过CPU直接访问内存，结果是它们在其内部SRAM中存储各种元数据，如页表项。当SRAM已满时，RNIC通过PCIe总线将元数据交换到主内存。我们利用由此产生的时序差异来建立侧信道，并证明这些侧信道可以将受害节点的访问模式泄露给其他节点。
> 
> 
> 
> 
> 
> 
> 
> 我们设计了Pythia，一组基于RDMA的远程侧信道攻击，允许一个客户端上的攻击者了解其他客户端上的受害者如何访问作为内存数据服务导出的服务器数据。我们对最广泛使用的RDMA网卡的内存架构进行了逆向工程，并利用这些知识提高了Pythia的效率。我们进一步扩展Pythia，以构建对Crail的侧信道攻击，Crail是一个真实的基于RDMA的键值存储应用程序。我们在实验室和公共云环境中对四种不同的RDMA网卡进行了Pythia的评估。Pythia速度快（57微秒），准确率高（97%准确度），并且可以将其所有迹象隐藏起来，不被受害者或服务器察觉。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/tsai](https://www.usenix.org/conference/usenixsecurity19/presentation/tsai)
- **PDF:** [https://www.usenix.org/system/files/sec19-tsai.pdf](https://www.usenix.org/system/files/sec19-tsai.pdf)
## HideMyApp: Hiding the Presence of Sensitive Apps on Android.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#hidemyapp-hiding-the-presence-of-sensitive-apps-on-android) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#hidemyapp-hiding-the-presence-of-sensitive-apps-on-android)**
### 作者
* Anh Pham, ABB Corporate Research
* Italo Dacosta, EPFL
* Eleonora Losiouk, University of Padova
* John Stephan, EPFL
* Kévin Huguenin, University of Lausanne
* Jean-Pierre Hubaux, EPFL
### 摘要
> 数百万用户依赖移动健康（mHealth）应用程序来管理他们的健康和疾病状况。尽管此类应用程序的流行度不断增长，但一些隐私和安全挑战可能会影响它们的潜力。特别是，一个简单的事实就是mHealth应用程序安装在用户的手机上，可能会透露用户健康方面的敏感信息。由于Android的开放设计，任何应用程序，即使没有权限，也可以轻松检查特定应用程序的存在或收集手机上安装的全部应用程序列表。我们的分析显示，Android应用程序暴露了大量的元数据，从而方便进行指纹识别。许多第三方对此类信息感兴趣：我们在Google Play商店对2917个热门应用程序进行的调查显示，约有57%的这些应用程序明确查询已安装的应用程序列表。因此，我们设计并实施了HideMyApp（HMA），这是一种有效且实用的解决方案，可以隐藏敏感应用程序的存在，使其对其他应用程序不可见。HMA不需要对Android操作系统或应用程序进行任何更改，但仍支持其关键功能。通过使用包括免费和付费mHealth应用程序在内的多样的数据集，我们的实验评估显示，HMA支持大多数应用程序的主要功能，并在运行时引入可接受的开销（即几毫秒）；这些发现得到了我们的用户研究（N = 30）的验证。简而言之，我们表明收集已安装应用程序的信息的做法是普遍存在的，而我们的解决方案HMA提供了对此威胁的强大保护。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/pham](https://www.usenix.org/conference/usenixsecurity19/presentation/pham)
- **PDF:** [https://www.usenix.org/system/files/sec19-pham.pdf](https://www.usenix.org/system/files/sec19-pham.pdf)
## TESSERACT: Eliminating Experimental Bias in Malware Classification across Space and Time.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#tesseract-eliminating-experimental-bias-in-malware-classification-across-space-and-time) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#tesseract-eliminating-experimental-bias-in-malware-classification-across-space-and-time)**
### 作者
* Feargus Pendlebury, King's College London & Royal Holloway, University of London
* Fabio Pierazzi, King's College London & Royal Holloway, University of London
* Roberto Jordaney, King's College London & Royal Holloway, University of London
* Johannes Kinder, Bundeswehr University Munich
* Lorenzo Cavallaro, King's College London
### 摘要
> 安卓恶意软件分类问题已经解决了吗？发布的F1得分高达0.99，似乎几乎没有改进的空间。在这篇论文中，我们认为结果普遍被两个普遍存在的实验偏差来源所夸大：“空间偏差”是由于训练和测试数据的分布不代表实际部署的真实情况，以及“时间偏差”是由于错误的时间切割导致训练和测试集的不可能配置。我们提出了一组空间和时间约束的实验设计，消除了这两个偏差来源。我们引入了一个新的度量标准，总结了分类器在实际环境中的预期鲁棒性，并提出了一个调整性能的算法。最后，我们演示了如何使用这个方法评估时间衰减的缓解策略，比如主动学习。我们在一个名为TESSERACT的开源评估框架中实现了我们的解决方案，该框架允许在实际情境中比较恶意软件分类器。我们使用TESSERACT在一个跨三年的包含12.9万个应用程序的数据集上评估了文献中的三个安卓恶意软件分类器。我们的评估证实了之前的结果存在偏差，同时揭示了一些令人意想不到的性能表现，并显示适当的调整可以带来显著的改进。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/pendlebury](https://www.usenix.org/conference/usenixsecurity19/presentation/pendlebury)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_pendlebury_prepub.pdf](https://www.usenix.org/system/files/sec19fall_pendlebury_prepub.pdf)
## Devils in the Guidance: Predicting Logic Vulnerabilities in Payment Syndication Services through Automated Documentation Analysis.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#devils-in-the-guidance-predicting-logic-vulnerabilities-in-payment-syndication-services-through-automated-documentation-analysis) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#devils-in-the-guidance-predicting-logic-vulnerabilities-in-payment-syndication-services-through-automated-documentation-analysis)**
### 作者
* Yi Chen, Institute of Information Engineering, CAS
* Luyi Xing, Indiana University Bloomington
* Yue Qin, Indiana University Bloomington
* Xiaojing Liao, Indiana University Bloomington
* XiaoFeng Wang, Indiana University Bloomington
* Kai Chen, Institute of Information Engineering, CAS
* Wei Zou, Institute of Information Engineering, CAS
### 摘要
> 寻找逻辑漏洞目前依赖于利用程序文档中报告的功能信息的程序分析。然而，我们的研究显示，仅文档本身可能已经包含了预测一些逻辑漏洞存在的信息，甚至在代码分析之前。我们在这个方向上的第一步是关注新兴的聚合服务，这些服务可以将多个支付服务（例如支付宝、微信支付、PayPal等）集成到商家系统中。我们研究了聚合服务是否会导致某些安全要求（例如对付款进行检查以防止价格欺诈）因为在聚合过程中丢失了某些关键参数的可见性而无法执行，或者当需要进行安全检查时开发人员未能及时沟通而导致实现错误。为了达到这个目的，我们开发了一套自然语言处理技术，能够自动检查聚合开发者指南，基于支付服务的付款模型和安全要求。我们的方法在从指南中识别这些潜在问题方面被发现是有效的，并发现了在中国流行的商家系统中可以导致支付绕过的5个新的安全关键缺陷。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/chen-yi](https://www.usenix.org/conference/usenixsecurity19/presentation/chen-yi)
- **PDF:** [https://www.usenix.org/system/files/sec19-chen-yi.pdf](https://www.usenix.org/system/files/sec19-chen-yi.pdf)
## Understanding iOS-based Crowdturfing Through Hidden UI Analysis.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#understanding-ios-based-crowdturfing-through-hidden-ui-analysis) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#understanding-ios-based-crowdturfing-through-hidden-ui-analysis)**
### 作者
* Yeonjoon Lee, Indiana University
* Xueqiang Wang, Indiana University
* Kwangwuk Lee, Indiana University
* Xiaojing Liao, Indiana University
* XiaoFeng Wang, Indiana University
* Tongxin Li, Peking University
* Xianghang Mi, Indiana University
### 摘要
> 一种新型的恶意众包（也称为crowdturfing）客户端，即具有隐藏crowdturfing用户界面（UI）的移动应用程序，正日益被不良分子利用来协调众包工作者并发布基于移动设备的crowdturfing任务（例如应用程序排名操控），甚至在严格控制的苹果App Store上。这些应用程序在无辜的外观UI后隐藏其crowdturfing内容，以绕过应用审核并渗入应用商店。据我们所知，迄今为止，几乎没有人对这种新型滥用服务的范围、影响和技术进行研究，更不用说大规模识别这些隐蔽的crowdturfing应用程序，特别是在苹果平台上。在本文中，我们报告了对隐藏crowdturfing UI的iOS应用程序的第一项测量研究。我们的发现揭示了基于移动设备的crowdturfing生态系统（例如用于招募工作者的应用推广，活动识别）和地下开发人员的技巧（例如方案、逻辑炸弹），以逃避应用审核。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/lee](https://www.usenix.org/conference/usenixsecurity19/presentation/lee)
- **PDF:** [https://www.usenix.org/system/files/sec19-lee_0.pdf](https://www.usenix.org/system/files/sec19-lee_0.pdf)
## BITE: Bitcoin Lightweight Client Privacy using Trusted Execution.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#bite-bitcoin-lightweight-client-privacy-using-trusted-execution) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#bite-bitcoin-lightweight-client-privacy-using-trusted-execution)**
### 作者
* Sinisa Matetic, ETH Zurich
* Karl Wüst, ETH Zurich
* Moritz Schneider, ETH Zurich
* Kari Kostiainen, ETH Zurich
* Ghassan Karame, NEC Labs
* Srdjan Capkun, ETH Zurich
### 摘要
> 区块链相比传统支付方式具有吸引人的优势，如无需信任的机构操作和增加用户隐私。然而，验证区块链支付需要用户下载和处理整个链，这对于资源有限的设备（如手机）来说可能是不可行的。为了解决这个问题，大多数主要的区块链系统支持所谓的轻量级客户端，将大部分计算和存储负担外包给完整的区块链节点。然而，这种验证会泄漏客户端交易的关键信息，从而破坏了用户隐私，而用户隐私通常被认为是分散式加密货币的主要目标之一。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了一种保护比特币轻量级客户端隐私的新方法。我们的主要想法是利用常见的SGX保护容器的可信执行能力。我们设计并实施了一个名为BITE的系统，在完整节点上的容器中提供隐私保护请求给轻量级客户端。然而，正如我们将展示的，SGX保护容器内部对客户端请求的朴素处理仍然会泄漏客户端的地址和交易。因此，BITE在系统的关键部分集成了几种私有信息检索和侧信道保护技术。我们展示了BITE显著提高了轻量级客户端的隐私保护水平，同时不影响协助完整节点的性能。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/matetic](https://www.usenix.org/conference/usenixsecurity19/presentation/matetic)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_matetic_prepub.pdf](https://www.usenix.org/system/files/sec19fall_matetic_prepub.pdf)
## FastKitten: Practical Smart Contracts on Bitcoin.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#fastkitten-practical-smart-contracts-on-bitcoin) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#fastkitten-practical-smart-contracts-on-bitcoin)**
### 作者
* Poulami Das, Technische Universität Darmstadt, Germany
* Lisa Eckey, Technische Universität Darmstadt, Germany
* Tommaso Frassetto, Technische Universität Darmstadt, Germany
* David Gens, Technische Universität Darmstadt, Germany
* Kristina Hostáková, Technische Universität Darmstadt, Germany
* Patrick Jauernig, Technische Universität Darmstadt, Germany
* Sebastian Faust, Technische Universität Darmstadt, Germany
* Ahmad-Reza Sadeghi, Technische Universität Darmstadt, Germany
### 摘要
> 智能合约被认为是去中心化加密货币的杀手级应用之一。它们能够基于复杂的程序逻辑，实现用户之间的自我执行付款。然而，比特币作为最大且最广泛使用的加密货币，却不支持复杂的智能合约。此外，能够在比特币上执行的简单合约通常设计复杂且执行成本高昂。在这项工作中，我们提出了FastKitten，这是一个实用的框架，用于在只支持简单交易的去中心化加密货币上执行任意复杂的智能合约，并且成本较低。为此，FastKitten利用了可信计算环境（TEEs）的强大功能，借助离链运行合约的方式，实现高效低成本的合约执行。我们从理论上证明了FastKitten在除一方恶意外的情况下满足强安全性属性。最后，我们通过脚本引擎支持任意合约的原型实现，并通过在基准测试中评估一个可证明公平的在线扑克游戏的性能。我们的实现表明，FastKitten对于具有极小延迟的复杂多轮应用是可行的。通过结合这些功能，FastKitten是第一个真正实用的在比特币上执行复杂智能合约的框架。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/das](https://www.usenix.org/conference/usenixsecurity19/presentation/das)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_das_prepub.pdf](https://www.usenix.org/system/files/sec19fall_das_prepub.pdf)
## StrongChain: Transparent and Collaborative Proof-of-Work Consensus.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#strongchain-transparent-and-collaborative-proof-of-work-consensus) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#strongchain-transparent-and-collaborative-proof-of-work-consensus)**
### 作者
* Pawel Szalachowski, Singapore University of Technology and Design (SUTD)
* Daniël Reijsbergen, Singapore University of Technology and Design (SUTD)
* Ivan Homoliak, Singapore University of Technology and Design (SUTD)
* Siwei Sun, Institute of Information Engineering and DCS Center, Chinese Academy of Sciences
### 摘要
> 比特币是迄今为止最成功的加密货币。这主要归功于其采用了一种新颖的共识算法，该算法基于工作量证明，结合了密码学保护的数据结构和一种奖励方案，激励节点的参与。然而，尽管比特币取得了前所未有的成功，但它也存在许多效率低下的问题。例如，比特币的共识机制已被证明是不可兼容的，其很高的奖励波动导致了中心化，并且其硬编码通缩引发了对其长期可持续性的质疑。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们通过提出StrongChain来修订比特币的共识机制，这是一种引入了透明度并激励参与者合作而非竞争的方案。我们协议的核心设计是反映和利用在比特币中不可见且“浪费”的区块链上聚合的计算能力。对比特币设计进行相对简单但重要的改变使我们能够改善比特币等类似加密货币的许多关键方面，使其对参与者更安全、高效和有利可图。我们对我们的方法进行了彻底的分析，并提出了StrongChain的实现。获得的结果证实了其效率、安全性和可部署性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/szalachowski](https://www.usenix.org/conference/usenixsecurity19/presentation/szalachowski)
- **PDF:** [https://www.usenix.org/system/files/sec19-szalachowski.pdf](https://www.usenix.org/system/files/sec19-szalachowski.pdf)
## Tracing Transactions Across Cryptocurrency Ledgers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#tracing-transactions-across-cryptocurrency-ledgers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#tracing-transactions-across-cryptocurrency-ledgers)**
### 作者
* Haaroon Yousaf, University College London
* George Kappos, University College London
* Sarah Meiklejohn, University College London
### 摘要
> 加密货币的一个显著特点是，其包含了所有曾经发生的交易的账本是全球可见的。由于透明度的这种程度，最近的一系列研究已经表明，即使在专门设计用来提高匿名性的加密货币中，通常也可以追踪资金的流动，并在某些情况下完全去匿名化用户。然而，随着替代加密货币的日益增多，不仅需要询问在单个加密货币的账本中资金是否可以被追踪，还需要询问在跨账本的资金流动中是否可以被追踪。考虑到ShapeShift等自动交易平台的流行，这一点尤为重要，这些平台使得进行跨货币交易变得轻松。在本文中，我们使用从ShapeShift获取的历时13个月的数据以及来自八个不同区块链的数据来探讨这个问题。除了开发新的启发式方法和创建加密货币账本之间的新链接类型之外，我们还识别了各种跨货币交易的模式以及这些平台的一般使用情况，最终目标是了解它们是为犯罪活动还是以追求利润为动机。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/yousaf](https://www.usenix.org/conference/usenixsecurity19/presentation/yousaf)
- **PDF:** [https://www.usenix.org/system/files/sec19-yousaf_0.pdf](https://www.usenix.org/system/files/sec19-yousaf_0.pdf)
## Reading the Tea leaves: A Comparative Analysis of Threat Intelligence.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#reading-the-tea-leaves-a-comparative-analysis-of-threat-intelligence) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#reading-the-tea-leaves-a-comparative-analysis-of-threat-intelligence)**
### 作者
* Vector Guo Li, University of California, San Diego
* Matthew Dunn, Northeastern University
* Paul Pearce, Georgia Tech
* Damon McCoy, New York University
* Geoffrey M. Voelker, University of California, San Diego
* Stefan Savage, University of California, San Diego
* Kirill Levchenko, University of Illinois Urbana-Champaign
### 摘要
> 术语“威胁情报”迅速成为计算机安全行业中的一个常用词。这个完全合理的前提是，通过汇编关于已知威胁的最新信息（例如IP地址、域名、文件哈希等），接收此类信息的人可能能够更好地保护他们的系统免受未来的攻击。因此，如今有着很多公共和商业来源分发威胁情报数据供支持这一目的。然而，我们对这些数据的理解、其特征化以及它能够有意义地支持其预期用途的程度仍然非常有限。在本文中，我们通过正式定义一组用于特征化威胁情报数据的度量标准，并使用这些度量标准系统地特征化了广泛的公共和商业来源，来填补这些空白。此外，我们通过外部测量来定性地调查覆盖范围和准确性问题，从而巩固我们的定量评估。不幸的是，我们的测量结果表明，使用现有的威胁情报数据达到其标榜的目标存在显著的限制和挑战。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/li](https://www.usenix.org/conference/usenixsecurity19/presentation/li)
- **PDF:** [https://www.usenix.org/system/files/sec19fall-li_prepub.pdf](https://www.usenix.org/system/files/sec19fall-li_prepub.pdf)
## Towards the Detection of Inconsistencies in Public Security Vulnerability Reports.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#towards-the-detection-of-inconsistencies-in-public-security-vulnerability-reports) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#towards-the-detection-of-inconsistencies-in-public-security-vulnerability-reports)**
### 作者
* Ying Dong, University of Chinese Academy of Sciences and The Pennsylvania State University
* Wenbo Guo, The Pennsylvania State University and JD Security Research Center
* Yueqi Chen, The Pennsylvania State University and JD Security Research Center
* Xinyu Xing, The Pennsylvania State University and JD Security Research Center
* Yuqing Zhang, University of Chinese Academy of Sciences
* Gang Wang, Virginia Tech
### 摘要
> 公共漏洞数据库，如通用漏洞和披露(CVE)和国家漏洞数据库(NVD)，在促进漏洞披露和缓解方面取得了巨大成功。尽管这些数据库已经积累了大量数据，但人们对其信息质量和一致性的担忧日益加剧。
> 
> 
> 
> 
> 
> 
> 
> 本文提出了一个自动化系统VIEM，用于检测规范化的NVD数据库与非结构化的CVE描述和相关漏洞报告之间的信息不一致。VIEM首次允许我们在大规模上量化信息的一致性，并为社区提供保持CVE/NVD数据库最新的工具。VIEM被开发用于从非结构化文本中提取受漏洞影响的软件名称和版本。我们引入了基于深度学习的命名实体识别(NER)和关系提取(RE)的定制设计，以便VIEM可以基于句子结构和上下文识别以前未见过的软件名称和版本。基准评估结果显示该系统非常准确(0.941的精确度和0.993的召回率)。使用VIEM，我们检查过去20年中的大型数据集中的78,296个CVE ID和70,569个漏洞报告的信息一致性。我们的研究结果表明，不一致的受漏洞影响的软件版本非常普遍。只有59.82%的漏洞报告/CVE摘要严格匹配规范化的NVD条目，而且随着时间的推移，不一致性水平逐渐增加。案例研究证实了NVD的错误信息，要么夸大了受漏洞影响的软件版本，要么低估了它们。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/dong](https://www.usenix.org/conference/usenixsecurity19/presentation/dong)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_dong_prepub.pdf](https://www.usenix.org/system/files/sec19fall_dong_prepub.pdf)
## Understanding and Securing Device Vulnerabilities through Automated Bug Report Analysis.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#understanding-and-securing-device-vulnerabilities-through-automated-bug-report-analysis) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#understanding-and-securing-device-vulnerabilities-through-automated-bug-report-analysis)**
### 作者
* Xuan Feng, Beijing Key Laboratory of IOT Information Security Technology, Institute of Information Engineering, CAS, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Xiaojing Liao, Department of Computer Science, Indiana University Bloomington, USA
* XiaoFeng Wang, Department of Computer Science, Indiana University Bloomington, USA
* Haining Wang, Department of Electrical and Computer Engineering, University of Delaware, USA
* Qiang Li, School of Computer and Information Technology, Beijing Jiaotong University, China
* Kai Yang, Beijing Key Laboratory of IOT Information Security Technology, Institute of Information Engineering, CAS, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Hongsong Zhu, Beijing Key Laboratory of IOT Information Security Technology, Institute of Information Engineering, CAS, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Limin Sun, Beijing Key Laboratory of IOT Information Security Technology, Institute of Information Engineering, CAS, China; School of Cyber Security, University of Chinese Academy of Sciences, China
### 摘要
> 最近几年，物联网（IoT）基于网络的攻击不断增加。预计这些攻击是通过利用已知的安全漏洞从受损的物联网设备发起的。然而，尚不清楚物联网设备漏洞的普遍原因及其对正在进行的网络犯罪活动的安全影响。为了更好地了解这些问题并寻求有效的手段来抑制基于物联网的攻击浪潮，我们进行了一项综合性研究，该研究基于我们的蜜罐，地下购买的攻击工具以及从知名物联网攻击中收集的信息获得了大量真实攻击痕迹。这项研究为当今物联网系统的设备漏洞及其安全影响提供了新的见解：正在进行的网络攻击严重依赖于这些已知漏洞和通过相关报告发布的攻击代码。我们发现，对已知漏洞的依赖实际上可以用来反击对手。使攻击以极低的成本进行的相同漏洞报告也可以被利用来提取有助于阻止攻击的特定漏洞特征。特别是，我们利用自然语言处理（NLP）自动收集和分析了互联网上散布在漏洞报告博客、论坛和邮件列表中的7500多份安全报告（总共包含12286个安全重要的物联网漏洞）。我们展示了通过基于NLP的报告分析可以自动生成特征签名，并可以被入侵检测或防火墙系统用于有效缓解当今基于物联网的攻击威胁。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/feng](https://www.usenix.org/conference/usenixsecurity19/presentation/feng)
## ATTACK2VEC: Leveraging Temporal Word Embeddings to Understand the Evolution of Cyberattacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#attack2vec-leveraging-temporal-word-embeddings-to-understand-the-evolution-of-cyberattacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#attack2vec-leveraging-temporal-word-embeddings-to-understand-the-evolution-of-cyberattacks)**
### 作者
* Yun Shen, Symantec Research Labs
* Gianluca Stringhini, Boston University
### 摘要
> 尽管网络攻击不断增长且越来越复杂，但研究界仍缺乏有效的工具来轻松监测和理解它们。特别是需要一种能够跟踪某些恶意行动在野外被如何利用，例如特定漏洞的利用，并且更重要的是，这些恶意行动如何作为更复杂网络攻击的攻击步骤来发挥作用的技术。在本文中，我们介绍了一种名为ATTACK2VEC的系统，它使用词嵌入技术来模拟网络攻击步骤在野外的利用情况，并跟踪其演化过程。我们利用商业入侵防御系统的客户在两年内收集的数十亿安全事件数据集对ATTACK2VEC进行了测试，并展示了我们的方法在监测新型攻击策略在野外出现以及标记攻击者常常同时使用的攻击步骤（例如频繁一起被利用的漏洞）方面的有效性。ATTACK2VEC提供了一个有用的工具，供研究人员和实践者更好地理解网络攻击及其演变，并利用这些知识提高情境感知能力和开发主动防御策略。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/shen](https://www.usenix.org/conference/usenixsecurity19/presentation/shen)
- **PDF:** [https://www.usenix.org/system/files/sec19-shen.pdf](https://www.usenix.org/system/files/sec19-shen.pdf)
## Leaky Images: Targeted Privacy Attacks in the Web.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#leaky-images-targeted-privacy-attacks-in-the-web) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#leaky-images-targeted-privacy-attacks-in-the-web)**
### 作者
* Cristian-Alex, TU Darmstadt
* ru Staicu, TU Darmstadt
* Michael Pradel, TU Darmstadt
### 摘要
> 将文件与特定用户共享是各种广泛使用的网站（例如Facebook、Twitter、Google和Dropbox）提供的流行服务。确保共享文件只能被特定用户访问的常见方式是在请求文件时对用户进行身份验证。本文展示了一种滥用共享图像文件进行有针对性隐私攻击的新颖方法。在我们的攻击中，称为"泄露图像"，与特定用户共享的图像会泄露该用户是否正在访问特定网站。基本思路简单而有效：攻击者控制的网站请求一个私密共享的图像，这只会对通过共享图像的网站登录浏览器的特定用户成功。除了针对单个用户的有针对性隐私攻击，我们还讨论了攻击的变种，允许攻击者跟踪用户组并在不同网站之间链接用户身份。泄露图像既不需要JavaScript也不需要CSS，即使是在浏览器中禁用脚本的关注隐私的用户也会受到泄露的影响。对最受欢迎的网站进行研究表明，隐私泄露至少影响了允许用户之间共享图像的30个最受欢迎的网站中的八个，包括全部最受欢迎的三个网站。我们向受影响的网站披露了这个问题，其中大部分已经在我们的报告中修复了隐私泄露问题。特别是受影响最广泛的两个网站Facebook和Twitter已经修复了泄露图像问题。为了避免泄露图像，我们讨论了在浏览器和图像共享网站级别解决问题的潜在缓解技术。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/staicu](https://www.usenix.org/conference/usenixsecurity19/presentation/staicu)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_staicu_prepub.pdf](https://www.usenix.org/system/files/sec19fall_staicu_prepub.pdf)
## All Your Clicks Belong to Me: Investigating Click Interception on the Web.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#all-your-clicks-belong-to-me-investigating-click-interception-on-the-web) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#all-your-clicks-belong-to-me-investigating-click-interception-on-the-web)**
### 作者
* Mingxue Zhang, Chinese University of Hong Kong
* Wei Meng, Chinese University of Hong Kong
* Sangho Lee, Microsoft Research
* Byoungyoung Lee, Seoul National University and Purdue University
* Xinyu Xing, Pennsylvania State University
### 摘要
> 点击是用户与 Web 应用程序交互的主要方式。例如，我们点击超链接在网页上导航不同的页面，点击表单提交按钮向网站发送数据，并点击播放器控件调整视频播放。点击在在线广告中也非常重要，这为数十亿个网站带来收入。由于点击在 Web 生态系统中起着重要的角色，攻击者旨在拦截真实用户的点击，以代表用户发送恶意命令或制造逼真的广告点击流量。然而，现有研究主要考虑到跨域设置中通过 iframe 进行的一种点击拦截，即点击劫持。这并不能全面代表那些可能由恶意第三方 JavaScript 代码发起的各种类型的点击拦截。
> 
> 
> 
> 
> 
> 
> 
> 因此，在本文中，我们系统地调查了 Web 上的点击拦截实践。我们开发了一个基于浏览器的分析框架 Observer，以收集和分析与点击相关的行为。利用 Observer，我们在 Alexa 前 250K 的网站上识别出了三种不同的拦截用户点击的技术，并检测到有 437 个第三方脚本在 613 个网站上拦截用户点击，这些网站每天总计接收约 4300 万次访问。
> 
> 
> 
> 
> 
> 
> 
> 我们揭示了一些网站与第三方脚本合谋，为了变现而劫持用户点击。具体而言，我们的分析表明，在 3251 个唯一的点击拦截 URL 中，超过 36% 与在线广告相关，这是 Web 上的主要变现方式。此外，我们发现用户可能通过点击拦截暴露于诈骗软件等恶意内容。我们的研究证明，点击拦截已成为网络用户面临的新兴威胁。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/zhang](https://www.usenix.org/conference/usenixsecurity19/presentation/zhang)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_zhang_prepub.pdf](https://www.usenix.org/system/files/sec19fall_zhang_prepub.pdf)
## What Are You Searching For? A Remote Keylogging Attack on Search Engine Autocomplete.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#what-are-you-searching-for-a-remote-keylogging-attack-on-search-engine-autocomplete) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#what-are-you-searching-for-a-remote-keylogging-attack-on-search-engine-autocomplete)**
### 作者
* John V. Monaco, Naval Postgraduate School
### 摘要
> 许多搜索引擎都具有自动完成功能，它会在用户输入时向其提供一系列建议的查询。自动完成功能在网页中更改查询时会引起客户端的网络流量。我们描述了一种搜索引擎自动完成的远程键盘记录攻击。该攻击整合了三个独立来源泄露的信息：数据包到达时间中显示的按键时间、URL 中的百分比编码空格字符以及 HTTP2 标头压缩中使用的静态 Huffman 编码。虽然每个来源在自身上都是一个相对较弱的预测因素，但通过结合并利用英语语言的相对低熵，我们能够在由超过12k个字的字典生成的 50 个假设查询列表中识别出高达 15% 的搜索查询。即使网络流量被加密，该攻击仍能成功。我们演示了对两个流行搜索引擎的攻击，并讨论了一些减轻攻击成功的对策。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/monaco](https://www.usenix.org/conference/usenixsecurity19/presentation/monaco)
- **PDF:** [https://www.usenix.org/system/files/sec19-monaco.pdf](https://www.usenix.org/system/files/sec19-monaco.pdf)
## Iframes/Popups Are Dangerous in Mobile WebView: Studying and Mitigating Differential Context Vulnerabilities.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#iframes-popups-are-dangerous-in-mobile-webview-studying-and-mitigating-differential-context-vulnerabilities) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#iframes-popups-are-dangerous-in-mobile-webview-studying-and-mitigating-differential-context-vulnerabilities)**
### 作者
* GuangLiang Yang, Texas A&M University
* Jeff Huang, Texas A&M University
* Guofei Gu, Texas A&M University
### 摘要
> 在本文中，我们提出了一种与Web iframe /弹出行为相关的新型Android WebView漏洞（称为差分上下文漏洞或DCVs）。为了展示DCVs的安全影响，我们设计了几种新颖的具体攻击方式。我们展示了一个不受信任的Web iframe /弹出在WebView内部变得危险，可以利用这些攻击来打开现有防御解决方案上的漏洞，并获取风险权限和能力，例如破坏Web消息完整性、暗中访问敏感的移动功能和进行钓鱼攻击。
> 
> 
> 
> 
> 
> 
> 
> 接下来，我们研究和评估DCVs对现实世界应用的安全影响。为此，我们开发了一种新颖的技术，DCV-Hunter，可以自动审查Android应用程序以防止DCVs。通过将DCV-Hunter应用于大量最受欢迎的应用程序，我们发现DCVs普遍存在。许多知名应用程序都受到了影响，例如Facebook、Instagram、Facebook Messenger、Google News、Skype、Uber、Yelp和美国银行。为了减轻DCVs，我们设计了一个多层次的解决方案，以增强WebView的安全性。我们对现实世界应用程序的评估显示，这种减轻方案是有效和可扩展的，开销微乎其微。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/yang-guangliang](https://www.usenix.org/conference/usenixsecurity19/presentation/yang-guangliang)
- **PDF:** [https://www.usenix.org/system/files/sec19-yang-guangliang_0.pdf](https://www.usenix.org/system/files/sec19-yang-guangliang_0.pdf)
## Small World with High Risks: A Study of Security Threats in the npm Ecosystem.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#small-world-with-high-risks-a-study-of-security-threats-in-the-npm-ecosystem) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#small-world-with-high-risks-a-study-of-security-threats-in-the-npm-ecosystem)**
### 作者
* Markus Zimmermann, TU Darmstadt
* Cristian-Alex, TU Darmstadt
* ru Staicu, TU Darmstadt
* Cam Tenny, r2c
* Michael Pradel, TU Darmstadt
### 摘要
> JavaScript的流行导致了通过npm软件包注册表提供的大量第三方软件包的生态系统。npm的开放性促进了其发展，提供了超过800,000个免费和可重用的软件包。不幸的是，这种开放性也带来了安全风险，最近发生了一些单个软件包破坏或攻击数百万台计算机的事件，这证明了这一点。本文通过系统分析包之间的依赖关系、负责这些软件包的维护者以及公开报告的安全问题，来研究npm用户的安全风险。通过研究由于第三方依赖关系可能运行易受攻击或恶意代码的潜力，我们发现单个软件包可能对整个生态系统的大部分产生影响。此外，少数维护者账户就可以将恶意代码注入到大部分软件包中，这个问题随着时间的推移而日益严重。通过研究意外使用易受攻击代码的潜力，我们发现缺乏维护导致许多软件包依赖于易受攻击的代码，即使在漏洞已经公开多年后仍然如此。我们的研究结果显示，npm存在单点故障，并且未维护的软件包威胁到大型代码库。我们讨论了几种缓解技术，例如可信维护者和全方位内部安全，以及它们的潜在有效性进行了分析。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/zimmerman](https://www.usenix.org/conference/usenixsecurity19/presentation/zimmerman)
- **PDF:** [https://www.usenix.org/system/files/sec19-zimmermann.pdf](https://www.usenix.org/system/files/sec19-zimmermann.pdf)
## "Johnny, you are fired!" - Spoofing OpenPGP and S/MIME Signatures in Emails.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#johnny-you-are-fired-spoofing-openpgp-and-s-mime-signatures-in-emails) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#johnny-you-are-fired-spoofing-openpgp-and-s-mime-signatures-in-emails)**
### 作者
* Jens Müller, Ruhr University Bochum
* Marcus Brinkmann, Ruhr University Bochum
* Damian Poddebniak, Münster University of Applied Sciences
* Hanno Böck, unaffiliated
* Sebastian Schinzel, Münster University of Applied Sciences
* Juraj Somorovsky, Ruhr University Bochum
* Jörg Schwenk, Ruhr University Bochum
### 摘要
> OpenPGP和S/MIME是加密和数字签名电子邮件的两个主要标准。数字签名应该能够保证消息的真实性和完整性。在这项研究中，我们展示了针对OpenPGP和S/MIME电子邮件签名验证的各种实际伪造攻击，这些攻击可以归为五个攻击类别：（1）我们分析了S/MIME容器格式中的边界情况。（2）我们利用了GnuPG API中的带内信号传递，这是最广泛使用的OpenPGP实现。（3）我们应用了MIME包装攻击，滥用电子邮件客户端对部分签名消息的处理。（4）我们分析了签名消息与发件人身份绑定的弱点。（5）我们系统地测试了电子邮件客户端的用户界面伪装攻击。我们的攻击允许在20个经过OpenPGP处理的电子邮件客户端中任意消息的伪造数字签名，并在22个支持S/MIME签名的电子邮件客户端中实现了15个。尽管这些攻击并不针对数字签名的基础密码原语，但它们对于OpenPGP和S/MIME电子邮件应用程序的实际安全性产生了担忧。最后，我们提出了缓解这些攻击的策略。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/muller](https://www.usenix.org/conference/usenixsecurity19/presentation/muller)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_muller_prepub.pdf](https://www.usenix.org/system/files/sec19fall_muller_prepub.pdf)
## Scalable Scanning and Automatic Classification of TLS Padding Oracle Vulnerabilities.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#scalable-scanning-and-automatic-classification-of-tls-padding-oracle-vulnerabilities) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#scalable-scanning-and-automatic-classification-of-tls-padding-oracle-vulnerabilities)**
### 作者
* Robert Merget, Ruhr University Bochum
* Juraj Somorovsky, Ruhr University Bochum
* Nimrod Aviram, Tel Aviv University
* Craig Young, Tripwire VERT
* Janis Fliegenschmidt, Ruhr University Bochum
* Jörg Schwenk, Ruhr University Bochum
* Yuval Shavitt, Tel Aviv University
### 摘要
> TLS协议在现代互联网上提供加密、数据完整性和身份验证。尽管该协议非常重要，但当前部署的TLS版本使用的是已经被各种攻击破解的过时加密算法。其中一种突出的攻击类型是CBC填充预言攻击。通过观察取决于CBC填充的有效性的不同服务器行为，这些攻击允许对TLS流量进行解密。
> 
> 
> 
> 
> 
> 
> 
> 我们首次在现代互联网上对TLS实现中的CBC填充预言漏洞进行了大规模扫描。我们的扫描发现了Alexa百万大网站中1.83%的漏洞，检测到近100个不同的漏洞。我们的扫描器观察到服务器行为的微小差异，例如回复不同的TLS警报或不同的TCP头标志。
> 
> 
> 
> 
> 
> 
> 
> 我们采用了一种新颖的扫描方法，包括三个步骤。首先，我们创建了一个大量的探针集，以较高的扫描成本检测漏洞。然后，我们使用初步扫描减少了探针的数量，使得较小的探针集具有相同的检测率，但足够小以用于大规模扫描。最后，我们使用减少后的集合进行大规模扫描，并使用图形绘制算法进行聚类分析。
> 
> 
> 
> 
> 
> 
> 
> 与常识相反，利用CBC填充预言并不一定需要进行精确的定时测量。我们发现的漏洞可以通过观察不同服务器响应的内容来利用。这些漏洞在实践中的威胁要大得多，比以前假设的要严重。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/merget](https://www.usenix.org/conference/usenixsecurity19/presentation/merget)
- **PDF:** [https://www.usenix.org/system/files/sec19-merget.pdf](https://www.usenix.org/system/files/sec19-merget.pdf)
## The KNOB is Broken: Exploiting Low Entropy in the Encryption Key Negotiation Of Bluetooth BR/EDR.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-knob-is-broken-exploiting-low-entropy-in-the-encryption-key-negotiation-of-bluetooth-br-edr) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-knob-is-broken-exploiting-low-entropy-in-the-encryption-key-negotiation-of-bluetooth-br-edr)**
### 作者
* Daniele Antonioli, SUTD
* Nils Ole Tippenhauer, CISPA
* Kasper B. Rasmussen, University of Oxford
### 摘要
> 我们提出了一种对蓝牙BR/EDR加密密钥协商协议的攻击。这种攻击允许第三方在不知道任何秘密材料（如链路和加密密钥）的情况下，使两个（或更多）受害者同意仅具有1字节（8位）熵的加密密钥。这种低熵使得攻击者可以轻易地暴力破解协商的加密密钥，解密窃听的密文，并实时注入有效的加密消息。该攻击具有隐蔽性，因为蓝牙用户对加密密钥协商是透明的。该攻击符合标准，因为所有蓝牙BR/EDR版本都要求支持1到16字节熵的加密密钥，并且不保护密钥协商协议。因此，攻击者完全突破了蓝牙BR/EDR的安全性而不被发现。我们将这种攻击称为蓝牙的密钥协商攻击（KNOB攻击）。
> 
> 
> 
> 
> 
> 
> 
> 该攻击针对蓝牙芯片的固件，因为固件（蓝牙控制器）实现了蓝牙BR/EDR的所有安全功能。作为符合标准的攻击，预计它对任何遵循规范并使用易受攻击的固件的设备都是有效的。我们描述了如何执行KNOB攻击，并且进行了实现。我们在来自Intel、Broadcom、Apple和Qualcomm等知名制造商的超过14个蓝牙芯片上评估了我们的实现。我们的结果表明，所有测试的设备都容易受到KNOB攻击。我们讨论了修复蓝牙规范及其实现的对策。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/antonioli](https://www.usenix.org/conference/usenixsecurity19/presentation/antonioli)
- **PDF:** [https://www.usenix.org/system/files/sec19-antonioli.pdf](https://www.usenix.org/system/files/sec19-antonioli.pdf)
## From IP ID to Device ID and KASLR Bypass.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#from-ip-id-to-device-id-and-kaslr-bypass) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#from-ip-id-to-device-id-and-kaslr-bypass)**
### 作者
* Amit Klein, Bar Ilan University
* Benny Pinkas, Bar Ilan University
### 摘要
> IP头部包含一个16位的ID字段。我们的研究工作考察了Windows（8版本及更高版本）、Linux和Android中该字段的生成，并表明IP ID字段使得远程服务器能够为每个设备分配一个唯一ID，从而能够识别从该设备发送的后续传输。这种识别在所有浏览器和网络变化中都有效。在现代Linux和Android版本中，该字段会泄漏内核地址，因此我们还破解了内核地址空间布局随机化（KASLR）。我们的工作包括对Windows IP ID生成代码的逆向工程，以及对该代码和Linux内核IP ID生成代码的密码分析。它提供了实际技术来部分提取每个算法使用的密钥，克服不同的实施问题，并观察到此密钥可以识别个别设备。我们部署了一个演示（针对Windows），展示了秘钥提取和机器指纹识别在实际环境中的应用，并在全球范围内进行了测试。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/klein](https://www.usenix.org/conference/usenixsecurity19/presentation/klein)
- **PDF:** [https://www.usenix.org/system/files/sec19-klein.pdf](https://www.usenix.org/system/files/sec19-klein.pdf)
## When the Signal is in the Noise: Exploiting Diffix's Sticky Noise.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#when-the-signal-is-in-the-noise-exploiting-diffixs-sticky-noise) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#when-the-signal-is-in-the-noise-exploiting-diffixs-sticky-noise)**
### 作者
* Andrea Gadotti, Imperial College London
* Florimond Houssiau, Imperial College London
* Luc Rocher, Imperial College London and Université catholique de Louvain
* Benjamin Livshits, Imperial College London
* Yves-Alex, Imperial College London
* re de Montjoye, Imperial College London
### 摘要
> 匿名化的数据对于商业和研究人员都具有很高的价值。然而，大量研究已经表明了释放和遗忘模型的匿名化和分享数据的强大局限性。这导致了隐私保护的基于查询的系统的开发。基于“粘性噪声”的理念，Diffix最近被提出作为一个满足欧盟第29条工作小组的匿名化定义的新型基于查询的机制。根据作者的说法，与基于差分隐私的解决方案相比，Diffix在答案中添加的噪声更少，同时允许无限数量的查询。
> 
> 
> 
> 
> 
> 
> 
> 本文介绍了一种新型的噪声利用攻击类别，利用系统添加的噪声来推断数据集中个体的私人信息。我们的第一种差分攻击使用从Diffix中提取的样本在似然比检验中区分两个概率分布。我们展示了在合成最佳案例数据集上使用这种攻击可以使用仅有5个属性就可以达到89.4%的准确率推断私人信息。我们的第二种克隆攻击使用虚假条件，在查询结果上具有条件性强烈影响，具体取决于私有属性的值。我们在四个真实数据集上使用这种攻击，展示了我们可以准确推断出数据集中至少93%的用户的私有属性，准确率在93.3%至97.1%，每个用户的中位数发出304个查询。我们展示了如何优化这种攻击，针对55.4%的用户，准确率达到91.7%，每个用户最多只使用32个查询。
> 
> 
> 
> 
> 
> 
> 
> 我们的攻击证明了像Diffix一样添加数据相关的噪声并不足以防止推断私有属性。此外，我们认为Diffix单独不能满足第29条工作小组对匿名化的定义。最后，我们讨论了如何将不可证明的隐私保护系统与深度防御和可审计性等基本安全原则相结合，以构建实际有用的匿名化系统，而无需依赖差分隐私。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/gadotti](https://www.usenix.org/conference/usenixsecurity19/presentation/gadotti)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_gadotti_prepub.pdf](https://www.usenix.org/system/files/sec19fall_gadotti_prepub.pdf)
## FIRM-AFL: High-Throughput Greybox Fuzzing of IoT Firmware via Augmented Process Emulation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#firm-afl-high-throughput-greybox-fuzzing-of-iot-firmware-via-augmented-process-emulation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#firm-afl-high-throughput-greybox-fuzzing-of-iot-firmware-via-augmented-process-emulation)**
### 作者
* Yaowen Zheng, Beijing Key Laboratory of IOT Information Security Technology, Institute of Information Engineering, CAS, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Ali Davanian, University of California, Riverside
* Heng Yin, University of California, Riverside
* Chengyu Song, University of California, Riverside
* Hongsong Zhu, Beijing Key Laboratory of IOT Information Security Technology, Institute of Information Engineering, CAS, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Limin Sun, Beijing Key Laboratory of IOT Information Security Technology, Institute of Information Engineering, CAS, China; School of Cyber Security, University of Chinese Academy of Sciences, China
### 摘要
> 物联网设备的网络攻击是一种严重威胁。这些攻击利用物联网固件中的软件漏洞。模糊测试是一种有效的软件测试技术，用于发现这些漏洞以便进行修补。在这项工作中，我们提出了FIRM-AFL，这是物联网固件的第一个高吞吐灰盒模糊测试器。FIRM-AFL解决了物联网模糊测试中的两个基本问题。首先，它通过在系统仿真器中模拟POSIX兼容固件，实现了模糊测试的兼容性。其次，它通过一种称为增强式进程仿真的新技术，解决了由系统模式仿真引起的性能瓶颈问题。通过集成系统模式仿真和用户模式仿真，增强式进程仿真提供了与系统模式仿真一样的高兼容性和与用户模式仿真一样的高吞吐量。我们的评估结果表明，(1) FIRM-AFL功能完备，能够找到物联网程序中的真实漏洞；(2) FIRM-AFL的吞吐量平均比基于系统模式仿真的模糊测试高10倍；(3) FIRM-AFL能够比基于系统模式仿真的模糊测试更快地发现1天漏洞，并能够发现0天漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/zheng](https://www.usenix.org/conference/usenixsecurity19/presentation/zheng)
- **PDF:** [https://www.usenix.org/system/files/sec19-zheng_0.pdf](https://www.usenix.org/system/files/sec19-zheng_0.pdf)
## Not Everything is Dark and Gloomy: Power Grid Protections Against IoT Demand Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#not-everything-is-dark-and-gloomy-power-grid-protections-against-iot-demand-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#not-everything-is-dark-and-gloomy-power-grid-protections-against-iot-demand-attacks)**
### 作者
* Bing Huang, The University of Texas at Austin
* Alvaro A. Cardenas, University of California, Santa Cruz
* Ross Baldick, The University of Texas at Austin
### 摘要
> 本文讨论并描述了物联网（IoT）需求攻击对电力传输网络安全运行的影响及特征。越来越多的物联网连接适用于高能耗设备，比如空调和热水器。然而，这些新的连接使得攻击者有可能操控新电力负荷的控制。在本文中，我们研究了潜在的物联网需求操纵攻击对电力传输网络的影响。我们的工作侧重于开发一种级联故障分析（COA）工具，以详细建模可能导致大型电力网络级联故障的条件。在本文中，我们将该工具应用于一个由超过5,000个节点组成的北美大型区域输电互连系统，并研究物联网需求攻击如何影响电力系统，假设攻击者完全掌控了系统需求的一部分。为了评估此类网络攻击的影响，我们进行了数值实验，并定义了不同类型的物联网需求攻击，以研究输电线路的级联故障和系统频率的中断情况。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/huang](https://www.usenix.org/conference/usenixsecurity19/presentation/huang)
- **PDF:** [https://www.usenix.org/system/files/sec19-huang.pdf](https://www.usenix.org/system/files/sec19-huang.pdf)
## Discovering and Understanding the Security Hazards in the Interactions between IoT Devices, Mobile Apps, and Clouds on Smart Home Platforms.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#discovering-and-understanding-the-security-hazards-in-the-interactions-between-iot-devices-mobile-apps-and-clouds-on-smart-home-platforms) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#discovering-and-understanding-the-security-hazards-in-the-interactions-between-iot-devices-mobile-apps-and-clouds-on-smart-home-platforms)**
### 作者
* Wei Zhou, National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences
* Yan Jia, School of Cyber Engineering, Xidian University; National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences
* Yao Yao, School of Cyber Engineering, Xidian University; National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences
* Lipeng Zhu, School of Cyber Engineering, Xidian University; National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences
* Le Guan, Department of Computer Science, University of Georgia
* Yuhang Mao, School of Cyber Engineering, Xidian University; National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences
* Peng Liu, College of Information Sciences and Technology, Pennsylvania State University
* Yuqing Zhang, National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences; School of Cyber Engineering, Xidian University; State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences
### 摘要
> 智能家居将数十台家用设备连接至互联网，其中物联网云运行各种家庭自动化应用。尽管给用户带来了前所未有的便利和可访问性，但也引入了各种安全隐患。先前的研究从几个方面研究了智能家居安全性。然而，我们发现参与实体（即设备、物联网云和手机应用程序）之间的交互的复杂性尚未得到系统地调查。在这项工作中，我们对五个广泛使用的智能家居平台进行了深入分析。通过固件分析、网络流量拦截和黑盒测试的结合，我们逆向工程了参与实体之间的交互细节。基于这些细节，我们推断出三个合法的状态转换图，分别适用于这三个实体。利用这些状态机作为参考模型，我们确定了一组意外的状态转换。为了确认和触发这些意外的状态转换，我们实施了一组幻影设备来模拟真实设备。通过指示这些幻影设备介入正常的实体之间的交互，我们发现了几种新的漏洞和一系列针对真实智能家居平台的攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/zhou](https://www.usenix.org/conference/usenixsecurity19/presentation/zhou)
- **PDF:** [https://www.usenix.org/system/files/sec19-zhou.pdf](https://www.usenix.org/system/files/sec19-zhou.pdf)
## Looking from the Mirror: Evaluating IoT Device Security through Mobile Companion Apps.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#looking-from-the-mirror-evaluating-iot-device-security-through-mobile-companion-apps) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#looking-from-the-mirror-evaluating-iot-device-security-through-mobile-companion-apps)**
### 作者
* Xueqiang Wang, Indiana University Bloomington
* Yuqiong Sun, Symantec Research Labs
* Susanta N, Symantec Research Labs
* a, Symantec Research Labs
* XiaoFeng Wang, Indiana University Bloomington
### 摘要
> 智能家居物联网设备由于其薄弱的安全设计，成为网络犯罪分子的青睐目标。为了识别这些易受攻击的设备，现有的方法要么依靠对真实设备或其固件图像的分析。然而，由于固件图像的不可用性和获取真实设备进行安全分析涉及高昂成本，这些方法在高度分散的物联网市场中很难扩展。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了一种平台，可以加速易受攻击设备的发现和分析，而无需实际设备或固件的存在。我们的方法基于两个关键观察结果：首先，物联网设备倾向于重复使用和定制其他组件（如软件、硬件、协议和服务），因此在一个设备中发现的漏洞通常也存在于其他设备中。其次，可以间接推断出可重复使用的组件来自设备的移动应用程序；因此，对移动应用程序的交叉分析可能使我们能够近似了解设备之间的相似性。
> 
> 
> 
> 
> 
> 
> 
> 使用一套程序分析技术，我们的平台分析了市场上智能家居物联网设备的移动应用程序，并自动发现了潜在的易受攻击设备，使我们能够进行覆盖超过4,700个设备的大规模分析。我们的研究揭示了智能家居物联网设备之间共享易受攻击组件的情况（如共享易受攻击的协议、后端服务、设备重新品牌），并发现了来自73个不同供应商的324个设备可能存在一系列安全问题。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/wang-xueqiang](https://www.usenix.org/conference/usenixsecurity19/presentation/wang-xueqiang)
- **PDF:** [https://www.usenix.org/system/files/sec19-wang-xueqiang_0.pdf](https://www.usenix.org/system/files/sec19-wang-xueqiang_0.pdf)
## All Things Considered: An Analysis of IoT Devices on Home Networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#all-things-considered-an-analysis-of-iot-devices-on-home-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#all-things-considered-an-analysis-of-iot-devices-on-home-networks)**
### 作者
* Deepak Kumar, University of Illinois at Urbana-Champaign
* Kelly Shen, Stanford University
* Benton Case, Stanford University
* Deepali Garg, Avast Software s.r.o.
* Galina Alperovich, Avast Software s.r.o.
* Dmitry Kuznetsov, Avast Software s.r.o.
* Rajarshi Gupta, Avast Software s.r.o.
* Zakir Durumeric, Stanford University
### 摘要
> 本文通过利用从用户发起的对8300万设备在1600万家庭的网络扫描收集的数据，对现实世界家庭中物联网设备进行了首次大规模实证分析。我们发现物联网的应用十分普及：在几个大洲上，超过一半的家庭已经拥有至少一种物联网设备。设备类型和制造商的受欢迎程度在不同地区差异巨大。例如，尽管近一半的北美家庭拥有互联网电视或流媒体设备，但南亚地区只有不到3%的家庭拥有这类设备，相反，多数设备为监控摄像头。我们研究了设备的安全状况，详细介绍了它们的开放服务、弱默认凭证以及对已知攻击的易感性。设备的安全性在地理上也存在差异，甚至对于特定的制造商。例如，虽然北美地区的TP-Link家用路由器中不到17%的设备存在可猜测的密码，但东欧和中亚地区近一半的设备存在这种情况。我们认为物联网设备已经普及，但对于大多数家庭而言，所采用的设备并非正在积极讨论的那些。我们希望通过揭示这个复杂的生态系统，能够帮助安全社区制定适用于当今家庭的解决方案。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/kumar-deepak](https://www.usenix.org/conference/usenixsecurity19/presentation/kumar-deepak)
- **PDF:** [https://www.usenix.org/system/files/sec19-kumar-deepak_0.pdf](https://www.usenix.org/system/files/sec19-kumar-deepak_0.pdf)
## KEPLER: Facilitating Control-flow Hijacking Primitive Evaluation for Linux Kernel Vulnerabilities.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#kepler-facilitating-control-flow-hijacking-primitive-evaluation-for-linux-kernel-vulnerabilities) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#kepler-facilitating-control-flow-hijacking-primitive-evaluation-for-linux-kernel-vulnerabilities)**
### 作者
* Wei Wu, Institute of Information Engineering, Chinese Academy of Sciences; Pennsylvania State University; School of Cybersecurity, University of Chinese Academy of Sciences
* Yueqi Chen, Pennsylvania State University
* Xinyu Xing, Pennsylvania State University
* Wei Zou, Institute of Information Engineering, Chinese Academy of Sciences; School of Cybersecurity, University of Chinese Academy of Sciences
### 摘要
> 自动生成利用是一个具有挑战性的问题。任务中具有挑战性的部分是将已识别的可利用状态（利用原语）与触发代码重用（例如ROP）有效载荷的执行连接起来。控制流劫持原语是一种最常见的利用能力。然而，由于广泛部署的利用缓解措施的挑战、利用路径上的陷阱以及不适合的原语，即使是手动为现成的现代Linux内核制作控制流劫持原语的利用也很困难。我们提出了KEPLER来通过自动生成“一次性”的利用链来促进利用生成。KEPLER接受控制流劫持原语作为输入，并通过符号连接利用链来利用广泛部署的内核编码风格和相应的小工具来引导任何内核ROP有效载荷。与先前的自动利用生成技术和先前的内核利用技术进行比较，KEPLER有效地促进了对Linux内核中控制流劫持原语的评估。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/wu-wei](https://www.usenix.org/conference/usenixsecurity19/presentation/wu-wei)
- **PDF:** [https://www.usenix.org/system/files/sec19-wu-wei.pdf](https://www.usenix.org/system/files/sec19-wu-wei.pdf)
## PeX: A Permission Check Analysis Framework for Linux Kernel.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#pex-a-permission-check-analysis-framework-for-linux-kernel) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#pex-a-permission-check-analysis-framework-for-linux-kernel)**
### 作者
* Tong Zhang, Virginia Tech
* Wenbo Shen, Zhejiang University
* Dongyoon Lee, Stony Brook University
* Changhee Jung, Purdue University
* Ahmed M. Azab, Samsung Research America
* Ruowen Wang, Samsung Research America
### 摘要
> 权限检查在操作系统安全中起着至关重要的作用，它通过为特权功能提供访问控制来保障系统的安全。然而，对于内核开发人员来说，正确应用新的权限检查并可扩展地验证现有检查的准确性是一项特别具有挑战性的任务，原因是内核代码库庞大且复杂。事实上，Linux内核包含数百万行代码和数百个权限检查，更糟糕的是其复杂性还在不断增长。
> 
> 
> 
> 
> 
> 
> 
> 本文介绍了一种名为PeX的静态权限检查错误检测工具，用于Linux系统。它接受内核源代码作为输入，并报告任何缺失、不一致和多余的权限检查。PeX使用了一种名为KIRIN（基于内核接口的间接调用分析）的新颖、精确且可扩展的间接调用分析技术，利用了内核抽象接口中常用的编程范式。PeX根据KIRIN构建的跨过程控制流图自动识别所有权限检查，并推断权限检查与特权函数之间的映射关系。对于每个特权函数，PeX检查所有通往该函数的路径，以确保调用函数之前正确执行必要的权限检查。
> 
> 
> 
> 
> 
> 
> 
> 我们在最新的稳定版Linux内核v4.18.5上对PeX进行了评估，针对三种类型的权限检查：自由访问控制（DAC）、能力和Linux安全模块（LSM）。PeX报告了36个新的权限检查错误，其中14个已被内核开发人员确认。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/zhang-tong](https://www.usenix.org/conference/usenixsecurity19/presentation/zhang-tong)
- **PDF:** [https://www.usenix.org/system/files/sec19-zhang-tong.pdf](https://www.usenix.org/system/files/sec19-zhang-tong.pdf)
## ERIM: Secure, Efficient In-process Isolation with Protection Keys (MPK).
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#erim-secure-efficient-in-process-isolation-with-protection-keys-mpk) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#erim-secure-efficient-in-process-isolation-with-protection-keys-mpk)**
### 作者
* Anjo Vahldiek-Oberwagner, Max Planck Institute for Software Systems, Saarland Informatics Campus
* Eslam Elnikety, Max Planck Institute for Software Systems, Saarland Informatics Campus
* Nuno O. Duarte, Max Planck Institute for Software Systems, Saarland Informatics Campus
* Michael Sammler, Max Planck Institute for Software Systems, Saarland Informatics Campus
* Peter Druschel, Max Planck Institute for Software Systems, Saarland Informatics Campus
* Deepak Garg, Max Planck Institute for Software Systems, Saarland Informatics Campus
### 摘要
> 隔离敏感状态和数据可以增加许多应用程序的安全性和稳定性。例如，保护加密密钥免受像OpenSSL的Heartbleed漏洞之类的攻击，或者保护运行时不安全语言编写的本地库。当运行时引用跨隔离边界发生相对不频繁时，可以使用传统的基于页面的硬件隔离，因为内核或虚拟机介导的域切换成本是可以接受的。然而，某些应用程序，例如网络服务中的加密会话密钥的隔离，需要非常频繁的域切换。在这种应用程序中，内核或虚拟机介导的域切换的开销是不可接受的。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们介绍了ERIM，这是一种新颖的技术，在x86 CPU上提供低开销的硬件强制隔离，即使在高切换率下也是如此（ERIM的测量开销在每秒10万次切换时不到1%）。关键思想是将最近添加到x86上的保护密钥（MPKs）与二进制检查结合起来，以防止规避。我们展示了ERIM可以轻松应用于新的和现有的应用程序，不需要编译器更改，可以在原始Linux内核上运行，并且即使在高域切换率下也具有很低的运行时开销。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/vahldiek-oberwagner](https://www.usenix.org/conference/usenixsecurity19/presentation/vahldiek-oberwagner)
- **PDF:** [https://www.usenix.org/system/files/sec19-vahldiek-oberwagner_0.pdf](https://www.usenix.org/system/files/sec19-vahldiek-oberwagner_0.pdf)
## SafeHidden: An Efficient and Secure Information Hiding Technique Using Re-randomization.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#safehidden-an-efficient-and-secure-information-hiding-technique-using-re-randomization) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#safehidden-an-efficient-and-secure-information-hiding-technique-using-re-randomization)**
### 作者
* Zhe Wang, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences, University of Chinese Academy of Sciences
* Chenggang Wu, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences, University of Chinese Academy of Sciences
* Yinqian Zhang, The Ohio State University
* Bowen Tang, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences, University of Chinese Academy of Sciences
* Pen-Chung Yew, University of Minnesota at Twin-Cities
* Mengyao Xie, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences, University of Chinese Academy of Sciences
* Yuanming Lai, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences, University of Chinese Academy of Sciences
* Yan Kang, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences, University of Chinese Academy of Sciences
* Yueqiang Cheng, Baidu USA
* Zhiping Shi, The Capital Normal University
### 摘要
> 信息隐藏（IH）是许多对抗代码重用攻击的重要构建模块，例如代码指针完整性（CPI）、控制流完整性（CFI）和细粒度代码（重新）随机化，因为其有效性和性能。它使用随机化来概率性地“隐藏”敏感内存区域，称为安全区域，使攻击者无法直接通过任何指针泄露它们的地址。这些防御机制使用安全区域来保护其关键数据，如跳转目标和随机化密钥。然而，最近的研究表明，IH对各种攻击是脆弱的。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了一种名为SafeHidden的新IH技术。它持续重新随机化安全区域的位置，从而阻止攻击者探测和推断内存布局以找到其位置。提出了一种新的线程专用内存机制，用于隔离线程本地的安全区域，并防止对手降低随机化熵。它还在TLB错失后随机化安全区域，防止攻击者利用缓存侧信道推断安全区域的地址。现有的基于IH的防御机制可以直接使用SafeHidden而无需任何更改。我们的实验证明，SafeHidden不仅能有效地防止现有的攻击，而且开销较低。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/wang](https://www.usenix.org/conference/usenixsecurity19/presentation/wang)
- **PDF:** [https://www.usenix.org/system/files/sec19-wang-zhe.pdf](https://www.usenix.org/system/files/sec19-wang-zhe.pdf)
## Exploiting Unprotected I/O Operations in AMD's Secure Encrypted Virtualization.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#exploiting-unprotected-i-o-operations-in-amds-secure-encrypted-virtualization) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#exploiting-unprotected-i-o-operations-in-amds-secure-encrypted-virtualization)**
### 作者
* Mengyuan Li, The Ohio State University
* Yinqian Zhang, The Ohio State University
* Zhiqiang Lin, The Ohio State University
* Yan Solihin, University of Central Florida
### 摘要
> AMD的Secure Encrypted Virtualization（SEV）是一种新兴技术，可在恶意超级监视器存在的情况下保护虚拟机（VM）。然而，对特权软件缺乏信任也引入了一系列未在文献中充分研究的SEV启用VM的新攻击向量。本文从SEV启用VM中未受保护的I/O操作的角度研究了SEV的不安全性。研究结果令人警觉：我们不仅发现了突破这些I/O操作的机密性和完整性的攻击（这些攻击很难通过现有方法进行缓解），而且更重要的是，我们还展示了针对SEV的内存加密方案构建两个攻击原语：一个是内存解密预言机，一个是内存加密预言机，使得对手能够使用VM的内存加密密钥解密和加密任意消息。我们评估了提出的攻击并讨论了潜在问题的解决方案。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/li-mengyuan](https://www.usenix.org/conference/usenixsecurity19/presentation/li-mengyuan)
- **PDF:** [https://www.usenix.org/system/files/sec19-li-mengyuan_0.pdf](https://www.usenix.org/system/files/sec19-li-mengyuan_0.pdf)
## Detecting and Characterizing Lateral Phishing at Scale.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#detecting-and-characterizing-lateral-phishing-at-scale) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#detecting-and-characterizing-lateral-phishing-at-scale)**
### 作者
* Grant Ho, UC Berkeley and Barracuda Networks
* Asaf Cidon, Barracuda Networks and Columbia University
* Lior Gavish, Barracuda Networks
* Marco Schweighauser, Barracuda Networks
* Vern Paxson, UC Berkeley and ICSI
* Stefan Savage, UC San Diego
* Geoffrey M. Voelker, UC San Diego
* David Wagner, UC Berkeley
### 摘要
> 我们首次对横向钓鱼攻击进行了大规模的表征研究，基于来自92个企业组织的1.13亿封员工发送的电子邮件数据集。在横向钓鱼攻击中，攻击者利用被攻陷的企业账户向其他用户发送钓鱼邮件，同时获得被劫持用户账户中的隐含信任和信息。我们开发了一个分类器，能够找出数百封真实世界中的横向钓鱼邮件，同时每一百万封员工发送的邮件中只有不到四个误报。通过分析我们检测到的攻击和用户报告的事件，我们对横向钓鱼的规模进行了量化，确定了攻击者采用的多种主题内容和目标受众策略，揭示了攻击者展示的两种高级行为类型，并估计了这些攻击的成功率。总的来说，这些结果扩展了我们对“企业攻击者”的心智模型，并揭示了当前企业钓鱼攻击的现状。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/ho](https://www.usenix.org/conference/usenixsecurity19/presentation/ho)
- **PDF:** [https://www.usenix.org/system/files/sec19-ho.pdf](https://www.usenix.org/system/files/sec19-ho.pdf)
## High Precision Detection of Business Email Compromise.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#high-precision-detection-of-business-email-compromise) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#high-precision-detection-of-business-email-compromise)**
### 作者
* Asaf Cidon, Barracuda Networks and Columbia University
* Lior Gavish, Barracuda Networks
* Itay Bleier, Barracuda Networks
* Nadia Korshun, Barracuda Networks
* Marco Schweighauser, Barracuda Networks
* Alexey Tsitkin, Barracuda Networks
### 摘要
> 商业电子邮件欺诈（BEC）和雇员伪装已经成为最昂贵的网络安全威胁之一，据报道已经导致120亿美元的损失。伪装邮件有几种形式：例如，有些要求将资金汇入攻击者的账户，而其他则引导收件人点击链接，以泄露他们的凭据。电子邮件安全系统无法有效检测到这些攻击，因为攻击不包含明显的恶意载荷，并且是根据收件人个人化定制的。
> 
> 
> 
> 
> 
> 
> 
> 我们提出了BEC-Guard，这是Barracuda Networks使用监督学习实时防止商业电子邮件欺诈攻击的检测器。BEC-Guard自2017年7月起投入使用，并成为Barracuda Sentinel电子邮件安全产品的一部分。BEC-Guard通过依赖于可以通过云电子邮件提供商APIs获取的有关历史电子邮件模式的统计数据来检测攻击。设计BEC-Guard时面临的两个主要挑战是需要对数百万封邮件进行分类标注以训练其分类器，并在雇员伪装邮件发生的频率非常低时正确训练分类器，这可能导致分类有偏差。我们的关键观点是将分类问题分为两个部分，一个分析邮件头部，另一个应用自然语言处理来检测邮件正文中与BEC或可疑链接相关的短语。BEC-Guard利用云电子邮件提供商的公共APIs自动学习每个组织的历史通信模式，并实时隔离电子邮件。我们在包含4,000多次攻击的商业数据集上评估了BEC-Guard，并显示其精确度达到98.2％，误报率低于五百万封邮件。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/cidon](https://www.usenix.org/conference/usenixsecurity19/presentation/cidon)
- **PDF:** [https://www.usenix.org/system/files/sec19-cidon.pdf](https://www.usenix.org/system/files/sec19-cidon.pdf)
## Cognitive Triaging of Phishing Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#cognitive-triaging-of-phishing-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#cognitive-triaging-of-phishing-attacks)**
### 作者
* Amber van der Heijden, Eindhoven University of Technology
* Luca Allodi, Eindhoven University of Technology
### 摘要
> 在本文中，我们采用了认知易受攻击触发因素在网络钓鱼邮件中的数量化测量，以预测攻击的成功程度。为了实现这一目标，我们依赖于认知心理学文献，并基于机器学习和计量经济学开发了一种自动化和完全定量化的方法，以构建一个基于网络钓鱼邮件认知特征的分流机制；我们展示了我们的方法，依靠欧洲一个大型金融机构的反网络钓鱼部门的数据。我们的评估从经验证明，响应团队可以建立一个有效的网络钓鱼成功分流机制，以有效地优先处理修复工作（例如域名关闭），首先处理那些更有可能从潜在受害者那里获得高回应率的攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/van-der-heijden](https://www.usenix.org/conference/usenixsecurity19/presentation/van-der-heijden)
- **PDF:** [https://www.usenix.org/system/files/sec19-van_der_heijden.pdf](https://www.usenix.org/system/files/sec19-van_der_heijden.pdf)
## Users Really Do Answer Telephone Scams.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#users-really-do-answer-telephone-scams) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#users-really-do-answer-telephone-scams)**
### 作者
* Huahong Tu, University of Maryland
* Adam Doupé, Arizona State University
* Ziming Zhao, Rochester Institute of Technology
* Gail-Joon Ahn, Arizona State University and Samsung Research
### 摘要
> 随着电话诈骗日益猖獗，了解受害者失陷于此类诈骗的原因至关重要。凭借这一知识，可以制定有效的对策来挑战成功的电话钓鱼攻击的关键基础。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们介绍了一种道德电话诈骗实验的方法论、设计、执行、结果和评估。该研究在一周的工作日内对3000名无先期意识的大学参与者进行了10次电话诈骗实验。总体而言，我们成功地确定了至少一个关键因素——被冒充的来电显示——对诱骗受害者透露其社会安全号码产生了重大影响。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/tu](https://www.usenix.org/conference/usenixsecurity19/presentation/tu)
- **PDF:** [https://www.usenix.org/system/files/sec19-tu.pdf](https://www.usenix.org/system/files/sec19-tu.pdf)
## Platforms in Everything: Analyzing Ground-Truth Data on the Anatomy and Economics of Bullet-Proof Hosting.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#platforms-in-everything-analyzing-ground-truth-data-on-the-anatomy-and-economics-of-bullet-proof-hosting) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#platforms-in-everything-analyzing-ground-truth-data-on-the-anatomy-and-economics-of-bullet-proof-hosting)**
### 作者
* Arman Noroozian, TU Delft
* Jan Koenders, Dutch National High-Tech Crime Unit
* Eelco van Veldhuizen, Dutch National High-Tech Crime Unit
* Carlos H. Ganan, TU Delft
* Sumayah Alrwais, King Saud University and International Computer Science Institute
* Damon McCoy, New York University
* Michel van Eeten, TU Delft
### 摘要
> 本研究提出了第一篇基于实地验证数据的Bullet-Proof Hosting（BPH）供应商马克斯迪德（Maxided）的实证研究。BPH允许不法分子通过其支持各种网络犯罪业务模式，如网络钓鱼、僵尸网络、分布式拒绝服务攻击（DDoS）、垃圾邮件和假药网站。马克斯迪德被执法部门合法关闭并查封了其后台服务器。我们分析了从其后台数据库中提取的数据，并将其与各种外部数据源相连接，以描述马克斯迪德的业务模式、供应链、客户和财务情况。我们推测“内部”视角揭示了破坏BPH供应商潜在瓶颈的可能性。我们证明，BPH行业的格局已从灵活的转售商进一步转向拥有大量来自数百家合法上游托管供应商的资源的市场平台。我们发现BPH供应商在供应链中只有少数几个可干预的瓶颈，尽管利润率非常微薄，所以即使是运营成本的微小增加也可能对其业务造成不可持续的影响。另一种干预选择是关闭该平台本身。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/noroozian](https://www.usenix.org/conference/usenixsecurity19/presentation/noroozian)
- **PDF:** [https://www.usenix.org/system/files/sec19-noroozian.pdf](https://www.usenix.org/system/files/sec19-noroozian.pdf)
## Protecting Cloud Virtual Machines from Hypervisor and Host Operating System Exploits.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#protecting-cloud-virtual-machines-from-hypervisor-and-host-operating-system-exploits) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#protecting-cloud-virtual-machines-from-hypervisor-and-host-operating-system-exploits)**
### 作者
* Shih-Wei Li, Columbia University
* John S. Koh, Columbia University
* Jason Nieh, Columbia University
### 摘要
> 虚拟机监控器被广泛应用于云计算服务供应商以支持虚拟机，但其日益复杂的特性使其成为一个安全风险，因为庞大的代码库中存在许多漏洞。我们开发了一种新的HypSec虚拟机监控器设计，通过使用微内核原则对现有的通用虚拟机监控器进行改造，缩减其可信计算基础，同时保护虚拟机的机密性和完整性。HypSec将虚拟机监控器划分为一个不可信任的主机，执行大部分复杂的虚拟机监控器功能但无法访问虚拟机数据，以及一个可信核心，为虚拟机数据提供访问控制并执行基本的CPU和内存虚拟化。硬件虚拟化支持被用于隔离和保护可信核心，并以更高的权限级别执行，以便调解虚拟机异常并保护CPU和内存中的虚拟机数据。HypSec采用端到端的方法来保护I/O以简化设计，应用程序在云中越来越多地使用安全网络连接。我们使用HypSec来改造KVM，展示了我们的方法如何支持一个集成了通用操作系统的广泛使用的功能完整的虚拟机监控器。此实现的可信计算基础只有几千行代码，远远小于KVM的数量级。我们证明了HypSec在运行未修改的客户操作系统时保护虚拟机的机密性和完整性，同时对真实应用工作负载仅产生适度的性能损耗。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/li-shih-wei](https://www.usenix.org/conference/usenixsecurity19/presentation/li-shih-wei)
- **PDF:** [https://www.usenix.org/system/files/sec19-li-shih-wei.pdf](https://www.usenix.org/system/files/sec19-li-shih-wei.pdf)
## WAVE: A Decentralized Authorization Framework with Transitive Delegation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#wave-a-decentralized-authorization-framework-with-transitive-delegation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#wave-a-decentralized-authorization-framework-with-transitive-delegation)**
### 作者
* Michael P Andersen, University of California, Berkeley
* Sam Kumar, University of California, Berkeley
* Moustafa AbdelBaky, University of California, Berkeley
* Gabe Fierro, University of California, Berkeley
* John Kolb, University of California, Berkeley
* Hyung-Sin Kim, University of California, Berkeley
* David E. Culler, University of California, Berkeley
* Raluca Ada Popa, University of California, Berkeley
### 摘要
> 大多数部署的授权系统依赖于中央可信服务，其被破坏可能导致数百万用户帐户和权限被突破。我们提出了一种名为WAVE的授权框架，提供分散式信任：没有中央服务可以修改或查看权限，任何参与者都可以自主委派部分权限。为了实现这一目标，WAVE采用了一种表达性授权模型，通过密码学强制执行，通过一种新颖的加密协议保护权限，同时实现权限的发现，并将其存储在一个不可信的可扩展存储解决方案中。WAVE在可靠度方面提供了与依赖中央信任的传统授权系统相当的性能。它是一个开源项目，已经用于控制800个物联网设备两年。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/andersen](https://www.usenix.org/conference/usenixsecurity19/presentation/andersen)
- **PDF:** [https://www.usenix.org/system/files/sec19-andersen.pdf](https://www.usenix.org/system/files/sec19-andersen.pdf)
## in-toto: Providing farm-to-table guarantees for bits and bytes.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#in-toto-providing-farm-to-table-guarantees-for-bits-and-bytes) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#in-toto-providing-farm-to-table-guarantees-for-bits-and-bytes)**
### 作者
* Santiago Torres-Arias, New York University
* Hammad Afzali, New Jersey Institute of Technology
* Trishank Karthik Kuppusamy, Datadog
* Reza Curtmola, New Jersey Institute of Technology
* Justin Cappos, New York University
### 摘要
> 软件开发过程非常复杂，涉及多个独立参与者。开发人员将源代码提交到版本控制系统中，代码在构建环境中被编译成软件，并通过CI/CD系统运行多个测试以确保软件的质量，同时执行多种其他操作。最后，软件被打包成可分发的产品，供最终用户使用。攻击者如果能够篡改该过程中的任何一步，就可以恶意修改软件并对软件的用户造成伤害。
> 
> 
> 
> 
> 
> 
> 
> 为了解决这些问题，我们设计了in-toto，一个能够通过加密手段确保软件供应链完整性的框架。in-toto赋予最终用户能力，可以从项目开始到部署过程中验证软件的供应链。我们展示了in-toto在30个影响数亿用户的软件供应链妥协事件中的有效性，并展示了in-toto在云原生、混合云和云不可知应用中的使用情况。in-toto已被整合到被数百万人每天使用的产品和开源项目中。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/torres-arias](https://www.usenix.org/conference/usenixsecurity19/presentation/torres-arias)
- **PDF:** [https://www.usenix.org/system/files/sec19-torres-arias.pdf](https://www.usenix.org/system/files/sec19-torres-arias.pdf)
## IODINE: Verifying Constant-Time Execution of Hardware.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#iodine-verifying-constant-time-execution-of-hardware) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#iodine-verifying-constant-time-execution-of-hardware)**
### 作者
* Klaus v. Gleissenthall, University of California, San Diego
* Rami Gökhan Kıcı, University of California, San Diego
* Deian Stefan, University of California, San Diego
* Ranjit Jhala, University of California, San Diego
### 摘要
> 为了保证安全，加密算法关键依赖底层硬件，以避免通过时间侧信道意外泄露秘密。不幸的是，由于其复杂的快速路径和优化，这种时序信道在现代硬件中无处不在。一个避免时序漏洞的有希望的方法是设计并验证一种硬件设计在恒定时间内没有时序变化的条件。在本文中，我们提出了IODINE：一种准确的时钟、恒定时间的方法来消除硬件中的时序侧信道。IODINE成功地在几秒钟内验证了各种开源硬件设计，并且开发人员付出了很少的工作量。IODINE还发现了两个恒定时间违规行为：一个在浮点单元中，另一个在RSA加密模块中。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/von-gleissenthall](https://www.usenix.org/conference/usenixsecurity19/presentation/von-gleissenthall)
- **PDF:** [https://www.usenix.org/system/files/sec19-gleissenthall.pdf](https://www.usenix.org/system/files/sec19-gleissenthall.pdf)
## VRASED: A Verified Hardware/Software Co-Design for Remote Attestation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#vrased-a-verified-hardware-software-co-design-for-remote-attestation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#vrased-a-verified-hardware-software-co-design-for-remote-attestation)**
### 作者
* Ivan De Oliveira Nunes, University of California, Irvine
* Karim Eldefrawy, SRI International
* Norrathep Rattanavipanon, University of California, Irvine
* Michael Steiner, Intel
* Gene Tsudik, University of California, Irvine
### 摘要
> 远程验真（RA）是一种独特的安全服务，允许可信验证器（Vrf）测量不可信远程证明者（Prv）的软件状态。如果正确实施，RA允许Vrf远程检测Prv是否处于非法或被入侵状态。虽然已经探索了几种RA方法（包括基于硬件、基于软件和混合型），并且提出了许多具体方法，但对于形式验证却付出了相对较少的关注。尤其是迄今为止，没有任何RA设计和实现受到宣称的安全性质的形式验证。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们通过设计和验证一种被称为VRASED的架构迈出了形式验证RA的第一步：可验证的简单嵌入式设备远程验真。VRASED实例化了一种旨在面向低端嵌入式系统，例如简单物联网设备的混合（硬件/软件）RA协同设计。VRASED提供了与基于硬件的方法相当的安全级别，同时依靠软件来最小化额外的硬件成本。由于安全性质必须由硬件和软件共同保证，验证是一项具有挑战性的任务，在RA的背景下此前尚未尝试过。我们相信VRASED是第一个经过形式验证的RA方案。据我们所知，这也是首个对任何安全服务的硬件/软件实现进行形式验证。为了展示VRASED的实用性和低开销，我们在一台商品平台（TI MSP430）上实例化并评估了它。VRASED已经在Basys3 Artix-7 FPGA上进行了部署，并且其实现是公开可用的。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/de-oliveira-nunes](https://www.usenix.org/conference/usenixsecurity19/presentation/de-oliveira-nunes)
- **PDF:** [https://www.usenix.org/system/files/sec19-nunes.pdf](https://www.usenix.org/system/files/sec19-nunes.pdf)
## Mobile Private Contact Discovery at Scale.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#mobile-private-contact-discovery-at-scale) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#mobile-private-contact-discovery-at-scale)**
### 作者
* Daniel Kales, Graz University of Technology
* Christian Rechberger, Graz University of Technology
* Thomas Schneider, TU Darmstadt
* Matthias Senker, TU Darmstadt
* Christian Weinert, TU Darmstadt
### 摘要
> 移动通信软件（如WhatsApp）通过将用户的整个通讯录上传至服务提供商来进行联系人发现。这使得服务提供商能够确定用户的哪些联系人已经注册了该消息服务。然而，这种程序存在显著的隐私风险和法律挑战。我们发现，即使是注重隐私的通信软件目前也没有部署合适的机制来进行私密的联系人发现。
> 
> 
> 
> 
> 
> 
> 
> 解决这个问题最有希望的方法是私密集合交集（Private Set Intersection，PSI）协议。然而，即使在假设客户端诚实执行协议的弱安全模型下，之前的协议和实施方式在大规模使用时也不够实用。这是因为它们具有很高的计算和/或通信复杂性，并且对移动设备的优化不足。在我们的工作中，通过显著改进Kiss等人的两个有前景的协议（PoPETS'17）并允许恶意客户端，我们消除了大规模全球部署的大部分障碍。
> 
> 
> 
> 
> 
> 
> 
> 具体来说，我们提出了新颖的预计算技术，用于相关的遗忘传输（将在线通信减少2倍），Cuckoo过滤器的压缩（压缩比为70%），以及小4.3倍的Cuckoo过滤器更新。在通过电路混淆实现遗忘PRF评估的协议中，我们用LowMC的一个变种（Albrecht等人，EUROCRYPT'15）代替AES作为评估的PRF，并确定了其最优参数，从而将通信减少8.2倍。此外，我们使用C/C++在具有安全性对抗恶意客户端的情况下实现了两个协议，并利用大多数最新智能手机中可用的ARM密码扩展功能。与之前的智能手机实现相比，这将电路评估的性能提高了1000倍。我们最快协议的在线阶段只需要在真实WiFi连接上测量的2.92秒（在LTE上为6.53秒），就可以将1024个客户端联系人与拥有228个条目的大规模数据库进行匹配。作为概念验证，我们将我们的协议集成到开源通信软件Signal的客户端应用程序中。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/kales](https://www.usenix.org/conference/usenixsecurity19/presentation/kales)
- **PDF:** [https://www.usenix.org/system/files/sec19-kales.pdf](https://www.usenix.org/system/files/sec19-kales.pdf)
## EverParse: Verified Secure Zero-Copy Parsers for Authenticated Message Formats.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#everparse-verified-secure-zero-copy-parsers-for-authenticated-message-formats) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#everparse-verified-secure-zero-copy-parsers-for-authenticated-message-formats)**
### 作者
* Tahina Ramanan, Microsoft Research
* ro, Microsoft Research
* Antoine Delignat-Lavaud, Microsoft Research
* Cédric Fournet, Microsoft Research
* Nikhil Swamy, Microsoft Research
* Tej Chajed, MIT
* Nadim Kobeissi, Inria Paris
* Jonathan Protzenko, Microsoft Research
### 摘要
> 我们提出了EverParse，一个从标签-长度-值二进制消息格式描述生成解析器和序列化器的框架。生成的代码经过验证，可以确保安全（无溢出、无使用后释放）、正确（解析是序列化的逆过程）和不可篡改（每个消息都具有唯一的二进制表示）。这些保证是加密消息认证的安全基础，并且使得测试可以集中在互操作性和性能问题上。
> 
> 
> 
> 
> 
> 
> 
> EverParse包含两个部分：LowParse，这是一个用F*编写的解析器组合子库及其形式化属性；以及QuackyDucky，一个从RFC消息格式的领域特定语言编译为调用LowParse的低级别F*代码的编译器。尽管LowParse已经经过完全验证，但我们没有形式化输入语言的语义，并将QuackyDucky保持在可信计算基中之外。相反，它还输出一个正式的消息规范，并且F*会自动根据这个规范验证我们的实现。
> 
> 
> 
> 
> 
> 
> 
> EverParse产生了高效的零拷贝实现，同时在F*和C中都可以使用。我们通过完全实现传输层安全标准及其扩展的消息格式（TLS 1.0-1.3，293个数据类型）并将其集成到miTLS（TLS的F*实现）中来评估它的实际应用。我们通过实现比特币块和交易格式以及PKCS#1 RSA签名的ASN.1 DER有效负载展示了它的通用性。我们将它们集成到C应用程序中并测量运行时性能，显示出相对于手写库的显着提升。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/delignat-lavaud](https://www.usenix.org/conference/usenixsecurity19/presentation/delignat-lavaud)
- **PDF:** [https://www.usenix.org/system/files/sec19-ramananandro_0.pdf](https://www.usenix.org/system/files/sec19-ramananandro_0.pdf)
## Blind Bernoulli Trials: A Noninteractive Protocol For Hidden-Weight Coin Flips.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#blind-bernoulli-trials-a-noninteractive-protocol-for-hidden-weight-coin-flips) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#blind-bernoulli-trials-a-noninteractive-protocol-for-hidden-weight-coin-flips)**
### 作者
* R. Joseph Connor, University of Tennessee
* Max Schuchard, University of Tennessee
### 摘要
> 我们引入了“盲伯努利试验”的概念，这是一种非交互协议，允许一组远程、断开连接的用户根据发送者定义的概率p，分别计算出一个随机比特，并确保没有接收者能够获得关于p的更多信息。我们通过讨论安全分布式系统中的几个可能应用来解释这个问题的动机。然后，我们从正确性和安全性的角度对问题进行了正式定义，并探讨了使用现有的密码学基元的可能解决方案。我们在标准模型中证明了一种高效解决方案的安全性。最后，我们实现了这个解决方案，并给出了使用当前硬件的性能结果，表明它是可行的。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/connor](https://www.usenix.org/conference/usenixsecurity19/presentation/connor)
- **PDF:** [https://www.usenix.org/system/files/sec19-connor.pdf](https://www.usenix.org/system/files/sec19-connor.pdf)
## XONN: XNOR-based Oblivious Deep Neural Network Inference.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#xonn-xnor-based-oblivious-deep-neural-network-inference) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#xonn-xnor-based-oblivious-deep-neural-network-inference)**
### 作者
* M. Sadegh Riazi, UC San Diego
* Mohammad Samragh, UC San Diego
* Hao Chen, Microsoft Research
* Kim Laine, Microsoft Research
* Kristin Lauter, Microsoft Research
* Farinaz Koushanfar, UC San Diego
### 摘要
> 深度学习的进步使得云服务器能够为客户提供推理即服务。在这种情况下，客户将原始数据发送到服务器上运行深度学习模型，并将结果发送回来。这种设置中的一个挑战是确保客户敏感数据的隐私保护。无意识推理是在客户端上运行神经网络的任务，而不向服务器透露输入或结果。本文介绍了XONN（发音为/ZAn/），这是一种基于Yao的混淆电路（GC）协议的全新端到端框架，它在概念和实际实现上对无意识推理进行了范式转变。在XONN中，深度学习模型的昂贵矩阵乘法运算被GC中几乎免费的XNOR运算所取代。我们进一步提供了一种全新的算法，定制神经网络，使得GC协议的运行时间最小化，同时不损失推理精度。
> 
> 
> 
> 
> 
> 
> 
> 我们为XONN设计了一个用户友好的高级API，可以以前所未有的抽象程度表达深度学习模型的架构。我们还提供了一个编译器，将高级Python（即Keras）的模型描述翻译为XONN的模型描述。在各种神经网络架构上进行了大量的概念验证评估，结果显示XONN在性能上超过了诸如Gazelle（USENIX Security Symposium'18）7倍，MiniONN（ACM CCS'17）93倍和SecureML（IEEE S&P'17）37倍等先前的方法。现有的最先进框架对于神经网络的每一层都需要客户端和服务器之间的一轮交互，而XONN在模型中的任意层数上只需要一个常数轮的交互。 XONN是第一个在具有多达21层的Fitnet架构上执行无意识推理的方法，相较于现有最先进技术而言，具有新的可伸缩性水平。此外，我们还在四个数据集上评估XONN进行保护隐私的医学诊断，这些数据集包括乳腺癌、糖尿病、肝病和疟疾。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/riazi](https://www.usenix.org/conference/usenixsecurity19/presentation/riazi)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_riazi_prepub.pdf](https://www.usenix.org/system/files/sec19fall_riazi_prepub.pdf)
## JEDI: Many-to-Many End-to-End Encryption and Key Delegation for IoT.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#jedi-many-to-many-end-to-end-encryption-and-key-delegation-for-iot) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#jedi-many-to-many-end-to-end-encryption-and-key-delegation-for-iot)**
### 作者
* Sam Kumar, University of California, Berkeley
* Yuncong Hu, University of California, Berkeley
* Michael P Andersen, University of California, Berkeley
* Raluca Ada Popa, University of California, Berkeley
* David E. Culler, University of California, Berkeley
### 摘要
> 随着未来十年物联网（IoT）的出现，开发用于物联网设备的安全通信至关重要。对于大规模物联网系统（如智能建筑或智能城市）实现端到端加密是具有挑战性的，因为通常多个主体通过中介来间接交互，这意味着消息的接收方事先无法确定。本文提出了JEDI（物联网连接加密与授权）一种物联网的多对多端到端加密协议。JEDI在符合IoT系统的分离通信模型的同时，对消息进行端到端加密和签名。JEDI的密钥支持数据的过期和细粒度访问，这在IoT中很常见。此外，JEDI允许主体将其密钥授权或限制过期时间或范围，从而授予其他主体对数据的访问权限，并以可扩展的分布式方式管理访问控制。通过仔细的协议设计和实现，JEDI可以运行在包括CPU、内存和能耗受限的超低功耗嵌入式传感器在内的物联网设备范围内。我们将JEDI应用于现有的物联网消息系统，并证明其开销适度。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/kumar-sam](https://www.usenix.org/conference/usenixsecurity19/presentation/kumar-sam)
- **PDF:** [https://www.usenix.org/system/files/sec19-kumar-sam.pdf](https://www.usenix.org/system/files/sec19-kumar-sam.pdf)
## Birthday, Name and Bifacial-security: Understanding Passwords of Chinese Web Users.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#birthday-name-and-bifacial-security-understanding-passwords-of-chinese-web-users) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#birthday-name-and-bifacial-security-understanding-passwords-of-chinese-web-users)**
### 作者
* Ding Wang, Peking University
* Ping Wang, Peking University
* Debiao He, Wuhan University
* Yuan Tian, University of Virginia
### 摘要
> 英语用户选择密码已经受到了很多关注，然而只有少数研究对非英语用户的密码选择进行了研究。本文对7310万个真实的中国网站密码进行了广泛的实证分析，与3320万个英文密码进行了比较。我们突出了中国密码中的一些有趣的结构和语义特征。我们还采用了两种最先进的破解技术来评估这些密码的安全性。特别是，我们的破解结果揭示了中国密码的双面安全性质。在在线猜测攻击方面（即允许猜测次数较少，1∼104次），它们比英文密码更脆弱。但在离线猜测攻击方面（即猜测次数较多，>105次），剩余的中国密码比其英文对应物更强大。这解决了Bonneau（IEEE S&P'12）和Li等人（USENIX Security Symposium'14和IEEE TIFS'16）对中国密码强度的两种相互矛盾的说法。在107次猜测中，我们基于改进的PCFG攻击对中国数据集的成功率为33.2%~49.8%，这表明我们的攻击比现有技术能够破解更多92%至188%的密码。我们还讨论了我们研究结果对密码政策、强度评估和破解的影响。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/wang-ding](https://www.usenix.org/conference/usenixsecurity19/presentation/wang-ding)
- **PDF:** [https://www.usenix.org/system/files/sec19-wang-ding.pdf](https://www.usenix.org/system/files/sec19-wang-ding.pdf)
## Protecting accounts from credential stuffing with password breach alerting.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#protecting-accounts-from-credential-stuffing-with-password-breach-alerting) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#protecting-accounts-from-credential-stuffing-with-password-breach-alerting)**
### 作者
* Kurt Thomas, Google
* Jennifer Pullman, Google
* Kevin Yeo, Google
* Ananth Raghunathan, Google
* Patrick Gage Kelley, Google
* Luca Invernizzi, Google
* Borbala Benko, Google
* Tadek Pietraszek, Google
* Sarvar Patel, Google
* Dan Boneh, Stanford
* Elie Bursztein, Google
### 摘要
> 保护账户免受凭据填充攻击仍然困难，因为存在信息不对称：攻击者可以广泛地获取数十亿条被盗的用户名和密码，而用户和身份提供者对于哪些账户需要修复处于无法获取的状态。在本文中，我们提出了一种隐私保护协议，通过该协议客户端可以查询一个集中的被盗数据库，以确定特定的用户名和密码组合是否被公开泄露，但不会泄露查询的信息。其中，客户端可以是终端用户、密码管理器或身份提供者。为了证明我们的协议的可行性，我们实现了一个云服务，用于调解对超过40亿条被泄露凭据的访问，并实现了一个作为初始客户端的Chrome扩展程序。根据近67万用户和2100万次登录的匿名遥测数据，我们发现网络上1.5%的登录涉及被泄露的凭据。通过向用户提醒这种被泄露的状态，我们的警告中有26%的用户选择更换新密码，且至少与原密码一样强。我们的研究说明了安全、民主化的密码泄露警示凭据可以帮助缓解账户劫持的一方面问题。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/thomas](https://www.usenix.org/conference/usenixsecurity19/presentation/thomas)
- **PDF:** [https://www.usenix.org/system/files/sec19-thomas.pdf](https://www.usenix.org/system/files/sec19-thomas.pdf)
## Probability Model Transforming Encoders Against Encoding Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#probability-model-transforming-encoders-against-encoding-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#probability-model-transforming-encoders-against-encoding-attacks)**
### 作者
* Haibo Cheng, Peking University
* Zhixiong Zheng, Peking University
* Wenting Li, Peking University
* Ping Wang, Peking University
* Chao-Hsien Chu, Pennsylvania State University
### 摘要
> 蜜糖加密（HE）是一种新的加密方案，可以抵抗暴力攻击，即使使用低熵密钥（例如密码）。HE引入了一种分布转换编码器（DTE），用于生成看似合理的错误密钥的诱饵消息。为了描述复杂的消息分布，提出了几种针对特定消息的HE应用，这些应用使用了特别设计的概率模型转换编码器（PMTE），DTE是从概率模型转换而来的。
> 
> 
> 
> 
> 
> 
> 
> 我们提出了对三种典型PMTE方案的攻击。使用简单的机器学习算法，我们提出了一种基因组数据PMTE的分布差异攻击，能够以76.54% - 100.00%的准确率区分真实数据和诱饵数据。接下来，我们提出了一种新型攻击——编码攻击——针对两种密码保险库PMTE，在98.56% - 99.52%的准确率下进行。与分布差异攻击不同，编码攻击不需要任何关于真实消息分布的知识（统计信息）。
> 
> 
> 
> 
> 
> 
> 
> 我们还引入了一个通用的概率模型概念——生成概率模型（GPM），用于形式化概率模型并设计一个通用方法，将任意GPM转换为PMTE。我们证明了我们的PMTE与相应的GPM在信息理论上无法区分。因此，它们可以抵抗编码攻击。对于从现有密码保险库模型转换而来的PMTE，编码攻击的准确度不会超过52.56%，略好于随机猜测攻击（50%准确率）。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/cheng](https://www.usenix.org/conference/usenixsecurity19/presentation/cheng)
- **PDF:** [https://www.usenix.org/system/files/sec19-cheng.pdf](https://www.usenix.org/system/files/sec19-cheng.pdf)
## The Art of The Scam: Demystifying Honeypots in Ethereum Smart Contracts.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-art-of-the-scam-demystifying-honeypots-in-ethereum-smart-contracts) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-art-of-the-scam-demystifying-honeypots-in-ethereum-smart-contracts)**
### 作者
* Christof Ferreira Torres, University of Luxembourg
* Mathis Steichen, University of Luxembourg
* Radu State, University of Luxembourg
### 摘要
> 现代区块链，如以太坊，使得执行所谓的智能合约成为可能 - 这些程序在分散式节点网络上执行。随着智能合约的普及和价值的增加，它们变得更加吸引攻击者的目标。在过去的几年里，攻击者利用了几个智能合约。然而，一种更主动的趋势似乎正在兴起，攻击者不再寻找易受攻击的合约，而是试图通过部署看似易受攻击的合约来引诱受害者落入陷阱。这种新型合约通常被称为蜜罐合约。在本文中，我们首次系统地分析了蜜罐智能合约，调查了它们在以太坊区块链上的普及程度，行为和影响。我们开发了蜜罐技术的分类法，并利用此来构建HoneyBadger - 一种使用符号执行和明确定义的启发式方法来暴露蜜罐的工具。我们对超过200万个智能合约进行了大规模分析，表明我们的工具不仅实现了高精度，而且效率高。我们发现了690个蜜罐智能合约和240个受害者，蜜罐创建者累计获利超过9万美元。我们的手动验证显示，87%的报告合约确实是蜜罐。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/ferreira](https://www.usenix.org/conference/usenixsecurity19/presentation/ferreira)
- **PDF:** [https://www.usenix.org/system/files/sec19-torres.pdf](https://www.usenix.org/system/files/sec19-torres.pdf)
## The Anatomy of a Cryptocurrency Pump-and-Dump Scheme.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-anatomy-of-a-cryptocurrency-pump-and-dump-scheme) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-anatomy-of-a-cryptocurrency-pump-and-dump-scheme)**
### 作者
* Jiahua Xu, École polytechnique fédérale de Lausanne (EPFL)
* Benjamin Livshits, Imperial College London
### 摘要
> 尽管泵和倾销计划吸引了加密货币观察员和监管机构的关注，但本文是对加密货币市场中泵和倾销活动进行详细实证调查的首次尝试。我们对一个最近的泵和倾销事件进行了案例研究，并调查了自2018年6月17日至2019年2月26日期间在Telegram频道中组织的412起泵和倾销活动，发现了与泵和倾销计划相关的加密货币市场模式。然后，我们建立了一个模型，在泵之前预测在加密货币交易所中列出的所有币种的泵的可能性。该模型具有高准确性和鲁棒性，并且可以用于创建一个简单但非常有效的交易策略，我们通过实证证明这个策略可以在两个半月的时间内为小型零售投资带来高达60%的回报。该研究提供了战略性加密货币交易的概念验证，并为机器学习在犯罪检测中的应用提供了启示。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/xu-jiahua](https://www.usenix.org/conference/usenixsecurity19/presentation/xu-jiahua)
- **PDF:** [https://www.usenix.org/system/files/sec19-xu-jiahua_0.pdf](https://www.usenix.org/system/files/sec19-xu-jiahua_0.pdf)
## Inadvertently Making Cyber Criminals Rich: A Comprehensive Study of Cryptojacking Campaigns at Internet Scale.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#inadvertently-making-cyber-criminals-rich-a-comprehensive-study-of-cryptojacking-campaigns-at-internet-scale) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#inadvertently-making-cyber-criminals-rich-a-comprehensive-study-of-cryptojacking-campaigns-at-internet-scale)**
### 作者
* Hugo L.J. Bijmans, Delft University of Technology
* Tim M. Booij, Delft University of Technology
* Christian Doerr, Delft University of Technology
### 摘要
> 自2017年Coinhive发布基于浏览器的加密货币挖掘程序以来，这些挖掘程序的简单使用导致了非法加密货币挖掘在2017年大爆发，并在2018年持续增长。这种通过网站实现盈利的方法吸引了网站所有者以及寻求新的利润途径的犯罪分子。本文对加密挖矿和互联网上的加密挖矿传播进行了两项大型研究。我们发现了204个加密挖矿活动，远超过以往的研究，这表明这些活动在以前的研究中被严重低估。我们发现犯罪分子选择第三方软件（如WordPress）作为传播加密挖矿感染的新方法。通过一种新颖的使用NetFlow数据的方法，我们估计了挖矿应用程序的受欢迎程度，结果显示尽管Coinhive安装基数更大，但CoinImp WebSocket代理在2018年下半年处理的流量明显更多。我们对4900万个随机抽样域进行了爬取，约占互联网的20％，我们得出结论，加密挖掘存在于所有域名的0.011％，而成人内容是受影响的网站最普遍的分类。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/bijmans](https://www.usenix.org/conference/usenixsecurity19/presentation/bijmans)
- **PDF:** [https://www.usenix.org/system/files/sec19-bijmans.pdf](https://www.usenix.org/system/files/sec19-bijmans.pdf)
## Rendered Private: Making GLSL Execution Uniform to Prevent WebGL-based Browser Fingerprinting.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#rendered-private-making-glsl-execution-uniform-to-prevent-webgl-based-browser-fingerprinting) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#rendered-private-making-glsl-execution-uniform-to-prevent-webgl-based-browser-fingerprinting)**
### 作者
* Shujiang Wu, Johns Hopkins University
* Song Li, Johns Hopkins University
* Yinzhi Cao, Johns Hopkins University
* Ningfei Wang, Lehigh University
### 摘要
> 浏览器指纹识别是一种替代基于cookies的追踪方法，它提取客户端特征列表，并将它们组合为目标浏览器的唯一标识符。在所有这些特征中，具有最高熵和更隐秘目的的特征是WebGL任务的渲染，它在不同计算机上同一浏览器的不同安装中产生不同结果，因此可以被视为可指纹识别的特征。
> 
> 
> 
> 
> 
> 
> 
> 基于WebGL的指纹识别很难进行防御，因为客户端浏览器执行的是使用OpenGL Shading Language（GLSL）编写的程序。迄今为止，无论是业界还是研究界，关于GLSL程序的渲染为何会导致结果差异仍然不清楚。因此，所有现有的防御措施，如Tor浏览器采用的措施，只能禁用WebGL，即在功能与隐私之间做出牺牲，以防止基于WebGL的指纹识别。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了一种新颖的系统，称为UNIGL，以重写GLSL程序，并通过现有的WebGL功能支持统一的WebGL渲染过程。特别是，我们是第一个指出在目前基于WebGL的指纹识别中，这种渲染差异是由浮点运算引起的。在意识到原因后，我们设计了UNIGL，重新定义了所有在GLSL程序中显式编写或由WebGL隐式调用的浮点运算，以减轻指纹识别的因素。
> 
> 
> 
> 
> 
> 
> 
> 我们将UNIGL的原型实现为一个开源的浏览器插件（https://www.github.com/unigl/）。我们还创建了一个演示网站（http://test.unigl.org/），即一个现有指纹识别网站的修改版本，直接在服务器端集成我们的插件，以展示UNIGL的有效性。我们使用众包工作者进行的评估表明，UNIGL能够以合理的帧率防止最先进的基于WebGL的指纹识别。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/wu](https://www.usenix.org/conference/usenixsecurity19/presentation/wu)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_wu_prepub.pdf](https://www.usenix.org/system/files/sec19fall_wu_prepub.pdf)
## Site Isolation: Process Separation for Web Sites within the Browser.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#site-isolation-process-separation-for-web-sites-within-the-browser) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#site-isolation-process-separation-for-web-sites-within-the-browser)**
### 作者
* Charles Reis, Google
* Alex, Google
* er Moshchuk, Google
* Nasko Oskov, Google
### 摘要
> 当前的生产网络浏览器是多进程的，但是将不同的网站放置在同一渲染进程中是不足以有效减轻今天网络上存在的威胁的。随着存储在网站上的私人用户数据的普遍存在，受到被入侵的渲染进程带来的风险和能够通过微架构状态泄露数据的短暂执行攻击（如Spectre和Meltdown），在同一进程中呈现来自不同网站的文档已不再安全。在本文中，我们描述了我们成功将站点隔离架构部署到Google Chrome的所有桌面用户中，作为一种对进程范围攻击的缓解措施。站点隔离将每个渲染进程锁定在来自单个站点的文档上，并从每个进程中过滤某些跨站数据。我们克服了性能和兼容性方面的挑战，使生产浏览器适应了这种新的架构。我们发现，尽管存在当前的限制，但这种架构提供了对受到入侵的渲染进程和同一进程短暂执行攻击的最佳保护路径。我们的性能结果表明，可以在足够保持与现有Web内容兼容性的情况下部署这种隔离级别是可行的。最后，我们讨论了未来的发展方向以及如何解决站点隔离目前存在的限制。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/reis](https://www.usenix.org/conference/usenixsecurity19/presentation/reis)
- **PDF:** [https://www.usenix.org/system/files/sec19-reis.pdf](https://www.usenix.org/system/files/sec19-reis.pdf)
## Everyone is Different: Client-side Diversification for Defending Against Extension Fingerprinting.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#everyone-is-different-client-side-diversification-for-defending-against-extension-fingerprinting) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#everyone-is-different-client-side-diversification-for-defending-against-extension-fingerprinting)**
### 作者
* Erik Trickel, Arizona State University
* Oleksii Starov, Stony Brook University
* Alex, North Carolina State University
* ros Kapravelos, North Carolina State University
* Nick Nikiforakis, Stony Brook University
* Adam Doupé, Arizona State University
### 摘要
> 浏览器指纹识别是指从用户的浏览器中提取属性，将其组合成接近唯一的指纹。这些指纹可以用于在不需要使用cookie或其他具有状态标识符的情况下重新识别用户。浏览器扩展增强了客户端浏览器体验；然而，先前的研究表明它们的网站修改是可识别的，并且可以用来推断用户的敏感信息。
> 
> 
> 
> 
> 
> 
> 
> 本文介绍了CloakX，第一个在不需要修改浏览器或要求扩展开发人员修改代码的情况下工作的客户端反指纹识别对策。CloakX使用客户端分散技术来防止使用锚点（由任何网页直接访问的文物组成的指纹）进行扩展检测，并降低使用结构指纹（由扩展行为构建的指纹）进行扩展检测的准确性。尽管浏览器扩展的复杂性，CloakX通过使用静态和动态程序分析自动将客户端分散技术纳入扩展中，并保持等效功能。我们使用大规模自动分析和深入的手动测试评估了CloakX在18,937个扩展上的有效性。我们进行了实验来测试CloakX启用的扩展的功能等效性、可检测性和性能。除了扩展检测，我们还证明了在浏览器扩展的后期定制中，通过对客户端的修改是一个可行的方法。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/trickel](https://www.usenix.org/conference/usenixsecurity19/presentation/trickel)
- **PDF:** [https://www.usenix.org/system/files/sec19-trickel.pdf](https://www.usenix.org/system/files/sec19-trickel.pdf)
## Less is More: Quantifying the Security Benefits of Debloating Web Applications.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#less-is-more-quantifying-the-security-benefits-of-debloating-web-applications) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#less-is-more-quantifying-the-security-benefits-of-debloating-web-applications)**
### 作者
* Babak Amin Azad, Stony Brook University
* Pierre Laperdrix, Stony Brook University
* Nick Nikiforakis, Stony Brook University
### 摘要
> 随着软件日益复杂，其攻击面也在扩大，使得可以利用各种漏洞进行攻击。Web应用程序也不例外，因为现代HTML5标准和JavaScript的不断增强能力被用于构建功能丰富的Web应用程序，常常取代传统的桌面应用程序的需求。处理这种增加的复杂性的一种可能方法是通过软件去除过程，即不仅删除死代码，还删除特定用户不需要的代码。尽管软件去除已经成功应用于操作系统、库和编译程序，但它在Web应用程序上的适用性尚未得到研究。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们首次提出了对去除Web应用程序的安全益处的分析。我们主要关注四个流行的PHP应用程序，并对其进行动态运行，以获取有关由客户端请求引起的服务器端代码的信息。我们评估了两种不同的去除策略（文件级别的去除和函数级别的去除），并且我们表明我们可以生成比原始版本小46％且具有一半原始圈复杂度的功能Web应用程序。此外，我们的结果表明，去除过程可以删除与数十个历史漏洞相关的代码，并通过删除不必要的外部软件包和可滥用的PHP小工具来进一步减小Web应用程序的攻击面。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/azad](https://www.usenix.org/conference/usenixsecurity19/presentation/azad)
- **PDF:** [https://www.usenix.org/system/files/sec19-azad.pdf](https://www.usenix.org/system/files/sec19-azad.pdf)
## The Web's Identity Crisis: Understanding the Effectiveness of Website Identity Indicators.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-webs-identity-crisis-understanding-the-effectiveness-of-website-identity-indicators) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#the-webs-identity-crisis-understanding-the-effectiveness-of-website-identity-indicators)**
### 作者
* Christopher Thompson, Google
* Martin Shelton, Google
* Emily Stark, Google
* Maximilian Walker, Google
* Emily Schechter, Google
* Adrienne Porter Felt, Google
### 摘要
> 用户必须了解他们正在访问的网站的身份，以便做出信任决策。Web浏览器通过URL和HTTPS证书来指示网站身份，但用户必须理解并采取相应的行动，以使这些指示具备效力。在这篇论文中，我们探讨了浏览器身份指示对用户行为和理解的影响。首先，我们提出了一个大规模的实地实验，测量了HTTPS扩展验证（EV）证书界面对用户行为的影响。我们的实验比以往任何对EV指示的研究都要大很多个数量级，且是首次在自然场景下研究EV指示。我们发现，用户行为的大多数指标不受其移除的影响，这证明EV指示在其当前形式下价值有限。其次，我们进行了三个实验性设计调查，了解用户对登录页面身份指示的界面变化的感知，包括Chrome和Safari中的EV界面和Chrome中的URL格式设计。在对浏览器的EV和URL格式进行了14次迭代后，没有任何干预明显影响了用户对登录页面安全性或身份的理解。在我们实验结果的基础上，我们提出了构建更有效的网站身份机制的建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/thompson](https://www.usenix.org/conference/usenixsecurity19/presentation/thompson)
- **PDF:** [https://www.usenix.org/system/files/sec19-thompson.pdf](https://www.usenix.org/system/files/sec19-thompson.pdf)
## RAZOR: A Framework for Post-deployment Software Debloating.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#razor-a-framework-for-post-deployment-software-debloating) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#razor-a-framework-for-post-deployment-software-debloating)**
### 作者
* Chenxiong Qian, Georgia Institute of Technology
* Hong Hu, Georgia Institute of Technology
* Mansour Alharthi, Georgia Institute of Technology
* Pak Ho Chung, Georgia Institute of Technology
* Taesoo Kim, Georgia Institute of Technology
* Wenke Lee, Georgia Institute of Technology
### 摘要
> 商品软件通常包括广泛用户群体所需的功能。然而，每个个体用户通常只需要其中一部分支持的功能。臃肿的代码不仅阻碍了最佳执行，还导致了更大的攻击面。最近的研究探索了程序瘦身作为这个问题的一种新兴解决方案。不幸的是，现有的作品需要程序源代码，限制了它们的可部署性。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了一个实用的瘦身框架RAZOR，它可以对部署的二进制文件进行代码缩减。根据用户的规定，我们的工具定制了二进制代码，生成了一个具有最小代码大小的功能程序。RAZOR不仅支持给定的测试用例，还采用了几种控制流启发式方法来推断出必要的辅助代码，以支持用户期望的功能。我们已经在常用基准测试和实际应用程序上评估了RAZOR，包括网络浏览器FireFox和闭源PDF阅读器FoxitReader。结果显示，RAZOR能够从臃肿的二进制代码中减少70%以上。它生成的功能程序不会引入新的安全问题。因此，RAZOR是一个实用的用于瘦身现实世界程序的框架。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/qian](https://www.usenix.org/conference/usenixsecurity19/presentation/qian)
- **PDF:** [https://www.usenix.org/system/files/sec19-qian.pdf](https://www.usenix.org/system/files/sec19-qian.pdf)
## Back to the Whiteboard: a Principled Approach for the Assessment and Design of Memory Forensic Techniques.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#back-to-the-whiteboard-a-principled-approach-for-the-assessment-and-design-of-memory-forensic-techniques) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#back-to-the-whiteboard-a-principled-approach-for-the-assessment-and-design-of-memory-forensic-techniques)**
### 作者
* Fabio Pagani, EURECOM
* Davide Balzarotti, EURECOM
### 摘要
> 今天，内存分析在计算机取证中起着基础性作用，是一个非常活跃的研究领域。然而，该领域仍然主要由人工专家选择的自定义规则和启发式方法驱动。这些规则描述了如何克服语义差距，将高级结构与物理内存转储中包含的个别字节关联起来。然后，通过跟随指针遍历这些结构，循环重复这个过程，直到找到所需信息并从内存图像中提取出来。
> 
> 
> 
> 
> 
> 
> 
> 这种方法的一个基本问题是我们无法测量这些启发式方法的性能如何，在什么情况下工作得很好，在逃避或错误方面有多容易，以及在不同版本的操作系统内核上稳定性如何。此外，如果没有一种方法来衡量给定启发式方法的质量和效果，就无法将一种方法与其他方法进行比较。如果一个工具采用一种特定的启发式方法来列出与程序相关联的套接字，我们如何知道这是唯一可能的提取这些信息的方法？也许还有其他更好的解决方案存在，只等待人类分析师来“发现”。
> 
> 
> 
> 
> 
> 
> 
> 出于这个原因，我们认为需要重新审视内存取证的基础。在本文中，我们提出了一个框架和一组度量指标，可以用作评估现有方法的基础，了解它们的特点和局限性，并以科学的方式提出新技术。现代操作系统的内存是一个非常庞大且非常复杂的相互连接的对象网络。因此，我们认为自动化算法而不是人的直觉应该在评估和设计未来的内存取证技术方面发挥基础性作用。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/pagani](https://www.usenix.org/conference/usenixsecurity19/presentation/pagani)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_pagani_prepub.pdf](https://www.usenix.org/system/files/sec19fall_pagani_prepub.pdf)
## Detecting Missing-Check Bugs via Semantic- and Context-Aware Criticalness and Constraints Inferences.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#detecting-missing-check-bugs-via-semantic-and-context-aware-criticalness-and-constraints-inferences) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#detecting-missing-check-bugs-via-semantic-and-context-aware-criticalness-and-constraints-inferences)**
### 作者
* Kangjie Lu, University of Minnesota
* Aditya Pakki, University of Minnesota
* Qiushi Wu, University of Minnesota
### 摘要
> 缺少安全检查是软件程序中一类语义错误的漏洞，其中错误的执行状态没有得到验证。缺少检查的错误在操作系统内核中特别常见，因为它们经常与外部不受信任的用户空间和硬件进行交互，并执行容易出错的计算。缺少检查的错误可能导致各种严重的安全后果，包括权限绕过、越界访问和系统崩溃。尽管缺少检查的错误很常见且严重，但只有少数研究工作尝试检测它们，这可能是由于检测中固有的挑战——变量是否需要安全检查取决于其语义、上下文和开发人员逻辑，并且理解它们是一个困难的问题。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了CRIX，一种用于在操作系统内核中检测缺少检查错误的系统。CRIX可以通过一种跨过程的、语义和上下文感知的分析方法，可伸缩且精确地评估关键变量是否缺少任何安全检查。特别是，CRIX通过建模和交叉检查关键变量的条件语句的语义，在其相应片段的关键性之间推断出它们的关键性，从而能够有效地检测缺少检查的错误。评估结果表明，CRIX以相对较低的误报率发现了缺少检查的错误。使用CRIX，我们在Linux内核中发现了278个可以引起安全问题的新的缺少检查错误。我们为所有这些错误提交了补丁；Linux维护人员接受了其中的151个。这些有希望的结果表明，缺少检查的错误是常见的，而且CRIX在检测操作系统内核中的缺少检查错误方面是有效和可伸缩的。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/lu](https://www.usenix.org/conference/usenixsecurity19/presentation/lu)
- **PDF:** [https://www.usenix.org/system/files/sec19-lu.pdf](https://www.usenix.org/system/files/sec19-lu.pdf)
## DEEPVSA: Facilitating Value-set Analysis with Deep Learning for Postmortem Program Analysis.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#deepvsa-facilitating-value-set-analysis-with-deep-learning-for-postmortem-program-analysis) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#deepvsa-facilitating-value-set-analysis-with-deep-learning-for-postmortem-program-analysis)**
### 作者
* Wenbo Guo, The Pennsylvania State University
* Dongliang Mu, The Pennsylvania State University
* Xinyu Xing, The Pennsylvania State University
* Min Du, University of California, Berkeley
* Dawn Song, University of California, Berkeley
### 摘要
> 价值集分析（VSA）是一种最强大的二进制分析工具之一，已广泛应用于许多用例，从验证软件属性（如变量范围分析）到识别软件漏洞（如缓冲区溢出检测）。然而，在后置程序分析的上下文中使用它来促进数据流分析时，它在处理内存别名识别方面能力不足。从技术上讲，这是因为VSA需要通过控制流的上下文来推断内存引用，但运行程序的意外终止会留下不完整的控制流信息，使内存别名分析无法获得线索。
> 
> 
> 
> 
> 
> 
> 
> 为了解决这个问题，我们提出了一种新的技术方法。在高级别上，该方法首先采用一层指令嵌入和一个双向序列到序列神经网络，以学习与内存区域访问相关的机器码模式。然后，它利用该网络推断VSA无法识别的内存区域。由于对不同区域的内存引用自然表示非别名关系，所提出的神经网络架构可以促进VSA提高别名分析能力。与以前利用深度学习进行其他二进制分析任务的研究不同，本文提出的神经网络在本质上是新颖的。我们引入了一个新的神经网络架构，可以捕捉指令之间和内部的数据依赖关系。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们将深度神经架构实现为DEEPVSA，一种神经网络辅助的别名分析工具。为了展示这个工具的实用性，我们使用它来分析 Offensive Security Exploit Database 中对应的40个内存破坏漏洞导致的软件崩溃情况。我们表明，DEEPVSA可以显著提高VSA在分析内存别名方面的能力，从而提升安全分析人员确定软件崩溃根本原因的能力。此外，我们证明我们提出的神经网络优于广泛应用于其他二进制分析任务中的最先进的神经架构。最后但同样重要的是，我们表明 DEEPVSA 在执行别名分析时几乎没有误报情况。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/guo](https://www.usenix.org/conference/usenixsecurity19/presentation/guo)
- **PDF:** [https://www.usenix.org/system/files/sec19-guo.pdf](https://www.usenix.org/system/files/sec19-guo.pdf)
## CONFIRM: Evaluating Compatibility and Relevance of Control-flow Integrity Protections for Modern Software.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#confirm-evaluating-compatibility-and-relevance-of-control-flow-integrity-protections-for-modern-software) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#confirm-evaluating-compatibility-and-relevance-of-control-flow-integrity-protections-for-modern-software)**
### 作者
* Xiaoyang Xu, University of Texas at Dallas
* Masoud Ghaffarinia, University of Texas at Dallas
* Wenhao Wang, University of Texas at Dallas
* Kevin W. Hamlen, University of Texas at Dallas
* Zhiqiang Lin, Ohio State University
### 摘要
> CONFIRM（控制流完整性相关度度量）是一种新的评估方法和微基准套件，用于评估控制流完整性（CFI）保护的兼容性、适用性和相关性，以保护软件的预期语义免受滥用。尽管CFI已经成为保护某些类别软件免受代码重用攻击的重要手段，并且持续通过研究进行改进，但其保护多样化、主流软件产品的预期程序功能（语义透明性）的能力，在文献中没有得到充分研究。这部分是因为尽管CFI解决方案在性能和安全性方面进行评估，但仍然缺乏评估兼容性的标准方法。因此，研究人员通常不得不使用插曲性评估，包括对具有有限样式多样性（例如GNU Coreutils）的同质化软件集合或对不代表大型主流软件产品的有限代码特性的CPU基准（如SPEC）进行测试。
> 
> 
> 
> 
> 
> 
> 
> 使用CONFIRM重新评估CFI解决方案揭示了保护许多大类软件产品与CFI相关的困难问题，包括市场主导操作系统（例如Windows）的软件以及使用特定编码习语（例如事件驱动回调和异常处理）的代码。据估计，约47％兼容性影响较大的CFI相关代码特性在现有的CFI算法中仍然得不到完全支持，或者得到的控制方式较为弱化，无法解决现有威胁（例如返回导向编程攻击）。对这些待解决的问题的讨论突出了未来研究必须解决的问题，以弥合CFI理论和实践之间的重要差距。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/xu-xiaoyang](https://www.usenix.org/conference/usenixsecurity19/presentation/xu-xiaoyang)
- **PDF:** [https://www.usenix.org/system/files/sec19-xu-xiaoyang.pdf](https://www.usenix.org/system/files/sec19-xu-xiaoyang.pdf)
## Point Break: A Study of Bandwidth Denial-of-Service Attacks against Tor.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#point-break-a-study-of-bandwidth-denial-of-service-attacks-against-tor) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#point-break-a-study-of-bandwidth-denial-of-service-attacks-against-tor)**
### 作者
* Rob Jansen, U.S. Naval Research Laboratory
* Tavish Vaidya, Georgetown University
* Micah Sherr, Georgetown University
### 摘要
> 随着Tor网络作为保护隐私的在线通信工具的受欢迎程度和重要性日益增长，它越来越成为破坏、审查和攻击的目标。现有的大量研究工作主要关注Tor面临的攻击威胁，包括封锁Tor用户获取信息的攻击（例如通过流量过滤）、识别Tor用户通信内容的攻击（例如通过流量指纹识别）以及去匿名化Tor用户的攻击（例如通过流量相关性）。本文重点研究了相对较少被研究的对Tor的拒绝服务（DoS）攻击威胁，特别是智能利用带宽的DoS攻击，以显著降低Tor网络的性能和可靠性。
> 
> 
> 
> 
> 
> 
> 
> 我们通过实时网络实验和高保真仿真验证了几种带宽DoS攻击的可行性，同时量化了每种攻击的成本和对Tor性能的影响。首先，我们探讨了对Tor最常用的默认桥接点（用于绕过审查）的攻击，并估计淹没这些运行中的桥接点将花费每月17,000美元，并可能将客户端吞吐量降低44%，同时使桥接点维护成本增加一倍以上。其次，我们探索了对TorFlow带宽测量系统的攻击，并估计对所有TorFlow扫描器进行持续攻击将花费每月2,800美元，并将中位客户端下载速率降低80%。第三，我们研究了对Tor自身进行拥塞攻击的可能性，并估计对所有Tor中继节点进行这样的攻击将花费每月1,600美元，并使中位客户端下载时间增加47%。最后，我们分析了与我们的攻击具有相当成本的Sybil DoS攻击和去匿名化攻击的影响效果。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/jansen](https://www.usenix.org/conference/usenixsecurity19/presentation/jansen)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_jansen_prepub.pdf](https://www.usenix.org/system/files/sec19fall_jansen_prepub.pdf)
## No Right to Remain Silent: Isolating Malicious Mixes.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#no-right-to-remain-silent-isolating-malicious-mixes) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#no-right-to-remain-silent-isolating-malicious-mixes)**
### 作者
* Hemi Leibowitz, Bar-Ilan University, IL
* Ania M. Piotrowska, University College London, UK
* George Danezis, University College London, UK
* Amir Herzberg, University of Connecticut, US
### 摘要
> 混合网络是实现网络匿名性和私密消息传递、投票和数据库查找的关键技术。然而，简单的混合网络设计容易受到恶意混合的攻击，这些攻击可能会丢弃或延迟数据包以便进行流量分析攻击。带有可证明鲁棒性的混合网络通过复杂而昂贵的正确洗牌证明来解决这个问题，但却需要承担很大的成本并限制或假设系统的使用条件。我们提出了Miranda，一种高效的混合网络设计，可以减轻恶意混合进行的主动攻击。Miranda不仅可以检测出腐败的混合情况，还可以检测与一对混合相关的错误，而无需检测出这两个混合中的错误一个。每次主动攻击，包括丢弃数据包，都会降低腐败混合的连通性，减弱它们的攻击能力，并最终导致腐败混合的被检测出来。通过实验证明了Miranda的有效性，演示了如何检测恶意混合并及早消除攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/leibowitz](https://www.usenix.org/conference/usenixsecurity19/presentation/leibowitz)
- **PDF:** [https://www.usenix.org/system/files/sec19-leibowitz.pdf](https://www.usenix.org/system/files/sec19-leibowitz.pdf)
## On (The Lack Of) Location Privacy in Crowdsourcing Applications.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#on-the-lack-of-location-privacy-in-crowdsourcing-applications) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#on-the-lack-of-location-privacy-in-crowdsourcing-applications)**
### 作者
* Spyros Boukoros, TU-Darmstadt
* Mathias Humbert, Swiss Data Science Center (ETH Zurich, EPFL)
* Stefan Katzenbeisser, TU-Darmstadt, University of Passau
* Carmela Troncoso, EPFL
### 摘要
> 众包使应用程序开发人员能够以较低成本获益于大量且多样化的数据集。具体而言，移动众包(MCS)利用用户的设备作为传感器执行地理定位数据收集。然而，地理定位数据的收集引发了用户的严重隐私担忧。尽管已经有大量的研究关于位置隐私保护机制(LPPMs)，但MCS开发人员在数据收集或发布方面几乎没有采取任何保护措施。为了理解这种不匹配，我们研究了现有LPPMs在两个移动众包项目的公开数据上的性能。我们的研究结果表明，现有的防护措施要么不适用于MCS环境，要么在保护方面提供很少的帮助。此外，它们对应用程序的效用产生了比文献中预期更大的影响。这是因为现有的LPPMs是为基于位置的服务(LBSs)设计的，而MCS的效用函数依赖于与这些位置相关联的值(例如测量值)。最后，我们概述了可能的研究方向，以促进新的位置隐私解决方案的开发，以适应MCS的需求，确保越来越多的此类应用程序不会危及用户的隐私。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/boukoros](https://www.usenix.org/conference/usenixsecurity19/presentation/boukoros)
- **PDF:** [https://www.usenix.org/system/files/sec19-boukoros.pdf](https://www.usenix.org/system/files/sec19-boukoros.pdf)
## Utility-Optimized Local Differential Privacy Mechanisms for Distribution Estimation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#utility-optimized-local-differential-privacy-mechanisms-for-distribution-estimation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#utility-optimized-local-differential-privacy-mechanisms-for-distribution-estimation)**
### 作者
* Takao Murakami, AIST
* Yusuke Kawamoto, AIST
### 摘要
> 局部差分隐私（LDP）已被广泛研究，用于估计个人数据的统计信息（例如，数据的分布），同时保护用户的隐私。尽管LDP不需要可信第三方，但它认为所有个人数据都同样敏感，导致了过度混淆从而损失了效用。在本文中，我们引入了效用优化的LDP（ULDP）的概念，它为敏感数据提供与LDP相等的隐私保证。我们首先考虑所有用户使用相同混淆机制的情况，并提出了两种提供ULDP的机制：效用优化的随机响应和效用优化的RAPPOR。然后，我们考虑敏感和非敏感数据之间区分可能因用户而异的情况。针对这种情况，我们提出了一个个性化的ULDP机制，利用语义标签估计个人数据的分布，同时保持每个用户的敏感数据保密。我们从理论和实验证明，当存在大量非敏感数据时，我们的机制提供比现有LDP机制更高的效用。我们还展示了当大多数数据是非敏感数据时，在低隐私区域，我们的机制甚至与非私密机制几乎提供相同的效用。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/murakami](https://www.usenix.org/conference/usenixsecurity19/presentation/murakami)
- **PDF:** [https://www.usenix.org/system/files/sec19-murakami.pdf](https://www.usenix.org/system/files/sec19-murakami.pdf)
## Evaluating Differentially Private Machine Learning in Practice.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#evaluating-differentially-private-machine-learning-in-practice) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#evaluating-differentially-private-machine-learning-in-practice)**
### 作者
* Bargav Jayaraman, University of Virginia
* David Evans, University of Virginia
### 摘要
> 差分隐私是一种关于隐私的强大概念，可以用来证明机制在隐私预算ε方面的正式保证，即机制泄露了多少信息。在隐私保护的机器学习中，目标通常是限制模型对个体训练记录的推断能力。然而，隐私预算的校准并不被很好地理解。隐私保护机器学习的实现通常选择较大的ε值，以获得模型的可接受效用，但对此类选择对有意义隐私的影响知之甚少。此外，在使用迭代学习过程的情况下，通常会使用松弛的差分隐私定义，这似乎减少了所需的隐私预算，但会出现隐私和效用之间的权衡，这方面理解甚少。在本文中，我们通过逻辑回归和神经网络模型的实验来量化这些选择对隐私的影响。我们的主要发现是，并不能免费获得隐私——减少改善效用所需噪声的松弛差分隐私定义也增加了测量到的隐私泄露。当前的差分隐私机器学习机制很少在复杂学习任务上提供可接受的效用-隐私权衡：提供有限准确度损失的设置提供很少有效隐私，提供强隐私的设置会导致无用的模型。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/jayaraman](https://www.usenix.org/conference/usenixsecurity19/presentation/jayaraman)
- **PDF:** [https://www.usenix.org/system/files/sec19-jayaraman.pdf](https://www.usenix.org/system/files/sec19-jayaraman.pdf)
## Fuzzification: Anti-Fuzzing Techniques.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#fuzzification-anti-fuzzing-techniques) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#fuzzification-anti-fuzzing-techniques)**
### 作者
* Jinho Jung, Georgia Institute of Technology
* Hong Hu, Georgia Institute of Technology
* David Solodukhin, Georgia Institute of Technology
* Daniel Pagan, Georgia Institute of Technology
* Kyu Hyung Lee, University of Georgia
* Taesoo Kim, Georgia Institute of Technology
### 摘要
> 模糊测试是一种在不了解程序内部结构的情况下快速自动探索程序输入空间的软件测试技术。因此，在软件开发过程中，开发人员通常将模糊测试作为测试集成的一部分。不幸的是，这也意味着这种黑盒和自动化的模糊测试方式对寻找零日漏洞的对手具有吸引力。
> 
> 
> 
> 
> 
> 
> 
> 为了解决这个问题，我们提出了一种称为“模糊化”的新的缓解方法，帮助开发人员保护发布的二进制软件免受能够应用最先进的模糊测试技术的攻击者的攻击。在给定性能预算的情况下，该方法旨在尽可能地干扰对手的模糊测试过程。我们提出了三种“模糊化”技术：1）SpeedBump，将正常执行的减速放大数百倍以适应模糊执行；2）BranchTrap，通过隐藏路径和污染覆盖图来干扰反馈逻辑；3）AntiHybrid, 阻碍污点分析和符号执行。每种技术都设计有最大努力的防御措施，试图阻止对手绕过“模糊化”。
> 
> 
> 
> 
> 
> 
> 
> 我们在流行的模糊测试工具和实际应用程序上进行了评估，结果表明，“模糊化”能够有效地减少发现的路径数量，实际二进制文件减少了70.3％，崩溃数量减少了93.0％，而在普通工作负载下，从LAVA-M数据集中检测到的漏洞数量减少了67.5％。我们讨论了“模糊化”技术在对手分析技术面前的鲁棒性。我们将我们的“模糊化”系统开源，以促进未来的研究。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/jung](https://www.usenix.org/conference/usenixsecurity19/presentation/jung)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_jung_prepub.pdf](https://www.usenix.org/system/files/sec19fall_jung_prepub.pdf)
## AntiFuzz: Impeding Fuzzing Audits of Binary Executables.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#antifuzz-impeding-fuzzing-audits-of-binary-executables) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#antifuzz-impeding-fuzzing-audits-of-binary-executables)**
### 作者
* Emre Güler, Ruhr-Universität Bochum
* Cornelius Aschermann, Ruhr-Universität Bochum
* Ali Abbasi, Ruhr-Universität Bochum
* Thorsten Holz, Ruhr-Universität Bochum
### 摘要
> 计算机安全领域的一般防御策略是提高成功攻击的成本，无论是计算资源还是人工时间。在二进制安全领域，通常使用混淆方法来阻碍逆向工程和寻找软件漏洞。然而，最近自动化漏洞发现的趋势改变了工作方式。如今，使用各种模糊测试工具发现漏洞非常普遍。由于自动化水平和更好的模糊测试策略的不断提高，在许多数百个目标上进行大规模、捕鱼网式的模糊测试变得可行。正如我们所展示的，目前的混淆技术旨在增加人类理解的成本，但对模糊测试的减缓作用不大。本文介绍了几种保护二进制可执行文件免受基于模糊测试、符号/共享执行和污点辅助模糊测试（通常称为混合模糊测试）的自动化漏洞发现方法分析的技术。更具体地说，我们对漏洞发现工具的基本假设进行了系统分析，并针对每个假设制定了一般性对策。请注意，这些技术不是针对特定的模糊测试工具实现，而是针对漏洞发现工具必须依赖的一般性假设。我们的评估表明，这些技术有效地阻碍了模糊测试审计，同时引入了可忽略的性能开销。就像混淆技术增加了寻找漏洞所需的人力工作量一样，我们的技术使基于自动化模糊测试的方法变得无效。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/guler](https://www.usenix.org/conference/usenixsecurity19/presentation/guler)
- **PDF:** [https://www.usenix.org/system/files/sec19fall_guler_prepub.pdf](https://www.usenix.org/system/files/sec19fall_guler_prepub.pdf)
## MOPT: Optimized Mutation Scheduling for Fuzzers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#mopt-optimized-mutation-scheduling-for-fuzzers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#mopt-optimized-mutation-scheduling-for-fuzzers)**
### 作者
* Chenyang Lyu, Zhejiang University
* Shouling Ji, Zhejiang University & Alibaba-Zhejiang University Joint Research Institute of Frontier Technologies
* Chao Zhang, BNRist & INSC, Tsinghua University
* Yuwei Li, Zhejiang University
* Wei-Han Lee, IBM Research
* Yu Song, Zhejiang University
* Raheem Beyah, Georgia Institute of Technology
### 摘要
> 突变基模糊测试是最流行的漏洞发现解决方案之一。生成有趣的测试案例的性能在很大程度上取决于突变调度策略。然而，现有的模糊器通常按照特定分布选择突变运算符，这在一般程序上发现漏洞时效率低下。因此，本文提出了一种新颖的突变调度方案MOPT，使基于突变的模糊器能够更有效地发现漏洞。MOPT利用定制的粒子群优化（PSO）算法找到与模糊效果相关的运算符选择概率分布的最优解，并提供节拍器模糊模式以加快PSO的收敛速度。我们将MOPT应用于现有的模糊器AFL、AFLFast和VUzzer，并分别实现了MOPT-AFL、-AFLFast和-MOPT VUzzer，然后在13个真实世界的开源程序上进行了评估。结果表明，MOPT-AFL相比AFL发现的安全漏洞数量增加了170%，崩溃数量增加了350%。MOPT-AFLFast和MOPT-VUzzer也超越了它们的对应版本。此外，广泛的评估还显示，MOPT提供了良好的合理性、兼容性和稳定性，同时引入了可忽略的成本。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/lyu](https://www.usenix.org/conference/usenixsecurity19/presentation/lyu)
- **PDF:** [https://www.usenix.org/system/files/sec19-lyu.pdf](https://www.usenix.org/system/files/sec19-lyu.pdf)
## EnFuzz: Ensemble Fuzzing with Seed Synchronization among Diverse Fuzzers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#enfuzz-ensemble-fuzzing-with-seed-synchronization-among-diverse-fuzzers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#enfuzz-ensemble-fuzzing-with-seed-synchronization-among-diverse-fuzzers)**
### 作者
* Yuanliang Chen, Tsinghua University
* Yu Jiang, Tsinghua University
* Fuchen Ma, Tsinghua University
* Jie Liang, Tsinghua University
* Mingzhe Wang, Tsinghua University
* Chijin Zhou, Tsinghua University
* Xun Jiao, Villanova University
* Zhuo Su, Tsinghua University
### 摘要
> 模糊测试被广泛用于漏洞检测。有各种不同的模糊器以及不同的模糊策略，它们在各自的目标上表现良好。然而，在实际工业实践中，发现这些设计良好的模糊策略面临着真实应用的复杂性和多样性的挑战。本文系统地研究了一种集合模糊方法。首先，我们以三个启发式准则定义了基本模糊器的多样性：覆盖信息粒度的多样性、输入生成策略的多样性以及种子选择和变异策略的多样性。基于这些启发式准则，我们选择了尽可能多样的最新基本模糊器，并提出了一种基于全局异步和局部同步（GALS）的种子同步机制，以无缝集合这些基本模糊器并获得更好的性能。为了评估，我们基于一些广泛使用的模糊器（如QSYM和FairFuzz）实现了EnFuzz，并在LAVA-M和Google的模糊测试套件上进行了测试，该套件包含了24个广泛使用的真实应用程序。这个实验表明，在相同的资源限制下，这些基本模糊器在不同的应用程序上表现出不同的性能，而EnFuzz在路径覆盖、分支覆盖和漏洞发现方面始终优于其他模糊器。此外，EnFuzz在libpng和libjpeg等多个经过充分模糊测试的项目中发现了60个新漏洞，并分配了44个新CVE编号。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/chen-yuanliang](https://www.usenix.org/conference/usenixsecurity19/presentation/chen-yuanliang)
- **PDF:** [https://www.usenix.org/system/files/sec19-chen-yuanliang.pdf](https://www.usenix.org/system/files/sec19-chen-yuanliang.pdf)
## GRIMOIRE: Synthesizing Structure while Fuzzing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#grimoire-synthesizing-structure-while-fuzzing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202019.md#grimoire-synthesizing-structure-while-fuzzing)**
### 作者
* Tim Blazytko, Ruhr-Universität Bochum
* Cornelius Aschermann, Ruhr-Universität Bochum
* Moritz Schlögel, Ruhr-Universität Bochum
* Ali Abbasi, Ruhr-Universität Bochum
* Sergej Schumilo, Ruhr-Universität Bochum
* Simon Wörner, Ruhr-Universität Bochum
* Thorsten Holz, Ruhr-Universität Bochum
### 摘要
> 在过去的几年中，模糊测试在研究界受到了广泛关注。然而，大部分关注都集中在没有专门解析阶段的程序上。在这种情况下，利用程序的输入结构的模糊测试工具相对于传统模糊测试方法可以实现更高的代码覆盖率。这种覆盖率的提升是通过在应用的输入空间中应用大规模的变异来实现的。然而，这种改进的代价是需要专业领域知识，因为这些模糊测试工具依赖于结构输入规范（例如语法）。语法推断是一种可以自动生成给定程序的语法的技术，可以用来解决这个缺点。这些技术通常在预处理步骤中推断程序的语法，并且可能会错过只有在正常模糊测试过程中才能发现的重要结构。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了GRIMOIRE的设计和实现，它是一种完全自动的基于覆盖率指导的模糊测试工具，可以在没有任何人工干预或预配置的情况下有效测试那些需要高度结构化输入的程序。我们通过在程序的输入空间中进行大规模的变异，并使用类似语法的组合来合成新的高度结构化的输入，从而实现了这一目标，而无需进行任何预处理步骤。我们的评估结果显示，与其他覆盖率指导的模糊测试工具相比，GRIMOIRE在模糊测试具有高度结构化输入的程序时表现更好。此外，它改进了现有的基于语法的覆盖率指导的模糊测试工具。使用GRIMOIRE，我们在现实世界的程序中发现了19个独特的内存损坏漏洞，并获得了11个新的CVE编号。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity19/presentation/blazytko](https://www.usenix.org/conference/usenixsecurity19/presentation/blazytko)
- **PDF:** [https://www.usenix.org/system/files/sec19-blazytko.pdf](https://www.usenix.org/system/files/sec19-blazytko.pdf)
