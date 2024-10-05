# Asiacrypt[2023-7]
## Antrag: Annular NTRU Trapdoor Generation - Making Mitaka as Secure as Falcon.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#antrag-annular-ntru-trapdoor-generation-making-mitaka-as-secure-as-falcon) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#antrag-annular-ntru-trapdoor-generation-making-mitaka-as-secure-as-falcon)**
### 作者
* Thomas Espitau, PQShield SAS, Paris, France
* Thi Thu Quyen Nguyen, IDEMIA & Normandie Univ., UNICAEN, ENSICAEN, CNRS, GREYC, Paris, France
* Chao Sun, Osaka University, Suita, Japan
* Mehdi Tibouchi, NTT Social Informatics Laboratories, Yokosuka, Japan
* Alexandre Wallet, IRISA, Univ. Rennes 1, Inria, Bretagne-Atlantique Center, Rennes, France
### 摘要
> 在本论文中，我们介绍了一种新颖的基于NTRU格的Prest混合采样器的陷门生成技术。Prest采样器特别用于最近提出的Mitaka签名方案（Eurocrypt 2022），这是Falcon签名方案的一种变体，是NIST为标准化选择的候选方案之一。Mitaka是为了解决Falcon的主要缺点而引入的，即其签名生成中使用的格高斯采样器非常复杂，难以正确实现、并行化或保护免受侧信道攻击，并在维度不是2的幂时实例化以达到中间安全级别。Prest采样器要简单得多，并解决了这些问题，但当应用与Falcon相同的陷门生成方法时，在相等维度下得到的签名安全性要低得多。Mitaka论文展示了如何使用某些随机重复利用技术来减轻这种安全性的损失，但得到的方案仍然比Falcon安全性要低得多（根据参数不同，CoreSVP安全性损失约为20到50位），并且密钥生成速度要慢得多。
> 
> 我们的新陷门生成技术令人满意地解决了所有这些问题：它产生的密钥生成算法比Mitaka快得多（达到与Falcon类似的速度），并且能够轻松生成达到与Falcon相同NIST安全级别的陷门。它还可以轻松适应中间维度的环，以支持与Mitaka相同的参数选择多样性。总之，这种新技术将Falcon和Mitaka的所有优点（甚至更多）结合在一起，而没有任何缺点。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_1](https://doi.org/10.1007/978-981-99-8739-9_1)
## G+G: A Fiat-Shamir Lattice Signature Based on Convolved Gaussians.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#g-g-a-fiat-shamir-lattice-signature-based-on-convolved-gaussians) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#g-g-a-fiat-shamir-lattice-signature-based-on-convolved-gaussians)**
### 作者
* Julien Devevey, ENS de Lyon, Lyon, France
* Alain Passelègue, ENS de Lyon, Lyon, France
* Damien Stehlé, ENS de Lyon, Lyon, France
* Alain Passelègue, INRIA, Paris, France
* Alain Passelègue, CryptoLab Inc., Lyon, France
* Damien Stehlé, CryptoLab Inc., Lyon, France
### 摘要
> 我们描述了一种将Schnorr签名适应到格设置中的方法，它依赖于高斯卷积而不是以前的方法中的泛洪或拒绝采样技术。它不涉及任何中止操作，可以使用现有的Fiat-Shamir变换分析来证明在ROM和QROM中的安全性，并且具有更小的签名大小（在渐近和具体安全水平上）。）。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_2](https://doi.org/10.1007/978-981-99-8739-9_2)
## On Gaussian Sampling, Smoothing Parameter and Application to Signatures.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#on-gaussian-sampling-smoothing-parameter-and-application-to-signatures) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#on-gaussian-sampling-smoothing-parameter-and-application-to-signatures)**
### 作者
* Thomas Espitau, PQShield SAS, Paris, France
* Alexandre Wallet, Inria, IRISA, Univ. Rennes, CNRS, Rennes, France
* Yang Yu, BNRist, Tsinghua University, Beijing, China
* Yang Yu, Zhongguancun Laboratory, Beijing, China
* Yang Yu, National Financial Cryptography Research Center, Beijing, China
### 摘要
> 我们提出了一个多项式时间栅格高斯采样的通用框架。它围绕着对离散高斯测度及其在格子扩展下的采样器的系统研究展开；我们首先证明，对于子格 \(\varLambda '\subset \varLambda\)，无论 \(\varLambda '\) 是否是原基格，只要我们知道如何在 \(\varLambda '\) 中采样以及商集 \(\varLambda/\varLambda '\) 中采样，即可在 \(\varLambda\) 中高效采样。作为一个直接的应用，我们解决了采样中的域扩展和限制问题，并提出了适用于格子滤波器采样的采样器，可以看作是著名的Klein采样器的广义推广。然后，我们演示了如何使用基变换或者甚至是改变环境空间来采样，即使目标格子在环境空间中不是满秩表示的也可以。我们还演示了如何使用Peikert（Crypto 2010）的“卷积样”技术来矫正引起的扭曲（我们将其作为附带产品进行了包容）。由于我们的框架旨在模块化，利用小型采样器的组合来构建新的采样器，因此我们还针对所谓的根格子 \(\textsf{A}_n, \textsf{D}_n, \textsf{E}_n\) 提出了特定采样器作为基本情况，扩展了根格子采样的最新发展，该发展局限于 \(\textbf{Z}^n\)。我们还展示了我们的框架如何与所谓的king构造融合，并提供了引人注目的Leech和Barnes-Wall格子的采样器。作为附带产品，我们获得了新的准线性采样器，用于质数和光滑推子环（即 \(2^\ell 3^k\)），实现了基本最优的高斯宽度。在一个实践应用中，我们展示了我们的工作对ntru格子上的哈希和签名签名的影响。在最佳情况下，签名大小可以减小约200个字节（相当于超过20％的改进）。我们还改进了新的基于小工具的构造（Yu，Jia，Wang，Crypto 2023），对于生成的签名，可以获得多达110个字节的改进。最后，我们通过新的算法构造和基于级数反演的新方法，为格子光滑参数提供了几个新估计。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_3](https://doi.org/10.1007/978-981-99-8739-9_3)
## FESTA: Fast Encryption from Supersingular Torsion Attacks.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#festa-fast-encryption-from-supersingular-torsion-attacks) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#festa-fast-encryption-from-supersingular-torsion-attacks)**
### 作者
* Andrea Basso, University of Bristol, Bristol, UK
* Luciano Maino, University of Bristol, Bristol, UK
* Giacomo Pope, University of Bristol, Bristol, UK
* Giacomo Pope, NCC Group, Cheltenham, UK
### 摘要
> 我们介绍了FESTA，这是一种高效的基于同态密码学的公钥加密（PKE）协议，基于SIDH攻击的建设性应用。
> 
> 在其核心，FESTA基于一种新颖的陷门函数，它使用了SIDH攻击中提出的技术的改进版本来开发陷门机制。通过使用标准转换，我们构建了一个在QROM中具有IND-CCA安全性的高效PKE。此外，通过不同的转换，我们获得了第一个在标准模型下具有IND-CCA安全性的基于同态密码学的PKE。
> 
> 最后，我们提出了一种有效地找到FESTA参数的方法，并开发了该协议的概念验证实现。我们期望FESTA能够提供与现有同态密码构建相竞争的实际性能。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_4](https://doi.org/10.1007/978-981-99-8739-9_4)
## A Polynomial Time Attack on Instances of M-SIDH and FESTA.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#a-polynomial-time-attack-on-instances-of-m-sidh-and-festa) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#a-polynomial-time-attack-on-instances-of-m-sidh-and-festa)**
### 作者
* Wouter Castryck, COSIC, KU Leuven, Leuven, Belgium
* Frederik Vercauteren, COSIC, KU Leuven, Leuven, Belgium
### 摘要
> SIDH 最近遭受了毁灭性的攻击，这是因为协议揭示了秘密同态 \(\varphi: E_0\rightarrow E\) 在 \(E_0[N]\) 的 N-挠子群基 \(\{P, Q\}\) 上的图像 \(\varphi (P)\) 和 \(\varphi (Q)\)，其中 \(N^2 > \deg (\varphi)\)。为了阻止这种攻击，最近提出了两个方案 M-SIDH 和 FESTA，通过仅揭示到未知标量 \(\lambda _1, \lambda _2 \in \mathbb {Z}_N^\times \)，即仅揭示 \(\lambda _1 \varphi (P)\) 和 \(\lambda _2 \varphi (Q)\)，其中对于 M-SIDH，\(\lambda _1 = \lambda _2\)，对于 FESTA，\(\lambda _1 = \lambda _2^{-1}\)。在 CSIDH 中泄漏类似信息，因为 \(\varphi\) 将 \(E_0\) 上的 Frobenius 的特征空间映射到 \(E\) 上对应的特征空间。
> 
> 在本文中，我们介绍了一种新的多项式时间攻击，它推广了众所周知的“棒棒糖”攻击，并分析了它如何适用于 M-SIDH、FESTA 和 CSIDH。我们表明，在 \(E_0\) 或 \(E\) 是 \(\mathbb {F}_p\)-可理性时，M-SIDH 可以在多项式时间内被破解，即使 \(E_0\) 和 \(E\) 的自同态环是未知的。这可以推广到起始（或终末）曲线不是 \(\mathbb {F}_p\)-可理性的情况，而是通过小度数同态连接到其 Frobenius 共轭。
> 
> 对于 FESTA，其中曲线 \(E_0\) 已经是 \(\mathbb {F}_p\)-可理性的情况下，我们获得了一个多项式时间攻击，只要基点 \(P, Q\) 中至少有一个是 Frobenius 特征空间的生成元，低度数自同态的生成元，或二者的组合。我们指出目前的 FESTA 实现并未选择这样的基点。由于总是可以构造一个自同态，通常是大度数的，使得 \(P, Q\) 中至少有一个是特征向量，我们得出结论，参数超出范围的 FESTA 是不安全的。
> 
> 尽管 CSIDH 中泄漏的信息与 FESTA 非常相似，但我们表明我们的攻击没有揭示关于秘密同态的任何新信息，即我们仅了解它是 \(\mathbb {F}_p\)-可理性的，这是先验知识。
> 
> 最后，我们分析了通过选择看似不起眼的系统参数，但实际上通过敌手选择的秘密同态将其简化为上述特殊情况的可能性，并探讨了如何实现在 M-SIDH 和 FESTA 中设置后门的可能性。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_5](https://doi.org/10.1007/978-981-99-8739-9_5)
## NEV: Faster and Smaller NTRU Encryption Using Vector Decoding.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#nev-faster-and-smaller-ntru-encryption-using-vector-decoding) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#nev-faster-and-smaller-ntru-encryption-using-vector-decoding)**
### 作者
* Jiang Zhang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Dengguo Feng, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Di Yan, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
### 摘要
> 在本文中，我们提出了\(\textsf{NEV}\) - 使用矢量解码的更快更小的NTRU加密，根据决定性NTRU和RLWE假设在圆锥环\(R_q = \mathbb {Z}_q[X]/(X^n+1)\)下，在标准模型中可以证明是IND-CPA安全的。我们的主要技术是一种新颖且非平凡的方式，将先前已知的明文编码和解码机制集成到Stehlé和Steinfeld（Eurocrypt 2011）提出的可以证明是IND-CPA安全的NTRU变种中。与原始NTRU加密及其变种不同，原始NTRU加密及其变种将明文编码为消息多项式的系数的最低有效位，我们将每个明文位编码为消息多项式的多个系数的最高有效位，以便我们可以在解密时使用一组带有噪声的系数来解码每个明文位，并且通过合理可忽略的解密失败显著减少q的大小。
> 
> 具体而言，我们可以使用\(q = 769\)来获得公钥和密文字节，解密失败率\(\le 2^{-138}\)在NIST级别1安全性上，以及1229字节，解密失败率\(\le 2^{-152}\)在NIST级别5安全性上。通过以标准方式应用藤崎-冈本变换，我们从我们的基本PKE方案获得了一个IND-CCA安全的KEM。与NIST第3轮决赛中相同安全级别的NTRU和Kyber相比，我们的KEM在一次性密钥交换的往返时间中要小33-48%，比NTRU快5.03-29.94倍，比Kyber要紧凑21%，快1.42-1.74倍。
> 
> 我们还提供了一个优化的加密方案\(\textsf{NEV}'\)，具有更好的噪声容忍度（和略微更好的效率），基于RLWE问题的一个变种，称为Subset-Sum Parity RLWE问题，我们展示它与标准决策RLWE问题（带有不同参数）在多项式上是等效的，可能具有独立的兴趣。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_6](https://doi.org/10.1007/978-981-99-8739-9_6)
## Cryptographic Smooth Neighbors.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#cryptographic-smooth-neighbors) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#cryptographic-smooth-neighbors)**
### 作者
* Giacomo Bruno, IKARUS Security Software, Vienna, Austria
* Maria Corte-Real Santos, University College London, London, UK
* Craig Costello, Microsoft Research, New York, USA
* Michael Naehrig, Microsoft Research, New York, USA
* Jonathan Komada Eriksen, Norwegian University of Science and Technology, Trondheim, Norway
* Michael Meyer, University of Regensburg, Regensburg, Germany
* Bruno Sterner, Surrey Centre for Cyber Security, University of Surrey, Guildford, UK
### 摘要
> 我们通过优化 Conrey-Holmstrom-McLaughlin 的“平滑邻居”算法来重新研究找到两个连续的 B-光滑整数的问题。尽管该算法不能保证返回完整的 B-光滑邻居集，但实际上它返回的是完整集合的一个非常接近的近似，并且只需使用极小的时间完成，相对于其穷举算法的耗时而言。我们利用此算法寻找纯孪生平滑问题的最大解，随后生成相应的密码学参数实例，其相应的同态度数明显比先前的作品更平滑。我们的方法似乎非常适合为 SQISign 签名方案寻找参数，特别是为了实现减少签名生成成本的实例。我们提供了若干个示例，其中包括第一组针对 NIST 安全级别 III 和 V 的 SQISign 实例化的参数集。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_7](https://doi.org/10.1007/978-981-99-8739-9_7)
## Non-interactive Commitment from Non-transitive Group Actions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#non-interactive-commitment-from-non-transitive-group-actions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#non-interactive-commitment-from-non-transitive-group-actions)**
### 作者
* Giuseppe D’Alconzo, Department of Mathematical Sciences, Politecnico di Torino, Corso Duca degli Abruzzi 24, 10129, Torino, Italy
* Andrea Flamini, Department of Mathematics, University of Trento, Povo, 38123, Trento, Italy
* Andrea Gangemi, Department of Mathematics, University of Trento, Povo, 38123, Trento, Italy
### 摘要
> 群操作正在成为后量子密码学假设的可行选项。实际上，近年来一些研究已经展示了如何基于椭圆曲线的同余子群(isogenies)，比如CSIDH，张量或代码等价问题的假设构造出原语。本文提出了一种基于非传递群操作构建的比特承诺方案，该方案在标准模型下证明是安全的，且基于决策性群操作反演问题。具体来说，承诺是计算上隐藏且完美绑定的，并且是从一种新颖且通用的框架中获取的，该框架利用了一些轨道不变函数的属性以及群操作。以前的构造取决于发送方和接收方在承诺阶段之间的互动，这导致交互式比特承诺。我们提出了基于群操作的第一个非交互式比特承诺。然后，我们展示了当发送方诚实时，构造的承诺具有一个额外的特性，即可以判断两个承诺是否来自相同的输入，而不暴露输入内容。我们定义了这种构造必须满足的安全属性，并将此原语称为可链接承诺。最后，提供了一个基于有限域中系数的张量实例。在这种情况下，不变函数是张量等秩的计算，密码假设与张量同构问题相关。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_8](https://doi.org/10.1007/978-981-99-8739-9_8)
## Pseudorandomness of Decoding, Revisited: Adapting OHCP to Code-Based Cryptography.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#pseudorandomness-of-decoding-revisited-adapting-ohcp-to-code-based-cryptography) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#pseudorandomness-of-decoding-revisited-adapting-ohcp-to-code-based-cryptography)**
### 作者
* Maxime Bombar, LIX, CNRS UMR 7161, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Alain Couvreur, LIX, CNRS UMR 7161, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Thomas Debris-Alazard, LIX, CNRS UMR 7161, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Maxime Bombar, Inria, Paris, France
* Alain Couvreur, Inria, Paris, France
* Thomas Debris-Alazard, Inria, Paris, France
### 摘要
> 最近的基于代码的加密系统依赖于译码问题的难度等因素。如果搜索版本在实践和理论层面上都得到了充分理解，那么决策版本在文献中的研究较少，特别是对于结构化变体的关系知之甚少。另一方面，在欧几里德格子的世界中，情况却有所不同，有大量的降低，用于基础问题的未结构化和结构化版本。对于后一版本，Peikert等人(TOC2017)引入了一个非常通用的强大工具，称为带隐藏中心问题的Oracle(\(\textsf{OHCP}\))框架，它在降低中被证明非常有用。在这项工作中，我们重新审视这个技术并提取出这个框架的真正本质，即Oracle比较问题(\(\textsf{OCP}\))，展示如何恢复误差的支持，解决带隐藏支持问题(\(\textsf{OHSP}\))，更适合于基于代码的加密。这产生了一个新的处理问题从最坏情况到平均情况的搜索-决策降低，以及一个新的平均情况到平均情况的降低。然后我们转向结构化版本，并解释为什么这对于欧几里德格子来说并不像那么直接。如果我们未能给出结构化代码的搜索-决策降低，我们认为我们的工作为结构化代码的新降低打开了道路，因为\(\textsf{OHCP}\)框架在基于格的加密中被证明是如此强大。此外，我们还相信这种技术可以扩展到具有其他度量的代码，如秩度量，对于该度量，没有降低已知。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_9](https://doi.org/10.1007/978-981-99-8739-9_9)
## Blockwise Rank Decoding Problem and LRPC Codes: Cryptosystems with Smaller Sizes.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#blockwise-rank-decoding-problem-and-lrpc-codes-cryptosystems-with-smaller-sizes) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#blockwise-rank-decoding-problem-and-lrpc-codes-cryptosystems-with-smaller-sizes)**
### 作者
* Yongcheng Song, State Key Laboratory of Cryptology, P. O. Box 5159, Beijing, 100878, China
* Jiang Zhang, State Key Laboratory of Cryptology, P. O. Box 5159, Beijing, 100878, China
* Xinyi Huang, Artificial Intelligence Thrust, Information Hub, The Hong Kong University of Science and Technology (Guangzhou), Guangzhou, 511455, China
* Wei Wu, College of Education Sciences, The Hong Kong University of Science and Technology (Guangzhou), Guangzhou, 511455, China
* Wei Wu, School of Mathematics and Statistics, Fujian Normal University, Fuzhou, 350117, China
### 摘要
> 本文探讨在基于秩的加密系统中，等级译码问题和块状结构的LRPC代码。首先，我们介绍了块状错误(\(\ell \)-errors)，其中每个错误由具有不相交支撑的 \(\ell \) 块坐标组成，并将块状等级译码问题( \(\ell \)-RD) 定义为等级译码问题的自然概括，其解决方案是 \(\ell \) -errors(请注意，标准等级译码问题实际上是一个具有 \(\ell =1\) 的特殊 \(\ell \)-RD 问题)。我们将典型的等级译码问题攻击方法适应于 \(\ell \)-RD 问题，并发现块状结构并没有太大地简化该问题：对于适当选择的 \(\ell >1\)， \(\ell \)-RD 问题仍然具有指数难度。其次，我们引入块状LRPC 代码(\(\ell \)-LRPC)，作为标准LRPC 代码的概括，其奇偶校验矩阵可以划分为 \(\ell \) 个支撑集合不相交的子矩阵，即由任意两个子矩阵中的条目生成的子空间的交集为零空间，并研究了对于 \(\ell \)-errors的译码算法。我们发现，在解决 \(\ell \)-RD 问题复杂度损失的情况下，使用 \(\ell \)-errors在解码能力方面具有优势，这使得可以设计更加高效、参数灵活的基于秩的加密系统。作为应用，我们展示了提交NIST PQC竞赛的两种基于秩的加密系统，即RQC和ROLLO，可以通过使用理想变体的 \(\ell \)-RD 问题和 \(\ell \)-LRPC 代码得到极大改进。具体而言，对于128位安全性，我们的RQC具有总公钥和密文大小为2.5 KB，不仅比原始RQC紧凑约50％，而且比NIST Round 4基于代码的提交HQC，BIKE和Classic McEliece还要小。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_10](https://doi.org/10.1007/978-981-99-8739-9_10)
## SDitH in the QROM.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#sdith-in-the-qrom) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#sdith-in-the-qrom)**
### 作者
* Carlos Aguilar-Melchor, SandboxAQ, Palo Alto, USA
* David Joseph, SandboxAQ, Palo Alto, USA
* Dongze Yue, SandboxAQ, Palo Alto, USA
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
* Christian Majenz, Technical University of Denmark, Kgs. Lyngby, Denmark
* Eyal Ronen, Tel Aviv University, Tel Aviv, Israel
### 摘要
> 最近，MPC在头部（MPCitH）范式已经导致了在基于代码的设置中的签名方面的重大改进。在本文中，我们考虑了对最近的MPCitH的一个变体的一些修改，称为Hypercube-MPCitH，该变体在基于代码的设置中提供了目前已知的最佳签名尺寸。通过将五轮基于代码的识别方案压缩为三轮，我们获得了两个主要的好处。一方面，它使我们能够进一步开发最近的技术，以在量子可访问的随机预言模型（QROM）中提供紧密的安全证明，避免使用Fiat-Shamir的通用QROM结果造成的灾难性降低损失。另一方面，我们可以进一步减少已经成本低廉的签名的在线部分。此外，我们提出了使用工作证明技术来减小签名尺寸的方法。在技术方面，我们开发了几种QROM证明技术的泛化，并引入了最近提出的可提取QROM的变体。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_11](https://doi.org/10.1007/978-981-99-8739-9_11)
## A New Formulation of the Linear Equivalence Problem and Shorter LESS Signatures.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-7].md#a-new-formulation-of-the-linear-equivalence-problem-and-shorter-less-signatures) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-7].md#a-new-formulation-of-the-linear-equivalence-problem-and-shorter-less-signatures)**
### 作者
* Edoardo Persichetti, Florida Atlantic University, Boca Raton, USA
* Edoardo Persichetti, Sapienza University of Rome, Rome, Italy
* Paolo Santini, Marche Polytechnic University, Ancona, Italy
### 摘要
> 线性等价问题（LEP）要求找到一个线性同构，将给定的一对线性码相互转换；在Hamming权重中这被称为单项式映射。LEP已经被用于密码学中设计了LESS签名系列，其中包括了一些高级方案，例如环签名和基础签名。所有这些方案都是应用了Fiat-Shamir转换到一个Sigma协议中获得的，在该协议中，证明人的响应包含关于单项式映射如何作用于所有代码坐标的描述；这样的描述构成了签名大小的绝大部分。在本文中，我们提出了一个新的LEP公式，称为信息集（IS）-LEP。利用IS-LEP，证明人只需要在信息集上提供单项式操作的描述，而不是所有坐标。由于这个新的公式，我们能够极大地减少所有LESS签名方案的签名大小，而不需要任何相关计算的开销。我们证明了IS-LEP和LEP是完全等价的（事实上，是同一个问题），这意味着改进不需要任何额外的安全假设。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8739-9_12](https://doi.org/10.1007/978-981-99-8739-9_12)
