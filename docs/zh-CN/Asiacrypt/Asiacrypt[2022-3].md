# Asiacrypt[2022-3]
## New Algorithms and Analyses for Sum-Preserving Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#new-algorithms-and-analyses-for-sum-preserving-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#new-algorithms-and-analyses-for-sum-preserving-encryption)**
### 作者
* Sarah Miracle, University of St. Thomas, St. Paul, USA
* Scott Yilek, University of St. Thomas, St. Paul, USA
### 摘要
> 我们继续研究保持和的加密方案，其中明文和密文均为具有相同和的整数向量。塔吉克、古纳塞卡兰、杜塔、埃利亚、鲍巴、罗苏莱克、赖特和冯（NDSS 2019）最近在图像加密的背景下构建并分析了此类加密方案。我们的第一个主要结果是使用路径耦合证明了塔吉克等人给出的构造的混合时间界限。然后，我们通过描述两种实践方式来对涉及到和保持加密的值进行排序和非排序，这可以与格式保持加密中的排序-加密-非排序技术相结合，从而提供了新的和保持加密方案。最后，我们根据我们在原型实现上进行的性能测试，比较了塔吉克等人的构造和我们的新的基于排序的构造的效率。

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
> 混合同态加密（Hybrid Homomorphic Encryption，HHE）在全同态加密（Fully Homomorphic Encryption，FHE）框架中减少了客户端的计算量和带宽使用。HHE需要使用能够高效地进行同态评估的特定对称方案。本文介绍了一种称为群过滤置换器（Group Filter Permutator，GFP）的范式，作为Méaux等人引入的改进过滤置换器范式的推广。我们从这个范式出发，指定了一类流密码并给出了一个实例：Elisabeth-4。在确认该方案的安全性后，我们提供了其Rust实现，并确保其性能与最先进的HHE相当。Elisabeth的真正优势在于服务器端可用的操作：而最佳HHE应用程序仅限于服务器端的少数乘法运算，我们使用通过Elisabeth-4传输的数据来同态评估神经网络推断。最后，我们讨论了HHE和FHE框架之间的改进和损失，并提出了利用Elisabeth家族构建更高效方案的思路。

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
> 近年来，已经引入了几种整数线性规划（MILP）模型来自动搜索块密码中的回旋特征器（boomerang distinguishers）和回旋攻击（boomerang attacks）。然而，这些模型只能在密钥调度是线性的情况下使用。因此，本文引入了一种新的模型来处理非线性密钥调度，正如AES中的情况。这种模型更复杂，实际上在穷举搜索时速度过慢。然而，当求解器添加一些提示时，它找到了目前最佳的相关密钥回旋攻击AES-192，时间复杂度为\(2^{124}\)，数据复杂度为\(2^{124}\)，内存复杂度为\(2^{79.8}\)，这比Biryukov和Khovratovich在ASIACRYPT 2009中提出的复杂度\(2^{176}/2^{123}/2^{152}\)更好。这在时间和内存复杂度上代表了巨大的改进，展示了MILP在密码分析中的强大能力。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_3](https://doi.org/10.1007/978-3-031-22969-5_3)
## On Secure Ratcheting with Immediate Decryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#on-secure-ratcheting-with-immediate-decryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#on-secure-ratcheting-with-immediate-decryption)**
### 作者
* Jeroen Pijnenburg, Royal Holloway, University of London, Egham Hill, Egham, Surrey, UK
* Bertram Poettering, IBM Research Europe – Zurich, Säumerstr 4, 8803, Rüschlikon, Switzerland
### 摘要
> Ratcheting协议可以在预计存在状态暴露攻击的环境中安全地交换消息。虽然不可避免地，一旦对手获得一方的状态副本，某些关于保密性和真实性的承诺无法兑现，但是Ratcheting协议的目标是尽可能限制状态曝露的影响。特别是，这些协议提供前向安全性（在状态曝露后，过去的消息仍然安全）和事后受损安全性（在状态曝露后，参与者自动修复和恢复安全性）。
> 
> Ratcheting协议是大多数现代即时通信应用程序的核心组件，每天有数十亿用户。包括Signal在内的大多数应用程序保证即时解密（ID）：接收方在加密文本可用时立即恢复和传递消息，即使密文顺序错误且之前的密文仍然丢失。这确保了在不可靠的通信网络中会话的继续进行，最终提供了令人满意的用户体验。虽然最初的学术研究中没有考虑到具备ID功能的Ratcheting协议，但Alwen等人（EC'19）提出了第一个具备ID意识的安全模型，并提供了具有可证明安全性的构建方法。不幸的是，正如我们所注意到的，在他们的协议中，接收方状态的曝露会导致对所有以前未传递的密文的解密。因此，从对手的角度来看，有意阻止部分对话的密文传递，并在若干天后使接收方受损，就可以正确解密所有被压制的密文。同样的攻击也适用于Signal。
> 
> 我们认为Alwen等人的协议实现的（前向）安全级别，以及他们的安全模型所要求的，远远低于直观预期和技术上可能实现的水平。我们工作的主要贡献是对ID环境中的Ratcheting通信安全概念进行仔细重新审视，并提供了可证明安全的概念验证建模。我们模型的一个新颖组成部分是它反映了物理时间的进程。这允许正式要求（未传递的）密文在可配置的时间段后自动过期。

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
> 匿名性是对受到威胁用户群体尤为重要的（摘要）安全目标。因此，广泛使用的通信协议实施了各种措施来隐藏有关用户的不同类型的信息（即元数据）。在实际定义匿名性之前，我们考虑了一个攻击向量，针对这种攻击向量，目标用户群体可能感到担忧：他们的秘密会持续暴露。这种攻击向量的例子包括故意植入受害者设备的病毒，以及当用户被拘留时的物理访问。
> 
> 在Signal的Double-Ratchet算法的启发下，Ratcheted（或Continuous）Key Exchange（RKE）是一种新颖的协议类别，可以增加对用户秘密暂时暴露的机密性和真实性保证。为此，RKE定期更新用户秘密，以最小化过去和未来暴露所造成的损害；分别称之为后置妥协安全性和前向安全性。
> 
> 通过这项工作，我们首次利用了RKE的强大能力，以在用户秘密暂时暴露的情况下实现强大的匿名性保证。我们扩展了现有的RKE定义，以捕捉在网络上看到的密文与从用户设备中暴露的秘密相关的攻击。尽管乍一看，强大的真实性（和机密性）与强大的匿名性相冲突，但我们的匿名定义力求尽可能强大，而不会削弱其他目标。
> 
> 我们构建了能够保护强大的匿名性、真实性和机密性的RKE，同时还开发了适用于我们特定用例之外的新工具：可更新和随机化签名以及可更新和随机化公钥加密。对于这两种新的基元，我们构建了高效的构造。

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
> 最近的一些研究已经构建了具有适应性安全特性的加密协议，通过在每一轮中运行随机选择的匿名委员会来实现。由于这些协议大多是有状态的，将过去委员会的秘密状态传输给未知的未来委员会是一个关键的挑战。以往的研究通过为其特定环境量身定制的方法来解决这个问题，大多依赖于使用区块链来协调辅助委员会，以帮助进行状态移交过程。在本文中，我们将这个挑战视为一个重要的问题，并将未来加密（Encryption to the Future，EtF）作为密码学原语进行研究。首先，我们定义了一个EtF方案的概念，其中时间是根据底层区块链确定的，抽奖选出的参与方将在未来某个时间点接收到一个秘密消息。虽然这个概念似乎过于限制，但我们建立了两个重要的事实：1. 如果用于向“遥远未来”中选择的参与方加密，EtF可以推导出基于区块链上的NP证明的见证加密；2. 如果仅用于向“近未来”中选择的参与方加密，EtF不仅足以满足先前工作所需的委员会间状态传输，还包含了先前定制解决方案。为了验证这些结果，我们提供了一种基于承诺见证加密（commitments witness encryption，cWE）的EtF新构建方式，并通过基于通用密码原语的构造从多个标准假设中实例化该构建方式。最后，我们展示了如何使用“近未来”EtF通过一个与待发送到未来的明文消息长度无关的协议来获得“遥远未来”EtF。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_6](https://doi.org/10.1007/978-3-031-22969-5_6)
## Authenticated Encryption with Key Identification.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#authenticated-encryption-with-key-identification) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#authenticated-encryption-with-key-identification)**
### 作者
* Julia Len, Cornell Tech, New York, USA
* Thomas Ristenpart, Cornell Tech, New York, USA
* Paul Grubbs, University of Michigan, Ann Arbor, USA
### 摘要
> 鉴别加密与相关数据（AEAD）构成了对称密码学的核心，然而，用于建模AEAD的标准技术假设接收方在解密时不会对使用哪个秘密密钥产生任何歧义。这与实际情况脱离开来，比如在密钥管理服务中，消息接收方可以存储多个密钥，并且在解密之前必须确定正确的密钥。到目前为止，还没有正式调查过它们的安全性或有效性，并且实际部署的识别预期密钥的临时解决方案可能效率低下，在某些情况下还容易受到实际攻击。
> 
> 我们提出了第一个支持密钥识别的基于nonce的AEAD的起草（AEAD-KI）。现在，解密过程需要使用一组秘密密钥和密文，并且必须同时识别出正确的密钥并解密密文。我们提供了新的形式安全定义，包括新的密钥强度定义和不可区分性安全概念。最后，我们展示了几种不同的AEAD-KI方法，并证明了它们的安全性。

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
> 隐私保护认证密钥交换（PPAKE）提供了对会话密钥和参与方身份信息的保护。本文在PPAKE中引入了鲁棒性的概念。鲁棒性使得每个用户可以确认自己是否是协议中第一轮消息的目标接收者。借助鲁棒性，PPAKE协议可以成功避免现有PPAKE中通信不明确所导致的繁重冗余的通信和计算，尤其是在广播信道中。
> 
> 我们提出了从密钥封装机制（KEM）、数字签名（SIG）、消息认证码（MAC）、伪随机生成器（PRG）和对称加密（SE）构建鲁棒PPAKE的通用方法。通过使用DDH假设实例化KEM、MAC、PRG，以及使用CDH假设实例化SIG，我们在标准模型下获得了具体的鲁棒PPAKE方案。该方案具有会话密钥的前向安全性、用户身份的显式认证和前向隐私性。由于我们PPAKE的鲁棒性，每次运行的广播消息数量和每个用户的计算复杂度是常数，并且特别地，与系统中的用户数量无关。

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
> 最近的实际应用中，使用了先进的密码协议，例如多方计算和零知识证明，这引发了一系列描述在大有限域上的新型对称原语，被称为面向算术化（AO）密码。这些设计旨在通过减少字段上的乘法次数来尽量减小受代数攻击的风险，特别是更高阶微分攻击。因此，仔细评估它们的代数度增长非常重要。然而，由于缺乏通用且准确的方法，对于AO密码的度估计一直是密码分析师面临的挑战。
> 
> 在本文中，我们将分割属性这一现代框架扩展到二进制数域\(\mathbb {F}_{2^n}\)，从而能够检测AO密码的代数度，甚至适用于没有比平凡指数界限更好的Feistel密码。在这个通用分割属性中，我们的思路是评估块密码的多项式表示是否包含一些特定的单项式。通过深入研究算术特性，我们介绍了用于基于字段操作的单项式传播规则，并且可以通过SMT的位向量理论进行高效建模。然后，由于代数度与单项式的指数之间的关系，我们可以构建出度估计的新搜索工具。
> 
> 我们将新的框架应用于一些重要的AO密码，包括Feistel MiMC、GMiMC和MiMC。对于Feistel MiMC，我们证明了其代数度增长远远慢于本来的指数界限。首次提出了一个自CRYPTO 2020中提出的Feistel MiMC置换的高阶微分区分器，可以在高达124轮上工作，比83轮的区分器好得多。我们还展示了一个完全回合的零和区分器，数据复杂度为\(2^{251}\)。我们的方法可以进一步扩展到具有更多分支的通用Feistel结构，并且能够对实际的GMiMC实例展示高阶微分区分器，最多可达50轮。对于使用SP网络的MiMC，我们的结果与Bouvier等人证明的确切代数度相符。我们还指出，在MiMC之类具有不同指数的方案中，MiMC规范中的轮数不足以保证抵御高阶微分攻击。对于密文设计，研究不同指数可以提供一些指导意见。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_9](https://doi.org/10.1007/978-3-031-22969-5_9)
## Traceable Receipt-Free Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#traceable-receipt-free-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#traceable-receipt-free-encryption)**
### 作者
* Henri Devillez, UCLouvain – ICTEAM – Crypto Group, 1348, Louvain-la-Neuve, Belgium
* Olivier Pereira, UCLouvain – ICTEAM – Crypto Group, 1348, Louvain-la-Neuve, Belgium
* Thomas Peters, UCLouvain – ICTEAM – Crypto Group, 1348, Louvain-la-Neuve, Belgium
### 摘要
> CCA类似的基于博弈的安全定义通过要求对手区分所选明文的诚实计算加密来捕获保密性。在选举系统的背景下，已经证明这种保证足以证明选票的隐私性（Asiacrypt'12）。在本文中，我们观察到，当我们试图获得免收据性时，它们表现出不足之处，也就是说，当被腐败的选民提交加密其选票的所选密文时，必须防止他们向第三方证明他们的投票方式。
> 
> 由于没有已知的加密安全概念可以导致免收据的选票提交过程，我们通过提出一种新型的可公开验证的加密基元Traceable Receipt-free Encryption（TREnc）和一种新的可追踪CCA安全概念来解决这个挑战，填补上述定义的空白。
> 
> 我们提出了两个TREnc实例，一个通用的实例为了与现有的构建模块相关联而实现更强的保证，一个基于SXDH的专用实例。两者都支持在标准模型中加密群元素，而之前提出的旨在提供免收据性的加密方案只支持多项式大小的消息空间，或者在通用群模型中的安全性。
> 
> 最后，我们通过遵循标准蓝图，演示了如何使用TREnc构建免收据协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_10](https://doi.org/10.1007/978-3-031-22969-5_10)
## Efficient Searchable Symmetric Encryption for Join Queries.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#efficient-searchable-symmetric-encryption-for-join-queries) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#efficient-searchable-symmetric-encryption-for-join-queries)**
### 作者
* Charanjit Jutla, IBM Research, New York, USA
* Sikhar Patranabis, IBM Research, Bangalore, India
### 摘要
> 由于Cash等人在CRYPTO'13中提出的OXT（Oblivious Cross-Tags）协议是一种高度可扩展的可搜索对称加密（SSE）方案，允许快速处理加密关系数据库上的连词和更一般的布尔查询。长期以来，一个未解决的问题是如何将OXT扩展到支持无需预先计算连接的表之间的查询。在本文中，我们在不影响OXT在安全性和效率方面良好属性的前提下，解决了这个未解决的问题。我们提出Join Cross-Tags（JXT）-一种纯对称密钥解决方案，支持在加密表的（等）连接上进行高效的连词查询，无需任何预计算设置。JXT方案与OXT完全兼容，并可以与OXT结合使用，直接支持对加密关系数据库进行广泛类别的SQL查询。JXT方案的存储成本（相对于OXT而言）等于一个表中潜在连接属性的数量，通常通过JXT完全对称密钥解决方案的事实进行补偿（相对于依赖离散对数难度群的OXT）。我们证明了JXT相对于严格定义的泄露配置文件的（适应性）基于仿真的安全性。

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
> 我们引入了一种新的公钥加密概念，知识加密，其密文可以简化为公钥，即可以使用任何能够破解密文的不可区分性的算法来提取（部分）密钥。我们展示了知识加密可以完全基于任何具有基于游戏的安全性的两轮遗忘传输构建，这些构建已知基于各种标准（多项式强度）假设，例如DDH、二次（N次）残余性或LWE假设。
> 
> 我们使用知识加密构建了第一个三轮（弱）模拟遗忘传输。该协议满足接收方的（完全）模拟安全性，并满足发送方的弱模拟安全性（\(T，\epsilon \) -模拟安全性），即对于任何多项式T和任何反函数\(\epsilon \)，存在一个高效的模拟器，使得任何大小小于T的区分器的区分能力差距最多为\(\epsilon \)。
> 
> 利用这些工具，我们构建了一系列基于低轮复杂性的基本密码协议，仅假设存在具有基于游戏的安全性的两轮遗忘传输。这些协议包括三轮延迟输入的弱零知识论证、三轮弱安全的双方计算、BPK模型中的三轮并发弱零知识以及具有选择性开放攻击下的两轮弱安全承诺。这些结果改进了先前构建所需的假设。此外，我们的所有协议均满足上述\((T，\epsilon )\)-模拟安全性（强于区分器相关的模拟安全性），并在相同（多项式强度）假设下具有准多项式时间的模拟性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_12](https://doi.org/10.1007/978-3-031-22969-5_12)
## Compact and Tightly Selective-Opening Secure Public-key Encryption Schemes.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#compact-and-tightly-selective-opening-secure-public-key-encryption-schemes) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#compact-and-tightly-selective-opening-secure-public-key-encryption-schemes)**
### 作者
* Jiaxin Pan, Department of Mathematical Sciences, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Runzhi Zeng, Department of Mathematical Sciences, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
### 摘要
> 我们提出了四种公钥加密方案，其在随机预言机模型中呈现出紧密SIM-SO-CCA（选择密文攻击）安全性。我们的方案仅包含少量的群元素，忽略了来自对称密钥加密的较小贡献，也就是说，它们具有紧凑的密文。此外，我们的三种方案也具有紧凑的公钥。
> 
> Lyu等人（PKC 2018）和Libert等人（Crypto 2017）的(几乎)紧密SIM-SO-CCA安全PKE方案已经被广泛认识。它们只具有线性尺寸的密文或线性尺寸的公钥。此外，它们只实现了几乎的紧密性，也就是说，安全性损失取决于安全参数。
> 
> 与它们不同，我们的方案是第一个同时实现紧密SIM-SO-CCA安全性和紧凑性的方案。我们的方案可以分为两个类别：
> 
> 直接构造。我们的前三种方案直接基于强Diffie-Hellman（StDH）、计算Diffie-Hellman（CDH）和决策Diffie-Hellman（Decisional DH）假设构建。它们的密文和公钥都是紧凑的。它们的安全性损失是一个小常数。有趣的是，我们基于CDH的构造是第一个基于一个弱的搜索假设同时实现所有这些优势的方案。
> 
> 通用构造。我们的最后一个方案是著名的藤崎-冈本转换。我们表明它可以将一个有损加密方案转换为紧密SIM-SO-CCA安全的PKE方案。这个转换保持了底层有损加密的紧密性和紧凑性，这与Heuer等人（PKC 2015）的非紧密证明相反。

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
> 在这项研究中，我们提出了第一个基于身份的配对加密匹配方案（IB-ME），其在标准模型中的标准假设下被证明是安全的。该方案在素数阶双线性配对群中，根据对称外部Diffie-Hellman（SXDH）假设的证明是安全的。在我们的IB-ME方案中，所有参数都有恒定数量的群元素，并且比先前的构造更简单。先前的工作要么基于随机预言机模型，要么基于q类型的假设，而我们的方案直接在标准模型中构建，并基于静态假设，不依赖其他加密工具。
> 
> 更具体地说，我们的IB-ME方案是从两级匿名IBE的变体构建而成的。我们观察到，具有匿名性和不可伪造性的这两级IBE满足IB-ME的相同功能，其安全性属性巧妙地满足了IB-ME的两个要求（隐私性和真实性）。IB-ME的隐私属性依赖于这两级IBE的匿名性，而真实性属性对应于第二级中的不可伪造性。这种两级IBE的变体是从双重配对向量空间构建的，并且两个安全约简都依赖于双系统加密。

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
> 公钥加密（PKE）的匿名性要求在多用户场景中，PKE的密文不泄漏关于生成它们所使用的公钥的信息。在多用户场景中，损坏是常见的威胁，但是文献中对于损坏下PKE的匿名性的研究较少。在TCC 2020中，Benhamouda等人首次提供了对于一种特定类型的损坏下PKE匿名性的形式化描述。然而，目前没有已知的PKE方案能够满足他们的描述。
> 
> 据我们所知，所有需要匿名性的PKE应用场景也都需要机密性。然而，在Benhamouda等人的工作中，对于匿名性和机密性的不同类型损坏进行了考虑，可能导致安全漏洞。更糟糕的是，我们不知道任何PKE方案能够在相同类型的损坏下同时提供匿名性和机密性。
> 
> 在本研究中，我们引入了一种名为ANON-RSO\(_{ {k} }\) &C安全性的PKE新安全概念，以捕捉在损坏下的匿名性。我们还引入了SIM-RSO\(_{ {k} }\) &C安全性，该安全性能够在相同类型的损坏下捕捉机密性。基于一种名为密钥和消息非承诺加密（KM-NCE）的新原语，我们提供了构建能够同时实现上述两个安全目标的PKE方案的通用框架。然后，我们给出了利用一种称为密钥可开放哈希证明系统（Key-Openable HPS）的变种的哈希证明系统（HPS）的一般构造。我们还基于矩阵决策性Diffie-Hellman假设提供了Key-Openable HPS的实例化。因此，我们可以在标准模型中获得各种具体的PKE实例，实现具有紧凑密文的两个安全目标。此外，对于某些PKE实例，它的安全约简是紧密的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_15](https://doi.org/10.1007/978-3-031-22969-5_15)
## Memory-Tight Multi-challenge Security of Public-Key Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#memory-tight-multi-challenge-security-of-public-key-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#memory-tight-multi-challenge-security-of-public-key-encryption)**
### 作者
* Joseph Jaeger, School of Cybersecurity and Privacy Georgia Institute of Technology, Atlanta, GA, USA
* Akshaya Kumar, School of Cybersecurity and Privacy Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 我们给出了公钥加密方案的首个例子，可以通过在时间、优势和记忆中都紧密结合的归约来证明其实现多挑战、多用户的CCA安全性。我们的构造是通过将KEM-DEM范式应用于Hashed ElGamal的变种和Fujisaki-Okamoto变换，并在其密文中添加均匀随机字符串而获得的。
> 
> 这些归约巧妙地结合了Bhattacharyya'20和Ghoshal-Ghosal-Jaeger-Tessaro'22最近引入的证明技术。我们对Hashed-ElGamal的增强ECIES版本的证明利用了一个新的计算Diffie-Hellman假设，其中对手可以访问与随机群的配对，我们认为这可能具有独立的兴趣。

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
> 我们引入短暂证明（short-lived proof），这是一种具有新颖特征的非交互式知识证明：在指定的时间段后，这个证明将不再具有说服力。这种时延导致可用性的丧失是“自然”发生的，无需证明者或任何第三方的进一步干预。我们提出了短暂证明以及短暂签名的定义。我们展示了利用可验证延迟函数（VDFs）构建的几个实用构造。我们方法的关键思想是允许任何一方通过执行大规模串行计算来伪造任何证明。一些构造实现了更强的可重用伪造性质，即一个串行计算可以伪造不同语句的任意数量的证明。我们还引入了两种新颖类型的VDFs，即可重新随机化的VDFs和零知识VDFs，这可能具有独立的研究意义。我们针对短暂的Σ-协议和签名进行的构造在证明者和验证者方面具备实用性，只增加了几百字节的开销和几十到几百毫秒的证明/验证时间。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_17](https://doi.org/10.1007/978-3-031-22969-5_17)
## Non-interactive Zero-Knowledge Proofs to Multiple Verifiers.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#non-interactive-zero-knowledge-proofs-to-multiple-verifiers) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#non-interactive-zero-knowledge-proofs-to-multiple-verifiers)**
### 作者
* Kang Yang, State Key Laboratory of Cryptology, Beijing, China
* Xiao Wang, Northwestern University, Evanston, USA
### 摘要
> 在本文中，我们研究了可以高效地向n个验证者证明电路可满足性的零知识（ZK）证明。这些证明对于证明者和t个验证者的串通是安全的。我们将这种ZK证明称为多验证者零知识（MVZK）证明，并专注于大多数验证者是诚实的情况（即\(t<n/2\)）。我们在随机预言模型中构建了高效的MVZK协议，其中证明者向每个验证者发送一条消息，而验证者仅交换一轮消息。当被破坏的验证者阈值\(t<n/2\)时，证明者向每个验证者发送\(1/2+o(1)\)个字段元素用于每个乘法门；当\(t<n(1/2-\epsilon)\)（其中\(0<\epsilon<1/2\)为某个常数）时，我们可以进一步将通信减少到每个乘法门每个验证者的O(1/n)个字段元素。我们的MVZK协议具有特别高的可扩展性：证明可以进行流式传输，并且仅需要与明文电路计算所需的内存成比例。

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
> 密钥透明性（KT）系统允许端到端加密的服务提供商（消息传递、通话等）维护其用户公钥的可审计目录，并生成证明，证明所有参与者对这些密钥具有一致的视图，并允许每个用户检查对其自身密钥的更新。近来，KT引起了很多关注，特别是其保护隐私的变种，还确保用户和审计人员除了必要的服务使用和使服务提供商负责之外不会学习到其他任何东西。
> 
> 抽象地说，构建此类系统的问题可以简化为构建所谓追加方式只零知识集（aZKS）。不幸的是，现有的aZKS（和KT）解决方案在保持可审计特性的同时，无法在服务器遭到破坏后充分恢复隐私保证，即一种后破坏安全（PCS）形式。在这项工作中，通过对aZKS的扩展进行形式化，我们解决了这个问题，称为旋转式ZKS(\({{\textsf{RZKS}}}\)) 。除了提供PCS，我们对\({{\textsf{RZKS}}}\)的概念还具有其他一些吸引人的特性，例如更强的（可提取的）完备性概念，以及具有过时数据的通信方能够高效地“追赶”到当前历史时期，同时确保服务器没有删除任何过去的数据。
> 
> 我们还介绍了一种新的原语，称为可旋转的可验证随机函数（VRF），并展示了如何从可旋转的VRF、排序累加器和仅追加向量承诺方案以模块化方式构建\({{\textsf{RZKS}}}\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_19](https://doi.org/10.1007/978-3-031-22969-5_19)
## Nostradamus Goes Quantum.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#nostradamus-goes-quantum) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#nostradamus-goes-quantum)**
### 作者
* Barbara Jiabao Benedikt, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Marc Fischlin, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Moritz Huppert, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
### 摘要
> 在Nostradamus攻击中，由Kelsey和Kohno（Eurocrypt 2006）引入，对手必须承诺一个迭代哈希函数\(\textsf{H}\)的哈希值y，以便在稍后给出一个消息前缀\(P\)时，对手能够找到一个合适的“后缀解释”\(S\)，使得\(\textsf{H}(P\left. \right\| {S})=y\)。Kelsey和Kohno展示了一个使用\(\textsf{H}\)的压缩函数进行\(2^{2n/3}\)次评估的集齐攻击（其中n位输出和状态），在复杂性方面定位攻击在前像攻击和碰撞搜索之间。在这里，我们调查了量子对手的Nostradamus攻击的安全性。我们提出了一个量子集齐算法，用于Nostradamus问题，大约需要\(\root 3 \of {n}\cdot 2^{3n/7}\)个压缩函数评估，明显优于经典界限。我们还证明，对于随机压缩函数，量子集齐攻击不能超过\(2^{3n/7}\)次评估，说明我们的算法是（本质上）最优的。我们还讨论了对于随机压缩函数，一般Nostradamus攻击的略微更松的界限，大约为\(2^{3n/7-s}\)，其中\(s\)是对手选择的后缀\(S\)的最大块长度。

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
> 量子计算机的显著进展使得基于量子计算的密码分析研究成为一个活跃的课题。为了准确估计进行量子攻击所需的资源，涉及的量子算法必须合成成基本量子门的量子电路。在这项工作中，我们提出了几种通用的合成和优化技术，用于实现量子攻击中基于Grover和Simon算法的迭代对称密钥密码的量子预言电路。首先，提出了一种实现块密码轮函数的通用结构。然后，我们提出了一些用于合成线性和非线性密码构建模块高效量子电路的新技术。我们将这些技术应用于AES，并系统地研究了深度和宽度的权衡策略。在此过程中，根据对其经典电路的一些新观察，我们推导出了AES S-box的量子电路，其T-depth被证明是最小的。因此，实现AES的量子电路所需的T-depth和宽度（量子比特数）大大减少。与EUROCRYPT 2020提出的电路相比，T-depth从60减少到40，而宽度不增加，或者在宽度略微增加的情况下减少到30。这些电路已在Microsoft Q＃中完全实现，并且源代码公开可用。与ASIACRYPT 2020提出的电路相比，我们的一个电路的宽度从512减少到371，同时Toffoli-depth从2016减少到1558。实际上，我们可以在增加深度的代价下将宽度减少到270。此外，我们提供了全系列深度和宽度权衡，为AES的量子电路的合成和优化创造了新记录。

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
> 在这项工作中，我们针对经典和量子环境下的SHA-3哈希系列实例进行碰撞攻击研究。自2020年Guo等人在JoC上提出对SHA3-256和其他变种的5轮碰撞攻击之后，没有其他重要进展被公开发表。通过彻底的调查，我们确定将此类碰撞攻击方法扩展到更多轮次的挑战在于差分路径搜索的低效性。为了克服这个障碍，我们开发了一款基于SAT-SMT求解器的自动搜索工具包。该工具在碰撞攻击的多个中间步骤中使用，并在差分路径搜索和其他优化问题中展现了出乎意料的高效率。因此，我们提出了对SHAKE128的首个6轮经典碰撞攻击，时间复杂度为$2^{123.5}$，同时也形成了一个量子碰撞攻击，并且提出了对SHA3-224和SHA3-256的首个6轮量子碰撞攻击，其中量子时间为 ，表示量子计算机的硬件资源。经典碰撞攻击无法适用于6轮的SHA3-224和SHA3-256，这显示了量子碰撞攻击的覆盖范围更广，这与Hosoyamada和Sasaki在CRYPTO 2021上对SHA-2的观察一致。

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
> 在2020年，贝尔纳德（Bernard）和鲁-朗格劳瓦（Roux-Langlois）基于Pellet-Mary、Hanrot和Stehlé提出的PHS算法，引入了扭曲-PHS算法来解决任何数域上理想格子的Approx-Svp问题。他们在度最大为70的分圆域素导体上进行了实验，其中主要的瓶颈是计算一个对数-\(\mathcal {S}\)-单位格子，这需要亚指数时间。
> 
> 我们的主要贡献是将这些实验扩展到度高达210的分圆域中，适用于大多数导体m。基于贝尔纳德和库塞拉（Kučera）关于Stickelberger理想的新结果，我们使用显式生成元构造满秩的对数-\(\mathcal {S}\)-单位子格子，起到逼近完整扭曲-PHS格子的作用。在我们最好的近似区间内，我们的结果显示，扭曲-PHS算法在我们的实验范围内优于Cramer、Ducas和Wesolowski的CDW算法，并有时超过其渐近体积下界。
> 
> 此外，我们使用这些显式Stickelberger生成元，在类数的正部分满足\(h_{m}^{+}\le O(\sqrt{m})\)的轻微限制下，几乎消除了CDW算法中的所有量子步骤。

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
> NTRU问题可以被看作在格中找到一个短的非零向量的实例，承诺该向量中包含一个异常短的向量。此外，所研究的格具有整数环中的数域上秩-2模块的结构。让我们将这个问题称为模块唯一的最短向量问题，简称mod-uSVP。我们提出了两个约简来共同证明NTRU问题不仅是mod-uSVP的特例，而且从计算的角度来看它代表了它。
> 
> 首先，我们将最坏情况的mod-uSVP约简为最坏情况的NTRU。为此，我们依赖于id-SVP的oracle，即在理想格中找到短的非零向量的问题。利用来自Pellet-Mary和Stehlé [ASIACRYPT’21]的最坏情况id-SVP到最坏情况NTRU的约简，这表明最坏情况的NTRU等价于最坏情况的mod-uSVP。
> 
> 其次，我们给出了一个模块唯一的最短向量问题的随机自约简。我们提出了一个分布\(D^{\textrm{uSVP}}\)，覆盖了mod-uSVP实例，通过解决从\(D^{\textrm{uSVP}}\)中随机抽样得到的mod-uSVP问题，在非零概率下可以解决最坏情况的mod-uSVP问题。结合第一个结果，这给出了一个从最坏情况的mod-uSVP到平均情况下的NTRU的约简，其中NTRU实例的分布从\(D^{\textrm{uSVP}}\)继承而来。这种最坏情况到平均情况的约简需要一个id-SVP的oracle。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_24](https://doi.org/10.1007/978-3-031-22969-5_24)
## A Non-heuristic Approach to Time-Space Tradeoffs and Optimizations for BKW.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#a-non-heuristic-approach-to-time-space-tradeoffs-and-optimizations-for-bkw) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#a-non-heuristic-approach-to-time-space-tradeoffs-and-optimizations-for-bkw)**
### 作者
* Hanlin Liu, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, Shanghai Qi Zhi Institute, 701 Yunjin Road, Shanghai, 200232, China
### 摘要
> Blum、Kalai和Wasserman（JACM 2003）提出了第一个解决具有噪声的学习奇偶校验（LPN）问题的次指数算法。特别是，考虑具有恒定噪声和维度n的LPN问题。BKW解决方法具有空间复杂度\(2^{\frac{(1+\epsilon )n}{\log (n)}}\)和时间/样本复杂度\(2^{\frac{(1+\epsilon )n}{\log (n)}}\cdot 2^{\varOmega (n^{\frac{1}{1+\epsilon }})}\)，其中小常数\(\epsilon \rightarrow 0^+\)。
> 
> 我们提出了BKW的一种变体，通过调整Wagner的广义生日问题（Crypto 2002）并将技术适应于c元树结构。总之，我们的算法实现了以下结果：
> 
> 1.（时间-空间权衡）。我们获得了与Esser等人（Crypto 2018）给出的LPN和LWE的相同时间-空间权衡，但没有诉诸任何启发式。对于任意\(2\le c\in \mathbb {N}\)，我们的算法解决LPN问题的时间复杂度为\(2^{\frac{\log (c) (1+\epsilon )n}{\log (n)}}\cdot 2^{\varOmega (n^{\frac{1}{1+\epsilon }})}\)，空间复杂度为\(2^{\frac{\log (c) (1+\epsilon )n}{(c-1)\log (n)}}\)，其中可以使用Grover的量子算法或Dinur等人的解剖技术（Crypto 2012）来进一步加速/优化时间复杂度。
> 
> 2.（时间/样本优化）。我们进一步调整了算法的变体，解决了LPN问题，样本、时间和空间复杂度均保持为\(2^{\frac{(1+\epsilon )n}{\log (n)}}\)，在时间/样本上较原始的BKW和Devadas等人（TCC 2017）的算法节省了\(2^{\varOmega (n^{\frac{1}{1+\epsilon }})}\)的因子，对于\(\epsilon \rightarrow 0^+\)。
> 
> 3. (样本减少）。我们的算法为限定样本量的LPN问题提供了Lyubashevsky的BKW变体（RANDOM 2005）的替代方案。特别是，对于任意常数\(\epsilon >0\)，对于给定的\(Q=n^{1+\epsilon }\)（或者\(Q=2^{n^{\epsilon }}\)）个样本，与Lyubashevsky的算法相比，我们的算法在运行时间上节省了一个因子\(2^{\varOmega (n)/\log (n)^{1-\kappa }}\)（或者\(2^{\varOmega (n^{\kappa })}\)），而大致消耗相同空间。
> 
> 特别地，时间/样本优化受益于对相关候选者之间误差分布的仔细分析，这在之前的严谨方法（如Minder和Sinclair的分析（J.Cryptology 2012）或Devadas等人（TCC 2017）的分析）中没有研究过。

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
> 椭圆曲线隐藏数问题（EC-HNP）最早由Boneh、Halevi和Howgrave-Graham在Asiacrypt 2001上引入。为了严格评估椭圆曲线Diffie-Hellman密钥交换（ECDH）的比特安全性，我们在PKC 2017上介绍了EC-HNP的Diffie-Hellman变体，其被视为Hidden Number Problem（HNP）的椭圆曲线类比。这个变体还可以用于侧信道攻击情况下ECDH密钥交换的实际密码分析。
> 
> 在本文中，我们重新审视了解Diffie-Hellman EC-HNP变体中涉及的模多元多项式的Coppersmith方法，并证明了对于任意给定的正整数d、足够大的素数p和定义在素域\(\mathbb {F}_p\)上的固定椭圆曲线，如果存在一个能输出ECDH密钥的x坐标的最（次）重要位约为\(\frac{1}{d+1}\)的预言机，那么我们可以提出一个启发式算法在多项式时间内计算出所有的比特位，复杂度为\(\log _2 p\)。当\(d>1\)时，启发式结果\(\frac{1}{d+1}\)明显优于严格界限\(\frac{5}{6}\)和启发界限\(\frac{1}{2}\)。由于Coppersmith方法中涉及启发，我们无法得到椭圆曲线Diffie-Hellman密钥交换在固定曲线上的比特安全性。然而，我们通过实验证实了启发式算法在NIST曲线上小维度格子中的有效性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_26](https://doi.org/10.1007/978-3-031-22969-5_26)
