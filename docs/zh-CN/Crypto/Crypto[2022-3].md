# Crypto[2022-3]
## PI-Cut-Choo and Friends: Compact Blind Signatures via Parallel Instance Cut-and-Choose and More.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#pi-cut-choo-and-friends-compact-blind-signatures-via-parallel-instance-cut-and-choose-and-more) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#pi-cut-choo-and-friends-compact-blind-signatures-via-parallel-instance-cut-and-choose-and-more)**
### 作者
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Rutchathon Chairattana-Apirom, Brown University, Providence, RI, 02906, USA
* Anna Lysyanskaya, Brown University, Providence, RI, 02906, USA
### 摘要
> 盲签名方案是保护隐私认证中最研究充分的工具之一。然而，目前已知的可证明安全的盲签名构造要么依赖非标准的困难假设，或者需要随着同时发出的签名数量线性增长的参数，或者牵涉到效率极低的一般性技术，如通用安全两方计算。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_1](https://doi.org/10.1007/978-3-031-15982-4_1)
## Augmented Random Oracles.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#augmented-random-oracles) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#augmented-random-oracles)**
### 作者
* Mark Zhandry, NTT Research, Sunnyvale, USA
* Mark Zhandry, Princeton University, Princeton, USA
### 摘要
> 我们提出了一种新的范式来证明基于随机预言机的协议的安全性，我们称之为增强随机预言机模型（AROM）。我们展示了AROM捕捉到了广泛的重要的随机预言机不可能性结果。因此，在AROM中的证明意味着对这些不可能性的某种韧性。然后，我们考虑了三种受不可能性限制的ROM转换：Fiat-Shamir（FS），Fujisaki-Okamoto（FO）和Encrypt-with-Hash（EwH）。我们在每种情况下展示了如何通过加强构建模块或修改转换来在AROM中获得安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_2](https://doi.org/10.1007/978-3-031-15982-4_2)
## To Label, or Not To Label (in Generic Groups).
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#to-label-or-not-to-label-in-generic-groups) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#to-label-or-not-to-label-in-generic-groups)**
### 作者
* Mark Zhandry, NTT Research, Sunnyvale, USA
* Mark Zhandry, Princeton University, Princeton, USA
### 摘要
> 通用群是分析基于群的密码系统的可行性和不可行性的重要工具。通用群有两个不同的广泛版本，即Shoup和Maurer的版本，主要区别在于是否给出群元素的显式标签。这两个模型经常被视为等价。然而，在这项工作中，我们证明了这两个模型实际上是非常不同的，并且在陈述通用群结果时需要谨慎。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_3](https://doi.org/10.1007/978-3-031-15982-4_3)
## Lower Bound on SNARGs in the Random Oracle Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#lower-bound-on-snargs-in-the-random-oracle-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#lower-bound-on-snargs-in-the-random-oracle-model)**
### 作者
* Iftach Haitner, Tel-Aviv University, Tel Aviv, Israel
* Daniel Nukrai, Tel-Aviv University, Tel Aviv, Israel
* Eylon Yogev, Bar-Ilan University, Ramat Gan, Israel
### 摘要
> 简洁的非交互式论证（SNARGs）已经成为密码学界的一项基本原语。本研究的重点是在随机预言机模型（ROM）下构建SNARGs。这种SNARGs具有后量子安全性，并且可以使用轻量级密码学来启发性地实例化随机预言机。如果没有t次查询的恶意证明者能以大于ε的概率说服验证者接受错误的陈述，那么ROM-SNARG是（t,ε）-有声的。最近，Chiesa-Yogev（CRYPTO '21）提出了一个长度为\(\varTheta (\log (t/\varepsilon ) \cdot \log t)\)的ROM-SNARG（忽略\(\log n\)的因素，其中n是实例的大小）。然而，这种改进与（民间传说中的）\(\varOmega (\log (t/\varepsilon ))\)的下界仍然相去甚远。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_4](https://doi.org/10.1007/978-3-031-15982-4_4)
## Time-Space Tradeoffs for Sponge Hashing: Attacks and Limitations for Short Collisions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#time-space-tradeoffs-for-sponge-hashing-attacks-and-limitations-for-short-collisions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#time-space-tradeoffs-for-sponge-hashing-attacks-and-limitations-for-short-collisions)**
### 作者
* Cody Freitag, Cornell Tech, New York, USA
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, Washington, USA
* Ilan Komargodski, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, USA
### 摘要
> 海绵哈希是流行的Merkle-Damgård哈希设计的一种新颖替代方案。海绵结构在各种应用中变得越来越受欢迎，尤其是它作为SHA-3哈希标准的基础。海绵哈希由两个数字r和c（比特率和容量）以及对r+c比特的固定大小排列参数化。在这项工作中，我们研究了使用对随机排列进行实例化的海绵哈希的碰撞抗性，该排列受到对随机排列的S位辅助建议输入的对手的影响，这些对手进行了T次在线查询。Coretti等人的最新工作（CRYPTO ’18）表明，这样的对手可以在与随机c比特初始化向量相关的情况下，以\(\varTheta (ST^2/2^c + T^2/ 2^{r})\)的优势找到碰撞。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_5](https://doi.org/10.1007/978-3-031-15982-4_5)
## On Time-Space Tradeoffs for Bounded-Length Collisions in Merkle-Damgård Hashing.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#on-time-space-tradeoffs-for-bounded-length-collisions-in-merkle-damg-rd-hashing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#on-time-space-tradeoffs-for-bounded-length-collisions-in-merkle-damg-rd-hashing)**
### 作者
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, WA, USA
* Ilan Komargodski, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, USA
### 摘要
> 我们研究了在随机预言模型中，对于广泛使用的Merkle-Damgård（MD）哈希算法中寻找有界长度碰撞的预处理对手的能力。具体而言，我们考虑对手在随机预言模型中对于随机预言拥有任意S位的建议，并且最多可以对其进行T次查询。我们的目标是描述这种对手在使用随机预言构造的以范围大小为N的压缩函数的MD哈希函数中寻找B块碰撞的优势（在给定随机盐的情况下）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_6](https://doi.org/10.1007/978-3-031-15982-4_6)
## Time-Space Lower Bounds for Finding Collisions in Merkle-Damgård Hash Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#time-space-lower-bounds-for-finding-collisions-in-merkle-damg-rd-hash-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#time-space-lower-bounds-for-finding-collisions-in-merkle-damg-rd-hash-functions)**
### 作者
* Akshima, University of Chicago, Chicago, USA
* Siyao Guo, NYU Shanghai, Shanghai, China
* Qipeng Liu, Simons Institute for the Theory of Computing, Berkeley, USA
### 摘要
> 我们重新审视在辅助输入随机预言机模型中，在Merkle-Damgård哈希函数中寻找B块长碰撞的问题，其中攻击者获得有关随机预言机的S比特建议，并进行T个预言机查询。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_7](https://doi.org/10.1007/978-3-031-15982-4_7)
## Sustained Space and Cumulative Complexity Trade-Offs for Data-Dependent Memory-Hard Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#sustained-space-and-cumulative-complexity-trade-offs-for-data-dependent-memory-hard-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#sustained-space-and-cumulative-complexity-trade-offs-for-data-dependent-memory-hard-functions)**
### 作者
* Jeremiah Blocki, Purdue University, West Lafayette, IN, 47906, USA
* Blake Holman, Purdue University, West Lafayette, IN, 47906, USA
### 摘要
> 记忆硬函数（MHFs）是一种有用的密码学基元，可以用来设计平等的工作证明难题，并保护低熵秘密（如密码）免受暴力破解者的攻击。直观地说，记忆硬函数是一种其计算成本主要由内存成本支配的函数，即使攻击者使用专用硬件（FPGAs/ASICs），也不能降低计算成本。已经有几种成本度量方法提出来量化这个直觉。例如，空间-时间成本看的是算法在整个执行过程中的运行时间和最大空间使用量的乘积。Alwen和Serbinenko（STOC 2015）观察到，对函数进行多次评估的空间-时间成本可能不会与评估实例的数量成线性比例增加，并引入了更严格的要求，即记忆硬函数具有高累计内存复杂度（CMC），以确保攻击者的摊销空间-时间成本保持较大，即使攻击者对多个不同的输入并行评估函数。Alwen等人（EUROCRYPT 2018）观察到，CMC的概念仍然给攻击者带来了不希望的灵活性，例如，尽管MHF \(\texttt{Scrypt}\) 具有最大CMC \(\varOmega (N^2)\)，但攻击者可以在常数O(1)空间，时间O(N^2)内评估函数。Alwen等人引入了一个更严格的持续空间复杂度的概念，并设计了一个MHF，其具有 \(s=\varOmega (N/\log N)\) 的持续复杂度 \(t=\varOmega (N)\)，即在并行随机预言模型中评估函数的任何算法必须具有至少 \(t=\varOmega (N)\) 步，其中内存使用至少为 \(\varOmega (N/\log N)\)。在这项工作中，我们使用动态碰撞游戏和动态图来探讨依赖数据的记忆硬函数（如Argon2id和\(\texttt{Scrypt}\)）在持续空间复杂度和累计内存复杂度之间的权衡。我们设计了自己的动态图（dMHF），具有以下特性：任何动态碰撞策略要么（1）具有 \(\varOmega (N)\) 轮次和 \(\varOmega (N)\) 空间，要么（2）具有 CMC \(\varOmega (N^{3-\epsilon })\)，远大于 \(N^2\)。对于Argon2id，我们证明任何动态碰撞策略要么（1）具有 \(\varOmega (N)\) 轮次和 \(\varOmega (N^{1-\epsilon })\) 空间，要么（2）具有 CMC \(\omega (N^2)\)。我们还提出了DRSample（Alwen等人2017）的动态版本，其中任何动态碰撞策略要么（1）具有 \(\varOmega (N)\) 轮次和 \(\varOmega (N/\log N)\) 空间，要么（2）具有 CMC \(\varOmega (N^3/\log N)\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_8](https://doi.org/10.1007/978-3-031-15982-4_8)
## Low Communication Complexity Protocols, Collision Resistant Hash Functions and Secret Key-Agreement Protocols.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#low-communication-complexity-protocols-collision-resistant-hash-functions-and-secret-key-agreement-protocols) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#low-communication-complexity-protocols-collision-resistant-hash-functions-and-secret-key-agreement-protocols)**
### 作者
* Shahar P. Cohen, Department of Computer Science and Applied Mathematics, Weizmann Institute of Science, Rehovot, Israel
* Moni Naor, Department of Computer Science and Applied Mathematics, Weizmann Institute of Science, Rehovot, Israel
### 摘要
> 我们研究了在计算设置中的通信复杂性，其中可能存在不良输入，但这些输入对于任何计算能力有限的对手来说都应该很难找到。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_9](https://doi.org/10.1007/978-3-031-15982-4_9)
## Accelerating the Delfs-Galbraith Algorithm with Fast Subfield Root Detection.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#accelerating-the-delfs-galbraith-algorithm-with-fast-subfield-root-detection) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#accelerating-the-delfs-galbraith-algorithm-with-fast-subfield-root-detection)**
### 作者
* Maria Corte-Real Santos, University College London, London, UK
* Craig Costello, Microsoft Research, Redmond, USA
* Jia Shi, University of Waterloo, Waterloo, Canada
### 摘要
> 我们提出了一种新的算法，用于从给定的超奇异椭圆曲线\(E/\mathbb {F}_{p^2}\)找到一个同分畸变到子域椭圆曲线\(E'/\mathbb {F}_p\)，这是 Delfs–Galbraith 算法中处理一般超奇异同分畸变问题的瓶颈步骤。我们的核心要素是一种新颖的方法，快速确定多项式\(f \in L[X]\)是否在子域\(K \subset L\)中有任何根，同时避免使用耗时的根查找算法。特殊情况下，当\(f=\Upphi _{\ell ,p}(X,j) \in \mathbb {F}_{p^2}[X]\)，即当 f 是在超奇异 j-不变量处求得的第 \(\ell\) 个模态多项式时，这提供了有效确定相应椭圆曲线和子域曲线之间是否存在 \(\ell\)-同分畸变的方法。结合传统的 Delfs–Galbraith 步行，以这种方式检查许多在 \(\ell\)-同分畸变关系中的邻居，使我们能够在单位时间内搜索超奇异集合的更大比例部分。尽管改进后的算法的渐近复杂度仍然是原始的 Delfs–Galbraith 算法的 \(\tilde{O}(p^{1/2})\)，但我们的理论分析和实际实现都显示出其子域搜索运行时间的显著减少。这为一般超奇异同分畸变问题（即同分畸变基密码学的基础问题）的具体难度提供了新的见解，并对诸如 B-SIDH 和 SQISign 这样的方案的位安全性产生直接影响，其中 Delfs–Galbraith 是已知最佳的经典攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_10](https://doi.org/10.1007/978-3-031-15982-4_10)
## Secret Can Be Public: Low-Memory AEAD Mode for High-Order Masking.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#secret-can-be-public-low-memory-aead-mode-for-high-order-masking) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#secret-can-be-public-low-memory-aead-mode-for-high-order-masking)**
### 作者
* Yusuke Naito, Mitsubishi Electric Corporation, Kanagawa, Japan
* Yu Sasaki, NTT Social Informatics Laboratories, Tokyo, Japan
* Takeshi Sugawara, The University of Electro-Communications, Tokyo, Japan
### 摘要
> 我们提出了一种新的自适应加密认证（AEAD）模式，以有效抵御侧信道攻击。通过最小化遮蔽中重复的状态，我们的模式在高阶遮蔽下实现了最小的存储器。实现 s 位安全所需的就是与密钥相关的 s 位状态，传统方案总是通过遮蔽保护整个 s 位。我们通过引入密钥相关状态中的一个未保护状态来减小保护状态的大小：我们只保护其中一半，并将另一半交给侧信道对手。确保未保护状态和保护状态之间的独立性是关键的技术挑战，因为混合这些状态会向对手透露保护状态。我们提出了一种名为 HOMA 的新模式，它使用可调整的分组密码并具有 s/2 位分组大小，实现了 s 位安全。我们还提出了一种新的原语，用于将 HOMA 实例化为 s=128，将 SKINNY 可调整分组密码扩展到 64 位明文块、128 位密钥和 (256+3) 位调整值。我们通过使用高阶遮蔽实现 HOMA 进行硬件性能评估，其中 d≤5。对于任何 d>0，HOMA 都通过减小电路面积优于当前最先进的 PFB_Plus，超过整个 S 盒的电路面积。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_11](https://doi.org/10.1007/978-3-031-15982-4_11)
## Partial Key Exposure Attacks on BIKE, Rainbow and NTRU.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#partial-key-exposure-attacks-on-bike-rainbow-and-ntru) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#partial-key-exposure-attacks-on-bike-rainbow-and-ntru)**
### 作者
* Andre Esser, Technology Innovation Institute, Abu Dhabi, UAE
* Javier Verbel, Technology Innovation Institute, Abu Dhabi, UAE
* Alexander May, Ruhr University Bochum, Bochum, Germany
* Weiqiang Wen, LTCI, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
### 摘要
> 在所谓的部分密钥泄露攻击中，攻击者通过某些边信道泄露获得一些关于秘密密钥的信息。这些信息可能是秘密密钥位的某个部分（抹除模型），或者是秘密密钥的某个错误版本（错误模型）。目标是通过泄露的信息恢复秘密密钥。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_12](https://doi.org/10.1007/978-3-031-15982-4_12)
## Improving Support-Minors Rank Attacks: Applications to Gđisplaystyle eMSS and Rainbow.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#improving-support-minors-rank-attacks-applications-to-g-isplaystyle-emss-and-rainbow) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#improving-support-minors-rank-attacks-applications-to-g-isplaystyle-emss-and-rainbow)**
### 作者
* John Baena, Universidad Nacional de Colombia, Bogotá, Colombia
* Daniel Cabarcas, Universidad Nacional de Colombia, Bogotá, Colombia
* Pierre Briaud, Sorbonne Universités, UPMC Univ Paris 06, Paris, France
* Pierre Briaud, Inria, Team COSMIQ, Paris, France
* Ray Perlner, National Institute of Standards and Technology, Gaithersburg, USA
* Daniel Smith-Tone, National Institute of Standards and Technology, Gaithersburg, USA
* Daniel Smith-Tone, University of Louisville, Louisville, USA
* Javier Verbel, Technology Innovation Institute, Abu Dhabi, UAE
### 摘要
> 支持幼年成员（SM）方法开辟了攻击多元方案中之前无法利用的秩属性新途径，如最近在第三轮NIST候选方案\(\displaystyle G\)eMSS和Rainbow上的攻击[9,40]所示。本文深入研究了这种SM方法，并提出了一种基于Support-Minors方法的G\(\displaystyle e\)MSS大幅改进的攻击方法。尽管G\(\displaystyle e\)MSS已经受到[40]的影响，但我们的攻击使其更加容易受到攻击，即使通过增加参数的大小或者应用来自[36]的最近的投影技术以使G\(\displaystyle e\)MSS免受[40]的影响都无法修复该方案。例如，我们对G\(\displaystyle e\)MSS128参数集的攻击估计的时间复杂度为\(\displaystyle 2^{72}\)，而使用[36]进行方案修复将导致签名时间慢了一个不切实际的因子\(\displaystyle 2^{14}\)。另一个贡献是针对大规模SM系统上使用Block-Wiedemann算法作为子程序的XL策略提出可以减少内存访问成本的优化建议，当这些成本是一个问题时。在基于[7]的内存成本模型中，我们证明了[9]中的矩形MinRank攻击实际上可能会将所有第三轮Rainbow参数集的安全性降低到低于目标安全强度，这与[41]使用相同的内存成本模型所声称的下限相矛盾。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_13](https://doi.org/10.1007/978-3-031-15982-4_13)
## log *-Round Game-Theoretically-Fair Leader Election.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#log-round-game-theoretically-fair-leader-election) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#log-round-game-theoretically-fair-leader-election)**
### 作者
* Ilan Komargodski, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, 94085, USA
* Shin’ichiro Matsuo, NTT Research, Sunnyvale, 94085, USA
* Shin’ichiro Matsuo, Department of Computer Science, Georgetown University, Washington D.C., 20057, USA
* Elaine Shi, Computer Science Department, Carnegie Mellon University, Pittsburgh, 15213, USA
* Ke Wu, Computer Science Department, Carnegie Mellon University, Pittsburgh, 15213, USA
### 摘要
> 众所周知，在多数联盟存在的情况下，强公平硬币投掷是不可能实现的。最近的一系列研究表明，通过将公平性概念放宽到博弈论，我们可以克服这一经典下界。具体而言，钟等人（CRYPTO’21）展示了如何在多数联盟存在的情况下实现近似（博弈论上的）公平领导选举，而轮次复杂度可以小到 \(O(\log \log n)\) 轮。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_14](https://doi.org/10.1007/978-3-031-15982-4_14)
## Gossiping for Communication-Efficient Broadcast.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#gossiping-for-communication-efficient-broadcast) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#gossiping-for-communication-efficient-broadcast)**
### 作者
* Georgios Tsimos, University of Maryland, College Park, USA
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Charalampos Papamanthou, Yale University, New Haven, USA
### 摘要
> 拜占庭广播（Byzantine Broadcast）是许多密码协议的关键，如秘密分享、多方计算和区块链共识。本文应用八卦传播（通过向几个随机方发送消息，然后他们再做同样的事情，直到消息传递完成）并提出了在不诚实多数条件下，用于单发广播（BC）和并行广播（PBC）的高效通信协议，从多个方面改进了现有技术水平。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_15](https://doi.org/10.1007/978-3-031-15982-4_15)
## Nearly Optimal Property Preserving Hashing.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#nearly-optimal-property-preserving-hashing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#nearly-optimal-property-preserving-hashing)**
### 作者
* Justin Holmgren, NTT Research, Sunnyvale, CA, 94085, USA
* Daniel Wichs, NTT Research, Sunnyvale, CA, 94085, USA
* Minghao Liu, Northeastern University, Boston, MA, 02115, USA
* LaKyah Tyner, Northeastern University, Boston, MA, 02115, USA
* Daniel Wichs, Northeastern University, Boston, MA, 02115, USA
### 摘要
> 属性保持哈希（PPH）由一系列压缩哈希函数h组成，可以正确地通过哈希值h(x)、h(y)确定某些属性P(x, y)是否成立，而无需知道输入x、y的具体值。在基本的PPH中，当x、y是预先独立选择的最差情况值时，通过选择h，正确性应以极高的概率成立。在敌对鲁棒PPH（RPPH）中，即使x、y是敌对选择，并根据h进行动态调整，正确性也必须成立。在本研究中，我们研究了用于测量x和y之间汉明距离最多为t的（R）PPH属性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_16](https://doi.org/10.1007/978-3-031-15982-4_16)
## Collision-Resistance from Multi-Collision-Resistance.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#collision-resistance-from-multi-collision-resistance) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#collision-resistance-from-multi-collision-resistance)**
### 作者
* Ron D. Rothblum, Technion, Haifa, Israel
* Prashant Nalini Vasudevan, National University of Singapore, Singapore, Singapore
### 摘要
> 碰撞防护散列函数（CRH）是一种基本且无处不在的密码学原语。最近的一些研究工作研究了CRH的一种松弛版本，称为t路多碰撞防护散列函数（t-MCRH）。这些函数家族在计算上很难找到t路碰撞，即使这样的碰撞很常见（甚至(t-1)路碰撞很容易找到）。当t=2时，对应于标准的CRH，但自然而然地可以研究较大的t值下的t-MCRH。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_17](https://doi.org/10.1007/978-3-031-15982-4_17)
## Post-quantum Simulatable Extraction with Minimal Assumptions: Black-Box and Constant-Round.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#post-quantum-simulatable-extraction-with-minimal-assumptions-black-box-and-constant-round) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#post-quantum-simulatable-extraction-with-minimal-assumptions-black-box-and-constant-round)**
### 作者
* Nai-Hui Chia, Rice University, Houston, USA
* Kai-Min Chung, Academia Sinica, Taipei, Taiwan
* Xiao Liang, Stony Brook University, Stony Brook, USA
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 从后量子半诚实的遗忘传输的最小假设出发，我们构建了第一个针对量子多项式时间(QPT)对手的\(\varepsilon\)-可模拟的双方计算(2PC)，这种计算既是常数轮的，又是黑盒的(对于构造和安全性降低都是如此)。Chia, Chung, Liu, 和Yamakawa(FOCS’21)的最新工作表明，在常数轮中，带有标准基于模拟的安全性的后量子2PC是不可能的，除非\({\textbf{NP}}\subseteq \textbf{BQP}\)或者依赖于非黑盒模拟。我们目标的\(\varepsilon\)-可模拟性是标准基于模拟的安全性的一种放宽，允许出现任意小的显著模拟误差\(\varepsilon\)。此外，当允许量子通信时，我们可以进一步将假设弱化为后量子安全单向函数(PQ-OWFs)，同时保持常数轮和黑盒特性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_18](https://doi.org/10.1007/978-3-031-15982-4_18)
## The Gap Is Sensitive to Size of Preimages: Collapsing Property Doesn't Go Beyond Quantum Collision-Resistance for Preimages Bounded Hash Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#the-gap-is-sensitive-to-size-of-preimages-collapsing-property-doesnt-go-beyond-quantum-collision-resistance-for-preimages-bounded-hash-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#the-gap-is-sensitive-to-size-of-preimages-collapsing-property-doesnt-go-beyond-quantum-collision-resistance-for-preimages-bounded-hash-functions)**
### 作者
* Shujiao Cao, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Rui Xue, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Shujiao Cao, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
* Rui Xue, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
### 摘要
> 作为量子碰撞阻力的增强，Unruh（EUROCRYPT 2016）提出的哈希函数的坍缩特性强调了从哈希值的叠加态到坍塌态的区分难度。坍塌特性意味着量子碰撞阻力，但尚不清楚从坍塌哈希函数到量子碰撞阻力哈希函数是否存在带权减少。在本文中，我们进一步研究了这两个属性之间的关系，并得出了两个有趣的结果，如下所示：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_19](https://doi.org/10.1007/978-3-031-15982-4_19)
## New Constructions of Collapsing Hashes.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#new-constructions-of-collapsing-hashes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#new-constructions-of-collapsing-hashes)**
### 作者
* Mark Zhandry, NTT Research, Sunnyvale, USA
* Mark Zhandry, Princeton University, Princeton, USA
### 摘要
> 折叠是碰撞抗性的一个后量子强化，需要将许多经典结果扩展到量子设置中。不幸的是，目前唯一存在的关于折叠哈希的标准模型证明需要使用LWE。我们通过使用以下问题中任何一个的量子难度，构建了第一个折叠哈希算法：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_20](https://doi.org/10.1007/978-3-031-15982-4_20)
## Statistically Sender-Private OT from LPN and Derandomization.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#statistically-sender-private-ot-from-lpn-and-derandomization) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#statistically-sender-private-ot-from-lpn-and-derandomization)**
### 作者
* Nir Bitansky, Tel Aviv University, Tel Aviv, Israel
* Sapir Freizeit, Tel Aviv University, Tel Aviv, Israel
### 摘要
> 我们基于学习带噪声的假设（LPN）和标准的Nisan-Wigderson风格解随机化的假设，构建了一个具有统计发送者隐私（SSP OT）的两轮无意传输协议。除了本身具有吸引力外，SSP OT协议已被证明是广泛的密码应用中最小化轮数的强大工具，涉及了从证明系统、安全计算协议到统计零知识中的困难问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_21](https://doi.org/10.1007/978-3-031-15982-4_21)
## Constructive Post-Quantum Reductions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#constructive-post-quantum-reductions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#constructive-post-quantum-reductions)**
### 作者
* Nir Bitansky, Tel Aviv University, Tel Aviv, Israel
* Zvika Brakerski, Weizmann Institute of Science, Rechovot, Israel
* Yael Tauman Kalai, Microsoft Research, Cambridge, MA, USA
* Yael Tauman Kalai, Massachusetts Institute of Technology, Cambridge, MA, USA
### 摘要
> 是否可能将经典的缩减转化为后量子缩减？有一种常见观点是，尽管这在交互式设置中存在问题，但非交互式缩减是可以实现的。然而，在考虑量子辅助输入时，这种转换会导致一个非构造性的后量子缩减，需要复制量子辅助输入，这在一般情况下是低效甚至不可能实现的。这违反了可证明密码学的双赢前提：对加密原语的攻击应该导致算法上的优势。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_22](https://doi.org/10.1007/978-3-031-15982-4_22)
## Differential Cryptanalysis in the Fixed-Key Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#differential-cryptanalysis-in-the-fixed-key-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#differential-cryptanalysis-in-the-fixed-key-model)**
### 作者
* Tim Beyne, imec-COSIC, KU Leuven, Leuven, Belgium
* Vincent Rijmen, imec-COSIC, KU Leuven, Leuven, Belgium
* Vincent Rijmen, University of Bergen, Bergen, Norway
### 摘要
> 我们提出了一种系统性的固定密钥差分概率分析方法。它基于“准差分路径”的传播，这种方式可以在理论上合理地追踪满足差分特性的值上的概率线性关系。研究显示，差分的固定密钥概率可以表示为其准差分

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_23](https://doi.org/10.1007/978-3-031-15982-4_23)
## Simplified MITM Modeling for Permutations: New (Quantum) Attacks.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#simplified-mitm-modeling-for-permutations-new-quantum-attacks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#simplified-mitm-modeling-for-permutations-new-quantum-attacks)**
### 作者
* André Schrottenloher, Cryptology Group, CWI, Amsterdam, The Netherlands
* Marc Stevens, Cryptology Group, CWI, Amsterdam, The Netherlands
### 摘要
> Meet-in-the-Middle（MITM）是一种通用的范式，内部状态通过两个独立路径（“前向”和“后向”）进行计算，然后进行匹配。随着时间的推移，MITM攻击利用了更精细的技术，并利用了额外的自由和结构，使得查找和优化此类攻击变得更加复杂。这导致了使用详细的攻击模型来为通用求解器自动搜索改进的攻击，尤其是由Bao等人在EUROCRYPT 2021开发的MILP模型的使用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_24](https://doi.org/10.1007/978-3-031-15982-4_24)
## Constructing and Deconstructing Intentional Weaknesses in Symmetric Ciphers.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#constructing-and-deconstructing-intentional-weaknesses-in-symmetric-ciphers) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#constructing-and-deconstructing-intentional-weaknesses-in-symmetric-ciphers)**
### 作者
* Christof Beierle, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* Tim Beyne, imec-COSIC, KU Leuven, Leuven, Belgium
* Patrick Felke, University of Applied Sciences Emden/Leer, Emden, Germany
### 摘要
> 蓄意削弱的密码在执法方面的政治讨论中备受关注，就像不断重演的加密战争一样，并且最近的进展已引起学术界的关注。2021年Eurocrypt会议上的一篇论文显示，被广泛部署的流密码GEA-1的安全性被蓄意秘密削弱到了40位，以满足上世纪90年代末实施的欧洲出口限制。然而，没有解释该如何构建这种情况。另一方面，我们看到了在CRYPTO 2020年发布的恶意设计框架，它允许构建带有后门的可调节分组密码，其中恢复后门的难度依赖于良好理解的加密假设。然而，构建的可调节分组密码与通用密码（如AES）相比非常不同。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_25](https://doi.org/10.1007/978-3-031-15982-4_25)
## Simon's Algorithm and Symmetric Crypto: Generalizations and Automatized Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#simons-algorithm-and-symmetric-crypto-generalizations-and-automatized-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#simons-algorithm-and-symmetric-crypto-generalizations-and-automatized-applications)**
### 作者
* Federico Canale, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* Lukas Stennes, Ruhr University Bochum, Bochum, Germany
### 摘要
> 在本文中，我们深入研究了如何应用Simon算法来破解对称加密原语。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_26](https://doi.org/10.1007/978-3-031-15982-4_26)
