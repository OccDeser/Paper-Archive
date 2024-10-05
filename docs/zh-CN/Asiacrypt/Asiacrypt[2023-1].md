# Asiacrypt[2023-1]
## Breaking the Size Barrier: Universal Circuits Meet Lookup Tables.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#breaking-the-size-barrier-universal-circuits-meet-lookup-tables) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#breaking-the-size-barrier-universal-circuits-meet-lookup-tables)**
### 作者
* Yann Disser, Technical University of Darmstadt, Darmstadt, Germany
* Daniel Günther, Technical University of Darmstadt, Darmstadt, Germany
* Thomas Schneider, Technical University of Darmstadt, Darmstadt, Germany
* Maximilian Stillger, Technical University of Darmstadt, Darmstadt, Germany
* Arthur Wigandt, Technical University of Darmstadt, Darmstadt, Germany
* Hossein Yalame, Technical University of Darmstadt, Darmstadt, Germany
### 摘要
> 通用电路（UC）是大小为\(\varTheta (n \log n)\)的布尔电路，可以模拟任何不超过特定大小n的布尔函数。Valiant（STOC’76）提供了前两个渐近大小分别为\(\sim 5 n\log n\)和\(\sim 4.75 n\log n\)的UC构造，并且今天最有效的Liu等人的构造（CRYPTO’21）的大小为\(\sim 3n\log n\)。使用安全多方计算（MPC）协议评估公共UC允许高效的私有函数评估（PFE），其中在私有数据上评估私有函数。
> 
> 以前，大多数UC构造仅针对由2输入门组成的电路进行开发。在这项工作中，我们将UC推广为模拟由（\(\rho \) \(\rightarrow \) \(\omega \)）查找表（LUTs）组成的电路，这些查找表将\(\rho \)输入位映射到\(\omega \)输出位。我们基于LUT的UC（LUC）构造具有\(1.5\rho \omega n \log \omega n\)的渐近大小，并且相比于Liu等人（CRYPTO’21）最佳先前UC构造的规模改进了1.12倍–2.18倍，用于常见函数。我们的结果显示，对于\(\rho =3\)个输入，获得的最大尺寸改进，在\(\rho >3\)时减少。
> 
> 此外，我们引入了变通通用电路（VUCs），它们通过泄漏每个LUT的输入\(\rho \)和输出\(\omega \)的数量来降低电路的大小。我们的基准测试表明，VUCs可以使尺寸优于LUC构造，优势高达1.45倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_1](https://doi.org/10.1007/978-981-99-8721-4_1)
## Amortized NISC over $\mathbb {Z}_{2^k}$ from RMFE.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#amortized-nisc-over-mathbb-z-2-k-from-rmfe) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#amortized-nisc-over-mathbb-z-2-k-from-rmfe)**
### 作者
* Fuchun Lin, Shanghai Jiao Tong University, Shanghai, China
* Chaoping Xing, Shanghai Jiao Tong University, Shanghai, China
* Yizhou Yao, Shanghai Jiao Tong University, Shanghai, China
* Chen Yuan, Shanghai Jiao Tong University, Shanghai, China
### 摘要
> 反向乘法友好嵌入（RMFE）摊销在构建基于环（特别是环\(\mathbb{Z}_{2^k}\)）的MPC协议的最先进构造中发挥了积极作用。就我们所知，这种强大的技术无法在两方计算的皇冠玉石——非交互式安全计算（NISC）中找到应用，其中协议必须是非交互式的要求构成了一个严峻的技术瓶颈。我们开展这样一项研究，重点研究VOLE混合模型中的统计NISC协议。我们的研究始于将基于可分解仿射随机编码（DARE）的半诚实NISC协议与RMFE技术兼容起来，其中已知的技术可强制恶意发件人Sam遵循DARE，也已经产生了一个安全的摊销协议，假设双方都遵循RMFE编码。在全恶意设置下实现统计安全性更具挑战性，因为应用已知技术来强制执行RMFE的符合性会产生交互。为解决这个问题，我们提出了一个新概念，称为非可塑RMFE（NM-RMFE），它是一个随机的RMFE，一旦一方偏离编码规范，另一方注入的随机性将随机化输出，防止信息泄漏。NM-RMFE同时强制双方都遵循RMFE编码，提供了一种理想的非交互式解决方案来摊销NISC。我们认为，NM-RMFE本身是一个重要的原语，在安全计算及其他交互和非交互式领域都有应用。根据我们的NM-RMFE的渐进优秀实例，我们获得了在\(\mathbb{Z}_{2^k}\)上的算术分支程序中具有常数通信开销的VOLE混合模型中的第一个统计可重用NISC协议。作为附带贡献，我们考虑了计算安全性，并在随机预言机模型中从传统RMFE中提出了两种具体有效的NISC构造。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_2](https://doi.org/10.1007/978-981-99-8721-4_2)
## Two-Round Concurrent 2PC from Sub-exponential LWE.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#two-round-concurrent-2pc-from-sub-exponential-lwe) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#two-round-concurrent-2pc-from-sub-exponential-lwe)**
### 作者
* Behzad Abdolmaleki, University of Sheffield, Sheffield, UK
* Saikrishna Badrinarayanan, LinkedIn, Mountain View, USA
* Rex Fernando, Carnegie Mellon University, Pittsburgh, USA
* Giulio Malavolta, Bocconi University, Milan, Italy
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
* Ahmadreza Rahimi, Max Planck Institute for Security and Privacy, Bochum, Germany
* Amit Sahai, UCLA, Los Angeles, USA
### 摘要
> 安全计算是现代密码学的基石，有大量研究致力于理解其循环复杂性。在这项工作中，我们考虑了两方计算（2PC）协议（其中两方都接收输出），这些协议在现实情况下仍然是安全的，其中多个协议实例并行执行（并发安全）。我们基于单一的标准后量子假设：学习包含误差（LWE）问题的次指数难度，获得了一个两轮的并发安全2PC协议。我们的协议是在明文模型下，即没有信任设置，并且它是在Pass（EUROCRYPT 2003）的超多项式模拟框架中安全的。由于两轮对于（并发）2PC来说是最小化的，这项工作解决了从标准假设到并发2PC的循环复杂性。
> 
> 作为直接应用，我们的工作为有趣的密码学基元建立了可行性结果，比如在明文模型下的首个两轮密码验证密钥交换（PAKE）协议，以及量子电路的首个两轮并发安全计算协议（2PQC）。）。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_3](https://doi.org/10.1007/978-981-99-8721-4_3)
## Degree-D Reverse Multiplication-Friendly Embeddings: Constructions and Applications.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#degree-d-reverse-multiplication-friendly-embeddings-constructions-and-applications) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#degree-d-reverse-multiplication-friendly-embeddings-constructions-and-applications)**
### 作者
* Daniel Escudero, J.P. Morgan AI Research & J.P. Morgan AlgoCRYPT CoE, New York, USA
* Cheng Hong, Ant Group, Hangzhou, China
* Hongqing Liu, Shanghai Jiao Tong University, Shanghai, China
* Chaoping Xing, Shanghai Jiao Tong University, Shanghai, China
* Chen Yuan, Shanghai Jiao Tong University, Shanghai, China
### 摘要
> 在（Cheon & Lee, Eurocrypt'22）的最新工作中，正式引入了度-D打包方法的概念，该概念捕捉了将较小环中的多个元素嵌入较大环的想法，以便前者中的逐元素乘法与后者中的乘积在某种程度上“兼容”。然后，提出了一些最优界限和结果，并进一步将概念从一次乘法推广到大于二的度数。这些打包方法涵盖了文献中在安全多方计算和完全同态加密等背景下看到的几种构造。
> 
> 其中一种构造是反向乘法友好嵌入（RMFEs）的概念，它们本质上是度2的打包方法。在这项工作中，我们将RMFEs的概念推广到度D的RMFEs，尽管它们“更具代数性”而不是打包方法，但事实证明它们在本质上是等价的。然后，我们通过概括用于构造传统的度2 RMFEs的代数几何思想来提出度D RMFEs的一般构造，通过前述的等价性导致打包方法的明确构造。此外，我们的理论以统一的方式给出了对于一般的伽罗瓦环，其中包括形式为\(\mathbb {Z}_{p^k}\)的环和类似\(\mathbb {F}_{p^k}\)的域，这在先前的工作中是分别处理的。我们提出了多组度D RMFEs（包括\(D=2\)）的具体参数，这对未来的工作可能有用。
> 
> 最后，我们讨论了我们的RMFEs的有趣应用，特别关注了非交互生成用于安全多方计算协议的高度相关的情况。这需要对大量参与方使用Shamir秘密共享，这需要大度数的伽罗瓦环扩展。我们的RMFE使得可以在小环上生成这些预处理数据，而不需要支付使用大度数的伽罗瓦环扩展所造成的乘法开销。对于我们的应用，我们还在过程中构造了一个潜在独立利益的副贡献，这是受到了（Benhamouda等人，TCC 2021）的PRSS解决方案的启发，解决了对结构化秘密的伽罗瓦环上Shamir秘密共享的非交互生成的伪随机解决方案。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_4](https://doi.org/10.1007/978-981-99-8721-4_4)
## Adaptive Distributional Security for Garbling Schemes with 𝒪(|x|) Online Complexity.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#adaptive-distributional-security-for-garbling-schemes-with-x-online-complexity) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#adaptive-distributional-security-for-garbling-schemes-with-x-online-complexity)**
### 作者
* Estuardo Alpírez Bock, Xiphera, Espoo, Finland
* Chris Brzuska, Aalto University, Espoo, Finland
* Pihla Karanko, Aalto University, Espoo, Finland
* Kirthivaasan Puniamurthy, Aalto University, Espoo, Finland
* Sabine Oechsner, University of Edinburgh, Edinburgh, UK
### 摘要
> 混淆方案允许对电路C和输入x进行混淆，以便计算C(x)同时隐藏C和x。在自适应安全性的背景下，对手在看到混淆电路后指定电路的输入，因此可以预处理C的混淆，然后仅在在线阶段对输入x进行混淆。由于在线阶段可能具有时间关键性，有趣的问题是在这个阶段需要传输多少信息，理想情况下，这应该接近|x|。不幸的是，Applebaum，Ishai，Kushilevitz和Waters（AIKW，CRYPTO 2013）表明，对于一些电路，特别是PRGs，通过基于模拟的安全性实现接近于|x|的在线复杂度是不可能的，而Hubáček和Wichs（HW，ITCS 2015）表明，恶意安全的2方计算的在线复杂度需要随着函数的不可压缩熵增长。因此，我们试图了解在哪些情况下，尽管存在这些强下界，最佳在线复杂度是可行的。
> 
> 我们的出发点是观察到下界（仅）涉及加密电路，并且当嵌入式秘密对于对手（区分者）未知时，下界技术似乎不适用。我们的主要贡献是分布式基于模拟的安全性（DSIM），这是一个捕捉较弱但有意义的模拟（自适应）安全性的框架，该框架似乎不会受到类似于AIKW的不可能结果的影响。我们展示了DSIM可用于证明围绕混淆构建的分布对称加密协议的安全性。我们还建立了一个从\(\text {NC}^0\)电路的DSIM安全性到任意多项式大小电路的DSIM安全性的引导结果，同时保留它们的在线复杂度。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_5](https://doi.org/10.1007/978-981-99-8721-4_5)
## MPC with Delayed Parties over Star-Like Networks.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#mpc-with-delayed-parties-over-star-like-networks) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#mpc-with-delayed-parties-over-star-like-networks)**
### 作者
* Mariana Gama, COSIC, KU Leuven, Leuven, Belgium
* Emad Heydari Beni, COSIC, KU Leuven, Leuven, Belgium
* Nigel P. Smart, COSIC, KU Leuven, Leuven, Belgium
* Oliver Zajonc, COSIC, KU Leuven, Leuven, Belgium
* Emad Heydari Beni, Nokia Bell Labs, Antwerp, Belgium
* Emmanuela Orsini, Bocconi University, Milan, Italy
* Nigel P. Smart, Zama Inc., Paris, France
### 摘要
> 这篇论文研究了在部署系统中常见的两个主要约束条件下的多方计算协议。首先，我们考虑当各方不是通过直接点对点连接而是通过几个中央邮局样式的星型拓扑连接时的情况。其次，我们考虑具有强大诚实多数 (\(t \ll n/2\)) 的MPC协议，其中存在拖延者（一些方进展较慢）。我们通过允许对手延迟发送和接收某些方的消息来模拟拖延者。
> 
> 我们首先证明只有一个诚实的中继足以确保协议中发送的消息的一致性；然后，我们展示在中继和拖延者情况下描述乘法协议必须特别小心；最后，我们提出了一种高效的诚实多数MPC协议，可以在中继上运行，并在强大的诚实多数情况下提供主动安全性，并且即使与拖延者一起运行也会中止。我们通过实验评估和模拟来支持我们协议的呈现，分析了中继和延迟对我们协议的影响。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_6](https://doi.org/10.1007/978-981-99-8721-4_6)
## Ramp Hyper-invertible Matrices and Their Applications to MPC Protocols.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#ramp-hyper-invertible-matrices-and-their-applications-to-mpc-protocols) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#ramp-hyper-invertible-matrices-and-their-applications-to-mpc-protocols)**
### 作者
* Hongqing Liu, Shanghai Jiao Tong University, Shanghai, China
* Chaoping Xing, Shanghai Jiao Tong University, Shanghai, China
* Chen Yuan, Shanghai Jiao Tong University, Shanghai, China
* Yanjiang Yang, Huawei International, Singapore, Singapore
### 摘要
> Beerliová-Trubíniová和Hirt引入了超可逆矩阵技术来构建第一个完美安全的加密计算协议，该协议能够在最恶意的商业腐败存在时（\(\lfloor \frac{n-1}{3} \rfloor\)）每个乘法门的线性通信复杂度下运行 [5]。该矩阵使得MPC协议能够在恶意攻击者存在的情况下生成正确的均匀随机秘密共享。此外，每次生成每个共享的摊销通信复杂度是线性的。由于这个显著的特点，超可逆矩阵在MPC协议和零知识证明协议的构建中起着重要作用，其中需要共同生成随机数。然而，这种矩阵的缺点是其基本域的大小与其矩阵的大小成线性关系。这意味着，如果我们通过使用超可逆矩阵构建一个n方参与方的MPC协议，那么q至少是2n.
> 
> 在本文中，我们提出了陡坡超可逆矩阵，它可以看作是超可逆矩阵的一般化。我们的陡坡超可逆矩阵可以定义在恒定大小的域上，而不受矩阵大小的影响。与算术秘密共享方案类似，为了将我们的陡坡超可逆矩阵应用于完美安全的MPC协议，最大弄脏的方数必须降至\(\frac{(1-\epsilon )n}{3}\)。因此，我们提出了第一个在存在\(\frac{(1-\epsilon )n}{3}\)恶意攻击情况下具有恒定通信复杂度的完美安全MPC协议。除了提出超可逆矩阵的变体，我们还克服了构建这个MPC协议时的几个障碍。我们的恒定大小的算术秘密共享方案与玩家淘汰技术兼容，即它支持参与方数和被弄脏方数的动态变化。此外，我们重写了公共重构协议，以支持在恒定大小的域上进行共享。将这些放在一起导致[5]中著名MPC协议的恒定大小的域变体。
> 
> 我们注意到，虽然通过将Shamir秘密共享方案替换为算术秘密共享方案，存在具有恒定通信复杂度的MPC协议，但没有任何参考文献严肃地描述了这样的协议的细节。我们的工作通过为依赖于恒定通信复杂度MPC协议的任何应用提供MPC原语来填补缺失的细节。作为我们完全安全的MPC协议的应用，这意味着在MPC-in-the-Head框架下拥有完美的鲁棒性，我们提出了3轮通信的恒定速率的零知识证明。由于其MPC协议的统计鲁棒性，以前的工作通过5轮通信达到了恒定速率[32]。我们例举了陡坡超可逆矩阵的另一个应用场景：基于电路可满足性的信息理论多验证者零知识证明[44]。我们设法消除了电路大小和安全参数对共享大小的依赖关系。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_7](https://doi.org/10.1007/978-981-99-8721-4_7)
## Scalable Multi-party Private Set Union from Multi-query Secret-Shared Private Membership Test.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#scalable-multi-party-private-set-union-from-multi-query-secret-shared-private-membership-test) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#scalable-multi-party-private-set-union-from-multi-query-secret-shared-private-membership-test)**
### 作者
* Xiang Liu, School of Cyber Science and Technology, Beihang University, Beijing, China
* Ying Gao, School of Cyber Science and Technology, Beihang University, Beijing, China
* Ying Gao, Zhongguancun Laboratory, Beijing, China
### 摘要
> 多方私有集合并(MPSU)允许k(k≥3)个方，每个方持有一个已知大小的数据集，计算它们的集合并，而不泄漏任何额外的信息。尽管双方PSU在最近几年取得了快速进展，但将其有效技术应用于多方环境会导致信息泄露，因此不能直接扩展。现有的MPSU协议在很大程度上依赖于计算密集型的公钥操作或通用安全多方计算技术，这些技术不具有可扩展性。
> 
> 在本文中，我们提出了一个新的高效MPSU框架，从多方秘密共享洗牌和一个新引入的协议称为多查询秘密共享私有成员测试(mq-ssPMT)。我们的MPSU主要基于对称密钥操作，对不同时攻击者(semi-honest adversary)具有安全性，但不能同时使领导者和客户(leader and clients)腐败。我们还提出了计算其他多方私有集合操作(MPSO)的新框架，例如交集和集合并和交集的基数，满足相同的安全需求。
> 
> 我们通过实现和与最新MPSU的比较，演示了我们的MPSU协议的可扩展性。实验表明，当计算大小为2^10的数据集时，我们的协议比最先进的MPSU快109倍，随着集合大小的增加，改进变得更显著。据我们所知，我们的是第一个报告大规模实验的协议。对于每个具有2^20个元素的7个方的数据集，我们的协议只需要46秒。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_8](https://doi.org/10.1007/978-981-99-8721-4_8)
## Robust Publicly Verifiable Covert Security: Limited Information Leakage and Guaranteed Correctness with Low Overhead.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#robust-publicly-verifiable-covert-security-limited-information-leakage-and-guaranteed-correctness-with-low-overhead) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#robust-publicly-verifiable-covert-security-limited-information-leakage-and-guaranteed-correctness-with-low-overhead)**
### 作者
* Yi Liu, College of Cyber Security, Jinan University, Guangzhou, 510632, China
* Junzuo Lai, College of Cyber Security, Jinan University, Guangzhou, 510632, China
* Anjia Yang, College of Cyber Security, Jinan University, Guangzhou, 510632, China
* Jian Weng, College of Cyber Security, Jinan University, Guangzhou, 510632, China
* Qi Wang, Department of Computer Science and Engineering & National Center for Applied Mathematics Shenzhen, Southern University of Science and Technology, Shenzhen, 518055, China
* Xianrui Qin, Department of Computer Science, The University of Hong Kong, Hong Kong, China
### 摘要
> 具有公开可验证隐蔽（PVC）安全性的协议具有高效率和吸引人的特点：隐蔽方可以偏离协议，但以一定的概率（例如，\(90\%\)，称为威慑因子），诚实方可以使用公开可验证的证书识别这种偏离并揭露它。这些协议特别适用于涉及重视声誉的方的实际应用。
> 
> 然而，在不被发现的错误行为的情况下（例如，以\(10\%\)的概率），对诚实方不提供安全保证，可能导致输入隐私和输出正确性的完全丧失。
> 
> 在本文中，我们通过提出一个高效解决方案来解决这个关键问题。我们引入并正式定义一个增强概念，称为强健PVC安全性，即使错误行为保持不被发现，恶意方也只能获得关于诚实方输入的额外1位信息，同时保持输出的正确性。我们提出了一种新颖的方法，利用双重执行和时间锁谜题来设计一个具有低开销的强健PVC安全的双方协议（取决于威慑因子）。例如，对于\(90\%\)的威慑因子，我们的强健PVC安全协议仅比最先进的PVC安全协议多产生约\({\sim}10\%\)的额外开销。
> 
> 鉴于强大的安全保证和低开销，我们的协议非常适合安全双方计算的实际应用。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_9](https://doi.org/10.1007/978-981-99-8721-4_9)
## LERNA: Secure Single-Server Aggregation via Key-Homomorphic Masking.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#lerna-secure-single-server-aggregation-via-key-homomorphic-masking) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#lerna-secure-single-server-aggregation-via-key-homomorphic-masking)**
### 作者
* Hanjun Li, University of Washington, Seattle, WA, USA
* Huijia Lin, University of Washington, Seattle, WA, USA
* Stefano Tessaro, University of Washington, Seattle, WA, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research & AlgoCRYPT CoE, New York, NY, USA
### 摘要
> 本文介绍了LERNA，一种新的单服务器安全聚合框架。我们的协议适用于同一组客户端进行多个连续的聚合阶段的情况，其中一部分客户端可能在某些阶段退出。我们依赖于客户端之间的初始秘密共享设置，该设置仅生成一次，并在所有后续聚合阶段中重复使用。与之前的工作[Bonawitz等人CCS'17，Bell等人CCS'20]相比，可重复使用的设置可以消除每个聚合之间服务器和客户端之间的一轮通信 - 即我们需要两轮半诚实安全（而不是三轮）和恶意模型中的三轮（而不是四轮）。我们的方法还通过仅需要重建单个秘密共享值（每个聚合）显着降低了服务器的计算成本。之前的工作要求在计算中涉及的每个客户端重新构建一个秘密共享值。我们基于决策复合剩余（DCR）和（环）近似学习（（R）LWR）假设分别提供LERNA的实现，并评估基于后者假设的版本。除了在回合复杂度上节省（从而降低延迟），我们的实验表明与最先进技术相比，服务器计算成本降低了两个数量级。在具有大量客户端的设置中，我们还将大多数客户端的计算成本降低了多达20倍，而仍然对少量“重型客户端”施加比之前工作更小的工作负担。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_10](https://doi.org/10.1007/978-981-99-8721-4_10)
## Unconditionally Secure Multiparty Computation for Symmetric Functions with Low Bottleneck Complexity.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#unconditionally-secure-multiparty-computation-for-symmetric-functions-with-low-bottleneck-complexity) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#unconditionally-secure-multiparty-computation-for-symmetric-functions-with-low-bottleneck-complexity)**
### 作者
* Reo Eriguchi, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
### 摘要
> "瓶颈复杂度"是保证多方安全计算(MPC)效率的一种衡量标准，由Boyle等人（ICALP 2018）引入以实现负载平衡。简单来说，它被定义为协议执行中任何参与者所需的最大通信复杂度。由于已经证明对于所有函数，无法实现在参与者数量n中达到亚线性瓶颈复杂度，因此之前的工作构建了针对特定函数具有低瓶颈复杂度的MPC协议。但是，之前针对对称函数的协议需要假定有混淆电路的计算原语，而其无条件安全的变体在计算函数的算术公式深度方面具有指数级的瓶颈复杂度，这限制了协议可以使用亚线性瓶颈复杂度在n中计算哪些对称函数。在这项工作中，我们为对称函数的无条件安全MPC协议的亚线性瓶颈复杂度做出了以下贡献:
> 
> 我们首次提出了无条件安全的MPC协议，可以使用亚线性瓶颈复杂度计算任何对称函数。从技术上讲，我们的第一个协议受到Ishai等人（TCC 2013）的一次性真值表协议的启发，但我们的第二个和第三个协议使用一种新的技术，将一次性真值表表示为二维或更高维的数组，并实现更好的平衡。
> 
> 我们提出了一个专门针对AND函数的无条件安全协议，其瓶颈复杂度更低。它避免了之前针对AND函数使用的伪随机函数，保持了瓶颈复杂度在n的对数因子内。
> 
> 通过将我们的AND函数协议与Bloom过滤器相结合，我们构建了一个无条件安全的私有集合交协议（PSI），该协议计算参与者私有集合的交集。这是一个具有亚线性瓶颈复杂度的PSI协议，在我们的知识范围内，即使在加密假设下也没有这样的协议。""

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_11](https://doi.org/10.1007/978-981-99-8721-4_11)
## Simple Threshold (Fully Homomorphic) Encryption from LWE with Polynomial Modulus.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#simple-threshold-fully-homomorphic-encryption-from-lwe-with-polynomial-modulus) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#simple-threshold-fully-homomorphic-encryption-from-lwe-with-polynomial-modulus)**
### 作者
* Katharina Boudgoust, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
### 摘要
> 学习与误差（LWE）假设是构建具有有用属性的加密方案的强大工具，例如对量子计算机的合理抵抗或支持同态计算。尽管如此，在基于LWE的方案中实现阈值解密的基本唯一方法需要一个在安全参数中是超多项式的模量，这导致密文大小和计算时间的大幅增加。
> 
> 在这项工作中，我们提出了一种支持简单的t-out-of-n阈值解密协议的（完全同态）加密方案，同时允许多项式模量。主要思想是使用Rényi散度（而不是先前作品中的统计距离）作为分布接近程度的度量。这带来了一些技术障碍，因为在标准语义安全性等决策安全性概念中使用Rényi散度的困难。我们通过构建具有较弱单向安全性概念的阈值方案来克服这一点，然后展示如何将任何单向（完全同态）阈值方案转换为保证不可区分性的安全性。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_12](https://doi.org/10.1007/978-981-99-8721-4_12)
## VSS from Distributed ZK Proofs and Applications.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#vss-from-distributed-zk-proofs-and-applications) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#vss-from-distributed-zk-proofs-and-applications)**
### 作者
* Shahla Atapoor, COSIC, KU Leuven, Leuven, Belgium
* Karim Baghery, COSIC, KU Leuven, Leuven, Belgium
* Daniele Cozzo, COSIC, KU Leuven, Leuven, Belgium
* Robi Pedersen, COSIC, KU Leuven, Leuven, Belgium
* Daniele Cozzo, IMDEA Software Institute, Madrid, Spain
### 摘要
> 非交互式可验证秘密共享（NI-VSS）是一种将秘密以可验证的方式分发给一组人的技术，使股东可以验证其接收到的份额的有效性，只有特定数量的人才能访问该秘密。VSS是密码学和分布式计算中的基本工具。在本文中，我们提出了一种极其高效的NI-VSS方案，该方案使用零知识（ZK）证明在秘密共享数据上。尽管以前的VSS方案隐含地使用了秘密共享数据上的ZK证明，但我们特别使用了Boneh等人在CRYPTO 2019中最近提供的它们的正式定义。所提出的NI-VSS方案以黑盒方式使用量子随机预言机和量子计算隐藏承诺方案，这确保了其易于使用，特别是在后量子阈值协议中。实现结果进一步巩固了它的实用性和优越性，超过了当前的构建方法。使用新的VSS方案，对于参数集\((n, t)=(128, 63)\)和(2048, 1023)，经销商可以在 less than 0.02 和 2.0 s内共享秘密，股东可以在 less than 0.4 和 5.0 ms内验证他们的股份。相对于成熟的Pedersen VSS方案，在相同的参数集下，新方案共享阶段的成本为\(2.5\times \)高，分别是共享速度的\(22.5\times \)和\(3.25\times \)，而在验证上则需要 less time 的 271 倍和 479 倍。利用新的NI-VSS方案，我们重新审视了几个经典的和PQ安全的阈值协议，并提高了它们的效率。我们的修改导致了Pedersen DKG协议和GJKR阈值签名方案的更高效版本。我们在同构基DKG和阈值签名方案中展示了类似的效率提高和对恶意方的改进韧性。由于其显着的效率和易于使用，我们认为新的NI-VSS方案可以成为各种阈值协议的有价值的工具。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_13](https://doi.org/10.1007/978-981-99-8721-4_13)
## Threshold Linear Secret Sharing to the Rescue of MPC-in-the-Head.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#threshold-linear-secret-sharing-to-the-rescue-of-mpc-in-the-head) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#threshold-linear-secret-sharing-to-the-rescue-of-mpc-in-the-head)**
### 作者
* Thibauld Feneuil, CryptoExperts, Paris, France
* Matthieu Rivain, CryptoExperts, Paris, France
* Thibauld Feneuil, Sorbonne Université, CNRS, INRIA, Institut de Mathématiques de Jussieu-Paris Rive Gauche, Ouragan, Paris, France
### 摘要
> 在头脑中的多方计算（MPC-in-the-Head）范式是使用安全多方计算（MPC）技术构建零知识证明系统的流行框架。虽然这种范式并不限于特定的秘密共享方案，但迄今为止提出的用于小电路的高效实例都依赖于加性秘密共享。
> 
> 在本研究中，我们展示了如何应用阈值线性秘密共享方案（threshold LSSS）有利于MPC-in-the-Head范式。对于捕捉大部分现有MPCitH方案的一般被动安全MPC协议模型，我们展示了我们的方法如何将基础证明系统的严谨性从1/N改善到\(1/\left( {\begin{array}{c}N\\ \ell \end{array}}\right) \)，其中N是参与方的数量，\(\ell \) 是分享方案的隐私阈值。尽管非常通用，我们的技术受限于参与方的数量 \(N \le |\mathbb {F}|\)，其中 \(\mathbb {F}\) 是语句的底层字段，因为MDS猜想。
> 
> 将我们的方法应用于低阈值LSSS还可以通过使MPC仿真成本独立于N来提高证明系统的性能，无论是对证明者还是验证者而言。增益对于验证时间尤其显着，其变为对数级别与N成正比（同时证明者仍需生成和提交N个输入份额）。我们进一步推广和改进我们的框架：我们展示了线性同态承诺如何摆脱证明者的线性复杂性，我们将结果推广到任何准阈值LSSS，并描述了一个依赖Shamir秘密共享的高效批处理技术。
> 
> 最后，我们将我们的技术应用于特定用例。首先，我们提出了一种变体的最近SDitH签名方案，实现了新的有趣权衡。特别是，对于10 KB的签名大小，我们获得了低于0.5毫秒的验证时间，这与SPHINCS+具有竞争力，同时实现了更快的签名。我们进一步将我们的批处理技术应用于两种不同的情境：批量SDitH证明和基于Limbo证明系统的一般算术电路的批量证明。在两种情况下，当批处理几十个语句时，我们获得了摊销的证明大小低于基线方案的1/10，而摊销性能也得到了显著改善。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_14](https://doi.org/10.1007/978-981-99-8721-4_14)
