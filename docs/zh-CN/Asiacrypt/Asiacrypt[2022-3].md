# Asiacrypt[2022-3]
## New Algorithms and Analyses for Sum-Preserving Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#new-algorithms-and-analyses-for-sum-preserving-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#new-algorithms-and-analyses-for-sum-preserving-encryption)**
### 作者
* Sarah Miracle, University of St. Thomas, St. Paul, USA
* Scott Yilek, University of St. Thomas, St. Paul, USA
### 摘要
> 我们继续研究保和加密方案，其中明文和密文都是具有相同和的整数向量。最近，塔吉克、古纳塞卡兰、达塔、埃利亚、博巴、罗素克、赖特和冯（NDSS 2019）在图像加密的背景下构建了并分析了这种加密方案。我们的第一个主要结果是利用路径耦合证明了塔吉克等人给出的构造的混合时间上界。然后，我们通过描述两种实用的方式对参与保和加密的值进行排序和反排序，提供了新的保和加密方案。然后，我们可以将其与格式保持加密中的排序-加密-反排序技术相结合。最后，我们通过在原型实现上进行性能测试，比较了塔吉克等人的构造和我们的新排序方案的效率。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_1](https://doi.org/10.1007/978-3-031-22969-5_1)
## Towards Case-Optimized Hybrid Homomorphic Encryption - Featuring the Elisabeth Stream Cipher.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#towards-case-optimized-hybrid-homomorphic-encryption-featuring-the-elisabeth-stream-cipher) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#towards-case-optimized-hybrid-homomorphic-encryption-featuring-the-elisabeth-stream-cipher)**
### 作者
* Orel Cosseron, INRIA Lyon, Lyon, France
* Orel Cosseron, ENS de Lyon, LIP, Lyon, France
* Orel Cosseron, LTCI, Telecom Paris, Institut Polytechnique de Paris, Paris, France
* Clément Hoffmann, UCLouvain, ICTEAM/ELEN/Crypto Group, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, UCLouvain, ICTEAM/ELEN/Crypto Group, Louvain-la-Neuve, Belgium
* Pierrick Méaux, Luxembourg University, SnT, Luxembourg, Luxembourg
### 摘要
> 混合同态加密（HHE）在完全同态加密（FHE）框架中减少了客户端的计算量和带宽使用。HHE需要使用可以高效地进行同态评估的特定对称方案。在本文中，我们引入了组过滤排列器（GFP）范例，作为Méaux等人介绍的改进过滤排列器范例的泛化。从这个范例中，我们指定了一种流密码家族Elisabeth，并给出了一个实例：Elisabeth-4。在确定该方案的安全性之后，我们为其提供了Rust实现，并确保其性能与最先进的HHE相当。Elisabeth的真正强大之处在于可用于服务器端的操作：而最好的HHE应用程序限制在服务器端只能进行少量的乘法，我们使用通过Elisabeth-4传输的数据同态评估了一个神经网络推断。最后，我们讨论了HHE和FHE框架之间的改进和损失，并提供了利用Elisabeth家族构建更高效方案的想法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_2](https://doi.org/10.1007/978-3-031-22969-5_2)
## Revisiting Related-Key Boomerang Attacks on AES Using Computer-Aided Tool.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#revisiting-related-key-boomerang-attacks-on-aes-using-computer-aided-tool) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#revisiting-related-key-boomerang-attacks-on-aes-using-computer-aided-tool)**
### 作者
* Patrick Derbez, Univ Rennes, CNRS, IRISA, Rennes, France
* Marie Euler, Univ Rennes, CNRS, IRISA, Rennes, France
* Pierre-Alain Fouque, Univ Rennes, CNRS, IRISA, Rennes, France
* Phuong Hoa Nguyen, Univ Rennes, CNRS, IRISA, Rennes, France
* Marie Euler, Direction Générale de l’Armement, Rennes, France
### 摘要
> 近年来，已引入了几个MILP模型，用于在分组密码中自动搜索回旋差分器和回旋攻击。然而，这些模型只能在密钥调度为线性时使用。在这里，引入了一种新的模型来处理非线性的密钥调度，如AES所示。该模型更复杂，实际上对于穷举搜索而言速度太慢。然而，当求解器添加了一些提示后，它找到了对AES-192的当前最佳相关密钥回旋攻击，其时间复杂度为\(2^{124}\)，数据复杂度为\(2^{124}\)，内存复杂度为\(2^{79.8}\)，这比Biryukov和Khovratovich在ASIACRYPT 2009中提出的复杂度\(2^{176}/2^{123}/2^{152}\)更好。这对于时间和内存复杂度来说是巨大的改进，展示了MILP在密码分析中的强大能力。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_3](https://doi.org/10.1007/978-3-031-22969-5_3)
## On Secure Ratcheting with Immediate Decryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#on-secure-ratcheting-with-immediate-decryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#on-secure-ratcheting-with-immediate-decryption)**
### 作者
* Jeroen Pijnenburg, Royal Holloway, University of London, Egham Hill, Egham, Surrey, UK
* Bertram Poettering, IBM Research Europe – Zurich, Säumerstr 4, 8803, Rüschlikon, Switzerland
### 摘要
> 根据预期存在状态暴露攻击的环境，轮换协议允许各方安全地交换消息。不可避免地，一旦对手获取某一方的状态副本，某些关于保密性和真实性的承诺将无法履行，但轮换协议旨在尽可能限制状态泄露的影响。特别是，此类协议提供前向安全性（状态曝光后，过去的消息仍然安全）和事后妥协安全性（状态曝光后，参与者自动修复并恢复安全）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_4](https://doi.org/10.1007/978-3-031-22969-5_4)
## Strongly Anonymous Ratcheted Key Exchange.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#strongly-anonymous-ratcheted-key-exchange) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#strongly-anonymous-ratcheted-key-exchange)**
### 作者
* Benjamin Dowling, University of Sheffield, Sheffield, UK
* Eduard Hauck, Ruhr-Universität Bochum, Bochum, Germany
* Doreen Riepel, Ruhr-Universität Bochum, Bochum, Germany
* Paul Rösler, New York University, New York, USA
### 摘要
> 匿名性是一项安全目标，对于受到威胁的用户群体特别重要。因此，广泛部署的通信协议采取了各种措施来隐藏有关用户的不同类型信息（即元数据）。在实际定义匿名性之前，我们先考虑一种攻击向量，对于受攻击的用户群体而言，可能会感到担忧：持续而临时地暴露他们的秘密。这种攻击向量的示例包括故意在受害者设备上植入病毒，以及在用户被拘留时进行对物理设备的接触。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_5](https://doi.org/10.1007/978-3-031-22969-5_5)
## Encryption to the Future - A Paradigm for Sending Secret Messages to Future (Anonymous) Committees.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#encryption-to-the-future-a-paradigm-for-sending-secret-messages-to-future-anonymous-committees) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#encryption-to-the-future-a-paradigm-for-sending-secret-messages-to-future-anonymous-committees)**
### 作者
* Matteo Campanelli, Protocol Labs, San Francisco, USA
* Hamidreza Khoshakhlagh, Aarhus University, Aarhus, Denmark
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
* Bernardo David, IT University of Copenhagen, Copenhagen, Denmark
* Anders Konring, IT University of Copenhagen, Copenhagen, Denmark
### 摘要
> 一些最近的研究构建了具有自适应安全特性的加密协议，通过在每轮中由随机选择的匿名委员会运行。由于大多数这些协议是有状态的，将过去委员会的秘密状态转移到未来但仍不知晓的委员会是一个关键的挑战。之前的研究通过针对特定情境量身定制的方法来解决这个问题，这些方法主要依赖于使用区块链来协调辅助委员会以帮助进行状态交接过程。在这项工作中，我们把这个挑战看作是一个重要的问题，并发起了对“加密至未来”（EtF）作为加密原语的研究。首先，我们定义了一个EtF方案的概念，其中时间是根据底层区块链确定的，并且通过抽奖选择参与方在未来某个时间点接收秘密消息。虽然这个概念似乎过于限制，但我们建立了两个重要的事实：1. 如果用于加密发送到“遥远未来”选择的参与方，EtF意味着在区块链上对NP的见证加密；2. 如果仅用于加密发送到“近未来”选择的参与方，EtF不仅足够满足以前的工作中要求的委员会之间的状态传输，还能捕捉以前量身定制的解决方案。为了证实这些结果，我们提供了一种基于承诺见证加密（cWE）的EtF新构建方式，它是通过基于通用加密原语的构建从一些标准假设实例化的。最后，我们展示了如何使用“近未来”EtF来获得基于辅助委员会的“遥远未来”EtF的协议，该协议的通信复杂性与发送到未来的明文消息的长度无关。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_6](https://doi.org/10.1007/978-3-031-22969-5_6)
## Authenticated Encryption with Key Identification.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#authenticated-encryption-with-key-identification) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#authenticated-encryption-with-key-identification)**
### 作者
* Julia Len, Cornell Tech, New York, USA
* Thomas Ristenpart, Cornell Tech, New York, USA
* Paul Grubbs, University of Michigan, Ann Arbor, USA
### 摘要
> 认证加密与关联数据（AEAD）构成了对称密码学的核心，但标准的AEAD建模技术假设接收者在解密时对要使用的秘密密钥没有任何模糊之处。这与实际情况不符，例如在密钥管理服务中，消息接收者可以存储多个密钥，并在解密之前必须识别出正确的密钥。迄今为止，尚未对它们的安全属性或有效性进行正式调查，实际部署的用于识别预期密钥的临时解决方案可能效率低下，并在某些情况下容易受到实际攻击的威胁。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_7](https://doi.org/10.1007/978-3-031-22969-5_7)
## Privacy-Preserving Authenticated Key Exchange in the Standard Model.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#privacy-preserving-authenticated-key-exchange-in-the-standard-model) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#privacy-preserving-authenticated-key-exchange-in-the-standard-model)**
### 作者
* You Lyu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Dawu Gu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* You Lyu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shuai Han, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shuai Han, School of Cyber Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, Westone Cryptologic Research Center, Beijing, 100070, China
### 摘要
> 隐私保护认证密钥交换（PPAKE）提供了对会话密钥和涉及方的身份信息的保护。在本文中，我们将鲁棒性的概念引入PPAKE中。鲁棒性使每个用户能够确认是否自己是协议中第一轮消息的目标接收者。借助鲁棒性的帮助，PPAKE协议可以成功避免由现有PPAKE中通信方的不确定性引起的大量冗余通信和计算，尤其在广播通道中。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_8](https://doi.org/10.1007/978-3-031-22969-5_8)
## On the Field-Based Division Property: Applications to MiMC, Feistel MiMC and GMiMC.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#on-the-field-based-division-property-applications-to-mimc-feistel-mimc-and-gmimc) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#on-the-field-based-division-property-applications-to-mimc-feistel-mimc-and-gmimc)**
### 作者
* Jiamin Cui, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Puwen Wei, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Kai Hu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Jiamin Cui, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
* Puwen Wei, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, Quan Cheng Shandong Laboratory, Jinan, China
### 摘要
> 最近的实际应用使用了诸如多方计算（MPC）和零知识证明（ZKP）等先进加密协议，这已经引发了一系列在大有限域上描述的新对称原语，被称为算术导向(AO)密码。此类设计旨在将域上乘法次数最小化，但有很高的风险易受到代数攻击，特别是更高阶的差分攻击。因此，仔细评估它们的代数度增长是非常重要的。然而，由于缺少通用且准确的方法，对于 AO 密码来说，代数度估计一直是密码分析师面临的难题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_9](https://doi.org/10.1007/978-3-031-22969-5_9)
## Traceable Receipt-Free Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#traceable-receipt-free-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#traceable-receipt-free-encryption)**
### 作者
* Henri Devillez, UCLouvain – ICTEAM – Crypto Group, 1348, Louvain-la-Neuve, Belgium
* Olivier Pereira, UCLouvain – ICTEAM – Crypto Group, 1348, Louvain-la-Neuve, Belgium
* Thomas Peters, UCLouvain – ICTEAM – Crypto Group, 1348, Louvain-la-Neuve, Belgium
### 摘要
> CCA类似的基于游戏的安全定义通过要求对手区分选择的明文的诚实计算加密来捕获保密性。在选举系统的背景下，这样的保证已被证明足以证明选票隐私（Asiacrypt'12）。在本文中，我们观察到，当我们试图获得不可追踪性时，它们并不足够，也就是说，当受损的选民提交加密他们的投票的选择密文时，他们必须防止向第三方证明他们的投票方式。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_10](https://doi.org/10.1007/978-3-031-22969-5_10)
## Efficient Searchable Symmetric Encryption for Join Queries.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#efficient-searchable-symmetric-encryption-for-join-queries) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#efficient-searchable-symmetric-encryption-for-join-queries)**
### 作者
* Charanjit Jutla, IBM Research, New York, USA
* Sikhar Patranabis, IBM Research, Bangalore, India
### 摘要
> 由于Cash等人于CRYPTO'13年提出的遗忘交叉标签（OXT）协议是一种高度可扩展的可搜索对称加密（SSE）方案，可以对加密关系数据库进行快速处理的合取和更一般的布尔查询。一个长期存在的问题是如何扩展OXT以支持对表连接进行查询而无需预先计算连接。在本文中，我们解决了这个问题，同时不牺牲OXT在安全性和效率方面的优势。我们提出了连接交叉标签（JXT）-一种完全对称密钥方案，支持对加密表的（等）连接进行高效的合取查询，而无需任何预先计算设置。JXT方案与OXT完全兼容，并且可以与OXT一起用于直接支持加密关系数据库上的广泛类别的SQL查询。与OXT相比，JXT会产生一个存储成本（超过OXT）等于表中潜在连接属性数量的因子，通常可以通过JXT是完全对称密钥解决方案（与依赖离散对数困难群的OXT相反）来补偿。我们证明了JXT相对于严格定义的泄漏配置文件的（自适应）基于仿真的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_11](https://doi.org/10.1007/978-3-031-22969-5_11)
## Knowledge Encryption and Its Applications to Simulatable Protocols with Low Round-Complexity.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#knowledge-encryption-and-its-applications-to-simulatable-protocols-with-low-round-complexity) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#knowledge-encryption-and-its-applications-to-simulatable-protocols-with-low-round-complexity)**
### 作者
* Yi Deng, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Xinxuan Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yi Deng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Xinxuan Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 我们引入了一种新的公钥加密概念，称为知识加密。对于此概念，其密文可以被简化为公钥形式，也就是说，可以使用任何能够破解密文不可区分性的算法来提取（部分）秘密密钥。我们展示了知识加密可以仅基于具有基于游戏的安全性的两轮无差别传输来构建，这些无差别传输已知基于各种标准（多项式困难性）假设，例如 DDH、二次剩余或 LWE 假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_12](https://doi.org/10.1007/978-3-031-22969-5_12)
## Compact and Tightly Selective-Opening Secure Public-key Encryption Schemes.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#compact-and-tightly-selective-opening-secure-public-key-encryption-schemes) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#compact-and-tightly-selective-opening-secure-public-key-encryption-schemes)**
### 作者
* Jiaxin Pan, Department of Mathematical Sciences, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Runzhi Zeng, Department of Mathematical Sciences, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
### 摘要
> 我们在随机预言模型中提出了四种具有紧密的基于模拟选择性开放安全性（SIM-SO-CCA）的公钥加密方案，以防范选择密文攻击。我们的方案仅由密文中的小恒定量的群元素组成，忽略来自对称密钥加密的较小贡献，也就是说，它们具有紧凑的密文。此外，我们的三种方案还具有紧凑的公钥。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_13](https://doi.org/10.1007/978-3-031-22969-5_13)
## Identity-Based Matchmaking Encryption from Standard Assumptions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#identity-based-matchmaking-encryption-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#identity-based-matchmaking-encryption-from-standard-assumptions)**
### 作者
* Jie Chen, Shanghai Key Laboratory of Trustworthy Computing,  Software Engineering Institute, East China Normal University, Shanghai, 200062, China
* Yu Li, Shanghai Key Laboratory of Trustworthy Computing,  Software Engineering Institute, East China Normal University, Shanghai, 200062, China
* Jinming Wen, College of Information Science and Technology and the College of Cyber Security, Jinan University, Guangzhou, 510632, China
* Jian Weng, College of Information Science and Technology and the College of Cyber Security, Jinan University, Guangzhou, 510632, China
* Jinming Wen, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
### 摘要
> 在这项工作中，我们提出了第一个基于身份的匹配加密（IB-ME）方案，该方案在标准模型下符合标准假设。该方案被证明在素数阶双线性配对群中对称外部Diffie-Hellman（SXDH）假设下是安全的。在我们的IB-ME方案中，所有参数都具有恒定数量的群元素，并且比先前的构造更简单。以前的工作要么在随机预言机模型中，要么基于Q类型的假设，而我们的方案直接建立在标准模型中，基于静态假设，并且不依赖其他加密工具。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_14](https://doi.org/10.1007/978-3-031-22969-5_14)
## Anonymous Public Key Encryption Under Corruptions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#anonymous-public-key-encryption-under-corruptions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#anonymous-public-key-encryption-under-corruptions)**
### 作者
* Zhengan Huang, Peng Cheng Laboratory, Shenzhen, China
* Junzuo Lai, College of Information Science and Technology, Jinan University, Guangzhou, China
* Jian Weng, College of Information Science and Technology, Jinan University, Guangzhou, China
* Shuai Han, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, China
* Lin Lyu, Bergische Universität Wuppertal, Wuppertal, Germany
### 摘要
> 公钥加密（PKE）的匿名性要求在多用户场景中，PKE密文不泄露生成它们所使用的公钥的信息。腐败是多用户场景中常见的威胁，但关于腐败条件下PKE的匿名性的研究较少见。在TCC 2020中，Benhamouda等人首次对一种特定类型的腐败条件下的PKE匿名性提供了形式化描述。然而，目前没有已知的PKE方案被证明符合他们的描述。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_15](https://doi.org/10.1007/978-3-031-22969-5_15)
## Memory-Tight Multi-challenge Security of Public-Key Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#memory-tight-multi-challenge-security-of-public-key-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#memory-tight-multi-challenge-security-of-public-key-encryption)**
### 作者
* Joseph Jaeger, School of Cybersecurity and Privacy Georgia Institute of Technology, Atlanta, GA, USA
* Akshaya Kumar, School of Cybersecurity and Privacy Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 我们提供了公钥加密方案的首个示例，可以通过时间、优势和内存上紧凑的约简来实现多挑战、多用户的CCA安全。我们的构造是通过将KEM-DEM范式应用于Hashed ElGamal和Fujisaki-Okamoto转换的变体，并在它们的密文中添加均匀随机字符串来获得的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_16](https://doi.org/10.1007/978-3-031-22969-5_16)
## Short-lived Zero-Knowledge Proofs and Signatures.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#short-lived-zero-knowledge-proofs-and-signatures) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#short-lived-zero-knowledge-proofs-and-signatures)**
### 作者
* Arasu Arun, New York University, New York, NY, USA
* Joseph Bonneau, New York University, New York, NY, USA
* Joseph Bonneau, University of Melbourne, Melbourne, VIC, Australia
* Jeremy Clark, Concordia University, Montreal, QC, Canada
### 摘要
> 我们引入了短暂证明，这是一种具有新颖特点的非交互式知识证明：在指定的时间之后，该证明不再具有说服力。这种时延性失真理性的发生是“自然”的，不需要证明者或任何第三方进一步参与。我们提出了短暂证明以及短暂签名的定义。我们展示了使用可验证延迟函数（VDFs）构建的几种实际构造。我们方法的关键思想是允许任何一方通过执行大规模顺序计算伪造任何证明。一些构造实现了一个更强的属性，称为可重用伪造性，其中一个顺序计算可以伪造任意数量的不同陈述的证明。我们还介绍了两种新颖类型的VDFs，即重置可随机化VDFs和零知识VDFs，可能具有独立的研究价值。我们的短暂Sigma-协议和签名构造对于证明者和验证者来说在实际中是高效的，增加了几百字节的额外开销和几十至几百毫秒的证明/验证时间。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_17](https://doi.org/10.1007/978-3-031-22969-5_17)
## Non-interactive Zero-Knowledge Proofs to Multiple Verifiers.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#non-interactive-zero-knowledge-proofs-to-multiple-verifiers) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#non-interactive-zero-knowledge-proofs-to-multiple-verifiers)**
### 作者
* Kang Yang, State Key Laboratory of Cryptology, Beijing, China
* Xiao Wang, Northwestern University, Evanston, USA
### 摘要
> 在本文中，我们研究了能够高效地向n个验证者证明的电路可满足性的零知识(ZK)证明。这些证明对于证明者和子集t个验证者的勾结是安全的。我们将这样的ZK证明称为多验证者零知识(MVZK)证明，并专注于大多数验证者是诚实的情况下（即\(t<n/2\)）。我们在随机预言机模型中构建了高效的MVZK协议，其中证明者向每个验证者发送一条消息，而验证者仅交换一轮消息。当被破坏的验证者的阈值 \(t<n/2\)时，证明者向每个验证者发送 \(1/2+o(1)\)个有限域元素用于每个乘法门；当 \(t<n(1/2-\epsilon )\)，对于某个常数 \(0<\epsilon <1/2\)时，我们可以进一步将通信减少到每个乘法门每个验证者的 O(1/n)个有限域元素。我们的MVZK协议表现出特别高的可扩展性：证明是可流式的，并且只需要与明文电路评估所需的内存成比例。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_18](https://doi.org/10.1007/978-3-031-22969-5_18)
## Rotatable Zero Knowledge Sets - Post Compromise Secure Auditable Dictionaries with Application to Key Transparency.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#rotatable-zero-knowledge-sets-post-compromise-secure-auditable-dictionaries-with-application-to-key-transparency) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#rotatable-zero-knowledge-sets-post-compromise-secure-auditable-dictionaries-with-application-to-key-transparency)**
### 作者
* Brian Chen, Zoom Video Communications, San Jose, USA
* Balachandar Kesavan, Zoom Video Communications, San Jose, USA
* Antonio Marcedone, Zoom Video Communications, San Jose, USA
* Merry Ember Mou, Zoom Video Communications, San Jose, USA
* Yevgeniy Dodis, New York University, New York, USA
* Eli Goldin, New York University, New York, USA
* Esha Ghosh, Microsoft Research, Redmond, USA
### 摘要
> 密钥透明度（KT）系统允许端到端加密服务提供商（消息、通话等）维护可审计的用户公钥目录，生成证明所有参与者对这些密钥有一致的视图，并允许每个用户检查其自身密钥的更新。近来，KT引起了广泛关注，尤其是其具有隐私保护的变体，可以确保用户和审计员除了使用服务和保持服务提供商负责任所必需的信息外，不会了解其他任何内容。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_19](https://doi.org/10.1007/978-3-031-22969-5_19)
## Nostradamus Goes Quantum.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#nostradamus-goes-quantum) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#nostradamus-goes-quantum)**
### 作者
* Barbara Jiabao Benedikt, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Marc Fischlin, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Moritz Huppert, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
### 摘要
> 在Kelsey和Kohno（Eurocrypt 2006）提出的Nostradamus攻击中，对手必须承诺一个迭代哈希函数\(\textsf{H}\)的哈希值\(y\)，以便当稍后给出消息前缀\(P\)时，对手能够找到一个合适的“后缀解释”\(S\)，使得\(\textsf{H}(P\left. \right\| {S})=y\)。Kelsey和Kohno展示了一个具有\(2^{2n/3}\)次压缩函数\(\textsf{H}\)评估的聚集攻击（其中n为输出和状态的位数），在复杂性上介于原像攻击和碰撞搜索之间。在这里，我们研究了Nostradamus攻击在量子对手面前的安全性。我们提出了一个量子聚集算法来解决Nostradamus问题，其需要大约\(\root 3 \of {n}\cdot 2^{3n/7}\)次压缩函数评估，显著改进了经典边界。我们还证明了对于随机压缩函数，量子聚集攻击不能比\(2^{3n/7}\)次评估更好，从而证明我们的算法（基本上）是最优的。我们还讨论了一种稍微不那么紧密的边界，大约为对于随机压缩函数的一般Nostradamus攻击，其中\(s\)是敌手选择的后缀\(S\)的最大块长度，\(\root 3 \of {n}\cdot 2^{3n/7-s}\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_20](https://doi.org/10.1007/978-3-031-22969-5_20)
## Synthesizing Quantum Circuits of AES with Lower T-depth and Less Qubits.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#synthesizing-quantum-circuits-of-aes-with-lower-t-depth-and-less-qubits) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#synthesizing-quantum-circuits-of-aes-with-lower-t-depth-and-less-qubits)**
### 作者
* Zhenyu Huang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zhenyu Huang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
### 摘要
> 量子计算机的显著进展使得基于量子计算的密码分析研究成为一个活跃的主题。为了准确估计进行量子攻击所需的资源，需要将涉及的量子算法合成为基本的量子门电路。在这项工作中，我们提出了几种通用的合成和优化技术，用于实现基于Grover和Simon算法的量子攻击中常用的迭代对称密钥密码的量子神谕电路。首先，提出了一个实现块密码轮函数的通用结构。然后，我们提出了一些合成线性和非线性密码构建块的高效量子电路的新技术。我们将这些技术应用于AES，并系统地研究了深度和宽度之间的权衡策略。在此过程中，我们根据对其经典电路的新观察，得到了一个AES S盒的量子电路，其T-深度可证明为最小值。因此，实现AES的量子电路所需的T-深度和宽度（量子比特数）显著减少。与EUROCRYPT 2020中提出的电路相比，T-深度从60减少到40，而不增加宽度；或者在稍微增加宽度的情况下减少到30。这些电路在Microsoft Q#中完全实现，并且源代码公开可用。与ASIACRYPT 2020中提出的电路相比，我们的一个电路的宽度从512减少到371，同时Toffoli深度从2016减少到1558。实际上，我们可以以增加深度的代价将宽度减少到270。此外，我们提供了完整的深度-宽度权衡范围，为AES的量子电路的合成和优化创造了新纪录。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_21](https://doi.org/10.1007/978-3-031-22969-5_21)
## Exploring SAT for Cryptanalysis: (Quantum) Collision Attacks Against 6-Round SHA-3.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#exploring-sat-for-cryptanalysis-quantum-collision-attacks-against-6-round-sha-3) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#exploring-sat-for-cryptanalysis-quantum-collision-attacks-against-6-round-sha-3)**
### 作者
* Jian Guo, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Guozhen Liu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Yi Tu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Ling Song, College of Cyber Security, Jinan University, Guangzhou, China
### 摘要
> 在这项工作中，我们专注于对SHA-3散列族实例的碰撞攻击，包括在传统和量子设置中。自从Guo等人在2020年的JoC中提出对SHA3-256和其他变体的5轮碰撞攻击以来，没有公开发布任何其他的重要进展。经过深入研究，我们发现将这种对SHA-3的碰撞攻击扩展到更多轮的挑战在于差分路径查找的效率低下。为了克服这个障碍，我们开发了一个基于SAT的自动搜索工具包。该工具用于碰撞攻击的多个中间步骤，并在差分路径查找和过程中遇到的其他优化问题上展现出了惊人的高效率。结果，我们提出了第一个6轮传统碰撞攻击SHAKE128，时间复杂度为\(2^{123.5}\)，这也构成了一个量子碰撞攻击，量子时间为，以及对SHA3-224和SHA3-256的第一个6轮量子碰撞攻击，量子时间为和，其中S表示量子计算机的硬件资源。古典碰撞攻击无法应用于6轮的SHA3-224和SHA3-256这一事实，显示出了量子碰撞攻击的更高覆盖范围，这与Hosoyamada和Sasaki在2021年的CRYPTO上观察到的SHA-2上的情况一致。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_22](https://doi.org/10.1007/978-3-031-22969-5_22)
## Log-S-unit Lattices Using Explicit Stickelberger Generators to Solve Approx Ideal-SVP.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#log-s-unit-lattices-using-explicit-stickelberger-generators-to-solve-approx-ideal-svp) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#log-s-unit-lattices-using-explicit-stickelberger-generators-to-solve-approx-ideal-svp)**
### 作者
* Olivier Bernard, Univ Rennes, CNRS, IRISA, Rennes, France
* Andrea Lesavourey, Univ Rennes, CNRS, IRISA, Rennes, France
* Tuong-Huy Nguyen, Univ Rennes, CNRS, IRISA, Rennes, France
* Adeline Roux-Langlois, Univ Rennes, CNRS, IRISA, Rennes, France
* Olivier Bernard, Thales, Gennevilliers, France
* Tuong-Huy Nguyen, DGA Maîtrise de l’Information, Bruz, France
### 摘要
> 在2020年，Bernard和Roux-Langlois基于Pellet-Mary、Hanrot和Stehlé的PHS算法，引入了Twisted-PHS算法来解决任何数域上理想格的Approx-Svp问题。他们对最多为70的整数域的素导体环进行了实验，其中一个主要瓶颈是计算log-\(\mathcal {S}\)-单位格，该计算需要亚指数时间。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_23](https://doi.org/10.1007/978-3-031-22969-5_23)
## On Module Unique-SVP and NTRU.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#on-module-unique-svp-and-ntru) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#on-module-unique-svp-and-ntru)**
### 作者
* Joël Felderhoff, Inria Lyon, Lyon, France
* Joël Felderhoff, ENS de Lyon, Lyon, France
* Damien Stehlé, ENS de Lyon, Lyon, France
* Alice Pellet-Mary, Univ. Bordeaux, CNRS, Inria, Bordeaux INP, IMB, Talence, France
* Damien Stehlé, Institut Universitaire de France, Paris, France
### 摘要
> NTRU问题可以被视为在一个格子中找到一个短的非零向量的实例，而这个格子中确保包含一个异常短的向量。此外，所研究的格子具有作为一个数域整数环上的秩-2模结构。让我们将这个问题称为模唯一最短向量问题，或简称为mod-uSVP。我们展示了两个归约，它们共同证明了从计算的角度来看，NTRU问题不仅仅是mod-uSVP的一个特例，而且也代表了它。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_24](https://doi.org/10.1007/978-3-031-22969-5_24)
## A Non-heuristic Approach to Time-Space Tradeoffs and Optimizations for BKW.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#a-non-heuristic-approach-to-time-space-tradeoffs-and-optimizations-for-bkw) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#a-non-heuristic-approach-to-time-space-tradeoffs-and-optimizations-for-bkw)**
### 作者
* Hanlin Liu, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, Shanghai Qi Zhi Institute, 701 Yunjin Road, Shanghai, 200232, China
### 摘要
> Blum、Kalai和Wasserman（JACM 2003）提出了第一个用于解决带噪声的学习奇偶校验（LPN）问题的次指数算法。特别是，考虑具有恒定噪声和维度n的LPN问题。BKW使用的空间复杂度为\(2^{\frac{(1+\epsilon )n}{\log (n)}}\)，时间/样本复杂度为\(2^{\frac{(1+\epsilon )n}{\log (n)}}\cdot 2^{\varOmega (n^{\frac{1}{1+\epsilon }})}\)，其中小常数\(\epsilon \rightarrow 0^+\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_25](https://doi.org/10.1007/978-3-031-22969-5_25)
## Improving Bounds on Elliptic Curve Hidden Number Problem for ECDH Key Exchange.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#improving-bounds-on-elliptic-curve-hidden-number-problem-for-ecdh-key-exchange) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#improving-bounds-on-elliptic-curve-hidden-number-problem-for-ecdh-key-exchange)**
### 作者
* Jun Xu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Lei Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Jun Xu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
* Lei Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
* Santanu Sarkar, Indian Institute of Technology Madras, Sardar Patel Road, Chennai, 600036, India
* Huaxiong Wang, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
### 摘要
> 椭圆曲线隐藏数字问题（EC-HNP）最初由Boneh，Halevi和Howgrave-Graham在Asiacrypt 2001中介绍。为了严格评估具有椭圆曲线（ECDH）的Diffie-Hellman密钥交换的位安全性，将被视为Hidden Number Problem（HNP）的椭圆曲线类比的Diffie-Hellman变体 EC-HNP，在PKC 2017上展示。 在侧信道攻击的情况下，此变种也可用于ECDH密钥交换的实际密码分析。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_26](https://doi.org/10.1007/978-3-031-22969-5_26)
