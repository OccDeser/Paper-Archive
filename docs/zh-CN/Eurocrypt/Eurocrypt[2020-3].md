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
> 基于格的加密方案通常存在解密错误的可能性，即有效的加密被错误解密。这样的错误，大量存在的话，将泄漏关于秘密密钥的信息，从而为纯粹的格约简之外的攻击策略提供了替代方案。在PKC 2019中，扩展了D'Anvers等人的“失败增强”技术，我们提出了一种称为“方向性失败增强”的方法，该方法利用先前找到的“失败密文”来加速搜索新的失败密文。我们详细分析了格定义在多项式环模\( \langle X^{N} + 1 \rangle \)上的情况，并在Kyber768/Saber的简单Mod-LWE-based方案上进行了演示。我们表明，在给定秘密密钥的情况下（单目标设置），在找到一个或多个失败密文后搜索其他失败密文的成本可以被大大加速。因此，在这种单目标模型中，这些方案应该被设计得很难获得一个解密错误。此外，在更广泛的安全模型中，存在许多目标秘密密钥（多目标设置），我们的攻击大大改进了现有技术的状态。

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
> 在本文中，我们首次开始研究哈希与签名格基签名中的侧信道泄漏问题，特别关注原始GPV格门限范例的两种高效实现，即NIST第二轮候选算法Falcon及其简化的前身DLP。这两个方案都在NTRU格上实现了GPV签名方案，并在一般格情况下获得了巨大的加速。我们的研究结果主要有三个方面。
> 
> 首先，我们发现了这些方案中大多数实现中的一个特定侧信道泄漏源，即格高斯采样中的一维高斯采样步骤。事实证明，这些步骤的实现经常泄漏出秘密格基的Gram-Schmidt范数。
> 
> 其次，我们阐明了这种泄漏与秘密密钥之间的联系，通过展示完全可以仅从这些Gram-Schmidt范数有效地重建整个秘密密钥。这个结果在对应方案中充分利用了代数结构，该结构在二次幂循环域上进行操作。
> 
> 第三，我们具体演示了针对DLP的侧信道攻击（而不是Falcon，因为这两个方案的结构不同）。挑战在于计时信息仅提供了Gram-Schmidt范数的近似值，因此我们的代数恢复技术需要与修剪树搜索相结合，以适用于近似值。实验表明，大约需要约2^35个DLP轨迹才能以很高的概率重建整个密钥。

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
> 排名度量解码问题是基于秩度量密码学中考虑的主要问题。最近已经提出了一些基于这个问题或准循环版本的非常有效的方案，例如提交给NIST后量子密码标准化进程第二轮评估的ROLLO和RQC。尽管对于这个问题的组合攻击已经得到广泛研究并且现在已经被充分理解，但代数攻击的情况并不如人意，先前的工作基本上表明它们对于密码参数无效。在本文中，我们从Ourivski和Johansson对该问题进行代数建模入手，将其扩展成一个易于计算的方程组，并表明通过Gröbner基本可以更快地解决增广的系统。这是因为增广系统具有解决度r、 r+1或r+2，这取决于参数，其中r是秩权重。我们通过扩展来自Verbel等人（来自MinRank问题的PQCrypto 2019）的结果，显示出目标等级r时解决度下降到$r+2$，甚至对于他们称之为“过完备”的一些有利实例，可能还会更少。我们给出了这种方法的复杂性界限以及使用magma的实现的实用计时。这改善了先前已知的Gröbner基础和（非量子）组合方法的复杂性估计，例如，在ROLLO-I-256上对200位的攻击，其声称的安全性为256位。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_3](https://doi.org/10.1007/978-3-030-45727-3_3)
## Low Weight Discrete Logarithm and Subset Sum in 20.65n with Polynomial Memory.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#low-weight-discrete-logarithm-and-subset-sum-in-20-65n-with-polynomial-memory) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#low-weight-discrete-logarithm-and-subset-sum-in-20-65n-with-polynomial-memory)**
### 作者
* Andre Esser, Ruhr University Bochum, Bochum, Germany
* Alexander May, Ruhr University Bochum, Bochum, Germany
### 摘要
> 我们提出了两种启发式多项式内存碰撞查找算法，用于在任何阿贝尔群G中的低汉明权重离散对数问题。第一种算法是将Becker-Coron-Joux（BCJ）算法直接适应到离散对数设置中。第二种算法使用更复杂的表示技术应用和一些新的马尔可夫链分析，在所有可能的权重下显著改进了这种适应性。与其他低权重离散对数算法不同，我们第二个算法的时间复杂度与一般离散对数实例的Pollard限度\(|G|^{\frac{1}{2}}\)相互插值。
> 
> 我们还提出了一种新的启发式子集和算法，其多项式内存的性能优于BCJ在随机子集和实例\(a_1, \ldots , a_n, t \in \mathbb {Z}_{2^n}\)上的\(2^{0.72n}\)时间限度。从技术上讲，我们引入了受Crypto '16中的NestedRho算法启发的嵌套碰撞查找方法，该方法递归地产生碰撞。我们首先展示了如何利用运行时间\(2^{0.649n}\)来实例化我们的算法。通过进一步的技巧，我们能够将其复杂度进一步改进到\(2^{0.645n}\)。

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
> 我们引入了连续可验证延迟函数（cVDF）的概念：一个函数 g，其特点是（a）按顺序迭代——意思是评估 g 的迭代 \(g^{(t)}\)（在随机输入上）所需的时间大约是评估 g 的时间的 t 倍，即使使用多个并行处理器也是如此；并且（b）（迭代地）可验证——\(g^{(t)}\) 的输出可以高效地验证（与 t 无关）。换句话说，迭代函数 \(g^{(t)}\) 是一个可验证延迟函数（VDF）（Boneh 等人，CRYPTO ’18），具有以下特性：计算的中间步骤（即 \(g^{(t')}\) 对于 \(t'<t\)）可以公开且持续地验证。
> 
> 我们展示了 cVDF 有着引人入胜的应用：（a）它们可以用于构建只需要初始随机种子（而无需进一步不可预测的随机源）的\(\textit{公共随机性信标}\)；（b）实现\(\textit{可外包的 VDF}\)，其中 VDF 计算的任意部分都可以被可验证地外包；以及（c）具有深远的复杂理论后果：特别是，它们暗示存在具有深度鲁棒性的中度困难的 Nash 平衡问题实例，即可以在多项式时间内解决，但需要高顺序运行时间。
> 
> 我们的主要结果是基于重复平方假设和 Fiat-Shamir（FS）启发式的健全性构建了一个 cVDF。我们强调，将其视为（普通的）VDF 时，我们的构造所需的 FS 假设比之前的构造更弱（早期的构造要求 FS 启发式适用于超对数回合的证明或论证）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_5](https://doi.org/10.1007/978-3-030-45727-3_5)
## Generic-Group Delay Functions Require Hidden-Order Groups.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#generic-group-delay-functions-require-hidden-order-groups) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#generic-group-delay-functions-require-hidden-order-groups)**
### 作者
* Lior Rotem, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Gil Segev, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Ido Shahaf, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
### 摘要
> 尽管延迟函数的基本重要性贯穿了时间锁谜题的经典概念和可验证延迟函数的较新概念，但目前已知的唯一满足这两种概念的结构充足且实用性实际的延迟函数是Rivest、Shamir和Wagner的“迭代平方”构造。然而，这个构造是基于隐藏阶数（比如需要一个可信赖的设置的RSA群）或者虚数二次数域的类群（在密码学角度上仍然探索不足）的相当强假设的基础上。在过去的二十多年中，构造已知阶数的循环群中的延迟函数，并允许多种广为研究的实例化的挑战一直困扰着密码学界。
> 
> 在这项工作中，我们证明了循环群中的泛型群延迟函数没有构造方案：我们证明对于任何未利用底层群表示的特定属性的延迟函数，在给出群的阶数时存在一种攻击者可以完全破解函数的序列性。由于任何时间锁谜题和可验证延迟函数都会产生一个延迟函数，因此我们的结果也适用于这两个概念，并解释了无法解决上述长期挑战的原因。此外，我们的结果甚至适用于底层群带有d-线性映射的情况，其中d是一个常数（在一定条件下，甚至适用于超常数值的d）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_6](https://doi.org/10.1007/978-3-030-45727-3_6)
## Sigma Protocols for MQ, PKP and SIS, and Fishy Signature Schemes.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#sigma-protocols-for-mq-pkp-and-sis-and-fishy-signature-schemes) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#sigma-protocols-for-mq-pkp-and-sis-and-fishy-signature-schemes)**
### 作者
* Ward Beullens, imec-COSIC KU Leuven, Kasteelpark Arenberg 10 - bus 2452, 3001, Heverlee, Belgium
### 摘要
> 这项工作提出了用于证明以下知识的Sigma协议：
> 
> 一个二次多项式系统的解，
> 
> Permuted Kernel问题实例的解，
> 
> 一种各种格语句（包括SIS）的证明。
> 
> 我们的Sigma协议具有1/\(q'\)的完备性误差，其中\(q'\)是受限于底层有限域大小的任意数。这比现有证明要好得多，现有证明的完备性误差为2/3或\((q'+1)/2q'\)。证明者和验证者所需的时间复杂度为\(O(q')\)。我们首先构造了带助手的所谓Sigma协议，即证明者和验证者由可信第三方协助的Sigma协议，然后使用“剪切和选择”协议从证明中消除助手。我们应用Fiat-Shamir变换来获得在QROM环境下具有安全性证明的签名方案。我们展示了由此得到的签名方案，我们称之为“多变量二次Fiat-Shamir”方案(MUDFISH)和“重排齐次线性方程组Fiat-Shamir”方案(SUSHSYFISH)，比基于MQ问题和Permuted Kernel问题的现有签名更高效。我们的证明系统可以用于提高依赖于（广义的）Stern协议的应用程序的效率。我们展示了我们的SIS证明的证明大小比Stern协议小一个数量级，并且我们的证明比现有的后量子安全SIS证明更加高效。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_7](https://doi.org/10.1007/978-3-030-45727-3_7)
## Signatures from Sequential-OR Proofs.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#signatures-from-sequential-or-proofs) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#signatures-from-sequential-or-proofs)**
### 作者
* Marc Fischlin, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Patrick Harasser, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Christian Janson, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
### 摘要
> OR证明使证明者能够展示其对多个陈述之一的证人的了解，或者展示多个陈述中有一个为真。OR证明是一种非常多功能的工具，用于加强安全性属性、设计群组和环签名方案，并实现严格的安全性。构建OR证明的常见技术基于Cramer、Damgård和Schoenmakers在CRYPTO’94中介绍的方法，其中证明者将验证者的挑战分割为随机份额，并为每个陈述并行计算证明。
> 
> 在这项研究中，我们研究了一种不同、较少研究的OR证明技术，由Abe、Ohkubo和Suzuki在ASIACRYPT’02中提出。不同之处在于证明者现在按顺序计算各个证明。我们展示了这种顺序OR证明产生的签名方案可以在不可编程随机预言机模型中被证明安全。我们通过黑盒不可能性证明来补充这个积极的结果，证明传统OR证明派生的签名方案可能不太可能达到同样的情况。最后，我们论证了顺序OR签名方案可以在量子随机预言机模型中被证明安全，尽管边界非常宽松，并通过编程随机预言机实现。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_8](https://doi.org/10.1007/978-3-030-45727-3_8)
## Compact Adaptively Secure ABE from k-Lin: Beyond NC1 and Towards NL.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#compact-adaptively-secure-abe-from-k-lin-beyond-nc1-and-towards-nl) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#compact-adaptively-secure-abe-from-k-lin-beyond-nc1-and-towards-nl)**
### 作者
* Huijia Lin, University of Washington, Seattle, USA
* Ji Luo, University of Washington, Seattle, USA
### 摘要
> 我们提出了一种新的通用框架，用于从k-Lin的非对称双线性配对群构建紧凑且自适应安全的属性基加密（ABE）方案。之前，仅有的一种构造（Kowalczyk和Wee，Eurocrypt '19）能够同时满足从静态假设到紧凑性和自适应安全性，并支持由布尔公式表示的策略。我们的框架使得支持由算术分支程序表示的更有表现力的策略成为可能。
> 
> 我们的框架扩展到了由图灵机等计算模型表示的策略的ABE。这种策略具有适用于任意长度属性的特性。我们根据k-Lin获得了首个紧凑且自适应安全的ABE，适用于确定性和非确定性有限自动机（DFA和NFA），这在之前的静态假设下是未知的。除了有限自动机，我们还根据k-Lin获得了对于确定性和非确定性对数空间图灵机（复杂性类\(\mathsf{L}\)和\(\mathsf{NL}\)）的大类均匀计算的首个ABE。我们的ABE方案具有与图灵机M的描述大小成线性关系的紧凑密钥。密文大小与输入长度成线性增长，但与时间复杂性成线性增长，与空间复杂性成指数增长。不论其紧凑性如何，我们强调我们的方案是第一个仅基于标准假设即支持大类图灵机的ABE方案。相比之下，之前的针对通用图灵机的ABE方案均依赖于与难以区分混淆相关的强原语。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_9](https://doi.org/10.1007/978-3-030-45727-3_9)
## Adaptively Secure ABE for DFA from k-Lin and More.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#adaptively-secure-abe-for-dfa-from-k-lin-and-more) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#adaptively-secure-abe-for-dfa-from-k-lin-and-more)**
### 作者
* Junqing Gong, East China Normal University, Shanghai, China
* Junqing Gong, CNRS, ENS and PSL, Paris, France
* Hoeteck Wee, CNRS, ENS and PSL, Paris, France
### 摘要
> 在这项工作中，我们提出了以下内容：
> 
> - 在素数阶双线性群中，基于k-Lin假设，我们呈现了第一个自适应安全的DFA的属性基加密（ABE）；这解决了Waters在CRYPTO’12中提出的一个开放性问题；
> 
> - 在k-Lin假设下，提供接受路径数小于底层群的阶的情况下，我们呈现了第一个NFA的属性基加密（ABE）；该方案实现了选择性安全性；
> 
> - 基于k-Lin假设，我们提出了第一个紧凑的自适应安全的属性基加密（支持属性的无限多次使用）用于分支程序；这一结果推广并简化了Kowalczyk和Wee在boolean formula（NC1）[EUROCRYPT’19]中的最近结果。
> 
> 我们的自适应安全的DFA的ABE依赖于一个新的组合机制，避免了在Naïvely结合CRYPTO’19和EUROCRYPT’19中两种最近技术时在状态数方面的指数级安全损失。这要求我们设计一个选择性安全的NFA的ABE；我们给出了一个构造，足以满足我们的目的并具有独立的兴趣。我们的分支程序的ABE利用了我们的DFA的ABE的见解。

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
> 现实世界中部署的密码实现通常旨在针对强大的侧信道攻击类别（可证明）安全，同时保持合理的性能。在去年的Asiacrypt会议上，提出了一个名为tightPROVE的新形式验证工具，用于准确确定遮蔽实现在任何给定的安全顺序t的探测安全模型中是否安全。最近，还提出了一个名为Usuba的编译器，用于自动生成密码原语的位片实现。
> 
> 本文在安全性和性能方面取得了新的进展，提出了一个名为Tornado的新自动工具。简而言之，从密码原语的高级描述开始，Tornado在探测模型中生成一个功能上等同的位片遮蔽实现，并且在所谓的寄存器探测模型中额外验证其安全性，这更适合于软件实现的实际情况。该框架通过将Usuba与扩展tightPROVE的tightPROVE+集成在一起实现。
> 
> 我们在轻量级密码原语上展示了Tornado，这些密码原语被选入NIST比赛的第二轮，并且某种程度上声称适合使用遮蔽技术。它优越地展示了生成的被遮蔽实现在多个遮蔽顺序下的性能，并且证明了它们在寄存器探测模型中的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_11](https://doi.org/10.1007/978-3-030-45727-3_11)
## Side-Channel Masking with Pseudo-Random Generator.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#side-channel-masking-with-pseudo-random-generator) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#side-channel-masking-with-pseudo-random-generator)**
### 作者
* Jean-Sébastien Coron, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Aurélien Greuet, IDEMIA, Courbevoie, France
* Rina Zeitoun, IDEMIA, Courbevoie, France
### 摘要
> 高阶掩码抵御侧信道攻击通常在执行过程中需要大量的随机性。为了对抗t次探测的攻击，经典的ISW抵御措施需要\(\mathcal{O}(t^2 s)\)个随机比特，其中s是电路规模。然而，在实践中运行真随机数生成器（TRNG）可能代价高昂，并且成为嵌入式设备的瓶颈。在[IKL+13]中，作者们引入了强健伪随机数生成器（PRG）的概念，即使在最多t条线上进行探测的对手面前也必须保持安全。他们证明了当将强健PRG嵌入到私有电路中时，随机比特的数量可以减小到\(\mathcal{\tilde{O}}(t^{4})\)，这与电路规模s无关（只有对数因子）。使用双分图展开图，可以进一步将其减小为\(\mathcal{\tilde{O}}(t^{3+\varepsilon })\)；然而，得到的构造是不可行的。
> 
> 在本文中，我们描述了一种构造，用于对抗t次探测的安全性的随机比特数量仅为\(\mathcal{\tilde{O}}(t^2)\)，而没有使用展开图；此外，每次伪随机生成的运行时间从\(\mathcal{\tilde{O}}(t^{4})\)下降到\(\mathcal{\tilde{O}}(t)\)。我们的技术是使用多个独立的PRG而不是单个PRG。我们表明，在ISW电路中，不再需要PRG的强健性质，这导致了简单高效的构造。例如，对于AES，我们只需要48字节的随机性来获得二阶安全性（\(t=2\)），而不是原始Rivain-Prouff抵御措施中的2880字节。作为第一个可行性结果，我们在基于ARM的嵌入式设备上实施了我们的抵御措施，并相对于Rivain-Prouff获得了50\%的加速。

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
> 非交互式的零知识（NIZK）协议使得证明者能够通过发送一条单一信息说服验证者某个陈述的真实性，同时不泄露任何其他信息。本研究的主要关注点是基于标准假设，探索适用于所有 NP 语言的短配对基 NIZK。在这种情况下，Groth、Ostrovsky 和 Sahai（J.ACM’12）（GOS-NIZK）的开创性工作仍然被认为是最先进的。尽管相当高效，GOS-NIZK 的一个缺点是其证明大小与计算 NP 关系的电路大小成乘法关系。也就是说，证明大小以 O(|C|κ) 的速度增长，其中 C 是 NP 关系的电路，κ 是安全参数。至今已经有很多后续工作致力于减小基于配对的 NIZK 的证明大小，但迄今为止，所有这些工作都以依赖非标准的知识类别假设或非静态 q- 类型假设为代价。具体来说，在相同的标准假设下改善原始 GOS-NIZK 的证明大小仍然是一个未解决的问题。
> 
> 我们的主要结果是构建了一个基于配对的 NIZK，适用于所有 NP，其证明大小对 |C| 是加法关系，也就是说证明大小仅以 |C| + poly(κ) 的速度增长，并基于决策线性（DLIN）假设。由于 DLIN 假设与 GOS-NIZK 的底层假设相同，因此我们的 NIZK 在证明大小上是一个严格的改进。
> 
> 在我们主要结果的副产物中，我们还得到了以下两个结果：（1）我们构建了一个完美零知识的 NIZK（NIPZK），适用于在 DLIN 假设下可计算于 NC1 的 NP 关系，其证明大小为 |w| · poly(κ)，其中 |w| 是证人长度。这是首个基于配对的、证明大小与 C 无关的 NIPZK，它基于标准假设。（2）我们构建了一个适用于在消除自适应设置中可计算于 NC1 的 NP 关系的普遍可组合（UC）NIZK，其证明大小从 DLIN 假设中为 |w| · poly(κ)。这是对 Katsumata、Nishimaki、Yamada 和 Yamakawa（CRYPTO’19）最近结果的改进，后者基于非静态 q- 类型假设给出了类似结果。
> 
> 我们所有 NIZK 的主要构建块是具有分解的在线离线效率的约束签名方案。这是我们在本文中引入的一个新属性，并且基于 DLIN 假设进行构建。我们相信这个构建方法具有独立的重要性。

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
> 非交互式零知识证明（NIZKs）是密码学中的重要基元。自早期关于NIZKs的工作以来，主要挑战之一是建立对无限验证者具有统计零知识保证的NIZKs。在常见参考字符串（CRS）模型中，目前已知可以从配对群中的 \(k\text {-}\mathsf {Lin} \) 和 \(\mathsf {LWE}\) 构造这种“统计 NIZK 论证”。在（可重用的）指定验证者（DV-NIZK）模型中，一个可信的设置算法生成一个可重复使用的验证密钥用于检查证明，我们也可以从 \(\mathsf {DCR}\) 进行构造。如果我们将要求放宽到计算零知识，此外，在 CRS 模型中还有基于配对群中的因子分解和 \(\mathsf {CDH}\)，以及在指定验证者模型中几乎所有意味着公钥加密的假设（例如，\(\mathsf {CDH}\)，\(\mathsf {LPN}\)，\(\mathsf {LWE}\)）的 NIZKs。因此，我们在 CRS 和指定验证者模型中对统计 NIZKs 的理解仍然存在差距。
> 
> 在这项工作中，我们开发了构建统计 NIZK 论证的新技术。首先，我们从无配对群中的 \(k\text {-}\mathsf {Lin} \) 假设、\(\mathsf {QR}\) 假设和 \(\mathsf {DCR}\) 假设构造了统计 DV-NIZK 论证。这些是无配对群和从 \(\mathsf {QR}\) 构造的首个满足统计零知识的构造。我们所有的构造都是安全的，即使验证密钥被恶意选择（即它们是“恶意指定验证者” NIZKs），而且还满足“双模式”属性，其中 CRS 可以从两个计算不可区分的分布中采样：一个分布得到统计 DV-NIZK 论证，而另一个分布得到计算 DV-NIZK 证明。然后，我们展示了如何将我们在配对群中的 \(k\text {-}\mathsf {Lin} \) 构造调整为从配对中获得新的公开验证的统计 NIZK 论证，而该构造的假设比现有的基于配对的统计 NIZKs 的假设质量较弱。
> 
> 我们的构造遵循 Feige、Lapidot 和 Shamir（FLS）的经典范例。尽管 FLS 框架传统上用于构建计算（DV）-NIZK 证明，我们新的结果表明相同的框架可用于构建双模式（DV）-NIZKs。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_14](https://doi.org/10.1007/978-3-030-45727-3_14)
## Non-interactive Zero-Knowledge in Pairing-Free Groups from Weaker Assumptions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#non-interactive-zero-knowledge-in-pairing-free-groups-from-weaker-assumptions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#non-interactive-zero-knowledge-in-pairing-free-groups-from-weaker-assumptions)**
### 作者
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
* Shuichi Katsumata, AIST, Tokyo, Japan
* Bogdan Ursu, ETH Zürich, Zürich, Switzerland
### 摘要
> 我们提供了基于离散对数风格假设的循环群的新的非交互式零知识论证（\(\textsf{NIZKs}\)\)）的构造，而不依赖配对。先前的构造来自于Canetti等人在Eurocrypt'18中，在假设没有有效的对手能以多项式时间破解所有（甚至是低效的）函数上的大小为\(2^\lambda\)的群的（加法）ElGamal的密钥相关消息（KDM）安全性的情况下实现了这样的\(\textsf{NIZKs}\)，概率优于\(\mathsf{poly}(\lambda)/2^\lambda\)。这是一个非常强大且不可伪造的假设。特别地，即使在离散对数问题的已知最佳攻击上有轻微的（多项式）改进，也已经与这个假设相矛盾。(Canetti等人STOC'19)阐述了如何改进该假设，只依赖于相对于所有有效函数的KDM安全性，从而获得一个（实质上）可伪造的假设。
> 
> 我们的第一次构造改善了这种状况。我们提供了一个基于CDH假设的\(\textsf{NIZKs}\)构造，假设没有有效的对手能以概率优于\(\mathsf{poly}(\lambda)/2^{c\lambda}\)（记作\(2^{-c\lambda}\)-\(\mathsf{OW\text{-}KDM}\)），破解面向大小为\(2^\lambda\)的群的有效函数的ElGamal的密钥相关单向性，其中常数\(c = 3/4\)。与先前的假设不同，我们的假设在最佳已知攻击与所需安全性保证之间留下了指数差距。
> 
> 我们还分析了在CDH不成立的情况下是否能构建\(\textsf{NIZKs}\)。作为第二个贡献，我们在二进制长度\(c\lambda\)的ElGamal的\(2^{-c\lambda}\)-\(\mathsf{OW\text{-}KDM}\)安全性（其中\(c = 28/29+o(1)\)）的前提下，以及低深度伪随机生成器的存在，构建了一个针对NP的无穷次\(\textsf{NIZK}\)论证系统（其中声明性和零知识性仅保证在无穷多个安全参数上成立）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_15](https://doi.org/10.1007/978-3-030-45727-3_15)
## Everybody's a Target: Scalability in Public-Key Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#everybodys-a-target-scalability-in-public-key-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#everybodys-a-target-scalability-in-public-key-encryption)**
### 作者
* Benedikt Auerbach, IST Austria, Klosterneuburg, Austria
* Federico Giacon, Gnosis Service GmbH, Berlin, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
### 摘要
> 对于 \(1\le m \le n\), 我们考虑一个自然的 m-out-of-n 多实例公钥加密（PKE）方案。对于给定的 n 个独立 PKE 实例，对手赢得的条件是他至少破解 n 个实例中的 m 个。在这项工作中，我们对 PKE 方案的缩放因子 \(\mathrm {SF}\) 感兴趣，它测量了破译 n 个实例中的 m 个实例在 m 方面的困难程度。也就是说，缩放因子 \(\mathrm {SF}=\ell \) 表明破解 n 个实例中的 m 个至少比破解单个实例困难了 \(\ell \) 倍。因此，缩放因子很小的 PKE 方案是大规模监视的理想目标。事实上，Logjam 攻击（CCS 2015）隐式地利用了 ElGamal 在有限域上（带有共享组参数）的几乎恒定的缩放因子，以及其他方面。
> 
> 对于椭圆曲线上的哈希 ElGamal，我们使用通用群模型来描述缩放因子如何取决于方案的粒度。在低粒度中，即每个公钥包含独立的群参数，方案具有最优的缩放因子 \(\mathrm {SF}=m\)；在中等和高粒度下，即所有公钥共享相同的群参数，方案仍然具有合理的缩放因子 \(\mathrm {SF}=\sqrt{m}\)。我们的发现强调，在多实例场景中，将 ElGamal 实例化到椭圆曲线上应该优于有限域。
> 
> 作为我们的主要技术贡献，我们推导了对于素数 p 阶群上 m-out-of-n Gap 离散对数和 m-out-of-n Gap 计算 Diffie-Hellman 问题复杂度的新的通用群下界，扩展了 Yun 在 EUROCRYPT 2015 的最新结果。我们通过研究相关计算问题的困难程度来建立下界，这个问题我们称之为超曲面搜索问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_16](https://doi.org/10.1007/978-3-030-45727-3_16)
## Security Under Message-Derived Keys: Signcryption in iMessage.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#security-under-message-derived-keys-signcryption-in-imessage) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#security-under-message-derived-keys-signcryption-in-imessage)**
### 作者
* Mihir Bellare, Department of Computer Science and Engineering, University of California San Diego, San Diego, USA
* Igors Stepanovs, Department of Computer Science, ETH Zürich, Zürich, Switzerland
### 摘要
> 在Apple的iMessage的核心是一种签名加密方案，其中消息的对称加密是在消息本身派生的密钥下进行的。这激励我们正式界定一个我们称为基于消息派生密钥的加密（EMDK）的原语。我们证明了基础于iMessage的EMDK方案的安全性。我们利用这一点来证明签名加密方案本身的安全性，相对于我们提供的签名加密的定义，以涵盖消息协议独特的问题。我们的可证明安全性结果是定量的，并且我们讨论了对iMessage的实际影响。

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
> 双基链（DBCs）被广泛用于加速椭圆曲线上的标量乘法。我们提出了三个DBCs的结果。首先，我们展示了包含所有DBCs的集合结构，并提出了一个迭代算法来计算正整数的DBCs数量。这是第一个计算正整数DBCs数量的多项式时间算法。其次，我们提出了一个关于正整数n的DBCs平均汉明权重的渐近下界\(\frac{\log n}{8.25}\)。该结果回答了关于DBCs汉明权重的一个开放性问题。第三，我们提出了一种为任意正整数生成最优DBCs的新算法。该算法的时间复杂度为\(\mathscr{O}\left( \left( \log n\right) ^2 \log \log n\right) \)位操作，空间复杂度为\(\mathscr{O}\left( \left( \log n\right) ^{2}\right) \)内存位数。与最先进的Bernstein，Chuengsatiansup和Lange工作相比，该算法加速了重新编码过程超过6倍。最佳DBCs的汉明权重比NAFs小了60%以上。使用我们的最佳DBCs进行标量乘法比椭圆曲线上大素域上的非相邻形式快大约13%。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_18](https://doi.org/10.1007/978-3-030-45727-3_18)
## Stacked Garbling for Disjunctive Zero-Knowledge Proofs.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#stacked-garbling-for-disjunctive-zero-knowledge-proofs) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#stacked-garbling-for-disjunctive-zero-knowledge-proofs)**
### 作者
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 零知识证明（ZK）（ZKP）因其非交互性、证明大小短和快速验证时间而受到广泛关注。我们侧重于最快的总证明时间，特别是针对大型布尔电路。在这个指标下，基于混淆电路（GC）的ZKP（Jawurek等人[JKO]，CCS 2013）由于混淆计算呈现出较低的线性扩展而保持着技术最新状态。
> 
> 我们改进了用于带有条件子句的证明陈述的GC-ZKP。我们的通信与最长分支成比例，而不是整个证明陈述。当分支数 \(m\) 较大时，这是最有用的，在JKO的基础上可获得最多\(m \times \)倍的改进。
> 
> 在我们的概念验证应用中，证明者 \(\mathsf{P}\) 展示了对代码库中任意数量的真实C代码片段中存在漏洞的知识。我们的计算成本与代码库的规模成线性关系，通信量与代码片段的数量成常数关系。也就是说，我们只需要足够的通信来处理单个最大的代码片段！
> 
> 我们的概念贡献是面向ZK的堆叠混淆，一种隐私无关的电路混淆方案，可以与JKO GC-ZKP协议一起使用以构建更高效的ZKP。给定一个布尔电路 \(\mathcal{C}\) 和计算安全参数 \(\kappa\) ，我们的混淆长度为 \(L \cdot \kappa\) 比特，其中 L 是 \(\mathcal{C}\) 中最长执行路径的长度。所有先前确定性高效混淆方案产生的混淆大小都为 \(|\mathcal{C} |\cdot \kappa\)。我们方案的计算成本与先前技术最先进的方法相比没有增加。
> 
> 我们实现了GC-ZKP并展示了在分支因子 \(m\) 为函数的 ZK 性能大幅改善（相对于 JKO增强了 \(m \times\)）。与最近的ZKP（STARK，Libra，KKW，Ligero，Aurora，Bulletproofs）相比，我们的方案在更大的电路上具有更好的证明时间（取决于电路的大小和所比较的方案，提升了35- \(1000\times\)或更多）。
> 
> 对于我们的示例应用，我们考虑了四个大约有30-50行代码的 C 代码片段；其中一个代码片段允许无效的内存引用。整个证明耗时0.15秒，通信量为1.5 MB。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_19](https://doi.org/10.1007/978-3-030-45727-3_19)
## Which Languages Have 4-Round Fully Black-Box Zero-Knowledge Arguments from One-Way Functions?
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-3].md#which-languages-have-4-round-fully-black-box-zero-knowledge-arguments-from-one-way-functions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-3].md#which-languages-have-4-round-fully-black-box-zero-knowledge-arguments-from-one-way-functions)**
### 作者
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Rafael Pass, Cornell Tech, New York, USA
* Muthuramakrishnan Venkitasubramaniam, University of Rochester, Rochester, USA
### 摘要
> 我们证明了，如果一个语言 \(\mathcal{L}\) 具有基于单向函数的可忽略保真度的 4 轮完全黑盒零知识证明，则 \(\overline{\mathcal{L}} \in \mathsf {MA}\)。由于 \(\mathsf {coNP}\subseteq \mathsf {MA}\) 意味着多项式层次结构会折叠，我们的结果表明基于单向函数的 4 轮完全黑盒零知识证明对于 \(\mathsf {NP}\)-完全语言来说是不太可能的。在 TCC 2018 中，Hazay 和 Venkitasubramaniam，以及 Khurana，Ostrovsky 和 Srinivasan 对所有 \(\mathsf {NP}\) 语言基于单射的单向函数展示了 4 轮完全黑盒零知识证明。他们的结果还暗示了基于单向函数的 5 轮协议。本质上，我们的结果解决了基于单向函数的完全黑盒零知识证明的轮复杂度问题。

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
> Dwork和Naor（FOCS’00）将ZAPs定义为公共硬币的2消息见证不可区分证明。我们将这一概念放宽为拥有私有随机性的ZAPs（ZAPRs），其中验证者可以使用私有硬币来选择第一条消息（与被证明的声明无关），但是只要给出协议原始记录，证明必须保持公共可验证。特别地，ZAPRs是可重用的，这意味着第一条消息可以在不损害安全性的情况下用于多个证明。已知ZAPs可以由陷门置换或双线性映射经过计算WI（统计上可靠）来构造。Badrinarayanan-Fernando-Jain-Khurana-Sahai和Goyal-Jain-Jin-Malavolta [EUROCRYPT ’20]的两项最新研究结果构建了第一个来自几乎多项式LWE假设的统计ZAP论据，这些论据在统计上是WI（并且在计算上是可靠的）。在这里，我们从具有双线性映射的群的几乎多项式决策线性（DLIN）假设构建了统计ZAPR论据。我们的构建依赖于几种工具的结合，包括Groth-Ostrovsky-Sahai NIZK和NIWI [EUROCRYPT ’06, CRYPTO ’06, JACM ’12]，“有时绑定的统计隐藏承诺” [Kalai-Khurana-Sahai，EUROCRYPT’18] 和“MPC-in-the-head”技术 [Ishai-Kushilevitz-Ostrovsky-Sahai，STOC’07]。

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
> Dwork和Naor（FOCS'00）首次介绍并构建了两条消息的公共硬币见证不可区分证明（ZAP），用于基于陷门置换的NP。从那时起，ZAP还基于双线性映射的决策线性假设和不可区分混淆等方面进行了研究，并在几个加密原语的设计中被证明非常有用。
> 
> 然而，目前已知的两条消息的公共硬币（甚至是公开可验证）证明系统只保证计算有界验证者对证人的不可区分性。在本文中，我们构建了第一个在统计隐私模型下，基于学习与错误（LWE）假设的准多项式难度，实现了NP的公共硬币两条消息证人不可区分（WI）论证。我们还表明了相同的协议具有超多项式模拟器（SPS），产生了第一个公共硬币SPS统计零知识论证。在此之前，没有已知的基于格假设的两条消息公开可验证WI协议，甚至不满足计算证人不可区分的较弱概念。

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
> 我们研究如何在有限的交互轮次内，在交互证明系统和 Oblivious Transfer （两个最常研究的双方协议）中实现统计隐私的问题。本文首次提出了统计 Zaps 的构造，即具有公共硬币验证者的两轮统计见证不可区分（WI）协议。我们的构造基于犹太书籍错误学习的准多项式难度假设，实现了计算上的正确性。我们还给出了一种三轮统计接收器私有的 Oblivious Transfer 协议的构造，该协议在明文模型下针对恶意敌手实现了接收者的统计隐私和发送者的计算隐私，并且协议的轮复杂度是最优的。为了得出我们的第一个结果，我们提出了一种公共硬币方法来压缩 sigma 协议，而无需依赖可信设置。为了得出我们的第二个结果，我们设计了一个通用框架，通过一种新的统计哈希承诺的概念，这可能是独立于利

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
> 我们引入了一种名为“测量-倒带-测量”（MRM）的新技术，以在量子随机预言模型（QROM）中实现更严密的安全性证明。首先，我们将我们的MRM技术应用于导出Bindel等人的“双面”量子单向到隐藏引理（O2H）的变种的新安全性证明[TCC 2019]，这是第一次避免了安全性证明中的平方根优势损失。特别是，它绕过了姜，张和马先前的“不可能结果”[IACR eprint 2019]。然后，我们应用我们的新O2H引理，为使用轻微的单射假设满足的弱（\({\mathsf {IND}}{\text {-}}{\mathsf {CPA}}\))公钥加密方案构建强（\({\mathsf {IND}}{\text {-}}{\mathsf {CCA}}\))关键封装机制（KEM）的藤崎-冈本变换提供了更严密的安全性证明。

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
> 近几十年来，在安全多方（经典）计算的密码任务上引起了广泛关注。即使在极端情况下，即在k个相互不信任的参与者之间进行计算，并且对于单个诚实的参与者，如果所有其他参与者都是勾结的对手，则需要安全性，已知存在安全协议。然而，在量子计算中，允许任意不诚实多数的协议仅针对\(k=2\)被证明成立。在这项工作中，我们将Dupuis、Nielsen和Salvail（CRYPTO 2012）在双方设置中采取的方法推广到设计适用于任意参与者k个的安全高效的多方量子计算协议，并证明在最多\(k-1\)个勾结对手攻击下的安全性。该协议用于计算\(\{\mathsf {CNOT}, \mathsf {T} \}\)深度为d的量子电路的量子轮复杂性为\(O(k \cdot (d + \log n))\)，其中n是安全参数。为了实现高效性，我们开发了一种新颖的Clifford认证码公共验证协议，并利用经典多方计算开发了一个魔态输入测试协议。

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
> 我们考虑高效模拟随机量子态和随机酉算符的问题，以一种对具有黑盒预言者访问权限的无界对手具有说服力的方式。
> 
> 此问题先前仅针对受限制的对手进行了研究。对于事先查询次数有限制的对手，已经知道t-设计足够好。对于多项式时间对手，可以使用最近Ji、Liu和Song在其工作中定义的伪随机态(PRS)和伪随机酉算符(PRU)，但不幸的是，目前还没有已知的PRUs的可证明安全构造方法。
> 
> 在我们的设定中，我们关注无界对手。尽管如此，在感兴趣的两个情景下，我们能够提供有状态的量子算法来模拟理想对象。对于Haar随机态，我们的模拟器是多项式时间的，误差可以忽略，并且还可以模拟通过模拟态进行验证和反射。这立即应用于量子货币：一种在信息论意义上不可伪造和不可追踪的货币方案。对于Haar随机酉算符，我们的模拟器需要多项式空间，但在正向和逆向访问时可以零误差地进行模拟。
> 
> 这些结果可以看作是发展随机量子对象的懒惰采样理论的首要步骤。

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
> 在存在量子查询访问对手的情况下，制定和设计经典消息认证一直是一个长期存在的挑战，因为熟悉的经典不可伪造性概念不能直接转化为量子情境中的有意义的概念。一个特别困难之处在于如何公平地捕捉“预测未查询值”的概念，当对手可以在量子叠加中查询时。
> 
> 我们提出了一个针对量子对手的不可伪造性的自然定义，称为盲不可伪造性。这个概念定义了一个功能是可预测的，如果存在一个对手可以使用“部分盲目”的Oracle访问来预测盲区域中的值。我们用一些技术结果支持这个提议。我们首先建立了这个概念在经典环境中与EUF-CMA的一致性，然后证明了这个概念在一些简单的指导示例中是满足的，比如随机函数和量子查询安全伪随机函数。然后，我们展示了盲不可伪造性在支持规范构造和缩减方面的适用性。我们证明了“哈希和MAC”范式以及Lamport一次数字签名方案确实根据这个定义是不可伪造的。为了支持我们的分析，我们另外定义和研究了一种新类型的量子安全哈希函数，称为伯努利保持。
> 
> 最后，我们证明了盲不可伪造性严格地比Boneh和Zhandry之前的一个定义更强，并通过构造一个明确的函数家族解决了关于这个之前定义的一个悬而未决的问题，这个函数家族是可伪造的但满足了这个定义。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45727-3_27](https://doi.org/10.1007/978-3-030-45727-3_27)
