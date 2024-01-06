# Asiacrypt[2021-4]
## NTRU Fatigue: How Stretched is Overstretched?
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#ntru-fatigue-how-stretched-is-overstretched) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#ntru-fatigue-how-stretched-is-overstretched)**
### 作者
* Léo Ducas, Cryptology Group, CWI, Amsterdam, The Netherlands
* Wessel van Woerden, Cryptology Group, CWI, Amsterdam, The Netherlands
### 摘要
> 最近，对于NTRU格上的格约简攻击被认为与具有相同参数的（环）LWE格子表现类似。然而，几个研究（Albrecht-Bai-Ducas 2016，Kirchner-Fouque 2017）表明，在大模数q的情况下，即NTRU的过张力区域存在显著差距。
> 
> 由于NTRU方案成为NIST PQC竞赛的决赛方案，因此了解疲劳点的确定性和具体性非常重要，即过张力区域从哪个q开始。不幸的是，Kirchner和Fouque的分析基于不可能性论证，只能得到疲劳点的渐近上界。它也没有真正解释格约简如何恢复秘钥信息。
> 
> 我们提出了一种新的分析方法，从渐近上改进了Kirchner和Fouque的结果，将三元NTRU的疲劳点从\(q \le n^{2.783+o(1)}\)缩小到\(q=n^{2.484+o(1)}\)，最后解释了这一现象背后的机制。我们进一步将这个分析具体化，将疲劳点确定为\(q \approx 0.004 \cdot n^{2.484}\)，并允许在过张力区域进行精确的难度预测。这些预测得到了大量实验的支持。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_1](https://doi.org/10.1007/978-3-030-92068-5_1)
## Faster Dual Lattice Attacks for Solving LWE with Applications to CRYSTALS.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#faster-dual-lattice-attacks-for-solving-lwe-with-applications-to-crystals) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#faster-dual-lattice-attacks-for-solving-lwe-with-applications-to-crystals)**
### 作者
* Qian Guo, Department of Electrical and Information Technology, Lund University, P.O. Box 118, 221 00, Lund, Sweden
* Thomas Johansson, Department of Electrical and Information Technology, Lund University, P.O. Box 118, 221 00, Lund, Sweden
### 摘要
> 基于学习困难（Learning With Errors，简称LWE）问题的密码系统被分配了与求解LWE问题的通用算法成本相关的安全级别。其中包括所谓的原始和对偶格攻击。在本文中，我们提出了一种改进的对偶格攻击方法，该方法的思路可以追溯到Bleichenbacher的工作。我们提出了一个改进的区分器，结合猜测步骤，在所有方案的对偶攻击的整体复杂性上显示了降低。我们的第二个贡献是一种新的两步格约简策略，允许新的对偶格攻击利用格约简算法中的两种最新技术，即“免费维度”技巧和在一个筛选中生成多个短向量的技巧。由于这两种技巧的不兼容被认为是对偶攻击不太有趣的主要原因，我们的新约简策略比原始攻击更高效，适用于重要的密码参数集。
> 
> 我们将提出的攻击应用于NIST后量子密码项目的两个入围方案CRYSTALS-Kyber和CRYSTALS-Dilithium，并以核心-SVP模型中的经典和量子复杂性数字呈现新的较低结果。最重要的是，在所提出的安全参数下，我们采用改进的格约简策略的新型对偶攻击，极大地提高了现有原始攻击在经典门计数度量中的水平，即经典随机存取机（RAM）模型，这表明一些参数在宣称的安全级别上处于边缘。具体来说，在使用外推模型（Albrecht等人在Eurocrypt 2019）进行Kyber1024时，改进因子可以达到15比特。此外，我们还展示了Kyber768可以以低于其声称的安全级别的经典门复杂性解决。最后，我们将新攻击应用于Homomorphic Encryption Standard的草案参数（详见https://homomorphicencryption.org），并取得了显著的收益。例如，我们可以在经典RAM模型中使用\(2^{187.0}\)次操作解决针对192比特安全性的参数集。请注意，这些参数已经部署在众所周知的完全同态加密库中。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_2](https://doi.org/10.1007/978-3-030-92068-5_2)
## Lattice Sieving via Quantum Random Walks.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#lattice-sieving-via-quantum-random-walks) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#lattice-sieving-via-quantum-random-walks)**
### 作者
* André Chailloux, Inria de Paris, EPI COSMIQ, Paris, France
* Johanna Loyer, Inria de Paris, EPI COSMIQ, Paris, France
### 摘要
> 格基密码学是后量子密码学的领先方案之一。最短向量问题（SVP）是格基密码学的密码分析中最重要的问题之一，许多基于格基的方案都基于其困难性提出了安全性声明。SVP的最佳量子算法是由Laarhoven [Laa16] 提出的，其运行时间为（启发式）\(2^{0.2653d + o(d)}\)。在本文中，我们提出了对Laarhoven的结果的改进，并提出了一种具有（启发式）运行时间为\(2^{0.2570d + o(d)}\)的算法，其中d是格基的维度。我们还提出了时间-内存权衡，其中我们量化了我们的算法所需的量子内存和量子随机访问内存的数量。核心思想是在筛选算法的关键部分中，用量子随机步行替代[Laa16]中使用的Grover算法，并在其中增加了一层局部敏感过滤。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_3](https://doi.org/10.1007/978-3-030-92068-5_3)
## A Systematic Approach and Analysis of Key Mismatch Attacks on Lattice-Based NIST Candidate KEMs.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#a-systematic-approach-and-analysis-of-key-mismatch-attacks-on-lattice-based-nist-candidate-kems) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#a-systematic-approach-and-analysis-of-key-mismatch-attacks-on-lattice-based-nist-candidate-kems)**
### 作者
* Yue Qin, China University of Geosciences, Wuhan, 430074, China
* Chi Cheng, China University of Geosciences, Wuhan, 430074, China
* Xiaohan Zhang, China University of Geosciences, Wuhan, 430074, China
* Yue Qin, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Chi Cheng, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Chi Cheng, Guangxi Key Laboratory of Trusted Software, Guilin University of Electronic Technology, Guilin, 541004, China
* Yanbin Pan, Key Laboratory of Mathematics Mechanization, Academy of Mathematics and Systems Science, Chinese Academy of Sciences, Beijing, China
* Lei Hu, State Key Lab of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yue Qin, Ding Lab, Yanqi Lake Beijing Institute of Mathematical Sciences and Applications, Beijing, China
* Jintai Ding, Ding Lab, Yanqi Lake Beijing Institute of Mathematical Sciences and Applications, Beijing, China
* Jintai Ding, Yau Mathematical Sciences Center, Tsinghua University, Beijing, China
### 摘要
> 对格基KEMs的密钥不匹配攻击的研究是对NIST后量子密码学标准化工作的密码学评估的重要组成部分。到目前为止，已经有一些这样的攻击。然而，缺少一个统一的方法来评估这些KEMs在密钥不匹配攻击下的弹性。由于效率的关键指标是成功发动此类攻击所需的查询次数，在本文中，我们提出并开发了一种系统方法，用于找到这些攻击所需查询次数的最小平均数量的下界。我们的基本思想是将查询下界的问题转化为寻找最优二进制恢复树（BRT）的问题，在这里，查询下界的计算实质上是某个香农熵的计算。最优BRT方法还使我们能够理解为什么对于一些基于格的NIST候选KEMs，理论下界和实际攻击中所观察到的下界之间存在较大差距，就所需查询次数而言。这进一步导致我们提出了一种用于改进这些现有攻击的通用方法，这些方法经过我们的实验得到了验证。此外，我们提出的方法还可直接用于改进针对CCA安全的NIST候选KEMs的侧信道攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_4](https://doi.org/10.1007/978-3-030-92068-5_4)
## Gladius: LWR Based Efficient Hybrid Public Key Encryption with Distributed Decryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#gladius-lwr-based-efficient-hybrid-public-key-encryption-with-distributed-decryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#gladius-lwr-based-efficient-hybrid-public-key-encryption-with-distributed-decryption)**
### 作者
* Kelong Cong, imec-COSIC, KU Leuven, Leuven, Belgium
* Daniele Cozzo, imec-COSIC, KU Leuven, Leuven, Belgium
* Nigel P. Smart, imec-COSIC, KU Leuven, Leuven, Belgium
* Varun Maram, ETH Zurich, Zurich, Switzerland
* Nigel P. Smart, University of Bristol, Bristol, UK
### 摘要
> 基于KEM-DEM框架的标准混合加密方案在分布式情况下实现起来很难同时保持该方案的CCA安全性质。这是因为DE需要在KEM封装的密钥下解密，然后才能声明整个密文有效。本文提出了一种与Tag-KEMs密切相关的KEM-DEM框架新变体，可避开此问题。然后，我们提出了一种基于Learning-with-Rounding的后量子KEM，专门设计以具有快速分布式解密。我们将采用Learning-with-Rounding KEM构建的混合加密方案称为Gladius，该方案与NIST Round 3候选方案Saber密切相关。最后，我们提供了一个原型分布式实现，其三方解封时间为4.99秒。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_5](https://doi.org/10.1007/978-3-030-92068-5_5)
## Lattice-Based Group Encryption with Full Dynamicity and Message Filtering Policy.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#lattice-based-group-encryption-with-full-dynamicity-and-message-filtering-policy) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#lattice-based-group-encryption-with-full-dynamicity-and-message-filtering-policy)**
### 作者
* Jing Pan, State Key Laboratory of Integrated Service Networks (ISN), Xidian University, Xi’an, 710071, China
* Xiaofeng Chen, State Key Laboratory of Integrated Service Networks (ISN), Xidian University, Xi’an, 710071, China
* Jing Pan, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Xiaofeng Chen, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Fangguo Zhang, School of Computer Science and Engineering, Sun Yat-sen University, Guangzhou, 510006, China
* Fangguo Zhang, Guangdong Province Key Laboratory of Information Security Technology, Guangzhou, 510006, China
* Willy Susilo, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, 2522, Australia
### 摘要
> 群加密（GE）是一种基本的隐私保护原语，类似于群签名，允许用户在人群中隐藏自身并解密特定的密文。自从它首次提出以来，已经提出了众多的构建方案，其中由Libert等人（Asiacrypt 2016）基于格和由Nguyen等人（PKC 2021）基于编码理论分别构建的方案是后量子安全的。尽管后者在第一次实现了完全动态性（允许群用户随意加入或离开群组）和消息过滤策略，极大改善了GE系统的现状，但由于其设计相对复杂、低效和安全性较弱（在随机预言模型下安全），其实际应用仍然受限。相反，Libert等人的方案具有较强的安全性（在标准模型下安全），但缺乏先前的功能，并且仍然由于极度使用格陷阱而导致低效。在这项工作中，我们重新形式化了完全动态群加密（FDGE）的模型和安全定义，它们实质上等价于但更简洁于Nguyen等人的定义。然后，我们提供了一种通用且高效的零知识证明方法，用于证明一个二进制向量在格上不为零，其中首次实现了格设置中禁止消息过滤策略的证明（而且以简单的方式实现）。最后，通过结合适当的密码材料和我们提出的零知识证明，我们以更简单的方式实现了第一个基于格的FDGE方案，它不需要任何格陷阱，并且在标准模型下被证明是安全的（在证明阶段进行互动），在功能、效率和安全性方面超过了现有的后量子安全GE系统。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_6](https://doi.org/10.1007/978-3-030-92068-5_6)
## A New Variant of Unbalanced Oil and Vinegar Using Quotient Ring: QR-UOV.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#a-new-variant-of-unbalanced-oil-and-vinegar-using-quotient-ring-qr-uov) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#a-new-variant-of-unbalanced-oil-and-vinegar-using-quotient-ring-qr-uov)**
### 作者
* Hiroki Furue, The University of Tokyo, Tokyo, Japan
* Tsuyoshi Takagi, The University of Tokyo, Tokyo, Japan
* Yasuhiko Ikematsu, Kyushu University, Fukuoka, Japan
* Yutaro Kiyomura, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 不平衡油醋签名方案（UOV）是一种多元签名方案，20多年来基本上没有被攻破。然而，它需要使用大型公钥，因此已经提出了各种方法来减小其大小。在本文中，我们提出了一种新的UOV变种，其公钥由块矩阵表示，其组成部分对应于商环的一个元素。我们讨论了此方案对我们提出的方案的安全性的影响，不管商环是否为域。此外，我们讨论了它们对当前已知和新的可能攻击的安全性，并为我们的方案提出了参数。我们证明了与其他UOV变种相比，我们提出的方案可以实现较小的公钥大小，而不显著增加签名大小。例如，对于NIST的后量子密码项目（安全级别3），我们提出的方案的公钥大小为85.8 KB，而压缩后的Rainbow方案为252.3 KB，其中Rainbow是UOV的一个变种，也是NIST PQC项目的第三轮决赛选手之一。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_7](https://doi.org/10.1007/978-3-030-92068-5_7)
## Shorter Lattice-Based Group Signatures via "Almost Free" Encryption and Other Optimizations.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#shorter-lattice-based-group-signatures-via-almost-free-encryption-and-other-optimizations) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#shorter-lattice-based-group-signatures-via-almost-free-encryption-and-other-optimizations)**
### 作者
* Vadim Lyubashevsky, IBM Research Europe, Zurich, Switzerland
* Ngoc Khanh Nguyen, IBM Research Europe, Zurich, Switzerland
* Maxime Plancon, IBM Research Europe, Zurich, Switzerland
* Gregor Seiler, IBM Research Europe, Zurich, Switzerland
* Ngoc Khanh Nguyen, ETH Zurich, Zurich, Switzerland
* Maxime Plancon, ETH Zurich, Zurich, Switzerland
* Gregor Seiler, ETH Zurich, Zurich, Switzerland
### 摘要
> 我们提出了一种改进的基于格的群签名方案，其参数大小和运行时间与群大小无关。我们方案中的签名长度约为200KB，相比之前基于任何量子安全假设的最紧凑方案（del Pino等人，CCS 2018），大约降低了3倍。这种改进是通过对组签名方案的一些基本密码组件进行多个优化来实现的，并且我们认为它们将在基于隐私的格密码学中找到其他应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_8](https://doi.org/10.1007/978-3-030-92068-5_8)
## Séta: Supersingular Encryption from Torsion Attacks.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#s-ta-supersingular-encryption-from-torsion-attacks) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#s-ta-supersingular-encryption-from-torsion-attacks)**
### 作者
* Luca De Feo, IBM Research Europe, Zürich, Switzerland
* Cyprien Delpech de Saint Guilhem, imec-COSIC, KU Leuven, Leuven, Belgium
* Tako Boris Fouotsa, Università Degli Studi Roma Tre, Rome, Italy
* Péter Kutas, Eötvös Loránd University, Budapest, Hungary
* Péter Kutas, University of Birmingham, Birmingham, UK
* Christophe Petit, University of Birmingham, Birmingham, UK
* Antonin Leroux, DGA, Paris, France
* Antonin Leroux, LIX, CNRS, Ecole Polytechnique, Institut Polytechnique de Paris, Palaiseau, France
* Christophe Petit, Université Libre de Bruxelles, Brussels, Belgium
* Javier Silva, Universitat Pompeu Fabra, Barcelona, Spain
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, Talence, France
* Luca De Feo, INRIA, Rocquencourt, France
* Antonin Leroux, INRIA, Rocquencourt, France
* Benjamin Wesolowski, INRIA, IMB, Talence, France
### 摘要
> 我们提出了Séta（在匈牙利语中发音为[ʃe:tɒ]，意为“散步”），这是一种基于超奇异椭圆曲线的保护后量子安全的新型公钥加密方案。它由一种新型陷门单向函数构造而成，其中反演算法使用Petit的所谓的SIDH扭转攻击来计算起始曲线的一个自同构和扭曲点的图像之间的同构。我们证明了Séta的OW-CPA安全性，并提出了使用后量子OAEP变换的IND-CCA变体。我们探索了多种密钥生成的变体，以及它们对方案的参数选择，如基本素数的影响。此外，我们还将一个“超级”同态假设框架正式化，旨在概括SIDH、CSDIH、OSIDH和我们方案中遇到的计算同构性问题。最后，我们精心选择参数以在安全性和运行时间之间达到平衡，并提供了我们实现的实验结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_9](https://doi.org/10.1007/978-3-030-92068-5_9)
## SHealS and HealS: Isogeny-Based PKEs from a Key Validation Method for SIDH.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#sheals-and-heals-isogeny-based-pkes-from-a-key-validation-method-for-sidh) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#sheals-and-heals-isogeny-based-pkes-from-a-key-validation-method-for-sidh)**
### 作者
* Tako Boris Fouotsa, Università Degli Studi Roma Tre, Rome, Italy
* Christophe Petit, Université Libre de Bruxelles, Brussels, Belgium
* Christophe Petit, University of Birmingham’s School of Computer Science, Birmingham, UK
### 摘要
> 2016年，Galbraith等人提出了针对SIDH密钥交换协议的自适应攻击。在SIKE中，我们使用Fujisaki-Okamoto变换的一种变体来强制Bob向Alice揭示其加密密钥，然后Alice使用这个密钥重新加密Bob的密文并验证其有效性。因此，Bob不能重复使用他的加密密钥。已经有两种其他提出的反制措施使其成为静态私密密钥：k-SIDH和Jao和Urbanik的变体。由于这些反制措施包括运行多个并行SIDH实例，因此它们相对较昂贵。
> 
> 在本文中，首先，我们提出了一种新的对抗GPST自适应攻击的反制措施。我们的反制措施不需要像SIKE那样进行密钥披露，也不需要像k-SIDH一样运行多个并行实例。我们将我们的反制措施转换为SIDH类型方案的密钥验证方法。其次，我们使用我们的密钥验证来设计HealSIDH，一种有效的SIDH类型静态-静态密钥交互协议。第三，我们使用HealSIDH推导出PKE方案SHealS。与SIKE相比，SHealS使用更大的素数，具有更大的密钥和密文，但在方案的完整执行中仅计算4个同构，而不是SIKE中的5个同构。我们证明了SHealS依赖于一个我们引入的新假设是IND-CPA安全的，并猜测它的IND-CCA安全性。我们建议使用较小的质数生成SHealS的变体HealS，以提供较小的密钥和密文。
> 
> 因此，HealSIDH是一种实际高效的基于SIDH的（交互式）密钥交换，其中包含“直接”对抗GPST自适应攻击的反制措施。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_10](https://doi.org/10.1007/978-3-030-92068-5_10)
## Adaptive Security via Deletion in Attribute-Based Encryption: Solutions from Search Assumptions in Bilinear Groups.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#adaptive-security-via-deletion-in-attribute-based-encryption-solutions-from-search-assumptions-in-bilinear-groups) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#adaptive-security-via-deletion-in-attribute-based-encryption-solutions-from-search-assumptions-in-bilinear-groups)**
### 作者
* Rishab Goyal, MIT, Cambridge, MA, USA
* Jiahui Liu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
### 摘要
> 属性基加密（ABE）中的主要研究挑战之一是构建和证明具有自适应安全性的加密系统。迄今为止，在ABE中实现自适应安全性的主要范式是双系统加密。然而，在双线性群中几乎所有这样的解决方案都依赖于复合阶群上的子群决策问题或线性假设的变体。这两种假设都是决策性的而不是搜索性的，并且假设的目标是源群或双线性群元素。这与早期的有选择性安全ABE系统形成鲜明对比，早期的ABE系统可以证明其安全性要么基于决策性的双线性Diffie-Hellman假设，要么基于搜索性的双线性Diffie-Hellman假设。在这项工作中，我们通过给出一个新的ABE构造子功能，从而取得了一定进展，并在搜索性双线性Diffie-Hellman假设下证明了其安全性。
> 
> 首先，我们提供了一个证明自适应安全性的属性基加密系统的框架。我们引入了可删除属性的ABE概念，其中任何一方都可以取出使用属性字符串 x∈{0,1}^n 加密的密文，并将其修改为任何字符串x'∈{0,1,□}^n下的密文，其中x'通过用□符号（即“删除”x的属性）替换x的任何位派生而来。系统的语义是，如果电路C读取的输入位都不是□符号且C(x')=1，则电路C的任何私钥都可以用于解密与x'关联的密文。
> 
> 我们展示了将具有可删除属性的ABE与受限伪随机函数相结合以获得自适应安全ABE的途径，基于最近Tsabary [30]的工作。我们的新ABE系统将是自适应安全的，并且是支持与基础受限PRF相同功能的密文策略ABE，只要PRF是“删除一致”的。在这里，我们还提供了一个简单的受限PRF构造，提供了子功能。
> 
> 我们的方法使我们能够访问更广泛的属性基加密方案，支持删除属性。例如，我们证明了Goyal等人（GPSW）[19]和Boyen [6] ABE方案都可以轻松处理删除操作。通过使用GPSW方案的硬核比特变种，我们获得了一个根据搜索双线性Diffie-Hellman假设具有自适应安全ABE方案，除了在NC1中的伪随机函数。这是第一个根据搜索假设具有自适应安全ABE的方案，因为以前的所有工作都依赖于源群元素上的决策假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_11](https://doi.org/10.1007/978-3-030-92068-5_11)
## Public Key Encryption with Flexible Pattern Matching.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#public-key-encryption-with-flexible-pattern-matching) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#public-key-encryption-with-flexible-pattern-matching)**
### 作者
* Élie Bouscatié, Orange Labs, Applied Crypto Group, Cesson-Sévigné, France
* Olivier Sanders, Orange Labs, Applied Crypto Group, Cesson-Sévigné, France
* Élie Bouscatié, Université de Bordeaux, INRIA, CNRS, IMB UMR 5251, 33405, Talence, France
* Guilhem Castagnos, Université de Bordeaux, INRIA, CNRS, IMB UMR 5251, 33405, Talence, France
### 摘要
> 模式匹配的许多有趣应用（例如深度数据包检查或医疗数据分析）针对非常敏感的数据。特别是，在互联网流量中发现非法行为与合法的隐私要求存在冲突，这通常迫使用户（例如儿童、员工）盲目地信任一个以安全为名完全解密其流量的实体。
> 
> 流量分析和隐私之间的妥协可以通过可搜索加密实现。然而，由于流量数据是一个流，并且搜索的模式随着时间的推移（例如新的病毒签名）而发展，这些应用需要一种比经典方案更具灵活性的可搜索加密。事实上，我们确实需要能够在可能在模式识别之前加密的任意长流中搜索可变大小的模式。为了强调这些特点，我们将这样的方案称为支持模式匹配的流加密。
> 
> 最近的论文使用双线性群来提供支持这些特性的公钥构造[3, 13]。这些解决方案比更通用的解决方案（例如完全同态加密）更轻，并且在不损害隐私的情况下保持了适当的表达能力以支持模式匹配。然而，这个家族中的所有现有解决方案都存在效率和安全性方面的弱点需要解决。就效率而言，它们的公钥大小与字母表的大小成线性关系，而字母表的大小可能相当大，特别是对于自然以字节串处理数据的应用程序而言。就安全性而言，它们都依赖于一个非常强的计算假设，这个假设既是互动的，也是专门为这种方案定制的。
> 
> 在本文中，我们通过使用双线性群提供两种新的构造来解决这些问题，以支持对加密流的模式匹配。我们的第一种构造使用了同样强的假设，但通过消除对字母表大小的依赖，显著缩小了公钥的大小，同时几乎减少了密文的大小。在一个具有大型模式的典型应用中，我们的公钥比之前方案的公钥小两个数量级，这证明了我们方法的实用性。我们的第二种构造成功地保留了第一种构造的大部分优点，同时仅依赖于\(\mathsf {DDH}\)的一个简单（静态）变体，从而解决了之前的研究中的安全问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_12](https://doi.org/10.1007/978-3-030-92068-5_12)
## Bounded Collusion ABE for TMs from IBE.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#bounded-collusion-abe-for-tms-from-ibe) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#bounded-collusion-abe-for-tms-from-ibe)**
### 作者
* Rishab Goyal, MIT, Cambridge, MA, USA
* Ridwan Syed, University of Texas at Austin, Austin, TX, USA
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
### 摘要
> 我们提供了一种基于属性的加密系统，适用于图灵机，只要大规模身份空间存在基于身份的加密（IBE），则可证明其安全性。目前，已知IBE可以从包括因子分解、搜索Diffie-Hellman假设和误差学习假设在内的大多数主流数论假设实现公钥加密。
> 
> 我们的核心构造提供了针对在声明挑战密文之前对机器T进行单一密钥查询的攻击者的安全性，并且与挑战字符串\(w^*\)相关。我们通过利用Gentry，Halevi，Raykova和Wichs [33]的Garbled RAM构造来构建我们的构造；然而，为了证明安全性，我们需要引入一个称为迭代模拟安全性的新安全概念。
> 
> 然后，我们展示了如何将我们的核心构造转化为对事先有界数量\(q=q(\lambda )\)的密钥查询的安全性。这些查询可以在挑战密文之前或之后发生。我们通过首先展示如何使用一种特殊类型的非承诺加密来将仅在挑战密文声明之前选择单一密钥时才安全的系统转化为可以在挑战密文之前或之后请求单一密钥的系统。我们给出了这种非承诺加密的简单构造，它基于随机预言机模型中的公钥加密。接下来，可以应用标准的组合技术，从单一密钥自适应安全性提升到q密钥自适应安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_13](https://doi.org/10.1007/978-3-030-92068-5_13)
## Digital Signatures with Memory-Tight Security in the Multi-challenge Setting.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#digital-signatures-with-memory-tight-security-in-the-multi-challenge-setting) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#digital-signatures-with-memory-tight-security-in-the-multi-challenge-setting)**
### 作者
* Denis Diemert, Bergische Universität Wuppertal, Wuppertal, Germany
* Kai Gellert, Bergische Universität Wuppertal, Wuppertal, Germany
* Tibor Jager, Bergische Universität Wuppertal, Wuppertal, Germany
* Lin Lyu, Bergische Universität Wuppertal, Wuppertal, Germany
### 摘要
> 数字签名的标准安全概念是“单一挑战”（SC）EUF-CMA安全，在这种情况下，对手输出一个消息-签名对，如果它是伪造品，则“胜利”。Auerbach等人（CRYPTO 2017）提出了关于缩减的内存紧密性，并认为在这种情景中正确的安全目标实际上是更强的“多重挑战”（MC）定义，其中对手可以输出许多消息-签名对，如果至少有一个是伪造品，则“胜利”。目前，没有已知从简单标准假设中实现对时间、成功概率和内存的全面紧密性的构造。以前的工作表明，通过某些自然类别的缩减无法实现内存紧密性签名（Auerbach等人，CRYPTO 2017；Wang等人，EUROCRYPT 2018）。这些不可能的结果可能让人误以为构建内存紧密型签名困难甚至不可能。
> 
> 我们通过在MC框架中首次给出具有所有维度上的完整紧密性的签名方案的构造，证明了这种印象是错误的。为了规避已知的不可能性结果，我们首先在SC框架中引入了规范缩减的概念。我们证明了一个一般性定理，即每个具有规范缩减的签名方案在MC框架中已经内存紧密安全，前提是它是强不可伪造的，对手每个消息只接收到一个签名，并假设严密安全的伪随机函数的存在。然后，我们通过简单的附加通用变换，在MC框架中实现了内存紧密的多重签名安全性。这产生了第一个在MC框架中内存紧密、强EUF-CMA安全的签名方案。最后，我们证明标准安全证明通常已经可以视为规范缩减。具体而言，我们对来自有损识别方案的签名（Abdalla等人，EUROCRYPT 2012），RSA全域散列的两个变体（Bellare和Rogaway，EUROCRYPT 1996）以及BLS签名的两个变体（Boneh等人，ASIACRYPT 2001）进行了展示。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_14](https://doi.org/10.1007/978-3-030-92068-5_14)
## (Compact) Adaptively Secure FE for Attribute-Weighted Sums from k-Lin.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#compact-adaptively-secure-fe-for-attribute-weighted-sums-from-k-lin) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#compact-adaptively-secure-fe-for-attribute-weighted-sums-from-k-lin)**
### 作者
* Pratish Datta, NTT Research, Sunnyvale, CA, 94085, USA
* Tapas Pal, NTT Research, Sunnyvale, CA, 94085, USA
* Tapas Pal, Indian Institute of Technology Kharagpur, Kharagpur, 721302, West Bengal, India
### 摘要
> 本文提出了第一个适应性模拟安全的属性加权和功能加密（FE）方案。在这样的FE方案中，加密以N对属性\(\{(x_i, z_i)\}_{i\in [N]}\)作为输入，其中属性\(\{x_i\}_{i\in [N]}\)是公开的，而属性\(\{z_i\}_{i\in [N]}\)是私有的。索引\(i\in [N]\)被称为槽。秘密密钥对应于某个权重函数f，解密可以恢复加权和\(\sum _{i=1}^N f(x_i)z_i\)。这是一种具有广泛潜在实际应用的重要功能。在提出的FE方案中，属性被视为向量，权重函数是算术分支程序(ABP)。我们介绍了两个具有不同参数和不同水平自适应安全性的方案。
> 
> （a）首先，我们提出了一个单槽方案，它在基于模拟的安全模型下实现了自适应安全性，可以抵御有限数量的密文查询和任意多项式数量的密钥查询，无论是在密文查询之前还是之后。这是在自适应模拟框架中可以实现的最高级别的安全性。根据FE的基于模拟和不可区分性的安全性框架之间的关系，可以得出所提出的FE方案也可以实现基于不可区分性的自适应安全性，对于任意先验数量的密文查询和任意多项式数量的密钥查询，无论是在密文查询之前还是之后。此外，该方案具有紧凑的密文，在权重函数中出现的属性数量不会随之增加。
> 
> （b）接下来，从单槽方案出发，我们提出了一个无限槽方案，它在基于模拟的自适应安全性下可以抵御有限数量的密文和密文之前的密钥查询，并支持先验无限数量的密文之后的密钥查询。该方案实现了与槽位数N无关的公共参数和秘密密钥尺寸，并且秘密密钥可以解密任何先验无限的N的密文。此外，与单槽方案一样，该方案的密文大小也不会随着权重函数中属性的出现次数增加。然而，该方案的所有参数（即主公钥、密文和秘密密钥）都与密文之前的密钥查询数量的上限呈线性关系。
> 
> 我们的方案基于素数阶的非对称双线性群构建，安全性是在标准（双边）k-线性（k-Lin）假设下得出的。我们的工作解决了Abdalla、Gong和Wee在CRYPTO 2020中提出的一个开放问题，他们提出了一个属性加权和的无限槽FE方案，只实现了半自适应模拟安全。在技术层面上，我们的工作将Lin和Luo [EUROCRYPT 2020]最近提出的自适应安全框架扩展到了基于模拟的自适应属性隐藏安全性的环境中，该框架旨在在基于不可区分性的有效载荷隐藏安全性的背景下实现紧凑的密文。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_15](https://doi.org/10.1007/978-3-030-92068-5_15)
## Boosting the Security of Blind Signature Schemes.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#boosting-the-security-of-blind-signature-schemes) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#boosting-the-security-of-blind-signature-schemes)**
### 作者
* Jonathan Katz, University of Maryland, College Park, USA
* Michael Rosenberg, University of Maryland, College Park, USA
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 现有的盲签名方案要么在签名协议的多项并发执行方面安全，要么效率低下，要么依赖于非标准假设（即使在随机预言模型中也是如此）。我们展示了首个基于RSA、因子分解或离散对数假设（在随机预言模型中）实现这一安全级别的高效盲签名方案。我们的核心技术涉及对Pointcheval（Eurocrypt’98）的变换进行扩展和概括，该变换允许我们将某些盲签名方案转换为对（同时）签发对数多个签名安全的方案，从而实现对多项并发执行签名的安全保障。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_16](https://doi.org/10.1007/978-3-030-92068-5_16)
## PrORAM - Fast P(logn) Authenticated Shares ZK ORAM.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#proram-fast-p-logn-authenticated-shares-zk-oram) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#proram-fast-p-logn-authenticated-shares-zk-oram)**
### 作者
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 我们构建了一个基于算术值的认证共享的具体高效的零知识（ZK）混淆RAM（ORAM），用于ZK证明（ZKP）系统。每次访问算术值，它消耗\(2\log n\)长度为\(2\sigma \)的秘密的混淆传输（OTs），其中\(\sigma \)是统计安全参数，n是数组大小。这是对先前最佳（具体高效）的ZK ORAM BubbleRAM（Heath和Kolesnikov，[HK20a]，CCS 2020）的渐近和具体改进，其访问成本是\(\frac{1}{2}\log ^2 n\)长度为\(2\sigma \)的OTs。
> 
> ZK ORAM对于证明最好以RAM程序而不是布尔或算术电路表达的陈述至关重要。
> 
> 我们的构造是私密硬币ZK。我们将其与[HK20a]的ZKP协议集成，并证明生成的ZKP系统是安全的。
> 
> 我们使用C++来实现PrORAM。与最先进的BubbleRAM相比，PrORAM在大小为\(2^{20}\)的40位值的数组中速度快约\(10\times \)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_17](https://doi.org/10.1007/978-3-030-92068-5_17)
## Compressed $\varSigma $-Protocols for Bilinear Group Arithmetic Circuits and Application to Logarithmic Transparent Threshold Signatures.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#compressed-varsigma-protocols-for-bilinear-group-arithmetic-circuits-and-application-to-logarithmic-transparent-threshold-signatures) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#compressed-varsigma-protocols-for-bilinear-group-arithmetic-circuits-and-application-to-logarithmic-transparent-threshold-signatures)**
### 作者
* Thomas Attema, CWI, Cryptology Group, Amsterdam, The Netherlands
* Ronald Cramer, CWI, Cryptology Group, Amsterdam, The Netherlands
* Thomas Attema, Leiden University, Mathematical Institute, Leiden, The Netherlands
* Ronald Cramer, Leiden University, Mathematical Institute, Leiden, The Netherlands
* Matthieu Rambaud, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Thomas Attema, TNO, Cyber Security and Robustness, The Hague, The Netherlands
### 摘要
> Lai等人（CCS 2019）展示了如何将Bulletproof的算术电路零知识协议（Bootle等人，EUROCRYPT 2016和Bünz等人，S&P 2018）推广为直接适用于双线性群算术电路，即无需将这些电路转化为算术电路。
> 
> 简而言之，双线性群算术电路是标准算术电路与捕获群指数运算或配对运算的特殊门进行扩充。这样的电路在配对语言的零知识陈述背景下非常相关。然而，将这些特殊门表达为标准算术电路会导致巨大的电路大小开销，因此通过标准算术电路实现零知识的方法可能会产生重大的额外成本。Lai等人的方法展示了如何通过将额外的零知识技术集成到Bulletproof框架中，从而高效处理这些特殊门。
> 
> 我们采取了不同的方法，将压缩Σ-协议理论（加密学 2020）从算术电路关系推广到双线性群算术电路关系。除了概念上的简单性外，我们的方法还具有实际优势，可以将Lai等人协议的通信成本减少大约3倍。
> 
> 最后，我们展示了我们研究结果的一个独立应用。我们构建了第一个可进行透明设置并且生成规模为对数级的k个签名者阈值签名方案（TSS）。这个阈值签名隐藏了k个签名者的身份，并且可以在聚合时动态选择阈值k。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_18](https://doi.org/10.1007/978-3-030-92068-5_18)
## Promise $\varSigma $-Protocol: How to Construct Efficient Threshold ECDSA from Encryptions Based on Class Groups.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#promise-varsigma-protocol-how-to-construct-efficient-threshold-ecdsa-from-encryptions-based-on-class-groups) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#promise-varsigma-protocol-how-to-construct-efficient-threshold-ecdsa-from-encryptions-based-on-class-groups)**
### 作者
* Yi Deng, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Shunli Ma, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Xinxuan Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Hailong Wang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yi Deng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Shunli Ma, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Xinxuan Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Hailong Wang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Xuyang Song, Shanghai Key Laboratory of Privacy-Preserving Computation, Shanghai, China
* Xiang Xie, Shanghai Key Laboratory of Privacy-Preserving Computation, Shanghai, China
### 摘要
> 阈值签名允许n个参与方共享发布数字签名的能力，以便任何至少包含t+1个成员的联盟可以签名，而t个或更少的参与方则无法签名。目前已知的基于类群的阈值ECDSA构造要么效率低下（需要并行重复具有小挑战空间的底层零知识证明），要么需要相当非标准的低阶假设。在本文中，我们提出了基于类群的加密方案的有效阈值ECDSA协议，既不需要假设低阶，也不需要并行重复底层的零知识证明，这在密钥生成方面比以前的构造有了显著的效率提高。在此过程中，我们引入了一种新的只满足承诺可提取性这一较弱声音度的承诺Σ协议概念。一个接受与基于类群的加密有关的语句的承诺Σ证明，并不确立语句的真实性，但提供了对我们的应用足够的安全保证（承诺可提取性）。我们还展示了如何模拟在已通过我们的承诺Σ协议证明其正确性的（可能无效的）基于类群的加密上的同态操作。我们相信，这些技术对自身具有独立的利益，并且适用于需要针对与类群相关的语句进行有效零知识证明的其他场景。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_19](https://doi.org/10.1007/978-3-030-92068-5_19)
## The One-More Discrete Logarithm Assumption in the Generic Group Model.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#the-one-more-discrete-logarithm-assumption-in-the-generic-group-model) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#the-one-more-discrete-logarithm-assumption-in-the-generic-group-model)**
### 作者
* Balthazar Bauer, Université de Paris, Paris, France
* Georg Fuchsbauer, TU Wien, Vienna, Austria
* Antoine Plouviez, Inria, ENS, CNRS, PSL, Paris, France
### 摘要
> "更多离散对数假设（OMDL）是身份验证协议、盲签名和多重签名方案（如盲Schnorr签名和最近的MuSig2多重签名）安全分析的基础。由于这些方案产生标准的Schnorr签名，它们与现有系统兼容，例如在区块链的背景下。OMDL也被用于许多关于某些安全约简不可能性的结果。尽管它被广泛使用，令人惊讶的是，OMDL缺乏任何严格的分析；甚至没有证据表明它在一般群模型（GGM）中成立（我们表明一个声称的证据是有缺陷的）。在这项工作中，我们给出了OMDL在GGM中的正式证明。我们还证明了一个相关的假设，即一次更多计算Diffie-Hellman假设在GGM中的成立。我们的证明偏离了之前的GGM证明，用一个新的论证代替了Schwartz-Zippel引理的使用。"

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_20](https://doi.org/10.1007/978-3-030-92068-5_20)
## Verifiably-Extractable OWFs and Their Applications to Subversion Zero-Knowledge.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#verifiably-extractable-owfs-and-their-applications-to-subversion-zero-knowledge) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#verifiably-extractable-owfs-and-their-applications-to-subversion-zero-knowledge)**
### 作者
* Prastudy Fauzi, Simula UiB, Bergen, Norway
* Helger Lipmaa, Simula UiB, Bergen, Norway
* Arne Tobias Ødegaard, Simula UiB, Bergen, Norway
* Helger Lipmaa, University of Tartu, Tartu, Estonia
* Janno Siim, University of Tartu, Tartu, Estonia
* Michał Zając, Clearmatics, London, UK
### 摘要
> 一个可提取单向函数(EOWF)，由Canetti和Dakdouk(ICALP 2008)提出，并由Bitansky等人(SIAM Journal on Computing vol. 45)进行了推广，是一种允许对函数进行有效预图提取的OWF。我们研究具有公共图像验证算法的（广义的）EOWFs。我们称这样的OWFs为可验证提取，并展示了几个先前已知的结构满足这个概念。我们通过使用它们从满足某些附加属性的NIZK通用地构造了一个Sub-ZK NIZK，并研究了这类OWFs与子版本零知识(Sub-ZK) NIZK之间的关系，同时反过来展示了如何从任何Sub-ZK NIZK获取它们。在我们的工作之前，NIZKs的Sub-ZK属性是基于具体知识假设实现的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_21](https://doi.org/10.1007/978-3-030-92068-5_21)
## Chain Reductions for Multi-signatures and the HBMS Scheme.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#chain-reductions-for-multi-signatures-and-the-hbms-scheme) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#chain-reductions-for-multi-signatures-and-the-hbms-scheme)**
### 作者
* Mihir Bellare, Department of Computer Science and Engineering, University of California, San Diego, USA
* Wei Dai, Department of Computer Science and Engineering, University of California, San Diego, USA
### 摘要
> 现有的离散对数（DL）基多重签名方案的已有证明，只能在256位群中实际实施时提供薄弱的保证。这是因为大多数基本降低（主要在标准模型和DL中）松散。我们表明，放宽模型或假设都足以获得严格的降低证明。即我们给出了（1）代数群模型中DL的严格证明，以及（2）从DL以外的良基假设中的严格、标准模型证明。我们首先对经典的3轮方案进行了这样的处理，即\(\mathsf {BN} \)和\(\mathsf {MuSig} \)。然后我们提供了一个新的2轮多重签名方案，\(\mathsf {HBMS} \)，它与以前的方案一样高效，并对其进行了相同的处理。通过一个降低链框架，我们为单一方案提供了多条安全路径，其中一个降低被分解成涉及中间问题的一系列子降低。总的来说，我们的结果改善了在实践中实施的群中DL基多重签名方案的安全保证。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_22](https://doi.org/10.1007/978-3-030-92068-5_22)
## Symmetric Key Exchange with Full Forward Security and Robust Synchronization.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#symmetric-key-exchange-with-full-forward-security-and-robust-synchronization) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#symmetric-key-exchange-with-full-forward-security-and-robust-synchronization)**
### 作者
* Colin Boyd, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Bor de Kock, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Lise Millerjord, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Gareth T. Davies, Bergische Universität Wuppertal, Wuppertal, Germany
* Kai Gellert, Bergische Universität Wuppertal, Wuppertal, Germany
* Tibor Jager, Bergische Universität Wuppertal, Wuppertal, Germany
### 摘要
> 我们构建了基于预共享密钥的轻量级身份认证密钥交换协议，实现了完全前向安全性，并且仅依赖于简单高效的对称加密原语。我们所有的协议都在强安全模型下进行了严谨的安全证明，具有低通信复杂度，并特别适用于资源受限设备。
> 
> 我们描述了三种协议，应用线性密钥演变来提供不同的性能和安全特性。对于线性密钥演变协议，保证在并行和并发协议会话中正确运作是困难的，强调了除了传统的机密性和认证安全目标外，还需要确保可用性。我们引入了同步鲁棒性作为一个新的正式安全目标，基本上保证各方可以高效地重新同步。我们所有新的协议都能够实现这一属性。
> 
> 由于基于线性密钥演变的协议无法保证所有同时启动的会话成功派生密钥，我们还提出了两种基于可穿孔伪随机函数的非线性密钥演变构造。这些构造可以使用标准哈希函数实现，并且需要 \(O(C \cdot \log (|\mathsf {CTR} |))\) 的内存，其中 \(C \) 是并发会话的数量， \(|\mathsf {CTR} |\) 是每个参与方的会话总数上限。这是首次同时实现完全前向安全性、同步鲁棒性和并发正确性的协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_23](https://doi.org/10.1007/978-3-030-92068-5_23)
## Security Analysis of CPace.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#security-analysis-of-cpace) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#security-analysis-of-cpace)**
### 作者
* Michel Abdalla, DIENS, École normale supérieure, CNRS, PSL University, Paris, France
* Michel Abdalla, DFINITY, Zürich, Switzerland
* Björn Haase, Endress+Hauser Liquid Analysis, Gerlingen, Germany
* Julia Hesse, IBM Research Europe, Zürich, Switzerland
### 摘要
> 作为对密码认证密钥交换（PAKE）协议标准化请求的回应，IRTF工作组CFRG于2019年设立了一个PAKE选择过程，导致了在平衡设置中选择CPace协议，其中各方共享一个通用密码。在随后的标准化工作中，CPace协议进一步发展，产生了一个协议系列，其在实际环境中的实际安全保证尚未被充分理解。在本文中，我们在通用可组合性框架下提供了对CPace全面的安全分析。我们的分析是现实的，因为它捕获了自适应腐败，并避免将CPace的\（\textsf {Map2Pt}\）函数建模为理想化函数，即将字段元素映射到曲线点。为了将我们的证明扩展到专门用于特定椭圆曲线生态系统的不同CPace变体，我们采用了一种新方法，该方法将证明所需的假设表示为仿真器访问的库。通过允许以假设的模块化替换，这种新方法避免了对未更改协议部分的重复分析，并使我们能够高效地分析所有不同的CPace变体的安全保证。由于我们的分析，所有调查的实际CPace变体都享有适应UC安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_24](https://doi.org/10.1007/978-3-030-92068-5_24)
## Modular Design of Role-Symmetric Authenticated Key Exchange Protocols.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#modular-design-of-role-symmetric-authenticated-key-exchange-protocols) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#modular-design-of-role-symmetric-authenticated-key-exchange-protocols)**
### 作者
* Yuting Xiao, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Rui Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Hui Ma, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Rui Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 认证密钥交换（AKE）是应用密码学中的重要基元。之前引入了几个强大的AKE模型，例如CK、CK+、eCK及其考虑了完美前向保密性（PFS）的扩展版本（以“-PFS”后缀表示）。这些模型提供了不同的安全性保证，并且它们是不可比较的。因此，我们仍然缺乏对安全AKE的先决条件和AKE协议的模块化设计的系统理解。在本文中，我们在一轮认证密钥交换（ORKE）的背景下研究了这个问题，该问题对于参与者来说是角色对称的，并且只需要一轮来建立会话密钥。
> 
> 我们的处理方法如下：首先，我们在ORKE的上下文中重新定义了CK、CK-PFS、CK+、CK+-PFS、eCK和eCK-PFS模型，其中一些在文献中首次提出。接下来，我们引入了一种新的工具，称为密钥可恢复函数（KRF）。通过对KRF仅进行黑盒调用，我们构建了ORKE的模块化结构。作为直接应用，许多先前的协议可以通过这种结构自然地解释。我们进一步通过适当实例化底层KRF同时构建具有CK、CK+、eCK、CK-PFS、CK+-PFS和eCK-PFS安全性的协议。作为副产品，我们对一些已知协议进行了简化证明，避免了非标准假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_25](https://doi.org/10.1007/978-3-030-92068-5_25)
