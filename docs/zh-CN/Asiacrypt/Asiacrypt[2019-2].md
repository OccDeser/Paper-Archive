# Asiacrypt[2019-2]
## Collision Resistant Hashing from Sub-exponential Learning Parity with Noise.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#collision-resistant-hashing-from-sub-exponential-learning-parity-with-noise) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#collision-resistant-hashing-from-sub-exponential-learning-parity-with-noise)**
### 作者
* Yu Yu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Jiang Zhang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Jian Weng, Jinan University, Guangzhou, 510632, China
* Chun Guo, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, 266237, China
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Xiangxue Li, School of Software Engineering, East China Normal University, Shanghai, 200062, China
* Yu Yu, Westone Cryptologic Research Center, Beijing, 100070, China
* Xiangxue Li, Westone Cryptologic Research Center, Beijing, 100070, China
### 摘要
> 最近，学习偏差与噪声（LPN）问题在许多密码学应用中得到了广泛应用，如认证协议、伪随机生成器/函数，甚至包括公钥加密（PKE）方案和遗忘传输（OT）协议。然而，LPN是否意味着冲突抗性哈希（CRH）函数仍然是一个长期存在的开放问题。受Applebaum等人(ITCS 2017)最近的工作的启发，我们引入了一种从LPN到各种参数选择的CRH的通用构造。我们表明，在以下任何一个困难假设下（对于LPN的两个最常见的变体）
> 
> 1.恒定噪声LPN对于任何常数\(\varepsilon >0\)都是\(2^{n^{0.5+\varepsilon }}\)的困难；
> 
> 2.给定\(q=\mathsf {poly}(n)\)个样本，恒定噪音LPN是\(2^{\varOmega (n/\log n)}\)的困难；
> 
> 3.给定\(q=\mathsf {poly}(n)\)个样本，低噪声LPN（噪声率为\(1/\sqrt{n}\)）是\(2^{\varOmega (\sqrt{n}/\log n)}\)的困难。
> 
> 存在具有恒定（甚至是多项式对数）收缩的CRH函数，可以使用多项式大小的深度3电路实现，其中包含了NOT、（无界扇入）AND和XOR门。我们的技术路线LPN \(\rightarrow \) bSVP \(\rightarrow \) CRH 类似于已知的大模量类比，即LWE \(\rightarrow \) SIS \(\rightarrow \) CRH，其中二进制最短向量问题（bSVP）是由Applebaum等人最近提出的(ITCS 2017)，它以类似于Ajtai基于短整数解决方案（SIS）问题的CRH函数的方式实现CRH。
> 
> 此外，在额外的（可以说是最小化的）理想化假设下，如小域随机函数或随机排列（可以轻易地推导出冲突抗性），我们仍然可以采用简单而优雅的冲突抗性领域扩展器，结合两个领域的最佳部分，即最大化（一层）的并行性和多项式收缩。特别地，假设\(2^{n^{0.5+\varepsilon }}\)的恒定噪声LPN或\(2^{n^{0.25+\varepsilon }}\)的低噪音LPN是困难的，我们得到一个只评估小域随机函数（或随机排列）的单层并行冲突抗性哈希函数，并在多项式时间内收缩。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_1](https://doi.org/10.1007/978-3-030-34621-8_1)
## New Code-Based Privacy-Preserving Cryptographic Constructions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#new-code-based-privacy-preserving-cryptographic-constructions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#new-code-based-privacy-preserving-cryptographic-constructions)**
### 作者
* Khoa Nguyen, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Hanh Tang, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Huaxiong Wang, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Neng Zeng, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
### 摘要
> 基于编码的密码学有着悠久的历史，但在一段时间内发展缓慢。作为后量子密码学的主要分支之一，这个领域最近引起了很多关注。然而，其隐私保护密码学构造的子领域仍然相对不发达，例如，重要的构建块，如零知识区间证明、集合成员证明，甚至哈希前像的知识证明，在基于编码的假设下尚未被知晓。此外，过去几年几乎没有引入实质性的技术发展。
> 
> 本文介绍了几种全新的基于编码的隐私保护密码学构造，这些构造在基于编码的密码学领域的现有技术上取得了显著进展。具体而言，我们提出了3项主要贡献，每一项都有可能产生各种其他应用。我们的第一项贡献是一种基于编码的统计隐藏和计算绑定的承诺方案，附带零知识(Zero-Knowledge)证明，证明了有效开启并且可以轻松扩展以证明承诺位满足其他关系。我们的第二项贡献是第一个基于编码的针对承诺值的零知识区间论证，通信成本对应范围大小的对数。我们的区间论证的特殊之处在于，以往的范围证明/论证只解决非负整数的范围问题，而我们的协议可以处理带符号的分数，因此可以找到更广泛的应用。我们的第三项贡献是第一个支持ZK成员证明的基于编码的默克尔树累加器，已知可以实现各种有趣的应用。特别是，它使我们能够获得第一个基于编码的环签名和群签名，并且签名大小对数级。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_2](https://doi.org/10.1007/978-3-030-34621-8_2)
## An LLL Algorithm for Module Lattices.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#an-lll-algorithm-for-module-lattices) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#an-lll-algorithm-for-module-lattices)**
### 作者
* Changmin Lee, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Alice Pellet-Mary, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Damien Stehlé, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Alexandre Wallet, NTT Secure Platform Laboratories, Tokyo, Japan
### 摘要
> LLL算法以欧几里德格基作为输入，并在多项式次数的操作中输出另一组相同格子的基，但由较短向量组成。我们对包含在\(K^n\)中的R模进行了推广，其中K是任意数域而n是维度，R表示K的整数环。具体而言，我们引入了一个能够有效找到秩为n模矢量的算法，该算法可以通过访问一个在秩为2模矢量中找到短向量的预设向量问题预设器，并通过访问仅取决于K的格子的最近矢量问题预设器找到秩为2模矢量的有效算法。第二个算法依赖于量子计算，并且其分析是启发式的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_3](https://doi.org/10.1007/978-3-030-34621-8_3)
## Order-LWE and the Hardness of Ring-LWE with Entropic Secrets.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#order-lwe-and-the-hardness-of-ring-lwe-with-entropic-secrets) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#order-lwe-and-the-hardness-of-ring-lwe-with-entropic-secrets)**
### 作者
* Madalina Bolboceanu, Bitdefender, Bucharest, Romania
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Renen Perlman, Weizmann Institute of Science, Rehovot, Israel
* Devika Sharma, Weizmann Institute of Science, Rehovot, Israel
### 摘要
> 我们提出了一个著名的环学习与误差（RLWE）问题（Lyubashevsky，Peikert和Regev，Eurocrypt 2010，Eurocrypt 2013）的泛化，其中环境环不是一个数域的整数环，而是一个秩满的子环。我们证明了我们的Order-LWE问题相对于秩可逆的理想格中的短向量问题具有最坏情况下的难度。
> 
> 该定义使我们能够对广泛使用的多项式-LWE（PLWE）问题（Stehlé等，Asiacrypt 2009）的难度提供新的分析，与Rosca，Stehlé和Wallet最近提出的分析不同（Eurocrypt 2018）。这表明Order-LWE可以用来分析和可能设计RLWE的有用松弛度。
> 
> 我们展示了Order-LWE可以自然地用来证明RLWE实例的安全性，其中“RLWE秘密”（通常对应于密码系统的秘密密钥）的采样并不像RLWE难度所要求的那样均匀。我们首先展示了即使密钥从样本空间的子环中采样，最坏情况下的难度仍然存在。然后，我们研究了密钥是从样本空间的理想或其余环的陪集中采样的情况（等效地，其中一些CRT坐标被固定或泄露）。在后一种情况下，我们展示了一个有趣的门限现象，即RLWE噪声的数量决定了问题是否是可解的。
> 
> 最后，我们解决了一个长期存在的问题，即高熵密钥是否足以使RLWE变得困难。我们关于从理想中采样的结果表明，仅仅要求高熵是不足够的。因此，我们提出了一个广泛的分布类别，我们猜测在其中难度应该成立，并通过减少到一个具体的格问题提供了证据。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_4](https://doi.org/10.1007/978-3-030-34621-8_4)
## On the Non-existence of Short Vectors in Random Module Lattices.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#on-the-non-existence-of-short-vectors-in-random-module-lattices) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#on-the-non-existence-of-short-vectors-in-random-module-lattices)**
### 作者
* Ngoc Khanh Nguyen, IBM Research – Zurich, Rüschlikon, Switzerland
* Ngoc Khanh Nguyen, Ruhr Universität Bochum, Bochum, Germany
### 摘要
> 最近，Lyubashevsky和Seiler (Eurocrypt 2018)表明，循环数环\(\mathbb {Z}_q[X]/(X^n+1)\)中的小多项式，其中n是2的幂，可以在素模数q的特殊合同条件下进行反转。该结果已被用于证明针对无界对手的基于格的构造的某些安全性质。不幸的是，由于特殊条件，在相应的循环数环上工作不允许有效地使用数论变换(NTT)算法进行多项式的快速乘法运算，因此，方案变得不太实用。
> 
> 在本文中，我们通过分析小多项式在中国剩余（或NTT）表示中的零点来解决这个限制。作为结果，我们对与随机模块格中存在或不存在短向量的概率提供了上限，而不对素数模数做任何假设。我们将我们的结果与Kiltz等人的通用框架(Eurocrypt 2018)一起应用于许多基于格的Fiat-Shamir签名方案，以便它们在量子随机神谕模型中享有严格的安全性，并支持快速乘法算法（以稍大的公钥和签名为代价），如Bai-Galbraith签名方案(CT-RSA 2014)、\(\mathsf {Dilithium\text {-}QROM}\) (Kiltz et al., Eurocrypt 2018)和\(\mathsf {qTESLA}\) (Alkim et al., PQCrypto 2017)。我们的技术还可以用于证明Baum等人最近提出的承诺方案（SCN 2018）在没有对q的额外假设的情况下是统计可绑定的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_5](https://doi.org/10.1007/978-3-030-34621-8_5)
## Forkcipher: A New Primitive for Authenticated Encryption of Very Short Messages.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#forkcipher-a-new-primitive-for-authenticated-encryption-of-very-short-messages) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#forkcipher-a-new-primitive-for-authenticated-encryption-of-very-short-messages)**
### 作者
* Elena Andreeva, imec-COSIC, KU Leuven, Leuven, Belgium
* Antoon Purnal, imec-COSIC, KU Leuven, Leuven, Belgium
* Virginie Lallemand, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
* Arnab Roy, University of Bristol, Bristol, UK
* Damian Vizár, CSEM, Neuchâtel, Switzerland
### 摘要
> 高效加密和认证短消息在限制场景中是确保安全性的基本要求，这些场景包括汽车系统中的CAN FD（最大消息大小为64字节）、大规模物联网、5G的关键通信域和窄带物联网等。此外，NIST轻量级密码学项目的一个要求是AEAD方案“应优化为处理短消息效率高（例如，至少为8字节）”。
> 
> 在本文中，我们引入并形式化了对称加密中的一种新型基元，称为forkcipher。forkcipher是一种基于密钥的基元，可将固定长度的输入扩展为固定长度的输出。我们定义其安全性为在所选密文攻击下的不可区分性（对于n比特输入到2n比特输出）。我们通过新的迭代-fork-迭代设计范式给出了通用构建验证。
> 
> 然后，我们提出了具体的forkcipher实例\({\mathsf {ForkSkinny}}\)，它具有一个公共补丁，并基于SKINNY（一种可调整的轻量级密码，遵循TWEAKEY框架）。我们对\({\mathsf {ForkSkinny}}\)进行了广泛的密码分析，包括对经典攻击和结构特定攻击的分析。
> 
> 我们通过设计三种新的可证明安全的基于nonce的AEAD模式来展示forkcipher的适用性，这些模式在性能和安全性之间进行了权衡，并针对非常短消息的效率进行了优化。考虑到参考块大小为16字节，并忽略可能的硬件优化，我们的新AEAD方案超越了基于SKINNY的最佳AEAD模式。更一般地，我们展示了forkcipher适用于处理主要为短消息的轻量级应用，同时允许处理任意消息大小。
> 
> 此外，我们的硬件实现结果表明，当我们利用\({\mathsf {ForkSkinny}}\)的内在并行性时，与基于SKINNY实现的最高效模式相比，我们可以实现最佳性能。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_6](https://doi.org/10.1007/978-3-030-34621-8_6)
## Anonymous AE.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#anonymous-ae) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#anonymous-ae)**
### 作者
* John Chan, Department of Computer Science, University of California, Davis, USA
* Phillip Rogaway, Department of Computer Science, University of California, Davis, USA
### 摘要
> 经过技术认证的加密（AE）通常要求解密方在解密每个密文时提供正确的一次性号码。为了实现这一点，一次性号码通常会与密文一起明文传送。但这样做可能会损失匿名性并降低可用性。通过传输相关数据（AD）或会话标识（用于标识操作密钥），也可能导致丧失匿名性。为了解决这些问题，我们引入了匿名AE的概念，即密文必须在被理解为包含解密所需的所有内容（除了接收方的秘密状态）的同时隐藏其来源。我们形式化了一种类型的匿名AE，称为anAE，即基于匿名一次性号码的AE，它推广和增强了常规的基于一次性号码的AE（nAE）。我们提供了一种高效的anAE构建方法，称为NonceWrap，通过使用一个nAE方案和一个分组密码。我们证明了NonceWrap的安全性。虽然anAE不能解决通过流量分析导致的隐私损失，但它确保密文（现在被广泛解释）本身不会危及隐私。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_7](https://doi.org/10.1007/978-3-030-34621-8_7)
## Sponges Resist Leakage: The Case of Authenticated Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#sponges-resist-leakage-the-case-of-authenticated-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#sponges-resist-leakage-the-case-of-authenticated-encryption)**
### 作者
* Jean Paul Degabriele, CNS, Technische Universität Darmstadt, Darmstadt, Germany
* Christian Janson, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Patrick Struck, CDC, Technische Universität Darmstadt, Darmstadt, Germany
### 摘要
> 在这项工作中，我们推动了关于具有关联数据（AEAD）的抗泄露认证加密的研究，并为从海绵构建此类方案奠定了理论基础。在Barwell等人的工作基础上（ASIACRYPT 2017），我们将构造抗泄露AEAD方案的问题简化为构建在泄露存在的情况下保持伪随机性和不可预测性的固定输入长度函数族。值得注意的是，在抗泄露环境下，这两个属性并不能互相推出。然后，我们展示了这样一个函数族可以与标准原语相结合，即伪随机生成器和抗碰撞散列函数，以产生基于随机数的AEAD方案。此外，我们的构造非常高效，每次加密或解密只需要调用两次这个抗泄露函数。该构造完全可以由T-海绵实例化为具体的AEAD方案，我们称之为**Slae**。我们证明了在非自适应泄露环境中基于海绵的实例是安全的。**Slae**与**Isap**有很多相似之处，事实上它受到了Dobraunig等人在FSE 2017上提出的**Isap**的启发。然而，**Slae**在保留了**Isap**的大部分实际优势的同时，还受益于形式化的安全性处理。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_8](https://doi.org/10.1007/978-3-030-34621-8_8)
## Dual Isogenies and Their Application to Public-Key Compression for Isogeny-Based Cryptography.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#dual-isogenies-and-their-application-to-public-key-compression-for-isogeny-based-cryptography) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#dual-isogenies-and-their-application-to-public-key-compression-for-isogeny-based-cryptography)**
### 作者
* Michael Naehrig, Microsoft Research, Redmond, WA, USA
* Joost Renes, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### 摘要
> 基于同构的协议SIDH和SIKE因其保持相对较小密钥的后量子密钥协议候选而受到广泛关注。最近的一系列研究提出并进一步改进了公钥压缩技术，导致公钥压缩被纳入NIST后量子密码标准化工作第二轮SIKE提案中。我们展示了如何利用双同构映射显著提高压缩技术的性能，将其开销从160-182%降低到77-86%（对于Alice的密钥生成），以及从98-104%降低到59-61%（对于Bob在不同的SIDH参数集上）。对于SIKE，我们将（1）密钥生成的开销从140-153%降低到61-74%，（2）密钥封装的开销从67-90%降低到38-57%，以及（3）密钥解封的开销从59-65%降低到34-39%。这主要通过加速配对计算来实现，这一直是主要的瓶颈，但我们也改进了（确定性的）基底生成。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_9](https://doi.org/10.1007/978-3-030-34621-8_9)
## Optimized Method for Computing Odd-Degree Isogenies on Edwards Curves.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#optimized-method-for-computing-odd-degree-isogenies-on-edwards-curves) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#optimized-method-for-computing-odd-degree-isogenies-on-edwards-curves)**
### 作者
* Suhri Kim, Center for Information Security Technologies (CIST), Korea University, Seoul, Republic of Korea
* Seokhie Hong, Center for Information Security Technologies (CIST), Korea University, Seoul, Republic of Korea
* Kisoon Yoon, NSHC Inc., Uiwang, Republic of Korea
* Young-Ho Park, Sejong Cyber University, Seoul, Republic of Korea
### 摘要
> 在这篇论文中，我们介绍了一种计算爱德华曲线上任意奇次度同构的高效方法。通过使用w坐标，我们优化了Moody和Shumow提出的爱德华曲线上的同构公式。我们证明了在同构计算期间，爱德华曲线可以额外获得图像曲线的系数。对于\(\ell \)次度同构，其中\(\ell =2s+1\)，当\(s \ge 2\)时，我们的爱德华曲线同构公式表现优于蒙哥马利曲线。为了更好地展示使用w坐标带来的性能改进，我们使用我们的同构公式实现了CSIDH。与之前的实现相比，我们的实现速度约快20%。我们的工作结果为在基于同构的密码学中使用爱德华曲线打开了大门，特别是对于需要更高次度同构的CSIDH。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_10](https://doi.org/10.1007/978-3-030-34621-8_10)
## Hard Isogeny Problems over RSA Moduli and Groups with Infeasible Inversion.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#hard-isogeny-problems-over-rsa-moduli-and-groups-with-infeasible-inversion) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#hard-isogeny-problems-over-rsa-moduli-and-groups-with-infeasible-inversion)**
### 作者
* Salim Ali Altuğ, Boston University, Boston, USA
* Yilei Chen, Visa Research, Palo Alto, USA
### 摘要
> 我们着手研究基于RSA模数的椭圆曲线同构图的计算问题。我们假设这些图上的相邻搜索问题的多个变体都是困难的，并提供了一份对这些问题进行密码分析尝试的全面列表。此外，基于这些问题的困难性，我们提供了一个不可逆反演的构造，其中底层群是虚二次序理想类群。
> 
> 回顾一下，在一个不可逆反演的群中，计算群元素的逆是困难的，而执行群操作是容易的。受到构建定向传递签名方案的潜在密码学应用的启发，关于不可逆反演群的搜索始于Hohenberger和Molnar（2003）的论文。之后，Irrer等人（2004）还证明它可以提供广播加密方案。然而，迄今为止，唯一的一个不可逆反演群的情况是由Yamakawa等人（2014）基于分解困难性和不可区分混淆（iO）构造的更强大的自双线性映射的原语所隐含。我们的构造在不使用iO的情况下给出了一个候选方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_11](https://doi.org/10.1007/978-3-030-34621-8_11)
## On Kilian's Randomization of Multilinear Map Encodings.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#on-kilians-randomization-of-multilinear-map-encodings) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#on-kilians-randomization-of-multilinear-map-encodings)**
### 作者
* Jean-Sébastien Coron, University of Luxembourg, Luxembourg City, Luxembourg
* Hilder V. L. Pereira, University of Luxembourg, Luxembourg City, Luxembourg
### 摘要
> 基于矩阵分支程序的不可区分混淆构造通常分为两个步骤：首先对矩阵乘积计算应用Kilian的随机化，然后使用多线性映射方案对矩阵进行编码。在本文中，我们观察到通过在编码之后应用Kilian的随机化，对于CLT13多线性映射的最佳攻击复杂度显著增加。这意味着可以使用更小的参数，从而将构造效率提高数个数量级。
> 
> 作为应用，我们描述了多方非交互式Diffie-Hellman密钥交换的第一个具体实现，并针对现有攻击进行了安全保护。密钥交换最初是多线性映射的最直接应用；然而，它很快被已知的三个多线性映射家族（GGH13、CLT13和GGH15）破解。在这里，我们描述了基于CLT13多线性映射的抗已知攻击的密钥交换的首个实现。对于\(N=4\)个用户和中等安全级别，我们的实现需要18GB的公共参数和几分钟的共享密钥派生时间。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_12](https://doi.org/10.1007/978-3-030-34621-8_12)
## Cryptanalysis of CLT13 Multilinear Maps with Independent Slots.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#cryptanalysis-of-clt13-multilinear-maps-with-independent-slots) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#cryptanalysis-of-clt13-multilinear-maps-with-independent-slots)**
### 作者
* Jean-Sébastien Coron, University of Luxembourg, Luxembourg City, Luxembourg
* Luca Notarnicola, University of Luxembourg, Luxembourg City, Luxembourg
### 摘要
> 基于多线性映射的许多构造都需要明文中的独立插槽，以便可以在插槽上并行执行多个计算。这些构造通常基于CLT13多线性映射，因为CLT13本质上提供了一个复合编码空间，其中的明文环为小素数\(g_i\)的直和环\(\bigoplus _{i=1}^n \mathbb {Z}/g_i\mathbb {Z}\)。然而，Crypto 2014由Gentry、Lewko和Waters发现了一个漏洞，利用维度2的基于格的攻击，作者提出了一个简单的对策。在本文中，我们发现了一种基于高维格约简的攻击，可以破解作者对多种参数范围的对策。结合Eurocrypt 2015中Cheon等人的攻击，可以恢复CLT13的所有秘密参数，假设可以获得几乎为零的低级别编码的明文。我们展示了如何对基于复合阶CLT13的各种构造应用我们的攻击。对于[FRS17]的构造，我们的攻击可以恢复一定范围内的秘密CLT13明文环，但破解分支程序的不可区分性仍然是一个悬而未决的问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_13](https://doi.org/10.1007/978-3-030-34621-8_13)
## Algebraic XOR-RKA-Secure Pseudorandom Functions from Post-Zeroizing Multilinear Maps.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#algebraic-xor-rka-secure-pseudorandom-functions-from-post-zeroizing-multilinear-maps) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#algebraic-xor-rka-secure-pseudorandom-functions-from-post-zeroizing-multilinear-maps)**
### 作者
* Michel Abdalla, DIENS, École normale supérieure, CNRS, PSL Research University, Paris, France
* Michel Abdalla, Inria, Paris, France
* Fabrice Benhamouda, Algorand Foundation, NewYork, NY, USA
* Alain Passelègue, Inria, ENS Lyon, Lyon, France
### 摘要
> 由于现有分组密码存在大量成功的相关密钥攻击，相关密钥安全已成为此类原语的常见设计目标。在这些攻击中，对手不仅能够看到其选择的输入函数的输出，还能够看到相关密钥的输出。在Crypto 2010中，Bellare和Cash提出了第一个根据标准假设可以抵御此类攻击的伪随机函数的构造。他们的构造以及最近出现的其他几个构造都有一个共同点，即它们只考虑复杂群上的秘密密钥的线性或多项式函数。然而，在现实中，大多数相关密钥攻击具有更简单的形式，例如与已知值进行异或运算的密钥。为了解决这个问题，我们提出了第一个针对异或关系的RKA安全伪随机函数的构造。我们的构造依赖于多线性映射，因此只能被视为可行性结果。然而，需要注意的是，由于它不会揭示任何零的编码，因此可以在现有的两种多线性映射候选者下实例化。为了实现这个目标，我们依赖于在程序混淆环境中使用的几种技术，但我们还引入了一些新技术来应对相关密钥安全设置中特有的挑战。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_14](https://doi.org/10.1007/978-3-030-34621-8_14)
## Numerical Method for Comparison on Homomorphically Encrypted Numbers.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#numerical-method-for-comparison-on-homomorphically-encrypted-numbers) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#numerical-method-for-comparison-on-homomorphically-encrypted-numbers)**
### 作者
* Jung Hee Cheon, Department of Mathematical Sciences, Seoul National University, Seoul, South Korea
* Dongwoo Kim, Department of Mathematical Sciences, Seoul National University, Seoul, South Korea
* Duhyeong Kim, Department of Mathematical Sciences, Seoul National University, Seoul, South Korea
* Hun Hee Lee, Department of Mathematical Sciences, Seoul National University, Seoul, South Korea
* Keewoo Lee, Department of Mathematical Sciences, Seoul National University, Seoul, South Korea
### 摘要
> 我们提出了一种比较基于全同态加密（HE）的数字的新方法。以前，比较和最大/最小值函数是使用布尔函数来评估的，其中输入数字是按位加密的。然而，按位加密方法对于基本算术运算（如加法和乘法）需要相对昂贵的计算。
> 
> 在本文中，我们引入了一种迭代算法，用于近似计算按字加密的多个数字的最大/最小值和比较操作。通过具体的误差分析，我们证明了我们的最大/最小值和比较算法在获取误差率为\(2^{-\alpha }\)的近似值时，具有\(\varTheta (\alpha )\)和\(\varTheta (\alpha \log \alpha )\)的计算复杂性，而先前的极小-极大值多项式逼近方法则需要指数复杂性\(\varTheta (2^{\alpha /2})\)和\(\varTheta (\sqrt{\alpha }\cdot 2^{\alpha /2})\)。在多项式逼近中，我们的算法在渐近计算复杂性方面实现了（准）最佳性，用于最大/最小值和比较操作。比较算法扩展到多个应用，如计算加密状态下的前k个元素，以及计算超过阈值的数字。
> 
> 我们的方法实现了按字加密在实际中具有与按位加密相当的性能，同时在多项式运算上表现更优。通过HEAAN加密的任意两个\(\ell \)-位整数的近似最大值计算，误差范围在\(2^{\ell -10}\)以内，仅需1.14毫秒的摊销运行时间，与基于按位加密的结果相当。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_15](https://doi.org/10.1007/978-3-030-34621-8_15)
## Multi-Key Homomorphic Encryption from TFHE.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#multi-key-homomorphic-encryption-from-tfhe) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#multi-key-homomorphic-encryption-from-tfhe)**
### 作者
* Hao Chen, Microsoft Research, Redmond, USA
* Yongsoo Song, Microsoft Research, Redmond, USA
* Ilaria Chillotti, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> 在本论文中，我们通过推广Chillotti等人（ASIACRYPT 2016）提出的低延迟同态加密，提出了一种多密钥同态加密（MKHE）方案。我们的方案可以在不同密钥下对密文进行二进制门运算，然后进行重新引导。
> 
> 实现这一目标的最大挑战是设计一个单方引导密钥和多密钥RLWE密文之间的乘法。我们提出了两种不同的算法来进行混合乘积。我们的第一种方法改进了Mukherjee和Wichs（EUROCRYPT 2016）的密文扩展，以提供更好的性能。另一种方法是一种全新的方法，具有存储、复杂度和噪声增长方面的优势。
> 
> 与之前的工作相比，我们的构造在渐近和具体复杂度方面都更高效。密文的长度和二进制门的计算成本分别与参与方的数量成线性和二次增长。我们提供了演示具有重新引导的同态NAND门的运行时间的实验结果。据我们所知，这是文献中对MKHE方案进行实现的首次尝试。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_16](https://doi.org/10.1007/978-3-030-34621-8_16)
## Homomorphic Encryption for Finite Automata.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#homomorphic-encryption-for-finite-automata) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#homomorphic-encryption-for-finite-automata)**
### 作者
* Nicholas Genise, Rutgers University, Piscataway, NJ, USA
* Craig Gentry, Algorand Foundation, New York, NY, USA
* Shai Halevi, Algorand Foundation, New York, NY, USA
* Baiyu Li, University of California, San Diego, La Jolla, CA, USA
* Daniele Micciancio, University of California, San Diego, La Jolla, CA, USA
### 摘要
> 我们描述了一种类似GSW的几乎同态加密方案，可以原生地加密矩阵而不仅仅是单个元素。与现有的同态加密方案相比，该方案在评估加密（非确定性）有限自动机（NFAs）时提供更好的性能。与GSW不同的是，我们不知道如何将此方案的安全性从LWE降低，而是从更强的假设中降低，这个假设可以被视为NTRU假设的不均匀变体。这个假设（我们称之为iNTRU）本身可能有用且有趣，我们考察了其中的一些特性。我们还研究了将正则表达式编码为NFAs的方法，并且特别探讨了一个新的优化问题，受到我们应用于加密NFA评估的启发。在这个问题中，我们寻求在给定表达式的约束条件下，最小化NFA中的状态数量，同时满足对NFA模糊性的限制。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_17](https://doi.org/10.1007/978-3-030-34621-8_17)
## Efficient Explicit Constructions of Multipartite Secret Sharing Schemes.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#efficient-explicit-constructions-of-multipartite-secret-sharing-schemes) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#efficient-explicit-constructions-of-multipartite-secret-sharing-schemes)**
### 作者
* Qi Chen, Advanced Institute of Engineering Science for Intelligent Manufacturing, Guangzhou University, Guangzhou, 510006, China
* Chunming Tang, College of Mathematics and Information Science, Guangzhou University, Guangzhou, 510006, China
* Zhiqiang Lin, College of Mathematics and Information Science, Guangzhou University, Guangzhou, 510006, China
### 摘要
> 多方秘密共享方案是具有多方访问结构的方案，其中参与者集合分为几个部分，并且同一部分中的所有参与者扮演相同的角色。多方秘密共享方案受到了广泛关注，因为它可以被视为阈值秘密共享的自然和有用的推广。本研究致力于高效和明确构建理想的多方秘密共享方案，而大多数已知构造要么效率低下，要么是随机的。文献中的大多数理想多方秘密共享方案可以归类为分层或分区。主要结果是理想分层访问结构的构造，这个族群包含了每个理想分层访问结构作为特例，例如并发分层阈值访问结构和联合分层阈值访问结构，以及带有上界和带有下界的分区访问结构的构造，这是两个分区访问结构的族群。
> 
> 基于多方秘密共享方案、多项式矩阵和矩阵之间的关系，实现多方访问结构的方案问题可以转化为如何从其相关多项式矩阵的表示中找到一个矩阵的表示的问题。在本文中，我们给出了高效算法，用于找到与三个多方访问结构族群相关的矩阵的表示。更具体地说，基于已知的整数多项式矩阵的结果，对于这三个访问结构的族群中的每一个，我们提供了一种高效的方法来找到有限域上整数多项式矩阵的表示，然后通过该域的有限扩展来找到关联的矩阵的表示。最后，我们通过高效的方法构建了实现这三个多方访问结构的理想线性方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_18](https://doi.org/10.1007/978-3-030-34621-8_18)
## Perfectly Secure Oblivious RAM with Sublinear Bandwidth Overhead.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#perfectly-secure-oblivious-ram-with-sublinear-bandwidth-overhead) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#perfectly-secure-oblivious-ram-with-sublinear-bandwidth-overhead)**
### 作者
* Michael Raskin, Technical University of Munich, Munich, Germany
* Mark Simkin, Aarhus University, Aarhus, Denmark
### 摘要
> 忽略式随机访存（ORAM）已成为基本的密码学构建块。在什么假设下可能出现带宽开销是人们长期关注的话题，此前已有大量相关研究工作。在本文中，我们专注于完美安全的ORAM，并提出了第一个在最坏情况下带宽开销为次线性的构造。所有先前的完美安全构造都需要在最坏情况下线性通信开销，并且只在平摊意义上达到次线性带宽开销。我们提出了一个根本性的新方法来构建ORAM，并且我们的结果极大地推进了我们对完美安全性的认识。
> 
> 我们的主要构造，预测式ORAM，是完美安全的，最坏情况下具有带宽开销<待补充>，服务器端总存储成本为<待补充>，其中N是存储的数据元素的最大数量。在具体的服务器端存储成本方面，我们的构造是所有完美和统计安全ORAM的存储开销最小的，仅比计算安全ORAM最高效的存储成本差3倍。在客户端位置映射的假设下，我们的构造是首个在最坏情况下具有次线性带宽开销的ORAM，并且不需要服务器端计算即可实现在线带宽开销。在此过程中，我们还构造了一个概念上极其简单的统计安全ORAM，其最坏情况下具有带宽开销<待补充>，这可能是独立感兴趣的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_19](https://doi.org/10.1007/978-3-030-34621-8_19)
## How to Correct Errors in Multi-server PIR.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#how-to-correct-errors-in-multi-server-pir) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#how-to-correct-errors-in-multi-server-pir)**
### 作者
* Kaoru Kurosawa, Ibaraki University, Hitachi, Japan
### 摘要
> 假设存在一个用户和 \(\ell \) 个服务器 \(S_1,\ldots ,S_{\ell }\)。每个服务器 \(S_j\) 拥有一个数据库副本 \(\mathbf {x}=(x_1, \ldots , x_n) \in \{0,1\}^n\)，用户拥有一个秘密索引 \(i_0 \in \{1, \ldots , n\}\)。一个 b 错误纠正的 \(\ell \) 服务器 PIR（私有信息检索）方案允许用户正确检索 \(x_{i_0}\)，即使 b 或更少的服务器返回错误答案，同时每个服务器在信息论意义上不得关于 \(i_0\) 的任何信息。尽管存在一个总通信成本为 \( O(n^{1/(2k-1)} \times k\ell \log {\ell } ) \)（其中 \(k=\ell -2b\)）的方案，但它的解码算法非常低效。
> 
> 在本文中，我们展示了一个高效的解码算法来处理这个 b 错误纠正的 \(\ell \) 服务器 PIR 方案。它的运行时间为 \(O(\ell ^3)\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_20](https://doi.org/10.1007/978-3-030-34621-8_20)
## UC-Secure Multiparty Computation from One-Way Functions Using Stateless Tokens.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#uc-secure-multiparty-computation-from-one-way-functions-using-stateless-tokens) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#uc-secure-multiparty-computation-from-one-way-functions-using-stateless-tokens)**
### 作者
* Saikrishna Badrinarayanan, UCLA, Los Angeles, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
* Abhishek Jain, JHU, Baltimore, USA
* Ivan Visconti, University of Salerno, Fisciano, Italy
### 摘要
> 我们重新审视了无状态硬件令牌模型下普遍可组合(UC)安全多方计算的问题。
> 
> 我们基于单向函数构建了一个用于通用函数的三轮多方计算协议，其中每个参与方向其他每个参与方发送两个令牌。在简化为两方的情况下，我们还基于单向函数构建了一个两轮协议，其中每个参与方向对方发送一个令牌，在协议结束时，双方都会获得输出结果。
> 
> 上述构建中的一个关键组成部分是一个基于单向函数的新型两轮遗忘传输协议，只使用一个令牌，并且可以重复使用无限多次的多项式。
> 
> 所有先前的构建要求更强的复杂性假设，或更多的轮数，或更多的令牌数量。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_21](https://doi.org/10.1007/978-3-030-34621-8_21)
## Efficient UC Commitment Extension with Homomorphism for Free (and Applications).
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#efficient-uc-commitment-extension-with-homomorphism-for-free-and-applications) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#efficient-uc-commitment-extension-with-homomorphism-for-free-and-applications)**
### 作者
* Ignacio Cascudo, IMDEA Software Institute, Madrid, Spain
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Bernardo David, IT University of Copenhagen, Copenhagen, Denmark
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Rafael Dowsley, Bar Ilan University, Tel Aviv, Israel
* Irene Giacomelli, Protocol Labs, Inc., Basel, Switzerland
### 摘要
> 同态通用可组合（UC）承诺允许发送方在不透露数值本身的情况下，透露包含在承诺中数值的相加和相乘的结果，并确保接收方对承诺值的正确性进行计算。在这项工作中，我们从任何（不一定是UC或同态的）可抽取承诺构造了本质上最优的可加同态UC承诺，而之前最好的构造则需要盲传输。我们在输入消息的长度上获得了摊销的线性计算复杂度和速率1。接下来，我们展示了如何扩展我们的方案，以获得乘法同态性，但代价是渐近的最优性，同时在实际参数的具体复杂度上保持低。此外，我们的技术产生了与Fiat-Shamir启发式方法兼容的公共硬币协议。这些结果的代价是实现了同态承诺功能的受限版本，其中发送方可以对任意数量的承诺和承诺消息进行操作，但只允许对一批承诺进行一次批量开放。尽管这种功能似乎具有限制性，但我们证明它可以用作安全多方计算和零知识非交互性知识最近协议更高效实例的构建块。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_22](https://doi.org/10.1007/978-3-030-34621-8_22)
## Scalable Private Set Union from Symmetric-Key Techniques.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-2].md#scalable-private-set-union-from-symmetric-key-techniques) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-2].md#scalable-private-set-union-from-symmetric-key-techniques)**
### 作者
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, USA
* Mike Rosulek, Oregon State University, Corvallis, USA
* Ni Trieu, Oregon State University, Corvallis, USA
* Xiao Wang, Northwestern University, Evanston, USA
### 摘要
> 我们提出了一个新的有效协议来计算私有集合并（PSU）。在这里，两个半诚实的参与方，每个持有一个已知大小（或已知上界）的数据集，希望计算它们的集合并，而不向任何一方透露其他信息。我们的协议是在OT混合模型中进行的。除了OT扩展，它完全基于对称密钥原语。我们通过其直接应用于网络安全和其他领域来推动PSU原语的发展。
> 
> 在我们的PSU构建的技术核心是反向私有成员关系测试（RPMT）协议。在RPMT中，具有输入\(x^*\)的发送方与持有集合X的接收方进行交互。结果是，接收方只学到一个指示\(x^* \in X\)的比特位，而发送方对集合X一无所知。（先前的类似协议将输出提供给对方，因此称为“反向”私有成员关系）。我们相信我们的RPMT抽象和构建在其他应用中可以作为一个构建模块。
> 
> 我们通过一种实现来展示我们提出的协议的实用性。对于大小为\(2^{20}\)的输入集合，并且使用一个线程，我们的协议需要238秒来安全地计算集合并，不论项目的位长度如何。我们的协议适合并行化处理。将线程数从1增加到32，我们的协议仅需要13.1秒，提高了\(18.25{\times }\)倍。
> 
> 据我们所知，我们是第一个报告大规模实验、提供代码并避免广泛使用计算昂贵的公钥操作的协议。（以前的工作中没有公开可用的PSU代码，而且只有以前基于对称密钥的工作报告了小规模实验，并侧重于更简单的3方，1个损坏的设置。）我们的工作提高了大规模实例中报告的PSU技术水平，提高了高达\(7,600{\times }\)倍的因素。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34621-8_23](https://doi.org/10.1007/978-3-030-34621-8_23)
