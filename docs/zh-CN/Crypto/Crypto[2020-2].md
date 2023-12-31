# Crypto[2020-2]
## A Polynomial-Time Algorithm for Solving the Hidden Subset Sum Problem.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#a-polynomial-time-algorithm-for-solving-the-hidden-subset-sum-problem) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#a-polynomial-time-algorithm-for-solving-the-hidden-subset-sum-problem)**
### 作者
* Jean-Sébastien Coron, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Agnese Gini, University of Luxembourg, Esch-sur-Alzette, Luxembourg
### 摘要
> 在Crypto '99会议上，Nguyen和Stern描述了一种基于格的算法来解决隐藏的子集和问题，这是古典子集和问题的变体，其中n个权重也是隐藏的。虽然Nguyen-Stern算法在n的适度值中表现得非常好，但我们认为它的复杂度实际上是指数级的; 即，在最后一步中，必须恢复一个n维格的非常短的基础，这需要指数时间的n，因为必须使用越来越大的块大小应用BKZ缩减。
> 
> 在本文中，我们描述了Nguyen-Stern算法的一种变体，可以在多项式时间内工作。第一步是与原始算法相同的LLL正交格攻击。在第二步中，我们使用一种多元技术来恢复短格向量，并在多项式时间内最终恢复隐藏的秘密。我们的算法在实践中表现得非常好，因为我们可以在几个小时内在单个PC上达到$n \simeq 250$。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_1](https://doi.org/10.1007/978-3-030-56880-1_1)
## Asymptotic Complexities of Discrete Logarithm Algorithms in Pairing-Relevant Finite Fields.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#asymptotic-complexities-of-discrete-logarithm-algorithms-in-pairing-relevant-finite-fields) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#asymptotic-complexities-of-discrete-logarithm-algorithms-in-pairing-relevant-finite-fields)**
### 作者
* Gabrielle De Micheli, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
* Pierrick Gaudry, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
* Cécile Pierrot, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
### 摘要
> 我们研究了小型和中型特征有限域之间的离散对数问题，这恰好是基于配对密码系统中使用的有限域所处的领域。为了评估基于配对的协议的安全性，我们彻底分析了这个边界情况下所有算法的复杂度：准多项式算法、数域筛法及其多种变体以及函数域筛法。我们将后者适应于扩展度为复合数的特殊情况，并展示了如何通过在一个偏移函数域中工作来降低复杂度。这些研究最终允许我们给出渐近达到配对的最高安全级别的特征的精确值。令人惊讶的是，存在与一般特征一样安全的特殊特征。

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
> 我们报告了两项新的纪录：RSA-240（一795位数）的分解以及一795位素数域上的离散对数计算。之前的纪录是在2009年进行的RSA-768的分解以及在2016年进行的768位离散对数计算。我们在795位级别上进行的这两个计算使用了相同的硬件和软件，表明计算离散对数并不比相同大小的分解更困难。此外，由于算法变体和选取的参数得当，我们的计算成本显著低于先前的纪录所预期的。本文的最后一页也报告了关于RSA-250的分解情况。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_3](https://doi.org/10.1007/978-3-030-56880-1_3)
## Breaking the Decisional Diffie-Hellman Problem for Class Group Actions Using Genus Theory.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#breaking-the-decisional-diffie-hellman-problem-for-class-group-actions-using-genus-theory) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#breaking-the-decisional-diffie-hellman-problem-for-class-group-actions-using-genus-theory)**
### 作者
* Wouter Castryck, imec-COSIC, KU Leuven, Leuven, Belgium
* Frederik Vercauteren, imec-COSIC, KU Leuven, Leuven, Belgium
* Jana Sotáková, QuSoft/University of Amsterdam, Amsterdam, The Netherlands
### 摘要
> 在本文中，我们使用属相理论来分析理想类群对虚二次序数的决策性Diffie-Hellman问题（DDH）的困难程度，该理论通过同构作用于椭圆曲线集合中来使用，这些行动在Couveignes-Rostovtsev-Stolbunov协议和CSIDH中得到应用。具体来说，属相理论为每个虚二次序数\(\mathcal {O}\)配备了一组分配的字符\(\chi : {\text {cl}}(\mathcal {O}) \rightarrow \{ \pm 1\}\)，对于每个这样的字符和连接两个公共椭圆曲线E和\(E' = [\mathfrak {a}]\star E\)的每个秘密理想类\([\mathfrak {a}]\)，我们展示了如何仅通过E和\(E'\)计算\(\chi ([\mathfrak {a}])\)，即在不知道\([\mathfrak {a}]\)的情况下实现。在实践中，只要类号是偶数，这就会使得DDH变得不安全，而对于所有虚二次序数的密度为1的子集而言，这种情况是成立的。例如，我们的攻击对于所有满足\(p \equiv 1 \bmod 4\)的有限域\(\mathbb {F}_p\)上的所有超奇异椭圆曲线非常高效。我们的方法依赖于计算Tate配对和沿着同构火山行走。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_4](https://doi.org/10.1007/978-3-030-56880-1_4)
## A Classification of Computational Assumptions in the Algebraic Group Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#a-classification-of-computational-assumptions-in-the-algebraic-group-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#a-classification-of-computational-assumptions-in-the-algebraic-group-model)**
### 作者
* Balthazar Bauer, Inria, ENS, CNRS, PSL, Paris, France
* Georg Fuchsbauer, TU Wien, Vienna, Austria
* Julian Loss, University of Maryland, College Park, USA
### 摘要
> 我们对代数群模型（AGM）中的计算假设进行分类。我们首先分析了Boyen的Uber假设家族，用于双线性群，然后以多种方式扩展它，以涵盖Gap Diffie-Hellman和LRSW等多样的假设。我们证明在AGM中，这些家族的每个成员都可以由q-离散对数（DL）假设暗示，其中q取决于定义Uber假设的多项式的次数。
> 
> 然后，我们使用元缩减技术将\((q+1)\)-DL与q-DL分开，从而对扩展Uber假设家族的所有成员进行分类。最后，我们证明了存在一些强假设，例如一次更多的DL，可以被明显地排除在我们的分类之外，通过证明它们不能从q-DL甚至在AGM中降低。

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
> 我们描述了两种非常高效的多项式时间算法，用于减少在任意环素数域上定义的模格，解决了\(\gamma \)- Hermite模- SVP问题。它们都利用了塔字段的结构，第二种算法还利用了这些字段中存在的辛几何。我们猜测，在次数为n的环素数域上，系数为B位的秩2模块可以在时间 \(\widetilde{\text {O}}\left( n^2B\right) \)内被启发式地减少到近似因子 \(2^{\widetilde{\text {O}}\left( n\right) }\)。在辛算法中，如果输入矩阵的条件数C足够大，则该复杂性缩小到 \(\widetilde{\text {O}}\left( n^{\log _2 3}C\right) \)。在密码学中，矩阵的条件良好，我们可以取 \(C=B\)，但在最坏情况下，C可以达到nB的大小。这个结果尤其引人注目，因为对于某些矩阵，我们可以低于基于潜力分析给出的 \(n^2B\) 交换下界的。这些算法是并行的，并且我们提供了完整的实现。我们将它们应用于多线性密码学具体参数，通过在4天内减少4096维、6675位整数的矩阵。最后，我们为Gentry-Szydlo算法给出了准立方时间，并在1024维上运行它。它需要高效的理想乘法，需要快速格减小。

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
> 我们提出了一种根 Hermite 因子为 \(k^{1/(2k)}\)，时间复杂度为 \(k^{k/8+o(k)}\) 的格约简算法，并且所需内存多项式级别。这优化了以前已知的基于枚举的算法，在同样的质量要求下，之前的算法所需时间为 \(k^{k/(2e) + o(k)}\)。\(k^{k/8 + o(k)}\) 的计算复杂度在之前的研究中被视为潜在可行的（Hanrot-Stehlé’10），或作为枚举算法的启发性下界（Nguyen’10）。我们在一种启发性假设下证明了我们算法的复杂度和质量，并通过模拟和实现实验提供了经验证据，证明其在实际和密码学参数范围内的性能。我们的工作还为基于 SDBKZ 约简基的相同根 Hermite 因子实现更低代价的方法提供了潜在途径。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_7](https://doi.org/10.1007/978-3-030-56880-1_7)
## Lattice Reduction for Modules, or How to Reduce ModuleSVP to ModuleSVP.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#lattice-reduction-for-modules-or-how-to-reduce-modulesvp-to-modulesvp) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#lattice-reduction-for-modules-or-how-to-reduce-modulesvp-to-modulesvp)**
### 作者
* Tamalika Mukherjee, Purdue University, West Lafayette, USA
* Noah Stephens-Davidowitz, Cornell University, Ithaca, USA
### 摘要
> 这是一篇[MS20]的扩展摘要。请在eprint:2019/1142上查看完整版本。
> 
> 我们展示了如何将格约简算法推广到模格上。具体地，我们将秩为 \(k \ge 2\) 的模格上的 \(\gamma \)-近似ModuleSVP 通过降低至秩为 \(2 \le \beta \le k\) 的模格上的 \(\gamma '\)-近似ModuleSVP 。为此，我们修改了Gama和Nguyen的著名滑动约简算法，使其能够与模滤波器一起工作，模滤波器是对格的（\(\mathbb {Z}\)）基础的高维推广。
> 
> 我们所实现的 \(\gamma \) 的特定值取决于底层数域 K，阶 \(R \subseteq \mathcal {O}_K\)，以及嵌入（当然还有 k 和 \(\beta \)）。然而，对于合理选择的这些参数，所得到的 \(\gamma \) 的结果与“普通”格约简算法的结果非常接近，后者需要在相同维度上任意选择SVP oracle。换句话说，我们展示了ModuleSVP oracles在解决高秩近似ModuleSVP实例方面几乎与SVP oracles同样有用。
> 
> 我们的结果推广了Lee、Pellet-Mary、Stehlé和Wallet最近独立的结果，该结果适用于一种重要特殊情况，即 \(\beta = 2\) 和 \(R = \mathcal {O}_K\) 是域 K 的整数环，并且在规范嵌入下我们的约简有效。实际上，在高层次上，我们的约简可以被认为是对他们约简的推广，其方式与块约简推广LL 约简类似。
> 
> 在这个扩展摘要中，我们提供了更一般结果的特例，完整版本将出现在[MS20]中。

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
> 在固定一个数域的情况下，所有理想格的空间，直到同构，自然地形成了一个阿拉克洛夫类群，被称为阿拉克洛夫类群。这个事实，对于数论家来说是众所周知的，到目前为止在基于格的密码学文献中还未被明确地使用。值得注意的是，阿拉克洛夫类群是两个已经带来了显著密码分析进展的群的组合：类群和单位环面。
> 
> 在本文中，我们展示了阿拉克洛夫类群有更多的发挥空间。我们首先开发了一个新的多功能工具：我们证明，在海克L函数的黎曼猜想成立的条件下，阿拉克洛夫类群上的某些随机行走具有迅速混合的特性。然后我们利用这个结果来联系理想格中最短向量问题的平均情况和最坏情况。我们的简化过程尤为尖锐：对于某些分圆数域中理想格的Hermite-SVP，在Hermite近似因子上最多只会损失\(\tilde{O}(\sqrt{n})\)个因子。
> 
> 此外，我们提出这个迅速混合定理应当在密码学和算法数论中找到其他应用。

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
> 我们展示了如何推广Gama和Nguyen的滑动约简算法[STOC'08]，用于解决格子上的近似最短向量问题（SVP），以允许任意的块大小，而不仅仅是能够整除格子的秩n的块大小。这对于大多数近似因子来说，可以显著提高运行时间。我们通过将滑动约简与Micciancio和Walter的DBKZ算法[Eurocrypt'16]相结合来实现这一目标。
> 
> 我们还展示了另一种算法，适用于块大小相当大的情况——至少是总秩的一半。这为亚线性近似因子提供了第一个非平凡算法。
> 
> 结合一些额外的优化，这些结果可为所有近似因子\(n^{1/2+\varepsilon } \le \delta \le n^{O(1)}\)的\(\delta \)-近似SVP问题提供明显更快的可证明正确的算法，这个范围对于密码学最相关。对于特定的\(\delta = n^{1-\varepsilon }\)和\(\delta = n^{2-\varepsilon }\)的取值，我们将运行时间的指数优化了分别约2倍和1.5倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_10](https://doi.org/10.1007/978-3-030-56880-1_10)
## Rounding in the Rings.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#rounding-in-the-rings) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#rounding-in-the-rings)**
### 作者
* Feng-Hao Liu, Florida Atlantic University, Boca Raton, FL, USA
* Zhedong Wang, Florida Atlantic University, Boca Raton, FL, USA
### 摘要
> 在这项工作中，我们对环形（RLWR）舍入学习进行了全面的硬度降低研究。为此，我们提出了一个LWR的代数框架，受到Peikert和Pepin（TCC'19）最近的一项工作的启发。然后我们展示了一个通用的Ring-LWR搜索到决策的降低，扩展了Bogdanov等人（TCC'15）在普通LWR环境中的结果。最后，我们展示了从Ring-LWE到Module Ring-LWR（即使是泄漏的秘密）的降低，扩展了Alwen等人（Crypto'13）的普通LWE到LWR降低。我们的核心技术之一是一种新的环剩余散列引理，可能具有独立的兴趣。

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
> 我们提出了一个针对基于格的方案进行密码分析的框架，当“提示”形式的关于密钥和/或误差的辅助信息可用时。我们的框架推广了所谓的原始格降解攻击，并允许在运行最终格降解步骤之前逐步集成提示。我们集成提示的技术包括稀疏化格降、映射到和与超平面相交，以及/或改变秘密向量的分布。我们的主要贡献是提出一个工具箱和方法论，将这些提示集成到格降解攻击中，并预测这些带有辅助信息的格攻击的性能。
> 
> 虽然最初设计用于侧信道信息，但我们的框架也可以在其他情况下使用：利用解密失败，或只是利用特定方案所施加的约束（LAC、Round5、NTRU）。
> 
> 我们实现了一个Sage 9.0工具包，用于在计算上可行的情况下实际进行带有提示的攻击，并预测它们在更大场景中的性能。我们提供了几个端到端的应用示例，例如改进了Bos等人（SAC 2018）对Frodo的单跟踪攻击。特别是，我们的工作可以在提供非常少的辅助信息的情况下估计安全性损失，从而在侧信道攻击中实现平滑的测量/计算权衡。

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
> 在实施后量子原始的过程中，众所周知处理秘密信息的所有计算都需要以恒定的时间运行。使用藤崎-冈本变换或其不同的变种，可以将CPA安全的原始转换为IND-CCA安全的KEM。本文表明，尽管变换除了对CPA安全的原始的调用之外并不处理秘密信息，但它必须以恒定时间实施。换句话说，如果变换中的密文比较步骤泄漏了侧信道信息，我们可以发起密钥恢复攻击。
> 
> NIST后量子标准化项目第2轮中的几个提议的方案容易受到所提出的攻击的影响，我们开发并展示了对其中之一FrodoKEM的攻击细节。该攻击是在FrodoKEM的参考实现上实施的，该实现声称对所有时序攻击都是安全的。实验证明，攻击代码能够在大约\(2^{30}\)次解封装调用中提取出所有安全级别的秘密密钥。

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
> 安全多方计算经常使用一个可信的相关随机性源来实现更好的效率。最近一系列工作，由Boyle等人（CCS 2018，Crypto 2019）首创，展示了如何利用廉价的、一次性的互动，然后仅通过“沉默”本地计算生成有用形式的相关随机性。这是通过伪随机相关生成器（PCG）实现的，PCG是一种确定性函数，可将短相关种子拉伸成目标相关的长实例。以前的研究具体构建了适用于简单但有用的相关（包括随机遗忘传输和向量OLE）的高效PCG，并实现了分发PCG种子生成的高效协议。其中大多数构造是基于学习偶校验与噪声（LPN）假设的变种。其他有用的相关的PCG在渐近和具体效率上都很差。
> 
> 在这项工作中，我们设计了一类基于不同类型的环LPN假设的高效PCG。我们的新PCG可以生成OLE相关、认证乘法三元组、矩阵乘积相关和其他类型的大规模字段上的有用相关。这些PCG的效率比以前的构造高出数个数量级，并且可以用于改进许多现有多方计算协议的预处理阶段。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_14](https://doi.org/10.1007/978-3-030-56880-1_14)
## Scalable Pseudorandom Quantum States.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#scalable-pseudorandom-quantum-states) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#scalable-pseudorandom-quantum-states)**
### 作者
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Omri Shmueli, Tel-Aviv University, Tel Aviv, Israel
### 摘要
> 高效地采样一个与真实随机量子态难以区分的量子态，在量子信息理论中是一个基本任务，具有计算和物理用途。这通常被称为伪随机（量子）态生成器或简称 PRS 生成器。
> 
> 在现有的 PRS 生成器构造中，安全性与状态中量子比特的数量成比例，即 n 比特 PRS 的（统计）安全参数大致为 n。也许违背直觉的是，尚不知道 n 比特 PRS 是否意味着 k 比特 PRS，即使对于 \(k<n\) 的情况也如此。因此，至今为止 PRS 的可扩展性问题一直是未解决的：是否可能构建具有所有 \(n, \lambda \) 的安全参数的 n 比特 PRS 生成器？事实上，我们相信具有微小的（甚至是常数的）n 和大的 \(\lambda \) 的 PRS 可能非常有用。
> 
> 我们在这项研究中解决了这个问题，证明了任何量子安全单向函数都暗示着可扩展的 PRS。我们遵循首先在给定对随机函数的预言访问时展示统计安全构造的范例，然后用量子安全（经典）伪随机函数代替随机函数以实现计算安全。然而，我们的方法与以往的工作有很大的不同，因为可扩展的伪随机态需要对量子态的振幅进行随机化，而不仅仅是像以前的工作中那样仅对相位进行随机化。我们展示了如何使用高斯采样来实现这一点。

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
> 今天最紧凑的无知证明是基于离散对数问题和相关的经典假设的难度。如果对量子安全解决方案感兴趣，那么所有已知的技术都源自基于 Kilian（STOC 92）的 PCP 框架，这可以建立在任何抗碰撞哈希函数的难度上。这两种方法都会产生渐近对数大小的证明，但通过利用额外的代数结构，离散对数证明在实践中比通用构造紧凑几个数量级。
> 
> 在这项研究中，我们提出了第一个（多项式）对数、潜在后量子零知识证明，它与 PCP 方法有所不同。简洁零知识证明的核心是简洁承诺方案（其中承诺和开放证明在消息大小上是次线性的），我们提出了两种基于（环）短整数解（Ring-SIS）问题难度的构造，每种都有一定的权衡。对于 N 个秘密值的承诺，我们第一种方案的通信复杂度为 \(\tilde{O}(N^{1/c})\)，其中 c 是任意正整数，而第二种方案为 \(O(\log ^2 N)\)。这两种方案都在理论上显著改进了之前由 Bootle 等人（CRYPTO 2018）提出的最佳格构造，其证明大小为 \(O(\sqrt{N})\)。

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
> 我们构建了一个实用的基于格的零知识参数，用于证明承诺值之间的乘法关系。我们使用的底层承诺方案是目前效率最高的Baum等人的方案（SCN 2018），我们的乘法证明的大小只比所需的仅证明对承诺值的知识的7 KB稍大，为9 KB。此外，我们还扩展了Lyubashevsky和Seiler的工作（Eurocrypt 2018），通过展示以上结果也适用于在环上工作的情况\(\mathbb {Z}_q[X]/(X^d+1)\)，其中\(X^d+1\)被分解为低次因子，这是许多应用（例如范围证明、\(\mathbb {Z}_q\)上的乘法）的理想属性，可以利用将多个整数打包进提交多项式的NTT系数中。

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
> 我们观察到，所有已知的基于格的盲签名方案在其安全性证明中都含有微妙的缺陷（例如，Rückert，ASIACRYPT'08）或者可以被攻击（例如，由Alkadri等人在FC '20的BLAZE）。受此驱动，我们重新探讨了从标准格假设构造盲签名的问题。
> 
> 我们提出了一个新的三轮格基盲签名方案，其安全性可在随机预言模型中，从标准的SIS假设证明。我们的起点是BLAZE方案的一个修改版本（不安全），它本身基于Lyubashevsky的三轮身份认证方案，并结合了一种新的中止技术来减少正确性误差。我们的证明基于并扩展了Hauck，Kiltz和Loss（EUROCRYPT '19）的盲签名模块化框架。它还引入了几种新的技术，以便克服正确性误差带来的额外挑战，这种错误是所有基于格的构造所固有的。
> 
> 尽管我们的构造主要是理论性的，但我们相信它对未来在该领域的工

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_18](https://doi.org/10.1007/978-3-030-56880-1_18)
## Round-Optimal Black-Box Commit-and-Prove with Succinct Communication.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#round-optimal-black-box-commit-and-prove-with-succinct-communication) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#round-optimal-black-box-commit-and-prove-with-succinct-communication)**
### 作者
* Susumu Kiyoshima, NTT Research, Palo Alto, CA, USA
### 摘要
> 我们提出了一个四轮黑盒构造的承诺和证明协议，通信简洁。我们的构造具有证明交互性且具有恒定的声音错误，并且可以通过依赖Khurana等人(TCC 2018)的保持回合变换来升级为零知识且具有可忽略的声音错误。我们的构造是通过结合Ishai等人(SICOMP 2009)的MPC-in-the-head技术和Kalai等人(STOC 2014)的两轮简洁论据来获得的，主要技术创新在于声音分析——我们表明，尽管Kalai等人的简洁论据不一定为\(\mathcal {NP}\)语句提供声音，但它可以用于MPC-in-the-head技术来证明已承诺的MPC视图的一致性。我们的构造基于次指数难度的抗碰撞哈希函数，两轮PIR和两轮OT。

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
> 近年来，人们对安全多方计算（MPC）及其应用的兴趣呈现出巨大增长。尽管在效率方面取得了很多进展，但许多当前先进的协议仍容易受到拒绝服务攻击的影响，其中作弊方可能阻止诚实方了解计算结果，同时保持匿名。可识别中止的安全模型旨在防止这些攻击，允许诚实方就作弊方的身份达成一致意见，并将其排除在外。几种现有的MPC协议提供了识别中止的安全性，防范了多数被损害方的不当行为。然而，所有这些协议的轮次复杂性与电路深度呈线性关系（因此不适合在高延迟网络中使用），或者使用具有高计算开销的密码原语或技术。
> 
> 在这项工作中，我们提出了第一个在多数方不当行为设置下具有可识别中止的高效MPC协议，其轮次恒定，并且仅对加密原语进行黑盒使用。我们的主要构建是通过精心设计的高效原语构建的，以实现低成本的可识别性。特别地，我们避免在设置阶段之外使用公钥操作，除了在目前已知的基于遮蔽电路的最快恒定轮次MPC协议上产生相对低的开销。我们的构建还避免了可适应安全原语和沉重的零知识机制，这在以前的工作中是固有的。此外，我们展示了如何升级我们的协议，以通过公共公告栏实现公共可验证性，从而允许任何外部方验证计算的正确性或识别出作弊方。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_20](https://doi.org/10.1007/978-3-030-56880-1_20)
## Black-Box Use of One-Way Functions is Useless for Optimal Fair Coin-Tossing.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#black-box-use-of-one-way-functions-is-useless-for-optimal-fair-coin-tossing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#black-box-use-of-one-way-functions-is-useless-for-optimal-fair-coin-tossing)**
### 作者
* Hemanta K. Maji, Department of Computer Science, Purdue University, West Lafayette, USA
* Mingyuan Wang, Department of Computer Science, Purdue University, West Lafayette, USA
### 摘要
> 在两方公平抛硬币方案中，即使在协议执行过程中对方放弃，也可以保证输出传送给诚实的一方。Cleve（STOC–1986）证明，即使计算受限的失败-停止敌手可以在 r-消息抛硬币协议中通过 1/r（在统计距离中）粗略地改变诚实一方的输出分布。一个最优公平抛硬币协议确保没有敌手可以改变超过 1/r 的输出分布。
> 
> 在一个开创性的结果中，Moran、Naor 和 Segev（TCC–2009）使用（不公平的）遗忘转移协议构造了第一个最优公平抛硬币协议。遗忘转移协议的存在是否是对最优公平抛硬币的计算困难性假设仍然是理论密码学中最基本的未解问题之一。Impagliazzo 和 Luby（FOCS–1989）以及 Cleve 和 Impagliazzo（1993）的结果证明最优公平抛硬币协议意味着单向函数的存在的必要性；这与安全遗忘转移协议的存在相比，后者是一种明显较弱的计算困难性假设。然而，单向函数的存在是否足够尚不清楚。
> 
> 为了实现这一研究目标，我们的工作证明了最优公平抛硬币与单向函数的存在之间的黑匣子分离。也就是说，黑匣使用单向函数不能实现最优公平抛硬币。遵循标准的 Impagliazzo 和 Rudich（STOC–1989）方法来证明黑匣子分离，我们的工作考虑了随机预言模型下任意 r-消息公平抛硬币协议，协议参与方具有无限的计算能力。我们展示了一种失败-停止攻击策略，使得其中一方通过向随机预言进行多项式次额外查询，可以将诚实一方的输出分布改变 \(1/\sqrt{r}\)，作为结果，我们的结果证明了 Blum（COMPCON–1982）和 Cleve（STOC–1986）的 r-消息抛硬币协议，该协议以黑匣方式使用单向函数，是最佳的协议，因为敌手无法将诚实一方的输出分布改变超过 \(1/\sqrt{r}\)。
> 
> 之前的几项工作，例如 Dachman–Soled、Lindell、Mahmoody 和 Malkin（TCC–2011）、Haitner、Omri 和 Zarosim（TCC–2013）以及 Dachman–Soled、Mahmoody 和 Malkin（TCC–2014），在对抛硬币协议施加某些限制的情况下，为证明这种黑匣子分离取得了部分进展。我们的工作与以往的方法在证明这种黑匣子分离方面有了显著的分歧，因为它具有更广泛的适用性。 起点是最近引入的基于潜在的归纳证明技术，用于在信息论明文模型中证明鞅物的巨大差距。我们的技术贡献在于确定在随机预言模型中通信协议的全局不变量，这使得这种技术可以扩展到随机预言模型中。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_21](https://doi.org/10.1007/978-3-030-56880-1_21)
## Guaranteed Output Delivery Comes Free in Honest Majority MPC.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#guaranteed-output-delivery-comes-free-in-honest-majority-mpc) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#guaranteed-output-delivery-comes-free-in-honest-majority-mpc)**
### 作者
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
* Chenzhi Zhu, Tsinghua University, Beijing, China
### 摘要
> 我们研究了在具有公共广播信道的点对点通道上，对于腐败阈值\(t < n/2\)的无条件安全MPC的通信复杂性，并保证输出传递。我们要提出一个问题：“是否可能构造在此设置中MPC，使得每个乘法门的通信复杂性与参与方数量成线性关系？”虽然许多研究都致力于减少在此设置中的通信复杂性，但直到现在对上述问题的回答仍然难以得到。我们还着重关注评估每个乘法门的具体通信复杂性。
> 
> 我们通过提供一个通信复杂性为\(O(Cn\phi )\)比特（忽略独立于电路的固定项）的MPC来肯定地解决了上述问题，其中\(\phi \)是字段中一个元素的长度，C是（算术）电路的大小，n是参与方的数量。这是第一个与最佳已知半诚实协议匹配的渐近通信复杂性的构造。这相比以前最佳已知的通信复杂性\(O(C(n\phi \,+\,\kappa )\,+\,D_Mn^2\kappa )\)比特有了明显的改进，其中\(\kappa \)是安全参数，\(D_M\)是电路的乘法深度。此外，每个乘法门的具体通信复杂性在最佳情况下为每个参与方5.5个字段元素，在最坏情况下为每个参与方7.5个字段元素，当一个或多个被破坏的参与方已被识别。这也大致与最佳已知的半诚实协议相匹配，该协议需要每个门5.5个字段元素。
> 
> 上述结果还得到了第一个成本与最佳已知半诚实协议的每个乘法门相同的安全中止MPC协议。通过将安全中止MPC协议编译成完全安全的协议，我们获得了主要的结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_22](https://doi.org/10.1007/978-3-030-56880-1_22)
## Black-Box Transformations from Passive to Covert Security with Public Verifiability.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#black-box-transformations-from-passive-to-covert-security-with-public-verifiability) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#black-box-transformations-from-passive-to-covert-security-with-public-verifiability)**
### 作者
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
* Mark Simkin, Aarhus University, Aarhus, Denmark
### 摘要
> 在安全计算的背景下，对抗隐蔽攻击者的安全协议确保任何恶意参与方的不当行为将以某个固定概率被诚实参与方检测到。因此，这些协议提供了比被动安全协议更好的安全性保证，并且相较于对抗主动攻击者的完全安全协议，构建起来更加容易。一旦检测到作弊企图，允许诚实参与方计算一个证书以便第三方验证被指控方是否有不当行为的协议称为公开可验证协议。
> 
> 在本研究中，我们介绍了首个能够从具备被动安全性的协议中构建具有隐蔽安全性和公开可验证性的两方协议的通用编译器。我们提出了两个独立的编译器，它们在使用的底层协议上均采用全黑盒方式。这两个编译器只在带宽开销方面产生了一个常数乘法因子，并且在轮询复杂度方面只有一个常数加法因子，基于所使用的被动安全协议。
> 
> 第一个编译器适用于所有没有私有输入的两方协议。这类协议包括用于设立各方之间相关随机性的重要预处理协议。我们使用编译器得到了首个基于秘密共享的具备隐蔽安全性和公开可验证性的两方协议。值得注意的是，相较于基于秘密共享但未提供公开可验证性的最佳先前解决方案，我们所产生的协议在实现公开可验证性时几乎不需要额外开销。
> 
> 我们的第二个编译器可以从被动安全协议中构建具备隐蔽安全性和公开可验证性的任意功能协议。它使用我们的第一个编译器执行一个独立于参与方输入以及他们希望执行的协议的设置阶段。
> 
> 最后，我们展示了如何扩展我们的技术以获取对抗任意常数比例损坏的多方计算协议，并具备隐蔽安全性和公开可验证性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_23](https://doi.org/10.1007/978-3-030-56880-1_23)
## MPC with Friends and Foes.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#mpc-with-friends-and-foes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#mpc-with-friends-and-foes)**
### 作者
* Bar Alon, Department of Computer Science, Ariel University, Ariel, Israel
* Eran Omri, Department of Computer Science, Ariel University, Ariel, Israel
* Anat Paskin-Cherniavsky, Department of Computer Science, Ariel University, Ariel, Israel
### 摘要
> 经典的安全多方计算的定义假定存在一个单一的敌对实体控制被损坏的一组各方。直觉上，该定义要求在真实世界执行中，敌对方（损坏了t个各方）的视图可以由一个理想模型中的敌对方模拟，其中各方只通过受信任的方进行交互。然而，对于协议中诚实各方的视图，没有施加任何限制，因此，如果诚实各方获得其他诚实各方的私人输入信息，这并不被视为侵犯隐私。在许多属于MPC框架的情况下，这可能是不可取的。然而，存在安全的协议（例如Ishai等人的2轮多方协议[Crypto 2010]容忍单个被损坏的各方），指导诚实各方向所有其他诚实各方披露其私人输入（一旦恶意各方被某种方式确定）。
> 
> 在本文中，我们提出了一个新的安全概念，我们称之为FaF安全，扩展了经典概念。实质上， (t,h*)-FaF安全要求最多h*个诚实各方的视图在理想模型中也能够被模拟（除了恶意敌对方损坏了最多t各方的视图）。即使敌对方通过发送非规定消息向诚实各方泄露信息，这种特性仍然应当保持。我们对新概念进行了深入探讨，并将其与各种现有安全概念进行了调查。我们进一步调查了实现FaF安全的可行性，并表明每个功能都可以用（计算）(t,h*)-FaF全安全来计算，当且仅当2t+h*<m时。有趣的是，下限结果实际上显示，即使在2t+h*>=m时（令人惊讶的是，恶意攻击者的视图并没有被用作攻击的触发器），总体而言，公平的FaF安全实际上是不可能的。
> 
> 我们还调查了(t,h*)-FaF安全协议的最佳轮复杂度，并提供证据表明在Ishai等人的协议[Crypto 2010]中诚实各方私人输入的泄露是固有的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_24](https://doi.org/10.1007/978-3-030-56880-1_24)
## Always Have a Backup Plan: Fully Secure Synchronous MPC with Asynchronous Fallback.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#always-have-a-backup-plan-fully-secure-synchronous-mpc-with-asynchronous-fallback) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#always-have-a-backup-plan-fully-secure-synchronous-mpc-with-asynchronous-fallback)**
### 作者
* Erica Blum, University of Maryland, College Park, USA
* Julian Loss, University of Maryland, College Park, USA
* Chen-Da Liu-Zhang, ETH Zurich, Zürich, Switzerland
### 摘要
> 多方安全计算（MPC）的安全协议可以根据底层通信模型进行分类。文献中考虑的两种主要通信模型是同步和异步模型，它们在可实现的安全性保证方面存在显著差异。同步MPC协议可以实现最佳的故障阈值n/2，并且允许每个参与方提供输入，但当同步假设被违反时，其完全不安全。另一方面，异步MPC协议在任意网络条件下仍然安全，但只能容忍n/3个故障和慢速连接的参与方无法提供输入。
> 
> 一个自然的问题是是否存在一种MPC协议，可以在同步网络下容忍最多\(t_s < n/2\)个故障，并且在异步网络下容忍最多\(t_a < n/3\)个故障。我们通过展示严格的可行性和不可能性结果来回答这个问题。具体而言，我们证明只有在\(t_a + 2t_s < n\)且在异步网络下考虑的输入数量最多为\(n-t_s\)时，才存在这样的协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_25](https://doi.org/10.1007/978-3-030-56880-1_25)
## Reverse Firewalls for Actively Secure MPCs.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#reverse-firewalls-for-actively-secure-mpcs) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#reverse-firewalls-for-actively-secure-mpcs)**
### 作者
* Suvradip Chakraborty, Institute of Science and Technology Austria, Klosterneuburg, Austria
* Stefan Dziembowski, University of Warsaw, Warsaw, Poland
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
### 摘要
> 在Eurocrypt 2015年，Miro-nov和Stephens-Davidowitz引入了反防火墙，作为一种保护密码协议免受对诚实方设备攻击的方法。简而言之：反防火墙被放置在设备外部，其目标是“清洁”发送的消息，以使恶意设备不能将其机密泄露给外部世界。通常假定密码设备以“保持功能性”的方式遭受攻击（即非正式地说，协议的功能在此类攻击下保持不变）。在他们的论文中，Mironov和Stephens-Davidowitz构建了一个带有防火墙的被动安全的两方计算协议，并将此结果扩展到更强模型保留为一个未决问题。
> 
> 在本文中，我们通过构建一个带有防火墙的安全计算协议，解决了这个问题，并相对于Eurocrypt 2015年的原始协议具有两个主要优势。首先，它是一种多方计算协议（即它适用于任意数量n的参与方，而不仅仅是2）。其次，它在更强的破坏设置中是安全的，即在主动破坏模型中。更确切地说：我们考虑一个完全可以破坏最多n-1个参与方的对手，而其余参与方以保持功能性的方式受到腐蚀。
> 
> 我们的核心技术是：可塑承诺和可塑非交互式零知识，特别是允许我们创建一个新颖的多方增强抛硬币协议，其中包括具有反防火墙的井（这是基于Lindell在Crypto 2001中的一个协议）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_26](https://doi.org/10.1007/978-3-030-56880-1_26)
## Stacked Garbling - Garbled Circuit Proportional to Longest Execution Path.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-2].md#stacked-garbling-garbled-circuit-proportional-to-longest-execution-path) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-2].md#stacked-garbling-garbled-circuit-proportional-to-longest-execution-path)**
### 作者
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 通过使用混淆电路（GC），可以有效地实现任意程序的安全两方计算（2PC）。GC效率的瓶颈是通信。人们普遍认为，在2PC期间，即使是未取的条件分支，也必须传输整个GC。
> 
> 这种传统观念是错误的。
> 
> 我们提出了一种新颖的GC技术，叠加混淆，它消除了非活动条件分支的通信成本。我们扩展了在(Kolesnikov, Asiacrypt 18)和(Heath和Kolesnikov, Eurocrypt 20)中探索的条件GC评估的想法。与这些工作不同，我们的工作是适用于一般的2PC，没有玩家知道哪个条件分支被采取。
> 
> 我们的混淆方案\(\textsf {Stack}\)，需要的通信量与最长执行路径成比例，而不是整个电路。 \(\textsf {Stack}\)与最先进的技术兼容，如free XOR 和half-gates.
> 
> \(\textsf {Stack}\)是一个混淆方案。因此，它可以插入到各种现有的协议中，从而产生的轮次复杂度与标准GC的相同。这种方法确实会导致条件分支因子的二次计算成本，而标准方案是线性的，但对大多数程序来说，这种权衡是有益的：即使在弱硬件上，GC的计算比在快速通道上的GC传输要快。
> 
> 我们在 C++ 中实现了\(\textsf {Stack}\)。 \(\textsf {Stack}\)大约按照分支因子减少通信成本：对于16个分支，通信量减少了 \(10.5{\times }\)。对于分支因子为16的电路，在50 Mbps的WAN上的笔记本电脑上，就墙钟时间而言，\(\textsf {Stack}\)比最先进的基于half-gates的2PC性能提高了 \(4{\times }\)

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
> 我们研究了半门加扰的高性能实现的具体安全性，这些实现都依赖于（硬件加速的）AES。我们发现，目前使用k位线标签的现有实例可以被完全破解 - 即电路评估者可以学习到电路加扰者的所有输入，所花费的时间为\(O(2^k/C)\)，其中C是已经加扰的（非免费）门的总数，可能涉及多个独立的执行。当\(C \approx 10^9\)时，该攻击可以应用于现有的电路加扰库，使用k=80，需要\(267\)个机器月，并且在Google Cloud平台上的实现成本约为$\(3500\)。由于该攻击可以完全并行化，使用约\({\approx }250\)台机器可以在一个月内完成。
> 
> 基于此作为我们的动机，我们寻找一种实例化半门方案中的哈希函数的方法，以实现更好的具体安全性。我们提出了一种基于AES的构造，在单实例设定中实现了最佳安全性（仅对单个电路进行加扰时）。我们还展示了如何修改半门方案，使其在多实例设定中没有具体安全性的降低。我们修改后的方案在具有最高2 Gbps带宽的网络中与以前的工作一样高效。

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
> 这项工作介绍了一种改进安全多方计算中算术和二进制数据类型之间转换的新技术。我们引入了一种新的方法，使用我们称之为扩展双重认证比特（edaBits）来执行这些转换，这些比特对应于算术域中的共享整数，在二进制域中共享其位分解。这些比特可以用于大幅提高截断、安全比较和位分解等非线性操作的效率。
> 
> 我们的edaBits类似于Rotaru等人在Indocrypt 2019中介绍的daBits技术。然而，我们展示了edaBits可以比daBits更高效地直接生成，并具有主动安全性，同时在更高级的应用中实现相同的好处。我们生成edaBits的方法涉及一种新颖的剪切选择技术，可能具有独立的研究价值，并通过利用我们构建中出现的二进制电路的自然、防篡改特性来提高效率。我们还展示了如何利用edaBits来高效实现各种非线性协议，并对有符号和无符号整数的正确性进行了全面分析。
> 
> 这项工作的结果可以应用于任何损坏阈值，尽管它们似乎最适合如SPDZ这样的不诚实多数协议。我们实现并基准测试了我们的构造，并通过实验证实了我们的技术在效率方面的大幅提升。与纯粹的算术方法相比，edaBits在安全比较方面的通信节省率介于2和60之间，与使用daBits相比介于2和25之间。每秒吞吐量的提高略低，但仍高达47倍。我们还将这种新颖的技术应用于生物特征匹配和卷积神经网络的任务中，也取得了显着的改进。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_29](https://doi.org/10.1007/978-3-030-56880-1_29)
