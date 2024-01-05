# Eurocrypt[2022-2]
## Single-Server Private Information Retrieval with Sublinear Amortized Time.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#single-server-private-information-retrieval-with-sublinear-amortized-time) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#single-server-private-information-retrieval-with-sublinear-amortized-time)**
### 作者
* Henry Corrigan-Gibbs, MIT, Cambridge, MA, USA
* Alexandra Henzinger, MIT, Cambridge, MA, USA
* Dmitry Kogan, Fordefi, Tel Aviv, Israel
### 摘要
> 我们在单服务器环境中构建了新的私有信息检索协议。我们的方案允许客户从服务器私密地获取一系列数据库记录，而服务器在每个查询中的回复时间平均为数据库大小的次线性。具体来说，我们引入了第一个具有次线性摊销服务器时间、需要次线性附加存储，并允许客户自适应地进行查询的单服务器私有信息检索方案。我们的协议仅依赖于标准的密码学假设（决策Diffie-Hellman、二次可约度、学习带有错误等）。它们通过使客户端首先从服务器获取关于数据库内容的一个小“提示”来工作。生成此提示需要服务器时间与数据库大小线性相关。此后，客户端可以使用提示向服务器发起有界数量的自适应查询，而服务器将在次线性时间内回答这些查询，从而产生次线性摊销成本。最后，我们给出了下界，证明我们最有效的方案在服务器在线时间和客户端存储之间实现了权衡，并达到了最佳效果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_1](https://doi.org/10.1007/978-3-031-07085-3_1)
## Anamorphic Encryption: Private Communication Against a Dictator.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#anamorphic-encryption-private-communication-against-a-dictator) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#anamorphic-encryption-private-communication-against-a-dictator)**
### 作者
* Giuseppe Persiano, Università di Salerno, Salerno, Italy
* Duong Hieu Phan, Telecom Paris, Institut Polytechnique de Paris, Paris, France
* Moti Yung, Google LLC, New York, NY, USA
* Moti Yung, Columbia University, New York City, USA
### 摘要
> 多年来，密码系统在典型的普遍环境下得到了发展，这种环境假设接收者的密钥在对手的攻击下保持安全，同时发送者可以自由选择要发送的消息，并将其与对手保持安全。在这些基本的运作假设下，现代密码学在过去的半个世纪左右取得了令人惊叹的成就：开发了新的系统（包括公钥密码学），美丽且实用的模型（包括语义安全等安全定义）以及新的基本原理（如零知识证明）。此外，这些基本成就已经转化为实际工作的系统，并涵盖了互联网上的许多日常人类活动。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_2](https://doi.org/10.1007/978-3-031-07085-3_2)
## A PCP Theorem for Interactive Proofs and Applications.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#a-pcp-theorem-for-interactive-proofs-and-applications) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#a-pcp-theorem-for-interactive-proofs-and-applications)**
### 作者
* Gal Arnon, Weizmann Institute, Rehovot, Israel
* Alessandro Chiesa, EPFL, Lausanne, Switzerland
* Eylon Yogev, Bar-Ilan University, Ramat Gan, Israel
### 摘要
> 著名的PCP定理指出，可以通过一个从多项式长度的证明中读取O（1）位的验证器来判断任何属于NP的语言。交互式Oracle证明（IOP）是PCP的一种推广，允许验证器与证明者进行多轮交互，同时从每个证明者的消息中读取少量的位数。虽然PCP相对来说已经被很好地理解了，但是IOP所捕获的能力（超出了NP）仍然有待完全探索。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_3](https://doi.org/10.1007/978-3-031-07085-3_3)
## Group Signatures and More from Isogenies and Lattices: Generic, Simple, and Efficient.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#group-signatures-and-more-from-isogenies-and-lattices-generic-simple-and-efficient) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#group-signatures-and-more-from-isogenies-and-lattices-generic-simple-and-efficient)**
### 作者
* Ward Beullens, imec-COSIC, KU Leuven, Leuven, Belgium
* Ward Beullens, IBM Research, Zurich, Switzerland
* Samuel Dobson, University of Auckland, Auckland, New Zealand
* Yi-Fu Lai, University of Auckland, Auckland, New Zealand
* Shuichi Katsumata, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Federico Pintore, Department of Mathematics, University of Bari, Bari, Italy
### 摘要
> 我们基于同构和格假设构建了一个高效的动态群签名（或者更一般地说，一个可追责的环签名）。我们的群签名基于一个简单的通用构造，可以通过加密难题群操作（如CSIDH群操作或基于多项式学习问题的群操作）进行实例化。该签名的大小为\(O(\log N)\)，其中N是群中用户的数量。我们的想法是建立在Beullens、Katsumata和Pintore最近高效的OR证明基础上的，我们在其OR证明中高效地加入了一个有效密文的证明，并进一步展示了所得到的非交互的零知识证明系统是在线可提取的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_4](https://doi.org/10.1007/978-3-031-07085-3_4)
## Asymmetric PAKE with Low Computation and communication.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#asymmetric-pake-with-low-computation-and-communication) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#asymmetric-pake-with-low-computation-and-communication)**
### 作者
* Bruno Freitas Dos Santos, University of California, Irvine, USA
* Yanqi Gu, University of California, Irvine, USA
* Stanislaw Jarecki, University of California, Irvine, USA
* Hugo Krawczyk, Algorand Foundation, New York, USA
### 摘要
> 在Crypto'21中，顾，Jarecki和Krawczyk [25]展示了一种非对称密码身份验证密钥交换协议（aPAKE），其计算成本与（对称）密码身份验证密钥交换（PAKE）和纯（即未经身份验证的）密钥交换（KE）匹配。然而，这种最小成本的aPAKE与先前的aPAKE在往返复杂性方面不匹配，在客户端启动时需要4轮比较，而Bradley等人的aPAKE [13]只需2轮。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_5](https://doi.org/10.1007/978-3-031-07085-3_5)
## Batch-OT with Optimal Rate.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#batch-ot-with-optimal-rate) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#batch-ot-with-optimal-rate)**
### 作者
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Pedro Branco, IT, IST - University of Lisbon, Lisbon, Portugal
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Sihang Pu, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 我们展示了在两条消息中可以执行n个独立的1-out-of-2遗忘传输，其中接收者和发送者的通信复杂度（每个人）对于足够大的n为\(n(1+o(1))\)。请注意，这与信息论下界相匹配。在此之前，只能通过使用全同态加密的重型工具（Rate-1 FHE, Brakerski et al., TCC 2019）来实现这一点。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_6](https://doi.org/10.1007/978-3-031-07085-3_6)
## Adaptively Secure Computation for RAM Programs.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#adaptively-secure-computation-for-ram-programs) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#adaptively-secure-computation-for-ram-programs)**
### 作者
* Laasya Bangalore, Georgetown University, Washington, USA
* Muthuramakrishnan Venkitasubramaniam, Georgetown University, Washington, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
* Oxana Poburinnaya, Ligero, Inc., Rochester, USA
### 摘要
> 在这项工作中，我们研究了在存在最终能动态腐败所有参与方的对抗者的情况下，在最小假设条件下，安全多方计算的通信复杂性。具体而言，我们对将底层功能建模为RAM程序时的复杂性感兴趣。在最小假设条件下，Canetti等人（STOC 2017年）和Benhamouda等人（TCC 2018年）的工作提供了一种协议，当计算被表示为布尔电路时，通信复杂性随电路规模的增长呈二次关系。在这项工作中，我们获得了首个两轮两方计算协议，该协议对能动态腐败所有参与方的自适应对抗者具有安全性，其中通信复杂性与函数的RAM复杂性的平方成比例，多项对数因子上升，假设存在非承诺加密。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_7](https://doi.org/10.1007/978-3-031-07085-3_7)
## Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#optimal-broadcast-encryption-and-cp-abe-from-evasive-lattice-assumptions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#optimal-broadcast-encryption-and-cp-abe-from-evasive-lattice-assumptions)**
### 作者
* Hoeteck Wee, NTT Research and ENS, Paris, France
### 摘要
> 我们提出了一个新的简单候选广播加密方案，适用于参数大小为\(\textsf {poly}(\log N)\)的N个用户。我们证明了我们方案在非标准的LWE假设下的安全性，其中区分者还额外接收短的高斯预影像，同时避免了零化攻击。这产生了第一个可能后量子安全、并且具有简单假设的候选最优广播加密方案。作为次要贡献，我们提出了一个候选电路策略属性基加密（CP-ABE）方案，适用于预先绑定多项式深度的电路，其中参数大小与电路大小无关，并在一个额外的非标准假设下证明了安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_8](https://doi.org/10.1007/978-3-031-07085-3_8)
## Embedding the UC Model into the IITM Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#embedding-the-uc-model-into-the-iitm-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#embedding-the-uc-model-into-the-iitm-model)**
### 作者
* Daniel Rausch, University of Stuttgart, Stuttgart, Germany
* Ralf Küsters, University of Stuttgart, Stuttgart, Germany
* Céline Chevalier, CRED, Paris-Panthéon-Assas University, Paris, France
### 摘要
> 通用可组合性（Universal Composability，UC）是设计和分析协议时广泛使用的概念。自Canetti提出原始的UC模型以来，Pfitzmann和Waidner等人还提出了几种不同的通用可组合性模型，包括IITM模型、GNUC、CC，还有UC模型的扩展和限制，如JUC、GUC和SUC。这些模型的提出基于现有模型表达能力的缺失、易用性问题或先前模型的缺陷。密码学家根据实际需求（例如，对联合状态和全局状态的支持）或对特定模型的熟悉程度选择使用这些模型中的哪一个。虽然所有模型都遵循相同的基本思想，但在概念上存在巨大差异，这引发了基本和实践上的问题：（如何）在一个模型中得出的概念和结果与另一个模型中的相关联？不同的模型和其中制定的安全概念是否捕捉到相同的攻击类别？最重要的是，密码学家能否在一个模型中重复使用在另一个模型中得出的结果，如果可以，该如何操作？

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_9](https://doi.org/10.1007/978-3-031-07085-3_9)
## Zero-Knowledge IOPs with Linear-Time Prover and Polylogarithmic-Time Verifier.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#zero-knowledge-iops-with-linear-time-prover-and-polylogarithmic-time-verifier) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#zero-knowledge-iops-with-linear-time-prover-and-polylogarithmic-time-verifier)**
### 作者
* Jonathan Bootle, IBM Research, Zurich, Switzerland
* Alessandro Chiesa, École polytechnique fédérale de Lausanne, Lausanne, Switzerland
* Alessandro Chiesa, University of California, Berkeley, Berkeley, USA
* Siqi Liu, University of California, Berkeley, Berkeley, USA
### 摘要
> 交互式预言机证明（Interactive oracle proofs，简称IOPs）是概率可验证证明的多轮推广，在高效密码学证明的构建中起着基础性的作用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_10](https://doi.org/10.1007/978-3-031-07085-3_10)
## Non-Interactive Zero-Knowledge Proofs with Fine-Grained Security.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#non-interactive-zero-knowledge-proofs-with-fine-grained-security) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#non-interactive-zero-knowledge-proofs-with-fine-grained-security)**
### 作者
* Yuyu Wang, University of Electronic Science and Technology of China, Chengdu, China
* Jiaxin Pan, Department of Mathematical Sciences, NTNU - Norwegian University of Science and Technology, Trondheim, Norway
### 摘要
> 我们在精细化环境中构建了第一个非交互式零知识（NIZK）证明系统，其中对手的资源受到限制，而诚实用户的资源不比对手多。更具体地说，我们的环境是NC^1精细化环境，即所有参与方（包括对手和诚实参与者）都处于NC^1中。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_11](https://doi.org/10.1007/978-3-031-07085-3_11)
## On Succinct Non-interactive Arguments in Relativized Worlds.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#on-succinct-non-interactive-arguments-in-relativized-worlds) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#on-succinct-non-interactive-arguments-in-relativized-worlds)**
### 作者
* Megan Chen, Boston University, Boston, MA, USA
* Alessandro Chiesa, EPFL, Lausanne, Switzerland
* Nicholas Spooner, University of Warwick, Coventry, UK
### 摘要
> 简明的非交互知识论证（SNARKs）是具有高效性质的密码学证明。SNARKs的应用通常涉及到包含SNARK验证器的计算证明，一种称为递归组合的技术。不幸的是，具有可取特征（如透明的公共硬币设置）的SNARKs只在随机预言机模型（ROM）中被知悉。在应用中，这个预言机必须启发地实例化并以非黑盒方式使用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_12](https://doi.org/10.1007/978-3-031-07085-3_12)
## Families of SNARK-Friendly 2-Chains of Elliptic Curves.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#families-of-snark-friendly-2-chains-of-elliptic-curves) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#families-of-snark-friendly-2-chains-of-elliptic-curves)**
### 作者
* Youssef El Housni, ConsenSys, gnark, Paris, France
* Youssef El Housni, LIX, CNRS, École Polytechnique, Institut Polytechnique de Paris, Palaiseau, France
* Youssef El Housni, Inria, Saclay, France
* Aurore Guillevic, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
* Aurore Guillevic, Aarhus University, Aarhus, Denmark
### 摘要
> 在CANS'20上，El Housni和Guillevic介绍了一种新的2链配对友好椭圆曲线，用于递归零知识简洁非交互证明(zk-SNARKs)，由前BLS12-377曲线(一个Barreto-Lynn-Scott曲线，位于377比特素域上)和新的BW6-761曲线(一个Brezing-Weng曲线，嵌入度为6，在761比特素域上)组成。首先，我们将曲线构造、配对公式(e: 𝔾1 × 𝔾2 → 𝔾T)和群操作推广到任何建立在任何BLS12曲线之上的BW6曲线，形成一个2链配对友好曲线族。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_13](https://doi.org/10.1007/978-3-031-07085-3_13)
## Fiat-Shamir Bulletproofs are Non-Malleable (in the Algebraic Group Model).
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#fiat-shamir-bulletproofs-are-non-malleable-in-the-algebraic-group-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#fiat-shamir-bulletproofs-are-non-malleable-in-the-algebraic-group-model)**
### 作者
* Chaya Ganesh, Indian Institute of Science, Bengaluru, India
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
* Mahak Pancholi, Aarhus University, Aarhus, Denmark
* Akira Takahashi, Aarhus University, Aarhus, Denmark
* Daniel Tschudi, Concordium, Zürich, Switzerland
### 摘要
> Bulletproofs（Bünz et al. IEEE S&P 2018）是一种备受赞誉的零知识证明系统，它允许进行简短高效的证明，并已在多个实际系统中得到实施和应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_14](https://doi.org/10.1007/978-3-031-07085-3_14)
## Gemini: Elastic SNARKs for Diverse Environments.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#gemini-elastic-snarks-for-diverse-environments) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#gemini-elastic-snarks-for-diverse-environments)**
### 作者
* Jonathan Bootle, IBM Research, Zurich, Switzerland
* Alessandro Chiesa, École polytechnique fédérale de Lausanne, Lausanne, Switzerland
* Alessandro Chiesa, University of California, Berkeley, Berkeley, USA
* Yuncong Hu, University of California, Berkeley, Berkeley, USA
* Michele Orrú, University of California, Berkeley, Berkeley, USA
### 摘要
> 我们介绍一种新的精炼论证类别，我们称之为弹性。弹性SNARK允许证明者根据执行环境和待证明语句分配不同的资源（如内存和时间）。结果输出与证明者的配置无关。为了研究弹性SNARK，我们扩展了[Block等人，TCC'20]的流式范例。我们为R1CS实例提供了弹性多项式互动式Oracle证明的定义框架，并设计了一个编译器，将弹性PIOP转化为支持流式或随机访问其输入的预处理论证系统。根据配置，证明者将选择不同的时间（线性或准线性）和内存（线性或对数）的权衡。我们通过提供一个新颖的无FFT预处理论证Gemini来证明弹性SNARK的存在。我们证明了其安全性，并基于arkworks框架在Rust中开发了一个概念验证实现。我们在单台机器上提供了数十亿门的大型R1CS实例的基准测试。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_15](https://doi.org/10.1007/978-3-031-07085-3_15)
## Stacking Sigmas: A Framework to Compose $\varSigma $-Protocols for Disjunctions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#stacking-sigmas-a-framework-to-compose-varsigma-protocols-for-disjunctions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#stacking-sigmas-a-framework-to-compose-varsigma-protocols-for-disjunctions)**
### 作者
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Matthew Green, Johns Hopkins University, Baltimore, USA
* Mathias Hall-Andersen, Aarhus University, Aarhus, Denmark
* Gabriel Kaptchuk, Boston University, Boston, USA
### 摘要
> 零知识证明（ZK）用于含有关系运算的陈述一直是研究的重点。经典结果如 Cramer 等 [CRYPTO'94] 和 Abe 等 [AC'02] 设计了通用编译器，可以将某些类别的 ZK 证明转化为有关关系运算的 ZK 证明。然而，在这些结果中，所得协议的通信复杂性与在析取中证明所有子句的复杂性成正比。最近，Heath 等 [EC'20] 利用混淆电路的特殊属性构建了高效的 disjunction 的 ZK 证明，其中证明大小仅与析取中最长子句的长度成正比。然而，这些技术似乎不适用于除混淆电路之外的情况。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_16](https://doi.org/10.1007/978-3-031-07085-3_16)
## One-Shot Fiat-Shamir-Based NIZK Arguments of Composite Residuosity and Logarithmic-Size Ring Signatures in the Standard Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#one-shot-fiat-shamir-based-nizk-arguments-of-composite-residuosity-and-logarithmic-size-ring-signatures-in-the-standard-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#one-shot-fiat-shamir-based-nizk-arguments-of-composite-residuosity-and-logarithmic-size-ring-signatures-in-the-standard-model)**
### 作者
* Benoît Libert, CNRS, Laboratoire LIP, Lyon, France
* Benoît Libert, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Khoa Nguyen, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, Australia
* Thomas Peters, FNRS and UCLouvain (ICTEAM), Ottignies-Louvain-la-Neuve, Belgium
* Moti Yung, Google and Columbia University, New York, USA
### 摘要
> Fiat-Shamir转换的标准模型安全性是一个多年来一直活跃的研究领域。在突破性的结果中，Canetti等人（STOC’19）和Peikert-Shiehian（Crypto’19）展示了在以“学习与误差”（\(\mathsf {LWE}_{}\)) 假设为基础的情况下，通过将关联难以计算（CI）哈希函数应用于所谓的门限\(\varSigma \)-协议，该转换提供了一种可靠性。为了与基于标准\(\mathsf {LWE}_{}\)假设的多项式逼近因子的CI哈希函数兼容，已知的所有此类协议都是通过对基本协议进行并行重复来获得的，其中使用了二元挑战。在本文中，我们考虑与Paillier的复合残余假设(\(\mathsf {DCR}\)) 相关的语言，为此我们提供了首个具有可信度的一次性门限\(\varSigma \)-协议，通过指数级大的挑战空间。这种改进类似于Schnorr在随机预言机模型中对原始Fiat-Shamir协议所实现的改进。利用关联难以计算的哈希函数范例，我们还获得了模拟完备的非交互零知识证明（NIZK证明），表明\(\mathbb {Z}_{N^2}^*\)中的一个元素是一个复合剩余，这为在标准模型中进行空间高效应用打开了大门。以具体示例而言，我们在标准模型中基于标准假设构建了对数尺寸的环签名（假设存在公共参考字符串），其签名长度是基于随机预言机的方案中最短的。我们在\(\mathsf {DCR}\)和\(\mathsf {LWE}_{}\)假设下证明了安全性，同时保持了与基于随机预言机的方案相当的签名长度。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_17](https://doi.org/10.1007/978-3-031-07085-3_17)
## SNARGs for P from Sub-exponential DDH and QR.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#snargs-for-p-from-sub-exponential-ddh-and-qr) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#snargs-for-p-from-sub-exponential-ddh-and-qr)**
### 作者
* James Hulett, University of Illinois, Urbana-Champaign, USA
* Ruta Jawale, University of Illinois, Urbana-Champaign, USA
* Dakshita Khurana, University of Illinois, Urbana-Champaign, USA
* Akshayaram Srinivasan, University of Illinois, Urbana-Champaign, USA
* James Hulett, Tata Institute of Fundamental Research, Bengaluru, India
* Ruta Jawale, Tata Institute of Fundamental Research, Bengaluru, India
* Dakshita Khurana, Tata Institute of Fundamental Research, Bengaluru, India
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Bengaluru, India
### 摘要
> 我们从标准的基于群组的假设中，不依赖配对的情况下，获得了用于任意确定性计算和有界空间非确定性计算的公开可验证的简明非交互式论证（SNARGs）。特别是，在假设决策性迪菲-赫尔曼（DDH）和二次剩余性（QR）假设的次指数难度都存在的情况下，我们得出以下

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_18](https://doi.org/10.1007/978-3-031-07085-3_18)
## Optimal Tightness for Chain-Based Unique Signatures.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#optimal-tightness-for-chain-based-unique-signatures) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#optimal-tightness-for-chain-based-unique-signatures)**
### 作者
* Fuchun Guo, Institute of Cybersecurity and Cryptology (iC²), School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, Australia
* Willy Susilo, Institute of Cybersecurity and Cryptology (iC²), School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, Australia
### 摘要
> 唯一签名是对每个消息具有确切的唯一和有效签名的数字签名。大多数唯一签名的安全降低都有一定的自然降低损失（在不存在保证选定消息攻击，即EUF-CMA，非交互式难度假设下的安全模型中）。在2017年加密会议上，Guo等人提出了一种特殊的基于链的唯一签名方案，其中每个唯一签名由按顺序计算的n个BLS签名组成，就像一个区块链。根据计算Diffie-Hellman假设，他们的降低损失为\(n\cdot q_H^{1/n}\)，其中\(q_H\)是哈希查询的次数，并且在\(n=\log {q_H}\)时它是对数紧密的。然而，目前尚不清楚是否存在比对数紧密性更好的基于链的唯一签名的降低方法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_19](https://doi.org/10.1007/978-3-031-07085-3_19)
## On Building Fine-Grained One-Way Functions from Strong Average-Case Hardness.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#on-building-fine-grained-one-way-functions-from-strong-average-case-hardness) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#on-building-fine-grained-one-way-functions-from-strong-average-case-hardness)**
### 作者
* Chris Brzuska, Aalto University, Espoo, Finland
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
### 摘要
> 构造单向函数来自平均情况困难性一直是一个悬而未决的问题。一个积极的结果将排除Pessiland（Impagliazzo '95）并建立一个非常理想的双赢局面：无条件地存在（对称）密码学，或者所有\(\mathsf {NP}\)问题都可以在平均情况下高效解决。鉴于对这个看似非常困难的问题的进展缺乏，我们启动了以下类型更弱但有意义的候选双赢结果的研究: 要么有细粒度单向函数（FGOWF），要么可以在平均情况下为所有\(\mathsf {NP} \)问题获得非平凡的加速。FGOWF只需要函数运行时间和逆变器运行时间之间的固定多项式差距（而不是超多项式）。我们获得了三个主要结果：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_20](https://doi.org/10.1007/978-3-031-07085-3_20)
## On the Multi-user Security of Short Schnorr Signatures with Preprocessing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#on-the-multi-user-security-of-short-schnorr-signatures-with-preprocessing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#on-the-multi-user-security-of-short-schnorr-signatures-with-preprocessing)**
### 作者
* Jeremiah Blocki, Purdue University, West Lafayette, IN, 47906, USA
* Seunghoon Lee, Purdue University, West Lafayette, IN, 47906, USA
### 摘要
> Schnorr签名方案是一种高效的数字签名方案，其签名长度短，即对于k位的安全性，其签名有4k位。一个在大小为\(p\approx 2^{2k}\)的群体上的Schnorr签名\(\sigma \)由一个元组(s, e)构成，其中\(e \in \{0,1\}^{2k}\)是散列输出，\(s\in \mathbb {Z}_p\)必须通过秘密密钥来计算。尽管哈希输出e需要2k位来编码，但Schnorr提出，可能可以在不对安全性产生不利影响的情况下，截断哈

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_21](https://doi.org/10.1007/978-3-031-07085-3_21)
## Multi-Designated Receiver Signed Public Key Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#multi-designated-receiver-signed-public-key-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#multi-designated-receiver-signed-public-key-encryption)**
### 作者
* Ueli Maurer, Department of Computer Science, ETH Zürich, Zürich, Switzerland
* Guilherme Rito, Department of Computer Science, ETH Zürich, Zürich, Switzerland
* Christopher Portmann, Concordium, Zürich, Switzerland
### 摘要
> 本文介绍了一种新型的公钥加密方案，称为多指定接收者签名公钥加密（MDRS-PKE），它使发送方能够选择一组指定的接收者，并对消息进行加密和签名，只有这些接收者才能阅读和验证（保证机密性和真实性）。MDRS-PKE方案提供了几个额外的安全特性，从而实现了一种全新类型的通信。具体来说，它满足了一致性——不诚实的发送方不能使不同的接收者接收到不同的消息；而且满足了离线记录性——不诚实的接收者不能让第三方相信发送了什么消息（例如通过出售他们的私钥），因为不诚实的接收者能够伪造签名；还有匿名性——不在指定接收者集合中的参与方无法确定发送方和指定接收者的身份。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_22](https://doi.org/10.1007/978-3-031-07085-3_22)
## A Fast and Simple Partially Oblivious PRF, with Applications.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#a-fast-and-simple-partially-oblivious-prf-with-applications) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#a-fast-and-simple-partially-oblivious-prf-with-applications)**
### 作者
* Nirvan Tyagi, Cornell Tech, New York, USA
* Thomas Ristenpart, Cornell Tech, New York, USA
* Sofía Celi, Cloudflare, San Francisco, USA
* Nick Sullivan, Cloudflare, San Francisco, USA
* Christopher A. Wood, Cloudflare, San Francisco, USA
* Stefano Tessaro, University of Washington, Seattle, USA
### 摘要
> 我们构建了首个部分混淆伪随机函数（POPRF）的结构，它不依赖于双线性配对。我们的构建可以看作是将Jarecki，Kiayias和Krawczyk的2HashDH OPRF与Dodis-Yampolskiy PRF的元素相结合。通过将其归约为新的一种更强的Diffie-Hellman反演假设，我们在随机预言机模型中分析了我们的POPRF的安全性。最重要的技术挑战是建立对新假设的信心，这需要新的证明技术，使我们能够表明它的难度是由代数群模型中的q-DL假设所暗示的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_23](https://doi.org/10.1007/978-3-031-07085-3_23)
## Hiding in Plain Sight: Memory-Tight Proofs via Randomness Programming.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#hiding-in-plain-sight-memory-tight-proofs-via-randomness-programming) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#hiding-in-plain-sight-memory-tight-proofs-via-randomness-programming)**
### 作者
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Riddhi Ghosal, University of California, Los Angeles, USA
* Joseph Jaeger, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 这篇论文继续研究记忆紧凑的约化（Auerbach et al.，CRYPTO '17）。这些约化只产生原始对手没有的最小记忆成本，为内存有限的对手提供精确的安全性陈述（在适当的假设下，通过对手时间和内存使用率来表达）。尽管它的重要性，目前仅有少数技术能够实现记忆紧凑性，而之前的研究作品中的不可能性结果表明，即使是基本的、教科书级的约化也无法实现记忆紧凑。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_24](https://doi.org/10.1007/978-3-031-07085-3_24)
## Dynamic Collusion Bounded Functional Encryption from Identity-Based Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#dynamic-collusion-bounded-functional-encryption-from-identity-based-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#dynamic-collusion-bounded-functional-encryption-from-identity-based-encryption)**
### 作者
* Rachit Garg, UT Austin, Austin, USA
* George Lu, UT Austin, Austin, USA
* Brent Waters, UT Austin, Austin, USA
* Rishab Goyal, MIT, Cambridge, USA
* Brent Waters, NTT Research, Palo Alto, USA
### 摘要
> 功能加密是一种强大的加密概念，其中每个解密密钥与一个函数 f 相关联，以便解密能够恢复函数评估 f(m)。非正式地，安全性表明只有具有对函数密钥 \(\mathsf {sk}_{f_1}, \mathsf {sk}_{f_2}, \ldots \)（等等）的访问权限的用户才能了解 \(f_1(m), f_2(m), \ldots \)（等等），但对消息的其他内容一无所知。如果安全性在敌手最多获得 \(q = q(\lambda )\) 个函数密钥的情况下保持，系统被称为 q-有界的勾结抗性。这种静态有界勾结系统的一个主要缺点是，在设置时必须声明勾结限制 q，并且在整个系统的生命周期内保持不变。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_25](https://doi.org/10.1007/978-3-031-07085-3_25)
## Property-Preserving Hash Functions for Hamming Distance from Standard Assumptions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#property-preserving-hash-functions-for-hamming-distance-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#property-preserving-hash-functions-for-hamming-distance-from-standard-assumptions)**
### 作者
* Nils Fleischhacker, Ruhr University Bochum, Bochum, Germany
* Kasper Green Larsen, Aarhus University, Aarhus, Denmark
* Mark Simkin, Ethereum Foundation, Aarhus, Denmark
### 摘要
> 持有属性保持哈希函数允许将长输入\(x_0\)和\(x_1\)压缩成短哈希\(h(x_0)\)和\(h(x_1)\)，并以一种可以仅通过两个哈希值计算谓词\(P(x_0, x_1)\)而无需访问原始数据的方式进行。如果在哈希函数被采样后，能选择\(x_0\)和\(x_1\)的对手无法找到谓词在哈希值上给出错误结果的输入，则称此类哈希函数具有敌对鲁棒性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_26](https://doi.org/10.1007/978-3-031-07085-3_26)
## Short Pairing-Free Blind Signatures with Exponential Security.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#short-pairing-free-blind-signatures-with-exponential-security) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#short-pairing-free-blind-signatures-with-exponential-security)**
### 作者
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### 摘要
> 本文提出了第一种实用的无配对三次盲签名方案。这种方案具有以下特点：(1) 并发安全，(2) 生成短签名（即三个或四个群元素/标量），且 (3) 在通用群模型（GGM）或代数群模型（AGM）下基于（普通或一次性）离散对数假设的证明安全性（此外还假设随机预言机）。我们还提出了一种部分盲版本的方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_27](https://doi.org/10.1007/978-3-031-07085-3_27)
## CoCoA: Concurrent Continuous Group Key Agreement.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#cocoa-concurrent-continuous-group-key-agreement) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#cocoa-concurrent-continuous-group-key-agreement)**
### 作者
* Joël Alwen, AWS Wickr, New York, USA
* Benedikt Auerbach, ISTA, Klosterneuburg, Austria
* Miguel Cueto Noval, ISTA, Klosterneuburg, Austria
* Guillermo Pascual-Perez, ISTA, Klosterneuburg, Austria
* Krzyzstof Pietrzak, ISTA, Klosterneuburg, Austria
* Karen Klein, ETH Zurich, Zürich, Switzerland
* Michael Walter, Zama, Paris, France
### 摘要
> 诸如Signal之类的消息平台被广泛部署并在异步环境中提供强大的安全性。构建一个具有类似安全保证且能够有效扩展到大型群体的协议是一个具有挑战性的问题。一个主要瓶颈是用户

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_28](https://doi.org/10.1007/978-3-031-07085-3_28)
## Efficient Schemes for Committing Authenticated Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#efficient-schemes-for-committing-authenticated-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#efficient-schemes-for-committing-authenticated-encryption)**
### 作者
* Mihir Bellare, Department of Computer Science and Engineering, University of California San Diego, La Jolla, USA
* Viet Tung Hoang, Department of Computer Science, Florida State University, Tallahassee, USA
### 摘要
> 本文提供了一种高效的认证加密（AE）方案，其中密文是密钥的承诺。在最小额外成本的情况下，将这些方案扩展到密文是对所有加密输入的承诺，即密钥、随机数、相关数据和消息。我们的主要方案是GCM的修改版（用于基本的、具有唯一随机数AE安全性）和AES-GCM-SIV（用于抗误用的AE安全性），同时添加了两种形式的承诺，且不增加密文大小。我们还提供了更通用但成本稍高的解决方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_29](https://doi.org/10.1007/978-3-031-07085-3_29)
## On the Concrete Security of TLS 1.3 PSK Mode.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#on-the-concrete-security-of-tls-1-3-psk-mode) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#on-the-concrete-security-of-tls-1-3-psk-mode)**
### 作者
* Hannah Davis, University of California San Diego, La Jolla, CA, USA
* Denis Diemert, Bergische Universität Wuppertal, Wuppertal, Germany
* Tibor Jager, Bergische Universität Wuppertal, Wuppertal, Germany
* Felix Günther, ETH Zürich, Zürich, Switzerland
### 摘要
> TLS 1.3 的预共享密钥（PSK）握手模式允许高效、低延迟地恢复之前的连接，并广泛应用于网络和资源受限设备，例如物联网。为了充分利用这些性能优势，并使用最优和理论上可靠的参数，需要进行严格的安全证明。我们给出了 TLS 1.3 PSK 握手模式的第一个严格的安全证明。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_30](https://doi.org/10.1007/978-3-031-07085-3_30)
