# Eurocrypt[2023-4]
## Truncated Boomerang Attacks and Application to AES-Based Ciphers.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#truncated-boomerang-attacks-and-application-to-aes-based-ciphers) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#truncated-boomerang-attacks-and-application-to-aes-based-ciphers)**
### 作者
* Augustin Bariant, Inria, Paris, France
* Gaëtan Leurent, Inria, Paris, France
### 摘要
> 回旋镖攻击是一种密码分析技术，通过结合两个短不同差分而不是使用单个长差分来实施。它已被应用于许多基元，并且在对几个基于AES的密码算法（Kiasu-BC，Deoxys-BC）进行攻击方面取得了最佳结果。在本文中，我们介绍了一个用于截断差分的回旋镖攻击的通用框架。
> 
> 我们展示了截断差分的使用可以显著改进文献中最佳回旋镖攻击。具体而言，我们考虑明文和密文端的结构，并包括密钥恢复步骤的分析。在6轮AES上，我们获得了一个复杂度为\(2^{87}\)的具有竞争力的结构区分器以及一个复杂度为\(2^{61}\)的密钥恢复攻击。
> 
> 截断回旋镖攻击尤其有效地适用于可调整AES变体。我们将其应用于8轮Kiasu-BC，从而得到了已知最佳攻击，其复杂度为\(2^{83}\)（而不是\(2^{103}\)）。我们还展示了使用6轮区分器对全量TNT-AES进行有趣的应用，TNT-AES是一种使用6轮AES作为构建模块的可调整区块密码。最后，我们将这个框架应用于Deoxys-BC，使用MILP模型自动找到最优迷宫路径。我们得到了对Deoxys-BC所有变体的降轮版本的最佳攻击。

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
> 微分攻击是对对称密码算法最重要的一类密码分析方法之一。自1990年引入以来，对基本技术的改进以及针对对称密码算法的专门攻击提出了许多改进。大多数改进都涉及密钥恢复部分。然而，在设计新的密码算法时，关于微分攻击的安全性分析通常仅限于使用分支和界限技术找到有限轮次下的最佳路径，并且然后应用一种糟糕的启发式方法来推断微分攻击可以达到的总轮次。在这项工作中，我们分析了SPEEDY家族的分组密码算法在微分密码分析方面的安全性，并展示了如何优化密钥恢复过程中的许多步骤，以适应这种类型的攻击。为此，我们实现了一个搜索算法，用于在一些约束条件下找到该密码算法的最佳路径及其相关的多个概率，并应用了非平凡的技术来获得最优的数据和密钥筛选。这使我们能够完全破解SPEEDY-7-192，这是SPEEDY密码算法的7轮变种，据称提供了192位的安全性。我们的工作在其他方面证明了更好地理解微分密码分析的细微之处，以便对密码算法针对这些攻击所提供的安全性进行有意义的估计的必要性。

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
> Demirci-Selçuk中间遇见攻击是差分攻击的一种复杂变体。由于其复杂性，除了AES以外，很难有效地找到大多数密码中最佳的DS-MITM攻击方式。此外，当前的自动工具只能捕捉到DS-MITM攻击的最基本版本，而用于增强攻击的关键技术（如差分枚举和依赖密钥筛选）仍然依赖手工操作。本文提出了一个全面的自动框架，集成了所有已知的技术（差分枚举、依赖密钥筛选和密钥桥接等），用于进行DS-MITM攻击，可以直接产生密钥恢复攻击，而不仅仅是寻找区分器。此外，我们开发了一种新技术，能够利用部分密钥添加来生成对攻击有利的更多线性关系。我们将该框架应用于SKINNY系列分组密码，并获得显著改进的结果。特别是，在各个版本的SKINNY上，所有已知的DS-MITM攻击至少提升了2轮，并且与之前的穿透更少轮次的最佳攻击相比，某些攻击的数据、内存或时间复杂性也有所降低。

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
> 在密码分析中的一个核心问题是找到给定n位密码原语中所有重大偏离随机性的情况。当n较小时（例如8位S盒），这很容易做到，但对于大n，找到这样的统计特性的唯一实用方法是利用原语的内部结构，并通过各种启发式经验法则加快搜索速度。然而，这样的自底向上技术可能会错过许多属性，特别是在旨在拥有隐藏后门的密码系统中。
> 
> 在本文中，我们考虑了问题的自顶向下版本，其中密码原语被视为一个无结构黑盒，并将寻找其所有显着差分和线性属性的最佳已知技术的复杂性降低了大约2 n / 2个因子。我们的主要新工具是使用代理微分的想法。在寻找差分特性的背景下，它使我们能够同时找到关于所有不同方向α的形式的二进制函数f（x）\oplus f（x⊕α）的所有差分的信息，通过以单个与α无关的随机选择的方向γ（即没有关联至α的方向）微分f函数。在找到线性性质的情况下，代理微分可以与快速傅里叶变换高效地组合使用。对于64位密码原语，该技术使我们可以在大约2^ 64次操作内找到它们所有差分的概率达到p≥2 ^ -32，并且所有线性近似值的偏差| p |≥2 ^ -16（使用2 ^ 64内存）。而先前解决这些问题所需的算法需要至少2^ 96次操作。类似的技术可用于显着改进查找相关密钥差分、二阶差分和回旋镖的最佳已知时间复杂度。此外，我们展示了如何运行不需要内存的算法变体，并如何检测那些特别尝试规避我们技术的带陷门的加密系统中的此类统计特性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_4](https://doi.org/10.1007/978-3-031-30634-1_4)
## Finding the Impossible: Automated Search for Full Impossible-Differential, Zero-Correlation, and Integral Attacks.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#finding-the-impossible-automated-search-for-full-impossible-differential-zero-correlation-and-integral-attacks) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#finding-the-impossible-automated-search-for-full-impossible-differential-zero-correlation-and-integral-attacks)**
### 作者
* Hosein Hadipour, Graz University of Technology, Graz, Austria
* Maria Eichlseder, Graz University of Technology, Graz, Austria
* Sadegh Sadeghi, Department of Mathematics, Institute for Advanced Studies in Basic Sciences (IASBS), Zanjan, Iran
### 摘要
> 不可能差分（ID）、零相关（ZC）和积分攻击是对分组密码的一类重要攻击。例如，不可能差分攻击是对AES的7轮的首个密码分析攻击。评估分组密码对这些攻击的安全性非常重要，但也具有挑战性：找到这些攻击通常涉及许多参数和约束的组合优化问题，使用手动方法很难解决。自动求解器，例如约束规划（CP）求解器，可以帮助密码分析人员找到合适的攻击方法。然而，以前基于CP的方法仅关注于在有限的搜索空间中找到ID、ZC和积分区分器。值得注意的是，没有一种方法可以扩展到一种统一的优化问题，以找到包括高效密钥恢复步骤的完整攻击。
> 
> 在本文中，我们提出了一种新的基于CP的方法，用于搜索ID、ZC和积分区分器，并将其扩展为一种统一的约束优化问题，用于找到完整的ID、ZC和积分攻击。为了展示我们的方法的有效性和实用性，我们将其应用于几个分组密码，包括SKINNY、CRAFT、SKINNYe-v2和SKINNYee。对于ISO标准的分组密码SKINNY，我们显著改进了所有现有的ID、ZC和积分攻击。特别是，我们将SKINNY-n-3n和SKINNY-n-2n的积分攻击分别改进了3轮和2轮，在单密钥设置下获得了这些变体的最佳密码分析结果。我们将SKINNY-n-n（SKINNY-n-2n）的ZC攻击改进了2（resp.1）轮。我们还改进了对所有SKINNY变体的ID攻击。特别地，我们将对SKINNY-128-256（resp. SKINNY-128-384）的以前最佳单调整密钥（相关调整密钥）ID攻击的时间复杂度提高了\(2^{22.57}\)（resp. \(2^{15.39}\)）倍。对于CRAFT，我们提出了一个21轮（20轮）的ID攻击（resp. ZC攻击），比以前最佳的单调整密钥攻击多2（resp. 1）轮。使用我们的新模型，我们还提供了几个对于缩减轮数的SKINNY、CRAFT和Deoxys-BC的实用积分区分器。我们的方法是通用的，适用于其他强对齐的分组密码。

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
> Meet-in-the-Middle（MitM）攻击已广泛应用于Merkle-Damgård（MD）哈希的前像攻击中。在本文中，我们介绍了一种MitM攻击在基于海绵结构的哈希中的通用框架。我们发现某些位条件可以显著降低未知位的扩散，并导致更长的MitM特征。为了找到MitM攻击的良好或最优配置，例如位条件、中性集和匹配点，我们引入了基于位的整数线性规划（MILP）自动工具，包括Keccak、Ascon和Xoodyak。为了在合理的时间内减小位级模型的规模并使其可解，我们在建模中考虑了目标哈希的一系列属性，如Keccak的线性结构和CP-核，以及Ascon的Sbox的布尔表达式。最后，我们提出了对Keccak-512/SHA3的改进的4轮前像攻击，并打破了近10年的密码分析记录。我们还给出了对3-/4-round Ascon-XOF和3-round Xoodyak-XOF的第一次前像攻击。

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
> RIPEMD-160散列函数是ISO/IEC标准，与SHA-256一起用于生成比特币地址。尽管MD-SHA散列函数族中的许多散列函数已经被破解，但RIPEMD-160仍然是安全的，最佳碰撞攻击仅能达到80轮中的34轮，该攻击发表于CRYPTO 2019。在本文中，我们提出了一种新的对RIPEMD-160的碰撞攻击，可以达到36轮，时间复杂度为\(2^{64.5}\)。这种新攻击是通过一种新的选择消息差异策略和同时处理两个分支上的差分条件的新技术来实现的。此外，与之前所有关于RIPEMD-160的工作不同，我们利用基于MILP的方法搜索差分特性，我们构建了一个模型来准确描述其轮函数的有符号差异转换。据我们所知，这是针对MD-SHA散列函数族的第一个有符号差异转换模型。实际上，我们设计这个模型的动机是因为许多搜索此类差分特性的自动工具并不公开，并且从头开始实现它们太耗时且困难。因此，我们期望这可以成为未来研究的替代简易工具，只需要写下一些简单的线性不等式。

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
> KECCAK哈希函数在2012年被NIST选为\(\texttt{SHA-3}\)竞赛的获胜者，并在2015年成为NIST的\(\texttt{SHA-3}\)哈希标准。由于\(\texttt{SHA-3}\)在理论和应用中的重要性，对其安全性的分析引起了越来越多的关注。在\(\texttt{SHA-3}\)家族中，\(\texttt{SHA3-512}\)对抗碰撞攻击的能力最强：\(\texttt{SHA3-512}\)的理论攻击仅通过求解多项式系统扩展到四轮，速度比生日攻击快64倍。然而对于\(\texttt{SHA-3}\)实例SHAKE256，我们在文献中没有发现关于碰撞攻击的结果。
> 
> 本文研究了对减轮\(\texttt{SHA-3}\)的碰撞攻击。受Dinur、Dunkelman和Shamir在2013年的工作的启发，我们提出了一种变种的生日攻击，并通过抽象新概念（如差分转移条件和差分条件表）改进了内部差分密码分析。借助这些技术，我们使用条件内部差分开发了对减轮\(\texttt{SHA-3}\)的新碰撞攻击。具体而言，被线性条件约束的初始消息经过前两轮的内部差分，它们进入最后两轮的相应输入根据线性条件的值被划分为不同的子集进行碰撞搜索。结合改进的目标内部差异算法（TIDA），我们获得了对六个\(\texttt{SHA-3}\)函数的5轮以下的碰撞攻击。特别地，对于4轮的\(\texttt{SHA3-512}\)和5轮的\(\texttt{SHAKE256}\)，分别实现了复杂度为\(2^{237}\)和\(2^{185}\)的碰撞攻击。据我们所知，这是对减轮\(\texttt{SHA3-512}\)的最佳碰撞攻击，并且是对减轮\(\texttt{SHAKE256}\)的首次碰撞攻击。

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
> 多方计算（MPC）领域近年来在流行度和使用案例数量上有所增加。在当前艺术水平下，类似于Farfalle的加密函数Ciminion在涉及对称原语的MPC应用中表现最佳。然而，它存在一个关键弱点。它的安全性高度依赖于其子密钥的独立性，而这是通过使用昂贵的密钥编排来实现的。许多涉及对称伪随机函数（PRFs）的MPC使用案例都依赖于秘密共享的对称密钥，因此昂贵的密钥编排也必须在MPC中计算。因此，Ciminion在这些使用案例中的性能显著降低。
> 
> 在本文中，我们解决了这个问题。根据Ciminion的设计者介绍的方法，我们提出了对称密码学中的一种新的原语，称为Megafono。Megafono是一个带密钥可扩展的PRF，将固定长度的输入扩展为任意长度的输出。与Farfalle类似，将初始的密钥置换应用于输入，然后进行扩展层，涉及到密钥密码的并行应用。主要的创新之处在于对中间/内部状态进行“免费”扩展，通过将第一个置换的内部状态的总和附加到其输出中。这种和其他修改的组合，以及攻击者无法访问扩展层输入状态的不可能性，使得Megafono在目标应用中非常高效。
> 
> 作为一个具体的例子，我们提出了PRF Hydra，它是基于Hades策略和Lai-Massey方案的泛化版本的Megafono实例。基于广泛的安全性分析，我们在一个MPC框架中实现了Hydra。结果表明，它优于目前在文献中发布的所有MPC友好的方案。

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
> 我们提出了一种高效技术，称为系数分组法，用于评估在ACM CCS 2022上被接受的FHE友好型密码Chaghri的代数度。发现代数度呈线性增长而非指数增长。因此，我们可以构建一个时间和数据复杂度为\(2^{63}\)的13轮区分器，并进行一个13.5轮的密钥恢复攻击。特别地，对于Chaghri的8轮高阶差分攻击可以在时间和数据复杂度为\(2^{38}\)的情况下实现。这表明完整的8轮远非安全。此外，我们还展示了我们的系数分组技术在安全密码组件设计中的应用。结果发现，相对于原始设计，我们找到了一种适用于Chaghri的防护措施，并且开销很小。由于越来越多的对大有限域定义的对称基元正在出现，我们相信我们的新技术在未来的研究中可以有更多的应用。

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
> 在这篇文章中，我们首次研究了在何种情况下唯一地分解置换-替代网络的轮函数。更具体地说，我们提供了非线性层上分解唯一性的必要和充分条件。我们的研究结果特别暗示了，在使用密码学强度的S盒时，分解确实是唯一的。然后，我们将我们的发现应用于对齐概念，指出先前的定义允许同时具有对齐和未对齐的原始模块。
> 
> 作为第二个结果，我们展示了实验数据，表明对齐可能只有有限的影响。为此，我们比较了密码PRESENT的对齐版本和未对齐版本。

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
> 基于双工的认证加密模式，如果密钥长度足够大，则被证明在生日界限\(2^{\frac{c}{2}}\)内是安全的，其中c是容量。然而，目前并不知道该界限是否严格，基于多重碰撞的最佳通用攻击复杂度要大得多：它达到\(\frac{2^c}{\alpha }\)，其中\(\alpha \)表示一个小的安全损失因子。因此，在这种构造提供的界限\(2^{\frac{c}{2}}\)之外，我们对真正的安全性范围存在不确定性。在本文中，我们描述了一种针对多个基于双工的AEAD模式的新型通用攻击。我们利用随机函数统计数据进行攻击，并在时间复杂度\(\mathcal {O}(2^{\frac{3c}{4}})\)内生成伪造内容，使用可忽略的内存开销和无需加密查询。此外，对于某些基于双工的模式，我们的攻击还以可忽略的计算量恢复了秘密密钥。特别值得注意的是，我们的攻击突破了NIST轻量级竞赛候选方案Xoodyak的安全性声明。这次攻击是为了进一步确定基于双工 constructions 提供的确切安全性而迈出的一步。

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
> 最近的一系列工作突出了上下文承诺安全性的重要性，即要求带有关联数据的认证加密（AEAD）方案在两个不同且对手选择的上下文（密钥、关联数据和随机数）下不会解密相同的对手选择的密文。尽管最近发生了一系列攻击，但关于上下文承诺仍存在许多开放问题；最明显的是，我们对于像CCM、EAX和SIV等重要方案的承诺安全性一无所知。
> 
> 我们解决了这些开放问题，甚至更多。我们的方法是首先引入一个新的框架，帮助我们更精细地定义上下文承诺安全性，以确定上下文的哪些部分受到对手的控制。然后，我们提出了一个新的安全概念，称为上下文可发现性，类似于哈希文献中的前像抗性。我们证明了无限制的上下文承诺安全性（对手控制两个上下文的所有部分）蕴含了一类包含大多数实际使用的方案的上下文可发现性安全性。接着，我们展示了针对一系列AEAD方案的新的上下文发现攻击，包括CCM、EAX、SIV、GCM和OCB3，并且通过我们的一般结果，这给出了针对它们的新的无限制的上下文承诺攻击。
> 
> 最后，我们研究了原始SIV模式的受限上下文承诺安全性情况，之前没有攻击技术适用于该情况（包括我们基于上下文发现的攻击）。然而，我们还是能够使用瓦格纳的k树算法针对广义生日问题提供了一种新的O(2^(n/3))攻击方法。

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
> 现代几乎所有的分组密码都是迭代的。在本文中，我们要问：构建一个安全的迭代分组密码，“非平凡地”需要多少次调用随机函数和置换？
> 
> 当安全性意味着无法与随机置换区分时，即使用1次对公共置换的调用，Even-Mansour方案实现了最佳性。我们寻求对从理想密码中无法区分安全性的概念的理论上最强的安全性，在Maurer等人（TCC 2004）引入并由Coron等人（JoC, 2014）推广。
> 
> 我们提供了第一个一般性的负面结果/下界：当密钥不太短时，使用3次调用的迭代分组密码是不可能（统计上）无法区分的。这证明了Guo等人（Eprint 2016）的4次调用正面结果的最佳性。此外，即使用1或2次调用，即使具有多项式 \(\text {密钥空间}\) 的迭代分组密码也是不可能的。
> 
> 为了证明这一点，我们开发了对理想化迭代分组密码的抽象，并建立了各种基本属性，并应用极值图论结果来证明某些（广义的）非随机属性的存在，如回字和溜溜球。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_14](https://doi.org/10.1007/978-3-031-30634-1_14)
## Optimal Security for Keyed Hash Functions: Avoiding Time-Space Tradeoffs for Finding Collisions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#optimal-security-for-keyed-hash-functions-avoiding-time-space-tradeoffs-for-finding-collisions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#optimal-security-for-keyed-hash-functions-avoiding-time-space-tradeoffs-for-finding-collisions)**
### 作者
* Cody Freitag, Cornell Tech, New York, USA
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, WA, USA
* Ilan Komargodski, School of Computer Science and Engineering, Hebrew University of Jerusalem and NTT Research, 91904, Jerusalem, Israel
### 摘要
> 密码哈希函数将任意大小的数据映射到固定大小的摘要，是最常用的加密对象之一。由于为每个输入大小设计单独的哈希函数是不可行的，因此通过设计和引导一个单个固定输入长度的函数来构建可变输入长度哈希函数，使其看起来足够随机。为了防止微不足道的预处理攻击，应用程序通常不仅需要单个哈希函数，而且需要一组具有键的哈希函数族。
> 
> 从固定理论函数设计可变输入长度哈希函数族的最著名方法是Merkle-Damgård和Sponge设计。前者是SHA-1和SHA-2结构的基础，后者是SHA-3的基础。不幸的是，最近的作品(Coretti等人，EUROCRYPT 2018年，Coretti等人，CRYPTO 2018)显示出找到两者碰撞的非微不足道时间空间折衷攻击。因此，这迫使参数膨胀(即效率损失)，以达到某种期望的安全级别。我们询问是否可以构建一系列键控哈希函数，这些函数对于查找碰撞的任何非微不足道时间空间折衷攻击都可以被证明抵抗，而不会产生显着的效率成本。
> 
> 我们提出了几种新的构造键控哈希函数，这些函数对于查找碰撞的任何非微不足道时间空间折衷攻击都可以被证明抵抗。我们的构造为它们的效率和他们实现碰撞抵抗的最佳安全性所在参数范围之间提供了各种权衡。我们的主要技术贡献是证明将具有固定大小输入的哈希函数转换为具有(可能更大)固定大小输入的键控哈希函数的最佳安全边界。然后，我们使用此键控函数作为标准Merkle-Damgård和Merkle树构造中的基础原语。我们坚信，在这些构造中使用键控内部哈希函数的范例是正确的，并且在本工作之前还没有进行过非统一安全性分析。

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
> 在CRYPTO'03年的研讨会上，Patarin提出了一个对于形式为\(X_i \oplus X_j = \lambda_{i,j}\)的方程组有限域的解\((P_1, \ldots , P_{q}) \in (\{0,1\}^{n})^{q}\)个数下界的猜想。其中要求\(P_1, P_2, \ldots , P_{q}\)必须两两不同。这个结果被称作“任意\(\xi _{\max }\)下的\(P_i \oplus P_j\)定理”，或者通常称之为一般\(\xi _{\max }\)下的镜像理论。后来由Patarin在ICISC'05中证明了该理论。镜像理论对于基于分组密码（甚至是理想置换）的设计提供了高安全性保障的有力工具。然而，这个结果的证明存在着非常棘手的缺陷需要修复。本文中，我们首次给出了广泛范围内的\(\xi _{\max }\)下\(P_i \oplus P_j\)定理的完整证明，通常达到\(O(2^{n/4}/\sqrt{n})\)阶的程度。此外，我们的证明方法通过使用一种名为链路删除方程的新类型方程，使得整个过程更加简化，大致相当于之前工作中所称的橙色方程的一半。作为我们结果的说明，我们还重新审查了两个最优安全基于分组密码的伪随机函数的安全性证明以及六轮费斯妥密码的n位安全性证明，并提供了更新的安全性约束。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_16](https://doi.org/10.1007/978-3-031-30634-1_16)
## Non-adaptive Universal One-Way Hash Functions from Arbitrary One-Way Functions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#non-adaptive-universal-one-way-hash-functions-from-arbitrary-one-way-functions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#non-adaptive-universal-one-way-hash-functions-from-arbitrary-one-way-functions)**
### 作者
* Xinyu Mao, Department of Computer Science, University of Southern California, Los Angeles, USA
* Jiapeng Zhang, Department of Computer Science, University of Southern California, Los Angeles, USA
* Noam Mazor, The Blavatnik School of Computer Science, Tel-Aviv University, Tel-Aviv, Israel
### 摘要
> 在这项研究中，我们首次给出了从任意单向函数构造通用单向哈希函数（UOWHFs）的非自适应方法。我们的构造使用 \(O(n^9)\) 次单向函数调用，具有长度为 \(O(n^{10})\) 的密钥，并且可以在假设底层单向函数在 NC1 中的情况下实现。
> 
> 在这项工作之前，最佳的 UOWHF 构造使用了 \(O(n^{13})\) 次自适应调用和大小为 \(O(n^5)\) 的密钥（Haitner、Holenstein、Reingold、Vadhan 和 Wee [Eurocrypt '10]）。根据 Applebaum、Ishai 和 Kushilevitz [FOCS '04] 的结果，上述结果意味着在存在 NC1 中的单向函数的前提下，存在于 NC0 中的 UOWHF。
> 
> 我们还展示了 Haitner、Reingold 和 Vadhan（HRV，[STOC '10]）的 PRG 构造经过小修改可以产生一种宽松的 UOWHF 的概念，即一种函数族，可以通过改变少量输入上的函数（低效地）转换为 UOWHF。为了分析这个构造，我们引入了下一位无法到达熵的概念，它取代了 HRV 使用的下一位伪熵概念。

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
> 我们提出了一种新的鉴权加密（AE）块密码操作模式，称为\(\textsf{XOCB}\)，具有以下特点：（1）如果最大块长度远小于生日界限，则基于内部块密码的标准伪随机假设，它具有超越生日边界（BBB）安全性，（2）率-1计算，以及（3）支持任何块密码和任何密钥长度。也就是说，\(\textsf{XOCB}\)在没有改变安全模型或\(\textsf{OCB}\)所需基元的情况下，具有与开创性的\(\textsf{OCB}\)相同的效率，同时具有更强的定量安全性。尽管过去进行了许多研究，但我们的\(\textsf{XOCB}\)是第一个同时实现这些多个目标的操作模式。

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
> 猎鹰是NIST标准化选择的三种量子后安全签名方案之一。由于其低带宽和高效率，猎鹰被视为量子安全嵌入式系统的一种有吸引力的选择。在这项工作中，我们通过分析其高斯采样器来研究猎鹰的侧信道抗性。我们的研究结果主要有两个方面。
> 
> 第一个结果是利用Guerreau等人（CHES 2022）研究的基础采样器内泄漏来改进密钥恢复。我们不再像以前的平行四边形学习攻击那样使用第四阶矩，而是使用二阶统计协方差并利用其谱分解来恢复秘密信息。我们的方法大大降低了测量和计算资源的需求：使用22万个迹线足以在半个小时内以约25%的概率恢复猎鹰-512的秘密密钥。相比之下，即使使用100万个迹线，以前的攻击仍需要大约1000小时的CPU时间进行完整密钥恢复的格网约简。此外，我们的方法对于不准确的泄漏分类也具有鲁棒性，这是与平行四边形学习攻击相比的另一个优势。
> 
> 我们的第二个结果是针对猎鹰的整数高斯采样器的实际功耗分析。该分析依赖于整数高斯采样中的随机符号翻转泄漏。这个泄漏在2018年被Kim和Hong揭示，但在猎鹰的实现中没有考虑，也未被用于侧信道分析。我们在ARM Cortex-M4 STM32F407IGT6微处理器上识别了猎鹰参考实现中的泄漏。我们还表明，这个泄漏的单个位足以实现实际密钥恢复：使用17万个迹线，可以在半个小时内完全恢复猎鹰-512的密钥。此外，结合符号泄漏和前面提到的泄漏，只需使用45,000个签名测量即可在短时间内恢复密钥。
> 
> 作为副产品，我们还将我们的功耗分析扩展到了Mitaka，这是猎鹰的一个最新变种。Mitaka的整数高斯采样器中存在相同的泄漏，它们也可以用于进行密钥恢复攻击。然而，与猎鹰相比，Mitaka中的密钥恢复需要更多的迹线，这是由于它们具有不同的格网高斯采样器。

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
> 应用于安全应用程序中的嵌入式设备是物理攻击的自然目标。因此，增强其侧信道抗性是重要的研究挑战。这方面的一个标准解决方案是使用布尔掩蔽方案，因为它们适用于带有高效比特切片表示的当前块密码。布尔掩蔽可以保证在泄漏足够嘈杂（和独立）的情况下，实现的安全性随着份额数量呈指数级增长。不幸的是，已经表明，在低端设备上很难满足这种噪声假设。因此，在本文中，我们研究了一些在几乎完全缺少噪音的情况下掩蔽加密算法的技术，以使其防护能力得以生存。基于Dziembowski等人的种子理论结果，我们提出，在主域上的算术编码可以达到这个目标。我们首先通过模拟信息论分析显示出这些编码所带来的优势（最多6份股票的泄漏）。接着我们提供数据，表明在那些可以进行优化的算术加法器和乘法器的平台上（即大多数MCU和FPGA），执行掩蔽操作时，相较于二进制扩展域，在小到中型Mersenne-素域中不会产生显著的实施开销。我们将这些观察结果编译成一个新的类似AES的块密码，称为AES-prime，它非常适合说明在主域中掩蔽操作的显着优势。我们还通过评估具体软件（ARM Cortex-M3）和硬件（Xilinx Spartan-6）实现，证实了我们发现的实际相关性。我们的实验结果表明，与布尔掩蔽（更一般的说，二进制编码）相比，尽管每个份额泄漏相同数量的信息，但安全增益可以达到数量级差异。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_20](https://doi.org/10.1007/978-3-031-30634-1_20)
## One-Hot Conversion: Towards Faster Table-Based A2B Conversion.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#one-hot-conversion-towards-faster-table-based-a2b-conversion) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#one-hot-conversion-towards-faster-table-based-a2b-conversion)**
### 作者
* Jan-Pieter D’Anvers, imec-COSIC KU Leuven, Kasteelpark Arenberg 10 - bus 2452, 3001, Leuven, Belgium
### 摘要
> 算术到布尔掩码（A2B）转换是格基后量子密码学掩码的关键技术。它也是构建掩码比较的关键部分，这是活动安全格基加密中最难掩码的构建模块之一。我们首先提出了一种新方法，称为独热编码，可以使用Coron等人的高阶表格转换的变体高效地从高阶算术掩码转换为布尔掩码。其次，我们专门将我们的方法用于执行算术到1位布尔函数的转换。我们的单热函数可以应用于掩码格基加密构建模块，例如带掩码的比较或确定算术掩码变量的最高有效位。在Cortex M4处理器上的基准测试中，相对于最先进的基于表格的A2B转换，获得了15倍的速度提升，使基于表格的A2B转换处于布尔电路A2B转换的性能范围内。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_21](https://doi.org/10.1007/978-3-031-30634-1_21)
