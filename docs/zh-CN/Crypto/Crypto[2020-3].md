# Crypto[2020-3]
## Two-Sided Malicious Security for Private Intersection-Sum with Cardinality.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#two-sided-malicious-security-for-private-intersection-sum-with-cardinality) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#two-sided-malicious-security-for-private-intersection-sum-with-cardinality)**
### 作者
* Sarvar Patel, Google LLC, Mountain View, USA
* Mariana Raykova, Google LLC, Mountain View, USA
* Karn Seth, Google LLC, Mountain View, USA
* Moti Yung, Google LLC, Mountain View, USA
* Peihan Miao, Visa Research, Palo Alto, USA
### 摘要
> 私有交叉求和与基数允许两个参与方，每个参与方拥有一个私有集合，并且其中一个参与方还拥有与她集合中的每个元素相关联的私有整数值，以便共同计算两个集合的交集的基数，以及交集中所有元素的相关整数值的求和，没有其他信息。
> 
> 我们提出了一个新的用于私有交叉求和与基数的构造，它提供了中止的恶意安全性，并保证在协议成功完成后，两个参与方都接收到输出。我们构造的一个中心组成部分是称为混洗分布式无视PRF（DOPRF）的原语，它是一种使用两个参与方之间共享的秘密密钥提供无视评估的PRF，并且除此之外，还允许无脑地对几个并行的无视评估的PRF输出进行混洗。我们提出了第一个具有恶意安全性的混洗DOPRF构造。我们进一步提出了几个新的关于Pedersen承诺，ElGamal加密和Camenisch-Shoup加密的关系的sigma证明协议，我们在主要构建中使用了这些新的批处理技术来减少通信量。
> 
> 我们实施并评估了我们的协议的效率，并显示我们可以实现的通信成本仅比最高效的半诚实协议高4-5倍。当在云中执行协议的货币成本时，我们的协议比半诚实协议更昂贵25倍。我们的构造还允许不同的参数体制，以在通信和计算之间进行权衡。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_1](https://doi.org/10.1007/978-3-030-56877-1_1)
## Private Set Intersection in the Internet Setting from Lightweight Oblivious PRF.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#private-set-intersection-in-the-internet-setting-from-lightweight-oblivious-prf) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#private-set-intersection-in-the-internet-setting-from-lightweight-oblivious-prf)**
### 作者
* Melissa Chase, Microsoft Research, Redmond, USA
* Peihan Miao, Visa Research, Palo Alto, USA
### 摘要
> 我们提出一种新的双方隐私集交集（PSI）协议，具有清晰模型中的半诚实安全性和随机预言模型中的单方恶意安全性。我们的协议在计算和通信之间实现了更好的平衡，优于现有的PSI协议。具体来说，我们的协议在中等带宽网络（例如30-100 Mbps）中最快。考虑到在云计算服务上运行协议的货币成本（由Pinkas等人在CRYPTO 2019年提出），我们的协议也有竞争力。
> 
> 我们PSI协议的基础是一种基于遗忘传输（OT）扩展的新型轻量级多点遗忘伪随机函数（OPRF）协议。我们相信这个新协议可能具有独立的兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_2](https://doi.org/10.1007/978-3-030-56877-1_2)
## Multiparty Generation of an RSA Modulus.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#multiparty-generation-of-an-rsa-modulus) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#multiparty-generation-of-an-rsa-modulus)**
### 作者
* Megan Chen, Northeastern University, Boston, MA, USA
* Ran Cohen, Northeastern University, Boston, MA, USA
* Jack Doerner, Northeastern University, Boston, MA, USA
* Yashvanth Kondi, Northeastern University, Boston, MA, USA
* Eysa Lee, Northeastern University, Boston, MA, USA
* Schuyler Rosefield, Northeastern University, Boston, MA, USA
* Abhi Shelat, Northeastern University, Boston, MA, USA
### 摘要
> 我们提出了一种新的多方协议，用于分布式生成双质数RSA模，具有针对任何恶意串通方的安全性，假设同时采用遗忘传输和分解困难度。我们的协议高度模块化，其最上层可以被视为概括之前作品结构的模板，并导致更简单的安全性证明。我们引入了一种组合取样和筛选技术，消除了Frederiksen等人方法中固有泄漏的问题，并消除了Hazay等人方法中对可加同态加密的依赖。我们将这个技术与一种有效、无隐私检查相结合，以便在抽样的候选者不是双质数时检测恶意行为，并因此克服隐蔽的拒绝抽样攻击，实现比先前技术水平具有渐近和具体效率改进。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_3](https://doi.org/10.1007/978-3-030-56877-1_3)
## Non-malleability Against Polynomial Tampering.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#non-malleability-against-polynomial-tampering) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#non-malleability-against-polynomial-tampering)**
### 作者
* Marshall Ball, Columbia University, New York, USA
* Tal Malkin, Columbia University, New York, USA
* Eshan Chattopadhyay, Cornell University, Ithaca, USA
* Jyun-Jie Liao, Cornell University, Ithaca, USA
* Li-Yang Tan, Stanford University, Stanford, USA
### 摘要
> 我们首次给出了一个明确的构造方法，可以处理有限次多项式的非可塑性编码。在我们的工作之前，这仅在一次多项式（仿射篡改函数）中是已知的，由Chattopadhyay和Li（STOC 2017）证明。作为一个直接推论，我们得到了一个明确的非可塑性编码，该编码对于有限大小算术电路的篡改是安全的。
> 
> 我们展示了我们的非可塑性编码在构建对有限次多项式篡改具有鲁棒性的非可塑性秘密共享方案中的应用。事实上，我们的结果更强大：我们可以处理对有限数量的共享的初始泄漏基于自适应选择多项式篡改函数的对手。
> 
> 我们的结果来源于无种子的非可塑性提取器的明确构造，可以处理有限次多项式的篡改函数。在我们的工作之前，即使在二次多项式中也没有这样的结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_4](https://doi.org/10.1007/978-3-030-56877-1_4)
## Non-malleable Secret Sharing Against Bounded Joint-Tampering Attacks in the Plain Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#non-malleable-secret-sharing-against-bounded-joint-tampering-attacks-in-the-plain-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#non-malleable-secret-sharing-against-bounded-joint-tampering-attacks-in-the-plain-model)**
### 作者
* Gianluca Brian, Sapienza University of Rome, Rome, Italy
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
* Antonio Faonio, IMDEA Software Institute, Madrid, Spain
* Maciej Obremski, National University of Singapore, Singapore, Singapore
* Mark Simkin, Aarhus University, Aarhus, Denmark
### 摘要
> 秘密分享允许经销商将秘密分割成一组份额，使得某些特定的持有者子集可以重建秘密，而所有未经授权的子集都不能。非可塑性秘密分享（Goyal和Kumar，STOC 2018）还要求，即使份额被篡改，重建的秘密要么是原始的，要么是完全无关的。
> 
> 在这项工作中，我们在纯模型（在计算设置中）中构建了可容忍 \(p\) -时间联合篡改攻击的非可塑性秘密分享，在这种情况下，对于任何预先固定的 \(p>0\) ，攻击者可以最多 \(p\) 次地篡改相同的目标秘密分享。特别是，假设一对一单向函数，我们得到：
> 
> - 一个秘密分享方案，用于容忍份额最大尺寸子集的联合 \(p\) -次篡改（即与方案的隐私阈值相匹配）。这适用于一个模型，在这个模型中，攻击者承诺将份额分成非重叠的子集，并继续集体干扰这些子集内的份额（称为选择性分区）。
> 
> - 一个用于容忍份额大小为 \(O(\sqrt{\log n})\) 的总体访问结构的秘密分享方案，该方案将承受关于 \(n\) 个参与者的联合 \(p\) -次篡改。这适用于一个更强的模型，其中攻击者允许根据每次篡改查询自适应地更改分区，但受限于一旦一组份额集合被联合篡改，则这个子集集合总是被联合篡改，或者不被其他篡改查询修改（即所谓的半自适应分区）。
> 
> 在我们选择性分区结果的核心是一种新的技术，该技术表明每次统计上不可塑性秘密分享反对联合篡改实际上是泄漏恢复不可塑性的（即攻击者可以在篡改之前同时从份额中泄漏）。我们相信这可能是独立利益，并且事实上我们证明它意味着统计上不可塑性秘密分享反对独立篡改的份额尺寸和随机复杂性的下限。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_5](https://doi.org/10.1007/978-3-030-56877-1_5)
## Nearly Optimal Robust Secret Sharing Against Rushing Adversaries.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#nearly-optimal-robust-secret-sharing-against-rushing-adversaries) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#nearly-optimal-robust-secret-sharing-against-rushing-adversaries)**
### 作者
* Pasin Manurangsi, Google Research, Mountain View, USA
* Akshayaram Srinivasan, University of California, Berkeley, USA
* Prashant Nalini Vasudevan, University of California, Berkeley, USA
### 摘要
> 稳健的秘密分享是对标准秘密分享的加强，即使在重建中所使用的部分份额遭到对手的敌意修改，也可以恢复共享的秘密。在这项工作中，我们研究了一种设置，即在所有n个份额中，对手被允许自适应地破坏和修改t个份额，其中\(n = 2t+1\)（注意，如果对手被允许修改更多的份额，那么正确的重建将是不可能的）。此外，我们处理了急切敌手，意味着对手被允许在修改自己的份额之前看到诚实方的份额。
> 
> 已知当\(n = 2t+1\)时，为了分享长度为m位的秘密并在误差小于\(2^{-\lambda }\)的情况下恢复它，需要至少m+\lambda位的份额。最近，Bishop、Pastro、Rajaraman和Wichs（EUROCRYPT 2016）构建了一个具有大小为\(m + O(\lambda \cdot \mathrm{polylog}(n,m,\lambda ))\)位份额的稳健秘密分享方案，针对非急切敌手在这个设置下是安全的。随后，Fehr和Yuan（EUROCRYPT 2019）构建了一个对付急切敌手是安全的方案，但其份额大小为\(m\,+\,O(\lambda \cdot n^{{\varepsilon }}\cdot \mathrm{polylog}(n,m,\lambda ))\)位，其中\({\varepsilon }> 0\)是一个任意常数。他们还展示了一种改进的构造方法，份额大小为\(m + O(\lambda \cdot \mathrm{polylog}(n,m,\lambda ))\)位，但重建时间是超多项式时间。
> 
> 我们提出了一个稳健秘密分享方案，它在所有这些方面都是接近最优的 - 它对急切敌手是安全的，具有大小为\(m\,+\,O(\lambda \log {n} (\log {n}+\log {m}))\)位的份额，并且具有多项式时间的分享和重建。我们构造的核心是一个半随机图的多项式时间算法，这个问题在我们和上述工作中使用的分享本地身份验证范式中自然产生。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_6](https://doi.org/10.1007/978-3-030-56877-1_6)
## Cryptanalytic Extraction of Neural Network Models.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#cryptanalytic-extraction-of-neural-network-models) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#cryptanalytic-extraction-of-neural-network-models)**
### 作者
* Nicholas Carlini, Google, Mountain View, CA, USA
* Matthew Jagielski, Northeastern University, Boston, USA
* Ilya Mironov, Facebook, Menlo Park, USA
### 摘要
> 我们认为，模型提取的机器学习问题实际上是一个加密分析问题，并应该作为这样的问题进行研究。通过对神经网络进行预言机访问，我们引入了一种差分攻击，可以高效地窃取远程模型的浮点精度参数。我们的攻击依赖于ReLU神经网络是分段线性函数的事实，因此在关键点进行查询可以揭示有关模型参数的信息。
> 
> 我们对多个神经网络模型进行评估，并提取出比之前的工作精度更高和查询次数减少100倍的模型。例如，我们在不到一小时的时间内提取出一个在MNIST数字识别任务上训练的具有100,000个参数的神经网络，需要\(2^{21.5}\)个查询，从而提取模型在所有输入上与预言机的一致性为最坏情况误差\(2^{-25}\)，或者提取一个具有4,000个参数的模型，在\(2^{18.5}\)个查询中，最坏情况误差为\(2^{-40.4}\)。代码可在https://github.com/google-research/cryptanalytic-model-extraction上获得。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_7](https://doi.org/10.1007/978-3-030-56877-1_7)
## Automatic Verification of Differential Characteristics: Application to Reduced Gimli.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#automatic-verification-of-differential-characteristics-application-to-reduced-gimli) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#automatic-verification-of-differential-characteristics-application-to-reduced-gimli)**
### 作者
* Fukang Liu, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Takanori Isobe, National Institute of Information and Communications Technology, Tokyo, Japan
* Fukang Liu, University of Hyogo, Hyogo, Japan
* Takanori Isobe, University of Hyogo, Hyogo, Japan
* Willi Meier, FHNW, Windisch, Switzerland
### 摘要
> 自从Keccak被选为SHA-3标准以来，越来越多的基于置换的原语被提出。与分组密码不同，置换原语的底层置换中没有轮密钥。因此，考虑到不同轮之间的差分转换的依赖性时，底层置换的差分特性产生不兼容性的风险更高。然而，在大多数用于搜索差分特性的MILP或SAT模型中，只涉及差分转换，并且被视为不同轮之间的独立。这可能导致找到不适用于底层置换的无效特性。为了克服这个障碍，我们有动力设计一个模型，可以自动避免搜索差分特性时的不一致性。我们的技术是在构建的模型中同时涉及差分转换和值转换。这个想法受到了Mendel等人在ASIACRYPT 2011中提出的寻找SHA-2特性的算法的启发，该算法同时搜索差分特性和符合的消息对。作为一个初步尝试，我们的新技术将应用于在CHES 2017中提出的Gimli置换。结果发现，一些现有的减少版Gimli的差分特性确实是不兼容的，其中一个特性在Gimli文档中被发现。此外，由于Gimli文档只分析了置换，我们还进行了全面的研究，包括为Gimli指定的哈希方案和认证加密(AE)方案，该方案已成为NIST轻量级密码标准化过程的第二轮候选。对于哈希方案，半自由起始(SFS)碰撞攻击可以从中间轮达到最多8轮。对于AE方案，进行了一次状态恢复攻击，可达到最多9轮。应强调的是，我们的分析不会威胁到Gimli的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_8](https://doi.org/10.1007/978-3-030-56877-1_8)
## The MALICIOUS Framework: Embedding Backdoors into Tweakable Block Ciphers.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#the-malicious-framework-embedding-backdoors-into-tweakable-block-ciphers) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#the-malicious-framework-embedding-backdoors-into-tweakable-block-ciphers)**
### 作者
* Thomas Peyrin, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Haoyang Wang, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
### 摘要
> 将后门插入加密算法长期以来一直是一个非常有趣但难度较大的问题。迄今为止，在对称密钥基元中的大多数尝试都不成功，如何构建这样的密码系统仍然是一个悬而未决的问题。
> 
> 在这份研究中，我们提出了一种名为MALICIOUS的框架，这是一种构建可调节区块密码并隐藏后门以便检索秘密密钥的新方法。我们的后门是差分式的：在密码系统设计阶段隐藏了一个具有高概率的特定相关调整差分路径。我们解释了任何了解后门的实体如何实际恢复用户的秘密密钥，并且我们也阐述了为什么即使了解后门的存在和密码系统的运作方式，对于外部用户来说也无法检索到后门。我们在经典黑盒模型下分析了我们方案的安全性，并展示了检索后门（即隐藏的高概率差分路径）的困难性。
> 
> 我们通过提出LowMC-M结构体来实现我们的框架，这是一种基于LowMC密码实例的新型可调节区块密码族，可以嵌入这样的后门。生成LowMC-M实例非常简单，而且LowMC-M族与其基于的LowMC实例在效率上基本相同。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_9](https://doi.org/10.1007/978-3-030-56877-1_9)
## Cryptanalysis of the Lifted Unbalanced Oil Vinegar Signature Scheme.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#cryptanalysis-of-the-lifted-unbalanced-oil-vinegar-signature-scheme) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#cryptanalysis-of-the-lifted-unbalanced-oil-vinegar-signature-scheme)**
### 作者
* Jintai Ding, University of Cincinnati, Cincinnati, OH, USA
* Joshua Deaton, University of Cincinnati, Cincinnati, OH, USA
* Kurt Schmidt, University of Cincinnati, Cincinnati, OH, USA
* Vishakha, University of Cincinnati, Cincinnati, OH, USA
* Zheng Zhang, University of Cincinnati, Cincinnati, OH, USA
### 摘要
> 2017年，Ward Beullens等人提交了基于著名多项式公钥密码体制（MPKC）Unbalanced Oil and Vinegar (UOV) 的Lifted Unbalanced Oil and Vinegar (LUOV) [4] 签名方案，用作参与NIST后量子公钥方案标准化的竞赛。 LUOV的定义特征在于，尽管公钥 \(\mathscr {P}\) 工作在 \(\mathbb {F}_2\) 的r次扩展域上，但 \(\mathscr {P}\) 的系数来自 \(\mathbb {F}_2\)，这是为了显著减小 \(\mathscr {P}\) 的大小。LUOV方案现在正处于NIST PQC标准化流程的第二轮中。
> 
> 本文提出了对LUOV的新型攻击方法。它利用LUOV的“lifted”结构，将直接攻击转化为在子域上进行。我们证明了这降低了复杂度，使其低于NIST后量子标准化竞赛的目标安全性水平。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_10](https://doi.org/10.1007/978-3-030-56877-1_10)
## Out of Oddity - New Cryptanalytic Techniques Against Symmetric Primitives Optimized for Integrity Proof Systems.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#out-of-oddity-new-cryptanalytic-techniques-against-symmetric-primitives-optimized-for-integrity-proof-systems) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#out-of-oddity-new-cryptanalytic-techniques-against-symmetric-primitives-optimized-for-integrity-proof-systems)**
### 作者
* Tim Beyne, imec-COSIC, KU Leuven, Leuven, Belgium
* Anne Canteaut, Inria, Paris, France
* Gaëtan Leurent, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
* Léo Perrin, Inria, Paris, France
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
* Maria Eichlseder, Graz University of Technology, Graz, Austria
* Maria Eichlseder, Ruhr-Universität Bochum, Bochum, Germany
* Gregor Leander, Ruhr-Universität Bochum, Bochum, Germany
* Yosuke Todo, Ruhr-Universität Bochum, Bochum, Germany
* Friedrich Wiemer, Ruhr-Universität Bochum, Bochum, Germany
* Friedrich Wiemer, cryptosolutions, Essen, Germany
* Yu Sasaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Yosuke Todo, NTT Secure Platform Laboratories, Tokyo, Japan
### 摘要
> 许多完整性验证系统，如SNARKs、STARKs和Bulletproofs的安全性和性能高度依赖底层哈希函数。因此，最近已经开发了几个新的提案。这些原语显然需要深入的安全评估，特别是因为它们的实施约束导致了较少标准的设计方法。本研究比较了最近两个这类原语家族提供的安全级别，即GMiMC和HadesMiMC。我们展示了针对GMiMC和HadesMiMC排列的低复杂度区分器，适用于最近推出的STARK友好哈希函数的大多数参数。在实际使用中，相对应于ZK-STARK协议的海绵结构设置中，我们针对GMiMC的轮降版本提出了一个实际的碰撞攻击，以及针对HadesMiMC的一些实例提出了前像攻击。为了取得这些结果，我们改编和推广了几种密码技术，以适应奇数特征的领域。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_11](https://doi.org/10.1007/978-3-030-56877-1_11)
## Improved Differential-Linear Attacks with Applications to ARX Ciphers.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#improved-differential-linear-attacks-with-applications-to-arx-ciphers) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#improved-differential-linear-attacks-with-applications-to-arx-ciphers)**
### 作者
* Christof Beierle, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* Yosuke Todo, Ruhr University Bochum, Bochum, Germany
* Yosuke Todo, NTT Secure Platform Laboratories, Tokyo, Japan
### 摘要
> 我们在差分线性攻击框架上进行了数项改进，特别侧重ARX密码技术。作为其影响力的展示，我们将其应用于Chaskey和ChaCha，并能够显著改进到目前已发表的最佳攻击方式。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_12](https://doi.org/10.1007/978-3-030-56877-1_12)
## Cryptanalysis Results on Spook - Bringing Full-Round Shadow-512 to the Light.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#cryptanalysis-results-on-spook-bringing-full-round-shadow-512-to-the-light) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#cryptanalysis-results-on-spook-bringing-full-round-shadow-512-to-the-light)**
### 作者
* Patrick Derbez, Univ Rennes, CNRS, IRISA, Rennes, France
* Paul Huynh, Université de Lorraine, CNRS, Inria, LORIA, 54000, Nancy, France
* Virginie Lallemand, Université de Lorraine, CNRS, Inria, LORIA, 54000, Nancy, France
* María Naya-Plasencia, Inria, Paris, France
* Léo Perrin, Inria, Paris, France
* André Schrottenloher, Inria, Paris, France
### 摘要
> Spook [BBB+19] 是进入NIST轻量级密码标准化流程第二轮的32个候选算法之一，其在提出差分侧信道抵抗方面尤为引人注目。本文中，我们提出了对Spook底层置换算法的完整6步版本（即Shadow-512和Shadow-384）的实用区分器，并解决了设计者在置换中提出的挑战。我们还在随机数误用场景下针对S1P工作模式提出了基于4步Shadow的实用伪造方法，该场景在作者考虑的CIML2安全博弈中是允许的。本文中所呈现的所有结果都已得到实现。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_13](https://doi.org/10.1007/978-3-030-56877-1_13)
## Cryptanalysis of LEDAcrypt.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#cryptanalysis-of-ledacrypt) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#cryptanalysis-of-ledacrypt)**
### 作者
* Daniel Apon, National Institute of Standards and Technology, Gaithersburg, USA
* Ray Perlner, National Institute of Standards and Technology, Gaithersburg, USA
* Angela Robinson, National Institute of Standards and Technology, Gaithersburg, USA
* Paolo Santini, Università Politecnica delle Marche, Ancona, Italy
* Paolo Santini, Florida Atlantic University, Boca Raton, USA
### 摘要
> 我们报告了对LEDAcrypt的具体密码分析，LEDAcrypt是NIST后量子密码标准化过程中第二轮候选方案之一，也是17种加密方案中仅剩的候选进行近期标准化的方案之一。LEDAcrypt包括从McEliece范式构建的公钥加密方案和从Niederreiter范式构建的密钥封装机制（KEM），两者均使用准循环低密度奇偶校验（QC-LDPC）码。
> 
> 在这项工作中，我们确定了一大类极其脆弱的密钥，并提供了一个恢复它们的算法。例如，我们演示了如何仅使用256位安全级别下的\(2^{18.72}\)次猜测来恢复LEDAcrypt密钥中的\(2^{47.72}\)之一。这是对LEDAcrypt的重大实质性突破。此外，我们还演示了一个连续的、逐渐变弱的密钥类别（从极其脆弱的密钥到所有密钥），其恢复工作量明显小于先前所知。这表明LEDAcrypt的缺陷根本上与系统设计有关。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_14](https://doi.org/10.1007/978-3-030-56877-1_14)
## Alzette: A 64-Bit ARX-box - (Feat. CRAX and TRAX).
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#alzette-a-64-bit-arx-box-feat-crax-and-trax) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#alzette-a-64-bit-arx-box-feat-crax-and-trax)**
### 作者
* Christof Beierle, Ruhr University Bochum, Bochum, Germany
* Alex Biryukov, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Luan Cardoso dos Santos, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Johann Großschädl, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Qingju Wang, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Léo Perrin, Inria, Paris, France
* Aleksei Udovenko, CryptoExperts, Paris, France
* Vesselin Velichkov, University of Edinburgh, Edinburgh, UK
### 摘要
> S-boxes是许多对称密码基元中唯一的非线性来源。虽然它们通常被定义为在一个小空间上操作的函数，但最近的一些设计提出了使用更大的S-box（例如32位）的方法。在这种情况下，S-box被定义为一个子函数，其密码学特性可以被精确地估计。
> 
> 我们提出了一种64位ARX-based S-box，名为Alzette，它可以在现代CPU上仅使用12条指令以恒定时间进行评估。它的并行应用还可以利用向量（SIMD）指令。Alzette的一次迭代具有与AES S-box相当的微分和线性特性，两次迭代至少与AES超级S-box一样安全。由于状态大小远大于典型的4或8位，研究Alzette的相关密码学特性并不简单。
> 
> 我们进一步讨论了如何利用这样的宽S-box构建具有良好密码学特性的64位、128位和256位（可调整）分组密码的轮函数，在相关调整设置下甚至能够提供保证性。我们使用这些结构设计了一种非常轻量级的64位分组密码（Crax），在微控制器上对短消息的性能优于SPECK-64/128，并且设计了一种256位可调整分组密码（Trax），可以用于获得针对强大对手（滥用nonce、量子攻击）的强安全性保证。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_15](https://doi.org/10.1007/978-3-030-56877-1_15)
## Order-Fairness for Byzantine Consensus.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#order-fairness-for-byzantine-consensus) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#order-fairness-for-byzantine-consensus)**
### 作者
* Mahimna Kelkar, Cornell Tech, New York, USA
* Fan Zhang, Cornell Tech, New York, USA
* Steven Goldfeder, Cornell Tech, New York, USA
* Ari Juels, Cornell Tech, New York, USA
* Mahimna Kelkar, Cornell University, Ithaca, USA
* Fan Zhang, Cornell University, Ithaca, USA
* Steven Goldfeder, Cornell University, Ithaca, USA
* Ari Juels, Cornell University, Ithaca, USA
* Mahimna Kelkar, The Initiative for CryptoCurrencies & Contracts (IC3), New York, USA
* Fan Zhang, The Initiative for CryptoCurrencies & Contracts (IC3), New York, USA
* Steven Goldfeder, The Initiative for CryptoCurrencies & Contracts (IC3), New York, USA
* Ari Juels, The Initiative for CryptoCurrencies & Contracts (IC3), New York, USA
### 摘要
> 几十年来，密码学和分布式系统的研究广泛研究了状态机复制问题，也被称为拜占庭共识。共识协议必须满足两个属性：一致性和活性。这些属性确保诚实参与节点对相同的日志达成一致，并决定何时添加新交易。然而，它们未能防止对日志中实际交易顺序的敌对操纵。事实上，在基于领导者的协议（几乎所有今天使用的协议）中，恶意领导者可以直接选择最终交易顺序。为了纠正这个问题，我们提出了第三个共识属性：交易顺序公平。我们开始了对顺序公平的第一个正式调查，解释了它的基本重要性。我们提供了几种顺序公平的自然定义，并分析了实现它们所需的假设。我们还提出了一种新的共识协议类别，称为Aequitas。Aequitas协议是第一个在保证一致性和活性的同时实现的交易顺序公平的协议。它们可以通过使用现有的广播和协议协议（或者确实使用任何共识协议）以黑匣子方式实现，并在同步和异步网络模型中工作。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_16](https://doi.org/10.1007/978-3-030-56877-1_16)
## Generically Speeding-Up Repeated Squaring Is Equivalent to Factoring: Sharp Thresholds for All Generic-Ring Delay Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#generically-speeding-up-repeated-squaring-is-equivalent-to-factoring-sharp-thresholds-for-all-generic-ring-delay-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#generically-speeding-up-repeated-squaring-is-equivalent-to-factoring-sharp-thresholds-for-all-generic-ring-delay-functions)**
### 作者
* Lior Rotem, School of Computer Science and Engineering, Hebrew University of Jerusalem, Jerusalem, 91904, Israel
* Gil Segev, School of Computer Science and Engineering, Hebrew University of Jerusalem, Jerusalem, 91904, Israel
### 摘要
> 尽管延迟函数的基本重要性，但在RSA群中（Rivest，Shamir和Wagner'96）重复平方是唯一既具有有用结构又具有实际可行性的候选方案。令人不太满意的是，它的顺序性是通过假设直接提供的（即，函数被假设为延迟函数）。
> 
> 我们根据在标准模型中分解难度基于RSA模数证明了所有通用环延迟函数的顺序性的严格阈值。特别是，我们展示了通用地加速重复平方（即使使用预处理阶段和任意多项式数量的并行处理器）等效于分解的证明。
> 
> 更一般地说，基于（本质上的）分解难度，我们证明任何通用环函数实际上都是延迟函数，其顺序性阈值由我们的顺序深度概念确定。此外，我们还展示了通用环函数不仅具有严格的顺序性阈值，而且还具有严格的伪随机性阈值。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_17](https://doi.org/10.1007/978-3-030-56877-1_17)
## Compressed $\varSigma $-Protocol Theory and Practical Application to Plug & Play Secure Algorithmics.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#compressed-varsigma-protocol-theory-and-practical-application-to-plug-play-secure-algorithmics) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#compressed-varsigma-protocol-theory-and-practical-application-to-plug-play-secure-algorithmics)**
### 作者
* Thomas Attema, CWI, Cryptology Group, Amsterdam, The Netherlands
* Ronald Cramer, CWI, Cryptology Group, Amsterdam, The Netherlands
* Thomas Attema, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Ronald Cramer, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Thomas Attema, Cyber Security and Robustness, TNO, The Hague, The Netherlands
### 摘要
> Σ协议为安全算法提供了一个被广泛理解的基础。最近，Bulletproofs（Bootle等人，EUROCRYPT 2016，以及Bünz等人，S&P 2018）被提出作为一种零知识证明（ZK）算法电路的替代方案，实现了对数级通信而非线性级。其关键在于创新的、对特定二次关系具有对数级大小的BP知识证明。然而，将普遍关系的ZK缩减到该方案中，迫使我们付出稍显繁琐的“重新发明”密码学协议理论的代价。
> 
> 我们采取一种不同的视角，将Bulletproofs与Σ协议理论进行调和，以便(a)在已有理论框架下开发更简单的电路ZK证明；同时(b)实现完全相同的对数级通信。
> 
> 这里的关键是线性化。首先，我们重构BP作为用于处理紧凑承诺秘密向量上的普通Σ协议的黑盒压缩机制；这是我们的基础。其次，我们通过一种新颖的基于算术秘密分享技术的Σ协议黑盒应用变体，将一般非线性关系的情况简化为我们的基础应用。另外，我们通过横向增强多样性，实现了之前尚未解决的场景，例如将秘密输入分散在多个承诺中。基于离散对数假设或广义强RSA假设的标准实现平台可以实现对数级通信。此外，根据指数假设（KEA），通信可降至常量级，就像ZK-SNARKS一样。
> 
> 总而言之，我们的理论应当更普遍地对实用密码协议的模块化（“即插即用”）设计有用；这是我们在2020年关于部分知识证明的单独工作所进一步证明的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_18](https://doi.org/10.1007/978-3-030-56877-1_18)
## A Tight Parallel Repetition Theorem for Partially Simulatable Interactive Arguments via Smooth KL-Divergence.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#a-tight-parallel-repetition-theorem-for-partially-simulatable-interactive-arguments-via-smooth-kl-divergence) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#a-tight-parallel-repetition-theorem-for-partially-simulatable-interactive-arguments-via-smooth-kl-divergence)**
### 作者
* Itay Berman, MIT, Cambridge, USA
* Iftach Haitner, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Eliad Tsfadia, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
### 摘要
> 硬度扩大是交互协议研究中的一个核心问题。虽然"自然"的并行重复转换已知可以减少某些特殊情况下交互论证的正确性错误，例如三消息协议（Bellare、Impagliazzo和Naor [FOCS'97]）和公共硬币协议（Håstad、Pass、Wikström和Pietrzak [TCC'10]，Chung和Liu [TCC'10]和Chung和Pass [TCC'15]），但在一般情况下却无法做到（上述的Bellare等，还有Pietrzak和Wikström [TCC'07]）。唯一已知适用于所有交互论证的保持回合数方法是Haitner的随机终止转换[SICOMP'13]，他证明了转换后的协议的并行重复可以以弱指数级率减少正确性错误：如果原始的m轮协议的正确性错误为\(1-\varepsilon\)，那么它的随机终止变体的n重复的正确性错误为\((1-\varepsilon)^{\varepsilon n{/}m^4}\)（忽略常数因子）。Håstad等人将这一结果推广到部分可模拟的交互论证，证明了一个m轮\(\delta\)-可模拟论证的n次重复，其正确性错误为\((1-\varepsilon)^{\varepsilon \delta^2 n{/}m^2}\)。当应用于随机终止论证时，Håstad等人的界限与Haitner的界限相匹配。
> 
> 在这项工作中，我们证明随机终止论证的并行重复以更强的指数级率减少正确性错误：n重复的正确性错误为\((1-\varepsilon)^{n{/}m}\)，与公共硬币和三条消息论证实现的\((1-\varepsilon)^n\)的最优率仅相差一个m的因子。该结果推广到\(\delta\)-可模拟论证中，我们证明了一个界限为\((1-\varepsilon)^{\delta n{/}m}\)的界限。这是通过给出我们的约化引起的分布与其理想变体之间KL散度松弛变体的紧致界限的紧致界限实现的，这个结果的适用范围超出了并行重复证明。我们通过提出一个匹配协议证明了随机终止论证的上述界限的紧致性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_19](https://doi.org/10.1007/978-3-030-56877-1_19)
## Interactive Proofs for Social Graphs.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#interactive-proofs-for-social-graphs) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#interactive-proofs-for-social-graphs)**
### 作者
* Liran Katzir, Google Research, Tel Aviv, Israel
* Clara Shikhelman, Chaincode Labs, New York City, USA
* Eylon Yogev, BU and TAU, Boston, USA
### 摘要
> 我们考虑社交图的交互证明，其中验证者只能访问图的oracle并且可以查询顶点v的第i个邻居，给定i和v。在这个模型中，我们构建了一个双效的公共硬币两条消息的交互式协议，用于估计图的大小，误差在乘法因子ε>0内。验证者对图执行\(\widetilde{O}(1/\varepsilon ^2 \cdot \tau _{mix}\cdot \varDelta )\)个查询，其中\(\tau _{mix}\)是图的混合时间，\(\varDelta\)是图的平均度。证明者在图中的节点数量准线性运行时间。
> 
> 此外，我们开发了一个计算图的顶点/边的几乎任何（合理的）函数f的分位数的框架。使用这个框架，我们可以估计社交图的许多健康度量，例如聚类系数和平均度，在这里验证者对图执行少量查询。
> 
> 使用Fiat-Shamir范式，我们能够将上述协议转换为在随机oracle模型中的非交互式参数。结果是，社交媒体公司（例如Facebook、Twitter等）可以一次性发布其社交网络的大小或健康的简短证明。这个证明可以由任何单个用户通过对图进行少量查询来公开验证。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_20](https://doi.org/10.1007/978-3-030-56877-1_20)
## The Measure-and-Reprogram Technique 2.0: Multi-round Fiat-Shamir and More.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#the-measure-and-reprogram-technique-2-0-multi-round-fiat-shamir-and-more) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#the-measure-and-reprogram-technique-2-0-multi-round-fiat-shamir-and-more)**
### 作者
* Jelle Don, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Christian Majenz, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Christian Majenz, QuSoft, Amsterdam, The Netherlands
### 摘要
> 我们重新审视了Don、Fehr、Majenz和Schaffner以及Liu和Zhandry关于在量子随机预言机模型（QROM）中对Fiat-Shamir（FS）转换的Σ 协议的安全性方面的最近研究成果。在这个背景下，提出了两个自然的问题：（1）结果是否适用于多轮互动证明的FS转换？ （2）Don等人的O(q^2)安全丢失是否是最优的？
> 
> 首先，我们肯定回答问题（1）。作为解决此结果中的一个技术困难的副产品，我们稍微改进了Don等人的结果，使其具有更简洁的界限和更简单的证明。我们将我们的结果应用于数字签名方案，证明它可以用于在QROM中证明类似MQDSS的强安全性。作为另一个应用，我们证明了由Liu、Wei和Wong提出的非交互OR证明的QROM安全性。
> 
> 至于问题（2），我们通过基于Grover搜索的攻击展示了Don等人关于FS转换的Σ协议的二次安全丢失是最优的，只是存在一个小常数因子。这一结果扩展到我们的新的多轮结果，证明它仅与轮数有关，即对于常轮互动证明，它是恒定的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_21](https://doi.org/10.1007/978-3-030-56877-1_21)
## Fiat-Shamir for Repeated Squaring with Applications to PPAD-Hardness and VDFs.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#fiat-shamir-for-repeated-squaring-with-applications-to-ppad-hardness-and-vdfs) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#fiat-shamir-for-repeated-squaring-with-applications-to-ppad-hardness-and-vdfs)**
### 作者
* Alex Lombardi, MIT, Cambridge, MA, USA
* Vinod Vaikuntanathan, MIT, Cambridge, MA, USA
### 摘要
> 菲亚特-沙米尔变换是一种将语言L的（公共币）交互式证明系统编译成L的非交互式论证系统的方法。在标准模型中证明菲亚特-沙米尔变换的安全性，尤其是在简洁论证的背景下，仍然是一个未解决的问题。卡内蒂等人（STOC 2019）的工作证明了在非常强的“具有最优学习误差”假设下，菲亚特-沙米尔变换应用于Goldwasser-Kalai-Rothblum（STOC 2008）简洁交互式证明系统的安全性。在标准假设下实现类似的结果仍然是一个重要的未解决问题。
> 
> 在这项工作中，我们考虑了编译不同简洁交互式证明系统的问题：Pietrzak的证明系统（ITCS 2019），用于迭代平方问题。我们构建了一个哈希函数族（评估时间大约为\(2^{\lambda ^{\epsilon }}\)），它在假设n维学习误差问题具有次指数（\(2^{-n^{1-\epsilon }}\)）困难性的情况下，保证了Fiat-Shamir协议的正确性。（后者来自于格问题的最坏情况\(2^{n^{1-\epsilon }}\)困难性。）更一般地说，我们将卡内蒂等人的“坏挑战函数”方法推广到一类坏挑战函数无法高效计算的协议。
> 
> 作为一个推论（根据Choudhuri等人，ePrint 2019和Ephraim等人，EUROCRYPT 2020），我们构造了以重复平方问题的\(2^{\lambda ^\epsilon }\)困难性和学习误差问题的\(2^{-n^{1-\epsilon }}\)困难性为基础的复杂度类\(\mathbf {CLS}\subset \mathbf {PPAD}\)的平均困难问题。在附加假设重复平方问题是“本质上是顺序的”的情况下，我们还获得了一个在标准模型中的可验证延迟函数（Boneh等人，EUROCRYPT 2018）。最后，我们提供了额外的PPAD困难性和VDF实例，展示了重复平方假设的强度与格假设强度之间的更广泛的权衡。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_22](https://doi.org/10.1007/978-3-030-56877-1_22)
## Delegation with Updatable Unambiguous Proofs and PPAD-Hardness.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#delegation-with-updatable-unambiguous-proofs-and-ppad-hardness) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#delegation-with-updatable-unambiguous-proofs-and-ppad-hardness)**
### 作者
* Yael Tauman Kalai, Microsoft Research, Cambridge, USA
* Omer Paneth, Tel Aviv University, Tel Aviv, Israel
* Yael Tauman Kalai, MIT, Cambridge, USA
* Lisa Yang, MIT, Cambridge, USA
### 摘要
> 在这项工作中，我们基于Kalai、Paneth和Yang [STOC 2019]引入的双线性群上的决策假设构建了一种可更新且明确的委派方案。使用这种委派方案，我们展示了PPAD难度（因此计算Nash均衡的难度）基于双线性群假设的准多项式难度和任何在准多项式时间和多项式空间中可判定的复杂语言。该委托方案用于超多项式时间确定性计算，并且在公共参照字符串（CRS）模型下是可公开验证的和非交互式的。它是可更新的，这意味着鉴于图灵机在T步中到达某个配置C的声明的证明，将其有效地更新为图灵机在T+1步中到达下一个配置𝐶'的声明的证明。它是明确的，这意味着很难找到相同声明的两个不同证明。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_23](https://doi.org/10.1007/978-3-030-56877-1_23)
## New Techniques for Zero-Knowledge: Leveraging Inefficient Provers to Reduce Assumptions, Interaction, and Trust.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#new-techniques-for-zero-knowledge-leveraging-inefficient-provers-to-reduce-assumptions-interaction-and-trust) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#new-techniques-for-zero-knowledge-leveraging-inefficient-provers-to-reduce-assumptions-interaction-and-trust)**
### 作者
* Marshall Ball, Columbia University, New York City, USA
* Dana Dachman-Soled, University of Maryland, College Park, USA
* Mukul Kulkarni, University of Massachusetts, Amherst, USA
### 摘要
> 我们提出了一种从不效率证明者的NIZK（统一随机字符串(URS)模型）到不效率证明者的ZAPs（两条消息见证难以区分的证明）的转换。尽管在证明者高效的情况下已知存在这样的转换，但如果证明者是低效的，安全性证明会出现问题。我们的转换是通过新的使用Nisan-Wigderson设计的方法得到的，Nisan-Wigderson设计是一种组合对象，最初在去随机化文献中引入。
> 
> 我们观察到，我们的转换适用于超多项式证明者/多项式时间对手的情况，以及一个新的细粒度设置，其中证明者是多项式时间的，验证者/模拟器/零知识区分器在更低的复杂性类（如\(\mathsf {NC}^1\)）中。我们还在URS模型中提出了\(\mathsf {NC}^1\)细粒度NIZK，适用于所有的\(\mathsf {NP}\)，其中最坏情况假设是\(\oplus L/\mathrm {poly}\not \subseteq \mathsf {NC}^1\)。
> 
> 我们的技术产生了以下应用：
> 
> 1. 从Minicrypt假设中得到\(\mathsf {AM}\)的ZAPs（具有超多项式时间证明者），
> 
> 2. 从最坏情况假设中得到\(\mathsf {NP}\)的\(\mathsf {NC}^1\)细粒度ZAPs，
> 
> 3. 在标准模型（无CRS）中实现“离线”NIZK（oNIZK）的协议，具有超多项式设置中均匀可靠性（基于Minicrypt假设）和\(\mathsf {NC}^1\)细粒度设置中最坏情况假设中的均匀可靠性。oNIZK概念足以在区分性证明中使用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_24](https://doi.org/10.1007/978-3-030-56877-1_24)
## Spartan: Efficient and General-Purpose zkSNARKs Without Trusted Setup.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#spartan-efficient-and-general-purpose-zksnarks-without-trusted-setup) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#spartan-efficient-and-general-purpose-zksnarks-without-trusted-setup)**
### 作者
* Srinath Setty, Microsoft Research, Redmond, USA
### 摘要
> 本论文介绍了Spartan，一种新的零知识简洁非交互式知识证明（zkSNARKs）的家族，用于排名-1约束可满足性（R1CS），这是一个将算术电路可满足性推广为NP完全语言。 Spartan的一个独特特点是它提供了第一种没有可信设置的zkSNARKs（即透明zkSNARKs），用于NP，在验证证明时产生了次线性的成本，而不需要NP陈述的结构具有一致性。此外，Spartan还提供了具有时间最优的证明者的zkSNARKs，这在文献中几乎所有zkSNARKs中一直是难以实现的属性。
> 
> 为了实现这些结果，我们引入了新的技术，并与sum-check协议组合使用，这是一种开创性的交互式证明协议：（1）计算承诺，一种用于创建对计算描述的简洁承诺的原语；这种技术对于验证者在一次性公共计算之后实现次线性成本是至关重要的，以预处理给定的NP陈述；（2）spark，一种密码学编译器，用于将现有的可提取多线性多项式承诺方案转换为能够高效处理稀疏多线性多项式的方案；这种技术对于实现时间最优的证明者是至关重要的；（3）将R1CS实例紧凑编码为低次多项式。最终结果是一种针对NP的公币简洁交互式知识证明（可以看作是sum-check协议的简洁变体）；我们使用以前的技术将其转换为zkSNARK。通过将spark应用于不同的承诺方案，我们获得了多个zkSNARKs，其中验证者的成本和证明大小范围从\(O(\log ^2{n})\)到\(O(\sqrt{n})\)，具体取决于底层承诺方案（n表示NP陈述的大小）。除了需要通用可信设置的方案外，这些方案都不需要可信设置。
> 
> 我们使用大约8,000行Rust代码将Spartan实现为库。我们使用该库在随机预言机模型中构建了一个透明zkSNARK，在离散对数假设下具有安全性。我们进行了实验评估，并与最近的用于R1CS实例大小为\(2^{20}\)约束的zkSNARKs进行比较。在没有可信设置的方案中，Spartan的证明者速度最快，速度提升为36-152倍，生成的证明短1.2-416倍，并且验证时间最短，速度提升为3.6-1326倍。与现有具有可信设置的zkSNARK相比，Spartan的证明者对于任意的R1CS实例速度提高了2倍，对于数据并行工作负载速度提高了16倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_25](https://doi.org/10.1007/978-3-030-56877-1_25)
## NIZK from LPN and Trapdoor Hash via Correlation Intractability for Approximable Relations.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#nizk-from-lpn-and-trapdoor-hash-via-correlation-intractability-for-approximable-relations) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#nizk-from-lpn-and-trapdoor-hash-via-correlation-intractability-for-approximable-relations)**
### 作者
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Venkata Koppula, Weizmann Institute of Science, Rehovot, Israel
* Tamer Mour, Weizmann Institute of Science, Rehovot, Israel
### 摘要
> 我们提出了基于先前未知意味着的标准假设的新的非交互式零知识论证系统（NIZK）。特别是，我们依赖于具有噪声的学习奇偶校验（LPN）假设的难度，以及陷阱门哈希函数（TDH）的存在（由Döttling等人在Crypto 2019中定义）。这样的TDH可以基于许多标准假设，包括DDH，QR，DCR和LWE。
> 
> 我们重新审视了将\Sigma-协议转化为NIZK的相关不可追溯性（CI）框架，并提出了一种通过组合两个新组件来实例化它的不同策略。首先，之前的工作考虑了寻找CI的关系的搜索复杂性，而我们考虑了它们的概率表示。即，通过位逐位计算目标函数的低复杂度函数的分布，除了小概率（常数）之外。第二个组件是用于量化 CI 被实现的关系类的新视角。我们表明，考虑 CI 对可近似关系（CI-Apx）的影响是有指导意义的，CI-Apx 通过一类关系来量化，但要求 CI 针对该类中任何关系的任何近似都成立。
> 
> 我们证明了如果底层\Sigma-协议使用适当的承诺方案实现，CI-Apx对于仅有常数次多项式就足够实现 NIZK。我们展示了如何基于低噪声 LPN 构建这样的承诺方案。然后，我们展示了如何从任何适当的 TDH（具有所有现有 TDH 构造满足的增强正确性属性）构建对于常数次多项式的 CI-Apx。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_26](https://doi.org/10.1007/978-3-030-56877-1_26)
## Shorter Non-interactive Zero-Knowledge Arguments and ZAPs for Algebraic Languages.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#shorter-non-interactive-zero-knowledge-arguments-and-zaps-for-algebraic-languages) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#shorter-non-interactive-zero-knowledge-arguments-and-zaps-for-algebraic-languages)**
### 作者
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
* Dominik Hartmann, Ruhr-University Bochum, Bochum, Germany
### 摘要
> 我们提出了一种新的框架，用于构建基于配对的非交互式零知识（NIZK）证明，适用于一类广泛的代数语言，这些语言是线性语言的扩展，包含多个线性语言的析取和更多内容。我们的方法与Groth-Sahai方法不同，我们依靠配对来将Σ协议编译成NIZK。我们的框架具有以下一些有趣的特点：
> 
> 概念上的简单性，参数取自Σ协议；
> 
> 证明长度像应用于底层Σ协议的Fiat-Shamir启发式方法的结果一样短；
> 
> 在具有单个随机群元素作为CRS的常见随机字符串模型中具有完全自适应的可靠性和完美的零知识性质；
> 
> 在普通模型中获得简单高效的两轮、公开硬币、公开可验证的完美见证不可区分（WI）证明（ZAPs）。据我们所知，这是基于配对假设构建的第一个两轮统计见证不可识别证明。
> 
> 我们的证明系统依赖于配对群上的一个新的（静态、可证伪）假设，以自然的方式推广了标准的离散对数假设，并在通用群模型（GGM）和代数群模型（AGM）中成立。
> 
> 用我们的新证明系统替换Groth-Sahai的NIZK，可以改进几个重要的密码学原语。特别是，我们得到了最短的密钥结构保持签名方案（这是匿名凭证的核心组件）、最短的密钥紧密结构保持准自适应NIZK（反过来意味着最短的密钥紧密CCA安全密码系统）和更短的环签名。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_27](https://doi.org/10.1007/978-3-030-56877-1_27)
## Non-interactive Zero-Knowledge Arguments for QMA, with Preprocessing.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-3].md#non-interactive-zero-knowledge-arguments-for-qma-with-preprocessing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-3].md#non-interactive-zero-knowledge-arguments-for-qma-with-preprocessing)**
### 作者
* Andrea Coladangelo, Computing and Mathematical Sciences, Caltech, Pasadena, USA
* Thomas Vidick, Computing and Mathematical Sciences, Caltech, Pasadena, USA
* Tina Zhang, Computing and Mathematical Sciences, Caltech, Pasadena, USA
### 摘要
> 一种非交互式零知识（NIZK）证明系统用于语言\(L\in \text {NP} \) 允许证明者（提供实例\(x \in L\),和实例x的证人w）计算一个经典证书\(\pi \)，证明\(x\in L\)的声明具有以下特性：1）\(\pi \)可以被有效验证，2）\(\pi \)除了存在（即\(x\in L\)）的事实外不透露任何关于w的信息。 最近在常见参考字符串（CRS）模型和学习误差（LWE）假设下，已经证明了在所有\(\text {NP} \)中存在NIZK证明系统。
> 
> 我们开始研究\(\text {QMA} \)中语言的NIZK论证。 论证系统不同于证明系统的地方在于，诚实的证明者必须高效，并且只针对（量子）多项式时间的证明者有效。我们的第一个主要结果如下：如果LWE对量子计算机来说很困难，那么\(\text {QMA} \)中的任何语言都有一个具有预处理的NIZK论证。 我们的论证系统中的预处理包括（i）CRS的生成和（ii）从验证者到证明者的单个（实例无关）量子消息。 与此同时，我们的论证系统中的实例相关阶段只涉及从证明者到验证者的单个经典消息。 重要的是，我们协议中的验证完全是经典的，并且验证者不需要拥有量子内存；它的唯一量子操作是在预处理阶段。
> 
> 非交互式（经典）知识的NIZK证明广泛用于更高级的加密协议的构建，我们期望量子类比也会找到广泛的应用。 在这方面，我们协议完全经典的验证阶段尤其吸引人。我们的第二个贡献是将经典知识的概念扩展到量子环境。 我们引入了量子知识论证和证明（AoQK/PoQK）的概念，并且我们证明我们的非交互式论证系统满足AoQK的定义，这扩展了它在加密应用方面的有用性。 特别地，我们明确构造了一个提取器，可以从任何成功完成我们协议的证明者那里恢复出一个量子见证。 我们还展示了\(\text {QMA} \)中的任何语言都有一个（交互式）量子知识的证明，通过展示了\(\text {QMA} \)中所有语言的特定证明系统的构造，并为其构造了一个提取器。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56877-1_28](https://doi.org/10.1007/978-3-030-56877-1_28)
