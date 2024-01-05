# Crypto[2023-3]
## Fast Practical Lattice Reduction Through Iterated Compression.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#fast-practical-lattice-reduction-through-iterated-compression) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#fast-practical-lattice-reduction-through-iterated-compression)**
### 作者
* Keegan Ryan, University of California, San Diego, La Jolla, USA
* Nadia Heninger, University of California, San Diego, La Jolla, USA
### 摘要
> 我们引入一种新的晶格基底缩减算法，具有类似LLL算法的逼近保证和实际性能，远远超过当前的技术水平。我们通过在递归算法结构中迭代应用精度管理技术来实现这些结果，并展示了这种方法的稳定性。我们分析了我们算法的渐近行为，并展示了启发式运行时间为 \(O(n^{\omega }(C+n)^{1+\varepsilon })\)，其中 n 是维度，\(\omega \in (2,3]\) 限制了尺寸缩减、矩阵乘法和QR分解的成本，C 限制了输入基底 B 的条件数的对数。这导致了在常见应用中精度 \(p = O(\log \Vert B\Vert _{max})\) 的运行时间为 \(O\left( n^\omega (p + n)^{1 + \varepsilon }\right) \)。我们的算法是完全实用的，并已发布我们的实现。我们通过实验证实了我们的启发式，对许多类别的密码学晶格进行了广泛的基准测试，并展示了我们的算法明显优于现有实现。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_1](https://doi.org/10.1007/978-3-031-38548-3_1)
## Does the Dual-Sieve Attack on Learning with Errors Even Work?
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#does-the-dual-sieve-attack-on-learning-with-errors-even-work) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#does-the-dual-sieve-attack-on-learning-with-errors-even-work)**
### 作者
* Léo Ducas, CWI, Cryptology Group, Amsterdam, The Netherlands
* Ludo N. Pulles, CWI, Cryptology Group, Amsterdam, The Netherlands
* Léo Ducas, Mathematical Institute, Leiden University, Leiden, The Netherlands
### 摘要
> **标题：对NIST格基候选者的FFT攻击改进研究**
> 
> **摘要：**
> 
> 国和约翰松（ASIACRYPT 2021）以及MATZOV（技术报告2022）分别声称通过在所谓的双筛攻击上添加快速傅里叶变换（FFT）技巧，改进了对多种NIST格基候选者的攻击。最近，有更多的后续工作加入这一领域，并提出了新的实用改进方法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_2](https://doi.org/10.1007/978-3-031-38548-3_2)
## Exploring Decryption Failures of BIKE: New Class of Weak Keys and Key Recovery Attacks.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#exploring-decryption-failures-of-bike-new-class-of-weak-keys-and-key-recovery-attacks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#exploring-decryption-failures-of-bike-new-class-of-weak-keys-and-key-recovery-attacks)**
### 作者
* Tianrui Wang, Institute for Network Sciences and Cyberspace, Tsinghua University, Beijing, China
* Anyu Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Anyu Wang, Zhongguancun Laboratory, Beijing, China
* Xiaoyun Wang, Zhongguancun Laboratory, Beijing, China
* Anyu Wang, National Financial Cryptography Research Center, Beijing, China
* Xiaoyun Wang, National Financial Cryptography Research Center, Beijing, China
* Xiaoyun Wang, Shandong Institute of Blockchain, Jinan, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security (Ministry of Education), School of Cyber Science and Technology, Shandong University, Qingdao, China
### 摘要
> 最近，基于码的密码学因其在量子计算下被视为安全而受到了广泛关注。其中，基于QC-MDPC的方案是由于其卓越的性能而被认为是最有前景的之一。基于QC-MDPC的方案通常存在解密失败的小概率，这可能会泄露有关秘密密钥的信息。这引起了两个关键问题：如何准确估计解密失败率以及如何利用失败信息恢复秘密密钥。然而，由于对QC-MDPC中使用的比特翻转译码器（如使用解码半径）的几何特性的难以描述，这两个问题具有挑战性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_3](https://doi.org/10.1007/978-3-031-38548-3_3)
## Graph-Theoretic Algorithms for the Alternating Trilinear Form Equivalence Problem.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#graph-theoretic-algorithms-for-the-alternating-trilinear-form-equivalence-problem) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#graph-theoretic-algorithms-for-the-alternating-trilinear-form-equivalence-problem)**
### 作者
* Ward Beullens, IBM Research, Zurich, Switzerland
### 摘要
> 在Eurocrypt'22会议上，Tang，Duong，Joux，Plantard，Qiao和Susilo提出了一种基于交替三线性形式同构问题困难性的数字签名算法。他们分别提出了三个在9、10和11维度上的具体参数。我们提供了一种更高效解决该问题的新启发式算法。通过我们的新算法，在笔记本电脑上可以在一天内破解第一组参数。对于第二组参数，我们展示了在一天内可以破解的公钥的\(2^{-17}\)分数。我们在实践中没有破解第三组参数，但我们声称它达不到128位的目标安全级别。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_4](https://doi.org/10.1007/978-3-031-38548-3_4)
## Analysis of the Security of the PSSI Problem and Cryptanalysis of the Durandal Signature Scheme.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#analysis-of-the-security-of-the-pssi-problem-and-cryptanalysis-of-the-durandal-signature-scheme) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#analysis-of-the-security-of-the-pssi-problem-and-cryptanalysis-of-the-durandal-signature-scheme)**
### 作者
* Nicolas Aragon, Naquidis Center, Talence, France
* Victor Dyseryn, XLIM, Université de Limoges, Limoges, France
* Philippe Gaborit, XLIM, Université de Limoges, Limoges, France
### 摘要
> 我们提出了一种新的攻击 PSSI 问题的方法，这是 Durandal 安全性根源的三个问题之一，这是一个具有公钥大小为 15 kB 和签名大小为 4 kB 的高效排名度量码签名方案，该方案在 EUROCRYPT'19 上提出。我们的攻击使用来自几个使用相同密钥产生的签名的信息泄漏来恢复私钥。我们的方法是组合签名对并执行类似 Cramer 的公式，以建立包含秘密元素的子空间。我们破解了 Durandal 的所有现有参数：声称具有 128 位安全性的两套已发布参数分别在 $2^{66}$ 和 $2^{73}$ 个基本位操作中被破解，完成攻击所需的签名数量分别为 1,792 和 4,096。我们实施了我们的攻击并进行了实验，证明了它在较小的参数下取得了成功。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_5](https://doi.org/10.1007/978-3-031-38548-3_5)
## Finding Short Integer Solutions When the Modulus Is Small.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#finding-short-integer-solutions-when-the-modulus-is-small) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#finding-short-integer-solutions-when-the-modulus-is-small)**
### 作者
* Léo Ducas, CWI, Cryptology Group, Amsterdam, The Netherlands
* Eamonn W. Postlethwaite, CWI, Cryptology Group, Amsterdam, The Netherlands
* Léo Ducas, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Thomas Espitau, PQShield, Paris, France
### 摘要
> 我们通过利用\(q\)元格的BKZ约简基于几何分析方法对异常小模数\(q\)下非齐次短整数解（\(\textsf{ISIS}_{}\)-问题）进行了密码分析。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_6](https://doi.org/10.1007/978-3-031-38548-3_6)
## Practical-Time Related-Key Attack on GOST with Secret S-Boxes.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#practical-time-related-key-attack-on-gost-with-secret-s-boxes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#practical-time-related-key-attack-on-gost-with-secret-s-boxes)**
### 作者
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
* Nathan Keller, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Ariel Weizmann, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
### 摘要
> 俄罗斯联邦加密标准GOST 28147-89曾经使用超过20年，并且至今仍然是该国两种标准分组密码之一。GOST采用32轮费斯特尔结构，并且其安全性受益于设计中使用的S盒保持秘密。在过去的10年里，已经提出了多种针对完整的32轮GOST的攻击方法。然而，这些攻击都假设S盒是已知。当S盒是秘密的时候，所有已发表的攻击要么只针对一小部分轮数，要么只适用于少量弱密钥集合。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_7](https://doi.org/10.1007/978-3-031-38548-3_7)
## On Perfect Linear Approximations and Differentials over Two-Round SPNs.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#on-perfect-linear-approximations-and-differentials-over-two-round-spns) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#on-perfect-linear-approximations-and-differentials-over-two-round-spns)**
### 作者
* Christof Beierle, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* Patrick Neumann, Ruhr University Bochum, Bochum, Germany
* Lukas Stennes, Ruhr University Bochum, Bochum, Germany
* Patrick Felke, University of Applied Sciences Emden/Leer, Emden, Germany
### 摘要
> 最近对于嵌入密码后门的（可调整的）分组密码的构造依赖于原始的一个简化回合版本中存在概率为一的不同路径或完美的（非）线性逼近。在本研究中，我们研究了如何通过设计来避免在替代-置换网络的两个回合中存在概率为一的不同路径或完美的线性逼近。更具体地说，我们开发了关于S盒和线性层的准则，保证所有密钥都不存在概率为一的不同路径。我们进一步提出了一种算法，可以有效排除存在完美线性逼近的密钥的存在。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_8](https://doi.org/10.1007/978-3-031-38548-3_8)
## Differential Meet-In-The-Middle Cryptanalysis.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#differential-meet-in-the-middle-cryptanalysis) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#differential-meet-in-the-middle-cryptanalysis)**
### 作者
* Christina Boura, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, 78000, Versailles, France
* Nicolas David, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
* Patrick Derbez, Univ Rennes, Inria, CNRS, IRISA, Rennes, France
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
### 摘要
> 在这篇论文中，我们介绍了差分Meet-in-the-Middle框架，这是一种对称原语的新的密码分析技术。我们的新密码分析方法结合了Meet-in-the-Middle和差分密码分析的技术。因此，这种引入的技术可以看作是扩展Meet-in-the-Middle攻击及其变种的一种方式，同时也是在差分攻击中执行密钥恢复部分的一种新方法。我们将我们的方法应用于单密钥模型下的SKINNY-128-384和相关密钥模型下的AES-256。我们对SKINNY-128-384的攻击可以在这个变种的56轮中破解25轮，并且相较于之前已知的最佳攻击方法改进了两轮。对于AES-256，我们通过考虑两个相关密钥攻击了12轮，从而比之前仅考虑两个相关密钥的最佳相关密钥攻击方法提高了2轮。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_9](https://doi.org/10.1007/978-3-031-38548-3_9)
## Moving a Step of ChaCha in Syncopated Rhythm.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#moving-a-step-of-chacha-in-syncopated-rhythm) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#moving-a-step-of-chacha-in-syncopated-rhythm)**
### 作者
* Shichang Wang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Meicheng Liu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Shiqi Hou, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Dongdai Lin, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Shichang Wang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Meicheng Liu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Shiqi Hou, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Dongdai Lin, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
### 摘要
> 流密码ChaCha是现实世界中最广泛使用的密码之一，例如在TLS、SSH等方面。在本文中，我们通过基于概率中性比特（PNBs）的差分密码分析研究了ChaCha的安全性。我们引入了基于PNB的近似方法在反向方向上的改进技术，通过利用ARX结构的属性显著增强了其相关性。凭借这种技术，我们提出了一种寻找良好的PNB集合的新而高效的方法。随后，我们为轮次减少的ChaCha形成了一个改进的密钥恢复攻击框架。这些新技术使我们能够在没有最后一个异或和旋转操作的情况下突破7.5轮ChaCha，并且能够对6轮和7轮ChaCha进行更快的攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_10](https://doi.org/10.1007/978-3-031-38548-3_10)
## Cryptanalysis of Symmetric Primitives over Rings and a Key Recovery Attack on Rubato.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#cryptanalysis-of-symmetric-primitives-over-rings-and-a-key-recovery-attack-on-rubato) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#cryptanalysis-of-symmetric-primitives-over-rings-and-a-key-recovery-attack-on-rubato)**
### 作者
* Lorenzo Grassi, Ruhr University Bochum, Bochum, Germany
* Irati Manterola Ayala, Simula UiB, Bergen, Norway
* Martha Norberg Hovd, Simula UiB, Bergen, Norway
* Morten Øygarden, Simula UiB, Bergen, Norway
* Håvard Raddum, Simula UiB, Bergen, Norway
* Qingju Wang, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
### 摘要
> 对称原语是密码学的基石，传统上是在域上定义的，其中密码分析已经得到了很好的理解。然而，最近提出了一些在复合数\(q\)的环\(\mathbb Z _q\)上定义的对称原语，这是一个安全性研究相对较少的领域。本文主要研究通常在域上定义的已建立的代数攻击，并探讨其在模复合数\(q\)的整数环上定义的对称原语中的适用性。根据我们的分析，我们提出了对Rubato完整密码的攻击，这是Ha等人在Eurocrypt 2022中提出的一族对称密码，旨在用于近似完全同态加密的转加密框架中。我们发现，至少25\(\%\)的可选\(q\)选择满足某些条件，导致以明显低于Rubato家族六个密码中五个的声称安全级别的复杂度成功恢复密钥的攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_11](https://doi.org/10.1007/978-3-031-38548-3_11)
## Prouff and Rivain's Formal Security Proof of Masking, Revisited - Tight Bounds in the Noisy Leakage Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#prouff-and-rivains-formal-security-proof-of-masking-revisited-tight-bounds-in-the-noisy-leakage-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#prouff-and-rivains-formal-security-proof-of-masking-revisited-tight-bounds-in-the-noisy-leakage-model)**
### 作者
* Loïc Masure, ICTEAM Institute, Université catholique de Louvain, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, ICTEAM Institute, Université catholique de Louvain, Louvain-la-Neuve, Belgium
### 摘要
> 掩码是可以被纳入到块密码软件和硬件实现中的一种对策，用以证明它们能抵御侧信道攻击。掩码的安全性可以在不同类型的威胁模型中得到证明。在本篇论文中，我们感兴趣的是直接证明在最真实的威胁模型中的安全性，即所谓的噪声泄露对手模型，这一模型很好地捕获了如何在现实世界中操作侧信道对手。此泄露模型中的直接证明已经由Prouff和Rivain在2013年的Eurocrypt，Dziembowski等人在2015年的Eurocrypt，以及Prest等人在2019的Crypto上设立。这些证明互为补充，换句话说，一个证明的弱点可以在其他至少一个证明中得到修复，反之亦然。这些弱点特别涉及到获得有意义的安全范围时噪声级别和安全参数的强需求，以及证明所涵盖的对手类型的一些要求——例如，选择性或随机明文。这表明每个安全范围的缺点可能实际上是证明的艺术品。在本文中，我们通过

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_12](https://doi.org/10.1007/978-3-031-38548-3_12)
## Combined Fault and Leakage Resilience: Composability, Constructions and Compiler.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#combined-fault-and-leakage-resilience-composability-constructions-and-compiler) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#combined-fault-and-leakage-resilience-composability-constructions-and-compiler)**
### 作者
* Sebastian Berndt, Institute for Theoretical Computer Science, University of Lübeck, Lübeck, Germany
* Thomas Eisenbarth, Institute for IT Security, University of Lübeck, Lübeck, Germany
* Sebastian Faust, TU Darmstadt, Darmstadt, Germany
* Maximilian Orlt, TU Darmstadt, Darmstadt, Germany
* Marc Gourjon, Hamburg University of Technology, Hamburg, Germany
* Marc Gourjon, NXP Semiconductors, Hamburg, Germany
* Okan Seker, NXP Semiconductors, Hamburg, Germany
### 摘要
> 现今的真实密码学实现不仅受到传统密码分析的攻击，还面临来自实施攻击的威胁，其中包括被动攻击（观察内部计算的边信道信息）和主动攻击（在计算中插入错误）。尽管针对每种类型的攻击都存在相应的对策，但针对组合攻击的对策直至最近才开始被考虑。掩码是一种用于防护被动边信道攻击的标准技术，但利用加性掩码来防护主动攻击是具有挑战性的。先前的方法包括运行多个掩码计算的副本，需要大量随机性或者容易受到水平攻击。一种替代方法是多项式掩码，它具有内在的容错能力。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_13](https://doi.org/10.1007/978-3-031-38548-3_13)
## Learning with Physical Rounding for Linear and Quadratic Leakage Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#learning-with-physical-rounding-for-linear-and-quadratic-leakage-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#learning-with-physical-rounding-for-linear-and-quadratic-leakage-functions)**
### 作者
* Clément Hoffmann, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Charles Momin, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Balazs Udvarhelyi, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Pierrick Méaux, Luxembourg University, SnT, Esch-sur-Alzette, Luxembourg
* Yann Rotella, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, 78000, Versailles, France
### 摘要
> 新鉴权是一种针对侧信道分析的对策，其中通过使用公共随机值从长期密钥派生出临时密钥。这类方案的流行实例依赖于密钥同态原语，以便使重新鉴权过程易于掩盖，并且其余的（例如块密码）计算可以采用更廉价的对策继续运行。这些方案要求的主要安全性条件是临时密钥的泄露不允许恢复长期密钥。物理舍入学习（Learning with Physical Rounding，LWPR）问题在一个实际相关的模型中形式化了这种安全性，其中对手可以观察无噪声的泄露。它可以被视为学习舍入（Learning With Rounding，LWR）问题的物理版本，其中舍入是由泄露函数执行的，因此不需要显式计算。在本文中，我们首先加强了LWPR在串行实现环境中不能在没有额外对策的情况下保证安全性的直觉，因为攻击者可以使用实际数据复杂性来利用最坏情况泄露。然后，我们在并行实现环境中扩展了对LWPR的理解。一方面，我们推广了其对于利用任何（不仅是最坏情况）泄露进行密码分析的鲁棒性。先前的研究声称在汉明重量泄漏函数的特定环境下具有安全性。我们明确了保持这种保证所需的条件，这取决于泄漏函数的阶数和其系数的精度。另一方面，我们展示了并行性在防御利用最坏情况泄露进行攻击方面固有的良好安全性。最后，我们通过针对一个示例实现实验验证了这些结果的实用相关性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_14](https://doi.org/10.1007/978-3-031-38548-3_14)
## Unifying Freedom and Separation for Tight Probing-Secure Composition.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#unifying-freedom-and-separation-for-tight-probing-secure-composition) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#unifying-freedom-and-separation-for-tight-probing-secure-composition)**
### 作者
* Sonia Belaïd, CryptoExperts, Paris, France
* Matthieu Rivain, CryptoExperts, Paris, France
* Abdul Rahman Taleb, CryptoExperts, Paris, France
* Abdul Rahman Taleb, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
* Gaëtan Cassiers, TU Graz, Graz, Austria
### 摘要
> 屏蔽对策常常在探测模型中进行分析。通过组合满足非干扰（NI）、强非干扰（SNI）或自由 SNI 等安全定义的小工具，可以证明高屏蔽顺序下大电路的探测安全性。区域探测模型是探测模型的一种变体，其中对手的探测能力随着屏蔽电路中区域数量的增加而增加。这个模型很有意思，因为它允许更好地减少到更现实的嘈杂泄漏模型。通过引入输入-输出分离（IOS）定义，可提高复合区域探测安全屏蔽的效率。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_15](https://doi.org/10.1007/978-3-031-38548-3_15)
## Twin Column Parity Mixers and Gaston - A New Mixing Layer and Permutation.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#twin-column-parity-mixers-and-gaston-a-new-mixing-layer-and-permutation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#twin-column-parity-mixers-and-gaston-a-new-mixing-layer-and-permutation)**
### 作者
* Solane El Hirch, Radboud University, Nijmegen, The Netherlands
* Joan Daemen, Radboud University, Nijmegen, The Netherlands
* Raghvendra Rohit, Cryptography Research Centre, Technology Innovation Institute, Abu Dhabi, UAE
* Rusydi H. Makarim, Jakarta, Indonesia
### 摘要
> 我们引入了一种新型的加密排列轮函数的混合层，称为循环双列奇偶混合器（CPM），它是Keccak-f和Xoodoo中混合层的一般化。尽管这些混合层的位差分分支数为4，每位的计算成本为2（位差）加法，但我们构建的循环双列CPM具有12位差分分支数，代价是计算成本的增加：根据维度的不同，每位范围在3到3.34个XOR。我们的循环双列CPM在以矩形数组形式操作状态的基础上运行，并可用作在列上并行操作的S盒层之后的混合层。当夹在两个类似ShiftRow的映射之间时，我们可以获得12的列分支数，从而确保在差分轨迹中每两轮有12个活跃的S盒。值得注意的是，这些映射的线性分支数（无论是按位还是列）只有4。然而，我们定义了循环双列CPM的转置，其线性分支数为12，差分分支数为4。我们提供了一种使用这种混合层的置换的具体实例，称为Gaston。它在一个5×64位的状态上操作，并使用chi函数在列上进行非线性运算。值得注意的是，Gaston的轮函数是轻量级的，因为它的比特操作数量与NIST轻量级标准Ascon相同。我们展示了Gaston最佳的3轮差分和线性轨迹的权重比Ascon高得多。像Gaston这样的置换在完全依赖于良好的差分特性的应用中，比如Farfalle的压缩阶段中的键入散列，可能非常有竞争力。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_16](https://doi.org/10.1007/978-3-031-38548-3_16)
## New Design Techniques for Efficient Arithmetization-Oriented Hash Functions: ttAnemoi Permutations and ttJive Compression Mode.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#new-design-techniques-for-efficient-arithmetization-oriented-hash-functions-ttanemoi-permutations-and-ttjive-compression-mode) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#new-design-techniques-for-efficient-arithmetization-oriented-hash-functions-ttanemoi-permutations-and-ttjive-compression-mode)**
### 作者
* Clémence Bouvier, Sorbonne University, Paris, France
* Pierre Briaud, Sorbonne University, Paris, France
* Clémence Bouvier, Inria, Paris, France
* Pierre Briaud, Inria, Paris, France
* Léo Perrin, Inria, Paris, France
* Pyrros Chaidos, National & Kapodistrian University of Athens, Athens, Greece
* Robin Salen, Toposware, Inc., Boston, USA
* Vesselin Velichkov, University of Edinburgh, Edinburgh, Scotland
* Vesselin Velichkov, Clearmatics, London, England
* Danny Willems, Nomadic Labs, Paris, France
* Danny Willems, LIX, Paris, France
### 摘要
> 先进的密码协议，例如零知识（ZK）知识证明，在加密货币应用中广泛使用，如Zcash、Monero、Filecoin、Tezos和Topos，要求新的密码哈希函数不仅在二进制域 \(\mathbb {F}_2\) 上有效，还要在具有素数特征 \(\mathbb {F}_p\) 的大域上有效。这个需求已经得到了社区的认可，并提出了新的所谓算术导向（AO）哈希函数，例如MiMC-Hash、Rescue-Prime、Poseidon、Reinforced Concrete和Griffin等等。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_17](https://doi.org/10.1007/978-3-031-38548-3_17)
## Coefficient Grouping for Complex Affine Layers.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#coefficient-grouping-for-complex-affine-layers) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#coefficient-grouping-for-complex-affine-layers)**
### 作者
* Fukang Liu, Tokyo Institute of Technology, Tokyo, Japan
* Lorenzo Grassi, Ruhr University Bochum, Bochum, Germany
* Clémence Bouvier, Sorbonne University, Paris, France
* Clémence Bouvier, Inria, Paris, France
* Willi Meier, FHNW, Windisch, Switzerland
* Takanori Isobe, University of Hyogo, Hyogo, Japan
* Takanori Isobe, NICT, Tokyo, Japan
### 摘要
> 设计用于全同态加密（Fully Homomorphic Encryption, FHE）应用的对称密钥基元已经变得重要，以解决密文膨胀的问题。在这样的背景下，具有低AND深度解密电路的密码基元是理想的。因此，这些基元通常使用二次非线性函数，包括在\(\mathbb {F}_2^n\)上的著名\(\chi \)函数和在大有限域\(\mathbb {F}_{p^n}\)上的幂映射。在这项工作中，我们研究了在\(\mathbb {F}_{2^n}^{m}\)上的SPN密码的代数度增长，其S-box被定义为幂映射\(x\mapsto x^{2^d+1}\)和\(\mathbb {F}_2\)-线性化仿射多项式\(x\mapsto c_0+\sum _{i=1}^{w}c_ix^{2^{h_i}}\)的组合，其中\(c_1,\ldots ,c_w\ne 0\)。具体来说，受到原始的在EUROCRYPT 2023发表的系数分组技术对\(w>1\)的效率递减的启发，我们开发了一种变体技术，可以高效地处理任意的w。通过这种新技术来研究代数度的上界，我们从理论角度回答了以下问题：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_18](https://doi.org/10.1007/978-3-031-38548-3_18)
## Horst Meets Fluid-SPN: Griffin for Zero-Knowledge Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#horst-meets-fluid-spn-griffin-for-zero-knowledge-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#horst-meets-fluid-spn-griffin-for-zero-knowledge-applications)**
### 作者
* Lorenzo Grassi, Ruhr University Bochum, Bochum, Germany
* Yonglin Hao, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Christian Rechberger, Graz University of Technology, Graz, Austria
* Roman Walch, Graz University of Technology, Graz, Austria
* Markus Schofnegger, Horizen Labs, Austin, USA
* Roman Walch, Know-Center GmbH, Graz, Austria
* Roman Walch, TACEO GmbH, Graz, Austria
* Qingju Wang, Telecom Paris, Institut Polytechnique de Paris, Paris, France
### 摘要
> 你好，作为研究员，我可以帮您翻译摘要。以下是对应的简化汉语翻译：
> 
> 零知识（ZK）应用是现代密码学中一个重要的使用案例群体，并且由于新颖的证明系统而日益受到关注。在这些应用中，加密哈希函数常被用作主要构建单元，并且通常会影响整体性能和成本。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_19](https://doi.org/10.1007/978-3-031-38548-3_19)
## On the Security of Keyed Hashing Based on Public Permutations.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#on-the-security-of-keyed-hashing-based-on-public-permutations) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#on-the-security-of-keyed-hashing-based-on-public-permutations)**
### 作者
* Jonathan Fuchs, Radboud University, Nijmegen, The Netherlands
* Joan Daemen, Radboud University, Nijmegen, The Netherlands
* Yann Rotella, Université Paris-Saclay, UVSQ, CNRS, Versailles, France
### 摘要
> 双可扩展加密密钥函数（DECK）是对消息认证码（MAC）和流密码的概念的推广，因为它们支持可变长度的字符串作为输入，并返回可变长度的字符串作为输出。著名的DECK函数之一是Farfalle，它由一组公共排列和用于压缩和扩展层的滚动函数组成。通过推广Farfalle的压缩层，我们证明了其在使用的公共排列的差分概率上的普遍性。由于Farfalle的压缩层具有固有的并行性，我们将其与由Pelican-MAC启发的串行压缩函数的推广进行比较。相同的公共排列可能会导致不同的普遍性，取决于压缩是并行还是串行进行。并行结构始终优于串行结构，有时差距很大。我们使用Xoodoo [3]演示了这种效果，它是DECK函数Xoofff中使用的公共排列的轮减少变体。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_20](https://doi.org/10.1007/978-3-031-38548-3_20)
## Revisiting the Indifferentiability of the Sum of Permutations.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#revisiting-the-indifferentiability-of-the-sum-of-permutations) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#revisiting-the-indifferentiability-of-the-sum-of-permutations)**
### 作者
* Aldo Gunsing, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Bart Mennink, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Ritam Bhaumik, EPFL, Lausanne, Switzerland
* Ashwin Jha, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Yaobin Shen, UCLouvain, ICTEAM/ELEN/Crypto Group, Louvain-la-Neuve, Belgium
### 摘要
> 两个n位伪随机置换的和被认为表现得像具有n位安全性的伪随机函数。最近的一系列研究探讨了两个公开的n位置换的安全性及其不可区分性。Mandal等人在INDOCRYPT 2010中证明了2n/3位安全性，Mennink和Preneel在ACNS 2015中指出了他们分析中的一个非平凡缺陷，并重新证明了(2n/3-log_2(n))位安全性。Bhattacharya和Nandi在EUROCRYPT 2018中最终将结果改进为n位安全性。最近，Gunsing在CRYPTO 2022中已经观察到，这一系列研究中使用的证明技术只适用于顺序不可区分性。我们对这一研究进行了详细的重新审视，并观察到n位安全性的最强界限存在其他两个严重的推理问题，第一个问题实际上是Mandal等人的工作中存在的同样非平凡缺陷，而第二个问题忽略了受区分器影响的随机性中的偏差。更具体地说，我们引入了两种攻击方法，显示了不同方法的有限潜力。我们(i)表明，忽略偏差的后一个问题只适用于2^(3n/4)次查询，(ii)对他们的模拟器执行了一个可区分性攻击，需要2^(5n/6)次查询。好的方面是，我们重新验证了Mennink和Preneel的结果，并展示了公开置换的和的(2n/3-log_2(n))位常规不可区分性安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_21](https://doi.org/10.1007/978-3-031-38548-3_21)
## When Messages Are Keys: Is HMAC a Dual-PRF?
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#when-messages-are-keys-is-hmac-a-dual-prf) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#when-messages-are-keys-is-hmac-a-dual-prf)**
### 作者
* Matilda Backendal, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Felix Günther, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Matteo Scarlata, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Mihir Bellare, Department of Computer Science and Engineering, University of California, San Diego, USA
### 摘要
> 在包括TLS 1.3、KEMTLS、MLS和Noise等Internet安全协议中，假设\(\textsf{HMAC}\)是一种双伪随机函数（dual-PRF），这意味着\(\textsf{HMAC}\)不仅在传统的方式（通过第一个输入键入）下是一个伪随机函数，而且在“交换”并通过其第二个（消息）输入键入（非传统方式）时也是一个伪随机函数。我们首次对\(\textsf{HMAC}\)的双伪随机函数假设进行了深入分析。对于交换情况，我们指出一般情况下安全性不成立，但我们完全描述了何时成立；我们证明只有当密钥被限制为满足一个称为可行性条件的集合时，即在应用程序中成立，\(\textsf{HMAC}\)才能具有交换伪随机函数安全性。我们通过证明来表明充分性，并通过攻击来表明必要性。对于传统伪随机函数情况，在文献中我们填补了一个空白，证明了\(\textsf{HMAC}\)对任意长度密钥的伪随机函数安全性。我们的证明在标准模型中进行，只对散列函数底层的压缩函数进行假设，并在多用户环境中给出了良好的边界。通过实现新的可变密钥长度伪随机函数安全性概念，我们进一步加强了这些正面结果，即使不同用户使用不同长度的密钥，也能保证安全性，这在实践中是常见的情况。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_22](https://doi.org/10.1007/978-3-031-38548-3_22)
## Layout Graphs, Random Walks and the t-Wise Independence of SPN Block Ciphers.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#layout-graphs-random-walks-and-the-t-wise-independence-of-spn-block-ciphers) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#layout-graphs-random-walks-and-the-t-wise-independence-of-spn-block-ciphers)**
### 作者
* Tianren Liu, Peking University, Beijing, China
* Angelos Pelecanos, UC Berkeley, Berkeley, USA
* Stefano Tessaro, University of Washington, Seattle, USA
* Vinod Vaikuntanathan, MIT CSAIL, Cambridge, USA
### 摘要
> 我们继续研究刘、特萨罗和维坤塔纳森（2021年CRYPTO）的最新工作所引发的置换置换网络（SPN）的t-独立性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_23](https://doi.org/10.1007/978-3-031-38548-3_23)
## CSI -Otter: Isogeny-Based (Partially) Blind Signatures from the Class Group Action with a Twist.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#csi-otter-isogeny-based-partially-blind-signatures-from-the-class-group-action-with-a-twist) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#csi-otter-isogeny-based-partially-blind-signatures-from-the-class-group-action-with-a-twist)**
### 作者
* Shuichi Katsumata, PQShield, Ltd., Oxford, UK
* Shuichi Katsumata, AIST, Tokyo, Japan
* Yi-Fu Lai, Department of Mathematics, University of Auckland, Auckland, New Zealand
* Ling Qin, Department of Mathematics, University of Auckland, Auckland, New Zealand
* Jason T. LeGrow, Department of Mathematics, Virginia Polytechnic Institute and State University, Blacksburg, USA
### 摘要
> 在这篇论文中，我们构建了第一个经证明安全的同态同分异型（部分）盲签名方案。虽然从高层次上看，该方案类似于Schnorr盲签名，但我们的工作并不直接源于那个构造，因为同分异型并不提供如此丰富的代数结构。具体而言，我们的协议不符合由Hauck，Kiltz和Loss（EUROCRYPT'19）引入的线性识别协议抽象，该抽象用于基于经典群和格等模块泛化构造类似于Schnorr的盲签名。因此，我们的方案似乎不容易受到最近基于底层数学工具的线性特性的高效ROS攻击的影响。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_24](https://doi.org/10.1007/978-3-031-38548-3_24)
## Weak Instances of Class Group Action Based Cryptography via Self-pairings.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#weak-instances-of-class-group-action-based-cryptography-via-self-pairings) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#weak-instances-of-class-group-action-based-cryptography-via-self-pairings)**
### 作者
* Wouter Castryck, imec-COSIC, KU Leuven, Leuven, Belgium
* Marc Houben, imec-COSIC, KU Leuven, Leuven, Belgium
* Sam van Buuren, imec-COSIC, KU Leuven, Leuven, Belgium
* Frederik Vercauteren, imec-COSIC, KU Leuven, Leuven, Belgium
* Marc Houben, Departement Wiskunde, KU Leuven, Leuven, Belgium
* Marc Houben, Mathematisch Instituut, Universiteit Leiden, Leiden, The Netherlands
* Wouter Castryck, Vakgroep Wiskunde: Algebra en Meetkunde, Universiteit Gent, Ghent, Belgium
* Simon-Philipp Merz, Information Security Group, Royal Holloway, University of London, Egham, UK
* Marzio Mula, Dipartimento di Matematica, Università degli Studi di Trento, Trento, Italy
### 摘要
> 在这篇论文中，我们研究了与由虚二次序数Ο排序的椭圆曲线之间的同构配对相容的具有循环域的非平凡自配对。我们证明了这种自配对的次数m必然满足m|ΔΟ（如果4|ΔΟ，则2m|ΔΟ，如果8|ΔΟ，则4m|ΔΟ），并且不是域特征的倍数。反之，对于满足这些必要条件的每个m，我们构建了一个基于广义Weil和Tate配对的非平凡循环自配对的次数为m的家族，这些自配对与有向同构相容。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_25](https://doi.org/10.1007/978-3-031-38548-3_25)
