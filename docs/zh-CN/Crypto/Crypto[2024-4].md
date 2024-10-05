# Crypto[2024-4]
## Generic MitM Attack Frameworks on Sponge Constructions.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#generic-mitm-attack-frameworks-on-sponge-constructions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#generic-mitm-attack-frameworks-on-sponge-constructions)**
### 作者
* Xiaoyang Dong, Institute for Network Sciences and Cyberspace, BNRist, Tsinghua University, Beijing, People’s Republic of China
* Xiaoyang Dong, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, People’s Republic of China
* Xiaoyang Dong, Zhongguancun Laboratory, Beijing, People’s Republic of China
* Boxin Zhao, Zhongguancun Laboratory, Beijing, People’s Republic of China
* Lingyue Qin, Zhongguancun Laboratory, Beijing, People’s Republic of China
* Xiaoyun Wang, Zhongguancun Laboratory, Beijing, People’s Republic of China
* Lingyue Qin, BNRist, Tsinghua University, Beijing, People’s Republic of China
* Qingliang Hou, School of Cyber Science and Technology, Shandong University, Qingdao, People’s Republic of China
* Xiaoyun Wang, School of Cyber Science and Technology, Shandong University, Qingdao, People’s Republic of China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, People’s Republic of China
* Qingliang Hou, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, People’s Republic of China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, People’s Republic of China
* Shun Zhang, PLA Strategic Support Force Information Engineering University, Zhengzhou, People’s Republic of China
* Xiaoyang Dong, Shandong Institute of Blockchain, Jinan, People’s Republic of China
### 摘要
> 本文提出了通用的中间人（MitM）攻击框架，用于基于（广义）海绵结构的哈希函数的预映像和碰撞攻击。作为第一个贡献，我们的MitM预映像攻击框架涵盖了广泛的基于海绵的哈希函数，特别是那些在预映像安全级别较低的情况下输出大小较小。这些哈希函数已经被广泛标准化（例如，Ascon-Hash，PHOTON等），但很少研究预映像攻击。即使是最近的Qin等人（EUROCRYPT 2023）基于海绵结构的MitM攻击框架也不能攻击这些哈希函数。作为第二个贡献，我们的MitM碰撞攻击框架展示了一种不同的工具，用于海绵结构上的碰撞密码分析，而以前的海绵结构上的碰撞攻击主要基于差分攻击。本文中大多数结果均为第三方密码分析结果。如果先前存在密码分析，则我们的新结果显着改善了先前的结果，例如将Ascon-Hash上先前的2轮碰撞攻击改进为当前的4轮攻击，将先前的3.5轮量子预映像攻击SPHINCS+ -Haraka改进为我们的4轮经典预映像攻击。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_1](https://doi.org/10.1007/978-3-031-68385-5_1)
## Revisiting Differential-Linear Attacks via a Boomerang Perspective with Application to AES, Ascon, CLEFIA, SKINNY, PRESENT, KNOT, TWINE, WARP, LBlock, Simeck, and SERPENT.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#revisiting-differential-linear-attacks-via-a-boomerang-perspective-with-application-to-aes-ascon-clefia-skinny-present-knot-twine-warp-lblock-simeck-and-serpent) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#revisiting-differential-linear-attacks-via-a-boomerang-perspective-with-application-to-aes-ascon-clefia-skinny-present-knot-twine-warp-lblock-simeck-and-serpent)**
### 作者
* Hosein Hadipour, Graz University of Technology, Graz, Austria
* Maria Eichlseder, Graz University of Technology, Graz, Austria
* Patrick Derbez, Univ Rennes, Inria, CNRS, IRISA, Rennes, France
### 摘要
> 1994年，Langford和Hellman提出差分线性（DL）密码分析，将块密码E分解为两部分，E_u和E_ℓ，使得E_u呈高概率差分路径，而E_ℓ则具有高相关性线性路径。组合这些路径形成E的区分器，假设E_u和E_ℓ之间独立。DL区分器的两部分之间的依赖关系一直未得到解决，直到2019年EUROCRYPT，Bar-On等人介绍了DLCT框架，解决了该问题，达到一个S盒层。然而，将DLCT框架扩展到形式化两个部分之间的依赖关系以进行多轮仍然是一个未解决的问题。在本文中，我们从回波分析的角度首先解决了这个问题。通过研究DLCT、DDT和LAT之间的关系，我们引入了一组新的表格，便于在多轮中制定DL区分器的两个部分之间的依赖关系。然后，我们引入了一个高度通用且易于使用的自动工具，用于探索DL区分器，受回波区分器自动工具的启发。这个工具考虑了跨多轮差分和线性路径之间的依赖关系。我们将工具应用于各种对称密钥原语，在所有应用程序中，我们要么呈现第一个DL区分器，要么增强最佳已知区分器。我们在Ascon、AES、SERPENT、PRESENT、SKINNY、TWINE、CLEFIA、WARP、LBlock、Simeck和KNOT等方面取得了成功的结果。此外，我们证明，在某些情况下，DL区分器显着优于回波区分器。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_2](https://doi.org/10.1007/978-3-031-68385-5_2)
## Speeding Up Preimage and Key-Recovery Attacks with Highly Biased Differential-Linear Approximations.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#speeding-up-preimage-and-key-recovery-attacks-with-highly-biased-differential-linear-approximations) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#speeding-up-preimage-and-key-recovery-attacks-with-highly-biased-differential-linear-approximations)**
### 作者
* Zhongfeng Niu, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Zhiyu Zhang, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Kai Hu, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Siwei Sun, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Kai Hu, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Meiqin Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Meiqin Wang, Quan Cheng Shandong Laboratory, Jinan, China
* Kai Hu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
### 摘要
> 我们提出了一个框架，可以加速基于高度偏置差分线性区分器的候选单向函数预像攻击的搜索。该框架自然适用于哈希函数的预像攻击。进一步，该框架的一种变体应用于密钥函数可以加速密钥恢复攻击。有趣的是，我们的技术能够在单密钥模型下利用相关密钥差分线性区分器，而无需使用未知但相关密钥进行目标加密预言机查询。这本质上类似于我们如何基于DES的著名补码特性加速密钥搜索，这要求设计者在不进行彻底的密码分析的相关键模型中构建旨在在单键设置中安全的原语时要谨慎。我们将该方法应用于基于海绵结构的哈希函数Ascon-HASH、XOFs XOEsch/Ascon-XOF和AEAD Schwaemm等。加速的预像或密钥恢复攻击被获得。请注意，本研究中使用的所有差分线性区分器都是高度偏置的，因此可以进行实验验证。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_3](https://doi.org/10.1007/978-3-031-68385-5_3)
## Improving Generic Attacks Using Exceptional Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#improving-generic-attacks-using-exceptional-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#improving-generic-attacks-using-exceptional-functions)**
### 作者
* Xavier Bonnetain, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
* Rachelle Heim Boissier, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, Versailles, France
* Gaëtan Leurent, Inria, Paris, France
* André Schrottenloher, Univ Rennes, Inria, CNRS, IRISA, Rennes, France
### 摘要
> 在过去10年中，曾对对称结构进行多次攻击，利用随机函数的统计特性。最初，这些攻击针对迭代哈希结构及其组合器，采用了一系列基于内部碰撞和迭代随机函数平均行为的方法。最近，Gilbert等人（EUROCRYPT 2023）提出了一种基于特殊随机函数的所谓双工模式身份验证加密模式的伪造攻击，即图形具有具有异常小循环的大组件的函数。
> 
> 本文扩展了这种函数在通用密码分析中的使用，并提出了几种新的攻击。首先，我们将Gilbert等人的攻击从\(\mathcal {O}(2^{3c/4})\)提高到\(\mathcal {O}(2^{2c/3})\)，其中c为容量。这种新攻击使用具有异常行为的嵌套函数对，其中第二个函数在第一个函数的循环上定义。接下来，我们介绍了几种新的通用攻击哈希组合器的攻击方法，尤其是使用小循环来改善XOR组合器、Zipper Hash和Hash-Twice的最佳现有攻击的复杂性。
> 
> 最后，我们提出了第一个针对Hash-Twice的量子第二前像攻击，达到量子复杂度\(\mathcal {O}(2^{3n/7})\)。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_4](https://doi.org/10.1007/978-3-031-68385-5_4)
## The Algebraic FreeLunch: Efficient Gröbner Basis Attacks Against Arithmetization-Oriented Primitives.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#the-algebraic-freelunch-efficient-gr-bner-basis-attacks-against-arithmetization-oriented-primitives) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#the-algebraic-freelunch-efficient-gr-bner-basis-attacks-against-arithmetization-oriented-primitives)**
### 作者
* Augustin Bariant, ANSSI, Paris, France
* Augustin Bariant, Inria, Paris, France
* Aurélien Boeuf, Inria, Paris, France
* Axel Lemoine, Inria, Paris, France
* Léo Perrin, Inria, Paris, France
* Irati Manterola Ayala, Simula UiB, Bergen, Norway
* Morten Øygarden, Simula UiB, Bergen, Norway
* Håvard Raddum, Simula UiB, Bergen, Norway
* Axel Lemoine, DGA, Paris, France
### 摘要
> 在本文中，我们提出了一种新类型的代数攻击，适用于最近许多以算术化为导向的排列族，例如Griffin、Anemoi、ArionHash和XHash8中使用的那些，其安全性取决于受限输入受限输出（CICO）问题的难度。我们将这种攻击称为免费午餐方法：选择单项式排序使得自然多项式系统编码的CICO问题已经是一个格罗布纳基。此外，我们提出了一种新的专用解决方案算法，用于处理FreeLunch系统的复杂度低于当前最先进的解决方案算法。
> 
> 我们展示了FreeLunch方法挑战了Anemoi、Arion和Griffin的完整轮次实例的安全性，并通过实验证实了这些理论结果。特别是，结合FreeLunch攻击与一种新技术来绕过Griffin的3轮，我们在一台AMD EPYC 7352（2.3 GHz）的核心上不到四个小时内恢复了Griffin的10轮中的7轮的CICO解决方案。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_5](https://doi.org/10.1007/978-3-031-68385-5_5)
## New Approaches for Estimating the Bias of Differential-Linear Distinguishers.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#new-approaches-for-estimating-the-bias-of-differential-linear-distinguishers) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#new-approaches-for-estimating-the-bias-of-differential-linear-distinguishers)**
### 作者
* Ting Peng, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, CAS, Beijing, China
* Wentao Zhang, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, CAS, Beijing, China
* Jingsui Weng, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, CAS, Beijing, China
* Tianyou Ding, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, CAS, Beijing, China
* Ting Peng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Wentao Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Jingsui Weng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Tianyou Ding, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 差分线性密码分析是由Langford和Hellman在1994年引入的，并自那时以来被广泛研究。2019年，Bar-On等人提出了差分线性连接表(DLCT)，它连接了差分部分和线性部分，因此被攻击的密码被分成3个子密码: 差分部分、DLCT部分和线性部分。
> 
> 本文首先提出了一个准确的数学公式，建立了差分线性与截断差分密码分析之间的关系。利用该公式，差分线性区分器的偏差估计可以转换为一系列截断差分的概率计算。然后，我们提出了一个新颖而自然的概念，即TDT，它可以用来加速截断差分概率的计算。基于公式和TDT，我们提出了两种用于估计差分线性区分器偏差的新方法。我们通过将它们应用于5个对称密钥原语:Ascon、Serpent、KNOT、AES和CLEFIA来证明我们新方法的准确性和效率。对于Ascon和Serpent，我们更新了已知最佳的差分线性区分器。对于KNOT、AES和CLEFIA，我们首次给出了不同轮数的理论差分线性偏差。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_6](https://doi.org/10.1007/978-3-031-68385-5_6)
## Time-Memory Trade-Offs Sound the Death Knell for GPRS and GSM.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#time-memory-trade-offs-sound-the-death-knell-for-gprs-and-gsm) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#time-memory-trade-offs-sound-the-death-knell-for-gprs-and-gsm)**
### 作者
* Gildas Avoine, INSA Rennes, Univ Rennes, IRISA, CNRS, Rennes, France
* Tristan Claverie, INSA Rennes, Univ Rennes, IRISA, CNRS, Rennes, France
* Xavier Carpent, University of Nottingham, Nottingham, UK
* Tristan Claverie, ANSSI, Paris, France
* Christophe Devine, ANSSI, Paris, France
* Diane Leblanc-Albarel, KU Leuven, Leuven, Belgium
### 摘要
> 本文介绍了针对GSM（A5/3）和GPRS（GEA-3）的实践基于TMTO的攻击，这两种技术都是2G移动网络中使用的。尽管这些网络是在80年代设计的，但它们在今天仍然相当活跃，特别是对于嵌入式系统。虽然针对2G网络的主动攻击利用伪基站已经有一段时间了，但本文介绍的攻击依赖于被动攻击者。我们在本文中解释了如何在GPRS和GSM通信中找到材料来执行TMTO攻击。我们使用实际网络中操作的现成设备进行了验证实验。我们提供了攻击的成功概率以及它在几种现实场景中的性能。我们通过AVX2指令优化了KASUMI的实施，并设计了一个特定的TMTO实施来解决SSD访问延迟的问题。作为一个激励性的例子，一个被动窃听GSM通信的攻击者可以在14分钟内以0.43的概率解密任何2小时的通话。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_7](https://doi.org/10.1007/978-3-031-68385-5_7)
## Probabilistic Linearization: Internal Differential Collisions in up to 6 Rounds of SHA-3.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#probabilistic-linearization-internal-differential-collisions-in-up-to-6-rounds-of-sha-3) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#probabilistic-linearization-internal-differential-collisions-in-up-to-6-rounds-of-sha-3)**
### 作者
* Zhongyi Zhang, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Chengan Hou, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Meicheng Liu, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Zhongyi Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Chengan Hou, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Meicheng Liu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
### 摘要
> \(\texttt {SHA}\text {-} \texttt {3}\) 标准包括四种密码哈希函数，分别为 SHA3-224、SHA3-256、SHA3-384 和 SHA3-512，以及两种可扩展输出函数（XOFs），称为 SHAKE128 和 \(\texttt {SHAKE256}\)。本文研究了 \(\texttt {SHA}\text {-} \texttt {3}\) 实例的碰撞抗性。通过分析非线性层，引入了最大差异密度子空间的概念，并通过概率线性化开发了新的目标内部差异算法。我们还利用新策略优化内部差异特征。此外，通过分析摘要的碰撞概率而非输入到最后一个非线性层的中间状态，我们确定了内部差异中碰撞子集的预期大小。这些技术增强了对内部差异的分析，导致对 \(\texttt {SHA}\text {-} \texttt {3}\) 实例的四轮降低变种的最佳碰撞攻击。特别地，对于 SHA3-384，受攻击轮数从 4 增加到 5，对于 \(\texttt {SHAKE256}\)，受攻击轮数从 5 增加到 6。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_8](https://doi.org/10.1007/978-3-031-68385-5_8)
## Feistel-Like Structures Revisited: Classification and Cryptanalysis.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#feistel-like-structures-revisited-classification-and-cryptanalysis) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#feistel-like-structures-revisited-classification-and-cryptanalysis)**
### 作者
* Bing Sun, College of Science, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Guoqiang Liu, College of Science, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Longjiang Qu, College of Science, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Zejun Xiang, School of Cyber Science and Technology, Hubei University, Wuhan, 430062, Hubei, People’s Republic of China
* Bing Sun, Center for Cryptologic Research, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Guoqiang Liu, Center for Cryptologic Research, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Longjiang Qu, Center for Cryptologic Research, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Zhengyi Dai, College of Computers, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Shaojing Fu, College of Computers, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Xuan Shen, College of Information and Communication, National University of Defense Technology, Wuhan, 430010, Hubei, People’s Republic of China
### 摘要
> 2023年，Liu等人总结了使用单一轮函数的费斯特尔类结构，并提出了这些结构的统一形式，称为统一结构。本文重点研究了一种名为“规则统一结构”的特定统一结构的分类和密码分析，该结构涵盖了大多数已知情况。主要结果如下：
> 
> 首先，我们给出了不同结构之间的仿射等价定义，提出了两个规则结构互为仿射等价的条件，并给出了一个规则统一结构的两个标准形式。令人惊讶的是，我们发现，一个目标密集型广义费斯特尔密码总是与具有相同轮函数源密集型广义费斯特尔密码仿射等价，这表明这两个结构几乎具有相同的密码学属性。
> 
> 其次，我们给出自等价结构的定义，其对偶结构与结构本身是仿射等价的。我们证明了有大量的统一结构（如SM4和Mars结构）属于自等价结构。对于这些结构，不存在差分与零相关线性的映射，这说明自等价结构的最长积分至少覆盖最长零相关线性/差分的轮数。
> 
> 最后，我们给出了一种结构的完整扩散轮的定义，并利用ε-δ技术计算了这个值，这可以进一步用于针对差分和零相关线性密码分析的统一结构的可证明安全性评估。例如，我们证明了d-分支SM4类结构的最长差分和零相关线性覆盖正好3d-1轮。
> 
> 我们的研究结果可以为费斯特尔类密码的设计和密码分析提供新的指导。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_9](https://doi.org/10.1007/978-3-031-68385-5_9)
## Succinctly-Committing Authenticated Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#succinctly-committing-authenticated-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#succinctly-committing-authenticated-encryption)**
### 作者
* Mihir Bellare, Department of Computer Science and Engineering, University of California San Diego, La Jolla, USA
* Viet Tung Hoang, Department of Computer Science, Florida State University, Tallahassee, USA
### 摘要
> 近期的攻击和应用程序使对称加密方案除提供传统的真实性和隐私保护外，还需具有承诺性质。为此，提出了许多具有承诺认证加密方案。然而，所有已知的方案要提供s位承诺性安全，就需要付出2s比特的扩展代价——这是密文长度减去明文长度——这导致带宽或存储成本增加。（通常我们希望s=128，这导致了256比特的扩展。）然而，由于生日攻击，这被认为是不可避免的。本文展示了如何规避这一限制。我们提出了承诺认证加密方案，能够提供s位承诺性安全，但只在消息足够长（即超过s位）的情况下才扩展s位。我们将这样的方案称为简洁方案。我们通过名为“SC”的通用短密文转换来实现这一点：给定具有2s位扩展的认证加密方案，“SC”返回具有s位扩展的认证加密方案，同时保留承诺性安全性。SC非常高效，基于AES的实例只需要两个AES调用的开销。作为一种工具，“SC”使用我们设计的冲突防范可逆伪随机函数HtM，并且其分析具有技术难度。为了向基础方案添加“SC”假设的承诺性安全性，我们还提供了一种变换CTY，它改进了Chan和Rogaway的CTX。我们的结果适用于包括传统AEAD和AE2（也称为nonce-hiding AE）在内的认证加密框架，并且特别是对这些设置获得了简明承诺认证加密方案。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_10](https://doi.org/10.1007/978-3-031-68385-5_10)
## HAWKEYE - Recovering Symmetric Cryptography From Hardware Circuits.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#hawkeye-recovering-symmetric-cryptography-from-hardware-circuits) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#hawkeye-recovering-symmetric-cryptography-from-hardware-circuits)**
### 作者
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* Lukas Stennes, Ruhr University Bochum, Bochum, Germany
* Christof Paar, Max Planck Institute for Security and Privacy (MPI-SP), Bochum, Germany
* Julian Speith, Max Planck Institute for Security and Privacy (MPI-SP), Bochum, Germany
### 摘要
> 我们提出了第一个全面的方法来检测和分析硬件门级描述中的对称加密原语。为了捕获ASIC和FPGA，我们将硬件建模为一个有向图，其中门成为节点，导线成为边。对于现代芯片，这些图很容易由数十万个节点组成。更抽象地说，我们在描述整个芯片的海洋门中找到了与加密原语对应的子图。由于我们特别感兴趣的是未知的加密算法，我们不能依赖于搜索已知部分，例如S盒或轮常数。相反，我们正在寻找执行高度本地计算的芯片部件。我们的工作的一个主要结果是，许多对称算法可以通过我们的方法可靠地定位，并有时甚至可以识别，我们称之为HAWKEYE。我们的发现得到了广泛的实验结果的验证，这些实验涉及SPN、ARX、Feistel和基于LFSR的密码在FPGA和ASIC上的实现。我们通过在OpenTitan的Earl Grey芯片上评估HAWKEYE，展示了HAWKEYE的实际适用性，这是一个开源的安全微控制器设计，其中包含424,341个门的网表。HAWKEYE在44.3秒内定位了网表中的所有主要加密原语。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_11](https://doi.org/10.1007/978-3-031-68385-5_11)
## Tight Characterizations for Preprocessing Against Cryptographic Salting.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#tight-characterizations-for-preprocessing-against-cryptographic-salting) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#tight-characterizations-for-preprocessing-against-cryptographic-salting)**
### 作者
* Fangqi Dong, IIIS, Tsinghua University, Beijing, China
* Qipeng Liu, University of California San Diego, San Diego, CA, USA
* Kewen Wu, University of California, Berkeley, Berkeley, CA, USA
### 摘要
> 密码学通常考虑现实世界中最强而又可行的攻击。预处理（也称为非一致性攻击）在理论和实践中都扮演着重要角色：高效的在线攻击者可以利用经过耗时处理的建议。撒盐是一种启发式策略，通过向密码基元提供少量随机性来对抗处理攻击。我们提出了对加密撒盐预处理的普遍而紧密的特征描述，上限匹配最直观的攻击的优势。我们的结果在定量上加强了Coretti，Dodis，Guo和Steinberger（EUROCRYPT'18）的先前工作。我们的证明利用了撒盐游戏的非一致性安全性和无记忆算法的直接乘积定理之间的新颖联系。
> 
> 对于量子对手，我们为属性查找游戏提供类似的特征描述，解决了Chung，Guo，Liu和Qian（FOCS'20）提出的关于加密撒盐冲突抗性哈希的量子非一致性安全的开放性问题。我们的证明扩展了Zhandry（CRYPTO'19）的压缩预言机框架，证明了平均复杂度下属性查找游戏的量子强直接乘积定理。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_12](https://doi.org/10.1007/978-3-031-68385-5_12)
## Algebraic Structure of the Iterates of χ.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#algebraic-structure-of-the-iterates-of) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#algebraic-structure-of-the-iterates-of)**
### 作者
* Björn Kriepke, Institute of Mathematics, University of Rostock, Rostock, Germany
* Gohar Kyureghyan, Institute of Mathematics, University of Rostock, Rostock, Germany
### 摘要
> 我们考虑给定奇数n的映射\(\chi : \mathbb{F}_2^n\rightarrow \mathbb {F}_2^n\)，其中\(y=\chi (x)\)，且\(y_i=x_i+x_{i+2}(1+x_{i+1})\)，其中的索引按n取模。我们提出一个广义的\(\chi \)-映射，它是\(\chi \)映射的一个推广。我们证明这些映射构成一个阿贝尔群，该群同构于\(\mathbb {F}_2[X]/(X^{(n+1)/2})\)中的单位群。利用这种同构，我们可以轻松地得到\(\chi \)的迭代的封闭形式表达式，并解释它们的性质。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_13](https://doi.org/10.1007/978-3-031-68385-5_13)
## The Committing Security of MACs with Applications to Generic Composition.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#the-committing-security-of-macs-with-applications-to-generic-composition) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#the-committing-security-of-macs-with-applications-to-generic-composition)**
### 作者
* Yaobin Shen, School of Informatics, Xiamen University, Xiamen, China
* Ritam Bhaumik, EPFL, Lausanne, Switzerland
* Bishwajit Chakraborty, Nanyang Technological University, Singapore, Singapore
* Wonseok Choi, Purdue University, West Lafayette, IN, USA
* Avijit Dutta, Institute for Advancing Intelligence, TCG CREST, Kolkata, India
* Jérôme Govinden, Technische Universität Darmstadt, Darmstadt, Germany
* Avijit Dutta, Academy of Scientific and Innovative Research (AcSIR), Ghaziabad, 201002, India
### 摘要
> 消息认证码（MAC）是通过多种标准如HMAC、CMAC、GMAC、LightMAC等多种形式广泛应用的原语。其多用途使得在需要消息认证和完整性检查、认证协议、鉴别加密方案或伪随机或密钥派生函数的应用中成为必不可少的构建块。它在这些不同的设置中的使用使它容易受到广泛的攻击场景的影响。最新的攻击趋势利用AEAD方案中缺乏承诺或上下文发现安全，这些攻击主要是由于基础MAC部分的弱点所致。然而，这些新的攻击模型很少被用于MAC本身的分析。本文提供了对MAC承诺和上下文发现安全性的全面处理。我们揭示MAC的承诺和上下文发现安全性通过突出现实世界的脆弱场景来表现出来。我们正式化了MAC所需的安全概念，并分析了这些概念的标准化MAC的安全性。此外，作为一个建设性的应用，我们分析了通用AEAD组合，并提供了构建承诺和上下文发现安全的AEAD的简单有效方法。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_14](https://doi.org/10.1007/978-3-031-68385-5_14)
## Information-Theoretic Security with Asymmetries.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#information-theoretic-security-with-asymmetries) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#information-theoretic-security-with-asymmetries)**
### 作者
* Tim Beyne, COSIC, KU Leuven, Leuven, Belgium
* Yu Long Chen, COSIC, KU Leuven, Leuven, Belgium
### 摘要
> 在本文中，我们研究了根据对称密钥密码学中对不可区分性安全概念的敌手的误报率和漏报率，对任何给定成本函数进行下界估计的问题。我们将成本模型作为输入，使得这变成一个纯粹的信息理论问题。
> 
> 我们提出功率边界作为对不可区分性背景下的非对称成本函数的优势边界的易于使用的替代方法。我们展示了标准的证明技术，如混合参数和H-系数方法可以推广到功率模型，并将这些技术应用于PRP-PRF切换引理、Even-Mansour（EM）构造和置换求和（SoP）构造。
> 
> 作为最终而可能是最有用的贡献，我们提供了两种方法将单用户功率边界转换为多用户功率边界，并研究它们与Hoang和Tessaro（Crypto 2016）的点间接近方法之间的关系。这些方法被应用于获得EM和SoP的紧密多用户功率边界。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_15](https://doi.org/10.1007/978-3-031-68385-5_15)
## Generic MitM Attack Frameworks on Sponge Constructions.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#generic-mitm-attack-frameworks-on-sponge-constructions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#generic-mitm-attack-frameworks-on-sponge-constructions)**
### 作者
* Xiaoyang Dong, Institute for Network Sciences and Cyberspace, BNRist, Tsinghua University, Beijing, People’s Republic of China
* Xiaoyang Dong, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, People’s Republic of China
* Xiaoyang Dong, Zhongguancun Laboratory, Beijing, People’s Republic of China
* Boxin Zhao, Zhongguancun Laboratory, Beijing, People’s Republic of China
* Lingyue Qin, Zhongguancun Laboratory, Beijing, People’s Republic of China
* Xiaoyun Wang, Zhongguancun Laboratory, Beijing, People’s Republic of China
* Lingyue Qin, BNRist, Tsinghua University, Beijing, People’s Republic of China
* Qingliang Hou, School of Cyber Science and Technology, Shandong University, Qingdao, People’s Republic of China
* Xiaoyun Wang, School of Cyber Science and Technology, Shandong University, Qingdao, People’s Republic of China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, People’s Republic of China
* Qingliang Hou, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, People’s Republic of China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, People’s Republic of China
* Shun Zhang, PLA Strategic Support Force Information Engineering University, Zhengzhou, People’s Republic of China
* Xiaoyang Dong, Shandong Institute of Blockchain, Jinan, People’s Republic of China
### 摘要
> 本文提出了通用的中间人（MitM）攻击框架，用于基于（广义）海绵结构的哈希函数的预映像和碰撞攻击。作为第一个贡献，我们的MitM预映像攻击框架涵盖了广泛的基于海绵的哈希函数，特别是那些在预映像安全级别较低的情况下输出大小较小。这些哈希函数已经被广泛标准化（例如，Ascon-Hash，PHOTON等），但很少研究预映像攻击。即使是最近的Qin等人（EUROCRYPT 2023）基于海绵结构的MitM攻击框架也不能攻击这些哈希函数。作为第二个贡献，我们的MitM碰撞攻击框架展示了一种不同的工具，用于海绵结构上的碰撞密码分析，而以前的海绵结构上的碰撞攻击主要基于差分攻击。本文中大多数结果均为第三方密码分析结果。如果先前存在密码分析，则我们的新结果显着改善了先前的结果，例如将Ascon-Hash上先前的2轮碰撞攻击改进为当前的4轮攻击，将先前的3.5轮量子预映像攻击SPHINCS+ -Haraka改进为我们的4轮经典预映像攻击。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_1](https://doi.org/10.1007/978-3-031-68385-5_1)
## Revisiting Differential-Linear Attacks via a Boomerang Perspective with Application to AES, Ascon, CLEFIA, SKINNY, PRESENT, KNOT, TWINE, WARP, LBlock, Simeck, and SERPENT.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#revisiting-differential-linear-attacks-via-a-boomerang-perspective-with-application-to-aes-ascon-clefia-skinny-present-knot-twine-warp-lblock-simeck-and-serpent) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#revisiting-differential-linear-attacks-via-a-boomerang-perspective-with-application-to-aes-ascon-clefia-skinny-present-knot-twine-warp-lblock-simeck-and-serpent)**
### 作者
* Hosein Hadipour, Graz University of Technology, Graz, Austria
* Maria Eichlseder, Graz University of Technology, Graz, Austria
* Patrick Derbez, Univ Rennes, Inria, CNRS, IRISA, Rennes, France
### 摘要
> 1994年，Langford和Hellman提出差分线性（DL）密码分析，将块密码E分解为两部分，E_u和E_ℓ，使得E_u呈高概率差分路径，而E_ℓ则具有高相关性线性路径。组合这些路径形成E的区分器，假设E_u和E_ℓ之间独立。DL区分器的两部分之间的依赖关系一直未得到解决，直到2019年EUROCRYPT，Bar-On等人介绍了DLCT框架，解决了该问题，达到一个S盒层。然而，将DLCT框架扩展到形式化两个部分之间的依赖关系以进行多轮仍然是一个未解决的问题。在本文中，我们从回波分析的角度首先解决了这个问题。通过研究DLCT、DDT和LAT之间的关系，我们引入了一组新的表格，便于在多轮中制定DL区分器的两个部分之间的依赖关系。然后，我们引入了一个高度通用且易于使用的自动工具，用于探索DL区分器，受回波区分器自动工具的启发。这个工具考虑了跨多轮差分和线性路径之间的依赖关系。我们将工具应用于各种对称密钥原语，在所有应用程序中，我们要么呈现第一个DL区分器，要么增强最佳已知区分器。我们在Ascon、AES、SERPENT、PRESENT、SKINNY、TWINE、CLEFIA、WARP、LBlock、Simeck和KNOT等方面取得了成功的结果。此外，我们证明，在某些情况下，DL区分器显着优于回波区分器。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_2](https://doi.org/10.1007/978-3-031-68385-5_2)
## Speeding Up Preimage and Key-Recovery Attacks with Highly Biased Differential-Linear Approximations.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#speeding-up-preimage-and-key-recovery-attacks-with-highly-biased-differential-linear-approximations) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#speeding-up-preimage-and-key-recovery-attacks-with-highly-biased-differential-linear-approximations)**
### 作者
* Zhongfeng Niu, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Zhiyu Zhang, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Kai Hu, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Siwei Sun, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Kai Hu, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Meiqin Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Meiqin Wang, Quan Cheng Shandong Laboratory, Jinan, China
* Kai Hu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
### 摘要
> 我们提出了一个框架，可以加速基于高度偏置差分线性区分器的候选单向函数预像攻击的搜索。该框架自然适用于哈希函数的预像攻击。进一步，该框架的一种变体应用于密钥函数可以加速密钥恢复攻击。有趣的是，我们的技术能够在单密钥模型下利用相关密钥差分线性区分器，而无需使用未知但相关密钥进行目标加密预言机查询。这本质上类似于我们如何基于DES的著名补码特性加速密钥搜索，这要求设计者在不进行彻底的密码分析的相关键模型中构建旨在在单键设置中安全的原语时要谨慎。我们将该方法应用于基于海绵结构的哈希函数Ascon-HASH、XOFs XOEsch/Ascon-XOF和AEAD Schwaemm等。加速的预像或密钥恢复攻击被获得。请注意，本研究中使用的所有差分线性区分器都是高度偏置的，因此可以进行实验验证。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_3](https://doi.org/10.1007/978-3-031-68385-5_3)
## Improving Generic Attacks Using Exceptional Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#improving-generic-attacks-using-exceptional-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#improving-generic-attacks-using-exceptional-functions)**
### 作者
* Xavier Bonnetain, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
* Rachelle Heim Boissier, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, Versailles, France
* Gaëtan Leurent, Inria, Paris, France
* André Schrottenloher, Univ Rennes, Inria, CNRS, IRISA, Rennes, France
### 摘要
> 在过去10年中，曾对对称结构进行多次攻击，利用随机函数的统计特性。最初，这些攻击针对迭代哈希结构及其组合器，采用了一系列基于内部碰撞和迭代随机函数平均行为的方法。最近，Gilbert等人（EUROCRYPT 2023）提出了一种基于特殊随机函数的所谓双工模式身份验证加密模式的伪造攻击，即图形具有具有异常小循环的大组件的函数。
> 
> 本文扩展了这种函数在通用密码分析中的使用，并提出了几种新的攻击。首先，我们将Gilbert等人的攻击从\(\mathcal {O}(2^{3c/4})\)提高到\(\mathcal {O}(2^{2c/3})\)，其中c为容量。这种新攻击使用具有异常行为的嵌套函数对，其中第二个函数在第一个函数的循环上定义。接下来，我们介绍了几种新的通用攻击哈希组合器的攻击方法，尤其是使用小循环来改善XOR组合器、Zipper Hash和Hash-Twice的最佳现有攻击的复杂性。
> 
> 最后，我们提出了第一个针对Hash-Twice的量子第二前像攻击，达到量子复杂度\(\mathcal {O}(2^{3n/7})\)。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_4](https://doi.org/10.1007/978-3-031-68385-5_4)
## The Algebraic FreeLunch: Efficient Gröbner Basis Attacks Against Arithmetization-Oriented Primitives.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#the-algebraic-freelunch-efficient-gr-bner-basis-attacks-against-arithmetization-oriented-primitives) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#the-algebraic-freelunch-efficient-gr-bner-basis-attacks-against-arithmetization-oriented-primitives)**
### 作者
* Augustin Bariant, ANSSI, Paris, France
* Augustin Bariant, Inria, Paris, France
* Aurélien Boeuf, Inria, Paris, France
* Axel Lemoine, Inria, Paris, France
* Léo Perrin, Inria, Paris, France
* Irati Manterola Ayala, Simula UiB, Bergen, Norway
* Morten Øygarden, Simula UiB, Bergen, Norway
* Håvard Raddum, Simula UiB, Bergen, Norway
* Axel Lemoine, DGA, Paris, France
### 摘要
> 在本文中，我们提出了一种新类型的代数攻击，适用于最近许多以算术化为导向的排列族，例如Griffin、Anemoi、ArionHash和XHash8中使用的那些，其安全性取决于受限输入受限输出（CICO）问题的难度。我们将这种攻击称为免费午餐方法：选择单项式排序使得自然多项式系统编码的CICO问题已经是一个格罗布纳基。此外，我们提出了一种新的专用解决方案算法，用于处理FreeLunch系统的复杂度低于当前最先进的解决方案算法。
> 
> 我们展示了FreeLunch方法挑战了Anemoi、Arion和Griffin的完整轮次实例的安全性，并通过实验证实了这些理论结果。特别是，结合FreeLunch攻击与一种新技术来绕过Griffin的3轮，我们在一台AMD EPYC 7352（2.3 GHz）的核心上不到四个小时内恢复了Griffin的10轮中的7轮的CICO解决方案。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_5](https://doi.org/10.1007/978-3-031-68385-5_5)
## New Approaches for Estimating the Bias of Differential-Linear Distinguishers.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#new-approaches-for-estimating-the-bias-of-differential-linear-distinguishers) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#new-approaches-for-estimating-the-bias-of-differential-linear-distinguishers)**
### 作者
* Ting Peng, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, CAS, Beijing, China
* Wentao Zhang, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, CAS, Beijing, China
* Jingsui Weng, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, CAS, Beijing, China
* Tianyou Ding, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, CAS, Beijing, China
* Ting Peng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Wentao Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Jingsui Weng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Tianyou Ding, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 差分线性密码分析是由Langford和Hellman在1994年引入的，并自那时以来被广泛研究。2019年，Bar-On等人提出了差分线性连接表(DLCT)，它连接了差分部分和线性部分，因此被攻击的密码被分成3个子密码: 差分部分、DLCT部分和线性部分。
> 
> 本文首先提出了一个准确的数学公式，建立了差分线性与截断差分密码分析之间的关系。利用该公式，差分线性区分器的偏差估计可以转换为一系列截断差分的概率计算。然后，我们提出了一个新颖而自然的概念，即TDT，它可以用来加速截断差分概率的计算。基于公式和TDT，我们提出了两种用于估计差分线性区分器偏差的新方法。我们通过将它们应用于5个对称密钥原语:Ascon、Serpent、KNOT、AES和CLEFIA来证明我们新方法的准确性和效率。对于Ascon和Serpent，我们更新了已知最佳的差分线性区分器。对于KNOT、AES和CLEFIA，我们首次给出了不同轮数的理论差分线性偏差。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_6](https://doi.org/10.1007/978-3-031-68385-5_6)
## Time-Memory Trade-Offs Sound the Death Knell for GPRS and GSM.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#time-memory-trade-offs-sound-the-death-knell-for-gprs-and-gsm) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#time-memory-trade-offs-sound-the-death-knell-for-gprs-and-gsm)**
### 作者
* Gildas Avoine, INSA Rennes, Univ Rennes, IRISA, CNRS, Rennes, France
* Tristan Claverie, INSA Rennes, Univ Rennes, IRISA, CNRS, Rennes, France
* Xavier Carpent, University of Nottingham, Nottingham, UK
* Tristan Claverie, ANSSI, Paris, France
* Christophe Devine, ANSSI, Paris, France
* Diane Leblanc-Albarel, KU Leuven, Leuven, Belgium
### 摘要
> 本文介绍了针对GSM（A5/3）和GPRS（GEA-3）的实践基于TMTO的攻击，这两种技术都是2G移动网络中使用的。尽管这些网络是在80年代设计的，但它们在今天仍然相当活跃，特别是对于嵌入式系统。虽然针对2G网络的主动攻击利用伪基站已经有一段时间了，但本文介绍的攻击依赖于被动攻击者。我们在本文中解释了如何在GPRS和GSM通信中找到材料来执行TMTO攻击。我们使用实际网络中操作的现成设备进行了验证实验。我们提供了攻击的成功概率以及它在几种现实场景中的性能。我们通过AVX2指令优化了KASUMI的实施，并设计了一个特定的TMTO实施来解决SSD访问延迟的问题。作为一个激励性的例子，一个被动窃听GSM通信的攻击者可以在14分钟内以0.43的概率解密任何2小时的通话。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_7](https://doi.org/10.1007/978-3-031-68385-5_7)
## Probabilistic Linearization: Internal Differential Collisions in up to 6 Rounds of SHA-3.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#probabilistic-linearization-internal-differential-collisions-in-up-to-6-rounds-of-sha-3) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#probabilistic-linearization-internal-differential-collisions-in-up-to-6-rounds-of-sha-3)**
### 作者
* Zhongyi Zhang, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Chengan Hou, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Meicheng Liu, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Zhongyi Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Chengan Hou, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Meicheng Liu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
### 摘要
> \(\texttt {SHA}\text {-} \texttt {3}\) 标准包括四种密码哈希函数，分别为 SHA3-224、SHA3-256、SHA3-384 和 SHA3-512，以及两种可扩展输出函数（XOFs），称为 SHAKE128 和 \(\texttt {SHAKE256}\)。本文研究了 \(\texttt {SHA}\text {-} \texttt {3}\) 实例的碰撞抗性。通过分析非线性层，引入了最大差异密度子空间的概念，并通过概率线性化开发了新的目标内部差异算法。我们还利用新策略优化内部差异特征。此外，通过分析摘要的碰撞概率而非输入到最后一个非线性层的中间状态，我们确定了内部差异中碰撞子集的预期大小。这些技术增强了对内部差异的分析，导致对 \(\texttt {SHA}\text {-} \texttt {3}\) 实例的四轮降低变种的最佳碰撞攻击。特别地，对于 SHA3-384，受攻击轮数从 4 增加到 5，对于 \(\texttt {SHAKE256}\)，受攻击轮数从 5 增加到 6。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_8](https://doi.org/10.1007/978-3-031-68385-5_8)
## Feistel-Like Structures Revisited: Classification and Cryptanalysis.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#feistel-like-structures-revisited-classification-and-cryptanalysis) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#feistel-like-structures-revisited-classification-and-cryptanalysis)**
### 作者
* Bing Sun, College of Science, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Guoqiang Liu, College of Science, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Longjiang Qu, College of Science, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Zejun Xiang, School of Cyber Science and Technology, Hubei University, Wuhan, 430062, Hubei, People’s Republic of China
* Bing Sun, Center for Cryptologic Research, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Guoqiang Liu, Center for Cryptologic Research, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Longjiang Qu, Center for Cryptologic Research, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Zhengyi Dai, College of Computers, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Shaojing Fu, College of Computers, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Xuan Shen, College of Information and Communication, National University of Defense Technology, Wuhan, 430010, Hubei, People’s Republic of China
### 摘要
> 2023年，Liu等人总结了使用单一轮函数的费斯特尔类结构，并提出了这些结构的统一形式，称为统一结构。本文重点研究了一种名为“规则统一结构”的特定统一结构的分类和密码分析，该结构涵盖了大多数已知情况。主要结果如下：
> 
> 首先，我们给出了不同结构之间的仿射等价定义，提出了两个规则结构互为仿射等价的条件，并给出了一个规则统一结构的两个标准形式。令人惊讶的是，我们发现，一个目标密集型广义费斯特尔密码总是与具有相同轮函数源密集型广义费斯特尔密码仿射等价，这表明这两个结构几乎具有相同的密码学属性。
> 
> 其次，我们给出自等价结构的定义，其对偶结构与结构本身是仿射等价的。我们证明了有大量的统一结构（如SM4和Mars结构）属于自等价结构。对于这些结构，不存在差分与零相关线性的映射，这说明自等价结构的最长积分至少覆盖最长零相关线性/差分的轮数。
> 
> 最后，我们给出了一种结构的完整扩散轮的定义，并利用ε-δ技术计算了这个值，这可以进一步用于针对差分和零相关线性密码分析的统一结构的可证明安全性评估。例如，我们证明了d-分支SM4类结构的最长差分和零相关线性覆盖正好3d-1轮。
> 
> 我们的研究结果可以为费斯特尔类密码的设计和密码分析提供新的指导。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_9](https://doi.org/10.1007/978-3-031-68385-5_9)
## Succinctly-Committing Authenticated Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#succinctly-committing-authenticated-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#succinctly-committing-authenticated-encryption)**
### 作者
* Mihir Bellare, Department of Computer Science and Engineering, University of California San Diego, La Jolla, USA
* Viet Tung Hoang, Department of Computer Science, Florida State University, Tallahassee, USA
### 摘要
> 近期的攻击和应用程序使对称加密方案除提供传统的真实性和隐私保护外，还需具有承诺性质。为此，提出了许多具有承诺认证加密方案。然而，所有已知的方案要提供s位承诺性安全，就需要付出2s比特的扩展代价——这是密文长度减去明文长度——这导致带宽或存储成本增加。（通常我们希望s=128，这导致了256比特的扩展。）然而，由于生日攻击，这被认为是不可避免的。本文展示了如何规避这一限制。我们提出了承诺认证加密方案，能够提供s位承诺性安全，但只在消息足够长（即超过s位）的情况下才扩展s位。我们将这样的方案称为简洁方案。我们通过名为“SC”的通用短密文转换来实现这一点：给定具有2s位扩展的认证加密方案，“SC”返回具有s位扩展的认证加密方案，同时保留承诺性安全性。SC非常高效，基于AES的实例只需要两个AES调用的开销。作为一种工具，“SC”使用我们设计的冲突防范可逆伪随机函数HtM，并且其分析具有技术难度。为了向基础方案添加“SC”假设的承诺性安全性，我们还提供了一种变换CTY，它改进了Chan和Rogaway的CTX。我们的结果适用于包括传统AEAD和AE2（也称为nonce-hiding AE）在内的认证加密框架，并且特别是对这些设置获得了简明承诺认证加密方案。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_10](https://doi.org/10.1007/978-3-031-68385-5_10)
## HAWKEYE - Recovering Symmetric Cryptography From Hardware Circuits.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#hawkeye-recovering-symmetric-cryptography-from-hardware-circuits) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#hawkeye-recovering-symmetric-cryptography-from-hardware-circuits)**
### 作者
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* Lukas Stennes, Ruhr University Bochum, Bochum, Germany
* Christof Paar, Max Planck Institute for Security and Privacy (MPI-SP), Bochum, Germany
* Julian Speith, Max Planck Institute for Security and Privacy (MPI-SP), Bochum, Germany
### 摘要
> 我们提出了第一个全面的方法来检测和分析硬件门级描述中的对称加密原语。为了捕获ASIC和FPGA，我们将硬件建模为一个有向图，其中门成为节点，导线成为边。对于现代芯片，这些图很容易由数十万个节点组成。更抽象地说，我们在描述整个芯片的海洋门中找到了与加密原语对应的子图。由于我们特别感兴趣的是未知的加密算法，我们不能依赖于搜索已知部分，例如S盒或轮常数。相反，我们正在寻找执行高度本地计算的芯片部件。我们的工作的一个主要结果是，许多对称算法可以通过我们的方法可靠地定位，并有时甚至可以识别，我们称之为HAWKEYE。我们的发现得到了广泛的实验结果的验证，这些实验涉及SPN、ARX、Feistel和基于LFSR的密码在FPGA和ASIC上的实现。我们通过在OpenTitan的Earl Grey芯片上评估HAWKEYE，展示了HAWKEYE的实际适用性，这是一个开源的安全微控制器设计，其中包含424,341个门的网表。HAWKEYE在44.3秒内定位了网表中的所有主要加密原语。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_11](https://doi.org/10.1007/978-3-031-68385-5_11)
## Tight Characterizations for Preprocessing Against Cryptographic Salting.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#tight-characterizations-for-preprocessing-against-cryptographic-salting) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#tight-characterizations-for-preprocessing-against-cryptographic-salting)**
### 作者
* Fangqi Dong, IIIS, Tsinghua University, Beijing, China
* Qipeng Liu, University of California San Diego, San Diego, CA, USA
* Kewen Wu, University of California, Berkeley, Berkeley, CA, USA
### 摘要
> 密码学通常考虑现实世界中最强而又可行的攻击。预处理（也称为非一致性攻击）在理论和实践中都扮演着重要角色：高效的在线攻击者可以利用经过耗时处理的建议。撒盐是一种启发式策略，通过向密码基元提供少量随机性来对抗处理攻击。我们提出了对加密撒盐预处理的普遍而紧密的特征描述，上限匹配最直观的攻击的优势。我们的结果在定量上加强了Coretti，Dodis，Guo和Steinberger（EUROCRYPT'18）的先前工作。我们的证明利用了撒盐游戏的非一致性安全性和无记忆算法的直接乘积定理之间的新颖联系。
> 
> 对于量子对手，我们为属性查找游戏提供类似的特征描述，解决了Chung，Guo，Liu和Qian（FOCS'20）提出的关于加密撒盐冲突抗性哈希的量子非一致性安全的开放性问题。我们的证明扩展了Zhandry（CRYPTO'19）的压缩预言机框架，证明了平均复杂度下属性查找游戏的量子强直接乘积定理。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_12](https://doi.org/10.1007/978-3-031-68385-5_12)
## Algebraic Structure of the Iterates of χ.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#algebraic-structure-of-the-iterates-of) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#algebraic-structure-of-the-iterates-of)**
### 作者
* Björn Kriepke, Institute of Mathematics, University of Rostock, Rostock, Germany
* Gohar Kyureghyan, Institute of Mathematics, University of Rostock, Rostock, Germany
### 摘要
> 我们考虑给定奇数n的映射\(\chi : \mathbb{F}_2^n\rightarrow \mathbb {F}_2^n\)，其中\(y=\chi (x)\)，且\(y_i=x_i+x_{i+2}(1+x_{i+1})\)，其中的索引按n取模。我们提出一个广义的\(\chi \)-映射，它是\(\chi \)映射的一个推广。我们证明这些映射构成一个阿贝尔群，该群同构于\(\mathbb {F}_2[X]/(X^{(n+1)/2})\)中的单位群。利用这种同构，我们可以轻松地得到\(\chi \)的迭代的封闭形式表达式，并解释它们的性质。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_13](https://doi.org/10.1007/978-3-031-68385-5_13)
## The Committing Security of MACs with Applications to Generic Composition.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#the-committing-security-of-macs-with-applications-to-generic-composition) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#the-committing-security-of-macs-with-applications-to-generic-composition)**
### 作者
* Yaobin Shen, School of Informatics, Xiamen University, Xiamen, China
* Ritam Bhaumik, EPFL, Lausanne, Switzerland
* Bishwajit Chakraborty, Nanyang Technological University, Singapore, Singapore
* Wonseok Choi, Purdue University, West Lafayette, IN, USA
* Avijit Dutta, Institute for Advancing Intelligence, TCG CREST, Kolkata, India
* Jérôme Govinden, Technische Universität Darmstadt, Darmstadt, Germany
* Avijit Dutta, Academy of Scientific and Innovative Research (AcSIR), Ghaziabad, 201002, India
### 摘要
> 消息认证码（MAC）是通过多种标准如HMAC、CMAC、GMAC、LightMAC等多种形式广泛应用的原语。其多用途使得在需要消息认证和完整性检查、认证协议、鉴别加密方案或伪随机或密钥派生函数的应用中成为必不可少的构建块。它在这些不同的设置中的使用使它容易受到广泛的攻击场景的影响。最新的攻击趋势利用AEAD方案中缺乏承诺或上下文发现安全，这些攻击主要是由于基础MAC部分的弱点所致。然而，这些新的攻击模型很少被用于MAC本身的分析。本文提供了对MAC承诺和上下文发现安全性的全面处理。我们揭示MAC的承诺和上下文发现安全性通过突出现实世界的脆弱场景来表现出来。我们正式化了MAC所需的安全概念，并分析了这些概念的标准化MAC的安全性。此外，作为一个建设性的应用，我们分析了通用AEAD组合，并提供了构建承诺和上下文发现安全的AEAD的简单有效方法。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_14](https://doi.org/10.1007/978-3-031-68385-5_14)
## Information-Theoretic Security with Asymmetries.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-4].md#information-theoretic-security-with-asymmetries) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#information-theoretic-security-with-asymmetries)**
### 作者
* Tim Beyne, COSIC, KU Leuven, Leuven, Belgium
* Yu Long Chen, COSIC, KU Leuven, Leuven, Belgium
### 摘要
> 在本文中，我们研究了根据对称密钥密码学中对不可区分性安全概念的敌手的误报率和漏报率，对任何给定成本函数进行下界估计的问题。我们将成本模型作为输入，使得这变成一个纯粹的信息理论问题。
> 
> 我们提出功率边界作为对不可区分性背景下的非对称成本函数的优势边界的易于使用的替代方法。我们展示了标准的证明技术，如混合参数和H-系数方法可以推广到功率模型，并将这些技术应用于PRP-PRF切换引理、Even-Mansour（EM）构造和置换求和（SoP）构造。
> 
> 作为最终而可能是最有用的贡献，我们提供了两种方法将单用户功率边界转换为多用户功率边界，并研究它们与Hoang和Tessaro（Crypto 2016）的点间接近方法之间的关系。这些方法被应用于获得EM和SoP的紧密多用户功率边界。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_15](https://doi.org/10.1007/978-3-031-68385-5_15)
