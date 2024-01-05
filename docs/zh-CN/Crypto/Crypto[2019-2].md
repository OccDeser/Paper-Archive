# Crypto[2019-2]
## The Communication Complexity of Threshold Private Set Intersection.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#the-communication-complexity-of-threshold-private-set-intersection) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#the-communication-complexity-of-threshold-private-set-intersection)**
### 作者
* Satrajit Ghosh, Aarhus University, Aarhus, Denmark
* Mark Simkin, Aarhus University, Aarhus, Denmark
### 摘要
> 阈值私有集交集使得持有大小为n的集合 \(S_{\mathsf {A}}\) 和 \(S_{\mathsf {B}}\) 的Alice和Bob能够计算交集 \(S_{\mathsf {A}} \cap S_{\mathsf {B}}\) ，前提是这些集合的差异不超过一定的阈值参数t。在本研究中，我们调查了这个问题的通信复杂性，并建立了第一个上界和下界。我们展示了任何协议都必须具有 \(\varOmega (t)\) 的通信复杂性。我们证明了通过完全同态加密可以获得几乎匹配的上界 \(\tilde{\mathcal {O}}(t)\)。我们提出了基于更弱假设的计算效率更高的协议，即加性同态加密，其通信复杂性为 \(\tilde{\mathcal {O}}(t ^2)\)。对于像生物特征认证这样的应用，其中给定的指纹必须与数据库中的指纹有较大的交集，我们的协议可能会带来显著的通信节省。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_1](https://doi.org/10.1007/978-3-030-26951-7_1)
## Adaptively Secure MPC with Sublinear Communication Complexity.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#adaptively-secure-mpc-with-sublinear-communication-complexity) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#adaptively-secure-mpc-with-sublinear-communication-complexity)**
### 作者
* Ran Cohen, Boston University, Boston, USA
* Ran Cohen, Northeastern University, Boston, USA
* Abhi Shelat, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
### 摘要
> MPC研究中的一个核心挑战是在安全保证、困难假设和协议所需资源之间取得平衡。在这项工作中，我们研究了在不同破坏阈值下容忍自适应破坏的MPC协议的成本。在最强的设置中，我们考虑了对任意数量的参与方（可能是全部）的自适应破坏，并取得了以下结果：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_2](https://doi.org/10.1007/978-3-030-26951-7_2)
## Communication Lower Bounds for Statistically Secure MPC, With or Without Preprocessing.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#communication-lower-bounds-for-statistically-secure-mpc-with-or-without-preprocessing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#communication-lower-bounds-for-statistically-secure-mpc-with-or-without-preprocessing)**
### 作者
* Ivan Damgård, Computer Science, Aarhus University, Aarhus, Denmark
* Kasper Green Larsen, Computer Science, Aarhus University, Aarhus, Denmark
* Jesper Buus Nielsen, Computer Science, Aarhus University, Aarhus, Denmark
### 摘要
> 我们证明了无条件安全多方计算通信复杂性的下界，无论是在标准模型下使用 \(n=2t+1\) 个参与方且 t 个被损坏，还是在预处理模型下使用 \(n=t+1\) 个参与方。在这两种情况下，我们证明了对于任意 \(g \in \mathbb {N}\)，存在一个具有 g 个门的布尔电路 C，其中任何实现 C 的安全协议必须通信 \(\varOmega (n g)\) 位，即使只需要被动和统计安全。这些结果可以轻松扩展到在任何固定有限域上构建类似电路。这表明，对于所有电路的大小，当 t 达到最大值时，所有已知协议的 O(n) 开销是固有的。这也表明安全是需要付出代价的：我们考虑的电路可以在只需要 O(g) 位通信的情况下在 n 个参与方之间计算，如果不需要安全。我们的结果也适用于 t 不是最优值的情况。对于多数诚实参与方的情况，这表明只有在接受阈值 \(t= (1/2 - c)n\)（其中 c 是常数）时，才能获得通过打包秘密共享的已知优化。对于多数诚实参与方的情况，我们还展示了一个上界，与下界相匹配，仅相差一个常数因子（现有的上界对于布尔电路相差一个因子 \(\lg n\)）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_3](https://doi.org/10.1007/978-3-030-26951-7_3)
## Communication-Efficient Unconditional MPC with Guaranteed Output Delivery.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#communication-efficient-unconditional-mpc-with-guaranteed-output-delivery) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#communication-efficient-unconditional-mpc-with-guaranteed-output-delivery)**
### 作者
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
* Yanyi Liu, Tsinghua University, Beijing, China
### 摘要
> 我们研究了在点对点信道上，具有保证输出传送的无条件安全多方计算（MPC）的通信复杂度，其中腐败阈值\(t < n/3\)。我们提出了一个问题：“在这种情况下，是否可能构建具有线性通信复杂度的MPC，每个乘法门与参与方数量成正比？”虽然许多研究都致力于减少这种情况下的通信复杂度，但以上问题的答案在过去十年中仍然难以捉摸。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_4](https://doi.org/10.1007/978-3-030-26951-7_4)
## Efficient Collision Attack Frameworks for RIPEMD-160.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#efficient-collision-attack-frameworks-for-ripemd-160) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#efficient-collision-attack-frameworks-for-ripemd-160)**
### 作者
* Fukang Liu, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Gaoli Wang, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Zhenfu Cao, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Christoph Dobraunig, Graz University of Technology, Graz, Austria
* Christoph Dobraunig, Radboud University, Nijmegen, The Netherlands
* Florian Mendel, Infineon Technologies AG, Ludwigsburg, Germany
* Takanori Isobe, National Institute of Information and Communications Technology, Tokyo, Japan
* Fukang Liu, University of Hyogo, Kobe, Japan
* Takanori Isobe, University of Hyogo, Kobe, Japan
### 摘要
> RIPEMD-160是一个ISO/IEC标准，并已被用于与SHA-256一起生成比特币地址。由于其复杂的双流结构，刘、Mendel和Wang在2017年的Asiacrypt上提出的对减少的RIPEMD-160的首次碰撞攻击只能达到30步，其中时间复杂度为\(2^{70}\)。除此之外，已经发表了一些针对具有自中间开始方法的减小的RIPEMD-160的半自由开始碰撞攻击。受这种从中间开始结构的启发，我们提出了两种新颖有效的针对减少的RIPEMD-160的碰撞攻击框架，充分利用了其消息扩展的弱点。这两个框架被称为稠密左稀疏右（DLSR）框架和稀疏左密右（SLDR）框架。结果显示，DLSR框架比SLDR框架更有效，因为可以更全面地控制一步，尽管有额外的\(2^{32}\)内存复杂度。为了构建DLSR框架的最佳差分特性，我们仔细建立了特性的线性部分，然后使用猜测和决定方法解决相应的非线性部分。基于新发现的差分特性，我们提供了30步和31步（共80步）RIPEMD-160的第一次实际碰撞攻击的消息对，其时间复杂度分别为\(2^{35.9}\)和\(2^{41.5}\)。此外，受益于部分计算，我们可以攻击33步和34步（总共80步）的RIPEMD-160，其时间复杂度分别为\(2^{67.1}\)和\(2^{74.3}\)。当我们将SLDR框架应用到2017年Asiacrypt论文中使用的差分特性时，我们显著地通过一个\(2^{13}\)的因数改进了时间复杂度。然而，它仍无法与从DLSR框架获得的结果竞争。据我们所知，这些是在步数上针对减少的RIPEMD-160的最佳碰撞攻击，包括对30步和31步RIPEMD-

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_5](https://doi.org/10.1007/978-3-030-26951-7_5)
## Improving Attacks on Round-Reduced Speck32/64 Using Deep Learning.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#improving-attacks-on-round-reduced-speck32-64-using-deep-learning) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#improving-attacks-on-round-reduced-speck32-64-using-deep-learning)**
### 作者
* Aron Gohr, Bundesamt für Sicherheit in der Informationstechnik (BSI), Bonn, Germany
### 摘要
> 该论文有四个主要贡献。首先，我们在完全符合马尔可夫假设的情况下，计算了Speck32/64在给定一个特定输入差分下的预测差分分布，最多计算了八轮，并验证了这在全局范围内可以得到一个相当好的模型。其次，我们表明与常规观点相反，机器学习可以产生非常强大的密码区分器：例如，在对Speck的九轮进行简单的低数据量、选择明文攻击时，我们提出了基于深度残差神经网络的区分器，其平均密钥排序大约比使用完整差分分布表的经典区分器低五倍。第三，我们基于贝叶斯优化的一种变种开发了一种高度选择性的密钥搜索策略，结合我们的神经区分器，可以将11轮Speck32/64的剩余安全性降低到约38位，这是对以往文献的显著改进。最后，我们表明我们的神经区分器成功利用密文对分布的特征，这些特征对于所有纯差分区分器来说是不可见的，即使给定无限数据量也

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_6](https://doi.org/10.1007/978-3-030-26951-7_6)
## Correlation of Quadratic Boolean Functions: Cryptanalysis of All Versions of Full \mathsf MORUS.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#correlation-of-quadratic-boolean-functions-cryptanalysis-of-all-versions-of-full-mathsf-morus) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#correlation-of-quadratic-boolean-functions-cryptanalysis-of-all-versions-of-full-mathsf-morus)**
### 作者
* Danping Shi, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Siwei Sun, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Lei Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Danping Shi, Data Assurance and Communication Security Research Center, Chinese Academy of Sciences, Beijing, China
* Siwei Sun, Data Assurance and Communication Security Research Center, Chinese Academy of Sciences, Beijing, China
* Lei Hu, Data Assurance and Communication Security Research Center, Chinese Academy of Sciences, Beijing, China
* Siwei Sun, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Lei Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yu Sasaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Chaoyun Li, imec-COSIC, Department Electrical Engineering (ESAT), KU Leuven, Leuven, Belgium
### 摘要
> 我们展示了任意二次布尔函数的相关性可以从其所谓的不相交二次形式中读取出来。我们进一步提出了一个多项式时间算法，该算法可以将任意二次布尔函数转换为其不相交二次形式。借助这个算法，可以高效计算二次布尔函数的精确相关性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_7](https://doi.org/10.1007/978-3-030-26951-7_7)
## Low-Memory Attacks Against Two-Round Even-Mansour Using the 3-XOR Problem.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#low-memory-attacks-against-two-round-even-mansour-using-the-3-xor-problem) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#low-memory-attacks-against-two-round-even-mansour-using-the-3-xor-problem)**
### 作者
* Gaëtan Leurent, Inria, Paris, France
* Ferdinand Sibleyras, Inria, Paris, France
### 摘要
> 迭代Even-Mansour结构是一种优雅的构造，它理想化了类似AES的分组密码设计。在本文中，我们将重点研究最简单的变种，即只有一个密钥的2轮Even-Mansour结构。这是一种最小化构造，在生日界限之外提供了安全性证明：在底层排列和加密的\(2^{2n/3}\)次评估范围内，存在安全性证明，而已知的最佳攻击复杂度大约为\(2^n/n\)次操作。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_8](https://doi.org/10.1007/978-3-030-26951-7_8)
## How to Record Quantum Queries, and Applications to Quantum Indifferentiability.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#how-to-record-quantum-queries-and-applications-to-quantum-indifferentiability) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#how-to-record-quantum-queries-and-applications-to-quantum-indifferentiability)**
### 作者
* Mark Zhandry, Princeton University & NTT Research, Princeton, USA
### 摘要
> 量子随机正文模型（QROM）已成为证明基于随机正文结构的后量子安全性的标准模型。不幸的是，目前已知的证明技术都不能记录敌方查询的信息，而这是许多经典ROM证明的关键特征，包括所有哈希函数域扩展的不可区分性证明。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_9](https://doi.org/10.1007/978-3-030-26951-7_9)
## Quantum Security Proofs Using Semi-classical Oracles.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#quantum-security-proofs-using-semi-classical-oracles) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#quantum-security-proofs-using-semi-classical-oracles)**
### 作者
* Andris Ambainis, University of Latvia, Riga, Latvia
* Mike Hamburg, Rambus Security Division, San Francisco, USA
* Dominique Unruh, University of Tartu, Tartu, Estonia
### 摘要
> 我们提出了一个改进的单向隐藏（O2H）定理，该定理由Unruh在ACM 2015年发表。我们的新O2H定理具有更高的灵活性（任意联合分布的Oracles和输入，多个重新编程点），以及更紧密的边界（去除平方根因子，考虑并行性）。改进的O2H定理利用了一种新型的量子oracles变体，半经典oracles，其中查询被部分测量。新的O2H定理使我们能够在几个公钥加密方案中获得更好的安全边界。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_10](https://doi.org/10.1007/978-3-030-26951-7_10)
## Quantum Indistinguishability of Random Sponges.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#quantum-indistinguishability-of-random-sponges) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#quantum-indistinguishability-of-random-sponges)**
### 作者
* Jan Czajkowski, QuSoft, University of Amsterdam, Amsterdam, The Netherlands
* Christian Schaffner, QuSoft, University of Amsterdam, Amsterdam, The Netherlands
* Andreas Hülsing, TU Eindhoven, Eindhoven, The Netherlands
### 摘要
> 在这项工作中，我们展示了海绵构造可以用于构建量子安全的伪随机函数。作为我们的主要结果，我们证明了随机海绵与随机函数在量子上是无法区分的。在这一设置中，对手可以对构造的输入输出行为进行叠加访问，但不能访问内部函数。我们的证明是建立在内部函数是随机函数或置换的假设下的。然后我们利用这个结果得到了一个量子安全版本的Andreeva，Daemen，Mennink和Van Assche (FSE'15)的结果，该结果表明，使用安全PRP或PRF作为内部函数的海绵构造是一个安全的PRF。这个结果还证明了Kaplan、Leurent、Leverrier和Naya-Plasencia (Crypto'16)以及Santoli和Schaffner (QIC'16)提出的针对量子访问模型中CBC-MAC的最近攻击可以通过引入具有非平凡内部部分的状态来防止。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_11](https://doi.org/10.1007/978-3-030-26951-7_11)
## Revisiting Post-quantum Fiat-Shamir.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#revisiting-post-quantum-fiat-shamir) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#revisiting-post-quantum-fiat-shamir)**
### 作者
* Qipeng Liu, Princeton University, Princeton, USA
* Mark Zhandry, Princeton University & NTT Research, Princeton, USA
### 摘要
> Fiat-Shamir变换是在随机神谕模型下构建非交互式知识论证的一种有用方法。不幸的是，现有的证明技术无法证明Fiat-Shamir在量子环境中的安全性。问题源于(1)量子回退的困难，以及(2)现有技术在量子环境中无法适应性地编程随机神谕。在这项工作中，我们展示了如何在许多情况下克服上述限制。特别地，我们给出了在量子环境中Fiat-Shamir安全的温和条件。作为一个应用，我们展示了基于Fiat-Shamir的现有格签名在不做任何修改的情况下是安全的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_12](https://doi.org/10.1007/978-3-030-26951-7_12)
## Security of the Fiat-Shamir Transformation in the Quantum Random-Oracle Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#security-of-the-fiat-shamir-transformation-in-the-quantum-random-oracle-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#security-of-the-fiat-shamir-transformation-in-the-quantum-random-oracle-model)**
### 作者
* Jelle Don, Centrum Wiskunde & Informatica (CWI), Amsterdam, Netherlands
* Serge Fehr, Centrum Wiskunde & Informatica (CWI), Amsterdam, Netherlands
* Jelle Don, Institute for Logic, Language and Computation, University of Amsterdam, Amsterdam, Netherlands
* Christian Majenz, Institute for Logic, Language and Computation, University of Amsterdam, Amsterdam, Netherlands
* Christian Schaffner, Institute for Logic, Language and Computation, University of Amsterdam, Amsterdam, Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, Netherlands
* Serge Fehr, QuSoft, Amsterdam, Netherlands
* Christian Majenz, QuSoft, Amsterdam, Netherlands
* Christian Schaffner, QuSoft, Amsterdam, Netherlands
### 摘要
> 著名的Fiat-Shamir变换将任何公开币三轮交互证明，即所谓名为\(\Sigma {\text {-协议}}\)，转化为随机预言模型中的非交互证明。我们在量子对手为背景下研究了该变换，该对手特别可以在量子叠加状态下查询随机预言。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_13](https://doi.org/10.1007/978-3-030-26951-7_13)
## Unconditionally Secure Computation Against Low-Complexity Leakage.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#unconditionally-secure-computation-against-low-complexity-leakage) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#unconditionally-secure-computation-against-low-complexity-leakage)**
### 作者
* Andrej Bogdanov, Chinese University of Hong Kong, Shatin, Hong Kong
* Yuval Ishai, Technion, Haifa, Israel
* Akshayaram Srinivasan, University of California, Berkeley, USA
### 摘要
> 我们考虑构建防泄漏电路编译器的问题，该编译器针对有界输出长度的全局泄漏函数提供安全保障。在此，全局指的是泄漏可以依赖于所有的电路线路，并输出应用于这些线路的低复杂度函数（表示为多输出布尔电路）。在本研究中，我们设计的编译器既适用于无状态（也称为单次泄漏）设置，也适用于有状态（也称为连续泄漏）设置，并对\(\mathsf {AC}^0\)泄露和类似的低复杂度类提供无条件安全保障。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_14](https://doi.org/10.1007/978-3-030-26951-7_14)
## Tight Leakage-Resilient CCA-Security from Quasi-Adaptive Hash Proof System.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#tight-leakage-resilient-cca-security-from-quasi-adaptive-hash-proof-system) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#tight-leakage-resilient-cca-security-from-quasi-adaptive-hash-proof-system)**
### 作者
* Shuai Han, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Lin Lyu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Dawu Gu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, Westone Cryptologic Research Center, Beijing, 100070, China
* Shuai Han, Ant Financial, Hangzhou, 310012, China
### 摘要
> 我们提出了准自适应哈希证明系统（QAHPS）的概念，其中投影密钥允许取决于计算哈希值的特定语言。我们通过定义两种统计性质来形式化对QAHPS的泄露稳健（LR-ardency），包括LR-\(\langle \mathscr{L}_0, \mathscr{L}_1 \rangle \)-universal和LR-\(\langle \mathscr{L}_0, \mathscr{L}_1 \rangle \)-key-switching。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_15](https://doi.org/10.1007/978-3-030-26951-7_15)
## Non-malleable Secret Sharing in the Computational Setting: Adaptive Tampering, Noisy-Leakage Resilience, and Improved Rate.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#non-malleable-secret-sharing-in-the-computational-setting-adaptive-tampering-noisy-leakage-resilience-and-improved-rate) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#non-malleable-secret-sharing-in-the-computational-setting-adaptive-tampering-noisy-leakage-resilience-and-improved-rate)**
### 作者
* Antonio Faonio, IMDEA Software Institute, Madrid, Spain
* Daniele Venturi, Department of Computer Science, Sapienza University of Rome, Rome, Italy
### 摘要
> 我们重新审视了计算设置中的不可变秘密共享概念（Goyal和Kumar，STOC 2018）。特别是，在单向功能一对一假设下，我们展示了一个在计算上保密、阈值秘密共享方案，满足以下所有性质。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_16](https://doi.org/10.1007/978-3-030-26951-7_16)
## Leakage Resilient Secret Sharing and Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#leakage-resilient-secret-sharing-and-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#leakage-resilient-secret-sharing-and-applications)**
### 作者
* Akshayaram Srinivasan, University of California, Berkeley, USA
* Prashant Nalini Vasudevan, University of California, Berkeley, USA
### 摘要
> 一个秘密共享方案允许经销商将一个秘密分享给一组n个参与者，使得任何授权的一部分参与者都可以恢复这个秘密，而未经授权的任何子集都无法获取关于秘密的任何信息。一个泄漏鲁棒的秘密共享方案（由Goyal和Kumar在STOC'18中独立工作以及Benhamouda, Degwekar, Ishai和Rabin在CRYPTO'18中介绍）还要求保密性对抗来自每个其他份额的一些有界泄漏的每个未经授权的参与者集合都成立。如果每个份额的泄漏是独立计算的，则称泄漏为本地泄漏。到目前为止，已知的仅有的本地泄漏鲁棒秘密共享方案构造适用于非常低（O(1)）或非常高（\(n - o(\log n)\)）阈值的门限访问结构。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_17](https://doi.org/10.1007/978-3-030-26951-7_17)
## Stronger Leakage-Resilient and Non-Malleable Secret Sharing Schemes for General Access Structures.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#stronger-leakage-resilient-and-non-malleable-secret-sharing-schemes-for-general-access-structures) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#stronger-leakage-resilient-and-non-malleable-secret-sharing-schemes-for-general-access-structures)**
### 作者
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
* Mark Simkin, Aarhus University, Aarhus, Denmark
* João Ribeiro, Imperial College London, London, UK
* Divesh Aggarwal, National University of Singapore, Singapore, Singapore
* Maciej Obremski, National University of Singapore, Singapore, Singapore
* Erick Purwanto, National University of Singapore, Singapore, Singapore
### 摘要
> 在这项研究中，我们提出了一系列的编译器，它们接受任意访问结构的秘密共享方案作为输入，然后生成对应访问结构的泄露抵抗型或非可塑性秘密共享方案。一个泄露抵抗的秘密共享方案可以隐藏秘密，防止一个对手获取到未授权的一组分享，即使这个对手额外获得了其它所有秘密分享的一些有大小限制的泄露。一个非可塑性的秘密共享方案保证由被篡改的一组分享重构的秘密要么等于原来的秘密，要么与原来的秘密完全无关。据我们所知，我们提出了首个为通用访问结构提供泄露抵抗秘密共享的通用编译器。在非可塑性秘密共享的情况下，我们加强了先前的定义，提供了他们之间的分离，以及为通用访问结构构造了一个满足强定义（关于独立的分享篡改函数）的非可塑性秘密共享方案。更准确地说，我们的方案能够抵抗并发篡改：即使对手（非适应性地）多次篡改分享，在每次篡改尝试中也可以自由选择由重构算法使用的用于重新构造被篡改秘密的授权分享集。这是对分割状态非可塑性代码和提取器的多次篡改

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_18](https://doi.org/10.1007/978-3-030-26951-7_18)
## Memory-Hard Functions from Cryptographic Primitives.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#memory-hard-functions-from-cryptographic-primitives) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#memory-hard-functions-from-cryptographic-primitives)**
### 作者
* Binyi Chen, UC Santa Barbara, Santa Barbara, USA
* Stefano Tessaro, University of Washington, Seattle, USA
### 摘要
> 记忆难函数（Memory-hard functions，简称MHFs）是一种既会在时间成本上也会在内存成本上强制执行的中等难度函数（通常以一种权衡形式存在）。它们被用于密码保护、基于密码的密钥派生以及加密货币等领域，并在过去几年里受到了相当多的理论研究。然而，分析研究将MHFs视为某个底层哈希函数\(\mathcal {H}\)的操作模式，并对其进行了大量的理论检验。然而，这是一个非常强的假设，因为此类哈希函数是由更简单的基元构建而成的，遵循着一定程度的特定设计范式。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_19](https://doi.org/10.1007/978-3-030-26951-7_19)
## Data-Independent Memory Hard Functions: New Attacks and Stronger Constructions.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#data-independent-memory-hard-functions-new-attacks-and-stronger-constructions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#data-independent-memory-hard-functions-new-attacks-and-stronger-constructions)**
### 作者
* Jeremiah Blocki, Purdue University, West Lafayette, USA
* Ben Harsha, Purdue University, West Lafayette, USA
* Seunghoon Lee, Purdue University, West Lafayette, USA
* Lu Xing, Purdue University, West Lafayette, USA
* Siteng Kang, Penn State University, State College, USA
* Samson Zhou, Indiana University, Bloomington, USA
### 摘要
> 记忆困难函数（MHF）是设计中等价格密码哈希算法和平等工作证明的关键加密原语。在过去的几年里，提出了几个越来越严格的MHF目标，包括要求MHF具有高顺序空时（ST）复杂性、并行空时复杂性、平均化区域时间（aAT）复杂性和持续空间复杂性的要求。无数据相关的内存困难函数（iMHF）在密码哈希的背景下具有特殊的兴趣，因为它们天然地抵抗侧信道攻击。iMHF可以使用具有\(N=2^n\)节点和低入度的有向无环图（DAG）G来指定，并且可以使用扔石子游戏来分析iMHF的复杂性。最近，Alwen等人构造了一个名为DRSample的DAG，其aAT复杂性至少为\(\varOmega \!\left( N^2/{\text {log}} N\right) \)。在渐近意义上，DRSample的性能优于所有先前的iMHF构造，包括赢得密码哈希竞赛的Argon2i（aAT成本为\({\mathcal {O}} \!\left( N^{1.767}\right) \)），尽管这些边界中的常数理解不足。我们证明Boneh等人的贪婪扔石子策略对DRSample特别有效，例如，aAT成本为\({\mathcal {O}} (N^2/{\text {log}} N)\)。事实上，我们的实证分析颠倒了Alwen等人对DRSample在实际值\(N \le 2^{24}\)下对已知扔石子攻击提供更强抵抗力的先前结论。我们通过使用位反转图扩展DRSample构造了一个新的iMHF候选（DRSample+BRG）。然后，我们证明了该构造在每个MHF标准下都是渐近最优的，并且通过实验证明我们的iMHF对已知扔石子攻击提供了最好的抵抗力。例如，我们表明任何并行扔石子攻击的aAT成本要么是\(\omega (N^2)\)，要么需要至少\(\varOmega (N)\)步，同时在DAG上至少需要\(\varOmega (N/{\text {log}} N)\)个石头。这使得我们的构造成为第一个具有强持续空间复杂性保证的实际iMHF，并立即暗示任何并行扔石子的aAT复杂性都是\(\varOmega (N^2/{\text {log}} N)\)。我们还证明了任何顺序扔石子（包括贪婪扔石子攻击）的aAT成本为\(\varOmega \!\left( N^2\right) \)，如果一个合理的猜想成立，任何并行扔石子的aAT成本为\(\varOmega (N^2 \log \log N/{\text {log}} N)\)，这是对于iMHF最好的可能边界。我们实现了我们的新iMHF，并证明它与Argon2的速度一样快。在此过程中，我们提出了对Argon2轮函数的简单修改，可以将攻击者的aAT成本增加近一个数量级，而不增加在CPU上的运行时间。最后，我们提供了一个扔石子的简化，证明在并行随机预言模型（PROM）中，评估类似于Argon2i或DRSample+BRG的iMHF的成本由底层DAG的扔石子成本给出。先前的扔石子简化假设iMHF轮函数在哈希之前连接输入标签，并且不适用于实际的iMHF，如Argon2i、DRSample或DRSample+BRG，其中输入标签是通过XOR运算在一起的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_20](https://doi.org/10.1007/978-3-030-26951-7_20)
## Simultaneous Amplification: The Case of Non-interactive Zero-Knowledge.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#simultaneous-amplification-the-case-of-non-interactive-zero-knowledge) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#simultaneous-amplification-the-case-of-non-interactive-zero-knowledge)**
### 作者
* Vipul Goyal, CMU, Pittsburgh, USA
* Aayush Jain, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
### 摘要
> 在这项工作中，我们探讨了非交互零知识论证系统（NIZK）的同时隐私和正确性放大的问题。我们证明了对于任意常数\(\epsilon >0\)，满足\(\delta _s+\delta _z=1-\epsilon \)的\(\delta _s-\)正确性和\(\delta _z-\)零知识NIZK候选者，可以通过仅额外假设一个次指数安全的公钥加密系统转换为计算上正确性和零知识性的候选者。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_21](https://doi.org/10.1007/978-3-030-26951-7_21)
## The Privacy Blanket of the Shuffle Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#the-privacy-blanket-of-the-shuffle-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#the-privacy-blanket-of-the-shuffle-model)**
### 作者
* Borja Balle, The Alan Turing Institute, London, UK
* James Bell, The Alan Turing Institute, London, UK
* Adrià Gascón, The Alan Turing Institute, London, UK
* Borja Balle, University of Warwick, Coventry, UK
* Adrià Gascón, University of Warwick, Coventry, UK
* Borja Balle, Georgetown University, Washington, D.C., USA
* Kobbi Nissim, Georgetown University, Washington, D.C., USA
### 摘要
> 这项工作研究了差分隐私在最近提出的洗牌模型中的应用。与本地模型不同，从用户收集私有数据的服务器可以将输入追溯到特定用户，而在洗牌模型中，用户匿名向服务器提交其私有输入。这种设置产生了一种信任模型，介于经典策展人和本地差分隐私模型之间。洗牌模型是Bittau等人引入的Encode，Shuffle，Analyze（ESA）模型的核心思想（SOPS 2017）。 Cheu等人（EUROCRYPT 2019）的最新工作分析了洗牌模型的差分隐私属性，并表明在某些情况下，混洗协议提供的准确性比本地协议严格更好。此外，Erlingsson等人（SODA 2019）提供了一个隐私放大界限，以量化每个用户使用的随机器的本地差分隐私所实现的策展人差分隐私水平。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_22](https://doi.org/10.1007/978-3-030-26951-7_22)
## Realizing Chosen Ciphertext Security Generically in Attribute-Based Encryption and Predicate Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#realizing-chosen-ciphertext-security-generically-in-attribute-based-encryption-and-predicate-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#realizing-chosen-ciphertext-security-generically-in-attribute-based-encryption-and-predicate-encryption)**
### 作者
* Venkata Koppula, Weizmann Institute of Science, Rehovot, Israel
* Brent Waters, University of Texas at Austin and NTT Research, Austin, USA
### 摘要
> 我们提供了从任何选择明文安全属性基加密（ABE）或单侧谓词加密系统到选择密文安全系统的通用和黑盒变换。我们的转换仅需要原始ABE方案的IND-CPA安全性，同时配合具有特殊安全属性的伪随机生成器（PRG）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_23](https://doi.org/10.1007/978-3-030-26951-7_23)
## Match Me if You Can: Matchmaking Encryption and Its Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#match-me-if-you-can-matchmaking-encryption-and-its-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#match-me-if-you-can-matchmaking-encryption-and-its-applications)**
### 作者
* Giuseppe Ateniese, Stevens Institute of Technology, Hoboken, NJ, USA
* Danilo Francati, Stevens Institute of Technology, Hoboken, NJ, USA
* David Nuñez, NuCypher, San Francisco, CA, USA
* Daniele Venturi, Department of Computer Science, Sapienza University of Rome, Rome, Italy
### 摘要
> 我们介绍了一种新的加密形式，称为配对加密（ME）。使用配对加密的话，发送者 S 和接收者 R（各自有自己的属性）都可以制定对方必须满足的策略，以使得消息能够被揭示。主要的安全保证是保护隐私的策略匹配：在解密过程中，除了匹配成功或失败的信息，不会泄露任何其他信息。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_24](https://doi.org/10.1007/978-3-030-26951-7_24)
## ABE for DFA from k-Lin.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#abe-for-dfa-from-k-lin) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#abe-for-dfa-from-k-lin)**
### 作者
* Junqing Gong, CNRS, ENS and PSL, Paris, France
* Hoeteck Wee, CNRS, ENS and PSL, Paris, France
* Brent Waters, University of Texas at Austin, Austin, USA
* Hoeteck Wee, Algorand, Boston, USA
* Brent Waters, NTT Research, Palo Alto, USA
### 摘要
> 我们提出了一种基于静态假设的双线性群结构的确定性有限自动机（DFA）的属性加密（ABE）方案，这解决了Waters（CRYPTO 2012）提出的一个未解之谜。我们的主要构建在素数阶双线性群中，在标准k-线性假设下，对无界勾结实现了选择性安全性，而先前的构建都依赖q-型假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_25](https://doi.org/10.1007/978-3-030-26951-7_25)
## Attribute Based Encryption (and more) for Nondeterministic Finite Automata from LWE.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#attribute-based-encryption-and-more-for-nondeterministic-finite-automata-from-lwe) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#attribute-based-encryption-and-more-for-nondeterministic-finite-automata-from-lwe)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Monosij Maitra, IIT Madras, Chennai, India
* Shota Yamada, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### 摘要
> 将标准假设应用于统一计算模型，构建属性基加密（Attribute Based Encryption，简称ABE）是一个重要问题，目前对此问题了解甚少。在此情境下已知的ABE方案（i）避免了对多线性映射或不可区分混淆的依赖，（ii）支持无限长度的输入，以及（iii）允许对手在安全游戏中不受限地请求无限个密钥，只有Waters在2012年的密码学会议论文[57]及其变种中提供了这些特性。Waters首次提供了对确定性有限自动机（Deterministic Finite Automata，简称DFA）满足上述特性的ABE，并基于双线性映射的参数化或“q类型”假设进行构建。然而，将这种构建推广到非确定性有限自动机（Nondeterministic Finite Automata，简称NFA）仍然是上述研究中明确提出的一个未解决问题，并且到目前为止尚未取得任何进展。基于其他假设（如更常见的配对基假设或格基假设）的构建方法也难以实现。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_26](https://doi.org/10.1007/978-3-030-26951-7_26)
## The Distinction Between Fixed and Random Generators in Group-Based Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#the-distinction-between-fixed-and-random-generators-in-group-based-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#the-distinction-between-fixed-and-random-generators-in-group-based-assumptions)**
### 作者
* James Bartusek, Princeton University, Princeton, USA
* Fermi Ma, Princeton University, Princeton, USA
* Mark Zhandry, Princeton University & NTT Research, Princeton, USA
### 摘要
> 有关于基于群假设如DDH中生成器g确切角色的共识令人意外地很少。有些研究认为g是群描述的固定部分，而其他研究则认为它是随机的。我们从多个角度研究这种微妙的区别。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_27](https://doi.org/10.1007/978-3-030-26951-7_27)
## Unifying Computational Entropies via Kullback-Leibler Divergence.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#unifying-computational-entropies-via-kullback-leibler-divergence) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#unifying-computational-entropies-via-kullback-leibler-divergence)**
### 作者
* Rohit Agrawal, John A. Paulson School of Engineering and Applied Sciences, Harvard University, Cambridge, MA, 02138, USA
* Yi-Hsiu Chen, John A. Paulson School of Engineering and Applied Sciences, Harvard University, Cambridge, MA, 02138, USA
* Thibaut Horel, John A. Paulson School of Engineering and Applied Sciences, Harvard University, Cambridge, MA, 02138, USA
* Salil Vadhan, John A. Paulson School of Engineering and Applied Sciences, Harvard University, Cambridge, MA, 02138, USA
### 摘要
> 我们引入差异熵的难度，这是搜索问题中的一种新的难度概念。一方面，它满足所有单向函数的条件；另一方面，它涉及到最近构建伪随机生成器和统计隐藏承诺方案所使用的下一块伪熵和不可达熵等两种形式的计算熵。因此，差异熵的难度统一了后两种计算熵的概念，并揭示了它们之间明显的“二元性”。此外，它提供了一个更模块化和有启发性的证明，即单向函数暗示了下一块不可达熵，结构类似于单向函数暗示了下一块伪熵的证明（Vadhan和Zheng，STOC'12）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_28](https://doi.org/10.1007/978-3-030-26951-7_28)
