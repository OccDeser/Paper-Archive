# Asiacrypt[2020-3]
## MOTIF: (Almost) Free Branching in GMW - Via Vector-Scalar Multiplication.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#motif-almost-free-branching-in-gmw-via-vector-scalar-multiplication) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#motif-almost-free-branching-in-gmw-via-vector-scalar-multiplication)**
### 作者
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
* Stanislav Peceny, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> MPC功能越来越多地在高级语言中进行规范，其中控制流构造如条件语句被广泛使用。然而，目前具体高效的MPC协议是基于电路的，并且必须以较高的成本评估所有条件分支以隐藏所采取的分支。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_1](https://doi.org/10.1007/978-3-030-64840-4_1)
## Maliciously Secure Matrix Multiplication with Applications to Private Deep Learning.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#maliciously-secure-matrix-multiplication-with-applications-to-private-deep-learning) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#maliciously-secure-matrix-multiplication-with-applications-to-private-deep-learning)**
### 作者
* Hao Chen, Facebook, Menlo Park, USA
* Miran Kim, Ulsan National Institute of Science and Technology, Ulsan, South Korea
* Ilya Razenshteyn, Microsoft Research, Redmond, USA
* Yongsoo Song, Microsoft Research, Redmond, USA
* Dragos Rotaru, imec-COSIC, KU Leuven, Leuven, Belgium
* Dragos Rotaru, Cape Privacy, New York, USA
* Sameer Wagh, Princeton University, Princeton, NJ, USA
* Sameer Wagh, University of California, Berkeley, USA
### 摘要
> 保持数据隐私的计算方式越来越重要。多方计算（MPC）和同态加密（HE）是两种用于保护隐私计算的密码学技术。在这项工作中，我们开发了高效的UC安全多方协议，用于矩阵乘法和二维卷积。我们基于SPDZ框架，并集成了最先进的矩阵乘法HE算法。我们的协议仅在输入和输出维度上线性增长，而不是乘法操作数量上增长的通信成本。我们消除了SPDZ中的“三元牺牲”步骤，提高了效率并简化了零知识证明。我们实现了我们的协议，并将其与SPDZ LowGear变体（Keller等人Eurocrypt'18）进行了基准测试。对于两个大小为128的方阵相乘，我们将通信成本从1.54 GB降低到12.46 MB，改进幅度超过两个数量级，并且随着矩阵大小的增加而进一步改善。对于评估ResNet-50神经网络的所有卷积层，通信成本从5 TB降低到41 GB。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_2](https://doi.org/10.1007/978-3-030-64840-4_2)
## On the Exact Round Complexity of Best-of-Both-Worlds Multi-party Computation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#on-the-exact-round-complexity-of-best-of-both-worlds-multi-party-computation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#on-the-exact-round-complexity-of-best-of-both-worlds-multi-party-computation)**
### 作者
* Arpita Patra, Indian Institute of Science, Bangalore, India
* Divya Ravi, Indian Institute of Science, Bangalore, India
* Swati Singla, Google India, Bangalore, India
### 摘要
> 这篇研究论文探讨了多方计算（MPC）协议的两个传统流派，包括：(a) 在诚实大多数假设下，实现输出交付保证(god)或公正性(fairness)的协议；(b) 在不诚实的大多数假设下，实现一致或有选择的放弃 (ua, sa) 的协议。在参与者中有诚实的大多数是实现更强的god和fn概念的必要条件。虽然这两种类型的构造在文献中随处可见，但一类协议似乎无法承受另一类的威胁模型。例如，在面对不诚实的大多数时，诚实大多数协议不能保证诚实方的输入隐私，同样，不诚实大多数协议不能实现god和fn，即使只容忍一个错误，更不用说不诚实的少数人员了。这种MPC的非传统且备受追捧的承诺，被称为“两全其美”，即根据实际的腐败情况提供最佳可能的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_3](https://doi.org/10.1007/978-3-030-64840-4_3)
## MPC with Synchronous Security and Asynchronous Responsiveness.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#mpc-with-synchronous-security-and-asynchronous-responsiveness) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#mpc-with-synchronous-security-and-asynchronous-responsiveness)**
### 作者
* Chen-Da Liu-Zhang, ETH Zurich, Zurich, Switzerland
* Ueli Maurer, ETH Zurich, Zurich, Switzerland
* Julian Loss, University of Maryland, College Park, USA
* Tal Moran, IDC Herzliya, Herzliya, Israel
* Daniel Tschudi, Concordium, Zurich, Switzerland
### 摘要
> 安全多方计算（Secure MPC）有同步和异步两种范例。同步协议能够容忍更多的故障，并允许每个参与方提供其输入，但由于速度取决于网络被保守地假设了最坏情况下的延迟 \(\varDelta\)，因此它们非常缓慢。相比之下，异步协议允许参与方根据实际网络速度快速获取输出，这种响应速度称为“响应性”，但不可避免地降低了韧性

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_4](https://doi.org/10.1007/978-3-030-64840-4_4)
## Secure MPC: Laziness Leads to GOD.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#secure-mpc-laziness-leads-to-god) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#secure-mpc-laziness-leads-to-god)**
### 作者
* Saikrishna Badrinarayanan, Visa Research, Palo Alto, USA
* Aayush Jain, UCLA and Center for Encrypted Functionalities, Los Angeles, USA
* Nathan Manohar, UCLA and Center for Encrypted Functionalities, Los Angeles, USA
* Amit Sahai, UCLA and Center for Encrypted Functionalities, Los Angeles, USA
### 摘要
> 我们在安全多方计算的背景下提出了“诚实但懒惰”方案的概念，重新审视了多密钥全同态加密方案(MFHE)。在MFHE中，使用公钥\(pk_i\)加密的任何消息都可以“扩展”，以便生成的密文相对于一组公钥\((pk_1,..,pk_n)\)进行加密。这些扩展的密文可以按照任何电路进行同态计算，生成密文\(ct\)。然后，可以使用与公钥\(pk_i\)对应的密钥\(sk_i\)部分地解密此密文\(ct\)，生成部分解密\(p_i\)。最后，这些部分解密\(\{p_{i}\}_{i\in [n]}\)可以组合以恢复输出。然而，这种MFHE的定义只适用于n个访问结构，因此系统中的每个节点都是故障点。在“诚实但懒惰”方案的背景下，需要能够在仅给出部分解密的情况下进行解密（比如说n个中的t个）。为了解决这个问题，我们引入了一种新的多密钥全同态加密的概念，旨在处理可以重构输出的任意访问模式。我们称之为门限多密钥全同态加密方案(TMFHE)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_5](https://doi.org/10.1007/978-3-030-64840-4_5)
## Asymptotically Good Multiplicative LSSS over Galois Rings and Applications to MPC over $\mathbb {Z}/p^k\mathbb {Z} $.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#asymptotically-good-multiplicative-lsss-over-galois-rings-and-applications-to-mpc-over-mathbb-z-p-k-mathbb-z) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#asymptotically-good-multiplicative-lsss-over-galois-rings-and-applications-to-mpc-over-mathbb-z-p-k-mathbb-z)**
### 作者
* Mark Abspoel, Centrum Wiskunde and Informatica (CWI), Amsterdam, The Netherlands
* Ronald Cramer, Centrum Wiskunde and Informatica (CWI), Amsterdam, The Netherlands
* Chen Yuan, Centrum Wiskunde and Informatica (CWI), Amsterdam, The Netherlands
* Ronald Cramer, Mathematisch Instituut, Leiden University, Leiden, The Netherlands
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Daniel Escudero, Aarhus University, Aarhus, Denmark
* Matthieu Rambaud, Telecom Paris, Institut Polytechnique de Paris, Paris, France
* Chaoping Xing, School of Electronic Information and Electric Engineering, Shanghai Jiaotong University, Shanghai, China
### 摘要
> 我们研究具有良好渐进通信复杂度的信息论多方计算（MPC）协议，其运行在环 \(\mathbb {Z}/p^k\mathbb {Z} \) 上并涉及大量玩家。这类协议的重要组成部分是算术秘密共享，即具有乘法性质的线性秘密共享方案。通常获得这种方案的标准方法是利用一族线性码 C，使得 C、\(C^\perp \) 和 \(C^2\) 在渐进情况下表现良好（强乘法性）。在我们这里，如果平方码 \(C^2\) 不是整个空间，即至少具有余维度为 1（乘法性质），就足够满足我们的目的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_6](https://doi.org/10.1007/978-3-030-64840-4_6)
## Towards Efficiency-Preserving Round Compression in MPC - Do Fewer Rounds Mean More Computation?
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#towards-efficiency-preserving-round-compression-in-mpc-do-fewer-rounds-mean-more-computation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#towards-efficiency-preserving-round-compression-in-mpc-do-fewer-rounds-mean-more-computation)**
### 作者
* Prabhanjan Ananth, University of California, Santa Barbara, USA
* Arka Rai Choudhuri, Johns Hopkins University, Baltimore, USA
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
### 摘要
> 减少安全多方计算（MPC）协议中的交互轮数一直是许多研究的主题。减少轮数的一种常用方法是构建轮压缩编译器。轮压缩编译器是一种将高度交互型协议转化为拥有较少轮次的协议的方法。传统上，轮压缩编译器的设计注重于保护底层协议的安全性质，但对于保持其计算和通信效率并未给予足够关注。事实上，最近提出的轮压缩编译器能够产生轮最优的MPC协议，但也带来了较大的计算和通信开销。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_7](https://doi.org/10.1007/978-3-030-64840-4_7)
## Circuit Amortization Friendly Encodingsand Their Application to Statistically Secure Multiparty Computation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#circuit-amortization-friendly-encodingsand-their-application-to-statistically-secure-multiparty-computation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#circuit-amortization-friendly-encodingsand-their-application-to-statistically-secure-multiparty-computation)**
### 作者
* Anders Dalskov, Aarhus University, Aarhus, Denmark
* Eduardo Soria-Vazquez, Aarhus University, Aarhus, Denmark
* Eysa Lee, Northeastern University, Boston, USA
### 摘要
> 在CRYPTO 2018会议上，Cascudo等人引入了逆乘法友好嵌入（RMFEs）。这些是一种机制，可以在域\(\mathbb{F}_q\)上成本为一次电路评估的情况下，在域\(\mathbb{F}_{q^d}\)上计算相同算术电路的\(\delta\)个并行评估，其中\(\delta < d\)。由于这个不等式，当协议要求在\(\mathbb{F}_{q^d}\)上工作，但只对\(\mathbb{F}_q\)上的计算感兴趣时，RMFEs是一个有用的工具。在这项工作中，我们引入了电路摊销友好编码（CAFEs），它们在考虑具体效率的同时推广了RMFEs。对于一个Galois环\(R = GR(2^k,d)\)，CAFEs允许以一次安全乘法的代价，在\(\mathbb{Z}_{2^k}\)上计算特定电路。我们提出了三种CAFE示例，将其应用于Abspoel等人在\(\mathbb{Z}_{2^k}\)上通过Galois环进行MPC的协议（TCC 2019）。我们的协议允许在不同的CAFEs之间以及\(GR(2^k,d)\)和\(\mathbb{F}_{2^d}\)之间进行高效切换，同时在两个环中保持CAFE。这种适应性可实现效率的提高，例如机器学习应用，可以将其表示为在\(\mathbb{Z}_{2^k}\)上高度并行的电路，然后进行位操作。根据我们技术实施的估计，使用我们的技术相比Abspoel等人的协议（TCC 2019），SVM在并行评估250个图像时可以更高效地提升\(\times 7\)倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_8](https://doi.org/10.1007/978-3-030-64840-4_8)
## Efficient Fully Secure Computation via Distributed Zero-Knowledge Proofs.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#efficient-fully-secure-computation-via-distributed-zero-knowledge-proofs) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#efficient-fully-secure-computation-via-distributed-zero-knowledge-proofs)**
### 作者
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Niv Gilboa, Ben-Gurion Univeristy, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Ariel Nof, Technion, Haifa, Israel
### 摘要
> 安全计算协议使得互不信任的各方能够在不透露除输出以外的私人输入的情况下计算函数。特别是，具有完全安全性（也称为保证输出交付）的协议可以保护免受拒绝服务攻击，保证诚实方获得正确输出。当存在诚实多数时，可以实现此功能，并且已经进行了大量研究以实现具有良好渐进和具体效率的完全安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_9](https://doi.org/10.1007/978-3-030-64840-4_9)
## Efficient and Round-Optimal Oblivious Transfer and Commitment with Adaptive Security.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#efficient-and-round-optimal-oblivious-transfer-and-commitment-with-adaptive-security) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#efficient-and-round-optimal-oblivious-transfer-and-commitment-with-adaptive-security)**
### 作者
* Ran Canetti, Boston University, Boston, USA
* Pratik Sarkar, Boston University, Boston, USA
* Xiao Wang, Northwestern University, Evanston, USA
### 摘要
> 我们在常见随机字符串（CRS）模型中构建了最高效的两轮自适应安全的比特OT方案。该方案在决策性Diffie-Hellman（DDH）假设下具有UC安全性。它需要\(\mathcal {O}(1)\)次指数运算和发送\(\mathcal {O}(1)\)个群元素，而现有技术需要\(\mathcal {O}(\kappa ^2)\)次指数运算并传输\(\text {poly}(\kappa )\)比特，其中\(\kappa\)是计算安全参数。在此过程中，我们还获得了其他几种高效的基于DDH的UC安全OT协议：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_10](https://doi.org/10.1007/978-3-030-64840-4_10)
## ALBATROSS: Publicly AttestabLe BATched Randomness Based On Secret Sharing.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#albatross-publicly-attestable-batched-randomness-based-on-secret-sharing) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#albatross-publicly-attestable-batched-randomness-based-on-secret-sharing)**
### 作者
* Ignacio Cascudo, IMDEA Software Institute, Madrid, Spain
* Bernardo David, IT University of Copenhagen, Copenhagen, Denmark
### 摘要
> 在本文中，我们介绍了ALBATROSS，这是一系列具有保证输出交付和公共验证的多方随机生成协议，可以通过承受腐败度来大大改善分摊计算复杂性。我们的基本独立协议基于公开可验证的秘密共享（PVSS），并且在决策性Diffie-Hellman（DDH）难度假设下，在随机预言机模型下是安全的。我们还解决了构建普遍可组合的随机信标的重要问题，展示了两个Albatross的UC版本：一个基于简单的UC NIZK，另一个则基于新颖的高效“指定验证器”同态承诺。有趣的是，后者可以从全局随机预言机下的较弱的计算Diffie-Hellman（CDH）假设中实例化。对于包含n个参与方的ALBATROSS执行，其中最多有t =（1/2-epsilon）· n是腐败的，常数ε> 0，它将生成Θ（n ^ 2）个均匀随机值，并且每个随机值的摊销成本为Θ（log n）次幂运算。我们显着改进了SCRAPE协议（Cascudo和David，ACNS 17），它需要每个参与方进行Θ（n ^ 2）次幂运算才能生成一个均匀随机值。这主要通过两种技术实现：首先，使用打包的Shamir秘密共享进行PVSS；其次，使用线性t-弹性函数（通过基于快速傅里叶变换的算法计算）来提高随机性提取。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_11](https://doi.org/10.1007/978-3-030-64840-4_11)
## Secret-Shared Shuffle.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#secret-shared-shuffle) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#secret-shared-shuffle)**
### 作者
* Melissa Chase, Microsoft Research, Redmond, USA
* Esha Ghosh, Microsoft Research, Redmond, USA
* Oxana Poburinnaya, University of Rochester/Ligero Inc., Rochester, USA
### 摘要
> 生成一个混洗数据集的可加密分享，使得任何一方都不知道其被排列的顺序，是许多协议的基本构建块，例如安全协同过滤、随机排序以及基于集合交集的安全函数评估。传统方法要么涉及昂贵的基于公钥的加密，要么使用对称加密在排列网络上进行处理。虽然基于公钥的解决方案在带宽效率上优秀，但计算密集。而基于排列网络的构造则受通信限制，尤其是在数据集包含大元素时，例如在机器学习环境中的特征向量。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_12](https://doi.org/10.1007/978-3-030-64840-4_12)
## Adaptively Secure Inner Product Encryption from LWE.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#adaptively-secure-inner-product-encryption-from-lwe) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#adaptively-secure-inner-product-encryption-from-lwe)**
### 作者
* Shuichi Katsumata, AIST, Tokyo, Japan
* Shota Yamada, AIST, Tokyo, Japan
* Ryo Nishimaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
### 摘要
> 属性基加密（ABE）是一种先进的加密方案，允许将访问策略嵌入到密钥和密文中。目前，我们已经有了支持基于双线性映射和格的困难假设的多种类型策略的ABE。但是，基于这两种假设的ABE之间的一个区别就是前者可以实现对相当可表达的策略（例如内积、布尔公式）的自适应安全性，而后者则不行。最近，出现了两种自适应安全的基于格的ABE，改变了形势：Katsumata和Yamada（PKC'19）提出的非零内积（NIPE）加密方案以及Tsabary（CRYPTO'19）提出的用于t-CNF策略的ABE。然而，这些ABE支持的策略仍然相当有限，并未涵盖文献中研究的更有趣的策略。值得注意的是，基于格构建自适应安全的内积加密（IPE）仍然是一个未解开的问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_13](https://doi.org/10.1007/978-3-030-64840-4_13)
## Unbounded Dynamic Predicate Compositions in ABE from Standard Assumptions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#unbounded-dynamic-predicate-compositions-in-abe-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#unbounded-dynamic-predicate-compositions-in-abe-from-standard-assumptions)**
### 作者
* Nuttapong Attrapadung, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Junichi Tomida, NTT Corporation, Tokyo, Japan
### 摘要
> 在Eurocrypt'19上，Attrapadung提出了几个转换方法，它们可以动态地组合一组针对简单谓词的属性基加密（ABE）方案，形成一个新的、更具表现力的谓词的 ABE 方案。由于其组合的功能无限和模块化性质，许多新的 ABE 方案可以以系统的方式获得。然而，他的方法严重依赖于q型假设，这是不标准的。从标准假设中设计出如此强大的组合被留作一个重要的开放问题。在本文中，我们提出了一个构建ABE方案的新框架，允许它们之间进行无限和动态的谓词复合，并通过仅依靠标准矩阵Diffie-Hellman（MDDH）假设来证明这些复合ABE的自适应安全性将得到保障。这样解决了Attrapadung提出的开放问题。至于应用，我们获得了各种ABE，在标准假设下这是第一次实例化。这包括以下在MDDH下自适应安全的布尔公式的大宇宙ABE:

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_14](https://doi.org/10.1007/978-3-030-64840-4_14)
## Succinct and Adaptively Secure ABE for ABP from k-Lin.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#succinct-and-adaptively-secure-abe-for-abp-from-k-lin) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#succinct-and-adaptively-secure-abe-for-abp-from-k-lin)**
### 作者
* Huijia Lin, University of Washington, Seattle, USA
* Ji Luo, University of Washington, Seattle, USA
### 摘要
> 我们提出了基于k-Lin配对群的算术分支程序的简洁自适应安全属性加密(ABE)方案。我们的键策略ABE方案具有与属性长度无关的恒定大小的密文，而我们的密文策略ABE方案具有恒定大小的密钥。我们的方案改进了[Tomida和Attrapadung，ePrint '20]中最近的简洁ABE方案，该方案只处理布尔公式。所有其他之前的简洁ABE方案要么仅实现选择性安全性，要么依赖于q型假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_15](https://doi.org/10.1007/978-3-030-64840-4_15)
## Inner-Product Functional Encryption with Fine-Grained Access Control.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#inner-product-functional-encryption-with-fine-grained-access-control) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#inner-product-functional-encryption-with-fine-grained-access-control)**
### 作者
* Michel Abdalla, DIENS, École normale supérieure, CNRS, PSL University, Paris, France
* Michel Abdalla, Inria, Paris, France
* Dario Catalano, Dipartimento di Matematica e Informatica, Università di Catania, Catania, Italy
* Romain Gay, IBM Zurich, Zurich, Switzerland
* Bogdan Ursu, Department of Computer Science, ETH Zurich, Zurich, Switzerland
### 摘要
> 我们构建了新的功能加密方案，将基于属性的加密的访问控制功能与对加密数据执行线性操作的可能性相结合。虽然这样的原语可以很容易地从全功能的功能加密方案中实现，但我们结果有趣的地方在于我们的方案同时实现了以下所有特性。它们是公钥的、高效的，并且可以在标准和已经确立的假设下（如LWE或配对假设）证明安全性。此外，在允许对手获取功能密钥解密挑战密文的情况下，安全性是得到保证的。我们的第一个结果是两个功能加密方案，适用于允许用户在加密数据中嵌入策略（通过单调跨度程序表示）的函数族，以便可以生成功能密钥来计算后者上的加权和。这两个方案都是基于配对的，并且非常通用：它们将Crypto 2016中用于内积的ALS功能加密方案与任何依赖于双系统加密方法的基于属性的加密方案相结合。作为额外的奖励，它们免费提供简单而优雅的多输入扩展，从而扩大了这些方案的应用范围。在我们的设置中，多输入是一个特别理想的特性，因为它通过允许用户将不同的访问策略关联到加密数据的不同部分，从而提供了更精细的访问控制。我们的第二个结果是基于身份的内积功能加密方案，来自格。这是通过将现有的格IBE方案与经过调整的基于LWE的ALS变体巧妙地结合实现的。我们指出从格获得更丰富形式的访问控制存在内在的技术瓶颈。从概念上讲，我们所有的结果都可以被看作进一步证明，在标准假设和很少的计算开销下，可以实现更具表达力的功能加密形式。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_16](https://doi.org/10.1007/978-3-030-64840-4_16)
## MoniPoly - An Expressive q-SDH-Based Anonymous Attribute-Based Credential System.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#monipoly-an-expressive-q-sdh-based-anonymous-attribute-based-credential-system) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#monipoly-an-expressive-q-sdh-based-anonymous-attribute-based-credential-system)**
### 作者
* Syh-Yuan Tan, School of Computing, Newcastle University, Newcastle upon Tyne, UK
* Thomas Groß, School of Computing, Newcastle University, Newcastle upon Tyne, UK
### 摘要
> 现代基于属性的匿名凭证（ABC）系统通过特殊编码获得对逻辑语句进行表达性强且高效的显示证明的好处。该技术最初由Camenisch和Groß提出，他们构建了一个基于SRSA的ABC系统，其中采用了编码为素数的属性，可以提供高效的AND、OR和NOT证明。虽然其他ABC框架也采用了类似的构造方法，但Camenisch-Groß ABC迄今为止一直是最具表达力和渐近最高效的证明系统，即使它受到了信任消息空间设置和将有限集属性编码为素数的固有限制。在本文中，我们结合了一种新的集合承诺方案和基于SDH的签名方案，提出了一个可证明安全的ABC系统，支持复杂语句的显示证明。这个构造不仅比现有方法更具表达力，而且在不受限制的属性空间下也非常高效，因为它的ECC协议只需要验证者进行恒定数量的双线性配对操作，而不需要证明者进行任何配对操作。此外，我们引入了针对自适应主动攻击和并发攻击的冒充和不可关联性的强安全模型，以实现我们的ABC系统的表达力，并与现有方案进行系统比较。在此基础上，我们首次全面形式地证明了具有表达性显示证明的ABC系统的安全性。具体而言，基于q-(co-)SDH假设，我们通过紧密约减来证明了针对冒充攻击的安全性。除了可能具有独立兴趣的集合承诺方案之外，我们的安全模型还可以为未来ABC系统的设计提供基础。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_17](https://doi.org/10.1007/978-3-030-64840-4_17)
## The Direction of Updatable Encryption Does Not Matter Much.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#the-direction-of-updatable-encryption-does-not-matter-much) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#the-direction-of-updatable-encryption-does-not-matter-much)**
### 作者
* Yao Jiang, Norwegian University of Science and Technology, NTNU, Trondheim, Norway
### 摘要
> 可更新的加密方案允许在密文上进行密钥轮换。客户端将加密数据的存储外包给云服务器，可以更改其加密密钥。云服务器可以仅使用客户端提供的令牌将存储的密文更新为新密钥。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_18](https://doi.org/10.1007/978-3-030-64840-4_18)
## Improving Speed and Security in Updatable Encryption Schemes.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#improving-speed-and-security-in-updatable-encryption-schemes) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#improving-speed-and-security-in-updatable-encryption-schemes)**
### 作者
* Dan Boneh, Stanford University, Stanford, CA, USA
* Saba Eskandarian, Stanford University, Stanford, CA, USA
* Sam Kim, Stanford University, Stanford, CA, USA
* Sam Kim, Simons Institute for the Theory of Computing, Berkeley, CA, USA
* Maurice Shih, Cisco Systems, San Jose, CA, USA
### 摘要
> 周期性密钥轮换是一种常见的做法，旨在限制加密密钥的长期使用。密钥轮换指的是在新密钥下重新加密已加密的内容，并用新的密文覆盖旧的密文的过程。当加密数据存储在云端时，密钥轮换可能非常昂贵：它可能需要从云端下载整个加密内容，在客户端机器上重新加密，然后将新的密文上传回云端。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_19](https://doi.org/10.1007/978-3-030-64840-4_19)
## CCA Updatable Encryption Against Malicious Re-encryption Attacks.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#cca-updatable-encryption-against-malicious-re-encryption-attacks) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#cca-updatable-encryption-against-malicious-re-encryption-attacks)**
### 作者
* Long Chen, New Jersey Institute of Technology, Newark, NJ, 07102, USA
* Yanan Li, New Jersey Institute of Technology, Newark, NJ, 07102, USA
* Qiang Tang, New Jersey Institute of Technology, Newark, NJ, 07102, USA
### 摘要
> 可更新加密（UE）是一种有吸引力的基本原理，它允许将外包的加密数据的秘密密钥定期更新为新密钥。已经存在一些优雅的作品研究了各种安全属性。我们注意到现有（密文依赖的）可更新加密安全模型中存在几个主要问题，尤其是完整性和CCA安全性。在这些模型中，攻击者只能请求服务器对诚实生成的密文进行重新加密，而在实践中，攻击者可能试图随意向服务器插入任意密文。这些畸形密文可能会被更新并被对手利用，从而引发严重的安全问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_20](https://doi.org/10.1007/978-3-030-64840-4_20)
## Determining the Core Primitive for Optimally Secure Ratcheting.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#determining-the-core-primitive-for-optimally-secure-ratcheting) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#determining-the-core-primitive-for-optimally-secure-ratcheting)**
### 作者
* Fatih Balli, LASEC, École polytechnique fédérale de Lausanne, Ecublens, Switzerland
* Serge Vaudenay, LASEC, École polytechnique fédérale de Lausanne, Ecublens, Switzerland
* Paul Rösler, Chair for Network and Data Security, Ruhr University Bochum, Bochum, Germany
### 摘要
> 尽管之前"棘轮"主要因实用的现实世界协议而引起了大家的关注，但最近有一系列的工作从理论的角度研究了"棘轮"作为一个原始概念。在这条线上的文献，在追求"棘轮"能够希望的最强安全性的同时，使用了强大但效率低下的可更新密钥原始内容，这些内容基于分层身份基础加密（HIBE）。由于这些工作中没有一项正式证明使用这些构建模块的必要性

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_21](https://doi.org/10.1007/978-3-030-64840-4_21)
## Cryptography from One-Way Communication: On Completeness of Finite Channels.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#cryptography-from-one-way-communication-on-completeness-of-finite-channels) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#cryptography-from-one-way-communication-on-completeness-of-finite-channels)**
### 作者
* Shweta Agrawal, Indian Institute of Technology Madras, Chennai, India
* Yuval Ishai, Technion, Haifa, Israel
* Eyal Kushilevitz, Technion, Haifa, Israel
* Varun Narayanan, Tata Institute of Fundamental Research, Mumbai, India
* Vinod Prabhakaran, Tata Institute of Fundamental Research, Mumbai, India
* Manoj Prabhakaran, Indian Institute of Technology Bombay, Mumbai, India
* Alon Rosen, IDC Herzliya, Herzliya, Israel
### 摘要
> Garg等人（Crypto 2015）在非交互设置中开展了在嘈杂信道上的密码协议研究，即仅有一方发言的情况。这项工作留下了一个重要问题，即有限信道的完备性，其输入和输出字母表不随所需的安全级别增长。在这项工作中，我们通过获得以下结果来解决这个问题：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_22](https://doi.org/10.1007/978-3-030-64840-4_22)
## Succinct Functional Commitment for a Large Class of Arithmetic Circuits.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#succinct-functional-commitment-for-a-large-class-of-arithmetic-circuits) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#succinct-functional-commitment-for-a-large-class-of-arithmetic-circuits)**
### 作者
* Helger Lipmaa, Simula UiB, Bergen, Norway
* Kateryna Pavlyk, Simula UiB, Bergen, Norway
### 摘要
> 一个简明的功能承诺（SFC）方案用于电路类\( \mathbf{CC} \)，使得对于任何电路\( \mathcal{C} \in \mathbf{CC} \)，承诺者可以首先简要承诺到一个向量\(\varvec{\alpha}\)，然后在开放阶段简洁地打开对\( \mathcal{C}(\varvec{\alpha}, \varvec{\beta}) \)的承诺，其中验证者在开放时选择\(\varvec{\beta}\)。不幸的是，已知只有针对严格受限的函数类（如内积类）的SFC承诺方案。通过非黑盒使用SNARK构造技术，我们提出了一个适用于大型半稀疏多项式类的SFC方案。新的SFC方案可用于高效地实现稀疏多项式和汇总各种有趣的SFC（例如向量承诺和多项式承诺）方案。新方案在计算超级假设的新实例下具有评价绑定性。我们对新假设进行了彻底分析。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_23](https://doi.org/10.1007/978-3-030-64840-4_23)
## Crowd Verifiable Zero-Knowledge and End-to-End Verifiable Multiparty Computation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#crowd-verifiable-zero-knowledge-and-end-to-end-verifiable-multiparty-computation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#crowd-verifiable-zero-knowledge-and-end-to-end-verifiable-multiparty-computation)**
### 作者
* Foteini Baldimtsi, George Mason University, Fairfax, USA
* Aggelos Kiayias, The University of Edinburgh, Edinburgh, UK
* Thomas Zacharias, The University of Edinburgh, Edinburgh, UK
* Aggelos Kiayias, IOHK, Hong Kong, China
* Bingsheng Zhang, Zhejiang University, Hangzhou, China
* Bingsheng Zhang, Alibaba-Zhejiang University Joint Research Institute of Frontier Technologies, Hangzhou, China
### 摘要
> 多方安全计算（MPC）协议的审计需要由一个不被信任的第三方来验证协议的传输记录。在这项工作中，我们介绍了端到端可验证的MPC（VMPC）的概念，即要求验证在所有服务器、可信设置原语以及MPC协议的输入提供用户使用的所有客户系统都被对手控制的情况下，能够提供正确性保证。为了实现VMPC，我们在零知识协议的环境中引入了一个称为众包可验证零知识（CVZK）的新概念。CVZK协议使得证明者可以说服一组验证者相信某个陈述，即使其中每个验证者对验证所贡献的熵很小，并且其中一些受到对手的控制。在给定CVZK的情况下，我们提出了一个基于离散对数相关假设的VMPC协议。在VMPC旨在抵御的高度恶劣环境下，无法确保完美的正确性，因此我们研究了在我们的框架中可行的函数和可验证关系类别，并提出了一些可能应用VMPC实现底层函数的示例。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_24](https://doi.org/10.1007/978-3-030-64840-4_24)
## Non-interactive Composition of Sigma-Protocols via Share-then-Hash.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#non-interactive-composition-of-sigma-protocols-via-share-then-hash) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#non-interactive-composition-of-sigma-protocols-via-share-then-hash)**
### 作者
* Masayuki Abe, NTT Secure Platform Laboratories, Musashino, Japan
* Miguel Ambrona, NTT Secure Platform Laboratories, Musashino, Japan
* Andrej Bogdanov, Chinese University of Hong Kong, Shatin, Hong Kong
* Miyako Ohkubo, Security Fundamentals Laboratory, CSR, NICT, Tokyo, Japan
* Alon Rosen, Herzliya Interdisciplinary Center, Herzliya, Israel
### 摘要
> 局部知识的证明证明了对于给定的陈述集合\(x_1,\dots ,x_n\)拥有某些见证人的能力。Cramer、Damgård和Schoenmakers（CDS）使用了"原子"协议对个别陈述\(x_i\)进行证明，通过让证明者随机秘密共享验证者的挑战，并将这些共享作为原子协议的挑战。这种简单而又极具影响力的转换已被广泛应用于许多领域，从匿名凭证到环签名。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_25](https://doi.org/10.1007/978-3-030-64840-4_25)
## Succinct Diophantine-Satisfiability Arguments.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#succinct-diophantine-satisfiability-arguments) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#succinct-diophantine-satisfiability-arguments)**
### 作者
* Patrick Towa, IBM Research, Zurich, Switzerland
* Patrick Towa, DIENS, École Normale Supérieure, CNRS, PSL University, Paris, France
* Damien Vergnaud, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
* Patrick Towa, Institut Universitaire de France, Paris, France
* Damien Vergnaud, Institut Universitaire de France, Paris, France
### 摘要
> 一个迪欧凡提方程是一个多变量多项式方程，其系数为整数，如果它有一个解使得所有未知数取整数值，则称其为可满足的。戴维斯、普特南、罗宾森和马蒂亚塞维奇证明了一般的迪欧凡提可满足性问题是不可判定的（对希尔伯特的第十个问题给出了否定答案），但如果对一个证明者来说，一个解是已知的，仍然可以在零知识的情况下证明对解的知识。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_26](https://doi.org/10.1007/978-3-030-64840-4_26)
## Individual Simulations.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#individual-simulations) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#individual-simulations)**
### 作者
* Yi Deng, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yi Deng, State Key Laboratory of Cryptology, Beijing, China
* Yi Deng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 我们开发了一种个体模拟技术，明确利用给定对手功能的特定属性/结构。通过使用这种模拟技术，我们得到了以下结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_27](https://doi.org/10.1007/978-3-030-64840-4_27)
## KVaC: Key-Value Commitments for Blockchains and Beyond.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#kvac-key-value-commitments-for-blockchains-and-beyond) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#kvac-key-value-commitments-for-blockchains-and-beyond)**
### 作者
* Shashank Agrawal, Western Digital Research, Milpitas, USA
* Srinivasan Raghuraman, Visa Research, Palo Alto, USA
### 摘要
> 随着区块链的增长，验证新交易变得越来越消耗资源。为了解决这个问题，需要发现一种紧凑的区块链（有效）状态编码，允许进行高效的成员证明和更新。对于基于账户的加密货币，可以将状态表示为键-值映射，其中键是账户地址，值包括账户余额、nonce等。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_28](https://doi.org/10.1007/978-3-030-64840-4_28)
## Catalic: Delegated PSI Cardinality with Applications to Contact Tracing.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#catalic-delegated-psi-cardinality-with-applications-to-contact-tracing) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#catalic-delegated-psi-cardinality-with-applications-to-contact-tracing)**
### 作者
* Thai Duong, Google LLC, Menlo Park, USA
* Duong Hieu Phan, LTCI, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Ni Trieu, Arizona State University, Tempe, USA
### 摘要
> 私有集合交集基数（PSI-CA）允许两个参与方，每个持有一个项目集合，了解这些集合的交集大小，而不泄露任何其他信息。据我们所知，这项工作提出了第一个允许一方委托不可信服务器进行PSI-CA计算的协议。在我们委托的PSI-CA协议的核心是一种新的忽视分布式密钥 PRF（Odk-PRF）抽象，它可能具有独立的价值。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_29](https://doi.org/10.1007/978-3-030-64840-4_29)
