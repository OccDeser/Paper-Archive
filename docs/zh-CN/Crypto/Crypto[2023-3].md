# Crypto[2023-3]
## Fast Practical Lattice Reduction Through Iterated Compression.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#fast-practical-lattice-reduction-through-iterated-compression) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#fast-practical-lattice-reduction-through-iterated-compression)**
### 作者
* Keegan Ryan, University of California, San Diego, La Jolla, USA
* Nadia Heninger, University of California, San Diego, La Jolla, USA
### 摘要
> 我们引入了一种新的格基缩小算法，其近似保证类似于LLL算法，并且实际性能远远超过当前的艺术水平。我们通过在递归算法结构中迭代应用精度管理技术来实现这些结果，并展示了这种方法的稳定性。我们分析了我们算法的渐近行为，并表明在维度为n的格中，启发式运行时间为\(O(n^{\omega}(C+n)^{1+\varepsilon})\)，其中\(\omega \in (2,3]\)限定了尺寸缩小、矩阵乘法和QR分解的成本，C限定了输入基B条件数的对数。这给出了在常见应用中，精度\(p=O(\log \Vert B\Vert_{max})\)的运行时间为\(O\left(n^\omega(p+n)^{1+\varepsilon}\right)\)。我们的算法完全实用，我们已经发布了我们的实现。我们通过实验证实了我们的启发式算法，对多种密码学格类进行了广泛的基准测试，并表明我们的算法明显优于现有的实现。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_1](https://doi.org/10.1007/978-3-031-38548-3_1)
## Does the Dual-Sieve Attack on Learning with Errors Even Work?
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#does-the-dual-sieve-attack-on-learning-with-errors-even-work) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#does-the-dual-sieve-attack-on-learning-with-errors-even-work)**
### 作者
* Léo Ducas, CWI, Cryptology Group, Amsterdam, The Netherlands
* Ludo N. Pulles, CWI, Cryptology Group, Amsterdam, The Netherlands
* Léo Ducas, Mathematical Institute, Leiden University, Leiden, The Netherlands
### 摘要
> 郭和约翰松（ASIACRYPT 2021）以及MATZOV（技术报告2022）分别宣称通过在所谓的双筛攻击中添加快速傅里叶变换（FFT）技巧对各种NIST格候选进行了改进的攻击。最近，还进行了更多的跟进工作，添加了新的实际改进。
> 
> 然而，从理论角度来看，所有这些工作都痛苦地局限于误差学习，而双筛攻击的原理更加通用（Laarhoven和Walter，CT-RSA 2021）。更为关键的是，所有这些工作都基于在理论和实验方面都接受了很少关注的启发式方法。
> 
> 本研究旨在纠正文献中上述缺陷。我们首先提出了郭和约翰松对任意有界距离解码实例的FFT技巧的概括。这种概括为攻击提供了一种新的改进。
> 
> 然后，我们从理论上探讨了这些启发式方法，并展示了在某些情况下它们与正式的无条件定理相矛盾，在其他情况下又与经过良好测试的启发式方法相矛盾。最近文献的具体实例属于后一种情况。
> 
> 我们通过实验证实了这些矛盾，并记录了一些分析所没有预测到的现象，包括类似于低密度奇偶校验解码失败的“瀑布地板”现象。
> 
> 我们得出结论，最近的双筛FFT攻击的成功概率可能被显著高估。我们进一步讨论修复攻击及其分析的适当方式。

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
> 基于编码的密码学近来引起了广泛关注，因为它在量子计算下被认为是安全的。其中，基于QC-MDPC的方案由于其出色的性能而被认为是最有前景的之一。通常情况下，基于QC-MDPC的方案容易出现解密失败的情况，这可能泄露关于秘密密钥的信息。这引发了两个关键问题：如何准确地估计解密失败率以及如何利用失败信息恢复秘密密钥。然而，由于在QC-MDPC中使用的位翻转译码器的几何特征化的困难性，即使用解码半径，这两个问题都具有挑战性。
> 
> 在这项工作中，我们介绍了收集属性，并展示了它与QC-MDPC的解密失败率之间的强关联性。基于这个属性，我们提出了两个针对基于QC-MDPC的方案的结果。第一个结果是通过环同构扩展具有收集属性的密钥而获得的弱密钥的新构造。针对这组弱密钥，我们对解密失败率的概率进行了严格分析，并进行了实验模拟。考虑到BIKE方案的参数集目标为128位安全性，我们的结果最终表明平均解密失败率的下界为\(\text {DFR}_{\text {avg}} \ge 2^{-116.61}\)。第二个结果是在多目标设置中利用解密失败进行的两种密钥恢复攻击，针对CCA安全的QC-MDPC方案。这两种攻击分别考虑是否允许重复使用密文。无论是哪种情况，我们都展示了解密失败可以用于确定目标的秘密密钥是否满足收集属性。然后，利用收集属性作为额外信息，我们提出了一种修改后的信息集解码算法，有效地恢复目标的秘密密钥。对于BIKE方案的参数集目标为128位安全性，我们展示了一种密钥恢复攻击的复杂度为\(2^{116.61}\)，如果不允许重复使用密文，则复杂度可以降低到\(2^{98.77}\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_3](https://doi.org/10.1007/978-3-031-38548-3_3)
## Graph-Theoretic Algorithms for the Alternating Trilinear Form Equivalence Problem.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#graph-theoretic-algorithms-for-the-alternating-trilinear-form-equivalence-problem) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#graph-theoretic-algorithms-for-the-alternating-trilinear-form-equivalence-problem)**
### 作者
* Ward Beullens, IBM Research, Zurich, Switzerland
### 摘要
> 在Eurocrypt'22上，唐，Duong，Joux，Plantard，Qiao和Susilo提出了一种基于交替三线性形式同态难题的数字签名算法。他们分别提出了三个具体维度为9、10和11的参数。我们提供了新的启发式算法，以更高效地解决这个问题。使用我们的新算法，第一个参数集可以在一天内在笔记本电脑上被破解。对于第二个参数集，我们展示了有一个\(2^{-17}\)的公钥部分可以在一天内被破解。我们没有在实践中破解第三个参数集，但我们声称它的安全级别低于128位的目标安全级别。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_4](https://doi.org/10.1007/978-3-031-38548-3_4)
## Analysis of the Security of the PSSI Problem and Cryptanalysis of the Durandal Signature Scheme.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#analysis-of-the-security-of-the-pssi-problem-and-cryptanalysis-of-the-durandal-signature-scheme) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#analysis-of-the-security-of-the-pssi-problem-and-cryptanalysis-of-the-durandal-signature-scheme)**
### 作者
* Nicolas Aragon, Naquidis Center, Talence, France
* Victor Dyseryn, XLIM, Université de Limoges, Limoges, France
* Philippe Gaborit, XLIM, Université de Limoges, Limoges, France
### 摘要
> 我们提出了一种针对PSSI问题的新攻击，该问题是Durandal安全性根源中的三个问题之一，Durandal是一种高效的基于秩度量码的签名方案，其公钥大小为15 kB，签名大小为4 kB，该方案在EUROCRYPT'19上进行了介绍。我们的攻击利用了从使用相同密钥生成的几个签名中泄漏的信息来恢复私钥。我们的方法是将一对签名结合起来，并执行类似Cramer的公式，以构建包含秘密元素的子空间。我们破解了Durandal的所有现有参数：声称具有128位安全性的两个已发布参数集分别在\(2^{66}\)和\(2^{73}\)个基本位操作中被破解，完成攻击所需的签名数量分别为1,792和4,096。我们实施了我们的攻击并进行了实验，证明了它在较小参数下的成功。

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
> 我们通过利用q元格的BKZ约简基向量的几何性质，对具有异常小模数q的非均匀短整数解（ISIS）问题进行了密码分析。我们将此密码分析应用于文献中建议采用这种小模数的示例。最近的一项工作[Espitau–Tibouchi–Wallet–Yu, CRYPTO 2022]提出了格签名方案Falcon及其变种Mitaka的小q版本。对于Falcon的一种小q参数化，我们将估计的签名伪造安全性降低了约26位。对于Mitaka的一种小q参数化，我们成功地在15秒内伪造了一个签名。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_6](https://doi.org/10.1007/978-3-031-38548-3_6)
## Practical-Time Related-Key Attack on GOST with Secret S-Boxes.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#practical-time-related-key-attack-on-gost-with-secret-s-boxes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#practical-time-related-key-attack-on-gost-with-secret-s-boxes)**
### 作者
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
* Nathan Keller, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Ariel Weizmann, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
### 摘要
> GOST 28147-89是俄罗斯联邦的加密标准已经超过20年，并仍然是其两个标准分组密码之一。GOST是一个32轮Feistel结构，其安全性受益于设计中使用的S盒保持保密。在过去的10年中，对完整的32轮GOST进行了多次攻击。然而，所有这些攻击都假设S盒是已知的。当S盒是保密的时候，所有已发布的攻击要么针对一小部分轮数，要么适用于一小组弱密钥。
> 
> 在本文中，我们提出了对具有保密S盒的GOST的第一种实用时间攻击。该攻击基于相关密钥模型，并且比前面所有假设S盒为已知的攻击都要快。攻击的复杂度小于2的27次方个加密操作。它已经被完全验证，并且在个人电脑上只需几秒钟即可运行。该攻击基于一种新型的GOST相关密钥差分技术，受到局部碰撞的启发。
> 
> 我们的新技术也可能适用于某些基于GOST的哈希函数。为了证明这一点，我们展示了如何在基于具有任意初始值的GOST的Davies-Meyer结构上找到一个碰撞，在小于2的10次方的哈希函数评估中完成。

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
> 近期构建（可调整的）分组密码中的加密后门依赖于原语的缩减轮次版本中存在概率一差分或完美（非）线性逼近。在本研究中，我们研究了在代换-置换网络的两轮中如何通过设计来避免存在概率一差分或完美线性逼近。更具体地说，我们制定了关于S盒和线性层的条件，以保证所有密钥下不存在概率一差分。我们进一步提出了一种算法，可以有效地排除存在完美线性逼近的密钥的存在。

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
> 在本文中，我们介绍了差分meet-in-the-middle框架，这是一种用于对称原语的新加密分析技术。我们的新加密分析方法结合了meet-in-the-middle和差分加密分析的技术。因此，这种引入的技术可以被看作是扩展meet-in-the-middle攻击及其变体的一种方式，同时也可以看作是差分攻击中执行关键恢复部分的一种新方法。我们将这种方法应用于单密钥模型下的SKINNY-128-384和相关密钥模型下的AES-256。我们对SKINNY-128-384的攻击可以破坏该变体的56轮中的25轮，并且比之前已知的最佳攻击提高了两轮。对于AES-256，我们通过考虑两个相关密钥攻击了12轮，因此超过了之前仅使用两个相关密钥的最佳相关密钥攻击2轮。

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
> 流密码ChaCha是现实世界中最广泛使用的密码之一，例如在TLS、SSH等领域。本文基于概率中立位（PNBs）的差分密码分析研究了ChaCha的安全性。我们引入了以前向技术为基础的PNB近似同步方法，通过利用ARX结构的特性，显著增强了其相关性。借助这种技术，我们提出了一种新的高效方法来找到一组良好的PNBs。随后，我们针对降轮的ChaCha形成了一种改进的密钥恢复攻击框架。这些新技术使我们能够在不考虑最后一个XOR和旋转操作的情况下破解7.5轮的ChaCha，同时更快地攻击6轮和7轮的ChaCha。

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
> 对称原语是密码学的基石，传统上是在领域上定义的，现在对密码分析已有了深入的了解。然而，最近有一些对复合数\(q\)上定义的对称原语，也就是环\(\mathbb Z _q\)上定义的对称原语才被提出，而在这种情况下，安全性没有得到充分的研究。本文侧重研究通常定义在域上的已建立的代数攻击，并探讨它们对在模复合数\(q\)上定义的对称原语的适用程度。基于我们的分析，我们提出了对Ha等人在Eurocrypt 2022中提出的一种名为全Rubato的对称密码系列的攻击。这种密码系列旨在用于近似完全同态加密的转换框架。我们发现至少25%的\(q\)的可能选择满足特定条件，可以实现比宣称的安全级别低得多的密钥恢复攻击，对于Rubato系列的六个密码中的五个密码。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_11](https://doi.org/10.1007/978-3-031-38548-3_11)
## Prouff and Rivain's Formal Security Proof of Masking, Revisited - Tight Bounds in the Noisy Leakage Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#prouff-and-rivains-formal-security-proof-of-masking-revisited-tight-bounds-in-the-noisy-leakage-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#prouff-and-rivains-formal-security-proof-of-masking-revisited-tight-bounds-in-the-noisy-leakage-model)**
### 作者
* Loïc Masure, ICTEAM Institute, Université catholique de Louvain, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, ICTEAM Institute, Université catholique de Louvain, Louvain-la-Neuve, Belgium
### 摘要
> 屏蔽是一种针对侧信道攻击的软件和硬件实现的分组密码的对策，可以在不同类型的威胁模型中被证明为安全的。在本文中，我们感兴趣的是在最真实的威胁模型中直接证明安全性，即所谓的嘈杂泄露敌手模型，该模型能够很好地捕捉到现实世界的侧信道敌手的操作方式。Prouff＆Rivain在Eurocrypt 2013，Dziembowski等人在Eurocrypt 2015，以及Prest等人在Crypto 2019中建立了这种泄漏模型中的直接证明。这些证明互补，一个证明的弱点可以在其他证明中得到修复，反之亦然。这些弱点主要涉及噪声水平和安全参数对获取有意义的安全界限的强要求，以及对证明所涵盖的敌手类型（选择的或随机明文）的一些要求。这表明每个安全界限的缺点实际上可能是证明工件。在本文中，我们通过重新审视Prouff＆Rivain的方法解决了这两个问题。

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
> 当今世界上的加密实现不仅受到传统密码学攻击的威胁，而且还受到实现攻击的威胁，包括被动攻击（观察内部计算的侧信道信息）和主动攻击（在计算中插入故障）。虽然每种类型的攻击都存在对应的对策，但针对组合攻击的对策最近才被考虑。掩码是一种保护被动侧信道攻击的标准技术，但是使用加性掩码来防范主动攻击是具有挑战性的。以前的方法包括运行多个掩码计算，需要大量的随机性或易受水平攻击。另一种替代方法是多项式掩码，它本质上是防故障的。
> 
> 本文提出了一种基于多项式掩码的编译器，其对于仿射函数具有线性计算复杂性，对于非线性函数的计算复杂性是立方级别的。生成的编译器对于使用区域探针和自适应故障的攻击者是安全的。此外，还引入了“故障不变性”的概念，以提高针对组合攻击的安全性，而不需要考虑所有可能的故障组合。我们的方法具有目前所有已知方法中最佳的渐近效率。

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
> 新鉴密是一种防护侧信道攻击的对策，其中临时密钥是使用公共随机值从长期密钥派生出来的。这类方案的热门实例依赖于密钥同态原语，使得重新鉴密过程容易遮盖，并且其余（例如分组密码）计算可以运行更廉价的对策。这些方案要求的主要安全性要求是临时密钥的泄漏不允许恢复长期密钥。物理舍入学习（LWPR）问题在一个实际相关模型中形式化了这种安全性，其中对手可以观察无噪声泄漏。它可以视为舍入学习（LWR）问题的物理版本，在这里舍入由泄漏函数执行，因此不需要显式计算。在本文中，首先巩固了LWPR在串行实现环境下不能安全的直觉，除非有额外的对策（如洗牌），因为存在利用具有实际数据复杂度的最坏泄漏进行攻击的情况。然后我们扩展了对并行实现环境下LWPR的理解。一方面，我们推广了其对密钥分析的强健性，可以利用任何（不仅仅是最坏情况）的泄漏。以前的工作声称在汉明重量泄漏函数特定环境中具有安全性。我们根据泄漏函数的度和系数的精度来阐明维持此保证的必要条件。另一方面，我们展示了并行性本质上对抗利用最坏泄漏的攻击提供良好的安全性。最后，通过对一个典型实现进行实验验证，我们确认了这些发现的实际相关性。

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
> 掩蔽对策通常在探测模型中进行分析。通过组合满足非干扰（NI）、强非干扰（SNI）或自由SNI等安全定义的设备，实现对高掩蔽阶数的大型电路的探测安全性的证明。区域探测模型是探测模型的一种变体，其中对手的探测能力与遮蔽电路的区域数量成比例。该模型很有意义，因为它允许更好地将问题简化为更现实的噪声泄漏模型。近期，通过引入输入-输出分离（IOS）定义，提高了可合成的区域探测安全掩蔽的效率。
> 
> 在本文中，我们首先建立了非干扰框架和IOS形式主义之间的等价关系。我们还将安全定义推广到多输入设备，并系统地展示了这些概念之间的推导和区分。然后，我们研究了文献中哪些设备满足这些条件。我们为一些众所周知的任意阶设备提供了新的安全证明，也为固定阶数的特殊情况设备提供了一些自动化证明。为此，我们引入了一种新的自动形式验证算法，用于解决验证自由SNI的开放问题，这不是一个纯粹基于仿真的定义。利用安全概念之间的关系，我们将这个算法调整为进一步验证IOS。最后，我们考虑组合定理。在探测模型中，我们利用自由SNI和IOS形式主义之间的联系，推广并提高了紧致私密电路（Asiacrypt 2018）构造的效率，同时修复了原始证明中的一个缺陷。在区域探测模型中，我们放宽了IOS组合（TCHES 2021）的假设，从而节省了许多刷新设备，从而提高了效率。

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
> 我们介绍了一种新型的密码排列算法圆形函数的混合层，称为循环双列奇偶校验混合器 (CPM)，它是 Keccak-\(f\) 和 Xoodoo 混合层的推广。尽管这些混合层具有位差分分支数为4和每位的计算成本为2（位操作）加法，但我们构建的循环双 CPM 具有位差分分支数为12，代价是计算成本的增加：取决于维度，每位之间需要3到3.34个异或门。我们的循环双 CPM 以矩形数组的形式作用于状态，并可以作为在并行操作列上具有非线性步骤的S盒层的混合层。当夹在两个类似于 ShiftRow 的映射之间时，我们可以获得位分支数为12，从而确保在差分路径中每两轮有12个活跃的S盒。值得注意的是，这些映射的线性分支数（位和列的分支数）只有4。然而，我们定义了一个循环双 CPM 的转置，其具有线性分支数为12和差分分支数为4。我们提供了一种使用这种混合层的置换的具体实例，名为 Gaston。它作用于 \(5 \times 64\) 位的状态，并使用对列进行操作的 \(\chi \) 作为其非线性层。值得注意的是，Gaston 的轮函数非常轻量级，它所需的位操作数量与 NIST 轻量级标准 Ascon 相同。我们展示了 Gaston 的最佳3轮差分和线性路径的权重远高于 Ascon 的。像 Gaston 这样的置换在那些仅依赖良好差分特性来确保安全性的应用中（例如Farfalle的压缩阶段的密钥哈希），是非常有竞争力的。

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
> 高级密码协议（如零知识证明）被广泛应用于加密货币应用，例如 Zcash、Monero、Filecoin、Tezos 和 Topos。它们要求新的密码哈希函数不仅在二进制域 \(\mathbb{F}_2\) 上高效，还要在大素数特征域 \(\mathbb{F}_p\) 上高效。这个需求已经得到了更广泛的社群认可，并提出了一些新的所谓面向算术化的（AO）哈希函数，例如 MiMC-Hash、Rescue–Prime、Poseidon、Reinforced Concrete 和 Griffin。
> 
> 本文中，我们提出了 Anemoi：一个新的适用于零知识证明的置换函数族，可用于构建高效的哈希函数和压缩函数。这些算法的主要特点是：1）它们被设计为在多重证明系统中高效（如 Groth16、Plonk 等）；2）它们包含针对特定应用进行优化的专用函数（即 Merkle 树哈希和通用哈希）；3）它们具有高度竞争力的性能，例如在 R1CS 约束方面，相比 Poseidon 和 Rescue–Prime 改进了约 2 倍，在高度优化的 Poseidon 实现上减少了 21% - 35% 的 Plonk 约束，以及竞争性的本地性能，在不同域大小上运行速度比 Rescue–Prime 快 2 到 3 倍。
> 
> 在理论方面，Anemoi 进一步推动了算术化导向设计原则的研究前沿。特别是，我们发现并利用了 CCZ 等价和算术化导向之间的以往未知关系。此外，我们提出了两个新的独立组件，可以轻松地在新的设计中重复使用。一个是基于广为研究的蝴蝶结构的新 S 盒 Flystel，另一个是受到“拉丁舞”对称算法（Salsa、ChaCha 和衍生算法）启发的新操作模式 \(\textsf{Jive}_{}\)。我们的设计是保守的：它使用非常经典的替代-置换网络结构，并且我们对代数攻击的详细分析可能具有独立的研究价值。

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
> 设计对称密钥原语以用于完全同态加密（Fully Homomorphic Encryption，FHE）应用已经变得非常重要，以解决密文扩展的问题。在这样的背景下，希望能够使用解密电路的AND门深度较低的加密原语。因此，这些原语通常使用二次非线性函数，包括著名的关于\(\mathbb {F}_2^n\)的\(\chi \)函数和关于大有限域\(\mathbb {F}_{p^n}\)的幂映射。在本研究中，我们研究了一个建立在\(\mathbb {F}_{2^n}^{m}\)上的SPN密码的代数阶增长情况，其中S-box定义为幂映射\(x\mapsto x^{2^d+1}\)与\(\mathbb {F}_2\)线性化仿射多项式\(x\mapsto c_0+\sum _{i=1}^{w}c_ix^{2^{h_i}}\)的组合，其中\(c_1,\ldots ,c_w\ne 0\)。具体地，受到EUCROCRYPT 2023发表的原始系数分组技术在\(w>1\)时效率降低的事实的启发，我们开发了一种变体技术，可以高效地处理任意的\(w\)。利用这种新技术来研究代数阶的上界，我们从理论的角度回答以下问题：
> 
> 1. 当\(w=1\)时，代数阶是否可以呈指数级增长？
> 
> 2. \(w\)、\(d\)和\((h_1,\ldots ,h_w)\)对代数阶增长的影响是什么？
> 
> 基于此，我们展示了：（i）如何有效地找到\((h_1,\ldots ,h_w)\)以实现代数阶的指数增长；（ii）如何高效计算任意\((h_1,\ldots ,h_w)\)的代数阶的上界。因此，我们期望这些结果能进一步推动对这类原语的设计和分析的理解。

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
> 零知识 (ZK) 应用是现代密码学中大量的使用案例之一，由于新颖的证明系统，它们最近变得越来越流行。对于其中许多应用，加密哈希函数被用作主要构建块，并且它们经常支配着这些方法的整体性能和成本。因此，在过去几年中，为了在这些场景中降低成本，构建了几个新的哈希函数，包括 Poseidon 和 Rescue 在内。这些哈希函数通常与 AES 或 SHA-2 等更经典的设计看起来非常不同。例如，它们在原始域上本地工作，而不是二进制。同时，例如 Poseidon 和 Rescue 共享一些共同特征，例如 being SPN schemes 以及借助可逆幂映射来实例化非线性层。虽然这使设计者能够为确立其安全性提供简单且强有力的论据，但也引入了关键限制，可能影响目标应用程序的性能。
> 
> 在本文中，我们提出了 Horst 构造，其中 Feistel 方案中的加法 \((x,y)\mapsto (y+F(x), x)\) 通过乘法进行扩展，即 \((x,y)\mapsto (y\times G(x) + F(x), x)\)。
> 
> 通过仔细分析 SNARK 和 STARK 协议中的性能指标，我们展示了如何将扩展的 Horst 方案与类 Rescue 的 SPN 方案组合起来，以提供更好的效率和安全性。我们为我们的新设计 Griffin 提供了广泛的安全分析和与所有当前竞争对手的比较。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_19](https://doi.org/10.1007/978-3-031-38548-3_19)
## On the Security of Keyed Hashing Based on Public Permutations.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-3].md#on-the-security-of-keyed-hashing-based-on-public-permutations) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-3].md#on-the-security-of-keyed-hashing-based-on-public-permutations)**
### 作者
* Jonathan Fuchs, Radboud University, Nijmegen, The Netherlands
* Joan Daemen, Radboud University, Nijmegen, The Netherlands
* Yann Rotella, Université Paris-Saclay, UVSQ, CNRS, Versailles, France
### 摘要
> 双可扩展加密函数（DECK）推广了消息认证码（MAC）和流密码的概念，支持可变长度字符串作为输入并返回可变长度字符串作为输出。Farfalle 这个代表性例子是由一组公共排列和滚动函数构成，在它的压缩与膨胀层中使用。通过推广 Farfalle 的压缩层，我们证明了其普适性，以公众置换中所使用的差分概率为基准衡量。由于 Farfalle 的压缩层本质上是并行计算的，因此将其与 Pelican-MAC 所启发的串行压缩函数的泛化进行比较。同样的公共排列可能会导致不同的普适性，这取决于是否并行压缩。并行构建通常比串行构建表现得更好，有时性能甚至相差很大。我们使用 Xoodoo[3] 来演示这种效果，它是 Xoofff DECK 函数中使用的公共置换的轮次缩减变体。

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
> 两个n位伪随机置换的和被认为表现出与n位安全伪随机函数类似的特性。最近的一系列研究探讨了两个公共n位置换的安全性及其不可区分性。Mandal等人在INDOCRYPT 2010中证明了2n/3位安全性，Mennink和Preneel在ACNS 2015中指出了其分析中的一个非平凡缺陷，并重新证明了(2n/3-log_2(n))位安全性。Bhattacharya和Nandi在EUROCRYPT 2018中最终将结果改进到了n位安全性。最近，CRYPTO 2022的Gunsing已经注意到，在这一系列研究中使用的证明技巧仅适用于顺序不可区分性。我们对这一系列研究进行了详细的重新审视，并观察到n位安全性的最强界限存在另外两个严重问题，第一个实际上与Mandal等人的工作中存在的非平凡缺陷相同，而第二个则舍弃了由可区分器影响的随机性中的偏差。更具体地说，我们介绍了两种攻击，展示了不同方法的有限潜力。我们(i)表明了舍弃偏差的后一个问题在最多2^(3n/4)个查询中成立，(ii)对他们的模拟器进行了一个区分性攻击，在2^(5n/6)个查询中实施。好处是，我们重新验证了Mennink和Preneel的结果，并展示了公共置换之和具有(2n/3-log_2(n))位常规不可区分性安全性。

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
> 在包括TLS 1.3、KEMTLS、MLS和Noise在内的互联网安全协议中，假设\(\textsf{HMAC}\)是一个双重伪随机函数（dual-PRF），意味着\(\textsf{HMAC}\)不仅在传统情况下通过第一个输入来进行密钥化（keyed），而且也可以在交换（unconventionally）并通过其第二个（消息）输入来进行密钥化。我们首次对\(\textsf{HMAC}\)的双重伪随机函数（dual-PRF）假设进行了深入分析。对于交换情况，我们注意到一般情况下安全性无法保持，但完全刻画了何时能够保持安全性；我们证明了只有当密钥限制在满足我们给出的称为可行性的条件的集合上时，\(\textsf{HMAC}\)才是交换-PRF安全的，并且这个条件在实际应用中是成立的。我们通过证明和攻击来展示了这个充分性和必要性。对于传统的伪随机函数情况，我们填补了文献中的一个空白，证明了\(\textsf{HMAC}\)在任意长度的密钥下的PRF安全性。我们的证明在标准模型中进行，只对哈希函数底层的压缩函数做出假设，并在多用户设置中给出了良好的界限。通过实现一种新的变长密钥长度PRF安全性的概念，我们加强了积极的结果，即使不同用户使用不同长度的密钥也能够保证安全性，这在实践中经常发生。

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
> 我们继续研究最近由Liu，Tessaro和Vaikuntanathan（CRYPTO 2021）进行的置换-替代网络（SPN）t-wise独立性。我们的关键技术结果表明，当S盒随机且独立地选取并保密时，输入长度为\(n = b \cdot k\)的r轮SPN在\(r = O(\min \{k, \log t\})\)轮内与t-wise独立性相差\(2^{-\varTheta (n)}\)接近，其中t几乎等于\(2^{b/2}\)。这里，b是S盒的输入长度，并且我们假设底层混淆实现最大分支数。我们还分析了AES参数的特殊情况（使用随机S盒），并且证明在7轮内与成对独立性相差\(2^{-128}\)接近。我们的结果的核心是对我们称为布局图的随机步行分析，布局图是捕捉多个SPN评估之间的相等和不等式约束的组合抽象。
> 
> 我们使用我们的技术结果来展示具有实际分组密码参数和小输入S盒的SPN的具体安全界限。（这与关于SPN理想模型分析的大量研究成果形成对比。）例如，对于被审查的AES分组密码，即删除了大部分混淆层的AES，我们证明只需192轮即可达到与成对独立性相差\(2^{-128}\)接近。而之前关于AES的这样的结果（Liu、Tessaro和Vaikuntanathan，CRYPTO 2021）需要超过9000轮。

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
> 本文构造了第一个经过证明安全的同构基础的（部分）盲签名方案。虽然从高层次上看，该方案类似于Schnorr盲签名，但由于同构不能提供如此丰富的代数结构，因此我们的工作并非直接来自那种构造。具体而言，我们的协议不适合Hauck，Kiltz和Loss（EUROCYRPT’19）引入的线性识别协议抽象，该抽象用于基于经典群和格子等模块通用地构造类似Schnorr盲签名。因此，我们的方案似乎不容易受到最近利用底层数学工具的线性性的ROS攻击的影响。
> 
> 更详细地说，我们的盲签名在本质上利用椭圆曲线的二次扭曲，使同构具有比抽象群作用更严格的结构（但仍然比模块更严格）。基本方案具有公钥大小128 B和签名大小8 KB，基于CSIDH-512参数集，这是所有可证明安全的后量子盲签名中最小的。依赖于群作用逆问题的新环变体（rGAIP），我们可以将签名大小减半到4 KB，同时将公钥大小增加到512 B。我们提供了关于rGAIP的初步密码分析，并表明对于某些参数设置，它基本上可以与标准的GAIP一样安全。最后，我们展示了一种将我们的盲签名转换为部分盲签名的新方法，在这种方法中，我们偏离了以前的方法，因为它们要求哈希到公钥集，

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
> 在本文中，我们研究了具有循环域的非平凡自配对，这些自配对与由虚二次序数\(\mathcal {O}\)定向的椭圆曲线之间的同构相容。我们证明了这种自配对的顺序m必须满足\(m \mid \varDelta _\mathcal {O}\)（如果\(4 \mid \varDelta _\mathcal {O}\)，那么甚至是\(2m \mid \varDelta _\mathcal {O}\)。如果\(8 \mid \varDelta _\mathcal {O}\)，则是\(4m \mid \varDelta _\mathcal {O}\)），并且不是域特征的倍数。反过来，对于满足这些必要条件的每个m，我们基于广义Weil和Tate配对构造了一个非平凡循环自配对族，其顺序为m，并与定向同构相容。
> 
> 作为应用，我们确定了假设已知秘密同构度数的情况下，椭圆曲线上的类群作用的弱实例。更详细地说，我们展示了如果对于某些质数幂m，\(m^2 \mid \varDelta _\mathcal {O}\)，则给定两个原始\(\mathcal {O}\)-定向椭圆曲线\((E,\iota )\)和\((E',\iota ') = [\mathfrak {a}](E,\iota )\)，它们通过未知可逆理想\(\mathfrak {a}\subseteq \mathcal {O}\)连接，在假设已知\(\mathfrak {a}\)的范数小于\(m^2\)的情况下，我们可以基本上以离散对数计算的代价恢复\(\mathfrak {a}\)，其计算组的顺序为\(m^2\)。我们给出了具体的示例，涉及有限域上的普通椭圆曲线，其中这变成了多项式时间攻击。
> 
> 最后，我们展示了这些自配对简化了关于定向椭圆曲线上类群操作的决策性Diffie-Hellman问题的已知结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38548-3_25](https://doi.org/10.1007/978-3-031-38548-3_25)
