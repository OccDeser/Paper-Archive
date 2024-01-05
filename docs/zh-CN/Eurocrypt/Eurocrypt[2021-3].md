# Eurocrypt[2021-3]
## sf LogStack: Stacked Garbling with O(b log b) Computation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#sf-logstack-stacked-garbling-with-o-b-log-b-computation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#sf-logstack-stacked-garbling-with-o-b-log-b-computation)**
### 作者
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 任意程序的安全双方计算（2PC）可以通过使用混淆电路（GC）高效实现。直到最近，人们普遍认为必须通过网络传输与整个程序成比例的GC，包括由于条件分支而完全丢弃的程序部分。最近的研究表明这一观点是错误的，仅需要与最长程序执行路径成比例的通信即可（Heath和Kolesnikov，CRYPTO 20，[HK20a]）。尽管这项最新研究减少了所需的通信量，但增加了计算量。对于具有b个分支的条件，参与双方使用\(O(b^2)\)的计算量（传统GC仅使用O(b)）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_1](https://doi.org/10.1007/978-3-030-77883-5_1)
## Large Scale, Actively Secure Computation from LPN and Free-XOR Garbled Circuits.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#large-scale-actively-secure-computation-from-lpn-and-free-xor-garbled-circuits) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#large-scale-actively-secure-computation-from-lpn-and-free-xor-garbled-circuits)**
### 作者
* Kelong Cong, imec-COSIC, KU Leuven, Leuven, Belgium
* Emmanuela Orsini, imec-COSIC, KU Leuven, Leuven, Belgium
* Nigel P. Smart, imec-COSIC, KU Leuven, Leuven, Belgium
* Aner Ben-Efraim, Department of Computer Science, Ariel Univeristy, Ariel, Israel
* Eran Omri, Department of Computer Science, Ariel Univeristy, Ariel, Israel
* Nigel P. Smart, Department of Computer Science, University of Bristol, Bristol, UK
* Eduardo Soria-Vazquez, Department of Computer Science, Aarhus University, Aarhus, Denmark
### 摘要
> 我们（MPC）协议基于混淆电路，既具有主动安全性，又支持自由XOR技术，并且每个参与方的通信复杂度为O（n）。这改进了Ben-Efraim、Lindell和Omri的一项只实现被动安全而不支持自由-XOR 的协议。我们的构建基于一种新的LPN加密变体，但缺点是需要相当昂贵的混淆阶段。为了解决这个问题，我们提出了第二个协议，假设至少n/c的参与方是诚实的（对于任意固定值c）。这第二个协议允许更轻量级的预处理，但在线效率会有小的牺牲成本。我们通过实现演示了我们评估阶段的实用性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_2](https://doi.org/10.1007/978-3-030-77883-5_2)
## Threshold Garbled Circuits and Ad Hoc Secure Computation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#threshold-garbled-circuits-and-ad-hoc-secure-computation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#threshold-garbled-circuits-and-ad-hoc-secure-computation)**
### 作者
* Michele Ciampi, The University of Edinburgh, Edinburgh, UK
* Vipul Goyal, NTT Research and CMU, Pittsburgh, PA, USA
* Rafail Ostrovsky, UCLA Department of Computer Science and Department of Mathematics, Los Angeles, CA, USA
### 摘要
> 混淆电路（GC）是密码学中基础而强大的工具，自引入以来已考虑了许多GC的变体。混淆电路的一个重要特性是，只有在获得每个输入线路的恰好1个密钥时，它们才能被安全地评估：不能多也不能少。在这项工作中，我们研究了以下两种情况：1）一些线路密钥缺失，但我们仍然对计算混淆电路的输出感兴趣；2）GC的评估者可能具有固定数量线路的两个密钥。我们开始以非交互多方计算（NIMPC）的角度研究这个问题，NIMPC与GC密切相关。在这个概念中，有一个固定数量的参与方（n），他们可以从一个可信安装中获取相关信息。然后这些参与方可以将其输入的编码发送给一个评估者，评估者可以计算出函数的输出。类似于Beimel等人提出的即席安全计算概念[ITCS 2016]，我们考虑少于n个参与方参与在线阶段的情况，并且让这些参与方与评估者勾结。我们将这个概念称为阈值NIMPC。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_3](https://doi.org/10.1007/978-3-030-77883-5_3)
## Indistinguishability Obfuscation from Simple-to-State Hard Problems: New Assumptions, New Techniques, and Simplification.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#indistinguishability-obfuscation-from-simple-to-state-hard-problems-new-assumptions-new-techniques-and-simplification) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#indistinguishability-obfuscation-from-simple-to-state-hard-problems-new-assumptions-new-techniques-and-simplification)**
### 作者
* Romain Gay, IBM, Zurich, Switzerland
* Aayush Jain, UCLA, Los Angeles, CA, 90095, USA
* Amit Sahai, UCLA, Los Angeles, CA, 90095, USA
* Huijia Lin, University of Washington, Seattle, WA, 98195, USA
### 摘要
> 在这项工作中，我们研究了构建函数加密和不可区分混淆（\(i\mathcal{O}\)）所需的一组简单陈述假设的问题，这些假设支持由多项式大小电路描述的所有函数。我们的工作在多个方面改进了Jain、Lin、Matt和Sahai（2019年Eurocrypt）的最新工作。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_4](https://doi.org/10.1007/978-3-030-77883-5_4)
## Candidate Obfuscation via Oblivious LWE Sampling.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#candidate-obfuscation-via-oblivious-lwe-sampling) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#candidate-obfuscation-via-oblivious-lwe-sampling)**
### 作者
* Hoeteck Wee, NTT Research Inc., San Francisco, USA
* Daniel Wichs, NTT Research Inc., San Francisco, USA
* Daniel Wichs, Northeastern University, Boston, USA
### 摘要
> 我们提出了一种新的简单的不可区分混淆（iO）候选构造。我们的方案受到格和学习与错误（LWE）技术的启发，但我们无法在标准假设下证明其安全性。相反，我们提出了一个新的可证伪假设，该假设下该方案是安全的。此外，该方案可能实现了后量子安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_5](https://doi.org/10.1007/978-3-030-77883-5_5)
## Black-Box Non-interactive Non-malleable Commitments.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#black-box-non-interactive-non-malleable-commitments) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#black-box-non-interactive-non-malleable-commitments)**
### 作者
* Rachit Garg, University of Texas at Austin, Austin, USA
* George Lu, University of Texas at Austin, Austin, USA
* Brent Waters, University of Texas at Austin, Austin, USA
* Dakshita Khurana, University of Illinois Urbana-Champaign, Urbana, USA
* Brent Waters, NTT Research, Sunnyvale, USA
### 摘要
> 最近在从明智的假设中建立非交互式非篡改承诺方面取得了令人兴奋的进展。所有提出的方法都分两步进行。首先，基于各种次指数难度的假设，获得用于非常小的标签/身份空间的简单的“基础”承诺方案。接下来，假设次指数的非交互式证人不可区分证明（NIWIs）和无密钥碰撞抗性哈希函数的变体，构建非交互式编译器，将基于标签的非篡改承诺转换为更大标签空间的非交互式非篡改承诺。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_6](https://doi.org/10.1007/978-3-030-77883-5_6)
## Non-interactive Distributional Indistinguishability (NIDI) and Non-malleable Commitments.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#non-interactive-distributional-indistinguishability-nidi-and-non-malleable-commitments) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#non-interactive-distributional-indistinguishability-nidi-and-non-malleable-commitments)**
### 作者
* Dakshita Khurana, University of Illinois, Urbana-Champaign, Urbana, USA
### 摘要
> 我们引入非交互式分布不可区分论证（NIDI）来解决NIWI证明的一个重大缺陷：即在证明关于具有唯一见证者的\(\mathsf {NP}\)语言的陈述时缺乏有意义的保密性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_7](https://doi.org/10.1007/978-3-030-77883-5_7)
## Public-Coin Statistical Zero-Knowledge Batch Verification Against Malicious Verifiers.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#public-coin-statistical-zero-knowledge-batch-verification-against-malicious-verifiers) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#public-coin-statistical-zero-knowledge-batch-verification-against-malicious-verifiers)**
### 作者
* Inbar Kaslasi, Technion, Haifa, Israel
* Ron D. Rothblum, Technion, Haifa, Israel
* Prashant Nalini Vasudevanr, UC Berkeley, Berkeley, USA
### 摘要
> 假设问题\(\varPi\)有一个统计零知识证明（\(\mathsf{SZK}\)）, 其通信复杂性为m。对于\(\mathsf{SZK}\)的批量验证问题是问是否可以用一个统计零知识证明来证明k个实例\(x_1,\dots ,x_k\)都属于\(\varPi\)，且其通信复杂性优于\(k \cdot m\)（即在每个输入上独立执行原始协议的平凡解决方案的复杂性）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_8](https://doi.org/10.1007/978-3-030-77883-5_8)
## Efficient Range Proofs with Transparent Setup from Bounded Integer Commitments.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#efficient-range-proofs-with-transparent-setup-from-bounded-integer-commitments) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#efficient-range-proofs-with-transparent-setup-from-bounded-integer-commitments)**
### 作者
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
* Michael Klooß, Karlsruhe Institute for Technology, Karlsruhe, Germany
* Huang Lin, Mercury’s Wing and Suterusu Project, Beijing, China
* Michael Reichle, DIENS, École normale supérieure, CNRS, PSL University, 75005, Paris, France
* Michael Reichle, Inria, Paris, France
### 摘要
> 我们介绍了一种构建范围证明的新方法。我们的方法是模块化的，并且在标准假设下，使用更少的通信和（更多）比现有最先进的方法更少的计算量，而且无需依赖可信的设置。我们的范围证明可以作为替代原有方案的解决方案，在分布式账本、匿名交易系统等各种协议中广泛应用，并显著减少这些应用中的通信和计算量。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_9](https://doi.org/10.1007/978-3-030-77883-5_9)
## Towards Accountability in CRS Generation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#towards-accountability-in-crs-generation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#towards-accountability-in-crs-generation)**
### 作者
* Prabhanjan Ananth, University of California, Santa Barbara, Santa Barbara, USA
* Gilad Asharov, Bar-Ilan University, Ramat Gan, Israel
* Hila Dahari, Weizmann Institute, Rehovot, Israel
* Vipul Goyal, NTT Research and Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 众所周知，有些密码学基元无法在没有共同参考字符串（CRS）的情况下实现。这些基元包括NP的非交互式零知识证明，或者在少于四轮中逆恶意安全计算。这些基元的安全性在很大程度上依赖于这样一个假设：生成CRS的可信任机构不会滥用在CRS生成中使用的随机性。然而，我们认为没有绝对可信的机构，每个机构都必须对其信任负责才能基于良好基础。事实上，一个恶意机构可以通过给定针对其生成的CRS执行的协议的传输记录，例如恢复诚实方的私有输入。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_10](https://doi.org/10.1007/978-3-030-77883-5_10)
## Robust Property-Preserving Hash Functions for Hamming Distance and More.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#robust-property-preserving-hash-functions-for-hamming-distance-and-more) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#robust-property-preserving-hash-functions-for-hamming-distance-and-more)**
### 作者
* Nils Fleischhacker, Ruhr University Bochum, Bochum, Germany
* Mark Simkin, Aarhus University, Aarhus, Denmark
### 摘要
> 强健的属性保持哈希（PPH）函数是由Boyle、Lavigne和Vaikuntanathan在《ITCS 2019》中引入的，它将大输入x和y压缩为短摘要h(x)和h(y)，并以一种允许在只访问相应哈希值的情况下计算谓词P在x和y上的方式。与局部敏感哈希函数相比，强健的PPH函数在只见h后，保证能正确地评估h(x)和h(y)上的谓词，即使x和y是对抗性选择的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_11](https://doi.org/10.1007/978-3-030-77883-5_11)
## Alibi: A Flaw in Cuckoo-Hashing Based Hierarchical ORAM Schemes and a Solution.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#alibi-a-flaw-in-cuckoo-hashing-based-hierarchical-oram-schemes-and-a-solution) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#alibi-a-flaw-in-cuckoo-hashing-based-hierarchical-oram-schemes-and-a-solution)**
### 作者
* Brett Hemenway Falk, University of Pennsylvania, Philadelphia, USA
* Daniel Noble, University of Pennsylvania, Philadelphia, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
### 摘要
> 曾经有一个散列表

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_12](https://doi.org/10.1007/978-3-030-77883-5_12)
## Structured Encryption and Dynamic Leakage Suppression.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#structured-encryption-and-dynamic-leakage-suppression) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#structured-encryption-and-dynamic-leakage-suppression)**
### 作者
* Marilyn George, Brown University, Providence, USA
* Seny Kamara, Brown University, Providence, USA
* Tarik Moataz, Aroki Systems, Providence, USA
### 摘要
> 结构化加密（STE）方案以一种特定的方式加密数据结构，使其可以进行私密查询。STE的特殊情况包括可搜索对称加密（SSE）和图加密。与所有亚线性加密搜索解决方案一样，STE方案泄露了针对持久对手的查询信息。为了解决这个问题，最近进行了关于泄露抑制的一系列工作，重点研究缓解STE方案泄露的技术。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_13](https://doi.org/10.1007/978-3-030-77883-5_13)
## Dynamic Ad Hoc Clock Synchronization.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#dynamic-ad-hoc-clock-synchronization) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#dynamic-ad-hoc-clock-synchronization)**
### 作者
* Christian Badertscher, IOHK, Hong Kong, China
* Peter Gaži, IOHK, Hong Kong, China
* Aggelos Kiayias, IOHK, Hong Kong, China
* Alexander Russell, IOHK, Hong Kong, China
* Aggelos Kiayias, University of Edinburgh, Edinburgh, UK
* Alexander Russell, University of Connecticut, Mansfield, USA
* Vassilis Zikas, Purdue University, West Lafayette, USA
### 摘要
> 时钟同步通过利用较弱的同步假设（即具有大致相同速度的本地时钟）使各方能够建立一个共同的全局时间概念。尽管在容错分布式计算文献中对该问题进行了深入研究，但现有解决方案无法适用于参与人员未知的环境，例如 Beimel 等人的临时自适应模型 [EUROCRYPT 17]，或者参与人员在时间上动态变化的环境，例如 Garay 等人的波动/休眠/动态可用性模型 [CRYPTO 17]，Pass 和 Shi [ASIACRYPT 17]，以及 Badertscher 等人的模型 [CCS 18]。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_14](https://doi.org/10.1007/978-3-030-77883-5_14)
## TARDIS: A Foundation of Time-Lock Puzzles in UC.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#tardis-a-foundation-of-time-lock-puzzles-in-uc) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#tardis-a-foundation-of-time-lock-puzzles-in-uc)**
### 作者
* Carsten Baum, Aarhus University, Aarhus, Denmark
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
* Sabine Oechsner, Aarhus University, Aarhus, Denmark
* Bernardo David, IT University of Copenhagen, Copenhagen, Denmark
* Rafael Dowsley, Monash University, Melbourne, Australia
### 摘要
> 时间锁谜题（Time-lock puzzles，TLP）等基于时间的原语在实际协议中得到了广泛的应用，部分原因是由于对区块链领域的兴趣急剧增加，人们认为TLP及其相关原语能够解决许多问题。然而，由于这些原语在组合使用时，安全性声明往往不牢固或者明显错误。其中一个原因是TLP本身并不是UC安全的，而且在UC模型中对时间进行建模和使用是很棘手的。另一方面，仅指定预期任务的独立概念，如非可塑TLPs，可能对给定的任务来说很困难或者不可能实现。而且，即使在可能的情况下，独立的安全原语在实践中安全地应用其行为在组合下也不明确。理想的解决方案将是在UC框架中对TLP进行建模，以实现简单的模块化证明。在本文中，我们提供了使用时间锁谜题和相关定时原语在UC模型中证明可组合安全性的基础。我们基于随机预言机构建了UC安全的TLPs，并且证明了使用随机预言机的必要性。为了证明安全性，我们提供了一种简单且抽象的方式来推导UC协议中的时间。最后，我们通过构建有趣的应用程序来展示这个基础的实用性，例如UC安全的双方计算与输出独立中止。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_15](https://doi.org/10.1007/978-3-030-77883-5_15)
## On the Power of Multiple Anonymous Messages: Frequency Estimation and Selection in the Shuffle Model of Differential Privacy.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#on-the-power-of-multiple-anonymous-messages-frequency-estimation-and-selection-in-the-shuffle-model-of-differential-privacy) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#on-the-power-of-multiple-anonymous-messages-frequency-estimation-and-selection-in-the-shuffle-model-of-differential-privacy)**
### 作者
* Badih Ghazi, Google Research, Mountain View, USA
* Ravi Kumar, Google Research, Mountain View, USA
* Ameya Velingker, Google Research, Mountain View, USA
* Noah Golowich, MIT EECS, Cambridge, USA
* Rasmus Pagh, BARC and University of Copenhagen, Copenhagen, Denmark
### 摘要
> 众所周知，通用的安全多方计算原则上可以应用于利用分布式数据实现与协调者模型匹配的差分隐私机制。本文研究了在较弱的基本原语之上运行的协议的能力：一种称为洗牌模型的非交互式匿名通道，在差分隐私文献中有所了解。这种协议可通过使用已知的密码学方法以可扩展的方式来实施，并已知能够实现具有比本地模型中可能性更小的错误的非交互式差分隐私协议。我们研究了洗牌模型中的基本计数问题，并获得了关于错误和通信的严格的多对数因子界限。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_16](https://doi.org/10.1007/978-3-030-77883-5_16)
## Non-Interactive Anonymous Router.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#non-interactive-anonymous-router) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#non-interactive-anonymous-router)**
### 作者
* Elaine Shi, Carnegie Mellon University, Pittsburgh, USA
* Ke Wu, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 匿名路由是最基本且被广泛研究了数十年的在线隐私问题之一。几乎所有已知的匿名路由方法（例如mix-net、DC-net和其他方法）都依赖于多个服务器或路由器进行某种互动协议；在阈值模型中，只要有一个或多个服务器/路由器行为诚实，匿名性即可得到保证。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_17](https://doi.org/10.1007/978-3-030-77883-5_17)
## Bifurcated Signatures: Folding the Accountability vs. Anonymity Dilemma into a Single Private Signing Scheme.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#bifurcated-signatures-folding-the-accountability-vs-anonymity-dilemma-into-a-single-private-signing-scheme) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#bifurcated-signatures-folding-the-accountability-vs-anonymity-dilemma-into-a-single-private-signing-scheme)**
### 作者
* Benoît Libert, CNRS, Laboratoire LIP, Lyon, France
* Benoît Libert, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Khoa Nguyen, Nanyang Technological University, SPMS, Singapore, Singapore
* Thomas Peters, FNRS and UCLouvain (ICTEAM), Louvain-la-Neuve, Belgium
* Moti Yung, Google and Columbia University, New York City, USA
### 摘要
> 在现代密码学的发展过程中，通常会开发出一些在某些重要方面相互矛盾的加密方案，以实现不同的目标。因此，我们必须要选择一个既可以实现第一个目标但不能实现第二个目标的方案，或者反过来选择一个能实现第二个目标但不能实现第一个目标的方案。这样就产生了两种相互竞争的方案。在用户隐私的基本领域，尤其是在匿名（多次使用的证书）签名方面，匿名性和可追溯性之间存在这种相互矛盾。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_18](https://doi.org/10.1007/978-3-030-77883-5_18)
## Abuse Resistant Law Enforcement Access Systems.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#abuse-resistant-law-enforcement-access-systems) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#abuse-resistant-law-enforcement-access-systems)**
### 作者
* Matthew Green, Johns Hopkins University, Baltimore, USA
* Gijs Van Laer, Johns Hopkins University, Baltimore, USA
* Gabriel Kaptchuk, Boston University, Boston, USA
### 摘要
> 不断增加的端到端加密通信服务的部署引发了技术公司和执法机构之间关于对加密通信的合法访问是否需要的争论。不幸的是，目前解决这个问题的现有方法存在严重的技术风险，如操作者滥用和转移托管密钥材料的可能性。在这项工作中，我们研究了构建减轻未经授权监视可能性的执法访问系统的问题。我们首先定义了一个满足滥用抵抗执法访问系统（ARLEAS）所需特性的集合，并阐述了每个特性的理由。然后，我们将这些定义形式化为通用组成性（UC）框架，并提出了两个实现这一定义的主要构造。第一种构造使得有前瞻性访问成为可能，只允许在发出和激活授权后进行监视。第二个更强大的构造允许对发出授权之前的通信进行回溯式访问。为了说明构建后一种协议的技术挑战，我们最后研究了实现这些系统所需的最小假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_19](https://doi.org/10.1007/978-3-030-77883-5_19)
