# Asiacrypt[2019-1]
## Streamlined Blockchains: A Simple and Elegant Approach (A Tutorial and Survey).
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#streamlined-blockchains-a-simple-and-elegant-approach-a-tutorial-and-survey) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#streamlined-blockchains-a-simple-and-elegant-approach-a-tutorial-and-survey)**
### 作者
* Elaine Shi, Cornell University, Ithaca, USA
### 摘要
> 区块链协议（也称为状态机复制）允许一组节点就交易的不断增长、线性排序的日志达成一致。经典的共识文献提出了两种构建区块链协议的方法：（1）通过合并单次共识实例，通常称为拜占庭协议；以及（2）通过直接构建区块链，在单次共识实例之间没有明确的边界。虽然在概念上很简单，但前者的方法在实际实现中无法进行实例间的交叉优化。这或许可以解释为什么后一种方法在实践中得到了更多的关注：特别是知名协议如Paxos和PBFT都遵循直接构建的方法。
> 
> 在本教程中，我们提出了一种称为“简化区块链”的新范式，用于直接构建区块链协议。这种范式使得一类极其简单和自然的协议得以实现：每个时期，一个提议者提出一个从已确认的父链延伸的块，并且节点对提议的父链是否不为空进行投票。当一个块获得投票时，它就被确认。当一个节点观察到末尾有连续时期的已确认链时，那么从末尾截断块的整个链就是最终的。
> 
> 通过改变在中强调的参数，我们分别阐述了部分同步和同步环境下的两个变体。我们给出了非常简单的一致性和活性的证明。我们希望本教程能够提供一个引人注目的论据，说明这一新的协议家族应该在实际实现和教学目的上取代经典的候选协议（如PBFT、Paxos及其变种）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_1](https://doi.org/10.1007/978-3-030-34578-5_1)
## Wave: A New Family of Trapdoor One-Way Preimage Sampleable Functions Based on Codes.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#wave-a-new-family-of-trapdoor-one-way-preimage-sampleable-functions-based-on-codes) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#wave-a-new-family-of-trapdoor-one-way-preimage-sampleable-functions-based-on-codes)**
### 作者
* Thomas Debris-Alazard, Sorbonne Université, Collège Doctoral, 75005, Paris, France
* Thomas Debris-Alazard, Inria, Paris, France
* Nicolas Sendrier, Inria, Paris, France
* Jean-Pierre Tillich, Inria, Paris, France
### 摘要
> 我们在这里介绍了一种基于代码的新型陷阱单向函数家族，即Wave-PSA家族，它具有平均预像可取样性（PSA）。根据两种计算假设，陷阱函数在两个计算假设下是单向的：高权重的一般解码的难度和广义\((U, U+V)\)码的不可区分性。我们的证明遵循GPV策略[28]。通过包括拒绝取样，我们确保陷阱逆输出的适当分布。我们的家族的域取样属性是通过使用和证明剩余哈希引理的一个变体来保证的。我们使用三元广义\((U, U+V)\)码实例化新的Wave-PSA家族，设计了一个在随机预言者模型中实现存在性不可伪造性的“哈希和签名”签名方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_2](https://doi.org/10.1007/978-3-030-34578-5_2)
## Middle-Product Learning with Rounding Problem and Its Applications.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#middle-product-learning-with-rounding-problem-and-its-applications) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#middle-product-learning-with-rounding-problem-and-its-applications)**
### 作者
* Shi Bai, Department of Mathematical Sciences, Florida Atlantic University, Boca Raton, USA
* Katharina Boudgoust, Univ Rennes, CNRS, IRISA, Rennes, France
* Adeline Roux-Langlois, Univ Rennes, CNRS, IRISA, Rennes, France
* Weiqiang Wen, Univ Rennes, CNRS, IRISA, Rennes, France
* Dipayan Das, Department of Mathematics, National Institute of Technology, Durgapur, India
* Zhenfei Zhang, Algorand, Boston, USA
### 摘要
> 在CRYPTO 2017中，Roşca等人介绍了一种新型的Learning With Errors（LWE）问题变体，称为Middle-Product LWE（MP-LWE）。这个新假设的难度是基于多项式LWE（P-LWE）问题的困难程度，该问题参数化了一组多项式，使其相对于单个定义多项式的可能弱点更加安全。作为密码学应用，他们还提供了一个基于MP-LWE问题的加密方案。在本文中，我们提出了他们加密方案的确定性变体，不需要高斯抽样，因此比原始的方案更简单。但是，它具有相同的准最优渐近密钥和密文大小。实现这一目标的主要要素是学习与舍入（LWR）问题，该问题已经被用于去随机化LWE类型的加密方法。我们方案的难度基于一个称为Middle-Product Computational Learning With Rounding的新假设，这是Chen等人在ASIACRYPT 2018中引入的一个关于环上计算LWR问题的改编。我们证明了这个新假设和MP-LWE的决策版本一样困难，因此能够从最坏情况到平均情况的困难性保证中受益。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_3](https://doi.org/10.1007/978-3-030-34578-5_3)
## A Novel CCA Attack Using Decryption Errors Against LAC.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#a-novel-cca-attack-using-decryption-errors-against-lac) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#a-novel-cca-attack-using-decryption-errors-against-lac)**
### 作者
* Qian Guo, Department of Informatics, University of Bergen, Box 7803, 5020, Bergen, Norway
* Qian Guo, Department of Electrical and Information Technology, Lund University, P.O. Box 118, 221 00, Lund, Sweden
* Thomas Johansson, Department of Electrical and Information Technology, Lund University, P.O. Box 118, 221 00, Lund, Sweden
* Jing Yang, Department of Electrical and Information Technology, Lund University, P.O. Box 118, 221 00, Lund, Sweden
### 摘要
> 基于学习错误或相关问题的加密系统是最近密码学研究的中心议题。NIST后量子密码标准化工作的主要见证人之一是这方面的提案。许多提交的提案都依赖于与学习错误相关的问题。这些方案通常包括存在解密错误的可能性，但概率非常小。它们中的一些在每个坐标上具有稍大的误差概率，但使用纠错码来消除错误。在本文中，我们提出并讨论了一种基于产生解密错误的攻击方法，用于使用纠错码的方案的秘密密钥恢复。特别地，我们展示了对LAC方案的攻击，这是一项已进入第二轮的向NIST后量子密码标准化提出的提案。
> 
> 在具有CCA安全性的标准设置下，该攻击首先包括预计算特殊消息及其相应的错误向量。这组消息被提交进行解密，并观察到一些解密错误。在统计分析步骤中，处理导致解密错误的这些向量，结果会显露秘密密钥。该攻击仅适用于秘密密钥的一部分。具体而言，在LAC256方案中，即实现256位经典安全级别的版本中，如果不考虑预计算成本为\(2^{162}\)，我们可以在约\(2^{64}\)个公钥中以\(2^{79}\)的复杂度恢复一个密钥。我们还展示了攻击更可能的密钥的可能性（例如概率为\(2^{-16}\)）。此攻击通过广泛模拟得到验证。
> 
> 我们进一步将此攻击应用于LAC256-v2，这是NIST PQ项目第2轮的新版本LAC256，并获得了一个具有稍微增加预计算复杂度（从\(2^{162}\)到\(2^{171}\)）的多目标攻击。也可以解释此攻击为单键设置下的攻击，其预计算复杂度为\(2^{171}\)，成功概率为\(2^{-64}\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_4](https://doi.org/10.1007/978-3-030-34578-5_4)
## Towards Attribute-Based Encryption for RAMs from LWE: Sub-linear Decryption, and More.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#towards-attribute-based-encryption-for-rams-from-lwe-sub-linear-decryption-and-more) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#towards-attribute-based-encryption-for-rams-from-lwe-sub-linear-decryption-and-more)**
### 作者
* Prabhanjan Ananth, MIT CASIL, Boston, MA, USA
* Xiong Fan, Cornell University, Ithaca, NY, USA
* Elaine Shi, Cornell University, Ithaca, NY, USA
### 摘要
> 属性基加密（ABE）是一种先进的加密系统，具有内置机制，可以生成与功能相关联的密钥，并为加密数据提供受限访问。大多数已知的属性基加密候选者将功能建模为电路。这导致了显着的效率瓶颈，特别是在与 ABE 密钥相关联的功能用随机访问机器（RAM）和数据库的情况下，其中 RAM 程序的运行时在数据库大小上是次线性的。在这项工作中，我们研究了随机访问机器（RAM）的属性基加密概念，这是由 Goldwasser、Kalai、Popa、Vaikuntanathan 和 Zeldovich 在 Crypto 2013 中提出的。我们提出了满足次线性解密复杂性要求的 RAM 的属性基加密构建，假设基于学习和错误。这是基于标准假设的第一次构建。之前，Goldwasser 等人基于不可伪造的知识假设实现了这一结果。我们还考虑了 RAM 的属性基加密的双重概念，其中数据库在密文中，我们展示了如何实现这种双重概念，尽管具有较大的属性密钥，也是基于学习和错误。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_5](https://doi.org/10.1007/978-3-030-34578-5_5)
## 4-Round Luby-Rackoff Construction is a qPRP.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#4-round-luby-rackoff-construction-is-a-qprp) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#4-round-luby-rackoff-construction-is-a-qprp)**
### 作者
* Akinori Hosoyamada, NTT Secure Platform Laboratories, Tokyo, Japan
* Akinori Hosoyamada, Nagoya University, Nagoya, Japan
* Tetsu Iwata, Nagoya University, Nagoya, Japan
### 摘要
> Luby-Rackoff结构或菲斯特结构是构建安全块密码的最重要方法之一，它使用安全伪随机函数。 经典设置中已证明3轮和4轮的Luby-Rackoff结构分别对抗选择明文攻击（CPAs）和选择密文攻击（CCAs）是安全的。 然而，Kuwakado和Morii表明，量子叠加选择明文攻击（qCPA）可以在多项式时间内将3轮Luby-Rackoff结构与随机置换区分开。 此外，伊藤等人最近展示了一种量子叠加的选择密文攻击（qCCA），可以区分4轮Luby-Rackoff的结构。自从Kuwakado和Morii展示了结果以来，一个非常感兴趣的问题是有多少轮足以实现针对量子查询攻击的可证明安全性。本文通过展示四轮足以对抗qCPA来回答这个根本性问题。具体而言，我们证明了四轮Luby-Rackoff结构可以在\(O(2^{n/12})\)量子查询范围内得到保护。 我们还通过显示具有\(O(2^{n/6})\)量子查询的qCPA来给出从随机置换区分4轮Luby-Rackoff结构的请求上限。 我们的结果首次证明了典型块密码构造针对量子查询攻击的安全性，而不需要任何代数假设。为了提供安全证明，我们使用Zhandry的压缩oracle技术的替代形式化方式。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_6](https://doi.org/10.1007/978-3-030-34578-5_6)
## Indifferentiability of Truncated Random Permutations.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#indifferentiability-of-truncated-random-permutations) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#indifferentiability-of-truncated-random-permutations)**
### 作者
* Wonseok Choi, KAIST, Daejeon, Korea
* Byeonghak Lee, KAIST, Daejeon, Korea
* Jooyoung Lee, KAIST, Daejeon, Korea
### 摘要
> 从伪随机置换构造伪随机函数的一种自然方法是简单地截断置换的输出。当 n 是排列大小，m 是被截断的位数时，所得到的构造被认为在\(2^{{n+m}\over 2}\)次查询中无法与随机函数区分开，这是紧密的。
> 
> 在本文中，我们研究了在输入之前附加一个固定前缀的截断随机排列的无差别性。我们证明这个构造在最多\(\min \{2^{{n+m}\over 3}, 2^{m}, 2^\ell \}\)次查询中(通常）与公开的随机函数不可区分，而在最多\(\min \{ \max \{2^{{n+m}\over 3}, 2^{n \over 2}\}, 2^\ell \}\)次查询中，它是公开不可区分的，其中\(\ell \)是固定前缀的大小。此外，当\(m+\ell \ll n\)时，我们的结果在证明 一般不可区分性限度时被认为是严格的。
> 
> 我们的结果显著改进了Dodis等人(FSE 2009)给出的\(\min \{ 2^{m \over 2}, 2^\ell \}\)的先前限度，这使我们能够构造一个\(\frac{n}{2}\)到\(\frac{n}{2}\)位的随机函数，只需调用一次n位的排列，从而实现\(\frac{n}{2}\)位安全。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_7](https://doi.org/10.1007/978-3-030-34578-5_7)
## Anomalies and Vector Space Search: Tools for S-Box Analysis.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#anomalies-and-vector-space-search-tools-for-s-box-analysis) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#anomalies-and-vector-space-search-tools-for-s-box-analysis)**
### 作者
* Xavier Bonnetain, Inria, Paris, France
* Léo Perrin, Inria, Paris, France
* Shizhu Tian, Inria, Paris, France
* Xavier Bonnetain, Collège Doctoral, Sorbonne Université, Paris, France
* Shizhu Tian, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Shizhu Tian, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> S-boxes是带有输入的函数，输入如此之小，以至于指定它们的最简单方法是它们的查找表（LUT）。我们如何量化特定S-box的行为与随机选择的S-box之间的差异？
> 
> 为了回答这个问题，我们引入了各种“异常”。这些实数是如此的，以至于具有异常等于a的属性应当大约在\(2^{a}\)个随机S-box组合中发现一次。首先，我们基于差分分布表、线性逼近表的分布以及首次引入的回形连接表来提供统计异常。
> 
> 然后，我们计算具有类似分组密码结构的S-box的数量，以估计与这些结构相关的异常。为了恢复这些结构，我们展示了将S-box分解为有效列出给定维度的向量空间的通用工具，我们提出了这样的算法。
> 
> 结合这些方法，我们得出结论，实际上被随机选择的所有排列始终具有基本相同的加密特性和结构缺乏。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_8](https://doi.org/10.1007/978-3-030-34578-5_8)
## CSI-FiSh: Efficient Isogeny Based Signatures Through Class Group Computations.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#csi-fish-efficient-isogeny-based-signatures-through-class-group-computations) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#csi-fish-efficient-isogeny-based-signatures-through-class-group-computations)**
### 作者
* Ward Beullens, imec-COSIC, ESAT, KU Leuven, Leuven, Belgium
* Frederik Vercauteren, imec-COSIC, ESAT, KU Leuven, Leuven, Belgium
* Thorsten Kleinjung, EPFL IC LACAL, Station 14, 1015, Lausanne, Switzerland
### 摘要
> 在本文中，我们报道了一个具有154位数判别因子的虚二次域的新纪录类群计算，超过了之前130位数的记录。该类群对于基于CSIDH-512同源密码系统非常重要，了解类群结构和关系格意味着可以进行高效的均匀抽样并对其元素进行规范表示。在以前是不可能实现的这两个操作使我们能够首次根据Stolbunov的草图实例化同源基签名方案。我们还利用多个公钥和Merkle树优化了这个方案，这是De Feo和Galbraith的一个想法。我们还证明，包含二次扭曲可以免费将公钥大小减半。优化签名大小后，我们的实现需要390毫秒来完成签名/验证，并且生成的签名为263字节，代价是较大的公钥。与相同参数集的SeaSign优化版本相比，这快了300倍，尺寸更小了3倍以上。综合考虑公钥和签名大小的优化，总共的尺寸是1468字节，在128位安全级别下比任何其他后量子签名方案都要小。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_9](https://doi.org/10.1007/978-3-030-34578-5_9)
## Verifiable Delay Functions from Supersingular Isogenies and Pairings.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#verifiable-delay-functions-from-supersingular-isogenies-and-pairings) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#verifiable-delay-functions-from-supersingular-isogenies-and-pairings)**
### 作者
* Luca De Feo, Université Paris Saclay – UVSQ, LMV, CNRS UMR 8100, Versailles, France
* Simon Masson, Thales and Université de Lorraine, Nancy, France
* Christophe Petit, University of Birmingham, Birmingham, UK
* Antonio Sanso, Adobe Inc. and Ruhr Universität Bochum, Bochum, Germany
### 摘要
> 我们提出了两种基于椭圆曲线密码学假设的可验证延迟函数（VDF）。我们讨论了我们构建的优点和缺点，研究了它们的安全性，并通过一个概念验证的实现来证明它们的实用性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_10](https://doi.org/10.1007/978-3-030-34578-5_10)
## Strongly Secure Authenticated Key Exchange from Supersingular Isogenies.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#strongly-secure-authenticated-key-exchange-from-supersingular-isogenies) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#strongly-secure-authenticated-key-exchange-from-supersingular-isogenies)**
### 作者
* Xiu Xu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Haiyang Xue, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Kunpeng Wang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Song Tian, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Xiu Xu, Data Assurance and Communications Security Research Center, Beijing, China
* Haiyang Xue, Data Assurance and Communications Security Research Center, Beijing, China
* Kunpeng Wang, Data Assurance and Communications Security Research Center, Beijing, China
* Song Tian, Data Assurance and Communications Security Research Center, Beijing, China
* Haiyang Xue, The Hong Kong Polytechnic University, Hung Hom, Hong Kong
* Man Ho Au, The Hong Kong Polytechnic University, Hung Hom, Hong Kong
* Xiu Xu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Kunpeng Wang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 本论文旨在解决加尔布雷斯（Galbraith）在2018年提出的一个开放问题，即找到设计和证明超奇异同源密码的认证密钥交换（AKE）协议对尽可能广泛的敌意攻击具有安全性的新技术。具体而言，我们提出了两个基于超奇异同源密码环境下双密钥公钥加密（PKE）的AKE协议，按照CK+安全模型的定义是安全的。我们的贡献总结如下：首先，我们提出了一种强OW-CPA安全的PKE，称为2PKE_sidh，基于SI-DDH假设。通过应用改进的Fujisaki-Okamoto变换，我们得到了一种[OW-CCA，OW-CPA]安全的KEM，称为2KEM_sidh。其次，我们提出了一种基于SI-DDH假设的双通道AKE——SIAKE_2，使用2KEM_sidh作为构建模块。第三，我们提出了一个修改版的2KEM_sidh，它在1-Oracle SI-DH假设下具有泄露安全性。利用修改后的2KEM_sidh作为构建模块，我们提出了一个基于1-Oracle SI-DH假设的三通道AKE——SIAKE_3。最后，我们证明了SIAKE_2和SIAKE_3在随机预言模型下都是CK+安全的，且支持任意注册。我们还提供了一个实现以说明我们方案的效率。我们的方案与现有的同源密码AKE相比表现出色。据我们所知，它们是首个同时提供对任意注册、wPFS、KCI和MEX的安全性的方案。就效率而言，我们的方案在带宽和CPU周期计数方面都优于现有方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_11](https://doi.org/10.1007/978-3-030-34578-5_11)
## Dual-Mode NIZKs from Obfuscation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#dual-mode-nizks-from-obfuscation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#dual-mode-nizks-from-obfuscation)**
### 作者
* Dennis Hofheinz, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Bogdan Ursu, Karlsruhe Institute of Technology, Karlsruhe, Germany
### 摘要
> 非交互式零知识（NIZK）方案的两个标准安全性属性是声音和零知识。但是，虽然标准NIZK系统只能针对无界对手提供这些属性中的一个，双模式NIZK系统允许动态和自适应地选择其中一个属性无条件成立。已知的双模NIZK方案仅有Groth-Sahai证明（在各种应用中证明极为有用）和Canetti等人以及Peikert等人的基于FHE的NIZK构造。但是，所有这些构造都依赖于特定的代数设置。
> 
> 在这里，我们提供了一个适用于NP所有的双模NIZK系统的通用构造。我们方案的公共参数可以以两种不可区分的方式设置。一种提供无条件的声音，而另一种提供无条件的零知识。我们的方案依赖于亚指数级安全的不可区分混淆和亚指数级安全的单向函数，但除此之外，还依赖于相对温和和通用的计算假设。这些通用假设可以在DDH、\(k\)-LIN、DCR或QR假设中的任意一个下实例化。
> 
> 作为一个应用，我们减少了几种最近基于混淆构造的多线性映射所需的假设。结合之前的工作，我们的方案可以用于从混淆和满足强Diffie-Hellman假设的群构造多线性映射。我们还相信我们的工作有助于理解NIZK系统的构造，因为它提供了一种在概念上实现双模式属性的全新方式。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_12](https://doi.org/10.1007/978-3-030-34578-5_12)
## Output Compression, MPC, and iO for Turing Machines.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#output-compression-mpc-and-io-for-turing-machines) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#output-compression-mpc-and-io-for-turing-machines)**
### 作者
* Saikrishna Badrinarayanan, UCLA, Los Angeles, USA
* Rex Fernando, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Venkata Koppula, Weizmann Institute of Science, Rehovot, Israel
* Brent Waters, UT Austin and NTT Research, Austin, USA
### 摘要
> 在这项工作中，我们研究了在共享随机性模型中对图灵机进行输出压缩的随机编码的迷人概念。在这个模型中，编码器和解码器都可以访问共享的随机字符串，并且效率要求是编码的大小必须独立于给定输入上的图灵机的运行时间和输出长度，而共享的随机字符串的长度可以随输出的长度增长。我们展示了如何在共享随机性模型中构建图灵机的输出压缩随机编码，假设电路的iO和集合\({LWE, DDH, N^{th} Residuosity}\)中的任何假设。
> 
> 然后，我们展示了上述结果对安全多方计算（MPC）和不可区分性混淆（iO）领域基本可行性问题的有趣应用：
> 
> 1. 随机预言机模型中的紧凑型图灵机MPC。在MPC的上下文中，我们考虑以下基本可行性问题：是否存在一种对于图灵机的恶意安全MPC协议，其通信复杂度独立于所有参与方联合输入上的图灵机的运行时间和输出长度？我们称这样的协议为紧凑型MPC协议。Hubácek和Wichs [HW15]通过不可压缩性论证表明，即使对于电路的限制设置而言，在通信复杂度独立于输出长度的明文模型中构建恶意安全的双方计算协议是不可能的。在这项工作中，我们展示了如何通过将明文模型中的任何（非紧凑型）MPC协议编译为随机预言机模型中的图灵机紧凑型MPC协议来规避这个不可能性，前提是在共享随机性模型中存在输出压缩的随机编码。
> 
> 2.共享随机性模型中的简明iO图灵机。在所有现有的图灵机iO构造中，混淆程序的大小都随着输入长度的限制增长。在这项工作中，我们展示了如何在共享随机性模型中构建一个图灵机的iO方案，其中混淆程序的大小独立于输入长度的限制，假设电路的iO和集合\({LWE, DDH, N^{th} Residuosity}\)中的任何假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_13](https://doi.org/10.1007/978-3-030-34578-5_13)
## Collusion Resistant Watermarking Schemes for Cryptographic Functionalities.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#collusion-resistant-watermarking-schemes-for-cryptographic-functionalities) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#collusion-resistant-watermarking-schemes-for-cryptographic-functionalities)**
### 作者
* Rupeng Yang, School of Computer Science and Technology, Shandong University, Jinan, 250101, China
* Rupeng Yang, Department of Computing, The Hong Kong Polytechnic University, Hung Hom, Hong Kong, China
* Man Ho Au, Department of Computing, The Hong Kong Polytechnic University, Hung Hom, Hong Kong, China
* Zuoxia Yu, Department of Computing, The Hong Kong Polytechnic University, Hung Hom, Hong Kong, China
* Junzuo Lai, College of Information Science and Technology, Jinan University, Guangzhou, 510632, China
* Qiuliang Xu, School of Software, Shandong University, Jinan, 250101, China
### 摘要
> 一个加密水印方案将消息嵌入到程序中，同时保持其功能。最近，已提出了许多水印方案，它们在已标记的程序上试图移除嵌入的消息会大幅改变其功能，被证明是安全的。
> 
> 在本文中，我们正式开始研究用于水印方案的合谋攻击，攻击者的目标是在拥有同一程序的多个副本中移除嵌入的消息。这是由实际情况而启发的，一个程序可能会被多次标记上不同的消息。
> 
> 我们的工作结果有两个方面。首先，我们检查现有的加密水印方案，并观察到它们都容易受到合谋攻击。其次，我们构建了针对各种加密功能（例如，伪随机函数评估、解密等）的抵抗合谋攻击的水印方案。为了实现第二个结果，我们提出了一种称为可穿孔功能加密方案的新原语，这可能具有独立的研究价值。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_14](https://doi.org/10.1007/978-3-030-34578-5_14)
## Valiant's Universal Circuits Revisited: An Overall Improvement and a Lower Bound.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#valiants-universal-circuits-revisited-an-overall-improvement-and-a-lower-bound) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#valiants-universal-circuits-revisited-an-overall-improvement-and-a-lower-bound)**
### 作者
* Shuoyao Zhao, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Hanlin Liu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Jiang Zhang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shuoyao Zhao, PlatON co., Limited, Hong Kong SAR, China
### 摘要
> 通用电路（UC）是一种通用电路，可以模拟任意电路（最大大小n）。在1976年的STOC会议上，Valiant提出了一种基于图论的方法来构建UC，其中UC由边通用图（EUG）表示，并使用专用图形对象（称为超级节点）进行递归构造。作为主要的结果，Valiant构造了一个大小为19的4路超级节点和一个大小为4.75nlogn（省略较小项）的EUG，即使在四十多年后，仍然是迄今为止最高效的大小（经过了4个多十年）。
> 
> 受到UC在各种隐私保护计算场景中新兴应用的推动，我们重新审视了Valiant的通用电路，并提出了一个大小为18的4路超级节点和一个大小为4.5nlogn的EUG。正如我们实现的那样，我们通常将通用电路的大小（和AND门的数量）减少了超过5％，因此相应地提高了基于UC的加密应用的效率。我们设计最佳超级节点的方法是计算机辅助的（而不是像以前的工作一样手工完成），这可能是独立利益。作为补充，我们对Valiant框架中EUG和UC的大小给出了下限，这显着改进了UC大小的通用下限，从而缩小了通用电路理论和实践之间的差距。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_15](https://doi.org/10.1007/978-3-030-34578-5_15)
## The Broadcast Message Complexity of Secure Multiparty Computation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#the-broadcast-message-complexity-of-secure-multiparty-computation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#the-broadcast-message-complexity-of-secure-multiparty-computation)**
### 作者
* Sanjam Garg, University of California, Berkeley, USA
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
### 摘要
> 我们研究了安全多方计算（MPC）中的广播消息复杂度，也就是在通信的广播模型中，为安全计算任何功能所需的消息总数。
> 
> MPC协议传统上是在同时广播模型中设计的，其中每一轮都包括每个参与方向其他参与方广播一条消息。我们表明这种通信方式是次优的；具体来说，通过消除同时性，实际上可以降低MPC的广播消息复杂度。
> 
> 更具体地说，我们建立了n方MPC中广播消息复杂度的严格下限和上限，对于每个\(t<n\)的腐败阈值，在明文模型和常见设置模型中都是如此。例如，我们的结果显示，半诚实MPC的最佳广播消息复杂度可以远低于2n，但必须至少需要三轮通信。我们还将我们的结果扩展到恶意设置模型中。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_16](https://doi.org/10.1007/978-3-030-34578-5_16)
## Beyond Honest Majority: The Round Complexity of Fair and Robust Multi-party Computation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#beyond-honest-majority-the-round-complexity-of-fair-and-robust-multi-party-computation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#beyond-honest-majority-the-round-complexity-of-fair-and-robust-multi-party-computation)**
### 作者
* Arpita Patra, Indian Institute of Science, Bengaluru, India
* Divya Ravi, Indian Institute of Science, Bengaluru, India
### 摘要
> 多方计算（MPC）协议最受追捧的两个特性是公平性和确保输出交付（GOD），后者也被称为鲁棒性。然而，要实现这两个特性，就需要满足恶意少数方面的必要要求。在一般化的对抗环境中，对手可以主动和被动地进行破坏，n方公平或鲁棒协议的必要条件为\(t_a + t_p < n\)，其中\(t_a, t_p\)分别表示主动破坏和被动破坏的阈值，后者包含前者。将恶意少数方作为边界特殊情况的代表，这种情况被称为动态破坏，会为对手开启一系列可能的破坏场景。动态破坏包括了从\((\lceil \frac{n}{2} \rceil - 1, \lfloor n/2 \rfloor )\)到\((0,n-1)\)的所有\((t_a, t_p)\)阈值范围，而边界破坏则仅限于\((\lceil \frac{n}{2} \rceil - 1, \lfloor n/2 \rfloor )\)和\((0,n-1)\)的边界情况。值得注意的是，这两种破坏设置都赋予了对手控制大多数参与方的能力，同时确保主动破坏数量永远不会超过\(\lceil \frac{n}{2} \rceil - 1\)。我们的目标是针对动态和边界对手容忍公平和鲁棒的MPC的回合复杂度。结果表明，要实现动态破坏条件下的公平和鲁棒MPC，至少需要\(\lceil n/2 \rceil + 1\)轮回合。动态破坏带来的非常数障碍可以在边界对手情况下克服。在公平和GOD协议方面，3 和 4 轮回合分别是必需的且足够的，其中后者在存在单个主动破坏时允许 3 轮协议。虽然我们所有的下界都假设存在成对私人和广播信道，并且对存在公共（CRS）和私有（PKI）安装具有弹性，但我们的上界仅适用于广播信道，并只考虑公共安装。相比于动态和边界设置，传统而受欢迎的恶意少数方案在公共和私有安装环境下，无论公平还是GOD协议，都需要分别进行 3 轮和 2 轮处理。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_17](https://doi.org/10.1007/978-3-030-34578-5_17)
## Card-Based Cryptography Meets Formal Verification.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#card-based-cryptography-meets-formal-verification) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#card-based-cryptography-meets-formal-verification)**
### 作者
* Alexander Koch, Karlsruhe Institute of Technology (KIT), Karlsruhe, Germany
* Michael Schrempp, Karlsruhe Institute of Technology (KIT), Karlsruhe, Germany
* Michael Kirsten, Karlsruhe Institute of Technology (KIT), Karlsruhe, Germany
### 摘要
> 基于卡片的密码学为使用一副牌进行安全多方计算（MPC）提供了简单实用的协议。为了简单起见，通常使用只有两个符号（例如，和）的卡片进行操作。在本文中，我们针对的情境是所有卡片都带有不同的符号，适用于常见的标准牌组和较弱的不可区分性假设。目前，文献中仅提供了三种协议，没有关于卡片数量的非平凡下限证明。由于在处理非常大的组合状态空间时涉及到复杂的证明（容易出错），我们提出使用形式验证来寻找协议并证明下限。在本文中，我们采用软件有界模型检查（SBMC）技术，将问题简化为有界状态空间，并利用后端的SAT求解器进行详尽的自动搜索。
> 
> 我们的贡献有两个方面：（a）我们确定了两种在具有重叠基数的不同位编码之间进行转换的协议，并证明它们是卡片最小化的。这完善了关于运行时行为和洗牌特性的转换协议的卡片数量的严格下限。对于计算，我们证明不存在使用四张带有可区分符号和固定输出编码的卡片的有限运行时协议，并给出了一种仅使用随机切割的四卡协议，具有有限的预期运行时间。（b）我们提供了一般的下限证明转换到有界模型检查框架的方法，以自动寻找卡片和长度最小的协议，并对下限提供额外的置信度。我们将此应用于验证我们的方法，并作为一个示例，确认我们的新协议在使用这些数量的卡片的协议中具有最短的运行时间。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_18](https://doi.org/10.1007/978-3-030-34578-5_18)
## Quantum Algorithms for the Approximate k-List Problem and Their Application to Lattice Sieving.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#quantum-algorithms-for-the-approximate-k-list-problem-and-their-application-to-lattice-sieving) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#quantum-algorithms-for-the-approximate-k-list-problem-and-their-application-to-lattice-sieving)**
### 作者
* Elena Kirshanova, I. Kant Baltic Federal University, Kaliningrad, Russia
* Erik Mårtensson, Department of Electrical and Information Technology, Lund University, Lund, Sweden
* Eamonn W. Postlethwaite, Information Security Group, Royal Holloway, University of London, Egham, UK
* Subhayan Roy Moulik, Department of Computer Science, University of Oxford, Oxford, UK
### 摘要
> 最短向量问题（SVP）是基于格的密码学的数学基础之一。格筛算法是解决SVP问题的主要方法之一。已知的渐近最快的经典和量子筛算法在d维格中以\(2^{\mathsf {c}d + o(d)}\)时间步骤和\(2^{\mathsf {c}' d + o(d)}\)内存解决SVP问题，其中\(c, c'\)为常数。本文提出了多种交换计算步骤和内存的量子筛算法。
> 
> 首先，在量子随机存取内存（QRAM）模型中给出了经典k-Sieve算法的量子类比，使用\(2^{0.2989d + o(d)}\)时间步骤和\(2^{0.1395d + o(d)}\)内存启发式地解决SVP问题。这与现有的算法[Laarhoven, Ph.D Thesis, 2015]相比，在相同的模型中，该算法以\(2^{0.2653d + o(d)}\)时间步骤和内存解决SVP问题。在QRAM模型中，这些算法可以使用\(\mathrm {poly}(d)\)宽度的量子电路实现。
> 
> 其次，我们将k-Sieve问题转化为图中的k-团清单问题，并应用量子k-团查找技术来解决k-Sieve问题。
> 
> 最后，通过将并行量子搜索[Beals et al., Proc. Roy. Soc. A’13]应用于2-Sieve来探索大规模量子存储器的情况，并在量子电路模型中进行分析。我们展示了如何使用\(2^{0.1037d + o(d)}\)时间步骤和\(2^{0.2075d + o(d)}\)量子内存解决SVP问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_19](https://doi.org/10.1007/978-3-030-34578-5_19)
## Quantum Attacks Without Superposition Queries: The Offline Simon's Algorithm.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#quantum-attacks-without-superposition-queries-the-offline-simons-algorithm) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#quantum-attacks-without-superposition-queries-the-offline-simons-algorithm)**
### 作者
* Xavier Bonnetain, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
* André Schrottenloher, Inria, Paris, France
* Akinori Hosoyamada, NTT Secure Platform Laboratories, Tokyo, Japan
* Yu Sasaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Xavier Bonnetain, Collège Doctoral, Sorbonne Université, 75005, Paris, France
* Akinori Hosoyamada, Nagoya University, Nagoya, Japan
### 摘要
> 在对称密码分析中，叠加查询模型带来了令人惊讶的结果，许多构造由于Simon的周期查找算法能够在多项式时间内被破解。但这些攻击的实际影响仍然模糊不清。相比之下，目前对于只进行经典查询的量子对手所获得的结果则不那么令人印象深刻。
> 
> 本文介绍了一种新的量子算法，它以一种新颖的方式利用了Simon的子例程。我们成功地利用了密码系统的代数结构，在限制为经典查询和离线量子计算的量子攻击者背景下进行研究。相对于现有文献，我们获得了改进的量子时间/经典数据折衷结果，同时只使用了与标准的Grover算法 exhaustive search 相同数量的硬件要求（量子和经典）。特别是，我们能够在量子时间 \(\tilde{O}(2^{n/3})\) 内破解 Even-Mansour 构造，仅需 \(O(2^{n/3})\) 经典查询和仅需 \(O(n^2)\) 量子比特。此外，通过将数据复杂性从指数级降低到多项式级，我们改进了一些先前的叠加攻击，但时间复杂度相同。
> 
> 我们的方法可以从两个互补的角度看待：在使用Grover算法进行搜索的过程中重复使用叠加查询，或者基于碰撞搜索的某些量子攻击中消除内存需求，都依赖于它们的代数结构。
> 
> 我们提供了一系列密码应用示例，包括 Even-Mansour 构造、FX 构造、一些海棉认证模式以及其他许多应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_20](https://doi.org/10.1007/978-3-030-34578-5_20)
## Quantum Random Oracle Model with Auxiliary Input.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#quantum-random-oracle-model-with-auxiliary-input) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#quantum-random-oracle-model-with-auxiliary-input)**
### 作者
* Minki Hhan, Seoul National University, Seoul, Republic of Korea
* Keita Xagawa, NTT Secure Platform Laboratories, 3-9-11, Midori-cho Musashino-shi, Tokyo, 180-8585, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, 3-9-11, Midori-cho Musashino-shi, Tokyo, 180-8585, Japan
### 摘要
> 随机预言机模型（ROM）是一种理想化模型，其中哈希函数被建模为只能作为预言机访问的随机函数。尽管ROM已被用于证明许多密码方案，但其存在（至少）两个问题。首先，ROM无法捕捉量子对手的攻击。其次，它无法捕捉执行预处理的非均匀对手的攻击。为了解决这些问题，Boneh等人（Asiacrypt'11）提议使用量子ROM（QROM）来论证抗量子安全性，而Unruh（CRYPTO'07）提出了附加输入的ROM（ROM-AI）来论证抵抗预处理攻击的安全性。然而，据我们所知，还没有研究同时处理上述两个问题的工作。
> 
> 在本文中，我们考虑一种称为带（经典）附加输入的QROM（QROM-AI）的模型，该模型可以同时处理上述两个问题，并研究该模型中的密码原语的安全性。也就是说，我们给出了QROM-AI中单向函数、伪随机生成器、（后量子）伪随机函数和（后量子）消息认证码的安全界限。
> 
> 我们还在存在量子辅助输入的情况下研究了安全界限。换句话说，我们展示了在存在量子辅助输入的情况下，随机置换（而不是随机函数）的单向性的安全界限。这解答了Nayebi等人（QIC'15）提出的一个悬而未决的问题。从复杂性理论的角度来看，这意味着相对于随机置换预言机来说，\( \mathsf {NP}\cap \mathsf {coNP} \not \subseteq \mathsf {BQP/qpoly}\)，这也回答了Aaronson（ToC'05）提出的一个开放问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_21](https://doi.org/10.1007/978-3-030-34578-5_21)
## QFactory: Classically-Instructed Remote Secret Qubits Preparation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#qfactory-classically-instructed-remote-secret-qubits-preparation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#qfactory-classically-instructed-remote-secret-qubits-preparation)**
### 作者
* Alexandru Cojocaru, School of Informatics, University of Edinburgh, 10 Crichton Street, Edinburgh, EH8 9AB, UK
* Elham Kashefi, School of Informatics, University of Edinburgh, 10 Crichton Street, Edinburgh, EH8 9AB, UK
* Petros Wallden, School of Informatics, University of Edinburgh, 10 Crichton Street, Edinburgh, EH8 9AB, UK
* Léo Colisson, Laboratoire d’Informatique de Paris 6 (LIP6), Sorbonne Université, 4 Place Jussieu, 75252, Paris CEDEX 05, France
* Elham Kashefi, Laboratoire d’Informatique de Paris 6 (LIP6), Sorbonne Université, 4 Place Jussieu, 75252, Paris CEDEX 05, France
### 摘要
> 在（Cojocaru 等人，2018）中引入了经典指导的远程准备随机秘密量子比特的功能作为一种使经典方参与安全量子计算和通信协议的方式。其想法是，经典方（客户端）指示量子方（服务器）生成一个量子比特，该比特在服务器端是随机的，对服务器而言是未知的，但对客户端是已知的。这样的任务只有在计算假设下才可能实现。在本文中，我们定义了一个较简单（基本）的原语，仅由BB84态组成，并给出了实现这个原语的协议，该协议对最强可能的对手（任意偏离的恶意服务器）是安全的。所使用的特定函数是基于已知陷门一向函数构建的，从而使我们的基本原语的安全性降低到学习错误问题的难度上。之后，我们基于这个基本模块给出了一些扩展：扩展到更大的态集合（包括非克利福德态）；对中止案例进行适当考虑；以及对模块级别的可验证性。后者是基于我们引入的“盲自测试”概念，我们在有限的情况下证明了它，并猜想了在最一般的情况下它的有效性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_22](https://doi.org/10.1007/978-3-030-34578-5_22)
## Quisquis: A New Design for Anonymous Cryptocurrencies.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#quisquis-a-new-design-for-anonymous-cryptocurrencies) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#quisquis-a-new-design-for-anonymous-cryptocurrencies)**
### 作者
* Prastudy Fauzi, Simula UiB, Bergen, Norway
* Sarah Meiklejohn, University College London, London, UK
* Rebekah Mercer, O(1) Labs, San Francisco, USA
* Claudio Orlandi, Department of Computer Science, DIGIT, Aarhus University, Aarhus, Denmark
### 摘要
> 尽管现有的大多数加密货币使用伪名而非持久标识符，但它们并未为用户提供任何实质性的隐私保护。这促使了隐私增强型加密货币（如Monero和Zcash）的出现，这些货币专门设计用于对抗像比特币这样的货币中可能进行的跟踪分析。然而，这些加密货币也存在一些缺点：在Monero和Zcash中，潜在未花费硬币集合始终在增长，这意味着用户无法存储区块链的简明表示。此外，Zcash需要一个公共参考字符串，而Monero中地址的多次重用导致其匿名性受到攻击。
> 
> 本文提出了一种新的匿名加密货币设计，Quisquis，它实现了可证明安全的匿名性概念。Quisquis存储相对较少的数据，不需要可信设置，并且在Quisquis中，每个地址最多只出现两次：一次作为交易输出生成时的地址，一次作为交易输入支出时的地址。我们通过将基于DDH的工具（我们称之为可更新密钥）与高效的零知识证明相结合，实现了这一结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_23](https://doi.org/10.1007/978-3-030-34578-5_23)
## Divisible E-Cash from Constrained Pseudo-Random Functions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-1].md#divisible-e-cash-from-constrained-pseudo-random-functions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-1].md#divisible-e-cash-from-constrained-pseudo-random-functions)**
### 作者
* Florian Bourse, Orange Labs, Applied Crypto Group, Cesson-Sévigné, France
* Olivier Sanders, Orange Labs, Applied Crypto Group, Cesson-Sévigné, France
* David Pointcheval, DIENS, Ecole normale supérieure, CNRS, PSL University, Paris, France
* David Pointcheval, INRIA, Paris, France
### 摘要
> 电子现金（e-cash）是常规现金的数字模拟，旨在保护用户隐私。继Chaum的重要工作之后，针对原始方法的实际问题提出了几个新功能。其中，可分性被证明对于实现高效的存储和消费非常有用。不幸的是，实现可分性非常困难，迄今为止只存在一些构造，它们依赖于复杂的机制，只能在特定环境中实例化。此外，安全模型不完整，证明有时也很模糊。
> 
> 在这项工作中，我们首先提供了一个完整的可分电子现金安全模型，并研究了与受限伪随机函数（PRF）的关系，这是Boneh和Waters最近明确规范化的一种基本方法。我们展示了两种满足特定属性的基于受限PRF的可分电子现金系统框架：密钥同态性或委托性。然后，我们正式证明这些框架，并解决了先前构造中的两个主要问题：两个基本的安全概念要么根本没有考虑，要么没有完全证明。实际上，我们引入了结算的概念，它应该保证只有交易的接收方能够存款，并且我们展示了免责性，它应该防止诚实用户被错误指控，在先前构造的大多数证明中都是错误的。有些可以很容易地修复，但对于大多数复杂环境，如标准模型下的构造，情况并非如此。因此，我们提供了第一个在标准模型中安全的构造，作为我们框架的直接实例化。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34578-5_24](https://doi.org/10.1007/978-3-030-34578-5_24)
