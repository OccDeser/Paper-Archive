# Asiacrypt[2020-3]
## MOTIF: (Almost) Free Branching in GMW - Via Vector-Scalar Multiplication.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#motif-almost-free-branching-in-gmw-via-vector-scalar-multiplication) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#motif-almost-free-branching-in-gmw-via-vector-scalar-multiplication)**
### 作者
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
* Stanislav Peceny, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> MPC功能在高级语言中越来越多地被指定，其中包含了大量控制流程结构，如条件语句。目前，具体高效的MPC协议是基于电路的，必须以高代价评估所有条件分支以隐藏所取的分支。
> 
> Goldreich-Micali-Wigderson（简称GMW）协议是一种基于电路的基础技术，可实现p个参与方的MPC，并对最多\(p-1\)个半诚实的破坏进行安全保护。尽管GMW需要的通信轮次与计算电路的深度成正比，但在许多自然环境中非常有效。
> 
> 我们的主要贡献是\(\mathtt {MOTIF}\)（最小化IF的OT），这是一种新颖的GMW扩展，通过在分支之间分摊无忧传输（OT）的成本，几乎免费地评估条件分支。也就是说，我们通过将它们表示为单个廉价的向量-标量乘法（\(\mathtt {VS}\)）门，同时评估多个相互独立的\(\mathtt {AND}\)门，其中每个门来自一个互斥分支。
> 
> 对于具有b个分支的2PC，我们可以使用仅需2个b位秘密的1-out-of-2 OT同时评估最多b个\(\mathtt {AND}\)门。这是相对于1位秘密的现有技术中2b个1-out-of-2 OT的约\(\approx b\)倍的改进。我们关于因子b的改进也适用于多方设置：b个\(\mathtt {AND}\)门仅使用\(p(p-1)\)个1-out-of-2 OT的b位秘密。
> 
> 我们实施了我们的方法并报告了它的性能。对于具有16个分支的2PC和比较两个长度为65000的比特串的电路，\(\mathtt {MOTIF}\)在通信方面胜过标准GMW，大约为\(\approx \)9.4\(\times\)。总的挂钟时间根据网络设置的不同提高了4.1-9.2\(\times\)倍。
> 
> 我们的工作是在半诚实模型下进行的，可以容忍除了一个破坏之外的所有破坏。

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
> 在保护隐私的情况下进行数据计算变得越来越重要。多方计算（MPC）和同态加密（HE）是两种用于保护隐私计算的密码学技术。在这项研究中，我们开发了高效的UC安全多方协议，用于矩阵乘法和二维卷积。我们建立在SPDZ框架的基础上，并集成了最先进的矩阵乘法HE算法。我们的协议仅在输入和输出维度上实现了线性通信成本，而不在乘法操作的数量上。我们消除了SPDZ的“三重牺牲”步骤，以提高效率并简化零知识证明。我们实施了我们的协议，并将其与SPDZ LowGear变体（Keller等人，欧洲密码学会议’18）进行了基准测试。对于乘法计算两个大小为128的方阵，我们将通信成本从1.54 GB降低到12.46 MB，提高了两个数量级，且随着矩阵大小的增加效果更加显著。对于评估ResNet-50神经网络的所有卷积层，通信成本从5 TB降低到41 GB。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_2](https://doi.org/10.1007/978-3-030-64840-4_2)
## On the Exact Round Complexity of Best-of-Both-Worlds Multi-party Computation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#on-the-exact-round-complexity-of-best-of-both-worlds-multi-party-computation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#on-the-exact-round-complexity-of-best-of-both-worlds-multi-party-computation)**
### 作者
* Arpita Patra, Indian Institute of Science, Bangalore, India
* Divya Ravi, Indian Institute of Science, Bangalore, India
* Swati Singla, Google India, Bangalore, India
### 摘要
> 传统的多方计算（MPC）协议有两个主要流派：（a）在诚实者多数的情况下实现输出保证（\(\textsf {god}\)）或公平性（\(\textsf {fn}\)）的协议；（b）在不诚实者多数的情况下实现一致性或选择性中止（\(\textsf {ua}\)、\(\textsf {sa}\)）的协议。在诚实者多数的情况下，诚实者占多数对于实现更强的 \(\textsf {god}\) 或 \(\textsf {fn}\) 是必要的。虽然文献中存在各种类型的协议构造，但一类协议的威胁模型似乎无法抵御另一类的威胁模型。例如，诚实者多数的协议无法在面对不诚实者多数时保证诚实参与方输入的隐私安全，而不诚实者多数的协议无法实现 \(\textsf {god}\) 和 \(\textsf {fn}\)，即使仅容忍一个污损，更不用说不诚实者少数的情况。非传统但广受追捧的MPC类别，称为“双赢”（BoBW），承诺根据实际的腐败情景提供最佳的安全性。
> 
> 本研究几乎确定了两类BoBW协议在诚实者多数设置下所实现的安全性的确切轮数复杂性，即分别为 \(\textsf {god}\) 和 \(\textsf {fn}\)，在没有设置（普通模型）、公共设置（CRS）和私人设置（CRS + PKI或简称PKI）的假设下。前者的类别需要参与方的数量严格大于诚实者多数和不诚实者多数设置的损害限制之和，才存在可行的解决方案。将目标降级为诚实者多数设置下可实现的次佳安全性，后者则无需这样的限制。
> 
> 假设存在一种具有逐对私有通道和广播通道的网络，我们证明在“没有设置”和“公共和私人设置”的情况下，BoBW MPC类别在 \(\textsf {fn}\) 下需要 5 轮和 3 轮是必要且充分的。对于 BoBW MPC 类别中的 \(\textsf {god}\)，我们证明在公共设置的情况下需要 3 轮，在私人设置的情况下需要 2 轮。在没有设置的情况下，我们证明了 5 轮的充分性，而已知的下界是 4 轮。我们所有的上界都基于多项式时间假设，并假设黑盒模拟。随着不同的可行性条件，这些类别在所需轮数方面有所不同。在某些情况下，边界有所不同，但令人欣慰的是，与诚实者多数和不诚实者多数设置的需求最多相差一个。我们的结果在将中止和公平性安全升级为可识别的情况下仍

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
> 安全MPC的两个范式是同步协议和异步协议。虽然同步协议能够容忍更多的损坏，并允许每个参与方提供输入，但由于速度取决于网络保守假设的最坏延迟\(\varDelta \)，因此非常慢。相反，异步协议允许参与方根据实际网络情况快速获得输出，这种特性称为响应性，但不可避免地具有更低的弹性，并且网络连接缓慢的参与方无法提供输入。
> 
> 人们自然而然地想知道是否有可能利用同步MPC协议实现响应性，从而获得两个范式的优势：具有响应性的完全安全性和高达t个损坏的扩展安全性（完全安全性或一致中止的安全性），以及高达\(T \ge t\)个损坏的扩展安全性（完全安全性或一致中止的安全性）而没有响应性。我们通过提供匹配的可行性和不可能性结果来解决这个问题：
> 
> 对于扩展安全性为一致中止的情况，只有当\(T + 2t < n\)时才存在MPC协议。
> 
> 对于扩展安全性为完全安全性的情况，只有当\(T < \frac{n}{2}\)且\(T + 2t < n\)时才存在MPC协议。特别地，设置\(t = \frac{n}{4}\)可以实现完全安全的MPC，其正直多数还能获得相当大的响应性。

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
> 在安全多方计算的背景下，我们对多密钥全同态加密 (MFHE) 方案的概念进行了重新审视，这是受到我们所称的“诚实但懒惰”的参与方的激励。在MFHE中，使用公钥\(pk_i\)加密的任何消息都可以“扩展”，使得生成的密文相对于一组公钥\((pk_1,..,pk_n)\)进行加密。这样扩展的密文可以通过任何电路进行同态评估，生成密文\(ct\)。然后，可以使用秘密密钥\(sk_i\)（对应于公钥\(pk_i\)）对此密文\(ct\)进行部分解密，产生部分解密\(p_i\)。最后，可以将这些部分解密\(\{p_{i}\}_{i\in [n]}\)组合起来恢复输出。然而，这个MFHE的定义只适用于n中的n个访问结构，因此系统中的每个节点都是一个失败点。在“诚实但懒惰”的参与方背景下，即使只给出部分解密的子集（例如t个解密），也需要能够解密。为了解决这个问题，我们引入了一个新的多密钥全同态加密的概念，旨在处理可以重构输出的任意访问模式。我们称之为阈值多密钥全同态加密方案 (TMFHE)。
> 
> 我们的主要贡献如下：
> 
> 我们正式定义并构建了适用于任何由单调布尔公式给出的访问结构的TMFHE，假设LWE（学习短密钥问题）。
> 
> 我们构建了第一个从多项式难LWE中提取模拟证明的多串非交互式零知识证明 (NIZK)。
> 
> 我们利用TMFHE和我们的多串 NIZK，在明文模型中获得了第一个轮优化 (三轮) 的MPC协议，可以对抗恶意攻击者，或更一般地，混合攻击者（支持“诚实但懒惰”的参与方），假设LWE。
> 
> 我们的MPC协议同时实现了在可实现保证输出传递的最大破坏数下的安全性、与深度成比例的通信复杂度和可重用性。

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
> 我们研究具有良好渐近通信复杂度的多方信息理论计算（MPC）协议在环 \( \mathbb {Z}/p^k\mathbb {Z} \) 上进行，该协议适用于大量的参与方。这类协议的一个重要组成部分是算术秘密共享，即具有乘法属性的线性秘密共享方案。通常获得这些方案的标准方法是使用一个线性码族 C，使得 C, \(C^\perp \) 和 \(C^2\) 渐近良好（强乘法）。对于我们在这里的目的而言，只要平方码 \(C^2\) 不是整个空间，即至少具有余维数 1（乘法），即可满足要求。
> 
> 我们的方法是将这样一个定义在有限域 \( \mathbb {F} \) 上的码族提升到一个 Galois 环，这是一个具有 \( \mathbb {F} \) 作为其余域的局部环，并且包含 \( \mathbb {Z}/p^k\mathbb {Z} \) 作为子环，从而使得算术能够兼容这两个结构。虽然任意提升保留码的距离和对偶距离，如我们通过一个反例所证明的，但乘法性质不被保留。我们通过展示一个专用提升来解决这个问题，该提升保留了自正交性（以及距离和对偶距离），对于 \(p \ge 3\)。自正交码具有乘法性质，因此我们可以利用现有结果在域上获得良好渐近自对偶码，从而在 Galois 环上实现算术秘密共享。对于 \(p = 2\)，我们通过使用同时使用 C 和 \(C^\perp \) 的现有技术，产生了乘法性。这带来了恒定的开销。因此，我们获得了在 Galois 环上的良好渐近算术秘密共享方案。
> 
> 有了这些方案，我们将现有基于域的 MPC 协议扩展到在 \( \mathbb {Z}/p^k\mathbb {Z} \) 上进行的 MPC，其中受到的最大威胁的恶意参与方少于 \(1/2 - \varepsilon \) 的分数，其中 \( \varepsilon > 0 \) 是任意小的。我们考虑了 3 种不同的腐败模型。对于被动和主动安全以及中止的情况，我们的协议每次乘法通信 O(n) 位。对于具有确保输出传递的完全安全性，我们使用预处理模型，在线阶段每次乘法通信 O(n) 位，在离线阶段每次乘法通信 \( O(n \log n) \) 位。因此，我们获得了真正的线性位复杂度，而不需要常见的基于参与方数的环大小的假设。

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
> 减少安全多方计算（MPC）协议交互轮次的主题是许多研究的话题。减少轮次的一种流行方法是构建轮压缩编译器。轮压缩编译器是指将高度交互的协议转换为轮次较少的协议的编译器。轮压缩编译器的设计传统上关注保留底层协议的安全属性，特别地，很少关注其计算和通信效率的保留。事实上，最近的可获得轮最优MPC协议的轮压缩编译器产生了大量的计算和通信开销。
> 
> 在这项工作中，我们开始研究保持效率的轮压缩编译器，即将高度交互协议的效率优势转换到较少轮次设置的编译器。专注于诚实多数设置（具有接近最佳的不诚实门限\(\frac{1}{2}-\varepsilon\)，对于任何\(\varepsilon> 0\)），我们设计了一个新的编译器，它产生两轮（即轮次最佳的）半诚实MPC，并具有与底层（任意轮次）协议相似的通信效率。通过将我们的编译器应用于已知最有效的MPC协议，我们获得了基于单向函数的两轮半诚实协议，总通信（和每方计算）成本为\(\widetilde{O}(s+n^4)\)-相对于之前的成本为\(\widetilde{O}(n^\tau s+n^{\tau +1}d)\)的两轮协议的显着改进，其中\(\tau\ge2\)，s表示计算函数的电路的大小，d表示相应的深度。我们的结果还可以扩展到处理恶意对手，在公钥基础设施（PKI）模型中使用更强的假设或在普通模型中使用额外的轮次。
> 
> 我们方法的一个特点是所得协议中各方执行的计算量“不平衡”。我们提供证据表明在我们的情况下这是必要的。我们的不可能结果对“头脑中的MPC”范式进行了新颖的运用，该范式通常用于展示可行性结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_7](https://doi.org/10.1007/978-3-030-64840-4_7)
## Circuit Amortization Friendly Encodingsand Their Application to Statistically Secure Multiparty Computation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#circuit-amortization-friendly-encodingsand-their-application-to-statistically-secure-multiparty-computation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#circuit-amortization-friendly-encodingsand-their-application-to-statistically-secure-multiparty-computation)**
### 作者
* Anders Dalskov, Aarhus University, Aarhus, Denmark
* Eduardo Soria-Vazquez, Aarhus University, Aarhus, Denmark
* Eysa Lee, Northeastern University, Boston, USA
### 摘要
> 在CRYPTO 2018上，Cascudo等人提出了Reverse Multiplication Friendly Embeddings (RMFEs)。这是一种机制，用于在一个域\(\mathbb {F}_{q^d}\)中仅花费单一次的电路计算得到\(\delta < d\)个相同加密电路的并行评估，其中，当协议需要在\(\mathbb{F}_{q^d}\)上运作但只对\(\mathbb{F}_q\)上的计算感兴趣时，RMFEs是一种有用的工具。 在此工作中，我们引入了Circuit Amortization Friendly Encodings（CAFE），这些内容在考虑具体效率的同时推广了RMFE。对于Galois Ring \(R = GR(2^{k},d)\)，CAFE允许计算某些电路在\(\mathbb{Z}_{2^k}\)上，而其代价相当于在R中进行了一次安全乘法。我们介绍了三种CAFE实例，并将其应用于Abspoel等人（TCC 2019）提出的通过Galois环完成MPC协议，并允许在不同的CAFE之间以及在\(GR(2^{k},d)\)和\(\mathbb{F}_{2^{d}}\)之间进行计算上的有效切换。该适应性导致了例如机器学习应用程序的效率收益，其可以表示为在\(\mathbb{Z}_{2^k}\)上高度并行电路然后执行按位操作。根据我们的技术实现，我们估计使用我们的技术进行SVM可以在250张图片上高效地进行并行评估，比Abspoel等人（TCC 2019）的协议高效率多达7倍。

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
> 安全计算协议使相互不信的各方能够在仅泄露输出的情况下计算其私有输入的函数。具有完全安全性（也称为保证输出传递）的协议特别能够防止拒绝服务攻击，确保诚实方收到正确的输出。这种特性在存在诚实多数的情况下可以实现，并且已经进行了大量研究，以获得具有良好渐近和实际效率的完全安全性。
> 
> 我们提出了一种高效的协议，适用于常量数量的参与者 n，并针对\({t<n/2}\)个被损坏的参与方具有完全安全性，该协议对伪随机生成器进行黑盒使用。我们的协议评估一个在有限环 R 上（可以是有限域或\({{R={\mathbb {Z}}_{2^k}}}\)）上的算术电路 C ，其通信复杂度为每个参与方\({{\frac{3t}{2t + 1}S + o(S)}}\)个 R 元素，其中 S 是 C 中乘法门的数量（即每个门每个参与方<1.5个元素）。在半诚实模型中，只考虑次线性加性项，此协议与目前已知的最佳协议相匹配。对于较小数量的参与者 n ，相较于 Goyal 等人（Crypto 2020）最近提出的协议，在大型场上的电路方面，它提高了一个常数因子，并且与布尔电路或环电路相比，至少提高了\({{\varOmega (\log n)}}\)。
> 
> 我们的协议提供了应用 Boneh 等人（Crypto 2019）分布式零知识证明的新方法，该方法仅需要对数级通信，以在更具挑战性的情况下将半诚实协议编译成全安全协议（即有 \({t>1}\)个被损坏的参与方）。我们的协议依赖于复制的秘密共享以最小化通信并简化实现全安全性的机制。这导致计算成本随着 n 的指数增长。
> 
> 我们的主要协议基于一种新的诚实多数协议，用于通过广泛使用分布式零知识证明来验证乘法三元组的正确性。虽然该协议只达到了带放弃的较弱安全概念，但它适用于任何线性秘密共享方案，并为先前文献中的协议提供了更为简洁、更为通用和更为高效的替代方案。特别是，它可以与 Fiat-Shamir 伪随机数生成方法相结合，同时实现对数级通信复杂度和常数轮次复杂度。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_9](https://doi.org/10.1007/978-3-030-64840-4_9)
## Efficient and Round-Optimal Oblivious Transfer and Commitment with Adaptive Security.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#efficient-and-round-optimal-oblivious-transfer-and-commitment-with-adaptive-security) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#efficient-and-round-optimal-oblivious-transfer-and-commitment-with-adaptive-security)**
### 作者
* Ran Canetti, Boston University, Boston, USA
* Pratik Sarkar, Boston University, Boston, USA
* Xiao Wang, Northwestern University, Evanston, USA
### 摘要
> 我们在公共随机字符串（\(\text {CRS} \)）模型中构建了最高效的两轮自适应安全比特-OT。该方案在决策性Diffie-Hellman（DDH）假设下是UC安全的。它需要\(\mathcal {O}(1)\)次指数运算和发送\(\mathcal {O}(1)\)个群元素，而现有技术需要\(\mathcal {O}(\kappa ^2)\)次指数运算和通信\(\text {poly}(\kappa )\)位，其中\(\kappa \)是计算安全参数。在这个过程中，我们还得到了几个在DDH下高效的UC安全OT协议：
> 
> 假设全局可编程随机预言机，最高效的两轮自适应字符串-OT协议。此外，在同时消息设置下，该协议可以做到非交互式，假设发送方输入是随机的。
> 
> 第一个在全局可观察随机预言机模型中具有平摊常数指数运算和通信开销的两轮字符串-OT协议。
> 
> 在\(\text {CRS} \)模型中的第一个两轮接收者模棱两可的字符串-OT协议，它具有恒定的计算和通信开销。
> 
> 我们还在CRS模型中获得了第一个非交互式自适应字符串UC承诺，它在安全参数上产生了亚线性的通信开销。具体地说，我们在提交了\(\text {polylog}(\kappa )\)位的同时，通信了\(\mathcal {O}(\kappa )\)位。此外，它具有加法同态性。
> 
> 我们还可以将我们的结果推广到单一的\(\text {CRS} \)模型，其中多个会话共享相同的\(\text {CRS} \)。作为推论，我们在这个模型中获得了一个两轮自适应安全的MPC协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_10](https://doi.org/10.1007/978-3-030-64840-4_10)
## ALBATROSS: Publicly AttestabLe BATched Randomness Based On Secret Sharing.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#albatross-publicly-attestable-batched-randomness-based-on-secret-sharing) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#albatross-publicly-attestable-batched-randomness-based-on-secret-sharing)**
### 作者
* Ignacio Cascudo, IMDEA Software Institute, Madrid, Spain
* Bernardo David, IT University of Copenhagen, Copenhagen, Denmark
### 摘要
> 在本文中，我们提出了ALBATROSS，一种具有输出结果传递和公共验证功能的多方随机生成协议系列，可以通过牺牲腐败容忍度来大幅提高摊销计算复杂度。我们的基本独立协议基于公开可验证密钥共享（PVSS），在随机预言机模型下，在决策性Diffie-Hellman（DDH）困难假设下是安全的。我们还解决了构建普适可组合随机性信标的重要问题，展示了两个基于Albatross的UC版本：一个基于简单的UC NIZKs，另一个基于高效的“指定验证者”同态承诺。有趣的是，这后者可以从全局随机预言机中的较弱的计算Diffie-Hellman（CDH）假设中实现。使用n个参与方的ALBATROSS执行，其中高达\(t=(1/2-\epsilon )\cdot n\)个参与方是腐败的（\(\epsilon >0\)为常数），生成\(\varTheta (n^2)\)个均匀随机值，在最坏情况下，每个参与方的摊销成本为\(\varTheta (\log n)\)个指数运算。我们在SCRAPE协议（Cascudo and David，ACNS 17）的基础上取得了显著改进，该协议对于每个参与方生成一个均匀随机值需要\(\varTheta (n^2)\)次指数运算。这主要通过两种技术实现：首先，使用打包的Shamir密钥共享用于PVSS；其次，使用线性t弹性函数（通过基于快速傅里叶变换的算法计算）改进随机性提取。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_11](https://doi.org/10.1007/978-3-030-64840-4_11)
## Secret-Shared Shuffle.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#secret-shared-shuffle) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#secret-shared-shuffle)**
### 作者
* Melissa Chase, Microsoft Research, Redmond, USA
* Esha Ghosh, Microsoft Research, Redmond, USA
* Oxana Poburinnaya, University of Rochester/Ligero Inc., Rochester, USA
### 摘要
> 生成混洗数据集的加法秘密共享，以确保双方都不知道其排列顺序，是许多协议的基本构建模块，例如安全协作过滤、遗忘排序以及集合交集上的安全函数评估。传统的方法要么涉及昂贵的基于公钥的加密，要么在排列网络上使用对称加密。虽然基于公钥的解决方案在带宽上更有效，但计算密集。另一方面，基于排列网络的构造在通信方面受限，特别是当数据集包含大元素（例如机器学习背景下的特征向量）时。
> 
> 我们设计了一个新的双方协议，用于计算混洗数据的秘密共享，我们称之为秘密共享混洗。我们的协议对于一个静态的半诚实对手是安全的。我们方法的核心是我们定义的一个新的原语（称为“共享转换”），它生成通过排列相关的两组伪随机值。这使得我们将混洗数据集的问题归约为混洗伪随机值的问题，从而在计算和通信方面实现了优化。然后，我们设计了一个基于遗忘传输和可穿孔伪随机函数的共享转换协议。
> 
> 我们最终的秘密共享混洗协议使用轻量级操作，例如XOR和伪随机生成器（PRGs），特别不涉及公钥操作，除了基本的OT（遗忘传输）。因此，我们的协议在具体效率上优于现有的解决方案。尤其是当元素适度大时，我们比基于公钥的方法快两到三个数量级，比已知最好的对称密钥方法快一个数量级。

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
> 属性基加密（ABE）是一种先进的加密方案，允许访问策略嵌入在秘钥和密文中。到目前为止，我们已经有了许多类型策略的ABE，这些策略是基于双线性映射和格的困难假设的。然而，基于这两种假设的ABE之间的一个区别是，前者可以实现适应性安全来支持非常可表达的策略（例如内积，布尔公式），而后者不行。最近，出现了两种适应性安全的基于格的ABE，改变了现状：Katsumata和Yamada（PKC'19）提出了一种非零内积（NIPE）加密方案，Tsabary（CRYPTO'19）提出了一种适用于t-CNF策略的ABE。然而，这些ABE支持的策略仍然非常有限，没有包含研究文献中更有趣的策略。值得注意的是，基于格的适应性安全内积加密（IPE）的构造仍然未完成。
> 
> 在这项工作中，我们提出了第一个基于学习与错误（LWE）假设的适应性安全IPE，其中模数的大小是亚指数级的（不需要复杂性杠杆）。具体而言，我们的IPE支持整数\(\mathbb {Z}\)上的内积，其中输入项的大小为多项式级，且满足适应性弱隐藏安全性。我们还展示了如何将这样的IPE转换为支持\(\mathbb {Z}_p\)上的内积的IPE，其中p为多项式大小，以及支持小型和大型域的模糊身份基加密（FIBE）。我们的结果建立在Tsabary（CRYPTO'19）提出的思想上，该方法以半通用方式使用有约束的伪随机函数（CPRF）来实现适应性安全的ABE，以及最近由Davidson等人提出的基于格的适应性安全CPRF的内积（CRYPTO'20）。我们的主要观察是如何利用Boneh等人（EUROCRYPT'14）提出的格评估算法所具有的特定线性性质来削弱Tsabary（CRYPTO'19）中引入的符合CPRF属性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_13](https://doi.org/10.1007/978-3-030-64840-4_13)
## Unbounded Dynamic Predicate Compositions in ABE from Standard Assumptions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#unbounded-dynamic-predicate-compositions-in-abe-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#unbounded-dynamic-predicate-compositions-in-abe-from-standard-assumptions)**
### 作者
* Nuttapong Attrapadung, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Junichi Tomida, NTT Corporation, Tokyo, Japan
### 摘要
> 在Eurocrypt'19上，Attrapadung提出了几种将一组基于属性的加密（ABE）方案动态组合成一种新的用于更具表达力的谓词的ABE方案的转换。由于他的组合的强大无界和模块化性质，可以以系统的方式获得许多新的ABE方案。然而，他的方法严重依赖于非标准的q型假设。从标准假设中构建如此强大的组合方法被留作一个重要的开放问题。在本文中，我们提出了一种构建ABE方案的新框架，允许在它们之间进行无界和动态的谓词组合，并且通过仅依赖于标准矩阵Diffie-Hellman（MDDH）假设来证明这些组合的自适应安全性将被保留。因此，解决了Attrapadung所提出的开放问题。至于应用方面，我们从标准假设中获得了各种ABE方案，这些方案是其种类的首个实例。其中包括以下基于MDDH的自适应安全大宇宙ABE方案：
> 
> 第一个完全无界单调的密钥策略（KP）/密文策略（CP）ABE。最近提出了这样的ABE，但仅适用于KP和小宇宙类型的ABE（Kowalczyk和Wee，Eurocrypt'19）。
> 
> 第一个完全无界的非单调KP/CP-ABE。特别是，我们的ABE支持一种新类型的非单调性，涵盖了以前的两种非单调性，即Ostrovsky等人（CCS'07）和Okamoto和Takashima（CRYPTO'10）。
> 
> 具有固定大小密文和秘密密钥的（非单调）KP和CP-ABE。
> 
> 具有固定大小秘密密钥和密文的KP和CP-ABE。
> 
> 在我们的框架的核心是一种称为密钥编码不可区分性的核心1密钥1密文正交件的新的部分对称设计，利用对称性以获得组合。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_14](https://doi.org/10.1007/978-3-030-64840-4_14)
## Succinct and Adaptively Secure ABE for ABP from k-Lin.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#succinct-and-adaptively-secure-abe-for-abp-from-k-lin) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#succinct-and-adaptively-secure-abe-for-abp-from-k-lin)**
### 作者
* Huijia Lin, University of Washington, Seattle, USA
* Ji Luo, University of Washington, Seattle, USA
### 摘要
> 我们提出了一种简洁适应性安全的基于属性的加密（ABE）方案，用于基于k-Lin的配对群的算术分支程序。我们的基于密钥策略的ABE方案具有固定大小的密文，与属性长度无关，而我们的基于密文策略的ABE方案具有固定大小的秘密密钥。我们的方案改进了最近在[Tomida和Attrapadung，ePrint'20]中提出的仅处理布尔公式的简洁ABE方案。所有其他之前的简洁ABE方案要么只能实现选择性安全，要么依赖于q-类型的假设。
> 
> 我们的方案是通过将满足称为渐进模拟安全的新安全概念的公钥内积功能加密和称为算术密钥编码方案的信息理论随机编码方案相结合的一般模块化方法得到的。

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
> 我们构建了新的功能加密方案，将属性基加密的访问控制功能与对加密数据进行线性操作的可能性相结合。虽然这样的基本原理可以很容易地从完全的功能加密方案中实现，但我们的结果有趣之处在于我们的方案同时实现了以下所有属性。它们是公钥的、高效的，并且可以在标准和成熟的假设下证明安全性（例如LWE或配对）。此外，在允许敌对方获取解密挑战密文的功能密钥的情况下，安全性得到了保证。我们的第一个结果是两个功能加密方案，适用于允许用户在加密数据中嵌入策略（通过单调跨度程序表示）的函数族，以便可以生成功能密钥来计算后者上的加权求和。这两个方案都是基于配对的，并且非常通用：它们将Crypto 2016中用于内积的ALS功能加密方案与依赖于双系统加密方法的任何属性基加密方案相结合。作为额外的奖励，它们可以自由地生成简单而优雅的多输入扩展，从而扩大了这些方案的应用范围。在我们的环境中，多输入是一种特别理想的功能，因为它通过允许用户将不同的访问策略与加密数据的不同部分关联起来，提供了更精细的访问控制。我们的第二个结果是基于标识的内积功能加密方案，可以从格中实现。这是通过精心组合现有的基于格的IBE方案与经过改进的基于LWE的ALS变体来实现的。我们指出了从格中获得更丰富的访问控制形式的固有技术瓶颈。从概念上讲，我们所有的结果都可以被看作是更具表达力的功能加密形式可以在标准假设和很小的计算开销下实现的进一步证据。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_16](https://doi.org/10.1007/978-3-030-64840-4_16)
## MoniPoly - An Expressive q-SDH-Based Anonymous Attribute-Based Credential System.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#monipoly-an-expressive-q-sdh-based-anonymous-attribute-based-credential-system) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#monipoly-an-expressive-q-sdh-based-anonymous-attribute-based-credential-system)**
### 作者
* Syh-Yuan Tan, School of Computing, Newcastle University, Newcastle upon Tyne, UK
* Thomas Groß, School of Computing, Newcastle University, Newcastle upon Tyne, UK
### 摘要
> 现代基于属性的匿名凭证（ABC）系统通过特殊编码实现了逻辑陈述的表达能力和高效展示证明。该技术最早由Camenisch和Groß提出，他们构建了一个基于SRSA的ABC系统，采用编码属性来提供高效的AND、OR和NOT证明。虽然其他ABC框架也采用了类似的构造方法，但Camenisch-Groß ABC系统迄今为止是最具表达能力和渐进最高效的证明系统，尽管它受到了对受信任的消息空间设置和有限集属性编码为素数的限制。在本文中，我们结合了一种新的集合承诺方案和基于SDH的签名方案，提出了一个可证明安全的ABC系统，支持复杂陈述的展示证明。这个构造不仅比现有方法更具表达能力，而且在无限制属性空间下也非常高效，因为它的ECC协议只需要验证者进行恒定数量的双线性配对，而不需要证明者进行配对。此外，我们引入了针对自适应主动攻击和并发攻击的冒充和不可追踪性的强安全模型，以允许我们的ABC系统具有表达能力，并与现有方案进行系统比较。在此基础上，我们首次全面正式证明了具有表达性展示证明的ABC系统的安全性。具体而言，我们基于q-(co-)SDH假设证明了对冒充攻击的安全性，并且证明了严密的归约。除了可能具有独立兴趣的集合承诺方案之外，我们的安全模型可以作为未来ABC系统设计的基础。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_17](https://doi.org/10.1007/978-3-030-64840-4_17)
## The Direction of Updatable Encryption Does Not Matter Much.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#the-direction-of-updatable-encryption-does-not-matter-much) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#the-direction-of-updatable-encryption-does-not-matter-much)**
### 作者
* Yao Jiang, Norwegian University of Science and Technology, NTNU, Trondheim, Norway
### 摘要
> 可更新的加密方案允许在密文上进行密钥轮换。客户端将加密数据存储外包给云服务器后，可以更改其加密密钥。云服务器可以仅使用客户端提供的令牌将存储的密文更新为新密钥。
> 
> 本文解决了可更新加密中的两个开放问题，即单向与双向更新以及后量子安全性。
> 
> 本文的主要结果是分析基于单向和双向更新的安全概念。令人惊讶的是，我们证明了每个安全概念的单向和双向变体是等价的。
> 
> 本文的第二个结果是基于决策学习与错误假设提供了一种新的高效可更新加密方案。这使我们具有后量子安全性。虽然我们的方案是双向的，但由于我们的主要结果，这已足够。

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
> 定期密钥轮换是一种常见的做法，旨在限制加密密钥的长期使用。密钥轮换指的是使用新密钥重新加密加密内容，并用新的密文覆盖旧的密文的过程。当加密数据存储在云端时，密钥轮换可能非常昂贵：可能需要从云端下载整个加密内容，在客户端机器上重新加密，并将新的密文重新上传到云端。
> 
> 可更新加密方案是一种对称密钥加密方案，旨在支持云端的高效密钥轮换。数据所有者向云端发送一个短的更新令牌。该更新令牌允许云端将密文从旧密钥轮换到新密钥，而不泄露有关明文的任何信息。最近关于可更新加密的研究工作导致了几个安全定义和提出的构建方案。然而，现有的构建方案对于实际应用而言尚不够高效，并且现有的安全定义可以得到加强。
> 
> 在本研究中，我们做出了三个贡献。首先，我们引入了更强的安全定义，以适应可更新加密（在密文相关的设置中），以捕捉先前工作中未涵盖的理想安全属性。其次，我们构建了两个新的可更新加密方案。第一个构建方案仅依赖于对称密码原语，但仅支持有限次数的密钥轮换。第二个构建方案支持（几乎）无限次数的更新，并基于环学习与误差（RLWE）假设构建。由于使用RLWE的复杂性，与第一个构建方案相比，该方案在完整性方面获得了稍微较弱的定义。最后，我们实现了这两个构建方案，并将它们的性能与先前的工作进行了比较。我们基于RLWE的构建方案比基于椭圆曲线DDH难题的先前建议的可更新加密方案快200倍。我们的第一个构建方案完全基于对称原语，具有最高的加密吞吐量，接近AES的性能，并且在重新加密不超过五十次的密文上具有最高的解密吞吐量。对于重新加密超过五十次的密文，RLWE构建方案在解密速度上占主导地位。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_19](https://doi.org/10.1007/978-3-030-64840-4_19)
## CCA Updatable Encryption Against Malicious Re-encryption Attacks.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#cca-updatable-encryption-against-malicious-re-encryption-attacks) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#cca-updatable-encryption-against-malicious-re-encryption-attacks)**
### 作者
* Long Chen, New Jersey Institute of Technology, Newark, NJ, 07102, USA
* Yanan Li, New Jersey Institute of Technology, Newark, NJ, 07102, USA
* Qiang Tang, New Jersey Institute of Technology, Newark, NJ, 07102, USA
### 摘要
> Updatable encryption (UE)是一种有吸引力的基元，它允许定期更新外部存储的加密数据的密钥。已有一些优雅的作品研究了各种安全性质。我们注意到现有(ciphertext dependent)可更新加密的安全模型中存在几个主要问题，特别是完整性和CCA安全性。在模型中，对手只允许请求服务器按照诚实生成的密文重新加密，而在实践中，攻击者可以尝试将任意的密文注入服务器。这些格式错误的密文可以被对手更新和利用，从而引发严重的安全问题。
> 
> 在本文中，我们填补了这一空白，并在多个方面加强了安全定义：最重要的是，我们的完整性和CCA安全模型消除了先前模型的限制，并在可更新加密的设置中实现了标准的完整性和CCA安全概念。在此过程中，我们改进了安全模型，以捕捉妥协后的安全性，并增强了重新加密的不可区分性，使其符合CCA样式。在新模型的指导下，我们提供了一个满足我们加强的安全定义的新颖构造ReCrypt+。来自一个群组的同态哈希的技术构建模块可能具有独立的兴趣。我们还研究了安全概念之间的关系；有点令人惊讶的是，在经身份验证的加密中，IND-CPA加密的完整性表明了IND-CCA安全性的民间结果，并不适用于基于密文的可更新加密。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_20](https://doi.org/10.1007/978-3-030-64840-4_20)
## Determining the Core Primitive for Optimally Secure Ratcheting.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#determining-the-core-primitive-for-optimally-secure-ratcheting) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#determining-the-core-primitive-for-optimally-secure-ratcheting)**
### 作者
* Fatih Balli, LASEC, École polytechnique fédérale de Lausanne, Ecublens, Switzerland
* Serge Vaudenay, LASEC, École polytechnique fédérale de Lausanne, Ecublens, Switzerland
* Paul Rösler, Chair for Network and Data Security, Ruhr University Bochum, Bochum, Germany
### 摘要
> 最近，随着实际世界协议的关注，一个工作线路从理论角度研究了扳手动作。这一领域的文献追求最强的扳手安全性，利用基于分层身份密码（HIBE）的强大但效率低下的可更新密钥原语进行构造。由于没有这些工作对使用这些构建模块进行正式验证，我们回答了尚未解决的问题，即在哪些条件下实际上需要使用它们。
> 
> 我们重新考虑了这些强扳手密钥交换（RKE）的概念，并提出了更现实（稍微更强）的安全定义。在这个安全定义中，考虑了参与者本地秘密的泄露和对执行过程的随机性的攻击。虽然之前的工作部分考虑了这两种攻击，但我们是第一个将它们在自然基于游戏的概念中进行清晰统一的人。
> 
> 我们的定义基于Poettering和Rösler的系统化RKE概念（CRYPTO 2018）。由于对随机性攻击的轻微但有意义的改变，我们最终能够证明，为了实现RKE的强安全性，具备（相互独立地）可更新密钥对的公钥密码是一个必要的构建模块。令人惊讶的是，这个推论已经适用于最简单的RKE变体。
> 
> 因此，（1）我们模拟了在随机性操纵下具有最佳安全性的RKE，以涵盖实际攻击，（2）我们（可证明地）提取了实现强大安全RKE所必需的核心原语，以及（3）我们的研究结果表明在哪些安全放宽条件下可以仅依赖于标准公钥密码进行构造。

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
> Garg等人（Crypto 2015年）在非交互式场景中首次研究了嘈杂信道上的加密协议，即只有一方发言时。这项工作留下的一个重要问题是有限信道的完备性，其输入和输出字母表不随所需的安全级别增长。在本研究中，我们通过获得以下结果来回答这个问题：
> 
> 1. 具有逆多项式误差的Bit-ROT的完备性。我们展示了可以利用bit-ROT（即随机化遗忘传输信道，其中两个消息中的每个都是单个位）实现具有逆多项式误差的一般随机化功能。为此，我们提供了从bit-ROT到具有逆多项式误差的string-ROT的构造。
> 
> 2. 没有存在具有可忽略错误的有限信道的完备性。为补充上述结果，我们展示了没有有限信道可以用来实现带有可忽略错误的string-ROT，这意味着bit-ROT的完备性中的逆多项式误差是固有的。即使在诚实但好奇的参与方以及计算安全性下，这一结论仍然成立，并且与Garg等人展示的string-ROT的（可忽略错误的）完备性形成对比。
> 
> 3. 使零知识证明成为可能的有限信道的特征化。安全计算的一个重要实例是零知识证明。嘈杂信道可以潜在地用于实现真正非交互式的零知识证明，不需要可信任的公共随机源，并具有在普通模型中无法实现的不可转移性和否认性特征。Garg等人从二进制抹除信道（BEC）和二进制对称信道（BSC）获得了这样的零知识证明。我们通过展示实际上任何非平凡的信道都足够的方式来补充这一情况的全貌。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_22](https://doi.org/10.1007/978-3-030-64840-4_22)
## Succinct Functional Commitment for a Large Class of Arithmetic Circuits.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#succinct-functional-commitment-for-a-large-class-of-arithmetic-circuits) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#succinct-functional-commitment-for-a-large-class-of-arithmetic-circuits)**
### 作者
* Helger Lipmaa, Simula UiB, Bergen, Norway
* Kateryna Pavlyk, Simula UiB, Bergen, Norway
### 摘要
> 一种简洁函数承诺（SFC）方案，适用于电路类\(\mathbf {CC}\)，对于任意电路\(\mathcal {C}\in \mathbf {CC}\)，允许承诺者首先简洁地承诺一个向量\(\varvec{\alpha }\)，然后简洁地公开对\(\mathcal {C}(\varvec{\alpha }, \varvec{\beta })\)的承诺，其中验证者在公开时选择\(\varvec{\beta }\)。不幸的是，目前只知道适用于严重受限的函数类（如内积类）的SFC承诺方案。通过非黑盒使用SNARK构造技术，我们提出了一种适用于半稀疏多项式大类的SFC方案。新的SFC方案可以用于高效（1）实现稀疏多项式，和（2）聚合各种有趣的SFC（如向量承诺和多项式承诺）方案。该新方案在计算超级假设的新实例下具有评估绑定性。我们对新假设进行了彻底的分析。

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
> 安全多方计算（MPC）协议的审计涉及到由一个不受信任的第三方验证协议记录。在本研究中，我们引入了端到端可验证MPC（VMPC）的概念，即要求验证能够在所有服务器、可信设备配置和使用MPC协议的输入提供用户所使用的客户端系统都被对手攻击的情况下提供正确性保证。为了实现VMPC，我们在零知识协议的设置中引入了一种新的概念，称之为群众可验证零知识（CVZK）。CVZK协议使得证明者能够说服一组验证者关于某个特定陈述，尽管每个验证者独立为验证提供了很少量的熵，并且其中一些验证者受到对手控制。在给定CVZK的情况下，我们提出了一个基于离散对数相关假设的VMPC协议。在VMPC旨在抵御较高程度的逆境下，确保完美的正确性是不可行的，因此我们研究了在我们的框架中可行的函数类和可验证关系，并提出了一些可能的应用，这些应用的底层函数可以通过VMPC来实现。

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
> 部分知识证明证明了对于给定的语句集合\（x_1，\dots，x_n\），持有某些见证的子集。Cramer, Damgård,和Schoenmakers（CDS）通过使用证明者随机秘密分享验证者的挑战，并将股份用作原子协议的挑战，构建了部分知识证明。这种简单且具有重大影响力的转换已被用于众多应用程序，从匿名凭证到环签名。
> 
> 我们考虑如果证明者首先将股票进行哈希而不是直接使用它们作为挑战，会发生什么。我们表明，这种基本增强可以产生显着的好处：
> 
> 证明每个语句\（x_i\)包含一个原子文本，
> 
> 仅当原子协议是\({\kappa }\)-特殊的声音,\({\kappa}\ge 2\)就足够了，
> 
> 当使用Fiat-Shamir启发式编译到签名方案时，其不可伪造性可以在不可编程的随机预言机模型中证明。
> 
> 以上任何特征都不满足CDS转换。

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
> 一个丢番图方程是一个多变量的多项式方程，其系数为整数，如果它具有一个解使得所有未知数都取整数值，那么它是可满足的。戴维斯、普特南、罗宾逊和马蒂亚塞维奇证明了一般丢番图可满足性问题是不可判定的（对希尔伯特第十问题给出了否定答案），但仍然可以在零知识的情况下证明已知解的知识，如果该解对于证明者是已知的。
> 
> 我们提供了第一个简洁的诚实验证者零知识论证，用于丢番图方程的可满足性，其通信复杂度和轮复杂度随着多项式方程的规模对数增加。我们的论证的安全性依赖于对隐藏阶群的标准假设。由于论证需要承诺整数，我们引入了一个比达姆高德和藤崎方案参数更小的新整数承诺方案。最后，我们展示了如何通过将它们编码为丢番图方程，简洁地论证对于几个NP完全问题和密码学问题的解的知识。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_26](https://doi.org/10.1007/978-3-030-64840-4_26)
## Individual Simulations.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#individual-simulations) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#individual-simulations)**
### 作者
* Yi Deng, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yi Deng, State Key Laboratory of Cryptology, Beijing, China
* Yi Deng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 我们开发了一种个体模拟技术，明确利用给定对手功能的特定属性/结构。利用这种模拟技术，我们获得了以下结果。
> 
> 1. 我们构建了在标准因子分解难度下打破先前黑盒障碍的第一批协议，这两个协议在所有先验有界多项式大小的区分器上都可以在多项式时间内模拟：
> 
> - 两轮选择性开放安全的承诺方案。
> 
> - 三轮同时零知识和同时见证隐藏的NP论证，适用于裸公钥模型。
> 
> 2. 我们提出了一个更简单的两轮弱零知识和见证隐藏的NP论证，适用于在亚指数级因子分解难度下的纯模型。我们的技术还提供了一个更简单的证明，证明现有的依赖于区分器的可模拟零知识协议也可以在所有先验有界多项式大小的区分器上在多项式时间内模拟。
> 
> 我们个体模拟技术的核心概念是对所有困难分布存在近乎最优提取器的观察：对于任何NP实例采样算法，存在一个多项式大小的证人提取器（取决于采样器的功能），几乎在成功概率方面胜过任何先验有界多项式大小的电路。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_27](https://doi.org/10.1007/978-3-030-64840-4_27)
## KVaC: Key-Value Commitments for Blockchains and Beyond.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#kvac-key-value-commitments-for-blockchains-and-beyond) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#kvac-key-value-commitments-for-blockchains-and-beyond)**
### 作者
* Shashank Agrawal, Western Digital Research, Milpitas, USA
* Srinivasan Raghuraman, Visa Research, Palo Alto, USA
### 摘要
> 随着区块链的增长，验证新交易变得越来越耗费资源。为了应对这个问题，有必要找到一种紧凑的对于区块链（有效）状态的编码方法，该编码方法允许进行高效的成员证明和更新。对于基于账户的加密货币，状态可以用键值映射表示，其中键是账户地址，值包括账户余额、nonce等等。
> 
> 我们提出了一种新的键值映射承诺方案，其大小不随键的数量增加而增长，但成员证明的大小保持不变。事实上，编码和证明分别只包含两个和三个群元素（在未知阶类群中的群元素）。验证和更新证明只需要进行少量的群指数运算。对键值的加法更新也具有相同的效率水平。
> 
> 键值承诺可以用于构建动态累加器和向量承诺，在群签名、匿名凭证、可验证数据库、交互式预言机证明等方面有应用。利用我们的新的键值承诺，我们提供了迄今为止最高效的（子）向量承诺结构的构建方法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_28](https://doi.org/10.1007/978-3-030-64840-4_28)
## Catalic: Delegated PSI Cardinality with Applications to Contact Tracing.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-3].md#catalic-delegated-psi-cardinality-with-applications-to-contact-tracing) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-3].md#catalic-delegated-psi-cardinality-with-applications-to-contact-tracing)**
### 作者
* Thai Duong, Google LLC, Menlo Park, USA
* Duong Hieu Phan, LTCI, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Ni Trieu, Arizona State University, Tempe, USA
### 摘要
> 私人集合相交基数（PSI-CA）允许每个持有一组项目的两个参与方，了解这些集合的交集大小，而不会透露任何额外信息。据我们所知，这项研究提出了第一个允许其中一方将PSI-CA计算委托给不可信服务器的协议。我们委托的PSI-CA协议的核心是新的遗忘式分布密钥PRF（Odk-PRF）抽象，可能具有独立的兴趣。
> 
> 我们详细探讨了如何使用我们的委托的PSI-CA协议来进行保护隐私的接触追踪。估计在给定人口中，相当大比例的人需要使用接触追踪应用程序来阻止疾病的传播。然而，先前的保护隐私的接触追踪系统对客户端设备施加了繁重的带宽或计算需求。这些需求对于可能按每MB计费的移动数据计划的终端用户或希望节省电池寿命的用户来说，构成了经济上的不利因素。我们提出了Catalic（轻量级客户端的接触追踪），这是一个新的接触追踪系统，它最大限度地减少了客户端设备的带宽成本和计算工作量。通过应用我们的新委托的PSI-CA协议，Catalic将接触追踪的大部分客户端计算转移到不可信服务器，并且在保护隐私的同时，每个用户每天可能节省数百兆字节的移动数据。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64840-4_29](https://doi.org/10.1007/978-3-030-64840-4_29)
