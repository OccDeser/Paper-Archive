# Crypto[2020-2]
## A Polynomial-Time Algorithm for Solving the Hidden Subset Sum Problem.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#a-polynomial-time-algorithm-for-solving-the-hidden-subset-sum-problem) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#a-polynomial-time-algorithm-for-solving-the-hidden-subset-sum-problem)**
### 作者
* Jean-Sébastien Coron, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Agnese Gini, University of Luxembourg, Esch-sur-Alzette, Luxembourg
### 摘要
> 在1999年的"Crypto"会议上，Nguyen和Stern描述了一个基于格子的算法，用于解决隐藏子集和问题，这是经典子集和问题的一个变体，在此问题中，n个权重也是隐藏的。尽管Nguyen-Stern算法在实践中对于适度的n值运作得相当好，我们却认为其复杂度实际上是n的指数级别；具体来说，在最后一步，必须恢复一个非常短的n维格子的基础，这在n中需要指数时间，因为人们必须使用越来越大的块大小来应用BKZ缩减。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_1](https://doi.org/10.1007/978-3-030-56880-1_1)
## Asymptotic Complexities of Discrete Logarithm Algorithms in Pairing-Relevant Finite Fields.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#asymptotic-complexities-of-discrete-logarithm-algorithms-in-pairing-relevant-finite-fields) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#asymptotic-complexities-of-discrete-logarithm-algorithms-in-pairing-relevant-finite-fields)**
### 作者
* Gabrielle De Micheli, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
* Pierrick Gaudry, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
* Cécile Pierrot, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
### 摘要
> 我们研究了在小和中等特征有限域之间边界情况下的离散对数问题，这正是配对密码系统中使用的有限域存在的区域。为了评估基于配对的协议的安全性，我们彻底分析了在这个边界情况下共存的所有算法的复杂性：准多项式算法、数域筛和其多个变种，以及函数域筛。我们将函数域筛适应到扩展次数是合成数的特殊情况，并展示了如何通过在一个平移的函数域中工作来降低复杂性。整个研究最终使我们能够给出渐近达到配对的最高安全级别的特征的精确值。令人惊讶的是，存在与一般特征一样安全的特殊特征。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_2](https://doi.org/10.1007/978-3-030-56880-1_2)
## Comparing the Difficulty of Factorization and Discrete Logarithm: A 240-Digit Experiment.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#comparing-the-difficulty-of-factorization-and-discrete-logarithm-a-240-digit-experiment) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#comparing-the-difficulty-of-factorization-and-discrete-logarithm-a-240-digit-experiment)**
### 作者
* Fabrice Boudot, Université de Limoges, XLIM, UMR 7252, F-87000, Limoges, France
* Pierrick Gaudry, Université de Lorraine, CNRS, Inria, LORIA, F-54000, Nancy, France
* Aurore Guillevic, Université de Lorraine, CNRS, Inria, LORIA, F-54000, Nancy, France
* Emmanuel Thomé, Université de Lorraine, CNRS, Inria, LORIA, F-54000, Nancy, France
* Paul Zimmermann, Université de Lorraine, CNRS, Inria, LORIA, F-54000, Nancy, France
* Nadia Heninger, University of California, San Diego, USA
### 摘要
> 我们报告了两项新的记录：RSA-240的分解，即一项795位数，以及795位素域上的离散对数计算。先前的记录分别是2009年的RSA-768的分解和2016年的768位离散对数计算。我们在795位级别上进行的这两项计算使用了相同的硬件和软件，结果表明计算一个离散对数并不比同等大小的分解更困难。此外，由于算法变体和精选的参数，我们的计算比基于先前记录所预期的要廉价得多。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_3](https://doi.org/10.1007/978-3-030-56880-1_3)
## Breaking the Decisional Diffie-Hellman Problem for Class Group Actions Using Genus Theory.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#breaking-the-decisional-diffie-hellman-problem-for-class-group-actions-using-genus-theory) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#breaking-the-decisional-diffie-hellman-problem-for-class-group-actions-using-genus-theory)**
### 作者
* Wouter Castryck, imec-COSIC, KU Leuven, Leuven, Belgium
* Frederik Vercauteren, imec-COSIC, KU Leuven, Leuven, Belgium
* Jana Sotáková, QuSoft/University of Amsterdam, Amsterdam, The Netherlands
### 摘要
> 在本文中，我们使用属物种理论来分析理想类群对虚二次序的决策Diffie-Hellman问题（DDH）的困难性，通过同态进行椭圆曲线集合的行动；这些行动在Couveignes-Rostovtsev-Stolbunov协议和CSIDH中使用。具体而言，属物种理论给每个虚二次序\(\mathcal {O}\)配备了一组分配的字符\(\chi : {\text {cl}}(\mathcal {O}) \rightarrow \{ \pm 1\}\)，对于每个这样的字符和每个将两个公共椭圆曲线E和\( E' = [\mathfrak {a}] \star E \)连接的秘密理想类\([\mathfrak {a}]\)，我们展示了如何仅通过E和\(E'\)计算\(\chi ([\mathfrak {a}])\)，即不需要知道\([\mathfrak {a}]\)。实际上，只要类数为偶数（这对于所有虚二次序的密度1子集成立），这就破解了DDH。例如，我们的攻击对于满足\(p \equiv 1 \bmod 4\)的所有超奇异椭圆曲线\(\mathbb {F}_p\)非常高效。我们的方法依赖于计算Tate配对和沿同源火山地形行进。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_4](https://doi.org/10.1007/978-3-030-56880-1_4)
## A Classification of Computational Assumptions in the Algebraic Group Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#a-classification-of-computational-assumptions-in-the-algebraic-group-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#a-classification-of-computational-assumptions-in-the-algebraic-group-model)**
### 作者
* Balthazar Bauer, Inria, ENS, CNRS, PSL, Paris, France
* Georg Fuchsbauer, TU Wien, Vienna, Austria
* Julian Loss, University of Maryland, College Park, USA
### 摘要
> 我们对代数群模型（AGM）中的计算假设进行了分类。我们首先分析了Boyen的Uber假设族在双线性群中的应用，然后通过多种方式扩展其范围，涵盖了诸如Gap Diffie-Hellman和LRSW等各种假设。我们证明，在AGM中，这些假设族的每个成员都可以由q离散对数（DL）假设暗示，其中q取决于定义Uber假设的多项式的次数。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_5](https://doi.org/10.1007/978-3-030-56880-1_5)
## Fast Reduction of Algebraic Lattices over Cyclotomic Fields.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#fast-reduction-of-algebraic-lattices-over-cyclotomic-fields) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#fast-reduction-of-algebraic-lattices-over-cyclotomic-fields)**
### 作者
* Paul Kirchner, Rennes Univ., IRISA/CNRS France, Rennes, France
* Thomas Espitau, Rennes Univ., IRISA/CNRS France, Rennes, France
* Pierre-Alain Fouque, Rennes Univ., IRISA/CNRS France, Rennes, France
* Thomas Espitau, NTT Corp. Secure Plateform Laboratories, Rennes, France
### 摘要
> 我们描述了两种非常高效的多项式时间算法，用于减少在任意回旋复合场上定义的模型格子，解决γ-Hermite模块-最短向量问题。这两者都利用了塔场的结构，第二个算法还利用了在这些场中存在的辛几何。我们推测，带有B位系数的n阶回旋复合场上的2阶模块可以在\(2^{\widetilde{\text {O}}\left( n\right) }\)的近似因子下，在\( \widetilde{\text {O}}\left( n^2B\right) \)的时间内被启发式地降维。在辛算法中，如果输入矩阵的条件数C足够大，这个复杂性缩小到 \( \widetilde{\text {O}}\left( n^{\log _2 3}C\right) \)。在密码学中，矩阵处理得很好，我们可以取 \(C=B\)，但在最坏的情况下，C可能大到nB。这最后的结果特别引人注目，因为对一些矩阵，我们可以低于由基于势能的LLL分析给出的 \(n^2B\) 换位的下界。这些算法是并行的，并且我们提供了完全实现。我们通过减少维数为4096，整数位数为6675位的矩阵，将它们应用在多线性密码具体参数上，这耗时4天。最后，我们为Gentry-Szydlo算法给出一个准立方时间，并在1024维度上运行它。它需要有效的理想乘法，这需要快速的格子

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_6](https://doi.org/10.1007/978-3-030-56880-1_6)
## Faster Enumeration-Based Lattice Reduction: Root Hermite Factor k1/(2k) Time kk/8+o(k).
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#faster-enumeration-based-lattice-reduction-root-hermite-factor-k1-2k-time-kk-8-o-k) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#faster-enumeration-based-lattice-reduction-root-hermite-factor-k1-2k-time-kk-8-o-k)**
### 作者
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London, Egham, England
* Shi Bai, Department of Mathematical Sciences, Florida Atlantic University, Boca Raton, USA
* Pierre-Alain Fouque, Univ. Rennes, CNRS, IRISA, Rennes, France
* Paul Kirchner, Univ. Rennes, CNRS, IRISA, Rennes, France
* Weiqiang Wen, Univ. Rennes, CNRS, IRISA, Rennes, France
* Damien Stehlé, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Damien Stehlé, Institut Universitaire de France, Paris, France
### 摘要
> 我们提出了一种晶格缩减算法，在多项式内存的情况下，能够在时间\(k^{k/8+o(k)}\)内实现根Hermite因子\(k^{1/(2k)}\)。这优于先前已知的基于枚举的算法，它们在相同质量上的运行时间为\(k^{k/(2e) + o(k)}\)。在先前的工作中，\(k^{k/8 + o(k)}\)的成本曾被提及为可能实现的（Hanrot-Stehlé’10）或作为枚举算法的启发性下界（Nguyen’10）。我们在一种启发式假设下证明了算法的复杂性和质量，并通过模拟和实现实验提供了实证证据，证明其在实际和密码参数尺寸下的性能。我们的工作还提出了在相同根Hermite因子下实现低于\(k^{k/8 + o(k)}\)成本的潜在途径，基于SDBKZ缩减基的几何特性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_7](https://doi.org/10.1007/978-3-030-56880-1_7)
## Lattice Reduction for Modules, or How to Reduce ModuleSVP to ModuleSVP.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#lattice-reduction-for-modules-or-how-to-reduce-modulesvp-to-modulesvp) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#lattice-reduction-for-modules-or-how-to-reduce-modulesvp-to-modulesvp)**
### 作者
* Tamalika Mukherjee, Purdue University, West Lafayette, USA
* Noah Stephens-Davidowitz, Cornell University, Ithaca, USA
### 摘要
> 这是 [MS20]的扩展摘要。请在eprint:2019/1142中查看完整版本。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_8](https://doi.org/10.1007/978-3-030-56880-1_8)
## Random Self-reducibility of Ideal-SVP via Arakelov Random Walks.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#random-self-reducibility-of-ideal-svp-via-arakelov-random-walks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#random-self-reducibility-of-ideal-svp-via-arakelov-random-walks)**
### 作者
* Koen de Boer, Cryptology Group, CWI, Amsterdam, The Netherlands
* Léo Ducas, Cryptology Group, CWI, Amsterdam, The Netherlands
* Alice Pellet-Mary, imec-COSIC, KU Leuven, Leuven, Belgium
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, INRIA, IMB, UMR 5251, 33400, Talence, France
### 摘要
> 给定一个数字域，所有的理想晶格空间，在同构意义下，自然形成了一个阿拉克洛夫类群，是一个阿贝尔群。这个事实已为数论家所熟知，但目前在基于晶格密码学的文献中还没有明确使用过。值得注意的是，阿拉克洛夫类群是两个群（类群和单位环面）的组合，已经带来了重要的加密解密方面的技术进展。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_9](https://doi.org/10.1007/978-3-030-56880-1_9)
## Slide Reduction, Revisited - Filling the Gaps in SVP Approximation.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#slide-reduction-revisited-filling-the-gaps-in-svp-approximation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#slide-reduction-revisited-filling-the-gaps-in-svp-approximation)**
### 作者
* Divesh Aggarwal, National University of Singapore, Singapore, Singapore
* Jianwei Li, Information Security Group, Royal Holloway, University of London, Egham, UK
* Phong Q. Nguyen, Inria, Paris, France
* Phong Q. Nguyen, Département d’informatique de l’ENS, ENS, CNRS, PSL University, Paris, France
* Noah Stephens-Davidowitz, Cornell University, Ithaca, USA
### 摘要
> 我们展示了如何推广Gama和Nguyen的滑动减小算法[STOC '08]，以解决格子上的近似最短向量问题（SVP），允许任意块大小，而不仅仅是能整除格子的秩n的块大小。这将显著提高大多数近似因子的运行时间。我们通过将滑动减小与Micciancio和Walter的DBKZ算法[Eurocrypt '16]相结合来实现这一目标。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_10](https://doi.org/10.1007/978-3-030-56880-1_10)
## Rounding in the Rings.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#rounding-in-the-rings) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#rounding-in-the-rings)**
### 作者
* Feng-Hao Liu, Florida Atlantic University, Boca Raton, FL, USA
* Zhedong Wang, Florida Atlantic University, Boca Raton, FL, USA
### 摘要
> 在这项工作中，我们对通过环上的舍入学习（RLWR）建立硬度降低进行了全面研究。为此，我们提出了一个LWR的代数框架，受 Peikert 和 Pepin 最近的一项工作 (TCC '19) 的启发。然后，我们展示了一个针对 Ring-LWR 的搜索到决策缩减算法，将 Bogdanov 等人最初在普通 LWR 设置下得到的结果推广到本例中(TCC '15)。最后，我们展示了从 Ring-LWE 到模环 RLWR （即使包含泄漏的秘密）的缩减算法，将 Alwen 等人在 Crypto ‘13 中对 LWE 到 LWR 的缩减结果一般化。我们其中一个关键技术是一个新的环剩余哈希引理，可能具有独立的兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_11](https://doi.org/10.1007/978-3-030-56880-1_11)
## LWE with Side Information: Attacks and Concrete Security Estimation.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#lwe-with-side-information-attacks-and-concrete-security-estimation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#lwe-with-side-information-attacks-and-concrete-security-estimation)**
### 作者
* Dana Dachman-Soled, University of Maryland, College Park, USA
* Huijing Gong, University of Maryland, College Park, USA
* Léo Ducas, CWI, Amsterdam, The Netherlands
* Mélissa Rossi, ANSSI, Paris, France
* Mélissa Rossi, ENS Paris, CNRS, PSL University, Paris, France
* Mélissa Rossi, Thales, Gennevilliers, France
* Mélissa Rossi, Inria, Paris, France
### 摘要
> 我们提出了一个基于格的方案密码分析框架，当有关秘密和/或错误的“提示”形式的侧面信息可用时。我们的框架推广了所谓的原始格约简攻击，并允许在运行最终格约简步骤之前循序渐进地整合提示。我们整合提示的技术包括稀疏化格子，投影和与超平面相交，和/或改变秘密向量的分布。我们的主要贡献是提出了一个工具箱和一种方法，将这些提示整合到格约简攻击中，并预测带有侧面信息的格约简攻击的性能。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_12](https://doi.org/10.1007/978-3-030-56880-1_12)
## A Key-Recovery Timing Attack on Post-quantum Primitives Using the Fujisaki-Okamoto Transformation and Its Application on FrodoKEM.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#a-key-recovery-timing-attack-on-post-quantum-primitives-using-the-fujisaki-okamoto-transformation-and-its-application-on-frodokem) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#a-key-recovery-timing-attack-on-post-quantum-primitives-using-the-fujisaki-okamoto-transformation-and-its-application-on-frodokem)**
### 作者
* Qian Guo, Department of Electrical and Information Technology, Lund University, Lund, Sweden
* Thomas Johansson, Department of Electrical and Information Technology, Lund University, Lund, Sweden
* Alexander Nilsson, Department of Electrical and Information Technology, Lund University, Lund, Sweden
* Qian Guo, Selmer Center, Department of Informatics, University of Bergen, Bergen, Norway
* Alexander Nilsson, Advenica AB, Malmö, Sweden
### 摘要
> 在应用后量子原语时，众所周知所有处理机密信息的计算都需要实现在常数时间内运行。使用Fujisaki-Okamoto变换或其不同变种之一，可以将一个CPA安全的原语转换为一个IND-CCA安全的KEM。在本文中，我们展示了尽管此转换除了调用CPA安全原语之外不处理机密信息，但必须在常数时间内实现。也就是说，如果变换中的密文比较

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_13](https://doi.org/10.1007/978-3-030-56880-1_13)
## Efficient Pseudorandom Correlation Generators from Ring-LPN.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#efficient-pseudorandom-correlation-generators-from-ring-lpn) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#efficient-pseudorandom-correlation-generators-from-ring-lpn)**
### 作者
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Geoffroy Couteau, IRIF, Paris, France
* Niv Gilboa, Ben-Gurion University of the Negev, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Lisa Kohl, Technion, Haifa, Israel
* Peter Scholl, Aarhus University, Aarhus, Denmark
### 摘要
> 安全多方计算经常利用一个可信的相关随机源来提高效率。最近的一项研究，由Boyle等人在CCS 2018和Crypto 2019中发起，展示了如何使用廉价、一次性的互动，后跟“静默”本地计算，生成有用形式的相关随机性。这是通过伪随机相关性生成器（PCG）实现的，它是一种将短相关种子扩展为目标相关性实例的确定性函数。之前的研究构建了具体高效的PCG，可以生成简单但有用的相关性，包括随机无视传输和向量-OLE，并提供了分发PCG种子生成的高效协议。这些构建大多基于学习带噪声（LPN）假设的变体。对于其他有用的相关性，PCG的渐进和具体效率均较差。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_14](https://doi.org/10.1007/978-3-030-56880-1_14)
## Scalable Pseudorandom Quantum States.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#scalable-pseudorandom-quantum-states) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#scalable-pseudorandom-quantum-states)**
### 作者
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Omri Shmueli, Tel-Aviv University, Tel Aviv, Israel
### 摘要
> 高效地采样一个与真正随机量子态难以区分的量子态，是量子信息理论中一个基本的任务，它具有计算和物理应用。这通常被称为伪随机（量子）态生成器，或简称 PRS 生成器。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_15](https://doi.org/10.1007/978-3-030-56880-1_15)
## A Non-PCP Approach to Succinct Quantum-Safe Zero-Knowledge.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#a-non-pcp-approach-to-succinct-quantum-safe-zero-knowledge) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#a-non-pcp-approach-to-succinct-quantum-safe-zero-knowledge)**
### 作者
* Jonathan Bootle, IBM Research – Zurich, Rüschlikon, Switzerland
* Vadim Lyubashevsky, IBM Research – Zurich, Rüschlikon, Switzerland
* Ngoc Khanh Nguyen, IBM Research – Zurich, Rüschlikon, Switzerland
* Gregor Seiler, IBM Research – Zurich, Rüschlikon, Switzerland
* Ngoc Khanh Nguyen, ETH Zurich, Zurich, Switzerland
* Gregor Seiler, ETH Zurich, Zurich, Switzerland
* Jonathan Bootle, UC Berkeley, Berkeley, USA
### 摘要
> 今天最紧凑的零知识证明基于离散对数问题和相关的经典假设。如果我们对量子安全解决方案感兴趣，那么所有已知技术都源自基于 Kilian（STOC 92）的 PCP 框架，可以基于任何抗碰撞哈希函数的困难性来实现。这两种方法都产生了渐近对数大小的证明，但是通过利用额外的代数结构，离散对数证明在实际中比通用构造更紧凑数个数量级。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_16](https://doi.org/10.1007/978-3-030-56880-1_16)
## Practical Product Proofs for Lattice Commitments.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#practical-product-proofs-for-lattice-commitments) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#practical-product-proofs-for-lattice-commitments)**
### 作者
* Thomas Attema, CWI – Amsterdam, Amsterdam, The Netherlands
* Thomas Attema, Leiden University, Leiden, The Netherlands
* Thomas Attema, TNO – The Hague, The Hague, The Netherlands
* Vadim Lyubashevsky, IBM Research – Zurich, Rüschlikon, Switzerland
* Gregor Seiler, IBM Research – Zurich, Rüschlikon, Switzerland
* Gregor Seiler, ETH Zurich, Zurich, Switzerland
### 摘要
> 我们构造了一个实用的基于格的零知识论证方法，用于证明已承诺值之间的乘法关系。我们使用的基础承诺方案是Baum等人（SCN 2018）目前最高效的方案，而我们的乘法证明的大小(9KB)只比仅证明知道已承诺值所需的7KB大一点。我们还扩展了Lyubashevsky和Seiler(Eurocrypt 2018)的工作，表明上述结果也可以应用在操作符号\(\mathbb {Z}_q[X]/(X^d+1)\)时，其中\(X^d+1\)分解为低阶因子，这对于许多应用（如范围证明，\(\mathbb {Z}_q\)上的乘法）是一个期望的特

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_17](https://doi.org/10.1007/978-3-030-56880-1_17)
## Lattice-Based Blind Signatures, Revisited.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#lattice-based-blind-signatures-revisited) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#lattice-based-blind-signatures-revisited)**
### 作者
* Eduard Hauck, Ruhr-Universität Bochum, Bochum, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
* Julian Loss, University of Maryland, College Park, USA
* Ngoc Khanh Nguyen, ETH Zurich, Zürich, Switzerland
* Ngoc Khanh Nguyen, IBM Research, Zurich, Rüschlikon, Switzerland
### 摘要
> 我们观察到之前已知的基于格的盲签名方案在安全性证明中存在微小的缺陷（例如，Rückert, ASIACRYPT '08）或者易受攻击（例如，Alkadri等人的BLAZE，FC '20）。受此启发，我们重新思考了利用标准格假设构建盲签名的问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_18](https://doi.org/10.1007/978-3-030-56880-1_18)
## Round-Optimal Black-Box Commit-and-Prove with Succinct Communication.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#round-optimal-black-box-commit-and-prove-with-succinct-communication) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#round-optimal-black-box-commit-and-prove-with-succinct-communication)**
### 作者
* Susumu Kiyoshima, NTT Research, Palo Alto, CA, USA
### 摘要
> 我们提出了一个经济的控制台证明协议构造和一个四轮黑盒构造的提交和证明协议，该构造是WI的，具有恒定的音准误差，并可通过依赖于Khurana等人的(TCC 2018)保持回合变换来升级为ZK，具有可以忽略的准确性错误。我们的构造是通过将Ishai等人的（SICOMP 2009）MPC-in-the-head技术与Kalai等人的（STOC 2014）两轮简明论述相结合获得的，技术的主要新颖之处在于声音的分析-我们表明，尽管Kalai等人的简洁论据不一定针对NP语句提供准确度，但它可以用于MPC-in-the-head技术来证明承诺的MPC视图的一致性。我们的构造基于亚指数困难的碰撞阻力散列函数、两轮PIR和两轮OT。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_19](https://doi.org/10.1007/978-3-030-56880-1_19)
## Efficient Constant-Round MPC with Identifiable Abort and Public Verifiability.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#efficient-constant-round-mpc-with-identifiable-abort-and-public-verifiability) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#efficient-constant-round-mpc-with-identifiable-abort-and-public-verifiability)**
### 作者
* Carsten Baum, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
* Eduardo Soria-Vazquez, Aarhus University, Aarhus, Denmark
* Emmanuela Orsini, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> 最近几年，安全多方计算（MPC）及其应用引起了极大的关注和增长。虽然在效率方面已经取得了很大的进展，但许多当前最先进的协议仍然容易受到拒绝服务攻击的影响。欺骗方可能会阻止诚实方了解计算结果，同时仍保持匿名。可识别中止的安全模型旨在防止这些攻击，它允许诚实方就作弊方的身份达成共识，并在将来将其排除。几个现有的MPC协议提供了对大多数被损坏的方作弊的可识别中止安全性。然而，所有这些协议的轮次复杂度与电路深度呈线性关系（因此不适用于高延迟网络），或者使用具有高计算开销的密码原语或技术。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_20](https://doi.org/10.1007/978-3-030-56880-1_20)
## Black-Box Use of One-Way Functions is Useless for Optimal Fair Coin-Tossing.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#black-box-use-of-one-way-functions-is-useless-for-optimal-fair-coin-tossing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#black-box-use-of-one-way-functions-is-useless-for-optimal-fair-coin-tossing)**
### 作者
* Hemanta K. Maji, Department of Computer Science, Purdue University, West Lafayette, USA
* Mingyuan Wang, Department of Computer Science, Purdue University, West Lafayette, USA
### 摘要
> 一个二方公平硬币抛掷协议可以确保在协议执行期间，即使另一方中止操作，结果仍可交付给诚实方。Cleve（STOC–1986）证明了在一种计算受限的故障停止敌对者情况下，敌对者可以通过在一个r消息的硬币抛掷协议中改变诚实方的输出分布（大约）1/r（在统计距离上）。最优的公平硬币抛掷协议确保没有敌对者可以超过1/r改变输出分布。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_21](https://doi.org/10.1007/978-3-030-56880-1_21)
## Guaranteed Output Delivery Comes Free in Honest Majority MPC.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#guaranteed-output-delivery-comes-free-in-honest-majority-mpc) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#guaranteed-output-delivery-comes-free-in-honest-majority-mpc)**
### 作者
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
* Chenzhi Zhu, Tsinghua University, Beijing, China
### 摘要
> 我们研究了在具有公共广播通道的点对点通道上，保证输出传递的无条件安全的MPC的通信复杂性，对于腐败门限\(t < n/2\)。我们提出了一个问题：“是否有可能构建MPC，使得在这种情况下每个乘法门的通信复杂性与参与方数量呈线性关系？”尽管许多研究致力于减少这种情况下的通信复杂性，但对于上述问题的答案至今仍然难以把握。我们还关注评估每个乘法门的具体通信复杂性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_22](https://doi.org/10.1007/978-3-030-56880-1_22)
## Black-Box Transformations from Passive to Covert Security with Public Verifiability.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#black-box-transformations-from-passive-to-covert-security-with-public-verifiability) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#black-box-transformations-from-passive-to-covert-security-with-public-verifiability)**
### 作者
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
* Mark Simkin, Aarhus University, Aarhus, Denmark
### 摘要
> 在安全计算的背景下，针对潜在对手的安全协议能够确保即使存在恶意方的不端行为，诚实方也有一定概率发现。因此，这些协议提供了比被动安全协议更好的安全保证，并且相比于针对主动对手的完全安全协议，构建起来更容易。一旦检测到作弊行为，允许诚实方计算一个证书，使第三方能够验证被指控方是否有不当行为的协议称为公开可验证协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_23](https://doi.org/10.1007/978-3-030-56880-1_23)
## MPC with Friends and Foes.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#mpc-with-friends-and-foes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#mpc-with-friends-and-foes)**
### 作者
* Bar Alon, Department of Computer Science, Ariel University, Ariel, Israel
* Eran Omri, Department of Computer Science, Ariel University, Ariel, Israel
* Anat Paskin-Cherniavsky, Department of Computer Science, Ariel University, Ariel, Israel
### 摘要
> 传统的安全多方计算的定义假设有一个单一的对抗实体控制着一组被损坏的参与方。直观上讲，这个定义要求敌手对真实世界执行中损坏 t 个参与方的视图可以被一个在理想模型中通过一个可信方与参与方互动的敌手模拟。然而，对于协议中诚实方的视图并没有施加任何限制，因此，如果诚实方获取了关于其他诚实方的私有输入的信息 - 这并不被视为违反隐私。在许多属于 MPC 框架的情况下，这被认为是不可取的。然而，有一些安全协议（例如，Ishai 等人的两轮多方协议 [CRYPTO 2010] 容忍一个被损坏的参与方）指示诚实方向其他诚实方公开他们的私有输入（一旦恶意方被识别出来）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_24](https://doi.org/10.1007/978-3-030-56880-1_24)
## Always Have a Backup Plan: Fully Secure Synchronous MPC with Asynchronous Fallback.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#always-have-a-backup-plan-fully-secure-synchronous-mpc-with-asynchronous-fallback) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#always-have-a-backup-plan-fully-secure-synchronous-mpc-with-asynchronous-fallback)**
### 作者
* Erica Blum, University of Maryland, College Park, USA
* Julian Loss, University of Maryland, College Park, USA
* Chen-Da Liu-Zhang, ETH Zurich, Zürich, Switzerland
### 摘要
> 安全多方计算（MPC）的协议可以根据底层通信模型进行分类。文献中考虑的两种突出通信模型是同步和异步模型，在可实现的安全保证方面存在显著差异。同步MPC协议可以达到最佳的损坏阈值n/2，并允许每个参与方提供输入，但一旦同步假设被违反，完全不安全。另一方面，异步MPC协议在任意网络条件下仍然安全，但只能容忍n/3次损坏，并且无法避免具有较慢连接的参与方无法提供输入。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_25](https://doi.org/10.1007/978-3-030-56880-1_25)
## Reverse Firewalls for Actively Secure MPCs.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#reverse-firewalls-for-actively-secure-mpcs) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#reverse-firewalls-for-actively-secure-mpcs)**
### 作者
* Suvradip Chakraborty, Institute of Science and Technology Austria, Klosterneuburg, Austria
* Stefan Dziembowski, University of Warsaw, Warsaw, Poland
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
### 摘要
> Reverse firewalls是由Miro-nov和Stephens-Davidowitz在Eurocrypt 2015年提出的一种方法，用于保护加密协议免受诚实方设备的攻击。简言之，反向防火墙放置在设备外部，其目标是“清理”由设备发送的消息，以使恶意设备无法将其机密信息泄露给外界。通常假设密码设备受到“功能保持方式”（即非正式地说，协议的功能在此类攻击下保持不变）的攻击。Mironov和Stephens-Davidowitz在论文中构建了一个使用防火墙实现被动安全的双方计算的协议，并将该结果扩展到更强的模型上作为一个未解开的问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_26](https://doi.org/10.1007/978-3-030-56880-1_26)
## Stacked Garbling - Garbled Circuit Proportional to Longest Execution Path.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#stacked-garbling-garbled-circuit-proportional-to-longest-execution-path) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#stacked-garbling-garbled-circuit-proportional-to-longest-execution-path)**
### 作者
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 安全的双方计算（2PC）可以通过使用密码电路（GC）而高效地实现任意程序。GC 效率的瓶颈是通信。广泛认为，在 2PC 过程中，即使对于不被执行的条件分支，也需要传输整个 GC。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_27](https://doi.org/10.1007/978-3-030-56880-1_27)
## Better Concrete Security for Half-Gates Garbling (in the Multi-instance Setting).
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#better-concrete-security-for-half-gates-garbling-in-the-multi-instance-setting) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#better-concrete-security-for-half-gates-garbling-in-the-multi-instance-setting)**
### 作者
* Chun Guo, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, 266237, Shandong, China
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Jonathan Katz, George Mason University, Fairfax, USA
* Xiao Wang, Northwestern University, Evanston, USA
* Chenkai Weng, Northwestern University, Evanston, USA
* Yu Yu, Shanghai Jiao Tong University, Shanghai, China
* Yu Yu, Shanghai Qi Zhi Institute, Shanghai, China
### 摘要
> 我们研究了高性能半门加密方案的具体安全性，这些方案都依赖于（硬件加速的）AES。我们发现当前使用k位线标签的实现方式可以完全被破解 - 这意味着电路评估者可以在\(O (2^k/C)\)的时间内了解到电路加密者的所有输入。其中C是经过加密处理的总非自由门数量，可能跨越多个独立执行过程。该攻击可以应用于已有的电路加密库，当\(k=80\)且\(C \approx 10^9\)时，攻击所需的时间约为267个机器月，成本大约为$3500美元，并可在Google Cloud Platform上实现。由于该攻击可完全并行化，大约需要使用约250台机器，即可在约一个月内完成。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_28](https://doi.org/10.1007/978-3-030-56880-1_28)
## Improved Primitives for MPC over Mixed Arithmetic-Binary Circuits.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#improved-primitives-for-mpc-over-mixed-arithmetic-binary-circuits) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#improved-primitives-for-mpc-over-mixed-arithmetic-binary-circuits)**
### 作者
* Daniel Escudero, Aarhus University, Aarhus, Denmark
* Satrajit Ghosh, Aarhus University, Aarhus, Denmark
* Rahul Rachuri, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
* Marcel Keller, CSIRO’s Data61, Sydney, Australia
### 摘要
> 这项工作介绍了一种改进安全多方计算中算术数据类型和二进制数据类型之间转换的新技术。我们引入了一种新方法，使用我们称之为扩展双认证位（edaBits）进行这些转换，它们对应于算术域中的共享整数，并且其位分解在二进制域中共享。这些可以用于显著提高非线性操作的效率，例如截断、安全比较和位分解。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_29](https://doi.org/10.1007/978-3-030-56880-1_29)
