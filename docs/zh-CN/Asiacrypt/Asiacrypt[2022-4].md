# Asiacrypt[2022-4]
## Recovering the Tight Security Proof of SPHINCS+.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#recovering-the-tight-security-proof-of-sphincs) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#recovering-the-tight-security-proof-of-sphincs)**
### 作者
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
* Mikhail Kudinov, Eindhoven University of Technology, Eindhoven, The Netherlands
### 摘要
> 2020年，Kudinov、Kiktenko和Fedorov指出了SPHINCS\(^+\)构建在严格安全性证明方面的一个缺陷。这项工作针对SPHINCS\(^+\)，给出了一种新的严格安全性证明。该缺陷可以追溯到SPHINCS\(^+\)中使用的Winternitz一次签名方案（WOTS）的安全性证明。在这项工作中，我们单独描述了在SPHINCS\(^+\)中使用的WOTS变体，我们称之为WOTS-TW。我们提供了针对WOTS-TW和多实例WOTS-TW的安全性证明，抵御非自适应选择消息攻击，在此攻击中，对手只有在进行签名查询后才能获得公钥的信息。随后，我们展示了这足以给出SPHINCS\(^+\)的严格安全性证明。与先前声称的边界相比，我们恢复了几乎相同的SPHINCS\(^+\)安全性，仅损失了因子w，其中w是通常设置为16的Winternitz参数。在技术层面上，我们引入了关于通用攻击密码哈希函数属性的量子查询复杂度的新下界，并分析了用于SPHINCS\(^+\)的可调整哈希函数构造方面的其他安全性属性。

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
> 卢巴舍夫斯基的签名基于菲亚特-沙米尔与中止范式，其核心要素是利用拒绝抽样将依赖于秘密的签名样本转化为来自（或接近于）秘密独立目标分布的样本。可以考虑多种基础分布和拒绝抽样策略的选择。在这项工作中，我们通过拒绝抽样的视角研究了卢巴舍夫斯基的签名，并旨在在满足签名运行时需求的前提下最小化签名大小。我们的一些结果涉及拒绝抽样本身，可能具有其他应用。

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
> 我们提出了Hawk签名方案，这是一种具体化的建议，将格同构问题（LIP）作为密码学基础的一种简化方法。这种简化是基于LIP的，它允许使用诸如\(\mathbb Z^n\)这样的格，从而产生没有浮点数、无拒绝抽样和紧凑预计算分布的签名算法。这些设计特点非常适用于受限设备，并且在FHE或MPC中计算签名时也很有用。与最近的LIP建议相比，最重要的变化是使用模格，在NTRUSign和Falcon中重用算法和思想。它的简单性使Hawk具备竞争力。我们通过实验证据对Hawk的设计进行了密码分析，并实现了两种参数集：Hawk-512和Hawk-1024。在x86架构上，使用Hawk-512和Hawk-1024进行签名的速度比Falcon快四倍，产生的签名约紧凑15％，并且对格降维攻击的伪造稍微更加安全。当浮点数不可用时，Hawk的签名速度比Falcon快15倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_3](https://doi.org/10.1007/978-3-031-22972-5_3)
## BLOOM: Bimodal Lattice One-out-of-Many Proofs and Applications.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#bloom-bimodal-lattice-one-out-of-many-proofs-and-applications) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#bloom-bimodal-lattice-one-out-of-many-proofs-and-applications)**
### 作者
* Vadim Lyubashevsky, IBM Research Europe, Ruschlikon, Switzerland
* Ngoc Khanh Nguyen, EPFL, Lausanne, Switzerland
### 摘要
> 我们提出了一个高效的一对多证明系统的构建，其中证明者基于格问题的困难性展示自己知道一个集合中一个元素的原像。该构建采用了Lyubashevsky等人（Crypto 2022）最近的零知识框架，结合了改进的基于格的一对多证明的递归过程，以及一种新颖的拒绝抽样证明，使得在整个协议中能够使用高效的双模拒绝抽样。

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
> 在UC框架中，协议必须是子例程遵循的；因此，共享的可信设置可能会导致安全问题。为了解决这一缺点，Canetti等人引入了广义UC（GUC）框架（TCC 2007）。在这项工作中，我们研究了在全局随机预言机（GRO）作为可信设置的条件下，GUC安全承诺的不可能性和可行性。具体而言，我们展示了在Canetti等人的全局可观察RO模型（CCS 2014）中，无法实现2轮（1轮承诺和1轮开启）的GUC安全承诺。然后，我们提供了一个新的轮数最优的GUC安全承诺，仅使用Minicrypt假设（即单向函数的存在）在全局可观察RO模型中。此外，我们还检查了在不同全局RO模型中GUC安全承诺的轮复杂性的完整情况。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_5](https://doi.org/10.1007/978-3-031-22972-5_5)
## Additive-Homomorphic Functional Commitments and Applications to Homomorphic Signatures.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#additive-homomorphic-functional-commitments-and-applications-to-homomorphic-signatures) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#additive-homomorphic-functional-commitments-and-applications-to-homomorphic-signatures)**
### 作者
* Dario Catalano, University of Catania, Catania, Italy
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Ida Tucker, IMDEA Software Institute, Madrid, Spain
### 摘要
> 功能承诺（FC）能以简洁、可验证的方式揭示承诺数据的功能。本文提出了可加性同态FC的概念，并展示了两种高效的基于配对的实现方法，分别支持恒定次数的多变量多项式和单调跨度程序。我们还展示了新的基本原语在同态签名中的应用：我们展示了可加性同态FC可以被用于以简单、优雅的方式实现同态签名（支持与底层FC相同的功能类别）。使用我们的新的FC作为底层构建块，这导致了对多输入同态签名的（表面上）第一个有表达力的实现，而无需依赖格子或多线性映射。

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
> 向量承诺（VC）是一种密码学原语，可以使人们对一个向量进行承诺，并有效地“打开”其中的一些位置。向量承诺越来越被认为是扩展高度分散的大规模网络及其内容动态性的中心工具。在这项工作中，我们根据出现的实际应用的众多要求，研究了向量承诺应该具备的特性，并提出了在几个方面改进最新技术、并提供新的权衡的新构建方法。我们还提出了一个统一的框架，对几个构建方法进行了总结，并展示了如何基于更基本的特性来通用实现某些属性。在实际应用方面，我们专注于构建高效的方案，无需新的可信设置（我们可以重复使用现有的配对基础方案，如Zcash或Filecoin运行的“tau的幂”）。

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
> 向量承诺允许用户使用恒定大小的承诺来承诺长度为n的向量，同时能够本地打开承诺以获得单个向量坐标。重要的是，按位置打开的大小应该与维度n无关。 Gorbunov，Reyzin，Wee和Zhang最近提出了PointProofs（CCS 2020），这是一种支持在多个承诺之间聚合证明的向量承诺方案，可以极大地减少区块链智能合约中块传播的成本。 Gorbunov等人结合代数群模型和随机预言机模型提供了安全分析，基于弱n-双线性Diffie-Hellman指数假设（n-wBDHE）假设。 在这项工作中，我们提出了一种不依赖于代数群模型的新颖分析。 我们证明了在n-Diffie-Hellman指数（n-DHE）假设下的随机预言机模型中的安全性，这是由Gorbunov等人考虑的n-wBDHE假设所暗示的。 我们还注意到，我们没有修改他们的方案（因此保留了其效率），也没有引入任何其他假设。 相反，我们通过严格改进的分析证明了方案的安全性。

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
> 环签名允许用户代表一个临时的用户集合（即一个环）签署消息，同时隐藏自己的身份。环签名最初的动机是揭发举报[Rivest et al. ASIACRYPT’01]：高级政府员工可以匿名泄露敏感信息，并通过签署泄露的文件来证明其来源可靠。然而，基本上所有已知的环签名方案都要求环中的成员发布一个与该方案兼容的结构化验证密钥。这在某种程度上产生了一种悖论，因为如果用户不想被指控举报，他们会避开支持环签名的签名方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_9](https://doi.org/10.1007/978-3-031-22972-5_9)
## The Abe-Okamoto Partially Blind Signature Scheme Revisited.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#the-abe-okamoto-partially-blind-signature-scheme-revisited) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#the-abe-okamoto-partially-blind-signature-scheme-revisited)**
### 作者
* Julia Kastner, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Jiayu Xu, School of Electrical Engineering and Computer Science, Oregon State University, Corvallis, OR, USA
### 摘要
> 部分盲签名是普通盲签名的扩展，是电子现金和电子投票中具有广泛应用的一种基本原理。迄今为止最有效的方案之一是由阿贝和冈本在CRYPTO 2000中提出的方案，其潜在的理念——OR证明技术——已成为几项研究的基础。

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
> 代数群模型（AGM），由Fuchsbauer、Kiltz和Loss正式化，最近引起了极大的关注。AGM的吸引人之处之一是，它被视为（严格地）弱于通用群模型（GGM），在这个意义上，代数算法的难度结果意味着通用算法的难度结果，并且AGM中的通用规约（即两个问题的代数表达之间）意味着GGM中的通用规约。我们强调，就目前的GGM和AGM的正式化而言，这并不成立：在AGM中的难度可能不意味着在GGM中的难度，而在AGM中的通用规约也可能不意味着在GGM中的类似规约。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_11](https://doi.org/10.1007/978-3-031-22972-5_11)
## Instantiability of Classical Random-Oracle-Model Encryption Transforms.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#instantiability-of-classical-random-oracle-model-encryption-transforms) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#instantiability-of-classical-random-oracle-model-encryption-transforms)**
### 作者
* Alice Murphy, Department of Computer Science, University of Waterloo, Waterloo, Canada
* Adam O’Neill, Manning CICS, University of Massachusetts Amherst, Amherst, USA
* Mohammad Zaheri, Snap Inc., Santa Monica, USA
### 摘要
> 利用程序混淆来扩展工作以实例化基于随机预言的转换（例如，Hohenberger等人，EUROCRYPT 2014；Kalai等人，CRYPTO 2017），我们证明，使用混淆和其他假设，存在标准模型哈希函数足以实例化经典的RO模型加密转换OAEP（Bellare和Rogaway，EUROCRYPT 1994）和Fujisaki-Okamoto（CRYPTO 1999，J. Cryptology 2013）以实现特定公钥加密（PKE）方案的IND-CCA安全性。我们针对Fujisaki-Okamoto的结果采用了对该方案的简单修改。

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
> 我们在平面模型中给出了1）不可塑数字储物柜（Canetti和Varia，TCC 2009）和2）强健模糊提取器（Boyen等，Eurocrypt 2005）的第一个构造，可以确保熵低于其长度的1/2的源。以往只有在随机预言机或共同参考字符串（CRS）的假设下，这两个原语的构造才被知晓。

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
> 非可塑代码（Dziembowski、Pietrzak和Wichs，ICS 2010＆JACM 2018）可以保护任意密码原语免受相关密钥攻击（RKA）。 即使使用保证针对单个篡改尝试是不可塑的代码，也可以在假设完美内存抹除的条件下，对抗多次篡改攻击并获得RKA安全性。 相反，连续不可塑代码（Faust、Mukherjee、Nielsen和Venturi，TCC 2014）不会受到此限制，因为非可塑性保证针对poly-许多篡改尝试成立。 不幸的是，只有少数连续不可塑代码的构造方法，而标准的非可塑代码已知针对包括NC0和决策树篡改，AC0甚至有限的多项式深度篡改在内的各种篡改家族。 我们通过在以下自然设置中提供首个连续不可塑代码的构造方法来改变这种情况：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_14](https://doi.org/10.1007/978-3-031-22972-5_14)
## Failing Gracefully: Decryption Failures and the Fujisaki-Okamoto Transform.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#failing-gracefully-decryption-failures-and-the-fujisaki-okamoto-transform) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#failing-gracefully-decryption-failures-and-the-fujisaki-okamoto-transform)**
### 作者
* Kathrin Hövelmanns, Eindhoven University of Technology, Eindhoven, The Netherlands
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
* Christian Majenz, Department of Applied Mathematics and Computer Science, Technical University of Denmark, Lyngby, Denmark
### 摘要
> 在已知的对于藤崎-冈本转换的安全证明中，通过一个解决非常不自然的任务——即在给定私钥的情况下找到解密失败的明文来处理解密失败，从而得到了格罗弗搜索界限。此外，为了在量子只读存储模型(QROM)中获得合理的安全性界限，还需要一个隐式拒绝机制来处理无效的密文。我们提出了一种没有这些缺陷的简化方法：我们引入了与寻找解密失败相关的两个安全性游戏，其中一个捕捉到了使用公钥寻找解密失败这个计算上困难的任务，另一个捕捉到了在随机哈希函数中搜索键独立的失败（例如，大的随机数）这个统计上困难的任务。因此，我们在QROM中的安全性界限相对于一般的随机哈希函数搜索攻击是更严格的：攻击者只能部分地计算搜索谓词，即针对这些键独立的失败情况。此外，我们的整个简化方法适用于显式拒绝变体的转换，并且相对于所有已知的简化方法都有显著的改进。除了是转换的更自然的变体之外，显式拒绝机制的安全性也与隐式拒绝变体的侧信道攻击韧性相关。在此过程中，我们证明了若干技术结果，这些结果对于描述前像提取和某些在QROM中可能具有独立兴趣的搜索任务是有价值的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_15](https://doi.org/10.1007/978-3-031-22972-5_15)
## Optimising Linear Key Recovery Attacks with Affine Walsh Transform Pruning.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#optimising-linear-key-recovery-attacks-with-affine-walsh-transform-pruning) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#optimising-linear-key-recovery-attacks-with-affine-walsh-transform-pruning)**
### 作者
* Antonio Flórez-Gutiérrez, Inria, Paris, France
### 摘要
> 线性密码分析（Linear cryptanalysis）[25] 是对分组密码进行密钥恢复攻击的主要方法之一。几篇论文 [16, 19] 对利用快速沃尔什变换来降低其时间复杂度的可能性引起了关注。这些以前的研究忽略了密钥恢复轮的结构，将其视为任意布尔函数。本文通过利用沃尔什变换的零值频谱，并采用一种新颖的仿射修剪技术，优化了这些算法的时间和内存复杂度。然后，我们通过两个应用示例展示了这些新的优化策略：对DES [1] 的改进攻击和对29轮PRESENT-128 [9] 的首次已知攻击。

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
> 代码为基础的密码学安全性主要依赖线性码的通用解码难度。最好的通用解码算法都是Prange的一个老算法的改进版本，被称为信息集译码器（ISD）。不久前，有一种不属于该算法家族的通用解码算法被提出：统计解码。它是一种随机化算法，需要计算一组大规模的中等权重校验方程，并对这些方程进行某种多数投票来恢复错误。即使是最好的变体与最简单的ISD算法相比，其表现也很差，因此这个算法早已被遗忘。我们通过更通用的方式使用校验方程重新审视了这个老算法。在这里，校验方程被用来获得具有秘密部分错误和LPN噪声与所生成的校验方程的权重相关的LPN样本。随后，采用标准傅立叶技术解决相应的LPN问题。通过适当选择产生低权重方程的方法和LPN问题的大小，我们能够在0.3以下的码率范围内显著优于信息集译码器。这是60年来首次为不属于ISD家族的重要范围提供了更好的解码算法。

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
> 在Eurocrypt 2022会议上，May等人提出了一种针对CRT-RSA的部分密钥暴露（PKE）攻击方法，通过仅知晓私钥指数\(d_p\)和\(d_q\)的\(\frac{1}{3}\)份其中一种最高有效位（MSBs）或最低有效位（LSBs），可以高效地分解\(N\)，而公共指数\(e\)约为\(N^{\frac{1}{12}}\)。实际上，PKE攻击通常依赖于这些指数的边信道泄漏，而具有抵御边信道攻击的CRT-RSA实施通常使用加性盲化指数\(d^{\prime}_p = d_p + r_p(p-1)\)和\(d^{\prime}_q = d_q + r_q(q-1)\)，其中\(r_p\)和\(r_q\)是未知的随机盲化因子，这增加了PKE攻击的难度。

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
> 立方攻击通过恢复特殊多项式——超多项式以及随后的秘密密钥，利用对称密码的代数性质。当相应布尔函数的代数标准形不可用时，基于除法特性的方法可以以巧妙的方式恢复出精确的超多项式。然而，随着密码轮数的增加，恢复超多项式的计算成本变得很高。例如，在Trivium上，2021年的ASIACRYPT提出的嵌套单项式预测方法（NMP）卡在第845轮。为了缓解NMP技术的瓶颈——由于单项式轨迹数量过多而无法解决的模型问题，我们将注意力转向特定中间轮次对超多项式的贡献，即所谓的有价值项。我们引入了两种新技术，即非零比特基于除法特性（NBDP）和核心单项式预测（CMP），与MP的MILP模型相比，这两种技术都可以得到更简单的MILP模型。可以证明CMP技术在计算有价值项的复杂度方面比单项式预测技术有明显改进。将分而治之策略与这两种新技术相结合，我们可以更有效地捕获有价值项，从而避免在对超多项式没有贡献的中间项上浪费计算资源。作为我们技术能力的一个示例，我们将我们的框架应用于Trivium、Grain-128AEAD、Kreyvium和Acorn。结果，早期攻击的计算成本可以显著降低，并且在实际时间内可以恢复出846轮、847轮和848轮Trivium、192轮Grain-128AEAD、895轮Kreyvium和776轮Acorn的超多项式的精确ANFs，尽管848轮Trivium的超多项式包含超过5亿个项；这分别比以前的最佳结果多了3轮、1轮、1轮和1轮。此外，通过研究Möbius变换的内部特性，我们展示了如何使用涉及完整密钥比特的超多项式进行密钥恢复，从而实现了对目标密码的最佳密钥恢复攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_19](https://doi.org/10.1007/978-3-031-22972-5_19)
## Functional Encryption with Secure Key Leasing.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#functional-encryption-with-secure-key-leasing) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#functional-encryption-with-secure-key-leasing)**
### 作者
* Fuyuki Kitagawa, NTT Social Informatics Laboratories, Tokyo, Japan
* Ryo Nishimaki, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 安全软件租赁是一种量子密码原语，它通过将软件编码成量子状态，使我们能够将软件出租给用户。安全软件租赁具有一种验证返回的软件是否有效的机制。安全概念保证一旦用户以有效的形式返回软件，用户将不再使用该软件。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_20](https://doi.org/10.1007/978-3-031-22972-5_20)
## Classically Verifiable NIZK for QMA with Preprocessing.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#classically-verifiable-nizk-for-qma-with-preprocessing) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#classically-verifiable-nizk-for-qma-with-preprocessing)**
### 作者
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 我们提出了三种在不同预处理模型中用于\(\textbf{QMA}\)的经典可验证的非交互零知识证明和论证（CV-NIZK）的构造。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_21](https://doi.org/10.1007/978-3-031-22972-5_21)
## General Properties of Quantum Bit Commitments (Extended Abstract).
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#general-properties-of-quantum-bit-commitments-extended-abstract) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#general-properties-of-quantum-bit-commitments-extended-abstract)**
### 作者
* Jun Yan, Jinan University, Guangzhou, China
### 摘要
> 尽管无条件安全的量子比特承诺（允许量子计算和通信）是不可能的，但研究人员转而研究基于复杂性的一种，即计算量子比特承诺。计算规范（非交互式）量子比特承诺方案指的是一种承诺只包含来自发送者到接收者的单个（量子）消息的方案，稍后可以通过取消提交阶段来打开承诺。在此工作中，我们通过规范化的量子比特承诺对计算量子比特承诺的一般特性进行了研究。除了其他结果外，我们特别得出了以下两个结论：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_22](https://doi.org/10.1007/978-3-031-22972-5_22)
