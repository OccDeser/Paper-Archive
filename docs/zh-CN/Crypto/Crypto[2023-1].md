# Crypto[2023-1]
## Completeness Theorems for Adaptively Secure Broadcast.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#completeness-theorems-for-adaptively-secure-broadcast) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#completeness-theorems-for-adaptively-secure-broadcast)**
### 作者
* Ran Cohen, Efi Arazi School of Computer Science, Reichman University, Herzliya, Israel
* Juan Garay, Texas A&M University, College Station, USA
* Vassilis Zikas, Purdue University, West Lafayette, USA
### 摘要
> 区块链协议的出现再次激发了对适应性安全广播的兴趣；现在人们已经很清楚，在扩散网络上进行广播允许自适应对手根据它试图发送和更改的消息来腐败发送方。Hirt和Zikas（Eurocrypt’10）证明了这是模拟安全设置中广播的固有局限性，即面对腐败多数的自适应对手是不可能的（这是面对静态对手可以实现的任务）。
> 
> 本文的贡献有两个方面。首先，我们证明了与先前的观点相反，适应性安全广播的上述限制不是模拟安全的产物，而是适应性安全的固有问题。特别地，我们证明：（1）它同样适用于适应性对手的面向属性广播定义，（2）与适应性安全中的其他不可能性不同，无论是属性为基础还是以模拟为基础，都无法通过添加可编程随机预言机来规避这种不可能性。
> 
> 其次，我们转向资源受限密码学（RRC）范式[Garay等，Eurocrypt’20]，它已被证明在规避不可能性结果方面很有用，并问它是否也影响上述的负面结果。我们以肯定的答案回答了这个问题，通过展示时间锁谜题（TLP）-它可以被看作是RRC的一个实例确实允许实现面向属性的定义并规避适应性安全广播的不可能性。自然的问题是，TLP是否还允许在腐败多数情况下进行基于模拟的适应性安全广播？我们以否定的答案回答了这个问题。然而，我们展示了在可编程随机预言机模型中可以通过TLP的非承诺类比来实现积极的结果。
> 
> 重要的是，作为一个独立的贡献，我们还在资源受限设置中提出了第一个（有限的）组成定理，这对于在其他协议的背景下对TLP进行基于复杂性的非理想化处理是必需的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_1](https://doi.org/10.1007/978-3-031-38557-5_1)
## Bingo: Adaptivity and Asynchrony in Verifiable Secret Sharing and Distributed Key Generation.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#bingo-adaptivity-and-asynchrony-in-verifiable-secret-sharing-and-distributed-key-generation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#bingo-adaptivity-and-asynchrony-in-verifiable-secret-sharing-and-distributed-key-generation)**
### 作者
* Ittai Abraham, Intel Labs, Petach Tikva, Israel
* Philipp Jovanovic, University College London, London, UK
* Sarah Meiklejohn, University College London, London, UK
* Mary Maller, Ethereum Foundation and PQShield, Bern, Switzerland
* Sarah Meiklejohn, Google, Mountain View, USA
* Gilad Stern, The Hebrew University of Jerusalem, Jerusalem, Israel
### 摘要
> 我们提出了一种自适应安全和最优弹性的打包异步可验证秘密分享（PAVSS）协议，名为\(\textsf{Bingo}\)，它允许经销商以\(O(\lambda n^2)\)字的总通信复杂度与\(f+1\)个秘密分享，其中\(\lambda \)是安全参数，n是参与方的数量。利用\(\textsf{Bingo}\)，我们得到了一种自适应安全的异步拜占庭协议（VABA），它使用\(O(\lambda n^3)\)个预期字和恒定的预期时间。然后，我们利用这个协议构建了一种自适应安全的高阈值异步分布式密钥生成（ADKG）协议，它使用\(O(\lambda n^3)\)个预期字和恒定的预期时间。据我们所知，我们的ADKG是第一个允许自适应对手同时与最好已知静态ADKG的渐近复杂度相匹配的协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_2](https://doi.org/10.1007/978-3-031-38557-5_2)
## Network-Agnostic Security Comes (Almost) for Free in DKG and MPC.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#network-agnostic-security-comes-almost-for-free-in-dkg-and-mpc) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#network-agnostic-security-comes-almost-for-free-in-dkg-and-mpc)**
### 作者
* Renas Bacho, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Renas Bacho, Saarland University, Saarbrücken, Germany
* Daniel Collins, EPFL, Lausanne, Switzerland
* Chen-Da Liu-Zhang, Luzern University of Applied Sciences and Arts, Lucerne, Switzerland
* Chen-Da Liu-Zhang, Web3 Foundation, Houston, USA
### 摘要
> 分布式密钥生成协议（DKG）是阈值密码系统的基础构建块。 许多DKG协议可以容忍少于 \(t_s<n/2\) 的损坏，假设网络同步良好，但一旦网络延迟变得不稳定，就会变得不安全。 另一方面，在异步模型中的解决方案在任意网络条件下运行，但即使网络表现良好，也只能容忍 \(t_a<n/3\) 的损坏。
> 
> 在这项工作中，我们询问是否可以设计一个协议，在两种情况下都有安全保证。 我们展示了网络无关DKG协议的完整描述，显示最紧密约束为\(t_a + 2t_s <n\)。
> 
> 作为第二个贡献，我们提供了Blum，Liu-Zhang和Loss[Crypto'20]的网络无关多方计算（MPC）协议的优化版本，其改进了他们协议的通讯复杂度线性因子。此外，使用我们的DKG协议，我们可以在纯PKI模型中实例化我们的MPC协议，即不需要假设昂贵的可信设置。
> 
> 我们的协议产生可比较的通讯复杂度，与其各自纯同步和异步设置中的最佳弹性状态的DKG和MPC协议相当，从而表明网络无关的安全性事实上来说（几乎）是免费的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_3](https://doi.org/10.1007/978-3-031-38557-5_3)
## Practical Settlement Bounds for Longest-Chain Consensus.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#practical-settlement-bounds-for-longest-chain-consensus) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#practical-settlement-bounds-for-longest-chain-consensus)**
### 作者
* Peter Gaži, IOG, Bratislava, Slovakia
* Ling Ren, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Alexander Russell, University of Connecticut and IOG, Storrs, CT, USA
### 摘要
> 中本聪的最长链共识范式如今支持全球大部分的加密货币和分布式金融基础设施。最长链共识的一个标志性特性是，它提供随时间而增强的概率性结算保证。这使得结算误差和结算延迟之间的确切关系成为协议中用户和系统设计者必须了解的关键方面，以作出明智的决策。最近的一系列研究工作最终提供了对于工作量证明的最长链协议，此关系有一个令人满意的严格解释，但这些技术似乎无法适用于权益证明的设置。
> 
> 本文提出了一种新的分析方法，用于建立这种结算保证，为权益证明的最长链协议提供明确、严格的结算界限，使它们与工作量证明的对应协议处于同等地位。我们的技术在某些改进的情况下也适用于工作量证明的设置，从而为工作量证明协议的最新结算界限提供了改进。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_4](https://doi.org/10.1007/978-3-031-38557-5_4)
## New Bounds on the Local Leakage Resilience of Shamir's Secret Sharing Scheme.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#new-bounds-on-the-local-leakage-resilience-of-shamirs-secret-sharing-scheme) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#new-bounds-on-the-local-leakage-resilience-of-shamirs-secret-sharing-scheme)**
### 作者
* Ohad Klein, Hebrew University of Jerusalem, Jerusalem, Israel
* Ilan Komargodski, Hebrew University of Jerusalem, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, USA
### 摘要
> 我们研究了Shamir的秘密共享方案的本地泄漏弹性。在Shamir的方案中，对于一个秘密s，从大于n的有限域中随机选择一个次数为t的多项式f，并满足f(0)=s。任意t个分享(i, f(i))可以完全恢复f并由此计算出f(0)。但是，对于非零坐标的f的任意\(t-1\)个评估与f(0)完全独立。最近的研究考虑了即使每个分享泄漏了1个比特的信息，秘密是否仍然保密。出于Shamir方案的广泛应用的考虑，这个问题具有很好的动机。例如，已知如果Shamir方案在某些参数范围内具有泄漏弹性，那么已知的安全计算协议在本地泄漏模型中是安全的。
> 
> 对于特征为2的域，已知答案是否定的（例如，Guruswami和Wootters，STOC '16）。Benhamouda，Degwekar，Ishai和Rabin（CRYPTO '18）是首次给出肯定答案的人，假设计算是在素数阶域上进行的。他们证明了如果\(t \ge 0.907n\)，则Shamir方案具有泄漏弹性。此后，进行了大量努力来改进上述阈值，在一系列的研究之后，目前的记录显示\(t\ge 0.78n\)的泄漏弹性（Maji等人，ISIT '22）。所有现有的Shamir泄漏弹性的分析都遵循同一框架，对于任何\(t \le 0.5 n\)都存在已知的障碍。
> 
> 在这项工作中，我们开发了一个新的分析框架，使我们能够显著改进之前的记录并获得额外的新结果。具体而言，我们展示了以下内容：
> 
> 1. 对于任何\(t \ge 0.69n\)，Shamir方案具有泄漏弹性。
> 
> 2. 如果泄漏函数被保证“均衡”（即将可能的分享域分为两个大致相等大小的部分），则Shamir方案对于任何\(t \ge 0.58n\)都具有泄漏弹性。
> 
> 3. 如果泄漏函数被保证“不平衡”（即将可能的分享域分为两个非常不同大小的部分），则只要\(t \ge 0.01 n\)，Shamir方案就具有泄漏弹性。根据先前已知的技术，无法获得这样的结果。
> 
> 上述所有结果更普遍地适用于基于MDS码的秘密共享方案。
> 
> 确认泄漏弹性在\(t \le n/2\)范围内最为重要，因为在许多应用中，Shamir方案使用的阈值为\(t\le n/2\)。与以前的方法不同，我们的方法在\(t=n/2\)处似乎没有障碍，正如我们的第三个贡献所证明的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_5](https://doi.org/10.1007/978-3-031-38557-5_5)
## Arithmetic Sketching.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#arithmetic-sketching) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#arithmetic-sketching)**
### 作者
* Dan Boneh, Stanford University, Stanford, USA
* Elette Boyle, Reichman University, Herzliya, Israel
* Elette Boyle, NTT Research, Sunnyvale, USA
* Henry Corrigan-Gibbs, MIT, Cambridge, USA
* Niv Gilboa, Ben-Gurion University, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
### 摘要
> 这篇论文介绍了算术素描（arithmetic sketching），这是前几项研究中使用的原语的一种抽象，用于实现轻量级、低通信的零知识验证秘密共享向量。一个用于语言 \(\mathcal {L}\subseteq \mathbb {F}^n\) 的算术素描方案包括：(1) 将长输入 x 压缩为一个短的“素描”（sketch）的随机线性函数，以及 (2) 一个小的算术电路，仅当 \(x \in \mathcal {L}\) 时才接受该素描，误差很小。如果语言 \(\mathcal {L}\) 具有使用短素描的算术素描方案，则可以使用带有少量乘法门的算术电路来测试在 \(\mathcal {L}\) 中的成员资格。由于乘法在计算秘密共享、加密和承诺数据的协议中是主要的代价，算术素描方案产生了这些设置中的轻量级协议。
> 
> 除了对算术素描进行形式化外，我们的贡献还包括：
> 
> 一个从代数变体构建算术素描方案的通用框架。该框架统一了先前工作中的方案，并产生了适用于有用的新语言和具有改进可靠性错误的方案。
> 
> 针对稀疏向量语言的第一个算术素描方案：具有有界汉明重量、有界 \(L_1\) 范数以及少量非零值满足给定谓词的向量。
> 
> 一种将任何语言 \(\mathcal {L}\) 的算术素描方案编译成低通信恶意安全多服务器协议的方法，用于安全验证客户提供的秘密共享向量是否在 \(\mathcal {L}\) 中。
> 
> 我们还证明了首个非平凡的下界，在某些语言（如汉明重量为一的向量）的素描大小上限，并证明其他语言（如包含特定值的所有向量的语言）不存在算术素描方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_6](https://doi.org/10.1007/978-3-031-38557-5_6)
## Additive Randomized Encodings and Their Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#additive-randomized-encodings-and-their-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#additive-randomized-encodings-and-their-applications)**
### 作者
* Shai Halevi, Algorand, New York, USA
* Yuval Ishai, Technion - Israel Institute of Technology, Haifa, Israel
* Eyal Kushilevitz, Technion - Israel Institute of Technology, Haifa, Israel
* Tal Rabin, University of Pennsylvania, Philadelphia, USA
### 摘要
> 添加n个输入通常是最容易安全计算的非平凡函数。受几个开放性问题的启发，我们问：如果只有一个计算和的oracle，哪些函数才能够安全地计算？即，当参与者只能在本地编码他们的输入，然后将这些编码加起来得到Abelian群G上的一些输出，并解码结果以获得函数输出时，哪些函数可以在该模型中进行计算。
> 
> 对于函数f（x1，...，xn）的加性随机编码（ARE），它将每个输入x i 独立地映射到一个随机编码hat xi，使得\ sum_ {i = 1} ^ n hat xi只显示f（x1，...，xn）和关于输入的其他信息没有透露出来。在鲁棒ARE中，任何hat xi的子集之和仅显示通过限制相关输入得到的剩余函数。
> 
> 我们获得了ARE的正面和负面结果。特别是：
> 
> 信息理论ARE。我们完全描述了2方函数f：X1 x X2-> {0,1}，接受完美安全ARE。对于n≥3个类似的聚会，我们展示了一个有用的“封顶总和”函数，分离了统计安全性和完美安全性。
> 
> 计算ARE。我们提出了一个通用的可行性结果，表明在双线性群的标准难度假设下，可以在此模型中计算所有函数。我们还描述了一种基于启发的基于格的构造。
> 
> Robust ARE。我们基于理想混淆假设和标准密码学假设提出类似的鲁棒性计算ARE的可行性结果。
> 
> 然后，我们描述了ARE及其上述结果的多个应用程序。
> 
> 根据标准密码学假设，我们的计算 ARE方案意味着在洗牌模型中进行一般的非交互式安全计算是可行的，其中来自不同参与者的消息被搅拌。这意味着从集中模型到计算差分隐私中的（非鲁棒）洗牌模型的通用效用保留编译器。
> 
> 信息理论鲁棒ARE的存在意味着“最佳可能”的信息理论MPC协议（Halevi 等，TCC 2018年）和2次多方随机编码（Applebaum 等，TCC 2018年）的正面结果。这在前一模型中为特定函数产生了新的积极结果，并且对于在两个模型中获得负面结果具有简单的统一壁垒。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_7](https://doi.org/10.1007/978-3-031-38557-5_7)
## How to Recover a Secret with O(n) Additions.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#how-to-recover-a-secret-with-o-n-additions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#how-to-recover-a-secret-with-o-n-additions)**
### 作者
* Benny Applebaum, Tel Aviv University, Tel Aviv, Israel
* Oded Nir, Tel Aviv University, Tel Aviv, Israel
* Benny Pinkas, Aptos Labs and Bar Ilan University, Ramat Gan, Israel
### 摘要
> 门限密码学通常基于在密码学群G中“在指数”中共享私钥\(s\in F\)的思想，或更一般地，在一些线性同态域中对s进行编码。在门限系统的每次调用中（例如签名或解密），都会恢复一个秘密的“编码”，因此复杂度，以G上的群乘法的数量来衡量，等于重构秘密所需的F加法的数量。受到这种情景的启发，我们开始研究一种n方密钥共享方案，其重构算法需要最少数量的加法。现有方案的复杂性要么与\(n\log |F|\)成线性比例增长（例如Shamir, CACM’79），要么至少与n的平方独立于域F的大小成正比（例如Cramer-Xing, EUROCRYPT ’20）。这说明至今还不存在一个秘密共享方案，其恢复算法仅能通过执行O(n)次加法来计算。
> 
> 我们以积极的答案解决了这个问题，并提出了这样一个近门限秘密共享方案，它对于最大密度为\(\tau _p\)的未授权集合提供隐私，并对于密度至少为\(\tau _c\)的授权集合提供正确性，对于任何给定的接近的常数\(\tau _p<\tau _c\)。重构可以通过最多执行O(n)次加法来计算，并且此外，（1）份额大小是恒定的，（2）共享过程仅需执行O(n)次加法，（3）该方案是一个黑盒密钥共享方案，即共享和重构算法适用于所有有限阿贝尔群F。在我们的工作之前，即使对于\(\tau _p\)和\(\tau _c\)差距很大的弯道设置，也没有已知的具有特征（1）-(3)的方案。作为副产品，我们得到了第一个具有线性时间共享的黑盒接近门限秘密共享方案。我们还提供了几个具体的实例，似乎在实际中是高效的（例如用于门限离散对数签名）。
> 
> 我们的构造是组合性质的。我们将基于图的抹除码与一种基于与小整数向量的内积的随机抽取方法相结合，同时引入了一种类似于串联的密钥共享方案转换，可以任意缩小隐私-正确性差距，并带来较小的开销。我们的技术丰富了秘密共享工具箱，并在黑盒秘密共享的上下文中，提供了一种与现有数论方法不同的新选择。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_8](https://doi.org/10.1007/978-3-031-38557-5_8)
## On Linear Communication Complexity for (Maximally) Fluid MPC.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#on-linear-communication-complexity-for-maximally-fluid-mpc) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#on-linear-communication-complexity-for-maximally-fluid-mpc)**
### 作者
* Alexander Bienstock, New York University, New York, USA
* Daniel Escudero, J.P. Morgan AI Research & J.P. Morgan AlgoCRYPT CoE, New York, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research & J.P. Morgan AlgoCRYPT CoE, New York, USA
### 摘要
> 具有动态方参与的安全多方计算协议认为，诚实的方参在整个协议执行过程中不需要在线。最近，这种协议在大规模分布式协议（如区块链）的计算中得到了广泛应用。具体而言，在Fluid MPC中（在Choudhuri等人的CRYPTO 2021中介绍），方可以在每一轮中动态地加入和退出计算。在诚实多数设置下，已知最好的Fluid MPC协议在每个门上通信\(O(n^2)\)个元素，其中n是同时在线的方的数量。而Le Mans（Rachuri和Scholl，CRYPTO 2022）通过预处理将Fluid MPC扩展到了不诚实多数设置，但仍然需要在每个门上通信\(O(n^2)\)个元素。
> 
> 在本研究中，我们提出了替代的Fluid MPC解决方案，对于信息理论下的诚实多数和带预处理的不诚实多数设置，每个门只需O(n)的通信量。我们的解决方案还实现了最大的流动性，方仅需要在一个通信轮中在线即可。此外，我们还表明，在信息理论下的不诚实多数设置中，每个门的次二次 \(o(n^2)\)开销的协议对于可能参与（稍后）执行阶段的N个方来说，每个门需要\(\varOmega (N)\)的预处理数据。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_9](https://doi.org/10.1007/978-3-031-38557-5_9)
## Cryptography with Weights: MPC, Encryption and Signatures.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#cryptography-with-weights-mpc-encryption-and-signatures) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#cryptography-with-weights-mpc-encryption-and-signatures)**
### 作者
* Sanjam Garg, UC Berkeley and NTT Research, Berkeley, USA
* Abhishek Jain, John Hopkins University, Baltimore, USA
* Pratyay Mukherjee, Supra Research, Kelowna, Canada
* Rohit Sinha, Swirlds Labs, Dallas, USA
* Mingyuan Wang, UC Berkeley, Berkeley, USA
* Yinuo Zhang, UC Berkeley, Berkeley, USA
### 摘要
> 许多强大的加密系统（如安全多方计算、阈值加密和阈值签名）的安全性取决于对参与方的信任假设。事实上，该模型将所有参与方平等对待，并要求有一定比例的参与方是诚实的。尽管多年来这种一人一票的范式非常成功，但目前和新兴的实际应用案例表明它已经过时。
> 
> 在这项研究中，我们考虑权重加密系统，其中每个参与方被分配一个特定的权重，并且信任假设是一定比例的总权重是诚实的。通过虚拟化，可以将这一设置转换为标准设置（其中每个参与方具有单位权重）。然而，这种方法非常昂贵，权重会产生乘法开销。
> 
> 我们提出了一种效率显著提高的新权重加密系统：我们提出的方案仅在权重上产生了可加性开销。
> 
> 首先，我们提出了一种权重斜坡秘密共享方案（WRSS），其中秘密共享的大小是O（w）（w对应于权重）。相比之下，Shamir的秘密共享与虚拟化需要大小为\(w\cdot \lambda \)的秘密共享，其中\(\lambda =\log |{\mathbb {F}}|\) 是安全参数。
> 
> 接下来，我们使用我们的WRSS来构建（半诚实的）加权多方计算（MPC）、阈值加密和阈值签名的加权版本。所有这些方案都继承了我们的WRSS的高效性，并且仅在权重上产生了可加性开销。
> 
> 我们的WRSS基于基于中国剩余定理的秘密共享方案。有趣的是，这种秘密共享方案是非线性的，只能实现统计隐私。这些独特的特点在应用于MPC和阈值加密系统时引入了几个技术难题。我们通过开发几个新的想法解决了这些挑战。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_10](https://doi.org/10.1007/978-3-031-38557-5_10)
## Best of Both Worlds - Revisiting the Spymasters Double Agent Problem.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#best-of-both-worlds-revisiting-the-spymasters-double-agent-problem) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#best-of-both-worlds-revisiting-the-spymasters-double-agent-problem)**
### 作者
* Anasuya Acharya, Bar-Ilan University, Ramat Gan, Israel
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Oxana Poburinnaya, Bar-Ilan University, Ramat Gan, Israel
* Oxana Poburinnaya, Georgetown University, Washington D.C., District of Columbia, USA
* Muthuramakrishnan Venkitasubramaniam, Georgetown University, Washington D.C., District of Columbia, USA
### 摘要
> 该工作引入了安全多方计算的概念：具备后备安全性的MPC。对于n方协议，后备安全性是针对一个敌对结构\(\mathcal{Z}\)定义的，在计算能力不受限的敌对结构\(\mathcal{Z}\)和计算能力受限的敌对方故意损坏任意大小的子集时，可以确保安全性。这个概念在Chaum（Crypto 89）的工作中被考虑，他通过间谍首领的双重代理问题展示了一个针对诚实多数敌对结构的半诚实安全协议。
> 
> 我们的第一个主要结果是一个编译器，可以将任何具备统计安全性并容忍敌对结构\(\mathcal{Z}\)的半诚实安全的n方协议转换为（此外）具备半诚实后备安全性的协议。得到的协议在回合复杂性上是最优的，除了一个常数因子外，并且在假设和敌对结构方面也是最优的。我们的第二个结果充分描述了恶意后备安全性的可行性。更具体地说，我们证明了只有当\(\mathcal{Z}\)满足无条件的针对半诚实敌对方的MPC（即当且仅当\(\mathcal{Z}\in \mathcal{Q}^2\)）时，针对\(\mathcal{Z}\)的恶意后备安全协议才存在。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_11](https://doi.org/10.1007/978-3-031-38557-5_11)
## Perfect MPC over Layered Graphs.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#perfect-mpc-over-layered-graphs) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#perfect-mpc-over-layered-graphs)**
### 作者
* Bernardo David, IT University of Copenhagen, Copenhagen, Denmark
* Anders Konring, IT University of Copenhagen, Copenhagen, Denmark
* Giovanni Deligios, ETH Zurich, Zürich, Switzerland
* Aarushi Goel, NTT Research, Sunnyvale, USA
* Chen-Da Liu-Zhang, NTT Research, Sunnyvale, USA
* Yuval Ishai, Technion - Israel Institute of Technology, Haifa, Israel
* Eyal Kushilevitz, Technion - Israel Institute of Technology, Haifa, Israel
* Varun Narayanan, Technion - Israel Institute of Technology, Haifa, Israel
### 摘要
> 经典的“BGW协议”（Ben-Or，Goldwasser和Wigderson，STOC 1988）表明，如果有不超过\(n/3\)个参与方被损坏，那么安全多方计算（MPC）可以在具有完美全安全性的情况下实现。在MPC的“标准”模型中，该结论适用于对恶意对手的攻击，其中一组固定的n个参与方在协议的完整执行中参与其中。然而，在Ostrovsky和Yung（PODC 1991）的移动对手设置中，情况并不那么明确，其中对手可以定期“移动”，软化参与方并损坏一组新的t个参与方。在这种情况下，目前还不清楚是否可以对抗最大移动性对手实现完全安全。Gentry等人（Crypto 2021）的“You Only Speak Once”（YOSO）设置进一步激发了这个问题，其中不仅对手是移动的，而且每轮次都由不重叠的一组参与方执行。在这个模型中，先前的积极结果并没有实现完美安全，要么假设了概率性损坏和非标准通信模型，要么仅实现了安全中止的较弱目标。在这些设置中与BGW结果相匹配的问题仍然是一个未解之谜。
> 
> 在这项工作中，我们同时解决了上述两个挑战。我们考虑分层MPC模型，这是Choudhuri等人（Crypto 2021）流体MPC模型的简化变体。分层MPC是标准MPC的一个实例，其中交互模式由宽度为n的分层图定义，允许每个参与方仅向下一层的参与方发送秘密消息和广播消息。我们要求针对每层最多可以损坏t个参与方的恶意对手具有完美安全性。我们的主要结果是一个完美、全安全的分层MPC协议，其最优损坏阈值为\(t < n/3\)，从而将BGW的可行性结果扩展到分层设置。这意味着可以对抗最大移动性对手的完全安全的MPC协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_12](https://doi.org/10.1007/978-3-031-38557-5_12)
## Round-Optimal Black-Box MPC in the Plain Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#round-optimal-black-box-mpc-in-the-plain-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#round-optimal-black-box-mpc-in-the-plain-model)**
### 作者
* Yuval Ishai, Technion, Haifa, Israel
* Dakshita Khurana, UIUC, Champaign, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Bengaluru, India
### 摘要
> 我们在明文模型中提供了一个（完全）黑盒回合优化的安全多方计算协议的首个构建。我们的协议对子指数级安全的双消息统计发件人私密预转移（SSP-OT）进行了黑盒使用，而这又可以基于已知能够暗示公钥密码学的（子指数变种的）大多数标准密码学假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_13](https://doi.org/10.1007/978-3-031-38557-5_13)
## Reusable Secure Computation in the Plain Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#reusable-secure-computation-in-the-plain-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#reusable-secure-computation-in-the-plain-model)**
### 作者
* Vipul Goyal, NTT Research, Sunnyvale, USA
* Vipul Goyal, CMU, Pittsburgh, USA
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
* Mingyuan Wang, UC Berkeley, Berkeley, USA
### 摘要
> 考虑双方计算的标准设置，在该设置中，发送方拥有一个秘密函数f，接收方拥有一个秘密输入x，且协议结束时将输出f(x)传递给接收方。让我们考虑单向消息模型，在每一轮中只有一方发言。在这种设置下，Katz和Ostrovsky (Crypto 2004)证明，在平面模型（即没有可信设置）中，如果模拟器以黑盒方式使用敌手（也称为黑盒模拟），则双方之间至少需要四轮交互。假设发送方和接收方希望在可能不同的输入上运行多个连续的安全计算协议迭代。对于这些迭代中的每一个，各方是否需要从头开始协议并交换四条消息呢？
> 
> 在这项工作中，我们探索了在平面模型中分摊轮复杂度的可能性，换句话说，重用安全计算协议的某个轮数。我们得到了以下结果。
> 
> 在标准密码学假设下，我们构造了一个四轮双方计算协议，其中（i）如果接收方的输入保持不变且只有发送方的输入发生变化，则协议的前三轮可以重复使用无限次数，以及（ii）如果接收方的输入需要更改，则协议的前两轮可以重复使用无限次数。换句话说，如果只有发送方的输入发生变化，则发送方发送一个额外的消息，而在另一种情况下，我们需要接收方和发送方各发送一条消息。上述两种模式中每种模式所需的额外消息数是最优的，并且我们的协议允许这两种模式任意交错。
> 
> 我们还将这些结果扩展到多方设置（在同时消息交换模型中）并提供轮优化的协议，使得（i）如果各方的输入需要更改，则前两轮可以无限次数重复使用，以及（ii）如果输入保持不变但要计算的功能发生变化，则前三轮可以无限次数重复使用。与双方设置一样，我们允许上述两种操作模式的任意交错。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_14](https://doi.org/10.1007/978-3-031-38557-5_14)
## List Oblivious Transfer and Applications to Round-Optimal Black-Box Multiparty Coin Tossing.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#list-oblivious-transfer-and-applications-to-round-optimal-black-box-multiparty-coin-tossing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#list-oblivious-transfer-and-applications-to-round-optimal-black-box-multiparty-coin-tossing)**
### 作者
* Michele Ciampi, The University of Edinburgh, Edinburgh, UK
* Rafail Ostrovsky, University of California, Los Angeles, USA
* Luisa Siniscalchi, Danish Technical University, Copenhagen, Denmark
* Hendrik Waldner, University of Maryland, College Park, USA
* Hendrik Waldner, Max Planck Institute for Security and Privacy, Bochum, Germany
### 摘要
> 在这项工作中，我们研究了在多方功能安全评估中最小化循环复杂性的问题，同时使用多项式时间假设的黑盒技术。在Eurocrypt 2016中，Garg等人表明，假设所有参与方都可以访问广播信道，为了在普通模型下安全实现非平凡功能，至少需要四轮通信。
> 
> 随后的一系列工作基于Garg等人的结果，在各种假设下达到了这个下界。不幸的是，这些工作都没有对底层的加密原语进行黑盒使用。在Crypto 2021中，Ishai、Khurana、Sahai和Srinivasan接近了四轮下界，获得了一个使用伪随机公钥的五轮协议，该协议利用了遗忘传输和PKE进行黑盒使用。
> 
> 在这项工作中，我们展示了如何在四轮内实现任何无输入功能（例如抛硬币、生成密钥对等），同时利用两轮遗忘传输进行黑盒使用。作为额外的结果，我们构建了第一个使用底层原语的通用功能的四轮MPC协议，实现对非中止对手的安全性。
> 
> 我们的协议基于一个称为列表双方计算的新原语。与安全双方计算的标准概念相比，这个原语提供了更轻松的安全性。尽管有这种放松，我们认为这个工具对于我们的应用足够了。列表双方计算在独立兴趣方面很重要，因为我们认为它也可以用于在三轮内生成设置，例如遗忘传输相关随机性。在我们的工作之前，生成这样的设置需要至少四轮的互动或一个可信任的第三方。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_15](https://doi.org/10.1007/978-3-031-38557-5_15)
## Security-Preserving Distributed Samplers: How to Generate Any CRS in One Round Without Random Oracles.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#security-preserving-distributed-samplers-how-to-generate-any-crs-in-one-round-without-random-oracles) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#security-preserving-distributed-samplers-how-to-generate-any-crs-in-one-round-without-random-oracles)**
### 作者
* Damiano Abram, Aarhus University, Aarhus, Denmark
* Brent Waters, University of Texas at Austin, Austin, USA
* Brent Waters, NTT Research, Tokyo, Japan
* Mark Zhandry, NTT Research, Tokyo, Japan
### 摘要
> 分布式采样器是几个互不信任的方​​法生成一个所有方​都信任的共同参考字符串（CRS）的非交互方式。先前的工作在随机预言机模型或具有非常有限安全保证的标准模型中构建了分布式采样器。这并非偶然，因为标准模型下具有完全安全性的分布式采样器被证明是不可能的。
> 
> 在这项工作​​中，我们为分布式采样器提供了新的定义，并在标准模型中实现了有意义的安全保证。特别地，我们的定义意味着，当将CRS替换为分布式采样器时，一系列安全游戏的难度将得到保持。我们还展示了如何实现我们的分布式采样器定义。支持我们构建的一个核心技术工具是一种新的单消息零知识的概念。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_16](https://doi.org/10.1007/978-3-031-38557-5_16)
## One-Message Secure Reductions: On the Cost of Converting Correlations.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#one-message-secure-reductions-on-the-cost-of-converting-correlations) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#one-message-secure-reductions-on-the-cost-of-converting-correlations)**
### 作者
* Yuval Ishai, Technion, Haifa, Israel
* Varun Narayanan, Technion, Haifa, Israel
* Liav Zafar, Technion, Haifa, Israel
* Mahimna Kelkar, Cornell University, Ithaca, USA
* Mahimna Kelkar, Cornell Tech, New York, USA
### 摘要
> 相关的秘密随机性是安全计算协议中一种有用的资源，通常能够相比于普通模型下的协议实现显著提速。这激发了一系列关于识别和安全生成有用关联的研究工作。
> 
> 不同类型的关联在实用性和生成难度上可能存在巨大差异。虽然在有效生成混淆传输（Oblivious Transfer，OT）关联方面取得了重大进展，但其他有用的关联类型则更加昂贵。因此，极有必要研发高效技术，将给定源关联的副本转化为给定目标关联的副本，尤其是当前者的生成成本低于后者时。
> 
> 在这项工作中，我们首次系统性地研究了涉及单向信息传递的关联转换。我们将这种转换称为一条消息的安全约减（One-Message Secure Reduction，OMSR）。最近的研究（Agarwal等人，Eurocrypt 2022; Khorasgani等人，Eurocrypt 2022）探讨了没有通信允许的类似问题；然而，该设置非常限制性，很少有非平凡的转换能够实现。OMSR设置大大扩展了可行结果的范围，可以直接应用于现有的多方计算协议。
> 
> 我们得到了以下正面和负面结果。
> 
> OMSR构造。我们提出了一种基于拒绝抽样的通用技术，用于OT源关联的OMSR。我们将其应用于大幅改进分布式对称密码学优化协议的通信复杂度（Dinur等人，Crypto 2021）。
> 
> OMSR下界。我们开发了通用的技术，用于证明OMSR的通信复杂度下界，并与我们的正面结果相匹配，除了一些小常数因子。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_17](https://doi.org/10.1007/978-3-031-38557-5_17)
## A Framework for Statistically Sender Private OT with Optimal Rate.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#a-framework-for-statistically-sender-private-ot-with-optimal-rate) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#a-framework-for-statistically-sender-private-ot-with-optimal-rate)**
### 作者
* Pedro Branco, Max Planck Institute for Security and Privacy, Bochum, Germany
* Nico Döttling, Helmholtz Center for Information Security (CISPA), Saarbrücken, Germany
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
### 摘要
> 统计发送者隐私(SSP)是在标准模型中针对两次消息专属传输(OT)所能够达到的最强安全概念，它在统计意义上提供对恶意接收者的安全性，并在半诚实发送者方面提供计算安全性。在这项工作中，我们提供了一种新颖的基于决策性Diffie-Hellman(DDH)和带噪学习奇偶校验(LPN)假设的SSP OT构建方法，其(渐近地)实现了最优的平摊通信复杂性，即达到了速率1。具体而言，k个OT实例的总通信复杂性为\(2k(1+o(1))\)，这(渐近地)接近了信息论下界。以前，我们只知道使用重型速率-1的完全同态加密(FHE)技术来实现这个原语[Brakerski et al., Gentry and Halevi TCC’19]。
> 
> 我们构建的核心部分是一种称为统计联合数据私有性(统计co-PIR)的原语，本质上是一个公钥加密方案，可以在几个隐藏位置上统计地抹去信息位。我们的方案实现了近乎最优的密文大小，并对恶意接收者提供了统计安全性。在DDH假设下，对于半诚实发送者，我们实现了计算安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_18](https://doi.org/10.1007/978-3-031-38557-5_18)
## Malicious Secure, Structure-Aware Private Set Intersection.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#malicious-secure-structure-aware-private-set-intersection) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#malicious-secure-structure-aware-private-set-intersection)**
### 作者
* Gayathri Garimella, Oregon State University, Corvallis, USA
* Mike Rosulek, Oregon State University, Corvallis, USA
* Jaspal Singh, Oregon State University, Corvallis, USA
### 摘要
> 结构感知的私有集合交集（sa-PSI）是PSI的一种变体，其中Alice的输入集合A具有一些公开已知的结构，Bob的输入B是一个无序的点集，并且Alice学习到交集\(A \cap B\)。sa-PSI最近由Garimella等人（Crypto 2022）引入，他们描述了一个半诚实的协议，其中通信随着Alice集合的描述大小而扩展，而不是其基数。在本文中，我们提出了第一个抵御恶意对手的sa-PSI协议。
> 
> sa-PSI协议是基于函数秘密共享（FSS）方案构建的，我们工作中的主要挑战是确保多个FSS共享编码了相同的结构化集合。我们使用剪切-选择方法来解决这个问题。为了使FSS与剪切-选择兼容，我们引入了一种新的函数秘密共享变体，称为可去随机化的FSS（dFSS）。
> 
> 我们展示了如何构建用于几何球的dFSS，从而得到一个抵御恶意对手的sa-PSI协议，其中Alice的输入是一组球的并集。我们还改进了先前的FSS构造，对半诚实的sa-PSI进行了渐近改进。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_19](https://doi.org/10.1007/978-3-031-38557-5_19)
## Secure Multiparty Computation from Threshold Encryption Based on Class Groups.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#secure-multiparty-computation-from-threshold-encryption-based-on-class-groups) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#secure-multiparty-computation-from-threshold-encryption-based-on-class-groups)**
### 作者
* Lennart Braun, Aarhus University, Aarhus, Denmark
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
### 摘要
> 我们构建了基于类群的密码体系的第一个主动安全的阈值版本，即CL框架（Castagnos和Laguillaumie，2015）。
> 
> 我们展示了如何使用我们的阈值方案来实现通用的通用可合成（UC）安全多方计算（MPC），仅需透明设置，即不涉及秘密陷阱门。
> 
> 在实现我们的目标的过程中，我们设计了新的零知识（ZK）协议，其通信复杂度恒定，用于证明加密值之间的乘法关系。这使我们能够使用ZK证明来实现具有仅有恒定开销的主动安全MPC。
> 
> 最后，我们将我们的协议调整到所谓的“你只能说一次”（YOSO）设置，这是在区块链上执行MPC的一种非常有前途的近期方法。这是可能的，因为我们的密钥生成协议更简单，与之前的方法相比需要的交互显著减少：特别是，我们的新密钥生成协议允许对手偏置公钥，但我们证明这对最终密码体系的安全性没有影响。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_20](https://doi.org/10.1007/978-3-031-38557-5_20)
## Two-Round Stateless Deterministic Two-Party Schnorr Signatures from Pseudorandom Correlation Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#two-round-stateless-deterministic-two-party-schnorr-signatures-from-pseudorandom-correlation-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#two-round-stateless-deterministic-two-party-schnorr-signatures-from-pseudorandom-correlation-functions)**
### 作者
* Yashvanth Kondi, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
* Lawrence Roy, Aarhus University, Aarhus, Denmark
### 摘要
> Schnorr签名因其简单性、可证明的安全性和线性结构而成为受欢迎的选择，这使得相对容易实现阈值签名协议成为可能。Schnorr的确定性变种（其中的随机数通过使用来自消息和长期密钥的伪随机函数以无状态的方式生成）在实践中被广泛使用，因为它可以减轻由于故障或不良随机数生成器（在Schnorr中会导致严重的安全漏洞）带来的威胁。不幸的是，迄今为止，确定性Schnorr的阈值协议效率相对较低，因为它们对在随机数生成中涉及的伪随机函数进行了非黑盒使用。
> 
> 在本文中，我们提出了Schnorr签名的首个双方阈值协议，其中签名是无状态和确定性的，并且仅对底层密码算法进行黑盒使用。
> 
> 我们提出了一个基于一般假设的协议，实现了隐蔽安全性；以及一个在标准因子分解类假设下实现了完全主动安全性的协议。我们的协议关键地利用了伪随机相关函数（PCF）领域内的最新进展。
> 
> 作为额外的好处，在我们的协议中只需要两轮来执行分布式签名，这将我们的工作与最近一系列关于阈值Schnorr签名的轮复杂性和密码假设之间的权衡的研究联系起来。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_21](https://doi.org/10.1007/978-3-031-38557-5_21)
## Fully Adaptive Schnorr Threshold Signatures.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#fully-adaptive-schnorr-threshold-signatures) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#fully-adaptive-schnorr-threshold-signatures)**
### 作者
* Elizabeth Crites, University of Edinburgh, Edinburgh, UK
* Chelsea Komlo, University of Waterloo & Zcash Foundation, Waterloo, Canada
* Mary Maller, Ethereum Foundation & PQShield, London, UK
### 摘要
> 我们证明了一个名为\(\textsf{Sparkle}\)的简单三轮门限Schnorr签名方案的自适应安全性。门限签名的标准安全定义考虑的是静态对手 - 在协议开始时必须宣布哪些参与方是腐败的。更强的自适应对手可以在任何时候腐败参与方并获取它们的状态。这个概念自然且实用，但是目前文献中大多数方案都没有证明满足这种安全性。本文中，我们证明\(\textsf{Sparkle}\)在不同腐败模型和假设下实现了几个安全级别。首先，\(\textsf{Sparkle}\)在最小的假设下（离散对数（DL）假设和随机预言模型（ROM））具有静态安全性。如果自适应对手腐败少于阈值数\(t+1\)中的\(t/2\)个签名者，那么\(\textsf{Sparkle}\)在ROM中具有自适应安全性，并采用了离散对数（AOMDL）更弱的变体。最后，我们证明\(\textsf{Sparkle}\)在具有随机预言模型的代数群模型（AGM）中，对于腐败阈值为\(t\)，实现了完全自适应安全性。重要的是，我们展示了自适应安全性而无需安全抹除。我们的证明是首个对于任何门限Schnorr签名方案都能实现完全自适应安全性且没有指数级的紧缩损失；此外，还证明了这种约束是紧的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_22](https://doi.org/10.1007/978-3-031-38557-5_22)
## Snowblind: A Threshold Blind Signature in Pairing-Free Groups.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#snowblind-a-threshold-blind-signature-in-pairing-free-groups) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#snowblind-a-threshold-blind-signature-in-pairing-free-groups)**
### 作者
* Elizabeth Crites, University of Edinburgh, Edinburgh, UK
* Chelsea Komlo, University of Waterloo, Waterloo, Canada
* Chelsea Komlo, Zcash Foundation, McLean, USA
* Mary Maller, Ethereum Foundation, Zug, Switzerland
* Mary Maller, PQShield, Oxford, UK
* Stefano Tessaro, Paul G. Allen School of Computer Science and Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science and Engineering, University of Washington, Seattle, USA
### 摘要
> 阈值签名和盲签名都受到了相当多的关注。然而，它们的组合（即无论消息签名还是生成的签名，签名者联盟都不会知道，即盲阈值签名）很少有人了解。盲签名的几种应用（例如匿名令牌）会因为分布式签名而获益，从而增加对服务的信任并降低密钥泄露的风险。本文构建了第一个不需要配对的群中的盲阈值签名。我们的主要贡献是一种构造方式，将具有适当结构的底层盲非阈值签名方案转换为阈值方案，同时保持其盲目性。得到的签名协议分为三个轮次，生成包含一个群元素和两个标量的签名。底层的非阈值盲签名方案是独立感兴趣的，并且通过更简单的安全证明提供了比现有技术（Tessaro和Zhu，EUROCRYPT '22）更短的签名（三个元素而不是四个）。假设离散对数问题的困难性，我们所有的计划都在随机数谷和代数群模型下被证明是安全的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_23](https://doi.org/10.1007/978-3-031-38557-5_23)
## Practical Schnorr Threshold Signatures Without the Algebraic Group Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-1].md#practical-schnorr-threshold-signatures-without-the-algebraic-group-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-1].md#practical-schnorr-threshold-signatures-without-the-algebraic-group-model)**
### 作者
* Hien Chu, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Paul Gerhart, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Dominique Schröder, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Tim Ruffing, Blockstream Research, Victoria, Canada
### 摘要
> 阈值签名是数字签名方案，其中一组n个签名者指定一个阈值t，任何大小为t的子集都被授权代表群体生成签名。最近，由于保护高价值签名密钥的需要，例如DNSSEC密钥或加密货币生态系统中的数字钱包密钥，这个原生态再次引起了人们的关注。特别感兴趣的是FROST，这是一个实用的Schnorr阈值签名方案，目前正在IETF进行标准化，并在CRYPTO'22中对其安全性进行了最新的分析。
> 
> 我们通过关注FROST的不可伪造性以及实用的分布式密钥生成（DKG）算法来继续这一研究方向。现有的这种设置的证明要么使用非标准的启发式方法，要么使用像AGM这样的理想化群模型，或者使用理想化的密钥生成。此外，现有的证明没有考虑到已经提出的所有实用的优化。我们通过提出Schnorr阈值签名方案\(\textsf{Olaf}\)来弥合理论和实践之间的差距，该方案结合了已知最高效的FROST变种\(\textsf{FROST3}\)和Pedersen的DKG协议的变种（通常用于FROST），并证明了其不可伪造性。我们的证明依赖于AOMDL假设（OMDL假设的一种较弱且可伪造的变种），并且，和普通Schnorr签名的证明一样，依赖于随机预言模型。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38557-5_24](https://doi.org/10.1007/978-3-031-38557-5_24)
