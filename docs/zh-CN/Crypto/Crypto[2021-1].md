# Crypto[2021-1]
## On the Possibility of Basing Cryptography on EXP≠ BPP.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#on-the-possibility-of-basing-cryptography-on-exp-bpp) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#on-the-possibility-of-basing-cryptography-on-exp-bpp)**
### 作者
* Yanyi Liu, Cornell University, Ithaca, USA
* Rafael Pass, Cornell Tech, New York, USA
### 摘要
> 刘和帕斯（FOCS'20）最近证明了单向函数（OWFs）的存在与有限时间 Kolmogorov 复杂性问题的温和平均情况困难的等价性。在这项工作中，我们建立了一个类似的等价性，但是与另一种形式的有限时间 Kolmogorov 复杂性相关，即列文的 Kolmogorov 复杂性，其难度与是否 \(\mathsf{EXP}\ne \mathsf{BPP}\) 问题密切相关。更详细地，令 Kt(x) 表示字符串 x 的 Levin-Kolmogorov 复杂度；即，\(Kt(x) = \min _{{\varPi }\in \{0,1\}^*, t \in \mathbb {N}}\{|{\varPi }| + \lceil \log t \rceil : U({\varPi }, 1^t) = x\}\)，其中 U 是一个通用图灵机，\(U({\varPi },1^t)\) 表示经过 t 步后程序 \(\varPi \) 的输出，令 \(\mathsf{MKtP}\) 表示具有性质 \(Kt(x) \le k\) 的对 (x, k) 的语言。我们证明：
> 
> \(\mathsf{MKtP}\notin \mathsf{Heur}_{\mathsf{neg}}\mathsf{BPP}\)（即，\(\mathsf{MKtP}\) 是温和平均情况下的两面性错误困难）当且仅当无限次的 OWFs 存在。
> 
> \(\mathsf{MKtP}\notin \mathsf{Avg}_{\mathsf{neg}}\mathsf{BPP}\)（即，\(\mathsf{MKtP}\) 是无限次无错误温和平均情况困难）当且仅当 \(\mathsf{EXP}\ne \mathsf{BPP}\)。
> 
> 因此，从假设 \(\mathsf{EXP}\ne \mathsf{BPP}\) 得到（无限次）OWFs 的唯一“差距”是 \(\mathsf{MKtP}\) 问题的两面性错误和无错误平均情况困难之间的看似“次要”的技术差距。
> 
> 作为这一结果的推论，我们另外证明了从 \(\mathsf{MKtP}\) 的无错误到两面性错误平均情况困难的任何减少都意味着（无条件地）\(\mathsf{NP}\ne \mathsf{P}\)。
> 
> 最后，我们考虑了其他替代的 Kolmogorov 复杂性概念，包括有限空间 Kolmogorov 复杂性和条件 Kolmogorov 复杂性，并展示了与它们相关的问题的平均情况困难如何刻画了对数空间计算的 OWFs，或者在 \( \mathsf{NC}^0 \) 中的 OWFs。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_2](https://doi.org/10.1007/978-3-030-84242-0_2)
## Linear Cryptanalysis of FF3-1 and FEA.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#linear-cryptanalysis-of-ff3-1-and-fea) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#linear-cryptanalysis-of-ff3-1-and-fea)**
### 作者
* Tim Beyne, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> 对采用交替轮密钥的通用小域费斯特尔密码，利用线性密码分析获得了改进的攻击方法。这导致了对美国格式保留加密标准FF3-1以及韩国的FEA-1和FEA-2标准的实际区分和消息恢复攻击。所提出的对FF3-1和FEA-1的攻击的数据复杂度为\(\widetilde{\mathcal {O}}(N^{r/2 - 1.5})\)，其中\(N^2\)是域大小，r是轮数。例如，当\(N = 10^3\)时，可以通过 \(2^{23}\) 次加密查询将FF3-1与理想的可调整块密码区分开来，并具有优势 \(\ge 1/10\)。具有类似优势的消息左半部恢复需要 \(2^{24}\) 的数据。FF3-1的分析作为在群\(\mathbb {Z}/N\mathbb {Z}\)上（广义）线性密码分析的一个有趣的现实应用案例。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_3](https://doi.org/10.1007/978-3-030-84242-0_3)
## Efficient Key Recovery for All HFE Signature Variants.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#efficient-key-recovery-for-all-hfe-signature-variants) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#efficient-key-recovery-for-all-hfe-signature-variants)**
### 作者
* Jintai Ding, Yau Mathematical Center, Tsinghua University, Beijing, China
* Chengdong Tao, Ding Lab, Beijing Institute of Mathematical Science and Applications, Beijing, China
* Jintai Ding, Ding Lab, Beijing Institute of Mathematical Science and Applications, Beijing, China
* Albrecht Petzoldt, FAU Erlangen-Nuremberg, Nuremberg, Germany
### 摘要
> HFE密码系统是最受欢迎的多变量方案之一。尤其在数字签名领域，HFEv-变种提供了短签名和高性能。最近，在NIST后量子密码（PQC）标准化项目的第三轮中，被选为备选签名方案之一的HFEv-签名方案实例名为GeMSS。
> 
> 在本文中，我们提出了一种针对HFEv-签名方案的新型密钥恢复攻击。我们的攻击表明负数和醋改动并没有显著增强基本HFE方案的安全性。这表明基于HFE构建安全高效的签名方案非常困难。特别地，我们使用我们的攻击来证明GeMSS方案的提议参数并不像宣称的那样安全。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_4](https://doi.org/10.1007/978-3-030-84242-0_4)
## Three Halves Make a Whole? Beating the Half-Gates Lower Bound for Garbled Circuits.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#three-halves-make-a-whole-beating-the-half-gates-lower-bound-for-garbled-circuits) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#three-halves-make-a-whole-beating-the-half-gates-lower-bound-for-garbled-circuits)**
### 作者
* Mike Rosulek, Oregon State University, Corvallis, USA
* Lawrence Roy, Oregon State University, Corvallis, USA
### 摘要
> 我们描述了一个用于布尔电路的混淆方案，其中XOR门是免费的，而AND门需要通信1.5κ + 5位。这比Zahur、Rosulek和Evans（Eurocrypt 2015）提出的“半门”方案有所改进，其中XOR门是免费的，而AND门的成本为2κ位。半门论文在当时证明了每个AND门的下限为2κ位，该模型涵盖了当时所有已知的混淆技术。我们通过一种新颖的技术来绕过这个下限，我们称之为切片和切块，它涉及将线标签分成两半并分别对其进行操作。我们是第一个在完全兼容免费XOR的情况下绕过这个下限的方法，因此可以直接替代半门。我们的构建从类似先前的免费XOR混淆（循环相关-鲁棒哈希）的假设中被证明是安全的，并且只比半门多一点计算量。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_5](https://doi.org/10.1007/978-3-030-84242-0_5)
## Threshold Schnorr with Stateless Deterministic Signing from Standard Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#threshold-schnorr-with-stateless-deterministic-signing-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#threshold-schnorr-with-stateless-deterministic-signing-from-standard-assumptions)**
### 作者
* François Garillot, Novi/Facebook, Palo Alto, USA
* Valeria Nikolaenko, Novi/Facebook, Palo Alto, USA
* Yashvanth Kondi, Northeastern University, Boston, USA
* Payman Mohassel, Facebook, Palo Alto, USA
### 摘要
> Schnorr（施敏诺尔）的签名方案由于其线性签名方程，允许一种优雅的门限签名协议。然而，每个新的签名都消耗了新鲜的随机性，在实践中可能成为一个重要的攻击向量。在部署中，随机性的来源通常要么不可靠，要么需要状态连续性，即对回滚有可靠的新鲜状态的弹性。由于软件错误、恶意行为者或电源中断引起的系统崩溃，实现状态连续性在实践中是一个非常困难的保证（Parno等人，S＆P'11）。对于Schnorr的变体（如EdDSA），这不是一个问题，因为它们规定非ces确定地作为消息和秘密密钥的函数派生nonces。然而，将这些优点转化到门限设置中是具有挑战性的，特别是构建门限Schnorr方案，在该方案中，签名既不需要各方消耗新鲜随机性，也不需要更新长期保密状态。在这项工作中，我们使用标准化的块密码构建了一种不诚实多数门限Schnorr协议，它实现了无状态确定性nonce派生。我们的核心技术要素是用于零知识来自加密电路（ZKGC）范例的新工具，以帮助验证正确的nonce派生：基于UC承诺的机制，允许证明者一次承诺给一个证人，并且只需要廉价的对称密钥操作就能在线证明无限数量的陈述。用于将中间加密电路线标签转化为算术编码的加密设备。根据我们的方案，每个证明仅需要一个小的常数次幂运算。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_6](https://doi.org/10.1007/978-3-030-84242-0_6)
## Two-Round Trip Schnorr Multi-signatures via Delinearized Witnesses.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#two-round-trip-schnorr-multi-signatures-via-delinearized-witnesses) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#two-round-trip-schnorr-multi-signatures-via-delinearized-witnesses)**
### 作者
* Handan Kılınç Alper, Web3 Foundation, Zug, Switzerland
* Jeffrey Burdges, Web3 Foundation, Zug, Switzerland
### 摘要
> 我们构建了一个基于Schnorr的双轮签名方案（DWMS），通过取消每个签名者提供的两个预承诺的线性化操作。DWMS是在代数群模型（AGM）和随机预言机模型（ROM）下，根据我们在本文中引入的一波离散对数问题和2相互纠缠求和问题的难度假设，一个安全的签名方案。我们的新的m-相互纠缠求和问题使用相关群，在标量域上调整k-求和问题。在相关群中，我们证明了新问题的难度，假设离散对数问题的难度。我们相信我们的新问题简化了使用取消承诺的多签名方案的安全性证明。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_7](https://doi.org/10.1007/978-3-030-84242-0_7)
## MuSig2: Simple Two-Round Schnorr Multi-signatures.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#musig2-simple-two-round-schnorr-multi-signatures) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#musig2-simple-two-round-schnorr-multi-signatures)**
### 作者
* Jonas Nick, Blockstream, Victoria, Canada
* Tim Ruffing, Blockstream, Victoria, Canada
* Yannick Seurin, ANSSI, Paris, France
### 摘要
> 多签名使一组签名者能够在一起对一个共同的消息进行联合签名。最近，Drijvers等人(S&amp;P'19)表明，在纯DL环境（无配对）中，目前提出的所有两轮多签名方案在并发签名会话下都是不安全的。虽然Drijvers等人提出了一个安全的两轮方案，但这种以轮数为代价的效率使得签名的大小超过Schnorr签名的两倍，而后者由于其实用性而在密码系统中变得流行（例如，它们可能会被采用在比特币中）。如果需要一个可以作为Schnorr签名的即插即用替代方案的多签名方案，那么只能选择三轮方案或连续签名会话，但这两种方法在实践中都不理想。
> 
> 在这项工作中，我们提出了\(\mathsf {MuSig2} \)，这是一个简单且非常实用的两轮多签名方案。这是第一个同时满足以下条件的方案：i) 在并发签名会话下安全；ii) 支持密钥聚合；iii) 输出普通的Schnorr签名；iv) 只需要两轮通信；v) 与普通Schnorr签名具有相似的签名者复杂度。此外，这也是在纯DL环境下第一个支持减少除最后一轮之外所有预处理操作的多签名方案，从而在不放弃在并发会话下的安全性的前提下，实现了一种非交互式签名过程。我们在随机神谕模型中证明了\(\mathsf {MuSig2} \)的安全性，并且在随机神谕和代数群模型的组合中证明了更高效变体的安全性。我们的两个证明都依赖于OMDL假设的一个较弱变体。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_8](https://doi.org/10.1007/978-3-030-84242-0_8)
## Tighter Security for Schnorr Identification and Signatures: A High-Moment Forking Lemma for ${\varSigma }$-Protocols.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#tighter-security-for-schnorr-identification-and-signatures-a-high-moment-forking-lemma-for-varsigma-protocols) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#tighter-security-for-schnorr-identification-and-signatures-a-high-moment-forking-lemma-for-varsigma-protocols)**
### 作者
* Lior Rotem, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Gil Segev, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
### 摘要
> Schnorr身份验证和签名方案是过去三十年来最有影响的密码学协议之一。然而，尽管对这两个方案的已知攻击都是通过离散对数计算进行的，但以离散对数问题的困难为基础确保它们的安全性的已知方法遇到了“平方根障碍”。具体而言，在任何阶数为p的群中，Shoup关于离散对数问题的通用困难结果被认为成立（因此用于设置具体的安全参数），对Schnorr身份验证和签名方案的已知t时间攻击成功概率为\(t^2/p\)，而已有的安全证明只能排除成功概率分别为\((t^2/p)^{1/2}\) 和 \((q_{\mathsf {H}} \cdot t^2/p)^{1/2}\)的攻击，其中\(q_{\mathsf {H}}\)表示攻击者发出的随机预言器查询次数。
> 
> 我们针对基于其底层关系的特殊正确性的Σ协议设计更强的安全性保证，特别是对基于离散对数问题的Schnorr方案。我们通过引入经典分叉引理的高阶版本，绕过了平方根障碍，该引理依赖于基本关系是“d-时刻困难”的假设：对于生成随机实例的任何算法，其产生见证的成功概率主要由算法运行时间的d阶矩支配。
> 
> 在离散对数问题的具体情景中，Shoup的最初证明已经表明，在通用群模型中，离散对数问题是2-时刻困难的，因此我们的假设可以被视为对于任何当前没有超越通用算法的群中的离散对数假设的高度合理加强。应用我们的高阶分叉引理，可以得出结论，假设离散对数问题的2-时刻困难性成立，则任何t时间攻击者最多以概率\((t^2/p)^{2/3}\)和\((q_\mathsf {H}\cdot t^2/p)^{2/3}\)破坏Schnorr身份验证和签名方案的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_9](https://doi.org/10.1007/978-3-030-84242-0_9)
## DualRing: Generic Construction of Ring Signatures with Efficient Instantiations.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#dualring-generic-construction-of-ring-signatures-with-efficient-instantiations) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#dualring-generic-construction-of-ring-signatures-with-efficient-instantiations)**
### 作者
* Tsz Hon Yuen, The University of Hong Kong, Pok Fu Lam, Hong Kong
* Man Ho Au, The University of Hong Kong, Pok Fu Lam, Hong Kong
* Muhammed F. Esgin, Department of Software Systems and Cybersecurity, Faculty of Information Technology, Monash University, Melbourne, Australia
* Joseph K. Liu, Department of Software Systems and Cybersecurity, Faculty of Information Technology, Monash University, Melbourne, Australia
* Muhammed F. Esgin, CSIRO’s Data61, Melbourne, Australia
* Zhimin Ding, Rice University, Houston, USA
### 摘要
> 我们介绍一种新型的通用环签名结构，称为DualRing。它可以由多个规范身份验证方案（例如Schnorr身份验证）构建而成。DualRing与传统的环签名不同之处在于形成了两个环：承诺环和挑战环。它在结构上与基于累加器或签名者索引的零知识证明的常见环签名方法有所不同。相比之下，DualRing具有许多独特的优势。
> 
> 在使用Schnorr身份验证方案的DL（离散对数）基础上，我们的DualRing结构允许将签名大小通过知识系统（如Bulletproofs）的论证压缩到对数大小。我们进一步改进了Bulletproofs论证系统，以消除约一半的计算量，同时保持相同的证明大小。我们称之为Sum Argument，并且它可能具有独立的价值。这个基于DL的结构被命名为DualRing-EC，使用Schnorr身份验证和Sum Argument，在文献中具有最短的环签名大小，而无需使用可信设置（trusted setup）。
> 
> 考虑到基于格（lattice）的设置，我们通过基于M-LWE和M-SIS的规范身份验证来实例化DualRing。在实践中，当环大小在4至2000之间时，我们实现了最短的基于格的环签名，称为DualRing-LB。与Esgin等人（CRYPTO'19）提出的最快基于格的方案相比，DualRing-LB在签名和验证方面也快了5倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_10](https://doi.org/10.1007/978-3-030-84242-0_10)
## Compact Ring Signatures from Learning with Errors.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#compact-ring-signatures-from-learning-with-errors) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#compact-ring-signatures-from-learning-with-errors)**
### 作者
* Rohit Chatterjee, Stony Brook University, Stony Brook, USA
* Xiao Liang, Stony Brook University, Stony Brook, USA
* Omkant Pandey, Stony Brook University, Stony Brook, USA
* Sina Shiehian, Stony Brook University, Stony Brook, USA
* Sanjam Garg, University of California, Berkeley, USA
* Sina Shiehian, University of California, Berkeley, USA
* Sanjam Garg, NTT Research, Tokyo, Japan
* Mohammad Hajiabadi, University of Waterloo, Waterloo, Canada
* Dakshita Khurana, University of Illinois Urbana-Champaign, Champaign, USA
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### 摘要
> 环签名允许用户代表一个“环”中的签名者对消息进行签名，同时隐藏签名者的真实身份。由于环签名提供的匿名性程度与环的大小成正比，密码学中的一个重要目标是研究能够使签名的大小与环成对数关系的构造方法。
> 
> 在这项工作中，我们提出了第一个紧凑型环签名方案（即签名的大小随着环的大小呈对数增长）从学习与错误（LWE）问题构建。该构造在标准模型下进行，并不依赖于共同的随机串或随机神谕启发式。与Backes等人的之前工作[EUROCRYPT’2019]相比，我们的方案不依赖于双线性配对，这使我们可以证明该方案在假设LWE的量子硬度情况下是后量子安全的。
> 
> 我们方案的核心是一种新的紧凑型、统计上见证不可区分的NP和coNP的ZAP论证的构造，我们基于明文LWE假设展示其合理性。在我们的工作之前，只有在假设次指数级LWE的情况下已知存在统计上的ZAP（适用于所有NP）。我们相信这个方案在未来可能会找到进一步的应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_11](https://doi.org/10.1007/978-3-030-84242-0_11)
## A Black-Box Approach to Post-Quantum Zero-Knowledge in Constant Rounds.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#a-black-box-approach-to-post-quantum-zero-knowledge-in-constant-rounds) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#a-black-box-approach-to-post-quantum-zero-knowledge-in-constant-rounds)**
### 作者
* Nai-Hui Chia, QuICS, University of Maryland, College Park, USA
* Nai-Hui Chia, Luddy School of Informatics, Computing, and Engineering, Indiana University, Bloomington, USA
* Kai-Min Chung, Institute of Information Science, Academia Sinica, Taiwan, China
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
### 摘要
> 在最近的一项开创性工作中，Bitansky 和 Shmueli (STOC ’20) 提供了首个针对 \(\mathbf {NP}\) 的对量子攻击安全的常数轮次零知识论证的构造。然而，相比于传统对应方法，他们的构造存在多个缺点。具体来说，他们的构造只达到了计算完备性，需要强假设关于量子学习错误的困难性(QLWE假设)和量子全同态加密(QFHE)的存在，并且依赖于非黑箱模拟。
> 
> 在本文中，我们通过将零知识的概念弱化为 \(\epsilon \)-零知识来解决这些问题。具体来说，我们构造了以下协议：
> 
> - 我们构建了一个对 \(\mathbf {NP}\)进行统计完备性和黑箱 \(\epsilon \)-零知识量子攻击测试的常数轮交互证明，该证明假设有可折叠哈希函数（碰撞抵抗型哈希函数的量子对应物）的存在。有趣的是，这个构造只是Goldreich 和 Kahan (JoC ’96) 提出的传统协议的改良版，尽管针对量子对手证明 \(\epsilon \)-零知识性质需要新颖的观点。
> 
> - 我们构建了一个对 \(\mathbf {NP}\)进行计算完备性及黑箱 \(\epsilon \)-零知识量子攻击测试的常数轮交互论证，该论证唯一的假设是存在后量子单向函数。
> 
> 在我们的结果中，一个新的量子回溯技术起到核心作用，它使模拟器能在模

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_12](https://doi.org/10.1007/978-3-030-84242-0_12)
## On the Concurrent Composition of Quantum Zero-Knowledge.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#on-the-concurrent-composition-of-quantum-zero-knowledge) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#on-the-concurrent-composition-of-quantum-zero-knowledge)**
### 作者
* Prabhanjan Ananth, UCSB, Santa Barbara, USA
* Kai-Min Chung, Academia Sinica, Taipei City, Taiwan
* Rolando L. La Placa, MIT, Cambridge, USA
### 摘要
> 我们在并发组合设置（concurrent composition setting）中研究了对量子多项式时间验证者具有零知识安全性的概念（称为量子零知识）。尽管在经典设置中广泛研究，但在量子设置中几乎没有进行研究。
> 
> 我们启动了对并发量子零知识的正式研究。我们的结果如下：
> 
> NP和QMA的有界并发QZK：假设后量子单向函数存在，那么在有界并发情境中存在一个量子零知识证明系统，用于NP。在这个情境下，我们预先确定可以与证明者同时交互的验证者数量。在相同的假设下，我们还表明在有界并发性设置中存在一个量子零知识证明系统，用于QMA。
> 
> 知识的量子证明：假设利用错误学习的难度（QLWE）进行量子计算具有困难性，那么存在一个满足量子知识证明属性的有界并发零知识证明系统，用于NP。
> 
> 我们的提取机制同时允许提取概率与接受概率极其接近（可提取性），并且确保提取后的证明者状态在统计上接近于与验证者互动后的证明者状态（可模拟性）。
> 
> 即使在独立设置中，[Unruh EUROCRYPT’12]的开创性工作及其后续工作，也满足可提取性属性的较弱版本，并且没有达到可模拟性。我们的结果比先前的工作更好地得出了适用于QMA的量子知识系统的证明参数。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_13](https://doi.org/10.1007/978-3-030-84242-0_13)
## Multi-theorem Designated-Verifier NIZK for QMA.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#multi-theorem-designated-verifier-nizk-for-qma) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#multi-theorem-designated-verifier-nizk-for-qma)**
### 作者
* Omri Shmueli, Tel Aviv University, Tel Aviv, Israel
### 摘要
> 我们提出了一个基于学习与错误假设的QMA多定理安全的指定验证者非交互式零知识论证系统。所有以前的QMA协议只能保障单定理的安全。我们还放宽了以前作品中所需的设置假设。我们在恶意指定验证者（MDV-NIZK）模型中证明了安全性（Quach，Rothblum和Wichs，EUROCRYPT 2019），其中设置包括互相信任的随机字符串和不受信任的验证者公钥。
> 
> 我们的主要技术贡献是一个通用编译器，该编译器可以根据NP的NIZK和QMA的量子sigma协议生成一个QMA的MDV-NIZK协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_14](https://doi.org/10.1007/978-3-030-84242-0_14)
## On the Round Complexity of Secure Quantum Computation.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#on-the-round-complexity-of-secure-quantum-computation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#on-the-round-complexity-of-secure-quantum-computation)**
### 作者
* James Bartusek, UC Berkeley, Berkeley, USA
* Andrea Coladangelo, UC Berkeley, Berkeley, USA
* Dakshita Khurana, UIUC, Champaign, USA
* Fermi Ma, Princeton University, Princeton, USA
* Fermi Ma, NTT Research, Palo Alto, USA
### 摘要
> 我们在双方（2PQC）和多方（MPQC）设置中构建了第一个针对恶意对手的安全量子计算的常数轮协议。我们的协议是在常规随机字符串（CRS）模型中的。假设两条消息的遗传转移（OT），我们得到（i）三条消息的2PQC，和（ii）只需要三轮在线（依赖于输入）通信的五轮MPQC；此类OT来源于量子难的学习与错误（QLWE）。在假设QLWE具有次指数难度的情况下，我们得到（i）只需要两轮在线通信的三轮2PQC，和（ii）只需要两轮在线通信的四轮MPQC。当只有一方（两方中的一方）接收输出时，我们从两条消息的OT实现了最小交互（两条消息）；经典上，这种协议被称为非交互式安全计算（NISC），我们的结果构成了第一个恶意安全的量子NISC。此外，假设可重用的恶意指定验证者非交互零知识论证（MDV-NIZKs）适用于\(\mathsf {NP}\)，我们给出了第一个只需要一个量子见证副本的\(\mathsf {QMA}\)的MDV-NIZK。最后，我们对每个方必须获得输出的双轮安全量子计算进行了初步调查。在负面方面，我们确定了一大类在经典双轮安全计算中足够的模拟策略，在量子环境中可能不起作用。接下来，作为概念验证，我们展示了关于量子Oracle的双轮安全量子计算的存在。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_15](https://doi.org/10.1007/978-3-030-84242-0_15)
## Round Efficient Secure Multiparty Quantum Computation with Identifiable Abort.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#round-efficient-secure-multiparty-quantum-computation-with-identifiable-abort) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#round-efficient-secure-multiparty-quantum-computation-with-identifiable-abort)**
### 作者
* Bar Alon, Department of Computer Science, Ariel University, Ariel, Israel
* Hao Chung, Department of Electrical and Computer Engineering, Carnegie Mellon University, Pittsburgh, USA
* Kai-Min Chung, Institute of Information Science, Academia Sinica, Taipei City, Taiwan
* Mi-Ying Huang, Institute of Information Science, Academia Sinica, Taipei City, Taiwan
* Yi Lee, Institute of Information Science, Academia Sinica, Taipei City, Taiwan
* Yu-Ching Shen, Institute of Information Science, Academia Sinica, Taipei City, Taiwan
* Mi-Ying Huang, Department of Computer Science and Information Engineering, National Taiwan University, Taipei City, Taiwan
### 摘要
> Dulek等人（EUROCRYPT 2020）最近的研究结果展示了一种安全的协议，可以计算任何量子电路，即使没有诚实多数的情况下也能实现。然而，他们的协议容易受到“拒绝服务”攻击，即使只有一个被损坏的参与方也能强制中止。我们提出了第一个能够识别中止源的安全量子协议，在中止情况下诚实的参与方能就被损坏的参与方达成一致意见。此外，我们的协议是第一个在量子电路复杂度无关的轮次中需要量子通信的协议。此外，如果存在一种后量子安全的经典协议，其轮次复杂度与电路复杂度无关，那么我们的协议也具备这个特性。我们的协议在假定存在具有对数深度解密电路的经典抗量子完全同态加密方案的情况下是安全的。有趣的是，我们的构建还将量子公平安全计算归约为经典公平安全计算。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_16](https://doi.org/10.1007/978-3-030-84242-0_16)
## One-Way Functions Imply Secure Computation in a Quantum World.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#one-way-functions-imply-secure-computation-in-a-quantum-world) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#one-way-functions-imply-secure-computation-in-a-quantum-world)**
### 作者
* James Bartusek, UC Berkeley, Berkeley, USA
* Andrea Coladangelo, UC Berkeley, Berkeley, USA
* Dakshita Khurana, UIUC, Champaign, USA
* Fermi Ma, Princeton University and NTT Research, Princeton, USA
### 摘要
> 我们证明了量子难问题函数暗示模拟安全的量子无意传输（QOT），已知其足以对任意量子功能进行安全计算。此外，我们的构建仅在标准模型中使用量子难问题函数的黑盒方式。
> 
> 我们的主要技术贡献是基于标准模型中使用量子难问题函数的黑盒方式构建可提取和模糊的量子比特承诺。使用这些承诺实例化Crépeau-Kilian（FOCS 1988）框架可以得到模拟安全的QOT。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_17](https://doi.org/10.1007/978-3-030-84242-0_17)
## Impossibility of Quantum Virtual Black-Box Obfuscation of Classical Circuits.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#impossibility-of-quantum-virtual-black-box-obfuscation-of-classical-circuits) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#impossibility-of-quantum-virtual-black-box-obfuscation-of-classical-circuits)**
### 作者
* Gorjan Alagic, Joint Center for Quantum Information and Computer Science, University of Maryland, College Park, MD, USA
* Gorjan Alagic, National Institute of Standards and Technology, Gaithersburg, MD, USA
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Yfke Dulek, Centrum Wiskunde & Informatica, Amsterdam, The Netherlands
* Christian Schaffner, University of Amsterdam, Amsterdam, The Netherlands
* Yfke Dulek, QuSoft, Amsterdam, The Netherlands
* Christian Schaffner, QuSoft, Amsterdam, The Netherlands
### 摘要
> 虚拟黑盒混淆是一种强大的密码学基元：它对电路进行加密，同时保持其完整的输入/输出功能。 Barak等人在Crypto 2001中取得的一个显著成果表明，一个将经典电路混淆为经典电路的通用混淆器是不存在的。一个有望的方向，可以规避这个不可能的结果，是将经典电路混淆为量子态，这可能更能有效地隐藏有关混淆电路的信息。我们证明，在学习失误（LWE）对量子计算机而言是困难的假设下，这个量子变体的虚拟黑盒混淆经典电路通常是不可能的。在此过程中，我们还表明，在存在相关的经典辅助输入的情况下，即使是小型的经典点函数类别也不能被量子虚拟黑盒混淆。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_18](https://doi.org/10.1007/978-3-030-84242-0_18)
## New Approaches for Quantum Copy-Protection.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#new-approaches-for-quantum-copy-protection) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#new-approaches-for-quantum-copy-protection)**
### 作者
* Scott Aaronson, The University of Texas at Austin, Austin, USA
* Jiahui Liu, The University of Texas at Austin, Austin, USA
* Ruizhe Zhang, The University of Texas at Austin, Austin, USA
* Qipeng Liu, Princeton University, Princeton, USA
* Mark Zhandry, Princeton University and NTT Research, Princeton, USA
### 摘要
> 量子复制保护利用量子态的不可克隆性来构建可证明无法被盗版的量子软件。复制保护将极其有用，但不幸的是，关于如何在通常情况下实现它的了解很少。在此项工作中，我们通过以下成果在这个目标上取得了进展：
> 
> 我们展示了如何复制保护任何无法从其输入输出行为中相对于一个经典oracle学习的程序。此构造改进了Aaronson（CCC 2009），他相对于一个量子oracle实现了同样的事。通过实例化为后量子候选混淆方案的oracle，我们获得了一个启发式的复制保护构造。
> 
> 我们粗略地展示，任何可以被水印的程序都可以被复制检测，这是一种复制保护的弱版本，它无法防止复制，但保证了任何复制都可以被检测。我们的方案依赖于假定的水印的安全性，以及公钥量子货币的假设存在。我们的构造是公开可检测的，并适用于许多最近的水印

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_19](https://doi.org/10.1007/978-3-030-84242-0_19)
## Hidden Cosets and Applications to Unclonable Cryptography.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#hidden-cosets-and-applications-to-unclonable-cryptography) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#hidden-cosets-and-applications-to-unclonable-cryptography)**
### 作者
* Andrea Coladangelo, University of California, Berkeley, USA
* Jiahui Liu, The University of Texas at Austin, Austin, USA
* Qipeng Liu, Princeton University, Princeton, USA
* Mark Zhandry, Princeton University and NTT Research, Princeton, USA
### 摘要
> 2012年，Aaronson和Christiano提出了利用隐藏子空间状态构建公钥量子货币[STOC’12]的概念。自那时以来，这一想法已被应用于实现其他几种加密原语，这些加密原语享有某种不可克隆性。
> 
> 在这项工作中，我们提出了一个将隐藏子空间状态推广为隐藏余子群状态的概念。我们研究了余子群状态的不同不可克隆属性以及几种应用：
> 
> 我们展示了，假设不可区分性混淆（\(\mathsf{iO}\)），隐藏的余子群状态具有一定的直积难度属性，这立即意味着在明文模型中存在一个令牌化签名方案。此前，令牌化签名方案仅与一个oracle相关，来自Ben-David和Sattath的一项工作[QCrypt’17]。
> 
> 结合令牌化签名方案和可提取的见证加密，我们构建了一个在明文模型中的不可克隆解密方案。后一种原语最近由Georgiou和Zhandry提出[ePrint’20]，他们相对于一个经典oracle给出了一种构造。
> 
> 我们猜想，余子群状态满足某种自然的（信息理论的）纠缠独特性。假设这一猜想成立，我们通过依赖于不可预测分布类的计算和比较混淆来消除在我们的不可克隆解密构造中的可提取见证加密要求。作为支持纠缠猜想的潜在证据，我们证明了这种纠缠性质的一个较弱版本，我们相信这仍然具有独立的兴趣。
> 
> 最后，我们在明文模型中给出了首个伪随机函数（PRFs）的复制保护方案。我们的方案要么是安全的，假设\(\mathsf{iO}\)、\(\mathsf{OWF}\)和可提取的见证加密，要么是安全的，假设\(\mathsf{iO}、\mathsf{OWF}\)、计算和比较不可预测分布的混淆，以及上述述的猜想纠缠特性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_20](https://doi.org/10.1007/978-3-030-84242-0_20)
## On Tight Quantum Security of HMAC and NMAC in the Quantum Random Oracle Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#on-tight-quantum-security-of-hmac-and-nmac-in-the-quantum-random-oracle-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#on-tight-quantum-security-of-hmac-and-nmac-in-the-quantum-random-oracle-model)**
### 作者
* Akinori Hosoyamada, NTT Secure Platform Laboratories, Tokyo, Japan
* Akinori Hosoyamada, Nagoya University, Nagoya, Japan
* Tetsu Iwata, Nagoya University, Nagoya, Japan
### 摘要
> HMAC和NMAC是将Merkle-Damgård哈希函数转换为消息认证码（MAC）或伪随机函数（PRF）的最基本且重要的构造。在量子环境中，Song和Yun在CRYPTO 2017上表明，在底层压缩函数为量子伪随机函数（qPRF）的标准假设下，HMAC和NMAC是量子伪随机函数（qPRFs）。他们的证明保证了当HMAC和NMAC的输出长度为n位时，在进行\(O(2^{n/5})\)或\(O(2^{n/8})\)个量子查询时的安全性。然而，可证安全边界与使用\(O(2^{n/3})\)个量子查询的简单区分攻击之间存在差距。本论文解决了这个问题。我们展示了在量子随机预言模型中，从一个随机函数区分HMAC或NMAC所需的量子查询次数 str\(\Theta (2^{n/3})\). 在该模型中，压缩函数被建模为量子随机预言。为了给出紧密的量子边界，基于Zhandry的压缩预言技术的另一种形式化，我们介绍了一种新的证明技术，着重于量子查询记录的对称性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_21](https://doi.org/10.1007/978-3-030-84242-0_21)
## Quantum Collision Attacks on Reduced SHA-256 and SHA-512.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#quantum-collision-attacks-on-reduced-sha-256-and-sha-512) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#quantum-collision-attacks-on-reduced-sha-256-and-sha-512)**
### 作者
* Akinori Hosoyamada, NTT Secure Platform Laboratories, Tokyo, Japan
* Yu Sasaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Akinori Hosoyamada, Nagoya University, Nagoya, Japan
### 摘要
> 在这篇论文中，我们首次研究了专用的量子碰撞攻击对SHA-256和SHA-512。这些攻击分别达到了38和39步，明显改进了经典攻击的31和27步。这两种攻击都采用了先前工作的框架，将许多半自由起始碰撞转换为2块碰撞，并且在时间-空间权衡的成本度量上比通用攻击更快。我们观察到，在量子环境中，所需的半自由起始碰撞数量可以减少，这使我们能够将先前的经典38和39步半自由起始碰撞转换为碰撞。我们攻击的思想是简单的，并且也能适用于其他密码哈希函数。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_22](https://doi.org/10.1007/978-3-030-84242-0_22)
## Halo Infinite: Proof-Carrying Data from Additive Polynomial Commitments.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#halo-infinite-proof-carrying-data-from-additive-polynomial-commitments) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#halo-infinite-proof-carrying-data-from-additive-polynomial-commitments)**
### 作者
* Dan Boneh, Stanford, Stanford, USA
* Ben Fisch, Stanford, Stanford, USA
* Justin Drake, Ethereum Foundation, Zug, Switzerland
* Ariel Gabizon, AZTEC Protocol, Bury Saint Edmunds, UK
### 摘要
> 多项式承诺方案（PCS）近来因在构建SNARKs中的关键作用而备受关注。PCS提供了承诺将多项式存储在有限域上并证明其在某些点上的求值的能力。简洁的PCS具有承诺和评估证明大小与多项式次数亚线性相关的特点。高效的PCS具有亚线性的证明验证。任何高效且简洁的PCS都可以用于构建具有类似安全性和效率特点的SNARK（在随机预言机模型下）。
> 
> 携带证明数据（PCD）使得一组参与方可以进行无限长的分布式计算，每一步都伴随着正确性证明。它推广了增量可验证计算，并且甚至可以用于构建SNARKs。然而，直到最近，构建PCD的唯一已知方法需要昂贵的SNARK递归。一个名为Halo的系统首次展示了一种基于Bulletproofs内积论证的新方法来构建PCD而无需SNARKs，因为它利用了内积论证的聚合属性。该构建过程是启发式的，因为它对Fiat-Shamir变换的具体实例进行了非黑盒使用。我们在此扩展该方法，以展示PCD可以从任何同态多项式承诺方案（PCS）（即使PCS的评估证明既不简洁也不高效）构建。实际上，Halo方法还适用于具有更一般属性的任何PCS，即能够将承诺的线性组合聚合成新的简洁承诺，并可以稍后揭示该线性组合的值。因此，我们的结果暗示了以前文献中未描述的SNARKs和PCD的新构建，并可作为未来构建的蓝图。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_23](https://doi.org/10.1007/978-3-030-84242-0_23)
## Proof-Carrying Data Without Succinct Arguments.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#proof-carrying-data-without-succinct-arguments) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#proof-carrying-data-without-succinct-arguments)**
### 作者
* Benedikt Bünz, Stanford University, Stanford, USA
* Alessandro Chiesa, UC Berkeley, Berkeley, USA
* William Lin, UC Berkeley, Berkeley, USA
* Pratyush Mishra, UC Berkeley, Berkeley, USA
* Nicholas Spooner, Boston University, Boston, USA
### 摘要
> 证明载体数据（PCD）是一种强大的密码学基元，使互不信任的各方能够进行无限期地分布式计算。已知构建PCD的方法基于简洁的非交互式知识论证（SNARKs），其具有简洁的验证器或简洁的累积方案。
> 
> 在本文中，我们展示了如何在不依赖SNARKs的情况下获得PCD。我们构建了一个PCD方案，给定任何具有拆分累积方案（例如，具有线性规模参数的方案）的非交互式知识论证，这是我们引入的一种弱形式累积方案。
> 
> 此外，我们构建了一个透明的非交互式知识论证，用于R1CS，其拆分累积可通过（少量的）群和字段操作进行验证。我们的构建在基于离散对数困难性的随机预言机模型下被证明是安全的，并且通过随机预言机启发式和上述结果，为PCD带来了实际的效率改进。
> 
> 在此过程中，我们构建了基于Pedersen承诺的Hadamard积的拆分累积方案，以及一个基于Pedersen承诺的简单多项式承诺方案。
> 
> 我们的结果得到了模块化和高效的实现支持。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_24](https://doi.org/10.1007/978-3-030-84242-0_24)
## Subquadratic SNARGs in the Random Oracle Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#subquadratic-snargs-in-the-random-oracle-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#subquadratic-snargs-in-the-random-oracle-model)**
### 作者
* Alessandro Chiesa, UC Berkeley, Berkeley, USA
* Eylon Yogev, BU, Boston, USA
* Eylon Yogev, TAU, Tel Aviv, Israel
### 摘要
> 在一篇具有开创性意义的研究中，Micali（FOCS 1994）在随机神谕模型（ROM）中提出了第一个简洁非交互式论证（SNARG）。该构造将PCP和密码学承诺相结合，并具有几个吸引人的特点：它可能是后量子的；可以通过轻量级密码学启发式实例化；并且具有透明（公共硬币）参数设置。然而，它也有一个重要的缺点：较大的论证大小。
> 
> 在这项工作中，我们提供了一个新的构造，以实现更小的论证大小。这是自25年前首次引入Micali构造以来的首次进展。
> 
> 在ROM中，如果每个t次查询的恶意证明者能够以最多\(\mathsf {\epsilon }\)的概率使验证者信服于错误的陈述，则SNARG是\((t,\mathsf {\epsilon })\)-安全的。对于\((t,\mathsf {\epsilon })\)安全性，所有已知ROM中SNARG的论证大小（包括Micali的构造）为\(\tilde{O}((\log (t/\mathsf {\epsilon }))^2)\)比特，即使假设超出当前技术的概率性证明的猜想也是如此。在实践中，这些成本导致SNARG远比基于其他（前量子和昂贵）工具的构造要大得多。这使得许多人认为ROM中的SNARG本质上是二次的。
> 
> 我们证明了这不是事实。我们提出了一种在ROM中具有次二次论证大小的SNARG：\(\tilde{O}(\log (t/\mathsf {\epsilon }) \cdot \log t)\)。我们的构造依赖于PCP的强完备性概念和承诺的弱绑定概念。我们希望我们的工作为理解在ROM中是否可以实现线性论证大小（即\(O(\log (t/\mathsf {\epsilon }))\)）铺平道路。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_25](https://doi.org/10.1007/978-3-030-84242-0_25)
## Sumcheck Arguments and Their Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#sumcheck-arguments-and-their-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#sumcheck-arguments-and-their-applications)**
### 作者
* Jonathan Bootle, IBM Research – Zurich, Zurich, Switzerland
* Alessandro Chiesa, UC Berkeley, Berkeley, USA
* Katerina Sotiraki, UC Berkeley, Berkeley, USA
### 摘要
> 我们引入一类互动协议，称为 Sumcheck Arguments，该协议在 Pedersen 承诺的折叠技术（Bootle 等人的 EUROCRYPT 2016）和 Sumcheck Protocol（Lund 等人的 JACM 1992）之间建立了新的连接。我们定义了覆盖许多有趣示例的模块化“Sumcheck-Friendly”承诺计划类，并展示了将 Sumcheck Protocol 应用于与承诺计划相关的多项式可得到承诺打开的简明知识证明。在此基础上，我们还获得了针对某些特定环上 NP 完全语言 R1CS 的简洁论证。
> 
> Sumcheck Arguments 让我们能够将许多迥异的密码学设置中的先前工作恢复为特殊情况，包括离散对数、配对、未知阶群和格等，为理解它们提供一个框架。此外，我们还回答了以前作品中提出的一些开放性问题，例如从 SIS 假设中获得基于格的简洁论证，用于解决环上的可满

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_26](https://doi.org/10.1007/978-3-030-84242-0_26)
## An Algebraic Framework for Universal and Updatable SNARKs.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#an-algebraic-framework-for-universal-and-updatable-snarks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#an-algebraic-framework-for-universal-and-updatable-snarks)**
### 作者
* Carla Ràfols, Universitat Pompeu Fabra, Barcelona, Spain
* Arantxa Zapico, Universitat Pompeu Fabra, Barcelona, Spain
* Carla Ràfols, Cybercat, Barcelona, Spain
### 摘要
> 我们介绍了可验证子空间采样论证，这是一个新的信息理论交互式证明系统，其中证明者展示一个向量是按照验证者的硬币在子空间中采样的。我们展示了这个基元提供了一个统一的视角，解释了大多数通用和可更新的基于配对的（零知识）SNARKs构造的技术核心。这种特征被扩展到一个完全代数的框架，以模块化方式设计这些SNARKs。我们提出了新的CSS论证构造，导致具有不同性能权衡的SNARKs。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_27](https://doi.org/10.1007/978-3-030-84242-0_27)
