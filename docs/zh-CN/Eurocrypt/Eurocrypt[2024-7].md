# Eurocrypt[2024-7]
## Practical Attack on All Parameters of the DME Signature Scheme.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#practical-attack-on-all-parameters-of-the-dme-signature-scheme) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#practical-attack-on-all-parameters-of-the-dme-signature-scheme)**
### 作者
* Pierre Briaud, Sorbonne Université, UPMC Univ Paris 06, Paris, France
* Pierre Briaud, Inria, Team COSMIQ, Paris, France
* Maxime Bros, National Institute of Standards and Technology (NIST), Gaithersburg, MD, USA
* Ray Perlner, National Institute of Standards and Technology (NIST), Gaithersburg, MD, USA
* Daniel Smith-Tone, National Institute of Standards and Technology (NIST), Gaithersburg, MD, USA
* Daniel Smith-Tone, University of Louisville, Louisville, KY, USA
### 摘要
> DME 是近期由 NIST 发起的附加签名请求中的一个多元方案。它的性能是所有候选者中最好的之一。公钥由私钥构成，私钥由具有非常结构化的线性和非线性成分的交替构成，并在扩展域上定义。我们利用这些结构提出了一种代数攻击，可在所有 DME 参数上实际应用。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_1](https://doi.org/10.1007/978-3-031-58754-2_1)
## Signatures with Memory-Tight Security in the Quantum Random Oracle Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#signatures-with-memory-tight-security-in-the-quantum-random-oracle-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#signatures-with-memory-tight-security-in-the-quantum-random-oracle-model)**
### 作者
* Keita Xagawa, Technology Innovation Institute, Abu Dhabi, United Arab Emirates
### 摘要
> 在密码学中，约束于优势和运行时间的标准约束之外，当底层问题可以通过大内存有效地解决时，降低记忆力的紧密度就显得重要。如Auerbach，Cash，Fersch和Kiltz（CRYPTO 2017）所讨论的那样。Diemert，Gellert，Jager和Lyu（ASIACRYPT 2021）以及Ghoshal，Ghosal，Jaeger和Tessaro（EUROCRYPT 2022）在随机神谕模型下为数字签名的多重挑战安全性提供了记忆性紧凑的证明。
> 
> 本文针对量子随机神谕模型中的后量子签名方案研究了记忆性紧密度的降低。具体而言，我们通过紧密度降低展示了来自损失鉴别的签名方案在量子随机神谕模型下实现了多重挑战安全性。此外，我们证明来自损失鉴别的签名方案通过降低紧密度实现了Boneh和Zhandry（CRYPTO 2013）以及Alagic，Majenz，Russell和Song（EUROCRYPT 2020）提出的量子签名神谕等更高级别的安全性。我们还表明，来自原像样本函数的签名方案通过降低紧密度实现了这些安全性。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_2](https://doi.org/10.1007/978-3-031-58754-2_2)
## Key Exchange with Tight (Full) Forward Secrecy via Key Confirmation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#key-exchange-with-tight-full-forward-secrecy-via-key-confirmation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#key-exchange-with-tight-full-forward-secrecy-via-key-confirmation)**
### 作者
* Jiaxin Pan, University of Kassel, Kassel, Germany
* Doreen Riepel, University of California San Diego, La Jolla, USA
* Runzhi Zeng, Norwegian University of Science and Technology, Trondheim, Norway
### 摘要
> 强认证密钥交换（AKE）协议的弱前向保密性（wFS）是（完整）前向保密性（FS）的一种被动变体。 从wFS升级到FS的自然机制是使用密钥确认消息，这些消息在传输中计算一个消息认证码（MAC）。 不幸的是，Gellert，Gjøsteen，Jacobson和Jager（GGJJ，CRYPTO 2023）表明，即使使用紧密约简建立了wFS，该机制本质上会导致与用户数量成比例的损失，从而产生总体非紧凑约简。
> 
> 受GGJJ启发，我们提出了一个新概念，称为单向可验证弱前向保密性（OW-VwFS），并证明OW-VwFS可以在随机预言模型（ROM）中通过密钥确认紧密地转换为FS。 为了实现我们的通用转换，我们展示了几个紧密的wFS AKE协议还满足我们的OW-VwFS概念。 我们强调，使用Pan，Wagner和Zeng（CRYPTO 2023）提出的最新基于格的协议可以通过经典的随机预言模型中的密钥确认给我们提供第一个基于格的紧密FS AKE。 除此之外，我们还获得了一个基于Decisional-Diffie-Hellman的协议，比以前的协议更高效。
> 
> 最后，我们将通过密钥确认对FS的研究提升到量子随机预言模型（QROM）。 虽然我们的安全约简总体上不是紧凑的，但它匹配了QROM中wFS的最佳现有界限（Pan，Wagner和Zeng，ASIACRYPT 2023），即它是平方根和会话紧致的。 我们的分析处于多挑战设置中，并且比Pan等人的单挑战设置更加现实。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_3](https://doi.org/10.1007/978-3-031-58754-2_3)
## SLAP: Succinct Lattice-Based Polynomial Commitments from Standard Assumptions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#slap-succinct-lattice-based-polynomial-commitments-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#slap-succinct-lattice-based-polynomial-commitments-from-standard-assumptions)**
### 作者
* Martin R. Albrecht, King’s College London and SandboxAQ, London, UK
* Giacomo Fenzi, EPFL, Lausanne, Switzerland
* Oleksandra Lapiha, Royal Holloway, University of London, London, UK
* Ngoc Khanh Nguyen, King’s College London, London, UK
### 摘要
> 最近关于基于格的可提取多项式承诺的研究可分为两类：(i) 源自Albrecht、Cini、Lai、Malavolta和Thyagarajan的功能承诺的非交互式构造（CRYPTO 2022），以及 (ii) 基于Bulletproofs协议的格适应性构造（S＆P 2018）。前一类在标准模型中具有安全性，尽管需要知识假设。相反，类似于Bulletproofs的协议可以在可验证的假设下保持安全，但由于涉及减法集的技术限制，它们仅提供逆多项式的声誉错误。当将这些协议转换为使用Fiat-Shamir范例的非交互式设置时，这个问题变得尤为棘手。
> 
> 在本研究中，我们提出了第一个基于格的非交互式可提取多项式承诺方案，在随机预言者模型中基于标准假设实现了对数多项式大小的证明和验证器运行时间（与所承诺消息的长度成正比）。我们工作的核心是一种新的基于树的承诺方案，以及受到FRI（ICALP 2018）启发的多项式评估的高效证明。从本质上讲，构造的交互式版本在“Power-Ring BASIS”假设的“多实例版本”下是安全的（Eprint 2023/846）。然后，通过引入几种独立利益的重新随机化技术，我们将安全性基于Module-SIS假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_4](https://doi.org/10.1007/978-3-031-58754-2_4)
## Universal Composable Password Authenticated Key Exchange for the Post-Quantum World.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#universal-composable-password-authenticated-key-exchange-for-the-post-quantum-world) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#universal-composable-password-authenticated-key-exchange-for-the-post-quantum-world)**
### 作者
* You Lyu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* You Lyu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shuai Han, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shuai Han, School of Cyber Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
### 摘要
> 本文中，我们利用同构构造了第一个在随机神谕模型（ROM）中具有通用可组合安全性的密码身份认证密钥交换（PAKE）方案。我们还在量子随机神谕模型（QROM）中构建了第一个具有UC安全性的两个PAKE方案，一个基于学习误差（LWE）假设，另一个基于同构设置下的群作用决策Diffie-Hellman（GA-DDH）假设。为了获得我们在ROM中的UC安全PAKE方案，我们提出了一种通用的从基本的有损公钥加密（LPKE）和CCA安全PKE构造PAKE的方法。我们还引入了一种新型的LPKE变体，称为可提取LPKE（eLPKE）。通过用eLPKE替换基本LPKE，我们的通用PAKE构造在QROM中实现了UC安全。LPKE和eLPKE不仅可以来自LWE，还可以来自GA-DDH，基于LWE或GA-DDH有四个具有UC安全性的PAKE方案在ROM或QROM中实现。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_5](https://doi.org/10.1007/978-3-031-58754-2_5)
## Asymptotics and Improvements of Sieving for Codes.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#asymptotics-and-improvements-of-sieving-for-codes) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#asymptotics-and-improvements-of-sieving-for-codes)**
### 作者
* Léo Ducas, Centrum Wiskunde & Informatica, Amsterdam, Netherlands
* Léo Ducas, Leiden University, Leiden, Netherlands
* Simona Etinski, Leiden University, Leiden, Netherlands
* Andre Esser, Technology Innovation Institute, Abu Dhabi, United Arab Emirates
* Elena Kirshanova, Technology Innovation Institute, Abu Dhabi, United Arab Emirates
* Elena Kirshanova, Immanuel Kant Baltic Federal University, Kaliningrad, Russia
### 摘要
> 近期，Guo、Johansson 和 Nguyen（Eprint’23）提出了一个有前途的方法，将格子筛选技术适应于编码，特别是声称具体的密码分析方案有所改进。他们算法的核心是将近邻搜索（NNS）问题简化，为此他们设计了一种特殊的方法。在本研究中，我们旨在更好地理解这种方法。首先，我们提供了原始论文中没有的渐近分析。其次，我们提出了一种更系统地使用已知的NNS技术，即局部敏感哈希和过滤（LSH / F）的方法，这种方法在筛选格子的情况下已经得到了非常成功的应用。我们建立了筛选方法的首个基线，针对常规最坏参数（全距离解码，复杂度最大化所有代码率），解码复杂度为\(2^{0.117n}\)。我们的累积改进最终使我们能够将最艰难的参数筛选解码复杂度降低到 \(2^{0.101n}\) 。虽然它胜过了BJMM算法（Eurocrypt'12），但仍不及Both和May的最先进的常规ISD方法（PQCrypto'18）。就格子而言，我们发现Random-Spherical-Code-Product（RPC）具有最佳渐近复杂度。此外，我们还考虑了一种似乎专门针对汉明球的替代方法，我们认为它可能对实际利益具有吸引力，因为它可能掩盖了比RPC还少的次指数开销。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_6](https://doi.org/10.1007/978-3-031-58754-2_6)
## Isogeny Problems with Level Structure.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#isogeny-problems-with-level-structure) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#isogeny-problems-with-level-structure)**
### 作者
* Luca De Feo, IBM Research Europe, Zurich, Switzerland
* Tako Boris Fouotsa, EPFL, Lausanne, Switzerland
* Lorenz Panny, Technische Universität München, Munich, Germany
### 摘要
> 给定两个椭圆曲线和它们之间的同构度，找到同构被认为是一个困难问题——几乎任何基于同构的方案的安全性都依赖于此。然而，如果我们将关于同构在足够大子群上行为的信息添加到上述数据中，问题就会变得容易起来，正如最近对SIDH的密码分析所显示的那样。
> 
> 在将同构限制到完整的 N-挠子群和没有“挠信息”之间存在一系列有趣的中间问题，这引发了每个问题究竟有多容易或多困难的问题。在这里，我们探讨模同构问题，其中挠信息被 \(2\times 2\) 矩阵群的作用所掩盖。我们提供了这些问题之间的简化，按其难度对其进行分类，并将其与文献中找到的安全假设联系起来。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_7](https://doi.org/10.1007/978-3-031-58754-2_7)
## Key Recovery Attack on the Partial Vandermonde Knapsack Problem.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#key-recovery-attack-on-the-partial-vandermonde-knapsack-problem) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#key-recovery-attack-on-the-partial-vandermonde-knapsack-problem)**
### 作者
* Dipayan Das, NTT Social Informatics Laboratories, Tokyo, Japan
* Antoine Joux, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 偏范德蒙德（PV）背包问题是低密度不均匀SIS问题的一种代数变体。该问题已被用作各种基于格的构造的基本组成部分，包括签名（ACNS’14，ACISP’18），加密（DCC’15，DCC’20）和签名聚合（Eprint’20）。在Crypto’22上，Boudgoust，Gachon和Pellet-Mary提出了一种关于PV背包的关键区分攻击，利用了问题的代数特性。不幸的是，他们的攻击并未提供密钥恢复，除了最坏情况的密钥。
> 
> 在本文中，我们提出了PV背包问题的另一种替代攻击，可以为更大范围的密钥提供密钥恢复。与Crypto’22攻击类似，它基于格降维，并使用降低维度的技术来加速底层格降维算法，并增强其性能。作为一个副产品，我们的攻击将PV背包问题转化为uSVP实例，而不是Crypto’22攻击中的SVP实例。这也有助于格降维算法，从理论和实际角度来看。
> 
> 我们使用我们的攻击重新评估了文献中使用的具体参数的难度。看起来许多参数包含相当大比例的弱密钥，这些密钥容易被识别，并极易受到我们的攻击。例如，来自ACISP’18的参数集的公钥中约有2^-19的部分可以在中等服务器上使用现成的格降维在大约30小时内解决。该参数集最初声称可以抵抗129位密钥恢复攻击。使用Crypto’22中的区分攻击，其安全性降至87位。同样，ACNS’14提议中也包括一个参数集，其中包含2^-19的弱密钥部分；这些可以在大约17小时内解决。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_8](https://doi.org/10.1007/978-3-031-58754-2_8)
## Cryptanalysis of Rank-2 Module-LIP in Totally Real Number Fields.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#cryptanalysis-of-rank-2-module-lip-in-totally-real-number-fields) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#cryptanalysis-of-rank-2-module-lip-in-totally-real-number-fields)**
### 作者
* Guilhem Mureau, Univ Bordeaux, CNRS, Inria, Bordeaux INP, IMB, UMR 5251, Talence, France
* Alice Pellet-Mary, Univ Bordeaux, CNRS, Inria, Bordeaux INP, IMB, UMR 5251, Talence, France
* Georgii Pliatsok, Insitute of Mathematics, NAS of Ukraine, Kyiv, Ukraine
* Georgii Pliatsok, Univ Rennes, Inria, CNRS, Irisa, UMR 6074, Rennes, France
* Alexandre Wallet, Univ Rennes, Inria, CNRS, Irisa, UMR 6074, Rennes, France
### 摘要
> 我们在数域K中正式定义了模格点同构问题（module-LIP）的概念。这是由Ducas、Postlethwaite、Pulles和van Woerden（Asiacrypt 2022）定义的问题的推广，考虑到用伪基表示的模格点的算术和代数特性。我们还提供了未来在模块设置中研究此问题的相应算法和理论工具集。我们的主要贡献是，当K是全实数数域时，解决了K^2中秩为2的模-LIP的算法。我们的算法利用了这个问题、相对范数方程和代数整数分解为两个平方和之和之间的联系。对于一大类模块（包括\(\mathcal {O}_K^2\)）和一大类全实数数域（包括周期数域的最大实子域），在合理的数论假设下，它运行时间为经典多项式时间。我们提供了一个概念验证代码，可以在周期数域的最大实子域上运行。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_9](https://doi.org/10.1007/978-3-031-58754-2_9)
## Provable Dual Attacks on Learning with Errors.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#provable-dual-attacks-on-learning-with-errors) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#provable-dual-attacks-on-learning-with-errors)**
### 作者
* Amaury Pouly, Centre National de la Recherche Scientifique (CNRS), Paris, France
* Yixin Shen, King’s College London, London, UK
### 摘要
> 学习与误差（LWE）是后量子密码学（PQC）中的一个重要问题，强调了多个NIST PQC选定算法的安全性。最近几篇论文[7, 25, 16, 32]声称在LWE的双重攻击复杂度方面取得了改进。这些改进使得双重攻击在某些参数范围内与原始攻击相媲美甚至更好。不幸的是，这些改进依赖于许多未经测试且难以测试的统计假设。此外，最近的一篇论文[20]声称这些改进的整体前提可能是错误的。
> 
> 本文旨在通过证明不依赖于任何统计假设的方式改进情况。尽管我们的攻击与最近的攻击相比大为简化，但它与那些攻击共享许多重要的技术元素，并可以作为分析更高级攻击的基础。我们对使用蒙特卡洛马尔科夫链离散高斯采样器在Kyber上进行的简化攻击的复杂性给出了一些粗略估计。
> 
> 我们的主要贡献在于明确确定一组参数，我们的攻击（以及可能还有其他最近的双重攻击）可以运行。此外，我们的分析完全不同于现有的基于统计的分析，而是根植于几何。我们还将我们的算法工作的领域与[20]的“矛盾领域”进行比较。我们观察到这两个领域基本上是互补的。
> 
> 最后，我们提供了我们算法的量子版本以加速计算。该算法受[10]启发，但完全正式，不依赖于任何启发式方法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_10](https://doi.org/10.1007/978-3-031-58754-2_10)
## Reduction from Sparse LPN to LPN, Dual Attack 3.0.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#reduction-from-sparse-lpn-to-lpn-dual-attack-3-0) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#reduction-from-sparse-lpn-to-lpn-dual-attack-3-0)**
### 作者
* Kévin Carrier, ETIS UMR 8051, CY Cergy-Paris Université, ENSEA, CNRS, Cergy, France
* Thomas Debris-Alazard, Project GRACE, Inria Saclay-Ile de France, Palaiseau, France
* Charles Meyer-Hilfiger, Project COSMIQ, Inria de Paris, Paris, France
* Jean-Pierre Tillich, Project COSMIQ, Inria de Paris, Paris, France
### 摘要
> 代码为基础的加密算法的安全性主要依赖于解码一般线性码的难度。直到最近，解决解码问题的最佳算法都是信息集解码器（\(\textsf{ISD}\)）。然而，最近引入了一种完全不同方法的名为\(\textsf{RLPN}\)-解码的新算法，并证明在相当大范围的速率下\(\textsf{RLPN}\)性能明显优于\(\textsf{ISD}\)解码器。这个\(\textsf{RLPN}\)解码器依赖于两个因素，首先将解码减少到一些底层的\(\textsf{LPN}\)问题，然后在某些位置受限制时有效地计算许多小重量的校验码。我们通过注意到，在这个算法中，实际上将解码转化为稀疏-\(\textsf{LPN}\)问题（即带有小汉明重量的秘密）来重新考虑\(\textsf{RLPN}\)-解码。我们的新方法这一次是通过一种受\(\textsf{coded}\)-\(\textsf{BKW}\)启发的编码方法将稀疏-\(\textsf{LPN}\)进一步减少到普通-\(\textsf{LPN}\)。它在代码速率小于0.42时明显优于\(\textsf{ISD}\)和\(\textsf{RLPN}\)。这个算法可以视为最近格基加密的双重攻击的代码为基础的加密的表亲。我们完全没有采用传统算法分析的方法，而是采用了一定数量的独立假设，并最近在后者领域受到了强烈质疑。相反，我们给出了一个依赖于对偶性的\(\textsf{LPN}\)噪声公式，它可以通过仅依赖于某种重量分布的分析来分析算法的行为。通过只使用经过实验证实的最小假设，我们能够证明我们算法的正确性。这个关键工具，即对偶公式，可以很容易地适应于格子设置，并且在[19]中显示出能够给出双重攻击中观察到的一些现象的简单解释。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_11](https://doi.org/10.1007/978-3-031-58754-2_11)
## Plover: Masking-Friendly Hash-and-Sign Lattice Signatures.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#plover-masking-friendly-hash-and-sign-lattice-signatures) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#plover-masking-friendly-hash-and-sign-lattice-signatures)**
### 作者
* Muhammed F. Esgin, Monash University, Melbourne, Australia
* Amin Sakzad, Monash University, Melbourne, Australia
* Ron Steinfeld, Monash University, Melbourne, Australia
* Thomas Espitau, PQShield SAS, Paris, France
* Guilhem Niot, PQShield SAS, Paris, France
* Thomas Prest, PQShield SAS, Paris, France
### 摘要
> 我们引入了一个工具包，可以将基于格的哈希与签名方案转换为在 t-probing 模型下安全的掩码友好签名。到目前为止，有效地对基于格的哈希与签名方案进行掩码一直是一个未解决的问题，例如 Mitaka 的尝试都失败了。第一个突破发生在2023年的 NIST PQC 提交中的 Raccoon，尽管它还没有得到正式证明。
> 
> 我们的主要概念贡献是认识到 Raccoon 的基本原理非常通用，并找到了一种系统的方法来应用它们在哈希与签名范式中。我们的主要技术贡献是基于这些技术来规范化、证明、具体化和实现一个哈希与签名方案。我们的工具包包括噪声泛洪来减轻统计泄漏，以及扩展的 Strong Non-Interfering 探针安全性（\(\textsf{SNIu}\)）属性来处理具有不共享输入的掩码小设备。
> 
> 我们展示了我们的技术在一种基于 Ring-LWE 的签名方案 \(\mathsf{\mathsf{\textsf{Plover}}\text{-}\mathsf{\textsf{RLWE}}}\) 中的效率。这是第一个在分享数量 d 中具有准线性复杂度 \(O(d\log d)\) 的基于格的掩码哈希与签名方案。我们的性能与目前最先进的掩码友好签名 Fiat-Shamir 方案 \(\textsf{Raccoon}\) 相竞争。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_12](https://doi.org/10.1007/978-3-031-58754-2_12)
## Updatable Public-Key Encryption, Revisited.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-7].md#updatable-public-key-encryption-revisited) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-7].md#updatable-public-key-encryption-revisited)**
### 作者
* Joël Alwen, AWS Wickr, New York, USA
* Marta Mularczyk, AWS Wickr, New York, USA
* Georg Fuchsbauer, TU Wien, Vienna, Austria
### 摘要
> 我们重新审视可更新的公钥加密（UPKE），它被引入作为构建前向安全的密码协议的实际机制。我们首先观察到迄今为止所有的UPKE概念既不具有语法上的灵活性，也不足够安全，无法满足驱动UPKE的最重要的多方协议的要求。我们提供了UPKE属性的直观分类 - 一些在过去部分或完全被忽视 - 以及已知的（明确和隐式）UPKE构造的概述。然后，我们引入了一个形式化的UPKE定义，捕捉了多方协议所需的所有直观属性。
> 
> 接下来，我们提供了一个实际的基于配对的构造，在标准假设下，在随机预言和代数群模型下提供了具体的界限。该方案的效率比现有的UPKE构造要好得多（尽管具有更强的灵活性和更高的安全性）。例如，当用于改进消息层安全协议[RFC9420]的前向安全时，我们的新的UPKE构造仅需要不到\(1.5\%\)的带宽，比迄今为止考虑到最强UPKE概念的下一个最有效的UPKE构造所需的带宽少。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58754-2_13](https://doi.org/10.1007/978-3-031-58754-2_13)
