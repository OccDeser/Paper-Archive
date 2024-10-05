# Eurocrypt[2020-2]
## Separate Your Domains: NIST PQC KEMs, Oracle Cloning and Read-Only Indifferentiability.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#separate-your-domains-nist-pqc-kems-oracle-cloning-and-read-only-indifferentiability) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#separate-your-domains-nist-pqc-kems-oracle-cloning-and-read-only-indifferentiability)**
### 作者
* Mihir Bellare, Department of Computer Science and Engineering, University of California San Diego, San Diego, USA
* Hannah Davis, Department of Computer Science and Engineering, University of California San Diego, San Diego, USA
* Felix Günther, Department of Computer Science, ETH Zürich, Zürich, Switzerland
### 摘要
> 在随机预言模型中，为了方便和普遍，方案通常假设可以访问多个随机预言器（RO），而由实现来完成构建单个RO的任务，我们称之为“预言克隆”。本文的第一部分是对NIST后量子密码标准化过程中KEM提交的预言克隆的案例研究。我们对一些提交中由于预言克隆错误导致的密钥恢复攻击进行了分析，并发现其他使用预言克隆方法的提交的有效性存在不确定性。在此基础上，本文的第二部分对预言克隆进行了理论研究。我们给出了“预言克隆方法”的定义，并阐述了这种方法“有效”的含义，在我们称之为只读差分不可区分性的框架中，这是一种简单的经典差分不可区分性的变体，不仅适用于单阶段游戏，而且适用于多阶段游戏。我们形式化了领域分离，并具体研究了许多预言克隆方法，包括常见的领域分离方法，通过给出一些普遍结果来证明（验证某些类别的方法具有只读差分不可区分性）。我们不仅能够验证许多未被攻破的NIST后量子密码标准化中使用的预言克隆方法，还能够指定和验证可能超出该范畴的预言克隆方法的实用性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_1](https://doi.org/10.1007/978-3-030-45724-2_1)
## On the Memory-Tightness of Hashed ElGamal.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#on-the-memory-tightness-of-hashed-elgamal) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#on-the-memory-tightness-of-hashed-elgamal)**
### 作者
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### 摘要
> 我们研究了公钥密码学中安全约简的内存紧密性，特别关注了Hashed ElGamal。我们证明了，任何直线（即不需要倒带）黑盒约简需要的内存随着对手的查询次数线性增长，只要这种约简在处理基础群时是一般性的。这对于证明Auerbach等人（CRYPTO 2017）的猜想有所进展，并且也是对具体密码方案内存紧密性的首个下界证明（而不是跨安全概念的泛化约简）。我们的证明依赖于一般群模型中的压缩论证。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_2](https://doi.org/10.1007/978-3-030-45724-2_2)
## Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#blind-schnorr-signatures-and-signed-elgamal-encryption-in-the-algebraic-group-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#blind-schnorr-signatures-and-signed-elgamal-encryption-in-the-algebraic-group-model)**
### 作者
* Georg Fuchsbauer, TU Wien, Vienna, Austria
* Antoine Plouviez, Inria, Paris, France
* Antoine Plouviez, ENS, CNRS, PSL, Paris, France
* Yannick Seurin, ANSSI, Paris, France
### 摘要
> Schnorr盲签名协议允许盲发Schnorr签名，这是最常用的签名之一。尽管它在实践中有重要意义，但其安全分析仍然不尽人意。目前已知的唯一安全证明是非正式的，基于通用群模型（GGM）和随机预言机模型（ROM），假设“ROS问题”很困难。对于（Schnorr-）签名ElGamal加密，情况也类似，它是ElGamal的一种简单的CCA2安全变体。
> 
> 我们在代数群模型（AGM）中分析了这些方案的安全性，这是一种理想化模型，比GGM更接近标准模型。首先，我们在AGM+ROM中从离散对数假设（DL）证明了Schnorr签名的严格安全性。然后，我们给出了在AGM+ROM中对盲Schnorr签名的严格证明，假设“一个更多的离散对数问题”和ROS的困难程度。
> 
> 由于可以使用Wagner算法在亚指数时间内解决ROS问题，所以我们提出了签名协议的简单修改，不改变签名本身。因此，与已经使用Schnorr签名的系统（如区块链协议）兼容。我们证明了我们修改后方案的安全性依赖于与ROS相关且更难的问题的困难程度。最后，我们再次在AGM+ROM中给出了从带限制相对简单离散对数（DDH）到签名ElGamal加密的CCA2安全性以及从带哈希的签名式ElGamal密钥封装到离散对数（DL）的严格约束。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_3](https://doi.org/10.1007/978-3-030-45724-2_3)
## On Instantiating the Algebraic Group Model from Falsifiable Assumptions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#on-instantiating-the-algebraic-group-model-from-falsifiable-assumptions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#on-instantiating-the-algebraic-group-model-from-falsifiable-assumptions)**
### 作者
* Thomas Agrikola, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Dennis Hofheinz, ETH Zürich, Zürich, Switzerland
* Julia Kastner, ETH Zürich, Zürich, Switzerland
### 摘要
> 我们提供了一个代数群模型（AGM）的标准模型实现（松弛），[Fuchsbauer，Kiltz，Loss，CRYPTO 2018]。具体来说，我们展示了使用我们的群的每个算法都是代数的，并且因此“必须知道”其输出群元素的表示形式以及其输入群元素的表示形式。在这里，“必须知道”指的是适当的抽取器可以高效地提取这样的表示形式。我们强调，我们的实现仅依赖于标准模型中可证伪的假设，特别是不使用任何知识假设。
> 
> 因此，我们的群允许在可证伪的假设下将AGM中获得的许多结果传输到标准模型中。例如，我们展示了在我们的群中，几个类似于Diffie-Hellman的假设（包括计算Diffie-Hellman）与离散对数假设等价。此外，我们展示了我们的组允许在随机预言机模型下紧密地保证Schnorr签名方案的安全性。
> 
> 我们的构建依赖于不可区分混淆，并因此不应将其视为实际群本身。但是，我们的结果表明，AGM是一种现实的计算模型（因为它可以在标准模型中实例化），并且AGM中获得的结果也可以在标准模型群中获得。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_4](https://doi.org/10.1007/978-3-030-45724-2_4)
## Resource-Restricted Cryptography: Revisiting MPC Bounds in the Proof-of-Work Era.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#resource-restricted-cryptography-revisiting-mpc-bounds-in-the-proof-of-work-era) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#resource-restricted-cryptography-revisiting-mpc-bounds-in-the-proof-of-work-era)**
### 作者
* Juan Garay, Department of Computer Science and Engineering, Texas A&M University, College Station, USA
* Aggelos Kiayias, School of Informatics, University of Edinburgh & IOHK, Edinburgh, UK
* Vassilis Zikas, School of Informatics, University of Edinburgh & IOHK, Edinburgh, UK
* Rafail M. Ostrovsky, Department of Computer Science and Department of Mathematics, UCLA, Los Angeles, USA
* Giorgos Panagiotakos, School of Informatics, University of Edinburgh, Edinburgh, UK
### 摘要
> 传统上，在没有私有相关性随机性设置（例如PKI）的情况下，关于同步拜占庭一致性（BA）和安全多方计算（MPC）的界限表明，协议可容忍不诚实的参与方个数不超过总参与方个数的三分之一。基于工作量证明（PoW）区块链的“中本聪式”共识的引入，提出了一种不同的BA方法，即显示出即使大多数参与方损坏，只要计算资源的大多都在诚实的手中，仍然可以容忍。对某种资源存在诚实多数的假设也被扩展到其他资源，如权益、空间等，以上资源上的区块链实现了中本聪风格的共识，违反了以参与方损坏数量衡量的界限t<n/3。以上情况引发了一个问题，即这种看似不匹配是由于不同的目标和模型，还是资源限制范式可以普遍用于规避n/3的下界。
> 
> 在这项工作中，我们研究了这个问题，并且正式证明了上述范式如何改变了密码学定义的规则。首先，我们通过UC框架，将资源限制范式所提供的核心属性抽象为功能封装器，应用于标准的点对点网络，限制了（对手）发送新消息的能力。我们表明，这样的封装网络可以使用资源限制范式实现，具体而言，使用PoW和计算能力的诚实多数，传统的t<n/3不可能结果在参与方具有这样的网络访问权限时将失败。我们的构建依赖于新鲜的通用参考字符串（CRS）模型，即它假设CRS与对手同时对参与方可用。
> 
> 然后，我们提出了BA和MPC的构建，假设有权访问这样的网络，容忍t<n/2的参与方损坏，而无需假设私有相关性随机性设置。我们还展示了如何通过利用随机预言机的能力来消除CRS的新鲜性假设。我们的MPC协议实现了标准的MPC安全性概念，其中参与方可能有专门的角色，这如同Oblivious Transfer协议的情况。这与基于PoW的现有解决方案不同，后者将角色与伪名关联起来，但没有将这些伪名与实际参与方关联起来。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_5](https://doi.org/10.1007/978-3-030-45724-2_5)
## Efficient Constructions for Almost-Everywhere Secure Computation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#efficient-constructions-for-almost-everywhere-secure-computation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#efficient-constructions-for-almost-everywhere-secure-computation)**
### 作者
* Siddhartha Jayanti, Massachusetts Institute of Technology (CSAIL MIT), Cambridge, USA
* Srinivasan Raghuraman, Massachusetts Institute of Technology (CSAIL MIT), Cambridge, USA
* Nikhil Vyas, Massachusetts Institute of Technology (CSAIL MIT), Cambridge, USA
### 摘要
> 我们研究了几乎可靠的消息传输问题，这是设计稀疏网络上高效且安全的多方计算（MPC）协议中的一个关键组成部分。我们的目标是设计低度网络，即使小部分节点经历拜占庭故障并任意偏离指定协议，也能让大部分诚实节点能够可靠地进行通信。
> 
> 在本文中，我们实现了一个\(\log \)度的网络，并提出了一个多对数工作复杂度的协议，从而改进了Chandran等人（ICALP 2010）的最新成果，他们需要一个多对数度的网络并且具有线性的工作复杂度。此外，我们还实现了以下成果：
> 
> Dwork等人（STOC 1986）蝴蝶网络的工作效率版本。
> 
> 对于Ben-or和Ron（Information Processing Letters 1996）在随机故障模型下的最新协议进行了改进，无论是在工作效率还是恢复力方面。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_6](https://doi.org/10.1007/978-3-030-45724-2_6)
## The Price of Active Security in Cryptographic Protocols.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#the-price-of-active-security-in-cryptographic-protocols) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#the-price-of-active-security-in-cryptographic-protocols)**
### 作者
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Muthuramakrishnan Venkitasubramaniam, University of Rochester, Rochester, USA
* Mor Weiss, IDC Herzliya, Herzliya, Israel
### 摘要
> 我们在不诚实多数的情况下，针对任意数量的参与方构建了第一个能主动安全的多方计算（MPC）协议，对于任意域\(\mathbb{F}\)，与“被动-GMW”协议（Goldreich、Micali和Wigderson，STOC ‘87）相比，通信开销是常数倍。我们的协议依赖于布尔设置中的被动实现的匿名传输（OT）和算术设置中的匿名线性函数评估（OLE）。以前，这样的协议只能在足够大的域（Genkin等人，STOC ‘14）或恒定数量的参与方（Ishai等人，CRYPTO ‘08）中发现。
> 
> 在概念上，我们的协议是通过从分布式乘法功能\(\mathcal{F}_{\scriptscriptstyle \mathrm{MULT}}\)的被动安全协议到通用功能的主动安全协议进行新编译器获得的。大致上，\(\mathcal{F}_{\scriptscriptstyle \mathrm{MULT}}\)通过一个线性秘密共享方案\(\mathcal{S}\)进行参数化，它接受两个秘密的\(\mathcal{S}\)个分享，并返回它们乘积的\(\mathcal{S}\)个分享。
> 
> 我们证明了我们的编译对足够大的域而言具有具体的效率，当安全计算自然电路时开销为2。我们的编译器还有两个额外的好处：（1）它可以依赖于\(\mathcal{F}_{\scriptscriptstyle \mathrm{MULT}}\)的任何被动实现，除了基于OT（布尔）和OLE（算术）的标准实现外，还允许我们依赖于基于门限密码系统（Cramer等人，Eurocrypt ‘01）的实现；（2）它可以依赖于弱于被动（即不完美/泄露）的实现，在某些参数范围内，可以获得开销小于2的主动安全协议。
> 
> 通过将这个编译器实例化为\(\mathcal{F}_{\scriptscriptstyle \mathrm{MULT}}\)的“诚实多数”实现，我们得到了第一个在最佳被动协议（Damgård和Nielsen，CRYPTO ‘07）上具有最优损坏阈值的布尔电路的诚实多数协议，通信开销是常数倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_7](https://doi.org/10.1007/978-3-030-45724-2_7)
## Succinct Non-interactive Secure Computation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#succinct-non-interactive-secure-computation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#succinct-non-interactive-secure-computation)**
### 作者
* Andrew Morgan, Cornell University, Ithaca, USA
* Rafael Pass, Cornell Tech, New York City, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research, New York City, USA
### 摘要
> 我们提出了第一种针对简洁非交互安全二方计算（SNISC）的恶意安全协议：每个参与方仅发送一条消息，其长度（基本上）与要计算的函数的运行时间无关。该协议不需要任何可信设置，满足超多项式时间模拟安全（SPS），并基于学习与错误（LWE）假设的（次指数级）安全性。我们不依赖SNARKs或“知识的指数”类型假设。
> 
> 由于该协议是非交互式的，所以需要放宽到SPS安全性，因为标准的多项式时间模拟是不可能的；但是，我们主要协议的一个轻微变体在CRS模型中可以得到具有多项式时间模拟的SNISC。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_8](https://doi.org/10.1007/978-3-030-45724-2_8)
## Finding Hash Collisions with Quantum Computers by Using Differential Trails with Smaller Probability than Birthday Bound.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#finding-hash-collisions-with-quantum-computers-by-using-differential-trails-with-smaller-probability-than-birthday-bound) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#finding-hash-collisions-with-quantum-computers-by-using-differential-trails-with-smaller-probability-than-birthday-bound)**
### 作者
* Akinori Hosoyamada, NTT Secure Platform Laboratories, Tokyo, Japan
* Yu Sasaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Akinori Hosoyamada, Nagoya University, Nagoya, Japan
### 摘要
> 在这篇论文中，我们重点研究了具体哈希函数上的专用量子碰撞攻击，该领域目前还没有得到很多关注。在经典设置中，找到一个n位哈希函数碰撞的通用复杂度是\(O(2^{n/2})\)，因此基于微分密码分析的经典碰撞攻击（比如回弹攻击）会构建概率大于\(2^{-n/2}\)的微分路径。按照同样的类比，通用的量子算法（比如BHT算法）可以以\(O(2^{n/3})\)的复杂度找到碰撞。使用量子算法，概率为p的微分路径可以生成复杂度为\(p^{-1/2}\)的满足微分路径的消息对。因此，在量子设置中，一些经典设置下无法利用的概率高达\(2^{-2n/3}\)的微分路径可以被利用来进行碰撞攻击。特别是，被攻击的轮数可能会增加。在这篇论文中，我们对两个国际哈希函数标准进行攻击：AES-MMO和Whirlpool。对于AES-MMO，我们提出了一个概率为\(2^{-80}\)的7轮微分路径，并使用量子版本的回弹攻击找到了碰撞，而在经典设置中只能攻击6轮。对于Whirlpool，我们基于经典回弹区分器上的一条6轮微分路径发起了碰撞攻击，复杂度超过了生日攻击界限。这比对5轮的最佳经典攻击提升了1。我们还表明这些路径在我们的方法中是最优的。我们的结果有两个重要含义。首先，似乎存在这样一种共识：经典安全的哈希函数对抗量子对手也依然安全。事实上，NIST后量子竞赛中的几个二轮候选方案使用现有的哈希函数（比如SHA-3）作为量子安全型函数。我们的结果否定了这种共识。其次，我们的观察表明，微分路径搜索不应该止步于概率\(2^{-n/2}\)，而应该考虑到\(2^{-2n/3}\)。因此，值得重新审视以前的微分路径搜索活动。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_9](https://doi.org/10.1007/978-3-030-45724-2_9)
## Implementing Grover Oracles for Quantum Key Search on AES and LowMC.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#implementing-grover-oracles-for-quantum-key-search-on-aes-and-lowmc) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#implementing-grover-oracles-for-quantum-key-search-on-aes-and-lowmc)**
### 作者
* Samuel Jaques, Department of Materials, University of Oxford, Oxford, UK
* Michael Naehrig, Microsoft Research, Redmond, WA, USA
* Martin Roetteler, Microsoft Quantum, Redmond, WA, USA
* Fernando Virdia, Information Security Group, Royal Holloway, University of London, Egham, UK
### 摘要
> Grover的搜索算法通过搜索与少量明文-密文对匹配的密钥来对块密码进行量子攻击。这种攻击使用 \(O(\sqrt{N})\) 次密码调用来搜索大小为 N 的密钥空间。之前在AES特定案例中的工作通过分析密码的量子电路得出了完整的门成本，但着重于最小化量子比特数。
> 
> 相反，我们研究了在深度限制下的量子密钥搜索攻击的成本，并引入了降低Oracle深度的技术，即使需要更多的量子比特。以AES和LowMC为例，我们设计了这些块密码的量子电路。我们的电路在门计数和深度乘宽度成本模型中都能降低整体攻击成本。在NIST后量子密码标准化过程中，安全等级是基于量子密钥搜索对AES的具体成本来定义的。我们提供了每个等级的新的较低成本估计，因此我们的工作对后量子密码的安全评估具有直接影响。
> 
> 作为这项工作的一部分，我们发布了AES-128、-192、-256的完整Grover Oracle的Q#实现，以及用于Picnic中三个LowMC实例的单元测试和代码，其中包括重现我们的量子资源估计的代码。据我们所知，这些是第一个进行完整实现和自动资源估计的两个实例。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_10](https://doi.org/10.1007/978-3-030-45724-2_10)
## Optimal Merging in Quantum k-xor and k-xor-sum Algorithms.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#optimal-merging-in-quantum-k-xor-and-k-xor-sum-algorithms) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#optimal-merging-in-quantum-k-xor-and-k-xor-sum-algorithms)**
### 作者
* María Naya-Plasencia, Inria, Paris, France
* André Schrottenloher, Inria, Paris, France
### 摘要
> k-xor或广义生日问题旨在找到在给定k个比特字符串列表中，它们中的一个k元组通过异或运算等于0。如果列表是无界的，最佳的经典（指数级）时间复杂度已经自Wagner在2002年的CRYPTO论文中被证明。如果列表是有界的（大小相同），且存在唯一解，则Dinur等人（CRYPTO 2012）的解剖算法能够在中间会合法中改善内存使用。
> 
> 在本文中，我们研究了k-xor问题的量子算法。通过使用无界列表和量子访问，我们对Grassi等人（ASIACRYPT 2018）之前的工作进行了改进，适用于几乎所有的k。接下来，我们将研究扩展到任意大小的列表，并且只能使用经典访问。
> 
> 我们定义了一组“合并树”，它们代表了k-xor算法中量子和经典合并的最佳已知策略，并证明我们的方法在其中是最优的。我们的复杂性由一个混合整数线性规划问题确认，该问题计算了给定k-xor问题的最佳策略。我们的算法也适用于考虑模数加法而非位异或的情况。
> 
> 这个框架使我们能够为所有k和列表大小给出新的优化量子k-xor算法。应用包括子集和问题，有限内存的LPN问题和多重加密问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_11](https://doi.org/10.1007/978-3-030-45724-2_11)
## On the Quantum Complexity of the Continuous Hidden Subgroup Problem.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#on-the-quantum-complexity-of-the-continuous-hidden-subgroup-problem) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#on-the-quantum-complexity-of-the-continuous-hidden-subgroup-problem)**
### 作者
* Koen de Boer, Cryptology Group, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Léo Ducas, Cryptology Group, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Cryptology Group, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, The Netherlands
### 摘要
> 隐藏子群问题（HSP）旨在捕获所有易于按照Shor的算法蓝图在量子多项式时间内可解的问题。在各种可交换群上成功解决这些问题，允许有效执行诸如因数分解或找到离散对数之类的数论任务。
> 
> 最新成功的泛化（Eisenträger等人STOC 2014）将寻找完整秩格作为连续向量空间$R^m$的隐藏子群问题考虑在内，即使对于大的维度m也是如此。它解锁了新的密码分析算法（Biasse-Song SODA 2016，Cramer等人EUROCRYPT 2016和2017），特别是在理想格中找到轻微短向量。
> 
> 这种问题的密码分析相关性引发了更精细和定量复杂性分析的问题。随着保持大量量子位的纠缠的物理困难程度的增加，上述算法是否仅需要线性数量的量子位或更多的多项式数量的量子位的关注程度可能不同。
> 
> 这是我们开始研究的问题。我们提出了对（前述HSP算法的变体）进行详细分析，并确定其复杂性作为所有相关参数的函数。我们的模块化分析旨在支持未来针对密码分析感兴趣的案例进行优化。我们建议朝这个方向提出一些想法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_12](https://doi.org/10.1007/978-3-030-45724-2_12)
## Formalizing Data Deletion in the Context of the Right to Be Forgotten.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#formalizing-data-deletion-in-the-context-of-the-right-to-be-forgotten) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#formalizing-data-deletion-in-the-context-of-the-right-to-be-forgotten)**
### 作者
* Sanjam Garg, Department of Electrical Engineering and Computer Sciences, University of California Berkeley, Berkeley, USA
* Prashant Nalini Vasudevan, Department of Electrical Engineering and Computer Sciences, University of California Berkeley, Berkeley, USA
* Shafi Goldwasser, Simons Institute for the Theory of Computing, University of California Berkeley, Berkeley, USA
### 摘要
> 个人有权要求存储其个人数据的机构删除这些数据的权利，即所谓的被遗忘权，在包括欧洲联盟、阿根廷和加利福尼亚在内的世界各地的几个司法辖区中都已得到明确的认可、立法和实施。然而，围绕这项权利的讨论大多只是对其履行的直观概念描述，即这种个人数据的删除意味着什么。
> 
> 本文利用密码学的工具和范例为被遗忘权提供一个形式化的定义框架。具体而言，我们给出了当某个实体收集个人数据并接受删除请求时，可以（或应该）从中期望得到什么样的结果的准确定义。我们的框架涵盖了与数据处理相关的大部分，但不是全部的重要方面。虽然不能将其视为表达当前法律的声明（特别是因为在这方面的法律相当模糊），但我们的工作提供了技术上精确的定义，代表了法律可能合理期望的可能性，并为法律的未来版本明确要求提供了替代方案。
> 
> 最后，为了证明我们的框架和定义的适用性，我们考虑了多种涉及被遗忘权的自然和简单情景。对于每个情景，我们突出了即使在实施提供删除保证的系统的真实尝试中也会出现的问题，并描述了可证满足我们定义的技术解决方案。这些解决方案将各个社区构建的技术方法融合在一起。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_13](https://doi.org/10.1007/978-3-030-45724-2_13)
## OptORAMa: Optimal Oblivious RAM.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#optorama-optimal-oblivious-ram) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#optorama-optimal-oblivious-ram)**
### 作者
* Gilad Asharov, Bar-Ilan University, 52900, Ramat Gan, Israel
* Ilan Komargodski, NTT Research, Palo Alto, CA, 94303, USA
* Wei-Kai Lin, Cornell University, Ithaca, NY, 14850, USA
* Elaine Shi, Cornell University, Ithaca, NY, 14850, USA
* Kartik Nayak, Duke University, Durham, NC, 27708, USA
* Enoch Peserico, Università degli Studi di Padova, Padova, PD, Italy
### 摘要
> 遗忘化随机访问内存(Oblivious RAM, ORAM)最初由Goldreich和Ostrovsky(STOC '87和J. ACM '96)的划时代研究工作引入，是一种用于可证明混淆程序访问模式的技术，使得访问模式不泄漏有关程序秘密输入的任何信息。编译一般程序到遗忘化对应程序，众所周知，需要\(\varOmega(\log N)\)的平摊膨胀，其中N是逻辑内存的大小。这在Goldreich和Ostrovsky的原始ORAM工作中针对统计安全性和某种受限模型(所谓的球和桶模型)已经被证明，并且最近由Larsen和Nielsen(CRYPTO '18)针对计算安全性进行了证明。
> 
> 一个长期存在的未解问题是是否存在与前述对数下界匹配的最优ORAM构造(不进行大型存储字假设，假设CPU寄存器数量恒定)。在本文中，我们解决了这个问题，并提出了第一个具有\(O(\log N)\)平摊膨胀的安全ORAM构造，假设单向函数存在。我们的结果受到了Patel等人(FOCS '18)最近精妙的工作的启发，并在其基础上进行了显著改进，其构造具有\(O(\log N\cdot \log \log N)\)的平摊膨胀，假设单向函数存在。
> 
> 我们独立感兴趣的一个构建块是一种具有线性时间确定性的紧凑遗忘算法: 给定一个包含n个元素且其中一些元素被标记的数组，我们对数组中的元素进行排列，使得所有标记元素都出现在数组前面。我们的O(n)算法改进了以前已知的在O(n\cdot \log n)或O(n\cdot \log \log n)运行时间内的确定性或随机化算法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_14](https://doi.org/10.1007/978-3-030-45724-2_14)
## On the Streaming Indistinguishability of a Random Permutation and a Random Function.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#on-the-streaming-indistinguishability-of-a-random-permutation-and-a-random-function) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#on-the-streaming-indistinguishability-of-a-random-permutation-and-a-random-function)**
### 作者
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
### 摘要
> 对手具有S比特的内存，获取了一系列从集合\(\{1,2,\ldots,N\}\)中均匀抽取的Q个元素，可以有放回或不放回。这相当于使用随机函数或随机排列抽样Q个元素。对手的目标是区分这两种情况。
> 
> 这个问题首次由Jaeger和Tessaro（EUROCRYPT 2019）考虑，他们证明了对手的优势上限为\(\sqrt{Q \cdot S/N}\)。Jaeger和Tessaro将这个界限用作流式切换引理，从而证明了针对几种操作模式（如计数器模式）已知的时间-内存折衷攻击在\(Q \cdot S \approx N\)时是最佳的，除以一个\(O(\log N)\)的因子。然而，该界限的证明假设了一个未经证明的组合猜想。此外，如果\(Q \cdot S \ll N\)，则\(\sqrt{Q \cdot S/N}\)的上边界与已知攻击所得到的\(Q \cdot S/N\)优势之间存在差距。
> 
> 本文证明了在流式区分问题中，对手的优势的严格上界（多项对数因子）为\(O(\log Q \cdot Q \cdot S/N)\)。证明不需要猜想，并且基于一个混合证明，从唯一互不相交通信复杂性问题转化为流式问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_15](https://doi.org/10.1007/978-3-030-45724-2_15)
## He Gives C-Sieves on the CSIDH.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#he-gives-c-sieves-on-the-csidh) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#he-gives-c-sieves-on-the-csidh)**
### 作者
* Chris Peikert, University of Michigan, Ann Arbor, USA
### 摘要
> 最近，Castryck、Lange、Martindale、Panny和Renes提出了CSIDH（发音为“海边”），作为候选的“可交换群作用”的后量子密码学方案。它引起了广大关注和兴趣，部分原因是它可以实现非交互式Diffie-Hellman密钥交换，通信量相对较小。随后，CSIDH还被用作数字签名的基础。
> 
> 在2003-04年，Kuperberg和Regev提出了一种渐进亚指数量级的量子算法来解决“隐藏位移”问题，该问题可以用于从公钥中恢复CSIDH的秘密密钥。2011年底，Kuperberg提出了一种后续的量子算法，称为“聚光筛法”（简称“c-sieve”），它改进了之前的算法，特别是减少了指数级的量子内存使用，并提供了更多的参数选择。尽管最近的研究已经分析了对CSIDH的原始算法（和变种）的具体成本，但以前还没有类似的分析用于c-sieve。
> 
> 本研究填补了这一空白。具体而言，我们将Kuperberg的聚光筛法推广到适用于任意有限循环群，并提供了一些实际效率改进。我们还提供了经典（即非量子）模拟器，并在广泛的参数范围内进行了实验，直到实际的CSIDH-512群秩序，并明确了c-sieve对CSIDH的复杂度。
> 
> 我们的主要结论是，所提议的CSIDH参数在量子安全性方面提供了相对较少的保证，除了对量子评估CSIDH群作用本身（在均匀叠加的超级位置上）的成本之外。例如，CSIDH-512密钥恢复的成本仅为大约2^16次量子评估，使用2^40位量子可访问的经典内存（以及相对较小的其他资源）。这比之前对于Kuperberg原始筛法的变体的估计改进了2^32.5次的评估次数和2^31个量子内存量。
> 
> 在合理的假设下，量子评估的成本不会比最近的“最优情况”分析给出的多。因此，CSIDH-512可以使用远远少于2^64个量子T门破解。这严重无效了其声称的NIST 1级量子安全性，特别是在考虑MAXDEPTH限制的情况下。此外，在类似的假设下，针对更高的NIST安全级别的CSIDH-1024和-1792，即使在MAXDEPTH范围的高端区域，这些实例也无法达到1级的安全性要求。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_16](https://doi.org/10.1007/978-3-030-45724-2_16)
## Quantum Security Analysis of CSIDH.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#quantum-security-analysis-of-csidh) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#quantum-security-analysis-of-csidh)**
### 作者
* Xavier Bonnetain, Sorbonne Université, Collège Doctoral, 75005, Paris, France
* Xavier Bonnetain, Inria, Paris, France
* André Schrottenloher, Inria, Paris, France
### 摘要
> CSIDH是一项基于超奇异椭圆曲线同源性的后量子非交互式密钥交换方案。它在设计上与Couveignes、Rostovtsev和Stolbunov之前的方案相似，但旨在实现效率和安全性之间的改进平衡。在该提议中，作者建议具体的参数以满足一些所需的量子安全级别。这些参数基于利用Childs、Jao和Soukharev的量子亚指数算法从两个椭圆曲线中恢复隐藏同构性的困难程度。该算法结合了两个基本部分：首先，用于在可交换群中恢复隐藏位移的量子算法。第二，在给定曲线的所有同构之间进行叠加计算，该算法称之为黑箱。
> 
> 在本文中，我们对CSIDH进行了全面的安全性分析。我们首先从非渐进成本的角度重新审视了三种用于阿贝尔隐藏位移问题的量子算法，其中权衡了它们的量子和经典复杂性。其次，我们完成了隐藏位移算法中关于黑箱的非渐进研究。我们提供了一个量子过程，使用不到40,000个逻辑量子比特来评估CSIDH-512。
> 
> 这使我们能够展示CSIDH的作者提出的参数不能满足他们预期的量子安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_17](https://doi.org/10.1007/978-3-030-45724-2_17)
## Rational Isogenies from Irrational Endomorphisms.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#rational-isogenies-from-irrational-endomorphisms) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#rational-isogenies-from-irrational-endomorphisms)**
### 作者
* Wouter Castryck, imec-COSIC, KU Leuven, Leuven, Belgium
* Frederik Vercauteren, imec-COSIC, KU Leuven, Leuven, Belgium
* Lorenz Panny, Department of Mathematics and Computer Science, Technische Universiteit Eindhoven, Eindhoven, The Netherlands
### 摘要
> 在本文中，我们介绍了一个多项式时间算法，用于计算在具有共同的\(\mathbb {F}_p\)-自同构环\(\mathcal {O}\)的两个超奇异椭圆曲线之间的连接\(\mathcal {O}\)-理想，给定它们完整自同构环的描述。该算法将CSIDH加密系统的安全性规约到计算超奇异椭圆曲线的自同构环的问题上。在Asiacrypt 2016中出现了一个类似于SIDH的规约，但依赖于完全不同的技术。此外，我们还通过明确地导出到已知基准曲线的路径，展示了使用复乘方法构造的任何超奇异椭圆曲线可以精确定位于超奇异同源图中。该结果禁止将这样的曲线用作进入超奇异同源图的哈希函数的构建基块。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_18](https://doi.org/10.1007/978-3-030-45724-2_18)
## Hardness of LWE on General Entropic Distributions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#hardness-of-lwe-on-general-entropic-distributions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#hardness-of-lwe-on-general-entropic-distributions)**
### 作者
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 学习误差（LWE）问题的困难度已成为密码学领域的基石。在许多应用中，所谓的“LWE秘密”并非均匀采样，而是来自具有一定最小熵的分布。这种变体被称为“熵LWE”，在一些研究中已经得到了探讨，最早由Goldwasser等人（ICS 2010）开始。然而，到目前为止，我们只知道如何证明球内有界情况下熵LWE的困难度。
> 
> 本研究解决了具有任意长秘密的熵LWE的困难度问题，具体如下。我们提出了一种熵界限，保证了任意熵LWE的安全性。这个界限高于球内有界情况所需的界限，但我们证明了这几乎是紧密的。对于高复合模数，我们无条件地证明了其紧密性，对于任意模数，我们使用黑盒不可能性证明了其紧密性。
> 
> 从技术上讲，我们证明了LWE的熵困难度取决于秘密分布本身具有的简单可描述的丢失性质。这只是从该分布中恢复随机样本的概率，给定\(s+e\)，其中e是高斯噪声（即秘密分布作为高斯噪声纠错码的质量）。我们希望这个特性将使得今后更容易推导出熵LWE的结果。我们还使用我们的技术展示了球内有界情况下的新结果，基本上表明在足够强的假设下，甚至多对数熵也足够。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_19](https://doi.org/10.1007/978-3-030-45724-2_19)
## Key-Homomorphic Pseudorandom Functions from LWE with Small Modulus.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#key-homomorphic-pseudorandom-functions-from-lwe-with-small-modulus) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#key-homomorphic-pseudorandom-functions-from-lwe-with-small-modulus)**
### 作者
* Sam Kim, Stanford University, Stanford, USA
### 摘要
> 伪随机函数（PRF）是密码学中的基本对象，在对称密钥密码学中起着核心作用。虽然可以通常从单向函数生成 PRF，但这种黑盒构造通常效率低下，并且与基于特定代数假设的直接 PRF 构造相比，需要更深的电路来评估。从格中，人们可以使用学习有误差（LWE）假设（或其环形变体）直接构造 PRF，使用 Banerjee、Peikert 和 Rosen（Eurocrypt 2012）以及后续的工作的结果。然而，这一系列工作中的所有现有 PRF 都依赖于 LWE 问题的难度，其中关联的模量是安全参数的超多项式。
> 
> 在这项工作中，我们提供了两种新的 LWE 问题的 PRF 构造。在这些构造中，每个构造要么侧重于最小化其评估电路的深度，要么提供密钥同态性，同时依赖于具有多项式模量或几乎多项式模量的 LWE 问题的难度。在此过程中，我们引入了 LWE 问题的一个新变体，称为学习舍入和错误（LWRE）问题。我们证明了对于某些参数设置，LWRE 问题与 LWE 问题一样难。然后，我们展示了 LWRE 问题的难度自然地引出了一个伪随机合成器，可以用于构造一个低深度的 PRF。我们引入用于研究 LWRE 问题的技术，然后可以用这些技术从比较小的模量的 LWE 问题的难度中推导出现有的密钥同态 PRF 的变种的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_20](https://doi.org/10.1007/978-3-030-45724-2_20)
## Integral Matrix Gram Root and Lattice Gaussian Sampling Without Floats.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#integral-matrix-gram-root-and-lattice-gaussian-sampling-without-floats) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#integral-matrix-gram-root-and-lattice-gaussian-sampling-without-floats)**
### 作者
* Léo Ducas, Centrum Wiskunde en Informatica, Amsterdam, The Netherlands
* Steven Galbraith, Mathematics Department, University of Auckland, Auckland, New Zealand
* Thomas Prest, PQShield Ltd, Oxford, UK
* Yang Yu, Univ Rennes, CNRS, IRISA, Rennes, France
### 摘要
> 许多先进的基于格的加密系统需要从高斯分布中采样格点。面对这项任务的其中一个挑战是，所有当前算法在某个时刻都会采用浮点算术（FPA），而这在实践中具有许多缺点：它需要数值稳定性分析、高精度额外存储、惰性/回溯技术以提高效率，而且可能由于弱确定性而完全破坏某些方案。
> 
> 在本文中，我们给出了一种在不使用FPA的情况下实施通用格高斯采样的技术。为此，我们重新审视了Peikert的方法，使用扰动采样。Peikert的方法使用连续的高斯采样和目标协方差矩阵Σ的一些分解AA^T。所提出的分解（例如Cholesky分解）产生一个具有实数（而不是整数）条目的方阵A。我们的想法简而言之，就是用积分分解替换这种分解。虽然如果我们限制A为方阵，通常没有整数解，但我们表明可以通过允许A更宽（例如n×9n）来轻松地找到这种分解。这可以被视为拉格朗日（Lagrange）的四平方定理对矩阵的扩展。此外，我们将我们的积分分解算法调整为环境设置：对于2的幂次循环，我们可以利用环的塔结构以提高复

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_21](https://doi.org/10.1007/978-3-030-45724-2_21)
## TNT: How to Tweak a Block Cipher.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#tnt-how-to-tweak-a-block-cipher) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#tnt-how-to-tweak-a-block-cipher)**
### 作者
* Zhenzhen Bao, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Jian Guo, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Chun Guo, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, China
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Ling Song, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Ling Song, Jinan University, Guangzhou, China
### 摘要
> 在本文中，我们提出了Tweak-aNd-Tweak（简称为TNT）模式，它通过三个独立的分组密码构建了一个可调整的分组密码。TNT通过将未修改的调整值简单地与两个分组密码的内部状态进行异或来处理调整输入。由于其简单性，TNT也可以看作是将分组密码转换为可调整的分组密码的一种方式，通过将分组密码分成三个块，并仅在两个切割点添加调整值。在三个块独立安全的n位SPRP假设下，已经证明TNT具有超越生日界限\(2^{2n/3}\)的安全性。它显然对软件和硬件实现的开销都带来最小可能的影响。为了证明这一点，我们提出了一种名为TNT-AES的实例，其中底层分组密码为6轮AES。除了TNT模式本身所具有的固有安全性边界和与调整值无关的重新加密特性外，TNT-AES的性能与通过模块化方法设计的所有现有TBC都是可比较的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_22](https://doi.org/10.1007/978-3-030-45724-2_22)
## On a Generalization of Substitution-Permutation Networks: The HADES Design Strategy.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#on-a-generalization-of-substitution-permutation-networks-the-hades-design-strategy) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#on-a-generalization-of-substitution-permutation-networks-the-hades-design-strategy)**
### 作者
* Lorenzo Grassi, IAIK, Graz University of Technology, Graz, Austria
* Reinhard Lüftenegger, IAIK, Graz University of Technology, Graz, Austria
* Christian Rechberger, IAIK, Graz University of Technology, Graz, Austria
* Markus Schofnegger, IAIK, Graz University of Technology, Graz, Austria
* Dragos Rotaru, University of Bristol, Bristol, UK
* Lorenzo Grassi, Know-Center, TU Graz, Graz, Austria
* Dragos Rotaru, imec-Cosic, Department of Electrical Engineering, KU Leuven, Leuven, Belgium
### 摘要
> 键控和非键控密码置换通常迭代简单的回合函数。自从1990年代中期以来，替换-置换网络（SPN）是一种流行的方法。在这些回合函数的设计中，一个新的方向是将置换（S-Box）层从完整的层减少到部分层，在所有回合中均匀分布。LowMC和Zorro是这种方法的例子。
> 
> 设计空间中的一个相关自由是允许高度非均匀的S-Box分布。然而，选择彼此非常不同的回合很少被实现，因为这使得安全分析和实施更加困难。
> 
> 我们开发了Hades设计策略和相应的分析框架，尽管增加了复杂性，但仍然可以对很多攻击类别提供安全论证，与之前较简单的SPN类似。该框架建立在宽化路径设计策略的基础上，并且此外还可以提供针对代数攻击的安全论证，在使用代数简单的S-Box时更为重要。
> 
> 随后，通过具体实例和基准测试将其实际应用于一个普遍受益于较少数量的S-Box并展示我们所支持的设计选择多样性的使用案例：一个候选密码系统，本地工作于“GF(p)”对象的情况下，用于使用安全多方计算（MPC）对分布式数据库进行数据传输的安全性保障。与目前最快的设计MiMC相比，我们观察到在线带宽需求和吞吐量显著改进，并且同时减少了预处理工作量，同时具有可比较的在线延迟。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_23](https://doi.org/10.1007/978-3-030-45724-2_23)
## Lightweight Authenticated Encryption Mode Suitable for Threshold Implementation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#lightweight-authenticated-encryption-mode-suitable-for-threshold-implementation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#lightweight-authenticated-encryption-mode-suitable-for-threshold-implementation)**
### 作者
* Yusuke Naito, Mitsubishi Electric Corporation, Kamakura, Kanagawa, Japan
* Yu Sasaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takeshi Sugawara, The University of Electro-Communications, Tokyo, Japan
### 摘要
> 本文提出了可调整的分组密码（TBC）模式**PFB_Plus**和**PFB_ω**，它们在阈值实现（TI）中效率高。设t是目标函数的代数度数，例如线性（相应地，非线性）函数的t=1（resp. t>1）。d阶TI将内部状态编码为dt+1份共享。因此，面积大小与份额数量成比例增加。这意味着，因为TBC需要s位块以确保s位安全性，例如PFB和Romulus，而BC需要2s位块，所以基于TBC的模式可以比基于块密码（BC）的模式更小在TI中。但是，即使使用这些基于TBC的模式，我们能够达到的最小值是3 s位状态的2份共享，并且第一阶TI（d=1）。
> 
> 我们的第一个设计**PFB_Plus**旨在突破TI中3s位状态的限制。底层TBC的块大小为s/2位，TBC的输出线性扩展到s位。这个扩展状态只需要第一阶TI中的2份共享，从而使总状态大小为2.5s位。我们还对**PFB_Plus**进行了严格的安全性证明。我们的第二个设计**PFB_ω**进一步增加了参数ω：安全级别s与底层TBC块大小的比率。我们证明了在底层TBC和用于更新状态的参数的某些假设下，**PFB_ω**的安全性。接下来，我们展示了128位安全性的**PFB_Plus**的具体实例。它需要具有64位块、128位密钥和128位调整的TBC，而没有现有的TBC能够支持它。我们通过扩展SKINNY设计了一种新的TBC，并提供了基本的安全评估。最后，我们给出了**PFB_Plus**在第一阶TI中的硬件基准，以表明**PFB_Plus**的TI比PFB小超过一千个门并且是具有128位安全性的方案中最小的模式。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_24](https://doi.org/10.1007/978-3-030-45724-2_24)
## PSI from PaXoS: Fast, Malicious Private Set Intersection.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#psi-from-paxos-fast-malicious-private-set-intersection) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#psi-from-paxos-fast-malicious-private-set-intersection)**
### 作者
* Benny Pinkas, Bar-Ilan University, Ramat Gan, Israel
* Mike Rosulek, Oregon State University, Corvallis, USA
* Ni Trieu, Oregon State University, Corvallis, USA
* Avishay Yanai, VMware Research, Herzliya, Israel
### 摘要
> 我们提出了一个两方私有集合交集（PSI）协议，它能够对抗恶意参与者的攻击，并且几乎与Kolesnikov等人（CCS 2016）所知的最快的半诚实PSI协议一样快速。
> 
> 我们的协议基于一种新的两方PSI方法，可以实现对抗恶意或半诚实对手的安全性。该协议的独特之处在于半诚实和恶意版本之间唯一的区别是通过线性纠错码的不同参数进行实例化。它还是第一个能够在OT混合模型下实现线性通信和对恶意对手的安全性的PSI协议（假设非可编程的随机预言机）。
> 
> 目前最先进的半诚实PSI协议利用了布谷鸟哈希算法，但是使用布谷鸟哈希算法来实现恶意安全性一直是一个挑战。我们的协议是第一个使用布谷鸟哈希算法来实现恶意安全的PSI协议。我们通过一种新的数据结构，称为字符串的探测与异或（PaXoS），来实现这一点，这可能是一个独立感兴趣的问题。这种抽象捕捉了之前数据结构的重要属性，尤其是零碎的布隆过滤器。虽然用零碎的布隆过滤器进行编码比原始数据大了\(\varOmega (\lambda )\)倍，但我们描述了一种基于布谷鸟哈希算法的显著改进的\(\mathsf{PaXoS}\)，它在其他相关效率指标上并不比差。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_25](https://doi.org/10.1007/978-3-030-45724-2_25)
## Two-Round Oblivious Transfer from CDH or LPN.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#two-round-oblivious-transfer-from-cdh-or-lpn) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#two-round-oblivious-transfer-from-cdh-or-lpn)**
### 作者
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Sanjam Garg, UC Berkeley, Berkeley, USA
* Mohammad Hajiabadi, UC Berkeley, Berkeley, USA
* Daniel Masny, VISA Research, Palo Alto, USA
* Daniel Wichs, Northeastern University, Boston, USA
### 摘要
> 我们展示了一种构建恶意安全的两轮无意义传输（OT）的新通用方法。具体来说，我们提供了一个通用序列转换，将我们称之为基础OT的非常基本的两轮OT概念升级为UC安全的OT。然后，我们给出了在计算Diffie-Hellman（CDH）假设或学习带噪音的奇偶校验（LPN）假设下的基础OT的简单构造方式，从而得到这些假设下首次构造出的恶意（UC安全的）两轮OT。由于两轮OT对于恶意设置中的两轮2方和多方计算来说是完备的，我们也在这些假设下实现了后者的首个构造。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_26](https://doi.org/10.1007/978-3-030-45724-2_26)
## Private Aggregation from Fewer Anonymous Messages.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#private-aggregation-from-fewer-anonymous-messages) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#private-aggregation-from-fewer-anonymous-messages)**
### 作者
* Badih Ghazi, Google Research, Mountain View, CA, 94043, USA
* Pasin Manurangsi, Google Research, Mountain View, CA, 94043, USA
* Rasmus Pagh, Google Research, Mountain View, CA, 94043, USA
* Ameya Velingker, Google Research, Mountain View, CA, 94043, USA
* Rasmus Pagh, IT University of Copenhagen, Copenhagen, Denmark
### 摘要
> 考虑以下设置：n个参与方分别获得有限域\(\mathbb {F}_q\)中的元素 \(x_i\)，目标是以安全的方式并尽可能少地进行通信来计算和 \(\sum _i x_i\)。我们在Ishai等人的匿名模型（FOCS 2006）中研究了该问题，在该模型中，每个参与方可以在不安全的通道上广播匿名消息。
> 
> 我们对Ishai等人的一轮“分割和混合”协议进行了新的分析。为了实现相同的安全参数，我们的分析将所需的消息数量降低了 \(\varTheta (\log n)\) 的乘法因子。
> 
> 我们还证明了关于消息数量与域大小、参与方数量和安全参数的依赖关系基本上是紧密的下界。
> 
> 利用Balle等人（2019）的简化方法，我们改进了Ishai等人的协议的分析，得到了在同一模型中的一个\(\left( \varepsilon , \delta \right) \)差分隐私聚合协议，其中对于任意常数\(\varepsilon > 0\) 和任意 \(\delta = \frac{1}{\text {poly}(n)}\)，仅产生恒定的误差，并且每个参与方仅需要发送恒定数量的消息。以前，这样的协议只适用于每个参与方的 \(\varOmega (\log n)\) 条消息。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_27](https://doi.org/10.1007/978-3-030-45724-2_27)
## Broadcast-Optimal Two-Round MPC.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#broadcast-optimal-two-round-mpc) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#broadcast-optimal-two-round-mpc)**
### 作者
* Ran Cohen, Northeastern University, Boston, USA
* Juan Garay, Texas A&M University, College Station, USA
* Vassilis Zikas, School of Informatics, University of Edinburgh & IOHK, Edinburgh, UK
### 摘要
> 密码学界为了减少安全多方计算（MPC）的循环复杂度，最近进行了大量努力，从而得出了在最小假设下的最佳两轮协议。然而，大多数提出的解决方案都在每轮中使用广播通道，并且目前还不清楚是否可以以保留轮次的方式替换广播通道为标准的点对点通信，并且替换后对安全性会有什么代价。
> 
> 在这项工作中，我们完整地描述了在容忍任意多个主动错误的情况下，广播轮次和可达安全级别之间的权衡。具体来说，我们考虑了对恶意安全MPC协议的三个标准安全级别（即可识别安全、一致安全和选择性中止安全）与广播和点对点轮次的所有可能组合。对于每个概念和广播与点对点轮次的每个组合，我们要么提供了一个紧致的可行性结果，要么提供了一个不可行性结果。我们的可行性结果是在CRS模型中假设了两轮OT的情况下成立的，而我们的不可能性结果是在给定任意相关随机性的情况下成立的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_28](https://doi.org/10.1007/978-3-030-45724-2_28)
