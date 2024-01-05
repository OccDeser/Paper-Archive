# Eurocrypt[2022-1]
## EpiGRAM: Practical Garbled RAM.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#epigram-practical-garbled-ram) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#epigram-practical-garbled-ram)**
### 作者
* David Heath, Georgia Tech, Atlanta, USA
* Vladimir Kolesnikov, Georgia Tech, Atlanta, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
### 摘要
> 乱码RAM（GRAM）是由Lu和Ostrovsky引入的一种强大技术，它使得用子线性成本RAM配备了Garbled Circuit（GC），而不需要增加交互回合。虽然已知多种GRAM构建方式，但由于具有高常数和差劲的可扩展性，目前没有一个适用于实践。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_1](https://doi.org/10.1007/978-3-031-06944-4_1)
## Garbled Circuits with Sublinear Evaluator.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#garbled-circuits-with-sublinear-evaluator) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#garbled-circuits-with-sublinear-evaluator)**
### 作者
* Abida Haque, NC State, Raleigh, USA
* David Heath, Georgia Tech, Atlanta, USA
* Vladimir Kolesnikov, Georgia Tech, Atlanta, USA
* Steve Lu, Stealth Software Technologies, Inc., Los Angeles, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
* Akash Shah, UCLA, Los Angeles, USA
### 摘要
> 最近的一个工作方向，叠加混淆电路（SGC），表明混淆电路（GC）可以在包含条件行为的函数中得到改进。SGC通过仅发送足够的混淆材料用于 b 个总分支中的一个分支，从而缓解了2PC的通信瓶颈问题。因此，通信在电路规模上是次线性的。然而，无论是评估器还是生成器，在计算上都需要额外付出至少 \(\log b\) 的倍数的工作量，相较于标准的GC。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_2](https://doi.org/10.1007/978-3-031-06944-4_2)
## Round-Optimal and Communication-Efficient Multiparty Computation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-and-communication-efficient-multiparty-computation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-and-communication-efficient-multiparty-computation)**
### 作者
* Michele Ciampi, The University of Edinburgh, Edinburgh, UK
* Hendrik Waldner, The University of Edinburgh, Edinburgh, UK
* Rafail Ostrovsky, University of California, Los Angeles, CA, USA
* Vassilis Zikas, Purdue University, West Lafayette, IN, USA
### 摘要
> 典型的多方计算（MPC）的最小轮次复杂性方法通常会增加通信复杂性（CC）或依赖于设置假设。一个值得注意的例外是Ananth等人的最新工作[TCC 2019]，他们使用功能加密（FE）组合器在纯模型中获得了一种轮次最优（两轮次）的诚实的MPC，其CC与计算的电路的深度和输入输出长度成比例 - 我们称这样的协议为电路可伸缩协议。这引出了在纯模型中获得安全抗恶意对手的通信高效协议的问题，这是我们在这项工作中提出的。具体而言，我们的两个主要贡献是：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_3](https://doi.org/10.1007/978-3-031-06944-4_3)
## Round-Optimal Byzantine Agreement.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-byzantine-agreement) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-byzantine-agreement)**
### 作者
* Diana Ghinea, ETH Zurich, Zürich, Switzerland
* Vipul Goyal, Carnegie Mellon University and NTT Research, Pittsburgh, USA
* Chen-Da Liu-Zhang, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 拜占庭协议是密码学和分布式计算中的基本原语，减少其所需轮数的复杂性至关重要。长期以来已知，对于任何随机化的 r 轮协议，在堕落数量与参与方数量成线性关系且 t = θ (n) 时，必定以概率至少为 ((c·r)^-r) 失败，其中 c 是某个常数。另一方面，现有协议的失败概率至少为 2^-r。我们目前尚不清楚是否能够达到下界协议概率。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_4](https://doi.org/10.1007/978-3-031-06944-4_4)
## A Complete Characterization of Game-Theoretically Fair, Multi-Party Coin Toss.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#a-complete-characterization-of-game-theoretically-fair-multi-party-coin-toss) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#a-complete-characterization-of-game-theoretically-fair-multi-party-coin-toss)**
### 作者
* Ke Wu, Computer Science Department, Carnegie Mellon University, Pittsburgh, USA
* Elaine Shi, Computer Science Department, Carnegie Mellon University, Pittsburgh, USA
* Gilad Asharov, Department of Computer Science, Bar-Ilan University, Ramat Gan, Israel
### 摘要
> Cleve（1986 年 STOC）的著名下界证明表明，在双方抛硬币的情况下，德法公正性是不可能的。也就是说，腐败的一方总是有一种策略可以对诚实的一方的结果进行明显偏向。然而，Blum（1981 年 CRYPTO）的著名硬币投掷协议实现了一个严格较弱的“博弈论”公正性概念，即在这个两方硬币投掷协议中，任何一方都不能偏向于自己的偏好；因此，诚实的协议形成了纳什均衡状态，使得任何一方都不愿意偏离。令人惊讶的是，直到最近才开始研究 Blum 的著名硬币投掷协议的 n 方参与者模型。Chung 等人（2018 年 TCC）的工作是首次探索在大多数被腐败的情况下，具有博弈论公正性的 n 方硬币投掷的可行性。我们可以假设每个参与方都公开声明对比特 0 或 1 有偏好，如果结果符合该参与方的偏好，则获得效用值为 1；否则将无所获得。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_5](https://doi.org/10.1007/978-3-031-06944-4_5)
## Lightweight, Maliciously Secure Verifiable Function Secret Sharing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#lightweight-maliciously-secure-verifiable-function-secret-sharing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#lightweight-maliciously-secure-verifiable-function-secret-sharing)**
### 作者
* Leo de Castro, MIT, Cambridge, USA
* Anitgoni Polychroniadou, J.P. Morgan AI Research, New York, USA
### 摘要
> 在这项工作中，我们提出了一种轻量级的可验证两方功能秘密共享（FSS）构造，适用于点函数和多点函数。我们的可验证方法在两个方面都很轻量级。首先，它具有很高的具体效率，仅使用对称密钥操作，不涉及公钥或MPC技术。我们的性能与最先进的不可验证DPF构造相当，并且在计算和通信复杂性方面均优于所有以前的DPF验证技术，我们通过实现我们的方案来证明这一点。其次，我们的验证程序基本上没有限制。它将验证分布式点函数（DPF）的共享是否对应于某个点函数，而不受输出群大小、DPF输出的结构或必须评估DPF的点集的限制。这与以前的工作形成鲜明对比，以前的工作至少依赖于这三个约束之一，而通常是全部三个约束。此外，我们的构造是第一个可以在一个服务器存在恶意行为的情况下仍然保持安全的DPF验证协议。以前关于恶意安全的DPF验证工作只能验证非零输出为二进制且输出空间为大字段的DPF。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_6](https://doi.org/10.1007/978-3-031-06944-4_6)
## Highly Efficient OT-Based Multiplication Protocols.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#highly-efficient-ot-based-multiplication-protocols) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#highly-efficient-ot-based-multiplication-protocols)**
### 作者
* Iftach Haitner, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Eliad Tsfadia, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Iftach Haitner, Check Point Institute for Information Security, Tel Aviv, Israel
* Nikolaos Makriyannis, Fireblocks, New York, USA
* Samuel Ranellucci, Coinbase, San Francisco, USA
* Eliad Tsfadia, Google Research, Tel Aviv, Israel
### 摘要
> 我们提出了一种新的基于OT的两方乘法协议，其效率几乎与Gilboa的诚实但有限制性的协议（Crypto '99）相当，但对恶意对手具有高水平的安全性，无需进一步编译。实现的安全性足以满足许多应用需求，并且在假设DDH的情况下，可以廉价地编译成完全安全的协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_7](https://doi.org/10.1007/978-3-031-06944-4_7)
## Round-Optimal Black-Box Protocol Compilers.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-black-box-protocol-compilers) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-black-box-protocol-compilers)**
### 作者
* Yuval Ishai, Technion, Haifa, Israel
* Dakshita Khurana, UIUC, Champaign, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
### 摘要
> 我们在随机神谕模型（ROM）和1-out-of-2 OT相关模型中，提供了半诚实安全到恶意安全的黑盒、圆优化协议编译器。我们使用这些编译器获得了以下结果：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_8](https://doi.org/10.1007/978-3-031-06944-4_8)
## Guaranteed Output in $O(\sqrt{n})$ Rounds for Round-Robin Sampling Protocols.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#guaranteed-output-in-o-sqrt-n-rounds-for-round-robin-sampling-protocols) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#guaranteed-output-in-o-sqrt-n-rounds-for-round-robin-sampling-protocols)**
### 作者
* Ran Cohen, Reichman University, Herzliya, Israel
* Jack Doerner, Northeastern University, Boston, UK
* Yashvanth Kondi, Northeastern University, Boston, UK
* Abhi Shelat, Northeastern University, Boston, UK
### 摘要
> 我们引入了一种循环安全抽样的概念，该概念涵盖了文献中的几个协议，例如基于配对的多项式承诺和zk-SNARKs的“powers-of-tau”设置协议，以及某些可验证的混洗网络。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_9](https://doi.org/10.1007/978-3-031-06944-4_9)
## Universally Composable Subversion-Resilient Cryptography.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#universally-composable-subversion-resilient-cryptography) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#universally-composable-subversion-resilient-cryptography)**
### 作者
* Suvradip Chakraborty, ETH Zurich, Zürich, Switzerland
* Bernardo Magri, The University of Manchester, Manchester, UK
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
### 摘要
> 颠覆攻击通过以不可检测的方式泄漏信息替换诚实方正当的执行来破坏加密协议的安全性。目前已知的所有设计具有针对颠覆攻击的加密协议技术的重要限制是它们不能自动保证在协议会话可能与其他协议并发运行的真实环境中的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_10](https://doi.org/10.1007/978-3-031-06944-4_10)
## Asymptotically Quasi-Optimal Cryptography.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#asymptotically-quasi-optimal-cryptography) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#asymptotically-quasi-optimal-cryptography)**
### 作者
* Leo de Castro, MIT, Cambridge, UK
* Vinod Vaikuntanathan, MIT, Cambridge, UK
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Muthu Venkitasubramaniam, Georgetown University, Washington, USA
### 摘要
> 密码学的计算开销最小化问题是由Ishai、Kushilevitz、Ostrovsky和Sahai的研究所提出的(STOC 2008)。主要结论是，在合理的假设下，大多数密码学原语可以实现恒定的计算开销。然而，这忽略了一个可能在（具体的）计算安全参数\(\lambda\)上多项式依赖的附加项。本研究探讨了在所有n和\(\lambda\)选择上，达到最佳效率（多对数因子）的问题，其中n是给定任务的大小。特别是当\(n=\lambda\)时，我们希望计算成本仅为\(\tilde{O}(\lambda)\)。我们将这个目标称为渐近拟最优（AQO）密码学。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_11](https://doi.org/10.1007/978-3-031-06944-4_11)
## Round-Optimal Multi-party Computation with Identifiable Abort.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-multi-party-computation-with-identifiable-abort) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-multi-party-computation-with-identifiable-abort)**
### 作者
* Michele Ciampi, The University of Edinburgh, Edinburgh, UK
* Hendrik Waldner, The University of Edinburgh, Edinburgh, UK
* Divya Ravi, Aarhus University, Aarhus, Denmark
* Luisa Siniscalchi, Aarhus University, Aarhus, Denmark
* Luisa Siniscalchi, Concordium Blockchain Research Center, Aarhus, Denmark
### 摘要
> 安全多方计算（MPC）协议是对不诚实多数方有弹性的，允许对手获取计算结果的同时迫使诚实方中止计算。Aumann和Lindell引入了具有可识别中止的增强安全概念，允许对手触发中止，但同时使诚实方能够达成一致意见，以确定导致中止的方的身份。最近，在Eurocrypt 2016会议上，Garg等人显示，假设所有方都能够访问同时消息交换通道，至少需要四轮通信才能在明文模型中安全实现非平凡功能。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_12](https://doi.org/10.1007/978-3-031-06944-4_12)
## On the Security of ECDSA with Additive Key Derivation and Presignatures.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#on-the-security-of-ecdsa-with-additive-key-derivation-and-presignatures) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#on-the-security-of-ecdsa-with-additive-key-derivation-and-presignatures)**
### 作者
* Jens Groth, DFINITY, Zurich, Switzerland
* Victor Shoup, DFINITY, Zurich, Switzerland
### 摘要
> ECDSA签名的两种常见变种是可加密派生密钥和预签名。可加密派生密钥是从单个主密钥派生多个子密钥的简单机制，在密码货币应用中已经广泛使用，在比特币改进提案32（BIP32）中标准化了分层确定性钱包机制。由于其线性特性，可加密派生密钥在阈值设置中也适合高效实现。对于预签名，ECDSA签名算法中使用的秘密和公共nonce值是预先计算的。在阈值设置中，使用预签名以及其他预先计算的数据可以实现协议的极高效的“在线阶段”。最近的研究支持这两种变体，有时将它们结合在一起。然而，令人惊讶的是，我们意识到没有关于可加密派生密钥的先前安全性证明，更不用说将其与预签名结合使用的安全性证明了。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_13](https://doi.org/10.1007/978-3-031-06944-4_13)
## Secure Multiparty Computation with Free Branching.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#secure-multiparty-computation-with-free-branching) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#secure-multiparty-computation-with-free-branching)**
### 作者
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Aditya Hegde, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Mathias Hall-Andersen, Aarhus University, Aarhus, Denmark
### 摘要
> 我们研究包含多个子电路（即分支）和电路输出为单个“活跃”分支的分支电路的安全多方计算（MPC）协议。关键是，活跃分支的身份必须对协议参与者保持隐藏。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_14](https://doi.org/10.1007/978-3-031-06944-4_14)
## Secure Multiparty Computation with Sublinear Preprocessing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#secure-multiparty-computation-with-sublinear-preprocessing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#secure-multiparty-computation-with-sublinear-preprocessing)**
### 作者
* Elette Boyle, Reichman University (IDC Herzliya), and NTT Research, Herzliya, Israel
* Niv Gilboa, Ben-Gurion University, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Ariel Nof, Technion, Haifa, Israel
### 摘要
> 一种提高对于不诚实多数的安全多方计算（MPC）效率的常见技术是预处理：在脱机阶段，各方参与一个与输入无关的协议，安全地生成相关随机数。一旦输入已知，相关随机数被一个“非加密”的高效在线协议使用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_15](https://doi.org/10.1007/978-3-031-06944-4_15)
## Practical Non-interactive Publicly Verifiable Secret Sharing with Thousands of Parties.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#practical-non-interactive-publicly-verifiable-secret-sharing-with-thousands-of-parties) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#practical-non-interactive-publicly-verifiable-secret-sharing-with-thousands-of-parties)**
### 作者
* Craig Gentry, Algorand Foundation, New York, NY, USA
* Shai Halevi, Algorand Foundation, New York, NY, USA
* Vadim Lyubashevsky, IBM Research, Ruschlikon, Switzerland
### 摘要
> 非交互式公开可验证秘密分享（PVSS）方案可以在存在恶意方的去中心化环境中进行秘密的重新分享。最近提出的PVSS方案的一种应用是通过一系列共享该秘密的委员会使无许可权益证明区块链“保持秘密”。这些委员会可以使用该秘密代表区块链生成签名，或者在达成共识的前提下披露隐藏的数据。该应用需要包含数千个参与方的大型委员会，因此所采用的PVSS方案在计算和通信方面必须足够高效。然而，先前的PVSS方案具有较大的证明和/或需要在大型群组上进行多次指数运算。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_16](https://doi.org/10.1007/978-3-031-06944-4_16)
## Sine Series Approximation of the Mod Function for Bootstrapping of Approximate HE.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#sine-series-approximation-of-the-mod-function-for-bootstrapping-of-approximate-he) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#sine-series-approximation-of-the-mod-function-for-bootstrapping-of-approximate-he)**
### 作者
* Charanjit S. Jutla, IBM T. J. Watson Research Center, Yorktown Heights, NY, USA
* Nathan Manohar, IBM T. J. Watson Research Center, Yorktown Heights, NY, USA
### 摘要
> 虽然众所周知锯齿函数具有点对点收敛的傅里叶级数，但其收敛率并不适合用于在模值倍数附近的小区间中近似模函数的应用。我们展示了一种不同的正弦级数，该级数的误差为 \(O(\epsilon ^{2n+1})\)，适用于在模值倍数附近的 \(\epsilon \) 大小区间内近似模函数。而且，在对正弦函数进行泰勒级数逼近后，得到的多项式具有较小的系数，并且整个多项式可以精确计算，其精度仅略大于 \(-(2n+1)\log \epsilon \)，即所求近似的精度。然后，可以使用该多项式以几乎任意的精度来近似模函数，从而实现了具备任意精度的实用CKKS-HE回退操作。我们通过实现验证了我们的方法，并获得了100位精度的回退操作，甚至在较低精度上也比之前的工作提供了改进。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_17](https://doi.org/10.1007/978-3-031-06944-4_17)
## Limits of Polynomial Packings for $\mathbb {Z}_{p^k}$ and $\mathbb {F}_{p^k}$.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#limits-of-polynomial-packings-for-mathbb-z-p-k-and-mathbb-f-p-k) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#limits-of-polynomial-packings-for-mathbb-z-p-k-and-mathbb-f-p-k)**
### 作者
* Jung Hee Cheon, Seoul National University, Seoul, Republic of Korea
* Keewoo Lee, Seoul National University, Seoul, Republic of Korea
* Jung Hee Cheon, Crypto Lab Inc., Seoul, Republic of Korea
### 摘要
> 我们正式定义多项式打包方法，并在密码学的各种上下文中开始对相关概念进行统一研究。这包括同态加密（HE）打包和信息理论安全的多方计算（MPC）中的反向乘法友好嵌入（RMFE）。我们证明了将\(\mathbb {Z}_{p^k}\)或\(\mathbb {F}_{p^k}\)消息打包到\(\mathbb {Z}_{p^t}[x]/f(x)\)中的一些上限和不可能性结果，其中(i) 是打包密度，(ii) 是级别一致性，以及 (iii) 是满射性。这些结果对最近开发的针对被积极腐败的大多数安全的\(\mathbb {Z}_{2^k}\)上基于HE的MPC有着重要影响，并为RMFE的上限提供了新的证明。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_18](https://doi.org/10.1007/978-3-031-06944-4_18)
## High-Precision Bootstrapping for Approximate Homomorphic Encryption by Error Variance Minimization.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#high-precision-bootstrapping-for-approximate-homomorphic-encryption-by-error-variance-minimization) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#high-precision-bootstrapping-for-approximate-homomorphic-encryption-by-error-variance-minimization)**
### 作者
* Yongwoo Lee, Samsung Advanced Institute of Technology, Suwon-si, Gyeonggi-do, Korea
* HyungChul Kang, Samsung Advanced Institute of Technology, Suwon-si, Gyeonggi-do, Korea
* Yongwoo Lee, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Korea
* Joon-Woo Lee, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Korea
* Jong-Seon No, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Korea
* Young-Sik Kim, Department of Information and Communication Engineering, Chosun University, Gwangju, Korea
* Yongjune Kim, Department of Electrical Engineering and Computer Science, DGIST, Daegu, Korea
### 摘要
> Cheon-Kim-Kim-Song（CKKS）方案（Asiacrypt'17）是最具有前景的同态加密（HE）方案之一，因为它可以实现对实数（或复数）进行隐私保护计算。众所周知，重新启动是CKKS方案中最具挑战性的部分。此外，模规约的同态评估是CKKS重新启动的核心。由于模规约不能用复数的加法和乘法表示，因此应使用适用于模规约的多项式近似。目前已知的最佳技术（Eurocrypt'21）使用三角函数及其组合的多项式近似。然而，所有先前的方法都基于间接逼近，因此需要大量的乘法深度才能达到高精度。本文提出了CKKS重新启动的直接模规约多项式逼近方法，该方法在误差方差和深度方面是最优的。此外，我们提出了一种高效的算法，即懒惰的baby-step giant-step（BSGS）算法，以同态方式评估近似多项式，利用懒惰的重线性化/重新缩放技术。与普通的BSGS算法相比，懒惰的BSGS将计算复杂度减少了一半。通过使用HE库实施验证了通过所提出的算法对CKKS方案的性能改进。实施结果表明，为了实现最先进的精度，所提出的方法在模规约方面具有10个乘法深度，而先前的方法则具有11到12个深度。此外，我们在小的乘法深度内实现了更高的精度，例如在乘法深度11的情况下达到93位。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_19](https://doi.org/10.1007/978-3-031-06944-4_19)
## Rubato: Noisy Ciphers for Approximate Homomorphic Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#rubato-noisy-ciphers-for-approximate-homomorphic-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#rubato-noisy-ciphers-for-approximate-homomorphic-encryption)**
### 作者
* Jincheol Ha, KAIST, Daejeon, Korea
* Byeonghak Lee, KAIST, Daejeon, Korea
* Jooyoung Lee, KAIST, Daejeon, Korea
* Mincheol Son, KAIST, Daejeon, Korea
* Seongkwang Kim, Samsung SDS, Seoul, Korea
### 摘要
> 一个转密码框架将对称密文转换为在服务器端的同态密文，从而减少客户端的计算和通信负载。在Asiacrypt 2021中，Cho等人提出了支持近似计算的RtF框架。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_20](https://doi.org/10.1007/978-3-031-06944-4_20)
## Field Instruction Multiple Data.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#field-instruction-multiple-data) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#field-instruction-multiple-data)**
### 作者
* Khin Mi Mi Aung, Institute for Infocomm Research, Agency for Science, Technology and Research (A*STAR), Singapore, Singapore
* Enhui Lim, Institute for Infocomm Research, Agency for Science, Technology and Research (A*STAR), Singapore, Singapore
* Benjamin Hong Meng Tan, Institute for Infocomm Research, Agency for Science, Technology and Research (A*STAR), Singapore, Singapore
* Sze Ling Yeo, Institute for Infocomm Research, Agency for Science, Technology and Research (A*STAR), Singapore, Singapore
* Jun Jie Sim, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Huaxiong Wang, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
### 摘要
> 完全同态加密（FHE）自Gentry（STOC 2009）首次构建以来得到了飞速发展。单指令多数据（SIMD）使得在\((\mathbb {F}_{t^d})^\ell\)上对向量进行同态运算更加高效，其中\(t\)为素数。采用形式为\(X^{2^N}+1\)的旋转多项式实例化的RLWE，由于高效的快速傅里叶变换，主导了FHE的实现。然而，这种选择导致了非常短的SIMD明文向量和高度扩展字段，例如对于小素数（\(t = 3, 5, \dots\)），\(\ell < 100, d > 100\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_21](https://doi.org/10.1007/978-3-031-06944-4_21)
## Cryptanalysis of Candidate Obfuscators for Affine Determinant Programs.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#cryptanalysis-of-candidate-obfuscators-for-affine-determinant-programs) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#cryptanalysis-of-candidate-obfuscators-for-affine-determinant-programs)**
### 作者
* Li Yao, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yilei Chen, Tsinghua University, Beijing, 100084, China
* Yilei Chen, Shanghai Qi Zhi Institute, Shanghai, 200232, China
* Yu Yu, Shanghai Qi Zhi Institute, Shanghai, 200232, China
### 摘要
> 在2020年的ITCS会议上，Bartusek等人提出了一个用于仿射行列式程序（ADP）的候选不可辨别性模糊器（\(i\mathcal {O}\)）。该候选方案十分特殊，因为它直接应用了特定的随机化技术于基础的ADP上，而不依赖于传统密码学假设（如离散对数或错误学习）的困难性。相较于其他\(i\mathcal {O}\)的候选方案，它相对高效。然而，这个模糊化方案还需要进一步的密码分析，因为它没有基于任何形式良好的数学假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_22](https://doi.org/10.1007/978-3-031-06944-4_22)
## Indistinguishability Obfuscation from LPN over $\mathbb {F}_p$, DLIN, and PRGs in NC0.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#indistinguishability-obfuscation-from-lpn-over-mathbb-f-p-dlin-and-prgs-in-nc0) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#indistinguishability-obfuscation-from-lpn-over-mathbb-f-p-dlin-and-prgs-in-nc0)**
### 作者
* Aayush Jain, NTT Research and Carnegie Mellon University, Pittsburgh, USA
* Huijia Lin, University of Washington, Seattle, USA
* Amit Sahai, UCLA, Los Angeles, USA
### 摘要
> 在这项研究中，我们研究了构建不可区分混淆（iO）所需的最小假设集。我们证明：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_23](https://doi.org/10.1007/978-3-031-06944-4_23)
## Incompressible Cryptography.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#incompressible-cryptography) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#incompressible-cryptography)**
### 作者
* Jiaxin Guan, Princeton University, Princeton, NJ, 08544, USA
* Mark Zhandry, Princeton University, Princeton, NJ, 08544, USA
* Daniel Wichs, Northeastern University, Boston, MA, 02115, USA
* Daniel Wichs, NTT Research, Inc., Sunnyvale, CA, 94085, USA
* Mark Zhandry, NTT Research, Inc., Sunnyvale, CA, 94085, USA
### 摘要
> 不可压缩加密使得密文的大小可以灵活地变大，并确保即使解密密钥泄露，对手也无法从加密数据中获取任何信息，除非她几乎完整地存储整个密文。不可压缩签名可以变得任意大，并确保对手无法对任何消息产生签名，即使她之前见过已签名的消息，除非她几乎完整地存储其中一个签名。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_24](https://doi.org/10.1007/978-3-031-06944-4_24)
## COA-Secure Obfuscation and Applications.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#coa-secure-obfuscation-and-applications) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#coa-secure-obfuscation-and-applications)**
### 作者
* Ran Canetti, Boston University, Boston, USA
* Suvradip Chakraborty, ETH Zürich, Zürich, Switzerland
* Dakshita Khurana, UIUC, Champaign, USA
* Nishant Kumar, UIUC, Champaign, USA
* Oxana Poburinnaya, Boston, USA
* Manoj Prabhakaran, IIT Bombay, Mumbai, India
### 摘要
> 我们提出了一种新的程序混淆范式，其中混淆程序附带证明其“良好形式”的证明。除了声称存在具有经过证明的结构的底层明文程序外，这些证明还可以防止蓄意攻击，在这种攻击中，对手秘密地创建一个基于在其他混淆程序中嵌入的秘密的混淆程序。我们将这种新的保证称为选择性混淆攻击（COA）安全。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_25](https://doi.org/10.1007/978-3-031-06944-4_25)
## Unclonable Polymers and Their Cryptographic Applications.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#unclonable-polymers-and-their-cryptographic-applications) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#unclonable-polymers-and-their-cryptographic-applications)**
### 作者
* Ghada Almashaqbeh, University of Connecticut, Storrs, USA
* Ran Canetti, Boston University, Boston, USA
* Yaniv Erlich, Eleven Therapeutics and IDC Herzliya, Herzliya, Israel
* Jonathan Gershoni, Tel Aviv University, Tel Aviv, Israel
* Anna Roitburd-Berman, Tel Aviv University, Tel Aviv, Israel
* Eran Tromer, Tel Aviv University, Tel Aviv, Israel
* Tal Malkin, Columbia University, New York, USA
* Itsik Pe’er, Columbia University, New York, USA
* Eran Tromer, Columbia University, New York, USA
### 摘要
> 我们提出了一种机制来生成和操作蛋白质聚合物，以获得一种新型消费存储器，具有迷人的加密“自毁”属性，假设

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_26](https://doi.org/10.1007/978-3-031-06944-4_26)
## Distributed (Correlation) Samplers: How to Remove a Trusted Dealer in One Round.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#distributed-correlation-samplers-how-to-remove-a-trusted-dealer-in-one-round) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#distributed-correlation-samplers-how-to-remove-a-trusted-dealer-in-one-round)**
### 作者
* Damiano Abram, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
* Sophia Yakoubov, Aarhus University, Aarhus, Denmark
### 摘要
> 结构化随机字符串（SRS）和相关性随机性在许多密码协议中都非常重要。在交互昂贵的环境中，我们希望尽可能少地通过通信来获取这种随机性；理想情况下，只需交换一轮可视为公钥的可重复消息即可实现。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_27](https://doi.org/10.1007/978-3-031-06944-4_27)
