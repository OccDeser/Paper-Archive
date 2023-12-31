# Crypto[2022-1]
## Rotational Differential-Linear Distinguishers of ARX Ciphers with Arbitrary Output Linear Masks.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#rotational-differential-linear-distinguishers-of-arx-ciphers-with-arbitrary-output-linear-masks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#rotational-differential-linear-distinguishers-of-arx-ciphers-with-arbitrary-output-linear-masks)**
### 作者
* Zhongfeng Niu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yunwen Liu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zhongfeng Niu, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Yunwen Liu, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Zhongfeng Niu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yunwen Liu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yunwen Liu, College of Liberal Arts and Science, National University of Defense Technology, Changsha, China
* Chao Li, College of Liberal Arts and Science, National University of Defense Technology, Changsha, China
* Siwei Sun, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Yunwen Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
### 摘要
> 旋转微分线性攻击是在EUROCRYPT 2021提出的微分线性攻击的一种推广，它通过用旋转微分替代攻击的微分部分来实现。在EUROCRYPT 2021上，刘等人提出了一种基于Morawiecki等人的技术（FSE 2013）的方法，用于评估旋转微分线性相关性，特别是对于输出线性掩码是单位向量的特殊情况。利用这种方法，发现了对FRIET、Xoodoo和Alzette的一些强大的（旋转）微分线性区分器，其中输出线性掩码是单位向量。然而，如何计算任意输出掩码的旋转微分线性相关性仍然未解决。在这项工作中，我们通过提出一种高效的算法来计算模加法的（旋转）微分线性相关性，部分解决了这个开放性问题。然后，我们基于该算法推导出了一种评估ARX密码的（旋转）微分线性相关性的技术。我们将这种技术应用于Alzette、SipHash、ChaCha和SPECK。结果显示，我们发现了明显改进的（旋转）微分线性区分器，包括确定性区分器。本工作的所有结果都是实用的，并经过实验证实了我们方法的有效性。此外，我们试图解释在FSE 2008、FSE 2016和CRYPTO 2020对抗ChaCha中使用的实验区分器。预测的相关性与实验结果接近。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_1](https://doi.org/10.1007/978-3-031-15802-5_1)
## Implicit White-Box Implementations: White-Boxing ARX Ciphers.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#implicit-white-box-implementations-white-boxing-arx-ciphers) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#implicit-white-box-implementations-white-boxing-arx-ciphers)**
### 作者
* Adrián Ranea, imec-COSIC, KU Leuven, Leuven, Belgium
* Bart Preneel, imec-COSIC, KU Leuven, Leuven, Belgium
* Joachim Vandersmissen, Atsec Information Security, Austin, USA
### 摘要
> 自从20年前公布了第一个白盒AES实现以来，在面对全面控制设备的攻击者时，对安全实现设计方面没有取得重大进展。设计现有分组密码的白盒实现是一个具有挑战性的问题，因为所有提案都已被攻破。迄今为止，只有两种白盒设计策略被公开发表：CEJO框架只能应用于具有小S盒的密码，而自等价编码仅应用于AES。
> 
> 在这项研究中，我们提出了隐式实现，这是一种基于隐式函数的白盒实现设计，我们表明当前能够攻破CEJO或自等价实现的通用攻击对隐式实现无效。隐式实现的生成和安全性与密码的非线性层的自等价相关，我们提出一种基于CCZ等价的新方法来获得自等价。我们在一个名为BoolCrypt的新开源工具中实现了这种方法和许多其他功能，我们首次使用它来获得联系、线性乃至二次自等价的置换模加法。利用隐式框架和这些自等价，我们首次描述了通用加法-旋转-XOR（ARX）密码的实用白盒实现，并提供了一个开源工具来轻松生成ARX密码的隐式实现。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_2](https://doi.org/10.1007/978-3-031-15802-5_2)
## Superposition Meet-in-the-Middle Attacks: Updates on Fundamental Security of AES-like Hashing.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#superposition-meet-in-the-middle-attacks-updates-on-fundamental-security-of-aes-like-hashing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#superposition-meet-in-the-middle-attacks-updates-on-fundamental-security-of-aes-like-hashing)**
### 作者
* Danping Shi, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zhenzhen Bao, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Jian Guo, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Yi Tu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Zhenzhen Bao, Institute for Network Sciences and Cyberspace, BNRist, Tsinghua University, Beijing, China
* Danping Shi, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> “Meet-in-the-Middle（中间碰面）”方法是最强大的密码分析技术之一，其在对完全MD4、MD5、Tiger、HAVAL和Haraka-512 v2散列函数的前像攻击以及对完整分组密码KTANTAN的密钥恢复中得到了应用的证明。其成功依赖于将一个原语分为两个独立的块，其中状态的每个活跃单元仅用于表示一个块，或者一旦混合就被认为无法使用。我们观察到一些这样的单元是线性混合的，可以像独立单元那样有用。这导致引入了叠加状态和一整套附带技术，我们将其合并到Bao等人在EUROCRYPT 2021和Dong等人在CRYPTO 2021中提出的基于MILP的搜索框架中，并在广泛的类AES散列函数和分组密码中找到了应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_3](https://doi.org/10.1007/978-3-031-15802-5_3)
## Triangulating Rebound Attack on AES-like Hashing.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#triangulating-rebound-attack-on-aes-like-hashing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#triangulating-rebound-attack-on-aes-like-hashing)**
### 作者
* Xiaoyang Dong, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Jian Guo, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Shun Li, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Phuong Pham, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Xiaoyang Dong, National Financial Cryptography Research Center, Beijing, China
* Shun Li, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
### 摘要
> 反弹攻击是由Mendel等人在2009年的FSE上引入的，旨在利用状态的自由度来完成差分路径的一个繁重中轮。通过Lamberger等人在2009年的ASIACRYPT和Gilbert与Peyrin在2010年的FSE上发明的超级S盒技术，内部阶段被扩展到2轮。在2010年的ASIACRYPT上，Sasaki等人通过引入非完全激活的超级S盒进一步减少了内存需求。在本文中，我们通过引入超级内部阶段来进一步发展这一研究领域，它能够利用状态和密钥的自由度连接多个1轮或2轮（非完全激活）的超级S盒内部阶段，并且不需要使用大容量内存。这实质上将内部阶段扩展了最多3轮。我们将这一技术应用于寻找几种类似AES的哈希函数的经典或量子碰撞，并在包括AES-128和SKINNY哈希模式、Saturnin-Hash和Grøstl-512在内的目标中将攻击轮数提高了1至5轮。为了证明我们攻击的正确性，在传统环境中实现了在6轮AES-128-MMO/MP上的半自由启动碰撞，并立即在标准个人电脑上找到了一个示例对。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_4](https://doi.org/10.1007/978-3-031-15802-5_4)
## Public Randomness Extraction with Ephemeral Roles and Worst-Case Corruptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#public-randomness-extraction-with-ephemeral-roles-and-worst-case-corruptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#public-randomness-extraction-with-ephemeral-roles-and-worst-case-corruptions)**
### 作者
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
* João Ribeiro, Carnegie Mellon University, Pittsburgh, PA, USA
* Maciej Obremski, National University of Singapore, Singapore, Singapore
### 摘要
> 我们提出了一个简单的信息理论模型，用于在区块链环境中生成可公开验证的随机性，并且与You-Only-Speak-Once（YOSO）协议（CRYPTO 2021）密切相关。为了避免拒绝服务攻击，参与方只能一次性按顺序广播公共值并将秘密值转发给未来的参与方。此外，一个无限制的对手可以损坏最多t个被选择的子集。相比之下，现有的YOSO协议只处理随机损坏。以最坏情况的损坏为例，我们可以减少对角色分配机制的信任，该机制在YOSO中被假定为完全随机。
> 
> 我们研究了在我们的模型中允许无条件随机抽取的最大损坏阈值t：
> 
> 就可行性而言，我们给出了适用于t个损坏和\(n=6t+1\)或\(n=5t\)个参与方的协议，具体取决于敌对方是否立即获知转发给损坏方的秘密值，或者仅当损坏方执行时才获知。这两种设置都是基于秘密值转发的实际应用推动而产生的。为了设计这样的协议，我们超越了基于委员会的方法，该方法对YOSO中的随机损坏已经足够，但在选择性损坏方面效果不佳。
> 
> 为了补充我们的协议，我们证明了在上述两种设置中，当损坏阈值t和\(n\le 4t\)个参与方时，低错误率的随机抽取是不可能的。这也提供了选择性和随机损坏之间的差异，因为后者允许在接近 n/2 的随机损坏情况下进行随机抽取。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_5](https://doi.org/10.1007/978-3-031-15802-5_5)
## (Nondeterministic) Hardness vs. Non-malleability.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#nondeterministic-hardness-vs-non-malleability) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#nondeterministic-hardness-vs-non-malleability)**
### 作者
* Marshall Ball, New York University, New York, USA
* Dana Dachman-Soled, University of Maryland, College Park, USA
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 我们提出了第一种针对多项式大小有界电路的非可塑码的显式构造。这些对象意味着未证明的电路下界，我们的构造是安全的，前提是\(\textsf{E}\)需要指数大小的非确定电路，这是分析随机化文献中的一个假设。
> 
> 以往关于多项式大小电路的NMC的工作，要么需要不可篡改的CRS[Cheraghchi，Guruswami ITCS’14; Faust、Mukherjee、Venturi、Wichs EUROCRYPT’14]，要么需要非常强的密码学假设[Ball，Dachman-Soled，Kulkarni，Lin，Malkin EUROCRYPT’18; Dachman-Soled，Komargodski，Pass CRYPTO’21]。后一类的工作只能针对高效区分器达到非可塑性，更重要的是它们使用的密码学对象在随机预言模型之外没有已知的可证安全实例。在这个意义上，以往的工作都没有从非启发式假设中得出完全显式的代码。我们的假设不被认为蕴含单向函数的存在，这表明在这个类别中，加密学对于不可塑性是不必要的。
> 
> 从技术上讲，我们通过非确定性地将多项式大小篡改减少到分割状态篡改来证明安全性。这种技术足够通用，使得我们能够为多项式大小电路采样的源构造第一个无需种子的非可塑提取器[Cheraghchi，Guruswami TCC’14]（或由多项式大小电路识别[Shaltiel CC’11]）和多项式大小电路篡改的情况。我们的构造在假设\(\textsf{E}\)需要指数大小\(\varSigma _4\)-电路（或\(\varSigma _3\)-电路）的情况下是安全的，这个假设是从这样的源中提取随机性的最新技术（无需非可塑性）。
> 
> 完整版本的论文中还包括几个额外的结果[Eprint 2022/070]。首先，我们观察到非可塑码和非可塑秘密共享[Goyal，Kumar STOC’18]在多项式大小篡改方面本质上是等价的。更详细地说，假设\(\textsf{E}\)对于指数大小非确定性电路来说是困难的，任何高效的秘密共享方案可以在多项式大小电路篡改下实现非可塑性。
> 
> 其次，我们观察到我们的构造只能达到逆多项式（统计学）安全性是固有的事实。扩展了[Applebaum，Artemenko，Shaltiel，Yang CC’16]的结果，我们证明使用黑盒约简是不可能做得更好的。然而，我们将[Applebaum，Artemenko，Shaltiel，Yang CC’16]的相对误差概念推广到非可塑提取器，并展示了它们可以从类似的假设中构造出来。
> 
> 第三，我们观察到相对误差非可塑提取器可以用于使广泛的密码学原语具有耐篡改和泄漏容忍性，同时保持微不足道的安全性保证。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_6](https://doi.org/10.1007/978-3-031-15802-5_6)
## Short Leakage Resilient and Non-malleable Secret Sharing Schemes.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#short-leakage-resilient-and-non-malleable-secret-sharing-schemes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#short-leakage-resilient-and-non-malleable-secret-sharing-schemes)**
### 作者
* Nishanth Chandran, Microsoft Research, Bengaluru, India
* Sai Lakshmi Bhavana Obbattu, Microsoft Research, Bengaluru, India
* Bhavana Kanukurthi, Department of Computer Science and Automation, Indian Institute of Science, Bengaluru, India
* Sruthi Sekar, UC Berkeley, Berkeley, CA, USA
### 摘要
> 防泄密秘密共享（LRSS）允许一个经销商将秘密分享给n方，以便任何授权的方的子集可以从他们的份额恢复秘密，而获得任何未经授权的方的子集份额以及来自其他份额的有界泄露的对手对秘密没有任何信息。非可塑密钥共享（NMSS）提供了一种保证，即即使份额被对手篡改，也会重构为原始消息或与原始消息无关的内容。
> 
> LRSS和NMSS方案的最重要参数是每个份额的大小。对于LRSS，在本地泄露模型中（即，每个份额的泄露函数相互独立且有界），Srinivasan和Vasudevan（CRYPTO 2019）提供了一个阈值访问结构的方案，其份额大小约为（3倍的消息长度+μ），其中μ是每个份额允许的泄露位数。对于NMSS的情况，已知的最佳结果（同样归功于上述工作）的份额大小为（11倍的消息长度）。
> 
> 在这项工作中，我们构建了具有显著改进的份额大小的LRSS和NMSS方案。此外，我们的LRSS方案获得了最优的份额和泄露大小。特别地，我们获得了以下结果：
> 
> 我们构建了一个信息论LRSS方案，适用于阈值访问结构，其份额大小为（消息长度+μ）。
> 
> 作为上述结果的一个应用，我们获得了一个份额大小为（4倍的消息长度）的NMSS。此外，对于共享随机消息的特殊情况，我们获得了一个份额大小为（2倍的消息长度）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_7](https://doi.org/10.1007/978-3-031-15802-5_7)
## Cryptography from Pseudorandom Quantum States.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#cryptography-from-pseudorandom-quantum-states) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#cryptography-from-pseudorandom-quantum-states)**
### 作者
* Prabhanjan Ananth, UCSB, Santa Barbara, USA
* Luowen Qian, Boston University, Boston, USA
* Henry Yuen, Columbia University, New York, USA
### 摘要
> 疑似随机状态，由Ji，Liu和Song（Crypto’18）引入，是可以高效计算的量子状态，其在计算上与Haar随机状态难以区分。单向函数意味着存在疑似随机状态，但Kretschmer（TQC’20）最近构建了一个相对于不存在单向函数但仍存在伪随机状态的预言。受此启发，我们研究了基于伪随机状态进行有趣的加密任务的可能性。
> 
> 我们构建了以下内容，假设存在将λ位种子映射到ω(logλ)量子比特状态的伪随机状态生成器：（a）在统计上具有约束力且在计算上具有隐藏性的承诺和（b）伪一次性加密方案。从（a）的结果来看，伪随机状态足以构建在不诚实多数情况下具有恶意安全性的多方计算协议。
> 
> 我们的构建是基于一个称为伪随机函数状态（PRFS）的新概念得出的，这是对伪随机状态的一种概括，类似于经典的伪随机函数概念。除了上述两个应用之外，我们相信我们的概念可以有效地在许多其他加密应用中取代伪随机函数。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_8](https://doi.org/10.1007/978-3-031-15802-5_8)
## Certified Everlasting Zero-Knowledge Proof for QMA.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#certified-everlasting-zero-knowledge-proof-for-qma) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#certified-everlasting-zero-knowledge-proof-for-qma)**
### 作者
* Taiga Hiroka, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Ryo Nishimaki, NTT Corporation, Tokyo, Japan
* Takashi Yamakawa, NTT Corporation, Tokyo, Japan
### 摘要
> 在已知的经典零知识协议构造中，要么只对计算受限的对手保证零知识性质，要么只保证计算对抗性。事实上，对于\(\textbf{NP}\)问题，要在经典验证者下同时实现统计意义上的零知识性和统计意义上的正确性几乎是不可能的，除非多项式时间层级崩溃，并且即使使用量子验证者也被认为是不可能的。在此工作中，我们引入了一个新的折衷方案，称之为\(\textbf{QMA}\)的认证的永恒零知识证明。这是一个针对\(\textbf{QMA}\)的计算零知识证明，但是验证者会发出一个经典证书，证明验证者已经删除了其量子信息。如果证书有效，即使是无限制的恶意验证者也无法获得超出陈述有效性的信息。
> 
> 我们构造了一个对\(\textbf{QMA}\)的认证的永恒零知识证明。在构造过程中，我们引入了一个新的量子密码学基元，称之为具有统计绑定和认证的永恒隐藏的承诺，其中隐藏特性在接收者发出有效证书并删除了已承诺信息后变为统计性质。我们从Broadbent和Islam [TCC 2020]的带认证删除的量子加密（以黑盒方式）构造了具有统计绑定和认证的永恒隐藏的承诺，然后将其与Broadbent和Grilo [FOCS 2020]的\(\textbf{QMA}\)量子Sigma协议结合起来构造\(\textbf{QMA}\)的认证的永恒零知识证明。我们的构造在量子随机预言机模型下是安全的。具有统计绑定和认证的永恒隐藏的承诺本身具有独立的研究兴趣，并且在零知识之外还有许多其他有用的应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_9](https://doi.org/10.1007/978-3-031-15802-5_9)
## Quantum Commitments and Signatures Without One-Way Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#quantum-commitments-and-signatures-without-one-way-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#quantum-commitments-and-signatures-without-one-way-functions)**
### 作者
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 在古典世界中，承诺的存在等同于单向函数的存在。然而，在量子环境中，尽管不知道承诺是否意味着单向函数，但所有已知的量子承诺构造至少使用一个单向函数。那么在量子世界中，单向函数是否真的是承诺的必要条件呢？在这项工作中，我们证明了如果伪随机量子态存在，则存在具有计算隐藏性和统计绑定性的非交互式量子承诺（用于经典消息）。伪随机量子态是一组能够高效生成的量子态，但其多项式数量的副本在计算上无法与同样数量的Haar随机态副本区分开[Ji、刘和宋，CRYPTO 2018]。众所周知，即使在存在量子预言机的情况下，伪随机量子态仍然存在[克雷奇梅尔，TQC 2021]，这意味着即使不存在量子安全的经典密码原语，伪随机量子态仍然可能存在。因此，我们的结果表明，即使不存在量子安全的经典密码原语，量子承诺仍然可能存在。尤其地，即使不存在量子安全的单向函数，量子承诺也可能存在。在这项工作中，我们还考虑了数字签名，这是密码学中的另一个基本原语。我们证明了如果伪随机量子态存在，则存在具有量子公钥的一次安全数字签名。在古典环境中，数字签名的存在等同于单向函数的存在。然而，我们的结果表明，即使不存在量子安全的经典密码原语（包括量子安全的单向函数），量子签名仍然可能存在。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_10](https://doi.org/10.1007/978-3-031-15802-5_10)
## Semi-quantum Tokenized Signatures.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#semi-quantum-tokenized-signatures) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#semi-quantum-tokenized-signatures)**
### 作者
* Omri Shmueli, Tel Aviv University, Tel Aviv, Israel
### 摘要
> 量子化令牌签名方案（Ben-David和Sattath，QCrypt 2017）允许发送者生成和分发量子不可复制的状态，授予持有人一次性的代表发送者进行签名的权限。这种方案是公钥量子货币方案的加强版，因为它们意味着在系统中某些通信通道可以变为经典方式的公钥量子货币。
> 
> 一个更强大的原语是半量子化令牌签名，其中发送者是经典的，并且可以将代币生成委托给一个（可能是恶意的）量子接收者。半量子化令牌签名方案暗示了一种功能强大的公钥量子货币，满足两个关键特征：
> 
> 银行是经典的，并且该方案可以在完全经典的通信网络上执行。此外，银行无状态，并且在创建纸币后，除了系统中的账户余额以外，不保存任何信息或陷阱门。这种量子货币方案解决了Radian和Sattath（AFT 2019）提出的主要问题。
> 
> 此外，系统中用户之间的经典通信交易无需经过银行。这使得交易既是经典的又是私密的。
> 
> 虽然已经知道完全量子化令牌签名（其中发送者是量子的，并且自己生成令牌）是基于量子安全的不可区分性混淆和单射单向函数的，但是半量子版本在任何计算假设下都未知。在这项研究中，我们构建了一个基于量子安全的不可区分性混淆和学习困难问题的亚指数困难度的半量子化令牌签名方案。在此过程中，我们展示了量子陪集状态的新属性以及关于经典子空间成员电路的不可区分性混淆的新的困难结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_11](https://doi.org/10.1007/978-3-031-15802-5_11)
## Structure-Aware Private Set Intersection, with Applications to Fuzzy Matching.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#structure-aware-private-set-intersection-with-applications-to-fuzzy-matching) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#structure-aware-private-set-intersection-with-applications-to-fuzzy-matching)**
### 作者
* Gayathri Garimella, Oregon State University, Corvallis, USA
* Mike Rosulek, Oregon State University, Corvallis, USA
* Jaspal Singh, Oregon State University, Corvallis, USA
### 摘要
> 在双方私人集交（PSI）中，Alice拥有一个集合X，Bob拥有一个集合Y，他们只了解\(X \cap Y\)的内容。我们引入了结构感知PSI协议，利用Alice公开知道具有某种结构的X的情况。结构感知PSI的目标是通过通信量与Alice的集合的描述大小相关而不是与基数相关。
> 
> 我们引入了基于功能秘密共享（FSS）的结构感知PSI的新通用范式。简言之，如果存在一类结构集的紧凑FSS，那么存在一种半诚实的PSI协议来支持这类输入集，通信成本仅与FSS份额大小成比例。一些先前的高效（简）PSI协议可以看作是我们新范式的特例，具有针对非结构化集合的隐式FSS。
> 
> 我们的PSI协议可以从之前未研究过的较弱型FSS进行实例化。我们开发了几种改进的FSS技术，利用了这些放宽的要求，在某些情况下比现有的FSS好上指数倍。
> 
> 最后，我们深入探讨了结构感知PSI的自然应用。如果Alice的集合X是某个度量空间中许多半径为\(\delta\)的球的并集，那么X和Y的交集对应于模糊PSI，其中各方了解它们的点在距离\(\delta\)之内的情况。在结构感知PSI中，通信成本与Alice集合中的球的数量相关，而不是它们的总体积。我们的技术为高维度的\(\ell _\infty\)和\(\ell _1\)度量（以及\(\ell _2\)度量的近似）提供了高效的模糊PSI。我们将这个模糊PSI协议实现为二维的\(\ell _\infty\)度量。对于合理的输入大小，我们的协议所需的时间比竞争方法减少了45-60％，通信量减少了85％，这些竞争方法只是将问题简化为简单的PSI。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_12](https://doi.org/10.1007/978-3-031-15802-5_12)
## Two-Round MPC Without Round Collapsing Revisited - Towards Efficient Malicious Protocols.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#two-round-mpc-without-round-collapsing-revisited-towards-efficient-malicious-protocols) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#two-round-mpc-without-round-collapsing-revisited-towards-efficient-malicious-protocols)**
### 作者
* Huijia Lin, University of Washington, Seattle, USA
* Tianren Liu, CFCS, Peking University, Beijing, China
### 摘要
> 最近的研究在构建轮优化、双轮多方计算（MPC）协议方面取得了令人振奋的进展。然而，到目前为止，大多数提案仍然复杂且低效。在这项工作中，我们提高了在具有诚实多数和恶意安全性的设置中双轮MPC的简单性和效率。我们的协议利用随机预言（RO）和与忘却线性评估（OLE）相关随机性的泛化，称为张量OLE，在有限域F上，并实现了以下目标：用于布尔电路的MPC：我们用于计算布尔电路的两轮恶意安全MPC协议的总体（渐近）计算成本为O（S·n³·log |F|），其中S是计算的电路大小，n是参与方数量，F是特征为2的域。该协议还对伪随机功能（PRF）进行黑匣子调用。用于算术分支程序（ABP）的MPC：我们用于在一般域F上计算ABPs的两轮信息论和恶意安全协议的总体计算成本为O（S^1.5·n³·log |F|），其中S是计算的ABP的大小。这两个协议的安全级别与域F的大小成反比。我们的构建是基于[Lin-Liu-Wee TCC’20]的简单两轮MPC协议，这些协议只是半诚实安全的。我们的主要技术贡献在于利用简单且轻量级的检查确保恶意安全，这些检查的复杂度仅比Lin，Liu和Wee的协议增加了一个常数开销。特别是，在计算布尔电路的情况下，我们的恶意MPC协议与（不安全地）以分布式方式计算Yao的搅混电路的复杂度相同（增加了一个常数开销）。最后，作为额外的贡献，我们展示了如何利用OT在特征为2的域中有效生成张量OLE相关性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_13](https://doi.org/10.1007/978-3-031-15802-5_13)
## More Efficient Dishonest Majority Secure Computation over $\mathbb {Z}_{2^k}$ via Galois Rings.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#more-efficient-dishonest-majority-secure-computation-over-mathbb-z-2-k-via-galois-rings) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#more-efficient-dishonest-majority-secure-computation-over-mathbb-z-2-k-via-galois-rings)**
### 作者
* Daniel Escudero, J.P. Morgan AI Research, New York, USA
* Chaoping Xing, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, China
* Chen Yuan, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, China
### 摘要
> 在这项工作中，我们提出了一种新颖的能够在不诚实的多数参与者环境下实现主动安全多方计算的协议，其中计算域是一个类型为\(\mathbb {Z}_{2^k}\)的环。我们不像SPD\(\mathbb {Z}_{2^k}\) (Cramer等人，CRYPTO 2018)及其派生版本那样考虑形式为\(\mathbb {Z}_{2^{k+\kappa }}\)的“扩展环”，而是利用一个实际的环扩展，或者更确切地说，大度数的Galois环扩展\(\mathbb {Z}_{p^k}[\texttt{X}]/(h(\texttt{X}))\)，以确保除了可忽略的概率外，对手不能作弊。这些技术已经在\(\mathbb {Z}_{p^k}\)上实现诚实多数参与者多方计算的背景下使用过，据我们所知，我们的工作是首次研究这些工具在不诚实的多数参与者环境中的优势。
> 
> 利用Galois环扩展需要非常小心，以避免由于使用更大的环而支付额外的开销。为了解决这个问题，在诚实多数参与者环境中使用了逆向乘法友好嵌入（RMFEs）（例如Cascudo等人，CRYPTO 2018），并且最近还在对\(\mathbb {Z}_2\)上的计算的不诚实多数参与者环境中使用了这种方法（Cascudo和Gundersen，TCC 2020）。我们利用(Cramer等人，CRYPTO 2021)中关于\(\mathbb {Z}_{p^k}\)上的最新RMFEs，结合(Abspoel等人，ASIACRYPT 2021)中引入的一些RMFE优化的调整，实现了一种高效的协议，在其在线阶段只需要\(12.4k(n-1)\)比特的分摊通信复杂度和每个乘法门一轮通信。我们还通过推广基于遗忘线性评估（OLE）的方法，使用基于遗忘传输（OT）的方法在离线阶段实现了必要的计算。为此，作为一个潜在独立的额外贡献，我们提出了一种使用乘法友好嵌入（MFEs）实现基于Galois环扩展的OLE的新技术，该技术使用对基本环\(\mathbb {Z}_{p^k}\)上OLE协议的黑盒访问，而不需要支付与扩展度量相关的二次开销。这是对MASCOT (Keller等人，CCS 2016)中基于相关OT扩展的方法的推广。最后，在这个过程中，我们还发现了MASCOT中一个核心证明中的一个错误，并且在我们的普通证明中隐式地给出了修复方法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_14](https://doi.org/10.1007/978-3-031-15802-5_14)
## Parallel Repetition of (k1, đots , kμ )-Special-Sound Multi-round Interactive Proofs.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#parallel-repetition-of-k1-ots-k-special-sound-multi-round-interactive-proofs) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#parallel-repetition-of-k1-ots-k-special-sound-multi-round-interactive-proofs)**
### 作者
* Thomas Attema, CWI, Cryptology Group, Amsterdam, The Netherlands
* Serge Fehr, CWI, Cryptology Group, Amsterdam, The Netherlands
* Thomas Attema, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Thomas Attema, TNO, Cyber Security and Robustness, The Hague, The Netherlands
### 摘要
> 在许多情况下，交互证明的知识误差 \(\kappa\) 并不足够小，因此需要进行减小。可以通过并行重复交互证明来实现这一点。虽然已经有很多研究在研究并行重复对交互证明和论证的可靠性误差的影响，但是对于知识误差的影响研究还很有限。只是最近才表明，对于任何交互协议的 t 倍并行重复，可以将知识误差从 \(\kappa\) 减小到 \(\kappa^t+\nu\)，其中 \(\nu\) 是任意非可忽略项。这种通用结果并不是最优的，因为它并没有给出典型协议预期的知识误差 \(\kappa^t\)，更糟糕的是，知识误差仍然是非可忽略的。
> 
> 在这项工作中，我们展示了对于任何 \((k_1,\dots,k_{\mu})\)-特殊声音多轮公共硬币交互证明的 t 倍并行重复确实将知识误差从 \(\kappa\) 减小到 \(\kappa^t\) 的最优值。我们结果的核心是对于不诚实证明者的一种在某种程度上更细致的质量度量，它与其成功概率有关，并且我们展示了它何时可以进行知识提取。当分析这类交互证明的并行重复时，这种新标准变得非常方便。
> 
> 虽然并行重复减小了知识误差，但很容易看出它增加了完整性误差。因此，我们将我们的结果推广到阈值 t 中的 s 个并行重复的情况，其中如果 s 个并行实例中有 t 个被接受，验证者接受。适当选择的阈值 s 可以同时减小知识误差和完整性误差。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_15](https://doi.org/10.1007/978-3-031-15802-5_15)
## Public-Coin 3-Round Zero-Knowledge from Learning with Errors and Keyless Multi-Collision-Resistant Hash.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#public-coin-3-round-zero-knowledge-from-learning-with-errors-and-keyless-multi-collision-resistant-hash) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#public-coin-3-round-zero-knowledge-from-learning-with-errors-and-keyless-multi-collision-resistant-hash)**
### 作者
* Susumu Kiyoshima, NTT Research, Sunnyvale, CA, USA
### 摘要
> 我们构造了一个基于公共硬币的三轮零知识证明，对于NP问题假设了（i）具有学习困难（LWE）问题的亚指数困难度和（ii）存在无密钥多碰撞抗性散列函数，能够抵抗略微超多项式时间对手。这些假设与最近用于获得私有硬币的三轮零知识证明的假设几乎相同[Bitansky等，STOC 2018]。（不同之处在于我们假设学习困难问题具有亚指数困难度而不是准多项式困难度。）

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_16](https://doi.org/10.1007/978-3-031-15802-5_16)
## Faster Sounder Succinct Arguments and sfIOPs.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#faster-sounder-succinct-arguments-and-sfiops) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#faster-sounder-succinct-arguments-and-sfiops)**
### 作者
* Justin Holmgren, NTT Research, Sunnyvale, USA
* Ron D. Rothblum, Technion, Haifa, Israel
### 摘要
> 简洁的论证允许证明者用极短的证明来说服验证者一个给定的陈述是真实的。一个主要的瓶颈是减少证明者为了证明计算的正确性所产生的开销。在这项工作中，对于一个大类的布尔电路\(C=C(x,w)\)，我们构造了\(\{ x : \exists w\; C(x,w)=1\}\)语言的简洁论证，具有\(2^{-\lambda}\)的健壮性误差，并且证明者开销为\(\textrm{polylog}(\lambda)\)。这个结果依赖于（次指数安全的）线性大小可计算的抗冲突哈希函数的存在。我们能处理的布尔电路类包括具有重复子结构的电路，这在批处理计算/验证、哈希和相关区块链应用中出现。
> 
> 简洁论证是通过构建相同类别语言的交互式Oracle证明来实现的，证明者开销为\(\textrm{polylog}(\lambda)\)，健壮性误差为\(2^{-\lambda}\)。在我们的工作之前，基于Ben Sasson等人（STOC, 2013）提出的高效\(PCP\)，布尔电路的最佳\(IOP\)要么具有\(\textrm{polylog}(|C|)\)的证明者开销，要么具有Rothblum和Ron-Zewi（STOC, 2022）的\(\textrm{poly}(\lambda)\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_17](https://doi.org/10.1007/978-3-031-15802-5_17)
## Succinct Interactive Oracle Proofs: Applications and Limitations.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#succinct-interactive-oracle-proofs-applications-and-limitations) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#succinct-interactive-oracle-proofs-applications-and-limitations)**
### 作者
* Shafik Nassar, Technion, Haifa, Israel
* Ron D. Rothblum, Technion, Haifa, Israel
### 摘要
> 交互式 Oracle 证明 (\(\textsf{IOP}\)) 是一种新型的证明系统，它结合了交互式证明和证明可检查性 (PCP) 的重要特性：在与不可信赖的证明者互动时，\(\textsf{IOP}\) 允许验证者通过只读取证明者发送的少量比特来确信陈述的正确性。近年来，\(\textsf{IOP}\) 在高效证明系统的设计中变得非常突出。
> 
> 本文研究简洁的 \(\textsf{IOP}\)，即通信复杂度在原始见证的多项式 (甚至线性) 范围内的 \(\textsf{IOP}\)。尽管存在对简洁 \(\textsf{PCP}\)（即长度与见证的多项式成正比的 \(\textsf{PCP}\)）存在强不可能结果，但众所周知，可在小空间中决定的 \(\textsf{NP}\) 关系具有简洁的 \(\textsf{IOP}\)。在本工作中，我们展示了简洁 \(\textsf{IOP}\) 的新应用和局限性：
> 
> 首先，利用单向函数，我们展示了如何将 \(\textsf{IOP}\) 编译为零知识证明，同时几乎保持了证明长度。这对应于 Ben Sasson 等人最近的一系列工作（TCC, 2016B），他们将 \(\textsf{IOP}\) 编译为超简洁的零知识证明。
> 
> 将编译器应用于最先进的简洁 \(\textsf{IOP}\)，可以得到有界空间 \(\textsf{NP}\) 关系的零知识证明，其通信量几乎与原始见证长度相等。这使得基于单向函数的最小假设可获得已知最短的零知识证明。
> 
> 其次，我们提出了获取更一般 \(\textsf{NP}\) 关系简洁 \(\textsf{IOP}\) 的障碍。特别地，我们展示了如果一个语言具有简洁的 \(\textsf{IOP}\)，那么在有界时间概率预处理后，它可以在与见证长度成正比的空间内决定。我们利用此结果证明了一个简单且合理的（但据我们所知，是新的）复杂性猜想下，\(\textsf{CSAT}\) 没有简洁的 \(\textsf{IOP}\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_18](https://doi.org/10.1007/978-3-031-15802-5_18)
## Candidate Witness Encryption from Lattice Techniques.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#candidate-witness-encryption-from-lattice-techniques) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#candidate-witness-encryption-from-lattice-techniques)**
### 作者
* Rotem Tsabary, Google Research, Tel Aviv, Israel
### 摘要
> 见证加密（WE）首次由Garg，Gentry，Sahai和Waters在[GGSW13]中引入，它是一种加密方案，通过关于 \(\textbf{NP}\) 关系的实例对消息进行加密，以至于需要知道与密文相关的实例的有效见证才能解密。
> 
> 尽管过去十年中已做出了相当大的努力从标准假设中构建WE，但据我们所知，所有现有的WE候选方案要么直接依赖于iO，要么使用似乎也暗示iO的技术来暗示WE。
> 
> 在这项工作中，我们提出了一个新的关于格陷阱门的难度假设，并展示了一个受其保护的见证加密候选方案。与以前的WE候选方案相反，我们的技术在尝试将其转换为iO时是容易被破解的，这表明安全性依赖于不同的机制。我们将WE和iO之间的差距视为ABE和FE之间的差距的类比，因此可能具有重要意义。
> 
> 直观地，这个假设是说“攻击者利用陷阱采样的最佳方法就是半诚实地使用它” - 即给定一个公共矩阵 \(\textbf{A}\)，作为辅助信息一个陷阱采样 \(\textbf{K}\leftarrow \textbf{A}^{\textsf{TD}}(\mathbf {{B}})\)，与 \([\textbf{A}|\mathbf {{B}}]\) 相关的LWE与没有辅助信息的LWE的难度一样困难。
> 
> 为了正式利用这个假设，我们定义了具有公共矩阵和辅助信息通用分布的LWE Oracles的概念。这个模型允许限制LWE对于一个分布的难度作为另一个分布的难度的函数。这种风格的重复论证可以用作逐步改变对手面临的挑战并在证明的每一步中跟踪安全性损失的一系列混合体。典型的基于LWE的系统的安全性证明通常暗示了这种分布是不可区分的，而我们的模型允许进行放松的论证，在某些情况下足以满足证明要求。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_19](https://doi.org/10.1007/978-3-031-15802-5_19)
## Securing Approximate Homomorphic Encryption Using Differential Privacy.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#securing-approximate-homomorphic-encryption-using-differential-privacy) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#securing-approximate-homomorphic-encryption-using-differential-privacy)**
### 作者
* Baiyu Li, University of California, San Diego, USA
* Daniele Micciancio, University of California, San Diego, USA
* Mark Schultz, University of California, San Diego, USA
* Jessica Sorrell, University of California, San Diego, USA
### 摘要
> 最近，Li和Micciancio（Eurocrypt 2021）的研究表明，传统的选择明文攻击下的不可区分性（\(\textsf {IND\text {-}CPA}\)）的定义不足以捕捉近似同态加密方案对被动攻击者的安全性，并确定一个更强的\(\textsf {IND\text {-}CPA}^{\textsf {D}}\)安全性定义（带解密询问的\(\textsf {IND\text {-}CPA}\)）作为近似加密方案的适当安全目标。我们展示了如何将实现弱\(\textsf {IND\text {-}CPA}\)安全性定义的任何近似同态加密方案转化为可证明\(\textsf {IND\text {-}CPA}^{\textsf {D}}\)安全性的方案，提供针对现实被动攻击的强保证。该方法通过使用满足适当的差分隐私（DP）概念的机制对解密函数的输出进行后处理，添加的噪声量根据同态计算的最坏情况误差增长进行调整。
> 
> 我们将这些结果应用于Cheon, Kim, Kim和Song（CKKS, Asiacrypt 2017）的近似同态加密方案，证明在CKKS解密的输出加入高斯噪声就足以实现\(\textsf {IND\text {-}CPA}^{\textsf {D}}\)安全性。我们准确量化需要添加多少高斯噪声，通过几乎匹配的上界和下界的证明，显示在这个后处理步骤中无法显著降低添加的噪声量。作为额外的贡献，我们提出并使用了一个更精细的位安全性定义，区分计算安全参数（c）和统计安全参数（s）。根据我们的上界和下界，我们为实现CKKS的开源库最近采用的对策提出参数。
> 
> 最后，我们研究了一个合理的观点，即较小的DP噪声参数可能足以实现支持更精确（动态、密钥相关）的解密期间密文噪声估计的\(\textsf {IND\text {-}CPA}^{\textsf {D}}\)安全性。也许令人惊讶的是，我们证明了该观点是错误的，并且噪声参数根据给定密文中存在的误差而非最坏情况误差进行调整的DP机制容易受到\(\textsf {IND\text {-}CPA}^{\textsf {D}}\)攻击的影响。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_20](https://doi.org/10.1007/978-3-031-15802-5_20)
## Multi-input Attribute Based Encryption and Predicate Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#multi-input-attribute-based-encryption-and-predicate-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#multi-input-attribute-based-encryption-and-predicate-encryption)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Anshu Yadav, IIT Madras, Chennai, India
* Shota Yamada, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### 摘要
> 基于几个新的和自然的应用，我们发起了多输入谓词加密（\(\textsf{miPE}\)）的研究，并进一步发展了多输入属性基础加密（\(\textsf{miABE}\)）。我们的贡献包括：
> 
> 1. 正式化安全性：我们在对称密钥设置中为\(\textsf{miABE}\)和\(\textsf{miPE}\)提供了定义，并在标准不可区分性（IND）范式中形式化了对无界串通的安全性。
> 
> 2. 从\(\textsf{LWE}\)和配对构建的两输入\({\textsf{ABE}}\)对\({\textsf{NC}}_1\)：我们首次提供了从\(\textsf{LWE}\)和配对构建的两输入策略密钥\({\textsf{ABE}}\)对\({\textsf{NC}}_1\)的构造。我们的构造利用了Agrawal和Yamada（Eurocrypt，2020）最近在简洁单输入密文策略\({\textsf{ABE}}\)上开发的技术与两输入策略密钥\({\textsf{ABE}}\)问题之间的令人惊讶的联系。与Agrawal-Yamada类似，我们的构造在双线性通用群模型中被证明是安全的。通过利用内积功能加密并使用KOALA知识假设的变种，我们获得了类似于Agrawal，Wichs和Yamada（TCC，2020）的标准模型构造。
> 
> 3. 基于格的启发式两输入\({\textsf{ABE}}\)对\(\textsf{P}\)：我们展示了Brakerski和Vaikuntanathan（ITCS 2022）为简洁单输入密文策略\({\textsf{ABE}}\)开发的技术可以从\(\textsf{miABE}\)的角度来看，并获得了基于格的\(\textsf{P}\)的首个两输入策略密钥\({\textsf{ABE}}\)。
> 
> 4. 从配对和格中获得的启发式三输入\({\textsf{ABE}}\)和\({\textsf{PE}}\)对\({\textsf{NC}}_1\)：我们通过利用Agrawal-Yamada和Brakerski-Vaikuntanathan构造的强大力量，获得了对\({\textsf{NC}}_1\)的首个三输入\({\textsf{ABE}}\)。
> 
> 5. 通过可锁定混淆实现的多输入\({\textsf{ABE}}\)到多输入\({\textsf{PE}}\)的通用编译器：我们提供了一个通用编译器，通过依赖Wichs-Zirdelis和Goyal-Koppula-Waters（FOCS 2018）的可锁定混淆（\(\textsf{LO}\)）的隐藏属性，将多输入\({\textsf{ABE}}\)提升到多输入\({\textsf{PE}}\)。这可以基于\(\textsf{LWE}\)。我们的编译器将这样一个单输入设置的编译器推广到更具挑战性的多输入设置。通过将我们的编译器与我们的新的两和三输入\({\textsf{ABE}}\)方案实例化，我们获得了首个两和三输入\({\textsf{PE}}\)方案的构造。
> 
> 我们的多输入\({\textsf{ABE}}\)构造为Brakerski等人（SCN 2018）定义的非平凡指数效率见证加密的压缩因子提供了第一个改进，而无需依赖紧凑功能加密或不可区分性混淆。我们相信简洁单输入密文策略\({\textsf{ABE}}\)和多输入策略密钥\({\textsf{ABE}}\)之间的意外联系可能导致见证加密的新途径。我们指出，我们的构造为\({\textsf{miFE}}\)的一个非平凡类别提供了第一个候选方案，而无需\(\textsf{LPN}\)或低深度\(\textsf{PRG}\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_21](https://doi.org/10.1007/978-3-031-15802-5_21)
## Formal Verification of Saber's Public-Key Encryption Scheme in EasyCrypt.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#formal-verification-of-sabers-public-key-encryption-scheme-in-easycrypt) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#formal-verification-of-sabers-public-key-encryption-scheme-in-easycrypt)**
### 作者
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
* Matthias Meijers, Eindhoven University of Technology, Eindhoven, The Netherlands
* Pierre-Yves Strub, Meta, Paris, France
### 摘要
> 在这项工作中，我们考虑了Saber的公钥加密方案的形式验证，Saber是目前正在考虑作为潜在标准化选项的少数后量子密码套件之一。我们在EasyCrypt中对这个公钥加密方案的安全性和\(\delta \)-正确性进行形式验证，即将公钥加密方案转化为一个安全和\(\delta \)-正确的密钥封装机制所需的属性。为此，我们首先为这些属性设计了手写证明，这些证明比现有证明更加详细和细致。随后，这些手写证明作为形式验证的指南。这项工作的结果包括手写和计算机验证的证明，证明了Saber的公钥加密方案确实满足所需的安全性和正确性属性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_22](https://doi.org/10.1007/978-3-031-15802-5_22)
## SoftSpokenOT: Quieter OT Extension from Small-Field Silent VOLE in the Minicrypt Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#softspokenot-quieter-ot-extension-from-small-field-silent-vole-in-the-minicrypt-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#softspokenot-quieter-ot-extension-from-small-field-silent-vole-in-the-minicrypt-model)**
### 作者
* Lawrence Roy, Oregon State University, Corvallis, USA
### 摘要
> 鉴于少量的基本无知传输（OTs），如何以尽可能高效的方式生成大量的扩展OTs？这个问题的答案长期以来一直是IKNP（Ishai et al., Crypto 2003）及其启发的协议家族的重要工作，这些协议只使用Minicrypt假设。最近，Boyle等人（Crypto 2019）提出了静默OT技术，这种技术在改进了IKNP的同时，付出了更加强大的非Minicrypt假设:学习与噪声的奇偶校验（LPN）假设的代价。我们提出了SoftSpokenOT，这是第一个在Minicrypt模型中改进了IKNP通信成本的OT扩展。虽然IKNP需要每个OT \(\lambda \) 位的通信安全参数，但SoftSpokenOT只需要 \(\lambda / k\) 位的通信，对于任意的k，计算的代价则是 \(2^{k-1} / k\) 倍。对于较小的k值，这种权衡是有利的，因为IKNP风格的协议受限于网络。我们实施了SoftSpokenOT，并发现我们的协议在局域网环境中几乎比IKNP快\(5{\times }\)。
> 
> 我们的技术基于一个创新的向量无知线性评估（VOLE）静默协议，该协议适用于多项式大小的域。我们创建了一个框架，从这个VOLE构建了恶意安全的 \(\left( {\begin{array}{c}N\\ 1\end{array}}\right) \)-OT扩展，重新审查和改进了每一步的现有工作。在这个过程中，我们发现了现有工作中的一些缺陷，包括对Patra等人（NDSS 2017）的一致性检查的实际攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_23](https://doi.org/10.1007/978-3-031-15802-5_23)
## Maliciously Secure Massively Parallel Computation for All-but-One Corruptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#maliciously-secure-massively-parallel-computation-for-all-but-one-corruptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#maliciously-secure-massively-parallel-computation-for-all-but-one-corruptions)**
### 作者
* Rex Fernando, UCLA, Los Angeles, USA
* Yuval Gelles, Hebrew University, Jerusalem, Israel
* Ilan Komargodski, Hebrew University, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, USA
* Elaine Shi, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 大规模并行计算（Massive Parallel Computing，MPC）模型在过去十年中广泛应用。现在，它被广泛接受为捕捉常用编程范式（如MapReduce、Hadoop和Spark）的正确模型，利用并行计算能力来操纵和分析大量数据。
> 
> 受到以隐私保护方式进行大规模数据分析的需求的驱动，最近的几项工作提出了通用编译器，将MPC模型中的算法转化为安全对应物，同时保留原始算法的各种效率参数。第一篇论文由Chan等人（ITCS '20）撰写，侧重于诚实多数的设定。后来，Fernando等人（TCC '20）考虑了不诚实多数的情况。后一项工作提出了一种编译器，将通用MPC算法转换为安全的算法，以防止可能控制除一个外所有参与方的半诚实攻击者。他们所得算法的安全性依赖于PKI的存在，并且还依赖于相当强的加密假设：无法区分混淆和特定LWE加密系统的循环安全性。
> 
> 在这项工作中，我们关注不诚实多数的设定，遵循Fernando等人的方法。在这种设定下，已知的编译器无法实现被称为恶意安全性的标准安全属性，即攻击者可以任意违反规定的协议。事实上，我们证明了除非采用非常强的设置假设（如可编程随机预言机），否则根据对空间和轮次复杂性的严格要求，抵抗恶意攻击者是不可能的。
> 
> 作为我们的主要贡献，我们通过设计第一个针对不诚实多数设定中的恶意攻击者的通用编译器来补充上述负面结果。所得到的协议能够承受除一个外的所有损坏。我们的编译器依赖于一个简单的PKI和一个（可编程的）随机预言机，并在LWE和SNARKs的假设下被证明是安全的。有趣的是，即使具有这样的强假设，获得一个安全的协议也是相当非平凡的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_24](https://doi.org/10.1007/978-3-031-15802-5_24)
## Le Mans: Dynamic and Fluid MPC for Dishonest Majority.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#le-mans-dynamic-and-fluid-mpc-for-dishonest-majority) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#le-mans-dynamic-and-fluid-mpc-for-dishonest-majority)**
### 作者
* Rahul Rachuri, Department of Computer Science, Aarhus University, Aarhus, Denmark
* Peter Scholl, Department of Computer Science, Aarhus University, Aarhus, Denmark
### 摘要
> 大多数MPC协议要求参与方在整个计算过程中都保持活跃状态。将MPC部署到诸如复杂和资源密集型科学计算等用例中，增加了潜在参与者的准入障碍。Fluid MPC模型（加密2021）通过赋予参与方在其资源空闲时才参与协议的灵活性来解决这个问题。因此，参与方的集合随时间动态变化。
> 
> 在这项工作中，我们将Fluid MPC扩展到考虑大多数诚实参与者的情况，以适应任何时刻可能有腐败参与者的设置。我们通过提出SPDZ协议的变种来实现这一点，该协议支持动态参与者。首先，我们描述了SPDZ的通用预处理，允许一组n个参与方计算一些相关的随机性，以便稍后任何一组参与方都可以使用它来参与在线安全计算。我们结合动态SPDZ在线阶段，设计了一个与我们通用预处理配合使用的协议，以及一个用于安全实现预处理的协议。我们的预处理协议旨在高效使用伪随机相关生成器，因此，参与方的存储和通信成本几乎可以独立于被评估的函数。
> 
> 然后，我们将其扩展为支持流动的在线阶段，在这个阶段，参与方的集合在动态演变。我们的协议实现了最大的流动性和中止安全性，与之前的诚实多数构造类似。要实现这一点，需要精心设计和技术来保证小的状态复杂性，从而使我们能够有效地在不同委员会之间切换。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_25](https://doi.org/10.1007/978-3-031-15802-5_25)
## Oblivious Message Retrieval.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#oblivious-message-retrieval) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#oblivious-message-retrieval)**
### 作者
* Zeyu Liu, Columbia University, New York, USA
* Eran Tromer, Columbia University, New York, USA
* Eran Tromer, Tel Aviv University, Tel Aviv, Israel
### 摘要
> 匿名消息传递系统，例如私人消息服务和隐私保护支付系统，需要一个机制，让接收者检索到寄给他们的消息，而不泄漏元数据或让他们的消息被链接。接收者可以下载所有已发布的消息，并扫描其中寄给他们的消息，但在规模上，通信和计算成本过高。
> 
> 我们展示了不信任的服务器如何能够代表接收者检测到消息，并将其总结为接收者可以轻松解密的紧凑加密摘要。这些服务器是无意识的运行，不会学到任何关于哪些消息寄给了哪些接收者的信息。隐私，完整性和完备性即使在除了接收者之外的所有人都是对抗性和串通的情况下也得以保持（与之前的方案不同）。
> 
> 我们的出发点是一种渐近高效的方法，使用完全同态加密和同态编码的稀疏随机线性码。然后，我们通过定制基于格的加密组件，以及各种代数和算法优化来解决具体的性能问题。这将摘要大小减小到每个扫描的消息几位比特。具体而言，服务器的成本为每百万条消息扫描约1美元，而结果的摘要可以在约20毫秒内由接收者解码。因此，我们的方案可以在当前应用中实际上达到最强的接收者隐私保护，如隐私保护加密货币。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_26](https://doi.org/10.1007/978-3-031-15802-5_26)
## A More Complete Analysis of the Signal Double Ratchet Algorithm.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#a-more-complete-analysis-of-the-signal-double-ratchet-algorithm) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#a-more-complete-analysis-of-the-signal-double-ratchet-algorithm)**
### 作者
* Alexander Bienstock, New York University, New York, USA
* Jaiden Fairoze, UC Berkeley, Berkeley, USA
* Sanjam Garg, UC Berkeley, Berkeley, USA
* Sanjam Garg, NTT Research, Sunnyvale, USA
* Pratyay Mukherjee, Swirlds Labs, Dallas, USA
* Srinivasan Raghuraman, Visa Research, Palo Alto, USA
### 摘要
> Cohn-Gordon，Cremers，Dowling，Garratt和Stebila [EuroS & P 2017]以及Alwen，Coretti和Dodis [EUROCRYPT 2019]的开创性作品为研究广泛使用的Signal Double Ratchet（简称为\(\textsf{DR}\)算法）提供了第一个正式的框架。
> 
> 在这项工作中，我们开发了一个新的普遍可组合（UC）定义\(\ mathcal {F}_{\textsf{DR}}\)，我们展示了\(\textsf{DR}\)协议可以证明实现我们的定义。我们的定义不仅捕捉了Cohn-Gordon等人和Alwen等人在先前现有技术分析中已经确定的\(\textsf{DR}\)的安全性和正确性保证，还包括了从这些工作中一个或两个缺失的更多保证。特别地，我们构建了六种不同的修改版本的\(\textsf{DR}\)协议，根据我们的定义\(\ mathcal {F}_{\textsf{DR}}\)，它们都是不安全的，但根据其中一个（或两者）的定义仍然是安全的。例如，我们的定义是首次完全捕捉了可能在妥协后立即发生的CCA式攻击 - 正如我们所展示的，\(\textsf{DR}\)协议能够证明抵抗，但是先前的定义并没有完全捕捉到这一点。
> 
> 此外，我们还展示了在短时间内对参与方的多次妥协，这是\(\textsf{DR}\)预计能够承受的，正如我们从其白皮书中了解的一样，然而还会引入\(\textsf{DR}\)的一个新的非平凡（尽管轻微）的弱点。因为文献中的定义（包括我们上面的\(\ mathcal {F}_{\textsf{DR}}\)）没有捕捉到对这种更微妙情景的安全性，我们定义了一个新的更强的定义\(\ mathcal {F}_{\textsf{TR}}\)来实现对此的安全防护。
> 
> 最后，我们提供了对\(\textsf{DR}\)的一种简约修改（我们称之为Triple Ratchet，简称\(\textsf{TR}\)），并展示了由此产生的协议可以安全实现更强的功能\(\ mathcal {F}_{\textsf{TR}}\)。值得注意的是，这种修改不会增加额外的通信成本，几乎没有额外的计算成本。我们还展示了这些技术可以用于改进其他情景下的通信成本，例如实用的可更新公钥加密方案和Alwen等人[CRYPTO 2020]的用于安全群组通信的重新随机化树KEM协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_27](https://doi.org/10.1007/978-3-031-15802-5_27)
