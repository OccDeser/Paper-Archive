# Asiacrypt[2022-4]
## Recovering the Tight Security Proof of SPHINCS+.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#recovering-the-tight-security-proof-of-sphincs) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#recovering-the-tight-security-proof-of-sphincs)**
### 作者
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
* Mikhail Kudinov, Eindhoven University of Technology, Eindhoven, The Netherlands
### 摘要
> 2020年，Kudinov、Kiktenko和Fedorov指出了SPHINCS\(^+\)构造的严密安全证明中存在的一个缺陷。本研究为SPHINCS\(^+\)提供了一个新的严密安全证明。该缺陷可以追溯到SPHINCS\(^+\)中使用的Winternitz一次签名方案（WOTS）的安全证明。在本研究中，我们对SPHINCS\(^+\)中使用的WOTS变体进行了独立描述，我们称之为WOTS-TW。我们对WOTS-TW和多实例WOTS-TW进行了安全证明，对非自适应选择消息攻击具有安全性，其中对手仅在进行签名查询后才了解公钥。然后，我们展示这足以为SPHINCS\(^+\)提供一个严密的安全证明。我们几乎恢复了SPHINCS\(^+\)的相同安全性边界，与先前声明的边界相比仅有因子w的损失，其中w是通常设置为16的Winternitz参数。在更具技术性的层面上，我们引入了通用攻击对密码哈希函数属性的量子查询复杂度的新下界，并分析了在SPHINCS\(^+\)中使用的可调整哈希函数构造与进一步安全性属性的关系。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_1](https://doi.org/10.1007/978-3-031-22972-5_1)
## On Rejection Sampling in Lyubashevsky's Signature Scheme.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#on-rejection-sampling-in-lyubashevskys-signature-scheme) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#on-rejection-sampling-in-lyubashevskys-signature-scheme)**
### 作者
* Julien Devevey, ENS de Lyon, Lyon, France
* Omar Fawzi, ENS de Lyon, Lyon, France
* Alain Passelègue, ENS de Lyon, Lyon, France
* Damien Stehlé, ENS de Lyon, Lyon, France
* Omar Fawzi, Inria Lyon, Lyon, France
* Alain Passelègue, Inria Lyon, Lyon, France
* Damien Stehlé, Institut Universitaire de France, Paris, France
### 摘要
> Lyubashevsky的签名基于Fiat-Shamir with aborts范式，其核心要素是使用拒绝抽样将依赖于秘密的签名样本转换为来自（或接近于）秘密无关目标分布的样本。可以考虑几种底层分布和拒绝抽样策略。在这项工作中，我们通过拒绝抽样的视角研究了Lyubashevsky的签名，并旨在在满足签名运行时要求的情况下最小化签名大小。我们的若干结果涉及拒绝抽样本身，可能具有其他应用。
> 
> 我们证明了紧凑性的下界，给定签名运行时要求，以及完美拒绝抽样策略的预期运行时间的下界。我们还提出了一种基于Rényi分歧度的Lyubashevsky签名分析方法，允许更大程度的偏离目标分布，并显示超球形均匀分布是一种很好的选择：它们渐近地达到我们的紧凑性下界，并为实际部署提供了有趣的特性。最后，我们提出了另一种拒绝抽样策略，可以规避预期运行时间下界并提供最坏情况运行时间保证。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_2](https://doi.org/10.1007/978-3-031-22972-5_2)
## Hawk: Module LIP Makes Lattice Signatures Fast, Compact and Simple.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#hawk-module-lip-makes-lattice-signatures-fast-compact-and-simple) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#hawk-module-lip-makes-lattice-signatures-fast-compact-and-simple)**
### 作者
* Léo Ducas, CWI, Cryptology Group, Amsterdam, The Netherlands
* Eamonn W. Postlethwaite, CWI, Cryptology Group, Amsterdam, The Netherlands
* Ludo N. Pulles, CWI, Cryptology Group, Amsterdam, The Netherlands
* Wessel van Woerden, CWI, Cryptology Group, Amsterdam, The Netherlands
* Léo Ducas, Mathematical Institute, Leiden University, Leiden, The Netherlands
### 摘要
> 我们提出了一种具体实现的签名方案Hawk，它是将格同构问题（Lattice Isomorphism Problem，LIP）作为密码学基础的提案之一，注重简单性。这种简单性源于LIP，它允许使用像\(\mathbb Z^n\)这样的格，从而实现无浮点数、无拒绝抽样和紧凑的预计算分布的签名算法。这些设计特点对于受限设备以及在全同态加密（FHE）或多方计算（MPC）中计算签名时非常理想。与最近的LIP提案相比，最显著的变化是使用模格，利用NTRUSign和Falcon的算法和思想重用。Hawk的简单性使其具有竞争力。我们提供了对Hawk设计的实验证明和密码分析，实现了两组参数集，Hawk-512和Hawk-1024。在x86架构上，使用Hawk-512和Hawk-1024进行签名的速度比Falcon快四倍，生成的签名大约更紧凑15%，并且在格约简攻击方面稍微更安全。当浮点数不可用时，Hawk的签名速度比Falcon快15倍。
> 
> 我们为模LIP提供了最坏情况到平均情况的约化。对于Hawk的某些参数化，这适用于秘密密钥恢复，并将随机预言模型中的签名伪造问题约化为一个称为“one more short vector problem”的新问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_3](https://doi.org/10.1007/978-3-031-22972-5_3)
## BLOOM: Bimodal Lattice One-out-of-Many Proofs and Applications.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#bloom-bimodal-lattice-one-out-of-many-proofs-and-applications) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#bloom-bimodal-lattice-one-out-of-many-proofs-and-applications)**
### 作者
* Vadim Lyubashevsky, IBM Research Europe, Ruschlikon, Switzerland
* Ngoc Khanh Nguyen, EPFL, Lausanne, Switzerland
### 摘要
> 我们提出了一个高效的一对多证明系统的构造，其中证明者基于格问题的困难性展示他知道集合中某个元素的原像。该构造使用了Lyubashevsky等人（Crypto 2022）最近提出的零知识框架，结合了改进的递归过程和一种新颖的拒绝抽样证明，使得在整个协议中可以使用高效的双峰拒绝抽样。
> 
> 利用这些新的基元和技术，我们给出了最紧凑的基于格的环签名和群签名方案的实例化。相对于以前的工作，签名大小的改进范围在25%到2倍之间。更重要的是，为了使环签名有意义，用户公钥的大小需要在公开可访问的地方进行存储，而我们的方案可以将其缩小7倍至15倍。此外，我们还提供了明显改进的整数关系证明，它们与一对多证明一起是保密支付系统的关键组成部分，这也可能具有独立的研究价值。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_4](https://doi.org/10.1007/978-3-031-22972-5_4)
## GUC-Secure Commitments via Random Oracles: New Impossibility and Feasibility.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#guc-secure-commitments-via-random-oracles-new-impossibility-and-feasibility) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#guc-secure-commitments-via-random-oracles-new-impossibility-and-feasibility)**
### 作者
* Zhelei Zhou, Zhejiang University, Hangzhou, China
* Bingsheng Zhang, Zhejiang University, Hangzhou, China
* Kui Ren, Zhejiang University, Hangzhou, China
* Zhelei Zhou, ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Bingsheng Zhang, ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Kui Ren, ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Hong-Sheng Zhou, Virginia Commonwealth University, Richmond, USA
### 摘要
> 在UC框架中，协议必须是尊重子程序的；因此，共享的可信设置可能会导致安全问题。为了解决这个缺点，Canetti等人引入了广义UC（GUC）框架（TCC 2007）。在这项工作中，我们研究了使用全局随机神谕（GRO）作为可信设置的GUC安全承诺的不可能性和可行性。特别地，我们证明了在Canetti等人的全局可观测RO模型（CCS 2014）中，无法实现2轮（1轮承诺和1轮开启）的GUC安全承诺。然后，我们给出了一种新的轮次最优的GUC安全承诺，它只使用Minicrypt假设（即单向函数的存在）在全局可观测RO模型中。此外，我们还研究了在各种全局RO模型中GUC安全承诺的轮数复杂性的完整图景。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_5](https://doi.org/10.1007/978-3-031-22972-5_5)
## Additive-Homomorphic Functional Commitments and Applications to Homomorphic Signatures.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#additive-homomorphic-functional-commitments-and-applications-to-homomorphic-signatures) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#additive-homomorphic-functional-commitments-and-applications-to-homomorphic-signatures)**
### 作者
* Dario Catalano, University of Catania, Catania, Italy
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Ida Tucker, IMDEA Software Institute, Madrid, Spain
### 摘要
> 功能承诺（FC）可以以简洁和可验证的方式揭示承诺数据的功能。在本文中，我们提出了加性同态FC的概念，并展示了两种有效的基于配对的该原语实现，分别支持常数次数的多变量多项式和单调跨度程序。我们还展示了新原语在同态签名的应用方面：我们展示了加性同态FC可以用于以简单优雅的方式实现同态签名（支持与底层FC相同类别的功能）。使用我们的新FC作为底层构建模块，这导致了（表面上）第一个不依赖于格或多线性映射的多输入同态签名的表达式实现。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_6](https://doi.org/10.1007/978-3-031-22972-5_6)
## Linear-Map Vector Commitments and Their Practical Applications.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#linear-map-vector-commitments-and-their-practical-applications) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#linear-map-vector-commitments-and-their-practical-applications)**
### 作者
* Matteo Campanelli, Protocol Labs, San Francisco, USA
* Anca Nitulescu, Protocol Labs, San Francisco, USA
* Carla Ràfols, Universitat Pompeu Fabra, Barcelona, Spain
* Alexandros Zacharakis, Universitat Pompeu Fabra, Barcelona, Spain
* Arantxa Zapico, Universitat Pompeu Fabra, Barcelona, Spain
### 摘要
> 矢量承诺（VC）是一种密码原语，允许将某个向量承诺并有效地“打开”其某些位置。矢量承诺越来越被认为是扩展高度去中心化的大规模网络及其动态内容的关键工具。在本文中，我们根据实际应用的不断涌现，检验了矢量承诺应满足的性质要求，并提出了改进现有技术水平、提供新的权衡的新构造。我们还提出了一个统一的框架，涵盖了多个构造，并展示了如何从更基础的性质中通用地实现一些属性。在实践方面，我们专注于构建不需要新的可信设置的高效方案（我们可以重用现有的配对方案，如Zcash或Filecoin等现实系统运行的“tau的幂”仪式）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_7](https://doi.org/10.1007/978-3-031-22972-5_7)
## PointProofs, Revisited.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#pointproofs-revisited) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#pointproofs-revisited)**
### 作者
* Benoît Libert, CNRS, Laboratoire LIP, Lyon, France
* Benoît Libert, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Alain Passelègue, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Mahshid Riahinia, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Alain Passelègue, Inria, Lyon, France
### 摘要
> 向量承诺允许用户通过一个常量大小的承诺来承诺一个长度为n的向量，并能够在本地公开承诺的各向量坐标。重要的是，按位置的公开大小应独立于维度n。 Gorbunov，Reyzin，Wee和Zhang最近提出了PointProofs（CCS 2020）向量承诺方案，该方案支持在多个承诺之间进行非交互聚合证明，从而可以大幅降低区块链智能合约中的区块传播成本。 Gorbunov等人基于弱n-双线性Diffie-Hellman指数假设（n-wBDHE）的代数群模型和随机预言机模型提供了安全性分析。在这项工作中，我们提出了一种新的分析方法，不依赖于代数群模型。我们在随机预言机模型下，根据n-Diffie-Hellman指数（n-DHE）假设证明了安全性，而该假设是Gorbunov等人考虑的n-wBDHE假设所蕴含的。此外，我们还指出我们没有修改他们的方案（因此保持了其效率），也没有引入任何额外的假设。相反，我们通过完全改进的分析证明了方案的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_8](https://doi.org/10.1007/978-3-031-22972-5_8)
## Universal Ring Signatures in the Standard Model.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#universal-ring-signatures-in-the-standard-model) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#universal-ring-signatures-in-the-standard-model)**
### 作者
* Pedro Branco, Johns Hopkins University, Baltimore, USA
* Nico Döttling, Helmholtz Center for Information Security (CISPA), Saarbrücken, Germany
* Stella Wohnig, Helmholtz Center for Information Security (CISPA), Saarbrücken, Germany
* Stella Wohnig, Universität des Saarlandes, Saarbrücken, Germany
### 摘要
> 环签名允许用户代表一个临时用户集合——一个环——签署信息并隐藏其身份。最初环签名的动机是揭发举报 （Rivest等人 ASIACRYPT'01）：高级政府雇员可以匿名地泄露敏感信息并证明信息来源可靠，即通过签署泄漏内容。但基本上所有已知的环签名方案都要求环成员发布与该方案兼容的结构化验证密钥。这导致了某种悖论，即如果用户不想因揭发举报而受到指责，他们将避免使用支持环签名的签名方案。
> 
> 在这项工作中，我们规范了通用环签名（URS）的概念。URS使用户能够独立于他们使用的签名方案发出对用户集合的环签名。特别地，环中的任何验证密钥都不需要来自同一方案。因此，原则上，URS提供了揭发举报的有效解决方案。
> 
> 本文的主要目标是研究URS的可行性，尤其是在标准模型下（即无随机预言机或公共参考字符串）。我们提出了多种URS的构建方法，可以在所需假设、实现的安全级别和签名大小之间提供不同的权衡：
> 
> 我们的第一个构建基于标准基元的超多项式硬度假设。它可以实现紧凑的签名。这意味着签名的大小仅在环的大小和涉及的签名方案数量的对数级别上依赖。
> 
> 然后，我们继续研究仅从标准多项式硬度假设构建URS的可行性。我们从证人加密和其他标准假设中构造了一个非紧凑的URS。
> 
> 最后，我们展示如何通过依赖于不可区分混淆来修改非紧凑

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_9](https://doi.org/10.1007/978-3-031-22972-5_9)
## The Abe-Okamoto Partially Blind Signature Scheme Revisited.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#the-abe-okamoto-partially-blind-signature-scheme-revisited) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#the-abe-okamoto-partially-blind-signature-scheme-revisited)**
### 作者
* Julia Kastner, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Jiayu Xu, School of Electrical Engineering and Computer Science, Oregon State University, Corvallis, OR, USA
### 摘要
> 部分盲签名是普通盲签名的扩展，是电子现金和电子投票中具有广泛应用的基本技术。迄今为止最高效的方案之一是Abe和Okamoto（CRYPTO2000）提出的方案，其底层思想——OR-proof技术已为多个研究提供了基础。我们指出了原始安全性证明中的几个微妙缺陷，并提供了新的详细且严密的证明，实现了与原始工作相似的界限。我们相信我们对证明策略的洞察将在其他基于OR-proof的方案的安全性分析中发挥作用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_10](https://doi.org/10.1007/978-3-031-22972-5_10)
## An Analysis of the Algebraic Group Model.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#an-analysis-of-the-algebraic-group-model) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#an-analysis-of-the-algebraic-group-model)**
### 作者
* Cong Zhang, Zhejiang University, Hangzhou, China
* Hong-Sheng Zhou, Virginia Commonwealth University, Richmond, USA
* Jonathan Katz, University of Maryland, College Park, USA
* Cong Zhang, ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
### 摘要
> 代数群模型（AGM）是由Fuchsbauer，Kiltz和Loss正式化的，并且最近受到了重视。 AGM的吸引力之一在于它被认为比通用组模型（GGM）要弱（严格），因为针对代数算法的难度结果意味着针对通用算法的难度结果，并且AGM中的通用约减（即，在两个问题的代数公式之间进行约减）意味着GGM中的通用约减。 我们强调，由于GGM和AGM当前正在规范化，因此这并不正确：AGM中的困难性可能不意味着GGM中的困难性，并且AGM中的通用约减可能不意味着GGM中的类似约减。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_11](https://doi.org/10.1007/978-3-031-22972-5_11)
## Instantiability of Classical Random-Oracle-Model Encryption Transforms.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#instantiability-of-classical-random-oracle-model-encryption-transforms) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#instantiability-of-classical-random-oracle-model-encryption-transforms)**
### 作者
* Alice Murphy, Department of Computer Science, University of Waterloo, Waterloo, Canada
* Adam O’Neill, Manning CICS, University of Massachusetts Amherst, Amherst, USA
* Mohammad Zaheri, Snap Inc., Santa Monica, USA
### 摘要
> 通过扩展利用程序混淆来实例化基于随机预言模型的变换（例如，Hohenberger等人，EUROCRYPT2014，Kalai等人，CRYPTO2017），我们展示了使用混淆和其他假设存在可以足以实例化传统RO模型加密变换OAEP（Bellare和Rogaway，EUROCRYPT1994）和Fujisaki-Okamoto（CRYPTO1999，J.Cryptology2013）的标准模型哈希函数，以实现特定的公钥加密（PKE）方案的IND-CCA安全性。我们对Fujisaki-Okamoto的结果采用了一个简单的修改方案。
> 
> 我们的实例化不需要在基本方案上比对应的RO模型证明更强的假设。例如，要实例化低指数RSA-OAEP，我们对RSA的假设是亚指数级部分单向性，与Fujisaki等人（J.Cryptology2004）在RO模型中所需的假设（部分单向性）相匹配，最多达到亚指数级。对于将满足与明文检查攻击不可区分性的公钥加密升级到IND-CCA的Fujisaki-Okamoto的部分，我们再次不需要更强的假设，最多达到亚指数级。
> 
> 我们以统一的方式获得我们的哈希函数，扩展了Brzuska和Mittelbach（ASIACRYPT2014）的技术。我们将以下内容纳入他们的技术中：（1）极度丢失函数（ELFs），由Zhandry（CRYPTO2016）提出的概念，以及（2）多比特辅助输入点函数混淆（MB-AIPO）。虽然MB-AIPO在一般情况下是不可能的（Brzuska和Mittelbach，ASIACRYPT2014），但我们为我们需要的特殊情况提供了真实的构造方法，这可能具有独立的研究价值。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_12](https://doi.org/10.1007/978-3-031-22972-5_12)
## Nonmalleable Digital Lockers and Robust Fuzzy Extractors in the Plain Model.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#nonmalleable-digital-lockers-and-robust-fuzzy-extractors-in-the-plain-model) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#nonmalleable-digital-lockers-and-robust-fuzzy-extractors-in-the-plain-model)**
### 作者
* Daniel Apon, MITRE, McLean, VA, USA
* Chloe Cachet, University of Connecticut, Mansfield, CT, USA
* Benjamin Fuller, University of Connecticut, Mansfield, CT, USA
* Peter Hall, New York University, New York, USA
* Feng-Hao Liu, Florida Atlantic University, Boca Raton, FL, USA
### 摘要
> 我们在1）Canetti和Varia（TCC 2009）的普通型数字储物柜中以及2）Boyen等人在（Eurocrypt 2005）中推出了以下两个新构造：保护熵水平低于其长度的源的强健模糊提取器。以前只有基于随机神谕或公共参考字符串（CRS）假设时才能得到这两种原语的构造。
> 
> 在此过程中，我们定义了一个称为非可塑点函数混淆的新原语，并附带数据。相关数据是公开的但受到所有篡改的保护。我们使用相同的范式将其扩展到数字储物柜。通过将CRS放入相关数据并使用适当的非交互式零知识证明，在输出点上实现非可塑性。通过低次数多项式来保护输入点以及对输出点和相关数据的任何篡改。我们的构造实现了虚拟黑盒安全。
> 
> 然后，将这些构造用于创建可支持普通型低熵源的强健模糊提取器。通过使用syndrome secure sketch（Dodis et al.，SIAM Journal on Computing 2008）的几何结构，对手的篡改函数总是可以表达为低次多项式；因此，所构造的非可塑化对象提供的保护足够使用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_13](https://doi.org/10.1007/978-3-031-22972-5_13)
## Continuously Non-malleable Codes Against Bounded-Depth Tampering.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#continuously-non-malleable-codes-against-bounded-depth-tampering) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#continuously-non-malleable-codes-against-bounded-depth-tampering)**
### 作者
* Gianluca Brian, Sapienza University of Rome, Rome, Italy
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
* Sebastian Faust, Technische Universität Darmstadt, Darmstadt, Germany
* Elena Micheli, Technische Universität Darmstadt, Darmstadt, Germany
* Daniele Venturi, Technische Universität Darmstadt, Darmstadt, Germany
### 摘要
> 非可塑码（Dziembowski, Pietrzak和Wichs, ICS 2010 & JACM 2018）允许保护针对相关密钥攻击（RKAs）的任意密码原语。即使使用保证针对单个篡改尝试是非可塑的码，也可以以假设完美记忆擦除的代价获得针对多项篡改攻击的RKA安全性。相比之下，连续非可塑码（Faust, Mukherjee, Nielsen和Venturi, TCC 2014）则不会受到该限制，因为非可塑性保证适用于多项篡改尝试。不幸的是，只有少数几种连续非可塑码的构造方法，而标准的非可塑码则已知适用于各种各样的篡改家族，包括NC0和决策树篡改、AC0，甚至是有界多项式深度的篡改。我们通过在以下自然环境中提供第一个连续非可塑码构造来改变这种现状：
> 
> 针对决策树篡改，每次篡改尝试中，在自适应地读取输入码字中的d个位置后，可以任意设置篡改后的每个位。我们的方案是在简明模型下实现的，可以假设存在单向函数，并且可容忍深度\(d = O(n^{1/8})\)的决策树篡改，其中n是码字的长度。值得注意的是，这个类别包括NC0。
> 
> 针对有界多项式深度篡改，在每次篡改尝试中，对手可以选择由有界多项式深度电路计算的任何篡改函数（及无界多项式大小）。我们的方案是在常用参考字符串模型下实现的，并且可以假设时间锁谜题和模拟可提取（简洁的）非交互零知识证明的存在来进行实例化。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_14](https://doi.org/10.1007/978-3-031-22972-5_14)
## Failing Gracefully: Decryption Failures and the Fujisaki-Okamoto Transform.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#failing-gracefully-decryption-failures-and-the-fujisaki-okamoto-transform) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#failing-gracefully-decryption-failures-and-the-fujisaki-okamoto-transform)**
### 作者
* Kathrin Hövelmanns, Eindhoven University of Technology, Eindhoven, The Netherlands
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
* Christian Majenz, Department of Applied Mathematics and Computer Science, Technical University of Denmark, Lyngby, Denmark
### 摘要
> 在已知的Fujisaki-Okamoto转换的安全降级中，解密失败是通过解决寻找失败的明文这一相当不自然的任务来处理的，其结果是Grover搜索边界。此外，他们还需要一个对无效密文的隐式拒绝机制，以在QROM中实现合理的安全边界。我们提出了一种没有这些缺陷的降级：我们引入了两个与寻找解密失败相关的安全游戏，一个捕获了使用公钥寻找解密失败的计算难任务，另一个捕获了搜索随机oracle获得像大随机性这样的与密钥无关的失败的统计难任务。因此，我们在QROM中的安全边界比先前关于通用随机oracle搜索攻击的边界更为严谨：攻击者只能部分计算搜索谓词，即对所述的与密钥无关的失败进行计算。此外，我们的整个降级适用于转换的显式拒绝变体，并且大大优于所有已知的降级。除了是转换的更自然的变体外，显式拒绝机制的安全性对于隐式拒绝变体的侧通道攻击弹性也是相关的。在此过程中，我们证明了一些技术结果，描述了QROM中预映像提取和某些搜索任务的特征，这可能引发独立的兴

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_15](https://doi.org/10.1007/978-3-031-22972-5_15)
## Optimising Linear Key Recovery Attacks with Affine Walsh Transform Pruning.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#optimising-linear-key-recovery-attacks-with-affine-walsh-transform-pruning) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#optimising-linear-key-recovery-attacks-with-affine-walsh-transform-pruning)**
### 作者
* Antonio Flórez-Gutiérrez, Inria, Paris, France
### 摘要
> 线性密码分析[25]是对分组密码进行密钥恢复攻击的主要方法之一。多篇论文[16, 19]已经提出通过快速Walsh变换来降低其时间复杂度的可能性。这些先前的研究忽略了密钥恢复轮的结构，将其视为任意的布尔函数。在本文中，我们通过利用这些函数的Walsh光谱中的零来优化算法的时间和内存复杂度，采用一种新颖的伴随剪枝技术对Walsh变换进行优化。然后，我们通过两个应用示例展示了这些新的优化策略：对DES[1]的改进攻击和对29轮PRESENT-128 [9]的首次已知攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_16](https://doi.org/10.1007/978-3-031-22972-5_16)
## Statistical Decoding 2.0: Reducing Decoding to LPN.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#statistical-decoding-2-0-reducing-decoding-to-lpn) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#statistical-decoding-2-0-reducing-decoding-to-lpn)**
### 作者
* Kévin Carrier, ETIS Laboratory, CY Cergy-Paris University, Cergy-Pontoise, France
* Thomas Debris-Alazard, Project GRACE, Inria Saclay-Ile de France, Palaiseau, France
* Charles Meyer-Hilfiger, Project COSMIQ, Inria de Paris, Paris, France
* Jean-Pierre Tillich, Project COSMIQ, Inria de Paris, Paris, France
### 摘要
> 基于代码的密码学安全主要依赖线性代码的通用译码难度。最佳的通用译码算法都是Prange的一种老算法的改进：它们被称为信息集解码器(ISD)。一段时间以前，提出了一种不属于这个家族的通用译码算法：统计译码。它是一种随机算法，需要计算大量中等权重的奇偶校验集，并对这些方程进行多数投票以恢复错误。由于即使是最好的改进型变体，与最简单的ISD算法相比，其性能也表现不佳，因此这种算法被长时间遗忘。我们通过更一般的方式使用奇偶校验方程重新审查这个老算法。在这里，奇偶校验用于获得带有错误的秘密的LPN样本，LPN噪声与我们产生的奇偶校验的权重相关。相应的LPN问题然后通过标准的傅立叶技术解决。通过适当选择产生这些低权重方程的方法和LPN问题的大小，我们能够在编码速率小于0.3的情况下显著地超越信息集解码器。这是60年来第一次为不属于ISD家族的重要范围提供更好的译码算法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_17](https://doi.org/10.1007/978-3-031-22972-5_17)
## A Third is All You Need: Extended Partial Key Exposure Attack on CRT-RSA with Additive Exponent Blinding.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#a-third-is-all-you-need-extended-partial-key-exposure-attack-on-crt-rsa-with-additive-exponent-blinding) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#a-third-is-all-you-need-extended-partial-key-exposure-attack-on-crt-rsa-with-additive-exponent-blinding)**
### 作者
* Yuanyuan Zhou, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Joop van de Pol, Delft, Netherlands
* Yu Yu, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, Shanghai Qi Zhi Institute, 701 Yunjin Road, Shanghai, 200232, China
### 摘要
> 在Eurocrypt 2022上，May等人提出了一种局部密钥泄漏（PKE）攻击方法，用于高效因式分解N，只需知道私钥指数\(d_p\)和\(d_q\)的\(\frac{1}{3}\) -部分高有效位（MSB）或低有效位（LSB），对于公共指数\(e \approx N^{\frac{1}{12}}\)。在实践中，PKE攻击通常依赖于这些指数的侧信道泄漏，而使用加法混淆指数\(d^{\prime }_p = d_p + r_p(p-1)\)和\(d^{\prime }_q = d_q + r_q(q-1)\)的侧信道抵抗性CRT-RSA实现通常使用未知的随机混淆因子\(r_p\)和\(r_q\)，这使得PKE攻击更具挑战性。
> 
> 基于以上动机，我们将May等人的PKE攻击方法扩展到具有加法指数混淆的CRT-RSA。假设\(r_pe\in (0,N^{\frac{1}{4}})\)，则我们的扩展PKE在\(r_pe \approx N^{\frac{1}{12}}\)时达到理想效果，此时仅使用盲化CRT指数\(d^{\prime }_p\)和\(d^{\prime }_q\)的\(\frac{1}{3}\)已知MSB或LSB就可以恢复完整的私钥。我们的扩展PKE遵循他们的新颖两步方法，首先计算与密钥相关的常数\(k^{\prime }\)（\(ed^{\prime }_p = 1 + k^{\prime }(p-1)\)，\(ed^{\prime }_q = 1 + l^{\prime }(q-1)\)），然后通过计算多项式在模\(k^{\prime }p\)下的根来分解N。我们将他们的方法进行了如下扩展：对于MSB情况，在攻击的第一步中，我们提出了两个选项，要么通过获得单独的估计\(k^{\prime }l^{\prime }\)并通过因式分解计算\(k^{\prime }\)，要么通过获得多个估计\(k^{\prime }l^{\prime }_1,\ldots ,k^{\prime }l^{\prime }_z\)并通过GCD的概率方法计算\(k^{\prime }\)。
> 
> 对于LSB情况，我们通过在LSB攻击的第二步中构造不同的单变量多项式来扩展他们的方法。形式化分析表明，我们的LSB攻击在标准Coppersmith类型假设下在多项式时间内运行，而我们的MSB攻击要么以子指数时间运行，并且输入规模减小（问题被简化为因式分解大小为\(e^2r_pr_q\approx N^{\frac{1}{6}}\)的数），要么根据一种新颖的启发式假设在概率多项式时间内运行。在最常见的密钥长度设置（1024位、2048位和3072位）和混淆因子长度（32位、64位和128位）下，我们的实验证实了Coppersmith类型假设和我们自己的假设的有效性，以及因式分解步骤的可行性。
> 
> 据我们所知，这是首个对具有128位未知指数混淆因子的CRT-RSA进行实验证明效果的PKE攻击。我们还利用针对蒙哥马利阶梯指数重取模CRT实现的真实部分侧信道密钥泄露，展示了提出的PKE攻

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_18](https://doi.org/10.1007/978-3-031-22972-5_18)
## Stretching Cube Attacks: Improved Methods to Recover Massive Superpolies.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#stretching-cube-attacks-improved-methods-to-recover-massive-superpolies) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#stretching-cube-attacks-improved-methods-to-recover-massive-superpolies)**
### 作者
* Jiahui He, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Kai Hu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Bart Preneel, imec-COSIC, KU Leuven, Leuven, Belgium
* Jiahui He, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Meiqin Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Meiqin Wang, Quan Cheng Shandong Laboratory, Jinan, China
### 摘要
> 立方体攻击利用对称密码的代数特性，通过恢复一个特殊的多项式（超多项式）以及随后的秘密密钥来进行攻击。当对应布尔函数的代数标准形式不可用时，基于除法特性的方法可以巧妙地恢复出确切的超多项式。然而，随着密码轮数的增加，恢复超多项式的计算成本变得极高。例如，ASIACRYPT 2021提出的嵌套单项式预测（NMP）对于Trivium在第845轮陷入困境。为了缓解NMP技术的瓶颈问题，即由于过多单项式路径而导致的无解模型，我们将重点转向对于超多项式贡献重要项的特定中间轮。引入了两种新技术，即非零位基于除法特性（NBDP）和核心单项式预测（CMP），两者相较于MP的MILP模型而言，都可以得到更简单的MILP模型。可以证明，CMP技术在恢复重要项的计算复杂性方面比单项式预测技术有显著改进。结合分而治之策略与这两种新技术，我们能够更有效地捕捉到重要项，从而避免将计算资源浪费在对超多项式没有贡献的中间项上。作为我们技术的示例，我们将其应用于Trivium、Grain-128AEAD、Kreyvium和Acorn。结果是，之前的攻击的计算成本可以显著降低，并且可以在实际时间内恢复出846、847和848轮Trivium、192轮Grain-128AEAD、895轮Kreyvium和776轮Acorn的超多项式的确切ANF。尽管848轮Trivium的超多项式包含超过5亿个项，这相当于比之前的最佳结果多3轮、1轮、1轮和1轮，但我们的技术能够成功应对。此外，通过研究莫比乌斯变换的内部特性，我们展示了如何利用涉及完整密钥位的超多项式进行密钥恢复，从而实现了对目标密码的最佳密钥恢复攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_19](https://doi.org/10.1007/978-3-031-22972-5_19)
## Functional Encryption with Secure Key Leasing.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#functional-encryption-with-secure-key-leasing) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#functional-encryption-with-secure-key-leasing)**
### 作者
* Fuyuki Kitagawa, NTT Social Informatics Laboratories, Tokyo, Japan
* Ryo Nishimaki, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 安全软件租赁是一种量子密码学原语，它使我们能够将软件编码为量子状态并将其出租给用户。安全软件租赁具有验证返回的软件是否有效的机制。安全概念保证一旦用户以有效形式返回软件，用户就不再使用该软件。
> 
> 在这项工作中，我们介绍了带有安全密钥租赁的秘密密钥功能加密（SKFE）概念，其中解密密钥可以以安全的方式进行租用，就像安全软件租赁一样。我们还使用标准的密码学假定进行实例化。具体而言，我们的贡献如下：
> 
> 我们定义了具有安全密钥租赁的SKFE的语法和安全性定义。
> 
> 我们实现了从标准SKFE到带有安全键租赁的SKFE的转换，而无需使用额外的假设。尤其是，我们基于后量子单向函数获得了\ \(\textsf{P}/\textsf{poly}\)的有界溯源抗性SKFE与安全密钥租赁，因为我们可以使用此假设实现有界共谋SKFE。
> 
> 一些先前的安全软件租赁方案仅捕获在诚实评估算法上运行的盗版软件（在合法平台上）。但是，我们的安全密钥租赁概念捕获任意攻击策略，并且没有此类限制。作为附加贡献，我们介绍了单解密器FE（SDFE）的概念，其中每个功能解密密钥都受到拷贝保护。由于拷贝保护是比安全软件租赁更强的原语，因此可以将此概念视为比带有安全密钥租赁的FE更强的密码学原语。具体而言，我们的附加贡献如下：
> 
> 我们定义了SDFE的语法和安全性定义。
> 
> 我们从后量子区分混淆和学习错误问题的量子难度中实现了抗串通单解密器PKFE\ \(\textsf{P}/\textsf{poly}\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_20](https://doi.org/10.1007/978-3-031-22972-5_20)
## Classically Verifiable NIZK for QMA with Preprocessing.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#classically-verifiable-nizk-for-qma-with-preprocessing) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#classically-verifiable-nizk-for-qma-with-preprocessing)**
### 作者
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 我们提出了三种经典可验证的非交互式零知识证明和论证（CV-NIZK），用于各种前处理模型中的ＱΜΑ。
> 
> 1. 在量子秘密参数模型中，我们构建了一个对 \(\textbf{QMA}\) 的 CV-NIZK。在这个模型中，信任的设定将一个量子证明密钥发送给证明者，将一个经典验证密钥发送给验证者。它在信息论意义上是安全且零知识的。
> 
> 2. 基于学习与错误问题的量子硬性问题假设，我们在一种模型中构建了一个对 \(\textbf{QMA}\) 的 CV-NIZK。在这个模型中，一个受信任的方生成一个CRS，并将一个独立于实例的量子消息作为预处理发送给证明者。这个模型与Coladangelo、Vidick和Zhang最近的工作（CRYPTO'20）中考虑的模型相同。我们的构造具有所谓的双模式属性，即生成CRS的两种计算不可区分模式，在一个模式中具有信息理论上的完备性，在另一个模式中具有信息论上的零知识性质。这解决了Coladangelo等人留下的一个开放问题，即在信息论上要么实现完备性要么实现零知识性。据我们所知，我们是第一个在任何类型的模型中针对 \(\textbf{QMA}\) 构建双模式NIZK的。
> 
> 3. 在量子随机预示符模型下，我们构建了一个对 \(\textbf{QMA}\) 的 CV-NIZK。这个量子预处理是指验证者向证明者发送随机的Pauli基态。我们的构造使用了Fiat-Shamir变换。量子预处理可以被用分发贝尔对给证明者和验证者的设定所取代，因此我们通过Fiat-Shamir变换解决了Broadbent和Grilo（FOCS'20）提出的关于通过Fiat-Shamir变换在共享贝尔对模型中实现对 \(\textbf{QMA} \) 的NIZK的可能性的开放问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_21](https://doi.org/10.1007/978-3-031-22972-5_21)
## General Properties of Quantum Bit Commitments (Extended Abstract).
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#general-properties-of-quantum-bit-commitments-extended-abstract) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#general-properties-of-quantum-bit-commitments-extended-abstract)**
### 作者
* Jun Yan, Jinan University, Guangzhou, China
### 摘要
> 尽管无条件安全的量子比特承诺（允许量子计算和通信）是不可能的，研究人员转向研究基于复杂性的计算量子比特承诺。计算规范（非交互式）量子比特承诺方案指的是承诺仅包括从发送方到接收方的单个（量子）消息，之后可以通过取消计算阶段来打开该承诺。在这项工作中，我们通过规范量子比特承诺的角度研究计算量子比特承诺的一般性质。除了其他结果外，我们特别得出以下两个结论：
> 
> 1. 任何计算量子比特承诺方案都可以转换为规范（非交互式）形式（保持其加总绑定性质）。
> 
> 2. 两种类型的规范量子比特承诺等价；也就是说，如果存在规范计算隐藏统计绑定量子比特承诺，则存在规范统计隐藏计算绑定的量子比特承诺。结合这个结果和第一个结果，就可以立即推导出（无条件地）计算量子比特承诺是对称的。
> 
> 规范量子比特承诺可以基于量子安全单向函数或伪随机量子态。但在我们看来，规范量子比特承诺的表述如此清晰简单，本身也可以被视为一个合理的复杂性假设。我们建议在未来从量子密码学和量子复杂性理论的角度来探索规范量子比特承诺。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_22](https://doi.org/10.1007/978-3-031-22972-5_22)
