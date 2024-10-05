# Asiacrypt[2023-2]
## Fiat-Shamir Security of FRI and Related SNARKs.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#fiat-shamir-security-of-fri-and-related-snarks) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#fiat-shamir-security-of-fri-and-related-snarks)**
### 作者
* Alexander R. Block, Georgetown University, Washington, D.C., USA
* Justin Thaler, Georgetown University, Washington, D.C., USA
* Alexander R. Block, University of Maryland, College Park, USA
* Jonathan Katz, University of Maryland, College Park, USA
* Albert Garreta, Nethermind, London, UK
* Michał Zając, Nethermind, London, UK
* Pratyush Ranjan Tiwari, Johns Hopkins University, Baltimore, USA
* Justin Thaler, A16z Crypto Research, Menlo Park, USA
### 摘要
> 我们在实践中广泛使用的Fiat-Shamir（FS）安全性多个协议建立了新的结果，并提供了建立类似结果的一般工具。 更确切地说，我们：（1）证明了FRI和批处理FRI协议的FS安全性；（2）分析了一般类别的协议，我们将其称为\(\delta \)-相关，这些协议使用低度接近测试作为一个子例程（包括许多“Plonk-like”协议（例如Plonky2和Redshift）、ethSTARK、RISC Zero等）；（3）证明了前述“Plonk-like”协议的FS安全性，并简述了如何证明其他协议的安全性。
> 
> 我们通过分析FRI的逐轮（RBR）合理性和RBR知识合理性得出我们的第一个结果。 对于第二个结果，我们证明了如果一个\(\delta \)-相关协议在敌手始终发送低度多项式的假设下是RBR（知识）合理的，那么它在一般情况下也是RBR（知识）合理的。 借助这个工具，我们证明了第三个结果，即正式证明了“Plonk-like”协议在敌手始终发送低度多项式的假设下是RBR（知识）合理的。 然后，我们概述了前述其他协议的类似论证。
> 
> 据我们所知，我们是对FRI和广泛部署的调用它的协议的Fiat-Shamir安全性进行的第一次正式分析。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_1](https://doi.org/10.1007/978-981-99-8724-5_1)
## On Black-Box Knowledge-Sound Commit-And-Prove SNARKs.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#on-black-box-knowledge-sound-commit-and-prove-snarks) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#on-black-box-knowledge-sound-commit-and-prove-snarks)**
### 作者
* Helger Lipmaa, University of Tartu, Tartu, Estonia
### 摘要
> Gentry和Wichs证明了适应性良好的SNARG对于困难语言需要非可欺骗性假设。Lipmaa和Pavlyk声称构建了一个非适应性良好的基于可欺骗性假设的zk-SNARG FANA，证明了Gentry-Wichs的紧密性。我们展示了FANA的缺陷。我们定义并构建了一个完全代数的F位置绑定向量承诺方案VCF。我们构建了具有额外VCF见证承诺的具体高效的基于提交和证明的zk-SNARK Punic，是FANA的一个版本。Punic满足半适应性黑盒G-知识音准性，是提交和证明SNARK的自然知识音准性概念。我们使用一种新的证明技术，利用函数性某处可提取承诺方案来提取向量承诺的局部证明，实现全局一致性。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_2](https://doi.org/10.1007/978-981-99-8724-5_2)
## Protostar: Generic Efficient Accumulation/Folding for Special-Sound Protocols.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#protostar-generic-efficient-accumulation-folding-for-special-sound-protocols) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#protostar-generic-efficient-accumulation-folding-for-special-sound-protocols)**
### 作者
* Benedikt Bünz, Espresso Systems, Middletown, USA
* Binyi Chen, Espresso Systems, Middletown, USA
* Benedikt Bünz, New York University, New York, USA
### 摘要
> Accumulation是一个简单但强大的基元，可以实现增量可验证计算（IVC），而无需递归SNARK。我们为任何具有验证器检查ℓ次-d方程的（2k-1）移动特殊声音协议提供了通用的高效积累（或折叠）方案。积累验证器仅执行k+2个椭圆曲线乘法和k+d+O（1）个场/散列操作。使用BCLMS21（Crypto 21）的编译器，这使得构建高效的IVC方案成为可能，其中递归电路仅取决于轮数和基础特殊声音协议的验证器度数，而不是证明大小或验证器时间。我们使用通用积累编译器来构建Protostar。Protostar是Plonk的非均匀IVC方案，支持高度门和（向量）查找。递归电路由3个群标量乘法和$𝑑^*$个场元素的散列组成，其中$𝑑^*$是最高门的度数。该方案不需要可信设置或配对，并且证明者无需计算任何FFT。在每个积累/IVC步骤中，证明者也仅对支持电路的数量进行对数处理，并且独立于查找表的大小。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_3](https://doi.org/10.1007/978-981-99-8724-5_3)
## Polynomial IOPs for Memory Consistency Checks in Zero-Knowledge Virtual Machines.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#polynomial-iops-for-memory-consistency-checks-in-zero-knowledge-virtual-machines) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#polynomial-iops-for-memory-consistency-checks-in-zero-knowledge-virtual-machines)**
### 作者
* Yuncong Zhang, Shanghai Jiao Tong University, Shanghai, China
* Shi-Feng Sun, Shanghai Jiao Tong University, Shanghai, China
* Dawu Gu, Shanghai Jiao Tong University, Shanghai, China
* Ren Zhang, Cryptape Co. Ltd. and Nervos, Hangzhou, China
### 摘要
> 随着零知识虚拟机（ZKVM）在最近几年在各个领域都具有潜在应用，特别是在区块链生态系统中，它已经得到了认可。尽管行业中在ZKVM上取得了巨大的进展，但文献中还没有建立正式的定义或安全证明。由于缺乏正式化，现有协议在问题定义和性能指标方面存在重大差异，这使得分析和比较这些进展变得困难，也难以信任日益复杂的ZKVM实现的安全性。
> 
> 在这项工作中，我们关注随机存取内存，这是ZKVMS中具有影响力和昂贵的组件之一。具体来说，我们调查了验证内存正确运行的最新协议，我们称之为内存一致性检查。将这些检查从系统的其余部分隔离出来，使我们能够正式化它们的定义和安全概念。此外，我们用多项式IOP模型总结了最新的构造，并正式证明了它们的安全性。鉴于现有设计的瓶颈在于整理整个内存追踪，我们摆脱了这种范式，并提出了一种新颖的内存一致性检查，称为\(\textsf{Permem}\)。\(\textsf{Permem}\)通过引入一种称为地址循环方法的技术，可以使用更少的构件，并且在使用最新构件实例化后，少了在线多项式或者评估查询。此外，我们提出了\(\textsf{gcq}\)，这是一种新的查找参数构造，内存一致性检查的关键构件，比最新构造\(\textsf{cq}\)少了在线多项式查询。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_4](https://doi.org/10.1007/978-981-99-8724-5_4)
## Weak Zero-Knowledge via the Goldreich-Levin Theorem.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#weak-zero-knowledge-via-the-goldreich-levin-theorem) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#weak-zero-knowledge-via-the-goldreich-levin-theorem)**
### 作者
* Dakshita Khurana, UIUC, Urbana-Champaign, USA
* Kabir Tomer, UIUC, Urbana-Champaign, USA
* Giulio Malavolta, Bocconi University, Milan, Italy
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### 摘要
> 使用标准加密假设获取三轮零知识一直是一个具有挑战性的开放问题。同时，在实现有用的松弛方面取得了令人振奋的进展，例如在两轮或三轮中弱零知识、强见证不可区分性和见证隐藏。特别地，从通用假设中已知的实现获得：（1）在完全同态加密等其他标准假设下对自适应验证者的安全性（Bitansky 等人，STOC 2019），以及（2）来自无意识传输（Jain 等人，Crypto 2017）中的非自适应验证者的安全性。
> 
> 本工作通过从双重增强可逆陷阱门函数构建非自适应设置中 NP 的三轮弱零知识。我们通过开发一种新的依赖于区分器的仿真技术来获得这一结果，该技术关键地利用了 Goldreich-Levin 列译码算法，并可能具有独立的兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_5](https://doi.org/10.1007/978-981-99-8724-5_5)
## A Simple and Efficient Framework of Proof Systems for NP.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#a-simple-and-efficient-framework-of-proof-systems-for-np) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#a-simple-and-efficient-framework-of-proof-systems-for-np)**
### 作者
* Yuyu Wang, University of Electronic Science and Technology of China, Chengdu, China
* Chuanjie Su, University of Electronic Science and Technology of China, Chengdu, China
* Jiaxin Pan, University of Kassel, Kassel, Germany
* Jiaxin Pan, Department of Mathematical Sciences, NTNU - Norwegian University of Science and Technology, Trondheim, Norway
* Yu Chen, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Yu Chen, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Yu Chen, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, 266237, China
### 摘要
> 在这项工作中，我们提出了一个简单的框架，用于构建高效的非交互式零知识证明（NIZK）系统，适用于所有\(\textsf{NP}\)。与Groth、Ostrovsky和Sahai（J. ACM，2012）提出的最新构建相比，我们的NIZK系统减少了证明大小和证明以及验证成本，而没有任何折衷，即既不增加计算成本，CRS大小，也不诉诸更强的假设。
> 
> 此外，我们将我们的框架扩展到构建一个批量参数（BARG）系统，适用于所有\(\textsf{NP}\)。我们的构建显着提高了Waters和Wu（Crypto 2022）的BARG的效率，而没有任何折衷。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_6](https://doi.org/10.1007/978-981-99-8724-5_6)
## Sigma Protocols from Verifiable Secret Sharing and Their Applications.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#sigma-protocols-from-verifiable-secret-sharing-and-their-applications) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#sigma-protocols-from-verifiable-secret-sharing-and-their-applications)**
### 作者
* Min Zhang, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Yu Chen, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Chuanzhou Yao, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Min Zhang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Yu Chen, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Chuanzhou Yao, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Min Zhang, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, 266237, China
* Yu Chen, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, 266237, China
* Chuanzhou Yao, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, 266237, China
* Zhichao Wang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100085, China
* Zhichao Wang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
### 摘要
> Sigma协议是最常见和高效的零知识证明之一。几十年来，提出了大量的Sigma协议，但很少有工作关注共同的设计原则。在本研究中，我们提出了一个针对可验证秘密共享（VSS）方案的代数命题Sigma协议的通用框架。我们的框架提供了一种理解Sigma协议的通用和统一方法。它不仅清晰地解释了经典协议，如Schnorr、Guillou-Quisquater和Okamoto协议，还导致了以前未知的新的Sigma协议。此外，我们展示了我们框架在设计包含代数和非代数命题的复合命题的ZKP中的应用。我们通过结合VSS中的Sigma协议和遵循MPC-in-the-head范式的ZKP，通过一种重复利用见证共享技术，以无缝方式给出了复合命题的非交互ZKP的通用构造。我们的构造具有不需要“粘合”证明来组合代数和非代数命题的优势。通过使用 Ligero++（Bhadauria等人，CCS 2020）实例化我们的构造，并设计一个与VSS相关的Sigma协议，我们获得了一种针对复合命题的具体ZKP，在运行时间和证明大小之间取得了折衷，从而解决了由 Backes等人留下的开放问题（PKC 2019）。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_7](https://doi.org/10.1007/978-981-99-8724-5_7)
## Anonymous Counting Tokens.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#anonymous-counting-tokens) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#anonymous-counting-tokens)**
### 作者
* Fabrice Benhamouda, Amazon Web Services, Seattle, USA
* Mariana Raykova, Google, Menlo Park, USA
* Karn Seth, Google, Menlo Park, USA
### 摘要
> 我们引入了一种新的原语，称为匿名计数令牌（ACTs），使得客户可以在他们选择的消息上获得盲签名或MAC（也称为令牌），同时使发行者能够对客户每个消息所能获得的令牌数量强制实施速率限制。我们的构造强制执行每个客户只能在每个消息上获得一个令牌，并展示了支持其他速率限制的通用转换。我们实现了这种新属性，同时保持匿名令牌方案所需的不可伪造性和不相关性属性。我们提出了四种具有各种效率和基础安全假设的ACT构造。一种构造使用基于因式分解的原语和循环群。在随机预言机模型下，在q-DDHI假设（在循环群中）和DCR假设下是安全的。我们的另外三个构造使用双线性映射：其中一个在q-DDHI和SXDH下在标准模型下是安全的，一个在随机预言机模型下在SXDH下是安全的，而其中最有效的一个在随机预言机模型和通用双线性群模型下是安全的。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_8](https://doi.org/10.1007/978-981-99-8724-5_8)
## Predicate Aggregate Signatures and Applications.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#predicate-aggregate-signatures-and-applications) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#predicate-aggregate-signatures-and-applications)**
### 作者
* Tian Qiu, The University of Sydney, Sydney, Australia
* Qiang Tang, The University of Sydney, Sydney, Australia
### 摘要
> 本研究受到匿名声誉系统和区块链治理的应用启发，我们开始对谓词聚合签名(PAS)进行研究。它是一种新的原语，可以让用户签署多个消息，并且这些单个签名可以由合并器聚合，保护签署者的匿名性。所得到的PAS只披露每个消息的签署者的简要描述，并确保签署者及其描述均符合指定的公共谓词。
> 
> 我们正式定义PAS，提出一个构建框架以生成对数大小的签名，进一步将验证时间减少到对数级别。我们还提出了几个具有独立兴趣的具体谓词的实例化。
> 
> 为展示其能力，我们还展示了它在多个设置中的应用，包括多重签名、聚合签名、门限签名、(门限)环签名、基于属性的签名等，并在这些设置中推进了现有技术的发展。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_9](https://doi.org/10.1007/978-981-99-8724-5_9)
## Bicameral and Auditably Private Signatures.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#bicameral-and-auditably-private-signatures) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#bicameral-and-auditably-private-signatures)**
### 作者
* Khoa Nguyen, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
* Partha Sarathi Roy, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
* Willy Susilo, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
* Yanhong Xu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, 800 Dongchuan Road, Shanghai, 200240, China
### 摘要
> 本论文介绍了一种新的保护隐私签名系统——双议和可审计私密签名（BAPS），其中包括几个新特点。在BAPS系统中，给定一个认证属性\(\textbf{x}\)和一个认证政策P，签名者可以发布一个公共可验证的签名\(\varSigma\)在消息m上，只要\((m, \textbf{x})\) 满足P。BAPS的一个显著特点是，属性\(\textbf{x}\)和政策P都对验证者保持隐藏，但是验证者确信它们分别被一个属性颁发机构和一个政策颁发机构所认证。通过考虑双议认证机构并要求对属性和政策保密，BAPS推广了现有高级签名原语的精神，具有对签名能力进行细粒度控制的功能（例如基于属性的签名，谓词签名和基于策略的签名）。此外，BAPS提供了一个有吸引力的功能，称为审计隐私，允许\(\varSigma\)的签名者在后续由审计员/法院询问时，可验证披露关于P和\(\textbf{x}\)的各种部分信息。审计隐私与可追踪匿名系统（如团体签名）中传统融入的可问责隐私的概念本质上不同，且可以互补。凭借这些独特的功能，BAPS可以潜在地解决现有基元无法直接解决的有趣应用场景。
> 
> 我们提供了BAPS的严格安全定义，采用“sim-ext”方法。然后，我们展示了一个基于常用密码构建块的通用构造，采用签名-然后承诺-然后证明的设计。最后，我们提出了一个具体实例化的BAPS，该实例在随机预言机模型下在格假设下被证明是安全的。该方案可以处理由多项式大小的布尔电路表示的任意政策，并且可以解决二次披露函数。在构造过程中，我们开发了一个新的技术构建块，这可能是与本研究无关的独立感兴趣的领域之一：一种零知识论证系统，可以证明满足已认证和隐藏的布尔电路上已认证和承诺的输入的可满足性。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_10](https://doi.org/10.1007/978-981-99-8724-5_10)
## Threshold Structure-Preserving Signatures.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#threshold-structure-preserving-signatures) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#threshold-structure-preserving-signatures)**
### 作者
* Elizabeth Crites, University of Edinburgh, Edinburgh, UK
* Markulf Kohlweiss, University of Edinburgh, Edinburgh, UK
* Markulf Kohlweiss, Input Output, Edinburgh, UK
* Bart Preneel, COSIC, KU Leuven, Leuven, Belgium
* Mahdi Sedaghat, COSIC, KU Leuven, Leuven, Belgium
* Daniel Slamanig, AIT Austrian Institute of Technology, Vienna, Austria
### 摘要
> 结构保护签名（SPS）是实现隐私保护的密码学基元，如电子现金、匿名凭证和可委托匿名凭证的重要组成部分。在本研究中，我们介绍了第一个阈值结构保护签名方案（TSPS）。这使得多个参与方可以联合签署一条消息，从而得到标准的单方SPS签名，并且可以替代基于SPS的应用程序。
> 
> 我们从定义和构建索引消息的SPS开始，这些消息相对于唯一索引进行定义。我们在随机神谕模型下证明其安全性，使用广义Pointcheval-Sanders假设（PS）的变体。此外，我们将此方案推广到用于签署向量的索引多消息SPS，我们在相同假设下证明其安全性。然后，我们正式定义TSPS的概念，并提出一种基于我们的索引多消息SPS的构建方法。我们的TSPS构建是完全非交互式的，这意味着签署者只需输出部分签名而无需与其他签署者通信。此外，签名很短：它们由2个群元素组成，需要2个配对积方程进行验证。我们证明了我们的TSPS在我们的索引多消息SPS方案的安全性下安全。最后，我们展示了我们的TSPS可用作UC-secure阈值发布匿名凭证（TIAC）方案，例如Coconut的替代品，而无需Fischlin变换的开销。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_11](https://doi.org/10.1007/978-981-99-8724-5_11)
## Practical Round-Optimal Blind Signatures in the ROM from Standard Assumptions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#practical-round-optimal-blind-signatures-in-the-rom-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#practical-round-optimal-blind-signatures-in-the-rom-from-standard-assumptions)**
### 作者
* Shuichi Katsumata, PQShield Ltd., Oxford, UK
* Michael Reichle, ETH Zürich, Zürich, Switzerland
* Shuichi Katsumata, AIST, Tokyo, Japan
* Yusuke Sakai, AIST, Tokyo, Japan
### 摘要
> 盲签名是隐私保护应用程序的基础工具，近年来由于区块链和隐私认证令牌的新应用而重新引起人们的兴趣。基于这一点，在随机预言模型（ROM）中构建实用的轮数最优的盲签名（即签名由最少的两个轮组成）一直是研究的一个活跃领域，其中一些不可能的结果表明ROM或可信的设置是固有的。
> 
> 在这项工作中，我们以ROM中的标准假设提出了两种轮数最优的盲签名，采用不同的方法：一种实现了签名和通信大小之和最小，而另一种实现了最小的签名大小。我们的两种实例都是基于非对称配对群的标准假设，即CDH，DDH和/或SXDH。我们的第一个构造是Fischlin（CRYPTO'06）的通用盲签名构造的高度优化变种，其签名和通信大小分别为447 B和303 B。我们逐渐削弱了Fischlin所需的基本组件，结果得到了第一个盲签名，其签名和通信大小的总和低于1 KB，基于标准假设。我们的第二个构造是来自一类可随机化签名方案的半通用构造，具有几乎一切而不是一个减少。签名大小仅为96 B，而通信大小为2.2 KB。这与先前已知的最小签名大小相匹配，同时改善了通信大小数个数量级。最后，我们的两个构造都依赖于（非黑匣子）对分叉引理的精细分析，这可能是独立利益所在。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_12](https://doi.org/10.1007/978-981-99-8724-5_12)
## A Generic Construction of an Anonymous Reputation System and Instantiations from Lattices.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#a-generic-construction-of-an-anonymous-reputation-system-and-instantiations-from-lattices) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#a-generic-construction-of-an-anonymous-reputation-system-and-instantiations-from-lattices)**
### 作者
* Johannes Blömer, Paderborn University, Paderborn, Germany
* Laurens Porzenheim, Paderborn University, Paderborn, Germany
* Jan Bobolz, University of Edinburgh, Edinburgh, UK
### 摘要
> 使用匿名信誉系统，可以实现在在线商店匿名评价卖家的过程。尽管评价者可以保持匿名，但卖家仍然有保证，即只能由购买其产品的评价者进行评价。
> 
> 我们提出了一个从基本构件（即数字签名、加密方案、非交互零知识证明和链接不可区分标签）构建信誉系统的通用构造。然后展示了信誉系统在强安全模型下的安全性。我们将通用构造与基于格问题的构建块实例化，这导致了第一个基于格的信誉系统模块在随机预言者模型中的建立。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_13](https://doi.org/10.1007/978-981-99-8724-5_13)
## Universally Composable Auditable Surveillance.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#universally-composable-auditable-surveillance) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#universally-composable-auditable-surveillance)**
### 作者
* Valerie Fetzer, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Jörn Müller-Quade, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Markus Raiber, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Michael Klooß, Aalto University, Espoo, Finland
* Andy Rupp, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Valerie Fetzer, KASTEL Security Research Labs, Karlsruhe, Germany
* Jörn Müller-Quade, KASTEL Security Research Labs, Karlsruhe, Germany
* Markus Raiber, KASTEL Security Research Labs, Karlsruhe, Germany
* Andy Rupp, KASTEL Security Research Labs, Karlsruhe, Germany
### 摘要
> 用户隐私在数字社会中变得越来越重要。然而，许多应用面临法律要求或规定，禁止无条件匿名保证，例如在电子支付中，监视是为调查涉嫌犯罪而被强制执行的。
> 
> 因此，许多系统根本没有有效的隐私保护，或者存在后门，例如存储在系统操作员一侧，可以被当局用来公开用户的私人信息（例如合法拦截）。这样的后门问题在于它们也可以在系统内进行无声的大规模监视。为了防止这样的滥用，提出了各种方法，限制潜在的滥用或确保它可以被检测到。许多作品考虑监视行为的可审计性，但不强制要求在检索后门时留下痕迹。最近的关于耐滥用监视的文章Green等人（EUROCRYPT’21）提供了可以进行回溯和无声监视的值得注意的例外。然而，他们的方法依赖于可提取证人加密，这是一种非常强的原语，没有已知的高效和安全的实现方式。
> 
> 在这项工作中，我们开发了一个可审计监视的构建模块。在我们的协议中，用户的后门或托管秘密以多种方式受到保护：（1）后门是短期和特定用户的；（2）它们在可信参与方之间共享，以避免单点故障；（3）后门访问是有条件的。此外（4）对于每个（授权的）后门请求，都有审计轨迹和公共统计数据；和（5）监视保持沉默，即用户不知道他们被监视。
> 
> 具体而言，我们提供了一个抽象的UC功能，可用于增强应用程序的可审计监视能力。我们的实现利用门限加密来保护用户秘密，并在基于区块链的委员会YOSO MPC中具体实现。因此，委员会可以验证后门访问的条件是否满足，例如执法机关持有有效的监视令状（通过零知识证明）。此外，访问会在总账中留下审计轨迹，允许审计员回顾性地检查监视决策。
> 
> 作为玩具示例，我们提供了一个可审计的发件人可追踪加密方案，这是一种PKE方案，其中发件人可以被执法机关去匿名化。我们通过特殊的非交互式、非承诺加密方案观察和解决了后视监视所提出的问题，该方案允许对消息、发件人身份和（托管）秘密进行零知识证明。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_14](https://doi.org/10.1007/978-981-99-8724-5_14)
