# Asiacrypt[2021-1]
## On the Hardness of the NTRU Problem.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#on-the-hardness-of-the-ntru-problem) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#on-the-hardness-of-the-ntru-problem)**
### 作者
* Alice Pellet-Mary, CNRS, Inria and Université de Bordeaux, Bordeaux, France
* Damien Stehlé, ENS de Lyon, Lyon, France
* Damien Stehlé, Institut Universitaire de France, Paris, France
### 摘要
> 25 岁的NTRU问题是公钥密码学中重要的计算假设。然而，从约减的角度来看，与欧几里得格上其他问题的相对难度并不被充分理解。它的决策版本归结为搜索Ring-LWE问题，但这只提供了上限的复杂性界限。
> 
> 我们提供两个答案，以便提供基于约简证据的NTRU问题难度的长期未解决的问题。首先，我们将理想格子上最坏情况下的近似最短向量问题约简为NTRU问题的平均搜索变体。其次，我们将NTRU问题的另一个平均搜索变体约减为决策NTRU问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_1](https://doi.org/10.1007/978-3-030-92062-3_1)
## A Geometric Approach to Linear Cryptanalysis.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#a-geometric-approach-to-linear-cryptanalysis) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#a-geometric-approach-to-linear-cryptanalysis)**
### 作者
* Tim Beyne, Imec-COSIC, ESAT, KU Leuven, Leuven, Belgium
### 摘要
> 提出一种线性密码分析的新解释。这种“几何方法”统一了线性密码分析的所有常见变体，揭示了各种属性之间的关联，并提出了附加的一般化方法。例如，获得了与相关矩阵的非实特征值对应的不变量和零相关性与积分攻击之间联系的一般化的新见解。凭借几何直觉，为累计原则提供了一个固定密钥的动机，并且通过解释和推广与不变量和线性近似相关的先前结果进行了说明。提出了一种基于秩一近似的分析面向单元的密码，并用它来解决Beierle、Canteaut和Leander在FSE 2019上提出的一个开放性问题。特别是，展示了如何使用黎曼优化自动分析这类近似。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_2](https://doi.org/10.1007/978-3-030-92062-3_2)
## Lattice Enumeration for Tower NFS: A 521-Bit Discrete Logarithm Computation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#lattice-enumeration-for-tower-nfs-a-521-bit-discrete-logarithm-computation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#lattice-enumeration-for-tower-nfs-a-521-bit-discrete-logarithm-computation)**
### 作者
* Gabrielle De Micheli, Université de Lorraine, CNRS, Inria, Nancy, France
* Pierrick Gaudry, Université de Lorraine, CNRS, Inria, Nancy, France
* Cécile Pierrot, Université de Lorraine, CNRS, Inria, Nancy, France
### 摘要
> 塔式数域筛 (TNFS) 是解决中等特征有限域离散对数问题渐进最高效的算法，尤其在扩展次数为合成数时。实现TNFS的一个重大障碍是代数关系的收集，特别是当维数超过2时会出现此问题。这需要构建新的筛选算法，在维度增加的情况下仍然保持高效。在本文中，我们通过考虑一种适应于该特定情境的格枚举算法克服了这个困难。我们还考虑了一个新的筛选区域，即高维球体，而传统NFS的筛选算法则考虑了一个直方体。我们的新筛选技术在搜索空间更大的情况下，甚至在考虑到更大目标时，运行时间更短，这一点得到了我们在一个521位有限域\({\mathbb F}_{p^6}\)上进行的记录计算的证明。目标有限域的形式与某些区块链中最近使用的有限域零知识证明中使用的有限域相同。这是首次报道的TNFS的实现。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_3](https://doi.org/10.1007/978-3-030-92062-3_3)
## Partial Key Exposure Attack on Short Secret Exponent CRT-RSA.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#partial-key-exposure-attack-on-short-secret-exponent-crt-rsa) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#partial-key-exposure-attack-on-short-secret-exponent-crt-rsa)**
### 作者
* Alexander May, Ruhr-University Bochum, Bochum, Germany
* Julian Nowakowski, Ruhr-University Bochum, Bochum, Germany
* Santanu Sarkar, Ruhr-University Bochum, Bochum, Germany
* Santanu Sarkar, Indian Institute of Technology Madras, Chennai, India
### 摘要
> 设 (N, e) 是一个 RSA 公钥，其中 \(N=pq\) 是相等比特长度的素数 p 和 q 的乘积。设 \(d_p, d_q\) 是相应的秘密 CRT-RSA 指数。
> 
> 最近，Takayasu、Lu 和 Peng (TLP) 利用 Coppersmith 类型攻击发现，如果 \(d_p, d_q \le N^{0.122}\)，则可以在多项式时间内获得 N 的分解。在TLP攻击的基础上，我们展示了第一个针对短秘密指数 CRT-RSA 的部分密钥泄露攻击。即，假设 \(N^{0.122} \le d_p, d_q \le N^{0.5}\)。然后，我们展示了常数比例的最低有效位（LSBs）足以在多项式时间内因式分解 N。
> 
> 自然地，\(d_p,d_q\) 越大，需要的 LSBs 就越多。例如，如果 \(d_p, d_q\) 的大小为 \(N^{0.13}\)，那么我们大约需要知道它们的 LSB 的 \(\frac{1}{5}\) 部分，而对于 \(d_p, d_q\) 的大小为 \(N^{0.2}\)，我们则需要大约了解 \(\frac{2}{3}\)-LSB 部分。最终，如果 \(d_p, d_q\) 的大小为 \(N^{0.5}\)，我们需要知道它们所有的位。请注意，作为我们结果的副产品，我们获得了一个启发式的确定性多项式时间因式分解算法，其输入为 \((N，e，d_p，d_q)\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_4](https://doi.org/10.1007/978-3-030-92062-3_4)
## A Formula for Disaster: A Unified Approach to Elliptic Curve Special-Point-Based Attacks.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#a-formula-for-disaster-a-unified-approach-to-elliptic-curve-special-point-based-attacks) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#a-formula-for-disaster-a-unified-approach-to-elliptic-curve-special-point-based-attacks)**
### 作者
* Vladimir Sedlacek, Masaryk University, Brno, Czech Republic
* Jan Jancar, Masaryk University, Brno, Czech Republic
* Vladimir Sedlacek, Ca’Foscari University, Venice, Italy
* Jesús-Javier Chi-Domínguez, Cryptography Research Centre, Technology Innovation Institute, Abu Dhabi, UAE
* Jesús-Javier Chi-Domínguez, Tampere University, Tampere, Finland
* Billy Bob Brumley, Tampere University, Tampere, Finland
### 摘要
> 经过研究，精细化功率分析、零值点和特殊流程攻击引入了对特定椭圆曲线密码学情况的侧信道技术。这三种攻击可以自适应地恢复出位于静态 ECDH 密钥中的信息二进制位，并收集关于计算输入点的某个倍数的信息。我们将这些攻击统一并泛化为一个共同的框架，并解决更广泛输入类别的相应问题。我们还引入了针对窗口标量乘法方法的攻击版本，恢复完整的标量而不仅仅是其中的一部分。最后，我们系统地分析了来自 Explicit-Formulas Database 的椭圆曲线点加公式，对所有非平凡异常点进行了分类，并在新公式中发现了这些点。这些结果表明了我们发布的工具的有用性，以展开公式和寻找特殊点，并可能用于独立的未来工作。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_5](https://doi.org/10.1007/978-3-030-92062-3_5)
## Cryptanalysis of an Oblivious PRF from Supersingular Isogenies.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#cryptanalysis-of-an-oblivious-prf-from-supersingular-isogenies) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#cryptanalysis-of-an-oblivious-prf-from-supersingular-isogenies)**
### 作者
* Andrea Basso, University of Birmingham, Birmingham, UK
* Péter Kutas, University of Birmingham, Birmingham, UK
* Christophe Petit, University of Birmingham, Birmingham, UK
* Simon-Philipp Merz, Royal Holloway, University of London, Egham, UK
* Christophe Petit, Université Libre de Bruxelles, Brussels, Belgium
* Antonio Sanso, Ethereum Foundation, Zug, Switzerland
* Antonio Sanso, Ruhr Universität Bochum, Bochum, Germany
* Péter Kutas, Eötvös Loránd University, Budapest, Hungary
### 摘要
> 我们对Boneh、Kogan和Woo在Asiacrypt'20提出的基于SIDH的遗忘伪随机函数进行了密码分析。为此，我们对假设进行了攻击，即辅助一次性假设，这是Boneh等人引入的，并且我们表明这导致了对遗忘PRF本身的攻击。该攻击破坏了伪随机性，因为它允许对手在一些初始的遗忘PRF评估和一些离线计算后评估OPRF而无需与服务器进行进一步的互动。更具体地说，我们首先提出了一个多项式时间的攻击。然后，我们认为很容易改变OPRF协议以包括一些对策，并且提出了一个在存在所述对策的情况下成功的第二次指数攻击。这两种攻击都打破了Boneh等人建议的安全参数。此外，我们提供了一个概念实现的证明以及我们攻击的一些时间。最后，我们研究了一个OPRF参数的生成，并认为需要一个可信的第三方来保证可证安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_6](https://doi.org/10.1007/978-3-030-92062-3_6)
## A Practical Key-Recovery Attack on 805-Round Trivium.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#a-practical-key-recovery-attack-on-805-round-trivium) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#a-practical-key-recovery-attack-on-805-round-trivium)**
### 作者
* Chen-Dong Ye, PLA Strategic Support Force Information Engineering University, Zhengzhou, 450001, China
* Tian Tian, PLA Strategic Support Force Information Engineering University, Zhengzhou, 450001, China
### 摘要
> 魔方攻击是对Trivium加密算法最重要的密码分析技术之一。已经建立了许多基于魔方攻击的密钥恢复攻击。然而，很少有攻击可以实际上恢复出80位完整密钥信息。特别是，以FSE 2013上由Fouque和Vannet提出的784轮Trivium为基础的先前最佳实际密钥恢复攻击。为了进行实际的密钥恢复攻击，需要足够数量的低次超多项式。由于缺乏效率，实验性的魔方攻击和基于除法属性的随机选择魔方攻击都很难实现。在本文中，我们提出了一种针对线性超多项式构建候选魔方的新算法。我们的实验表明，使用构建的魔方可以100％成功找到线性超多项式。我们为805轮Trivium获得了超过1000个线性超多项式。通过使用42个独立的线性超多项式，我们对805轮Trivium进行了实际的密钥恢复攻击，增加了攻击轮数。我们攻击的复杂度为\( 2^{41.40} \)，可以在配备GTX-1080 GPU的计算机上在几小时内完成。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_7](https://doi.org/10.1007/978-3-030-92062-3_7)
## Algebraic Attacks on Rasta and Dasta Using Low-Degree Equations.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#algebraic-attacks-on-rasta-and-dasta-using-low-degree-equations) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#algebraic-attacks-on-rasta-and-dasta-using-low-degree-equations)**
### 作者
* Fukang Liu, University of Hyogo, Hyogo, Japan
* Takanori Isobe, University of Hyogo, Hyogo, Japan
* Takanori Isobe, National Institute of Information and Communications Technology, Tokyo, Japan
* Takanori Isobe, PRESTO, Japan Science and Technology Agency, Tokyo, Japan
* Santanu Sarkar, Indian Institute of Technology Madras, Chennai, India
* Willi Meier, FHNW, Windisch, Switzerland
* Santanu Sarkar, Ruhr-University Bochum, Bochum, Germany
### 摘要
> Rasta和Dasta是在CRYPTO 2018和ToSC 2020分别提出的两种全同态加密友好的对称密钥原语。我们指出，Rasta和Dasta的设计者忽略了\(\chi \)操作的一个重要特性。结合Rasta和Dasta的特殊结构，这一特性直接导致了代数密码分析的显著改进。特别是，它使我们能够在理论上破解全Agrasta的3个实例中的两个，Agrasta是Rasta的进攻版本，其块大小仅略大于位安全级别。我们进一步揭示，Dasta比Rasta更容易受到攻击，因为它使用了由不断变化的比特置换和确定性线性变换组成的线性层。根据我们的密码分析，使用\((n,\kappa ,r)\in \{(327,80,4),(1877,128,4),(3545,256,5)\}\)参数化的Dasta和Rasta的安全边界仅减少到1轮，其中n，\(\kappa \)和r分别表示块大小，声称的安全级别和轮数。这些参数尤为重要，因为相应的ANDdepth是在合理时间内可以实现并针对相同声称的安全级别目标的最低参数之一。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_8](https://doi.org/10.1007/978-3-030-92062-3_8)
## Automatic Classical and Quantum Rebound Attacks on AES-Like Hashing by Exploiting Related-Key Differentials.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#automatic-classical-and-quantum-rebound-attacks-on-aes-like-hashing-by-exploiting-related-key-differentials) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#automatic-classical-and-quantum-rebound-attacks-on-aes-like-hashing-by-exploiting-related-key-differentials)**
### 作者
* Xiaoyang Dong, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Congming Wei, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Siwei Sun, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Zhiyu Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Lei Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zhiyu Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Lei Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Xiaoyun Wang, School of Cyber Science and Technology, Shandong University, Qingdao, China
### 摘要
> AES-like散列函数（通过将类似AES的密码或置换插入著名的PGV模式或其变体构建的哈希函数）的碰撞攻击可以简化为找到一对输入，这对输入符合底层AES-like原语的差分，其中输入和输出的差异相同。由Mendel等人提出的回弹攻击是实现此目标的强有力工具，其量子版本首次由Hosoyamada和Sasaki在EUROCRYPT 2020上考虑。在这项工作中，我们使用基于MILP的方法自动化搜索回弹攻击的配置，考虑底层分组密码的相关密钥差分。在量子设置中，我们的模型指导搜索以最小化结果回弹攻击的资源（例如QRAM）和复杂性的特征。我们将我们的方法应用于Saturnin-hash、SKINNY和Whirlpool，获得了改进的结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_9](https://doi.org/10.1007/978-3-030-92062-3_9)
## Clustering Effect in Simon and Simeck.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#clustering-effect-in-simon-and-simeck) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#clustering-effect-in-simon-and-simeck)**
### 作者
* Gaëtan Leurent, Inria, Paris, France
* Clara Pernot, Inria, Paris, France
* André Schrottenloher, Cryptology Group, CWI, Amsterdam, The Netherlands
### 摘要
> Simon和Simeck是两种轻量级分组密码，其简单的轮函数仅使用字旋转和位与运算。先前的研究表明，在差分和线性密码分析中存在强烈的聚类效应，这是由于存在许多具有相同输入和输出的路径。
> 
> 在本文中，我们通过展示一类高概率差分和线性路径来探索这种聚类效应，其中活跃位保持在w位固定窗口内。我们不再枚举一组对差分或线性逼近有贡献的良好路径，而是计算该空间上的概率分布，包括该类别中的所有路径。
> 
> 这导致了比先前提出的更强区分器，并且我们描述了针对Simon和Simeck的密钥恢复攻击，改进了以前的结果，攻击轮数增加了多达7轮。特别地，我们获得了针对42轮Simeck 64的攻击，仅剩下两轮的安全余量，并且针对45轮Simon 96/144进行了攻击，将安全余量从16轮减少到9轮。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_10](https://doi.org/10.1007/978-3-030-92062-3_10)
## New Attacks on LowMC Instances with a Single Plaintext/Ciphertext Pair.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#new-attacks-on-lowmc-instances-with-a-single-plaintext-ciphertext-pair) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#new-attacks-on-lowmc-instances-with-a-single-plaintext-ciphertext-pair)**
### 作者
* Subhadeep Banik, LASEC, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
* Khashayar Barooti, LASEC, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
* Serge Vaudenay, LASEC, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
* Hailun Yan, LASEC, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
### 摘要
> 当攻击者可以访问一个已知的明文/密文对时，对LowMC分组密码进行密码分析是一个在数学上具有挑战性的问题。这是因为攻击者无法使用对称密码学中的大多数标准技术，比如线性和差分密码分析。在PICNIC数字签名方案的安全性辩论中，这种情况尤为重要，其中由LowMC分组密码生成的明文/密文对充当公钥（验证）和相应的LowMC加密密钥也充当签名方案的秘密（签名）密钥。在Banik等人的论文中，作者使用了对LowMC S-box的线性化技术来对一些分组密码进行攻击。在本文中，我们首先对线性化攻击进行了更精确的复杂性分析。然后，我们展示了如何对LowMC进行2阶段MITM攻击。第一阶段减少了与主密钥的部分密钥比特相对应的密钥候选。第二个MITM阶段在这个减少的候选集和剩余密钥比特的部分之间成功恢复了主密钥。我们证明这两个阶段的组合计算复杂性显著低于Banik等人在ToSC论文中报告的复杂性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_11](https://doi.org/10.1007/978-3-030-92062-3_11)
## Convexity of Division Property Transitions: Theory, Algorithms and Compact Models.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#convexity-of-division-property-transitions-theory-algorithms-and-compact-models) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#convexity-of-division-property-transitions-theory-algorithms-and-compact-models)**
### 作者
* Aleksei Udovenko, CryptoExperts, Paris, France
### 摘要
> 积分密码分析是攻击对称原语的强大工具，而分割性质则是一种用于找到积分区分器的先进框架。本研究描述了对传统基于比特的分割性质的新理论和实践洞察力。我们专注于分析和利用分割性质的单调性/凸性以及其与图形指标的关系。特别地，我们的研究发现了一种新的传播紧凑表示方法，可以用于更大的S-盒（例如轻量级分组密码的16位超级盒或甚至32位随机S-盒）的CNF / MILP建模。这解决了Derbez 和Fouque在2020年ToSC所提出的问题，他们质疑了SAT/SMT/MILP模型化16位超级盒的可能性。我们以LED的8轮超级盒为例，使用CNF公式来进行模型建模，而之前的方法都不可行。
> 
> 我们的分析还得到了一个优雅的算法框架的支持。我们描述了一些简单的算法，用于计算n比特向量集的分割性质，时间复杂度为\(O(n2^n)\)，将这样的集合减少到最小/最大元素的时间复杂度为\(O(n2^n)\)，计算n行m列比特S-盒的分割性质传播表以及其紧凑表示的时间复杂度为\(O((n+m)2^{n+m})\)。此外，我们还开发了一种针对“重型”一一映射的先进算法，例如，可以模拟生成随机的32位S-盒。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_12](https://doi.org/10.1007/978-3-030-92062-3_12)
## Strong and Tight Security Guarantees Against Integral Distinguishers.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#strong-and-tight-security-guarantees-against-integral-distinguishers) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#strong-and-tight-security-guarantees-against-integral-distinguishers)**
### 作者
* Phil Hebborn, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Baptiste Lambin, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Yosuke Todo, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 积分攻击是针对任何给定分组密码的经典攻击向量之一。然而，提供一个给定密码抵抗这些攻击的论证常常非常困难。在本文中，仅基于独立轮密钥的假设，我们提供了比之前更强大的论证：我们的主要结果是，我们展示了如何证明任何可能的明文子集上的密文之和是密钥相关的，即不存在积分区分器。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_13](https://doi.org/10.1007/978-3-030-92062-3_13)
## Massive Superpoly Recovery with Nested Monomial Predictions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#massive-superpoly-recovery-with-nested-monomial-predictions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#massive-superpoly-recovery-with-nested-monomial-predictions)**
### 作者
* Kai Hu, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Qingju Wang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Siwei Sun, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Yosuke Todo, NTT Social Informatics Laboratories, Tokyo, Japan
* Qingju Wang, SnT, University of Luxembourg, Luxembourg City, Luxembourg
* Kai Hu, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
* Qingju Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
### 摘要
> 确定给定立方体的超多项式的确切代数结构或部分信息是魔方攻击（一种通用的对称密钥原语的密码分析技术，具有某些秘密和可公开调整的输入）中的必要步骤。目前，基于除法属性的方法是恢复确切超多项式的最强大工具。但是，随着轮数的增加，目标输出位的代数正常形式（ANF）变得越来越复杂，因此现有的超多项式恢复方法很快会达到瓶颈。例如，以往的方法在Trivium，Grain-128AEAD和Kreyvium的第842，190和892轮处停滞不前。在本文中，我们提出了一种新的框架，用于基于单项式预测技术（ASIACRYPT 2020，一种替代方案）恢复巨大超多项式的确切ANF。在该框架中，首先将目标输出位表示为某些中间状态的位多项式。对于出现在多项式中的每个项，如果可以在预设的时间限制内解决相应的MILP模型，则应用单项式预测技术确定其超多项式。在时间限制内未解决的术语将进一步扩展为一些更深入的中间状态的位多项式，并使用符号计算处理其术语，其术语再次通过单项式预测进行处理。重复上述过程，直到解决所有术语为止。最后，所有子超多项式都收集并组装到目标位的超多项式中。我们将新框架应用于Trivium，Grain-128AEAD和Kreyvium。结果，恢复了843、844和845轮Trivium，191轮Grain-128AEAD和894轮Kreyvium的超多项式的确切ANF。此外，借助莫比乌斯变换，我们基于涉及所有密钥位的超多项式提出了一种新的基于超多项式的密钥恢复技术，通过利用稀疏结构，这导致对所考虑的目标的最佳密钥恢复攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_14](https://doi.org/10.1007/978-3-030-92062-3_14)
## Quantum Linearization Attacks.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#quantum-linearization-attacks) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#quantum-linearization-attacks)**
### 作者
* Xavier Bonnetain, Institute for Quantum Computing, Department of Combinatorics and Optimization, University of Waterloo, Waterloo, ON, Canada
* Xavier Bonnetain, Université de Lorraine, CNRS, Inria, Nancy, France
* Gaëtan Leurent, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
* André Schrottenloher, Cryptology Group, CWI, Amsterdam, The Netherlands
### 摘要
> 最近的研究表明，量子周期查找可以用来破坏许多流行结构（一些分块密码，如Even-Mansour，多个MAC和AE…），在叠加查询模型中。到目前为止，所有破解的构造都表现出强大的代数结构，这使得可以构造一个单输入块的周期函数。恢复秘密周期可以恢复密钥、区分、破坏这些模式的机密性或真实性。
> 
> 在本文中，我们介绍了一种新的使用Simon算法来针对叠加查询模型中的MAC的量子线性化攻击。具体来说，我们使用多个块的输入作为隐藏线性结构的函数的接口。恢复这个结构可以进行伪造。
> 
> 我们还介绍了一些使用其他量子算法的这种攻击的变种，这些算法在量子对称密码分析中不太常见：Deutsch的、Bernstein-Vazirani的和Shor的。据我们所知，这是这些算法第一次被用于量子伪造或密钥恢复攻击。
> 
> 我们的攻击破坏了许多可并行化的MAC，如LightMac、PMAC以及具有（经典的）超越生日限制安全性（LightMAC+、PMAC+）或使用可调整的分组密码（ZMAC）的许多变体。更一般地说，它表明构造可并行化的量子安全PRF可能是一项具有挑战性的

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_15](https://doi.org/10.1007/978-3-030-92062-3_15)
## Generic Framework for Key-Guessing Improvements.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#generic-framework-for-key-guessing-improvements) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#generic-framework-for-key-guessing-improvements)**
### 作者
* Marek Broll, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Federico Canale, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Antonio Flórez-Gutiérrez, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
### 摘要
> 我们提出了一种改进分组密码攻击中密钥猜测步骤的通用技术。通过定义和研究相关的S盒的一些新属性，并将其表示为一种特殊类型的决策树，可以为各种攻击向量找到细粒度的猜测策略，从而实现了这一目标。我们提出并实施了一种高效地找到这些树的算法，并用它来提供该方法的几个应用，其中包括对Noekeon、GIFT和RECTANGLE的最佳已知攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_16](https://doi.org/10.1007/978-3-030-92062-3_16)
## On the Non-tightness of Measurement-Based Reductions for Key Encapsulation Mechanism in the Quantum Random Oracle Model.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#on-the-non-tightness-of-measurement-based-reductions-for-key-encapsulation-mechanism-in-the-quantum-random-oracle-model) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#on-the-non-tightness-of-measurement-based-reductions-for-key-encapsulation-mechanism-in-the-quantum-random-oracle-model)**
### 作者
* Haodong Jiang, TCA Laboratory, State Key Laboratory of Computer Science, Institute of Software, Chinese Academy of Sciences, Beijing, 100190, China
* Zhenfeng Zhang, TCA Laboratory, State Key Laboratory of Computer Science, Institute of Software, Chinese Academy of Sciences, Beijing, 100190, China
* Haodong Jiang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Haodong Jiang, State Key Laboratory of Mathematical Engineering and Advanced Computing, Zhengzhou, 450001, Henan, China
* Zhi Ma, State Key Laboratory of Mathematical Engineering and Advanced Computing, Zhengzhou, 450001, Henan, China
* Haodong Jiang, Henan Key Laboratory of Network Cryptography Technology, Zhengzhou, 450001, Henan, China
* Zhi Ma, Henan Key Laboratory of Network Cryptography Technology, Zhengzhou, 450001, Henan, China
### 摘要
> 密钥封装机制（KEM）Fujisaki-Okamoto（FO）变换（TCC 2017）的变体可以将弱安全的公钥加密（PKE）转化为IND-CCA安全的KEM，已经在NIST后量子密码标准化项目中的KEM提交中被广泛使用。在标准的CPA安全假设下，即OW-CPA和IND-CPA，在量子随机预言机模型（QROM）中通过黑盒约简，例如Jiang等人（CRYPTO 2018）和非黑盒约简（EUROCRYPT 2020）已经证明了这些变体的安全性。非黑盒约简（EUROCRYPT 2020）有线性安全损失，但仅适用于具有严格可逆实现的特定可逆对手。相反，文献中现有的黑盒约简可以适用于具有任意实现的任意对手，但会遭受二次安全损失。
> 
> 在本文中，对于FO变换的KEM变体，我们首先展示了黑盒约简的紧密限制，并证明了QROM中从破解基础PKE的标准OW-CPA（或IND-CPA）安全性到破解所得到的KEM的IND-CCA安全性的测量约简，将不可避免地导致安全性的二次损失，“基于测量”表示约简测量来自对手的哈希查询，并使用测量结果来破解PKE的基础安全性。特别是，这些类似FO的KEM变体的大多数黑盒约简都是这种类型的，我们的结果表明了解释在安全损失程度方面改进此约简紧密度缺乏进展的原因。然后，我们进一步展示了当通过具有黑盒方式使用单向到隐藏技术将搜索问题转化为决策问题时，二次损失也是不可避免的，该技术已被认为是证明涉及量子随机预言机的密码系统的安全性的重要技术。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_17](https://doi.org/10.1007/978-3-030-92062-3_17)
## Redeeming Reset Indifferentiability and Applications to Post-quantum Security.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#redeeming-reset-indifferentiability-and-applications-to-post-quantum-security) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#redeeming-reset-indifferentiability-and-applications-to-post-quantum-security)**
### 作者
* Mark Zhandry, NTT Research, Palo Alto, USA
* Mark Zhandry, Princeton University, Princeton, USA
### 摘要
> 冷漠性被用于分析理想化对象（如随机神谕或理想密码）构造的安全性。复位冷漠性是普通冷漠性的加强形式，在更广泛的情景下适用，但由于重大的不可能性结果和缺乏积极结果，它已经被大部分抛弃。我们的主要结果如下：
> 
> 在弱复位冷漠性下，理想密码意味着（固定大小的）随机神谕，并且域的收缩是可能的。因此，我们表明复位冷漠性比之前认为的更有用。
> 
> 我们将我们的分析扩展到量子情境，证明了在量子冷漠性下，理想密码意味着随机神谕。
> 
> 尽管Shor算法存在，我们观察到通用群在量子上仍然具有意义，表明它们在量子上（复位）与理想密码不可区分；结合上述结果，密码学群产生了后量子对称密钥密码学。特别地，我们获得了一个可信的后量子随机神谕，该随机神谕是一个子集乘积加上两次模重定向。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_18](https://doi.org/10.1007/978-3-030-92062-3_18)
## Franchised Quantum Money.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#franchised-quantum-money) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#franchised-quantum-money)**
### 作者
* Bhaskar Roberts, UC Berkeley, Berkeley, USA
* Mark Zhandry, Princeton University, Princeton, USA
* Mark Zhandry, NTT Research, Sunnyvale, USA
### 摘要
> 基于标准密码学假设构建公钥量子货币一直是一个长期存在的问题。在这里，我们引入了特许量子货币，这是一种更容易构建的量子货币形式。特许量子货币保留了有用的量子货币方案的特点，即不可伪造性和本地验证：任何人都可以在不与银行通信的情况下验证纸币。在特许量子货币中，每个用户都获得一个独特的秘密验证密钥，并且该方案对抗伪造和破坏是安全的，这是在特许模型中出现的新的安全概念。最后，我们构建了特许量子货币并证明了基于单向函数的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_19](https://doi.org/10.1007/978-3-030-92062-3_19)
## Quantum Computationally Predicate-Binding Commitments with Application in Quantum Zero-Knowledge Arguments for NP.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#quantum-computationally-predicate-binding-commitments-with-application-in-quantum-zero-knowledge-arguments-for-np) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#quantum-computationally-predicate-binding-commitments-with-application-in-quantum-zero-knowledge-arguments-for-np)**
### 作者
* Jun Yan, Jinan University, Guangzhou, China
### 摘要
> 量子比特承诺方案是利用量子通信和量子计算实现位（而不是量子位）承诺。在这项工作中，我们研究了通过并行组合通用的量子完全隐藏性（或统计学）计算绑定位承诺方案（可以基于量子安全的单向置换（或函数）实现）获得的量子字符串承诺方案的约束性。我们展示了所得方案满足更强的量子计算绑定属性，我们将其称为谓词绑定，比起平凡的诚实性绑定。直观地讲，谓词绑定属性保证对于一组字符串上的任何不一致的谓词对（即该集合中的字符串不能同时满足两个谓词），如果（声称的）量子承诺可以被打开以确保显示的字符串满足一个谓词，那么相同的承诺将不能被打开以确保显示的字符串满足另一个谓词（除了可以忽略的概率）。作为应用，我们将通用的量子完全隐藏性（或统计学）计算绑定位承诺方案应用到Blum的NP完全语言Hamiltonian Cycle的零知识协议中。这将产生基于仅仅依赖于量子安全的单向置换（或函数）的全NP语言的第一个量子完美（或统计学）零知识论证系统（具有1/2的确定性错误）。这个系统的量子计算确定性将立即得出于承诺的量子计算绑定属性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_20](https://doi.org/10.1007/978-3-030-92062-3_20)
## Quantum Encryption with Certified Deletion, Revisited: Public Key, Attribute-Based, and Classical Communication.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#quantum-encryption-with-certified-deletion-revisited-public-key-attribute-based-and-classical-communication) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#quantum-encryption-with-certified-deletion-revisited-public-key-attribute-based-and-classical-communication)**
### 作者
* Taiga Hiroka, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Tomoyuki Morimae, PRESTO, JST, Saitama, Japan
* Ryo Nishimaki, NTT Corporation, Tokyo, Japan
* Takashi Yamakawa, NTT Corporation, Tokyo, Japan
### 摘要
> Broadbent和Islam（TCC'20）提出了一种名为带有认证删除的量子加密原语，该原语允许接收者生成一个经典证书来证明已删除加密消息。尽管他们的构造在信息论上是安全的，但它仅适用于一次性对称密钥加密（SKE）的设置，即发送方和接收方必须事先共享一个公共密钥，并且该密钥只能使用一次。此外，在他们的构造中，发送方必须生成一个量子状态并通过量子信道将其发送给接收方。根据Broadbent和Islam的定义，删除证书具有私密可验证性，这意味着证书的验证密钥必须保密。但是，我们也可以考虑公开可验证性。在这项工作中，我们提出了各种具有认证删除功能的加密构造。
> 
> 量子通信情况：我们实现了具有认证删除功能的（可重复使用密钥）公钥加密（PKE）和基于属性的加密（ABE）。我们的具有认证删除功能的PKE方案是在存在IND-CPA安全的PKE的假设下构建的，而我们的具有认证删除功能的ABE方案是在单态混淆和单向函数存在的假设下构建的。这两个方案都具有私密可验证性。
> 
> 经典通信情况：我们还实现了只使用经典通信的带有认证删除功能的交互式加密。我们给出了两个方案，一个是私密可验证的方案，另一个是公开可验证的方案。前者是在量子随机预言模型下假设LWE（Learning with Errors）的基础上构建的。后者是在一次性签名和可提取证据加密存在的假设下构建的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_21](https://doi.org/10.1007/978-3-030-92062-3_21)
## Tight Adaptive Reprogramming in the QROM.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#tight-adaptive-reprogramming-in-the-qrom) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#tight-adaptive-reprogramming-in-the-qrom)**
### 作者
* Alex B. Grilo, Sorbonne Université, CNRS, LIP6, Paris, France
* Kathrin Hövelmanns, Ruhr-Universität Bochum, Bochum, Germany
* Kathrin Hövelmanns, Eindhoven University of Technology, Eindhoven, The Netherlands
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
* Christian Majenz, Technical University of Denmark, Lyngby, Denmark
* Christian Majenz, Centrum Wiskunde & Informatica and QuSoft, Amsterdam, The Netherlands
### 摘要
> 随机预言模型（ROM）广受欢迎，主要是因为它往往允许在标准模型中无法实现或代价高昂的可证安全性交易中提供严谨且概念简单的证明。尽管量子可访问随机预言模型（QROM）作为ROM在后量子安全设置中的适当替代品，但迄今为止在许多场景中未能提供这些优势。在这项研究中，我们专注于适应性重编程，这是ROM的一个特性，在许多场景中能够提供严格且简单的证明。我们证明了量子可访问适应性重编程的直接泛化是可行的，通过证明在区分随机预言是否被重编程的对手优势上存在一个上限。我们证明了我们的上限是紧密的，并提供了相应的攻击。我们继续展示了我们的技术恢复了ROM在三个QROM应用中的优势：1）我们提供了消息压缩例程的安全性更严格的证明，这是XMSS使用的。2）我们展示了Fiat-Shamir签名的标准ROM证明的选定消息安全性可以直接提升到QROM，达到比先前更紧凑的约简。3）我们提供了关于hedged Fiat-Shamir变换针对故障注入和随机数攻击的第一个QROM安全性证明。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_22](https://doi.org/10.1007/978-3-030-92062-3_22)
## QCB: Efficient Quantum-Secure Authenticated Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-1].md#qcb-efficient-quantum-secure-authenticated-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-1].md#qcb-efficient-quantum-secure-authenticated-encryption)**
### 作者
* Ritam Bhaumik, Inria, Paris, France
* André Chailloux, Inria, Paris, France
* Gaëtan Leurent, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
* Xavier Bonnetain, Institute for Quantum Computing, Department of Combinatorics and Optimization, University of Waterloo, Waterloo, Canada
* Xavier Bonnetain, Université de Lorraine, CNRS, Inria, Nancy, France
* André Schrottenloher, Cryptology Group, CWI, Amsterdam, The Netherlands
* Yannick Seurin, ANSSI, Paris, France
### 摘要
> 长期以来，人们一直认为对称加密只受量子攻击的轻微影响，而加倍密钥长度就足以恢复安全性。然而，最近的研究表明，当攻击者可以用量子叠加的消息查询MAC/加密oracle时，Simon的量子周期查找算法会破解大量MAC和认证加密算法。特别地，OCB认证加密模式在这种情况下被破解，并且没有已知的与其效率（速率为1和可并行化）相同的量子安全模式。
> 
> 在本文中，我们推广了先前的攻击，展示了大量类似OCB的方案不安全于超级位置查询，并讨论了认证加密模式的量子安全概念。我们提出了一种新的速率为1的可并行化模式QCB，灵感来自TAE和OCB，并证明其在量子叠加查询下的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92062-3_23](https://doi.org/10.1007/978-3-030-92062-3_23)
