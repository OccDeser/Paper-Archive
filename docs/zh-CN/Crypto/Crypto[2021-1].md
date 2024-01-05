# Crypto[2021-1]
## On the Possibility of Basing Cryptography on EXP≠ BPP.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#on-the-possibility-of-basing-cryptography-on-exp-bpp) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#on-the-possibility-of-basing-cryptography-on-exp-bpp)**
### 作者
* Yanyi Liu, Cornell University, Ithaca, USA
* Rafael Pass, Cornell Tech, New York, USA
### 摘要
> 刘和帕斯（FOCS'20）最近展示了单向函数（OWFs）的存在与有时间边界的科尔莫哥洛夫复杂性问题的轻微平均情况困难之间的等价关系。在这项工作中，我们建立了类似的等价关系，但与一种不同形式的有时间边界的科尔莫哥洛夫复杂性（即列文的科尔莫哥洛夫复杂性）相关，其困难程度与\(\mathsf{EXP}\ne \mathsf{BPP}\)问题密切相关。更具体地说，令Kt(x)表示字符串x的列文-科尔莫哥洛夫复杂性，即\(Kt(x) = \min _{{\varPi }\in \{0,1\}^*, t \in \mathbb {N}}\{|{\varPi }| + \lceil \log t \rceil : U({\varPi }, 1^t) = x\}\)，其中U是通用图灵机，\(U({\varPi },1^t)\)表示程序\(\varPi\)经过t步骤后的输出。令\(\mathsf{MKtP}\)表示满足\(Kt(x) \le k\)属性的一对(x, k)的语言。我们证明了：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_2](https://doi.org/10.1007/978-3-030-84242-0_2)
## Linear Cryptanalysis of FF3-1 and FEA.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#linear-cryptanalysis-of-ff3-1-and-fea) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#linear-cryptanalysis-of-ff3-1-and-fea)**
### 作者
* Tim Beyne, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> 使用线性密码分析对通用小域费斯妥尔密码中交替轮调的攻击得到了改进。这导致对美国格式保持加密标准FF3-1和韩国标准FEA-1、FEA-2的实际可区分和消息恢复攻击。所提出的对FF3-1和FEA-1的攻击的数据复杂度为\(\widetilde{\mathcal {O}}(N^{r/2 - 1.5})\)，其中\(N^2\)是域大小，r是轮数。例如，当\(N = 10^3\)时，可以使用\(2^{23}\)个加密查询将FF3-1与理想的可调整块密码区分开。具有类似优势的消息左半部分恢复需要\(2^{24}\)个数据。FF3-1的分析作为对群\(\mathbb {Z}/N\mathbb {Z}\)上（广义）线性密码分析的一个有趣真实世界应用。

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
> HFE加密系统是最受欢迎的多元方案之一。在数字签名领域尤其如此，HFEv变体提供了短签名和高性能。最近，HFEv签名方案的一个实例，名为GeMSS，被选为NIST后量子密码（PQC）标准化项目第三轮中的替代候选签名方案之一。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_4](https://doi.org/10.1007/978-3-030-84242-0_4)
## Three Halves Make a Whole? Beating the Half-Gates Lower Bound for Garbled Circuits.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#three-halves-make-a-whole-beating-the-half-gates-lower-bound-for-garbled-circuits) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#three-halves-make-a-whole-beating-the-half-gates-lower-bound-for-garbled-circuits)**
### 作者
* Mike Rosulek, Oregon State University, Corvallis, USA
* Lawrence Roy, Oregon State University, Corvallis, USA
### 摘要
> 我们描述了一种布尔电路的伪装方案，其中XOR门是免费的，而AND门需要传输\(1.5\kappa + 5\)位通信。这改进了Zahur、Rosulek和Evans（Eurocrypt 2015）的最新“半门”方案，其中XOR门是免费的，而AND门的成本为\(2\kappa \)位。半门论文证明了每个AND门至少需要\(2\kappa \)位，在该模型中捕捉到当时所有已知的伪装技术。我们通过一个称为切割和切片的新颖技术绕过了这个下界，该技术将线标签切割成两半并分别操作。我们的方法是第一个在与免费XOR完全兼容的情况下绕过这个下界的方法，因此可以直接替代半门方案。我们的构建从类似于之前的免费XOR伪装（循环相关稳健散列）的假设中被证明是安全的，并且只比半门多使用了一点计算量。

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
> Schnorr签名方案由于其线性签名方程，允许优雅的阈值签名协议。然而，每个新的签名都消耗了新鲜的随机数，在实践中可能成为主要的攻击向量。在部署中，随机性来源通常要么不可靠，要么需要状态连续性，也就是说，能够抵御回滚的可靠新鲜状态。状态连续性在实践中非常难以保证，原因是由软件错误、恶意行为者或电源中断引起的系统崩溃（Parno等人，S&P '11）。对于Schnorr变种（如EdDSA）来说，这不是问题，因为它被规定为根据消息和秘密密钥确定地派生随机数。然而，在阈值场景中将这些好处转化为现实是具有挑战性的，特别是构建一个阈值Schnorr方案，在其中签名既不需要各方消耗新鲜随机数，也不需要更新长期秘密状态。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_6](https://doi.org/10.1007/978-3-030-84242-0_6)
## Two-Round Trip Schnorr Multi-signatures via Delinearized Witnesses.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#two-round-trip-schnorr-multi-signatures-via-delinearized-witnesses) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#two-round-trip-schnorr-multi-signatures-via-delinearized-witnesses)**
### 作者
* Handan Kılınç Alper, Web3 Foundation, Zug, Switzerland
* Jeffrey Burdges, Web3 Foundation, Zug, Switzerland
### 摘要
> 我们通过对每个签名者提供的两个预承诺进行非线性化构建了一个基于Schnorr的两轮签名方案（DWMS）。在本文引入的一次以上离散对数问题和2-纠缠和问题的困难性假设下，DWMS是一个在代数群模型（AGM）和随机预言机模型（ROM）下安全的签名方案。我们的新的m-纠缠和问题使用相关联的群在一个标量域中改进了k-和问题。我们在AGM中假设相关联的群中离散对数问题的困难性，证明了我们新问题的困难性。我们相信我们的新问题简化了使用承诺非线性化的多签名方案的安全证明。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_7](https://doi.org/10.1007/978-3-030-84242-0_7)
## MuSig2: Simple Two-Round Schnorr Multi-signatures.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#musig2-simple-two-round-schnorr-multi-signatures) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#musig2-simple-two-round-schnorr-multi-signatures)**
### 作者
* Jonas Nick, Blockstream, Victoria, Canada
* Tim Ruffing, Blockstream, Victoria, Canada
* Yannick Seurin, ANSSI, Paris, France
### 摘要
> 多重签名使一组签名者能够对一个共同的消息产生联合签名。最近，Drijvers 等人（S&P'19）表明在纯离散对数（DL）设置（不涉及配对）下，迄今为止提出的所有两轮多重签名方案都存在并发签名会话中的不安全性。虽然 Drijvers 等人提出了一个安全的两轮方案，但这种轮数上的效率付出了比 Schnorr 签名更大一倍以上的签名大小作为代价，由于其实用性，Schnorr 签名正变得流行（例如，它们可能会在比特币中被采用）。如果需要一个可以替代 Schnorr 签名的多重签名方案，那么在实践中只能选择三轮方案或者顺序签名会话，这两个选项都是不理想的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_8](https://doi.org/10.1007/978-3-030-84242-0_8)
## Tighter Security for Schnorr Identification and Signatures: A High-Moment Forking Lemma for ${\varSigma }$-Protocols.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#tighter-security-for-schnorr-identification-and-signatures-a-high-moment-forking-lemma-for-varsigma-protocols) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#tighter-security-for-schnorr-identification-and-signatures-a-high-moment-forking-lemma-for-varsigma-protocols)**
### 作者
* Lior Rotem, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Gil Segev, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
### 摘要
> Schnorr身份验证和签名方案是过去三十年中最有影响的加密协议之一。不幸的是，虽然这两个方案上最知名的攻击是通过离散对数计算实现的，但已知的建立在离散对数问题困难性上的安全方法遇到了“平方根壁垒”。“平方根壁垒”的意思是，在任何一个阶数为p的群中，尽管Shoup的离散对数问题通用困难性结论被认为是成立的（因此用于设置具体的安全参数），但对Schnorr身份验证和签名方案的已知的t时间攻击成功概率仅为\[t ^ 2 / p\]，而现有的安全证明仅排除了成功概率为\[(t^2/p)^{1/2}\]和\[(q_{H} \cdot t^2/p)^{1/2}\]的攻击，其中$q_H$表示攻击者发出的随机预言查询数量。

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
> 我们介绍了一种新型通用环签名构造，称为DualRing，它可以由多个规范的身份验证方案（如Schnorr身份验证）构建。DualRing与经典的环签名不同，因为它形成了两个环：承诺环和挑战环。它与基于累加器或签名者索引的零知识证明的常见环签名方法具有结构上的差异。相比之下，DualRing具有许多独特的优点。

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
> 环签名允许用户代表一个“环”中的签署者签署信息，同时隐藏签署者的真实身份。由于环签名所保证的匿名程度与环的大小成正比，密码学中的一个重要目标是研究能够将签名的大小最小化，使其成为环成员数量的函数。

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
> 最近，Bitansky和Shmueli（STOC'20）在一项开创性的工作中，首次构造了一个针对量子攻击安全的恒定轮零知识证明的\(\mathbf{NP}\)。然而，与经典对应物相比，他们的构造存在一些缺点。具体而言，他们的构造仅实现了计算上的完备性，需要对学习带错误（QLWE假设）和量子全同态加密（QFHE）的量子难度做出强假设，并依赖于非黑匣子模拟。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_12](https://doi.org/10.1007/978-3-030-84242-0_12)
## On the Concurrent Composition of Quantum Zero-Knowledge.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#on-the-concurrent-composition-of-quantum-zero-knowledge) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#on-the-concurrent-composition-of-quantum-zero-knowledge)**
### 作者
* Prabhanjan Ananth, UCSB, Santa Barbara, USA
* Kai-Min Chung, Academia Sinica, Taipei City, Taiwan
* Rolando L. La Placa, MIT, Cambridge, USA
### 摘要
> 我们研究与量子多项式时间验证者（称为量子零知识）在并发组合环境中的零知识安全概念。尽管在经典环境中已经广泛研究，但在量子环境中的并发组合几乎没有研究。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_13](https://doi.org/10.1007/978-3-030-84242-0_13)
## Multi-theorem Designated-Verifier NIZK for QMA.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#multi-theorem-designated-verifier-nizk-for-qma) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#multi-theorem-designated-verifier-nizk-for-qma)**
### 作者
* Omri Shmueli, Tel Aviv University, Tel Aviv, Israel
### 摘要
> 我们提出了一个基于“学习困难问题”假设的具有多定理安全性的QMA指定验证者非交互零知识论证系统。之前针对QMA的类似协议仅具备单定理安全性。同时，我们还放松了之前作品中所需的设置假设。我们在恶意指定验证者（MDV-NIZK）模型中证明了安全性（Quach、Rothblum和Wichs，EUROCRYPT 2019），其中设置包括一个相互信任的随机串和一个不可信的验证者公钥。

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
> 我们构建了第一批针对恶意对手具有安全性的、常数回合的量子安全计算协议，并分别应用于两方（2PQC）和多方（MPQC）设置中。我们的协议是在共用随机字符串（CRS）

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
> 杜莱克等人最近的研究结果（EUROCRYPT 2020）展示了一种安全的协议，可以在没有可靠多数的情况下计算任何量子电路。然而，他们的协议容易受到“拒绝服务”攻击，并且即使只有一个被篡改的方可以强制中止。我们提出了第一个允许在中止的情况下识别出被篡改方身份的量子协议。此外，我们的协议是第一个具有量子通信轮数与电路复杂度无关的协议。此外，如果存在一个后量子安全的经典协议，其轮数与电路复杂度无关，那么我们的协议也具有这个特性。我们的协议在假设具有对数深度解密电路的经典量子抵抗完全同态加密方案存在的情况下是安全的。有趣的是，我们的构造也允许将量子公平安全计算转化为经典公平安全计算。

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
> 我们证明量子难题单向函数暗示模拟安全的量子无意传输（QOT），已知它足以安全计算任意量子功能。此外，我们的构造仅对量子难题单向函数进行黑盒使用。

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
> 虚拟黑盒混淆是一种强大的密码学基元：它对电路进行加密同时保持其完整的输入/输出功能。Barak等人在2001年的Crypto会议上取得了一个引人注目的结果，结果表明，一种将经典电路混淆成经典电路的通用混淆器是不存在的。绕过这种不可能性结果的一个有望的方向是将经典电路混淆成量子态，这有可能更好地隐藏关于混淆电路的信息。我们展示了，在学习有错误(Learning With Errors，LWE)对量子计算机而言是困难的假设下，这种将经典电路混淆成量子黑盒的方案通常是不可能的。在此过程中，我们展示了在存在相关经典辅助输入的情况下，即使是小类经典点函数也无法进行量子虚拟黑盒混淆。

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
> 量子拷贝保护利用量子态的不可克隆性构建了被证明无法被盗版的量子软件。拷贝保护将非常有用，但不幸的是，对于一般情况下如何实现它还知之甚少。在本研究中，我们通过给出以下结果，朝着这一目标取得了进展：

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
> 2012年，Aaronson和Christiano提出了隐藏子空间状态的概念，用于构建公钥量子货币[STOC '12]。自那时以来，这个想法已经应用于实现其他几种具有一定程度不可克隆性的密码原语。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_20](https://doi.org/10.1007/978-3-030-84242-0_20)
## On Tight Quantum Security of HMAC and NMAC in the Quantum Random Oracle Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#on-tight-quantum-security-of-hmac-and-nmac-in-the-quantum-random-oracle-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#on-tight-quantum-security-of-hmac-and-nmac-in-the-quantum-random-oracle-model)**
### 作者
* Akinori Hosoyamada, NTT Secure Platform Laboratories, Tokyo, Japan
* Akinori Hosoyamada, Nagoya University, Nagoya, Japan
* Tetsu Iwata, Nagoya University, Nagoya, Japan
### 摘要
> HMAC和NMAC是将Merkle-Damgård哈希函数转换为消息认证码（MACs）或伪随机函数（PRFs）的最基本和重要的构造。在量子环境中，Song和Yun在CRYPTO 2017中证明了，在基本压缩函数是量子伪随机函数（qPRF）的标准假设下，HMAC和NMAC是量子伪随机函数（qPRFs）。他们的证明确保了当HMAC和NMAC的输出长度为n位时，在\(O(2^{n/5})\)或\(O(2^{n/8})\)量子查询下的安全性。然而，在可证明的安全性界限和使用\(O(2^{n/3})\)量子查询的简单区分攻击之间存在差距。本文解决了这个差距的问题。我们展示了在量子随机神谕模型中，从随机函数区分HMAC或NMAC所需的量子查询次数的紧密界限是\(\Theta (2^{n/3})\)。在这个模型中，压缩函数被建模为量子随机神谕。为了给出紧密的量子界限，我们基于Zhandry的压缩神谕技术的替代形式，引入了一种新的证明技术，专注于量子查询记录的对称性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_21](https://doi.org/10.1007/978-3-030-84242-0_21)
## Quantum Collision Attacks on Reduced SHA-256 and SHA-512.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#quantum-collision-attacks-on-reduced-sha-256-and-sha-512) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#quantum-collision-attacks-on-reduced-sha-256-and-sha-512)**
### 作者
* Akinori Hosoyamada, NTT Secure Platform Laboratories, Tokyo, Japan
* Yu Sasaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Akinori Hosoyamada, Nagoya University, Nagoya, Japan
### 摘要
> 在本文中，我们首次研究了关于SHA-256和SHA-512的专用量子碰撞攻击。这些攻击分别达到了38步和39步，明显改进了经典攻击的31步和27步。两种攻击都采用了前期工作中将许多半自由起始碰撞转化为2块碰撞的框架，并且在时间-空间折衷的成本度量上比通用攻击更快。我们观察到在量子环境下所需的半自由起始碰撞数量可以减少，这使得我们能够将之前经典的38步和39步半自由起始碰撞转化为一次碰撞。我们攻击的思想很简单，并且同样适用于其他密码哈希函数。

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
> 多项式承诺方案（PCS）近来因其在构建SNARK中的关键作用而备受关注。PCS提供了在有限域上对多项式进行承诺并证明其在特定点上的求值的能力。简洁的PCS使得承诺和求值证明的大小与多项式的次数成亚线性关系。高效的PCS拥有亚线性的证明验证。任何高效且简洁的PCS都可以用于构建具有类似安全性和效率特征的SNARK（在随机预言机模型下）。

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
> 可证明数据（Proof-carrying data，PCD）是一种强大的加密原语，能够使相互不信任的各方能够进行无限运行的分布式计算。已知的构建PCD的方法基于简洁的非交互式知识证明（SNARKs），其具有简洁的验证器或简洁的累积方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_24](https://doi.org/10.1007/978-3-030-84242-0_24)
## Subquadratic SNARGs in the Random Oracle Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#subquadratic-snargs-in-the-random-oracle-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#subquadratic-snargs-in-the-random-oracle-model)**
### 作者
* Alessandro Chiesa, UC Berkeley, Berkeley, USA
* Eylon Yogev, BU, Boston, USA
* Eylon Yogev, TAU, Tel Aviv, Israel
### 摘要
> 在一篇开创性的工作中，Micali（FOCS 1994）在随机预言模型（ROM）中首次给出了第一个简洁非交互式论证（SNARG）。该构造结合了PCP和密码学承诺，并具有几个吸引人的特点：它很可能是后量子的；可以通过轻量级密码学启发式地实例化；并且具有透明（公共硬币）的参数设置。然而，它也有一个显著的缺点：大型的论证大小。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_25](https://doi.org/10.1007/978-3-030-84242-0_25)
## Sumcheck Arguments and Their Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#sumcheck-arguments-and-their-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#sumcheck-arguments-and-their-applications)**
### 作者
* Jonathan Bootle, IBM Research – Zurich, Zurich, Switzerland
* Alessandro Chiesa, UC Berkeley, Berkeley, USA
* Katerina Sotiraki, UC Berkeley, Berkeley, USA
### 摘要
> 我们引入了一类交互式协议，称为Sumcheck Arguments，它建立了Sumcheck Protocol（Lund等人，JACM 1992）和Pedersen承诺的折叠技术（Bootle等人，EUROCRYPT 2016）之间的新颖联系。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_26](https://doi.org/10.1007/978-3-030-84242-0_26)
## An Algebraic Framework for Universal and Updatable SNARKs.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-1].md#an-algebraic-framework-for-universal-and-updatable-snarks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-1].md#an-algebraic-framework-for-universal-and-updatable-snarks)**
### 作者
* Carla Ràfols, Universitat Pompeu Fabra, Barcelona, Spain
* Arantxa Zapico, Universitat Pompeu Fabra, Barcelona, Spain
* Carla Ràfols, Cybercat, Barcelona, Spain
### 摘要
> 我们介绍可检查的子空间采样论证，这是一种新的信息论交互式证明系统，其中证明者展示了一个向量根据验证者的硬币在一个子空间中被采样。我们展示了这种原语提供了一个统一的视角，解释了大多数通用的和可更新的基于配对的（zk）SNARKs构造的技术核心。这种刻画被扩展到一个全面的代数框架，用于以模块化的方式设计这样的SNARKs。我们提出了新的CSS论证构造，导致了具有不同性能权衡的SNARKs。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_27](https://doi.org/10.1007/978-3-030-84242-0_27)
