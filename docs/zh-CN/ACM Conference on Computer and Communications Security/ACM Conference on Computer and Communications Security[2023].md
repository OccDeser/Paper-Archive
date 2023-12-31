# ACM Conference on Computer and Communications Security[2023]
## ASMesh: Anonymous and Secure Messaging in Mesh Networks Using Stronger, Anonymous Double Ratchet.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#asmesh-anonymous-and-secure-messaging-in-mesh-networks-using-stronger-anonymous-double-ratchet) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#asmesh-anonymous-and-secure-messaging-in-mesh-networks-using-stronger-anonymous-double-ratchet)**
### 作者
* Alexander Bienstock, New York University, New York, NY, USA
* Paul Rösler, FAU Erlangen-Nuremberg, Nürnberg, Germany
* Yi Tang, University of Michigan, Ann Arbor, MI, USA
### 摘要
> 绝大多数安全信使都有单一的、中央化的服务提供商，通过中继加密文本在用户之间实现异步通信。然而，在某些情况下，比如审查网络中的大规模抗议活动，依赖于中央化的提供商会导致灾难性后果。网状信使试图通过构建自组织网络来解决这个问题，其中用户客户端执行文本中继任务。然而，最近对广泛部署的网状信使进行的分析发现了严重的安全弱点（Albrecht等人CT-RSA'21&USENIX Security'22）。为了支持安全网状信使的设计，我们提供了一个新的、更完整的网状消息安全模型。我们的模型涵盖了前向和后向抗攻击安全性，以及前向和后向抗攻击匿名性，这两者在这种情境下尤为重要。我们还确定了可以由于网状网络的特殊特征（如延迟通信、分布式网络和对手）而实现的新型更强的保密目标。最后，我们开发了一个名为ASMesh的新协议，可以可靠地满足这些安全目标。为此，我们重访了Signal的双重摇摆协议并提出了非平凡的改进。除此之外，我们还添加了一种机制，提供前向和后向抗攻击匿名性。因此，我们的协议有效地提供了在过去和未来用户受损情况下的强保密性和匿名性。我们的大部分研究结果也适用于传统的通信方式。我们证明了协议的安全性，并在模拟的网状网络中评估了它们的性能。最后，我们开发了一个概念验证实现。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616615](https://doi.org/10.1145/3576915.3616615)
## Lattice-Based Blind Signatures: Short, Efficient, and Round-Optimal.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#lattice-based-blind-signatures-short-efficient-and-round-optimal) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#lattice-based-blind-signatures-short-efficient-and-round-optimal)**
### 作者
* Ward Beullens, IBM Research Europe - Zurich, Ruschlikon, Switzerland
* Vadim Lyubashevsky, IBM Research Europe - Zurich, Ruschlikon, Switzerland
* Ngoc Khanh Nguyen, EPFL, Lausanne, Switzerland
* Gregor Seiler, IBM Research Europe - Zurich, Ruschlikon, Switzerland
### 摘要
> 我们提出了一个基于随机预言模型和标准格子问题（环/模SIS/LWE和NTRU）的困难性的2轮盲签名协议，它的签名大小为20 KB。该协议是轮次最优的，并且它的转录大小可以小到60 KB。这种盲签名比基于del Pino和Katsumata（Crypto 2022）的标准假设的最紧凑格子方案短4倍，比基于Agrawal等人新提出的“一次更多ISIS”假设的方案（CCS 2022）短2倍。我们还提出了一种需要验证者和签署者共享秘钥的"带密钥验证”的盲签名方案。此方案的签名大小只有48字节，但还需要进一步研究以探索其签名生成协议的效率。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616613](https://doi.org/10.1145/3576915.3616613)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616613](https://dl.acm.org/doi/pdf/10.1145/3576915.3616613)
## Aggregate Signatures with Versatile Randomization and Issuer-Hiding Multi-Authority Anonymous Credentials.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#aggregate-signatures-with-versatile-randomization-and-issuer-hiding-multi-authority-anonymous-credentials) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#aggregate-signatures-with-versatile-randomization-and-issuer-hiding-multi-authority-anonymous-credentials)**
### 作者
* Omid Mir, Johannes Kepler University Linz, Linz, Austria
* Balthazar Bauer, IRIF, Université de Paris Cité, Paris, France
* Scott Griffy, Brown University, Providence, RI, USA
* Anna Lysyanskaya, Brown University, Providence, RI, USA
* Daniel Slamanig, AIT Austrian Institute of Technology, Vienna, Austria
### 摘要
> 匿名凭证（Anonymous credentials，AC）在用户中心的身份管理中提供了隐私保护。它们使用户能够匿名认证，仅透露必要的属性。随着自主身份等去中心化系统的兴起，对去中心化环境下高效的AC系统的需求也越来越大。然而，依赖传统的AC系统，当用户从不同的发行者那里获取凭证时，需要用户出示独立的凭证，导致了复杂度增加。AC系统应该支持多权威（multi-authority），以便有效地展示来自不同发行者的多个凭证。另一个重要的特性是发行者隐藏（issuer hiding），确保发行者的身份保持隐匿，仅透露与验证者政策的合规性。这可以防止基于凭证发行者的唯一组合进行唯一标识。迄今为止，不存在同时满足这两个属性的AC方案。本文介绍了Issuer-Hiding Multi-Authority Anonymous Credentials（IhMA）方案，利用了两种新型的签名原语：具有可随机化标签和公钥的聚合签名（Aggregate Signatures with Randomizable Tags and Public Keys）和聚合水银签名（Aggregate Mercurial Signatures）。我们提供了基于这些原语的两种IhMA构造，具有不同的权衡，并相信它们将在IhMA之外有应用。除了定义符号和严格的安全定义外，我们还提供了可证明安全和高效的构造，并展示了实际效率的基准测试。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623203](https://doi.org/10.1145/3576915.3623203)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623203](https://dl.acm.org/doi/pdf/10.1145/3576915.3623203)
## Concurrent Security of Anonymous Credentials Light, Revisited.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#concurrent-security-of-anonymous-credentials-light-revisited) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#concurrent-security-of-anonymous-credentials-light-revisited)**
### 作者
* Julia Kastner, ETH Zurich, Zurich, Switzerland
* Julian Loss, CISPA Helmholz Center for Information Security, Saarbrucken, Germany
* Omar Renawi, CISPA Helmholz Center for Information Security, Saarland University, Saarbrucken, Germany
### 摘要
> 我们重新审视了著名的轻量级匿名凭证(ACL)方案（Baldimtsi and Lysyanskaya, CCS'13）的并发安全性保证。当该方案按顺序执行时，其安全性已得到证明，但其并发安全性问题一直未解决。Benhamouda等人在（EUROCRYPT'21）的后续工作提供了一个对ACL进行并发攻击的高效方法，似乎解决了这个问题。在本研究中，我们指出了Benhamouda等人对ACL的攻击中的一个微妙缺陷，并显示尽管普遍观点认为无法证明其并发安全性，我们仍然能够证明它的安全性。我们在代数群模型中通过引入一个ID方案作为中间步骤，给出了模块化证明，并且这种证明方式极大简化了Kastner等人（PKC'22）提出的Abe盲签名方案的复杂安全论证。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623184](https://doi.org/10.1145/3576915.3623184)
## Decoding the Secrets of Machine Learning in Malware Classification: A Deep Dive into Datasets, Feature Extraction, and Model Performance.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#decoding-the-secrets-of-machine-learning-in-malware-classification-a-deep-dive-into-datasets-feature-extraction-and-model-performance) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#decoding-the-secrets-of-machine-learning-in-malware-classification-a-deep-dive-into-datasets-feature-extraction-and-model-performance)**
### 作者
* Savino Dambra, Norton Research Group, Biot, France
* Yufei Han, INRIA, Rennes, France
* Simone Aonzo, EURECOM, Biot, France
* Platon Kotzias, Norton Research Group, Athens, Greece
* Antonino Vitale, EURECOM, Biot, France
* Juan Caballero, IMDEA Software Institute, Madrid, Spain
* Davide Balzarotti, EURECOM, Biot, France
* Leyla Bilge, Norton Research Group, Biot, France
### 摘要
> 许多研究提出了用于恶意软件检测和分类的机器学习（ML）模型，报告了几乎完美的性能。然而，它们以不同的方式组合真实数据，使用各种静态和动态分析技术进行特征提取，甚至在对待恶意软件家族的定义上存在差异。因此，我们的社区仍然缺乏对恶意软件分类结果的理解：它们是否与收集到的数据集的性质和分布有关，训练数据集中家族数量和样本数量对性能有何影响，以及静态和动态特征如何相互补充。本研究通过调查数据集、特征和分类器对基于ML的恶意软件检测和分类的影响，阐明了这些未解之谜。为此，我们迄今为止收集了规模最大的均衡恶意软件数据集，包含来自670个家族的67,000个样本（每个家族100个样本），并使用我们的数据集训练了最先进的恶意软件检测和家族分类模型。我们的结果显示，静态特征优于动态特征，并且将两者结合只能在静态特征上提供微小改进。我们发现打包与分类准确性之间没有相关性，而在动态提取的特征中缺失的行为严重影响其性能。我们还证明了更多家族分类使分类变得更加困难，而每个家族更多的样本可以提高准确性。最后，我们发现在家族样本均匀分布的情况下训练的模型对未见数据具有更好的泛化能力。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616589](https://doi.org/10.1145/3576915.3616589)
## Privacy Leakage via Speech-induced Vibrations on Room Objects through Remote Sensing based on Phased-MIMO.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#privacy-leakage-via-speech-induced-vibrations-on-room-objects-through-remote-sensing-based-on-phased-mimo) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#privacy-leakage-via-speech-induced-vibrations-on-room-objects-through-remote-sensing-based-on-phased-mimo)**
### 作者
* Cong Shi, Rutgers University, New Brunswick, NJ, USA
* Tianfang Zhang, Rutgers University, New Brunswick, NJ, USA
* Zhaoyi Xu, Rutgers University, New Brunswick, NJ, USA
* Shuping Li, Rutgers University, New Brunswick, NJ, USA
* Donglin Gao, Rutgers University, New Brunswick, NJ, USA
* Changming Li, Rutgers University, New Brunswick, NJ, USA
* Athina Petropulu, Rutgers University, New Brunswick, NJ, USA
* Chung-Tse Michael Wu, Rutgers University, New Brunswick, NJ, USA
* Yingying Chen, Rutgers University, New Brunswick, NJ, USA
### 摘要
> 语音窃听长期以来一直是个人和企业隐私的重要威胁。最近的研究表明，可以通过声音诱导振动获取私人语音信息的可能性存在。通过固体介质或空气传输的声学信号可能引起固体表面的振动，这些振动可以被各种传感器（例如运动传感器、高速摄像机和激光）捕捉到，而无需使用麦克风。迄今为止，这些威胁仅限于传感器与振动表面接触或至少在视线范围内的场景。本文重新审视了这一重要的研究领域，并展示了可能实现远程、长距离甚至墙穿式语音窃听攻击的能力。我们发现一种新型的语音窃听攻击方式，通过mmWave感应、信号处理和先进的深度学习技术，从常见的室内物品（例如纸袋、塑料储物箱）微小的表面振动中远程引出语音。虽然mmWave信号对振动具有很高的灵敏度，但其感测距离有限，通常不能穿透墙壁。我们通过设计和实施一个高分辨率的软件定义相控阵MIMO雷达来克服这一关键挑战，该系统集成了发射波束形成、虚拟阵列和接收波束形成，增强感测的定向性，将所有mmWave波束聚焦到目标室内物体上，使mmWave信号能够从远距离甚至透过墙壁捕捉到微小的语音引起的振动。为了实现攻击，我们设计了一种对象识别技术，扫描房间中的物品，并识别最对语音振动最敏感的显著物体，以提取振动特征。我们成功地通过开发深度学习框架展示了语音隐私泄露的情况。我们的框架可以利用领域自适应技术，仅基于受害者的未标记振动数据推断语音内容。我们通过涉及40位发言人、五种常见室内物品以及室内外mmWave设备的攻击场景的大量实验，验证了该攻击方式在数字识别上的概念证明。我们的基于相控阵MIMO的攻击可以在使用语音标签进行训练时实现88%~98%的成功率和不使用语音标签进行训练时实现64%~86%的成功率。对于墙穿攻击，成功率为81%~94%和58%~74%。此外，我们还讨论了可能的防御方法以减轻这种前所未有的安全威胁。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616634](https://doi.org/10.1145/3576915.3616634)
## Efficient Query-Based Attack against ML-Based Android Malware Detection under Zero Knowledge Setting.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#efficient-query-based-attack-against-ml-based-android-malware-detection-under-zero-knowledge-setting) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#efficient-query-based-attack-against-ml-based-android-malware-detection-under-zero-knowledge-setting)**
### 作者
* Ping He, Zhejiang University, Hangzhou, China
* Yifan Xia, Zhejiang University, Hangzhou, China
* Xuhong Zhang, Zhejiang University, Hangzhou, China
* Shouling Ji, Zhejiang University, Hangzhou, China
### 摘要
> Android操作系统的广泛应用使恶意Android应用程序成为攻击者的吸引目标。基于机器学习的(Android恶意软件检测)AMD方法在解决这个问题上至关重要，然而，它们对敌对样本的脆弱性引起了关注。目前针对基于机器学习的AMD方法的攻击展示了出色的性能，但依赖于在现实世界场景中可能不现实的强假设，例如有关特征空间、模型参数和训练数据集的知识要求。为了解决这个限制，我们引入了AdvDroidZero，一个在零知识环境下对基于机器学习的AMD方法进行高效查询攻击的框架。我们广泛的评估结果表明，AdvDroidZero对各种主流的基于机器学习的AMD方法具有高效的攻击能力，特别是对于各种最先进的方法和现实世界中的杀毒解决方案。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623117](https://doi.org/10.1145/3576915.3623117)
## Your Battery Is a Blast! Safeguarding Against Counterfeit Batteries with Authentication.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#your-battery-is-a-blast-safeguarding-against-counterfeit-batteries-with-authentication) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#your-battery-is-a-blast-safeguarding-against-counterfeit-batteries-with-authentication)**
### 作者
* Francesco Marchiori, University of Padova, Padua, Italy
* Mauro Conti, University of Padova, Padua, Italy
### 摘要
> 锂离子电池是各种应用中的主要电源，因其高能量和功率密度而被广泛使用。据估计，其市场规模将在2022年达到480亿美元。然而，随着锂离子电池的广泛应用，假冒电池的生产也普遍存在，并可能给用户带来安全隐患。假冒电池可能导致爆炸或火灾，并且市场上的普遍存在使用户很难检测出假冒电池。事实上，当前的电池认证方法容易受到先进的假冒技术的攻击，并且通常无法适应不同的电池和系统。在本文中，我们通过提出两种新的方法，DCAuth和EISthentication，改进了电池认证技术。这两种方法利用机器学习模型通过每个电池的内部特征来自动认证锂离子电池的模型和架构。我们的方法无需任何外部设备，仅利用电池的正常使用数据进行认证。它们也能够抵御最常见和关键的假冒行为，并且能够扩展到多个电池和设备。为了评估我们提出的方法的有效性，我们分析了总共20个数据集的时间序列数据，提取了对我们的分析具有意义的特征。我们的方法在电池认证方面取得了很高的准确性，无论是在架构（最高可达0.99）还是模型（最高可达0.96）方面。此外，我们的方法在识别性能方面也具有可比性。通过使用我们提出的方法，制造商可以确保设备仅使用合法的电池，以确保系统的运行状态和用户的安全措施。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623179](https://doi.org/10.1145/3576915.3623179)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623179](https://dl.acm.org/doi/pdf/10.1145/3576915.3623179)
## TxPhishScope: Towards Detecting and Understanding Transaction-based Phishing on Ethereum.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#txphishscope-towards-detecting-and-understanding-transaction-based-phishing-on-ethereum) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#txphishscope-towards-detecting-and-understanding-transaction-based-phishing-on-ethereum)**
### 作者
* Bowen He, Zhejiang University, Hangzhou, China
* Yuan Chen, Zhejiang University, Hangzhou, China
* Zhuo Chen, Zhejiang Univercity, Hangzhou, China
* Xiaohui Hu, Beijing University of Posts and Telecommunications, Beijing, China
* Yufeng Hu, Zhejiang University, Hangzhou, China
* Lei Wu, Zhejiang University, Hangzhou, China
* Rui Chang, Zhejiang University, Hangzhou, China
* Haoyu Wang, Huazhong University of Science and Technology, Wuhan, China
* Yajin Zhou, Zhejiang University, Hangzhou, China
### 摘要
> 以太坊的繁荣吸引了许多用户发送交易并交易加密资产。然而，这也催生了一种新形式的基于交易的网络钓鱼诈骗，被称为TxPhish。具体而言，用户被高额利润所诱惑，被骗访问假网站并签署交易，使骗子能够窃取其加密资产。过去一年中，共发生了11起大规模的TxPhish事件，造成了超过7000万的总损失。在本文中，我们进行了对以太坊上的TxPhish的第一次实证研究，包括TxPhish攻击过程和网络钓鱼交易的详细信息。为了自动检测TxPhish网站并提取网络钓鱼账户，我们提出了TxPhish方法，该方法动态访问可疑网站，触发交易并模拟结果。在2022年11月25日至2023年7月31日期间，我们成功检测并上报了26,333个TxPhish网站和3,486个网络钓鱼账户。在所有记录的TxPhish网站中，我们首次上报的网站占78.9%，使TxPhish成为最大的TxPhish网站检测系统。此外，我们提供了包括四个网络钓鱼账户及其150万资金流动在内的犯罪证据，以帮助受害者追回资金。此外，我们还发现了六个以太坊项目的漏洞，并得到了赞赏。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623210](https://doi.org/10.1145/3576915.3623210)
## Uncle Maker: (Time)Stamping Out The Competition in Ethereum.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#uncle-maker-time-stamping-out-the-competition-in-ethereum) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#uncle-maker-time-stamping-out-the-competition-in-ethereum)**
### 作者
* Aviv Yaish, The Hebrew University, Jerusalem, Israel
* Gilad Stern, The Hebrew University, Jerusalem, Israel
* Aviv Zohar, The Hebrew University, Jerusalem, Israel
### 摘要
> 我们介绍并分析了对以太坊1的共识机制的一种攻击，该攻击允许矿工获得比诚实同行更高的挖矿奖励。这种攻击的创新之处在于它依赖于操纵区块时间戳和难度调整算法(DAA)，从而在出现区块竞争时给予矿工优势。我们称这种攻击为Uncle Maker，因为它会导致更高比例的叔块。我们描述了攻击的几种变体，其中一种对矿工来说是无风险的。与过去的攻击如自私挖矿不同，我们的攻击已被证明是有利可图的，但从未在实践中观察到：我们分析了以太坊区块链的数据，并显示一些以太坊的矿工多年来一直积极地运行这种攻击的变体，而没有被发现，这是首次证据证明矿工操纵一个重要共识机制的情况。我们提供了我们的证据，以及攻击者获得的利润估计，而这利润是以诚实矿工为代价的。由于仍然有几个区块链在运行以太坊1的协议，我们建议具体修复方法，并将其作为geth的补丁实施。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616674](https://doi.org/10.1145/3576915.3616674)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616674](https://dl.acm.org/doi/pdf/10.1145/3576915.3616674)
## How Hard is Takeover in DPoS Blockchains? Understanding the Security of Coin-based Voting Governance.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#how-hard-is-takeover-in-dpos-blockchains-understanding-the-security-of-coin-based-voting-governance) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#how-hard-is-takeover-in-dpos-blockchains-understanding-the-security-of-coin-based-voting-governance)**
### 作者
* Chao Li, Beijing Jiaotong University, Beijing, China
* Balaji Palanisamy, University of Pittsburgh, Pittsburgh, PA, USA
* Runhua Xu, Beihang University, Beijing, China
* Li Duan, Beijing Jiaotong University, Beijing, China
* Jiqiang Liu, Beijing Jiaotong University, Beijing, China
* Wei Wang, Beijing Jiaotong University, Beijing, China
### 摘要
> 委托权益证明（DPoS）区块链，例如EOSIO、Steem和TRON，由经由基于货币的投票系统选举产生的区块生产者委员会进行管理。最近我们目睹了首次实质性的区块链接管事件，即发生在Steem和TRON之间的接管。在这一事件发生后的一个小时内，TRON创始人接管了整个Steem委员会，迫使原本维护多年的Steem社区离开了该区块链。这是区块链和Web 3.0进化中的历史性事件。尽管具有显著的破坏性影响，但我们对于DPoS区块链普遍易受接管的程度以及改善其接管抵抗能力的方法知之甚少。在本文中，我们证明DPoS区块链对接管的抵抗能力由理论设计和底层基于货币的投票治理系统的实际使用共同决定。当选民积极合作以抵制潜在的接管时，我们的理论分析揭示出当前DPoS区块链的抵抗能力远低于理论上限。然而在实践中，选民的偏好可能会有显著不同。本文首次展示了对EOSIO、Steem和TRON被动接管抵抗能力的大规模实证研究。我们的研究确认了选民偏好的多样性，并描述了这种多样性对接管抵抗能力的影响。通过理论和实证分析，我们的研究提供了关于基于货币投票治理安全性的新见解，并提出了改进任何实施此治理模式的区块链接管抵抗能力的潜在方法。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623171](https://doi.org/10.1145/3576915.3623171)
## Demystifying DeFi MEV Activities in Flashbots Bundle.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#demystifying-defi-mev-activities-in-flashbots-bundle) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#demystifying-defi-mev-activities-in-flashbots-bundle)**
### 作者
* Zihao Li, The Hong Kong Polytechnic University, Hong Kong, China
* Jianfeng Li, Xi'an Jiaotong University, Xi'an, China
* Zheyuan He, University of Electronic Science and Technology of China, Chengdu, China
* Xiapu Luo, The Hong Kong Polytechnic University, Hong Kong, China
* Ting Wang, Pennsylvania State University, University Park, PA, USA
* Xiaoze Ni, University of Electronic Science and Technology of China, Chengdu, China
* Wenwu Yang, University of Electronic Science and Technology of China, Chengdu, China
* Xi Chen, University of Electronic Science and Technology of China, Chengdu, China
* Ting Chen, University of Electronic Science and Technology of China, Chengdu, China
### 摘要
> 去中心化金融（DeFi）在无需许可的区块链上迅速兴起并吸引了广泛关注。由于无需许可的区块链的透明度，机会主义交易者可以竞争性地提取其所谓的“矿工抽取价值”（MEV），这会削弱区块链系统的共识安全性和效率。Flashbots打包机制进一步加剧了MEV竞争，因为它使机会主义交易者能够设计更复杂的MEV提取方式。本文通过开发一种名为ActLifter的新型自动化工具，准确识别每个打包中的交易中的DeFi操作，以及使用迭代聚类方法的新方法ActCluster，首次对Flashbots打包中的DeFi MEV活动进行了系统研究。大量实验证据表明，ActLifter在DeFi操作识别方面几乎可以达到100%的精确度和召回率，显著优于现有技术水平。此外，借助ActCluster的帮助，我们还获得了许多新的观察结果，并发现了17种尚未报告在现有研究中的DeFi MEV活动种类，这些活动出现在53.12%的打包中。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616590](https://doi.org/10.1145/3576915.3616590)
## Marketing to Children Through Online Targeted Advertising: Targeting Mechanisms and Legal Aspects.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#marketing-to-children-through-online-targeted-advertising-targeting-mechanisms-and-legal-aspects) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#marketing-to-children-through-online-targeted-advertising-targeting-mechanisms-and-legal-aspects)**
### 作者
* Tinhinane Medjkoune, Univ. Grenoble Alpes, CNRS, Grenoble INP, LIG, Grenoble, France
* Oana Goga, LIX, CNRS, Inria, Ecole Polytechnique, Institut Polytechnique de Paris, Palaiseau, France
* Juliette Senechal, Universite de Lille, CRDP, DReDIS-IRJS, Lille, France
### 摘要
> 许多研究人员和组织，如世卫组织和联合国儿童基金会（UNICEF），已经提高了对针对儿童广告危害的意识。尽管大多数现有法律仅规范可能接触到儿童的电视广告，但立法者一直在努力扩展到在线广告，并例如禁止（例如DSA）或限制（例如COPPA）基于个人资料针对儿童的广告。乍一看，像Google这样的广告平台似乎通过不允许广告商针对少于18岁的用户来保护儿童。然而，本文显示其他的定位功能可以被利用来接触儿童。例如，在YouTube上，广告商可以通过基于放置的定位来针对观看特定视频的用户投放广告，这是一种上下文定位的形式。因此，广告商可以简单地在儿童为中心的视频中放置他们的广告来针对儿童。通过一系列的广告实验，我们展示了在儿童为中心的视频上实施基于放置的定位是可能的，因此，可以进行儿童营销。此外，我们的广告实验显示，广告商可以结合基于兴趣、位置、行为等个人资料的定位和基于放置的广告来针对儿童为中心的视频。我们讨论了这两种做法与DSA和COPPA的合法性。最后，我们调查了真实广告商在YouTube上使用基于放置的定位来接触儿童的广告的程度。我们提出了一种测量方法，包括构建一个能够捕捉广告的Chrome扩展程序，并对六个浏览器配置文件进行设置，以观看儿童为中心的视频。我们的结果显示，在我们测试的儿童为中心的视频中，7%的广告使用了基于放置的定位。因此，在YouTube上用广告针对儿童不仅在理论上是可能的，而且实际上也发生了。我们认为，当前的法律和技术解决方案不足以保护儿童免受在线广告的伤害。一个直接的解决方案将是禁止在儿童为中心的内容上进行基于放置的广告。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623172](https://doi.org/10.1145/3576915.3623172)
## Pakistani Teens and Privacy - How Gender Disparities, Religion and Family Values Impact the Privacy Design Space.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#pakistani-teens-and-privacy-how-gender-disparities-religion-and-family-values-impact-the-privacy-design-space) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#pakistani-teens-and-privacy-how-gender-disparities-religion-and-family-values-impact-the-privacy-design-space)**
### 作者
* Maryam Mustafa, Computer Science, Lahore University of Management Sciences, Lahore, Pakistan
* Abdul Moeed Asad, Purdue University, West Lafayette, IN, USA
* Shehrbano Hassan, Digital Rights Foundation, Lahore, Pakistan
* Urooj Haider, Computer Science, Lahore University of Management Sciences, Lahore, Pakistan
* Zainab Durrani, Digital Rights Foundation, Lahore, Pakistan
* Katharina Krombholz, CISPA Helmholtz Center for Information Security, Saarbrucken, Germany
### 摘要
> 如何理解青少年在西方、受教育程度高、工业化、富裕和民主国家以外的领域中对隐私的认知、管理和表现，目前还不太清楚。为了填补这一空白，我们采访了30名青少年，调查了巴基斯坦年轻人对隐私的感知、实践和数字伤害的经历。巴基斯坦是一个特别有趣的背景，因为在这个背景下，隐私不被视为个体的权利，也不是在个人主义框架内行使，而是受到多种因素的影响，包括社会规范、家庭动态和宗教信仰。基于我们的发现，我们制定了四个人物角色，以系统化描述这一特定人群的需求和价值，并进行了合作设计活动的重点小组讨论，进一步探索隐私冲突。除了证实和扩展现有关于青少年隐私实践和认知的理论之外，我们的研究结果表明，隐私侵犯对年轻女性的影响超过比例，并且这种伤害不仅影响她们自己，还波及到她们的家庭中。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623087](https://doi.org/10.1145/3576915.3623087)
## Comprehension from Chaos: Towards Informed Consent for Private Computation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#comprehension-from-chaos-towards-informed-consent-for-private-computation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#comprehension-from-chaos-towards-informed-consent-for-private-computation)**
### 作者
* Bailey Kacsmar, University of Alberta, Edmonton, AB, Canada
* Vasisht Duddu, University of Waterloo, Waterloo, ON, Canada
* Kyle Tilbury, University of Waterloo, Waterloo, ON, Canada
* Blase Ur, University of Chicago, Chicago, IL, USA
* Florian Kerschbaum, University of Waterloo, Waterloo, ON, Canada
### 摘要
> 私人计算，包括多方计算和私人查询执行等技术，为组织在保护数据主体隐私的同时分析他们自己和合作伙伴拥有的数据提供了巨大的潜力。尽管最近有关差分隐私的交流受到关注，但尚未研究终端用户对私人计算的看法。为了填补这一空白，我们进行了22次半结构化访谈，调查用户对私人计算及其对涉及他们数据的期望的理解。访谈重点关注四种具体的数据分析场景（例如广告转化分析），其中每种场景都有一种不使用私人计算的变体和另一种使用私人计算的变体。尽管参与者对于私人计算的抽象定义感到困惑，但他们发现具体的场景启发人并且在常理上是可行的，即使我们没有解释复杂的加密基础知识。私人计算增加了参与者对数据共享的接受程度，但并非无条件地如此；数据共享和分析的目的是他们态度的主要驱动因素。通过集体活动，参与者强调了详细说明计算目的以及在向终端用户描述私人计算时澄清私人计算的输入不会在组织之间共享的重要性。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623152](https://doi.org/10.1145/3576915.3623152)
## Privacy in the Age of Neurotechnology: Investigating Public Attitudes towards Brain Data Collection and Use.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#privacy-in-the-age-of-neurotechnology-investigating-public-attitudes-towards-brain-data-collection-and-use) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#privacy-in-the-age-of-neurotechnology-investigating-public-attitudes-towards-brain-data-collection-and-use)**
### 作者
* Emiram Kablo, Paderborn University, Paderborn, Germany
* Patricia Arias-Cabarcos, Paderborn University, Paderborn, Germany
### 摘要
> 脑机接口（BCI）已经超出了医疗领域，进入了娱乐、健康和营销领域。然而，随着消费者神经技术的普及，由于脑波数据的敏感性及其潜在商品化，隐私问题变得越来越严重。隐私攻击已经得到证实，而大脑到语音和大脑到图像解码方面的人工智能进步带来了一系列新的风险。在这一领域，我们进行了第一项用户研究（n=287），以了解人们对神经隐私的期望和神经技术影响的认识。我们的分析表明，虽然用户对这项技术很感兴趣，但隐私对于可接受性来说是一个关键问题。结果突显了同意的重要性，以及需要实施有效的透明度来分享神经数据。我们的见解为分析当前隐私保护机制中的差距提供了一定基础，并为如何设计尊重隐私的神经技术的辩论增添了一些内容。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623164](https://doi.org/10.1145/3576915.3623164)
## Password-Stealing without Hacking: Wi-Fi Enabled Practical Keystroke Eavesdropping.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#password-stealing-without-hacking-wi-fi-enabled-practical-keystroke-eavesdropping) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#password-stealing-without-hacking-wi-fi-enabled-practical-keystroke-eavesdropping)**
### 作者
* Jingyang Hu, Hunan University, Changsha, China
* Hongbo Wang, Nanyang Technological University, Singapore, Singapore
* Tianyue Zheng, Nanyang Technological University, Singapore, Singapore
* Jingzhi Hu, Nanyang Technological University, Singapore, Singapore
* Zhe Chen, Fudan University, Shanghai, China
* Hongbo Jiang, Hunan University, Changsha, China
* Jun Luo, Nanyang Technological University, Singapore, Singapore
### 摘要
> 无线局域网（Wi-Fi）的非接触式感应特性已被利用于实现隐私侵犯，然而，现有的基于Wi-Fi CSI（信道状态信息）的攻击需要黑客攻击Wi-Fi硬件以获取所需CSI。由于这种黑客攻击在紧凑型硬件上被证明非常困难，其在跟上快速发展的Wi-Fi技术方面的可行性变得非常可疑。为此，我们提出了WiKI-Eve，用于窃听智能手机上的按键输入而无需黑客攻击。WiKI-Eve利用最新Wi-Fi硬件提供的一种新特性，即波束成形反馈信息（BFI）：由于BFI以明文形式从智能手机传输到接入点（AP），因此可以被其他切换到监视模式的Wi-Fi设备窃听（即窃听）。由于现有的按键推断方法在泛化能力方面非常有限，WiKI-Eve进一步在对抗学习方案上进行创新，使其推断能够适用于未知情景。我们实施了WiKI-Eve并对其进行了广泛评估；结果表明，WiKI-Eve实现了88.9%的单个按键推断准确率，并且能够以高达65.8%的前10位准确率窃取移动应用（例如微信）的密码。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623088](https://doi.org/10.1145/3576915.3623088)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623088](https://dl.acm.org/doi/pdf/10.1145/3576915.3623088)
## Recovering Fingerprints from In-Display Fingerprint Sensors via Electromagnetic Side Channel.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#recovering-fingerprints-from-in-display-fingerprint-sensors-via-electromagnetic-side-channel) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#recovering-fingerprints-from-in-display-fingerprint-sensors-via-electromagnetic-side-channel)**
### 作者
* Tao Ni, City University of Hong Kong, Hong Kong, Hong Kong
* Xiaokuan Zhang, George Mason University, Fairfax, VA, USA
* Qingchuan Zhao, City University of Hong Kong, Hong Kong, Hong Kong
### 摘要
> 最近，手机中广泛采用了嵌入式指纹传感器。然而，我们发现这种新技术可能会通过电磁(EM)侧信道泄露用户指纹的信息，在屏幕解锁过程中被利用来恢复指纹。我们提出了FPLogger来展示这种新型侧信道攻击的可行性。具体而言，它利用用户按下嵌入式指纹传感器时发出的电磁辐射来提取指纹信息，然后将捕获的电磁信号映射到指纹图像，并开发了3D指纹片段来欺骗并解锁手机。我们在配备光学和超声嵌入式指纹传感器的五款普通智能手机上对FPLogger的有效性进行了广泛评估，结果显示，它在恢复指纹图像方面取得了令人期待的相似度。此外，来自50起端到端欺骗攻击的结果也显示，FPLogger在欺骗五款不同智能手机方面的成功率分别为24%（前1）和54%（前3）。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623153](https://doi.org/10.1145/3576915.3623153)
## Optical Cryptanalysis: Recovering Cryptographic Keys from Power LED Light Fluctuations.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#optical-cryptanalysis-recovering-cryptographic-keys-from-power-led-light-fluctuations) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#optical-cryptanalysis-recovering-cryptographic-keys-from-power-led-light-fluctuations)**
### 作者
* Ben Nassi, Cornell Tech, New York, USA
* Ofek Vayner, Ben-Gurion University of the Negev, Be'er Sheva, Israel
* Etay Iluz, Ben-Gurion University of the Negev, Be'er Sheva, Israel
* Dudi Nassi, Ben-Gurion University of the Negev, Be'er Sheva, Israel
* Jan Jancar, Masaryk University, Brno, Czech Rep
* Daniel Genkin, Georgia Tech, Atlanta, USA
* Eran Tromer, Boston University, Boston, USA
* Boris Zadov, Ben-Gurion University of the Negev, Be'er Sheva, Israel
* Yuval Elovici, Ben-Gurion University of the Negev, Be'er Sheva, Israel
### 摘要
> 虽然功率LED已经被集成到各种执行密码操作的设备中数十年，但它们带来的密码分析风险尚未得到调查。本文提出了光学密码分析，一种新的侧信道攻击形式，通过使用光电二极管测量设备功率LED发出的光，并在密码操作期间分析光强度的微小波动来提取秘密密钥。我们分析了各种消费设备的功率LED的光学泄漏和影响光学信噪比的因素。然后，我们展示了对各种消费设备（智能手机、智能卡和Raspberry Pi以及它们的USB外设）进行端到端光学密码分析攻击，并从最大距离为25米的先前和最新版本的流行密码库（GnuPG、Libgcrypt、PQCrypto-SIDH）中恢复秘密密钥（RSA、ECDSA、SIKE）。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616620](https://doi.org/10.1145/3576915.3616620)
## The Danger of Minimum Exposures: Understanding Cross-App Information Leaks on iOS through Multi-Side-Channel Learning.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#the-danger-of-minimum-exposures-understanding-cross-app-information-leaks-on-ios-through-multi-side-channel-learning) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#the-danger-of-minimum-exposures-understanding-cross-app-information-leaks-on-ios-through-multi-side-channel-learning)**
### 作者
* Zihao Wang, Indiana University Bloomington, Bloomington, IN, USA
* Jiale Guan, Indiana University Bloomington, Bloomington, IN, USA
* XiaoFeng Wang, Indiana University Bloomington, Bloomington, IN, USA
* Wenhao Wang, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, UNK, China
* Luyi Xing, Indiana University Bloomington, Bloomington, IN, USA
* Fares Alharbi, Indiana University Bloomington, Bloomington, IN, USA
### 摘要
> 研究关于边信道泄露的内容一直聚焦于来自单一信道（内存、网络流量、电源等）的信息暴露。我们较少对与目标活动（例如，访问网站）相关的多个边信道学习的风险进行研究，即使个别信道对有效攻击来说信息不足够。尽管先前的研究在这个方向上迈出了第一步，从一组全局统计数据中推断iOS前台应用程序操作，但我们仍不清楚如何确定系统中所有与目标相关的边信道的最大信息泄漏、可以从这些泄漏中学到哪些关于目标的信息以及最重要的是如何控制整个系统的信息泄漏，而不仅仅限于个别信道。为了回答这些基本问题，我们进行了对多信道推断的第一次系统研究，以iOS为起点。我们的研究基于一种新的攻击技术，称为"Mischief"，它利用概率搜索来近似一个曝露最多信息的信道子集，该子集由与目标活动相关的潜在边信道集合组成，并使用基于相关性特征选择的评估指标"Merit Score"来衡量。在这样一个最佳子集上，推断攻击被建模为多元时间序列分类问题，因此可以应用最先进的基于深度学习的解决方案，特别是"InceptionTime"，以实现最佳结果。研究发现，即使在开放环境下，Mischief在当今的iOS（16.2）上能够有效地识别前台应用程序、网站访问、敏感的物联网操作（例如开门），并具有高度的置信度，这表明苹果对已知攻击采取的保护措施是不充分的。此外，这种新的理解还使我们能够开发更全面的保护措施，将当今的边信道研究从抑制个别信道的泄漏转变为控制整个系统的信息暴露。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616655](https://doi.org/10.1145/3576915.3616655)
## Silence is not Golden: Disrupting the Load Balancing of Authoritative DNS Servers.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#silence-is-not-golden-disrupting-the-load-balancing-of-authoritative-dns-servers) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#silence-is-not-golden-disrupting-the-load-balancing-of-authoritative-dns-servers)**
### 作者
* Fenglu Zhang, Tsinghua University, Beijing, China
* Baojun Liu, Tsinghua University, Beijing, China
* Eihal Alowaisheq, King Saud University, Riyadh, Saudi Arabia
* Jianjun Chen, Tsinghua University & Zhongguancun Laboratory, Beijing, China
* Chaoyi Lu, Tsinghua University, Beijing, China
* Linjian Song, Alibaba Group, Beijing, China
* Yong Ma, Alibaba Group, Beijing, China
* Ying Liu, Tsinghua University, Beijing, China
* Haixin Duan, Tsinghua University & Quancheng Laboratory, Beijing, China
* Min Yang, Fudan University, Shanghai, China
### 摘要
> 权威域名服务器被委派提供最终资源记录。由于DNS的安全性和稳健性对于互联网的正常运作至关重要，域名所有者需要部署多个候选域名服务器来实现流量负载均衡。一旦负载均衡机制被破坏，攻击者就可以操纵大量合法的DNS请求到指定的候选域名服务器。因此，不仅可能绕过用于过滤可能使受害域名服务器超负荷的恶意流量的防御机制，还可能降低DNS流量劫持和缓存中毒攻击的门槛。在这项研究中，我们报告了一类DNS漏洞，并提出了一种名为“Disablance”的新型攻击。我们提出的攻击允许攻击者以较低的成本秘密地破坏权威域名服务器的DNS负载均衡。仅通过执行少量精心设计的请求，攻击者就可以操纵给定的DNS解析器，以在一段时间内超载特定的权威服务器。因此，Disablance可以将所有托管域的良性DNS请求重定向到特定的域名服务器，并破坏负载均衡机制。上述攻击破坏了DNS解析的稳健性，并增加了单点故障的安全威胁。我们的广泛研究证明了Disablance的安全威胁是现实的且普遍存在的。首先，我们证明主流的DNS实现，包括BIND9、PowerDNS和Microsoft DNS，对Disablance是易受攻击的。其次，我们开发了一个测量框架，以测量野外易受攻击的权威服务器。我们证明了排名前1M的FQDN的22.24％和排名前1M的SLD的3.94％可能成为Disablance的受害者。我们的测量结果还显示，37.88％的稳定开放解析器和14个受欢迎的公共DNS服务中有10个可以被利用进行Disablance，包括Cloudflare和Quad9。此外，通过与一家世界领先的DNS服务提供商深入讨论，观察并确认了Disablance的关键安全威胁。我们已向受影响的供应商报告了发现的漏洞，并提供了建议。截至目前，腾讯云（DNSPod）和亚马逊已根据我们的建议采取了行动以解决此问题。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616647](https://doi.org/10.1145/3576915.3616647)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616647](https://dl.acm.org/doi/pdf/10.1145/3576915.3616647)
## TsuKing: Coordinating DNS Resolvers and Queries into Potent DoS Amplifiers.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#tsuking-coordinating-dns-resolvers-and-queries-into-potent-dos-amplifiers) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#tsuking-coordinating-dns-resolvers-and-queries-into-potent-dos-amplifiers)**
### 作者
* Wei Xu, Tsinghua University, Beijing, China
* Xiang Li, Tsinghua University, Beijing, China
* Chaoyi Lu, Tsinghua University, Beijing, China
* Baojun Liu, Tsinghua University, Beijing, China
* Haixin Duan, Tsinghua University & Quancheng Laboratory; Zhongguancun Laboratory, Beijing, China
* Jia Zhang, Tsinghua University & Zhongguancun Laboratory, Beijing, China
* Jianjun Chen, Tsinghua University & Zhongguancun Laboratory, Beijing, China
* Tao Wan, CableLabs, Louisville, CO, USA
### 摘要
> 在本文中，我们提出了一种名为TsuKing的新型DNS放大攻击。与利用独立的DNS解析器来实现放大效应不同，TsuKing巧妙地协调了大量易受攻击的DNS解析器和精心制作的查询，将它们组合在一起，形成强大的DoS放大器。我们证明了通过TsuKing，初始的小型放大因子可以在协调放大器的内部层面呈指数级增长，导致极其强大的放大攻击。TsuKing有三个变种，包括DNSRetry，DNSChain和DNSLoop，它们都利用了一套不一致的DNS实现来实现巨大的放大效应。通过全面的测量，我们发现约14.5%的130万个开放DNS解析器可能存在TsuKing的潜在漏洞。实际控制性评估表明，攻击者可以实现至少3700倍的数据包放大（DNSChain）。我们已向受影响的供应商报告了这些漏洞，并向他们提供了缓解建议。我们已经收到了6家供应商的积极回应，包括Unbound，MikroTik和AliDNS，并分配了3个CVE编号。其中一些供应商正在实施我们的建议。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616668](https://doi.org/10.1145/3576915.3616668)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616668](https://dl.acm.org/doi/pdf/10.1145/3576915.3616668)
## Under the Dark: A Systematical Study of Stealthy Mining Pools (Ab)use in the Wild.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#under-the-dark-a-systematical-study-of-stealthy-mining-pools-ab-use-in-the-wild) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#under-the-dark-a-systematical-study-of-stealthy-mining-pools-ab-use-in-the-wild)**
### 作者
* Zhenrui Zhang, Tsinghua University & QI-ANXIN Technology Research Institute, Beijing, China
* Geng Hong, Fudan University, Shanghai, China
* Xiang Li, Tsinghua University, Beijing, China
* Zhuoqun Fu, Tsinghua University, Beijing, China
* Jia Zhang, Tsinghua University & Zhongguancun Laboratory, Beijing, China
* Mingxuan Liu, Tsinghua University & Zhongguancun Laboratory, Beijing, China
* Chuhan Wang, Tsinghua University, Beijing, China
* Jianjun Chen, Tsinghua University & Zhongguancun Laboratory, Beijing, China
* Baojun Liu, Tsinghua University & Zhongguancun Laboratory, Beijing, China
* Haixin Duan, Tsinghua University & Quancheng Laboratory, Beijing, China
* Chao Zhang, Tsinghua University & Zhongguancun Laboratory, Beijing, China
* Min Yang, Fudan University, Shanghai, China
### 摘要
> 加密货币挖矿是区块链中至关重要的操作，矿工通常加入挖矿池以增加获得奖励的机会。然而，PoW加密货币挖矿高能耗的特性导致其在美国纽约州、中国和印度被禁止。因此，作为挖矿活动的中央枢纽，挖矿池成为监管执法的主要目标。此外，加密货币挖矿恶意软件指的是自己拥有的隐秘挖矿池，以逃避检测技术并隐藏收益钱包地址。然而，由于缺乏对隐秘挖矿池协议实现、使用和端口分布的全面理解，目前尚未进行系统的研究来分析它。据我们所知，我们进行了第一次大规模和长期的隐秘挖矿池测量研究，以填补这一空白。我们报告了59个国家中的7,629个隐秘挖矿池。此外，我们研究了隐秘挖矿池的内部机制。通过检查19,601个隐秘挖矿池域名和IP，我们的分析显示，隐秘挖矿池精心制作其域名语义、协议支持和寿命，以提供地下、用户友好和强大的挖掘服务。更糟糕的是，我们发现隐秘挖矿池与恶意软件之间存在强烈的相关性，其中23.3%被标记为恶意的。此外，我们评估了用于逃避最先进的挖矿检测的技巧，包括迁移域名解析方法、利用僵尸网络和启用TLS加密。最后，我们进行了定性研究，从内部人员的角度评估了通过隐秘挖矿池进行恶意加密货币挖矿活动的利润收益。我们的结果表明，犯罪分子有潜力每年赚取超过100万美元，并以2,750%的平均投资回报率自豪。我们已向相关ISP通报了揭示的隐秘挖矿池，并收到了他们的确认。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616677](https://doi.org/10.1145/3576915.3616677)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616677](https://dl.acm.org/doi/pdf/10.1145/3576915.3616677)
## Travelling the Hypervisor and SSD: A Tag-Based Approach Against Crypto Ransomware with Fine-Grained Data Recovery.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#travelling-the-hypervisor-and-ssd-a-tag-based-approach-against-crypto-ransomware-with-fine-grained-data-recovery) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#travelling-the-hypervisor-and-ssd-a-tag-based-approach-against-crypto-ransomware-with-fine-grained-data-recovery)**
### 作者
* Boyang Ma, Xidian University, Xi'an, China
* Yilin Yang, Xidian University, Xi'an, China
* Jinku Li, Xidian University, Xi'an, China
* Fengwei Zhang, Southern University of Science and Technology, Shenzhen, China
* Wenbo Shen, Zhejiang University, Hangzhou, China
* Yajin Zhou, Zhejiang University, Hangzhou, China
* Jianfeng Ma, Xidian University, Xi'an, China
### 摘要
> 勒索软件已经从一种经济上的困扰演变为国家安全威胁，对用户构成重大风险。为了解决这个问题，我们提出了RansomTag，这是一种基于标签的针对加密勒索软件的精细数据恢复方法。与最先进的基于SSD的解决方案相比，RansomTag在三个方面取得了进展。首先，它将勒索软件检测功能与SSD固件分离，并集成到Type I轻量级虚拟化监控程序中。因此，它可以利用主机系统强大的计算能力和从操作系统内部获取的丰富上下文信息，实现对勒索软件攻击的准确检测，并防御对SSD特性的潜在有针对性的攻击。此外，由于其半直通架构，RansomTag可以轻松部署到台式个人电脑上。其次，RansomTag通过我们提出的基于标签的方法弥合了虚拟化监控程序和SSD之间的语义差距。第三，RansomTag能够保留被勒索软件覆盖或删除的100%用户数据，并根据时间戳将任意单个或多个用户文件恢复到任何版本。为了验证我们的方法，我们实现了一个RansomTag的原型，并收集了3,123个最近的勒索软件样本进行评估。评估结果显示，我们的原型能够在最小规模数据备份和可接受的性能开销下有效保护用户数据。此外，所有被攻击的文件都可以进行精细恢复。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616665](https://doi.org/10.1145/3576915.3616665)
## Threshold Signatures from Inner Product Argument: Succinct, Weighted, and Multi-threshold.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#threshold-signatures-from-inner-product-argument-succinct-weighted-and-multi-threshold) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#threshold-signatures-from-inner-product-argument-succinct-weighted-and-multi-threshold)**
### 作者
* Sourav Das, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Philippe Camacho, Espresso Systems, Menlo Park, CA, USA
* Zhuolun Xiang, Aptos Labs, Palo Alto, CA, USA
* Javier Nieto, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Benedikt Bünz, Espresso Systems, Menlo Park, CA, USA
* Ling Ren, University of Illinois at Urbana-Champaign, Urbana, IL, USA
### 摘要
> 门限签名通过将签名密钥分享给一组签名者来保护其安全性，使得敌方必须腐败掉门限数量的签名者才能伪造签名。然而，现有的具有简洁签名和常数验证时间的门限签名在存在签名者具有不同权重的情况下无法正常工作。这种具有权重的设置在去中心化系统中变得越来越重要，特别是在权益证明的区块链中。本文提出了一种适用于配对和离散对数基础密码系统的门限签名新范式。我们的方案具有一个仅包含7个群元素的紧凑验证密钥，以及一个由8个群元素组成的签名。验证该签名需要8次指数运算和8个双线性配对运算。我们的方案支持签名者之间的任意权重分配和任意门限。它需要在通用tau幂预处理之后进行非交互式预处理。我们在代数群模型中证明了我们方案的安全性，并使用Golang实现了该方案。我们的评估结果表明，与标准的（无权重）门限签名相比，我们的方案实现了相当的签名大小和验证时间。与现有的多重签名方案相比，我们的方案具有更小的公共验证密钥。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623096](https://doi.org/10.1145/3576915.3623096)
## Post Quantum Fuzzy Stealth Signatures and Applications.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#post-quantum-fuzzy-stealth-signatures-and-applications) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#post-quantum-fuzzy-stealth-signatures-and-applications)**
### 作者
* Sihang Pu, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Sri AravindaKrishnan Thyagarajan, NTT Research, Palo Alto, USA
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
### 摘要
> 区块链加密货币中的私人支付是一个自比特币问世以来，学术界和工业界一直研究的话题。隐身地址支付被提出作为改善用户支付隐私的解决方案，事实上，在今天的几个主要加密货币中已经得到应用。该机制允许用户接收支付，以使得这些支付彼此之间或收款者之间没有关联。目前已知的隐身地址机制要么（1）在某些合理对抗模型下不安全，要么（2）在实践中效率低下，或者（3）与许多现有的货币不兼容。在这项研究中，我们将该机制的底层密码抽象形式化为具有形式化基于游戏定义的隐身签名。我们展示了该概念在快速身份在线（FIDO）标准中无密码身份验证中的惊人应用。然后，我们介绍了SPIRIT，它是基于NIST标准化签名和密钥封装方案Dilithium和Kyber的第一个高效后量子安全的隐身签名构造。SPIRIT的基本形式只能在弱安全模型下保持安全性，但是我们提供了一个保持效率且通用的转换，将SPIRIT的安全性提升到本研究定义的最强安全概念。与现有技术相比，签名大小约提高了3.37倍，同时保持签名和验证的效率为0.2毫秒。我们通过引入一种模糊追踪功能扩展了SPIRIT，接收者可以将对传入交易的追踪外包给跟踪服务器，满足与"模糊消息检测"（FMD）类似的匿名概念，该概念最近在 [CCS 2021] 中引入。我们还将SPIRIT扩展为一种新的模糊追踪框架，称为可扩展模糊追踪，该框架可以视为FMD的对偶，它将跟踪服务器的计算工作量降低为用户数量的亚线性，而不是线性。实验结果表明，对于数百万用户，服务器仅需要3.4毫秒来过滤每个传入消息，这是对现有技术的显着改进。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623148](https://doi.org/10.1145/3576915.3623148)
## Chipmunk: Better Synchronized Multi-Signatures from Lattices.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#chipmunk-better-synchronized-multi-signatures-from-lattices) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#chipmunk-better-synchronized-multi-signatures-from-lattices)**
### 作者
* Nils Fleischhacker, Ruhr University Bochum, Bochum, Germany
* Gottfried Herold, Ethereum Foundation, Bonn, Germany
* Mark Simkin, Ethereum Foundation, Aarhus, Denmark
* Zhenfei Zhang, Ethereum Foundation, Boston, MA, USA
### 摘要
> 多重签名允许将由独立密钥生成的相同消息的许多签名压缩为一个小的聚合签名。这个原语在基于权益证明的区块链，比如以太坊，中非常有用，因为同一个区块由许多签名者签署，他们为该区块的有效性提供担保。能够将同一个区块的所有签名压缩为一个短字符串，显著降低了链上存储成本，这是区块链的一项重要效率指标。在这项工作中，我们考虑了同步设置中的多重签名，即签名算法接受一个额外的时间参数作为输入，并且只要求同一时间步的签名是可聚合的。同步设置比一般的多重签名设置更简单，但对于大多数与区块链相关的应用来说已经足够，因为签名者自然地通过链的长度进行同步。我们提出了一种具体有效的基于格的同步设置多重签名方案Chipmunk，可以对预先限定数量的消息进行签名。Chipmunk允许非交互式地聚合签名，并对恶意密钥攻击具有安全性保证。该构造可能对量子对手具有安全性保证，因为我们的安全性依赖于假设的短整数解难题的困难性。我们在此设置中显著改进了之前由Fleischhacker，Simkin，Zhang（CCS 2022）所知的最佳构造。我们的聚合签名大小是之前的5倍小，并且对于112位安全性，我们的构造允许将8192个单独的签名压缩为小于200 KB的多重签名。我们提供了Chipmunk的完整实现，并提供了对我们构造效率的广泛基准测试。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623219](https://doi.org/10.1145/3576915.3623219)
## AIM: Symmetric Primitive for Shorter Signatures with Stronger Security.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#aim-symmetric-primitive-for-shorter-signatures-with-stronger-security) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#aim-symmetric-primitive-for-shorter-signatures-with-stronger-security)**
### 作者
* Seongkwang Kim, Samsung SDS, Seoul, Republic of Korea
* Jincheol Ha, KAIST, Daejeon, Republic of Korea
* Mincheol Son, KAIST, Daejeon, Republic of Korea
* Byeonghak Lee, Samsung SDS, Seoul, Republic of Korea
* Dukjae Moon, Samsung SDS, Seoul, Republic of Korea
* Joohee Lee, Sungshin Women's University, Seoul, Republic of Korea
* Sangyub Lee, Samsung SDS, Seoul, Republic of Korea
* Jihoon Kwon, Samsung SDS, Seoul, Republic of Korea
* Jihoon Cho, Samsung SDS, Seoul, Republic of Korea
* Hyojin Yoon, Samsung SDS, Seoul, Republic of Korea
* Jooyoung Lee, KAIST, Daejeon, Republic of Korea
### 摘要
> 基于MPC-in-the-Head（MPCitH）范式的后量子签名方案最近受到了广泛关注，因为它们的安全性完全依赖于底层原语的单向性，为后量子密码学中的困难假设提供了多样性。最近设计了MPCitH友好的密码算法，它们使用在大域上操作的简单代数S盒，以提高所得到的签名方案的性能。由于它们具有简单的代数结构，对它们在代数攻击下的安全性应该进行全面研究。在本文中，我们对二进制扩展域上基于幂映射的S盒和基于这种S盒的密码原语进行了代数密码分析的改进。特别是，在ⅇ2上进行Gröbner基础攻击时，我们通过实验证明，从底层S盒获得的布尔二次方程的确切数量对于根据正则度计算出的理论复杂性的准确估计至关重要。类似地，如果能够找到并使用所有可能的二次方程来自S盒，那么XL攻击可能会更快。这种改进的密码分析方法可以更精确地对基于代数S盒的密码原语进行代数分析。考虑到改进的代数密码分析，我们提出了一种新的单向函数，称为AIM，作为一种MPCitH友好的对称原语，具有很高的抵抗代数攻击的能力。AIM的安全性经过了对代数、统计、量子以及通用攻击进行了全面分析。AIM与BN++证明系统相结合，形成了一种新的签名方案，称为AIM。我们的实现表明，在签名尺寸和签名时间方面，AIM的性能优于基于对称原语的现有签名方案。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616579](https://doi.org/10.1145/3576915.3616579)
## FINER: Enhancing State-of-the-art Classifiers with Feature Attribution to Facilitate Security Analysis.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#finer-enhancing-state-of-the-art-classifiers-with-feature-attribution-to-facilitate-security-analysis) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#finer-enhancing-state-of-the-art-classifiers-with-feature-attribution-to-facilitate-security-analysis)**
### 作者
* Yiling He, Zhejiang University, Hangzhou, China
* Jian Lou, Zhejiang University, Hangzhou, China
* Zhan Qin, Zhejiang University, Hangzhou, China
* Kui Ren, Zhejiang University, Hangzhou, China
### 摘要
> 深度学习分类器在各种风险检测应用中取得了最先进的性能。它们探索丰富的语义表示，并应该能够自动发现风险行为。然而，由于缺乏透明度，行为语义无法传达给下游安全专家，以减少他们在安全分析中的工作量。虽然特征归因（FA）方法可以用来解释深度学习，但底层分类器仍然对可疑行为是什么视而不见，生成的解释也不能适应下游任务，导致解释的真实性和可理解性较差。在本文中，我们提出了FINER，这是一种为风险检测分类器生成高真实性和高可理解性解释的框架。高层思想是从模型开发者、FA设计者和安全专家中汇集解释的努力。为了提高真实性，我们使用解释引导的多任务学习策略对分类器进行微调。为了提高可理解性，我们利用任务知识来调整和集成FA方法。大量的评估结果显示，FINER提高了风险检测的解释质量。此外，我们证明FINER在促进恶意软件分析方面胜过了一种最先进的工具。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616599](https://doi.org/10.1145/3576915.3616599)
## Good-looking but Lacking Faithfulness: Understanding Local Explanation Methods through Trend-based Testing.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#good-looking-but-lacking-faithfulness-understanding-local-explanation-methods-through-trend-based-testing) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#good-looking-but-lacking-faithfulness-understanding-local-explanation-methods-through-trend-based-testing)**
### 作者
* Jinwen He, SKLOIS, IIE, CAS & School of Cyber Security, UCAS, Beijing, China
* Kai Chen, SKLOIS, IIE, CAS & School of Cyber Security, UCAS, Beijing, China
* Guozhu Meng, SKLOIS, IIE, CAS & School of Cyber Security, UCAS, Beijing, China
* Jiangshan Zhang, SKLOIS, IIE, CAS & School of Cyber Security, UCAS, Beijing, China
* Congyi Li, SKLOIS, IIE, CAS & School of Cyber Security, UCAS, Beijing, China
### 摘要
> 尽管深度学习（DL）带来了巨大的成就，但人们对DL模型所做的决策也感到担忧，因为DL模型的高非线性程度使得决策极其难以理解。因此，对抗性攻击等攻击很容易实施，但很难检测和解释，这导致了对解释模型决策的本地解释方法的研究热潮。在本文中，我们评估了解释方法的可信度，并发现传统的可信度测试遇到了随机优势问题，即随机选择表现最好，特别是对于复杂数据而言。为了进一步解决这个问题，我们提出了三种基于趋势的可信度测试，并通过实验证明新的趋势测试可以更好地评估图像、自然语言和安全任务上的可信度，我们实施了评估系统并评估了十种流行的解释方法。得益于趋势测试，我们首次成功评估了复杂数据上的解释方法，带来了前所未有的发现，并激发了未来的研究。下游任务也因此受益匪浅。例如，配备有可信解释方法的模型调试在检测和纠正准确性和安全问题方面表现更好。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616605](https://doi.org/10.1145/3576915.3616605)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616605](https://dl.acm.org/doi/pdf/10.1145/3576915.3616605)
## FaceReader: Unobtrusively Mining Vital Signs and Vital Sign Embedded Sensitive Info via AR/VR Motion Sensors.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#facereader-unobtrusively-mining-vital-signs-and-vital-sign-embedded-sensitive-info-via-ar-vr-motion-sensors) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#facereader-unobtrusively-mining-vital-signs-and-vital-sign-embedded-sensitive-info-via-ar-vr-motion-sensors)**
### 作者
* Tianfang Zhang, Rutgers University, New Brunswick, USA
* Zhengkun Ye, Temple University, Philadelphia, USA
* Ahmed Tanvir Mahdad, Texas A&M University, College Station, USA
* Md Mojibur Rahman Redoy Akanda, Texas A&M University, College Station, USA
* Cong Shi, New Jersey Institute of Technology, Newark, USA
* Yan Wang, Temple University, Philadelphia, USA
* Nitesh Saxena, Texas A&M University, College Station, USA
* Yingying Chen, Rutgers University, New Brunswick, USA
### 摘要
> 增强现实（AR）和虚拟现实（VR）市场规模近年来迅速扩大，面部护目镜的使用已经超越游戏领域，延伸至教育、医疗和军事等各个应用领域。尽管增长迅速，但对于通过传感器丰富的头戴式设备泄露信息的理解还处于初级阶段。一些内置传感器无需用户许可即可访问，并且任何应用程序和网站都可以获取它们的读数。尽管这些未受限制的传感器通常被认为不会带来隐私风险，但我们发现，通过仔细检查传感器读数，攻击者可以揭示私人信息，使现有的AR/VR应用程序和网站成为潜在的窃听者。在这项工作中，我们研究了一种名为FaceReader的新型、不显眼的隐私攻击，它基于无限制的AR/VR运动传感器重建高质量的生命体征信号（呼吸和心跳模式）。FaceReader建立在一个关键洞察力上：护目镜紧贴在用户脸部，使运动传感器能够检测到用户呼吸和心跳产生的微妙面部振动。基于重建的生命体征，我们进一步研究了三种更高级的攻击方式，包括性别识别、用户重新识别和身体脂肪比例估算。这些攻击带来了严重的隐私问题，因为攻击者可能获取到用户敏感的人口统计/生理特征，并有可能揭示其真实身份。与依赖语音和活动的以往隐私攻击相比，FaceReader针对的是由人体自然产生的无意识呼吸和心跳活动，对受害者来说不会引起注意。特别地，我们设计了一个自适应滤波器来动态减轻身体运动的影响。我们还采用了先进的深度学习技术来重建生命体征信号，其信号质量与专用医疗仪器相当，并且可以得出敏感的性别、身份和体脂信息。我们进行了涉及35名用户、在3个月内使用三种主流AR/VR头戴式设备的大量实验证明。结果显示，FaceReader能够以较低的平均误差重建生命体征信号，并准确地检测性别（超过93.33%的准确率）。该攻击还可以在不同的应用程序、网站和长期会话中以超过97.83%的准确性连接/重新识别用户。此外，我们还首次成功地尝试从运动传感器数据中揭示身体脂肪信息，使估算误差显著降低至4.43%。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623102](https://doi.org/10.1145/3576915.3623102)
## AntiFake: Using Adversarial Audio to Prevent Unauthorized Speech Synthesis.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#antifake-using-adversarial-audio-to-prevent-unauthorized-speech-synthesis) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#antifake-using-adversarial-audio-to-prevent-unauthorized-speech-synthesis)**
### 作者
* Zhiyuan Yu, Washington University in St. Louis, St. Louis, MO, USA
* Shixuan Zhai, Washington University in St. Louis, St. Louis, MO, USA
* Ning Zhang, Washington University in St. Louis, St. Louis, MO, USA
### 摘要
> 深度神经网络和生成式人工智能的快速发展，促进了逼真语音合成技术的增长。尽管这项技术有很大潜力改善生活，但也导致了“DeepFake”的出现，合成语音可以被滥用以欺骗人类和机器，用于不正当目的。针对这一不断演变的威胁，人们对于抵御DeepFake的兴趣日益增加。除了现有的工作外，我们提出采取预防性方法并引入AntiFake，这是一种依赖于对抗样本来预防未授权语音合成的防御机制。为了确保可适用于攻击者未知的合成模型，我们采用集成学习方法来提高优化过程的泛化能力。为了验证所提出系统的有效性，我们使用真实世界的DeepFake语音样本，对AntiFake与五款最先进的合成器进行了评估。实验结果表明，即使对于未知的黑箱模型，AntiFake的保护率超过95%。我们还进行了可用性测试，涉及24名参与者，以确保解决方案对于多样化人群的可访问性。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623209](https://doi.org/10.1145/3576915.3623209)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623209](https://dl.acm.org/doi/pdf/10.1145/3576915.3623209)
## Themis: Fast, Strong Order-Fairness in Byzantine Consensus.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#themis-fast-strong-order-fairness-in-byzantine-consensus) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#themis-fast-strong-order-fairness-in-byzantine-consensus)**
### 作者
* Mahimna Kelkar, Cornell Tech, New York, NY, USA
* Soubhik Deb, University of Washington Seattle, Seattle, WA, USA
* Sishan Long, Cornell Tech, New York, NY, USA
* Ari Juels, Cornell Tech, New York, NY, USA
* Sreeram Kannan, University of Washington Seattle, Seattle, WA, USA
### 摘要
> 我们介绍了Themis，这是一种用于(受许可)拜占庭共识协议中引入公平排序交易的方案，其中在n≥4ƒ+1的ƒ个故障节点中。Themis强制执行了迄今为止提出的最强公平排序概念。与先前具有相同公平排序属性的工作相比，它也实现了标准的活跃性，而不是较弱的。我们通过实验证明，Themis可以与最先进的共识协议集成，只需进行最小修改或性能开销。此外，我们引入了一套通用的实验来评估各种公平排序概念的实际强度以及公平排序协议对对抗性操纵的抵抗能力。我们使用这套实验结果展示了Themis所强制执行的公平排序概念在实践中比竞争系统更为有效。我们相信Themis在实践中提供了强大的保护，可以抵御许多目前影响常用智能合约系统的交易排序攻击，如前运行和后运行等。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616658](https://doi.org/10.1145/3576915.3616658)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616658](https://dl.acm.org/doi/pdf/10.1145/3576915.3616658)
## Towards Practical Sleepy BFT.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#towards-practical-sleepy-bft) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#towards-practical-sleepy-bft)**
### 作者
* Dahlia Malkhi, Chainlink Labs, San Francisco, CA, USA
* Atsuki Momose, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Ling Ren, University of Illinois at Urbana-Champaign, Urbana, IL, USA
### 摘要
> 比特币的最长链协议开创了一种在动态参与下的共识机制，也被称为"沉睡共识"，在此机制下，节点无需持续活跃。然而，现有的沉睡共识解决方案仍然面临两个主要问题，我们在这项工作中进行了探讨。首先，现有的沉睡共识协议具有高延迟（无论是渐进还是具体的）。我们解决了这个问题，在最佳情况下实现了4Δ的延迟（Δ是网络延迟的上限），这与不支持动态参与的经典BFT协议相当。其次，由于一个我们称之为"无成本模拟"的问题，现有的协议必须假设腐败参与者的集合在协议的整个生命周期内保持不变。我们解决了这个问题，并支持腐败节点的增长参与。我们的新协议还提供了其他几个重要的优点，包括支持诚实参与的任意波动以及为新的活跃节点提供高效的恢复机制。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623073](https://doi.org/10.1145/3576915.3623073)
## ParBFT: Faster Asynchronous BFT Consensus with a Parallel Optimistic Path.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#parbft-faster-asynchronous-bft-consensus-with-a-parallel-optimistic-path) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#parbft-faster-asynchronous-bft-consensus-with-a-parallel-optimistic-path)**
### 作者
* Xiaohai Dai, Huazhong University of Science and Technology, Wuhan, China
* Bolin Zhang, Zhejiang University, Hangzhou, China
* Hai Jin, Huazhong University of Science and Technology, Wuhan, China
* Ling Ren, University of Illinois at Urbana-Champaign, Urbana, USA
### 摘要
> 为了减少异步拜占庭容错（BFT）共识的延迟和通信开销，通常会添加一条乐观路径，Ditto和BDT是当前领先的代表。这些协议首先尝试运行一条乐观路径，通常是从部分同步BFT中改编而来，并在正常情况下保证良好的性能。如果乐观路径无法取得进展，这些协议在超时后会切换到悲观路径，以保证在异步网络中的活力。这种设计至关重要地依赖于网络延迟Δ的准确估计，以正确设置超时参数。对Δ的错误估计可能导致过早或延迟地切换到悲观路径，在两种情况下都会损害协议的效率。为了解决上述问题，我们提出了ParBFT，它采用了并行乐观路径。只要乐观路径的领导者没有错误，ParBFT确保低延迟而无需准确估计网络延迟。我们提出了两个ParBFT的变体，即ParBFT1和ParBFT2，它们在延迟和通信之间进行权衡。ParBFT1同时启动了两条路径，在领导者错误的情况下实现了更低的延迟，但即使在正常情况下也具有二次消息复杂度。ParBFT2通过延迟悲观路径来降低正常情况下的消息复杂度，但以更高的延迟为代价。实验结果表明，ParBFT优于Ditto或BDT。尤其是在网络状况不好时，ParBFT可以通过乐观路径达成共识，而Ditto和BDT则需要进行路径切换并通过悲观路径取得进展。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623101](https://doi.org/10.1145/3576915.3623101)
## Abraxas: Throughput-Efficient Hybrid Asynchronous Consensus.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#abraxas-throughput-efficient-hybrid-asynchronous-consensus) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#abraxas-throughput-efficient-hybrid-asynchronous-consensus)**
### 作者
* Erica Blum, Reed College, Portland, OR, USA
* Jonathan Katz, University of Maryland, College Park, MD, USA
* Julian Loss, CISPA Helmoltz Center for Information Security, Saarbrücken, Germany
* Kartik Nayak, Duke University, Durham, NC, USA
* Simon Ochsenreither, Saarland University, Saarbrücken, Germany
### 摘要
> 状态机复制（SMR）的协议通常为了网络延迟容忍性而牺牲性能。特别地，异步SMR的协议可以容忍任意的网络延迟，但在网络快速时会牺牲吞吐量/延迟，而部分同步的协议在网络快速时表现良好，但在网络经历高延迟时无法取得进展。现有的混合协议在网络经常在快速和慢速之间切换，例如在通常快速但有间断消息延迟的网络，它们对任意网络延迟具有韧性并且在网络快速时具有良好的性能，但是会受到高开销（‘’抖动‘’）的困扰。我们提出了Abraxas，这是一种从任何“快速”协议Πfast和异步协议Πslow构建混合协议的通用方法，以实现（1）在任意网络行为下与Πslow相当的安全性和性能，以及（2）在条件有利时与Πfast相当的性能。我们利用目前最好的Πfast（Jolteon）和Πslow（\mbox2-chain VABA）协议实现了Abraxas，并通过实验证明所得到的协议在性能上显著优于之前的最先进混合协议Ditto。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623191](https://doi.org/10.1145/3576915.3623191)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623191](https://dl.acm.org/doi/pdf/10.1145/3576915.3623191)
## Ou: Automating the Parallelization of Zero-Knowledge Protocols.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#ou-automating-the-parallelization-of-zero-knowledge-protocols) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#ou-automating-the-parallelization-of-zero-knowledge-protocols)**
### 作者
* Yuyang Sang, Yale University, New Haven, USA
* Ning Luo, Northwestern University, Evanston, USA
* Samuel Judson, Yale University, New Haven, USA
* Ben Chaimberg, Yale University, New Haven, USA
* Timos Antonopoulos, Yale University, New Haven, USA
* Xiao Wang, Northwestern University, Evanston, USA
* Ruzica Piskac, Yale University, New Haven, USA
* Zhong Shao, Yale University, New Haven, USA
### 摘要
> 零知识证明（ZKP）是一种强大的密码原语，在许多去中心化或隐私保护应用中使用。然而，ZKP的高开销可能限制其实际适用性。我们设计了一种名为Ou的编程语言，旨在减轻程序员在编写高效ZKP时的负担，并设计了一个名为Lian的编译器框架，该框架自动分析和分发语句到计算集群。Ou使用编程语言语义、形式方法和组合优化，将Ou程序自动划分为适当大小的块，用于并行ZK证明和/或验证。我们的贡献包括：（1）一个前端语言，用户可以使用熟悉的语法编写证明语句的命令式程序；（2）一个编译器架构和实现，它自动分析程序并将其编译为优化后的IR，可以转换为各种ZKP结构；（3）一种基于伪布尔优化和整数线性规划的切割算法，重新排序指令，然后将程序分割为适当大小的块以进行并行评估和高效状态协调。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616621](https://doi.org/10.1145/3576915.3616621)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616621](https://dl.acm.org/doi/pdf/10.1145/3576915.3616621)
## Black Ostrich: Web Application Scanning with String Solvers.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#black-ostrich-web-application-scanning-with-string-solvers) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#black-ostrich-web-application-scanning-with-string-solvers)**
### 作者
* Benjamin Eriksson, Chalmers University of Technology, Gothenburg, Sweden
* Amanda Stjerna, Uppsala University, Uppsala, Sweden
* Riccardo De Masellis, Uppsala University, Uppsala, Sweden
* Philipp Rüemmer, University of Regensburg & Uppsala University, Regensburg, Germany
* Andrei Sabelfeld, Chalmers University of Technology, Gothenburg, Sweden
### 摘要
> 确保网络应用的安全性仍然是一项紧迫的挑战。遗憾的是，网络爬虫和安全扫描的最新技术仍无法进行深度爬行。主要的难题在于当网络应用需要某种格式的数据，如电子邮件，电话号码，或邮政编码时，爬虫在通过输入验证检查方面的能力有限。本文开发了一种名为Black Ostrich的原则性深度网络爬行和扫描方法。关键的想法是配备网络爬虫具有字符串约束求解能力，以便从网络应用中的正则表达式模式动态推断合适的输入，从而通过输入验证检查。为了开启这种对约束求解器的使用，我们开发了新的基于自动机的技术来处理JavaScript的正则表达式。我们将Ostrich约束求解器与Black Widow网络爬虫进行扩展和结合，实现了我们的方法。我们对来自于2021年7月Common Crawl和Tranco前100K的组合中收集的21667978个表格中的8820个独特验证模式集进行了Black Ostrich的评价。对于这些表单和对应于模式的输入元素的重构，我们演示了Black Ostrich相对于最先进的扫描器平均的36%能实现99%的表单验证覆盖率。此外，使用这些模式的66377个域中，我们对66309个（99%）解决了所有的模式，而其他扫描器的联合努力覆盖了52632个（79%）。我们进一步发现，通过在三种开源应用上进行评估，我们的方法可以增强覆盖率。我们的经验研究包括对电子邮件验证模式的研究，我们发现825个发现的电子邮件验证模

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616582](https://doi.org/10.1145/3576915.3616582)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616582](https://dl.acm.org/doi/pdf/10.1145/3576915.3616582)
## Comparse: Provably Secure Formats for Cryptographic Protocols.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#comparse-provably-secure-formats-for-cryptographic-protocols) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#comparse-provably-secure-formats-for-cryptographic-protocols)**
### 作者
* Théophile Wallez, Inria, Paris, France
* Jonathan Protzenko, Microsoft Research, Redmond, WA, USA
* Karthikeyan Bhargavan, Inria and Cryspen, Paris, France
### 摘要
> 历史上，密码协议中使用的数据格式一直是许多攻击的源头，但它们的安全保证一直未得到深入研究。原因之一是由于它们的底层性质，格式通常不符合安全模型。另一个原因是通过手动研究一个协议中所有格式的所有用途太困难，需要一个全面的自动化框架。我们提出了一个新的框架名为“Comparse”，专门用于加密协议中数据格式的安全分析。Comparse强制协议分析员系统地思考数据格式，将其确切形式化，并显示它们具有足够强大的属性以保证协议的安全性。我们的方法论分为三个步骤。首先，我们引入了一个高级密码API，将基于比特串的传统基于游戏的密码假设扩展到使用格式的高级消息，从而使我们能够推导出保证格式使用安全所必须遵守的条件。其次，根据这些安全准则，我们在F*证明助手中实现了一个用于指定和验证安全格式的框架。我们的方法基于格式组合子，实现了组合和模块化证明。在许多情况下，我们通过使用Meta-F*进行编译时术语合成，减轻了用户手工编写这些组合子的负担。最后，我们展示了我们的F*实现可以替换以前在DY*协议分析框架中实现的符号化消息格式的概念。我们对格式的位级精确计数弥合了建模差距，并使DY*能够推理具体消息并识别以前忽视的协议缺陷。我们对几个经典和现实世界的协议进行了Comparse评估。我们最大的案例研究使用Comparse对TLS 1.3以及即将到来的协议如MLS和Compact TLS 1.3（cTLS）中使用的格式进行形式化和安全证明，为这些协议的设计提供了信心和反馈。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623201](https://doi.org/10.1145/3576915.3623201)
## Exploration of Power Side-Channel Vulnerabilities in Quantum Computer Controllers.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#exploration-of-power-side-channel-vulnerabilities-in-quantum-computer-controllers) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#exploration-of-power-side-channel-vulnerabilities-in-quantum-computer-controllers)**
### 作者
* Chuanqi Xu, Yale University, New Haven, CT, USA
* Ferhat Erata, Yale University, New Haven, CT, USA
* Jakub Szefer, Yale University, New Haven, CT, USA
### 摘要
> 快速增长的量子计算领域引发了对保护这些计算机免受各种物理攻击的重要性的广泛关注。随着量子比特数量的不断增加和量子计算机精度的提高，这些计算机能够运行具有极高敏感知识产权的新型算法具有巨大潜力。然而，在现今基于云的量子计算机环境中，用户无法对计算机进行实际控制。恶意内部人员在数据中心执行的物理攻击可能被用来获取有关这些计算机上执行的电路的敏感信息。本研究展示了对量子计算机中基于功耗的侧信道攻击的首次探索和研究。所探索的攻击可以用于恢复与这些计算机发送的控制脉冲相关的信息。通过分析这些控制脉冲，攻击者可以逆向工程出等效的门级描述电路以及正在运行的算法或嵌入到电路中的数据。本研究介绍了五种新型攻击类型，并使用基于云的量子计算机上可用的控制脉冲信息对其进行评估。本研究展示了可以恢复哪些电路以及如何通过新证明的量子计算系统侧信道攻击进行防御。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623118](https://doi.org/10.1145/3576915.3623118)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623118](https://dl.acm.org/doi/pdf/10.1145/3576915.3623118)
## Securing NISQ Quantum Computer Reset Operations Against Higher Energy State Attacks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#securing-nisq-quantum-computer-reset-operations-against-higher-energy-state-attacks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#securing-nisq-quantum-computer-reset-operations-against-higher-energy-state-attacks)**
### 作者
* Chuanqi Xu, Yale University, New Haven, CT, USA
* Jessie Chen, Yale University, New Haven, CT, USA
* Allen Mi, Yale University, New Haven, CT, USA
* Jakub Szefer, Yale University, New Haven, CT, USA
### 摘要
> 实现不同用户之间对量子计算机的共享需要一个安全复位操作，该操作可以将量子比特的状态重置为基态|0>并防止状态泄漏到后续复位电路中。本研究指出，超导量子比特NISQ量子计算机中现有的复位操作并非完全安全。具体而言，本研究首次展示了一种新型的高能级状态攻击。尽管NISQ量子计算机通常被抽象为只使用能级|0>和|1>进行运算，但本研究表明，非特权用户可以将量子比特的状态设置为|2>或|3>。通过打破二能级系统的抽象，新型的高能级状态攻击可以对电路的运算产生影响，或者用于电路之间的隐蔽通信。本研究显示，常见的复位协议无法将量子比特从高能级状态重置为基态。为提供防御措施，本研究提出了一种新型级联安全复位（CSR）操作。CSR能够在不进行硬件修改的情况下，高效可靠地将高能级状态重置回|0>。相较于默认退相干复位，CSR能够降低|3>初始化状态泄漏通道容量1至2个数量级，并且速度提升了25倍。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623104](https://doi.org/10.1145/3576915.3623104)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623104](https://dl.acm.org/doi/pdf/10.1145/3576915.3623104)
## Watch This Space: Securing Satellite Communication through Resilient Transmitter Fingerprinting.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#watch-this-space-securing-satellite-communication-through-resilient-transmitter-fingerprinting) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#watch-this-space-securing-satellite-communication-through-resilient-transmitter-fingerprinting)**
### 作者
* Joshua Smailes, University of Oxford, Oxford, United Kingdom
* Sebastian Köhler, University of Oxford, Oxford, United Kingdom
* Simon Birnbach, University of Oxford, Oxford, United Kingdom
* Martin Strohmeier, armasuisse Science + Technology, Thun, Switzerland
* Ivan Martinovic, University of Oxford, Oxford, United Kingdom
### 摘要
> 由于廉价现成的无线电硬件的可用性增加，对卫星地面系统进行信号欺骗和回放攻击变得比以往更加容易。这对于许多不提供加密安全性且无法修补以支持新安全措施的传统系统来说尤为成问题。因此，在本文中，我们研究了卫星系统中的无线电发射机识别。我们引入了SatIQ系统，提出了使用下行无线电信号的发射机硬件特性表达的干扰来进行传输的身份验证的新技术。我们特别关注高采样率的指纹识别，使得设备指纹在没有类似高采样率发射硬件的情况下很难伪造，从而提高了欺骗和回放攻击所需的预算。我们还研究了在高水平大气噪声和多径散射情况下的难度，并分析了解决这个问题的潜在方案。我们重点研究了Iridium卫星星座，我们在25 MS/s的采样率下收集了1705202条消息。我们使用这些数据来训练一个由自动编码器和Siamese神经网络组成的指纹识别模型，使得模型能够学习一种保留标识信息的消息头的高效编码。我们通过使用软件定义无线电回放消息来展示指纹识别系统在攻击下的稳健性，达到0.120的等误差率和0.946的ROC AUC。最后，我们通过在训练和测试数据之间引入时间间隔来分析其随时间的稳定性，并通过引入之前未见过的新发射机来分析其可扩展性。我们得出结论，我们的技术对于构建随时间稳定的指纹识别系统非常有用，可以立即用于新发射机而无需重新训练，并且通过提高攻击所需的预算，能够提供对欺骗和回放攻击的稳健性。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623135](https://doi.org/10.1145/3576915.3623135)
## Protecting HRP UWB Ranging System Against Distance Reduction Attacks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#protecting-hrp-uwb-ranging-system-against-distance-reduction-attacks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#protecting-hrp-uwb-ranging-system-against-distance-reduction-attacks)**
### 作者
* Kyungho Joo, Korea University, Seoul, Republic of Korea
* Dong Hoon Lee, Korea University, Seoul, Republic of Korea
* Yeonseon Jeong, Korea University, Seoul, Republic of Korea
* Wonsuk Choi, Korea University, Seoul, Republic of Korea
### 摘要
> 超宽带（UWB）通信是一项新兴技术，可以实现安全的距离测量和定位。由于UWB通信能够精确测量距离，因此可以期望它具有增强的安全性。然而，最近有人证明通过IEEE 802.15.4z高速脉冲重复频率（HRP）UWB测距系统可以恶意减小测得的距离。HRP UWB测距系统已被三星和苹果等智能手机制造商广泛采用。本文提出了一种名为UWB带子模板验证（UWB-SV）的方法，该方法是防止当前HRP UWB测距系统遭受实际距离减小攻击的第一种方法。UWB-SV被设计成一种验证方法，即通过将UWB帧的乱序时间戳序列（STS）字段划分为多个子字段。通过分析子字段与其相应本地模板之间的互相关结果的一致性，UWB-SV能够检测到HRP UWB测距系统的距离减小攻击。由于一致性分析不需要长的比特序列，UWB-SV可以应用于大多数商用现成设备，这些设备在设计上具有4,096位长度的STS字段。我们在受害者和攻击者之间的16个不同信道条件下对UWB-SV进行了全面评估，通过评估结果显示，在室外环境条件下，UWB-SV在攻击检测率方面达到96.24％，误报率为0.32％。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623145](https://doi.org/10.1145/3576915.3623145)
## BLUFFS: Bluetooth Forward and Future Secrecy Attacks and Defenses.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#bluffs-bluetooth-forward-and-future-secrecy-attacks-and-defenses) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#bluffs-bluetooth-forward-and-future-secrecy-attacks-and-defenses)**
### 作者
* Daniele Antonioli, EURECOM, Sophia Antipolis, France
### 摘要
> 蓝牙是一种广泛应用于无线通讯的技术。数十亿设备在敏感应用和私密数据交换中使用蓝牙。蓝牙的安全性依赖于蓝牙标准及其两个安全机制：配对和会话建立。此前的研究中，包括标准本身都未能分析配对和会话建立机制对过去和未来会话的保密性是否具有保障，例如当对手妥协了当前会话时，蓝牙的配对和会话建立能够防御过去和未来会话吗？为填补这一空白，我们提出六种新的攻击方法，称之为BLUFFS攻击，打破了蓝牙会话的未来和前向保密性。我们的攻击可以仅通过破解一个会话密钥实现会话间设备冒充和中间人攻击。这些攻击利用了我们在蓝牙标准中发现的两个新漏洞，涉及单方面和可重复的会话密钥衍生。由于攻击影响到蓝牙的架构层面，因此无论受害者的硬件和软件详情如何（例如芯片、堆栈、版本和安全模式），攻击都能生效。我们还发布了一个低成本工具包BLUFFS，用于执行和自动检测攻击的有效性。该工具包使用了七个原始修补程序来动态地篡改和监控蓝牙会话密钥的衍生过程，这些修补程序是我们逆向工程的闭源蓝牙固件得出的结果。通过对来自流行硬件和软件供应商的十七种不同蓝牙芯片（十八个设备）进行评估，并支持最常用的蓝牙版本，我们展示了我们的攻击对蓝牙生态系统的重大影响。受到我们实证发现的启发，我们开发并成功测试了一种增强型蓝牙密钥衍生函数，可以从设计上阻止我们的六种攻击及其四个根本原因。我们展示了如何将我们的修复方法有效地集成到蓝牙标准中，并讨论了替代的实施级别缓解措施。我们已经按照负责任的方式向蓝牙SIG披露了我们的成果。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623066](https://doi.org/10.1145/3576915.3623066)
## When Free Tier Becomes Free to Enter: A Non-Intrusive Way to Identify Security Cameras with no Cloud Subscription.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#when-free-tier-becomes-free-to-enter-a-non-intrusive-way-to-identify-security-cameras-with-no-cloud-subscription) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#when-free-tier-becomes-free-to-enter-a-non-intrusive-way-to-identify-security-cameras-with-no-cloud-subscription)**
### 作者
* Yan He, The University of Oklahoma, Norman, OK, USA
* Qiuye He, The University of Oklahoma, Norman, OK, USA
* Song Fang, The University of Oklahoma, Norman, OK, USA
* Yao Liu, University of South Florida, Tampa, FL, USA
### 摘要
> 无线安全摄像机可以吓阻入侵者。消费者购买硬件的同时，可以选择支付每月循环费用，将视频记录到云端，或者使用免费选项通过摄像机应用程序提供的运动警报和有时的实时流。许多用户可能购买硬件而不购买订阅以节省资金，但这从根本上降低了其功效。我们发现，由于对刺激性运动做出响应而产生的无线流量可能会透露视频是否正在被传输。恶意用户，如窃贼，可以利用这种知识来针对没有上传视频或打开实时视图模式的“弱摄像机”的家庭。在这种情况下，尽管犯罪活动是在摄像机的监控区域内进行的，但却不会被记录下来。因此，我们描述了一种名为WeakCamID的新技术，它通过创建运动刺激和嗅探结果的无线流量来推断摄像机状态。我们进行了一项涉及总共220个用户的调查，发现所有用户认为，无论订阅状态如何，摄像机都具有一致的安全保证。我们的发现打破了这种“常识”。我们在移动应用程序中实现了WeakCamID，并使用11个流行的无线摄像机进行实验，结果显示WeakCamID可以以平均准确率约为95%且在不到19秒的时间内识别出弱摄像机。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623083](https://doi.org/10.1145/3576915.3623083)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623083](https://dl.acm.org/doi/pdf/10.1145/3576915.3623083)
## Formal Analysis of Access Control Mechanism of 5G Core Network.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#formal-analysis-of-access-control-mechanism-of-5g-core-network) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#formal-analysis-of-access-control-mechanism-of-5g-core-network)**
### 作者
* Mujtahid Akon, The Pennsylvania State University, University Park, PA, USA
* Tianchang Yang, The Pennsylvania State University, University Park, PA, USA
* Yilu Dong, The Pennsylvania State University, University Park, PA, USA
* Syed Rafiul Hussain, The Pennsylvania State University, University Park, PA, USA
### 摘要
> 我们提出了一种名为5GCVerif的基于模型的测试框架，旨在正式分析5G核心的访问控制框架。凭借其模块化设计，5GCVerif采用各种抽象技术来构建一个捕捉5G核心访问控制机制复杂细节的抽象模型。这种方法在构建抽象模型时提供了可定制性和可扩展性，并解决了模型检测中的状态爆炸问题。5GCVerif还通过限制模型检查器仅在有效的网络配置中探索政策违规行为，避开了对所有可能的核心网络配置进行详尽生成模型的挑战。使用5GCVerif，我们评估了55个安全属性，发现了5G核心访问控制机制中的五个新漏洞。这些漏洞可能导致多种攻击，包括未经授权进入敏感信息、非法访问服务和服务拒绝等。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623113](https://doi.org/10.1145/3576915.3623113)
## IoTFlow: Inferring IoT Device Behavior at Scale through Static Mobile Companion App Analysis.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#iotflow-inferring-iot-device-behavior-at-scale-through-static-mobile-companion-app-analysis) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#iotflow-inferring-iot-device-behavior-at-scale-through-static-mobile-companion-app-analysis)**
### 作者
* David Schmidt, TU Wien, Wien, Austria
* Carlotta Tagliaro, TU Wien, Wien, Austria
* Kevin Borgolte, Ruhr University Bochum, Bochum, Germany
* Martina Lindorfer, TU Wien, Wien, Austria
### 摘要
> "智能设备"，也就是组成物联网（IoT）的设备数量正在稳步增长。他们与其他软件和硬件一样存在漏洞。自动化分析技术可以在攻击者进行滥用之前检测和解决弱点。然而，应用现有的技术或开发足够通用的新方法具有挑战性。与其他平台相反，物联网生态系统具有各种软件和硬件架构。本文介绍了IoTFlow，一种新的针对物联网设备的静态分析方法，利用它们的移动伴侣应用程序来解决多样性和可扩展性的挑战。IoTFlow将值集分析（VSA）与更一般的数据流分析相结合，自动重建和推导出伴侣应用程序如何与物联网设备和远程云后端进行通信，接收或发送哪些数据以及与谁分享。为了促进未来的工作和可复现性，我们的IoTFlow实现是开源的。我们使用IoTFlow分析了9,889个经过人工验证的伴侣应用程序，以了解和描述物联网生态系统中安全和隐私的当前状态，这也展示了IoTFlow的实用性。我们比较了这些物联网应用与947个受欢迎的通用应用程序在本地网络通信、使用的协议和通信对象方面的差异。此外，我们还对13个物联网设备与其伴侣应用程序配对并使用时，通过动态分析、手动交互和自动交互来比较IoTFlow的结果。总的来说，利用IoTFlow，我们发现了各种物联网安全和隐私问题，例如废弃的域名、硬编码凭据、过期证书以及敏感个人信息的共享。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623211](https://doi.org/10.1145/3576915.3623211)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623211](https://dl.acm.org/doi/pdf/10.1145/3576915.3623211)
## Homomorphic Multiple Precision Multiplication for CKKS and Reduced Modulus Consumption.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#homomorphic-multiple-precision-multiplication-for-ckks-and-reduced-modulus-consumption) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#homomorphic-multiple-precision-multiplication-for-ckks-and-reduced-modulus-consumption)**
### 作者
* Jung Hee Cheon, CryptoLab Inc. & Seoul National University, Seoul, Republic of Korea
* Wonhee Cho, Seoul National University, Seoul, Republic of Korea
* Jaehyung Kim, CryptoLab Inc., Seoul, Republic of Korea
* Damien Stehlé, CryptoLab Inc., Lyon, France
### 摘要
> 同态加密(HE)方案如BGV、BFV和CKKS对每次乘法操作都会消耗一些密文模数。重启引导(BTS)可以还原模数，并继续进行同态计算，但是这需要花费较长时间，并且需要大量的模数。出于这些原因，减少模数消耗是BGV、BFV和CKKS中一个关键的研究领域，已经进行了许多研究。我们提出了一种新的方法，称为Mult2，以更低的模数消耗在CKKS方案中执行密文乘法。Mult2依赖一种将密文分解为一对密文的新方法，可以同态地执行一种弱形式的欧几里德除法。它利用分解格式对两个密文进行同态双精度乘法运算，并且其结果近似解密为与普通的CKKS乘法相同的值。Mult2可以仅消耗几乎一半的模数来执行同态乘法。我们将其扩展为对任意t ≥ 2的Multt，它依赖将密文分解为t个分量。所有其他CKKS操作可以等效地在一对/元组格式上执行，从而实现双CKKS(或元组CKKS)方案，支持同态双(或多)精度算术运算。因此，当密文模数和维度固定时，提出的算法使得可以在不进行重启引导的情况下评估更深层次的电路，或者可以减少对于相同电路评估所需的重启引导次数。此外，它们可以用于增加精度而不增加参数。例如，Mult2可以在仅使用680位的密文模数的情况下，将100位缩放因子与8个连续乘法运算结合起来，这是普通CKKS乘法算法无法实现的。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623086](https://doi.org/10.1145/3576915.3623086)
## PELTA - Shielding Multiparty-FHE against Malicious Adversaries.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#pelta-shielding-multiparty-fhe-against-malicious-adversaries) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#pelta-shielding-multiparty-fhe-against-malicious-adversaries)**
### 作者
* Sylvain Chatel, EPFL, Lausanne, Switzerland
* Christian Mouchet, EPFL, Lausanne, Switzerland
* Ali Utkan Sahin, EPFL, Lausanne, Switzerland
* Apostolos Pyrgelis, EPFL, Lausanne, Switzerland
* Carmela Troncoso, EPFL, Lausanne, Switzerland
* Jean-Pierre Hubaux, EPFL, Lausanne, Switzerland
### 摘要
> 多方全同态加密（MFHE）方案使多个参与方能够在保持机密性的同时，有效地计算其敏感数据上的函数。然而，现有的MFHE方案仅能对诚实但好奇的对手保证数据的机密性和计算结果的正确性。在本研究中，我们提供了第一个实用的构造，使得可以以零知识方式验证MFHE操作，从而保护MFHE免受恶意对手的攻击。我们的解决方案基于基于格的承诺方案和证明系统的组合，我们修改以支持现代FHE方案及其实现优化。我们在PELTA中实现了我们的构造。我们的实验评估表明，PELTA比现有文献中的技术快一到两个数量级。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623139](https://doi.org/10.1145/3576915.3623139)
## Asymptotically Faster Multi-Key Homomorphic Encryption from Homomorphic Gadget Decomposition.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#asymptotically-faster-multi-key-homomorphic-encryption-from-homomorphic-gadget-decomposition) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#asymptotically-faster-multi-key-homomorphic-encryption-from-homomorphic-gadget-decomposition)**
### 作者
* Taechan Kim, Samsung Research, Seoul, Republic of Korea
* Hyesun Kwak, Seoul National University, Seoul, Republic of Korea
* Dongwon Lee, Seoul National University, Seoul, Republic of Korea
* Jinyeong Seo, Seoul National University, Seoul, Republic of Korea
* Yongsoo Song, Seoul National University, Seoul, Republic of Korea
### 摘要
> 同态加密（HE）是一种允许我们对加密的数据进行任意计算的加密系统。然而，标准的同态加密存在一个缺点，即授权权力集中在秘密密钥持有者身上，因为只能对使用相同秘密密钥加密的密文进行计算。为了解决这个问题，正在研究一种名为多密钥同态加密（MKHE）的HE变种，该变种支持对可能使用不同密钥加密的密文进行计算。尽管现有的MKHE方案能够为多方提供隐私保护，但由于乘法操作的成本与涉及的密钥数量至少呈二次增长，导致性能较差。在本文中，我们重新审视陈等人（ACM CCS 2019）在CKKS和BFV方案上的MKHE方案，并显著改进了性能。具体而言，我们重新设计了多密钥乘法算法，并实现了与密钥数量线性增长的渐近最优复杂性。我们的构造基于一种新的装置分解概念，我们称之为同态装置分解，其中可以在分解的向量上执行算术操作，并保证其功能。最后，我们实现了MKHE方案并展示了其基准测试结果。例如，当涉及8个、16个和32个密钥时，我们的多密钥CKKS乘法仅需0.5、1.0和1.9秒，而之前的工作分别需要1.6、5.9和23.0秒。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623176](https://doi.org/10.1145/3576915.3623176)
## FPT: A Fixed-Point Accelerator for Torus Fully Homomorphic Encryption.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#fpt-a-fixed-point-accelerator-for-torus-fully-homomorphic-encryption) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#fpt-a-fixed-point-accelerator-for-torus-fully-homomorphic-encryption)**
### 作者
* Michiel Van Beirendonck, COSIC, KU Leuven, Leuven, Belgium
* Jan-Pieter D'Anvers, COSIC, KU Leuven, Leuven, Belgium
* Furkan Turan, COSIC, KU Leuven, Leuven, Belgium
* Ingrid Verbauwhede, COSIC, KU Leuven, Leuven, Belgium
### 摘要
> 全同态加密（Fully Homomorphic Encryption，FHE）是一种允许对加密数据进行计算的技术。它有潜力在云端大幅改变隐私考虑，但高计算和内存开销限制了其广泛应用。TFHE是一种基于Torus的有望的FHE方案，它严重依赖于引导（bootstrapping）技术，即在每个加密逻辑/算术操作之后执行的去噪工具。本文介绍了FPT，一种用于TFHE引导技术的定点FPGA加速器。FPT是第一个充分利用FHE计算中固有噪声的硬件加速器。它完全采用逼近的定点算术来实现TFHE引导技术，而不是使用双精度或单精度浮点算术。通过深入分析引导傅里叶快速变换计算中的噪声传播，FPT能够使用噪声修剪的定点表示，其大小比之前偏好浮点或整数快速傅里叶变换的实现小了高达50%。FPT以传统流式数字信号处理器（DSP）为灵感构建了一个流式处理器：它直接实例化级联高吞吐计算级和最小的控制逻辑和路由网络。我们探索了不同的流式内核吞吐量均衡组合，并通过用户可配置的流式宽度构建了完整的引导流水线。我们提出的方法允许算术单元的100%利用率，并且仅需要较小的引导密钥缓存，实现了每35微秒一个引导码的完全计算限制的引导吞吐量。这与传统的基于CPU的FHE引导加速方法形成了鲜明对比，后者通常受到内存和带宽的限制。FPT已经完全实现并作为用于Alveo U280数据中心加速卡的引导FPGA内核进行评估。与现有基于CPU的实现相比，FPT实现了两到三个数量级更高的引导吞吐量，并且比最近的ASIC仿真实验的吞吐量提高了2.5倍。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623159](https://doi.org/10.1145/3576915.3623159)
## Stolen Risks of Models with Security Properties.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#stolen-risks-of-models-with-security-properties) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#stolen-risks-of-models-with-security-properties)**
### 作者
* Yue Qin, Indiana University Bloomington, Bloomington, IN, USA
* Zhuoqun Fu, Tsinghua University, Beijing, China
* Chuyun Deng, Tsinghua University, Beijing, China
* Xiaojing Liao, Indiana University Bloomington, Bloomington, IN, USA
* Jia Zhang, Tsinghua University, Beijing, China
* Haixin Duan, Tsinghua University & Zhongguancun Laboratory, Beijing, China
### 摘要
> 可验证的鲁棒机器学习是机器学习安全防御的一种新趋势，它在机器学习模型上强制执行安全属性（如利普希茨性、单调性），并实现了令人满意的准确性和安全性之间的平衡。这些安全属性确定了机器学习安全攻击者的一系列规避策略，并对它们对分类器的影响指定了逻辑约束（例如，分类器在某些特征维度上单调递增）。然而，到目前为止，很少有人研究这些安全属性对模型隐私的副作用。本文旨在更好地理解鲁棒机器学习模型的隐私影响。我们特别报道了第一项测量研究，以调查满足四个安全属性（即局部不变性、利普希茨性、小邻域和单调性）的鲁棒模型的模型被窃取风险。我们的研究结果揭示了影响模型被窃取攻击和在带有安全属性的模型上的防御性能的因素。此外，为了训练一个同时满足准确性、安全性和隐私性目标的机器学习模型，我们提出了一种新技术，称为BoundaryFuzz，它将一个隐私属性引入可验证的鲁棒训练框架，以防御对鲁棒模型的模型被窃取攻击。实验结果表明了BoundaryFuzz的防御效果。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616653](https://doi.org/10.1145/3576915.3616653)
## Narcissus: A Practical Clean-Label Backdoor Attack with Limited Information.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#narcissus-a-practical-clean-label-backdoor-attack-with-limited-information) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#narcissus-a-practical-clean-label-backdoor-attack-with-limited-information)**
### 作者
* Yi Zeng, Virginia Tech, Blacksburg, VA, USA
* Minzhou Pan, Virginia Tech, Blacksburg, VA, USA
* Hoang Anh Just, Virginia Tech, Blacksburg, VA, USA
* Lingjuan Lyu, Sony AI, Tokyo, Japan
* Meikang Qiu, Augusta University, Augusta, GA, USA
* Ruoxi Jia, Virginia Tech, Blacksburg, VA, USA
### 摘要
> 背门攻击向机器学习模型的训练集中引入操纵数据，通过在测试过程中使用触发器使模型对输入进行错误分类，从而实现攻击者期望的结果。为了使背门攻击能够绕过人工检查，注入的数据必须看起来是正确标记的。具有这种特征的攻击通常被称为“干净标签攻击”。当前的干净标签背门方法的成功很大程度上取决于对完整训练集的访问权限。然而，由于完整训练集通常来自多样、独立的来源，比如来自不同用户的图像，访问完整数据集往往具有挑战性或不可行。目前背门攻击是否仍然具有真正的威胁依然是一个问题。在本文中，我们通过设计一个算法，使用目标类别的样本和公开的分布外数据进行干净标签背门攻击，对这个问题给出了肯定的答案。通过精心制作的恶意示例，这些示例的总数仅占目标类别规模的0.5%和完整训练集规模的0.05%，我们可以操纵模型，使其在包含背门触发器的任意输入中错误地将其分类为目标类别。重要的是，经过训练的被污染模型对于没有触发器的常规测试样本仍然具有高准确性，就好像模型是在未受污染的数据上训练的一样。我们的技术在各种不同的数据集、模型甚至将触发器注入到物理世界中的情况下都保持了一致的有效性。我们探索了各种防御方法，并发现Narcissus可以轻松规避最新的先进防御方法，无论是其原始形式还是经过简单改进后。我们分析了我们攻击的有效性——合成的Narcissus触发器包含与原始目标类别特征一样持久的特征。试图去除触发器会不可避免地首先损害模型的准确性。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616617](https://doi.org/10.1145/3576915.3616617)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616617](https://dl.acm.org/doi/pdf/10.1145/3576915.3616617)
## Stateful Defenses for Machine Learning Models Are Not Yet Secure Against Black-box Attacks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#stateful-defenses-for-machine-learning-models-are-not-yet-secure-against-black-box-attacks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#stateful-defenses-for-machine-learning-models-are-not-yet-secure-against-black-box-attacks)**
### 作者
* Ryan Feng, University of Michigan, Ann Arbor, MI, USA
* Ashish Hooda, University of Wisconsin-Madison, Madison, WI, USA
* Neal Mangaokar, University of Michigan, Ann Arbor, MI, USA
* Kassem Fawaz, University of Wisconsin-Madison, Madison, WI, USA
* Somesh Jha, University of Wisconsin-Madison, Madison, WI, USA
* Atul Prakash, University of Michigan, Ann Arbor, MI, USA
### 摘要
> 最近的研究提出了一种有状态防御模型（SDMs）作为一种有效的策略来抵御黑盒攻击者，后者仅能通过对模型的查询进行访问，这在在线机器学习平台中很常见。这些有状态的防御旨在通过跟踪查询历史记录，检测和拒绝“相似”的查询，从而防止黑盒攻击发现有用的梯度，并在合理的查询预算内逐渐寻找对抗攻击。最新的SDMs（例如Blacklight和PIHA）在抵御最先进的黑盒攻击方面取得了显著的成功。在本文中，我们展示了SDMs对一种新型的自适应黑盒攻击存在高度脆弱性。我们提出了一种新颖的自适应黑盒攻击策略，称为Oracle-guided Adaptive Rejection Sampling（OARS），包括两个阶段：（1）使用初始查询模式来推断关于SDM防御的关键特性；（2）利用这些提取的特性设计后续查询模式，以规避SDM的防御措施，并在寻找对抗输入方面取得进展。OARS广泛适用于现有黑盒攻击的改进-我们展示了如何应用该策略来增强六种常见的黑盒攻击，以更有效地对抗当前类别的SDMs。例如，通过OARS增强的黑盒攻击在合理的查询预算内，改善了对最新状态防御的攻击成功率，从几乎0％提高到几乎100％，适用于多个数据集。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623116](https://doi.org/10.1145/3576915.3623116)
## Attack Some while Protecting Others: Selective Attack Strategies for Attacking and Protecting Multiple Concepts.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#attack-some-while-protecting-others-selective-attack-strategies-for-attacking-and-protecting-multiple-concepts) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#attack-some-while-protecting-others-selective-attack-strategies-for-attacking-and-protecting-multiple-concepts)**
### 作者
* Vibha Belavadi, University of Texas at Dallas, Richardson, TX, USA
* Yan Zhou, University of Texas at Dallas, Richardson, TX, USA
* Murat Kantarcioglu, University of Texas at Dallas, Richardson, TX, USA
* Bhavani Thuraisingham, University of Texas Dallas, Richardson, TX, USA
### 摘要
> 机器学习模型容易受到对抗性攻击的影响。现有的研究主要关注攻击场景。实际应用中，一个数据集可能用于学习不同的概念，并且攻击者可能会有动机攻击某些概念而保护其他概念。例如，攻击者可能会篡改“年龄”模型的个人资料图片以预测“年轻”，而“吸引力”模型仍然预测为“漂亮”。在这项工作中，我们经验性地证明了攻击一个学习任务的分类器可能会对其他在相同数据上学习任务的分类器产生负面影响。这提出了一个有趣的研究问题：是否可能在保护同一数据上训练的其他分类器的同时攻击一组分类器？对上述问题的答案对于测试时间攻击学习模型的复杂性具有有趣的影响，例如，避免违反逻辑约束。例如，攻击高中学生的图片不应该使这些图片被分类为一组30岁的人。这样年龄的错误分类可能引起警报，并容易暴露攻击。在本文中，我们通过开发新颖的攻击技术来解决这个研究问题，可以同时攻击一组学习模型并保护其他模型。在线性分类器的情况下，我们提供了一个理论框架，用于找到生成这样对抗性示例的最优解。利用这个理论框架，我们在深度学习任务的背景下开发了一种“多概念”攻击策略。我们的结果表明，我们的技术可以成功地攻击目标类别同时保护“受保护”类别，在许多不同的设置下，这是使用现有的测试时间攻击策略所不可能的。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623177](https://doi.org/10.1145/3576915.3623177)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623177](https://dl.acm.org/doi/pdf/10.1145/3576915.3623177)
## FIN: Practical Signature-Free Asynchronous Common Subset in Constant Time.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#fin-practical-signature-free-asynchronous-common-subset-in-constant-time) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#fin-practical-signature-free-asynchronous-common-subset-in-constant-time)**
### 作者
* Sisi Duan, Tsinghua University, Beijing, China
* Xin Wang, Tsinghua University, Beijing, China
* Haibin Zhang, Beijing Institute of Technology, Beijing, China
### 摘要
> 异步公共子集（ACS）是一种强大的范例，使得诸如拜占庭错误容忍（BFT）和多方计算（MPC）这样的应用成为可能。信息理论设置中最有效的ACS框架归功于Ben-Or，Kelmer和Rabin（BKR，1994年）。BKR ACS协议在理论上和实际上都产生了影响。然而，由于使用n个并行的异步二进制协议(ABA)实例，BKR协议具有O(log n)的运行时间（其中n为复制品的数量），从而影响了性能和可扩展性。事实上，对于16〜64个复制品的网络，BKR中并行ABA阶段占总运行时间的约95%〜97%。一个长期存在的未解决问题是：我们是否可以构建一个ACS框架，其运行时间为O(1)，同时不增加BKR协议的消息或通信复杂度。在本文中，我们解决了该问题，提供了第一个常数时间ACS协议，并在以信息理论和无签名设置中提供了O(n3)消息。此外，作为我们新ACS框架的关键组成部分以及本身非常有趣的原语，我们提供了第一个信息理论多值验证拜占庭协议（MVBA）协议，其具有O(1)时间和O(n3)消息。这两个结果可以改进使用ACS和MVBA的各种应用程序，包括在信息理论，量子安全或无签名设置中。例如，我们实现了FIN，这是一个使用我们的框架实例化的BFT协议。通过在Amazon EC2上进行121服务器部署，我们展示了FIN比PACE (CCS 2022)更高效，在同类型的异步BFT协议中，FIN将ABA阶段的开销降低至总运行时间的1.23％，并且FIN的吞吐量达到PACE的3.41倍。我们还证明了FIN优于具有标准活性属性的其他BFT协议，例如Dumbo和Speeding Dumbo。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616633](https://doi.org/10.1145/3576915.3616633)
## Analyzing the Real-World Security of the Algorand Blockchain.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#analyzing-the-real-world-security-of-the-algorand-blockchain) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#analyzing-the-real-world-security-of-the-algorand-blockchain)**
### 作者
* Erica Blum, Reed College, Portland, OR, USA
* Derek Leung, Massachusetts Institute of Technology, Cambridge, MA, USA
* Julian Loss, CISPA Helmoltz Center for Information Security, Saarbrücken, Germany
* Jonathan Katz, University of Maryland, College Park, MD, USA
* Tal Rabin, University of Pennsylvania, Philadelphia, PA, USA
### 摘要
> 阿尔戈兰共识协议在理论和实践中都非常有趣。从理论上讲，为了实现自适应安全性，它引入了一种新颖的概念——可互换性玩家，其中协议的每一步都由一个不同的随机选出的委员会执行，委员会成员保持秘密，直到他们发送第一条也是唯一的消息。该协议在任意网络条件下都能提供一致性，并且在间歇性网络分区下能保证可用性。在实践方面，该协议用于保护阿尔戈兰加密货币，在撰写本文时总价值约为850M。实际使用的阿尔戈兰协议与阿尔戈兰的发表文献中描述的协议有很大的区别。尽管其重要性，但它缺乏正式的分析。在这项工作中，我们描述并分析了阿尔戈兰共识协议，该协议在阿尔戈兰生态系统中的当前部署情况。我们展示了整体协议框架在特定网络条件和参数设置下可以被证明是安全的。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623167](https://doi.org/10.1145/3576915.3623167)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623167](https://dl.acm.org/doi/pdf/10.1145/3576915.3623167)
## Fait Accompli Committee Selection: Improving the Size-Security Tradeoff of Stake-Based Committees.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#fait-accompli-committee-selection-improving-the-size-security-tradeoff-of-stake-based-committees) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#fait-accompli-committee-selection-improving-the-size-security-tradeoff-of-stake-based-committees)**
### 作者
* Peter Gaži, IOG, Bratislava, Slovakia
* Aggelos Kiayias, University of Edinburgh & IOG, Edinburgh, United Kingdom
* Alexander Russell, University of Connecticut & IOG, Storrs, CT, USA
### 摘要
> 我们研究了在权益证明共识机制或分布式账本的背景下委员会选择问题。这些设置确定了参与方的家族，每个参与方都被指定一个非负的“权益”，并受到可能会损坏一部分参与方的对手的影响。挑战在于选出一个参与者委员会，该委员会能够准确地反映全体人口中贪污和诚实参与方按权益来衡量的比例。委员会规模和选择一个过多代表贪污参与方的委员会的概率之间的权衡是权益证明共识以及委员会运行的第二层协议中安全性和效率的基本因素。我们提出并分析了几种新的委员会选择方案，通过采用对持有重要权益的某些委员会成员进行低方差分配，改进了现有技术。这些方案在许多已部署账本的权益分布所导致的规模-安全性权衡方面提供了显著的改进。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623194](https://doi.org/10.1145/3576915.3623194)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623194](https://dl.acm.org/doi/pdf/10.1145/3576915.3623194)
## LedgerLocks: A Security Framework for Blockchain Protocols Based on Adaptor Signatures.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#ledgerlocks-a-security-framework-for-blockchain-protocols-based-on-adaptor-signatures) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#ledgerlocks-a-security-framework-for-blockchain-protocols-based-on-adaptor-signatures)**
### 作者
* Erkan Tairi, TU Wien, Vienna, Austria
* Pedro Moreno-Sanchez, IMDEA Software Institute & Visa Research, Madrid, Spain
* Clara Schneidewind, MPI-SP, Bochum, Germany
### 摘要
> 当前加密货币所面临的可扩展性和互操作性挑战，已经促使设计了一些密码协议，以实现在常见加密货币（如比特币或以太坊）之上和之间的高效应用。这些协议的示例包括虚拟支付通道、原子交换、基于预言机的合约、确定性钱包和币混服务等。许多这些协议都是建立在一系列广泛支持的核心功能之上。其中最重要的是适配器签名（AS），已经成为构建与基础加密货币的特定逻辑（大体上）无关的区块链协议的强大工具。尽管基于AS的协议是建立在相同的密码学原则上的，但目前并没有一种模块化和准确的方式来推理它们的安全性。相反，所有分析此类协议的研究都关注于重新证明适配器签名如何在密码学上链接交易，同时考虑到高度简化的区块链模型，而这些模型并未捕捉到以区块链为基础的共识中与安全相关的事务执行方面的内容。为了解决这个问题，我们提出了LedgerLocks，这是一个以真实区块链存在为前提的基于适配器签名的区块链应用程序安全设计框架。LedgerLocks定义了AS锁定交易的概念，这些交易的发布受到密码学秘密知识的约束。我们认为AS锁定交易是基于AS的区块链协议的通用构建块，并且我们在具有内置对AS锁定交易支持的通用可组合性框架中定义了GLedgerLocks的真实账本模型。由于LedgerLocks从适配器签名的密码实现进行了抽象，它使得协议设计者可以专注于特定于区块链的安全考虑。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623149](https://doi.org/10.1145/3576915.3623149)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623149](https://dl.acm.org/doi/pdf/10.1145/3576915.3623149)
## Capacity: Cryptographically-Enforced In-Process Capabilities for Modern ARM Architectures.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#capacity-cryptographically-enforced-in-process-capabilities-for-modern-arm-architectures) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#capacity-cryptographically-enforced-in-process-capabilities-for-modern-arm-architectures)**
### 作者
* Kha Dinh Duy, Sungkyunkwan University, Suwon, Republic of Korea
* Kyuwon Cho, Sungkyunkwan University, Suwon, Republic of Korea
* Taehyun Noh, Sungkyunkwan University, Suwon, Republic of Korea
* Hojoon Lee, Sungkyunkwan University, Suwon, Republic of Korea
### 摘要
> 在进程中进行划分和访问控制已经得到积极探索，以实现处于就地和高效的进程内安全域隔离。许多研究提出了利用硬件特性的划分方案，其中包括在x86上使用新的基于页面的内存隔离特性Protection Keys for Userspace (PKU)。不幸的是，现代ARM体系结构没有类似的功能。相反，较新的ARM架构引入了指针认证(Pointer Authentication, PA)和内存标签扩展(Memory Tagging Extension, MTE)，以适应内存安全和运行时漏洞利用缓解的参考验证模型。我们认为这些特性在划分化的背景下还未得到充分探索，并且可以通过改装来实现基于能力的进程内访问控制方案。本文提出了一种新颖的硬件辅助的进程内访问控制设计Capacity，它采用了基于能力的安全原则。Capacity在ARM上整合了新的硬件安全特性，这些特性已经具有能力的固有特征。它支持域敏感对象的生命周期保护，从它们从文件系统的导入到它们在内存中的位置开始。通过使用唯一的PA密钥对进程内域进行身份验证，Capacity将文件描述符和内存指针转换为具有密码验证的引用，并通过其程序插装框架和高效的系统调用监视器完全调控引用的使用。我们对启用Capacity的NGINX Web服务器原型和其他常见应用进行了评估，这些应用将敏感资源隔离到不同的域中。评估结果显示，对于单线程的Web服务器，Capacity的性能开销约为17%，对于多线程的Web服务器，性能开销为13.54%。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623079](https://doi.org/10.1145/3576915.3623079)
## Cryptographically Enforced Memory Safety.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#cryptographically-enforced-memory-safety) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#cryptographically-enforced-memory-safety)**
### 作者
* Martin Unterguggenberger, Graz University of Technology, Graz, Austria
* David Schrammel, Graz University of Technology, Graz, Austria
* Lukas Lamster, Graz University of Technology, Graz, Austria
* Pascal Nasahl, Graz University of Technology, Graz, Austria
* Stefan Mangard, Graz University of Technology, Graz, Austria
### 摘要
> C/C++的内存安全问题，如越界错误，在当今应用程序中仍然普遍存在。一个可利用的软件漏洞就足以让攻击者获取未经授权的内存访问，并最终破坏整个系统。通常，只有提供轻型和实用的安全性的内存安全方案才会广泛应用。因此，硬件支持是必不可少的。然而，防御措施经常通过使用重型保护机制限制对数据的未经授权访问，这些机制广泛重塑了处理器的微体系结构并破坏了传统兼容性。本论文提出了基于消息认证码（MAC）和对象粒度的元数据的密封指针，这是一种基于内存安全的新方法，该方法在标记内存中有效地进行了扩展和存储。MAC通过加密绑定对象的界限和存活信息（由相应的地址范围和内存标签表示）到指针上。通过最近的低延迟分块密码设计，我们能够在每次内存访问时对密封指针进行验证，从而在时间和空间上实现加密执行内存安全。我们的轻型ISA扩展仅需要最小的硬件更改，同时保持二进制兼容性。我们使用NIST Juliet C/C++测试套件系统地分析了我们设计的安全性和有效性。我们的原型实现的模拟性能开销展示了与SPEC CPU2017基准套件竞争性的结果，性能模式和效率模式的平均开销仅分别为1.3%和9.5%。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623138](https://doi.org/10.1145/3576915.3623138)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623138](https://dl.acm.org/doi/pdf/10.1145/3576915.3623138)
## Put Your Memory in Order: Efficient Domain-based Memory Isolation for WASM Applications.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#put-your-memory-in-order-efficient-domain-based-memory-isolation-for-wasm-applications) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#put-your-memory-in-order-efficient-domain-based-memory-isolation-for-wasm-applications)**
### 作者
* Hanwen Lei, Peking University, Beijing, China
* Ziqi Zhang, Peking University, Beijing, China
* Shaokun Zhang, Peking University, Beijing, China
* Peng Jiang, Peking University, Beijing, China
* Zhineng Zhong, Peking University, Beijing, China
* Ningyu He, Peking University, Beijing, China
* Ding Li, Peking University, Beijing, China
* Yao Guo, Peking University, Beijing, China
* Xiangqun Chen, Peking University, Beijing, China
### 摘要
> 内存破坏漏洞在WebAssembly中可能比本地应用程序更严重。因此，我们提出了首个具备内存隔离功能的WebAssembly运行时工具tool。我们的观点是使用MPK硬件来实现WebAssembly的高效内存保护。然而，MPK和WebAssembly具有不同的内存模型：MPK保护虚拟内存页，而WebAssembly使用没有页的线性内存。将MPK API映射到WebAssembly会导致内存膨胀和运行效率低下。为解决这个问题，我们提出了基于函数级粒度的线性内存保护机制acfdilm。我们将acfdilm实现到官方WebAssembly运行时中，构建了tool工具。我们的评估结果显示，tool在实际项目中可以防止内存破坏，平均性能开销为1.77%，内存消耗几乎可以忽略不计。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623205](https://doi.org/10.1145/3576915.3623205)
## PANIC: PAN-assisted Intra-process Memory Isolation on ARM.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#panic-pan-assisted-intra-process-memory-isolation-on-arm) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#panic-pan-assisted-intra-process-memory-isolation-on-arm)**
### 作者
* Jiali Xu, Institute of Computing Technology, CAS & University of Chinese Academy of Sciences, Beijing, China
* Mengyao Xie, Institute of Computing Technology, CAS & University of Chinese Academy of Sciences, Beijing, China
* Chenggang Wu, Institute of Computing Technology, CAS; University of Chinese Academy of Sciences; & Zhongguancun Laboratory, Beijing, China
* Yinqian Zhang, Department of Computer Science and Engineering, SUSTech & Research Institute of Trustworthy Autonomous Systems, SUSTech, Shenzhen, China
* Qijing Li, University of Chinese Academy of Sciences, Beijing, China
* Xuan Huang, Peking University, Beijing, China
* Yuanming Lai, Institute of Computing Technology, CAS & University of Chinese Academy of Sciences, Beijing, China
* Yan Kang, Institute of Computing Technology, CAS & University of Chinese Academy of Sciences, Beijing, China
* Wei Wang, Institute of Computing Technology, CAS, Beijing, China
* Qiang Wei, National Digital Switching System Engineering and Technological Research Center, Zhengzhou, China
* Zhe Wang, Institute of Computing Technology, CAS; University of Chinese Academy of Sciences; & Zhongguancun Laboratory, Beijing, China
### 摘要
> 进程内存隔离是一种广为人知的技术，用于在进程内强制实施最低特权原则。在本文中，我们提出了一种名为PANIC的通用高效的进程内存隔离技术，通过在AArch64上利用Privileged Access Never（PAN）和load/store unprivileged（LSU）指令。PANIC在内核模式下执行进程代码，并将代码分为受信任和不受信任的组件。不受信任的代码被限制在访问位于用户页面上的隔离内存区域，而受信任的代码则可以通过使用LSU指令来访问隔离的内存区域。为了缓解在内核模式下运行用户代码导致的威胁，PANIC提供了两种新颖的安全机制：基于shim的内存隔离和敏感指令仿真。PANIC提供了一种通用高效的隔离原语，可以在三种不同的隔离场景中应用：保护CFI中的敏感数据，创建隔离的执行环境以及加固JIT代码缓存。我们实现了一个PANIC的原型，并进行了实验评估，结果显示PANIC的性能开销非常低，并且比现有方法表现更好。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623206](https://doi.org/10.1145/3576915.3623206)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623206](https://dl.acm.org/doi/pdf/10.1145/3576915.3623206)
## Security Verification of Low-Trust Architectures.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#security-verification-of-low-trust-architectures) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#security-verification-of-low-trust-architectures)**
### 作者
* Qinhan Tan, Princeton University, Princeton, NJ, USA
* Yonathan Fisseha, University of Michigan, Ann Arbor, MI, USA
* Shibo Chen, University of Michigan, Ann Arbor, MI, USA
* Lauren Biernacki, Lafayette College, Easton, PA, USA
* Jean-Baptiste Jeannin, University of Michigan, Ann Arbor, MI, USA
* Sharad Malik, Princeton University, Princeton, NJ, USA
* Todd Austin, University of Michigan, Ann Arbor, MI, USA
### 摘要
> 低信任度架构从软件的角度出发，利用始终加密数据，显著减少硬件信任度，转化为一个小型的无软件的隔离组件。本文对一种特定的低信任度架构——隔离加密（SE）架构进行了完整的形式化验证，以展示该设计针对所有可能的程序都可以防止直接数据披露和数字侧信道的安全性。首先，我们定义了 SE 低信任度架构 ISA 的安全要求。向上看，该 ISA 用于为软件中的硬件提供抽象，并且用于说明包含这些指令的任何程序都不能泄露信息，包括通过数字侧信道。向下看，该 ISA 是硬件的规范，并用于定义源自 ISA 水平安全性要求的任何 RTL 实现的证明义务。这些涵盖了功能和数字侧信道泄漏。接下来，我们展示如何使用商业形式化验证工具成功地完成这些证明义务。我们还演示了我们的 RTL 安全验证技术在 SE 架构的七种不同的正确和错误实现中的效果。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616643](https://doi.org/10.1145/3576915.3616643)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616643](https://dl.acm.org/doi/pdf/10.1145/3576915.3616643)
## TunneLs for Bootlegging: Fully Reverse-Engineering GPU TLBs for Challenging Isolation Guarantees of NVIDIA MIG.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#tunnels-for-bootlegging-fully-reverse-engineering-gpu-tlbs-for-challenging-isolation-guarantees-of-nvidia-mig) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#tunnels-for-bootlegging-fully-reverse-engineering-gpu-tlbs-for-challenging-isolation-guarantees-of-nvidia-mig)**
### 作者
* Zhenkai Zhang, Clemson University, Clemson, SC, USA
* Tyler Allen, University of North Carolina at Charlotte, Charlotte, NC, USA
* Fan Yao, University of Central Florida, Orlando, FL, USA
* Xing Gao, University of Delaware, Newark, DE, USA
* Rong Ge, Clemson University, Clemson, SC, USA
### 摘要
> 近期的研究已经揭示了现代CPU的翻译后备缓冲器（TLB）的很多详细信息，但是我们发现对于现代GPU中这种组件的许多属性仍然未知或不清楚。为了填补这一知识空白，我们开发了一种新的GPU TLB逆向工程方法，并将其应用于图灵和安培世代的各种消费级和服务器级GPU。除了了解更全面准确的GPU TLB属性外，我们还发现了NVIDIA多实例GPU（MIG）功能的设计缺陷。MIG声称在云计算中对整个GPU内存系统进行了完全分区，以实现安全的GPU共享。然而，令人惊讶的是，我们发现MIG没有对最后一级TLB进行分区，而最后一级TLB是由GPU中的所有计算单元共享的。利用这个设计缺陷和学到的TLB属性，我们能够构建一个跨MIG强制隔离的隐秘信道进行数据泄漏。据我们所知，这是对MIG的首次攻击。我们在商业云平台上评估了所提出的攻击，并成功地以高达31 kbps的速度从受害者租户可靠地泄漏数据，准确率高达99.8%左右。即使受害者正在使用GPU进行深度神经网络训练，传输速度仍可达到25 kbps以上，准确率超过99.5%。我们提出并实施了一种有效防止通过这个隐秘信道进行数据泄漏的缓解方法。此外，我们还对利用最后一级TLB的访问模式推断其他MIG创建的GPU实例中正在运行的应用程序的身份进行了初步研究。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616672](https://doi.org/10.1145/3576915.3616672)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616672](https://dl.acm.org/doi/pdf/10.1145/3576915.3616672)
## FetchBench: Systematic Identification and Characterization of Proprietary Prefetchers.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#fetchbench-systematic-identification-and-characterization-of-proprietary-prefetchers) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#fetchbench-systematic-identification-and-characterization-of-proprietary-prefetchers)**
### 作者
* Till Schlüter, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Amit Choudhari, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Lorenz Hetterich, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Leon Trampert, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Hamed Nemati, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Ahmad Ibrahim, Unaffiliated, Saarbrücken, Germany
* Michael Schwarz, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Christian Rossow, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Nils Ole Tippenhauer, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 预取器是通过对应用程序未来内存使用情况的预测来提前获取内存的。不同的CPU可能使用不同类型的预取器，并且相同预取器的两种实现在其特征的细节上可能存在差异，从而导致不同的运行时行为。对于一些实现，安全研究人员通过手动分析展示了如何利用特定预取器泄漏数据的方法。识别此类漏洞需要繁琐的逆向工程，因为预取器实现是专有且未记录的。目前，尚无关于常见CPU中预取器的系统研究可用，这阻碍了进一步的安全评估。在这项工作中，我们解决以下问题：我们如何系统地识别和表征专有处理器中未规定的预取器？为了回答这个问题，我们系统地分析了预取方法，设计了跨平台测试来识别和表征给定CPU上的预取器，并证明我们的实现FetchBench可以在19种不同的ARM和x86-64 CPU上表征预取器。例如，FetchBench发现了并表征了ARM Cortex-A72 CPU上的一个以前未知的基于重放的预取器。根据这些发现，我们展示了两种利用这个未记录预取器作为侧信道泄漏机密信息的新攻击方式，甚至可以从安全的TrustZone泄漏到常规世界中。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623124](https://doi.org/10.1145/3576915.3623124)
## Combined Private Circuits - Combined Security Refurbished.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#combined-private-circuits-combined-security-refurbished) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#combined-private-circuits-combined-security-refurbished)**
### 作者
* Jakob Feldtkeller, Ruhr University Bochum, Bochum, Germany
* Tim Güneysu, Ruhr University Bochum, Bochum, Germany
* Thorben Moos, Université catholique de Louvain, Louvain-la-Neuve, Belgium
* Jan Richter-Brockmann, Ruhr University Bochum, Bochum, Germany
* Sayandeep Saha, Université catholique de Louvain, Louvain-la-Neuve, Belgium
* Pascal Sasdrich, Ruhr University Bochum, Bochum, Germany
* Francois-Xavier Standaert, Université catholique de Louvain, Louvain-la-Neuve, Belgium
### 摘要
> 物理攻击是加密实现的众所周知的威胁。虽然针对被动侧信道分析（SCA）和主动故障注入分析（FIA）的反制措施各自存在，但保护其组合仍是一个重大挑战。最近在CCS 2022 上发表了一篇名为 CINI-MINIS 的文章，试图实现联合安全性。作者介绍了相关的安全概念，并旨在构造任意阶数的小工具，在组合对手的情况下保持易于复合的特性。然而，我们展示了所有任意阶 CINI-MINIS 小工具都容易受到灾难性攻击，只需一个错误和一个探针，因为缩减中缺乏纠错模块。我们解释了攻击的细节，指出了构造中的潜在问题，提出了额外的设计原则，并为任意阶提供新的（修复后的）可证明安全和可组合小工具。幸运的是，压缩阶段的变化帮助我们在其他地方保存校正模块和寄存器，使得结果更加安全、高效，同时比原来的 CPC 更加安全、高效。我们还解释了为什么与之相关的形式验证工具 VERICA (TCHES 2022) 没有发现这些缺陷，并提出修复措施来消除其盲点。最后, 我们探索了修复压缩阶段的替代方法，而不需要额外的纠错，基于非完备性，即构建一个永远不会重新组合任何机密的压缩。然而，尽管这种方法对于低阶小工具可能有优点，但目前很难推广并且扩展性差。我们得出结论，我们翻新的任意阶 CINI 小工具为进一步研究提供了坚实的基础。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623129](https://doi.org/10.1145/3576915.3623129)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623129](https://dl.acm.org/doi/pdf/10.1145/3576915.3623129)
## Point Cloud Analysis for ML-Based Malicious Traffic Detection: Reducing Majorities of False Positive Alarms.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#point-cloud-analysis-for-ml-based-malicious-traffic-detection-reducing-majorities-of-false-positive-alarms) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#point-cloud-analysis-for-ml-based-malicious-traffic-detection-reducing-majorities-of-false-positive-alarms)**
### 作者
* Chuanpu Fu, Tsinghua University, Beijing, China
* Qi Li, Tsinghua University, Beijing, China
* Ke Xu, Tsinghua University, Beijing, China
* Jianping Wu, Tsinghua University, Beijing, China
### 摘要
> 作为一种新兴的安全范式，基于机器学习（ML）的恶意流量检测是自动防御网络攻击的重要组成部分。基于专用流量特征，ML方法可以检测各种复杂的攻击，尤其是能够捕获零日攻击，而这是传统非ML方法无法实现的。然而，这些高级ML方法引发的误报是真实部署的主要障碍。这些方法需要专家手动分析误报，从而产生了大量的人力成本。因此，我们有必要在不进行繁重的手动调查的情况下减少这些误报。本文中，我们提出了pVoxel，一种无监督方法，可以识别现有基于ML的流量检测系统中的误报，而无需对警报进行任何先验知识的要求。为了有效处理每个警报，pVoxel将与警报相关的流量特征向量看作是流量特征空间中的一个点，并利用点云分析来捕获点之间的拓扑特征，用于对警报进行分类。具体而言，我们将这些点聚合成体素，即高维立方体，这使得我们可以开发一种无监督方法，根据密度特征识别指示误报的体素。我们在75个真实数据集上进行的实验表明，在各种设置下，pVoxel能够有效减少11种最先进的流量检测方法的95.55%的误报。同时，pVoxel可以处理每秒201.10万个警报，这证明了它具有高效的警报处理能力。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616631](https://doi.org/10.1145/3576915.3616631)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616631](https://dl.acm.org/doi/pdf/10.1145/3576915.3616631)
## Learning from Limited Heterogeneous Training Data: Meta-Learning for Unsupervised Zero-Day Web Attack Detection across Web Domains.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#learning-from-limited-heterogeneous-training-data-meta-learning-for-unsupervised-zero-day-web-attack-detection-across-web-domains) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#learning-from-limited-heterogeneous-training-data-meta-learning-for-unsupervised-zero-day-web-attack-detection-across-web-domains)**
### 作者
* Peiyang Li, Tsinghua University & BNRist, Beijing, China
* Ye Wang, Tsinghua University & BNRist, Beijing, China
* Qi Li, Tsinghua University, Beijing, China
* Zhuotao Liu, Tsinghua University, Beijing, China
* Ke Xu, Tsinghua University, Beijing, China
* Ju Ren, Tsinghua University, Beijing, China
* Zhiying Liu, Tencent, Shenzhen, China
* Ruilin Lin, Tencent, Shenzhen, China
### 摘要
> 最近，已经开发了基于无监督机器学习的系统来检测零日网络攻击，可以有效增强现有的Web应用防火墙（WAF）。然而，既有的方法只考虑通过为特定域训练特定的检测模型来检测攻击。这些系统需要大量的训练数据，导致模型训练和部署的时间较长。本文提出了RETSINA，一种基于元学习的新型框架，可以在训练数据有限的情况下实现组织内不同域名的零日网络攻击检测。具体而言，它利用元学习来在这些域之间共享知识，例如异构域中的HTTP请求之间的关系，以便高效地训练检测模型。此外，我们开发了一个自适应预处理模块，以促进跨不同域的Web请求的语义分析，并设计了一个多域表示方法，以捕捉不同域之间的语义相关性，用于跨域模型训练。我们使用包含293M个Web请求的四个真实数据集进行了实验证明，RETSINA在有限的训练数据上优于现有的无监督Web攻击检测方法。例如，RETSINA只需要5分钟的训练数据，就能够达到使用1天的训练数据为不同域训练单独模型的现有方法相当的检测性能。我们还在一家互联网公司进行了实际部署。RETSINA在一个月内平均每天捕获了两个域中的126个和218个零日攻击

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623123](https://doi.org/10.1145/3576915.3623123)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623123](https://dl.acm.org/doi/pdf/10.1145/3576915.3623123)
## Realistic Website Fingerprinting By Augmenting Network Traces.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#realistic-website-fingerprinting-by-augmenting-network-traces) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#realistic-website-fingerprinting-by-augmenting-network-traces)**
### 作者
* Alireza Bahramali, University of Massachusetts Amherst, Amherst, MA, USA
* Ardavan Bozorgi, University of Massachusetts Amherst, Amherst, MA, USA
* Amir Houmansadr, University of Massachusetts Amherst, Amherst, MA, USA
### 摘要
> 网站指纹识别（Website Fingerprinting，WF）被视为对Tor用户（以及其他匿名系统）匿名性的一种重大威胁。尽管最先进的WF技术声称具有高攻击准确性，例如通过利用深度神经网络（Deep Neural Networks，DNN），但近期的一些研究对这些攻击在现实世界中的可行性提出了质疑，这是因为这些攻击的设计和评估中做出了一些假设。在本研究中，我们认为这种不切实际性主要归因于攻击者无法在全面的网络条件下收集训练数据，例如WF分类器可能仅在特定高带宽网络链路上收集的高带宽样本上进行训练，但部署在具有不同网络条件的连接中。我们展示了增强网络轨迹可以提高未观测网络条件下WF分类器的性能。具体而言，我们介绍了NetAugment，一种根据Tor轨迹规范量身定制的增强技术。我们通过半监督学习和自监督学习技术对NetAugment进行实例化。我们广泛的开放世界和封闭世界实验证明，在实际的评估环境中，我们的WF攻击性能优于最先进的方法；这是因为它们在训练中使用了增强的网络轨迹，使其能够学习未观测设置中目标流量的特征（例如未知带宽、Tor电路等）。例如，在封闭世界的场景下，通过5次学习，我们的自监督WF攻击（名为NetCLR）在被WF对手未观测到的设置下，准确率可达80％。相比之下，最先进的Triplet Fingerprinting [34]仅实现了64.4％的准确性。我们相信我们工作的有希望的结果可以鼓励在其他类型的网络流量分析中使用网络轨迹增强技术。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616639](https://doi.org/10.1145/3576915.3616639)
## Transformer-based Model for Multi-tab Website Fingerprinting Attack.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#transformer-based-model-for-multi-tab-website-fingerprinting-attack) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#transformer-based-model-for-multi-tab-website-fingerprinting-attack)**
### 作者
* Zhaoxin Jin, Beijing University of Posts and Telecommunications & Ministry of Education, Beijing, China
* Tianbo Lu, Beijing University of Posts and Telecommunications & Ministry of Education, Beijing, China
* Shuang Luo, Beijing University of Posts and Telecommunications & Ministry of Education, Beijing, China
* Jiaze Shang, Beijing University of Posts and Telecommunications & Ministry of Education, Beijing, China
### 摘要
> 尽管匿名通信系统Tor可以保护用户的隐私，但网站指纹识别（WF）攻击者仍然可以通过分析网络通信过程中生成的元数据来识别用户在加密网络连接上访问的网站。尽管近年来出现了新的WF攻击技术，但该领域的大部分研究都集中在由单标签浏览行为生成的纯流量跟踪上。然而，多标签浏览行为显著降低了基于单标签假设的WF分类模型的性能。因此，一些研究已经将重点转向多标签WF攻击，尽管其中大部分研究对多标签跟踪中混合信息的利用有限。本文提出了一种端到端的多标签WF攻击模型，称为基于Transformer的多标签网站指纹识别攻击模型（TMWF）。受计算机视觉领域中的目标检测算法的启发，我们将多标签WF识别视为预测具有最大长度的有序集合的问题。通过在检测模型中添加足够的单标签查询，并让每个查询从多标签跟踪中的不同位置提取WF特征，我们的模型的Transformer架构更充分地利用了跟踪特征。结合我们提出的新模型训练方法，我们成功地实现了对包含不同数量网页的多标签跟踪的自适应识别。这种方法成功地消除了多标签WF攻击领域中一个强大且不切实际的假设-样本中包含的标签数属于攻击者先验知识的假设。在各种场景下的实验结果表明，TMWF的性能明显优于现有的多标签WF攻击模型。为了在更真实的场景中评估模型性能，我们提出了一个从真实开放环境中收集的多标签跟踪数据集。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623107](https://doi.org/10.1145/3576915.3623107)
## Efficient Registration-Based Encryption.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#efficient-registration-based-encryption) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#efficient-registration-based-encryption)**
### 作者
* Noemi Glaeser, University of Maryland & Max Planck Institute for Security and Privacy, College Park, MD, USA
* Dimitris Kolonelos, IMDEA Software Institute & Universidad Politécnica de Madrid, Madrid, Spain
* Giulio Malavolta, Bocconi University & Max Planck Institute for Security and Privacy, Milan, Italy
* Ahmadreza Rahimi, Max Planck Institute for Security and Privacy, Bochum, Germany
### 摘要
> 最近，注册为基础的加密（Registration-based encryption，RBE）被推出作为身份为基础的加密（Identity-based encryption，IBE）的一种替代方案，用于解决密钥保管问题：在RBE中，受信任的机构被一个更弱的实体取代，称为密钥保存者，它无法获知任何秘密密钥。用户自行生成密钥，然后公开注册他们的身份及相应的公钥给密钥保存者。RBE是IBE的一种有前景的替代方案，保留了许多优点，同时消除了IBE的主要缺点，即密钥保管问题。不幸的是，目前所有现有的RBE构造方式都以非黑盒的方式使用密码学方案，使其价格过高。据估计，一个RBE密文的大小将达到千兆字节的量级（尽管还没有实现任何RBE）。在这项研究中，我们提出了一种新的方法来构造基于双线性群标准假设的RBE。我们的方案是黑盒的，并且具有极高的效率-一个密文的大小是914字节。为了验证这一说法，我们对我们的方案进行了原型实现，并展示了它可以扩展到数百万用户。该方案的公共参数是几千字节的量级。最昂贵的操作（注册）最多需要几秒钟，而加密和解密的运行时间是几毫秒的量级。这是第一个RBE方案的实现，证明了在现有硬件条件下，RBE的实际部署已经是可能的。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616596](https://doi.org/10.1145/3576915.3616596)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616596](https://dl.acm.org/doi/pdf/10.1145/3576915.3616596)
## Efficient Set Membership Encryption and Applications.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#efficient-set-membership-encryption-and-applications) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#efficient-set-membership-encryption-and-applications)**
### 作者
* Matthew Green, Johns Hopkins University, Baltimore, MD, USA
* Abhishek Jain, Johns Hopkins University & NTT Research, Inc., Baltimore, MD, USA
* Gijs Van Laer, Johns Hopkins University & XFA.tech, Baltimore, MD, USA
### 摘要
> 新兴的简练密码学领域[Cho et al., CRYPTO'17]涉及设计涉及发件人和收件人的双方协议，其中接收者的输入很大。关键的效率要求是协议通信复杂性必须独立于接收者的输入大小。最近几年以来，许多任务在这个范畴下进行了研究，包括简练无觉察传输（ℓOT）。在本文中，我们引入了集合成员加密（SME）的概念-简练密码学领域的新成员。SME允许发送方从接收者的一个集合中选择一个收件人进行加密，并同时使用一个大的接收者子集的小摘要。只有当收件人是大的子集的一部分时，才能解密消息。我们展示了如何通过SME派生出ℓOT。我们提供了使用双线性群的高效的SME构造。与现有技术（关于ℓOT的）相比，我们的解决方案在解密时间上取得了数量级的改进，并且在具体效率方面相对于该领域的初始工作也取得了显著的改进，尽管在渐近性方面有一些劣势。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623131](https://doi.org/10.1145/3576915.3623131)
## Realizing Flexible Broadcast Encryption: How to Broadcast to a Public-Key Directory.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#realizing-flexible-broadcast-encryption-how-to-broadcast-to-a-public-key-directory) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#realizing-flexible-broadcast-encryption-how-to-broadcast-to-a-public-key-directory)**
### 作者
* Rachit Garg, UT Austin, Austin, TX, USA
* George Lu, UT Austin, Austin, TX, USA
* Brent Waters, UT Austin & NTT Research, Austin, TX, USA
* David J. Wu, UT Austin, Austin, TX, USA
### 摘要
> 假设用户想要将一个加密的消息广播给K个收件人。使用公钥加密，发送者将构造K个不同的密文，每个收件人一个。广播的消息大小与K成线性比例。一个自然的问题是发送者是否可以用一个密文加密消息，其大小相对于收件人数量成为亚线性比例。
> 
> 广播加密提供了解决该问题的一种方法，但代价是引入了一个中央的值得信任的第三方，该第三方向不同的用户发放密钥（并相应地具有解密所有密文的能力）。
> 
> 最近，一些研究工作引入了分布式广播加密和灵活广播加密等概念，将传统公钥加密的去中心化、无信任模型与广播加密的效率保证相结合。
> 
> 在灵活广播加密方案的具体情况下，用户生成自己的公钥/私钥，并可以将其公钥发布在任何公钥目录中。随后，用户可以使用一个密文加密到任意一组用户公钥，其大小与广播集中的公钥数量按对数多项式比例。
> 
> 分布式广播加密方案是一种更为限制性的原语，其中每个公钥也与一个索引相关联，只能对应于不同索引的公钥集合进行加密。
> 
> 在本文中，我们介绍了一个通用编译器，可以将任何分布式广播加密方案转换为灵活广播加密方案。此外，与现有的具体高效分布式广播加密构造不同，我们得到的灵活广播加密方案具有一个有吸引力的性质，即每个公钥的大小与最大广播集合的大小成比例。我们通过将我们的编译器应用于Kolonelos、Malavolta和Wee (ASIACRYPT 2023)的分布式广播加密方案，提供了灵活广播加密方案的实现。使用我们的方案，发送者可以将一个128位对称密钥加密给超过1000个收件人（来自拥有100万用户的目录），并且仅仅需要一个2KB的密文。相比于使用标准的ElGamal加密分别对每个用户进行加密，这个大小要小16倍。灵活广播加密中的用户公钥要大得多（50KB）相比于标准的ElGamal公钥（32字节）。与类似的分布式广播加密方案相比，我们实现了用户的公钥大小减少32倍（50KB对比1.6MB），而密文大小没有改变。因此，灵活广播加密提供了一种有效的方式来将消息加密给大量的用户，代价是具有更大的单个公钥（相对于普通公钥加密）。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623168](https://doi.org/10.1145/3576915.3623168)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623168](https://dl.acm.org/doi/pdf/10.1145/3576915.3623168)
## Post-Quantum Multi-Recipient Public Key Encryption.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#post-quantum-multi-recipient-public-key-encryption) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#post-quantum-multi-recipient-public-key-encryption)**
### 作者
* Joël Alwen, Amazon.com, Incorporated, Seattle, WA, USA
* Dominik Hartmann, Ruhr-Universität Bochum, Bochum, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
* Marta Mularczyk, Amazon.com, Incorporated, Seattle, WA, USA
* Peter Schwabe, Max Planck Institute for Security and Privacy & Radboud University, Bochum, Germany
### 摘要
> 多消息多接收者公钥加密（mmPKE）一次性将一批消息加密为相应的独立选择的接收者公钥集合。所得到的“多接收者密文”可以被（第三方）缩减为更短的、特定接收者的“单个密文”。最后，为了从他们的单个密文中恢复出批处理中的第i条消息，第i个接收者只需要他们自己的解密密钥。mmPKE的一个特例是多接收者公钥加密（mPKE），其中所有接收者都会收到相同的消息。通过将（m）mPKE及其KEM对应物视为一个独立的原语，我们可以实现比简单组合个别PKE/KEM实例更有效的构造。这在后量子时代尤为重要，因为PKE/KEM密文和公钥通常要比传统版本大得多。在这项工作中，我们描述了关于mKEM和（m）mPKE的一系列新结果。我们为所有结果提供传统和后量子证明。我们的结果针对实际构造和应用（例如在PQ-secure群组消息领域）。具体而言，我们的结果包括一种新的非自适应到自适应编译器，用于基于CPA安全的mKEM，其产生的公钥约为先前最先进方法（Hashimoto et al., CCS'21）的一半大小。我们还证明了它们在存在自适应型损坏的情况下对于量子随机预言机模型中的mKEM是安全的FO转换。此外，我们提供了第一个mKEM合并器。最后，我们提供了两个mmPKE构造。第一个构造是从一个mKEM（例如通过将PQ与经典mKEM结合生成的mKEM）的任意消息长度的黑盒构造。第二个则专为短消息进行优化（适用于几个最近的mmPKE应用程序），直接实现混合PQ/经典安全性。当以256位安全性加密n个短消息时，mmPKE密文比通用构造短144n字节。最后，我们基于NIST PQC竞赛获胜者Kyber提供了（CCA安全的）mKEM构造的优化实现，并报告了与朴素解决方案相比，在封装上的显著加速以及在密文大小上高达79%的节省。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623185](https://doi.org/10.1145/3576915.3623185)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623185](https://dl.acm.org/doi/pdf/10.1145/3576915.3623185)
## Prediction Privacy in Distributed Multi-Exit Neural Networks: Vulnerabilities and Solutions.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#prediction-privacy-in-distributed-multi-exit-neural-networks-vulnerabilities-and-solutions) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#prediction-privacy-in-distributed-multi-exit-neural-networks-vulnerabilities-and-solutions)**
### 作者
* Tejas Kannan, University of Chicago, Chicago, IL, USA
* Nick Feamster, University of Chicago, Chicago, IL, USA
* Henry Hoffmann, University of Chicago, Chicago, IL, USA
### 摘要
> 分布式多出口神经网络（MeNNs）通过分区和提前退出来降低在低功耗感知系统上进行神经网络推理的成本。现有的MeNNs使用基于数据相关预测置信度选择何时退出的策略，具有较高的推理准确性。本文针对采用数据相关提前退出策略的分布式MeNNs提出了一种侧信道攻击。我们发现，攻击者可以通过加密通信模式观察到分布式MeNN提前退出的时间点。然后，攻击者可以利用这些观察结果以超过随机猜测1.85倍的准确率发现MeNN的预测。在某些情况下，侧信道泄漏超过模型预测的80%。这种泄漏的原因是之前的策略使用单个阈值对不同的预测置信度分布进行决策。我们通过两种新的退出策略解决了这个问题。第一种方法是“按类别退出”（Per-Class Exiting，PCE），它使用多个阈值来平衡预测类别间的退出率。该策略保持高准确性并降低了预测泄漏，但我们证明它没有隐私保证。我们通过第二种策略“置信度引导随机性”（Confidence-Guided Randomness，CGR）获得了这些保证，它使用偏向于PCE决策的概率随机选择退出的时间点。CGR提供了与随机均匀提前退出相当的隐私保护，同时具有更高的推理准确性。PCE和CGR都具有低开销，使它们成为资源受限环境中可行的安全解决方案。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623069](https://doi.org/10.1145/3576915.3623069)
## Unforgeability in Stochastic Gradient Descent.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#unforgeability-in-stochastic-gradient-descent) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#unforgeability-in-stochastic-gradient-descent)**
### 作者
* Teodora Baluta, National University of Singapore, Singapore, Singapore
* Ivica Nikolic, National University of Singapore, Singapore, Singapore
* Racchit Jain, National University of Singapore, Singapore, Singapore
* Divesh Aggarwal, National University of Singapore, Singapore, Singapore
* Prateek Saxena, National University of Singapore, Singapore, Singapore
### 摘要
> 随机梯度下降（SGD）是一种广受欢迎的训练算法，是现代机器学习系统的基石。有几个安全应用可以通过确定SGD执行是否可伪造来受益，即在给定步骤中观察到的模型参数是否可以通过多个不同的数据样本集获得。在本文中，我们首次尝试证明这种伪造的不可能性。我们提供了一组条件，可以在训练运行期间有效地检查具体检查点，根据这些条件，可以证明在该步骤中检查点是不可伪造的。我们的实验证明这些条件相对温和，因此在我们的实验中采样的检查点总是满足条件。我们的结果与先前的发现存在显著差异：我们展示了以前工作中建议使用的相同方法和实验设置认为可伪造的检查点现在被我们证明为不可伪造的。这种差异是由于定义中未指明的微妙之处引起的。我们通过实验证实了这种区别的重要性，即在训练过程中小错误会放大，导致训练的最终模型产生明显的差异。我们希望我们的结果能够对伪造定义和相关安全论证中代数精度的作用提供警示。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623093](https://doi.org/10.1145/3576915.3623093)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623093](https://dl.acm.org/doi/pdf/10.1145/3576915.3623093)
## Devil in Disguise: Breaching Graph Neural Networks Privacy through Infiltration.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#devil-in-disguise-breaching-graph-neural-networks-privacy-through-infiltration) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#devil-in-disguise-breaching-graph-neural-networks-privacy-through-infiltration)**
### 作者
* Lingshuo Meng, Zhejiang University, Hangzhou, China
* Yijie Bai, Zhejiang University, Hangzhou, China
* Yanjiao Chen, Zhejiang University, Hangzhou, China
* Yutong Hu, Zhejiang University, Hangzhou, China
* Wenyuan Xu, Zhejiang University, Hangzhou, China
* Haiqin Weng, Ant Group, Hangzhou, China
### 摘要
> 图神经网络（Graph Neural Networks，GNNs）已经被开发用于从各种应用中的图数据中挖掘有用信息，例如医疗保健、欺诈检测和社交推荐。然而，GNN为图数据的隐私攻击打开了新的攻击面。在本文中，我们提出了一种名为Infiltrator的隐私攻击方法，能够通过对GNN进行黑盒访问来窥探节点级的私密信息。与现有的需要受害节点先前信息的工作不同，我们探索了在没有任何关于受害节点信息的情况下进行攻击的可能性。我们的想法是通过注入攻击者创建的节点来渗透到图中，与受害节点成为朋友。更具体地说，我们设计了渗透方案，使对手能够推断出受害节点的标签、邻居链接和敏感属性。我们通过对三个代表性的GNN模型和六个真实世界数据集进行了广泛的实验来评估Infiltrator的性能。结果表明，在三种攻击中，Infiltrator可以达到超过98%的攻击性能，优于基线方法。我们还评估了Infiltrator对抗图同质性防御和差分隐私模型的抵抗能力。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623173](https://doi.org/10.1145/3576915.3623173)
## Evading Watermark based Detection of AI-Generated Content.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#evading-watermark-based-detection-of-ai-generated-content) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#evading-watermark-based-detection-of-ai-generated-content)**
### 作者
* Zhengyuan Jiang, Duke University, Durham, NC, USA
* Jinghuai Zhang, Duke University, Durham, NC, USA
* Neil Zhenqiang Gong, Duke University, Durham, NC, USA
### 摘要
> 一种生成式人工智能（AI）模型可以生成极为逼真的内容，给信息的真实性带来了越来越大的挑战。为了解决这些挑战，水印技术已被用于检测生成式AI内容。具体而言，在发布AI生成内容之前，会将水印嵌入其中。如果从内容中可以解码出相似的水印，则可将其识别为AI生成。本研究对基于水印的AI生成内容检测的鲁棒性进行了系统研究，重点关注AI生成图像。我们的研究表明，攻击者可以通过对带有水印的图像进行后处理，并添加一个微小且人眼难以察觉的扰动，使得后处理后的图像可以逃避检测，同时保持其视觉质量。我们在理论和实证两方面展示了攻击的有效性。此外，为了逃避检测，我们的对抗性后处理方法对AI生成图像添加的扰动更小，因此相较于现有流行的后处理方法（如JPEG压缩、高斯模糊和亮度/对比度调整），能更好地保持其视觉质量。我们的工作显示了现有基于水印的AI生成内容检测的不足之处，突出了对新方法的紧迫需求。我们的代码已公开发布，网址为：https://github.com/zhengyuan-jiang/WEvade。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623189](https://doi.org/10.1145/3576915.3623189)
## Phoenix: Detect and Locate Resilience Issues in Blockchain via Context-Sensitive Chaos.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#phoenix-detect-and-locate-resilience-issues-in-blockchain-via-context-sensitive-chaos) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#phoenix-detect-and-locate-resilience-issues-in-blockchain-via-context-sensitive-chaos)**
### 作者
* Fuchen Ma, Tsinghua University, Beijing, China
* Yuanliang Chen, Tsinghua University, Beijing, China
* Yuanhang Zhou, Tsinghua University, Beijing, China
* Jingxuan Sun, Beijing University of Posts and Telecommunications, Beijing, China
* Zhuo Su, Tsinghua University, Beijing, China
* Yu Jiang, Tsinghua University, Beijing, China
* Jiaguang Sun, Tsinghua University, Beijing, China
* Huizhong Li, WeBank, Shenzhen, China
### 摘要
> 弹性对于区块链系统至关重要，使其能够在发生不利情况时自动适应并继续提供服务，例如节点崩溃和数据丢失。然而，由于其实现上的漏洞，区块链系统可能无法从错误情况中恢复，导致永久性的服务中断。此类漏洞称为弹性问题。在本文中，我们提出了一种名为Phoenix的系统，通过上下文敏感的混沌来检测和定位区块链系统的弹性问题。首先，我们确定了区块链系统中两种典型类型的弹性问题：节点无法恢复和数据无法恢复。然后，我们设计了三种针对区块链特征的上下文敏感混沌策略。此外，我们创建了一个协调者来通过调度这些策略有效触发弹性问题。为了更好地分析它们，我们收集并对所有策略进行排序，生成一个重现序列来定位和重现这些问题。我们在5个广泛使用的商业区块链系统上评估了Phoenix，并检测到了13个之前未知的弹性问题。此外，Phoenix成功地重现了所有问题，平均仅需5.15个步骤。相应的开发人员已修复了这些问题。在此之后，区块链的混沌抵抗时间平均提高了143.9%。这表明Phoenix可以显著提高这些区块链的弹性。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623071](https://doi.org/10.1145/3576915.3623071)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623071](https://dl.acm.org/doi/pdf/10.1145/3576915.3623071)
## Fuzz on the Beach: Fuzzing Solana Smart Contracts.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#fuzz-on-the-beach-fuzzing-solana-smart-contracts) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#fuzz-on-the-beach-fuzzing-solana-smart-contracts)**
### 作者
* Sven Smolka, University of Duisburg-Essen, Essen, Germany
* Jens-Rene Giesen, University of Duisburg-Essen, Essen, Germany
* Pascal Winkler, University of Duisburg-Essen, Essen, Germany
* Oussama Draissi, University of Duisburg-Essen, Essen, Germany
* Lucas Davi, University of Duisburg-Essen, Essen, Germany
* Ghassan Karame, Ruhr University Bochum, Bochum, Germany
* Klaus Pohl, University of Duisburg-Essen, Essen, Germany
### 摘要
> Solana迅速崛起为构建去中心化应用程序（DApps）的热门平台，例如非同质化代币（NFT）的市场。其成功的关键原因是Solana具有低交易费用和高性能，这在一定程度上是由于其无状态编程模型的实现。尽管现有文献中存在智能合约安全的大量工具支持，但目前的解决方案主要针对以太坊虚拟机。不幸的是，Solana执行环境的无状态特性引入了特定于Solana的新型攻击模式，需要重新思考构建漏洞分析方法。在本文中，我们填补了这一空白，并提出了FuzzDelSol，这是第一个针对Solana智能合约的仅二进制覆盖引导模糊测试架构。FuzzDelSol忠实地模拟了运行时的细节，如智能合约的交互。此外，由于大多数Solana合约的源代码不可用，FuzzDelSol操作的是合约的二进制代码。因此，由于缺乏语义信息，我们仔细提取了低级别的程序和状态信息，以开发一组多样化的错误预测模型，涵盖Solana中所有主要错误类别。我们对6049个智能合约进行了广泛评估，结果显示FuzzDelSol的错误预测模型以高精确度和召回率发现了有影响力的漏洞。据我们所知，这是对Solana主网安全景观进行的最大规模评估。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623178](https://doi.org/10.1145/3576915.3623178)
## Lanturn: Measuring Economic Security of Smart Contracts Through Adaptive Learning.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#lanturn-measuring-economic-security-of-smart-contracts-through-adaptive-learning) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#lanturn-measuring-economic-security-of-smart-contracts-through-adaptive-learning)**
### 作者
* Kushal Babel, Cornell Tech & IC3, New York, NY, USA
* Mojan Javaheripi, University of California San Diego, La Jolla, CA, USA
* Yan Ji, Cornell Tech & IC3, New York, NY, USA
* Mahimna Kelkar, Cornell Tech & IC3, New York, NY, USA
* Farinaz Koushanfar, University of California San Diego, La Jolla, CA, USA
* Ari Juels, Cornell Tech & IC3, New York, NY, USA
### 摘要
> 我们介绍了Lanturn：一个通用的自适应学习框架，用于测量组合的去中心化金融（DeFi）智能合约的密码经济安全性。Lanturn发现了由具体交易组成的策略，用于从与特定交易环境交互的智能合约中提取经济价值。我们将策略发现定义为一个黑盒优化问题，并利用一种新颖的自适应学习算法来解决它。Lanturn具有三个关键特性。首先，由于我们对密码经济安全性的黑盒定义，它不需要合约特定的启发式方法或推理。其次，它利用模拟框架，在区块链状态和智能合约机器代码上原生运行，因此Lanturn学习的优化引擎返回的交易可以在链上执行而无需修改。最后，Lanturn具有可扩展性，可以探索包含大量可重新排序或插入新交易的策略。我们在最大和最活跃的DeFi应用（Sushiswap、UniswapV2、UniswapV3和AaveV2）的历史数据上评估了Lanturn。我们的结果显示，Lanturn不仅重新发现了现有的、众所周知的从智能合约中提取价值的策略，还发现了以前未记录的新策略。Lanturn还持续发现高于现实的价值，超过了使用机器人和其他策略代理提取价值的自然基准。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623204](https://doi.org/10.1145/3576915.3623204)
## Riggs: Decentralized Sealed-Bid Auctions.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#riggs-decentralized-sealed-bid-auctions) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#riggs-decentralized-sealed-bid-auctions)**
### 作者
* Nirvan Tyagi, Cornell University, Ithaca, NY, USA
* Arasu Arun, New York University, New York, NY, USA
* Cody Freitag, Cornell Tech, New York, NY, USA
* Riad Wahby, Carnegie Mellon University, Pittsburgh, PA, USA
* Joseph Bonneau, New York University, New York, NY, USA
* David Mazières, Stanford University, Stanford, CA, USA
### 摘要
> 我们介绍了第一个使用定时承诺的完全去中心化封闭竞标拍卖的实际协议。定时承诺确保即使所有参与者在发布竞标后退出，或者如果n个竞标者串通起来试图了解第n个竞标者的出价价值，拍卖也可以公平地完成。我们的协议依赖于一种新颖的不可改变的定时承诺方案，该方案可以有效地支持范围证明，以确定竞标者是否有足够的资金来支付隐藏的出价价值。这使我们能够惩罚放弃出价的用户的出价价值，同时支持在多个拍卖中进行同时竞标，并共享抵押品池。我们的协议具有具体的效率，并且我们已经在与以太坊兼容的智能合约中实施了这些协议，该智能合约可以自动执行拍卖数字资产的付款和交付。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623182](https://doi.org/10.1145/3576915.3623182)
## DSFuzz: Detecting Deep State Bugs with Dependent State Exploration.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#dsfuzz-detecting-deep-state-bugs-with-dependent-state-exploration) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#dsfuzz-detecting-deep-state-bugs-with-dependent-state-exploration)**
### 作者
* Yinxi Liu, The Chinese University of Hong Kong, Hong Kong SAR, Hong Kong
* Wei Meng, The Chinese University of Hong Kong, Hong Kong SAR, Hong Kong
### 摘要
> 传统的基于随机突变的模糊测试器在达到需要特定输入值的深层程序状态方面效果不佳。因此，许多深层错误仍然未被发现。为了增强输入突变的有效性，以前的研究利用了污点分析来识别仅突变这些关键字节的控制依赖关系。然而，现有的工作并未考虑间接的控制依赖关系，即为了走某个分支而必须在一个基本块上设置的关键字节只能通过依赖于一系列其他基本块的基本块来控制。除非访问了该系列基本块的执行路径，否则无法识别这些关键字节。在设置这些关键字节之前，现有方法需要尝试多个路径，耗时长，需要大量计算资源。换句话说，当前的突变策略无法有效地探索识别关键字节的搜索空间。本文旨在探索一种新的输入生成策略，以满足一系列间接的控制依赖关系，从而达到深层程序状态。我们提出了DSFuzz，一种定向模糊测试方案，可以有效构建用于探索特定深层状态的输入。DSFuzz专注于仅通过满足一组间接的控制依赖关系可达到的深层目标。通过分析深层状态间接依赖的条件，它可以生成用于走相应分支的关键字节。同时，它排除了不太可能导致目标状态的控制流。因此，它只需要在有限的搜索空间内进行突变。DSFuzz在检测深层程序状态中的错误方面明显优于现有先进的定向灰盒模糊测试工具：它发现了其他工具无法找到的八个新错误。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616594](https://doi.org/10.1145/3576915.3616594)
## Profile-guided System Optimizations for Accelerated Greybox Fuzzing.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#profile-guided-system-optimizations-for-accelerated-greybox-fuzzing) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#profile-guided-system-optimizations-for-accelerated-greybox-fuzzing)**
### 作者
* Yunhang Zhang, University of Utah, Salt Lake City, UT, USA
* Chengbin Pang, Nanjing University, Nanjing, China
* Stefan Nagy, University of Utah, Salt Lake City, UT, USA
* Xun Chen, Samsung Research America, Mountain View, CA, USA
* Jun Xu, University of Utah, Salt Lake City, UT, USA
### 摘要
> 灰盒模糊测试是一种非常受欢迎的安全测试选项，激励着人们进行大量努力来提高其性能。先前的研究已经带来了许多算法上的进展，显著提升了性能。然而，尽管系统层面的设计对于模糊测试吞吐量有很大影响，但在灰盒模糊测试工具的系统级设计方面付出的关注较少。在本文中，我们探索了灰盒模糊测试的系统级优化。通过一项实证研究，我们揭示了两个系统级优化机会。首先，常见的模糊测试模式与分叉服务器明显减慢了目标执行速度，可以通过将持久模式与高效的状态恢复相结合来优化。其次，灰盒模糊测试工具依赖于本机操作系统（OS）来支持目标程序发出的交互，涉及复杂但与模糊测试无关的操作。简化OS交互代表了另一个优化机会。我们开发了两种技术，通过对模糊测试工具进行短时间的分析，从而实现上述优化。第一种技术通过从分析中学习关键的执行状态，并对目标程序进行修补以重置它们，实现了可靠高效的持久模式。第二种技术引入用户空间抽象来模拟OS功能，减少昂贵的OS交互。通过对20个程序和MAGMA基准进行评估，我们证明了我们的优化可以加速AFL和AFL++，提高代码覆盖率和更快地发现错误。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616636](https://doi.org/10.1145/3576915.3616636)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616636](https://dl.acm.org/doi/pdf/10.1145/3576915.3616636)
## NestFuzz: Enhancing Fuzzing with Comprehensive Understanding of Input Processing Logic.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#nestfuzz-enhancing-fuzzing-with-comprehensive-understanding-of-input-processing-logic) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#nestfuzz-enhancing-fuzzing-with-comprehensive-understanding-of-input-processing-logic)**
### 作者
* Peng Deng, Fudan University, Shanghai, China
* Zhemin Yang, Fudan University, Shanghai, China
* Lei Zhang, Fudan University, Shanghai, China
* Guangliang Yang, Fudan University, Shanghai, China
* Wenzheng Hong, Fudan University, Shanghai, China
* Yuan Zhang, Fudan University, Shanghai, China
* Min Yang, Fudan University, Shanghai, China
### 摘要
> 模糊测试是一种最流行且实用的安全分析技术之一。在这项研究中，我们旨在通过一种名为NestFuzz的新型输入感知模糊方法来解决高质量输入生成的关键问题。NestFuzz可以普遍且自动地建模输入格式规范并生成有效输入。NestFuzz背后的关键观察是目标程序的代码语义总是强烈暗示所需的输入格式。因此，NestFuzz应用细粒度程序分析来理解输入处理逻辑，特别是跨不同输入字段和子结构的依赖关系。为此，我们设计了一个新型数据结构——输入处理树，以及一种新的级联依赖感知变异策略来驱动模糊测试。通过对20个经过深入测试的流行程序的评估表明，NestFuzz是有效且实用的。与现有的模糊测试工具（如AFL、AFLFast、AFL++、MOpt、AFLSmart、WEIZZ、ProFuzzer和TIFF）相比，NestFuzz在代码覆盖率和安全漏洞检测方面取得了巨大进展。NestFuzz发现了46个独特且严重的漏洞。截止本文撰写时，其中39个已得到确认，并已被分配CVE编号的有37个。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623103](https://doi.org/10.1145/3576915.3623103)
## Lifting Network Protocol Implementation to Precise Format Specification with Security Applications.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#lifting-network-protocol-implementation-to-precise-format-specification-with-security-applications) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#lifting-network-protocol-implementation-to-precise-format-specification-with-security-applications)**
### 作者
* Qingkai Shi, Purdue University, West Lafayette, IN, USA
* Junyang Shao, Purdue University, West Lafayette, IN, USA
* Yapeng Ye, Purdue University, West Lafayette, IN, USA
* Mingwei Zheng, Purdue University, West Lafayette, IN, USA
* Xiangyu Zhang, Purdue University, West Lafayette, IN, USA
### 摘要
> 对于许多安全应用来说，推断协议格式至关重要，但现有技术往往无法涵盖全部情况，因为几乎所有技术都是以动态分析为基础，并由有限数量的网络数据包驱动。如果输入数据包中没有某个特征，那么在生成格式时就会忽略该特征。为了解决这个问题，我们开发了一种新颖的静态程序分析方法，通过从常见自顶向下协议解析器的实现中推断协议消息格式。然而，为了实现全面性、精确性和高效性的三重目标，我们必须解决两个挑战，即路径爆炸和无序路径约束。为此，我们的方法使用抽象解释生成一种称为抽象格式图的新型数据结构。图结构将精确但成本高昂的操作限制在小范围内，从而同时确保精确性和效率。我们推断出的格式具有较高的覆盖率，并准确指定数据包字段之间的字段边界和语义约束。我们的评估结果显示，我们可以在一分钟内推断出具有95%以上精确度和召回率的协议格式，比四个基线方法都要好。我们推断出的格式可以显着改进现有的协议模糊测试工具，将其覆盖范围提高20%至260%，并发现了53个具有47个CVE编号的零日漏洞。我们还提供了使用我们推断出的格式进行网络流量审计和网络入侵检测的案例研究。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616614](https://doi.org/10.1145/3576915.3616614)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616614](https://dl.acm.org/doi/pdf/10.1145/3576915.3616614)
## MicPro: Microphone-based Voice Privacy Protection.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#micpro-microphone-based-voice-privacy-protection) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#micpro-microphone-based-voice-privacy-protection)**
### 作者
* Shilin Xiao, Zhejiang University, Hangzhou, China
* Xiaoyu Ji, Zhejiang University, Hangzhou, China
* Chen Yan, Zhejiang University, Hangzhou, China
* Zhicong Zheng, Zhejiang University, Hangzhou, China
* Wenyuan Xu, Zhejiang University, Hangzhou, China
### 摘要
> 数百小时的音频被录制并通过互联网传输，用于语音互动，例如虚拟电话或语音识别。由于这些录音被上传，嵌入的生物特征信息，即语音纹理，被不必要地暴露出来。本文提出了第一个增强隐私的麦克风模块（即MicPro），可以产生匿名音频录音，同时抑制生物特征信息，同时保留人类感知的语音质量或语音识别的语言内容。由于麦克风模块的硬件能力有限，以前在软件级别修改录音的方法是不适用的。为了在这种情况下实现匿名性，MicPro通过修改线性声谱频率（LSFs）转换共享的形音框架，来执行由流行编解码器（CELP）提供的音色变换，从而实现声道器官结构独特的每个人的特定共振峰。为了在匿名性和可用性之间取得平衡，我们使用多目标遗传算法（NSGA-II）来优化变换系数。我们在现成的麦克风模块上实现了MicPro，并在几个ASV系统、ASR系统、语料库和实际环境中评估了MicPro的性能。我们的实验证明，对于最先进的ASV系统，MicPro优于现有的利用信号处理（SP）技术的基于软件的策略，实现了比现有成果更高5~10％的等误识别率（EER）和20％更高的最小误识别率（MMR），同时保持可比较的可用性水平。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616616](https://doi.org/10.1145/3576915.3616616)
## TileMask: A Passive-Reflection-based Attack against mmWave Radar Object Detection in Autonomous Driving.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#tilemask-a-passive-reflection-based-attack-against-mmwave-radar-object-detection-in-autonomous-driving) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#tilemask-a-passive-reflection-based-attack-against-mmwave-radar-object-detection-in-autonomous-driving)**
### 作者
* Yi Zhu, University at Buffalo, the State University of New York, Buffalo, NY, USA
* Chenglin Miao, Iowa State University, Ames, IA, USA
* Hongfei Xue, University of North Carolina at Charlotte, Charlotte, NC, USA
* Zhengxiong Li, University of Colorado Denver, Denver, CO, USA
* Yunnan Yu, University at Buffalo, the State University of New York, Buffalo, NY, USA
* Wenyao Xu, University at Buffalo, the State University of New York, Buffalo, NY, USA
* Lu Su, Purdue University, West Lafayette, IN, USA
* Chunming Qiao, University at Buffalo, the State University of New York, Buffalo, NY, USA
### 摘要
> 在自动驾驶领域，毫米波（mmWave）雷达因其在各种天气和照明条件下的稳定性和可靠性而被广泛应用于物体检测。对于雷达物体检测，深度神经网络（DNNs）因其更具鲁棒性和准确性，并且可以为检测到的物体提供丰富的语义信息，这对于自动驾驶车辆（AVs）做出决策至关重要，因此变得越来越重要。然而，最近的研究表明，DNNs容易受到对抗性攻击。尽管基于DNN的雷达物体检测模型的快速发展，但尚无研究其对对抗性攻击的易受攻击性。虽然一些欺骗攻击方法提出了通过使用一些特殊设备主动发送特定信号来攻击雷达传感器，但这些攻击需要设备和雷达之间亚纳秒级别的同步，成本非常高，限制了其在实际世界中的可行性。此外，这些攻击方法无法有效攻击基于DNN的雷达物体检测。为了解决上述问题，本文研究了使用少量对抗性物体通过被动反射攻击基于DNN的雷达物体检测模型的可能性。这些物体可以使用低成本的3D打印和金属薄片轻松制造。通过将这些对抗性物体放置在目标车辆的特定位置，我们可以轻松欺骗受害AV的雷达物体检测模型。实验结果表明，攻击者可以仅使用两个对抗性物体，并将它们伪装成汽车标志来达到攻击目标，具有良好的隐蔽性和灵活性。据我们所知，这是第一项使用低成本、易获得且易于隐藏的几何形状物体进行基于被动反射的攻击DNN雷达物体检测模型的研究。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616661](https://doi.org/10.1145/3576915.3616661)
## SHERLOC: Secure and Holistic Control-Flow Violation Detection on Embedded Systems.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#sherloc-secure-and-holistic-control-flow-violation-detection-on-embedded-systems) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#sherloc-secure-and-holistic-control-flow-violation-detection-on-embedded-systems)**
### 作者
* Xi Tan, University at Buffalo, Buffalo, NY, USA
* Ziming Zhao, University at Buffalo, Buffalo, NY, USA
### 摘要
> 基于微控制器的嵌入式系统通常使用低级语言进行编程，并容易受到控制流劫持攻击。防止此类攻击的一种方法是实施控制流完整性（CFI），但内联CFI实施可能在嵌入式系统中面临挑战。例如，它会增加二进制文件大小并改变内存布局。基于跟踪的控制流违规检测（CFVD）提供了一种不需要对受保护软件进行仪器化或更改内存布局的替代方法。然而，现有的桌面系统中使用的CFVD方法需要内核修改以存储和分析跟踪结果，这限制了它们在监视非特权应用程序方面的使用。但是，嵌入式系统是中断驱动的，大部分处理都在特权模式下进行。因此，提供一种可以监视特权和非特权组件之间以及其中的控制流传输的整体和系统导向的CFVD解决方案至关重要。在本文中，我们提出了SHERLOC，一种专为基于微控制器的嵌入式系统设计的安全和整体的控制流违规检测机制。SHERLOC通过配置硬件跟踪单元、存储跟踪记录并在可信执行环境中执行违规检测算法来确保安全，以防止特权程序绕过监视或篡改跟踪结果。我们通过形式化问题并监视非特权和特权程序的前向和后向边以及非特权和特权组件之间的控制流传输来解决实现整体和系统导向的CFVD的挑战。具体而言，SHERLOC通过使用中断和调度感知的违规检测算法来克服在运行时识别合法异步中断和上下文切换的挑战。我们在ARMv8-M架构上的评估结果表明SHERLOC的有效性和效率。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623077](https://doi.org/10.1145/3576915.3623077)
## Caveat (IoT) Emptor: Towards Transparency of IoT Device Presence.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#caveat-iot-emptor-towards-transparency-of-iot-device-presence) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#caveat-iot-emptor-towards-transparency-of-iot-device-presence)**
### 作者
* Sashidhar Jakkamsetti, University of California, Irvine, Irvine, CA, USA
* Youngil Kim, University of California, Irvine, Irvine, CA, USA
* Gene Tsudik, University of California, Irvine, Irvine, CA, USA
### 摘要
> 随着各种类型的物联网设备进入许多环境和我们日常生活的许多方面，对它们存在和功能的意识成为一个重要关切的来源。隐藏的物联网设备可以通过感知对附近毫无防备的用户进行窥探，并通过执行对不知情的用户所在的环境产生影响。这分别引发了隐私、安全和安全问题。隐藏的物联网设备的危险性已被认识到，并且先前的研究提出了一些缓解方法，大多基于流量分析或使用专门的硬件来揭示设备。虽然这些方法在一定程度上有效，但目前还没有全面的物联网设备透明性解决方案。该论文受到最近隐私法规（GDPR和CCPA）的部分推动，构建了一个名为PAISA的物联网设备适应性隐私根可信任架构：Privacy-Agile IoT Sensing and Actuation。它保证了附近物联网设备存在及其功能的及时和安全的公告。PAISA有两个组成部分：一个在物联网设备上，即使所有设备软件都被破坏，也能保证定期公告其存在；另一个在用户设备上，用于捕获和处理公告。PAISA不需要硬件修改，它使用了一种流行的现成可信执行环境（TEE）——ARM TrustZone。为了证明其可行性，PAISA被实例化为一个开源原型，包括：通过IEEE 802.11 WiFi信标进行公告的物联网设备和一个捕获和处理公告的基于Android智能手机的应用程序。还讨论了PAISA设计和原型的安全性和性能。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623089](https://doi.org/10.1145/3576915.3623089)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623089](https://dl.acm.org/doi/pdf/10.1145/3576915.3623089)
## CryptoBap: A Binary Analysis Platform for Cryptographic Protocols.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#cryptobap-a-binary-analysis-platform-for-cryptographic-protocols) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#cryptobap-a-binary-analysis-platform-for-cryptographic-protocols)**
### 作者
* Faezeh Nasrabadi, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Robert Künnemann, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Hamed Nemati, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 我们介绍了CryptoBap，这是一个用于验证加密协议（ARMv8和RISC-V机器代码）的弱保密性和身份验证的平台。我们通过将协议的二进制代码转换为中间表示形式，然后执行针对加密的符号化执行来实现这一目标，以自动提取代表协议的所有执行路径的模型。我们的符号化执行能够解决间接跳转并支持使用循环概括技术的有界循环，该技术是完全自动化的。然后，将提取的模型转换为可通过第三方工具链用于自动验证的模型，并使用ProVerif和CryptoVerif进行自动验证。我们证明了所提方法的有效性，并使用CryptoBap验证了从玩具示例到真实世界协议的多个案例研究，包括SSH的实现TinySSH和一种现代VPN协议WireGuard。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623090](https://doi.org/10.1145/3576915.3623090)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623090](https://dl.acm.org/doi/pdf/10.1145/3576915.3623090)
## A Generic Methodology for the Modular Verification of Security Protocol Implementations.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#a-generic-methodology-for-the-modular-verification-of-security-protocol-implementations) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#a-generic-methodology-for-the-modular-verification-of-security-protocol-implementations)**
### 作者
* Linard Arquint, ETH Zurich, Zürich, Switzerland
* Malte Schwerhoff, ETH Zurich, Zürich, Switzerland
* Vaibhav Mehta, Cornell University, Ithaca, NY, USA
* Peter Müller, ETH Zurich, Zürich, Switzerland
### 摘要
> 安全协议是现代 IT 系统的基本构建模块。设计或实施上的微小缺陷可能会危及整个系统的安全性。因此，通过形式验证来证明不存在这类缺陷非常重要。许多现有工作都侧重于对协议模型进行验证，但这种方式不能证明它们的实际实现是安全的。针对协议实现的验证技术（例如通过代码生成或模型提取）通常对所使用的编程语言和代码设计施加严格限制，这可能导致次优的实现。在本文中，我们提出了一种在协议实现层面上直接进行强安全属性模块化验证的方法。我们的方法利用最先进的验证逻辑和工具来支持各种实现和编程语言。我们通过验证 Go 语言实现的 Needham-Schroeder-Lowe、Diffie-Hellman 密钥交换和 WireGuard 协议的内存安全性和安全性，还包括 WireGuard 的前向保密和单射协议验证结果来展示其有效性。我们还展示了我们的方法对特定语言或程序验证器的不可知性，并给出了一个使用 C 语言的原型实现。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623105](https://doi.org/10.1145/3576915.3623105)
## Provably Unlinkable Smart Card-based Payments.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#provably-unlinkable-smart-card-based-payments) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#provably-unlinkable-smart-card-based-payments)**
### 作者
* Sergiu Bursuc, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Ross Horne, University of Luxembourg & University of Strathclyde, Esch-sur-Alzette, Luxembourg
* Sjouke Mauw, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Semen Yurkov, University of Luxembourg, Esch-sur-Alzette, Luxembourg
### 摘要
> 目前最普遍的基于智能卡的支付方法EMV，没有为其用户提供隐私保护。交易细节和卡号以明文形式发送，使得持卡人的个人信息可以被追踪和分析。由于公众对隐私问题的意识日益增长，相关立法如GDPR也在出台，我们认为有必要研究在不损害EMV的基本安全保证和功能特性的前提下，使支付匿名和不可关联的可能性。本文关注在设计此类协议中功能和隐私需求之间的权衡。我们提出了UTX协议，这是一个满足这些需求的增强型支付协议，并使用基于应用π演算的技术对关键安全和隐私属性进行了形式化认证。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623109](https://doi.org/10.1145/3576915.3623109)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623109](https://dl.acm.org/doi/pdf/10.1145/3576915.3623109)
## CheckMate: Automated Game-Theoretic Security Reasoning.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#checkmate-automated-game-theoretic-security-reasoning) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#checkmate-automated-game-theoretic-security-reasoning)**
### 作者
* Lea Salome Brugger, ETH Zurich, Zurich, Switzerland
* Laura Kovács, TU Wien, Vienna, Austria
* Anja Petkovic Komel, TU Wien, Vienna, Austria
* Sophie Rain, TU Wien, Vienna, Austria
* Michael Rawson, TU Wien, Vienna, Austria
### 摘要
> 我们提出了CheckMate框架，用于对博弈论安全分析进行完全自动化，特别关注区块链技术。CheckMate分析被建模为游戏的协议，以评估它们的博弈论安全性-也就是这些协议是否具备激励兼容性和拜占庭容错性。该框架要么通过提供防御策略来证明协议的安全性，要么提供所有可能的攻击向量。对于不安全的协议，如果存在最弱前提条件，则CheckMate还可以提供使这些协议变得安全的最弱前提条件。CheckMate在一阶线性实数算术中实现了博弈论安全的声音和完整编码，从而将安全分析降为满足性解决。 CheckMate进一步自动化了算术项的情况划分处理，实验表明CheckMate具有可扩展性，可分析数万亿策略的游戏，这些游戏模拟了比特币闪电网络的各个阶段。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623183](https://doi.org/10.1145/3576915.3623183)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623183](https://dl.acm.org/doi/pdf/10.1145/3576915.3623183)
## Recursion over Public-Coin Interactive Proof Systems; Faster Hash Verification.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#recursion-over-public-coin-interactive-proof-systems-faster-hash-verification) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#recursion-over-public-coin-interactive-proof-systems-faster-hash-verification)**
### 作者
* Alexandre Belling, Consensys, Linea, Paris, France
* Azam Soleimanian, Consensys, Linea, Paris, France
* Olivier Bégassat, Consensys, Linea, Paris, France
### 摘要
> SNARK是一种众所周知的密码学工具家族，在规模化计算完整性领域得到越来越广泛的应用。在这个领域中，许多研究已经引入了适用于SNARK的密码学原语：哈希、加密和签名验证。尽管所有努力都致力于创建更快可证明的密码学原语，但实际上仍存在一个重要的性能瓶颈。本文提出了一种递归技术，与使用Groth16（Eurocrypt 2016）证明“MiMC哈希”相比，可以将证明者的效率提高一个数量级。我们使用GKR（一种由Goldwasser et al.在STOC 2008中提出的众所周知的公共硬币争论系统）来证明哈希计算的完整性，并将GKR验证器嵌入到SNARK电路中。挑战在于GKR是一种公共硬币交互协议，而简单地应用Fiat-Shamir可能导致性能比直接应用现有技术更差。这是因为Fiat-Shamir本身涉及对大型字符串进行哈希计算。我们利用SNARK方案通常具有的一种特性，构建了一种协议，其中Fiat-Shamir哈希具有非常短的输入。我们所提出的技术是通用的，可应用于任何适用于SNARK友好哈希、大多数已知的SNARK方案和（单轮）公共硬币争论系统的情况下取代GKR。我们强调，尽管我们的通用编译器在随机预言模型中是安全的，但我们具体的实例化（即GKR加上外层SNARK）只能被启发式地证明是安全的。这是因为我们首先需要将GKR协议转换为单轮协议。因此，从第二轮开始，GKR的随机预言被替换为外层SNARK中的具体哈希，使得安全性证明成为启发式证明。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623078](https://doi.org/10.1145/3576915.3623078)
## Modular Sumcheck Proofs with Applications to Machine Learning and Image Processing.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#modular-sumcheck-proofs-with-applications-to-machine-learning-and-image-processing) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#modular-sumcheck-proofs-with-applications-to-machine-learning-and-image-processing)**
### 作者
* David Balbás, IMDEA Software Institute & Universidad Politécnica de Madrid, Madrid, Spain
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Maria Isabel González Vasco, Universidad Carlos III de Madrid, Madrid, Spain
* Damien Robissout, IMDEA Software Institute, Madrid, Spain
* Claudio Soriente, NEC Laboratories Europe, Madrid, Spain
### 摘要
> 密码学证明系统在外包数据处理任务的应用中提供完整性、公平性和隐私。然而，通用的证明系统在处理大输入时不具备良好的可扩展性。与此同时，针对具体应用（如机器学习或图像处理）的临时解决方案更加高效，但缺乏模块化，因此很难进行扩展或与数据处理流水线的其他工具组合使用。在本文中，我们将定制解决方案的性能与通用证明系统的多功能性相结合。为此，我们引入了一个用于可验证顺序操作的模块化框架。我们的框架的主要工具是一种名为带指纹数据的可验证评估方案（VE）的新信息理论原语，它捕获了各种基于Sumcheck的互动证明（包括成熟的GKR协议）的特性。因此，我们展示了如何组合特定函数的VE以实现数据处理流水线的可验证性。我们提出了一种新颖的卷积操作的VE，它可以处理多个输入输出通道和批量处理，并将其应用于我们的框架中，构建了（卷积）神经网络和图像处理的证明。我们实现了我们的证明系统的原型，并展示了与最先进技术相比，证明时间缩短了5倍，证明长度缩短了10倍，并且具有渐近改进的优点。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623160](https://doi.org/10.1145/3576915.3623160)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623160](https://dl.acm.org/doi/pdf/10.1145/3576915.3623160)
## Batchman and Robin: Batched and Non-batched Branching for Interactive ZK.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#batchman-and-robin-batched-and-non-batched-branching-for-interactive-zk) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#batchman-and-robin-batched-and-non-batched-branching-for-interactive-zk)**
### 作者
* Yibin Yang, Georgia Institute of Technology, Atlanta, GA, USA
* David Heath, University of Illinois Urbana-Champaign, Urbana, IL, USA
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
* Muthuramakrishnan Venkitasubramaniam, Ligero Inc., Rochester, NY, USA
### 摘要
> 矢量混淆线性评估（VOLE）支持快速扩展的交互式零知识（ZK）证明。尽管在基于VOLE的ZK中有了一些改进，但将证明语句编译为控制流混淆形式（例如电路）仍然导致证明代价昂贵。一个突出表现出这种低效性的有用情况是当语句是一个子句的析取 \mathcalL _1 łor \cdots łor \mathcalL _B。通常，ZK要求付出处理所有B个分支的代价。先前的研究已经展示了如何避免这种通信开销，但尚未解决计算开销的问题。我们的主要结果 \mathsfBatchman 是渐进和具体高效的基于VOLE的批处理析取ZK，即包含R重复相同析取的语句。这对于在ZK中模拟CPU步骤非常关键。我们的证明者和验证者复杂度仅为 \bigO(RB+R|\C|+B|\C|)，其中 |\C| 是B个分支的最大电路大小。先前的研究的计算复杂度为 RB|\C|。对于非批处理的析取，我们还构建了基于VOLE的ZK协议 \mathsfRobin ，它仅具有通信效率。对于小域和统计安全参数 łambda，该协议的通信性能优于先前的最新研究成果（\mathsfMac'n'Cheese，Baum等，CRYPTO'21）多达 łambda 倍。我们的实现优于先前的最新研究成果。例如，与 \mathsfMac'n'Cheese（布尔，单一析取）相比，我们的性能提高了多达6倍；对于算术批处理的析取，我们的实验结果显示，与 \mathsfQuickSilver（Yang等，CCS'21）相比，我们的性能提高了多达70倍，并且相对于 \mathsfAntMan（Weng等，CCS'22），提高了多达36倍。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623169](https://doi.org/10.1145/3576915.3623169)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623169](https://dl.acm.org/doi/pdf/10.1145/3576915.3623169)
## Verifiable Mix-Nets and Distributed Decryption for Voting from Lattice-Based Assumptions.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#verifiable-mix-nets-and-distributed-decryption-for-voting-from-lattice-based-assumptions) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#verifiable-mix-nets-and-distributed-decryption-for-voting-from-lattice-based-assumptions)**
### 作者
* Diego F. Aranha, Aarhus University, Aarhus, Denmark
* Carsten Baum, DTU Copenhagen, Copenhagen, Denmark
* Kristian Gjøsteen, Norwegian University of Science and Technology, Trondheim, Norway
* Tjerand Silde, Norwegian University of Science and Technology, Trondheim, Norway
### 摘要
> 加密投票协议近期受到从业人员的广泛关注，原因是它们（计划）在爱沙尼亚、瑞士、法国和澳大利亚等国家使用。实用协议通常依赖于经过测试的设计，例如混合和解密范式。在这种范式中，多个服务器可验证地洗牌加密选票，然后以分布式方式解密。尽管存在几种基于离散对数型假设的实现这种范式的高效协议，但是对于格的后量子替代方法，情况就不太清楚了。这是因为基于离散对数的投票协议的设计思想不容易轻易转换到格设置中，由于特定问题，如噪声增长和近似关系。本研究提出了一种基于BGV密码文的可验证秘密洗牌和兼容分布式解密协议。洗牌基于已知值的承诺的扩展版本，结合了正确重洗的摊销证明。可验证分布式解密协议使用了噪声淹没，以零知识证明解密步骤的正确性。然后，这两种基本原语被用于从基于格的假设中实现混合和解密的电子投票范式。我们为系统提供了具体的参数，估计了每个组件的大小，并提供了所有重要子协议的实现。我们的实验结果表明，这种洗牌和解密协议适用于真实世界的电子投票方案。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616683](https://doi.org/10.1145/3576915.3616683)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616683](https://dl.acm.org/doi/pdf/10.1145/3576915.3616683)
## Turning Privacy-preserving Mechanisms against Federated Learning.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#turning-privacy-preserving-mechanisms-against-federated-learning) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#turning-privacy-preserving-mechanisms-against-federated-learning)**
### 作者
* Marco Arazzi, University of Pavia, Pavia, Italy
* Mauro Conti, University of Padua & Delft University of Technology, Padova, Italy
* Antonino Nocera, University of Pavia, Pavia, Italy
* Stjepan Picek, Radboud University & Delft University of Technology, Nijmegen, Netherlands
### 摘要
> 最近，研究人员成功地利用图神经网络（GNN）构建了增强的推荐系统，因为它们具备从参与实体之间的交互中学习模式的能力。此外，先前的研究已经研究了联邦学习作为实现本地隐私保护机制的主要解决方案，以构建全局GNN模型，而无需将敏感数据收集到单个计算单元中。然而，由于联邦客户端产生的本地模型更新的分析可能返回与敏感本地数据相关的信息，可能会引发隐私问题。出于这个原因，研究人员提出了结合差分隐私策略和基于社区的方法的解决方案，这些方法涉及组合邻居客户端的数据，使得个体本地更新对于本地敏感数据的依赖性较小。在本文中，我们发现了这种配置中的一个关键安全漏洞，并设计了一种攻击，能够欺骗联邦学习的最新防御措施。所提出的攻击包括两种操作模式，第一种模式专注于收敛抑制（对抗模式），第二种模式旨在对全局联邦模型进行伪造评级注入（后门模式）。实验结果显示了我们的攻击在两种模式下的有效性，在对抗模式的所有测试中平均返回60％的性能损害，并在后门模式的测试中完全有效的后门功能在93％的情况下实现。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623114](https://doi.org/10.1145/3576915.3623114)
## martFL: Enabling Utility-Driven Data Marketplace with a Robust and Verifiable Federated Learning Architecture.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#martfl-enabling-utility-driven-data-marketplace-with-a-robust-and-verifiable-federated-learning-architecture) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#martfl-enabling-utility-driven-data-marketplace-with-a-robust-and-verifiable-federated-learning-architecture)**
### 作者
* Qi Li, Tsinghua University & Zhongguancun Laboratory, Beijing, China
* Zhuotao Liu, Tsinghua University & Zhongguancun Laboratory, Beijing, China
* Qi Li, Tsinghua University & Zhongguancun Laboratory, Beijing, China
* Ke Xu, Tsinghua University & Zhongguancun Laboratory, Beijing, China
### 摘要
> 机器学习模型的开发需要大量的训练数据。数据市场是一个关键平台，用于交易高质量和不公开在互联网上的私有领域数据。然而，随着数据隐私的日益重要，直接交换原始数据变得不合适。联邦学习(Federated Learning, FL)是一种分布式机器学习范式，它在多个参与方之间交换数据效用（以本地模型或梯度的形式），而不直接共享原始数据。然而，我们认识到将现有的FL架构应用于构建数据市场存在几个关键挑战。(i) 在现有的FL架构中，数据采集者(Data Acquirer, DA)无法在交易之前私下评估不同数据提供者(Data Providers, DPs)提交的本地模型的质量；(ii) 现有FL设计中的模型聚合协议无法有效地排除恶意的DPs，而又不会对DA的（可能存在偏见的）根数据集进行"过度拟合"；(iii) 以前的FL设计缺乏一种合适的计费机制，以便强制DA根据DPs的贡献公平分配奖励。为了解决上述问题，我们提出了martFL，这是第一个专门设计用于实现安全的基于效用的数据市场的联邦学习架构。在较高的层次上，martFL由两个创新设计提供支持：(i)一种质量感知的模型聚合协议，允许DA适当地排除聚合中的低质量甚至有害的本地模型，即使DA的根数据集存在偏差；(ii)一种可验证的数据交易协议，使得DA可以简洁地和零知识地证明它已根据承诺的权重忠实地聚合这些本地模型。这使得DPs可以明确地要求与其权重/贡献成比例的奖励。我们实现了martFL的原型，并对各种任务进行了广泛评估。结果表明，martFL可以提高模型准确性高达25%，同时节约高达64%的数据采集成本。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623134](https://doi.org/10.1145/3576915.3623134)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623134](https://dl.acm.org/doi/pdf/10.1145/3576915.3623134)
## Unraveling the Connections between Privacy and Certified Robustness in Federated Learning Against Poisoning Attacks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#unraveling-the-connections-between-privacy-and-certified-robustness-in-federated-learning-against-poisoning-attacks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#unraveling-the-connections-between-privacy-and-certified-robustness-in-federated-learning-against-poisoning-attacks)**
### 作者
* Chulin Xie, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Yunhui Long, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Pin-Yu Chen, IBM Research, New York, NY, USA
* Qinbin Li, UC Berkeley, Berkeley, CA, USA
* Sanmi Koyejo, Stanford University, Stanford, CA, USA
* Bo Li, University of Illinois at Urbana-Champaign, Urbana, IL, USA
### 摘要
> 联邦学习（FL）提供了一种高效的范式，可以利用分布式用户的数据共同训练全局模型。由于本地训练数据来自不同的用户，这些用户可能不可信，一些研究表明FL容易受到污染攻击。同时，为了保护本地用户的隐私，通常会采用差分隐私的方式来进行FL训练（DPFL）。因此，在本文中我们要探讨的问题是：差分隐私与FL在抵御污染攻击方面的认证鲁棒性之间存在哪些内在联系？我们是否能够利用DPFL的固有隐私属性为FL提供认证鲁棒性？我们是否能够进一步提高FL的隐私来改善这种鲁棒性认证？我们首先研究FL的用户级和实例级隐私，并提供形式化隐私分析以实现改进的实例级隐私。然后，我们提供两个鲁棒性认证准则：基于用户和实例级别的DPFL的认证预测和认证攻击无效性。从理论上讲，我们根据给定数量的敌对用户或实例提供DPFL的认证鲁棒性。从实证上看，我们在不同数据集上进行了大量实验，验证了我们的理论在各种污染攻击下的有效性。我们发现，在DPFL中增加隐私保护水平会导致更强的认证攻击无效性，但并不一定会导致更强的认证预测。因此，实现最佳的认证预测需要在隐私和效用损失之间找到适当的平衡。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623193](https://doi.org/10.1145/3576915.3623193)
## MESAS: Poisoning Defense for Federated Learning Resilient against Adaptive Attackers.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#mesas-poisoning-defense-for-federated-learning-resilient-against-adaptive-attackers) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#mesas-poisoning-defense-for-federated-learning-resilient-against-adaptive-attackers)**
### 作者
* Torsten Krauß, University of Würzburg, Würzburg, Germany
* Alexandra Dmitrienko, University of Würzburg, Würzburg, Germany
### 摘要
> 联邦学习（FL）通过保护数据隐私、减少通信成本和改善模型在不同数据源上的性能来增强分散式机器学习。然而，FL面临非针对性污染攻击和有目标的后门攻击等漏洞，给模型的完整性和安全性带来挑战。由于其隐蔽性质，预防后门攻击尤其具有挑战性。现有的缓解技术已经显示出一定的效果，但往往忽视了现实中的对手和不同的数据分布。本研究引入了强适应性对手的概念，这些对手能够同时适应多个目标。通过广泛的实证测试，我们揭示了现有防御在这种对手模型下的脆弱性。我们提出了适应更加现实场景和对手模型的新防御方法MESAS（Me<u>tric-Ca</u>s<u>c</u>a<u>de</u>s）。MESAS同时使用多个检测指标来对抗被污染的模型更新，给适应性攻击者带来了一个复杂的多目标问题。在对九个后门和三个数据集进行综合评估的过程中，MESAS在区分后门与数据分布相关的扭曲方面表现优于现有的防御手段，无论是在客户端内部还是在客户端之间。MESAS在现实世界的数据环境中对抗强适应性对手提供了强大的防御，而平均开销仅为24.37秒。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623212](https://doi.org/10.1145/3576915.3623212)
## Accio: Variable-Amount, Optimized-Unlinkable and NIZK-Free Off-Chain Payments via Hubs.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#accio-variable-amount-optimized-unlinkable-and-nizk-free-off-chain-payments-via-hubs) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#accio-variable-amount-optimized-unlinkable-and-nizk-free-off-chain-payments-via-hubs)**
### 作者
* Zhonghui Ge, Shanghai Jiao Tong University, Shanghai, China
* Jiayuan Gu, Shanghai Jiao Tong University, Shanghai, China
* Chenke Wang, Shanghai Jiao Tong University, Shanghai, China
* Yu Long, Shanghai Jiao Tong University, Shanghai, China
* Xian Xu, East China University of Science and Technology, Shanghai, China
* Dawu Gu, Shanghai Jiao Tong University, Shanghai, China
### 摘要
> 支付通道中心（PCH）作为实现用户间快速离链支付的有希望的解决方案。它们通过使用一个不可信的洗钱机来在付款人和收款人之间中继付款，从而享受低成本和高扩展性的优势。然而，最新的支持可变金额支付的隐私保护支付通道中心解决方案存在着有限的不可链路性问题，例如易受到中止攻击的漏洞。此外，该解决方案使用了零知识证明，这在计算时间和通信开销方面产生了巨大成本。因此，如何设计支持可变金额支付和不可链路性的PCH，并尽可能减少使用高成本的加密工具，对于离链支付的大规模实际应用具有重要意义。在本文中，我们提出了Accio，一种具有优化不可链路性的可变金额支付通道中心解决方案，通过对不可链路性的深入研究和构建一种新的加密工具来实现。我们提供了详细的Accio协议，并在普适可组合框架下对其安全性和隐私性进行了正式证明。我们的原型证明了其可行性，并评估结果显示Accio在通信和计算成本方面优于其他最先进的作品。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616577](https://doi.org/10.1145/3576915.3616577)
## CryptoConcurrency: (Almost) Consensusless Asset Transfer with Shared Accounts.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#cryptoconcurrency-almost-consensusless-asset-transfer-with-shared-accounts) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#cryptoconcurrency-almost-consensusless-asset-transfer-with-shared-accounts)**
### 作者
* Andrei Tonkikh, Télécom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Pavel Ponomarev, Georgia Institute of Technology, Atlanta, GA, USA
* Petr Kuznetsov, Télécom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Yvonne-Anne Pignolet, DFINITY, Zurich, Switzerland
### 摘要
> 典型的区块链协议使用共识机制确保相互不信任的用户就共享数据的操作顺序达成一致。然而，众所周知，作为区块链最受欢迎的应用之一，资产转移系统可以在无需共识的情况下实现。假设没有账户可以同时访问，并且每个账户属于单个所有者，我们可以高效地以纯异步、无共识的方式实现资产转移系统。同时也已经证明，在共享账户上实现资产转移是不可能的，除非有共识机制的支持。在本文中，我们提出了CryptoConcurrency，一种资产转移协议，它允许并行处理并发访问，无需共识，只要可能。更具体地说，如果对某个账户的并发转账操作不会导致超支，即所有操作都可以在账户余额不低于零的情况下执行，它们将并行进行。否则，账户的所有者可能需要访问外部共识对象。值得注意的是，我们避免依赖中央的、普遍可信的共识机制，并允许每个账户使用自己的共识实现，只有该账户的所有者才信任该实现。这提供了更大的去中心化和灵活性。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616587](https://doi.org/10.1145/3576915.3616587)
## Interchain Timestamping for Mesh Security.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#interchain-timestamping-for-mesh-security) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#interchain-timestamping-for-mesh-security)**
### 作者
* Ertem Nusret Tas, Stanford University, Stanford, CA, USA
* Runchao Han, BabylonChain, Palo Alto, CA, USA
* David Tse, Stanford University, Stanford, CA, USA
* Mingchao Yu, BabylonChain, Palo Alto, CA, USA
### 摘要
> 翻译：自比特币发明以来的十四年间，出现了许多无需权限的区块链。每个这样的区块链都提供了一个公共账本，任何人都可以对其进行写入和读取。在这个多链世界中，一个自然的问题出现了：现有的区块链（消费链）通过仅仅读取和写入其他k个现有区块链（提供者链），可以获得什么样的最佳安全性？我们设计了一个名为"跨链时间戳"的协议，并证明它能从提供者链中提取出最大的经济安全性，这种安全性是通过可被削减的安全弹性来衡量的。我们观察到，轻客户端桥梁已经提供了跨链时间戳，因此可以很容易地实现通过Inter-Blockchain Communication (IBC)协议连接的Cosmos链的跨链时间戳。我们将跨链时间戳与交叉抵押（mesh security的原始解决方案）以及Trustboost（另一个最近的安全共享协议）进行了比较。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616612](https://doi.org/10.1145/3576915.3616612)
## Hopper: Interpretative Fuzzing for Libraries.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#hopper-interpretative-fuzzing-for-libraries) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#hopper-interpretative-fuzzing-for-libraries)**
### 作者
* Peng Chen, Tencent Security Big Data Lab, ShenZhen, China
* Yuxuan Xie, Tencent Security Big Data Lab, ShenZhen, China
* Yunlong Lyu, Tencent Security Big Data Lab, ShenZhen, China
* Yuxiao Wang, Tencent Security Big Data Lab, ShenZhen, China
* Hao Chen, University of California, Davis, Davis, CA, USA
### 摘要
> 尽管现有的最先进的模糊测试工具可以高效生成输入，但现有的模糊驱动程序仍无法充分覆盖库中的入口。大多数这些模糊驱动程序是由开发人员手动制作的，并且它们的质量取决于开发人员对代码的理解。现有的工作已经尝试通过从代码和执行跟踪中学习API使用来自动化生成模糊驱动程序。然而，所生成的模糊驱动程序仅限于代码学习时的一些特定调用序列。为了解决这些挑战，我们提出了HOPPER，它可以在不需要任何领域知识来制作模糊驱动程序的情况下对库进行模糊测试。它将库模糊测试问题转化为解释器模糊测试问题。与被测试库链接的解释器可以解释描述任意API使用的输入。为了为解释器生成语义上正确的输入，HOPPER从库中学习了内部和互助API约束，并使用语法意识对程序进行了变异。我们实现了HOPPER，并将其在11个真实世界的库上与手工制作的模糊测试工具和其他自动化解决方案进行了评估。我们的结果表明，HOPPER在代码覆盖率和错误发现方面远远优于其他模糊测试工具，揭示了其他模糊测试工具无法发现的25个之前未知的错误。此外，我们已经证明了所提出的内部和互助API约束学习方法可以正确学习库隐含的约束，并因此显着提高模糊测试的效率。实验结果表明，HOPPER能够在库模糊测试中立即探索广泛的API用法。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616610](https://doi.org/10.1145/3576915.3616610)
## Greybox Fuzzing of Distributed Systems.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#greybox-fuzzing-of-distributed-systems) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#greybox-fuzzing-of-distributed-systems)**
### 作者
* Ruijie Meng, National University of Singapore, Singapore, Singapore
* George Pîrlea, National University of Singapore, Singapore, Singapore
* Abhik Roychoudhury, National University of Singapore, Singapore, Singapore
* Ilya Sergey, National University of Singapore, Singapore, Singapore
### 摘要
> 灰盒模糊测试是在顺序程序中发现错误的首选轻量级方法。它通过使用来自观察到的测试执行的反馈函数，在程序输入域上进行有偏随机搜索，提供了效率和有效性之间的平衡。然而，在分布式系统测试方面，实际操作中仅采用黑盒工具，这些工具不会尝试推断和利用系统过去行为的任何知识来指导寻找错误。在这项工作中，我们介绍了MALLORY：第一个用于分布式系统灰盒模糊测试的框架。与JEPSEN等流行的黑盒分布式系统模糊测试器不同，它通过随机注入网络分区和节点故障或跟随人为定义的进度来寻找错误，MALLORY是自适应的。它使用一种新的度量标准来学习如何通过选择不同的故障序列来最大限度地增加观察到的系统行为数量，从而增加发现新错误的可能性。我们的方法依赖于基于时间轴的测试。MALLORY动态构建系统行为的Lamport时间轴，并将这些时间轴进一步抽象为先于总结，这些总结作为反馈函数指导模糊测试活动。随后，MALLORY通过使用Q学习以及对总结的实时观察，反应性地学习策略，使其能够引入由其引导的故障。我们已经在一组广泛使用的工业分布式系统上评估了MALLORY。与最先进的黑盒模糊测试器JEPSEN相比，在24小时内探索了更多不同的状态，同时加速了2.24倍。与此同时，MALLORY以1.87倍的速度发现错误，因此可以在给定的时间预算内发现更多错误。MALLORY在Braft、Dqlite和Redis等经过严格测试的分布式系统中发现了22个零日漏洞（其中18个已被开发人员确认），包括10个新漏洞。有6个新的CVE编号被分配。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623097](https://doi.org/10.1145/3576915.3623097)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623097](https://dl.acm.org/doi/pdf/10.1145/3576915.3623097)
## SyzDirect: Directed Greybox Fuzzing for Linux Kernel.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#syzdirect-directed-greybox-fuzzing-for-linux-kernel) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#syzdirect-directed-greybox-fuzzing-for-linux-kernel)**
### 作者
* Xin Tan, Fudan University, Shanghai, China
* Yuan Zhang, Fudan University, Shanghai, China
* Jiadong Lu, Fudan University, Shanghai, China
* Xin Xiong, Fudan University, Shanghai, China
* Zhuang Liu, Fudan University, Shanghai, China
* Min Yang, Fudan University, Shanghai, China
### 摘要
> 漏洞报告和补丁提交情况在操作系统内核中显著增加，促使了对内核级漏洞重现和补丁测试的紧迫需求。定向灰盒模糊测试(Directed Greybox Fuzzing, DGF)是一种有前途的方法，旨在对代码的特定部分进行压力测试，用于漏洞重现和补丁测试。然而，现有的DGF方法仅限于针对用户空间应用程序，处理操作系统内核有固有限制。特别是这些方法无法确定适当的系统调用和所需的系统调用参数值以到达目标位置，导致效率低下并浪费资源。本文提出了一种名为SyzDirect的适用于Linux内核的DGF解决方案。通过对Linux内核进行新颖、可扩展的静态分析，SyzDirect能够识别有价值的信息，如正确的系统调用以及它们参数的条件，以达到目标位置。在模糊测试过程中，SyzDirect利用静态分析的结果来指导测试用例的生成和突变，并结合基于距离的反馈进行种子优先级排序和功率调度。我们在上游Linux内核上评估了SyzDirect在漏洞重现和补丁测试方面的性能。结果显示，相比通用内核模糊测试工具，SyzDirect能够重现更多的漏洞，并达到更多的目标补丁，分别增加了320%和25.6%。它还分别加快了漏洞重现和补丁到达的速度，分别提高了154.3倍和680.9倍。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623146](https://doi.org/10.1145/3576915.3623146)
## PyRTFuzz: Detecting Bugs in Python Runtimes via Two-Level Collaborative Fuzzing.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#pyrtfuzz-detecting-bugs-in-python-runtimes-via-two-level-collaborative-fuzzing) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#pyrtfuzz-detecting-bugs-in-python-runtimes-via-two-level-collaborative-fuzzing)**
### 作者
* Wen Li, Washington State University, Pullman, WA, USA
* Haoran Yang, Washington State University, Pullman, WA, USA
* Xiapu Luo, The Hong Kong Polytechnic University, Hong Kong, China
* Long Cheng, Clemson University, Clemson, SC, USA
* Haipeng Cai, Washington State University, Pullman, WA, USA
### 摘要
> 鉴于 Python 的广泛应用和对其运行时系统的持续影响，其安全性和可靠性具有极其重要和广泛的意义。然而，随着Python运行时的实际错误不断增加和报告，自动检测此类错误的技术/工具支持仍然相对不足。在本文中，我们提出了一种新的模糊测试技术/工具 PyRTFuzz，用于全面测试包括语言解释器及其运行时库在内的Python运行时。PyRTFuzz 结合了编译器级和应用程序测试级别的基于生成和变异的模糊测试，同时利用静态/动态分析从中提取运行时API描述信息，采用声明性规范语言进行有效且多样化的Python代码生成，并采用自定义的类型指导变异策略以实现格式/结构感知的应用程序输入生成。我们为主要的Python实现（CPython）实现了PyRTFuzz，并将其应用于三个版本的运行时环境。我们的实验发现了61个新的可证明存在漏洞的Bug，其中包括解释器中的漏洞和大部分是在运行时库中发现的。我们的结果还展示了PyRTFuzz的良好可扩展性和成本效益，以及其在进一步发现Bug方面的巨大潜力。PyRTFuzz 中实现的两级协同模糊测试方法也适用于其他语言运行时，尤其是解释性语言的运行时环境。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623166](https://doi.org/10.1145/3576915.3623166)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623166](https://dl.acm.org/doi/pdf/10.1145/3576915.3623166)
## FITS: Matching Camera Fingerprints Subject to Software Noise Pollution.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#fits-matching-camera-fingerprints-subject-to-software-noise-pollution) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#fits-matching-camera-fingerprints-subject-to-software-noise-pollution)**
### 作者
* Liu Liu, Zhejiang University & Jiaxing Research Institute, Zhejiang University, Hangzhou, China
* Xinwen Fu, University of Massachusetts Lowell, Lowell, MA, USA
* Xiaodong Chen, Zhejiang University & Jiaxing Research Institute, Zhejiang University, Hangzhou, China
* Jianpeng Wang, Zhejiang University & Jiaxing Research Institute, Zhejiang University, Hangzhou, China
* Zhongjie Ba, Zhejiang University & Jiaxing Research Institute, Zhejiang University, Hangzhou, China
* Feng Lin, Zhejiang University & Jiaxing Research Institute, Zhejiang University, Hangzhou, China
* Li Lu, Zhejiang University & Jiaxing Research Institute, Zhejiang University, Hangzhou, China
* Kui Ren, Zhejiang University & Jiaxing Research Institute, Zhejiang University, Hangzhou, China
### 摘要
> 可用于设备认证的物理不可克隆硬件指纹。光电响应非均匀性（PRNU）是数字相机最可靠的硬件指纹，并可以方便地从图像中提取。然而，我们发现图像后处理软件可能会向图像中引入额外的噪声。这部分噪声会残留在提取的PRNU指纹中，并且很难通过传统方法（如去噪滤波器）消除。我们将这种噪声定义为软件噪声，它污染了PRNU指纹，并干扰了相机设备的认证。在本文中，我们提出了在存在软件噪声的情况下进行指纹匹配的新方法，这是设备认证的关键步骤。我们使用诸如峰-相关能量（Peak to Correlation Energy，PCE）之类的测试统计量计算不同相机的PRNU指纹之间的交叉相关性，以估计软件噪声的相关性。在指纹匹配过程中，我们通过计算感兴趣的两个PRNU指纹上的测试统计量与估计的软件噪声相关性的比值来得出结果。我们将这个比值称为指纹到软件噪声比（FITS），它允许我们在指纹匹配的测试统计量中检测到PRNU硬件噪声相关成分。我们进行了超过10,000张图像的大量实验证实我们的方法，在受污染指纹方面明显优于最先进的方法。我们是第一个研究存在软件噪声的指纹匹配的团队。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616600](https://doi.org/10.1145/3576915.3616600)
## LeakyOhm: Secret Bits Extraction using Impedance Analysis.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#leakyohm-secret-bits-extraction-using-impedance-analysis) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#leakyohm-secret-bits-extraction-using-impedance-analysis)**
### 作者
* Saleh Khalaj Monfared, Worcester Polytechnic Institute, Worcester, MA, USA
* Tahoura Mosavirik, Worcester Polytechnic Institute, Worcester, MA, USA
* Shahin Tajik, Worcester Polytechnic Institute, Worcester, MA, USA
### 摘要
> 物理侧信道攻击及其对策一直在广泛研究之中。大多数物理侧信道攻击依赖于计算或存储对芯片电流消耗或电压降的无法避免的影响。这种依赖于数据的影响可以被例如功耗分析或电磁分析所利用。在本文中，我们介绍了一种新型的非侵入式物理侧信道攻击，该攻击利用了芯片阻抗中的数据相关变化。我们的攻击依赖于寄存器中临时存储的内容改变电路的物理特性，从而导致芯片阻抗的变化。为了感知这种阻抗变化，我们采用了一种名为散射参数分析的知名射频/微波方法，该方法将高频正弦波信号注入系统的电力分配网络（PDN）中，并测量信号的回波。我们证明了根据寄存器的内容位和物理位置，反射信号在不同频点上的调制方式有所不同，可以实现对单个寄存器的同时独立探测。这种侧信道泄漏挑战了掩码中使用的t-probing安全模型假设，这是一个主要的侧信道对策。为了验证我们的论点，我们对未受保护和高阶掩码AES的硬件实现进行了非配置文件和配置文件阻抗分析攻击。我们表明，在配置文件攻击的情况下，只需要一个迹线就可以恢复秘密密钥。最后，我们讨论了一类特定隐藏对策如何有效防止阻抗泄漏。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623092](https://doi.org/10.1145/3576915.3623092)
## A Systematic Evaluation of Automated Tools for Side-Channel Vulnerabilities Detection in Cryptographic Libraries.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#a-systematic-evaluation-of-automated-tools-for-side-channel-vulnerabilities-detection-in-cryptographic-libraries) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#a-systematic-evaluation-of-automated-tools-for-side-channel-vulnerabilities-detection-in-cryptographic-libraries)**
### 作者
* Antoine Geimer, Univ. Lille, CNRS, Inria, Univ. Rennes, CNRS, IRISA, Lille, France
* Mathéo Vergnolle, Université Paris-Saclay, CEA, List, Gif-sur-Yvettes, France
* Frédéric Recoules, Université Paris-Saclay, CEA, List, Gif-sur-Yvettes, France
* Lesly-Ann Daniel, KU Leuven, imec-DistriNet, Leuven, Belgium
* Sébastien Bardin, Université Paris-Saclay, CEA, List, Gif-sur-Yvettes, France
* Clémentine Maurice, Univ. Lille, CNRS, Inria, Lille, France
### 摘要
> 为了保护加密实现免受侧通道漏洞的影响，开发人员必须采用恒定时间的编程实践。虽然这可能容易出错，许多侧通道检测工具已经被提出。尽管如此，这种漏洞仍然在加密库中手动发现。虽然Jancar等人的最近的一篇论文显示，开发人员很少进行侧通道检测，但是尚不清楚现有的检测工具是否可能首先发现这些漏洞。为了回答这个问题，我们调查了文献，建立了34种侧通道检测框架的分类。我们提供的分类比较了多个标准，包括所使用的方法、分析的可扩展性或者考虑的威胁模型。然后我们在5个有前途的检测工具中，为代表性的加密操作建立了统一的共享基准。这个基准使我们能够更好地比较每个工具的能力，以及他们的分析的可扩展性。此外，我们提供了最近发布的侧通道漏洞的分类。然后，我们在重现这些漏洞的子集以及它们出现的环境的基准上测试每个选定的工具。我们发现，由于各种原因，现有的工具可能很难找到漏洞，主要是缺乏对SIMD指令、隐性流和内部秘密生成的支持。基于我们的发现，我们为研究社区和加密库开发者制定了一套建议，目标是提高侧通道检测工具的效能。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623112](https://doi.org/10.1145/3576915.3623112)
## A Thorough Evaluation of RAMBAM.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#a-thorough-evaluation-of-rambam) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#a-thorough-evaluation-of-rambam)**
### 作者
* Daniel Lammers, Ruhr University Bochum, Bochum, Germany
* Amir Moradi, Ruhr University Bochum, Bochum, Germany
* Nicolai Müller, Ruhr University Bochum, Bochum, Germany
* Aein Rezaei Shahmirzadi, Ruhr University Bochum, Bochum, Germany
### 摘要
> 应用掩码方法，被广泛认为是最强大和可靠的抵御侧信道分析（Side-Channel Analysis，SCA）攻击的对策，在各种加密算法中，特别是AES中，已经成为广泛研究的主题。然而，应用此类对策所带来的实施成本可能相当可观，甚至在某些情况下不可行，原因包括面积和延迟开销的考虑，以及需要新鲜随机性以确保设计结果的安全属性。这些开销大多源于在存在物理缺陷（例如故障和转换）时维护安全性的能力。在几种具有开销权衡的方案中，RAMBAM是2022年CHES会议上提出的一种，它以时钟周期数量的超低延迟为特点。它专门用于AES，并利用有限域元素的冗余表示来增强对被动和主动物理攻击的防护能力。在本文中，我们对这种技术进行了深入研究，并进行了全面分析。原始论文的作者报告称，成功攻击所需的迹数随冗余表示的大小呈指数增加。然而，我们从理论角度考察了他们的方案。更具体地说，我们研究了RAMBAM与广为人知的布尔掩码之间的关系，并基于此证明了RAMBAM的不安全性。通过示例和用例，我们评估了该方案在实践中的泄露情况，并使用验证工具证明RAMBAM在理论上和实践中都不一定能充分防御SCA攻击。在真实世界实验的确认下，我们还强调了如果没有专门的设施，RAMBAM设计容易受到故障注入攻击，尽管在防御复杂攻击向量——即SIFA攻击方面提供了一定程度的保护。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623190](https://doi.org/10.1145/3576915.3623190)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623190](https://dl.acm.org/doi/pdf/10.1145/3576915.3623190)
## A Novel Analysis of Utility in Privacy Pipelines, Using Kronecker Products and Quantitative Information Flow.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#a-novel-analysis-of-utility-in-privacy-pipelines-using-kronecker-products-and-quantitative-information-flow) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#a-novel-analysis-of-utility-in-privacy-pipelines-using-kronecker-products-and-quantitative-information-flow)**
### 作者
* Mário S. Alvim, UFMG, Belo Horizonte, Brazil
* Natasha Fernandes, Macquarie University, Sydney, Australia
* Annabelle McIver, Macquarie University, Sydney, NSW, Australia
* Carroll Morgan, UNSW & Trustworthy Systems, Sydney, NSW, Australia
* Gabriel H. Nunes, Macquarie University & UFMG, Sydney, NSW, Australia
### 摘要
> 我们结合克罗内克乘积和定量信息流，为复杂隐私流水线的精细化效用验证提供了一个新颖的形式分析。这种组合解释了隐私保护流水线效用的行为中的一个奇怪的异常现象 - 有时隐私的减少也会导致效用的降低。我们使用了贝叶斯分析的标准效用度量，由Ghosh等人[1]引入，以产生可行且严格的证明，解释了导致这种异常现象的精细化统计行为。更一般地，我们提供了与现有隐私形式分析相互补充的效用形式分析工具的前景。我们在一些常见的隐私保护设计上展示了我们的结果。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623081](https://doi.org/10.1145/3576915.3623081)
## Tainted Secure Multi-Execution to Restrict Attacker Influence.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#tainted-secure-multi-execution-to-restrict-attacker-influence) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#tainted-secure-multi-execution-to-restrict-attacker-influence)**
### 作者
* McKenna McCall, Carnegie Mellon University, Pittsburgh, PA, USA
* Abhishek Bichhawat, Indian Institute of Technology Gandhinagar, Gandhinagar, India
* Limin Jia, Carnegie Mellon University, Pittsburgh, PA, USA
### 摘要
> 攻击者可以通过第三方脚本从网页中窃取敏感用户信息。先前的研究表明，具有解密功能的安全多执行（SME）对于缓解此类攻击是有用的，但攻击者可以利用动态网页功能来解密超出预期的信息。禁止对动态网页元素的事件解密的提议解决方案太过限制，无法实际应用；解密动态元素的网站无法正确运行。在本文中，我们提出了基于SME的新型信息流监视器SMT(T)，它在每个执行过程中使用污点跟踪来记住攻击者的影响。所得到的监视器比先前的工作提出的方案更宽松，并满足机密性和完整性策略的基于知识和基于影响的安全定义。我们还展示了基于影响的安全条件导致了强大的解密功能。最后，我们通过在Featherweight Firefox上实现SMT(T)来检查使用SME监视攻击者影响的性能影响。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623110](https://doi.org/10.1145/3576915.3623110)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623110](https://dl.acm.org/doi/pdf/10.1145/3576915.3623110)
## Assume but Verify: Deductive Verification of Leaked Information in Concurrent Applications.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#assume-but-verify-deductive-verification-of-leaked-information-in-concurrent-applications) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#assume-but-verify-deductive-verification-of-leaked-information-in-concurrent-applications)**
### 作者
* Toby Murray, University of Melbourne, Melbourne, VIC, Australia
* Mukesh Tiwari, University of Cambridge, Cambridge, United Kingdom
* Gidon Ernst, LMU Munich, Munich, Germany
* David A. Naumann, Stevens Institute of Technology, Hoboken, NJ, USA
### 摘要
> 我们考虑的问题是规定和证明故意泄露信息的非平凡并发程序的安全性。我们提出了一种方法，将这个问题分解为两部分：(a) 证明程序只会泄露通过假设注释进行解密的信息，而假设注释在演绎式程序验证中已经被广泛使用；(b) 根据一种声明性安全策略对解密行为进行审计。我们展示了如何通过扩展现有的程序逻辑SecCSL来实施条件(a)，以及如何通过证明一组简单蕴含关系来检查条件(b)。挑战之一是定义相应的语义正确性标准，并将其形式化与逻辑规则和策略审计相连接。我们在一个自动活跃的程序验证器中支持我们的方法论，并将其应用于针对一系列解密策略验证各种案例研究程序的实现。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623141](https://doi.org/10.1145/3576915.3623141)
## Deciding Differential Privacy of Online Algorithms with Multiple Variables.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#deciding-differential-privacy-of-online-algorithms-with-multiple-variables) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#deciding-differential-privacy-of-online-algorithms-with-multiple-variables)**
### 作者
* Rohit Chadha, University of Missouri, Columbia, MO, USA
* A. Prasad Sistla, University of Illinois at Chicago, Chicago, IL, USA
* Mahesh Viswanathan, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Bishnu Bhusal, University of Missouri, Columbia, MO, USA
### 摘要
> 我们考虑检查在线随机算法的差分隐私问题，这些算法处理一系列输入并生成与每个输入相对应的输出。本文将一个名为DiP自动机[10]的自动机模型推广到描述这种算法，允许多个实值存储变量。DiP自动机是一个参数化自动机，其行为取决于隐私预算ε。如果对于某些D，自动机在任意ε>0的值下都是Dε-差分隐私的，则称自动机A为差分隐私的。我们确定了所有差分隐私DiP自动机的精确特征。我们表明确定给定DiP自动机是否属于该类的问题是PSPACE完全的。我们的PSPACE算法在给定自动机是差分隐私的情况下还计算出D的值。该算法已经实现，并展示了其有效性的实验结果。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623170](https://doi.org/10.1145/3576915.3623170)
## FlexiRand: Output Private (Distributed) VRFs and Application to Blockchains.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#flexirand-output-private-distributed-vrfs-and-application-to-blockchains) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#flexirand-output-private-distributed-vrfs-and-application-to-blockchains)**
### 作者
* Aniket Kate, Purdue University & Supra Research, West Lafayette, IN, USA
* Easwar Vivek Mangipudi, Supra Research, Mountain View, CA, USA
* Siva Maradana, Indian Statistical Institute, Kolkata, India
* Pratyay Mukherjee, Supra Research, Kolkata, India
### 摘要
> 基于区块链的Web3应用程序经常需要访问无偏、不可预测且公开可验证的随机性。对于Web3游戏应用程序来说，这成为吸引更多用户的关键卖点，通过为“随机奖励”分配功能提供可信度。可验证随机函数（VRF）协议自然地满足这些要求，并且VRF服务的使用量大幅增加。由于大多数区块链无法保存VRF所需的秘密密钥，因此Web3应用程序通过智能合约与外部VRF服务进行交互，其中VRF输出以费用交换。虽然这种基于智能合约的明文交换立即提供了所需的公开可验证性，但它严重限制了请求者使用VRF服务的方式：无法提前发出请求，也无法重复使用输出。这导致了显著的延迟和货币开销。本次研究通过引入一种新颖的隐私原语Output Private VRF（Pri-VRF），克服了VRF服务的这个关键限制，从而为基于Web3的VRF服务添加了更大的灵活性。我们将该框架称为FlexiRand。在保持VRF的伪随机性和公开可验证性的同时，FlexiRand确保仅有请求者能够观察VRF输出，智能合约和其他人只能观察盲化但可验证的输出版本。我们正式定义了Pri-VRF，并提出了一种实际高效的设计，并在统一组合（UC）框架下使用基于双线性群one-more Diffie-Hellman假设的变体，在随机预言模型中进行可证明安全性分析。由于具备密钥所有权的VRF服务成为单点故障，我们将其作为分布式VRF实现，将密钥在我们的框架中通过不同节点进行秘密共享。我们通过结合分布式VRF和分布式匿名PRF文献中的方法来开发我们的分布式Pri-VRF构造，并进行了可证明安全性分析（在UC中），并与现有的分布式VRF方案进行了性能比较。我们的分布式Pri-VRF仅对VRF服务、请求者和合约引入了最小的计算和通信开销。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616601](https://doi.org/10.1145/3576915.3616601)
## Adaptively Secure (Aggregatable) PVSS and Application to Distributed Randomness Beacons.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#adaptively-secure-aggregatable-pvss-and-application-to-distributed-randomness-beacons) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#adaptively-secure-aggregatable-pvss-and-application-to-distributed-randomness-beacons)**
### 作者
* Renas Bacho, CISPA Helmholtz Center for Information Security & Universität des Saarlandes, Saarbrücken, Germany
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 公开可验证的秘密分享（PVSS）是一种基本的原始方法，可以通过公开可验证的传输记录T在n个参与方之间共享一个秘密S。现有的（高效的）PVSS只针对静态对手提供了安全性证明，在协议执行之前必须选择谁来腐化。因此，任何建立在这种PVSS方案之上的协议（例如，分布式随机性信标）都会继承这个限制。为了克服这个障碍，我们重新考虑了PVSS在自适应腐化下的安全性，并表明，令人惊讶的是，许多来自文献的协议已经以有意义的方式实现了它：我们提出了一种新的可聚合PVSS的安全定义，即允许将多个传输记录按同态方式合并成一个紧凑的聚合传输记录AT，该记录分享它们个体秘密的总和。我们的概念表明，如果由AT分享的秘密至少包含一个根据诚实生成的传输记录的贡献，那么它不应该是可预测的。然后，我们证明了几种现有方案在代数群模型中满足这种对于自适应腐化的概念。为了证明我们的新概念的动力，我们展示了它意味着两个最近的随机信标协议SPURT（S&P '22）和OptRand（NDSS '23）的自适应安全性，它们建立在满足我们的不可预测性概念的可聚合PVSS方案之上。对于安全参数λ，我们的结果改进了已知最佳自适应安全随机信标协议在t < n/2腐化且同步网络的通信复杂度为O(λn2)，在t < n/3腐化且部分同步网络的通信复杂度为O(λn2)。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623106](https://doi.org/10.1145/3576915.3623106)
## Short Privacy-Preserving Proofs of Liabilities.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#short-privacy-preserving-proofs-of-liabilities) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#short-privacy-preserving-proofs-of-liabilities)**
### 作者
* Francesca Falzon, Brown University, University of Chicago, Providence, RI, USA
* Kaoutar Elkhiyaoui, IBM Research, Zürich, Zürich, Switzerland
* Yacov Manevich, IBM Research, Zürich, Zürich, Switzerland
* Angelo De Caro, IBM Research, Zürich, Zürich, Switzerland
### 摘要
> 在去中心化交易所欺诈丑闻和个人遭受的重大财务损失之后，监管机构迫切需要建立机制，在分散生态系统中强制执行客户保护和资本要求。责任证明（PoL）是这样一种机制：它允许证明者（例如交易所）向验证者（即客户）证明其责任。本文介绍了一种完全保护隐私的PoL方案，并提供了简短的证明。我们将证明者的责任存储在一种新颖的数据结构中，即稀疏总和Verkle树（SSVT），其中每个内部节点都是其子节点的隐藏向量承诺，根节点对树中所有叶节点的和进行承诺。我们利用内积论证来证明用户的责任包含在证明者的总责任中，同时不泄漏除责任包含外的任何信息。我们的构造产生的证明大小为O(logn N)，其中n是SSVT的度数，N是用户数量的上限。此外，我们还展示了如何通过聚合进一步优化证明大小。我们使用一个大小为2^256的SSVT和一个覆盖所有美国社会安全号码的大小为10^9的SSVT对我们的方案进行基准测试。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616645](https://doi.org/10.1145/3576915.3616645)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616645](https://dl.acm.org/doi/pdf/10.1145/3576915.3616645)
## The Locality of Memory Checking.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#the-locality-of-memory-checking) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#the-locality-of-memory-checking)**
### 作者
* Weijie Wang, Yale University, New Haven, CT, USA
* Yujie Lu, Yale University, New Haven, CT, USA
* Charalampos Papamanthou, Yale University, New Haven, CT, USA
* Fan Zhang, Yale University, New Haven, CT, USA
### 摘要
> 受到在区块链系统中验证大量数据的需求（例如Merkle Patricia Tries），我们开始系统研究这类系统的I/O效率。我们首先探讨了可验证存储的先前提出的抽象——内存检查的基本限制，我们首次引入了一个称为局部性的复杂性度量，定义为检查器必须查询的不连续内存区域的数量，来验证读取或写入查询。我们的核心结果是任何内存检查器的局部性下界为Ω(log n/log log n)。然后我们将注意力转向（稠密和稀疏的）Merkle树，这是最著名的内存检查器之一，并为它们的局部性提供了更强的下界。例如，我们证明了任何稠密的Merkle树布局的平均局部性至少为(1/3)log n。此外，如果我们允许节点重复，我们证明如果任何写操作的复杂度至多为多项式对数级别，那么读取的局部性也不能小于log n/log log n。我们的下界帮助我们构建了两种新的局部性优化的认证数据结构（DupTree和PrefixTree），我们在随机操作和真实工作负载上对它们进行了实现和评估，并证明它们在叶子节点数量增加时优于传统的Merkle树。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623195](https://doi.org/10.1145/3576915.3623195)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623195](https://dl.acm.org/doi/pdf/10.1145/3576915.3623195)
## Stealing the Decoding Algorithms of Language Models.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#stealing-the-decoding-algorithms-of-language-models) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#stealing-the-decoding-algorithms-of-language-models)**
### 作者
* Ali Naseh, University of Massachusetts Amherst, Amherst, MA, USA
* Kalpesh Krishna, University of Massachusetts Amherst, Amherst, MA, USA
* Mohit Iyyer, University of Massachusetts Amherst, Amherst, MA, USA
* Amir Houmansadr, University of Massachusetts Amherst, Amherst, MA, USA
### 摘要
> 现代语言模型（LM）从文本生成的关键组成部分是选择和调整解码算法。这些算法决定如何从LM生成文本内部概率分布中的文本。选择解码算法并调整其超参数的过程需要大量时间、手动努力和计算，同时还需要广泛的人工评估。因此，这些解码算法的身份和超参数被认为对其所有者非常有价值。在这项工作中，我们首次展示，一个具有典型API访问权限的对手可以以非常低的货币成本窃取其解码算法的类型和超参数。我们的攻击对文本生成API中使用的流行LM（如GPT-2、GPT-3和GPT-Neo）有效。我们证明了仅用几美元（如0.8、1、4和40美元）即可窃取这些信息，例如GPT-3的四个版本。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616652](https://doi.org/10.1145/3576915.3616652)
## Verifiable Learning for Robust Tree Ensembles.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#verifiable-learning-for-robust-tree-ensembles) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#verifiable-learning-for-robust-tree-ensembles)**
### 作者
* Stefano Calzavara, Università Ca' Foscari Venezia, Venice, Italy
* Lorenzo Cazzaro, Università Ca' Foscari Venezia, Venice, Italy
* Giulio Ermanno Pibiri, Università Ca' Foscari Venezia, Venice, Italy
* Nicola Prezza, University Ca' Foscari Venezia, Venice, Italy
### 摘要
> 机器学习模型在测试时对抗攻击的鲁棒性验证是一个重要的研究问题。不幸的是，先前的研究表明决策树集成模型中的这个问题是NP难的，因此对于特定输入来说是棘手的。本文中，我们识别出了一种受限决策树集成模型的类别，称为大幅度分布集成模型，该类模型允许以多项式时间运行的安全验证算法。然后，我们提出了一种名为可验证学习的新方法，鼓励训练适合进行高效验证的这种受限模型类别。通过设计一种新的训练算法，我们展示了这一思想的好处：该算法能够自动从有标签数据中学习得到一个大幅度分布的决策树集成模型，并以多项式时间进行安全验证。公开数据集上的实验结果证实，使用我们的算法训练的大幅度分布集成模型可以在几秒钟内在标准商用硬件上进行验证。此外，在非对抗设置中，大幅度分布集成模型比传统集成模型更加鲁棒，虽然会稍微牺牲一定的准确率。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623100](https://doi.org/10.1145/3576915.3623100)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623100](https://dl.acm.org/doi/pdf/10.1145/3576915.3623100)
## Large Language Models for Code: Security Hardening and Adversarial Testing.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#large-language-models-for-code-security-hardening-and-adversarial-testing) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#large-language-models-for-code-security-hardening-and-adversarial-testing)**
### 作者
* Jingxuan He, ETH Zurich, Zurich, Switzerland
* Martin Vechev, ETH Zurich, Zurich, Switzerland
### 摘要
> 大型语言模型（large LMs）越来越多地通过大规模代码库进行训练，并用于生成代码。然而，这些语言模型缺乏安全意识，经常会产生不安全的代码。本研究从两个重要的方面探讨了语言模型的安全性：（i）安全强化，旨在提高语言模型生成安全代码的可靠性；（ii）对抗性测试，旨在评估语言模型在对抗性情境下的安全性。我们通过提出一个名为“受控代码生成”的新安全任务来解决这两个问题。这个任务是参数化的，需要提供一个二进制属性作为输入，以指导语言模型生成安全或不安全的代码，同时保持语言模型生成功能上正确的代码的能力。我们提出了一种名为SVEN的新颖基于学习的方法来解决这个任务。SVEN利用了特定属性的连续向量来引导程序生成适合给定属性的代码，而不修改语言模型的权重。我们的训练过程通过在代码的不同区域上强制使用专门的损失函数项来优化这些连续向量，使用我们精心策划的高质量数据集进行训练。我们的广泛评估表明，SVEN在实现强大的安全控制方面非常有效。例如，一个具有27亿参数的最先进的CodeGen语言模型可以生成59.1％的安全代码。当我们使用SVEN对该语言模型进行安全强化（或对抗性测试）时，这个比率显著提高到92.3％（或下降到36.8％）。重要的是，SVEN在功能上与原始语言模型非常接近。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623175](https://doi.org/10.1145/3576915.3623175)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623175](https://dl.acm.org/doi/pdf/10.1145/3576915.3623175)
## Experimenting with Zero-Knowledge Proofs of Training.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#experimenting-with-zero-knowledge-proofs-of-training) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#experimenting-with-zero-knowledge-proofs-of-training)**
### 作者
* Sanjam Garg, University of California, Berkeley, Berkeley, CA, USA
* Aarushi Goel, NTT Research, Sunnyvale, CA, USA
* Somesh Jha, University of Wisconsin - Madison, Madison, WI, USA
* Saeed Mahloujifar, Meta AI, San Francisco, CA, USA
* Mohammad Mahmoody, University of Virginia, Charlottesville, VA, USA
* Guru-Vamsi Policharla, University of California, Berkeley, Berkeley, CA, USA
* Mingyuan Wang, University of California, Berkeley, Berkeley, CA, USA
### 摘要
> 模型所有者如何证明他们的模型是按照正确的规格进行训练的呢?更重要的是，如何在保护底层数据集和最终模型的隐私的同时做到这一点呢?我们研究了这个问题，并且提出了训练的零知识证明（zkPoT）的概念，它形式化了应该由隐私保护的训练证明所实现的严格安全保证。虽然使用通用的零知识证明系统为任何模型设计zkPoT在理论上是可能的，但这种方法导致了非常不实际的证明生成时间。针对设计一个实际可行的解决方案，我们提出了将MPC-in-the-head和zkSNARKs文献中的技术相结合的想法，以在证明大小和证明计算时间之间取得适当的平衡。我们具体地实例化了这个想法，并针对逻辑回归提出了一个具有高效性的、新颖的zkPoT协议。关键是，我们的协议对流处理友好，不需要与训练电路大小成比例的RAM，因此可以在无特殊硬件的情况下完成。我们预期本论文中开发的技术也可以广泛用于设计其他更复杂的机器学习模型的高效zkPoT协议。我们实现了并对证明程序/验证程序在一个包含262,144条记录和1024个特征的4 GB数据集上使用小批量梯度下降训练逻辑回归模型的运行时间和证明大小进行了基准测试。我们将协议分为三个阶段：(1) 数据无关的离线阶段。(2) 数据相关的与模型无关的阶段。(3) 在线阶段，它既依赖于数据又依赖于模型。总的证明大小（在所有三个阶段中）小于数据集大小的10%（<350 MB）。在线阶段，证明者和验证者的时间分别不到10分钟和半分钟，而在数据相关的阶段，它们分别接近一个小时和几秒钟。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623202](https://doi.org/10.1145/3576915.3623202)
## Group and Attack: Auditing Differential Privacy.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#group-and-attack-auditing-differential-privacy) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#group-and-attack-auditing-differential-privacy)**
### 作者
* Johan Lokna, ETH Zurich, Zurich, Switzerland
* Anouk Paradis, ETH Zurich, Zurich, Switzerland
* Dimitar I. Dimitrov, ETH Zurich, Zurich, Switzerland
* Martin Vechev, ETH Zurich, Zurich, Switzerland
### 摘要
> (ε, δ) 差分隐私最近被广泛应用于保护隐私的机器学习应用程序中。虽然这种隐私定义可以明确限制算法泄漏的信息量，但是差分隐私算法的实际实现通常存在微妙的漏洞。这促使需要有效的工具，在部署到真实世界之前，以审核 (ε, δ) 差分隐私算法的质量。然而，现有的审核 (ε, δ) 差分隐私的领先工具直接扩展以 ε-差分隐私的工具，通过在违规搜索中固定ε或δ来固有地限制了它们发现 (ε, δ) 差分隐私违规的能力。我们提出了一种新的方法，基于关键的洞见——许多 (ε, δ) 组合可以因结果同一算法而归为一类——从而高效地发现 (ε, δ) 差分隐私的违规行为。关键是，我们的方法与现有方法正交，当相结合时，可以得到更快、更精确的违规搜索结果。我们在一个名为 Delta-Siege 的工具中实施了我们的方法，并通过发现大部分评估框架中的漏洞（其中有几个以前是未知的）展示了其有效性。此外，在 84% 的情况下，Delta-Siege 超过现有的领先审计工具。最后，我们展示了如何使用 Delta-Siege 的输出找到漏洞的根本原因，这是其他差分隐私测试工具目前不提供的选项。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616607](https://doi.org/10.1145/3576915.3616607)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616607](https://dl.acm.org/doi/pdf/10.1145/3576915.3616607)
## Interactive Proofs For Differentially Private Counting.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#interactive-proofs-for-differentially-private-counting) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#interactive-proofs-for-differentially-private-counting)**
### 作者
* Ari Biswas, University of Warwick, Coventry, United Kingdom
* Graham Cormode, Meta AI, Coventry, United Kingdom
### 摘要
> 差分隐私（DP）通常被认为是一种强大的隐私增强技术，具有广泛的适用性，并被视为发布敏感数据的聚合统计信息的事实上的标准。然而，在许多情况下，DP引入了一个新的攻击面：被委托发布统计信息的恶意实体可能操纵结果，并利用DP的随机性作为方便的幌子来掩盖其恶意行为。由于揭示随机噪音将使引入它的目的无效，罪犯可能拥有完美的不在场证明。为了关闭这个漏洞，我们引入了交互式差分隐私证明的概念，要求发布实体输出一个零知识证明，使得高效的验证者相信输出既是DP又是可靠的。这样的定义似乎是难以实现的，因为验证者必须验证DP随机性是如何被忠实地生成的，同时又不能了解任何关于随机性本身的信息。我们通过精心混合私有和公共随机性来计算可验证的DP计数查询，并展示了在真实世界部署中也是可行的，并且具有理论保证。我们还通过展示在我们对可验证性的定义下，信息理论上的DP和计算上的DP之间存在差异来证明了计算假设的必要性。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616681](https://doi.org/10.1145/3576915.3616681)
## Concentrated Geo-Privacy.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#concentrated-geo-privacy) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#concentrated-geo-privacy)**
### 作者
* Yuting Liang, Hong Kong University of Science and Technology, Hong Kong, China
* Ke Yi, Hong Kong University of Science and Technology, Hong Kong, China
### 摘要
> 本文提出了集中地理隐私（CGP），这是一种可以被视为集中差分隐私（CDP）的地理数据对应的隐私概念。与之前的地理隐私概念[1,5]相比，CGP提供了许多优势，包括机制的简单性、高维度下更低的噪声规模以及更好的可组合性（即高级组合）。其中最重要的是高级组合，因为它使我们能够使用较小的基本组件设计复杂的机制，同时实现更好的效用。为了补充这一结果，我们证明了之前的地理隐私概念甚至在使用其近似版本时也不能本质上实现高级组合。接下来，我们研究了私密几何数据的三个问题：身份查询、k最近邻和凸包。虽然第一个问题以前已经研究过，但我们提供了地理隐私下后两个问题的首个机制。对于这三个问题，可组合性对于获取私密化查询结果的良好效用保证是至关重要的。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623068](https://doi.org/10.1145/3576915.3623068)
## Concurrent Composition for Interactive Differential Privacy with Adaptive Privacy-Loss Parameters.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#concurrent-composition-for-interactive-differential-privacy-with-adaptive-privacy-loss-parameters) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#concurrent-composition-for-interactive-differential-privacy-with-adaptive-privacy-loss-parameters)**
### 作者
* Samuel Haney, Tumult Labs, Raleigh, NC, USA
* Michael Shoemate, Harvard University, Cambridge, MA, USA
* Grace Tian, Harvard University, Cambridge, MA, USA
* Salil Vadhan, Harvard University, Cambridge, MA, USA
* Andrew Vyrros, Harvard University, Cambridge, MA, USA
* Vicki Xu, Harvard University, Cambridge, MA, USA
* Wanrong Zhang, Harvard University, Cambridge, MA, USA
### 摘要
> 在本文中，我们研究了具有自适应选择隐私丢失参数的交互式机制的并发组合。在这种情况下，对手可以插入查询到现有的交互式机制中，还可以创建新的机制。 我们证明了如果使用(ε, δ)-DP、ƒ-DP或固定阶数的Rényi DP来测量隐私丢失，则非交互式机制的每个有效隐私过滤器和计算器都可扩展到交互式机制的并发组合中。 我们的结果为实现差分隐私交互式机制的完全适应性提供了强大的理论基础，表明并发不会影响隐私保证。 我们还提供了用户在实践中部署的实现方式。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623128](https://doi.org/10.1145/3576915.3623128)
## SysXCHG: Refining Privilege with Adaptive System Call Filters.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#sysxchg-refining-privilege-with-adaptive-system-call-filters) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#sysxchg-refining-privilege-with-adaptive-system-call-filters)**
### 作者
* Alexander J. Gaidis, Brown University, Providence, RI, USA
* Vaggelis Atlidakis, Brown University, Providence, RI, USA
* Vasileios P. Kemerlis, Brown University, Providence, RI, USA
### 摘要
> 我们介绍了SysXCHG的设计、实现和评估：一种系统调用（syscall）过滤执行机制，使程序能够按照最小特权原则运行。与当前的分层设计seccomp-BPF不同，该设计不允许程序以与其子孙进程不同的允许系统调用集合运行，SysXCHG允许应用程序在运行时通过execve[at]动态交换过滤器，以“紧密”系统调用过滤器的方式运行， 不受未来执行的（子）程序的影响。作为SysXCHG的一部分，我们还提出了xfilter：一种使用进程特定视图的内核系统调用表进行快速过滤的机制。在我们对SysXCHG的评估中，我们发现我们的过滤器交换设计具有良好的性能，在PaSH基准套件的实际应用程序中的减速程度小于等于1.71％，同时也是高效的，能够阻止大量的多余功能，包括安全关键的系统调用，这是目前的seccomp-BPF设计所不能实现的。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623137](https://doi.org/10.1145/3576915.3623137)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623137](https://dl.acm.org/doi/pdf/10.1145/3576915.3623137)
## SysPart: Automated Temporal System Call Filtering for Binaries.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#syspart-automated-temporal-system-call-filtering-for-binaries) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#syspart-automated-temporal-system-call-filtering-for-binaries)**
### 作者
* Vidya Lakshmi Rajagopalan, Stevens Institute of Technology, Hoboken, NJ, USA
* Konstantinos Kleftogiorgos, Stevens Institute of Technology, Hoboken, NJ, USA
* Enes Göktas, Stevens Institute of Technology, Hoboken, NJ, USA
* Jun Xu, University of Utah, Salt Lake City, UT, USA
* Georgios Portokalidis, Stevens Institute of Technology & IMDEA Software Institute, Hoboken, NJ, USA
### 摘要
> 限制应用程序可以使用的系统调用可以减少内核的攻击面，并限制被感染应用程序的功能。近期的方法自动识别程序所需的系统调用来阻止不必要的调用。对于服务器，它们甚至考虑执行的不同阶段，以在初始化完成后加强限制。然而，它们需要访问应用程序和库的源代码，依赖于用户识别服务器从初始化转变为为客户端提供服务的时机，或者不考虑动态加载的库。本文介绍了SYSPART，一个专为仅有二进制服务器程序设计的自动系统调用过滤系统，它解决了上述的限制。SYSPART使用结合静态和动态分析的新算法，识别服务器的所有工作线程的服务阶段。静态分析被用于合理地计算在各种服务阶段所需的系统调用，动态观察仅在必要时用于补充动态加载库的静态解析。我们使用六个在x86-64 Linux上流行的服务器评估了SYSPART，以展示其在自动识别服务阶段、生成准确的系统调用过滤器和减轻攻击方面的有效性。我们的结果显示，SYSPART优于之前的仅二进制方法，并且与源代码方法性能相当。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623207](https://doi.org/10.1145/3576915.3623207)
## Hacksaw: Hardware-Centric Kernel Debloating via Device Inventory and Dependency Analysis.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#hacksaw-hardware-centric-kernel-debloating-via-device-inventory-and-dependency-analysis) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#hacksaw-hardware-centric-kernel-debloating-via-device-inventory-and-dependency-analysis)**
### 作者
* Zhenghao Hu, New York University, New York, NY, USA
* Sangho Lee, Microsoft Research, Redmond, WA, USA
* Marcus Peinado, Microsoft Research, Redmond, WA, USA
### 摘要
> 内核去肿是一种实用机制，通过减少其攻击面来减轻操作系统内核的安全问题。现有的内核去肿机制侧重于根据过去收集的动态跟踪，将内核专门化为针对目标应用程序运行 - 根据跟踪信息删除应用程序未使用的内核函数。然而，由于动态跟踪无法确保完全覆盖，对所需功能的误删是不可避免的。本文提出了一种名为Hacksaw的新机制，根据目标机器的硬件设备清单来对内核进行去肿。由于确定与机器连接的硬件组件以及管理它们的设备驱动程序是全面且确定的，Hacksaw可以准确地去除内核不需要的部分，避免了误删。Hacksaw不仅删除不管理任何连接的硬件组件的无效的设备驱动程序，还根据三种依赖分析方法（调用图、驱动模型和编译单元分析）删除与无效驱动程序关联的其他内核模块和函数。我们的评估结果显示，Hacksaw能够有效地删除无效的内核模块和函数（即其相应的减少比例平均为45%和30%），同时确保有效性和兼容性。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623208](https://doi.org/10.1145/3576915.3623208)
## KRover: A Symbolic Execution Engine for Dynamic Kernel Analysis.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#krover-a-symbolic-execution-engine-for-dynamic-kernel-analysis) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#krover-a-symbolic-execution-engine-for-dynamic-kernel-analysis)**
### 作者
* Pansilu Pitigalaarachchi, Singapore Management University, Singapore, Singapore
* Xuhua Ding, Singapore Management University, Singapore, Singapore
* Haiqing Qiu, Singapore Management University, Singapore, Singapore
* Haoxin Tu, Singapore Management University, Singapore, Singapore
* Jiaqi Hong, Independent Researcher, Singapore, Singapore
* Lingxiao Jiang, Singapore Management University, Singapore, Singapore
### 摘要
> 我们介绍了KRover，一种适用于动态内核分析（如漏洞分析和利用生成）的新型内核符号执行引擎。与现有的符号执行引擎不同，KRover直接在活动内核线程的虚拟内存上操作，并将符号执行编织到目标的本机执行中。KRover紧凑高效，既不将目标二进制代码转换为中间表示，也不使用QEMU或动态二进制转换。与S2E进行了基准测试，我们的性能实验结果显示，KRover的速度相比之下提高了50倍，而内存占用仅为S2E的十分之一至四分之一。通过我们的四个案例研究，我们展示了KRover是无噪音的，具有最佳的二进制亲密性，并且不需要事先对内核进行仪器化。此外，用户可以开发自己的内核分析器，既可以使用KRover作为符号执行库，又可以保留其独立的读取/写入/控制目标运行时的功能。换句话说，在KRover之上构建的分析器将符号推理和传统动态分析集成起来，充分利用它们相互增强所带来的好处。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623198](https://doi.org/10.1145/3576915.3623198)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623198](https://dl.acm.org/doi/pdf/10.1145/3576915.3623198)
## Gotcha! I Know What You Are Doing on the FPGA Cloud: Fingerprinting Co-Located Cloud FPGA Accelerators via Measuring Communication Links.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#gotcha-i-know-what-you-are-doing-on-the-fpga-cloud-fingerprinting-co-located-cloud-fpga-accelerators-via-measuring-communication-links) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#gotcha-i-know-what-you-are-doing-on-the-fpga-cloud-fingerprinting-co-located-cloud-fpga-accelerators-via-measuring-communication-links)**
### 作者
* Chongzhou Fang, University of California, Davis, Davis, CA, USA
* Ning Miao, University of California, Davis, Davis, CA, USA
* Han Wang, Temple University, Philadelphia, PA, USA
* Jiacheng Zhou, University of California, Davis, Davis, CA, USA
* Tyler Sheaves, University of California, Davis, Davis, CA, USA
* John M. Emmert, University of Cincinnati, Cincinnati, OH, USA
* Avesta Sasan, University of California, Davis, Davis, CA, USA
* Houman Homayoun, University of California, Davis, Davis, CA, USA
### 摘要
> 近几十年来，由于计算加速需求的出现，云FPGA在公共云中变得流行起来。主要的云服务提供商，如AWS和微软Azure，在它们的基础设施中提供了FPGA计算资源，并让用户能够设计和部署自己的加速器在这些FPGA上。多租户FPGA已被证明是可行的，它允许多个用户共享同一FPGA资源，并通过某种隔离方式来提高资源利用率。然而，这也引发了安全方面的担忧。各种类型的针对多租户FPGA的侧信道攻击已被提出和验证。对云安全漏洞的关注促使云服务提供商采取措施以增强其云环境的安全性。在FPGA安全研究论文中，研究人员总是在假设攻击者能够与受害者成功共存并且知道同一FPGA板上存在受害者的情况下进行攻击。然而，如何达到这一点，即攻击者如何秘密获得有关同一硬件上加速器的信息，却经常被忽视，尽管事实上这一点是非常重要而复杂的。本文中，我们提出了一种新颖的指纹攻击方法来获取共存的FPGA加速器的类型。我们利用一种看似无恶意的基准加速器来嗅探通信链路，并收集FPGA与主机之间的性能跟踪数据。通过分析这些跟踪数据，我们能够以较高的准确率对共存的加速器进行指纹识别，证明攻击者可以使用我们的方法以较高的成功率进行云FPGA加速器的指纹识别。据我们所知，这是第一篇针对多租户FPGA加速器指纹识别的与通信侧信道相关的论文。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616606](https://doi.org/10.1145/3576915.3616606)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616606](https://dl.acm.org/doi/pdf/10.1145/3576915.3616606)
## iLeakage: Browser-based Timerless Speculative Execution Attacks on Apple Devices.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#ileakage-browser-based-timerless-speculative-execution-attacks-on-apple-devices) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#ileakage-browser-based-timerless-speculative-execution-attacks-on-apple-devices)**
### 作者
* Jason Kim, Georgia Tech, Atlanta, GA, USA
* Stephan van Schaik, University of Michigan, Ann Arbor, MI, USA
* Daniel Genkin, Georgia Tech, Atlanta, GA, USA
* Yuval Yarom, Ruhr University Bochum, Bochum, Germany
### 摘要
> 过去几年里，高端CPU市场正经历着一场变革性的变化。不再将x86作为高性能设备的唯一架构，我们目睹了重量级Arm CPU计算设备的推出。其中，可能最具影响力的是苹果M系列架构的引入，旨在完全取代苹果生态系统中的英特尔CPU。然而，尽管在分析x86 CPU上投入了大量精力，苹果生态系统仍然大部分未被探索。在本文中，我们着手研究苹果生态系统对于推测性侧信道攻击的抵御能力。我们首先确立了进行侧信道攻击所需的基本工具，例如缓存结构和CPU推测深度。然后，我们解决了苹果在本地和基于浏览器的代码中降低计时器分辨率的问题。引人注目的是，我们展示了可以在不进行时间测量的情况下区分缓存未命中和缓存命中，通过基于竞争条件的无计时器对应物取代基于定时的基元。最后，我们使用我们的区分基元构造驱逐集并进行幽灵攻击，同时避免使用计时器。然后，我们评估Safari的侧信道韧性。我们绕过了压缩的35位寻址和值污染对策，创建了一种能够推测性地读取并泄露Safari渲染过程中任何64位地址的基元。结合将来自不同域的网站整合到同一个渲染器进程中的新方法，我们演示了端到端攻击，泄露了敏感信息，如密码、收件箱内容以及来自谷歌等热门服务的位置信息。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616611](https://doi.org/10.1145/3576915.3616611)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616611](https://dl.acm.org/doi/pdf/10.1145/3576915.3616611)
## Declassiflow: A Static Analysis for Modeling Non-Speculative Knowledge to Relax Speculative Execution Security Measures.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#declassiflow-a-static-analysis-for-modeling-non-speculative-knowledge-to-relax-speculative-execution-security-measures) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#declassiflow-a-static-analysis-for-modeling-non-speculative-knowledge-to-relax-speculative-execution-security-measures)**
### 作者
* Rutvik Choudhary, University of Illinois Urbana Champaign, Urbana, IL, USA
* Alan Wang, University of Illinois Urbana Champaign, Urbana, IL, USA
* Zirui Neil Zhao, University of Illinois Urbana Champaign, Urbana, IL, USA
* Adam Morrison, Tel Aviv University, Tel Aviv, Israel
* Christopher W. Fletcher, University of Illinois Urbana Champaign, Urbana, IL, USA
### 摘要
> 投機執行攻擊削弱了恆定時間編程的安全性，恆定時間編程是防止安全敏感軟件（如加密代碼）中出現微架構側信道的標準技術。因此，恆定時間代碼還必須采取措施防止在內存或處理器寄存器中洩露儲存的秘密數據。不幸的是，當前的防護方法（例如投機負載硬化, SLH）只能以非常高的性能代價提供這種強大的安全保證。本文提出了Declassiflow——一個靜態程序分析和防護框架，可以高效保護恆定時間代碼免受投機洩漏。Declassiflow模型化了“攻擊者知識”，即代碼的非投機執行隱式傳輸的數據，並在已經保證不會出現投機洩漏的程序點上靜態移除對這些數據的保護。總體而言，Declassiflow確保在非投機執行過程中從未洩露的數據在投機執行過程中也不會洩露，而且開銷比SLH等保守的防護方法更低。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623065](https://doi.org/10.1145/3576915.3623065)
## SpecVerilog: Adapting Information Flow Control for Secure Speculation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#specverilog-adapting-information-flow-control-for-secure-speculation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#specverilog-adapting-information-flow-control-for-secure-speculation)**
### 作者
* Drew Zagieboylo, Cornell University, Ithaca, NY, USA
* Charles Sherk, Cornell University, Ithaca, NY, USA
* Andrew C. Myers, Cornell University, ithaca, NY, USA
* G. Edward Suh, Cornell University, Ithaca, NY, USA
### 摘要
> 为了解决瞬态执行漏洞，处理器架构师已经提出了防御性设计和安全性的形式描述。然而，这些设计通常没有经过正式的证明以确保所宣称的保证得以实施；更重要的是，缺乏自动确保寄存器传输级（RTL）描述与高级设计一致性的工具。本文介绍了如何扩展现有的安全类型硬件描述语言以表达推测性安全条件，并验证可综合实现的安全性。我们的工具可以静态验证RTL硬件设计是否不受瞬态执行漏洞的影响，而无需手动进行证明。我们的关键见解是，擦除标签可以被调整为既可静态检查，又可表示短暂访问或修改数据及其在错误预测下的必须擦除。此外，我们还展示了如何使用擦除标签来捍卫强大的推测性安全的形式定义。为验证我们的方法，我们实现了几个对于推测性乱序处理器至关重要且常见的瞬态执行漏洞向量组件。我们展示了现有防御措施的正确验证，以及发现必要防御措施缺失作为潜在漏洞。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623074](https://doi.org/10.1145/3576915.3623074)
## Formalizing, Verifying and Applying ISA Security Guarantees as Universal Contracts.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#formalizing-verifying-and-applying-isa-security-guarantees-as-universal-contracts) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#formalizing-verifying-and-applying-isa-security-guarantees-as-universal-contracts)**
### 作者
* Sander Huyghebaert, Vrije Universiteit Brussel & KU Leuven, Brussel, Belgium
* Steven Keuchel, Vrije Universiteit Brussel, Brussel, Belgium
* Coen De Roover, Vrije Universiteit Brussel, Brussel, Belgium
* Dominique Devriese, KU Leuven, Leuven, Belgium
### 摘要
> 最近在指令集架构（ISA）的规范方面取得了进展，采用可执行形式主义而不是散文进行规定。然而，到目前为止，这些正式规范仅限于ISA的功能方面，并未涵盖其安全保证。我们提出了一种新颖、通用的方法，用于形式化规定ISA的安全保证，以(1)平衡ISA实现（硬件）和客户端（软件）的需求，(2)可以对ISA操作语义进行半自动验证，生成高度确信的机械验证证明，以及(3)在有恶意代码存在的情况下支持关于安全关键软件的非正式和形式推理。我们的方法利用普适性契约：这些软件契约会对任意不受信任代码的权限设立界限。普适性契约可以在不涉及软件抽象的情况下保持中立，并在要求足够详细以便推理软件的同时，保留ISA设计人员和CPU实现者的实现自由权。我们使用我们的Katamaran工具半自动验证了普适性契约与Sail ISA语义的对应。Katamaran是一个分离逻辑半自动验证器，可为成功验证的契约生成机器检查证明。我们通过将该方法应用于两种提供非常不同安全原语的ISA来演示我们方法的广泛适用性：(1) MinimalCaps：一个定制的能力机器ISA，和 (2) 一个简化版RISC-V并带有PMP。我们使用我们为RISC-V带有PMP所形式化的安全保证验证了一个femtokernel。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616602](https://doi.org/10.1145/3576915.3616602)
## Boosting the Performance of High-Assurance Cryptography: Parallel Execution and Optimizing Memory Access in Formally-Verified Line-Point Zero-Knowledge.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#boosting-the-performance-of-high-assurance-cryptography-parallel-execution-and-optimizing-memory-access-in-formally-verified-line-point-zero-knowledge) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#boosting-the-performance-of-high-assurance-cryptography-parallel-execution-and-optimizing-memory-access-in-formally-verified-line-point-zero-knowledge)**
### 作者
* Samuel Dittmer, Stealth Software Technologies, Inc., Los Angeles, CA, USA
* Karim Eldefrawy, SRI International, Menlo Park, CA, USA
* Stéphane Graham-Lengrand, SRI International, Menlo Park, CA, USA
* Steve Lu, Stealth Software Technologies, Inc., Los Angeles, CA, USA
* Rafail Ostrovsky, University of California, Los Angeles, Los Angeles, CA, USA
* Vitor Pereira, SRI International, Menlo Parke, CA, USA
### 摘要
> 尽管在密码协议高保证、验证实现方面取得了显著进展，但这些实现通常面临着显著的性能开销，尤其是由于形式验证和自动提取可执行代码所带来的惩罚。在本文中，我们通过提出一种针对计算机辅助密码学性能挑战的形式化处理，来加速此类验证实现。我们采用多种通用优化方法，包括并行性和内存访问，来解决性能瓶颈问题。我们以线条点零知识（LPZK）协议作为案例研究，展示了解决性能瓶颈的技术。我们以使用EasyCrypt形式化和合成的LPZK的新验证实现为起点；我们的首个实现旨在减少证明工作量，而不考虑提取的可执行代码的性能。然后，我们展示了如何通过三种不同方式优化（自动）提取的代码，以获得3000倍的加速比，从而与lpzkv2的手动实现的性能相匹配[13]。通过首先修改算法规范，然后采用可证明安全的并行执行模型，并最后优化内存访问结构，我们获得了这样的性能提升。所有优化都首先在EasyCrypt中进行形式验证，然后从每个形式化步骤中自动合成可执行代码。对于每个优化，我们分析了由此带来的性能提升，并解决了计算机辅助安全证明和自动合成可执行代码所面临的挑战。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616583](https://doi.org/10.1145/3576915.3616583)
## Galápagos: Developing Verified Low Level Cryptography on Heterogeneous Hardwares.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#gal-pagos-developing-verified-low-level-cryptography-on-heterogeneous-hardwares) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#gal-pagos-developing-verified-low-level-cryptography-on-heterogeneous-hardwares)**
### 作者
* Yi Zhou, Carnegie Mellon University, Pittsburgh, PA, USA
* Sydney Gibson, Carnegie Mellon University, Pittsburgh, PA, USA
* Sarah Cai, Databricks, San Francisco, CA, USA
* Menucha Winchell, University of California, Berkeley, Berkeley, CA, USA
* Bryan Parno, Carnegie Mellon University, Pittsburgh, PA, USA
### 摘要
> 新硬件设计的大量出现使得定制化高性能加密实现在每个平台上进行汇编级别的处理变得困难，更不用说证明这样的实现是否正确。因此，我们引入了Galápagos，一个可扩展的框架，旨在减少验证不同ISA上的加密实现所需的工作量。在Galápagos中，开发人员只需一次证明其高级实现策略的正确性，然后将策略和证明捆绑为一个抽象模块。该模块可以实例化并连接到每个特定平台的实现上。Galápagos通过通用地提升目标平台的抽象性，并通过一系列新的验证库和工具改进来帮助自动化证明过程，从而实现了这种连接。我们通过在三个截然不同的平台上验证多个加密实现来验证Galápagos的效果：一个256位特殊加速器，一个16位最小ISA（MSP430）和一个标准的32位RISC-V CPU。我们的案例研究源自于一个真实的使用案例，即OpenTitan安全芯片，在该芯片中，我们的验证加密代码正在大规模部署中。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616603](https://doi.org/10.1145/3576915.3616603)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616603](https://dl.acm.org/doi/pdf/10.1145/3576915.3616603)
## Specification and Verification of Side-channel Security for Open-source Processors via Leakage Contracts.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#specification-and-verification-of-side-channel-security-for-open-source-processors-via-leakage-contracts) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#specification-and-verification-of-side-channel-security-for-open-source-processors-via-leakage-contracts)**
### 作者
* Zilong Wang, IMDEA Software Institute & Universidad Politécnica de Madrid, Madrid, Spain
* Gideon Mohr, Saarland University, Saarbrücken, Germany
* Klaus von Gleissenthall, Vrije Universiteit Amsterdam, Amsterdam, Netherlands
* Jan Reineke, Saarland University, Saarbrücken, Germany
* Marco Guarnieri, IMDEA Software Institute, Madrid, Spain
### 摘要
> 最近，泄漏合约被提议作为指令集体系结构（ISA）层面的一种新的安全抽象。泄漏合约旨在捕捉处理器通过其微架构实现所泄漏的信息。然而，到目前为止，我们缺乏一种验证处理器实际满足给定泄漏合约的方法。在本文中，我们通过开发LeaVe来解决这个挑战，这是第一个用于验证寄存器传输级（RTL）处理器设计与ISA级泄漏合约相符的工具。为此，我们展示了如何解耦安全性和功能正确性问题。LeaVe利用这种解耦使合约满足的验证变得实际可行。为了适应实际处理器设计的规模，LeaVe还在关系抽象上使用归纳推理。使用LeaVe，我们精确地揭示了三个开源的RISC-V处理器的侧信道安全性保证，从而获得了RTL处理器设计的首个合约满足证明。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623192](https://doi.org/10.1145/3576915.3623192)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623192](https://dl.acm.org/doi/pdf/10.1145/3576915.3623192)
## Grotto: Screaming fast (2+1)-PC or ℤ2n via (2, 2)-DPFs.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#grotto-screaming-fast-2-1-pc-or-2n-via-2-2-dpfs) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#grotto-screaming-fast-2-1-pc-or-2n-via-2-2-dpfs)**
### 作者
* Kyle Storrier, University of Calgary, Calgary, AB, Canada
* Adithya Vadapalli, IIT Kanpur, Kanpur, India
* Allan Lyons, University of Calgary, Calgary, AB, Canada
* Ryan Henry, University of Calgary, Calgary, AB, Canada
### 摘要
> 我们介绍了Grotto，一个用于在ℤ2n上进行秘密加法共享的空间和时间高效的（2+1）方块多项式（即样条）评估的框架和C++库。Grotto在几乎每个指标上都改进了基于分布式比较函数（DCFs）的最新方法，提供了具有相同或更低的轮复杂度的渐进优越的通信和计算成本。Grotto的核心是针对文献中最高效的分布式点函数（DPFs）的“树”表示结构的一种新颖观察，以及一种有效的算法，利用这种结构执行与最新方法相比需要相对笨重的DCFs执行的轻量级DPF。我们的开源Grotto实现开箱即用，支持包括三角和双曲函数及其反函数、各种对数函数、根、倒数和倒数根、符号测试和位计数以及来自深度学习文献中最常见的两打单变量激活函数等数十个有用函数。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623147](https://doi.org/10.1145/3576915.3623147)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623147](https://dl.acm.org/doi/pdf/10.1145/3576915.3623147)
## Scalable Multiparty Garbling.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#scalable-multiparty-garbling) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#scalable-multiparty-garbling)**
### 作者
* Gabrielle Beck, Johns Hopkins University, Baltimore, MD, USA
* Aarushi Goel, NTT Research, Sunnyvale, CA, USA
* Aditya Hegde, Johns Hopkins University, Baltimore, MD, USA
* Abhishek Jain, Johns Hopkins University & NTT Research, Baltimore, MD, USA
* Zhengzhong Jin, Massachusetts Institute of Technology, Cambridge, MA, USA
* Gabriel Kaptchuk, Boston University, Boston, MA, USA
### 摘要
> 多方加密是实现安全多方计算（MPC）的最流行方法。尽管受到了大量研究的关注，但在实际应用中，以前的多方加密方法无法适应大量参与者的常数回合MPC。本文提出了第一个全球范围的多方加密协议。我们的协议每个参与者的通信复杂度会随着参与者数量增加而减少，首次达到非常数轮MPC协议的渐进通信复杂度。在诚实多数人的设置下，我们的协议实现了恶意安全，并依赖于有噪音学习参与方假设的难度。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623132](https://doi.org/10.1145/3576915.3623132)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623132](https://dl.acm.org/doi/pdf/10.1145/3576915.3623132)
## Linear Communication in Malicious Majority MPC.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#linear-communication-in-malicious-majority-mpc) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#linear-communication-in-malicious-majority-mpc)**
### 作者
* S. Dov Gordon, George Mason University & TripleBlind, Fairfax, VA, USA
* Phi Hung Le, George Mason University, Fairfax, VA, USA
* Daniel McVicker, George Mason University, Fairfax, VA, USA
### 摘要
> SPDZ 多方计算协议 \citeC:DPSZ12 允许 n 个参与方在有限域上安全地计算算术电路，同时容忍最多 n-1 个活动污染。基于 SPDZ 的一系列工作在协议性能方面取得了显著的改进，通常侧重于具体的效率。然而，这些协议的通信复杂度都为 Ømega(n^2|C|)。在本文中，我们提出了一种达到 \mathcalO (n|C|) 通信的协议。我们的构建与 SPDZ 协议系列中的协议非常相似，但用于计算已验证总和的模块化子例程不同。在 SPDZ 协议中，有几次 n 个参与方希望对 n 个公共值求和。与要求每个参与方将其输入广播给所有其他参与方不同，显然更便宜的方法是使用一些指定的“经销商”来计算并广播总和。在先前的工作中，假设验证这些总和的正确性的成本为 O(n^2)，抵消了使用经销商的好处。我们展示了如何在计算多个总和的过程中摊销这个成本，从而在电路大小为 |C| > n 时获得线性通信复杂度。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623162](https://doi.org/10.1145/3576915.3623162)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623162](https://dl.acm.org/doi/pdf/10.1145/3576915.3623162)
## Efficient Multiparty Probabilistic Threshold Private Set Intersection.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#efficient-multiparty-probabilistic-threshold-private-set-intersection) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#efficient-multiparty-probabilistic-threshold-private-set-intersection)**
### 作者
* Feng-Hao Liu, Washington State University, Pullman, WA, USA
* En Zhang, Henan Normal University, Xinxiang, China
* Leiyong Qin, Henan Normal University, Xinxiang, China
### 摘要
> 阈值私有集交集（TPSI）允许多个参与方仅在交集大小大于一定阈值时了解其输入集的交集。这个任务在实际应用中已经证明有用，因此进行了许多积极的研究。然而，目前的TPSI解决方案对于大规模输入集（例如集合大小为n=2^20）仍然较慢，而且潜在的实用候选方案只能对抗半诚实的对手。对于基本的集合交集（PSI），已经有了高效可扩展的解决方案，即使在恶意设置下也是如此。有趣的是要确定添加阈值功能是否会对PSI造成大的开销。为了弥合差距，我们引入了一个新概念，称为概率TPSI，其中各方通过与\I的大小成比例的概率学习交集\I。这个功能通过承担发生不良事件（即各方可能学习到大小不足的\I）的小概率来实现高效和可扩展设计的新方向。作为一项新颖的技术贡献，我们设计了一种高效的多方概率集合大小测试协议，与任何标准PSI一起在半诚实设置中实现概率变体。虽然这种通用方法无法推广到恶意设置，但我们从先前基于OPRF的PSI中识别出了良好的属性，可以进一步与我们的概率集合大小测试结合，以实现针对恶意对手的概率TPSI协议，具有竞争力的效率和可扩展性。总之，我们展示了以下内容：（1）在半诚实设置中，存在一种概率TPSI，其效率本质上与通用PSI相当，（2）在恶意设置中，存在一种双方概率TPSI，其效率本质上是基于OPRF的PSI研究（Raghuraman and Rindal，CCS 2022）的两倍，这意味着PSI与概率TPSI之间存在较小的差距。我们进行了全面的实验来评估我们各个构建模块和整个协议的具体效率。特别地，我们针对半诚实和恶意设置下的n=2^20的双方概率TPSI协议运行时间分别为7秒和10秒（在线）。这验证了我们方法的实际优势。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623158](https://doi.org/10.1145/3576915.3623158)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623158](https://dl.acm.org/doi/pdf/10.1145/3576915.3623158)
## Vulnerability Intelligence Alignment via Masked Graph Attention Networks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#vulnerability-intelligence-alignment-via-masked-graph-attention-networks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#vulnerability-intelligence-alignment-via-masked-graph-attention-networks)**
### 作者
* Yue Qin, Indiana University Bloomington, Bloomington, IN, USA
* Yue Xiao, Indiana University Bloomington, Bloomington, IN, USA
* Xiaojing Liao, Indiana University Bloomington, Bloomington, IN, USA
### 摘要
> 网络安全漏洞信息通常来自多个渠道，如政府漏洞存储库、个人维护的漏洞收集平台，或者漏洞披露电子邮件列表和论坛。整合来自不同渠道的漏洞信息可以进行全面的威胁评估，并快速部署到各种安全机制中。然而，由于当今实体对齐技术的局限性，特别是缺乏决定性信息（例如CVE-ID）的自动融合漏洞信息受到了阻碍。在我们的研究中，我们注释并发布了第一个网络安全领域的漏洞对齐数据集，并突出了安全实体的独特特点，包括不同漏洞存储库中相同漏洞的不一致漏洞属性（例如影响范围和受影响版本）。基于这些特点，我们提出了一个实体对齐模型CEAM，用于整合来自多个来源的漏洞信息。CEAM使用基于图神经网络的实体对齐技术，并结合了两种应用驱动机制：非对称掩码聚合和分区注意力。这些技术通过非对称掩码有选择地聚合漏洞属性，通过学习语义嵌入来提高漏洞的表征，同时确保对于漏洞识别至关重要的属性始终得到更多的考虑。漏洞对齐数据集上的实验结果表明，CEAM在实体对齐方法方面明显优于现有的方法。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616686](https://doi.org/10.1145/3576915.3616686)
## In Search of netUnicorn: A Data-Collection Platform to Develop Generalizable ML Models for Network Security Problems.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#in-search-of-netunicorn-a-data-collection-platform-to-develop-generalizable-ml-models-for-network-security-problems) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#in-search-of-netunicorn-a-data-collection-platform-to-develop-generalizable-ml-models-for-network-security-problems)**
### 作者
* Roman Beltiukov, UC Santa Barbara, Santa Barbara, CA, USA
* Wenbo Guo, Purdue University, West Lafayette, IN, USA
* Arpit Gupta, UC Santa Barbara, Santa Barbara, CA, USA
* Walter Willinger, NIKSUN, Inc., Princeton, NJ, USA
### 摘要
> 机器学习解决网络安全问题取得了显著成功，但由于已开发的机器学习模型在不同网络环境和行为下使用时无法保持有效性，使得其成功面临阻碍。这个问题通常称为机器学习模型的泛化问题。研究群体意识到在这个问题中训练数据集的关键作用，并发展了各种技术来改善数据集的整理，以克服这个问题。不幸的是，这些方法通常在网络安全领域中不太适用，甚至适得其反，经常导致不现实或质量较差的数据集。为了解决这个问题，我们提出了一种新的闭环机器学习流水线，利用可解释的机器学习工具来指导网络数据的迭代采集。为了确保数据的真实性和质量，我们要求这些新数据集应该在这个迭代过程中内生地采集，从而倡导逐步消除数据相关问题以提高模型的泛化能力。为了实现这种能力，我们开发了一个数据采集平台netUnicorn，它借鉴了经典的"沙漏"模型，并作为其"细腰"实施，以简化对来自不同网络环境的不同学习问题的数据采集。所提出的系统将数据采集意图与部署机制分离，并将这些高层意图分解为更小、可重用、自包含的任务。我们演示了netUnicorn如何简化对来自多个网络环境的不同学习问题的数据采集，以及所提出的迭代数据采集如何提高模型的泛化能力。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623075](https://doi.org/10.1145/3576915.3623075)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623075](https://dl.acm.org/doi/pdf/10.1145/3576915.3623075)
## MDTD: A Multi-Domain Trojan Detector for Deep Neural Networks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#mdtd-a-multi-domain-trojan-detector-for-deep-neural-networks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#mdtd-a-multi-domain-trojan-detector-for-deep-neural-networks)**
### 作者
* Arezoo Rajabi, University of Washington, Seattle, WA, USA
* Surudhi Asokraj, University of Washington, Seattle, WA, USA
* Fengqing Jiang, University of Washington, Seattle, WA, USA
* Luyao Niu, University of Washington, Seattle, WA, USA
* Bhaskar Ramasubramanian, Western Washington University, Bellingham, WA, USA
* James Ritcey, University of Washington, Seattle, WA, USA
* Radha Poovendran, University of Washington, Seattle, WA, USA
### 摘要
> 使用深度神经网络（DNN）的机器学习模型容易受到后门攻击的影响。进行后门攻击的对手将称为触发器的预定义扰动嵌入到输入样本的一个小子集中，并训练DNN，使得输入中存在触发器导致对手所期望的输出类别。然而，这种对抗重训练需要确保没有触发器的输入输出保持不受影响，并且对干净样本提供高分类准确度。现有的防御后门攻击方法在计算方面很昂贵，并且它们的成功主要在基于图像的输入上进行了证明。部署预训练的DNN以降低重新训练大模型成本的方式日益普及，因此那些旨在检测“可疑”输入样本的防御机制更加可取。在本文中，我们提出了一种用于DNN的多领域特洛伊检测器（MDTD），该检测器在测试时检测包含特洛伊触发器的输入。MDTD不需要了解攻击者的触发器嵌入策略，并且可以应用于具有图像、音频或基于图的输入的预训练DNN模型。MDTD利用一个洞察力，即包含特洛伊触发器的输入样本相对于决策边界而言位于比干净样本更远的位置。MDTD使用对抗学习方法估计到决策边界的距离，并利用此距离推断测试时输入样本是否被触发器感染。我们在五个广泛使用的基于图像的数据集（CIFAR100、CIFAR10、GTSRB、SVHN和Flowers102）、四个基于图的数据集（AIDS、WinMal、Toxicant和COLLAB）以及SpeechCommand音频数据集上评估了MDTD。我们的结果表明，MDTD有效识别包含不同类型特洛伊触发器的样本。我们进一步评估了MDTD对自适应攻击的抵抗能力，其中对手训练一个强大的DNN来增加（减少）良性（特洛伊）输入与决策边界之间的距离。尽管对手的这种训练降低了MDTD的检测率，但是这是以降低分类准确率或对手成功率为代价的，从而使得得到的模型不适合使用。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623082](https://doi.org/10.1145/3576915.3623082)
## ProvG-Searcher: A Graph Representation Learning Approach for Efficient Provenance Graph Search.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#provg-searcher-a-graph-representation-learning-approach-for-efficient-provenance-graph-search) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#provg-searcher-a-graph-representation-learning-approach-for-efficient-provenance-graph-search)**
### 作者
* Enes Altinisik, Qatar Computing Research Institute, HBKU, Doha, Qatar
* Fatih Deniz, Qatar Computing Research Institute, HBKU, Doha, Qatar
* Hüsrev Taha Sencar, Qatar Computing Research Institute, HBKU, Doha, Qatar
### 摘要
> 我们提出了ProvG-Searcher，这是一种用于在系统安全日志中检测已知APT行为的新方法。我们的方法利用来源图，即事件日志的综合图形表示，通过将系统实体映射为节点、它们的相互作用映射为边来捕获和描述数据来源关系。我们将搜索来源图的任务形式化为子图匹配问题，并采用图形表示学习方法。我们搜索方法的核心组件包括将子图嵌入向量空间，以便可以直接评估子图之间的关系。我们通过使用序嵌入将子图匹配简化为查询和预计算子图表示之间的直接比较来实现这一点。为了解决来源图规模和复杂性带来的挑战，我们提出了图分区方案和保留行为的图约简方法。总体而言，我们的技术在计算效率上具有显著优势，允许大部分搜索计算线下执行，同时在查询执行期间采用轻量级比较步骤。在标准数据集上的实验结果表明，ProvG-Searcher在性能上表现优越，检测查询行为的准确率超过99％，误报率约为0.02％，优于其他方法。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623187](https://doi.org/10.1145/3576915.3623187)
## Securely Sampling Discrete Gaussian Noise for Multi-Party Differential Privacy.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#securely-sampling-discrete-gaussian-noise-for-multi-party-differential-privacy) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#securely-sampling-discrete-gaussian-noise-for-multi-party-differential-privacy)**
### 作者
* Chengkun Wei, Zhejiang University, Hangzhou, China
* Ruijing Yu, Zhejiang University, Hangzhou, China
* Yuan Fan, Zhejiang University, Hangzhou, China
* Wenzhi Chen, Zhejiang University, Hangzhou, China
* Tianhao Wang, University of Virginia, Charlottesville, VA, USA
### 摘要
> 差分隐私（DP）是一种广泛使用的技术，通过限制从聚合数据中推断出的个体信息来保护个人隐私。最近，人们努力利用安全多方计算（MPC）实现DP，以实现高效用途而无需可信第三方。实现MPC中DP的关键组成部分之一是噪声抽样。我们的工作提出了第一个用于抽样离散高斯分布的MPC解决方案，这是一种常用于构建DP机制的噪声类型，并且与恶意的安全MPC协议相协调。我们的解决方案既通用，支持各种MPC协议和任意数量的参与方，又高效，主要依赖位运算，避免了超越函数或非整数算术的计算。我们的实验表明，我们的方法可以在1.5分钟内生成标准差为20、安全参数为128的215个离散高斯抽样。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616641](https://doi.org/10.1145/3576915.3616641)
## Detecting Violations of Differential Privacy for Quantum Algorithms.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#detecting-violations-of-differential-privacy-for-quantum-algorithms) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#detecting-violations-of-differential-privacy-for-quantum-algorithms)**
### 作者
* Ji Guan, State Key Laboratory of Computer Science, Institute of Software, Chinese Academy of Sciences, Beijing, China
* Wang Fang, State Key Laboratory of Computer Science, Institute of Software, Chinese Academy of Sciences, Beijing, China
* Mingyu Huang, State Key Laboratory of Computer Science, Institute of Software, Chinese Academy of Sciences, Beijing, China
* Mingsheng Ying, State Key Laboratory of Computer Science, Institute of Software, Chinese Academy of Sciences & Tsinghua University, Beijing, China
### 摘要
> 在过去的十年中，提出了解决各种实际问题的量子算法，例如数据搜索和分析、产品推荐和信用评分等。人们自然而然地关注量子计算中的隐私和其他伦理问题。本论文中，我们定义了一个正式的框架来检测量子算法的差分隐私违规行为。开发了一种检测算法来验证（有噪音的）量子算法是否具有差分隐私，并在报告差分隐私违规时自动生成故障信息。该信息由一对违反隐私的量子态组成，以说明违规的原因。我们的算法配备了张量网络，这是一种高效的数据结构，并在TensorFlow Quantum和TorchQuantum上执行，它们是著名机器学习平台TensorFlow和PyTorch的量子扩展。我们的算法的有效性和效率已通过几乎所有类型的量子算法在现实量子计算机上已实现的实验结果得到确认，包括（超越经典算法能力的）量子霸权算法，量子机器学习模型，量子近似优化算法和最小量子特征求解器，其量子位数高达21。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623108](https://doi.org/10.1145/3576915.3623108)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623108](https://dl.acm.org/doi/pdf/10.1145/3576915.3623108)
## Amplification by Shuffling without Shuffling.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#amplification-by-shuffling-without-shuffling) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#amplification-by-shuffling-without-shuffling)**
### 作者
* Borja Balle, Google Deepmind, London, United Kingdom
* James Bell, Google, London, United Kingdom
* Adrià Gascón, Google, New York, NY, USA
### 摘要
> 受最近差分隐私Shuffle模型的进展的启发，我们提出了一种新的近似洗牌功能，称为Alternating Shuffle，并提供了一种在单服务器威胁模型中实现交替洗牌的协议，其中对手观察到所有通信。与该威胁模型中的先前洗牌协议不同，我们协议的每个客户端通信量仅在客户端数量的亚线性增长。此外，我们研究了我们协议的具体效率，并显示它可以改善每个客户端通信量，与先前（近似）洗牌协议相比，提高一个或多个数量级。我们还为Alternating Shuffle展示了类似于均匀洗牌的差分隐私扩增结果，并证明基于Ishai等人的结构的基于洗牌的安全求和协议在Alternating Shuffle下仍然是安全的。在此过程中，我们还开发了一种精确洗牌协议，该协议在单服务器威胁模型中具有按客户端分摊对数通信，可能具有独立的兴趣。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623215](https://doi.org/10.1145/3576915.3623215)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623215](https://dl.acm.org/doi/pdf/10.1145/3576915.3623215)
## HELiKs: HE Linear Algebra Kernels for Secure Inference.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#heliks-he-linear-algebra-kernels-for-secure-inference) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#heliks-he-linear-algebra-kernels-for-secure-inference)**
### 作者
* Shashank Balla, University of California San Diego, San Diego, CA, USA
* Farinaz Koushanfar, University of California San Diego, San Diego, CA, USA
### 摘要
> 我们介绍了HELiKs，这是一个开创性的框架，用于快速和安全的矩阵乘法和3D卷积，专为保护隐私的机器学习而设计。HELiKs利用同态加密（HE）和加法秘密共享，实现了安全的矩阵和向量计算，同时确保了所有参与方的端到端数据隐私。所提出的框架的关键创新包括高效的乘积累加（MAC）设计，显著减少HE误差增长；部分和累加策略，通过对数因子减少HE旋转的次数；以及一种新颖的矩阵编码，便于快速在线HE乘法与一次性预计算。此外，HELiKs大幅减少了HE计算中使用的密钥数量，在设置阶段降低了带宽使用。在我们的评估中，与现有的安全计算方法相比，HELiKs在运行时间和通信开销方面显示出显著的性能提升。通过我们的工作证明（可在GitHub上找到：https://github.com/shashankballa/HELiKs），我们展示了与先前技术相比高达32倍的矩阵乘法加速和27倍的3D卷积加速的最先进性能。HELiKs还将矩阵乘法的通信开销减少了1.5倍，3D卷积的通信开销减少了29倍，从而提高了数据传输的效率。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623136](https://doi.org/10.1145/3576915.3623136)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623136](https://dl.acm.org/doi/pdf/10.1145/3576915.3623136)
## SkillScanner: Detecting Policy-Violating Voice Applications Through Static Analysis at the Development Phase.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#skillscanner-detecting-policy-violating-voice-applications-through-static-analysis-at-the-development-phase) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#skillscanner-detecting-policy-violating-voice-applications-through-static-analysis-at-the-development-phase)**
### 作者
* Song Liao, Clemson University, Clemson, SC, USA
* Long Cheng, Clemson University, Clemson, SC, USA
* Haipeng Cai, Washington State University, Pullman, WA, USA
* Linke Guo, Clemson University, Clemson, SC, USA
* Hongxin Hu, University at Buffalo, Buffalo, NY, USA
### 摘要
> 亚马逊Alexa市场是最大的语音个人助手(VPA)平台，拥有超过100,000个发布到技能商店的语音应用程序（即技能）。为了保持语音应用程序的质量和可信度，亚马逊Alexa已经实施了一系列要求，供第三方开发者遵守。然而，最近的研究显示，当前的技能商店中存在违反政策的技能的普遍现象。为了了解技能中政策违规的原因，我们首先进行了一个用户研究，调查34名第三方技能开发者是否了解亚马逊Alexa平台定义的各种政策要求。我们的用户研究结果表明，VPA的政策要求与技能开发者的实践之间存在显著差距。因此，政策违规的技能将不可避免地被发布。为了防止违反政策的新技能从源头进入技能商店，及时在技能开发生命周期内识别潜在的政策违规非常关键。在这项工作中，我们设计并开发了SkillScanner，一种高效的静态代码分析工具，以帮助第三方开发者早期检测政策违规。为了评估SkillScanner的性能，我们对从GitHub收集的2,451个开源技能进行了实证研究。SkillScanner有效地发现了786个技能中1,328个不同的政策违规。我们的结果表明，这些政策违规中有32%是通过代码重复（即代码复制和粘贴）引入的。特别是，我们发现来自潜在的Alexa官方账号（例如 GitHub 上的 "alexa" 和 "alexa-samples"）的42个技能代码示例存在政策违规，导致其他技能因为从这些Alexa的代码示例中复制粘贴而产生81个政策违规。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616650](https://doi.org/10.1145/3576915.3616650)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616650](https://dl.acm.org/doi/pdf/10.1145/3576915.3616650)
## Protecting Intellectual Property of Large Language Model-Based Code Generation APIs via Watermarks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#protecting-intellectual-property-of-large-language-model-based-code-generation-apis-via-watermarks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#protecting-intellectual-property-of-large-language-model-based-code-generation-apis-via-watermarks)**
### 作者
* Zongjie Li, Hong Kong University of Science and Technology, Hong Kong, China
* Chaozheng Wang, Harbin Institute of Technology, Shenzhen, China
* Shuai Wang, Hong Kong University of Science and Technology, Hong Kong, China
* Cuiyun Gao, Harbin Institute of Technology, Shenzhen, China
### 摘要
> 基于大型语言模型的代码生成（LLCG）的崛起已经使得各种商业服务和API成为可能。训练LLCG模型通常是昂贵且耗时的，而训练数据往往是大规模的，甚至对公众来说是无法获得的。因此，LLCG模型的知识产权（例如，通过模仿攻击）盗窃的风险一直是一个严重的问题。在本文中，我们提出了第一种水印（WM）技术，用于保护LLCG API免受远程模仿攻击。我们的技术基于将LLCG输出中的令牌替换为编程语言中可用的它们的“同义词”。因此，WM被定义为LLCG输出中令牌同义词之间隐秘调整的分布。我们设计了六种WM方案（实例化为超过30个WM步骤），这些方案依赖于编程语言中概念上不同的令牌同义词。此外，为了检测可疑模型的知识产权（判断它是否从我们受保护的LLCG API中盗取），我们提出了一种基于统计测试的程序，可以直接检查远程的可疑LLCG API。我们在从两种流行的大型语言模型CodeT5和CodeBERT微调的LLCG模型上评估了我们的WM技术。评估结果显示，我们的方法在WM注入和知识产权检查方面都是有效的。插入的WM不会影响正常用户的使用（即高保真度），并且额外成本可以忽略不计。此外，我们插入的WM表现出很高的隐秘性和对强力攻击者的稳健性；即使他们知道所有的WM方案，也很难在不大幅损害所盗模型准确性的情况下移除WM。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623120](https://doi.org/10.1145/3576915.3623120)
## Simplifying Mixed Boolean-Arithmetic Obfuscation by Program Synthesis and Term Rewriting.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#simplifying-mixed-boolean-arithmetic-obfuscation-by-program-synthesis-and-term-rewriting) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#simplifying-mixed-boolean-arithmetic-obfuscation-by-program-synthesis-and-term-rewriting)**
### 作者
* Jaehyung Lee, Hanyang University, Ansan, Republic of Korea
* Woosuk Lee, Hanyang University, Ansan, Republic of Korea
### 摘要
> 混合布尔运算（MBA）混淆将程序表达式转换为等效但复杂难懂的表达式。MBA混淆因其简单性和有效性而广受欢迎，用于保护程序免受逆向工程的侵害。然而，它也被用于逃避恶意软件检测，因此需要开发有效的MBA反混淆技术。现有的反混淆方法存在以下四个限制之一：（1）缺乏普适性，（2）缺乏灵活性，（3）缺乏可扩展性，（4）缺乏正确性。在本文中，我们提出了一种多才多艺的MBA反混淆方法，将程序合成、术语重写和代数简化方法协同结合。我们方法的关键创新在于我们对反混淆的转换规则进行动态学习，并将其应用于重写输入的MBA表达式。我们在一个名为ProMBA的工具中实现了我们的方法，并对由最先进的混淆工具混淆的4000多个MBA表达式进行评估。实验结果显示，我们的方法大大优于最先进的MBA反混淆工具，成功简化了绝大多数混淆表达式为它们的原始形式。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623186](https://doi.org/10.1145/3576915.3623186)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623186](https://dl.acm.org/doi/pdf/10.1145/3576915.3623186)
## Enhancing OSS Patch Backporting with Semantics.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#enhancing-oss-patch-backporting-with-semantics) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#enhancing-oss-patch-backporting-with-semantics)**
### 作者
* Su Yang, National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences, Beijing, China
* Yang Xiao, Institute of Information Engineering, Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
* Zhengzi Xu, Nanyang Technological University, Singapore, Singapore
* Chengyi Sun, National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences, Beijing, China
* Chen Ji, Xidian University, Xi'an, China
* Yuqing Zhang, University of Chinese Academy of Sciences, Xidian University, & Hainan University, Beijing, China
### 摘要
> 保持开源软件（OSS）的更新是防止已知漏洞的一种潜在解决方案。然而，这需要频繁且昂贵的测试，并可能引入兼容性问题。因此，开发人员经常选择将安全补丁应用到易受攻击的版本中。手动回溯移植非常耗时，特别是对于像Linux内核这样庞大的OSS。因此，实现自动化的过程是迫切需要的，以节省大量时间。现有的自动化补丁回溯方法包括自动生成补丁和自动迁移补丁。然而，由于这些方法未能定位到精确的补丁位置或生成正确的补丁，它们经常无效且容易出错，仅在语法层面进行操作。在本文中，我们提出了一种基于补丁类型敏感的方法来自动回溯OSS安全补丁，该方法以补丁类型和补丁语义为指导。具体而言，我们的方法通过基于程序依赖图匹配的语义级别来识别补丁位置。还进一步根据补丁类型进行细粒度的补丁迁移和微调。我们在一个大规模数据集上实施了我们的方法，该数据集包含1,815对Linux内核的真实安全补丁。评估结果显示，TSBPORT成功回溯了 1,589（87.59%）个补丁，其中587（32.34%）个无法被任何最先进的方法回溯迁移，明显优于最先进的方法。此外，实验证明，TSBPORT可以推广到其他OSS项目中以回溯补丁，成功率为88.18%。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623188](https://doi.org/10.1145/3576915.3623188)
## Evaluating the Security Posture of Real-World FIDO2 Deployments.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#evaluating-the-security-posture-of-real-world-fido2-deployments) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#evaluating-the-security-posture-of-real-world-fido2-deployments)**
### 作者
* Dhruv Kuchhal, Georgia Institute of Technology, Atlanta, GA, USA
* Muhammad Saad, PayPal, Inc., Scottsdale, AZ, USA
* Adam Oest, PayPal, Inc., Scottsdale, AZ, USA
* Frank Li, Georgia Institute of Technology, Atltanta, GA, USA
### 摘要
> FIDO2是一套协议，将本地认证（例如生物特征）的易用性与公钥密码学的安全性相结合，实现了免密码认证。它消除了共享认证秘钥（即密码，可能会被泄露或钓鱼），并在客户端协议组件的良好行为假设下提供强大的安全保证。然而，当这种假设不成立时，例如在存在恶意软件的情况下，客户端认证会给FIDO2部署带来风险。FIDO2提供了部署建议来减轻这种情况。然而，迄今为止，对于部署是否采用这些减轻措施以及受到损害的客户端对实际FIDO2部署（例如未授权账户访问或注册）产生的风险的经验调查有限。在这项工作中，我们的目标是填补这一空白，具体包括以下方面：1) 系统化评估当客户端协议组件的假设不成立时对FIDO2部署的威胁，2) 从服务器端和客户端的角度对Tranco前1000个网站上实际FIDO2部署的安全状况进行经验性评估，同时考虑服务器端和客户端的视角，3) 综合可以采用的减轻措施，进一步加强FIDO2实际提供的安全性。通过调查，我们发现由于配置薄弱，受损客户端对FIDO2部署构成实际威胁，已知的减轻措施存在重大缺陷和/或最低限度的采用。根据我们的发现，我们提出了生态系统开发额外防御措施来强化FIDO2部署的方向。最终，我们的工作旨在推动改进FIDO2的实际安全性。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623063](https://doi.org/10.1145/3576915.3623063)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623063](https://dl.acm.org/doi/pdf/10.1145/3576915.3623063)
## Are we there yet? An Industrial Viewpoint on Provenance-based Endpoint Detection and Response Tools.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#are-we-there-yet-an-industrial-viewpoint-on-provenance-based-endpoint-detection-and-response-tools) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#are-we-there-yet-an-industrial-viewpoint-on-provenance-based-endpoint-detection-and-response-tools)**
### 作者
* Feng Dong, Huazhong University of Science and Technology, Wuhan, China
* Shaofei Li, Peking University, Beijing, China
* Peng Jiang, Peking University, Beijing, China
* Ding Li, Peking University, Beijing, China
* Haoyu Wang, Huazhong University of Science and Technology, Wuhan, China
* Liangyi Huang, Arizona State University, Phoenix, AZ, USA
* Xusheng Xiao, Arizona State University, Phoenix, AZ, USA
* Jiedong Chen, Sangfor Technologies Inc., Shenzhen, China
* Xiapu Luo, The Hong Kong Polytechnic University, Hong Kong, Hong Kong
* Yao Guo, Peking University, Beijing, China
* Xiangqun Chen, Peking University, Beijing, China
### 摘要
> 基于来源的终端检测与响应（P-EDR）系统被认为是未来先进持久性威胁（APT）防御中至关重要的组成部分。尽管学术界提出了许多新技术来改进P-EDR系统，但行业是否会采用P-EDR系统以及行业对P-EDR系统的改进需求仍然不清楚。为此，我们对P-EDR系统的有效性和限制进行了第一套系统研究。我们的研究包括四个部分：一对一的访谈、在线问卷调查、相关文献调研和系统测量研究。我们的研究表明，所有的行业专家都认为P-EDR系统比传统的终端检测与响应（EDR）系统更有效。然而，行业专家对P-EDR系统的运营成本表示担忧。此外，我们的研究揭示了学术界和行业之间的三个重大差距：（1）忽视客户端开销；（2）报警处理成本和解释成本不平衡；以及（3）过高的服务器端内存消耗。本文的研究结果为P-EDR系统的有效性提供了客观数据，并指出了行业在采用P-EDR系统方面需要进行多大改进。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616580](https://doi.org/10.1145/3576915.3616580)
## Don't Leak Your Keys: Understanding, Measuring, and Exploiting the AppSecret Leaks in Mini-Programs.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#dont-leak-your-keys-understanding-measuring-and-exploiting-the-appsecret-leaks-in-mini-programs) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#dont-leak-your-keys-understanding-measuring-and-exploiting-the-appsecret-leaks-in-mini-programs)**
### 作者
* Yue Zhang, The Ohio State University, Columbus, OH, USA
* Yuqing Yang, The Ohio State University, Columbus, OH, USA
* Zhiqiang Lin, The Ohio State University, Columbus, OH, USA
### 摘要
> 微信的移动小程序自从2017年首次推出以来就获得了极大的流行，规模达到了与Play商店上的安卓应用相似的水平。像谷歌一样，微信提供商腾讯公司为支持小程序开发提供了API，并在微信应用内部维护了一个小程序市场。然而，小程序API通常会在社交网络平台上管理敏感用户数据，包括在微信客户端应用和云端中。因此，加密协议被实施用于保护数据访问。本文中，我们展示了微信应该要求"appsecret"主密钥仅在小程序后端中使用，用于验证小程序。如果这个密钥在小程序前端泄漏，将会导致对小程序开发者和用户的灾难性攻击。利用一个小程序爬虫和主密钥泄漏检查器，我们对3450586个爬取的小程序进行了测量，发现其中40880个已经泄露了它们的主密钥，允许攻击者进行各种攻击，如账号劫持、滥用推广和服务窃取。通过对百度小程序的测试和测量，也确认了类似的问题。我们已向腾讯和百度报告了这些漏洞和易受攻击的小程序列表，他们给予了我们赏金，并且腾讯最近发布了一项新的API来防御这些攻击，基于我们的研究结果。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616591](https://doi.org/10.1145/3576915.3616591)
## The Effectiveness of Security Interventions on GitHub.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#the-effectiveness-of-security-interventions-on-github) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#the-effectiveness-of-security-interventions-on-github)**
### 作者
* Felix Fischer, Technical University of Munich, Munich, Germany
* Jonas Höbenreich, Technical University of Munich, Munich, Germany
* Jens Grossklags, Technical University of Munich, Munich, Germany
### 摘要
> 2017年，GitHub成为第一个向用户展示安全警报的在线开源平台。此后，它进一步引入了安全干预措施，帮助开发者改善其开源软件的安全性。在本研究中，我们调查和比较了这些干预措施的效果。这为软件开发背景下的安全干预提供了有价值的实证视角，通过实质性的数据驱动洞察，丰富了主要以定性和调查为基础的文献背景。我们对超过50,000个GitHub仓库的整个历史范围内涉及安全改变的提交进行了时间序列分析，以推断安全警报、安全更新和代码扫描干预的因果效应。我们的分析显示，虽然GitHub的所有安全干预措施对安全性都有显著积极的影响，但它们的效果大小差异很大。通过比较每个干预措施的设计，我们确定了有效的构建块和无效的构建块。我们还提供了关于从业者如何改进干预措施设计以提高效果的建议。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623174](https://doi.org/10.1145/3576915.3623174)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623174](https://dl.acm.org/doi/pdf/10.1145/3576915.3623174)
## CoCo: Efficient Browser Extension Vulnerability Detection via Coverage-guided, Concurrent Abstract Interpretation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#coco-efficient-browser-extension-vulnerability-detection-via-coverage-guided-concurrent-abstract-interpretation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#coco-efficient-browser-extension-vulnerability-detection-via-coverage-guided-concurrent-abstract-interpretation)**
### 作者
* Jianjia Yu, Johns Hopkins University, Baltimore, MD, USA
* Song Li, Zhejiang University, Hangzhou, China
* Junmin Zhu, Shanghai Jiao Tong University, Shanghai, China
* Yinzhi Cao, Johns Hopkins University, Baltimore, MD, USA
### 摘要
> 扩展程序为浏览器添加了额外的功能，也为新的漏洞提供了新的场所，允许对手通过使用扩展程序API从对抗性网页进行特权升级。关于扩展程序漏洞检测的先前工作采用经典静态分析，无法处理动态JavaScript功能，如作为数组查找的一部分的函数调用。同时，以前的抽象解释集中在轻量级服务器端JavaScript上，由于抽象域中的对象爆炸，通常无法扩展到客户端扩展代码。在本文中，我们设计、实现和评估了一种新颖的、覆盖驱动的并发抽象解释框架CoCo，以有效地检测浏览器扩展程序中的漏洞。一方面，CoCo将抽象解释与并发污点传播并行化，用于每个分支语句、消息传递和内容/背景脚本，以改进可扩展性来检测漏洞。另一方面，CoCo优先考虑增加代码覆盖率的分析，从而进一步检测更多漏洞。我们的评估显示，CoCo检测到至少43个零日利用手动验证的扩展程序漏洞，这些漏洞不能通过最先进的工作进行检测。我们已将所有零日漏洞负责任地披露给扩展开发人员。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616584](https://doi.org/10.1145/3576915.3616584)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616584](https://dl.acm.org/doi/pdf/10.1145/3576915.3616584)
## Finding All Cross-Site Needles in the DOM Stack: A Comprehensive Methodology for the Automatic XS-Leak Detection in Web Browsers.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#finding-all-cross-site-needles-in-the-dom-stack-a-comprehensive-methodology-for-the-automatic-xs-leak-detection-in-web-browsers) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#finding-all-cross-site-needles-in-the-dom-stack-a-comprehensive-methodology-for-the-automatic-xs-leak-detection-in-web-browsers)**
### 作者
* Dominik Trevor Noß, Ruhr University Bochum, Bochum, Germany
* Lukas Knittel, Ruhr University Bo­chum, Bochum, Germany
* Christian Mainka, Ruhr University Bochum, Bochum, Germany
* Marcus Niemietz, Niederrhein University of Applied Sciences, Krefeld, Germany
* Jörg Schwenk, Ruhr University Bochum, Bochum, Germany
### 摘要
> 跨站点泄露（XS-Leaks）是一类漏洞，允许网络攻击者通过跨域访问目标Web应用程序来推断用户状态。修复XS-Leaks是一场猫鼠游戏：一旦公开的漏洞被修复，就会发现一个变种。为了结束这场游戏，我们提出了一种方法论，用于找到给定状态相关资源和一组包含方法的所有泄露技术。我们在运行时将网站的DOM转化为一个有向图。我们将此转换执行两次，每次都有一个状态。输出是两个略微不同的图形。然后，我们通过计算这两个图形的差异来获取所有泄露技术的集合。两个状态之间存在差异的节点和边以及相应的DOM属性和对象可以跨域被观察到。我们实现了AutoLeak，我们的开源解决方案，用于在Web浏览器和网站中自动检测已知和未知的XS-Leaks。对于我们的系统性研究，我们专注于具有由HTTP头引起的可检测差异的Web浏览器的XS-Leak测试案例。我们在Chrome、Firefox和Safari中创建并评估了总共151776个测试案例。AutoLeak在没有人工干预的情况下自动执行它们，并且每个测试案例可以识别出多达8403个泄露技术。此外，AutoLeak的系统评估还揭示了基于泄露技术的5个新型XS-Leaks类别，这些泄露技术可以跨域检测到新型HTTP头。我们展示了我们方法论在Tranco Top 50中的24个网站上的适用性，并在其中的20个网站中发现了XS-Leaks。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616598](https://doi.org/10.1145/3576915.3616598)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616598](https://dl.acm.org/doi/pdf/10.1145/3576915.3616598)
## Uncovering and Exploiting Hidden APIs in Mobile Super Apps.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#uncovering-and-exploiting-hidden-apis-in-mobile-super-apps) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#uncovering-and-exploiting-hidden-apis-in-mobile-super-apps)**
### 作者
* Chao Wang, The Ohio State University, Columbus, OH, USA
* Yue Zhang, The Ohio State University, Columbus, OH, USA
* Zhiqiang Lin, The Ohio State University, Columbus, OH, USA
### 摘要
> 移动应用程序，特别是来自社交媒体平台如微信和抖音的应用，正在演变为“超级应用”，提供诸如即时消息、媒体共享、电子商务、电子学习和电子政务等广泛的服务。这些超级应用通常为开发者提供API，以创建在超级应用内运行的“迷你应用程序”。这些API应该已经受到严格的安全审查。不幸的是，我们发现其中许多是未记录和不安全的，可能允许迷你应用程序绕过限制并获得更高的权限访问。为了系统地在它们被攻击者利用之前识别这些隐藏的API，我们开发了一个名为APIScope的工具，该工具结合了静态分析和动态分析，其中静态分析用于识别隐藏的未记录的API，动态分析用于确认所识别的API是否可以被非特权的第三方迷你应用程序调用。我们已将APIScope应用于五个流行的超级应用（即微信、企业微信、百度、QQ和抖音），发现它们都包含隐藏的API，其中许多由于缺少安全检查而可能被利用。我们还通过验证它们是否可以访问由Android权限保护的资源来量化可能具有安全隐患的隐藏API。此外，我们通过展示各种攻击场景，包括未经授权访问任何网页、下载和安装恶意软件以及窃取敏感信息，来展示潜在的安全风险。我们已将我们的发现报告给相关的供应商，其中一些已经修补了漏洞并以漏洞赏金的形式奖励了我们。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616676](https://doi.org/10.1145/3576915.3616676)
## A Good Fishman Knows All the Angles: A Critical Evaluation of Google's Phishing Page Classifier.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#a-good-fishman-knows-all-the-angles-a-critical-evaluation-of-googles-phishing-page-classifier) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#a-good-fishman-knows-all-the-angles-a-critical-evaluation-of-googles-phishing-page-classifier)**
### 作者
* Changqing Miao, Renmin University of China, Beijing, China
* Jianan Feng, Renmin University of China, Beijing, China
* Wei You, Renmin University of China, Beijing, China
* Wenchang Shi, Renmin University of China, Beijing, China
* Jianjun Huang, Renmin University of China, Beijing, China
* Bin Liang, Renmin University of China, Beijing, China
### 摘要
> 网络钓鱼是最流行的网络攻击之一。网络浏览器已将钓鱼检测集成到主流浏览器中，以提供在线保护。谷歌Chrome的钓鱼检测器每周报告数百万次钓鱼攻击。然而，已经证明它容易受到逃避攻击的影响。目前，谷歌已升级了Chrome/Chromium的钓鱼检测器，引入了基于CNN的图像分类器。新一代检测器的强壮性尚不清楚。如果可以绕过它，数十亿用户将面临复杂的攻击者威胁。本文通过有针对性的逃避测试对谷歌的钓鱼检测器进行了重要评估，并研究了相应的防御技术。首先，我们提出了一种针对钓鱼图像分类器的三阶段逃避方法。实验结果表明，使用所提出的方法生成的恶意钓鱼页面可以完全绕过检测器。与此同时，钓鱼页面仍然保留了它们的视觉效用。其次，我们介绍了两种防御技术来增强钓鱼检测模型。结果显示，即使使用轻量级的防御方法也可以显著提高模型的强壮性。我们的研究揭示了谷歌的新一代钓鱼分类器很容易受到有针对性的逃避攻击的威胁。一个复杂的网络钓鱼者可以知道如何愚弄这个分类器。数十亿Chrome用户正面临潜在的钓鱼攻击。为了提高其稳定性，必须引入必要的安全增强措施。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623199](https://doi.org/10.1145/3576915.3623199)
## Improved Distributed RSA Key Generation Using the Miller-Rabin Test.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#improved-distributed-rsa-key-generation-using-the-miller-rabin-test) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#improved-distributed-rsa-key-generation-using-the-miller-rabin-test)**
### 作者
* Jakob Burkhardt, Aarhus University, Aarhus, Denmark
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Tore Kasper Frederiksen, Zama, Paris, France
* Satrajit Ghosh, Indian Institute of Technology Kharagpur, Kharagpur, India
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
### 摘要
> 安全分布式生成RSA模数（例如，生成N = pq，在此过程中，没有任何一方获得关于p或q的任何信息）是一项重要的密码学任务，既适用于基于RSA的门限实现，也适用于其他高级密码协议，这些协议假定所有参与方都可以访问受信任的RSA模。在本文中，我们提供了一种基于Miller-Rabin测试的安全分布式RSA密钥生成新协议。与更常用的Boneh-Franklin测试相比（该测试需要多次迭代），Miller-Rabin测试的优势在于对足够大的模数（例如4096位）进行单次迭代后提供可以忽略错误。
> 
> 从技术角度而言，我们的主要贡献是一种新颖的可整除性测试，可以以高效的方式执行素性测试，同时保持p和q的机密性。我们的半诚实RSA生成协议以黑盒方式使用任何底层安全乘法协议，因此根据选择的乘法协议可以在诚实或不诚实的多数参与者场景中实施。通过现有编译器，我们使半诚实协议能够以低成本升级以防范主动攻击者。最后，我们提供了实验评估结果，表明在诚实多数参与者情况下，我们的协议比Boneh-Franklin更快。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623163](https://doi.org/10.1145/3576915.3623163)
## Towards Generic MPC Compilers via Variable Instruction Set Architectures (VISAs).
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#towards-generic-mpc-compilers-via-variable-instruction-set-architectures-visas) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#towards-generic-mpc-compilers-via-variable-instruction-set-architectures-visas)**
### 作者
* Yibin Yang, Georgia Institute of Technology, Atlanta, GA, USA
* Stanislav Peceny, Georgia Institute of Technology, Atlanta, GA, USA
* David Heath, University of Illinois Urbana-Champaign, Urbana, IL, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 在多方计算 (MPC) 中，我们通常将程序表示为电路。但对于使用复杂控制流的程序来说，这种表示方法并不完美，因为将控制流编译成电路代价很大。这促使之前的研究通过在MPC内部模拟CPU来解决问题。虽然模拟的CPU可以运行复杂程序，但它们会导致高开销，因为需要评估程序以及CPU的机制，包括取指、解码和执行指令，访问RAM等等。因此，无论是电路还是CPU模拟似乎都不适合用于一般的MPC。前者无法适应任意程序，而后者会产生高的每次操作开销。我们提出了可变指令集体系结构（VISA），该方法继承了电路和CPU模拟的最佳特性。与CPU不同，VISA机器重复执行整个程序片段，而不是单个指令。通过考虑更大的构建块，我们避免了大部分与CPU模拟相关的机制：我们将每个片段直接处理为一个电路。我们通过垃圾电路实现了一个VISA机器，从而实现了任意汇编程序的常轮 2PC。我们使用了改进的分支技术（Stacked Garbling，Heath and Kolesnikov，Crypto 2020）和最新的Garbled RAM（GRAM）（Heath等人，Eurocrypt 2022）。将这些安全高效地组合在一起是非常复杂的，也是我们主要的贡献之一。我们实现了我们的方法，并在常见的程序上运行，包括Dijkstra算法和Knuth-Morris-Pratt算法。我们的2PC VISA机器以300Hz到4000Hz的速度执行汇编指令，具体取决于目标程序。我们在低延迟网络上明显优于最先进的基于CPU的方法（Wang等人，ESORICS 2016，我们对他们的工具进行了重新基准测试）。我们在常轮运行，使用更少的带宽，以及同样的设置下快了超过40倍。在50ms（或100ms）的延迟下，我们在相同的设置下快了898倍（或1585倍）。虽然我们的重点是MPC，但VISA模型也对基于CPU模拟的零知识证明编译器（例如ZEE和EZEE，Heath等人，Oakland'21和Yang等人，EuroS&P'22）有益处。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616664](https://doi.org/10.1145/3576915.3616664)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616664](https://dl.acm.org/doi/pdf/10.1145/3576915.3616664)
## COMBINE: COMpilation and Backend-INdependent vEctorization for Multi-Party Computation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#combine-compilation-and-backend-independent-vectorization-for-multi-party-computation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#combine-compilation-and-backend-independent-vectorization-for-multi-party-computation)**
### 作者
* Benjamin Levy, Rensselaer Polytechnic Institute (RPI), Troy, NY, USA
* Muhammad Ishaq, Purdue University, West Lafayette, IN, USA
* Benjamin Sherman, Rensselaer Polytechnic Institute (RPI), Troy, NY, USA
* Lindsey Kennard, Rensselaer Polytechnic Institute (RPI), Troy, NY, USA
* Ana Milanova, Rensselaer Polytechnic Institute (RPI), Troy, NY, USA
* Vassilis Zikas, Purdue University, West Lafayette, IN, USA
### 摘要
> 近年来，计算技术在多方计算（MPC）领域取得了重大进展，使得MPC更加贴近实践并具备更广泛的适用性。典型的MPC编程框架专注于前端语言设计（例如Wysteria、Viaduct、SPDZ）或后端协议设计与实现（例如ABY、MOTION、MP-SPDZ）。我们提出了一种MPC编译工具链的方法论，通过模仿经典编译器的编译方法论，实现了中间层（即与机器无关）的优化，从而获得显著的改进效果。我们引入了一种中间语言，称之为MPC-IR，可以看作是（增强版）静态单赋值（SSA）形式的类比。MPC-IR使得后端无关的优化类似于经典编译器中的机器无关优化。为了展示我们的方法，我们专注于一种特定的后端无关优化，即SIMD向量化：我们在MPC-IR上设计了一种新颖的受经典编译器启发的自动SIMD向量化方法。为了证明后端无关性和优化质量，我们使用了两个主流的后端框架进行评估，它们支持多种类型的MPC协议，即MOTION和MP-SPDZ，并展示了全面的显著改进。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623181](https://doi.org/10.1145/3576915.3623181)
## Let's Go Eevee! A Friendly and Suitable Family of AEAD Modes for IoT-to-Cloud Secure Computation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#lets-go-eevee-a-friendly-and-suitable-family-of-aead-modes-for-iot-to-cloud-secure-computation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#lets-go-eevee-a-friendly-and-suitable-family-of-aead-modes-for-iot-to-cloud-secure-computation)**
### 作者
* Amit Singh Bhati, KU Leuven, Leuven, Belgium
* Erik Pohle, KU Leuven, Leuven, Belgium
* Aysajan Abidin, KU Leuven, Leuven, Belgium
* Elena Andreeva, Technical University of Vienna, Vienna, Austria
* Bart Preneel, KU Leuven, Leuven, Belgium
### 摘要
> 物联网设备收集涉及隐私的数据，例如智能电网或医疗设备中的数据，并将这些数据发送到云服务器进行进一步处理。为了确保在不可信的云环境中传感器数据的保密性和真实性，我们考虑了嵌入式物联网设备与执行安全多方计算（MPC）的多个云服务器之间的转换密码情景。具体而言，物联网设备使用轻量级对称密码对其数据进行加密，并将密文发送到云服务器。为了获取明文消息的秘密共享以进行进一步处理，云服务器参与MPC协议以分布式的方式解密密文。这样，明文永远不会暴露给各个服务器。作为该情景中的重要构建模块，我们提出了一个新的、经过证明安全性的轻量级带相关数据的认证加密（AEAD）模式家族，称为Eevee。Eevee家族具有完全并行的解密能力，适用于轮次复杂性取决于它们计算的函数的复杂性的MPC协议。此外，我们的模式使用轻量级forkcipher原语，该原语提供固定长度的输出扩展和紧凑且可并行化的内部结构。所有Eevee成员在少数现有最先进的MPC友好模式和其他标准解决方案上都有显著改进。我们在微控制器和MPC上对Eevee家族进行基准测试。我们提出的Jolteon模式（使用ForkSkinny实例化）在物联网加密时间上提供了1.85倍至3.64倍的加速，并在MPC解密时间和数据上提供3倍至4.5倍的加速，对于非常短的8字节查询，以及1.55倍至3.04倍和1.23倍至2.43倍的加速，对比使用SKINNY实例化的最先进的MPC友好模式，在查询达到500字节时进行MPC解密时间和数据的加速。我们还提供了两种高级模式，Umbreon和Espeon，它们在性能和安全性之间具有有利的权衡，具有诸如用途误用安全等更强的安全保证。此外，所有Eevee成员在原始安全设置下，具有完整的n位安全性（其中n是基础原语的块大小），使用单个原语，并且在状态和硬件区域方面要求更小，相比于最先进的模式。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623091](https://doi.org/10.1145/3576915.3623091)
## On the Security of KZG Commitment for VSS.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#on-the-security-of-kzg-commitment-for-vss) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#on-the-security-of-kzg-commitment-for-vss)**
### 作者
* Atsuki Momose, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Sourav Das, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Ling Ren, University of Illinois at Urbana-Champaign, Urbana, IL, USA
### 摘要
> Kate、Zaverucha和Goldberg（Asiscrypt 2010）所提出的常数大小多项式承诺方案，也被称为KZG承诺方案，是设计带宽高效的可验证秘密共享（VSS）协议的重要组成部分。然而，我们指出KZG承诺缺少两个对于VSS协议至关重要的属性。首先，在标准对手模型下，没有证明KZG承诺是具有双向绑定性的，而无需理想化群假设。换句话说，承诺的多项式不能保证具有所声称的阶数，而这个阶数应该是VSS的重构阈值。没有这个属性，VSS中的股东可能会根据所使用的份额重构出不同的秘密。其次，KZG承诺不支持同时具有不同阶数的多项式通过单次设置。如果基础VSS协议的重构阈值发生变化，协议必须重新设置，其中涉及到一种昂贵的多方计算，即tau设置的幂运算。在这项工作中，我们增强了KZG承诺，以解决这两个限制。我们的方案在标准模型下是具有双向绑定性的，基于强Diffie-Hellman（SDH）假设。它使用通过一次设置生成的m+1个群元素的tau幂方法链，支持任何0 < d ≤ m的阶数。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623127](https://doi.org/10.1145/3576915.3623127)
## Targeted Attack Synthesis for Smart Grid Vulnerability Analysis.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#targeted-attack-synthesis-for-smart-grid-vulnerability-analysis) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#targeted-attack-synthesis-for-smart-grid-vulnerability-analysis)**
### 作者
* Suman Maiti, Indian Institute of Technology Kharagpur, Kharagpur, India
* Anjana Balabhaskara, Indian Institute of Technology Kharagpur, Kharagpur, India
* Sunandan Adhikary, Indian Institute of Technology Kharagpur, Kharagpur, India
* Ipsita Koley, Indian Institute of Technology Kharagpur, Kharagpur, India
* Soumyajit Dey, Indian Institute of Technology Kharagpur, Kharagpur, India
### 摘要
> 现代智能电网利用先进的传感器和数字通信技术来管理电力从发电源到消费节点的流动。它们还采用异常检测单元和相量测量单元（PMU）来保障电网行为的安全和监控。然而，由于智能电网的分布式特性，有必要进行易受攻击性分析，以识别和减轻可能针对传感器和通信链路的潜在安全威胁。我们提出了一种新颖的算法，使用测量参数（如功率流或负荷流）来识别智能电网最易受攻击的运行时间段。我们的方法采用蒙特卡洛模拟方法来识别这些时间段，并部署一个深度强化学习机制，在识别出的时间段内生成可以在最短可能的时间内破坏电网安全与稳定性的攻击向量，同时不被本地异常检测单元和PMUs察觉。我们的方法为有效的智能电网易受攻击性分析提供了结构化的方法，使系统操作人员能够分析攻击参数对电网安全和稳定性的影响，并促进电网拓扑和操作参数的合适设计变更。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623155](https://doi.org/10.1145/3576915.3623155)
## Secure and Timely GPU Execution in Cyber-physical Systems.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#secure-and-timely-gpu-execution-in-cyber-physical-systems) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#secure-and-timely-gpu-execution-in-cyber-physical-systems)**
### 作者
* Jinwen Wang, Washington University in St. Louis, St. Louis, MO, USA
* Yujie Wang, Washington University in St. Louis, St. Louis, MO, USA
* Ning Zhang, Washington University in St. Louis, St. Louis, MO, USA
### 摘要
> 图形处理单元（GPU）越来越多地部署在复杂物理系统（CPS）上，经常用于执行实时的安全关键功能，例如自动驾驶车辆上的目标检测。因此，在CPS平台上，GPU任务的可用性非常重要。然而，现有的可信执行环境（TEE）解决方案只关注于CPU计算的可用性保证。为了填补这一空白，我们提出了AvaGPU，这是一个TEE，它能够在OS受损的情况下为涉及GPU执行的CPU任务提供实时可用性保证。我们面临三个技术挑战。首先，为了防止由于CPU和GPU任务分别进行调度而导致的恶意资源争用，我们提出了一个CPU-GPU协同调度框架，将CPU和GPU任务的优先级联系在一起。其次，我们提出了基于软件的安全抢占机制，以限制GPU上的优先级倒置程度。第三，我们提出了一种新的GPU驱动程序拆分设计，通过最小化可信计算基础（TCB），为CPS实现安全高效的GPU管理。我们在Jetson AGX Orin平台上实现了AvaGPU的原型。该系统在基准测试、合成任务和真实应用中进行评估，平均运行时间开销为15.87%。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623197](https://doi.org/10.1145/3576915.3623197)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623197](https://dl.acm.org/doi/pdf/10.1145/3576915.3623197)
## SalsaPicante: A Machine Learning Attack on LWE with Binary Secrets.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#salsapicante-a-machine-learning-attack-on-lwe-with-binary-secrets) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#salsapicante-a-machine-learning-attack-on-lwe-with-binary-secrets)**
### 作者
* Cathy Yuanchen Li, Meta AI, Seattle, WA, USA
* Jana Sotáková, Meta AI, Seattle, WA, USA
* Emily Wenger, The University of Chicago, Chicago, IL, USA
* Mohamed Malhou, Meta AI, Paris, France
* Evrard Garcelon, Meta AI, Paris, France
* François Charton, Meta AI, Paris, France
* Kristin Lauter, Meta AI, Seattle, WA, USA
### 摘要
> 学习误差（Learning with Errors，简称LWE）是许多后量子密码（Post-Quantum Cryptographic，简称PQC）系统的基础困难数学问题。美国国家标准与技术研究院（National Institute of Standards and Technology，简称NIST）[13]唯一标准化的PQC密钥交换机制（Key Exchange Mechanism，简称KEM）基于模块LWE [2]，而目前公开可用的PQ同态加密（Homomorphic Encryption，简称HE）库则基于环形LWE。LWE基于的PQ密码体制的安全性至关重要，但某些实施选择可能会削弱它们的安全性。其中之一选择是稀疏二进制秘密，出于效率原因，PQ HE方案中希望这样设置。先前的工作SALSA[51]在小维度（n ≤ = 128）和低汉明重量（h ≤ = 4）上展示了一个基于机器学习的攻击方法，攻击了具有稀疏二进制秘密的LWE。然而，该攻击假设能够访问数百万个窃听到的LWE样本，并且在较高的汉明重量或维度下失败。我们提出了PICANTE，一种增强的机器学习攻击，在更大的维度（最大可达n=350）和更大的汉明重量（大约为n/10，当n=350时可达h=60）上恢复秘密。我们通过一种新的预处理步骤实现了这一显著的改进，使得我们能够从线性数量的窃听到的LWE样本（4n）生成训练数据，并改变数据的分布以提高转换器的训练效果。我们还改进了SALSA的秘密恢复方法，并引入了一种新颖的交叉注意力恢复机制，使我们能够直接从训练模型中读取秘密。尽管PICANTE并不威胁NIST提出的LWE标准，但它在SALSA的基础上取得了显著的改进，并且可能进一步扩展，突出了对具有稀疏二进制秘密的LWE进行机器学习攻击的未来调查的必要性。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623076](https://doi.org/10.1145/3576915.3623076)
## DPMLBench: Holistic Evaluation of Differentially Private Machine Learning.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#dpmlbench-holistic-evaluation-of-differentially-private-machine-learning) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#dpmlbench-holistic-evaluation-of-differentially-private-machine-learning)**
### 作者
* Chengkun Wei, Zhejiang University, Hangzhou, China
* Minghu Zhao, Zhejiang University, Hangzhou, China
* Zhikun Zhang, Stanford University & CISPA Helmholtz Center for Information Security, Stanford, CA, USA
* Min Chen, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Wenlong Meng, Zhejiang University, Hangzhou, China
* Bo Liu, Dbappsecurity, Hangzhou, China
* Yuan Fan, Zhejiang University, Hangzhou, China
* Wenzhi Chen, Zhejiang University, Hangzhou, China
### 摘要
> 差分隐私（DP）是一个严格的数学定义，用于量化隐私泄露，已经成为隐私保护的广泛接受标准。结合强大的机器学习（ML）技术，差分隐私机器学习（DPML）变得越来越重要。作为最经典的DPML算法，DP-SGD会导致显著的效用损失，这阻碍了DPML在实践中的应用。最近的研究提出了改进的基于DP-SGD的算法以减小效用损失。然而，这些研究是孤立的，不能全面衡量算法改进的性能。更重要的是，缺乏对这些DPML算法改进在效用、防御能力和泛化性上进行全面比较的综合研究。我们通过对改进的DPML算法在图像分类任务中的效用和防御能力对成员推理攻击（MIAs）进行全面测量来填补这一空白。我们首先提出了一个分类法，用于确定改进在ML生命周期中的位置。基于我们的分类法，我们联合进行了对改进的DPML算法的广泛测量研究，涵盖了12种算法、4种模型架构、4个数据集、2种攻击和不同的隐私预算配置。我们还在评估中包括了最先进的标签差分隐私（Label DP）算法。根据我们的实证结果，DP可以有效地抵御MIAs，并且诸如逐样本梯度剪辑等敏感度约束技术在防御中起着重要作用。我们还探索了一些可以保持模型效用并更有效地抵御MIAs的改进方法。实验表明，Label DP算法损失的效用较少，但对MIAs很脆弱。机器学习从业者可以从这些评估中受益，以选择适当的算法。为了支持我们的评估，我们实现了一个模块化可重复使用的软件DPMLBench。我们在https://github.com/DmsKinson/DPMLBench开源了这个工具，它使敏感数据所有者能够部署DPML算法，并为研究人员和从业者提供了一个基准工具。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616593](https://doi.org/10.1145/3576915.3616593)
## Geometry of Sensitivity: Twice Sampling and Hybrid Clipping in Differential Privacy with Optimal Gaussian Noise and Application to Deep Learning.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#geometry-of-sensitivity-twice-sampling-and-hybrid-clipping-in-differential-privacy-with-optimal-gaussian-noise-and-application-to-deep-learning) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#geometry-of-sensitivity-twice-sampling-and-hybrid-clipping-in-differential-privacy-with-optimal-gaussian-noise-and-application-to-deep-learning)**
### 作者
* Hanshen Xiao, Massachusetts Institute of Technology, Cambridge , MA, USA
* Jun Wan, Massachusetts Institute of Technology, Cambridge , MA, USA
* Srinivas Devadas, Massachusetts Institute of Technology, Cambridge , MA, USA
### 摘要
> 我们研究了差分隐私(DP)中最优随机化构建的基本问题。根据剪辑策略或处理函数的其他属性，相应的灵敏度集理论上确定了必要的随机化，以产生所需的安全参数。为了寻求最优效用-隐私权衡，找到适当选择的灵敏度集的最小扰动是DP研究的一个核心问题。在实践中，l2 / l1范数剪辑与高斯/拉普拉斯噪声机制是最常见的设置之一。然而，它们也遭受着维数诅咒。对于更通用的剪辑策略，针对高维灵敏度集的最优噪声的理解仍然有限。这增加了在保护隐私的随机化中减轻最坏情况下的维度依赖性的挑战，特别是对于深度学习应用程序。在本文中，我们重新审视高维灵敏度集的几何形状，并提出了一系列结果来表征Rényi DP(RDP)的非渐近最优高斯噪声。我们的结果既是消极的，也是积极的：一方面，我们展示了维数诅咒对于满足某些对称性质的广泛灵敏度集类是紧密的；但如果幸运地，灵敏度集的表示在某些正交基组上是不对称的，我们展示了最优噪声边界不需要明确依赖于维数或秩。我们还重新审视了高维情况下的采样，这是隐私放大和大规模数据处理计算效率的关键。我们提出了一种新方法，称为两次采样，它实现了逐个样本采样和坐标采样，以使高斯噪声更好地适应灵敏度几何形状。通过封闭RDP分析，我们证明了两次采样产生了隐私扩大的渐近改进，并给出了额外的l∞-范数限制，特别是对于小采样率。我们还提供了我们结果在实际任务中的具体应用。通过更严格的隐私分析结合两次采样，我们在CIFAR10上低采样率高效训练ResNet22，并实现了(ε=2，δ=10-5)和（ε=8，δ=10-5）DP保证下的69.7％和81.6％的测试准确率。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623142](https://doi.org/10.1145/3576915.3623142)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623142](https://dl.acm.org/doi/pdf/10.1145/3576915.3623142)
## Blink: Link Local Differential Privacy in Graph Neural Networks via Bayesian Estimation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#blink-link-local-differential-privacy-in-graph-neural-networks-via-bayesian-estimation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#blink-link-local-differential-privacy-in-graph-neural-networks-via-bayesian-estimation)**
### 作者
* Xiaochen Zhu, National University of Singapore, Singapore, Singapore
* Vincent Y. F. Tan, National University of Singapore, Singapore, Singapore
* Xiaokui Xiao, National University of Singapore, Singapore, Singapore
### 摘要
> 图神经网络（Graph Neural Networks，GNNs）由于在各种图推理任务中学习节点嵌入的卓越能力而日益受到欢迎，但训练它们可能引起隐私问题。为了解决这个问题，我们提议在分布式节点上使用链路局部差分隐私（Link Local Differential Privacy，LDP），使得与不可信服务器合作进行GNNs的训练，而不暴露任何链接的存在。我们的方法将隐私预算分别用于图的链接和度数上，通过贝叶斯估计来更好地去噪图的拓扑结构，减轻LDP对训练后GNNs准确性的负面影响。我们将推断的链路概率的平均绝对误差限制在与真实图拓扑结构之间。然后，我们提出了两种互补的LDP机制变体，适用于不同隐私设置，其中一种在较低隐私预算下估计较少的链路，以避免在不确定性较高时产生错误的正链路估计；而另一种利用更多信息，在相对较高的隐私预算下表现更好。此外，我们还提出了一种混合变体，将两种策略结合起来，在不同隐私预算下能够表现更好。大量实验证明，我们的方法在不同隐私预算下的准确性方面优于现有方法。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623165](https://doi.org/10.1145/3576915.3623165)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623165](https://dl.acm.org/doi/pdf/10.1145/3576915.3623165)
## DP-Forward: Fine-tuning and Inference on Language Models with Differential Privacy in Forward Pass.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#dp-forward-fine-tuning-and-inference-on-language-models-with-differential-privacy-in-forward-pass) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#dp-forward-fine-tuning-and-inference-on-language-models-with-differential-privacy-in-forward-pass)**
### 作者
* Minxin Du, The Chinese University of Hong Kong, Shatin, Hong Kong
* Xiang Yue, The Ohio State University, Columbus, OH, USA
* Sherman S. M. Chow, The Chinese University of Hong Kong, Shatin, Hong Kong
* Tianhao Wang, University of Virginia, Charlottesville, VA, USA
* Chenyu Huang, Independent Researcher, Shen Zhen, China
* Huan Sun, The Ohio State University, Columbus, OH, USA
### 摘要
> 差分隐私随机梯度下降（DP-SGD）在反向传播过程中向梯度添加噪声，保护训练数据免于隐私泄露，尤其是会员推断。然而，它未能覆盖（推断时的）威胁，如嵌入反演和敏感属性推断。当用于精调大型预训练语言模型（LMs）时，在存储和计算方面也代价高昂。我们提出了DP-Forward，它直接在LM前向传递中扰动嵌入矩阵。它满足严格的局部差分隐私要求，适用于训练和推断数据。为了使用最小的矩阵值噪声来具体实现它，我们设计了一种解析矩阵高斯机制（aMGM），从一个矩阵高斯分布中绘制可能非独立同分布的噪声。然后，我们调查了使用aMGM噪声扰动不同隐藏（子）层的LM输出。它在三个典型任务上的效用几乎接近非私密基线，并在适度的隐私水平上比DP-SGD表现更好，提升了7.7个百分点。与最新的高速库相比，它节省了3倍的时间和内存成本。同时，它减少了嵌入反演和敏感属性推断的平均成功率，分别降低了88个百分点和41个百分点，而DP-SGD则失败了。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616592](https://doi.org/10.1145/3576915.3616592)
## Whole-Program Control-Flow Path Attestation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#whole-program-control-flow-path-attestation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#whole-program-control-flow-path-attestation)**
### 作者
* Nikita Yadav, Indian Institute of Science, Bangalore, India
* Vinod Ganapathy, Indian Institute of Science, Bangalore, India
### 摘要
> 路径认证是一种远程验证程序℘执行的方法。在路径认证中，执行℘的证明平台通过记录℘在执行特定输入时所经过的路径来让远程验证器V确保℘的完整性。尽管已经开发了一些用于路径认证的先前技术，但它们通常只用于记录℘执行的部分路径。在本文中，我们考虑了整个程序控制流路径认证的问题，即认证℘中执行的整个程序路径。我们发现先前的路径认证方法使用次优技术，根本无法扩展到整个程序路径，并且对℘的执行施加了很大的运行时开销。然后，我们开发了Blast，采用了许多新颖方法来减少这些开销，受到了程序剖析文献中的先前工作的启发。我们的实验表明，Blast使路径认证在各种嵌入式程序中更加实用。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616687](https://doi.org/10.1145/3576915.3616687)
## Improving Security Tasks Using Compiler Provenance Information Recovered At the Binary-Level.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#improving-security-tasks-using-compiler-provenance-information-recovered-at-the-binary-level) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#improving-security-tasks-using-compiler-provenance-information-recovered-at-the-binary-level)**
### 作者
* Yufei Du, Georgia Institute of Technology, Atlanta, GA, USA
* Omar Alrawi, Georgia Institute of Technology, Atlanta, GA, USA
* Kevin Snow, Zeropoint Dynamics, Chapel Hill, NC, USA
* Manos Antonakakis, Georgia Institute of Technology, Atlanta, GA, USA
* Fabian Monrose, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 现代编译器支持的复杂优化技术允许在许多层次上恢复编译源头。例如，可以确定构建二进制文件时使用的编译器系列和优化级别，以及应用于二进制文件中的函数的各个编译器通行证。然而，编译源头的许多下游应用尚未被探索。为了弥补这一差距，我们使用从LLVM 14收集的数据对多标签编译源头模型进行训练和评估，并将该模型应用于一些与安全相关的任务。我们的方法考虑了68个不同的编译器通行证，并达到了平均F-1分数84.4%。我们首先使用该模型来检查编译引起的漏洞的严重程度，在10个常见项目中识别出了53个信息泄露漏洞。我们还表明，几个编译器优化过程引入了大量负面影响安全性的功能代码重用工具。除了漏洞检测，我们还评估了其他安全应用，包括使用恢复的源头信息来验证Windows二进制文件中Rich header数据的正确性（例如，取证分析），以及用于二进制分解任务（例如，第三方库检测）。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623098](https://doi.org/10.1145/3576915.3623098)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623098](https://dl.acm.org/doi/pdf/10.1145/3576915.3623098)
## SymGX: Detecting Cross-boundary Pointer Vulnerabilities of SGX Applications via Static Symbolic Execution.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#symgx-detecting-cross-boundary-pointer-vulnerabilities-of-sgx-applications-via-static-symbolic-execution) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#symgx-detecting-cross-boundary-pointer-vulnerabilities-of-sgx-applications-via-static-symbolic-execution)**
### 作者
* Yuanpeng Wang, Peking University, Beijing, China
* Ziqi Zhang, Peking University, Beijing, China
* Ningyu He, Peking University, Beijing, China
* Zhineng Zhong, Peking University, Beijing, China
* Shengjian Guo, Independent Researcher, Sunnyvale, CA, USA
* Qinkun Bao, Independent Researcher, Sunnyvale, CA, USA
* Ding Li, Peking University, Beijing, China
* Yao Guo, Peking University, Beijing, China
* Xiangqun Chen, Peking University, Beijing, China
### 摘要
> 英特尔安全防护扩展(SGX)已经在关键数据保护方面展示出有效性。最近的基于符号执行的技术揭示SGX应用程序容易受到内存损坏漏洞的攻击。虽然现有的方法着重于SGX应用程序ECalls中常规内存损坏，但它们忽略了一种重要的SGX专用漏洞类型：跨边界指针漏洞。这种漏洞对于SGX应用程序来说至关重要，因为它们大量使用指针在安全隔离区域和不可信环境之间交换数据。不幸的是，由于缺乏适当处理SGX应用程序的三个独特特征的SGX特定分析模型，即多入口任意顺序执行、有状态执行和上下文感知指针，现有的符号执行方法都不能有效检测跨边界指针漏洞。为解决这些问题，我们提出了一种名为全局状态转换图与上下文感知指针(GSTG-CAP)的新分析模型，它模拟了SGX应用程序的属性保持执行行为并驱动符号执行以进行漏洞检测。基于GSTG-CAP，我们构建了一种新颖的基于符号执行的漏洞检测器SYMGX，用于检测跨边界指针漏洞。根据我们的评估，SYMGX可以在14个开源项目中找到30个零日漏洞，其中有三个被开发者确认。SYMGX在有效性、效率和准确性方面也优于两个最先进的工具，COIN和

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623213](https://doi.org/10.1145/3576915.3623213)
## TypeSqueezer: When Static Recovery of Function Signatures for Binary Executables Meets Dynamic Analysis.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#typesqueezer-when-static-recovery-of-function-signatures-for-binary-executables-meets-dynamic-analysis) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#typesqueezer-when-static-recovery-of-function-signatures-for-binary-executables-meets-dynamic-analysis)**
### 作者
* Ziyi Lin, Xidian University, Xi'an, China
* Jinku Li, Xidian University, Xi'an, China
* Bowen Li, Xidian University, Xi'an, China
* Haoyu Ma, Zhejiang Lab, Hangzhou, China
* Debin Gao, Singapore Management University, Singapore, Singapore
* Jianfeng Ma, Xidian University, Xi'an, China
### 摘要
> 控制流完整性（CFI）被认为是阻止高级代码重用攻击的一种有前景的解决方案。虽然在CFI中的后向边保护问题几乎解决了，但前向边保护仍然是一个重大挑战。保护前向边的关键是解决间接调用目标，尽管可以使用基于类型的解决方案对程序源代码进行准确地解决，但在二进制级别进行时会面临困难。由于COTS二进制文件中实际的类型信息不可用，基于类型的间接调用目标匹配通常借助于使用间接调用点和调用目标的参数数量和参数宽度推断出来的近似函数签名。因此，通过静态分析这样做迫使现有解决方案过于宽容地假设参数数量/宽度边界以抵御复杂的攻击。在本文中，我们提出了一种新颖的混合方法，用于在二进制级别恢复精细的函数签名，称为TypeSqueezer。通过动态观察程序行为，TypeSqueezer将间接调用点和调用目标的静态分析结果结合在一起，以便根据类似于挤压定理的哲学计算出它们的参数数量/宽度的上下界。此外，动态分析的引入还使TypeSqueezer能够近似表示函数参数的实际类型，而不仅仅使用它们的宽度表示。这些结合使TypeSqueezer能够显着改进间接调用目标解析的能力，并生成更准确的近似控制流图。我们在SPEC CPU2006基准测试以及几个实际应用程序上对TypeSqueezer进行了评估。实验结果表明，与现有的二进制级别基于类型的解决方案相比，TypeSqueezer实现了更高的类型匹配精度。此外，我们还讨论了静态分析的内在局限性，并展示了它不能足够地阻止某些类型的实际攻击；而另一方面，我们的方法的混合分析结果可以成功地阻止相同的攻击。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623214](https://doi.org/10.1145/3576915.3623214)
## "Make Them Change it Every Week!": A Qualitative Exploration of Online Developer Advice on Usable and Secure Authentication.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#make-them-change-it-every-week-a-qualitative-exploration-of-online-developer-advice-on-usable-and-secure-authentication) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#make-them-change-it-every-week-a-qualitative-exploration-of-online-developer-advice-on-usable-and-secure-authentication)**
### 作者
* Jan H. Klemmer, Leibniz University Hannover, Hannover, Germany
* Marco Gutfleisch, Ruhr University Bochum, Bochum, Germany
* Christian Stransky, CISPA Helmholtz Center for Information Security, Hannover, Germany
* Yasemin Acar, Paderborn University, Paderborn, Germany
* M. Angela Sasse, Ruhr University Bochum, Bochum, Germany
* Sascha Fahl, CISPA Helmholtz Center for Information Security, Hannover, Germany
### 摘要
> 可用且安全的网络身份验证及其扩展在使命至关重要。尽管基于密码的身份验证仍然广泛使用，但用户在应对数百个在线账户及其密码时遇到困难。多因素身份验证等替代或扩展方法存在各自的挑战，并且仅有限地被采用。在安全和可用性之间找到正确平衡对开发人员来说具有挑战性。先前的研究发现，开发人员在编写代码时使用在线资源来获取安全决策方面的信息。与其他领域类似，有很多关于身份验证的开发人员建议可以在网上找到，包括博客文章、Stack Overflow上的讨论、研究论文或者像OWASP或NIST这样的机构的指南。我们是第一个探索对影响最终用户可用安全性的身份验证的开发人员建议的研究者。基于对18名专业Web开发人员的调查，我们获取了406份文件，并对其中272份建议进行了深入的定性分析。我们的目标是了解在线建议的可访问性和质量，并为在线建议如何对（不）安全和（不）可用的身份验证做出贡献提供洞察。我们发现建议零散，并且对于开发人员来说，找到可推荐的一致建议是一项挑战，等等。最常见的建议是针对基于密码的身份验证，但很少涉及更现代的替代方法。不幸的是，许多建议是有争议的（例如，复杂密码策略），过时的（例如，强制定期更改密码）或者相互矛盾的，并可能导致不可用或不安全的身份验证。基于我们的发现，我们为开发人员、建议提供者、官方机构和学术界提供了如何改进开发人员在线建议的建议。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623072](https://doi.org/10.1145/3576915.3623072)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623072](https://dl.acm.org/doi/pdf/10.1145/3576915.3623072)
## Sharing Communities: The Good, the Bad, and the Ugly.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#sharing-communities-the-good-the-bad-and-the-ugly) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#sharing-communities-the-good-the-bad-and-the-ugly)**
### 作者
* Thomas Geras, HM Munich University of Applied Sciences, Munich, Germany
* Thomas Schreck, HM Munich University of Applied Sciences, Munich, Germany
### 摘要
> 共享社区存在许多谜团，主要是因为其隐藏的运作方式和加入的复杂性。然而，这些社区在安全生态系统中至关重要，因此有必要对其进行更深入的理解。此外，它们面临建立信任、有效沟通和解决社会问题等挑战。本研究旨在更好地了解共享社区的工作方法、组织结构、目标、好处和挑战，以帮助提高其效果和效率。为了实现这一目标，我们与来自世界各国参与不同类型共享社区的25位专家进行了视频访谈。此外，我们还在分析过程中应用了社会技术系统（STS）理论，以详细阐述我们从访谈中得出的发现，找出它们之间的相关性，并探索社交和技术元素在共享社区中的相互关系。我们的研究结果强调了需要对共享社区的工作方式进行整体观察。与孤立地看待各个方面不同，考虑不同元素之间的相互关系，特别是社交方面的关系，是至关重要的。这种整体视角使我们能够更好地理解共享社区的复杂性和动态性，以及它们如何能够有效高效地运作。本研究的发现为共享社区的进一步发展提供了有价值的动力，并可作为未来研究的基础。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623144](https://doi.org/10.1145/3576915.3623144)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623144](https://dl.acm.org/doi/pdf/10.1145/3576915.3623144)
## Alert Alchemy: SOC Workflows and Decisions in the Management of NIDS Rules.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#alert-alchemy-soc-workflows-and-decisions-in-the-management-of-nids-rules) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#alert-alchemy-soc-workflows-and-decisions-in-the-management-of-nids-rules)**
### 作者
* Mathew Vermeer, Delft University of Technology, Delft, Netherlands
* Natalia Kadenko, Delft University of Technology, Delft, Netherlands
* Michel van Eeten, Delft University of Technology, Delft, Netherlands
* Carlos Gañán, Delft University of Technology, Delft, Netherlands
* Simon Parkin, Delft University of Technology, Delft, Netherlands
### 摘要
> 基于签名的网络入侵检测系统（NIDS）和网络入侵防御系统（NIPS）连同启用其检测威胁的规则，仍然是网络防御的核心。这些规则使安全运营中心（SOC）能够有效保护网络，然而我们几乎对于规则从组织角度是如何创建、评估和管理一无所知。在这项研究中，我们分析了网络入侵检测规则的创建、管理和获取过程。为了理解这些过程，我们对17名在托管安全服务提供商（MSSPs）工作或提供网络监控服务或自行进行网络监控的其他组织中工作的专业人士进行了访谈。我们发现了许多关键因素，例如规则的特定性、警报和误报总数，这些因素指导SOC在规则管理过程中的决策。这些网络监控过程的更低层面因素通常被视为无法改变的，之前的研究主要集中在设计能够动态减少SOC分析员需要筛选的噪声警报数量的系统上。相反，我们提出了几项建议，以改善警报质量，允许SOC更好地优化工作流程和利用可用资源。这些建议包括增加规则的特定性，明确定义从检测到规则开发的反馈循环，建立组织过程以改善默默知识的传递。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616581](https://doi.org/10.1145/3576915.3616581)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616581](https://dl.acm.org/doi/pdf/10.1145/3576915.3616581)
## Do Users Write More Insecure Code with AI Assistants?
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#do-users-write-more-insecure-code-with-ai-assistants) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#do-users-write-more-insecure-code-with-ai-assistants)**
### 作者
* Neil Perry, Stanford University, Stanford, CA, USA
* Megha Srivastava, Stanford University, Stanford, CA, USA
* Deepak Kumar, Stanford University & UC San Diego, Stanford & La Jolla, CA, USA
* Dan Boneh, Stanford University, Stanford, CA, USA
### 摘要
> AI代码助手已经成为强大的工具，可以在软件开发生命周期中提供帮助，并提高开发者的生产力。不幸的是，在实验环境中发现这些助手也会生成不安全的代码，这对于它们在实际使用中引起了极大的关注。在本文中，我们进行了一项用户研究，以探讨用户如何与AI代码助手互动来解决各种安全相关任务。总的来说，我们发现与没有助手访问权限的参与者相比，那些能够获得AI助手的参与者编写的安全代码显著较少。有AI助手访问权限的参与者也更容易相信他们编写的代码是安全的，这表明这样的工具可能会导致用户对其代码中的安全漏洞过于自信。为了更好地指导未来基于人工智能的代码助手的设计，我们向希望构建在我们工作基础上的研究人员公开了我们的用户研究装置。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623157](https://doi.org/10.1145/3576915.3623157)
## HODOR: Shrinking Attack Surface on Node.js via System Call Limitation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#hodor-shrinking-attack-surface-on-node-js-via-system-call-limitation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#hodor-shrinking-attack-surface-on-node-js-via-system-call-limitation)**
### 作者
* Wenya Wang, Shanghai Jiao Tong University, Hangzhou, China
* Xingwei Lin, Ant Group, Hangzhou, China
* Jingyi Wang, Zhejiang University & ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Wang Gao, Shanghai Jiao Tong University, Shanghai, China
* Dawu Gu, Shanghai Jiao Tong University, Shanghai, China
* Wei Lv, Ant Group, Hangzhou, China
* Jiashui Wang, Zhejiang University & Ant Group, Hangzhou, China
### 摘要
> Node.js 应用程序在服务器端越来越广泛地被采用，部分原因是便利地在流行的 Node.js 引擎提供的运行时以及由 Node 包管理（npm）注册表提供的大量第三方软件包的基础上构建这些应用程序。Node.js 提供了系统调用的系统交互功能。然而，这种便利是有代价的，即 JavaScript 任意代码执行 (ACE) 漏洞的攻击面扩大到了系统调用级别。现存的 JavaScript 代码级别的保护技术（通过代码精简或读写执行权限限制）与针对新兴的关键系统调用级别利用的有针对性的防御之间存在显著的差距。为了填补这一差距，我们设计并实现了 HODOR，这是一个基于执行 Node.js 应用程序时执行精确的系统调用限制的轻量级运行时保护系统。HODOR 解决了几个非常棘手的技术挑战。首先，HODOR 需要为 Node.js 应用程序(JavaScript)及其底层 Node.js 框架（JavaScript 和 C/C++）构建高质量的调用图。具体地，HODOR 在 JavaScript 和 C/C++ 层面上加入了一些重要的优化，以改进建立更为精确调用图的最先进工具。然后，HODOR 基于调用图映射分别创建了主线程白名单和线程池白名单，其中包含了识别出的必要系统调用。最后，借助白名单，HODOR 利用 Linux 内核的 Secure Computing Mode (seccomp) 实现了轻量级的系统调用限制，用以缩小攻击面。我们利用 HODOR 来保护了 168 个受任意代码/命令执行攻击威胁的实际 Node.js 应用程序。HODOR 能够将攻击面平均降低到 19.42%，而运行时开销可忽略不计（即 <3%）。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616609](https://doi.org/10.1145/3576915.3616609)
## ADEM: An Authentic Digital EMblem.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#adem-an-authentic-digital-emblem) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#adem-an-authentic-digital-emblem)**
### 作者
* Felix Linker, ETH Zurich, Zurich, Switzerland
* David Basin, ETH Zurich, Zurich, Switzerland
### 摘要
> 在武装冲突时期，红十字会、红新月会和红水晶的标志被用来标记实体基础设施，以便军事单位能够识别其作为受国际人道法保护的资产，以避免对其进行攻击。在本文中，我们解决了一个新颖的安全问题，即如何通过数字标志将这种保护扩展到数字网络连接基础设施。数字标志具有一系列独特的安全要求，包括身份验证、问责和我们称之为隐蔽检查的属性。隐蔽检查表明，希望将资产认证为受保护的人必须能够这样做，而无需透露他们可能攻击未受保护实体的事实。在本文中，我们（i）定义数字标志的要求，强调安全要求；（ii）提出 ADEM，一种分散式设计，实现了类似于红十字会、新月会和水晶的物理标志的数字标志；（iii）提供了全面的威胁模型和分析，证明了 ADEM 在面对主动网络对手时具有强大的安全保证。除了我们的安全分析外，ADEM 还参与了红十字国际委员会邀请的一系列领域专家会议的评估。我们报告了我们收到的反馈，该反馈支持我们的论点，即 ADEM 不仅在理论上有趣，而且在实践中对限制网络空间受保护方的攻击是相关的。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616578](https://doi.org/10.1145/3576915.3616578)
## Is Modeling Access Control Worth It?
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#is-modeling-access-control-worth-it) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#is-modeling-access-control-worth-it)**
### 作者
* David Basin, ETH Zürich, Zurich, Switzerland
* Juan Guarnizo, ETH Zürich, Zurich, Switzerland
* Srđan Krstic, ETH Zürich, Zurich, Switzerland
* Hoang Nguyen, ETH Zürich, Zurich, Switzerland
* Martín Ochoa, Zurich University of Applied Sciences, Zurich, Switzerland
### 摘要
> 实施访问控制策略是一个容易出错的任务，可能对软件应用的安全产生严重后果。文献中已经提出了基于模型的方法，并开发了相关工具，旨在降低此任务的复杂性，并帮助开发人员有效地生成安全软件。然而，缺乏实证数据支持模型驱动安全方法相对于以代码为中心的方法的优势，后者是软件开发的事实上的行业标准。在这项工作中，我们比较了在安全工程研究生课程的背景下，通过多个开发组实施相同功能和安全需求的结果。我们从中获取有关文献中基于工具的模型驱动安全方法与在众所周知的现代Web开发框架中的直接实现之间的安全性和效率的证据。例如，采用模型驱动开发的项目平均通过了多达50％的更多安全测试，而开发工作量较少。此外，我们观察到模型比手动实现简洁两倍，这提高了系统的可维护性。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623196](https://doi.org/10.1145/3576915.3623196)
## Fine-Grained Data-Centric Content Protection Policy for Web Applications.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#fine-grained-data-centric-content-protection-policy-for-web-applications) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#fine-grained-data-centric-content-protection-policy-for-web-applications)**
### 作者
* Zilun Wang, The Chinese University of Hong Kong, Hong Kong SAR, China
* Wei Meng, The Chinese University of Hong Kong, Hong Kong SAR, China
* Michael R. Lyu, The Chinese University of Hong Kong, Hong Kong SAR, China
### 摘要
> 现代网络应用中的大量敏感数据已成为网络攻击的主要目标。现有的浏览器安全策略虽然禁止执行未知脚本，但未限制'可信任'第三方脚本对敏感网络内容的访问。因此，过度权限的第三方脚本可能危及应用程序中敏感用户数据的机密性和完整性。本文提出了内容保护策略（CPP），这是一种新的网络安全机制，为敏感客户端用户数据提供细粒度的机密性和完整性保护。它采用以数据为中心的设计方法，实现了对象级别的保护而非页面级别的保护。一个策略规定了每个脚本在各个敏感元素上的访问权限。默认情况下拒绝任何未经授权的访问，以在浏览器中实现最小特权模式。我们实现了一个原型系统- DOMinator 来在浏览器中实施内容保护策略，并开发了一个名为"policy generator"的扩展，来帮助Web开发人员编写基本策略规则。我们通过对常见网站进行彻底评估，证明它可以有效地保护敏感的网络内容，且性能开销低、易用性强。CPP为现有的安全机制提供了补充，并为Web开发人员提供了一种更灵活的方式来保护敏感数据，进一步降低内容注入攻击的影响并显著提高Web应用程序的安全性。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623217](https://doi.org/10.1145/3576915.3623217)
## On the Security of Rate-limited Privacy Pass.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#on-the-security-of-rate-limited-privacy-pass) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#on-the-security-of-rate-limited-privacy-pass)**
### 作者
* Hien Chu, Friedrich Alexander Universität Erlangen-Nürnberg, Erlangen, Germany
* Khue Do, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 隐私通行证协议允许用户使用匿名发行的加密令牌来替代繁琐的验证码。发行机构验证用户的可信度，用户可以在浏览网页时使用该通行证，可以选择匿名或虚拟私人网络。Hendrickson等人提出了一种IETF草案（privacypass-rate-limit-tokens-00），用于隐私通行证协议的限制速率版本，也称为限制速率隐私通行证（RlP）。引入一个名为中介的新参与者使得两个版本本质上不同。中介应用访问策略以限制用户对服务的访问，同时对用户尝试访问的网站/源头应保持无知。在本文中，我们正式定义了限制速率隐私通行证协议，并提出了一种基于博弈的安全模型，以捕捉Hendrickson等人引入的非正式安全概念。我们展示了一种由简单构件构成的方案，满足我们的安全定义，甚至允许后量子安全的实例化。有趣的是，IETF草案中提出的实例化是我们构建的特例。因此，我们可以重复使用通用构建的安全论证，证明实际使用的版本是安全的。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616619](https://doi.org/10.1145/3576915.3616619)
## Passive SSH Key Compromise via Lattices.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#passive-ssh-key-compromise-via-lattices) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#passive-ssh-key-compromise-via-lattices)**
### 作者
* Keegan Ryan, University of California, San Diego, La Jolla, CA, USA
* Kaiwen He, University of California, San Diego & Massachusetts Institute of Technology, La Jolla, CA, USA
* George Arnold Sullivan, University of California, San Diego, La Jolla, CA, USA
* Nadia Heninger, University of California, San Diego, La Jolla, CA, USA
### 摘要
> 我们展示了一个被动网络攻击者如何在SSH服务器在签名计算过程中遇到自然故障时机会性地获取私有的RSA主机密钥。在以往的研究中，人们认为这在SSH协议中是不可能的，因为签名包含一些只有主动网络观察者能够获得的信息，比如共享的Diffie-Hellman密钥。我们表明，在SSH常用的签名参数下，存在一种高效的格攻击方法来恢复私有密钥，前提是存在签名错误。我们对SSH、IKEv1和IKEv2协议在这种场景下进行了安全分析，并使用我们的攻击方法发现了数百个受到独立易受攻击实现影响的私钥泄漏情况。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616629](https://doi.org/10.1145/3576915.3616629)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616629](https://dl.acm.org/doi/pdf/10.1145/3576915.3616629)
## Stealth Key Exchange and Confined Access to the Record Protocol Data in TLS 1.3.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#stealth-key-exchange-and-confined-access-to-the-record-protocol-data-in-tls-1-3) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#stealth-key-exchange-and-confined-access-to-the-record-protocol-data-in-tls-1-3)**
### 作者
* Marc Fischlin, Technische Universität Darmstadt, Darmstadt, Germany
### 摘要
> 我们展示了如何在常规TLS 1.3执行中嵌入一个隐蔽密钥交换子协议，生成一个额外的隐蔽密钥和常规会话密钥。这个想法在文献中已经出现过，即利用交换的一次性密码来传输另一个密钥值。我们的贡献是给出了一个严格的模型和对此类嵌入式密钥交换安全性的分析，要求即使在常规密钥处于敌对控制之下的情况下，隐蔽密钥仍然保持安全。特别是对于我们的TLS 1.3隐蔽版本协议，我们证明了在该设置下，使用这个额外密钥是安全的，并且基于TLS协议的常见假设。作为隐蔽密钥交换的一个应用，我们讨论了可以部分访问和修改通道协议中有效载荷数据的可消毒通道协议。这可能是一个入侵检测系统，用于监控输入流量是否包含恶意内容，并将可疑部分进行隔离。继承自隐蔽密钥交换的显著特点是，发送方和接收方可以使用额外密钥在可消毒通道中进行安全而隐蔽的通信，例如，通过对机密部分进行预加密，只将专用部分提供给消毒程序。我们讨论了如何使用GCM或ChaChaPoly等经过身份验证的加密方案来实现这样的可消毒通道。结合我们的隐蔽密钥交换协议，我们得到了一个完整的可消毒连接协议，包括密钥建立，完美地符合网络级别上的常规TLS 1.3流量。我们还评估了该方法在入侵检测系统Snort中的潜在有效性。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623099](https://doi.org/10.1145/3576915.3623099)
## ELEKTRA: Efficient Lightweight multi-dEvice Key TRAnsparency.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#elektra-efficient-lightweight-multi-device-key-transparency) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#elektra-efficient-lightweight-multi-device-key-transparency)**
### 作者
* Julia Len, Cornell Tech, New York, NY, USA
* Melissa Chase, Microsoft Research, Redmond, WA, USA
* Esha Ghosh, Microsoft Research, Redmond, WA, USA
* Daniel Jost, New York University, New York, NY, USA
* Balachandar Kesavan, Zoom Video Communications, New York, NY, USA
* Antonio Marcedone, Zoom Video Communications, New York, NY, USA
### 摘要
> 密钥透明（KT）系统使端到端加密通信（E2EE）平台的服务提供商能够维护可验证密钥目录（VKD），将每个用户的标识符（如用户名或电子邮件地址）映射到其身份公钥。用户定期监测目录，确保自己的标识符映射到正确的密钥，从而检测任何试图在他们的通信中冒充注册伪造密钥的中间人攻击。我们引入并形式化了一种新的原语，称为多设备可验证密钥目录（MVKD），通过利用多设备设置来增强VKD的安全性、隐私性和可用性保证。我们形式化了对于MVKD的三个属性（完备性、基于提取的合理性和隐私性），在强保证和真正实用系统施加的限制之间取得了非平凡的平衡。然后，我们提出了一种名为ELEKTRA的新型MVKD系统。该系统结合了Keybase KT系统的核心（自2014年以来在生产中运行）、SEEMless（Chase等，2019）和RZKS（Chen等，2022）的思想。我们的构建是首个实现上述多设备保证并具有形式化安全性和隐私证明的系统。最后，我们实现了ELEKTRA并展示了它的实用性。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623161](https://doi.org/10.1145/3576915.3623161)
## HE3DB: An Efficient and Elastic Encrypted Database Via Arithmetic-And-Logic Fully Homomorphic Encryption.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#he3db-an-efficient-and-elastic-encrypted-database-via-arithmetic-and-logic-fully-homomorphic-encryption) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#he3db-an-efficient-and-elastic-encrypted-database-via-arithmetic-and-logic-fully-homomorphic-encryption)**
### 作者
* Song Bian, Beihang University, Beijing, China
* Zhou Zhang, Beihang University, Beijing, China
* Haowen Pan, Beihang University, Beijing, China
* Ran Mao, Beihang University, Beijing, China
* Zian Zhao, Beihang University, Beijing, China
* Yier Jin, University of Science and Technology of China, Hefei, China
* Zhenyu Guan, Beihang University, Beijing, China
### 摘要
> 随着对数据隐私的担忧日益加剧，基于完全同态加密（FHE）的加密数据库管理系统（DBMS）引起了越来越多的研究关注。FHE允许将DBMS直接外包给云服务器，而不泄露任何明文数据。然而，基于FHE的DBMS在实际部署中面临两个主要挑战：高计算延迟和缺乏弹性查询处理能力，这两个挑战都源于底层FHE运算符的固有限制。在这里，我们介绍了HE3DB，这是一个基于全同态加密、高效和弹性的DBMS框架，基于新的FHE基础设施。通过提出和整合新的算术和逻辑同态运算符，我们设计了快速和高精度的同态比较和聚合算法，使得各种SQL查询可以应用于FHE密文，例如复合过滤-聚合、排序、分组和连接。此外，与现有的仅支持聚合信息检索的加密DBMS相比，我们的框架允许对查询的FHE密文进行进一步的服务器端弹性分析处理，例如私有决策树评估。在实验中，我们对HE3DB的效率和灵活性进行了严格研究。我们表明，与最先进的技术相比，HE3DB可以以41倍至299倍的速度对同态性地评估端到端SQL查询，完成对一个16位10K行数据库的TPC-H查询仅需241秒。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616608](https://doi.org/10.1145/3576915.3616608)
## Level Up: Private Non-Interactive Decision Tree Evaluation using Levelled Homomorphic Encryption.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#level-up-private-non-interactive-decision-tree-evaluation-using-levelled-homomorphic-encryption) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#level-up-private-non-interactive-decision-tree-evaluation-using-levelled-homomorphic-encryption)**
### 作者
* Rasoul Akhavan Mahdavi, University of Waterloo, Waterloo, ON, Canada
* Haoyan Ni, University of Waterloo, Waterloo, ON, Canada
* Dimitry Linkov, University of Waterloo, Waterloo, ON, Canada
* Florian Kerschbaum, University of Waterloo, Waterloo, ON, Canada
### 摘要
> 随着机器学习作为服务的日益普及，人们对于隐私和知识产权的担忧也随之产生。用户们通常会犹豫是否应公开他们的私人信息以获得服务，而服务提供商则希望保护他们的专有模型。决策树是一种被广泛使用的机器学习模型，因其简单性、易解释性和易于训练的特点受到青睐。在这种背景下，私有决策树评估（Private Decision Tree Evaluation, PDTE）使持有私有决策树的服务器能够根据客户的私有属性提供预测。该协议的特点在于，服务器无法了解到有关客户私有属性的任何信息。同样，除了预测结果和部分超参数外，客户也无法了解到有关服务器模型的任何信息。在本文中，我们提出了两种基于两种新的非交互式比较协议XXCMP和RCC的创新非交互式PDTE协议，即XXCMP-PDTE和RCC-PDTE。我们对这些比较运算符的评估显示，我们提出的构造可以有效地评估高精度数字。具体来说，RCC可以在不到10毫秒的时间内比较32位数。我们对在UCI数据集上训练的决策树进行了我们所提出的PDTE协议评估，并将我们的结果与领域内现有的工作进行了比较。除此之外，我们还评估了合成决策树，以展示其可扩展性，结果显示，RCC-PDTE可以在不到2秒的时间内评估一个拥有超过1000个节点和16位精度的决策树。相比之下，目前最先进的技术对于仅有11位精度的这样一棵树的评估，需要超过10秒的时间

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623095](https://doi.org/10.1145/3576915.3623095)
## Fast Unbalanced Private Set Union from Fully Homomorphic Encryption.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#fast-unbalanced-private-set-union-from-fully-homomorphic-encryption) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#fast-unbalanced-private-set-union-from-fully-homomorphic-encryption)**
### 作者
* Binbin Tu, Shandong University, Qingdao, China
* Yu Chen, Shandong University, Qingdao, China
* Qi Liu, Shandong University, Qingdao, China
* Cong Zhang, IIE, CAS, Beijing, China
### 摘要
> 私有集合并（PSU）允许两个参与方计算它们的集合并，而不泄露其他任何信息。它已被广泛应用于各种应用中。尽管已经开发了几种在平衡情况下具有计算效率的PSU协议，但它们在通信复杂度方面存在潜在限制，该复杂度随较大集合的大小呈（超）线性增长。当在非平衡环境中执行PSU时出现挑战，其中一方是持有小集合的受限设备，另一方是持有大集合的服务提供者。在这项工作中，我们提出了一个从层次完全同态加密和新引入的协议称为排列矩阵私有等值测试构建的非平衡PSU的通用构造。通过实例化通用构造，我们获得了两个非平衡PSU协议，其通信复杂度与较小集合的大小呈线性关系，并且与较大集合呈对数关系。我们实现了我们的协议。实验表明，我们的协议在非平衡环境中优于所有之前的协议。两个集合大小之间差异越大，我们的协议表现得越好。对于具有128位长度项目的大小为210和220的输入集合，我们的PSU只需要2.767 MB的通信。与Zhang等人提出的最先进的PSU （USENIX Security 2023）相比，通信减少了37倍，并且在不同网络环境下运行时间加快大约10至35倍。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623064](https://doi.org/10.1145/3576915.3623064)
## Efficient Multiplicative-to-Additive Function from Joye-Libert Cryptosystem and Its Application to Threshold ECDSA.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#efficient-multiplicative-to-additive-function-from-joye-libert-cryptosystem-and-its-application-to-threshold-ecdsa) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#efficient-multiplicative-to-additive-function-from-joye-libert-cryptosystem-and-its-application-to-threshold-ecdsa)**
### 作者
* Haiyang Xue, The Hong Kong Polytechnic University, Hong Kong, China
* Man Ho Au, The Hong Kong Polytechnic University, Hong Kong, China
* Mengling Liu, The Hong Kong Polytechnic University, Hong Kong, China
* Kwan Yin Chan, The University of Hong Kong, Hong Kong, China
* Handong Cui, The University of Hong Kong, Hong Kong, China
* Xiang Xie, Shanghai Qizhi Institute, PADO Labs, Hong Kong, China
* Tsz Hon Yuen, The University of Hong Kong, Hong Kong, China
* Chengru Zhang, The University of Hong Kong, Hong Kong, China
### 摘要
> 最近，由于在区块链应用中的广泛采用，阈值ECDSA受到了关注。所有主要构造的共同基础是将乘法份额安全转换为加法份额，这被称为乘法到加法（MtA）函数。在所有现有的阈值ECDSA构造中，MtA占据了主导地位。具体来说，在n个活跃签名者的情况下，需要O(n2)次MtA调用。因此，改进MtA直接导致了所有最先进的阈值ECDSA方案的显著改进。在本文中，我们通过重新审视Joye-Libert（JL）密码系统，设计了一种新型的MtA。具体而言，我们重新审视了JL加密，并提出了一种基于JL的承诺，然后给出了JL密码系统的高效零知识证明，这些证明是具有标准可靠性的首次实现。我们的新型MtA在所有现有的MtA构造中，提供了最佳的时空复杂度平衡。它在带宽上比Paillier的最先进构造提高了1.85到2倍，在计算上提高了1.2到1.7倍。相比仅基于Castagnos-Laguillaumie加密的构造，它的速度快了7倍，但带宽消耗增加了2倍。虽然我们的MtA比基于OT的构造要慢，但带宽要求节省了18.7倍。此外，我们还设计了MtA的批处理版本，进一步减少了摊销时间和空间成本25%。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616595](https://doi.org/10.1145/3576915.3616595)
## Splice: Efficiently Removing a User's Data from In-memory Application State.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#splice-efficiently-removing-a-users-data-from-in-memory-application-state) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#splice-efficiently-removing-a-users-data-from-in-memory-application-state)**
### 作者
* Xueyuan Han, Wake Forest University, Winston-Salem, NC, USA
* James Mickens, Harvard University, Cambridge, MA, USA
* Siddhartha Sen, Microsoft Research, New York, NY, USA
### 摘要
> Splice是一个新的编程框架，它允许注重安全的应用程序高效地定位和删除用户的内存状态。核心技术挑战是确定如何在不破坏涉及剩余用户内存状态的特定应用程序语义不变量的情况下删除用户的内存值。Splice使用三种技术来解决这个问题：污点追踪（跟踪用户数据在内存中的流动方式），合成删除（在原地覆盖每个用户所拥有的内存值，用保留封闭数据结构符号约束的值进行替换），以及一种新颖的类型系统（强制应用程序采用防御性编程以避免以不安全的方式计算合成删除的值）。通过将四个逼真的应用程序移植到Splice，我们展示了Splice的类型系统和防御性编程要求对开发人员来说并不繁琐。我们还证明了Splice的运行时开销与先前的污点追踪系统相似，同时实现了强大的删除语义。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623070](https://doi.org/10.1145/3576915.3623070)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623070](https://dl.acm.org/doi/pdf/10.1145/3576915.3623070)
## Leakage-Abuse Attacks Against Forward and Backward Private Searchable Symmetric Encryption.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#leakage-abuse-attacks-against-forward-and-backward-private-searchable-symmetric-encryption) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#leakage-abuse-attacks-against-forward-and-backward-private-searchable-symmetric-encryption)**
### 作者
* Lei Xu, Nanjing University of Science and Technology & City Univeristy of Hong Kong, Nanjing & Hong Kong, China
* Leqian Zheng, City Univeristy of Hong Kong, Hong Kong, China
* Chengzhi Xu, Nanjing University of Science and Technology, Nanjing, China
* Xingliang Yuan, Monash University, Melbourne, Australia
* Cong Wang, City University of Hong Kong, Hong Kong, China
### 摘要
> 动态可搜索对称加密（DSSE）使服务器能够高效地在加密文件上搜索和更新。为了在更新过程中最大程度地减少信息泄露，新提出的DSSE方案期望具有前向和后向隐私的安全属性。这些方案通常被构建为在给定关键字的搜索和更新查询之间断开链接。然而，尚未深入探讨前向和后向私密DSSE是否能够抵抗实际的泄露滥用攻击（LAAs），其中攻击者试图从在查询期间被动收集的泄露中恢复查询关键字。在本文中，我们旨在通过两个非平凡的努力，首次坚定地回答这个问题。首先，我们重新审视过去几年中前向和后向私密DSSE方案的范围，并揭示了大多数方案中的一些固有的构造限制。这些限制允许攻击者利用查询相等性并在不同（刷新的）查询令牌之间建立一个与候选关键字有关的保证的链接。其次，我们通过将每个更新和查询与特定操作关联，进一步精细化了更新和查询的体积泄露配置文件。通过进一步利用更新体积和查询响应体积，我们证明所有的前向和后向私密DSSE方案都可以泄露与没有此类安全保证的相同的体积信息（例如，插入体积、删除体积）。为了验证我们的发现，我们实现了两种通用的LAAs，即频率匹配攻击和体积推断攻击，并在动态环境中的各种实验设置中对它们进行了评估。最后，我们呼吁开发新的高效方案，以保护搜索和更新查询之间的查询相等性和体积信息。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623085](https://doi.org/10.1145/3576915.3623085)
## Using Range-Revocable Pseudonyms to Provide Backward Unlinkability in the Edge.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#using-range-revocable-pseudonyms-to-provide-backward-unlinkability-in-the-edge) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#using-range-revocable-pseudonyms-to-provide-backward-unlinkability-in-the-edge)**
### 作者
* Cláudio Correia, INESC-ID, Instituto Superior Técnico, Universidade de Lisboa, Lisboa, Portugal
* Miguel Correia, INESC-ID, Instituto Superior Técnico, Universidade de Lisboa, Lisboa, Portugal
* Luís Rodrigues, INESC-ID, Instituto Superior Técnico, Universidade de Lisboa, Lisboa, Portugal
### 摘要
> 在本文中，我们提出了一种新的抽象概念，我们称之为可撤销范围伪名（RRPs）。RRPs是一种新型的伪名类别，其有效性可以在原始有效期内的任意时间范围内被撤销。RRPs的关键特点是，在撤销范围之外使用伪名时，撤销伪名所提供的信息无法与使用伪名时提供的信息进行关联。我们提供了一种算法，使用高效的密码学基元来实现RRPs，其中伪名的空间复杂度是恒定的，无论撤销范围的粒度如何，而撤销信息的空间复杂度仅以对数方式增长；这使得使用RRPs比使用许多短期伪名更加高效。我们使用RRPs设计了一个名为EDGAR的VANET场景访问控制系统，该系统提供了向后不可追踪性。对EDGAR的实验评估表明，使用RRPs时，可以高效地进行撤销（即使使用1秒为单位的时间槽），并且用户可以以低延迟（0.5-3.5毫秒）进行身份验证。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623111](https://doi.org/10.1145/3576915.3623111)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623111](https://dl.acm.org/doi/pdf/10.1145/3576915.3623111)
## Shufflecake: Plausible Deniability for Multiple Hidden Filesystems on Linux.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#shufflecake-plausible-deniability-for-multiple-hidden-filesystems-on-linux) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#shufflecake-plausible-deniability-for-multiple-hidden-filesystems-on-linux)**
### 作者
* Elia Anzuoni, Kudelski Security & École Polytechnique Fédérale de Lausanne, Cheseaux-Sur-Lausanne, Switzerland
* Tommaso Gagliardoni, Kudelski Security, Cheseaux-Sur-Lausanne, Switzerland
### 摘要
> 我们提出了Shufflecake，这是一种新的合理性否认设计，可以隐藏存储介质上加密数据的存在，使得对手很难证明这样的数据的存在。Shufflecake可以被认为是TrueCrypt和VeraCrypt等工具的"精神继承者"，但改进很大：它可以在Linux上原生工作，支持任意选择的文件系统，并且可以管理设备上的多个卷，从而使隐藏分区的否认真正可信。与基于ORAM的解决方案相比，Shufflecake非常快速且简单，但不能提供本地保护来对抗多快照对手。然而，我们讨论了由其架构可能实现的安全扩展，并展示了为什么这些扩展可能足以阻挠更强大的对手的证据。我们将Shufflecake实现为Linux中的内核工具，添加了有用的功能，并对其性能进行了基准测试，显示与基本加密系统相比仅有轻微的减速。我们相信Shufflecake对于那些受到压制当局或危险犯罪组织威胁的人士来说是一个有用的工具，特别是：吹哨人、调查记者和在压制性政权下捍卫人权的活动人士。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623126](https://doi.org/10.1145/3576915.3623126)
## Take Over the Whole Cluster: Attacking Kubernetes via Excessive Permissions of Third-party Applications.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#take-over-the-whole-cluster-attacking-kubernetes-via-excessive-permissions-of-third-party-applications) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#take-over-the-whole-cluster-attacking-kubernetes-via-excessive-permissions-of-third-party-applications)**
### 作者
* Nanzi Yang, Xidian University, Xi'an, China
* Wenbo Shen, Zhejiang University, Hangzhou, China
* Jinku Li, Xidian University, Xi'an, China
* Xunqi Liu, Xidian University, Xi'an, China
* Xin Guo, Xidian University, Xi'an, China
* Jianfeng Ma, Xidian University, Xi'an, China
### 摘要
> 作为主导容器编排系统，Kubernetes被许多公司和云供应商广泛使用。它在控制平面上运行第三方附加组件和应用程序（称为第三方应用）来管理整个集群。这些第三方应用的安全性对整个集群至关重要，但目前尚未进行系统研究。因此，本文分析了第三方应用的安全性，并揭示了第三方应用被授予过多的关键权限，攻击者可以利用这些权限从工作节点中逃脱并接管整个Kubernetes集群。更糟糕的是，不同第三方应用的过多权限可以链接在一起，将非关键问题转化为严重的攻击向量。为了系统地分析过多权限的可利用性，我们设计了基于不同攻击路径的三种策略。这三种策略可以直接使用第三方应用的DaemonSet窃取集群管理员权限，或者通过同一应用程序或另一个应用程序的关键组件间接地窃取。我们调查了实际生产环境中过多权限攻击的安全影响。我们分析了CNCF中的所有第三方应用，并显示出其中153个中有51个（33.3%）存在潜在安全风险。我们进一步扫描了由四家顶级云供应商提供的Kubernetes服务。结果显示，它们全部都容易受到过多权限攻击。我们将所有发现报告给相应的团队，并从社区获得了八个新的CVE和来自Google的安全悬赏。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623121](https://doi.org/10.1145/3576915.3623121)
## Lost along the Way: Understanding and Mitigating Path-Misresolution Threats to Container Isolation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#lost-along-the-way-understanding-and-mitigating-path-misresolution-threats-to-container-isolation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#lost-along-the-way-understanding-and-mitigating-path-misresolution-threats-to-container-isolation)**
### 作者
* Zhi Li, Huazhong University of Science and Technology, Wuhan, China
* Weijie Liu, Ant Group, Beijing, China
* XiaoFeng Wang, Indiana University Bloomington, Bloomington, IN, USA
* Bin Yuan, Huazhong University of Science and Technology, Wuhan, China
* Hongliang Tian, Ant Group, Beijing, China
* Hai Jin, Huazhong University of Science and Technology, Wuhan, China
* Shoumeng Yan, Ant Group, Beijing, China
### 摘要
> 现今容器技术所实施的文件系统隔离在主机-容器交互日益频繁的情况下被发现不够有效。这种削弱的隔离导致了一种路径解析错误（Pamir）漏洞，这被认为是高风险并且多年来持续报告的。本文首次对Pamir风险和相关漏洞的现有修复进行了系统研究。我们的研究揭示出，尽管针对于容器工具中的易受攻击漏洞进行了大量修补和风险处理努力，但Pamir漏洞还在继续被发现，其中包括我们从已经修补软件中重新发现的一种新漏洞（CVE-2023-0778）。我们研究的一个关键观点是，在容器工具层面防止Pamir风险本质上很困难，因为它们过度依赖第三方组件。虽然应该对所有组件进行安全检查以调节主机-容器交互，但第三方组件开发者往往认为在调用其组件之前，容器工具应该执行安全检查，因此不愿意对他们的代码进行容器特定保护的修补。此外，由于现今容器工具依赖的组件众多，重新实现它们是不实际的。我司的研究表明，基于内核的文件系统隔离是确保主机-容器交互期间始终存在的隔离的唯一方式。在我们的研究中，我们设计并实施了第一个这样的方法，通过在文件系统上强制执行主机-容器交互的访问控制来将文件系统隔离扩展到dentry对象。我们的设计解决了当前容器所特征化的单向隔离的根本限制，并使用精心设计的策略来确保准确和全面的交互控制，并将保护注入正确的内核位置以最大程度地减小性能影响。我们使用模型检查验证了我们的方法，证明了它在消除Pamir风险方面的有效性。我们的评估进一步显示了我们的方法引起的开销极小，远远超过所有现有的Pamir修补程序，并且与主流容器工具兼容。我们已经发布了我们的代码，并提出了将我们的技术纳入Linux内核的请求。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623154](https://doi.org/10.1145/3576915.3623154)
## PackGenome: Automatically Generating Robust YARA Rules for Accurate Malware Packer Detection.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#packgenome-automatically-generating-robust-yara-rules-for-accurate-malware-packer-detection) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#packgenome-automatically-generating-robust-yara-rules-for-accurate-malware-packer-detection)**
### 作者
* Shijia Li, Nankai University, TKLNDST, & DISSEC, Tianjin, China
* Jiang Ming, Tulane University, New Orleans, LA, USA
* Pengda Qiu, Nankai University, TKLNDST, & DISSEC, Tianjin, China
* Qiyuan Chen, Nankai University, TKLNDST, & DISSEC, Tianjin, China
* Lanqing Liu, Nankai University, TKLNDST, & DISSEC, Tianjin, China
* Huaifeng Bao, SKLOIS, IIE, Beijing, China
* Qiang Wang, SKLOIS, IIE, Beijing, China
* Chunfu Jia, Nankai University, TKLNDST, & DISSEC, Tianjin, China
### 摘要
> 二进制打包是一种广泛使用的程序混淆方式，它在运行时压缩或加密原始程序，然后恢复。被打包的恶意软件样本普遍存在，它们将引人注目的代码特征隐藏为难以理解的数据，以逃避检测。为了快速应对大规模的被打包恶意软件，安全分析师会搜索特定的二进制模式来识别对应的打包工具。这些打包工具的模式或签名的质量对于恶意软件分析至关重要。然而，现有的打包工具签名规则严重依赖于人类分析师的经验。除了昂贵的人工工作外，这些人工编写的规则（如YARA）还容易出现高错误报警率：因为它们是设计用于搜索字节模式而不是指令模式，所以很可能与意外的指令不匹配。在本文中，我们研究了现有打包工具检测签名的弱点，并提出了一种新颖的自动YARA规则生成技术，称为PackGenome。受到物种特异基因生物学概念的启发，我们观察到打包特定基因可以帮助确定一个程序是否被打包。我们的框架从相同打包工具保护程序中复用的解包例程中提取打包特定基因，并生成新的YARA规则。为了减少错误报警率，我们提出了一种字节选择策略来系统评估字节不匹配的可能性。我们将PackGenome与公开可用的打包工具签名集合和最先进的自动规则生成工具进行比较。通过超过64万个样本的大规模实验，我们证明PackGenome可以提供强大的YARA规则，以检测Windows和Linux打包工具，包括新出现的低熵打包工具。在所有情况下，PackGenome的表现优于现有工作，具有零误报、低错误报警率和可忽略的扫描开销增加。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616625](https://doi.org/10.1145/3576915.3616625)
## RetSpill: Igniting User-Controlled Data to Burn Away Linux Kernel Protections.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#retspill-igniting-user-controlled-data-to-burn-away-linux-kernel-protections) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#retspill-igniting-user-controlled-data-to-burn-away-linux-kernel-protections)**
### 作者
* Kyle Zeng, Arizona State University, Tempe, AZ, USA
* Zhenpeng Lin, Northwestern University, Evanston, IN, USA
* Kangjie Lu, University of Minnesota, Minneapolis, MN, USA
* Xinyu Xing, Northwestern University, Evanston, IL, USA
* Ruoyu Wang, Arizona State University, Tempe, AZ, USA
* Adam Doupé, Arizona State University, Tempe, AZ, USA
* Yan Shoshitaishvili, Arizona State University, Tempe, AZ, USA
* Tiffany Bao, Arizona State University, Tempe, AZ, USA
### 摘要
> 利用控制流劫持原语（CFHP）获取root权限对于试图利用Linux内核漏洞的攻击者来说至关重要。随着安全研究人员提出了强大的内核安全缓解措施，这种攻击变得越来越难以实现，从而导致开发复杂（作为折衷，脆弱且不可靠）的攻击技术以重新获得它。在本文中，我们通过提出RetSpill，一种强大而优雅的利用技术，利用已经存在于内核堆栈上的用户空间数据进行特权提升，从而消除了复杂性的需求。RetSpill利用了将数据临时存储在内核堆栈上的常见实践，例如在从用户空间切换到内核空间时保留用户空间寄存器值。我们进行了系统研究，并确定了将用户空间数据溢出到内核堆栈的四种常见做法。尽管这种做法完全符合内核的安全规范，但当与控制流劫持（CFH）漏洞配对时，它引入了一条新的利用路径，使得RetSpill能够可靠地将这些漏洞直接转化为特权提升。此外，RetSpill可以绕过当前在Linux内核中部署的许多防御措施。为了证明这个问题的严重性，我们收集了22个真实世界的内核漏洞，并构建了一个半自动化工具，该工具以半自动化的方式滥用有意存储的内核空间上的用户空间数据进行内核利用。我们的工具为22个CFH漏洞中的20个生成了端到端特权提升利用。最后，我们提出了一种新的机制来防御这种攻击。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623220](https://doi.org/10.1145/3576915.3623220)
## Measuring Website Password Creation Policies At Scale.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#measuring-website-password-creation-policies-at-scale) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#measuring-website-password-creation-policies-at-scale)**
### 作者
* Suood Alroomi, Georgia Institute of Technology, Atlanta, GA, USA
* Frank Li, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 研究人员广泛探讨了密码创建政策如何影响用户选择的密码的安全性和可用性，生成基于证据的政策指南。然而，为了在实践中改善Web身份验证，网站必须实际实施这些建议。迄今为止，很少有调查研究探讨哪些密码创建策略实际上被网站部署使用。现有的作品大多已经过时，并且所有的研究都依赖于手动评估，评估的是一小部分网站(最多150个，偏向于热门网站)。因此，我们缺乏对使用今天的密码政策的广泛理解。在本文中，我们开发了一种自动化技术来推断网站的密码创建策略，并将其应用于规模化地测量超过20K个网站的策略，比之前的研究多两个数量级(~135x)。我们的研究结果识别出了常见的部署策略、可能导致弱策略的原因以及改进身份验证的方向。最终，我们的研究提供了第一个关于Web密码创建策略的大规模理解。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623156](https://doi.org/10.1145/3576915.3623156)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623156](https://dl.acm.org/doi/pdf/10.1145/3576915.3623156)
## "I just stopped using one and started using the other": Motivations, Techniques, and Challenges When Switching Password Managers.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#i-just-stopped-using-one-and-started-using-the-other-motivations-techniques-and-challenges-when-switching-password-managers) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#i-just-stopped-using-one-and-started-using-the-other-motivations-techniques-and-challenges-when-switching-password-managers)**
### 作者
* Collins W. Munyendo, The George Washington University, Washington, DC, USA
* Peter Mayer, University of Southern Denmark, Odense, Denmark
* Adam J. Aviv, The George Washington University, Washington, DC, USA
### 摘要
> 本文探讨了美国密码管理器(PM)用户在更换PM时的动机、切换技术以及遇到的挑战。通过筛选调查(n = 412)和主要调查(n = 54)，我们发现基于浏览器的PM是最常用的，其中大多数用户之所以使用PM是因为方便。不幸的是，密码重用率仍然很高。大多数更换PM的参与者之所以这样做是出于可用性的考虑，但也受到成本的驱动，因为第三方PM的全部功能通常需要订阅费用。一些切换PM的用户还受到了最近的安全漏洞的驱使，例如2022年秋季在LastPass报告的安全漏洞，导致一些参与者对LastPass和PM普遍失去了信任。大多数切换用户主要采用手动技术来迁移他们的密码，例如从旧的PM复制和粘贴凭据到新的PM，尽管大多数PM提供了在PM之间自动批量转移凭据的方法。在切换过程中的帮助有限，不到一半的切换参与者在切换过程中接受到了指导。根据这些发现，我们向PM提出了改善其整体用户体验和使用的建议，包括征求并采纳用户的定期反馈，以及使PM设置更容易被终端用户访问和自定义。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623150](https://doi.org/10.1145/3576915.3623150)
## "We've Disabled MFA for You": An Evaluation of the Security and Usability of Multi-Factor Authentication Recovery Deployments.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#weve-disabled-mfa-for-you-an-evaluation-of-the-security-and-usability-of-multi-factor-authentication-recovery-deployments) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#weve-disabled-mfa-for-you-an-evaluation-of-the-security-and-usability-of-multi-factor-authentication-recovery-deployments)**
### 作者
* Sabrina Amft, CISPA Helmholtz Center for Information Security, Hanover, Germany
* Sandra Höltervennhoff, Leibniz University Hannover, Hanover, Germany
* Nicolas Huaman, Leibniz University Hannover, Hanover, Germany
* Alexander Krause, CISPA Helmholtz Center for Information Security, Hanover, Germany
* Lucy Simko, The George Washington University, Washington, DC, USA
* Yasemin Acar, Paderborn University & The George Washington University, Paderborn, Germany
* Sascha Fahl, CISPA Helmholtz Center for Information Security, Hanover, Germany
### 摘要
> 多因素身份验证旨在通过添加其他因素（例如硬件令牌或使用移动应用的一次性密码）来加强基于密码的身份验证的安全性。然而，这种增强的身份验证安全性也带来了潜在的缺点，可能导致账户和资产的丧失。如果用户由于任何原因无法访问其附加身份验证因素，他们将被锁定在自己的账户之外。因此，提供多因素身份验证服务的服务提供商应该采用既安全又易于使用的程序，以允许用户从丧失对附加因素的访问中恢复过来。在本研究中，我们调查了多因素身份验证恢复程序的安全性和用户体验，并将其部署与帮助和支持页面上的描述进行比较。首先，我们评估了1,303个提供多因素身份验证的网站的官方帮助和支持页面，并收集了有关其恢复程序的记录信息。其次，我们选择了71个网站的子集，创建账户，设置多因素身份验证，并对其恢复程序的安全性和用户体验进行了深入调查。我们发现许多网站部署了不安全的多因素身份验证恢复程序，并且在获得账户关联的电子邮件地址的情况下，我们能够绕过和禁用多因素身份验证。此外，我们常常观察到我们的深入分析与官方的帮助和支持页面之间存在矛盾，这意味着旨在帮助用户的信息通常要么不正确，要么过时。根据我们的研究结果，我们提供了有关多因素身份验证恢复的最佳实践建议。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623180](https://doi.org/10.1145/3576915.3623180)
## Uncovering Impact of Mental Models towards Adoption of Multi-device Crypto-Wallets.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#uncovering-impact-of-mental-models-towards-adoption-of-multi-device-crypto-wallets) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#uncovering-impact-of-mental-models-towards-adoption-of-multi-device-crypto-wallets)**
### 作者
* Easwar Vivek Mangipudi, Supra Research, Mountain View, CA, USA
* Udit Desai, IIT Kharagpur, Kharagpur, India
* Mohsen Minaei, Visa Research, Palo Alto, CA, USA
* Mainack Mondal, IIT Kharagpur, Kharagpur, India
* Aniket Kate, Purdue University & Supra Research, West Lafayette, IN, USA
### 摘要
> 过去十年中，加密货币用户使用不同类型的加密钱包数量大幅增长。然而，即使多设备钱包相对于单设备钱包具有更好的安全保障，但仍未得到相应的采用。本研究使用357名加密钱包用户的调查数据，对用户对多设备钱包的感知进行了数据驱动的调查。我们的研究结果揭示了参与者中的两个显著群体-新手和老手。在对这些参与者进行教育后，我们的后续定性分析揭示了这些参与者心理模型与实际安全保障之间存在差距。此外，我们还调查了不同关键共享分配设定下加密钱包的首选默认设置--威胁模型考虑影响了用户的偏好，这表明需要对默认设置进行情境化处理。我们确定了具

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623218](https://doi.org/10.1145/3576915.3623218)
## You Call This Archaeology? Evaluating Web Archives for Reproducible Web Security Measurements.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#you-call-this-archaeology-evaluating-web-archives-for-reproducible-web-security-measurements) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#you-call-this-archaeology-evaluating-web-archives-for-reproducible-web-security-measurements)**
### 作者
* Florian Hantke, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Stefano Calzavara, Università Ca' Foscari Venezia, Venice, Italy
* Moritz Wilhelm, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Alvise Rabitti, Università Ca' Foscari Venezia, Venice, Italy
* Ben Stock, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
### 摘要
> 鉴于网络的动态性，对其进行安全测量存在重现性问题。本文系统地探讨了使用Web档案来进行网络安全测量的潜力。我们首先评估了一系列大规模的Web档案作为档案数据来源的可能性，展示了互联网档案馆相对于其他竞争对手的优越性。然后，我们评估了互联网档案馆在历史网络安全测量中的适用性，发现了采用该档案馆存在的细微差别和潜在陷阱。最后，我们研究了利用互联网档案馆以模拟实时安全测量的可行性，使用最新的档案数据替代实时数据。我们的分析表明，基于档案的安全测量是传统实时安全测量的有希望的替代方案，它具有设计上的重现性；然而，同时也显示了基于档案的测量存在潜在风险和不足之处。作为一个重要的贡献，我们利用所收集的知识为未来基于档案的安全测量提供了见解和最佳实践建议。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616688](https://doi.org/10.1145/3576915.3616688)
## Cybercrime Bitcoin Revenue Estimations: Quantifying the Impact of Methodology and Coverage.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#cybercrime-bitcoin-revenue-estimations-quantifying-the-impact-of-methodology-and-coverage) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#cybercrime-bitcoin-revenue-estimations-quantifying-the-impact-of-methodology-and-coverage)**
### 作者
* Gibran Gomez, IMDEA Software Institute & Universidad Politécnica de Madrid, Madrid, Spain
* Kevin van Liebergen, IMDEA Software Institute & Universidad Politécnica de Madrid, Madrid, Spain
* Juan Caballero, IMDEA Software Institute, Madrid, Spain
### 摘要
> 多项研究利用公开的比特币总账本估计网络犯罪分子从受害者那里获得的收入。由于采用了不同的方法、种子地址和时间段，对于同一目标的估计往往存在差异。这些因素使得理解其方法差异的影响变得具有挑战性。此外，由于对目标支付地址的（缺乏）覆盖，它们低估了收入，但这种影响的规模仍然未知。在本研究中，我们对网络犯罪比特币收入的估计进行了第一次系统分析。我们实现了一个工具，可以复制不同的估计方法。使用我们的工具，在受控环境中，我们可以量化不同方法步骤的影响。与广为人知的观点相反，我们展示了收入并非总是被低估的。存在一些方法可以导致巨大的高估。我们收集了30,424个支付地址，并使用它们来比较6种网络犯罪（勒索软件、剪刀、敲诈、庞氏骗局、赠予骗局、交易所骗局）和141个网络犯罪团伙的财务影响。我们观察到，流行的多输入聚类技术无法发现40%的团伙的地址。我们首次量化了（缺乏）覆盖对估计的影响。为此，我们提出了两种技术，可以在DeadBolt服务器勒索软件上实现高覆盖率，可能几乎完全覆盖。我们扩展的覆盖范围使得我们可以将DeadBolt的收入估计为2.47百万美元，比使用两个流行的互联网扫描引擎的估计高了39倍。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623094](https://doi.org/10.1145/3576915.3623094)
## Jack-in-the-box: An Empirical Study of JavaScript Bundling on the Web and its Security Implications.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#jack-in-the-box-an-empirical-study-of-javascript-bundling-on-the-web-and-its-security-implications) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#jack-in-the-box-an-empirical-study-of-javascript-bundling-on-the-web-and-its-security-implications)**
### 作者
* Jeremy Rack, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Cristian-Alexandru Staicu, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 近年来，我们发现对用户界面应用程序的软件供应链的研究越来越受关注，以揭示存在的第三方依赖问题。先前的研究表明，网络应用程序常常依赖过时或容易受到攻击的第三方代码。此外，现实世界中存在的供应链攻击显示，第三方依赖也可以用于传递恶意代码，例如进行加密货币挖矿操作。然而，在该领域的现有测量研究中忽略了一个重要的软件工程实践：开发人员经常将第三方代码合并到一个称为bundle的单个文件中，然后从自己的服务器上进行交付，使其看起来像是第一方代码。诸如Webpack或Rollup之类的打包工具是备受开发者欢迎的开源项目，在GitHub上拥有成千上万的星标，这说明开发者广泛使用这项技术。忽略打包可能导致低估现代软件供应链的复杂性。在这项工作中，我们旨在解决先前研究中的这些方法论缺陷。为此，我们提出了一种新方法，用于自动检测bundle并进行部分逆向工程。使用这种方法，我们进行了对网络上打包代码的首次大规模实证研究，并检查了其安全影响。我们提供了关于bundle的高普及率的证据，这些bundle包含在所有网站的40%中，而平均每个网站包含多个bundle。按照我们的方法论，我们重新识别了来源于33个易受攻击的npm软件包的1,051个漏洞，这些漏洞包含在打包代码中。在这些漏洞中，我们发现17个关键漏洞和59个高危漏洞，可能使恶意行为者能够执行诸如任意代码执行之类的攻击。分析包含在bundle中的低评级库，我们发现了10个安全风险较高的软件包，这表明影响bundle的供应链攻击不仅是可能的，而且已经在发生中。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623140](https://doi.org/10.1145/3576915.3623140)
## Understanding and Detecting Abused Image Hosting Modules as Malicious Services.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#understanding-and-detecting-abused-image-hosting-modules-as-malicious-services) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#understanding-and-detecting-abused-image-hosting-modules-as-malicious-services)**
### 作者
* Geng Hong, Fudan University, Shanghai, China
* Mengying Wu, Fudan University, Shanghai, China
* Pei Chen, Fudan University, Shanghai, China
* Xiaojing Liao, Indiana University Bloomington, Bloomington, IN, USA
* Guoyi Ye, Fudan University, Shanghai, China
* Min Yang, Fudan University, Shanghai, China
### 摘要
> 作为一种新型的地下生态系统，滥用带有恶意服务的滥用图像托管模块（AIMIEs）的开发越来越普遍，用于托管非法图像和传播有害内容。然而，对于这种新威胁的规模、影响和技术几乎没有研究，更不用说大规模检测易受攻击的图像托管模块了。为了填补这一空白，本文提出了对AIMIEs的首次测量研究。通过收集和分析89个开源的AIMIEs，我们揭示了AIMIEs的现状，报告了来自阿里巴巴、腾讯和字节跳动等知名公司的被滥用的图像托管API的演变和规避性，并识别了通过这些AIMIEs上传的现实世界中被滥用的图像。此外，我们提出了一种名为Viola的工具来检测野外易受攻击的图像托管模块（IHMs）。我们发现与338个网络服务（集成了易受攻击的IHMs）相关联的477个易受攻击的IHMs上传API，以及207个受害FQDNs。易受攻击的网络服务中排名最高的是baidu.com，其次是bilibili.com和163.com。截至论文提交时，我们已报告了被滥用和易受攻击的IHMs上传API，并收到了其中69个的确认。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623143](https://doi.org/10.1145/3576915.3623143)
## Faster Constant-time Evaluation of the Kronecker Symbol with Application to Elliptic Curve Hashing.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#faster-constant-time-evaluation-of-the-kronecker-symbol-with-application-to-elliptic-curve-hashing) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#faster-constant-time-evaluation-of-the-kronecker-symbol-with-application-to-elliptic-curve-hashing)**
### 作者
* Diego F. Aranha, Aarhus University, Aarhus, Denmark
* Benjamin Salling Hvass, Aarhus University, Aarhus, Denmark
* Bas Spitters, Aarhus University, Aarhus, Denmark
* Mehdi Tibouchi, NTT Corporation, Tokyo, Japan
### 摘要
> 我们将Bernstein-Yang (BY)算法[11]泛化为常数时间模逆算法，用于计算Kronecker符号，其中Jacobi和Legendre符号是特殊情况。我们首先开发了一种基本且易于实现的算法，使用完全精度的除法步骤进行定义。然后，我们描述了一种由Hamburg[21]优化的版本，用于处理字大小输入，并且对其正确性进行了正式验证。在此过程中，我们引入了许多用于在常数时间内实现两个版本的优化。所得到的算法特别适用于使用密集素数p计算Legendre符号的情况，在配对友好的椭圆曲线中，通常很难找到指数为p-1除以2的有效添加链。我们对一系列参数进行了高速实现，结果表明新算法比指数运算快高达40倍，比先前的技术水平提高了25.7%。我们使用SwiftEC算法[17]进行散列椭圆曲线展示了我们的技术，节省了14.7%-48.1%，并且加速了基于CTIDH同构基密钥交换[7]，节省了3.5-13.5%的时间。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616597](https://doi.org/10.1145/3576915.3616597)
## Verifiable Verification in Cryptographic Protocols.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#verifiable-verification-in-cryptographic-protocols) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#verifiable-verification-in-cryptographic-protocols)**
### 作者
* Marc Fischlin, Technische Universität Darmstadt, Darmstadt, Germany
* Felix Günther, ETH Zürich & IBM Research Europe - Zurich, Zürich & Rüschlikon, Switzerland
### 摘要
> 加密协议中的常见验证步骤，例如签名或消息认证码检查，以及椭圆曲线点的验证，对于协议的整体安全至关重要。然而，由于实现错误通常导致协议正常运行，这些步骤的遗漏很容易被忽视。其中一个最著名的例子是苹果公司的goto fail漏洞，错误的证书验证跳过了几个必需的步骤，将无效的证书标记为正确验证。这个漏洞至少存在了17个月而未被察觉。我们在此提出了一种机制，它在密码学层面上支持此类错误的检测。我们不仅仅返回二进制的接受决策，而是让验证返回更细节化的信息，我们称之为确认码。读者可以将确认码视为相关验证步骤生成的一次性信息。在发生诸如goto fail漏洞的实现错误时，确认码将缺少关键元素。现在问题在于如何验证确认码本身。我们展示了如何使用确认码将安全性与协议的基本功能相结合，通过协议不正常工作来检测错误的实现。更具体地说，我们讨论了在通过密钥交换协议建立的安全连接中使用确认码的用法，并通过派生密钥进行安全保护。如果密钥交换协议执行中的某些验证步骤出现故障，确认码也将出现问题，因为我们可以让确认码进入密钥衍生过程，双方的连接最终将失败。因此，像goto fail这样的实现错误现在可以通过简单的连接测试来检测到。
> 
> **Note:** This translation assumes that the intention is to have a single translation, rather than a translation followed by another text.

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623151](https://doi.org/10.1145/3576915.3623151)
## Compact Frequency Estimators in Adversarial Environments.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#compact-frequency-estimators-in-adversarial-environments) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#compact-frequency-estimators-in-adversarial-environments)**
### 作者
* Sam A. Markelon, University of Florida, Gainesville, FL, USA
* Mia Filic, ETH Zürich, Zürich, Switzerland
* Thomas Shrimpton, University of Florida, Gainesville, FL, USA
### 摘要
> Count-Min Sketch（CMS）和HeavyKeeper（HK）是紧凑型频率估计器（CFE）的两种实现。这些是一类概率数据结构，用于维护（通常是高容量）流数据的紧凑摘要，并且提供了任何特定元素出现次数的近似正确估计。CFE通常是寻找最高频元素（例如，top-K元素，重点数据，大流量）的系统中的基本结构。传统上，在频率估计的准确性方面，概率性保证是在流元素不依赖于结构的内部随机性的隐含假设下证明的。换句话说，它们是在由非自适应对手创建的数据流存在的情况下证明的。然而在很多实际使用情况中，这个假设与现实不太匹配，特别是在恶意行为者有动机操纵数据流的应用中。我们展示了CMS和HK结构可以被迫产生显著的估计误差，这些错误通过利用自适应性的具体攻击实现。我们通过理论分析和实验的方式对这些攻击进行了分析，两者之间具有紧密的一致性。不幸的是，对于（至少）在实践中合理的参数的基于草图的CFE来说，这些负面结果似乎是不可避免的。值得肯定的是，我们提出了一种新的CFE（Count-Keeper），它可以被看作是CMS和HK结构的组合。对于“真实”流，Count-Keeper的估计通常比CMS准确性更高（至少达到两倍）；我们对CMS和HK的攻击在用于Count-Keeper时效果较差（且需要更多资源）；Count-Keeper有本地能力来标记可疑的估计值，而CMS和HK（或任何其他CFE，据我们所知）都没有这个功能。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623216](https://doi.org/10.1145/3576915.3623216)
## ACABELLA: Automated (Crypt)analysis of Attribute-Based Encryption Leveraging Linear Algebra.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#acabella-automated-crypt-analysis-of-attribute-based-encryption-leveraging-linear-algebra) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#acabella-automated-crypt-analysis-of-attribute-based-encryption-leveraging-linear-algebra)**
### 作者
* Antonio de la Piedra, Kudelski Security Research Team, Cheseaux-sur-Lausanne, Switzerland
* Marloes Venema, Radboud University & University of Wuppertal, Nijmegen; Wuppertal, Netherlands
* Greg Alpár, Open University of the Netherlands & Radboud University, Heerlen; Nijmegen, Netherlands
### 摘要
> 属性基加密（ABE）是一种流行的公钥加密类型，通过密码学方式进行访问控制，并推动了许多应用案例的提出。为了满足设置的要求，通常会引入专门设计的方案。然而，设计安全方案以及验证其安全性都是非常困难的。其中有几种方案已经被证明是不安全的，因此在实践中使用它们具有危险性。为了克服这些缺点，我们引入了ACABELLA。ACABELLA简化了基于配对的ABE方案的安全证明的生成和验证。它由一个易于手动验证的安全证明框架和一个高效生成这些安全证明的自动化工具组成。生成这样的安全证明通常只需几秒钟时间。输出易于理解，证明可以进行手动验证。特别地，通过ACABELLA生成的安全证明的验证归结为执行简单的线性代数运算。ACABELLA工具是开源的，也可以通过Web界面进行访问。借助该工具，专家们可以通过验证或验证其方案的安全性主张，简化他们的证明过程，并且从业人员可以确信所选择的ABE方案是安全的。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616576](https://doi.org/10.1145/3576915.3616576)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616576](https://dl.acm.org/doi/pdf/10.1145/3576915.3616576)
## Ramen: Souper Fast Three-Party Computation for RAM Programs.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#ramen-souper-fast-three-party-computation-for-ram-programs) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#ramen-souper-fast-three-party-computation-for-ram-programs)**
### 作者
* Lennart Braun, Aarhus University, Aarhus, Denmark
* Mahak Pancholi, Aarhus University, Aarhus, Denmark
* Rahul Rachuri, Visa Research, Palo Alto, USA
* Mark Simkin, Ethereum Foundation, Aarhus, Denmark
### 摘要
> 安全的RAM计算使得多个参与方能够以一种方式评估一个被表示为随机访问机器（RAM）程序的函数，该方式不会泄露任何关于参与方私密输入的信息，除了函数输出已经公开的信息。在这项工作中，我们提出了Ramen，这是一种新的协议，可以在三方之间安全地计算RAM程序，并容忍最多一个被动损坏。Ramen在渐近性能上提供合理的保证，同时在具体效率上也很高效。我们实施了我们的协议，并为各种设置提供广泛的基准测试。从渐近性能来看，我们的协议需要固定数量的轮次，并且每个内存访问的通信和计算量可以达到亚线性水平。在具体效率方面，我们的协议优于先前的解决方案。对于一个大小为226的内存，与Vadapalli、Henry和Goldberg（USENIX Security 2023）之前最快且并发的解决方案相比，在局域网环境下我们的内存访问速度提高了25倍，在广域网环境下提高了8倍。由于我们出色的渐近性能保证，随着内存的增大，效率差距只会越来越大，因此Ramen提供了目前最具可扩展性和具体效率的安全计算RAM程序的解决方案。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623115](https://doi.org/10.1145/3576915.3623115)
## FutORAMa: A Concretely Efficient Hierarchical Oblivious RAM.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#futorama-a-concretely-efficient-hierarchical-oblivious-ram) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#futorama-a-concretely-efficient-hierarchical-oblivious-ram)**
### 作者
* Gilad Asharov, Bar-Ilan University, Ramat Gan, Israel
* Ilan Komargodski, Hebrew University & NTT Research, Jerusalem, Israel
* Yehuda Michelson, Bar-Ilan University, Ramat Gan, Israel
### 摘要
> 忘记性随机访问存储器（ORAM）是一种用于隐藏存储器访问模式的通用技术。这是许多安全计算应用程序的基本任务。尽管已知的ORAM方案提供了最佳的渐近复杂性，但尽管做出了大量努力，它们的具体成本仍然对许多有趣的应用程序来说过高。目前最先进的实用ORAM方案仅适用于相对较小的存储器（平方根ORAM或路径ORAM）。本文提出了一种基于最近在ORAM方案的渐近复杂性方面的突破（PanORAMa和OptORAMa）的新颖构建实用ORAM方法。我们通过放宽对常数局部存储器大小的限制，将这些构建带入实用方案的领域。我们的设计在一组合理的存储器大小（例如1GB、1TB）和相同的局部存储器大小下，相比于路径ORAM的优化变种提供了至少6到8倍的改进。据我们所知，这是基于完整分层ORAM框架的第一个实用ORAM的实现。在我们的工作之前，人们普遍认为基于分层ORAM的构建在实践中过于昂贵。我们实现了我们的设计，并提供了广泛的评估和实验结果。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623125](https://doi.org/10.1145/3576915.3623125)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623125](https://dl.acm.org/doi/pdf/10.1145/3576915.3623125)
## Waks-On/Waks-Off: Fast Oblivious Offline/Online Shuffling and Sorting with Waksman Networks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#waks-on-waks-off-fast-oblivious-offline-online-shuffling-and-sorting-with-waksman-networks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#waks-on-waks-off-fast-oblivious-offline-online-shuffling-and-sorting-with-waksman-networks)**
### 作者
* Sajin Sasy, University of Waterloo, Waterloo, ON, Canada
* Aaron Johnson, U.S. Naval Research Laboratory, Washington, DC, USA
* Ian Goldberg, University of Waterloo, Waterloo, ON, Canada
### 摘要
> 随着更多注重隐私保护的解决方案利用像Intel SGX这样的可信执行环境（TEEs），确保这些解决方案在设计上能够抵御TEES侧信道攻击变得非常重要，这一点已经被研究揭示出来。特别是，这种解决方案需要完全无意识地规避通过内存或时间侧信道泄露私人信息的情况。在这项工作中，我们提出了用于数据洗牌和排序的快速全无意识算法。数据的无意识洗牌和排序是在注重隐私保护的解决方案中经常使用的两个基本原语。我们提出了新颖的无意识洗牌和排序算法，它们以离线/在线模型工作，这样大部分计算可以在独立于要进行排列的数据的离线阶段完成，从而在在线阶段的效率上比最先进的无意识洗牌和排序解决方案（O(βn log n)）更高效（>5×和>3×）。我们的工作重新审视了Waksman网络，并利用关键观察结果，即为均匀随机洗牌设置Waksman网络的控制位与要洗牌的数据无关。然而，高效且完全无意识地设置Waksman网络的控制位是一个挑战，我们提供了一种新颖的控制位设置算法来解决这个问题。我们的算法WaksShuffle和WaksSort的总成本（包括离线计算）在问题规模适中的情况下（β > 1400 B）低于所有其他完全无意识洗牌和排序算法，随着项目大小的增加，性能差距只会更大。此外，我们的洗牌算法WaksShuffle在洗牌220个任意大小的项目时，提高了无意识洗牌的在线成本超过5×；类似地，WaksShuffle+QS在无意识排序的在线成本上提供了超过2.7×的加速。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623133](https://doi.org/10.1145/3576915.3623133)
## General Data Protection Runtime: Enforcing Transparent GDPR Compliance for Existing Applications.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#general-data-protection-runtime-enforcing-transparent-gdpr-compliance-for-existing-applications) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#general-data-protection-runtime-enforcing-transparent-gdpr-compliance-for-existing-applications)**
### 作者
* David Klein, Technische Universität Braunschweig, Braunschweig, Germany
* Benny Rolle, SAP SE, Walldorf, Germany
* Thomas Barber, SAP Security Research, Karlsruhe, Germany
* Manuel Karl, Technische Universität Braunschweig, Braunschweig, Germany
* Martin Johns, Technische Universität Braunschweig, Braunschweig, Germany
### 摘要
> 近期数据保护法规的进展为网站用户带来了隐私利益，但也给运营商带来了成本。将通用数据保护条例（GDPR）等法律的隐私要求应用于旧版软件需要进行大量的审计和开发工作。在这项工作中，我们证明可以通过信息流跟踪的方式将数据保护要求减少到最低。我们提出了一个轻量级执行引擎，可以可靠地防止非法数据处理，即使存在错误或配置错误的软件也可以有效防范。以GDPR法规为出发点，我们定义了12个软件要求，如果正确实施，可以确保个人数据得到适当处理。我们展示了如何通过提出元数据结构和动态信息流跟踪框架的执行策略来满足这些要求。为了将这个想法付诸实践，我们提出了Fontus，一个Java虚拟机（JVM）信息流跟踪框架，可以透明地为现有的Java应用程序标记个人数据，以便符合数据保护法规要求。最后，我们通过在7个大型开源Web应用程序中强制执行数据保护策略来证明我们的方法的适用性，而无需对应用程序本身进行任何改动。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616604](https://doi.org/10.1145/3576915.3616604)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616604](https://dl.acm.org/doi/pdf/10.1145/3576915.3616604)
## Control, Confidentiality, and the Right to be Forgotten.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#control-confidentiality-and-the-right-to-be-forgotten) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#control-confidentiality-and-the-right-to-be-forgotten)**
### 作者
* Aloni Cohen, University of Chicago, Chicago, IL, USA
* Adam Smith, Boston University, Boston, MA, USA
* Marika Swanberg, Boston University, Boston, MA, USA
* Prashant Nalini Vasudevan, National University of Singapore, Singapore, Singapore
### 摘要
> 近期的数字权利框架赋予用户从存储和处理其个人信息的系统中删除其数据的权利（例如 GDPR 中的“被遗忘权”）。如何在与多个用户进行交互并存储派生信息的复杂系统中形式化删除？我们认为之前的方法存在不足。机器遗忘的定义过于狭隘，不适用于一般的交互环境。删除作为保密性的自然方法过于限制：通过要求删除数据的保密性，它排除了社交功能的可能性。我们提出了一种新的形式化方法：删除即控制。它允许在删除之前自由使用用户的数据，同时在删除后施加有意义的要求-从而给予用户更多的控制权。删除即控制提供了在不同环境中实现删除的新方法。我们将其应用于社交功能，并从文献中给出各种机器遗忘定义的新统一视角。这是通过一种新的自适应历史独立性的一般化方式完成的。删除即控制还提供了一种实现机器遗忘目标的新方法，即在尊重用户删除请求的同时保持模型的稳定。我们展示了发布一系列更新的模型序列，这些模型在持续发布下具有差分隐私，满足了删除即控制的要求。与机器遗忘文献相比，这种算法的准确性不取决于删除点的数量。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616585](https://doi.org/10.1145/3576915.3616585)
## PolicyChecker: Analyzing the GDPR Completeness of Mobile Apps' Privacy Policies.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#policychecker-analyzing-the-gdpr-completeness-of-mobile-apps-privacy-policies) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#policychecker-analyzing-the-gdpr-completeness-of-mobile-apps-privacy-policies)**
### 作者
* Anhao Xiang, Colorado School of Mines, Golden, CO, USA
* Weiping Pei, The University of Tulsa, Tulsa, OK, USA
* Chuan Yue, Colorado School of Mines, Golden, CO, USA
### 摘要
> 欧洲通用数据保护条例（GDPR）要求数据控制者（例如应用程序开发者）向数据主体（例如应用程序用户）提供有关其数据如何被处理以及他们的权利的所有信息，这些信息在第13条和第14条中有明确规定。虽然一些研究已经开始检测隐私政策中对GDPR要求的履行情况，但它们的探索只集中在GDPR强制要求的一个子集上。本文旨在探讨移动应用隐私政策中GDPR完整性违规的现状。为了达到我们的目标，我们设计了基于规则和语义角色的PolicyChecker框架。PolicyChecker根据所有强制性GDPR要求以及特定条件下将成为强制性要求的所有可适用GDPR要求，自动检测隐私政策中的完整性违规。使用PolicyChecker，我们对英国谷歌应用商店中205,973个Android应用的隐私政策进行了首次大规模GDPR完整性违规研究。PolicyChecker发现了163,068（79.2%）个包含数据收集声明的隐私政策，因此这些政策受到GDPR要求的管理。然而，其中大多数（99.3%）未能达到GDPR的完整性要求，至少有一个要求未满足；其中98.1%的政策至少有一个未满足的强制性要求，而73.0%的政策至少有一个未满足的可适用要求逻辑链。我们推测，控制者对某些GDPR要求的理解不足以及他们在编写隐私政策时的糟糕实践可能是导致GDPR完整性违规的主要原因。我们进一步讨论了改善应用程序开发者的应用隐私政策完整性以提供更透明的个人数据处理环境给用户的建议。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623067](https://doi.org/10.1145/3576915.3623067)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623067](https://dl.acm.org/doi/pdf/10.1145/3576915.3623067)
## Speranza: Usable, Privacy-friendly Software Signing.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#speranza-usable-privacy-friendly-software-signing) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#speranza-usable-privacy-friendly-software-signing)**
### 作者
* Kelsey Merrill, MIT, Cambridge, MA, USA
* Zachary Newman, Chainguard, Inc., Brooklyn, NY, USA
* Santiago Torres-Arias, Purdue University, West Lafayette, IN, USA
* Karen R. Sollins, MIT, Cambridge, MA, USA
### 摘要
> 软件仓库用于大规模开放式软件分发，是安全攻击的主要途径。软件签名提供了真实性，减轻了许多此类攻击。由开发者管理的签名密钥带来了可用性挑战，但基于证书的系统引入了隐私问题。这项工作，名为Speranza，使用证书来验证软件的真实性，但仍通过零知识身份共同承诺技术向签名者提供匿名性。在Speranza中，签名者使用自动化证书颁发机构（CA）创建私人绑定身份的签名以及授权证明。验证者检查签名者是否有权限发布包，而不会知道签名者的身份。包仓库私下记录每个包的授权签名者，但只在公共地图中公布对身份的承诺。然后，当颁发证书时，CA将证书颁发给同一身份的独特承诺。然后，签名者创建一个零知识证明，证明这些是共同承诺。我们为Speranza实现了一个概念验证。我们发现维护者（签名）和终端用户（验证）的成本很小（亚毫秒级），即使是拥有数百万个包的仓库。受近期密钥透明度系统启发的技术将为授权策略提供的带宽降低到2 KiB。该系统中的服务器成本可以忽略不计。我们的评估发现，Speranza在最大规模的软件仓库中是实用的。我们在这个项目中也强调实用性和可部署性。通过建立在现有技术上，并使用相对简单和成熟的加密技术，Speranza只需要几百行代码和对现有基础设施的最小更改就可以进行大规模的使用。Speranza是将隐

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623200](https://doi.org/10.1145/3576915.3623200)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623200](https://dl.acm.org/doi/pdf/10.1145/3576915.3623200)
## Unsafe Diffusion: On the Generation of Unsafe Images and Hateful Memes From Text-To-Image Models.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#unsafe-diffusion-on-the-generation-of-unsafe-images-and-hateful-memes-from-text-to-image-models) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#unsafe-diffusion-on-the-generation-of-unsafe-images-and-hateful-memes-from-text-to-image-models)**
### 作者
* Yiting Qu, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Xinyue Shen, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Xinlei He, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Michael Backes, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Savvas Zannettou, Delft University of Technology, Delft, Netherlands
* Yang Zhang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 最新的文本到图像模型如Stable Diffusion和DALLE·2正在彻底改变人们生成视觉内容的方式。与此同时，社会对敌对势力如何利用这些模型生成有问题或不安全的图像存在严重担忧。在这项研究中，我们着重解密从文本到图像模型生成不安全图像和憎恶恶搞模因的过程。首先，我们构建了一个由五个类别（性爱、暴力、恼人、仇恨和政治）组成的不安全图像分类体系。然后，我们使用四个提示数据集评估了四个先进的文本到图像模型生成的不安全图像的比例。我们发现文本到图像模型能够生成相当数量的不安全图像；在四个模型和四个提示数据集中，所有生成的图像中有14.56%是不安全的。比较这四个文本到图像模型时，我们发现存在不同的风险水平，其中Stable Diffusion是生成不安全内容最容易的模型（所有生成的图像中有18.92%是不安全的）。鉴于Stable Diffusion倾向于生成更多不安全内容，我们评估了其在受攻击的特定个人或群体被敌对势力利用时产生憎恶恶搞模因的潜力。我们采用了三种图像编辑方法：DreamBooth、Textual Inversion和SDEdit，这些方法在Stable Diffusion中提供支持，以生成变体。我们的评估结果显示，使用DreamBooth生成的图像中有24%是憎恶恶搞模因的变体，这些图像呈现出原始憎恶恶搞模因和目标个人/群体的特征；这些生成的图像与从现实世界中收集到的憎恶恶搞模因变体相当。总的来说，我们的研究结果表明大规模生成不安全图像的危险已迫在眉睫。我们讨论了几项缓解措施，如筛选训练数据、规范提示方式和实施安全过滤，并鼓励开发更好的保护工具来防止不安全生成。我们的代码公开在https://github.com/YitingQu/unsafe-diffusion。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616679](https://doi.org/10.1145/3576915.3616679)
## DE-FAKE: Detection and Attribution of Fake Images Generated by Text-to-Image Generation Models.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#de-fake-detection-and-attribution-of-fake-images-generated-by-text-to-image-generation-models) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#de-fake-detection-and-attribution-of-fake-images-generated-by-text-to-image-generation-models)**
### 作者
* Zeyang Sha, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Zheng Li, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Ning Yu, Salesforce Research, Palo Alto, CA, USA
* Yang Zhang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 在过去几个月中，基于描述生成图像的文本到图像生成模型引起了越来越多的关注。尽管这些模型表现出令人鼓舞的性能，但它们引发了有关滥用生成的假图像的担忧。为了解决这个问题，我们首次对文本到图像生成模型生成的假图像进行检测和归属的系统研究。具体来说，我们首先构建了一个机器学习分类器来检测各种文本到图像生成模型生成的假图像。然后，我们将这些假图像与它们的源模型进行关联，以便模型的所有者对模型的滥用负责。我们进一步研究了生成假图像的提示对检测和归属的影响。我们对四个流行的文本到图像生成模型（包括DALL·E 2、稳定扩散、GLIDE和潜在扩散）以及两个基准提示-图像数据集进行了大量实验证明，（1）可以区分来自不同模型的假图像和真实图像，因为不同模型生成的假图像存在共同的特征；（2）可以有效地将假图像归属于其源模型，因为不同模型在生成的图像中留下了独特的指纹；（3）“人物”主题或长度在25到75之间的提示可以让模型生成更具真实性的假图像。所有的发现都有助于让社区认识到文本到图像生成模型带来的威胁。我们呼吁社区考虑像我们这样的对抗快速发展的假图像生成的对应解决方案。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616588](https://doi.org/10.1145/3576915.3616588)
## "Get in Researchers; We're Measuring Reproducibility": A Reproducibility Study of Machine Learning Papers in Tier 1 Security Conferences.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#get-in-researchers-were-measuring-reproducibility-a-reproducibility-study-of-machine-learning-papers-in-tier-1-security-conferences) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#get-in-researchers-were-measuring-reproducibility-a-reproducibility-study-of-machine-learning-papers-in-tier-1-security-conferences)**
### 作者
* Daniel Olszewski, University of Florida, Gainesville, FL, USA
* Allison Lu, University of Florida, Gainesville, FL, USA
* Carson Stillman, University of Florida, Gainesville, FL, USA
* Kevin Warren, University of Florida, Gainesville, FL, USA
* Cole Kitroser, University of Florida, Gainesville, FL, USA
* Alejandro Pascual, University of Florida, Gainesville, FL, USA
* Divyajyoti Ukirde, University of Florida, Gainesville, FL, USA
* Kevin Butler, University of Florida, Gainesville, FL, USA
* Patrick Traynor, University of Florida, Gainesville, FL, USA
### 摘要
> 可重复性对于科学的进展至关重要；它增强了对看似相互矛盾的结果的信心，并扩展了已知发现的边界。计算机安全有着自然的优势，因为它可以创建应该促进计算可重现性的产品，即他人可以相对简单地使用他人的代码和数据独立地重新创建结果。虽然安全社区最近对可重复性的关注有所增加，但尚未进行独立且全面的可重复性现状的测量。在本文中，我们进行了第一项此类研究，针对过去十年（2013-2022）发表在一流安全会议上的机器学习安全论文生成的可重复性产品。我们对近750篇论文、代码库和数据集进行了间接和直接可重复性的测量研究。我们的分析显示，在一流会议引入可重复性评估委员会之前和之后，可重复性产品的可用性之间没有统计显著差异。然而，基于三年的结果，通过此过程的产品实现的成功率高于未经过的产品。根据我们的研究结果，我们给出了促进社区可重复性改进的基于数据的建议，包括我们研究中观察到的五个常见问题。通过这样做，我们证明了在计算机安全研究中还需要取得重要进展。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623130](https://doi.org/10.1145/3576915.3623130)
## Unhelpful Assumptions in Software Security Research.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#unhelpful-assumptions-in-software-security-research) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#unhelpful-assumptions-in-software-security-research)**
### 作者
* Ita Ryan, University College Cork, Cork, Ireland
* Utz Roedig, University College Cork, Cork, Ireland
* Klaas-Jan Stol, University College Cork, Cork, Ireland
### 摘要
> 在软件安全研究中，必须考虑许多因素。一旦超越最简单的实验室实验，研究人员必须面对指数级复杂的条件。研究表明，软件安全受到引导效应、工具可用性、库文档、组织安全文化、互联网资源的内容和格式、IT团队和开发人员的互动、互联网搜索引擎的排序、开发人员个性、安全警告位置、培训指导、开发人员经验等多个因素的影响。在对自2016年以来发表的软件安全论文进行系统回顾之后，我们确定了一些常见的不实假设，这些假设常被软件安全研究人员所做出。本文中，我们列出了这些假设，说明它们为何有时不能反映现实，并对研究人员提出了一些建议。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623122](https://doi.org/10.1145/3576915.3623122)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3623122](https://dl.acm.org/doi/pdf/10.1145/3576915.3623122)
## Read Between the Lines: Detecting Tracking JavaScript with Bytecode Classification.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#read-between-the-lines-detecting-tracking-javascript-with-bytecode-classification) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#read-between-the-lines-detecting-tracking-javascript-with-bytecode-classification)**
### 作者
* Mohammad Ghasemisharif, University of Illinois Chicago, Chicago, IL, USA
* Jason Polakis, University of Illinois Chicago, Chicago, IL, USA
### 摘要
> 浏览器和扩展程序旨在阻止在线广告和追踪脚本，主要依赖于过滤列表规则来确定哪些资源请求必须被阻止。这些过滤列表通常由在线用户社区手动维护。然而，由于拦截软件和广告支持网站之间的竞争，这些规则必须不断更新以适应新的绕过技术和修改的请求，从而使检测和规则生成过程变得繁琐和被动（可能导致传播和检测之间的重大延迟）。在本文中，我们通过提出一个自动化流程来解决检测问题，该流程可以高准确率地检测到追踪和广告JavaScript资源，并设计为具有最小假阳性和开销。我们的方法将脚本检测建模为一个文本分类问题，其中JavaScript资源是包含字节码序列的文档。由于字节码直接来自JavaScript解释器，我们的技术对于常用的绕过方法（如URL随机化或代码混淆）具有强韧性。我们尝试使用深度学习和传统的基于机器学习的方法进行字节码分类实验，并展示了我们的方法以97.08%的准确率识别广告/追踪脚本，明显优于最先进的系统，无论是在精确性还是所需功能级别方面。我们的实验分析进一步突显了我们系统的能力，通过展示它如何揭示目前未知的广告/追踪脚本并主动检测列表维护人员错误添加的脚本，从而增强了过滤列表的功能。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616637](https://doi.org/10.1145/3576915.3616637)
## CookieGraph: Understanding and Detecting First-Party Tracking Cookies.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#cookiegraph-understanding-and-detecting-first-party-tracking-cookies) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#cookiegraph-understanding-and-detecting-first-party-tracking-cookies)**
### 作者
* Shaoor Munir, University of California, Davis, Davis, CA, USA
* Sandra Siby, Imperial College London, London, United Kingdom
* Umar Iqbal, Washington University in St. Louis, St. Louis, MO, USA
* Steven Englehardt, Independent Researcher, Highland Park, NJ, USA
* Zubair Shafiq, University of California, Davis, Davis, CA, USA
* Carmela Troncoso, EPFL, Lausanne, Switzerland
### 摘要
> 随着第三方Cookie阻止成为主流网络浏览器的常态，广告商和追踪者已经开始使用第一方Cookie进行追踪。为了理解这种现象，我们进行了一项有差异的测量研究，比较了有和没有第三方Cookie的情况。我们发现，即使第三方Cookie被阻止，第一方Cookie仍然被用于存储和外泄标识符给已知的追踪器。与第三方Cookie阻止不同，第��方Cookie阻止并不实际，因为这将导致网站功能的重大故障。我们提出了CookieGraph，一种基于机器学习的方法，可以准确且强大地检测和阻止第一方追踪Cookie。CookieGraph以90.18%的准确率检测第一方追踪Cookie，比最先进的CookieBlock高出17.31%。我们表明，CookieGraph对于Cookie名称操纵具有鲁棒性，而CookieBlock的准确性下降了15.87%。尽管阻止所有第一方Cookie会导致32%的带有SSO登录的网站功能重大故障，而CookieBlock将其减少到10%，但我们表明CookieGraph不会导致这些网站的任何重大故障。我们对CookieGraph的部署显示，89.86%的前百万网站使用第一方追踪Cookie。我们发现，在这些第一方追踪Cookie中，有96.61%实际上是由嵌入第一方上下文的第三方脚本进行伪造的。我们还发现证据表明，第一方追踪Cookie是通过指纹识别脚本设置的。最常见的第一方追踪Cookie是由谷歌、Facebook和TikTok等主要广告实体设置的。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3616586](https://doi.org/10.1145/3576915.3616586)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3576915.3616586](https://dl.acm.org/doi/pdf/10.1145/3576915.3616586)
## AdCPG: Classifying JavaScript Code Property Graphs with Explanations for Ad and Tracker Blocking.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#adcpg-classifying-javascript-code-property-graphs-with-explanations-for-ad-and-tracker-blocking) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#adcpg-classifying-javascript-code-property-graphs-with-explanations-for-ad-and-tracker-blocking)**
### 作者
* Changmin Lee, KAIST, Daejeon, Republic of Korea
* Sooel Son, KAIST, Daejeon, Republic of Korea
### 摘要
> 广告和跟踪服务（ATS）屏蔽已经保护了数百万互联网用户的隐私，防止隐私侵入性的跟踪行为。先前的研究提出使用图形表示来模拟加载网页资源的结构关系，然后根据该图形表示进行ATS节点分类。然而，这些基于上下文的ATS分类方法存在一些问题：（1）由于ATS资源加载的上下文不同而导致分类不一致；（2）分类结果缺乏可解释性，难以确定ATS分类的代码级原因。我们提出了一种针对ATS分类的图神经网络（GNN）框架AdCPG。我们的方法重点在于对JavaScript（JS）内容进行分类，而不考虑网页资源的加载上下文。给定JS文件，AdCPG利用它们的代码属性图（CPG），对这些CPG进行图分类，模拟这些JS文件的语义和结构信息。为了提供ATS分类的解释，AdCPG使用GNN解释器突出显示对将JS文件分类为ATS作出最大贡献的JS代码。AdCPG在Tranco排名前10,000个网站上取得了98.75%的准确率，仅使用JS内容就取得了高性能。在部署过程中，AdCPG识别出来自500个域的650个JS文件，这些文件未被任何ATS过滤列表和先前的ATS分类工具检测到。AdCPG在识别ATS资源并提供代码级解释方面发挥了补充作用，从而最大程度地减少了验证ATS分类结果所需的工程工作。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3623084](https://doi.org/10.1145/3576915.3623084)
## Poster: Using CodeQL to Detect Malware in npm.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-using-codeql-to-detect-malware-in-npm) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-using-codeql-to-detect-malware-in-npm)**
### 作者
* Matías F. Gobbi, Bundeswehr University Munich, Munich, Germany
* Johannes Kinder, Ludwig-Maximilians-Universität München (LMU Munich), Munich, Germany
### 摘要
> 恶意包在npm上是一个问题，但像其他恶意软件一样，它们很少是全新的，而是存在着很大的语义相似性。我们提出利用现有的静态分析框架CodeQL来发现npm上的恶意软件；但与其检测漏洞的变种不同，我们使用它来检测恶意软件的变种。我们提出了一种从最近报告的软件包中编写查询的方法，作为定义特定恶意行为的语义签名的一种方式，通过其中的一个查询可以匹配整个恶意软件族群。我们的方法的一个迭代从注册表中发现了125个恶意软件包，而没有产生任何误报。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624401](https://doi.org/10.1145/3576915.3624401)
## Poster: Data Minimization by Construction for Trigger-Action Applications.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-data-minimization-by-construction-for-trigger-action-applications) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-data-minimization-by-construction-for-trigger-action-applications)**
### 作者
* Mohammad M. Ahmadpanah, Chalmers University of Technology, Gothenburg, Sweden
* Daniel Hedin, Chalmers University of Technology & Mälardalen University, Gothenburg, Västerås, Sweden
* Andrei Sabelfeld, Chalmers University of Technology, Gothenburg, Sweden
### 摘要
> 触发-执行平台（TAPs）使应用程序能够集成各种不相关的设备和服务。TAPs的最近功能引入了如IFTTT中的查询等额外的数据来源。当前的TAPs（如IFTTT）要求触发和查询服务向TAP传输过多的用户数据。为了限制数据的量，使执行符合数据最小化原则，输入服务应仅发送必要的数据。LazyTAP通过在TAPs中进行构建，提出了一种新的数据最小化范式，为输入服务的数据收集引入了一种新颖的视角。LazyTAP利用懒惰的特性，在应用程序执行时按属性水平按需获取输入数据，与现有的TAPs的全部推送方法相比，LazyTAP在数据上的粒度更细，从而自然地使多个触发和查询服务最小化，同时保留应用程序的行为。此外，LazyTAP的一个重要优势是对第三方应用程序开发人员来说是无缝的。通过利用懒惰性，LazyTAP推迟计算并代理对象，在幕后加载所需的远程数据。我们在应用程序基准测试中的评估研究显示，LazyTAP平均提高了95%的最小化效果，相比IFTTT和minTAP，性能开销是可以接受的。本海报更详细地介绍了LazyTAP，并阐述了其原型实现。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624376](https://doi.org/10.1145/3576915.3624376)
## Poster: Verifiable Encodings for Maliciously-Secure Homomorphic Encryption Evaluation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-verifiable-encodings-for-maliciously-secure-homomorphic-encryption-evaluation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-verifiable-encodings-for-maliciously-secure-homomorphic-encryption-evaluation)**
### 作者
* Sylvain Chatel, EPFL, Lausanne, Switzerland
* Christian Knabenhans, EPFL, Lausanne, Switzerland
* Apostolos Pyrgelis, EPFL, Lausanne, Switzerland
* Carmela Troncoso, EPFL, Lausanne, Switzerland
* Jean-Pierre Hubaux, EPFL, Lausanne, Switzerland
### 摘要
> 同态加密已经成为保护敏感数据计算隐私的有希望的解决方案。然而，现有的同态加密管道在存在恶意对手的情况下无法保证计算结果的正确性。在本海报中，我们提出了两种与最先进的全同态加密方案兼容的编码，它们能够实现同态计算的实际客户端验证，并且支持现代隐私保护分析所需的所有操作。基于这些编码，我们引入了一个可供使用的库，用于验证对加密数据执行的任何同态操作。我们展示了它在各种应用中的实用性，特别是在某些同态分析中，相比同态加密基线，它可以实现低于3倍的开销的验证

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624403](https://doi.org/10.1145/3576915.3624403)
## Poster: Circumventing the GFW with TLS Record Fragmentation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-circumventing-the-gfw-with-tls-record-fragmentation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-circumventing-the-gfw-with-tls-record-fragmentation)**
### 作者
* Niklas Niere, Paderborn University, Paderborn, Germany
* Sven Hebrok, Paderborn University, Paderborn, Germany
* Juraj Somorovsky, Paderborn University, Paderborn, Germany
* Robert Merget, Technology Innovation Institute, Abu Dhabi, UAE
### 摘要
> 世界各地的国家行为者通过审查HTTPS协议来阻止访问某些网站。虽然许多规避策略只利用了TCP层，但对TLS（HTTPS的复杂协议和组成部分）的分析却没有得到足够重视。与TCP层不同，TLS层上的规避方法不需要获得根权限，因为TLS是在应用层上运行的。通过此提议，我们希望推动对TLS在规避审查技术方面进行更深入的分析。为了证明存在这样的技术，我们将TLS记录分割作为一种新的规避技术，并利用该技术规避中国的防火长城(GFW)。我们希望我们的研究能促进审查和TLS研究人员之间的合作。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624372](https://doi.org/10.1145/3576915.3624372)
## Poster: Generating Experiences for Autonomous Network Defense.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-generating-experiences-for-autonomous-network-defense) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-generating-experiences-for-autonomous-network-defense)**
### 作者
* Andres Molina-Markham, The MITRE Corporation, Bedford, MA, USA
* Luis F. Robaina, The MITRE Corporation, Miami, FL, USA
* Akash H. Trivedi, The MITRE Corporation, McLean, VA, USA
* Derek G. Tsui, The MITRE Corporation, Bedford, MA, USA
* Ahmad Ridley, NSA, Fort Meade, VA, USA
### 摘要
> 强化学习（RL）为发展下一代计算机网络的防御提供了一个有希望的途径。希望通过RL不仅能够自动化网络防御，而且还能发现新颖的解决方案来应对日益增长的网络复杂性和威胁。尽管存在希望，但现有的将RL应用于网络安全的研究工作主要是在小型计算机网络上限定了刚性和狭窄的问题定义进行训练。受到研究启发，这些研究表明开放式学习可以帮助智能体快速适应并推广到以前从未见过的任务，我们假设类似的方法可以为网络防御的实际问题提供一条途径。我们提供了支持这个假设的证据。实现可推广学习的关键要素是我们生成学习智能体的经验的方法 —— 基于任务宇宙，在这种方法下智能体可以学习如何防御越来越复杂的网络。我们展示了RL智能体通过学习解决难度各异的任务可以掌握一个相当复杂的网络防御任务。我们的初步结果显示，除了提高掌握复杂任务的能力外，这种经验生成方式还可能导致更健壮的策略。总的来说，我们的研究证明我们向学习智能体展示的经验集合对于实现高性能至关重要。我们向研究界分享了（i）定义网络防御任务分布的方法，（ii）随着智能体的学习更新任务分布的方法，以及（iii）保持关键任务特征恒定以保留知识的方法。我们的实验基于我们的第二版“自主网络防御先进强化学习框架”（FARLAND），该框架集成了行为表示、动态任务选择以及在仿真和仿真中验证策略的支持。我们希望通过分享我们的想法和结果，促进合作和创新，推动创建越来越复杂的训练网络防御者的场所。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624381](https://doi.org/10.1145/3576915.3624381)
## Poster: From Hashes to Ashes - A Comparison of Transcription Services.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-from-hashes-to-ashes-a-comparison-of-transcription-services) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-from-hashes-to-ashes-a-comparison-of-transcription-services)**
### 作者
* Rudolf Siegel, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Rafael Mrowczynski, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Maria Hellenthal, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Michael Schilling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 近年来，半结构化面谈在网络安全研究中变得越来越重要。将此类面谈的音频记录转录成文字是定性数据分析中的关键步骤，但这也是一项繁重且耗时的任务。虽然外包是一个常见选择，但要保持研究质量需要精确的转录，而技术术语和研究领域的既定表达方式进一步增加了这一任务的难度。在本研究中，我们比较了不同的转录服务，并在网络安全的背景下评估了它们的输出质量。我们的研究结果为研究人员在复杂的转录服务领域提供了见解，为提高定性数据分析的准确性和有效性提供了明智的选择。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624380](https://doi.org/10.1145/3576915.3624380)
## Poster: Mujaz: A Summarization-based Approach for Normalized Vulnerability Description.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-mujaz-a-summarization-based-approach-for-normalized-vulnerability-description) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-mujaz-a-summarization-based-approach-for-normalized-vulnerability-description)**
### 作者
* Hattan Althebeiti, University of Central Florida, Orlando, FL, USA
* Brett Fazio, Two Sigma, New York , NY, USA
* William Chen, Carnegie Mellon University, Pittsburgh, PA, USA
* David Mohaisen, University of Central Florida, Orlando, FL, USA
### 摘要
> 本研究提出了一种多任务自然语言处理（NLP）系统，用于将描述规范化和总结成统一的结构。从官方公共数据库中策划了一个数据集，并将其分解为几个组成实体，代表描述的特定方面。通过独立地和联合地训练模型的注释特征，生成一个简单而统一的摘要。我们还引入了人类度量标准，以评估所生成摘要的质量，包括人类理解和内容准确性方面。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624386](https://doi.org/10.1145/3576915.3624386)
## Poster: Boosting Adversarial Robustness by Adversarial Pre-training.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-boosting-adversarial-robustness-by-adversarial-pre-training) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-boosting-adversarial-robustness-by-adversarial-pre-training)**
### 作者
* Xiaoyun Xu, Radboud University, Nijmegen, Netherlands
* Stjepan Picek, Radboud University, Nijmegen, Netherlands
### 摘要
> Vision Transformer（ViT）在各种任务上展现出卓越的性能，但与其他深度学习技术类似，它容易受到对抗性攻击的影响。由于ViT与传统CNN之间的差异，之前的工作根据ViT的设计，设计了新的对抗训练方法作为防御措施，例如阻塞对单个补丁的注意力或删除具有低注意力的嵌入。然而，这些方法通常关注的是微调阶段或模型本身的训练。如何在预训练阶段改善鲁棒性，特别是减少额外开销的方面，尚未得到深入研究。本文提出了一种新方法Adv-MAE，通过掩盖式对抗预训练来增强对抗鲁棒性，而不降低对干净数据的性能。我们设计了一个简单的方法来为自编码器生成对抗扰动，因为自编码器不提供分类结果。然后，我们使用带有扰动的掩盖输入来对自编码器进行对抗训练。预训练的自编码器可以用来构建具有更好鲁棒性的ViT。我们的实验结果表明，在使用对抗微调时，与非对抗性预训练方法相比，Adv-MAE在对抗攻击下提供了更高的准确性（在CIFAR-10上提高了3.46%，在Tiny ImageNet上提高了1.12%）。它在干净数据上也表现出更高的准确性（在CIFAR-10上提高了4.94%，在Tiny ImageNet上提高了1.74%），这意味着Adv-MAE不会降低对干净输入的性能。此外，掩盖式预训练还显示出每个训练轮次中更低的时间消耗。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624370](https://doi.org/10.1145/3576915.3624370)
## Poster: Vulcan - Repurposing Accessibility Features for Behavior-based Intrusion Detection Dataset Generation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-vulcan-repurposing-accessibility-features-for-behavior-based-intrusion-detection-dataset-generation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-vulcan-repurposing-accessibility-features-for-behavior-based-intrusion-detection-dataset-generation)**
### 作者
* Christian van Sloun, RWTH Aachen University, Aachen, Germany
* Klaus Wehrle, RWTH Aachen University, Aachen, Germany
### 摘要
> 数据集的生成是收集足够行为数据以训练基于主机的入侵检测机器学习模型的最有前途的方法之一。尽管已提出了各种数据集生成方法，但它们往往受限且只能生成网络流量，或仅限于狭窄的应用子集。我们提出了Vulcan，这是一个初步框架，它利用可访问性功能通过模拟用户交互来生成数据集，适用于可扩展的应用程序集。它使用行为配置文件来定义真实的用户行为，并在软件版本更改时方便地执行数据集更新，从而减少了保持数据集相关性所需的工作量。初步结果表明，利用可访问性功能是改善HIDS领域数据集质量的一个有前景的方法。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624404](https://doi.org/10.1145/3576915.3624404)
## Poster: Computing the Persistent Homology of Encrypted Data.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-computing-the-persistent-homology-of-encrypted-data) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-computing-the-persistent-homology-of-encrypted-data)**
### 作者
* Dominic Gold, Florida Atlantic University, Boca Raton, FL, USA
* Koray Karabina, National Research Council Canada & University of Waterloo, Ottawa, ON, Canada
* Francis Motta, Florida Atlantic University, Boca Raton, FL, USA
### 摘要
> 拓扑数据分析（TDA）提供了一套计算工具，用于为高维数据提供量化的形状特征，这些特征可以被现代统计学和预测性机器学习（ML）模型所使用。持续同调（PH）将数据（例如点云、图像、时间序列）转换为持续图（PD），这是其潜在拓扑结构的紧凑表示。由于持续图具有固有的噪声容忍性，可解释性，并为数据分析提供可靠基础，并且可以与广泛的已建立的机器学习模型架构相兼容，因此PH被广泛应用于模型开发，包括敏感数据方面。因此，TDA应该被纳入安全的端到端数据分析流程中。本论文介绍了一种使用同态加密（HE）对加密数据进行持续同调计算的基础算法版本。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624406](https://doi.org/10.1145/3576915.3624406)
## Poster: Attestor - Simple Proof-of-Storage-Time.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-attestor-simple-proof-of-storage-time) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-attestor-simple-proof-of-storage-time)**
### 作者
* Arup Mondal, Ashoka University, Sonipat, India
### 摘要
> 存储时间证明（PoST）是一种密码原语，使得服务器能够以可公开验证的方式演示对外部数据的非交互式持续可用性。在本研究中，我们提出了Attestor，一种无状态透明的存储时间证明方案，具有简单的证明和高效的公开输出验证，在设置阶段不使用陷门并且不产生任何额外开销。我们使用标准的VDF方案和证明聚合来设计我们的PoST协议，即Attestor。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624368](https://doi.org/10.1145/3576915.3624368)
## Poster: Query-efficient Black-box Attack for Image Forgery Localization via Reinforcement Learning.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-query-efficient-black-box-attack-for-image-forgery-localization-via-reinforcement-learning) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-query-efficient-black-box-attack-for-image-forgery-localization-via-reinforcement-learning)**
### 作者
* Xianbo Mo, Guangdong Key Laboratory of Intelligent Information Processing, Shenzhen Key Laboratory of Media Security, Shenzhen University, Shenzhen, China
* Shunquan Tan, Guangdong Key Laboratory of Intelligent Information Processing, Shenzhen Key Laboratory of Media Security, Shenzhen University, Shenzhen, China
* Bin Li, Guangdong Key Laboratory of Intelligent Information Processing, Shenzhen Key Laboratory of Media Security, Shenzhen University, Shenzhen, China
* Jiwu Huang, Guangdong Key Laboratory of Intelligent Information Processing, Shenzhen Key Laboratory of Media Security, Shenzhen University, Shenzhen, China
### 摘要
> 最近，深度学习被广泛应用于取证工具中，用于检测和定位伪造图像。然而，其容易受到对抗性攻击的特点突显了对反取证研究的需求。为了实现这一目标，我们引入了一种创新的、查询高效的黑盒反取证框架，专为生成对抗性伪造图像而设计。该框架使用强化学习范式中的马尔科夫决策过程公式化来模拟在线取证服务的查询动态。我们还引入了一种新颖的奖励函数，该函数根据查询结果与攻击目标之间的分离性来评估攻击的有效性。为了提高这些攻击的查询效率，我们采用了一个演员-评论家算法来最大化累积奖励。实证结果证实了我们提出的方法的有效性。具体而言，它在一系列流行的图像伪造检测器上显示出明显的对抗效果，同时确保结果反取证图像中的视觉可感知失真可忽略不计。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624390](https://doi.org/10.1145/3576915.3624390)
## Poster: Membership Inference Attacks via Contrastive Learning.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-membership-inference-attacks-via-contrastive-learning) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-membership-inference-attacks-via-contrastive-learning)**
### 作者
* Depeng Chen, Anhui University, Hefei, China
* Xiao Liu, Anhui University, Hefei, China
* Jie Cui, Anhui University, Hefei, China
* Hong Zhong, Anhui University, Hefei, China
### 摘要
> 由于机器学习模型通常在有限的数据集上进行训练，所以该模型会多次在相同的数据样本上进行训练，这导致模型会记住大部分训练集数据。成员推理攻击（MIAs）利用这一特性来确定数据样本是否用于训练机器学习模型。然而，在现实场景中，对手很难获取足够的标记准确身份信息的合格样本，尤其是在大多数样本都是非成员的实际应用中。为了解决这个限制，我们在本文中提出了一种新的攻击方法，称为CLMIA，它使用无监督对比学习来训练攻击模型。同时，在CLMIA中，我们只需要少量带有已知成员身份的数据来微调攻击模型。我们使用ROC曲线评估了攻击的性能，显示出与其他方案相比，在低假阳性率下具有更高的真阳性率。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624384](https://doi.org/10.1145/3576915.3624384)
## Poster: Ethics of Computer Security and Privacy Research - Trends and Standards from a Data Perspective.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-ethics-of-computer-security-and-privacy-research-trends-and-standards-from-a-data-perspective) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-ethics-of-computer-security-and-privacy-research-trends-and-standards-from-a-data-perspective)**
### 作者
* Kevin Li, Blue Valley Northwest High School, Overland Park, KS, USA
* Zhaohui Wang, The University of Kansas, Lawrence, KS, USA
* Ye Wang, The University of Kansas, Lawrence, KS, USA
* Bo Luo, The University of Kansas, Lawrence, KS, USA
* Fengjun Li, The University of Kansas, Lawrence, KS, USA
### 摘要
> 伦理是安全研究的重要标准。本研究从数据角度呈现了安全研究人员在应对伦理关切方面所采取的当前状况和趋势。具体而言，我们创建了一个数据集，其中包括2010年至2022年间发表的3,756篇论文，其中963篇论文涉及伦理关切。利用这个数据集，我们回答了以下三个问题，以了解当前实践和趋势：（1）安全研究中的伦理考虑情况如何？例如，在多少安全研究项目中引起了伦理关切，哪些研究领域可能引发伦理风险和关切？（2）目前如何处理这些伦理风险的实践是什么？（3）影响研究人员伦理意识的重要因素是什么？

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624378](https://doi.org/10.1145/3576915.3624378)
## Poster: RPAL-Recovering Malware Classifiers from Data Poisoning using Active Learning.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-rpal-recovering-malware-classifiers-from-data-poisoning-using-active-learning) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-rpal-recovering-malware-classifiers-from-data-poisoning-using-active-learning)**
### 作者
* Shae McFadden, King's College London, London, United Kingdom
* Zeliang Kan, King's College London & University College London, London, United Kingdom
* Lorenzo Cavallaro, University College London, London, United Kingdom
* Fabio Pierazzi, King's College London, London, United Kingdom
### 摘要
> 直观上，被毒化的机器学习（ML）模型在再训练过程中可能会忘记其对抗性操纵。然而，我们能否量化模型恢复所需的时间？从对抗的角度来看，少量的毒化是否足以迫使防御者随着时间的推移进行更多的重新训练？本海报论文提出了一个名为RPAL的新框架，以回答这些问题，该框架是针对恶意软件检测领域的。为了量化恢复过程，我们提出了两个新指标：拦截点，即被毒化模型和原始模型性能相交的第一次时间；恢复率，即拦截点之后，毒化模型的性能在接近原始模型性能的容差范围内的时间百分比。我们在Android恶意软件数据集（2014-2016年）上进行实验，使用基于Drebin和MaMaDroid的两种特征抽象方法，结合不确定性采样主动学习（重新训练）和标签翻转（毒化）。我们利用引入的参数和指标来展示：（i）主动学习和毒化率如何影响恢复过程；（ii）特征表示对恢复的影响。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624391](https://doi.org/10.1145/3576915.3624391)
## Poster: Combining Fuzzing with Concolic Execution for IoT Firmware Testing.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-combining-fuzzing-with-concolic-execution-for-iot-firmware-testing) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-combining-fuzzing-with-concolic-execution-for-iot-firmware-testing)**
### 作者
* Jihyeon Yu, Sejong University, Seoul, Republic of Korea
* Juhwan Kim, Sejong University, Seoul, Republic of Korea
* Yeohoon Yun, Sejong University, Seoul, Republic of Korea
* Joobeom Yun, Sejong University, Seoul, Republic of Korea
### 摘要
> 物联网设备的供应年复一年地增加。即使是在需要精细处理的行业（如无人驾驶、建筑和机器人行业），也在使用物联网设备。然而，由于物联网设备种类繁多且执行困难的固件环境，其安全性滞后于此发展。现有的解决方法包括直接设备连接或部分仿真。然而，对于大规模分析而言，全系统仿真更适用，因为它可以在不需要设备的情况下测试多个固件。因此，最近的研究已经将仿真和软件测试技术（如模糊测试）结合起来，但仍不适用于测试各种固件且效率低下。在本篇海报中，我们提出了FirmColic，结合了模糊测试和共形执行，以克服这些限制。FirmColic是一种增强型进程仿真，通过基于共形执行的关键字提取提高了模糊测试的效果。此外，我们在增强型进程仿真环境中应用了五种仲裁技术，以获得仿真的高成功率。我们证明了FirmColic相比之前的研究具有更快的检测速度、更多的崩溃检测和更高的代码覆盖率。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624373](https://doi.org/10.1145/3576915.3624373)
## Poster: Efficient AES-GCM Decryption Under Homomorphic Encryption.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-efficient-aes-gcm-decryption-under-homomorphic-encryption) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-efficient-aes-gcm-decryption-under-homomorphic-encryption)**
### 作者
* Ehud Aharoni, IBM Research, Haifa, Israel
* Nir Drucker, IBM Research, Haifa, Israel
* Gilad Ezov, IBM Research, Haifa, Israel
* Eyal Kushnir, IBM Research, Haifa, Israel
* Hayim Shaul, IBM Research, Haifa, Israel
* Omri Soceanu, IBM Research, Haifa, Israel
### 摘要
> 利用同态加密（HE），可以将计算委托给不受信任的第三方，并保持数据的机密性。然而，在许多情况下，数据使用另一种加密方案（如AES-GCM）进行加密。混合加密（又称为转换加密）是一种允许在加密系统之间切换的技术，目前存在两个主要缺点：1）缺乏对称解密在完全同态加密下的标准化或性能低劣；2）缺乏输入数据的完整性。我们报道了首个基于CKKS实现的AES-GCM解密方法，此方法是标准化且常用的对称加密在同态加密中的最快实现，同时还提供完整性验证。我们的解决方案打开了实施端到端方案的大门，例如依赖于AES-GCM加密输入的加密深度神经网络。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624377](https://doi.org/10.1145/3576915.3624377)
## Poster: Multi-target & Multi-trigger Backdoor Attacks on Graph Neural Networks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-multi-target-multi-trigger-backdoor-attacks-on-graph-neural-networks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-multi-target-multi-trigger-backdoor-attacks-on-graph-neural-networks)**
### 作者
* Jing Xu, Delft University of Technology, Delft, Netherlands
* Stjepan Picek, Radboud University & Delft University of Technology, Nijmegen, Netherlands
### 摘要
> 最近的研究表明，图神经网络（GNN）容易受到后门攻击的影响，并且现有的研究主要关注单一目标的单一后门攻击。本文探讨了两种高级后门攻击方式，即多目标和多触发后门攻击对GNN的影响：1）一对N攻击，通过控制不同值的触发器来触发多个后门目标；2）N对一攻击，只有当所有N个触发器同时出现时，才会触发攻击。初步实验结果表明，这两种攻击方式对于节点分类任务在GNN上可以实现较高的攻击成功率（高达99.72%）。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624387](https://doi.org/10.1145/3576915.3624387)
## Poster: Longitudinal Analysis of DoS Attacks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-longitudinal-analysis-of-dos-attacks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-longitudinal-analysis-of-dos-attacks)**
### 作者
* Fabian Kaiser, ATHENE, Fraunhofer SIT, Darmstadt, Germany
* Haya Shulman, ATHENE, Fraunhofer SIT, Goethe University Frankfurt, Darmstadt and Frankfurt, Germany
* Michael Waidner, ATHENE, Fraunhofer SIT, Technical University of Darmstadt, Darmstadt, Germany
### 摘要
> 拒绝服务（DoS）攻击已经成为当今数字世界中的常见事情。通过下载易于使用的攻击软件并在暗网中以低廉的价格租用僵尸网络服务，敌对势力可以进行此类攻击，而无需详尽了解相关技术。为了调查这一威胁，我们对2015年1月1日至2022年12月31日期间发生的DoS攻击进行了研究。我们收集了有关受害者以及攻击的具体方式的统计数据。此外，我们展示了此类攻击对关键互联网基础设施可能产生的副作用。这项研究提供了有趣的洞察和观察结果，并对于开发缓解DoS攻击的防御策略的研究人员和专家具有实用意义。因此，我们公开提供我们的数据集。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624382](https://doi.org/10.1145/3576915.3624382)
## Poster: The Risk of Insufficient Isolation of Database Transactions in Web Applications.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-the-risk-of-insufficient-isolation-of-database-transactions-in-web-applications) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-the-risk-of-insufficient-isolation-of-database-transactions-in-web-applications)**
### 作者
* Simon Koch, TU Braunschweig, Braunschweig, Germany
* Malte Wessels, TU Braunschweig, Braunschweig, Germany
* David Klein, TU Braunschweig, Braunschweig, Germany
* Martin Johns, TU Braunschweig, Braunschweig, Germany
### 摘要
> Web应用程序常使用数据库进行持久性操作，但由于竞争条件而暴露安全漏洞。通常接受的解决此问题的方法是将相关的数据库操作包含在事务中。然而，仅依赖事务隔离相互竞争的数据库交互往往是不可靠的。虽然事务的精确隔离属性取决于数据库管理系统（DBMS）的配置，但常见DBMS的默认配置会使事务受到异常的影响，从而使其保护毫无价值。我们对常见DBMS的行为进行了全面的概述，并表明它们的默认设置不足以提供全面的保护。此外，我们对使用SQL的4,222个开源PHP应用程序的事务和隔离配置调整进行了初步研究，发现有2,789个事务和仅418个隔离调整指标。我们的发现表明，竞态条件是一个被低估的漏洞类型，而隔离调整过于罕见，以至于事务不能可靠地提供足够的保护。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624394](https://doi.org/10.1145/3576915.3624394)
## Poster: Privacy Risks from Misconfigured Android Content Providers.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-privacy-risks-from-misconfigured-android-content-providers) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-privacy-risks-from-misconfigured-android-content-providers)**
### 作者
* Christopher Lenk, Zentrale Stelle für Informationstechnik im Sicherheitsbereich (ZITiS), Munich, Germany
* Johannes Kinder, Ludwig-Maximilians-Universität München (LMU Munich), Munich, Germany
### 摘要
> Android应用程序记录和处理个人用户数据，并且可以通过内容提供者在彼此之间共享。虽然通过多种机制进行了访问保护，但意外的配置错误可能允许攻击者访问或修改私人应用程序数据。在这项工作中，我们通过对1440万个Android应用程序进行系统研究，研究了内容提供者如何保护私人数据。我们使用静态分析逐步减少目标应用程序集合的方法来识别潜在的易受攻击的应用程序。通过使用自定义攻击应用程序，我们可以实际确认数据泄露，并成功访问包含隐私敏感信息的数据。我们得出结论，这指向了设计安全的Android应用程序中的一个固有问题，并讨论可能的缓解措施。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624389](https://doi.org/10.1145/3576915.3624389)
## Poster: Bridging Trust Gaps: Data Usage Transparency in Federated Data Ecosystems.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-bridging-trust-gaps-data-usage-transparency-in-federated-data-ecosystems) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-bridging-trust-gaps-data-usage-transparency-in-federated-data-ecosystems)**
### 作者
* Johannes Lohmöller, RWTH Aachen University, Aachen, Germany
* Eduard Vlad, RWTH Aachen University, Aachen, Germany
* Markus Dahlmanns, RWTH Aachen University, Aachen, Germany
* Klaus Wehrle, RWTH Aachen University, Aachen, Germany
### 摘要
> 数据生态系统（DEs）不断发展的格局越来越需要综合和协作的数据共享机制，同时确保数据主权。然而，最近提出的联邦平台（例如，Gaia-X）只能在已经建立信任的参与者之间共享数据，但仍然缺乏建立和维护信任的功能。为了解决这个问题，我们提出了用于数据使用的透明度日志，以回顾性地建立参与者之间的信任。受证书透明度日志的启示，在公钥基础设施中成功弥合了信任差距，我们为数据所有者提供了可靠的数据使用证据。我们展示了我们的数据使用透明度日志在大型DEs中的可扩展性。因此，它们是一种有前景的方法，可以通过加密保证在联邦DEs中弥合信任差距，促进更强大的数据共享。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624371](https://doi.org/10.1145/3576915.3624371)
## Poster: Panacea - Stateless and Non-Interactive Oblivious RAM.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-panacea-stateless-and-non-interactive-oblivious-ram) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-panacea-stateless-and-non-interactive-oblivious-ram)**
### 作者
* Kelong Cong, KU Leuven, Leuven, Belgium
* Debajyoti Das, KU Leuven, Leuven, Belgium
* Georgio Nicolas, KU Leuven, Leuven, Belgium
* Jeongeun Park, KU Leuven, Leuven, Belgium
### 摘要
> 忘记性RAM（ORAM）允许客户将数据库存储外包给远程服务器，同时隐藏数据访问模式。现有设计使用非线性数据结构（例如树或分层结构），并遵循在线离线范式。客户端在在线阶段提交查询，然后查询在离线（驱逐）阶段被“刷新”。这种设计是交互式的，需要多轮客户-服务器通信，无论是在线、离线还是两个阶段都是如此。此外，客户端还必须维护一个依赖于数据库状态的内部状态。我们提出了Panacea：一种基于FHE技术的ORAM新设计，它使用线性数据结构而不具备状态，是非交互式的，在O(1)带宽膨胀的情况下实现，并且不需要离线阶段。在我们的设计中，服务器被假定比客户端更加资源丰富，这在云计算领域通常是这样。从这个意义上说，我们将所有计算开销都转移到服务器上，只要求客户端执行加密和解密。在相互作用方面，这种新的范式与任何纯文本云存储解决方案几乎完全相同。这使得ORAM成为远程存储服务（如存储桶、密码管理器等）的隐私增强型替代解决方案。在我们简单设计的基础上，我们展示了如何使用概率批处理码在摊还设置中将服务器性能提升三个数量级。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624388](https://doi.org/10.1145/3576915.3624388)
## Poster: Backdoor Attack on Extreme Learning Machines.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-backdoor-attack-on-extreme-learning-machines) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-backdoor-attack-on-extreme-learning-machines)**
### 作者
* Behrad Tajalli, Radboud University, Nijmegen, Netherlands
* Gorka Abad, Radboud University & Ikerlan Research Centre, Nijmegen, Netherlands
* Stjepan Picek, Radboud University, Nijmegen, Netherlands
### 摘要
> 深度神经网络（DNNs）通过在大型数据集上进行昂贵的训练而实现顶级性能。在某些场景下，例如物联网或医疗保健，可能无法获得这些资源。极端学习机（ELMs）旨在通过使用单层网络减少训练资源来缓解这个问题。当前的研究发现DNNs容易受到安全和隐私威胁，网络故障或训练数据泄露都可能发生。由于对ELMs越来越关注，并且缺乏对其安全性的研究调查，我们研究了这种类型网络的安全影响。准确地说，我们研究了ELMs中的后门攻击。我们创建了一个全面的实验设置来评估它们在各种数据集和场景中的安全性。我们得出结论，ELMs容易受到后门攻击，攻击成功率高达97％。此外，我们改进并评估了对ELMs的精调使用。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624369](https://doi.org/10.1145/3576915.3624369)
## Poster: Accountable Processing of Reported Street Problems.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-accountable-processing-of-reported-street-problems) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-accountable-processing-of-reported-street-problems)**
### 作者
* Roman Matzutt, RWTH Aachen University, Aachen, Germany
* Jan Pennekamp, RWTH Aachen University, Aachen, Germany
* Klaus Wehrle, RWTH Aachen University, Aachen, Germany
### 摘要
> 越来越多的市政机构依赖于市民提交关于路面坑洞或非法倾倒垃圾等问题的数字报告，以提高其应对时间。然而，负责部门可能会有激励忽略某些报告，例如，在解决这些问题时需要付出高昂的成本。在��研究中，我们探索了区块链技术在监督相关报告方面的适用性。我们的初步评估表明，我们的方法可以在未来受益于市民和相关部门。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624367](https://doi.org/10.1145/3576915.3624367)
## Poster: WIP: Account ZK-Rollups from Sumcheck Arguments.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-wip-account-zk-rollups-from-sumcheck-arguments) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-wip-account-zk-rollups-from-sumcheck-arguments)**
### 作者
* Rex Fernando, Carnegie Mellon University, Pittsburgh, PA, USA
* Arnab Roy, Mysten Labs, Palo Alto, CA, USA
### 摘要
> 传统区块链通过共识机制来执行交易，以确保合理的完整性和最终性。然而，往往这些机制产生成本，使得交易吞吐量比其Web2的对应物慢上数个数量级。为了解决这个缺点，所谓的第二层(L2层)将交易从主链(L1)卸载，快速执行这些交易，并通过简洁的检查点提供这些交易结果的锚定。随着被称为ZK-Rollups的方法不断发展，使用压缩的加密证明确保这些检查点的完整性变得越来越吸引人。然而，通用SNARKs的使用仍然存在效率问题。我们定义了一个简单但普遍存在的账户完整性约束，根据一系列交易设计了一个ZK-Rollup用于交易完整性，利用其简单结构并提供了吸引人的效率优势。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624405](https://doi.org/10.1145/3576915.3624405)
## Poster: Signer Discretion is Advised: On the Insecurity of Vitalik's Threshold Hash-based Signatures.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-signer-discretion-is-advised-on-the-insecurity-of-vitaliks-threshold-hash-based-signatures) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-signer-discretion-is-advised-on-the-insecurity-of-vitaliks-threshold-hash-based-signatures)**
### 作者
* Mario Yaksetig, University of Porto, Porto, Portugal
* Alexander Havlin, University of Manchester, Manchester, United Kingdom
### 摘要
> 我们表明，Vitalik Buterin提出的Lamport阈值签名方案在选择消息攻击（EU-CMA）下不具备存在性无法伪造性。在这项研究中，我们对提出的阈值哈希签名方案进行了形式化，并展示了一种攻击，导致安全性降低了60位。我们的攻击在一个恶意对手（共识轮次的领导者）存在的情况下，几秒钟内完成，从而对声称即使在96个恶意串通的参与者（总共256个）中，对手只能对大约280个可能值中的1个进行签名的说法产生了矛盾。总结起来，对提出的阈值签名方案的原始估计安全性分析声称能够抵御控制整个比特币网络连续工作约一年时间的对手。然而，我们的攻击只需用一台普通笔记本电脑几秒钟就能完成。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624393](https://doi.org/10.1145/3576915.3624393)
## Poster: Longitudinal Measurement of the Adoption Dynamics in Apple's Privacy Label Ecosystem.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-longitudinal-measurement-of-the-adoption-dynamics-in-apples-privacy-label-ecosystem) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-longitudinal-measurement-of-the-adoption-dynamics-in-apples-privacy-label-ecosystem)**
### 作者
* David G. Balash, University of Richmond, Richmond, VA, USA
* Mir Masood Ali, University of Illinois Chicago, Chicago, IL, USA
* Monica Kodwani, The George Washington University, Washington, DC, USA
* Xiaoyuan Wu, Carnegie Mellon University, Pittsburgh, PA, USA
* Chris Kanich, University of Illinois Chicago, Chicago, IL, USA
* Adam J. Aviv, The George Washington University, Washington, DC, USA
### 摘要
> 这项研究报告了iOS应用商店的隐私标签采用动态的大规模纵向分析，测量了该生态系统在2020年12月启动后两年半达到成熟的过程。研究的动机是为了揭示影响隐私标签变化的因素，并提供应用程序标签何时以及如何变化的见解。通过在一年多的时间里几乎每周采集超过160万款应用的快照，我们分析了隐私标签采用的动态以及报告标签的准确性。我们对74.5%的应用在两年后采用标签进行的分析，为这个成熟的生态系统提供了重要的背景，其中标签正在成为标准。然而，我们发现有令人信服的证据表明，标签可能不能完全捕捉行为，因为28.9%的应用表明没有数据收集，并且自愿采用和强制采用之间的分布差异很大。一旦设置，标签很少更改，但新增的标签反映了更多的数据收集。除了我们的测量之外，我们还计划发布一个新的（并不断增长的）数据集，可供未来的研究人员使用。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624383](https://doi.org/10.1145/3576915.3624383)
## Poster: Towards a Dataset for the Discrimination between Warranted and Unwarranted Emails.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-towards-a-dataset-for-the-discrimination-between-warranted-and-unwarranted-emails) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-towards-a-dataset-for-the-discrimination-between-warranted-and-unwarranted-emails)**
### 作者
* Eric Burton Samuel Martin, Colorado State University, Fort Collins, CO, USA
* Hossein Shirazi, San Deigo State University, San Diego, CA, USA
* Indrakshi Ray, Colorado State University, Fort Collins, CO, USA
### 摘要
> 在这项研究中，我们讨论的主要问题是垃圾邮件/非垃圾邮件（非垃圾邮件）分类的过于泛化的观点。尽管垃圾邮件分类的复杂性，但依赖用户反馈可能会不经意地使过滤器出现误将合法和恶意邮件错分的情况，因为用户往往倾向于将无害商业邮件标记为垃圾邮件而不是取消订阅。当前的垃圾邮件数据集倾向于包括这种用户标记的垃圾邮件，这可能导致进一步的分类错误，使过滤器对合理的商业通信存在偏见。为了解决这个问题，我们引入了两个新的分类类别，更深入地研究了垃圾邮件的细微差别。'合理的垃圾邮件'指的是来自可信源、具有透明和安全的退出机制的共识性通信，而'不合理的垃圾邮件'则描述了经常是恶意性质的未经请求的信息。利用这些分类，我们提出了一种创新而动态的'合理的垃圾邮件'数据集，旨在为研究人员开发更复杂的垃圾邮件过滤技术铺平道路。此外，我们的研究探索了机器学习和自然语言处理的先驱方法，发掘了我们数据集的潜力。我们工作的总体愿景是增强在线安全性，保护品牌完整性，并优化用户体验和电子邮件营销活动的效果。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624397](https://doi.org/10.1145/3576915.3624397)
## Poster: Cybersecurity Usage in the Wild: A look at Deployment Challenges in Intrusion Detection and Alert Handling.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-cybersecurity-usage-in-the-wild-a-look-at-deployment-challenges-in-intrusion-detection-and-alert-handling) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-cybersecurity-usage-in-the-wild-a-look-at-deployment-challenges-in-intrusion-detection-and-alert-handling)**
### 作者
* Wyatt Sweat, Virginia Tech, Blacksburg, VA, USA
* Danfeng (Daphne) Yao, Virginia Tech, Blacksburg, VA, USA
### 摘要
> 我们研究了网络安全从业人员在日常活动中面临的挑战，采用了一种调查和半导向式访谈进行数据收集。从业者报告了威胁的频率和程度以及其他因素，如疲劳。这些因素观察到随着组织规模和领域（例如，医疗，电子商务）的

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624375](https://doi.org/10.1145/3576915.3624375)
## Poster: Towards Lightweight TEE-Assisted MPC.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-towards-lightweight-tee-assisted-mpc) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-towards-lightweight-tee-assisted-mpc)**
### 作者
* Wentao Dong, City University of Hong Kong, Hong Kong, China
* Cong Wang, City University of Hong Kong, Hong Kong, China
### 摘要
> 这项工作介绍了HPCG（硬件辅助伪随机相关生成器）——一种正在进行中的轻量级TEE（LTEE）辅助MPC解决方案，旨在实现高性能和强安全性。HPCG依赖于简明的代码库和小型LTEE芯片，仅在MPC离线阶段工作，旨在解决传统MPC中的效率瓶颈，同时最大限度地减少对安全硬件的使用和信任，以在纯密码学和TEE技术之间进行合理的折衷。我们设计HPCG以适用于预处理模型中的各种MPC设置，并符合主流的秘密共享语义，使其易于部署和集成到现有的MPC实践中。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624398](https://doi.org/10.1145/3576915.3624398)
## Poster: Fooling XAI with Explanation-Aware Backdoors.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-fooling-xai-with-explanation-aware-backdoors) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-fooling-xai-with-explanation-aware-backdoors)**
### 作者
* Maximilian Noppel, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Christian Wressnegger, Karlsruhe Institute of Technology, Karlsruhe, Germany
### 摘要
> 近年来，机器学习模型中可学习参数的过多使其变得难以理解。即使是开发者也无法准确解释它们的内部工作原理。因此，研究人员开发了解释算法来揭示模型的决策过程。解释可以确定模型决策的关键因素。因此，人们寄希望于解释来解决偏见、虚假相关性等问题，尤其是神经后门等攻击问题。在本文中，我们提出了一种具有解释感知特性的后门攻击方法，它可以在触发条件下同时欺骗模型的决策和解释算法。因此，解释感知后门可以绕过基于解释的检测技术，并对人类分析师进行“误导”。虽然我们在原始研究《使用解释感知后门伪装攻击》中提出了成功的解释感知后门攻击方法，在本文中，我们对数据集《德国交通标志识别基准》(GTSRB)进行了简要概述并着重评估了与原始论文不同的触发器和目标解释，并提供了GradCAM解释的结果。补充材料可在https://intellisec.de/research/xai-backdoor上公开获取。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624379](https://doi.org/10.1145/3576915.3624379)
## Poster: Metadata-private Messaging without Coordination.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-metadata-private-messaging-without-coordination) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-metadata-private-messaging-without-coordination)**
### 作者
* Peipei Jiang, Wuhan University & City University of Hong Kong, Wuhan, China
* Qian Wang, Wuhan University, Wuhan, China
* Yihao Wu, Wuhan University, Wuhan, China
* Cong Wang, City University of Hong Kong, Hong Kong, Hong Kong
### 摘要
> 元数据私密消息（MPM）是指一种端到端加密的消息传递系统，不仅保护有效负载消息，还保护揭示用户身份、对话频率、流量等的通信元数据的隐私。由于存在可以监视甚至积极干扰通信的全局对手，保护通信元数据是具有挑战性的。像Tor这样的现有系统在这种对抗模型下是不足够的。因此，许多学术系统已经提出在安全性、性能和信任假设之间进行不同权衡以推动这一前沿。尽管取得了进展，几乎在所有先前技术中普遍存在的一个主要限制是要求消息伙伴协调时间（也称为“拨号”）来开始对话。与传统的消息传递系统相比，这种协调协议（还必须是元数据私密的）对用户采用和服务运营来说代价高昂。在这项进行中的研究中，我们计划开发一种新的无需协调的MPM系统。与先前的技术不同，我们计划将MPM系统建模为两个独立模块：元数据私密通知和元数据私密消息检索，这是受传统消息传递系统启发的直观想法。我们将通过借鉴最近关于私密信号、遗忘消息检索和基于硬件信任的MPM的研究成果来推行这些想法。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624385](https://doi.org/10.1145/3576915.3624385)
## Poster: Control-Flow Integrity in Low-end Embedded Devices.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-control-flow-integrity-in-low-end-embedded-devices) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-control-flow-integrity-in-low-end-embedded-devices)**
### 作者
* Sashidhar Jakkamsetti, University of California, Irvine, Irvine, CA, USA
* Youngil Kim, University of California, Irvine, Irvine, CA, USA
* Andrew Searles, University of California, Irvine, Irvine, CA, USA
* Gene Tsudik, University of California, Irvine, Irvine, CA, USA
### 摘要
> 嵌入式、智能和物联网设备在许多日常环境中越来越受欢迎。由于低端设备具有最严格的成本约束，它们往往缺乏安全功能。这使得它们成为攻击和恶意软件攻击的目标。先前的研究提出了各种安全架构，用于对资源受限设备强制执行安全属性，例如通过远程认证（ℜA）。这些技术可以（静态地）验证远程设备的软件完整性并检测到受损。然而，运行时（动态）安全，例如通过控制流完整性（CFI），难以实现。本研究构建了一个架构，以确保针对运行时攻击（例如返回导向编程（ROP））的软件执行完整性。它建立在最近提出的CASU之上，CASU是一个低成本主动信任根（RoT），可以保证软件的不变性。我们扩展了CASU以支持阴影栈和CFI监视器，以减轻运行时攻击。这在一定程度上证明了即使在低端设备上，也能够实现CFI，并且硬件开销最小。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624374](https://doi.org/10.1145/3576915.3624374)
## Poster: Generic Multidimensional Linear Cryptanalysis of Feistel Ciphers.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-generic-multidimensional-linear-cryptanalysis-of-feistel-ciphers) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-generic-multidimensional-linear-cryptanalysis-of-feistel-ciphers)**
### 作者
* Betül Askin Özdemir, KU Leuven, Leuven, Belgium
* Tim Beyne, KU Leuven, Leuven, Belgium
### 摘要
> 该海报介绍了一种对Feistel密码的新型通用攻击方法，该方法仅在轮函数的输入处进行密钥加法。这种特征导致了一种特定的漏洞，可以利用多维线性密码分析进行利用。具体而言，我们的方法涉及使用密钥独立线性轨迹，以便计算明文和密文组合的分布，使得可以使用似然比检验作为区分器。我们提供了我们通用攻击的理论成本估计，并通过将攻击应用于CAST-128和LOKI91进行了实证验证。理论和实证研究结果表明，所提出的攻击在几个有趣情况下显著减少了数据或时间复杂度。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624365](https://doi.org/10.1145/3576915.3624365)
## Poster: Secure and Differentially Private kth Ranked Element.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-secure-and-differentially-private-kth-ranked-element) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-secure-and-differentially-private-kth-ranked-element)**
### 作者
* Gowri R Chandran, Technical University Darmstadt, Darmstadt, Germany
* Philipp-Florens Lehwalder, Technical University Darmstadt, Darmstadt, Germany
* Leandro Rometsch, Technical University Darmstadt, Darmstadt, Germany
* Thomas Schneider, Technical University Darmstadt, Darmstadt, Germany
### 摘要
> 寻找第k个排名元素（KRE）的问题在金融和医疗机构的协作研究中具有特殊的意义。KRE应用的许多情况涉及需要保护的敏感信息。Chandran等人（SECRYPT'22）的协议考虑了一种模型，其中多个方参与者拥有包含许多元素的数据集，并希望计算它们共同数据集的第k个元素。在他们的模型中，所有参与方与中央参与方在星型网络拓扑中进行交互。然而，他们向中央方泄露了一些中间信息。在本研究中，我们使用差分隐私技术来隐藏这种泄露。我们使用拉普拉斯机制引入差分隐私噪声，并使用S形缩放来提高协议的准确性。我们证明我们的修改对准确性只有很小的影响。我们还给出了实验性能结果，并将我们的工作与先前的KRE研究进行了比较。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624392](https://doi.org/10.1145/3576915.3624392)
## Poster: Towards Practical Brainwave-based User Authentication.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-towards-practical-brainwave-based-user-authentication) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-towards-practical-brainwave-based-user-authentication)**
### 作者
* Matin Fallahi, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Patricia Arias-Cabarcos, Paderborn University, Paderborn, Germany
* Thorsten Strufe, Karlsruhe Institute of Technology, Karlsruhe, Germany
### 摘要
> 脑电测量设备已经从专门的医疗工具转变为用户友好且经济易得的消费产品。这一转变为普适服务开辟了新的途径，涵盖脑机接口（BCI）、疾病检测、刑事审判，尤其是计算机安全中的身份验证。脑电图（EEG）信号，难以窃取且可撤销，是一种具有吸引力的生物特征选项。然而，这些信号的实际部署受到安全威胁、可用性问题和隐私担忧的阻碍。为此，我们期望利用消费级设备改善身份验证系统的整体性能，更好地了解用户对这种身份验证方式的态度，并保护用户的隐私，防止在注册和验证过程中未经授权使用收集到的样本。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624399](https://doi.org/10.1145/3576915.3624399)
## Poster: A Privacy-Preserving Smart Contract Vulnerability Detection Framework for Permissioned Blockchain.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-a-privacy-preserving-smart-contract-vulnerability-detection-framework-for-permissioned-blockchain) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-a-privacy-preserving-smart-contract-vulnerability-detection-framework-for-permissioned-blockchain)**
### 作者
* Wensheng Tian, Nanhu Lab, Jiaxing, China
* Lei Zhang, Nanhu Lab, Jiaxing, China
* Shuangxi Chen, Jiaxing Vocational and Technical College, Jiaxing, China
* Hu Wang, Zhejiang Big Data Development Administration, Hangzhou, China
* Xiao Luo, Zhejiang University, Hangzhou, China
### 摘要
> 目前广泛部署的两种主要类型的区块链是公共区块链和权限区块链。进行的区块链漏洞检测研究主要面向公共区块链。对于权限区块链的独特需求给予的考虑较少，不能直接迁移到权限区块链的应用场景中。权限区块链部署在经过验证的组织之间，它的智能合约可能包含诸如合约的交易流程、交易算法等敏感信息。这些敏感信息可以被视为智能合约本身的私密信息，应该对区块链之外的用户保密。本文提出了一个隐私保护智能合约漏洞检测框架。该框架利用区块链和机密计算技术，实现对权限区块链智能合约的漏洞检测，同时保护智能合约的隐私。该框架还能保护漏洞检测模型所有者的利益。我们在机密计算环境中对我们的框架进行了实验验证，验证了其检测性能。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624366](https://doi.org/10.1145/3576915.3624366)
## Poster: The Unknown Unknown: Cybersecurity Threats of Shadow IT in Higher Education.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-the-unknown-unknown-cybersecurity-threats-of-shadow-it-in-higher-education) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-the-unknown-unknown-cybersecurity-threats-of-shadow-it-in-higher-education)**
### 作者
* Jan-Philip van Acken, Utrecht University, Utrecht, Netherlands
* Joost F. Gadellaa, Coöperatie SURF U.A., Utrecht, Netherlands
* Slinger Jansen, Utrecht University, Utrecht, Netherlands
* Katsiaryna Labunets, Utrecht University, Utrecht, Netherlands
### 摘要
> 员工引入IT解决方案的数量不断增长，为网络安全管理人员和IT管理员带来了新的攻击向量和挑战。这些未经授权的硬件、软件或服务被称为影子IT。在高等教育领域，由于研究人员、教育工作者和学生的灵活需求，影子IT的多样性更加突出。我们通过对11名IT和安全专家的访谈，研究了高等教育中的影子IT和相关网络威胁。我们的研究结果提供了观察到的影子IT类型和相关网络威胁的综合概述。研究结果显示，流行的影子IT包括使用过时软件和可见性差所带来的云服务和自行获取的软件。我们的研究结果为从业人员提供了建议：以网络安全最佳实践负责管理影子IT，考虑相关利益相关者的需求，支持教育工作者和研究人员，并提供易用的IT解决方案。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624395](https://doi.org/10.1145/3576915.3624395)
## Poster: Detecting Adversarial Examples Hidden under Watermark Perturbation via Usable Information Theory.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-detecting-adversarial-examples-hidden-under-watermark-perturbation-via-usable-information-theory) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-detecting-adversarial-examples-hidden-under-watermark-perturbation-via-usable-information-theory)**
### 作者
* Ziming Zhao, Zhejiang University, Hangzhou, China
* Zhaoxuan Li, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Tingting Li, Zhejiang University, Hangzhou, China
* Zhuoxue Song, Zhejiang University, Hangzhou, China
* Fan Zhang, Zhejiang University, Hangzhou, China
* Rui Zhang, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
### 摘要
> 图片水印是一种广泛用于版权保护的技术。最近的研究表明，可以将图像水印作为一种噪声添加到清晰图像中，以欺骗深度学习模型。然而，先前的对抗示例（AE）检测方案往往不够有效，因为水印标志与典型的噪声扰动不同。在本海报中，我们提出了一种名为Themis的新型AE检测方法，可以对水印扰动进行检测。与以前的方法不同，Themis既不修改受保护的分类器，也不需要了解生成AE的过程。具体而言，Themis利用可用信息理论计算逐点评分，从而发现可能是水印AEs的那些实例。涉及5种不同的logo水印扰动的实证评估证明了所提出的方案可以高效地检测AEs，并且在准确度上明显优于五种领先的检测方法（超过15%的准确度）。可视化结果显示，我们的检测度量在AEs和非AEs之间更具区分性。同时，Themis以门限恢复的方式实现了更大的曲线下面积（AUC），仅引入约0.04秒的开销。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624396](https://doi.org/10.1145/3576915.3624396)
## Poster: Unveiling the Impact of Patch Placement: Adversarial Patch Attacks on Monocular Depth Estimation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-unveiling-the-impact-of-patch-placement-adversarial-patch-attacks-on-monocular-depth-estimation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-unveiling-the-impact-of-patch-placement-adversarial-patch-attacks-on-monocular-depth-estimation)**
### 作者
* Gyungeun Yun, Korea University, Seongbuk-gu, South Korea
* Kyungho Joo, Korea University, Seongbuk-gu, South Korea
* Wonsuk Choi, Korea University, Seongbuk-gu, South Korea
* Dong Hoon Lee, Korea University, Seongbuk-gu, South Korea
### 摘要
> 对于自动驾驶系统来说，相机和激光雷达传感器是必要的设备，它们通过提供精确的深度信息来识别物体的位置和大小。此外，深度学习的最新进展扩展了它们的功能，包括单目相机设置用于深度估计。与传统设备如激光雷达或立体相机相比，单目相机能够以较低的成本进行深度估计。已知，对于单目相机的深度估计模型容易受到对抗性示例的攻击。然而，大多数针对单目深度估计的对抗攻击都是在目标物体上安放有针对性的补丁。已知，在攻击成功率方面，针对性补丁优于放置在目标物体后方的相邻和远程补丁。然而，相邻和远程补丁可以提供更高的灵活性，因为它们可以被放置在目标物体范围之外。本文实验证实，补丁的放置方式对攻击成功率有显著影响，特别是在特定区域。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624400](https://doi.org/10.1145/3576915.3624400)
## Poster: Verifiable Data Valuation with Strong Fairness in Horizontal Federated Learning.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-verifiable-data-valuation-with-strong-fairness-in-horizontal-federated-learning) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#poster-verifiable-data-valuation-with-strong-fairness-in-horizontal-federated-learning)**
### 作者
* Ruei-Hau Hsu, National Sun Yat-sen University, Kaohsiung, Taiwan Roc
* Hsuan-Cheng Su, National Sun Yat-sen University, Kaohsiung, Taiwan Roc
* Yi-An Yu, National Sun Yat-sen University, Kaohsiung, Taiwan Roc
### 摘要
> 联邦学习（FL）代表着机器学习领域中一种创新的分散化范式，与传统的集中式方法不同。它促进了多个参与者之间的协作模型训练，并通过仅转移模型参数而不直接交换原始数据来保持机密性。对每个数据提供者的数据评估成为确保联邦学习公平性的关键问题，评估每个数据提供者对全局模型预测性能的数据集质量的贡献。为了在FL中评估数据集，引入了Shapley值的概念，通过测量在各种组合的全局模型参数中包含或排除本地模型参数的效果来估计每个数据集对经过训练的全局模型的贡献。然而，由于验证者处于组织的控制下，聚合器或某些中心组件对每个数据集的贡献度测量成为不合理的。因此，本研究提出了一个拥有强公平性的贡献度测量框架或数据估值框架，在该框架中，贡献度测量过程的伪造结果是不可能的。新框架允许每个参与者（数据提供者）验证贡献度测量结果。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624402](https://doi.org/10.1145/3576915.3624402)
## WPES '23: 22nd Workshop on Privacy in the Electronic Society.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#wpes-23-22nd-workshop-on-privacy-in-the-electronic-society) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#wpes-23-22nd-workshop-on-privacy-in-the-electronic-society)**
### 作者
* Bart P. Knijnenburg, Clemson University, Clemson, SC, USA
* Panagiotis Papadimitratos, KTH Royal Institute of Technology, Stockholm, Sweden
### 摘要
> 这些论文是为第22届ACM电子社会隐私研讨会（ACM WPES 2023）的技术计划所选入。该研讨会与第30届ACM计算机与通信安全会议（ACM CCS 2023）同期在丹麦哥本哈根的蒂沃里国会中心举行，于2023年11月26日进行。在研讨会发出论文邀请后，收到了31篇有效投稿，其中包括21篇全文和10篇简报。由一组背景涵盖与隐私相关的多个主题的54名研究人员组成的技术计划委员会对论文进行了评估。每篇论文至少由3位委员会成员进行了审查。论文根据其重要性、新颖性和技术质量进行评估。经过严格的审查过程，9篇论文作为全文被接受（接受率：29.0%），另外8篇论文被接受为简报。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624019](https://doi.org/10.1145/3576915.3624019)
## CPSIoTSec'23: Fifth Workshop on CPS & IoT Security and Privacy.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#cpsiotsec23-fifth-workshop-on-cps-iot-security-and-privacy) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#cpsiotsec23-fifth-workshop-on-cps-iot-security-and-privacy)**
### 作者
* Magnus Almgren, Chalmers University of Technology, Gothenburg, Sweden
* Earlence Fernandes, University of California, San Diego, La Jolla, CA, USA
### 摘要
> 第五届CPS和物联网安全与隐私研讨会将于2023年11月26日在丹麦哥本哈根举行，与ACM计算机与通信安全会议（CCS'23）同期举办。本次研讨会标志着2019年两个研讨会的合并：一个专注于网络物理系统的安全与隐私，而另一个则专注于物联网的安全与隐私。本次研讨会的主要目标是创建一个协作论坛，汇集学术界、行业专家和政府机构，鼓励他们贡献尖端研究、分享实证或实践经验，并进行讨论。今年，我们的征稿范围包括成熟的研究论文、进行中的工作提交以及知识系统化论文。研讨会的议程包括五篇关于CPS/IoT安全与隐私的全文论文，以及五篇呈现原创进行中工作的较短论文。此外，研讨会将邀请两位杰出主题演讲嘉宾，为大家提供对该领域的深入了解，并进行一个实证演示以给讨论提供实际维度。完整的CPSIoTSec'23研讨会论文集可在以下链接获取：https://dl.acm.org/doi/proceedings/10.1145/3605758

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624020](https://doi.org/10.1145/3576915.3624020)
## WAHC '23: 11th Workshop on Encrypted Computing & Applied Homomorphic Cryptography.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#wahc-23-11th-workshop-on-encrypted-computing-applied-homomorphic-cryptography) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#wahc-23-11th-workshop-on-encrypted-computing-applied-homomorphic-cryptography)**
### 作者
* Michael Brenner, Leibniz Universität, Hannover, Germany
* Anamaria Costache, NTNU, The Norwegian University of Science and Technology, Trondheim, Norway
* Kurt Rohloff, NJIT & Duality Technologies, New Jersey, NJ, USA
### 摘要
> 第11届加密计算与应用同态密码学研讨会将于2023年11月26日在丹麦哥本哈根举行，与ACM计算机与通信安全会议（CCS）同时举办。本次研讨会旨在将来自学术界、行业界和政府部门的专业人士、研究人员和实践者聚集在一起，探讨计算机安全和应用密码学领域的实际应用，特别关注同态加密、加密计算、功能加密和安全功能评估、私密信息检索和可搜索加密等方面的应用。本次研讨会将包括9个关于安全计算不同方面的精彩演讲，并提供一个讨论当前和未来挑战的论坛。此外，研讨会还将邀请一位主题演讲嘉宾和一位特邀演讲嘉宾。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624021](https://doi.org/10.1145/3576915.3624021)
## MTD '23: 10th ACM Workshop on Moving Target Defense.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#mtd-23-10th-acm-workshop-on-moving-target-defense) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#mtd-23-10th-acm-workshop-on-moving-target-defense)**
### 作者
* Ning Zhang, Washington University in St. Louis, St. Louis, MO, USA
* Qi Li, Tsinghua University, Beijing, China
### 摘要
> 第十届ACM移动目标防御（MTD）研讨会将于2023年11月26日与ACM计算机与通信安全会议（CCS）联合举办。研讨会的主要目标是讨论计算机系统和网络中的新颖随机化、多样化和动态化技术，新的度量和分析框架来评估和量化MTD的有效性，并讨论这些防御提供的挑战和机遇。我们构建了一个激动人心且多样化的方案，包括六篇经过同行评审的论文和两场邀请的主题演讲，将为参与者提供充满活力且发人深省的思想和见解。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624022](https://doi.org/10.1145/3576915.3624022)
## SaTS'23: The 1st ACM Workshop on Secure and Trustworthy Superapps.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#sats23-the-1st-acm-workshop-on-secure-and-trustworthy-superapps) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#sats23-the-1st-acm-workshop-on-secure-and-trustworthy-superapps)**
### 作者
* Zhiqiang Lin, Ohio State University, Columbus, OH, USA
* Xiaojing Liao, Indiana University Bloomington, Bloomington, IN, USA
### 摘要
> 移动超级应用的范式已经发生了转变，它以单个应用程序涵盖了多样化的服务。这些应用程序通过“迷你应用程序”展示出类似原生应用的特性和综合生态系统，因此受到了广泛关注。然而，这种受欢迎程度也引发了用户数据安全和隐私方面的重大关注。《安全可信的超级应用研讨会（SaTS 2023）》与ACM CCS 2023共同举办，旨在应对这些挑战。随着超级应用成为沟通、娱乐和商业方面的必需品，该研讨会促进了研究人员和实践者之间的合作。通过解决这些问题，该活动旨在为安全社区、行业和社会提供洞察力和解决方案。《SaTS 2023》旨在阐明这些问题的同时促进知识交流和创新问题解决。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624023](https://doi.org/10.1145/3576915.3624023)
## CCSW '23: Cloud Computing Security Workshop.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#ccsw-23-cloud-computing-security-workshop) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#ccsw-23-cloud-computing-security-workshop)**
### 作者
* Francesco Regazzoni, University of Amsterdam & Università della Svizzera italiana, Lugano, Switzerland
* Apostolos Fournaris, Industrial Systems Institute/Research Center ATHENA, Patras, Greece
### 摘要
> 云计算和大规模计算基础设施正在开始主导计算，并且在可预见的未来可能继续如此。主要的云计算运营商现在拥有数百万个核心，托管着公司和政府的大部分IT基础设施。CCSW是世界上首屈一指的论坛，汇集了云为中心和外包计算各个安全方面的研究人员和从业者，包括：侧信道攻击云安全的加密协议安全的云资源虚拟化机制安全的数据管理外包（例如，数据库作为服务）外包的隐私和完整性机制云为中心的威胁模型基础远程证明机制沙箱和基于VM的执行云中的信任和策略管理安全身份管理机制云感知的Web服务安全范式和机制云为中心的合规问题和机制云的商业和安全风险模型以及与云安全相互作用的成本和可用性模型在全球规模的云环境中的安全可扩展性软件的二进制分析用于远程证明和云保护云环境背景下的网络安全（DOS、IDS等）机制新兴云编程模型的安全云中安全的能源/成本/效率开放硬件用于云计算云保护的机器学习
> 
> CCSW特别鼓励提出非常规范式和有争议的想法，这些想法未列于以上列表。该研讨会自成立以来一直作为计算中受云计算影响的安全敏感领域中创造性辩论和交流的肥沃土壤。今年是CCSW的第14个周年。在过去的十年中，CCSW对我们的研究社群产生了重大影响。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624024](https://doi.org/10.1145/3576915.3624024)
## PLAS: The 18th Workshop on Programming Languages and Analysis for Security.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#plas-the-18th-workshop-on-programming-languages-and-analysis-for-security) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#plas-the-18th-workshop-on-programming-languages-and-analysis-for-security)**
### 作者
* Fraser Brown, Carnegie Mellon University, Pittsburgh, PA, USA
* Klaus v. Gleissenthall, VU Amsterdam, Amsterdam, Netherlands
### 摘要
> PLAS 提供了一个探索和评估编程语言和程序分析技术在软件系统的整个范围内促进安全性的论坛，从编译器到机器学习模型和智能合约。该研讨会鼓励提出新的、具有推测性的想法，对实际环境中的新技术或已知技术进行评估，并讨论新兴的威胁和问题。我们还提供容纳一些激进、具有前瞻性的立场论文，这些论文将引发生动和有深入见解的讨论，并对未来的编程语言和安全性研究产生影响。今年是 PLAS 的第18届，该研讨会于2007年首次在圣迭戈举办。我们期待一场精彩的活动和众多有趣的讨论。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624025](https://doi.org/10.1145/3576915.3624025)
## DeFi '23: Workshop on Decentralized Finance and Security.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#defi-23-workshop-on-decentralized-finance-and-security) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#defi-23-workshop-on-decentralized-finance-and-security)**
### 作者
* Kaihua Qin, Imperial College London, London, United Kingdom
* Fan Zhang, Yale University, New Haven, USA
### 摘要
> 去中心化金融（DeFi）标志着金融领域的一个转折点，挑战传统的中介机构，采用以区块链为中心的蓝图。随着DeFi的蓬勃发展，其演变与安全之间的复杂关系成为一个至关重要的领域。这个研讨会探索DeFi的多面景观，在那里固有的挑战与新的漏洞交织在一起，强调了对生态系统的完整性进行细致评估和适应性措施的必要性。它进一步深入研究监管审查的连锁效应及其对DeFi安全矩阵的后续影响。当我们站在未知的领域的边缘时，研讨会旨在提供一个关于DeFi安全挑战的全面论述，由跨学科的专家知识加强，邀请参与者探索、构思并共同塑造通往一个健壮和安全的DeFi范例的道路。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624026](https://doi.org/10.1145/3576915.3624026)
## ARTMAN '23: First Workshop on Recent Advances in Resilient and Trustworthy ML Systems in Autonomous Networks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#artman-23-first-workshop-on-recent-advances-in-resilient-and-trustworthy-ml-systems-in-autonomous-networks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#artman-23-first-workshop-on-recent-advances-in-resilient-and-trustworthy-ml-systems-in-autonomous-networks)**
### 作者
* Gregory Blanc, Telecom SudParis, Palaiseau, France
* Takeshi Takahashi, National Institute of Information and Communications Technology, Koganei, Japan
* Zonghua Zhang, Huawei Technologies France, Boulogne-Billancourt, France
### 摘要
> 机器学习（ML）方法在现代网络的运营和管理（O&M）中的日益融合，引发了研究人员对各种问题的关注，包括性能优化、异常检测、流量预测、根本原因分析和故障排查。自主网络利用商业和运营数据的丰富性，实现了各种电信应用的完全智能化和自动化的O&M。然而，这些应用的高水平服务需要密切审视，因为它们依赖于它们底层的ML模型的弹性和可信度，特别是面对那些试图滥用其底层ML模型的有动机的攻击者。本研讨会促进了安全、网络和ML社区之间研究人员和实践者之间的紧密合作，共同提高自治网络中ML应用的安全性。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624027](https://doi.org/10.1145/3576915.3624027)
## ASHES '23: Workshop on Attacks and Solutions in Hardware Security.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#ashes-23-workshop-on-attacks-and-solutions-in-hardware-security) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#ashes-23-workshop-on-attacks-and-solutions-in-hardware-security)**
### 作者
* Lejla Batina, Radboud University, Nijmegen, Netherlands
* Chip Hong Chang, NTU Singapore, Singapore, Singapore
* Domenic Forte, University of Florida, Gainesville, FL, USA
* Ulrich Rührmair, TU Berlin & U Connecticut, Munich, Germany
### 摘要
> "硬件安全攻击与解决方案工作坊（ASHES）"欢迎所有关于硬件安全的理论和实践研究，包括攻击、解决方案、对策、证明、分类、形式化和实现等内容。除了主流研究外，ASHES还特别关注新兴场景，如物联网（IoT）、核武器检查、军备控制、消费者和基础设施安全，以及供应链安全等。ASHES还欢迎关于特殊用途硬件的研究，如轻量级、低成本和节能设备，或非电子安全系统。工作坊设有四个不同的论文类别：除了常规和短篇论文外，还包括对某一（子）领域进行系统化和结构化的论文（称为“知识体系化”(SoK)论文），以及所谓的“疯狂与创新”(WaC)论文，这些论文在早期概念阶段分发创新性的想法。此摘要简要概述了工作坊的第六届，该活动于2023年11月30日在丹麦哥本哈根举行，作为ACM CCS的后会议卫星工作坊。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624028](https://doi.org/10.1145/3576915.3624028)
## AISec '23: 16th ACM Workshop on Artificial Intelligence and Security.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#aisec-23-16th-acm-workshop-on-artificial-intelligence-and-security) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#aisec-23-16th-acm-workshop-on-artificial-intelligence-and-security)**
### 作者
* Maura Pintor, Università degli Studi di Cagliari, Cagliari, Italy
* Florian Simon Tramèr, ETH Zurich, Zurich, Switzerland
* Xinyun Chen, Google LLC, Mountain View, CA, USA
### 摘要
> 人工智能（AI）和机器学习（ML）的应用已经成为近年来最卓越进展的焦点。分析实时大量数据的能力使得这些技术在许多领域，包括网络安全，成为最有前途的工具。以机器学习识别恶意软件为杰出例证，因为其能够检测人类难以察觉和硬编码规则难以捉摸的模式。随着恶意软件不断演变，机器学习将变得越来越重要，以跟上最新的威胁。然而，在安全相关领域使用人工智能和机器学习引发了对其可信性和稳健性的合理担忧，尤其是在面对适应性攻击者时。此外，隐私威胁现在正成为一个至关重要的方面，需要适当的测试和可能的缓解来防止数据窃取和敏感信息泄露。AISec研讨会提供了一个平台，用于展示和讨论安全与隐私与人工智能和机器学习相交汇的新发展。完整的AISec'23研讨会论文集可在以下链接获得：https://dl.acm.org/doi/proceedings/10.1145/3576915.3624029。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624029](https://doi.org/10.1145/3576915.3624029)
## Tutorial-HEPack4ML '23: Advanced HE Packing Methods with Applications to ML.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#tutorial-hepack4ml-23-advanced-he-packing-methods-with-applications-to-ml) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#tutorial-hepack4ml-23-advanced-he-packing-methods-with-applications-to-ml)**
### 作者
* Ehud Aharoni, IBM Research, Haifa, Israel
* Nir Drucker, IBM Research, Haifa, Israel
* Hayim Shaul, IBM Research, Haifa, Israel
### 摘要
> 将敏感数据的计算外包给第三方云环境通常需要依赖于专用的隐私保护解决方案，以符合诸如GDPR[7]之类的隐私法规。一个备受关注的解决方案是完全同态加密（FHE），这是一种允许对加密数据执行不同类型计算的密码学方法。然而，编写一个评估复杂函数的非交互式FHE代码通常是由专家来完成的任务。否则，生成的代码可能变得非常缓慢甚至不切实际。Tile tensor是一种最近出现的数据结构，它配备了一种专用语言，旨在简化编写复杂FHE程序的过程。本教程通过使用瓷砖张量，向安全解决方案开发人员介绍了FHE编程的世界，无需预先了解FHE知识。它提供了逐步指南，用于实现复杂的运算符，如矩阵乘法和卷积，并最终引导受众撰写自己的隐私保护卷积神经网络解决方案。本教程中的演示使用Python和实现瓷砖张量的IBM HElayers[1]库。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624030](https://doi.org/10.1145/3576915.3624030)
## SCORED '23: Workshop on Software Supply Chain Offensive Research and Ecosystem Defenses.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#scored-23-workshop-on-software-supply-chain-offensive-research-and-ecosystem-defenses) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#scored-23-workshop-on-software-supply-chain-offensive-research-and-ecosystem-defenses)**
### 作者
* Marcela Melara, Intel Corporation, Hillsboro, OR, USA
* Santiago Torres-Arias, Purdue University, West Lafayette, IN, USA
* Laurent Simon, Google, Inc., Mountain View, CA, USA
### 摘要
> 对软件供应链的最近攻击揭示了确保该关键生态系统的安全性和完整性的脆弱性和重要性。解决在敏感和/或大规模企业或政府环境中构建可信软件所面临的技术和社会挑战需要创新的解决方案和跨学科的方法。软件供应链攻击性研究与生态系统防御研讨会（SCORED）是一个汇集行业从业者、学者和政策制定者的场所，让他们可以展示和讨论安全漏洞、攻击的新防御方法、项目演示、采用需求以及软件供应链中的最佳实践。完整的SCORED'23研讨会文章可在以下网址获取：https://dl.acm.org/doi/proceedings/10.1145/3576915

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624031](https://doi.org/10.1145/3576915.3624031)
## Demo: Certified Robustness on Toolformer.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#demo-certified-robustness-on-toolformer) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#demo-certified-robustness-on-toolformer)**
### 作者
* Yue Xu, ShanghaiTech University, Shanghai, China
* Wenjie Wang, ShanghaiTech University, Shanghai, China
### 摘要
> 工具增强语言模型（TALMs）克服了当前语言模型（LMs）的限制，使它们能够利用外部工具提高性能。一种最先进的例子是Meta AI Research引入的Toolformer，它实现了更广泛的工具利用集成。然而，Toolformer面临特定问题，涉及API调用的最佳位置的预测鲁棒性。对抗扰动可以改变Toolformer选择的API调用位置，因此产生的响应不仅可能是不正确的，甚至还可能比标准语言模型生成的响应更不准确。为了提高Toolformer的鲁棒性并实现其工具箱的能力，我们的重点在于解决输入或提示空间中的微小扰动可能引起的潜在漏洞。为了实现这个目标，我们计划从攻击者和防御者的角度研究敌对攻击算法，并首先研究输入和提示空间上的敌对攻击算法，然后提出Toolformer API调度的认证鲁棒性，这不仅在经验上有效，而且有理论支持。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624362](https://doi.org/10.1145/3576915.3624362)
## Demo: Data Minimization and Informed Consent in Administrative Forms.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#demo-data-minimization-and-informed-consent-in-administrative-forms) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#demo-data-minimization-and-informed-consent-in-administrative-forms)**
### 作者
* Nicolas Anciaux, Inria, Saclay, France
* Sabine Frittella, INSA Centre Val de Loire, Bourges, France
* Baptiste Joffroy, INSA Centre Val de Loire, Bourges, France
* Benjamin Nguyen, INSA Centre Val de Loire, Bourges, France
### 摘要
> 本文提出了一种实现数据最小化隐私原则的演示，重点是通过表格减少政府行政部门收集的数据。数据最小化在全球范围内的许多隐私法规中都有定义，但在实际应用中并没有得到广泛应用。我们提出了一个基于逻辑和博弈论的模型，并展示了在法国真实的福利案例中可以创建一个实用和高效的解决方案是可能的。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624363](https://doi.org/10.1145/3576915.3624363)
## Demo: Image Disguising for Scalable GPU-accelerated Confidential Deep Learning.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#demo-image-disguising-for-scalable-gpu-accelerated-confidential-deep-learning) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2023].md#demo-image-disguising-for-scalable-gpu-accelerated-confidential-deep-learning)**
### 作者
* Yuechun Gu, Marquette University, Milwaukee, WI, USA
* Sagar Sharma, TikTok Inc., Bellevue, WA, USA
* Keke Chen, Marquette University, Milwaukee, WI, USA
### 摘要
> 深度学习训练涉及大量训练数据和昂贵的模型调整，因此云GPU资源可以成为一种受欢迎的选择。然而，外包数据往往带来隐私问题。挑战在于在不牺牲基于GPU的可扩展训练和低成本客户端预处理的情况下，保护数据和模型的机密性，而传统的加密解决方案很难实现这一目标。这个演示展示了一种新的方法，即图像伪装，由最近的研究成果DisguisedNets，NeuraCrypt和InstaHide代表，旨在在保证所需的可扩展性和效率的同时，安全地转换训练图像。我们提供了一个交互式系统，用于直观和比较地探索这些方法。用户可以查看伪装图像，注意到低客户端处理成本，并观察到在服务器端GPU加速训练期间保持的效率和模型质量。这个演示帮助研究人员和实践者迅速掌握图像伪装方法的优势和局限性。

### 链接
- **URL:** [https://doi.org/10.1145/3576915.3624364](https://doi.org/10.1145/3576915.3624364)
