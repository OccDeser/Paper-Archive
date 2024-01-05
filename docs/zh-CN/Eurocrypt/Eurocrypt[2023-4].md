# Eurocrypt[2023-4]
## Truncated Boomerang Attacks and Application to AES-Based Ciphers.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#truncated-boomerang-attacks-and-application-to-aes-based-ciphers) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#truncated-boomerang-attacks-and-application-to-aes-based-ciphers)**
### 作者
* Augustin Bariant, Inria, Paris, France
* Gaëtan Leurent, Inria, Paris, France
### 摘要
> 回旋镖攻击是一种密码分析技术，它结合了两个短的差分而不是使用一个长差分。它已经应用于许多基元，并在对几种基于AES的密码（Kiasu-BC，Deoxys-BC）中产生了已知最好的攻击结果。在本文中，我们介绍了一个截断差分回旋镖攻击的通用框架。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_1](https://doi.org/10.1007/978-3-031-30634-1_1)
## Better Steady than Speedy: Full Break of SPEEDY-7-192.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#better-steady-than-speedy-full-break-of-speedy-7-192) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#better-steady-than-speedy-full-break-of-speedy-7-192)**
### 作者
* Christina Boura, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, 78000, Versailles, France
* Rachelle Heim Boissier, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, 78000, Versailles, France
* Nicolas David, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
### 摘要
> 微分攻击是对对称密码算法的最重要的密码分析家族之一。自1990年引入以来，对基本技术的改进以及针对对称密码算法的许多专用攻击已被提出。大部分改进都涉及密钥恢复部分。然而，在设计新的原语时，对微分攻击的安全性分析通常局限于使用分支和限界技术找到有限轮数的最佳路径，并应用不太准确的启发式方法来推导微分攻击能够达到的总轮数。在这项工作中，我们分析了SPEEDY系列分组密码对微分密码分析的安全性，并展示了如何优化密钥恢复过程中的许多步骤以应对这类攻击。为此，我们实现了对该密码算法寻找最佳路径的搜索，并在一定约束条件下计算了它们的多重概率，并应用了非平凡的技术来获得最佳数据和密钥筛选。这使我们成功完全破解了SPEEDY-7-192，即被认为提供192位安全性的7轮变种密码算法。我们的工作证明了需要更好地理解微分密码分析的微妙之处，以获得对密码算法在这些攻击下的安全性的有意义的估计。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_2](https://doi.org/10.1007/978-3-031-30634-1_2)
## Exploiting Non-full Key Additions: Full-Fledged Automatic Demirci-Selçuk Meet-in-the-Middle Cryptanalysis of SKINNY.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#exploiting-non-full-key-additions-full-fledged-automatic-demirci-sel-uk-meet-in-the-middle-cryptanalysis-of-skinny) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#exploiting-non-full-key-additions-full-fledged-automatic-demirci-sel-uk-meet-in-the-middle-cryptanalysis-of-skinny)**
### 作者
* Danping Shi, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Lei Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Qianqian Yang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Danping Shi, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Lei Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Qianqian Yang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Ling Song, Jinan University, Guangzhou, China
### 摘要
> Demirci-Selçuk中间相遇(MITM)攻击是差分攻击的一种复杂变种。由于其复杂性，除了AES密码，很难高效地找到最佳的DS-MITM攻击方法。此外，当前的自动工具只能捕获DS-MITM攻击的最基本版本，并且用于增强攻击的关键技术（如差分枚举和密钥依赖筛选）仍然依赖于手动操作。在本文中，我们开发了一个完整的自动框架，集成了所有已知的技术（差分枚举、密钥依赖筛选和密钥桥接等）用于DS-MITM攻击，可以直接产生密钥恢复攻击，而不仅仅是寻找可区分性。此外，我们开发了一种新技术，能够利用部分密钥添加生成更多有益于攻击的线性关系。我们将该框架应用于SKINNY系列分组密码，并获得了显著改进的结果。特别是，对于SKINNY的各个版本已知的DS-MITM攻击至少提高了2轮，并且与之前穿越更少轮的最佳攻击相比，某些攻击的数据、内存或时间复杂度也有所降低。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_3](https://doi.org/10.1007/978-3-031-30634-1_3)
## Efficient Detection of High Probability Statistical Properties of Cryptosystems via Surrogate Differentiation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#efficient-detection-of-high-probability-statistical-properties-of-cryptosystems-via-surrogate-differentiation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#efficient-detection-of-high-probability-statistical-properties-of-cryptosystems-via-surrogate-differentiation)**
### 作者
* Itai Dinur, Computer Science Department, Ben Gurion University, Be’er Sheva, Israel
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
* Nathan Keller, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Eyal Ronen, Computer Science Department, Tel Aviv University, Tel Aviv-Yafo, Israel
* Adi Shamir, Computer Science Department, Weizmann Institute of Science, Rehovot, Israel
### 摘要
> 密码分析中的一个核心问题是找到给定n位密码原语中所有与随机性有显著偏差的情况。当n很小（例如8位的S盒）时，这很容易实现，但对于大的n，唯一实际可行的方法是利用原语的内部结构，并通过各种启发式规则来加速搜索。然而，这种自下而上的技术可能会错过许多属性，尤其是在设计有隐藏陷阱门的密码系统中。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_4](https://doi.org/10.1007/978-3-031-30634-1_4)
## Finding the Impossible: Automated Search for Full Impossible-Differential, Zero-Correlation, and Integral Attacks.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#finding-the-impossible-automated-search-for-full-impossible-differential-zero-correlation-and-integral-attacks) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#finding-the-impossible-automated-search-for-full-impossible-differential-zero-correlation-and-integral-attacks)**
### 作者
* Hosein Hadipour, Graz University of Technology, Graz, Austria
* Maria Eichlseder, Graz University of Technology, Graz, Austria
* Sadegh Sadeghi, Department of Mathematics, Institute for Advanced Studies in Basic Sciences (IASBS), Zanjan, Iran
### 摘要
> 不可能差分（ID），零相关（ZC）和积分攻击是对块密码的重要攻击的一类。例如，不可能差分攻击是对AES的7轮密码分析攻击的第一个。评估块密码对这些攻击的安全性非常重要，但也具有挑战性：找到这些攻击通常涉及到一个涉及许多参数和约束条件的组合优化问题，使用手动方法很难解决。自动求解器，如约束编程（CP）求解器，可以帮助密码分析师找到合适的攻击方法。然而，先前基于CP的方法仅关注于在有限的搜索空间中找到ID，ZC和积分区分器。值得注意的是，没有一种方法可以扩展为用于找到完整攻击的统一优化问题，包括高效的密钥恢复步骤。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_5](https://doi.org/10.1007/978-3-031-30634-1_5)
## Meet-in-the-Middle Preimage Attacks on Sponge-Based Hashing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#meet-in-the-middle-preimage-attacks-on-sponge-based-hashing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#meet-in-the-middle-preimage-attacks-on-sponge-based-hashing)**
### 作者
* Lingyue Qin, BNRist, Tsinghua University, Beijing, China
* Lingyue Qin, State Key Laboratory of Cryptology, P. O. Box 5159, Beijing, 100878, China
* Jialiang Hua, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyang Dong, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Lingyue Qin, Zhongguancun Laboratory, Beijing, China
* Xiaoyang Dong, Zhongguancun Laboratory, Beijing, China
* Xiaoyun Wang, Zhongguancun Laboratory, Beijing, China
* Hailun Yan, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security (Ministry of Education), School of Cyber Science and Technology, Shandong University, Qingdao, China
* Lingyue Qin, National Financial Cryptography Research Center, Beijing, China
* Xiaoyang Dong, National Financial Cryptography Research Center, Beijing, China
* Xiaoyun Wang, National Financial Cryptography Research Center, Beijing, China
### 摘要
> Meet-in-the-Middle (MitM)攻击在Merkle-Damgård (MD)哈希函数的逆像攻击中得到了广泛应用。在本文中，我们介绍了一种针对基于sponge的哈希函数的MitM攻击的通用框架。我们发现某些比特条件可以显著降低未知比特的扩散并导致更长的MitM特征。为了找到良好或最优的MitM攻击配置，例如比特条件、中性集和匹配点，我们引入了基于比特级MILP的自动工具，其中包括Keccak、Ascon和Xoodyak。为了减少比特级模型的规模并使其能够在合理的时间内求解，在建模过程中考虑了目标哈希函数的一系列属性，例如Keccak的线性结构和CP-内核，Ascon的布尔表达式。最后，我们提出了一种改进的针对Keccak-512/SHA3的4轮逆像攻击，并打破了近10年的密码分析记录。我们还给出了首个针对3-/4轮Ascon-XOF和3轮Xoodyak-XOF的逆像攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_6](https://doi.org/10.1007/978-3-031-30634-1_6)
## Analysis of RIPEMD-160: New Collision Attacks and Finding Characteristics with MILP.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#analysis-of-ripemd-160-new-collision-attacks-and-finding-characteristics-with-milp) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#analysis-of-ripemd-160-new-collision-attacks-and-finding-characteristics-with-milp)**
### 作者
* Fukang Liu, Tokyo Institute of Technology, Tokyo, Japan
* Fukang Liu, University of Hyogo, Hyogo, Japan
* Ravi Anand, University of Hyogo, Hyogo, Japan
* Takanori Isobe, University of Hyogo, Hyogo, Japan
* Gaoli Wang, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Yingxin Li, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Gaoli Wang, State Key Laboratory of Cryptology, Beijing, China
* Takanori Isobe, NICT, Tokyo, Japan
* Santanu Sarkar, Indian Institute of Technology Madras, Chennai, India
* Willi Meier, FHNW, Windisch, Switzerland
### 摘要
> 哈希函数RIPEMD-160是ISO/IEC标准，并与SHA-256一起用于生成比特币地址。尽管MD-SHA哈希族中的许多哈希函数已经被破解，但RIPEMD-160仍然是安全的，最好的碰撞攻击仅能达到80轮中的34轮，该攻击结果已在CRYPTO 2019上发布。在本文中，我们提出了一种新的对RIPEMD-160的碰撞攻击，可以达到36轮，时间复杂度为\(2^{64.5}\)。这种新攻击是通过一种新的选择消息差异的策略和同时处理两个分支上微分条件的新技术来实现的。此外，与之前所有关于RIPEMD-160的工作不同，我们利用基于MILP的方法来搜索微分特征，我们构建了一个模型来准确描述通过其轮函数的有符号差异转换。据我们所知，这是针对MD-SHA哈希族有符号差异转换的第一个模型。事实上，我们更被动力来设计这个模型是因为许多搜索这种微分特征的自动化工具并不公开，而且从头开始实现它们太费时费力。因此，我们期望这可以作为未来研究的一种替代简易工具，只需要写下一些简单的线性不等式即可。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_7](https://doi.org/10.1007/978-3-031-30634-1_7)
## Collision Attacks on Round-Reduced SHA-3 Using Conditional Internal Differentials.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#collision-attacks-on-round-reduced-sha-3-using-conditional-internal-differentials) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#collision-attacks-on-round-reduced-sha-3-using-conditional-internal-differentials)**
### 作者
* Zhongyi Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Chengan Hou, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Meicheng Liu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Zhongyi Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Chengan Hou, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Meicheng Liu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
### 摘要
> KECCAK哈希函数于2012年被NIST选为\(\texttt{SHA-3}\)大赛的获胜者，并于2015年成为NIST的\(\texttt{SHA-3}\)哈希标准。由于\(\texttt{SHA-3}\)在理论和应用中的重要性，其安全性分析引起了越来越多的关注。在\(\texttt{SHA-3}\)家族中，\(\texttt{SHA3-512}\)对抗碰撞攻击表现最强：\(\texttt{SHA3-512}\)的理论攻击仅通过解决多项式系统扩展到四轮，速度比生日攻击快64倍。然而，至我们所知，对于\(\texttt{SHA-3}\)的实例SHAKE256，文献中没有关于碰撞攻击的结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_8](https://doi.org/10.1007/978-3-031-30634-1_8)
## From Farfalle to Megafono via Ciminion: The PRF Hydra for MPC Applications.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#from-farfalle-to-megafono-via-ciminion-the-prf-hydra-for-mpc-applications) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#from-farfalle-to-megafono-via-ciminion-the-prf-hydra-for-mpc-applications)**
### 作者
* Lorenzo Grassi, Radboud University Nijmegen, Nijmegen, The Netherlands
* Morten Øygarden, Simula UiB, Bergen, Norway
* Markus Schofnegger, Horizen Labs, Austin, USA
* Roman Walch, Graz University of Technology, Graz, Austria
* Roman Walch, Know-Center GmbH, Graz, Austria
* Roman Walch, TACEO GmbH, Graz, Austria
### 摘要
> 多方计算（MPC）领域最近在受到越来越多的关注和使用案例。目前，类似于Farfalle的加密函数Ciminion在涉及对称原语的MPC应用中实现了最佳性能。然而，它有一个致命的弱点。其安全性高度依赖其子密钥的独立性，这是通过使用昂贵的密钥调度来实现的。许多涉及对称伪随机函数（PRFs）的MPC使用案例都依赖于秘密共享的对称密钥，因此昂贵的密钥调度也必须在MPC中计算。因此，在这些用例中，Ciminion的性能显着降低。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_9](https://doi.org/10.1007/978-3-031-30634-1_9)
## Coefficient Grouping: Breaking Chaghri and More.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#coefficient-grouping-breaking-chaghri-and-more) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#coefficient-grouping-breaking-chaghri-and-more)**
### 作者
* Fukang Liu, Tokyo Institute of Technology, Tokyo, Japan
* Fukang Liu, University of Hyogo, Hyogo, Japan
* Ravi Anand, University of Hyogo, Hyogo, Japan
* Libo Wang, University of Hyogo, Hyogo, Japan
* Takanori Isobe, University of Hyogo, Hyogo, Japan
* Takanori Isobe, NICT, Tokyo, Japan
* Libo Wang, Jinan University, Guangzhou, China
* Willi Meier, FHNW, Windisch, Switzerland
### 摘要
> 我们提出了一种称为系数分组的有效技术来评估FHE友好密码Chaghri的代数次数，该技术已被ACM CCS 2022接受。发现代数次数呈线性增长而不是指数增长。因此，我们可以构造一个时间和数据复杂度为\(2^{63}\)的13轮区分器，并进行一个13.5轮密钥恢复攻击。特别地，可以通过时间和数据复杂度为\(2^{38}\)的更高阶微分攻击实现对8个轮的Chaghri的攻击。因此，这表明完整的8轮远非安全。此外，我们还展示了我们的系数分组技术在安全加密组件设计中的应用。结果发现了Chaghri的一种对策，与原始设计相比，几乎没有额外开销。由于越来越多的定义在大有限域上的对称基元正在出现，我们相信我们的新技术在未来的研究中会有更多的应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_10](https://doi.org/10.1007/978-3-031-30634-1_10)
## Pitfalls and Shortcomings for Decompositions and Alignment.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#pitfalls-and-shortcomings-for-decompositions-and-alignment) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#pitfalls-and-shortcomings-for-decompositions-and-alignment)**
### 作者
* Baptiste Lambin, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* Patrick Neumann, Ruhr University Bochum, Bochum, Germany
* Baptiste Lambin, University of Luxembourg, Esch-sur-Alzette, Luxembourg
### 摘要
> 在本文中，我们首次研究了在何种情况下可以唯一地分解一个置换-置换网络的轮函数的问题。更准确地说，我们提供了非线性层的必要和充分条件，以确定分解是否唯一。我们的研究结果特别说明，当使用密码强度高的S盒时，分解确实是唯一的。然后，我们将我们的发现应用于对齐概念，指出先前的定义允许同时具有对齐和不对齐的基元。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_11](https://doi.org/10.1007/978-3-031-30634-1_11)
## Generic Attack on Duplex-Based AEAD Modes Using Random Function Statistics.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#generic-attack-on-duplex-based-aead-modes-using-random-function-statistics) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#generic-attack-on-duplex-based-aead-modes-using-random-function-statistics)**
### 作者
* Henri Gilbert, ANSSI, Paris, France
* Louiza Khati, ANSSI, Paris, France
* Henri Gilbert, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de Mathématiques de Versailles, Versailles, France
* Rachelle Heim Boissier, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de Mathématiques de Versailles, Versailles, France
* Yann Rotella, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de Mathématiques de Versailles, Versailles, France
### 摘要
> 具有足够长密钥长度的双工鉴别加密模式已被证明在生日界限\(2^{\frac{c}{2}}\)内是安全的，其中c是容量。然而，该界限并不被认为是紧密的，并且基于多重碰撞的最佳已知通用攻击的复杂度要大得多：它达到\(\frac{2^c}{\alpha }\)，其中\(\alpha \)代表一个小的安全损失因子。因此，对于这种结构所提供的超出\(2^{\frac{c}{2}}\)界限的真实安全程度存在不确定性。本文中，我们描述了一种针对几种双工鉴别加密认证模式的新的通用攻击。我们的攻击利用随机函数统计数据，在时间复杂度\(\mathcal {O}(2^{\frac{3c}{4}})\)内产生伪造，并且只使用可忽略的内存和没有加密查询。此外，对于某些双工鉴别模式，我们的攻击可以在可忽略的额外计算量下恢复秘密密钥。值得注意的是，我们的攻击破解了NIST轻量级竞赛候选方案Xoodyak设计者所做的安全声明。这次攻击是向确定双工鉴别结构提供的确切安全性迈进的一步。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_12](https://doi.org/10.1007/978-3-031-30634-1_12)
## Context Discovery and Commitment Attacks - How to Break CCM, EAX, SIV, and More.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#context-discovery-and-commitment-attacks-how-to-break-ccm-eax-siv-and-more) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#context-discovery-and-commitment-attacks-how-to-break-ccm-eax-siv-and-more)**
### 作者
* Sanketh Menda, Cornell Tech, New York, USA
* Julia Len, Cornell Tech, New York, USA
* Thomas Ristenpart, Cornell Tech, New York, USA
* Paul Grubbs, University of Michigan, Ann Arbor, USA
### 摘要
> 最近的一系列研究突出了上下文承诺安全的重要性，要求具有关联数据的身份验证加密（AEAD）方案在两个不同的对手选择的上下文（密钥、关联数据和一次性数字）下不会解密相同的对手选择的密文。尽管最近爆发了大量的攻击，但上下文承诺问题仍然存在许多未解之谜；最明显的是对于重要方案如CCM、EAX和SIV的承诺安全性几乎没有了解。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_13](https://doi.org/10.1007/978-3-031-30634-1_13)
## Impossibility of Indifferentiable Iterated Blockciphers from 3 or Less Primitive Calls.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#impossibility-of-indifferentiable-iterated-blockciphers-from-3-or-less-primitive-calls) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#impossibility-of-indifferentiable-iterated-blockciphers-from-3-or-less-primitive-calls)**
### 作者
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Chun Guo, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, 266237, Shandong, China
* Chun Guo, Shandong Research Institute of Industrial Technology, Jinan, 250102, Shandong, China
* Lei Wang, Shanghai Jiaotong University, Shanghai, China
* Dongdai Lin, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
### 摘要
> 几乎所有现代分组密码都是迭代的。在本文中，我们提出了一个问题：要“非平凡地”构建一个安全的迭代分组密码，需要多少次调用随机函数和置换函数？

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_14](https://doi.org/10.1007/978-3-031-30634-1_14)
## Optimal Security for Keyed Hash Functions: Avoiding Time-Space Tradeoffs for Finding Collisions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#optimal-security-for-keyed-hash-functions-avoiding-time-space-tradeoffs-for-finding-collisions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#optimal-security-for-keyed-hash-functions-avoiding-time-space-tradeoffs-for-finding-collisions)**
### 作者
* Cody Freitag, Cornell Tech, New York, USA
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, WA, USA
* Ilan Komargodski, School of Computer Science and Engineering, Hebrew University of Jerusalem and NTT Research, 91904, Jerusalem, Israel
### 摘要
> 密码哈希函数将任意大小的数据映射为固定大小的摘要，并且是最常用的密码对象之一。由于为每种输入大小设计独立的哈希函数是不可行的，可变输入长度的哈希函数是通过设计和引导一个单一的固定输入长度函数来构建的，该函数看起来足够随机。为了防止简单的预处理攻击，应用程序通常不仅需要单个哈希函数，而是需要一组带有密钥的哈希函数。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_15](https://doi.org/10.1007/978-3-031-30634-1_15)
## Proof of Mirror Theory for a Wide Range of $\xi _{\max }$.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#proof-of-mirror-theory-for-a-wide-range-of-xi-max) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#proof-of-mirror-theory-for-a-wide-range-of-xi-max)**
### 作者
* Benoît Cogliati, Thales DIS France SAS, Meudon, France
* Jacques Patarin, Thales DIS France SAS, Meudon, France
* Avijit Dutta, Institute for Advancing Intelligence, TCG-CREST, Kolkata, India
* Mridul Nandi, Institute for Advancing Intelligence, TCG-CREST, Kolkata, India
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
* Abishanka Saha, Indian Statistical Institute, Kolkata, India
* Jacques Patarin, Laboratoire de Mathématiques de Versailles, UVSQ, CNRS, Université Paris-Saclay, Versailles, France
### 摘要
> 在CRYPTO'03中，Patarin猜测了满足形式为\(X_i \oplus X_j = \lambda _{i,j}\)的方程系统的不同解\((P_1, \ldots , P_{q}) \in (\{0,1\}^{n})^{q}\)的下界，其中\(P_1, P_2, \ldots \), \(P_{q}\)两两不同。这个结果被称为“任意\(\xi _{\max }\)下的\(P_i \oplus P_j\)定理”或者作为一般\(\xi _{\max }\)的Mirror理论，后来被Patarin在ICISC'05中证明。对于一般\(\xi _{\max }\)的Mirror理论被用作提供许多基于分组密码（甚至是理想置换）的设计的高安全性保证的有力工具。不幸的是，该结果的证明存在一些非常难以解决的空白部分。在这项工作中，我们给出了对于一系列广泛的\(\xi _{\max }\)的\(P_i \oplus P_j\)定理的第一个完整证明，通常可达到\(O(2^{n/4}/\sqrt{n})\)阶。此外，我们的证明方法通过使用一种新类型的方程，称为链删除方程，使得证明过程更加简化，这个方程大致对应于之前工作中所称的橙色方程的一半。作为我们结果的实例，我们也重新审查了两个最优安全基于分组密码的伪随机函数的安全性证明，并为六轮Feistel密码的n位安全性证明提供了更新后的安全界限。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_16](https://doi.org/10.1007/978-3-031-30634-1_16)
## Non-adaptive Universal One-Way Hash Functions from Arbitrary One-Way Functions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#non-adaptive-universal-one-way-hash-functions-from-arbitrary-one-way-functions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#non-adaptive-universal-one-way-hash-functions-from-arbitrary-one-way-functions)**
### 作者
* Xinyu Mao, Department of Computer Science, University of Southern California, Los Angeles, USA
* Jiapeng Zhang, Department of Computer Science, University of Southern California, Los Angeles, USA
* Noam Mazor, The Blavatnik School of Computer Science, Tel-Aviv University, Tel-Aviv, Israel
### 摘要
> 在这项工作中，我们首次提出了从任意单向函数构造通用单向哈希函数（UOWHFs）的非自适应方法。我们的构造方法使用\(O(n^9)\)次对单向函数的调用，具有长度为\(O(n^{10})\)的密钥，并且在底层单向函数在NC1中的情况下可以实现。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_17](https://doi.org/10.1007/978-3-031-30634-1_17)
## XOCB: Beyond-Birthday-Bound Secure Authenticated Encryption Mode with Rate-One Computation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#xocb-beyond-birthday-bound-secure-authenticated-encryption-mode-with-rate-one-computation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#xocb-beyond-birthday-bound-secure-authenticated-encryption-mode-with-rate-one-computation)**
### 作者
* Zhenzhen Bao, Institute for Network Sciences and Cyberspace, BNRist, Tsinghua University, Beijing, China
* Seongha Hwang, KAIST, Daejeon, Korea
* Byeonghak Lee, KAIST, Daejeon, Korea
* Jooyoung Lee, KAIST, Daejeon, Korea
* Akiko Inoue, NEC, Kawasaki, Japan
* Kazuhiko Minematsu, NEC, Kawasaki, Japan
* Zhenzhen Bao, Zhongguancun Laboratory, Beijing, China
### 摘要
> 我们提出了一种新的鉴别加密（AE）分组密码工作模式，称为\(\textsf{XOCB}\)，它具有以下特点：（1）如果最大分组长度足够小于生日界限，则基于内部分组密码的标准伪随机假设具有超越生日界限（BBB）安全性；（2）速率-1计算；（3）支持任意密钥长度的任意分组密码。换句话说，\(\textsf{XOCB}\)在不改变安全模型或\(\textsf{OCB}\)所需原语的情况下，具有与开创性的\(\textsf{OCB}\)相同的效率，同时具有更强的定量安全性。尽管以前已经进行了大量研究，但我们的\(\textsf{XOCB}\)是第一个能同时实现这些多个目标的工作模式。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_18](https://doi.org/10.1007/978-3-031-30634-1_18)
## Improved Power Analysis Attacks on Falcon.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#improved-power-analysis-attacks-on-falcon) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#improved-power-analysis-attacks-on-falcon)**
### 作者
* Shiduo Zhang, Institute for Advanced Study, Tsinghua University, Beijing, China
* Xiuhan Lin, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Weijia Wang, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Yang Yu, BNRist, Tsinghua University, Beijing, China
* Yang Yu, Zhongguancun Laboratory, Beijing, China
* Yang Yu, National Financial Cryptography Research Center, Beijing, China
### 摘要
> 猎鹰是美国国家标准与技术研究院（NIST）选定的三种后量子密码签名方案之一。由于其带宽较低且效率较高，猎鹰被视为量子安全嵌入式系统的一种有吸引力的选择。在本研究中，我们通过分析猎鹰的高斯采样器来研究其抗侧信道攻击的能力。我们的研究结果主要包括两个方面。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_19](https://doi.org/10.1007/978-3-031-30634-1_19)
## Effective and Efficient Masking with Low Noise Using Small-Mersenne-Prime Ciphers.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#effective-and-efficient-masking-with-low-noise-using-small-mersenne-prime-ciphers) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#effective-and-efficient-masking-with-low-noise-using-small-mersenne-prime-ciphers)**
### 作者
* Loïc Masure, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Thorben Moos, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Pierrick Méaux, Luxembourg University, SnT, Luxembourg City, Luxembourg
### 摘要
> 用于安全应用的嵌入式设备自然成为物理攻击的目标。因此，增强它们的侧信道抗性是一个重要的研究难题。为此，标准解决方案是使用布尔掩蔽方案，因为它们适合具有高效比特切片表示的当前块密码。布尔掩蔽保证了在泄漏足够嘈杂（并且独立）的假设下，实施的安全性随着份额数量的指数增长。不幸的是，已经表明这个噪声假设在低端设备上很难得到满足。因此，本文研究了掩蔽加密算法的技术，以使其抵抗几乎完全缺乏噪声。基于Dziembowski等人的种子理论结果，我们提出质数域中的算术编码可以实现这个目标。我们首先通过模拟信息理论分析来展示这种编码的收益（最多六个份额）。然后，我们提供数据表明，在具有优化算术加法器和乘法器的平台上（即大多数MCU和FPGA），在小到中型Mersenne质数域中执行掩蔽操作而不是二进制扩展域不会导致显着的实现开销。我们将这些观察结果编译成一种新的AES样式块密码，称为AES-prime，它非常适合说明在质数域中掩蔽的显着优势。我们还通过评估具体软件（ARM Cortex-M3）和硬件（Xilinx Spartan-6）实现来确认我们发现的实用性。我们的实验结果表明，尽管每个份额泄漏相同数量的信息，但相对于布尔掩蔽（更普遍的二进制编码），安全增益可以达到数量级。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_20](https://doi.org/10.1007/978-3-031-30634-1_20)
## One-Hot Conversion: Towards Faster Table-Based A2B Conversion.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#one-hot-conversion-towards-faster-table-based-a2b-conversion) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#one-hot-conversion-towards-faster-table-based-a2b-conversion)**
### 作者
* Jan-Pieter D’Anvers, imec-COSIC KU Leuven, Kasteelpark Arenberg 10 - bus 2452, 3001, Leuven, Belgium
### 摘要
> 算术到布尔遮蔽（A2B）转换是在格基后量子密码遮蔽中至关重要的技术。它也是构建遮蔽比较的关键部分，这是一种活动安全格基加密中最难遮蔽的构建块之一。我们首先提出了一种新方法，称为独热转换，使用Coron等人的高阶表格转换的变种，从高阶算术遮蔽高效地转换为布尔遮蔽。其次，我们将我们的方法专门用于执行算术到1位布尔函数的转换。我们的独热函数可应用于遮蔽格基加密构建块，例如遮蔽比较或确定算术遮蔽变量的最高有效位。在Cortex M4处理器上的基准测试中，相对于最先进的基于表格的A2B转换，实现了15倍的加速，使基于表格的A2B转换性能达到布尔电路-based A2B转换的范围。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_21](https://doi.org/10.1007/978-3-031-30634-1_21)
