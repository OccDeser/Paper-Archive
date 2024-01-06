# Crypto[2019-1]
## Cryptanalysis of OCB2: Attacks on Authenticity and Confidentiality.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#cryptanalysis-of-ocb2-attacks-on-authenticity-and-confidentiality) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#cryptanalysis-of-ocb2-attacks-on-authenticity-and-confidentiality)**
### 作者
* Akiko Inoue, NEC Corporation, Kawasaki, Japan
* Kazuhiko Minematsu, NEC Corporation, Kawasaki, Japan
* Tetsu Iwata, Nagoya University, Nagoya, Japan
* Bertram Poettering, Royal Holloway, University of London, London, UK
* Bertram Poettering, IBM Research Zurich, Zurich, Switzerland
### 摘要
> 我们提出了针对OCB2的实际攻击。这种分组密码的工作模式旨在提供特别高效且经证明安全的身份验证加密服务，自约15年前提出以来，一直是该领域中表现最好的之一。OCB2于2009年被纳入ISO标准。
> 
> OCB2的内部构建块是通过在 \( \text {XEX} ^*\) 模式下操作常规分组密码获得的可调整分组密码。只有在按照某些技术限制进行评估时，后者才能提供安全性，而我们注意到这些限制并不总是被OCB2所遵守。这导致了对OCB2安全性承诺的毁灭性攻击：我们开发了一系列非常实际的攻击，其中包括演示通用伪造和完整明文恢复。我们通过提出（可证明的）修复OCB2的建议来完成我们的报告。据我们了解，由于我们的发现直接影响，OCB2目前正在被移除ISO标准的过程中。我们的攻击不适用于OCB1和OCB3，而我们对OCB2的隐私攻击需要主动攻击者。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_1](https://doi.org/10.1007/978-3-030-26948-7_1)
## Quantum Cryptanalysis in the RAM Model: Claw-Finding Attacks on SIKE.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#quantum-cryptanalysis-in-the-ram-model-claw-finding-attacks-on-sike) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#quantum-cryptanalysis-in-the-ram-model-claw-finding-attacks-on-sike)**
### 作者
* Samuel Jaques, Institute for Quantum Computing, Department of Combinatorics and Optimization, University of Waterloo, Waterloo, ON, N2L 3G1, Canada
* John M. Schanck, Institute for Quantum Computing, Department of Combinatorics and Optimization, University of Waterloo, Waterloo, ON, N2L 3G1, Canada
### 摘要
> 我们引入了计算模型，使经典和量子算法能够进行直接比较。结合先前关于量子计算和错误校正的工作，我们证明了门计数和深度与宽度成本度量对量子电路的相关性。我们通过重新审视和增加超奇异同态Diffie-Hellman（SIDH）和超奇异同态密钥封装（SIKE）方案的安全估计，展示了这些模型对密码分析的相关性。我们的模型、分析和物理论证对许多内存密集型的量子算法具有应用价值。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_2](https://doi.org/10.1007/978-3-030-26948-7_2)
## Fully Secure Attribute-Based Encryption for t-CNF from LWE.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#fully-secure-attribute-based-encryption-for-t-cnf-from-lwe) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#fully-secure-attribute-based-encryption-for-t-cnf-from-lwe)**
### 作者
* Rotem Tsabary, Weizmann Institute of Science, Rehovot, Israel
### 摘要
> 属性基加密（ABE）是一种公钥加密系统，最早由[SW05，GPSW06]引入，它可以支持具有不同解密权限的多个用户。这种方案的主要属性之一是支持的策略函数类。尽管对于相当大的一类策略，使用双线性映射可以获得完全安全的构造，但基于格的构造情况较为不尽如人意，并且我们做了许多努力来弥补这一差距。在这项工作之前，关于点函数类（也称为IBE）的格完全安全的构造是唯一已知的。
> 
> 在这项工作中，我们首次构建了一个基于格的（密文策略）ABE方案，用于函数类t-CNF，这个函数类由CNF公式组成，其中每个子句最多依赖于t个输入的位，对于任何常数t都成立。这个类别包括NP验证策略、位固定策略和t阈值策略。为了实现这个目标，我们还构建了一个来自于OWF的完全安全单密钥约束PRF，适用于同一函数类，这可能引起单独的兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_3](https://doi.org/10.1007/978-3-030-26948-7_3)
## Noninteractive Zero Knowledge for NP from (Plain) Learning with Errors.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#noninteractive-zero-knowledge-for-np-from-plain-learning-with-errors) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#noninteractive-zero-knowledge-for-np-from-plain-learning-with-errors)**
### 作者
* Chris Peikert, Computer Science and Engineering, University of Michigan, Ann Arbor, USA
* Sina Shiehian, Computer Science and Engineering, University of Michigan, Ann Arbor, USA
### 摘要
> 我们终于解决了一个长期存在的问题，即使用基于明文学习与错误（LWE）问题以及最坏情况格问题来构建任意NP语言的非交互式零知识（NIZK）证明系统的安全性。我们的证明系统实例化了Canetti等人（EUROCRYPT'18）、Holmgren和Lombardi（FOCS'18）以及Canetti等人（STOC'19）最近开发的框架，用于通过一个在适当类关系上具有相关性难以计算的哈希函数族来安全地应用Fiat-Shamir变换。以前，这样的哈希族要么基于“奇特”的假设（例如，可区分性模糊或某些LWE变体的最优硬度），要么最近基于循环安全全同态加密（FHE）的存在。然而，这些假设均未知是否由明文LWE或最坏情况困难性所蕴含。
> 
> 我们的主要技术贡献是一个基于明文LWE（带有小多项式逼近因子）的、对任意大小-S电路具有相关性难以计算性的哈希族，其中S是多项式界限。该构造结合了两个新颖的要素：基于LWE（甚至是潜在更难的短整数解决问题）的对数深度电路相关性难以计算性的哈希族，以及使用（分层）FHE将FHE解密电路的相关性难以计算性推广到任意（有界）电路的“引导”变换。我们的构造可以有两种可能的“模式”，从而在常见随机字符串模型中产生计算性正确且统计上零知识的NIZK，或者在常见参考字符串模型中产生反之情况。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_4](https://doi.org/10.1007/978-3-030-26948-7_4)
## Lattice-Based Zero-Knowledge Proofs: New Techniques for Shorter and Faster Constructions and Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#lattice-based-zero-knowledge-proofs-new-techniques-for-shorter-and-faster-constructions-and-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#lattice-based-zero-knowledge-proofs-new-techniques-for-shorter-and-faster-constructions-and-applications)**
### 作者
* Muhammed F. Esgin, Faculty of Information Technology, Monash University, Clayton, Australia
* Ron Steinfeld, Faculty of Information Technology, Monash University, Clayton, Australia
* Joseph K. Liu, Faculty of Information Technology, Monash University, Clayton, Australia
* Muhammed F. Esgin, Data61, CSIRO, Marsfield, Australia
* Dongxi Liu, Data61, CSIRO, Marsfield, Australia
### 摘要
> 我们设计了用于高效基于格的零知识证明（ZKP）的新技术和分析。首先，我们介绍了用于二次以上多项式关系的一次性证明技术，在这种协议中，单次执行可以实现可忽略的声音错误，因此在计算和通信方面与需要多次重复的先前协议相比表现显著更好。度为\(k\ge 2\)的这样的证明是离散对数设置中重要的保护隐私协议的关键组成部分，例如Bulletproofs（IEEE S&P ’18）和算术电路论证（EUROCRYPT ’16）。相比之下，基于格密码学中的一次性证明先前仅针对线性情况（\(k=1\)）和非常特定的二次情况（\(k=2\)）进行了展示，这些都是我们技术的特例。
> 
> 此外，我们介绍了两种用于基于格的ZKP的加速技术：一种支持“间隔”操作的CRT打包技术，和一种允许使用完全分裂环的“NTT友好”工具。前一种技术几乎没有增加证明长度的成本，后者仅稍微增加了长度，这可以通过微调拒绝抽样参数来补偿，同时仍然具有更快的计算速度。
> 
> 为了说明我们技术的实用性，我们展示了如何使用它们来构建重要关系的高效放松证明，即比特承诺证明，一对多证明，范围证明和集合成员证明。尽管它们的放松性质，我们进一步展示了如何我们的证明系统可以用作高级密码工具的构建块，例如环签名。
> 
> 我们的环签名在相同安全级别下比基于格的所有现有提案都大幅改进了长度。计算评估还表明，我们的构造极有可能在运行时间上优于所有相关工作。我们的环签名在两个方面都非常高效，特别适用于小规模和大规模应用，例如加密货币和电子投票系统。我们的所有提案都不需要可信设置。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_5](https://doi.org/10.1007/978-3-030-26948-7_5)
## Efficient Lattice-Based Zero-Knowledge Arguments with Standard Soundness: Construction and Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#efficient-lattice-based-zero-knowledge-arguments-with-standard-soundness-construction-and-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#efficient-lattice-based-zero-knowledge-arguments-with-standard-soundness-construction-and-applications)**
### 作者
* Rupeng Yang, School of Computer Science and Technology, Shandong University, Jinan, 250101, China
* Rupeng Yang, Department of Computing, The Hong Kong Polytechnic University, Hung Hom, Hong Kong
* Man Ho Au, Department of Computing, The Hong Kong Polytechnic University, Hung Hom, Hong Kong
* Zuoxia Yu, Department of Computing, The Hong Kong Polytechnic University, Hung Hom, Hong Kong
* Zhenfei Zhang, Algorand, Boston, USA
* Qiuliang Xu, School of Software, Shandong University, Jinan, 250101, China
* William Whyte, Qualcomm Technologies Incorporated, Boxborough, MA, USA
### 摘要
> 我们提供了一种新的零知识知识系统，可以直接应用于广泛类别的语言，特别是涉及到在格基密码学中常见的矩阵向量关系和整数关系的语言。在此之前，格基关系的实际论证要么具有恒定的正确性误差（2/3），要么仅考虑较弱形式的正确性，也就是只能保证证明者持有一个“近似”于真正证明的证人。而我们的系统不受这些限制。
> 
> 我们的新论证系统的核心是一个高效的零知识知识论证，用于解一个线性方程组，其中该解的变量满足一组二次约束条件。这个论证享有标准正确性，一个很小的正确性误差（1/poly），且其复杂度与解的大小成线性关系。通过利用这个核心论证系统，我们构建了高效的论证系统，适用于与格相关的各种命题，包括具有短解的线性方程和隐藏矩阵的矩阵向量关系等。
> 
> 基于我们的论证系统，我们提出了几种常见隐私保护原语的新构建方式，包括群签名、环签名、电子现金系统和范围证明协议。这些新构建的效率比现有技术（在标准格基中）高出一到三个数量级。这展示了我们论证系统的高效性和表达能力。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_6](https://doi.org/10.1007/978-3-030-26948-7_6)
## Algebraic Techniques for Short(er) Exact Lattice-Based Zero-Knowledge Proofs.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#algebraic-techniques-for-short-er-exact-lattice-based-zero-knowledge-proofs) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#algebraic-techniques-for-short-er-exact-lattice-based-zero-knowledge-proofs)**
### 作者
* Jonathan Bootle, IBM Research – Zurich, Rüschlikon, Switzerland
* Vadim Lyubashevsky, IBM Research – Zurich, Rüschlikon, Switzerland
* Gregor Seiler, IBM Research – Zurich, Rüschlikon, Switzerland
* Gregor Seiler, ETH Zurich, Zurich, Switzerland
### 摘要
> 许多基于格的协议的关键组成部分是对小系数向量\(\vec{s}\)的零知识证明，该向量满足\(A\vec{s}=\vec{u}\bmod \,q\)。虽然对于这个方程的一个放松版本存在相当高效的证明，用于证明对于\(\vec{s}'\)和c满足\(A\vec{s}'=\vec{u}c\)的知识，其中\(\Vert \vec{s}'\Vert \gg \Vert \vec{s}\Vert\)，且c是在证明执行的环上的某个小元素，但对于准确版本的方程的证明则明显不够实用。最好的这种证明技术是Stern的协议（Crypto ’93）的改编版本，用于证明附近码字的知识，以适应更大的模数。该方案是一个\(\varSigma \)-协议，其中每次迭代的准确性错误率为\(2{/}3\)，因此需要超过200次重复才能获得准确性错误率为\(2^{-128}\)，这是生成证明的大尺寸的主要原因。
> 
> 在本文中，我们提出了第一个基于格的证明系统，其显著优于用于证明满足\(A\vec{s}=\vec{u}\bmod \,q\)的短向量\(\vec{s}\)的Stern类型证明。与Stern的证明是组合性的性质不同，我们的证明更具代数性质，并使用各种放松的零知识证明作为子程序。我们证明系统中的主要节省来自于每轮准确性错误率为\(1{/}n\)的事实，其中n是A的列数。对于典型的应用，n是几千个，因此我们的证明需要重复约10次才能达到准确性错误率\(2^{-128}\)。对于具体参数，它生成的证明比使用Stern方法生成的证明小一个数量级。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_7](https://doi.org/10.1007/978-3-030-26948-7_7)
## Seedless Fruit Is the Sweetest: Random Number Generation, Revisited.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#seedless-fruit-is-the-sweetest-random-number-generation-revisited) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#seedless-fruit-is-the-sweetest-random-number-generation-revisited)**
### 作者
* Sandro Coretti, IOHK, Zurich, Switzerland
* Yevgeniy Dodis, New York University, New York, USA
* Harish Karthikeyan, New York University, New York, USA
* Stefano Tessaro, University of Washington, Seattle, WA, USA
### 摘要
> 密码学中对高质量随机性的需求使得随机数生成成为其中最基本的任务之一。
> 
> 最近的一项重要工作（由Dodis等人在CCS'13中发起）关注带输入伪随机数生成器（PRNGs）的鲁棒性概念。这些原语使用各种来源将足够的熵累积到状态中，从中提取伪随机位。鲁棒性确保即使状态遭到破坏和对熵源进行敌对控制，PRNGs仍然保持安全。然而，鲁棒性的可实现性在本质上取决于种子，或者换句话说，取决于一个理想的原语（例如随机预言机），与熵源无关。这两个假设都存在问题：种子生成需要一开始就有随机性，而种子或理想原语是否可以保持与熵源无关是值得商榷的。
> 
> 本文通过提出新的鲁棒性概念解决了这一困境，从而实现了（1）无种子的PRNG和（2）依赖原语的对抗性熵源。为了避免明显的不可能结果，我们做出了一个现实妥协，要求即使考虑到底层原语的评估，熵源也能产生足够的熵。我们还提供了基于压缩函数、分组密码和置换的哈希函数设计的自然、实用且可证明安全的构造方法。我们的构造方法可以通过最小更改应用于行业标准的哈希函数SHA-2和SHA-3，或者密钥派生函数HKDF，并可以降级为（在线）无种子随机性提取器，这也是一个独立感兴趣的问题。
> 
> 在此过程中，我们考虑了计算鲁棒性的变体，其中攻击者只对理想原语进行有限次数的查询，以及一种新的信息理论变体，在一定程度上放弃了这个假设，但需要注入高速率的弱随机性（例如，Intel的芯片上的真随机数发生器可能可信）。后者的概念使得可以实现持久安全性等应用。最后，我们证明了Intel芯片上的真随机数发生器所使用的CBC提取器在我们的模型中是不安全的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_8](https://doi.org/10.1007/978-3-030-26948-7_8)
## Nonces Are Noticed: AEAD Revisited.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#nonces-are-noticed-aead-revisited) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#nonces-are-noticed-aead-revisited)**
### 作者
* Mihir Bellare, Department of Computer Science and Engineering, University of California San Diego, San Diego, USA
* Ruth Ng, Department of Computer Science and Engineering, University of California San Diego, San Diego, USA
* Björn Tackmann, IBM Research – Zurich, Rüschlikon, Switzerland
### 摘要
> 我们注意到基于一次性密钥的对称加密在理论与使用之间存在差距，其中前者对待一次性密钥的方式可能导致后者的隐私违规。我们通过对基于一次性密钥的对称加密进行新的处理来弥合这个差距，修改了语法（解密不再需要一次性密钥），提升了安全目标（要求不仅仅隐藏消息，还要隐藏一次性密钥），并提供符合新定义的简单高效方案。我们研究了基本安全性（在一次性密钥未被重用时保持）和高级安全性（滥用抵抗，提供在一次性密钥被重用时最佳的保证）两个方面。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_9](https://doi.org/10.1007/978-3-030-26948-7_9)
## How to Build Pseudorandom Functions from Public Random Permutations.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#how-to-build-pseudorandom-functions-from-public-random-permutations) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#how-to-build-pseudorandom-functions-from-public-random-permutations)**
### 作者
* Yu Long Chen, imec-COSIC, KU Leuven, Leuven, Belgium
* Eran Lambooij, University of Haifa, Haifa, Israel
* Bart Mennink, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### 摘要
> 伪随机函数传统上是基于分块密码构建的，但随着置换密码学的趋势，从随机置换设计伪随机函数成为一个自然的问题。我们提出了如何利用公共随机置换构建超过生日界限安全的伪随机函数的通用研究。我们首先证明了基于单个置换调用的伪随机函数无法在\(2^{n/2}\)的生日界限之外保持安全，其中n是函数的状态大小。接下来，我们考虑了Even-Mansour求和（SoEM）结构，它使用Even-Mansour结构实例化置换的求和。我们证明了只要由两个独立的置换和两个随机选择的密钥构造，SoEM可以实现紧密的\(2n{/}3\)位安全性。如果置换或密钥任一部分相同，则我们还展示了一种生日界限攻击的可能性。最后，我们提出了密钥交替密码求和（SoKAC）结构，它是将加密的Davies-Meyer双字节翻译到公共置换环境中，并且我们证明了即使只使用一个密钥，SoKAC也可以实现紧密的\(2n{/}3\)位安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_10](https://doi.org/10.1007/978-3-030-26948-7_10)
## New Results on Modular Inversion Hidden Number Problem and Inversive Congruential Generator.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#new-results-on-modular-inversion-hidden-number-problem-and-inversive-congruential-generator) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#new-results-on-modular-inversion-hidden-number-problem-and-inversive-congruential-generator)**
### 作者
* Jun Xu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Lei Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Jun Xu, Data Assurance and Communications Security Research Center, Chinese Academy of Sciences, Beijing, 100093, China
* Lei Hu, Data Assurance and Communications Security Research Center, Chinese Academy of Sciences, Beijing, 100093, China
* Santanu Sarkar, Department of Mathematics, Indian Institute of Technology Madras, Sardar Patel Road, Chennai, 600036, India
* Huaxiong Wang, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University Singapore, Singapore, Singapore
* Yanbin Pan, Key Laboratory of Mathematics Mechanization, NCMIS, Academy of Mathematics and Systems Science, Chinese Academy of Sciences, Beijing, 100190, China
* Lei Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
### 摘要
> 模块倒数隐藏数问题（MIHNP）是由Boneh、Halevi和Howgrave-Graham在2001年的Asiacrypt中引入的，简要描述如下：设\({\mathrm{MSB}}_{\delta}(z)\)表示z的\(\delta\)位最高有效位。给定许多样本\(\left(t_{i}, {\mathrm{MSB}}_{\delta}((\alpha + t_{i})^{-1} \bmod {p})\right)\)（其中\(t_i \in \mathbb{Z}_p\)为随机数），目标是恢复隐藏数\(\alpha \in \mathbb{Z}_p\)。MIHNP是一类重要的隐藏数问题。
> 
> 本文重新审视了用于解决一类模块多项式方程的Coppersmith技术，该技术分别源自MIHNP中隐藏数\(\alpha\)的恢复问题。对于任意正整数常数d，令整数\(n=d^{3+o(1)}\)。在给定足够大的模数p和\(n+1\)个MIHNP样本的情况下，我们提出了一种启发式算法，可以以接近于1的概率恢复隐藏数\(\alpha\)，其中\(\delta / \log_2 p > \frac{1}{d\,+\,1}+o(\frac{1}{d})\)。攻击的总时间复杂度是多项式级别的\(\log_2 p\)，其中LLL算法的复杂度随着\(d^{\mathcal{O}(d)}\)增长，Gröbner基计算的复杂度随着\((2d)^{\mathcal{O}(n^2)}\)增长。当\(d>2\)时，这个渐近界限优于Boneh、Halevi和Howgrave-Graham在2001年的Asiacrypt中提出的渐近界限\(\delta / \log_2 p > \frac{1}{3}\)。这是第一次给出了一个更好的解决MIHNP的界限，这意味着猜想MIHNP在\(\delta / \log_2 p<\frac{1}{3}\)时很难的猜想被打破。此外，我们还得到了迄今为止攻击反置同余生成器（ICG）的最佳结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_11](https://doi.org/10.1007/978-3-030-26948-7_11)
## On the Shortness of Vectors to Be Found by the Ideal-SVP Quantum Algorithm.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#on-the-shortness-of-vectors-to-be-found-by-the-ideal-svp-quantum-algorithm) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#on-the-shortness-of-vectors-to-be-found-by-the-ideal-svp-quantum-algorithm)**
### 作者
* Léo Ducas, Cryptology Group, CWI, Amsterdam, The Netherlands
* Benjamin Wesolowski, Cryptology Group, CWI, Amsterdam, The Netherlands
* Maxime Plançon, Ecole Normale Supérieure Paris-Saclay, Cachan, France
### 摘要
> 在求解周期数域理想中的短向量问题（以下简称Ideal-SVP）的困难程度可作为许多高效加密系统中的最坏情况假设，通过平均案例问题Ring-SIS和Ring-LWE。有一段时间，可以假设Ideal-SVP问题与一般格子（SVP）的类比问题一样困难，即使考虑到量子算法。
> 
> 但是在过去几年里，一系列研究导致了一个对于Ideal-SVP的量子算法，在某些区域超过了对于一般SVP所能做到的。更确切地说，（在某些假设下）已经证明，我们可以在量子多项式时间内找到一个长度至多为 \(\alpha = \exp ({\widetilde{O}(n^{1/2})})\) 倍于循环整数理想格子中最短非零向量的向量，其中 n 是维度。
> 
> 在本研究中，我们探索了这个渐近性质背后隐藏的常数。尽管这些算法涉及量子步骤，影响近似因子 \(\alpha \) 的步骤完全是经典的，这使得我们可以仅使用经典计算来实验估计它。此外，我们设计了启发式改进方法，可显著减少实际中的隐藏因素。最后，我们基于容积论证导出了新的可证明有效的下界。
> 
> 这项研究使我们能够预测与经典格子约简算法的交叉点，并确定该量子算法在任何密码分析环境中的相关性。例如，我们预测该量子算法对于秩大约24000的循环域环提供了比BKZ-300（大致为NIST格基候选安全级别最弱）更短的向量。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_12](https://doi.org/10.1007/978-3-030-26948-7_12)
## Proofs of Replicated Storage Without Timing Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#proofs-of-replicated-storage-without-timing-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#proofs-of-replicated-storage-without-timing-assumptions)**
### 作者
* Ivan Damgård, Computer Science Department, DIGIT, Aarhus University, Aarhus, Denmark
* Chaya Ganesh, Computer Science Department, DIGIT, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Computer Science Department, DIGIT, Aarhus University, Aarhus, Denmark
### 摘要
> 本文我们提供了对复制存储证明的正式处理，这是一种新颖的加密原语，最近在一种新型加密货币Filecoin的背景下提出。简而言之，复制存储证明是以下问题的解决方案：用户在n个不同的服务器上存储文件m，以确保文件即使某些服务器故障也可用。使用可检索性证明，用户可以检查每个服务器是否确实存储了文件。但是，如果服务器串通，并决定只存储文件的一份副本，以节省资源又该怎么办呢？复制存储证明保证除非（可能串通的）服务器确实保留了存储n份文件所需的空间，否则用户不会接受证明。虽然已经提出了一些候选的复制存储证明，但其有效性依赖于时间假设，即用户必须在特定时间限制内拒绝证明如果证明者没有回复就会拒绝证明。在本文中，我们提供了第一种不依赖于任何时间假设的复制证明构造。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_13](https://doi.org/10.1007/978-3-030-26948-7_13)
## Simple Proofs of Space-Time and Rational Proofs of Storage.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#simple-proofs-of-space-time-and-rational-proofs-of-storage) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#simple-proofs-of-space-time-and-rational-proofs-of-storage)**
### 作者
* Tal Moran, IDC Herzliya, Herzliya, Israel
* Ilan Orlov, Outbrain, New York, USA
### 摘要
> 我们引入了一种新的密码学基元：空间时间证明（Proofs of Space-Time, PoSTs），并构建了一个非常简单实用的协议来实现这些证明。PoST允许证明者说服验证者她花费了“空间-时间”资源（存储数据-空间-一段时间）。形式上，我们将PoST资源定义为CPU工作和空间时间之间的一种权衡（在合理的成本假设下，理性用户更愿意使用低成本的空间时间资源而不是CPU工作）。
> 
> 与工作证明相比，PoST需要较少的能源消耗，因为可以通过延长存储数据的时间周期而增加“难度”，而无需增加计算成本。我们的定义与“空间证明”[ePrint 2013/796, 2013/805]非常相似，但与先前的定义不同，考虑了分摊攻击和存储持续时间。此外，我们的协议使用了非常不同（且简化得多）的技术，利用我们明确允许空间时间权衡的事实，并且不需要任何非标准的假设（仅限于随机预言机）。与先前的构造不同，我们的协议允许渐进式的难度调整，可以优雅地处理存储价格相对于CPU工作的增加。此外，我们还展示了在加密货币的背景下，该方案的参数可以使用类似于工作证明协议的难度调整的市场机制进行调整。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_14](https://doi.org/10.1007/978-3-030-26948-7_14)
## Non-malleable Codes for Decision Trees.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#non-malleable-codes-for-decision-trees) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#non-malleable-codes-for-decision-trees)**
### 作者
* Marshall Ball, Columbia University, New York, USA
* Siyao Guo, New York University Shanghai, Shanghai, China
* Daniel Wichs, Northeastern University, Boston, USA
### 摘要
> 我们构建了高效、无条件的非可塑代码，这些代码对深度为 \(d= n^{1/4-o(1)}\) 的决策树计算的篡改函数具有安全性。特别地，在适应性地读取原始代码字内的最多 d 个任意位置后，篡改代码字的每一位都会被任意设置。在这项工作之前，对于深度超过 \(O(\log ^2 n)\) 的决策树，没有人知道有什么高效的无条件非可塑代码。
> 
> 我们的结果还产生了高效、无条件的非可塑代码，这些代码对大小为 \(\exp (n^{\varOmega (1)})\) 的常深度电路具有 \(\exp (-n^{\varOmega (1)})\) 安全性。Chattopadhyay 和 Li（STOC 2017）以及 Ball 等人（FOCS 2018）之前的作品只能保护免受大小为 \(\exp (O(\log ^2n))\) 的电路的攻击，而安全性为 \(\exp (-O(\log ^2n))\)。
> 
> 我们通过将决策树篡改简化为分割状态篡改来实现我们的结果。作为中间环节，我们提供了一个简单且通用的将泄露鲁棒分割状态篡改简化为具有改进参数的分割状态篡改的方法。之前 Aggarwal 等人（TCC 2015）的工作只提供了一个将分割状态篡改简化为具有特定属性的非可塑码的方法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_15](https://doi.org/10.1007/978-3-030-26948-7_15)
## Explicit Rate-1 Non-malleable Codes for Local Tampering.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#explicit-rate-1-non-malleable-codes-for-local-tampering) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#explicit-rate-1-non-malleable-codes-for-local-tampering)**
### 作者
* Divya Gupta, Microsoft Research, Bangalore, India
* Hemanta K. Maji, Department of Computer Science, Purdue University, West Lafayette, USA
* Mingyuan Wang, Department of Computer Science, Purdue University, West Lafayette, USA
### 摘要
> 本文在信息理论的平面模型中构建了针对有界局部性篡改函数的高速率非可塑码。我们考虑 δ-局部篡改函数；换句话说，篡改函数的每个输出位都是最多 δ 个输入位的函数。本文提出了第一个明确且高效的率为1的非可塑码，针对 δ-局部篡改函数，其中 δ=ξlg n，ξ<1为任意正常数。作为推论，我们构建了第一个明确的率为1的非可塑码，针对 NC^0 篡改函数。
> 
> 在我们的工作之前，甚至对于最简单的1-局部篡改函数，都没有已知的常速率非可塑码的明确构造。Ball等人（EUROCRYPT-2016）和Chattopadhyay和Li（STOC-2017）首次提出了针对 δ-局部篡改函数的明确非可塑码。然而，即使篡改函数具有1-局部性，这些构造也是速率为0的。在CRS模型中，Faust等人（EUROCRYPT-2014）构建了对于 δ=O(\log n) 局部篡改函数的高效率为1的非可塑码。
> 
> 我们的主要成果是一个通用编译器，可以通过泄露的输入和输出局部篡改函数，将速率为0的非可塑码转变为针对ξlg n-局部篡改函数的速率为1的非可塑码，其中ξ<1为任意正常数。我们的明确构造利用了Ball等人（EUROCRYPT-2016）适当的编码来实例化这个编译器。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_16](https://doi.org/10.1007/978-3-030-26948-7_16)
## Continuous Space-Bounded Non-malleable Codes from Stronger Proofs-of-Space.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#continuous-space-bounded-non-malleable-codes-from-stronger-proofs-of-space) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#continuous-space-bounded-non-malleable-codes-from-stronger-proofs-of-space)**
### 作者
* Binyi Chen, University of California, Santa Barbara, USA
* Yilei Chen, VISA Research, Palo Alto, USA
* Pratyay Mukherjee, VISA Research, Palo Alto, USA
* Kristina Hostáková, Technische Universität Darmstadt, Darmstadt, Germany
### 摘要
> 非可塑码是一种编码方案，能够提供对各种篡改攻击的保护。最近，Faust等人（CRYPTO 2017）开始研究空间受限的非可塑码，该码能够在小空间设备中对篡改提供保护。他们提出了一种基于非交互式空间证明（NIPoS）的构造方法。然而，该方案只能保护免受有限数量的篡改攻击。
> 
> 我们构建了一种对无界多项式数量的空间受限篡改具有弹性的非可塑码。为此，我们引入了一种更强的NIPoS变体，称为证明可提取的NIPoS（PExt-NIPoS），并提出了两种构造这种原语的方法。使用一种新的证明策略，我们证明了Faust等人的通用编码方案在与PExt-NIPoS实例化后实现了无界抗篡改能力。我们展示了两种构造PExt-NIPoS的方法：
> 
> 1. 第一种方法使用一类特殊的“内存难题”图形，称为挑战难题图形（CHG），这是我们在这里引入的概念。我们基于扩展的本地扩展器栈的一个扩展（由Ren和Devadas在空间证明的上下文中首次使用）来实例化这样的图形。此外，我们还展示了由Dziembowski等人（CRYPTO 2015）用作空间证明构建的图形构造也满足挑战难度。这两种CHG实例导致了具有不同特性的连续空间受限NMC（Non-Malleable Code），并在随机预言机模型中使用。
> 
> 2. 我们的第二个实例化依赖于一个新的可测属性，称为NIPoS的唯一性。我们展示了如果NIPoS也具有唯一性，标准的可提取性可以升级为证明可提取性。我们提出了一个简单的启发式NIPoS构造，它基于标准模型中的候选内存难函数和具有小空间验证的公开可验证计算来实现（部分）唯一性。使用这个NIPoS实例化Faust等人的编码方案，我们得到了一个支持“最实用”参数的连续空间受限NMC，补充了确证安全但“相对不实用”的CHG构造。此外，我们重新审视了Faust等人的构造，并观察到由于他们的NIPoS缺乏唯一性，结果的编码方案在连续设置中产生了“高度不实用”的参数。
> 
> 最后，我们对我们所有非可塑码构造进行了比较研究，并估计了具体参数。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_17](https://doi.org/10.1007/978-3-030-26948-7_17)
## Synchronous, with a Chance of Partition Tolerance.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#synchronous-with-a-chance-of-partition-tolerance) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#synchronous-with-a-chance-of-partition-tolerance)**
### 作者
* Yue Guo, Thunder Research, Sunnyvale, USA
* Rafael Pass, Thunder Research, Sunnyvale, USA
* Elaine Shi, Thunder Research, Sunnyvale, USA
* Yue Guo, Cornell University, Ithaca, USA
* Rafael Pass, Cornell University, Ithaca, USA
* Elaine Shi, Cornell University, Ithaca, USA
### 摘要
> Murphy，Murky，Mopey，Moody和Morose决定一起在互联网上撰写一篇论文，并将其提交给最杰出的CRYPTO'19会议。他们遇到了一些问题。首先，并非每个人每天都在线：有些人懒惰，在星期一去滑雪; 其他人不能正确使用git，完全没有意识到他们正在丢失消息。其次，少数合作者可能暗中密谋破坏项目（例如，因为他们正在秘密地编写竞争论文）。假设每天有足够多的诚实的共同作者在线（并且正确使用git）;此外，假设在星期一检入git的消息可以在星期二或将来的任何一天被诚实且在线的共同作者正确接收。诚实的共同作者们可以在较少的时间内成功完成该论文以符合CRYPTO截止日期吗？也许更重要的是，所有诚实的共同作者，包括那些懒惰和有时使用不正确的git的人，都可以对最终定理达成一致吗？

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_18](https://doi.org/10.1007/978-3-030-26948-7_18)
## Subvector Commitments with Application to Succinct Arguments.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#subvector-commitments-with-application-to-succinct-arguments) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#subvector-commitments-with-application-to-succinct-arguments)**
### 作者
* Russell W. F. Lai, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Giulio Malavolta, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 我们提出了子向量承诺（Subvector Commitments，SVC）的概念：SVC允许在一组位置上打开承诺向量，其中打开的大小与承诺向量的长度和要打开的位置数目无关。我们分别在根假设和CDH假设的变体下提出了两种构造方法。我们进一步将SVC推广到一种称为线性映射承诺（Linear Map Commitments，LMC）的概念中，它允许以单个短消息的方式将承诺向量打开到其在线性映射下的映像，并提出了配对群上的一个构造方法。
> 
> 借助这些新开发的工具，我们重新审视了“CS证明”范式[Micali, FOCS 1994]，它将带有公有币验证者的任何争论转化为非交互式证明，使用随机预言模型中的Fiat-Shamir变换。我们提出了一个编译器，使用仅限于SVCs（或LMCs）将任何（线性的）PCP转化为非交互式证明。对于约80位的声音性质，我们强调以下新的实质：
> 
> 1. 存在一个具有公有币设置的简洁非交互式知识证明（SNARK），其证据大小为5360比特，在对抗运行时间为\(2^{128}\)的虚数二次阶类群自适应根假设下。在撰写本文时，这是具有公有币设置的最短SNARK。
> 
> 2. 在通用双线性群模型中，存在一个具有私有币设置的非交互式证明，其证据由2个群元素和3个有限域元素组成。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_19](https://doi.org/10.1007/978-3-030-26948-7_19)
## Batching Techniques for Accumulators with Applications to IOPs and Stateless Blockchains.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#batching-techniques-for-accumulators-with-applications-to-iops-and-stateless-blockchains) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#batching-techniques-for-accumulators-with-applications-to-iops-and-stateless-blockchains)**
### 作者
* Dan Boneh, Stanford University, Stanford, USA
* Benedikt Bünz, Stanford University, Stanford, USA
* Ben Fisch, Stanford University, Stanford, USA
### 摘要
> 我们提出了批处理技术，用于密码累加器和未知阶群中的向量承诺。我们的技术针对分布式环境进行了定制，其中不存在可信的累加器管理器，并且累加器的更新以批处理方式处理。我们开发了非交互式聚合成员证明的技术，可以通过恒定数量的群操作进行验证。我们还为大量元素提供了恒定大小的批量非成员证明。这些证明可以用于构建具有恒定大小开放和恒定大小公共参数的首个位置向量承诺（VC）。作为我们批处理技术的核心构建模块，我们开发了一些在未知阶群中的简洁证明系统。这些证明系统扩展了最近一种正确指数化的简洁证明构造，并包括两个群元素之间整数离散对数的知识简洁证明。我们通过使用一个短的无陷门的CRS来规避了这些群中Sigma-协议的不可能结果。我们使用这些新的累加器和向量承诺构造来设计了一个无状态的区块链，其中节点只需要恒定的存储量才能参与共识。此外，我们展示了如何使用这些技术来减小IOP实例化的大小，例如STARKs。完整版本的论文可在线获取[BBF18b]。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_20](https://doi.org/10.1007/978-3-030-26948-7_20)
## On the Plausibility of Fully Homomorphic Encryption for RAMs.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#on-the-plausibility-of-fully-homomorphic-encryption-for-rams) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#on-the-plausibility-of-fully-homomorphic-encryption-for-rams)**
### 作者
* Ariel Hamlin, Khoury College of Computer Sciences, Northeastern University, Boston, MA, USA
* Daniel Wichs, Khoury College of Computer Sciences, Northeastern University, Boston, MA, USA
* Justin Holmgren, Department of Computer Science, Princeton University, Princeton, NJ, USA
* Mor Weiss, Department of Computer Science, IDC Herzliya, Herzliya, Israel
### 摘要
> 我们展开了关于RAM（RAM-FHE）全同态加密的研究。RAM-FHE是一种公钥加密方案，给定一个大型数据库D的加密结果，任何人都可以高效地计算任意RAM程序P的加密结果P(D)。加密数据的运行时间应尽可能接近P的最坏情况运行时间，这个时间可能小于数据大小的亚线性时间。
> 
> 在构建RAM-FHE方案时，一个核心难题是隐藏P访问的内存地址序列。这个问题特别棘手，因为对于同一个密文，攻击者可以同态地评估许多程序，有效地“倒带”任何使内存访问混淆的机制。
> 
> 我们确定了构建RAM-FHE的一个必要先决条件，我们称之为可倒带的忽略形式的RAM（可倒带ORAM），它可以在这种强对抗情境中提供安全性。我们展示了如何使用对称密钥双倍高效私有信息检索（SK-DEPIR）构建可倒带ORAM（Canetti-Holmgren-Richelson, Boyle-Ishai-Pass-Wootters: TCC'17）。然后，我们展示了如何利用可倒带ORAM以及用于特定电路的虚拟黑盒（VBB）混淆来构建RAM-FHE。后者的原语可以通过现有的不可区分混淆候选算法来启发式地实现。总体而言，我们得到了一个RAM-FHE方案，其中运行时间的乘法开销在数据库大小N中是多对数的。我们的基本方案是单跳的，但我们还将它扩展为可以获得多跳RAM-FHE，其开销为\(N^\epsilon \)，其中\(\epsilon >0\)任意小。
> 
> 我们将我们的工作视为RAM-FHE可能存在的首个证据。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_21](https://doi.org/10.1007/978-3-030-26948-7_21)
## Homomorphic Time-Lock Puzzles and Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#homomorphic-time-lock-puzzles-and-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#homomorphic-time-lock-puzzles-and-applications)**
### 作者
* Giulio Malavolta, Carnegie Mellon University, Pittsburgh, USA
* Sri Aravinda Krishnan Thyagarajan, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
### 摘要
> 时间锁谜题可以通过高效生成一个在时间\(\mathcal{T}\)流逝之前保持隐藏的解决方案s，用于将消息加密到未来。要求解决方案对于运行时间小于\(\mathcal{T}\)的任何算法都是隐藏的。我们提出了同态时间锁谜题的概念，其中可以在不解决它们的情况下评估谜题上的函数，即可以操作一组具有解决方案\((s_1, \dots , s_n)\)的谜题，以获得解决为\(f(s_1, \ldots , s_n)\)的谜题，其中f是任意函数。我们基于具体的密码学假设提出了候选构造函数，用于不同类别的函数。然后，我们展示了同态时间锁谜题如何通过提出感兴趣的应用程序的新协议（例如电子投票、多方硬币翻转和公平合同签署）来克服传统时间锁谜题的限制。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_22](https://doi.org/10.1007/978-3-030-26948-7_22)
## Symmetric Primitives with Structured Secrets.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#symmetric-primitives-with-structured-secrets) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#symmetric-primitives-with-structured-secrets)**
### 作者
* Navid Alamati, University of Michigan, Ann Arbor, USA
* Hart Montgomery, Fujitsu Laboratories of America, Sunnyvale, USA
* Sikhar Patranabis, Fujitsu Laboratories of America, Sunnyvale, USA
* Sikhar Patranabis, IIT Kharagpur, Kharagpur, India
### 摘要
> 在一个不受信任的主体上安全地管理加密数据是一个具有挑战性的问题，这促使了对各种加密原语的研究。这类原语的一个特殊类别允许一个不受信任的主体使用某些辅助信息将一个使用一把密钥加密的密文转换为另一把密钥下的密文，而不泄露底层数据。在对称设置中，这些原语的著名示例包括键同态（弱）伪随机函数（PRF），可更新加密和代理重加密。尽管这些原语在构造和安全要求方面存在显著差异，但它们共享两个重要属性：（a）它们具有结构或额外功能的秘密，（b）所有已知满足合理安全定义的这些原语的构造都基于具体的公钥假设，例如DDH和LWE。
> 
> 这就引出了一个问题，即这些对象是否本质上属于公钥原语的范畴，或者它们有可能由简单的对称密钥对象（如伪随机函数）构建。在这项工作中，我们表明后一种可能性不太可能。更具体地说，我们表明：
> 
> 具有阿贝尔输出群的（有界）键同态弱伪随机函数意味着（有界）输入同态弱伪随机函数，最近已经表明它不仅暗示了公钥加密，还涉及各种原语，如PIR，损耗TDF和甚至是IBE。
> 
> 任何前向和后置牺牲安全的密文无关可更新加密方案都意味着PKE。此外，任何具有合理强安全性保证的对称密钥代理重加密方案都意味着一个前向和后置牺牲安全的密文无关可更新加密方案，因此也意味着PKE。
> 
> 此外，我们还表明，在量子世界中，对阿贝尔群的无界（或精确）键同态弱伪随机函数是不可能的。换句话说，在阿贝尔群中，有界键同态是我们能够在后量子安全性方面期望的最好的情况。我们的攻击也适用于其他具有阿贝尔群和精确同态的结构化原语，包括同态单向函数和输入同态弱伪随机函数。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_23](https://doi.org/10.1007/978-3-030-26948-7_23)
## Unifying Leakage Models on a Rényi Day.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#unifying-leakage-models-on-a-r-nyi-day) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#unifying-leakage-models-on-a-r-nyi-day)**
### 作者
* Thomas Prest, PQShield, Oxford, UK
* Dahmun Goudarzi, PQShield, Oxford, UK
* Ange Martinelli, Thales, Gennevilliers, France
* Alain Passelègue, Inria, Paris, France
* Alain Passelègue, ENS Lyon, Lyon, France
### 摘要
> 在过去的十年中，有几项研究工作集中于寻找建模泄漏的最佳方法，以获得经过证明的安全实现。最真实的模型之一是嘈杂泄漏模型，它是在[PR13，DDF14]中引入的，并伴随着安全构造。这些工作存在各种限制，特别是在[PR13]中使用理想无泄漏门以及在[DDF14]中减少了重要（在字段大小方面）的损失。
> 
> 在这项工作中，我们提供了证明遮蔽实现安全性的新策略，并开始通过将所有不同的嘈杂度度量统一到信息论的一个标准概念——点对点互信息。基于这种新的解释，我们定义了两种新的自然度量，并分析了针对这些度量的已知编译器的安全性。特别地，我们证明了（1）使用我们的第一个新度量将嘈杂泄漏模型减少到探测模型的更严格界限，（2）使用第二个度量进行基于增强的安全性证明的更好界限。
> 
> 为了证明我们获得的改进不仅仅是使用替代度量的结果，我们展示了对具体泄漏表示（例如“海明重量+高斯噪音”）的情况下，我们的方法在参数方面显著优于以前的工作。最后，使用Rényi离散，我们定量地衡量了对特定数量的泄漏获取对攻击区块密码的优势。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_24](https://doi.org/10.1007/978-3-030-26948-7_24)
## Leakage Certification Revisited: Bounding Model Errors in Side-Channel Security Evaluations.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#leakage-certification-revisited-bounding-model-errors-in-side-channel-security-evaluations) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#leakage-certification-revisited-bounding-model-errors-in-side-channel-security-evaluations)**
### 作者
* Olivier Bronchain, ICTEAM Institute, Université catholique de Louvain, Louvain-la-Neuve, Belgium
* Julien M. Hendrickx, ICTEAM Institute, Université catholique de Louvain, Louvain-la-Neuve, Belgium
* Clément Massart, ICTEAM Institute, Université catholique de Louvain, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, ICTEAM Institute, Université catholique de Louvain, Louvain-la-Neuve, Belgium
* Alex Olshevsky, Department of Electrical and Computer Engineering, Boston University, Boston, MA, USA
### 摘要
> 泄漏认证旨在保证侧信道安全评估中使用的统计模型接近泄露的真实统计分布，因此可以用来近似最坏情况的安全级别。以往在这方面的工作仅仅是定性的：对于评估实验室可获得的测量数量，如果模型假设错误（即由于模型族选择不正确而导致的错误）相对于模型估计错误很小，就将一个模型评定为“足够好”。我们通过提供泄漏认证的首个定量工具来重新讨论这个问题。为此，我们基于两个易于计算的信息论量提供（未知的）互信息度量的界限，该度量对应于泄漏的真实统计分布：感知信息，这是可以从一个泄漏设备中提取的信息数量，这多亏了一个估计的统计模型，可能因估计和假设错误而产生偏差；以及假设信息，这是可以从一个完全遵循模型分布的假设设备中提取的信息数量。这一积极成果源于这一观察：尽管一般来说估计互信息是一个困难的问题（即估计量有偏，并且它们的收敛性依赖于分布），但在统计推断攻击的情况下，估计互信息明显得到简化，其中一个目标随机变量（例如，在密码设置中是一个密钥）具有恒定（例如均匀）的概率。因此，我们的研究结果为界定实施的最坏情况安全级别提供了一种一般和原则性的途径。它们还显著加速了任何侧信道攻击的评估，因为它们意味着感知信息的估计（内嵌着一个昂贵的交叉验证步骤）可以被任何估计的统计模型的计算更便宜的假设信息边界所限制。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_25](https://doi.org/10.1007/978-3-030-26948-7_25)
## Security in the Presence of Key Reuse: Context-Separable Interfaces and Their Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-1].md#security-in-the-presence-of-key-reuse-context-separable-interfaces-and-their-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-1].md#security-in-the-presence-of-key-reuse-context-separable-interfaces-and-their-applications)**
### 作者
* Christopher Patton, Computer and Information Science and Engineering, Florida Institute for Cybersecurity Research, University of Florida, Gainesville, USA
* Thomas Shrimpton, Computer and Information Science and Engineering, Florida Institute for Cybersecurity Research, University of Florida, Gainesville, USA
### 摘要
> 密钥的分离在实践中通常很难实施。虽然密钥重用对安全性来说可能是灾难性的，但我们知道存在一些密码方案可以证明其安全。但是现有的形式化模型，如联合安全性概念（Haber-Pinkas, CCS '01）和灵活性（Acar等人，EUROCRYPT '10），并未涵盖整个密钥重用攻击范围，特别是那些破坏方案抽象或利用更高级别的协议交互的攻击。本研究关注这些向量，重点关注两个关键要素：将受攻击的方案编码化的游戏，以及其意图对手模型；以及暴露用于游戏的秘密密钥操作的底层接口。我们的主要安全性实验考虑了使用某个接口（在实践中，可以是软件库的API或硬件平台如TPM）来实现游戏所指定的方案时，如果该接口与其他未指定的、不安全的，甚至是恶意的应用程序共享的情况。在建立一个定义框架之后，我们将其应用于两个真实世界的方案分析：EdDSA签名算法和Noise协议框架。这两者都提供了一定程度的上下文分离，这是一种用于接口及其应用的设计模式，有助于部署安全协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26948-7_26](https://doi.org/10.1007/978-3-030-26948-7_26)
