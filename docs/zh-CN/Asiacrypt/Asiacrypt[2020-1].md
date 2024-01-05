# Asiacrypt[2020-1]
## Finding Collisions in a Quantum World: Quantum Black-Box Separation of Collision-Resistance and One-Wayness.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#finding-collisions-in-a-quantum-world-quantum-black-box-separation-of-collision-resistance-and-one-wayness) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#finding-collisions-in-a-quantum-world-quantum-black-box-separation-of-collision-resistance-and-one-wayness)**
### 作者
* Akinori Hosoyamada, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Akinori Hosoyamada, Nagoya University, Nagoya, Japan
### 摘要
> 自从Impagliazzo和Rudich（STOC 1989）的杰出工作以来，已经确立了一些黑盒不可能性结果。然而，这些工作只排除了在密码学基元之间的经典黑盒约简。因此，通过使用量子约简可能克服这些不可能性结果。为了排除这种可能性，我们必须将这些不可能性结果扩展到量子设定中。在本文中，我们研究了量子设定中的黑盒不可能性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_1](https://doi.org/10.1007/978-3-030-64837-4_1)
## New Results on Gimli: Full-Permutation Distinguishers and Improved Collisions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#new-results-on-gimli-full-permutation-distinguishers-and-improved-collisions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#new-results-on-gimli-full-permutation-distinguishers-and-improved-collisions)**
### 作者
* Antonio Flórez Gutiérrez, Inria, Paris, France
* Gaëtan Leurent, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
* Léo Perrin, Inria, Paris, France
* André Schrottenloher, Inria, Paris, France
* Ferdinand Sibleyras, Inria, Paris, France
### 摘要
> “Gimli”是一种加密基元（哈希函数和AEAD方案），已被选为NIST竞赛第二轮标准化新轻量级设计的候选项。候选“Gimli”基于置换“Gimli”，该置换在CHES 2017上被提出。本文研究了基于此置换的构建及其安全性。我们利用“Gimli”的缓慢扩散和内部对称性来构建一个复杂度为$2^{64}$的完整置换区分器。我们还提供一个实用的区分器，可实现23个“Gimli”的24个轮次。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_2](https://doi.org/10.1007/978-3-030-64837-4_2)
## SQISign: Compact Post-quantum Signatures from Quaternions and Isogenies.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#sqisign-compact-post-quantum-signatures-from-quaternions-and-isogenies) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#sqisign-compact-post-quantum-signatures-from-quaternions-and-isogenies)**
### 作者
* Luca De Feo, IBM Research, Zürich, Switzerland
* David Kohel, Aix Marseille University, CNRS, Centrale Marseille, I2M, Marseille, France
* Antonin Leroux, DGA, Paris, France
* Christophe Petit, University of Birmingham, Birmingham, UK
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, UMR 5251, F-33400, Talence, France
* Benjamin Wesolowski, INRIA, IMB, UMR 5251, F-33400, Talence, France
* Luca De Feo, LIX, CNRS, Ecole Polytechnique, Institut Polytechnique de Paris, Paris, France
* Antonin Leroux, LIX, CNRS, Ecole Polytechnique, Institut Polytechnique de Paris, Paris, France
* Luca De Feo, INRIA, Rocquencourt, France
* Antonin Leroux, INRIA, Rocquencourt, France
* Christophe Petit, Université libre de Bruxelles, Brussels, Belgium
### 摘要
> 我们引入了一种新的签名方案SQISign（用于短四元数和同构签名），它利用超奇异椭圆曲线的同构图。该签名方案是从一种新型的一轮高保真度交互式认证协议中衍生出来的。针对后量子NIST-1级安全性，我们的实现结果是204字节的签名、16字节的密钥和64字节的公钥。特别是，签名和公钥的大小相加比所有其他后量子签名方案小一个数量级。在现代工作站上，我们在C语言中的实现需要0.6秒进行密钥生成，2.5秒进行签名，以及50毫秒进行验证。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_3](https://doi.org/10.1007/978-3-030-64837-4_3)
## Public-Key Generation with Verifiable Randomness.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#public-key-generation-with-verifiable-randomness) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#public-key-generation-with-verifiable-randomness)**
### 作者
* Olivier Blazy, Universite de Limoges, Limoges, France
* Patrick Towa, IBM Research – Zurich, Rüschlikon, Switzerland
* Patrick Towa, DIENS, École Normale Supérieure, CNRS, PSL University, Paris, France
* Damien Vergnaud, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
* Damien Vergnaud, Institut Universitaire de France, Paris, France
### 摘要
> 我们重新审视了一个问题，即如何证明用户算法在生成密码密钥时选择并正确使用了真正的随机种子。Juels和Guajardo在2002年提出了一种初步方法来验证RSA秘密密钥。我们提出了一个新的安全模型和通用工具，以有效地证明私钥是根据预定的过程随机生成的，同时不透露任何关于私钥的其他信息。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_4](https://doi.org/10.1007/978-3-030-64837-4_4)
## Simulation-Sound Arguments for LWE and Applications to KDM-CCA2 Security.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#simulation-sound-arguments-for-lwe-and-applications-to-kdm-cca2-security) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#simulation-sound-arguments-for-lwe-and-applications-to-kdm-cca2-security)**
### 作者
* Benoît Libert, CNRS, Laboratoire LIP, Lyon, France
* Benoît Libert, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Alain Passelègue, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Radu Titiu, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Khoa Nguyen, Nanyang Technological University, SPMS, Singapore, Singapore
* Alain Passelègue, Inria, Lyon, France
* Radu Titiu, Bitdefender, Bucharest, Romania
### 摘要
> Naor-Yung范式是一种著名的技术，它通过满足模拟声音性质的非交互式零知识证明构造了IND-CCA2安全的加密方案。直到最近，仅依赖于学习与误差（LWE）假设而不依赖于随机神谕来实例化此方法是一个未解决的问题。虽然Canetti等人（STOC'19）和Peikert-Shiehian（Crypto’19）的最新结果通过在标准模型下应用Fiat-Shamir变换解决了该问题，但所得到的构造非常低效，因为它们通过将问题规约到NP完全问题来实现。在本文中，我们提出了一种直接的非通用方法，在随机神谕模型之外的LWE假设下，实例化Naor-Yung。具体而言，我们直接构造了一个无界模拟声音NIZK论证系统，对于精心选择的参数，它可以在Regev的密码系统中表示在不同密钥下加密的明文的相等性。我们还提供了我们论证的变种，可以提供紧密的安全性。作为应用，我们获得了一种基于LWE的公钥加密方案，可以在标准模型中证明具有密钥依赖消息安全性，即使在选择密文攻击下也是如此。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_5](https://doi.org/10.1007/978-3-030-64837-4_5)
## CCA-Secure (Puncturable) KEMs from Encryption with Non-Negligible Decryption Errors.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#cca-secure-puncturable-kems-from-encryption-with-non-negligible-decryption-errors) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#cca-secure-puncturable-kems-from-encryption-with-non-negligible-decryption-errors)**
### 作者
* Valerio Cini, AIT Austrian Institute of Technology, Vienna, Austria
* Sebastian Ramacher, AIT Austrian Institute of Technology, Vienna, Austria
* Daniel Slamanig, AIT Austrian Institute of Technology, Vienna, Austria
* Christoph Striecks, AIT Austrian Institute of Technology, Vienna, Austria
### 摘要
> 公钥加密（PKE）方案或密钥封装机制（KEMs）是实现安全通信协议的基本加密构建模块。已知有几种转换方法可以将弱安全方案通用地转换为具有较强安全性（即IND-CCA安全性）的方案。尽管这些转换大多要求弱安全方案提供完全正确性，但Hofheinz、Hövelmanns和Kiltz（HHK）（TCC 2017）最近发现在（量子）随机预言模型（QROM）中，Fujisaki-Okamoto（FO）变换的变体可以与具有可忽略正确性误差的方案配合工作。NIST后量子竞赛（PQC）中的许多新方案使用了这些转换的变体。其中一些具有CPA安全性版本的方案甚至具有非可忽略的正确性误差，因此无法应用HHK的技术。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_6](https://doi.org/10.1007/978-3-030-64837-4_6)
## Possibility and Impossibility Results for Receiver Selective Opening Secure PKE in the Multi-challenge Setting.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#possibility-and-impossibility-results-for-receiver-selective-opening-secure-pke-in-the-multi-challenge-setting) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#possibility-and-impossibility-results-for-receiver-selective-opening-secure-pke-in-the-multi-challenge-setting)**
### 作者
* Rupeng Yang, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Man Ho Au, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Junzuo Lai, College of Information Science and Technology, Jinan University, Guangzhou, China
* Zhengan Huang, Peng Cheng Laboratory, Shenzhen, China
* Qiuliang Xu, School of Software, Shandong University, Jinan, China
* Willy Susilo, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong NSW, Australia
### 摘要
> 公钥加密（PKE）方案通常被部署在具有众多用户的开放系统中。在实践中，常常存在一些受损用户的情况。如果一个PKE方案在对手腐败一些接收者并获取其私钥后仍能保护传输给未受损接收者的信息，则称该方案具有接收者选择性开放（RSO）安全性。这通常通过要求存在一个模拟器来定义，该模拟器只能根据已打开的信息模拟对手的视图。现有研究在单挑战场景下构建了具有RSO安全性的PKE方案，其中对手每个公钥只能获得一个挑战密文。然而，在实践中，更希望拥有在多挑战场景下具有RSO安全性的PKE方案，其中公钥可以用于加密多个消息。本文探讨了实现具有接收者选择性开放安全性的PKE方案在多挑战场景下的可能性。我们的贡献有三个方面。首先，我们证明了在单挑战场景下具有RSO安全性的PKE方案在多挑战场景下不一定具有RSO安全性。然后，我们展示了如果在每个公钥下的挑战密文数量是先验无限的，那么实现PKE方案的RSO安全性是不可能的。特别地，我们证明了如果PKE方案的秘密密钥含有少于k位，则在k挑战场景（即，对手每个公钥可以获取k个挑战密文）中无法实现RSO安全。在积极的一面，我们给出了一个具体的PKE方案构造，在k挑战场景下具有RSO安全性，并且密钥长度与k的比值趋近于下界1。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_7](https://doi.org/10.1007/978-3-030-64837-4_7)
## Security Reductions for White-Box Key-Storage in Mobile Payments.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#security-reductions-for-white-box-key-storage-in-mobile-payments) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#security-reductions-for-white-box-key-storage-in-mobile-payments)**
### 作者
* Estuardo Alpirez Bock, Aalto University, Helsinki, Finland
* Chris Brzuska, Aalto University, Helsinki, Finland
* Marc Fischlin, Technische Universität Darmstadt, Darmstadt, Germany
* Christian Janson, Technische Universität Darmstadt, Darmstadt, Germany
* Wil Michiels, Technische Universiteit Eindhoven, Eindhoven, The Netherlands
* Wil Michiels, NXP Semiconductors, Eindhoven, The Netherlands
### 摘要
> 白盒密码学的目标是在对手控制的环境中执行加密实现时仍能提供安全性。如今，白盒实现已出现在商业产品中，例如获得Mastercard认证的移动支付应用程序。有趣的是，在那里，白盒密码学被奉为安全存储支付令牌的工具，而且重要的是，白盒化的存储功能被绑定到硬件功能，以防止代码提取攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_8](https://doi.org/10.1007/978-3-030-64837-4_8)
## Circular Security Is Complete for KDM Security.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#circular-security-is-complete-for-kdm-security) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#circular-security-is-complete-for-kdm-security)**
### 作者
* Fuyuki Kitagawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Takahiro Matsuda, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### 摘要
> 循环安全是密钥依赖的消息（KDM）安全的最基本形式，允许我们仅对秘密密钥位进行安全加密。在这项工作中，我们表明循环安全在 KDM 安全方面是完整的，即满足该安全概念的加密方案可以转化为满足预先有界电路可计算的所有函数（有界-KDM 安全）的加密方案。此结果适用于任意数量的密钥以及秘密密钥/公开密钥和 CPA/CCA 设置。此前，Applebaum（EUROCRYPT 2011）已经证明了这样的完备性结果，针对投影函数的 KDM 安全 （投影-KDM 安全），可以安全地加密秘密密钥位的复制和否定。除了增强 KDM 安全的力量，我们的转换实际上可以从一个针对 CPA 攻击满足循环安全的加密方案开始，并得到一个针对 CCA 攻击满足有界-KDM 安全的方案。这个结果改进了 Kitagawa 和 Matsuda（TCC 2019）关于 KDM 安全公钥加密方案的 CPA-CCA 转换的最新结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_9](https://doi.org/10.1007/978-3-030-64837-4_9)
## Scalable Ciphertext Compression Techniques for Post-quantum KEMs and Their Applications.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#scalable-ciphertext-compression-techniques-for-post-quantum-kems-and-their-applications) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#scalable-ciphertext-compression-techniques-for-post-quantum-kems-and-their-applications)**
### 作者
* Shuichi Katsumata, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Kris Kwiatkowski, PQShield, Oxford, UK
* Thomas Prest, PQShield, Oxford, UK
* Federico Pintore, Mathematical Institute, University of Oxford, Oxford, UK
### 摘要
> 一种多接收者密钥封装机制（即\(\mathsf{m}\mathsf{KEM}\)）提供了一种可扩展的解决方案，用于安全地与大型群体进行通信，并且与逐个成员通信的简单解决方案相比，在带宽和计算成本上都能节省。所有先前关于\(\mathsf{m}\mathsf{KEM}\)的研究仅限于经典假设，尽管已知一些通用构造，但它们都需要具有大多数后量子方案所不具备的特定属性。在本研究中，我们首先提供了一种简单高效的\(\mathsf{m}\mathsf{KEM}\)通用构造，可以从多种假设中实例化，包括后量子假设。然后，我们使用8个后量子\(\mathsf{KEM}\)（即格和同源基于NIST的候选），以及CSIDH，从实际层面对这些\(\mathsf{m}\mathsf{KEM}\)实例进行研究，并且相对于简单解决方案，我们的\(\mathsf{m}\mathsf{KEM}\)在带宽方面至少节省了一个数量级，并且加密时间缩短了1.92至35倍。此外，我们展示了通过将\(\mathsf{m}\mathsf{KEM}\)与MLS使用的TreeKEM协议相结合，可以实现显著的带宽节省。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_10](https://doi.org/10.1007/978-3-030-64837-4_10)
## Post-Quantum Verification of Fujisaki-Okamoto.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#post-quantum-verification-of-fujisaki-okamoto) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#post-quantum-verification-of-fujisaki-okamoto)**
### 作者
* Dominique Unruh, University of Tartu, Tartu, Estonia
### 摘要
> 我们提出了一个计算机验证的正式化方法，用于验证藤崎-冈本变换的后量子安全证明（由Hövelmanns、Kiltz、Schäge和Unruh在PKC 2020中进行分析）。
> 
> 这个正式化过程是在量子关系Hoare逻辑中进行的，并在qrhl工具（Unruh，POPL 2019）中进行了检查。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_11](https://doi.org/10.1007/978-3-030-64837-4_11)
## A New Decryption Failure Attack Against HQC.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#a-new-decryption-failure-attack-against-hqc) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#a-new-decryption-failure-attack-against-hqc)**
### 作者
* Qian Guo, Department of Electrical and Information Technology, Lund University, P.O. Box 118, 221 00, Lund, Sweden
* Thomas Johansson, Department of Electrical and Information Technology, Lund University, P.O. Box 118, 221 00, Lund, Sweden
* Qian Guo, Department of Informatics, University of Bergen, P.O. Box 7803, 5020, Bergen, Norway
### 摘要
> HQC是NIST的后量子密码学项目中争取标准化的一种IND-CCA2 KEM，已经进入第二轮。它是一种基于码的公钥加密方案，具有给定的参数集，涵盖NIST安全强度1、3和5，分别对应经典安全性的128、192和256位。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_12](https://doi.org/10.1007/978-3-030-64837-4_12)
## A Bit-Vector Differential Model for the Modular Addition by a Constant.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#a-bit-vector-differential-model-for-the-modular-addition-by-a-constant) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#a-bit-vector-differential-model-for-the-modular-addition-by-a-constant)**
### 作者
* Seyyed Arash Azimi, Department of Electrical Engineering, Sharif University of Technology, Tehran, Iran
* Mohammad Reza Aref, Department of Electrical Engineering, Sharif University of Technology, Tehran, Iran
* Adrián Ranea, imec-COSIC, KU Leuven, Leuven, Belgium
* Vincent Rijmen, imec-COSIC, KU Leuven, Leuven, Belgium
* Mahmoud Salmasizadeh, Electronic Research Institute, Sharif University of Technology, Tehran, Iran
* Javad Mohajeri, Electronic Research Institute, Sharif University of Technology, Tehran, Iran
* Vincent Rijmen, Department of Informatics, UiB, Bergen, Norway
### 摘要
> ARX算法是一类对称密钥算法，通过加法、旋转和异或构造，能在低端微控制器中实现最佳的软件性能。为了评估ARX密码对差分密码分析及其变体的抵抗力，最近的自动化方法采用约束满足求解器（如SMT求解器）来搜索最优特性。将这种搜索形式表述为约束满足问题的主要困难在于获得非线性操作的差分模型，即描述密码中每个非线性操作的差分概率的约束条件。虽然对于具有两个可变输入的模运算找到了高效的位向量差分模型，但至今尚未提出具有常数的模运算的差分模型，这样就无法使用自动化方法对包含该操作的ARX密码进行评估。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_13](https://doi.org/10.1007/978-3-030-64837-4_13)
## Mind the Propagation of States - New Automatic Search Tool for Impossible Differentials and Impossible Polytopic Transitions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#mind-the-propagation-of-states-new-automatic-search-tool-for-impossible-differentials-and-impossible-polytopic-transitions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#mind-the-propagation-of-states-new-automatic-search-tool-for-impossible-differentials-and-impossible-polytopic-transitions)**
### 作者
* Xichao Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yongqiang Li, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Shizhu Tian, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Mingsheng Wang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Xichao Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yongqiang Li, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Shizhu Tian, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Mingsheng Wang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Lin Jiao, State Key Laboratory of Cryptology, Beijing, China
### 摘要
> 不可能差分密码分析和不可能多面体密码分析是估计分组密码安全性的最有效方法。然而，之前自动搜索它们的区分器（即不可能差分和不可能多面体过渡）的方法，既未考虑在单密钥环境下密钥调度的影响，也未考虑大型S盒的差分特性，并且不适用于具有可变旋转的分组密码。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_14](https://doi.org/10.1007/978-3-030-64837-4_14)
## An Algebraic Formulation of the Division Property: Revisiting Degree Evaluations, Cube Attacks, and Key-Independent Sums.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#an-algebraic-formulation-of-the-division-property-revisiting-degree-evaluations-cube-attacks-and-key-independent-sums) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#an-algebraic-formulation-of-the-division-property-revisiting-degree-evaluations-cube-attacks-and-key-independent-sums)**
### 作者
* Kai Hu, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Siwei Sun, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Qingju Wang, SnT, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Kai Hu, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
* Siwei Sun, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 自2015年被提出作为积分属性的泛化以来，除法属性已经发展成为一种探测布尔函数结构的强大工具，该布尔函数的代数标准形式不可用。我们从纯代数的角度捕捉检测除法属性的最基本要素，提出了一种名为单项式预测的技术，可以通过计算向量布尔函数\(\textit{\textbf{f}}\)的坐标函数乘积中所谓的单项式轨迹的数量，来确定单项式的存在或缺失。在单项式预测的框架下，我们正式证明了文献中大多数检测除法属性的算法没有误报但可能会错过。我们还建立了单项式预测与EUROCRYPT 2020中介绍的三子集基于位的除法属性（无未知子集）之间的等价关系，并且证明了这两种技术的完全准确性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_15](https://doi.org/10.1007/978-3-030-64837-4_15)
## An Algebraic Attack on Ciphers with Low-Degree Round Functions: Application to Full MiMC.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#an-algebraic-attack-on-ciphers-with-low-degree-round-functions-application-to-full-mimc) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#an-algebraic-attack-on-ciphers-with-low-degree-round-functions-application-to-full-mimc)**
### 作者
* Maria Eichlseder, IAIK, Graz University of Technology, Graz, Austria
* Lorenzo Grassi, IAIK, Graz University of Technology, Graz, Austria
* Reinhard Lüftenegger, IAIK, Graz University of Technology, Graz, Austria
* Christian Rechberger, IAIK, Graz University of Technology, Graz, Austria
* Markus Schofnegger, IAIK, Graz University of Technology, Graz, Austria
* Lorenzo Grassi, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Morten Øygarden, Simula UiB, Bergen, Norway
* Qingju Wang, SnT, University of Luxembourg, Luxembourg City, Luxembourg
### 摘要
> 代数简单的伪随机函数（PRFs）、密码或加密哈希函数越来越受欢迎，例如由于它们在多方计算（MPC）和新的证明系统（SNARKs、STARKs等）中具有吸引人的特性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_16](https://doi.org/10.1007/978-3-030-64837-4_16)
## Improvements of Algebraic Attacks for Solving the Rank Decoding and MinRank Problems.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#improvements-of-algebraic-attacks-for-solving-the-rank-decoding-and-minrank-problems) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#improvements-of-algebraic-attacks-for-solving-the-rank-decoding-and-minrank-problems)**
### 作者
* Maxime Bros, Univ. Limoges, CNRS, XLIM, UMR 7252, 87000, Limoges, France
* Philippe Gaborit, Univ. Limoges, CNRS, XLIM, UMR 7252, 87000, Limoges, France
* Ray Perlner, National Institute of Standards and Technology, Gaithersburg, USA
* Daniel Smith-Tone, National Institute of Standards and Technology, Gaithersburg, USA
* Daniel Smith-Tone, University of Louisville, Louisville, USA
* Magali Bardet, Inria, 2 rue Simone Iff, 75012, Paris, France
* Jean-Pierre Tillich, Inria, 2 rue Simone Iff, 75012, Paris, France
* Magali Bardet, LITIS, University of Rouen Normandie, Mont-Saint-Aignan, France
* Daniel Cabarcas, Universidad Nacional de Colombia Sede Medellín, Medellín, Colombia
* Javier Verbel, Universidad Nacional de Colombia Sede Medellín, Medellín, Colombia
### 摘要
> 在这篇论文中，我们展示了如何显著改进用于解决MinRank问题的代数技术。MinRank问题在多变量和秩度度量码的基于密码学中普遍存在。对于后者中出现的结构化MinRank实例，我们借鉴了最近的突破性研究[11]，该研究表明代数攻击优于此前被视为现有技术的组合攻击。通过对这种方法进行轻微修改，我们完全避免了某些参数的格罗布纳基计算，并且只需求解线性系统。这不仅大大提高了复杂性，还有力地说明了为什么代数技术在这种情况下有效。当用于第二轮NIST-PQC候选方案ROLLO-I-128/192/256时，我们的新攻击的比特复杂度分别为71、87和151，相对于[11]中的117、144和197而言要低。这些线性系统源于与代数建模相关的某个矩阵的最大子式的零空间。我们还采用类似的方法改进了常规MinRank问题的代数求解器。当应用于第二轮NIST-PQC候选方案GeMSS和Rainbow时，我们的攻击复杂性非常接近甚至略优于目前已知的最佳攻击。需要注意的是，这些后续攻击并没有依赖MinRank技术，因为MinRank方法曾经得到的复杂性远远低于经典安全级别。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_17](https://doi.org/10.1007/978-3-030-64837-4_17)
## Lower Bounds on the Degree of Block Ciphers.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#lower-bounds-on-the-degree-of-block-ciphers) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#lower-bounds-on-the-degree-of-block-ciphers)**
### 作者
* Phil Hebborn, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Baptiste Lambin, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Yosuke Todo, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Yosuke Todo, NTT Secure Platform Laboratories, Tokyo, Japan
### 摘要
> 作为一名研究员，现在您将收到一篇研究论文的摘要。请将其翻译成简体中文。
> 
> 迄今为止，只有一种估计分组密码代数度上限的方法被广泛知晓，但这对设计者来说并不有用，无法保证安全性。本文提供了现代分组密码代数度的有意义的下界。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_18](https://doi.org/10.1007/978-3-030-64837-4_18)
## Towards Closing the Security Gap of Tweak-aNd-Tweak (TNT).
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#towards-closing-the-security-gap-of-tweak-and-tweak-tnt) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#towards-closing-the-security-gap-of-tweak-and-tweak-tnt)**
### 作者
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Jian Guo, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Eik List, Bauhaus-Universität Weimar, Weimar, Germany
* Ling Song, Jinan University, Guangzhou, China
* Ling Song, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
### 摘要
> 调整性区块密码（TBCs）已被确认为许多经典区块密码应用的有价值替代品。虽然在过去的几年中已经提出了几种专用的TBCs，但从经典区块密码构建TBC的通用构造仍然非常有用，例如，为了重用现有的实现。然而，大多数通用构造需要额外调用区块密码或通用哈希函数来处理调整参数，这限制了它们的效率。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_19](https://doi.org/10.1007/978-3-030-64837-4_19)
## Minimizing the Two-Round Tweakable Even-Mansour Cipher.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#minimizing-the-two-round-tweakable-even-mansour-cipher) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#minimizing-the-two-round-tweakable-even-mansour-cipher)**
### 作者
* Avijit Dutta, Institute for Advancing Intelligence, TCG-CREST, Kolkata, India
### 摘要
> 在CRYPTO 2015年，Cogliati等人提出了一种由单个n位公开置换\(\pi\)和均匀且几乎异或通用哈希函数H构成的一轮可微调的Even-Mansour（1-TEM）密码，表示为\((k, t, x) \mapsto \textsf {H}_k(t) \oplus \pi (\textsf {H}_k(t) \oplus x)\)，其中t是调整参数，x是n位消息。作者表明它的两轮扩展，我们称之为2-TEM，通过串联两个独立的构造实例，可以提供2n/3位的安全性，并且r轮级联可以提供\(rn/r+2\)-bit的安全性。在ASIACRYPT 2015年，Cogliati和Seurin证明了由四个独立的n位置换\(\pi _1, \pi _2, \pi _3, \pi _4\)和两个独立的n位密钥\(k_1, k_2\)构成的四轮可微调的Even-Mansour密码，我们称之为4-TEM，定义为

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_20](https://doi.org/10.1007/978-3-030-64837-4_20)
## Beyond Birthday Bound Secure Fresh Rekeying: Application to Authenticated Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#beyond-birthday-bound-secure-fresh-rekeying-application-to-authenticated-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#beyond-birthday-bound-secure-fresh-rekeying-application-to-authenticated-encryption)**
### 作者
* Bart Mennink, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### 摘要
> 新鉴密是一种常见的方法，用于保护原语或模式免受侧信道攻击的影响：一个易于保护但密码学上不太复杂的函数从主密钥生成子密钥，并将该子密钥用于单个或少量消息的块加密。这是一种高效的实现侧信道保护的方式，但当前解决方案在密码算法的分组大小上仅能达到生日憎恨的安全性，因此将其安全性减半（除非采用更为复杂的原语）。我们提出了广义并行块密码新鉴密的解决方案，首次在块大小 n 上实现了超越生日憎恨的安全性。第一个解决方案在子密钥生成之外，还涉及一个乘法和核心块密码调用，并实现了 \(2^{2n/3}\) 的安全性。第二个解决方案进行了两次块密码调用，实现了最佳的 \(2^n\) 安全性。我们的第三个解决方案使用稍大的子密钥生成函数，但不需要对核心加密进行任何适应性调整，并且也达到了最佳安全性。该结构无缝地推广到基于排列的新鉴密。我们方案的核心观察是新鉴密和通用可整入调整块密码设计这两个问题是密切相关的，我们可以借鉴前者中先进成果的经验教训，以改善对后者的理解和发展。随后，我们以构造方式使用这些新鉴密方案，设计了三种实现超越生日憎恨安全性且易于抵御侧信道攻击的认证加密模式。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_21](https://doi.org/10.1007/978-3-030-64837-4_21)
## Tight Security Analysis of 3-Round Key-Alternating Cipher with a Single Permutation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#tight-security-analysis-of-3-round-key-alternating-cipher-with-a-single-permutation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#tight-security-analysis-of-3-round-key-alternating-cipher-with-a-single-permutation)**
### 作者
* Yusai Wu, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Liqing Yu, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Zhenfu Cao, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Xiaolei Dong, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Zhenfu Cao, Cyberspace Security Research Center, Peng Cheng Laboratory, Shenzhen, China
* Zhenfu Cao, Shanghai Institute of Intelligent Science and Technology, Tongji University, Shanghai, China
### 摘要
> KAC（密钥交替密码）结构的安全界限已经得到了广泛研究，其中轮置换相互独立。然后一个自然的问题是，在KAC结构中使用更少的置换时，安全界限会如何改变。在CRYPTO 2014年，陈等人证明了具有单个置换的2轮KAC（2KACSP）与经典的2轮KAC具有相同的安全级别。但是，我们对使用超过2轮的不完全独立KAC结构的安全界限了解甚少。本文将展示类似的结果也适用于3轮情况。更具体地说，我们证明了具有单个置换的3轮KAC（3KACSP）在最多\(\varTheta (2^{\frac{3n}{4}})\)次查询下是安全的，这也限制了3轮KAC的安全性。为避免陈等人工作中使用的繁琐图形表示，引入了一种新的表示方法来描述底层组合问题。由此受益，我们可以以模块化方式处理纠结的依赖关系，并展示了研究rKACSP安全性的可行方法。从技术上讲，我们抽象出一类问题，捕捉rKACSP结构固有的随机性，并提出了处理此类问题的高级框架。此外，我们的证明技术显示了一些证据表明对于任何r，rKACSP在随机置换模型中具有与经典r轮KAC相同的安全级别。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_22](https://doi.org/10.1007/978-3-030-64837-4_22)
## Improved Security Analysis for Nonce-Based Enhanced Hash-then-Mask MACs.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#improved-security-analysis-for-nonce-based-enhanced-hash-then-mask-macs) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#improved-security-analysis-for-nonce-based-enhanced-hash-then-mask-macs)**
### 作者
* Wonseok Choi, KAIST, Daejeon, Korea
* Byeonghak Lee, KAIST, Daejeon, Korea
* Yeongmin Lee, KAIST, Daejeon, Korea
* Jooyoung Lee, KAIST, Daejeon, Korea
### 摘要
> 在这篇论文中，我们证明了基于nonce的增强散列然后掩蔽消息认证码（\(\mathsf {nEHtM}\)）在高达 \(2^{\frac{3n}{4}}\) 的MAC查询和 \(2^n\) 的验证查询（忽略对数因子）下是安全的，只要故障查询 \(\mu \) 低于 \(2^\frac{3n}{8}\)，显著改进了Dutta等人提出的之前的界限。即使当 \(\mu \) 超过 \(2^{\frac{3n}{8}}\)，\(\mathsf {nEHtM}\) 仍然能够优雅地降低安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_23](https://doi.org/10.1007/978-3-030-64837-4_23)
## On the Adaptive Security of MACs and PRFs.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#on-the-adaptive-security-of-macs-and-prfs) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#on-the-adaptive-security-of-macs-and-prfs)**
### 作者
* Andrew Morgan, Cornell University, Ithaca, USA
* Elaine Shi, Cornell University, Ithaca, USA
* Rafael Pass, Cornell Tech, New York City, USA
### 摘要
> 我们考虑了两种最常用的密码学基元——消息认证码（MAC）和伪随机函数（PRF）在适应性损坏的多用户环境中的安全性。虽然众所周知，任何安全的MAC或PRF在适应性损坏下也是多用户安全的，但微不足道的缩减会导致与用户数量成线性的安全损失。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_24](https://doi.org/10.1007/978-3-030-64837-4_24)
## How to Build Optimally Secure PRFs Using Block Ciphers.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#how-to-build-optimally-secure-prfs-using-block-ciphers) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#how-to-build-optimally-secure-prfs-using-block-ciphers)**
### 作者
* Benoît Cogliati, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Ashwin Jha, Indian Statistical Institute, Kolkata, India
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
### 摘要
> 在EUROCRYPT'96中，Aiello和Venkatesan提出了两个2n位到2n位伪随机函数（PRFs）的候选方案，称为Benes和改进的Benes（mBenes），这是基于n位到n位PRFs的。虽然已经知道Benes在\( 2^n \)次查询（Patarin，AFRICACRYPT ’08）下是安全的，但mBenes的安全性只在\( 2^{n(1-\epsilon )} \)次查询（其中\( \epsilon > 0 \)）的情况下得到了Patarin和Montreuil在ICISC ’05的证明。在这项工作中，我们展示了将一个2n位哈希函数与mBenes的组合作为一个安全的可变输入长度（VIL）PRF，对于\( 2^{n-2} \)次查询（在给定适当的哈希函数边界的情况下）。我们通过块密码作为底层原语扩展了我们的分析，并获得了使用块密码的两个最优安全的VIL PRFs。其中第一个候选方案需要6次调用块密码。第二个候选方案只需要4次调用块密码，但这里的证明是基于Patarin的镜像理论的。此外，我们使用类似于PMAC+/LightMAC+的哈希函数来实例化哈希函数，从而获得六个具有最优安全性的确定性消息认证码的候选方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_25](https://doi.org/10.1007/978-3-030-64837-4_25)
## SILVER - Statistical Independence and Leakage Verification.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#silver-statistical-independence-and-leakage-verification) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#silver-statistical-independence-and-leakage-verification)**
### 作者
* David Knichel, Ruhr University Bochum, Horst Görtz Institute for IT Security, Bochum, Germany
* Pascal Sasdrich, Ruhr University Bochum, Horst Görtz Institute for IT Security, Bochum, Germany
* Amir Moradi, Ruhr University Bochum, Horst Görtz Institute for IT Security, Bochum, Germany
### 摘要
> 尽管在物理安全领域进行了大量对策开发研究，但在存在物理对手的情况下安全实现加密功能仍然是一个挑战。在多种保护方案中，掩码技术吸引了学术界和工业界研究的最大关注，因为其理论基础可以提供证明或建模所实现的安全级别。然而，掩码方案的实施过程通常是手动、复杂且容易出错的，这促使我们对形式化验证工具的需求，以允许设计师和工程师在制造之前分析和验证设计。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_26](https://doi.org/10.1007/978-3-030-64837-4_26)
## Cryptanalysis of Masked Ciphers: A Not So Random Idea.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#cryptanalysis-of-masked-ciphers-a-not-so-random-idea) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#cryptanalysis-of-masked-ciphers-a-not-so-random-idea)**
### 作者
* Tim Beyne, imec-COSIC, ESAT, KU Leuven, Leuven, Belgium
* Siemen Dhooghe, imec-COSIC, ESAT, KU Leuven, Leuven, Belgium
* Zhenda Zhang, imec-COSIC, ESAT, KU Leuven, Leuven, Belgium
### 摘要
> 发展了一种对硬件导向掩码密码进行二阶次侧信道攻击安全分析的新方法。通过借鉴对称密钥密码分析技术，在一种变种的勘测模型中得出了具体的安全界限，该模型允许对手进行有界但可能非常大量的测量。具体而言，形式上证明了如何将有界查询变体的强健勘测安全性降低为掩码密码的线性密码分析。因此，可以在不依赖新鲜随机性的情况下克服高阶门限实现的组合问题。从实际角度来看，前述方法使得将许多第一阶门限实现的理想属性（例如其低随机数使用）转移到第二阶设置成为可能。例如，直接应用于分组密码LED，结果是使用少于700个随机比特进行掩码，包括初始共享。此外，本文介绍的密码分析方法提供了对掩码密码设计的额外洞察，并允许在安全性和性能之间进行可量化的权衡。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_27](https://doi.org/10.1007/978-3-030-64837-4_27)
## Packed Multiplication: How to Amortize the Cost of Side-Channel Masking?
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#packed-multiplication-how-to-amortize-the-cost-of-side-channel-masking) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#packed-multiplication-how-to-amortize-the-cost-of-side-channel-masking)**
### 作者
* Weijia Wang, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Weijia Wang, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, 266237, China
* Chun Guo, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, 266237, China
* Weijia Wang, State Key Laboratory of Information Security (Institute of Information Engineering), Chinese Academy of Sciences, Beijing, 100093, China
* Chun Guo, State Key Laboratory of Information Security (Institute of Information Engineering), Chinese Academy of Sciences, Beijing, 100093, China
* François-Xavier Standaert, Institute of Information and Communication Technologies, Electronics and Applied Mathematics (ICTEAM), UCLouvain, 1348, Louvain-la-Neuve, Belgium
* Gaëtan Cassiers, Institute of Information and Communication Technologies, Electronics and Applied Mathematics (ICTEAM), UCLouvain, 1348, Louvain-la-Neuve, Belgium
* Yu Yu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, Shanghai Qizhi Institute, Shanghai, 200232, China
### 摘要
> 高阶掩码对抗措施在抵御侧信道攻击方面提供了强有力的可证明安全性，但却带来了显著的开销，大大限制了其适用性。以前的研究主要集中在“局部”计算方面，即优化计算单元的成本，例如单个AND门或场乘法。本文探讨了一种补充性的“全局”方法，即将掩码域中的多个操作视为一批次，并通过分期摊销减少随机性和计算成本。具体而言，我们专注于适当整数\(\ell > 1\)的\(\ell \)个并行场乘法的摊销，并设计了一个名为打包乘法的工具包来实现这样的批处理。对于\(\ell +d\le 2^m\)，当实现\(\mathbb {F}_{2^{m}}\)上的d阶探测安全的\(\ell \)个并行乘法时，打包乘法消耗\(d^2+2\ell d + \ell \)双线性乘法和\(2d^2 + d(d+1)/2\)随机场变量，优于现有技术结果，其复杂度为\(O(\ell d^2)\)和\(\ell \left\lfloor d^2/4\right\rfloor + \ell d\)。为了证明打包乘法的d-探测安全性，我们引入了一些用于多输入多输出装置的较弱安全性概念，并将它们用作中间步骤，这可能是独立感兴趣的。由于并行场乘法几乎存在于对称密码学的各个方面，将优化从“局部”提升到“全局”显著扩大了改进的空间。为了证明这一点，我们展示了该方法在AES Subbytes步骤、GCM和TET（一种流行的磁盘加密）上的应用。值得注意的是，当\(d=8\)时，我们在ARM Cortex M架构上实现的AES Subbytes步骤在总速度上达到了\(33\%\)的增益，并且比ASIACRYPT 2018年报告的最新位切片实现节省了高达\(68\%\)的随机比特。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_28](https://doi.org/10.1007/978-3-030-64837-4_28)
## Side Channel Information Set Decoding Using Iterative Chunking - Plaintext Recovery from the "Classic McEliece" Hardware Reference Implementation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#side-channel-information-set-decoding-using-iterative-chunking-plaintext-recovery-from-the-classic-mceliece-hardware-reference-implementation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#side-channel-information-set-decoding-using-iterative-chunking-plaintext-recovery-from-the-classic-mceliece-hardware-reference-implementation)**
### 作者
* Norman Lahr, Fraunhofer SIT, Darmstadt, Germany
* Ruben Niederhagen, Fraunhofer SIT, Darmstadt, Germany
* Richard Petri, Fraunhofer SIT, Darmstadt, Germany
* Simona Samardjiska, Radboud Universiteit, Nijmegen, The Netherlands
### 摘要
> 本论文介绍了一种基于侧信道信息和ISD的攻击方法，针对基于代码的Niederreiter密码系统展开攻击，并评估了使用电磁侧信道进行攻击的实际可行性。我们首先直接将Shoufan等人于2010年提出的定时侧信道明文恢复攻击方法应用到常数时间实现的Niederreiter密码系统上，该系统在官方FPGA实现的NIST竞赛决赛者“Classic McEliece”中使用。然后，我们使用ISD和一种名为迭代切割的新技术加强攻击，进一步显著减少所需的侧信道测量次数。我们理论上证明了我们的攻击改进对于减少所需的侧信道测量次数有重要影响。例如，对于“Classic McEliece” 256位安全参数集kem/mceliece6960119，我们改进了基本攻击方法，使其平均所需测量次数从5415次减少到不到562次，就能成功发起明文恢复攻击。增加ISD计算的成本可以进一步减少所需测量次数。我们通过在所有建议的参数设置下，实际对“Classic McEliece”的官方FPGA实现进行攻击来验证我们的发现。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_29](https://doi.org/10.1007/978-3-030-64837-4_29)
