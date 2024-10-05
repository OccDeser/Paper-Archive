# Asiacrypt[2023-4]
## A New Approach Based on Quadratic Forms to Attack the McEliece Cryptosystem.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#a-new-approach-based-on-quadratic-forms-to-attack-the-mceliece-cryptosystem) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#a-new-approach-based-on-quadratic-forms-to-attack-the-mceliece-cryptosystem)**
### 作者
* Alain Couvreur, Inria Saclay, LIX, CNRS UMR 7161, École Polytechnique, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Rocco Mora, Inria Paris, 2 rue Simone Iff, 75012, Paris, France
* Jean-Pierre Tillich, Inria Paris, 2 rue Simone Iff, 75012, Paris, France
### 摘要
> 我们介绍了一种新的代数攻击方法，用于攻击目前在NIST比赛第四轮的McEliece加密系统。本文的贡献有两个。首先，我们提出了一种新的区分交替码和Goppa码的区分器，可以在比[FGO+11]更广泛的参数范围内工作。其次，通过这种方法，我们还提供了一种多项式时间的针对可区分的交替码的密钥恢复攻击，其中使用了[FGO+11]提供的区分器。这些结果是通过介绍表示二次形式的矩阵子空间得出的。这些矩阵与密码系统的Goppa（或交替）码的对偶中的分量乘积的二次关系相关联。事实证明，在交替或Goppa码的情况下，这些矩阵子空间包含异常小的秩矩阵（取决于域特征的2或3），揭示了代码的秘密多项式结构。可以使用MinRank求解器恢复方案的秘密密钥。我们设计了一个专用的代数建模，在特征2中Gröbner基础技术可以进行分析。当应用于随机码而不是Goppa或交替码时，此计算的行为会不同。这提供了对后者代码族的区分器，与[FGO+11]提供的仅适用于微小参数范围的区分器相反，它现在可以适用于代码率超过\(\frac{2}{3}\)。它适用于文献中McEliece加密系统的大多数实例。当后者可以应用时，它与[FGO+11]的结果相同（因此在这种情况下具有多项式复杂度）。然而，它的复杂度会在[FGO+11]无法再应用时显著增加，但只要代码的余维数在长度的次线性（渐进指数低于所有已知的密钥恢复或消息攻击）范围内，它仍保持亚指数级别。对于McEliece NIST提交的具体参数[ABC + 22]，它的复杂度过于复杂，无法威胁到密码系统，但对于大多数提交的参数，其复杂度小于已知的密钥恢复攻击。这种二次形式的子空间也可以以不同的方式使用，以基于通用交替码或Goppa码的多项式时间攻击McEliece加密系统，前提是这些代码可以通过[FGO+11]的方法区分，并且在Goppa的情况下，我们需要额外的假设，其程度小于$q-1$，其中$q$是代码的字母表大小。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_1](https://doi.org/10.1007/978-981-99-8730-6_1)
## Solving the Hidden Number Problem for CSIDH and CSURF via Automated Coppersmith.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#solving-the-hidden-number-problem-for-csidh-and-csurf-via-automated-coppersmith) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#solving-the-hidden-number-problem-for-csidh-and-csurf-via-automated-coppersmith)**
### 作者
* Jonas Meers, Ruhr-University Bochum, Bochum, Germany
* Julian Nowakowski, Ruhr-University Bochum, Bochum, Germany
### 摘要
> 本文定义和分析了可交换同构隐藏数字问题，这是CSIDH和CSURF设置中隐藏数字问题的自然类比。简而言之，任务如下：给定两个超奇异椭圆曲线Eₐ，Eᵦ，以及一个可以输出两个曲线的CDH的最高有效位的一些位数的预言机，攻击者必须计算共享曲线EAB=CDH(Eₐ，Eᵦ)。我们证明，只要预言机输出CDH的最高有效位的13/24+ε≈54%（对于CSIDH）和31/41+ε≈76%（对于CSURF），其中ε>0为任意小的常数，我们可以使用Coppersmith的方法在多项式时间内恢复EAB。为此，我们给出了Coppersmith方法的纯组合重述，有效地隐藏了格理论的复杂方面，允许近乎完全自动化。通过利用这种方法，我们在几分钟内获得了ε接近零的恢复攻击。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_2](https://doi.org/10.1007/978-981-99-8730-6_2)
## Memory-Efficient Attacks on Small LWE Keys.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#memory-efficient-attacks-on-small-lwe-keys) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#memory-efficient-attacks-on-small-lwe-keys)**
### 作者
* Andre Esser, Technology Innovation Institute, Abu Dhabi, UAE
* Rahul Girme, Department of Mathematics, Indian Institute of Technology Madras, Chennai, India
* Arindam Mukherjee, Department of Mathematics, Indian Institute of Technology Madras, Chennai, India
* Santanu Sarkar, Department of Mathematics, Indian Institute of Technology Madras, Chennai, India
### 摘要
> LWE问题是构建最有效的后量子安全公钥加密系统的首要候选方案之一。其中许多方案，如Kyber、Dilithium或属于NTRU系列的方案（如NTRU-HPS、-HRSS、BLISS或GLP），都利用小型最大范数密钥来增强效率。这些方案的最佳攻击方式是混合攻击，结合组合技术和格子缩小。虽然格子缩小不知道能否利用小型最大范数选择，但最近May（Crypto 2021）表明，这些选择允许更有效的组合攻击。
> 
> 然而，这些组合攻击需要巨大的存储需求，在实际攻击场景中效率低下，因此在评估安全性时对其进行一般考虑是有问题的。因此，需要更节省内存的算法来替代这些算法。本文提供了一种使用多项式数量的内存恢复小型最大范数LWE密钥的新组合算法。我们对当前NTRU、Kyber和Dilithium变体的秘密密钥分布提供了算法分析，表明我们的新方法优于以前的内存-efficient算法。例如，对于随机长度为n的三元秘密，我们将用于多项式存储器算法的已知最佳时间复杂度从2的1.063n降低到2的0.926n。对于在Kyber和Dilithium中找到的{-m，...，m} n的LWE秘密，我们获得了更大的收益。例如，对于均匀随机密钥在{-2，...，2}的n中，这是Dilithium的情况，我们将先前最佳时间从2的1.742n降低到2的1.282n。
> 
> 我们最快的算法结合了各种不同的算法技术，但其核心是由Dinur、Dunkelman、Keller和Shamir（Crypto 2016）提出的Nested-Rho技术的嵌套碰撞搜索过程。此外，我们还通过最初在子集和上下文中引入的表示技术来充分利用我们的嵌套方法，使其高效。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_3](https://doi.org/10.1007/978-981-99-8730-6_3)
## Too Many Hints - When LLL Breaks LWE.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#too-many-hints-when-lll-breaks-lwe) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#too-many-hints-when-lll-breaks-lwe)**
### 作者
* Alexander May, Ruhr-University Bochum, Bochum, Germany
* Julian Nowakowski, Ruhr-University Bochum, Bochum, Germany
### 摘要
> 所有现代基于格的方案都建立在LWE问题的变体上。LWE秘密 \({\textbf {s}} \in \mathbb {Z}_q^n\) 的信息泄露通常是通过所谓的提示来建模，即 \({\textbf {s}}\) 与某些已知向量的内积。
> 
> 在Crypto'20年，Dachman-Soled，Ducas，Gong和Rossi（DDGR）定义了所谓的完美提示和模块提示等。这一开创性的DDGR框架允许将提示连续集成和组合到格中，并估计由此产生的LWE安全性损失。
> 
> 我们引入了一种新的方法论，以一次性集成和组合任意数量的完美提示和模块提示。与DDGR相比，我们的方法在构建格基时效率显著更高，因此可以轻松地允许大量提示直到加密维度-这是DDGR实施中目前不切实际的制度。我们的方法的效率定义了一个大的LWE参数制度，在这个制度下，我们可以更快地完全实施攻击，而DDGR只能对其进行估计。
> 
> 我们的方法的好处使我们可以实际确定需要多少提示才能有效地打破实践中基于LWE的格方案。例如，对于mod-q提示，即在 \(\mathbb {Z}_q\) 上定义的模块提示，我们仅通过LLL约简用449个提示来重建Kyber-512秘密密钥。
> 
> 我们的完美提示结果明显优于这些数字，对于LWE维度n，大约需要n/2个完美提示。例如，我们仅通过LLL约简就可以用234个完美提示重新构建Kyber-512密钥。如果我们借助更强的格约简技术如BKZ，我们甚至需要更少的提示。
> 
> 对于mod-q提示，我们的方法非常高效，例如，在维度512时，构建我们的格基和通过LLL恢复秘密密钥的总时间大约为20分钟。对于维度512的完美提示，我们需要大约3小时。
> 
> 我们的结果表明，在实践中，尤其是完美提示在实践中非常有效，并强调了适当保护格方案免受泄漏的必要性。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_4](https://doi.org/10.1007/978-981-99-8730-6_4)
## We are on the Same Side. Alternative Sieving Strategies for the Number Field Sieve.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#we-are-on-the-same-side-alternative-sieving-strategies-for-the-number-field-sieve) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#we-are-on-the-same-side-alternative-sieving-strategies-for-the-number-field-sieve)**
### 作者
* Charles Bouillaguet, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
* Ambroise Fleury, Université Paris-Saclay, CEA, List, 91120, Palaiseau, France
* Pierre-Alain Fouque, Univ Rennes, CNRS, IRISA, Rennes, France
* Paul Kirchner, Univ Rennes, CNRS, IRISA, Rennes, France
### 摘要
> 数域筛（NFS）是整数因数分解的最先进算法，筛分是NFS中的一个关键步骤。这是一个非常耗时的操作，旨在收集许多关系。最终目标是生成在模N下的随机平滑整数及其素数分解，其中平滑根据有理和代数两个素数因数基定义。
> 
> 在现代因式分解工具中，例如Cado-NFS，筛分根据素数的大小分成不同阶段，但是为所有阶段定义良好的参数基于启发式和实际论据。一方面，最初的阶段是快的，但许多虚假关系通过了它们，我们花费大量时间处理无用的关系。另一方面，最终阶段需要更多时间，但输出更少的关系。评估筛选步骤的最佳策略的性能并不容易，因为它取决于每个阶段得到的数字的分布。
> 
> 在本文中，我们尝试检查不同的筛选策略以加速这一步骤，因为在NFS的所有其他步骤中都已经进行了许多改进。基于RSA-250因子分解期间收集的关系和所有参数，我们试图研究不同策略以更好地理解这一步骤。自NFS发现以来，许多策略已被定义，并且我们在这里提供了一个实验性评估。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_5](https://doi.org/10.1007/978-981-99-8730-6_5)
## Exploiting the Symmetry of $\mathbb {Z}^n$: Randomization and the Automorphism Problem.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#exploiting-the-symmetry-of-mathbb-z-n-randomization-and-the-automorphism-problem) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#exploiting-the-symmetry-of-mathbb-z-n-randomization-and-the-automorphism-problem)**
### 作者
* Kaijie Jiang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Anyu Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Yang Yu, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Hengyi Luo, Key Laboratory of Mathematics Mechanization, Academy of Mathematics and Systems Science, Chinese Academy of Sciences, Beijing, China
* Hengyi Luo, School of Mathematical Sciences, University of Chinese Academy of Sciences, Beijing, China
* Guoxiao Liu, Institute for Network Sciences and Cyberspace, Tsinghua University, Beijing, China
* Anyu Wang, Zhongguancun Laboratory, Beijing, China
* Yang Yu, Zhongguancun Laboratory, Beijing, China
* Xiaoyun Wang, Zhongguancun Laboratory, Beijing, China
* Anyu Wang, National Financial Cryptography Research Center, Beijing, China
* Yang Yu, National Financial Cryptography Research Center, Beijing, China
* Xiaoyun Wang, National Financial Cryptography Research Center, Beijing, China
* Xiaoyun Wang, Shandong Institute of Blockchain, Jinan, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security (Ministry of Education), School of Cyber Science and Technology, Shandong University, Qingdao, China
### 摘要
> \(\mathbb {Z}^n\)是最简单的格子之一，但其旋转的计算问题，如\(\mathbb {Z}\)SVP和\(\mathbb {Z}\)LIP，在密码学中一直备受关注。近年来，在这些问题上建立了基于密码学的原语，同时开发了新的解决算法。然而，\(\mathbb {Z}\)SVP和\(\mathbb {Z}\)LIP的理论复杂度仍没有得到很好的理解。
> 
> 在这项工作中，我们通过利用对称性，研究了\(\mathbb {Z}^n\)旋转的问题。我们提出了一个随机化框架，可以粗略地视为将‘随机自同构’应用于不访问自同构群的oracle输出。利用这个框架，我们得到了\(\mathbb {Z}^n\)旋转的新的约化结果。首先，我们提出了从\(\mathbb {Z}\)LIP到\(\mathbb {Z}\)SCVP的约化。这里\(\mathbb {Z}\)SCVP是找到最短特征向量的问题，是CVP的一种特殊情况，其中目标向量是格子的深洞。此外，在相同的维度中，我们证明了从\(\mathbb {Z}\)SVP到\(\gamma \)-\(\mathbb {Z}\)SVP的约化，其中任何常数\(\gamma = O(1)\)都意味着\(\mathbb {Z}\)SVP与其任意常数近似版本一样困难。其次，我们研究了寻找给定格子的非平凡自同构的问题，称为LAP。具体而言，我们使用随机化框架来证明\(\mathbb {Z}\)LAP与\(\mathbb {Z}\)LIP同样困难。我们注意到，我们的结果可以视为[JoC2017]中Lenstra和Silverberg结果的\(\mathbb {Z}^n\)版本，但假设不同：他们假设G-格子结构，而我们假设访问一个输出非平凡自同构的oracle。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_6](https://doi.org/10.1007/978-981-99-8730-6_6)
## SCA-LDPC: A Code-Based Framework for Key-Recovery Side-Channel Attacks on Post-quantum Encryption Schemes.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#sca-ldpc-a-code-based-framework-for-key-recovery-side-channel-attacks-on-post-quantum-encryption-schemes) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#sca-ldpc-a-code-based-framework-for-key-recovery-side-channel-attacks-on-post-quantum-encryption-schemes)**
### 作者
* Qian Guo, Department of Electrical and Information Technology, Lund University, Lund, Sweden
* Denis Nabokov, Department of Electrical and Information Technology, Lund University, Lund, Sweden
* Alexander Nilsson, Department of Electrical and Information Technology, Lund University, Lund, Sweden
* Thomas Johansson, Department of Electrical and Information Technology, Lund University, Lund, Sweden
* Alexander Nilsson, Advenica AB, Malmö, Sweden
### 摘要
> 虽然标准密码基元的理论攻击很少会导致实际的实际攻击，但是情况对于侧信道攻击来说是不同的。侧信道攻击性能的提高至关重要。本文提出了一个用于针对CCA-secure后量子加密方案的密钥恢复侧信道攻击的框架。基本思想是构造选择的密文查询到一个明文检查预测机，以收集单次查询中一组秘密变量的信息。然后考虑大量此类查询，每个查询都与不同的秘密变量集相关，并将它们建模为低密度奇偶校验码（LDPC码）。最终通过使用软信息的有效迭代解码方法，如置信传播，确定秘密变量。 LDPC码的使用提供了高效的译码，源编码和纠错优势。已经证明，与以前的工作相比，这种方法通过减少所需查询的数量，例如在功率攻击中的跟踪数量，提供了显着的改进。在两种不同情况下演示和实施了该框架。一方面，在时序攻击中攻击HQC的实施，将所需跟踪的数量与以前的攻击相比显着降低。另一方面，我们描述并实现了对Kyber的掩蔽实现的完整攻击，使用功率分析。使用ChipWhisperer评估平台，我们的实际攻击仅通过12个功率跟踪恢复了Kyber-768的一阶掩蔽实现的长期秘密密钥。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_7](https://doi.org/10.1007/978-981-99-8730-6_7)
## Exploiting Algebraic Structures in Probing Security.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#exploiting-algebraic-structures-in-probing-security) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#exploiting-algebraic-structures-in-probing-security)**
### 作者
* Maxime Plançon, IBM Research Europe, Zurich, Switzerland
* Maxime Plançon, ETH Zurich, Zurich, Switzerland
### 摘要
> 所谓的 \(\omega \)-编码，由Goudarzi、Joux和Rivain（Asiacrypt 2018）引入，泛化了常用的算术编码。通过利用这种编码的附加结构，他们提出了一个具有准线性（随机性和操作）复杂度的掩码乘法小工具（GJR）。Goudarzi、Prest、Rivain和Vergnaud在TCHES 2021上发表的研究续篇延续了这一研究方向。作者重新审视了前述的乘法小工具（GPRV），并为刷新小工具带来了IOS安全概念，以允许在保护安全小工具之间进行安全组合。本文中，我们提出了对GPRV的后续研究，即区域探测安全算术电路掩码编译器。我们的贡献源于一个引理，将代数与探测安全链接起来，适用于广泛类别的电路，进一步利用了 \(\omega \)-编码的代数结构，以及迄今未被利用的底层域的扩展域结构。从理论上讲，我们提出了一种称为可化约至独立K-线性（RTIK）的 \(\boldsymbol{\omega }_d\)-掩码电路的安全概念。当股份数量d小于或等于 的度k时，RTIK电路实现了区域探测安全。此外，RTIK电路可以天真地组合并保持RTIK。我们还针对刷新小工具提出了一种较弱版本的IOS，称为KIOS。与天真合成相比，这种概念允许对RTIK电路进行随机性/安全性权衡。为了证明我们新定义的有效性，我们还提供了满足上述较弱安全概念的具有竞争效率的小工具示例。明确地，我们提供了1）使用 \(d-1\) 个随机域元素刷新长度为d的编码的两个刷新小工具，两者都是KIOS但不是IOS，以及2）一个具有双线性乘法复杂度 \(d^{\log 3}\) 并且每次运行使用d个新随机元素的乘法小工具。我们的编译器在渐近意义上优于ISW，但为了使我们的安全性证明成立，我们确实要求股份数量d小于或等于作为扩展度，以便有足够的结构可以利用。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_8](https://doi.org/10.1007/978-981-99-8730-6_8)
## Practically Efficient Private Set Intersection from Trusted Hardware with Side-Channels.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#practically-efficient-private-set-intersection-from-trusted-hardware-with-side-channels) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#practically-efficient-private-set-intersection-from-trusted-hardware-with-side-channels)**
### 作者
* Felix Dörre, KASTEL Security Research Labs, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Jeremias Mechler, KASTEL Security Research Labs, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Jörn Müller-Quade, KASTEL Security Research Labs, Karlsruhe Institute of Technology, Karlsruhe, Germany
### 摘要
> 私有集合交集（PSI）是一种最重要的隐私增强技术，可用于恶意软件和垃圾邮件检测、儿童色情识别、联系人发现，或者更近期的接触者追踪等应用。在本文中，我们研究了如何简单有效地构建和实现PSI。为此，一种自然可能的方法是使用经过信任的执行环境（TEE），这通常用于代替可信第三方，因为其具有预设的安全保证。然而，这种信任通常是不被保证的：现今的TEE如Intel SGX存在许多旁道攻击漏洞，除非采取措施，否则主机可以学习TEE的秘密。此外，由于高复杂性和闭源性质，无法排除TEE被动地被损坏，即泄露秘密给制造商或NSA等政府机构。在使用TEE构建协议时，这些（潜在的）漏洞需要得到考虑，否则所有安全可能都会丧失。
> 
> 我们提出了一个用于两方PSI的协议，其安全性在TEE不能被完全信任的情况下成立，例如由于旁道攻击的存在。特别是，我们处理了这样的可能性，即i）TEE对主机完全透明，除了非常简单的安全加密操作，或ii）TEE泄露所有秘密给第三方，例如制造商。即使在这个具有挑战性的环境中，我们的协议不仅非常快速，而且概念上简单，这是一个重要的特征，因为更复杂的协议往往会存在微妙的安全缺陷。
> 
> 为了正式捕捉这个环境，我们定义了Pass等人（EUROCRYPT 2017）的TEE理想功能的变体。利用这些功能，我们证明了我们的协议的安全性，在通用组合下成立。为了说明我们的模型的实用性，我们勾画了其他可能的应用，如（随机）无意识传输或汉明距离的私有计算。
> 
> 我们使用Intel SGX作为TEE的PSI实现，在7.3秒内计算了具有\(2^{24}\)个128位元素的两个集合的交集。这使得我们的协议成为迄今为止性能最快的PSI协议。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_9](https://doi.org/10.1007/978-981-99-8730-6_9)
## Quantitative Fault Injection Analysis.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#quantitative-fault-injection-analysis) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#quantitative-fault-injection-analysis)**
### 作者
* Jakob Feldtkeller, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Tim Güneysu, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Tim Güneysu, DFKI, Bremen, Germany
* Patrick Schaumont, Worcester Polytechnic Institute, Worcester, USA
### 摘要
> 主动故障注入是真实数字系统（用于处理敏感数据）的可信威胁。在故障存在的情况下论证安全性非常困难，而目前的现有技术判据则过于保守且缺乏精细的比较能力。然而，对比两种备选方案的安全性在找到安全和性能的令人满意的折衷方案方面是必要的。此外，比较替代故障场景可以帮助优化有效的应对措施的实现。
> 
> 在本研究中，我们利用数量化信息流分析来建立硬件电路中遭受故障注入的漏洞指标，该指标衡量攻击的严重程度与信息泄露有关。潜在的应用范围从比较备选实现的脆弱性到特定故障场景的优化应对措施。我们通过将其集成到物理攻击的最新评估工具中自动计算我们的度量，并为在主动故障攻击下的安全性提供了新的洞见。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_10](https://doi.org/10.1007/978-981-99-8730-6_10)
## On the (Im)possibility of Time-Lock Puzzles in the Quantum Random Oracle Model.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#on-the-im-possibility-of-time-lock-puzzles-in-the-quantum-random-oracle-model) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#on-the-im-possibility-of-time-lock-puzzles-in-the-quantum-random-oracle-model)**
### 作者
* Abtin Afshar, University of Virginia, Charlottesville, USA
* Mohammad Mahmoody, University of Virginia, Charlottesville, USA
* Kai-Min Chung, Academia Sinica, Taipei, Taiwan
* Yao-Ching Hsieh, University of Washington, Seattle, USA
* Yao-Ting Lin, UCSB, Santa Barbara, USA
### 摘要
> 时间锁谜题将答案 $s$ 包装在一个谜题 $P$ 中，以使得“解决” $P$ 来查找 $s$ 需要比生成匹配 $(s,P)$ 更多的时间，即使对手可以访问并行计算；因此可以认为它是将消息 $s$ 发送到未来。已知 [Mahmoody、Moran、Vadhan，Crypto’11]，当困难源仅是随机预言机时，任何具有 n 查询的谜题生成器都可以被对手在 O(n) 轮预言机查询中（有效地）破解。
> 
> 在这项工作中，我们通过允许当事方使用量子计算和特别是在量子叠加中访问随机预言机，重新审视了时间锁谜题。一个有趣的情况是，当谜题生成器是高效和经典时，解谜的人（可能是未来发展出来的实体）是量子动力的，并且被认为需要很长时间才能成功。我们证明，在这种情况下，不存在仅从量子（可访问）随机预言机构建时间锁谜题的方法。特别地，对于任何 n 查询的经典谜题生成器，我们的攻击仅向随机预言机问 O(n) （也是经典的）查询，即使它确实在诚实的谜题解决者需要量子计算时在量子多项式时间内运行。
> 
> 假设完美的完整性，我们还展示了如何使上述攻击在正好 n 轮中运行，同时总共问了 $m·n$ 个查询，其中 m 是解谜者的查询复杂度。这在轮回复杂性方面确实是紧密的，因为我们还证明了 Mahmoody 等人的经典谜题方案对在查询 $n-1$ 轮的量子求解器是安全的。实际上，即使对于完全经典的情况，我们的攻击在完美的完整性情况下从 $O(mn log n)$ 定量地改善了 Mahmoody et al. 的攻击总查询情况至 mn。最后，假设完美的完整性，我们在“双重”设置中提出了一种攻击，其中谜题生成器是量子的，而求解器是经典的。
> 
> 然后我们问，是否可以将我们的经典查询攻击扩展到完全量子的设置中，即谜题生成器和求解器都可能是量子的情况。我们展示了无条件证明这种结果的障碍。特别地，我们展示了如果由 Aaronson 和 Ambainis [arXiv’2009]首次正式陈述的民间模拟猜想是错误的，则在量子随机预言机模型中确实存在无法被经典对手破解的时间锁谜题。这一结果改善了 Austrin 等人关于密钥协议（可以具有双向交互）的先前障碍 [Crypto’22] 到时间锁谜题（仅包括单向通信）。）。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_11](https://doi.org/10.1007/978-981-99-8730-6_11)
## Towards Compressed Permutation Oracles.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#towards-compressed-permutation-oracles) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#towards-compressed-permutation-oracles)**
### 作者
* Dominique Unruh, RWTH Aachen, Aachen, Germany
* Dominique Unruh, University of Tartu, Tartu, Estonia
### 摘要
> 压缩置换（Zhandry，Crypto 2019）是一种强大的技术，用于推理量子随机置换，实现在叠加查询存在的情况下的一种懒惰抽样。一个长期存在的问题是，是否可以使用类似的技术来推理随机（高效可逆）置换。
> 
> 在这项工作中，我们迈出了一步回答这个问题。我们首先定义了压缩置换预言机并说明了它的用途。虽然这种技术的完整性（即无法与随机置换区分）仍然是一种猜测，但我们展示了一个有趣的2对1定理：如果我们使用压缩置换预言机方法来展示某个结构（例如Luby-Rackoff）实现了一个随机置换（或强qPRP），那么我们事实上可以免费得到这种方法的准确性。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_12](https://doi.org/10.1007/978-981-99-8730-6_12)
## Tighter Security for Generic Authenticated Key Exchange in the QROM.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#tighter-security-for-generic-authenticated-key-exchange-in-the-qrom) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#tighter-security-for-generic-authenticated-key-exchange-in-the-qrom)**
### 作者
* Jiaxin Pan, Department of Mathematical Sciences, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Runzhi Zeng, Department of Mathematical Sciences, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, Saarland University, Saarbrücken, Germany
* Jiaxin Pan, University of Kassel, Kassel, Germany
### 摘要
> 我们为在量子随机预言模型（QROM）中从密钥封装机制（KEMs）通用构造的认证密钥交换（AKE）协议提供了更严格的安全性证明。先前的研究（Hövelmanns等人，PKC 2020）证明了在QROM中对基于KEM的AKE协议到基础原语的降低，在用户数量和总会话数方面存在平方根损失和安全性损失。我们的证明更严格，并且没有平方根损失。换句话说，它只会损失与用户数量有关的因素，而与会话数无关。
> 
> 我们的主要工具是一种我们称之为参数丢失加密的新变体。在这种变体中，不仅存在丢失公钥，还有丢失系统参数。这使我们能够将计算假设嵌入到系统参数中，并且丢失的公钥在统计上接近于正常公钥。结合藤崎-冈本变换，我们获得了第一个在多用户（无腐败），多挑战设置下严密的IND-CCA安全KEM。
> 
> 最后，我们证明了多用户，多挑战的KEM意味着在QROM中的平方根严密和会话严密的AKE协议。通过将参数丢失加密紧密地实施在格中，我们获得了第一个在QROM中基于格的平方根严密和会话紧密的AKE。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_13](https://doi.org/10.1007/978-981-99-8730-6_13)
## Post-quantum Security of Key Encapsulation Mechanism Against CCA Attacks with a Single Decapsulation Query.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-4].md#post-quantum-security-of-key-encapsulation-mechanism-against-cca-attacks-with-a-single-decapsulation-query) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-4].md#post-quantum-security-of-key-encapsulation-mechanism-against-cca-attacks-with-a-single-decapsulation-query)**
### 作者
* Haodong Jiang, Henan Key Laboratory of Network Cryptography Technology, Zhengzhou, 450001, Henan, China
* Zhi Ma, Henan Key Laboratory of Network Cryptography Technology, Zhengzhou, 450001, Henan, China
* Zhenfeng Zhang, TCA Laboratory, State Key Laboratory of Computer Science, Institute of Software, Chinese Academy of Sciences, Beijing, 100190, China
### 摘要
> 最近在后量子密码学迁移中，已经证明需要一种IND-1-CCA安全的密钥封装机制（KEM）来替换常用协议中的短暂Diffie-Hellman（DH），例如TLS、Signal和Noise。 IND-1-CCA安全性类似于传统的IND-CCA安全性，但对手只被限制于一次单个解密查询。在EUROCRYPT 2022年会议上，基于CPA安全的公钥加密（PKE），Huguenin-Dumittan和Vaudenay提出了两种IND-1-CCA KEM构造，称为TCH和TH，比广泛使用的IND-CCA安全的Fujisaki-Okamoto（FO）KEM更高效。对TCH的安全性在随机预言机模型（ROM）和量子随机预言机模型（QROM）中都得到了证明。然而，TCH的QROM证明依赖于额外的密文扩展。而对TH的安全性只在ROM中得到了证明，而QROM证明则保留了开放状态。
> 
> 在本文中，我们证明了TH和TRH（TH的隐式变体）在ROM和QROM中的安全性，证明比Huguenin-Dumittan和Vaudenay的工作更为紧凑。尤其是我们的QROM证明不会导致密文扩展。此外，对于TRH、TH和TCH，我们还证明了ROM（QROM）中不可避免的O(1/q)(O(1/q^2))降低损失，因此声称我们ROM证明的紧密性是最优的。最后，我们对ROM和QROM中IND-1-CCA和IND-CCA的相对强度进行了全面比较。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8730-6_14](https://doi.org/10.1007/978-981-99-8730-6_14)
