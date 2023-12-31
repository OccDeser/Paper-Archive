# Crypto[2023-4]
## Fast Blind Rotation for Bootstrapping FHEs.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#fast-blind-rotation-for-bootstrapping-fhes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#fast-blind-rotation-for-bootstrapping-fhes)**
### 作者
* Binwu Xiang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yi Deng, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yiran Dai, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Binwu Xiang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Jiang Zhang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Yiran Dai, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Dengguo Feng, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Binwu Xiang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yi Deng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yiran Dai, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 盲旋转是构建在最快已知自举算法下运行时间不到一秒的全同态加密的关键技术之一。目前，实现盲旋转的两种主要方法，即AP和GINX方法，分别由Alperin-Sheriff和Peikert（CRYPTO 2014）以及Gama、Izabachene、Nguyen和Xie（EUROCRYPT 2016）首次介绍。
> 
> 在本文中，我们基于NTRU假设提出了一种新的盲旋转算法，该算法基于类似GSW的加密方法。我们的算法在性能上渐进独立于密钥分布，并且在评估密钥大小和计算效率上（特别是对于大密钥分布）优于AP和GINX方法。通过将我们的盲旋转算法作为构建块，我们为LWE和RLWE密文提出了新的自举算法。
> 
> 我们对LWE密文实施了我们的自举算法，并将实际性能与两种自举算法进行了比较，即Ducas和Micciancio（EUROCRYPT 2015）的FHEW/AP算法和Chillotti、Gama、Georgieva和Izabachène（Journal of Cryptology 2020）的TFHE/GINX算法，这两种算法都在OpenFHE库中实现。对于具有128位安全性的三进制密钥分布的参数，我们的自举只需要存储18.65 MB大小的盲旋转评估密钥，比FHEW/AP算法小约89.8倍，比TFHE/GINX算法小约2.9倍。此外，我们的自举算法在笔记本电脑上可以在112毫秒内完成，比FHEW/AP算法快约3.2倍，比TFHE/GINX算法快约2.1倍。对于高斯分布等大密钥分布，还可以进行更多改进。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_1](https://doi.org/10.1007/978-3-031-38551-3_1)
## HERMES: Efficient Ring Packing Using MLWE Ciphertexts and Application to Transciphering.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#hermes-efficient-ring-packing-using-mlwe-ciphertexts-and-application-to-transciphering) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#hermes-efficient-ring-packing-using-mlwe-ciphertexts-and-application-to-transciphering)**
### 作者
* Youngjin Bae, CryptoLab Inc., Seoul, Republic of Korea
* Jung Hee Cheon, CryptoLab Inc., Seoul, Republic of Korea
* Jaehyung Kim, CryptoLab Inc., Seoul, Republic of Korea
* Jung Hee Cheon, Seoul National University, Seoul, Republic of Korea
* Jai Hyun Park, Seoul National University, Seoul, Republic of Korea
* Damien Stehlé, CryptoLab Inc., Lyon, France
### 摘要
> 当前大部分完全同态加密（FHE）方案要么基于学习和误差（LWE）问题，要么基于其环变种（RLWE）来存储明文。在FHE方案的同态计算中，当考虑多个消息时，RLWE格式能够提供较高的吞吐量，而当只有少量消息时，LWE格式能够提供较低的延迟。高效的转换可以将每种格式的优势结合起来。然而，将LWE格式转换为RLWE格式，即所谓的环装填，一直是一个具有挑战性的问题。
> 
> 我们提出了一种高效的FHE环装填解决方案。本工作的主要改进有两方面。首先，我们使用引导和环切换技术加速了现有的环装填方法，实现了实用的运行时间。其次，我们提出了一种新的高效环装填方法HERMES，通过使用模LWE（MLWE）格式的密文，也可以减少内存的使用。为此，我们将LWE和RLWE格式的工具推广到MLWE格式上。
> 
> 在单线程实现中，HERMES将\(2^{15}\)个LWE格式密文装填为一个RLWE格式密文需耗时10.2秒。与FHE的最先进环装填方法PEGASUS [S & P'21]相比，其能够以更高的吞吐量41倍，PEGASUS在相似的同态容量下装填\(2^{12}\)个LWE密文需耗时51.7秒。我们还通过使用HERMES从LWE对称加密转移到CKKS完全同态加密的转密过程展示了HERMES的效率，明显优于最近的提议HERA [Asiacrypt'21]和Rubato [Eurocrypt'22]。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_2](https://doi.org/10.1007/978-3-031-38551-3_2)
## Accelerating HE Operations from Key Decomposition Technique.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#accelerating-he-operations-from-key-decomposition-technique) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#accelerating-he-operations-from-key-decomposition-technique)**
### 作者
* Miran Kim, Department of Mathematics and Research Institute for Convergence of Basic Science and Hanyang Institute of Bioscience and Biotechnology, Hanyang University, Seoul, Republic of Korea
* Dongwon Lee, Seoul National University, Seoul, Republic of Korea
* Jinyeong Seo, Seoul National University, Seoul, Republic of Korea
* Yongsoo Song, Seoul National University, Seoul, Republic of Korea
### 摘要
> 基于格的同态加密（HE）方案是基于噪声加密技术的，其中明文为了安全性而被随机噪声掩盖。最新的进阶HE方案依靠分解技术来管理噪声的增长，它将一个密文条目转换为短向量，然后与评估密钥进行乘法运算。在本文之前的研究中，分解过程被证明是最耗时的部分，因为它需要在基本环上进行离散傅里叶变换（DFT），以实现高效的多项式运算。本文中，我们将大模数下的昂贵分解操作替换为在具有小界限整数环上的相对廉价操作。值得注意的是，DFT的成本随着密文级别从二次降低到线性，而无需额外噪声增长。我们通过将该方法应用于密钥切换过程来展示我们方法的影响。实验结果表明，当基本环的维度为\(2^{15}\)或\(2^{16}\)时，新的密钥切换方法比先前的方法速度提升了1.2-2.3倍或2.1-3.3倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_3](https://doi.org/10.1007/978-3-031-38551-3_3)
## MacORAMa: Optimal Oblivious RAM with Integrity.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#macorama-optimal-oblivious-ram-with-integrity) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#macorama-optimal-oblivious-ram-with-integrity)**
### 作者
* Surya Mathialagan, MIT, Cambridge, MA, 02139, USA
* Neekon Vafa, MIT, Cambridge, MA, 02139, USA
### 摘要
> Oblivious RAM（ORAM）由Goldreich和Ostrovsky（J. ACM‘96）引入，它是一种允许客户端在不通过访问模式透露任何信息的情况下，在外部数据库上执行RAM计算的原语。对于大小为N的数据库，众所周知的下界表明，在假设O（1）客户端存储的情况下，RAM查询数量的乘法开销需要\(\varOmega (\log N)\)。一系列长期的研究最终导致了Asharov，Komargodski，Lin和Shi（CRYPTO‘21）的渐近最优构造，其最坏情况开销为\(O(\log N)\)，客户端存储为O（1）。然而，众所周知，这种最佳ORAM只在诚实但好奇的情况下是安全的，其中允许敌对者观察访问模式，但不能修改数据库的内容。在恶意设置中，敌对者还允许篡改数据库，这种构造和许多其他构造实际上变得不安全。
> 
> 在这项工作中，我们构建了第一个最坏情况下\（O(\log N)\)开销和O（1）客户端存储的恶意安全ORAM，假设单向函数也是必要的。根据\(\varOmega (\log N)\)的下界，我们的构造是渐近最优的。为了实现这种开销，我们开发了技术来复杂地交错在线和离线内存检查以实现恶意安全。此外，我们通过展示从诚实但好奇到恶意安全的通用开销保留编译器的不可能性，为正面结果提供了补充，除非在内存检查方面取得突破。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_4](https://doi.org/10.1007/978-3-031-38551-3_4)
## Tri-State Circuits - A Circuit Model that Captures RAM.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#tri-state-circuits-a-circuit-model-that-captures-ram) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#tri-state-circuits-a-circuit-model-that-captures-ram)**
### 作者
* David Heath, UIUC, Champaign, USA
* Vladimir Kolesnikov, Georgia Tech, Atlanta, Georgia
* Rafail Ostrovsky, UCLA, Los Angeles, USA
### 摘要
> 我们介绍三态电路（TSCs）。据我们所知，TSCs是一个自然的计算模型，理论家们尚未考虑过。该模型具有简单性和强大性的令人惊讶的组合特点。TSCs的简单之处在于它们只允许三种电线值（0、1和未定义的-\(\mathcal {Z}\)），以及三种类型的二输入门；它们的强大之处在于静态放置的门会在其输入变得定义时被迫立即激活（执行），这意味着执行顺序取决于输入。这种行为足以高效地评估RAM程序。
> 
> 我们构建了一个能够模拟任意RAM程序中的T步并且只有\(O(T \cdot \log ^3 T \cdot \log \log T)\)个门的TSC。与将RAM转换为布尔电路相比，这个结果非常显著，因为在最佳方法中，每次访问都需要扫描整个存储器，导致二次成本。
> 
> 我们将TSCs与混淆电路（Garbled Circuits, GC）联系起来。TSCs对混淆的优势捕捉得比布尔电路更好，提供了一个更富表达力的计算模型，而又几乎不改变每个门的成本。
> 
> 作为一个重要的应用，我们构建了身份认证的混淆RAM（Authenticated Garbled RAM, GRAM），实现了RAM程序的常轮恶意安全2PC。设\(\lambda\)为安全参数。我们将身份认证的混淆推广到TSCs；通过简单地嵌入基于TSC的RAM，我们获得了成本为\(O(T \cdot \log ^3 T \cdot \log \log T \cdot \lambda )\)的身份认证GRAM，优于以前的所有工作，包括先前的半诚实GRAM。
> 
> 我们还提供了一种来自单向函数（OWF）的半诚实的TSC混淆方案。这导致了基于OWF的成本为\(O(T \cdot \log ^3 T \cdot \log \log T \cdot \lambda )\)的GRAM，相比最佳的基于OWF的GRAM，性能提高了至少一个因子\(\lambda\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_5](https://doi.org/10.1007/978-3-031-38551-3_5)
## Limits of Breach-Resistant and Snapshot-Oblivious RAMs.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#limits-of-breach-resistant-and-snapshot-oblivious-rams) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#limits-of-breach-resistant-and-snapshot-oblivious-rams)**
### 作者
* Giuseppe Persiano, Università di Salerno, Salerno, Italy
* Giuseppe Persiano, Google, New York, USA
* Kevin Yeo, Google and Columbia University, New York, USA
### 摘要
> 混淆式随机访问内存（Oblivious RAMs，ORAMs）是一种重要的密码学基元，可以在将数据外包给一个潜在不受信任的服务器的同时隐藏对数据的访问模式。即使面对持久性敌手查看所有操作记录和结果内存内容的情况下，ORAMs 也能提供强大的保证。不幸的是，针对持久性敌手的强大保证牺牲了效率，因为已知 ORAMs 至少需要 \(\varOmega (\log n)\) 的开销。
> 
> 为了获得更快的构建方式，之前的研究考虑了针对快照敌手的安全性，这些敌手只能有限地访问操作记录和内存。我们考虑了能够执行 s 次数据泄露并查看 \(\ell\) 个总查询的\((s,\ell )\)-快照敌手。Du、Genkin 和 Grubbs [Crypto’22] 有一个有希望的成果，他们提出了一种具有 \(O(\log \ell)\) 性能开销的 ORAM 构建方式，用于防范来自单次泄露的 ((1, \(\ell\)) -快照敌手)，该敌手在单次泄露中由连续操作的 \(\ell\) 个传输。对于较小的 \(\ell\) 值，这种构建方式胜过标准的 ORAMs。
> 
> 在本研究中，我们所关注的是是否可以进一步推动这种构建方式超越单次泄露。遗憾的是，我们证明了防范稍微更强的快照敌手变得困难。作为我们的主要结果，我们提出了针对 (3, 1)-快照敌手保护任何 ORAM 的一个 \(\varOmega(\log n)\) 下限，该敌手执行三次泄露，并且只能查看一次查询的传输记录。换句话说，即使敌手在两次泄露期间仅观察内存内容，并在另一次泄露期间只能查看一次查询传输记录，我们的下限依然成立。因此，我们惊讶地发现防范具有三次数据泄露的快照敌手与防范持久性敌手一样困难。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_6](https://doi.org/10.1007/978-3-031-38551-3_6)
## Cuckoo Hashing in Cryptography: Optimal Parameters, Robustness and Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#cuckoo-hashing-in-cryptography-optimal-parameters-robustness-and-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#cuckoo-hashing-in-cryptography-optimal-parameters-robustness-and-applications)**
### 作者
* Kevin Yeo, Google, New York City, USA
* Kevin Yeo, Columbia University, New York City, USA
### 摘要
> 布谷鸟哈希是一种强大的原语，可以利用小空间进行高效查询保存项目。在高层次上，布谷鸟哈希将n个项目映射到最多\(\ell \)个项目的b个条目中，以便将每个项目放入k个随机选择的条目之一。此外，还有一个溢出储存区，最多可以存储s个项目。许多密码原语都依赖于布谷鸟哈希来私密地嵌入和查询数据，因此在构建布谷鸟哈希表时，直接关系到隐私保证，必须确保小的失败概率。
> 
> 作为我们的主要结果，我们提出了一种使用更多哈希函数的布谷鸟哈希构造更高效的查询。对于构造失败概率\(\epsilon \)，我们方案的查询开销是\(O(1 + \sqrt{\log (1/\epsilon )/\log n})\)。对于任何目标失败概率\(\epsilon\)，我们的方案的查询开销比先前的工作要小二次。我们还证明了与我们的构造相匹配的下限。我们的改进来自对小型项目集的布谷鸟哈希失败局部性的新理解。
> 
> 我们还开始研究输入集可能以了解哈希函数知识的稳固布谷鸟哈希。我们提出了一种使用更多哈希函数的布谷鸟哈希方案，其查询开销为\(\tilde{O}(\log \lambda )\)，可以抵抗\(\textsf{poly}(\lambda )\)敌手。此外，我们提出了下限，表明该构造是紧致的，并且除了\(\varOmega (n)\)查询开销之外，延伸以前的大储存区或条目的方法都不能获得稳固性。
> 
> 作为我们结果的应用，我们获得了批量编码和PIR的改进构造。特别是，我们提出了最有效的显式批量编码和黑盒降低从单查询PIR到批量PIR。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_7](https://doi.org/10.1007/978-3-031-38551-3_7)
## The Pseudorandom Oracle Model and Ideal Obfuscation.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#the-pseudorandom-oracle-model-and-ideal-obfuscation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#the-pseudorandom-oracle-model-and-ideal-obfuscation)**
### 作者
* Aayush Jain, Carnegie Mellon University, Pittsburgh, USA
* Huijia Lin, University of Washington, Seattle, USA
* Ji Luo, University of Washington, Seattle, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Daniel Wichs, NTT Research, Sunnyvale, USA
### 摘要
> 我们介绍了一种新的哈希函数理想化模型，我们称之为伪随机预言（Pr O）模型。从直觉上讲，它允许我们以非黑盒方式模拟使用理想哈希函数代码的加密系统。形式上，我们通过伪随机函数（PRF）家族和理想预言的组合来建模哈希函数。用户可以通过选择PRF密钥k并使用预言将其映射到公共句柄h来初始化哈希函数。给定句柄h和一些输入x，也可以调用预言以用相应的密钥k评估x的PRF。选择PRF密钥k的用户因此具有哈希函数的完整描述，并且可以在非黑盒构造中使用其代码，而仅获得句柄h的对手只能通过预言以黑盒方式访问哈希函数。
> 
> 作为我们的主要结果，我们展示了如何在Pr O模型中从功能加密（FE）开始构建理想混淆，而功能加密又可以基于深受研究的多项式困难假设。相比之下，我们知道理想混淆在基本随机预言模型下无法在任何假设下实现。我们相信我们的结果为以下提供了启发式理由：（1）理想混淆所隐含的大多数自然安全目标可以在现实世界中实现；（2）混淆可以通过FE构造，在多项式安全性损失的情况下。
> 
> 我们还讨论了如何在Pr O模型中解释我们的结果，即使用简单的硬件令牌来构建理想混淆，或者作为将理想混淆从PRF推广到所有函数的方式。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_8](https://doi.org/10.1007/978-3-031-38551-3_8)
## Computational Wiretap Coding from Indistinguishability Obfuscation.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#computational-wiretap-coding-from-indistinguishability-obfuscation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#computational-wiretap-coding-from-indistinguishability-obfuscation)**
### 作者
* Yuval Ishai, Technion, Haifa, Israel
* Aayush Jain, Carnegie Mellon University, Pittsburgh, USA
* Paul Lou, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Mark Zhandry, NTT Research, Sunnyvale, USA
### 摘要
> 一个用于一对噪声信道\((\textsf{ChB},\textsf{ChE})\)的窃听编码方案使得Alice可以通过在\(\textsf{ChB}\)上发送其编码来可靠地向Bob传递消息，同时将消息从窃听者Eve隐藏起来。要实现窃听编码的可行性，一个必要条件是\(\textsf{ChB}\)不是\(\textsf{ChE}\)的退化，也就是Eve无法模拟Bob的视角。虽然在信息论设置中这个条件是不充分的，但是Ishai、Korb、Lou和Sahai (Crypto 2022) 的最新工作表明，在计算设置中，假设使用理想化的混淆技术，非退化条件足够。即便如此，在标准密码学假设下建立类似可行性结果的问题在一些简单特殊情况下仍然未解决。
> 
> 在本文中，我们解决了所有离散无记忆信道的问题，其中\(\textsf{ChB}\)和\(\textsf{ChE}\)的（共同）输入字母表是二进制的，并且输出字母表是任意有限的。我们使用标准（亚指数级）困难假设：也就是那些暗示着不可区分混淆（Jain-Lin-Sahai 2021, 2022）和可逆伪随机生成器的假设。特别是，这证明了当\(\textsf{ChB}\)是一个带有交叉概率p的二进制对称信道，且\(\textsf{ChE}\)是一个带有删除概率e的二进制抹除信道时，计算窃听编码的可行性成立，其中\(e>2p\)。
> 
> 在信息论方面，我们的结果建立在一种新的用于对二进制输入信道进行退化建模的多面体表征上，这可能具有独立的研究价值。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_9](https://doi.org/10.1007/978-3-031-38551-3_9)
## On Optimal Tightness for Key Exchange with Full Forward Secrecy via Key Confirmation.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#on-optimal-tightness-for-key-exchange-with-full-forward-secrecy-via-key-confirmation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#on-optimal-tightness-for-key-exchange-with-full-forward-secrecy-via-key-confirmation)**
### 作者
* Kai Gellert, University of Wuppertal, Wuppertal, Germany
* Tibor Jager, University of Wuppertal, Wuppertal, Germany
* Kristian Gjøsteen, Norwegian University of Science and Technology, Trondheim, Norway
* Håkon Jacobsen, Thales Norway, Oslo, Norway
* Håkon Jacobsen, University of Oslo, Oslo, Norway
### 摘要
> 用于构建具有完全前向保密性（和明确身份验证）的密钥交换协议的标准范例，是在只具有弱前向保密性（和隐式身份验证）的基础协议上添加密钥确认消息。令人惊讶的是，我们通过一个无法实现的结果显示，这个简单的策略必须在许多自然协议的参与方数量中产生线性的紧密性损失。这包括Krawczyk的HMQV协议（CRYPTO 2005）和Cohn-Gordon等人的协议（CRYPTO 2019）。
> 
> Cohn-Gordon等人给出了一个非常有效的，具有线性安全损失的弱前向保密的基础协议，并显示这是对某些约束的最优。然而，他们也声明，通过添加密钥确认消息，可以在不增加任何额外损失的情况下实现完全前向保密。我们的无法实现的结果反驳了他们的声明，证明他们的方法实际上有全面的二次损失。
> 
> 受此困境的启发，我们寻求通过使用不同的证明策略来恢复Cohn-Gordon等人原有的线性损失声明。具体来说，我们首先把目标放在弱前向保密的基础协议上，去选择性安全概念，该概念中，敌方必须坚持一个它无法揭示的长期密钥。这允许紧密的降低，而不是线性损失的降低。接下来，我们展示该协议可以通过使用具有线性紧密性损失的密钥确认消息来升级到完全前向保密，即使是从较弱的选择性安全概念开始。因此，我们的方式产生了一种完全前向保密协议的总体紧密性损失，只是线性的，如最初所声明的那样。最后，我们验证了Cohn-Gordon等人的基础协议确实可以被严格选择性安全地证明。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_10](https://doi.org/10.1007/978-3-031-38551-3_10)
## Security Analysis of the WhatsApp End-to-End Encrypted Backup Protocol.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#security-analysis-of-the-whatsapp-end-to-end-encrypted-backup-protocol) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#security-analysis-of-the-whatsapp-end-to-end-encrypted-backup-protocol)**
### 作者
* Gareth T. Davies, Bergische Universität Wuppertal, Wuppertal, Germany
* Kai Gellert, Bergische Universität Wuppertal, Wuppertal, Germany
* Tobias Handirk, Bergische Universität Wuppertal, Wuppertal, Germany
* Máté Horváth, Bergische Universität Wuppertal, Wuppertal, Germany
* Tibor Jager, Bergische Universität Wuppertal, Wuppertal, Germany
* Sebastian Faller, IBM Research Europe – Zurich, Rüschlikon, Switzerland
* Julia Hesse, IBM Research Europe – Zurich, Rüschlikon, Switzerland
* Sebastian Faller, ETH Zurich, Zürich, Switzerland
### 摘要
> WhatsApp是一种被数十亿人使用的端到端加密（E2EE）消息服务。2021年末，WhatsApp推出了一种新的聊天历史备份协议。E2EE WhatsApp备份协议（WBP）允许用户使用密码恢复他们的聊天历史，而WhatsApp本身则对实际加密密钥一无所知。WBP基于当前正在标准化的基于密码的密钥交换OPAQUE框架进行构建。
> 
> 尽管WBP的设计和审计工作已经付出了相当大的努力，但是协议设计的复杂性以及对其构建模块现有安全分析的缺陷使得我们很难理解WBP所提供的实际安全保证。
> 
> 在这项工作中，我们首次对WBP进行了形式化的安全性分析。我们在通用可组合（UC）框架下的分析确认了WBP对用户的聊天历史和密码提供了强大的保护。同时，我们的分析还显示，在某些条件下，一个被损坏的服务器可以比之前的分析建议更多地猜测密码。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_11](https://doi.org/10.1007/978-3-031-38551-3_11)
## On Active Attack Detection in Messaging with Immediate Decryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#on-active-attack-detection-in-messaging-with-immediate-decryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#on-active-attack-detection-in-messaging-with-immediate-decryption)**
### 作者
* Khashayar Barooti, EPFL, Lausanne, Switzerland
* Daniel Collins, EPFL, Lausanne, Switzerland
* Simone Colombo, EPFL, Lausanne, Switzerland
* Loïs Huguenin-Dumittan, EPFL, Lausanne, Switzerland
* Serge Vaudenay, EPFL, Lausanne, Switzerland
### 摘要
> 广泛使用的Signal协议通过向前安全（保护过去的消息）和事后安全（恢复安全）提供了对状态暴露攻击的保护。 它支持立即解密，允许在协议级别重新排序或删除消息而不影响正确性。 在这项工作中，我们考虑了具有立即解密功能的安全消息的强有力主动攻击检测，在某些条件下，各方能够立即检测到主动攻击。我们首先考虑带内主动攻击检测，在这种情况下，已经被主动损害但仍能向其合作伙伴发送单个消息的参与者可以检测到损害。我们提出了两种互补的概念来捕获安全性，并提出了一个编译器，该编译器相对于这两个概念提供安全性。我们的概念概括了现有的工作（RECOVER安全），该工作仅支持有序传递消息。我们还通过考虑通过带外，经过身份验证的通道进行通信来研究相关的带外攻击检测问题，并提出了类似的安全概念。我们证明，在每个设置中，我们的两种概念中的一种都会在发送的消息数量和安全参数中施加线性通信开销，使用信息理论论证。这意味着每条消息必须信息理论上包含所有先前的消息，并且我们的构造，本质上将整个消息历史附加到每条新消息中，是渐近最优的。然后，我们探讨了规避这一下限的方法，并突出了与立即解密兼容的实用主动攻击检测的可行性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_12](https://doi.org/10.1007/978-3-031-38551-3_12)
## Fork-Resilient Continuous Group Key Agreement.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#fork-resilient-continuous-group-key-agreement) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#fork-resilient-continuous-group-key-agreement)**
### 作者
* Joël Alwen, AWS-Wickr, Seattle, USA
* Marta Mularczyk, AWS-Wickr, Seattle, USA
* Yiannis Tselekounis, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 连续群密钥协商（Continuous Group Key Agreement，CGKA）允许不断变化的客户群体就一系列群密钥达成一致。CGKA的一个重要应用是可扩展的端到端加密群组消息传递（scalable end-to-end (E2E) encrypted group messaging）。阻止在不可靠的基础设施上使用CGKA的主要问题是所谓的分岔（forks）。当群组成员对群组历史（因而对当前状态）存在不同观点时，就会发生分岔，例如由于网络或服务器失败。一旦通信通道恢复，成员通过再次达成对群组状态的一致来解决分岔。如今的CGKA协议使得分岔解决变得困难，因为自然的分岔解决策略似乎与协议强制实施的群组状态一致性和前向保密性相冲突。与CGKA相比，支持分岔解决的安全群组消息传递协议的可扩展性要差得多。
> 
> 在这项工作中，我们为基于不可靠基础设施的实际可扩展的端到端消息传递铺平了道路。为此，我们将CGKA加以推广，提出了强韧分岔连续群密钥协商（Fork Resilient-CGKA，FR-CGKA），它允许客户端处理更多种类的乱序网络流量。这对于许多自然的分岔解决过程非常重要，因为它们在某种程度上是基于重新播放丢失的流量。接下来，我们提供了两个FR-CGKA构造：一个是基于MLS消息传递标准的实用构造，另一个是最优安全的构造（虽然仅具有理论效率）。为了进一步帮助解决分岔问题，我们引入了一个简单的新抽象来描述客户端的本地协议状态。该抽象描述了与自然分岔解决相关的所有信息，使得更高层次的分岔解决过程更容易使用和推理。我们定义了FR-CGKA的黑盒扩展，用于维护客户端内部状态的这种描述。最后，作为概念验证，我们提供了一个基本的分岔解决协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_13](https://doi.org/10.1007/978-3-031-38551-3_13)
## Streaming Functional Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#streaming-functional-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#streaming-functional-encryption)**
### 作者
* Jiaxin Guan, Princeton University, Princeton, USA
* Alexis Korb, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
### 摘要
> 我们开始研究流式功能加密（Streaming Functional Encryption，sFE），该技术适用于以流式方式接收数据，并在数据流到达时进行迭代计算的场景。与标准的功能加密（Functional Encryption，FE）方案不同，sFE方案具有以下特点：（1）在加密时不需要知道完整的数据集；（2）可以根据输入的前缀进行部分解密。具体而言，在sFE方案中，我们可以按顺序加密数据流中的每个数据点\(x_i\)，而不需要等待所有n个值。然后，我们可以为流式函数生成函数密钥，这些函数是有状态的函数，接受消息\(x_i\)和状态\(\textsf{st}_i\)作为输入，并输出值\(y_i\)和下一个状态\(\textsf{st}_{i+1}\)。对于任意\(k \le n\)，拥有流式函数f的用户可以仅通过前k个元素\(x_1\ldots x_k\)的密文来学习前k个输出值\(y_1\ldots y_k\)，其中\((y_i, \textsf{st}_{i+1}) = f(x_i, \textsf{st}_i)\)，且\(\textsf{st}_1 = \bot\)。
> 
> 本文介绍了sFE的概念，并展示了如何从FE构造它。特别地，我们展示了如何通过紧凑、安全的FE方案实现\(\mathsf {P/Poly}\)的安全sFE方案。我们的sFE的安全性定义类似于标准FE的安全性，但要求在挑战密文查询之前进行所有函数查询。此外，通过将我们的结果与Jain、Lin和Sahai（STOC, 2022）的FE构造相结合，我们展示了如何基于常见的假设的多项式困难性实现\(\mathsf {P/Poly}\)的安全sFE方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_14](https://doi.org/10.1007/978-3-031-38551-3_14)
## Attribute-Based Multi-input FE (and More) for Attribute-Weighted Sums.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#attribute-based-multi-input-fe-and-more-for-attribute-weighted-sums) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#attribute-based-multi-input-fe-and-more-for-attribute-weighted-sums)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Anshu Yadav, IIT Madras, Chennai, India
* Junichi Tomida, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 最近，Abdalla、Gong和Wee（Crypto 2020）提供了第一个针对属性加权和求和（AWS）的功能性加密方案。其中，加密以N（无限制）个属性-值对\(\{\textbf{x}_i, \textbf{z}_i\}_{i \in [N]}\)作为输入，其中\(\textbf{x}_i\)是公开的，\(\textbf{z}_i\)是私密的。秘密密钥与一个算术分支程序f相关联，解密返回加权和\({\sum }_{{i \in [N]}} f(\textbf{x}_i)^\top \textbf{z}_i\)，不泄漏关于\(\textbf{z}_i\)的任何额外信息。
> 
> 我们将AWS的功能扩展到更具挑战性的多方设定中，并提供了支持AWS的属性基多输入加密（MIFE）的首个构造。对于\(i \in [n]\)，加密者i可以选择一个属性\(\textbf{y}_i\)，以及与之相关的AWS输入\(\{\textbf{x}_{i,j}, \textbf{z}_{i,j}\}\)，其中\(j \in [N_i]\)，且\(N_i\)是无限制的。密钥生成器可以选择一个访问控制策略\(g_i\)以及其AWS函数\(h_i\)，用于每个\(i \in [n]\)，解密者可以计算...
> 
> 此前，仅有内积功能的属性基MIFE得到了研究（Abdalla等人，Asiacrypt 2020），而且此外，\(\textbf{y}_i\)在设置期间需要被固定，并且在给定槽中对所有密文保持不变。
> 
> 我们基于算术分支程序（ABP）表示的断言的连词提供了属性基MIFE，这也暗示了最近由Agrawal、Yadav和Yamada（Crypto 2022）以及Francati、Friolo、Malavolta和Venturi（Eurocrypt 2023）研究的多输入属性基加密（MIABE）概念。
> 
> 同时，我们还提供了AWS功能的多客户端加密（MCFE）\(^3\)和动态分散加密（DDFE）的首个构造。先前已知的最佳MCFE和DDFE方案是针对内积的（Chotard等人，ePrint 2018；Abdalla、Benhamouda和Gay，Asiacrypt 2019；以及Chotard等人，Crypto 2020）。
> 
> 我们的构造基于配对运算，并在选择性安全下证明了矩阵DDH假设。(\(^3\) 文献中考虑了两种称为MCFE的概念，其中一种比另一种更严格。较强的概念意味着MIFE，而较弱的概念则没有。在这里，我们指的是较强的概念，使得MCFE成为MIFE的严格推广。)

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_15](https://doi.org/10.1007/978-3-031-38551-3_15)
## How to Use (Plain) Witness Encryption: Registered ABE, Flexible Broadcast, and More.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#how-to-use-plain-witness-encryption-registered-abe-flexible-broadcast-and-more) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#how-to-use-plain-witness-encryption-registered-abe-flexible-broadcast-and-more)**
### 作者
* Cody Freitag, Boston University, Boston, USA
* Brent Waters, UT Austin, Austin, USA
* David J. Wu, UT Austin, Austin, USA
* Brent Waters, NTT Research, Sunnyvale, USA
### 摘要
> 证人加密是公钥加密的一般化，其中公钥可以是任何NP语句x，相关的解密密钥是x的任何见证w。虽然早期的证人加密构造依赖于多线性映射和不可区分混淆（iO），但最近的作品提供了直接的证人加密构造，比iO更高效（并且也不太可能产生iO）。受这一进展的推动，我们重新审视使用证人加密来实现以前只在“混淆奇怪世界”中已知的先进加密原语的可能性。
> 
> 在这项工作中，我们从普通的证人加密（结合学习与错误假设）中给出了新的无信托加密系统构造：（1）灵活的广播加密（一种广播加密方案，用户选择自己的秘密密钥，用户可以加密到任意一组公钥）；和（2）注册属性基加密（一个系统，其中用户选择自己的密钥，然后向确定性透明密钥管理器注册其公钥和一组属性）。以前只有通过iO才知道这两个原语。我们还展示了如何使用我们的技术来在随机预言机模型中获得最佳广播加密方案。
> 
> 我们构建的底层技术是一种新颖的利用证人加密的技术，基于我们称之为函数绑定哈希函数的新原语。而某处具有统计约束力的哈希函数将摘要统计绑定到输入的少数位，函数绑定哈希函数则将摘要统计绑定到输入的函数输出上。正如我们在这项工作中展示的那样，函数绑定哈希函数为我们提供了利用普通证人加密的新方式，并将其用作先进密码原语的基础。最后，我们展示了如何通过级别同态加密构建块函数的析取类别的函数绑定哈希函数；这与证人加密结合起来形成了我们的主要结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_16](https://doi.org/10.1007/978-3-031-38551-3_16)
## Constant Input Attribute Based (and Predicate) Encryption from Evasive and Tensor LWE.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#constant-input-attribute-based-and-predicate-encryption-from-evasive-and-tensor-lwe) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#constant-input-attribute-based-and-predicate-encryption-from-evasive-and-tensor-lwe)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Mélissa Rossi, ANSSI, Paris, France
* Anshu Yadav, IIT Madras, Chennai, India
* Shota Yamada, AIST, Tokyo, Japan
### 摘要
> 在后量子时代，从标准难题假设中构建诸如混淆或广播加密等先进的密码原语是一个重要的研究领域，尽管付出了大量努力，但取得的成功有限。因此，寻找在这个领域中新的、简单陈述的假设，以填补这一空白，变得非常重要。Wee（Eurocrypt'22）最近取得了一项重要进展，他从格中确定了两个新的假设，即回避性LWE和张量LWE，并利用它们构建了具有最佳参数的广播加密和密文策略属性基于加密。独立地，Tsabary提出了一个类似的假设，并用它来构建见证加密（Crypto'22）。在Wee的工作之后，Vaikuntanathan，Wee和Wichs（Asiacrypt'22）独立地提供了一种见证加密的构造方法。
> 
> 在这项工作中，我们通过提供首个从回避性LWE构造多输入属性基加密（miABE）来推进这一研究领域，该构造支持任意常数化函数类NC₁。我们的构造可以扩展为支持函数类P，方法是使用回避性和张量化LWE的适当强化。具体而言，我们的构造支持k个加密者，其中k是任意常数，每个加密者使用主秘密密钥msk对其输入（xi，mi）进行编码，密钥生成器为函数f∈NC₁计算密钥skf，解密者只能在f(x₁,...,xk)=1的情况下恢复(m₁,...,mk)。已知的仅适用于NC₁的miABE的构造方法由Agrawal，Yadav和Yamada（Crypto'22）在通用群模型（或使用非标准知识假设）中依赖于配对。此外，目前尚不清楚如何使用这种方法超越二元性。
> 
> 通过使用Agrawal，Yadav和Yamada（Crypto'22）的编译器，我们的miABE可以升级为相同阶数和函数类的多输入谓词加密。因此，我们通过简单假设推导出了常数阶数谓词和属性基加密的首个构造，适用于广义类别如NC₁或P，并且这些假设可以被推测为后量子安全。在这个过程中，我们展示了张量LWE假设在一个重要的特殊情况下可以简化为标准LWE，这在以前是未知的。这增加了对假设的可行性的信心，可能具有更广泛的兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_17](https://doi.org/10.1007/978-3-031-38551-3_17)
## Correlated Pseudorandomness from the Hardness of Quasi-Abelian Decoding.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#correlated-pseudorandomness-from-the-hardness-of-quasi-abelian-decoding) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#correlated-pseudorandomness-from-the-hardness-of-quasi-abelian-decoding)**
### 作者
* Maxime Bombar, Laboratoire LIX, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Alain Couvreur, Laboratoire LIX, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Maxime Bombar, Inria, Saclay, France
* Alain Couvreur, Inria, Saclay, France
* Clément Ducros, Inria, Saclay, France
* Geoffroy Couteau, CNRS, Paris, France
* Geoffroy Couteau, IRIF, Université Paris Cité, Paris, France
* Clément Ducros, IRIF, Université Paris Cité, Paris, France
### 摘要
> 最近，Boyle等人（CCS 2018年，Crypto 2019年）提出了一个新的范例，展示了伪随机相关生成器（PCG）如何能够通过最小化交互并仅进行本地计算来生成大量有用的相关（伪）随机性，从而产生安全的、无声的两方计算协议。通过可编程的PCG，这一理论可以扩展到N方。之前的研究已经构建了针对类似随机隐含传输的相关性非常高效的（不可编程的）PCG。然而，对于随机隐含线性评估（OLE）以及它在大数域上的推广，情况就没有那么令人满意了。Boyle等人（Crypto 2020年）的最先进工作是为OLE构建可编程的PCG，但是他们的工作存在两个重要的缺点：（1）它只能在大数域上生成OLE；（2）它依赖于相对较新的“可分裂”的环LPN假设，其安全基础不够强大。
> 
> 在本研究中，我们引入了准阿贝尔综合译码问题(QA-SD)，这是一类广义的假设，它推广了已经被广泛接受的准循环综合译码假设，并允许构造新的可编程OLE的PCG，适用于任意域Fq，其中q>2。我们的分析还揭示了Boyle等人(Crypto 2020年)所使用的环LPN假设的安全性。借助我们的新PCG，我们得到了首个高效的N方无声安全计算协议，用于在任意Fq(q>2)上计算一般算术电路。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_18](https://doi.org/10.1007/978-3-031-38551-3_18)
## Expand-Convolute Codes for Pseudorandom Correlation Generators from LPN.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#expand-convolute-codes-for-pseudorandom-correlation-generators-from-lpn) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#expand-convolute-codes-for-pseudorandom-correlation-generators-from-lpn)**
### 作者
* Srinivasan Raghuraman, Visa Research and MIT, Cambridge, USA
* Peter Rindal, Visa Research, Palo Alto, USA
* Titouan Tanguy, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> 伪随机相关生成器（PCG）的最近发展对高效的多方计算协议有着巨大的潜力。在其他相关性中，PCG能够以亚线性通信代价高效生成无意传输（OT）和向量无意线性评估（VOLE），并具有良好的计算开销。这种类型的PCG利用所谓的LPN友好纠错码，即对于大维度来说，该码应具有非常高效的编码和较高的最小距离。
> 
> 我们调查了现有的LPN友好纠错码，并发现一些候选码的安全性较之前所认为的要低。从最近提出的expand-accumulate码开始，我们发现它们对于旨在获得良好具体效率的积极参数而言，实现的[伪]最小距离比猜测的要小。这降低了PCG的安全参数，但实际降低了多少仍不清楚。我们还展示了最近提出的极其高效的silver码的最小距离只有非常小，并导致对结果PCG协议的具体攻击。因此，不应使用silver码。
> 
> 我们引入了一种名为expand-convolute的新型LPN友好码。这些码具有可证明的较高最小距离，并且比适合的替代码（如expand-accumulate）具有更快的编码时间。这些码的主要贡献是引入了卷积步骤，显著增加了最小距离。这反过来允许更有效的参数选择，从而提高了具体性能。特别是，我们观察到在相当的安全级别下，运行时间提高了3倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_19](https://doi.org/10.1007/978-3-031-38551-3_19)
## Correlation Intractability and SNARGs from Sub-exponential DDH.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#correlation-intractability-and-snargs-from-sub-exponential-ddh) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#correlation-intractability-and-snargs-from-sub-exponential-ddh)**
### 作者
* Arka Rai Choudhuri, NTT Research, Sunnyvale, USA
* Sanjam Garg, NTT Research, Sunnyvale, USA
* Sanjam Garg, University of California Berkeley, Berkeley, USA
* Jiaheng Zhang, University of California Berkeley, Berkeley, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Zhengzhong Jin, Massachusets Institute of Technology, Cambridge, USA
### 摘要
> 我们提供了基于子指数Decisional Diffie Hellman (DDH)假设的Batch-\(\textsf{NP}\)和\(\textsf{P}\)的SNARGs构造。我们的方案实现了多对数级别的证明大小。
> 
> 我们通过遵循相关不可解性框架来安全实例化Fiat-Shamir范式，获得了我们的结果。我们的结果核心和独立的关注点是基于子指数DDH的“小输入”乘积关系在\(\textsf{TC}^0\)上可验证的相关不可解性哈希函数的新构造。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_20](https://doi.org/10.1007/978-3-031-38551-3_20)
## Algebraic Reductions of Knowledge.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#algebraic-reductions-of-knowledge) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#algebraic-reductions-of-knowledge)**
### 作者
* Abhiram Kothapalli, Carnegie Mellon University, Pittsburgh, USA
* Bryan Parno, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 我们引入了知识的约简，这是对知识的论证的一种概括，将在一个关系中对证人的知识检查约简为在另一个（更简单的）关系中对证人的知识检查。知识的约简统一了一个不断增长的现代技术类别，并提供了一种组合框架，以模块化地推理复杂的知识论证中的各个步骤。作为一个示例，我们通过将其分解为一系列知识的约简，简化和统一了线性代数陈述的递归论证。为此，我们发展了知识的张量约简，它概括了许多递归论证中常见的核心约简步骤。在知识的张量约简之下是一种新的信息论约简，对于任何模块U，\(U_1\)和\(U_2\)，使得\(U \cong U_1 \otimes U_2\)，将在U中评估一个同态等效为在\(U_1\)中评估一个同态和在\(U_2\)中评估一个同态。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_21](https://doi.org/10.1007/978-3-031-38551-3_21)
## On the Impossibility of Algebraic NIZK in Pairing-Free Groups.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#on-the-impossibility-of-algebraic-nizk-in-pairing-free-groups) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#on-the-impossibility-of-algebraic-nizk-in-pairing-free-groups)**
### 作者
* Emanuele Giunta, IMDEA Software Institute, Madrid, Spain
* Emanuele Giunta, Universidad Politecnica de Madrid, Madrid, Spain
### 摘要
> 非交互式零知识证明（NIZK）允许证明者通过发送仅一个消息而不传递任何其他信息使验证者相信一个陈述是真实的。在CRS模型中，已经提出了许多基于群论假设的实例化方法。一方面，其中一些构造以黑盒方式使用群结构，但依赖配对，例如著名的Groth-Sahai证明系统。另一方面，最近的一系列研究利用配对自由群中的亚指数DDH实现了NIZK，使用了相关难以处理的哈希函数，但以非黑盒方式使用群，以此为代价。
> 
> 迄今为止，没有已知的构造能够同时将其安全性降低到配对自由群问题，并以黑盒方式使用底层群。
> 
> 这确实不是巧合：在本文中，我们证明了对于大类的NIZK，要么依赖于元素表示，以非黑盒方式使用配对自由群，要么将安全性降低到外部难度假设。更具体地讲，我们的不可能性适用于两种不可比较的情况。第一种情况涵盖知识证明（AoK），它证明了在给定单向函数下存在一个原像。第二种情况涵盖了困难子集问题的NIZK（不一定是AoK），涵盖了DDH，决策线性和矩阵-DDH等关系。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_22](https://doi.org/10.1007/978-3-031-38551-3_22)
## A Note on Non-interactive Zero-Knowledge from CDH.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#a-note-on-non-interactive-zero-knowledge-from-cdh) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#a-note-on-non-interactive-zero-knowledge-from-cdh)**
### 作者
* Geoffroy Couteau, Université Paris Cité, CNRS, IRIF, Paris, France
* Abhishek Jain, Johns Hopkins University, Baltimore, MD, USA
* Zhengzhong Jin, MIT, Cambridge, MA, USA
* Willy Quach, Northeastern University, Boston, MA, USA
### 摘要
> 我们构建了非交互式零知识（NIZK）和ZAP证明，用于所有\(\textsf{NP} \)，其中声音性质对无穷多个安全参数成立，并且针对均匀对手假设计算Diffie-Hellman（CDH）假设的亚指数难题。我们还证明了在同时假设CDH和带噪声的学习偶校验（LPN）假设的多项式难度的情况下，存在具有相同性质的NIZK证明。在这两种情况下，CDH假设不需要群配对。
> 
> 无穷次均匀安全是常用的非黑匣子技术的标准副产品，该技术基于对某些基元的（不）安全性进行析取论证。在证明我们的结果的过程中，我们开发了一种新的非黑匣子技术变体，可以提供改进的保证：我们得到了明确的构造（之前的工作通常只得到存在性结果），其中安全性适用于一组相对密集的安全参数（而不仅仅是任意无穷安全参数的集合）。我们证明了我们的技术可以超越我们的主要结果而应用到其他领域。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_23](https://doi.org/10.1007/978-3-031-38551-3_23)
