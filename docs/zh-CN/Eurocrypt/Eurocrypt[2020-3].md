# Eurocrypt[2020-3]
## (One) Failure Is Not an Option: Bootstrapping the Search for Failures in Lattice-Based Encryption Schemes.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#one-failure-is-not-an-option-bootstrapping-the-search-for-failures-in-lattice-based-encryption-schemes) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#one-failure-is-not-an-option-bootstrapping-the-search-for-failures-in-lattice-based-encryption-schemes)**
### 作者
* Jan-Pieter D’Anvers, imec-COSIC, KU Leuven, Leuven, Belgium
* Mélissa Rossi, ANSSI, Paris, France
* Mélissa Rossi, ENS Paris, CNRS, PSL University, Paris, France
* Mélissa Rossi, Thales, Gennevilliers, France
* Mélissa Rossi, Inria, Paris, France
* Fernando Virdia, Information Security Group, Royal Holloway, University of London, Egham, UK
### 摘要
> 格基加密方案经常面临解密失败的可能性，即有效的加密被错误地解密。这样的失败，如果数量很大，会泄露关于秘密密钥的信息，从而使得纯格降维之外的攻击策略成为可能。扩展了D'Anvers等人在2019年PKC中的“失败增强”技术，我们提出了一种称为“方向性失败增强”的方法，该方法使用先前找到的“失败的密文”来加速寻找新的失败密文。我们详细分析了格在多项式环模块上定义的情况，该环模块由\(\langle X^{N} + 1 \rangle \)商掉，并在一个简单的Mod-LWE基础方案上进行了演示，该方案参数化为Kyber768/Saber。我们展示了对于给定的秘密密钥（单目标设置），在已经找到一个或多个失败的密文后，寻找额外失败密文的成本可以得到显著加速。因此，我们证明，在这种单目标模型中，这些方案应该设计得很难甚至获得一个解密失败。此外，在一个更广泛的安全模型中，当存在许多目标秘密密钥（多目标设置）时，我们的攻击大大超越了现有技术水平。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_1](https://doi.org/10.1007/978-3-030-45727-3_1)
## Key Recovery from Gram-Schmidt Norm Leakage in Hash-and-Sign Signatures over NTRU Lattices.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#key-recovery-from-gram-schmidt-norm-leakage-in-hash-and-sign-signatures-over-ntru-lattices) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#key-recovery-from-gram-schmidt-norm-leakage-in-hash-and-sign-signatures-over-ntru-lattices)**
### 作者
* Pierre-Alain Fouque, Univ Rennes, CNRS, IRISA, Rennes, France
* Paul Kirchner, Univ Rennes, CNRS, IRISA, Rennes, France
* Yang Yu, Univ Rennes, CNRS, IRISA, Rennes, France
* Mehdi Tibouchi, NTT Corporation, Tokyo, Japan
* Alexandre Wallet, NTT Corporation, Tokyo, Japan
### 摘要
> 在这篇论文中，我们开始研究哈希和签名格基密钥的边信道泄露问题，特别关注原始GPV格陷门签名范例的两种高效实现，即NIST第二轮候选方案Falcon及其更简单的前身DLP。这两种方案都是在NTRU格上实现了GPV签名方案，在一般格的情况下实现了巨大的加速效果。我们的研究结果主要有三个方面。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_2](https://doi.org/10.1007/978-3-030-45727-3_2)
## An Algebraic Attack on Rank Metric Code-Based Cryptosystems.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#an-algebraic-attack-on-rank-metric-code-based-cryptosystems) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#an-algebraic-attack-on-rank-metric-code-based-cryptosystems)**
### 作者
* Magali Bardet, LITIS, University of Rouen Normandie, Mont-Saint-Aignan, France
* Magali Bardet, Inria, 2 rue Simone Iff, 75012, Paris, France
* Pierre Briaud, Inria, 2 rue Simone Iff, 75012, Paris, France
* Jean-Pierre Tillich, Inria, 2 rue Simone Iff, 75012, Paris, France
* Maxime Bros, Univ. Limoges, CNRS, XLIM, UMR 7252, 87000, Limoges, France
* Philippe Gaborit, Univ. Limoges, CNRS, XLIM, UMR 7252, 87000, Limoges, France
* Vincent Neiger, Univ. Limoges, CNRS, XLIM, UMR 7252, 87000, Limoges, France
* Olivier Ruatta, Univ. Limoges, CNRS, XLIM, UMR 7252, 87000, Limoges, France
### 摘要
> **密码学中基于秩度量的编码的排名度量解码问题**是密码学中考虑的主要问题。最近提出了一些基于此问题或其准循环版本的非常高效方案，例如在NIST后量子密码标准化流程的第二轮中的ROLLO和RQC方案。尽管这个问题的组合攻击已经得到了广泛研究并且现在似乎已经被很好地理解，但对于代数攻击情况则不是那么令人满意，先前的研究基本上暗示代数攻击对于加密参数是无效的。在本文中，我们从Ourivski和Johansson关于该问题代数建模的基础上，展示了如何通过添加易于计算的方程来扩充该系统，从而使得扩充后的系统通过Gröbner基解决得更快。这是因为扩充后的系统在参数相关的情况下具有解决度为r，\(r+1\)或\(r+2\)，其中r是秩重量，我们通过扩展Verbel等人（PQCrypto 2019）在MinRank问题上的结果来证明了这一点；对于目标秩r，Verbel等人将解决度降低到\(r+2\)，对于一些有利的情况，他们称之为“超定”的情况，甚至更低。我们给出了该方法的复杂性界限以及使用magma实现的实际计时。这改进了先前已知的Gröbner基和（非量子）组合方法的复杂性估计，例如对于声称安全性为256位的ROLLO-I-256，可以通过200位攻击来实现。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_3](https://doi.org/10.1007/978-3-030-45727-3_3)
## Low Weight Discrete Logarithm and Subset Sum in 20.65n with Polynomial Memory.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#low-weight-discrete-logarithm-and-subset-sum-in-20-65n-with-polynomial-memory) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#low-weight-discrete-logarithm-and-subset-sum-in-20-65n-with-polynomial-memory)**
### 作者
* Andre Esser, Ruhr University Bochum, Bochum, Germany
* Alexander May, Ruhr University Bochum, Bochum, Germany
### 摘要
> 在任何阿贝尔群 G 中，我们提出了两种启发式多项式内存碰撞查找算法用于低 Hamming 权重离散对数问题。第一种方法是将 Becker-Coron-Joux (BCJ) 算法直接应用于离散对数环境的一种改编形式。第二种方法通过更复杂的表示技术应用以及一些新的 Markov 链分析，在所有可能的权重上对这种改编形式进行了明显的优化。与其他低权重离散对数算法相比，我们的第二个算法的时间复杂度在一般离散对数实例中插值到了Pollard的 \(|G|^{\frac{1}{2}}\) 上限。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_4](https://doi.org/10.1007/978-3-030-45727-3_4)
## Continuous Verifiable Delay Functions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#continuous-verifiable-delay-functions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#continuous-verifiable-delay-functions)**
### 作者
* Naomi Ephraim, Cornell Tech, New York, NY, 10044, USA
* Cody Freitag, Cornell Tech, New York, NY, 10044, USA
* Rafael Pass, Cornell Tech, New York, NY, 10044, USA
* Ilan Komargodski, NTT Research, Palo Alto, CA, 94303, USA
### 摘要
> 我们引入了连续可验证的延迟函数（continuous verifiable delay function，cVDF）的概念：一个函数 g 具有以下特性：(a) 迭代顺序——意味着对于随机输入，计算迭代 \(g^{(t)}\) 的时间大约是计算 g 的 t 倍，即使使用多个并行处理器也一样；(b) （迭代）可验证——\(g^{(t)}\) 输出可以在时间上高效地进行验证，这个时间基本上与 t 无关。换句话说，迭代函数 \(g^{(t)}\) 是一个可验证的延迟函数（verifiable delay function，VDF）（Boneh 等人，CRYPTO '18），其具备的特性是计算过程的中间步骤（即 \(g^{(t')}\) 对于 \(t'<t\)）能够公开且持续地进行验证。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_5](https://doi.org/10.1007/978-3-030-45727-3_5)
## Generic-Group Delay Functions Require Hidden-Order Groups.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#generic-group-delay-functions-require-hidden-order-groups) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#generic-group-delay-functions-require-hidden-order-groups)**
### 作者
* Lior Rotem, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Gil Segev, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Ido Shahaf, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
### 摘要
> 尽管延迟函数在时间锁难题的经典概念和可验证延迟函数的最近概念中起着根本性的重要作用，但目前为止，唯一已知的延迟函数提供足够结构以实现这两个概念，并且具有实际可行性的是Rivest、Shamir和Wagner的“迭代平方”构造。然而，这种构造基于在隐藏阶群中的较强假设，如RSA群（需要可信设置）或虚数二次数域的群类（在密码学角度上仍不完全研究）。二十多年来，构造在已知阶群中的延迟函数，允许多种广为研究的实例化，一直是密码学界所难以解决的挑战。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_6](https://doi.org/10.1007/978-3-030-45727-3_6)
## Sigma Protocols for MQ, PKP and SIS, and Fishy Signature Schemes.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#sigma-protocols-for-mq-pkp-and-sis-and-fishy-signature-schemes) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#sigma-protocols-for-mq-pkp-and-sis-and-fishy-signature-schemes)**
### 作者
* Ward Beullens, imec-COSIC KU Leuven, Kasteelpark Arenberg 10 - bus 2452, 3001, Heverlee, Belgium
### 摘要
> 这项工作提出了用于证明某知识的Sigma协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_7](https://doi.org/10.1007/978-3-030-45727-3_7)
## Signatures from Sequential-OR Proofs.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#signatures-from-sequential-or-proofs) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#signatures-from-sequential-or-proofs)**
### 作者
* Marc Fischlin, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Patrick Harasser, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Christian Janson, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
### 摘要
> OR证明使证明者能够展示其已掌握多个陈述中其中一个的见证，或者多个陈述中的一个为真。OR证明是一种非常多功能的工具，可用于增强安全性属性，设计群组和环签名方案，并实现严密的安全性。构建OR证明的常见技术基于Cramer、Damgård和Schoenmakers（CRYPTO’94）提出的方法，其中证明者将验证者的挑战分割为随机份额，并并行计算每个陈述的证明。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_8](https://doi.org/10.1007/978-3-030-45727-3_8)
## Compact Adaptively Secure ABE from k-Lin: Beyond NC1 and Towards NL.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#compact-adaptively-secure-abe-from-k-lin-beyond-nc1-and-towards-nl) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#compact-adaptively-secure-abe-from-k-lin-beyond-nc1-and-towards-nl)**
### 作者
* Huijia Lin, University of Washington, Seattle, USA
* Ji Luo, University of Washington, Seattle, USA
### 摘要
> 我们提出了一个构建紧凑且自适应安全属性基加密（ABE）方案的新的普适框架，该方案采用k-Lin在非对称双线性配对群中。先前唯一一种同时从静态假设实现紧凑性和自适应安全的构建方法[Kowalczyk和Wee，Eurocrypt ’19]仅支持由布尔公式表示的策略。我们的框架使得支持由算术分支程序表示的更具表现力的策略成为可能。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_9](https://doi.org/10.1007/978-3-030-45727-3_9)
## Adaptively Secure ABE for DFA from k-Lin and More.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#adaptively-secure-abe-for-dfa-from-k-lin-and-more) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#adaptively-secure-abe-for-dfa-from-k-lin-and-more)**
### 作者
* Junqing Gong, East China Normal University, Shanghai, China
* Junqing Gong, CNRS, ENS and PSL, Paris, France
* Hoeteck Wee, CNRS, ENS and PSL, Paris, France
### 摘要
> 在这项研究中，我们提出了：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_10](https://doi.org/10.1007/978-3-030-45727-3_10)
## Tornado: Automatic Generation of Probing-Secure Masked Bitsliced Implementations.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#tornado-automatic-generation-of-probing-secure-masked-bitsliced-implementations) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#tornado-automatic-generation-of-probing-secure-masked-bitsliced-implementations)**
### 作者
* Sonia Belaïd, CryptoExperts, Paris, France
* Matthieu Rivain, CryptoExperts, Paris, France
* Raphaël Wintersdorff, CryptoExperts, Paris, France
* Pierre-Évariste Dagand, Sorbonne Université, Paris, France
* Darius Mercadier, Sorbonne Université, Paris, France
### 摘要
> 在现实世界中部署的加密实现通常旨在在保持合理性能的同时，针对强大的侧信道攻击类别实现（可证明的）安全。去年在亚洲密码学会议上，提出了一种新的形式验证工具，称为tightPROVE，用于准确确定任何给定安全次序t下的遮蔽实现是否在广泛部署的侵入安全模型中安全。最近还提出了一种名为Usuba的编译器，用于自动生成比特分片实现的密码原语。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_11](https://doi.org/10.1007/978-3-030-45727-3_11)
## Side-Channel Masking with Pseudo-Random Generator.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#side-channel-masking-with-pseudo-random-generator) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#side-channel-masking-with-pseudo-random-generator)**
### 作者
* Jean-Sébastien Coron, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Aurélien Greuet, IDEMIA, Courbevoie, France
* Rina Zeitoun, IDEMIA, Courbevoie, France
### 摘要
> 高级掩蔽对抗侧信道攻击通常在其执行过程中需要大量的随机性。为了对抗t次探测，传统的ISW对策需要\(\mathcal{O}(t^2 s)\)个随机比特，其中s是电路的大小。然而，在实践中运行真随机数生成器(TRNG)可能会很昂贵，并且成为嵌入式设备的瓶颈。在[IKL+13]中，作者们引入了强健伪随机数生成器(PRG)的概念，该生成器必须在最多探测t个线路的对手攻击下仍然保持安全。他们证明了在私有电路中嵌入一个强健PRG时，随机比特的数量可以减少到\(\mathcal{\tilde{O}}(t^4)\)，即与电路的大小s无关（上限为对数因子）。使用二分图扩展图，这可以进一步减少到\(\mathcal{\tilde{O}}(t^{3+\varepsilon })\)；然而，结果的构造是不实际的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_12](https://doi.org/10.1007/978-3-030-45727-3_12)
## Compact NIZKs from Standard Assumptions on Bilinear Maps.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#compact-nizks-from-standard-assumptions-on-bilinear-maps) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#compact-nizks-from-standard-assumptions-on-bilinear-maps)**
### 作者
* Shuichi Katsumata, AIST, Tokyo, Japan
* Shota Yamada, AIST, Tokyo, Japan
* Ryo Nishimaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
### 摘要
> 非交互式零知识（NIZK）协议使证明者能够通过发送一条单一消息来说服验证者真实陈述的真实性，同时不泄露任何其他信息。本文的主要重点是基于标准假设探索适用于所有\(\mathbf{NP}\)语言的短配对NIZK。在这种情况下，Groth、Ostrovsky和Sahai（J.ACM'12）（GOS-NIZK）的开创性工作仍被认为是最先进的。尽管相当高效，但GOS-NIZK的一个缺点是证明大小与计算\(\mathbf{NP}\)关系的电路大小是乘积关系。也就是说，证明大小以\(O（|C|\kappa）\)增长，其中C是\(\mathbf{NP}\)关系的电路，\(\kappa\)是安全参数。到目前为止，已经有大量的后续研究致力于缩短基于配对的NIZK的证明大小，然而，迄今为止，所有的研究都以依赖于非标准知识类型假设或非静态q类型假设为代价。具体而言，改进原始GOS-NIZK在相同标准假设下的证明大小仍然是一个开放问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_13](https://doi.org/10.1007/978-3-030-45727-3_13)
## New Constructions of Statistical NIZKs: Dual-Mode DV-NIZKs and More.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#new-constructions-of-statistical-nizks-dual-mode-dv-nizks-and-more) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#new-constructions-of-statistical-nizks-dual-mode-dv-nizks-and-more)**
### 作者
* Benoît Libert, CNRS, Laboratoire LIP, Lyon, France
* Benoît Libert, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Alain Passelègue, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Alain Passelègue, Inria, Paris, France
* Hoeteck Wee, CNRS, ENS, PSL, Paris, France
* David J. Wu, University of Virginia, Charlottesville, VA, USA
### 摘要
> 非交互零知识证明（NIZKs）是密码学中的重要基元。自早期对NIZKs的研究以来，一个主要挑战一直是构造具有针对无限验证者的统计零知识保证的NIZKs。在常见参考字符串（CRS）模型中，目前已知从配对群的k-Lin和LWE实现了这种“统计NIZK证明”。在（可重复使用的）指定验证者（DV-NIZK）模型中，一个可信的设置算法生成用于检查证据的可重用验证密钥，我们也可以从DCR构造。如果我们将要求放宽到计算零知识，此外，在CRS模型中可以从因子分解和配对群中的CDH，以及在指定验证者模型中从几乎所有蕴含公钥加密的假设（例如CDH，LPN，LWE）获得NIZKs。因此，在我们对CRS和指定验证者模型中的统计NIZKs的理解上仍然存在差距。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_14](https://doi.org/10.1007/978-3-030-45727-3_14)
## Non-interactive Zero-Knowledge in Pairing-Free Groups from Weaker Assumptions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#non-interactive-zero-knowledge-in-pairing-free-groups-from-weaker-assumptions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#non-interactive-zero-knowledge-in-pairing-free-groups-from-weaker-assumptions)**
### 作者
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
* Shuichi Katsumata, AIST, Tokyo, Japan
* Bogdan Ursu, ETH Zürich, Zürich, Switzerland
### 摘要
> 我们提供了一种新的非交互式零知识证明（Non-Interactive Zero-Knowledge，NIZKs）的构建方法，该方法基于离散对数风格的假设，在循环群上实现，而无需依靠配对操作。之前的构造方法（Canetti等人，Eurocrypt'18）在一个假设下实现了这样的NIZKs，即没有高效的对手能够以优于Σ(λ)/2^λ的概率打破与所有（包括低效函数）大小为2^λ的群上（加法）ElGamal密钥相关消息（KDM）安全性。这是一个非常强大、不可伪造的假设。特别地，即使对离散对数问题当前已知最佳攻击方法有些微的（多项式级别的）改进，也会与该假设相矛盾。（Canetti等人，STOC'19）描述了如何将假设改进为仅依赖于与所有高效函数相关的KDM安全性，从而获得了一种（在本质上）可伪造的假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_15](https://doi.org/10.1007/978-3-030-45727-3_15)
## Everybody's a Target: Scalability in Public-Key Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#everybodys-a-target-scalability-in-public-key-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#everybodys-a-target-scalability-in-public-key-encryption)**
### 作者
* Benedikt Auerbach, IST Austria, Klosterneuburg, Austria
* Federico Giacon, Gnosis Service GmbH, Berlin, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
### 摘要
> 对于\(1\le m \le n\)，我们考虑公钥加密（PKE）方案的自然m-out-of-n多实例场景。给定n个独立的PKE实例，如果一个对手破解了至少m个其中的实例，则他取胜。在这项工作中，我们对PKE方案的扩展因子\(\mathrm{SF}\)感兴趣，它衡量了破解m个n个实例的困难程度如何随着m的增加而扩展。也就是说，一个扩展因子\(\mathrm{SF}=\ell\)表示相对于破解单个实例，破解m个实例至少要困难\(\ell\)倍。因此，具有小扩展因子的PKE方案成为大规模监控的理想目标。实际上，Logjam攻击（CCS 2015）在其他方面暗中利用了ElGamal在有限域上（共享群参数）的几乎恒定的扩展因子。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_16](https://doi.org/10.1007/978-3-030-45727-3_16)
## Security Under Message-Derived Keys: Signcryption in iMessage.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#security-under-message-derived-keys-signcryption-in-imessage) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#security-under-message-derived-keys-signcryption-in-imessage)**
### 作者
* Mihir Bellare, Department of Computer Science and Engineering, University of California San Diego, San Diego, USA
* Igors Stepanovs, Department of Computer Science, ETH Zürich, Zürich, Switzerland
### 摘要
> 在苹果的iMessage中，核心是一个“签名加密方案”，它涉及将消息进行对称加密，并使用从消息本身派生的密钥。这激发了我们对一种名为“基于消息派生密钥的加密”（EMDK）的原语进行形式化描述的动机。我们证明了iMessage底层的EMDK方案的安全性。我们利用这个结果来证明“签名加密方案”本身的安全性，相对于之前提出的定义，我们进一步拓展以涵盖与消息协议相关的特殊问题。我们所得到的可证安全结果是定量的，并且讨论了对iMessage实际应用的影响。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_17](https://doi.org/10.1007/978-3-030-45727-3_17)
## Double-Base Chains for Scalar Multiplications on Elliptic Curves.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#double-base-chains-for-scalar-multiplications-on-elliptic-curves) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#double-base-chains-for-scalar-multiplications-on-elliptic-curves)**
### 作者
* Wei Yu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Bao Li, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Wei Yu, Data Assurance and Communications Security Research Center, Chinese Academy of Sciences, Beijing, 100093, China
* Saud Al Musa, College of Computer Science and Engineering, Taibah University, Medina, Saudi Arabia
* Bao Li, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
### 摘要
> 双基链（DBCs）广泛用于加速椭圆曲线上的标量乘法。我们提出了三个关于DBCs的结果。首先，我们展示了包含所有DBCs的集合的结构，并提出了一种迭代算法来计算正整数的DBCs的数量。这是第一个以多项式时间计算正整数的DBCs数量的算法。其次，我们提出了一个渐近下界，对于正整数n，DBCs的平均汉明重量的下界为\(\frac{\log n}{8.25}\)。这个结果回答了关于DBCs汉明重量的一个未解问题。第三，我们提出了一种新的算法，可以为任意正整数生成一个最优的DBC。该算法的时间复杂度为\(\mathscr {O}\left( \left( \log n\right) ^2 \log \log n\right) \)位操作，空间复杂度为\(\mathscr {O}\left( \left( \log n\right) ^{2}\right) \)比特的内存。与现有的Bernstein、Chuengsatiansup和Lange的工作相比，该算法将重编码过程的加速大约提升了6倍以上。最优DBC的汉明重量比NAFs的重量小60%以上。在大素数域上，使用我们的最优DBC进行标量乘法比使用非邻近形式在椭圆曲线上快大约13%。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_18](https://doi.org/10.1007/978-3-030-45727-3_18)
## Stacked Garbling for Disjunctive Zero-Knowledge Proofs.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#stacked-garbling-for-disjunctive-zero-knowledge-proofs) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#stacked-garbling-for-disjunctive-zero-knowledge-proofs)**
### 作者
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 零知识证明（ZK）（ZKP）在非交互性、短证明长度和快速验证时间方面受到广泛关注。我们专注于最快的总证明时间，尤其是针对大型布尔电路。在这个度量标准下，基于Garbled Circuit（GC）的ZKP（Jawurek等，CCS 2013）由于计算加密低常数线性扩展而保持了最先进的技术水平。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_19](https://doi.org/10.1007/978-3-030-45727-3_19)
## Which Languages Have 4-Round Fully Black-Box Zero-Knowledge Arguments from One-Way Functions?
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#which-languages-have-4-round-fully-black-box-zero-knowledge-arguments-from-one-way-functions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#which-languages-have-4-round-fully-black-box-zero-knowledge-arguments-from-one-way-functions)**
### 作者
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Rafael Pass, Cornell Tech, New York, USA
* Muthuramakrishnan Venkitasubramaniam, University of Rochester, Rochester, USA
### 摘要
> 我们证明了如果一个语言 \(\mathcal{L}\) 拥有基于单向函数的可忽略正确性的 4 轮全黑盒零知识论证，并且该准则满足一定条件，则 \(\overline{\mathcal{L}} \in \mathsf {MA}\)。由于 \(\mathsf {coNP}\subseteq \mathsf {MA}\) 导致多项式等级塌缩，我们的结果暗示 \(\mathsf {NP}\) 完全问题不太可能通过基于单向函数的 4 轮全黑盒零知识论证来解决。在 TCC 2018 会议上，Hazay 和 Venkitasubramaniam 以及 Khurana、Ostrovsky 和 Srinivasan 展示了基于可逆单向函数的所有 \(\mathsf {NP}\) 语言的 4 轮全黑盒零知识论证。他们的结果还得到了基于单向函数的 5 轮协议。在实质上，我们的结果解决了基于单向函数的全黑盒零知识论证的轮复杂度问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_20](https://doi.org/10.1007/978-3-030-45727-3_20)
## Statistical ZAPR Arguments from Bilinear Maps.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#statistical-zapr-arguments-from-bilinear-maps) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#statistical-zapr-arguments-from-bilinear-maps)**
### 作者
* Alex Lombardi, MIT, Cambridge, MA, USA
* Vinod Vaikuntanathan, MIT, Cambridge, MA, USA
* Daniel Wichs, Northeastern University, Boston, MA, USA
* Daniel Wichs, NTT Research Inc., Palo Alto, CA, USA
### 摘要
> Dwork和Naor（FOCS '00）将ZAPs定义为具有两个消息的证人不可区分证明，并且是公共硬币的。我们将其放宽为具有私有随机性（ZAPRs）的ZAPs，其中验证者可以使用私有硬币来抽样第一个消息（与被证明的陈述无关），但证据必须在仅有协议记录的情况下保持公开可验证。特别地，ZAPRs是可重复使用的，意味着第一个消息可以被多个证明重复使用而不会损害安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_21](https://doi.org/10.1007/978-3-030-45727-3_21)
## Statistical ZAP Arguments.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#statistical-zap-arguments) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#statistical-zap-arguments)**
### 作者
* Saikrishna Badrinarayanan, VISA Research, Palo Alto, USA
* Rex Fernando, UCLA, Los Angeles, USA
* Aayush Jain, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Dakshita Khurana, University of Illinois Urbana-Champaign, Champaign, USA
### 摘要
> Dwork和Naor（FOCS'00）首次引入并构建了基于陷门置换的两个消息公共硬币见证不可区分证明（ZAPs）用于NP。自那以后，基于双线性映射的决策线性假设和不可区分混淆性也获得了ZAPs，并且在设计几种密码原语中证明了极其有用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_22](https://doi.org/10.1007/978-3-030-45727-3_22)
## Statistical Zaps and New Oblivious Transfer Protocols.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#statistical-zaps-and-new-oblivious-transfer-protocols) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#statistical-zaps-and-new-oblivious-transfer-protocols)**
### 作者
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, PA, USA
* Giulio Malavolta, Carnegie Mellon University, Pittsburgh, PA, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, MD, USA
* Zhengzhong Jin, Johns Hopkins University, Baltimore, MD, USA
* Giulio Malavolta, UC Berkeley, Berkeley, USA
### 摘要
> 我们研究在交互式证明系统和遗忘传输中实现统计隐私的问题。这两种是最为广泛研究的双方协议。当仅有有限轮次的交互可用时，我们探讨该问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_23](https://doi.org/10.1007/978-3-030-45727-3_23)
## Measure-Rewind-Measure: Tighter Quantum Random Oracle Model Proofs for One-Way to Hiding and CCA Security.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#measure-rewind-measure-tighter-quantum-random-oracle-model-proofs-for-one-way-to-hiding-and-cca-security) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#measure-rewind-measure-tighter-quantum-random-oracle-model-proofs-for-one-way-to-hiding-and-cca-security)**
### 作者
* Veronika Kuchta, Faculty of Information Technology, Monash University, Melbourne, Australia
* Amin Sakzad, Faculty of Information Technology, Monash University, Melbourne, Australia
* Ron Steinfeld, Faculty of Information Technology, Monash University, Melbourne, Australia
* Shi-Feng Sun, Faculty of Information Technology, Monash University, Melbourne, Australia
* Damien Stehlé, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Damien Stehlé, Institut Universitaire de France, Paris, France
* Shi-Feng Sun, Data61, CSIRO, Canberra, Australia
### 摘要
> 我们介绍了一种新技术称为“测量-后退-测量”（MRM），以在量子随机Oracle模型（QROM）中实现更严格的安全证明。我们首先将MRM技术应用于导出乔恩·比德尔等人[TCC 2019]变种的“双面”量子单向隐藏引理（O2H）的新安全证明，首次避免了安全证明中的平方根优势损失。特别地，它绕过了江、张和马[IACR eprint 2019]之前的“不可能结果”。然后，我们应用我们的新O2H引理来给出Fujisaki-Okamoto转换的更严格的安全证明，用于构建一个强(\({\mathsf {IND}}{\text {-}}{\mathsf {CCA}}\))密钥封装机制(KEM)，该机制从满足温和插入性假设的弱(\({\mathsf {IND}}{\text {-}}{\mathsf {CPA}}\))公钥加密方案中生成。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_24](https://doi.org/10.1007/978-3-030-45727-3_24)
## Secure Multi-party Quantum Computation with a Dishonest Majority.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#secure-multi-party-quantum-computation-with-a-dishonest-majority) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#secure-multi-party-quantum-computation-with-a-dishonest-majority)**
### 作者
* Yfke Dulek, QuSoft, Amsterdam, The Netherlands
* Alex B. Grilo, QuSoft, Amsterdam, The Netherlands
* Stacey Jeffery, QuSoft, Amsterdam, The Netherlands
* Christian Majenz, QuSoft, Amsterdam, The Netherlands
* Christian Schaffner, QuSoft, Amsterdam, The Netherlands
* Yfke Dulek, University of Amsterdam, Amsterdam, The Netherlands
* Christian Schaffner, University of Amsterdam, Amsterdam, The Netherlands
* Alex B. Grilo, Centrum voor Wiskunde en Informatica, Amsterdam, The Netherlands
* Stacey Jeffery, Centrum voor Wiskunde en Informatica, Amsterdam, The Netherlands
* Christian Majenz, Centrum voor Wiskunde en Informatica, Amsterdam, The Netherlands
### 摘要
> 加密学中的安全多方(经典)计算任务在过去几十年中受到了许多关注。即使在计算是在k个相互不信任的玩家之间进行，如果所有其他玩家都是勾结的敌对势力，即使对于单个诚实的玩家也需要安全性的情况下，已知有安全的协议。另一方面，对于量子计算，仅已证明了允许任意不诚实的大多数的协议(k=2)。在本文中，我们将Dupuis、Nielsen和Salvail(CRYPTO 2012)在两方设置中采取的方法推广到多方量子计算的任何玩家k，并证明了与最多k-1个串通的对手的安全性。计算深度为{CNOT,T}的量子电路的协议的量子回合复杂度为O(k*(d+log n))，其中n是安全参数。为了达到效率，我们利用经典多方计算开发了新颖的Clifford验证代码的公共验证协议和魔态输入测试协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_25](https://doi.org/10.1007/978-3-030-45727-3_25)
## Efficient Simulation of Random States and Random Unitaries.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#efficient-simulation-of-random-states-and-random-unitaries) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#efficient-simulation-of-random-states-and-random-unitaries)**
### 作者
* Gorjan Alagic, QuICS, University of Maryland, College Park, MD, USA
* Gorjan Alagic, NIST, Gaithersburg, MD, USA
* Christian Majenz, QuSoft, Amsterdam, The Netherlands
* Christian Majenz, Centrum Wiskunde & Informatica, Amsterdam, The Netherlands
* Alexander Russell, Department of Computer Science and Engineering, University of Connecticut, Storrs, CT, USA
### 摘要
> 我们考虑高效模拟随机量子态和随机酉算符的问题，以一种能够令黑盒访问的无限制对手信服的方式。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_26](https://doi.org/10.1007/978-3-030-45727-3_26)
## Quantum-Access-Secure Message Authentication via Blind-Unforgeability.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#quantum-access-secure-message-authentication-via-blind-unforgeability) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#quantum-access-secure-message-authentication-via-blind-unforgeability)**
### 作者
* Gorjan Alagic, QuICS, University of Maryland, and NIST, Gaithersburg, MD, USA
* Christian Majenz, QuSoft and Centrum Wiskunde & Informatica, Amsterdam, The Netherlands
* Alexander Russell, Department of Computer Science and Engineering, University of Connecticut, Storrs, CT, USA
* Fang Song, Department of Computer Science and Engineering, Texas A&M University, College Station, TX, USA
### 摘要
> 在存在具有量子查询访问权限的对手的情况下，对经典消息进行身份验证的构建和设计一直是一个长期存在的挑战，因为熟悉的经典不可伪造性概念在量子环境中并不能直接转化为有意义的概念。一个特定的困难是如何公平地捕捉“预测未被查询值”的概念，当对手可以以量子叠加的方式进行查询时。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_27](https://doi.org/10.1007/978-3-030-45727-3_27)
