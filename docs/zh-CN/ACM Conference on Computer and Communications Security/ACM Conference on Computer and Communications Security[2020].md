# ACM Conference on Computer and Communications Security[2020]
## Machine Learning and Security: The Good, The Bad, and The Ugly.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#machine-learning-and-security-the-good-the-bad-and-the-ugly) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#machine-learning-and-security-the-good-the-bad-and-the-ugly)**
### 作者
* Wenke Lee, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 我想要分享一下机器学习和安全之间的相互作用。好的一面是，我们现在拥有了更多的数据、更强大的机器和算法，更重要的是，我们不再需要手动设计特征。机器学习过程现在更加自动化，学习出的模型也更加强大，这是一个积极的反馈循环：更多的数据导致更好的模型，从而导致更多的应用，带来更多的数据。所有安全供应商现在都宣传他们在产品中使用了机器学习。不好的一面是，有更多的未知因素。过去，我们了解我们的安全模型的能力和限制，包括基于机器学习的模型，并且理解如何回避它们。但是像深度神经网络这样的前沿模型并不像决策树等传统模型一样易于理解。当我们不确定一个基于深度学习的安全模型是否正确学习时，我们如何决定是否部署它呢？数据污染变得更容易。在线学习和基于网络的学习使用在运行时收集的数据，通常是从开放环境中收集的。由于这些数据通常是由人类行为产生的，它们可能会被故意污染，例如在误导性宣传中。我们如何让攻击者更难地操纵训练数据呢？丑陋的一面是，攻击者将继续利用机器学习中的漏洞，并使用机器学习自动化他们的攻击。为什么我们不仅仅保护机器学习呢？这与保护我们的程序、系统和网络没有什么不同，所以我们无法做到这一点。我们必须为机器学习的失败做好准备。最终，人类必须参与其中。问题是如何以及何时参与？例如，一个基于机器学习的系统应该向人类呈现哪些信息，人类可以为系统提供哪些输入？

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3424552](https://doi.org/10.1145/3372297.3424552)
## Poking a Hole in the Wall: Efficient Censorship-Resistant Internet Communications by Parasitizing on WebRTC.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#poking-a-hole-in-the-wall-efficient-censorship-resistant-internet-communications-by-parasitizing-on-webrtc) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#poking-a-hole-in-the-wall-efficient-censorship-resistant-internet-communications-by-parasitizing-on-webrtc)**
### 作者
* Diogo Barradas, INESC-ID, Instituto Superior Técnico, Universidade de Lisboa, Lisboa, Portugal
* Nuno Santos, INESC-ID, Instituto Superior Técnico, Universidade de Lisboa, Lisboa, Portugal
* Luís Rodrigues, INESC-ID, Instituto Superior Técnico, Universidade de Lisboa, Lisboa, Portugal
* Vítor Nunes, INESC-ID, Instituto Superior Técnico, Universidade de Lisboa, Lisboa, Portugal
### 摘要
> 许多绕过审查的工具依赖于可信代理，通过将被封锁的互联网内容通过隐蔽通道（例如，通过Skype视频通话）进行隧道传输，使居住在被审查地区的用户能够访问。然而，构建既能提供良好带宽容量以适应互联网用户典型活动，又能抵抗流量分析攻击的工具一直是一个未解决的问题，也是实际采用此类绕过审查工具的一个障碍。我们介绍了Protozoa，这是一种具有高性能隐蔽通道和强大流量分析抵抗能力的绕过审查的隧道工具。为了创建一个隐蔽通道，用户只需通过一个热门的WebRTC流媒体服务（例如Whereby）与位于被审查地区之外的受信任方进行视频通话。然后，Protozoa可以通过WebRTC视频流将来自未修改的用户应用程序（例如Firefox）的所有IP流量进行隧道传输。这是通过钩入WebRTC堆栈并替换编码视频帧数据以成为IP数据包有效载荷来实现的，同时确保WebRTC流的有效载荷保持加密，流的统计特性与任何普通视频通话的统计特性完全相同。这种技术可以提供足够的吞吐量，以支持常见的互联网应用程序，例如网页浏览或大容量数据传输，并且避免被最先进的流量分析攻击所检测到。我们展示了Protozoa能够逃避中国、俄罗斯和印度的国家级审查。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417874](https://doi.org/10.1145/3372297.3417874)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417874](https://dl.acm.org/doi/pdf/10.1145/3372297.3417874)
## Censored Planet: An Internet-wide, Longitudinal Censorship Observatory.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#censored-planet-an-internet-wide-longitudinal-censorship-observatory) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#censored-planet-an-internet-wide-longitudinal-censorship-observatory)**
### 作者
* Ram Sundara Raman, University of Michigan, Ann Arbor, MI, USA
* Prerana Shenoy, University of Michigan, Ann Arbor, MI, USA
* Katharina Kohls, Ruhr University Bochum, Bochum, Germany
* Roya Ensafi, University of Michigan, Ann Arbor, MI, USA
### 摘要
> 远程审查测量技术可以监测全球范围内的互联网可达性。然而，持续操作这些技术需要大量劳动和专业知识以及同步，导致采用有限。在本文中，我们介绍了Censored Planet，一个在线审查测量平台，它收集和分析四种远程测量技术（Augur、卫星/虹膜、Quack和Hyperquack）的部署中获得的测量数据。Censored Planet采用模块化设计，支持对六种互联网协议的同步基线测量以及针对特定国家和网站的定制测量。Censored Planet已经收集并发布了超过218亿个网络观测数据点，持续运行了20个月。Censored Planet通过提供更大规模、更广覆盖和更连续的服务，补充了现有的审查测量平台（如OONI和ICLab）。我们引入了一个新的代表性审查指标，并展示了如何将时间序列分析应用于Censored Planet的长期测量数据，以检测到15个重要的审查事件，其中三分之二以前没有报道过。通过趋势分析，我们发现在100多个国家/地区中存在着越来越多的审查活动，并且我们确定了11个面临越来越多审查的网站类别，包括具有挑衅性的服装、人权问题和新闻媒体。我们希望Censored Planet数据的持续发布有助于抵制不断增加的在线自由限制的蔓延。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417883](https://doi.org/10.1145/3372297.3417883)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417883](https://dl.acm.org/doi/pdf/10.1145/3372297.3417883)
## A Tale of Evil Twins: Adversarial Inputs versus Poisoned Models.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#a-tale-of-evil-twins-adversarial-inputs-versus-poisoned-models) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#a-tale-of-evil-twins-adversarial-inputs-versus-poisoned-models)**
### 作者
* Ren Pang, Pennsylvania State University, State College, PA, USA
* Hua Shen, Pennsylvania State University, State College, PA, USA
* Xinyang Zhang, Pennsylvania State University, State College, PA, USA
* Shouling Ji, Zhejiang University, Hangzhou, UNK, China
* Yevgeniy Vorobeychik, Washington University in St. Louis, St. Louis, MO, USA
* Xiapu Luo, Hong Kong Polytechnic University, Hongkong, UNK, Hong Kong
* Alex Liu, Ant Financia, Hangzhou, UNK, China
* Ting Wang, Pennsylvania State University, State College, PA, USA
### 摘要
> 尽管深度学习系统在各个领域都取得了巨大的成功，但它们天生容易受到两种类型的操纵：对抗性输入——恶意制作的样本，用来欺骗目标深度神经网络(DNN)模型，以及毒化模型——针对预定义输入而被恶意锻造的DNN，这些DNN会在预定义输入上表现出反常行为。虽然之前的研究已经广泛研究了这两种攻击向量，但对它们之间的基本联系仍然了解不足：两种攻击向量之间的动态相互作用是什么？这种相互作用对优化现有攻击有什么影响？对增强攻击有哪些潜在的对策？回答这些关键问题对于评估和减轻在实际环境中部署的DNN的整体漏洞是至关重要的。在这篇论文中，我们通过在统一框架内对这两种攻击向量进行了首次系统研究，朝着这个目标迈出了坚实的一步。具体来说，(i)我们开发了一个新的攻击模型，能够同时优化对抗性输入和毒化模型；(ii)通过分析和实证，我们揭示了这两种攻击向量之间存在着令人感兴趣的"相互强化"效应——利用其中一种攻击向量显著增强了另一种攻击向量的效果；(iii)我们证明了这种效果使得对手在利用同时利用这两种向量的现有攻击(例如后门攻击)时具备了很大的设计余地，比如在各种检测方法下最大化攻击的规避性；(iv)最后，我们讨论了针对这种优化攻击的潜在对策及其技术挑战，并指出了几个有前景的研究方向。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417253](https://doi.org/10.1145/3372297.3417253)
## DeepDyve: Dynamic Verification for Deep Neural Networks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#deepdyve-dynamic-verification-for-deep-neural-networks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#deepdyve-dynamic-verification-for-deep-neural-networks)**
### 作者
* Yu Li, The Chinese University of Hong Kong, Hong Kong, Hong Kong
* Min Li, The Chinese University of Hong Kong, Hong Kong, Hong Kong
* Bo Luo, The Chinese University of Hong Kong, Hong Kong, Hong Kong
* Ye Tian, The Chinese University of Hong Kong, Hong Kong, Hong Kong
* Qiang Xu, The Chinese University of Hong Kong, Hong Kong, Hong Kong
### 摘要
> 深度神经网络（DNN）已成为许多安全关键应用领域的一种核心技术，例如自动驾驶和医学图像分析。然而，DNN系统面临多种威胁，例如对抗性示例攻击和故障注入攻击。虽然已经提出了许多防御方法来对抗恶意制作的输入，但对DNN系统本身（例如参数和计算）中出现的故障的解决方案还远未进行深入研究。在本文中，我们为基于DNN的系统开发了一种新颖且轻量级的容错解决方案，即DeepDyve，它采用预训练神经网络进行动态验证，这些神经网络比原始的DNN简单且更小。实现这种轻量级检查的关键在于较小的神经网络只需要为初始任务产生近似结果，而不需要牺牲太多的故障覆盖率。我们开发了高效和有效的架构和任务探索技术，以在DeepDyve中实现优化的风险/开销平衡。实验结果表明，DeepDyve可以在开销约为10%的情况下减少90%的风险。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423338](https://doi.org/10.1145/3372297.3423338)
## Composite Backdoor Attack for Deep Neural Network by Mixing Existing Benign Features.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#composite-backdoor-attack-for-deep-neural-network-by-mixing-existing-benign-features) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#composite-backdoor-attack-for-deep-neural-network-by-mixing-existing-benign-features)**
### 作者
* Junyu Lin, Nanjing University, Nanjing, China
* Lei Xu, Nanjing University, Nanjing, China
* Yingqi Liu, Purdue University, West Lafayette, IN, USA
* Xiangyu Zhang, Purdue University, West Lafayette, IN, USA
### 摘要
> 随着深度神经网络（DNN）在许多应用中的广泛使用，网络的安全性变得重要起来。预训练的DNN可能含有通过恶意训练注入的后门。这些植入木马的模型在提供常规输入时表现良好，但在输入中带有称为木马触发器的唯一模式时则将错误分类到目标输出标签。最近，提出了各种用于基于DNN的人工智能应用的后门检测和缓解系统。然而，其中许多系统仅限于需要特定修补触发器的后门攻击。在本文中，我们介绍了组合攻击，一种更灵活、更隐秘的后门攻击，它使用由多个标签的现有良性特征组成的木马触发器来躲避后门扫描器的检测。我们展示了带有组合后门的神经网络可以在良性数据上达到与原始版本相当的准确率，并且当输入中存在组合触发器时会发生错误分类。我们在7个不同的任务上进行了实验，结果显示这种攻击构成了严重威胁。我们使用两种最先进的后门扫描器评估了我们的攻击。结果显示，任何一个扫描器都无法检测到注入的后门。我们还详细研究了扫描器为何无效的原因。最后，我们讨论了我们攻击的本质，并提出了可能的防御方法。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423362](https://doi.org/10.1145/3372297.3423362)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3423362](https://dl.acm.org/doi/pdf/10.1145/3372297.3423362)
## PatchScope: Memory Object Centric Patch Diffing.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#patchscope-memory-object-centric-patch-diffing) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#patchscope-memory-object-centric-patch-diffing)**
### 作者
* Lei Zhao, Wuhan University, Wuhan, China
* Yuncong Zhu, Wuhan University, Wuhan, China
* Jiang Ming, University of Texas at Arlington, Arlington, TX, USA
* Yichen Zhang, Wuhan University, Wuhan, China
* Haotian Zhang, University of Texas at Arlington, Arlington, TX, USA
* Heng Yin, University of California, Riverside, Riverside, CA, USA
### 摘要
> 软件打补丁是打击漏洞的最重要机制之一。为了揭示补丁的内部细节，提出了补丁差异分析技术（即补丁差异化）来找出被补丁修复和未修复程序二进制代码之间的差异。鉴于复杂的安全补丁，补丁差分预期不仅能够正确定位补丁更改，还提供足够的解释来理解补丁细节和修复的漏洞。不幸的是，目前没有一种现有的补丁差分技术能够满足这些要求。在本研究中，我们首先对安全补丁的代码变化进行了大规模研究，以更好地了解它们的模式。然后，我们指出了补丁差异化的几个挑战和设计原则。为了解决上述挑战，我们设计了一种动态补丁差分技术PatchScope。我们的技术基于两个关键观察结果：1）程序处理输入的方式揭示了大量的语义信息；2）大多数内存损坏补丁通过更新与输入相关的数据结构的操作来调整对畸形输入的处理。PatchScope的核心是一种新的语义感知程序表示，即内存对象访问序列，它描述了程序如何引用数据结构来操作输入。该表示不仅可以提供简洁的补丁差异，还可以提供丰富的补丁上下文信息，例如输入-补丁关联。这样的信息可以解释补丁差异，并进一步帮助安全分析人员了解补丁细节，定位漏洞根本原因，甚至检测错误的补丁。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423342](https://doi.org/10.1145/3372297.3423342)
## FirmXRay: Detecting Bluetooth Link Layer Vulnerabilities From Bare-Metal Firmware.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#firmxray-detecting-bluetooth-link-layer-vulnerabilities-from-bare-metal-firmware) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#firmxray-detecting-bluetooth-link-layer-vulnerabilities-from-bare-metal-firmware)**
### 作者
* Haohuang Wen, Ohio State University, Columbus, OH, USA
* Zhiqiang Lin, Ohio State University, Columbus, OH, USA
* Yinqian Zhang, Ohio State University, Columbus, OH, USA
### 摘要
> 今天，蓝牙4.0，也被称为低功耗蓝牙（BLE），已广泛应用于许多物联网设备（例如智能锁、智能传感器和可穿戴设备）。然而，BLE设备在广播、配对和消息传输过程中可能存在许多BLE链路层的漏洞。为了直接从裸机固件中检测这些漏洞，我们提出了FirmXRay，这是第一个静态二进制分析工具，包括一套启用技术，包括一种新颖的用于稳健固件反汇编的基址识别算法、精确的数据结构识别和配置值解析。作为概念证明，我们专注于两个领先的SoC供应商（即Nordic和Texas Instruments）的BLE固件，并在Ghidra之上实现了FirmXRay的原型。我们使用基于移动应用程序的方法收集了793个独特的固件（对应538个独特设备）来评估FirmXRay，并且我们的实验证明，98.1%的设备配置了随机静态MAC地址，71.5%的设备采用了“无需确认”配对，98.5%的设备存在不安全的密钥交换。通过这些漏洞，我们展示了对真实BLE设备的身份跟踪、欺骗和窃听攻击。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423344](https://doi.org/10.1145/3372297.3423344)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3423344](https://dl.acm.org/doi/pdf/10.1145/3372297.3423344)
## LadderLeak: Breaking ECDSA with Less than One Bit of Nonce Leakage.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ladderleak-breaking-ecdsa-with-less-than-one-bit-of-nonce-leakage) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ladderleak-breaking-ecdsa-with-less-than-one-bit-of-nonce-leakage)**
### 作者
* Diego F. Aranha, Aarhus University, Aarhus, Denmark
* Felipe Rodrigues Novaes, University of Campinas, Campinas, Brazil
* Akira Takahashi, Aarhus University, Aarhus, Denmark
* Mehdi Tibouchi, NTT Corporation, Tokyo, Japan
* Yuval Yarom, University of Adelaide & Data61, Adelaide, Australia
### 摘要
> 虽然ECDSA是当今最流行的签名方案之一，但它存在许多实施陷阱，特别是由签名算法生成的随机值（称为nonce）的非常敏感性质而导致的。已知任何少量nonce暴露或nonce偏差原则上都可能导致完全密钥恢复：密钥恢复是Boneh和Venkatesan的隐藏数字问题（HNP）的一个特例。这一观察在文献中的许多攻击中已经得到了实际利用，利用了不同具体ECDSA实现中的实施缺陷或侧信道漏洞。然而，到目前为止，大多数攻击都至少依赖于2位nonce偏差（除了80位安全级别的曲线的特殊情况，已知1位偏差的攻击，尽管需要非常多的签名）。在本文中，我们揭示了LadderLeak，一种新颖的侧信道漏洞类别，它存在于ECDSA标量乘法中使用的Montgomery梯子的实现中。特别地，这个漏洞存在于几个最近版本的OpenSSL中。然而，它泄漏的关于nonce的信息不到1位，它只透露了nonce的最高有效位，但概率小于1。利用这样的轻微泄漏在迄今为止的文献中的技术是难以解决的。然而，我们提出了几种理论改进了解决HNP的傅里叶分析方法（最初由Bleichenbacher提出），这使我们能够实际破解在sect163r1和NIST P-192椭圆曲线上实施的LadderLeak易受攻击的ECDSA实现。这样做，我们在对HNP的实际攻击中实现了几个重要的计算记录。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417268](https://doi.org/10.1145/3372297.3417268)
## Security of Streaming Encryption in Google's Tink Library.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#security-of-streaming-encryption-in-googles-tink-library) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#security-of-streaming-encryption-in-googles-tink-library)**
### 作者
* Viet Tung Hoang, Florida State University, Tallahassee, FL, USA
* Yaobin Shen, Shanghai Jiao Tong Univeristy, Shanghai, China
### 摘要
> 我们通过Hoang等人（CRYPTO'15）的基于nonce的在线认证加密框架的扩展版本，分析了谷歌Tink库中流式加密的多用户安全性，以支持随机访问解密。我们展示了Tink在使用随机nonce和基于nonce的密钥派生函数的设计选择确实改进了具体安全边界。然后，我们提出了两种更加抗随机性失败的更好替代方案。此外，我们展示了如何通过AES来高效实现密钥派生函数，而不是像Tink中当前设计依赖HMAC-SHA256。为了实现这一点，我们对Bellare、Krovetz和Rogaway（EUROCRYPT'98）的排列异或构造进行了多用户分析。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417273](https://doi.org/10.1145/3372297.3417273)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417273](https://dl.acm.org/doi/pdf/10.1145/3372297.3417273)
## Cyber-Physical Inconsistency Vulnerability Identification for Safety Checks in Robotic Vehicles.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#cyber-physical-inconsistency-vulnerability-identification-for-safety-checks-in-robotic-vehicles) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#cyber-physical-inconsistency-vulnerability-identification-for-safety-checks-in-robotic-vehicles)**
### 作者
* Hongjun Choi, Purdue University, West Lafayette, IN, USA
* Sayali Kate, Purdue University, West Lafayette, IN, USA
* Yousra Aafer, University of Waterloo, Waterloo, Canada
* Xiangyu Zhang, Purdue University, West Lafayette, IN, USA
* Dongyan Xu, Purdue University, West Lafayette, IN, USA
### 摘要
> 我们提出了一种针对机器人车辆（RVs）的新型漏洞，称为“网络物理不一致性”。这些漏洞针对RVs中的安全检查（例如，碰撞检测）。它们可以通过设置恶意环境条件来利用，例如在RV的轨迹上放置一定重量和一定角度的障碍物。一旦被利用，安全检查可能无法报告真实的物理事故，或者报告虚假警报（而RV仍在正常运行）。这两种情况都可能导致危及生命的后果。此类漏洞的根本原因是现有的安全检查主要使用通用编程语言中实现的简单范围检查，无法描述复杂而微妙的物理世界。我们开发了一种新颖的技术，需要程序分析、车辆建模和基于搜索的测试相互配合，以识别此类漏洞。我们对4个真实世界的控制软件和8辆车辆（包括四旋翼飞行器、巡航器和固定翼飞机）进行的实验发现了10个真实漏洞。我们的技术没有误报，因为它只在可以生成攻击时报告漏洞。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417249](https://doi.org/10.1145/3372297.3417249)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417249](https://dl.acm.org/doi/pdf/10.1145/3372297.3417249)
## HoneyPLC: A Next-Generation Honeypot for Industrial Control Systems.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#honeyplc-a-next-generation-honeypot-for-industrial-control-systems) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#honeyplc-a-next-generation-honeypot-for-industrial-control-systems)**
### 作者
* Efrén López-Morales, Arizona State University, Tempe, AZ, USA
* Carlos Rubio-Medrano, Texas A&M University - Corpus Christi, Corpus Christi, TX, USA
* Adam Doupé, Arizona State University, Tempe, AZ, USA
* Yan Shoshitaishvili, Arizona State University, Tempe, AZ, USA
* Ruoyu Wang, Arizona State University, Tempe, AZ, USA
* Tiffany Bao, Arizona State University, Tempe, AZ, USA
* Gail-Joon Ahn, Arizona State University, Tempe, AZ, USA
### 摘要
> 工业控制系统（ICS）为核能、电力、水务和交通等关键基础设施提供管理和控制能力。在ICS中，可编程逻辑控制器（PLC）起着关键作用，它们作为连接网络和现实世界的桥梁，例如控制核电厂中的离心机器。ICS和PLC发挥的关键作用使其成为了复杂网络攻击的目标，这些攻击旨在破坏其运行，从而导致社会不安和经济损失。在这种背景下，蜜罐已被证明是收集真实数据（例如恶意软件载荷）并更好地了解攻击者使用的不同方法和策略的有价值工具。然而，现有的PLC蜜罐缺乏复杂的服务模拟功能，以获得有价值的数据。更糟糕的是，它们无法适应ICS恶意软件不断演进和攻击模式变得更加复杂的情况。为了克服这些缺点，我们提出了HoneyPLC，一种高交互性、可扩展和用于收集恶意软件的蜜罐。HoneyPLC支持广泛的PLC型号和供应商。我们的实验证明HoneyPLC具有很高的伪装能力：它被多个广泛使用的侦察工具（包括Nmap、Shodan的Honeyscore、西门子Step7 Manager、PLCinject和PLCScan）识别为真实设备，并且识别的准确度高。我们部署了HoneyPLC在Amazon AWS上，并记录了大量有趣的互动信息，不仅显示了攻击者实际上在瞄准ICS系统，还表明HoneyPLC可以有效地与攻击者进行交互和欺骗，并收集未来分析的数据样本。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423356](https://doi.org/10.1145/3372297.3423356)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3423356](https://dl.acm.org/doi/pdf/10.1145/3372297.3423356)
## Phantom of the ADAS: Securing Advanced Driver-Assistance Systems from Split-Second Phantom Attacks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#phantom-of-the-adas-securing-advanced-driver-assistance-systems-from-split-second-phantom-attacks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#phantom-of-the-adas-securing-advanced-driver-assistance-systems-from-split-second-phantom-attacks)**
### 作者
* Ben Nassi, Ben-Gurion University of the Negev, Be'er-Sheva, Israel
* Yisroel Mirsky, Ben-Gurion University of the Negev & Georgia Institute of Technology, Atlanta, GA, USA
* Dudi Nassi, Ben-Gurion University of the Negev, Be'er-Sheva, Israel
* Raz Ben-Netanel, Ben-Gurion University of the Negev, Be'er-Sheva, Israel
* Oleg Drokin, Independent Researcher, Knoxville, TN, USA
* Yuval Elovici, Ben Gurion University of the Negev, Be'er-Sheva, Israel
### 摘要
> 在本文中，我们研究了“分秒幻影攻击”，这是一个科学上的空白，会导致两个商用高级驾驶辅助系统（ADAS），特斯拉Model X（HW 2.5和HW 3）和Mobileye 630，将几毫秒出现的无深度物体当作真实的障碍物/物体。我们讨论了分秒幻影攻击对ADAS的挑战。我们演示了攻击者如何通过将幻影道路标志嵌入数字广告中来远程应用分秒幻影攻击，导致特斯拉的自动驾驶突然停在路中间，以及Mobileye 630发出虚假通知。我们还演示了攻击者如何使用投影仪来导致特斯拉的自动驾驶在路上投影人行道的幻影时刹车，并使Mobileye 630对投影的路标发出虚假通知。为了应对这一威胁，我们提出了一种对策，可以仅通过摄像头传感器确定检测到的对象是幻影还是真实的。这个对策（GhostBusters）采用了“专家团队”的方法，结合了从四个轻量级深度卷积神经网络获得的结果，根据物体的光线、上下文、表面和深度评估物体的真实性。我们演示了我们对策的有效性（它获得了0.994的TPR和零的FPR）并测试了它对敌对机器学习攻击的稳健性。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423359](https://doi.org/10.1145/3372297.3423359)
## PPE Circuits: Formal Definition to Software Automation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ppe-circuits-formal-definition-to-software-automation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ppe-circuits-formal-definition-to-software-automation)**
### 作者
* Susan Hohenberger, Johns Hopkins University, Baltimore, MD, USA
* Satyanarayana Vusirikala, University of Texas at Austin, Austin, TX, USA
* Brent Waters, University of Texas at Austin & NTT Research, Austin, TX, USA
### 摘要
> 配对密码学因其高效性和功能性而被广泛应用。在设计基于配对的方案时，一个常见任务是设计算法来验证一组不受信任的群元素与一组受信任的群元素的一致性。可能会寻找一种签名方案的验证算法，或者一种验证与IBE/ABE公共参数相对应的IBE/ABE私钥的方法。在ACM CCS 2019 Hohenberger Vusirikala中，引入了AutoPPE软件工具，用于自动生成一组配对产品等式（PPE），可以验证一组配对群元素与一组受信任的群元素的正确性。这个任务并不简单。一些方案（如基于双系统加密的方案）被证明不支持任何有效的用于验证私钥相对于公共参数的算法。其他方案（如Boyen-Waters匿名IBE）被Hohenberger-Vusirikala（CCS 19）置于一个灰色地带-没有已知的PPE共同测试，但也没有不可测试性的证明。在这项工作中，我们对Hohenberger-Vusirikala（CCS 19）的基础进行了显着的概括和拓展。具体而言，我们考虑了一个更大的验证算法空间，我们称之为PPE电路，用于验证一组不受信任的群元素与一组受信任的群元素。非正式地说，PPE电路支持AND、OR、NOT和PPE门，从而捕捉到了AutoPPE的所有功能，同时创新地使验证算法能够包含任意逻辑（而不仅仅是PPE的连接）。我们的贡献包括对PPE电路的形式化描述，一种通过给出要验证的受信任和不受信任元素的描述来搜索PPE电路的可证明正确的算法，以及一个名为AutoCircuitPPE的新型开源软件工具，实现了这个算法。AutoCircuitPPE在大量测试案例上进行了测试，并且通常在100秒内输出了所有在Hohenberger-Vusirikala（CCS 19）中未解决的“灰色地带”方案以及一些新的测试案例的PPE电路。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417230](https://doi.org/10.1145/3372297.3417230)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417230](https://dl.acm.org/doi/pdf/10.1145/3372297.3417230)
## Minimal Symmetric PAKE and 1-out-of-N OT from Programmable-Once Public Functions.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#minimal-symmetric-pake-and-1-out-of-n-ot-from-programmable-once-public-functions) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#minimal-symmetric-pake-and-1-out-of-n-ot-from-programmable-once-public-functions)**
### 作者
* Ian McQuoid, Oregon State University, Corvallis, OR, USA
* Mike Rosulek, Oregon State University, Corvallis, OR, USA
* Lawrence Roy, Oregon State University, Corvallis, OR, USA
### 摘要
> 对称密码验证密钥交换（sPAKE）可以看作是传统密钥交换的扩展，当且仅当两个参与方共享一个公共秘密（可能是低熵）密码时，它们才会达成共识并共享密钥。我们提出了第一个同时实现以下属性的 sPAKE 协议：每个参与方只需进行两次指数运算，与未经身份验证的 Diffie-Hellman 密钥协议相同（很可能是最佳选择）；最优的往返复杂度：仅需要一次流程（每个参与方发送一条信息，可以并行发送）以实现隐式认证，或者两次流程以实现显式互相认证；基于随机预言机模型的安全性，而不是理想密码或通用群模型；基于 UC 安全性，而不是基于博弈的安全性。我们的协议是 Bellovin 和 Merritt（S&P 1992）的原始 EKE 协议的一般化。我们还提出了一种 UC 安全的 1-out-of-N 无知传输（OT）协议，用于随机负载。该协议的通信复杂性与 N 无关，这意味着 N 可以是安全参数的指数级别。这样的协议也可以看作是一种无知 PRF（OPRF）。对于所有的 N>2，我们的协议改进了 Masny 和 Rindal（CCS 2019）领先的 UC 安全的 1-out-of-N OT 构造，而对于 N=2，则几乎具有相同的成本。支撑这些结果的新技术被我们称为可编程一次性公共函数（POPF）。直观地说，POPF 是一个函数，其输出可以被一方在一个确定的点上编程。在可证明的意义上，函数的所有其他输出都不受任何一方的控制。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417870](https://doi.org/10.1145/3372297.3417870)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417870](https://dl.acm.org/doi/pdf/10.1145/3372297.3417870)
## Full Database Reconstruction in Two Dimensions.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#full-database-reconstruction-in-two-dimensions) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#full-database-reconstruction-in-two-dimensions)**
### 作者
* Francesca Falzon, University of Chicago, Chicago, IL, USA
* Evangelia Anna Markatou, Brown University, Providence, RI, USA
* Akshima, University of Chicago, Chicago, IL, USA
* David Cash, University of Chicago, Chicago, IL, USA
* Adam Rivkin, University of Chicago, Chicago, IL, USA
* Jesse Stern, University of Chicago, Chicago, IL, USA
* Roberto Tamassia, Brown University, Providence, RI, USA
### 摘要
> 在过去的几年中，我们看到了对支持范围查询的一维数据库的多次攻击。这些攻击通过利用访问模式泄露以及已知的查询分布或搜索模式泄露来实现完全数据库重建。我们是第一个在两个维度上探索这种威胁的人。我们揭示了重建攻击的固有限制，通过展示可能存在指数数量的不同数据库，这些数据库产生了等效泄露。接下来，我们提出了一个完全数据库重建攻击。我们的算法在多项式时间内运行，并返回与给定泄露配置一致的所有数据库的多项式大小编码。我们实现了我们的算法，并观察到现实世界的数据库存在大量等效数据库，这与我们的理论结果一致。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417275](https://doi.org/10.1145/3372297.3417275)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417275](https://dl.acm.org/doi/pdf/10.1145/3372297.3417275)
## VAHunt: Warding Off New Repackaged Android Malware in App-Virtualization's Clothing.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#vahunt-warding-off-new-repackaged-android-malware-in-app-virtualizations-clothing) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#vahunt-warding-off-new-repackaged-android-malware-in-app-virtualizations-clothing)**
### 作者
* Luman Shi, Wuhan University, Wuhan, Hubei, China
* Jiang Ming, University of Texas at Arlington, Arlington, TX, USA
* Jianming Fu, Wuhan University, Wuhan, Hubei, China
* Guojun Peng, Wuhan University, Wuhan, Hubei, China
* Dongpeng Xu, University of New Hampshire, Durham, NH, USA
* Kun Gao, Wuhan Antiy Information Technology, Wuhan, Hubei, China
* Xuanchen Pan, Wuhan Antiy Information Technology, Wuhan, Hubei, China
### 摘要
> 重新打包受欢迎的良性应用程序并搭载恶意载荷曾是传播Android恶意软件最常见的方式。然而，自2016年以来，我们已经观察到Android生态系统中一个令人担忧的新趋势：越来越多的Android恶意软件样本滥用最新的应用虚拟化创新作为新的分发渠道。应用虚拟化使用户能够在单个设备上运行同一应用的多个副本，数千万用户正在享受这种便利。然而，黑客将各种恶意APK文件重新打包成应用虚拟化平台的插件，可以灵活地启动任意插件而无需繁琐的安装过程。这种新的打包方式通过将嫁接的恶意载荷隐藏在插件中，获得了绕过反恶意软件扫描器的能力，并且也违背了现有的重打包应用检测解决方案所体现的基本前提。由于基于应用虚拟化的应用程序不一定是恶意软件，在本文中，我们的目标是在运行时之前对它们做出判断。我们的深入研究结果有两个关键观察：1）插件应用程序与Android框架之间的代理层是应用虚拟化机制的核心，并且它揭示了有限状态转换的特性；2）恶意软件通常会隐秘地加载插件并隐藏恶意行为。这些观察结果激发我们开发了一个两层检测方法，称为VAHunt。首先，我们设计了一个具有状态的检测模型，用于识别APK文件中是否存在应用虚拟化引擎。其次，我们进行数据流分析，提取指纹特征以区分恶意和良性的加载策略。自2019年10月以来，我们已经在领先的移动安全公司安天AVL移动安全中测试了VAHunt，以检测超过139K基于应用虚拟化的样本。与真实情况相比，VAHunt实现了0.7％的假阴性和零假阳性。我们的自动化检测摆脱了安全分析人员的逆向工程负担。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423341](https://doi.org/10.1145/3372297.3423341)
## BDoS: Blockchain Denial-of-Service.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#bdos-blockchain-denial-of-service) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#bdos-blockchain-denial-of-service)**
### 作者
* Michael Mirkin, Technion and IC3, Haifa, Israel
* Yan Ji, Cornell Tech and IC3, New York, NY, USA
* Jonathan Pang, Cornell University, Ithaca, NY, USA
* Ariah Klages-Mundt, Cornell University, Ithaca, NY, USA
* Ittay Eyal, Technion and IC3, Haifa, Israel
* Ari Juels, Cornell Tech and IC3, New York, NY, USA
### 摘要
> 工作量证明（PoW）加密货币区块链（如比特币）能够确保大量的资金安全。它们的操作者被称为矿工，他们为生成区块耗费资源，并因此获得货币奖励。原则上，区块链对于拒绝服务（DoS）攻击是一个有吸引力的目标：由于硬币之间竞争激烈，以及做空交易的潜在收益。然而，传统的DoS攻击通常只针对少数几个服务器，并且无法应对节点众多的系统。迄今为止，尚未成功发动DoS攻击来攻击著名的加密货币。本文介绍了基于激励的DoS攻击（BDoS），这是针对PoW加密货币的第一种DoS攻击。与传统的DoS不同，BDoS攻击的是系统的机制设计：它利用奖励机制来阻止矿工的参与。之前针对PoW区块链的DoS攻击需要对手的挖矿算力与其他所有矿工相匹配。相比之下，BDoS可以用更少的资源（例如，2020年3月比特币达到21%）使区块链停滞不前，根据我们的实证研究。我们发现，随着挖矿行业的成熟和盈利能力的下降，比特币对BDoS的脆弱性迅速增加。BDoS与自私挖矿等已知攻击不同，它的目的不是增加对手的收入，而是扰乱系统。尽管它在算法上与那些攻击有一些相似之处，但它引入了一种新的对抗模型、目标、算法和博弈论分析。除了对操作性区块链的直接影响外，BDoS还提出了这样一个新颖的观点：对手可以通过证明区块的存在而不必实际发布来操纵矿工的激励。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417247](https://doi.org/10.1145/3372297.3417247)
## eThor: Practical and Provably Sound Static Analysis of Ethereum Smart Contracts.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ethor-practical-and-provably-sound-static-analysis-of-ethereum-smart-contracts) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ethor-practical-and-provably-sound-static-analysis-of-ethereum-smart-contracts)**
### 作者
* Clara Schneidewind, TU Wien, Vienna, Austria
* Ilya Grishchenko, TU Wien, Vienna, Austria
* Markus Scherer, TU Wien, Vienna, Austria
* Matteo Maffei, TU Wien, Vienna, Austria
### 摘要
> 以太坊已成为最流行的智能合约平台，区块链上存储着数十万个合约，涵盖了拍卖、交易平台、选举等多种应用场景。由于智能合约的金融属性，安全漏洞可能导致灾难性后果，更糟糕的是，由于区块链上存储的数据是不可变的，包括智能合约代码本身，因此几乎无法修复。因此，对这些合约进行自动安全分析具有极大的兴趣，但同时也具有技术挑战。这是因为以太坊的事务导向编程机制具有微妙的语义，并且由于执行时的区块链数据，包括调用者和被调用者的代码，不是静态已知的。在这项工作中，我们提出了eThor，第一个基于Horn子句的EVM字节码的完备且自动化的静态分析工具。我们的静态分析特别支持可达性属性，我们展示了可达性属性足以捕捉智能合约的有趣安全属性（例如单入口）以及合约特定的功能属性。我们的分析被证明对于EVM字节码的完整语义是正确的，并且在真实合约的大规模实验评估中表现出eThor的实用性和超越最先进的静态分析工具：具体而言，eThor是唯一一个提供声音保证的工具，在代表性的真实合约集合中终止了94％的合约，并实现了89％的F-测量值（结合了灵敏度和特异性）。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417250](https://doi.org/10.1145/3372297.3417250)
## R2DP: A Universal and Automated Approach to Optimizing the Randomization Mechanisms of Differential Privacy for Utility Metrics with No Known Optimal Distributions.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#r2dp-a-universal-and-automated-approach-to-optimizing-the-randomization-mechanisms-of-differential-privacy-for-utility-metrics-with-no-known-optimal-distributions) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#r2dp-a-universal-and-automated-approach-to-optimizing-the-randomization-mechanisms-of-differential-privacy-for-utility-metrics-with-no-known-optimal-distributions)**
### 作者
* Meisam Mohammady, Concordia University, Montreal, PQ, Canada
* Shangyu Xie, Illinois Institute of Technology, Chicago, IL, USA
* Yuan Hong, Illinois Institute of Technology, Chicago, IL, USA
* Mengyuan Zhang, Ericsson Security Research, Montreal, PQ, Canada
* Lingyu Wang, Concordia University, Montreal, PQ, Canada
* Makan Pourzandi, Ericsson Security Research, Montreal, PQ, Canada
* Mourad Debbabi, Concordia University, Montreal, PQ, Canada
### 摘要
> 差分隐私（DP）已成为广泛应用中的事实标准隐私概念。由于不同应用中数据效用的含义可能大不相同，一个关键挑战是找到给定效用度量的最优随机化机制，即分布及其参数。现有的研究已经在一些特殊情况下确定了最优分布，但所有其他效用度量（如有用性和图距离）仍然是开放问题。由于现有的工作大多依赖手动分析来检查所有分布的搜索空间，为了每个效用度量重复这样的努力将是一个昂贵的过程。为了解决这个问题，我们提出了一种新颖的方法，可以在一个通用框架下自动优化各种应用中发现的不同效用度量。我们的主要思想是将注入噪声的方差本身视为一个随机变量，一个双重分布可以近似覆盖所有分布的搜索空间。因此，我们可以通过优化两重分布的参数来自动找到这个搜索空间中的分布，以类似的方式优化不同的效用度量。具体来说，我们定义了一个通用框架，即差分隐私随机化机制的随机化（R2DP），并对其隐私和效用进行了形式化分析。我们的实验表明，对于一些没有已知最优分布的效用度量，R2DP可以提供比基线分布（拉普拉斯）更好的结果，而对于具有已知最优分布的效用度量，我们的结果渐近接近最优。作为一个附带优势，双重分布引入的额外自由度使R2DP能够适应数据所有者和接收方的偏好。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417259](https://doi.org/10.1145/3372297.3417259)
## Towards Attribution in Mobile Markets: Identifying Developer Account Polymorphism.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#towards-attribution-in-mobile-markets-identifying-developer-account-polymorphism) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#towards-attribution-in-mobile-markets-identifying-developer-account-polymorphism)**
### 作者
* Silvia Sebastian, IMDEA Software Institute & Universidad Politécnica de Madrid, Madrid, Spain
* Juan Caballero, IMDEA Software Institute, Madrid, Spain
### 摘要
> 恶意开发者可能会成功地在移动应用市场上发布他们的应用程序，包括官方市场。如果被举报，这些应用将会被下架，而开发者账户可能会被封禁。然而，这样的下架并不能阻止攻击者使用其他开发者账户发布其恶意应用的变种。本研究提出了一种新的方法来识别移动应用市场中属于同一操作（即同一所有者）的开发者账户和其他妥协指标（IOCs）。在给定一组种子IOCs的情况下，我们的方法通过探索应用和版本元数据来识别属于同一操作的新IOCs。它输出了一个归属关系图，详细说明了归属推断，以便进行审查。我们已经将我们的方法实现到了Retriever中，这是一个支持多个移动应用市场的工具，包括官方的GooglePlay和AppleStore。我们在17个恶意软件和广告软件操作中评估了Retriever。在94%的操作中，Retriever发现了至少一个之前未知的开发者账户。此外，Retriever揭示了看似无效的操作仍然有活跃的开发者账户。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417281](https://doi.org/10.1145/3372297.3417281)
## Mnemosyne: An Effective and Efficient Postmortem Watering Hole Attack Investigation System.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#mnemosyne-an-effective-and-efficient-postmortem-watering-hole-attack-investigation-system) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#mnemosyne-an-effective-and-efficient-postmortem-watering-hole-attack-investigation-system)**
### 作者
* Joey Allen, Georgia Institute of Technology, Atlanta, GA, USA
* Zheng Yang, Georgia Institute of Technology, Atlanta, GA, USA
* Matthew Landen, Georgia Institute of Technology, Atlanta, GA, USA
* Raghav Bhat, Georgia Institute of Technology, Atlanta, GA, USA
* Harsh Grover, Georgia Institute of Technology, Atlanta, GA, USA
* Andrew Chang, Georgia Institute of Technology, Atlanta, GA, USA
* Yang Ji, Palo Alto Networks, Santa Clara, CA, USA
* Roberto Perdisci, Georgia Institute of Technology & University of Georgia, Atlanta, GA, USA
* Wenke Lee, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 通过妥协定期被目标组织员工访问的网站已成为国家级对手渗透企业网络的流行技术。这种被称为"饮水源"攻击的技术利用被入侵的网站作为进入真正受害者网络的跳板。尽管饮水源攻击是攻击者用于实现网络杀伤链初始入侵阶段的主要技术之一，但与检测或调查复杂的饮水源攻击相关的研究相对较少。虽然已有相关工作旨在检测被恶意修改的正常网站，但我们认为仅仅检测网站是否被入侵只是调查的第一阶段。在本文中，我们提出了Mnemosyne，一个依赖于基于浏览器的攻击来源的尸检法庭分析引擎，能够准确重建、调查和评估饮水源攻击的后果。Mnemosyne依赖于一个轻量级的无浏览器修改的审计守护程序来被动收集与浏览器执行相关的因果关系日志。接下来，Mnemosyne在这些因果关系日志的基础上应用一组版本控制技术，准确定位网站何时被入侵以及入侵者进行了哪些修改。在此步骤之后，Mnemosyne依赖于一种新颖的用户级分析来评估恶意修改如何影响目标企业，并力图确定哪些员工成为攻击的受害者。在我们的广泛评估中，我们发现Mnemosyne的法庭分析引擎能够在七个现实世界的饮水源场景中识别真正的受害者，同时还将法庭分析人员所需的手动分析量平均减少了98.17%。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423355](https://doi.org/10.1145/3372297.3423355)
## Dumbo: Faster Asynchronous BFT Protocols.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#dumbo-faster-asynchronous-bft-protocols) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#dumbo-faster-asynchronous-bft-protocols)**
### 作者
* Bingyong Guo, ISCAS, UCAS, & JDD-NJIT-ISCAS Joint Blockchain Lab, Beijing, China
* Zhenliang Lu, New Jersey Institute of Technology & JDD-NJIT-ISCAS Joint Blockchain Lab, Newark, NJ, USA
* Qiang Tang, New Jersey Institute of Technology & JDD-NJIT-ISCAS Joint Blockchain Lab, Newark, NJ, USA
* Jing Xu, Institute of Software, Chinese Academy of Sciences & JDD-NJIT-ISCAS Joint Blockchain Lab, Beijing, China
* Zhenfeng Zhang, Institute of Software, Chinese Academy of Sciences & JDD-NJIT-ISCAS Joint Blockchain Lab, Beijing, China
### 摘要
> HoneyBadgerBFT是由Miller等人提出的第一个实用的异步原子广播协议，展示了令人印象深刻的性能。HoneyBadgerBFT（HB-BFT）的核心是使用Ben-Or等人的异步共同子集协议（ACS）实现批处理共识，由n个可靠广播协议（RBC）组成，使每个节点提出其输入，然后由n个异步二进制协议（ABA）对每个提出的值做出决策（n是节点总数）。在本文中，我们提出了两个新的原子广播协议（称为Dumbo1和Dumbo2），两者在渐近和实际效率上均有提升。特别是，Dumbo1的ACS仅运行了一个小的κ（与n无关）个ABA实例，而Dumbo2进一步将其降低为常数！我们技术的核心是两个主要观察结果：（1）减少ABA实例的数量显着提高了效率；（2）以更谨慎的方式使用被认为在[34]中对ACS来说并不是最优的多值验证拜占庭协议（MVBA）实际上可以导致更高效的ACS。我们同时实现了Dumbo1、Dumbo2和HB-BFT，并将它们部署在100个均匀分布在全球10个不同地区的亚马逊EC2 t2.medium实例上，并在相同环境中进行了大量实验。实验结果显示，我们的协议在延迟和吞吐量上相对于HoneyBadgerBFT实现了多倍的提升，特别是当系统规模适中时。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417262](https://doi.org/10.1145/3372297.3417262)
## Tight Consistency Bounds for Bitcoin.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#tight-consistency-bounds-for-bitcoin) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#tight-consistency-bounds-for-bitcoin)**
### 作者
* Peter Gaži, IOHK, Bratislava, Slovakia
* Aggelos Kiayias, University of Edinburgh & IOHK, Edinburgh, United Kingdom
* Alexander Russell, University of Connecticut & IOHK, Storrs, CT, USA
### 摘要
> 我们在比特币协议中建立了最佳安全阈值，该阈值与对手的哈希能力、诚实的哈希能力和网络延迟有关。具体而言，我们证明了如果[ra < 1/Δ0 + 1/rh]，其中rh是单位时间内诚实工作量证明的预期数量，ra是对手成功的预期数量，并且没有消息被延迟超过Δ0个时间单位，协议将是安全的。在这个范围内，该协议能够以指数衰减的失效概率保证一致性和活力。在此范围之外，简单的私有链攻击会阻止共识的达成。我们的分析立即适用于任何中本聪式的工作量证明协议；在本文的完整版中，我们还介绍了在权益证明设置中应用它所需的改进，从而在那里建立了类似的阈值。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423365](https://doi.org/10.1145/3372297.3423365)
## Security Analysis and Implementation of Relay-Resistant Contactless Payments.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#security-analysis-and-implementation-of-relay-resistant-contactless-payments) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#security-analysis-and-implementation-of-relay-resistant-contactless-payments)**
### 作者
* Ioana Boureanu, University of Surrey, Guildford, United Kingdom
* Tom Chothia, University of Birmingham, Birmingham, United Kingdom
* Alexandre Debant, University of Rennes, CNRS, IRISA, Rennes, France
* Stéphanie Delaune, University of Rennes, CNRS, IRISA, Rennes, France
### 摘要
> 非接触式系统（如EMV（Europay、Mastercard和Visa）支付协议）容易受到中继攻击的威胁。通常的对策是使用距离边界协议，读取器通过往返时间（RTT）测量来估计与卡片的物理距离的上限。然而，这些协议在存在恶意读取器时很容易被破解。在2019年的金融密码学会议上，我们提出了两种新颖的基于EMV的抗中继协议：它们将距离边界与硬件信任根（HWRoT）结合起来，以使正确的RTT测量不能再被绕过。我们的贡献有三个方面：首先，我们设计了一种计算方法来建模这种先进类型的与HWRoT集成的距离边界协议；作为一种额外的创新，我们的计算方法也是第一个允许卡片和读取器在近距离检查阶段期间发生移动的计算方法。其次，为了能够通过更标准的机制和工具进行这些协议的分析，我们考虑了2018年的距离边界安全性描述，该描述不再考虑物理因素，仅仅依赖事件的因果关系；我们将其应用于我们更强大的计算方法，并将其理论保证扩展到我们更具表达能力的模型（包括移动性、潜在的恶意读取器和HWRoT）。由于这个扩展，我们可以使用标准的协议验证工具ProVerif进行安全分析。第三，我们提供了Mastercard的抗中继EMV协议PayPass-RRP的第一个实现，以及一种2019年的附加功能带有HWRoT的协议PayBCR。我们评估了它们的效率和抗中继攻击的强度，包括诚实读取器和恶意读取器的情况。我们的实验证明，Mastercard的PayPass-RRP和基于HWRoT的附加功能PayBCR在防止EMV中迄今显示的中继攻击方面都是实用的。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417235](https://doi.org/10.1145/3372297.3417235)
## SQUIRREL: Testing Database Management Systems with Language Validity and Coverage Feedback.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#squirrel-testing-database-management-systems-with-language-validity-and-coverage-feedback) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#squirrel-testing-database-management-systems-with-language-validity-and-coverage-feedback)**
### 作者
* Rui Zhong, Pennsylvania State University, State College, PA, USA
* Yongheng Chen, Georgia Institute of Technology, Atlanta, GA, USA
* Hong Hu, Georgia Institute of Technology, Atlanta, GA, USA
* Hangfan Zhang, Pennsylvania State University, State College, PA, USA
* Wenke Lee, Georgia Institute of Technology, Atlanta, GA, USA
* Dinghao Wu, Pennsylvania State University, State College, PA, USA
### 摘要
> Fuzzing（模糊测试）是一种越来越受欢迎的技术，用于验证软件功能并发现安全漏洞。然而，当前基于变异的模糊测试器不能有效地测试数据库管理系统（DBMS），因为DBMS会严格检查输入的语法和语义是否有效。基于生成的测试可以保证输入的语法正确性，但它不利用代码覆盖率等任何反馈来指导路径探索。在本文中，我们开发了Squirrel，这是一个新颖的模糊测试框架，它同时考虑语言的有效性和覆盖率反馈来测试DBMS。我们设计了一种中间表示（IR），以结构化和信息化的方式维护SQL查询。为了生成语法正确的查询，我们对IR进行基于类型的变异，包括语句插入、删除和替换。为了减少语义错误，我们分析每个IR以确定参数之间的逻辑依赖关系，并生成满足这些依赖关系的查询。我们在四个流行的DBMS上对Squirrel进行了评估：SQLite、MySQL、PostgreSQL和MariaDB。Squirrel在SQLite中发现了51个错误，在MySQL中发现了7个错误，在MariaDB中发现了5个错误。其中52个错误已修复，并分配了12个CVE编号。在我们的实验中，Squirrel的语义正确性比最先进的模糊测试工具提高了2.4倍至243.9倍，探索的新边缘增加了2.0倍至10.9倍。这些结果表明，Squirrel在发现数据库管理系统的内存错误方面非常有效。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417260](https://doi.org/10.1145/3372297.3417260)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417260](https://dl.acm.org/doi/pdf/10.1145/3372297.3417260)
## FREEDOM: Engineering a State-of-the-Art DOM Fuzzer.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#freedom-engineering-a-state-of-the-art-dom-fuzzer) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#freedom-engineering-a-state-of-the-art-dom-fuzzer)**
### 作者
* Wen Xu, Georgia Institute of Technology, Atlanta, GA, USA
* Soyeon Park, Georgia Institute of Technology, Atlanta, GA, USA
* Taesoo Kim, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 网页浏览器的DOM引擎是一个常见的攻击面，在开发过程中受到了深入的模糊测试。最新的DOM模糊器采用的常见方法是基于无上下文文法生成新的输入。然而，这种生成方法无法捕捉输入数据依赖，即HTML文档。同时，目前尚不清楚已知对于多种软件进行模糊测试非常有效的测试覆盖导向的变异方法是否仍然对DOM引擎有效。更糟糕的是，现有的DOM模糊器无法采用覆盖导向的方法，因为它们无法完全支持HTML变异并且浏览器吞吐量低。为了在科学上了解这两种方法的有效性和局限性，我们提出了FreeDom，一个完整的、适用于集群的DOM模糊器，可以同时使用生成和覆盖导向的模式。FreeDom依赖于上下文感知的中间表示来描述具有合适数据依赖的HTML文档。同时，通过浏览器自终止，FreeDom的吞吐量高达3.74倍。FreeDom已经在包括Safari、Firefox和Chrome在内的商品浏览器中发现了24个以前未知的漏洞，目前已经分配了10个CVE号码。通过上下文感知生成，FreeDom在WebKit中比现有的DOM模糊器Domato找到了更多的唯一崩溃（3倍）。覆盖导向的FreeDom在揭示新的代码块（2.62%）方面更加有效，并发现了其生成方法未能找到的三个复杂漏洞。然而，与生成方法相比，以空语料库引导的覆盖导向变异触发的唯一崩溃数量减少了3.8倍。新发现的覆盖往往会对DOM模糊器的漏洞发现效果产生负面影响。因此，我们认为上下文感知生成是发现更多DOM引擎漏洞的最佳实践，并期待通过FreeDom实现对覆盖导向DOM模糊测试的进一步改进。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423340](https://doi.org/10.1145/3372297.3423340)
## BlackMirror: Preventing Wallhacks in 3D Online FPS Games.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#blackmirror-preventing-wallhacks-in-3d-online-fps-games) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#blackmirror-preventing-wallhacks-in-3d-online-fps-games)**
### 作者
* Seonghyun Park, Seoul National University, Seoul, Republic of Korea
* Adil Ahmad, Purdue University, West Lafayette, IN, USA
* Byoungyoung Lee, Seoul National University, Seoul, Republic of Korea
### 摘要
> 在线游戏市场报告称，其市值达到1,520亿美元，如今非常受欢迎。多人在线游戏中的一个关键问题是作弊，即玩家使用非法方法在诚实游戏过程中取得优势。例如，本研究的主要关注点——透视作弊，可以使作弊玩家在游戏屏幕上显现被实际隐藏在墙壁后（或其他遮挡物后）的敌方物体。由于这类作弊行为使诚实玩家气馁并导致游戏公司收入减少，游戏公司会在玩家的设备上部署缓解方案来抑制此类行为。然而，它们的解决方案存在根本性的缺陷，因为它们部署在攻击者完全控制的设备上。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417890](https://doi.org/10.1145/3372297.3417890)
## Cache-in-the-Middle (CITM) Attacks: Manipulating Sensitive Data in Isolated Execution Environments.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#cache-in-the-middle-citm-attacks-manipulating-sensitive-data-in-isolated-execution-environments) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#cache-in-the-middle-citm-attacks-manipulating-sensitive-data-in-isolated-execution-environments)**
### 作者
* Jie Wang, Institute of Information Engineering, CAS & George Mason University, Beijing, China
* Kun Sun, George Mason University, Fairfax, VA, USA
* Lingguang Lei, Institute of Information Engineering, CAS & University of Chinese Academy of Sciences, Beijing, China
* Shengye Wan, College of William and Mary & George Mason University, Williamsburg, VA, USA
* Yuewu Wang, Institute of Information Engineering, CAS & University of Chinese Academy of Sciences, Beijing, China
* Jiwu Jing, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 传统的ARM TrustZone的使用在解决制造商希望通过限制安全世界中第三方应用程序的安装来最小化可信计算基础与第三方应用程序开发者希望在安全世界中安装其应用程序之间的冲突方面存在困难。为了解决这个问题，研究人员提出在普通世界中创建隔离执行环境（称为IEEs）来保护安全敏感的应用程序。在本文中，我们对IEE数据保护模型和ARM缓存属性进行了系统研究，并发现三种基于缓存的攻击称为CITM，可以利用它们来操纵IEEs中受保护的敏感数据。具体来说，在映射到IEEs内存（即为IEEs指定的内存）的缓存上存在低效和不连贯的安全措施，普通世界中的攻击者可以在并发执行期间通过操纵IEEs内存来破坏IEE数据的安全性，绕过在安全敏感应用程序暂停或完成时强制执行的安全措施，或者在IEE上下文切换过程中滥用不完整的安全措施。我们对包括SANCTUARY、Ginseng和TrustICE在内的三个知名IEE系统进行了CITM攻击的案例研究，以证明在真实硬件测试平台上利用它们的可行性。最后，我们分析了CITM攻击的根本原因，并提出了一种击败它们的对策。实验结果表明，我们的防御方案具有较小的开销。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417886](https://doi.org/10.1145/3372297.3417886)
## Practical Lattice-Based Zero-Knowledge Proofs for Integer Relations.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#practical-lattice-based-zero-knowledge-proofs-for-integer-relations) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#practical-lattice-based-zero-knowledge-proofs-for-integer-relations)**
### 作者
* Vadim Lyubashevsky, IBM Research - Zurich, Zurich, Switzerland
* Ngoc Khanh Nguyen, IBM Research - Zurich and ETH Zurich, Zurich, Switzerland
* Gregor Seiler, IBM Research - Zurich and ETH Zurich, Zurich, Switzerland
### 摘要
> 我们提出了一种新颖的基于格的零知识证明系统，用于展示（任意大小的）承诺整数满足加法和乘法关系。我们方案的证明大小比Libert等人的格证明系统（CRYPTO 2018）在相同关系下小两到三个数量级。由于我们协议的证明大小随整数长度线性增长，我们的证明最终会比量子安全的简洁证明系统（如Ligero、Aurora等）产生的证明更长。但对于合理大小整数之间的关系（例如512位），我们的证明仍然是基于量子安全假设的最小的零知识证明系统。同样重要的是，我们证明系统的运行时间至少比任何其他量子安全方案快一个数量级。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417894](https://doi.org/10.1145/3372297.3417894)
## QuantumHammer: A Practical Hybrid Attack on the LUOV Signature Scheme.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#quantumhammer-a-practical-hybrid-attack-on-the-luov-signature-scheme) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#quantumhammer-a-practical-hybrid-attack-on-the-luov-signature-scheme)**
### 作者
* Koksal Mus, Worcester Polytechnic Institute, Worcester, MA, USA
* Saad Islam, Worcester Polytechnic Institute, Worcester, MA, USA
* Berk Sunar, Worcester Polytechnic Institute, Worcester, MA, USA
### 摘要
> 量子后代方案有望在十年内取代数十亿设备中的现有公钥方案。为促进过渡，美国国家标准与技术研究院（NIST）正在进行标准化过程。多元签名是NIST后量子密码竞赛中的主要类别之一。在此类别中的四个候选方案中，LUOV和Rainbow方案是基于Oil and Vinegar方案的，该方案于1997年首次引入，经受住了两十多年的密码分析。除了数学安全性和效率外，防御侧信道攻击是竞争中的一个主要关注点。目前的看法是，由于后量子方案具有较大的密钥大小和缺乏代数结构，可能更难受到注入故障攻击的影响。我们证明这不是真的。我们引入了一种新颖的混合攻击——量子锤（QuantumHammer），并在NIST后量子竞赛的第二轮中对LUOV的恒定时间实现进行了演示。量子锤攻击是两种攻击的组合，一种是通过Rowhammer故障注入实现的位追踪攻击，另一种是使用位追踪作为预言机的分治攻击。使用位追踪，攻击者可以通过Rowhammer攻击收集到的有缺陷签名逐步恢复秘钥位，尽管速度较慢。我们使用分治攻击来利用LUOV关键生成部分的结构，并更高效地求解秘钥的方程系统，从而通过位追踪恢复少量秘密秘钥位。我们已经成功展示了对LUOV的首次野外攻击，仅使用不到4小时的主动Rowhammer攻击即可恢复全部11K个秘钥位。后处理部分可以高度并行化，因此可以使用一般资源轻松加速。量子锤攻击不做任何不切实际的假设，只需要软件共享（无需物理访问），因此可以用于针对共享云服务器或其他沙盒环境的攻击。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417272](https://doi.org/10.1145/3372297.3417272)
## TEMPEST Comeback: A Realistic Audio Eavesdropping Threat on Mixed-signal SoCs.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#tempest-comeback-a-realistic-audio-eavesdropping-threat-on-mixed-signal-socs) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#tempest-comeback-a-realistic-audio-eavesdropping-threat-on-mixed-signal-socs)**
### 作者
* Jieun Choi, KAIST, Daejeon, Republic of Korea
* Hae-Yong Yang, The Affiliated Institute of ETRI, Daejeon, Republic of Korea
* Dong-Ho Cho, KAIST, Daejeon, Republic of Korea
### 摘要
> 这项研究介绍了一种新的电磁辐射威胁——TEMPEST威胁，攻击者可以通过利用最近出现的意外电磁辐射，从远处秘密获取原始的纯音频信息。随着基于轻量级传感器的物联网（IoT）服务的普及，混合信号片上系统（MSoC）将所有组件（如数字、模拟甚至功率电路）自动集成到单个芯片组中，以最小化物联网设备的体积。因此，我们注意到其中一种典型的功率电路开关调制器（SWREG）的加速集成，可能会大幅增加意外电磁泄漏，重新启用音频TEMPEST攻击。本文认为，新型音频耦合的电磁泄漏的根本原因是SWREG的不可避免集成，该电路天生具有强大且低频（即几兆赫兹）的开关噪声；音频信号是以导电耦合在MSoC的单一通用衬底上，与系统时钟和新兴的SWREG噪声共存。与以前的泄漏相比，所提出的电磁泄漏具有其特定特征，即频率分布密集（SWREG噪声的频率间隔）、宽带（从几兆赫兹到1千兆赫兹以上）和静态（即时间不变的中心频率）。这些特点使得由于SWREG噪声引起的TEMPEST攻击具有更长的攻击范围，并且更能抵抗干扰。因此，所提供的TEMPEST攻击变得相当实用。为了验证因SWREG噪声而产生的新TEMPEST攻击，我们首先在消声室中测量和分析流行的MSoC传递的音频电磁泄漏，进行可行性分析。接下来，我们在办公环境中捕获商业设备的泄露，展示了该威胁的关键和实际性。此外，我们提出了一种新的信号增强方法，利用所提出的辐射（密集、宽带和静态），即相位对齐信号的谱增加。实验结果显示，搜狗语音记录器（nRF52810芯片组）和小米耳机（CSR8640芯片组）的测试扫频音调可以在10米以内进行重建。此外，还对数字信号（I2C）进行了短距离的攻击可行性分析。总体结果表明，与以前的侧信道分析相比，新型TEMPEST攻击更具实际意义。最后，我们提出了几种技术对策，以帮助设计安全的物联网设备。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417241](https://doi.org/10.1145/3372297.3417241)
## When the Differences in Frequency Domain are Compensated: Understanding and Defeating Modulated Replay Attacks on Automatic Speech Recognition.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#when-the-differences-in-frequency-domain-are-compensated-understanding-and-defeating-modulated-replay-attacks-on-automatic-speech-recognition) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#when-the-differences-in-frequency-domain-are-compensated-understanding-and-defeating-modulated-replay-attacks-on-automatic-speech-recognition)**
### 作者
* Shu Wang, George Mason University, Fairfax, VA, USA
* Jiahao Cao, George Mason University & Tsinghua University, Beijing, China
* Xu He, George Mason University, Fairfax, VA, USA
* Kun Sun, George Mason University, Fairfax, VA, USA
* Qi Li, Tsinghua University, Beijing, China
### 摘要
> 自动语音识别（ASR）系统已广泛应用于现代智能设备，以提供便捷、多样的语音控制服务。由于ASR系统容易受到音频重放攻击的威胁，可能被欺骗或误导，因此提出了许多防御系统，基于说话人在频域中的独特声学特征来识别重放音频信号。本文揭示了一种新型的调制重放攻击，可以绕过现有的频域防御系统。基本思想是通过使用定制的逆滤波器来补偿给定电子扬声器的频率失真。我们在真实智能设备上进行的实验证实，调制重放攻击可以成功躲避依赖于在频域中识别可疑特征的现有检测机制。为了击败调制重放攻击，我们设计并实施了一种名为DualGuard的对策。我们发现并正式证明，无论重放音频信号如何调制，重放攻击要么会在时域留下残余振铃，要么会引起频域的频谱失真。因此，通过同时检查频域和时域中的可疑特征，DualGuard可以成功检测包括调制重放攻击在内的各种重放攻击。我们在流行的语音交互平台ReSpeaker Core v2上实现了DualGuard的原型。实验结果表明，DualGuard可以在检测调制重放攻击时达到98%的准确率。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417254](https://doi.org/10.1145/3372297.3417254)
## PDiff: Semantic-based Patch Presence Testing for Downstream Kernels.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#pdiff-semantic-based-patch-presence-testing-for-downstream-kernels) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#pdiff-semantic-based-patch-presence-testing-for-downstream-kernels)**
### 作者
* Zheyue Jiang, Fudan University, Shanghai, China
* Yuan Zhang, Fudan University, Shanghai, China
* Jun Xu, Stevens Institute of Technology, Hoboken, NJ, USA
* Qi Wen, Fudan University, Shanghai, China
* Zhenghe Wang, Fudan University, Shanghai, China
* Xiaohan Zhang, Fudan University, Shanghai, China
* Xinyu Xing, Pennsylvania State University, University Park, PA, USA
* Min Yang, Fudan University, Shanghai, China
* Zhemin Yang, Fudan University, Shanghai, China
### 摘要
> 开放源代码内核已被数十亿设备上的大量下游供应商采用。然而，这些供应商经常省略或延迟采用主流版本发布的补丁。更糟糕的是，许多供应商并未公开补丁进展情况，甚至发布误导性信息。然而，对于一些对安全威胁非常关注的团体（如政府和企业用户）而言，补丁状态至关重要。这种做法促使我们有必要对下游内核进行可靠的补丁存在性测试。目前，最佳的补丁存在性测试方法是通过使用代码签名匹配来检查目标内核中补丁的存在性。然而，这种方法无法解决实践中的关键挑战。具体来说，下游供应商广泛定制主流代码并使用非标准的构建配置，这经常会改变补丁位置周围的代码，从而使代码签名失效。在这项工作中，我们提出了PDiff，一种针对下游内核镜像进行高可靠性补丁存在性测试的系统。从技术上讲，PDiff生成携带与目标补丁相关的语义的摘要。基于这些语义摘要，PDiff将目标内核与采用补丁前后的主流版本进行比较，优先选择更接近的参考版本来确定补丁状态。与以往关于补丁存在性测试的研究不同，我们的方法基于补丁的语义来检查相似性，因此对代码级别的变化有很高的容忍度。我们对398个与51个补丁对应的内核镜像进行的测试表明，PDiff可以以极低的误负率和零误正率实现高准确性。这显著优于目前最先进的工具。更重要的是，当出现代码定制和非标准构建配置时，PDiff始终具有很高的效果。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417240](https://doi.org/10.1145/3372297.3417240)
## A Systematic Study of Elastic Objects in Kernel Exploitation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#a-systematic-study-of-elastic-objects-in-kernel-exploitation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#a-systematic-study-of-elastic-objects-in-kernel-exploitation)**
### 作者
* Yueqi Chen, The Pennsylvania State University, State College, PA, USA
* Zhenpeng Lin, The Pennsylvania State University, State College, PA, USA
* Xinyu Xing, The Pennsylvania State University, State College, PA, USA
### 摘要
> 最近的研究提出了各种方法来进行内核利用和绕过内核保护。例如，安全研究人员已经展示了一种利用弹性内核对象特性来绕过KASLR、泄露堆栈/堆的Cookie甚至在内核中执行任意读取的利用方法。尽管这种利用方法被认为是揭示关键内核信息的常用方法，但没有证据表明有必要开发新的防御机制来限制这种利用方法。这是因为这种利用方法的有效性只是在零星内核漏洞上得到证明。目前尚不清楚这种方法是否对大多数内核漏洞有用。为了回答这个问题，我们提出了一种系统化的方法。它利用静态/动态分析方法来定位弹性内核对象，然后利用约束求解将它们与相应的内核漏洞配对。在这项工作中，我们将我们提出的方法实现为一个工具——ELOISE。在Linux、FreeBSD和XNU三个流行操作系统上使用这个工具，我们发现弹性对象在通用缓存中普遍存在。通过评估这些弹性对象在三个操作系统中40个内核漏洞上的有效性，我们观察到它们可以使大多数漏洞绕过KASLR和堆Cookie保护机制。此外，我们还观察到这些弹性对象甚至可以提升某些漏洞的可利用性，使它们能够在内核中执行任意读取。受到这些观察的启发，我们进一步引入了一种新的防御机制来降低弹性内核对象的威胁。我们在Linux上原型化了我们的防御机制，并展示了这种机制引入的开销可以忽略不计。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423353](https://doi.org/10.1145/3372297.3423353)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3423353](https://dl.acm.org/doi/pdf/10.1145/3372297.3423353)
## iDEA: Static Analysis on the Security of Apple Kernel Drivers.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#idea-static-analysis-on-the-security-of-apple-kernel-drivers) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#idea-static-analysis-on-the-security-of-apple-kernel-drivers)**
### 作者
* Xiaolong Bai, Orion Security Lab, Alibaba Group, Beijing, China
* Luyi Xing, Indiana University Bloomington, Bloomington, IN, USA
* Min Zheng, Orion Security Lab, Alibaba Group, Beijing, China
* Fuping Qu, Orion Security Lab, Alibaba Group, Beijing, China
### 摘要
> 苹果操作系统（例如iOS、tvOS、iPadOS、macOS等）上的驱动程序在内核空间中运行，驱动程序漏洞可能导致严重的安全后果。谷歌Project Zero的最新报告显示，苹果操作系统上的驱动程序漏洞已在野外积极被利用。此外，根据苹果的安全更新，我们观察到驱动程序漏洞占最近iOS版本内核漏洞的三分之一。尽管有严重的安全影响，但在苹果驱动程序上进行系统静态分析以找到安全漏洞之前从未进行过，更不用说对苹果驱动程序进行大规模研究了。在本文中，我们开发了首个自动化静态分析工具iDEA，用于发现苹果驱动程序二进制文件中的漏洞，适用于主要的苹果操作系统（iOS、macOS、tvOS、iPadOS）。我们总结并解决了一系列苹果特有的挑战：例如，我们发现先前的C++二进制分析技术在苹果平台上无效（无法恢复C++类并解析间接调用）是由于苹果独特的编程模型。为了解决这些挑战，我们从苹果的驱动程序编程和管理模型中找到可靠的信息源以恢复类，并确定了苹果驱动程序与用户空间程序交互的独特范例。iDEA支持定制的可插入式安全策略检查器进行安全分析。在iDEA的支持下，我们对主要的苹果操作系统和15个操作系统版本的3400个苹果驱动程序二进制文件进行了首次大规模研究，针对竞态条件和越界读写这两种常见安全风险，并发现了35个零日漏洞。我们开发了PoC和端到端攻击，以展示我们发现的实际影响。其中一部分漏洞已通过最近的苹果安全更新修补，或计划进行修复；其他漏洞正在经历苹果的内部调查程序。我们的评估结果显示，iDEA具有较低的误报率和时间开销。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423357](https://doi.org/10.1145/3372297.3423357)
## Exaggerated Error Handling Hurts! An In-Depth Study and Context-Aware Detection.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#exaggerated-error-handling-hurts-an-in-depth-study-and-context-aware-detection) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#exaggerated-error-handling-hurts-an-in-depth-study-and-context-aware-detection)**
### 作者
* Aditya Pakki, University of Minnesota, Twin Cities, Minneapolis, MN, USA
* Kangjie Lu, University of Minnesota, Twin Cities, Minneapolis, MN, USA
### 摘要
> 操作系统（OS）内核经常因为内部状态或外部输入的无效而遇到各种错误。为了确保操作系统内核的安全性和可靠性，开发者提出了多样化的机制来保守地捕获和处理潜在错误。现有的研究主要关注错误处理的完整性和充分性，以避免忽视问题。然而，我们发现使用过度严重的错误处理级别（例如，不必要地终止执行）反而会损害安全性和可靠性。在这种情况下，错误处理的后果甚至比错误本身更为严重。我们称之为夸张错误处理（EEH）。EEH错误的安全影响各不相同，包括拒绝服务、数据丢失、控制流完整性破坏、内存泄漏等。尽管其重要性，检测EEH仍然是一个未开发的课题。在本文中，我们首先对EEH进行了深入研究。根据研究结果，我们提出了一种名为EeCatch的方法，以上下文感知的方式检测EEH错误。EeCatch能够准确识别错误并提取它们的空间和时间上下文，并自动推断适当的错误处理严重级别。使用推断的严重级别，EeCatch最终检测到使用的错误处理超出了推断的严重级别的EEH错误。通过分析整个Linux内核，EeCatch报告了数百个潜在的可能导致系统崩溃等安全问题的EEH错误。在对EeCatch报告的104个案例进行评估后，我们手动确认了64个EEH错误，并为所有错误提交了补丁。使用我们的补丁，Linux维护者修复了48个报告的EEH错误，证实了EeCatch的有效性。据我们所知，我们是第一个系统地研究和检测EEH错误的。我们希望这些研究结果能提高开发者对EEH错误的重要后果的认识，以帮助他们避免这些错误。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417256](https://doi.org/10.1145/3372297.3417256)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417256](https://dl.acm.org/doi/pdf/10.1145/3372297.3417256)
## Secure Single-Server Aggregation with (Poly)Logarithmic Overhead.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#secure-single-server-aggregation-with-poly-logarithmic-overhead) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#secure-single-server-aggregation-with-poly-logarithmic-overhead)**
### 作者
* James Henry Bell, The Alan Turing Institute, London, United Kingdom
* Kallista A. Bonawitz, Google, New York, NY, USA
* Adrià Gascón, Google, London, United Kingdom
* Tancrède Lepoint, Google, New York, NY, USA
* Mariana Raykova, Google, New York, NY, USA
### 摘要
> 安全聚合是一种加密原语，使服务器能够学习许多客户端的向量输入之和。Bonawitz等人（CCS 2017）提出了一种构建，它使得每个客户端的计算和通信与参与方数量成线性关系。虽然这种功能可以实现广泛的隐私保护计算任务，但缩放问题限制了它的使用范围。我们提出了第一个实现每个客户端通信和计算具有多对数复杂度的安全聚合构建方法。我们的构建方法在半诚实和半恶意设置中提供安全性，其中对手控制服务器和Δ分数的客户端，并且在客户端中最多有Δ分数的丢失。我们的构建方法展示了如何将Bonawitz等人的完全通信图（带有线性开销）替换为对数度数的k-正则图，并保持安全性保证。除了改进安全聚合的已知渐近性能外，我们的构建方法还实现了非常高效的具体参数。在半诚实安全聚合中，每个客户端的成本可以达到Bonawitz等人方案适用于一千个客户端的成本。在半恶意设置中，如果每个客户端只需要与3%的客户端通信，则在拥有10 4个客户端的情况下，可以确保其输入已与至少5000个其他客户端的输入相加，同时还能抵御5%的受损客户端和5%的丢失。我们还展示了将安全聚合应用于安全洗牌任务的方法，该方法实现了差分隐私的shuffle模型的首个具有密码学安全性的实例化。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417885](https://doi.org/10.1145/3372297.3417885)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417885](https://dl.acm.org/doi/pdf/10.1145/3372297.3417885)
## Fast Database Joins and PSI for Secret Shared Data.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#fast-database-joins-and-psi-for-secret-shared-data) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#fast-database-joins-and-psi-for-secret-shared-data)**
### 作者
* Payman Mohassel, Facebook, Menlo Park, CA, USA
* Peter Rindal, Visa Research, San Francisco, CA, USA
* Mike Rosulek, Oregon State University, Corcalis, OR, USA
### 摘要
> 我们提出了一种可扩展的协议，用于在诚实多数三方环境中的秘密共享数据的数据库连接。我们协议的关键特点是具有类似SQL的连接/选择查询的丰富功能，以及由于输入和输出在各方之间以泛化方式秘密共享，能够组合连接操作。只要所有连接都使用唯一的主键操作，协议过程中不向任何一方透露任何信息。特别是，中间连接的大小甚至都不会被透露。我们的所有协议都是常数轮次的，并且对于连接两个包含n行的表，实现了O(n)的通信和计算开销。这些特性使我们的协议非常适用于外包的安全计算。在这种设置下，设立了几个非合谋的服务器，并且将输入数据在它们之间共享。然后这些服务器执行相关的秘密共享计算，并输出结果。最近，这种模型在业界开始流行，例如Facebook的Crypten、Cape Privacy的TFEncrypted、Mozilla Telemetry。我们还在我们的框架上实现了两个应用程序。第一个应用程序以保护隐私的方式检测美国50个州的政府机构内部和之间的选民登记错误。第二个应用程序允许几个组织比较网络安全日志以更准确地识别共同的安全威胁，例如botnet的IP地址。在这两种情况下，这些应用程序的实用性取决于高效连接数百万条秘密共享记录。例如，我们的三方协议可以在4.9秒内连接两个包含100万条记录的数据集，或者在仅仅3.1秒内计算这个连接的基数。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423358](https://doi.org/10.1145/3372297.3423358)
## The Boon and Bane of Cross-Signing: Shedding Light on a Common Practice in Public Key Infrastructures.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#the-boon-and-bane-of-cross-signing-shedding-light-on-a-common-practice-in-public-key-infrastructures) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#the-boon-and-bane-of-cross-signing-shedding-light-on-a-common-practice-in-public-key-infrastructures)**
### 作者
* Jens Hiller, RWTH Aachen University, Aachen, Germany
* Johanna Amann, ICSI, Corelight & LBNL, Berkeley, CA, USA
* Oliver Hohlfeld, Brandenburg University of Technology, Cottbus, Germany
### 摘要
> 公钥基础架构（PKI）及其受信任的证书颁发机构（CA）为互联网提供了信任基础：CA签署证书以证明服务器、应用程序或用户的身份。为了获得操作系统和浏览器的信任，CA必须接受漫长而昂贵的验证过程。或者，受信任的CA可以跨签其他CA以扩展其信任。在本文中，我们系统地分析了Web PKI中跨签发的现状和过去情况。我们的数据集（源自被动TLS监视器和公共CT日志）涵盖了7年以上的时间和2.25亿个证书，共有93亿个信任路径。我们展示了跨签发的利与弊。我们讨论了吊销受信任的CA证书的难度，令人担忧的是，跨签发可能导致吊销后仍然存在有效的信任路径；这对于常常盲目信任所有CA证书并忽略吊销的非浏览器软件来说是个问题。然而，跨签发也能够快速引导新的CA，例如Let's Encrypt，并通过提供向后兼容性实现无干扰的用户体验。在本文中，我们提出了跨签发的新规则和指导，以保留其积极的潜力同时减轻其风险。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423345](https://doi.org/10.1145/3372297.3423345)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3423345](https://dl.acm.org/doi/pdf/10.1145/3372297.3423345)
## Zombie Awakening: Stealthy Hijacking of Active Domains through DNS Hosting Referral.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#zombie-awakening-stealthy-hijacking-of-active-domains-through-dns-hosting-referral) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#zombie-awakening-stealthy-hijacking-of-active-domains-through-dns-hosting-referral)**
### 作者
* Eihal Alowaisheq, Indiana University & King Saud University, Bloomington, IN, USA
* Siyuan Tang, Indiana University, Bloomington, IN, USA
* Zhihao Wang, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Fatemah Alharbi, Taibah University, Madina, Saudi Arabia
* Xiaojing Liao, Indiana University, Bloomington, IN, USA
* XiaoFeng Wang, Indiana University, Bloomington, IN, USA
### 摘要
> 近年来，已经揭示了指向不再解析域的NS记录的安全隐患。先前的研究研究了指向已过期域的陈旧DNS记录。DNS托管服务的普及带来了一类新的陈旧NS记录，这些记录位于活动域的区域中（而不是顶级域的区域）。据我们所知，这种陈旧NS记录的安全风险以前从未被研究过。在我们的研究中，我们展示了这种新类型的陈旧NS记录可以被实际利用，从而更潜在地劫持与DNS托管服务相关的域。我们还对超过1M个知名域、17个DNS托管提供商和12个流行的公共解析器运营商进行了大规模分析，以确认这种安全风险的普遍存在性。我们的研究进一步发现了628个可劫持的域（例如6个政府机构和2个支付服务），14个受影响的DNS托管提供商（例如Amazon Route 53）和10个容易受攻击的公共解析器运营商（例如CloudFlare）。此外，我们对它们进行了深入的测量分析，从而更好地了解这种新的安全风险。同时，我们还探索了各个受影响方可以采纳的缓解技术。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417864](https://doi.org/10.1145/3372297.3417864)
## Off-Path TCP Exploits of the Mixed IPID Assignment.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#off-path-tcp-exploits-of-the-mixed-ipid-assignment) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#off-path-tcp-exploits-of-the-mixed-ipid-assignment)**
### 作者
* Xuewei Feng, Tsinghua University, Beijing, China
* Chuanpu Fu, Tsinghua University, Beijing, China
* Qi Li, Tsinghua University, Beijing, China
* Kun Sun, George Mason University, Fairfax, VA, USA
* Ke Xu, Tsinghua University & Peng Cheng Laboratory, Beijing, China
### 摘要
> 在本文中，我们揭示了一种新的离路径TCP劫持攻击，可以通过操纵被广泛应用于Linux内核版本4.18及以上以对抗TCP劫持攻击的新的混合IPID分配方法来终止受害者的TCP连接或向受害者的TCP连接中注入伪造数据。该攻击包括三个步骤。首先，离路径攻击者可以将TCP数据包的IPID分配从更安全的基于套接字的策略降级为较不安全的基于哈希的策略，并构建一个共享的IPID计数器，以形成受害者上的侧信道。其次，攻击者通过观察受害者上的共享IPID计数器来检测TCP连接的存在。第三，攻击者通过观察共享IPID计数器的侧信道来推测检测到的连接的序列号和确认号。因此，攻击者可以完全劫持连接，即重置连接或污染数据流。我们评估了这种离路径TCP攻击在真实世界中的影响。我们对SSH DoS、操纵网络流量和污染BGP路由表的案例研究显示了它对各种应用的威胁。我们的实验结果表明，我们的离路径TCP攻击可以在215秒内构建，成功率超过88%。最后，我们分析了该漏洞的根本原因，并开发了一种新的IPID分配方法来抵御这种攻击。我们在Linux 4.18中原型化了我们的防御，并通过对互联网上的真实应用进行广泛评估确认其有效性。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417884](https://doi.org/10.1145/3372297.3417884)
## Practical Recommendations for Stronger, More Usable Passwords Combining Minimum-strength, Minimum-length, and Blocklist Requirements.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#practical-recommendations-for-stronger-more-usable-passwords-combining-minimum-strength-minimum-length-and-blocklist-requirements) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#practical-recommendations-for-stronger-more-usable-passwords-combining-minimum-strength-minimum-length-and-blocklist-requirements)**
### 作者
* Joshua Tan, Carnegie Mellon University, Pittsburgh, PA, USA
* Lujo Bauer, Carnegie Mellon University, Pittsburgh, PA, USA
* Nicolas Christin, Carnegie Mellon University, Pittsburgh, PA, USA
* Lorrie Faith Cranor, Carnegie Mellon University, Pittsburgh, PA, USA
### 摘要
> 存在多种机制来鼓励用户创建更强的密码，包括最小长度和字符类别要求、禁止使用黑名单密码以及给予对候选密码强度的反馈。尽管有很多相关研究，但在这些机制如何组合和配置以达到最佳效果方面，并没有明确的科学指导。通过两个在线实验，我们评估了最小长度和字符类别要求、黑名单和根据神经网络驱动的密码强度估计要求密码超过一定强度阈值的组合。我们的研究结果对于制定既确保安全性又提高可用性的策略配置提供了具体建议。特别是对于高价值用户账户，我们建议采用结合最小强度和最小长度要求的政策。虽然我们对于需要使用黑名单的组织提供了建议，但使用黑名单并不能提供更多的收益。有趣的是，我们还发现在面对专家攻击者时，传统上被认为能够产生更强密码的字符类别要求在实践中可能提供很少的改进，甚至可能降低有效的安全性。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417882](https://doi.org/10.1145/3372297.3417882)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417882](https://dl.acm.org/doi/pdf/10.1145/3372297.3417882)
## The Signal Private Group System and Anonymous Credentials Supporting Efficient Verifiable Encryption.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#the-signal-private-group-system-and-anonymous-credentials-supporting-efficient-verifiable-encryption) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#the-signal-private-group-system-and-anonymous-credentials-supporting-efficient-verifiable-encryption)**
### 作者
* Melissa Chase, Microsoft Research, Redmond, WA, USA
* Trevor Perrin, Signal Technology Foundation, Oakland, CA, USA
* Greg Zaverucha, Microsoft Research, Redmond, WA, USA
### 摘要
> 在本文中，我们介绍了一种用于在Signal Messenger安全消息应用中维护用户群组成员列表的系统。其目标是支持私密群组，使得群组成员可以轻松获取成员信息，但对服务提供者或群组外部的人员而言，这些信息是隐藏的。在所提出的解决方案中，一个中央服务器以加密条目的形式存储群组成员。群组成员通过某种方式向服务器进行身份验证，仅透露出他们对某个加密条目的对应关系，然后读取和写入加密条目。在我们的设计中，身份验证使用一种称为键验证匿名凭证（KVAC）的原语，并且我们构建了一种基于代数MAC的新KVAC方案，该方案在一个素数阶的群G中被实例化。新KVAC的好处是属性可以是G中的元素，而之前的方案只能支持属性是G阶数模整数的属性。这使我们能够使用高效的Elgamal类似加密方案来加密群组数据，并且可以在零知识证明中证明加密数据是由凭证认证的。由于加密、身份验证和相关的知识证明都在G中实例化，因此该系统在处理庞大的群组时也非常高效。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417887](https://doi.org/10.1145/3372297.3417887)
## A Forensically Sound Method of Identifying Downloaders and Uploaders in Freenet.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#a-forensically-sound-method-of-identifying-downloaders-and-uploaders-in-freenet) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#a-forensically-sound-method-of-identifying-downloaders-and-uploaders-in-freenet)**
### 作者
* Brian N. Levine, University of Massachusetts Amherst, Amherst, MA, USA
* Marc Liberatore, University of Massachusetts Amherst, Amherst, MA, USA
* Brian Lynn, University of Massachusetts Amherst, Amherst, MA, USA
* Matthew Wright, Rochester Institute of Technology, Rochester, NY, USA
### 摘要
> 创建和传播儿童性虐待材料（CSAM）涉及对受害者隐私的持续侵犯，超越了他们所记录的原始伤害。大量这些材料通过Freenet匿名网络进行分发：根据我们的观察，几乎三分之一的Freenet请求是针对已知的CSAM。本文中，我们提出并评估了一种新方法，用于调查这些对被剥削儿童隐私的侵犯。我们的取证方法可以区分邻近节点是实际的上传者还是下载者，还是仅仅是中继节点。我们的方法仅需要分析发送给单个被动节点的流量。我们对我们的方法进行了广泛评估。根据实际的CSAM请求进行的现场测量显示，我们用于识别下载者的FPR为0.002±0.003。我们还展示了用于识别上传者的FPR为0.009±0.018，精确度为1.00±0.01，TPR为0.44±0.01的结果，这是基于现场测试的。此外，我们推导了我们假设检验的FPR和功率的表达式；进行了单个和同时下载者的模拟；并对Freenet网络进行了特性分析以供参数选择参考。我们参与了几个美国联邦法院案件，其中我们的方法的使用被一致支持。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417876](https://doi.org/10.1145/3372297.3417876)
## A Qualitative Study of Dependency Management and Its Security Implications.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#a-qualitative-study-of-dependency-management-and-its-security-implications) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#a-qualitative-study-of-dependency-management-and-its-security-implications)**
### 作者
* Ivan Pashchenko, University of Trento, Trento, Italy
* Duc-Ly Vu, University of Trento, Trento, Italy
* Fabio Massacci, University of Trento & Vrije Universiteit Amsterdam, Trento, Italy
### 摘要
> 多项针对Maven、NPM和Android生态系统的大规模研究指出，许多开发人员往往不经常更新他们的易受攻击的软件库，从而使他们代码的用户面临安全风险。本研究的目的是定性地调查开发人员在选择、管理和更新软件依赖时的功能和安全考虑因素之间的选择和相互作用对其整体决策策略的影响。我们进行了25次半结构化访谈，访谈对象包括位于9个国家的大中型企业的开发人员。所有访谈内容均进行了转录、编码和分析，以进行应用主题分析。它们强调了开发人员面临的权衡，安全研究人员必须理解这些权衡，以提供有效的支持来减轻漏洞（例如，将安全修复与功能更改捆绑在一起可能由于缺乏资源来修复功能性破坏性变化而阻碍其采用）。我们进一步总结了我们的观察结果，以行动方案的形式提出了算法和自动化工具应该做到什么程度，以有效支持（半）自动依赖管理。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417232](https://doi.org/10.1145/3372297.3417232)
## Forensic Analysis in Access Control: Foundations and a Case-Study from Practice.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#forensic-analysis-in-access-control-foundations-and-a-case-study-from-practice) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#forensic-analysis-in-access-control-foundations-and-a-case-study-from-practice)**
### 作者
* Nahid Juma, University of Waterloo, Waterloo, ON, Canada
* Xiaowei Huang, University of Waterloo, Waterloo, ON, Canada
* Mahesh Tripunitara, University of Waterloo, Waterloo, ON, Canada
### 摘要
> 我们在访问控制系统的法医分析研究中提出了一个之前尚未涉及的方法。法医学旨在回答关于系统过去状态的问题，并因此在安全事件发生时提供重要线索和证据。访问控制涉及谁可以对资源执行什么操作，并且是一项关键的安全功能。我们的重点是访问控制系统，该系统允许将对授权状态的更改委托给潜在不受信任的用户。我们认为，在考虑法医分析时，访问控制的这种情境是一个重要的情境，并且观察到它是安全分析的自然补充，后者在文献中得到了广泛考虑。我们以抽象的形式提出了此类访问控制系统的法医分析问题，并对文献中的三种方案进行了具体化：一个众所周知的访问矩阵方案，一个基于角色的方案和一个自由度方案。我们确定了法医分析的计算复杂性，并将其与每个方案的安全分析进行了比较。我们还考虑了日志的概念，即随时间收集的数据，以帮助法医分析。我们提出了关于足够和最小化日志的结果，从而使得对这三种方案的法医分析变得高效。这激发了对目标导向日志记录的讨论，旨在明确通过帮助法医分析来达到的目的。我们在无服务器云应用的实际环境中进行了案例研究，并观察到目标导向日志记录可以非常有效。我们的工作为信息安全的基础和实际应用做出了贡献。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417860](https://doi.org/10.1145/3372297.3417860)
## Is the Classical GMW Paradigm Practical? The Case of Non-Interactive Actively Secure 2PC.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#is-the-classical-gmw-paradigm-practical-the-case-of-non-interactive-actively-secure-2pc) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#is-the-classical-gmw-paradigm-practical-the-case-of-non-interactive-actively-secure-2pc)**
### 作者
* Jackson Abascal, University of Rochester, Rochester, NY, USA
* Mohammad Hossein Faghihi Sereshgi, University of Rochester, Rochester, NY, USA
* Carmit Hazay, Bar-Ilan University, Ramat-Gan, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Muthuramakrishnan Venkitasubramaniam, University of Rochester, Rochester, NY, USA
### 摘要
> 在安全计算中，对抗主动攻击者提供保护是最具挑战性的方面之一，这些攻击者可以任意更改被损坏方的行为。由Goldreich、Micali和Wigderson (GMW)提出的一种强大范式是遵循两步法：(1)为手头任务设计一个被动安全协议π；(2)应用一个通用编译器将π转换为同一任务的主动安全协议π'。在这项工作中，我们实现了第一个基于通用GMW范式设计的两方主动安全协议。我们的实现适用于基于混淆电路的被动安全协议π，使用次线性零知识证明来确保混淆的正确性。我们的协议的主要变体通过遵循Ishai等人(Eurocrypt 2011)和Hazay等人(TCC 2017)的“认证遗忘传输”蓝图，以黑盒使用底层的遗忘传输原语。我们还分析了一个概念上更简单但不太高效的变体，它对遗忘传输的使用不是黑盒式的。我们的协议具有几个重要优点。它支持非交互安全计算(NISC)，其中接收方发布其输入的"加密"，并从发送方获得输出的"加密"。通过使用离线非交互预处理来增强此NISC协议的效率，发送方发布一个单个混淆电路以及正确性证明，而接收方甚至不需要在线。发送方和接收方的在线工作量很小，与依赖于电路规模而不是输入规模的Yao的被动安全协议相比，开销较小。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423366](https://doi.org/10.1145/3372297.3423366)
## Ferret: Fast Extension for Correlated OT with Small Communication.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ferret-fast-extension-for-correlated-ot-with-small-communication) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ferret-fast-extension-for-correlated-ot-with-small-communication)**
### 作者
* Kang Yang, State Key Laboratory of Cryptology, Beijing, China
* Chenkai Weng, Northwestern University, Evanston, IL, USA
* Xiao Lan, Sichuan University, Chengdu, China
* Jiang Zhang, State Key Laboratory of Cryptology, Beijing, China
* Xiao Wang, Northwestern University, Evanston, IL, USA
### 摘要
> 相关的遗忘传输（Correlated oblivious transfer，COT）是安全多方计算（Secure multi-party computation，MPC）的关键构建块，可以通过OT扩展高效地生成。基于伪随机相关生成器（Pseudorandom correlation generator，PCG）范例的最近研究提出了一种新方法，只使用与输出长度亚线性的通信即可生成随机的COT相关性。然而，由于它们的高计算复杂性，这些协议只在受限网络带宽下比经典的IKNP-style OT扩展更快。在本文中，我们提出了在PCG范例中实现了前所未有性能的新型COT协议。以$50$ Mbps的网络带宽为例，我们的恶意安全协议可以在$22$纳秒内生成一个COT相关性。具体而言，我们的研究结果总结如下：
> 
> \beginenumerate
> 
> \item 我们提出了一个具有亚线性通信和线性计算的诚实行为COT协议。该协议基于Schoppmann等人（CCS 2019）的最近VOLE协议的诚实行为安全性假设。我们能够应用各种优化方法将其通信成本减少大约$15\times$，不包括一次性设置成本，该成本随着我们生成更多COT相关性而减少。
> 
> \item 我们增强了我们的COT协议，使其具有恶意安全性而不损失效率。在所有优化方法中，我们的新协议具有一种新的检查技术，可以免费确保正确性和一致性。特别是，我们的恶意安全协议每个COT的速度只比正常情况下慢\em $1-3$纳秒。
> 
> \item 我们实现了我们的协议，并且代码将在EMP工具包中公开。与Boyle等人（CCS 2019）的最新协议相比，在任何高于$50$ Mbps的网络下，我们的协议在诚实行为和恶意设置下的运行时间至少提高了$9\times$。
> 
> \endenumerate
> 
> 通过创造COT相关性的这一新的高效率记录，我们预计在我们的协议之上将会有新的协议设计和优化方法的涌现。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417276](https://doi.org/10.1145/3372297.3417276)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417276](https://dl.acm.org/doi/pdf/10.1145/3372297.3417276)
## Impersonation-as-a-Service: Characterizing the Emerging Criminal Infrastructure for User Impersonation at Scale.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#impersonation-as-a-service-characterizing-the-emerging-criminal-infrastructure-for-user-impersonation-at-scale) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#impersonation-as-a-service-characterizing-the-emerging-criminal-infrastructure-for-user-impersonation-at-scale)**
### 作者
* Michele Campobasso, Eindhoven University of Technology, Eindhoven, Netherlands
* Luca Allodi, Eindhoven University of Technology, Eindhoven, Netherlands
### 摘要
> 在这篇论文中，我们提供了新兴的犯罪基础设施的证据，这种基础设施可以支持大规模的冒充攻击。冒充即服务（IMPaaS）允许攻击者系统地收集和执行用户配置文件（包括用户凭证、Cookie、设备和行为指纹以及其他元数据），以绕过基于风险的身份验证系统并有效地绕过多因素身份验证机制。我们介绍了IMPaaS模型，并通过分析一家俄罗斯的大规模邀请制IMPaaS平台的运作，提供了全球超过26万名互联网用户的用户配置文件。我们的研究结果表明，IMPaaS模型正在增长，并且提供了在多个平台上系统地逃避认证控制所需的机制，同时为攻击者提供了可靠、实时和半自动化的环境，以便以规模攻击并模拟互联网用户。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417892](https://doi.org/10.1145/3372297.3417892)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417892](https://dl.acm.org/doi/pdf/10.1145/3372297.3417892)
## VisualPhishNet: Zero-Day Phishing Website Detection by Visual Similarity.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#visualphishnet-zero-day-phishing-website-detection-by-visual-similarity) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#visualphishnet-zero-day-phishing-website-detection-by-visual-similarity)**
### 作者
* Sahar Abdelnabi, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Katharina Krombholz, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Mario Fritz, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 网络钓鱼网站仍然是当今互联网生态系统中的主要威胁。尽管之前做出了许多努力，基于相似性的检测方法对受信任的网站提供的保护仍然不足，尤其是对于未见过的网络钓鱼页面。本文介绍了VisualPhishNet，一种基于三元卷积神经网络（CNN）的新型基于相似性的钓鱼检测框架。VisualPhishNet通过一种相似性度量学习网站的特征，在新的视觉外观下能够检测到钓鱼网站。此外，我们还介绍了迄今为止最大的数据集VisualPhish，以生态有效的方式促进视觉钓鱼检测。我们展示了我们的方法在对抗各种逃避攻击时优于先前的视觉相似性钓鱼检测方法。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417233](https://doi.org/10.1145/3372297.3417233)
## MuSig-DN: Schnorr Multi-Signatures with Verifiably Deterministic Nonces.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#musig-dn-schnorr-multi-signatures-with-verifiably-deterministic-nonces) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#musig-dn-schnorr-multi-signatures-with-verifiably-deterministic-nonces)**
### 作者
* Jonas Nick, Blockstream, Victoria, Canada
* Tim Ruffing, Blockstream, Victoria, Canada
* Yannick Seurin, ANSSI, Paris, France
* Pieter Wuille, Blockstream, Victoria, Canada
### 摘要
> MuSig是一种用于Schnorr签名的多重签名方案，支持密钥聚合，在纯公钥模型下具有安全性。对于基于离散对数的签名，如RFC~6979等标准的随机性去相关化技术，可以使签名过程对随机数生成的灾难性故障免疫，但对于多重签名而言不适用，因为攻击者可以欺骗诚实用户生成两个具有相同随机数的不同部分签名，这将暴露用户的秘密密钥。在本文中，我们提出了MuSig的一个变种，其中签名者根据消息和所有签名者的公钥确定地生成他们的nonce，并通过向共签者提供非交互式零知识证明来证明他们确实这样做。该方案被称为MuSig-DN，是第一个具有确定性签名的Schnorr多重签名方案。因此，它的签名协议不仅对于随机数生成的故障具有健壮性，而且对于试图利用签名过程的状态性的攻击，例如虚拟机回溯攻击也具有健壮性。作为额外的好处，MuSig-DN中的签名会话仅需要两轮，而不是所有先前的Schnorr多重签名方案（包括MuSig）所需的三轮。为了实现我们的构造，我们确定了一个合适的代数伪随机函数，并提供了该函数的高效实现作为算术电路。这样就可以使用将输入给定为Pedersen承诺的算术电路的零知识证明框架有效地实现MuSig-DN，例如Bulletproofs。我们通过在比特币中使用的secp256k1椭圆曲线上对其进行实现，展示了我们技术的实用性。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417236](https://doi.org/10.1145/3372297.3417236)
## UC Non-Interactive, Proactive, Threshold ECDSA with Identifiable Aborts.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#uc-non-interactive-proactive-threshold-ecdsa-with-identifiable-aborts) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#uc-non-interactive-proactive-threshold-ecdsa-with-identifiable-aborts)**
### 作者
* Ran Canetti, Boston University, Boston, MA, USA
* Rosario Gennaro, The City College of New York, New York, NY, USA
* Steven Goldfeder, Cornell Tech & Offchain Labs, New York , NY, USA
* Nikolaos Makriyannis, Fireblocks, Tel Aviv, Israel
* Udi Peled, Fireblocks, Tel Aviv, Israel
### 摘要
> 基于Gennaro和Goldfeder、Lindell和Nof协议（CCS '18），本文提出了两种阈值ECDSA（椭圆曲线数字签名算法）协议，适用于任意数量的签名者和任意阈值，并在以下方面改进了现有技术： - 对于两个协议，仅最后一轮需要知道消息，其他轮可以在预处理阶段进行，从而实现了非交互式阈值ECDSA协议。 - 两个协议都能抵御签署者的自适应破坏。此外，它们还包括定期刷新机制，并提供完全积极安全性。 - 两个协议在UC框架中实现了理想的阈值签名功能，在全局随机预言机模型中假设了强RSA、DDH、Paillier加密的语义安全性，以及ECDSA存在性伪造性的略微增强变体。 - 在生成有效签名失败的情况下，两个协议通过确定受损方的身份实现了问责。这两个协议的区别在于轮复杂度和检测作弊方的身份验证过程。具体如下： - 对于第一个协议，签名生成仅需要4轮（相比当前最先进的8轮），但是身份验证过程需要与参与方数量的平方成正比的计算和通信。 - 对于第二个协议，身份验证过程仅需要与参与方数量成线性正比的计算和通信，但签名生成需要7轮。这些特性（低延迟、与冷钱包架构兼容、积极安全、可识别的中止和可组合的安全性）使得这两个协议非常适用于基于ECDSA的加密货币的阈值钱包。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423367](https://doi.org/10.1145/3372297.3423367)
## A Generic Technique for Automatically Finding Defense-Aware Code Reuse Attacks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#a-generic-technique-for-automatically-finding-defense-aware-code-reuse-attacks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#a-generic-technique-for-automatically-finding-defense-aware-code-reuse-attacks)**
### 作者
* Edward J. Schwartz, Carnegie Mellon University, Pittsburgh, PA, USA
* Cory F. Cohen, Carnegie Mellon University, Pittsburgh, PA, USA
* Jeffrey S. Gennari, Carnegie Mellon University, Pittsburgh, PA, USA
* Stephanie M. Schwartz, Millersville University, Millersville, PA, USA
### 摘要
> 过去十年来，代码重用攻击一直是大量研究的对象。这项研究主要源于对返回导向编程（ROP）的早期工作，该研究表明当时新提出的非执行内存（NX）防御可以被绕过。最近，研究界同时研究了一些被认为可以防御代码重用攻击的新防御措施，如控制流完整性（CFI），以及针对这些防御措施的具备防御意识的攻击技术，如面向数据的编程（DOP）。不幸的是，防御意识攻击的可行性很大程度上取决于被攻击程序的行为方式，这使得防御者难以理解像CFI这样的防御措施能提供多少保护。为了更好地理解这一点，研究人员引入了自动化的防御意识代码重用攻击系统。不幸的是，现有的少数几个系统实现了一个复杂且无法用于考虑其他防御措施的单一固定的防御特定策略。在本文中，我们提出了一个通用框架，用于在可执行文件中自动发现防御意识代码重用攻击。与现有的使用固定策略进行特定防御的工作不同，我们的框架可以通过分析防御的运行时行为来生成适用于多种防御的攻击。我们框架的高层次见解是，代码重用攻击可以被定义为一个状态可达性问题，而防御措施则阻止了某些状态之间的转换。我们将我们的框架实现为一个名为Limbo的工具，该工具利用现有的二进制concolic执行器来解决可达性问题。我们评估了Limbo并展示了它在代码可重用性较低的情况下表现出色，这使其成为现有技术的有益补充。我们展示了在这种情况下，Limbo优于自动化ROP攻击的现有系统，以及在精细的CFI存在下自动化DOP攻击的系统，尽管它对ROP或DOP攻击没有特殊知识。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417234](https://doi.org/10.1145/3372297.3417234)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417234](https://dl.acm.org/doi/pdf/10.1145/3372297.3417234)
## Methodologies for Quantifying (Re-)randomization Security and Timing under JIT-ROP.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#methodologies-for-quantifying-re-randomization-security-and-timing-under-jit-rop) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#methodologies-for-quantifying-re-randomization-security-and-timing-under-jit-rop)**
### 作者
* Salman Ahmed, Virginia Tech, Blacksburg, VA, USA
* Ya Xiao, Virginia Tech, Blacksburg, VA, USA
* Kevin Z. Snow, Zeropoint Dynamics, LLC, Chapel Hill, NC, USA
* Gang Tan, Penn State University, State College, PA, USA
* Fabian Monrose, University of North Carolina at Chapel Hill, Chapel Hill, NC, USA
* Danfeng (Daphne) Yao, Virginia Tech, Blacksburg, VA, USA
### 摘要
> 即时Return-Oriented Programming (JIT-ROP) 允许动态发现指令页并启动代码重用攻击，有效地绕过大多数精细化地址空间布局随机化 (ASLR) 保护。然而，在代码(重新)随机化对代码重用攻击的影响方面，尚未进行深入研究。例如，如何通过考虑小工具收敛速度来有效计算重新随机化间隔，以打败 JIT-ROP 攻击？JIT-ROP 中的起始指针如何影响小工具的可用性和收敛时间？细颗粒度代码随机化对 JIT-ROP 负载的图灵完备表达能力有何影响？我们对细颗粒度代码随机化方案的有效性进行了全面的测量研究，使用了 5 个工具、20 个应用程序，包括 6 个浏览器、1 个浏览器引擎和 25 个动态库。我们提供了衡量 JIT-ROP 小工具可用性、质量和图灵完备表达能力的方法，以及使用图灵完备 (TC)、优先级、MOV TC 和负载小工具集在重新随机化方案中经验确定重新随机化间隔的上限的方法。实验证明，在我们测试的应用程序中，上限范围从1.5秒到3.5秒不等。此外，我们的结果显示，JIT-ROP 攻击中使用的泄漏指针的位置对小工具的可用性没有影响，但对攻击者发现小工具的速度有影响。我们的结果还表明，在 JIT-ROP 威胁模型下，指令级单轮随机化阻碍了当前的小工具查找技术。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417248](https://doi.org/10.1145/3372297.3417248)
## Finding Cracks in Shields: On the Security of Control Flow Integrity Mechanisms.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#finding-cracks-in-shields-on-the-security-of-control-flow-integrity-mechanisms) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#finding-cracks-in-shields-on-the-security-of-control-flow-integrity-mechanisms)**
### 作者
* Yuan Li, BNRist & INSC, Tsinghua University, Beijing, China
* Mingzhe Wang, Tsinghua University, Beijing, China
* Chao Zhang, BNRist & INSC, Tsinghua University, Beijing, China
* Xingman Chen, Tsinghua University, Beijing, China
* Songtao Yang, Tsinghua University, Beijing, China
* Ying Liu, BNRist & INSC, Tsinghua University, Beijing, China
### 摘要
> 控制流完整性（CFI）是一种有希望的技术，用于减轻控制流劫持攻击。在过去的十年中，研究人员提出了几十种CFI机制。尽管它们自己声称具有的安全性承诺未经仔细评估，因此值得怀疑。在本文中，我们提出了一种解决方案，用于衡量实际安全性和理论安全性之间的差距。首先，我们提出了CScan来精确测量受CFI保护的间接控制转移（ICT）指令的运行时可行目标，通过列举所有潜在的代码地址并测试ICT是否被允许跳转到它们。其次，我们提出了CBench作为校验CFI解决方案对典型攻击的有效性的实用检查，通过利用一套具有CFI保护的易受攻击程序并验证识别出的可行目标。我们评估了最近12个开源CFI机制，并发现大多数CFI机制或实现中存在10个缺陷。对于一些CFI机制而言，它们的安全策略或受保护的ICT集合与它们声称的不符。一些CFI甚至扩大了攻击面（例如引入了意外目标）。为了促进对CFI的更深入理解，我们将这些缺陷总结为7个常见陷阱，涵盖了CFI机制的整个生命周期，并揭示了影响CFI机制实际安全性的问题。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417867](https://doi.org/10.1145/3372297.3417867)
## InSpectre: Breaking and Fixing Microarchitectural Vulnerabilities by Formal Analysis.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#inspectre-breaking-and-fixing-microarchitectural-vulnerabilities-by-formal-analysis) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#inspectre-breaking-and-fixing-microarchitectural-vulnerabilities-by-formal-analysis)**
### 作者
* Roberto Guanciale, KTH Royal Institute of Technology, Strockholm, Sweden
* Musard Balliu, KTH Royal Institute of Technology, Stockholm, Sweden
* Mads Dam, KTH Royal Institute of Technology, Stockholm, Sweden
### 摘要
> 最近的Spectre攻击展示了当前计算机微体系结构的根本不安全性。这些攻击利用流水线、乱序执行和推测等特性，从进程中提取任意信息来获取存储器内容。迄今为止尚未出现一种全面的正式微体系结构模型，能够表示在高性能流水线结构中可以有意义地实现的乱序执行和推测行为的形式。这样的模型将非常有用，因为它可以正式确立漏洞的存在与不存在以及防护措施的正确性。本文提出了一个针对单核处理器的这样的模型。该模型刻意设计得非常通用，提供了定义真实CPU模型的基础设施。它融合了支撑所有已知Spectre漏洞的微体系结构特性。我们使用该模型来阐明现有和新的漏洞的安全性，并正式分析提议的防护措施的有效性。具体而言，我们发现了三个新的（潜在）漏洞，包括Spectre v4的一个新变种、一种关于推测取指的漏洞和一种关于乱序执行的漏洞，并分析了包括恒定时间和序列化指令在内的现有防护措施的效果。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417246](https://doi.org/10.1145/3372297.3417246)
## Déjà Vu: Side-Channel Analysis of Mozilla's NSS.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#d-j-vu-side-channel-analysis-of-mozillas-nss) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#d-j-vu-side-channel-analysis-of-mozillas-nss)**
### 作者
* Sohaib ul Hassan, Tampere University, Tampere, Finland
* Iaroslav Gridin, Tampere University, Tampere, Finland
* Ignacio M. Delgado-Lozano, Tampere University, Tampere, Finland
* Cesar Pereida García, Tampere University, Tampere, Finland
* Jesús-Javier Chi-Domínguez, Tampere University, Tampere, Finland
* Alejandro Cabrera Aldaya, Tampere University, Tampere, Finland
* Billy Bob Brumley, Tampere University, Tampere, Finland
### 摘要
> 最近在侧信道分析（SCA）方面的研究针对的是旧的、众所周知的漏洞，即使在知名加密库中此前已被开发人员利用、报告并修复。尽管如此，研究人员继续在旧的和新的产品中发现并利用相同的漏洞，突显了供应商之间存在的一个重大问题：在未直接向他们披露时，如何有效跟踪和修复安全漏洞。在这项工作中，我们通过对Mozilla的NSS安全库进行第一次全库范围的SCA安全评估，提出了这个问题的另一个实例。我们使用了两个独立开发的SCA安全框架的组合，以确定和测试安全漏洞。我们的评估揭示了影响DSA、ECDSA和RSA加密系统的NSS中的几个新漏洞。我们利用这些漏洞，并通过不同技术（如计时、微架构和电磁）和改进的格方法来实施密钥恢复攻击。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3421761](https://doi.org/10.1145/3372297.3421761)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3421761](https://dl.acm.org/doi/pdf/10.1145/3372297.3421761)
## TRUSTORE: Side-Channel Resistant Storage for SGX using Intel Hybrid CPU-FPGA.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#trustore-side-channel-resistant-storage-for-sgx-using-intel-hybrid-cpu-fpga) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#trustore-side-channel-resistant-storage-for-sgx-using-intel-hybrid-cpu-fpga)**
### 作者
* Hyunyoung Oh, Seoul National University, Seoul, Republic of Korea
* Adil Ahmad, Purdue University, West Lafayette, IN, USA
* Seonghyun Park, Seoul National University, Seoul, Republic of Korea
* Byoungyoung Lee, Seoul National University, Seoul, Republic of Korea
* Yunheung Paek, Seoul National University, Seoul, Republic of Korea
### 摘要
> Intel SGX是一种安全解决方案，为可信计算提供强大而实用的安全保证。然而，最近的报告表明，由于基于访问模式的侧信道攻击（包括页面故障、缓存、分支预测和推测执行），SGX的这些安全保证已被破解。为了阻止这些侧信道攻击者，Oblivious RAM（ORAM）作为提供密码学证明的保护措施，引起了安全社区的广泛关注。虽然有几个提出的系统成功地将ORAM应用于防止侧信道攻击，但由于ORAM的性能问题，这些系统在性能和可扩展性方面存在严重限制。本文介绍了TrustOre，解决了在使用ORAM与Intel SGX时出现的这些问题。TrustOre利用外部设备FPGA来实现一个受到侧信道攻击完全隔离的环境中的可信存储服务。TrustOre解决了实现这一目标时的几个挑战：在不引入架构变化的情况下，将信任从SGX扩展到FPGA，为SGX应用程序和FPGA提供可验证的安全连接，并无缝地支持SGX应用程序对FPGA的各种访问操作。我们在商品化的Intel混合CPU-FPGA架构上实现了TrustOre。然后，我们使用三个最先进的基于ORAM的SGX应用程序ZeroTrace、Obliviate和Obfuscuro以及一个端到端的键值存储应用程序进行评估。根据我们的评估，基于TrustOre的应用程序的性能优于基于ORAM的原始应用程序，性能提高了10倍到43倍，同时显示出比基于ORAM的应用程序更好的可扩展性。我们强调，由于TrustOre可以作为一个简单的插件部署到SGX机器的PCIe插槽中，因此可以方便地用于防止SGX中的侧信道攻击，这可以说是当今最难以理解和最关键的安全漏洞之一。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417265](https://doi.org/10.1145/3372297.3417265)
## DECO: Liberating Web Data Using Decentralized Oracles for TLS.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#deco-liberating-web-data-using-decentralized-oracles-for-tls) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#deco-liberating-web-data-using-decentralized-oracles-for-tls)**
### 作者
* Fan Zhang, Cornell Tech and The Initiative for CryptoCurrencies & Contracts, New York, NY, USA
* Deepak Maram, Cornell Tech and The Initiative for CryptoCurrencies & Contracts, New York, NY, USA
* Harjasleen Malvai, Cornell University and The Initiative for CryptoCurrencies & Contracts, Ithaca, NY, USA
* Steven Goldfeder, Cornell Tech and The Initiative for CryptoCurrencies & Contracts, New York, NY, USA
* Ari Juels, Cornell Tech and The Initiative for CryptoCurrencies & Contracts, New York, NY, USA
### 摘要
> 由于TLS的广泛部署，用户可以通过端到端的保密性和完整性访问私人数据。然而，他们无法向第三方证明这些数据的来源，即确切地来自于特定的网站。现有的方法要么引入不可取的信任假设，要么需要服务器端的修改。因此，用户的私人数据被局限在其来源点。用户无法在没有当前数据持有者的帮助和许可下以带完整性保护的方式将数据导出到其他应用程序。我们提出了DECO（去中心化Oracle）来解决上述问题。DECO允许用户证明通过TLS访问的数据来自特定的网站，并在零知识下可选地证明关于这些数据的陈述，同时保持数据本身的机密性。DECO是第一个在没有受信任的硬件或服务器端修改的情况下工作的系统。DECO可以将私人数据从集中式网络服务存储中解放出来，使其可以被丰富多样的应用程序访问。为了展示DECO的威力，我们实施了三个难以实现的应用程序：使用智能合约的私人金融工具，将传统凭据转换为匿名凭据，以及针对价格歧视的可验证声明。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417239](https://doi.org/10.1145/3372297.3417239)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417239](https://dl.acm.org/doi/pdf/10.1145/3372297.3417239)
## Talking with Familiar Strangers: An Empirical Study on HTTPS Context Confusion Attacks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#talking-with-familiar-strangers-an-empirical-study-on-https-context-confusion-attacks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#talking-with-familiar-strangers-an-empirical-study-on-https-context-confusion-attacks)**
### 作者
* Mingming Zhang, Tsinghua University, Beijing, China
* Xiaofeng Zheng, Tsinghua University & QI-ANXIN Group, Beijing, China
* Kaiwen Shen, Tsinghua University, Beijing, China
* Ziqiao Kong, QI-ANXIN Group, Beijing, China
* Chaoyi Lu, Tsinghua University, Beijing, China
* Yu Wang, Tsinghua University, Beijing, China
* Haixin Duan, Tsinghua University & QI-ANXIN Group, Beijing, China
* Shuang Hao, University of Texas at Dallas, Dallas, TX, USA
* Baojun Liu, Tsinghua University, Beijing, China
* Min Yang, Fudan University, Shanghai, China
### 摘要
> HTTPS主要用于安全的端到端通信，可以为敏感数据传输增加机密性和完整性。虽然有几种中间人攻击方法（如SSL剥离）可以破坏安全连接，但先进的安全策略（如HSTS）已经大大增加了成功攻击的成本。然而，多个域共享的TLS证书使得HTTPS劫持攻击再次成为可能。本文将基于共享TLS证书的HTTPS中间人攻击称为HTTPS上下文混淆攻击（SCC攻击）。尽管这是一种已知的威胁，但还没有进行深入研究。我们的目标是通过深入实证评估SCC攻击来填补这一空白。我们发现即使服务器已经部署了当前最佳的安全策略，攻击仍然可以成功。攻击者可以将加密流量重定向到另一个存在漏洞的共享TLS证书的服务器上，绕过安全策略，劫持正在进行的HTTPS连接，并随后发起其他攻击，包括网络钓鱼和支付劫持。特别是，来自第三方服务器的易受攻击的HTTP头可以被利用进行此类攻击，且可能劫持已建立的安全连接。通过对热门网站的测试，我们发现在Alexa排名前500的网站中有126个顶级域下的易受攻击子域，其中包括阿里巴巴、京东和微软等大型供应商。与此同时，通过大规模的测量，我们发现TLS证书共享现象普遍存在，揭示了此类攻击的高潜力，并总结了不同参与方之间的安全依赖关系。为了负责任的披露，我们已向受影响的供应商报告了这些问题并得到了积极的反馈。我们的研究为HTTPS生态系统中的一个重要攻击面提供了新的视角，并呼吁采取适当的措施防御中间人攻击。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417252](https://doi.org/10.1145/3372297.3417252)
## The Cookie Hunter: Automated Black-box Auditing for Web Authentication and Authorization Flaws.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#the-cookie-hunter-automated-black-box-auditing-for-web-authentication-and-authorization-flaws) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#the-cookie-hunter-automated-black-box-auditing-for-web-authentication-and-authorization-flaws)**
### 作者
* Kostas Drakonakis, FORTH ICS, Heraklion, Greece
* Sotiris Ioannidis, Technical University of Crete, Chania, Greece
* Jason Polakis, University of Illinois at Chicago, Chicago, IL, USA
### 摘要
> 在这篇论文中，我们关注Web应用程序中的身份验证和授权漏洞，这些漏洞使得部分或完全访问用户账户成为可能。具体来说，我们开发了一种新颖的全自动黑盒审计框架，通过探索Web应用程序对各种Cookie劫持攻击的敏感度，并评估其使用相关安全机制（如HSTS），对Web应用程序进行分析。我们的模块化框架由一个自定义浏览器自动化工具驱动，可在与Web应用程序进行长时间交互时提供容错。我们使用该框架进行了第一次自动化的大规模研究，研究了基于Cookie的账户劫持。由于我们的框架完全自动化地处理了审计过程的每一步，包括繁琐的账户创建过程，我们能够完全审计25000个域。我们的框架检测到10000多个域通过不加密的连接暴露了身份验证Cookie，以及5000多个域未保护身份验证Cookie免受JavaScript访问，并嵌入在第一方源中执行的第三方脚本。我们的系统还自动识别出由于暴露的Cookie而导致的隐私损失，并检测到9324个域，攻击者可以访问敏感用户数据（如地址、电话号码、密码）。总的来说，我们的研究表明，Cookie劫持是一种严重且普遍存在的威胁，即使基本的对策（如Cookie安全标志）也缺失或不完整，而开发人员在正确部署更高要求的机制时存在困难。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417869](https://doi.org/10.1145/3372297.3417869)
## Lift-and-Shift: Obtaining Simulation Extractable Subversion and Updatable SNARKs Generically.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#lift-and-shift-obtaining-simulation-extractable-subversion-and-updatable-snarks-generically) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#lift-and-shift-obtaining-simulation-extractable-subversion-and-updatable-snarks-generically)**
### 作者
* Behzad Abdolmaleki, University of Tartu, Tartu, Estonia
* Sebastian Ramacher, AIT Austrian Institute of Technology, Vienna, Austria
* Daniel Slamanig, AIT Austrian Institute of Technology, Vienna, Austria
### 摘要
> 零知识证明，特别是简洁非交互式零知识证明（通常称为zk-SNARKs），在现实世界的应用中越来越普遍，加密货币是最典型的例子。模拟可提取性（SE）是zk-SNARK的一个强安全概念，其非正式地确保证明的不可塑性。这一属性的重要性得到了该领域的领先公司（如Zcash）的认可，并通过过去对加密基元不可塑性的各种攻击进行了支持。对于zk-SNARK的实际应用来说，另一个引发问题的问题是完全信任的设置要求，尤其是对于大规模分散应用，找到一个可信的运行设置的方是几乎不可能的。最近，开始研究放松或甚至消除设置过程中的信任的方法，特别是研究可更新的zk-SNARKs（后者是最有前景的方法），并自那时起引起了相当大的关注。不幸的是，到目前为止，只能以临时方式构建具有上述属性的SE-SNARKs，没有通用的技术可用。在本文中，我们对此类通用技术感兴趣，因此首先重新审视了由Kosba等人提出的唯一可用的提升技术（称为COCO），以获得通用的SE-SNARKs。通过探索许多最近提出的SNARK友好和STARK友好的对称密钥原语的设计空间，我们实现了证明者计算和证明大小的显着改进。不幸的是，COCO框架及我们改进的版本（称为OCOCO）不兼容于可更新SNARKs。因此，我们提出了一个名为LAMASSU的新型通用提升转换。与COCO（和OCOCO）相比，它是使用不同的底层思想构建的。与COCO不同，它只需要密钥同态签名（允许移动密钥），包括已经被广泛研究的方案，如Schnorr或ECDSA。这使得LAMASSU非常有趣，因为通过使用本文中引入的名为可更新签名的新概念，我们可以证明LAMASSU保留了底层zk-SNARK的陷阱和特别是可更新属性。这使得LAMASSU成为第一个能够通用地获得SE陷阱和可更新SNARKs的技术。由于其性能与OCOCO相比，LAMASSU是一种有吸引力的替代方案，与COCO不同，它仅基于已经建立的密码假设。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417228](https://doi.org/10.1145/3372297.3417228)
## Pointproofs: Aggregating Proofs for Multiple Vector Commitments.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#pointproofs-aggregating-proofs-for-multiple-vector-commitments) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#pointproofs-aggregating-proofs-for-multiple-vector-commitments)**
### 作者
* Sergey Gorbunov, University of Waterloo, Waterloo, ON, Canada
* Leonid Reyzin, Algorand and Boston University, Boston, MA, USA
* Hoeteck Wee, CNRS, ENS, PSL and NTT Research, Paris, France
* Zhenfei Zhang, Algorand, Boston, MA, USA
### 摘要
> 向量承诺使用户能够承诺一系列的值，并可以在以后的某个时间点上可验证地逐个或批量地透露特定位置的一个或多个值。在本研究中，我们构建了Pointproofs，一种支持多个承诺之间的非交互式证明聚合的新型向量承诺方案。我们的构建方案使得任何第三方都能将基于不同、独立计算的承诺的证明集合聚合成一个由椭圆曲线点表示的单一证明，该点为48字节。此外，我们的方案是隐藏的：一个承诺和一些值的证明不会透露关于其余值的任何信息。我们构建了Pointproofs，并展示了如何将其应用于区块链智能合约。在我们的示例应用中，与以前的先进向量承诺相比，Pointproofs减少了至少60％的事务块传播带宽开销。Pointproofs还具有高效性：在单线程上，生成与一个承诺相关的8个值的证明仅需0.08秒，将4000个这样的证明在多个承诺之间聚合成一个证明需0.25秒，验证聚合后的证明需23秒（每个值的证明0.7毫秒）。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417244](https://doi.org/10.1145/3372297.3417244)
## Realistic Threats and Realistic Users: Lessons from the Election.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#realistic-threats-and-realistic-users-lessons-from-the-election) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#realistic-threats-and-realistic-users-lessons-from-the-election)**
### 作者
* Alex Stamos, Stanford University, Stanford, CA, USA
### 摘要
> 演讲者将利用他在2016年和2018年选举期间在全球最大的社交网络内部的经验，以及2020年运营选举诚信战略室的经历，讨论技术在我们努力为之服务的人们方面的失败方式。我们将讨论我们对威胁可以做出的现实假设，以及我们对用户应有的期望，并尝试为先进的安全研究如何更好地为最终将计算技术置于数十亿人手中的工程师和产品设计师提供指引。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3424553](https://doi.org/10.1145/3372297.3424553)
## PhishBench 2.0: A Versatile and Extendable Benchmarking Framework for Phishing.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#phishbench-2-0-a-versatile-and-extendable-benchmarking-framework-for-phishing) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#phishbench-2-0-a-versatile-and-extendable-benchmarking-framework-for-phishing)**
### 作者
* Victor Zeng, University of Houston, Houston, TX, USA
* Xin Zhou, University of Houston, Houston, TX, USA
* Shahryar Baki, University of Houston, Houston, TX, USA
* Rakesh M. Verma, University of Houston, Houston, TX, USA
### 摘要
> 我们描述了我们的基准测试框架PhishBench的2.0版本。通过添加动态加载功能，我们的新框架可以让研究人员快速评估基于机器学习的钓鱼检测的新特征和方法。研究人员可以在相同的环境下比较他们的贡献和文献中使用的许多内置特征、排名方法和分类器，并使用合适的评估指标。我们将展示PhishBench 2.0，并将其与至少另外两个自动化机器学习系统进行比较。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3420017](https://doi.org/10.1145/3372297.3420017)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3420017](https://dl.acm.org/doi/pdf/10.1145/3372297.3420017)
## LPET - Mining MS-Windows Software Privilege Escalation Vulnerabilities by Monitoring Interactive Behavior.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#lpet-mining-ms-windows-software-privilege-escalation-vulnerabilities-by-monitoring-interactive-behavior) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#lpet-mining-ms-windows-software-privilege-escalation-vulnerabilities-by-monitoring-interactive-behavior)**
### 作者
* Can Huang, Peking University, Beijing, China
* Xinhui Han, Peking University, Beijing, China
* Guorui Yu, Peking University, Beijing, China
### 摘要
> 本研究海报介绍了一种名为LPET的系统，用于在MS-Windows中挖掘第三方软件的本地权限提升（LPE）漏洞。我们的研究发现，LPE通常是由于高权限进程与用户可控文件之间的交互引起的。这些交互包括创建文件、启动进程等。基于这一观察，LPET首先监测软件行为，并构建一个有向交互图来抽象实体，如文件和进程，以及它们之间的交互。然后，LPET分析图中的利用路径，提取用户可控实体并检查其权限。最后，LPET使用替换或劫持攻击来验证利用路径。在初步实验中，LPET发现了各种软件的漏洞。此外，我们还发现了一个常见的弱点模式，即一些组件在安装、更新和卸载过程中被释放到用户可控的临时目录后，由高权限软件执行。攻击者可以通过替换这些组件，以低权限执行其代码并劫持软件的执行流程，从而获得高权限。我们发现许多软件都存在这种弱点模式，包括Cisco AnyConnect、Dropbox和Notepad++。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3420014](https://doi.org/10.1145/3372297.3420014)
## Continuous and Multiregional Monitoring of Malicious Hosts.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#continuous-and-multiregional-monitoring-of-malicious-hosts) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#continuous-and-multiregional-monitoring-of-malicious-hosts)**
### 作者
* Shota Fujii, Hitachi, Ltd. & Okayama University, Tokyo, Japan
* Takayuki Sato, Hitachi, Ltd., Tokyo, Japan
* Sho Aoki, Hitachi, Ltd., Tokyo, Japan
* Yu Tsuda, National Institute of Information and Communications Technology, Tokyo, Japan
* Yusuke Okano, FFRI Security, Inc., Tokyo, Japan
* Tomohiro Shigemoto, Hitachi, Ltd., Tokyo, Japan
* Nobutaka Kawaguchi, Hitachi, Ltd., Tokyo, Japan
* Masato Terada, Hitachi, Ltd., Tokyo, Japan
### 摘要
> 网络安全威胁数量不断增加，并且这些威胁每年都变得更加复杂。恶意主机在现代网络攻击中起着重要作用，例如作为远程控制攻击的发起者或者作为被盗信息的接收者。在这种情况下，对恶意主机（URL/IP地址）进行持续监控是揭示网络攻击活动不可或缺的，并且已经进行了许多研究。然而，其中许多研究存在限制：它们只对短期有所帮助，或者只针对少数地区和/或少数组织有帮助。因此，我们无法有效监控只活动很短时间或根据受害者来自何处（例如国家/组织）而改变其行为的攻击。在本文中，我们提出了一种名为Stargazer的程序，该程序可从多个观测点长期监控恶意主机。我们通过多区域监测传感器和组织间协作来实现这种监测。本文描述了Stargazer原型的实施方法，并介绍了自2018年12月起使用多区域传感器进行的1,050个恶意主机的监测，共获得了10,929,418个测量数据。我们还创建了有关（1）被重新激活的主机，（2）仅响应特定地区的主机，以及（3）攻击准备行为的案例研究。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3420018](https://doi.org/10.1145/3372297.3420018)
## Facilitating Protocol-independent Industrial Intrusion Detection Systems.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#facilitating-protocol-independent-industrial-intrusion-detection-systems) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#facilitating-protocol-independent-industrial-intrusion-detection-systems)**
### 作者
* Konrad Wolsing, Fraunhofer FKIE & RWTH Aachen University, Wachtberg, Germany
* Eric Wagner, Fraunhofer FKIE, Wachtberg, Germany
* Martin Henze, Fraunhofer FKIE, Wachtberg, Germany
### 摘要
> 网络物理系统面临着越来越多复杂攻击者的威胁，攻击目标甚至包括系统的物理部分。为了补充保护措施，工业入侵检测系统被用来检测此类攻击。然而，由于工业协议的多样性和缺乏标准接口，我们需要付出巨大努力将这些技术适配到大量不同的协议上。为了解决这个问题，我们识别了已有的通用入侵检测方法，并提出了一种工业协议转录方案，以实现在不同的工业协议上的协议无关语义入侵检测。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3420019](https://doi.org/10.1145/3372297.3420019)
## Bento: Bringing Network Function Virtualization to Tor.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#bento-bringing-network-function-virtualization-to-tor) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#bento-bringing-network-function-virtualization-to-tor)**
### 作者
* Michael Reininger, University of Maryland, College Park, MD, USA
* Arushi Arora, Purdue University, West Lafayette, IN, USA
* Stephen Herwig, University of Maryland, College Park, MD, USA
* Nicholas Francino, University of Maryland, College Park, MD, USA
* Christina Garman, Purdue University, West Lafayette, IN, USA
* Dave Levin, University of Maryland, College Park, MD, USA
### 摘要
> Tor是为全球用户提供匿名性和抗审查的强大而重要的工具。然而，部署新服务到Tor中却困难重重，目前主要限于代理和隐藏服务。与此相反，“非匿名”互联网服务正因可编程网络（如网络功能虚拟化）等新进展而蓬勃发展。这项工作旨在通过将可编程中间盒引入到Tor网络中来弥合这个差距。在这个架构中，用户可以在愿意的Tor路由器上安装和运行复杂的“功能”，进一步提高匿名性、抵御攻击、隐藏服务性能等。我们提出了一种名为Bento的架构设计，保护中间盒节点免受其运行的功能的影响，并保护功能免受其所在中间盒的影响。Bento不需要对Tor进行修改，并且可以在实际的Tor网络上运行。此外，我们概述了如何显著扩展Tor的功能，以满足用户的匿名需求并及时应对新威胁。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3420020](https://doi.org/10.1145/3372297.3420020)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3420020](https://dl.acm.org/doi/pdf/10.1145/3372297.3420020)
## RIPT - An Efficient Multi-Core Record-Replay System.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ript-an-efficient-multi-core-record-replay-system) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ript-an-efficient-multi-core-record-replay-system)**
### 作者
* Jiashuo Liang, Peking University, Beijing, China
* Guancheng Li, Peking University, Beijing, China
* Chao Zhang, Institute for Network Science and Cyberspace of Tsinghua University, Beijing, China
* Ming Yuan, Tsinghua University, Beijing, China
* Xingman Chen, Tsinghua University, Beijing, China
* Xinhui Han, Peking University, Beijing, China
### 摘要
> 给定相同的输入，由于一些非确定性特征（例如上下文切换和随机化），程序在两次运行中可能不会表现相同。这种行为会导致难以发现或诊断的非确定性程序错误。记录和重放是一种解决此类问题的有希望的技术，然而，性能和透明性是现有工作的主要障碍。在本海报中，我们提出了一种名为RIPT的新型记录和重放系统。RIPT利用英特尔处理器跟踪以非常低的开销记录控制流信息，并使用一个内核模块透明地捕获系统调用和信号等非确定性来源。在重放过程中，RIPT从收集的信息中恢复非确定性事件的效果，并使目标程序的行为与记录的相同。我们使用真实世界的程序错误对其进行评估，并展示RIPT在实践中表现良好。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3420021](https://doi.org/10.1145/3372297.3420021)
## Impact of Energy Consumption Attacks on LoRaWAN-Enabled Devices in Industrial Context.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#impact-of-energy-consumption-attacks-on-lorawan-enabled-devices-in-industrial-context) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#impact-of-energy-consumption-attacks-on-lorawan-enabled-devices-in-industrial-context)**
### 作者
* Muhammad Nouman Nafees, Cardiff University, Cardiff, United Kingdom
* Neetesh Saxena, Cardiff University, Cardiff, United Kingdom
* Pete Burnap, Cardiff University, Cardiff, United Kingdom
* Bong Jun Choi, Soongsil University, Seoul, South Korea
### 摘要
> 成功部署长距离广域网络（LoRaWAN）技术在几个工业物联网（IIoT）场景，如智能表计中的停电管理系统（OMS），依赖于终端设备的低能量消耗。在这项工作中，我们进行了一项实验，以展示一个开关型拒绝服务（DoS）攻击，分析对LoRaWAN终端设备能量消耗的影响。我们实施了这种攻击，操纵终端设备保持在数据包重传模式下几秒钟。进行的实验表明，LoRaWAN的可配置参数，如OMS所需的参数，容易受到能量消耗攻击。总结起来，我们的结果表明，在执行开关型DoS攻击时，使用扩频因子（SF）12的终端设备由于数据包重传消耗的能量比在无攻击情况下使用SF 7的终端节点多92倍。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3420022](https://doi.org/10.1145/3372297.3420022)
## PMForce: Systematically Analyzing postMessage Handlers at Scale.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#pmforce-systematically-analyzing-postmessage-handlers-at-scale) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#pmforce-systematically-analyzing-postmessage-handlers-at-scale)**
### 作者
* Marius Steffens, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Ben Stock, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
### 摘要
> Web已经成为一个平台，其中站点依赖于跨越不同来源的复杂交互。尽管同源策略阻止了与其他来源的文档进行直接数据交换，但postMessage API提供了一种放宽规定，允许开发人员在这些限制间交换数据。虽然之前的手动分析可以显示postMessage处理程序中存在的问题，但不幸的是，postMessage的使用量的急剧增加使得任何手动方法都变得棘手。为了处理这种工作量的增加，我们着手自动查找postMessage处理程序中的问题，这些问题允许攻击者在易受攻击的站点中执行代码、更改客户端状态或泄露敏感信息。为了实现这个目标，我们提出了一个在浏览器内部运行的自动化分析框架，它使用选择性的强制执行和轻量级动态污点跟踪，以找到在分析的处理程序中以触发代码执行或状态更改为目标的轨迹。我们使用从程序轨迹中提取的路径约束，并使用Exploit Templates（即附加约束）来增强它们，以确保所有这些约束的有效分配产生调用代码或操作状态的行为。基于这些约束，我们使用Z3来生成用于触发不安全功能的postMessages，以证明可利用性，并在规模上验证我们的发现。我们使用这个框架进行了最全面的实验，研究了排名前100,000个最有影响力的站点中发现的postMessage处理程序的安全问题，从中我们找到了252个唯一处理程序中可能存在可利用的数据流，其中111个是自动可利用的。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417267](https://doi.org/10.1145/3372297.3417267)
## Fill in the Blanks: Empirical Analysis of the Privacy Threats of Browser Form Autofill.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#fill-in-the-blanks-empirical-analysis-of-the-privacy-threats-of-browser-form-autofill) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#fill-in-the-blanks-empirical-analysis-of-the-privacy-threats-of-browser-form-autofill)**
### 作者
* Xu Lin, University of Illinois at Chicago, Chicago, IL, USA
* Panagiotis Ilia, University of Illinois at Chicago, Chicago, IL, USA
* Jason Polakis, University of Illinois at Chicago, Chicago, IL, USA
### 摘要
> 为浏览器提供简化网站交互的功能对于改善用户体验至关重要，特别是能够简化繁琐的网站交互过程。浏览器的自动填充功能就是一个例子，它减轻了用户在不同网站上重复输入相同信息的负担。然而，与用户可以视觉感知的内容相比，浏览器对给定网页的解释存在固有的差异，因此也带来了重大的隐私风险。在本文中，我们首次全面探讨了自动填充功能的隐私威胁。我们首先开发了一系列遮盖表单元素存在的新技术，可以绕过现有的浏览器防御机制，获取敏感用户信息。令人担忧的是，在我们对Alexa排名前100,000的网站进行的大规模研究中，我们发现了大量使用这些欺骗性技术偷偷获取用户身份信息的情况，至少有5.8%的表单被Chrome的自动填充功能使用了这些技术。随后，我们对浏览器的自动填充功能进行了深入研究，发现了一系列漏洞和特殊性，我们通过一系列新攻击手段针对浏览器的行为特点进行利用。通过将它们组合在一起，我们能够展示一种新型的侵入性边信道攻击，利用浏览器的自动填充预览功能推测敏感信息，即使用户选择不使用自动填充也无济于事。此攻击影响所有基于Chromium的主要浏览器，允许攻击者对用户的自动填充配置进行大量尝试（如信用卡号和电话号码等），获得数十万个候选值。总的来说，虽然预览模式旨在提供更明智的决策，但最终它却创建了一条绕过用户选择不泄露信息的新通道。根据我们的发现，我们已向受影响的供应商披露了我们的技术，并创建了一个Chrome扩展程序，可以防止我们的攻击并减轻这一威胁，直到我们的对策被纳入浏览器中。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417271](https://doi.org/10.1145/3372297.3417271)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417271](https://dl.acm.org/doi/pdf/10.1145/3372297.3417271)
## Lies in the Air: Characterizing Fake-base-station Spam Ecosystem in China.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#lies-in-the-air-characterizing-fake-base-station-spam-ecosystem-in-china) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#lies-in-the-air-characterizing-fake-base-station-spam-ecosystem-in-china)**
### 作者
* Yiming Zhang, Beijing National Research Center for Information Science and Technology, Tsinghua University, Beijing, China
* Baojun Liu, Beijing National Research Center for Information Science and Technology, Tsinghua University, Beijing, China
* Chaoyi Lu, Beijing National Research Center for Information Science and Technology, Tsinghua University, Beijing, China
* Zhou Li, University of California, Irvine, Irvine, CA, USA
* Haixin Duan, Beijing National Research Center for Information Science and Technology, Tsinghua University, & QI-ANXIN Group, Beijing, China
* Shuang Hao, University of Texas at Dallas, Dallas, TX, USA
* Mingxuan Liu, Beijing National Research Center for Information Science and Technology, Tsinghua University, Beijing, China
* Ying Liu, Beijing National Research Center for Information Science and Technology, Tsinghua University, Beijing, China
* Dong Wang, 360 Mobile Safe, Beijing, China
* Qiang Li, 360 Mobile Safe, Beijing, China
### 摘要
> 虚假基站（FBS）已经被犯罪分子利用超过十年的时间来对移动用户发起垃圾邮件欺诈信息攻击。尽管早先的研究提出了几种技术来缓解这个问题，但FBS垃圾邮件在一些国家仍然是一个长期具有挑战性的问题，比如中国，并且每年造成数十亿美元的财务损失。因此，了解和研究FBS垃圾邮件生态系统中的主题策略将在很大程度上改进防御机制。在本文中，我们通过收集为期三个月的真实世界的FBS检测结果，首次呈现了对FBS垃圾邮件生态系统的大规模特征化。首先，在“宏观水平”上，我们揭示了FBS垃圾邮件发送者的特征，包括他们的业务类别、时间模式和空间模式。其次，在“微观水平”上，我们调查了FBS生态系统的组织方式以及恶意信息是如何通过策略来诱骗用户并规避检测。总的来说，这些结果扩展了我们对FBS垃圾邮件生态系统的理解，并为安全社区提供了改进缓解机制的新见解。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417257](https://doi.org/10.1145/3372297.3417257)
## Deploying Android Security Updates: an Extensive Study Involving Manufacturers, Carriers, and End Users.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#deploying-android-security-updates-an-extensive-study-involving-manufacturers-carriers-and-end-users) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#deploying-android-security-updates-an-extensive-study-involving-manufacturers-carriers-and-end-users)**
### 作者
* Kailani R. Jones, University of Kansas, Lawrence, KS, USA
* Ting-Fang Yen, DataVisor, Inc., Mountain View, CA, USA
* Sathya Chandran Sundaramurthy, DataVisor, Inc., Mountain View, CA, USA
* Alexandru G. Bardas, University of Kansas, Lawrence, KS, USA
### 摘要
> Android的碎片化生态系统使安全更新和操作系统升级变得繁琐和复杂。尽管谷歌启动了各种项目，如Android One、Project Treble和Project Mainline来解决这个问题，而其他相关实体（例如芯片供应商、制造商、运营商）也在不断努力改进他们的流程，但这些努力对于向受支持的终端用户设备提供更新的效果仍然不明确。在本文中，我们进行了一项广泛的定量研究（2015年8月至2019年12月），以衡量Android安全更新和操作系统升级的推出过程。我们的研究利用了多个数据来源：Android开源项目（AOSP）、设备制造商以及美国四大运营商（AT&T、Verizon、T-Mobile和Sprint）。此外，我们还分析了一个基于2019年的终端用户数据集（涉及910万个唯一用户标识符的1.52亿个匿名化HTTP请求），数据来自一个总部位于美国的社交网络。我们的研究结果包括一些独特的测量数据，由于碎片化和不一致的生态系统，以前很难进行。例如，制造商和运营商在推出安全更新之前平均延迟24天，并且在终端设备更新之前还会额外延迟11天。我们显示这些值根据运营商-制造商关系而有所不同，但并不会因为设备型号的老化而有很大变化。我们的结果还深入探讨了当前Android项目的有效性。例如，Treble设备的安全更新平均比非Treble设备提前7天提供。尽管这构成了一种改善，但Treble设备的安全更新延迟仍然平均为19天。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423346](https://doi.org/10.1145/3372297.3423346)
## Estimating g-Leakage via Machine Learning.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#estimating-g-leakage-via-machine-learning) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#estimating-g-leakage-via-machine-learning)**
### 作者
* Marco Romanelli, Inria & École Polytechnique & IPP & Università di Siena, Palaiseau, France
* Konstantinos Chatzikokolakis, University of Athens, Athens, Greece
* Catuscia Palamidessi, Inria & École Polytechnique & IPP, Palaiseau, France
* Pablo Piantanida, CentraleSupelec & CNRS & Université Paris Saclay, Gif-sur-Yvette, France
### 摘要
> 本文考虑了在黑盒场景下估计系统信息泄漏的问题，即当学习器对系统的内部结构不知或过于复杂以分析时，仅可获得的信息是通过向系统提交查询或由第三方提供的输入-输出数据样本对。经验主义方法依靠频率计数来估计输入-输出条件概率，然而当可能的输出领域很大时，这种方法并不准确。为了克服这个困难，最近使用机器学习（ML）模型研究了理想分类器的贝叶斯误差的估计，通过这些模型学习输入-输出对应关系，该方法的准确性更高。然而，贝叶斯脆弱性只适合描述一次尝试攻击。一个更一般和灵活的泄漏度量是g-脆弱性，它涵盖了多种不同类型的敌手，具有不同的目标和能力。我们提出了一种新的方法来执行使用机器学习估计g-脆弱性的黑盒估计，该方法不需要估计条件概率，适用于大类别的机器学习算法。首先，我们正式展示了对所有数据分布的可学习性。然后，我们通过使用k最近邻和神经网络进行各种实验来评估性能。当可观测域很大时，我们的方法在性能上优于经验主义方法。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423363](https://doi.org/10.1145/3372297.3423363)
## Implementing the Exponential Mechanism with Base-2 Differential Privacy.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#implementing-the-exponential-mechanism-with-base-2-differential-privacy) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#implementing-the-exponential-mechanism-with-base-2-differential-privacy)**
### 作者
* Christina Ilvento, Harvard John A. Paulson School of Engineering and Applied Sciences, Cambridge, MA, USA
### 摘要
> 尽管差分隐私（DP）在理论上得到了极好的支持，但在实际实施过程中仍然存在挑战。部分挑战是因为将任意或无限精度的理论机制转化为浮点数或固定精度的现实存在的担忧。从米罗诺夫对使用浮点数实施拉普拉斯机制的安全问题进行了令人不安的结果开始，关于实际应用DP的漏洞问题产生了很多合理的问题。在这项工作中，我们研究了麦克舍里和塔尔瓦尔的指数机制的实施实用性。我们证明了天真的或恶意的实施可能导致灾难性的隐私失败。为了解决这些问题，我们展示了该机制可以在具有有限实际运行时间和最小代码复杂性的条件下针对丰富的效用函数和隐私参数epsilon的值进行精确实施。我们是如何实现这个结果的呢？我们采用一个简单的技巧，从底数e切换到底数2，从而使我们能够进行精确的基于底数2的算术运算。关于epsilon，总是可以得到一个简短而精确的表达式，我们所受到的唯一近似误差是将基于底数2的隐私参数转换回基于底数e以供报告目的。该机制的核心基于底数2的算术可以使用开源高精度算术库来简单高效地实现。此外，实施方式的准确性本身适合于简单的监控正确性和隐私证明。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417269](https://doi.org/10.1145/3372297.3417269)
## Examining Mirai's Battle over the Internet of Things.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#examining-mirais-battle-over-the-internet-of-things) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#examining-mirais-battle-over-the-internet-of-things)**
### 作者
* Harm Griffioen, Hasso Plattner Institute for Digital Engineering University of Potsdam, Potsdam, Germany
* Christian Doerr, Hasso Plattner Institute for Digital Engineering University of Potsdam, Potsdam, Germany
### 摘要
> 使用数以十万计的被入侵IoT设备，Mirai僵尸网络在2016年末作为一种改变游戏规则的威胁行为者出现，能够暂时击垮主要的互联网服务提供商和互联网基础设施。从那时起，出现了数十种基于IoT的僵尸网络变种，在今天的互联网中，来自IoT设备的分布式拒绝服务攻击已成为主要攻击手段。这种扩散现象在很大程度上是由于Mirai源代码的公开分发，其他行为者利用它来创建自己的定制版本的原始Mirai僵尸网络。在本文中，我们全面审视了由Mirai及其众多兄弟进行的物联网战斗。利用7500个IoT诱饵，我们展示了我们可以利用被感染的IoT设备的三亿次入侵尝试以及Mirai的随机数生成器中的设计缺陷，以获取有关Mirai感染全球范围内情况的见解。我们发现，网络和困扰它们的特定恶意软件株系紧密相关，并且恶意软件作者随着时间的推移会采用竞争对手的策略。最令人惊讶的发现是，在流行病学方面，IoT僵尸网络并非自给自足：如果没有不断推动的引导，Mirai及其变体将会消亡。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417277](https://doi.org/10.1145/3372297.3417277)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417277](https://dl.acm.org/doi/pdf/10.1145/3372297.3417277)
## Enhancing State-of-the-art Classifiers with API Semantics to Detect Evolved Android Malware.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#enhancing-state-of-the-art-classifiers-with-api-semantics-to-detect-evolved-android-malware) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#enhancing-state-of-the-art-classifiers-with-api-semantics-to-detect-evolved-android-malware)**
### 作者
* Xiaohan Zhang, Fudan University, Shanghai, China
* Yuan Zhang, Fudan University, Shanghai, China
* Ming Zhong, Fudan University, Shanghai, China
* Daizong Ding, Fudan University, Shanghai, China
* Yinzhi Cao, Johns Hopkins University, Baltimore, MD, USA
* Yukun Zhang, Fudan University, Shanghai, China
* Mi Zhang, Fudan University, Shanghai, China
* Min Yang, Fudan University, Shanghai, China
### 摘要
> 机器学习（ML）分类器已广泛应用于检测安卓恶意软件，但与此同时，ML分类器的应用也面临着一个新兴的问题。由于恶意软件的演化，这种分类器的性能会随着时间的推移而显著降低，也被称为老化。之前的工作已经提出使用重新训练或主动学习来逆转和改进老化的模型。然而，底层的分类器本身仍然是盲目的，对恶意软件的演化一无所知。可预料的是，这种对演化不敏感的重新训练或主动学习代价高昂，即需要对成千上万的恶意软件样本进行标记，并付出大量的人力努力。在本文中，我们提出了第一个框架，称为APIGraph，通过在语义等效或相似API用法方面增强现有的恶意软件分类器，从而自然地减缓分类器的老化。我们的评估结果显示，由于分类器老化的减缓，APIGraph节省了主动学习中标记新恶意软件样本所需的大量人力工作。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417291](https://doi.org/10.1145/3372297.3417291)
## On the Optimality of Optimistic Responsiveness.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#on-the-optimality-of-optimistic-responsiveness) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#on-the-optimality-of-optimistic-responsiveness)**
### 作者
* Nibesh Shrestha, Rochester Institute of Technology, Rochester, NY, USA
* Ittai Abraham, VMware Research, Herzliya, Israel
* Ling Ren, UIUC, Illinois, IL, USA
* Kartik Nayak, Duke University, Durham, NC, USA
### 摘要
> 同步共识协议根据有界网络延迟具有最坏情况下的提交延迟。最近引入了乐观响应性的概念，允许同步协议在满足乐观条件时立即提交。本研究重新审视了乐观响应性的概念，并提出了最优延迟结果。我们为拜占庭广播提供了一个下界，该下界将乐观和同步提交的延迟与指定发送方诚实、乐观提交能容忍一些故障相联系。然后，我们提出了两个符合条件的上界，可以容忍$f$个故障中的一个，其中$n=2f+1$个参与方。我们的第一个上界结果在指定发送方诚实且乐观提交能容忍至少一个故障时，实现了最优乐观和同步提交延迟。我们通过实验证明，该协议的吞吐量与最先进的同步和部分同步协议相当，并且在乐观条件下的延迟优于最先进的协议。我们的第二个上界结果在指定发送方诚实但乐观提交不容忍任何故障时，实现了最优乐观和同步提交延迟。匹配的下界和上界结果使得这两个结果在$n=2f+1$时都是紧密的。我们的上界结果在状态机复制设置下呈现，其中具有稳定领导者的状态会在无进展时被视图更改协议替换。对于这个设置，我们还提出了一个乐观响应的协议，其中视图更改协议也是乐观响应的。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417284](https://doi.org/10.1145/3372297.3417284)
## Everything is a Race and Nakamoto Always Wins.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#everything-is-a-race-and-nakamoto-always-wins) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#everything-is-a-race-and-nakamoto-always-wins)**
### 作者
* Amir Dembo, Stanford University, Stanford, CA, USA
* Sreeram Kannan, University of Washington, Seattle, WA, USA
* Ertem Nusret Tas, Stanford University, Stanford, CA, USA
* David Tse, Stanford University, Stanford, CA, USA
* Pramod Viswanath, University of Illinois at Urbana-Champaign, Champaign, IL, USA
* Xuechao Wang, University of Illinois at Urbana-Champaign, Champaign, IL, USA
* Ofer Zeitouni, Weizmann Institute of Science, Rehovot, Israel
### 摘要
> 中本聪发明了最长链协议，并通过分析私有的双花攻击来宣称其安全性，该攻击是对抗者和诚实节点之间增长更长链条的竞赛。但这是最严重的攻击吗？我们对三类设计用于不同共识模型的最长链协议进行肯定回答：1）中本聪的原始工作证明协议；2）Ouroboros和SnowWhite权益证明协议；3）Chia空间证明协议。因此，通过将平均块时间归一化为网络延迟的函数，可以得到每个协议的最大可容忍对抗者能力的确切特征。这些协议的安全分析以一种新颖的方法进行了统一处理，将所有攻击都简化为对抗者和诚实节点之间的竞赛。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417290](https://doi.org/10.1145/3372297.3417290)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417290](https://dl.acm.org/doi/pdf/10.1145/3372297.3417290)
## HACLxN: Verified Generic SIMD Crypto (for all your favourite platforms).
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#haclxn-verified-generic-simd-crypto-for-all-your-favourite-platforms) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#haclxn-verified-generic-simd-crypto-for-all-your-favourite-platforms)**
### 作者
* Marina Polubelova, Inria Paris, Paris, France
* Karthikeyan Bhargavan, Inria Paris, Paris, France
* Jonathan Protzenko, Microsoft Research, Redmond, WA, USA
* Benjamin Beurdouche, Inria Paris & Mozilla, Paris, France
* Aymeric Fromherz, Carnegie Mellon University, Pittsburgh, PA, USA
* Natalia Kulatova, Inria Paris, Paris, France
* Santiago Zanella-Béguelin, Microsoft Research, Cambridge, United Kingdom
### 摘要
> 我们提出了一种新的方法来构建形式验证的密码库，该库针对多种架构进行了优化。具体而言，我们展示了如何使用F*编程语言编写和验证通用加密代码，以利用单指令多数据（SIMD）并行性。我们展示了如何将此代码编译到支持矢量指令的平台，包括ARM Neon和Intel AVX，AVX2和AVX512。我们将我们的方法应用于获得验证的矢量化实现，包括ChaCha20加密算法、Poly1305一次性消息认证码、以及SHA-2和Blake2哈希算法的所有这些平台。我们方法的一个独特特点是：我们在标量和矢量化代码之间、在不同平台的矢量化代码之间，以及在不同密码原语的实现之间积极共享代码和验证工作。通过这样做，我们显著减少了将新实现添加到我们验证库中所需的人工工作量。在本文中，我们描述了我们的方法和验证结果，评估了我们代码的性能，并描述了其如何整合到HACL*密码库中。我们的矢量化代码已经被整合到多个软件项目中，包括Firefox网络浏览器。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423352](https://doi.org/10.1145/3372297.3423352)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3423352](https://dl.acm.org/doi/pdf/10.1145/3372297.3423352)
## CheckDP: An Automated and Integrated Approach for Proving Differential Privacy or Finding Precise Counterexamples.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#checkdp-an-automated-and-integrated-approach-for-proving-differential-privacy-or-finding-precise-counterexamples) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#checkdp-an-automated-and-integrated-approach-for-proving-differential-privacy-or-finding-precise-counterexamples)**
### 作者
* Yuxin Wang, Pennsylvania State University, State College, PA, USA
* Zeyu Ding, Pennsylvania State University, State College, PA, USA
* Daniel Kifer, Pennsylvania State University, State College, PA, USA
* Danfeng Zhang, Pennsylvania State University, State College, PA, USA
### 摘要
> 我们提出了CheckDP，这是一种自动化且集成化的方法，用于证明或驳斥机制是否具有差分隐私。CheckDP能够找到先前生成器无法找到的具有微妙错误的机制的反例。此外，它还可以自动生成以前未报告的正确机制的证明，而无需进行形式验证。CheckDP基于静态程序分析构建，使其在捕捉不频繁事件方面比基于抽样的反例生成器(该生成器运行机制数十万次以估计其输出分布)更高效且更精确。此外，其可靠的方法还允许对正确机制进行自动验证。在标准基准测试和较新的隐私机制上进行评估时，CheckDP在70秒内生成证明(对于正确的机制)和反例(对于不正确的机制)，而且没有任何虚警或漏警。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417282](https://doi.org/10.1145/3372297.3417282)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417282](https://dl.acm.org/doi/pdf/10.1145/3372297.3417282)
## Asynchronous Remote Key Generation: An Analysis of Yubico's Proposal for W3C WebAuthn.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#asynchronous-remote-key-generation-an-analysis-of-yubicos-proposal-for-w3c-webauthn) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#asynchronous-remote-key-generation-an-analysis-of-yubicos-proposal-for-w3c-webauthn)**
### 作者
* Nick Frymann, University of Surrey, Guildford, United Kingdom
* Daniel Gardham, University of Surrey, Guildford, United Kingdom
* Franziskus Kiefer, Wire Swiss GmbH, Berlin, Germany
* Emil Lundberg, Yubico AB, Stockholm, Sweden
* Mark Manulis, University of Surrey, Guildford, United Kingdom
* Dain Nilsson, Yubico AB, Stockholm, Sweden
### 摘要
> WebAuthn是FIDO2的一部分，是一种用于强身份验证的W3C标准，通过使用数字签名来认证Web用户，同时保护其隐私。WebAuthn认证器由用户拥有，为每个Web服务生成可证明且不可关联的公钥凭证，用于认证用户。由于认证器丢失会导致用户无法访问Web服务，因此迫切需要可用的恢复解决方案，以保留原始的WebAuthn设计选择和安全目标。我们检查了Yubico关于使用备用认证器从丢失的WebAuthn认证器中恢复的最新建议。我们通过建模一个名为异步远程密钥生成(ARKG)的新原语，对其提案的加密核心进行分析。该原语允许某个主要认证器生成不可关联的公钥，并且备用认证器可以稍后恢复相应的私钥。这两个过程异步进行，不需要认证器导出或共享秘密，符合WebAuthn的认证要求。我们证明了Yubico的提案在离散对数和PRF-ODH假设下，在随机预言模型中满足我们的ARKG安全性质。为了证明恢复的私钥可以安全地被其他密码方案使用，比如数字签名或加密方案，我们使用Brzuska等人(ACM CCS 2011)提出的可组合游戏来建模ARKG的组合安全性，扩展到任意公钥协议的情况。除了更加通用之外，我们的结果表明，通过ARKG生成的私钥可以安全地用于生成挑战-应答协议的不可伪造的签名，如WebAuthn中使用的协议。最后，我们通过讨论Yubico的ARKG协议背后的具体实例，其与WebAuthn标准的集成，性能和可用性方面，总结了我们的分析。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417292](https://doi.org/10.1145/3372297.3417292)
## Deterministic Wallets in a Quantum World.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#deterministic-wallets-in-a-quantum-world) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#deterministic-wallets-in-a-quantum-world)**
### 作者
* Nabil Alkeilani Alkadri, Technische Universität Darmstadt, Darmstadt, Germany
* Poulami Das, Technische Universität Darmstadt, Darmstadt, Germany
* Andreas Erwig, Technische Universität Darmstadt, Darmstadt, Germany
* Sebastian Faust, Technische Universität Darmstadt, Darmstadt, Germany
* Juliane Krämer, Technische Universität Darmstadt, Darmstadt, Germany
* Siavash Riahi, Technische Universität Darmstadt, Darmstadt, Germany
* Patrick Struck, Technische Universität Darmstadt, Darmstadt, Germany
### 摘要
> 大多数区块链解决方案容易受到量子攻击者的攻击，因为它们依赖于在量子对手存在的情况下被认为是不安全的密码学。在这项工作中，我们通过给出一个量子抗性构造的确定性钱包方案，推进了对抗量子的区块链解决方案的研究。确定性钱包在实践中经常被用来通过将敏感的秘密密钥存储在一个被称为冷钱包的与互联网不连接的设备上来保护资金。最近，Das等人（CCS'19）在确定性钱包的安全分析上开发了一个形式化模型，并提出了一种从具有密钥重随机化属性的某些类型的签名方案构造的通用方案。我们在量子对手的存在下重新审视了所提出的经典构造，并得出了以下结果。首先，我们提供了一个在量子随机预言模型（QROM）中具有安全性的通用钱包构造，如果底层的签名方案在QROM中是安全的。接下来，我们通过从通用基于格的Fiat-Shamir签名方案构造了第一个可重随机化公钥的后量子安全签名方案。最后，我们通过分析基于qTESLA签名方案（ACNS'20）的钱包方案的一个实例来展示并评估了其实用性。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423361](https://doi.org/10.1145/3372297.3423361)
## SNI-in-the-head: Protecting MPC-in-the-head Protocols against Side-channel Analysis.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#sni-in-the-head-protecting-mpc-in-the-head-protocols-against-side-channel-analysis) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#sni-in-the-head-protecting-mpc-in-the-head-protocols-against-side-channel-analysis)**
### 作者
* Okan Seker, University of Lübeck, Lübeck, Germany
* Sebastian Berndt, University of Lübeck, Lübeck, Germany
* Luca Wilke, University of Lübeck, Lübeck, Germany
* Thomas Eisenbarth, University of Lübeck, Lübeck, Germany
### 摘要
> 基于MPC-in-the-head的协议最近越来越受欢迎，正处于广泛使用的边缘。随着广泛使用，实施问题和实施攻击的威胁如侧信道攻击也随之而来。我们展示了实施MPC-in-the-head范式的协议实施容易受到侧信道攻击的影响。我们选择Giacomelli、Madsen和 Orlandi(USENIX 2016)的ZKBoo协议作为案例研究，并展示了即使泄漏一个值也足以破坏该协议的安全性。为了证明这种攻击不仅仅是理论上的漏洞，我们应用差分功耗分析通过模拟来展示这些漏洞。为了解决这个问题，我们扩展和推广了ZKBoo-协议，利用了Barthe等人(CC 2016)提出的强非干扰概念。为了将这个概念应用于ZKBoo，我们构建了新版本的均匀分布随机性的强非干扰小工具。最后，我们展示了每个电路只能使用这些平衡的强非干扰小工具分解成分支。这使我们能够构建一个名为$(n+1)$-ZKBoo的ZKBoo版本，它在签名大小和运行时间上对抗侧信道攻击时的开销有限。此外，$(n+1)$-ZKBoo能够扩展到对抗对手探测的所需安全性。我们通过实验证实了攻击ZKBoo成功后在$(n+1)$-ZKBoo上无法再起作用。此外，我们还通过实际实施进行了广泛性能分析和开销量化。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417889](https://doi.org/10.1145/3372297.3417889)
## AdvPulse: Universal, Synchronization-free, and Targeted Audio Adversarial Attacks via Subsecond Perturbations.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#advpulse-universal-synchronization-free-and-targeted-audio-adversarial-attacks-via-subsecond-perturbations) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#advpulse-universal-synchronization-free-and-targeted-audio-adversarial-attacks-via-subsecond-perturbations)**
### 作者
* Zhuohang Li, University of Tennessee, Knoxville, Knoxville, TN, USA
* Yi Wu, University of Tennessee, Knoxville, Knoxville, TN, USA
* Jian Liu, University of Tennessee, Knoxville, Knoxville, TN, USA
* Yingying Chen, Rutgers University, New Brunswick, NJ, USA
* Bo Yuan, Rutgers University, New Brunswick, NJ, USA
### 摘要
> 现有的音频对抗攻击方法仅关注对手事先知道整个语音输入的情况，以通过将音频输入与相应的对抗扰动进行对齐和混合来生成对抗性示例。在这项工作中，我们考虑了一种更实际和具有挑战性的攻击情景，即智能音频系统接收实时音频输入（例如，现场人声），对手可以通过同时播放对抗性扰动来欺骗系统。 这种攻击行为的改变带来了巨大的挑战，阻碍了现有的对抗扰动生成方法的直接应用。在实践中，（1）对手无法预测受害者会说什么：对手无法依赖于他们对语音信号的先验知识来指导如何生成对抗性扰动；（2）对手无法控制受害者何时讲话：对抗性扰动和语音之间的同步无法保证。为了解决这些挑战，本文提出了AdvPulse，一种系统化的方法，用于以目标化和无同步方式生成亚秒级音频对抗性扰动，以改变流式音频输入的识别结果。为了规避语音内容和时间上的限制，我们利用基于惩罚的通用对抗性扰动生成算法，并将不断变化的时间延迟纳入优化过程中。我们进一步根据环境声音定制对抗性扰动，使其对人类不显眼。此外，通过考虑在物理回放过程中发生的失真来源，我们能够生成更强大的音频对抗性扰动，即使在空中传播下仍然有效。在各种真实环境中进行了基于两种典型智能音频系统（即说话者识别和语音命令识别）的大量实验。结果表明，我们的攻击在室内环境中能够达到超过89.6％的平均攻击成功率，在车内情景中能够达到76.0％的攻击成功率，即使伴有较大噪声如引擎声和路噪声。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423348](https://doi.org/10.1145/3372297.3423348)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3423348](https://dl.acm.org/doi/pdf/10.1145/3372297.3423348)
## Harnessing the Ambient Radio Frequency Noise for Wearable Device Pairing.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#harnessing-the-ambient-radio-frequency-noise-for-wearable-device-pairing) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#harnessing-the-ambient-radio-frequency-noise-for-wearable-device-pairing)**
### 作者
* Wenqiang Jin, The University of Texas at Arlington, Arlington, TX, USA
* Ming Li, The University of Texas at Arlington, Arlington, TX, USA
* Srinivasan Murali, The University of Texas at Arlington, Arlington, TX, USA
* Linke Guo, Clemson University, Clemson, SC, USA
### 摘要
> 可穿戴设备捕捉用户健康状况和日常活动的丰富信息，但对于它们的配对需求尚未得到满足。目前的解决方案主要依赖于人工参与，不仅繁琐且容易出错，而且不易扩展。尽管之前已有一些努力尝试填补这一差距，但它们要么依赖于一些复杂的传感器，例如肌电图（EMG）或心电图（ECG）垫，这些传感器可能并不普遍存在，要么需要非平凡的通信收发器设计，而这些设计在当前商用设备上并不容易找到。因此，迫切需要一种安全、实用和方便的可穿戴设备配对方案。在本文中，我们提出了一种基于环境无线射频（RF）噪声的新型方法。我们的设计基于这样一个关键观察结果，即在人体表面不同部位测量到的RF噪声功率在对数刻度上经历了相同的变化趋势，而来自不同人体或离开人体的噪声则具有明显的差异。可穿戴设备利用观察到的噪声作为提议的配对协议的熵源。大量实验证明我们的方案的配对等错误率（EER）低至1.4%。其密钥生成速率达到138位/秒，超过了迄今为止的现有配对方案。此外，我们的方案可以在0.97秒内高效执行。整个配对过程的能量消耗仅为0.27焦耳。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417288](https://doi.org/10.1145/3372297.3417288)
## LEAF: A Faster Secure Search Algorithm via Localization, Extraction, and Reconstruction.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#leaf-a-faster-secure-search-algorithm-via-localization-extraction-and-reconstruction) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#leaf-a-faster-secure-search-algorithm-via-localization-extraction-and-reconstruction)**
### 作者
* Rui Wen, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Yu Yu, Shanghai Jiao Tong University, Shanghai, China
* Xiang Xie, PlatON, Shanghai, China
* Yang Zhang, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
### 摘要
> 安全搜索是在保证查询机密性的同时，从（可能是云托管的）加密数据库中搜索和检索记录。由于对数据库隐私日益关注，研究者近年来越来越关注安全搜索。然而，安全搜索中（尤其是乘法）同态运算的低效率阻碍了其在实践中的应用。为解决这个问题，Akavia等人[CCS 2018，PETS 2019]提出了新的协议，将搜索算法中的乘法数量从O（n2）降低到O（n log2 n），再降低到O（n log n），其中n是数据库的大小。在本文中，我们提出了第一个安全搜索协议--LEAF及其变体LEAF+--它只需要O（n）次乘法。具体而言，在LEAF的核心是我们提出的三种新方法，分别被称为本地化、提取和重构。此外，LEAF具有低通信复杂度，只需要客户端执行解密操作，这在部署在弱电源设备（如手机）上具有优势。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417237](https://doi.org/10.1145/3372297.3417237)
## Blinder - Scalable, Robust Anonymous Committed Broadcast.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#blinder-scalable-robust-anonymous-committed-broadcast) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#blinder-scalable-robust-anonymous-committed-broadcast)**
### 作者
* Ittai Abraham, VMware Research, Herzliya, Israel
* Benny Pinkas, Bar Ilan University, Ramat Gan, Israel
* Avishay Yanai, VMware Research, Herzliya, Israel
### 摘要
> 匿名承诺广播是一种功能，扩展了DC网络，允许一组客户端向一组服务器私密承诺消息，然后可以同时按随机顺序打开所有承诺的消息。由于没有人可以了解客户端承诺消息的顺序或内容，所以实现了匿名性。我们提出了Blinder，这是第一个为匿名承诺广播提供可扩展和完全强健解决方案的系统。Blinder在面对全局主动（恶意）对手时同时保持了安全性（匿名性）和强健性（也称为“有保证的输出传递”或“可用性”）。此外，Blinder具有抗审查特性，也就是说，诚实的客户端无法被阻止参与。Blinder通过精心结合匿名通信和安全多方计算（MPC）领域的经典和最新技术来保证其安全性和可扩展性。依赖于MPC对这样的系统而言是有益的，因为它自然地允许各方（服务器）在发布之前对接受的消息强制执行一些属性。基于GPU的Blinder实现具有5个服务器，可以接受100万个客户端，延迟不到8分钟；比3服务器Riposte协议（S&P '15）快了超过100倍，而后者既不具备强健性，也不具备抗审查特性；与AsynchroMix和PowerMix（CCS '19）相比，它们是仅有的能够保证公平性（或在线阶段强健性）的方案，我们获得了更大的速度优势。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417261](https://doi.org/10.1145/3372297.3417261)
## DNS Cache Poisoning Attack Reloaded: Revolutions with Side Channels.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#dns-cache-poisoning-attack-reloaded-revolutions-with-side-channels) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#dns-cache-poisoning-attack-reloaded-revolutions-with-side-channels)**
### 作者
* Keyu Man, University of California, Riverside, Riverside, CA, USA
* Zhiyun Qian, University of California, Riverside, Riverside, CA, USA
* Zhongjie Wang, University of California, Riverside, Riverside, CA, USA
* Xiaofeng Zheng, Qi-AnXin Group & Tsinghua University, Beijing, China
* Youjun Huang, Tsinghua University, Beijing, China
* Haixin Duan, Tsinghua University & Qi-AnXin Group, Beijing, China
### 摘要
> 在本文中，我们报告了软件堆栈中的一系列缺陷，导致DNS缓存污染问题大幅度复苏 --- 这是一种经过简单而有效的基于随机化防御的经典攻击。要成功地污染典型服务器上的DNS缓存，一个非路径上的对手需要同时发送一组不切实际数量的$2 ^132 $假冒响应，并猜测正确的源端口（16位）和事务ID（16位）。出乎意料的是，我们发现了一些弱点，允许对手先猜测源端口，然后再猜测事务ID（仅需$2 ^16 + 2^16 $假冒响应）。更糟糕的是，我们展示了对手可以通过多种方式延长攻击窗口，从而大大增加成功的几率。该攻击影响DNS基础设施中的所有缓存层，例如DNS转发器和解析器缓存，以及广泛使用的DNS软件堆栈，包括最流行的BIND、Unbound和dnsmasq，运行在Linux和其他操作系统之上。受攻击的主要条件是受害者的操作系统及其网络配置允许ICMP错误回复。根据我们的测量，我们发现互联网上超过34％的开放解析器中存在此漏洞（特别是包括Google的8.8.8.8在内的85％的热门DNS服务）。此外，我们全面验证了所提出的攻击，并在一系列的服务器配置和网络环境下进行了成功的攻击实验，包括控制实验和生产型DNS解析器（经授权）。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417280](https://doi.org/10.1145/3372297.3417280)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417280](https://dl.acm.org/doi/pdf/10.1145/3372297.3417280)
## Game-Set-MATCH: Using Mobile Devices for Seamless External-Facing Biometric Matching.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#game-set-match-using-mobile-devices-for-seamless-external-facing-biometric-matching) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#game-set-match-using-mobile-devices-for-seamless-external-facing-biometric-matching)**
### 作者
* Shashank Agrawal, Western Digital, Milpitas, CA, USA
* Saikrishna Badrinarayanan, Visa Research, Palo Alto, CA, USA
* Pratyay Mukherjee, Visa Research, Palo Alto, CA, USA
* Peter Rindal, Visa Research, Palo Alto, CA, USA
### 摘要
> 我们每天都使用生物特征识别，如指纹和面部图像，来识别我们自己的移动设备并登录应用程序。这种身份验证是面向内部的：我们在存储模板的同一设备上提供测量。如果我们的个人设备也能参与面向外部的身份验证，即通过附近的外部传感器捕获生物测量数据，那么我们也可以在各种实体空间，如杂货店、会展中心、自动取款机等地方享受无摩擦的身份验证体验。然而，实体空间的开放性也带来了重要的隐私问题。我们设计了一套基于余弦相似度度量的安全协议，用于在开放环境中对外部身份验证提供用户设备上存储的用户模板和外部传感器捕获的生物测量数据的隐私保护。这些协议提供不同级别的安全性，从具有一定泄漏的被动安全性到完全无泄漏的主动安全性。借助新的打包技术和Paillier加密的零知识证明，以及精心设计的协议，我们的协议实现了非常实用的性能指标。对于每个元素大小为16位的长度为256的模板，我们最快的协议仅需0.024秒计算一次匹配，但最慢的协议也不超过0.12秒。我们的协议的通信开销也非常小。具有一定泄漏的被动安全和主动安全协议只需交换16.5KB和27.8KB的数据。第一条消息被设计为可重复使用的，如果提前发送，开销可降低至仅为0.5KB和0.8KB。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417287](https://doi.org/10.1145/3372297.3417287)
## Usage Patterns of Privacy-Enhancing Technologies.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#usage-patterns-of-privacy-enhancing-technologies) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#usage-patterns-of-privacy-enhancing-technologies)**
### 作者
* Kovila P.L. Coopamootoo, Newcastle University, Newcastle upon Tyne, United Kingdom
### 摘要
> 随着隐私入侵的持续报道，互联网变得更加危险。这得到了大规模在线技术部署和数据密集型网络所带来的在线危害潜力的支持。虽然互联网用户经常表达对隐私的担忧，但一些人报告称他们采取行动来保护自己的在线隐私。我们调查了个体为了保护自己的在线隐私而采用的方法和技术。我们进行了两项研究，其中一个包括N=180个参与者，另一个包括N=907个参与者，在美国、英国和德国进行。我们发现，在这三个国家，非技术方法是最常用的方法之一。我们在一个聚类图中确定了隐私方法使用的不同分组。该图显示，除了非技术方法之外，内置在服务中的简单PETs是最常用的群集，而更先进的PETs则形成了一个不太常用的群集。我们在第三项研究中进一步调查了用户主要使用一组PETs的感知和原因，共有N=183名参与者。我们发现在保护在线隐私方面，使用先进和简单PETs的用户之间没有感知能力的差异。我们比较了使用先进和简单PETs的感知，并报告了不使用先进PETs的用户的原因，以及潜在使用所需的支持。本文通过揭示包括43种隐私方法和26种PETs在内的使用和使用感知，为隐私研究做出了贡献，并提供了一个PETs使用的图谱。这个聚类图为未来以用户为中心的跨PETs调查提供了系统和可靠的参考点。总的来说，这项研究提供了对一系列PETs的使用和感知的广泛理解，并可以引导未来对PETs使用的规模化研究。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423347](https://doi.org/10.1145/3372297.3423347)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3423347](https://dl.acm.org/doi/pdf/10.1145/3372297.3423347)
## Text Captcha Is Dead? A Large Scale Deployment and Empirical Study.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#text-captcha-is-dead-a-large-scale-deployment-and-empirical-study) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#text-captcha-is-dead-a-large-scale-deployment-and-empirical-study)**
### 作者
* Chenghui Shi, Zhejiang University, Hangzhou, China
* Shouling Ji, Zhejiang University, Hangzhou, China
* Qianjun Liu, Zhejiang University, Hangzhou, China
* Changchang Liu, IBM Research, Yorktown Heights, NY, USA
* Yuefeng Chen, Alibaba Group, Hangzhou, China
* Yuan He, Alibaba Group, Hangzhou, China
* Zhe Liu, Nanjing University of Aeronautics and Astronautics, Nanjing, China
* Raheem Beyah, Georgia Institute of Technology, Atlanta, GA, USA
* Ting Wang, Penn State, State College, PA, USA
### 摘要
> 深度学习技术的发展极大地增强了计算机识别CAPTCHA（全自动公共图灵测试以区分计算机和人类）的能力，因此打破或减轻了现有验证码方案的安全性。为了防御这些攻击，最近提出了利用对抗机器学习扰动验证码图片的方法。然而，它们要么需要对验证码解决模型有先验知识，要么缺乏对攻击者行为的适应性。最重要的是，它们都没有被应用于实际应用中，其实际适用性和有效性尚不明确。在这项工作中，我们引入了advCAPTCHA，一个实际应用的对抗性验证码生成系统，它可以抵御基于深度学习的验证码解决器，并在拥有近十亿用户的大规模在线平台上部署。据我们所知，这是第一个在国际大规模在线平台上部署的工作。通过以一种新的方式应用对抗学习技术，advCAPTCHA可以生成有效的对抗性验证码，大大降低攻击成功率，这已在大规模在线研究中得到证明。此外，我们还验证了advCAPTCHA在实际应用中的可行性以及其对各种攻击的鲁棒性。我们利用现有的用户风险分析系统来识别潜在攻击者，并向他们提供advCAPTCHA。然后我们将他们的答案作为攻击模型的查询。通过这种方式，advCAPTCHA可以适应/微调以适应攻击模型的演变。总的来说，advCAPTCHA可以作为在实践中生成强大验证码的关键因素，并为验证码开发人员和从业者提供有用的指导。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417258](https://doi.org/10.1145/3372297.3417258)
## Oracle Simulation: A Technique for Protocol Composition with Long Term Shared Secrets.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#oracle-simulation-a-technique-for-protocol-composition-with-long-term-shared-secrets) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#oracle-simulation-a-technique-for-protocol-composition-with-long-term-shared-secrets)**
### 作者
* Hubert Comon, LSV, CNRS & ENS Paris-Saclay & Inria & Université Paris-Saclay, Saclay, France
* Charlie Jacomme, LSV, CNRS & ENS Paris-Saclay & Inria & Université Paris-Saclay, Saclay, France
* Guillaume Scerri, Université Versailles Saint-Quentin & Inria, Versailles, France
### 摘要
> 我们提供了一个构成框架，以及多种构成定理，允许将一个复合协议的安全证明分解为更简单的目标。虽然许多证明技术都可以用于证明子目标，但我们的模型特别适用于计算完整符号攻击者(ccsA)模型。我们同时处理了顺序和并行组合，包括协议之间的状态传递和长期共享密钥。我们还提供了一些工具，将多会话安全性降低到单会话安全性，对于更强的攻击者来说是如此。因此，我们的框架首次允许在ccsa模型中对无限数量的会话进行证明。为此，我们引入了O-仿真的概念：一台机器通过访问一个名为O的oracle来进行仿真。通过精心管理对长期密钥的访问，我们可以将一个组合协议（例如P || Q）的安全性降低到P（或Q）的安全性，与使用oracle O对Q（或P）进行仿真的攻击者有关。正如我们的案例研究所证明的那样，这个oracle大多数情况下是相当通用和简单的。这些结果可以简单形式地证明组合协议的正确性，例如多个会话的密钥交换，以及使用交换密钥的协议的多个会话，即使所有部分都共享长期密钥（如签名密钥）。我们还提供了一个具体的应用程序，来对SSH协议进行证明，其中包括一个修改过的转发代理，这是一个长期共享密钥的复杂案例，我们从形式上证明了其安全性。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417229](https://doi.org/10.1145/3372297.3417229)
## Post-Quantum TLS Without Handshake Signatures.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#post-quantum-tls-without-handshake-signatures) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#post-quantum-tls-without-handshake-signatures)**
### 作者
* Peter Schwabe, Max Planck Institute for Security and Privacy & Radboud University, Bochum, Germany
* Douglas Stebila, University of Waterloo, Waterloo, ON, Canada
* Thom Wiggers, Radboud University, Nijmegen, Netherlands
### 摘要
> 我们提出了KEMTLS，它是TLS 1.3握手的替代方案，使用密钥封装机制（KEMs）代替签名进行服务器身份验证。在现有的后量子密码学候选方案中，与KEMs的公钥/密文大小相比，签名方案通常具有更大的公钥/签名大小：通过在后量子TLS中使用IND-CCA安全的KEM进行服务器身份验证，我们获得了多重优势。经过大小优化后的后量子实例化的KEMTLS所需带宽不到TLS 1.3经过大小优化后实例化的一半。在速度优化的实例化中，与TLS 1.3相比，KEMTLS减少了近90%的服务器CPU周期量，同时减小了通信大小，缩短了客户端开始发送加密应用数据的时间，并消除了服务器受信任的代码库中的签名代码。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423350](https://doi.org/10.1145/3372297.3423350)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3423350](https://dl.acm.org/doi/pdf/10.1145/3372297.3423350)
## Clone Detection in Secure Messaging: Improving Post-Compromise Security in Practice.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#clone-detection-in-secure-messaging-improving-post-compromise-security-in-practice) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#clone-detection-in-secure-messaging-improving-post-compromise-security-in-practice)**
### 作者
* Cas Cremers, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Jaiden Fairoze, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Benjamin Kiesl, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Aurora Naska, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
### 摘要
> 我们研究现代通讯应用是否能够实现其底层协议提供的强大的受损后安全性保证。具体来说，我们进行了一个黑盒实验，用户成为克隆攻击的受害者；在这种攻击中，攻击者通过克隆设备并且随后尝试通过应用的用户界面冒充用户，以此来获取用户的全部状态（包括身份密钥）。根据提供受损后安全性保证的协议应该能够防止我们的攻击，因此，所有基于Signal的双螺旋算法（如Signal应用、WhatsApp和Facebook Secret Conversations）的应用也应该能够防止此类攻击。我们的实验结果表明事实并非如此：大多数已部署的通讯应用远远达不到其底层机制所暗示的安全性。我们推测这种安全差距是许多应用为了可用性而放弃了一定形式的同步而导致的。我们展示了，放弃同步必然导致严格意义上的受损后安全性的丧失，但我们也展示了比当前实际提供的安全性更多的安全性可以被保留。具体而言，我们提出了一种修改版的双螺旋算法，它容忍某种形式的不同步，同时仍能够检测到克隆活动。此外，我们使用Tamarin验证器对我们的算法进行正式分析，以证明它实现了期望的安全性质。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423354](https://doi.org/10.1145/3372297.3423354)
## Logging to the Danger Zone: Race Condition Attacks and Defenses on System Audit Frameworks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#logging-to-the-danger-zone-race-condition-attacks-and-defenses-on-system-audit-frameworks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#logging-to-the-danger-zone-race-condition-attacks-and-defenses-on-system-audit-frameworks)**
### 作者
* Riccardo Paccagnella, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Kevin Liao, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Dave Tian, Purdue University, West Lafayette, IN, USA
* Adam Bates, University of Illinois at Urbana-Champaign, Urbana, IL, USA
### 摘要
> 为了帮助安全调查，系统日志必须远离对手的触及范围。不幸的是，已经提升主机特权的攻击者通常能够任意删除和修改日志事件。针对这种威胁，多年来出现了各种安全日志系统，试图为系统日志提供防篡改性（例如，只写只读驱动器、远程存储服务器）或防篡改证据性（例如，加密证明）。这些解决方案通过一个接口公开了将事件提交至安全日志的方式，从而使其在此时享有免受未来篡改的保护。然而，迄今为止的所有提议都依赖于一个假设，即事件的发生与其提交至安全日志同时发生。在这项工作中，我们对这一假设提出挑战，通过展示和验证一种针对审计框架完整性的竞态条件攻击。我们的攻击利用了I/O和IPC活动的本质异步性质，证明攻击者可以在事件发生后、被提交至日志之前，从消息缓冲区中获取关于他们入侵的事件，从而绕过现有的保护措施。我们通过引入KennyLoggings来迈向抵御我们的攻击的第一步，这是第一个满足同步完整性属性的基于内核的防篡改日志系统，即它保证了事件在发生时的防篡改证据。我们在Linux内核之上实现了KennyLoggings，并展示它对日志密集型应用工作负载的开销在8%至11%之间。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417862](https://doi.org/10.1145/3372297.3417862)
## MP-SPDZ: A Versatile Framework for Multi-Party Computation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#mp-spdz-a-versatile-framework-for-multi-party-computation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#mp-spdz-a-versatile-framework-for-multi-party-computation)**
### 作者
* Marcel Keller, CSIRO's Data61, Sydney, Australia
### 摘要
> 多协议SPDZ（MP-SPDZ）是SPDZ-2（Keller等人，CCS'13）的一个分支，它是多方计算（MPC）协议SPDZ（Damgård等人，Crypto'12）的一个实现。MP-SPDZ将SPDZ-2扩展到30个MPC协议变种，所有这些变种都可以使用基于Python的相同高级编程接口。这大大简化了比较不同协议和安全模型成本的过程。这些协议涵盖了所有常用的安全模型（诚实/不诚实多数和半诚实/恶意腐败），以及二进制和算术电路的计算（后者取模于质数和二的幂）。所采用的基本原语包括秘密分享、遗忘传输、同态加密和混淆电路。实现的协议的广泛性以及易于使用的高级接口使得它适合用于各种安全模型中计算成本的基准测试，无论研究人员是否具有安全计算背景。本文旨在概述所实现的协议的多样性以及在开发MP-SPDZ过程中所做的设计选择，以及编程接口的能力。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417872](https://doi.org/10.1145/3372297.3417872)
## More Efficient MPC from Improved Triple Generation and Authenticated Garbling.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#more-efficient-mpc-from-improved-triple-generation-and-authenticated-garbling) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#more-efficient-mpc-from-improved-triple-generation-and-authenticated-garbling)**
### 作者
* Kang Yang, State Key Laboratory of Cryptology, Beijing, China
* Xiao Wang, Northwestern University, Evanston, IL, USA
* Jiang Zhang, State Key Laboratory of Cryptology, Beijing, China
### 摘要
> 近期关于分布式混淆技术的研究提供了高效的解决方案，可容忍任意数量的损坏。在这项研究中，我们改进了这一范式中最先进的协议以进一步提高性能。首先，我们提出了一种新的生成认证AND三元组的协议，这是许多最新研究中的关键构建块。
> 
> \beginitemize
> 
> \item 我们从裸的IKNP OT扩展中提出了一种新的双方和多方设置下的认证位协议，使我们能够减少约$24\%$的通信量，并消除许多计算瓶颈。我们进一步改善了多方认证AND三元组的计算效率，采用更便宜且较少的一致性检查和较少的哈希函数调用。
> 
> \item 我们实现了我们的三元组生成协议，并观察到与大多数设置中最佳先前协议相比，大约提高了$4$倍到$5$倍的性能。例如，在两方设置下，我们的协议可以在每秒超过$4$百万个认证三元组的速度下工作，而最佳先前实现每秒只能生成$0.8$百万个三元组。在多方设置中，我们的协议可以在80个参与方之间每秒生成超过$37000$个三元组，而最佳先前协议只能在16个参与方之间每秒生成相同数量的三元组。
> 
> \enditemize}
> 
> 我们还改进了最先进的多方认证混淆协议。
> 
> \beginitemize}
> 
> \item 在多方设置中，我们首次采用半门技术，这使我们能够每个混淆者每个门减少$2κ$比特的混淆表大小，其中κ是计算安全参数。这种优化也适用于半诚实多方设置。
> 
> \item 我们进一步将电路认证的通信量从$4ρ$比特减少到每个门$1$比特，使用一种新的多方批量电路认证，其中ρ是统计安全参数。类似效率的先前解决方案仅适用于两方设置。
> 
> \enditemize}
> 
> 例如，在三方设置中，我们的技术可以将分布式混淆电路的大小大致减少$35\%$。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417285](https://doi.org/10.1145/3372297.3417285)
## Mitigation of Attacks on Email End-to-End Encryption.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#mitigation-of-attacks-on-email-end-to-end-encryption) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#mitigation-of-attacks-on-email-end-to-end-encryption)**
### 作者
* Jörg Schwenk, Ruhr University Bochum, Bochum, Germany
* Marcus Brinkmann, Ruhr University Bochum, Bochum, Germany
* Damian Poddebniak, Münster University of Applied Sciences, Münster, Germany
* Jens Müller, Ruhr University Bochum, Bochum, Germany
* Juraj Somorovsky, Paderborn University, Paderborn, Germany
* Sebastian Schinzel, Münster University of Applied Sciences, Münster, Germany
### 摘要
> OpenPGP和S/MIME是20世纪90年代初期引入的用于保护电子邮件通信的两个主要标准。最近的三类攻击利用了弱密码模式（EFAIL Malleability Gadgets，或EFAIL-MG）、MIME电子邮件结构的灵活性（EFAIL Direct Exfiltration，或EFAIL-DE）以及电子邮件客户端的回复操作（REPLY attacks）。尽管这三种攻击都通过使用标准的电子邮件功能破坏了消息的机密性，但只有EFAIL-MG在IETF标准中通过引入AEAD算法得到了缓解。到目前为止，尚未有统一和可靠的措施被电子邮件客户端采用以防止EFAIL-DE和REPLY attacks。相反，电子邮件客户端实施了各种不同的临时对策，这些对策只有部分有效，引起了互操作性问题，并破坏了安全电子邮件生态系统。我们提出了第一个通用的对抗REPLY和EFAIL-DE攻击的对策，通过在解密过程中检查解密上下文，包括SMTP头和MIME结构。解密上下文被编码为字符串DC，并在AEAD加密中用作关联数据（AD）。因此，所提出的解决方案可以无缝地扩展EFAIL-MG的对策。只要攻击者以关键的方式修改电子邮件源代码，例如改变MIME结构或添加新的Reply-To头，则解密上下文将发生变化。所提出的解决方案不会引起任何互操作性问题，并且仍然可以解密传统电子邮件。我们通过在Thunderbird / Enigmail中实现解密上下文，并在电子邮件在包括Gmail和iCloud Mail在内的所有主要电子邮件提供商之间传输后验证其正确功能来评估我们的方法。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417878](https://doi.org/10.1145/3372297.3417878)
## Dangerous Skills Got Certified: Measuring the Trustworthiness of Skill Certification in Voice Personal Assistant Platforms.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#dangerous-skills-got-certified-measuring-the-trustworthiness-of-skill-certification-in-voice-personal-assistant-platforms) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#dangerous-skills-got-certified-measuring-the-trustworthiness-of-skill-certification-in-voice-personal-assistant-platforms)**
### 作者
* Long Cheng, Clemson University, Clemson, SC, USA
* Christin Wilson, Clemson University, Clemson, SC, USA
* Song Liao, Clemson University, Clemson, SC, USA
* Jeffrey Young, Clemson University, Clemson, SC, USA
* Daniel Dong, Clemson University, Clemson, SC, USA
* Hongxin Hu, Clemson University, Clemson, SC, USA
### 摘要
> 随着语音个人助理（VPA）生态系统的出现，第三方开发者被允许在亚马逊Alexa平台的技能存储库中构建新的语音应用程序， 在谷歌助手平台中称为动作。为了简洁起见，我们使用技能这个术语来描述语音应用程序，包括亚马逊技能和谷歌动作，除非我们需要区分它们用于不同的语音个人助理平台。发布这些技能到技能存储库大大扩展了VPA的功能。在一个新的技能成为公开可用之前，该技能必须通过认证过程，验证其是否符合必要的内容和隐私政策。技能认证的可信度对于平台提供者，开发者和终端用户来说非常重要。然而，目前很少有关于违反政策的技能是否能够通过认证并在VPA平台上发布的研究。在这项工作中，我们研究了亚马逊Alexa和谷歌助手平台上技能认证的可信度，以回答三个关键问题：1）在捕捉第三方技能中的政策违规方面，技能认证流程是否可信。2）是否存在违反政策的技能发布在他们的技能存储库中。3）当与VPA设备进行交互时，VPA用户对技能认证的展望和他们的易受攻击的使用行为是什么。在15个月的时间内，我们故意制作并提交了234个违反VPA平台指定内容和隐私政策的亚马逊Alexa技能和381个谷歌助手动作进行认证。令人惊讶的是，我们成功地获得了234个（100％）违反政策的Alexa技能的认证和148个（39％）违反政策的谷歌动作的认证。我们的分析表明，违反政策的技能存在于当前的技能存储库中，因此用户（特别是儿童）在使用VPA服务时存在风险。我们进行了一项包括203名参与者的用户研究，以了解用户对VPA平台的错误信任。不幸的是，主流VPA平台中的技能认证并未满足用户的期望。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423339](https://doi.org/10.1145/3372297.3423339)
## Verifiable Timed Signatures Made Practical.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#verifiable-timed-signatures-made-practical) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#verifiable-timed-signatures-made-practical)**
### 作者
* Sri Aravinda Krishnan Thyagarajan, Friedrich Alexander Universität Erlangen-Nürnberg, Nürnberg, Germany
* Adithya Bhat, Purdue University, West Lafayette, IN, USA
* Giulio Malavolta, University of California, Berkeley & CMU, Berkeley, CA, USA
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Aniket Kate, Purdue University, West Lafayette, IN, USA
* Dominique Schröder, Friedrich-Alexander Universität Erlangen-Nürnberg, Nürnberg, Germany
### 摘要
> 可验证的定时签名（VTS）方案允许将已知消息的签名在一段给定时间T内进行时钟锁定，以便在执行时间为T的顺序计算后，任何人都可以从时钟锁定中提取签名。可验证性确保任何人都可以公开检查时钟锁定是否包含消息的有效签名，而无需首先解决它，并且可以通过解决相同问题获得在时间T内的签名。这项工作对VTS进行了正式化，提出了与BLS、Schnorr和ECDSA签名兼容的高效构造，并通过实验证明这些构造可以在实践中使用。在技术层面上，我们基于同态时钟锁定谜题设计了一种高效的切割选择协议，用于证明包含在时钟锁定谜题中的签名的有效性。我们还提出了一种新的高效区间证明协议，显著改进了现有提议的证明大小，并且具有独立的参考价值。虽然VTS是一个多才多艺的工具，已经有许多应用，但我们演示了VTS在加密货币领域解决了三个新的具有挑战性的问题。具体而言，我们展示了VTS如何是构建以下加密基石的：（i）具有改进链上用户不可追踪性的支付通道网络，（ii）没有任何链上时间概念的加密货币交易的多方签署，（iii）加密货币启用的合理多方计算协议。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417263](https://doi.org/10.1145/3372297.3417263)
## Asynchronous Distributed Key Generation for Computationally-Secure Randomness, Consensus, and Threshold Signatures.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#asynchronous-distributed-key-generation-for-computationally-secure-randomness-consensus-and-threshold-signatures) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#asynchronous-distributed-key-generation-for-computationally-secure-randomness-consensus-and-threshold-signatures)**
### 作者
* Eleftherios Kokoris Kogias, Facebook Novi & IST Austria, London, United Kingdom
* Dahlia Malkhi, Facebook Novi, Menlo Park, CA, USA
* Alexander Spiegelman, Facebook Novi, Menlo Park, CA, USA
### 摘要
> 在本文中，我们提出了第一个异步分布式密钥生成（ADKG）算法，这也是第一个可以生成具有双重（f，2f + 1）阈值的密码密钥的分布式密钥生成算法（其中f是有故障方的数量）。因此，使用我们的ADKG，我们消除了最可扩展的一致性算法所做的可信设置假设。为了创建具有双重（f，2f + 1）阈值的DKG，我们首先肯定地回答了Cachin等人提出的一个疑问[7]，即如何创建具有重建阈值为f + 1 < k < 2f + 1的异步可验证秘密共享（AVSS）协议，这是一个独立的问题。我们的高阈值AVSS（HAVSS）使用一个不对称的双变量多项式来编码秘密。这样只有在一组k个节点贡献的情况下才能重建秘密，同时允许一个没有参与共享阶段的诚实节点在f + 1个诚实方的帮助下恢复他的份额。一旦我们有了HAVSS，我们可以使用它来引导可扩展的部分同步共识协议，但是在异步环境中获得DKG的问题仍然存在，因为我们需要一种产生公共随机性的方法。解决方案来自一个新的最终完美的共同硬币（EPCC）抽象，它可以从n个并发的HAVSS调用中生成一个公共硬币。EPCC的关键属性是它最终是可靠的，因为它可能在最多f次（即使调用了多项式次数）不同意。使用EPCC，我们实现了一个最终高效的异步二进制协议（EEABA），当EPCC达成一致时是最优的，并在EPCC失败时保护安全性。最后，使用EEABA，我们构建了第一个具有与最佳部分同步DKG（O（n4）字，O（f）轮）相同的开销和预期运行时间的ADKG。作为我们ADKG的推论，我们还可以创建第一个不需要可信交易商来设置度为n-f的阈值签名的验证异步拜占庭协议（VABA）。我们的VABA在每个实例的预期O（n2）字和O（1）时间开销之后，通过ADKG进行初始O（n4）字和O（f）时间引导。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423364](https://doi.org/10.1145/3372297.3423364)
## RTFM! Automatic Assumption Discovery and Verification Derivation from Library Document for API Misuse Detection.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#rtfm-automatic-assumption-discovery-and-verification-derivation-from-library-document-for-api-misuse-detection) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#rtfm-automatic-assumption-discovery-and-verification-derivation-from-library-document-for-api-misuse-detection)**
### 作者
* Tao Lv, Institute of Information Engineering, Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
* Ruishi Li, Institute of Information Engineering, Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
* Yi Yang, Institute of Information Engineering, Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
* Kai Chen, Institute of Information Engineering, Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
* Xiaojing Liao, Indiana University Bloomington, Bloomington, IN, USA
* XiaoFeng Wang, Indiana University Bloomington, Bloomington, IN, USA
* Peiwei Hu, Institute of Information Engineering, Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
* Luyi Xing, Indiana University Bloomington, Bloomington, IN, USA
### 摘要
> 为了使用库API，开发人员应该遵循指导，并遵守我们称之为集成假设（IAs）的一些约束。违反这些假设可能带来严重后果，引入安全关键的缺陷，如使用后释放、NULL引用和身份验证错误。分析程序是否符合IAs需要投入大量的工作，并需要自动化。一个有希望的方向是通过自然语言处理（NLP）自动从库文档中恢复IAs，然后通过代码分析验证它们与程序中使用的API的一致性。然而，沿着这个方向的实际解决方案需要克服一些关键的挑战，特别是从松散格式的文档中发现IAs以及解释其非正式描述以识别复杂的约束（例如不同API之间的数据/控制流关系）。在本文中，我们提出了一种新的技术来自动发现和验证从库文档中推导出的假设。我们的方法称为Advance，利用一套创新的方法来解决这些挑战。具体而言，我们利用观察结果，即IAs倾向于以强烈的情绪表达约束的重要性，特别是那些安全关键的情况，然后利用新的情感分析模型准确地从松散格式的文档中恢复它们。这些IAs进一步处理以识别对API和参数的隐藏引用，通过嵌入模型，以识别期望遵循的信息流关系。然后，我们的方法运行频繁子树挖掘，发现IA句子中倾向于指示某些可能具有安全影响的约束类别的语法单元。这些组件被映射到按照IA句子的语法结构组织的验证代码片段，可以通过CodeQL执行的验证代码组装起来，以发现程序内部的误用。我们实现了这个设计，并对5个热门库（OpenSSL，SQLite，libpcap，libdbus和libxml2）和39个现实世界的应用进行了评估。我们的分析发现了193个API误用，其中包括139个以前从未报告过的缺陷。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423360](https://doi.org/10.1145/3372297.3423360)
## Speculative Probing: Hacking Blind in the Spectre Era.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#speculative-probing-hacking-blind-in-the-spectre-era) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#speculative-probing-hacking-blind-in-the-spectre-era)**
### 作者
* Enes Göktas, Stevens Institute of Technology, Hoboken, NJ, USA
* Kaveh Razavi, ETH Zurich, Zurich, Switzerland
* Georgios Portokalidis, Stevens Institute of Technology, Hoboken, NJ, USA
* Herbert Bos, Vrije Universiteit Amsterdam, Amsterdam, Netherlands
* Cristiano Giuffrida, Vrije Universiteit Amsterdam, Amsterdam, Netherlands
### 摘要
> 为了克服ASLR或更高级的细粒度和抗泄漏的代码随机化方案，现代软件利用信息泄漏来定位受害者代码中的小工具。在没有此类信息泄漏漏洞的情况下，攻击者仍然可以进行盲目攻击并通过重复探测受害者内存并观察崩溃的副作用来取消随机化地址空间，但这只对抗崩溃具有抵抗能力的程序可行。然而，像Linux内核这样的高价值目标并不具备抵抗崩溃的能力。此外，异常数量异常大的崩溃通常很容易被察觉。在本文中，我们展示了Spectre时代如何使持有单个内存损坏漏洞的攻击者能够在没有触发任何崩溃的情况下进行盲目攻击。使用推测执行来抑制崩溃，可以将基本内存写漏洞提升为强大的推测探测原语，通过微体系结构副作用泄漏信息。这样的原语可以反复探测受害者内存，并在没有崩溃的情况下破解强大的随机化方案，并绕过针对Spectre攻击的所有已部署的缓解措施。推测探测背后的关键思想是利用内存损坏打破Spectre缓解措施，并恢复Spectre风格的信息泄露原语，以进行实际的盲目软件攻击。为了展示推测探测，我们针对Linux内核，一个容易崩溃的受害者，迄今为止无法进行盲目攻击，进行端到端攻击，通过即时代码重用和仅使用单个内存写漏洞的数据攻击来危害系统，并绕过强大的Spectre和强大的随机化防御机制。我们的研究结果表明，必须考虑现代系统的攻击面之间的协同作用，包括Spectre和代码重用的威胁模型，才能充分了解攻击面。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417289](https://doi.org/10.1145/3372297.3417289)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417289](https://dl.acm.org/doi/pdf/10.1145/3372297.3417289)
## TrafficSliver: Fighting Website Fingerprinting Attacks with Traffic Splitting.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#trafficsliver-fighting-website-fingerprinting-attacks-with-traffic-splitting) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#trafficsliver-fighting-website-fingerprinting-attacks-with-traffic-splitting)**
### 作者
* Wladimir De la Cadena, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Asya Mitseva, Brandenburg Technical University, Cottbus, Germany
* Jens Hiller, RWTH Aachen University, Aachen, Germany
* Jan Pennekamp, RWTH Aachen University, Aachen, Germany
* Sebastian Reuter, RWTH Aachen University, Aachen, Germany
* Julian Filter, RWTH Aachen University, Aachen, Germany
* Thomas Engel, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Klaus Wehrle, RWTH Aachen University, Aachen, Germany
* Andriy Panchenko, Brandenburg Technical University, Cottbus, Germany
### 摘要
> 网站指纹识别（WFP）旨在通过观察数据流的大小和方向等模式，推断加密和匿名连接内容的信息。通过在恶意的Tor入口节点收集流量迹线，被动窃听者可以利用捕获的元数据揭示Tor用户访问的网站。正如最近显示的那样，WFP比以往假设的更加有效和现实。同时，之前的WFP防御要么在真实世界的环境中无法应用，要么只能防御特定的WFP攻击。为了减少Tor用户对WFP的暴露，我们提出了一种新颖的轻量级WFP防御方案——TrafficSliver，通过合理的带宽和延迟开销成功对抗当今的WFP分类器，因此成为Tor中的可选方案。通过用户控制流量在多个Tor入口节点间的分割，TrafficSliver限制了单个入口节点可以观察的数据，并扭曲了WFP攻击所利用的可重复流量模式。我们首先提出了一个网络层防御方案，在Tor网络内完全应用多路径的概念。我们证明了我们的网络层防御准确度从超过98%降低到不到16%，而无需增加任何人为延迟或虚假流量。我们进一步提出了一个优雅的基于客户端应用层的防御方案，独立于底层的匿名化网络。通过在不同的Tor入口节点上发送单个HTTP请求获取不同的Web对象，我们的应用层防御方案将WFP分类器的检测率降低了近50个百分点。尽管它提供的保护较低于我们的网络层防御方案，但在实现开销非常低的情况下提供了安全性提升，并且与当今的Tor网络完全兼容。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423351](https://doi.org/10.1145/3372297.3423351)
## Ligero++: A New Optimized Sublinear IOP.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ligero-a-new-optimized-sublinear-iop) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ligero-a-new-optimized-sublinear-iop)**
### 作者
* Rishabh Bhadauria, Bar-Ilan University, Ramat Gan, Israel
* Zhiyong Fang, Texas A&M University, College Station, TX, USA
* Carmit Hazay, Ligero Inc. & Bar-Ilan University, Rochester, NY, USA
* Muthuramakrishnan Venkitasubramaniam, Ligero Inc. & University of Rochester, Rochester, NY, USA
* Tiancheng Xie, University of California, Berkeley, College Station, TX, USA
* Yupeng Zhang, Texas A&M University, College Station, TX, USA
### 摘要
> 本文遵循设计具体高效透明子线性零知识交互式Oracle证明（IOP）的工作线。通过这种范式获得的论证具有不依赖公钥密码学、不需要可信设置以及对已知量子攻击的抵抗等优势。在透明系统领域中，Ligero和Aurora凭借无可比拟的优势脱颖而出，前者具有快速证明者算法和略微简洁的证明，而后者则具有略快的证明者和简洁的证明。在本研究中，我们引入了Ligero++，结合了这两种方法的最佳特点，以实现两全其美。我们实现了我们的协议并对结果进行基准测试。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417893](https://doi.org/10.1145/3372297.3417893)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417893](https://dl.acm.org/doi/pdf/10.1145/3372297.3417893)
## Zero Knowledge Proofs for Decision Tree Predictions and Accuracy.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#zero-knowledge-proofs-for-decision-tree-predictions-and-accuracy) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#zero-knowledge-proofs-for-decision-tree-predictions-and-accuracy)**
### 作者
* Jiaheng Zhang, University of California, Berkeley, Berkeley, CA, USA
* Zhiyong Fang, Texas A&M University, College Station, TX, USA
* Yupeng Zhang, Texas A&M University, College Station, TX, USA
* Dawn Song, University of California, Berkeley, Berkeley, CA, USA
### 摘要
> 机器学习在实践中变得越来越重要，并广泛应用于各种应用程序中。尽管取得了巨大成功，但机器学习预测的完整性和准确性却引起了人们的关注。声称能够实现高准确度的机器学习模型的可重现性仍具有挑战性，并且真实产品中机器学习预测的正确性和一致性缺乏任何安全保证。本文中，我们开始研究零知识机器学习，并提出了零知识决策树预测和准确性测试的协议。这些协议允许决策树模型的所有者说服他人，证明该模型对数据样本进行预测或在公共数据集上实现一定准确度，而不泄露有关模型本身的任何信息。我们开发了有效将决策树预测和准确性转化为零知识证明陈述的方法。我们实施了这些协议，并展示了它们在实践中的效率。对于一个拥有23层和1,029个节点的决策树模型，只需250秒即可生成一个零知识证明，证明该模型在一个包含5,000个样本和54个属性的数据集上实现了高准确度，并且证明的大小约为287千字节。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417278](https://doi.org/10.1145/3372297.3417278)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417278](https://dl.acm.org/doi/pdf/10.1145/3372297.3417278)
## A 2.1 KHz Zero-Knowledge Processor with BubbleRAM.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#a-2-1-khz-zero-knowledge-processor-with-bubbleram) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#a-2-1-khz-zero-knowledge-processor-with-bubbleram)**
### 作者
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 零知识证明（ZKP）是密码学中的基础。最近的ZK研究重点放在非交互证明（NIZK）上，用于区块链场景中的小命题。另一条线路，也是我们的重点，是针对大命题的证明，例如在ZK中证明程序的属性。我们规定了一个零知识处理器，可以执行用简单指令集编写的任意程序，并在ZK中证明其正确性。这种方法非常适合构建大命题的ZK证明，因为它高效地支持复杂的编程结构，比如循环和RAM访问。关键是，我们提出了几个新颖的ZK改进，使我们的方法在实际中非常高效：（1）具有从布尔值转换的高效算术表示，（2）使用每次访问2łog n个OT的高效只读存储器，（3）使用每次访问$\frac1 2 łog^2 n$ OT的高效读写存储器，即我们的RAM。我们的RAM在大小超过3个元素的情况下胜过了线性扫描！以前的ZK系统使用通常需要更多数量级的ORAM。我们将我们的系统构建为一个可以插入到[Zawurek等人，CCS'13]的ZK协议中的散码方案。综合起来，我们的系统在实际中非常高效：对于实例化为512KB主内存的处理器，每个处理器周期的通信成本为24KB。我们用C++实现了我们的方法。在1Gbps局域网上，我们的实现实现了一个2.1KHz的处理器。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417283](https://doi.org/10.1145/3372297.3417283)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417283](https://dl.acm.org/doi/pdf/10.1145/3372297.3417283)
## Benchmarking Label Dynamics of VirusTotal Engines.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#benchmarking-label-dynamics-of-virustotal-engines) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#benchmarking-label-dynamics-of-virustotal-engines)**
### 作者
* Shuofei Zhu, Pennsylvania State University, University Park, PA, USA
* Ziyi Zhang, University of Science and Technology of China, Hefei, Anhui, China
* Limin Yang, University of Illinois at Urbana-Champaign, Champaign, Urbana, IL, USA
* Linhai Song, Pennsylvania State University, University Park, PA, USA
* Gang Wang, University of Illinois at Urbana-Champaign, Champaign, Urbana, IL, USA
### 摘要
> VirusTotal是最大的在线反恶意软件扫描服务。安全研究人员广泛使用它来标记恶意软件数据或作为比较基准。然而，使用VirusTotal存在着一些重要挑战未得到解决（例如，VirusTotal的标签是否已经稳定，何时可以信任VirusTotal的标签），这严重影响了依赖VirusTotal的研究项目的正确性。本文介绍了VTSet，其中包含了一年内超过14,000个文件的每日VirusTotal标签。VTSet可以用于构建和评估各种工具来解决现有的挑战，并促进VirusTotal的使用。除了数据，VTSet还提供了一个演示工具，用于展示许多测量结果，以及一个查询工具，以便轻松访问其数据。VTSet的视频演示可在以下链接中找到：https://youtu.be/aSVaUGHxFi4。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3420013](https://doi.org/10.1145/3372297.3420013)
## VRLifeTime - An IDE Tool to Avoid Concurrency and Memory Bugs in Rust.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#vrlifetime-an-ide-tool-to-avoid-concurrency-and-memory-bugs-in-rust) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#vrlifetime-an-ide-tool-to-avoid-concurrency-and-memory-bugs-in-rust)**
### 作者
* Ziyi Zhang, University of Science and Technology of China & Pennsylvania State University, Hefei, China
* Boqin Qin, Beijing University of Posts and Telecommunications & Pennsylvania State University, Beijing, China
* Yilun Chen, HoneycombData Inc., Santa Clara, CA, USA
* Linhai Song, Pennsylvania State University, University Park, PA, USA
* Yiying Zhang, University of California, San Diego, San Diego, CA, USA
### 摘要
> 作为一种面向系统软件开发的年轻编程语言，Rust旨在提供像高级语言一样的安全保证，以及像低级语言一样的性能效率。Lifetime（生命周期）是Rust中的一个核心概念，它对于Rust编译器进行的安全检查和自动资源管理至关重要。然而，Rust的生命周期规则非常复杂。事实上，Rust程序员往往难以推断出正确的生命周期，从而导致严重的并发和内存错误。在本文中，我们介绍了VRLifeTime，一种可以为Rust程序可视化生命周期的IDE工具，帮助程序员避免与生命周期相关的错误。此外，VRLifeTime还可以帮助检测一些与生命周期相关的错误（例如双重锁定），并提供详细的调试信息。演示视频可在https://youtu.be/L5F_XCOrJTQ上观看。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3420024](https://doi.org/10.1145/3372297.3420024)
## Towards Using Source Code Repositories to Identify Software Supply Chain Attacks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#towards-using-source-code-repositories-to-identify-software-supply-chain-attacks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#towards-using-source-code-repositories-to-identify-software-supply-chain-attacks)**
### 作者
* Duc Ly Vu, University of Trento, Trento, Italy
* Ivan Pashchenko, University of Trento, Trento, Italy
* Fabio Massacci, University of Trento & Vrije Universiteit Amsterdam, Trento, Italy
* Henrik Plate, SAP Security Research, Sophia-Antipolis, France
* Antonino Sabetta, SAP Security Research, Sophia-Antipolis, France
### 摘要
> 第三方软件包仓库（例如NPM、PyPI或RubyGems）日益受到欢迎，因此成为软件供应链攻击的有吸引力的目标。攻击者通过将恶意代码注入合法软件包中，已知能够获得超过10万次下载的被篡改软件包。目前识别恶意载荷的方法对资源的需求很高，因此可能无法适用于即时检测被上传到软件包仓库的可疑构件。在这方面，我们提出使用源代码仓库（例如Github中的仓库）来检测软件包的分发构件是否被注入。我们的初步评估表明，所提出的方法能够捕捉到当恶意代码被注入到PyPI软件包时已知的攻击。对于分析PyPI中下载量前十名Python软件包的所有版本的2666个软件构件的分析表明，该技术适用于对实际软件包的轻量级分析。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3420015](https://doi.org/10.1145/3372297.3420015)
## Cybersecurity Research and Training for Power Distribution Grids - A Blueprint.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#cybersecurity-research-and-training-for-power-distribution-grids-a-blueprint) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#cybersecurity-research-and-training-for-power-distribution-grids-a-blueprint)**
### 作者
* Martin Henze, Fraunhofer FKIE, Wachtberg, Germany
* Lennart Bader, Fraunhofer FKIE, Wachtberg, Germany
* Julian Filter, RWTH Aachen University, Aachen, Germany
* Olav Lamberts, Fraunhofer FKIE & RWTH Aachen University, Wachtberg, Germany
* Simon Ofner, Fraunhofer FKIE, Wachtberg, Germany
* Dennis van der Velde, Fraunhofer FIT, Aachen, Germany
### 摘要
> 在电力分配网络中，减轻网络安全威胁需要一个网络安全测试平台，用于评估网络攻击的（物理）影响，生成数据集，测试和验证安全方法，并培训技术人员。在本文中，我们提出了一个这样的测试平台的蓝图，该蓝图依赖于网络仿真和电力流计算，将真实网络应用与模拟的电力网络相结合。我们讨论了我们的方法的优点以及初步结果和电力分配网络的网络安全研究和培训的各种用例。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3420016](https://doi.org/10.1145/3372297.3420016)
## A Multi-phased Multi-faceted IoT Honeypot Ecosystem.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#a-multi-phased-multi-faceted-iot-honeypot-ecosystem) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#a-multi-phased-multi-faceted-iot-honeypot-ecosystem)**
### 作者
* Armin Ziaie Tabari, University of South Florida, Tampa, FL, USA
* Xinming Ou, University of South Florida, Tampa, FL, USA
### 摘要
> 物联网设备的快速增长使理解现实世界对它们的网络安全威胁变得至关重要。传统上，蜜罐被用作伪装真实设备的诱饵，帮助研究人员/组织了解威胁的动态。蜜罐要产生有用的见解，一个至关重要的条件是让攻击者相信它们是人类和组织使用的真实系统。然而，由于物联网设备的种类繁多和物理连接的本质，这给蜜罐带来了独特的挑战。在这项工作中，我们（1）提出了一个多阶段多方面的蜜罐生态系统创建方法，研究人员通过观察现实世界的攻击者行为逐渐增加低交互式物联网蜜罐的复杂性，（2）构建了一个针对物联网摄像机的低交互式蜜罐，让研究人员对攻击者在物联网摄像机设备上寻找的内容有明确的理解，以及（3）设计了一个名为ProxyPot的代理实例，它位于物联网设备和外部网络之间，帮助研究人员研究物联网设备的入站/出站通信。我们使用ProxyPot来理解针对物联网摄像机的攻击并增加蜜罐的复杂性。我们部署了超过两年的蜜罐。我们的初步结果显示，我们能够在每个新阶段吸引到越来越复杂的攻击数据。此外，我们捕获到的活动似乎涉及直接人类互动而不仅仅是自动化脚本。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3420023](https://doi.org/10.1145/3372297.3420023)
## Voice-Indistinguishability - Protecting Voiceprint with Differential Privacy under an Untrusted Server.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#voice-indistinguishability-protecting-voiceprint-with-differential-privacy-under-an-untrusted-server) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#voice-indistinguishability-protecting-voiceprint-with-differential-privacy-under-an-untrusted-server)**
### 作者
* Yaowei Han, Kyoto University, Kyoto, Japan
* Yang Cao, Kyoto University, Kyoto, Japan
* Sheng Li, National Institute of Information and Communications Technology, Kyoto, Japan
* Qiang Ma, Kyoto University, Kyoto, Japan
* Masatoshi Yoshikawa, Kyoto University, Kyoto, Japan
### 摘要
> 随着先进语音技术的普及以及消费者对智能设备的需求上升，像苹果的Siri和谷歌助手这样的语音控制“虚拟助手”已融入人们的日常生活。然而，隐私和安全问题可能会阻碍这类基于语音的应用的发展，因为语音数据包含说话者的生物特征识别符，即声纹（类似于指纹）。为了解决语音数据收集中的隐私问题，我们提出了一种快速语音数据去识别系统，使用户能够在不可信任的服务器上以正式隐私保证的方式分享她的语音数据。我们的开源系统可以轻松集成到其他语音处理系统中，以实现以保护隐私的方式收集用户的语音数据。在公开数据集上进行的实验证实了所提出系统的有效性和效率。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3420025](https://doi.org/10.1145/3372297.3420025)
## rProfiler - Assessing Insider Influence on Enterprise Assets.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#rprofiler-assessing-insider-influence-on-enterprise-assets) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#rprofiler-assessing-insider-influence-on-enterprise-assets)**
### 作者
* Manish Shukla, TCS Research Lab, Pune, India
* Sachin Lodha, TCS Research Lab, Pune, India
### 摘要
> 内部威胁是网络安全领域中一个被广泛认可的问题。关于检测和预测内部攻击的研究已经有了相当多的成果。然而，这些研究都没有考虑到内部人员对其他个体的影响以及由于直接和间接访问企业资源所导致的影响扩散。在本研究中，我们提出了一种基于图形的影响分析解决方案，称为rProfiler，它通过分析来自多个来源的数据来确定影响扩散，并利用相关的图形特征计算受影响设备数据丢失的概率。我们还强调了可能受益于这项工作的多个企业场景。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3420026](https://doi.org/10.1145/3372297.3420026)
## CCSW'20: 2020 Cloud Computing Security Workshop.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ccsw20-2020-cloud-computing-security-workshop) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ccsw20-2020-cloud-computing-security-workshop)**
### 作者
* Radu Sion, Stony Brook University, Stony Brook, NY, USA
* Yinqian Zhang, The Ohio State University, Columbus, OH, USA
### 摘要
> 云计算和大规模计算基础设施开始占据主导地位，并有可能在可预见的未来继续如此。主要的云服务运营商现在拥有数百万个核心，托管着公司和政府的大部分IT基础设施。CCSW是全球领先的论坛，汇集了云中心和外包计算方面的研究人员和从业人员，包括：侧信道攻击；用于云安全的实用密码协议；安全的云资源虚拟化机制；安全的数据管理外包（如数据库即服务）；外包的实用隐私和完整性机制；云中心威胁模型的基础；安全计算外包；云中心的远程鉴别机制；沙箱和基于虚拟机的执行；云中心的信任和策略管理；安全身份管理机制；新的面向云的Web服务安全范式和机制；面向云的监管合规问题和机制；云业务和安全风险模型；安全和可用性模型及其与云安全的交互；全球规模云中安全可扩展性；可信计算技术和云；软件远程鉴别和云保护的二进制分析；云上下文中的网络安全（DOS、IDS等）机制；新兴云编程模型的安全性；云中安全的能源/成本/效率；云保护的机器学习。CCSW尤其鼓励未出现在上述列表中的新范 Paradigm 和有争议的想法。这个研讨会历来是一个创造性辩论和云计算所影响的计算安全领域互动的肥沃土壤。今年是CCSW的第11个周年。在过去的十年里，CCSW对我们的研究社区产生了重大影响。截至2019年8月，在谷歌学术指标中，ACM CCS（包括CCSW）的前20篇被引用最多的论文中，有20%来自CCSW。我们可以这样看待，与CCS相比，作者在CCSW发表一篇前20篇论文的可能性是一样大甚至更大！今年，CCSW收到了40篇投稿，其中12篇全文论文（30%）和5篇快速摘要被接受。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3416242](https://doi.org/10.1145/3372297.3416242)
## CPSIOTSEC'20: 2020 Joint Workshop on CPS&IoT Security and Privacy.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#cpsiotsec20-2020-joint-workshop-on-cps-iot-security-and-privacy) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#cpsiotsec20-2020-joint-workshop-on-cps-iot-security-and-privacy)**
### 作者
* Michail Maniatakos, New York University Abu Dhabi, Abu Dhabi, UAE
* Yuqing Zhang, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 在工业、政府和学术界中，对于SAE（网络物理系统）和物联网（IoT）的安全性越来越引起人们的关注。NIST最近成立了一个网络物理系统小组，并领导一项公私合作的倡议，旨在确定一个通用架构、设计原则、解决方案和未来的挑战。在欧洲，Horizon 2020研究计划已经将注意力集中在与网络物理基础设施和物联网相关的安全问题上，而基础科学计划CHIST-ERA在2015年发布了关于具有韧性和可信性的网络物理系统的研究项目的呼叫，2016年发布了关于物联网中以用户为中心的安全性和隐私性的研究项目的呼叫。在美国，NSF（国家科学基金会）发布了2019年SAE（网络物理系统）拨款呼叫，总额为5000万美元，显示出SAE&IoT及其安全性的重要性。2019年，CCS（计算机与通讯安全）接受了两个研讨会：一个是关于SAE安全和隐私的（过去已经举办了5次），一个是关于IoT安全和隐私的（过去已经举办了2次）。由于这两个主题之间有一些显著的重叠，两个研讨会的主席委员会决定合并，以便举办一场世界级的SAE&IoT安全和隐私活动。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3416243](https://doi.org/10.1145/3372297.3416243)
## MTD'20: 7th ACM Workshop on Moving Target Defense.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#mtd20-7th-acm-workshop-on-moving-target-defense) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#mtd20-7th-acm-workshop-on-moving-target-defense)**
### 作者
* Hamed Okhravi, MIT Lincoln Laboratory, Lexington, MA, USA
* Cliff Wang, Army Research Office, Durham, NC, USA
### 摘要
> 第七届ACM移动目标防御（MTD）研讨会将于2020年11月9日在虚拟环境中举行，与ACM计算机和通信安全会议（CCS）一同举办。研讨会的主要目标是讨论计算机系统和网络的新颖随机化、多样化和动态技术，评估和量化MTD的有效性的新度量和分析框架，并讨论这些防御措施所提供的挑战和机遇。今年新增了一些应邀论文，以从该领域的专家中系统化研究过去十年的MTD并探讨未来发展方向。我们精心策划了一个内容丰富多样的节目，包括三篇经过评审的论文、五篇邀请论文和两场特邀主题演讲，为参与者提供了丰富而发人深省的思想和见解。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3416244](https://doi.org/10.1145/3372297.3416244)
## PPMLP 2020: Workshop on Privacy-Preserving Machine Learning In Practice.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ppmlp-2020-workshop-on-privacy-preserving-machine-learning-in-practice) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ppmlp-2020-workshop-on-privacy-preserving-machine-learning-in-practice)**
### 作者
* Benyu Zhang, Ant Group, Sunnyvale, CA, USA
* Matei Zaharia, Stanford University, Stanford, CA, USA
* Shouling Ji, Zhejiang University, Hangzhou, China
* Raluca Ada Popa, University of California, Berkeley, Berkeley, CA, USA
* Guofei Gu, Texas A&M University, College Station, TX, USA
### 摘要
> 随着科技的快速发展，数据已经无处不在。用户隐私和数据安全近年来备受关注，特别是随着欧盟的《通用数据保护条例》（GDPR）和其他法律的实施。一方面，从客户角度来看，如何在利用客户数据的同时保护用户隐私是一项具有挑战性的任务。另一方面，数据孤岛成为社会面临的一个突出问题之一。从企业角度来看，如何连接这些孤立的数据岛以构建更好的人工智能系统，同时满足数据隐私和法规合规要求，对传统的机器学习范式提出了巨大的挑战。PPMLP将为CCS社区和机器学习社区的研究人员提供一个机会，共同应对这些挑战。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3416245](https://doi.org/10.1145/3372297.3416245)
## 19th Workshop on Privacy in the Electronic Society (WPES 2020).
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#19th-workshop-on-privacy-in-the-electronic-society-wpes-2020) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#19th-workshop-on-privacy-in-the-electronic-society-wpes-2020)**
### 作者
* Wouter Lueks, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
* Paul Syverson, U.S. Naval Research Laboratory, Washington, D.C., DC, USA
### 摘要
> 第19届电子社会隐私研讨会（WPES 2020）于2020年11月9日与第27届ACM计算机与通信安全会议（CCS 2020）同时举办，以虚拟会议形式进行。WPES的目标是将隐私研究人员和实践者聚集在一起，讨论互联社会中出现的隐私问题及解决方案。研讨会的议程包括12篇完整论文和3篇简短论文，共有34个提交作品中挑选出来。研讨会涵盖的具体主题包括但不限于：通信隐私、数据匿名化、差分隐私、医疗隐私、移动隐私、隐私工程、隐私政策、用户对隐私的感知以及网络隐私。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3416246](https://doi.org/10.1145/3372297.3416246)
## AISec'20: 13th Workshop on Artificial Intelligence and Security.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#aisec20-13th-workshop-on-artificial-intelligence-and-security) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#aisec20-13th-workshop-on-artificial-intelligence-and-security)**
### 作者
* Sadia Afroz, University of California, Berkeley & Avast, Berkeley, CA, USA
* Nicholas Carlini, Google Brain, Mountain View, CA, USA
* Ambra Demontis, University of Cagliari, Cagliari, Italy
### 摘要
> 最近几年，人工智能（AI）、机器学习（ML）和数据挖掘在安全和隐私问题上的应用有了显著增长。这些技术提供的分析工具和智能行为使得在具有大量数据或需要对不断变化的情况做出快速反应的领域中，AI和ML在自主实时分析和决策方面的重要性不断提高。在安全敏感的领域中使用学习方法，对手可能试图误导或逃避智能机器，这为安全研究开辟了新的前沿。近年来广泛采用“深度学习”技术，其安全属性很难直接进行推理，这进一步增加了这项研究的重要性。此外，数据挖掘和机器学习技术创建了丰富的隐私问题，这是由于数据的丰富和可访问性引起的。AISec研讨会提供了一个交流和讨论安全和隐私与AI和机器学习交叉领域新进展的场所。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3416247](https://doi.org/10.1145/3372297.3416247)
## ASHES 2020: 4th Workshop on Attacks and Solutions in Hardware Security.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ashes-2020-4th-workshop-on-attacks-and-solutions-in-hardware-security) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ashes-2020-4th-workshop-on-attacks-and-solutions-in-hardware-security)**
### 作者
* Chip Hong Chang, NTU Singapore, Singapore, Singapore
* Stefan Katzenbeisser, University of Passau, Passau, Germany
* Ulrich Rührmair, LMU Munich and University of Connecticut, Munich, Germany
* Patrick Schaumont, Worcester Polytechnic Institute, Worcester, MA, USA
### 摘要
> “硬件安全攻击与解决方案研讨会”(ASHES)欢迎任何关于硬件安全的理论和实践工作，包括攻击、解决方案、对策、证明、分类、形式化和实现。除了主流研究之外，ASHES还着重关注新兴场景，包括物联网(IoT)、核武器检查、军备控制、消费者和基础设施安全，以及供应链安全等。ASHES还欢迎针对专用硬件的专题研究，如轻型、低成本、高能效设备，或非电子安全系统。研讨会包含四个不同类别的论文：除了常规和简短论文外，还包括对某个（子）领域进行体系化和结构化的工作（所谓的“知识体系化”(SoK)论文），以及所谓的“疯狂创意”(WaC)论文，即在概念初期传播开创性思想的论文。本摘要简要介绍了第四届研讨会的情况，该研讨会将于2020年11月13日以后续会议的一个卫星研讨会的形式进行线上举办。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3416249](https://doi.org/10.1145/3372297.3416249)
## 2nd Workshop on Cyber-Security Arms Race (CYSARM 2020).
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#2nd-workshop-on-cyber-security-arms-race-cysarm-2020) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#2nd-workshop-on-cyber-security-arms-race-cysarm-2020)**
### 作者
* Thanassis Giannetsos, Technical University of Denmark, Copenhagen, Denmark
* Daniele Sgandurra, Royal Holloway, University of London, London, United Kingdom
### 摘要
> CYSARM研讨会的目标是促进研究人员和实践者之间的合作，讨论网络安全的各个方面和权衡。特别是新技术和算法如何影响现有或未来模型和系统的网络安全性。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3416250](https://doi.org/10.1145/3372297.3416250)
## FEAST'20: Fifth Workshop on Forming an Ecosystem Around Software Transformation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#feast20-fifth-workshop-on-forming-an-ecosystem-around-software-transformation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#feast20-fifth-workshop-on-forming-an-ecosystem-around-software-transformation)**
### 作者
* Kevin W. Hamlen, The University of Texas at Dallas, Richardson, TX, USA
* Long Lu, Northeastern University, Boston, MA, USA
### 摘要
> 第五届围绕软件转型构建生态系统的研讨会（FEAST）提供了一个论坛，讨论和展示新的工具、方法论和技术，以促进软件可执行文件的自动化或半自动化转换和分析，以提高其安全性和效率，而不依赖其开发时的任何原始源代码。这种形式的后期软件定制对于在关键任务环境中必须使用闭源或缺少源代码的二进制软件组件的安全意识软件消费者尤为有益，或者必须使软件对未预料到的新攻击进行加固，这些攻击在软件的原始设计和开发过程中并未考虑到。然而，缺乏源代码级信息来提供预期操作的上下文，代码分析和转换变得更加困难。这个难题促使了FEAST研讨会的目标，即形成一个可靠、按需的无源代码二进制代码转换的强大策略和工具的生态系统。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3416251](https://doi.org/10.1145/3372297.3416251)
## PLAS'20: 15th Workshop on Programming Languages and Analysis for Security.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#plas20-15th-workshop-on-programming-languages-and-analysis-for-security) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#plas20-15th-workshop-on-programming-languages-and-analysis-for-security)**
### 作者
* Alley Stoughton, Boston University, Boston, MA, USA
* Marco Vassena, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 第15届ACM SIGSAC计算机与通信安全研讨会（PLAS 2020）与第27届ACM计算机和通信安全会议（ACM CCS 2020）同期举办。在超过十年的历史中，PLAS为研究人员和实践者提供了一个独特的论坛，交流关于编程语言和程序分析技术的想法，目标是提高软件系统的安全性。强烈鼓励提交关于新的、推测性的想法、在实践环境中对新的或已知的技术进行评估、以及讨论新兴威胁和重要问题的提案。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3416252](https://doi.org/10.1145/3372297.3416252)
## TPDP'20: 6th Workshop on Theory and Practice of Differential Privacy.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#tpdp20-6th-workshop-on-theory-and-practice-of-differential-privacy) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#tpdp20-6th-workshop-on-theory-and-practice-of-differential-privacy)**
### 作者
* Rachel Cummings, Georgia Institute of Technology, Atlanta, GA, USA
* Michael Hay, Colgate University, Hamilton, NY, USA
### 摘要
> 差分隐私是一种严格的隐私保护数学模型，已经成为深入理论研究和实际系统应用的研究课题。本研讨会旨在汇集各类研究人员和从业者，引发关于差分隐私在理论和实践中当前状况的激动人心的讨论。TPDP致力于成为一个包容性的论坛，旨在促进差分隐私社区的增长和多样化。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3416253](https://doi.org/10.1145/3372297.3416253)
## Bypassing Tor Exit Blocking with Exit Bridge Onion Services.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#bypassing-tor-exit-blocking-with-exit-bridge-onion-services) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#bypassing-tor-exit-blocking-with-exit-bridge-onion-services)**
### 作者
* Zhao Zhang, Georgetown University, Georgetown, DC, USA
* Wenchao Zhou, Georgetown University, Georgetown, DC, USA
* Micah Sherr, Georgetown University, Georgetown, DC, USA
### 摘要
> Tor出口阻断，即网站不允许从Tor进入的客户端，是对匿名网络日益增长和可能存在的威胁。本文介绍了HebTor，一种新的、强大的出口桥接架构，用作Tor的替代出口点的短命代理。HebTor的一个关键洞察是，出口桥可以作为Tor洋葱服务运行，允许任何能够创建出站TCP连接的设备作为出口桥，而不论是否存在NAT和/或防火墙。HebTor采用了一种微支付系统，以补偿出口桥运营商的服务，还采用了隐私保护的声誉机制，以防止免费乘车行为。我们展示了HebTor有效地阻挡了Tor的服务器端阻断，并描述了我们设计的安全、隐私和法律影响。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417245](https://doi.org/10.1145/3372297.3417245)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417245](https://dl.acm.org/doi/pdf/10.1145/3372297.3417245)
## CLAPS: Client-Location-Aware Path Selection in Tor.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#claps-client-location-aware-path-selection-in-tor) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#claps-client-location-aware-path-selection-in-tor)**
### 作者
* Florentin Rochet, UCLouvain, Louvain-la-Neuve, Belgium
* Ryan Wails, U.S. Naval Research Laboratory, Washington, DC, USA
* Aaron Johnson, U.S. Naval Research Laboratory, Washington, DC, USA
* Prateek Mittal, Princeton University, Princeton, NJ, USA
* Olivier Pereira, UCLouvain, Louvain-la-Neuve, Belgium
### 摘要
> 许多研究已经调查了通过让Tor客户端选择路径来改善Tor的安全性和性能，其中路径选择取决于客户端的位置。然而，这种方法已经被证明会导致严重的去匿名化攻击。此外，我们展示了在某些情况下，这种方法会导致显著的性能下降。例如，我们证明了在不充足的守护节点带宽条件下使用最近提出的Counter-RAPTOR系统可以将中位下载时间增加28.7％。我们提出了CLAPS系统来执行具有客户端位置感知的路径选择，它解决了现有设计的已知安全性和性能问题。我们通过实验比较了CLAPS与Counter-RAPTOR和DeNASA的安全性和性能。CLAPS对于关于客户端位置泄露的信息设置了严格的界限，而其他系统只需几个连接就完全暴露了这些信息。它还保证了对手在策略中继放置方面可以获取的优势的限制，我们证明这对其他系统来说是超乎想象的。最后，由于将路径选择形式化为优化问题的强大性，CLAPS接近甚至超过了应用的原始算法的目标，并解决了它们已知的缺陷。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417279](https://doi.org/10.1145/3372297.3417279)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417279](https://dl.acm.org/doi/pdf/10.1145/3372297.3417279)
## Gotta Catch'Em All: Using Honeypots to Catch Adversarial Attacks on Neural Networks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#gotta-catchem-all-using-honeypots-to-catch-adversarial-attacks-on-neural-networks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#gotta-catchem-all-using-honeypots-to-catch-adversarial-attacks-on-neural-networks)**
### 作者
* Shawn Shan, University of Chicago, Chicago, IL, USA
* Emily Wenger, University of Chicago, Chicago, IL, USA
* Bolun Wang, University of Chicago, Chicago, IL, USA
* Bo Li, UIUC, Champaign, IL, USA
* Haitao Zheng, University of Chicago, Chicago, IL, USA
* Ben Y. Zhao, University of Chicago, Chicago, IL, USA
### 摘要
> 深度神经网络（DNN）被认为容易受到对抗攻击的影响。许多研究努力修补训练模型的弱点，或者让计算利用这些弱点产生对抗性示例变得困难或昂贵。在我们的工作中，我们探索了一种新的“诱饵”方法来保护DNN模型。我们有意地在分类流形中注入陷阱，即诱惑攻击者寻找对抗性示例的弱点。攻击者的优化算法会被吸引到陷阱，使它们在特征空间中产生与陷阱相似的攻击。然后，我们的防御通过比较输入的神经元激活特征与陷阱的特征来识别攻击。在本文中，我们介绍了陷阱，并描述了一种实现了陷阱保护的防御方法。首先，我们从分析上证明了陷阱会影响对抗攻击的计算过程，使攻击输入的特征表示与陷阱非常相似。其次，我们通过实验证明，受到陷阱保护的模型可以高精度地检测到最先进的攻击（PGD, optimization-based CW, Elastic Net, BPDA）生成的对抗性示例，对正常分类几乎没有影响。这些结果适用于各种分类领域，包括图像识别、人脸识别和交通标志识别。我们还展示了陷阱对自适应攻击（对策）的稳健性方面的显著结果。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417231](https://doi.org/10.1145/3372297.3417231)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417231](https://dl.acm.org/doi/pdf/10.1145/3372297.3417231)
## Devil is Virtual: Reversing Virtual Inheritance in C++ Binaries.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#devil-is-virtual-reversing-virtual-inheritance-in-c-binaries) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#devil-is-virtual-reversing-virtual-inheritance-in-c-binaries)**
### 作者
* Rukayat Ayomide Erinfolami, Binghamton University, Vestal, NY, USA
* Aravind Prakash, Binghamton University, Vestal, NY, USA
### 摘要
> 对于在C++中实现面向对象概念（如虚派发和动态类型转换）引发的复杂性，攻击者和防御方都十分关注。二进制级的防护依赖于对给定程序的类继承树进行完整和准确的恢复。虽然目前的解决方案专注于从二进制中恢复单一和多重继承，但对于虚继承却一无所知。二进制级防护中的常规智慧认为虚继承不常见，或者对单一和多重继承的支持可以隐式地支持虚继承。本文中，我们展示了这两种观点都是不正确的。具体来说：（1）我们提出了一种在C++二进制程序中检测虚继承的有效技术，并通过研究显示虚继承在实际世界的C++程序中（包括Mysql和Libstdc++）中存在数量非常可观（Linux 上超过10％，Windows 上达到12.5％）。（2）我们展示了不能处理虚继承会导致层次树中出现假阳性和假阴性。这些错误会在恢复的层次树用于执行CFI策略时引入攻击面，或者使需要进行程序理解（如反编译）的层次树变得难以理解。（3）我们提出了从COTS二进制恢复虚继承的解决方案。我们在虚继承树中恢复了最多95％和95.5％（GCC -O0），以及最少77.5％和73.8％（Clang -O2）的虚基类和中间基类。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417251](https://doi.org/10.1145/3372297.3417251)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417251](https://dl.acm.org/doi/pdf/10.1145/3372297.3417251)
## Privaros: A Framework for Privacy-Compliant Delivery Drones.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#privaros-a-framework-for-privacy-compliant-delivery-drones) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#privaros-a-framework-for-privacy-compliant-delivery-drones)**
### 作者
* Rakesh Rajan Beck, Indian Institute of Science, Bangalore, India
* Abhishek Vijeev, Indian Institute of Science, Bangalore, India
* Vinod Ganapathy, Indian Institute of Science, Bangalore, India
### 摘要
> 我们提出了Privaros，这是一个用于执行无人机隐私政策的框架。Privaros专为商业送货无人机设计，比如亚马逊Prime Air可能会使用的无人机。这些无人机会访问不同的托管空域，每个空域可能具有不同的隐私要求。Privaros使用强制访问控制来执行这些托管方对客户送货无人机的政策。Privaros专为ROS（一种广泛应用于许多无人机平台的中间件）定制。本文介绍了Privaros政策执行机制的设计和实现，描述了政策的规定方式，并展示了政策规定如何与印度的数字天空门户整合。我们的评估结果表明，运行Privaros的无人机可以强制执行托管方指定的各种隐私政策，并且其核心机制仅对通信延迟和功耗产生了轻微的增加。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417858](https://doi.org/10.1145/3372297.3417858)
## A Performant, Misuse-Resistant API for Primality Testing.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#a-performant-misuse-resistant-api-for-primality-testing) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#a-performant-misuse-resistant-api-for-primality-testing)**
### 作者
* Jake Massimo, Royal Holloway, University of London, London, United Kingdom
* Kenneth G. Paterson, ETH Zurich, Zurich, Switzerland
### 摘要
> 素性测试是一项基本的密码学任务。但是现今开发人员面临着复杂的素性测试API，以及未明确说明所执行测试的可靠性的文档。这导致API在实践中被错误地使用，可能造成灾难性后果。为了克服这一问题，我们提出了一种具有尽可能简单的API的素性测试：该测试接受一个待测试的数字，并返回一个布尔值，指示输入是合数还是可能是素数。对于所有输入，输出的正确性的概率保证至少为1 - 2-128。该测试具有高性能：对于随机、奇数、1024位的输入，它比OpenSSL中默认测试快17%。我们研究了我们的新测试对于随机素数生成成本的影响，这是素性测试的一个关键用例。OpenSSL开发人员已经完全采纳了我们的建议；我们的新API和素性测试计划在OpenSSL 3.0中发布。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417264](https://doi.org/10.1145/3372297.3417264)
## ProMACs: Progressive and Resynchronizing MACs for Continuous Efficient Authentication of Message Streams.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#promacs-progressive-and-resynchronizing-macs-for-continuous-efficient-authentication-of-message-streams) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#promacs-progressive-and-resynchronizing-macs-for-continuous-efficient-authentication-of-message-streams)**
### 作者
* Frederik Armknecht, University of Mannheim, Mannheim, Germany
* Paul Walther, TU Dresden, Dresden, Germany
* Gene Tsudik, University of California, Irvine, Irvine, CA, USA
* Martin Beck, TU Dresden, Dresden, Germany
* Thorsten Strufe, KIT and CeTI TU Dresden, Karlsruhe, Germany
### 摘要
> 高效完整性验证接收到的数据需要使用消息认证码（MAC）标签。然而，在许多情况下，安全性需要较长的标签，但这与其他要求相矛盾。例如，严格的延迟要求（例如，机器人或无人机控制）或资源稀缺环境（例如，具有有限电池容量的LoRaWAN网络）。之前的技术建议截断MAC标签，以线性性能增益换取指数级的安全性损失。为了在较短标签的情况下实现完整长度MAC的安全性，我们引入了渐进式MAC（ProMACs）-一种利用内部状态逐渐增加安全性的方案。我们提供了一个正式框架，并提出了一个可以证明安全的通用构建称为Whips。我们评估了ProMACs在几个现实场景中的适用性，并展示了ProMACs可以作为传统MAC的即插即用替代品的示例设置。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423349](https://doi.org/10.1145/3372297.3423349)
## T2Pair: Secure and Usable Pairing for Heterogeneous IoT Devices.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#t2pair-secure-and-usable-pairing-for-heterogeneous-iot-devices) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#t2pair-secure-and-usable-pairing-for-heterogeneous-iot-devices)**
### 作者
* Xiaopeng Li, University of South Carolina, Columbia, SC, USA
* Qiang Zeng, University of South Carolina, Columbia, SC, USA
* Lannan Luo, University of South Carolina, Columbia, SC, USA
* Tongbo Luo, JD.com, Mountain View, CA, USA
### 摘要
> 安全配对是可信任部署和应用物联网（IoT）设备的关键。然而，物联网设备缺乏传统的用户界面，如键盘和显示器，这使得许多传统的配对方法不适用。基于邻近的配对方法非常易于使用，但可以被附近的恶意设备利用。基于用户在物联网设备上的物理操作的方法更加安全，但通常需要惯性传感器，而许多设备无法满足此要求。到目前为止，还没有一种安全且可用的配对方法可应用于异构的物联网设备。我们开发了一种技术，称为通用操作感应（Universal Operation Sensing），它使得物联网设备可以感知用户对其进行的物理操作，而无需惯性传感器。使用这种技术，用户可以通过一些非常简单的操作，如按按钮或转动旋钮，在几秒钟内完成配对。此外，我们揭示了原始模糊承诺中的不准确性问题，并提出了忠实的模糊承诺来解决这个问题。我们设计了一个使用忠实模糊承诺的配对协议，并构建了一个名为Touch-to-Pair（简称T2Pair）的原型系统。全面的评估表明它是安全且可用的。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417286](https://doi.org/10.1145/3372297.3417286)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417286](https://dl.acm.org/doi/pdf/10.1145/3372297.3417286)
## CrypTFlow2: Practical 2-Party Secure Inference.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#cryptflow2-practical-2-party-secure-inference) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#cryptflow2-practical-2-party-secure-inference)**
### 作者
* Deevashwer Rathee, Microsoft Research, Bangalore, India
* Mayank Rathee, Microsoft Research, Bangalore, India
* Nishant Kumar, Microsoft Research, Bangalore, India
* Nishanth Chandran, Microsoft Research, Bangalore, India
* Divya Gupta, Microsoft Research, Bangalore, India
* Aseem Rastogi, Microsoft Research, Bangalore, India
* Rahul Sharma, Microsoft Research, Bangalore, India
### 摘要
> 我们介绍了CrypTFlow2，这是一个使用安全的两方计算技术对现实深度神经网络（DNN）进行安全推理的加密框架。CrypTFlow2协议在正确性和高效性方面均表现出色，即其输出与明文执行结果在位级上完全一致，并且在延迟和规模方面优于现有先进协议。在CrypTFlow2的核心部分，我们开发了全新的用于安全比较和除法的两方计算协议，经过精心设计以平衡迭代和通信复杂度，以适应安全推理任务。利用CrypTFlow2，我们首次实现了对ImageNet规模的DNN（例如ResNet50和DenseNet121）进行安全推理。这些DNN的规模至少比之前的两方DNN推理工作大一个数量级。即使在之前工作所考虑的基准测试中，CrypTFlow2所需的通信量也要少一个数量级，并且时间上比现有先进技术快20到30倍。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417274](https://doi.org/10.1145/3372297.3417274)
## GAN-Leaks: A Taxonomy of Membership Inference Attacks against Generative Models.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#gan-leaks-a-taxonomy-of-membership-inference-attacks-against-generative-models) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#gan-leaks-a-taxonomy-of-membership-inference-attacks-against-generative-models)**
### 作者
* Dingfan Chen, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Ning Yu, University of Maryland & Max Planck Institute for Informatics, College Park, Germany
* Yang Zhang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Mario Fritz, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 深度学习已经取得了巨大的成功，从区分模型到生成模型，无所不包。特别是，深度生成模型在从媒体操纵到生成经过处理的数据集方面已经实现了新的性能水平。尽管取得了巨大的成功，但是生成模型可能引发的隐私泄露潜在风险尚未得到系统分析。在本文中，我们关注对深度生成模型进行会员推理攻击，以揭示有关受害模型使用的训练数据的信息。具体而言，我们提出了第一个会员推理攻击分类法，不仅包括现有的攻击方法，还包括我们的新方法。此外，我们提出了第一个通用攻击模型，可以在各种设置中实例化，并适用于各种深度生成模型。此外，我们提供了一种理论基础的攻击校准技术，可以在各种情况下，跨不同攻击设置、数据类型和训练配置中，持续提高攻击性能。我们还通过全面的实验研究对攻击性能进行了系统分析，研究了不同的模型类型和训练配置对各种攻击的有效性，在三种不同的应用场景（即图像、医疗数据和位置数据）中进行了调查。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417238](https://doi.org/10.1145/3372297.3417238)
## Analyzing Information Leakage of Updates to Natural Language Models.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#analyzing-information-leakage-of-updates-to-natural-language-models) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#analyzing-information-leakage-of-updates-to-natural-language-models)**
### 作者
* Santiago Zanella-Béguelin, Microsoft, Cambridge, United Kingdom
* Lukas Wutschitz, Microsoft, Cambridge, United Kingdom
* Shruti Tople, Microsoft, Cambridge, United Kingdom
* Victor Rühle, Microsoft, Cambridge, United Kingdom
* Andrew Paverd, Microsoft, Cambridge, United Kingdom
* Olga Ohrimenko, University of Melbourne, Melbourne, VIC, Australia
* Boris Köpf, Microsoft, Cambridge, United Kingdom
* Marc Brockschmidt, Microsoft, Cambridge, United Kingdom
### 摘要
> 为了不断提高质量并反映数据的变化，机器学习应用需要定期重新训练和更新核心模型。我们发现，对自然语言模型更新前后的快照进行差分分析可以揭示关于训练数据变化的大量详细信息。我们提出了两个新的指标——差分得分和差分排名——用于分析自然语言模型更新导致的信息泄露。我们使用这些指标对在多个不同数据集上使用不同方法和配置训练的模型进行了信息泄露分析。我们讨论了我们发现的隐私影响，提出了缓解策略并评估其效果。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417880](https://doi.org/10.1145/3372297.3417880)
## Information Leakage in Embedding Models.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#information-leakage-in-embedding-models) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#information-leakage-in-embedding-models)**
### 作者
* Congzheng Song, Cornell University & Google Brain, New York, NY, USA
* Ananth Raghunathan, Facebook & Google Brain, Melon Park, CA, USA
### 摘要
> 嵌入是将原始输入数据映射到低维向量表示的函数，同时保留有关输入的重要语义信息。在许多领域中，预训练嵌入在大量无标签数据上进行微调以用于下游任务已经成为事实上的标准，以实现最先进的学习。我们展示了除了编码通用语义之外，嵌入还经常呈现出有关输入数据的泄漏敏感信息的向量。我们开发了三类攻击来系统研究嵌入可能泄漏的信息。首先，嵌入向量可以被反转以部分恢复输入数据。例如，我们展示了对流行的句子嵌入的攻击可以恢复50%至70%的输入单词（F1分数为0.5至0.7）。其次，嵌入可能透露与底层语义任务无关的输入固有的敏感属性。通过仅仅训练一小部分标记的嵌入向量来训练一个推理模型，可以轻松提取出文本的作者等属性。第三，嵌入模型对于罕见的训练数据输入泄漏中等数量的成员信息。我们在文本领域对各种最先进的嵌入模型进行了广泛评估。我们还提出并评估了能在一定程度上防止泄露的防御方法，尽管会稍微降低效用。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417270](https://doi.org/10.1145/3372297.3417270)
## Threshold Password-Hardened Encryption Services.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#threshold-password-hardened-encryption-services) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#threshold-password-hardened-encryption-services)**
### 作者
* Julian Brost, Friedrich-Alexander University Erlangen-Nuremberg, Nuremberg, Germany
* Christoph Egger, Friedrich-Alexander University Erlangen-Nuremberg, Nuremberg, Germany
* Russell W. F. Lai, Friedrich-Alexander University Erlangen-Nuremberg, Nuremberg, Germany
* Fritz Schmid, Friedrich-Alexander University Erlangen-Nuremberg, Nuremberg, Germany
* Dominique Schröder, Friedrich-Alexander University Erlangen-Nuremberg, Nuremberg, Germany
* Markus Zoppelt, Nuremberg Institute of Technology, Nuremberg, Germany
### 摘要
> 密码加固加密（PHE）由赖等人在USENIX 2018上提出，并由VirgilSecurity立即产品化。PHE是一种基于密码的密钥派生协议，涉及对秘钥派生的忽略外部加密服务。PHE的安全性能够抵御离线暴力破解攻击，即使攻击者拥有整个数据库。此外，加密服务既不会得知派生的密钥，也不会得知密码。PHE支持密钥轮换，这意味着服务器和加密服务可以在不涉及用户的情况下更新其密钥。虽然PHE显著增强了数据安全性，但却引入了单点故障，因为密钥派生总是需要访问加密服务。在本研究中，我们解决了这个问题，并通过引入阈值密码加固加密同时增强了安全性。我们对这个原语的形式化揭示了原始PHE定义的缺陷，我们也在本研究中解决了这些缺陷。遵循先前工作的精神，我们只使用轻量级工具提供了一个简单高效的构造方法。我们还实现了我们的构造并评估了其效率。我们的实验证实了我们方案的实际效率，并表明它比常见的内存加固函数（如scrypt）更高效。从实际角度来看，这意味着阈值PHE可以用作scrypt的替代方案，用于密码保护和密钥派生，从而在离线暴力破解攻击方面提供更好的安全性。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417266](https://doi.org/10.1145/3372297.3417266)
## Slimium: Debloating the Chromium Browser with Feature Subsetting.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#slimium-debloating-the-chromium-browser-with-feature-subsetting) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#slimium-debloating-the-chromium-browser-with-feature-subsetting)**
### 作者
* Chenxiong Qian, Georgia Institute of Technology, Atlanta, GA, USA
* Hyungjoon Koo, Georgia Institute of Technology, Atlanta, GA, USA
* ChangSeok Oh, Georgia Institute of Technology, Atlanta, GA, USA
* Taesoo Kim, Georgia Institute of Technology, Atlanta, GA, USA
* Wenke Lee, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 今天，网络浏览器在提供丰富的网络体验方面扮演着至关重要的角色。最受欢迎的浏览器Chromium已经成为一个非常复杂的应用程序，以满足不断增长的用户需求，由于其庞大的代码库，暴露出无法避免的大攻击面。代码精简作为一种减少潜在攻击面的手段，吸引了人们的关注。但是，要在不破坏必要功能的情况下进行复杂的代码剔除非常具有挑战性，因为Chromium操作的是大量紧密连接和复杂的组件，例如渲染器和JavaScript引擎。在本文中，我们介绍了一种针对浏览器（即Chromium）的代码精简框架Slimium，它利用了一种快速和可靠的二进制插装的混合方法。Slimium的主要思想是通过混合（即静态、动态、启发式）分析确定一组特性作为代码精简单元，并利用特性子集进行代码精简。它有助于：i）集中关注以安全为导向的特性；ii）简单地丢弃不需要的代码，而不带来复杂性；iii）合理地解决由代码复杂性引起的非确定性路径问题。为此，我们使用关系向量技术和提示的网页分析结果生成特性-代码映射。我们的实验结果证明了Slimium在40个流行网站上的实用性和可行性，平均而言，它从Chromium的定义特性（占整个特性的21.7%）中削减了23.85MB的代码（减少了53.1%），同时修复了94个CVE（61.4%）。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417866](https://doi.org/10.1145/3372297.3417866)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417866](https://dl.acm.org/doi/pdf/10.1145/3372297.3417866)
## You've Changed: Detecting Malicious Browser Extensions through their Update Deltas.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#youve-changed-detecting-malicious-browser-extensions-through-their-update-deltas) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#youve-changed-detecting-malicious-browser-extensions-through-their-update-deltas)**
### 作者
* Nikolaos Pantelaios, North Carolina State University, Raleigh, NC, USA
* Nick Nikiforakis, Stony Brook University, Stony Brook, NY, USA
* Alexandros Kapravelos, North Carolina State University, Raleigh, NC, USA
### 摘要
> 在本文中，我们进行了迄今为止规模最大的浏览器扩展分析，通过调查过去六年中收集的922,684个不同的扩展版本，并利用这些数据发现了恶意扩展的版本。我们提出了一个两阶段系统，首先根据异常扩展评级识别恶意扩展，然后定位向良性扩展添加的代码以使其变为恶意。我们根据这些代码增量对其进行编码，根据它们滥用的API搜索我们的历史数据集，寻找其他相似的尚未被用户或Chrome网络商店标记的扩展增量。我们成功发现了属于21个恶意集群的143个恶意扩展，这些扩展展示了一系列广泛的滥用行为，包括窃取历史记录和注入广告，劫持新标签页和搜索引擎。我们的结果表明，我们提出的技术以滥用无关的方式运作，并且能够识别那些逃避检测的恶意扩展。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3423343](https://doi.org/10.1145/3372297.3423343)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3423343](https://dl.acm.org/doi/pdf/10.1145/3372297.3423343)
## Demystifying Resource Management Risks in Emerging Mobile App-in-App Ecosystems.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#demystifying-resource-management-risks-in-emerging-mobile-app-in-app-ecosystems) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#demystifying-resource-management-risks-in-emerging-mobile-app-in-app-ecosystems)**
### 作者
* Haoran Lu, Indiana University Bloomington, Bloomington, IN, USA
* Luyi Xing, Indiana University Bloomington, Bloomington, IN, USA
* Yue Xiao, Indiana University Bloomington, Bloomington, IN, USA
* Yifan Zhang, Indiana University Bloomington, Bloomington, IN, USA
* Xiaojing Liao, Indiana University Bloomington, Bloomington, IN, USA
* XiaoFeng Wang, Indiana University Bloomington, Bloomington, IN, USA
* Xueqiang Wang, Indiana University Bloomington, Bloomington, IN, USA
### 摘要
> App-in-app是一种新兴的移动计算范式，其中称为子应用的本地应用软件模块通过流行的移动应用（如微信、百度、抖音和Chrome）托管，以丰富托管应用的功能，并形成一个“一体化应用”生态系统。子应用通过主机访问系统资源，其功能接近常规移动应用（拍照、录音、银行、购物等）。然而，目前还不清楚主机应用（通常为第三方应用）是否能够安全地管理子应用和其对系统资源的访问。在本文中，我们首次对App-in-app系统中的资源管理进行了系统研究。我们的研究揭示了高影响力的安全漏洞，允许对手秘密提升权限（如访问相机、照片库、麦克风等）或获取敏感数据（如位置、亚马逊、谷歌等的密码）。为了了解这些漏洞的影响，我们开发了一种分析工具，可以自动评估Android和iOS上的11个流行App-in-app平台。我们的结果揭示了安全漏洞的普遍存在。我们进一步讨论了所学到的经验教训，并提出了缓解策略。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417255](https://doi.org/10.1145/3372297.3417255)
## ACE: Asynchronous and Concurrent Execution of Complex Smart Contracts.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ace-asynchronous-and-concurrent-execution-of-complex-smart-contracts) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#ace-asynchronous-and-concurrent-execution-of-complex-smart-contracts)**
### 作者
* Karl Wüst, ETH Zurich, Zurich, Switzerland
* Sinisa Matetic, ETH Zurich, Zurich, Switzerland
* Silvan Egli, ETH Zurich, Zurich, Switzerland
* Kari Kostiainen, ETH Zurich, Zurich, Switzerland
* Srdjan Capkun, ETH Zurich, Zurich, Switzerland
### 摘要
> 智能合约是可编程的、分散化的和透明的金融应用程序。由于智能合约平台通常支持图灵完备的编程语言，这些系统通常被认为能够支持任意应用。然而，当前的无许可智能合约系统对可以实现的计算类型施加了严格限制。例如，以太坊的全球复制和顺序执行模型需要低气体极限，导致许多计算变得不可行。在本文中，我们提出了一种新颖的系统称为ACE，其主要目标是在无许可区块链上实现更复杂的智能合约。ACE基于一种离链执行模型，合约发行者任命一组服务提供者来独立于共识层执行合约代码。ACE相对于以前的解决方案的主要优势在于，它允许一个合约安全地调用由不同一组服务提供者执行的另一个合约。因此，ACE是第一个能够在离链执行交互式智能合约的解决方案，具有灵活的信任假设。我们的评估表明，ACE能够支持比标准以太坊复杂度高几个数量级的智能合约。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417243](https://doi.org/10.1145/3372297.3417243)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417243](https://dl.acm.org/doi/pdf/10.1145/3372297.3417243)
## WI is Almost Enough: Contingent Payment All Over Again.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#wi-is-almost-enough-contingent-payment-all-over-again) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#wi-is-almost-enough-contingent-payment-all-over-again)**
### 作者
* Ky Nguyen, École Normale Superieure, CNRS & PSL University, Paris, France
* Miguel Ambrona, NTT Secure Platform Laboratories, Tokyo, Japan
* Masayuki Abe, NTT Secure Platform Laboratories, Tokyo, Japan
### 摘要
> 公平交换问题涉及在两个不信任对方的方之间交换商品。尽管已知不可能的结果，最近的研究利用区块链和零知识证明，实现了零知识条件付款（zkCP）系统，使数字商品的公平交换成为可能。以安全高效的方式实现这些系统是一个巨大的挑战，正如文献中的几次不成功尝试所证明的。Campanelli等人（ACM CCS 2017）在基于SNARKs（简明非交互式知识证明）的现有zkCP方案中发现了一个漏洞，并提出了几个修复方案。Fuchsbauer（ACM CCS 2019）在所提到的对策中发现了一个缺陷。特别是，他证明了Campanelli等人所提出的zkCP方案的安全性不能仅仅依赖于见证不可区分性（WI）。在这项工作中，我们观察到稍微更强的WI概念，我们称之为陷阱颠覆WI（tS-WI），排除了Fuchsbauer的攻击。我们形式化地定义了CP系统的安全性质，并证明了在tS-WI的条件下，Campanelli等人的方案确实满足这些性质。此外，我们探索了实现ZK的替代方法（而非SNARKs），并开发了一种原型来展示它们的潜力。我们的新想法导致了一种协议，用于以附带付款的方式出售ECDSA签名，可以在局域网上以不到150毫秒的时间执行。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417888](https://doi.org/10.1145/3372297.3417888)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417888](https://dl.acm.org/doi/pdf/10.1145/3372297.3417888)
## Private Summation in the Multi-Message Shuffle Model.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#private-summation-in-the-multi-message-shuffle-model) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2020].md#private-summation-in-the-multi-message-shuffle-model)**
### 作者
* Borja Balle, Unaffiliated, , United Kingdom
* James Bell, The Alan Turing Institute, London, United Kingdom
* Adrià Gascón, Google, London, United Kingdom
* Kobbi Nissim, Georgetown University, Washington, DC, USA
### 摘要
> 差分隐私的洗牌模型（Erlingsson等人 SODA 2019; Cheu等人 EUROCRYPT 2019）及其紧密相关的编码-洗牌-分析模型（Bittau等人 SOSP 2017）提供了众所周知的本地模型和中心模型之间一个富有成果的中间地带。和本地模型类似，洗牌模型假设存在一个不能信任的数据收集器，接收用户的私密信息，但在这种情况下，一个安全的洗牌器被使用来隐藏哪些信息来自哪个用户，并将信息从用户传输到收集器。洗牌模型有一个有趣的特点，即增加每个用户发送的信息数量可以导致协议的准确性与中心模型中可实现的准确性相当。特别是，对于私密计算n个不同用户持有的n个有界实值之和的问题，Cheu等人表明每个用户发送O(√n)个信息足以实现O(1)的误差（在中心模型中的最佳速率），而Balle等人（CRYPTO 2019）最近表明每个用户发送一个信息会导致Theta(n^1/3)的均方误差（MSE），这个速率在本地模型和中心模型中可实现的速率之间。本文介绍了两种在洗牌模型中用于求和的新协议，具有更高的准确性和通信折衷。我们的第一个贡献是基于上述Balle等人的协议的递归构造，为每个用户提供poly(log log n)的误差和O(log log n)的信息。第二个贡献是一种协议，每个用户提供O(1)的准确性和O(1)的信息，基于Ishai等人（FOCS 2006）对从安全求和到洗牌的还原的新颖分析（原始还原需要每个用户O(log n)的信息）。我们还提供了一个数值评估，展示了我们的协议在实际值n的隐私、准确性和通信之间提供了良好的折衷。

### 链接
- **URL:** [https://doi.org/10.1145/3372297.3417242](https://doi.org/10.1145/3372297.3417242)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3372297.3417242](https://dl.acm.org/doi/pdf/10.1145/3372297.3417242)
