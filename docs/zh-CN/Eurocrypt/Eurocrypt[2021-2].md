# Eurocrypt[2021-2]
## Ciminion: Symmetric Encryption Based on Toffoli-Gates over Large Finite Fields.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#ciminion-symmetric-encryption-based-on-toffoli-gates-over-large-finite-fields) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#ciminion-symmetric-encryption-based-on-toffoli-gates-over-large-finite-fields)**
### 作者
* Christoph Dobraunig, Lamarr Security Research, Graz, Austria
* Christoph Dobraunig, IAIK, Graz University of Technology, Graz, Austria
* Lorenzo Grassi, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Anna Guinet, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Daniël Kuijsters, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### 摘要
> 受到新的应用，例如安全的多方计算（MPC）、完全同态加密（FHE）和零知识证明（ZK）的推动，明显需要对对称加密方案进行改进，以在其自然算法描述中减少域乘法的数量。这一发展推出了许多专门针对\( \mathbb {F}_{2^n} \)或\( \mathbb {F}_{p} \)（其中p是质数）的对称加密方案，这些方案最大限度地减少了乘法的数量。这些新颖的方案带来了新的密码分析见解，破解了许多该类方案。有趣的是，据我们所知，所有新提出的最小化乘法数量的方案都只使用了基于幂映射（通常为\(x^3\) 或\(x^{-1}\)）的S盒中的这些乘法。此外，大多数这些方案依赖复杂且资源密集的线性层来实现低乘法计数。在本文中，我们提出了Ciminion，这是一种在大型二进制或质素域中最小化域乘法数量的加密方案，并使用非常轻量级的线性层。与其他旨在最小化在\( \mathbb {F}_{2^n} \)或\( \mathbb {F}_{p} \)中的域乘法的方案不同，Ciminion依赖于Toffoli门来改进整体设计的非线性扩散。此外，我们针对Farfalle构造进行了原始设置，以尽可能减少使用的原始轮数和域乘法的数量。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_1](https://doi.org/10.1007/978-3-030-77886-6_1)
## Mind the Middle Layer: The HADES Design Strategy Revisited.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#mind-the-middle-layer-the-hades-design-strategy-revisited) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#mind-the-middle-layer-the-hades-design-strategy-revisited)**
### 作者
* Nathan Keller, Mathematics Department, Bar Ilan University, Ramat Gan, Israel
* Asaf Rosemarin, Department of Computer Science, Bar-Ilan University, Ramat Gan, Israel
### 摘要
> HADES设计策略将传统的SPN结构与部分SPN (PSPN)结构相结合，其中在每个加密轮中，非线性层仅应用到状态的一部分。在HADES设计中，由PSPN轮组成的中间层被外部的SPN轮包围。HADES相对于统计攻击的安全性论证仅使用SPN轮，而忽略了PSPN轮。这使得设计人员不需要对作为线性混合运算的MDS矩阵施加任何限制。
> 
> 本文中，我们展示了MDS矩阵的选择对HADES设计提供的安全级别具有重要影响。如果MDS选择正确，则方案对差分和线性攻击的安全级别显著高于设计人员所声称的。另一方面，较弱的MDS选择允许存在极大的不变子空间，这些子空间在整个中间层中没有激活任何非线性操作（即S盒）。
> 
> 我们在HADES的Starkad和Poseidon实例上展示了我们的结果。对于Poseidon，我们显著提高了设计人员关于差分和线性密码分析所提供的活跃S盒数量的下界 - 例如，在\(t=6\)变体中从28个活跃S盒提高到60个。对于Starkad，我们展示了对于每轮中的S盒数量可被4整除的任何变体，密码系统都允许一个极大的不变子空间，在通过任意数量的PSPN轮而不激活任何S盒的情况下传递（例如，在\(t=24\)变体中的一个大小为\(2^{1134}\)的子空间）。此外，对于各种参数的选择，该不变子空间可以用于对哈希函数发动预像攻击，从而破坏其安全性。然而，我们展示了该问题可以通过将t替换为不可被四整除的任何值来轻松修复。
> 
> 在我们的论文发表后，Starkad和Poseidon的设计人员修改了他们的设计，通过添加要求来确保正确选择MDS矩阵。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_2](https://doi.org/10.1007/978-3-030-77886-6_2)
## Password Hashing and Preprocessing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#password-hashing-and-preprocessing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#password-hashing-and-preprocessing)**
### 作者
* Pooya Farshim, University of York, York, UK
* Stefano Tessaro, University of Washington, Seattle, USA
### 摘要
> 当可用任意预处理信息的哈希函数对m个散列密码中的t个实例进行破译时，所需的密码分析工作量如何随用户数量的增加而扩展？在多实例设置下，我们对这个问题进行了形式化处理，考虑了辅助信息。我们的研究的一个核心贡献是一种（可以说是简单的）转录计数论证，允许我们回答由Bellare、Ristenpart和Tessaro（BRT；CRYPTO 2012）在多实例安全性方面遗留下来的一个基本问题。我们利用这个证明技术，在随机预言模型下形式上证明了在存在辅助信息的情况下，哈希盐密码不可恢复性。为此，我们使用Coretti等人（CRYPTO 2018）开发的最近的辅助信息预抽样技术。我们的界限与实践中常见的相当吻合。
> 
> 除了通过整体随机预言进行密码哈希之外，我们还考虑迭代的影响，迭代是用于减缓猜测速度的经典机制，比如bcrypt和PBKDF2。在借鉴BRT的工作基础上，我们制定了在存在辅助信息的情况下的KDF安全概念，并证明了适当的组合定理。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_3](https://doi.org/10.1007/978-3-030-77886-6_3)
## Compactness of Hashing Modes and Efficiency Beyond Merkle Tree.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#compactness-of-hashing-modes-and-efficiency-beyond-merkle-tree) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#compactness-of-hashing-modes-and-efficiency-beyond-merkle-tree)**
### 作者
* Elena Andreeva, Technical University of Vienna, Vienna, Austria
* Rishiraj Bhattacharyya, NISER, HBNI, Jatani, India
* Arnab Roy, University of Klagenfurt, Klagenfurt, Austria
### 摘要
> 我们重新思考了设计最优高效且具有密码学安全性的哈希函数的经典问题。传统上，哈希函数是通过在具有较小定义域的原语上应用操作模式来设计的。Shrimpton和Stam（ICALP 2008），Rogaway和Steinberger（CRYPTO 2008）以及Mennink和Preneel（CRYPTO 2012）的研究结果展示了如何从非压缩原语实现2n-to-n位压缩函数的最优有效设计，并具有渐进最优\(2^{n/2-\epsilon }\)查询碰撞抵抗性。对于较大定义域（\({>}{2n}\)位）的最优高效且安全的哈希函数的设计仍然是一个开放问题。
> 
> 为了实现对基于不同定义域大小的原语构建的哈希函数进行效率分析和比较，本文提出了新的紧凑性效率概念。它使我们能够专注于渐进最优的碰撞抵抗哈希函数，并根据CRYPTO 2008中Stam的界限对它们的参数进行归一化，以获得最大效率。
> 
> 然后，我们提出了两种基于树的操作模式作为紧凑型、大定义域、固定输入长度哈希函数的设计原则。
> 
> 1. 我们的第一个构造是增强二叉树（ABR）模式。该设计是一个\( (2^{\ell }+2^{\ell -1} -1)n\)位-to-n位哈希函数，对于任何\(\ell \ge 2\)，总共调用了\((2^{\ell }-1)\)次2n-to-n位压缩函数。我们的构造在理想模型中具有渐进最优\(2^{n/2-\epsilon }\)查询碰撞抵抗性，是最紧凑的设计。与Merkle树相比，\(\textsf {ABR}\)模式额外处理了\((2^{\ell -1}-1)\)个数据块，但调用的内部压缩函数数量相同。
> 
> 2. 在我们的第二个设计中，我们关注不可区分性安全概念。虽然\(\textsf {ABR}\)模式能够实现碰撞抵抗性，但在\(2^{n/3}\)次查询内无法实现对随机预言机的不可区分性。\(\textsf {ABR}^{+}\)相比\(\textsf {ABR}\)只压缩了1个更少的数据块，并在相同数量的压缩调用中实现了\(2^{n/2-\epsilon }\)次的不可区分性。
> 
> 我们的两个设计都与无处不在的Merkle树密切相关，并具有潜在的适用领域，其中哈希速度是主要关注点。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_4](https://doi.org/10.1007/978-3-030-77886-6_4)
## Three Third Generation Attacks on the Format Preserving Encryption Scheme FF3.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#three-third-generation-attacks-on-the-format-preserving-encryption-scheme-ff3) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#three-third-generation-attacks-on-the-format-preserving-encryption-scheme-ff3)**
### 作者
* Ohad Amon, Computer Science Department, Tel Aviv University, Tel Aviv, Israel
* Eyal Ronen, Computer Science Department, Tel Aviv University, Tel Aviv, Israel
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
* Nathan Keller, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Adi Shamir, Faculty of Mathematics and Computer Science, Weizmann Institute of Science, Rehovot, Israel
### 摘要
> 格式保留加密（FPE）方案接受来自任何有限值集合（如社会安全号码或出生日期）的明文，并生成属于同一集合的密文。由于能够在不改变其格式的情况下加密现有数据库或通信数据包，它们在实践中非常有用。 由于行业需求，NIST在2016年标准化了两种这样的加密方案，称为FF1和FF3。它们立即吸引了大量密码分析的注意，攻击复杂度逐渐降低。已知最好的对Feistel结构FF3的攻击具有数据和存储复杂度为\({O}(N^{11/6})\)和时间复杂度为\({O}(N^{17/6})\)，其中输入属于大小为\(N \times N\)的域。
> 
> 在本文中，我们提出并实验验证了三种对FF3的改进攻击方法。我们最好的攻击方法可以实现权衡曲线 \(D=M=\tilde{O}(N^{2-t})\)，\(T=\tilde{O}(N^{2+t})\)，对于所有 \(t \le 0.5\)。特别地，我们可以将数据和存储复杂度降低到更实用的 \(\tilde{O}(N^{1.5})\)，同时将时间复杂度降低到 \(\tilde{O}(N^{2.5})\)。
> 
> 我们还确定了针对FPE方案的另一个攻击向量，即相关域攻击。我们展示了当对手可以在不同域中访问相同密钥下的加密时，如何发起强大的攻击，并展示了如何将其应用于高效区分FF3和FF3-1实例。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_5](https://doi.org/10.1007/978-3-030-77886-6_5)
## Cryptanalysis of the GPRS Encryption Algorithms GEA-1 and GEA-2.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#cryptanalysis-of-the-gprs-encryption-algorithms-gea-1-and-gea-2) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#cryptanalysis-of-the-gprs-encryption-algorithms-gea-1-and-gea-2)**
### 作者
* Christof Beierle, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* David Rupprecht, Ruhr University Bochum, Bochum, Germany
* Lukas Stennes, Ruhr University Bochum, Bochum, Germany
* Patrick Derbez, Univ Rennes, CNRS, IRISA, Rennes, France
* Gaëtan Leurent, Inria, Paris, France
* Håvard Raddum, Simula UiB, Bergen, Norway
* Yann Rotella, Laboratoire de Mathématiques de Versailles, Université Paris-Saclay, UVSQ, CNRS, Versailles, France
### 摘要
> 本文首次公开提出了对GEA-1和GEA-2算法的密码分析攻击。我们展示了，相比提供完整的64位安全性，仅需已知的密钥流中的至少65位（其中至少24位来自一个帧）以及在\(2^{40}\)个GEA-1评估和使用44.5 GiB内存的时间内，即可恢复GEA-1的初始状态。
> 
> 对GEA-1的攻击基于部署的LFSRs和密钥初始化之间的特殊交互作用，这种情况发生的概率极小，不太可能凭借偶然发生。这种异常模式表明，弱点是有意隐藏的，通过设计限制了安全级别为40位。
> 
> 相比之下，对于GEA-2，我们没有发现同样的有意弱点。然而，通过代数技术和列表合并算法的组合，我们仍然能够在\(2^{45.1}\)个GEA-2评估的时间内破解GEA-2。主要实际障碍是需要知道1600字节的密钥流。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_6](https://doi.org/10.1007/978-3-030-77886-6_6)
## Pre-computation Scheme of Window τNAF for Koblitz Curves Revisited.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#pre-computation-scheme-of-window-naf-for-koblitz-curves-revisited) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#pre-computation-scheme-of-window-naf-for-koblitz-curves-revisited)**
### 作者
* Wei Yu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Guangwu Xu, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Qingdao, 266237, Shandong, China
* Guangwu Xu, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, Shandong, China
### 摘要
> 设 \(E_a/ \mathbb {F}_{2}: y^2+xy=x^3+ax^2+1\) 为 Koblitz 曲线。窗口 \(\tau \)-adic 非相邻表现法 (window \(\tau \)NAF) 是目前在 \(E_a/ \mathbb {F}_{2^m}\) 上利用 Frobenius 映射 \(\tau \) 执行标量倍乘的标准表现系统。本研究关注标量倍乘的预计算部分。首先介绍了 \(\mu \bar{\tau }\)-操作，其中 \(\mu =(-1)^{1-a}\)，\(\bar{\tau }\) 是 \(\tau \) 的共轭复数。然后推导并应用了 \(\mu \bar{\tau }\)-操作的高效公式于新颖的预计算方案中。我们的预计算方案需要分别在窗口 \(\tau \)NAF 宽度为 4 至 7 时进行 6M\(\,+\,6\)S、18M\(\,+\,17\)S、44M\(\,+\,32\)S、88M\(\,+\,62\)S (\(a=0\)) 及 6M\(\,+\,6\)S、19M\(\,+\,17\)S、46M\(\,+\,32\)S、90M\(\,+\,62\)S (\(a=1\)) 计算。与现有文献中的预计算技术相比，速度提高了约两倍。我们新的高效预计算方案对标量倍乘也取得了显著改进。传统上，窗口 \(\tau \)NAF 的宽度最多为 6 以实现最佳标量倍乘。由于我们提出的预计算代价大幅降低，可以将窗口 \(\tau \)NAF 的宽度提高到 7 以获得更好的标量倍乘效果。这表明预计算部分在执行标量倍乘时变得更加重要。结合我们的高效预计算和新的窗口宽度，我们的标量倍乘至少以 Kohel 在 Eurocrypt’2017 中工作及以往最佳预计算的 85.2% 运行时间运行。我们的结果将研究领域中已十分深入并持续存在的 Koblitz 曲线的标量倍乘推进到一个重要的新阶段。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_7](https://doi.org/10.1007/978-3-030-77886-6_7)
## Dummy Shuffling Against Algebraic Attacks in White-Box Implementations.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#dummy-shuffling-against-algebraic-attacks-in-white-box-implementations) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#dummy-shuffling-against-algebraic-attacks-in-white-box-implementations)**
### 作者
* Alex Biryukov, DCS and SnT, University of Luxembourg, Luxembourg City, Luxembourg
* Aleksei Udovenko, CryptoExperts, Paris, France
### 摘要
> 在 CHES 2016 上，Bos 等人表明，现有的大多数白盒实现容易受到标准侧信道攻击的破解。一个自然的想法是应用成熟的侧信道对策 - 线性掩码方案，但是这种实现对线性代数攻击是脆弱的，因为它利用了白盒环境中缺乏噪声的特点，并且适用于任何线性掩码的阶次。在 ASIACRYPT 2018 上，Biryukov 和 Udovenko 提出了一个名为 BU 模型的安全模型，并提出了一种新的二次掩码方案，在该模型中可以被证明是安全的。然而，对于更高阶次攻击的对策仍然是一个未解决的问题。
> 
> 在本研究中，我们研究了另一种众所周知的侧信道对策 - 洗牌 - 对白盒环境中的线性和更高阶次的代数攻击的有效性。首先，我们将经典洗牌扩展到包括虚拟计算槽，并且表明这是对抗代数攻击至关重要的一部分。我们量化并证明了虚拟洗牌对 BU 模型中的线性代数攻击的安全性。我们引入了一种用于虚拟洗牌的刷新技术，并表明它能够在该模型中实现接近最优的保护，适用于任意阶次的攻击，从而解决了在 BU 模型中对抗代数攻击的未解决问题。此外，我们描述了一个有趣的概念验证构造，将槽函数公开（同时保持洗牌索引的私密性）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_8](https://doi.org/10.1007/978-3-030-77886-6_8)
## Advanced Lattice Sieving on GPUs, with Tensor Cores.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#advanced-lattice-sieving-on-gpus-with-tensor-cores) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#advanced-lattice-sieving-on-gpus-with-tensor-cores)**
### 作者
* Léo Ducas, CWI, Amsterdam, The Netherlands
* Marc Stevens, CWI, Amsterdam, The Netherlands
* Wessel van Woerden, CWI, Amsterdam, The Netherlands
### 摘要
> 在这项工作中，我们研究了基于显卡的各种最先进的格子筛选算法（Becker-Gama-Joux 2015，Becker-Ducas-Gama-Laarhoven 2016，Herold-Kirshanova 2017）在通用筛选内核（G6K，Albrecht等人2019）内的GPU实现。特别是，我们广泛利用了最近引入的张量核心-最初设计用于光线追踪和机器学习，并展示了它们在密码分析任务中的适用性。我们还提出了一种新的双Hash技术，用于高效检测“值得提升”的对，以加速G6K的一个关键组成部分：寻找短向量的提升。
> 
> 我们获得了新的计算记录，将SVP Darmstadt挑战的维度提高到180，改进了先前维度为155的记录。此计算在一台配有4个NVIDIA Turing GPU和1.5TB RAM的服务器上运行了51.6天。无论是从墙钟时间还是能源效率方面来看，这相当于比前面的记录提升了约两个数量级。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_9](https://doi.org/10.1007/978-3-030-77886-6_9)
## Fast Verification of Masking Schemes in Characteristic Two.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#fast-verification-of-masking-schemes-in-characteristic-two) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#fast-verification-of-masking-schemes-in-characteristic-two)**
### 作者
* Nicolas Bordes, Univ. Grenoble Alpes, CNRS, Grenoble INP, Institute of Engineering Univ. Grenoble Alpes, LJK, 38000, Grenoble, France
* Pierre Karpman, Univ. Grenoble Alpes, CNRS, Grenoble INP, Institute of Engineering Univ. Grenoble Alpes, LJK, 38000, Grenoble, France
### 摘要
> 我们重新审视了Belaïd等人在CRYPTO 2017中引入的掩码装置的非干扰（NI）探测安全性的矩阵模型。这导致了两个主要结果。
> 
> 1）我们推广了该模型所基于的定理，以便能够将其应用于任何有限域上的掩码方案，特别是\(\mathbb {F}_2\)，并能够分析强非干扰（SNI）安全概念。我们还遵循Faust等人（TCHES 2018）的方法，另外考虑了一个鲁棒的探测模型，该模型考虑了硬件缺陷，如故障。
> 
> 2）我们利用这个改进的模型来实现一个非常高效的验证算法，将现有软件的性能提高了三个数量级。我们展示了对Barthe等人（EUROCRYPT 2017）的NI和SNI乘法装置的各种变体进行验证，经过大量的并行计算工作，证明了它们在阶数11时是安全的，而之前最大的已证明阶数是7；我们还对SNI刷新装置（同上）和Groß等人（TIS@CCS 2016）的NI乘法装置进行了验证，这些装置在存在故障的情况下是安全的。我们还减少了一些现有装置的随机性成本，特别是对于友好实现的8份份额，对于SNI乘法和刷新，我们在这里改进了之前最佳结果的17%（分别为19

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_10](https://doi.org/10.1007/978-3-030-77886-6_10)
## On the Power of Expansion: More Efficient Constructions in the Random Probing Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#on-the-power-of-expansion-more-efficient-constructions-in-the-random-probing-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#on-the-power-of-expansion-more-efficient-constructions-in-the-random-probing-model)**
### 作者
* Sonia Belaïd, CryptoExperts, Paris, France
* Matthieu Rivain, CryptoExperts, Paris, France
* Abdul Rahman Taleb, CryptoExperts, Paris, France
* Abdul Rahman Taleb, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
### 摘要
> 随机探测模型(Random Probing Model)是一种泄露模型，其中电路的每条线都以给定概率p泄漏。该模型由于可转化为噪声泄漏模型(noisy leakage model)，在功率和电磁侧信道攻击领域被认为是正确的形式化。此外，随机探测模型比噪声泄漏模型更方便证明蒙版方案的安全性。在最近的一项研究中，Ananth、Ishai和Sahai(2018年加密会议)引入了一种很好的扩展策略来构建随机探测安全电路。他们的构造容忍了\(2^{-26}\)的泄漏概率，这是随机探测模型中可实现的第一个量化泄漏概率。在接下来的一项工作中，Belaïd、Coron、Prouff、Rivain和Taleb (2020年加密会议)推广了他们的想法，并提出了一个完整而实用的框架来生成随机探测安全电路。所谓的扩展编译器可以将简单的基础部件引导为长达满足称为随机探测可扩展性(RPE)的新安全概念的部件。他们进一步提供了该框架的一个实例，其容错率为\({2^{-8}}\)，复杂度为\(\mathcal {O}(\kappa ^{7.5})\)，其中\(\kappa \)代表安全参数。
> 
> 在本文中，我们对RPE安全概念进行了深入分析。我们展示了RPE部件的主要参数的首个上限值，该参数称为放大阶数。我们进一步展示了RPE概念可以被制定得更紧，并显示了RPE和强非干扰(SNI)组合概念之间的强连接。然后，我们介绍了产生RPE部件的首个通用构造，可以达到任意份额数的最优放大序列，同时提供了这种构造的渐近分析。最后但并非最不重要的，我们引入了小型部件的新的具体构造，可以实现最大放大序列，从而获得了更高效的扩展编译器实现：我们获得了稍微更好的泄漏概率的\(\mathcal {O}(\kappa ^{3.9})\)复杂度，以及略低的泄漏概率的\(\mathcal {O}(\kappa ^{3.2})\)复杂度。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_11](https://doi.org/10.1007/978-3-030-77886-6_11)
## Leakage-Resilience of the Shamir Secret-Sharing Scheme Against Physical-Bit Leakages.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#leakage-resilience-of-the-shamir-secret-sharing-scheme-against-physical-bit-leakages) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#leakage-resilience-of-the-shamir-secret-sharing-scheme-against-physical-bit-leakages)**
### 作者
* Hemanta K. Maji, Department of Computer Science, Purdue University, West Lafayette, USA
* Hai H. Nguyen, Department of Computer Science, Purdue University, West Lafayette, USA
* Mingyuan Wang, Department of Computer Science, Purdue University, West Lafayette, USA
* Anat Paskin-Cherniavsky, Department of Computer Science, Ariel University, Ariel, Israel
* Tom Suad, Department of Computer Science, Ariel University, Ariel, Israel
### 摘要
> 高效的Reed-Solomon码重建算法，例如Guruswami和Wootters（STOC-2016），将转化为对特征2域上的Shamir秘密共享方案的本地泄漏攻击。然而，Benhamouda，Degwekar，Ishai和Rabin（CRYPTO-2018）表明，如果重建阈值大约是各方总数的0.87倍，Shamir秘密共享方案在素域上对一位本地泄漏是弹性的。在多方安全乘法等多个应用场景中，重建阈值必须至多是各方数量的一半。此外，Shamir秘密共享方案能够弹性地承受的泄漏比特数目也不清楚。
> 
> 为了达到这个目标，我们在一个素域F上研究Shamir秘密共享方案的泄漏弹性。各方的秘密共享是有限域F中的元素，自然地表示为表示元素\(\{0,1,\dotsc ,p-1\}\)的\(\lambda \)位二进制串。在我们的泄漏模型中，对手可以从每个秘密共享中独立地探测m个位位置。考虑到我们考虑这种泄漏模型的灵感来自于对遗忘传输合成器的研究对一般关联提取算法的影响，以及保护电路免受探测攻击对泄漏弹性安全计算的重要影响。
> 
> 考虑任意的重建阈值\(k\geqslant 2\)，物理位泄漏参数\(m\geqslant 1\)和各方数量\(n\geqslant 1\)。我们证明了当域F的阶足够大时，Shamir的秘密共享方案在随机评估位置下具有高概率的泄漏弹性；忽略对数因子，需要确保\(\log \left|F \right| \geqslant n/k\)。我们的结果（忽略对数因子）说明，只要总泄漏量\(m\cdot n\)小于Shamir秘密共享方案引入的熵\(k\cdot \lambda \)，那么Shamir的方案就是安全的。注意，我们的结果即使对于重建阈值k的小常数值也成立，这对于多个应用场景至关重要。
> 
> 为了补充这个积极的结果，我们提出了一个物理位泄漏攻击，对于\(m=1\)的物理位泄漏，从\(n=k\)个秘密共享和满足\(\left|F \right|=1\mod k\)的任何素域F。特别地，有大约\(\left|F \right|^{n-k+1}\)种这样的易受攻击的n元评估位置选择。我们对重建阈值的小值（如\(k=2\)和\(k=3\)）以及任何\(\left|F \right|=1\mod k\)下的攻击优势进行了下限估计。一般来说，我们提供了一个公式，计算我们攻击在每个k下的优势，当\(\left|F \right|\rightarrow \infty\)时。
> 
> 从技术上讲，我们积极的结果依赖于傅里叶分析、适当秩为r的广义算术进度的解析性质，以及Bézout的定理来界定有限域上方程的解数。我们攻击的分析依赖于确定Irwin-Hall分布的"差异性"。概率分布的差异性是我们的工作引入的一种新性质，具有潜在的独立兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_12](https://doi.org/10.1007/978-3-030-77886-6_12)
## Leakage Resilient Value Comparison with Application to Message Authentication.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#leakage-resilient-value-comparison-with-application-to-message-authentication) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#leakage-resilient-value-comparison-with-application-to-message-authentication)**
### 作者
* Christoph Dobraunig, Lamarr Security Research, Graz, Austria
* Christoph Dobraunig, Graz University of Technology, Graz, Austria
* Bart Mennink, Radboud University, Nijmegen, The Netherlands
### 摘要
> 侧信道攻击对存储在设备上的机密信息构成威胁，特别是当对手可以物理访问设备时。作为其影响，针对这种攻击的密码算法防护措施是一个广泛研究的课题。在这项工作中，我们偏离对密码算法的研究，而是专注于更基本操作的侧信道保护，即已知对手控制值与秘密值之间的比较。在消息认证码（MAC）或认证加密的验证过程中，敏感于侧信道泄漏的比较发生在标签比较中，但通常在安全性分析中被忽视。此外，作为防故障措施的比较也可能受到侧信道攻击的影响。在这项工作中，我们利用通常作为实现的密码构建模块对值进行了泄漏鲁棒方式的正式分析。我们的结果表明，如果已经存在足够受保护的公共密码置换实现或（可调整的）分组密码，就无需额外投入资源来实现受保护的比较操作本身。我们通过将我们的发现应用于轻量级认证加密方案ISAP使用的SuKS消息认证码以及经典的哈希-然后-PRF构造来补充我们的贡献。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_13](https://doi.org/10.1007/978-3-030-77886-6_13)
## The Mother of All Leakages: How to Simulate Noisy Leakages via Bounded Leakage (Almost) for Free.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#the-mother-of-all-leakages-how-to-simulate-noisy-leakages-via-bounded-leakage-almost-for-free) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#the-mother-of-all-leakages-how-to-simulate-noisy-leakages-via-bounded-leakage-almost-for-free)**
### 作者
* Gianluca Brian, Sapienza University of Rome, Rome, Italy
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
* Antonio Faonio, EURECOM, Sophia-Antipolis, France
* Maciej Obremski, National University of Singapore, Singapore, Singapore
* João Ribeiro, Imperial College London, London, UK
* Mark Simkin, Aarhus University, Aarhus, Denmark
* Maciej Skórski, University of Luxembourg, Luxembourg, Luxembourg
### 摘要
> 我们展示了在信息理论的设置中，通过有界泄漏的单个查询可以模拟最常见的噪声泄漏的不同味道，仅存在小的统计模拟误差和泄漏参数的轻微损失。这个后者特别适用于一个最常用的噪声泄漏模型，其中噪音度量使用条件平均最小熵（Naor和Segev，CRYPTO'09和SICOMP'12）。
> 
> 我们将噪声和有界泄漏之间的减少分为两个步骤。首先，我们提出了一个新的泄漏模型（称为密集泄漏模型），并证明了在信息理论的设置中，可以使用有界泄漏的单个查询来模拟密集泄漏，仅存在小的统计距离。其次，我们展示了最常见的噪声泄漏模型属于密集泄漏类，并具有良好的参数。第三，我们证明了模拟带有次常数误差的有界泄漏所需的泄漏量的下界，展示了我们的减少方法几乎是最优的。特别地，我们的结果意味着基于统计距离和互信息的噪声泄漏的有用的一般模拟是不可能的。我们还提供了不同噪声泄漏模型之间的完整关系图。
> 
> 我们的结果在泄漏鲁棒密码学中有应用，在有界泄漏存在的情况下，我们通常能够将安全性提升到存在噪声泄漏的情况下，在信息理论和计算设置中都可以。此外，我们展示了如何使用通信复杂度的下界来证明对于某些函数，有界共谋协议（Kumar，Meka和Sahai，FOCS'19）不仅需要长的传输记录，而且必须必要地揭示足够的关于输入的信息。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_14](https://doi.org/10.1007/978-3-030-77886-6_14)
## Message-Recovery Laser Fault Injection Attack on the Classic McEliece Cryptosystem.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#message-recovery-laser-fault-injection-attack-on-the-classic-mceliece-cryptosystem) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#message-recovery-laser-fault-injection-attack-on-the-classic-mceliece-cryptosystem)**
### 作者
* Pierre-Louis Cayrel, Univ Lyon, UJM-Saint-Etienne, CNRS, Laboratoire Hubert Curien UMR 5516, 42023, Saint-Etienne, France
* Lilian Bossuet, Univ Lyon, UJM-Saint-Etienne, CNRS, Laboratoire Hubert Curien UMR 5516, 42023, Saint-Etienne, France
* Brice Colombier, Univ Grenoble Alpes, CNRS, Grenoble INP, TIMA, 38000, Grenoble, France
* Vlad-Florin Drăgoi, Faculty of Exact Sciences, Aurel Vlaicu University, Arad, Romania
* Vlad-Florin Drăgoi, LITIS, University of Rouen Normandie, Mont-Saint-Aignan, France
* Alexandre Menu, IMT, Mines Saint-Etienne, Centre CMP, Equipe Commune CEA Tech-Mines Saint-Etienne, 13541, Gardanne, France
### 摘要
> 基于码的公钥密码系统是量子抗性公钥加密算法的有希望的候选者。它们的安全性基于较难的综合译码问题。在有限域（通常为\(\mathbb {F}_{2}\)）中计算综合就能确保构造的安全性。本文在\(\mathbb {N}\)中计算综合能大大简化解决该问题的难度。我们通过激光故障注入的方式，演示了如何通过破坏特定指令在\(\mathbb {N}\)中计算矩阵-向量乘法，并进行了实验证实。为了在\(\mathbb {N}\)中解决综合译码问题，我们提出了将其简化为整数线性规划问题的方法。我们利用线性规划求解器的计算效率来对抗提议到NIST后量子密码标准挑战的基于码的方案进行实时信息恢复攻击。我们在最坏情况下进行攻击，即考虑随机二进制码，并在桌面计算机上在几分钟内恢复初始消息。我们的攻击针对NIST PQC竞赛入围者Classic McEliece中尼德哈里集团密码系统的参考实现，对该提案的所有参数集来说都是可行的。例如，对于256位安全参数集，我们在几秒钟内成功恢复了消息。最后，我们强调即使只有部分综合条目有错误，攻击仍然可行。这使得攻击即使故障注入不具有完全重复性，也能减少攻击的计算复杂度，从而使其整体上更实用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_15](https://doi.org/10.1007/978-3-030-77886-6_15)
## Multi-source Non-malleable Extractors and Applications.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#multi-source-non-malleable-extractors-and-applications) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#multi-source-non-malleable-extractors-and-applications)**
### 作者
* Vipul Goyal, CMU and NTT Research, Pittsburgh, USA
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
* Chenzhi Zhu, Tsinghua University, Beijing, China
### 摘要
> 我们介绍了一种称为多源不可伪造提取器的两个源不可伪造提取器（Cheragachi和Guruswami，TCC 2014）的自然推广。多源不可伪造提取器是特殊的独立源提取器，满足额外的不可伪造性质。该属性要求，在将多个源进行篡改生成输出的情况下，提取器的输出仍保持接近均匀。我们正式定义了该基元，并提供了一个针对各种篡改函数的安全构造和应用。更具体地，我们获得了以下结果：
> 
> 对于任何\(s\ge2\)，我们在交叠联合篡改模型中为最小熵\(\varOmega(n)\)和误差\(2^{-n^{\varOmega(1)}}\)给出了一个s源不可伪造提取器的显式构造。这意味着，每个篡改源可以依赖于所有源的任何严格子集，并且与每个篡改源对应的集合可以以我们定义的方式重叠。在我们的工作之前，没有已知的显式构造，即使在不相交篡改（要求集合是不相交的而没有重叠）的情况下也是安全的。
> 
> 我们改编了上述构造中使用的技术，以在不相交篡改模型中针对任何\(t\leq n\)给出t-out-of-n不可伪造秘密共享方案（Goyal and Kumar，STOC 2018）。这是首个在不相交篡改模型中的阈值不可伪造秘密共享（NMSS）方案的通用构造。所有以前的构造都有一个限制，即篡改的子集大小不能相等。
> 
> 我们进一步改编了上述构造中使用的技术，以在重叠联合篡改模型中针对任何\(t\leq n\)给出t-out-of-n不可伪造秘密共享方案（Goyal and Kumar，STOC 2018）。这是首个在重叠联合篡改模型中的阈值NMSS方案的构造。
> 
> 我们展示了一种更强的s源不可伪造提取器的概念，可以针对不相交篡改函数进行多篡改，从而得到一个单轮网络提取器协议（Kalai等，FOCS 2008），具有吸引人的特性。通过与我们工作中提供的新的多篡改，两个源不可伪造提取器的构造相组合，我们获得了一个最小熵\(\varOmega(n)\)的网络提取器协议，该协议容忍一个最优数（\(t=p-2\)）的故障处理器，并为每个诚实处理器提取随机位。以前的网络提取器协议只能容忍\(t=\varOmega(p)\)的故障处理器，并未能为部分诚

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_16](https://doi.org/10.1007/978-3-030-77886-6_16)
## Secure Software Leasing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#secure-software-leasing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#secure-software-leasing)**
### 作者
* Prabhanjan Ananth, UC Santa Barbara, Santa Barbara, USA
* Rolando L. La Placa, MIT, Santa Barbara, USA
### 摘要
> 制定用于防止软件盗版的加密定义是一个重要的研究方向，但却未得到太多关注。由于使用经典密码学的自然定义是不可能实现的（因为经典程序总是可以被复制），这引导我们转向使用量子计算技术。Aaronson在2009年的开创性工作中引入了量子防拷贝的概念，以精确解决软件反盗版问题。然而，尽管这是量子密码学中最重要的问题之一，对于任何函数类别，目前还没有已知的可证安全的量子防拷贝解决方案。
> 
> 我们提出了一个替代定义来解决软件盗版问题，称为安全软件租赁（SSL）。虽然比量子防拷贝要弱，但SSL仍然有意义，并且在软件反盗版领域有着有趣的应用。
> 
> 我们提出了一个基于具体密码学假设的SSL构造，适用于规避电路的一个子类（包括点函数的自然实现、带通配符的合取和仿射测试器）。我们的构造是第一个基于具体密码学假设的可证安全解决方案，用于解决软件反盗版问题。为了补充我们的正面结果，我们还展示了基于密码学假设的结果，即存在一类量子无法学习函数，对于这类函数，SSL是不存在的。特别地，我们的不可能结果也否定了任意类别的量子无法学习电路的量子防拷贝（Aaronson 2009）构造的可能性，解决了一个关于构建任意量子无法学习电路的防拷贝是否可能的重要问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_17](https://doi.org/10.1007/978-3-030-77886-6_17)
## Oblivious Transfer Is in MiniQCrypt.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#oblivious-transfer-is-in-miniqcrypt) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#oblivious-transfer-is-in-miniqcrypt)**
### 作者
* Alex B. Grilo, CNRS, LIP6, Sorbonne Université, Paris, France
* Huijia Lin, University of Washington, Seattle, WA, USA
* Fang Song, Portland State University, Portland, OR, USA
* Vinod Vaikuntanathan, MIT, Cambridge, MA, USA
### 摘要
> MiniQCrypt是一个存在量子安全单向函数和量子通信的世界。我们在MiniQCrypt中构建了一个忽略传输（OT）协议，实现了模拟安全性，并针对恶意量子多项式时间对手，在普通模型下进行建设。我们在Crépeau和Killian（FOCS 1988）以及Bennett，Brassard，Crépeau和Skubiszewska（CRYPTO 1991）的基础工作上进行构建。结合先前的工作，我们还在MiniQCrypt中获得了安全的两方和多方计算协议。这与经典世界形成对比，因为人们普遍认为仅有单向函数并不能让我们获得OT。在常见随机字符串模型下，我们实现了一个常数轮的通用组合（UC）OT协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_18](https://doi.org/10.1007/978-3-030-77886-6_18)
## Security Analysis of Quantum Lightning.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#security-analysis-of-quantum-lightning) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#security-analysis-of-quantum-lightning)**
### 作者
* Bhaskar Roberts, UC Berkeley, Berkeley, USA
### 摘要
> 量子闪电是一种提供强大量子货币的新型密码学对象。Zhandry最近定义了量子闪电并且基于低秩矩阵的叠加提出了一种构造方法。该方案非常不寻常，因此很难基于任何广泛的计算假设来保证方案的安全性。相反，Zhandry提出了一个新的困难假设，如果成立，可以用来证明安全性。
> 
> 在这项研究中，我们证明了Zhandry的困难假设实际上是错误的，因此安全性的证明是站不住脚的。然而，我们注意到量子闪电方案尚未被证明是不安全的。这项工作是分析[3]提出的方案的安全性的第一步，也是向我们能够证明安全性的方案迈进的一步。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_19](https://doi.org/10.1007/978-3-030-77886-6_19)
## Classical vs Quantum Random Oracles.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#classical-vs-quantum-random-oracles) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#classical-vs-quantum-random-oracles)**
### 作者
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Mark Zhandry, Princeton University, Princeton, USA
* Mark Zhandry, NTT Research, Palo Alto, USA
### 摘要
> 在本文中，我们研究了随机神谕模型（ROM）和量子随机神谕模型（QROM）下加密方案安全性之间的关系。首先，我们引入了一种量子访问随机神谕的证明（PoQRO）的概念，这是一种证明能力的协议，用于向经典验证者证明可以量子访问随机神谕。我们观察到， Brakerski等人最近提出的一种量子性的证明（TQC '20）可以看作是一种PoQRO。我们还提供了一个基于经典神谕的公开可验证PoQRO的构造方法。基于这些，我们构建了数字签名和公钥加密方案，在ROM中安全而在QROM中不安全。特别地，我们得到了自然密码方案的第一个例子，以标准的密码学假设区分了ROM和QROM。
> 
> 另一方面，我们给出了从ROM安全性到QROM某些类型的加密方案和安全概念的提升定理。例如，我们的提升定理适用于Fiat-Shamir非交互式论证、Fiat-Shamir签名和全域哈希签名等。我们还讨论了我们的提升定理在量子查询复杂度中的应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_20](https://doi.org/10.1007/978-3-030-77886-6_20)
## On the Compressed-Oracle Technique, and Post-Quantum Security of Proofs of Sequential Work.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#on-the-compressed-oracle-technique-and-post-quantum-security-of-proofs-of-sequential-work) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#on-the-compressed-oracle-technique-and-post-quantum-security-of-proofs-of-sequential-work)**
### 作者
* Kai-Min Chung, Academia Sinica, Taipei City, Taiwan
* Serge Fehr, CWI, Amsterdam, Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, Netherlands
* Yu-Hsuan Huang, National Chiao-Tung University, Hsinchu City, Taiwan
* Tai-Ning Liao, National Taiwan University, Taipei City, Taiwan
### 摘要
> 我们重新审视了被Zhandry引入的所谓压缩预言技术，在量子随机预言模型(QROM)中分析量子算法。首先，我们提供了该技术的简明阐述，该技术可以轻松地扩展到并行查询的QROM，其中在每个查询轮中，所考虑的算法可以并行地进行多个对QROM的查询。这种QROM的变体允许进行更精细的查询复杂性分析。
> 
> 我们的主要技术贡献是一个框架，简化了使用(并行查询的推广形式的)压缩预言技术证明查询复杂性结果。有了我们的框架，只要适用，就可以通过纯经典推理来证明量子查询复杂性下界。更重要的是，对于典型的例子，导致经典界限的关键经典观察足以得出相应的量子界限。
> 
> 我们通过一些例子来证明这一点，恢复了已知结果，但也获得了新结果。我们的主要目标是找到少于q个并行查询的q链的困难，即一个序列\(x_0, x_1,\ldots , x_q\)满足对所有\(1 \le i \le q\)，\(x_i = H(x_{i-1})\)。
> 
> 上述寻找哈希链的问题在证明顺序工作的背景中具有基本重要性。实际上，作为我们技术的具体密码应用，我们证明了Cohen和Pietrzak的“简单顺序工作证明”的量子安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_21](https://doi.org/10.1007/978-3-030-77886-6_21)
## Classical Proofs of Quantum Knowledge.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#classical-proofs-of-quantum-knowledge) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#classical-proofs-of-quantum-knowledge)**
### 作者
* Thomas Vidick, Department of Computing and Mathematical Sciences, California Institute of Technology, Pasadena, USA
* Tina Zhang, Division of Physics, Mathematics and Astronomy, California Institute of Technology, Pasadena, USA
### 摘要
> 我们在验证者为经典，证明者为量子的情况下，针对证明知识的概念进行定义。证明者所持有的证人通常是一个量子态。我们建立了我们定义的一些简单属性，其中包括：如果对某个状态存在非破坏性的量子知识的经典证明，则该状态可以被一个无限制的对手复制；在我们定义的参数满足特定条件的情况下，一个难以复制的状态的知识证明协议可以用作（具有破坏性的）量子货币验证协议。此外，我们提供了两个协议的例子（灵感来自于量子货币方案的私钥经典验证协议），我们可以证明它们在我们的定义下是量子知识的证明。在此过程中，我们引入了借鉴了文献中关于非局域博弈的结果的分析技术。最后，我们证明，在我们的定义下，Mahadev（FOCS 2018）引入的验证协议是QMA关系的经典量子知识证明。在所有情况下，我们构造了一个明确的量子提取器，通过对证明者进行黑盒量子（重置）访问，并能够在验证者消息的叠加上控制证明者的黑盒电路来生成量子证人。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_22](https://doi.org/10.1007/978-3-030-77886-6_22)
## Order-C Secure Multiparty Computation for Highly Repetitive Circuits.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#order-c-secure-multiparty-computation-for-highly-repetitive-circuits) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#order-c-secure-multiparty-computation-for-highly-repetitive-circuits)**
### 作者
* Gabrielle Beck, Johns Hopkins University, Baltimore, USA
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Gabriel Kaptchuk, Boston University, Boston, USA
### 摘要
> 运行安全多方计算（MPC）协议与数百或数千个参与者将允许利用大规模志愿者网络（如区块链和Tor），并有助于合理化诚实多数的假设。然而，大多数现有协议至少在参与者数量上具有线性（乘法）依赖，导致扩展困难。已知具有与参与方数量无关的渐近效率（不包括附加因素）的协议要求昂贵的电路转换，从而引发大的开销。
> 
> 我们观察到在许多重要的MPC应用中使用的电路，例如用于创建机器学习模型的训练算法，具有高度重复的结构。我们对这类电路进行正式化，并提出了一个MPC协议，该协议对于这个类别的电路实现了\(O(|\mathsf {C}|)\)的总复杂度。我们实施了我们的协议，并展示它在适度数量的参与者方面优于\(O(n|\mathsf {C}|)\)的协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_23](https://doi.org/10.1007/978-3-030-77886-6_23)
## The More the Merrier: Reducing the Cost of Large Scale MPC.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#the-more-the-merrier-reducing-the-cost-of-large-scale-mpc) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#the-more-the-merrier-reducing-the-cost-of-large-scale-mpc)**
### 作者
* S. Dov Gordon, George Mason University, Fairfax, USA
* Daniel Starin, Perspecta Labs, Basking Ridge, USA
* Arkady Yerukhimovich, George Washington University, Washington, D.C., USA
### 摘要
> 安全多方计算（MPC）允许多个参与方对其私有输入进行安全联合计算。如今，MPC的应用正在增长，成千上万的参与方希望建立联邦机器学习模型或区块链的可信设置。为了解决这些场景，我们提出了一套新颖的MPC协议，可以在大量参与方运行时最大限度地提高吞吐量。特别地，我们的协议在通信和计算复杂性方面都随着参与方数量的减少而降低。我们的协议基于之前基于打包秘密分享的协议，并引入了构建更高效通用电路计算的新技术。具体来说，我们引入了一种处理使用打包秘密分享时出现的线性攻击的新方法，并提出了一种不增加渐近成本的共享乘法三元组展开方法。与之前的工作相比，我们避免了在通用编译电路大小为|C|以用于SIMD计算时所需的\(\log |C|\)开销，并且在统计安全参数O(s)方面改进了民间流传的“委员会式”解决方案。实践中，在合理的参数集下，我们的协议比任何已知的构造方法快10倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_24](https://doi.org/10.1007/978-3-030-77886-6_24)
## Multiparty Reusable Non-interactive Secure Computation from LWE.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#multiparty-reusable-non-interactive-secure-computation-from-lwe) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#multiparty-reusable-non-interactive-secure-computation-from-lwe)**
### 作者
* Fabrice Benhamouda, Algorand Foundation, New York, USA
* Aayush Jain, UCLA, Los Angeles, CA, 90095, USA
* Aayush Jain, NTT Research, Sunnyvale, CA, 94085, USA
* Ilan Komargodski, NTT Research, Sunnyvale, CA, 94085, USA
* Ilan Komargodski, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Huijia Lin, University of Washington, Seattle, WA, 98195, USA
### 摘要
> 受设计多功能且灵活的安全计算协议的目标以及尽可能减少交互的要求的激励，我们提出了新的多方可重复非交互安全计算（mrNISC）协议。这个概念最近由Benhamouda和Lin（TCC 2020）介绍，它本质上是两轮多方计算（MPC）协议，其中第一轮消息作为参与方私有输入的可重复承诺。利用这些承诺，任何一组参与方以后可以通过只向无状态评估器发送单个消息来计算他们选择的任何函数在各自输入上的结果，但不会泄露其他信息。重要的是，输入承诺可以在不了解其他参与方（既不了解其身份也不了解其数量）的情况下计算，并且它们可以在任意数量的所需计算中重复使用。
> 
> 我们构建了一个实现标准模拟安全性的mrNISC，就像经典的多轮MPC协议一样。我们的构造依赖于具有多项式模数的学习与错误（LWE）假设，以及在\(\mathsf {NC}^1\)中存在伪随机函数（PRF）。我们通过进一步依赖于可信设置（对于mrNISC是不可避免的），在明文模型中实现了半恶意安全性和恶意安全性。相比之下，先前已知的mrNISC构造只考虑了双线性映射或者使用了如程序混淆等强特性。
> 
> 我们使用我们的mrNISC来获得具有门限解密的新的多密钥全同态加密（MKFHE）方案：
> 
> 在CRS模型中，我们基于具有多项式模数和\(\mathsf {NC}^1\)中的PRF的LWE获得了\(\mathrm {NC}^1\)的门限MKFHE，而所有先前的构造都依赖于具有超多项式模数噪声比的LWE。
> 
> 在明文模型中，我们基于具有多项式模数、\(\mathrm {NC}^1\)中的PRF和NTRU的LWE获得了门限级别的平滑MKFHE，并从具有次指数模数噪声比的LWE中获得了另一个常数参与方的方案。先前已知的在明文模型中的门限MKFHE构造（Ananth等，TCC 2020）限制了可以一起计算的参与方的集合。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_25](https://doi.org/10.1007/978-3-030-77886-6_25)
## Unbounded Multi-party Computation from Learning with Errors.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#unbounded-multi-party-computation-from-learning-with-errors) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#unbounded-multi-party-computation-from-learning-with-errors)**
### 作者
* Prabhanjan Ananth, University of California, Santa Barbara, CA, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, MD, USA
* Zhengzhong Jin, Johns Hopkins University, Baltimore, MD, USA
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### 摘要
> 我们考虑了无界MPC的轮优化问题：在第一轮中，各方发布的消息仅依赖于他们的输入。在第二轮中，任何一部分参与者都可以在一轮广播中共同且安全地计算出其输入的任何函数f。我们并没有对参与方的数量或可计算函数的大小设定任何先验约束。
> 
> 我们的主要成果是一个对无界MPC的半诚实的两轮协议，该协议在平面模型中利用了标准学习错误（LWE）问题的困难性。之前在同样的设置中的工作假设对双线性映射的问题的困难性。因此，我们的协议是首个提供后量子安全性的无界MPC的实例。
> 
> 我们协议的核心要素是一种新的基于属性的安全函数评估（AB-SFE）方案，该方案带有公开解密功能。我们的构造结合了来自同态承诺领域和格基代理的技术。我们相信，

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_26](https://doi.org/10.1007/978-3-030-77886-6_26)
## Generic Compiler for Publicly Verifiable Covert Multi-Party Computation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#generic-compiler-for-publicly-verifiable-covert-multi-party-computation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#generic-compiler-for-publicly-verifiable-covert-multi-party-computation)**
### 作者
* Sebastian Faust, Technical University of Darmstadt, Darmstadt, Germany
* David Kretzler, Technical University of Darmstadt, Darmstadt, Germany
* Benjamin Schlosser, Technical University of Darmstadt, Darmstadt, Germany
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
### 摘要
> 隐蔽安全性被引入作为半诚实和恶意安全性之间的一种妥协。简而言之，隐蔽安全性保证了诚实方可以以一定概率检测到恶意行为，但在检测失败的情况下，一切皆不确定。虽然隐蔽安全性提供的安全保证比完全恶意安全性要弱，但其效率显著提高。Asharov和Orlandi（ASIACRYPT'12）引入了隐蔽安全性的一个重要拓展，即公共可验证性，允许诚实方创建公开可验证的恶意行为证书。公共可验证性显著增强了隐蔽安全性，因为该证书可以通过外部机构（例如法官）进行惩罚。
> 
> 之前关于公共可验证隐蔽（PVC）安全性的大部分研究都聚焦于双方情况，而多方情况则被大多忽视了。在这项工作中，我们引入了一种适用于没有私人输入的多方PVC安全协议的新型编译器。所支持的协议类别包括离线-在线模型中设计的常见多方计算协议的预处理。我们的编译器利用时钟加密来提供高概率的作弊检测（通常也称为威慑因子），而与先前唯一研究多方环境中PVC的工作（CRYPTO'20）相比，我们提供了首个完整的形式化安全性分析。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_27](https://doi.org/10.1007/978-3-030-77886-6_27)
## Constant-Overhead Unconditionally Secure Multiparty Computation Over Binary Fields.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#constant-overhead-unconditionally-secure-multiparty-computation-over-binary-fields) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#constant-overhead-unconditionally-secure-multiparty-computation-over-binary-fields)**
### 作者
* Antigoni Polychroniadou, J.P. Morgan AI Research, New York, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 我们研究了在诚实大多数设定下，无条件安全的多方计算（MPC）协议的通信复杂度。尽管在计算假设下为二进制域实现高效协议进行了巨大努力，但在此设定下并没有高效的无条件MPC协议。具体而言，在这个设置中不存在每个门的O(n)比特通信复杂度的n方协议。Cascudo、Cramer、Xing和Yuan在CRYPTO 2018中首次实现了类似开销，并行评估二进制域中\(O(\log n)\)个相同电路的方式。在本工作中，我们构建了第一个针对恶意对手的无条件MPC协议，该协议在诚实大多数设定下仅评估单个布尔电路，其摊销通信复杂度为O(n)比特每个门。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_28](https://doi.org/10.1007/978-3-030-77886-6_28)
## Breaking the Circuit Size Barrier for Secure Computation Under Quasi-Polynomial LPN.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#breaking-the-circuit-size-barrier-for-secure-computation-under-quasi-polynomial-lpn) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#breaking-the-circuit-size-barrier-for-secure-computation-under-quasi-polynomial-lpn)**
### 作者
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
* Pierre Meyer, École Normale Supérieure de Lyon and IDC Herzliya, Herzliya, Israel
### 摘要
> 在这项工作中，我们介绍了一种新的（电路依赖）同态秘密共享（HSS）方案，适用于所有\(\log /\log \log \) -local电路，在通信量与电路宽度成比例的条件下，可以进行多项式计算，前提是学习带有噪声的偶校验问题（\(\mathsf {LPN}\)）具有超多项式难度。在我们的新构建中，核心是伪随机相关生成器（PCG），它允许两个参与方从短种子局部地扩展到任意\(\log /\log \log \)-local可加相关的伪随机实例。
> 
> 我们的主要应用和这项工作的主要动机是针对大小为s的每个分层（布尔或算术）电路的通用两方安全计算协议，其总通信量为\(O(s/\log \log s)\)，并且可以进行多项式计算，前提是标准学习带有噪声假设具有超多项式难度（如果电路的节点可以划分为层，则电路被称为分层）。 这扩大了“电路规模障碍”能够被突破的假设集合，适用于大类别的电路。基础假设的强度与亚线性因子相关：在\(s^{2^{k(s)}}\)- LPN的难度下，我们实现了通信复杂度为O(s/k(s))，其中任意\(k(s) \le \log \log s / 4\)。
> 
> 以前，已知可导致相关度为\(\omega (1)\)的PCG或具有次线性通信的通用安全计算协议的假设集合仅限于LWE、DDH和DCR的循环安全变体。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_29](https://doi.org/10.1007/978-3-030-77886-6_29)
## Function Secret Sharing for Mixed-Mode and Fixed-Point Secure Computation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#function-secret-sharing-for-mixed-mode-and-fixed-point-secure-computation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#function-secret-sharing-for-mixed-mode-and-fixed-point-secure-computation)**
### 作者
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Nishanth Chandran, Microsoft Research, Bengaluru, India
* Divya Gupta, Microsoft Research, Bengaluru, India
* Niv Gilboa, Ben-Gurion University of the Negev, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Nishant Kumar, University of Illinois at Urbana-Champaign, Champaign, USA
* Mayank Rathee, University of California, Berkeley, USA
### 摘要
> Boyle等人（TCC 2019）提出了一种新的安全计算方法，基于功能密钥分享（FSS）的预处理模型，其中，通过相关偏移族的FSS方案对门电路g进行评估，即\(g_r(x)=g(x+r)\)。他们进一步提出了基于任何伪随机生成器（PRG）的高效FSS方案，用于计算在“混合模式”安全计算中出现的几个有用的门电路g的偏移族。这些包括零测试、整数比较、ReLU和样条功能的门电路。与基于混乱电路或秘密分享的替代技术相比，基于FSS的方法在在线通信和轮次复杂性方面节省了大量资源。
> 
> 在这项工作中，我们通过以下三种贡献改进和扩展了Boyle等人的先前结果：
> 
> 改进密钥大小。基于FSS的方法的预处理和存储成本直接取决于FSS密钥的大小。我们通过两步改进先前构造的密钥大小。首先，我们对分布式比较函数（DCF）的密钥大小进行了大约\(4\times \)的减小，即，对于输出函数\(f^{<}_{\alpha ,\beta }(x)\) 如果\(x < \alpha \)，则输出 \(\beta\)，否则输出0的FSS。DCF作为Boyle等人构造的中心模块。其次，我们改进了实现有用门电路g所需的DCF实例数量。例如，尽管先前的ReLU和m片样条的FSS方案分别需要2个和2m个DCF实例，但我们在两种情况下只需要一个DCF实例。这对于常用的ReLU和Sigmoid等门电路的FSS密钥大小进行了\(6-22\times \)的改进。
> 
> 新的门电路。我们展示了第一个基于PRG的算术和逻辑移位门电路的FSS方案，以及在输入和输出都被共享在\(\mathbb {Z}_{2^n}\)上的比特分解。这些门电路对于与定点运算和机器学习相关的许多应用非常关键。
> 
> 一个障碍。上述结果使得我们能够通过连续调用乘法和移位的FSS方案，在两轮PRG-based中安全评估“乘法然后截断”，这是定点运算的中心操作。我们发现了通过单一FSS方案实现

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_30](https://doi.org/10.1007/978-3-030-77886-6_30)
## VOLE-PSI: Fast OPRF and Circuit-PSI from Vector-OLE.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#vole-psi-fast-oprf-and-circuit-psi-from-vector-ole) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#vole-psi-fast-oprf-and-circuit-psi-from-vector-ole)**
### 作者
* Peter Rindal, Visa Research, Palo Alto, USA
* Phillipp Schoppmann, Humboldt-Universität zu Berlin, Berlin, Germany
### 摘要
> 在这项工作中，我们提出了一种基于Vector-OLE和PaXoS数据结构的批处理遗忘伪随机函数（OPRF）的新构建。然后，我们将其用于实现从OPRF到私有集合交集（PSI）的标准转换。我们的整体构建在通信和计算方面非常高效，具有O(n)的复杂度。我们证明了相比于半诚实变体，我们的协议在恶意安全性方面只有非常小的开销。对于输入大小\(n = 2^{20}\)，我们的恶意协议需要6.2秒以及少于59 MB的通信。这相当于每个元素不到450位，是迄今为止任何已发表的PSI协议（半诚实或恶意）中最低的数字。此外，在理论上，我们的半诚实（或恶意）协议可以在\(n=2^{20}\)的情况下达到每个元素219位（或260位），以额外的代价插值n个元素上的多项式。
> 
> 作为第二项贡献，我们提出了一个扩展，其中PSI的输出在两方之间进行了秘密共享。这种功能通常被称为电路PSI。它允许各方对秘密共享的输出执行后续的多方计算协议，例如训练机器学习模型。我们的电路PSI协议基于我们的OPRF构建以及PaXoS数据结构的另一应用。它实现了半诚实的安全性，并允许高效的实现，速度比先前的工作快3倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_31](https://doi.org/10.1007/978-3-030-77886-6_31)
