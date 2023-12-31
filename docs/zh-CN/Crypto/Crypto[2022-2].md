# Crypto[2022-2]
## Universally Composable End-to-End Secure Messaging.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#universally-composable-end-to-end-secure-messaging) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#universally-composable-end-to-end-secure-messaging)**
### 作者
* Ran Canetti, Boston University, Boston, USA
* Palak Jain, Boston University, Boston, USA
* Marika Swanberg, Boston University, Boston, USA
* Mayank Varia, Boston University, Boston, USA
### 摘要
> 我们建立了一个在UC框架内对Signal端到端消息协议进行建模和分析。特别是：
> 
> 我们制定了一个理想的功能，涵盖了端到端的安全消息传递，在PKI和不受信任的服务器的环境中，对抗对网络有完全控制权的对手，并且可以在任何时候自适应地短暂地损害参与者并获取他们的全部内部状态。特别是我们的分析涵盖了Signal的前向保密性和安全恢复属性，以及它们被破坏的条件。
> 
> 我们对Signal架构的主要组件（PKI和长期密钥，连续密钥交换或“非对称棘轮”骨干，时期级对称棘轮，认证加密）进行建模，作为单独的理想功能分别实现和分析，然后使用UC和全局状态UC定理进行组合。
> 
> 我们展示了如何使用标准密码原语在最小的困难假设下实现代表这些组件的理想功能。
> 
> 我们的建模引入了额外的创新，使得可以在不考虑基础通信介质的情况下讨论Signal的安全性，以及共享状态的动态生成模块的安全组合。UC框架的基本模块化特性，以及它的各个单独组件在密码应用中的使用，都将有助于实现Signal作为整体和其各个组件的使用。
> 
> 我们建模的另外两个特性是完全自适应损坏的处理，以及最小程度地使用随机预言抽象。特别是，我们展示了如何在纯模型中实现连续的密钥交换，同时保持对自适应损坏的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_1](https://doi.org/10.1007/978-3-031-15979-4_1)
## On the Insider Security of MLS.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#on-the-insider-security-of-mls) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#on-the-insider-security-of-mls)**
### 作者
* Joël Alwen, AWS Wickr, New York, USA
* Marta Mularczyk, AWS Wickr, New York, USA
* Daniel Jost, New York University, New York, USA
### 摘要
> 消息层安全（MLS）协议是由IETF开发的端到端（E2E）安全组消息的开放标准，准备部署到消费者、行业和政府。它旨在在可能的情况下为长期会话中的消息提供端到端的隐私和真实性，尽管恶意内部人员可以随时适应PKI，并积极偏离协议，泄漏诚实方的状态，并完全控制网络。MLS协议的核心（从中它基本上继承了所有的效率和安全性属性）是连续组密钥协定（CGKA）协议。它通过允许组成员在每次更改组状态后（例如，有人加入/离开组）就同意一个新的独立对称密钥，提供了异步的端到端组管理。
> 
> 在这项工作中，我们在MLD（第12草案）的内部安全性方面取得了进展。在理论层面上，我们克服了几个微妙之处，制定了CGKA（或组消息）的内部安全性的第一个概念。接下来，我们隔离MLS的核心组件，获得一个我们称为内部安全树密钥协定（ITK）的CGKA协议。最后，我们对ITK进行了严格的安全性证明。特别是，这项工作还开启了对内部安全CGKA和组消息协议的研究。在这一过程中，我们对MLS提出了三种新的（非常实际的）攻击，并相应地进行了修复。（这些修复现已被纳入标准。）我们还描述了一种针对类似MLS的CGKA协议的第二种攻击，该攻击在以往考虑的所有安全概念下都被证明是安全的（包括那些专门设计用于分析MLS的概念）。这些攻击突显了即使在可处理性方面简化安全概念的风险。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_2](https://doi.org/10.1007/978-3-031-15979-4_2)
## Lattice-Based Zero-Knowledge Proofs and Applications: Shorter, Simpler, and More General.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#lattice-based-zero-knowledge-proofs-and-applications-shorter-simpler-and-more-general) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#lattice-based-zero-knowledge-proofs-and-applications-shorter-simpler-and-more-general)**
### 作者
* Vadim Lyubashevsky, IBM Research Europe, Ruschlikon, Switzerland
* Ngoc Khanh Nguyen, IBM Research Europe, Ruschlikon, Switzerland
* Maxime Plançon, IBM Research Europe, Ruschlikon, Switzerland
* Ngoc Khanh Nguyen, ETH Zurich, Zurich, Switzerland
* Maxime Plançon, ETH Zurich, Zurich, Switzerland
### 摘要
> 我们提出了一种基于模块-SIS和模块-LWE问题难度的、可行性更高的协议，用于证明满足 \(A\vec s=\vec t\bmod q\) 的短向量 \(\vec s\) 的知识。目前构造这样一个证明的最有效技术是通过证明 \(\vec s\) 的 \(\ell _\infty \) 范数很小。它创建了对多项式向量 \(\textbf{m}\) 的承诺，其中 CRT 系数是 \(\vec s\) 的系数，并证明 (1) \(A\cdot \textsf{CRT}(\textbf{m})=\vec t\bmod \,q\) 以及 (2) 在我们希望证明 \(\ell _\infty \) 范数最多为1 的情况下，多项式乘积 \((\textbf{m}- \boldsymbol{1})\cdot \textbf{m}\cdot (\textbf{m}+\boldsymbol{1})\) 等于0。虽然这些方案已经相当实用，但使用 CRT 嵌入和仅适用于证明 \(\ell _\infty \) 范数，有点影响了该方法的效率。
> 
> 在这项工作中，我们展示了一种更直接、更高效的方式来证明 \(\vec s\) 的系数具有较小的 \(\ell _2\) 范数，而不需要与 \(\ell _\infty \) 范数等价性或任何转换为 CRT 表示。我们观察到，向量 \(\vec r\) 和 \(\vec s\) 之间的内积可以被表示为一对多项式的乘积（或乘积之和），这些多项式是关于 \(\vec r\) 和 \(\vec s\) 的函数。因此，通过使用一个多项式乘积证明系统，并隐藏除一个系数外的所有系数，我们能够证明对两个向量（或一个向量与自身）的内积模 q 的知识。使用一个廉价的“近似范围证明”，我们可以将证明从 \(\mathbb {Z}_q\) 提升到 \(\mathbb {Z}\)。我们用于证明短范数的协议适用于所有（有趣的）多项式环，但对于像 \(\mathbb {Z}[X]/(X^n+1)\) 这样的环来说尤其高效，其中将向量内积和多项式乘积相关联的函数恰好是一个“好”的自同构。
> 
> 这个新的证明系统可以以黑盒方式插入各种基于格的隐私保护原语的构造中。作为示例，我们实例化了一个可验证加密方案和一个群签名方案，它们比以前的最佳解决方案紧凑了两倍以上。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_3](https://doi.org/10.1007/978-3-031-15979-4_3)
## Lattice-Based SNARKs: Publicly Verifiable, Preprocessing, and Recursively Composable - (Extended Abstract).
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#lattice-based-snarks-publicly-verifiable-preprocessing-and-recursively-composable-extended-abstract) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#lattice-based-snarks-publicly-verifiable-preprocessing-and-recursively-composable-extended-abstract)**
### 作者
* Martin R. Albrecht, Royal Holloway, University of London, Egham, UK
* Valerio Cini, AIT Austrian Institute of Technology, Seibersdorf, Austria
* Russell W. F. Lai, Aalto University, Espoo, Finland
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
* Sri AravindaKrishnan Thyagarajan, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 简明非交互式知识论证（SNARK）允许证明者产生一个简短的证据，证实某一NP声明的真实性。在过去的十年里，有大量的研究致力于研究对量子攻击者安全的候选构造。遗憾的是，至今未有已知的候选构造能够匹配基于双线性配对的（量子前）构造在效率和期望特性上的优点。
> 
> 在这项工作中，我们在这个问题上取得了进展。我们提出了首个满足许多理想特性的基于格的SNARK：它（i）暗示了后量子安全，（ii）可公开验证，（iii）具有对数级时间的验证者，并且（iv）具有纯粹的代数结构，使其易于进行有效的递归组合。我们的构造源自我们开发的一般技术工具包，该工具包用于将基于配对的方案转化为基于格的方案。我们SNARK的核心是一个新的基于格的向量承诺（VC）方案，支持对常数度多项式映射的打开，这是对构造支持超线性功能的VC方案的开放问题的一个候选解决方案。然而，我们的构造的安全性是基于一个新的基于格的计算假设家族，该家族自然地推广了

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_4](https://doi.org/10.1007/978-3-031-15979-4_4)
## Practical Sublinear Proofs for R1CS from Lattices.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#practical-sublinear-proofs-for-r1cs-from-lattices) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#practical-sublinear-proofs-for-r1cs-from-lattices)**
### 作者
* Ngoc Khanh Nguyen, IBM Research Europe, Rüschlikon, Switzerland
* Gregor Seiler, IBM Research Europe, Rüschlikon, Switzerland
* Ngoc Khanh Nguyen, ETH Zurich, Zürich, Switzerland
### 摘要
> 我们提出了一种基于格子的实用的次线性大小的秩-1约束满足（R1CS）零知识证明系统。证明的大小与证人大小的平方根渐进地进行调整。具体来说，对于R1CS的大实例，尺寸变得比Ligero (ACM CCS 2017)小2-3倍，后者也展现出平方根的缩放。核心部分是施瓦茨-齐佩尔引理的交互式变体，这可能对独立的研究有所启发。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_5](https://doi.org/10.1007/978-3-031-15979-4_5)
## On the Impossibility of Key Agreements from Quantum Random Oracles.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#on-the-impossibility-of-key-agreements-from-quantum-random-oracles) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#on-the-impossibility-of-key-agreements-from-quantum-random-oracles)**
### 作者
* Per Austrin, KTH Royal Institute of Technology, Stockholm, Sweden
* Hao Chung, Carnegie Mellon University, Pittsburgh, USA
* Kai-Min Chung, Academia Sinica, Taipei, Taiwan
* Shiuan Fu, Academia Sinica, Taipei, Taiwan
* Yao-Ting Lin, Academia Sinica, Taipei, Taiwan
* Mohammad Mahmoody, University of Virginia, Charlottesville, USA
### 摘要
> 我们研究了由Hosoyamada和Yamakawa于2018年首次公开提出的以下问题。当具有量子计算能力和经典通信的参与方A、B是否可以仅依靠一个随机预言（可在量子叠加中进行查询）来达成对于窃听者而言是私密的密钥协商？
> 
> 我们在上述问题上首次取得了进展，并证明了以下结论。
> 
> 当只有参与方A是经典的，而另一方参与方B是量子的，只要他们总共查询d次预言并以概率1达成密钥协商，那么总是存在一种方式可以通过查询O(d^2)次经典预言来破解密钥协商。
> 
> 当两个参与方都可以对随机预言进行量子查询时，我们提出了一个自然的猜想，如果猜想成立，将导致通过对随机预言进行{\text {poly}}(d)次经典查询的攻击。粗略地说，我们的猜想是，任意两个在最多具有\(\delta =1/{\text {poly}}(d)\)的布尔超立方上具有最大程度为d的实系数多项式的乘积不为零。然后，我们证明了对于指数级小的影响，我们的猜想成立，这导致了一种（无条件的）经典\(2^{O(md)}\)次查询攻击适用于任何这样的密钥协商协议，其中m是预言的输出长度。
> 
> 由于我们的攻击是经典的，我们进一步探讨了在量子随机预言模型中是否总是可能找到具有不完全完备性的密钥协商的经典攻击。我们通过展示，如果关于使用高效查询经典算法模拟高效查询量子算法的民间传说“模拟猜想”（由Aaronson和Ambainis于2009年首次正式提出）是错误的，那么实际上在量子随机预言模型中存在一种安全的密钥协商，无法经典破解。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_6](https://doi.org/10.1007/978-3-031-15979-4_6)
## Succinct Classical Verification of Quantum Computation.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#succinct-classical-verification-of-quantum-computation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#succinct-classical-verification-of-quantum-computation)**
### 作者
* James Bartusek, UC Berkeley, Berkeley, USA
* Fermi Ma, UC Berkeley, Berkeley, USA
* Yael Tauman Kalai, Microsoft Research and MIT, Cambridge, USA
* Alex Lombardi, MIT, Cambridge, USA
* Vinod Vaikuntanathan, MIT, Cambridge, USA
* Lisa Yang, MIT, Cambridge, USA
* Fermi Ma, Simons Institute, Berkeley, USA
* Giulio Malavolta, MPI-SP, Bochum, Germany
* Thomas Vidick, Caltech, Pasadena, USA
### 摘要
> 我们构建了一个古典可验证的简洁交互式论证，用于量子计算（BQP），其通信复杂度和验证程序运行时间对BQP计算的运行时间是对数多项式级别的（并且与安全参数的多项式有关）。我们的协议在假设不可区分性混淆（iO）和误差学习（LWE）的后量子安全的情况下是安全的。这是草图模型中量子计算的第一个简明论证；先前的研究（Chia-Chung-Yamakawa, TCC ’20）需要长的共同参考字符串，并且对哈希函数的非黑盒使用模型为随机预言。
> 
> 在技术层面上，我们重新审视了构建古典可验证的量子计算的框架（Mahadev, FOCS ’18）。我们为Mahadev的协议提供了一个独立感兴趣的安全证明，这个证明是自包含的、模块化的。我们的证明容易地推广到验证者的第一个消息（其中包含许多公钥）被压缩的情况。接下来，我们明确了压缩公钥的概念；我们将这个对象视为受限制/可编程伪随机函数的泛化，基于不可区分性混淆进行实例化。
> 
> 最后，我们使用一个（足够可组合的）NP知识的简洁论证将上述协议编译成一个完全简洁的论证。利用我们的框架，我们实现了几个额外的结果，包括
> 
> 给定证人的多个副本的QMA的简洁论证，
> 
> 在量子随机预言者模型中的BQP（或QMA）的简洁非交互式论证，并且
> 
> 在后量子LWE的情况下，BQP（或QMA）的简洁批处理论证（不包括iO）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_7](https://doi.org/10.1007/978-3-031-15979-4_7)
## On the Feasibility of Unclonable Encryption, and More.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#on-the-feasibility-of-unclonable-encryption-and-more) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#on-the-feasibility-of-unclonable-encryption-and-more)**
### 作者
* Prabhanjan Ananth, University of California, Santa Barbara, CA, USA
* Fatih Kaleoglu, University of California, Santa Barbara, CA, USA
* Xingjian Li, Tsinghua University, Beijing, China
* Qipeng Liu, Simons Institute for the Theory of Computing, Berkeley, CA, USA
* Mark Zhandry, NTT Research, Palo Alto, CA, USA
* Mark Zhandry, Princeton University, Princeton, NJ, USA
### 摘要
> 不可复制的加密首次由Broadbent和Lord（TQC'20）引入，是一种一次性加密方案，具有以下安全保证：任何非本地攻击者\((\mathcal {A},\mathcal {B},\mathcal {C})\)无法同时区分两个等长消息的加密。这个概念被称为不可克隆的不可区分性。先前的研究关注的是实现一个较弱的不可复制的加密概念，其中我们要求任何非本地攻击者\((\mathcal {A},\mathcal {B},\mathcal {C})\)不能同时恢复整个消息m。看似无害，但理解满足不可克隆的不可区分性的加密方案的可行性（即使对于1比特消息）一直是困难的。
> 
> 我们在建立不可克隆的加密的可行性方面取得了进展。
> 
> 我们展示了在量子随机预言模型中，可以无条件满足不可克隆的不可区分性的加密方案的存在。
> 
> 为了理解预言的必要性，我们呈现了一个消极的结果，指出大类的加密方案不能满足不可克隆的不可区分性。
> 
> 最后，我们还建立了另一个密切相关的原始问题的可行性：对于单比特输出点函数的拷贝保护。先前的研究只确定了多比特输出点函数的拷贝保护的可行性，或者实现了单比特输出点函数的常数安全错误。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_8](https://doi.org/10.1007/978-3-031-15979-4_8)
## Shorter Hash-and-Sign Lattice-Based Signatures.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#shorter-hash-and-sign-lattice-based-signatures) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#shorter-hash-and-sign-lattice-based-signatures)**
### 作者
* Thomas Espitau, NTT Corporation, Tokyo, Japan
* Mehdi Tibouchi, NTT Corporation, Tokyo, Japan
* Alexandre Wallet, IRISA, Univ Rennes 1, Inria, Bretagne-Atlantique Center, Rennes, France
* Yang Yu, BNRist, Tsinghua University, Beijing, China
* Yang Yu, National Financial Cryptography Research Center, Beijing, China
### 摘要
> 基于格的数字签名方案遵循Gentry、Peikert和Vaikuntanathan（GPV）的哈希和签名设计范例，具有相当高的效率水平，特别是在使用结构紧凑陷门实例化时。尤其是美国国家标准与技术研究院（NIST）的后量子时代竞争赛候选方案Falcon，在签名和验证方面都非常快速且紧凑：NIST指出它在第2轮数字签名候选方案中具有最小的带宽（以公钥和签名的组合大小进行度量）。然而，例如，Falcon-512在速度方面与ECDSA-384相比较有优势，但它的签名要大十多倍。对于存储大量签名或需要签名适应指定数据包大小的应用来说，这可能是一个关键的限制因素。
> 
> 在本文中，我们探索了几种方法来进一步改进基于哈希和签名的格签名的大小，尤其是在类似Falcon和其最新变种Mitaka的NTRU格上实例化的签名。具体而言，尽管GPV签名通常是根据某些球形离散高斯分布对格点进行采样获得的，我们表明根据适当选择的椭圆形离散高斯分布进行采样可能是有益的：这是因为只有采样高斯向量的一半实际上被输出作为签名，而另一半在验证过程中被恢复。缩短实际出现在签名中的一半向量可以在基本上不损失安全性的情况下减小签名大小（在一定范围的参数内）。同样，我们表明与计算签名的模数q相比，降低模数q可以几乎“免费”地改善签名大小和验证密钥大小；这对于像Falcon和Mitaka这样几乎不使用基于NTT的乘法（而是依赖于超越FFT）的构造尤其如此。最后，我们表明可以使用适当的编码理论技术以更紧凑的方式表示签名中的高斯向量，进一步改善签名大小，提高7到14%。总之，我们设法将Falcon等签名的大小减小了30-40%，只需损失4-6比特的核-SVP安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_9](https://doi.org/10.1007/978-3-031-15979-4_9)
## MuSig-L: Lattice-Based Multi-signature with Single-Round Online Phase.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#musig-l-lattice-based-multi-signature-with-single-round-online-phase) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#musig-l-lattice-based-multi-signature-with-single-round-online-phase)**
### 作者
* Cecilia Boschini, Technion, Haifa, Israel
* Cecilia Boschini, Reichman University, Herzliya, Israel
* Akira Takahashi, Aarhus University, Aarhus, Denmark
* Mehdi Tibouchi, NTT Corporation, Tokyo, Japan
### 摘要
> 多重签名是一种允许一组签名者联合在同一消息上生成单个签名的协议。近年来，已经在离散对数设置中提出了一些实用的多重签名方案，例如MuSig2 (CRYPTO'21)和DWMS (CRYPTO'21)。构建一个多重签名方案的主要技术挑战是实现一组几个期望的属性，如（1）在明文公钥（PPK）模型中的安全性，（2）并发安全性，（3）低在线回合复杂度和（4）密钥聚合。但是，之前的基于格的后量子Schnorr多重签名方案无法满足这些特性。
> 
> 本文介绍了MuSig-L，这是一个基于格的多重签名方案，首次同时实现了这些设计目标。与Damgård等人( PKC'21)最近的高效提案不同，该提案必须依赖于基于格的陷门承诺，我们在协议中不需要任何附加原语，同时能够从标准模- SIS和LWE的假设证明安全性。因此，我们方案的输出签名看起来更接近于通常的Fiat

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_10](https://doi.org/10.1007/978-3-031-15979-4_10)
## A New Framework for More Efficient Round-Optimal Lattice-Based (Partially) Blind Signature via Trapdoor Sampling.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#a-new-framework-for-more-efficient-round-optimal-lattice-based-partially-blind-signature-via-trapdoor-sampling) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#a-new-framework-for-more-efficient-round-optimal-lattice-based-partially-blind-signature-via-trapdoor-sampling)**
### 作者
* Rafael del Pino, PQShield SAS, Paris, France
* Shuichi Katsumata, AIST, Tokyo, Japan
* Shuichi Katsumata, PQShield Ltd., Oxford, UK
### 摘要
> 盲签名是由Chaum (CRYPTO’82)提出的，它是签名者和用户之间的交互协议，在这种协议中，用户可以在不透露待签名消息的情况下获得签名。最近，Hauck等人 (EUROCRYPT’20)观察到，按照Rükert (ASIACRYPT’10)原始盲签名的蓝图进行的所有高效基于格的盲签名都存在缺陷的安全性证明。这使得我们所知的所有基于格的盲签名都至少具有以下两个缺点之一：启发式安全性；1MB或更大的签名大小；仅支持有限的多项式签名，或者基于非标准假设。
> 
> 在这项工作中，我们构建了第一个轮次最优（即两轮）的基于格的盲签名，签名大小约为100KB，支持无界的多项式签名，并在标准假设下具有可证明的安全性。即使我们允许非标准假设和更多轮次，我们的方法仍能提供最短的签名大小，同时支持无界的多项式签名。我们的工作的主要思想是重新审视Fischlin (CRYPTO’06)的通用盲签名构造，并使用针对格子的技术优化承诺-然后-公开证明。我们的盲签名也是第一个在量子随机预言机模型下具有形式化安全性证明的构造。最后，我们的盲签名自然扩展到部分盲签名，其中用户和签名者可以在消息中包含预先商定的公共字符串。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_11](https://doi.org/10.1007/978-3-031-15979-4_11)
## Ofelimos: Combinatorial Optimization via Proof-of-Useful-Work - A Provably Secure Blockchain Protocol.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#ofelimos-combinatorial-optimization-via-proof-of-useful-work-a-provably-secure-blockchain-protocol) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#ofelimos-combinatorial-optimization-via-proof-of-useful-work-a-provably-secure-blockchain-protocol)**
### 作者
* Matthias Fitzi, IOHK, Singapore, Singapore
* Aggelos Kiayias, IOHK, Singapore, Singapore
* Giorgos Panagiotakos, IOHK, Singapore, Singapore
* Alexander Russell, IOHK, Singapore, Singapore
* Aggelos Kiayias, University of Edinburgh, Edinburgh, UK
* Alexander Russell, University of Connecticut, Storrs, USA
### 摘要
> 最小化比特币区块链和相关协议的能源成本和碳足迹是加密货币领域中最广泛的开放性问题之一。用纳卡莫托的最长链协议中的工作证明（PoW）原语替代有用工作证明（PoUW）一直被长期理论化为在许多方面的理想解决方案，但直到今天，这个概念仍然缺乏令人信服的安全实现。
> 
> 在这项工作中，我们提出了Ofelimos，一种新颖的基于PoUW的区块链协议，其共识机制同时实现了分散的优化问题求解器。我们的协议以一种新颖的局部搜索算法为基础，我们将其称为双并行局部搜索（DPLS），这个算法特别适用于作为我们区块链协议的PoUW组件实现。我们对我们的协议进行了全面的安全分析，并提供了反映系统实用性的度量标准。DPLS可以用于实现诸如WalkSAT之类的流行局部搜索算法，这些算法用于真实世界的组合优化任务。通过这种方式，我们的工作为安全地将区块链系统用作各种需要公开可验证解决方案的困难优化问题的通用优化引擎铺平了道路。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_12](https://doi.org/10.1007/978-3-031-15979-4_12)
## Practical Statistically-Sound Proofs of Exponentiation in Any Group.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#practical-statistically-sound-proofs-of-exponentiation-in-any-group) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#practical-statistically-sound-proofs-of-exponentiation-in-any-group)**
### 作者
* Charlotte Hoffmann, Institute of Science and Technology Austria, Klosterneuburg, Austria
* Krzysztof Pietrzak, Institute of Science and Technology Austria, Klosterneuburg, Austria
* Pavel Hubáček, Faculty of Mathematics and Physics, Charles University, Prague, Czech Republic
* Chethan Kamath, Tel Aviv University, Tel Aviv, Israel
* Karen Klein, ETH Zurich, Zurich, Switzerland
### 摘要
> 在一个未知秩序的群\(\mathbb{G}\)中，指数运算（PoE）的证明允许证明者说服验证者一个元组\((x,q,T,y)\in \mathbb{G} \times \mathbb{N} \times \mathbb{N} \times \mathbb{G}\)满足\(x^{q^T}=y\)。这个基本构造最近已经在可验证延迟函数和简洁知识证明的构建中找到了令人兴奋的应用。目前最实用的PoE只能在计算假设下实现正确性，即它们是证明（Wesolowski，密码学杂志2020年），或者在没有任何小子群的群中实现正确性（Pietrzak，ITCS 2019年）。在未知秩序的一般群中唯一的统计正确的PoE是由Block等人提出的（CRYPTO 2021年），它可以看作是对Pietrzak的PoE的复杂并行重复：为了获得\(\lambda\)比特的安全性，比如\(\lambda =80\)，所需的重复次数（因此通信量的增加）与\(\lambda\)一样大。在这项工作中，我们提出了一种适用于指数q是所有小于某个界限B的质数的乘积的统计正确的PoE。我们证明，在这种情况下，只需运行\(\lambda / \log (B)\)个Pietrzak的PoE的并行实例就足够了，与Block等人相比，这降低了具体的证明大小一个数量级。此外，我们还展示了在已知应用中，PoE被用作构建块时，这种结构化指数是可行的。最后，我们还讨论了我们的PoE的批处理，证明了许多证明（对于相同的\(\mathbb{G}\)和q但不同的x和T）可以通过仅添加单个元素到每个附加语句的证明来进行批处理。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_13](https://doi.org/10.1007/978-3-031-15979-4_13)
## Formalizing Delayed Adaptive Corruptions and the Security of Flooding Networks.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#formalizing-delayed-adaptive-corruptions-and-the-security-of-flooding-networks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#formalizing-delayed-adaptive-corruptions-and-the-security-of-flooding-networks)**
### 作者
* Christian Matt, Concordium, Zurich, Switzerland
* Jesper Buus Nielsen, Concordium Blockchain Research Center, Aarhus University, Aarhus, Denmark
* Søren Eller Thomsen, Concordium Blockchain Research Center, Aarhus University, Aarhus, Denmark
### 摘要
> 许多分散系统依赖于泛洪协议进行消息传播。在这种协议中，消息的发送者将其发送给一组随机选择的对等方。这些对等方再将消息发送给他们随机选择的对等方，直到每个网络参与者都收到了消息。在这种协议中，如果对手能够轻易腐蚀发送方的所有对等方，从而防止消息被传递，这种类型的协议显然会失败。然而，泛洪协议通常用于旨在具有密码安全性的协议中，尤其是在区块链协议中。虽然可能会退回到静态腐蚀，但这提供的安全保障不尽人意，特别是在应该运行一段时间的区块链设置中。为了在这种情况下能够提供有意义的安全保障，我们为我们在通用可组合性（UC）框架中所称的\(\delta \)-延迟对手给出了精确的语义。这样的对手可以自适应地腐蚀参与方，但从对手决定腐蚀参与者到成功接管参与者的时间有一个\(\delta \)的延迟。在这个模型中，我们正式证明了一种直观的结果，即当\(\delta \)至少为从一个对等方发送消息到另一个对等方再重新发送消息的时间加上接收者重新发送消息的时间时，泛洪协议对\(\delta \)-延迟对手是安全的。为此，我们展示了如何将具有\(\delta \)-延迟对手的自适应设置转化为具有Erdős-Rényi图的静态实验。利用已建立的Erdős-Rényi图的理论，我们为传播功能的洪水泛滥提供了不同邻域大小的上界。更具体地说，我们证明了以下安全参数\(\kappa \)、最大延迟不超过\(\varDelta \)的点对点通道，以及总共n个参与方，具有足够延迟的对手可以腐蚀任何常数部分的参与方：如果所有参与方平均发送给\(\varOmega (\kappa )\)的参与方，则我们可以实现具有最大延迟\(\mathcal {O}\bigl (\varDelta \cdot \log (n) \bigr )\)的洪水泛滥功能；如果所有参与方平均发送给\(\varOmega \bigl ( \sqrt{\kappa n} \bigr )\)的参与方，我们可以实现具有最大延迟\(\mathcal {O}(\varDelta )\)的洪水泛滥功能。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_14](https://doi.org/10.1007/978-3-031-15979-4_14)
## Batch Arguments for sfNP and More from Standard Bilinear Group Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#batch-arguments-for-sfnp-and-more-from-standard-bilinear-group-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#batch-arguments-for-sfnp-and-more-from-standard-bilinear-group-assumptions)**
### 作者
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* David J. Wu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
### 摘要
> 非交互式批处理参数用于\(\textsf{NP}\)提供了一种分摊成本的方式，可以跨多个实例进行\(\textsf{NP}\)验证。它们使证明者能够用远小于总见证长度的通信量和远小于逐个检查每个实例所需的验证时间来说服验证者接受多个\(\textsf{NP}\)陈述。
> 
> 在本文中，我们给出了一种从具有双线性映射的群的标准假设（特别地，从复合阶群中的子群决策假设或素阶群中的\(k\)-\(\textsf{Lin}\)假设，其中\(k \ge 1\)）构造非交互式批处理参数的第一个方法。之前，\(\textsf{NP}\)的批处理参数仅为从\(\textsf{LWE}\)或多个假设的组合，或从非标准/不可证伪的假设获得。此外，我们的工作引入了一种新的批验证直接方法，并避免了之前方法中常见的相关性难题哈希函数或概率可检验证明等复杂工具。
> 
> 作为我们主要构造的推论，我们得到了第一个基于RAM程序的公开可验证的非交互式委托方案（即一个具有次线性大小的CRS（RAM程序的运行时间）的简洁非交互式证明（SNARG）），以及第一个基于双线性映射标准假设的聚合签名方案（支持有界聚合）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_15](https://doi.org/10.1007/978-3-031-15979-4_15)
## Breaking Rainbow Takes a Weekend on a Laptop.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#breaking-rainbow-takes-a-weekend-on-a-laptop) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#breaking-rainbow-takes-a-weekend-on-a-laptop)**
### 作者
* Ward Beullens, IBM Research, Zurich, Switzerland
### 摘要
> 这项工作介绍了针对彩虹签名方案的新型密钥恢复攻击，该方案是NIST后量子密码标准化项目中仍在进行的三个入围签名方案之一。新攻击在所有提交给NIST的参数集上优于先前已知的攻击，并使得针对SL 1参数的密钥恢复成为可能。具体而言，对于第二轮提交的SL 1参数的彩虹公钥，我们的攻击能够在标准笔记本电脑上平均计算时间为53小时（一个周末）后返回相应的秘密密钥。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_16](https://doi.org/10.1007/978-3-031-15979-4_16)
## Some Easy Instances of Ideal-SVP and Implications on the Partial Vandermonde Knapsack Problem.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#some-easy-instances-of-ideal-svp-and-implications-on-the-partial-vandermonde-knapsack-problem) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#some-easy-instances-of-ideal-svp-and-implications-on-the-partial-vandermonde-knapsack-problem)**
### 作者
* Katharina Boudgoust, Aarhus University, Aarhus, Denmark
* Erell Gachon, Univ. Bordeaux, CNRS, INRIA, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
* Alice Pellet-Mary, Univ. Bordeaux, CNRS, INRIA, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
### 摘要
> 在这篇文章中，我们概括了潘等人（Eurocrypt'21）和波特等人（ArXiv'21）的工作，并提供了一个简单的条件，根据该条件，理想格定义了最短矢量问题的一个简单实例。换句话说，我们表明自同构越多地稳定理想，就越容易在其中找到一个短矢量。这一观察已经针对高斯域中的素数理想进行了，我们将其推广到任何数域的任何理想（其素因子不分裂）。
> 
> 然后，我们通过展示部分范德蒙德背包问题的特定实例（也称为部分傅里叶恢复问题）可以在经典多项式时间内解决，为这一结果提供了一个密码学应用。作为概念验证，我们实现了我们的攻击，并成功解决了文献中提出的具体参数设置的这些特定实例。对于随机实例，我们有非零概率将格维数减半。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_17](https://doi.org/10.1007/978-3-031-15979-4_17)
## On Codes and Learning with Errors over Function Fields.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#on-codes-and-learning-with-errors-over-function-fields) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#on-codes-and-learning-with-errors-over-function-fields)**
### 作者
* Maxime Bombar, LIX, CNRS UMR 7161, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Alain Couvreur, LIX, CNRS UMR 7161, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Thomas Debris-Alazard, LIX, CNRS UMR 7161, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Maxime Bombar, Inria Saclay, Palaiseau, France
* Alain Couvreur, Inria Saclay, Palaiseau, France
* Thomas Debris-Alazard, Inria Saclay, Palaiseau, France
### 摘要
> 寻找线性码的结构化解码问题的搜索到决策的减缩一直是一个长期存在的开放问题。在基于格的设置中，使用了数域：多项式-LWE，环-LWE，模块-LWE等等。我们提出了一个\(\textsf{LWE}\)问题的函数域版本。这个新的框架导致了对结构化码，例如准循环码的另一种观点，加强了基于格和基于码的密码学之间的联系。特别地，我们得到了首个结构化码的搜索到决策减缩。按照基于格的密码学中的历史构造方法，我们用函数域类似于旋羚数域的卡尔里茨扩展来实例化我们的构造，从而得到了关于各种版本的环-\(\textsf{LPN}\)的搜索到决策减缩，这些减缩在安全多方计算和认证协议上有应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_18](https://doi.org/10.1007/978-3-031-15979-4_18)
## Syndrome Decoding in the Head: Shorter Signatures from Zero-Knowledge Proofs.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#syndrome-decoding-in-the-head-shorter-signatures-from-zero-knowledge-proofs) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#syndrome-decoding-in-the-head-shorter-signatures-from-zero-knowledge-proofs)**
### 作者
* Thibauld Feneuil, CryptoExperts, Paris, France
* Matthieu Rivain, CryptoExperts, Paris, France
* Thibauld Feneuil, Sorbonne Université, CNRS, INRIA, Institut de Mathématiques de Jussieu-Paris Rive Gauche, Ouragan, Paris, France
* Antoine Joux, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 零知识证明是设计签名方案的有用工具。建造量子计算机的持续努力促使密码学界基于量子难题开发新的安全加密协议。其中一个少数方向是基于码的密码学，其中最强的问题是针对随机线性码的综合译码（SD）。已知该问题是NP难问题，并且现有的密码分析水平多年来一直稳定。1993年，Stern首创了该问题的零知识协议。自从该协议发表以来，许多文章提出了优化、实现或变体。
> 
> 在本文中，我们介绍了一种新的针对随机线性码的综合译码问题的零知识证明。与大多数现有协议使用排列不同，我们依靠“脑中多方计算”范例，将证明SD解的低汉明重量任务转化为证明特定多项式之间的某些关系。具体而言，我们提出了一个5轮的零知识协议，证明了向量x的知识，使得\(y=Hx\)且\({\text {wt}}(x)\le w\)，并且在任意N上实现了接近1/N的声效错误率。
> 
> 将该协议转化为签名方案时，当依赖于二进制域上SD问题的硬难性时，我们实现了128位安全的签名大小为11-12 KB。使用较大的域（如\(\mathbb {F}_{2^8}\)），我们可以产生约8 KB的快速签名。这使我们能够超越Picnic3，并与SPHINCS+竞争，这两者都是正在进行的NIST标准化工作中的后量子签名候选方案。此外，我们的方案在常见的“签名大小\(+\)公钥大小”指标中超越了所有现有的基于码的签名方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_19](https://doi.org/10.1007/978-3-031-15979-4_19)
## Beyond the Csiszár-Korner Bound: Best-Possible Wiretap Coding via Obfuscation.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#beyond-the-csisz-r-korner-bound-best-possible-wiretap-coding-via-obfuscation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#beyond-the-csisz-r-korner-bound-best-possible-wiretap-coding-via-obfuscation)**
### 作者
* Yuval Ishai, Technion, Haifa, Israel
* Alexis Korb, UCLA, Los Angeles, USA
* Paul Lou, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
### 摘要
> 一个窃听编码方案（Wyner，Bell Syst。Tech。J. 1975）使Alice能够通过在嘈杂的信道\(\textsf{ChB}\)上发送编码c来可靠地向诚实的Bob传达信息m，同时将m隐藏在Eve看到的另一个嘈杂的信道\(\textsf{ChE}\)上的c之中。当\(\textsf{ChB}\)是\(\textsf{ChE}\)的退化版本时，窃听编码显然不可能，因为可以仅使用\(\textsf{ChE}\)的输出来模拟\(\textsf{ChB}\)的输出。Csiszár和Korner的经典著作（IEEE Trans. Inf. Theory，1978）表明，相反并不成立。这来自于他们对使信息理论窃听编码成为可能的信道对\((\textsf{ChB}，\textsf{ChE})\)的全面描述。
> 
> 在这项工作中，我们展示了实际上在考虑计算安全性时并非如此;也就是说，针对计算上有限的Eve进行窃听编码只有在\(\textsf{ChB}\)不是\(\textsf{ChE}\)的退化版本时才可能。我们的构造假设存在特定类别的“闪避”功能的虚拟黑盒（VBB）混淆，并且可以用不可区分混淆启发式实例化。最后，我们的解决方案具有吸引人的通用特性，即Alice的算法仅取决于\(\textsf{ChB}\)而不取决于\(\textsf{ChE}\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_20](https://doi.org/10.1007/978-3-031-15979-4_20)
## Correlated Pseudorandomness from Expand-Accumulate Codes.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#correlated-pseudorandomness-from-expand-accumulate-codes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#correlated-pseudorandomness-from-expand-accumulate-codes)**
### 作者
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Elette Boyle, NTT Research, Sunnyvale, USA
* Geoffroy Couteau, IRIF, Paris, France
* Niv Gilboa, Ben-Gurion University, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Lisa Kohl, Cryptology Group, CWI Amsterdam, Amsterdam, The Netherlands
* Nicolas Resch, Cryptology Group, CWI Amsterdam, Amsterdam, The Netherlands
* Peter Scholl, Aarhus University, Aarhus, Denmark
### 摘要
> 一个伪随机相关生成器（PCG）是一种最近用于安全生成有用的相关随机性的工具，如随机忽略传输（OT）和向量忽略线性评估（VOLE），通信开销低。
> 
> 我们介绍了基于所谓的展开-累加码的PCG的简单新设计，首先应用了稀疏随机扩展图来复制每个消息条目，然后通过计算每个前缀的和来累加条目。与最先进的PCG构造相比，我们的设计具有以下优势：
> 
> 具有可证明安全性的竞争性具体效率，能够抵御相关攻击类别；
> 
> 离线-在线模式将近乎最优的缓存友好性与简单并行处理相结合；
> 
> 具体高效的伪随机相关函数扩展，可以根据需求增量生成新的相关实例，包括电路相关的相关随机性。
> 
> 为了进一步提高具体计算成本，我们提出了一种加快可穿孔伪随机函数（PPRF）的全域评估的方法。这是受到PPRF的其他密码应用的独立动机。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_21](https://doi.org/10.1007/978-3-031-15979-4_21)
## Public-Key Watermarking Schemes for Pseudorandom Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#public-key-watermarking-schemes-for-pseudorandom-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#public-key-watermarking-schemes-for-pseudorandom-functions)**
### 作者
* Rupeng Yang, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Zuoxia Yu, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Man Ho Au, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Rupeng Yang, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, Australia
* Zuoxia Yu, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, Australia
* Willy Susilo, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, Australia
### 摘要
> 软件水印方案可以在保持程序功能不变的同时将消息嵌入其中。嵌入的消息可以通过提取算法在后期提取出来，而且没有人可以在不显著改变程序功能的情况下将其移除。如果标记过程和提取过程都不需要水印秘钥，则水印方案被称为公钥水印方案。之前的水印方案主要专注于对伪随机函数(PRFs)进行水印处理，并且在该方向上的主要开放问题是构建公钥可水印的PRF。
> 
> 在本工作中，我们通过在不同的假设范围内构建具有不同权衡的公钥可水印的PRFs来解决这个开放问题，这些假设范围从标准格基假设到不可区分混淆的存在。为了实现这些结果，我们首先在一个较弱的模型中构建水印方案，其中提取算法提供了关于带水印PRF密钥的“提示”。然后，我们使用一个强健的不可混淆 PRF 将这些构建升级为标准的水印方案。我们还在本工作中首次提供了强健的不可混淆 PRF 的构建，这对独立利益具有重要意义。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_22](https://doi.org/10.1007/978-3-031-15979-4_22)
## CHIP and CRISP: Protecting All Parties Against Compromise Through Identity-Binding PAKEs.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#chip-and-crisp-protecting-all-parties-against-compromise-through-identity-binding-pakes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#chip-and-crisp-protecting-all-parties-against-compromise-through-identity-binding-pakes)**
### 作者
* Cas Cremers, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Moni Naor, Faculty of Mathematics and Computer Science, Weizmann Institute of Science, Rehovot, Israel
* Shahar Paz, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Eyal Ronen, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
### 摘要
> 密码为基础的身份验证密钥交换（PAKE）协议的最新进展可以为全球部署的安全协议提供更强的安全保证。值得注意的是，OPAQUE协议[Eurocrypt2018]实现了强对称PAKE（saPAKE），增强了aPAKE对受损服务器的保护：在攻破一个saPAKE服务器后，对手仍然需要进行完整的暴力搜索才能恢复任何密码或冒充用户。然而，(s)aPAKE不能保护客户端存储，并且只能应用于所谓的非对称设置，在这种设置中，某些参与方（如服务器）不使用协议进行相互通信。
> 
> 尽管如此，密码也广泛用于对称设置中，其中一组参与方共享一个密码并且可以进行通信（例如，Wi-Fi与客户设备、路由器和网状节点；或者工业物联网场景）。在这些设置中，(s)aPAKE技术无法应用，目前的技术仍涉及处理明文密码。
> 
> 在这项工作中，我们提出了（强）绑定身份的PAKE概念，以改善这种情况：它们可以防止任何参与方被攻破，并且还可以在对称设置中应用。我们在UC模型中提出了对称设置中的现有安全概念的对应物，并构建了可以证明实现它们的协议。我们的构造将所有参与方的本地存储与抽象身份绑定在一起，借鉴了基于身份的密钥交换的思想，但不需要第三方。
> 
> 我们的第一个协议CHIP将aPAKE协议的安全性推广到所有参与方，迫使对手进行暴力搜索以恢复密码或冒充他人。我们的第二个协议CRISP进一步使任何对手的预计算变得无用，从而为所有参与方提供saPAKE类似的保证，而不仅仅是服务器。
> 
> 我们评估了我们协议的原型实现，并且展示了尽管它们为真实世界的使用案例提供更强的安全性，但性能与最先进的协议相当，甚至更好。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_23](https://doi.org/10.1007/978-3-031-15979-4_23)
## Password-Authenticated Key Exchange from Group Actions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#password-authenticated-key-exchange-from-group-actions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#password-authenticated-key-exchange-from-group-actions)**
### 作者
* Michel Abdalla, DFINITY, Zürich, Switzerland
* Michel Abdalla, DIENS, École normale supérieure, CNRS, PSL University, Paris, France
* Thorsten Eisenhofer, Ruhr-Universität Bochum, Bochum, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
* Sabrina Kunzweiler, Ruhr-Universität Bochum, Bochum, Germany
* Doreen Riepel, Ruhr-Universität Bochum, Bochum, Germany
### 摘要
> 我们提出了两种基于可交换群操作的经过证明安全的密码认证密钥交换（PAKE）协议。至今为止，最重要的同态基群操作是由CSIDH给出的。为了更准确地模拟这些属性，我们通过能够计算椭圆曲线的二次扭曲来扩展了密码学群操作框架（Alamati等人，ASIACRYPT 2020）。这个特性在CSIDH设置中始终存在，并且在我们的PAKE协议的安全分析中起到了关键作用。
> 
> 尽管有相似之处，将基于Diffie-Hellman的PAKE协议转化为群操作要么无法使用已知技术，要么不安全（“如何不创建基于同构的PAKE”，Azarderakhsh等人，ACNS 2020）。我们通过使用“逐位”方法克服了前期研究中提到的困难，其中每个密码位都被单独考虑。
> 
> 我们的第一个协议\(\textsf{X}\text {-}\textsf{GA}\text {-}\textsf{PAKE}_\ell\)可以在单个轮次内执行。为了防止离线字典攻击，双方需要为每个密码位发送两个集合元素。第二个协议\(\mathsf {Com\text {-}GA\text {-}PAKE}_\ell\)每个密码位只需要发送一个集合元素，但一方必须首先发送其消息的承诺。我们还讨论了可以用于减少计算成本的不同优化方法。我们为我们的基础协议提供了全面的安全证明，并推导了优化版本的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_24](https://doi.org/10.1007/978-3-031-15979-4_24)
## Efficient NIZKs and Signatures from Commit-and-Open Protocols in the QROM.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#efficient-nizks-and-signatures-from-commit-and-open-protocols-in-the-qrom) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#efficient-nizks-and-signatures-from-commit-and-open-protocols-in-the-qrom)**
### 作者
* Jelle Don, Centrum Wiskunde and Informatica (CWI), Amsterdam, Netherlands
* Serge Fehr, Centrum Wiskunde and Informatica (CWI), Amsterdam, Netherlands
* Christian Majenz, Centrum Wiskunde and Informatica (CWI), Amsterdam, Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, Netherlands
* Christian Schaffner, Informatics Institute, University of Amsterdam, Amsterdam, Netherlands
* Christian Majenz, QuSoft, Amsterdam, Netherlands
* Christian Schaffner, QuSoft, Amsterdam, Netherlands
### 摘要
> 提交并开放的 \(\Sigma \)-协议是通过Fiat-Shamir变换构建非交互零知识证明和数字签名方案的流行协议。使用基于哈希的承诺实例化，则得到的非交互方案可以在随机预言机模型中获得紧密的在线可提取性。在线可提取性通过避免有损回退或基于分叉引理的提取，提高了构造出的数字签名方案的安全性证明的紧密度。
> 
> 在本研究中，我们证明了量子随机预言机模型（QROM）中的紧密的在线可提取性，表明构造支持后量子安全的特性。首先，我们考虑默认情况下通过元素散列完成承诺的情况。在第二部分中，我们将结果扩展到基于Merkle树的承诺。我们的研究成果显著提高了Picnic数字签名方案的可证明后量子安全性。
> 
> 我们的分析利用了Chung等人[CFHL21]最近提出的框架，在QROM中使用纯经典推理分析量子算法。因此，我们的结果在很大程度上可以在不需要量子信息科学先验知识的情况下理解和验证。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_25](https://doi.org/10.1007/978-3-031-15979-4_25)
## Locally Verifiable Signature and Key Aggregation.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#locally-verifiable-signature-and-key-aggregation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#locally-verifiable-signature-and-key-aggregation)**
### 作者
* Rishab Goyal, MIT, Cambridge, MA, USA
* Vinod Vaikuntanathan, MIT, Cambridge, MA, USA
### 摘要
> 聚合签名（Boneh、Gentry、Lynn、Shacham，Eurocrypt 2003）可以将N个不同消息上的N个签名压缩成一个简短的聚合签名。这将从线性的N空间复杂度减少到一个固定的常数（仅依赖于安全参数）。然而，验证聚合签名需要访问所有N个消息，导致验证的复杂度至少为\(\varOmega (N)\)。
> 
> 在这项研究中，我们引入了可以实现高效验证的本地可验证聚合签名的概念：给定一个简短的聚合签名 \(\sigma \)（对应于一个N个消息集合\(\mathcal {M}\)），验证者可以在与N无关的时间内检查特定消息m是否在该集合中。验证不需要对整个集合 \(\mathcal {M}\) 有任何了解。我们展示了本地可验证聚合签名方案在许多自然应用中的应用：用于证书透明日志；在区块链中；以及用于遮蔽签名，即使所有原始签名都是由单个用户生成的。
> 
> 我们提供了两种构建单签名者本地可验证聚合签名的方法，第一种基于RSA假设，第二种基于双线性Diffie-Hellman求逆假设，都在随机预言机模型中。
> 
> 作为额外的贡献，我们引入了在基于身份的加密（IBE）方案中压缩加密密钥的概念，展示了这一概念的应用，并构建了一个IBE方案，其中用于N个身份的密钥可以压缩成单个聚合密钥，然后可以用于解密发送给任何N个身份的密文。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_26](https://doi.org/10.1007/978-3-031-15979-4_26)
## Multimodal Private Signatures.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-2].md#multimodal-private-signatures) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#multimodal-private-signatures)**
### 作者
* Khoa Nguyen, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
* Fuchun Guo, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
* Willy Susilo, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
* Guomin Yang, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
### 摘要
> 我们介绍了一种多模态私密签名（MPS）——一种匿名签名系统，它提供了一种新颖的问责制功能：它允许指定的开启机构学习有关签名者身份（id）的某些部分信息op，并且不会得到更多信息。这种部分信息可以灵活地定义为op = id（如群签名中），或者op = 0（如环签名中），或者更一般地定义为op = G_j（id），其中G_j（·）是特定的披露函数。重要的是，签名者事先知道op的值，因此，他可以决定是否披露这部分信息。MPS的概念极大地推广了传统面向匿名性的签名原语中追踪的概念，并能够实现各种新颖且有吸引力的保护隐私的应用。
> 
> 我们对MPS的定义和安全要求进行了形式化。接下来，我们提出了一个通用构造，以证明可以以模块化的方式设计MPS，并使用常用的密码学构建块（普通签名、公钥加密和NIZK）实现。我们还提供了基于配对的标准模型中的高效构造和基于格的随机预言机模型中的构造。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_27](https://doi.org/10.1007/978-3-031-15979-4_27)
