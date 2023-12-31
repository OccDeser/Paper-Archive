# Crypto[2021-3]
## A Rational Protocol Treatment of 51% Attacks.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#a-rational-protocol-treatment-of-51-attacks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#a-rational-protocol-treatment-of-51-attacks)**
### 作者
* Christian Badertscher, IOHK, Zurich, Switzerland
* Yun Lu, University of Edinburgh, Edinburgh, UK
* Vassilis Zikas, Purdue University, West Lafayette, USA
### 摘要
> 密码学货币和区块链的博弈论分析以及基于区块链的去中心化账本的研究，为我们提供了在其基本的加密假设失败时的经济韧性和行为的洞察。在这项工作中，我们利用最近提出的理性协议设计(RPD)框架的区块链适应性 [EUROCRYPT'18]，对纳卡莫托式工作量证明的密码学货币进行了51%双花攻击的分析。我们首先观察到一个最初提出的效用类的特性，它导致了一个不自然的结论，即针对此类攻击的预测与可观察行为相矛盾，即在实际中确实观察到攻击的情况下，攻击成为了一种占优势的策略。然后，我们提出了一种通用的方法来防止拥有系统大部分资源的对手进行区块链一致性攻击，包括51%双花攻击。这可以用作修补遭受此类攻击的系统的指导，例如以太经典和比特币现金，并且证明了博弈论分析的强大力量。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_1](https://doi.org/10.1007/978-3-030-84252-9_1)
## MoSS: Modular Security Specifications Framework.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#moss-modular-security-specifications-framework) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#moss-modular-security-specifications-framework)**
### 作者
* Amir Herzberg, Department of Computer Science and Engineering, University of Connecticut, Storrs, CT, USA
* Sara Wrótniak, Department of Computer Science and Engineering, University of Connecticut, Storrs, CT, USA
* Hemi Leibowitz, Department of Computer Science, Bar-Ilan University, Ramat Gan, Israel
* Ewa Syta, Department of Computer Science, Trinity College, Hartford, CT, USA
### 摘要
> 应用密码协议在不同环境和对抗者的多样化要求下必须满足丰富的安全性要求。然而，目前使用的安全规范，基于模拟[11, 27]（如UC中的“理想功能”）或游戏[8, 29]，是整体的，将协议需求、环境和假设的不同方面结合在一起。这样的安全规范复杂、容易出错，并且阻碍了可重用性、模块化分析和增量设计。
> 
> 我们提出了模块化安全规范（MoSS）框架，其清晰地将协议应该实现的安全需求（目标）与每个需求应该满足的模型（假设）分离。这种模块化允许我们在不同协议和任务之间重用单个模型和需求，并且可以对相同任务的协议进行比较，无论是在不同假设下还是满足不同的需求集。MoSS是灵活和可扩展的，例如，它可以支持安全性的渐进和具体定义。
> 
> 到目前为止，我们已经确认了MoSS对两种应用的适用性：安全广播协议和PKI方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_2](https://doi.org/10.1007/978-3-030-84252-9_2)
## Tight State-Restoration Soundness in the Algebraic Group Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#tight-state-restoration-soundness-in-the-algebraic-group-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#tight-state-restoration-soundness-in-the-algebraic-group-model)**
### 作者
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### 摘要
> 大多数高效的零知识证明缺乏具体的安全性分析，使得参数选择和效率比较具有挑战性。对于通过Fiat-Shamir变换获得的非交互式版本，这一点尤为真实，因为从交互式协议推导出的安全性保证通常太弱，即使在假设随机预言机的情况下也是如此。
> 
> 本文在Fuchsbauer、Kiltz和Loss关于代数群模型（AGM）的研究（CRYPTO '18）中开始研究状态恢复健全性。这是一种更强的对于交互证明或论证的健全性概念，允许证明者重置验证者，并且与通过Fiat-Shamir变换获得的非交互式论证的具体健全性密切相关。
> 
> 我们提出了一种通用的方法来证明状态恢复健全性的严格界限，并将其应用于Bulletproofs（Bootle等，S＆P '18）和Sonic（Maller等，CCS '19）的变体。据我们所知，我们对于Bulletproofs的分析为经过Fiat-Shamir变换的非恒定轮论证提供了第一个非平凡的具体安全性分析。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_3](https://doi.org/10.1007/978-3-030-84252-9_3)
## Separating Adaptive Streaming from Oblivious Streaming Using the Bounded Storage Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#separating-adaptive-streaming-from-oblivious-streaming-using-the-bounded-storage-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#separating-adaptive-streaming-from-oblivious-streaming-using-the-bounded-storage-model)**
### 作者
* Haim Kaplan, Tel Aviv University, Tel Aviv, Israel
* Yishay Mansour, Tel Aviv University, Tel Aviv, Israel
* Haim Kaplan, Google Research, Tel Aviv, Israel
* Yishay Mansour, Google Research, Tel Aviv, Israel
* Uri Stemmer, Google Research, Tel Aviv, Israel
* Kobbi Nissim, Georgetown University, Washington D.C., USA
* Uri Stemmer, Ben-Gurion University of the Negev, Be’er-Sheva, Israel
### 摘要
> 流算法是处理大数据流的算法，只使用有限的内存。经典的流算法通常在假设输入流与算法的内部状态是独立选择的情况下工作。利用这一假设的算法称为无意识算法。最近，研究者们对研究流算法的兴趣日益增长，即使在输入流由敌对对手选择时也能保持实用性，可能是由以前通过流算法给出的估计的功能选择的。这样的流算法被称为对抗鲁棒算法。
> 
> 通过将学习理论与有界存储模型的加密工具相结合，我们将无意识流模型与对抗鲁棒流模型分开。具体来说，我们提出了一个流问题，对于每个对抗鲁棒流算法必须使用多项式空间，而存在一个经典（无意识）流算法只使用对数多项式空间。这是这两个模型能力的第一次通用分离，解决了对抗鲁棒流中一个中心性的开放性问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_4](https://doi.org/10.1007/978-3-030-84252-9_4)
## Provable Security Analysis of FIDO2.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#provable-security-analysis-of-fido2) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#provable-security-analysis-of-fido2)**
### 作者
* Manuel Barbosa, University of Porto (FCUP) and INESC TEC, Porto, Portugal
* Alexandra Boldyreva, Georgia Institute of Technology, Atlanta, USA
* Shan Chen, Technische Universität Darmstadt, Darmstadt, Germany
* Bogdan Warinschi, University of Bristol, Bristol, UK
* Bogdan Warinschi, Dfinity, Zug, Switzerland
### 摘要
> 我们进行了新的FIDO2协议的第一次可证明安全性分析，这是FIDO联盟为无密码用户认证提出的一项有前景的标准。我们的分析涵盖了FIDO2的核心组件：W3C的Web Authentication（WebAuthn）规范和新的客户端到认证器协议（CTAP2）。
> 
> 我们的分析是模块化的。对于WebAuthn和CTAP2，我们分别提出适当的安全模型，旨在捕捉其预期的安全目标，并使用这些模型来分析它们的安全性。首先，我们的证明确认了WebAuthn的认证安全性。然后，我们展示了CTAP2只能在弱意义下被证明安全；同时，我们还发现了一系列设计缺陷，并提出改进建议。为了抵御更强大但现实的对手，我们提出了一种称为sPACA的通用协议，并证明了其强安全性；通过适当的实例化，sPACA也比CTAP2更高效。最后，我们基于组件的安全性，分析了FIDO2和WebAuthn+sPACA提供的整体安全保证。
> 
> 我们预计我们的模型和可证明的安全结果将有助于澄清FIDO2协议的安全保证。此外，我们主张采用我们的sPACA协议作为CTAP2的替代品，既能提供更强的安全性，又能提供更好的性能。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_5](https://doi.org/10.1007/978-3-030-84252-9_5)
## SSE and SSD: Page-Efficient Searchable Symmetric Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#sse-and-ssd-page-efficient-searchable-symmetric-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#sse-and-ssd-page-efficient-searchable-symmetric-encryption)**
### 作者
* Angèle Bossuat, Quarkslab and Université de Rennes 1, Rennes, France
* Raphael Bost, Direction Générale de l’Armement, Paris, France
* Brice Minaud, Inria, Paris, France
* Michael Reichle, Inria, Paris, France
* Brice Minaud, École Normale Supérieure, CNRS, PSL University, Paris, France
* Michael Reichle, École Normale Supérieure, CNRS, PSL University, Paris, France
* Pierre-Alain Fouque, Université de Rennes 1, Rennes, France
### 摘要
> 可搜索的对称加密（SSE）使客户能够将数据库外包给不受信任的服务器，同时保留对数据进行安全搜索的能力。经典SSE方案的性能瓶颈通常不是来自于它们快速的对称加密操作，而是来自于内存访问的成本。为了解决这个问题，文献中的许多工作都考虑了局部性的概念，它是一种简单的设计准则，有助于捕捉传统存储介质（如硬盘驱动器）中内存访问的成本。许多旨在改善局部性的SSE方案的一个共同点是它们建立在新的内存分配方案的基础上，而这些方案构成了技术核心。
> 
> 本文的起始观察是，对于新型存储介质（如固态硬盘SSD），它们变得越来越普遍，局部性不是实际性能的良好预测指标。相反，SSD的性能主要取决于页面效率，即尽可能少地读取页面。我们定义了这个概念，并确定了一个简单的内存分配问题，称为数据无关打包（DIP），它捕捉了构建页面高效SSE所需的主要技术挑战。作为主要结果，我们构建了一个页面高效和存储高效的数据无关打包方案，并推导出\(\mathsf {Tethys}\) SSE方案，它是第一个同时实现\(\mathcal {O}(1)\)页面效率和\(\mathcal {O}(1)\)存储效率的SSE方案。结果的技术核心是对具有可变大小的项目进行哈希的新泛化。实际实验表明，这种新方法实现了出色的性能。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_6](https://doi.org/10.1007/978-3-030-84252-9_6)
## Towards Tight Random Probing Security.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#towards-tight-random-probing-security) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#towards-tight-random-probing-security)**
### 作者
* Gaëtan Cassiers, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Sebastian Faust, TU Darmstadt, Darmstadt, Germany
* Maximilian Orlt, TU Darmstadt, Darmstadt, Germany
### 摘要
> 证明与实践相关并与侧信道研究中已知攻击相匹配的掩码实现的安全性在理论模型中是一个非常困难的问题。随机探测模型是解决这一挑战的一个有希望的候选模型，因为它能够捕捉到物理泄漏的连续性特性（与阈值探测模型不同），同时在证明和自动化验证工具中使用起来也比较方便。然而，尽管最近在该模型下设计的掩码电路在渐进安全性方面有着良好的保证，但现有结果在分析具有实际噪声水平和较少分享数量的实用电路的安全性时仍然存在不足。在本文中，我们通过引入一种新的组合性概念——探测分布表（PDT）和一种新工具（称为STRAPS，用于随机探测安全的抽样测试），对这个问题做出了贡献。它们的组合使我们能够显著提高现有分析在设计空间最实用的（低噪声，少分享数量）区域的紧密性。我们通过量化使用来自Crypto 2003的Ishai、Sahai和Wagner的流行乘法小工具对一个AES S-box电路进行随机探测安全性的改进，分享数量最多为六个。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_7](https://doi.org/10.1007/978-3-030-84252-9_7)
## Secure Wire Shuffling in the Probing Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#secure-wire-shuffling-in-the-probing-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#secure-wire-shuffling-in-the-probing-model)**
### 作者
* Jean-Sébastien Coron, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Lorenzo Spignoli, University of Luxembourg, Esch-sur-Alzette, Luxembourg
### 摘要
> 在本文中，我们描述了对2003年Crypto会议上由Ishai，Sahai和Wagner描述的侧信道攻击的线路混洗对策的第一次改进。更准确地说，我们展示了如何在运行时间\({\mathcal O}(t)\)而不是\({\mathcal O}(t \log t)\)的情况下获得对t个探测的最坏情况统计安全性；我们的构造也更简单。回想一下，经典的掩蔽对策能够实现完美安全，但运行时间为\({\mathcal O}(t^2)\)。我们还描述了一种针对AES的实际实现，其在\(t \ge 6,000\)的情况下超越了掩蔽对策的性能。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_8](https://doi.org/10.1007/978-3-030-84252-9_8)
## Differential-Linear Cryptanalysis from an Algebraic Perspective.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#differential-linear-cryptanalysis-from-an-algebraic-perspective) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#differential-linear-cryptanalysis-from-an-algebraic-perspective)**
### 作者
* Meicheng Liu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Xiaojuan Lu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Dongdai Lin, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Meicheng Liu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Xiaojuan Lu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Dongdai Lin, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
### 摘要
> 微分线性密码分析是密码学中重要的密码分析工具，自1994年Langford和Hellman发现以来，一直受到广泛关注。然而有很少方法研究微分和线性轨迹连接的中间部分。本文从代数学的角度研究微分线性密码分析。首先介绍了一种称为微分代数过渡形式（DATF）的微分线性密码分析技术，然后开发了一种新的估计微分线性偏差和密钥恢复技术的理论。
> 
> 这些技术被应用于CAESAR和LWC决赛Ascon，AES决赛Serpent以及eSTREAM决赛Grain v1。估计了Ascon和Serpent的微分线性逼近偏差。理论估计的偏差比《微分线性连接表》（Bar-On等人，EUROCRYPT 2019）获得的更准确，而且这些技术可以应用到更多轮次。我们的技术还可以用于评估Grain v1在微分密码分析中的偏差，并且比专门为密码设计的Differential Engine工具性能更佳。然后提出了这些密码的改进的轮次减少变体的密钥恢复攻击。就我们所知，它们是迄今为止对Serpent最好的已知密码分析，以及Ascon的最佳微分线性密码分析和Grain v1的最佳初始化分析。实验完全验证了这些结果。值得注意的是，Serpent的安全分析是微分线性密码分析在过去20年中最重要的应用之一。本文的结果在Biham，Dunkelman和Keller于2003年进行的工作之后，更新了Serpent-128和Serpent-256的微分线性密码分析。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_9](https://doi.org/10.1007/978-3-030-84252-9_9)
## Meet-in-the-Middle Attacks Revisited: Key-Recovery, Collision, and Preimage Attacks.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#meet-in-the-middle-attacks-revisited-key-recovery-collision-and-preimage-attacks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#meet-in-the-middle-attacks-revisited-key-recovery-collision-and-preimage-attacks)**
### 作者
* Xiaoyang Dong, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Jialiang Hua, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Siwei Sun, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Lei Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Siwei Sun, University of Chinese Academy of Sciences, Beijing, China
* Lei Hu, University of Chinese Academy of Sciences, Beijing, China
* Zheng Li, Faculty of Information Technology, Beijing University of Technology, Beijing, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Xiaoyun Wang, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Zheng Li, Beijing Key Laboratory of Trusted Computing, Beijing University of Technology, Beijing, China
### 摘要
> 在欧洲密码术会议（EUROCRYPT）2021年，鲍等人提出了一种自动方法，用于系统地探索中间遇到中间（MITM）预像攻击的配置空间。我们进一步将其扩展为一种基于约束的框架，用于找到在密钥恢复和碰撞攻击环境中的可利用的MITM特征，以考虑两种情景的微妙特点。此外，为了执行基于MITM特征的攻击，我们提出了一种方法，用于推导中性词的解空间，而不需要解决相应的非线性方程或增加攻击的总体时间复杂性。我们采用我们的方法对具体的对称密钥原语进行了应用，包括SKINNY，ForkSkinny，Romulus-H，Saturnin，Grøstl，WHIRLPOOL和具有AES-256的哈希模式。结果，我们确定了SKINNY-n-3n上第一个23轮密钥恢复攻击以及ForkSkinny-n-3n上第一个24轮密钥恢复攻击。此外，对轮减少的WHIRLPOOL，Grøstl和具有AES-256的哈希模式进行了改进的（伪）预像或碰撞攻击。特别地，利用Leurent和Pernot（EUROCRYPT 2021）提出的AES密钥调度的新表示，我们确定了对10轮AES-256哈希的第一个预像攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_10](https://doi.org/10.1007/978-3-030-84252-9_10)
## Revisiting the Security of DbHtS MACs: Beyond-Birthday-Bound in the Multi-user Setting.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#revisiting-the-security-of-dbhts-macs-beyond-birthday-bound-in-the-multi-user-setting) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#revisiting-the-security-of-dbhts-macs-beyond-birthday-bound-in-the-multi-user-setting)**
### 作者
* Yaobin Shen, Shanghai Jiao Tong University, Shanghai, China
* Lei Wang, Shanghai Jiao Tong University, Shanghai, China
* Dawu Gu, Shanghai Jiao Tong University, Shanghai, China
* Jian Weng, Jinan University, Guangzhou, China
### 摘要
> 双重哈希-然后汇总（DbHtS）MAC是一类MAC，旨在实现超越生日边界安全性，包括SUM-ECBC，PMAC_Plus，3kf9和LightMAC_Plus。最近Datta等人（FSE'19），然后Kim等人（Eurocrypt'20）证明了DbHtS构造在单用户环境中安全性超出生日边界。然而，通过通用约简，他们的结果在多用户环境中降级到（甚至更糟）生日边界。
> 
> 在这项工作中，我们重新审视了DbHtS MAC在多用户环境中的安全性。我们提出了一个通用框架，以证明DbHtS构造的超越生日边界安全性。我们展示了这个框架在DbHtS MAC的减少密钥变体上的应用，包括2k-SUM-ECBC，2k-PMAC_Plus和2k-LightMAC_Plus。我们的结果表明，这些构造的安全性不会随着用户数量的增加而降低。另外，我们的结果也表明，这些构造在单用户和多用户环境中都是超出生日边界安全的，而不需要额外的域分隔，这在先前的工作中用于简化分析。
> 
> 此外，我们发现了2kf9中的一个关键缺陷，该缺陷被Datta等人（FSE'19）证明了超出生日边界的安全性。我们可以成功地在不进行任何查询的情况下以概率1伪造标记。我们进一步展示了对几种2kf9变体的生日边界复杂度攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_11](https://doi.org/10.1007/978-3-030-84252-9_11)
## Thinking Outside the Superbox.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#thinking-outside-the-superbox) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#thinking-outside-the-superbox)**
### 作者
* Nicolas Bordes, Université Grenoble Alpes, Grenoble, France
* Joan Daemen, Radboud University, Nijmegen, The Netherlands
* Daniël Kuijsters, Radboud University, Nijmegen, The Netherlands
* Gilles Van Assche, STMicroelectronics, Diegem, Belgium
### 摘要
> 设计块密码或加密置换可以通过多种不同的方法进行。其中一种方法，由AES广为使用，是将比特沿着S盒边界进行分组，例如以字节方式，并且按照这些分组进行一致处理。这种对齐的方法导致了层次化结构，例如超盒，使得可以使用组合论论证差分和线性传播特性。相反，不对齐的方法避免在变换设计中进行任何此类分组。然而，没有层次结构，需要使用复杂的计算机程序来研究原始变换的差分和线性传播特性。在本文中，我们将对齐的概念进行形式化，并研究了四种不同设计策略的原始变换。我们提出了一种分析线性和非线性层之间相互作用的方法，以关于差分和线性传播进行比较，并使用它来系统地比较这四种变换，使用非平凡的计算机实验。我们展示了对齐自然地导致了不同形式的聚类，例如活动位于盒子和两轮活动模式中的活跃位以及差分和线性逼近中的轨迹。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_12](https://doi.org/10.1007/978-3-030-84252-9_12)
## Cryptanalysis of Full LowMC and LowMC-M with Algebraic Techniques.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#cryptanalysis-of-full-lowmc-and-lowmc-m-with-algebraic-techniques) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#cryptanalysis-of-full-lowmc-and-lowmc-m-with-algebraic-techniques)**
### 作者
* Fukang Liu, East China Normal University, Shanghai, China
* Fukang Liu, University of Hyogo, Hyogo, Japan
* Takanori Isobe, University of Hyogo, Hyogo, Japan
* Takanori Isobe, National Institute of Information and Communications Technology, Tokyo, Japan
* Takanori Isobe, PRESTO, Japan Science and Technology Agency, Tokyo, Japan
* Willi Meier, FHNW, Windisch, Switzerland
### 摘要
> 在这篇论文中，我们重新审视了用于LowMC的差分枚举技术，并开发了新的代数技术来实现高效的密钥恢复攻击。在原始的差分枚举攻击框架中，必不可少的步骤是预计算和存储一组中间状态差异，以便通过二分查找进行高效检查。我们的第一个观察是，Bar-On等人为具有部分非线性层的SPNs开发的通用代数技术可以用于完成相同的任务，这可以使内存复杂性变得可以忽略，因为不再需要存储一组巨大的状态差异。借助这种技术，我们可以显著改进对于当块大小远大于密钥大小时的LowMC的攻击，甚至可以破解具有这种参数的LowMC。另一方面，通过我们的新的密钥恢复技术，我们可以大大提高仅凭单个输入和输出消息以及它们的差异轨迹来检索完整密钥的时间，这是Rechberger等人在2018年的ToSC中提出的一个有趣的问题。结合这两种技术，我们只需选择2个明文，就可以破解采用129、192和255位块大小的全S-Box层的4轮LowMC，这些是NIST量子后密码竞赛中备选第三轮的Picnic3的3个推荐参数。我们必须强调我们的攻击并不表示Picnic3被破解，因为Picnic的使用情况非常不同，攻击者甚至无法自由选择2个明文对具体的LowMC实例进行加密。然而，在最新的LowMC中，这样的参数被认为是安全的。此外，通过充分利用允许的\(2^{64}\)数据，可以打破由Peyrin和Wang在CRYPTO 2020中提出的七个后门密码LowMC-M的更多轮次，而无需找到后门。上述攻击都是在可以忽略的内存下实现的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_13](https://doi.org/10.1007/978-3-030-84252-9_13)
## The Cost to Break SIKE: A Comparative Hardware-Based Analysis with AES and SHA-3.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#the-cost-to-break-sike-a-comparative-hardware-based-analysis-with-aes-and-sha-3) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#the-cost-to-break-sike-a-comparative-hardware-based-analysis-with-aes-and-sha-3)**
### 作者
* Patrick Longa, Microsoft Research, Redmond, USA
* Wen Wang, Yale University, New Haven, USA
* Jakub Szefer, Yale University, New Haven, USA
### 摘要
> 本研究通过使用一个基于实际算力和内存消耗的预算成本模型，对量子后超奇异同源密钥封装（SIKE）协议的经典安全性进行了详细研究。在这个工作中，我们设计了专门定制的硬件加速器，用于时间关键的乘法和同源计算，并将其用于建模van Oorschot-Wiener（vOW）并行碰撞搜索算法的ASIC驱动实例。然后，我们在NIST后量子密码标准化过程中将分析扩展到AES和SHA-3，以基于我们的成本模型进行参数分析。这项分析与SIKE的最新量子安全分析一起表明，当前SIKE参数提供了比目前认为的更高的实际安全性，解决了与NIST安全级别相匹配的参数适用性问题。此外，我们探讨了使用更小的质数以实现更高效、紧凑的实现和减少带宽的可能性。我们改进的成本模型和分析可应用于其他密码设置和原语，并对NIST过程中的其他后量子候选产生影响。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_14](https://doi.org/10.1007/978-3-030-84252-9_14)
## Improved Torsion-Point Attacks on SIDH Variants.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#improved-torsion-point-attacks-on-sidh-variants) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#improved-torsion-point-attacks-on-sidh-variants)**
### 作者
* Victoria de Quehen, ISARA Corporation, Waterloo, Canada
* Chris Leonardi, ISARA Corporation, Waterloo, Canada
* Péter Kutas, School of Computer Science, University of Birmingham, Birmingham, UK
* Christophe Petit, School of Computer Science, University of Birmingham, Birmingham, UK
* Chloe Martindale, Department of Computer Science, University of Bristol, Bristol, UK
* Lorenz Panny, Institute of Information Science, Academia Sinica, Taipei, Taiwan
* Christophe Petit, Laboratoire d’Informatique, Université Libre de Bruxelles, Brussels, Belgium
* Katherine E. Stange, Department of Mathematics, University of Colorado Boulder, Boulder, CO, USA
### 摘要
> SIDH是一种基于假设的超奇异椭圆曲线之间同构性的后量子密钥交换算法。然而，SIDH和相关的密码系统也透露了额外的信息：将秘密同构性限制在曲线的一个子群上（扭点信息）。Petit [31]首次证明了扭点信息能够显著降低发现秘密同构性的难度。特别地，Petit表明SIDH的"过度伸展"参数化可以在多项式时间内被破解。然而，这并没有影响文献中提出的任何密码系统的安全性。本文的贡献有两个：首先，我们通过利用来自对偶同构和Frobenius同构的额外信息，强化了[31]的技术。这极大地扩展了扭点攻击的影响。特别地，我们的技术提供了一种经典攻击，完全破解了[2]中的n方组密钥交换，该密钥交换最初在[17]中作为GSIDH引入，可用于6个或更多方的情况，以及3个或更多方的量子攻击，改进了已知最优渐近复杂性。我们还提供了我们对6个方的攻击的Magma实现。我们给出了我们攻击适用的参数的完整范围。其次，我们构建了针对我们攻击的SIDH变体；这包括选择起始曲线的后门选择，以及选择基字段素数的后门选择。我们强调，我们的结果不会降低NIST提交的SIKE [20]的安全性或揭示任何弱点。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_15](https://doi.org/10.1007/978-3-030-84252-9_15)
## Smoothing Out Binary Linear Codes and Worst-Case Sub-exponential Hardness for LPN.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#smoothing-out-binary-linear-codes-and-worst-case-sub-exponential-hardness-for-lpn) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#smoothing-out-binary-linear-codes-and-worst-case-sub-exponential-hardness-for-lpn)**
### 作者
* Yu Yu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, 800 Dongchuan Road, Shanghai, 200240, China
* Yu Yu, Shanghai Qi Zhi Institute, 701 Yunjin Road, Shanghai, 200232, China
* Yu Yu, Shanghai Key Laboratory of Privacy-Preserving Computation, 701 Yunjin Road, Shanghai, 200232, China
* Jiang Zhang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
### 摘要
> 学习带噪声(LPN)是一个臭名昭著的（平均情况下）难题，自上世纪90年代初以来，在学习理论，编码理论和密码学领域得到了广泛研究。它进一步启发了学习与错误(LWE)问题[Regev，STOC 2005]，成为后量子密码学和先进密码原语的核心构建模块之一。与LWE不同，其难度可以从最坏情况下的格问题中导出，直到最近为止，我们还不知道LPN的相应最坏情况下的难度结果。在2019年的欧洲密码学会议上，Brakerski等人[BLVW19]建立了一个首要可行性结果，即最近码词问题(NCP)的最坏情况下的困难性（在均衡线性码上）在极低噪声率\(\frac{\log ^2 n}{n}\)下涵盖了LPN的准多项式难度。对于标准的（恒定噪声）LPN，是否能够建立最坏情况到平均情况的规约仍然未知，理想情况下是具有次指数难度的。
> 
> 我们首先进行一个简单的观察，即高噪声LPN的难度可以由相同模数下的LWE难度推导出来，因此可以从格问题的最坏情况难度中规约得到。然后我们重新审视[BLVW19]，这是本文的主要焦点。我们首先将基础的二进制线性码（NCP的）扩展到不仅包括[BLVW19]中考虑的均衡码，还包括具有最小对偶距离的另一种码。在我们规约的核心是一种新的平滑引理变体（适用于二进制码），它回避了底层最坏情况随机抽取中的困难，并允许更广泛的参数选择的折衷。除了在[BLVW19]中得到的类似最坏情况下的困难性结果之外，我们还证明了对于任意常数\(0<c<1\)，恒定噪声LPN问题是（\(T=2^{\varOmega (n^{1-c})},\epsilon =2^{-\varOmega (n^{\min (c,1-c)})},q=2^{\varOmega (n^{\min (c,1-c)})}\)）难的，假设低噪声率\(\tau =n^{-c}\)上的NCP在最坏情况下是（\(T'={2^{\varOmega (\tau n)}}\), \(\epsilon '={2^{-\varOmega (\tau n)}}\), \(m={2^{\varOmega (\tau n)}}\)）难的，其中T, \(\epsilon\), q和m分别是时间复杂度、成功率、样本复杂度和码字长度。而且，推翻最坏情况下的困难性假设将意味着相对于当前解决NCP（和LPN）的最先进算法的任意多项式加速，这是一种双赢结果。不幸的是，公钥加密和抗碰撞哈希函数需要具有（\(T={2^{\omega (\sqrt{n})}}\), \(\epsilon '={2^{-\omega (\sqrt{n})}}\), \(q={2^{\sqrt{n}}}\)）困难性的恒定噪声LPN（Yu等人 CRYPTO 2016 & ASIACRYPT 2019），这几乎是与最坏情况的NCP在\(c= 0.5\)时规约得到的（指数中存在任意的\(\omega (1)\)因子）的。是否可以弥合这个差距或者存在分隔是一个未解决的问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_16](https://doi.org/10.1007/978-3-030-84252-9_16)
## Silver: Silent VOLE and Oblivious Transfer from Hardness of Decoding Structured LDPC Codes.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#silver-silent-vole-and-oblivious-transfer-from-hardness-of-decoding-structured-ldpc-codes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#silver-silent-vole-and-oblivious-transfer-from-hardness-of-decoding-structured-ldpc-codes)**
### 作者
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
* Peter Rindal, Visa Research, Palo Alto, USA
* Srinivasan Raghuraman, Visa Research, Palo Alto, USA
### 摘要
> 我们提出了一种新的无意识传输扩展和向量OLE的协议，称为Silver，即SILent Vole和oblivious transfER。Silver提供了极高的性能：在标准笔记本电脑的一个核心上生成1000万个随机OTs仅需要300毫秒的计算和122KB的通信。这相当于比标准IKNP协议少37％的计算量和\(\sim \)1300\(\times \)的通信量，比Yang等人最近的协议少约4\(\times \)的计算量和\(\sim \)14\(\times \)的通信量（CCS 2020）。Silver是静默的：经过一次廉价的互动后，两个当事方可以存储小的种子，以后可以在离线状态下本地生成大量的OTs。IKNP和Yang等人都没有这个特性；与我们构建的最佳已知的静默OT扩展协议Boyle等人相比（CCS 2019），Silver的计算量少19\(\times \)，通信量相同。由于其高效特性，Silver在许多MPC协议中实现了主要的效率改进。
> 
> 我们的方法是对构建MPC协议的标准范式的根本性改变，我们不试图基于一个经过深入研究的假设来构建我们的构造。相反，我们遵循更接近对称原语设计的标准范式的方法：我们确定一组基本结构属性，使我们能够抵御所有已知的攻击，并提出一个候选设计，根据我们的分析。我们还依靠广泛的实验来分析我们的候选设计，并实验验证其性能。从本质上讲，我们的方法归结为构建具有（可能）高最小距离和极低编码时间的新的线性码族。当然，为了对Silver的安全性获得完全的信心，进一步的分析是受欢迎的，我们希望并相信，启动这种对MPC原语设计的方法将为新的安全原语铺平了道路，这些原语具有极具吸引力的高效特性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_17](https://doi.org/10.1007/978-3-030-84252-9_17)
## Non-malleable Codes for Bounded Parallel-Time Tampering.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#non-malleable-codes-for-bounded-parallel-time-tampering) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#non-malleable-codes-for-bounded-parallel-time-tampering)**
### 作者
* Dana Dachman-Soled, University of Maryland, College Park, USA
* Ilan Komargodski, Hebrew University of Jerusalem and NTT Research, Jerusalem, Israel
* Rafael Pass, Cornell Tech, New York City, USA
### 摘要
> 非可塑编码允许我们以一种方式对数据进行编码，一旦编码词被篡改，修改后的编码词要么是原始消息的编码，要么是与之完全无关的编码词。自Dziembowski、Pietrzak和Wichs（ICS '10和J. ACM '18）提出这个概念以来，已经有大量的研究作品实现了针对各种篡改函数的安全编码方案。众所周知，没有一种高效的非可塑编码可以对所有多项式大小的篡改函数进行安全保护。然而，目前还没有已知的针对有界多项式大小攻击者的非可塑编码，获得这样一种编码一直是一个重大的未解问题。
> 
> 我们提出了第一种构造出的非可塑编码，可以对所有具有有界并行时间的多项式大小的篡改函数进行安全保护。这个类别比所有有界多项式大小的函数还要大。具体而言，这个类别包括所有非一致性NC函数（以及更多）。我们的构造方法在普通模型下（即，没有可信的设置）依赖于几个密码学假设，如无密钥哈希函数、时间锁谜题以及其他标准假设。此外，我们的构造方法具有几个吸引人的特点：编码的复杂性与篡改函数的类别无关，我们可以获得（亚）指数级小的误差。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_18](https://doi.org/10.1007/978-3-030-84252-9_18)
## Improved Computational Extractors and Their Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#improved-computational-extractors-and-their-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#improved-computational-extractors-and-their-applications)**
### 作者
* Dakshita Khurana, University of Illinois Urbana-Champaign, Champaign, USA
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Bengaluru, India
### 摘要
> 最近的重要突破实现了在低最小熵区域中操作的第一个双源提取器。不幸的是，这些构造受到非可忽略误差的影响，将误差减少到可忽略级别仍然是一个重要的未解决问题。在最近的工作中，Garg、Kalai和Khurana（GKK，Eurocrypt 2020）在共同随机字符串（CRS）的存在下，对这个问题进行了有意义的放松，将其转化为计算设置。在这个放松的模型中，他们的工作建立了具体的双源提取器，用于具有最小熵\(n^{\gamma }\)（对于某个常数\(\gamma \)）和可忽略误差的一类受限制的不平衡源，基于次指数DDH假设。
> 
> 在这项工作中，我们研究了计算提取器在CRS模型中是否适用于更具挑战性的环境。具体而言，我们研究了网络提取器协议（Kalai等，FOCS 2008）和对抗性源的提取器（Chattopadhyay等，STOC 2020）在CRS模型中的应用。我们观察到这些设置需要对平衡源工作良好的提取器，使得GKK的结果不适用。
> 
> 我们通过在CRS模型中并且基于次指数难度的DDH假设，获得了以下结果：
> 
> 我们获得了针对平衡源的“最优”计算双源提取器和非可塑提取器：要求两个源只有多对数最小熵，并实现可忽略的误差。为了得到这个结果，我们对GKK提取器进行了更紧密和更简单的分析。
> 
> 我们获得了一个单轮的网络提取器协议，用于具有多对数最小熵源的情况，可以容忍最优数量的对抗性损坏。在信息论设置中，先前的工作需要具有高最小熵率的源，在计算设置中，轮复杂度随参与方数增长，需要具有线性最小熵的源，并依赖于指数难度（尽管没有CRS）。
> 
> 我们获得了一个针对多对数最小熵源的“最优”对抗性源提取器，其中诚实源的数量只有2个，并且每个被损坏的源可以依赖于其中一个诚实源。在信息论设置中，先前的工作需要假设大量的诚实源。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_19](https://doi.org/10.1007/978-3-030-84252-9_19)
## Adaptive Extractors and Their Application to Leakage Resilient Secret Sharing.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#adaptive-extractors-and-their-application-to-leakage-resilient-secret-sharing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#adaptive-extractors-and-their-application-to-leakage-resilient-secret-sharing)**
### 作者
* Nishanth Chandran, Microsoft Research, Bangalore, India
* Sai Lakshmi Bhavana Obbattu, Microsoft Research, Bangalore, India
* Bhavana Kanukurthi, Indian Institute of Science, Research Supported by Microsoft Research Grant, Bangalore, India
* Sruthi Sekar, Indian Institute of Science, Research Supported by TCS Research Grant, Bangalore, India
### 摘要
> 我们引入了自适应提取器。与传统的随机提取器不同的是，即使对手在观察提取器输出后获得了源泄漏，我们的提取器也能够保证安全性。我们通过展示自适应提取器在获取秘密共享方案中的自适应泄漏时的应用，为研究这样的提取器提供了有力的论据。
> 
> 具体而言，在2020年的FOCS会议上，Chattopadhyay、Goodman、Goyal、Kumar、Li、Meka、Zuckerman构建了一个自适应安全的泄漏抵抗秘密共享方案（LRSS），其中速率和泄漏率都为\(\mathcal {O}(1/n)\)，其中\(n\)是参与方的数量。在这项工作中，我们构建了一个自适应安全的LRSS，它在速率、泄漏率和敌手可以从中获取泄漏的总共享数量之间提供了一个有趣的权衡。作为一个特殊情况，当考虑到\(t = \alpha n\)（常数\(0<\alpha <1\)）的阈值的\(t\)中的\(t\)个秘密共享方案时，我们构建了一个方案，其速率和泄漏率都是常数，并允许对手从所有但第\(t-1\)个共享获取泄漏，同时完全透明地提供剩下的\(t-1\)个共享给对手。（在此之前，对于任何阈值，都不知道能够容忍自适应泄漏的常数速率LRSS方案。）
> 
> 最后，我们展示了我们的技术在非可塑秘密共享和安全消息传输中的应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_20](https://doi.org/10.1007/978-3-030-84252-9_20)
## Upslices, Downslices, and Secret-Sharing with Complexity of 1.5n.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#upslices-downslices-and-secret-sharing-with-complexity-of-1-5n) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#upslices-downslices-and-secret-sharing-with-complexity-of-1-5n)**
### 作者
* Benny Applebaum, Tel Aviv University, Tel Aviv, Israel
* Oded Nir, Tel Aviv University, Tel Aviv, Israel
### 摘要
> 一个秘密分享方案允许将秘密s分发给n个参与方，只有一些预定义的“授权”方集合可以重构秘密，而其他所有“未授权”方集合对s一无所知。授权/未授权方集合的集合可以由一个单调函数\(f:\{0,1\}^n\rightarrow \{0,1\}\)来表示。在本文中，我们关注的是所有最小项都是大小为a的集合的单调函数，以及它们的对偶 - 最大项大小为b的单调函数。我们将这些类称为(a, n)-上片和(b, n)-下片，并注意到这些自然家族对应于单调a-正则DNFs和单调\((n-b)\)-正则CNFs。我们得出以下结果。
> 
> 1.（一般的下片）每个下片可以用总共\(1.5^{n+o(n)}<2^{0.585 n}\)的份额大小实现。由于每个单调函数都可以被廉价地分解成n个下片，我们对一般的访问结构得到了类似的结果，改进了之前已知的Applebaum, Beimel, Nir和Peter(STOC 2020)的\(2^{0.637n+o(n)}\)复杂度。我们还在线性秘密分享方案的指数上实现了一个小的改进。
> 
> 2.（上片的随机混合）继Beimel和Farràs（TCC 2020）研究了具有常规大小项的随机DNFs的复杂度之后，我们考虑以下一般分布F，它是关于单调DNFs的：对于每个宽度值\(a\in [n]\)，均匀采样大小为a的\(k_a\)个单调项，其中 \(\mathbf{k}=(k_1,\ldots ,k_n)\) 是一个任意的非负整数向量。我们证明，除非指数小的概率，F可以用大小为\(2^{0.5 n+o(n)}\)的份额实现，并且可以通过指数小于2/3线性实现。我们的证明还为“指数难”的访问结构提供了候选分布。
> 
> 我们利用我们的结果探讨了几个看似无关的秘密分享方案复杂度问题之间的联系，例如最坏情况与平均情况，线性与非线性，原始与对偶访问结构。我们证明，在这些设置中的至少一个中，秘密分享复杂度存在显著差距。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_21](https://doi.org/10.1007/978-3-030-84252-9_21)
## Asymptotically-Good Arithmetic Secret Sharing over $\mathbb {Z}/p^{\ell }\mathbb {Z}$ with Strong Multiplication and Its Applications to Efficient MPC.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#asymptotically-good-arithmetic-secret-sharing-over-mathbb-z-p-ell-mathbb-z-with-strong-multiplication-and-its-applications-to-efficient-mpc) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#asymptotically-good-arithmetic-secret-sharing-over-mathbb-z-p-ell-mathbb-z-with-strong-multiplication-and-its-applications-to-efficient-mpc)**
### 作者
* Ronald Cramer, Cryptology Group, CWI Amsterdam, Amsterdam, The Netherlands
* Ronald Cramer, Leiden University, Leiden, The Netherlands
* Matthieu Rambaud, Telecom Paris, Institut Polytechnique de Paris, Paris, France
* Chaoping Xing, School of Electronic Information and Electric Engineering, Shanghai Jiao Tong University, Shanghai, China
* Chaoping Xing, State Key Laboratory of Cryptology, Beijing, China
### 摘要
> 本文研究了在环\(\mathbb{Z}/p^{\ell}\mathbb{Z}\)上的信息理论安全的多方计算（MPC）。在[Abs+19a, TCC’19]的工作中，提出了基于\(\mathbb{Z}/p^{\ell}\mathbb{Z}\)上的Shamir秘密共享的协议。与有限域的情况类似，其局限性在于随着参与者数量的增加，份额大小也会增加。然后在[Abs+20, Asiacrypt’20]中开发了几种MPC协议来克服这一限制。然而，（i）它们的离线乘法门在参与者数量上具有超线性的通信复杂度；（ii）在最重要的情况下，即在\(\mathbb{Z}/2^{\ell}\mathbb{Z}\)上，由于从域到环的自正交码的难以实现的提升，份额大小加倍；（iii）最重要的是，由于缺乏强乘法，[Abs+20, Asiacrypt’20]中给定的秘密共享无法应用BGW模型。
> 
> 在本文中，我们克服了上述所有缺点。在独立利益方面，我们建立了具有强乘法的算术秘密共享，这是BGW模型中最重要的基本机制。顺便说一下，我们对（i）的解决方案比[PS21, EC’21]的并发解决方案有一些优势，因为它是直接的，只有一页长，而且可以应用于\(\mathbb{Z}/p^{\ell}\mathbb{Z}\)。最后，我们将反向乘法友好嵌入（RMFE）从域提升到环，具有相同的（线性）复杂度。需要指出的是RMFE已经成为MPC通信复杂度的标准技术，在同一个电路的许多实例的情况下，我们恢复了在\(\mathbb{Z}/2^{\ell}\mathbb{Z}\)上的MPC的摊销复杂度与在域上的相同复杂度。
> 
> 为了得到我们的理论结果，我们利用了在环上的曲线提升的存在性，然后利用已知结果表明黎曼-罗赫空间是自由模。为了使我们的方案实际可行，我们从现有的计算技术获得在有限域上的良好代数几何码。然后我们提出并实现了一个有效的算法来Hensel提升码的生成矩阵，以使其在环上保持乘法条件。另一方面，一般来说，环上码的随机提升不会保持可乘性。最后，我们提供了在环上份额共享和重构的有效方法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_22](https://doi.org/10.1007/978-3-030-84252-9_22)
## Large Message Homomorphic Secret Sharing from DCR and Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#large-message-homomorphic-secret-sharing-from-dcr-and-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#large-message-homomorphic-secret-sharing-from-dcr-and-applications)**
### 作者
* Lawrence Roy, Oregon State University, Corvallis, USA
* Jaspal Singh, Oregon State University, Corvallis, USA
### 摘要
> 我们提出了第一个同时具有可忽略正确性错误、支持指数级范围整数，并且依赖于不被认为暗示全同态加密（FHE）的具体假设——决策组合剩余（DCR）假设的同态秘密分享（HSS）构建。这解决了Boyle、Gilboa和Ishai在Crypto 2016中提出的一个开放问题。同态秘密分享类似于完全同态加密，只是密文在两个非共谋的评估者之间进行共享。以前的HSS构建要么具有不可忽略的正确性错误和多项式大小的明文空间，要么基于更强的LWE假设。我们还介绍了我们技术的两个应用：具有恒定带宽开销的两个服务器ORAM，以及具有可忽略错误率的速率-1反向陷门哈希函数。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_23](https://doi.org/10.1007/978-3-030-84252-9_23)
## Traceable Secret Sharing and Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#traceable-secret-sharing-and-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#traceable-secret-sharing-and-applications)**
### 作者
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
* Vipul Goyal, NTT Research, Sunnyvale, USA
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
### 摘要
> 考虑这样一个场景，Alice使用一个t-out-of-n的秘密共享方案将一些秘密数据s存储在n个服务器上。Trudy（收集者）对Alice的秘密数据感兴趣，并愿意为此付费。Trudy在互联网上发表了一份广告，描述了一种复杂的加密方案，用于从n个服务器中收集份额。每个决定提交其份额的服务器都会获得丰厚的货币奖励，并且保证在法庭上不会因违反与Alice的服务协议而遭到逮捕或起诉，“免受追究”。Bob是其中的一台服务器，他看到了这份广告。在仔细检查了收集方案后，Bob得出结论，Alice无法在法庭上证明他提交了自己的份额。实际上，如果Bob是理性的，他可能会使用广告中的加密方案并提交自己的份额，因为没有处罚，也没有被抓到和起诉的恐惧。我们能设计一个秘密共享方案，让Alice避免这种情况吗？
> 
> 我们引入了一种名为“可追踪秘密共享”的新原语来解决这个问题。特别地，可追踪的秘密共享方案保证作弊的服务器始终有被追踪和起诉的风险，通过提供有效证据（可以在法庭上审查）来暗示其不诚实行为。我们探讨了各种定义方面，并展示了它们在构建方面是非常非平凡的（即使忽略了效率方面）。然后，我们给出了一个在存在安全的两方计算协议的前提下的可追踪秘密共享的高效构造。我们还展示了在构建可追踪的多服务器计算委托协议中，这种原语的应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_24](https://doi.org/10.1007/978-3-030-84252-9_24)
## Quadratic Secret Sharing and Conditional Disclosure of Secrets.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#quadratic-secret-sharing-and-conditional-disclosure-of-secrets) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#quadratic-secret-sharing-and-conditional-disclosure-of-secrets)**
### 作者
* Amos Beimel, Ben-Gurion University of the Negev, Be’er-Sheva, Israel
* Hussien Othman, Ben-Gurion University of the Negev, Be’er-Sheva, Israel
* Naty Peter, Tel-Aviv University, Tel-Aviv, Israel
### 摘要
> 存在着巨大的差距，关于任意n方访问结构的秘密共享方案份额大小的上限和下限之间，在我们目前的知识一致的情况下，最优秘密份额大小可能在多项式和指数之间的任何位置。对于线性秘密共享方案，我们知道几乎所有n方访问结构的秘密份额大小必须是指数级的。此外，大多数高效秘密共享方案的构造都是线性的。我们想研究更大类别的秘密共享方案并达到两个目标。一方面，我们想证明更大类别的秘密共享方案的下限，可能为一般秘密共享方案的份额大小提供一些启示。另一方面，我们想为没有高效线性秘密共享方案的访问结构构造高效的秘密共享方案。出于这种动机，Paskin-Cherniavsky和Radune（ITC'20）定义并研究了一类新的秘密共享方案，其中份额通过将密钥和一些随机域元素应用到度-d多项式来生成。特殊情况（d=1）对应于线性和多线性秘密共享方案。
> 
> 我们定义并研究了两种额外的多项式秘密共享方案类别：（1）对于每个被授权集合，密钥的重建是通过多项式进行的，（2）分享和重建都由多项式完成的方案。对于线性秘密共享方案，具有线性分享和具有线性重建的方案是等价的。我们提供证据表明，对于多项式秘密共享方案，具有多项式分享的方案可能比具有多项式重建的方案更强。我们还对具有多项式重建的方案的份额大小证明了下限。在积极的一面，我们提供了具有二次分享和重建的秘密共享方案和有条件泄露秘密（CDS）协议的构造。我们扩展了Liu等人（CRYPTO'17）的一个构造，并为消息大小为O(N^(k-1)/3)的函数构造了最优的二次k-服务器CDS协议。我们展示了如何将我们的二次k-服务器CDS协议转换为一个稳健的CDS协议，并使用稳健的CDS协议来构建任意访问结构的二次秘密共享方案，其份额大小为O(2^(0.705n))；这比线性秘密共享方案已知的最优份额大小O(2^(0.7576n))更好，但比一般秘密共享方案已知的最优份额大小O(2^(0.585n))更差。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_25](https://doi.org/10.1007/978-3-030-84252-9_25)
## Constructing Locally Leakage-Resilient Linear Secret-Sharing Schemes.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-3].md#constructing-locally-leakage-resilient-linear-secret-sharing-schemes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-3].md#constructing-locally-leakage-resilient-linear-secret-sharing-schemes)**
### 作者
* Hemanta K. Maji, Department of Computer Science, Purdue University, West Lafayette, USA
* Mingyuan Wang, Department of Computer Science, Purdue University, West Lafayette, USA
* Anat Paskin-Cherniavsky, Department of Computer Science, Ariel University, Ariel, Israel
* Tom Suad, Department of Computer Science, Ariel University, Ariel, Israel
### 摘要
> 创新的侧信道攻击多次证明了加密实现并非不透明的黑盒。因此，即使信息泄露通过未预料到的途径，确保加密构造的安全性至关重要。秘密分享方案是一种基本的密码学原语，几乎作为所有门限密码学的基础。我们对秘密分享方案的泄露鲁棒性的理解仍处于初级阶段。
> 
> 本工作研究了局部泄露鲁棒的线性秘密分享方案。对于n个秘密分享，对手可以从每个分享中泄露m位任意局部泄露。然而，在局部泄露鲁棒的秘密分享方案中，泄露的联合分布不会揭示秘密的附加信息。
> 
> 对于每个常数m，我们证明了与随机线性代码（在足够大的素域上）对应的Massey秘密分享方案是局部泄露鲁棒的，其中\(k/n > 1/2\)是一个常数。之前最佳构造由Benhamouda、Degwekar、Ishai、Rabin (CRYPTO–2018)提出，需要\(k/n > 0.907\)。技术挑战在于所有可能的m位局部泄露函数的数量呈指数增长，远远超过随机线性代码的数量。我们的技术创新从确定一个适当的伪随机性启发式测试系列开始；通过通过这些测试，就足以确保泄露鲁棒性。我们证明大多数线性代码都通过了这个测试系列中的所有测试。这种局部泄露鲁棒的线性秘密分享方案的蒙特卡罗构造在泄露鲁棒安全计算中具有应用。
> 
> 此外，我们强调了这一工作中所有分析方法的一个关键瓶颈。Benhamouda等人引入了一个分析代理来研究秘密分享方案的泄露鲁棒性；如果代理较小，则方案是泄露鲁棒的。然而，我们提出了一个一位局部泄露函数，证明了逆命题是错误的，这促使我们需要捕捉泄露鲁棒性更准确的新的分析行为良好函数的需求。
> 
> 从技术上讲，分析涉及概率和组合技术以及（离散）傅里叶分析。我们相信，捕捉局部泄露函数的新“测试”系列具有独立且更广泛的兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84252-9_26](https://doi.org/10.1007/978-3-030-84252-9_26)
